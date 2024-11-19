import React, { useState, useEffect } from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";

function Resume() {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [awards, setAwards] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const [educationRes, experienceRes, awardsRes, skillsRes] =
          await Promise.all([
            fetch(
              process.env.REACT_APP_EDUCATION_API ||
                "https://portfoliobackend-3tzc.onrender.com/api/educations/"
            ),
            fetch(
              process.env.REACT_APP_EXPERIENCE_API ||
                "https://portfoliobackend-3tzc.onrender.com/api/experiences/"
            ),
            fetch(
              process.env.REACT_APP_AWARDS_API ||
                "https://portfoliobackend-3tzc.onrender.com/api/awards/"
            ),
            fetch(
              process.env.REACT_APP_SKILLS_API ||
                "https://portfoliobackend-3tzc.onrender.com/api/skills/"
            ),
          ]);

        const educationData = await educationRes.json();
        const experienceData = await experienceRes.json();
        const awardsData = await awardsRes.json();
        const skillsData = await skillsRes.json();

        if (educationRes.ok) setEducation(educationData);
        else throw new Error("Failed to fetch education data");

        if (experienceRes.ok) setExperience(experienceData);
        else throw new Error("Failed to fetch experience data");

        if (awardsRes.ok) setAwards(awardsData);
        else throw new Error("Failed to fetch awards data");

        if (skillsRes.ok) setSkills(skillsData);
        else throw new Error("Failed to fetch skills data");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  if (error)
    return (
      <div className="text-center text-red-500">
        Error: {error}. Please try again later.
      </div>
    );

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Education, Experience, and Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <Section
            title="Education"
            icon={<AcademicCapIcon className="h-6 w-6 text-blue-500" />}
          >
            {education.length > 0 ? (
              education.map((edu) => (
                <Card
                  key={edu._id}
                  title={edu.courseOrDegree}
                  subtitle={edu.schoolOrUniversity}
                  year={`${edu.admissionYear} - ${edu.graduationYear}`}
                  description={`Grade: ${edu.gradeOrScore}`}
                />
              ))
            ) : (
              <p className="text-gray-500">No education data available.</p>
            )}
          </Section>

          {/* Experience Section */}
          <Section
            title="Experience"
            icon={<BriefcaseIcon className="h-6 w-6 text-blue-500" />}
          >
            {experience.length > 0 ? (
              experience.map((exp) => (
                <Card
                  key={exp._id}
                  title={exp.title}
                  subtitle={exp.companyName}
                  year={`${exp.startDate} - ${exp.endDate}`}
                  description={exp.details}
                />
              ))
            ) : (
              <p className="text-gray-500">No experience data available.</p>
            )}
          </Section>
        </div>

        {/* Awards Section */}
        <div className="mt-12">
          <Section
            title="Awards"
            icon={<TrophyIcon className="h-6 w-6 text-blue-500" />}
          >
            {awards.length > 0 ? (
              awards.map((achievement) => (
                <Card
                  key={achievement._id}
                  title={achievement.title}
                  description={achievement.description}
                />
              ))
            ) : (
              <p className="text-gray-500">No awards data available.</p>
            )}
          </Section>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <Section
            title="Skills"
            icon={<CodeBracketSquareIcon className="h-6 w-6 text-blue-500" />}
          >
            {skills.length > 0 ? (
              skills.map((skill) => (
                <SkillBar
                  key={skill._id}
                  skill={skill.skill}
                  level={skill.level}
                />
              ))
            ) : (
              <p className="text-gray-500">No skills data available.</p>
            )}
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, children }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <div className="grid grid-cols-1 gap-6">{children}</div>
    </div>
  );
}

function Card({ title, subtitle, year, description }) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      {year && <p className="text-sm text-gray-500">{year}</p>}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {subtitle && <p className="text-sm text-gray-700 mt-1">{subtitle}</p>}
      {description && <p className="text-gray-600 mt-3">{description}</p>}
    </div>
  );
}

function SkillBar({ skill, level }) {
  const levelPercentage = (level / 5) * 100;
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill}</h3>
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${levelPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Resume;
