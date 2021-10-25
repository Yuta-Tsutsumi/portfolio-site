import React from "react";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import "./HomePages.scss";

const HomePages: React.FC = () => {
  return (
    <div className="HomeImage">
      <div>
        <HeaderLink />
      </div>
      <div>
        <h1>
          Welcome to <br />
          my portfolio.
        </h1>
      </div>
    </div>
  );
};

export default HomePages;
