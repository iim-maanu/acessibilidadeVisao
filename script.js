// Botões de acessibilidade
document.addEventListener("DOMContentLoaded", () => {
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    const TAMANHO_MINIMO = 90;
    const TAMANHO_MAXIMO = 150;
    const PASSO = 10;

    // Recupera valores do localStorage para manter as preferências do usuário[cite: 3]
    let tamanhoAtualFonte = parseInt(localStorage.getItem("tamanhoFonte")) || 100;
    const altoContrasteAtivo = localStorage.getItem("altoContraste") === "true";[cite: 3]

    // Aplica preferências salvas ao carregar[cite: 3]
    aplicarTamanhoFonte(tamanhoAtualFonte);
    if (altoContrasteAtivo) {
        document.body.classList.add("alto-contraste");[cite: 3]
        if (btnContraste) btnContraste.setAttribute("aria-pressed", "true");[cite: 3]
    }

    function aplicarTamanhoFonte(tamanho) {
        document.documentElement.style.fontSize = `${tamanho}%`;
        localStorage.setItem("tamanhoFonte", tamanho);
    }

    // Função alto contraste
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            const ativo = document.body.classList.toggle("alto-contraste");

            // Acessibilidade para leitores de tela e persistência de dados[cite: 3]
            btnContraste.setAttribute("aria-pressed", ativo);
            localStorage.setItem("altoContraste", ativo);[cite: 3]
        });
    }

    // Função aumentar texto
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualFonte < TAMANHO_MAXIMO) {
                tamanhoAtualFonte += PASSO;
                aplicarTamanhoFonte(tamanhoAtualFonte);
            }
        });
    }

    // Função diminuir texto
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualFonte > TAMANHO_MINIMO) {
                tamanhoAtualFonte -= PASSO;
                aplicarTamanhoFonte(tamanhoAtualFonte);
            }
        });
    }
});