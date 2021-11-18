
/*JS- VERIFICAÇÃO DE SENHA E USUÁRIO*/

function login () {
     let inputUser = document.getElementById('inputUser').value;
     let inputPass = document.getElementById('inputPass').value;
    
     if (inputUser === 'admin') {
        if (inputPass === 'admin') {
            alert('Verificado!!!');
        }
        else {
            alert("Usuário ou senha incorreto!")
        }
    }
}


function link () {
    let criarLink = document.querySelector('#botaoLogin');
    document.createElement('link');
    criarLink.link.add('paginaInicial.html');
}