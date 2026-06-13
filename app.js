// ==========================
// FAROL DO SABER v0.2
// ==========================

// TROCA DE TELAS
function mostrarTela(id) {

atualizarStatusAssuntos();

atualizarAtividade();

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
if(id === "cadastro"){

    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "flex";

}

if(id === "login"){

    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "flex";

}

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

function abrirForum(disciplina){

    disciplinaForumAtual = disciplina;

    localStorage.setItem(
        "farol_disciplinaForum",
        disciplina
    );

    telaOrigemForum =
        localStorage.getItem("farol_telaAtual")
        || "";

    mostrarTela("forum");

}


async function novaPergunta(){

    const pergunta = prompt(
        "Digite sua dúvida:"
    );

    if(
        !pergunta ||
        pergunta.trim() === ""
    ){
        return;
    }

    const agora = new Date();

    const dataHora =
        agora.toLocaleString();

const novaPerguntaObj = {

    id: Date.now(),

    disciplina:
        disciplinaForumAtual,

    autor:
        usuarioForum,

    autorEmail:
        usuarioEmail,

    pergunta:
        pergunta,

    data:
        dataHora,

    respostas: []

};

await db
.collection("forumGlobal")
.add(novaPerguntaObj);

atualizarContadorForum();

}

async function responderPergunta(firebaseId){

    const resposta = prompt(
        "Digite sua resposta:"
    );

    if(
        !resposta ||
        resposta.trim() === ""
    ){
        return;
    }

    const perguntaEncontrada =
    perguntasForum.find(

        p => p.firebaseId === firebaseId

    );


    if(!perguntaEncontrada){
        mostrarToast("Pergunta não encontrada.");
        return;
    }

    const novasRespostas = [

        ...(perguntaEncontrada.respostas || []),

        {
            autor: usuarioForum,
            data: new Date().toLocaleString(),
            texto: resposta,
            curtidas: 0,
            curtidoPor: []
        }

    ];

    try{

    await db
    .collection("forumGlobal")
    .doc(firebaseId)
    .update({

        respostas: novasRespostas

    });

    
}catch(erro){

    console.error(erro);

    alert(
        "ERRO: " + erro.message
    );

}


}

function renderizarForum(){

    const listaForum =
    document.getElementById(
        "listaForum"
    );

    if(!listaForum){
        return;
    }

    if(
        perguntasForum.length === 0
    ){

        listaForum.innerHTML =
        "Nenhuma pergunta cadastrada.";

        return;

    }

    listaForum.innerHTML = "";

    [...perguntasForum]

    .filter(

        item =>

        item.disciplina ===
        disciplinaForumAtual

    )

    .sort(

        (a,b) => a.id - b.id

    )

    .forEach(item => {

        listaForum.innerHTML += `

        <div class="card-forum">

            <h3>
                ❓ ${item.pergunta}
            </h3>

            <p>
                👤 ${item.autor}

            </p>

            <p>
                📅 ${item.data}
            </p>

<div class="botoes-forum">

<button
    class="btn-responder"
    onclick="responderPergunta('${item.firebaseId}')">

    💬 Responder

</button>

${
    item.autor === usuarioForum
    ||
    ehAdmin()
    ?
    `
    <button
        class="btn-excluir"
        onclick="excluirPergunta('${item.firebaseId}')">

        🗑 Excluir

    </button>
    `
    :
    ""
}

</div>


<div class="respostas">

${
    (item.respostas || [])

    .map((resposta, indice) => `

    <div class="resposta-forum">

        👤 ${resposta.autor}


        <br>

        📅 ${resposta.data}

        <br><br>

        💬 ${resposta.texto}

        <br><br>

<div class="botoes-resposta">

<button
    onclick="curtirResposta(
        '${item.firebaseId}',
        ${indice}
    )">

👍 ${resposta.curtidas || 0}

</button>

${
    resposta.autor === usuarioForum
    ||
    ehAdmin()
    ?
    `
    <button
        class="btn-excluir"
        onclick="excluirResposta(
            '${item.firebaseId}',
            ${indice}
        )">

        🗑 Excluir

    </button>
    `
    :
    ""
}

</div>

    </div>

    <br>

`)
.join("")
}

</div>

        </div>

        <br>

        `;

    });

    atualizarContadorForum();

}



function carregarForum(){

    db.collection("forumGlobal")

    .onSnapshot(snapshot => {

        perguntasForum = [];

        snapshot.forEach(doc => {

            perguntasForum.push({

                firebaseId: doc.id,

                ...doc.data()

            });

        });

        renderizarForum();

    });

}

async function excluirPergunta(firebaseId){

    const confirmar = confirm(
        "Deseja excluir esta pergunta?"
    );

    if(!confirmar){
        return;
    }

    await db
    .collection("forumGlobal")
    .doc(firebaseId)
    .delete();

}


