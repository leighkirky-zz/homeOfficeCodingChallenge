
function encode(stringToEncode) {

	const individualChars = stringToEncode.split('');
    let convertedCharacter = [];

    for (let i = 0; i < individualChars.length; i++) {
        convertedCharacter.push(String.fromCharCode((individualChars[i].charCodeAt() + 3)));
    }

    return convertedCharacter.join('');

};

function decode(stringToDecode) {

	return String.fromCharCode((stringToDecode.charCodeAt() - 3))

};

exports.encode = encode;
exports.decode = decode;