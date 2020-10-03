import React from "react";
import "./footer.css";
import githubIcon from "./github-icon.png";
import linkedinIcon from "./linkedin-icon.png";

function Footer() {
    return (
        <footer className="row pt-2 pb-4 foot justify-content-center">
            <div className="mr-3 name">Brenden Forbis</div>
            <a href="https://github.com/brendog95">
                <img className="linkicon mr-3" title="Github Profile" src={githubIcon}/>
            </a>
            <a href="www.linkedin.com/in/bforbis">
                <img className="linkicon" title="Linkedin Profile" src={linkedinIcon}/>
            </a>
        </footer>
    );
  }

export default Footer;