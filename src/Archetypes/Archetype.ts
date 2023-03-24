import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _special: number;
  private readonly _cost: number;
  abstract get energyType(): EnergyType;

  constructor(private readonly _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }
}

export default Archetype;