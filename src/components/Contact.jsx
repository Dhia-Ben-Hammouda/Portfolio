import React from "react";
import { TextField } from "@mui/material";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="header">
          <h1>Contact</h1>
          <h2>Get in touch</h2>
        </div>
        <div className="wrapper">
          <form>
            <div>
              <div>
                <TextField label="Enter name" />
              </div>
              <div>
                <TextField label="Enter object" />
              </div>
            </div>
            <div>
              <TextField
                label="Enter email"
              />
            </div>
            <div>
              <TextField
                label="Enter msg"
              />
            </div>
            <button>
              Send message
            </button>
          </form>
          <div className="info">
            <IconContext.Provider value={{size:"1.5rem"}}>
              <div>
                <div className="circle">
                  <FaPhoneAlt />
                </div>
                <h2>Phone : +216 24 684 936</h2>
              </div>
              <div>
                <div className="circle">
                  <FaEnvelope />
                </div>
                <h2>Email : dhiabenhamouda.5@gmail.com</h2>
              </div>
              <div>
                <div className="circle">
                  <IoLocationSharp />
                </div>
                <h2>Location : Tunisia</h2>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;