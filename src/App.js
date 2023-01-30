import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

export const App = (props) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;