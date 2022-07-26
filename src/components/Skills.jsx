import React from "react";
import { FaReact , FaHtml5 , FaCss3Alt , FaJs , FaSass , FaNodeJs , FaGitAlt} from "react-icons/fa";
import { SiTailwindcss , SiMongodb , SiSocketdotio , SiRedux , SiMaterialui , SiTypescript} from "react-icons/si";
import mysql from "./assets/mysql.png";
import figma from "./assets/figma.png";

const Skills = ()=>{
  return(
    <section id="skills">
      <div className="container">
        <div className="header">
          <h1>Skills</h1>
          <h2>technologies i've used</h2>
        </div>
        <div className="wrapper">
          <div className="skill">
            <FaHtml5 style={{color:"#F25320"}} className="icon"/>
          </div>
          <div className="skill">
            <FaCss3Alt style={{color:"#1598D3"}} className="icon"/>
          </div>
          <div className="skill">
            <FaJs style={{color:"#E4D04B"}} className="icon"/>
          </div>
          <div className="skill">
            <FaSass style={{color:"#C45F92"}} className="icon"/>
          </div>
          <div className="skill">
            <FaReact style={{color:"#5CCFEE"}} className="icon"/>
          </div>
          <div className="skill">
            <SiTailwindcss style={{color:"#07ADCA"}} className="icon"/>
          </div>
          <div className="skill">
            <SiMongodb style={{color:"#489F46"}} className="icon"/>
          </div>
          <div className="skill">
            <FaNodeJs style={{color:"#4B943B"}} className="icon"/>
          </div>
          <div className="skill">
            <FaGitAlt style={{color:"#E44D30"}} className="icon"/>
          </div>
          <div className="skill mysql">
            <img alt="" src={mysql}/>
          </div>
          <div className="skill">
            <SiMaterialui style={{color:"#00A7F2"}} className="icon"/>
          </div>
          <div className="skill">
            <SiSocketdotio style={{color:"#000"}} className="icon"/>
          </div>
          <div className="skill">
            <SiRedux style={{color:"#7046B2"}} className="icon"/>
          </div>
          <div className="skill figma">
            <img alt="" src={figma}/>
          </div>
          <div className="skill">
            <SiTypescript style={{color:"#00A7F2"}} className="icon"/>
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default Skills;