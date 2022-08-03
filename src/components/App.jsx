import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Button from "./Button.jsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/styles.scss"

const App = ()=>{

  useEffect(()=>{
    Aos.init({duration:750,disable:"phone"});
  })

  return(
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Button/>
    </>
  )
}

export default App;