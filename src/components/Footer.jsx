import React from "react";
import { FaFacebook , FaGithub , FaLinkedin , FaYoutube } from "react-icons/fa";

const Footer = ()=>{
  return(
    <footer >
      <h2>for more information , Follow me on :</h2>
      <div>
        <a href="https://www.facebook.com/dhiabenhamouda10" target="_blank" rel="noreferrer">
          <FaFacebook className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/dhia-ben-hamouda-3b9019215/" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon"/>
        </a>  
        <a href="https://github.com/Dhia-Ben-Hamouda" target="_blank" rel="noreferrer">
          <FaGithub className="icon"/>
        </a>
        <a href="https://www.youtube.com/channel/UCkM5tiG4nbR0ZkI6-sdFkDg" target="_blank" rel="noreferrer">
          <FaYoutube className="icon"/>
        </a>
      </div>
      <h2>Copyright Ⓒ  2022 Dhia Ben Hamouda All rights reserved</h2>
    </footer>
  )
}

export default Footer;