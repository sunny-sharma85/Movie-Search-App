import { useState   ,useEffect} from "react"
import MovieCard from "../components/MovieCard"
import "../components/MovieCard.css"
const Moviedetails = ({search}) => {
    const[movies,setMovies]=useState([])
    const API_KEY=import.meta.env.VITE_TMDB_API_KEY
useEffect(()=>{
    const fetchMovies= async()=>{
      let url;
      if(search){
        url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      } else{
        url=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
      const response= await fetch(url)
      const data= await response.json()
      setMovies(data.results)
    };
      
      
    fetchMovies();

},[search]);


  return (<>
  <div className="movies-container">
    {movies.slice(0,12).map((movie)=>(
      <MovieCard key={movie.id} movie={movie}/>
    ))}
  </div>


  
  
  
  
  </>
      
    
  )
}

export default Moviedetails
