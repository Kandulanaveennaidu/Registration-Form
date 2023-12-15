import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import your CSS file for Home styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-description">
          I'm thrilled to have you here. I am Kandula Naveen, a passionate
          software engineer.
        </p>
        <p className="home-description">
          My journey began at Osmania University, graduating in 2022. Let's
          explore and connect!
        </p>
        <div className="home-buttons">
          <Link to="/about" className="home-btn btn btn-primary">
            About
          </Link>
          <Link to="/contact" className="home-btn btn btn-secondary">
            Contact
          </Link>
          <Link to="/login" className="home-btn btn btn-danger">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
