import styled from "styled-components";

// export const BotaoEstilo = styled.button`
//   width: 100%;
//   padding: 15px;
//   background-color: var(--button-background);
//   color: var(--button-text);
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;
//   &:hover {
//     background-color: var(--button-hover-background);
//   }
// `
export const BotaoEstilo = styled.button<{$primary?: boolean;}>`
  background-color: ${props => props.$primary ? '#1e56a0' : "#f1f1f1"};
  color: ${props => props.$primary ? '#fff' : '#1e56a0'};
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  padding: 15px;
  order: 2px solid #1e56a0;
  border-radius: 4px;
`

interface ButtonProps{
  onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
  children:string;
}


export default function Button({ onClick, children}:ButtonProps) {
  return (
   <BotaoEstilo $primary onClick={onClick}>
        {children}
   </BotaoEstilo>
  )
}
