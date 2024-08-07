import styled from "styled-components";

export const SessaoPrincipalLogin = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-main);
  padding: 20px; 
  
`;

export const DivDePosicionamento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  width: 100%;
  max-width: 450px; 
  padding: 20px;
  border-radius: 0.5rem;
  background-color: var(--background-main);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const Titulo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--text-primary);
  font-size: 24px;
`;

export const Subtitulo = styled.h4`
  color: var(--text-secondary);
  font-size: 16px;
`;

export const DivTitulo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