async function excluirResposta(
    firebaseId,
    indiceResposta
){

    const confirmar = confirm(
        "Deseja excluir esta resposta?"
    );

    if(!confirmar){
        return;
    }

    try {

        const pergunta =
        perguntasForum.find(

            p => p.firebaseId === firebaseId

        );

        if(!pergunta){
            mostrarToast("Pergunta não encontrada");
            return;
        }

        const respostas = [

            ...(pergunta.respostas || [])

        ];

        respostas.splice(
            indiceResposta,
            1
        );

        await db
        .collection("forumGlobal")
        .doc(firebaseId)
        .update({

            respostas: respostas

        });

        mostrarToast("Resposta excluída com sucesso");

    } catch(error){

        console.error(error);

        alert(
            "ERRO: " +
            error.message
        );

    }

}



async function curtirResposta(
    firebaseId,
    indiceResposta
){

    const pergunta =
    perguntasForum.find(

        p => p.firebaseId === firebaseId

    );

    if(!pergunta){
        return;
    }

    const respostas = [

        ...(pergunta.respostas || [])

    ];

    const resposta =
    respostas[indiceResposta];

    if(!resposta){
        return;
    }

    if(!resposta.curtidoPor){

        resposta.curtidoPor = [];

    }

    if(

        resposta.curtidoPor.includes(
            usuarioForum
        )

    ){

        mostrarToast(
            "Você já curtiu esta resposta."
        );

        return;

    }

    resposta.curtidas =
        (resposta.curtidas || 0) + 1;

    resposta.curtidoPor.push(
        usuarioForum
    );

    await db
    .collection("forumGlobal")
    .doc(firebaseId)
    .update({

        respostas: respostas

    });

}

function voltarForum(){

    const destino =
        telaOrigemForum
        || disciplinaForumAtual
        || "questoes";

    mostrarTela(destino);

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

    software,

    arquivos,

    office,

    internet,

    redes,

    seguranca,

    fundamentosCiencias,

    bnccCiencias,

    povosPreColombianos,

    
    
};

function mostrarToast(mensagem){

    const toast =
        document.getElementById("toast");

    if(!toast) return;

    toast.textContent =
        mensagem;

    toast.className =
        "toast mostrar";

    setTimeout(()=>{

        toast.className =
            "toast";

    },3000);

}

// ==========================
// VARIÁVEIS GLOBAIS
// ==========================


let disciplinaAtual = "";
let assuntoAtual = "";
let questaoAtual = 0;
let questaoExibida = null;
let questoesEmbaralhadas = [];
let disciplinaForumAtual =
    localStorage.getItem(
        "farol_disciplinaForum"
    ) || "";
let telaOrigemForum = "";

let progressoAssuntos = {};

let acertos = 0;
let erros = 0;

let inicioEstudo = Date.now();

let usuarioForum =
localStorage.getItem(
    "usuarioForum"
) || "Visitante";

let usuarioEmail =
localStorage.getItem(
    "usuarioEmail"
) || "";

let usuarioEhAdmin = false;

let tempoEstudado =
Number(
    localStorage.getItem(
        "tempoEstudado"
    )
) || 0;

let acertosAssunto = 0;
let errosAssunto = 0;
let medalhasOuro = 0;
let medalhasPrata = 0;
let medalhasBronze = 0;

let cadernoErros = [];

let perguntasForum = [];

const administradores = [

    "jp@gmail.com"

];

function ehAdmin(){

    return administradores.includes(
        usuarioEmail
    );

}

// ==========================
// TEORIAS
// ==========================

let teoriaAtual = [];

let paginaTeoriaAtual = 0;

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

    mostrarTela("ciencias");

    return;

}

    disciplinaAtual = nome;

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

if (nome === "historia") {

    mostrarTela("historia");

    return;

}

    alert(
        "Disciplina em desenvolvimento."
    );

}

function abrirTeoria(teoria, titulo){

teoriaAtual = teoria;

paginaTeoriaAtual = Number(
    localStorage.getItem(
        "farol_teoria_" + assuntoAtual
    )
) || 0;

 if(
        paginaTeoriaAtual >= teoria.length
    ){
        paginaTeoriaAtual = 0;
    }

    document.getElementById(
        "tituloTeoria"
    ).innerHTML = titulo;

    mostrarPaginaTeoria();

    mostrarTela("teoria");

}

