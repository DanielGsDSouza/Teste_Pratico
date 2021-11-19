/*------------------------------------------- */
/*JS- CRIAÇÃO DE MENSAGEM DE RESPOSTA*/
/*------------------------------------------- */

let mensagemInput = document.querySelector('#inputMsg');
let btnEnviarMsg = document.querySelector('#enviarMsg');
let divRolagem = document.querySelector('#rolagem');

mensagemInput.addEventListener('keypress', (e) => {
    if(e.keycode == 13) {
        let tarefa = {
            nome: mensagemInput.value
        }
        criarDiv(tarefa);
    }
});
btnEnviarMsg.addEventListener('keypress', (e) => {
    if(e.keycode == 13) {
        let tarefa = {
            nome: mensagemInput.value
        }
        criarDiv(tarefa);
    }
});


function criarDivMsg (tarefa){
    let divUm = criarDiv (tarefa);
    rolagem.appendChild(divUm)

    mensagemInput.value = '';
}

function criarDiv(tarefa) {
    let div = document.createElement('div');
    div.id.add("MensagemResposta");

    let divDois = document.createElement('div');
    divDois.id.add("MsgRespostaFundo");

    let msgTexto = document.createElement('h3');
    msgTexto.innerHTML(mensagemInput);
    msgTexto.id.add("enviado");

    let li = document.createElement('li');
    li.innerHTML = '<i class="fas fa-user-circle"></i>';
    li.id.add("userSend");

    divRolagem.appendChild(div);
    div.appendChild(divDois);
    divDois.appendChild(msgTexto);
    divDois.appendChild(li);

    return div;
}