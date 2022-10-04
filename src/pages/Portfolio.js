import React from "react";
import Project from "../components/Project"

let projects = [
    {"link": "http://dnd-here.herokuapp.com", "title": "Dungeons and Dragons App", "gitHub": "https://github.com/Sercanbrack/dnd-right-here"},
    {"link": "https://mvc-challenge722.herokuapp.com/", "title": "Blog Application", "gitHub": "https://github.com/wedniatnuom/mvc_challenge"},
    {"link": "https://drive.google.com/file/d/1EXvi0o4WaCroBwWCTv83gaZMxqNEKbds/view?usp=sharing", "title": "Video: Back End Routes", "gitHub": "https://github.com/wedniatnuom/e-commerce_back_end"},
    {"link": "https://drive.google.com/file/d/19ukQ4ywomF-RzU89Sya8bsA0V38-SpDG/view?usp=sharing", "title": "Video: Command Line", "gitHub": "https://github.com/wedniatnuom/employee_tracker"},
    {"link": "https://notetaker722.herokuapp.com/", "title": "Note Keeper", "gitHub": "https://github.com/wedniatnuom/note_taker"},
    {"link": "https://wedniatnuom.github.io/weather_dashboard/", "title": "Weather Dashboard", "gitHub": "https://github.com/wedniatnuom/weather_dashboard"},
    {"link": "https://mintapplication.herokuapp.com/", "title": "Mint", "gitHub": "https://github.com/bunt88/Mint"},
]


function Portfolio() {
    return (
        <div className="d-flex flex-column align-items-center" style={{backgroundImage: "linear-gradient(to bottom, lightblue, lightseagreen"}}>
        <div className="d-flex flex-row align-items-center col-11 m-4 border rounded" style={{backgroundImage: "linear-gradient(to bottom right, lightslategray, lightgray"}}>
            <div className="d-flex flex-row align-items-center m-4 border rounded border-secondary col-4" style={{ backgroundColor: "whitesmoke", }}>
                <div style={{fontFamily: "georgia, serif", fontSize: "20px"}}>
                    These are the projects that I have put the most work into so far. The Dungeons and Dragons App is a project that I worked on with 
                    as a group. The two videos contain a walk though of a couple backend applications that I built. The other three are applications that 
                    I built on my own. The actual projects are still being updated.
                </div>

            </div>
            <div className="d-flex flex-column col-7">
               {projects.map((project, index) => {
                    return <Project project={project} key={'key-'+index} />
               })}

            </div>
        </div>
        </div>


    )
};


export default Portfolio;