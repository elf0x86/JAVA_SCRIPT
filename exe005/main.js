// leia algo pelo teclado e mostre na tela o seu tipo primitivo
// e todas as informações possíveis sobre ele

function isAlphaNumeric(str) {
	let code, i, len;

	for (let i = 0, len = str.length; i < len; i++) {
		code = str.charCodeAt(i);
		if (!(code > 47 && code < 58) && // numeric (0-9) in ascii table
		    !(code > 64 && code < 91) && // upper alpha (A-Z) in utf-16 table
			!(code > 96 && code < 123)){ // lower alpha (a-z) in utf-16 table
			return false;
		}
	}
	return true;
}

function isDecimal(str) {
	let code, i, len;

	for (let i = 0, len = str.length; i < len; i++) {
		code = str.charCodeAt(i);
		if (!(code > 47 && code < 58)) { // numeric (0-9) 47 - 58 in utf-16 and . 46
			return false;
		}
		return true;
	}
}

let entrada = window.prompt('Entre com um dado');
console.log(`É alphanumerico: ${isAlphaNumeric(entrada)}`);
console.log(`É decimal: ${isDecimal(entrada)}`);
