import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import { Photos } from "./pages/Photos";
import Contact from "./pages/Contact";
import Shows from "./pages/Shows";
import Music from "./pages/Music";
import Videos from "./pages/Videos"

export const App = (props) => {

  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route path="/" exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/music' element={<Music />} />
          <Route path='/videos' element={<Videos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;