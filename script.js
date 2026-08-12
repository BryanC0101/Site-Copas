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
        titulo: "San Marino conquista mais um Título e se torna Bi Campeão Mundial",
        descricao: "Os Indestrutíveis Marinenses surpreendem mais uma vez vencendo com facilidade a Inglaterra na final tendo Cláusio Goodbarras como protagonista.",
        imagem: "images/imagem san marino melhorada.png",
        link: "/noticias/noticias.html?id=1"
    },

    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "Veja a reação da torcida somali após a derrota para a Holanda nas oitavas de final",
        descricao: "Multidões nas ruas tristes com a queda da seleção da Somália",
        imagem: "/images/somaliaCai.png",
        link: "/noticias/noticias.html?id=4"
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

    {
        categoria: "COPA DO MUNDO - FOOTBALL LIFE",
        titulo: "Cláudio entrega copa para os jogadores de San Marino, mas fica com ela posteriormente",
        descricao: "Logo depois de cerimônia de comemoração da seleção de San Marino, Cláudio Goodbarras leva outra copa para Uganda",
        imagem: "/images/claudioCopa.png",
        link: "/noticias/noticias.html?id=5"
    }
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