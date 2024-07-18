import { BadgeDollarSign, Home, User } from "lucide-react";
import { BotaoDaMain, CorpoPrincipal, Rodape, SessaoDeSaque } from "./style-main-page";

export default function PaginaInicial() {
  return (
    <>
        <CorpoPrincipal>
                <section>
           <h1>Seu saldo está em:</h1>
           </section>
           <h2>R$320,00</h2>
           <SessaoDeSaque>
            <h3>Fez alguma compra? infome aqui:</h3>
            <BotaoDaMain>Saque</BotaoDaMain>
           </SessaoDeSaque>
        </CorpoPrincipal>
        <Rodape>
            <Home size={32} color="#163172"/>
            <User size={32} color="#163172" />
            <BadgeDollarSign size={32} color="#163172"/>
        </Rodape>
    </>
  )
}
