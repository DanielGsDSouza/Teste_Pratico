
/*------------------------------------------- */
/* JS- COMANDO DE TROCA DE TOMA LIGTH E DARK */
/*------------------------------------------- */

const fundoCor = document.getElementById('corpo');
const usuarioFundoCor = document.getElementById('iconeUserFundo')

function mudarTemaLigth () {
    fundoCor.classList.add("ligth");
    usuarioFundoCor.classList.add("ligth");
}

function mudarTemaDark () {
    fundoCor.classList.remove("ligth");
    usuarioFundoCor.classList.remove("ligth");
}