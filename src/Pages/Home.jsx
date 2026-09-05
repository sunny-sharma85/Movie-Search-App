import Search from "../components/Search"
import "./Home.css"
import Moviedetails from "./Moviedetails"
import { useState } from "react"
const Home = () => {
  const [search,setSearch]=useState("")
  return (
  <>
  <section className="home-image">
<Search  setSearch={setSearch}/>
</section>
<section className="movies-section">
  <div className="movies-heading">
    <h2>Popular <span>Movies</span></h2>
    <p>Explore what's popular right now</p>
  </div>

<Moviedetails search={search}/>
</section>
  </>
  )
}

export default Home