function mostrarPaginaTeoria(){

    localStorage.setItem(
        "farol_teoria_" + assuntoAtual,
        paginaTeoriaAtual
    );

if(
    !teoriaAtual ||
    paginaTeoriaAtual < 0 ||
    paginaTeoriaAtual >= teoriaAtual.length
){
    paginaTeoriaAtual = 0;
}


    const pagina =
        teoriaAtual[paginaTeoriaAtual];

    document.getElementById(
        "conteudoTeoria"
    ).innerHTML = `

        <h3>

            ${pagina.titulo}

        </h3>

        <hr>

        <br>

        ${pagina.conteudo}

        <br><br>

        <h4>

            📖 Página
            ${paginaTeoriaAtual + 1}

            de

            ${teoriaAtual.length}

        </h4>

    `;

    let paginasHTML = "";

    for(
        let i = 0;
        i < teoriaAtual.length;
        i++
    ){

        if(i === paginaTeoriaAtual){

            paginasHTML += `
            <button
                onclick="irParaPaginaTeoria(${i})"
                style="
                    background:#1565c0;
                    color:white;
                    margin:2px;
                    min-width:40px;
                ">
                ${i + 1}
            </button>
            `;

        }else{

            paginasHTML += `
            <button
                onclick="irParaPaginaTeoria(${i})"
                style="
                    margin:2px;
                    min-width:40px;
                ">
                ${i + 1}
            </button>
            `;

        }

    }

    document.getElementById(
        "paginacaoTeoria"
    ).innerHTML = paginasHTML;

    const botao =
    document.getElementById(
        "btnProximaTeoria"
    );

    if(
        paginaTeoriaAtual
        ===
        teoriaAtual.length - 1
    ){

        botao.innerHTML =
        "✅ Concluir Teoria";

        botao.onclick =
        concluirTeoria;

    }
    else{

        botao.innerHTML =
        "Próxima Página ➡";

        botao.onclick =
        proximaPaginaTeoria;

    }

    document
        .getElementById("tituloTeoria")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}
function irParaPaginaTeoria(numero){

    paginaTeoriaAtual = numero;

    mostrarPaginaTeoria();

}


function proximaPaginaTeoria(){

    if(

        paginaTeoriaAtual

        <

        teoriaAtual.length - 1

    ){

        paginaTeoriaAtual++;

        mostrarPaginaTeoria();

    } else {

    localStorage.setItem(
        "farol_teoria_concluida_" + assuntoAtual,
        "true"
    );

    abrirMapaMental();

}

}

function paginaAnteriorTeoria(){

    if(

        paginaTeoriaAtual > 0

    ){

        paginaTeoriaAtual--;

        mostrarPaginaTeoria();

    }

}

function concluirTeoria(){

    localStorage.setItem(
        "farol_teoria_concluida_" + assuntoAtual,
        "true"
    );

    localStorage.setItem(
        "farol_teoria_" + assuntoAtual,
        0
    );

    abrirMapaMental();

}

