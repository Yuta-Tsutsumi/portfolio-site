import React from "react";
import "./ProfileImage.scss";

import profile from "../../../profile.jpg";

const ProfileImage = () => {
  return (
    <div className="profileAlbum">
      <img src={profile} alt="プロフィール写真" />
    </div>
  );
};

export default ProfileImage;
