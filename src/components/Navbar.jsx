import React from "react";
import { FaReact } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {
  
  useEffect(() => {

    document.addEventListener("scroll", makeSticky);

    return ()=>{document.removeEventListener("scroll" , makeSticky)}
  }, [])

  function makeSticky() {

    if (window.scrollY > 0) {
      document.getElementsByTagName("nav")[0].classList.add("sticky");
    }
    else {
      document.getElementsByTagName("nav")[0].classList.remove("sticky");
    }
  }

  function hamburgerBtnHandler() {
    document.querySelector(".mobile-list").classList.toggle("opened");

    Array.from(document.getElementsByClassName("bar")).forEach((bar) => {
      bar.classList.toggle("white");
    })

    document.querySelector(".bars").classList.toggle("clicked");
  }


  return (
    <>
      <nav>
        <FaReact className="icon" />

        <ul className="desktop-list">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>

        <ul className="mobile-list">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#skills">my Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </ul>

        <div className="bars" onClick={hamburgerBtnHandler}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;