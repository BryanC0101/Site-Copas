const jogadores = [
    {
        posicao: "🥇",
        foto: "/Estatisticas/imagesProfile/johnnyProfile.png",
        nome: "Johnny Schorros",
        selecao: "Somália, Timor-leste",
        gols: 57,
        assistencias: 2,
    },
    {
        posicao: "🥈",
        foto: "/Estatisticas/imagesProfile/claudioProfile.png",
        nome: "Cláudio Goodbarras",
        selecao: "San Marino, Gibraltar, Laos",
        gols: 30,
        assistencias: 9,
    },
    {
        posicao: "🥉",
        foto: "/Estatisticas/imagesProfile/johnnyProfile.png",
        nome: "Johnny Schorros",
        selecao: "San Marino, Gibraltar, Laos",
        gols: 24,
        assistencias: 17,
    },
    {
        posicao: 4,
        foto: "/Estatisticas/imagesProfile/chowProfile.png",
        nome: "Hans Chow",
        selecao: "Somália, Timor-leste",
        gols: 21,
        assistencias: 31,
    },
    {
        posicao: 5,
        foto: "/Estatisticas/imagesProfile/clausioProfile.png",
        nome: "Cláusio Goodbarras",
        selecao: "Somália",
        gols: 10,
        assistencias: 0,
    },
    {
        posicao: 6,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Claudio Osorio",
        selecao: "Timor-Leste",
        gols: 2,
        assistencias: 11,
    },
    {
        posicao: 7,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Matteo Vitaioli",
        selecao: "San Marino",
        gols: 0,
        assistencias: 10,
    },
    {
        posicao: 8,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Freteliano",
        selecao: "Timor-Leste",
        gols: 0,
        assistencias: 5,
    },
    {
        posicao: 9,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Chony Wenpaserth",
        selecao: "Laos",
        gols: 0,
        assistencias: 5,
    },
    {
        posicao: 10,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Anousone Xaypanya",
        selecao: "Laos",
        gols: 0,
        assistencias: 4,
    },
    {
        posicao: 11,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Mukhtar Suleiman",
        selecao: "Somália",
        gols: 0,
        assistencias: 4,
    },
    {
        posicao: 12,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Zakariyah Nur",
        selecao: "Somália",
        gols: 0,
        assistencias: 3,
    },
    {
        posicao: 13,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Kian Ronan",
        selecao: "Gibraltar",
        gols: 0,
        assistencias: 3,
    },
    {
        posicao: 14,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Enrico Golinucci",
        selecao: "San Marino",
        gols: 0,
        assistencias: 2,
    },
    {
        posicao: 15,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "Luca Ceccaroli",
        selecao: "San Marino",
        gols: 0,
        assistencias: 2,
    },
    {
        posicao: 16,
        foto: "/Estatisticas/imagesProfile/outro.jpg",
        nome: "John Frith",
        selecao: "Timor-Leste",
        gols: 0,
        assistencias: 2,
    }
];

const tabela = document.querySelector("#tabela-artilharia");

jogadores.forEach(jogador => {

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${jogador.posicao}</td>

        <td>
            <img src="${jogador.foto}" alt="${jogador.nome}">
            ${jogador.nome}
        </td>

        <td>${jogador.selecao}</td>

        <td>${jogador.gols}</td>

        <td>${jogador.assistencias}</td>

    `;

    tabela.appendChild(linha);
});