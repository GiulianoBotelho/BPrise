import styled from "styled-components";

export const BotaoEstilo = styled.button`
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
`

interface ButtonProps{
  onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
  children:string;
}


export default function Button({ onClick, children}:ButtonProps) {
  return (
   <BotaoEstilo onClick={onClick}>
        {children}
   </BotaoEstilo>
  )
}
