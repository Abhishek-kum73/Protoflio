import React from 'react';

const EducationSection: React.FC = () => (
  <section id="education" className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="section-header">Education</h2>
      <div className="glow-card mb-8">
        <ul className="space-y-6">
          {/* College */}
          <li>
            <div className="flex flex-col">
              <span className="text-terminal-amber font-medium">
                Bachelor of Technology in Computer Science & Engineering
              </span>
              <span className="text-sm text-terminal-green">
                Lovely Professional University, 2022 - 2026
              </span>
              <span className="text-xs text-terminal-purple">
                CGPA: 7.02
              </span>
            </div>
          </li>
          {/* 12th */}
          <li>
            <div className="flex flex-col">
              <span className="text-terminal-amber font-medium">
                Senior Secondary (12th), Science
              </span>
              <span className="text-sm text-terminal-green">
                Patel College, 2020 - 2022
              </span>
              <span className="text-xs text-terminal-purple">
                Percentage: 63%
              </span>
            </div>
          </li>
          {/* 10th */}
          <li>
            <div className="flex flex-col">
              <span className="text-terminal-amber font-medium">
                Secondary (10th)
              </span>
              <span className="text-sm text-terminal-green">
                The Divine Public School, 2016 - 2020
              </span>
              <span className="text-xs text-terminal-purple">
                Percentage: 74%
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default EducationSection; 