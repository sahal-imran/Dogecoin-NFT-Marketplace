import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideNavigationBar/SideNavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import TopNavBar from "./components/TopNavBar/TopNavBar";

function App() {
  return (
    <BrowserRouter>
    <TopNavBar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
