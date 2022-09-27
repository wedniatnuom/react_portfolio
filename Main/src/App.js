import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ProfilePic from "./images/ProfilePic2.jpeg";

function App() {
  const [page, setPage] = useState('aboutMe');
  let bgAboutMe = "";
  let bgPortfolio = "";
  let bgResume = "";
  let bgContact = "";

  if (page === 'aboutMe') {
    bgAboutMe = "bg-info"
  } else if (page === 'portfolio') {
    bgPortfolio = "bg-info"
  } else if (page === 'resume') {
    bgResume = "bg-info"
  } else if (page === 'contact') {
    bgContact = "bg-info"
  }

  
  return (
    <React.Fragment>
      <header>
        <nav className="d-flex" style={{height: "50px"}}>
          <div className="d-flex align-items-center col-12 justify-content-around">
          <h1 className="m-2" style={{fontFamily: "georgia, serif"}}>Jeremy Johnson</h1>
            <div className={bgAboutMe} onClick={() => setPage('aboutMe')} >About Me</div>
            <div className={bgPortfolio} onClick={() => setPage('portfolio')}>Portfolio</div>
            <div className={bgResume} onClick={() => setPage('resume')}>Resume</div>
            <div className={bgContact} onClick={() => setPage('contact')}>Contact</div>
          </div>
        </nav>
      </header>
      {page === 'aboutMe' && <AboutMe profilePic={ProfilePic}/>}
      {page === 'portfolio' && <Portfolio />}
      {page === 'resume' && <Resume />}
      {page === 'contact' && <Contact />}
    </React.Fragment>
  );
};

export default App;
