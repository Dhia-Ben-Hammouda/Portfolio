import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import Skills from "./Skills.jsx";
import "./styles/styles.scss"

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <Skills/>
    </>
  )
}

export default App;