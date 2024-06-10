export const createCharacter = (name, type, attributes) => {
    return {
      name,
      type,
      attributes,
      level: 1,
    };
  };
  
  export const updateAttributes = (character, newAttributes) => {
    character.attributes = { ...character.attributes, ...newAttributes };
  };