import React from "react"
import {
    FaTwitter as Twitter,
    FaGithub as Github,
    FaYoutube as Youtube,
    FaInstagram as Insta,
    FaEnvelope as Mail,
    FaLinkedin,
    FaPhone,
    FaGoogleDrive
    
  } from "react-icons/fa"

export default function about() {
    return (
      <div className="container">
        <div className="my-5"></div>
        <div className="display-3" style={{ color: "#FF8A00" }}>
          <span style = {{color : "#FF8A00"}}>About Me</span> <br />
        
        </div>
        <div className="h1 code mt-4 mb-3">System.out.println {"("}</div>
        <div className="text-muted mx-5 my-4 h3 text-justify info">
          " I'm a final year Computer Science grad student at University at Buffalo, New York specialising in Information and Software Systems. 
          <br /> I am inquisitive and detail oriented, looking to break into product management or data related roles. 
          <br/> Prior to my masters degree, I worked closely with experienced clients and consultants as an Enterprise Solutions Developer.
          <br/>
          <br/>
          Feel free to drop me a line should you consider me for any project/ employment opportunities. " 
        </div>
        <div className="h1 code mt-2 mb-3">{")"}</div>
        <div className="h1 mt-5">
          <a className="mr-5 icon" href="https://github.com/ShwetasreeChowdhury16">
            <Github />
          </a>
          <a className="mr-5 icon" href="https://www.linkedin.com/in/shwetasreechowdhury">
            <FaLinkedin />
            </a>
          <a className="mr-5 icon" href="mailto://shwetasr@buffalo.edu">
            <Mail />
          </a>
          <FaPhone />
          <a className="mr-5 icon" href="tel:1-716-380-8187">  716-380-8187  
          </a>
          <FaGoogleDrive />
          <a className="mr-5 icon" href="https://drive.google.com/file/d/1q3D4_MgdhLI-RzARB3BG8w49du0EuOIv/view?usp=sharing"> Resume
          </a>          
        </div>
      </div>
    )
  }