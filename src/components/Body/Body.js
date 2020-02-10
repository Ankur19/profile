import React from "react";
import "./Body.css";
//import Loader from "../Loader/Loader";
import MainText from "../MainText/MainText";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import LampPost from "../LampPost/lampPost";
import Contact from "../Contact/Contact";

//<Loader></Loader>
function Body(props){

    return <div className="body-main">
        <section id="maintext"><MainText></MainText></section>
        <section id="about"><About scrollPosition={props.scrollPosition}></About></section>
        <section id="skills"><Skills scrollPosition={props.scrollPosition}></Skills></section>
        <section id="projects"><Projects></Projects></section>
        <section id="lamppost"><LampPost></LampPost></section>
        <section id="projects-1"><Projects type="2"></Projects></section>
        <section id="lamppost-1"><LampPost type="2"></LampPost></section>
        <section id="contact-section"><Contact></Contact></section>
    </div>
}
export default Body;