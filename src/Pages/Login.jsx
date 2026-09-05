import "./Login.css";
import { BiCameraMovie } from "react-icons/bi";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
const navigate=useNavigate();
   
    const[login, setLogin] = useState({
        email: "",
        password: ""
      });

   const localStorageData = JSON.parse(localStorage.getItem("formData"));
 const usermatched =login.email === localStorageData.email 
 const passwordmatched = login.password === localStorageData.password
    const[error,setError]=useState("")
    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!login.email || !login.password){
            setError("Please fill in all fields");
            return;
        }
        else if(usermatched && passwordmatched){
            setError("")
            localStorage.setItem("isLoggedIn",true)
            alert("Login SucessFully")
            navigate("/")
        }
        else{
            setError("Invalid email or password");
        }
    }
  return (
    <main className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <BiCameraMovie />

          <h2>
            Movie <span>Finder</span>
          </h2>
        </div>

        <div className="login-header">
          <h1>Welcome Back</h1>

          <p>
            Login to continue exploring your favourite movies.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="login-input">
            <FaEnvelope />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={login.email}
              onChange={handleChange}
            />
          </div>

          <div className="login-input">
            <FaLock />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={handleChange}
            />
          </div>

          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <span>Forgot Password?</span>

          </div>

          <button className="login-btn">
            Login
          </button>
{error&&<p className="error" style={{color:"red"}}>{error}</p>}
        </form>

        <p className="signup-text">
          Don't have an account?
          <Link to={"/signup"}><span> Sign Up</span> </Link>
        </p>

      </div>

    </main>
  );
};

export default Login;