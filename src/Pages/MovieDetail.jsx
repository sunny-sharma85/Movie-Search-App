import { useEffect, useState } from "react";
import { Link, useParams , useNavigate} from "react-router-dom";
import { FaStar, FaCalendarAlt, FaPlay } from "react-icons/fa";


import "./MovieDetail.css";

const MovieDetailsPage = () => {
  const navigate=useNavigate()

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


  useEffect(() => {

    const fetchMovieDetails = async () => {

      try {

        setLoading(true);

        // Movie details
        const movieRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );

        const movieData = await movieRes.json();

        setMovie(movieData);


        // Movie videos / trailer
        const videoRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
        );

        const videoData = await videoRes.json();


        const trailerVideo = videoData.results.find(
          (video) =>
            video.type === "Trailer" &&
            video.site === "YouTube"
        );

        setTrailer(trailerVideo || null);

        setError("");

      } catch (error) {

        console.log(error);

        setError("Something went wrong");

      } finally {

        setLoading(false);

      }

    };


    fetchMovieDetails();

  }, [id]);


  if (loading) {
    return (
      <div className="details-message">
        Loading movie...
      </div>
    );
  }


  if (error) {
    return (
      <div className="details-message">
        {error}
      </div>
    );
  }


  return (<>

    <main className="movie-details-page">

      <div className="details-container">


        {/* MOVIE INFO */}
        
        <section className="movie-details-info">

          <div className="details-poster">

            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />

          </div>


          <div className="details-content">

            <h1>
              {movie.title}
            </h1>


            <div className="details-meta">

              <span>
                <FaStar />
                {movie.vote_average?.toFixed(1)}
              </span>


              <span>
                <FaCalendarAlt />
                {movie.release_date?.slice(0, 4)}
              </span>


              <span className="language">
                {movie.original_language?.toUpperCase()}
              </span>

            </div>


            <p className="details-overview">
              {movie.overview}
            </p>


            <div className="details-extra">

              <p>
                <strong>Runtime:</strong>
                {" "}
                {movie.runtime} min
              </p>

              <p>
                <strong>Votes:</strong>
                {" "}
                {movie.vote_count}
              </p>

              <p>
                <strong>Genres:</strong>
                {" "}
                {movie.genres
                  ?.map((genre) => genre.name)
                  .join(", ")}
              </p>

            </div>

          </div>
<div style={{color:"blue"}} className="link" onClick={()=>navigate("/")}>
Back To Home
</div>
        </section>


        {/* TRAILER */}

        <section className="trailer-section">

          <h2>
            <FaPlay />
            Official <span>Trailer</span>
          </h2>


          {trailer ? (

            <div className="trailer-wrapper">

              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={`${movie.title} Trailer`}
                allowFullScreen
              ></iframe>

            </div>

          ) : (

            <p className="no-trailer">
              Trailer not available for this movie.
            </p>

          )}

        </section>

      </div>

    </main>

  
</>
  )
};

export default MovieDetailsPage;