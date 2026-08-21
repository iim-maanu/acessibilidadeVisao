document.addEventListener("DOMContentLoaded", () => {
// Seleção dos elementos do DOM
const btnContraste = document.getElementById("btn-contraste");
const btnAumentar = document.getElementById("btn-aumentar-texto");
const btnDiminuir = document.getElementById("btn-diminuir-texto");

// Limites de tamanho da fonte (em porcentagem)
let tamanhoAtualFonte = 100;
const TAMANHO_MINIMO = 80;
const TAMANHO_MAXIMO = 150;
const PASSO = 10;

// 1. Ação do Botão de Alto Contraste
if (btnContraste) {
btnContraste.addEventListener("click", () => {
document.body.classList.toggle("alto-contraste");
const estaAtivo = document.body.classList.contains("alto-contraste");
btnContraste.setAttribute("aria-pressed", estaAtivo);
});
}

// 2. Ação do Botão de Aumentar Texto
if (btnAumentar) {
btnAumentar.addEventListener("click", () => {
if (tamanhoAtualFonte < TAMANHO_MAXIMO) {
tamanhoAtualFonte += PASSO;
document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
}
});
}

// 3. Ação do Botão de Diminuir Texto
if (btnDiminuir) {
btnDiminuir.addEventListener("click", () => {
if (tamanhoAtualFonte > TAMANHO_MINIMO) {
tamanhoAtualFonte -= PASSO;
document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
}
});
}
});
