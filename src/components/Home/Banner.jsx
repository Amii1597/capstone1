import React from "react";
import BackgroundImage from "../../assets/image1.png";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="top">
        <p>Already Have an Account ?</p>
        <button>LOGIN</button>
      </div>
      <div className="bottom">
        <p>Discover new things on
        SuperApp</p>
      </div>
      <img src={BackgroundImage} />
    </>
  );
};

export default Banner;
