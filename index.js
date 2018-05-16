
function encode(stringToEncode) {

	const individualChars = stringToEncode.split('');
    let convertedCharacter = [];

    for (let i = 0; i < individualChars.length; i++) {
        convertedCharacter.push(String.fromCharCode((individualChars[i].charCodeAt() + 3)));
    }

    return convertedCharacter.join('');

};

function decode(stringToDecode) {

	const individualChars = stringToDecode.split('');
    let convertedCharacter = [];

    for (let i = 0; i < individualChars.length; i++) {
        convertedCharacter.push(String.fromCharCode((individualChars[i].charCodeAt() - 3)));
    }

    return convertedCharacter.join('');

};

exports.encode = encode;
exports.decode = decode;

//Alternative solution using array to hold characters of alphabet
//Will work with existing unit tests

// const alphabetArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// function encode(stringToEncode) {

// 	const individualChars = stringToEncode.split('');
// 	let convertedCharacter = [];

// 	for (let i = 0; i < individualChars.length; i++) {
//     	convertedCharacter.push((alphabetArray[(alphabetArray.indexOf(individualChars[i]) + 3)]));
//     }

// 	return convertedCharacter.join('');

// };
