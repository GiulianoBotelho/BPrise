import styled from "styled-components";

export const CorpoPrincipal = styled.main`
min-height: 86vh;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
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
h4{
    color:var(--text-primary)
}
`
export const Rodape = styled.footer`
min-height: 14vh;
display: flex;
align-items: center;
justify-content: space-around;
border-radius: 0.5rem;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
border-top: solid 1px;
background-color: #f1f1f1;

`



export const SessaoDeSaldo = styled.section`
h3{
    color: var(--text-primary);
    font-size:2.2rem;
}
h1{
    color: var(--text-secondary);
    font-weight: bold;
    font-size: 3.5rem;
}
display: flex;
flex-direction: column;
text-align: right;
`

export const Figuras = styled.figure `
display: flex;
align-items: center;
flex-direction: column;
`