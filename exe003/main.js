// leia dois números e tente mostrar a soma entre eles           

function somadorDeQuengas(a, b) {
    let n1 = parseInt(document.querySelector('#n1').value);
    let n2 = parseInt(document.querySelector('#n2').value);

    let total = n1 + n2;

    document.querySelector('#resultado').innerText = total;
}
