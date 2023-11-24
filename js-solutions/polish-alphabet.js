/* 

*/
function correctPolishLetters (string) {
    let polishChar={
        'ą': "a",
        'ć': "c",
        'ę' : "e",
        'ł' : "l",
        'ń' : "n",
        'ó' : "o",
        'ś' : "s",
        'ź' : "z",
        'ż' : "z"
    }
    return string.split('').map(letter=> polishChar.hasOwnProperty(letter) ? polishChar[letter]: letter ).join('')
  }