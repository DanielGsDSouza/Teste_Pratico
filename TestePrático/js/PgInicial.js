

    /*JS- BUSCAMOS O ELEMENTO PELA SUA ID E ADICIONAMOS UMA NOVA
    'CLASS' AO ELEMENTO QUANDO A FUNÇÃO É ATIVADA PELO 'CLICK'.
    E REMOVEMOS A MESMA 'CLASS' QUANDO OUTRO 'CLICK' É ACIONADO */

const corMudar = document.getElementById('mudarCor');
const corFundoPainelA = document.getElementById('painelA');
const corFundoFavoritos = document.getElementById('favoritos');
const conta1Fundo = document.getElementById('conta1');
const conta2Fundo = document.getElementById('conta2');
const conta3Fundo = document.getElementById('conta3');
const fundoPainelB = document.getElementById('fundoPainelB');
const botoesFundo = document.querySelector('button');
const botaoArquivar = document.getElementById('btnArquivar');
const botaoAgendar = document.getElementById('btnAgendar');
const fundoMsg1 = document.getElementById('fundoMsg1');
const fundoMsg2 = document.getElementById('fundoMsg2');
const lixeiraCor = document.getElementById('lixeira');
const lixeira2Cor = document.getElementById('lixeira2');
const iconUserCor = document.getElementById('JoseRonaldoIcon');
const iconUser2Cor = document.getElementById('JoseRonaldoIcon2');
const h6Nome = document.querySelector('h6');
const h6Nome2 = document.getElementById('outroNome');
const circuloCor = document.getElementById('circleCircle');
const circulo2Cor = document.getElementById('circleCircle2');
const h5Sair = document.getElementById('h5');
const userCirculoCor = document.getElementById('fundoCirculoUser');
const setaUser = document.getElementById('setaUser');
const temaClaro = document.getElementById('mudarCorLuz');
const temaEscuro = document.getElementById('mudarCor');
const testePratico = document.getElementById('testePratico');
const autor = document.getElementById('autor');


function mudarTemaClaro () {
    corFundoPainelA.classList.add("ligth");
    corFundoFavoritos.classList.add("ligth");
    conta1Fundo.classList.add("ligth");
    conta2Fundo.classList.add("ligth");
    conta3Fundo.classList.add("ligth");
    fundoPainelB.classList.add("ligth");
    botoesFundo.classList.add("ligth");
    botaoAgendar.classList.add("ligth");
    botaoArquivar.classList.add("ligth");
    fundoMsg1.classList.add("ligth");
    fundoMsg2.classList.add("ligth");
    lixeiraCor.classList.add("ligth");
    lixeira2Cor.classList.add("ligth");
    iconUserCor.classList.add("ligth");
    iconUser2Cor.classList.add("ligth");
    h6Nome.classList.add("ligth");
    h6Nome2.classList.add("ligth");
    circuloCor.classList.add("ligth");
    circulo2Cor.classList.add("ligth");
    h5Sair.classList.add("ligth");
    userCirculoCor.classList.add("ligth");
    setaUser.classList.add("ligth");
    temaClaro.classList.add("ligth");
    temaEscuro.classList.add("ligth");
    testePratico.classList.add("ligth");
    autor.classList.add("ligth");
}

function mudarTema () {
    corFundoPainelA.classList.remove("ligth");
    corFundoFavoritos.classList.remove("ligth");
    conta1Fundo.classList.remove("ligth");
    conta2Fundo.classList.remove("ligth");
    conta3Fundo.classList.remove("ligth");
    fundoPainelB.classList.remove("ligth");
    botoesFundo.classList.remove("ligth");
    botaoAgendar.classList.remove("ligth");
    botaoArquivar.classList.remove("ligth");
    fundoMsg1.classList.remove("ligth");
    fundoMsg2.classList.remove("ligth");
    lixeiraCor.classList.remove("ligth");
    lixeira2Cor.classList.remove("ligth");
    iconUserCor.classList.remove("ligth");
    iconUser2Cor.classList.remove("ligth");
    h6Nome.classList.remove("ligth");
    h6Nome2.classList.remove("ligth");
    circuloCor.classList.remove("ligth");
    circulo2Cor.classList.remove("ligth");
    h5Sair.classList.remove("ligth");
    userCirculoCor.classList.remove("ligth");
    setaUser.classList.remove("ligth");
    temaClaro.classList.remove("ligth");
    temaEscuro.classList.remove("ligth");
    testePratico.classList.remove("ligth");
    autor.classList.remove("ligth");
}