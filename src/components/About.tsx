import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software Engineering student with a strong focus on backend systems and
          scalable application design. Experienced in building production-grade
          systems using Node.js, PostgreSQL, and AWS Bedrock, with hands-on
          implementation of ACID transactions, concurrency control, and
          idempotent APIs. Developed AI-driven systems for real-world risk
          analysis using LLMs.
        </p>
      </div>
    </div>
  );
};

export default About;
