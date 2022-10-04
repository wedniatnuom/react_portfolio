import React from "react";


function Project(props) {
    return (
        <div className="m-2 border rounded border-secondary" style={{ backgroundColor: "whitesmoke" }}>
            <a href={props.project.link} ><button>{props.project.title}</button></a>
            <a href={props.project.gitHub} className="m-2" style={{color: "lightseagreen"}}>GitHub Repo</a>
        </div>
    );
};

export default Project;