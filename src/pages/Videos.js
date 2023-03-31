import React, { useState, useEffect } from "react";

import '../index.css';
import "./Videos.css";

import BasicPage from "../components/BasicPage";


export const Shows = (props) => {

  return (
    <BasicPage>
      <div id="video-embeds">
        <iframe class="yt-embed" src="https://www.youtube.com/embed/CoM_PE8Yvuo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe class="yt-embed" src="https://www.youtube.com/embed/aWUKTq_dtpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe class="yt-embed" src="https://www.youtube.com/embed/HSvYdRSYZsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </BasicPage>
  )
}

export default Shows;