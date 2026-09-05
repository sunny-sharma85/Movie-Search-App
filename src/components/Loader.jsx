import "./Loader.css";
import { BiCameraMovie } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="loader-screen">
      <BiCameraMovie className="loader-icon" />
      <h2>
        Movie <span>Finder</span>
      </h2>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;