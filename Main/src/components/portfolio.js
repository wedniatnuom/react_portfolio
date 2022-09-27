import React from "react";

function Portfolio() {
    return (
        <div className="d-flex flex-column align-items-center" style={{backgroundColor: "lightseagreen"}}>
        <div className="d-flex flex-row align-items-center col-11 m-4 border rounded" style={{backgroundColor: "lightgray"}}>
            <div className="d-flex flex-row align-items-center m-4 border rounded col-4" style={{ backgroundColor: "whitesmoke", height: "300px"}}>
                <div style={{fontFamily: "georgia, serif", fontSize: "24px"}}>
                    These are the projects that I have put the most work into so far. The Dungeons and Dragons App is a project that I worked on with 
                    as a group. The two videos contain a walk though of a couple backend applications that I built. The other three are applications that 
                    I built on my own. The actual projects are still being updated.
                </div>

            </div>
            <div className="d-flex flex-column col-7">
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="http://dnd-here.herokuapp.com" ><button>Dungeons and Dragons App</button></a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://mvc-challenge722.herokuapp.com/"><button>Blog Application</button></a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://drive.google.com/file/d/1EXvi0o4WaCroBwWCTv83gaZMxqNEKbds/view?usp=sharing"><button> Video: Back End Routes</button></a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://drive.google.com/file/d/19ukQ4ywomF-RzU89Sya8bsA0V38-SpDG/view?usp=sharing"><button>Video: Command Line</button></a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://notetaker722.herokuapp.com/"><button>Note Keeper</button></a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://wedniatnuom.github.io/weather_dashboard/"><button>Weather Dashboard</button></a>

                </div>

            </div>
        </div>
        </div>


    )
};


export default Portfolio;