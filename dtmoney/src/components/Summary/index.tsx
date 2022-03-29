import icomeImg from '../../assets/income.svg';
import oucomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Contnainer } from "./style";

export function Summary() {
  return(
    <Contnainer>
     <div>
       <header>
        <p>Entradas</p>
        <img src={icomeImg} alt="Entradas" />
       </header>
      <strong>R$1000,00</strong>
     </div>     <div>
       <header>
        <p>Entradas</p>
        <img src={oucomeImg} alt="Saídas" />
       </header>
      <strong>- R$500,00</strong>
     </div>
     <div className="highlight-background">
       <header>
        <p>Entradas</p>
        <img src={totalImg} alt="Entradas" />
       </header>
      <strong>R$500,00</strong>
     </div>
    </Contnainer>
  );
};