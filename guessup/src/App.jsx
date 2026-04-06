import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router";
import Mainpage from "./assets/MainPage";
import "./index.css";
import Categories from "./assets/Categories";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
