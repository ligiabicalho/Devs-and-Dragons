import Archetype, { Mage, 
  Necromancer, 
  Ranger, 
  Warrior,
  archetypeTypes } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf, Dwarf, Orc, Halfling, RaceTypes } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _lifePoints: number; // como ser readonly e ter q alterar em receiveDamage?

  constructor(
    private _name: string, 
    private raceType?: RaceTypes,
    private archetypeType?: archetypeTypes,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = this.setRace(raceType);
    // this._race = new raceChoice(this._name, this._dexterity);
    this._archetype = this.setArchetype(archetypeType);
    // this._archetype = new Mage(this._name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  setRace(raceType: RaceTypes = 'Elf'): Race {
    switch (raceType) {
      case 'Dwarf':
        return new Dwarf(this._name, this._dexterity);
      case 'Halfling':
        return new Halfling(this._name, this._dexterity);
      case 'Orc':
        return new Orc(this._name, this._dexterity);
      default:
        return new Elf(this._name, this._dexterity);
    }
  }

  setArchetype(archetypeType: archetypeTypes = 'Mage'): Archetype {
    switch (archetypeType) {
      case 'Necromancer':
        return new Necromancer(this._name);
      case 'Ranger':
        return new Ranger(this._name);
      case 'Warrior':
        return new Warrior(this._name);
      default:
        return new Mage(this._name);
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else { 
      this._lifePoints -= 1; 
    }
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
  
  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  } 
  
  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    } 
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  // special?(enemy: Fighter | SimpleFighter): void; 

  get dexterity(): number {
    return this._dexterity;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy }; // retorna uma cópia, para não ser possível alterar.
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get name(): string {
    return this._name;
  }
}