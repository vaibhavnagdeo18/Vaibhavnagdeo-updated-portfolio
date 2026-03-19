import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>Bluestock Fintech</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Optimized full-stack web applications using React.js, Node.js, and
              Firebase, increasing user engagement by 30%. Collaborated with a
              team of 5 to integrate AI-driven systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology in IT</h4>
                <h5>CMR Engineering College</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Currently pursuing core coursework in Data Structures, Algorithms,
              and Software Engineering. Exploring full-stack web and AI-driven
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
