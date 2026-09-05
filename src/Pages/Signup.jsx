import "./Signup.css";
import { BiCameraMovie } from "react-icons/bi";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate=useNavigate();
   const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const[error,setError]=useState("")
  const formdata=(e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(!formData.username || !formData.email || !formData.password || !formData.confirmPassword){
          setError("Please fill in all fields");
          return;
        }
        if(formData.password.length < 6){
            setError("Password must be at least 6 characters long");
            return;
        }
        if(formData.password !== formData.confirmPassword){
          setError("Passwords do not match");
          return;
        }
        else{
          setError("")
          alert("Form submitted successfully");
          localStorage.setItem("isRegistered",true)
          localStorage.setItem("username",formData.username)
          localStorage.setItem("formData",JSON.stringify(formData))
          navigate("/login")
        }
    }
  return (
    <main className="signup-page">

      <div className="signup-card">

        <div className="signup-logo">
          <BiCameraMovie />
          <h2>
            Movie <span>Finder</span>
          </h2>
        </div>

        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Join Movie Finder and discover your favourite movies.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <FaUser />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={formdata}
            />
          </div>

          <div className="input-group">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={formdata}
            />
          </div>

          <div className="input-group">
            <FaLock />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={formdata}
            />
          </div>

          <div className="input-group">
            <FaLock />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={formdata}
            />
          </div>

          <button className="signup-btn">
            Create Account
          </button>

        </form>
        {error&& <p className="error-message" style={{color:"red"}}>{error}</p>}

        <p className="login-text">
          Already have an account?
         <Link to={"/login"}> <span> Login</span> </Link>
        </p>

      </div>

    </main>
  );
};

export default Signup;