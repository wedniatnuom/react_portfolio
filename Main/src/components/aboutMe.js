import React from "react";


function AboutMe(props) {
  return (
    
  <div className="d-flex flex-column align-items-center" style={{backgroundColor: "lightseagreen"}}>
    <div className="border rounded col-9 m-4" style={{backgroundColor: "lightgray"}}>
      <div className="d-flex flex-row align-items-center">
      <img className="m-4 mr-5 rounded border" src={props.profilePic} alt="profile pic" style={{ width: "300px", height: "400px" }}></img>
      <div className="d-flex flex-row align-items-center m-4 ml-5 rounded border col-6" style={{backgroundColor: "whitesmoke", fontSize: "24px", height: "300px"}}>
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
