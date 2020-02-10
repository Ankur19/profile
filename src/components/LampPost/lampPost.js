import React from "react";
import "./LampPost.css";

/* <div className="lamppost-data">
        <div className="lamppost-text-container">
            <p className="project-details-heading lamppost-color">Path Finder</p>
            <p className="project-details-extend lamppost-color">An algorithm visualizer to visualize how common path finding algorithms calculate the shortest path from source to destination.<br></br><span>Technology</span><br></br>Path finder is built using vanilla Javascript, jQuery and Bootstrap. It uses async-await and promises for the visualizations.</p>
        </div>
            <div className="lamppost-img-container">
                <div className="project-info-div lamppost-project-info-div">
                    <img src={process.env.PUBLIC_URL + "/pathfinder.png"} alt="path-finder"></img>
                    <div className="lamppost-framework-bg">
                        <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="jav"></img>
                        <img src={process.env.PUBLIC_URL + "/bootstrap.png"} alt="bootstrap"></img>
                        <img src={process.env.PUBLIC_URL + "/jquery.png"} alt="jquery"></img>
                </div>
                </div>
            </div>
        </div> */
function LampPost(props){
    if(props.type===undefined){
        return <div className="lamppost-main">
            <div className="lamppost-data">
                <div className="lamppost-text-container">
                    <p className="project-details-heading lamppost-color">Path Finder</p>
                    <p className="project-details-extend lamppost-color">An algorithm visualizer to visualize how common path finding algorithms calculate the shortest path from source to destination.<br></br><span>Technology</span><br></br>Path finder is built using vanilla Javascript, jQuery and Bootstrap. It uses async-await and promises for the visualizations.</p>
                    <div className="lamppost-links">
                        <a className="lamppost-github-link" href="https://ankur19.github.io/path_finder" target="_blank" rel="noopener noreferrer">View site</a>
                        <a className="lamppost-github-link" href="https://github.com/Ankur19/path_finder" target="_blank" rel="noopener noreferrer">View source</a>
                    </div>
                </div>
                <div className="lamppost-img-container">
                    <div className="lamppost-project-info-div">
                        <img src={process.env.PUBLIC_URL + "/pathfinder.png"} alt="path-finder"></img>
                        <div className="lamppost-framework-bg">
                            <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="jav"></img>
                            <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="bootstrap"></img>
                            <img src="https://img.icons8.com/ios-filled/100/000000/jquery.png" alt="jquery"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    return <div className="lamppost-main">
        <div className="lamppost-data">
            <div className="lamppost-text-container">
                <p className="project-details-heading lamppost-color">Electronic Vendor Website</p>
                <p className="project-details-extend lamppost-color">A vendor website to sell electronic products with all the functionality of a modern webstore like sub-category wise filtering and search.<br></br><span>Technology</span><br></br>This marketplace is built using jQuery, Bootstrap and Javascript for frontend and PHP for the backend. It uses Oracle RDBMS for data storage.</p>
                <div className="lamppost-links">
                    <a className="lamppost-github-link" href="https://github.com/Ankur19/b_buy_electronic_vendor_website" target="_blank" rel="noopener noreferrer">View source</a>
                </div>
            </div>
            <div className="lamppost-img-container">
                <div className="lamppost-project-info-div">
                    <img src={process.env.PUBLIC_URL + "/bbuy.png"} alt="path-finder"></img>
                    <div className="lamppost-framework-bg">
                        <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="jav"></img>
                        <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="bootstrap"></img>
                        <img src="https://img.icons8.com/ios-filled/100/000000/jquery.png" alt="jquery"></img>
                        <img src="https://img.icons8.com/ios-filled/100/000000/php-logo.png" alt="php"></img>
                        <img src="https://img.icons8.com/dotty/80/000000/12c.png" alt="oracle"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LampPost;