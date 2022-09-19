import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideNavigationBar/SideNavigationBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
