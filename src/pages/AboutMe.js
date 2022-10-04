import React from "react";
import ProfilePic from "../images/ProfilePic2.jpeg";


function AboutMe() {
  return (
    
  <div className="d-flex flex-column align-items-center" style={{ backgroundImage: "linear-gradient(to bottom, lightblue, lightseagreen"}}>
    <div className="border rounded col-9 m-4" style={{backgroundImage: "linear-gradient(to bottom right, lightslategray, lightgray"}}>
      <div className="d-flex flex-row align-items-center">
      <img className="m-2 mr-2 rounded border" src={ProfilePic} alt="profile pic" style={{ width: "300px", height: "400px" }}></img>
      <div className="d-flex flex-row align-items-center m-4 ml-5 rounded border " style={{backgroundColor: "whitesmoke", fontSize: "20px"}}>
        <p style={{fontFamily: "georgia, serif"}}>
          I grew up in Southern Utah. My wife and I started our family in 2009 and have 3 fantastic kids. While I was building a career in sales she became a graphic designer, 
          and eventually moved into programming. In August of 2018 we moved to Northern Utah. We now live in Orem and are working on building our future here.
        </p>
      </div>
      </div>    
    </div>
  </div>
  );
}

export default AboutMe;
