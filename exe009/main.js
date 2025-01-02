document.getElementById('calcular-btn').addEventListener('click', calcular);

function calcular() {
    let numero = parseInt(document.getElementById('userInput').value);

    document.getElementById('x1').innerText = `1 x ${numero} = ${numero * 1}`;
    document.getElementById('x2').innerText = `2 x ${numero} = ${numero * 2}`;
    document.getElementById('x3').innerText = `3 x ${numero} = ${numero * 3}`;
    document.getElementById('x4').innerText = `4 x ${numero} = ${numero * 4}`;
    document.getElementById('x5').innerText = `5 x ${numero} = ${numero * 5}`;
    document.getElementById('x6').innerText = `6 x ${numero} = ${numero * 6}`;
    document.getElementById('x7').innerText = `7 x ${numero} = ${numero * 7}`;
    document.getElementById('x8').innerText = `8 x ${numero} = ${numero * 8}`;
    document.getElementById('x9').innerText = `9 x ${numero} = ${numero * 9}`;
    document.getElementById('x10').innerText = `10 x ${numero} = ${numero * 10}`;
}                                                                                
