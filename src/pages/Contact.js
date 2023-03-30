import React, { useState, useEffect } from "react";

import '../index.css';
import './About.css';
import '../components/Footer.css'
import {MatrixText} from "../components/MatrixText";

import spotify from "../images/icons/Spotify.svg";
import youtube from "../images/icons/youtube.svg";
import tiktok from "../images/icons/Tik Tok.svg";
import instagram from "../images/icons/Instagram.svg";
import BasicPage from "../components/BasicPage";

export const Contact = (props) => {

  return (
      <BasicPage>
        <div>
          <MatrixText text="for all speakerhug-related matters, contact: " length={45} speed={3}></MatrixText>
          <a href="mailto:speakerhug@gmail.com">
            <MatrixText text="speakerhug@gmail.com" length={20} speed={2}></MatrixText>
          </a>
          <div style={{ height: 80 }}>

          </div>
          <div>
            <p>Instagram: </p><a href="instagram.com/speakerhug">@speakerhug</a>
          </div>
        </div>
      </BasicPage>
  )
}


export default Contact;