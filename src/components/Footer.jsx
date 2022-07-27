import React from "react";
import { FaFacebook , FaGithub , FaLinkedin , FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = ()=>{
  return(
    <footer>
      <h2>Follow me on :</h2>
      <div>
        <a href="#">
          <FaFacebook className="icon"/>
        </a>
        <a href="#">
          <FaLinkedin className="icon"/>
        </a>  
        <a href="#">
          <FaGithub className="icon"/>
        </a>
        <a href="#">
          <FaYoutube className="icon"/>
        </a>
      </div>
      <h2>Copyright Ⓒ  2022 Dhia Ben Hamouda All rights reserved</h2>
    </footer>
  )
}

export default Footer;