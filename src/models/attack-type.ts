// Define an enum
export enum AttackType {
  Light = "Light",
  Heavy = "Heavy",
  Special = "Special",
}

// Use it in a function
function attack(type: AttackType) {
  if (type === AttackType.Light) return 1;
  if (type === AttackType.Heavy) return 3;
  if (type === AttackType.Special) return 5;
}

// Call it
attack(AttackType.Heavy); // ✅ type-safe
