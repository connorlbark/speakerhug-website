import React, { useState, useEffect } from "react";

import '../index.css';
import '../components/Events.css';

import BasicPage from "../components/BasicPage";
import EventDescription from "../components/EventDescription";

const show_json = require('../shows.json');

export const Shows = (props) => {

  return (
    <BasicPage>
      <div class="eventlist">
        {show_json.map( (show) => {
          return (
            <EventDescription date={show.date} venue={show.venue} bands={show.bands} ticketlink={show.ticketlink}/>
          )
        })}
      </div>
    </BasicPage>
  )
}

export default Shows;