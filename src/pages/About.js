import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../index.css';
import './About.css';
import '../components/MatrixText'
import { MatrixText } from "../components/MatrixText";

export const About = (props) => {

  return (
    <div className="home-page-container">
      <div>
        <img src={require('../images/text.png')} className="logo glitch" alt="speakerhug logo"></img>
        <img src={require('../images/homepage_angel.PNG')} className="angel" alt=""/>
      </div>
      <div style={{}}>
        <Link to="/"><MatrixText text="back " length={50} speed={7} className="backbutton" ></MatrixText></Link>
        <p className="bio">
          Speakerhug is guitarists/vocalists Connor and Lex, bassist Gabe, and drummer Brendan. 
          Quickly rising within the Boston DIY music scene due to their energetic live shows, 
          Speakerhug’s music captures a push and pull between tension and catharsis. 
          <br></br>
          <br></br>
          Primarily taking influence from shoegaze, noise rock, and post-hardcore, 
          the genre-blending group fuses quiet, anxious atmospheres with explosive walls 
          of sound — all with a pop-leaning attitude. 
          Hot off the success of their first single ‘glassheart’, 
          Speakerhug is currently working on their debut EP, ‘scriptures,’ set to release in April of 2023.
        </p>
      </div>
    </div>
  )
}


export default About;