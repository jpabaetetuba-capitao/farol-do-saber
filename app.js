// ==========================
// FAROL DO SABER v0.2
// ==========================

// TROCA DE TELAS
function mostrarTela(id) {

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");

    localStorage.setItem(
        "farol_telaAtual",
        id
    );

    if(id === "questoes"){

        document.getElementById(
            "areaQuestao"
        ).innerHTML = "";

    }

}

// ==========================
// BANCO DE QUESTÕES
// ==========================

const bancoQuestoes = {

    bncc,

    ldb,

    eca,

    pne,

    fundeb,

    lbi,

    tea,

    inclusiva,

    etnicoRacial,

    educacaoCampo,

    curriculo,

    interpretacao,

    generos,

    funcoes,

    coesao,

    semantica,

    figuras,

    variacao,

    classesPalavras,

    formacaoPalavras,

    sintaxe,

    periodoComposto,

    concordancia,

    regencia,

    crase,

    vozesVerbais,

    pontuacao,

    ortografia,

    acentuacao,

    redacaoOficial,

    hardware,

    software

};

// ==========================
// VARIÁVEIS GLOBAIS
// ==========================

let disciplinaAtual = "";
let assuntoAtual = "";
let questaoAtual = 0;
let questaoExibida = null;
let questoesEmbaralhadas = [];

let progressoAssuntos = {};

let acertos = 0;
let erros = 0;

let acertosAssunto = 0;
let errosAssunto = 0;
let medalhasOuro = 0;
let medalhasPrata = 0;
let medalhasBronze = 0;

let cadernoErros = [];

// ==========================
// SIMULADOS
// ==========================

let modoSimulado = false;

let questoesSimulado = [];

let indiceSimulado = 0;

let acertosSimulado = 0;

let errosSimulado = 0;

// ==========================
// SALVAMENTO AUTOMÁTICO v0.5
// ==========================

function salvarDados() {

    localStorage.setItem(
        "farol_acertos",
        acertos
    );

    localStorage.setItem(
        "farol_erros",
        erros
    );

localStorage.setItem(
    "farol_ouro",
    medalhasOuro
);

localStorage.setItem(
    "farol_prata",
    medalhasPrata
);

localStorage.setItem(
    "farol_bronze",
    medalhasBronze
);

    localStorage.setItem(
        "farol_caderno",
        JSON.stringify(cadernoErros)
    );

    localStorage.setItem(
        "farol_progresso",
        JSON.stringify(progressoAssuntos)
    );

}


function carregarDados() {

    acertos =
        Number(
            localStorage.getItem("farol_acertos")
        ) || 0;

    erros =
        Number(
            localStorage.getItem("farol_erros")
        ) || 0;

medalhasOuro =
Number(
    localStorage.getItem("farol_ouro")
) || 0;

medalhasPrata =
Number(
    localStorage.getItem("farol_prata")
) || 0;

medalhasBronze =
Number(
    localStorage.getItem("farol_bronze")
) || 0;

    cadernoErros =
        JSON.parse(
            localStorage.getItem("farol_caderno")
        ) || [];

    progressoAssuntos =
        JSON.parse(
            localStorage.getItem("farol_progresso")
        ) || {};

}


// ==========================
// CARREGAR DISCIPLINA
// ==========================

function abrirDisciplina(nome) {

if(nome === "ciencias"){

    alert(
        "🔒 Disciplina Premium.\n\nDisponível em breve."
    );

    return;

}

    disciplinaAtual = nome;

    if (nome === "didatica") {

        mostrarTela("didatica");

        return;

    }

    if (nome === "didatica") {

        mostrarTela("didatica");

        return;

 }

    if (nome === "portugues") {

        mostrarTela("portugues");

        return;

    }

if (nome === "informatica") {

    mostrarTela("informatica");

    return;

}

    alert(
        "Disciplina em desenvolvimento."
    );

}

// ==========================
// MOSTRAR QUESTÃO
// ==========================

