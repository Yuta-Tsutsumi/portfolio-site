import React from "react";
import PortfolioSite from "../../template/PortfolioSite/PortfolioSite";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./PortfolioPages.module.scss";

const PortfolioPages: React.FC = () => {
  return (
    <div className={styles.root}>
      <HeaderLink />
      <h2>Portfolio</h2>
      <PortfolioSite />
    </div>
  );
};

export default PortfolioPages;
