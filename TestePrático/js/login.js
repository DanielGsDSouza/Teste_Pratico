
/*JS- VERIFICAÇÃO DE SENHA E USUÁRIO*/

function login () {
     let inputUser = document.getElementById('inputUser').value;
     let inputPass = document.getElementById('inputPass').value;
    
     if (inputUser === 'admin') {
        if (inputPass === 'admin') {
            var win = window.open('..//TestePr%C3%A1tico/PaginaInicial.html', '_self');
            if (win) {
                win.focus();
            } else {
                alert("Usuário ou senha incorreto!")
            }
        }
        else {
            alert("Usuário ou senha incorreto!")
        }
    }
}