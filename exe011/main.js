document.getElementById('btn').addEventListener('click', calcular);

function calcular() {
    let largura = document.getElementById('largura').value
    let altura  = document.getElementById('altura').value

    let area = largura + altura;
    let litros = area / 2;                                                       

    document.getElementById('output').innerText = `${area} é ${litros} de tinta`;
}
