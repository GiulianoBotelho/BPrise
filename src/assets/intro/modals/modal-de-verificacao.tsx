import { X } from "lucide-react";
import styled from "styled-components"

const SessaoModal = styled.section`
position: fixed;
top:0;
min-width: 350px;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
background-color: var(--background-main);
margin-top: 18px;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.5);
`

const DivModal = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 350px;
background-color: var(--background-main);
  
`

const DivModalPrincipal = styled.div`

display: flex;
position: fixed;
align-items: center;
justify-content: center;
width: 100vw;
height:100vh;
`

const TextoModal = styled.p`
color: var(--text-secondary);
font-size: 16px;
display: flex;
align-items: center;
gap:10px;
`


interface ModalDeVerificacaoProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function ModalDeVerificacao({
    children,
    onClose,
    show }:
    ModalDeVerificacaoProps) {
    if (!show) {
        return null
    }
    return (
        <DivModalPrincipal>
            <SessaoModal>
                <X onClick={onClose} size={22} />
                <DivModal>
                    <TextoModal>
                        <X size={22} color="red" />
                    {children}
                    </TextoModal>
                </DivModal>
            </SessaoModal>
        </DivModalPrincipal>

    )
}
