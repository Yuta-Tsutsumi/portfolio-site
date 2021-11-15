import React from "react";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./PortfolioPages.module.scss";

const PortfolioPages: React.FC = () => {
  return (
    <div className={styles.portfolioLetter}>
      <HeaderLink />
      <h2>Portfolio</h2>
    </div>
  );
};

export default PortfolioPages;
