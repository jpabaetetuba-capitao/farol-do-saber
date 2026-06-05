// ==========================
// FAROL DO SABER v0.2
// ==========================

// TROCA DE TELAS
function mostrarTela(id) {

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}

// ==========================
// BANCO DE QUESTÕES
// ==========================

const bancoQuestoes = {
    curriculo,
    inclusiva
};

// ==========================
// VARIÁVEIS GLOBAIS
// ==========================

let disciplinaAtual = "";
let questaoAtual = 0;

let acertos = 0;
let erros = 0;

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
        "farol_caderno",
        JSON.stringify(cadernoErros)
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

    cadernoErros =
        JSON.parse(
            localStorage.getItem("farol_caderno")
        ) || [];

}

// ==========================
// CARREGAR DISCIPLINA
// ==========================

function carregarDisciplina() {

    disciplinaAtual =
        document.getElementById("disciplinaSelect").value;

    if (!disciplinaAtual) {
        alert("Selecione uma disciplina.");
        return;
    }

    questaoAtual = 0;

    mostrarQuestao();
}

// ==========================
// MOSTRAR QUESTÃO
// ==========================

function mostrarQuestao() {

    const area = document.getElementById("areaQuestao");

    const questoes = bancoQuestoes[disciplinaAtual];

    const q = questoes[questaoAtual];

const percentual =
    Math.round(
        ((questaoAtual + 1) /
        questoes.length) * 100
    );

    area.innerHTML = `
    
    <div class="card">

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

    const q =
        bancoQuestoes[disciplinaAtual][questaoAtual];

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

        const nomeDisciplina =
            disciplinaAtual === "curriculo"
                ? "Currículo e Planejamento"
                : "Educação Inclusiva";

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
atualizarCadernoErros();
salvarDados();

}

// ==========================
// PRÓXIMA QUESTÃO
// ==========================

function proximaQuestao() {

    questaoAtual++;

    const total = bancoQuestoes[disciplinaAtual].length;

    if (questaoAtual >= total) {

        document.getElementById("areaQuestao").innerHTML = `
        <div class="card">

            <h2>🎉 Disciplina Concluída!</h2>

            <br>

            <p>Você concluiu todas as questões desta disciplina.</p>

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

    atualizarEstatisticas();
    atualizarCadernoErros();

    alert("Progresso apagado com sucesso!");

}

// ==========================
// SIMULADOS v0.6
// ==========================

function iniciarSimulado(qtd) {

    const todasQuestoes = [

        ...curriculo,

        ...inclusiva

    ];

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

    mostrarTela("questoes");

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
// INICIALIZAÇÃO
// ==========================

window.onload = function () {

    carregarDados();

    atualizarEstatisticas();

    atualizarCadernoErros();

};