import "./Adminlogin.css"
import { useState } from "react";
import{useNavigate} from "react-router-dom"
import { BiCameraMovie } from "react-icons/bi";
import { FaUserShield,FaEnvelope,FaLock } from "react-icons/fa";
const Adminlogin = () => {
    const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();
const handleAdminLogin = (e) => {
    e.preventDefault();
    if(!email || !password){
        setError("Please fill in all fields");
        return;
    }
    if(email === adminUsername && password === adminPassword){
        localStorage.setItem("isadmin", true);
        localStorage.setItem("username", email);
        navigate("/admin");
    }else {
        setError("Invalid admin credentials");
    }
}
  return (
     <main className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-logo">
          <BiCameraMovie />

          <h2>
            Movie <span>Finder</span>
          </h2>
        </div>

        <div className="admin-header">
          <FaUserShield className="admin-icon" />

          <h1>Admin Login</h1>

          <p>
            Login to access the Movie Finder dashboard.
          </p>
        </div>

        <form onSubmit={handleAdminLogin}>

          <div className="admin-input">
            <FaEnvelope />

            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="admin-input">
            <FaLock />

            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="admin-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="admin-login-btn"
          >
            Login as Admin
          </button>

        </form>

      </div>

    </main>
    
   
  )
}

export default Adminlogin
