import { useState   ,useEffect} from "react"
import MovieCard from "../components/MovieCard"
import "../components/MovieCard.css"
const Moviedetails = ({search}) => {
    const[movies,setMovies]=useState([])
    const [error,setError]=useState("")
    const API_KEY=import.meta.env.VITE_TMDB_API_KEY
useEffect(()=>{
    const fetchMovies= async()=>{
      let url;
      try{

      if(search){
        url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      } else{
        url=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
      const response= await fetch(url)
      const data= await response.json()
      if(data.results.length===0){
        setError("No movies found for the search term.")
        return
      }
      else{
        setError("")
              setMovies(data.results)
      }

      }catch(error){
        console.error("Error fetching movies:", error);
      }
    };
      
      
    fetchMovies();

},[search]);


  return (<>
  <div className="movies-container">
    {error && <p className="error" style={{color:"red", marginBottom:"10px"}}>{error}</p>}
    {movies.slice(0,12).map((movie)=>(
      <MovieCard key={movie.id} movie={movie}/>
    ))}
  </div>


  
  
  
  
  </>
      
    
  )
}

export default Moviedetails
