import { createCharacter, updateAttributes } from './characterTypes.js';
import { MAX_INVENTORY_SIZE } from '../inventory/inventoryManagement.js';

export const createCharacterFactory = (name, type, attributes) => {
  const character = createCharacter(name, type, attributes);

  return {
    ...character,
    inventory: [],
    levelUp: () => {
      character.level++;
      // Additional logic for leveling up, such as increasing attributes or gaining new abilities
    },
    addItem: (item) => {
      if (character.inventory.length < MAX_INVENTORY_SIZE) {
        character.inventory.push(item);
        console.log(`${character.name} added ${item.name} to their inventory.`);
      } else {
        console.log(`${character.name}'s inventory is full.`);
      }
    },
    removeItem: (itemName) => {
      character.inventory = character.inventory.filter(item => item.name !== itemName);
      console.log(`${character.name} removed ${itemName} from their inventory.`);
    },
  };
};