function mostrarQuestao() {

    const area = document.getElementById("areaQuestao");

    const questoes =
    questoesEmbaralhadas.length > 0
    ? questoesEmbaralhadas
    : bancoQuestoes[disciplinaAtual];

    const q = questoes[questaoAtual];
questaoExibida = q;
console.log("Questão carregada:", q);

const percentual =
    Math.round(
        ((questaoAtual + 1) /
        questoes.length) * 100
    );

    area.innerHTML = `
    
    <div class="card">

<button onclick="voltarParaMapa()">
    ⬅ Voltar
</button>

<br><br>

        <h3>
    Questão ${questaoAtual + 1} de ${questoes.length}
</h3>

<br>

<progress
    value="${questaoAtual + 1}"
    max="${questoes.length}"
    style="
        width:100%;
        height:25px;
    ">
</progress>

<br>

<strong>
    ${percentual}% concluído
</strong>

        <br>

${q.texto ? `

<div class="card texto-base">

    <h3>
        📄 Texto de Apoio
    </h3>

    <br>

    <p>

        ${q.texto}

    </p>

</div>

<br>

` : ""}

${q.imagem ? `

<img
    src="${q.imagem}"
    class="imagem-questao">

<br><br>

` : ""}
        <p class="pergunta">
    ${q.pergunta}
</p>

        <br>

        ${q.alternativas.map((alt, index) => `

            <label class="alternativa">

                <input type="radio" name="resposta" value="${index}">

                ${alt}

            </label>

        `).join("")}

        <br>

        <button onclick="corrigirQuestao()">
            Responder
        </button>

        <div id="feedback"></div>

    </div>
    `;
}

// ==========================
// CORRIGIR QUESTÃO
// ==========================

function corrigirQuestao() {

    const resposta = document.querySelector(
        'input[name="resposta"]:checked'
    );

    if (!resposta) {
        alert("Selecione uma alternativa.");
        return;
    }

const q = questaoExibida;

    const feedback =
        document.getElementById("feedback");

    const respostaCorreta =
        q.alternativas[q.correta];

// Travar alternativas após responder

document
    .querySelectorAll(
        'input[name="resposta"]'
    )
    .forEach(opcao => {

        opcao.disabled = true;

    });

if (Number(resposta.value) === q.correta) {

    acertos++;
    acertosAssunto++;

        feedback.innerHTML = `
        <div class="feedback-acerto">

            <h3>✅ Resposta Correta!</h3>

            <br>

            <p>${q.feedbackAcerto}</p>

            <br>

            <strong>💡 Dica da banca:</strong>

            <br>

            ${q.dicaBanca || "Sem dica cadastrada."}

            <br><br>

            <button onclick="proximaQuestao()">
                Próxima
            </button>

        </div>
        `;

    } else {

        erros++;
errosAssunto++;

       const nomesBonitos = {

    bncc: "📘 BNCC",

    ldb: "📘 LDB",

    eca: "📘 ECA",

    pne: "📘 PNE",

    fundeb: "📘 FUNDEB",

    lbi: "📘 LBI",

    tea: "📘 TEA",

    inclusiva: "📘 Educação Inclusiva",

    etnicoRacial: "📘 Relações Étnico-Raciais",

    educacaoCampo: "📘 Educação do Campo",

    curriculo: "📘 Currículo e Planejamento",

    interpretacao: "📖 Interpretação de Textos",

    generos: "📄 Gêneros Textuais",

    funcoes: "📡 Funções da Linguagem",

    coesao: "🔗 Coesão e Coerência",

    semantica: "🧠 Semântica",

    figuras: "🎭 Figuras de Linguagem",

    variacao: "🌎 Variação Linguística",

    classesPalavras: "📚 Classes de Palavras",

    formacaoPalavras: "🏗 Formação de Palavras",

    sintaxe: "📝 Sintaxe",

    periodoComposto: "🔄 Período Simples e Composto",

    concordancia: "📌 Concordância",

    regencia: "🎯 Regência",

    crase: "✍️ Crase",

    vozesVerbais: "🗣️ Vozes Verbais",

    pontuacao: "📍 Pontuação",

    ortografia: "📖 Ortografia",

    acentuacao: "🔠 Acentuação",

    redacaoOficial: "🏛️ Redação Oficial",

    hardware: "💻 Hardware"

};

const nomeDisciplina =
    nomesBonitos[disciplinaAtual]
    || disciplinaAtual;

        const indiceExistente =
            cadernoErros.findIndex(
                item =>
                    item.disciplina === nomeDisciplina &&
                    item.pergunta === q.pergunta
            );

        if (indiceExistente >= 0) {

            cadernoErros[indiceExistente].erros++;

        } else {

            cadernoErros.push({

                disciplina: nomeDisciplina,

                pergunta: q.pergunta,

                respostaCorreta: respostaCorreta,

                explicacao: q.feedbackErro,

                erros: 1

            });

        }

        feedback.innerHTML = `
        <div class="feedback-erro">

            <h3>❌ Resposta Incorreta!</h3>

            <br>

            <strong>Resposta correta:</strong>

            <br><br>

            ${respostaCorreta}

            <br><br>

            <p>${q.feedbackErro}</p>

            <br>

            <button onclick="proximaQuestao()">
                Próxima
            </button>

        </div>
        `;
    }

atualizarEstatisticas();
atualizarDashboard();
atualizarPainelEstudos();
atualizarCadernoErros();
salvarDados();

}

