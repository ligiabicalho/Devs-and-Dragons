import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(
    protected player1: Fighter, 
    protected player2: Fighter,
  ) {
    super(player1);
    super.fight();
    if (super.fight() === 1) {
      console.log(`${player1} Venceu!`);
    } else console.log(`${player2} Venceu!`);
  }

  fight(): number {
    // neste caso, evita chutar cachorro morto ^^'
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }

    // while: primeiro verifica a condição, so dps executa a declaração
    // do...while: primeiro executa, dps verifica pra saber se executa novamente ou não.

    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}