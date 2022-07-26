import React from "react";
import { FaReact } from "react-icons/fa";

const Navbar = ()=>{
  return(
    <>
      <nav>
        <FaReact className="icon"/>

        <ul>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;