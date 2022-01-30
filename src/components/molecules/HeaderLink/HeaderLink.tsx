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
        <div className={styles.top}>
          <LinkText url="/portfolio" text="Portfolio" />
        </div>

        <div className={styles.middle}>
          <LinkText url="/profile" text="Profile" />
        </div>

        <div className={styles.bottom}>
          <LinkText url="/contact" text="Contact" />
        </div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HeaderLink;
