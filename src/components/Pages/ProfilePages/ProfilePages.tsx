import React from "react";
import ProfileImage from "../../molecules/ProfileImage/ProfileImage";
import profileTopImage from "../../../profileTopImage.jpg";
import styles from "./ProfilePages.module.scss";

const ProfilePages: React.FC = () => {
  return (
    <>
      <div className={styles.topImage}>
        <img src={profileTopImage} alt="トップ画像" />
      </div>

      <div className={styles.middleImage}>
        <ProfileImage />
      </div>

      <div className={styles.letterBottom}>
        <p>堤 佑太</p>
        <p>Yuta Tsutsumi</p>
        <p>1993年12月21日</p>
        <p>Twitter/GitHub/Qiita</p>
      </div>
      <div className={styles.letterProfile}>
        <a href="">Profile</a>
      </div>
    </>
  );
};

export default ProfilePages;
