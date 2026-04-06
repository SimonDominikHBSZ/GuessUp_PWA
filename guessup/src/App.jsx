import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Mainpage from "./assets/MainPage";
import "./index.css";
import Categories from "./assets/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