// ==========================
// PRÓXIMA QUESTÃO
// ==========================

function proximaQuestao() {

    questaoAtual++;

    progressoAssuntos[disciplinaAtual] =
        questaoAtual;

atualizarPainelEstudos();

salvarDados();

    console.log(
        "SALVOU:",
        disciplinaAtual,
        questaoAtual
    );

    console.log(
        progressoAssuntos
    );

const total =
    questoesEmbaralhadas.length > 0
    ? questoesEmbaralhadas.length
    : bancoQuestoes[disciplinaAtual].length;

  
    if (questaoAtual >= total) {

const totalAssunto =
    acertosAssunto + errosAssunto;

const percentual =
    totalAssunto > 0
    ? Math.round(
        (acertosAssunto / totalAssunto) * 100
    )
    : 0;

let classificacao = "";
let mensagem = "";
let medalha = "";

if(percentual >= 90){

    classificacao = "🏆 EXCELENTE";
medalha = "🥇 OURO";
medalhasOuro++;

    mensagem =
    "Parabéns! Você demonstrou excelente domínio do conteúdo. Continue revisando para manter esse alto desempenho.";

}
else if(percentual >= 75){

    classificacao = "🥈 MUITO BOM";
 medalha = "🥈 PRATA";
medalhasPrata++;

    mensagem =
    "Ótimo resultado! Você está muito próximo da excelência.";

}
else if(percentual >= 60){

    classificacao = "🥉 BOM";
medalha = "🥉 BRONZE";
medalhasBronze++;

    mensagem =
    "Bom desempenho. Continue reforçando os pontos em que apresentou dificuldade.";

}
else if(percentual >= 40){

    classificacao = " 📚 REGULAR";
  medalha = "📚 SEM MEDALHA";

    mensagem =
    "Você está no caminho certo, mas ainda precisa revisar alguns tópicos.";

}
else if(percentual >= 20){

    classificacao = "⚠️ PRECISA REFORÇAR";
 medalha = "📚 SEM MEDALHA";

    mensagem =
    "Recomenda-se revisar o mapa mental e refazer as questões.";

}
else{

    classificacao = "🚨 REVISÃO NECESSÁRIA";
medalha = "📚 SEM MEDALHA";


    mensagem =
    "Não desanime. Revise o conteúdo e tente novamente.";

}

salvarDados();
atualizarDashboard();
    document.getElementById(
        "areaQuestao"
    ).innerHTML = `

    <div class="card">

        <h2>
            🎉 Assunto Concluído
        </h2>

        <br>

        <strong>
    Acertos:
</strong>

${acertosAssunto}

<br><br>

<strong>
    Erros:
</strong>

${errosAssunto}

<br><br>

<strong>
    Aproveitamento:
</strong>

${percentual}%

        <br><br>

<strong>
🏅 Medalha:
</strong>

${medalha}

<br><br>

        <h3>
            ${classificacao}
        </h3>

        <br>

        <p>
            ${mensagem}
        </p>

        <br><br>

        <button onclick="refazerAssunto()">

            🔄 Refazer Assunto

        </button>

       <button onclick="voltarParaAssuntos()">

    📚 Voltar aos Assuntos

</button>

    </div>

    `;

    return;

}

    mostrarQuestao();
}

// ==========================
// ESTATÍSTICAS
// ==========================

function atualizarEstatisticas() {

    const total = acertos + erros;

    const percentual = total > 0
        ? ((acertos / total) * 100).toFixed(1)
        : 0;

    document.getElementById("estatisticasConteudo").innerHTML = `
    
    <strong>Acertos:</strong> ${acertos}
    <br><br>

    <strong>Erros:</strong> ${erros}
    <br><br>

    <strong>Aproveitamento:</strong> ${percentual}%

    `;
}

// ==========================
// CADERNO DE ERROS
// ==========================

