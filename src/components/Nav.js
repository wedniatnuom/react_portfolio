import React from "react";


function Nav(props) {

    return (
<nav className="d-flex" >
          <div className="m-1 d-flex align-items-center col-12 justify-content-around navwrapper">
            <div className={props.page === 'aboutMe' ? "navbtn border border-dark p-2 text-white" : ''} style={{cursor: "pointer"}} onClick={() => props.setPage('aboutMe')} >-About Me-</div>
            <div className={props.page === 'portfolio' ? "navbtn border border-dark p-2 text-white" : ''} style={{cursor: "pointer"}} onClick={() => props.setPage('portfolio')}>-Portfolio-</div>
            <h1 className="m-1" style={{fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', seriff"}}>Jeremy Johnson</h1>
            <div className={props.page === 'resume' ? "navbtn border border-dark p-2 text-white" : ''} style={{cursor: "pointer"}} onClick={() => props.setPage('resume')}>-Resume-</div>
            <div className={props.page === 'contact' ? "navbtn border border-dark p-2 text-white" : ''} style={{cursor: "pointer"}} onClick={() => props.setPage('contact')}>-Contact-</div>
          </div>
        </nav>
    );
};

export default Nav;       