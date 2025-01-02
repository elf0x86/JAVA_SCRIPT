document.getElementById('calcular-btn').addEventListener('click', calcular);

function calcular() {
    let numero = parseInt(document.getElementById('userInput').value);
    for (x = 1; x <= 10; x++) {                                                         
        document.getElementById(`x${x}`).innerText = `${x} x ${numero} = ${numero * 1}`;
    }
}
                                                                              
