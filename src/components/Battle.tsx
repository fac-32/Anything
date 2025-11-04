import { useState } from "react";
import { CharacterCreate } from "../models/character-create";
import { AttackType } from "../models/attack-type";

export default function Battle() {
  // Create characters
  const [anson, setAnson] = useState(new CharacterCreate("Anson"));
  const [juan, setJuan] = useState(new CharacterCreate("Juan"));

  // Track last attack for UI
  const [lastAttack, setLastAttack] = useState<{
    damage: number;
    type: AttackType;
  } | null>(null);

  // Function to apply damage
  const takeDamage = (character: CharacterCreate, damage: number) => {
    return { ...character, maxHp: Math.max(0, character.maxHp - damage) };
  };

  // Handle attacks
  const handleAttack = (
    attacker: CharacterCreate,
    defender: CharacterCreate,
    setDefender: any,
    type: AttackType
  ) => {
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
      <button
        onClick={() => handleAttack(anson, juan, setJuan, AttackType.Light)}
      >
        Anson attacks
      </button>
      <button
        onClick={() => handleAttack(juan, anson, setAnson, AttackType.Heavy)}
      >
        Juan attacks
      </button>

      {lastAttack && (
        <p>
          Last attack: {lastAttack.type}, Damage: {lastAttack.damage}
        </p>
      )}
    </div>
  );
}
