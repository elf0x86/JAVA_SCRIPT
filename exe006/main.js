
function process() {
	let valor = parseInt(document.querySelector('#userData').value);

	document.querySelector('#dobro').innerText = `O dobro ${valor * 2}`;
	document.querySelector('#triplo').innerText = `O triplo ${valor * 3}`;
	document.querySelector('#raizQuadrada').innerText = `A raiz ${valor ** (1/2)}`;
}
