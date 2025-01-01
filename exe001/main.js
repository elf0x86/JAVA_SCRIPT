// Crie um script que leia o nome de uma pessoa e mostre uma mensagem de
// boas vindas de acordo com o valor digitado

function userGreeting() {
	let nome = document.getElementById('entrada').value;
	let greeting = document.getElementById('showName');
	greeting.innerHTML = `<span class='msg'>Seja bem vindo(a):</span> <h2>${nome}</h2>`;
}
