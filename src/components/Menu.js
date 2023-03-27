import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../index.css';
import './MatrixText'
import { MatrixText } from "./MatrixText";

export const Menu = (props) => {
  return (
    <div>
      <div class={"menu_sidebar"}>
        {/* This is the sidebar div  */}
        <ul>
        <li><Link to="/"><MatrixText text="home " length={5} speed={7} ></MatrixText></Link></li>
          <li><Link to="/about"><MatrixText text="about " length={6} speed={7} ></MatrixText></Link></li>
          <li><Link to="/music"><MatrixText text="music " length={6} speed={6}></MatrixText></Link></li>
          <li><Link to="/photos"><MatrixText text="photos " length={7} speed={5}></MatrixText></Link></li>
          <li><Link to="/shows"><MatrixText text="shows " length={6} speed={4}></MatrixText></Link></li>
          <li><Link to="/videos"><MatrixText text="videos " length={7} speed={3}></MatrixText></Link></li>
          <li><Link to="/contact"><MatrixText text="contact " length={8} speed={2}></MatrixText></Link></li>
        </ul>
      </div>
      <div class={'main_content'}>
        {/* props.children is the "main content" */}
        {props.children}
      </div>
    </div>
  )
}

export default Menu;