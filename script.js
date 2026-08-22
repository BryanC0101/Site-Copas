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
    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "San Marino fez mais uma fez, conquistou a copa do mundo e é Tri Campeão Mundial",
        descricao: "San Marino é Tri Campeão Mundial",
        imagem: "/images/triCampeaoSanMarino.png",
        link: "/noticias/noticias.html?id=9"
    },

    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "Técnico da seleção da Somália é demitido após Copa",
        descricao: "Após cair nas oitavas, o treinador deixa o comando da seleção logo após o fim da competição.",
        imagem: "/images/copaebola.webp",
        link: "/noticias/noticias.html?id=2"
    },
    {
        categoria: "HISTÓRIA DO FUTEBOL",
        titulo: "Cláusio Goodbarras ganha o prêmio bola de ouro",
        descricao: "Em sua primeiro copa de sua curta carreira, Cláusio Goodbarras é condecorado com a bola de ouro",
        imagem: "images/clausioBoladeouro.png",
        link: "/noticias/noticias.html?id=3"
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