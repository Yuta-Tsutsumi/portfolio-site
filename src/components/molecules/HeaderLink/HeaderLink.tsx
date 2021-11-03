import React from "react";
import PortfolioLink from "../../atoms/Portfolio/PortfolioLink";
import ProfileLink from "../../atoms/Profile/ProfileLink";
import ContactLink from "../../atoms/Contact/ContactLink";
import styles from "./HeaderLink.module.scss";

const HeaderLink: React.FC = () => {
  return (
    <div className={styles.HeaderLink}>
      <div className={styles.HomeLink}>
        <a href="">Home</a>
      </div>
      <div className={styles.OthersLink}>
        <PortfolioLink />
        <ProfileLink />
        <ContactLink />
      </div>
    </div>
  );
};

export default HeaderLink;
