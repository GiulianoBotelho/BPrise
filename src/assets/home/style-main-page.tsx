import styled from "styled-components";
import { BotaoEstilo } from "../intro/buttons/button";

export const CorpoPrincipal = styled.main`
min-height: 90vh;
text-align: center;
section{
    display: flex;
    align-items: center;
    justify-content: center;
}
`
export const SessaoDeSaque = styled.section`
display: flex;
align-items: center;
flex-direction: column;
`
export const Rodape = styled.footer`
min-height: 10vh;
display: flex;
align-items: center;
justify-content: space-around;
border-radius: 0.5rem;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
border-top: solid 1px;
background-color: #f1f1f1;
:hover{
    margin-bottom: 8px;
}
`

export const BotaoDaMain = styled(BotaoEstilo)`
width: 100px;
`