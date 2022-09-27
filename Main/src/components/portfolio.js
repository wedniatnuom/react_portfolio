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
                    <a href="https://github.com/Sercanbrack/dnd-right-here" className="m-2" style={{color: "lightseagreen"}}>github.com/Sercanbrack/dnd-right-here</a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://mvc-challenge722.herokuapp.com/"><button>Blog Application</button></a>
                    <a href="https://github.com/wedniatnuom/mvc_challenge" className="m-2" style={{color: "lightseagreen"}}>github.com/wedniatnuom/mvc_challenge</a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://drive.google.com/file/d/1EXvi0o4WaCroBwWCTv83gaZMxqNEKbds/view?usp=sharing"><button> Video: Back End Routes</button></a>
                    <a href="https://github.com/wedniatnuom/e-commerce_back_end" className="m-2" style={{color: "lightseagreen"}}>github.com/wedniatnuom/e-commerce_back_end</a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://drive.google.com/file/d/19ukQ4ywomF-RzU89Sya8bsA0V38-SpDG/view?usp=sharing"><button>Video: Command Line</button></a>
                    <a href="https://github.com/wedniatnuom/employee_tracker" className="m-2" style={{color: "lightseagreen"}}>github.com/wedniatnuom/employee_tracker</a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://notetaker722.herokuapp.com/"><button>Note Keeper</button></a>
                    <a href="https://github.com/wedniatnuom/note_taker" className="m-2" style={{color: "lightseagreen"}}>github.com/wedniatnuom/note_taker</a>
                </div>
                <div className="m-2 border rounded" style={{ backgroundColor: "whitesmoke" }}>
                    <a href="https://wedniatnuom.github.io/weather_dashboard/"><button>Weather Dashboard</button></a>
                    <a href="https://github.com/wedniatnuom/weather_dashboard" className="m-2" style={{color: "lightseagreen"}}>github.com/wedniatnuom/weather_dashboard</a>

                </div>

            </div>
        </div>
        </div>


    )
};


export default Portfolio;