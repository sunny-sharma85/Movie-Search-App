import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

import { FaSignOutAlt } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
   const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");
const handleLogout = () => {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("formData");
    localStorage.removeItem("username");
          navigate("/signup");
  }
};
  return (
    <nav>
      <Link to={"/"}>
        <div className="logo">
          <BiCameraMovie className="logo-icon" />

          <h2>
            Movie <span>Finder</span>
          </h2>
        </div>
      </Link>

      <div className={isMenuOpen ? "links open" : "links"}>
        <Link className="nav-links" to="/" onClick={() => setIsMenuOpen(false)}>
          <span>Home</span>
        </Link>

        <Link
          className="nav-links"
          to="/about"
          onClick={() => setIsMenuOpen(false)}
        >
          <span>About</span>
        </Link>

        <Link
          className="nav-links"
          to="/signup"
          onClick={() => setIsMenuOpen(false)}
        >
          <span>Signup</span>
        </Link>
      </div>

      <div className="nav-right">
        <div className="user">
          {isLoggedIn && (
            <span>
              Welcome, {username}
              <button
                className="logout-button"
                onClick={handleLogout}
                
              >
                Logout <FaSignOutAlt className="logout" />
              </button>
            </span>
          )}
        </div>

        <div className="dark-mode">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
