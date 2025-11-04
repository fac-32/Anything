import { AttackType } from "./attack-type";

export class CharacterCreate {
  name: string;
  maxHp: number;

  constructor(name: string) {
    this.name = name;
    this.maxHp = 20;
  }
  type AttackName = keyof typeof AttackType;
  
  attack(type: AttackName): number {

    const enumValue: AttackType[AttackType];
    if (enumValue === undefined) {
        throw new Error(`Invalid attack type: ${type}`);
    }
    return enumValue * randomAttack();
  }
}

function randomAttack(): number {
  return Math.floor(Math.random() * 3) + 1;
}
