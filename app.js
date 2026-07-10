// ==========================
// FAROL DO SABER v0.2
// ==========================

// TROCA DE TELAS
function mostrarTela(id) {

if(typeof atualizarStatusAssuntos === "function"){
    atualizarStatusAssuntos();
}

if(typeof atualizarAtividade === "function"){
    atualizarAtividade();
}

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    const telaDestino = document.getElementById(id);

    if(!telaDestino){
        console.warn("Tela não encontrada:", id);
        return;
    }

    telaDestino.classList.add("ativa");

    if(id !== "jogosFarol" && typeof pararTimerRelampago === "function"){
        pararTimerRelampago();
    }

    if(id !== "jogosFarol" && typeof pararPreviewMemoria === "function"){
        pararPreviewMemoria();
    }

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

        const areaQuestao =
            document.getElementById("areaQuestao");

        if(areaQuestao){
            areaQuestao.innerHTML = "";
        }

        if(typeof renderizarTelaPreparacoes === "function"){
            setTimeout(renderizarTelaPreparacoes, 0);
        }

    }

    if(id === "telaMapaMental"){
        atualizarBotaoContinuarQuestoes();
    }

    if(id === "resolverQuestao"){
        setTimeout(restaurarQuestaoAoAbrirTela, 0);
    }

    if(id === "perfilAluno" && typeof atualizarPerfilAluno === "function"){
        atualizarPerfilAluno();
    }

    if(id === "jogosFarol" && typeof abrirTelaJogosFarol === "function"){
        abrirTelaJogosFarol();
    }

    if(id === "inicio" && typeof atualizarContinuarUltimoEstudo === "function"){
        atualizarContinuarUltimoEstudo();
    }


    if(id === "provasAnteriores" && typeof prepararTelaProvasAnterioresFarol === "function"){
        prepararTelaProvasAnterioresFarol();
    }

}



function nomeDisciplinaForum(chave){

    const nomes = {
        portugues: "Língua Portuguesa",
        informatica: "Informática",
        ciencias: "Professor de Ciências",
        didatica: "Didática e Legislação",
        historia: "História",
        etica: "Ética no Serviço Público",
        apoioEscolar: "Apoio Escolar",
        administrador: "Administrador"
    };

    return nomes[chave] || "Disciplina";

}

function atualizarTituloForum(){

    const area =
        document.getElementById("tituloForumDisciplina");

    if(!area){
        return;
    }

    area.innerHTML =
        "Discussão da disciplina: <strong>" +
        nomeDisciplinaForum(disciplinaForumAtual) +
        "</strong>";

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

    setTimeout(() => {
        atualizarTituloForum();
        renderizarForum();
        atualizarContadorForum();
    }, 0);

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

    avatarAtual:
        lojaFarol.avatarAtual || "👤",

    nomeAvatarAtual:
        lojaFarol.nomeAvatarAtual || "Estudante",

    pergunta:
        pergunta.trim(),

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
            autorEmail: usuarioEmail,
            avatarAtual: lojaFarol.avatarAtual || "👤",
            nomeAvatarAtual: lojaFarol.nomeAvatarAtual || "Estudante",
            data: new Date().toLocaleString(),
            texto: resposta.trim(),
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

    const perguntasDaDisciplina =
        [...perguntasForum]
        .filter(item =>
            item.disciplina === disciplinaForumAtual
        )
        .sort((a,b) => a.id - b.id);

    if(perguntasDaDisciplina.length === 0){

        listaForum.innerHTML =
        `
            <div class="forum-vazio">
                <strong>💬 Nenhuma pergunta cadastrada nesta disciplina.</strong>
                <p>Seja o primeiro aluno a abrir uma discussão.</p>
            </div>
        `;

        atualizarContadorForum();
        return;

    }

    listaForum.innerHTML = "";

    perguntasDaDisciplina.forEach(item => {

        const avatarPergunta =
            item.avatarAtual || "👤";

        const nomePerguntaRaw =
            item.autor || "Aluno";

        const nomePergunta =
            escaparHTML(nomePerguntaRaw);

        const dataPergunta =
            escaparHTML(item.data || "");

        const textoPergunta =
            escaparHTML(item.pergunta || "");

        listaForum.innerHTML += `

        <div class="card-forum card-forum-avatar">

            <div class="cabecalho-forum-avatar">

                <div class="avatar-forum-msg">
                    ${montarAvatarHTML(
                        avatarPergunta,
                        item.nomeAvatarAtual || "Avatar",
                        "avatar-forum-img"
                    )}
                </div>

                <div class="dados-forum-msg">

                    <div class="autor-forum">
                        ${nomePergunta}
                    </div>

                    <div class="data-forum">
                        📅 ${dataPergunta}
                    </div>

                </div>

            </div>

            <div class="pergunta-forum-texto">
                ❓ ${textoPergunta}
            </div>

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

<div class="respostas respostas-com-avatar">

${
    (item.respostas || [])

    .map((resposta, indice) => {

        const avatarResposta =
            resposta.avatarAtual || "👤";

        const nomeRespostaRaw =
            resposta.autor || "Aluno";

        const nomeResposta =
            escaparHTML(nomeRespostaRaw);

        const dataResposta =
            escaparHTML(resposta.data || "");

        const textoResposta =
            escaparHTML(resposta.texto || "");

        return `

    <div class="resposta-forum resposta-forum-avatar">

        <div class="cabecalho-resposta-avatar">

            <div class="avatar-forum-msg avatar-resposta-msg">
                ${montarAvatarHTML(
                    avatarResposta,
                    resposta.nomeAvatarAtual || "Avatar",
                    "avatar-forum-img avatar-resposta-img"
                )}
            </div>

            <div class="dados-forum-msg">

                <div class="autor-forum">
                    ${nomeResposta}
                </div>

                <div class="data-forum">
                    📅 ${dataResposta}
                </div>

            </div>

        </div>

        <div class="texto-resposta-forum">
            💬 ${textoResposta}
        </div>

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

    `;

    })
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

        mostrarToast(
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

    quilombola,

    indigena,

    didatica,

    planejamento,

    avaliacao,

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

    eticaConceitos,
    principiosAdministracao,
    deveresServidor,
    condutaEtica,
    lai,
    lgpd,

    hardware,

    software,

    arquivos,

    office,

    internet,

    redes,

    seguranca,

    fundamentosCiencias,

    bnccCiencias,

    alfabetizacaoCientifica,

    citologia,

    microbiologia,

    botanica,

    zoologia,

    evolucao,

    genetica,

    hereditariedade,

    biotecnologia,

    ecologia,

    terraEUniverso,

    anatomiaFisiologia,

    materiaQuimica,

    fundamentosFisica,

    fundamentosEnsinoHistoria,

    cienciaHistoricaOficioHistoriador,

    povosPreColombianos,

    formacaoSocialCulturalBrasileira,

    estadosModernosApropriacaoAmerica,

    mercantilismoColonizacaoAmerica,

    brasilColonialSociedadeEconomiaResistencias,

    administracaoAmericaLusitanaColonial,

    aspectosEconomicosFormasTrabalhoBrasilColonialImperial,

    sociedadeColonialImperialBrasileira,

    influenciasIdeologiasLiberaisBrasilSeculoXVIII,

    movimentosAnticoloniaisBrasil,

    cortePortuguesaFormacaoEstadoNacionalBrasileiro,

    estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro,

    revoltasMovimentosBrasilImperial,

    expansaoFronteirasAmericaPortuguesa,

    
    
    apoioOrganizacaoEducacao,
    apoioLDB,
    apoioECA,
    apoioLBI,
    apoioTEA,
    apoioPoliticaEducacaoEspecial,
    apoioBNCCDiretrizes,
    apoioEducacaoInclusiva,
    apoioPapelProfissional,
    apoioTrabalhoColaborativo,

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
// SEGURANÇA: TEXTO SEGURO NO CHAT/FÓRUM
// ==========================

function escaparHTML(texto){

    return String(texto || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}

function nomeEhGenericoFarol(nome){

    const normalizado = String(nome || "")
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    return (
        !normalizado ||
        normalizado === "aluno" ||
        normalizado === "visitante" ||
        normalizado === "estudante" ||
        normalizado === "usuario" ||
        normalizado === "undefined" ||
        normalizado === "null"
    );

}

function primeiroNomeSemHTML(nome){

    return String(nome || "")
        .trim()
        .split(/\s+/)[0] || "";

}

function primeiroNomeSeguro(nome){

    const primeiroNome = primeiroNomeSemHTML(nome);

    return escaparHTML(
        nomeEhGenericoFarol(primeiroNome)
        ? "Aluno"
        : primeiroNome
    );

}

function obterNomeCompletoValidoFarol(dadosFirebase){

    const dados = dadosFirebase || {};

    const candidatos = [
        usuarioNomeCompleto,
        localStorage.getItem("usuarioNomeCompleto"),
        dados.nomeCompleto,
        dados.nome,
        auth && auth.currentUser ? auth.currentUser.displayName : ""
    ];

    for(const candidato of candidatos){

        const nome = String(candidato || "").trim();

        if(!nomeEhGenericoFarol(nome)){
            return nome;
        }

    }

    const emailAtual = (
        usuarioEmail ||
        (auth && auth.currentUser ? auth.currentUser.email : "") ||
        ""
    ).toLowerCase();

    if(
        emailAtual === "jp@gmail.com" ||
        emailAtual === "farolsosaber@gmail.com"
    ){
        return "João Paulo Ferreira da Silva";
    }

    return "";

}

function obterNomeRankingSeguroFarol(dadosFirebase){

    const nomeCompleto = obterNomeCompletoValidoFarol(dadosFirebase);
    const primeiroDoCompleto = primeiroNomeSemHTML(nomeCompleto);

    if(!nomeEhGenericoFarol(primeiroDoCompleto)){
        return primeiroDoCompleto;
    }

    const candidatos = [
        usuarioForum,
        localStorage.getItem("usuarioForum"),
        dadosFirebase && dadosFirebase.nome
    ];

    for(const candidato of candidatos){

        const primeiro = primeiroNomeSemHTML(candidato);

        if(!nomeEhGenericoFarol(primeiro)){
            return primeiro;
        }

    }

    const emailAtual = (
        usuarioEmail ||
        (auth && auth.currentUser ? auth.currentUser.email : "") ||
        ""
    );

    const prefixoEmail = emailAtual.split("@")[0];

    if(!nomeEhGenericoFarol(prefixoEmail)){
        return prefixoEmail;
    }

    return "Aluno";

}

function atualizarNomeUsuarioLocalFarol(nomeRanking, nomeCompleto){

    const nomeRankingFinal = nomeEhGenericoFarol(nomeRanking)
        ? "Aluno"
        : nomeRanking;

    usuarioForum = nomeRankingFinal;
    usuarioNomeCompleto = nomeCompleto || nomeRankingFinal;

    localStorage.setItem("usuarioForum", usuarioForum);
    localStorage.setItem("usuarioNomeCompleto", usuarioNomeCompleto);

    const campoNome = document.getElementById("nomeUsuario");

    if(campoNome){
        campoNome.textContent = "👋 Olá, " + usuarioForum + "!";
    }

}

async function corrigirMeuNomeJoao(){

    if(!auth.currentUser){
        mostrarToast("Faça login antes de corrigir o nome.");
        return;
    }

    usuarioEmail = auth.currentUser.email || usuarioEmail || "";

    atualizarNomeUsuarioLocalFarol(
        "João",
        "João Paulo Ferreira da Silva"
    );

    await db.collection("usuarios")
        .doc(auth.currentUser.uid)
        .set({
            nome: "João",
            nomeCompleto: "João Paulo Ferreira da Silva",
            email: usuarioEmail,
            atualizadoEm: Date.now()
        }, { merge: true });

    await salvarRankingFirebase();
    await carregarRankingPontos();

    mostrarToast("Nome corrigido para João no ranking.");

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

let usuarioNomeCompleto =
localStorage.getItem(
    "usuarioNomeCompleto"
) || "";

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

// Medalhas por assunto: impede acumular medalha infinita ao refazer o mesmo tópico.
// O ranking soma apenas a melhor medalha conquistada em cada assunto.
let medalhasPorAssunto = {};

let cadernoErros = [];

let perguntasForum = [];

let pontosLuz = 0;
let saldoPontosLuz = 0;
let pontosLuzGerados = {};
let estatisticasDiarias = {};
let lojaFarol = {
    comprados: {},
    medalhaEstudanteAtivo: false,
    tituloAtual: "",
    avatarAtual: "👤",
    nomeAvatarAtual: "Estudante",
    cardPremium: false,
    certificadoDigital: false,
    codigoCertificado: "",
    dataCertificado: ""
};
let posicaoRankingUsuario = "-";
let tipoSimuladoAtual = "geral";
let dueloAtual = null;
let dueloQuestoes = [];
let dueloIndiceAtual = 0;
let dueloAcertos = 0;
let dueloErros = 0;
let dueloRespostas = [];

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
// MEDALHAS POR ASSUNTO
// ==========================

const valorMedalhaFarol = {
    "": 0,
    sem: 0,
    bronze: 1,
    prata: 2,
    ouro: 3
};

function tipoMedalhaPorPercentual(percentual){
    if(percentual >= 95){ return "ouro"; }
    if(percentual >= 75){ return "prata"; }
    if(percentual >= 60){ return "bronze"; }
    return "sem";
}

function textoMedalhaFarol(tipo){
    if(tipo === "ouro"){ return "🥇 OURO"; }
    if(tipo === "prata"){ return "🥈 PRATA"; }
    if(tipo === "bronze"){ return "🥉 BRONZE"; }
    return "📚 SEM MEDALHA";
}

function recalcularMedalhasFarol(){
    const medalhas = medalhasPorAssunto || {};

    medalhasOuro = 0;
    medalhasPrata = 0;
    medalhasBronze = 0;

    Object.values(medalhas).forEach(item => {
        const tipo = typeof item === "string" ? item : (item && item.tipo) || "sem";

        if(tipo === "ouro"){
            medalhasOuro++;
        }
        else if(tipo === "prata"){
            medalhasPrata++;
        }
        else if(tipo === "bronze"){
            medalhasBronze++;
        }
    });
}

function registrarMedalhaAssuntoFarol(assunto, percentual){
    const chaveAssunto = assunto || disciplinaAtual || "assunto";
    const novaMedalha = tipoMedalhaPorPercentual(percentual);
    const atual = medalhasPorAssunto[chaveAssunto] || { tipo: "sem", percentual: 0 };
    const tipoAtual = typeof atual === "string" ? atual : (atual.tipo || "sem");
    const percentualAtual = typeof atual === "object" ? Number(atual.percentual) || 0 : 0;

    const novaValeMais =
        (valorMedalhaFarol[novaMedalha] || 0) > (valorMedalhaFarol[tipoAtual] || 0);

    const mesmaMedalhaMelhorPercentual =
        novaMedalha === tipoAtual && percentual > percentualAtual;

    if(novaValeMais || mesmaMedalhaMelhorPercentual){
        medalhasPorAssunto[chaveAssunto] = {
            tipo: novaMedalha,
            percentual: percentual,
            data: Date.now()
        };
    }

    recalcularMedalhasFarol();

    return {
        tipo: novaMedalha,
        texto: textoMedalhaFarol(novaMedalha),
        melhorTipo: (medalhasPorAssunto[chaveAssunto] || {}).tipo || novaMedalha
    };
}

function htmlMedalhasRankingFarol(dados){
    const ouro = Number(dados.medalhasOuro) || 0;
    const prata = Number(dados.medalhasPrata) || 0;
    const bronze = Number(dados.medalhasBronze) || 0;

    const medalhas = [];

    if(ouro > 0){
        medalhas.push(`<span class="selo-medalha-ranking">🥇×${ouro}</span>`);
    }

    if(prata > 0){
        medalhas.push(`<span class="selo-medalha-ranking">🥈×${prata}</span>`);
    }

    if(bronze > 0){
        medalhas.push(`<span class="selo-medalha-ranking">🥉×${bronze}</span>`);
    }

    if(medalhas.length === 0){
        return "";
    }

    return `
        <div class="ranking-medalhas" title="Medalhas conquistadas">
            <span class="icone-medalhas-ranking">🏅</span>
            ${medalhas.join("")}
        </div>
    `;
}

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
    "farol_medalhas_por_assunto",
    JSON.stringify(medalhasPorAssunto || {})
);

    localStorage.setItem(
        "farol_pontos_luz",
        pontosLuz
    );

    localStorage.setItem(
        "farol_saldo_pontos_luz",
        saldoPontosLuz
    );

    localStorage.setItem(
        "farol_loja",
        JSON.stringify(lojaFarol)
    );

    localStorage.setItem(
        "farol_pontos_luz_gerados",
        JSON.stringify(pontosLuzGerados)
    );

    localStorage.setItem(
        "farol_estatisticas_diarias",
        JSON.stringify(estatisticasDiarias)
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

medalhasPorAssunto =
    JSON.parse(
        localStorage.getItem("farol_medalhas_por_assunto")
    ) || {};

if(Object.keys(medalhasPorAssunto).length > 0){
    recalcularMedalhasFarol();
}

    cadernoErros =
        JSON.parse(
            localStorage.getItem("farol_caderno")
        ) || [];

    progressoAssuntos =
        JSON.parse(
            localStorage.getItem("farol_progresso")
        ) || {};

    pontosLuz =
        Number(
            localStorage.getItem("farol_pontos_luz")
        ) || 0;

    const saldoSalvo = localStorage.getItem("farol_saldo_pontos_luz");
    saldoPontosLuz =
        saldoSalvo === null
        ? pontosLuz
        : (Number(saldoSalvo) || 0);

    lojaFarol = {
        ...lojaFarol,
        ...(JSON.parse(localStorage.getItem("farol_loja")) || {})
    };

    lojaFarol.comprados = lojaFarol.comprados || {};
    lojaFarol.avatarAtual = lojaFarol.avatarAtual || "👤";
    lojaFarol.nomeAvatarAtual = lojaFarol.nomeAvatarAtual || "Estudante";

    pontosLuzGerados =
        JSON.parse(
            localStorage.getItem("farol_pontos_luz_gerados")
        ) || {};

    estatisticasDiarias =
        JSON.parse(
            localStorage.getItem("farol_estatisticas_diarias")
        ) || {};

    cadernoErros = cadernoErros.map((item, indice) => ({
        idErro: item.idErro || ("erro_antigo_" + indice + "_" + Date.now()),
        acertosRevisao: item.acertosRevisao || 0,
        pontosRevisaoGanhos: item.pontosRevisaoGanhos || false,
        status: item.status || "pendente",
        ...item
    }));

}

// ==========================
// CARREGAR DISCIPLINA
// ==========================

// ==========================
// ROTAS DE ESTUDO
// ==========================

const disciplinasTrilhaFarol = {
    portugues: {
        nome: "Português",
        icone: "📖",
        descricao: "Gramática, interpretação e produção textual."
    },
    informatica: {
        nome: "Informática",
        icone: "💻",
        descricao: "Conteúdos de informática cobrados no concurso."
    },
    etica: {
        nome: "Ética",
        icone: "⚖️",
        descricao: "Conteúdo exigido para cargo de nível médio."
    },
    apoioEscolar: {
        nome: "Apoio Escolar",
        icone: "👨‍🏫",
        descricao: "Conhecimento específico do cargo."
    },
    didatica: {
        nome: "Didática e Legislação",
        icone: "📚",
        descricao: "Formação pedagógica para professor."
    },
    historia: {
        nome: "História",
        icone: "📜",
        descricao: "Conhecimento específico de Professor de História."
    },
    ciencias: {
        nome: "Professor de Ciências",
        icone: "🔬",
        descricao: "Conhecimento específico de Professor de Ciências."
    }
};

const trilhasPreparacaoFarol = {
    apoioEscolar: {
        nome: "Apoio Escolar",
        nivel: "Nível Médio",
        icone: "👨‍🏫",
        cor: "verde",
        descricao: "Português, Informática, Ética e o conteúdo específico de Apoio Escolar.",
        disciplinas: [
            "portugues",
            "informatica",
            "etica",
            "apoioEscolar"
        ]
    },
    professorHistoria: {
        nome: "Professor de História",
        nivel: "Nível Superior",
        icone: "📜",
        cor: "azul",
        descricao: "Português, Informática, Didática e o conteúdo específico de História.",
        disciplinas: [
            "portugues",
            "informatica",
            "didatica",
            "historia"
        ]
    },
    professorCiencias: {
        nome: "Professor de Ciências",
        nivel: "Nível Superior",
        icone: "🔬",
        cor: "azul",
        descricao: "Português, Informática, Didática e o conteúdo específico de Ciências.",
        disciplinas: [
            "portugues",
            "informatica",
            "didatica",
            "ciencias"
        ]
    },
    professorMatematica: {
        nome: "Professor de Matemática",
        nivel: "Nível Superior",
        icone: "📐",
        cor: "bloqueado",
        descricao: "Rota em desenvolvimento.",
        bloqueado: true,
        disciplinas: []
    },
    professorEducacaoFisica: {
        nome: "Professor de Educação Física",
        nivel: "Nível Superior",
        icone: "🏃",
        cor: "bloqueado",
        descricao: "Rota em desenvolvimento.",
        bloqueado: true,
        disciplinas: []
    },
    administrador: {
        nome: "Administrador",
        nivel: "Nível Superior",
        icone: "👨‍💼",
        cor: "bloqueado",
        descricao: "Rota em desenvolvimento.",
        bloqueado: true,
        disciplinas: []
    }
};

function obterTrilhaAtualFarol(){

    const chave = localStorage.getItem("farol_trilha_atual") || "";

    if(
        chave &&
        trilhasPreparacaoFarol[chave] &&
        !trilhasPreparacaoFarol[chave].bloqueado
    ){
        return chave;
    }

    return "";

}

function montarCardPreparacaoFarol(chave, trilha){

    const classeBloqueado = trilha.bloqueado ? " bloqueada" : "";
    const textoBotao = trilha.bloqueado ? "🔒 Em breve" : "🧭 Iniciar rota";
    const nivel = escaparHTML(trilha.nivel || "");
    const nome = escaparHTML(trilha.nome || "");
    const descricao = escaparHTML(trilha.descricao || "");

    return `
        <button
            class="card-preparacao card-preparacao-${trilha.cor || "verde"}${classeBloqueado}"
            onclick="abrirTrilhaEstudo('${chave}')">

            <div class="icone-preparacao">
                ${trilha.icone || "🎯"}
            </div>

            <div class="conteudo-preparacao">
                <span class="nivel-preparacao">
                    ${nivel}
                </span>

                <strong>
                    ${nome}
                </strong>

                <p>
                    ${descricao}
                </p>

                <span class="acao-preparacao">
                    ${textoBotao}
                </span>
            </div>

        </button>
    `;

}

function renderizarTelaPreparacoes(){

    const painelPreparacoes =
        document.getElementById("painelPreparacoes");

    const painelTrilha =
        document.getElementById("painelTrilhaEstudo");

    if(!painelPreparacoes || !painelTrilha){
        return;
    }

    const trilhaAtual = obterTrilhaAtualFarol();

    if(trilhaAtual){
        renderizarTrilhaEstudo(trilhaAtual);
        return;
    }

    painelTrilha.style.display = "none";
    painelTrilha.innerHTML = "";
    painelPreparacoes.style.display = "block";

    painelPreparacoes.innerHTML = `
        <p class="texto-preparacao">
            Escolha o cargo para o Farol traçar sua Rota de Estudos com as etapas certas.
        </p>

        <h3 class="titulo-grupo-preparacao">
            🟢 Nível Médio
        </h3>

        <div class="grid-preparacoes">
            ${montarCardPreparacaoFarol("apoioEscolar", trilhasPreparacaoFarol.apoioEscolar)}
        </div>

        <h3 class="titulo-grupo-preparacao">
            🔵 Nível Superior — Professor
        </h3>

        <div class="grid-preparacoes">
            ${montarCardPreparacaoFarol("professorHistoria", trilhasPreparacaoFarol.professorHistoria)}
            ${montarCardPreparacaoFarol("professorCiencias", trilhasPreparacaoFarol.professorCiencias)}
        </div>

        <h3 class="titulo-grupo-preparacao">
            🔒 Em breve
        </h3>

        <div class="grid-preparacoes">
            ${montarCardPreparacaoFarol("professorMatematica", trilhasPreparacaoFarol.professorMatematica)}
            ${montarCardPreparacaoFarol("professorEducacaoFisica", trilhasPreparacaoFarol.professorEducacaoFisica)}
            ${montarCardPreparacaoFarol("administrador", trilhasPreparacaoFarol.administrador)}
        </div>
    `;

}

function abrirTrilhaEstudo(chave){

    const trilha = trilhasPreparacaoFarol[chave];

    if(!trilha){
        mostrarToast("Rota não encontrada.");
        return;
    }

    if(trilha.bloqueado){
        mostrarToast("Esta rota ainda está em desenvolvimento.");
        return;
    }

    localStorage.setItem("farol_trilha_atual", chave);

    renderizarTrilhaEstudo(chave);

}

function alterarPreparacaoFarol(){

    localStorage.removeItem("farol_trilha_atual");

    renderizarTelaPreparacoes();

}

function renderizarTrilhaEstudo(chave){

    const trilha = trilhasPreparacaoFarol[chave];

    const painelPreparacoes =
        document.getElementById("painelPreparacoes");

    const painelTrilha =
        document.getElementById("painelTrilhaEstudo");

    if(!trilha || !painelPreparacoes || !painelTrilha){
        return;
    }

    painelPreparacoes.style.display = "none";
    painelTrilha.style.display = "block";

    const cardsDisciplinas = trilha.disciplinas.map((disciplina, indice) => {

        const dados = disciplinasTrilhaFarol[disciplina] || {
            nome: disciplina,
            icone: "📚",
            descricao: "Etapa da sua Rota de Estudos."
        };

        return `
            <button
                class="card-disciplina-trilha"
                onclick="abrirDisciplina('${disciplina}')">

                <span class="numero-trilha">
                    ${indice + 1}
                </span>

                <span class="icone-disciplina-trilha">
                    ${dados.icone || "📚"}
                </span>

                <span class="dados-disciplina-trilha">
                    <strong>
                        ${escaparHTML(dados.nome)}
                    </strong>

                    <small>
                        ${escaparHTML(dados.descricao)}
                    </small>
                </span>

            </button>
        `;

    }).join("");

    painelTrilha.innerHTML = `
        <div class="cabecalho-trilha">
            <div>
                <span class="selo-nivel-trilha">
                    ${escaparHTML(trilha.nivel)}
                </span>

                <h3>
                    🧭 Minha Rota de Aprovação
                </h3>

                <p>
                    <strong>${trilha.icone || "🎯"} ${escaparHTML(trilha.nome)}</strong>
                    <br>
                    Complete as etapas abaixo para avançar rumo à aprovação.
                </p>
            </div>

            <button
                class="btn-alterar-preparacao"
                onclick="alterarPreparacaoFarol()">
                ⚓ Alterar Rota
            </button>
        </div>

        <div class="grid-disciplinas-trilha">
            ${cardsDisciplinas}
        </div>
    `;

}

function mostrarTodasDisciplinasFarol(){

    localStorage.removeItem("farol_trilha_atual");

    const painelPreparacoes =
        document.getElementById("painelPreparacoes");

    const painelTrilha =
        document.getElementById("painelTrilhaEstudo");

    if(!painelPreparacoes || !painelTrilha){
        return;
    }

    painelPreparacoes.style.display = "none";
    painelTrilha.style.display = "block";

    const todas = [
        "portugues",
        "informatica",
        "etica",
        "apoioEscolar",
        "didatica",
        "ciencias",
        "historia"
    ];

    const cards = todas.map((disciplina, indice) => {

        const dados = disciplinasTrilhaFarol[disciplina];

        return `
            <button
                class="card-disciplina-trilha"
                onclick="abrirDisciplina('${disciplina}')">

                <span class="numero-trilha">
                    ${indice + 1}
                </span>

                <span class="icone-disciplina-trilha">
                    ${dados.icone}
                </span>

                <span class="dados-disciplina-trilha">
                    <strong>${escaparHTML(dados.nome)}</strong>
                    <small>${escaparHTML(dados.descricao)}</small>
                </span>

            </button>
        `;

    }).join("");

    painelTrilha.innerHTML = `
        <div class="cabecalho-trilha">
            <div>
                <span class="selo-nivel-trilha">
                    Visão geral
                </span>
                <h3>🗺️ Todas as disciplinas liberadas</h3>
                <p>Use esta opção apenas quando quiser navegar por todo o conteúdo da plataforma.</p>
            </div>
            <button class="btn-alterar-preparacao" onclick="alterarPreparacaoFarol()">
                ⚓ Voltar às Rotas
            </button>
        </div>
        <div class="grid-disciplinas-trilha">
            ${cards}
        </div>
    `;

}

function abrirDisciplina(nome) {

if(nome === "administrador"){

    mostrarToast(
        "Disciplina em desenvolvimento."
    );

    return;

}

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

if (nome === "apoioEscolar") {

    mostrarTela("apoioEscolar");

    return;

}

if (nome === "etica") {

    mostrarTela("etica");

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

    mostrarToast(
        "Disciplina em desenvolvimento."
    );

}

function abrirTeoria(teoria, titulo){

if(assuntoAtual){

    localStorage.setItem(
        "farol_ultimoAssunto",
        assuntoAtual
    );

    if(typeof atualizarContinuarUltimoEstudo === "function"){
        atualizarContinuarUltimoEstudo();
    }

}

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

const mapasMentaisPorAssunto = {
    "apoioOrganizacaoEducacao": {
        "titulo": "🏫 Organização da Educação Básica",
        "imagem": "imagens/mapas/ApoioOrganizacaoEducacao.png"
    },
    "apoioLDB": {
        "titulo": "📘 LDB e Bases da Educação Nacional",
        "imagem": "imagens/mapas/ApoioLDB.png"
    },
    "apoioECA": {
        "titulo": "🧒 ECA e Proteção Integral",
        "imagem": "imagens/mapas/ApoioECA.png"
    },
    "apoioLBI": {
        "titulo": "♿ LBI e Inclusão da Pessoa com Deficiência",
        "imagem": "imagens/mapas/ApoioLBI.png"
    },
    "apoioTEA": {
        "titulo": "🧩 Política Nacional do TEA",
        "imagem": "imagens/mapas/ApoioTEA.png"
    },
    "apoioPoliticaEducacaoEspecial": {
        "titulo": "🌐 Política Nacional de Educação Especial Inclusiva",
        "imagem": "imagens/mapas/ApoioPoliticaEducacaoEspecial.png"
    },
    "apoioBNCCDiretrizes": {
        "titulo": "📚 Diretrizes Curriculares e BNCC",
        "imagem": "imagens/mapas/ApoioBNCCDiretrizes.png"
    },
    "apoioEducacaoInclusiva": {
        "titulo": "🤝 Educação Especial na Perspectiva Inclusiva",
        "imagem": "imagens/mapas/ApoioEducacaoInclusiva.png"
    },
    "apoioPapelProfissional": {
        "titulo": "👨‍🏫 Papel do Profissional de Apoio Escolar",
        "imagem": "imagens/mapas/ApoioPapelProfissional.png"
    },
    "apoioTrabalhoColaborativo": {
        "titulo": "🛡️ Trabalho Colaborativo, Ética e Segurança",
        "imagem": "imagens/mapas/ApoioTrabalhoColaborativo.png"
    },
    "bncc": {
        "titulo": "📘 BNCC",
        "imagem": "imagens/mapas/bncc.jpg"
    },
    "ldb": {
        "titulo": "📘 LDB",
        "imagem": "imagens/mapas/ldb.jpg"
    },
    "eca": {
        "titulo": "📘 ECA",
        "imagem": "imagens/mapas/eca.jpg"
    },
    "pne": {
        "titulo": "📘 PNE",
        "imagem": "imagens/mapas/pne.jpg"
    },
    "fundeb": {
        "titulo": "📘 FUNDEB",
        "imagem": "imagens/mapas/fundeb.jpg"
    },
    "lbi": {
        "titulo": "📘 LBI",
        "imagem": "imagens/mapas/lbi.jpg"
    },
    "tea": {
        "titulo": "📘 TEA",
        "imagem": "imagens/mapas/tea.jpg"
    },
    "inclusiva": {
        "titulo": "📘 EDUCAÇÃO INCLUSIVA",
        "imagem": "imagens/mapas/inclusiva.jpg"
    },
    "etnicoRacial": {
        "titulo": "📘 Relações Étnico-Raciais",
        "imagem": "imagens/mapas/etnicoRacial.jpg"
    },
    "educacaoCampo": {
        "titulo": "📘 Educação do Campo",
        "imagem": "imagens/mapas/campo.jpg"
    },
    "quilombola": {
        "titulo": "🏘 Quilombola",
        "imagem": "imagens/mapas/quilombola.png"
    },
    "indigena": {
        "titulo": "🪶 Educação Escolar Indígena",
        "imagem": "imagens/mapas/indigena.png"
    },
    "didatica": {
        "titulo": "📚 Didática",
        "imagem": "imagens/mapas/Didatica.png"
    },
    "planejamento": {
        "titulo": "📋 Planejamento Educacional",
        "imagem": "imagens/mapas/Planejamento.png"
    },
    "avaliacao": {
        "titulo": "📊 Avaliação da Aprendizagem",
        "imagem": "imagens/mapas/Avaliacao.png"
    },
    "gestao": {
        "titulo": "📘 Gestão Democrática",
        "imagem": "imagens/mapas/gestao.jpg"
    },
    "interpretacao": {
        "titulo": "📖 Interpretação de Textos",
        "imagem": "imagens/mapas/texto.png"
    },
    "generos": {
        "titulo": "📄 Tipologia e Gêneros Textuais",
        "imagem": "imagens/mapas/generos.png"
    },
    "funcoes": {
        "titulo": "📡 Funções da Linguagem",
        "imagem": "imagens/mapas/funcoes.png"
    },
    "coesao": {
        "titulo": "🔗 Coesão e Coerência",
        "imagem": "imagens/mapas/coesao.png"
    },
    "semantica": {
        "titulo": "🧠 Semântica",
        "imagem": "imagens/mapas/semantica.png"
    },
    "figuras": {
        "titulo": "🎭 Figuras de Linguagem",
        "imagem": "imagens/mapas/figuras.png"
    },
    "variacao": {
        "titulo": "🌎 Variação Linguística",
        "imagem": "imagens/mapas/variacao.png"
    },
    "classesPalavras": {
        "titulo": "📚 Classes de Palavras",
        "imagem": "imagens/mapas/classesPalavras.png"
    },
    "formacaoPalavras": {
        "titulo": "🏗 Formação de Palavras",
        "imagem": "imagens/mapas/formacaoPalavras.png"
    },
    "sintaxe": {
        "titulo": "📝 Sintaxe",
        "imagem": "imagens/mapas/sintaxe.png"
    },
    "periodoComposto": {
        "titulo": "🔄 Período Simples e Composto",
        "imagem": "imagens/mapas/periodoComposto.png"
    },
    "concordancia": {
        "titulo": "📌 Concordância",
        "imagem": "imagens/mapas/concordancia.png"
    },
    "regencia": {
        "titulo": "🎯 Regência",
        "imagem": "imagens/mapas/regencia.png"
    },
    "crase": {
        "titulo": "✍️ Crase",
        "imagem": "imagens/mapas/crase.png"
    },
    "vozesVerbais": {
        "titulo": "🗣️ Vozes Verbais",
        "imagem": "imagens/mapas/vozesVerbais.png"
    },
    "pontuacao": {
        "titulo": "📍 Pontuação",
        "imagem": "imagens/mapas/pontuacao.png"
    },
    "ortografia": {
        "titulo": "📖 Ortografia",
        "imagem": "imagens/mapas/ortografia.png"
    },
    "acentuacao": {
        "titulo": "🔠 Acentuação",
        "imagem": "imagens/mapas/acentuacao.png"
    },
    "redacaoOficial": {
        "titulo": "🏛️ Redação Oficial",
        "imagem": "imagens/mapas/redacaoOficial.png"
    },
    "eticaConceitos": {
        "titulo": "⚖️ Ética no Serviço Público",
        "imagem": "imagens/mapas/EticaConceitos.png"
    },
    "principiosAdministracao": {
        "titulo": "🏛️ Princípios da Administração Pública",
        "imagem": "imagens/mapas/PrincipiosAdministracao.png"
    },
    "deveresServidor": {
        "titulo": "📋 Deveres, Proibições e Responsabilidades",
        "imagem": "imagens/mapas/DeveresServidor.png"
    },
    "condutaEtica": {
        "titulo": "🤝 Conduta Ética e Atendimento ao Público",
        "imagem": "imagens/mapas/CondutaEtica.png"
    },
    "lai": {
        "titulo": "🔎 Lei de Acesso à Informação",
        "imagem": "imagens/mapas/LAI.png"
    },
    "lgpd": {
        "titulo": "🛡️ Lei Geral de Proteção de Dados",
        "imagem": "imagens/mapas/LGPD.png"
    },
    "hardware": {
        "titulo": "💻 Hardware",
        "imagem": "imagens/mapas/hardware.png"
    },
    "software": {
        "titulo": "⚙️ Software, Windows e Linux",
        "imagem": "imagens/mapas/software.png"
    },
    "arquivos": {
        "titulo": "🗂 Arquivos, Pastas e Backup",
        "imagem": "imagens/mapas/arquivos.png"
    },
    "office": {
        "titulo": "📊 Office e LibreOffice",
        "imagem": "imagens/mapas/office.png"
    },
    "internet": {
        "titulo": "🌐 Internet e Correio Eletrônico",
        "imagem": "imagens/mapas/internet.png"
    },
    "redes": {
        "titulo": "🌐 Redes de Computadores",
        "imagem": "imagens/mapas/redes.png"
    },
    "seguranca": {
        "titulo": "🔒 Segurança da Informação",
        "imagem": "imagens/mapas/seguranca.png"
    },
    "fundamentosCiencias": {
        "titulo": "🔬 Fundamentos do Ensino de Ciências",
        "imagem": "imagens/mapas/fundamentos-ciencias.png"
    },
    "bnccCiencias": {
        "titulo": "📘 BNCC e Competências em Ciências da Natureza",
        "imagem": "imagens/mapas/bncc-ciencias.png"
    },
    "alfabetizacaoCientifica": {
        "titulo": "🔬 Alfabetização Científica",
        "imagem": "imagens/mapas/AlfabetizacaoCientifica.png"
    },
    "citologia": {
        "titulo": "🧬 Citologia",
        "imagem": "imagens/mapas/Citologia.png"
    },
    "microbiologia": {
        "titulo": "🦠 Microbiologia",
        "imagem": "imagens/mapas/Microbiologia.png"
    },
    "botanica": {
        "titulo": "🌿 Botânica",
        "imagem": "imagens/mapas/Botanica.png"
    },
    "zoologia": {
        "titulo": "🐾 Zoologia",
        "imagem": "imagens/mapas/Zoologia.png"
    },
    "evolucao": {
        "titulo": "🧬 Evolução",
        "imagem": "imagens/mapas/Evolucao.png"
    },
    "genetica": {
        "titulo": "🧬 Genética",
        "imagem": "imagens/mapas/Genetica.png"
    },
    "hereditariedade": {
        "titulo": "👨‍👩‍👧‍👦 Hereditariedade",
        "imagem": "imagens/mapas/Hereditariedade.png"
    },
    "biotecnologia": {
        "titulo": "🧬 Biotecnologia",
        "imagem": "imagens/mapas/Biotecnologia.png"
    },
    "ecologia": {
        "titulo": "🌿 Ecologia",
        "imagem": "imagens/mapas/Ecologia.png"
    },
    "terraEUniverso": {
        "titulo": "🌎 Terra e Universo",
        "imagem": "imagens/mapas/TerraEUniverso.png"
    },
    "anatomiaFisiologia": {
        "titulo": "🫀 Anatomia e Fisiologia Humana",
        "imagem": "imagens/mapas/AnatomiaFisiologia.png"
    },
    "materiaQuimica": {
        "titulo": "⚗️ Matéria e Química",
        "imagem": "imagens/mapas/MateriaQuimica.png"
    },
    "fundamentosFisica": {
        "titulo": "⚡ Fundamentos da Física",
        "imagem": "imagens/mapas/FundamentosFisica.png"
    },
    "fundamentosEnsinoHistoria": {
        "titulo": "📚 Fundamentos do Ensino de História",
        "imagem": "imagens/mapas/fundamentosEnsinoHistoria.png"
    },
    "cienciaHistoricaOficioHistoriador": {
        "titulo": "🔎 Ciência Histórica e Ofício do Historiador",
        "imagem": "imagens/mapas/cienciaHistoricaOficioHistoriador.png"
    },
    "povosPreColombianos": {
        "titulo": "🏺 Povos Pré-Colombianos",
        "imagem": "imagens/mapas/povosPreColombianos.png"
    },
    "formacaoSocialCulturalBrasileira": {
        "titulo": "🧬 Formação Social e Cultural Brasileira",
        "imagem": "imagens/mapas/formacaoSocialCulturalBrasileira.png"
    },
    "estadosModernosApropriacaoAmerica": {
        "titulo": "🏛️ Estados Modernos e Apropriação da América",
        "imagem": "imagens/mapas/estadosModernosApropriacaoAmerica.png"
    },
    "mercantilismoColonizacaoAmerica": {
        "titulo": "💰 Mercantilismo e Colonização da América",
        "imagem": "imagens/mapas/mercantilismoColonizacaoAmerica.png"
    },
    "brasilColonialSociedadeEconomiaResistencias": {
        "titulo": "🌾 Brasil Colonial: Sociedade, Economia e Resistências",
        "imagem": "imagens/mapas/brasilColonialSociedadeEconomiaResistencias.png"
    },
    "administracaoAmericaLusitanaColonial": {
        "titulo": "🏛️ Administração da América Lusitana Colonial",
        "imagem": "imagens/mapas/administracaoAmericaLusitanaColonial.png"
    },
    "aspectosEconomicosFormasTrabalhoBrasilColonialImperial": {
        "titulo": "⚒️ Aspectos Econômicos e Formas de Trabalho no Brasil Colonial e Imperial",
        "imagem": "imagens/mapas/aspectosEconomicosFormasTrabalhoBrasilColonialImperial.png"
    },
    "sociedadeColonialImperialBrasileira": {
        "titulo": "🏛️ Sociedade Colonial e Imperial Brasileira",
        "imagem": "imagens/mapas/sociedadeColonialImperialBrasileira.png"
    },
    "influenciasIdeologiasLiberaisBrasilSeculoXVIII": {
        "titulo": "🕯️ Influências das Ideologias Liberais no Brasil do Século XVIII",
        "imagem": "imagens/mapas/influenciasIdeologiasLiberaisBrasilSeculoXVIII.png"
    },
    "movimentosAnticoloniaisBrasil": {
        "titulo": "🔥 Movimentos Anticoloniais no Brasil",
        "imagem": "imagens/mapas/movimentosAnticoloniaisBrasil.png"
    },
    "cortePortuguesaFormacaoEstadoNacionalBrasileiro": {
        "titulo": "👑 Corte Portuguesa no Brasil e Formação do Estado Nacional Brasileiro",
        "imagem": "imagens/mapas/cortePortuguesaFormacaoEstadoNacionalBrasileiro.png"
    },
    "estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro": {
        "titulo": "🏛️ Estruturas Políticas, Econômicas e Sociais do Estado Imperial Brasileiro",
        "imagem": "imagens/mapas/estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro.png"
    },
    "revoltasMovimentosBrasilImperial": {
        "titulo": "⚔️ Revoltas e Movimentos no Brasil Imperial",
        "imagem": "imagens/mapas/revoltasMovimentosBrasilImperial.png"
    },
    "expansaoFronteirasAmericaPortuguesa": {
        "titulo": "🗺️ Expansão das Fronteiras da América Portuguesa",
        "imagem": "imagens/mapas/expansaoFronteirasAmericaPortuguesa.png"
    }
};

function configurarMapaMentalAtual(){

    const titulo =
        document.getElementById("tituloMapa");

    const imagem =
        document.getElementById("imagemMapa");

    if(!titulo || !imagem){
        return;
    }

    const mapa =
        mapasMentaisPorAssunto[assuntoAtual];

    if(mapa){
        titulo.innerHTML = mapa.titulo;
        imagem.src = mapa.imagem;
    }

    atualizarBotaoContinuarQuestoes();

}


function abrirMapaMental(){

    configurarMapaMentalAtual();

    mostrarTela("telaMapaMental");

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

<div class="aviso-farol aviso-farol-compacto">
    <strong>⭐ Cada acerto vale 10 Pontos de Luz.</strong>
    <span>Conclua o tópico para buscar bônus e medalhas.</span>
</div>

<br>

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

    const ganhouPontosQuestao = adicionarPontosLuz(
        10,
        "Questão correta",
        chaveQuestaoPontuacao("questao", disciplinaAtual, q)
    );

    registrarAtividadeDiaria("acertos", ganhouPontosQuestao ? 1 : 0);

        feedback.innerHTML = `
        <div class="feedback-acerto">

            <h3>✅ Resposta Correta!</h3>

            ${ganhouPontosQuestao ? `<p class="pontos-luz-feedback">⭐ 10 Pontos de Luz</p>` : `<p class="pontos-luz-feedback neutro">⭐ Pontos desta questão já foram registrados antes.</p>`}

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

    quilombola: "🏘 Quilombola",

    indigena: "🪶 Educação Escolar Indígena",

    didatica: "📚 Didática",

    planejamento: "📋 Planejamento Educacional",

    avaliacao: "📊 Avaliação da Aprendizagem",

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

    eticaConceitos: "⚖️ Ética no Serviço Público",

    principiosAdministracao: "🏛️ Princípios da Administração Pública",

    deveresServidor: "📋 Deveres, Proibições e Responsabilidades",

    condutaEtica: "🤝 Conduta Ética e Atendimento ao Público",

    lai: "🔎 Lei de Acesso à Informação",

    lgpd: "🛡️ Lei Geral de Proteção de Dados",
    fundamentosEnsinoHistoria: "📚 Fundamentos do Ensino de História",
    cienciaHistoricaOficioHistoriador: "🔎 Ciência Histórica e Ofício do Historiador",
    povosPreColombianos: "🏺 Povos Pré-Colombianos",
    formacaoSocialCulturalBrasileira: "🧬 Formação Social e Cultural Brasileira",
    estadosModernosApropriacaoAmerica: "🏛️ Estados Modernos e Apropriação da América",
    mercantilismoColonizacaoAmerica: "💰 Mercantilismo e Colonização da América",
    brasilColonialSociedadeEconomiaResistencias: "🌾 Brasil Colonial: Sociedade, Economia e Resistências",
    administracaoAmericaLusitanaColonial: "🏛️ Administração da América Lusitana Colonial",
    aspectosEconomicosFormasTrabalhoBrasilColonialImperial: "⚒️ Aspectos Econômicos e Formas de Trabalho no Brasil Colonial e Imperial",
    sociedadeColonialImperialBrasileira: "🏛️ Sociedade Colonial e Imperial Brasileira",
    influenciasIdeologiasLiberaisBrasilSeculoXVIII: "🕯️ Influências das Ideologias Liberais no Brasil do Século XVIII",
    movimentosAnticoloniaisBrasil: "🔥 Movimentos Anticoloniais no Brasil",
    cortePortuguesaFormacaoEstadoNacionalBrasileiro: "👑 Corte Portuguesa no Brasil e Formação do Estado Nacional Brasileiro",
    estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro: "🏛️ Estruturas Políticas, Econômicas e Sociais do Estado Imperial Brasileiro",
    revoltasMovimentosBrasilImperial: "⚔️ Revoltas e Movimentos no Brasil Imperial",
    expansaoFronteirasAmericaPortuguesa: "🗺️ Expansão das Fronteiras da América Portuguesa",
    apoioOrganizacaoEducacao: "🏫 Organização da Educação Básica",
    apoioLDB: "📘 LDB e Bases da Educação Nacional",
    apoioECA: "🧒 ECA e Proteção Integral",
    apoioLBI: "♿ LBI e Inclusão da Pessoa com Deficiência",
    apoioTEA: "🧩 Política Nacional do TEA",
    apoioPoliticaEducacaoEspecial: "🌐 Política Nacional de Educação Especial Inclusiva",
    apoioBNCCDiretrizes: "📚 Diretrizes Curriculares e BNCC",
    apoioEducacaoInclusiva: "🤝 Educação Especial na Perspectiva Inclusiva",
    apoioPapelProfissional: "👨‍🏫 Papel do Profissional de Apoio Escolar",
    apoioTrabalhoColaborativo: "🛡️ Trabalho Colaborativo, Ética e Segurança",


    hardware: "💻 Hardware",

    software: "⚙️ Software",
    
    office: "📊 Office e LibreOffice",

    internet: "🌐 Internet e Correio Eletrônico",

    redes: "🌐 Redes de Computadores",

    seguranca: "🔒 Segurança da Informação",

    fundamentosCiencias:
"🔬 Fundamentos do Ensino de Ciências",

     bnccCiencias:
"📘 BNCC e Competências em Ciências da Natureza",

alfabetizacaoCientifica:
"🔬 Alfabetização Científica",
    
citologia:
"🧬 Citologia",

ecologia:
"🌿 Ecologia",

terraEUniverso:
"🌎 Terra e Universo",

anatomiaFisiologia:
"🫀 Anatomia e Fisiologia Humana",

materiaQuimica:
"⚗️ Matéria e Química",

fundamentosFisica:
"⚡ Fundamentos da Física",

anatomiaFisiologia:
"🫀 Anatomia e Fisiologia Humana",

materiaQuimica:
"⚗️ Matéria e Química",

fundamentosFisica:
"⚡ Fundamentos da Física"

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

            cadernoErros[indiceExistente] = {
                ...cadernoErros[indiceExistente],
                idErro: cadernoErros[indiceExistente].idErro || chaveQuestaoPontuacao("erro", disciplinaAtual, q),
                assunto: disciplinaAtual,
                alternativas: q.alternativas,
                correta: q.correta,
                texto: q.texto || "",
                imagem: q.imagem || "",
                afirmacoes: q.afirmacoes || null,
                respostaCorreta: respostaCorreta,
                explicacao: q.feedbackErro,
                feedbackAcerto: q.feedbackAcerto || "",
                feedbackErro: q.feedbackErro || "",
                dicaBanca: q.dicaBanca || "",
                erros: (cadernoErros[indiceExistente].erros || 0) + 1,
                data: Date.now(),
                status: "pendente"
            };

        } else {

            cadernoErros.unshift({

    idErro: chaveQuestaoPontuacao("erro", disciplinaAtual, q),

    assunto: disciplinaAtual,

    disciplina: nomeDisciplina,

    pergunta: q.pergunta,

    texto: q.texto || "",

    imagem: q.imagem || "",

    afirmacoes: q.afirmacoes || null,

    alternativas: q.alternativas,

    correta: q.correta,

    respostaCorreta: respostaCorreta,

    explicacao: q.feedbackErro,

    feedbackAcerto: q.feedbackAcerto || "",

    feedbackErro: q.feedbackErro || "",

    dicaBanca: q.dicaBanca || "",

    erros: 1,

    acertosRevisao: 0,

    pontosRevisaoGanhos: false,

    status: "pendente",

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

    localStorage.setItem(
        "farol_ultimoAssunto",
        disciplinaAtual
    );

    atualizarBotaoContinuarQuestoes();

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

    mensagem =
    "Parabéns! Você demonstrou excelente domínio do conteúdo. Continue revisando para manter esse alto desempenho.";

}
else if(percentual >= 75){

    classificacao = "🥈 MUITO BOM";
 medalha = "🥈 PRATA";

    mensagem =
    "Ótimo resultado! Você está muito próximo da excelência.";

}
else if(percentual >= 60){

    classificacao = "🥉 BOM";
medalha = "🥉 BRONZE";

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

const registroMedalhaFarol = registrarMedalhaAssuntoFarol(
    disciplinaAtual,
    percentual
);

medalha = registroMedalhaFarol.texto;

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

let pontosTopicoHTML = "";

if(adicionarPontosLuz(
    50,
    "Conclusão de tópico",
    "topico:" + disciplinaAtual
)){
    pontosTopicoHTML += "⭐ 50 Pontos de Luz por concluir o tópico<br>";
}

if(percentual >= 90){
    if(adicionarPontosLuz(
        120,
        "Desempenho acima de 90% no tópico",
        "topico90:" + disciplinaAtual
    )){
        pontosTopicoHTML += "🏆 +120 Pontos de Luz por desempenho acima de 90%<br>";
    }
}
else if(percentual >= 80){
    if(adicionarPontosLuz(
        80,
        "Desempenho acima de 80% no tópico",
        "topico80:" + disciplinaAtual
    )){
        pontosTopicoHTML += "🥇 +80 Pontos de Luz por desempenho acima de 80%<br>";
    }
}

registrarAtividadeDiaria("topicos", 1);

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

        ${pontosTopicoHTML ? `
            <br>
            <div class="pontos-luz-box">
                <strong>⭐ Pontos de Luz conquistados:</strong><br><br>
                ${pontosTopicoHTML}
            </div>
        ` : ""}

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

function obterStatusCadernoErro(item){

    if(
        item.status === "corrigida" ||
        item.status === "recuperada"
    ){
        return "recuperada";
    }

    if(item.status === "recuperacao"){
        return "revisao";
    }

    return "pendente";

}

function obterRotuloStatusCaderno(item){

    const status =
        obterStatusCadernoErro(item);

    if(status === "recuperada"){
        return "✅ Recuperada";
    }

    if(status === "revisao"){
        return "🔁 Em revisão";
    }

    return "❌ Pendente";

}

function definirFiltroCadernoErros(filtro){

    localStorage.setItem(
        "farol_filtro_caderno_erros",
        filtro
    );

    atualizarCadernoErros();

}

function contarCadernoErrosPorStatus(){

    const resumo = {
        total: cadernoErros.length,
        pendentes: 0,
        revisao: 0,
        recuperadas: 0,
        revisaveis: 0,
        pontosPossiveis: 0
    };

    cadernoErros.forEach(item => {

        const status =
            obterStatusCadernoErro(item);

        if(status === "pendente"){
            resumo.pendentes++;
        }
        else if(status === "revisao"){
            resumo.revisao++;
        }
        else if(status === "recuperada"){
            resumo.recuperadas++;
        }

        if(
            status !== "recuperada" &&
            Array.isArray(item.alternativas)
        ){
            resumo.revisaveis++;
        }

        if(
            status !== "recuperada" &&
            !item.pontosRevisaoGanhos
        ){
            resumo.pontosPossiveis += 5;
        }

    });

    return resumo;

}

function montarBotaoFiltroCaderno(filtroAtual, filtro, texto, quantidade){

    return `
        <button
            class="btn-filtro-caderno ${filtroAtual === filtro ? "ativo" : ""}"
            onclick="definirFiltroCadernoErros('${filtro}')">

            ${texto}
            <span>${quantidade}</span>

        </button>
    `;

}

function atualizarResumoCadernoErros(){

    const painel =
        document.getElementById(
            "painelResumoCadernoErros"
        );

    const filtros =
        document.getElementById(
            "filtrosCadernoErros"
        );

    if(!painel || !filtros){
        return;
    }

    const resumo =
        contarCadernoErrosPorStatus();

    const filtroAtual =
        localStorage.getItem(
            "farol_filtro_caderno_erros"
        ) || "todos";

    painel.innerHTML = `
        <div class="resumo-caderno-card">
            <span>❌</span>
            <strong>${resumo.pendentes}</strong>
            <small>Pendentes</small>
        </div>

        <div class="resumo-caderno-card">
            <span>🔁</span>
            <strong>${resumo.revisao}</strong>
            <small>Em revisão</small>
        </div>

        <div class="resumo-caderno-card">
            <span>✅</span>
            <strong>${resumo.recuperadas}</strong>
            <small>Recuperadas</small>
        </div>

        <div class="resumo-caderno-card">
            <span>⭐</span>
            <strong>${resumo.pontosPossiveis}</strong>
            <small>Pontos possíveis</small>
        </div>
    `;

    filtros.innerHTML =
        montarBotaoFiltroCaderno(
            filtroAtual,
            "todos",
            "Todos",
            resumo.total
        ) +
        montarBotaoFiltroCaderno(
            filtroAtual,
            "pendentes",
            "Pendentes",
            resumo.pendentes
        ) +
        montarBotaoFiltroCaderno(
            filtroAtual,
            "revisao",
            "Em revisão",
            resumo.revisao
        ) +
        montarBotaoFiltroCaderno(
            filtroAtual,
            "recuperadas",
            "Recuperadas",
            resumo.recuperadas
        );

}

function atualizarCadernoErros() {

    const lista =
        document.getElementById("listaErros");

    if(!lista){
        return;
    }

    atualizarResumoCadernoErros();

    if (cadernoErros.length === 0) {

        lista.innerHTML = `
            <div class="card caderno-vazio">
                <h3>✅ Nenhum erro registrado.</h3>
                <br>
                <p>
                    Continue estudando. Quando errar uma questão, ela aparecerá aqui
                    para revisão inteligente.
                </p>
            </div>
        `;

        return;
    }

    const filtroAtual =
        localStorage.getItem(
            "farol_filtro_caderno_erros"
        ) || "todos";

    const ordenado =
        [...cadernoErros].sort(
            (a,b) => (b.data || 0) - (a.data || 0)
        );

    const filtrado =
        ordenado.filter(item => {

            const status =
                obterStatusCadernoErro(item);

            if(filtroAtual === "todos"){
                return true;
            }

            if(filtroAtual === "pendentes"){
                return status === "pendente";
            }

            if(filtroAtual === "revisao"){
                return status === "revisao";
            }

            if(filtroAtual === "recuperadas"){
                return status === "recuperada";
            }

            return true;

        });

    if(filtrado.length === 0){

        lista.innerHTML = `
            <div class="card caderno-vazio">
                <h3>🔎 Nenhum item neste filtro.</h3>
                <br>
                <p>
                    Escolha outro filtro ou continue estudando para alimentar seu Caderno de Erros.
                </p>
            </div>
        `;

        return;

    }

    lista.innerHTML = `

    <div class="card caderno-acoes">
        <h3>🧠 Revisão Inteligente</h3>
        <p>
            Revise seus erros por prioridade. Cada primeira revisão correta rende
            <strong>5 Pontos de Luz</strong>. Quando acertar novamente, a questão será
            marcada como recuperada.
        </p>
        <br>
        <button onclick="revisarProximoErroCaderno()">
            🚀 Revisar próximo erro
        </button>
    </div>

    ` + filtrado.map(item => {

        const indiceOriginal =
            cadernoErros.indexOf(item);

        const podeRevisar =
            Array.isArray(item.alternativas) &&
            obterStatusCadernoErro(item) !== "recuperada";

        const status =
            obterStatusCadernoErro(item);

        const classeStatus =
            status === "recuperada"
            ? "status-recuperada"
            : status === "revisao"
            ? "status-revisao"
            : "status-pendente";

        return `

    <div class="card card-erro-inteligente ${classeStatus}">

        <div class="cabecalho-card-erro">

            <div>
                <h3>
                    ${obterRotuloStatusCaderno(item)}
                </h3>

                <small>
                    📚 ${item.disciplina || "-"}
                </small>
            </div>

            <span class="badge-erros">
                ${item.erros || 1} erro(s)
            </span>

        </div>

        <br>

        <div class="info-revisao-card">
            <span>
                🔁 Acertos em revisão:
                <strong>${item.acertosRevisao || 0}/2</strong>
            </span>

            <span>
                ⭐ Recompensa:
                <strong>
                    ${
                        item.pontosRevisaoGanhos
                        ? "já recebida"
                        : "5 Pontos de Luz"
                    }
                </strong>
            </span>
        </div>

        <br>

        <strong>📌 Pergunta:</strong>
        <p class="pergunta-caderno">
            ${item.pergunta || "-"}
        </p>

        <br>

        <details>
            <summary>✅ Ver resposta correta</summary>
            <br>
            ${item.respostaCorreta || "-"}
        </details>

        <br>

        <details>
            <summary>📚 Ver explicação e dica</summary>
            <br>
            ${item.explicacao || item.feedbackErro || "Sem explicação cadastrada."}
            <br><br>
            <strong>💡 Dica da banca:</strong>
            <br>
            ${item.dicaBanca || "Sem dica cadastrada."}
        </details>

        <br>

        <div class="acoes-card-erro">

            ${podeRevisar ? `
                <button onclick="revisarErro(${indiceOriginal})">
                    🔁 Revisar agora
                </button>
            ` : status === "recuperada" ? `
                <button
                    class="btn-caderno-secundario"
                    onclick="removerErroCaderno(${indiceOriginal})">

                    🗑 Remover

                </button>
            ` : `
                <p class="aviso-caderno-antigo">
                    Esta questão foi registrada antes da atualização do Caderno Inteligente.
                    Erre novamente a questão no modo normal para habilitar revisão com alternativas.
                </p>
            `}

        </div>

    </div>

    `}).join("");
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

    mostrarToast("Progresso apagado com sucesso!");

}

// ==========================
// SIMULADOS v0.6
// ==========================

function iniciarSimulado(qtd) {

tipoSimuladoAtual = "geral";

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

        <div class="aviso-farol aviso-farol-compacto">
            <strong>📝 Finalize o simulado e ganhe 100 Pontos de Luz.</strong>
            <span>Com 80% ou mais, você pode receber bônus extra.</span>
        </div>

        <br>

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

${q.imagem ? `
<img
    src="${q.imagem}"
    class="imagem-questao"
    loading="lazy"
    decoding="async"
    onerror="this.style.display='none'; this.insertAdjacentHTML('afterend', '<div class=&quot;aviso-farol aviso-farol-compacto&quot;><strong>⚠️ Imagem não encontrada.</strong><span>Verifique o caminho da imagem no banco de questões.</span></div>');">
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

    const percentualNumero = Number(percentual);
    const hoje = dataHojeFarol();
    let pontosSimuladoHTML = "";

    if(adicionarPontosLuz(
        100,
        "Simulado finalizado",
        "simulado:" + tipoSimuladoAtual + ":" + hoje
    )){
        pontosSimuladoHTML += "⭐ 100 Pontos de Luz por finalizar o simulado<br>";
    }

    if(percentualNumero >= 90){
        if(adicionarPontosLuz(
            150,
            "Desempenho acima de 90% no simulado",
            "simulado90:" + tipoSimuladoAtual + ":" + hoje
        )){
            pontosSimuladoHTML += "🏆 150 Pontos de Luz por desempenho acima de 90%<br>";
        }
    }
    else if(percentualNumero >= 80){
        if(adicionarPontosLuz(
            100,
            "Desempenho acima de 80% no simulado",
            "simulado80:" + tipoSimuladoAtual + ":" + hoje
        )){
            pontosSimuladoHTML += "🥇 100 Pontos de Luz por desempenho acima de 80%<br>";
        }
    }

    registrarAtividadeDiaria("simulados", 1);

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

            ${pontosSimuladoHTML ? `
                <br><br>
                <div class="pontos-luz-box">
                    <strong>⭐ Pontos de Luz conquistados:</strong><br><br>
                    ${pontosSimuladoHTML}
                </div>
            ` : ""}

            <br><br>

            <button onclick="mostrarTela('simulados')">
                📝 Voltar aos Simulados
            </button>

        </div>

    `;

}

// ==========================
// SIMULADOS PERSONALIZADOS
// ==========================

function iniciarSimuladoPersonalizado(
    banco,
    quantidade,
    tipo
){

tipoSimuladoAtual = tipo || "personalizado";

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
// SIMULADOS - ROTA E PROVAS ANTERIORES
// ==========================

function limitarQuantidadeSimuladoFarol(banco, quantidadePadrao){

    const total = Array.isArray(banco) ? banco.length : 0;

    if(total === 0){
        return 0;
    }

    return Math.min(
        quantidadePadrao || 30,
        total
    );

}

function obterBancoDisciplinaSimuladoFarol(disciplina){

    const bancos = {
        portugues: [
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
        ],
        informatica: [
            ...hardware,
            ...software,
            ...arquivos,
            ...office,
            ...internet,
            ...redes,
            ...seguranca
        ],
        etica: [
            ...eticaConceitos,
            ...principiosAdministracao,
            ...deveresServidor,
            ...condutaEtica,
            ...lai,
            ...lgpd
        ],
        didatica: [
            ...bncc,
            ...ldb,
            ...eca,
            ...pne,
            ...fundeb,
            ...lbi,
            ...tea,
            ...inclusiva,
            ...etnicoRacial,
            ...educacaoCampo,
            ...quilombola,
            ...indigena,
            ...didatica,
            ...planejamento,
            ...avaliacao
        ],
        historia: [
            ...fundamentosEnsinoHistoria,
            ...cienciaHistoricaOficioHistoriador,
            ...povosPreColombianos,
            ...formacaoSocialCulturalBrasileira,
            ...estadosModernosApropriacaoAmerica,
            ...mercantilismoColonizacaoAmerica,
            ...brasilColonialSociedadeEconomiaResistencias,
            ...administracaoAmericaLusitanaColonial,
            ...aspectosEconomicosFormasTrabalhoBrasilColonialImperial,
            ...sociedadeColonialImperialBrasileira,
            ...influenciasIdeologiasLiberaisBrasilSeculoXVIII,
            ...movimentosAnticoloniaisBrasil,
            ...cortePortuguesaFormacaoEstadoNacionalBrasileiro,
            ...estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro,
            ...revoltasMovimentosBrasilImperial,
            ...expansaoFronteirasAmericaPortuguesa
        ],
        ciencias: [
            ...fundamentosCiencias,
            ...bnccCiencias,
            ...alfabetizacaoCientifica,
            ...citologia,
            ...ecologia,
            ...terraEUniverso
        ],
        apoioEscolar: [
            ...apoioOrganizacaoEducacao,
            ...apoioLDB,
            ...apoioECA,
            ...apoioLBI,
            ...apoioTEA,
            ...apoioPoliticaEducacaoEspecial,
            ...apoioBNCCDiretrizes,
            ...apoioEducacaoInclusiva,
            ...apoioPapelProfissional,
            ...apoioTrabalhoColaborativo
        ]
    };

    return bancos[disciplina] || [];

}

function iniciarSimuladoBancoFarol(banco, quantidade, tipo){

    const total = limitarQuantidadeSimuladoFarol(
        banco,
        quantidade || 30
    );

    if(total === 0){
        mostrarToast("Nenhuma questão encontrada para este simulado.");
        return;
    }

    iniciarSimuladoPersonalizado(
        banco,
        total,
        tipo || "simuladoFarol"
    );

}

function iniciarSimuladoMinhaRotaFarol(){

    const chaveTrilha = obterTrilhaAtualFarol();

    if(!chaveTrilha){
        mostrarToast("Escolha uma Rota de Estudos antes de iniciar este simulado.");
        mostrarTela("questoes");
        return;
    }

    const trilha = trilhasPreparacaoFarol[chaveTrilha];

    if(
        !trilha ||
        !Array.isArray(trilha.disciplinas) ||
        trilha.disciplinas.length === 0
    ){
        mostrarToast("Rota sem disciplinas liberadas.");
        return;
    }

    const banco = trilha.disciplinas.flatMap(
        disciplina => obterBancoDisciplinaSimuladoFarol(disciplina)
    );

    iniciarSimuladoBancoFarol(
        banco,
        50,
        "minhaRota:" + chaveTrilha
    );

}

function iniciarSimuladoCargoApoioEscolarFarol(){

    const banco = [
        ...obterBancoDisciplinaSimuladoFarol("portugues"),
        ...obterBancoDisciplinaSimuladoFarol("informatica"),
        ...obterBancoDisciplinaSimuladoFarol("etica"),
        ...obterBancoDisciplinaSimuladoFarol("apoioEscolar")
    ];

    iniciarSimuladoBancoFarol(
        banco,
        50,
        "cargo:apoioEscolar"
    );

}

function iniciarSimuladoCargoHistoriaFarol(){

    const banco = [
        ...obterBancoDisciplinaSimuladoFarol("portugues"),
        ...obterBancoDisciplinaSimuladoFarol("informatica"),
        ...obterBancoDisciplinaSimuladoFarol("didatica"),
        ...obterBancoDisciplinaSimuladoFarol("historia")
    ];

    iniciarSimuladoBancoFarol(
        banco,
        50,
        "cargo:professorHistoria"
    );

}

function iniciarSimuladoCargoCienciasFarol(){

    const banco = [
        ...obterBancoDisciplinaSimuladoFarol("portugues"),
        ...obterBancoDisciplinaSimuladoFarol("informatica"),
        ...obterBancoDisciplinaSimuladoFarol("didatica"),
        ...obterBancoDisciplinaSimuladoFarol("ciencias")
    ];

    iniciarSimuladoBancoFarol(
        banco,
        50,
        "cargo:professorCiencias"
    );

}

function abrirArquivoProvaAnteriorFarol(caminho){

    if(!caminho){
        mostrarToast("Arquivo não encontrado.");
        return;
    }

    window.open(
        caminho,
        "_blank"
    );

}

// ==========================
// SIMULADOS POR DISCIPLINA
// ==========================

function iniciarSimuladoCiencias(){

    const ciencias = [

        ...fundamentosCiencias,
        ...bnccCiencias,
        ...alfabetizacaoCientifica,
        ...citologia,
        ...ecologia,
        ...terraEUniverso

    ];

    iniciarSimuladoPersonalizado(
        ciencias,
        30,
        "ciencias"
    );

}

function iniciarSimuladoHistoria(){

    const historia = [

        ...fundamentosEnsinoHistoria,
        ...cienciaHistoricaOficioHistoriador,
        ...povosPreColombianos,
        ...formacaoSocialCulturalBrasileira,
        ...estadosModernosApropriacaoAmerica,
        ...mercantilismoColonizacaoAmerica,
        ...brasilColonialSociedadeEconomiaResistencias,
        ...administracaoAmericaLusitanaColonial,
        ...aspectosEconomicosFormasTrabalhoBrasilColonialImperial,
        ...sociedadeColonialImperialBrasileira,
        ...influenciasIdeologiasLiberaisBrasilSeculoXVIII,
        ...movimentosAnticoloniaisBrasil,
        ...cortePortuguesaFormacaoEstadoNacionalBrasileiro,
        ...estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro,
        ...revoltasMovimentosBrasilImperial,
        ...expansaoFronteirasAmericaPortuguesa

    ];

    iniciarSimuladoPersonalizado(
        historia,
        30,
        "historia"
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
        30,
        "portugues"
    );

}

function iniciarSimuladoEtica(){

    const etica = [

        ...eticaConceitos,
        ...principiosAdministracao,
        ...deveresServidor,
        ...condutaEtica,
        ...lai,
        ...lgpd

    ];

    iniciarSimuladoPersonalizado(
        etica,
        30,
        "etica"
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
        30,
        "informatica"
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
        ...educacaoCampo,
        ...quilombola,
        ...indigena,
        ...didatica,
        ...planejamento,
        ...avaliacao

    ];

    iniciarSimuladoPersonalizado(
        didatica,
        30,
        "didatica"
    );

}

function iniciarSimuladoApoioEscolar(){

    const apoioEscolar = [

        ...apoioOrganizacaoEducacao,
        ...apoioLDB,
        ...apoioECA,
        ...apoioLBI,
        ...apoioTEA,
        ...apoioPoliticaEducacaoEspecial,
        ...apoioBNCCDiretrizes,
        ...apoioEducacaoInclusiva,
        ...apoioPapelProfissional,
        ...apoioTrabalhoColaborativo,

    ];

    iniciarSimuladoPersonalizado(
        apoioEscolar,
        30,
        "apoioEscolar"
    );

}


// ==========================
// ABRIR ASSUNTO
// ==========================

function abrirAssunto(assunto) {

    assuntoAtual = assunto;

    // ===== CORREÇÃO HISTÓRIA: abrir teoria primeiro ao clicar no tópico =====
    // Mantém o fluxo padrão: Tópico -> Teoria -> Mapa Mental -> Questões.
    const teoriasHistoriaPorAssunto = {
        fundamentosEnsinoHistoria: {
            teoria: typeof fundamentosEnsinoHistoriaTeoria !== "undefined" ? fundamentosEnsinoHistoriaTeoria : null,
            titulo: "📚 Fundamentos do Ensino de História"
        },
        cienciaHistoricaOficioHistoriador: {
            teoria: typeof cienciaHistoricaOficioHistoriadorTeoria !== "undefined" ? cienciaHistoricaOficioHistoriadorTeoria : null,
            titulo: "🔎 Ciência Histórica e Ofício do Historiador"
        },
        povosPreColombianos: {
            teoria: typeof povosPreColombianosTeoria !== "undefined" ? povosPreColombianosTeoria : null,
            titulo: "🏺 Povos Pré-Colombianos"
        },
        formacaoSocialCulturalBrasileira: {
            teoria: typeof formacaoSocialCulturalBrasileiraTeoria !== "undefined" ? formacaoSocialCulturalBrasileiraTeoria : null,
            titulo: "🧬 Formação Social e Cultural Brasileira"
        },
        estadosModernosApropriacaoAmerica: {
            teoria: typeof estadosModernosApropriacaoAmericaTeoria !== "undefined" ? estadosModernosApropriacaoAmericaTeoria : null,
            titulo: "🏛️ Estados Modernos e Apropriação da América"
        },
        mercantilismoColonizacaoAmerica: {
            teoria: typeof mercantilismoColonizacaoAmericaTeoria !== "undefined" ? mercantilismoColonizacaoAmericaTeoria : null,
            titulo: "💰 Mercantilismo e Colonização da América"
        },
        brasilColonialSociedadeEconomiaResistencias: {
            teoria: typeof brasilColonialSociedadeEconomiaResistenciasTeoria !== "undefined" ? brasilColonialSociedadeEconomiaResistenciasTeoria : null,
            titulo: "🌾 Brasil Colonial: Sociedade, Economia e Resistências"
        },
        administracaoAmericaLusitanaColonial: {
            teoria: typeof administracaoAmericaLusitanaColonialTeoria !== "undefined" ? administracaoAmericaLusitanaColonialTeoria : null,
            titulo: "🏛️ Administração da América Lusitana Colonial"
        },
        aspectosEconomicosFormasTrabalhoBrasilColonialImperial: {
            teoria: typeof aspectosEconomicosFormasTrabalhoBrasilColonialImperialTeoria !== "undefined" ? aspectosEconomicosFormasTrabalhoBrasilColonialImperialTeoria : null,
            titulo: "⚒️ Aspectos Econômicos e Formas de Trabalho no Brasil Colonial e Imperial"
        },
        sociedadeColonialImperialBrasileira: {
            teoria: typeof sociedadeColonialImperialBrasileiraTeoria !== "undefined" ? sociedadeColonialImperialBrasileiraTeoria : null,
            titulo: "🏛️ Sociedade Colonial e Imperial Brasileira"
        },
        influenciasIdeologiasLiberaisBrasilSeculoXVIII: {
            teoria: typeof influenciasIdeologiasLiberaisBrasilSeculoXVIIITeoria !== "undefined" ? influenciasIdeologiasLiberaisBrasilSeculoXVIIITeoria : null,
            titulo: "🕯️ Influências das Ideologias Liberais no Brasil do Século XVIII"
        },
        movimentosAnticoloniaisBrasil: {
            teoria: typeof movimentosAnticoloniaisBrasilTeoria !== "undefined" ? movimentosAnticoloniaisBrasilTeoria : null,
            titulo: "🔥 Movimentos Anticoloniais no Brasil"
        },
        cortePortuguesaFormacaoEstadoNacionalBrasileiro: {
            teoria: typeof cortePortuguesaFormacaoEstadoNacionalBrasileiroTeoria !== "undefined" ? cortePortuguesaFormacaoEstadoNacionalBrasileiroTeoria : null,
            titulo: "👑 Corte Portuguesa no Brasil e Formação do Estado Nacional Brasileiro"
        },
        estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro: {
            teoria: typeof estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiroTeoria !== "undefined" ? estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiroTeoria : null,
            titulo: "🏛️ Estruturas Políticas, Econômicas e Sociais do Estado Imperial Brasileiro"
        },
        revoltasMovimentosBrasilImperial: {
            teoria: typeof revoltasMovimentosBrasilImperialTeoria !== "undefined" ? revoltasMovimentosBrasilImperialTeoria : null,
            titulo: "⚔️ Revoltas e Movimentos no Brasil Imperial"
        },
        expansaoFronteirasAmericaPortuguesa: {
            teoria: typeof expansaoFronteirasAmericaPortuguesaTeoria !== "undefined" ? expansaoFronteirasAmericaPortuguesaTeoria : null,
            titulo: "🗺️ Expansão das Fronteiras da América Portuguesa"
        },
        administracaoAmericaLusitanaColonial: {
            teoria: typeof administracaoAmericaLusitanaColonialTeoria !== "undefined" ? administracaoAmericaLusitanaColonialTeoria : null,
            titulo: "🏛️ Administração da América Lusitana Colonial"
        },
        expansaoFronteirasAmericaPortuguesa: {
            teoria: typeof expansaoFronteirasAmericaPortuguesaTeoria !== "undefined" ? expansaoFronteirasAmericaPortuguesaTeoria : null,
            titulo: "🗺️ Expansão das Fronteiras da América Portuguesa"
        }
    };

    if (teoriasHistoriaPorAssunto[assunto]) {
        const itemTeoriaHistoria = teoriasHistoriaPorAssunto[assunto];

        if (Array.isArray(itemTeoriaHistoria.teoria) && itemTeoriaHistoria.teoria.length > 0) {
            abrirTeoria(
                itemTeoriaHistoria.teoria,
                itemTeoriaHistoria.titulo
            );
            return;
        }

        mostrarToast("Teoria não encontrada. Verifique se o arquivo de teoria foi enviado.");
        return;
    }

console.log("Assunto:", assunto);
console.log("Progresso:", progressoAssuntos);

console.log(
    "Valor deste assunto:",
    progressoAssuntos[assunto]
);

atualizarBotaoContinuarQuestoes();

    const titulo =
        document.getElementById(
            "tituloMapa"
        );

    const imagem =
        document.getElementById(
            "imagemMapa"
        );

    switch (assunto) {

case "apoioOrganizacaoEducacao":

    titulo.innerHTML =
        "🏫 Organização da Educação Básica";

    imagem.src =
        "imagens/mapas/ApoioOrganizacaoEducacao.png";

    break;

case "apoioLDB":

    titulo.innerHTML =
        "📘 LDB e Bases da Educação Nacional";

    imagem.src =
        "imagens/mapas/ApoioLDB.png";

    break;

case "apoioECA":

    titulo.innerHTML =
        "🧒 ECA e Proteção Integral";

    imagem.src =
        "imagens/mapas/ApoioECA.png";

    break;

case "apoioLBI":

    titulo.innerHTML =
        "♿ LBI e Inclusão da Pessoa com Deficiência";

    imagem.src =
        "imagens/mapas/ApoioLBI.png";

    break;

case "apoioTEA":

    titulo.innerHTML =
        "🧩 Política Nacional do TEA";

    imagem.src =
        "imagens/mapas/ApoioTEA.png";

    break;

case "apoioPoliticaEducacaoEspecial":

    titulo.innerHTML =
        "🌐 Política Nacional de Educação Especial Inclusiva";

    imagem.src =
        "imagens/mapas/ApoioPoliticaEducacaoEspecial.png";

    break;

case "apoioBNCCDiretrizes":

    titulo.innerHTML =
        "📚 Diretrizes Curriculares e BNCC";

    imagem.src =
        "imagens/mapas/ApoioBNCCDiretrizes.png";

    break;

case "apoioEducacaoInclusiva":

    titulo.innerHTML =
        "🤝 Educação Especial na Perspectiva Inclusiva";

    imagem.src =
        "imagens/mapas/ApoioEducacaoInclusiva.png";

    break;

case "apoioPapelProfissional":

    titulo.innerHTML =
        "👨‍🏫 Papel do Profissional de Apoio Escolar";

    imagem.src =
        "imagens/mapas/ApoioPapelProfissional.png";

    break;

case "apoioTrabalhoColaborativo":

    titulo.innerHTML =
        "🛡️ Trabalho Colaborativo, Ética e Segurança";

    imagem.src =
        "imagens/mapas/ApoioTrabalhoColaborativo.png";

    break;

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

    case "quilombola":
    titulo.innerHTML = "🏘 Quilombola";
    imagem.src = "imagens/mapas/quilombola.png";
    break;

   case "indigena":

    titulo.innerHTML =
        "🪶 Educação Escolar Indígena";

    imagem.src =
        "imagens/mapas/indigena.png";

    break;

    case "didatica":

    titulo.innerHTML =
        "📚 Didática";

    imagem.src =
        "imagens/mapas/Didatica.png";

    break;

    case "planejamento":

    titulo.innerHTML =
        "📋 Planejamento Educacional";

    imagem.src =
        "imagens/mapas/Planejamento.png";

    break;

case "avaliacao":

    titulo.innerHTML =
        "📊 Avaliação da Aprendizagem";

    imagem.src =
        "imagens/mapas/Avaliacao.png";

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

case "eticaConceitos":

    titulo.innerHTML =
        "⚖️ Ética no Serviço Público";

    imagem.src =
        "imagens/mapas/EticaConceitos.png";

    break;

case "principiosAdministracao":

    titulo.innerHTML =
        "🏛️ Princípios da Administração Pública";

    imagem.src =
        "imagens/mapas/PrincipiosAdministracao.png";

    break;

case "deveresServidor":

    titulo.innerHTML =
        "📋 Deveres, Proibições e Responsabilidades";

    imagem.src =
        "imagens/mapas/DeveresServidor.png";

    break;

case "condutaEtica":

    titulo.innerHTML =
        "🤝 Conduta Ética e Atendimento ao Público";

    imagem.src =
        "imagens/mapas/CondutaEtica.png";

    break;

case "lai":

    titulo.innerHTML =
        "🔎 Lei de Acesso à Informação";

    imagem.src =
        "imagens/mapas/LAI.png";

    break;

case "lgpd":

    titulo.innerHTML =
        "🛡️ Lei Geral de Proteção de Dados";

    imagem.src =
        "imagens/mapas/LGPD.png";

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

case "alfabetizacaoCientifica":

    titulo.innerHTML =
        "🔬 Alfabetização Científica";

    imagem.src =
        "imagens/mapas/AlfabetizacaoCientifica.png";

    break;

case "citologia":

    titulo.innerHTML =
        "🧬 Citologia";

    imagem.src =
        "imagens/mapas/Citologia.png";

    break;

case "microbiologia":

    titulo.innerHTML =
        "🦠 Microbiologia";

    imagem.src =
        "imagens/mapas/Microbiologia.png";

    break;

case "botanica":

    titulo.innerHTML =
        "🌿 Botânica";

    imagem.src =
        "imagens/mapas/Botanica.png";

    break;

case "zoologia":

    titulo.innerHTML =
        "🐾 Zoologia";

    imagem.src =
        "imagens/mapas/Zoologia.png";

    break;

case "evolucao":

    titulo.innerHTML =
        "🧬 Evolução";

    imagem.src =
        "imagens/mapas/Evolucao.png";

    break;

case "genetica":

    titulo.innerHTML =
        "🧬 Genética";

    imagem.src =
        "imagens/mapas/Genetica.png";

    break;

case "hereditariedade":

    titulo.innerHTML =
        "👨‍👩‍👧‍👦 Hereditariedade";

    imagem.src =
        "imagens/mapas/Hereditariedade.png";

    break;

case "biotecnologia":

    titulo.innerHTML =
        "🧬 Biotecnologia";

    imagem.src =
        "imagens/mapas/Biotecnologia.png";

    break;

case "ecologia":

    titulo.innerHTML =
        "🌿 Ecologia";

    imagem.src =
        "imagens/mapas/Ecologia.png";

    break;

case "terraEUniverso":

    titulo.innerHTML =
        "🌎 Terra e Universo";

    imagem.src =
        "imagens/mapas/TerraEUniverso.png";

    break;

case "anatomiaFisiologia":

    titulo.innerHTML =
        "🫀 Anatomia e Fisiologia Humana";

    imagem.src =
        "imagens/mapas/AnatomiaFisiologia.png";

    break;

case "materiaQuimica":

    titulo.innerHTML =
        "⚗️ Matéria e Química";

    imagem.src =
        "imagens/mapas/MateriaQuimica.png";

    break;

case "fundamentosFisica":

    titulo.innerHTML =
        "⚡ Fundamentos da Física";

    imagem.src =
        "imagens/mapas/FundamentosFisica.png";

    break;


case "fundamentosEnsinoHistoria":

    titulo.innerHTML =
        "📚 Fundamentos do Ensino de História";

    imagem.src =
        "imagens/mapas/fundamentosEnsinoHistoria.png";

    break;

case "cienciaHistoricaOficioHistoriador":

    titulo.innerHTML =
        "🔎 Ciência Histórica e Ofício do Historiador";

    imagem.src =
        "imagens/mapas/cienciaHistoricaOficioHistoriador.png";

    break;

case "povosPreColombianos":

    titulo.innerHTML =
        "🏺 Povos Pré-Colombianos";

    imagem.src =
        "imagens/mapas/povosPreColombianos.png";

    break;

case "formacaoSocialCulturalBrasileira":

    titulo.innerHTML =
        "🧬 Formação Social e Cultural Brasileira";

    imagem.src =
        "imagens/mapas/formacaoSocialCulturalBrasileira.png";

    break;

case "estadosModernosApropriacaoAmerica":

    titulo.innerHTML =
        "🏛️ Estados Modernos e Apropriação da América";

    imagem.src =
        "imagens/mapas/estadosModernosApropriacaoAmerica.png";

    break;

case "mercantilismoColonizacaoAmerica":

    titulo.innerHTML =
        "💰 Mercantilismo e Colonização da América";

    imagem.src =
        "imagens/mapas/mercantilismoColonizacaoAmerica.png";

    break;

case "brasilColonialSociedadeEconomiaResistencias":

    titulo.innerHTML =
        "🌾 Brasil Colonial: Sociedade, Economia e Resistências";

    imagem.src =
        "imagens/mapas/brasilColonialSociedadeEconomiaResistencias.png";

    break;

    }

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

if(assuntoAtual === "alfabetizacaoCientifica"){

    abrirTeoria(
        alfabetizacaoCientificaTeoria,
        "🔬 Alfabetização Científica"
    );

    return;

}

if(assuntoAtual === "citologia"){

    abrirTeoria(
        citologiaTeoria,
        "🧬 Citologia"
    );

    return;

}

if(assuntoAtual === "microbiologia"){

    abrirTeoria(
        microbiologiaTeoria,
        "🦠 Microbiologia"
    );

    return;

}

if(assuntoAtual === "botanica"){

    abrirTeoria(
        botanicaTeoria,
        "🌿 Botânica"
    );

    return;

}

if(assuntoAtual === "zoologia"){

    abrirTeoria(
        zoologiaTeoria,
        "🐾 Zoologia"
    );

    return;

}

if(assuntoAtual === "evolucao"){

    abrirTeoria(
        evolucaoTeoria,
        "🧬 Evolução"
    );

    return;

}

if(assuntoAtual === "genetica"){

    abrirTeoria(
        geneticaTeoria,
        "🧬 Genética"
    );

    return;

}

if(assuntoAtual === "hereditariedade"){

    abrirTeoria(
        hereditariedadeTeoria,
        "👨‍👩‍👧‍👦 Hereditariedade"
    );

    return;

}

if(assuntoAtual === "biotecnologia"){

    abrirTeoria(
        biotecnologiaTeoria,
        "🧬 Biotecnologia"
    );

    return;

}

if(assuntoAtual === "ecologia"){

    abrirTeoria(
        ecologiaTeoria,
        "🌿 Ecologia"
    );

    return;

}

if(assuntoAtual === "terraEUniverso"){

    abrirTeoria(
        terraUniversoTeoria,
        "🌎 Terra e Universo"
    );

    return;

}

if(assuntoAtual === "anatomiaFisiologia"){

    abrirTeoria(
        anatomiaFisiologiaTeoria,
        "🫀 Anatomia e Fisiologia Humana"
    );

    return;

}

if(assuntoAtual === "materiaQuimica"){

    abrirTeoria(
        materiaQuimicaTeoria,
        "⚗️ Matéria e Química"
    );

    return;

}

if(assuntoAtual === "fundamentosFisica"){

    abrirTeoria(
        fundamentosFisicaTeoria,
        "⚡ Fundamentos da Física"
    );

    return;

}

if(assuntoAtual === "variacao"){
    abrirTeoria(
        variacaoTeoria,
        "🌎 Variação Linguística"
    );
    return;
}

if(assuntoAtual === "classesPalavras"){
    abrirTeoria(
        classesPalavrasTeoria,
        "📚 Classes de Palavras"
    );
    return;
}

if(assuntoAtual === "formacaoPalavras"){
    abrirTeoria(
        formacaoPalavrasTeoria,
        "🏗 Formação de Palavras"
    );
    return;
}

if(assuntoAtual === "sintaxe"){
    abrirTeoria(
        sintaxeTeoria,
        "📝 Sintaxe"
    );
    return;
}

if(assuntoAtual === "periodoComposto"){
    abrirTeoria(
        periodoCompostoTeoria,
        "🔄 Período Simples e Composto"
    );
    return;
}

if(assuntoAtual === "concordancia"){
    abrirTeoria(
        concordanciaTeoria,
        "📌 Concordância"
    );
    return;
}

if(assuntoAtual === "regencia"){
    abrirTeoria(
        regenciaTeoria,
        "🎯 Regência"
    );
    return;
}

if(assuntoAtual === "crase"){
    abrirTeoria(
        craseTeoria,
        "✍️ Crase"
    );
    return;
}

if(assuntoAtual === "vozesVerbais"){
    abrirTeoria(
        vozesVerbaisTeoria,
        "🗣️ Vozes Verbais"
    );
    return;
}

if(assuntoAtual === "pontuacao"){
    abrirTeoria(
        pontuacaoTeoria,
        "📍 Pontuação"
    );
    return;
}

if(assuntoAtual === "ortografia"){
    abrirTeoria(
        ortografiaTeoria,
        "📖 Ortografia"
    );
    return;
}

if(assuntoAtual === "acentuacao"){
    abrirTeoria(
        acentuacaoTeoria,
        "🔠 Acentuação"
    );
    return;
}

if(assuntoAtual === "redacaoOficial"){
    abrirTeoria(
        redacaoOficialTeoria,
        "🏛️ Redação Oficial"
    );
    return;
}




// ==========================
// TEORIAS DIDÁTICA E LEGISLAÇÃO - BLOCOS 1 E 2
// ==========================

if(assuntoAtual === "bncc"){
    abrirTeoria(bnccTeoria, "📘 BNCC");
    return;
}

if(assuntoAtual === "ldb"){
    abrirTeoria(ldbTeoria, "📘 LDB");
    return;
}

if(assuntoAtual === "eca"){
    abrirTeoria(ecaTeoria, "🧒 ECA");
    return;
}

if(assuntoAtual === "pne"){
    abrirTeoria(pneTeoria, "📊 PNE");
    return;
}

if(assuntoAtual === "fundeb"){
    abrirTeoria(fundebTeoria, "💰 FUNDEB");
    return;
}

if(assuntoAtual === "lbi"){
    abrirTeoria(lbiTeoria, "♿ LBI");
    return;
}

if(assuntoAtual === "tea"){
    abrirTeoria(teaTeoria, "🧩 TEA");
    return;
}

if(assuntoAtual === "inclusiva"){
    abrirTeoria(inclusivaTeoria, "🤝 Educação Inclusiva");
    return;
}

if(assuntoAtual === "etnicoRacial"){
    abrirTeoria(etnicoRacialTeoria, "🌍 Educação Étnico-Racial");
    return;
}

if(assuntoAtual === "educacaoCampo"){
    abrirTeoria(educacaoCampoTeoria, "🌱 Educação do Campo");
    return;
}


// ==========================
// TEORIAS DIDÁTICA E LEGISLAÇÃO - BLOCO 3
// ==========================

if(assuntoAtual === "quilombola"){
    abrirTeoria(quilombolaTeoria, "🏘 Educação Escolar Quilombola");
    return;
}

if(assuntoAtual === "indigena"){
    abrirTeoria(indigenaTeoria, "🪶 Educação Escolar Indígena");
    return;
}

if(assuntoAtual === "didatica"){
    abrirTeoria(didaticaTeoria, "📚 Didática");
    return;
}

if(assuntoAtual === "planejamento"){
    abrirTeoria(planejamentoTeoria, "🗂 Planejamento");
    return;
}

if(assuntoAtual === "avaliacao"){
    abrirTeoria(avaliacaoTeoria, "📝 Avaliação");
    return;
}



if(assuntoAtual === "apoioOrganizacaoEducacao"){

    abrirTeoria(
        apoioOrganizacaoEducacaoTeoria,
        "🏫 Organização da Educação Básica"
    );

    return;

}

if(assuntoAtual === "apoioLDB"){

    abrirTeoria(
        apoioLDBTeoria,
        "📘 LDB e Bases da Educação Nacional"
    );

    return;

}

if(assuntoAtual === "apoioECA"){

    abrirTeoria(
        apoioECATeoria,
        "🧒 ECA e Proteção Integral"
    );

    return;

}

if(assuntoAtual === "apoioLBI"){

    abrirTeoria(
        apoioLBITeoria,
        "♿ LBI e Inclusão da Pessoa com Deficiência"
    );

    return;

}

if(assuntoAtual === "apoioTEA"){

    abrirTeoria(
        apoioTEATeoria,
        "🧩 Política Nacional do TEA"
    );

    return;

}

if(assuntoAtual === "apoioPoliticaEducacaoEspecial"){

    abrirTeoria(
        apoioPoliticaEducacaoEspecialTeoria,
        "🌐 Política Nacional de Educação Especial Inclusiva"
    );

    return;

}

if(assuntoAtual === "apoioBNCCDiretrizes"){

    abrirTeoria(
        apoioBNCCDiretrizesTeoria,
        "📚 Diretrizes Curriculares e BNCC"
    );

    return;

}

if(assuntoAtual === "apoioEducacaoInclusiva"){

    abrirTeoria(
        apoioEducacaoInclusivaTeoria,
        "🤝 Educação Especial na Perspectiva Inclusiva"
    );

    return;

}

if(assuntoAtual === "apoioPapelProfissional"){

    abrirTeoria(
        apoioPapelProfissionalTeoria,
        "👨‍🏫 Papel do Profissional de Apoio Escolar"
    );

    return;

}

if(assuntoAtual === "apoioTrabalhoColaborativo"){

    abrirTeoria(
        apoioTrabalhoColaborativoTeoria,
        "🛡️ Trabalho Colaborativo, Ética e Segurança"
    );

    return;

}

if(assuntoAtual === "eticaConceitos"){

    abrirTeoria(
        eticaConceitosTeoria,
        "⚖️ Ética no Serviço Público"
    );

    return;

}

if(assuntoAtual === "principiosAdministracao"){

    abrirTeoria(
        principiosAdministracaoTeoria,
        "🏛️ Princípios da Administração Pública"
    );

    return;

}

if(assuntoAtual === "deveresServidor"){

    abrirTeoria(
        deveresServidorTeoria,
        "📋 Deveres, Proibições e Responsabilidades"
    );

    return;

}

if(assuntoAtual === "condutaEtica"){

    abrirTeoria(
        condutaEticaTeoria,
        "🤝 Conduta Ética e Atendimento ao Público"
    );

    return;

}

if(assuntoAtual === "lai"){

    abrirTeoria(
        laiTeoria,
        "🔎 Lei de Acesso à Informação"
    );

    return;

}

if(assuntoAtual === "lgpd"){

    abrirTeoria(
        lgpdTeoria,
        "🛡️ Lei Geral de Proteção de Dados"
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
        "🌐 Internet e Correio Eletrônico"
    );
    return;
}

if(assuntoAtual === "redes"){
    abrirTeoria(
        redesTeoria,
        "🖧 Redes de Computadores"
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

if (assuntoAtual === "fundamentosEnsinoHistoria") {

    abrirTeoria(
        fundamentosEnsinoHistoriaTeoria,
        "📚 Fundamentos do Ensino de História"
    );

    return;
}

if (assuntoAtual === "cienciaHistoricaOficioHistoriador") {

    abrirTeoria(
        cienciaHistoricaOficioHistoriadorTeoria,
        "🔎 Ciência Histórica e Ofício do Historiador"
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

        mostrarToast(
            "Leia o mapa mental antes de continuar."
        );

        return;

    }

    mostrarToast(
        "Banco de questões BNCC será conectado na próxima etapa."
    );

}

// ==========================
// CONTINUIDADE DAS QUESTÕES
// ==========================

function chaveOrdemQuestoes(assunto){
    return "farol_ordemQuestoes_" + assunto;
}

// Cada rodada de um tópico deve mostrar no máximo 50 questões,
// mesmo que o banco tenha 70, 100 ou 120 questões.
const LIMITE_QUESTOES_POR_RODADA = 50;

function obterLimiteQuestoesAssunto(assunto){
    const base = bancoQuestoes[assunto];

    if(!Array.isArray(base)){
        return 0;
    }

    return Math.min(
        LIMITE_QUESTOES_POR_RODADA,
        base.length
    );
}

function obterOrdemSalvaQuestoes(assunto){
    try{
        const ordem = JSON.parse(
            localStorage.getItem(
                chaveOrdemQuestoes(assunto)
            )
        ) || [];

        return Array.isArray(ordem) ? ordem : [];
    }catch(erro){
        console.log("Ordem salva inválida:", erro);
        return [];
    }
}

function obterTotalRodadaAssunto(assunto){
    const limite = obterLimiteQuestoesAssunto(assunto);
    const ordem = obterOrdemSalvaQuestoes(assunto);

    if(ordem.length > 0){
        return Math.min(ordem.length, limite);
    }

    return limite;
}

function embaralharArray(lista){
    const copia = [...lista];

    for(let i = copia.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}


function selecionarQuestoesBalanceadasPorSubtopico(base, limite){
    if(!Array.isArray(base) || base.length === 0 || limite <= 0){
        return [];
    }

    const grupos = {};

    base.forEach(questao => {
        const subtopico = String(
            questao.subtopico || "geral"
        ).trim() || "geral";

        if(!grupos[subtopico]){
            grupos[subtopico] = [];
        }

        grupos[subtopico].push(questao);
    });

    const nomesSubtopicos = Object.keys(grupos);

    // Se o banco ainda não estiver marcado por subtopico,
    // mantém o sorteio aleatório tradicional.
    if(
        nomesSubtopicos.length <= 1 ||
        base.filter(q => q.subtopico).length < Math.min(base.length, limite)
    ){
        return embaralharArray(base).slice(0, limite);
    }

    const ordemSubtopicos = embaralharArray(nomesSubtopicos);
    const quantidadeBase = Math.floor(limite / ordemSubtopicos.length);
    let restante = limite % ordemSubtopicos.length;

    const selecionadas = [];
    const sobras = [];
    const usadas = new Set();

    ordemSubtopicos.forEach(subtopico => {
        const grupo = embaralharArray(grupos[subtopico]);
        const quantidadeDoGrupo = quantidadeBase + (restante > 0 ? 1 : 0);

        if(restante > 0){
            restante--;
        }

        const escolhidas = grupo.slice(0, quantidadeDoGrupo);
        const excedentes = grupo.slice(quantidadeDoGrupo);

        escolhidas.forEach(questao => {
            selecionadas.push(questao);
            usadas.add(questao.id || questao.pergunta);
        });

        sobras.push(...excedentes);
    });

    if(selecionadas.length < limite){
        const complemento = embaralharArray(sobras).filter(questao => {
            return !usadas.has(questao.id || questao.pergunta);
        });

        selecionadas.push(
            ...complemento.slice(0, limite - selecionadas.length)
        );
    }

    return embaralharArray(selecionadas).slice(0, limite);
}

function selecionarQuestoesParaRodada(assunto, base, limite){
    if(!Array.isArray(base) || base.length === 0){
        return [];
    }

    return selecionarQuestoesBalanceadasPorSubtopico(base, limite);
}

function salvarOrdemQuestoes(assunto, questoes){
    if(!assunto || !Array.isArray(questoes)){
        return;
    }

    localStorage.setItem(
        chaveOrdemQuestoes(assunto),
        JSON.stringify(
            questoes.map(q => q.pergunta)
        )
    );
}

function carregarQuestoesNaOrdemSalva(assunto){
    const base = bancoQuestoes[assunto];

    if(!Array.isArray(base)){
        return [];
    }

    const limite = obterLimiteQuestoesAssunto(assunto);
    const ordem = obterOrdemSalvaQuestoes(assunto);

    if(ordem.length > 0){
        const mapaPerguntas = new Map(
            base.map(q => [q.pergunta, q])
        );

        const ordenadas = ordem
            .map(pergunta => mapaPerguntas.get(pergunta))
            .filter(Boolean)
            .slice(0, limite);

        if(ordenadas.length > 0){
            // Corrige ordens antigas que tinham o banco inteiro salvo.
            salvarOrdemQuestoes(assunto, ordenadas);
            return ordenadas;
        }
    }

    const selecionadas = selecionarQuestoesParaRodada(assunto, base, limite);
    salvarOrdemQuestoes(assunto, selecionadas);
    return selecionadas;
}

function prepararQuestoesDoAssunto(novaOrdem){
    disciplinaAtual = assuntoAtual;

    const base = bancoQuestoes[disciplinaAtual];

    if(!Array.isArray(base) || base.length === 0){
        mostrarToast("Banco de questões não encontrado para este assunto.");
        return false;
    }

    const limite = obterLimiteQuestoesAssunto(disciplinaAtual);

    if(novaOrdem){
        questoesEmbaralhadas = selecionarQuestoesParaRodada(disciplinaAtual, base, limite);
        salvarOrdemQuestoes(disciplinaAtual, questoesEmbaralhadas);
    }else{
        questoesEmbaralhadas = carregarQuestoesNaOrdemSalva(disciplinaAtual);
    }

    localStorage.setItem(
        "farol_ultimoAssunto",
        disciplinaAtual
    );

    return true;
}

function atualizarBotaoContinuarQuestoes(){
    const btnContinuar =
        document.getElementById("btnContinuar");

    if(!btnContinuar){
        return;
    }

    const total =
        obterTotalRodadaAssunto(assuntoAtual);

    const progresso =
        progressoAssuntos[assuntoAtual] || 0;

    btnContinuar.style.display =
        progresso > 0 && progresso < total
        ? "inline-block"
        : "none";
}

function restaurarQuestaoAoAbrirTela(){
    const tela = document.getElementById("resolverQuestao");
    const area = document.getElementById("areaQuestao");

    if(!tela || !area || !tela.classList.contains("ativa")){
        return;
    }

    if(area.innerHTML.trim() !== ""){
        return;
    }

    const ultimoAssunto =
        localStorage.getItem("farol_ultimoAssunto");

    if(!ultimoAssunto || !bancoQuestoes[ultimoAssunto]){
        mostrarTela("questoes");
        return;
    }

    assuntoAtual = ultimoAssunto;
    disciplinaAtual = ultimoAssunto;

    continuarQuestoes();
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

        mostrarToast(
            "Leia e revise o mapa mental antes de iniciar as questões."
        );

        return;

    }

    disciplinaAtual = assuntoAtual;

    const total =
        obterTotalRodadaAssunto(disciplinaAtual);

    if(total === 0){
        mostrarToast("Banco de questões não encontrado para este assunto.");
        return;
    }

    const progresso =
        progressoAssuntos[disciplinaAtual] || 0;

    // Iniciar Questões agora tem função própria:
    // começa o assunto do zero, em vez de chamar continuarQuestoes().
    if(progresso > 0 && progresso < total){

        const confirmar = confirm(
            "Você já tem progresso salvo neste assunto. Deseja iniciar do zero?\n\nOK = iniciar do zero\nCancelar = manter o progresso e usar Continuar de Onde Parei"
        );

        if(!confirmar){
            mostrarToast("Progresso mantido. Use Continuar de Onde Parei.");
            return;
        }

    }

    if(progresso >= total){

        const confirmar = confirm(
            "Este assunto já foi concluído. Deseja refazer desde a primeira questão?"
        );

        if(!confirmar){
            return;
        }

    }

    acertosAssunto = 0;
    errosAssunto = 0;

    questaoAtual = 0;

    progressoAssuntos[disciplinaAtual] = 0;

    localStorage.removeItem(
        chaveOrdemQuestoes(disciplinaAtual)
    );

    if(!prepararQuestoesDoAssunto(true)){
        return;
    }

    salvarDados();

    atualizarBotaoContinuarQuestoes();

    mostrarTela("resolverQuestao");

    mostrarQuestao();

}

window.onload = function () {

    inicializarConviteDueloComSeguranca();

    auth.onAuthStateChanged((user) => {

        if(user){

            document.body.classList.remove(
                "login-ativo"
            );

            if(deveAbrirDuelosPorConvite()){

                localStorage.setItem("farol_telaAtual", "duelos");
                mostrarTela("duelos");
                prepararSelectDuelo();
                preencherConviteDueloPendente();

            }else{

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

            setTimeout(() => {
                try{ carregarLojaFirebase(); }catch(e){ console.log(e); }
                try{ salvarRankingFirebase(); }catch(e){ console.log(e); }
                try{ carregarRankingPontos(); }catch(e){ console.log(e); }
                try{ carregarMeusDuelos(); }catch(e){ console.log(e); }
                try{ abrirDueloPendenteAposLogin(); }catch(e){ console.log(e); }
                try{ atualizarMissaoDiaria(); }catch(e){ console.log(e); }
                try{ exibirToastMissaoDiariaUmaVez(); }catch(e){ console.log(e); }
            }, 800);

        }
        else{

            document.body.classList.add(
                "login-ativo"
            );

            mostrarTela(
                "login"
            );

            atualizarAvisoConviteDuelo();

        }

    });

    const tarefasIniciais = [
        carregarDados,
        atualizarEstatisticas,
        atualizarCadernoErros,
        atualizarDashboard,
        atualizarPainelEstudos,
        carregarUsuariosOnline,
        carregarForum,
        iniciarChat,
        carregarUsuariosOnlineChat,
        atualizarContadorForum,
        atualizarMissaoDiaria,
        carregarRankingPontos,
        prepararSelectDuelo,
        atualizarLojaFarol
    ];

    tarefasIniciais.forEach(funcao => {
        try{
            funcao();
        }
        catch(erro){
            console.log("Erro na inicialização:", funcao.name, erro);
        }
    });

    setInterval(

        carregarUsuariosOnline,

        30000

    );

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

const campoPontosLuz = document.getElementById("pontosLuz");
if(campoPontosLuz){
    campoPontosLuz.textContent = pontosLuz;
}

const campoSaldoPontosLuz = document.getElementById("saldoPontosLuz");
if(campoSaldoPontosLuz){
    campoSaldoPontosLuz.textContent = saldoPontosLuz;
}

const campoAvatarAluno = document.getElementById("avatarAluno");
if(campoAvatarAluno){
    campoAvatarAluno.innerHTML = `
        ${montarAvatarHTML(
            lojaFarol.avatarAtual,
            lojaFarol.nomeAvatarAtual,
            "avatar-dashboard"
        )}
        <span>${lojaFarol.nomeAvatarAtual || "Estudante"}</span>
    `;
}

const campoTituloAluno = document.getElementById("tituloAluno");
if(campoTituloAluno){
    const linhaTituloAluno = campoTituloAluno.closest("p");

    if(lojaFarol.tituloAtual){
        campoTituloAluno.textContent = lojaFarol.tituloAtual;

        if(linhaTituloAluno){
            linhaTituloAluno.style.display = "";
        }
    }
    else if(linhaTituloAluno){
        linhaTituloAluno.style.display = "none";
    }
}

const campoMedalhaEspecial = document.getElementById("medalhaEspecialAluno");
if(campoMedalhaEspecial){
    campoMedalhaEspecial.textContent = lojaFarol.medalhaEstudanteAtivo ? "🏅 Estudante Ativo" : "Nenhuma medalha especial";
}

const nivelLuzAtual = obterNivelLuzFarol(pontosLuz);
const cardNivelLuzAluno = document.getElementById("cardNivelLuzAluno");
const campoNivelLuzAluno = document.getElementById("nivelLuzAluno");
const campoFaltamNivelAluno = document.getElementById("faltamNivelAluno");
const barraNivelAluno = document.getElementById("barraNivelAluno");
const textoProgressoNivelAluno = document.getElementById("textoProgressoNivelAluno");

if(cardNivelLuzAluno){
    cardNivelLuzAluno.className = "nivel-luz-painel " + nivelLuzAtual.classe;
}

if(campoNivelLuzAluno){
    campoNivelLuzAluno.textContent = nivelLuzAtual.icone + " " + nivelLuzAtual.nome;
}

if(campoFaltamNivelAluno){
    campoFaltamNivelAluno.textContent = nivelLuzAtual.textoFalta;
}

if(barraNivelAluno){
    barraNivelAluno.style.width = nivelLuzAtual.percentual + "%";
}

if(textoProgressoNivelAluno){
    textoProgressoNivelAluno.textContent = nivelLuzAtual.percentual + "% do caminho deste nível";
}

atualizarMissaoDiaria();
atualizarLojaFarol();

}

function voltarParaMapa(){

    configurarMapaMentalAtual();

    mostrarTela("telaMapaMental");

}

function voltarParaTeoria(){

    if(!assuntoAtual){

        mostrarToast("Selecione um assunto antes de voltar para a teoria.");
        mostrarTela("questoes");
        return;

    }

    abrirTeoriaDoAssunto();

}

function abrirTeoriaDoAssunto(){

    
    // ===== CORREÇÃO HISTÓRIA: botão Teoria dentro das questões =====
    const teoriasHistoriaBotao = {
        fundamentosEnsinoHistoria: {
            teoria: typeof fundamentosEnsinoHistoriaTeoria !== "undefined" ? fundamentosEnsinoHistoriaTeoria : null,
            titulo: "📚 Fundamentos do Ensino de História"
        },
        cienciaHistoricaOficioHistoriador: {
            teoria: typeof cienciaHistoricaOficioHistoriadorTeoria !== "undefined" ? cienciaHistoricaOficioHistoriadorTeoria : null,
            titulo: "🔎 Ciência Histórica e Ofício do Historiador"
        },
        povosPreColombianos: {
            teoria: typeof povosPreColombianosTeoria !== "undefined" ? povosPreColombianosTeoria : null,
            titulo: "🏺 Povos Pré-Colombianos"
        },
        formacaoSocialCulturalBrasileira: {
            teoria: typeof formacaoSocialCulturalBrasileiraTeoria !== "undefined" ? formacaoSocialCulturalBrasileiraTeoria : null,
            titulo: "🧬 Formação Social e Cultural Brasileira"
        },
        estadosModernosApropriacaoAmerica: {
            teoria: typeof estadosModernosApropriacaoAmericaTeoria !== "undefined" ? estadosModernosApropriacaoAmericaTeoria : null,
            titulo: "🏛️ Estados Modernos e Apropriação da América"
        },
        mercantilismoColonizacaoAmerica: {
            teoria: typeof mercantilismoColonizacaoAmericaTeoria !== "undefined" ? mercantilismoColonizacaoAmericaTeoria : null,
            titulo: "💰 Mercantilismo e Colonização da América"
        },
        brasilColonialSociedadeEconomiaResistencias: {
            teoria: typeof brasilColonialSociedadeEconomiaResistenciasTeoria !== "undefined" ? brasilColonialSociedadeEconomiaResistenciasTeoria : null,
            titulo: "🌾 Brasil Colonial: Sociedade, Economia e Resistências"
        }
    };

    if (teoriasHistoriaBotao[assuntoAtual]) {
        const itemTeoriaBotao = teoriasHistoriaBotao[assuntoAtual];

        if (Array.isArray(itemTeoriaBotao.teoria) && itemTeoriaBotao.teoria.length > 0) {
            abrirTeoria(
                itemTeoriaBotao.teoria,
                itemTeoriaBotao.titulo
            );
            return;
        }

        mostrarToast("Teoria não encontrada. Verifique se o arquivo de teoria foi enviado.");
        return;
    }

if(assuntoAtual === "bncc"){

        abrirTeoria(
            bnccTeoria,
            "📘 BNCC"
        );

        return;

    }

    if(assuntoAtual === "ldb"){

        abrirTeoria(
            ldbTeoria,
            "📘 LDB"
        );

        return;

    }

    if(assuntoAtual === "eca"){

        abrirTeoria(
            ecaTeoria,
            "📘 ECA"
        );

        return;

    }

    if(assuntoAtual === "pne"){

        abrirTeoria(
            pneTeoria,
            "📘 PNE"
        );

        return;

    }

    if(assuntoAtual === "fundeb"){

        abrirTeoria(
            fundebTeoria,
            "📘 FUNDEB"
        );

        return;

    }

    if(assuntoAtual === "lbi"){

        abrirTeoria(
            lbiTeoria,
            "📘 LBI"
        );

        return;

    }

    if(assuntoAtual === "tea"){

        abrirTeoria(
            teaTeoria,
            "📘 TEA"
        );

        return;

    }

    if(assuntoAtual === "inclusiva"){

        abrirTeoria(
            inclusivaTeoria,
            "📘 Educação Inclusiva"
        );

        return;

    }

    if(assuntoAtual === "etnicoRacial"){

        abrirTeoria(
            etnicoRacialTeoria,
            "📘 Relações Étnico-Raciais"
        );

        return;

    }

    if(assuntoAtual === "educacaoCampo"){

        abrirTeoria(
            educacaoCampoTeoria,
            "📘 Educação do Campo"
        );

        return;

    }

    if(assuntoAtual === "quilombola"){

        abrirTeoria(
            quilombolaTeoria,
            "🏘 Educação Escolar Quilombola"
        );

        return;

    }

    if(assuntoAtual === "indigena"){

        abrirTeoria(
            indigenaTeoria,
            "🪶 Educação Escolar Indígena"
        );

        return;

    }

    if(assuntoAtual === "didatica"){

        abrirTeoria(
            didaticaTeoria,
            "📚 Didática"
        );

        return;

    }

    if(assuntoAtual === "planejamento"){

        abrirTeoria(
            planejamentoTeoria,
            "📋 Planejamento Educacional"
        );

        return;

    }

    if(assuntoAtual === "avaliacao"){

        abrirTeoria(
            avaliacaoTeoria,
            "📊 Avaliação da Aprendizagem"
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

    if(assuntoAtual === "semantica"){

        abrirTeoria(
            semanticaTeoria,
            "🧠 Semântica"
        );

        return;

    }

    if(assuntoAtual === "figuras"){

        abrirTeoria(
            figurasTeoria,
            "🎭 Figuras de Linguagem"
        );

        return;

    }

    if(assuntoAtual === "variacao"){

        abrirTeoria(
            variacaoTeoria,
            "🗣️ Variação Linguística"
        );

        return;

    }

    if(assuntoAtual === "classesPalavras"){

        abrirTeoria(
            classesPalavrasTeoria,
            "🔤 Classes de Palavras"
        );

        return;

    }

    if(assuntoAtual === "formacaoPalavras"){

        abrirTeoria(
            formacaoPalavrasTeoria,
            "🧩 Formação de Palavras"
        );

        return;

    }

    if(assuntoAtual === "sintaxe"){

        abrirTeoria(
            sintaxeTeoria,
            "🏗️ Sintaxe"
        );

        return;

    }

    if(assuntoAtual === "periodoComposto"){

        abrirTeoria(
            periodoCompostoTeoria,
            "🔗 Período Composto"
        );

        return;

    }

    if(assuntoAtual === "concordancia"){

        abrirTeoria(
            concordanciaTeoria,
            "✅ Concordância"
        );

        return;

    }

    if(assuntoAtual === "regencia"){

        abrirTeoria(
            regenciaTeoria,
            "🎯 Regência"
        );

        return;

    }

    if(assuntoAtual === "crase"){

        abrirTeoria(
            craseTeoria,
            "À Crase"
        );

        return;

    }

    if(assuntoAtual === "vozesVerbais"){

        abrirTeoria(
            vozesVerbaisTeoria,
            "🔄 Vozes Verbais"
        );

        return;

    }

    if(assuntoAtual === "pontuacao"){

        abrirTeoria(
            pontuacaoTeoria,
            "✍️ Pontuação"
        );

        return;

    }

    if(assuntoAtual === "ortografia"){

        abrirTeoria(
            ortografiaTeoria,
            "📝 Ortografia"
        );

        return;

    }

    if(assuntoAtual === "acentuacao"){

        abrirTeoria(
            acentuacaoTeoria,
            "´ Acentuação"
        );

        return;

    }

    if(assuntoAtual === "redacaoOficial"){

        abrirTeoria(
            redacaoOficialTeoria,
            "🏛️ Redação Oficial"
        );

        return;

    }

    if(assuntoAtual === "eticaConceitos"){

        abrirTeoria(
            eticaConceitosTeoria,
            "⚖️ Ética no Serviço Público"
        );

        return;

    }

    if(assuntoAtual === "principiosAdministracao"){

        abrirTeoria(
            principiosAdministracaoTeoria,
            "🏛️ Princípios da Administração Pública"
        );

        return;

    }

    if(assuntoAtual === "deveresServidor"){

        abrirTeoria(
            deveresServidorTeoria,
            "📋 Deveres, Proibições e Responsabilidades"
        );

        return;

    }

    if(assuntoAtual === "condutaEtica"){

        abrirTeoria(
            condutaEticaTeoria,
            "🤝 Conduta Ética no Trabalho e Atendimento"
        );

        return;

    }

    if(assuntoAtual === "lai"){

        abrirTeoria(
            laiTeoria,
            "🔎 Lei de Acesso à Informação"
        );

        return;

    }

    if(assuntoAtual === "lgpd"){

        abrirTeoria(
            lgpdTeoria,
            "🛡️ Lei Geral de Proteção de Dados"
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

    if(assuntoAtual === "alfabetizacaoCientifica"){

        abrirTeoria(
            alfabetizacaoCientificaTeoria,
            "🔬 Alfabetização Científica"
        );

        return;

    }

    if(assuntoAtual === "citologia"){

        abrirTeoria(
            citologiaTeoria,
            "🧬 Citologia"
        );

        return;

    }

    if(assuntoAtual === "ecologia"){

        abrirTeoria(
            ecologiaTeoria,
            "🌿 Ecologia"
        );

        return;

    }

    if(assuntoAtual === "terraEUniverso"){

        abrirTeoria(
            terraUniversoTeoria,
            "🌎 Terra e Universo"
        );

        return;

    }

    if(assuntoAtual === "anatomiaFisiologia"){

        abrirTeoria(
            anatomiaFisiologiaTeoria,
            "🫀 Anatomia e Fisiologia Humana"
        );

        return;

    }

    if(assuntoAtual === "materiaQuimica"){

        abrirTeoria(
            materiaQuimicaTeoria,
            "⚗️ Matéria e Química"
        );

        return;

    }

    if(assuntoAtual === "fundamentosFisica"){

        abrirTeoria(
            fundamentosFisicaTeoria,
            "⚡ Fundamentos da Física"
        );

        return;

    }

    if(assuntoAtual === "fundamentosEnsinoHistoria"){

        abrirTeoria(
            fundamentosEnsinoHistoriaTeoria,
            "📚 Fundamentos do Ensino de História"
        );

        return;

    }

    if(assuntoAtual === "cienciaHistoricaOficioHistoriador"){

        abrirTeoria(
            cienciaHistoricaOficioHistoriadorTeoria,
            "🔎 Ciência Histórica e Ofício do Historiador"
        );

        return;

    }

    if(assuntoAtual === "povosPreColombianos"){

        abrirTeoria(
            povosPreColombianosTeoria,
            "🏺 Povos Pré-Colombianos"
        );

        return;

    }

    if(assuntoAtual === "formacaoSocialCulturalBrasileira"){

        abrirTeoria(
            formacaoSocialCulturalBrasileiraTeoria,
            "🧬 Formação Social e Cultural Brasileira"
        );

        return;

    }

    if(assuntoAtual === "estadosModernosApropriacaoAmerica"){

        abrirTeoria(
            estadosModernosApropriacaoAmericaTeoria,
            "🏛️ Estados Modernos e Apropriação da América"
        );

        return;

    }

    if(assuntoAtual === "mercantilismoColonizacaoAmerica"){

        abrirTeoria(
            mercantilismoColonizacaoAmericaTeoria,
            "💰 Mercantilismo e Colonização da América"
        );

        return;

    }

    if(assuntoAtual === "brasilColonialSociedadeEconomiaResistencias"){

        abrirTeoria(
            brasilColonialSociedadeEconomiaResistenciasTeoria,
            "🌾 Brasil Colonial: Sociedade, Economia e Resistências"
        );

        return;

    }

    if(assuntoAtual === "administracaoAmericaLusitanaColonial"){

        abrirTeoria(
            administracaoAmericaLusitanaColonialTeoria,
            "🏛️ Administração da América Lusitana Colonial"
        );

        return;

    }

    if(assuntoAtual === "aspectosEconomicosFormasTrabalhoBrasilColonialImperial"){

        abrirTeoria(
            aspectosEconomicosFormasTrabalhoBrasilColonialImperialTeoria,
            "⚒️ Aspectos Econômicos e Formas de Trabalho no Brasil Colonial e Imperial"
        );

        return;

    }

    if(assuntoAtual === "sociedadeColonialImperialBrasileira"){

        abrirTeoria(
            sociedadeColonialImperialBrasileiraTeoria,
            "🏛️ Sociedade Colonial e Imperial Brasileira"
        );

        return;

    }

    if(assuntoAtual === "influenciasIdeologiasLiberaisBrasilSeculoXVIII"){

        abrirTeoria(
            influenciasIdeologiasLiberaisBrasilSeculoXVIIITeoria,
            "🕯️ Influências das Ideologias Liberais no Brasil do Século XVIII"
        );

        return;

    }

    if(assuntoAtual === "movimentosAnticoloniaisBrasil"){

        abrirTeoria(
            movimentosAnticoloniaisBrasilTeoria,
            "🔥 Movimentos Anticoloniais no Brasil"
        );

        return;

    }

    if(assuntoAtual === "cortePortuguesaFormacaoEstadoNacionalBrasileiro"){

        abrirTeoria(
            cortePortuguesaFormacaoEstadoNacionalBrasileiroTeoria,
            "👑 Corte Portuguesa no Brasil e Formação do Estado Nacional Brasileiro"
        );

        return;

    }

    if(assuntoAtual === "estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro"){

        abrirTeoria(
            estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiroTeoria,
            "🏛️ Estruturas Políticas, Econômicas e Sociais do Estado Imperial Brasileiro"
        );

        return;

    }

    if(assuntoAtual === "revoltasMovimentosBrasilImperial"){

        abrirTeoria(
            revoltasMovimentosBrasilImperialTeoria,
            "⚔️ Revoltas e Movimentos no Brasil Imperial"
        );

        return;

    }

    if(assuntoAtual === "expansaoFronteirasAmericaPortuguesa"){

        abrirTeoria(
            expansaoFronteirasAmericaPortuguesaTeoria,
            "🗺️ Expansão das Fronteiras da América Portuguesa"
        );

        return;

    }

    if(assuntoAtual === "apoioOrganizacaoEducacao"){

        abrirTeoria(
            apoioOrganizacaoEducacaoTeoria,
            "🏫 Organização da Educação Básica"
        );

        return;

    }

    if(assuntoAtual === "apoioLDB"){

        abrirTeoria(
            apoioLDBTeoria,
            "📘 LDB e Bases da Educação Nacional"
        );

        return;

    }

    if(assuntoAtual === "apoioECA"){

        abrirTeoria(
            apoioECATeoria,
            "🧒 ECA e Proteção Integral"
        );

        return;

    }

    if(assuntoAtual === "apoioLBI"){

        abrirTeoria(
            apoioLBITeoria,
            "♿ LBI e Inclusão da Pessoa com Deficiência"
        );

        return;

    }

    if(assuntoAtual === "apoioTEA"){

        abrirTeoria(
            apoioTEATeoria,
            "🧩 Política Nacional do TEA"
        );

        return;

    }

    if(assuntoAtual === "apoioPoliticaEducacaoEspecial"){

        abrirTeoria(
            apoioPoliticaEducacaoEspecialTeoria,
            "🌐 Política Nacional de Educação Especial Inclusiva"
        );

        return;

    }

    if(assuntoAtual === "apoioBNCCDiretrizes"){

        abrirTeoria(
            apoioBNCCDiretrizesTeoria,
            "📚 Diretrizes Curriculares e BNCC"
        );

        return;

    }

    if(assuntoAtual === "apoioEducacaoInclusiva"){

        abrirTeoria(
            apoioEducacaoInclusivaTeoria,
            "🤝 Educação Especial na Perspectiva Inclusiva"
        );

        return;

    }

    if(assuntoAtual === "apoioPapelProfissional"){

        abrirTeoria(
            apoioPapelProfissionalTeoria,
            "👨‍🏫 Papel do Profissional de Apoio Escolar"
        );

        return;

    }

    if(assuntoAtual === "apoioTrabalhoColaborativo"){

        abrirTeoria(
            apoioTrabalhoColaborativoTeoria,
            "🛡️ Trabalho Colaborativo, Ética e Segurança"
        );

        return;

    }

    if(assuntoAtual === "curriculo"){

        mostrarToast("A teoria deste tópico ainda não foi cadastrada neste pacote.");
        mostrarTela("telaMapaMental");
        return;

    }

    mostrarToast("Teoria não encontrada para este assunto.");
    mostrarTela("telaMapaMental");

}

const assuntosDidatica = [
        "bncc",
        "ldb",
        "eca",
        "pne",
        "fundeb",
        "lbi",
        "tea",
        "inclusiva",
        "etnicoRacial",
        "educacaoCampo",
        "quilombola",
        "indigena",
        "didatica",
        "planejamento",
        "avaliacao",
        "curriculo",
    ];

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
        "redacaoOficial",
    ];

const assuntosEtica = [
        "eticaConceitos",
        "principiosAdministracao",
        "deveresServidor",
        "condutaEtica",
        "lai",
        "lgpd",
    ];

const assuntosInformatica = [
        "hardware",
        "software",
        "arquivos",
        "office",
        "internet",
        "redes",
        "seguranca",
    ];

const assuntosCiencias = [
        "fundamentosCiencias",
        "bnccCiencias",
        "alfabetizacaoCientifica",
        "citologia",
        "ecologia",
        "terraEUniverso",
        "anatomiaFisiologia",
        "materiaQuimica",
        "fundamentosFisica",
    ];

const assuntosHistoria = [
        "fundamentosEnsinoHistoria",
        "cienciaHistoricaOficioHistoriador",
        "povosPreColombianos",
        "formacaoSocialCulturalBrasileira",
        "estadosModernosApropriacaoAmerica",
        "mercantilismoColonizacaoAmerica",
        "brasilColonialSociedadeEconomiaResistencias",
        "administracaoAmericaLusitanaColonial",
        "aspectosEconomicosFormasTrabalhoBrasilColonialImperial",
        "sociedadeColonialImperialBrasileira",
        "influenciasIdeologiasLiberaisBrasilSeculoXVIII",
        "movimentosAnticoloniaisBrasil",
        "cortePortuguesaFormacaoEstadoNacionalBrasileiro",
        "estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro",
        "revoltasMovimentosBrasilImperial",
        "expansaoFronteirasAmericaPortuguesa",
    ];

const assuntosApoioEscolar = [
        "apoioOrganizacaoEducacao",
        "apoioLDB",
        "apoioECA",
        "apoioLBI",
        "apoioTEA",
        "apoioPoliticaEducacaoEspecial",
        "apoioBNCCDiretrizes",
        "apoioEducacaoInclusiva",
        "apoioPapelProfissional",
        "apoioTrabalhoColaborativo",
    ];

function voltarParaAssuntos(){

    if(assuntosApoioEscolar.includes(assuntoAtual)){
        mostrarTela("apoioEscolar");
        return;
    }

    if(assuntosEtica.includes(assuntoAtual)){
        mostrarTela("etica");
        return;
    }

    if(assuntosPortugues.includes(assuntoAtual)){
        mostrarTela("portugues");
        return;
    }

    if(assuntosInformatica.includes(assuntoAtual)){
        mostrarTela("informatica");
        return;
    }

    if(assuntosDidatica.includes(assuntoAtual)){
        mostrarTela("didatica");
        return;
    }

    if(assuntosCiencias.includes(assuntoAtual)){
        mostrarTela("ciencias");
        return;
    }

    if(assuntosHistoria.includes(assuntoAtual)){
        mostrarTela("historia");
        return;
    }

    mostrarTela("questoes");

}


function continuarQuestoes(){

    disciplinaAtual = assuntoAtual;

    if(!prepararQuestoesDoAssunto(false)){
        return;
    }

    const total =
        questoesEmbaralhadas.length;

    questaoAtual =
        progressoAssuntos[assuntoAtual] || 0;

    if(questaoAtual >= total){

        mostrarToast("Este assunto já foi concluído.");
        atualizarBotaoContinuarQuestoes();
        return;

    }

    localStorage.setItem(
        "farol_ultimoAssunto",
        assuntoAtual
    );

    mostrarTela("resolverQuestao");

    mostrarQuestao();

}

function refazerAssunto(){

    questaoAtual = 0;

    acertosAssunto = 0;
    errosAssunto = 0;

    progressoAssuntos[disciplinaAtual] = 0;

    localStorage.removeItem(
        chaveOrdemQuestoes(disciplinaAtual)
    );

    assuntoAtual = disciplinaAtual;

    if(!prepararQuestoesDoAssunto(true)){
        return;
    }

    salvarDados();

    mostrarTela("resolverQuestao");

    mostrarQuestao();

}


// ==========================
// CONTINUAR ÚLTIMO ESTUDO - INÍCIO
// ==========================

function obterNomeBonitoAssunto(chave){

    if(
        typeof mapasMentaisPorAssunto !== "undefined" &&
        mapasMentaisPorAssunto[chave] &&
        mapasMentaisPorAssunto[chave].titulo
    ){
        return mapasMentaisPorAssunto[chave].titulo;
    }

    return chave || "Nenhum assunto";

}

function atualizarContinuarUltimoEstudo(){

    const box =
        document.getElementById("boxContinuarUltimoEstudo");

    const texto =
        document.getElementById("textoContinuarUltimoEstudo");

    const botao =
        document.getElementById("btnContinuarUltimoEstudo");

    if(!box || !texto || !botao){
        return;
    }

    const ultimo =
        localStorage.getItem("farol_ultimoAssunto");

    if(!ultimo || !bancoQuestoes[ultimo]){

        box.classList.add("sem-estudo");
        botao.disabled = true;
        texto.textContent =
            "Você ainda não iniciou um estudo. Escolha uma rota de estudos para começar.";
        return;

    }

    const total =
        obterTotalRodadaAssunto(ultimo);

    const progresso =
        progressoAssuntos[ultimo] || 0;

    const nome =
        obterNomeBonitoAssunto(ultimo);

    box.classList.remove("sem-estudo");
    botao.disabled = false;

    if(progresso > 0 && progresso < total){
        texto.textContent =
            "Continue em " + nome + " — questão " +
            (progresso + 1) + " de " + total + ".";
        return;
    }

    if(progresso >= total && total > 0){
        texto.textContent =
            nome + " já foi concluído. Toque para revisar ou refazer.";
        return;
    }

    texto.textContent =
        "Continue a teoria ou inicie as questões de " + nome + ".";

}

function continuarUltimoEstudo(){

    const ultimo =
        localStorage.getItem("farol_ultimoAssunto");

    if(!ultimo || !bancoQuestoes[ultimo]){
        mostrarToast("Você ainda não iniciou nenhum estudo.");
        mostrarTela("questoes");
        return;
    }

    assuntoAtual = ultimo;
    disciplinaAtual = ultimo;

    const total =
        obterTotalRodadaAssunto(ultimo);

    const progresso =
        progressoAssuntos[ultimo] || 0;

    if(progresso > 0 && progresso < total){
        continuarQuestoes();
        return;
    }

    abrirAssunto(ultimo);

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
        quilombola: "🏘 Quilombola",
        indigena: "🪶 Educação Escolar Indígena",
        didatica: "📚 Didática",
        planejamento: "📋 Planejamento Educacional",
        avaliacao: "📊 Avaliação da Aprendizagem",
        curriculo: "📘 Currículo e Planejamento",
        fundamentosEnsinoHistoria:
"📚 Fundamentos do Ensino de História",
        cienciaHistoricaOficioHistoriador:
"🔎 Ciência Histórica e Ofício do Historiador",
        povosPreColombianos:
"🏺 Povos Pré-Colombianos",
    formacaoSocialCulturalBrasileira: "🧬 Formação Social e Cultural Brasileira",
    estadosModernosApropriacaoAmerica: "🏛️ Estados Modernos e Apropriação da América",
    mercantilismoColonizacaoAmerica: "💰 Mercantilismo e Colonização da América",
    brasilColonialSociedadeEconomiaResistencias: "🌾 Brasil Colonial: Sociedade, Economia e Resistências",
    administracaoAmericaLusitanaColonial: "🏛️ Administração da América Lusitana Colonial",
    aspectosEconomicosFormasTrabalhoBrasilColonialImperial: "⚒️ Aspectos Econômicos e Formas de Trabalho no Brasil Colonial e Imperial",
    sociedadeColonialImperialBrasileira: "🏛️ Sociedade Colonial e Imperial Brasileira",
    influenciasIdeologiasLiberaisBrasilSeculoXVIII: "🕯️ Influências das Ideologias Liberais no Brasil do Século XVIII",
    movimentosAnticoloniaisBrasil: "🔥 Movimentos Anticoloniais no Brasil",
    cortePortuguesaFormacaoEstadoNacionalBrasileiro: "👑 Corte Portuguesa no Brasil e Formação do Estado Nacional Brasileiro",
    estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro: "🏛️ Estruturas Políticas, Econômicas e Sociais do Estado Imperial Brasileiro",
    revoltasMovimentosBrasilImperial: "⚔️ Revoltas e Movimentos no Brasil Imperial",
    expansaoFronteirasAmericaPortuguesa: "🗺️ Expansão das Fronteiras da América Portuguesa",
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
        bnccCiencias: "📘 BNCC e Competências em Ciências da Natureza",
alfabetizacaoCientifica:
"🔬 Alfabetização Científica",
citologia:
"🧬 Citologia",

ecologia:
"🌿 Ecologia",

terraEUniverso:
"🌎 Terra e Universo",

anatomiaFisiologia:
"🫀 Anatomia e Fisiologia Humana",

materiaQuimica:
"⚗️ Matéria e Química",

fundamentosFisica:
"⚡ Fundamentos da Física",

anatomiaFisiologia:
"🫀 Anatomia e Fisiologia Humana",

materiaQuimica:
"⚗️ Matéria e Química",

fundamentosFisica:
"⚡ Fundamentos da Física"

    };

    let concluidos = 0;
    let andamento = 0;
    let ultimo = "Nenhum";

    const ultimoSalvo =
        localStorage.getItem("farol_ultimoAssunto");

    let proxima = "-";

    for(let assunto in progressoAssuntos){

        const total =
            obterTotalRodadaAssunto(assunto);

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

    atualizarContinuarUltimoEstudo();
}

function atualizarStatusAssuntos(){

    const resultados =
        JSON.parse(
            localStorage.getItem(
                "farol_resultados"
            )
        ) || {};

    document
        .querySelectorAll(".btn-assunto")
        .forEach(botao => {

            const onclick =
                botao.getAttribute("onclick") || "";

            const match =
                onclick.match(/abrirAssunto\((['\"])(.*?)\1\)/);

            if(!match){
                return;
            }

            const assunto = match[2];

            if(!botao.dataset.tituloOriginal){
                botao.dataset.tituloOriginal =
                    botao.innerHTML.trim();
            }

            const resultado =
                resultados[assunto];

            if(!resultado){
                botao.innerHTML =
                    botao.dataset.tituloOriginal;
                return;
            }

            const tituloOriginal =
                mapasMentaisPorAssunto[assunto]
                ? mapasMentaisPorAssunto[assunto].titulo
                : botao.dataset.tituloOriginal;

            botao.innerHTML = `

                ${tituloOriginal}

                <br><br>

                ✅ Concluído

                <br>

                ${resultado.medalha || ""}

                ${resultado.percentual || 0}%

            `;

        });

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
                primeiroNomeSeguro(dados.nome || "Aluno");

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

    mostrarToast(
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

        mostrarToast(
            "Cadastro realizado. Aguarde aprovação."
        );

        await auth.signOut();

    }
    catch(erro){

        mostrarToast(
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

    const dadosUsuario = doc.data() || {};

    usuarioEmail =
        credencial.user.email;

    const primeiroNome =
        obterNomeRankingSeguroFarol(dadosUsuario);

    const nomeCompleto =
        obterNomeCompletoValidoFarol(dadosUsuario) || primeiroNome;

    atualizarNomeUsuarioLocalFarol(
        primeiroNome,
        nomeCompleto
    );

localStorage.setItem(
    "usuarioEmail",
    usuarioEmail
);

await db.collection("usuarios")
.doc(credencial.user.uid)
.set({
    nome: primeiroNome,
    nomeCompleto: nomeCompleto,
    email: usuarioEmail
}, { merge: true });

}

await db.collection("usuarios")
.doc(credencial.user.uid)
.update({

    ultimaAtividade: Date.now()

});

        mostrarTela("inicio");
document.getElementById("login").style.display = "none";

try{
    atualizarMissaoDiaria();
    exibirToastMissaoDiariaUmaVez();
}catch(e){
    console.log(e);
}

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

    localStorage.removeItem(
        "usuarioNomeCompleto"
    );

    usuarioForum = "Visitante";

    usuarioNomeCompleto = "";

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
        mostrarToast(
            "Preencha todos os campos."
        );
        return;
    }

    if(senha !== confirmar){

        mostrarToast(
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

        const primeiroNomeCadastro =
            nome.split(/\s+/)[0] || nome;

        await db.collection("usuarios")
        .doc(credencial.user.uid)
        .set({

            nome: primeiroNomeCadastro,
            nomeCompleto: nome,
            email: email,
            dataCadastro: new Date()

        });

        mostrarToast(
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

    const disciplinasForum = [
        { id: "btnForumPortugues", chave: "portugues" },
        { id: "btnForumInformatica", chave: "informatica" },
        { id: "btnForumCiencias", chave: "ciencias" },
        { id: "btnForumDidatica", chave: "didatica" },
        { id: "btnForumHistoria", chave: "historia" },
        { id: "btnForumEtica", chave: "etica" },
        { id: "btnForumApoioEscolar", chave: "apoioEscolar" },
        { id: "btnForumAdministrador", chave: "administrador" }
    ];

    disciplinasForum.forEach(item => {

        const botao = document.getElementById(item.id);

        if(!botao){
            return;
        }

        const total = perguntasForum.filter(
            p => p.disciplina === item.chave
        ).length;

        botao.innerHTML = total > 0
            ? `💬 Fórum de Discussão (${total})`
            : `💬 Fórum de Discussão`;

    });

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

        mostrarToast(
            "✅ Chat apagado com sucesso."
        );

        return;
    }

    await db
    .collection("chatGlobal")
    .add({

        autor: usuarioForum,

        autorEmail: usuarioEmail,

        avatarAtual: lojaFarol.avatarAtual || "👤",

        nomeAvatarAtual: lojaFarol.nomeAvatarAtual || "Estudante",

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

           const avatarMensagem =
                msg.avatarAtual || "👤";

            const nomeMensagemRaw =
                msg.autor || "Aluno";

            const nomeMensagem =
                escaparHTML(nomeMensagemRaw);

            const horarioMensagem =
                escaparHTML(msg.horario || "");

            const textoMensagem =
                escaparHTML(msg.mensagem || "");

           html += `

<div class="msg-chat msg-chat-com-avatar">

  <div class="linha-autor-chat">

    <div class="avatar-chat-msg">
        ${montarAvatarHTML(
            avatarMensagem,
            msg.nomeAvatarAtual || "Avatar",
            "avatar-chat-img"
        )}
    </div>

    <div class="dados-chat-msg">

        <div class="autor-chat">

            ${nomeMensagem}

            ${
                administradores.includes(
                    msg.autorEmail
                )
                ? " 👑"
                : ""
            }

            <span class="hora-chat">

                ${horarioMensagem}

            </span>

        </div>

        <div class="bolha-chat">

            ${textoMensagem}

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
                primeiroNomeSeguro(dados.nome || "Aluno");

            const avatarOnline =
                dados.avatarAtual || "👤";

            html += `
                <div class="usuario-online usuario-online-com-avatar">
                    <span class="bolinha-online">🟢</span>
                    ${montarAvatarHTML(
                        avatarOnline,
                        dados.nomeAvatarAtual || "Avatar",
                        "avatar-online-chat"
                    )}
                    <span>${primeiroNome}</span>
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

        area.textContent =
        texto;

    }

});

// ==========================
// PONTOS DE LUZ, MISSÕES E RANKING
// ==========================

function dataHojeFarol(){
    return new Date().toISOString().slice(0,10);
}

function chaveQuestaoPontuacao(tipo, assunto, questao){
    const pergunta = (questao && questao.pergunta ? questao.pergunta : "")
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .slice(0, 120);

    return `${tipo}:${assunto}:${pergunta}`;
}

function adicionarPontosLuz(valor, motivo, chaveUnica){

    if(chaveUnica && pontosLuzGerados[chaveUnica]){
        return false;
    }

    pontosLuz += valor;
    saldoPontosLuz += valor;

    if(chaveUnica){
        pontosLuzGerados[chaveUnica] = {
            valor: valor,
            motivo: motivo,
            data: Date.now()
        };
    }

    salvarDados();
    atualizarDashboard();
    salvarRankingFirebase();
    verificarMissaoDiaria();

    return true;
}

const missoesDiariasFarol = [

    {
        id: "foco-questoes",
        nome: "Foco nas Questões",
        descricao: "Responda questões e mantenha um bom ritmo de acertos.",
        recompensa: 50,
        requisitos: [
            {
                tipo: "acertos",
                meta: 10,
                texto: "Acertar 10 questões",
                icone: "✅"
            }
        ]
    },

    {
        id: "revisao-inteligente",
        nome: "Revisão Inteligente",
        descricao: "Volte ao Caderno de Erros e recupere conteúdos importantes.",
        recompensa: 40,
        requisitos: [
            {
                tipo: "revisoes",
                meta: 5,
                texto: "Revisar 5 erros",
                icone: "🔁"
            }
        ]
    },

    {
        id: "simulado-farol",
        nome: "Simulado do Farol",
        descricao: "Conclua um simulado para testar seu desempenho geral.",
        recompensa: 80,
        requisitos: [
            {
                tipo: "simulados",
                meta: 1,
                texto: "Concluir 1 simulado",
                icone: "📝"
            }
        ]
    },

    {
        id: "disciplina-em-dia",
        nome: "Disciplina em Dia",
        descricao: "Avance em qualquer disciplina e conclua um tópico de estudo.",
        recompensa: 60,
        requisitos: [
            {
                tipo: "topicos",
                meta: 1,
                texto: "Concluir 1 tópico",
                icone: "📚"
            }
        ]
    },

    {
        id: "estudante-constante",
        nome: "Estudante Constante",
        descricao: "Combine novas questões com revisão para manter a constância.",
        recompensa: 50,
        requisitos: [
            {
                tipo: "acertos",
                meta: 5,
                texto: "Acertar 5 questões",
                icone: "✅"
            },
            {
                tipo: "revisoes",
                meta: 2,
                texto: "Revisar 2 erros",
                icone: "🔁"
            }
        ]
    }

];

function obterMissaoDiaria(){

    const hoje = dataHojeFarol();

    const data =
        new Date(
            hoje + "T00:00:00Z"
        );

    const dias =
        Math.floor(
            data.getTime() / 86400000
        );

    const indice =
        dias % missoesDiariasFarol.length;

    return missoesDiariasFarol[indice];

}

function garantirEstatisticaHoje(){

    const hoje = dataHojeFarol();

    if(!estatisticasDiarias[hoje]){
        estatisticasDiarias[hoje] = {
            acertos: 0,
            revisoes: 0,
            topicos: 0,
            simulados: 0,
            missaoPremiada: false,
            missoesPremiadas: {}
        };
    }

    estatisticasDiarias[hoje].missoesPremiadas =
        estatisticasDiarias[hoje].missoesPremiadas || {};

    return estatisticasDiarias[hoje];

}

function progressoMissao(requisito, estatistica){

    const valor =
        estatistica[requisito.tipo] || 0;

    return {
        atual: Math.min(valor, requisito.meta),
        meta: requisito.meta,
        completa: valor >= requisito.meta
    };

}

function missaoDiariaCompleta(missao, estatistica){

    return missao.requisitos.every(
        requisito =>
            progressoMissao(
                requisito,
                estatistica
            ).completa
    );

}

function registrarAtividadeDiaria(tipo, quantidade){

    if(!quantidade){
        return;
    }

    const hoje = garantirEstatisticaHoje();

    hoje[tipo] = (hoje[tipo] || 0) + quantidade;

    salvarDados();
    atualizarMissaoDiaria();
    verificarMissaoDiaria();

}

function verificarMissaoDiaria(){

    const hoje =
        garantirEstatisticaHoje();

    const missao =
        obterMissaoDiaria();

    const completa =
        missaoDiariaCompleta(
            missao,
            hoje
        );

    if(
        completa &&
        !hoje.missoesPremiadas[missao.id]
    ){

        hoje.missoesPremiadas[missao.id] = true;
        hoje.missaoPremiada = true;

        adicionarPontosLuz(
            missao.recompensa,
            "Missão diária completa: " + missao.nome,
            "missao-diaria:" + missao.id + ":" + dataHojeFarol()
        );

        mostrarToast(
            "🎯 Missão concluída! ⭐ " +
            missao.recompensa +
            " Pontos de Luz"
        );

        salvarDados();

    }

    atualizarMissaoDiaria();

}

function montarLinhasMissao(missao, estatistica){

    return missao.requisitos.map(
        requisito => {

            const progresso =
                progressoMissao(
                    requisito,
                    estatistica
                );

            return `
                <p>
                    ${requisito.icone}
                    ${requisito.texto}:
                    <strong>
                        ${progresso.atual}/${progresso.meta}
                    </strong>
                </p>
            `;

        }
    ).join("");

}

function atualizarMissaoDiaria(){

    const area =
        document.getElementById(
            "missaoDiaria"
        );

    const resumo =
        document.getElementById(
            "missaoDiariaResumoInicio"
        );

    const hoje =
        garantirEstatisticaHoje();

    const missao =
        obterMissaoDiaria();

    const concluida =
        !!hoje.missoesPremiadas[missao.id];

    const linhas =
        montarLinhasMissao(
            missao,
            hoje
        );

    if(area){

        area.innerHTML = `
            <h3>
                🎯 Hoje: ${missao.nome}
            </h3>

            <p>
                ${missao.descricao}
            </p>

            <br>

            ${linhas}

            <br>

            <strong>
                ${
                    concluida
                    ? "🎉 Missão concluída hoje"
                    : "⭐ Recompensa: " + missao.recompensa + " Pontos de Luz"
                }
            </strong>
        `;

    }

    if(resumo){

        resumo.innerHTML = `
            <strong>
                🎯 Missão do Dia: ${missao.nome}
            </strong>

            <span>
                ${
                    concluida
                    ? "Concluída hoje."
                    : "Ganhe ⭐ " + missao.recompensa + " Pontos de Luz."
                }
            </span>

            <button
                class="btn-ver-missao"
                onclick="mostrarTela('estatisticas')">

                Ver missão

            </button>
        `;

    }

}

function exibirToastMissaoDiariaUmaVez(){

    const hoje =
        dataHojeFarol();

    const chave =
        "farol_toast_missao_" + hoje;

    if(
        localStorage.getItem(chave) === "true"
    ){
        return;
    }

    const missao =
        obterMissaoDiaria();

    mostrarToast(
        "🎯 Missão do Dia: " +
        missao.nome +
        ". Ganhe ⭐ " +
        missao.recompensa +
        " Pontos de Luz."
    );

    localStorage.setItem(
        chave,
        "true"
    );

}

async function salvarRankingFirebase(){

    if(!auth.currentUser){
        return;
    }

    try{

        const uid = auth.currentUser.uid;
        const emailAtual = auth.currentUser.email || usuarioEmail || "";
        const usuarioRef = db.collection("usuarios").doc(uid);

        const resultadoRanking = await db.runTransaction(async (transaction) => {

            const docUsuario = await transaction.get(usuarioRef);
            const dadosFirebase = docUsuario.exists ? (docUsuario.data() || {}) : {};

            const pontosLocal = Number(pontosLuz) || 0;
            const pontosFirebase = Number(dadosFirebase.pontosLuz) || 0;

            // REGRA PRINCIPAL:
            // o ranking nunca pode gravar uma pontuação menor que a já existente no Firebase.
            const pontosFinais = Math.max(pontosLocal, pontosFirebase);

            const acertosFinais = Math.max(
                Number(acertos) || 0,
                Number(dadosFirebase.acertos) || 0
            );

            const errosFinais = Math.max(
                Number(erros) || 0,
                Number(dadosFirebase.erros) || 0
            );

            const saldoLocal = Number(saldoPontosLuz) || 0;
            const saldoFirebase =
                typeof dadosFirebase.saldoPontosLuz === "number"
                ? dadosFirebase.saldoPontosLuz
                : saldoLocal;

            let saldoFinal = saldoLocal;

            // Se o Firebase já tem pontuação maior, considera os dados do servidor mais confiáveis.
            if(pontosFirebase > pontosLocal){
                saldoFinal = saldoFirebase;
            }

            // Segurança básica para o saldo não ficar negativo nem maior que o total.
            saldoFinal = Math.max(0, Math.min(saldoFinal, pontosFinais));

            usuarioEmail = usuarioEmail || emailAtual;

            const nomeRankingFinal = obterNomeRankingSeguroFarol(dadosFirebase);
            const nomeCompletoFinal =
                obterNomeCompletoValidoFarol(dadosFirebase) || nomeRankingFinal;

            transaction.set(usuarioRef, {
                nome: nomeRankingFinal,
                nomeCompleto: nomeCompletoFinal,
                email: emailAtual,
                pontosLuz: pontosFinais,
                saldoPontosLuz: saldoFinal,
                acertos: acertosFinais,
                erros: errosFinais,
                avatarAtual: lojaFarol.avatarAtual || "👤",
                nomeAvatarAtual: lojaFarol.nomeAvatarAtual || "Estudante",
                tituloAtual: lojaFarol.tituloAtual || "",
                medalhaEstudanteAtivo: !!lojaFarol.medalhaEstudanteAtivo,
                medalhasOuro: Number(medalhasOuro) || 0,
                medalhasPrata: Number(medalhasPrata) || 0,
                medalhasBronze: Number(medalhasBronze) || 0,
                medalhasPorAssunto: medalhasPorAssunto || {},
                cardPremium: !!lojaFarol.cardPremium,
                certificadoDigital: !!lojaFarol.certificadoDigital,
                lojaFarol: lojaFarol,
                atualizadoEm: Date.now()
            }, { merge: true });

            return {
                pontosLuz: pontosFinais,
                saldoPontosLuz: saldoFinal,
                acertos: acertosFinais,
                erros: errosFinais,
                nome: nomeRankingFinal,
                nomeCompleto: nomeCompletoFinal
            };

        });

        pontosLuz = resultadoRanking.pontosLuz;
        saldoPontosLuz = resultadoRanking.saldoPontosLuz;
        acertos = resultadoRanking.acertos;
        erros = resultadoRanking.erros;

        atualizarNomeUsuarioLocalFarol(
            resultadoRanking.nome,
            resultadoRanking.nomeCompleto
        );

        salvarDados();
        atualizarDashboard();

    }
    catch(erro){
        console.log("Erro ao salvar ranking", erro);
    }
}

function obterNiveisLuzFarol(){

    return [
        {
            nivel: 1,
            minimo: 0,
            icone: "🌱",
            nome: "Nível 1 - Iniciante",
            classe: "nivel-luz-1"
        },
        {
            nivel: 2,
            minimo: 500,
            icone: "🎖️",
            nome: "Nível 2 - Cadete",
            classe: "nivel-luz-2"
        },
        {
            nivel: 3,
            minimo: 1500,
            icone: "🧭",
            nome: "Nível 3 - Aspirante",
            classe: "nivel-luz-3"
        },
        {
            nivel: 4,
            minimo: 3000,
            icone: "⭐",
            nome: "Nível 4 - Oficial",
            classe: "nivel-luz-4"
        },
        {
            nivel: 5,
            minimo: 5000,
            icone: "⚓",
            nome: "Nível 5 - Imediato",
            classe: "nivel-luz-5"
        },
        {
            nivel: 6,
            minimo: 7500,
            icone: "👨‍✈️",
            nome: "Nível 6 - Comandante",
            classe: "nivel-luz-6"
        }
    ];

}

function obterNivelLuzFarol(pontos){

    const total = Number(pontos) || 0;
    const niveis = obterNiveisLuzFarol();

    let atual = niveis[0];
    let proximo = null;

    for(let i = 0; i < niveis.length; i++){
        if(total >= niveis[i].minimo){
            atual = niveis[i];
            proximo = niveis[i + 1] || null;
        }
    }

    if(!proximo){
        return {
            ...atual,
            proximo: null,
            faltam: 0,
            percentual: 100,
            textoFalta: "Nível máximo alcançado no Farol do Saber.",
            faixa: `${atual.minimo}+ Pontos de Luz`
        };
    }

    const pontosNoNivel = Math.max(0, total - atual.minimo);
    const pontosNecessarios = proximo.minimo - atual.minimo;
    const faltam = Math.max(0, proximo.minimo - total);
    const percentual = pontosNecessarios > 0
        ? Math.min(100, Math.round((pontosNoNivel / pontosNecessarios) * 100))
        : 100;

    return {
        ...atual,
        proximo: proximo,
        faltam: faltam,
        percentual: percentual,
        textoFalta: `Faltam ${faltam} Pontos de Luz para ${proximo.nome}.`,
        faixa: `${atual.minimo} a ${proximo.minimo - 1} Pontos de Luz`
    };

}

function obterPatenteVisualRankingFarol(pontos){
    return obterNivelLuzFarol(pontos);
}

async function carregarRankingPontos(){

    const area = document.getElementById("rankingPontos");

    if(!area){
        return;
    }

    try{
        const snapshot = await db.collection("usuarios")
            .orderBy("pontosLuz", "desc")
            .limit(10)
            .get();

        let html = "";
        let posicao = 0;
        posicaoRankingUsuario = "-";

        snapshot.forEach(doc => {
            const dados = doc.data();
            posicao++;

            const nome = primeiroNomeSeguro(dados.nome || "Aluno");
            const pontos = Number(dados.pontosLuz) || 0;
            const avatar = dados.avatarAtual || "👤";
            const nomeAvatar = dados.nomeAvatarAtual || "Avatar";
            const tituloAtual = dados.tituloAtual
                ? escaparHTML(dados.tituloAtual)
                : "";
            const htmlTituloRanking = tituloAtual
                ? `<div class="ranking-titulo">🚩 ${tituloAtual}</div>`
                : "";
            const medalhaEspecial = dados.medalhaEstudanteAtivo ? " 🏅" : "";
            const medalhasRanking = htmlMedalhasRankingFarol(dados);
            const nivelLuz = obterNivelLuzFarol(pontos);
            const souEu = auth.currentUser && doc.id === auth.currentUser.uid;

            if(souEu){
                posicaoRankingUsuario = posicao + "º";
            }

            html += `
                <div class="linha-ranking ranking-card-visual ${souEu ? "ranking-eu" : ""}">
                    <div class="ranking-posicao">
                        ${posicao}º
                    </div>

                    <div class="ranking-avatar-box">
                        ${montarAvatarHTML(
                            avatar,
                            nomeAvatar,
                            "avatar-ranking"
                        )}
                    </div>

                    <div class="ranking-info">
                        <div class="ranking-nome">
                            ${nome}${medalhaEspecial}
                        </div>

                        ${htmlTituloRanking}

                        <div class="ranking-nivel-luz ${nivelLuz.classe}">
                            ${nivelLuz.icone} ${nivelLuz.nome}
                        </div>

                        ${medalhasRanking}
                    </div>

                    <div class="ranking-pontos-box">
                        <strong>${pontos}</strong>
                        <span>⭐</span>
                    </div>
                </div>
            `;
        });

        area.innerHTML = html || "Ranking ainda vazio.";
    }
    catch(erro){
        area.innerHTML = "Ranking indisponível no momento.";
        console.log("Erro no ranking", erro);
    }
}


// Compatibilidade: alguns botões antigos chamam carregarRankingFirebase().
// A função correta do ranking é carregarRankingPontos().
function carregarRankingFirebase(){
    return carregarRankingPontos();
}

setInterval(carregarRankingPontos, 120000);

// ==========================
// CADERNO DE ERROS INTELIGENTE
// ==========================

function revisarProximoErroCaderno(){

    if(cadernoErros.length === 0){
        mostrarToast("Nenhum erro para revisar.");
        return;
    }

    const filtroAtual =
        localStorage.getItem(
            "farol_filtro_caderno_erros"
        ) || "todos";

    const candidatos =
        cadernoErros
        .map((item, indice) => ({
            item,
            indice
        }))
        .filter(obj => {

            const status =
                obterStatusCadernoErro(obj.item);

            if(status === "recuperada"){
                return false;
            }

            if(!Array.isArray(obj.item.alternativas)){
                return false;
            }

            if(filtroAtual === "pendentes"){
                return status === "pendente";
            }

            if(filtroAtual === "revisao"){
                return status === "revisao";
            }

            return true;

        })
        .sort((a,b) => (b.item.data || 0) - (a.item.data || 0));

    if(candidatos.length === 0){

        mostrarToast(
            "Não há questões revisáveis neste filtro."
        );

        return;

    }

    revisarErro(
        candidatos[0].indice
    );

}

function revisarTodosErros(){

    revisarProximoErroCaderno();

}

function removerErroCaderno(indice){

    const item =
        cadernoErros[indice];

    if(!item){
        mostrarToast("Erro não encontrado.");
        return;
    }

    const confirmar =
        confirm(
            "Deseja remover esta questão do Caderno de Erros?"
        );

    if(!confirmar){
        return;
    }

    cadernoErros.splice(
        indice,
        1
    );

    salvarDados();
    atualizarCadernoErros();

    mostrarToast(
        "Questão removida do Caderno de Erros."
    );

}

function revisarErro(indice){

    const item = cadernoErros[indice];

    if(!item || !Array.isArray(item.alternativas)){
        mostrarToast("Esta questão ainda não possui alternativas salvas para revisão.");
        return;
    }

    if(obterStatusCadernoErro(item) === "recuperada"){
        mostrarToast("Esta questão já foi recuperada.");
        return;
    }

    mostrarTela("resolverQuestao");

    const area = document.getElementById("areaQuestao");

    area.innerHTML = `
        <div class="card">

            <h2>🔁 Revisão do Caderno de Erros</h2>

            <div class="aviso-farol aviso-farol-compacto">
                <strong>⭐ Acerte a revisão e ganhe 5 Pontos de Luz.</strong>
                <span>Ao acertar novamente, a questão será marcada como recuperada.</span>
            </div>

            <br>

            <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                ⬅ Voltar ao Caderno
            </button>

            <br><br>

            ${item.texto ? `
                <div class="card texto-base">
                    <h3>📄 Texto de Apoio</h3>
                    <br>
                    <p>${item.texto}</p>
                </div>
                <br>
            ` : ""}

            ${item.imagem ? `
                <img src="${item.imagem}" class="imagem-questao">
                <br><br>
            ` : ""}

            ${item.afirmacoes ? `
                <div class="card texto-base">
                    ${item.afirmacoes.map(af => `<p>${af}</p>`).join("")}
                </div>
                <br>
            ` : ""}

            <p class="pergunta">${item.pergunta}</p>

            <br>

            ${item.alternativas.map((alt, i) => `
                <label class="alternativa">
                    <input type="radio" name="respostaRevisao" value="${i}">
                    ${alt}
                </label>
            `).join("")}

            <br>

            <button onclick="corrigirRevisaoErro(${indice})">
                Responder Revisão
            </button>

            <div id="feedback"></div>

        </div>
    `;
}

function corrigirRevisaoErro(indice){

    const item = cadernoErros[indice];
    const resposta = document.querySelector('input[name="respostaRevisao"]:checked');

    if(!item || !resposta){
        mostrarToast("Selecione uma alternativa.");
        return;
    }

    const feedback = document.getElementById("feedback");

    document.querySelectorAll('input[name="respostaRevisao"]').forEach(opcao => {
        opcao.disabled = true;
    });

    if(Number(resposta.value) === item.correta){

        item.acertosRevisao = (item.acertosRevisao || 0) + 1;
        item.status = item.acertosRevisao >= 2 ? "corrigida" : "recuperacao";

        let pontosHTML = "";

        if(!item.pontosRevisaoGanhos){
            const ganhou = adicionarPontosLuz(
                5,
                "Revisão correta do caderno de erros",
                "revisao:" + item.idErro
            );

            if(ganhou){
                item.pontosRevisaoGanhos = true;
                pontosHTML = `<p class="pontos-luz-feedback">⭐ 5 Pontos de Luz pela revisão</p>`;
                registrarAtividadeDiaria("revisoes", 1);
            }
        }

        let botaoProximo = `
            <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                Voltar ao Caderno
            </button>
        `;

        let mensagemStatus = "";

        if(item.acertosRevisao >= 2){
            item.status = "corrigida";
            item.dataRecuperacao = Date.now();
            mensagemStatus = "✅ Erro recuperado! A questão foi marcada como recuperada.";
        }
        else{
            item.status = "recuperacao";
            mensagemStatus = "🟡 Muito bom! A questão ficou em revisão. Acerte novamente depois para marcar como recuperada.";
        }

        salvarDados();
        atualizarCadernoErros();

        feedback.innerHTML = `
            <div class="feedback-acerto">
                <h3>✅ Resposta Correta!</h3>
                ${pontosHTML}
                <br>
                <p>${mensagemStatus}</p>
                <br>
                ${item.feedbackAcerto || "Boa revisão!"}
                <br><br>
                ${botaoProximo}
            </div>
        `;
    }
    else{

        item.erros = (item.erros || 0) + 1;
        item.status = "pendente";
        item.data = Date.now();

        salvarDados();
        atualizarCadernoErros();

        feedback.innerHTML = `
            <div class="feedback-erro">
                <h3>❌ Ainda precisa revisar.</h3>
                <br>
                <strong>Resposta correta:</strong><br>
                ${item.respostaCorreta}
                <br><br>
                <strong>Explicação:</strong><br><br>
                ${item.feedbackErro || item.explicacao || "Sem explicação cadastrada."}
                <br><br>
                <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                    Voltar ao Caderno
                </button>
            </div>
        `;
    }
}

// ==========================
// COMPARTILHAR PROGRESSO
// ==========================

function montarMensagemProgresso(){

    const respondidas = acertos + erros;
    const aproveitamento = respondidas > 0
        ? Math.round((acertos / respondidas) * 100)
        : 0;

    const nome = (usuarioForum || "Aluno").split(" ")[0];

    const avatar = valorEhImagemAvatar(lojaFarol.avatarAtual)
        ? ""
        : (lojaFarol.avatarAtual || "👤");
    const titulo = lojaFarol.tituloAtual ? `
🎖 Título: ${lojaFarol.tituloAtual}` : "";
    const linhaNome = avatar ? `${avatar} ${nome}` : nome;

    return `🚀 Meu progresso no Farol do Saber

${linhaNome}${titulo}
⭐ Pontos de Luz: ${pontosLuz}
✅ Acertos: ${acertos}
📚 Questões respondidas: ${respondidas}
📊 Aproveitamento: ${aproveitamento}%
🏆 Ranking: ${posicaoRankingUsuario}

Rumo à aprovação!`;
}

function criarCanvasCardProgresso(){

    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1350;

    const ctx = canvas.getContext("2d");
    const premium = !!lojaFarol.cardPremium;

    if(premium){
        const gradiente = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradiente.addColorStop(0, "#071a2f");
        gradiente.addColorStop(0.55, "#0d47a1");
        gradiente.addColorStop(1, "#f9a825");
        ctx.fillStyle = gradiente;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(255,248,225,0.97)";
        ctx.roundRect(70, 90, 940, 1170, 46);
        ctx.fill();

        ctx.strokeStyle = "#f9a825";
        ctx.lineWidth = 12;
        ctx.stroke();

        ctx.fillStyle = "#7a5200";
        ctx.font = "bold 34px Arial";
        ctx.textAlign = "center";
        ctx.fillText("CARD PREMIUM DE PROGRESSO", 540, 165);
    }
    else{
        const gradiente = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradiente.addColorStop(0, "#0d47a1");
        gradiente.addColorStop(1, "#1e88e5");
        ctx.fillStyle = gradiente;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.roundRect(90, 120, 900, 1110, 40);
        ctx.fill();
    }

    ctx.fillStyle = "#0d47a1";
    ctx.font = "bold 64px Arial";
    ctx.textAlign = "center";
    ctx.fillText("🗼 Farol do Saber", 540, premium ? 255 : 240);

    const nome = (usuarioForum || "Aluno").split(" ")[0];
    const respondidas = acertos + erros;
    const aproveitamento = respondidas > 0
        ? Math.round((acertos / respondidas) * 100)
        : 0;

    const avatar = valorEhImagemAvatar(lojaFarol.avatarAtual)
        ? ""
        : (lojaFarol.avatarAtual || "👤");
    const titulo = lojaFarol.tituloAtual || lojaFarol.nomeAvatarAtual || "Aprendiz do Farol";
    const linhaParabens = avatar
        ? `${avatar} Parabéns, ${nome}!`
        : `Parabéns, ${nome}!`;

    ctx.fillStyle = "#222";
    ctx.font = "bold 52px Arial";
    ctx.fillText(linhaParabens, 540, 370);

    ctx.fillStyle = premium ? "#7a5200" : "#1e88e5";
    ctx.font = "bold 36px Arial";
    ctx.fillText(titulo, 540, 425);

    ctx.fillStyle = "#222";
    ctx.font = "44px Arial";
    ctx.textAlign = "left";

    const linhas = [
        `⭐ ${pontosLuz} Pontos de Luz`,
        `✅ ${acertos} acertos`,
        `📚 ${respondidas} questões respondidas`,
        `📊 ${aproveitamento}% de aproveitamento`,
        `🏆 Ranking: ${posicaoRankingUsuario}`
    ];

    let y = 560;
    linhas.forEach(linha => {
        ctx.fillText(linha, 180, y);
        y += 95;
    });

    if(lojaFarol.medalhaEstudanteAtivo){
        ctx.fillStyle = "#f9a825";
        ctx.font = "bold 38px Arial";
        ctx.textAlign = "center";
        ctx.fillText("🏅 Medalha Estudante Ativo", 540, 980);
    }

    ctx.textAlign = "center";
    ctx.fillStyle = premium ? "#7a5200" : "#1e88e5";
    ctx.font = "bold 42px Arial";
    ctx.fillText("Rumo à aprovação!", 540, 1060);

    ctx.fillStyle = "#555";
    ctx.font = "30px Arial";
    ctx.fillText("Compartilhe seu progresso", 540, 1140);

    return canvas;
}

function canvasParaBlob(canvas){

    return new Promise(resolve => {

        canvas.toBlob(blob => {
            resolve(blob);
        }, "image/png");

    });
}

async function compartilharProgresso(){

    const texto = montarMensagemProgresso();

    try{

        const canvas = criarCanvasCardProgresso();
        const blob = await canvasParaBlob(canvas);

        if(blob){

            const arquivo = new File(
                [blob],
                "farol-do-saber-progresso.png",
                { type: "image/png" }
            );

            if(
                navigator.canShare &&
                navigator.canShare({ files: [arquivo] })
            ){

                await navigator.share({
                    title: "Meu progresso no Farol do Saber",
                    text: "Estou avançando no Farol do Saber! 🚀",
                    files: [arquivo]
                });

                return;

            }

        }

        if(navigator.share){

            await navigator.share({
                title: "Meu progresso no Farol do Saber",
                text: texto,
                url: window.location.href
            });

            return;

        }

        copiarTextoProgresso();

    }catch(erro){

        if(
            erro &&
            erro.name === "AbortError"
        ){
            return;
        }

        console.log("Não foi possível compartilhar o card:", erro);
        copiarTextoProgresso();

    }

}

function copiarTextoProgresso(){

    const texto = montarMensagemProgresso();

    if(navigator.clipboard){
        navigator.clipboard.writeText(texto);
        mostrarToast("Progresso copiado. Agora é só colar onde quiser compartilhar.");
        return;
    }

    prompt("Copie seu progresso:", texto);
}

function baixarCardProgresso(){

    const canvas = criarCanvasCardProgresso();

    const link = document.createElement("a");
    link.download = "progresso-farol-do-saber.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

// Mantém compatibilidade caso algum navegador esteja com arquivo antigo em cache.
function compartilharWhatsApp(){
    compartilharProgresso();
}

function compartilharFacebook(){
    compartilharProgresso();
}

// ==========================
// LOJA DO FAROL
// ==========================

const recompensasLojaFarol = [
    {
        id: "avatar_aprendiz",
        categoria: "avatares_gratuitos",
        tipo: "avatar",
        icone: "imagens/avatares/iniciante.webp",
        nome: "Avatar Aprendiz do Farol",
        custo: 0,
        descricao: "Avatar gratuito para quem está começando sua jornada no Farol do Saber.",
        avatarMasculino: "imagens/avatares/iniciante.webp",
        avatarFeminino: "imagens/avatares/iniciante_feminino.webp",
        nomeAvatarMasculino: "Aprendiz do Farol",
        nomeAvatarFeminino: "Aprendiz do Farol"
    },
    {
        id: "avatar_faroleiro",
        categoria: "avatares_premium",
        tipo: "avatar",
        icone: "imagens/avatares/faroleiro.webp",
        nome: "Avatar Faroleiro do Saber",
        custo: 500,
        descricao: "Avatar especial para aparecer no perfil, ranking, fórum e duelos.",
        avatarMasculino: "imagens/avatares/faroleiro.webp",
        avatarFeminino: "imagens/avatares/faroleira.webp",
        nomeAvatarMasculino: "Faroleiro do Saber",
        nomeAvatarFeminino: "Faroleira do Saber"
    },
    {
        id: "avatar_navegador",
        categoria: "avatares_premium",
        tipo: "avatar",
        icone: "imagens/avatares/navegador.webp",
        nome: "Avatar Navegador do Saber",
        custo: 800,
        descricao: "Avatar com identidade marítima e visual de jornada.",
        avatarMasculino: "imagens/avatares/navegador.webp",
        avatarFeminino: "imagens/avatares/navegadora.webp",
        nomeAvatarMasculino: "Navegador do Saber",
        nomeAvatarFeminino: "Navegadora do Saber"
    },
    {
        id: "avatar_capitao",
        categoria: "avatares_premium",
        tipo: "avatar",
        icone: "imagens/avatares/capitao.webp",
        nome: "Avatar Capitão do Saber",
        custo: 1000,
        descricao: "Avatar para quem comanda a própria jornada de estudos.",
        avatarMasculino: "imagens/avatares/capitao.webp",
        avatarFeminino: "imagens/avatares/capita.webp",
        nomeAvatarMasculino: "Capitão do Saber",
        nomeAvatarFeminino: "Capitã do Saber"
    },
    {
        id: "avatar_mestre",
        categoria: "avatares_premium",
        tipo: "avatar",
        icone: "imagens/avatares/mestre.webp",
        nome: "Avatar Mestre das Questões",
        custo: 1200,
        descricao: "Avatar para quem gosta de mostrar desempenho nas questões.",
        avatarMasculino: "imagens/avatares/mestre.webp",
        avatarFeminino: "imagens/avatares/mestra.webp",
        nomeAvatarMasculino: "Mestre das Questões",
        nomeAvatarFeminino: "Mestra das Questões"
    },
    {
        id: "medalha_estudante_ativo",
        categoria: "titulos_medalhas",
        tipo: "medalha",
        icone: "🏅",
        nome: "Medalha Estudante Ativo",
        custo: 500,
        descricao: "Aparece no perfil, no ranking e no card de progresso."
    },
    {
        id: "titulo_guardiao_farol",
        categoria: "titulos_medalhas",
        tipo: "titulo",
        icone: "🎖",
        nome: "Título Guardião do Farol",
        tituloAplicado: "Guardião do Farol",
        custo: 800,
        descricao: "Título especial exibido no perfil, ranking e compartilhamento."
    },
    {
        id: "titulo_mestre_questoes",
        categoria: "titulos_medalhas",
        tipo: "titulo",
        icone: "🧠",
        nome: "Título Mestre das Questões",
        tituloAplicado: "Mestre das Questões",
        custo: 1200,
        descricao: "Título especial para alunos que gostam de mostrar domínio nas questões."
    },
    {
        id: "titulo_faroleiro_persistente",
        categoria: "titulos_medalhas",
        tipo: "titulo",
        icone: "🗼",
        nome: "Título Faroleiro Persistente",
        tituloAplicado: "Faroleiro Persistente",
        custo: 1500,
        descricao: "Título especial para quem mantém constância na jornada de estudos."
    },
    {
        id: "card_premium_progresso",
        categoria: "extras_progresso",
        tipo: "card",
        icone: "📤",
        nome: "Card Premium de Progresso",
        custo: 1000,
        descricao: "Deixa o card de compartilhamento mais bonito e destacado."
    },
    {
        id: "certificado_digital",
        categoria: "certificados",
        tipo: "certificado",
        icone: "📜",
        nome: "Certificado Digital de Destaque",
        custo: 2000,
        requisito: "100 acertos",
        descricao: "Gera um certificado de participação e desempenho no Farol do Saber."
    }
];

function valorEhImagemAvatar(valor){
    return typeof valor === "string" && /\.(png|jpg|jpeg|webp|gif)$/i.test(valor);
}

function montarAvatarHTML(valor, nome, classe){
    const classeFinal = classe || "avatar-pequeno";
    const nomeSeguro = escaparHTML(nome || "Avatar");

    if(!valor){
        return `<span class="${classeFinal}">👤</span>`;
    }

    if(valorEhImagemAvatar(valor)){
        const srcSeguro = String(valor || "")
            .replaceAll('"', "%22")
            .replaceAll("'", "%27");

        return `
            <img
                src="${srcSeguro}"
                alt="${nomeSeguro}"
                class="${classeFinal}"
                loading="lazy">
        `;
    }

    return `<span class="${classeFinal}">${escaparHTML(valor)}</span>`;
}

function obterVersaoAvatarItem(item){
    let genero = localStorage.getItem("farol_genero_avatar") || "";

    if(!genero){
        const escolha = prompt(
            "Escolha a versão do avatar:\n1 - Masculino\n2 - Feminino"
        );

        if(escolha === "1"){
            genero = "masculino";
        }
        else if(escolha === "2"){
            genero = "feminino";
        }
        else{
            return null;
        }

        localStorage.setItem("farol_genero_avatar", genero);
    }

    if(genero === "feminino"){
        return {
            avatar: item.avatarFeminino || item.avatar || "👤",
            nomeAvatar: item.nomeAvatarFeminino || item.nomeAvatar || item.nome || "Estudante"
        };
    }

    return {
        avatar: item.avatarMasculino || item.avatar || "👤",
        nomeAvatar: item.nomeAvatarMasculino || item.nomeAvatar || item.nome || "Estudante"
    };
}

function renderizarIconeLoja(item){
    if(item.tipo === "avatar"){
        const avatarMasculino =
            item.avatarMasculino ||
            item.avatar ||
            item.icone ||
            "👤";

        const avatarFeminino =
            item.avatarFeminino ||
            item.avatarMasculino ||
            item.avatar ||
            item.icone ||
            "👤";

        const nomeMasculino =
            item.nomeAvatarMasculino ||
            item.nomeAvatar ||
            item.nome ||
            "Avatar masculino";

        const nomeFeminino =
            item.nomeAvatarFeminino ||
            item.nomeAvatar ||
            item.nome ||
            "Avatar feminino";

        return `
            <div class="avatar-loja-dupla">
                <div class="avatar-opcao-loja">
                    ${montarAvatarHTML(
                        avatarMasculino,
                        nomeMasculino,
                        "avatar-loja-mini"
                    )}
                    <span>Masculino</span>
                </div>

                <div class="avatar-opcao-loja">
                    ${montarAvatarHTML(
                        avatarFeminino,
                        nomeFeminino,
                        "avatar-loja-mini"
                    )}
                    <span>Feminino</span>
                </div>
            </div>
        `;
    }

    return `<div class="icone-loja-emoji">${item.icone || "⭐"}</div>`;
}

function recompensaComprada(id){
    const item = obterRecompensaLoja(id);

    if(item && item.custo === 0){
        return true;
    }

    return !!(lojaFarol.comprados && lojaFarol.comprados[id]);
}

function obterRecompensaLoja(id){
    return recompensasLojaFarol.find(item => item.id === id);
}

function obterTituloAplicadoLoja(item){

    if(!item){
        return "";
    }

    if(item.tituloAplicado){
        return item.tituloAplicado;
    }

    return String(item.nome || "")
        .replace(/^Título\s+/i, "")
        .trim();

}

function gerarCodigoCertificado(){
    const ano = new Date().getFullYear();
    const numero = Math.floor(100000 + Math.random() * 900000);
    return `FAROL-${ano}-${numero}`;
}

function comprarRecompensaLoja(id){

    const item = obterRecompensaLoja(id);

    if(!item){
        mostrarToast("Recompensa não encontrada.");
        return;
    }

    if(recompensaComprada(id)){
        mostrarToast("Você já possui esta recompensa.");
        return;
    }

    if(item.id === "certificado_digital" && acertos < 100){
        mostrarToast("Para emitir o certificado, alcance pelo menos 100 acertos.");
        return;
    }

    if(saldoPontosLuz < item.custo){
        mostrarToast("Você ainda não tem Pontos de Luz suficientes para esta troca.");
        return;
    }

    const confirmar = confirm(
        `Trocar ${item.custo} Pontos de Luz por ${item.nome}?`
    );

    if(!confirmar){
        return;
    }

    saldoPontosLuz -= item.custo;

    lojaFarol.comprados[id] = {
        nome: item.nome,
        custo: item.custo,
        data: Date.now()
    };

    if(item.tipo === "medalha"){
        lojaFarol.medalhaEstudanteAtivo = true;
    }

    if(item.tipo === "titulo"){
        lojaFarol.tituloAtual = obterTituloAplicadoLoja(item);
    }

    if(item.tipo === "avatar"){
        const versaoAvatar = obterVersaoAvatarItem(item);

        if(!versaoAvatar){
            mostrarToast("Escolha do avatar cancelada.");
            return;
        }

        lojaFarol.avatarAtual = versaoAvatar.avatar;
        lojaFarol.nomeAvatarAtual = versaoAvatar.nomeAvatar;
    }

    if(item.tipo === "card"){
        lojaFarol.cardPremium = true;
    }

    if(item.tipo === "certificado"){
        lojaFarol.certificadoDigital = true;
        lojaFarol.codigoCertificado = lojaFarol.codigoCertificado || gerarCodigoCertificado();
        lojaFarol.dataCertificado = lojaFarol.dataCertificado || new Date().toLocaleDateString("pt-BR");

        setTimeout(() => {
            try{
                gerarCertificadoDigital();
            }catch(erro){
                console.log(erro);
            }
        }, 500);
    }

    salvarDados();
    atualizarDashboard();
    atualizarLojaFarol();
    salvarRankingFirebase();
    salvarLojaFirebase();

    mostrarToast("Recompensa desbloqueada com sucesso!");
}

function usarAvatarLoja(id){

    const item = obterRecompensaLoja(id);

    if(!item || item.tipo !== "avatar"){
        return;
    }

    if(!recompensaComprada(id)){
        mostrarToast("Você ainda não desbloqueou este avatar.");
        return;
    }

    const versaoAvatar = obterVersaoAvatarItem(item);

    if(!versaoAvatar){
        mostrarToast("Escolha do avatar cancelada.");
        return;
    }

    lojaFarol.avatarAtual = versaoAvatar.avatar;
    lojaFarol.nomeAvatarAtual = versaoAvatar.nomeAvatar;

    salvarDados();
    atualizarDashboard();
    atualizarLojaFarol();
    salvarRankingFirebase();
    salvarLojaFirebase();

    mostrarToast("Avatar aplicado ao seu perfil.");
}

function alterarVersaoAvatar(){
    localStorage.removeItem("farol_genero_avatar");
    mostrarToast("Escolha de versão liberada. Clique em usar avatar novamente.");
}

function recompensaEmUsoLoja(item){

    if(!item){
        return false;
    }

    if(item.tipo === "avatar"){
        return (
            lojaFarol.avatarAtual === item.avatarMasculino ||
            lojaFarol.avatarAtual === item.avatarFeminino ||
            lojaFarol.avatarAtual === item.avatar ||
            lojaFarol.nomeAvatarAtual === item.nomeAvatarMasculino ||
            lojaFarol.nomeAvatarAtual === item.nomeAvatarFeminino ||
            lojaFarol.nomeAvatarAtual === item.nomeAvatar
        );
    }

    if(item.tipo === "titulo"){
        return lojaFarol.tituloAtual === obterTituloAplicadoLoja(item);
    }

    if(item.tipo === "medalha"){
        return !!lojaFarol.medalhaEstudanteAtivo;
    }

    if(item.tipo === "card"){
        return !!lojaFarol.cardPremium;
    }

    if(item.tipo === "certificado"){
        return !!lojaFarol.certificadoDigital;
    }

    return false;

}

function classeStatusLoja(item, comprada, semSaldo, bloqueadaCertificado){

    if(recompensaEmUsoLoja(item)){
        return "em-uso";
    }

    if(comprada){
        return "comprado";
    }

    if(semSaldo || bloqueadaCertificado){
        return "bloqueado";
    }

    return "disponivel";

}

function textoStatusLoja(item, comprada, semSaldo, bloqueadaCertificado){

    if(recompensaEmUsoLoja(item)){
        return "✅ Em uso";
    }

    if(comprada){
        return "✅ Desbloqueado";
    }

    if(bloqueadaCertificado){
        return "🔒 Requisito pendente";
    }

    if(semSaldo){
        return "🔒 Pontos insuficientes";
    }

    return "🛒 Disponível para troca";

}

function montarAcaoLoja(item, comprada, semSaldo, bloqueadaCertificado){

    const emUso =
        recompensaEmUsoLoja(item);

    if(emUso){
        return "";
    }

    if(comprada){

        if(item.tipo === "avatar"){
            return `
                <button onclick="usarAvatarLoja('${item.id}')">
                    Usar avatar
                </button>
            `;
        }

        if(item.tipo === "titulo"){
            return `
                <button onclick="usarTituloLoja('${item.id}')">
                    Usar título
                </button>
            `;
        }

        if(item.tipo === "certificado"){
            return `
                <button onclick="gerarCertificadoDigital()">
                    📜 Ver certificado
                </button>
            `;
        }

        if(item.tipo === "card"){
            return `
                <button onclick="compartilharProgresso()">
                    📤 Compartilhar card premium
                </button>
            `;
        }

        return "";

    }

    if(item.custo === 0 && item.tipo === "avatar"){
        return `
            <button onclick="usarAvatarLoja('${item.id}')">
                Usar avatar
            </button>
        `;
    }

    return `
        <button
            onclick="comprarRecompensaLoja('${item.id}')"
            ${semSaldo || bloqueadaCertificado ? "disabled" : ""}>

            ${
                semSaldo
                ? "Pontos insuficientes"
                : bloqueadaCertificado
                ? "Requisito pendente"
                : "Trocar por " + item.custo + " ⭐"
            }

        </button>
    `;

}


function usarTituloLoja(id){

    const item =
        recompensasLojaFarol.find(
            recompensa => recompensa.id === id
        );

    if(!item){
        mostrarToast("Título não encontrado.");
        return;
    }

    if(!recompensaComprada(id)){
        mostrarToast("Você ainda não desbloqueou este título.");
        return;
    }

    lojaFarol.tituloAtual =
        obterTituloAplicadoLoja(item);

    salvarDados();
    atualizarLojaFarol();
    atualizarDashboard();
    atualizarPainelEstudos();
    salvarRankingFirebase();
    salvarLojaFirebase();

    mostrarToast("🎖 Título ativado!");

}



// ==========================
// JOGOS DO FAROL
// ==========================

let jogoFarolQuestoes = [];
let jogoFarolIndice = 0;
let jogoFarolAcertos = 0;
let jogoFarolErros = 0;
let jogoFarolDisciplina = "todas";
let jogoFarolRespondido = false;
let jogoFarolIdPartida = "";

const partesFarolJogo = [
    "Base",
    "Torre",
    "Janela",
    "Luz",
    "Topo"
];

const disciplinasJogoFarol = {
    todas: {
        nome: "🗺️ Todas as disciplinas",
        assuntos: []
    },
    portugues: {
        nome: "📖 Língua Portuguesa",
        assuntos: [
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
        ]
    },
    informatica: {
        nome: "💻 Informática",
        assuntos: [
            "hardware",
            "software",
            "arquivos",
            "office",
            "internet",
            "redes",
            "seguranca"
        ]
    },
    ciencias: {
        nome: "🔬 Professor de Ciências",
        assuntos: [
            "fundamentosCiencias",
            "bnccCiencias",
            "alfabetizacaoCientifica",
            "citologia",
            "ecologia",
            "terraEUniverso",
            "anatomiaFisiologia",
            "materiaQuimica",
            "fundamentosFisica"
        ]
    },
    historia: {
        nome: "📜 História",
        assuntos: [
            "fundamentosEnsinoHistoria",
            "cienciaHistoricaOficioHistoriador",
            "povosPreColombianos",
            "formacaoSocialCulturalBrasileira",
            "estadosModernosApropriacaoAmerica",
            "mercantilismoColonizacaoAmerica",
            "brasilColonialSociedadeEconomiaResistencias",
            "administracaoAmericaLusitanaColonial",
            "aspectosEconomicosFormasTrabalhoBrasilColonialImperial",
            "sociedadeColonialImperialBrasileira",
            "expansaoFronteirasAmericaPortuguesa"
        ]
    },
    didatica: {
        nome: "📚 Didática e Legislação",
        assuntos: [
            "bncc",
            "ldb",
            "eca",
            "pne",
            "fundeb",
            "lbi",
            "tea",
            "inclusiva",
            "etnicoRacial",
            "educacaoCampo",
            "quilombola",
            "indigena",
            "didatica",
            "planejamento",
            "avaliacao",
            "curriculo"
        ]
    },
    etica: {
        nome: "⚖️ Ética no Serviço Público",
        assuntos: [
            "eticaConceitos",
            "principiosAdministracao",
            "deveresServidor",
            "condutaEtica",
            "lai",
            "lgpd"
        ]
    },
    apoioEscolar: {
        nome: "👨‍🏫 Apoio Escolar",
        assuntos: [
            "apoioOrganizacaoEducacao",
            "apoioLDB",
            "apoioECA",
            "apoioLBI",
            "apoioTEA",
            "apoioPoliticaEducacaoEspecial",
            "apoioBNCCDiretrizes",
            "apoioEducacaoInclusiva",
            "apoioPapelProfissional",
            "apoioTrabalhoColaborativo"
        ]
    }
};

function abrirTelaJogosFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(area){
        area.innerHTML = "";
    }

}

function abrirJogoConstruaFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol">
            <h3>🧱 Construa o Farol</h3>
            <p>
                Escolha uma disciplina. O jogo sorteia 5 questões e cada acerto constrói uma parte do farol.
            </p>

            <div class="grid-disciplinas-jogo">
                ${Object.keys(disciplinasJogoFarol).map(chave => `
                    <button onclick="iniciarConstruaFarol('${chave}')">
                        ${disciplinasJogoFarol[chave].nome}
                    </button>
                `).join("")}
            </div>
        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function embaralharArrayJogo(lista){

    const copia =
        [...lista];

    for(
        let i = copia.length - 1;
        i > 0;
        i--
    ){
        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [copia[i], copia[j]] =
        [copia[j], copia[i]];
    }

    return copia;

}

function obterAssuntosJogoFarol(chaveDisciplina){

    if(chaveDisciplina === "todas"){

        const todos =
            Object.keys(disciplinasJogoFarol)
            .filter(chave => chave !== "todas")
            .flatMap(chave => disciplinasJogoFarol[chave].assuntos);

        return [...new Set(todos)];

    }

    return (
        disciplinasJogoFarol[chaveDisciplina] &&
        disciplinasJogoFarol[chaveDisciplina].assuntos
    ) || [];

}

function obterQuestoesJogoFarol(chaveDisciplina){

    const assuntos =
        obterAssuntosJogoFarol(chaveDisciplina);

    const questoes = [];

    assuntos.forEach(assunto => {

        const lista =
            bancoQuestoes[assunto];

        if(
            Array.isArray(lista) &&
            lista.length > 0
        ){
            lista.forEach((questao, indice) => {

                if(
                    questao &&
                    questao.pergunta &&
                    Array.isArray(questao.alternativas) &&
                    typeof questao.correta !== "undefined"
                ){
                    questoes.push({
                        ...questao,
                        assuntoJogo: assunto,
                        indiceOriginalJogo: indice,
                        disciplinaJogo: chaveDisciplina
                    });
                }

            });
        }

    });

    return embaralharArrayJogo(questoes);

}

function iniciarConstruaFarol(chaveDisciplina){

    const questoesDisponiveis =
        obterQuestoesJogoFarol(chaveDisciplina);

    if(questoesDisponiveis.length < 5){
        mostrarToast("Ainda não há questões suficientes para este jogo.");
        return;
    }

    jogoFarolQuestoes =
        questoesDisponiveis.slice(0, 5);

    jogoFarolIndice = 0;
    jogoFarolAcertos = 0;
    jogoFarolErros = 0;
    jogoFarolDisciplina = chaveDisciplina;
    jogoFarolRespondido = false;
    jogoFarolIdPartida = "jogo-farol-" + Date.now();

    mostrarQuestaoConstruaFarol();

}

function montarFarolVisualJogo(){

    const partesConstruidas =
        jogoFarolAcertos;

    return `
        <div class="farol-visual-jogo">
            ${partesFarolJogo.map((parte, indice) => `
                <div class="parte-farol-jogo ${indice < partesConstruidas ? "construida" : ""}">
                    <span>${indice < partesConstruidas ? "✅" : "⬜"}</span>
                    <strong>${parte}</strong>
                </div>
            `).join("")}
        </div>
    `;

}

function mostrarQuestaoConstruaFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const q =
        jogoFarolQuestoes[jogoFarolIndice];

    jogoFarolRespondido = false;

    const nomeDisciplina =
        disciplinasJogoFarol[jogoFarolDisciplina]
        ? disciplinasJogoFarol[jogoFarolDisciplina].nome
        : "🎯 Desafio";

    area.innerHTML = `
        <div class="painel-jogo-farol painel-jogo-ativo">

            <div class="cabecalho-jogo-farol">
                <div>
                    <h3>🧱 Construa o Farol</h3>
                    <p>${nomeDisciplina}</p>
                </div>

                <span>
                    Questão ${jogoFarolIndice + 1} de ${jogoFarolQuestoes.length}
                </span>
            </div>

            ${montarFarolVisualJogo()}

            <div class="placar-jogo-farol">
                <span>✅ Acertos: ${jogoFarolAcertos}</span>
                <span>❌ Erros: ${jogoFarolErros}</span>
                <span>⭐ ${jogoFarolAcertos * 10} Pontos</span>
            </div>

            <div class="questao-jogo-farol">

                ${q.texto ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.texto}
                    </div>
                ` : ""}

                ${q.imagem ? `
                    <img src="${q.imagem}" class="imagem-questao">
                ` : ""}

                ${q.afirmacoes ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.afirmacoes.map(af => `<p>${af}</p>`).join("")}
                    </div>
                ` : ""}

                <h3>${q.pergunta}</h3>

                <div class="alternativas-jogo-farol">
                    ${q.alternativas.map((alt, indice) => `
                        <button onclick="responderConstruaFarol(${indice})">
                            ${alt}
                        </button>
                    `).join("")}
                </div>

                <div id="feedbackJogoFarol"></div>

            </div>

        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function nomeAssuntoJogoFarol(assunto){

    const nomes = {
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
        arquivos: "📁 Arquivos",
        office: "📊 Office e LibreOffice",
        internet: "🌐 Internet e Correio Eletrônico",
        redes: "🌐 Redes de Computadores",
        seguranca: "🔒 Segurança da Informação",
        fundamentosCiencias: "🔬 Fundamentos do Ensino de Ciências",
        bnccCiencias: "📘 BNCC Ciências",
        alfabetizacaoCientifica: "🔬 Alfabetização Científica",
        citologia: "🧬 Citologia",
        ecologia: "🌿 Ecologia",
        terraEUniverso: "🌎 Terra e Universo",
        anatomiaFisiologia: "🫀 Anatomia e Fisiologia Humana",
        materiaQuimica: "⚗️ Matéria e Química",
        fundamentosFisica: "⚡ Fundamentos da Física",
        eticaConceitos: "⚖️ Ética no Serviço Público",
        principiosAdministracao: "🏛️ Princípios da Administração Pública",
        deveresServidor: "📋 Deveres do Servidor",
        condutaEtica: "🤝 Conduta Ética",
        lai: "🔎 LAI",
        lgpd: "🛡️ LGPD",
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
        quilombola: "🏘 Quilombola",
        indigena: "🪶 Educação Escolar Indígena",
        didatica: "📚 Didática",
        planejamento: "📋 Planejamento",
        avaliacao: "📊 Avaliação",
        curriculo: "📘 Currículo",
        fundamentosEnsinoHistoria: "📚 Fundamentos do Ensino de História",
        cienciaHistoricaOficioHistoriador: "🔎 Ciência Histórica",
        povosPreColombianos: "🏺 Povos Pré-Colombianos",
        formacaoSocialCulturalBrasileira: "🧬 Formação Social e Cultural Brasileira",
        estadosModernosApropriacaoAmerica: "🏛️ Estados Modernos e América",
        mercantilismoColonizacaoAmerica: "💰 Mercantilismo e Colonização",
        brasilColonialSociedadeEconomiaResistencias: "🌾 Brasil Colonial",
        administracaoAmericaLusitanaColonial: "🏛️ Administração Colonial",
        aspectosEconomicosFormasTrabalhoBrasilColonialImperial: "⚒️ Economia e Trabalho",
        sociedadeColonialImperialBrasileira: "🏛️ Sociedade Colonial e Imperial",
        influenciasIdeologiasLiberaisBrasilSeculoXVIII: "🕯️ Ideologias Liberais no Século XVIII",
        movimentosAnticoloniaisBrasil: "🔥 Movimentos Anticoloniais",
        cortePortuguesaFormacaoEstadoNacionalBrasileiro: "👑 Corte e Estado Nacional",
        estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro: "🏛️ Estado Imperial Brasileiro",
        revoltasMovimentosBrasilImperial: "⚔️ Revoltas Imperiais",
        expansaoFronteirasAmericaPortuguesa: "🗺️ Expansão das Fronteiras",
        apoioOrganizacaoEducacao: "🏫 Organização da Educação Básica",
        apoioLDB: "📘 LDB",
        apoioECA: "🧒 ECA",
        apoioLBI: "♿ LBI",
        apoioTEA: "🧩 TEA",
        apoioPoliticaEducacaoEspecial: "🌐 Educação Especial Inclusiva",
        apoioBNCCDiretrizes: "📚 BNCC e Diretrizes",
        apoioEducacaoInclusiva: "🤝 Educação Inclusiva",
        apoioPapelProfissional: "👨‍🏫 Papel do Profissional de Apoio",
        apoioTrabalhoColaborativo: "🛡️ Trabalho Colaborativo"
    };

    return nomes[assunto] || assunto;

}

function registrarErroJogoFarol(q){

    const respostaCorreta =
        q.alternativas[q.correta];

    const nomeDisciplina =
        nomeAssuntoJogoFarol(q.assuntoJogo);

    const indiceExistente =
        cadernoErros.findIndex(
            item =>
                item.disciplina === nomeDisciplina &&
                item.pergunta === q.pergunta
        );

    const dadosErro = {
        idErro: chaveQuestaoPontuacao("erro-jogo", q.assuntoJogo, q),
        assunto: q.assuntoJogo,
        disciplina: nomeDisciplina,
        pergunta: q.pergunta,
        texto: q.texto || "",
        imagem: q.imagem || "",
        afirmacoes: q.afirmacoes || null,
        alternativas: q.alternativas,
        correta: q.correta,
        respostaCorreta: respostaCorreta,
        explicacao: q.feedbackErro || q.explicacao || "",
        feedbackAcerto: q.feedbackAcerto || "",
        feedbackErro: q.feedbackErro || q.explicacao || "",
        dicaBanca: q.dicaBanca || "",
        data: Date.now(),
        status: "pendente"
    };

    if(indiceExistente >= 0){

        cadernoErros[indiceExistente] = {
            ...cadernoErros[indiceExistente],
            ...dadosErro,
            erros: (cadernoErros[indiceExistente].erros || 0) + 1
        };

    }
    else{

        cadernoErros.unshift({
            ...dadosErro,
            erros: 1,
            acertosRevisao: 0,
            pontosRevisaoGanhos: false
        });

    }

}

function responderConstruaFarol(indice){

    if(jogoFarolRespondido){
        return;
    }

    const q =
        jogoFarolQuestoes[jogoFarolIndice];

    const feedback =
        document.getElementById("feedbackJogoFarol");

    if(!feedback){
        return;
    }

    jogoFarolRespondido = true;

    const botoes =
        document.querySelectorAll(".alternativas-jogo-farol button");

    botoes.forEach((botao, i) => {
        botao.disabled = true;
        if(i === q.correta){
            botao.classList.add("correta");
        }
        if(i === indice && i !== q.correta){
            botao.classList.add("errada");
        }
    });

    if(indice === q.correta){

        jogoFarolAcertos++;

        acertos++;

        adicionarPontosLuz(
            10,
            "Jogo Construa o Farol",
            jogoFarolIdPartida + ":" + jogoFarolIndice
        );

        registrarAtividadeDiaria("acertos", 1);

        feedback.innerHTML = `
            <div class="feedback-acerto">
                <h3>✅ Acertou!</h3>
                <p>Você construiu mais uma parte do farol.</p>
                <p class="pontos-luz-feedback">⭐ 10 Pontos de Luz</p>
                <br>
                <button onclick="proximaQuestaoConstruaFarol()">
                    Próxima etapa
                </button>
            </div>
        `;

    }
    else{

        jogoFarolErros++;
        erros++;

        registrarErroJogoFarol(q);

        feedback.innerHTML = `
            <div class="feedback-erro">
                <h3>❌ Errou!</h3>
                <strong>Resposta correta:</strong><br>
                ${q.alternativas[q.correta]}
                <br><br>
                <strong>Explicação:</strong><br>
                ${q.feedbackErro || q.explicacao || "Sem explicação cadastrada."}
                <br><br>
                <button onclick="proximaQuestaoConstruaFarol()">
                    Próxima etapa
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

function proximaQuestaoConstruaFarol(){

    jogoFarolIndice++;

    if(jogoFarolIndice >= jogoFarolQuestoes.length){
        finalizarConstruaFarol();
        return;
    }

    mostrarQuestaoConstruaFarol();

}

function finalizarConstruaFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const percentual =
        Math.round(
            (jogoFarolAcertos / jogoFarolQuestoes.length) * 100
        );

    let mensagem = "Continue treinando para iluminar mais o seu farol.";

    if(jogoFarolAcertos === 5){
        mensagem = "Farol completo! Excelente desempenho.";
    }
    else if(jogoFarolAcertos >= 4){
        mensagem = "Ótimo resultado! Seu farol ficou quase completo.";
    }
    else if(jogoFarolAcertos >= 3){
        mensagem = "Bom avanço! Continue praticando.";
    }

    registrarAtividadeDiaria("simulados", 1);

    area.innerHTML = `
        <div class="painel-jogo-farol resultado-jogo-farol">

            <h3>🧱 Resultado — Construa o Farol</h3>

            ${montarFarolVisualJogo()}

            <div class="resultado-farol-percentual">
                <strong>${percentual}%</strong>
                <span>Farol construído</span>
            </div>

            <div class="perfil-grid-resumo resultado-grid-jogo">
                <div class="perfil-resumo-card">
                    <span>✅</span>
                    <strong>${jogoFarolAcertos}</strong>
                    <small>Acertos</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>❌</span>
                    <strong>${jogoFarolErros}</strong>
                    <small>Erros</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>⭐</span>
                    <strong>${jogoFarolAcertos * 10}</strong>
                    <small>Pontos ganhos</small>
                </div>
            </div>

            <p class="mensagem-final-jogo">
                ${mensagem}
            </p>

            <div class="botoes-final-jogo">
                <button onclick="abrirJogoConstruaFarol()">
                    🔁 Jogar novamente
                </button>

                <button onclick="mostrarTela('perfilAluno'); atualizarPerfilAluno();">
                    👤 Ver Perfil
                </button>

                <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                    ❌ Revisar erros
                </button>
            </div>

        </div>
    `;

    atualizarDashboard();
    atualizarPerfilAluno();
    salvarDados();

}


// ==========================
// JOGO DESAFIO RELÂMPAGO
// ==========================

let relampagoQuestoes = [];
let relampagoIndice = 0;
let relampagoAcertos = 0;
let relampagoErros = 0;
let relampagoDisciplina = "todas";
let relampagoRespondido = false;
let relampagoIdPartida = "";
let relampagoTempoRestante = 100;
let relampagoTimer = null;
let relampagoInicio = 0;
let relampagoFinalizado = false;

function abrirJogoDesafioRelampago(){

    pararTimerRelampago();

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol painel-relampago">
            <h3>⚡ Desafio Relâmpago</h3>
            <p>
                Escolha uma disciplina. O jogo sorteia 10 questões e você terá 100 segundos para responder.
            </p>

            <div class="aviso-jogo-relampago">
                <strong>Regras:</strong>
                <span>✅ Cada acerto vale 10 Pontos de Luz</span>
                <span>⏱ O jogo termina ao acabar o tempo</span>
                <span>❌ Questões erradas entram no Caderno de Erros</span>
            </div>

            <div class="grid-disciplinas-jogo">
                ${Object.keys(disciplinasJogoFarol).map(chave => `
                    <button onclick="iniciarDesafioRelampago('${chave}')">
                        ${disciplinasJogoFarol[chave].nome}
                    </button>
                `).join("")}
            </div>
        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function iniciarDesafioRelampago(chaveDisciplina){

    const questoesDisponiveis =
        obterQuestoesJogoFarol(chaveDisciplina);

    if(questoesDisponiveis.length < 10){
        mostrarToast("Ainda não há questões suficientes para o Desafio Relâmpago.");
        return;
    }

    relampagoQuestoes =
        questoesDisponiveis.slice(0, 10);

    relampagoIndice = 0;
    relampagoAcertos = 0;
    relampagoErros = 0;
    relampagoDisciplina = chaveDisciplina;
    relampagoRespondido = false;
    relampagoIdPartida = "desafio-relampago-" + Date.now();
    relampagoTempoRestante = 100;
    relampagoInicio = Date.now();
    relampagoFinalizado = false;

    iniciarTimerRelampago();
    mostrarQuestaoDesafioRelampago();

}

function iniciarTimerRelampago(){

    pararTimerRelampago();

    relampagoTimer =
        setInterval(() => {

            relampagoTempoRestante--;

            atualizarTempoRelampagoTela();

            if(relampagoTempoRestante <= 0){
                finalizarDesafioRelampago(true);
            }

        }, 1000);

}

function pararTimerRelampago(){

    if(relampagoTimer){
        clearInterval(relampagoTimer);
        relampagoTimer = null;
    }

}

function atualizarTempoRelampagoTela(){

    const areaTempo =
        document.getElementById("tempoRelampago");

    if(areaTempo){
        areaTempo.textContent =
            relampagoTempoRestante + "s";

        if(relampagoTempoRestante <= 20){
            areaTempo.classList.add("tempo-alerta");
        }
    }

    const barra =
        document.getElementById("barraTempoRelampago");

    if(barra){
        barra.value =
            relampagoTempoRestante;
    }

}

function mostrarQuestaoDesafioRelampago(){

    if(relampagoFinalizado){
        return;
    }

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const q =
        relampagoQuestoes[relampagoIndice];

    relampagoRespondido = false;

    const nomeDisciplina =
        disciplinasJogoFarol[relampagoDisciplina]
        ? disciplinasJogoFarol[relampagoDisciplina].nome
        : "🎯 Desafio";

    area.innerHTML = `
        <div class="painel-jogo-farol painel-relampago painel-relampago-ativo">

            <div class="cabecalho-jogo-farol cabecalho-relampago">
                <div>
                    <h3>⚡ Desafio Relâmpago</h3>
                    <p>${nomeDisciplina}</p>
                </div>

                <div class="tempo-relampago-area">
                    <span id="tempoRelampago">${relampagoTempoRestante}s</span>
                    <small>Tempo restante</small>
                </div>
            </div>

            <progress
                id="barraTempoRelampago"
                value="${relampagoTempoRestante}"
                max="100"
                class="barra-tempo-relampago">
            </progress>

            <div class="placar-jogo-farol">
                <span>Questão ${relampagoIndice + 1} de ${relampagoQuestoes.length}</span>
                <span>✅ Acertos: ${relampagoAcertos}</span>
                <span>❌ Erros: ${relampagoErros}</span>
                <span>⭐ ${relampagoAcertos * 10} Pontos</span>
            </div>

            <div class="questao-jogo-farol questao-relampago">

                ${q.texto ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.texto}
                    </div>
                ` : ""}

                ${q.imagem ? `
                    <img src="${q.imagem}" class="imagem-questao">
                ` : ""}

                ${q.afirmacoes ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.afirmacoes.map(af => `<p>${af}</p>`).join("")}
                    </div>
                ` : ""}

                <h3>${q.pergunta}</h3>

                <div class="alternativas-jogo-farol alternativas-relampago">
                    ${q.alternativas.map((alt, indice) => `
                        <button onclick="responderDesafioRelampago(${indice})">
                            ${alt}
                        </button>
                    `).join("")}
                </div>

                <div id="feedbackRelampago"></div>

            </div>

        </div>
    `;

    atualizarTempoRelampagoTela();

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function responderDesafioRelampago(indice){

    if(
        relampagoRespondido ||
        relampagoFinalizado
    ){
        return;
    }

    const q =
        relampagoQuestoes[relampagoIndice];

    const feedback =
        document.getElementById("feedbackRelampago");

    if(!feedback){
        return;
    }

    relampagoRespondido = true;

    const botoes =
        document.querySelectorAll(".alternativas-relampago button");

    botoes.forEach((botao, i) => {
        botao.disabled = true;

        if(i === q.correta){
            botao.classList.add("correta");
        }

        if(i === indice && i !== q.correta){
            botao.classList.add("errada");
        }
    });

    if(indice === q.correta){

        relampagoAcertos++;
        acertos++;

        adicionarPontosLuz(
            10,
            "Desafio Relâmpago",
            relampagoIdPartida + ":" + relampagoIndice
        );

        registrarAtividadeDiaria("acertos", 1);

        feedback.innerHTML = `
            <div class="feedback-acerto feedback-relampago">
                <strong>✅ Correta!</strong>
                <span>⭐ 10 Pontos de Luz</span>
            </div>
        `;

    }
    else{

        relampagoErros++;
        erros++;

        registrarErroJogoFarol(q);

        feedback.innerHTML = `
            <div class="feedback-erro feedback-relampago">
                <strong>❌ Incorreta!</strong>
                <span>Resposta: ${q.alternativas[q.correta]}</span>
            </div>
        `;

    }

    atualizarEstatisticas();
    atualizarDashboard();
    atualizarPainelEstudos();
    atualizarCadernoErros();
    salvarDados();

    setTimeout(() => {
        proximaQuestaoDesafioRelampago();
    }, 850);

}

function proximaQuestaoDesafioRelampago(){

    if(relampagoFinalizado){
        return;
    }

    relampagoIndice++;

    if(relampagoIndice >= relampagoQuestoes.length){
        finalizarDesafioRelampago(false);
        return;
    }

    mostrarQuestaoDesafioRelampago();

}

function finalizarDesafioRelampago(tempoEsgotado){

    if(relampagoFinalizado){
        return;
    }

    relampagoFinalizado = true;
    pararTimerRelampago();

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const respondidas =
        relampagoAcertos + relampagoErros;

    const naoRespondidas =
        Math.max(
            relampagoQuestoes.length - respondidas,
            0
        );

    relampagoErros += naoRespondidas;

    const tempoUsado =
        Math.max(
            0,
            Math.round((Date.now() - relampagoInicio) / 1000)
        );

    const aproveitamento =
        relampagoQuestoes.length > 0
        ? Math.round((relampagoAcertos / relampagoQuestoes.length) * 100)
        : 0;

    let mensagem =
        "Continue treinando para ganhar mais velocidade.";

    if(relampagoAcertos === 10){
        mensagem = "Perfeito! Você venceu o Desafio Relâmpago.";
    }
    else if(relampagoAcertos >= 8){
        mensagem = "Excelente! Você foi muito bem no tempo.";
    }
    else if(relampagoAcertos >= 6){
        mensagem = "Bom resultado! Continue praticando.";
    }

    if(tempoEsgotado){
        mensagem =
            "⏱ Tempo esgotado! " + mensagem;
    }

    registrarAtividadeDiaria("simulados", 1);

    area.innerHTML = `
        <div class="painel-jogo-farol resultado-jogo-farol resultado-relampago">

            <h3>⚡ Resultado — Desafio Relâmpago</h3>

            <div class="resultado-farol-percentual resultado-relampago-circulo">
                <strong>${aproveitamento}%</strong>
                <span>Aproveitamento</span>
            </div>

            <div class="perfil-grid-resumo resultado-grid-jogo">
                <div class="perfil-resumo-card">
                    <span>✅</span>
                    <strong>${relampagoAcertos}</strong>
                    <small>Acertos</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>❌</span>
                    <strong>${relampagoErros}</strong>
                    <small>Erros</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>⭐</span>
                    <strong>${relampagoAcertos * 10}</strong>
                    <small>Pontos ganhos</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>⏱</span>
                    <strong>${tempoUsado}s</strong>
                    <small>Tempo usado</small>
                </div>
            </div>

            <p class="mensagem-final-jogo">
                ${mensagem}
            </p>

            <div class="botoes-final-jogo">
                <button onclick="abrirJogoDesafioRelampago()">
                    🔁 Jogar novamente
                </button>

                <button onclick="mostrarTela('perfilAluno'); atualizarPerfilAluno();">
                    👤 Ver Perfil
                </button>

                <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                    ❌ Revisar erros
                </button>
            </div>

        </div>
    `;

    atualizarDashboard();
    atualizarPerfilAluno();
    salvarDados();

}



// ==========================
// JOGO CAÇA AOS ERROS
// ==========================

let cacaErrosQuestoes = [];
let cacaErrosIndice = 0;
let cacaErrosAcertos = 0;
let cacaErrosErros = 0;
let cacaErrosPontos = 0;
let cacaErrosRespondido = false;
let cacaErrosIdPartida = "";

function abrirJogoCacaErros(){

    if(typeof pararTimerRelampago === "function"){
        pararTimerRelampago();
    }

    if(typeof pararPreviewMemoria === "function"){
        pararPreviewMemoria();
    }

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const errosDisponiveis =
        obterQuestoesCacaErros();

    if(errosDisponiveis.length === 0){

        area.innerHTML = `
            <div class="painel-jogo-farol painel-caca-erros">
                <h3>🔎 Caça aos Erros</h3>

                <div class="estado-vazio-caca-erros">
                    <div class="icone-jogo">🎉</div>
                    <h3>Seu Caderno de Erros está limpo!</h3>
                    <p>
                        Quando você errar questões nas disciplinas ou nos jogos, elas aparecerão aqui para revisão.
                    </p>

                    <div class="botoes-final-jogo">
                        <button onclick="mostrarTela('questoes')">
                            🧭 Ir para Rota de Estudos
                        </button>

                        <button onclick="abrirJogoConstruaFarol()">
                            🧱 Jogar Construa o Farol
                        </button>
                    </div>
                </div>
            </div>
        `;

        area.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        return;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol painel-caca-erros">
            <h3>🔎 Caça aos Erros</h3>
            <p>
                Responda novamente as questões que você errou. Cada erro recuperado vale 5 Pontos de Luz.
            </p>

            <div class="aviso-jogo-caca">
                <strong>Como funciona:</strong>
                <span>✅ Acertou: questão marcada como recuperada</span>
                <span>⭐ Recuperação correta: até 5 Pontos de Luz</span>
                <span>❌ Errou: questão continua no Caderno de Erros</span>
            </div>

            <div class="resumo-caca-erros">
                <div>
                    <strong>${errosDisponiveis.length}</strong>
                    <span>questões disponíveis</span>
                </div>

                <div>
                    <strong>${Math.min(5, errosDisponiveis.length)}</strong>
                    <span>questões nesta partida</span>
                </div>
            </div>

            <button onclick="iniciarCacaErros()">
                🔎 Iniciar Caça aos Erros
            </button>
        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function obterQuestoesCacaErros(){

    if(!Array.isArray(cadernoErros)){
        cadernoErros = [];
    }

    return cadernoErros.filter(item => {

        return (
            item &&
            item.pergunta &&
            Array.isArray(item.alternativas) &&
            typeof item.correta !== "undefined" &&
            item.status !== "recuperada"
        );

    });

}

function iniciarCacaErros(){

    const errosDisponiveis =
        obterQuestoesCacaErros();

    if(errosDisponiveis.length === 0){
        mostrarToast("Não há erros pendentes para revisar.");
        abrirJogoCacaErros();
        return;
    }

    cacaErrosQuestoes =
        embaralharArrayJogo(errosDisponiveis)
        .slice(0, 5);

    cacaErrosIndice = 0;
    cacaErrosAcertos = 0;
    cacaErrosErros = 0;
    cacaErrosPontos = 0;
    cacaErrosRespondido = false;
    cacaErrosIdPartida = "caca-erros-" + Date.now();

    mostrarQuestaoCacaErros();

}

function mostrarQuestaoCacaErros(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const q =
        cacaErrosQuestoes[cacaErrosIndice];

    cacaErrosRespondido = false;

    area.innerHTML = `
        <div class="painel-jogo-farol painel-caca-erros painel-caca-ativo">

            <div class="cabecalho-jogo-farol cabecalho-caca-erros">
                <div>
                    <h3>🔎 Caça aos Erros</h3>
                    <p>${q.disciplina || "Questão do Caderno de Erros"}</p>
                </div>

                <span>
                    Questão ${cacaErrosIndice + 1} de ${cacaErrosQuestoes.length}
                </span>
            </div>

            <div class="placar-jogo-farol">
                <span>✅ Recuperadas: ${cacaErrosAcertos}</span>
                <span>❌ Ainda erradas: ${cacaErrosErros}</span>
                <span>⭐ ${cacaErrosPontos} Pontos</span>
            </div>

            <div class="progresso-caca-erros">
                ${cacaErrosQuestoes.map((_, indice) => `
                    <span class="${indice < cacaErrosIndice ? "feito" : indice === cacaErrosIndice ? "atual" : ""}">
                        ${indice + 1}
                    </span>
                `).join("")}
            </div>

            <div class="questao-jogo-farol questao-caca-erros">

                ${q.texto ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.texto}
                    </div>
                ` : ""}

                ${q.imagem ? `
                    <img src="${q.imagem}" class="imagem-questao">
                ` : ""}

                ${q.afirmacoes ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.afirmacoes.map(af => `<p>${af}</p>`).join("")}
                    </div>
                ` : ""}

                <h3>${q.pergunta}</h3>

                <div class="alternativas-jogo-farol alternativas-caca-erros">
                    ${q.alternativas.map((alt, indice) => `
                        <button onclick="responderCacaErros(${indice})">
                            ${alt}
                        </button>
                    `).join("")}
                </div>

                <div id="feedbackCacaErros"></div>

            </div>

        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function atualizarItemCadernoErroRecuperado(q, acertou){

    const indice =
        cadernoErros.findIndex(item => {

            if(q.idErro && item.idErro){
                return item.idErro === q.idErro;
            }

            return item.pergunta === q.pergunta;
        });

    if(indice < 0){
        return false;
    }

    if(acertou){

        const jaPontuado =
            cadernoErros[indice].pontosRevisaoGanhos === true;

        cadernoErros[indice] = {
            ...cadernoErros[indice],
            status: "recuperada",
            acertosRevisao: (cadernoErros[indice].acertosRevisao || 0) + 1,
            dataRecuperacao: Date.now(),
            pontosRevisaoGanhos: true
        };

        return !jaPontuado;

    }

    cadernoErros[indice] = {
        ...cadernoErros[indice],
        status: "em-revisao",
        erros: (cadernoErros[indice].erros || 0) + 1,
        data: Date.now()
    };

    return false;

}

function responderCacaErros(indiceResposta){

    if(cacaErrosRespondido){
        return;
    }

    const q =
        cacaErrosQuestoes[cacaErrosIndice];

    const feedback =
        document.getElementById("feedbackCacaErros");

    if(!feedback){
        return;
    }

    cacaErrosRespondido = true;

    const botoes =
        document.querySelectorAll(".alternativas-caca-erros button");

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if(indice === q.correta){
            botao.classList.add("correta");
        }

        if(indice === indiceResposta && indice !== q.correta){
            botao.classList.add("errada");
        }

    });

    if(indiceResposta === q.correta){

        cacaErrosAcertos++;
        acertos++;

        const devePontuar =
            atualizarItemCadernoErroRecuperado(q, true);

        if(devePontuar){

            adicionarPontosLuz(
                5,
                "Caça aos Erros",
                "caca-erros:" + (q.idErro || q.pergunta)
            );

            cacaErrosPontos += 5;

            registrarAtividadeDiaria("revisoes", 1);

        }

        feedback.innerHTML = `
            <div class="feedback-acerto">
                <h3>✅ Erro recuperado!</h3>
                <p>
                    Você acertou uma questão que estava no Caderno de Erros.
                </p>
                ${devePontuar
                    ? `<p class="pontos-luz-feedback">⭐ 5 Pontos de Luz</p>`
                    : `<p class="pontos-luz-feedback neutro">⭐ Essa questão já havia gerado pontos de revisão antes.</p>`
                }
                <br>
                <button onclick="proximaQuestaoCacaErros()">
                    Próxima caça
                </button>
            </div>
        `;

    }
    else{

        cacaErrosErros++;
        erros++;

        atualizarItemCadernoErroRecuperado(q, false);

        feedback.innerHTML = `
            <div class="feedback-erro">
                <h3>❌ Ainda precisa revisar!</h3>

                <strong>Resposta correta:</strong><br>
                ${q.alternativas[q.correta]}

                <br><br>

                <strong>Explicação:</strong><br>
                ${q.feedbackErro || q.explicacao || "Sem explicação cadastrada."}

                <br><br>

                <button onclick="proximaQuestaoCacaErros()">
                    Próxima caça
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

function proximaQuestaoCacaErros(){

    cacaErrosIndice++;

    if(cacaErrosIndice >= cacaErrosQuestoes.length){
        finalizarCacaErros();
        return;
    }

    mostrarQuestaoCacaErros();

}

function finalizarCacaErros(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const aproveitamento =
        cacaErrosQuestoes.length > 0
        ? Math.round((cacaErrosAcertos / cacaErrosQuestoes.length) * 100)
        : 0;

    let mensagem =
        "Continue revisando. Cada erro recuperado fortalece seu aprendizado.";

    if(cacaErrosAcertos === cacaErrosQuestoes.length){
        mensagem = "Excelente! Você recuperou todos os erros desta partida.";
    }
    else if(cacaErrosAcertos >= 3){
        mensagem = "Muito bom! Você recuperou vários erros.";
    }

    area.innerHTML = `
        <div class="painel-jogo-farol resultado-jogo-farol resultado-caca-erros">

            <h3>🔎 Resultado — Caça aos Erros</h3>

            <div class="resultado-farol-percentual resultado-caca-circulo">
                <strong>${aproveitamento}%</strong>
                <span>Erros recuperados</span>
            </div>

            <div class="perfil-grid-resumo resultado-grid-jogo">
                <div class="perfil-resumo-card">
                    <span>✅</span>
                    <strong>${cacaErrosAcertos}</strong>
                    <small>Recuperadas</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>❌</span>
                    <strong>${cacaErrosErros}</strong>
                    <small>Ainda erradas</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>⭐</span>
                    <strong>${cacaErrosPontos}</strong>
                    <small>Pontos ganhos</small>
                </div>
            </div>

            <p class="mensagem-final-jogo">
                ${mensagem}
            </p>

            <div class="botoes-final-jogo">
                <button onclick="abrirJogoCacaErros()">
                    🔁 Jogar novamente
                </button>

                <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                    ❌ Ver Caderno de Erros
                </button>

                <button onclick="mostrarTela('perfilAluno'); atualizarPerfilAluno();">
                    👤 Ver Perfil
                </button>
            </div>

        </div>
    `;

    atualizarDashboard();
    atualizarPerfilAluno();
    atualizarCadernoErros();
    salvarDados();

}



// ==========================
// JOGO MEMÓRIA DO SABER
// ==========================

let memoriaCartas = [];
let memoriaSelecionadas = [];
let memoriaParesEncontrados = 0;
let memoriaTentativas = 0;
let memoriaBloqueada = false;
let memoriaDisciplina = "todas";
let memoriaIdPartida = "";
let memoriaPontos = 0;
let memoriaModoFarol = false;
let memoriaVez = "aluno";
let memoriaParesAluno = 0;
let memoriaParesFarol = 0;
let memoriaHistoricoFarol = {};
let memoriaPreviewAtivo = false;
let memoriaTempoPreview = 30;
let memoriaPreviewTimer = null;

function pararPreviewMemoria(){

    if(memoriaPreviewTimer){
        clearInterval(memoriaPreviewTimer);
        memoriaPreviewTimer = null;
    }

}

function abrirJogoMemoriaSaber(){

    if(typeof pararTimerRelampago === "function"){
        pararTimerRelampago();
    }

    if(typeof pararPreviewMemoria === "function"){
        pararPreviewMemoria();
    }

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol painel-memoria">
            <h3>🧠 Memória do Saber</h3>
            <p>
                Escolha o modo de jogo.
            </p>

            <div class="modos-memoria-saber">

                <div class="modo-memoria-card">
                    <div class="icone-jogo">👤</div>
                    <h3>Jogar sozinho</h3>
                    <p>
                        Treine sua memória encontrando os pares de pergunta e resposta.
                    </p>
                    <button onclick="escolherModoMemoriaSaber(false)">
                        Jogar sozinho
                    </button>
                </div>

                <div class="modo-memoria-card modo-farol">
                    <div class="icone-jogo">🗼</div>
                    <h3>Você x Farol</h3>
                    <p>
                        Dispute contra o Farol. Quem encontrar mais pares vence.
                    </p>
                    <button onclick="escolherModoMemoriaSaber(true)">
                        Jogar contra o Farol
                    </button>
                </div>

            </div>
        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function limitarTextoMemoria(texto, limite){

    const bruto =
        String(texto || "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    if(bruto.length <= limite){
        return bruto;
    }

    return bruto.substring(0, limite).trim() + "...";

}

function escolherModoMemoriaSaber(contraFarol){

    memoriaModoFarol = contraFarol === true;

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol painel-memoria">
            <h3>🧠 Memória do Saber</h3>
            <p>
                ${memoriaModoFarol
                    ? "Modo escolhido: 🗼 Você x Farol"
                    : "Modo escolhido: 👤 Jogar sozinho"}
            </p>

            <div class="aviso-jogo-memoria">
                <strong>Regras:</strong>
                <span>📌 Perguntas ficam em cima</span>
                <span>✅ Respostas ficam embaixo</span>
                <span>👀 Você terá 30 segundos para visualizar</span>
                ${memoriaModoFarol
                    ? "<span>🗼 Se você errar, o Farol joga automaticamente</span>"
                    : "<span>🎯 Seu desempenho depende da quantidade de tentativas</span>"}
            </div>

            <div class="grid-disciplinas-jogo">
                ${Object.keys(disciplinasJogoFarol).map(chave => `
                    <button onclick="iniciarMemoriaSaber('${chave}')">
                        ${disciplinasJogoFarol[chave].nome}
                    </button>
                `).join("")}
            </div>

            <br>

            <button onclick="abrirJogoMemoriaSaber()">
                ⬅ Voltar aos modos
            </button>
        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function montarParesMemoriaSaber(chaveDisciplina){

    const questoesBase =
        obterQuestoesJogoFarol(chaveDisciplina);

    const pares = [];

    questoesBase.forEach(q => {

        if(
            !q ||
            !q.pergunta ||
            !Array.isArray(q.alternativas) ||
            typeof q.correta === "undefined"
        ){
            return;
        }

        const respostaCorreta =
            q.alternativas[q.correta];

        if(!respostaCorreta){
            return;
        }

        pares.push({
            pergunta: limitarTextoMemoria(q.pergunta, 105),
            resposta: limitarTextoMemoria(respostaCorreta, 105)
        });

    });

    return embaralharArrayJogo(pares);

}

function iniciarMemoriaSaber(chaveDisciplina){

    const paresDisponiveis =
        montarParesMemoriaSaber(chaveDisciplina);

    if(paresDisponiveis.length < 5){
        mostrarToast("Ainda não há pares suficientes para este jogo.");
        return;
    }

    pararPreviewMemoria();

    const paresDaPartida =
        paresDisponiveis.slice(0, 5);

    memoriaCartas = [];
    memoriaSelecionadas = [];
    memoriaParesEncontrados = 0;
    memoriaTentativas = 0;
    memoriaBloqueada = true;
    memoriaDisciplina = chaveDisciplina;
    memoriaIdPartida = "memoria-saber-" + Date.now();
    memoriaPontos = 0;
    memoriaPreviewAtivo = true;
    memoriaTempoPreview = 30;
    memoriaVez = "aluno";
    memoriaParesAluno = 0;
    memoriaParesFarol = 0;
    memoriaHistoricoFarol = {};

    paresDaPartida.forEach((par, indice) => {

        memoriaCartas.push({
            id: "p" + indice + "-pergunta",
            parId: "par-" + indice,
            tipo: "pergunta",
            titulo: "Pergunta",
            texto: par.pergunta,
            encontrada: false,
            dono: "",
            virada: true
        });

        memoriaCartas.push({
            id: "p" + indice + "-resposta",
            parId: "par-" + indice,
            tipo: "resposta",
            titulo: "Resposta",
            texto: par.resposta,
            encontrada: false,
            dono: "",
            virada: true
        });

    });

    memoriaCartas =
        embaralharArrayJogo(memoriaCartas);

    renderizarMemoriaSaber();

    memoriaPreviewTimer =
        setInterval(() => {

            memoriaTempoPreview--;

            const contador =
                document.getElementById("contadorPreviewMemoria");

            if(contador){
                contador.textContent = memoriaTempoPreview;
            }

            if(memoriaTempoPreview <= 0){

                pararPreviewMemoria();

                memoriaCartas.forEach(carta => {
                    carta.virada = false;
                });

                memoriaPreviewAtivo = false;
                memoriaBloqueada = false;
                memoriaSelecionadas = [];

                renderizarMemoriaSaber();

            }

        }, 1000);

}

function renderizarMemoriaSaber(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const nomeDisciplina =
        disciplinasJogoFarol[memoriaDisciplina]
        ? disciplinasJogoFarol[memoriaDisciplina].nome
        : "🎯 Desafio";

    const cartasPergunta =
        memoriaCartas
        .map((carta, indice) => ({ carta, indice }))
        .filter(item => item.carta.tipo === "pergunta");

    const cartasResposta =
        memoriaCartas
        .map((carta, indice) => ({ carta, indice }))
        .filter(item => item.carta.tipo === "resposta");

    function montarCartaMemoria(item){

        const carta = item.carta;
        const indice = item.indice;

        const aberta =
            carta.virada ||
            carta.encontrada ||
            memoriaPreviewAtivo;

        const classeDono =
            carta.dono === "aluno"
            ? "dono-aluno"
            : carta.dono === "farol"
            ? "dono-farol"
            : "";

        return `
            <button
                type="button"
                class="carta-memoria-simples ${aberta ? "aberta" : "fechada"} ${carta.encontrada ? "encontrada" : ""} ${classeDono} ${carta.tipo === "pergunta" ? "tipo-pergunta" : "tipo-resposta"}"
                onclick="virarCartaMemoria(${indice})"
                ${carta.encontrada || memoriaPreviewAtivo || (memoriaModoFarol && memoriaVez === "farol") ? "disabled" : ""}>

                ${aberta ? `
                    <span class="tag-carta-memoria">
                        ${carta.tipo === "pergunta" ? "📌 Pergunta" : "✅ Resposta"}
                    </span>

                    <p class="texto-carta-memoria">
                        ${carta.texto}
                    </p>

                    ${carta.dono ? `
                        <small class="dono-par-memoria">
                            ${carta.dono === "aluno" ? "👤 Seu par" : "🗼 Par do Farol"}
                        </small>
                    ` : ""}
                ` : `
                    <div class="carta-fechada-conteudo">
                        <span>🧠</span>
                        <strong>Farol</strong>
                    </div>
                `}
            </button>
        `;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol painel-memoria painel-memoria-ativo">

            <div class="cabecalho-jogo-farol cabecalho-memoria">
                <div>
                    <h3>🧠 Memória do Saber</h3>
                    <p>${nomeDisciplina}</p>
                </div>

                <span>
                    ${memoriaParesEncontrados} / 5 pares
                </span>
            </div>

            ${memoriaModoFarol ? `
                <div class="placar-memoria-farol">
                    <div class="placar-jogador-memoria ${memoriaVez === "aluno" ? "vez-ativa" : ""}">
                        <strong>${obterAvatarJogadorFarol()} ${obterNomeJogadorFarol()}</strong>
                        <span>${memoriaParesAluno} pares</span>
                    </div>

                    <div class="placar-jogador-memoria ${memoriaVez === "farol" ? "vez-ativa" : ""}">
                        <strong>🗼 Farol</strong>
                        <span>${memoriaParesFarol} pares</span>
                    </div>
                </div>
            ` : ""}

            ${memoriaPreviewAtivo ? `
                <div class="aviso-preview-memoria">
                    <strong>👀 Observe as cartas!</strong>
                    <span>
                        Elas vão fechar em
                        <b id="contadorPreviewMemoria">${memoriaTempoPreview}</b>
                        segundos.
                    </span>
                </div>
            ` : `
                <div class="aviso-jogo-memoria jogo-em-andamento-memoria">
                    <strong>${memoriaModoFarol
                        ? (memoriaVez === "aluno" ? "Sua vez!" : "Vez do Farol!")
                        : "Agora é sua vez!"}</strong>
                    <span>${memoriaModoFarol
                        ? (memoriaVez === "aluno"
                            ? "Escolha uma pergunta e uma resposta."
                            : "O Farol está escolhendo as cartas...")
                        : "Encontre o par: Pergunta + Resposta correta."}</span>
                </div>
            `}

            <div class="placar-jogo-farol">
                <span>✅ Pares: ${memoriaParesEncontrados}</span>
                <span>🔁 Tentativas: ${memoriaTentativas}</span>
                <span>⭐ ${memoriaPontos} Pontos</span>
            </div>

            <div class="bloco-linha-memoria">
                <h4>📌 Perguntas</h4>
                <div class="grade-memoria-saber memoria-simples linha-perguntas-memoria">
                    ${cartasPergunta.map(montarCartaMemoria).join("")}
                </div>
            </div>

            <div class="bloco-linha-memoria">
                <h4>✅ Respostas</h4>
                <div class="grade-memoria-saber memoria-simples linha-respostas-memoria">
                    ${cartasResposta.map(montarCartaMemoria).join("")}
                </div>
            </div>

            <div id="feedbackMemoriaSaber"></div>

            <div class="botoes-final-jogo area-botoes-memoria">
                <button onclick="abrirJogoMemoriaSaber()">
                    🔁 Reiniciar escolha
                </button>
            </div>

        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    if(
        memoriaModoFarol &&
        memoriaVez === "farol" &&
        !memoriaPreviewAtivo &&
        !memoriaBloqueada
    ){
        memoriaBloqueada = true;

        setTimeout(() => {
            jogarTurnoFarolMemoria();
        }, 900);
    }

}

function virarCartaMemoria(indice){

    if(
        memoriaBloqueada ||
        memoriaPreviewAtivo
    ){
        return;
    }

    const carta =
        memoriaCartas[indice];

    if(
        !carta ||
        carta.virada ||
        carta.encontrada
    ){
        return;
    }

    carta.virada = true;
    memoriaSelecionadas.push(indice);

    renderizarMemoriaSaber();

    if(memoriaSelecionadas.length === 2){
        verificarParMemoria();
    }

}

function verificarParMemoria(){

    memoriaBloqueada = true;
    memoriaTentativas++;

    const indice1 =
        memoriaSelecionadas[0];

    const indice2 =
        memoriaSelecionadas[1];

    const carta1 =
        memoriaCartas[indice1];

    const carta2 =
        memoriaCartas[indice2];

    const formouPar =
        carta1 &&
        carta2 &&
        carta1.parId === carta2.parId &&
        carta1.tipo !== carta2.tipo;

    const jogadorAtual =
        memoriaModoFarol ? memoriaVez : "aluno";

    if(formouPar){

        carta1.encontrada = true;
        carta2.encontrada = true;
        carta1.dono = jogadorAtual;
        carta2.dono = jogadorAtual;

        memoriaParesEncontrados++;
        memoriaPontos += jogadorAtual === "aluno" ? 2 : 0;

        if(jogadorAtual === "aluno"){
            memoriaParesAluno++;
        }
        else{
            memoriaParesFarol++;
        }

        memoriaSelecionadas = [];
        memoriaBloqueada = false;

        if(memoriaParesEncontrados >= 5){
            finalizarMemoriaSaber();
            return;
        }

        renderizarMemoriaSaber();

        const feedback =
            document.getElementById("feedbackMemoriaSaber");

        if(feedback){
            feedback.innerHTML = `
                <div class="feedback-acerto feedback-memoria">
                    ${jogadorAtual === "aluno"
                        ? "✅ Você encontrou um par e continua jogando!"
                        : "🗼 O Farol encontrou um par e continua jogando!"}
                </div>
            `;
        }

    }
    else{

        setTimeout(() => {

            if(carta1){
                carta1.virada = false;
            }

            if(carta2){
                carta2.virada = false;
            }

            memoriaSelecionadas = [];

            if(memoriaModoFarol){
                memoriaVez =
                    memoriaVez === "aluno"
                    ? "farol"
                    : "aluno";
            }

            memoriaBloqueada = false;
            renderizarMemoriaSaber();

            const feedback =
                document.getElementById("feedbackMemoriaSaber");

            if(feedback){
                feedback.innerHTML = `
                    <div class="feedback-erro feedback-memoria">
                        ${jogadorAtual === "aluno"
                            ? "❌ Não formou par. Agora é a vez do Farol."
                            : "🗼 O Farol não formou par. Agora é sua vez."}
                    </div>
                `;
            }

        }, 900);

    }

    salvarDados();

}

function escolherCartasFarolMemoria(){

    const abertas =
        memoriaCartas
        .map((carta, indice) => ({ carta, indice }))
        .filter(item => !item.carta.encontrada);

    const perguntas =
        abertas.filter(item => item.carta.tipo === "pergunta");

    const respostas =
        abertas.filter(item => item.carta.tipo === "resposta");

    // Farol nível fácil/médio: às vezes encontra par conhecido, mas muitas vezes escolhe aleatório.
    const chanceAcerto =
        Math.random();

    if(chanceAcerto < 0.38){

        for(const pergunta of perguntas){

            const resposta =
                respostas.find(item => item.carta.parId === pergunta.carta.parId);

            if(resposta){
                return [pergunta.indice, resposta.indice];
            }

        }

    }

    const perguntaAleatoria =
        perguntas[Math.floor(Math.random() * perguntas.length)];

    const respostaAleatoria =
        respostas[Math.floor(Math.random() * respostas.length)];

    if(
        perguntaAleatoria &&
        respostaAleatoria
    ){
        return [
            perguntaAleatoria.indice,
            respostaAleatoria.indice
        ];
    }

    return [];

}

function jogarTurnoFarolMemoria(){

    if(
        !memoriaModoFarol ||
        memoriaVez !== "farol" ||
        memoriaParesEncontrados >= 5
    ){
        memoriaBloqueada = false;
        return;
    }

    const escolha =
        escolherCartasFarolMemoria();

    if(escolha.length < 2){
        finalizarMemoriaSaber();
        return;
    }

    memoriaSelecionadas = escolha;

    escolha.forEach(indice => {
        if(memoriaCartas[indice]){
            memoriaCartas[indice].virada = true;
        }
    });

    renderizarMemoriaSaber();

    setTimeout(() => {
        verificarParMemoria();
    }, 1000);

}

function finalizarMemoriaSaber(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    let desempenho = "Em treinamento";
    let iconeDesempenho = "🔁";
    let bonus = 0;
    let mensagem =
        "Você encontrou todos os pares. Continue treinando para virar menos cartas.";

    if(memoriaModoFarol){

        if(memoriaParesAluno > memoriaParesFarol){
            desempenho = "Você venceu";
            iconeDesempenho = "🏆";
            bonus = 25;
            mensagem = "Excelente! Você venceu o Farol no jogo da memória.";
        }
        else if(memoriaParesAluno < memoriaParesFarol){
            desempenho = "Farol venceu";
            iconeDesempenho = "🗼";
            bonus = 0;
            mensagem = "O Farol venceu desta vez. Tente memorizar melhor na próxima.";
        }
        else{
            desempenho = "Empate";
            iconeDesempenho = "🤝";
            bonus = 10;
            mensagem = "Empate! Você e o Farol encontraram a mesma quantidade de pares.";
        }

    }
    else{

        if(memoriaTentativas <= 5){
            desempenho = "Perfeito";
            iconeDesempenho = "🏆";
            bonus = 25;
            mensagem = "Perfeito! Você encontrou todos os pares com o mínimo de tentativas.";
        }
        else if(memoriaTentativas <= 7){
            desempenho = "Excelente";
            iconeDesempenho = "⭐";
            bonus = 20;
            mensagem = "Excelente memória! Você virou poucas cartas e foi muito eficiente.";
        }
        else if(memoriaTentativas <= 10){
            desempenho = "Bom";
            iconeDesempenho = "✅";
            bonus = 10;
            mensagem = "Bom desempenho! Você encontrou os pares com poucas tentativas.";
        }
        else{
            desempenho = "Precisa treinar mais";
            iconeDesempenho = "📚";
            bonus = 0;
            mensagem = "Você completou o jogo, mas virou muitas cartas. Tente memorizar melhor na próxima.";
        }

    }

    const totalPontos =
        memoriaPontos + bonus;

    adicionarPontosLuz(
        totalPontos,
        "Memória do Saber",
        memoriaIdPartida
    );

    registrarAtividadeDiaria("acertos", 1);

    area.innerHTML = `
        <div class="painel-jogo-farol resultado-jogo-farol resultado-memoria">

            <h3>🧠 Resultado — Memória do Saber</h3>

            <div class="resultado-farol-percentual resultado-memoria-circulo">
                <strong>${iconeDesempenho}</strong>
                <span>${desempenho}</span>
            </div>

            ${memoriaModoFarol ? `
                <div class="placar-memoria-farol placar-final-memoria">
                    <div class="placar-jogador-memoria">
                        <strong>${obterAvatarJogadorFarol()} ${obterNomeJogadorFarol()}</strong>
                        <span>${memoriaParesAluno} pares</span>
                    </div>

                    <div class="placar-jogador-memoria">
                        <strong>🗼 Farol</strong>
                        <span>${memoriaParesFarol} pares</span>
                    </div>
                </div>
            ` : ""}

            <div class="perfil-grid-resumo resultado-grid-jogo">
                <div class="perfil-resumo-card">
                    <span>✅</span>
                    <strong>${memoriaModoFarol ? memoriaParesAluno : memoriaParesEncontrados}</strong>
                    <small>${memoriaModoFarol ? "Pares do aluno" : "Pares"}</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>🔁</span>
                    <strong>${memoriaTentativas}</strong>
                    <small>Tentativas</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>🎯</span>
                    <strong>${desempenho}</strong>
                    <small>Desempenho</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>⭐</span>
                    <strong>${totalPontos}</strong>
                    <small>Pontos ganhos</small>
                </div>
            </div>

            ${!memoriaModoFarol ? `
                <div class="tabela-desempenho-memoria">
                    <h4>📊 Critério de desempenho</h4>
                    <p>🏆 5 tentativas: Perfeito</p>
                    <p>⭐ 6 a 7 tentativas: Excelente</p>
                    <p>✅ 8 a 10 tentativas: Bom</p>
                    <p>📚 Acima de 10 tentativas: Precisa treinar mais</p>
                </div>
            ` : ""}

            <p class="mensagem-final-jogo">
                ${mensagem}
            </p>

            <div class="botoes-final-jogo">
                <button onclick="abrirJogoMemoriaSaber()">
                    🔁 Jogar novamente
                </button>

                <button onclick="mostrarTela('perfilAluno'); atualizarPerfilAluno();">
                    👤 Ver Perfil
                </button>
            </div>

        </div>
    `;

    atualizarDashboard();
    atualizarPerfilAluno();
    salvarDados();

}



// ==========================
// JOGO BATALHA DO SABER — VOCÊ X FAROL
// ==========================

let batalhaQuestoes = [];
let batalhaIndice = 0;
let batalhaVidasAluno = 5;
let batalhaVidasFarol = 5;
let batalhaAcertos = 0;
let batalhaErros = 0;
let batalhaDisciplina = "todas";
let batalhaRespondido = false;
let batalhaIdPartida = "";

function abrirJogoBatalhaFarol(){

    if(typeof pararTimerRelampago === "function"){
        pararTimerRelampago();
    }

    if(typeof pararPreviewMemoria === "function"){
        pararPreviewMemoria();
    }

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol painel-batalha">
            <h3>⚔️ Batalha do Saber</h3>
            <p>
                Enfrente o Farol em uma batalha de perguntas. Acerte para tirar vidas do Farol.
            </p>

            <div class="aviso-jogo-batalha">
                <strong>Regras:</strong>
                <span>👤 Você começa com 5 vidas</span>
                <span>🗼 O Farol começa com 5 vidas</span>
                <span>✅ Acertou: o Farol perde 1 vida</span>
                <span>❌ Errou: você perde 1 vida</span>
                <span>⭐ Vitória dá bônus de Pontos de Luz</span>
            </div>

            <div class="grid-disciplinas-jogo">
                ${Object.keys(disciplinasJogoFarol).map(chave => `
                    <button onclick="iniciarBatalhaFarol('${chave}')">
                        ${disciplinasJogoFarol[chave].nome}
                    </button>
                `).join("")}
            </div>
        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function iniciarBatalhaFarol(chaveDisciplina){

    const questoesDisponiveis =
        obterQuestoesJogoFarol(chaveDisciplina);

    if(questoesDisponiveis.length < 5){
        mostrarToast("Ainda não há questões suficientes para a Batalha do Saber.");
        return;
    }

    batalhaQuestoes =
        questoesDisponiveis.slice(0, 15);

    batalhaIndice = 0;
    batalhaVidasAluno = 5;
    batalhaVidasFarol = 5;
    batalhaAcertos = 0;
    batalhaErros = 0;
    batalhaDisciplina = chaveDisciplina;
    batalhaRespondido = false;
    batalhaIdPartida = "batalha-farol-" + Date.now();

    mostrarQuestaoBatalhaFarol();

}

function montarVidasBatalha(qtd){

    let html = "";

    for(let i = 0; i < 5; i++){
        html += i < qtd ? "❤️" : "🖤";
    }

    return html;

}

function mostrarQuestaoBatalhaFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    if(
        batalhaVidasAluno <= 0 ||
        batalhaVidasFarol <= 0 ||
        batalhaIndice >= batalhaQuestoes.length
    ){
        finalizarBatalhaFarol();
        return;
    }

    const q =
        batalhaQuestoes[batalhaIndice];

    batalhaRespondido = false;

    const nomeDisciplina =
        disciplinasJogoFarol[batalhaDisciplina]
        ? disciplinasJogoFarol[batalhaDisciplina].nome
        : "🎯 Desafio";

    area.innerHTML = `
        <div class="painel-jogo-farol painel-batalha painel-batalha-ativo">

            <div class="cabecalho-jogo-farol cabecalho-batalha">
                <div>
                    <h3>⚔️ Batalha do Saber</h3>
                    <p>${nomeDisciplina}</p>
                </div>

                <span>
                    Rodada ${batalhaIndice + 1}
                </span>
            </div>

            <div class="arena-batalha-farol">

                <div class="combatente-batalha aluno-batalha">
                    <div class="avatar-combatente avatar-combatente-aluno">${obterAvatarJogadorFarol()}</div>
                    <h4>${obterNomeJogadorFarol()}</h4>
                    <div class="vidas-batalha">${montarVidasBatalha(batalhaVidasAluno)}</div>
                    <small>${batalhaAcertos} ataques certos</small>
                </div>

                <div class="versus-batalha">VS</div>

                <div class="combatente-batalha farol-batalha">
                    <div class="avatar-combatente">🗼</div>
                    <h4>Farol</h4>
                    <div class="vidas-batalha">${montarVidasBatalha(batalhaVidasFarol)}</div>
                    <small>${batalhaErros} ataques do Farol</small>
                </div>

            </div>

            <div class="questao-jogo-farol questao-batalha">

                ${q.texto ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.texto}
                    </div>
                ` : ""}

                ${q.imagem ? `
                    <img src="${q.imagem}" class="imagem-questao">
                ` : ""}

                ${q.afirmacoes ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.afirmacoes.map(af => `<p>${af}</p>`).join("")}
                    </div>
                ` : ""}

                <h3>${q.pergunta}</h3>

                <div class="alternativas-jogo-farol alternativas-batalha">
                    ${q.alternativas.map((alt, indice) => `
                        <button onclick="responderBatalhaFarol(${indice})">
                            ${alt}
                        </button>
                    `).join("")}
                </div>

                <div id="feedbackBatalhaFarol"></div>

            </div>

        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function responderBatalhaFarol(indiceResposta){

    if(batalhaRespondido){
        return;
    }

    const q =
        batalhaQuestoes[batalhaIndice];

    const feedback =
        document.getElementById("feedbackBatalhaFarol");

    if(!feedback){
        return;
    }

    batalhaRespondido = true;

    const botoes =
        document.querySelectorAll(".alternativas-batalha button");

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if(indice === q.correta){
            botao.classList.add("correta");
        }

        if(indice === indiceResposta && indice !== q.correta){
            botao.classList.add("errada");
        }

    });

    if(indiceResposta === q.correta){

        batalhaAcertos++;
        acertos++;
        batalhaVidasFarol--;

        adicionarPontosLuz(
            10,
            "Batalha do Saber",
            batalhaIdPartida + ":rodada:" + batalhaIndice
        );

        registrarAtividadeDiaria("acertos", 1);

        feedback.innerHTML = `
            <div class="feedback-acerto feedback-batalha">
                <h3>⚔️ Ataque certeiro!</h3>
                <p>Você acertou e tirou 1 vida do Farol.</p>
                <p class="pontos-luz-feedback">⭐ 10 Pontos de Luz</p>
                <br>
                <button onclick="proximaRodadaBatalhaFarol()">
                    Próxima rodada
                </button>
            </div>
        `;

    }
    else{

        batalhaErros++;
        erros++;
        batalhaVidasAluno--;

        registrarErroJogoFarol(q);

        feedback.innerHTML = `
            <div class="feedback-erro feedback-batalha">
                <h3>🗼 O Farol atacou!</h3>
                <p>Você errou e perdeu 1 vida.</p>

                <strong>Resposta correta:</strong><br>
                ${q.alternativas[q.correta]}

                <br><br>

                <strong>Explicação:</strong><br>
                ${q.feedbackErro || q.explicacao || "Sem explicação cadastrada."}

                <br><br>

                <button onclick="proximaRodadaBatalhaFarol()">
                    Próxima rodada
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

function proximaRodadaBatalhaFarol(){

    batalhaIndice++;

    mostrarQuestaoBatalhaFarol();

}

function finalizarBatalhaFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const venceu =
        batalhaVidasFarol <= 0 &&
        batalhaVidasAluno > 0;

    const perdeu =
        batalhaVidasAluno <= 0 &&
        batalhaVidasFarol > 0;

    let titulo = "🤝 Batalha encerrada";
    let mensagem = "A batalha terminou equilibrada. Continue treinando.";
    let icone = "🤝";
    let bonus = 0;

    if(venceu){
        titulo = "🏆 Você venceu o Farol!";
        mensagem = "Excelente! Você derrotou o Farol na Batalha do Saber.";
        icone = "🏆";
        bonus = 30;
    }
    else if(perdeu){
        titulo = "🗼 O Farol venceu!";
        mensagem = "O Farol venceu desta vez. Revise seus erros e tente novamente.";
        icone = "🗼";
        bonus = 0;
    }
    else if(batalhaAcertos > batalhaErros){
        titulo = "✅ Você venceu por desempenho!";
        mensagem = "Você acertou mais do que errou e venceu por desempenho.";
        icone = "✅";
        bonus = 15;
    }
    else if(batalhaErros > batalhaAcertos){
        titulo = "📚 O Farol venceu por desempenho";
        mensagem = "Você errou mais do que acertou. Continue praticando.";
        icone = "📚";
        bonus = 0;
    }

    if(bonus > 0){

        adicionarPontosLuz(
            bonus,
            "Bônus Batalha do Saber",
            batalhaIdPartida + ":bonus"
        );

    }

    const totalPontos =
        (batalhaAcertos * 10) + bonus;

    registrarAtividadeDiaria("simulados", 1);

    area.innerHTML = `
        <div class="painel-jogo-farol resultado-jogo-farol resultado-batalha">

            <h3>${titulo}</h3>

            <div class="resultado-farol-percentual resultado-batalha-circulo">
                <strong>${icone}</strong>
                <span>Batalha finalizada</span>
            </div>

            <div class="arena-batalha-farol arena-final-batalha">

                <div class="combatente-batalha aluno-batalha">
                    <div class="avatar-combatente avatar-combatente-aluno">${obterAvatarJogadorFarol()}</div>
                    <h4>${obterNomeJogadorFarol()}</h4>
                    <div class="vidas-batalha">${montarVidasBatalha(Math.max(batalhaVidasAluno, 0))}</div>
                </div>

                <div class="versus-batalha">VS</div>

                <div class="combatente-batalha farol-batalha">
                    <div class="avatar-combatente">🗼</div>
                    <h4>Farol</h4>
                    <div class="vidas-batalha">${montarVidasBatalha(Math.max(batalhaVidasFarol, 0))}</div>
                </div>

            </div>

            <div class="perfil-grid-resumo resultado-grid-jogo">
                <div class="perfil-resumo-card">
                    <span>✅</span>
                    <strong>${batalhaAcertos}</strong>
                    <small>Acertos</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>❌</span>
                    <strong>${batalhaErros}</strong>
                    <small>Erros</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>⭐</span>
                    <strong>${totalPontos}</strong>
                    <small>Pontos ganhos</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>🎁</span>
                    <strong>${bonus}</strong>
                    <small>Bônus</small>
                </div>
            </div>

            <p class="mensagem-final-jogo">
                ${mensagem}
            </p>

            <div class="botoes-final-jogo">
                <button onclick="abrirJogoBatalhaFarol()">
                    🔁 Jogar novamente
                </button>

                <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                    ❌ Revisar erros
                </button>

                <button onclick="mostrarTela('perfilAluno'); atualizarPerfilAluno();">
                    👤 Ver Perfil
                </button>
            </div>

        </div>
    `;

    atualizarDashboard();
    atualizarPerfilAluno();
    salvarDados();

}




function obterAvatarJogadorFarol(){

    const avatarAtual =
        lojaFarol && lojaFarol.avatarAtual
        ? lojaFarol.avatarAtual
        : "👤";

    if(
        typeof avatarAtual === "string" &&
        (
            avatarAtual.includes("/") ||
            avatarAtual.includes(".png") ||
            avatarAtual.includes(".jpg") ||
            avatarAtual.includes(".jpeg") ||
            avatarAtual.includes(".webp") ||
            avatarAtual.includes(".svg")
        )
    ){
        return `
            <img
                src="${avatarAtual}"
                alt="Avatar do aluno"
                class="avatar-jogador-game-img">
        `;
    }

    return `
        <span class="avatar-jogador-game-emoji">
            ${avatarAtual || "👤"}
        </span>
    `;

}

function obterNomeJogadorFarol(){

    const primeiroNome =
        usuarioForum && usuarioForum !== "Visitante"
        ? usuarioForum
        : (
            localStorage.getItem("usuarioPrimeiroNome") ||
            localStorage.getItem("usuarioNome") ||
            "Você"
        );

    return primeiroNome || "Você";

}

// ==========================
// JOGO ROTA ATÉ O FAROL — VOCÊ X FAROL
// ==========================

let rotaQuestoes = [];
let rotaIndice = 0;
let rotaPosAluno = 0;
let rotaPosFarol = 0;
let rotaCasas = 7;
let rotaAcertos = 0;
let rotaErros = 0;
let rotaDisciplina = "todas";
let rotaRespondido = false;
let rotaIdPartida = "";

function abrirJogoRotaFarol(){

    if(typeof pararTimerRelampago === "function"){
        pararTimerRelampago();
    }

    if(typeof pararPreviewMemoria === "function"){
        pararPreviewMemoria();
    }

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol painel-rota">
            <h3>🚢 Rota até o Farol</h3>
            <p>
                Responda questões para avançar seu barco. Depois da sua resposta, o Farol também escolhe uma alternativa automaticamente.
            </p>

            <div class="aviso-jogo-rota">
                <strong>Regras:</strong>
                <span>🚢 Você avança 1 casa quando acerta</span>
                <span>🌊 Se errar, seu barco fica parado</span>
                <span>🗼 O Farol também escolhe uma resposta automaticamente</span>
                <span>✅ Se o Farol acertar, ele avança</span>
                <span>❌ Se o Farol errar, ele fica parado</span>
                <span>🏁 Quem chegar primeiro ao Farol vence</span>
            </div>

            <h3>Escolha a disciplina:</h3>

            <div class="grid-disciplinas-jogo">
                ${Object.keys(disciplinasJogoFarol).map(chave => `
                    <button onclick="iniciarRotaFarol('${chave}')">
                        ${disciplinasJogoFarol[chave].nome}
                    </button>
                `).join("")}
            </div>
        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


function iniciarRotaFarol(chaveDisciplina){

    const questoesDisponiveis =
        obterQuestoesJogoFarol(chaveDisciplina);

    if(questoesDisponiveis.length < 7){
        mostrarToast("Ainda não há questões suficientes para a Rota até o Farol.");
        return;
    }

    rotaQuestoes =
        questoesDisponiveis.slice(0, 50);

    rotaIndice = 0;
    rotaPosAluno = 0;
    rotaPosFarol = 0;
    rotaCasas = 7;
    rotaAcertos = 0;
    rotaErros = 0;
    rotaDisciplina = chaveDisciplina;
    rotaRespondido = false;
    rotaIdPartida = "rota-farol-" + Date.now();

    mostrarQuestaoRotaFarol();

}


function montarTrilhaRota(posicao, tipo){

    let html = "";

    for(let i = 0; i <= rotaCasas; i++){

        if(i === posicao){
            html += tipo === "aluno" ? "🚢" : "🗼";
        }
        else if(i === rotaCasas){
            html += "🏁";
        }
        else{
            html += "🌊";
        }

    }

    return html;

}



function escolherRespostaFarolRota(q){

    const farolAcertou =
        Math.random() < 0.70;

    if(farolAcertou){
        return {
            indice: q.correta,
            acertou: true
        };
    }

    const erradas =
        q.alternativas
        .map((_, indice) => indice)
        .filter(indice => indice !== q.correta);

    const indiceErrado =
        erradas[
            Math.floor(Math.random() * erradas.length)
        ];

    return {
        indice: indiceErrado,
        acertou: false
    };

}

function garantirQuestoesRotaFarol(){

    if(rotaIndice < rotaQuestoes.length){
        return true;
    }

    const novasQuestoes =
        obterQuestoesJogoFarol(rotaDisciplina);

    if(!novasQuestoes || novasQuestoes.length === 0){
        return false;
    }

    rotaQuestoes =
        novasQuestoes.slice(0, 50);

    rotaIndice = 0;

    return true;

}

function mostrarQuestaoRotaFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    if(
        rotaPosAluno >= rotaCasas ||
        rotaPosFarol >= rotaCasas
    ){
        finalizarRotaFarol();
        return;
    }

    if(!garantirQuestoesRotaFarol()){
        finalizarRotaFarol();
        return;
    }

    const q =
        rotaQuestoes[rotaIndice];

    rotaRespondido = false;

    const nomeDisciplina =
        disciplinasJogoFarol[rotaDisciplina]
        ? disciplinasJogoFarol[rotaDisciplina].nome
        : "🎯 Desafio";

    area.innerHTML = `
        <div class="painel-jogo-farol painel-rota painel-rota-ativo">

            <div class="cabecalho-jogo-farol cabecalho-rota">
                <div>
                    <h3>🚢 Rota até o Farol</h3>
                    <p>${nomeDisciplina}</p>
                </div>

                <span>
                    Rodada ${rotaIndice + 1}
                </span>
            </div>

            <div class="mapa-rota-farol">

                <div class="linha-rota-jogador">
                    <strong>${obterAvatarJogadorFarol()} ${obterNomeJogadorFarol()}</strong>
                    <div class="trilha-rota">${montarTrilhaRota(rotaPosAluno, "aluno")}</div>
                    <small>${rotaPosAluno}/${rotaCasas} casas</small>
                </div>

                <div class="linha-rota-jogador">
                    <strong>🗼 Farol</strong>
                    <div class="trilha-rota">${montarTrilhaRota(rotaPosFarol, "farol")}</div>
                    <small>${rotaPosFarol}/${rotaCasas} casas</small>
                </div>

            </div>

            <div class="placar-jogo-farol">
                <span>✅ Acertos: ${rotaAcertos}</span>
                <span>❌ Erros: ${rotaErros}</span>
                <span>⭐ ${rotaAcertos * 10} Pontos</span>
            </div>

            <div class="questao-jogo-farol questao-rota">

                ${q.texto ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.texto}
                    </div>
                ` : ""}

                ${q.imagem ? `
                    <img src="${q.imagem}" class="imagem-questao">
                ` : ""}

                ${q.afirmacoes ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.afirmacoes.map(af => `<p>${af}</p>`).join("")}
                    </div>
                ` : ""}

                <h3>${q.pergunta}</h3>

                <div class="alternativas-jogo-farol alternativas-rota">
                    ${q.alternativas.map((alt, indice) => `
                        <button onclick="responderRotaFarol(${indice})">
                            ${alt}
                        </button>
                    `).join("")}
                </div>

                <div id="feedbackRotaFarol"></div>

            </div>

        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function responderRotaFarol(indiceResposta){

    if(rotaRespondido){
        return;
    }

    const q =
        rotaQuestoes[rotaIndice];

    const feedback =
        document.getElementById("feedbackRotaFarol");

    if(!feedback){
        return;
    }

    rotaRespondido = true;

    const botoes =
        document.querySelectorAll(".alternativas-rota button");

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if(indice === q.correta){
            botao.classList.add("correta");
        }

        if(indice === indiceResposta && indice !== q.correta){
            botao.classList.add("errada");
        }

    });

    let textoAluno = "";

    if(indiceResposta === q.correta){

        rotaAcertos++;
        acertos++;
        rotaPosAluno = Math.min(rotaPosAluno + 1, rotaCasas);

        adicionarPontosLuz(
            10,
            "Rota até o Farol",
            rotaIdPartida + ":rodada:" + rotaIndice
        );

        registrarAtividadeDiaria("acertos", 1);

        textoAluno =
            "✅ Você acertou e avançou 1 casa.";

    }
    else{

        rotaErros++;
        erros++;

        registrarErroJogoFarol(q);

        textoAluno =
            "❌ Você errou e ficou parado.";

    }

    const jogadaFarol =
        escolherRespostaFarolRota(q);

    const alternativaFarol =
        q.alternativas[jogadaFarol.indice];

    let textoFarol =
        "🗼 O Farol escolheu uma resposta errada e ficou parado.";

    if(jogadaFarol.acertou){

        rotaPosFarol =
            Math.min(rotaPosFarol + 1, rotaCasas);

        textoFarol =
            "🗼 O Farol acertou a resposta e avançou 1 casa.";
    }

    let complemento = "";

    if(indiceResposta !== q.correta){
        complemento = `
            <br><br>
            <strong>Resposta correta:</strong><br>
            ${q.alternativas[q.correta]}

            <br><br>

            <strong>Explicação:</strong><br>
            ${q.feedbackErro || q.explicacao || "Sem explicação cadastrada."}
        `;
    }

    feedback.innerHTML = `
        <div class="${indiceResposta === q.correta ? "feedback-acerto" : "feedback-erro"} feedback-rota">
            <h3>Rodada concluída</h3>

            <div class="resumo-jogada-rota">
                <p>${textoAluno}</p>

                <div class="jogada-farol-rota ${jogadaFarol.acertou ? "farol-acertou" : "farol-errou"}">
                    <strong>Resposta do Farol:</strong><br>
                    ${alternativaFarol}
                    <br><br>
                    ${textoFarol}
                </div>
            </div>

            ${complemento}

            <br><br>
            <button onclick="proximaRodadaRotaFarol()">
                Continuar rota
            </button>
        </div>
    `;

    atualizarEstatisticas();
    atualizarDashboard();
    atualizarPainelEstudos();
    atualizarCadernoErros();
    salvarDados();

}

function proximaRodadaRotaFarol(){

    rotaIndice++;

    mostrarQuestaoRotaFarol();

}

function finalizarRotaFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const venceu =
        rotaPosAluno >= rotaCasas &&
        rotaPosAluno >= rotaPosFarol;

    const perdeu =
        rotaPosFarol >= rotaCasas &&
        rotaPosFarol > rotaPosAluno;

    let titulo = "🤝 Rota encerrada";
    let icone = "🤝";
    let mensagem = "A rota terminou equilibrada.";
    let bonus = 0;

    if(venceu){
        titulo = "🏆 Você chegou primeiro ao Farol!";
        icone = "🏆";
        mensagem = "Excelente navegação! Você venceu a rota contra o Farol.";
        bonus = 30;
    }
    else if(perdeu){
        titulo = "🗼 O Farol chegou primeiro!";
        icone = "🗼";
        mensagem = "O Farol venceu esta rota. Revise seus erros e tente novamente.";
        bonus = 0;
    }
    else if(rotaPosAluno > rotaPosFarol){
        titulo = "✅ Você venceu por distância!";
        icone = "✅";
        mensagem = "Você avançou mais que o Farol.";
        bonus = 15;
    }
    else if(rotaPosFarol > rotaPosAluno){
        titulo = "📚 O Farol venceu por distância";
        icone = "📚";
        mensagem = "O Farol avançou mais. Continue praticando.";
        bonus = 0;
    }

    if(bonus > 0){
        adicionarPontosLuz(
            bonus,
            "Bônus Rota até o Farol",
            rotaIdPartida + ":bonus"
        );
    }

    const totalPontos =
        rotaAcertos * 10 + bonus;

    registrarAtividadeDiaria("simulados", 1);

    area.innerHTML = `
        <div class="painel-jogo-farol resultado-jogo-farol resultado-rota">

            <h3>${titulo}</h3>

            <div class="resultado-farol-percentual resultado-rota-circulo">
                <strong>${icone}</strong>
                <span>Rota finalizada</span>
            </div>

            <div class="mapa-rota-farol mapa-rota-final">

                <div class="linha-rota-jogador">
                    <strong>${obterAvatarJogadorFarol()} ${obterNomeJogadorFarol()}</strong>
                    <div class="trilha-rota">${montarTrilhaRota(Math.min(rotaPosAluno, rotaCasas), "aluno")}</div>
                    <small>${Math.min(rotaPosAluno, rotaCasas)}/${rotaCasas} casas</small>
                </div>

                <div class="linha-rota-jogador">
                    <strong>🗼 Farol</strong>
                    <div class="trilha-rota">${montarTrilhaRota(Math.min(rotaPosFarol, rotaCasas), "farol")}</div>
                    <small>${Math.min(rotaPosFarol, rotaCasas)}/${rotaCasas} casas</small>
                </div>

            </div>

            <div class="perfil-grid-resumo resultado-grid-jogo">
                <div class="perfil-resumo-card">
                    <span>✅</span>
                    <strong>${rotaAcertos}</strong>
                    <small>Acertos</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>❌</span>
                    <strong>${rotaErros}</strong>
                    <small>Erros</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>🚢</span>
                    <strong>${Math.min(rotaPosAluno, rotaCasas)}</strong>
                    <small>Seu avanço</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>⭐</span>
                    <strong>${totalPontos}</strong>
                    <small>Pontos ganhos</small>
                </div>
            </div>

            <p class="mensagem-final-jogo">
                ${mensagem}
            </p>

            <div class="botoes-final-jogo">
                <button onclick="abrirJogoRotaFarol()">
                    🔁 Jogar novamente
                </button>

                <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                    ❌ Revisar erros
                </button>

                <button onclick="mostrarTela('perfilAluno'); atualizarPerfilAluno();">
                    👤 Ver Perfil
                </button>
            </div>

        </div>
    `;

    atualizarDashboard();
    atualizarPerfilAluno();
    salvarDados();

}



// ==========================
// JOGO SENHA DO FAROL — VOCÊ X FAROL
// ==========================

let senhaQuestoes = [];
let senhaIndice = 0;
let senhaDisciplina = "todas";
let senhaIdPartida = "";
let senhaRespondido = false;
let senhaPalavra = "";
let senhaLetrasAluno = [];
let senhaLetrasFarol = [];
let senhaAcertosAluno = 0;
let senhaErrosAluno = 0;
let senhaAcertosFarol = 0;
let senhaErrosFarol = 0;

const senhasDoFarol = [
    "FAROL",
    "SABER",
    "ESCOLA",
    "CIENCIA",
    "LEITURA",
    "ESTUDO",
    "BRASIL",
    "DIDATICA",
    "HISTORIA",
    "PORTUGUES",
    "APRENDER",
    "CONHECER",
    "PROVA",
    "QUESTAO",
    "ALUNO",
    "MAPA",
    "MENTAL"
];

function abrirJogoSenhaFarol(){

    if(typeof pararTimerRelampago === "function"){
        pararTimerRelampago();
    }

    if(typeof pararPreviewMemoria === "function"){
        pararPreviewMemoria();
    }

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol painel-senha">
            <h3>🔐 Senha do Farol</h3>
            <p>
                Responda questões para revelar letras da sua senha. O Farol também tenta completar a senha automaticamente.
            </p>

            <div class="aviso-jogo-senha">
                <strong>Regras:</strong>
                <span>✅ Se você acertar, revela uma letra da sua senha</span>
                <span>❌ Se você errar, sua senha não avança</span>
                <span>🗼 O Farol também tenta revelar letras da senha</span>
                <span>🔐 Quem completar a senha primeiro vence</span>
                <span>⭐ Cada acerto seu dá 10 Pontos de Luz</span>
            </div>

            <h3>Escolha a disciplina:</h3>

            <div class="grid-disciplinas-jogo">
                ${Object.keys(disciplinasJogoFarol).map(chave => `
                    <button onclick="iniciarSenhaFarol('${chave}')">
                        ${disciplinasJogoFarol[chave].nome}
                    </button>
                `).join("")}
            </div>
        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function escolherPalavraSenhaFarol(){

    return senhasDoFarol[
        Math.floor(Math.random() * senhasDoFarol.length)
    ];

}

function iniciarSenhaFarol(chaveDisciplina){

    const questoesDisponiveis =
        obterQuestoesJogoFarol(chaveDisciplina);

    if(questoesDisponiveis.length < 5){
        mostrarToast("Ainda não há questões suficientes para a Senha do Farol.");
        return;
    }

    senhaQuestoes =
        questoesDisponiveis.slice(0, 50);

    senhaIndice = 0;
    senhaDisciplina = chaveDisciplina;
    senhaIdPartida = "senha-farol-" + Date.now();
    senhaRespondido = false;
    senhaPalavra = escolherPalavraSenhaFarol();
    senhaLetrasAluno = Array(senhaPalavra.length).fill(false);
    senhaLetrasFarol = Array(senhaPalavra.length).fill(false);
    senhaAcertosAluno = 0;
    senhaErrosAluno = 0;
    senhaAcertosFarol = 0;
    senhaErrosFarol = 0;

    mostrarQuestaoSenhaFarol();

}

function garantirQuestoesSenhaFarol(){

    if(senhaIndice < senhaQuestoes.length){
        return true;
    }

    const novasQuestoes =
        obterQuestoesJogoFarol(senhaDisciplina);

    if(!novasQuestoes || novasQuestoes.length === 0){
        return false;
    }

    senhaQuestoes =
        novasQuestoes.slice(0, 50);

    senhaIndice = 0;

    return true;

}

function senhaCompleta(lista){

    return lista.every(item => item === true);

}

function revelarProximaLetraSenha(lista){

    const indicesFechados =
        lista
        .map((aberta, indice) => ({ aberta, indice }))
        .filter(item => !item.aberta)
        .map(item => item.indice);

    if(indicesFechados.length === 0){
        return;
    }

    const escolhido =
        indicesFechados[
            Math.floor(Math.random() * indicesFechados.length)
        ];

    lista[escolhido] = true;

}

function montarSenhaVisual(lista){

    return senhaPalavra
        .split("")
        .map((letra, indice) => {
            return lista[indice] ? letra : "_";
        })
        .join(" ");

}

function mostrarQuestaoSenhaFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    if(
        senhaCompleta(senhaLetrasAluno) ||
        senhaCompleta(senhaLetrasFarol)
    ){
        finalizarSenhaFarol();
        return;
    }

    if(!garantirQuestoesSenhaFarol()){
        finalizarSenhaFarol();
        return;
    }

    const q =
        senhaQuestoes[senhaIndice];

    senhaRespondido = false;

    const nomeDisciplina =
        disciplinasJogoFarol[senhaDisciplina]
        ? disciplinasJogoFarol[senhaDisciplina].nome
        : "🎯 Desafio";

    area.innerHTML = `
        <div class="painel-jogo-farol painel-senha painel-senha-ativo">

            <div class="cabecalho-jogo-farol cabecalho-senha">
                <div>
                    <h3>🔐 Senha do Farol</h3>
                    <p>${nomeDisciplina}</p>
                </div>

                <span>
                    Rodada ${senhaAcertosAluno + senhaErrosAluno + 1}
                </span>
            </div>

            <div class="placar-senha-farol">

                <div class="senha-jogador-card senha-aluno-card">
                    <strong>${obterAvatarJogadorFarol()} ${obterNomeJogadorFarol()}</strong>
                    <div class="senha-visual">${montarSenhaVisual(senhaLetrasAluno)}</div>
                    <small>${senhaAcertosAluno} acertos | ${senhaErrosAluno} erros</small>
                </div>

                <div class="senha-jogador-card senha-farol-card">
                    <strong>🗼 Farol</strong>
                    <div class="senha-visual">${montarSenhaVisual(senhaLetrasFarol)}</div>
                    <small>${senhaAcertosFarol} acertos | ${senhaErrosFarol} erros</small>
                </div>

            </div>

            <div class="placar-jogo-farol">
                <span>✅ Seus acertos: ${senhaAcertosAluno}</span>
                <span>❌ Seus erros: ${senhaErrosAluno}</span>
                <span>🗼 Farol: ${senhaAcertosFarol} acertos</span>
                <span>⭐ ${senhaAcertosAluno * 10} Pontos</span>
            </div>

            <div class="questao-jogo-farol questao-senha">

                ${q.texto ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.texto}
                    </div>
                ` : ""}

                ${q.imagem ? `
                    <img src="${q.imagem}" class="imagem-questao">
                ` : ""}

                ${q.afirmacoes ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.afirmacoes.map(af => `<p>${af}</p>`).join("")}
                    </div>
                ` : ""}

                <h3>${q.pergunta}</h3>

                <div class="alternativas-jogo-farol alternativas-senha">
                    ${q.alternativas.map((alt, indice) => `
                        <button onclick="responderSenhaFarol(${indice})">
                            ${alt}
                        </button>
                    `).join("")}
                </div>

                <div id="feedbackSenhaFarol"></div>

            </div>

        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function escolherRespostaFarolSenha(q){

    const farolAcertou =
        Math.random() < 0.70;

    if(farolAcertou){
        return {
            indice: q.correta,
            acertou: true
        };
    }

    const erradas =
        q.alternativas
        .map((_, indice) => indice)
        .filter(indice => indice !== q.correta);

    const indiceErrado =
        erradas[
            Math.floor(Math.random() * erradas.length)
        ];

    return {
        indice: indiceErrado,
        acertou: false
    };

}

function responderSenhaFarol(indiceResposta){

    if(senhaRespondido){
        return;
    }

    const q =
        senhaQuestoes[senhaIndice];

    const feedback =
        document.getElementById("feedbackSenhaFarol");

    if(!feedback){
        return;
    }

    senhaRespondido = true;

    const botoes =
        document.querySelectorAll(".alternativas-senha button");

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if(indice === q.correta){
            botao.classList.add("correta");
        }

        if(indice === indiceResposta && indice !== q.correta){
            botao.classList.add("errada");
        }

    });

    let textoAluno = "";

    if(indiceResposta === q.correta){

        senhaAcertosAluno++;
        acertos++;

        revelarProximaLetraSenha(senhaLetrasAluno);

        adicionarPontosLuz(
            10,
            "Senha do Farol",
            senhaIdPartida + ":rodada:" + senhaIndice + ":" + senhaAcertosAluno
        );

        registrarAtividadeDiaria("acertos", 1);

        textoAluno =
            "✅ Você acertou e revelou uma letra da sua senha.";

    }
    else{

        senhaErrosAluno++;
        erros++;

        registrarErroJogoFarol(q);

        textoAluno =
            "❌ Você errou e não revelou letra nesta rodada.";

    }

    const jogadaFarol =
        escolherRespostaFarolSenha(q);

    const alternativaFarol =
        q.alternativas[jogadaFarol.indice];

    let textoFarol =
        "🗼 O Farol errou e não revelou letra.";

    if(jogadaFarol.acertou){

        senhaAcertosFarol++;
        revelarProximaLetraSenha(senhaLetrasFarol);

        textoFarol =
            "🗼 O Farol acertou e revelou uma letra.";
    }
    else{
        senhaErrosFarol++;
    }

    let complemento = "";

    if(indiceResposta !== q.correta){
        complemento = `
            <br><br>
            <strong>Resposta correta:</strong><br>
            ${q.alternativas[q.correta]}

            <br><br>

            <strong>Explicação:</strong><br>
            ${q.feedbackErro || q.explicacao || "Sem explicação cadastrada."}
        `;
    }

    feedback.innerHTML = `
        <div class="${indiceResposta === q.correta ? "feedback-acerto" : "feedback-erro"} feedback-senha">
            <h3>Rodada concluída</h3>

            <div class="resumo-jogada-senha">
                <p>${textoAluno}</p>

                <div class="jogada-farol-senha ${jogadaFarol.acertou ? "farol-acertou" : "farol-errou"}">
                    <strong>Resposta do Farol:</strong><br>
                    ${alternativaFarol}
                    <br><br>
                    ${textoFarol}
                </div>
            </div>

            <div class="senha-preview-feedback">
                <p><strong>${obterAvatarJogadorFarol()} Sua senha:</strong> ${montarSenhaVisual(senhaLetrasAluno)}</p>
                <p><strong>🗼 Senha do Farol:</strong> ${montarSenhaVisual(senhaLetrasFarol)}</p>
            </div>

            ${complemento}

            <br><br>
            <button onclick="proximaRodadaSenhaFarol()">
                Continuar senha
            </button>
        </div>
    `;

    atualizarEstatisticas();
    atualizarDashboard();
    atualizarPainelEstudos();
    atualizarCadernoErros();
    salvarDados();

}

function proximaRodadaSenhaFarol(){

    senhaIndice++;

    mostrarQuestaoSenhaFarol();

}

function finalizarSenhaFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    const alunoCompletou =
        senhaCompleta(senhaLetrasAluno);

    const farolCompletou =
        senhaCompleta(senhaLetrasFarol);

    let titulo = "🤝 Senha encerrada";
    let icone = "🤝";
    let mensagem = "A disputa terminou equilibrada.";
    let bonus = 0;

    if(alunoCompletou && !farolCompletou){
        titulo = "🏆 Você descobriu a senha!";
        icone = "🏆";
        mensagem = "Excelente! Você completou a senha antes do Farol.";
        bonus = 30;
    }
    else if(farolCompletou && !alunoCompletou){
        titulo = "🗼 O Farol descobriu a senha!";
        icone = "🗼";
        mensagem = "O Farol completou a senha primeiro. Revise seus erros e tente novamente.";
        bonus = 0;
    }
    else if(alunoCompletou && farolCompletou){
        titulo = "🤝 Empate na senha!";
        icone = "🤝";
        mensagem = "Você e o Farol completaram a senha na mesma rodada.";
        bonus = 15;
    }
    else if(senhaAcertosAluno > senhaAcertosFarol){
        titulo = "✅ Você venceu por desempenho!";
        icone = "✅";
        mensagem = "Você acertou mais do que o Farol.";
        bonus = 15;
    }
    else if(senhaAcertosFarol > senhaAcertosAluno){
        titulo = "📚 O Farol venceu por desempenho";
        icone = "📚";
        mensagem = "O Farol acertou mais nesta partida. Continue praticando.";
        bonus = 0;
    }

    if(bonus > 0){
        adicionarPontosLuz(
            bonus,
            "Bônus Senha do Farol",
            senhaIdPartida + ":bonus"
        );
    }

    const totalPontos =
        senhaAcertosAluno * 10 + bonus;

    registrarAtividadeDiaria("simulados", 1);

    area.innerHTML = `
        <div class="painel-jogo-farol resultado-jogo-farol resultado-senha">

            <h3>${titulo}</h3>

            <div class="resultado-farol-percentual resultado-senha-circulo">
                <strong>${icone}</strong>
                <span>Senha finalizada</span>
            </div>

            <div class="placar-senha-farol placar-senha-final">

                <div class="senha-jogador-card senha-aluno-card">
                    <strong>${obterAvatarJogadorFarol()} ${obterNomeJogadorFarol()}</strong>
                    <div class="senha-visual">${montarSenhaVisual(senhaLetrasAluno)}</div>
                    <small>${senhaAcertosAluno} acertos | ${senhaErrosAluno} erros</small>
                </div>

                <div class="senha-jogador-card senha-farol-card">
                    <strong>🗼 Farol</strong>
                    <div class="senha-visual">${montarSenhaVisual(senhaLetrasFarol)}</div>
                    <small>${senhaAcertosFarol} acertos | ${senhaErrosFarol} erros</small>
                </div>

            </div>

            <div class="senha-palavra-final">
                🔐 Senha: <strong>${senhaPalavra}</strong>
            </div>

            <div class="perfil-grid-resumo resultado-grid-jogo">
                <div class="perfil-resumo-card">
                    <span>✅</span>
                    <strong>${senhaAcertosAluno}</strong>
                    <small>Seus acertos</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>❌</span>
                    <strong>${senhaErrosAluno}</strong>
                    <small>Seus erros</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>🗼</span>
                    <strong>${senhaAcertosFarol}</strong>
                    <small>Acertos do Farol</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>⭐</span>
                    <strong>${totalPontos}</strong>
                    <small>Pontos ganhos</small>
                </div>
            </div>

            <p class="mensagem-final-jogo">
                ${mensagem}
            </p>

            <div class="botoes-final-jogo">
                <button onclick="abrirJogoSenhaFarol()">
                    🔁 Jogar novamente
                </button>

                <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                    ❌ Revisar erros
                </button>

                <button onclick="mostrarTela('perfilAluno'); atualizarPerfilAluno();">
                    👤 Ver Perfil
                </button>
            </div>

        </div>
    `;

    atualizarDashboard();
    atualizarPerfilAluno();
    salvarDados();

}



// ==========================
// JOGO BAÚ DO FAROL — VOCÊ X FAROL
// ==========================

let bauQuestoes = [];
let bauIndice = 0;
let bauDisciplina = "todas";
let bauIdPartida = "";
let bauRespondido = false;
let bauAtual = 0;
let bauChavesAluno = 0;
let bauChavesFarol = 0;
let bauAbertosAluno = 0;
let bauAbertosFarol = 0;
let bauAcertosAluno = 0;
let bauErrosAluno = 0;
let bauAcertosFarol = 0;
let bauErrosFarol = 0;

const bausDoFarol = [
    {
        nome: "Baú Inicial",
        icone: "📦",
        bonus: 15
    },
    {
        nome: "Baú Dourado",
        icone: "🎁",
        bonus: 25
    },
    {
        nome: "Baú Especial",
        icone: "🏆",
        bonus: 40
    }
];

function abrirJogoBauFarol(){

    if(typeof pararTimerRelampago === "function"){
        pararTimerRelampago();
    }

    if(typeof pararPreviewMemoria === "function"){
        pararPreviewMemoria();
    }

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    area.innerHTML = `
        <div class="painel-jogo-farol painel-bau">
            <h3>🏴‍☠️ Baú do Farol</h3>
            <p>
                Responda questões para ganhar chaves. Quem juntar 3 chaves primeiro abre o baú.
            </p>

            <div class="aviso-jogo-bau">
                <strong>Regras:</strong>
                <span>🔑 Cada acerto seu vale 1 chave</span>
                <span>❌ Se errar, não ganha chave</span>
                <span>🗼 O Farol também tenta ganhar chaves automaticamente</span>
                <span>📦 Cada baú precisa de 3 chaves para abrir</span>
                <span>🏆 A partida tem 3 baús</span>
                <span>⭐ Cada acerto seu dá 10 Pontos de Luz</span>
            </div>

            <h3>Escolha a disciplina:</h3>

            <div class="grid-disciplinas-jogo">
                ${Object.keys(disciplinasJogoFarol).map(chave => `
                    <button onclick="iniciarBauFarol('${chave}')">
                        ${disciplinasJogoFarol[chave].nome}
                    </button>
                `).join("")}
            </div>
        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function iniciarBauFarol(chaveDisciplina){

    const questoesDisponiveis =
        obterQuestoesJogoFarol(chaveDisciplina);

    if(questoesDisponiveis.length < 5){
        mostrarToast("Ainda não há questões suficientes para o Baú do Farol.");
        return;
    }

    bauQuestoes =
        questoesDisponiveis.slice(0, 50);

    bauIndice = 0;
    bauDisciplina = chaveDisciplina;
    bauIdPartida = "bau-farol-" + Date.now();
    bauRespondido = false;
    bauAtual = 0;
    bauChavesAluno = 0;
    bauChavesFarol = 0;
    bauAbertosAluno = 0;
    bauAbertosFarol = 0;
    bauAcertosAluno = 0;
    bauErrosAluno = 0;
    bauAcertosFarol = 0;
    bauErrosFarol = 0;

    mostrarQuestaoBauFarol();

}

function garantirQuestoesBauFarol(){

    if(bauIndice < bauQuestoes.length){
        return true;
    }

    const novasQuestoes =
        obterQuestoesJogoFarol(bauDisciplina);

    if(!novasQuestoes || novasQuestoes.length === 0){
        return false;
    }

    bauQuestoes =
        novasQuestoes.slice(0, 50);

    bauIndice = 0;

    return true;

}

function montarChavesBau(qtd){

    let html = "";

    for(let i = 0; i < 3; i++){
        html += i < qtd ? "🔑" : "▫️";
    }

    return html;

}

function farolGanhouChaveBau(){

    return Math.random() < 0.70;

}

function verificarAberturaBau(){

    let resultado = {
        abriu: false,
        vencedor: "",
        bonus: 0
    };

    const bau =
        bausDoFarol[bauAtual] || bausDoFarol[bausDoFarol.length - 1];

    if(bauChavesAluno >= 3){

        bauAbertosAluno++;
        resultado.abriu = true;
        resultado.vencedor = "aluno";
        resultado.bonus = bau.bonus;

        adicionarPontosLuz(
            bau.bonus,
            "Bônus Baú do Farol",
            bauIdPartida + ":bau:" + bauAtual + ":bonus"
        );

    }
    else if(bauChavesFarol >= 3){

        bauAbertosFarol++;
        resultado.abriu = true;
        resultado.vencedor = "farol";
        resultado.bonus = 0;

    }

    if(resultado.abriu){

        bauAtual++;
        bauChavesAluno = 0;
        bauChavesFarol = 0;

    }

    return resultado;

}

function mostrarQuestaoBauFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    if(bauAtual >= bausDoFarol.length){
        finalizarBauFarol();
        return;
    }

    if(!garantirQuestoesBauFarol()){
        finalizarBauFarol();
        return;
    }

    const q =
        bauQuestoes[bauIndice];

    const bau =
        bausDoFarol[bauAtual];

    bauRespondido = false;

    const nomeDisciplina =
        disciplinasJogoFarol[bauDisciplina]
        ? disciplinasJogoFarol[bauDisciplina].nome
        : "🎯 Desafio";

    area.innerHTML = `
        <div class="painel-jogo-farol painel-bau painel-bau-ativo">

            <div class="cabecalho-jogo-farol cabecalho-bau">
                <div>
                    <h3>🏴‍☠️ Baú do Farol</h3>
                    <p>${nomeDisciplina}</p>
                </div>

                <span>
                    Baú ${bauAtual + 1}/3
                </span>
            </div>

            <div class="bau-atual-area">
                <div class="bau-grande">
                    <span>${bau.icone}</span>
                    <strong>${bau.nome}</strong>
                    <small>Precisa de 3 chaves para abrir</small>
                </div>
            </div>

            <div class="placar-bau-farol">

                <div class="bau-jogador-card bau-aluno-card">
                    <strong>${obterAvatarJogadorFarol()} ${obterNomeJogadorFarol()}</strong>
                    <div class="chaves-bau">${montarChavesBau(bauChavesAluno)}</div>
                    <small>${bauAbertosAluno} baús abertos</small>
                </div>

                <div class="bau-jogador-card bau-farol-card">
                    <strong>🗼 Farol</strong>
                    <div class="chaves-bau">${montarChavesBau(bauChavesFarol)}</div>
                    <small>${bauAbertosFarol} baús abertos</small>
                </div>

            </div>

            <div class="placar-jogo-farol">
                <span>✅ Seus acertos: ${bauAcertosAluno}</span>
                <span>❌ Seus erros: ${bauErrosAluno}</span>
                <span>📦 Seus baús: ${bauAbertosAluno}</span>
                <span>⭐ ${bauAcertosAluno * 10} Pontos</span>
            </div>

            <div class="questao-jogo-farol questao-bau">

                ${q.texto ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.texto}
                    </div>
                ` : ""}

                ${q.imagem ? `
                    <img src="${q.imagem}" class="imagem-questao">
                ` : ""}

                ${q.afirmacoes ? `
                    <div class="texto-base jogo-texto-base">
                        ${q.afirmacoes.map(af => `<p>${af}</p>`).join("")}
                    </div>
                ` : ""}

                <h3>${q.pergunta}</h3>

                <div class="alternativas-jogo-farol alternativas-bau">
                    ${q.alternativas.map((alt, indice) => `
                        <button onclick="responderBauFarol(${indice})">
                            ${alt}
                        </button>
                    `).join("")}
                </div>

                <div id="feedbackBauFarol"></div>

            </div>

        </div>
    `;

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

function responderBauFarol(indiceResposta){

    if(bauRespondido){
        return;
    }

    const q =
        bauQuestoes[bauIndice];

    const feedback =
        document.getElementById("feedbackBauFarol");

    if(!feedback){
        return;
    }

    bauRespondido = true;

    const botoes =
        document.querySelectorAll(".alternativas-bau button");

    botoes.forEach((botao, indice) => {

        botao.disabled = true;

        if(indice === q.correta){
            botao.classList.add("correta");
        }

        if(indice === indiceResposta && indice !== q.correta){
            botao.classList.add("errada");
        }

    });

    let textoAluno = "";

    if(indiceResposta === q.correta){

        bauAcertosAluno++;
        acertos++;
        bauChavesAluno++;

        adicionarPontosLuz(
            10,
            "Baú do Farol",
            bauIdPartida + ":rodada:" + bauIndice + ":" + bauAcertosAluno
        );

        registrarAtividadeDiaria("acertos", 1);

        textoAluno =
            "✅ Você acertou e ganhou 1 chave.";

    }
    else{

        bauErrosAluno++;
        erros++;

        registrarErroJogoFarol(q);

        textoAluno =
            "❌ Você errou e não ganhou chave.";

    }

    const farolGanhou =
        farolGanhouChaveBau();

    let textoFarol =
        "🗼 O Farol não conseguiu uma chave nesta rodada.";

    if(farolGanhou){

        bauAcertosFarol++;
        bauChavesFarol++;

        textoFarol =
            "🗼 O Farol conseguiu 1 chave nesta rodada.";

    }
    else{

        bauErrosFarol++;

    }

    const resultadoBau =
        verificarAberturaBau();

    let textoBau = "";

    if(resultadoBau.abriu){

        if(resultadoBau.vencedor === "aluno"){
            textoBau = `
                <div class="bau-aberto-feedback aluno-abriu-bau">
                    🎉 Você abriu o baú e ganhou bônus de ${resultadoBau.bonus} Pontos de Luz!
                </div>
            `;
        }
        else{
            textoBau = `
                <div class="bau-aberto-feedback farol-abriu-bau">
                    🗼 O Farol abriu este baú primeiro.
                </div>
            `;
        }

    }

    let complemento = "";

    if(indiceResposta !== q.correta){
        complemento = `
            <br><br>
            <strong>Resposta correta:</strong><br>
            ${q.alternativas[q.correta]}

            <br><br>

            <strong>Explicação:</strong><br>
            ${q.feedbackErro || q.explicacao || "Sem explicação cadastrada."}
        `;
    }

    feedback.innerHTML = `
        <div class="${indiceResposta === q.correta ? "feedback-acerto" : "feedback-erro"} feedback-bau">
            <h3>Rodada concluída</h3>

            <div class="resumo-jogada-bau">
                <p>${textoAluno}</p>
                <p>${textoFarol}</p>
                ${textoBau}
            </div>

            <div class="senha-preview-feedback">
                <p><strong>${obterAvatarJogadorFarol()} Suas chaves:</strong> ${montarChavesBau(bauChavesAluno)}</p>
                <p><strong>🗼 Chaves do Farol:</strong> ${montarChavesBau(bauChavesFarol)}</p>
            </div>

            ${complemento}

            <br><br>
            <button onclick="proximaRodadaBauFarol()">
                Continuar baú
            </button>
        </div>
    `;

    atualizarEstatisticas();
    atualizarDashboard();
    atualizarPainelEstudos();
    atualizarCadernoErros();
    salvarDados();

}

function proximaRodadaBauFarol(){

    bauIndice++;

    mostrarQuestaoBauFarol();

}

function finalizarBauFarol(){

    const area =
        document.getElementById("areaJogoConstruaFarol");

    if(!area){
        return;
    }

    let titulo = "🤝 Baús encerrados";
    let icone = "🤝";
    let mensagem = "A disputa dos baús terminou equilibrada.";
    let bonusFinal = 0;

    if(bauAbertosAluno > bauAbertosFarol){

        titulo = "🏆 Você venceu o Baú do Farol!";
        icone = "🏆";
        mensagem = "Excelente! Você abriu mais baús que o Farol.";
        bonusFinal = 25;

    }
    else if(bauAbertosFarol > bauAbertosAluno){

        titulo = "🗼 O Farol venceu os baús!";
        icone = "🗼";
        mensagem = "O Farol abriu mais baús desta vez. Revise seus erros e tente novamente.";

    }
    else if(bauAcertosAluno > bauAcertosFarol){

        titulo = "✅ Você venceu por desempenho!";
        icone = "✅";
        mensagem = "Você acertou mais questões que o Farol.";
        bonusFinal = 15;

    }
    else if(bauAcertosFarol > bauAcertosAluno){

        titulo = "📚 O Farol venceu por desempenho";
        icone = "📚";
        mensagem = "O Farol teve melhor desempenho. Continue praticando.";

    }

    if(bonusFinal > 0){
        adicionarPontosLuz(
            bonusFinal,
            "Bônus Final Baú do Farol",
            bauIdPartida + ":bonus-final"
        );
    }

    const totalPontos =
        bauAcertosAluno * 10 + bonusFinal;

    registrarAtividadeDiaria("simulados", 1);

    area.innerHTML = `
        <div class="painel-jogo-farol resultado-jogo-farol resultado-bau">

            <h3>${titulo}</h3>

            <div class="resultado-farol-percentual resultado-bau-circulo">
                <strong>${icone}</strong>
                <span>Baús finalizados</span>
            </div>

            <div class="placar-bau-farol placar-bau-final">

                <div class="bau-jogador-card bau-aluno-card">
                    <strong>${obterAvatarJogadorFarol()} ${obterNomeJogadorFarol()}</strong>
                    <div class="chaves-bau">📦 ${bauAbertosAluno}</div>
                    <small>Baús abertos</small>
                </div>

                <div class="bau-jogador-card bau-farol-card">
                    <strong>🗼 Farol</strong>
                    <div class="chaves-bau">📦 ${bauAbertosFarol}</div>
                    <small>Baús abertos</small>
                </div>

            </div>

            <div class="perfil-grid-resumo resultado-grid-jogo">
                <div class="perfil-resumo-card">
                    <span>✅</span>
                    <strong>${bauAcertosAluno}</strong>
                    <small>Seus acertos</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>❌</span>
                    <strong>${bauErrosAluno}</strong>
                    <small>Seus erros</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>📦</span>
                    <strong>${bauAbertosAluno}</strong>
                    <small>Seus baús</small>
                </div>

                <div class="perfil-resumo-card">
                    <span>⭐</span>
                    <strong>${totalPontos}</strong>
                    <small>Pontos ganhos</small>
                </div>
            </div>

            <p class="mensagem-final-jogo">
                ${mensagem}
            </p>

            <div class="botoes-final-jogo">
                <button onclick="abrirJogoBauFarol()">
                    🔁 Jogar novamente
                </button>

                <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                    ❌ Revisar erros
                </button>

                <button onclick="mostrarTela('perfilAluno'); atualizarPerfilAluno();">
                    👤 Ver Perfil
                </button>
            </div>

        </div>
    `;

    atualizarDashboard();
    atualizarPerfilAluno();
    salvarDados();

}

// ==========================
// PERFIL DO ALUNO
// ==========================

function obterDataCadastroPerfil(){

    const dataLocal =
        localStorage.getItem("farol_dataCadastro") ||
        localStorage.getItem("dataCadastro") ||
        "";

    if(dataLocal){
        return dataLocal;
    }

    return "Não informado";

}

function obterItensCompradosLoja(){

    if(
        !lojaFarol ||
        !lojaFarol.comprados
    ){
        return [];
    }

    return Object.keys(lojaFarol.comprados)
        .map(id => {
            const item = obterRecompensaLoja(id);
            return item
                ? {
                    id: id,
                    nome: item.nome,
                    tipo: item.tipo,
                    icone: item.icone || "🏅",
                    comprado: true
                }
                : null;
        })
        .filter(Boolean);

}

function montarSeloConquistaPerfil(icone, nome, status, classe){

    return `
        <div class="selo-conquista-perfil ${classe || ""}">
            <span>${icone}</span>
            <strong>${nome}</strong>
            <small>${status}</small>
        </div>
    `;

}

function atualizarPerfilAluno(){

    const area =
        document.getElementById("conteudoPerfilAluno");

    if(!area){
        return;
    }

    const nomeCompleto =
        typeof obterNomeCertificado === "function"
        ? obterNomeCertificado()
        : (
            usuarioNomeCompleto ||
            usuarioForum ||
            "Aluno Farol do Saber"
        );

    const primeiroNome =
        usuarioForum && usuarioForum !== "Visitante"
        ? usuarioForum
        : nomeCompleto.split(" ")[0];

    const respondidas =
        acertos + erros;

    const aproveitamento =
        respondidas > 0
        ? Math.round((acertos / respondidas) * 100)
        : 0;

    const tituloAtual =
        lojaFarol.tituloAtual ||
        "Sem título especial";

    const medalhaAtual =
        lojaFarol.medalhaEstudanteAtivo
        ? "Estudante Ativo"
        : "Nenhuma medalha ativa";

    const certificadoDesbloqueado =
        !!lojaFarol.certificadoDigital;

    const cardPremiumDesbloqueado =
        !!lojaFarol.cardPremium;

    const itensComprados =
        obterItensCompradosLoja();

    const totalConquistas =
        itensComprados.length +
        (lojaFarol.medalhaEstudanteAtivo ? 1 : 0) +
        (lojaFarol.cardPremium ? 1 : 0) +
        (lojaFarol.certificadoDigital ? 1 : 0);

    const faltamAcertosCertificado =
        Math.max(100 - acertos, 0);

    const faltamPontosCertificado =
        Math.max(2000 - saldoPontosLuz, 0);

    const statusCertificado =
        certificadoDesbloqueado
        ? `
            <div class="perfil-certificado-desbloqueado">
                <strong>✅ Certificado Digital desbloqueado</strong>
                <span>Código: ${lojaFarol.codigoCertificado || "Será gerado ao abrir"}</span>
                <span>Emitido em: ${lojaFarol.dataCertificado || "Será registrado ao abrir"}</span>
            </div>
        `
        : `
            <div class="perfil-certificado-bloqueado">
                <strong>🔒 Certificado ainda bloqueado</strong>
                <span>Requisito: 100 acertos e 2000 Pontos de Luz</span>
                <span>Faltam ${faltamAcertosCertificado} acertos</span>
                <span>Faltam ${faltamPontosCertificado} Pontos de Luz</span>
            </div>
        `;

    const conquistasHtml = [
        montarSeloConquistaPerfil(
            "👤",
            lojaFarol.nomeAvatarAtual || "Estudante",
            "Avatar atual",
            "ativo"
        ),
        montarSeloConquistaPerfil(
            "🎖",
            tituloAtual,
            lojaFarol.tituloAtual ? "Título ativo" : "Título não ativado",
            lojaFarol.tituloAtual ? "ativo" : "bloqueado"
        ),
        montarSeloConquistaPerfil(
            "🏅",
            medalhaAtual,
            lojaFarol.medalhaEstudanteAtivo ? "Medalha ativa" : "Ainda não desbloqueada",
            lojaFarol.medalhaEstudanteAtivo ? "ativo" : "bloqueado"
        ),
        montarSeloConquistaPerfil(
            "📤",
            "Card Premium",
            cardPremiumDesbloqueado ? "Desbloqueado" : "Bloqueado",
            cardPremiumDesbloqueado ? "ativo" : "bloqueado"
        ),
        montarSeloConquistaPerfil(
            "📜",
            "Certificado Digital",
            certificadoDesbloqueado ? "Desbloqueado" : "Bloqueado",
            certificadoDesbloqueado ? "ativo" : "bloqueado"
        )
    ].join("");

    area.innerHTML = `
        <div class="perfil-hero">

            <div class="perfil-avatar-area">
                ${montarAvatarHTML(
                    lojaFarol.avatarAtual,
                    lojaFarol.nomeAvatarAtual,
                    "avatar-perfil-grande"
                )}
            </div>

            <div class="perfil-identidade">

                <span class="perfil-tag">
                    🗼 Farol do Saber
                </span>

                <h2>${nomeCompleto}</h2>

                <p>
                    👋 Olá, ${primeiroNome}! Este é o seu painel de progresso e conquistas.
                </p>

                <div class="perfil-badges">
                    <span>🎖 ${tituloAtual}</span>
                    <span>🏅 ${medalhaAtual}</span>
                    <span>⭐ ${pontosLuz} Pontos de Luz</span>
                </div>

            </div>

        </div>

        <div class="perfil-grid-resumo">

            <div class="perfil-resumo-card">
                <span>⭐</span>
                <strong>${pontosLuz}</strong>
                <small>Pontos de Luz</small>
            </div>

            <div class="perfil-resumo-card">
                <span>🛒</span>
                <strong>${saldoPontosLuz}</strong>
                <small>Saldo disponível</small>
            </div>

            <div class="perfil-resumo-card">
                <span>✅</span>
                <strong>${acertos}</strong>
                <small>Acertos</small>
            </div>

            <div class="perfil-resumo-card">
                <span>❌</span>
                <strong>${erros}</strong>
                <small>Erros</small>
            </div>

            <div class="perfil-resumo-card">
                <span>📚</span>
                <strong>${respondidas}</strong>
                <small>Questões respondidas</small>
            </div>

            <div class="perfil-resumo-card">
                <span>📊</span>
                <strong>${aproveitamento}%</strong>
                <small>Aproveitamento</small>
            </div>

            <div class="perfil-resumo-card">
                <span>⏱</span>
                <strong>${formatarTempo(tempoEstudado)}</strong>
                <small>Tempo estudado</small>
            </div>

            <div class="perfil-resumo-card">
                <span>🏆</span>
                <strong>${posicaoRankingUsuario || "-"}</strong>
                <small>Ranking</small>
            </div>

        </div>

        <div class="perfil-duas-colunas">

            <div class="perfil-bloco">
                <h3>🏅 Conquistas</h3>
                <p>
                    Itens desbloqueados e recompensas aplicadas ao seu perfil.
                </p>

                <div class="perfil-conquistas-grid">
                    ${conquistasHtml}
                </div>

                <div class="perfil-total-conquistas">
                    Total de conquistas registradas: <strong>${totalConquistas}</strong>
                </div>
            </div>

            <div class="perfil-bloco">
                <h3>📜 Certificado Digital</h3>
                <p>
                    O certificado usa seu nome completo, progresso e código de verificação.
                </p>

                ${statusCertificado}

                <div class="perfil-acoes-certificado">
                    ${
                        certificadoDesbloqueado
                        ? `
                            <button onclick="mostrarTela('lojaFarol'); atualizarLojaFarol(); setTimeout(gerarCertificadoDigital, 300);">
                                📜 Ver certificado
                            </button>
                        `
                        : `
                            <button onclick="mostrarTela('lojaFarol'); atualizarLojaFarol();">
                                🛒 Ir para Loja
                            </button>
                        `
                    }
                </div>
            </div>

        </div>

        <div class="perfil-bloco perfil-atalhos">
            <h3>⚡ Atalhos rápidos</h3>

            <div class="perfil-botoes-atalho">
                <button onclick="mostrarTela('lojaFarol'); atualizarLojaFarol();">
                    🛒 Loja Farol
                </button>

                <button onclick="mostrarTela('estatisticas')">
                    📊 Estatísticas
                </button>

                <button onclick="mostrarTela('erros'); atualizarCadernoErros();">
                    ❌ Caderno de Erros
                </button>

                <button onclick="mostrarTela('ranking'); carregarRankingFirebase();">
                    🏆 Ranking
                </button>

                <button onclick="compartilharProgresso()">
                    📤 Compartilhar progresso
                </button>
            </div>
        </div>
    `;

}

function atualizarLojaFarol(){

    const area = document.getElementById("conteudoLojaFarol");

    if(!area){
        return;
    }

    const certificadoDisponivel = acertos >= 100;

    const grupos = [
        {
            titulo: "👤 Avatares gratuitos",
            categoria: "avatares_gratuitos",
            descricao: "Escolha seu avatar inicial para aparecer no perfil, ranking, fórum e duelos."
        },
        {
            titulo: "⭐ Avatares premium",
            categoria: "avatares_premium",
            descricao: "Desbloqueie avatares especiais conforme avança nos estudos."
        },
        {
            titulo: "🎖 Títulos e medalhas",
            categoria: "titulos_medalhas",
            descricao: "Mostre suas conquistas no perfil e no card de progresso."
        },
        {
            titulo: "📤 Extras de progresso",
            categoria: "extras_progresso",
            descricao: "Deixe o compartilhamento do seu progresso mais bonito."
        },
        {
            titulo: "📜 Certificados",
            categoria: "certificados",
            descricao: "Recompensas especiais para destacar dedicação e desempenho."
        }
    ];

    const htmlGrupos = grupos.map(grupo => {

        const itens =
            recompensasLojaFarol.filter(
                item => item.categoria === grupo.categoria
            );

        if(itens.length === 0){
            return "";
        }

        return `
            <div class="secao-loja-farol">

                <div class="cabecalho-secao-loja">
                    <div>
                        <h3>${grupo.titulo}</h3>
                        <p>${grupo.descricao}</p>
                    </div>

                    <span>
                        ${itens.length} item(ns)
                    </span>
                </div>

                <div class="grid-loja">
                    ${itens.map(item => {

                        const comprada =
                            recompensaComprada(item.id);

                        const bloqueadaCertificado =
                            item.id === "certificado_digital" &&
                            !certificadoDisponivel;

                        const semSaldo =
                            saldoPontosLuz < item.custo &&
                            !comprada;

                        const custoTexto =
                            item.custo === 0
                            ? "Grátis"
                            : item.custo + " Pontos de Luz";

                        const faltamPontos =
                            Math.max(
                                item.custo - saldoPontosLuz,
                                0
                            );

                        const classeStatus =
                            classeStatusLoja(
                                item,
                                comprada,
                                semSaldo,
                                bloqueadaCertificado
                            );

                        const status =
                            textoStatusLoja(
                                item,
                                comprada,
                                semSaldo,
                                bloqueadaCertificado
                            );

                        const acao =
                            montarAcaoLoja(
                                item,
                                comprada,
                                semSaldo,
                                bloqueadaCertificado
                            );

                        return `
                            <div class="item-loja ${comprada ? "comprado" : ""} ${classeStatus}">

                                <div class="topo-item-loja">
                                    ${renderizarIconeLoja(item)}
                                </div>

                                <div class="corpo-item-loja">

                                    <h3>${item.nome}</h3>

                                    <p class="descricao-item-loja">
                                        ${item.descricao}
                                    </p>

                                    <div class="linha-custo-loja">
                                        <span>
                                            <strong>Custo:</strong>
                                            ${custoTexto}
                                        </span>
                                    </div>

                                    ${
                                        item.requisito
                                        ? `
                                            <div class="linha-requisito-loja">
                                                <span>
                                                    <strong>Requisito:</strong>
                                                    ${item.requisito}
                                                </span>
                                            </div>
                                        `
                                        : ""
                                    }

                                    ${
                                        !comprada &&
                                        item.custo > 0 &&
                                        semSaldo
                                        ? `
                                            <div class="linha-falta-loja">
                                                Faltam ${faltamPontos} Pontos de Luz
                                            </div>
                                        `
                                        : ""
                                    }

                                    ${
                                        item.id === "certificado_digital" &&
                                        !certificadoDisponivel
                                        ? `
                                            <div class="linha-falta-loja">
                                                Faltam ${Math.max(100 - acertos, 0)} acertos
                                            </div>
                                        `
                                        : ""
                                    }

                                </div>

                                <div class="rodape-item-loja">

                                    ${
                                        semSaldo && !comprada
                                        ? ""
                                        : `
                                            <p class="status-loja ${classeStatus}">
                                                ${status}
                                            </p>
                                        `
                                    }

                                    ${acao}

                                </div>

                            </div>
                        `;

                    }).join("")}
                </div>

            </div>
        `;

    }).join("");

    area.innerHTML = `
        <div class="loja-resumo loja-resumo-novo">

            <div class="loja-resumo-card">
                <span>⭐</span>
                <strong>${pontosLuz}</strong>
                <small>Pontos totais</small>
            </div>

            <div class="loja-resumo-card destaque">
                <span>🛒</span>
                <strong>${saldoPontosLuz}</strong>
                <small>Saldo para trocar</small>
            </div>

            <div class="loja-resumo-card perfil">
                <span>👤</span>
                <div class="perfil-loja-resumo">
                    ${montarAvatarHTML(
                        lojaFarol.avatarAtual,
                        lojaFarol.nomeAvatarAtual,
                        "avatar-pequeno"
                    )}
                    <strong>${lojaFarol.nomeAvatarAtual || "Estudante"}</strong>
                    <small>Perfil atual</small>
                </div>
            </div>

            <div class="loja-resumo-card">
                <span>🎖</span>
                <strong>${lojaFarol.tituloAtual || "Sem título"}</strong>
                <small>Título atual</small>
            </div>

        </div>

        <div class="loja-acoes-rapidas">
            <button
                class="btn-versao-avatar"
                onclick="alterarVersaoAvatar()">

                Trocar versão M/F

            </button>
        </div>

        <br>

        ${htmlGrupos}

        <div id="areaCertificadoDigital" class="area-certificado-digital"></div>
    `;
}


function quebrarTextoCanvas(ctx, texto, larguraMaxima){

    const palavras =
        String(texto || "")
        .split(" ");

    const linhas = [];
    let linha = "";

    palavras.forEach(palavra => {

        const teste =
            linha
            ? linha + " " + palavra
            : palavra;

        if(ctx.measureText(teste).width > larguraMaxima && linha){
            linhas.push(linha);
            linha = palavra;
        }
        else{
            linha = teste;
        }

    });

    if(linha){
        linhas.push(linha);
    }

    return linhas;

}

function desenharTextoCentralizadoCanvas(ctx, texto, x, y, larguraMaxima, alturaLinha){

    const linhas =
        quebrarTextoCanvas(
            ctx,
            texto,
            larguraMaxima
        );

    linhas.forEach((linha, indice) => {
        ctx.fillText(
            linha,
            x,
            y + (indice * alturaLinha)
        );
    });

    return y + (linhas.length * alturaLinha);

}

function desenharSeloCertificado(ctx, x, y){

    ctx.save();

    ctx.beginPath();
    ctx.arc(x, y, 78, 0, Math.PI * 2);
    ctx.fillStyle = "#fff8e1";
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#f9a825";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, 52, 0, Math.PI * 2);
    ctx.strokeStyle = "#0d47a1";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "#0d47a1";
    ctx.font = "bold 42px Arial";
    ctx.textAlign = "center";
    ctx.fillText("🗼", x, y + 14);

    ctx.fillStyle = "#7a5200";
    ctx.font = "bold 18px Arial";
    ctx.fillText("FAROL", x, y + 104);

    ctx.restore();

}

function desenharLinhaAssinaturaCertificado(ctx, x, y){

    ctx.save();

    ctx.strokeStyle = "#0d47a1";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x - 220, y);
    ctx.lineTo(x + 220, y);
    ctx.stroke();

    ctx.fillStyle = "#333";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Capitão João Paulo Silva", x, y + 38);

    ctx.fillStyle = "#666";
    ctx.font = "20px Arial";
    ctx.fillText("Idealizador do Farol do Saber", x, y + 68);

    ctx.restore();

}



const caminhoModeloCertificadoFarol =
    "imagens/certificados/modelo-certificado-farol.png";

let imagemModeloCertificadoFarol = null;

function carregarModeloCertificadoFarol(){

    return new Promise((resolve) => {

        if(imagemModeloCertificadoFarol){
            resolve(imagemModeloCertificadoFarol);
            return;
        }

        const imagem = new Image();
        imagem.crossOrigin = "anonymous";

        imagem.onload = () => {
            imagemModeloCertificadoFarol = imagem;
            resolve(imagem);
        };

        imagem.onerror = () => {
            console.warn("Modelo do certificado não carregou. Usando desenho por código.");
            resolve(null);
        };

        imagem.src =
            caminhoModeloCertificadoFarol;

    });

}

function obterNomeCertificado(){

    const nomeCompletoLocal =
        localStorage.getItem(
            "usuarioNomeCompleto"
        ) || "";

    const nome =
        (
            usuarioNomeCompleto ||
            nomeCompletoLocal ||
            usuarioForum ||
            "Aluno Farol do Saber"
        ).trim();

    if(
        !nome ||
        nome === "Visitante"
    ){
        return "Aluno Farol do Saber";
    }

    return nome;

}


function ajustarFonteTextoCanvas(ctx, texto, tamanhoInicial, tamanhoMinimo, familia, larguraMaxima){

    let tamanho =
        tamanhoInicial;

    do{
        ctx.font =
            familia.replace(
                "{size}",
                tamanho
            );

        if(ctx.measureText(texto).width <= larguraMaxima){
            return tamanho;
        }

        tamanho -= 2;

    }while(tamanho >= tamanhoMinimo);

    return tamanhoMinimo;

}

function desenharTextoComSombraCanvas(ctx, texto, x, y, cor, sombra){

    ctx.save();

    if(sombra){
        ctx.fillStyle =
            "rgba(0,0,0,0.18)";
        ctx.fillText(
            texto,
            x + 3,
            y + 3
        );
    }

    ctx.fillStyle =
        cor;

    ctx.fillText(
        texto,
        x,
        y
    );

    ctx.restore();

}

async function criarCanvasCertificadoDigital(){

    if(!lojaFarol.codigoCertificado){
        lojaFarol.codigoCertificado = gerarCodigoCertificado();
    }

    if(!lojaFarol.dataCertificado){
        lojaFarol.dataCertificado = new Date().toLocaleDateString("pt-BR");
    }

    const canvas =
        document.createElement("canvas");

    canvas.width = 1800;
    canvas.height = 1250;

    const ctx =
        canvas.getContext("2d");

    const modelo =
        await carregarModeloCertificadoFarol();

    if(modelo){
        ctx.drawImage(
            modelo,
            0,
            0,
            canvas.width,
            canvas.height
        );
    }
    else{
        ctx.fillStyle = "#f7f2df";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const respondidas =
        acertos + erros;

    const aproveitamento =
        respondidas > 0
        ? Math.round((acertos / respondidas) * 100)
        : 0;

    const nome =
        obterNomeCertificado();

    const titulo =
        lojaFarol.tituloAtual ||
        lojaFarol.nomeAvatarAtual ||
        "Estudante do Farol";

    const codigo =
        lojaFarol.codigoCertificado;

    const data =
        lojaFarol.dataCertificado;

    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";

    // Nome completo do aluno
    const tamanhoNome =
        ajustarFonteTextoCanvas(
            ctx,
            nome,
            74,
            46,
            "italic {size}px Georgia, 'Times New Roman', serif",
            1160
        );

    ctx.font =
        "italic " + tamanhoNome + "px Georgia, 'Times New Roman', serif";

    desenharTextoComSombraCanvas(
        ctx,
        nome,
        900,
        675,
        "#0d47a1",
        true
    );

    // Título no banner dourado
    const textoTitulo =
        "Título: " + titulo;

    const tamanhoTitulo =
        ajustarFonteTextoCanvas(
            ctx,
            textoTitulo,
            42,
            28,
            "bold {size}px Arial, sans-serif",
            940
        );

    ctx.font =
        "bold " + tamanhoTitulo + "px Arial, sans-serif";

    desenharTextoComSombraCanvas(
        ctx,
        textoTitulo,
        900,
        890,
        "#5f3d00",
        true
    );

    // Métricas
    const metricas = [
        {
            valor: pontosLuz,
            x: 420,
            y: 1028,
            largura: 115,
            fonteInicial: 48
        },
        {
            valor: acertos,
            x: 760,
            y: 1028,
            largura: 115,
            fonteInicial: 48
        },
        {
            valor: respondidas,
            x: 1095,
            y: 1028,
            largura: 115,
            fonteInicial: 48
        },
        {
            valor: aproveitamento + "%",
            x: 1435,
            y: 1028,
            largura: 130,
            fonteInicial: 48
        }
    ];

    metricas.forEach(metrica => {

        const valor =
            String(metrica.valor);

        const tamanho =
            ajustarFonteTextoCanvas(
                ctx,
                valor,
                metrica.fonteInicial,
                32,
                "bold {size}px Arial, sans-serif",
                metrica.largura
            );

        ctx.font =
            "bold " + tamanho + "px Arial, sans-serif";

        ctx.fillStyle =
            "#0d47a1";

        ctx.fillText(
            valor,
            metrica.x,
            metrica.y
        );

    });

    // Data e código
    ctx.textAlign = "left";
    ctx.fillStyle = "#111";
    ctx.font = "26px Arial, sans-serif";
    ctx.fillText(
        "Emitido em: " + data,
        120,
        1160
    );

    ctx.fillText(
        "Código de verificação: " + codigo,
        560,
        1160
    );

    return canvas;

}



async function gerarCertificadoDigital(){

    if(!lojaFarol.certificadoDigital){
        mostrarToast("Você ainda não desbloqueou o certificado digital.");
        return;
    }

    if(!lojaFarol.codigoCertificado){
        lojaFarol.codigoCertificado = gerarCodigoCertificado();
    }

    if(!lojaFarol.dataCertificado){
        lojaFarol.dataCertificado = new Date().toLocaleDateString("pt-BR");
    }

    salvarDados();

    const area = document.getElementById("areaCertificadoDigital");

    if(!area){
        return;
    }

    const respondidas =
        acertos + erros;

    const aproveitamento =
        respondidas > 0
        ? Math.round((acertos / respondidas) * 100)
        : 0;

    const canvas = await criarCanvasCertificadoDigital();
    canvas.className = "canvas-certificado";

    area.innerHTML = `
        <div class="certificado-preview-card">

            <div class="certificado-preview-topo">
                <div>
                    <h3>📜 Meu Certificado Digital</h3>
                    <p>
                        Certificado de participação e desempenho gerado pelo Farol do Saber.
                    </p>
                </div>

                <span>
                    ${lojaFarol.codigoCertificado}
                </span>
            </div>

            <div class="certificado-dados">
                <div>
                    <strong>⭐ ${pontosLuz}</strong>
                    <small>Pontos de Luz</small>
                </div>

                <div>
                    <strong>✅ ${acertos}</strong>
                    <small>Acertos</small>
                </div>

                <div>
                    <strong>📚 ${respondidas}</strong>
                    <small>Questões</small>
                </div>

                <div>
                    <strong>📊 ${aproveitamento}%</strong>
                    <small>Aproveitamento</small>
                </div>
            </div>

            <div id="previewCertificado" class="preview-certificado"></div>

            <div class="certificado-acoes">
                <button onclick="compartilharCertificadoDigital()">
                    📤 Compartilhar certificado
                </button>

                <button onclick="baixarCertificadoDigital()">
                    ⬇️ Baixar PNG
                </button>
            </div>

            <p class="certificado-observacao">
                O certificado é uma recompensa digital da plataforma e usa um código de verificação próprio.
            </p>

        </div>
    `;

    document
        .getElementById("previewCertificado")
        .appendChild(canvas);

    area.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

async function baixarCertificadoDigital(){
    const canvas = await criarCanvasCertificadoDigital();
    const link = document.createElement("a");
    link.download = "certificado-farol-do-saber.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

async function compartilharCertificadoDigital(){

    try{
        const canvas = await criarCanvasCertificadoDigital();
        const blob = await canvasParaBlob(canvas);

        if(blob){
            const arquivo = new File(
                [blob],
                "certificado-farol-do-saber.png",
                { type: "image/png" }
            );

            if(
                navigator.canShare &&
                navigator.canShare({ files: [arquivo] })
            ){
                await navigator.share({
                    title: "Meu certificado no Farol do Saber",
                    text: "Conquistei meu certificado digital no Farol do Saber! 🗼📚",
                    files: [arquivo]
                });
                return;
            }
        }

        if(navigator.share){
            await navigator.share({
                title: "Meu certificado no Farol do Saber",
                text: "Conquistei meu certificado digital no Farol do Saber! 🗼📚",
                url: window.location.href
            });
            return;
        }

        mostrarToast("Seu navegador não permite compartilhar direto. Baixe o certificado para enviar.");

    }catch(erro){
        if(erro && erro.name === "AbortError"){
            return;
        }
        console.log("Erro ao compartilhar certificado", erro);
        mostrarToast("Não foi possível compartilhar. Tente baixar o certificado.");
    }
}

async function salvarLojaFirebase(){
    if(!auth.currentUser){
        return;
    }
    try{
        await db.collection("usuarios")
        .doc(auth.currentUser.uid)
        .set({
            saldoPontosLuz: saldoPontosLuz,
            lojaFarol: lojaFarol,
            avatarAtual: lojaFarol.avatarAtual || "👤",
            nomeAvatarAtual: lojaFarol.nomeAvatarAtual || "Estudante",
            tituloAtual: lojaFarol.tituloAtual || "",
            medalhaEstudanteAtivo: !!lojaFarol.medalhaEstudanteAtivo,
            cardPremium: !!lojaFarol.cardPremium,
            certificadoDigital: !!lojaFarol.certificadoDigital
        }, { merge: true });
    }
    catch(erro){
        console.log("Erro ao salvar loja", erro);
    }
}

async function carregarLojaFirebase(){
    if(!auth.currentUser){
        return;
    }
    try{
        const doc = await db.collection("usuarios")
        .doc(auth.currentUser.uid)
        .get();

        if(doc.exists){
            const dados = doc.data() || {};
            if(dados.lojaFarol){
                lojaFarol = {
                    ...lojaFarol,
                    ...dados.lojaFarol,
                    comprados: {
                        ...(lojaFarol.comprados || {}),
                        ...((dados.lojaFarol && dados.lojaFarol.comprados) || {})
                    }
                };
            }
            if(typeof dados.pontosLuz === "number" && dados.pontosLuz > pontosLuz){
                pontosLuz = dados.pontosLuz;
            }

            if(typeof dados.acertos === "number" && dados.acertos > acertos){
                acertos = dados.acertos;
            }

            if(typeof dados.erros === "number" && dados.erros > erros){
                erros = dados.erros;
            }

            if(typeof dados.saldoPontosLuz === "number"){
                saldoPontosLuz = dados.saldoPontosLuz;
            }
            salvarDados();
            atualizarDashboard();
            atualizarLojaFarol();
            salvarRankingFirebase();
        }
    }
    catch(erro){
        console.log("Erro ao carregar loja", erro);
    }
}

// Compatibilidade para bordas arredondadas no canvas
if(!CanvasRenderingContext2D.prototype.roundRect){
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius){
        this.beginPath();
        this.moveTo(x + radius, y);
        this.lineTo(x + width - radius, y);
        this.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.lineTo(x + width, y + height - radius);
        this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        this.lineTo(x + radius, y + height);
        this.quadraticCurveTo(x, y + height, x, y + height - radius);
        this.lineTo(x, y + radius);
        this.quadraticCurveTo(x, y, x + radius, y);
        this.closePath();
    };
}

// ==========================
// DUELO DO SABER - DESAFIO POR CONVITE
// ==========================

let dueloDisciplinaSelecionada = "";
let dueloAssuntoSelecionado = "";

const FAROL_SABER_URL = "https://jpabaetetuba-capitao.github.io/farol-do-saber";
const CHAVE_DUELO_PENDENTE = "farol_duelo_pendente";

function normalizarCodigoDuelo(valor){
    let texto = String(valor || "").trim();

    if(!texto){
        return "";
    }

    try{
        if(texto.includes("?") || texto.includes("http")){
            const url = new URL(texto, window.location.origin);
            texto = url.searchParams.get("duelo")
                || url.searchParams.get("codigo")
                || url.searchParams.get("codigoDuelo")
                || texto;
        }
    }
    catch(erro){
        // Se não for URL válida, continua tratando como código digitado.
    }

    const encontrado = texto.toUpperCase().match(/FAROL[-\s]?[0-9]{4,6}/);

    if(encontrado){
        return encontrado[0]
            .replace(/\s+/g, "-")
            .replace(/^FAROL([0-9])/, "FAROL-$1")
            .replace(/--+/g, "-");
    }

    return texto.toUpperCase();
}

function montarLinkDuelo(codigo){
    const codigoLimpo = normalizarCodigoDuelo(codigo);
    return `${FAROL_SABER_URL}/?duelo=${encodeURIComponent(codigoLimpo)}`;
}

function obterCodigoDueloDaURL(){
    try{
        const params = new URLSearchParams(window.location.search);
        return normalizarCodigoDuelo(
            params.get("duelo")
            || params.get("codigo")
            || params.get("codigoDuelo")
            || ""
        );
    }
    catch(erro){
        return "";
    }
}

function codigoDueloPendente(){
    return normalizarCodigoDuelo(
        localStorage.getItem(CHAVE_DUELO_PENDENTE) || ""
    );
}

function capturarConviteDueloDaURL(){
    const codigo = obterCodigoDueloDaURL();

    if(codigo){
        localStorage.setItem(CHAVE_DUELO_PENDENTE, codigo);
        localStorage.setItem("farol_telaAtual", "duelos");
        localStorage.setItem("farol_forcar_duelos", "true");
    }

    atualizarAvisoConviteDuelo();

    return codigo;
}

function atualizarAvisoConviteDuelo(){
    const codigo = codigoDueloPendente();
    const avisoLogin = document.getElementById("conviteDueloLogin");

    if(avisoLogin){
        if(codigo){
            avisoLogin.style.display = "block";
            avisoLogin.innerHTML = `
                <strong>⚔️ Convite de Duelo recebido!</strong><br>
                Código: <strong>${codigo}</strong><br><br>
                Faça login ou crie sua conta para participar do desafio.
            `;
        }
        else{
            avisoLogin.style.display = "none";
            avisoLogin.innerHTML = "";
        }
    }
}

function preencherConviteDueloPendente(){
    const codigo = codigoDueloPendente();

    if(!codigo){
        return false;
    }

    const campo = document.getElementById("codigoDueloEntrada");
    const avisoDuelos = document.getElementById("dueloConviteRecebido");

    if(campo){
        campo.value = codigo;
    }

    if(avisoDuelos){
        avisoDuelos.style.display = "block";
        avisoDuelos.innerHTML = `
            <strong>⚔️ Convite encontrado!</strong><br>
            Código do duelo: <strong>${codigo}</strong><br><br>
            Clique em <strong>Entrar no Duelo</strong> para participar.
        `;
    }

    return true;
}

function abrirDueloPendenteAposLogin(){
    const codigo = codigoDueloPendente();

    if(!codigo || !auth.currentUser){
        return false;
    }

    localStorage.setItem("farol_telaAtual", "duelos");

    mostrarTela("duelos");
    prepararSelectDuelo();
    carregarMeusDuelos();
    preencherConviteDueloPendente();

    const campo = document.getElementById("codigoDueloEntrada");

    if(campo){
        campo.scrollIntoView({ behavior: "smooth", block: "center" });
        campo.focus();
    }

    mostrarToast("Código do duelo preenchido automaticamente.");

    return true;
}

function inicializarConviteDueloComSeguranca(){
    const codigo = capturarConviteDueloDaURL();

    if(codigo){
        localStorage.setItem("farol_telaAtual", "duelos");
        localStorage.setItem("farol_forcar_duelos", "true");
    }

    return codigo;
}

function deveAbrirDuelosPorConvite(){
    return !!codigoDueloPendente()
        || localStorage.getItem("farol_forcar_duelos") === "true";
}

const gruposDuelo = [
    {
        disciplina: "informatica",
        nome: "💻 Informática",
        assuntos: [
            { chave: "hardware", nome: "💻 Hardware" },
            { chave: "software", nome: "⚙️ Software" },
            { chave: "arquivos", nome: "🗂 Arquivos, Pastas e Backup" },
            { chave: "office", nome: "📊 Office e LibreOffice" },
            { chave: "internet", nome: "🌐 Internet" },
            { chave: "redes", nome: "🖧 Redes de Computadores" },
            { chave: "seguranca", nome: "🔐 Segurança da Informação" }
        ]
    },
    {
        disciplina: "portugues",
        nome: "📖 Língua Portuguesa",
        assuntos: [
            { chave: "interpretacao", nome: "📖 Interpretação de Textos" },
            { chave: "generos", nome: "📄 Tipologia e Gêneros Textuais" },
            { chave: "funcoes", nome: "📡 Funções da Linguagem" },
            { chave: "coesao", nome: "🔗 Coesão e Coerência" },
            { chave: "semantica", nome: "🧠 Semântica" },
            { chave: "figuras", nome: "🎭 Figuras de Linguagem" },
            { chave: "variacao", nome: "🌎 Variação Linguística" },
            { chave: "classesPalavras", nome: "📚 Classes de Palavras" },
            { chave: "formacaoPalavras", nome: "🧩 Formação de Palavras" },
            { chave: "sintaxe", nome: "🧱 Sintaxe" },
            { chave: "periodoComposto", nome: "🔗 Período Composto" },
            { chave: "concordancia", nome: "✅ Concordância" },
            { chave: "regencia", nome: "➡️ Regência" },
            { chave: "crase", nome: "À Crase" },
            { chave: "vozesVerbais", nome: "🗣 Vozes Verbais" },
            { chave: "pontuacao", nome: "✍️ Pontuação" },
            { chave: "ortografia", nome: "🔤 Ortografia" },
            { chave: "acentuacao", nome: "´ Acentuação" },
            { chave: "redacaoOficial", nome: "📄 Redação Oficial" }
        ]
    },
    {
        disciplina: "didatica",
        nome: "📚 Didática e Legislação",
        assuntos: [
            { chave: "bncc", nome: "📘 BNCC" },
            { chave: "ldb", nome: "📘 LDB" },
            { chave: "eca", nome: "📘 ECA" },
            { chave: "pne", nome: "📘 PNE" },
            { chave: "fundeb", nome: "📘 FUNDEB" },
            { chave: "lbi", nome: "♿ LBI" },
            { chave: "tea", nome: "🧩 TEA" },
            { chave: "inclusiva", nome: "♿ Inclusiva" },
            { chave: "etnicoRacial", nome: "✊ Étnico-Racial" },
            { chave: "educacaoCampo", nome: "🌱 Educação do Campo" },
            { chave: "quilombola", nome: "🏘 Quilombola" },
            { chave: "indigena", nome: "🪶 Indígena" },
            { chave: "didatica", nome: "📚 Didática" },
            { chave: "planejamento", nome: "📝 Planejamento" },
            { chave: "avaliacao", nome: "📊 Avaliação" }
        ]
    },
    {
        disciplina: "ciencias",
        nome: "🔬 Ciências",
        assuntos: [
            { chave: "fundamentosCiencias", nome: "🔬 Fundamentos de Ciências" },
            { chave: "bnccCiencias", nome: "📘 BNCC Ciências" },
            { chave: "alfabetizacaoCientifica", nome: "🧪 Alfabetização Científica" },
            { chave: "citologia", nome: "🧫 Citologia" },
            { chave: "ecologia", nome: "🌱 Ecologia" },
            { chave: "terraEUniverso", nome: "🌎 Terra e Universo" },
            { chave: "anatomiaFisiologia", nome: "🫀 Anatomia e Fisiologia" },
            { chave: "materiaQuimica", nome: "⚗️ Matéria e Química" },
            { chave: "fundamentosFisica", nome: "⚙️ Fundamentos de Física" }
        ]
    },
    {
        disciplina: "etica",
        nome: "⚖️ Ética e Administração Pública",
        assuntos: [
            { chave: "eticaConceitos", nome: "⚖️ Conceitos de Ética" },
            { chave: "principiosAdministracao", nome: "🏛 Princípios da Administração" },
            { chave: "deveresServidor", nome: "📜 Deveres do Servidor" },
            { chave: "condutaEtica", nome: "🤝 Conduta Ética" },
            { chave: "lai", nome: "🔎 LAI" },
            { chave: "lgpd", nome: "🔐 LGPD" }
        ]
    },
    {
        disciplina: "apoioEscolar",
        nome: "👨‍🏫 Apoio Escolar",
        assuntos: [
            { chave: "apoioOrganizacaoEducacao", nome: "🏫 Organização da Educação Básica" },
            { chave: "apoioLDB", nome: "📘 LDB" },
            { chave: "apoioECA", nome: "🧒 ECA" },
            { chave: "apoioLBI", nome: "♿ LBI" },
            { chave: "apoioTEA", nome: "🧩 TEA" },
            { chave: "apoioPoliticaEducacaoEspecial", nome: "🌐 Política de Educação Especial" },
            { chave: "apoioBNCCDiretrizes", nome: "📚 BNCC e Diretrizes" },
            { chave: "apoioEducacaoInclusiva", nome: "🤝 Educação Inclusiva" },
            { chave: "apoioPapelProfissional", nome: "👨‍🏫 Papel do Profissional" },
            { chave: "apoioTrabalhoColaborativo", nome: "🛡️ Trabalho Colaborativo" }
        ]
    },
    {
        disciplina: "historia",
        nome: "📜 História",
        assuntos: [
            { chave: "fundamentosEnsinoHistoria", nome: "📚 Fundamentos do Ensino de História" },
            { chave: "cienciaHistoricaOficioHistoriador", nome: "🔎 Ciência Histórica e Ofício do Historiador" },
            { chave: "povosPreColombianos", nome: "🏺 Povos Pré-Colombianos" },
            { chave: "formacaoSocialCulturalBrasileira", nome: "🧬 Formação Social e Cultural Brasileira" },
            { chave: "estadosModernosApropriacaoAmerica", nome: "🏛️ Estados Modernos e Apropriação da América" },
            { chave: "mercantilismoColonizacaoAmerica", nome: "💰 Mercantilismo e Colonização da América" },
            { chave: "brasilColonialSociedadeEconomiaResistencias", nome: "🌾 Brasil Colonial: Sociedade, Economia e Resistências" },
            { chave: "administracaoAmericaLusitanaColonial", nome: "🏛️ Administração da América Lusitana Colonial" },
            { chave: "aspectosEconomicosFormasTrabalhoBrasilColonialImperial", nome: "⚒️ Aspectos Econômicos e Formas de Trabalho" },
            { chave: "sociedadeColonialImperialBrasileira", nome: "🏛️ Sociedade Colonial e Imperial Brasileira" },
            { chave: "influenciasIdeologiasLiberaisBrasilSeculoXVIII", nome: "🕯️ Ideologias Liberais no Brasil do Século XVIII" },
            { chave: "movimentosAnticoloniaisBrasil", nome: "🔥 Movimentos Anticoloniais no Brasil" },
            { chave: "cortePortuguesaFormacaoEstadoNacionalBrasileiro", nome: "👑 Corte Portuguesa e Estado Nacional" },
            { chave: "estruturasPoliticasEconomicasSociaisEstadoImperialBrasileiro", nome: "🏛️ Estado Imperial Brasileiro" },
            { chave: "revoltasMovimentosBrasilImperial", nome: "⚔️ Revoltas e Movimentos no Brasil Imperial" },
            { chave: "expansaoFronteirasAmericaPortuguesa", nome: "🗺️ Expansão das Fronteiras da América Portuguesa" }
        ]
    }
];

function escaparHTMLDuelo(texto){
    return String(texto || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function assuntosDisponiveisDuelo(grupo){
    return (grupo.assuntos || []).filter(item => {
        const banco = bancoQuestoes[item.chave];
        return Array.isArray(banco) && banco.length > 0;
    });
}

function obterGrupoDuelo(disciplina){
    return gruposDuelo.find(grupo => grupo.disciplina === disciplina) || null;
}

function obterAssuntoDuelo(chave){

    for(const grupo of gruposDuelo){
        const assunto = grupo.assuntos.find(item => item.chave === chave);
        if(assunto){
            return {
                ...assunto,
                disciplina: grupo.disciplina,
                nomeDisciplina: grupo.nome
            };
        }
    }

    return {
        chave: chave,
        nome: chave,
        disciplina: "geral",
        nomeDisciplina: "Geral"
    };
}

function prepararSelectDuelo(){
    renderizarDisciplinasDuelo();

    if(!dueloDisciplinaSelecionada){
        const primeiroGrupo = gruposDuelo.find(grupo => assuntosDisponiveisDuelo(grupo).length > 0);
        if(primeiroGrupo){
            selecionarDisciplinaDuelo(primeiroGrupo.disciplina);
            return;
        }
    }

    renderizarTopicosDuelo();
    atualizarResumoDuelo();
}

function renderizarDisciplinasDuelo(){
    const area = document.getElementById("dueloDisciplinas");
    if(!area){
        return;
    }

    const gruposDisponiveis = gruposDuelo.filter(grupo => assuntosDisponiveisDuelo(grupo).length > 0);

    area.innerHTML = gruposDisponiveis.map(grupo => `
        <button
            class="duelo-opcao-disciplina ${grupo.disciplina === dueloDisciplinaSelecionada ? "selecionado" : ""}"
            onclick="selecionarDisciplinaDuelo('${grupo.disciplina}')">
            ${grupo.nome}
        </button>
    `).join("") || "Nenhuma disciplina disponível para duelos.";
}

function selecionarDisciplinaDuelo(disciplina){
    dueloDisciplinaSelecionada = disciplina;
    dueloAssuntoSelecionado = "";

    const busca = document.getElementById("buscaTopicoDuelo");
    if(busca){
        busca.value = "";
    }

    renderizarDisciplinasDuelo();
    renderizarTopicosDuelo();
    atualizarResumoDuelo();
}

function renderizarTopicosDuelo(){
    const area = document.getElementById("dueloTopicos");
    const textoDisciplina = document.getElementById("dueloDisciplinaSelecionadaTexto");

    if(!area){
        return;
    }

    const grupo = obterGrupoDuelo(dueloDisciplinaSelecionada);

    if(!grupo){
        area.innerHTML = "Escolha uma disciplina para listar os tópicos.";
        if(textoDisciplina){
            textoDisciplina.innerHTML = "Nenhuma disciplina selecionada.";
        }
        return;
    }

    if(textoDisciplina){
        textoDisciplina.innerHTML = `Disciplina selecionada: <strong>${grupo.nome}</strong>`;
    }

    const termo = ((document.getElementById("buscaTopicoDuelo") || {}).value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const assuntos = assuntosDisponiveisDuelo(grupo).filter(item => {
        if(!termo){
            return true;
        }
        const nomeNormalizado = item.nome
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        return nomeNormalizado.includes(termo) || item.chave.toLowerCase().includes(termo);
    });

    area.innerHTML = assuntos.map(item => {
        const total = Array.isArray(bancoQuestoes[item.chave]) ? bancoQuestoes[item.chave].length : 0;
        return `
            <button
                class="duelo-opcao-topico ${item.chave === dueloAssuntoSelecionado ? "selecionado" : ""}"
                onclick="selecionarAssuntoDuelo('${item.chave}')">
                <span>${item.nome}</span>
                <small>${total} questões disponíveis</small>
            </button>
        `;
    }).join("") || "Nenhum tópico encontrado nessa busca.";
}

function selecionarAssuntoDuelo(chave){
    dueloAssuntoSelecionado = chave;
    renderizarTopicosDuelo();
    atualizarResumoDuelo();
}

function atualizarResumoDuelo(){
    const area = document.getElementById("dueloResumoCriacao");
    if(!area){
        return;
    }

    if(!dueloAssuntoSelecionado){
        area.innerHTML = "Escolha uma disciplina e um tópico para criar o duelo.";
        return;
    }

    const assuntoDuelo = obterAssuntoDuelo(dueloAssuntoSelecionado);
    const quantidade = Number((document.getElementById("dueloQuantidade") || {}).value) || 5;
    const banco = bancoQuestoes[dueloAssuntoSelecionado] || [];
    const quantidadeFinal = Math.min(quantidade, banco.length);

    area.innerHTML = `
        <strong>Duelo selecionado:</strong><br>
        ${assuntoDuelo.nomeDisciplina}<br>
        ${assuntoDuelo.nome}<br>
        ${quantidadeFinal} questão${quantidadeFinal === 1 ? "" : "ões"}
    `;
}

function gerarCodigoDuelo(){
    return "FAROL-" + Math.floor(1000 + Math.random() * 9000);
}

async function criarDuelo(){

    if(!auth.currentUser){
        mostrarToast("Faça login para criar um duelo.");
        return;
    }

    const assunto = dueloAssuntoSelecionado || ((document.getElementById("dueloAssunto") || {}).value || "");
    const quantidade = Number(document.getElementById("dueloQuantidade").value) || 5;
    const banco = bancoQuestoes[assunto] || [];

    if(!assunto){
        mostrarToast("Escolha um tópico para criar o duelo.");
        return;
    }

    if(banco.length === 0){
        mostrarToast("Banco de questões não encontrado para este assunto.");
        return;
    }

    const indices = banco.map((_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(quantidade, banco.length));

    const codigo = gerarCodigoDuelo();
    const assuntoDuelo = obterAssuntoDuelo(assunto);
    const nomeAssunto = assuntoDuelo.nome || assunto;

    await db.collection("duelos")
        .doc(codigo)
        .set({
            codigo: codigo,
            disciplina: assuntoDuelo.disciplina,
            nomeDisciplina: assuntoDuelo.nomeDisciplina,
            assunto: assunto,
            nomeAssunto: nomeAssunto,
            quantidade: indices.length,
            indices: indices,
            criadoPor: auth.currentUser.uid,
            criadoPorNome: usuarioForum || "Aluno",
            criadoEm: Date.now(),
            cancelado: false,
            ocultoPara: [],
            uids: [auth.currentUser.uid],
            participantes: {
                [auth.currentUser.uid]: {
                    nome: usuarioForum || "Aluno",
                    acertos: 0,
                    erros: 0,
                    finalizado: false,
                    entrouEm: Date.now()
                }
            }
        });

    const linkDuelo = montarLinkDuelo(codigo);

    document.getElementById("codigoDueloCriado").innerHTML = `
        <div class="duelo-codigo">
            <h3>✅ Duelo criado!</h3>
            <br>
            <p><strong>Código:</strong></p>
            <div class="duelo-codigo-grande">${codigo}</div>
            <p>${assuntoDuelo.nomeDisciplina} • ${nomeAssunto}</p>
            <p>${indices.length} questão${indices.length === 1 ? "" : "ões"}</p>
            <p class="duelo-link"><strong>Link do convite:</strong><br>${linkDuelo}</p>
            <br>
            <div class="duelo-botoes-codigo">
                <button onclick="copiarCodigoDuelo('${codigo}')">
                    📋 Copiar código
                </button>
                <button onclick="copiarLinkDuelo('${codigo}')">
                    🔗 Copiar link
                </button>
                <button onclick="compartilharDuelo('${codigo}')">
                    📤 Compartilhar convite
                </button>
            </div>
        </div>
    `;

    mostrarToast("Duelo criado com sucesso!");
    carregarMeusDuelos();
}

async function entrarDueloPorCodigo(){

    const campo = document.getElementById("codigoDueloEntrada");
    const codigo = normalizarCodigoDuelo(campo.value || "");

    if(campo){
        campo.value = codigo;
    }

    if(!codigo){
        mostrarToast("Digite o código do duelo.");
        return;
    }

    await entrarDuelo(codigo);
}

async function entrarDuelo(codigo){

    if(!auth.currentUser){
        mostrarToast("Faça login para entrar no duelo.");
        return;
    }

    const ref = db.collection("duelos").doc(codigo);
    const doc = await ref.get();

    if(!doc.exists){
        mostrarToast("Duelo não encontrado.");
        return;
    }

    const dados = doc.data();

    if(dados.cancelado){
        mostrarToast("Este duelo foi cancelado pelo criador.");
        return;
    }

    const participantesAtuais = dados.participantes || {};
    const participanteAtual = participantesAtuais[auth.currentUser.uid] || {};

    await ref.set({
        uids: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid),
        ocultoPara: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.uid),
        participantes: {
            ...participantesAtuais,
            [auth.currentUser.uid]: {
                nome: usuarioForum || participanteAtual.nome || "Aluno",
                acertos: participanteAtual.acertos || 0,
                erros: participanteAtual.erros || 0,
                respostas: participanteAtual.respostas || [],
                finalizado: !!participanteAtual.finalizado,
                entrouEm: participanteAtual.entrouEm || Date.now()
            }
        }
    }, { merge: true });

    dueloAtual = {
        codigo: codigo,
        ...dados
    };

    dueloQuestoes = (dados.indices || []).map(i => bancoQuestoes[dados.assunto][i]).filter(Boolean);
    dueloIndiceAtual = 0;
    dueloAcertos = 0;
    dueloErros = 0;
    dueloRespostas = [];

    localStorage.removeItem(CHAVE_DUELO_PENDENTE);
    atualizarAvisoConviteDuelo();

    const avisoDuelos = document.getElementById("dueloConviteRecebido");
    if(avisoDuelos){
        avisoDuelos.style.display = "none";
        avisoDuelos.innerHTML = "";
    }

    mostrarQuestaoDuelo();
}

function mostrarQuestaoDuelo(){

    if(!dueloAtual || dueloQuestoes.length === 0){
        mostrarToast("Duelo sem questões.");
        return;
    }

    const q = dueloQuestoes[dueloIndiceAtual];
    const percentual = Math.round(((dueloIndiceAtual + 1) / dueloQuestoes.length) * 100);

    mostrarTela("resolverQuestao");

    document.getElementById("areaQuestao").innerHTML = `
        <div class="card">
            <h2>⚔️ Duelo do Saber</h2>
            <p><strong>Código:</strong> ${dueloAtual.codigo}</p>
            <p><strong>Disciplina:</strong> ${dueloAtual.nomeDisciplina || dueloAtual.disciplina || "Geral"}</p>
            <p><strong>Assunto:</strong> ${dueloAtual.nomeAssunto || dueloAtual.assunto}</p>
            <br>
            <h3>Questão ${dueloIndiceAtual + 1} de ${dueloQuestoes.length}</h3>
            <br>
            <progress value="${dueloIndiceAtual + 1}" max="${dueloQuestoes.length}" style="width:100%;height:25px;"></progress>
            <br><br>
            <strong>${percentual}% concluído</strong>
            <br><br>

            ${q.texto ? `
                <div class="card texto-base">
                    <h3>📄 Texto de Apoio</h3>
                    <br>
                    <p>${q.texto}</p>
                </div>
                <br>
            ` : ""}

            ${q.imagem ? `
                <img src="${q.imagem}" class="imagem-questao">
                <br><br>
            ` : ""}

            ${q.afirmacoes ? `
                <div class="card texto-base">
                    ${q.afirmacoes.map(item => `<p>${item}</p>`).join("")}
                </div>
                <br>
            ` : ""}

            <p class="pergunta">${q.pergunta}</p>
            <br>
            ${q.alternativas.map((alt, index) => `
                <label class="alternativa">
                    <input type="radio" name="respostaDuelo" value="${index}">
                    ${alt}
                </label>
            `).join("")}
            <br>
            <button onclick="corrigirDuelo()">Responder</button>
            <div id="feedback"></div>
        </div>
    `;
}

function corrigirDuelo(){

    const resposta = document.querySelector('input[name="respostaDuelo"]:checked');

    if(!resposta){
        mostrarToast("Selecione uma alternativa.");
        return;
    }

    const q = dueloQuestoes[dueloIndiceAtual];
    const acertou = Number(resposta.value) === q.correta;

    if(acertou){
        dueloAcertos++;
    }
    else{
        dueloErros++;
    }

    dueloRespostas.push({
        pergunta: q.pergunta,
        resposta: Number(resposta.value),
        correta: q.correta,
        acertou: acertou
    });

    document.querySelectorAll('input[name="respostaDuelo"]').forEach(opcao => opcao.disabled = true);

    document.getElementById("feedback").innerHTML = `
        <div class="${acertou ? "feedback-acerto" : "feedback-erro"}">
            <h3>${acertou ? "✅ Correta!" : "❌ Incorreta!"}</h3>
            <br>
            <button onclick="proximaQuestaoDuelo()">
                ${dueloIndiceAtual + 1 >= dueloQuestoes.length ? "Finalizar Duelo" : "Próxima"}
            </button>
        </div>
    `;
}

function proximaQuestaoDuelo(){

    dueloIndiceAtual++;

    if(dueloIndiceAtual >= dueloQuestoes.length){
        finalizarDuelo();
        return;
    }

    mostrarQuestaoDuelo();
}

async function finalizarDuelo(){

    if(!dueloAtual || !auth.currentUser){
        return;
    }

    const ref = db.collection("duelos").doc(dueloAtual.codigo);
    const doc = await ref.get();
    const dados = doc.data() || {};
    const participantes = dados.participantes || {};

    participantes[auth.currentUser.uid] = {
        ...(participantes[auth.currentUser.uid] || {}),
        nome: usuarioForum || "Aluno",
        acertos: dueloAcertos,
        erros: dueloErros,
        respostas: dueloRespostas,
        finalizado: true,
        finalizadoEm: Date.now()
    };

    await ref.update({
        participantes: participantes
    });

    adicionarPontosLuz(
        20,
        "Participação em duelo",
        "duelo-participacao:" + dueloAtual.codigo + ":" + auth.currentUser.uid
    );

    mostrarResultadoDuelo(dueloAtual.codigo);
}

async function mostrarResultadoDuelo(codigo){

    const doc = await db.collection("duelos").doc(codigo).get();

    if(!doc.exists){
        mostrarToast("Duelo não encontrado.");
        return;
    }

    const dados = doc.data();
    const participantes = Object.values(dados.participantes || {});
    const finalizados = participantes.filter(p => p.finalizado);

    let vencedorTexto = dados.cancelado
        ? "Duelo cancelado pelo criador."
        : "Aguardando o outro participante finalizar.";

    if(!dados.cancelado && finalizados.length >= 2){
        const ordenado = [...finalizados].sort((a,b) => (b.acertos - a.acertos));
        const vencedor = ordenado[0];
        vencedorTexto = `🏆 Vencedor: ${vencedor.nome} com ${vencedor.acertos} acertos`;
    }

    mostrarTela("resolverQuestao");

    document.getElementById("areaQuestao").innerHTML = `
        <div class="card">
            <h2>🏆 Resultado do Duelo</h2>
            <br>
            <p><strong>Código:</strong> ${codigo}</p>
            <p><strong>Disciplina:</strong> ${dados.nomeDisciplina || dados.disciplina || "Geral"}</p>
            <p><strong>Assunto:</strong> ${dados.nomeAssunto || dados.assunto}</p>
            <br>
            ${participantes.map(p => `
                <div class="linha-ranking">
                    <strong>${p.nome}</strong>
                    <span>${p.finalizado ? `${p.acertos} acertos` : "aguardando"}</span>
                </div>
            `).join("")}
            <br>
            <h3>${vencedorTexto}</h3>
            <br>
            <button onclick="mostrarTela('duelos'); carregarMeusDuelos();">⚔️ Voltar aos Duelos</button>
        </div>
    `;
}

async function carregarMeusDuelos(){

    const area = document.getElementById("meusDuelos");

    if(!area || !auth.currentUser){
        return;
    }

    try{
        const snapshot = await db.collection("duelos")
            .where("uids", "array-contains", auth.currentUser.uid)
            .limit(40)
            .get();

        const duelos = [];

        snapshot.forEach(doc => {
            const dados = doc.data();
            const ocultoPara = dados.ocultoPara || [];
            if(ocultoPara.includes(auth.currentUser.uid)){
                return;
            }
            duelos.push(dados);
        });

        duelos.sort((a,b) => (b.criadoEm || 0) - (a.criadoEm || 0));

        let html = "";

        duelos.forEach(dados => {
            const participantes = dados.participantes || {};
            const idsParticipantes = Object.keys(participantes);
            const meuRegistro = participantes[auth.currentUser.uid] || {};
            const finalizados = idsParticipantes.filter(uid => participantes[uid] && participantes[uid].finalizado).length;
            const totalParticipantes = idsParticipantes.length;
            const criadoPorMim = dados.criadoPor === auth.currentUser.uid;
            const temOutroParticipante = idsParticipantes.some(uid => uid !== auth.currentUser.uid);
            const status = dados.cancelado
                ? "🚫 Cancelado"
                : (meuRegistro.finalizado ? "✅ Finalizado" : "🟡 Pendente");

            html += `
                <div class="duelo-item duelo-item-melhorado">
                    <div class="duelo-item-topo">
                        <strong>${escaparHTMLDuelo(dados.codigo)}</strong>
                        <span>${status}</span>
                    </div>

                    <div class="duelo-item-info">
                        <strong>${escaparHTMLDuelo(dados.nomeDisciplina || dados.disciplina || "Geral")}</strong><br>
                        ${escaparHTMLDuelo(dados.nomeAssunto || dados.assunto)}<br>
                        ${dados.quantidade || "-"} questões • ${finalizados}/${totalParticipantes} participante(s) finalizaram
                    </div>

                    <div class="duelo-item-acoes">
                        ${!dados.cancelado && !meuRegistro.finalizado ? `
                            <button onclick="entrarDuelo('${dados.codigo}')">
                                🚀 Entrar/continuar
                            </button>
                        ` : ""}

                        <button onclick="mostrarResultadoDuelo('${dados.codigo}')">
                            👁 Ver resultado
                        </button>

                        ${!dados.cancelado ? `
                            <button onclick="compartilharDuelo('${dados.codigo}')">
                                📤 Compartilhar
                            </button>
                        ` : ""}

                        ${criadoPorMim && !temOutroParticipante && !dados.cancelado ? `
                            <button class="btn-excluir" onclick="cancelarDuelo('${dados.codigo}')">
                                🗑 Cancelar
                            </button>
                        ` : `
                            <button class="btn-excluir" onclick="arquivarDuelo('${dados.codigo}')">
                                📦 Ocultar
                            </button>
                        `}
                    </div>
                </div>
            `;
        });

        area.innerHTML = html || "Você ainda não entrou em nenhum duelo.";
    }
    catch(erro){
        area.innerHTML = "Não foi possível carregar seus duelos.";
        console.log("Erro nos duelos", erro);
    }
}

function montarMensagemDuelo(dados){
    const nomeCriador = dados.criadoPorNome || usuarioForum || "Um aluno";
    const link = montarLinkDuelo(dados.codigo);

    return `⚔️ Te desafiei no Duelo do Saber!

${nomeCriador} está te chamando para um desafio de questões no Farol do Saber.

📚 Disciplina: ${dados.nomeDisciplina || dados.disciplina || "Geral"}
🧠 Assunto: ${dados.nomeAssunto || dados.assunto}
📝 Questões: ${dados.quantidade || "-"}

🔑 Código do duelo: ${dados.codigo}

Acesse pelo link abaixo. Se ainda não tiver conta, é só criar uma conta e o código ficará preenchido automaticamente:
${link}

Quem acertar mais vence! 🏆🗼`;
}

async function copiarCodigoDuelo(codigo){
    const codigoLimpo = normalizarCodigoDuelo(codigo);

    try{
        await navigator.clipboard.writeText(codigoLimpo);
        mostrarToast("Código copiado!");
    }
    catch(erro){
        prompt("Copie o código do duelo:", codigoLimpo);
    }
}

async function copiarLinkDuelo(codigo){
    const link = montarLinkDuelo(codigo);

    try{
        await navigator.clipboard.writeText(link);
        mostrarToast("Link do duelo copiado!");
    }
    catch(erro){
        prompt("Copie o link do duelo:", link);
    }
}

async function compartilharDuelo(codigo){
    let mensagem = "";

    try{
        const doc = await db.collection("duelos").doc(codigo).get();
        if(!doc.exists){
            mostrarToast("Duelo não encontrado.");
            return;
        }

        const dados = doc.data();
        mensagem = montarMensagemDuelo(dados);
    }
    catch(erro){
        console.log("Erro ao buscar dados do duelo", erro);
        mensagem = `⚔️ Te desafiei no Duelo do Saber!

🔑 Código do duelo: ${codigo}

Acesse o Farol do Saber:
${montarLinkDuelo(codigo)}

Quem acertar mais vence! 🏆🗼`;
    }

    if(navigator.share){
        try{
            await navigator.share({
                title: "Duelo do Saber",
                text: mensagem
            });
            return;
        }
        catch(erro){
            if(erro && erro.name === "AbortError"){
                return;
            }
            console.log("Compartilhamento nativo não funcionou, usando fallback.", erro);
        }
    }

    if(navigator.clipboard && window.isSecureContext){
        try{
            await navigator.clipboard.writeText(mensagem);
            mostrarToast("Convite copiado. Agora cole no WhatsApp.");
            return;
        }
        catch(erro){
            console.log("Clipboard não funcionou, usando prompt.", erro);
        }
    }

    prompt("Copie o convite do duelo:", mensagem);
}

async function cancelarDuelo(codigo){
    if(!auth.currentUser){
        mostrarToast("Faça login para cancelar o duelo.");
        return;
    }

    const confirmar = confirm("Deseja cancelar este duelo? Ele será removido da sua lista.");
    if(!confirmar){
        return;
    }

    try{
        const ref = db.collection("duelos").doc(codigo);
        const doc = await ref.get();

        if(!doc.exists){
            mostrarToast("Duelo não encontrado.");
            return;
        }

        const dados = doc.data();
        const participantes = dados.participantes || {};
        const temOutroParticipante = Object.keys(participantes).some(uid => uid !== auth.currentUser.uid);

        if(dados.criadoPor !== auth.currentUser.uid){
            mostrarToast("Você só pode cancelar duelos criados por você.");
            return;
        }

        if(temOutroParticipante){
            mostrarToast("Outro aluno já entrou nesse duelo. Vou apenas ocultar da sua lista.");
            await arquivarDuelo(codigo);
            return;
        }

        await ref.update({
            cancelado: true,
            canceladoPor: auth.currentUser.uid,
            canceladoEm: Date.now(),
            ocultoPara: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid)
        });

        mostrarToast("Duelo cancelado e removido da sua lista.");
        carregarMeusDuelos();
    }
    catch(erro){
        console.log("Erro ao cancelar duelo", erro);
        mostrarToast("Não foi possível cancelar o duelo.");
    }
}

async function arquivarDuelo(codigo){
    if(!auth.currentUser){
        return;
    }

    const confirmar = confirm("Deseja ocultar este duelo da sua lista?");
    if(!confirmar){
        return;
    }

    try{
        await db.collection("duelos")
            .doc(codigo)
            .update({
                ocultoPara: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid)
            });

        mostrarToast("Duelo ocultado da sua lista.");
        carregarMeusDuelos();
    }
    catch(erro){
        console.log("Erro ao ocultar duelo", erro);
        mostrarToast("Não foi possível ocultar o duelo.");
    }
}


/* ==========================================================
   PATCH FAROL DO SABER — EDUCAÇÃO FÍSICA + MATEMÁTICA
   Libera as duas rotas e cria Matemática com primeiro tópico
========================================================== */

(function() {

    const topicosEducacaoFisicaFarol = [
    {
        "chave": "relacoesFundamentaisEducacaoFisica",
        "nome": "🏃 Relações Fundamentais da Educação Física"
    },
    {
        "chave": "tendenciasPedagogicasEducacaoFisica",
        "nome": "📚 Tendências Pedagógicas da Educação Física"
    },
    {
        "chave": "atividadesLudicasLazerRecreacao",
        "nome": "🎲 Atividades Lúdicas, Lazer e Recreação"
    },
    {
        "chave": "conteudosMetodologiaEducacaoFisica",
        "nome": "⚽ Conteúdos e Metodologia"
    },
    {
        "chave": "experienciasPraticoTeoricasEducacaoFisica",
        "nome": "🧠 Experiências Prático-Teóricas"
    },
    {
        "chave": "educacaoFisicaInclusiva",
        "nome": "🤝 Educação Física e Educação Inclusiva"
    },
    {
        "chave": "pcnsEducacaoFisica",
        "nome": "📘 PCNs e Educação Física"
    },
    {
        "chave": "bnccEducacaoFisica",
        "nome": "📗 BNCC e Educação Física"
    },
    {
        "chave": "socorrosUrgenciaEducacaoFisica",
        "nome": "🚑 Socorros de Urgência"
    },
    {
        "chave": "gestaoEventosEsportivosEducacaoFisica",
        "nome": "🏟️ Organização e Gestão de Eventos Esportivos"
    },
    {
        "chave": "dimensoesBiologicasFisiologicasEducacaoFisica",
        "nome": "🫀 Dimensões Biológicas e Fisiológicas"
    },
    {
        "chave": "educacaoFisicaNaLDB",
        "nome": "📜 Educação Física na LDB"
    },
    {
        "chave": "avaliacaoEducacaoFisicaEscolar",
        "nome": "📊 Avaliação em Educação Física Escolar"
    },
    {
        "chave": "historiaEducacaoFisica",
        "nome": "🏛️ História da Educação Física"
    },
    {
        "chave": "educacaoFisicaEspecial",
        "nome": "♿ Educação Física Especial"
    },
    {
        "chave": "educacaoFisicaGruposEspeciais",
        "nome": "🧩 Educação Física para Grupos Especiais"
    },
    {
        "chave": "anatomiaBasicaEducacaoFisica",
        "nome": "🦴 Anatomia Básica"
    },
    {
        "chave": "planosEixosMovimento",
        "nome": "📐 Planos e Eixos de Movimento"
    },
    {
        "chave": "abordagensPedagogicasEducacaoFisica",
        "nome": "🧭 Abordagens Pedagógicas da Educação Física"
    },
    {
        "chave": "eticaProfissionalEducacaoFisica",
        "nome": "⚖️ Ética Profissional"
    }
];
    const topicosMatematicaFarol = [
    {
        "chave": "educacaoMatematicaMetodologias",
        "nome": "📚 Educação Matemática e Metodologias"
    },
    {
        "chave": "bnccMatematica",
        "nome": "📘 BNCC e Matemática no Ensino Fundamental"
    },
    {
        "chave": "conjuntosNumericos",
        "nome": "🔢 Conjuntos e Conjuntos Numéricos"
    },
    {
        "chave": "proporcionalidadeMatematicaFinanceira",
        "nome": "💰 Proporcionalidade e Matemática Financeira"
    },
    {
        "chave": "funcoesReais",
        "nome": "📈 Funções Reais de Variável Real"
    },
    {
        "chave": "equacoesInequacoesSistemas",
        "nome": "🧮 Equações, Inequações e Sistemas"
    },
    {
        "chave": "monomiosPolinomios",
        "nome": "➗ Monômios e Polinômios"
    },
    {
        "chave": "sequenciasNumericas",
        "nome": "🔁 Sequências Numéricas: PA e PG"
    },
    {
        "chave": "geometriaPlana",
        "nome": "📐 Geometria Plana"
    },
    {
        "chave": "relacoesMetricasTrigonometricas",
        "nome": "📏 Relações Métricas e Trigonometria"
    },
    {
        "chave": "talesTransformacoesGeometricas",
        "nome": "📐 Tales e Transformações Geométricas"
    },
    {
        "chave": "geometriaEspacial",
        "nome": "🧊 Geometria Espacial"
    },
    {
        "chave": "geometriaAnalitica",
        "nome": "📍 Geometria Analítica"
    },
    {
        "chave": "contagemProbabilidade",
        "nome": "🎲 Contagem e Probabilidade"
    },
    {
        "chave": "estatisticaMatematica",
        "nome": "📊 Estatística"
    }
];

    const primeiroTopicoEducacaoFisicaFarol = "relacoesFundamentaisEducacaoFisica";
    const primeiroTopicoMatematicaFarol = "educacaoMatematicaMetodologias";

    function existeTopico(lista, chave) {
        return lista.some(item => item.chave === chave);
    }

    function nomeTopico(lista, chave) {
        const item = lista.find(t => t.chave === chave);
        return item ? item.nome : "Tópico em desenvolvimento";
    }

    if (typeof bancoQuestoes !== "undefined") {
        if (typeof relacoesFundamentaisEducacaoFisica !== "undefined") {
            bancoQuestoes.relacoesFundamentaisEducacaoFisica = relacoesFundamentaisEducacaoFisica;
        }
        if (typeof educacaoMatematicaMetodologias !== "undefined") {
            bancoQuestoes.educacaoMatematicaMetodologias = educacaoMatematicaMetodologias;
        }
    }

    if (typeof mapasMentaisPorAssunto !== "undefined") {
        mapasMentaisPorAssunto.relacoesFundamentaisEducacaoFisica = {
            titulo: "🏃 Relações Fundamentais da Educação Física",
            imagem: "imagens/mapas/relacoesFundamentaisEducacaoFisica.png"
        };
        mapasMentaisPorAssunto.educacaoMatematicaMetodologias = {
            titulo: "📚 Educação Matemática e Metodologias",
            imagem: "imagens/mapas/educacaoMatematicaMetodologias.png"
        };
    }

    if (typeof disciplinasTrilhaFarol !== "undefined") {
        disciplinasTrilhaFarol.educacaoFisica = {
            nome: "Educação Física",
            icone: "🏃",
            descricao: "Conhecimento específico de Professor de Educação Física."
        };
        disciplinasTrilhaFarol.matematica = {
            nome: "Matemática",
            icone: "📐",
            descricao: "Conhecimento específico de Professor de Matemática."
        };
    }

    if (typeof trilhasPreparacaoFarol !== "undefined") {
        trilhasPreparacaoFarol.professorEducacaoFisica = {
            nome: "Professor de Educação Física",
            nivel: "Nível Superior",
            icone: "🏃",
            cor: "azul",
            descricao: "Português, Informática, Didática e o conteúdo específico de Educação Física.",
            bloqueado: false,
            disciplinas: ["portugues", "informatica", "didatica", "educacaoFisica"]
        };
        trilhasPreparacaoFarol.professorMatematica = {
            nome: "Professor de Matemática",
            nivel: "Nível Superior",
            icone: "📐",
            cor: "azul",
            descricao: "Português, Informática, Didática e o conteúdo específico de Matemática.",
            bloqueado: false,
            disciplinas: ["portugues", "informatica", "didatica", "matematica"]
        };
    }

    if (typeof nomeDisciplinaForum === "function") {
        const nomeDisciplinaForumOriginalPatchProf = nomeDisciplinaForum;
        nomeDisciplinaForum = function(chave) {
            if (chave === "educacaoFisica") return "Educação Física";
            if (chave === "matematica") return "Matemática";
            return nomeDisciplinaForumOriginalPatchProf(chave);
        };
    }

    if (typeof abrirDisciplina === "function") {
        const abrirDisciplinaOriginalPatchProf = abrirDisciplina;
        abrirDisciplina = function(nome) {
            if (nome === "educacaoFisica") {
                disciplinaAtual = "educacaoFisica";
                mostrarTela("educacaoFisica");
                return;
            }
            if (nome === "matematica") {
                disciplinaAtual = "matematica";
                mostrarTela("matematica");
                return;
            }
            return abrirDisciplinaOriginalPatchProf(nome);
        };
    }

    if (typeof abrirAssunto === "function") {
        const abrirAssuntoOriginalPatchProf = abrirAssunto;
        abrirAssunto = function(assunto) {

            if (assunto === primeiroTopicoEducacaoFisicaFarol) {
                disciplinaAtual = "educacaoFisica";
                assuntoAtual = assunto;

                if (
                    typeof relacoesFundamentaisEducacaoFisicaTeoria !== "undefined" &&
                    Array.isArray(relacoesFundamentaisEducacaoFisicaTeoria) &&
                    relacoesFundamentaisEducacaoFisicaTeoria.length > 0
                ) {
                    abrirTeoria(
                        relacoesFundamentaisEducacaoFisicaTeoria,
                        "🏃 Relações Fundamentais da Educação Física"
                    );
                    return;
                }

                mostrarToast("Teoria de Educação Física não encontrada.");
                return;
            }

            if (assunto === primeiroTopicoMatematicaFarol) {
                disciplinaAtual = "matematica";
                assuntoAtual = assunto;

                if (
                    typeof educacaoMatematicaMetodologiasTeoria !== "undefined" &&
                    Array.isArray(educacaoMatematicaMetodologiasTeoria) &&
                    educacaoMatematicaMetodologiasTeoria.length > 0
                ) {
                    abrirTeoria(
                        educacaoMatematicaMetodologiasTeoria,
                        "📚 Educação Matemática e Metodologias"
                    );
                    return;
                }

                mostrarToast("Teoria de Matemática não encontrada.");
                return;
            }

            if (existeTopico(topicosEducacaoFisicaFarol, assunto)) {
                disciplinaAtual = "educacaoFisica";
                assuntoAtual = assunto;
                mostrarToast("Tópico em desenvolvimento: " + nomeTopico(topicosEducacaoFisicaFarol, assunto));
                mostrarTela("educacaoFisica");
                return;
            }

            if (existeTopico(topicosMatematicaFarol, assunto)) {
                disciplinaAtual = "matematica";
                assuntoAtual = assunto;
                mostrarToast("Tópico em desenvolvimento: " + nomeTopico(topicosMatematicaFarol, assunto));
                mostrarTela("matematica");
                return;
            }

            return abrirAssuntoOriginalPatchProf(assunto);
        };
    }

    if (typeof abrirTeoriaDoAssunto === "function") {
        const abrirTeoriaDoAssuntoOriginalPatchProf = abrirTeoriaDoAssunto;
        abrirTeoriaDoAssunto = function() {
            if (assuntoAtual === primeiroTopicoEducacaoFisicaFarol) {
                abrirTeoria(relacoesFundamentaisEducacaoFisicaTeoria, "🏃 Relações Fundamentais da Educação Física");
                return;
            }
            if (assuntoAtual === primeiroTopicoMatematicaFarol) {
                abrirTeoria(educacaoMatematicaMetodologiasTeoria, "📚 Educação Matemática e Metodologias");
                return;
            }
            return abrirTeoriaDoAssuntoOriginalPatchProf();
        };
    }

    if (typeof voltarParaAssuntos === "function") {
        const voltarParaAssuntosOriginalPatchProf = voltarParaAssuntos;
        voltarParaAssuntos = function() {
            if (existeTopico(topicosEducacaoFisicaFarol, assuntoAtual)) {
                mostrarTela("educacaoFisica");
                return;
            }
            if (existeTopico(topicosMatematicaFarol, assuntoAtual)) {
                mostrarTela("matematica");
                return;
            }
            return voltarParaAssuntosOriginalPatchProf();
        };
    }

    window.iniciarSimuladoEducacaoFisica = function() {
        if (typeof relacoesFundamentaisEducacaoFisica === "undefined" || !Array.isArray(relacoesFundamentaisEducacaoFisica)) {
            mostrarToast("Banco de Educação Física ainda não carregou.");
            return;
        }
        iniciarSimuladoPersonalizado([...relacoesFundamentaisEducacaoFisica], 30, "educacaoFisica");
    };

    window.iniciarSimuladoMatematica = function() {
        if (typeof educacaoMatematicaMetodologias === "undefined" || !Array.isArray(educacaoMatematicaMetodologias)) {
            mostrarToast("Banco de Matemática ainda não carregou.");
            return;
        }
        iniciarSimuladoPersonalizado([...educacaoMatematicaMetodologias], 30, "matematica");
    };

    renderizarTelaPreparacoes = function() {

        const painelPreparacoes = document.getElementById("painelPreparacoes");
        const painelTrilha = document.getElementById("painelTrilhaEstudo");

        if (!painelPreparacoes || !painelTrilha) {
            return;
        }

        const trilhaAtual = obterTrilhaAtualFarol();

        if (trilhaAtual) {
            renderizarTrilhaEstudo(trilhaAtual);
            return;
        }

        painelTrilha.style.display = "none";
        painelTrilha.innerHTML = "";
        painelPreparacoes.style.display = "block";

        painelPreparacoes.innerHTML = `
            <p class="texto-preparacao">
                Escolha o cargo para o Farol traçar sua Rota de Estudos com as etapas certas.
            </p>

            <h3 class="titulo-grupo-preparacao">🟢 Nível Médio</h3>

            <div class="grid-preparacoes">
                ${montarCardPreparacaoFarol("apoioEscolar", trilhasPreparacaoFarol.apoioEscolar)}
            </div>

            <h3 class="titulo-grupo-preparacao">🔵 Nível Superior — Professor</h3>

            <div class="grid-preparacoes">
                ${montarCardPreparacaoFarol("professorHistoria", trilhasPreparacaoFarol.professorHistoria)}
                ${montarCardPreparacaoFarol("professorCiencias", trilhasPreparacaoFarol.professorCiencias)}
                ${montarCardPreparacaoFarol("professorEducacaoFisica", trilhasPreparacaoFarol.professorEducacaoFisica)}
                ${montarCardPreparacaoFarol("professorMatematica", trilhasPreparacaoFarol.professorMatematica)}
            </div>

            <h3 class="titulo-grupo-preparacao">🔒 Em breve</h3>

            <div class="grid-preparacoes">
                ${montarCardPreparacaoFarol("professorEducacaoFisica", {...trilhasPreparacaoFarol.professorEducacaoFisica, bloqueado:false, cor:"azul"}) === "" ? "" : ""}
                ${montarCardPreparacaoFarol("administrador", trilhasPreparacaoFarol.administrador)}
            </div>
        `;
    };

})();


/* ==========================================================
   PATCH EXTRA — MATEMÁTICA TÓPICOS 2 E 3
========================================================== */

(function() {

    const abrirAssuntoAnteriorTopicos23 = abrirAssunto;
    abrirAssunto = function(assunto) {

        if (assunto === "bnccMatematica") {
            disciplinaAtual = "matematica";
            assuntoAtual = assunto;

            if (
                typeof bnccMatematicaTeoria !== "undefined" &&
                Array.isArray(bnccMatematicaTeoria) &&
                bnccMatematicaTeoria.length > 0
            ) {
                abrirTeoria(
                    bnccMatematicaTeoria,
                    "📘 BNCC e Matemática no Ensino Fundamental"
                );
                return;
            }

            mostrarToast("Teoria de BNCC Matemática não encontrada.");
            return;
        }

        if (assunto === "conjuntosNumericos") {
            disciplinaAtual = "matematica";
            assuntoAtual = assunto;

            if (
                typeof conjuntosNumericosTeoria !== "undefined" &&
                Array.isArray(conjuntosNumericosTeoria) &&
                conjuntosNumericosTeoria.length > 0
            ) {
                abrirTeoria(
                    conjuntosNumericosTeoria,
                    "🔢 Conjuntos e Conjuntos Numéricos"
                );
                return;
            }

            mostrarToast("Teoria de Conjuntos Numéricos não encontrada.");
            return;
        }

        return abrirAssuntoAnteriorTopicos23(assunto);
    };

    if (typeof bancoQuestoes !== "undefined") {
        if (typeof bnccMatematica !== "undefined") {
            bancoQuestoes.bnccMatematica = bnccMatematica;
        }
        if (typeof conjuntosNumericos !== "undefined") {
            bancoQuestoes.conjuntosNumericos = conjuntosNumericos;
        }
    }

    const abrirTeoriaDoAssuntoAnteriorTopicos23 = abrirTeoriaDoAssunto;
    abrirTeoriaDoAssunto = function() {
        if (assuntoAtual === "bnccMatematica") {
            abrirTeoria(
                bnccMatematicaTeoria,
                "📘 BNCC e Matemática no Ensino Fundamental"
            );
            return;
        }

        if (assuntoAtual === "conjuntosNumericos") {
            abrirTeoria(
                conjuntosNumericosTeoria,
                "🔢 Conjuntos e Conjuntos Numéricos"
            );
            return;
        }

        return abrirTeoriaDoAssuntoAnteriorTopicos23();
    };

})();


/* ==========================================================
   PROVAS ANTERIORES POR CARGO — CORREÇÃO APOIO ESCOLAR
   Garante que História, Ciências e Apoio Escolar abram separadamente.
========================================================== */

function obterConfigProvasFarol(){
    return {
        historia: {
            grupo: "grupoProvasHistoria",
            card: "cardProvasHistoria"
        },
        ciencias: {
            grupo: "grupoProvasCiencias",
            card: "cardProvasCiencias"
        },
        apoioEscolar: {
            grupo: "grupoProvasApoioEscolar",
            card: "cardProvasApoioEscolar"
        }
    };
}

function prepararTelaProvasAnterioresFarol(){
    const config = obterConfigProvasFarol();

    Object.values(config).forEach(item => {
        const grupo = document.getElementById(item.grupo);
        const card = document.getElementById(item.card);

        if(grupo){
            grupo.classList.add("grupo-provas-oculto");
            grupo.style.display = "none";
        }

        if(card){
            card.classList.remove("selecionado");
        }
    });

    const mensagem = document.getElementById("mensagemEscolhaProvas");
    if(mensagem){
        mensagem.style.display = "flex";
    }
}

function selecionarCargoProvasFarol(cargo){
    const config = obterConfigProvasFarol();
    const itemSelecionado = config[cargo];

    if(!itemSelecionado){
        if(typeof mostrarToast === "function"){
            mostrarToast("Cargo de provas não encontrado.");
        }
        return;
    }

    Object.values(config).forEach(item => {
        const grupo = document.getElementById(item.grupo);
        const card = document.getElementById(item.card);

        if(grupo){
            grupo.classList.add("grupo-provas-oculto");
            grupo.style.display = "none";
        }

        if(card){
            card.classList.remove("selecionado");
        }
    });

    const grupoSelecionado = document.getElementById(itemSelecionado.grupo);
    const cardSelecionado = document.getElementById(itemSelecionado.card);
    const mensagem = document.getElementById("mensagemEscolhaProvas");

    if(grupoSelecionado){
        grupoSelecionado.classList.remove("grupo-provas-oculto");
        grupoSelecionado.style.display = "block";
    }

    if(cardSelecionado){
        cardSelecionado.classList.add("selecionado");
    }

    if(mensagem){
        mensagem.style.display = "none";
    }
}

function voltarCargosProvasFarol(){
    prepararTelaProvasAnterioresFarol();
    const tela = document.getElementById("provasAnteriores");
    if(tela){
        tela.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}


/* ==========================================================
   PATCH FAROL DO SABER — PROFESSOR DE GEOGRAFIA
   Etapa 1: estrutura completa + Tópico 1 liberado
========================================================== */
(function(){
    const topicosGeografiaFarol=[{chave:"fundamentosGeografia",nome:"🌍 Fundamentos da Geografia"},{chave:"cartografiaGeografia",nome:"🗺️ Cartografia e Representação do Espaço"},{chave:"geografiaFisicaEstruturaTerra",nome:"⛰️ Geografia Física e Estrutura da Terra"},{chave:"climaDinamicaClimatica",nome:"🌦️ Clima e Dinâmica Climática"},{chave:"hidrografiaVegetacaoMeioAmbienteGeo",nome:"💧 Hidrografia, Vegetação e Meio Ambiente"},{chave:"populacaoMundialBrasileira",nome:"👥 População Mundial e Brasileira"},{chave:"espacoIndustrialMundialBrasileiro",nome:"🏭 Espaço Industrial Mundial e Brasileiro"},{chave:"espacoUrbanoMundialBrasileiro",nome:"🏙️ Espaço Urbano Mundial e Brasileiro"},{chave:"espacoAgrarioMundialBrasileiro",nome:"🌾 Espaço Agrário Mundial e Brasileiro"},{chave:"regionalizacaoEspacoMundialBrasileiro",nome:"🧭 Regionalização do Espaço Mundial e Brasileiro"},{chave:"geopoliticaMundial",nome:"🌐 Geopolítica Mundial"},{chave:"geografiaParaBarcarena",nome:"🏞️ Geografia do Pará e de Barcarena"}];
    const primeiroTopicoGeografiaFarol="fundamentosGeografia";
    function existeTopicoGeografiaFarol(chave){return topicosGeografiaFarol.some(item=>item.chave===chave);}
    function nomeTopicoGeografiaFarol(chave){const item=topicosGeografiaFarol.find(t=>t.chave===chave);return item?item.nome:"Tópico de Geografia";}
    if(typeof bancoQuestoes!=="undefined"&&typeof fundamentosGeografia!=="undefined"){bancoQuestoes.fundamentosGeografia=fundamentosGeografia;}
    if(typeof mapasMentaisPorAssunto!=="undefined"){mapasMentaisPorAssunto.fundamentosGeografia={titulo:"🌍 Fundamentos da Geografia",imagem:"imagens/mapas/FundamentosGeografia.png"};}
    if(typeof disciplinasTrilhaFarol!=="undefined"){disciplinasTrilhaFarol.geografia={nome:"Professor de Geografia",icone:"🌍",descricao:"Conhecimento específico de Professor de Geografia."};}
    if(typeof trilhasPreparacaoFarol!=="undefined"){trilhasPreparacaoFarol.professorGeografia={nome:"Professor de Geografia",nivel:"Nível Superior",icone:"🌍",cor:"azul",descricao:"Português, Informática, Didática e o conteúdo específico de Geografia.",bloqueado:false,disciplinas:["portugues","informatica","didatica","geografia"]};}
    if(typeof nomeDisciplinaForum==="function"){const anterior=nomeDisciplinaForum;nomeDisciplinaForum=function(chave){if(chave==="geografia"){return "Professor de Geografia";}return anterior(chave);};}
    if(typeof abrirDisciplina==="function"){const anterior=abrirDisciplina;abrirDisciplina=function(nome){if(nome==="geografia"){disciplinaAtual="geografia";mostrarTela("geografia");return;}return anterior(nome);};}
    if(typeof abrirAssunto==="function"){const anterior=abrirAssunto;abrirAssunto=function(assunto){if(assunto===primeiroTopicoGeografiaFarol){disciplinaAtual="geografia";assuntoAtual=assunto;if(typeof fundamentosGeografiaTeoria!=="undefined"&&Array.isArray(fundamentosGeografiaTeoria)&&fundamentosGeografiaTeoria.length>0){abrirTeoria(fundamentosGeografiaTeoria,"🌍 Fundamentos da Geografia");return;}mostrarToast("Teoria de Geografia não encontrada.");return;}if(existeTopicoGeografiaFarol(assunto)){disciplinaAtual="geografia";assuntoAtual=assunto;mostrarToast("Tópico em construção: "+nomeTopicoGeografiaFarol(assunto));mostrarTela("geografia");return;}return anterior(assunto);};}
    if(typeof abrirTeoriaDoAssunto==="function"){const anterior=abrirTeoriaDoAssunto;abrirTeoriaDoAssunto=function(){if(assuntoAtual===primeiroTopicoGeografiaFarol){abrirTeoria(fundamentosGeografiaTeoria,"🌍 Fundamentos da Geografia");return;}return anterior();};}
    if(typeof voltarParaAssuntos==="function"){const anterior=voltarParaAssuntos;voltarParaAssuntos=function(){if(existeTopicoGeografiaFarol(assuntoAtual)){mostrarTela("geografia");return;}return anterior();};}
    if(typeof obterBancoDisciplinaSimuladoFarol==="function"){const anterior=obterBancoDisciplinaSimuladoFarol;obterBancoDisciplinaSimuladoFarol=function(disciplina){if(disciplina==="geografia"){return typeof fundamentosGeografia!=="undefined"?[...fundamentosGeografia]:[];}return anterior(disciplina);};}
    window.iniciarSimuladoGeografia=function(){if(typeof fundamentosGeografia==="undefined"||!Array.isArray(fundamentosGeografia)){mostrarToast("Banco de Geografia ainda não carregou.");return;}iniciarSimuladoPersonalizado([...fundamentosGeografia],30,"geografia");};
    if(typeof renderizarTelaPreparacoes==="function"){renderizarTelaPreparacoes=function(){const painelPreparacoes=document.getElementById("painelPreparacoes");const painelTrilha=document.getElementById("painelTrilhaEstudo");if(!painelPreparacoes||!painelTrilha){return;}const trilhaAtual=obterTrilhaAtualFarol();if(trilhaAtual){renderizarTrilhaEstudo(trilhaAtual);return;}painelTrilha.style.display="none";painelTrilha.innerHTML="";painelPreparacoes.style.display="block";painelPreparacoes.innerHTML=`<p class="texto-preparacao">Escolha o cargo para o Farol traçar sua Rota de Estudos com as etapas certas.</p><h3 class="titulo-grupo-preparacao">🟢 Nível Médio</h3><div class="grid-preparacoes">${montarCardPreparacaoFarol("apoioEscolar",trilhasPreparacaoFarol.apoioEscolar)}</div><h3 class="titulo-grupo-preparacao">🔵 Nível Superior — Professor</h3><div class="grid-preparacoes">${montarCardPreparacaoFarol("professorHistoria",trilhasPreparacaoFarol.professorHistoria)}${montarCardPreparacaoFarol("professorCiencias",trilhasPreparacaoFarol.professorCiencias)}${montarCardPreparacaoFarol("professorGeografia",trilhasPreparacaoFarol.professorGeografia)}${trilhasPreparacaoFarol.professorEducacaoFisica?montarCardPreparacaoFarol("professorEducacaoFisica",trilhasPreparacaoFarol.professorEducacaoFisica):""}${trilhasPreparacaoFarol.professorMatematica?montarCardPreparacaoFarol("professorMatematica",trilhasPreparacaoFarol.professorMatematica):""}</div><h3 class="titulo-grupo-preparacao">🔒 Em breve</h3><div class="grid-preparacoes">${montarCardPreparacaoFarol("administrador",trilhasPreparacaoFarol.administrador)}</div>`;};}
    if(typeof mostrarTodasDisciplinasFarol==="function"){mostrarTodasDisciplinasFarol=function(){localStorage.removeItem("farol_trilha_atual");const painelPreparacoes=document.getElementById("painelPreparacoes");const painelTrilha=document.getElementById("painelTrilhaEstudo");if(!painelPreparacoes||!painelTrilha){return;}painelPreparacoes.style.display="none";painelTrilha.style.display="block";const todas=["portugues","informatica","etica","apoioEscolar","didatica","ciencias","historia","geografia","educacaoFisica","matematica"].filter(disciplina=>disciplinasTrilhaFarol[disciplina]);const cards=todas.map((disciplina,indice)=>{const dados=disciplinasTrilhaFarol[disciplina];return `<button class="card-disciplina-trilha" onclick="abrirDisciplina('${disciplina}')"><span class="numero-trilha">${indice+1}</span><span class="icone-disciplina-trilha">${dados.icone}</span><span class="dados-disciplina-trilha"><strong>${escaparHTML(dados.nome)}</strong><small>${escaparHTML(dados.descricao)}</small></span></button>`;}).join("");painelTrilha.innerHTML=`<div class="cabecalho-trilha"><div><span class="selo-nivel-trilha">Visão geral</span><h3>🗺️ Todas as disciplinas liberadas</h3><p>Use esta opção apenas quando quiser navegar por todo o conteúdo da plataforma.</p></div><button class="btn-alterar-preparacao" onclick="alterarPreparacaoFarol()">⚓ Voltar às Rotas</button></div><div class="grid-disciplinas-trilha">${cards}</div>`;};}
})();
