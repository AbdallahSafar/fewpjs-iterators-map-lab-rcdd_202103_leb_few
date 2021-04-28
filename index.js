const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitalize(word) {
  let newWord = "";
  for(let i=0;i<word.length;i++) {
    if(i===0) {
      newWord += word[i].toUpperCase();
    }
    else {
      newWord += word[i];
    }
  }
  return newWord;
}

const titleCased = () => {
  return tutorials.map(str => {
    let newStr = str.split(' ');
    return newStr.map(word => capitalize(word)).join(' ');
  })
}

console.log(titleCased());
console.log("hello")
