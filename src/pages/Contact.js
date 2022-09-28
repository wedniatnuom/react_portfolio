import React from "react";

function Contact() {
    return (
        <div className="d-flex flex-column align-items-center" style={{backgroundColor: "lightseagreen", height: "900px"}}>
            <div className="d-flex flex-column align-items-center border rounded m-4 col-8" style={{backgroundColor: "lightgray"}}>
            <input className="m-4" title="required" type="text" id="name" name="name" placeholder="Name"></input>
            <input className="m-4" title="required" type="text" id="email" name="email" placeholder="Email"></input>
            <input className="m-4" title="required" type="text" id="message" name="message" placeholder="Message"></input>
            <button>Submit</button>
            </div>
        </div>
   

    )
};


export default Contact;