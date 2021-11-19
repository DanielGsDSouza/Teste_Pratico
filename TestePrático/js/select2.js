
/*JS- SELEÇÃO DE DIV E ALTERAÇÃO DE CORES DE ELEMENTOS*/

const  msgFundo = document.getElementById('fundoMsg2');
const  lixeira2 = document.getElementById('lixeira2');
const  iconUserMsg2 = document.getElementById('JoseRonaldoIcon2');
const  circulo2 = document.getElementById('circleCircle2');

function selecionarDois () {
    msgFundo.classList.add("selecionado");
    lixeira2.remove();
    iconUserMsg2.remove();
    circulo2.classList.add("selecionado");
}