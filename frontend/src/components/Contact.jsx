import { Link } from "react-router-dom";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-description">
          Let's get in touch! You can reach out to me through the following
          channels:
        </p>
        <ul className="contact-list">
          <li>
            <i className="bi bi-envelope-fill"></i> Email:
            Kandulanaveennaidu017@gmail.com
          </li>
          <li>
            <i className="bi bi-telephone-fill"></i> Phone: +919705627977
          </li>
          <li>
            <i className="bi bi-linkedin"></i>{" "}
            <a
              href="https://www.linkedin.com/in/kandulanaveen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            <i className="bi bi-github"></i>{" "}
            <a
              href="https://github.com/Kandulanaveennaidu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </li>
          <li>
            <i className="bi bi-code-square"></i>{" "}
            <a
              href="https://leetcode.com/kandulanaveennaidu017/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode Profile
            </a>
          </li>
        </ul>
        <div className="button-container">
          <Link to="/" className="contact-btn btn btn-primary">
            Back to Home
          </Link>
          <Link to="/about" className="contact-btn btn btn-primary">
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
