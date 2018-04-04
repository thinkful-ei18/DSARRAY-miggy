'use strict';

function urlIfy(string){
  const urlStringified = string.split('')
    .map((char)=>{
      if(char === ' '){
        return '%20';
      }
      return char;
    })
    .join('');
  return urlStringified;
}



console.log(urlIfy('breakfast food .com'));
console.log(urlIfy('www.thinkful.com /tauh ida parv een'));
