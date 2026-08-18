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


const tabela = document.querySelector("#tabela-artilharia");
const filtro = document.querySelector("#ordenar");
const jogadores = [
    {
        foto: "/Estatisticas/imagesProfile/johnnyProfile.png",
        nome: "Johnny Schorros",
        selecao: "Somália, Timor-leste, Brunei, Gibraltar",
        gols: 70,
        assistencias: 6,
    },
    {
        foto: "/Estatisticas/imagesProfile/claudioProfile.png",
        nome: "Cláudio Goodbarras",
        selecao: "San Marino, Gibraltar, Laos",
        gols: 30,
        assistencias: 9,
    },
    {
        foto: "/Estatisticas/imagesProfile/johnnyProfile.png",
        nome: "Johnny Schorros",
        selecao: "San Marino, Gibraltar, Laos",
        gols: 36,
        assistencias: 28,
    },
    {
        foto: "/Estatisticas/imagesProfile/chowProfile.png",
        nome: "Hans Chow",
        selecao: "Somália, Timor-leste, Brunei",
        gols: 22,
        assistencias: 33,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Everto Camargo",
        selecao: "Brunei, Gibraltar",
        gols: 5,
        assistencias: 6,
    },
    {
        foto: "/Estatisticas/imagesProfile/clausioProfile.png",
        nome: "Cláusio Goodbarras",
        selecao: "San Marino",
        gols: 27,
        assistencias: 5,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Claudio Osorio",
        selecao: "Timor-Leste",
        gols: 2,
        assistencias: 11,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Matteo Vitaioli",
        selecao: "San Marino",
        gols: 2,
        assistencias: 14,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Freteliano",
        selecao: "Timor-Leste",
        gols: 0,
        assistencias: 5,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Marcello Mularoni",
        selecao: "San Marino",
        gols: 1,
        assistencias: 1,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Azwan Ali Rahman",
        selecao: "Brunei",
        gols: 0,
        assistencias: 1,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Faiq Bolkiah",
        selecao: "Brunei",
        gols: 0,
        assistencias: 1,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Chony Wenpaserth",
        selecao: "Laos",
        gols: 0,
        assistencias: 5,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Anousone Xaypanya",
        selecao: "Laos",
        gols: 0,
        assistencias: 4,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Mukhtar Suleiman",
        selecao: "Somália",
        gols: 0,
        assistencias: 4,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Zakariyah Nur",
        selecao: "Somália",
        gols: 0,
        assistencias: 3,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Kian Ronan",
        selecao: "Gibraltar",
        gols: 0,
        assistencias: 3,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Enrico Golinucci",
        selecao: "San Marino",
        gols: 0,
        assistencias: 2,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Luca Ceccaroli",
        selecao: "San Marino",
        gols: 0,
        assistencias: 2,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "John Frith",
        selecao: "Timor-Leste",
        gols: 0,
        assistencias: 2,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Kian Ronan",
        selecao: "Gibraltar",
        gols: 1,
        assistencias: 0,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "James Scanlon",
        selecao: "Gibraltar",
        gols: 0,
        assistencias: 4,
    },
    {
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Andrea Grandoni",
        selecao: "San Marino",
        gols: 0,
        assistencias: 1,
    }
];


function mostrarJogadores(lista) {
    tabela.innerHTML = "";

    lista.forEach((jogadores, indice) => {
        const linha = document.createElement("tr");
        
        let posicao;

        if (indice === 0) {
            posicao = "🥇";
        } else if (indice === 1) {
            posicao = "🥈";
        } else if (indice === 2) {
            posicao = "🥉";
        } else {
            posicao = indice + 1;
        }

        linha.innerHTML = `
        <td>${posicao}</td>
        <td>
        <img src="${jogadores.foto}" alt="${jogadores.nome}">
        ${jogadores.nome}
        </td>

        <td>${jogadores.selecao}</td>

        <td>${jogadores.gols}</td>

        <td>${jogadores.assistencias}</td>
        `;

        tabela.appendChild(linha);
    });
}


function ordenarJogadores(criterio) {
    const jogadoresOrdenados = [...jogadores];
    jogadoresOrdenados.sort((a, b) => {
        return b[criterio] - a[criterio];
    });

    mostrarJogadores(jogadoresOrdenados);
}

filtro.addEventListener("change", () => {
    ordenarJogadores(filtro.value);
})

ordenarJogadores("gols");


// const tabela = document.querySelector("#tabela-artilharia");

// jogadores.forEach(jogador => {

//     const linha = document.createElement("tr");

//     linha.innerHTML = `
//         <td>${jogador.posicao}</td>

//         <td>
//             <img src="${jogador.foto}" alt="${jogador.nome}">
//             ${jogador.nome}
//         </td>

//         <td>${jogador.selecao}</td>

//         <td>${jogador.gols}</td>

//         <td>${jogador.assistencias}</td>

//     `;

//     tabela.appendChild(linha);
// });