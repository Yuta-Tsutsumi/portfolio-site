import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePages from "./components/Pages/HomePages/HomePages";
import ContactPages from "./components/Pages/ContactPages/ContactPages";
import ProfilePages from "./components/Pages/ProfilePages/ProfilePages";
import PortfolioPages from "./components/Pages/PortfolioPages/PortfolioPages";
import styles from "./App.module.scss";
import HeaderLink from "./components/molecules/HeaderLink/HeaderLink";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePages />
        </Route>
        <Route path="/profile">
          <ProfilePages />
        </Route>
        <Route path="/portfolio">
          <PortfolioPages />
        </Route>
        <Route path="/contact">
          <ContactPages />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
