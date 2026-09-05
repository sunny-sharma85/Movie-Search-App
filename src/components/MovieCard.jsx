import "./MovieCard.css";
import { FaStar, FaHeart } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">

      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <button className="fav-btn">
          <FaHeart />
        </button>

        <div className="rating">
          <FaStar />
          {movie.vote_average?.toFixed(1)}
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <div className="movie-meta">
          <span>{movie.release_date?.slice(0, 4)}</span>
          <span>{movie.original_language?.toUpperCase()}</span>
        </div>

        <p className="movie-overview">
          {movie.overview}
        </p>

        <div className="movie-bottom">
          <span>{movie.vote_count} votes</span>
          <button>View Details</button>
        </div>
      </div>

    </div>
  );
};

export default MovieCard;