import React from "react";
import { SUIAvatar, SUIAvatarText } from "./UIAvatar.styles";

function UIAvatar({ bgColor, children, color, size }) {
  return (
    <SUIAvatar color={color} size={size}>
      <SUIAvatarText>{children}</SUIAvatarText>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <path
          fill={bgColor}
          stroke="none"
          d="M 0,20 C 0,0 0,0 20,0 S 40,0 40,20 40,40 20,40 0,40 0,20"
        />
      </svg>
    </SUIAvatar>
  );
}

UIAvatar.defaultProps = {
  bgColor: "#e91e63",
  color: "#ffffff",
  size: 40,
};

export default UIAvatar;
