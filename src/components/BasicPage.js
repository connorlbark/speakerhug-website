import React, { useState, useEffect } from "react";

import Menu from "../components/Menu";
import { Logos } from '../components/Logos';

import '../index.css';

export const BasicPage = (props) => {

  return (
    <div className="page-container">
      <Menu>
        <div style={{}}>
          {props.children}
        </div>
      </Menu>  
    </div>
  )
}


export default BasicPage;