// Programa que leia um número inteiro e mostre na tela o seu secessor e seu antecessor.

function calculateNumber() {
	let number = parseInt(document.querySelector('#userNumber').value);
	document.querySelector('#antecessor').innerText = `Antecessor de ${number} é ---> ${number - 1}`;
	document.querySelector('#sucessor').innerText = `Sucessor de ${number} é ---> ${number + 1}`;
}
