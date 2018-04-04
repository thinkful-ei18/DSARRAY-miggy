'use strict';

function removeChars(string,badChars){
  let filterRegEx = '';
  for (let i = 0; i < badChars.length; i++) {
    filterRegEx += `${badChars[i]}|`;
  }
  const regEx = new RegExp(`${filterRegEx}`,'gi');
  return string.replace(regEx,'');
}
const testString = 'Battle of the Vowels: Hawaii vs. Grozny';
console.log(removeChars(testString,'aeiou'));
