import React from "react";
import profile from "../../../profile.jpg";
import styles from "./ProfileImage.module.scss";

const ProfileImage: React.FC = () => {
  return (
    <div className={styles.profileAlbum}>
      <img src={profile} alt="プロフィール写真" />
    </div>
  );
};

export default ProfileImage;
