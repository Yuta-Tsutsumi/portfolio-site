import React from "react";
import styles from "./HeaderLink.module.scss";
import LinkText from "../../atoms/LinkText/LinkText";

const HeaderLink: React.FC = () => {
  return (
    <div className={styles.headerLink}>
      <div className={styles.homeLink}>
        <LinkText url="/" text="Home" />
      </div>
      <div className={styles.othersLink}>
        <LinkText url="/portfolio" text="Portfolio" />
        <LinkText url="/profile" text="Profile" />
        <LinkText url="/contact" text="Contact" />
      </div>
    </div>
  );
};

export default HeaderLink;
