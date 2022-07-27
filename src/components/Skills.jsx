import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaSass, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMaterialui, SiTypescript } from "react-icons/si";
import figma from "./assets/figma.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="header">
          <h1>Skills</h1>
          <h2>technologies i've used</h2>
        </div>
        <div className="wrapper">
          <div className="skills">
            <div className="grid">
              <div className="skill">
                <FaHtml5 size={"4rem"} color="#F25320" />
              </div>
              <div className="skill">
                <FaCss3Alt size={"4rem"} color="#279FD5" />
              </div>
              <div className="skill">
                <FaJs size={"4rem"} color="#E4D04B" />
              </div>
              <div className="skill">
                <FaReact size={"4rem"} color="#5CCFEE" />
              </div>
              <div className="skill">
                <FaNodeJs size={"4rem"} color="#4F9640" />
              </div>
              <div className="skill">
                <FaGitAlt size={"4rem"} color="#E44C30" />
              </div>
              <div className="skill">
                <FaSass size={"4rem"} color="#CF649A" />
              </div>
              <div className="skill">
                <SiMaterialui size={"4rem"} color="#00A7F2" />
              </div>
              <div className="skill">
                <SiMongodb size={"4rem"} color="#449E45" />
              </div>
              <div className="skill">
                <SiTailwindcss size={"4rem"} color="#06ADC9" />
              </div>
              <div className="skill">
                <SiTypescript size={"4rem"} color="#00A7F2" />
              </div>
              <div className="skill">
                <img src={figma} alt="" />
              </div>
            </div>
          </div>
          <div className="about">
            <h1>More about me</h1>
            <p>My name is Dhia Ben Hamouda and i'm mainly a frontend web developer with over 2 years of experience .</p>
            <p>I'm really passionate about making good-looking responsive websites from scratch .</p>
            <p>I'm currently learning UI / UX Design , Backend Development and Mobile Development</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;