function atualizarCadernoErros() {

    const lista =
        document.getElementById("listaErros");

    if (cadernoErros.length === 0) {

        lista.innerHTML =
            "Nenhum erro registrado.";

        return;
    }

    const ordenado =
        [...cadernoErros].sort(
            (a, b) => b.erros - a.erros
        );

    lista.innerHTML = ordenado.map(item => `

    <div class="card">

        <h3>
            ❌ Questão para Revisão
        </h3>

        <br>

        <strong>
            Disciplina:
        </strong>

        <br>

        ${item.disciplina}

        <br><br>

        <strong>
            Pergunta:
        </strong>

        <br>

        ${item.pergunta}

        <br><br>

        <strong>
            Resposta correta:
        </strong>

        <br>

        ${item.respostaCorreta}

        <br><br>

        <strong>
            Explicação:
        </strong>

        <br>

        ${item.explicacao}

        <br><br>

        <strong>
            Erros nessa questão:
        </strong>

        ${item.erros}

    </div>

    `).join("");
}

// ==========================
// RESETAR PROGRESSO
// ==========================

function resetarProgresso() {

    const confirmar = confirm(
        "Deseja apagar todo o progresso?"
    );

    if (!confirmar) {
        return;
    }

    localStorage.clear();

    acertos = 0;
    erros = 0;
    cadernoErros = [];
    progressoAssuntos = {};

    atualizarEstatisticas();
    atualizarDashboard();
    atualizarPainelEstudos();
    atualizarCadernoErros();

    alert("Progresso apagado com sucesso!");

}

// ==========================
// SIMULADOS v0.6
// ==========================

function iniciarSimulado(qtd) {

const todasQuestoes = Object.values(
    bancoQuestoes
).flat();

    questoesSimulado =
        [...todasQuestoes]
        .sort(() => Math.random() - 0.5)
        .slice(0, qtd);

    modoSimulado = true;

    indiceSimulado = 0;

    acertosSimulado = 0;

    errosSimulado = 0;

    mostrarQuestaoSimulado();

}

// ==========================
// MOSTRAR QUESTÃO SIMULADO
// ==========================

function mostrarQuestaoSimulado() {

    const area =
        document.getElementById("areaQuestao");

    const q =
        questoesSimulado[indiceSimulado];

    const percentual =
        Math.round(
            ((indiceSimulado + 1) /
            questoesSimulado.length) * 100
        );

    mostrarTela("resolverQuestao");

    area.innerHTML = `

    <div class="card">

        <h3>
            Simulado
        </h3>

        <br>

        Questão ${indiceSimulado + 1}
        de ${questoesSimulado.length}

        <br><br>

        <progress
            value="${indiceSimulado + 1}"
            max="${questoesSimulado.length}"
            style="
                width:100%;
                height:25px;
            ">
        </progress>

        <br><br>

        <strong>
            ${percentual}% concluído
        </strong>

${q.texto ? `

<div class="card texto-base">

    <h3>
        📄 Texto de Apoio
    </h3>

    <br>

    <p>

        ${q.texto}

    </p>

</div>

<br>

` : ""}

        <p class="pergunta">

            ${q.pergunta}

        </p>

        ${q.alternativas.map((alt, index) => `

            <label class="alternativa">

                <input
                    type="radio"
                    name="resposta"
                    value="${index}">

                ${alt}

            </label>

        `).join("")}

        <br>

        <button
            onclick="corrigirSimulado()">

            Responder

        </button>

        <div id="feedback"></div>

    </div>

    `;

}

// ==========================
// CORRIGIR SIMULADO
// ==========================

function corrigirSimulado() {

    const resposta = document.querySelector(
        'input[name="resposta"]:checked'
    );

    if (!resposta) {

        alert(
            "Selecione uma alternativa."
        );

        return;
    }

    const q =
        questoesSimulado[indiceSimulado];

    const feedback =
        document.getElementById("feedback");

    document
        .querySelectorAll(
            'input[name="resposta"]'
        )
        .forEach(opcao => {

            opcao.disabled = true;

        });

    if (
        Number(resposta.value)
        === q.correta
    ) {

        acertosSimulado++;

        feedback.innerHTML = `

        <div class="feedback-acerto">

            <h3>
                ✅ Resposta Correta!
            </h3>

            <br>

            <button
                onclick="proximaQuestaoSimulado()">

                Próxima

            </button>

        </div>

        `;

    } else {

        errosSimulado++;

        feedback.innerHTML = `

        <div class="feedback-erro">

            <h3>
                ❌ Resposta Incorreta!
            </h3>

            <br>

            <strong>
                Resposta correta:
            </strong>

            <br><br>

            ${q.alternativas[q.correta]}

            <br><br>

            <button
                onclick="proximaQuestaoSimulado()">

                Próxima

            </button>

        </div>

        `;

    }

}

// ==========================
// PRÓXIMA QUESTÃO SIMULADO
// ==========================

