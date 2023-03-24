import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../index.css';
import '../components/MatrixText'
import { MatrixText } from "../components/MatrixText";

export const Menu = (props) => {
  return (
    <div>
      <div class={menu-sidebar}>
        {/* This is the sidebar div  */}
        <ul>
          <li><Link to="/about"><MatrixText text="about " length={10} speed={7} ></MatrixText></Link></li>
          <li><Link to="/music"><MatrixText text="music " length={10} speed={6}></MatrixText></Link></li>
          <li><Link to="/art"><MatrixText text="art " length={10} speed={5}></MatrixText></Link></li>
          <li><Link to="/photos"><MatrixText text="photos " length={10} speed={5}></MatrixText></Link></li>
          <li><Link to="/events"><MatrixText text="events " length={10} speed={4}></MatrixText></Link></li>
          <li><Link to="/videos"><MatrixText text="videos " length={10} speed={3}></MatrixText></Link></li>
          <li><Link to="/contact"><MatrixText text="contact " length={10} speed={2}></MatrixText></Link></li>
        </ul>
      </div>
      <div>
        {/* props.children is the "main content" */}
        {props.children}
      </div>
    </div>
  )
}

export default Menu;