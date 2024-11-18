import React from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";

function Resume() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Education and Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <AcademicCapIcon className="h-6 w-6 text-blue-500 mr-2" />
              Education
            </h2>
            <div className="mt-6 space-y-6">
              <EducationItem
                year="2009"
                institution="University of Studies"
                title="UI Design"
                description="Learned the fundamentals of user interface design and modern best practices."
              />
              <EducationItem
                year="2007"
                institution="University of Studies"
                title="Graphic Design"
                description="Studied graphic design principles and visual storytelling."
              />
              <EducationItem
                year="2005"
                institution="University of Studies"
                title="Frontend Development"
                description="Focused on frontend development and responsive design techniques."
              />
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <BriefcaseIcon className="h-6 w-6 text-blue-500 mr-2" />
              Experience
            </h2>
            <div className="mt-6 space-y-6">
              <ExperienceItem
                year="2016 - Current"
                company="Rolling Thunder"
                title="Lead UI/UX Designer"
                description="Designed intuitive and user-friendly interfaces for SaaS platforms."
              />
              <ExperienceItem
                year="2013 - 2018"
                company="Local Accessories"
                title="Senior UI/UX Designer"
                description="Improved the usability of e-commerce websites and applications."
              />
              <ExperienceItem
                year="2011 - 2015"
                company="Sagetheath"
                title="Junior UI/UX Designer"
                description="Created wireframes and prototypes for mobile apps."
              />
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <CheckBadgeIcon className="h-6 w-6 text-blue-500 mr-2" />
            Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <CertificateItem
              title="Psychology of Interaction Design"
              id="Membership ID: 12345"
              date="April 10, 2018"
            />
            <CertificateItem
              title="Advanced Web Development"
              id="Membership ID: 67890"
              date="June 15, 2020"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Design Skills */}
          <SkillsSection
            title="Design Skills"
            skills={[
              { name: "UI/UX Design", level: "95%" },
              { name: "Print Design", level: "75%" },
              { name: "Graphic Design", level: "85%" },
              { name: "Logo Design", level: "50%" },
            ]}
            icon={<PaintBrushIcon className="h-6 w-6 text-blue-500" />}
          />

          {/* Coding Skills */}
          <SkillsSection
            title="Coding Skills"
            skills={[
              { name: "HTML / CSS", level: "100%" },
              { name: "JavaScript", level: "90%" },
              { name: "React", level: "85%" },
              { name: "Node.js", level: "80%" },
            ]}
            icon={<CodeBracketIcon className="h-6 w-6 text-blue-500" />}
          />
        </div>
      </div>
    </div>
  );
}

// Individual Components
function EducationItem({ year, institution, title, description }) {
  return (
    <div className="flex items-start">
      <div className="text-blue-500 font-bold text-lg">{year}</div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700">{institution}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}

function ExperienceItem({ year, company, title, description }) {
  return (
    <div className="flex items-start">
      <div className="text-blue-500 font-bold text-lg">{year}</div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700">{company}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}

function CertificateItem({ title, id, date }) {
  return (
    <div className="p-4 bg-gray-50 shadow rounded-lg border border-gray-200">
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{id}</p>
      <p className="text-sm text-gray-500 mt-1">{date}</p>
    </div>
  );
}

function SkillsSection({ title, skills, icon }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{name}</span>
        <span>{level}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-500 rounded-full"
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
}

export default Resume;
