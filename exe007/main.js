function calcularMedia() {
    let nota1 = parseInt(document.querySelector('#nota-1').value);
    let nota2 = parseInt(document.querySelector('#nota-2').value);

    document.querySelector('#resultado').innerText = ` ${(nota1 + nota2) / 2}`;
}
