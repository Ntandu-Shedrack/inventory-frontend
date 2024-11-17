import React from "react";

function Resume() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">Left</div>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        Right
      </div>
    </div>
  );
}

export default Resume;
