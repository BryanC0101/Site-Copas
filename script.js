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
    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "A despedida angustiante de San Marino dessa copa",
        descricao: "O mundo sente por San Marino",
        imagem: "/images/johnnyeclausio.png",
        link: "/noticias/noticias.html?id=12"
    },

    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "TETRA CAMPEÃO!!!!! San Marino conquista mais um título",
        descricao: "Senhoras e senhores, San Marino é TETRA CAMPEÃO MUNDIAL!",
        imagem: "/images/tetraSanMarino.png",
        link: "/noticias/noticias.html?id=11"
    },
    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "San Marino cai para Gibraltar nas oitavas de final, mas Gibraltar também cai, para o Uruguai",
        descricao: "San Marino cai, mas os amigos Uruguaios vingam",
        imagem: "/images/GibraltarPerdendo.png",
        link: "/noticias/noticias.html?id=10"
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

setInterval(trocarNoticia, 5000);