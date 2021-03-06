import React from "react";
import { TextField } from "@mui/material";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="header" data-aos="fade-down" data-aos-delay="0">
          <h1>Contact</h1>
          <h2>Get in touch</h2>
        </div>
        <div className="wrapper">
          <form autoComplete="off" data-aos="fade-right" data-aos-delay="100">
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
                multiline
                rows={4}
                label="Enter msg"
              />
            </div>
            <button>
              Send message
            </button>
          </form>
          <div className="info" data-aos="fade-left" data-aos-delay="100">
            <IconContext.Provider value={{ size: "1.5rem" }}>
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