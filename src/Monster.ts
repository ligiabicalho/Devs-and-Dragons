import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
  
  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  } 
  
  get lifePoints(): number {
    return this._lifePoints;
  } 

  get strength(): number {
    return this._strength;
  }
}