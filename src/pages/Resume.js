import React from "react";


function Resume() {
    return (
        <div className="d-flex flex-column align-items-center" style={{ backgroundColor: "lightseagreen" }}>
            <div className="m-4 border rounded col-8" style={{ backgroundColor: "lightgray" }}>
                <div className="d-flex flex-row justify-content-left">
                    <h3 className="m-2">
                        <div></div>
                    </h3>
                </div>
                
                <div className="d-flex flex-column align-items-left">
                    <h2 className="m-2">Proficiencies</h2>
                    <div className="m-2 col-6 border rounded" style={{backgroundColor: "whitesmoke"}}>- React</div>
                    <div className="m-2 col-6 border rounded" style={{backgroundColor: "whitesmoke"}}>- Javascript</div>
                    <div className="m-2 col-6 border rounded" style={{backgroundColor: "whitesmoke"}}>- Debugging/Troubleshooting</div>
                    <div className="m-2 col-6 border rounded" style={{backgroundColor: "whitesmoke"}}>- MVC</div>
                </div>
                <div>
                    <a href="https://drive.google.com/file/d/1IaK9ZmI63OdD_F0Ji9HNRpVJ7Xdwk3AB/view?usp=sharing">Resume PDF</a>
                </div>
            </div>
        </div>
    )
};


export default Resume;