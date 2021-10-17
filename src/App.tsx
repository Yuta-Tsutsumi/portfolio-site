import React, { Component } from "react";
import HomeLink from "./components/atoms/Home/HomeLink";
import PortfolioLink from "./components/atoms/Portfolio/PortfolioLink";
import ProfileLink from "./components/atoms/Profile/ProfileLink";
import ContactLink from "./components/atoms/Contact/ContactLink";
import Button from "./components/atoms/Button/Button";
import ContactText from "./components/molecules/ContactText/ContactText";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="hero">
      <HomeLink />
      <PortfolioLink />
      <ProfileLink />
      <ContactLink />
      <Button />
      <ContactText />
    </div>
  );
};

export default App;
