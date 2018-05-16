
function encode(stringToEncode) {

	return String.fromCharCode((stringToEncode.charCodeAt() + 3));

};

exports.encode = encode;