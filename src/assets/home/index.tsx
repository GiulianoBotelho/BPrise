import { BadgeDollarSign, Home, User } from "lucide-react";
import { CorpoPrincipal, Rodape } from "./style-main-page";


export default function PaginaInicial() {
  return (
    <>
        <CorpoPrincipal> Hello World</CorpoPrincipal>
        <Rodape>
            <Home size={32} color="#163172"/>
            <User size={32} color="#163172" />
            <BadgeDollarSign size={32} color="#163172"/>
        </Rodape>
    </>
  )
}
