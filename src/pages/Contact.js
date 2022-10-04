import React from "react";

function Contact() {
    return (
        <div className="d-flex flex-column align-items-center" style={{backgroundImage: "linear-gradient(to bottom, lightblue, lightseagreen", height: "500px"}}>
            <div className="d-flex flex-column align-items-center border rounded m-4 col-8" style={{backgroundImage: "linear-gradient(to bottom right, lightslategray, lightgray"}}>
            <input className="m-4" title="required" type="text" id="name" name="name" placeholder="Name" style={{width: "300px"}}></input>
            <input className="m-4" title="required" type="text" id="email" name="email" placeholder="Email" style={{width: "300px"}}></input>
            <input className="m-4" title="required" type="text" id="message" name="message" placeholder="Message" style={{height: "200px", width: "600px"}}></input>
            <button className="m-2">Submit</button>
            </div>
        </div>
   

    )
};


export default Contact;