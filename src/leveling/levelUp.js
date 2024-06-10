const MAX_LEVEL = 10;

export const levelUpCharacter = (character) => {
  if (character.level < MAX_LEVEL) {
    character.levelUp();
    console.log(`${character.name} leveled up to level ${character.level}!`);
  } else {
    console.log(`${character.name} is already at the maximum level!`);
  }
};