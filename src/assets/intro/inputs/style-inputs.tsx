import styled from "styled-components";

export const Inputs = styled.input`
  height: 50px;
  outline: none;
  background-color: var(--input-background); /* Fundo claro */
  border: 1px solid var(--input-border); /* Border mais escuro */
  width: 100%;
  padding: 0 10px;
  color: var(--text-primary); /* Texto mais escuro */
  font-size: 16px;
  ::placeholder {
    color: var(--input-placeholder); /* Placeholder mais escuro */
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--input-background);
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid var(--input-border); /* Border mais escuro */
  overflow: hidden;
`;

export const IconContainer = styled.div`
  padding: 0 10px;
  color: var(--text-secondary); /* Ícone mais escuro */
`;
