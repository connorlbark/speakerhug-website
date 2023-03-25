import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import '../index.css';
import './Photos.css';
import { MatrixText } from "../components/MatrixText";
import { Logos } from "../components/Logos";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";


import brendan from "../images/press/Brendan Shirtless, Drum Solo.jpg"
import fullband from "../images/press/Full Band.jpg"
import fullbandoutside from "../images/press/Full Band Outside.png"
import connorscream from "../images/press/Connor Screaming.jpg"
import connorlex from "../images/press/Connor and Lex.jpg"
import scriptures from "../images/press/Scriptures Cover.png"


export const Photos = (props) => {

  return (
    <div class="page-container">
      <Logos></Logos>
      <div class="content-wrap">
        <Menu>
          <div class="photogallery">
            <div className="photocol">
              <img src={fullband} className="singlephoto"/>
              <img src={brendan} className="singlephoto"></img>
              <img src={connorlex} className="singlephoto"></img>
            </div>
            <div class="photocol">
              <img src={connorscream} className="singlephoto"></img>
              <img src={fullbandoutside} className="singlephoto"></img>
              <img src={scriptures} className="singlephoto"></img>
            </div>
          </div>
        </Menu>
      </div>
      <Footer/>
    </div>
  )
}