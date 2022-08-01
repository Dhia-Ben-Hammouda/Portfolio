import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const Button = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    document.addEventListener("scroll", makeVisible);

    return () => { document.removeEventListener("scroll", makeVisible) }
  }, []);

  function makeVisible() {
    if (window.scrollY > 80) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }

  function clickHandler()
  {
    window.scrollTo({
      top:0
    })
  }

  return (
    <>
      <button onClick={clickHandler} className="top" style={ visible ?  {opacity:"1"} : {opacity:"0" , cursor:"initial"}  }>
        <FaAngleUp color="white" size="1rem" />
      </button>
    </>
  )
}

export default Button;