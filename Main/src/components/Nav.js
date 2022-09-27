import React from "react";


function Nav(props) {

    let bgAboutMe = "";
    let bgPortfolio = "";
    let bgResume = "";
    let bgContact = "";
  
    if (props.page === 'aboutMe') {
      bgAboutMe = "bg-info"
    } else if (props.page === 'portfolio') {
      bgPortfolio = "bg-info"
    } else if (props.page === 'resume') {
      bgResume = "bg-info"
    } else if (props.page === 'contact') {
      bgContact = "bg-info"
    }

    return (
<nav className="d-flex" style={{height: "50px"}}>
          <div className="d-flex align-items-center col-12 justify-content-around">
          <h1 className="m-2" style={{fontFamily: "georgia, serif"}}>Jeremy Johnson</h1>
            <div className={bgAboutMe} onClick={() => props.setPage('aboutMe')} >About Me</div>
            <div className={bgPortfolio} onClick={() => props.setPage('portfolio')}>Portfolio</div>
            <div className={bgResume} onClick={() => props.setPage('resume')}>Resume</div>
            <div className={bgContact} onClick={() => props.setPage('contact')}>Contact</div>
          </div>
        </nav>
    );
};

export default Nav;       