function proximaQuestaoSimulado() {

    indiceSimulado++;

    if (
        indiceSimulado
        >=
        questoesSimulado.length
    ) {

        finalizarSimulado();

        return;
    }

    mostrarQuestaoSimulado();

}

// ==========================
// FINALIZAR SIMULADO
// ==========================

function finalizarSimulado() {

    const total =
        acertosSimulado +
        errosSimulado;

    const percentual =
        total > 0
        ? (
            (acertosSimulado / total)
            * 100
        ).toFixed(1)
        : 0;

    document
        .getElementById(
            "areaQuestao"
        ).innerHTML = `

        <div class="card">

            <h2>
                🏁 SIMULADO FINALIZADO
            </h2>

            <br>

            <strong>
                Questões:
            </strong>

            ${total}

            <br><br>

            <strong>
                Acertos:
            </strong>

            ${acertosSimulado}

            <br><br>

            <strong>
                Erros:
            </strong>

            ${errosSimulado}

            <br><br>

            <strong>
                Aproveitamento:
            </strong>

            ${percentual}%

        </div>

    `;

}

// ==========================
// SIMULADOS PERSONALIZADOS
// ==========================

function iniciarSimuladoPersonalizado(
    banco,
    quantidade
){

    questoesSimulado =

        [...banco]
        .sort(() => Math.random() - 0.5)
        .slice(0, quantidade);

    modoSimulado = true;

    indiceSimulado = 0;

    acertosSimulado = 0;

    errosSimulado = 0;

    mostrarQuestaoSimulado();

}

// ==========================
// SIMULADOS POR DISCIPLINA
// ==========================

function iniciarSimuladoPortugues(){

    const portugues = [

        ...interpretacao,
        ...generos,
        ...funcoes,
        ...coesao,
        ...semantica,
        ...figuras,
        ...variacao,
        ...classesPalavras,
        ...formacaoPalavras,
        ...sintaxe,
        ...periodoComposto,
        ...concordancia,
        ...regencia,
        ...crase,
        ...vozesVerbais,
        ...pontuacao,
        ...ortografia,
        ...acentuacao,
        ...redacaoOficial

    ];

    iniciarSimuladoPersonalizado(
        portugues,
        30
    );

}

function iniciarSimuladoInformatica(){

    const informatica = [

        ...hardware,
        ...software

    ];

    iniciarSimuladoPersonalizado(
        informatica,
        30
    );

}

function iniciarSimuladoDidatica(){

    const didatica = [

        ...bncc,
        ...ldb,
        ...eca,
        ...pne,
        ...fundeb,
        ...lbi,
        ...tea,
        ...inclusiva,
        ...etnicoRacial,
        ...educacaoCampo

    ];

    iniciarSimuladoPersonalizado(
        didatica,
        30
    );

}

function iniciarSimuladoApoioEscolar(){

    alert(
        "🚧 Simulado de Apoio Escolar em desenvolvimento."
    );


}

// ==========================
// ABRIR ASSUNTO
// ==========================

