import React, { useState, useEffect } from "react";

import Menu from "../components/Menu";
import { Logos } from '../components/Logos';

import '../index.css';
import {Footer} from "../components/Footer";

export const BasicPage = (props) => {

  return (
    <div className="page-container">
      <div>
        <Logos />
      </div>
      <Menu>
        <div style={{}}>
          {props.children}
        </div>
      </Menu>  
      <Footer/>
    </div>
  )
}


export default BasicPage;