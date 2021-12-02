import React from "react";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./HomePages.module.scss";

const HomePages: React.FC = () => {
  return (
    <div className={styles.homeImage}>
      <div className={styles.heading}>
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
