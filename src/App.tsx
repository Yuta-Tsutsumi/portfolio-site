import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import HomePages from "./components/Pages/HomePages/HomePages";
import ContactPages from "./components/Pages/ContactPages/ContactPages";
import ProfilePages from "./components/Pages/ProfilePages/ProfilePages";
import PortfolioPages from "./components/Pages/PortfolioPages/PortfolioPages";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <ProfilePages />
        <PortfolioPages />
        <HomePages />
        <ContactPages />
      </div>
    </BrowserRouter>
  );
};

export default App;
