import React from "react";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaSass, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMaterialui , SiRedux } from "react-icons/si";
import { FaEye, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="header" data-aos="fade-down" data-aos-delay="0">
          <h1>Projects</h1>
          <h2>Things i've created</h2>
        </div>
        <div className="wrapper">
          <div className="project" data-aos="fade-down" data-aos-delay="100">
            <div className="left">
              <img src={project1} alt="" />
            </div>
            <div className="right">
              <h1>Tunisia Net Clone</h1>
              <p>in this project i tried to clone the famous E-commerce
                platform , Tunisia Net . I used the following technologies :
              </p>
              <div>
                <FaHtml5 size="1.8rem" style={{ margin: ".5rem .2rem", color: "F25320" }} />
                <FaCss3Alt size="1.8rem" style={{ margin: ".5rem .2rem", color: "279FD5" }} />
                <FaJs size="1.8rem" style={{ margin: ".5rem .2rem", color: "E4D04B" }} />
                <FaSass size="1.8rem" style={{ margin: ".5rem .2rem", color: "CF649A" }} />
                <FaReact size="1.8rem" style={{ margin: ".5rem .2rem", color: "5CCFEE" }} />
                <FaNodeJs size="1.8rem" style={{ margin: ".5rem .2rem", color: "4F9640" }} />
                <SiMongodb size="1.8rem" style={{ margin: ".5rem .2rem", color: "449E45" }} />
                <SiRedux size="1.8rem" style={{ margin: ".5rem .2rem", color: "7248B6" }} />
              </div>
              <div style={{ marginTop: ".75rem" }}>
                <a href="https://github.com/Dhia-Ben-Hamouda/E-Commerce-React-JS" target="_blank" rel="noreferrer">
                  <FaGithub size="2.25rem" color="777" style={{ marginRight: ".5rem" }} />
                </a>
                <a href="https://e-commerce-shop-react-js.vercel.app/" target="_blank" rel="noreferrer">
                  <FaEye size="2.25rem" color="777" style={{ marginLeft: ".5rem" }} />
                </a>
              </div>
            </div>
          </div>
          <div className="project" data-aos="fade-down" data-aos-delay="200">
            <div className="left">
              <img src={project2} alt="" />
            </div>
            <div className="right">
              <h1>Clothes store</h1>
              <p>Clothes store is an E-commerce website which sells clothes . I used the following technologies :
              </p>
              <div>
                <FaHtml5 size="1.8rem" style={{ margin: ".5rem .2rem", color: "F25320" }} />
                <FaCss3Alt size="1.8rem" style={{ margin: ".5rem .2rem", color: "279FD5" }} />
                <FaJs size="1.8rem" style={{ margin: ".5rem .2rem", color: "E4D04B" }} />
                <FaSass size="1.8rem" style={{ margin: ".5rem .2rem", color: "CF649A" }} />
                <FaReact size="1.8rem" style={{ margin: ".5rem .2rem", color: "5CCFEE" }} />
                <FaNodeJs size="1.8rem" style={{ margin: ".5rem .2rem", color: "4F9640" }} />
                <SiMongodb size="1.8rem" style={{ margin: ".5rem .2rem", color: "449E45" }} />
                <SiRedux size="1.8rem" style={{ margin: ".5rem .2rem", color: "7248B6" }} />
              </div>
              <div style={{ marginTop: ".75rem" }}>
                <a href="https://github.com/Dhia-Ben-Hamouda/Clothes-Store-React-JS" target="_blank" rel="noreferrer">
                  <FaGithub size="2.25rem" color="777" style={{ marginRight: ".5rem" }} />
                </a>
                <a href="https://clothes-store-react-js.vercel.app/" target="_blank" rel="noreferrer">
                  <FaEye size="2.25rem" color="777" style={{ marginLeft: ".5rem" }} />
                </a>
              </div>
            </div>
          </div>
          <div className="project" data-aos="fade-down" data-aos-delay="300">
            <div className="left">
              <img src={project2} alt="" />
            </div>
            <div className="right">
              <h1>Clothes store</h1>
              <p>Clothes store is an E-commerce website which sells clothes . I used the following technologies :
              </p>
              <div>
                <FaHtml5 size="1.8rem" style={{ margin: ".5rem .2rem", color: "F25320" }} />
                <FaCss3Alt size="1.8rem" style={{ margin: ".5rem .2rem", color: "279FD5" }} />
                <FaJs size="1.8rem" style={{ margin: ".5rem .2rem", color: "E4D04B" }} />
                <FaSass size="1.8rem" style={{ margin: ".5rem .2rem", color: "CF649A" }} />
                <FaReact size="1.8rem" style={{ margin: ".5rem .2rem", color: "5CCFEE" }} />
                <FaNodeJs size="1.8rem" style={{ margin: ".5rem .2rem", color: "4F9640" }} />
                <SiMongodb size="1.8rem" style={{ margin: ".5rem .2rem", color: "449E45" }} />
                <SiRedux size="1.8rem" style={{ margin: ".5rem .2rem", color: "7248B6" }} />
              </div>
              <div style={{ marginTop: ".75rem" }}>
                <a href="https://github.com/Dhia-Ben-Hamouda/Clothes-Store-React-JS" target="_blank" rel="noreferrer">
                  <FaGithub size="2.25rem" color="777" style={{ marginRight: ".5rem" }} />
                </a>
                <a href="https://clothes-store-react-js.vercel.app/" target="_blank" rel="noreferrer">
                  <FaEye size="2.25rem" color="777" style={{ marginLeft: ".5rem" }} />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Projects;