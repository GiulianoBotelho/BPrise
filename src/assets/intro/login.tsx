import { Church, LockKeyhole, User } from "lucide-react";
import { Button } from "./buttons/button";
import { FigurasLucide, Inputs } from "./inputs/style-inputs";
import { DivDePosicionamento, DivTitulo, SessaoPrincipalLogin, Titulo } from "./style-login";


export default function TelaDeLogin() {
  return (
    <SessaoPrincipalLogin>
      <DivDePosicionamento>
        <DivTitulo>
          <Titulo>
            <Church/>
            Bethesda Prise
          </Titulo>
          <h4 >App de finanças do M. de louvor</h4>
        </DivTitulo>
        <FigurasLucide>
          <User />
          <Inputs type="text" placeholder='Digite o usuário' required />
        </FigurasLucide>

        <FigurasLucide>
          <LockKeyhole  />
          <Inputs type="password" placeholder='Digite sua senha' required />
        </FigurasLucide>
        <Button>Entrar no app</Button>
      </DivDePosicionamento>
    </SessaoPrincipalLogin>
  )
}
