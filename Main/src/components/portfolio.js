import React from "react";

function Portfolio() {
    return (
        <div className="d-flex flex-column align-items-center" style={{backgroundColor: "lightseagreen"}}>
        <div className="d-flex flex-row col-11 m-4 border rounded" style={{backgroundColor: "lightgray"}}>
            <div className="m-4 border rounded col-4" style={{ backgroundColor: "whitesmoke" }}>
                <div>
                    Intro to portfolio, where the work came from, ect...
                </div>

            </div>
            <div className="d-flex flex-column col-7">
                <div className="m-4 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <div>Project 1</div>
                </div>
                <div className="m-4 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <div>Project 2</div>
                </div>
                <div className="m-4 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <div>Project 3</div>
                </div>
                <div className="m-4 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <div>Project 4</div>
                </div>
                <div className="m-4 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <div>Project 5</div>
                </div>
                <div className="m-4 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <div>Project 6</div>
                </div>

            </div>
        </div>
        </div>


    )
};


export default Portfolio;