export default interface Energy {
  type_: EnergyType;
  amount: number;
}

export type EnergyType = 'mana' | 'stamina';