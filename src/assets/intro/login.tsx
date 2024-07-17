import { Church, LockKeyhole, User, X } from "lucide-react";
import Button from "./buttons/button";
import { InputContainer, Inputs, IconContainer } from "./inputs/style-inputs";
import { DivDePosicionamento, DivTitulo, SessaoPrincipalLogin, Titulo, Subtitulo } from "./style-login";
import InputDeLogin from "./inputs/inputs";
import { useState } from "react";
import ModalDeVerificacao from "./modals/modal-de-verificacao";

export default function TelaDeLogin() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassowrd] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const LeituraDoInputUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }
  const LeituraDoInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassowrd(event.target.value)
  }
  const Submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (password === '') {
      setIsOpen(true)
    }
    console.log('username:', username)
    console.log('password:', password)

  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <SessaoPrincipalLogin>
      <ModalDeVerificacao onClose={closeModal} show={isOpen}>
        <p>
          Preencha sua senha
        </p>
      </ModalDeVerificacao>
      <DivDePosicionamento>
        <DivTitulo>
          <Titulo>
            <Church size={32} />
            Bethesda Prise
          </Titulo>
          <Subtitulo>App de finanças do M. de louvor</Subtitulo>
        </DivTitulo>

        <InputContainer>
          <IconContainer>
            <User />
          </IconContainer>
          <InputDeLogin onChange={LeituraDoInputUsername} placeholder={'Digite seu usuário'} type={'text'} />
        </InputContainer>

        <InputContainer>
          <IconContainer>
            <LockKeyhole />
          </IconContainer>
          <InputDeLogin onChange={LeituraDoInputPassword} type='password' placeholder="Digite sua senha" />
        </InputContainer>
        <Button onClick={Submit}>Entrar</Button>

      </DivDePosicionamento>
    </SessaoPrincipalLogin>
  )
}
