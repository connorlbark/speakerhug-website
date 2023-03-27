import React, { useState, useEffect } from "react";

import '../index.css';
import '../components/Events.css';

import BasicPage from "../components/BasicPage";
import EventDescription from "../components/EventDescription";

export const Shows = (props) => {

  return (
    <BasicPage>
      <div class="eventlist">
        <EventDescription date="March 25th" venue="The Tourist Trap" 
            bands="Cilantro, Speakerhug, Videodaze" ticketlink="example_tix"/>
        <EventDescription date="April 2nd" venue="State Park"/>
        <EventDescription date="April 20th" venue="Boston College"/>
        <EventDescription date="April 21st" venue="Exit Galleries"/>
        <EventDescription date="April 27th" venue="Union Tavern"/>
      </div>
    </BasicPage>
  )
}

export default Shows;