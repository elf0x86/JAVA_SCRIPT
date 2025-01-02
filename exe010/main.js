document.getElementById('btn').addEventListener('click', calcular);

function calcular() {
	let dolares = document.getElementById('input').value * 0.19; // converte um string para um number prq tem uma operação aritmética
	document.getElementById('dolar').innerText = String(dolares).slice(0,4);
}
