function printData() {
    let data = document.querySelector('[placeholder="data"]');
    let ano = data.value.split('-')[0];
    let mes = data.value.split('-')[1];
    let dia = data.value.split('-')[2];
    console.log(`Você nasceu no dia ${dia} de ${mes} de ${ano}`);
    let msg = document.querySelector('#showData');
    msg.innerHTML = `Você nasceu no dia ${dia} de ${mes} de ${ano}`;
}

function showData() {
    let dia = document.querySelector('#dia').value;
    let mes = document.querySelector('#mes').value;
    let ano = document.querySelector('#ano').value;                    

    let msg = document.querySelector('#showData');
    msg.innerText = `Você nasceu no dia ${dia} de ${mes}  de ${ano}`;
}
                                                                       
