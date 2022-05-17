import styled from "@emotion/styled";
import { DialogActions } from "@mui/material";
import { darkBgColor, darkColor } from "../../theme";

export const SMTChoices = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SMTChoice = styled.div`
  border: 0.063rem solid #c1c1c1;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0.5rem;
  }
`;

export const SMTChoiceText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.15rem 1.15rem;
`;

export const SMTSelectors = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0.5rem;
`;

export const SMTHeader = styled.div`
  padding: 1rem 1.35rem 0;
`;

export const SMTActions = styled(DialogActions)`
  background-color: #eaedf0;
  border-top: 1px solid #c1c1c1;
`;
