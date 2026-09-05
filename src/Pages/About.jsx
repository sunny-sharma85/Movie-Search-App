import "./About.css";
import { BiCameraMovie } from "react-icons/bi";
import { FaSearch, FaHeart, FaFilm } from "react-icons/fa";

const About = () => {
  return (
    <main className="about-page">

      <section className="about-hero">
        <BiCameraMovie className="about-logo" />

        <h1>
          About <span>Movie Finder</span>
        </h1>

        <p>
          Discover movies, explore details and find something
          worth watching.
        </p>
      </section>

      <section className="about-content">

        <div className="about-card">
          <FaSearch />
          <h3>Search Movies</h3>
          <p>
            Search for your favourite movies and get results instantly.
          </p>
        </div>

        <div className="about-card">
          <FaFilm />
          <h3>Movie Details</h3>
          <p>
            Explore movie information including ratings, year and more.
          </p>
        </div>

        <div className="about-card">
          <FaHeart />
          <h3>Favorites</h3>
          <p>
            Save the movies you love and access them anytime.
          </p>
        </div>

      </section>

    </main>
  );
};

export default About;