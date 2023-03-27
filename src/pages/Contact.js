import React, { useState, useEffect } from "react";

import '../index.css';
import './About.css';
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
          <div class="iconrow">
          <a href="https://www.instagram.com/speakerhug/" class="sociallink">
            <img src={instagram} class="iconimage"></img>
          </a>
          <a href="https://open.spotify.com/artist/79bwkhHh6qKP7dehlCdYJP?si=NCWL-rxtQM21z7_Qeo0OSQ" class="sociallink">
            <img src={spotify} class="iconimage"></img>
          </a>
          <a href="https://www.youtube.com/@speakerhug" class="sociallink">
            <img src={youtube} class="iconimage"></img>
          </a>
          <a href="https://www.tiktok.com/@speakerhug" class="sociallink">
            <img src={tiktok} class="iconimage"></img>
          </a>
          </div>
        </div>
      </BasicPage>
  )
}


export default Contact;