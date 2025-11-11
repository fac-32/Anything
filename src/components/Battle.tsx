import { useState } from "react";
import { CharacterCreate } from "../models/character-create";
import { AttackType } from "../models/attack-type";

export default function Battle() {
  const [anson, setAnson] = useState(new CharacterCreate("Anson"));
  const [juan, setJuan] = useState(new CharacterCreate("Juan"));
  const [lastAttack, setLastAttack] = useState<{
    damage: number;
    type: AttackType;
  } | null>(null);

  const getRandomAttackType = (): AttackType => {
    const types = Object.values(AttackType).filter(
      (v) => typeof v === "number"
    ) as AttackType[];
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];
  };

  // Safely update HP while preserving all properties
  const takeDamage = (character: CharacterCreate, damage: number) => {
    const updated = new CharacterCreate(character.name);
    Object.assign(updated, character); // keep all fields/methods
    updated.maxHp = Math.max(0, character.maxHp - damage);
    return updated;
  };

  const handleAttack = (
    attacker: CharacterCreate,
    defender: CharacterCreate,
    setDefender: React.Dispatch<React.SetStateAction<CharacterCreate>>
  ) => {
    // Ensure attack() exists and returns a number
    const type = getRandomAttackType();
    const damage = attacker.attack(type);
    setDefender(takeDamage(defender, damage));
    setLastAttack({ damage, type });
  };

  return (
    <div>
      <h2>Battle</h2>
      <p>
        {anson.name} (HP: {anson.maxHp}) vs {juan.name} (HP: {juan.maxHp})
      </p>

      <button onClick={() => handleAttack(anson, juan, setJuan)}>
        Anson attacks
      </button>
      <button onClick={() => handleAttack(juan, anson, setAnson)}>
        Juan attacks
      </button>

      {lastAttack && (
        <p>
          Last attack: {AttackType[lastAttack.type]} – Damage:{" "}
          {lastAttack.damage}
        </p>
      )}
    </div>
  );
}
