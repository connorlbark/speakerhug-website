import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

export const App = (props) => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;