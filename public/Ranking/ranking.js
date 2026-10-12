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