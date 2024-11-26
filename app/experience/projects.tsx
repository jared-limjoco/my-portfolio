import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: "Atlas Crowdsourcing Platform",
    image: "/experience/projects/project1.png",
    desc: "A crowdsourcing platform for my undergraduate thesis. This web application allows crowdworkers to annotate our pre-annotated images and save it for analyzing sidewalk accesibility. It is built using Next.js, the database is hosted on MongoDB, and deployed via Vercel.",
    technologies: ["NextJS", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/jared-limjoco/thesis-site",
    source: "https://hey-im-walkin-here-thesis.vercel.app/",
    role: "Fullstack Developer",
    year: "2024",
  },
  {
    name: "Coffee Shop Ordering Application",
    image: "/experience/projects/project2.png",
    desc: "A project for my Mobile Development Course. This Android application allows users to order coffee from a premium coffee shop. It features account creation, a menu catalog, order history, geolocation-based delivery, and order saving for future reference, built using Kotlin, Google Maps API, and SQLite as the database.",
    technologies: ["Kotlin", "SQLite", "Google API"],
    github: "https://github.com/donnielle-andres/MOBDEVE-MCO",
    source: "n/a",
    role: "Frontend Developer",
    year: "2023",
  },
  {
    name: "Autoworks Employee Dashboard",
    image: "/experience/projects/project3.png",
    desc: "A project for my Software Engineering Course. This application is for employees to manage operations in a centralized database. It features advanced search, filtering, and access control for secure and efficient record management. Built with React, TypeScript, JavaScript, and Axios for seamless frontend-backend communication.",
    technologies: ["React", "TypeScript", "Javascript", "Axios"],
    github: "https://github.com/JoaquinDelaRosa/CSSWENG-MP",
    source: "https://toptech-autoworks-logger.netlify.app/",
    role: "Frontend Developer & QA Engineer",
    year: "2022",
  },
];

export default function Roles() {
  return (
    <div className="w-full sm:w-2/3 mx-auto bg-zinc-800 p-4 gap-4 rounded-md scrollbar-thin scrollbar-track-rounded overflow-x-hidden overflow-y-scroll max-h-96 shadow-md animate-popFadeIn">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#1D1D20] p-6 rounded-md mb-6 shadow-lg flex flex-col gap-6"
        >
          {/* Project Title */}
          <h2 className="text-2xl font-bold text-indigo-600 text-center sm:text-left">
            {project.name}
          </h2>

          {/* Flex Container */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Left Section: Image */}
            <div className="w-full sm:w-1/2">
              <div className="rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>

            {/* Right Section: Details */}
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              {/* Project Description */}
              <p className="text-neutral-200">{project.desc}</p>

              {/* Project Details */}
              <div>
                <p className="text-sm text-neutral-300">
                  <span className="font-semibold text-white">Role:</span> {project.role}
                </p>
                <p className="text-sm text-neutral-300">
                  <span className="font-semibold text-white">Year:</span> {project.year}
                </p>
              </div>

              {/* Technology List */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-neutral-300 text-zinc-800 px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:bg-indigo-800 duration-200 ease-in-out"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
                {project.source !== "n/a" && project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:bg-green-800 duration-200 ease-in-out"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
