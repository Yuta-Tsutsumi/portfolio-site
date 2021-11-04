import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import HomePages from "./components/Pages/HomePages/HomePages";
import ContactPages from "./components/Pages/ContactPages/ContactPages";
import ProfilePages from "./components/Pages/ProfilePages/ProfilePages";
import PortfolioPages from "./components/Pages/PortfolioPages/PortfolioPages";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">HomePages</Link>
        <br />
        <Link to="/ProfilePages">ProfilePages</Link>
        <br />
        <Link to="/PortfolioPages">PortfolioPages</Link>
        <br />
        <Link to="/ContactPages">ContactPages</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <HomePages />
        </Route>
        <Route path="/ProfilePages">
          <ProfilePages />
        </Route>
        <Route path="/PortfolioPages">
          <PortfolioPages />
        </Route>
        <Route path="/ContactPages">
          <ContactPages />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

//     <div>
//       <ProfilePages />
//       <PortfolioPages />
//       <HomePages />
//       <ContactPages />
//     </div>
