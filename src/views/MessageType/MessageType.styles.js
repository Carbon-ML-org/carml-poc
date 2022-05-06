import styled from "@emotion/styled";
import { CardHeader } from "@mui/material";

export const SCode = styled.code`
  background-color: #bbc5fb;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SCardHeader = styled(CardHeader)`
  padding-top: 0;
  padding-bottom: 0;

  h5,
  h6 {
    padding-top: 1rem;
    padding-bottom: 1rem;
    scroll-margin-top: 4rem;
  }
`;
