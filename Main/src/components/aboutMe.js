import React from "react";


function AboutMe(props) {
  return (
    
    <div className="d-flex flex-column align-items-center" style={{backgroundColor: "lightseagreen"}}>
    <div className="border rounded col-11 m-4" style={{backgroundColor: "lightgray"}}>
      <div className="d-flex">
      <img className="m-4 rounded border" src={props.profilePic} alt="profile pic" style={{ width: "260px", height: "400px" }}></img>
      <div className="m-4 rounded border col-8" style={{backgroundColor: "whitesmoke"}}>
        <p>
          Test info for fill in About Me
        </p>
      </div>
      </div>    
    </div>
    </div>
  );
}

export default AboutMe;
