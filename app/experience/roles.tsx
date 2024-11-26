import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects = [
    {
      name: 'Associate Vice President for Socio Civic',
      company: 'La Salle Computer Society',
      year: 'September, 2022 - August, 2024',
      responsibilities: [
        "Spearheaded five (5) Socio Civic projects, such as the Computer Literacy Program (CLiP), where speakers were invited to discuss subjects promoting Computer Literacy to the selected beneficiaries.",
        "Collaborated with external organizations to ensure the success of the committee’s projects.",
        "Helped organize 12 Socio Civic projects, which focus on assisting the mental wellness of the 900+ members of the organization.",
      ],
    },
    {
      name: 'Director for Internal Relations',
      company: 'Computer Studies Government',
      year: 'January, 2023 - January, 2024',
      responsibilities: [
        "Oversaw the operations of the college government’s Internal Relations Committee.",
        "Responsible for overseeing the execution of four (4) projects led by the committee.",
        "Handled the organization's email system, handling over 180 emails per month, and successfully negotiated over 50 partnerships, significantly expanding the organization's network.",
        "Connected the college government to over 20 possible partners within the university for the organization's events such as CCSJourney, a platform that provides CCS students with career-related opportunities and academic tips.",
      ],
    },
    {
      name: 'Junior Software Engineer Intern',
      company: 'Yondu, Inc.',
      year: 'June - August, 2023',
      responsibilities: [
        "Worked with 8 Junior Software Engineers to develop the company's Knowledge Base project, a centralized platform for collecting, organizing, storing, retrieving, and distributing knowledge among the organization's 500+ employees.",
        "Assisted in debugging and resolving over 20 software issues, contributing to the overall stability and reliability of the Knowledge Base application.",
        "Used React.js and Tailwind CSS for front-end development, focusing on creating the user and role functionality for the application.",
      ],
    },
    // Add more roles here as needed
  ];

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index); // Toggle between expanded and collapsed
  };

  return (
    <div className="w-full sm:w-2/3 mx-auto bg-zinc-800 p-4 gap-4 justify-center rounded-md scrollbar-thin scrollbar-track-rounded overflow-x-hidden overflow-y-scroll max-h-96 shadow-md animate-popFadeIn">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#1D1D20] p-4 rounded-md mb-6 shadow-lg flex flex-col "
        >
          {/* Role Title */}
          <h2 className="text-2xl font-bold text-indigo-600 text-center sm:text-left">
            {project.name}
          </h2>

          {/* Role and Year */}
          <div className="flex justify-between items-center">
            <p className="text-neutral-400">{project.company}</p>
            {/* Dropdown Arrow */}
            <button
              onClick={() => handleToggle(index)}
              className="text-white"
            >
              {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <p className="text-neutral-500">{project.year}</p>

          {/* Bullet points for responsibilities */}
          {expanded === index && (
            
            <ul className="text-neutral-400 pl-4 pt-2 list-disc">
              {project.responsibilities.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
