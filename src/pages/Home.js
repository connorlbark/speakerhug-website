import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../index.css';
import './Home.css';
import '../components/MatrixText'
import { MatrixText } from "../components/MatrixText";

export const Home = (props) => {

  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
      console.log(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth]);

  return (
    <div className="home-page-container">
      <div>
        <img src={require('../images/text.png')} className="logo glitch" alt="speakerhug logo"></img>
        <img src={require('../images/homepage_angel.PNG')} className="angel" alt=""/>
      </div>
      <div style={{}}>
        <Link to="/about"><MatrixText text="about " length={width/18} speed={7} className="link1" ></MatrixText></Link>
        <MatrixText text="music " length={width/18} speed={6} className="link2" href="https://open.spotify.com/artist/79bwkhHh6qKP7dehlCdYJP?si=08ajqk8zTAeJjH8bExk-5g"></MatrixText>
        <MatrixText text="art " length={width/18} speed={5} className="link3"></MatrixText>
        <MatrixText text="photos " length={width/18} speed={5} className="link4"></MatrixText>
        <MatrixText text="events " length={width/18} speed={4} className="link5"></MatrixText>
        <MatrixText text="videos " length={width/18} speed={3} className="link6" href="https://www.youtube.com/@speakerhug"></MatrixText>
        <MatrixText text="contact " length={width/18} speed={2} className="link7" href="mailto:speakerhug@gmail.com"></MatrixText>
      </div>
    </div>
  )
}


export default Home;