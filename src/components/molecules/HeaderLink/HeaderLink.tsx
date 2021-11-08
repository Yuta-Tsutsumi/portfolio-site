import React from "react";
import styles from "./HeaderLink.module.scss";
import LinkText from "../../atoms/LinkText/LinkText";

const HeaderLink: React.FC = () => {
  return (
    <div className={styles.HeaderLink}>
      <div className={styles.HomeLink}>
        <LinkText url="/" text="Home" />
      </div>
      <div className={styles.OthersLink}>
        <LinkText url="/portfolio" text="Portfolio" />
        <LinkText url="/profile" text="Profile" />
        <LinkText url="/contact" text="Contact" />
      </div>
    </div>
  );
};

export default HeaderLink;