function abrirAssunto(assunto) {

    assuntoAtual = assunto;

console.log("Assunto:", assunto);
console.log("Progresso:", progressoAssuntos);

console.log(
    "Valor deste assunto:",
    progressoAssuntos[assunto]
);

const btnContinuar =
    document.getElementById(
        "btnContinuar"
    );

if (
    progressoAssuntos[assunto] !== undefined
) {

    btnContinuar.style.display =
        "inline-block";

} else {

    btnContinuar.style.display =
        "none";

}

    const titulo =
        document.getElementById(
            "tituloMapa"
        );

    const imagem =
        document.getElementById(
            "imagemMapa"
        );

    switch (assunto) {

        case "bncc":

            titulo.innerHTML =
                "📘 BNCC";

            imagem.src =
                "imagens/mapas/bncc.jpg";

            break;

    case "ldb":

        titulo.innerHTML = "📘 LDB";
        imagem.src = "imagens/mapas/ldb.jpg";
        break;

 case "eca":
        titulo.innerHTML = "📘 ECA";
        imagem.src = "imagens/mapas/eca.jpg";
        break;

    case "pne":
        titulo.innerHTML = "📘 PNE";
        imagem.src = "imagens/mapas/pne.jpg";
        break;

    case "fundeb":
        titulo.innerHTML = "📘 FUNDEB";
        imagem.src = "imagens/mapas/fundeb.jpg";
        break;

    case "lbi":
        titulo.innerHTML = "📘 LBI";
        imagem.src = "imagens/mapas/lbi.jpg";
        break;

    case "tea":
        titulo.innerHTML = "📘 TEA";
        imagem.src = "imagens/mapas/tea.jpg";
        break;

    case "inclusiva":
        titulo.innerHTML = "📘 EDUCAÇÃO INCLUSIVA";
        imagem.src = "imagens/mapas/inclusiva.jpg";
        break;

    case "etnicoRacial":
        titulo.innerHTML = "📘 Relações Étnico-Raciais";
        imagem.src = "imagens/mapas/etnicoRacial.jpg";
        break;

    case "educacaoCampo":
        titulo.innerHTML = "📘 Educação do Campo";
        imagem.src = "imagens/mapas/campo.jpg";
        break;

       case "gestao":
        titulo.innerHTML = "📘 Gestão Democrática";
        imagem.src = "imagens/mapas/gestao.jpg";
        break;

case "interpretacao":

    titulo.innerHTML =
        "📖 Interpretação de Textos";

    imagem.src =
        "imagens/mapas/texto.png";

    break;

case "generos":

    titulo.innerHTML =
        "📄 Tipologia e Gêneros Textuais";

    imagem.src =
        "imagens/mapas/generos.png";

    break;

case "funcoes":

    titulo.innerHTML =
        "📡 Funções da Linguagem";

    imagem.src =
        "imagens/mapas/funcoes.png";

    break;

case "coesao":

    titulo.innerHTML =
        "🔗 Coesão e Coerência";

    imagem.src =
        "imagens/mapas/coesao.png";

    break;

case "semantica":

    titulo.innerHTML =
        "🧠 Semântica";

    imagem.src =
        "imagens/mapas/semantica.png";

    break;

case "figuras":

    titulo.innerHTML =
        "🎭 Figuras de Linguagem";

    imagem.src =
        "imagens/mapas/figuras.png";

    break;

case "variacao":

    titulo.innerHTML =
        "🌎 Variação Linguística";

    imagem.src =
        "imagens/mapas/variacao.png";

    break;

case "classesPalavras":

    titulo.innerHTML =
        "📚 Classes de Palavras";

    imagem.src =
        "imagens/mapas/classesPalavras.png";

    break;

case "formacaoPalavras":

    titulo.innerHTML =
        "🏗 Formação de Palavras";

    imagem.src =
        "imagens/mapas/formacaoPalavras.png";

    break;

case "sintaxe":

    titulo.innerHTML =
        "📝 Sintaxe";

    imagem.src =
        "imagens/mapas/sintaxe.png";

    break;

case "periodoComposto":

    titulo.innerHTML =
        "🔄 Período Simples e Composto";

    imagem.src =
        "imagens/mapas/periodoComposto.png";

    break;

case "concordancia":

    titulo.innerHTML =
        "📌 Concordância";

    imagem.src =
        "imagens/mapas/concordancia.png";

    break;

case "regencia":

    titulo.innerHTML =
        "🎯 Regência";

    imagem.src =
        "imagens/mapas/regencia.png";

    break;

case "crase":

    titulo.innerHTML =
        "✍️ Crase";

    imagem.src =
        "imagens/mapas/crase.png";

    break;

case "vozesVerbais":

    titulo.innerHTML =
        "🗣️ Vozes Verbais";

    imagem.src =
        "imagens/mapas/vozesVerbais.png";

    break;

case "pontuacao":

    titulo.innerHTML =
        "📍 Pontuação";

    imagem.src =
        "imagens/mapas/pontuacao.png";

    break;

case "ortografia":

    titulo.innerHTML =
        "📖 Ortografia";

    imagem.src =
        "imagens/mapas/ortografia.png";

    break;

case "acentuacao":

    titulo.innerHTML =
        "🔠 Acentuação";

    imagem.src =
        "imagens/mapas/acentuacao.png";

    break;

case "redacaoOficial":

    titulo.innerHTML =
        "🏛️ Redação Oficial";

    imagem.src =
        "imagens/mapas/redacaoOficial.png";

    break;

case "hardware":

    titulo.innerHTML =
        "💻 Hardware";

    imagem.src =
        "imagens/mapas/hardware.png";

    break;

case "software":

    titulo.innerHTML =
        "⚙️ Software, Windows e Linux";

    imagem.src =
        "imagens/mapas/software.png";

    break;

    }

    mostrarTela(
        "telaMapaMental"
    );

}

function iniciarBNCC() {

    const revisado =
        document.getElementById(
            "liMapaBNCC"
        ).checked;

    if (!revisado) {

        alert(
            "Leia o mapa mental antes de continuar."
        );

        return;

    }

    alert(
        "Banco de questões BNCC será conectado na próxima etapa."
    );

}

// ==========================
// INICIALIZAÇÃO
// ==========================

