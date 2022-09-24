import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideNavigationBar/SideNavigationBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import ExploreCollection from "./components/ExploreCollection/ExploreCollection";
import Profile from "./components/Profile/Profile";
import NFT_Detail from "./components/NFT_Detail/NFT_Detail";
import CollectionDetail from "./components/CollectionDetail/CollectionDetail";

function App() {
  return (
    <BrowserRouter>
      <TopNavBar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ExploreCollection" element={<ExploreCollection />} />
          <Route path="/newlistedCollection" element={<ExploreCollection />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/nftdetails" element={<NFT_Detail />} />
          <Route path="/collectiondetail" element={<CollectionDetail />} />
        </Routes>
        <Footer />
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
