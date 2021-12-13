import React from "react";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import portfolio from "../../../imageFolder/portfolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./PortfolioPages.module.scss";

const PortfolioPages: React.FC = () => {
  return (
    <div className={styles.portfolioLetter}>
      <header className={styles.header}>
        <HeaderLink />
      </header>
      <h2>ポートフォリオサイト</h2>
      <main className={styles.letterBox}>
        <div className={styles.imageBox}>
          <div className={styles.image}>
            <a href="https://main.d20u4ljofm9ii1.amplifyapp.com/">
              <img src={portfolio} alt="ポートフォリオ写真" />
            </a>
          </div>
        </div>
        <nav className={styles.letter}>
          <div className={styles.explanation}>
            <a href="https://main.d20u4ljofm9ii1.amplifyapp.com/">aaa</a>
            <h3>アプリの特徴</h3>
            <p>
              React+TypeScriptを使用し作成したサイトになります。
              <br />
              ホバーの動き方にもこだわりを込めました。
              <br />
              これから作成するポートフォリオを載せていこうと思いますので、
              <br />
              宜しくお願いします。
            </p>
            <h3>主な使用技術</h3>
            <p>
              React/TypeScript/Sass/AWS Amplify
              <br />
              React Hook Form/React Router
            </p>
            <div className={styles.link}>
              <a
                className={styles.linkTwitter}
                href="https://twitter.com/warakera29"
              >
                <span>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
              /
              <a
                className={styles.linkGithub}
                href="https://github.com/Yuta-Tsutsumi/portfolio-site"
              >
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </a>
              /
              <a
                className={styles.linkQiita}
                href="https://qiita.com/Yuta-Tsutsumi/items/4c29b64f1344d3a2b38e"
              >
                Qiita
              </a>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default PortfolioPages;
