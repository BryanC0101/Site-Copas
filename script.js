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
        titulo: "A natureza impede que Moldávia ganhe outra copa",
        descricao: "Tempestades e vendavais adiam copa do mundo e schorristas acusam Cláudio Goodbarras",
        imagem: "/images/flags/Flag-Vietnam.webp",
        link: "/noticias/noticias.html?id=17"
    },

    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "Moldávia, Tri Campeã Mundial!",
        descricao: "Moldávia estende sequência de copas vencidas e ganha o torneio",
        imagem: "/images/flags/moldavia.svg",
        link: "/noticias/noticias.html?id=16"
    },
    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "A natureza impede que Moldávia ganhe outra copa",
        descricao: "Tempestades e vendavais adiam copa do mundo e schorristas acusam Cláudio Goodbarras",
        imagem: "/images/chuvaNoEstádio.jpg",
        link: "/noticias/noticias.html?id=15"
    },

    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "Moldávia é BI Campeã Mundial",
        descricao: "Com a sorte em suas mãos, Fedo Scafaldi leva a Moldávia ao Bi Campeonato",
        imagem: "/images/moldavia2.png",
        link: "/noticias/noticias.html?id=14"
    },
    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "Moldávia conquista o título e é Campeã Mundial!",
        descricao: "A seleção moldava ganha da Alemanha na final e leva o título mundial para a casa",
        imagem: "/images/moldavaCampea.png",
        link: "/noticias/noticias.html?id=13"
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