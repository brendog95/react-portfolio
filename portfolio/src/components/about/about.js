import React from "react";
import biopic from "./biopic.jpg"

function About() {
    return (
        <div>
            <div className="row px-4 topic">
                <h3 className="pt-4 pb-3 ml-lg-5">ABOUT ME</h3>
            </div>    
        
            <div className="py-3 px-2">
                <img className="float-left col-md-3 mr-4 mb-3" src={biopic}/>
                
                <p>I have always had a knack for computer related programs and technology. I grew up using video editing software to create videos of my friends and I skateboarding. That naturally evolved into playing around with other programs such as Adobe After Effects and sony Vegas. From there I worked my way into a design job which allowed me to use CAD software to build corrugated boxes and then make working samples using a CAD operated table. I have always had an interest in web development it all just seemed so foreign and I never knew where to get started from.  
                </p>
                        
                <p>That has all changed after going through the UNC Charlotte Full Stack Bootcamp. I will soon complete my studies where I have learned how to use languages such as <strong>HTML, CSS, and Javascript along with Jquery.</strong> Also CSS Frameworks such as <strong>Bootstrap and Tailwind</strong> are toolkits I know well. I am also familiar with <strong>Node and Express,</strong> along with backend technologies such as <strong>SQL and Mongo.</strong> I am comfortable using <strong>Git and Github,</strong> and most recently have been learning <strong>React.</strong>
                </p>

                <p>My goal in the months ahead is to persue a career in web development working as a front-end,
                back-end, or full-stack developer. Please feel free to take a look at my portfolio work and my Github
                repositories. Additionally you can contact me by reach out via email on my contact page, or through Linkedin
                with the link below.
                </p>
            </div>
        </div>
    );
}

export default About;