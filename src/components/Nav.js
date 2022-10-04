import React from "react";


function Nav(props) {

    let bgAboutMe = "";
    let bgPortfolio = "";
    let bgResume = "";
    let bgContact = "";
  
    if (props.page === 'aboutMe') {
      bgAboutMe = "bg-info rounded border border-dark"
    } else if (props.page === 'portfolio') {
      bgPortfolio = "bg-info rounded border border-dark"
    } else if (props.page === 'resume') {
      bgResume = "bg-info rounded border border-dark"
    } else if (props.page === 'contact') {
      bgContact = "bg-info rounded border border-dark"
    }

    return (
<nav className="d-flex" >
          <div className="m-1 d-flex align-items-center col-12 justify-content-around">
            <h1 className="m-1" style={{fontFamily: "georgia, serif"}}>Jeremy Johnson</h1>
            <div className={bgAboutMe} onClick={() => props.setPage('aboutMe')} >-About Me-</div>
            <div className={bgPortfolio} onClick={() => props.setPage('portfolio')}>-Portfolio-</div>
            <div className={bgResume} onClick={() => props.setPage('resume')}>-Resume-</div>
            <div className={bgContact} onClick={() => props.setPage('contact')}>-Contact-</div>
          </div>
        </nav>
    );
};

export default Nav;       