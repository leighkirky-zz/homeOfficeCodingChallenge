
function encode(stringToEncode) {

	const individualChars = stringToEncode.split('');
    let convertedCharacter = [];

    for (let i = 0; i < individualChars.length; i++) {
        convertedCharacter.push(String.fromCharCode((individualChars[i].charCodeAt() + 3)));
    }

    return convertedCharacter.join('');

};

exports.encode = encode;