document.addEventListener("DOMContentLoaded", () => {
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    // Limites de zoom do texto (em porcentagem)
    const TAMANHO_MINIMO = 90;
    const TAMANHO_MAXIMO = 150;
    const PASSO = 10;

    // Recupera configurações salvas no localStorage (ou usa os valores padrão)
    let tamanhoAtualFonte = parseInt(localStorage.getItem("tamanhoFonte")) || 100;
    const altoContrasteAtivo = localStorage.getItem("altoContraste") === "true";

    // Aplica as configurações salvas ao carregar a página
    aplicarTamanhoFonte(tamanhoAtualFonte);
    if (altoContrasteAtivo) {
        document.body.classList.add("alto-contraste");
        if (btnContraste) btnContraste.setAttribute("aria-pressed", "true");
    }

    // Função para alterar o tamanho da fonte no HTML
    function aplicarTamanhoFonte(tamanho) {
        document.documentElement.style.fontSize = `${tamanho}%`;
        localStorage.setItem("tamanhoFonte", tamanho);
    }

    // 1. Funcionalidade: Alto Contraste
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            const ativo = document.body.classList.toggle("alto-contraste");
            btnContraste.setAttribute("aria-pressed", ativo);
            localStorage.setItem("altoContraste", ativo);
        });
    }

    // 2. Funcionalidade: Aumentar Texto
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualFonte < TAMANHO_MAXIMO) {
                tamanhoAtualFonte += PASSO;
                aplicarTamanhoFonte(tamanhoAtualFonte);
            }
        });
    }

    // 3. Funcionalidade: Diminuir Texto
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualFonte > TAMANHO_MINIMO) {
                tamanhoAtualFonte -= PASSO;
                aplicarTamanhoFonte(tamanhoAtualFonte);
            }
        });
    }
});