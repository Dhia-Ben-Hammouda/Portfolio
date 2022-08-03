import React from "react";
import { FaPaintBrush , FaPalette , FaCode } from "react-icons/fa"; 

const Services = ()=>{
  return(
    <section id="services">
      <div className="container">
        <div data-aos="fade-down" data-aos-delay="0" className="header">
          <h1>Services</h1>
          <h2>What i provide</h2>
        </div>
        <div className="wrapper">
          <div data-aos="fade-down" data-aos-delay="100" className="service">
            <FaPaintBrush className="icon"/>
            <h1>UI / UX Solutions</h1>
            <h2>I will help you create a breathtaking design for your website / mobile app using renowned ui / ux tools like Figma and adobe XD</h2>
          </div>
          <div data-aos="fade-down" data-aos-delay="200" className="service">
            <FaPalette className="icon"/>
            <h1>Frontend Development</h1>
            <h2>I will help you create a stunning frontend for your website / mobile app using modern day frontend frameworks like Sass and React JS</h2>
          </div>
          <div data-aos="fade-down" data-aos-delay="300" className="service">
            <FaCode className="icon"/>
            <h1>Backend Development</h1>
            <h2>I will help you create the backend of your website / mobile app using node JS Express JS and MongoDB</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;

