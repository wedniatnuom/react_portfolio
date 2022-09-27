import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ProfilePic from "./images/ProfilePic.jpeg";

function App() {
  const [page, setPage] = useState('aboutMe');
  
  return (
    <React.Fragment>
      <header>
        <nav className="d-flex" style={{height: "35px"}}>
          <div className="d-flex align-items-center col-12 justify-content-around">
            <div className="text-center" onClick={() => setPage('aboutMe')}>About Me</div>
            <div className="text-center"onClick={() => setPage('portfolio')}>Portfolio</div>
            <div className="text-center"onClick={() => setPage('resume')}>Resume</div>
            <div className="text-center"onClick={() => setPage('contact')}>Contact</div>
          </div>
        </nav>
      </header>
      {page === 'aboutMe' && <AboutMe profilePic={ProfilePic}/>}
      {page === 'portfolio' && <Portfolio />}
      {page === 'resume' && <Resume />}
      {page === 'contact' && <Contact />}
    </React.Fragment>
  );
}

export default App;
