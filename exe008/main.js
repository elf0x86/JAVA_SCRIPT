document.getElementById('input-btn').addEventListener('click', converte);
function converte () {
	let entrada = parseInt(document.querySelector('#entrada').value);
	console.log(entrada);
	document.querySelector('#saida-1').innerText = entrada * 100;
	document.querySelector('#saida-2').innerText = entrada * 1000;
}


document.getElementById('calc').addEventListener('click', updater);
function updater () {
    var cost = 25;
    var quantity = document.getElementById('quantity').value;
    var totalcost = (cost * quantity);

    document.getElementById('total').innerText = totalcost;
}
