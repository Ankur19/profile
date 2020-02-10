import React from "react";
import "./Projects.css";
//import Card from "../Card/Card";

const atripHeading = "</> atrip.tech"
const chordsHeading = "chords Maker </>";
const data = <div className="project-images">
        <div className="project-images-container">
            <div className="project-info-div">
                <p className="project-info-heading">{atripHeading}</p>
                <p className="project-info-desc">Plan your outings with ease. </p>
                <a href="https://atrip.tech" target="_blank" rel="noopener noreferrer">visit site</a>
            </div>
            <div className="project-frameworks-div">
                <img src="https://img.icons8.com/windows/96/000000/heroku.png" alt="heroku"></img>
                <img src="https://img.icons8.com/windows/96/000000/nodejs.png" alt="node"></img>
                <img src="https://img.icons8.com/ios-filled/100/000000/react-native.png" alt="react"></img>
                <img src="https://img.icons8.com/ios-filled/100/000000/javascript-logo.png" alt="js"></img>
            </div>
        </div>

        <div className="project-details">
            <p className="project-details-heading">A Trip A Day</p>
            <p className="project-details-extend">An outing planner web-app that provides data about popular places nearby, their distance, rating and time to travel.<br></br><span>Technology</span><br></br>Atrip is built using React.js with a Node.js backend for handling Google API requests. It is run on Heroku using their CI/CD pipeline.</p>
        </div>
</div>;
const data1 = <div className="project-images">
<div className="project-images-container">
    <div className="project-info-div">
        <p className="project-info-heading">{chordsHeading}</p>
        <p className="project-info-desc">Build chord positions in your guitar, any fret, any tuning</p>
        <div>
            <a href="https://github.com/Ankur19/chords-app" target="_blank" rel="noopener noreferrer">View source</a>
            <a href="https://drive.google.com/file/d/1R1VeVZvBptdGaj1dBfnSOsHeF-zubfkR/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download</a>
        </div>
    </div>
    <div className="project-frameworks-div">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/192px-Electron_Software_Framework_Logo.svg.png" alt="electron"></img>
        <img src="https://img.icons8.com/windows/96/000000/npm.png" alt="npm"></img>
        <img src="https://img.icons8.com/ios-filled/100/000000/react-native.png" alt="react"></img>
        <img src="https://img.icons8.com/ios-filled/100/000000/javascript-logo.png" alt="js"></img>
        <img src="https://img.icons8.com/ios-filled/100/000000/c-plus-plus-logo.png" alt="c++"></img>
    </div>
</div>

<div className="project-details">
    <p className="project-details-heading">Chords Maker</p>
    <p className="project-details-extend">A desktop app to help guitarists easily build chords in any scale and tuning instead of spending hours trying to manually find a good sound.<br></br><span>Technology</span><br></br>Chords maker is built using Electron.js and the underlying algorithm is written in C++ using node NAPI module. The UI is coded in Js using React</p>
</div>
</div>
function Projects(props){
    return <div className="projects-main">
        <div className="projects-divider-1"></div>
        <div className="projects-divider-2"></div>
        <div className="projects-main-data">{props.type===undefined?data:data1}</div>
    </div>
}

export default Projects