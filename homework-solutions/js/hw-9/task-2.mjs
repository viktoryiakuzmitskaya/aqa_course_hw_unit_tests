/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name === 'string' && typeof character.age === 'number') {
    characters.push(character);
  } else {
    throw new Error('Invalid object/ Object should have fields "name" (string) and "age" (number)');
  }
}

function getCharacter(name) {
  return characters.find(character => character.name === name); 
}

function getCharactersByAge(minAge) {
  if (typeof minAge === 'number') {
    return characters.filter(character => character.age >= minAge);
  } else {
    throw new Error('Invalid input. Age should be a number');
  }  
}

function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  character.name = newCharacter.name;
  character.age = newCharacter.age;
}

function removeCharacter(name) {
  const characterIndex = characters.findIndex(character => character.name === name);
  if (characterIndex !== -1) {
    characters.splice(characterIndex, 1);
  } else {
    throw new Error('There is no character with such name');
  }  
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
