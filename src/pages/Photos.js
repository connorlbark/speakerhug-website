import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../index.css';
import { MatrixText } from "../components/MatrixText";
import { Logos } from "../components/Logos";
import { Menu } from "../components/Menu";

export const Photos = (props) => {
  return (
    <div>
      <Logos></Logos>
      <Menu>
        <div className="photogallery">
          <p>some Photos.</p>
          <img src='../images/press/Brendan.jpg'></img>
          <img src='/src/images/press/Full Band.jpg'></img>
          <img src='/src/images/press/Full Band Outside.jpg'></img>
        </div>
      </Menu>
    </div>
  )
}