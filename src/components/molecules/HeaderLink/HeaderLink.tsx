import React from "react";

const HeaderLink: React.FC = () => {
  return (
    // HeaderLinkに対して、「display:flex, justify-content:space-between」
    <div className="HeaderLink">
      <div>HOMEリンク</div>
      <div>
        その他のリンクコンポーネント１、その他のリンクコンポーネント２、その他のリンクコンポーネント３
      </div>
    </div>
  );
};

export default HeaderLink;
