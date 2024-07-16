import { Church, LockKeyhole, User } from "lucide-react";
import { Button } from "./buttons/button";
import { InputContainer, Inputs, IconContainer } from "./inputs/style-inputs";
import { DivDePosicionamento, DivTitulo, SessaoPrincipalLogin, Titulo, Subtitulo } from "./style-login";

export default function TelaDeLogin() {
  return (
    <SessaoPrincipalLogin>
      <DivDePosicionamento>
        <DivTitulo>
          <Titulo>
            <Church size={32}/>
            Bethesda Prise
          </Titulo>
          <Subtitulo>App de finanças do M. de louvor</Subtitulo>
        </DivTitulo>
        
        <InputContainer>
          <IconContainer>
            <User />
          </IconContainer>
          <Inputs type="text" placeholder='Digite o usuário' required />
        </InputContainer>

        <InputContainer>
          <IconContainer>
            <LockKeyhole />
          </IconContainer>
          <Inputs type="password" placeholder='Digite sua senha' required />
        </InputContainer>
        
        <Button>Entrar no app</Button>
      </DivDePosicionamento>
    </SessaoPrincipalLogin>
  )
}
