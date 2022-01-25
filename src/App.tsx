import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePages from "./components/pages/HomePages/HomePages";
import ContactPages from "./components/pages/ContactPages/ContactPages";
import ProfilePages from "./components/pages/ProfilePages/ProfilePages";
import PortfolioPages from "./components/pages/PortfolioPages/PortfolioPages";

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
