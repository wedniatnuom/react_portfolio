import React from "react";


function Resume() {
    return (
        <div className="d-flex flex-column align-items-center" style={{backgroundImage: "linear-gradient(to bottom, lightblue, lightseagreen"}}>
            <div className="m-4 border rounded col-8" style={{ backgroundImage: "linear-gradient(to bottom right, lightslategray, lightgray" }}>
                <div className="d-flex flex-row justify-content-left">
                    <h3 className="m-2">
                        <div></div>
                    </h3>
                </div>
                
                <div className="d-flex flex-column align-items-left">
                    <h2 className="m-2">Proficiencies</h2>
                    <div className="m-2 col-6 border rounded" style={{backgroundColor: "whitesmoke"}}>- React</div>
                    <div className="m-2 col-6 border rounded" style={{backgroundColor: "whitesmoke"}}>- Javascript</div>
                    <div className="m-2 col-6 border rounded" style={{backgroundColor: "whitesmoke"}}>- Debugging and Troubleshooting</div>
                    <div className="m-2 col-6 border rounded" style={{backgroundColor: "whitesmoke"}}>- MVC</div>
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1NvvrUTeonAmeCNy3V34fMB067a9_ME41NJeDNnFh2xc/edit?usp=sharing">Resume PDF</a>
                </div>
            </div>
        </div>
    )
};


export default Resume;