function abrirMapaMental(){

    mostrarTela(
        "telaMapaMental"
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

<div style="display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="abrirTeoriaDoAssunto()">
    📚 Teoria
</button>

<button onclick="voltarParaMapa()">
    🧠 Mapa Mental
</button>

<button onclick="voltarParaAssuntos()">
    ⬅ Assuntos
</button>

</div>

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

${q.afirmacoes ? `

<div class="card texto-base">

${q.afirmacoes.map(item => `
<p>${item}</p>
`).join("")}

</div>

<br>

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

atualizarAtividade();

    const resposta = document.querySelector(
        'input[name="resposta"]:checked'
    );

    if (!resposta) {
        mostrarToast(
    "Selecione uma alternativa."
);
        return;
    }

const q = questaoExibida;


    const feedback =
        document.getElementById("feedback");
console.log(q.feedbackAcerto);
console.log(q.feedbackErro);
console.log(q.dicaBanca);

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

            <div>
${(q.feedbackAcerto || "").trim()}
</div>

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

    hardware: "💻 Hardware",

    software: "⚙️ Software",
    
    office: "📊 Office e LibreOffice",

    internet: "🌐 Internet e Correio Eletrônico",

    redes: "🌐 Redes de Computadores",

    seguranca: "🔒 Segurança da Informação",

    fundamentosCiencias:
"🔬 Fundamentos do Ensino de Ciências",

     bnccCiencias:
"📘 BNCC e Competências em Ciências da Natureza"
    

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

            cadernoErros.unshift({

    disciplina: nomeDisciplina,

    pergunta: q.pergunta,

    respostaCorreta: respostaCorreta,

    explicacao: q.feedbackErro,

    erros: 1,

    data: Date.now()

});

        }

        feedback.innerHTML = `
        <div class="feedback-erro">

           <h3>❌ Resposta Incorreta!</h3>

<strong>Resposta correta:</strong><br>
${respostaCorreta}

<br><br>

<strong>Explicação:</strong>

<br><br>

${q.feedbackErro || "Sem explicação cadastrada."}

<br><br>

<strong>💡 Dica da banca:</strong>

<br><br>

${q.dicaBanca || "Sem dica cadastrada."}

           
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

if(percentual >= 95){

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

let resultadosAssuntos =
    JSON.parse(
        localStorage.getItem(
            "farol_resultados"
        )
    ) || {};

resultadosAssuntos[
    disciplinaAtual
] = {

    percentual: percentual,

    medalha: medalha,

    classificacao: classificacao

};

localStorage.setItem(
    "farol_resultados",
    JSON.stringify(
        resultadosAssuntos
    )
);

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
        (a,b) => b.data - a.data
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

${q.afirmacoes ? `

<div class="card texto-base">

${q.afirmacoes.map(item => `
<p>${item}</p>
`).join("")}

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

        mostrarToast(
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

function iniciarSimuladoCiencias(){

    const ciencias = [

        ...fundamentosCiencias,
        ...bnccCiencias

    ];

    iniciarSimuladoPersonalizado(
        ciencias,
        30
    );

}

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
        ...software,
        ...arquivos,
        ...office,
        ...internet,
        ...redes,
        ...seguranca

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

case "arquivos":

    titulo.innerHTML =
        "🗂 Arquivos, Pastas e Backup";

    imagem.src =
        "imagens/mapas/arquivos.png";

    break;

case "office":

    titulo.innerHTML =
        "📊 Office e LibreOffice";

    imagem.src =
        "imagens/mapas/office.png";

    break;

case "internet":

    titulo.innerHTML =
        "🌐 Internet e Correio Eletrônico";

    imagem.src =
        "imagens/mapas/internet.png";

    break;

case "redes":

    titulo.innerHTML =
        "🌐 Redes de Computadores";

    imagem.src =
        "imagens/mapas/redes.png";

    break;

case "seguranca":

    titulo.innerHTML =
        "🔒 Segurança da Informação";

    imagem.src =
        "imagens/mapas/seguranca.png";

    break;

case "fundamentosCiencias":

    titulo.innerHTML =
        "🔬 Fundamentos do Ensino de Ciências";

    imagem.src =
        "imagens/mapas/fundamentos-ciencias.png";

    break;

case "bnccCiencias":

    titulo.innerHTML =
        "📘 BNCC e Competências em Ciências da Natureza";

    imagem.src =
        "imagens/mapas/bncc-ciencias.png";

    break;

case "povosPreColombianos":

    titulo.innerHTML =
        "🏺 Povos Pré-Colombianos";

    imagem.src =
        "imagens/mapas/povosPreColombianos.png";

    break;

    }

if(assunto === "fundamentosCiencias"){

    abrirTeoria(
        fundamentosCienciasTeoria,
        "🔬 Fundamentos do Ensino de Ciências"
    );

    return;

}

if(assunto === "bnccCiencias"){

    abrirTeoria(
        bnccCienciasTeoria,
        "📘 BNCC e Competências em Ciências da Natureza"
    );

    return;

}

if(assunto === "hardware"){

    abrirTeoria(
        hardwareTeoria,
        "💻 Hardware"
    );

    return;

}

if(assunto === "software"){

    abrirTeoria(
        softwareTeoria,
        "🖥️ Software"
    );

    return;

}

if(assunto === "arquivos"){

    abrirTeoria(
        arquivosPastasBackupTeoria,
        "📁 Arquivos, Pastas, Linux e Backup"
    );

    return;

}

if(assunto === "office"){
    abrirTeoria(
        officeTeoria,
        "📊 Office e LibreOffice"
    );
    return;
}

if(assunto === "internet"){
    abrirTeoria(
        internetTeoria,
        "🌐 Internet e Correio Eletrônico"
    );
    return;
}

if(assunto === "redes"){
    abrirTeoria(
        redesTeoria,
        "🖧 Redes de Computadores"
    );
    return;
}

if(assunto === "seguranca"){
    abrirTeoria(
        segurancaInformacaoTeoria,
        "🔐 Segurança da Informação"
    );
    return;
}

if(assunto === "interpretacao"){

    abrirTeoria(
        interpretacaoTeoria,
        "📖 Interpretação de Textos"
    );

    return;

}

if(assunto === "generos"){

    abrirTeoria(
        generosTeoria,
        "📄 Tipologia e Gêneros Textuais"
    );

    return;

}

if(assunto === "funcoes"){

    abrirTeoria(
        funcoesTeoria,
        "📡 Funções da Linguagem"
    );

    return;

}

if(assunto === "coesao"){

    abrirTeoria(
        coesaoTeoria,
        "🔗 Coesão e Coerência"
    );

    return;

}

if (assuntoAtual === "semantica") {
    abrirTeoria(
        semanticaTeoria,
        "🧠 Semântica"
    );
    return;
}

if (assuntoAtual === "figuras") {

    abrirTeoria(
        figurasTeoria,
        "🎭 Figuras de Linguagem"
    );

    return;
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

    carregarUsuariosOnline();
   
    carregarForum();
    
    iniciarChat();
    
    carregarUsuariosOnlineChat();

    atualizarContadorForum();

    setInterval(

        carregarUsuariosOnline,

        30000

    );

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

function formatarTempo(segundos){

    const horas =
    Math.floor(
        segundos / 3600
    );

    const minutos =
    Math.floor(
        (segundos % 3600) / 60
    );

    return `${horas}h ${minutos}min`;

}

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

const tempoAtual =

tempoEstudado +

Math.floor(
    (
        Date.now() -
        inicioEstudo
    ) / 1000
);

document.getElementById(
    "tempoEstudado"
).textContent =

formatarTempo(
    tempoAtual
);

}

function voltarParaMapa(){

    const titulo =
        document.getElementById(
            "tituloMapa"
        );

    const imagem =
        document.getElementById(
            "imagemMapa"
        );

    if(assuntoAtual === "fundamentosCiencias"){

        titulo.innerHTML =
            "🔬 Fundamentos do Ensino de Ciências";

        imagem.src =
            "imagens/mapas/fundamentos-ciencias.png";

    }

    mostrarTela(
        "telaMapaMental"
    );

}

function abrirTeoriaDoAssunto(){

    if(assuntoAtual === "fundamentosCiencias"){
        abrirTeoria(
            fundamentosCienciasTeoria,
            "🔬 Fundamentos do Ensino de Ciências"
        );
        return;
    }

    if(assuntoAtual === "bnccCiencias"){
        abrirTeoria(
            bnccCienciasTeoria,
            "📘 BNCC e Competências em Ciências da Natureza"
        );
        return;
    }

    if(assuntoAtual === "hardware"){
        abrirTeoria(
            hardwareTeoria,
            "💻 Hardware"
        );
        return;
    }

    if(assuntoAtual === "software"){
        abrirTeoria(
            softwareTeoria,
            "🖥️ Software"
        );
        return;
    }

    if(assuntoAtual === "arquivos"){
        abrirTeoria(
            arquivosPastasBackupTeoria,
            "📁 Arquivos, Pastas, Linux e Backup"
        );
        return;
    }

if(assuntoAtual === "office"){
    abrirTeoria(
        officeTeoria,
        "📊 Office e LibreOffice"
    );
    return;
}
if(assuntoAtual === "internet"){
    abrirTeoria(
        internetTeoria,
        "🌐 Internet"
    );
    return;
}
if(assuntoAtual === "redes"){
    abrirTeoria(
        redesTeoria,
        "📡 Redes de Computadores"
    );
    return;
}
if(assuntoAtual === "seguranca"){
    abrirTeoria(
        segurancaInformacaoTeoria,
        "🔐 Segurança da Informação"
    );
    return;
}

if(assuntoAtual === "interpretacao"){

    abrirTeoria(
        interpretacaoTeoria,
        "📖 Interpretação de Textos"
    );

    return;

}

if(assuntoAtual === "generos"){

    abrirTeoria(
        generosTeoria,
        "📄 Tipologia e Gêneros Textuais"
    );

    return;

}

if(assuntoAtual === "funcoes"){

    abrirTeoria(
        funcoesTeoria,
        "📡 Funções da Linguagem"
    );

    return;

}

if(assuntoAtual === "coesao"){

    abrirTeoria(
        coesaoTeoria,
        "🔗 Coesão e Coerência"
    );

    return;

}

if (assuntoAtual === "semantica") {
    abrirTeoria(
        semanticaTeoria,
        "🧠 Semântica"
    );
    return;
}
if (assuntoAtual === "figuras") {

    abrirTeoria(
        figurasTeoria,
        "🎭 Figuras de Linguagem"
    );

    return;
}

if (assuntoAtual === "povosPreColombianos") {
    abrirTeoria(
        povosPreColombianosTeoria,
        "🏺 Povos Pré-Colombianos"
    );
    return;
}


    mostrarTela("telaMapaMental");
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

    const assuntosCiencias = [

        "fundamentosCiencias",
        "bnccCiencias"

    ];

  const assuntosHistoria = [

        "povosPreColombianos"

    ];

    if(

        assuntosPortugues.includes(
            assuntoAtual
        )

    ){

        mostrarTela(
            "portugues"
        );

    }

    else if(

        assuntosInformatica.includes(
            assuntoAtual
        )

    ){

        mostrarTela(
            "informatica"
        );

    }

    else if(

        assuntosCiencias.includes(
            assuntoAtual
        )

    ){

        mostrarTela(
            "ciencias"
        );

    }

else if(

        assuntosHistoria.includes(
            assuntoAtual
        )

   ) {

        mostrarTela(
            "historia"
        );

    }

 else{

        mostrarTela(
            "didatica"
        );

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

        mostrarToast("Este assunto já foi concluído.");
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
        povosPreColombianos:
"🏺 Povos Pré-Colombianos",
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
        arquivos: "🗂 Arquivos, Pastas e Backup",
        office: "📊 Office e LibreOffice",
        internet: "🌐 Internet e Correio Eletrônico",
        redes: "🌐 Redes de Computadores",
        seguranca: "🔒 Segurança da Informação",
        fundamentosCiencias: "🔬 Fundamentos do Ensino de Ciências",
        bnccCiencias: "📘 BNCC e Competências em Ciências da Natureza"
    };

    let concluidos = 0;
    let andamento = 0;
    let ultimo = "Nenhum";

    const ultimoSalvo =
        localStorage.getItem("farol_ultimoAssunto");

    let proxima = "-";

    for(let assunto in progressoAssuntos){

        const total =
            bancoQuestoes[assunto]
            ? bancoQuestoes[assunto].length
            : 0;

        const atual =
            progressoAssuntos[assunto];

        if(atual >= total){
            concluidos++;
        }else{
            andamento++;
            ultimo = nomesBonitos[assunto] || assunto;
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
        document.getElementById(
            "ultimoAssunto"
        ).textContent =
            nomesBonitos[ultimoSalvo] || ultimoSalvo;
    }else{
        document.getElementById(
            "ultimoAssunto"
        ).textContent = ultimo;
    }

    document.getElementById(
        "proximaQuestaoPainel"
    ).textContent = proxima;

    const resultados =
        JSON.parse(
            localStorage.getItem("farol_resultados")
        ) || {};

    let melhorTexto = "-";
    let melhorPercentual = -1;

    for(let assunto in resultados){
        if(resultados[assunto].percentual > melhorPercentual){
            melhorPercentual = resultados[assunto].percentual;
            melhorTexto =
                (nomesBonitos[assunto] || assunto) +
                " - " +
                resultados[assunto].percentual +
                "%";
        }
    }

    document.getElementById(
        "melhorResultado"
    ).textContent = melhorTexto;
}

function atualizarStatusAssuntos(){

    const resultados =
        JSON.parse(
            localStorage.getItem(
                "farol_resultados"
            )
        ) || {};

    if(
        document.getElementById(
            "btnHardware"
        )
        &&
        resultados.hardware
    ){

        document.getElementById(
            "btnHardware"
        ).innerHTML = `

            💻 Hardware

            <br><br>

            ✅ Concluído

            <br>

            ${resultados.hardware.medalha}

            ${resultados.hardware.percentual}%

        `;

    }

    if(
        document.getElementById(
            "btnFundamentosCiencias"
        )
        &&
        resultados.fundamentosCiencias
    ){

        document.getElementById(
            "btnFundamentosCiencias"
        ).innerHTML = `

            🔬 Fundamentos do Ensino de Ciências

            <br><br>

            ✅ Concluído

            <br>

            ${resultados.fundamentosCiencias.medalha}

            ${resultados.fundamentosCiencias.percentual}%

        `;

    }

}

async function carregarUsuariosOnline(){

    const agora = Date.now();

    const limite = 120000;

    const snapshot =
        await db.collection("usuarios")
        .get();

    let html = "";
    let totalOnline = 0;

    snapshot.forEach(doc => {

        const dados = doc.data();

        if(
            dados.ultimaAtividade &&
            (agora - dados.ultimaAtividade)
            < limite
        ){

            const primeiroNome =
                (dados.nome || "")
                .split(" ")[0];

            html += `
                🟢 ${primeiroNome}
                <br>
            `;

totalOnline++;

        }

    });

    if(html === ""){

    html =
        "Nenhum usuário online.";

}

document.getElementById(
    "totalOnline"
).textContent =
    totalOnline;

document.getElementById(
    "usuariosOnline"
).innerHTML = html;

}

async function atualizarAtividade(){

    if(!auth.currentUser){
        return;
    }

    try{

        await db.collection("usuarios")
        .doc(auth.currentUser.uid)
        .update({

            ultimaAtividade: Date.now()

        });

    }catch(erro){

        console.log(
            "Erro ao atualizar atividade"
        );

    }

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

        console.log(
            "UID:",
            credencial.user.uid
        );

        const doc =
            await db.collection("usuarios")
            .doc(credencial.user.uid)
            .get();

        console.log(
            "Existe?",
            doc.exists
        );

        if(doc.exists){

    console.log(
        doc.data()
    );

usuarioEhAdmin =
        doc.data().admin === true;

    const nome =
        doc.data().nome || "";

    const primeiroNome =
        nome.split(" ")[0];

usuarioForum =
    primeiroNome;
usuarioEmail =
    credencial.user.email;

localStorage.setItem(
    "usuarioEmail",
    usuarioEmail
);

localStorage.setItem(
    "usuarioForum",
    primeiroNome
);

document.getElementById(
    "nomeUsuario"
).textContent =
    "👋 Olá, " + primeiroNome;

}

await db.collection("usuarios")
.doc(credencial.user.uid)
.update({

    ultimaAtividade: Date.now()

});

        mostrarTela("inicio");
document.getElementById("login").style.display = "none";

    }
    
catch(erro){

    console.error(erro);

    let mensagem = "";

    switch(erro.code){

        case "auth/user-not-found":
            mensagem = "Usuário não encontrado.";
            break;

        case "auth/wrong-password":
            mensagem = "Senha incorreta.";
            break;

        case "auth/invalid-email":
            mensagem = "E-mail inválido.";
            break;

        case "auth/invalid-credential":
            mensagem = "E-mail ou senha incorretos.";
            break;

        default:
            mensagem = erro.message;

    }

    alert(mensagem);

}

}

async function sair(){

    localStorage.removeItem(
        "usuarioForum"
    );

    localStorage.removeItem(
        "usuarioEmail"
    );

    usuarioForum = "Visitante";

    usuarioEmail = "";

    usuarioEhAdmin = false;

    await auth.signOut();

    location.reload();

}

async function finalizarCadastro(){

    const nome =
        document.getElementById(
            "nomeCadastro"
        ).value.trim();

    const email =
        document.getElementById(
            "emailCadastro"
        ).value.trim();

    const senha =
        document.getElementById(
            "senhaCadastro"
        ).value;

    const confirmar =
        document.getElementById(
            "confirmarSenhaCadastro"
        ).value;

    if(
        !nome ||
        !email ||
        !senha ||
        !confirmar
    ){
        alert(
            "Preencha todos os campos."
        );
        return;
    }

    if(senha !== confirmar){

        alert(
            "As senhas não coincidem."
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

            nome: nome,
            email: email,
            dataCadastro: new Date()

        });

        alert(
            "Cadastro realizado com sucesso!"
        );

        await auth.signOut();

        mostrarTela("login");

    }
    
catch(erro){

    let mensagem = "";

    switch(erro.code){

        case "auth/email-already-in-use":
            mensagem = "Este e-mail já está cadastrado.";
            break;

        case "auth/invalid-email":
            mensagem = "E-mail inválido.";
            break;

        case "auth/weak-password":
            mensagem = "A senha deve ter pelo menos 6 caracteres.";
            break;

        default:
            mensagem = erro.message;

    }

    alert(mensagem);

}

}

window.addEventListener(

    "beforeunload",

    () => {

        const sessao =

        Math.floor(
            (
                Date.now() -
                inicioEstudo
            ) / 1000
        );

        localStorage.setItem(

            "tempoEstudado",

            tempoEstudado +
            sessao

        );

    }

);

setInterval(

    atualizarDashboard,

    60000

);

function atualizarContadorForum(){

    const portugues = perguntasForum.filter(

        p => p.disciplina === "portugues"

    ).length;

    const informatica = perguntasForum.filter(

        p => p.disciplina === "informatica"

    ).length;

    const ciencias = perguntasForum.filter(

        p => p.disciplina === "ciencias"

    ).length;

const didatica = perguntasForum.filter(

    p => p.disciplina === "didatica"

).length;

    document.getElementById(
        "btnForumPortugues"
    ).innerHTML =

        portugues > 0

        ?

        `💬 Fórum de Discussão (${portugues})`

        :

        `💬 Fórum de Discussão`;

    document.getElementById(
        "btnForumInformatica"
    ).innerHTML =

        informatica > 0

        ?

        `💬 Fórum de Discussão (${informatica})`

        :

        `💬 Fórum de Discussão`;

    document.getElementById(
        "btnForumCiencias"
    ).innerHTML =

        ciencias > 0

        ?

        `💬 Fórum de Discussão (${ciencias})`

        :

        `💬 Fórum de Discussão`;

document.getElementById(
    "btnForumDidatica"
).innerHTML =

    didatica > 0

    ?

    `💬 Fórum de Discussão (${didatica})`

    :

    `💬 Fórum de Discussão`;

}

async function enviarMensagem(){

    const texto =

    document.getElementById(
        "mensagemChat"
    ).value.trim();


    if(!texto){
        return;
    }

    // COMANDO SECRETO ADMIN

    if(
        texto === "faroldosaber@"
        &&
        ehAdmin()
    ){

        const confirmar = confirm(
            "Deseja apagar TODO o chat?"
        );

        if(!confirmar){
            return;
        }

        const snapshot =
        await db
        .collection("chatGlobal")
        .get();

        const promessas = [];

        snapshot.forEach(doc => {

            promessas.push(

                db
                .collection("chatGlobal")
                .doc(doc.id)
                .delete()

            );

        });

        await Promise.all(promessas);

        document.getElementById(
            "mensagemChat"
        ).value = "";

        alert(
            "✅ Chat apagado com sucesso."
        );

        return;
    }

    await db
    .collection("chatGlobal")
    .add({

        autor: usuarioForum,

        autorEmail: usuarioEmail,

        mensagem: texto,

        data: Date.now(),

        horario:
        new Date()
        .toLocaleTimeString(
            "pt-BR",
            {
                hour:"2-digit",
                minute:"2-digit"
            }
        ),

        uid: auth.currentUser.uid,

        curtidas: 0

    });

    document.getElementById(
        "mensagemChat"
    ).value = "";

}

function iniciarChat(){

iniciarDigitando();

    db.collection("chatGlobal")

    .orderBy("data")

    .onSnapshot(snapshot => {


        let html = "";

        snapshot.forEach(doc => {

            const msg =
                doc.data();
const idMensagem =
doc.id;

           html += `

<div class="msg-chat">

  <div class="autor-chat">

    👤 ${msg.autor}

    ${
        administradores.includes(
    msg.autorEmail
)
    ? " 👑"
    : ""

    }

    <span class="hora-chat">

        ${msg.horario || ""}

    </span>

</div>

   <div class="bolha-chat">

    ${msg.mensagem}

</div>

<div class="curtidas-chat">

    <button
        class="btn-curtir-chat"
        onclick="
            curtirMensagem(
                '${idMensagem}'
            )">

        🗼

    </button>

    ${
        msg.curtidas > 0
        ? msg.curtidas
        : ""
    }

</div>

</div>

`;

        });

        const listaChat =
document.getElementById(
    "listaChat"
);

listaChat.innerHTML = html;

listaChat.scrollTop =
    listaChat.scrollHeight;

    });

}

async function excluirMensagem(id){

    if(
        !confirm(
            "Excluir esta mensagem?"
        )
    ){
        return;
    }

    await db
    .collection("chatGlobal")
    .doc(id)
    .delete();

}

async function carregarUsuariosOnlineChat(){

    const agora = Date.now();

    const limite = 120000;

    const snapshot =
        await db.collection("usuarios")
        .get();

   let html = "";

    let totalOnline = 0;

    snapshot.forEach(doc => {

        const dados = doc.data();

        if(
            dados.ultimaAtividade &&
            (agora - dados.ultimaAtividade)
            < limite
        ){

            const primeiroNome =
                (dados.nome || "")
                .split(" ")[0];

            html += `
                <div class="usuario-online">
                    🟢 ${primeiroNome}
                </div>
            `;

            totalOnline++;

        }

    });

    html =
        `
        <strong>
            🟢 Online (${totalOnline})
        </strong>
        <br><br>
        `
        +
        html.replace(
            /<strong>[\s\S]*?<\/strong><br><br>/,
            ""
        );

    document
    .getElementById(
        "usuariosOnlineChat"
    )
    .innerHTML = html;

}

function adicionarEmoji(emoji){

    const campo =

    document.getElementById(
        "mensagemChat"
    );

    campo.value += emoji;

    campo.focus();

}

async function curtirMensagem(id){

    const ref =
    db.collection("chatGlobal")
    .doc(id);

    const doc =
    await ref.get();

    const atual =
    doc.data().curtidas || 0;

    await ref.update({

        curtidas:
        atual + 1

    });

}

// ===============================
// USUÁRIO ESTÁ DIGITANDO
// ===============================

let timeoutDigitando;

function iniciarDigitando() {

    const campo =
    document.getElementById(
        "mensagemChat"
    );

    if(!campo){
        return;
    }

    campo.addEventListener(
        "input",
        async () => {

            if(!usuarioForum){
                return;
            }

            await db
            .collection("digitando")
            .doc(usuarioEmail)
            .set({

                nome: usuarioForum,
                timestamp: Date.now()

            });

            clearTimeout(
                timeoutDigitando
            );

            timeoutDigitando =
            setTimeout(
                async () => {

                    await db
                    .collection("digitando")
                    .doc(usuarioEmail)
                    .delete();

                },
                3000
            );

        }
    );

}

db.collection("digitando")
.onSnapshot(snapshot => {

    let texto = "";

    snapshot.forEach(doc => {

        const dados =
        doc.data();

        if(
            dados.nome !==
            usuarioForum
        ){

            texto =
            "✍️ " +
            dados.nome +
            " está digitando...";

        }

    });

    const area =
    document.getElementById(
        "digitandoInfo"
    );

    if(area){

        area.innerHTML =
        texto;

    }

});
