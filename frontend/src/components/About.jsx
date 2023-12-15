import { Link } from "react-router-dom";
import "../styles/About.css"; // Import your CSS file for About styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I'm Kandula Naveen, a software engineer passionate about crafting
          innovative solutions.
        </p>
        <p className="about-description">
          My expertise lies in web development, leveraging modern technologies
          to build user-centric applications.
        </p>
        <p className="about-description">
          I have experience working with various frontend and backend
          technologies including React, Node.js, Express, and more.
        </p>
        <p className="about-description">
          Outside of coding, I enjoy exploring new technologies, reading books,
          and playing musical instruments.
        </p>
        <div className="button-container">
          <Link to="/" className="about-btn">
            Back to Home
          </Link>
          <Link to="/contact" className="about-btn">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
