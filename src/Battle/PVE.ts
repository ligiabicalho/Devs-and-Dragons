import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter, 
    protected monsters: (SimpleFighter | Fighter)[],
  ) {
    super(player);
  }

  fight(): number {
    // luta contra monster 1, dps contra monster 2...
    this.monsters.forEach((monster, index) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        monster.attack(this.player);
        console.log('player', index, this.player.lifePoints);
        // console.log('monster', index, monster.lifePoints);
      }
    });
      
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}