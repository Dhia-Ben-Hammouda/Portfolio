import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import "./styles/styles.scss"

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;