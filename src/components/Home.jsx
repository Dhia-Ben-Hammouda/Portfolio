import React from "react";
import Typed from "react-typed";
import img from "./assets/illustration.png";

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div data-aos="fade-right" className="text">
          <h2>Hey , my name is</h2>
          <h1>Dhia Ben Hamouda</h1>
          <h2>And i'm a <span>
              <Typed 
                strings={["Developer" , "Freelancer" , "Designer"]}
                typeSpeed={175}
                backSpeed={175}
                loop
              />
            </span>
          </h2>
          <a href="#projects">
            Portfolio
          </a>
        </div>
        <div data-aos="fade-left" className="illustration">
          <img src={img} alt="illustration"/>
        </div>
      </div>
    </section>
  )
}

export default Home;