import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instancesCount += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.instancesCount;
  }
}