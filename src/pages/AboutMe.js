import React from "react";
import ProfilePic from "../images/ProfilePic3.jpeg";

function AboutMe() {
  return (
    <div className="d-flex flex-column align-items-center mainbg" style={{ backgroundImage: "linear-gradient(to bottom, #ffffff, gray" }}>
      <div className="flex-col col-9 m-4">
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-column align-items-left leftColumn">
            <img className="m-2 mr-2 profileimage" src={ProfilePic} alt="profile pic" style={{ width: "300px", height: "400px" }}></img>
            <div className="d-flex flex-column">
              <div className="skills">Skills</div>
              <ul className="skillsList">
                <li>React</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>Git</li>
                <li>MongoDB</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="aboutMe">About Me</div>
            <div className="d-flex flex-row align-items-center m-4 ml-5 brand" style={{ backgroundColor: "whitesmoke", fontSize: "20px" }}>
              <p className="m-2 p-2" style={{ fontFamily: "georgia, serif" }}>
              "/wp-includes/js/quicktags.js" Wordpress Version 6.0.8

                Full stack web developer with skills in React, JavaScript, HTML,
                and CSS. I have experience building MVC as well as MERN
                applications. I’m confident in my ability to learn new things at
                a rapid pace, and am excited to expand my technical knowledge of
                different coding languages and strategies. Having recently
                finished earning my full stack development certificate from The
                University of Utah I feel like I’m ready to join a team of
                developers where I can contribute in a meaningful way. I love
                working with a team and anxiously look forward to joining a
                group where I can make meaningful contributions while learning.
              </p>
            </div>
            <div className="d-flex personal">
            <p className="m-2 p-2" style={{ fontFamily: "georgia, serif" }}>
            WELCOME TO MY PAGE! You may have noticed it needs some polishing 
            (a little more than polishing in some areas) but I guess that’s what 
            a portfolio is for, showcasing where you’re currently at! As I learn 
            new things I’ll add them here and make it all more inviting. Enough 
            about that though, you’re here to get to know me!
            <br></br>
            I was born and raised in Southern Utah. I’m the oldest of 9 crazy kids, 
            with some steps and halves thrown in there. Being such a large mixed 
            family was definitely an adventure in and of itself. It may have been 
            a bit of a circus growing up, but the huge family gatherings now are 
            absolutely worth the chaos.
            <br></br>
            I graduated from Cedar High School in 2005. I excelled at running, 
            earning the MVR award (most valuable runner) for cross country and 
            helping our team win 1st place at state. I also found success playing 
            trumpet, finishing as principal second in both symphonic and pep band. 
            I may not run or play my trumpet anymore, but I built some lifelong 
            friendships and learned some great things along the way.
            </p>
            <p className="m-2 p-2" style={{ fontFamily: "georgia, serif" }}>
            <br></br>
            In 2006 I started courting my amazing wife, Kaela. We spent the next 
            3 years laughing, fighting, playing, and crying. There were far too 
            many times that one or both of us thought it would never work out. In 
            February of 2009 I decided I was done with the games though and 
            proposed. Fortunately for me she said yes, and in May we were married! 
            Since then we have had 3 kids: Jack, Harlie, and Jace.
            <br></br>
                While I was building a career in
                sales she became a graphic designer, and eventually moved into
                programming. In August of 2018 we moved to Northern Utah. We now
                live in Orem and are working on building our future here. I am
                currently looking to join a dev team where I can be valuable
                while learning new things.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
