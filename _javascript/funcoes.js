function calc_total() {
    let qtde = parseInt(document.getElementById('cQtde').value);
    tot = qtde * 2353;
    document.getElementById('cPreco').value = tot;
}

function enviar(){
    let nome = document.querySelector('input#cNome');
    let senha = document.querySelector('input#cSenha');
    let mail = document.querySelector('input#cEmail');

    if(nome.value.length == 0 || senha.value.length == 0 || mail.value.length == 0){
        alert('[ERRO] Por favor, preencha os campos obrigatórios!');
    }
}