function iniciarQuestoesAssunto() {

    const revisado =
        document.getElementById(
            "confirmacaoMapa"
        ).checked;

    if (!revisado) {

        alert(
            "Leia e revise o mapa mental antes de iniciar as questões."
        );

        return;

    }

disciplinaAtual = assuntoAtual;


localStorage.setItem(
    "farol_ultimoAssunto",
    assuntoAtual
);

acertosAssunto = 0;
errosAssunto = 0;

questaoAtual = 0;

questoesEmbaralhadas =
    [...bancoQuestoes[disciplinaAtual]]
    .sort(() => Math.random() - 0.5);

mostrarTela("resolverQuestao");

mostrarQuestao();

}

window.onload = function () {

    carregarDados();

    atualizarEstatisticas();

    atualizarCadernoErros();

    atualizarDashboard();

    atualizarPainelEstudos();

    auth.onAuthStateChanged((user) => {

    if(user){

    document.body.classList.remove(
        "login-ativo"
    );

    const telaSalva =
        localStorage.getItem(
            "farol_telaAtual"
        );

    if(telaSalva){

        mostrarTela(
            telaSalva
        );

    }else{

        mostrarTela(
            "inicio"
        );

    }

}
else{

    document.body.classList.add(
        "login-ativo"
    );

    mostrarTela(
        "login"
    );

}

});

};

function atualizarDashboard() {

    const respondidas =
        acertos + erros;

    const aproveitamento =
        respondidas > 0
        ? Math.round(
            (acertos / respondidas) * 100
        )
        : 0;

    document.getElementById("totalRespondidas").textContent =
        respondidas;

    document.getElementById("totalAcertos").textContent =
        acertos;

    document.getElementById("totalErros").textContent =
        erros;

    const campoAproveitamento =
    document.getElementById("aproveitamento");

campoAproveitamento.textContent =
    aproveitamento + "%";

if (aproveitamento < 50) {

    campoAproveitamento.style.color =
        "#c62828"; // vermelho

}
else if (aproveitamento < 70) {

    campoAproveitamento.style.color =
        "#f9a825"; // amarelo

}
else {

    campoAproveitamento.style.color =
        "#1565c0"; // azul

}

document.getElementById(
    "medalhasOuro"
).textContent = medalhasOuro;

document.getElementById(
    "medalhasPrata"
).textContent = medalhasPrata;

document.getElementById(
    "medalhasBronze"
).textContent = medalhasBronze;

}

function voltarParaMapa(){

    abrirAssunto(
        assuntoAtual
    );

}

function voltarParaAssuntos(){

    const assuntosPortugues = [

        "interpretacao",
        "generos",
        "funcoes",
        "coesao",
        "semantica",
        "figuras",
        "variacao",
        "classesPalavras",
        "formacaoPalavras",
        "sintaxe",
        "periodoComposto",
        "concordancia",
        "regencia",
        "crase",
        "vozesVerbais",
        "pontuacao",
        "ortografia",
        "acentuacao",
        "redacaoOficial"

    ];

    const assuntosInformatica = [

        "hardware",
        "software",
        "arquivos",
        "office",
        "internet",
        "redes",
        "seguranca"

    ];

    if(
        assuntosPortugues.includes(
            assuntoAtual
        )
    ){

        mostrarTela("portugues");

    }
    else if(
        assuntosInformatica.includes(
            assuntoAtual
        )
    ){

        mostrarTela("informatica");

    }
    else{

        mostrarTela("didatica");

    }

}

function continuarQuestoes(){

    disciplinaAtual = assuntoAtual;
questoesEmbaralhadas =
    [...bancoQuestoes[disciplinaAtual]];

    const total =
        bancoQuestoes[assuntoAtual].length;

    questaoAtual =
        progressoAssuntos[assuntoAtual] || 0;

    if(questaoAtual >= total){

        alert("Este assunto já foi concluído.");
        return;

    }

    mostrarTela("resolverQuestao");

    mostrarQuestao();

}

function refazerAssunto(){

    questaoAtual = 0;

    acertosAssunto = 0;
    errosAssunto = 0;

    progressoAssuntos[disciplinaAtual] = 0;

    mostrarTela("resolverQuestao");

    mostrarQuestao();

}

