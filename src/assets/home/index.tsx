import { BadgeDollarSign, Home, User } from "lucide-react";
import { CorpoPrincipal, Figuras, Rodape, SessaoDeSaldo, SessaoDeSaque } from "./style-main-page";
import { BotaoEstilo } from "../intro/buttons/button";

export default function PaginaInicial() {
  return (
    <>
        <CorpoPrincipal>
                <SessaoDeSaldo>
           <h3>Saldo atual</h3>
           <h1>R$320,00</h1>
           </SessaoDeSaldo>
           <SessaoDeSaque>
            <h4>Fez alguma compra? infome aqui:</h4>
            <BotaoEstilo $primary>Saque</BotaoEstilo>
            <BotaoEstilo>Relatório de saques</BotaoEstilo>
           </SessaoDeSaque>
        </CorpoPrincipal>
        <Rodape>
          <Figuras>
            <Home size={32} color="#163172"/>
            <figcaption>Inicio</figcaption>
            </Figuras>
            <Figuras>
               <User size={32} color="#163172" />
               <figcaption>Membros</figcaption>
               </Figuras>
              <Figuras>
            <BadgeDollarSign size={32} color="#163172"/>
            <figcaption>Cobrar</figcaption>
            </Figuras>
        </Rodape>
    </>
  )
}
