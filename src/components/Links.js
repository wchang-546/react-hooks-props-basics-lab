import React from "react";

function Links({linkedin, github}){ 
    return (
        <div>
            <h3> Links </h3>
            <a href={github}> {github} </a>
            <br></br>
            <a href={linkedin}> {linkedin} </a>
        </div>
    )
}

export default Links;