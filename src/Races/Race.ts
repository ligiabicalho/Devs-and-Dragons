abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;
  abstract get maxLifePoints(): number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}

export default Race;