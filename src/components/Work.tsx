import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "Payment / Wallet Backend System",
    category: "Financial Systems",
    tools: "Node.js, Express.js, PostgreSQL, Prisma",
    image: "/images/gemini_project.webp",
    link: "https://github.com/vaibhavnagdeo18/payment-wallet-system",
  },
  {
    title: "ConfigGuardian AI",
    category: "AI-Powered DevOps",
    tools: "React, Node.js, AWS Bedrock, Express.js",
    image: "/images/configguardian.jpg",
    link: "https://github.com/vaibhavnagdeo18/configguardian-ai",
  },
  {
    title: "Architect AI",
    category: "AI Architecture Design",
    tools: "Gemini, Multi-Agent Systems, React",
    image: "/images/multiagent_architecture.webp",
    link: "https://github.com/vaibhavnagdeo18/gemini3hackathon",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-wrapper">
                <WorkImage 
                  image={project.image} 
                  alt={project.title} 
                  link={project.link}
                />
              </div>
              <div className="project-info">
                <div className="project-header">
                  <span className="project-number">0{index + 1}</span>
                  <h4>{project.title}</h4>
                </div>
                <p className="project-category">{project.category}</p>
                <div className="project-tools">
                  <span className="tools-label">Tools & Features</span>
                  <p>{project.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
