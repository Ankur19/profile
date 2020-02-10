import React,{useEffect} from "react";
import "./About.css";
import Hexagon from "../Hexagon/Hexagon";

function About(props){

    useEffect(()=>{
        if(props.scrollPosition===1){
            document.getElementById('about-1').innerHTML = "I am a Software Developer currently pursuing a Computer Science masters from Illinois Institute of Technology (3.7 gpa).";
            setTimeout(()=>{
                document.getElementById('about-2').innerHTML = "An ex-IBMer with 3+ years of experience working on Spring MVC backend and JSP/JavaScript frontend.";
            },300);
            setTimeout(()=>{
                document.getElementById('about-3').innerHTML = "Working on UI is my passion and getting the job done is my thing.";
            }, 600)
        }
        else{
            document.getElementById('about-1').innerHTML = "";
            document.getElementById('about-2').innerHTML = "";
            document.getElementById('about-3').innerHTML = "";
        }
    }, [props.scrollPosition])

    return <div className="about-main-div">
        <div id="about-me-text"><span id="about-1"></span><br></br><br></br> <span id="about-2"></span><br></br><br></br><span id="about-3"></span></div>
        <div className="about-top-details">
            <div>
                <Hexagon image="speed_1.png"></Hexagon>
                <p className="about-top-heading">Fast</p>
                <p className="about-top-data">Building fast and responsive UI, <br></br>my highest priority.</p>
            </div>
            <div>
                <Hexagon image="mobile-video.png"></Hexagon>
                <p className="about-top-heading">Dynamic</p>
                <p className="about-top-data">I love animations and making <br></br>websites come to life.</p>
            </div>
            <div>
                <Hexagon image="js.png"></Hexagon>
                <p className="about-top-heading">Full Stack</p>
                <p className="about-top-data">Learning and applying new skills, <br></br>my list grows each day.</p>
            </div>
        </div>
    </div>
}

export default About;