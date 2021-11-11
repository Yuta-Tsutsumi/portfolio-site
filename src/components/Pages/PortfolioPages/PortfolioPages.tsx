import React from "react";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./PortfolioPages.module.scss";

const PortfolioPages: React.FC = () => {
  return (
    <div className={styles.portfolioLetter}>
      <HeaderLink />
      <div>Portfolio</div>
    </div>
  );
};

export default PortfolioPages;
