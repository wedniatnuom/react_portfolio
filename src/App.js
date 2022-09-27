import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header"


function App() {
  const [page, setPage] = useState('aboutMe');


  return (
    <React.Fragment>
      <Header page={page} setPage={setPage}/>
      {page === 'aboutMe' && <AboutMe />}
      {page === 'portfolio' && <Portfolio />}
      {page === 'resume' && <Resume />}
      {page === 'contact' && <Contact />}
      <Footer />
    </React.Fragment>
  );
};

export default App;
