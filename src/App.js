import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import { Photos } from "./pages/Photos";

export const App = (props) => {

  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route path="/" exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/photos' element={<Photos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;