const principal = document.querySelector("#principal")
const images = document.querySelectorAll("#principal img")
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else {
            entry.target.classList.remove("show");
        }
    })
}, {
    threshold:0.3
})
images.forEach(img=>observer.observe(img));


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





const categoria = document.querySelector("#categoria");
const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const imagem = document.querySelector("#imagem-noticia");
const link = document.querySelector("#link-noticia");
const barras = document.querySelectorAll(".barra");

let noticiaAtual = 0;

const noticias = [
    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "É a terceira gloriosa da Macedoônia do Norte",
        descricao: "Madedônia do Norte, a possível nova febre do futebol mundial?",
        imagem: "/images/flags/evertoTriCampeao.jpg",
        link: "/noticias/noticias.html?id=22"
    },

    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "Macedônia do Norte conquista uma segunda copa!!",
        descricao: "A Macedônia da Morte",
        imagem: "/images/macedonia bi campea.jpg",
        link: "/noticias/noticias.html?id=21"
    },
    {
        categoria: "Notícia",
        titulo: "Carta ao grande técnico Fedo Scafaldi",
        descricao: "Hoje, Fedo Scafaldi comemora mais um ano de vida!",
        imagem: "/images/7 copas.png",
        link: "/noticias/noticias.html?id=20"
    },

    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "Vietnã conquista seu segundo título",
        descricao: "Vietnã conquista seu segundo título",
        imagem: "/images/vietna.jpg",
        link: "/noticias/noticias.html?id=19"
    },
    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "Macedônia do Norte vence sua primeira copa do mundo",
        descricao: "Macedônia do Norte sua primeira copa do mundo, suando!",
        imagem: "/images/flags/Flag_of_North_Macedonia.svg.webp",
        link: "/noticias/noticias.html?id=18"
    },
];



function trocarNoticia() {
    
    barras.forEach(barra => {
        barra.classList.remove("ativa");
    });

    noticiaAtual++;

    if (noticiaAtual >= noticias.length) {
        noticiaAtual = 0;
    }

    const noticia = noticias[noticiaAtual];

    categoria.textContent = noticia.categoria;
    titulo.textContent = noticia.titulo;
    descricao.textContent = noticia.descricao;
    imagem.src = noticia.imagem;
    link.href = noticia.link;

    barras[noticiaAtual].classList.add("ativa");
}

setInterval(trocarNoticia, 6000);