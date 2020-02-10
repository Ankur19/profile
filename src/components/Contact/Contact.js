import React from "react";
import "./Contact.css";

function Contact(props){
    return <div className="contact-main-div">
        <form>      
            <input name="name" type="text" className="feedback-input" placeholder="Name" />   
            <input name="email" type="text" className="feedback-input" placeholder="Email" />
            <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
    </div>
}

export default Contact;