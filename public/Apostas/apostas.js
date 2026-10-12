const tabelaOdds = [
    {
        selecao: "Vietna",
        odd: 2.40
    },
    {
        selecao: "Macedônia do Norte",
        odd: 5.80
    },
    {
        selecao: "França",
        odd: 5.60
    }
    
]


const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        hamburger.textContent = "✕";
    } else {
        hamburger.textContent = "☰";
    }
});
