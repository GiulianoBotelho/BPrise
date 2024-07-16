import styled from "styled-components";
export const Button = styled.button<{$primary?: boolean;}>`
    background: ${props => props.$primary ? "#Bf4f74" : "white"};
    color: ${props => props.$primary ? "white" : "#Bf4f74"};
    font-size: 1em;
    margin:1em;
    padding: 0.25em 1em;
    border:2px solid #bf4f74;
    border-radius: 3px;

`