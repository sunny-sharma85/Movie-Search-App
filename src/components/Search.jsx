import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./Search.css"
const Search = ({setSearch }) => {
  const[input,setInput]=useState("")
  const navigate = useNavigate()

  const handleSearch=()=>{
      setSearch(input)
    const isRegsitered = localStorage.getItem("isRegistered")
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if(!isRegsitered){
      alert("Please register first")
      navigate("/signup")
      return;
    }
    if(!isLoggedIn){
      alert("Please login first")
      navigate("/login")
      return;
    }
  }
  return (<>

<section className="search">
  <div className="search-header">
    <h1>Find <span>Movies</span> Watch Trailers.Enjoy Cinema</h1>
    <p>Search For any movie and get details instantly</p>
  </div>
  <div className="search-box">
    <input 
      type="search" 
      name="" 
      id="" 
      placeholder="Search For Movies" 
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
  </div>
  </section>
  </>
  
  )
}

export default Search;
