import styled from "styled-components";

export const Inputs = styled.input`
  height: 50px;
  outline: none;
  background-color: var(--input-background); 
  border: 1px solid var(--input-border); 
  width: 100%;
  padding: 0 10px;
  color: var(--text-primary); 
  font-size: 16px;
  ::placeholder {
    color: var(--input-placeholder); 
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--input-background);
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid var(--input-border); 
  overflow: hidden;
`;

export const IconContainer = styled.div`
  padding: 0 10px;
  color: var(--text-secondary); 
`;