function atualizarPainelEstudos(){

    let concluidos = 0;

    let andamento = 0;

    let ultimo = "Nenhum";

const ultimoSalvo =
    localStorage.getItem(
        "farol_ultimoAssunto"
    );

    let proxima = "-";

    for(let assunto in progressoAssuntos){

        const total =
            bancoQuestoes[assunto]
            ?
            bancoQuestoes[assunto].length
            :
            0;

        const atual =
            progressoAssuntos[assunto];

        if(atual >= total){

            concluidos++;

        }else{

            andamento++;

            const nomesBonitos = {

    bncc: "📘 BNCC",

    ldb: "📘 LDB",

    eca: "📘 ECA",

    pne: "📘 PNE",

    fundeb: "📘 FUNDEB",

    lbi: "📘 LBI",

    tea: "📘 TEA",

    inclusiva: "📘 Educação Inclusiva",

    etnicoRacial: "📘 Relações Étnico-Raciais",

    educacaoCampo: "📘 Educação do Campo",

    curriculo: "📘 Currículo e Planejamento",

    interpretacao: "📖 Interpretação de Textos",

    generos: "📄 Tipologia e Gêneros Textuais",

    funcoes: "📡 Funções da Linguagem",

    coesao: "🔗 Coesão e Coerência",

    semantica: "🧠 Semântica",

    figuras: "🎭 Figuras de Linguagem",

    variacao: "🌎 Variação Linguística",

    classesPalavras: "📚 Classes de Palavras",

    formacaoPalavras: "🏗 Formação de Palavras",

    sintaxe: "📝 Sintaxe",

    periodoComposto: "🔄 Período Simples e Composto",

    concordancia: "📌 Concordância",

    regencia: "🎯 Regência",

    crase: "✍️ Crase",

    vozesVerbais: "🗣️ Vozes Verbais",

    pontuacao: "📍 Pontuação",

    ortografia: "📖 Ortografia",

    acentuacao: "🔠 Acentuação",

    redacaoOficial: "🏛️ Redação Oficial",

    hardware: "💻 Hardware",

    software: "⚙️ Software",

};

ultimo = nomesBonitos[assunto];

            proxima = atual + 1;

        }

    }

    document.getElementById(
        "assuntosConcluidos"
    ).textContent = concluidos;

    document.getElementById(
        "assuntosAndamento"
    ).textContent = andamento;

 if(ultimoSalvo){

    const nomesBonitos = {

        bncc: "📘 BNCC",
        ldb: "📘 LDB",
        eca: "📘 ECA",
        pne: "📘 PNE",
        fundeb: "📘 FUNDEB",
        lbi: "📘 LBI",
        tea: "📘 TEA",
        inclusiva: "📘 Educação Inclusiva",
        interpretacao: "📖 Interpretação de Textos",
        semantica: "🧠 Semântica",
        hardware: "💻 Hardware",
        software: "⚙️ Software"

    };

    document.getElementById(
        "ultimoAssunto"
    ).textContent =
        nomesBonitos[ultimoSalvo]
        || ultimoSalvo;

}else{

    document.getElementById(
        "ultimoAssunto"
    ).textContent = ultimo;

}

    document.getElementById(
        "proximaQuestaoPainel"
    ).textContent = proxima;

}

async function criarConta(){

    const email =
        document.getElementById(
            "emailLogin"
        ).value;

    const senha =
        document.getElementById(
            "senhaLogin"
        ).value;

if(!email || !senha){

    alert(
        "Preencha e-mail e senha."
    );

    return;

}

    try{

        const credencial =
            await auth.createUserWithEmailAndPassword(
                email,
                senha
            );

        await db.collection("usuarios")
        .doc(credencial.user.uid)
        .set({

            email: email,

            aprovado: false

        });

        alert(
            "Cadastro realizado. Aguarde aprovação."
        );

        await auth.signOut();

    }
    catch(erro){

        alert(
            erro.message
        );

    }

}

async function entrar(){

    alert("1 - Função iniciada");

    const email =
        document.getElementById(
            "emailLogin"
        ).value;

    const senha =
        document.getElementById(
            "senhaLogin"
        ).value;

    try{

        const credencial =
            await auth.signInWithEmailAndPassword(
                email,
                senha
            );

        alert("2 - Login realizado");

        const doc =
            await db.collection("usuarios")
            .doc(credencial.user.uid)
            .get();

        alert("3 - Documento encontrado: " + doc.exists);

        alert("4 - Aprovado: " + doc.data().aprovado);

        if(
            !doc.exists ||
            doc.data().aprovado !== true
        ){

            alert(
                "⛔ Aguardando aprovação do administrador."
            );

            await auth.signOut();

            return;

        }

        alert("5 - Entrando no sistema");

        mostrarTela("inicio");

    }
    catch(erro){

        alert(
            "ERRO: " + erro.message
        );

    }

}
