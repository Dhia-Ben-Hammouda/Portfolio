import React from "react";
import project1 from "./assets/project1.png";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaSass, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMaterialui, SiTypescript, SiRedux } from "react-icons/si";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="header">
          <h1>Projects</h1>
          <h2>Things i've created</h2>
        </div>
        <div className="wrapper">
          <div className="project">
            <div className="left">
              <img src={project1} alt="" />
            </div>
            <div className="right">
              <h1>Tunisia Net Clone</h1>
              <p>in this project i tried to clone the famous E-commerce
                platform , Tunisia Net . </p>
              <h3>Technologies used :</h3>
              <div>
                <FaHtml5 size="1.8rem" style={{margin:".5rem .2rem" , color:"F25320"}}/>
                <FaCss3Alt size="1.8rem" style={{margin:".5rem .2rem" , color:"279FD5"}}/>
                <FaJs size="1.8rem" style={{margin:".5rem .2rem" , color:"E4D04B"}}/>
                <FaSass size="1.8rem" style={{margin:".5rem .2rem" , color:"CF649A"}}/>
                <FaReact size="1.8rem" style={{margin:".5rem .2rem" , color:"5CCFEE"}}/>
                <FaNodeJs size="1.8rem" style={{margin:".5rem .2rem" , color:"4F9640"}}/>
                <SiMongodb size="1.8rem" style={{margin:".5rem .2rem" , color:"449E45"}}/>
                <SiRedux size="1.8rem" style={{margin:".5rem .2rem" , color:"7248B6"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;