import React, { useState, useEffect } from "react";

import '../index.css';
import './Photos.css';

import brendan from "../images/press/Brendan Shirtless, Drum Solo.jpg"
import fullband from "../images/press/Full Band.jpg"
import fullbandoutside from "../images/press/Full Band Outside.png"
import connorscream from "../images/press/Connor Screaming.jpg"
import connorlex from "../images/press/Connor and Lex.jpg"
import scriptures from "../images/press/Scriptures Cover.png"
import BasicPage from "../components/BasicPage";

function Instagram(props) {
  if (props.handle != undefined) {
    const full_link = "https://www.instagram.com/" + props.handle + "/"
    const full_handle = "@" + props.handle

    return (
      <a href={full_link}>{full_handle}</a>
    )
  }
}

export const Photos = (props) => {

  return (
    <BasicPage>
      <div class="photogallery">
        <div className="photocol">
          <div>
            <img src={fullband} className="singlephoto"/>
            <Instagram handle="woahitso"></Instagram>
          </div>
          <img src={brendan} className="singlephoto"></img>
          <Instagram handle="woahitso"></Instagram>
          <img src={connorlex} className="singlephoto"></img>
          <Instagram handle="woahitso"></Instagram>
        </div>
        <div class="photocol">
          <img src={connorscream} className="singlephoto"></img>
          <Instagram handle="woahitso"></Instagram>
          <img src={fullbandoutside} className="singlephoto"></img>
          <Instagram handle="madisonmurillo"></Instagram>
          <img src={scriptures} className="singlephoto"></img>
        </div>
      </div>
    </BasicPage>
  )
}