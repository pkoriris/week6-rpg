export const MAX_INVENTORY_SIZE = 5;

// src/index.js
import { createCharacterFactory } from './characters/characterFactory.js';
import { attack } from './battle/battleSystem.js';
import { levelUpCharacter } from './level/levelUp.js';
import { MAX_INVENTORY_SIZE } from './inventory/inventoryManagement.js';

// Example usage
const warrior = createCharacterFactory('Conan', 'Warrior', { strength: 10, defense: 5 });
const wizard = createCharacterFactory('Gandalf', 'Wizard', { magicPower: 15, intelligence: 8 });

attack(warrior, wizard);
levelUpCharacter(warrior);