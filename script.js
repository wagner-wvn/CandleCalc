//########################################################
// Atualiza ano no rodapé
//########################################################
document.getElementById("ano").textContent = new Date().getFullYear();


//########################################################
// Carrega densidade do localStorage ou usa 0.85
//########################################################
const densidadeInput = document.getElementById("densidade");
const densidadeSalva = localStorage.getItem("densidadeCera");
densidadeInput.value = densidadeSalva ? densidadeSalva : 0.855;


//########################################################
// Salva automaticamente quando mudar a densidade no localStorage
//########################################################
densidadeInput.addEventListener("input", () => {
    localStorage.setItem("densidadeCera", densidadeInput.value);
});


//########################################################
// Funcao Calcular
//########################################################
function calcular() {
    let aguaInput = document.getElementById("agua");
    let qtdVelasInput = document.getElementById("qtdVelas");
    let essenciaInput = document.getElementById("essencia");


    let agua = parseFloat(document.getElementById("agua").value);
    let qtdVelas = parseInt(document.getElementById("qtdVelas").value);
    let percEssencia = parseFloat(document.getElementById("essencia").value);
    let densidade = parseFloat(densidadeInput.value) || 0.855;

    let valido = true;

    // Resetar erros
    document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");
    [aguaInput, qtdVelasInput, essenciaInput].forEach(el => el.classList.remove("error-input"));

    if (isNaN(agua) || agua <= 0) {
    document.getElementById("erro-agua").style.display = "block";
    aguaInput.classList.add("error-input");
    valido = false;
    }
    if (isNaN(qtdVelas) || qtdVelas <= 0) {
    document.getElementById("erro-qtdVelas").style.display = "block";
    qtdVelasInput.classList.add("error-input");
    valido = false;
    }
    if (isNaN(percEssencia) || percEssencia <= 0) {
    document.getElementById("erro-essencia").style.display = "block";
    essenciaInput.classList.add("error-input");
    valido = false;
    }

    if (!valido) return;

    let pesoCeraBruto = Math.round(agua * densidade);
    let divisor = 1 + (percEssencia / 100);
    let ceraFinal = (pesoCeraBruto * qtdVelas) / divisor;
    let essenciaFinal = (pesoCeraBruto * qtdVelas) - ceraFinal;


    document.getElementById("cera").innerText = "Cera necessária: " + ceraFinal.toFixed(2) + " g";
    document.getElementById("essenciaRes").innerText = "Essência necessária: " + essenciaFinal.toFixed(2) + " g";
    document.getElementById("resultado").style.display = "block";
}


//########################################################
// Funcao Toggle
//########################################################
function toggleInfo() {
    const info = document.getElementById("infoText");
    info.style.display = info.style.display === "none" ? "block" : "none";
}

function toggleAdvanced() {
    const settings = document.getElementById("advancedSettings");
    const display = window.getComputedStyle(settings).display;
    settings.style.display = display === "none" ? "block" : "none";
}

