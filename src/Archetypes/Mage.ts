import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static archetypeCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.archetypeCount += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.archetypeCount;
  }
}