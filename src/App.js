import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideNavigationBar/SideNavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import ExploreCollection from "./components/ExploreCollection/ExploreCollection"

function App() {
  return (
    <BrowserRouter>
    <TopNavBar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ExploreCollection" element={<ExploreCollection />} />
        </Routes>
        <Footer />
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
