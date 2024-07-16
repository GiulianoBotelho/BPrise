import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: var(--button-background);
  color: var(--button-text);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: var(--button-hover-background);
  }
`;
