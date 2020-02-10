import React, {useEffect} from "react";
import "./Skills.css";

const skillIds = ["html", "css", "javascript","react", "python","c", "dbms", "electron", "spring", "php", "cloud", "cicd"]
const skillPercent = [90, 85, 80, 65, 65,45, 77, 60,70,40, 59,30];
function Skills(props){
    useEffect(()=>{
        if(props.scrollPosition===2){
            skillIds.forEach((skill, index)=>{
                document.getElementById(skill).style.width = parseInt(0.8 * skillPercent[index]).toString() + "%";
            })
        }
        else{
            skillIds.forEach((skill, index)=>{
                document.getElementById(skill).style.width = "0%";
            })
        }
    })

    return <div id="skills-main-div">
        <div id="image-hexagon">
            <div id="img-hex-1">
                <div id="img-hex-2">
                    <div id="img-hex-3"></div>
                </div>
            </div>
        </div>
        <div id="skills-chart">
            <div id="all-skills-div">
            <div className="skills-one-skill">
                    <p className="skills-skillname">HTML</p>
                    <p id="html" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="html-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">CSS</p>
                    <p id="css" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="css-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">JavaScript</p>
                    <p id="javascript" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="javascript-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">React.js</p>
                    <p id="react" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="react-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">Python</p>
                    <p id="python" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="python-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">C/C++</p>
                    <p id="c" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="c-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">RDBMS</p>
                    <p id="dbms" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="dbms-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">Electron.js</p>
                    <p id="electron" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="electron-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">Java Spring</p>
                    <p id="spring" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="spring-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">PHP</p>
                    <p id="php" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="php-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">Cloud</p>
                    <p id="cloud" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="cloud-filler"></p>
                </div>
                <div className="skills-one-skill">
                    <p className="skills-skillname">CI / CD</p>
                    <p id="cicd" className="skills-percentage-p"></p>
                    <p className="skills-filler-p" id="cicd-filler"></p>
                </div>
            </div>
        </div>
    </div>
}

export default Skills;