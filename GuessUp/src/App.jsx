import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Mainpage from "./assets/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
