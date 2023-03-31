import React, { useState, useEffect } from "react";

import '../index.css';
import '../components/Events.css';
import './Music.css';

import BasicPage from "../components/BasicPage";

export const Music = (props) => {

  return (
    <BasicPage>
      <div id="music-embeds">
        <div class="music-div">
          <iframe id="spotifyembed" src="https://open.spotify.com/embed/artist/79bwkhHh6qKP7dehlCdYJP?utm_source=generator&theme=0" 
            frameBorder="0"></iframe> 
        </div>
        <div class="music-div">
          <iframe id="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=1067060973/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/" seamless><a href="https://speakerhug.bandcamp.com/track/glassheart">glassheart by speakerhug</a></iframe>        
        </div>
        <div class="music-div">
          <iframe id="apple-music" src="https://embed.music.apple.com/us/album/glassheart/1656617958?i=1656617960"
            frameBorder="0"></iframe>
        </div>
      </div>
    </BasicPage>
  )
}

export default Music;