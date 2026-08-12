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

const pesquisa = document.querySelector("#pesquisa-noticia");
const noticias = document.querySelectorAll(".link-noticia");


pesquisa.addEventListener("input", () => {
    const texto = pesquisa.value.toLowerCase();
    noticias.forEach(noticia => {
        const titulo = noticia.querySelector("h1").textContent.toLowerCase();
        if (titulo.includes(texto)) {
            noticia.style.display = "";
        } else {
            noticia.style.display = "none";
        }
    })
});