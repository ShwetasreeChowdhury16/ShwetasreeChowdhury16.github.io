import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import About from "../components/about"
import { Helmet } from "react-helmet"

function about() {
    return (
      <div>
        <Appbar />
        <About />
        <Helmet>
          <meta charSet="utf-8" />
          <title>About</title>
        </Helmet>
      </div>
    )
  }
  
  export default about