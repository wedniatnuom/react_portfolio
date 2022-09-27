import React from "react";

function Resume() {
    return (
        <div className="d-flex flex-column align-items-center" style={{ backgroundColor: "lightseagreen" }}>
            <div className="m-4 border rounded col-9" style={{ backgroundColor: "lightgray" }}>
                <div className="d-flex flex-row justify-content-center">
                    <div className="m-5 col-5 border rounded" style={{backgroundColor: "whitesmoke"}}>
                        Top left corner
                    </div>
                    <div className="m-5 col-3 border rounded" style={{backgroundColor: "whitesmoke"}}>
                        Top right corner
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="m-4 col-9 border rounded" style={{backgroundColor: "whitesmoke"}}>Resume Item #1</div>
                    <div className="m-4 col-9 border rounded" style={{backgroundColor: "whitesmoke"}}>Resume Item #2</div>
                    <div className="m-4 col-9 border rounded" style={{backgroundColor: "whitesmoke"}}>Resume Item #3</div>
                    <div className="m-4 col-9 border rounded" style={{backgroundColor: "whitesmoke"}}>Resume Item #4</div>

                </div>
            </div>
        </div>
    )
};


export default Resume;