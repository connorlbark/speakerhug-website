import "./Footer.css"

import spotify from "../images/icons/Spotify.svg";
import youtube from "../images/icons/youtube.svg";
import tiktok from "../images/icons/Tik Tok.svg";
import instagram from "../images/icons/Instagram.svg";

export function Footer(props) {
  return (
    <div class="footer">
      <footer>
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
        <a href="mailto:speakerhug@gmail.com">speakerhug@gmail.com</a>
      </footer>
    </div>
  )
}