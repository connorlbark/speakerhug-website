import React, { useState, useEffect } from "react";

import '../index.css';
import './About.css';
import '../components/Footer.css'
import {MatrixText} from "../components/MatrixText";

import BasicPage from "../components/BasicPage";

export const Contact = (props) => {

  return (
      <BasicPage>
        <div>
          <MatrixText text="for all speakerhug-related matters, contact: " length={45} speed={3}></MatrixText>
          <a href="mailto:speakerhug@gmail.com">
            <MatrixText text="speakerhug@gmail.com" length={20} speed={2}></MatrixText>
          </a>
          <div style={{ height: 80 }}>

          </div>
          <div>
            <p>Instagram: </p><a href="https://www.instagram.com/speakerhug">@speakerhug</a>
          </div>
        </div>
      </BasicPage>
  )
}


export default Contact;