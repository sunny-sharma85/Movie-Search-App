import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Search from "./components/Search"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Loader from "./components/Loader"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
function App() {
  const[darkMode,setDarkMode]=useState(
    localStorage.getItem("theme") !== "light"
  )
  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("dark")
      document.body.classList.remove("light")
      localStorage.setItem("theme","dark")
    }else{
      document.body.classList.add("light")
      document.body.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  },[darkMode])
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
     setTimeout(()=>{
      setLoading(false)
    },2000)
   
  },[])
  if(loading){
    return <Loader/>
    }
  
  return (
    <BrowserRouter>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
<main>
    <Routes> 
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/signup' element={<Signup/>}/>
 <Route path='/login' element={<Login/>}/>





    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
   
   
  )
}

export default App
