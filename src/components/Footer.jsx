import { BiCameraMovie } from "react-icons/bi";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <Link to={"/"}>
        <div className="logo">
          <BiCameraMovie className="logo-icon" />
          <h2>
            Movie <span> Finder</span>
          </h2>
        </div>
</Link>
        <div className="reserved">
          <p>© 2026 Movie Finder. All rights reserved.</p>
        </div>
        <div className="profile-links">
          <Link
            to="https://www.instagram.com/isunnyy.x?igsi=MWhhdWtoZWI4cjRybw%3D%3D&utm_source=qr"
            target="_blank"
          >
            <FaInstagram className="footer-link" />
          </Link>
          <Link to="https://github.com/sunny-sharma85" target="_blank">
            <FaGithub className="footer-link" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/devender-sharma-484a36288"
            target="_blank"
          >
            <FaLinkedin className="footer-link" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
