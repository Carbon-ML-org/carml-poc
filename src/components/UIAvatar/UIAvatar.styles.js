import styled from "@emotion/styled";

export const SUIAvatar = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
  justify-content: center;
  position: relative;
`;

export const SUIAvatarText = styled.span`
  position: absolute;
`;
