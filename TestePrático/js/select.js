
/*JS- SELEÇÃO DE DIV E ALTERAÇÃO DE CORES DE ELEMENTOS*/

const fundoMsg = document.getElementById('fundoMsg1');
const lixeira = document.getElementById('lixeira');
const iconUserMsg = document.getElementById('JoseRonaldoIcon');
const circulo = document.getElementById('circleCircle');

function selecionar () {
    fundoMsg.classList.add('selecionado');
    lixeira.remove();
    iconUserMsg.remove();
    circulo.classList.add('selecionado');
};