import React from "react";
import PortfolioLink from "../../atoms/Portfolio/PortfolioLink";
import ProfileLink from "../../atoms/Profile/ProfileLink";
import ContactLink from "../../atoms/Contact/ContactLink";
import "./HeaderLink.scss";

const HeaderLink: React.FC = () => {
  return (
    // HeaderLinkに対して、「display:flex, justify-content:space-between」
    <div className="HeaderLink">
      <div className="HomeLink">
        <a href="">Home</a>
      </div>
      <div className="OthersLink">
        <PortfolioLink />
        <ProfileLink />
        <ContactLink />
      </div>
    </div>
  );
};

export default HeaderLink;
