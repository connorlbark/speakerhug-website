import { Link } from "react-router-dom";

export function Logos() {
  return (
    <div>
      <img src={require('../images/logos/text.png')} className="logo glitch" alt="speakerhug logo"/>
      <img src={require('../images/logos/homepage_angel.PNG')} className="angel" alt=""/>
    </div>
  )
}