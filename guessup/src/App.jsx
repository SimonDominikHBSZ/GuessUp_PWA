import { MemoryRouter, Route, Routes } from "react-router";
import Mainpage from "./assets/MainPage";
import "./index.css";
import Categories from "./assets/Categories";

function App() {
  return (
    <>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </MemoryRouter>
    </>
  );
}

export default App;
