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


const selecoesIniciais = [

    {
        nome: "Albânia",
        pontos: 1376.03
    },

    {
        nome: "Andorra",
        pontos: 946.43
    },

    {
        nome: "Armênia",
        pontos: 1189.63
    },

    {
        nome: "Áustria",
        pontos: 1598.82
    },

    {
        nome: "Azerbaijão",
        pontos: 1132.00
    },

    {
        nome: "Bielorrússia",
        pontos: 1242.88
    },

    {
        nome: "Bélgica",
        pontos: 1778.36
    },

    {
        nome: "Bósnia e Herzegovina",
        pontos: 1408.93
    },

    {
        nome: "Bulgária",
        pontos: 1271.68
    },

    {
        nome: "Croácia",
        pontos: 1723.05
    },

    {
        nome: "Chipre",
        pontos: 1133.25
    },

    {
        nome: "República Tcheca",
        pontos: 1467.26
    },

    {
        nome: "Dinamarca",
        pontos: 1619.47
    },

    {
        nome: "Inglaterra",
        pontos: 1922.83
    },

    {
        nome: "Estônia",
        pontos: 1130.64
    },

    {
        nome: "Ilhas Faroe",
        pontos: 1136.59
    },

    {
        nome: "Finlândia",
        pontos: 1341.92
    },

    {
        nome: "França",
        pontos: 1948.97
    },

    {
        nome: "Geórgia",
        pontos: 1355.26
    },

    {
        nome: "Alemanha",
        pontos: 1726.22
    },

    {
        nome: "Gibraltar",
        pontos: 820.26
    },

    {
        nome: "Grécia",
        pontos: 1473.19
    },

    {
        nome: "Hungria",
        pontos: 1506.39
    },

    {
        nome: "Islândia",
        pontos: 1342.77
    },

    {
        nome: "Irlanda",
        pontos: 1441.10
    },

    {
        nome: "Israel",
        pontos: 1333.90
    },

    {
        nome: "Itália",
        pontos: 1704.73
    },

    {
        nome: "Cazaquistão",
        pontos: 1180.78
    },

    {
        nome: "Kosovo",
        pontos: 1319.12
    },

    {
        nome: "Letônia",
        pontos: 1085.66
    },

    {
        nome: "Liechtenstein",
        pontos: 797.70
    },

    {
        nome: "Lituânia",
        pontos: 1056.85
    },

    {
        nome: "Luxemburgo",
        pontos: 1232.82
    },

    {
        nome: "Malta",
        pontos: 992.79
    },

    {
        nome: "Moldávia",
        pontos: 1008.24
    },

    {
        nome: "Montenegro",
        pontos: 1301.98
    },

    {
        nome: "Holanda",
        pontos: 1775.54
    },

    {
        nome: "Macedônia do Norte",
        pontos: 1369.16
    },

    {
        nome: "Irlanda do Norte",
        pontos: 1365.30
    },

    {
        nome: "Noruega",
        pontos: 1651.29
    },

    {
        nome: "Polônia",
        pontos: 1526.18
    },

    {
        nome: "Portugal",
        pontos: 1787.85
    },

    {
        nome: "Romênia",
        pontos: 1455.89
    },

    {
        nome: "Rússia",
        pontos: 1529.60
    },

    {
        nome: "San Marino",
        pontos: 721.20
    },

    {
        nome: "Escócia",
        pontos: 1491.22
    },

    {
        nome: "Sérvia",
        pontos: 1502.13
    },

    {
        nome: "Eslováquia",
        pontos: 1473.66
    },

    {
        nome: "Eslovênia",
        pontos: 1441.09
    },

    {
        nome: "Espanha",
        pontos: 1995.88
    },

    {
        nome: "Suécia",
        pontos: 1525.58
    },

    {
        nome: "Suíça",
        pontos: 1710.88
    },

    {
        nome: "Turquia",
        pontos: 1582.54
    },

    {
        nome: "Ucrânia",
        pontos: 1549.29
    },

    {
        nome: "País de Gales",
        pontos: 1516.95
    },


    // ÁFRICA

    {
        nome: "Argélia",
        pontos: 1576.80
    },

    {
        nome: "Angola",
        pontos: 1265.58
    },

    {
        nome: "Benim",
        pontos: 1252.17
    },

    {
        nome: "Botswana",
        pontos: 1063.63
    },

    {
        nome: "Burkina Faso",
        pontos: 1406.99
    },

    {
        nome: "Cabo Verde",
        pontos: 1402.97
    },

    {
        nome: "Camarões",
        pontos: 1481.24
    },

    {
        nome: "Congo",
        pontos: 1105.96
    },

    {
        nome: "República Democrática do Congo",
        pontos: 1495.48
    },

    {
        nome: "Costa do Marfim",
        pontos: 1565.47
    },

    {
        nome: "Egito",
        pontos: 1597.04
    },

    {
        nome: "Gabão",
        pontos: 1272.51
    },

    {
        nome: "Gana",
        pontos: 1387.00
    },

    {
        nome: "Guiné",
        pontos: 1295.60
    },

    {
        nome: "Quênia",
        pontos: 1185.08
    },

    {
        nome: "Madagascar",
        pontos: 1202.69
    },

    {
        nome: "Mali",
        pontos: 1455.59
    },

    {
        nome: "Marrocos",
        pontos: 1803.99
    },

    {
        nome: "Nigéria",
        pontos: 1585.02
    },

    {
        nome: "Senegal",
        pontos: 1653.43
    },

    {
        nome: "Somália",
        pontos: 839.17
    },

    {
        nome: "África do Sul",
        pontos: 1451.24
    },

    {
        nome: "Tanzânia",
        pontos: 1180.27
    },

    {
        nome: "Togo",
        pontos: 1152.76
    },

    {
        nome: "Tunísia",
        pontos: 1426.58
    },

    {
        nome: "Uganda",
        pontos: 1264.09
    },

    {
        nome: "Zâmbia",
        pontos: 1255.82
    },

    {
        nome: "Zimbábue",
        pontos: 1119.78
    },


    // AMÉRICA DO NORTE, CENTRAL E CARIBE

    {
        nome: "Canadá",
        pontos: 1571.34
    },

    {
        nome: "Costa Rica",
        pontos: 1456.03
    },

    {
        nome: "Curaçau",
        pontos: 1285.64
    },

    {
        nome: "El Salvador",
        pontos: 1225.34
    },

    {
        nome: "Guatemala",
        pontos: 1238.74
    },

    {
        nome: "Haiti",
        pontos: 1264.58
    },

    {
        nome: "Honduras",
        pontos: 1378.97
    },

    {
        nome: "Jamaica",
        pontos: 1357.84
    },

    {
        nome: "México",
        pontos: 1754.30
    },

    {
        nome: "Panamá",
        pontos: 1478.41
    },

    {
        nome: "Trindade e Tobago",
        pontos: 1219.59
    },

    {
        nome: "Estados Unidos",
        pontos: 1690.33
    },


    // AMÉRICA DO SUL

    {
        nome: "Argentina",
        pontos: 1970.37
    },

    {
        nome: "Bolívia",
        pontos: 1326.00
    },

    {
        nome: "Brasil",
        pontos: 1804.92
    },

    {
        nome: "Chile",
        pontos: 1458.20
    },

    {
        nome: "Colômbia",
        pontos: 1739.89
    },

    {
        nome: "Equador",
        pontos: 1592.59
    },

    {
        nome: "Paraguai",
        pontos: 1542.48
    },

    {
        nome: "Peru",
        pontos: 1457.69
    },

    {
        nome: "Uruguai",
        pontos: 1634.70
    },

    {
        nome: "Venezuela",
        pontos: 1469.18
    },


    // ÁSIA E OCEANIA

    {
        nome: "Afeganistão",
        pontos: 968.07
    },

    {
        nome: "Austrália",
        pontos: 1581.51
    },

    {
        nome: "Bahrein",
        pontos: 1254.41
    },

    {
        nome: "Bangladesh",
        pontos: 902.93
    },

    {
        nome: "Brunei Darussalam",
        pontos: 857.73
    },

    {
        nome: "Camboja",
        pontos: 922.32
    },

    {
        nome: "China",
        pontos: 1254.81
    },

    {
        nome: "Hong Kong",
        pontos: 1024.16
    },

    {
        nome: "Índia",
        pontos: 1084.93
    },

    {
        nome: "Indonésia",
        pontos: 1157.14
    },

    {
        nome: "Irã",
        pontos: 1609.85
    },

    {
        nome: "Iraque",
        pontos: 1404.17
    },

    {
        nome: "Japão",
        pontos: 1673.68
    },

    {
        nome: "Jordânia",
        pontos: 1350.41
    },

    {
        nome: "Kuwait",
        pontos: 1106.47
    },

    {
        nome: "Quirguistão",
        pontos: 1192.16
    },

    {
        nome: "Laos",
        pontos: 885.03
    },

    {
        nome: "Líbano",
        pontos: 1172.22
    },

    {
        nome: "Malásia",
        pontos: 1086.22
    },

    {
        nome: "Mianmar",
        pontos: 1009.39
    },

    {
        nome: "Nepal",
        pontos: 914.54
    },

    {
        nome: "Nova Zelândia",
        pontos: 1269.80
    },

    {
        nome: "Coreia do Norte",
        pontos: 1151.05
    },

    {
        nome: "Omã",
        pontos: 1306.90
    },

    {
        nome: "Paquistão",
        pontos: 840.28
    },

    {
        nome: "Palestina",
        pontos: 1243.71
    },

    {
        nome: "Filipinas",
        pontos: 1100.95
    },

    {
        nome: "Catar",
        pontos: 1411.06
    },

    {
        nome: "Arábia Saudita",
        pontos: 1425.52
    },

    {
        nome: "Singapura",
        pontos: 1057.95
    },

    {
        nome: "Coreia do Sul",
        pontos: 1558.72
    },

    {
        nome: "Síria",
        pontos: 1283.05
    },

    {
        nome: "Tadjiquistão",
        pontos: 1224.19
    },

    {
        nome: "Tailândia",
        pontos: 1250.80
    },

    {
        nome: "Timor-Leste",
        pontos: 831.00
    },

    {
        nome: "Emirados Árabes Unidos",
        pontos: 1370.47
    },

    {
        nome: "Uzbequistão",
        pontos: 1409.73
    },

    {
        nome: "Vietnã",
        pontos: 1227.20
    },

    {
        nome: "Iêmen",
        pontos: 1065.24
    }

];


