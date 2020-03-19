import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedin,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hi, I'm</span> <br />
        Shwetasree.
      </div>
      <div className="h1 code mt-4 mb-3">main() {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A self-confessed product enthusiast. I'm detail oriented and good at data driven inferences. 
        <br /> I believe in technology as a positive force and would die for a role that 
        would help me connect people with technology :)
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
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
        
      </div>
    </div>
  )
}
