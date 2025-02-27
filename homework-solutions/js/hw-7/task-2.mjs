/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false
  } else {
    let reversedWord = word.toLowerCase().split('').reverse().join('');
    return reversedWord === word.toLowerCase();
  }  
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  const result = [];
  if (sentence && typeof sentence === 'string') {
    const words = sentence.split(' ');
    let wordMaxLength = 0;
    for (let i = 0; i < words.length; i++) {
      if((words[i] !== '') && (words[i].length > wordMaxLength)) {
        wordMaxLength = words[i].length;
      }
    }
    for (let i = 0; i < words.length; i++) {
      if (words[i].length === wordMaxLength) {
        result.push(words[i]);
      }
    }
  }  
  return result;
}

export { isPalindrom, findLongestWords };