let selecoes = JSON.parse(
    localStorage.getItem("rankingPES21")
);

if (!selecoes) {
    selecoes = selecoesIniciais;
}



function salvarRanking() {

    localStorage.setItem(
        "rankingPES21",
        JSON.stringify(selecoes)
    );

}


const tabelaRanking =
    document.querySelector("#tabela-ranking");


function mostrarRanking() {

    tabelaRanking.innerHTML = "";


    selecoes.sort((a, b) => b.pontos - a.pontos);


    selecoes.forEach((selecao, indice) => {

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

            <td>${selecao.nome}</td>

            <td>${selecao.pontos.toFixed(2)}</td>

            <td>
                ${selecao.ultimaAlteracao || "-"}
            </td>
        `;


        tabelaRanking.appendChild(linha);

    });

}


const selectCasa =
    document.querySelector("#selecao-casa");

const selectFora =
    document.querySelector("#selecao-fora");


function preencherSelecoes() {

    selecoes.forEach(selecao => {

        const opcaoCasa =
            document.createElement("option");

        opcaoCasa.value = selecao.nome;
        opcaoCasa.textContent = selecao.nome;

        selectCasa.appendChild(opcaoCasa);


        const opcaoFora =
            document.createElement("option");

        opcaoFora.value = selecao.nome;
        opcaoFora.textContent = selecao.nome;

        selectFora.appendChild(opcaoFora);

    });

}

function calcularPontos(pontosA, pontosB, resultado) {

    const K = 35;

    const expectativaA =
        1 / (1 + Math.pow(10, (pontosB - pontosA) / 600));

    const expectativaB =
        1 - expectativaA;


    let resultadoA;
    let resultadoB;


    if (resultado === "vitoriaA") {

        resultadoA = 1;
        resultadoB = 0;

    } else if (resultado === "vitoriaB") {

        resultadoA = 0;
        resultadoB = 1;

    } else {

        resultadoA = 0.5;
        resultadoB = 0.5;

    }


    const alteracaoA =
        K * (resultadoA - expectativaA);

    const alteracaoB =
        K * (resultadoB - expectativaB);


    return {
        alteracaoA,
        alteracaoB
    };

}

const golsCasa = document.querySelector("#gols-casa");
const golsFora = document.querySelector("#gols-fora");

const botaoRegistrar = document.querySelector("#registrar");

const mensagem = document.querySelector("#mensagem");

botaoRegistrar.addEventListener("click", () => {

    const nomeCasa = selectCasa.value;
    const nomeFora = selectFora.value;

    const placarCasa = Number(golsCasa.value);
    const placarFora = Number(golsFora.value);


    if (nomeCasa === nomeFora) {

        mensagem.textContent =
            "Escolha duas seleções diferentes.";

        return;
    }


    const selecaoCasa =
        selecoes.find(selecao => selecao.nome === nomeCasa);

    const selecaoFora =
        selecoes.find(selecao => selecao.nome === nomeFora);


    let resultado;


    if (placarCasa > placarFora) {

        resultado = "vitoriaA";

    } else if (placarFora > placarCasa) {

        resultado = "vitoriaB";

    } else {

        resultado = "empate";

    }


    const pontos = calcularPontos(
        selecaoCasa.pontos,
        selecaoFora.pontos,
        resultado
    );


    selecaoCasa.pontos += pontos.alteracaoA;
    selecaoFora.pontos += pontos.alteracaoB;


    selecaoCasa.ultimaAlteracao =
        `${pontos.alteracaoA >= 0 ? "+" : ""}${pontos.alteracaoA.toFixed(2)}`;

    selecaoFora.ultimaAlteracao =
        `${pontos.alteracaoB >= 0 ? "+" : ""}${pontos.alteracaoB.toFixed(2)}`;


    salvarRanking();

    mostrarRanking();


    mensagem.textContent =
        `${nomeCasa} ${placarCasa} × ${placarFora} ${nomeFora} registrada!`;

});


preencherSelecoes();

mostrarRanking();