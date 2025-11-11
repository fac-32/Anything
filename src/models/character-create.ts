// models/character-create.ts
import { AttackType } from "./attack-type";

export class CharacterCreate {
  name: string;
  maxHp: number;
  attackPower: number;

  constructor(name: string) {
    this.name = name;
    this.maxHp = 200;
    this.attackPower = 10;
  }

  attack(type: AttackType): number {
    return Math.floor(this.attackPower * type); // scales damage by enum value
  }
}
