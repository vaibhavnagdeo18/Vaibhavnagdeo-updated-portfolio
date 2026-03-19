import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:vaibhavnagdeo@gmail.com" data-cursor="disable">
                vaibhavnagdeo@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in IT</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/vaibhavnagdeo18"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              aria-label="GitHub Profile"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhavnagdeo/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              aria-label="LinkedIn Profile"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/vaibhav_nagdeo18/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              aria-label="LeetCode Profile"
            >
              LeetCode <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vaibhav Nagdeo</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
