// Define an enum
export enum AttackType {
	Light = 1,
	Heavy = 3,
	Special = 5,
}

// Use it in a function
function attack(type: AttackType) {
  if (type === AttackType.Light) return 1;
  if (type === AttackType.Heavy) return 3;
  if (type === AttackType.Special) return 5;
}

// Call it
attack(AttackType.Heavy); // ✅ type-safe
