/* ==========================================================
   FAROL DO SABER — ÁREA ADMINISTRATIVA V25
   - Acesso exclusivo da conta administrativa
   - Reautenticação pelo Firebase
   - Lista alunos que já possuem acesso liberado
   - Pacote comum superior + cargos, busca, edição e revogação
========================================================== */
(function(){
    "use strict";

    const DURACAO_SESSAO_ADMIN_MS = 15 * 60 * 1000;

    const firebaseFarol = window.farolFirebase || {};
    const authFarol = firebaseFarol.auth || (typeof auth !== "undefined" ? auth : null);
    const dbFarol = firebaseFarol.db || (typeof db !== "undefined" ? db : null);

    let adminConfirmadoEm = 0;
    let usuarioSelecionado = null;
    let acessosLiberadosCache = [];
    let abaAdminAtual = "liberados";

    const PACOTES_ABAETETUBA = [
        {
            chave: "comunsSuperior",
            nome: "Disciplinas Comuns — Nível Superior",
            icone: "📚",
            checkbox: "acessoAbaetetubaComunsSuperior",
            classe: "comuns-superior",
            tipo: "pacote",
            concurso: "abaetetuba2026"
        }
    ];

    const CARGOS_ABAETETUBA = [
        {
            chave: "professorHistoria",
            nome: "Professor de História",
            icone: "📜",
            checkbox: "acessoAbaetetubaHistoria",
            classe: "historia",
            concurso: "abaetetuba2026"
        },
        {
            chave: "professorCiencias",
            nome: "Professor de Ciências",
            icone: "🔬",
            checkbox: "acessoAbaetetubaCiencias",
            classe: "ciencias",
            concurso: "abaetetuba2026"
        },
        {
            chave: "professorGeografia",
            nome: "Professor de Geografia",
            icone: "🌍",
            checkbox: "acessoAbaetetubaGeografia",
            classe: "geografia",
            concurso: "abaetetuba2026"
        }
    ];

    const ACESSOS_ABAETETUBA = [
        ...PACOTES_ABAETETUBA,
        ...CARGOS_ABAETETUBA
    ];

    const CARGOS_TRANSPETRO = [
        {
            chave: "auxiliarSaude",
            nome: "Auxiliar de Saúde — ASA",
            icone: "🩺",
            checkbox: "acessoTranspetroAuxiliarSaude",
            classe: "transpetro",
            concurso: "transpetro2026"
        },
        {
            chave: "condutorBombeador",
            nome: "Condutor Bombeador — CDM/BBD",
            icone: "🛢️",
            checkbox: "acessoTranspetroCondutorBombeador",
            classe: "transpetro",
            concurso: "transpetro2026"
        },
        {
            chave: "condutorMecanico",
            nome: "Condutor Mecânico — CDM/MEC",
            icone: "🔧",
            checkbox: "acessoTranspetroCondutorMecanico",
            classe: "transpetro",
            concurso: "transpetro2026"
        },
        {
            chave: "cozinheiro",
            nome: "Cozinheiro — CZA",
            icone: "👨‍🍳",
            checkbox: "acessoTranspetroCozinheiro",
            classe: "transpetro",
            concurso: "transpetro2026"
        },
        {
            chave: "eletricista",
            nome: "Eletricista — ELT",
            icone: "⚡",
            checkbox: "acessoTranspetroEletricista",
            classe: "transpetro",
            concurso: "transpetro2026"
        },
        {
            chave: "mocoConves",
            nome: "Moço de Convés — MOC",
            icone: "⚓",
            checkbox: "acessoTranspetroMocoConves",
            classe: "transpetro",
            concurso: "transpetro2026"
        },
        {
            chave: "mocoMaquinas",
            nome: "Moço de Máquinas — MOM",
            icone: "⚙️",
            checkbox: "acessoTranspetroMocoMaquinas",
            classe: "transpetro",
            concurso: "transpetro2026"
        },
        {
            chave: "taifeiro",
            nome: "Taifeiro — TAA",
            icone: "⚓",
            checkbox: "acessoTranspetroTaifeiro",
            classe: "transpetro",
            concurso: "transpetro2026"
        },
        {
            chave: "segundoOficialNautica",
            nome: "Segundo Oficial de Náutica — 2ON",
            icone: "🧭",
            checkbox: "acessoTranspetroSegundoOficialNautica",
            classe: "transpetro",
            concurso: "transpetro2026"
        },
        {
            chave: "segundoOficialMaquinas",
            nome: "Segundo Oficial de Máquinas — 2OM",
            icone: "⚙️",
            checkbox: "acessoTranspetroSegundoOficialMaquinas",
            classe: "transpetro",
            concurso: "transpetro2026"
        }
    ];

    function textoSeguro(valor){
        if(typeof window.escaparHTML === "function"){
            return window.escaparHTML(valor);
        }

        return String(valor || "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function normalizarTexto(valor){
        return String(valor || "")
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    function aviso(mensagem){
        if(typeof window.mostrarToast === "function"){
            window.mostrarToast(mensagem);
            return;
        }
        alert(mensagem);
    }

    function abrirTela(id){
        if(typeof window.mostrarTela === "function"){
            window.mostrarTela(id);
            return;
        }

        document.querySelectorAll(".tela").forEach(tela => {
            tela.classList.remove("ativa");
        });

        const destino = document.getElementById(id);
        if(destino){
            destino.classList.add("ativa");
        }
    }

    function usuarioAtual(){
        return authFarol && authFarol.currentUser
            ? authFarol.currentUser
            : null;
    }

    // E-mail da conta administrativa atualmente autenticada.
    // O admin.js já registrava atualizadoPor com emailAtual(),
    // mas a função não existia, causando ReferenceError antes do Firestore.
    function emailAtual(){
        const usuario = usuarioAtual();
        return usuario && usuario.email
            ? String(usuario.email).trim().toLowerCase()
            : "";
    }

    function ehAdministrador(){
        return Boolean(
            (
                typeof window.farolTemPermissaoAdmin === "function" &&
                window.farolTemPermissaoAdmin()
            )
            ||
            window.farolUsuarioEhAdmin === true
        );
    }

    function sessaoConfirmada(){
        return ehAdministrador() &&
            adminConfirmadoEm > 0 &&
            (Date.now() - adminConfirmadoEm) <= DURACAO_SESSAO_ADMIN_MS;
    }

    function exigirSessaoAdmin(mensagem){
        if(sessaoConfirmada()){
            return true;
        }

        aviso(mensagem || "Confirme novamente a senha do administrador para continuar.");
        window.abrirPainelAcessosFarol();
        return false;
    }

    // Funções compartilhadas com o módulo de alunos on-line.
    // Elas precisam ser expostas porque o painel on-line está em outra IIFE.
    window.sessaoAdminFarolConfirmada = sessaoConfirmada;
    window.textoSeguroAdminFarol = textoSeguro;
    window.dbAdminFarol = dbFarol;

    function limparConfirmacao(){
        adminConfirmadoEm = 0;
        usuarioSelecionado = null;
        acessosLiberadosCache = [];

        const senha = document.getElementById("senhaConfirmacaoAdminFarol");
        const mensagem = document.getElementById("mensagemConfirmacaoAdminFarol");
        const botao = document.getElementById("btnConfirmarSenhaAdminFarol");

        if(senha){
            senha.value = "";
        }
        if(mensagem){
            mensagem.textContent = "";
            mensagem.className = "mensagem-confirmacao-admin";
        }
        if(botao){
            botao.disabled = false;
            botao.textContent = "🔓 Validar acesso administrativo";
        }
    }

    function cargoEstaLiberado(valor){
        return valor === true || !!(
            valor &&
            typeof valor === "object" &&
            valor.liberado === true
        );
    }

    function obterAbaetetuba(documento){
        const concursos = documento && documento.concursos
            ? documento.concursos
            : {};

        return concursos.abaetetuba2026 || {};
    }

    function obterTranspetro(documento){
        const concursos = documento && documento.concursos
            ? documento.concursos
            : {};

        return concursos.transpetro2026 || {};
    }

    function possuiCargoSuperiorLiberado(documento){
        const abaetetuba = obterAbaetetuba(documento);
        return CARGOS_ABAETETUBA.some(cargo =>
            cargoEstaLiberado(abaetetuba[cargo.chave])
        );
    }

    function obterCargosLiberados(documento){
        const abaetetuba = obterAbaetetuba(documento);
        const transpetro = obterTranspetro(documento);
        const pacoteComumEfetivo =
            cargoEstaLiberado(abaetetuba.comunsSuperior) ||
            possuiCargoSuperiorLiberado(documento);

        const acessosAbaetetuba = ACESSOS_ABAETETUBA.filter(item => {
            if(item.chave === "comunsSuperior"){
                return pacoteComumEfetivo;
            }
            return cargoEstaLiberado(abaetetuba[item.chave]);
        });

        const acessosTranspetro = CARGOS_TRANSPETRO.filter(item =>
            cargoEstaLiberado(transpetro[item.chave])
        );

        return [
            ...acessosAbaetetuba,
            ...acessosTranspetro
        ];
    }

    function converterData(valor){
        if(!valor){
            return null;
        }

        if(typeof valor.toDate === "function"){
            return valor.toDate();
        }

        if(valor instanceof Date){
            return valor;
        }

        if(typeof valor === "number" || typeof valor === "string"){
            const data = new Date(valor);
            return Number.isNaN(data.getTime()) ? null : data;
        }

        if(typeof valor.seconds === "number"){
            return new Date(valor.seconds * 1000);
        }

        return null;
    }

    function formatarData(valor){
        const data = converterData(valor);

        if(!data){
            return "Data não registrada";
        }

        return data.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    function obterTempoOrdenacao(valor){
        const data = converterData(valor);
        return data ? data.getTime() : 0;
    }

    function limparResultadoEdicao(){
        usuarioSelecionado = null;
        const area = document.getElementById("resultadoBuscaAcessoFarol");
        if(area){
            area.innerHTML = "Digite o e-mail de uma conta cadastrada ou escolha um aluno na lista de acessos liberados.";
        }
    }

    window.abrirPainelAcessosFarol = function(){
        const usuario = usuarioAtual();

        if(!usuario){
            aviso("Faça login para continuar.");
            return;
        }

        if(!ehAdministrador()){
            alert(
                "⛔ Acesso negado.\n\n" +
                "Esta área é exclusiva do administrador do Farol do Saber."
            );
            return;
        }

        limparConfirmacao();
        abrirTela("confirmacaoAdminFarol");

        const campo = document.getElementById("senhaConfirmacaoAdminFarol");
        if(campo){
            setTimeout(() => campo.focus(), 0);
        }
    };

    window.cancelarConfirmacaoAdminFarol = function(){
        limparConfirmacao();
        abrirTela("inicio");
    };

    window.sairPainelAdministrativoFarol = function(){
        limparConfirmacao();
        abrirTela("inicio");
    };

    window.confirmarSenhaAdministradorFarol = async function(){
        const usuario = usuarioAtual();
        const campo = document.getElementById("senhaConfirmacaoAdminFarol");
        const mensagem = document.getElementById("mensagemConfirmacaoAdminFarol");
        const botao = document.getElementById("btnConfirmarSenhaAdminFarol");
        const senha = String(campo ? campo.value : "");

        if(!usuario || !ehAdministrador()){
            limparConfirmacao();
            alert("⛔ Acesso negado. Esta área é exclusiva do administrador.");
            abrirTela("inicio");
            return;
        }

        if(!senha){
            if(mensagem){
                mensagem.textContent = "Informe a senha do administrador.";
                mensagem.className = "mensagem-confirmacao-admin erro";
            }
            if(campo){
                campo.focus();
            }
            return;
        }

        if(typeof firebase === "undefined" || !firebase.auth || !firebase.auth.EmailAuthProvider){
            if(mensagem){
                mensagem.textContent = "O Firebase Auth não foi carregado corretamente.";
                mensagem.className = "mensagem-confirmacao-admin erro";
            }
            return;
        }

        try{
            if(botao){
                botao.disabled = true;
                botao.textContent = "Confirmando...";
            }
            if(mensagem){
                mensagem.textContent = "Validando o acesso administrativo...";
                mensagem.className = "mensagem-confirmacao-admin";
            }

            const credencial = firebase.auth.EmailAuthProvider.credential(
                usuario.email,
                senha
            );

            await usuario.reauthenticateWithCredential(credencial);
            adminConfirmadoEm = Date.now();

            if(campo){
                campo.value = "";
            }
            if(mensagem){
                mensagem.textContent = "Identidade confirmada.";
                mensagem.className = "mensagem-confirmacao-admin sucesso";
            }

            abrirTela("painelAcessosAdmin");
            window.mostrarAbaAcessosFarol("liberados");
            await window.carregarListaAcessosFarol();
        }catch(erro){
            console.error("Falha na confirmação administrativa:", erro);
            adminConfirmadoEm = 0;

            if(mensagem){
                mensagem.textContent = erro && erro.code === "auth/too-many-requests"
                    ? "Muitas tentativas. Aguarde alguns minutos e tente novamente."
                    : "Senha do administrador incorreta ou não foi possível confirmar o acesso.";
                mensagem.className = "mensagem-confirmacao-admin erro";
            }
            if(campo){
                campo.select();
                campo.focus();
            }
        }finally{
            if(botao){
                botao.disabled = false;
                botao.textContent = "🔓 Validar acesso administrativo";
            }
        }
    };

    window.mostrarAbaAcessosFarol = function(aba){
        if(!sessaoConfirmada()){
            return;
        }

        abaAdminAtual = aba === "editar" ? "editar" : "liberados";

        const painelLiberados = document.getElementById("abaAcessosLiberadosFarol");
        const painelEditar = document.getElementById("abaEditarAcessoFarol");
        const botaoLiberados = document.getElementById("btnAbaLiberadosFarol");
        const botaoEditar = document.getElementById("btnAbaEditarFarol");

        if(painelLiberados){
            painelLiberados.style.display = abaAdminAtual === "liberados" ? "block" : "none";
        }
        if(painelEditar){
            painelEditar.style.display = abaAdminAtual === "editar" ? "block" : "none";
        }
        if(botaoLiberados){
            botaoLiberados.classList.toggle("ativa", abaAdminAtual === "liberados");
        }
        if(botaoEditar){
            botaoEditar.classList.toggle("ativa", abaAdminAtual === "editar");
        }

        if(abaAdminAtual === "editar"){
            const busca = document.getElementById("emailBuscaAcessoFarol");
            if(busca){
                setTimeout(() => busca.focus(), 0);
            }
        }
    };

    async function complementarDadosDoUsuario(item){
        if((item.nome && item.email) || !dbFarol){
            return item;
        }

        try{
            const docUsuario = await dbFarol.collection("usuarios")
                .doc(item.uid)
                .get();

            if(docUsuario.exists){
                const dadosUsuario = docUsuario.data() || {};
                item.nome = item.nome || dadosUsuario.nomeCompleto || dadosUsuario.nome || "Aluno";
                item.email = item.email || dadosUsuario.email || "";
            }
        }catch(erro){
            console.warn("Não foi possível complementar os dados do usuário:", item.uid, erro);
        }

        return item;
    }

    function renderizarResumoAcessos(lista){
        const area = document.getElementById("resumoAcessosAdminFarol");
        if(!area){
            return;
        }

        const contagem = {
            comunsSuperior: 0,
            professorHistoria: 0,
            professorCiencias: 0,
            professorGeografia: 0
        };

        lista.forEach(item => {
            item.cargos.forEach(cargo => {
                contagem[cargo.chave] = (contagem[cargo.chave] || 0) + 1;
            });
        });

        const alunosTranspetro = lista.filter(item =>
            item.cargos.some(cargo => cargo.concurso === "transpetro2026")
        ).length;

        const cargosTranspetroLiberados = lista.reduce(
            (total, item) => total + item.cargos.filter(
                cargo => cargo.concurso === "transpetro2026"
            ).length,
            0
        );

        area.innerHTML = `
            <div class="resumo-admin-card total">
                <span>👥</span>
                <div><strong>${lista.length}</strong><small>Alunos com acesso</small></div>
            </div>
            <div class="resumo-admin-card comuns-superior">
                <span>📚</span>
                <div><strong>${contagem.comunsSuperior}</strong><small>Comuns Superior</small></div>
            </div>
            <div class="resumo-admin-card historia">
                <span>📜</span>
                <div><strong>${contagem.professorHistoria}</strong><small>História</small></div>
            </div>
            <div class="resumo-admin-card ciencias">
                <span>🔬</span>
                <div><strong>${contagem.professorCiencias}</strong><small>Ciências</small></div>
            </div>
            <div class="resumo-admin-card geografia">
                <span>🌍</span>
                <div><strong>${contagem.professorGeografia}</strong><small>Geografia</small></div>
            </div>
            <div class="resumo-admin-card total">
                <span>⚓</span>
                <div><strong>${alunosTranspetro}</strong><small>Alunos Transpetro</small></div>
            </div>
            <div class="resumo-admin-card total">
                <span>🎫</span>
                <div><strong>${cargosTranspetroLiberados}</strong><small>Cargos Transpetro liberados</small></div>
            </div>
        `;
    }

    function renderizarListaAcessos(){
        const area = document.getElementById("listaAcessosLiberadosFarol");
        const campoFiltro = document.getElementById("filtroListaAcessosFarol");

        if(!area){
            return;
        }

        const filtro = normalizarTexto(campoFiltro ? campoFiltro.value : "");
        const listaFiltrada = acessosLiberadosCache.filter(item => {
            if(!filtro){
                return true;
            }

            const busca = normalizarTexto([
                item.nome,
                item.email,
                ...item.cargos.map(cargo => cargo.nome)
            ].join(" "));

            return busca.includes(filtro);
        });

        const contador = document.getElementById("contadorFiltroAcessosFarol");
        if(contador){
            contador.textContent = filtro
                ? `${listaFiltrada.length} de ${acessosLiberadosCache.length} aluno(s)`
                : `${acessosLiberadosCache.length} aluno(s)`;
        }

        if(listaFiltrada.length === 0){
            area.innerHTML = acessosLiberadosCache.length === 0
                ? `
                    <div class="admin-lista-vazia">
                        <span>🔒</span>
                        <h3>Nenhum acesso liberado</h3>
                        <p>Quando você liberar um pacote ou cargo, o aluno aparecerá automaticamente nesta lista.</p>
                        <button onclick="mostrarAbaAcessosFarol('editar')">➕ Liberar primeiro acesso</button>
                    </div>
                `
                : `
                    <div class="admin-lista-vazia">
                        <span>🔎</span>
                        <h3>Nenhum resultado encontrado</h3>
                        <p>Tente pesquisar por outro nome, e-mail, pacote ou cargo.</p>
                    </div>
                `;
            return;
        }

        area.innerHTML = listaFiltrada.map(item => {
            const etiquetas = item.cargos.map(cargo => `
                <span class="etiqueta-cargo-admin ${cargo.classe}">
                    ${cargo.icone} ${textoSeguro(cargo.nome)}
                </span>
            `).join("");

            const possuiAbaetetuba = item.cargos.some(
                cargo => cargo.concurso === "abaetetuba2026"
            );
            const possuiTranspetro = item.cargos.some(
                cargo => cargo.concurso === "transpetro2026"
            );

            const botoesRevogacao = [
                possuiAbaetetuba
                    ? `<button class="btn-excluir" onclick="revogarAcessosDaListaFarol('${textoSeguro(item.uid)}')">🔒 Retirar Abaetetuba</button>`
                    : "",
                possuiTranspetro
                    ? `<button class="btn-excluir" onclick="revogarAcessosTranspetroDaListaFarol('${textoSeguro(item.uid)}')">🔒 Retirar Transpetro</button>`
                    : ""
            ].join("");

            return `
                <article class="card-aluno-liberado-admin">
                    <div class="dados-aluno-liberado-admin">
                        <div class="avatar-aluno-admin">${textoSeguro((item.nome || "A").trim().charAt(0).toUpperCase() || "A")}</div>
                        <div>
                            <h3>${textoSeguro(item.nome || "Aluno")}</h3>
                            <p>${textoSeguro(item.email || "E-mail não registrado")}</p>
                            <small>Atualizado em: ${textoSeguro(formatarData(item.atualizadoEm))}</small>
                        </div>
                    </div>

                    <div class="cargos-aluno-liberado-admin">
                        ${etiquetas}
                    </div>

                    <div class="acoes-aluno-liberado-admin">
                        <button onclick="editarAcessoAlunoFarol('${textoSeguro(item.uid)}')">✏️ Editar acesso</button>
                        ${botoesRevogacao}
                    </div>
                </article>
            `;
        }).join("");
    }

    window.filtrarListaAcessosFarol = function(){
        renderizarListaAcessos();
    };

    window.carregarListaAcessosFarol = async function(){
        if(!exigirSessaoAdmin("Confirme novamente a senha do administrador para visualizar os acessos.")){
            return;
        }

        if(!dbFarol){
            aviso("O Firestore não foi carregado corretamente.");
            return;
        }

        const area = document.getElementById("listaAcessosLiberadosFarol");
        const botao = document.getElementById("btnAtualizarListaAcessosFarol");

        if(area){
            area.innerHTML = `
                <div class="admin-carregando-lista">
                    <span>⏳</span>
                    <strong>Carregando alunos liberados...</strong>
                </div>
            `;
        }
        if(botao){
            botao.disabled = true;
            botao.textContent = "Atualizando...";
        }

        try{
            const consultaAcessos = dbFarol
                .collection("acessosConcursos")
                .get();

            const timeoutAcessos = new Promise((_, rejeitar) => {
                setTimeout(() => {
                    const erroTimeout = new Error(
                        "A consulta ao Firestore demorou mais de 15 segundos."
                    );
                    erroTimeout.code = "farol/timeout";
                    rejeitar(erroTimeout);
                }, 15000);
            });

            const snapshot = await Promise.race([
                consultaAcessos,
                timeoutAcessos
            ]);

            const lista = [];

            snapshot.forEach(doc => {
                const dados = doc.data() || {};
                const item = {
                    uid: doc.id,
                    nome: dados.nome || "",
                    email: dados.email || "",
                    concursos: dados.concursos || {},
                    atualizadoEm: dados.atualizadoEm || dados.criadoEm || null,
                    atualizadoPor: dados.atualizadoPor || ""
                };

                item.cargos = obterCargosLiberados(item);

                if(item.cargos.length > 0){
                    lista.push(item);
                }
            });

            await Promise.all(lista.map(complementarDadosDoUsuario));

            lista.sort((a, b) => {
                const diferencaData = obterTempoOrdenacao(b.atualizadoEm) - obterTempoOrdenacao(a.atualizadoEm);
                if(diferencaData !== 0){
                    return diferencaData;
                }
                return String(a.nome || "").localeCompare(String(b.nome || ""), "pt-BR");
            });

            acessosLiberadosCache = lista;
            renderizarResumoAcessos(lista);
            renderizarListaAcessos();
        }catch(erro){
            console.error("Erro ao listar acessos liberados:", erro);
            acessosLiberadosCache = [];
            renderizarResumoAcessos([]);

            if(area){
                const permissaoNegada = erro && erro.code === "permission-denied";
                area.innerHTML = `
                    <div class="admin-erro-lista">
                        <span>⚠️</span>
                        <h3>Não foi possível carregar os alunos</h3>
                        <p>${permissaoNegada
                            ? "As regras do Firestore ainda não permitem que o administrador liste a coleção acessosConcursos."
                            : (
                                erro && erro.code === "farol/timeout"
                                    ? "O Firestore não respondeu em 15 segundos. Verifique a internet e se o projeto Firebase está correto."
                                    : "Verifique sua conexão e tente novamente."
                            )}</p>
                        <small class="codigo-erro-admin">
                            Código: ${textoSeguro((erro && erro.code) || "erro-desconhecido")}
                        </small>
                        <button onclick="carregarListaAcessosFarol()">🔄 Tentar novamente</button>
                    </div>
                `;
            }
        }finally{
            if(botao){
                botao.disabled = false;
                botao.textContent = "🔄 Atualizar lista";
            }
        }
    };

    async function localizarUsuarioPorEmail(emailBuscado){
        let encontrado = null;

        const consultaNormalizada = await dbFarol.collection("usuarios")
            .where("emailNormalizado", "==", emailBuscado)
            .limit(1)
            .get();

        if(!consultaNormalizada.empty){
            const doc = consultaNormalizada.docs[0];
            encontrado = { uid: doc.id, ...(doc.data() || {}) };
        }

        if(!encontrado){
            const consultaEmail = await dbFarol.collection("usuarios")
                .where("email", "==", emailBuscado)
                .limit(1)
                .get();

            if(!consultaEmail.empty){
                const doc = consultaEmail.docs[0];
                encontrado = { uid: doc.id, ...(doc.data() || {}) };
            }
        }

        return encontrado;
    }

    async function localizarUsuarioPorUid(uid){
        const docUsuario = await dbFarol.collection("usuarios")
            .doc(uid)
            .get();

        if(!docUsuario.exists){
            return null;
        }

        return { uid: docUsuario.id, ...(docUsuario.data() || {}) };
    }

    function renderizarEditorUsuario(usuario, dadosAcesso){
        const area = document.getElementById("resultadoBuscaAcessoFarol");
        if(!area){
            return;
        }

        const concursos = dadosAcesso && dadosAcesso.concursos
            ? dadosAcesso.concursos
            : {};
        const abaetetuba = concursos.abaetetuba2026 || {};
        const transpetro = concursos.transpetro2026 || {};

        usuarioSelecionado = {
            uid: usuario.uid,
            nome: usuario.nomeCompleto || usuario.nome || dadosAcesso.nome || "Aluno",
            email: usuario.email || dadosAcesso.email || "",
            concursos
        };

        const campoBusca = document.getElementById("emailBuscaAcessoFarol");
        if(campoBusca){
            campoBusca.value = usuarioSelecionado.email;
        }

        const itensPacotes = PACOTES_ABAETETUBA.map(pacote => `
            <label class="item-cargo-acesso item-pacote-acesso">
                <input
                    type="checkbox"
                    id="${pacote.checkbox}"
                    ${cargoEstaLiberado(abaetetuba[pacote.chave]) ? "checked" : ""}>
                <span>
                    <strong>${pacote.icone} ${textoSeguro(pacote.nome)}</strong>
                    <small>Marque para vender somente Português e Informática, sem cargo específico.</small>
                </span>
            </label>
        `).join("");

        const itensCargos = CARGOS_ABAETETUBA.map(cargo => `
            <label class="item-cargo-acesso">
                <input
                    type="checkbox"
                    id="${cargo.checkbox}"
                    ${cargoEstaLiberado(abaetetuba[cargo.chave]) ? "checked" : ""}>
                <span>
                    <strong>${cargo.icone} ${textoSeguro(cargo.nome)}</strong>
                    <small>O cargo inclui automaticamente o pacote comum do nível superior.</small>
                </span>
            </label>
        `).join("");

        const itensTranspetro = CARGOS_TRANSPETRO.map(cargo => `
            <label class="item-cargo-acesso">
                <input
                    type="checkbox"
                    id="${cargo.checkbox}"
                    ${cargoEstaLiberado(transpetro[cargo.chave]) ? "checked" : ""}>
                <span>
                    <strong>${cargo.icone} ${textoSeguro(cargo.nome)}</strong>
                    <small>Liberação individual para a preparação Transpetro MAR.</small>
                </span>
            </label>
        `).join("");

        area.innerHTML = `
            <div class="aluno-acesso-cabecalho">
                <h3>${textoSeguro(usuarioSelecionado.nome)}</h3>
                <p>${textoSeguro(usuarioSelecionado.email || "E-mail não registrado")}</p>
            </div>

            <h3>🏛️ Abaetetuba 2026 — pacotes e cargos</h3>

            <div class="nota-seguranca-acesso">
                Qualquer cargo de nível superior libera Português e Informática automaticamente.
                Marque o pacote comum somente quando ele for vendido separadamente.
            </div>

            <h4 class="titulo-grupo-acesso-admin">📚 Pacote de disciplinas comuns</h4>
            <div class="lista-cargos-acesso lista-pacotes-acesso">
                ${itensPacotes}
            </div>

            <h4 class="titulo-grupo-acesso-admin">🎯 Conhecimentos específicos por cargo</h4>
            <div class="lista-cargos-acesso">
                ${itensCargos}
            </div>

            <div class="acoes-admin-acesso">
                <button onclick="salvarAcessosUsuarioFarol()">💾 Salvar acessos</button>
                <button class="btn-excluir" onclick="limparAcessosUsuarioFarol()">🔒 Retirar Abaetetuba</button>
            </div>

            <h3>⚓ Transpetro MAR 2026 — cargos</h3>
            <div class="nota-seguranca-acesso">
                O acesso do Transpetro é independente de Barcarena e Abaetetuba.
                Marque somente o(s) cargo(s) adquirido(s) pelo aluno. Taifeiro está ativo;
                os demais cargos podem ser liberados comercialmente, mas permanecem em preparação enquanto não publicados.
            </div>

            <div class="lista-cargos-acesso">
                ${itensTranspetro}
            </div>

            <div class="acoes-admin-acesso">
                <button onclick="salvarAcessosUsuarioFarol()">💾 Salvar acessos</button>
                <button class="btn-excluir" onclick="retirarAcessosTranspetroFarol()">🔒 Retirar Transpetro</button>
            </div>
        `;
    }

    window.buscarUsuarioAcessoFarol = async function(){
        if(!exigirSessaoAdmin("Confirme novamente a senha do administrador para usar esta área.")){
            return;
        }

        if(!dbFarol){
            aviso("O Firestore não foi carregado corretamente.");
            return;
        }

        const campo = document.getElementById("emailBuscaAcessoFarol");
        const area = document.getElementById("resultadoBuscaAcessoFarol");
        const emailBuscado = String(campo ? campo.value : "").trim().toLowerCase();

        if(!area){
            return;
        }
        if(!emailBuscado){
            area.innerHTML = "Digite o e-mail cadastrado do aluno.";
            return;
        }

        area.innerHTML = "🔎 Buscando conta...";

        try{
            const usuario = await localizarUsuarioPorEmail(emailBuscado);

            if(!usuario){
                usuarioSelecionado = null;
                area.innerHTML = `❌ Nenhuma conta encontrada para <strong>${textoSeguro(emailBuscado)}</strong>.`;
                return;
            }

            const docAcesso = await dbFarol.collection("acessosConcursos")
                .doc(usuario.uid)
                .get();

            const dadosAcesso = docAcesso.exists ? (docAcesso.data() || {}) : {};
            renderizarEditorUsuario(usuario, dadosAcesso);
        }catch(erro){
            console.error("Erro ao buscar usuário para liberação:", erro);
            area.innerHTML = "❌ Não foi possível consultar as contas. Verifique as regras do Firestore.";
        }
    };

    window.editarAcessoAlunoFarol = async function(uid){
        if(!exigirSessaoAdmin("Confirme novamente a senha do administrador para editar este acesso.")){
            return;
        }

        const itemCache = acessosLiberadosCache.find(item => item.uid === uid) || null;
        window.mostrarAbaAcessosFarol("editar");

        const area = document.getElementById("resultadoBuscaAcessoFarol");
        if(area){
            area.innerHTML = "⏳ Carregando dados do aluno...";
        }

        try{
            const [usuario, docAcesso] = await Promise.all([
                localizarUsuarioPorUid(uid),
                dbFarol.collection("acessosConcursos").doc(uid).get()
            ]);

            const dadosAcesso = docAcesso.exists ? (docAcesso.data() || {}) : (itemCache || {});
            const usuarioFinal = usuario || {
                uid,
                nomeCompleto: dadosAcesso.nome || (itemCache && itemCache.nome) || "Aluno",
                email: dadosAcesso.email || (itemCache && itemCache.email) || ""
            };

            renderizarEditorUsuario(usuarioFinal, dadosAcesso);
        }catch(erro){
            console.error("Erro ao abrir edição do acesso:", erro);
            if(area){
                area.innerHTML = "❌ Não foi possível carregar os dados deste aluno.";
            }
        }
    };

    function checkboxMarcado(id){
        const campo = document.getElementById(id);
        return !!(campo && campo.checked);
    }

    window.salvarAcessosUsuarioFarol = async function(){
        if(!exigirSessaoAdmin("Confirme novamente a senha do administrador para salvar acessos.")){
            return;
        }
        if(!usuarioSelecionado){
            aviso("Busque uma conta antes de salvar.");
            return;
        }

        const concursosExistentes = usuarioSelecionado.concursos || {};
        const momentoAtual = firebase.firestore.FieldValue.serverTimestamp();
        const abaetetubaAnterior = obterAbaetetuba({ concursos: concursosExistentes });
        const abaetetuba = { ...abaetetubaAnterior };
        const transpetroAnterior = obterTranspetro({ concursos: concursosExistentes });
        const transpetro = { ...transpetroAnterior };

        ACESSOS_ABAETETUBA.forEach(item => {
            const liberado = checkboxMarcado(item.checkbox);
            const anterior = abaetetubaAnterior[item.chave];
            const jaEstavaLiberado = cargoEstaLiberado(anterior);

            abaetetuba[item.chave] = {
                liberado,
                liberadoEm: liberado && !jaEstavaLiberado
                    ? momentoAtual
                    : (anterior && anterior.liberadoEm ? anterior.liberadoEm : null)
            };
        });

        CARGOS_TRANSPETRO.forEach(item => {
            const liberado = checkboxMarcado(item.checkbox);
            const anterior = transpetroAnterior[item.chave];
            const jaEstavaLiberado = cargoEstaLiberado(anterior);

            transpetro[item.chave] = {
                liberado,
                liberadoEm: liberado && !jaEstavaLiberado
                    ? momentoAtual
                    : (anterior && anterior.liberadoEm ? anterior.liberadoEm : null)
            };
        });

        try{
            await dbFarol.collection("acessosConcursos")
                .doc(usuarioSelecionado.uid)
                .set({
                    uid: usuarioSelecionado.uid,
                    nome: usuarioSelecionado.nome,
                    email: usuarioSelecionado.email,
                    emailNormalizado: String(usuarioSelecionado.email || "").trim().toLowerCase(),
                    concursos: {
                        ...concursosExistentes,
                        abaetetuba2026: abaetetuba,
                        transpetro2026: transpetro
                    },
                    atualizadoPor: emailAtual(),
                    atualizadoEm: momentoAtual
                }, { merge: true });

            usuarioSelecionado.concursos = {
                ...concursosExistentes,
                abaetetuba2026: abaetetuba,
                transpetro2026: transpetro
            };

            if(
                authFarol.currentUser &&
                authFarol.currentUser.uid === usuarioSelecionado.uid &&
                typeof window.carregarAcessosConcursosFarol === "function"
            ){
                await window.carregarAcessosConcursosFarol();
            }

            aviso("Acessos salvos com sucesso.");
            await window.carregarListaAcessosFarol();
            window.mostrarAbaAcessosFarol("liberados");
        }catch(erro){
            console.error("Erro ao salvar acessos:", erro);
            aviso("Não foi possível salvar. Verifique as regras do Firestore.");
        }
    };

    async function retirarAcessosAbaetetubaDoUid(uid, nome, email, concursosExistentes){
        const concursos = concursosExistentes || {};
        const abaetetubaAnterior = obterAbaetetuba({ concursos });
        const abaetetuba = { ...abaetetubaAnterior };

        ACESSOS_ABAETETUBA.forEach(item => {
            abaetetuba[item.chave] = { liberado: false, liberadoEm: null };
        });

        await dbFarol.collection("acessosConcursos")
            .doc(uid)
            .set({
                uid,
                nome: nome || "Aluno",
                email: email || "",
                emailNormalizado: String(email || "").trim().toLowerCase(),
                concursos: {
                    ...concursos,
                    abaetetuba2026: abaetetuba
                },
                atualizadoPor: emailAtual(),
                atualizadoEm: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
    }

    window.limparAcessosUsuarioFarol = async function(){
        if(!exigirSessaoAdmin("Confirme novamente a senha do administrador para retirar acessos.")){
            return;
        }
        if(!usuarioSelecionado){
            aviso("Busque uma conta antes de retirar acessos.");
            return;
        }
        if(!confirm("Deseja retirar todos os pacotes e cargos de Abaetetuba desta conta?")){
            return;
        }

        try{
            await retirarAcessosAbaetetubaDoUid(
                usuarioSelecionado.uid,
                usuarioSelecionado.nome,
                usuarioSelecionado.email,
                usuarioSelecionado.concursos
            );

            aviso("Acessos de Abaetetuba retirados com sucesso.");
            limparResultadoEdicao();
            await window.carregarListaAcessosFarol();
            window.mostrarAbaAcessosFarol("liberados");
        }catch(erro){
            console.error("Erro ao retirar acessos:", erro);
            aviso("Não foi possível retirar os acessos. Verifique as regras do Firestore.");
        }
    };

    window.revogarAcessosDaListaFarol = async function(uid){
        if(!exigirSessaoAdmin("Confirme novamente a senha do administrador para retirar acessos.")){
            return;
        }

        const item = acessosLiberadosCache.find(registro => registro.uid === uid);
        if(!item){
            aviso("Aluno não encontrado na lista atual.");
            return;
        }

        const nome = item.nome || "este aluno";
        if(!confirm(`Deseja retirar todos os pacotes e cargos de Abaetetuba de ${nome}?`)){
            return;
        }

        try{
            await retirarAcessosAbaetetubaDoUid(
                item.uid,
                item.nome,
                item.email,
                item.concursos
            );

            aviso("Acessos de Abaetetuba retirados com sucesso.");
            await window.carregarListaAcessosFarol();
        }catch(erro){
            console.error("Erro ao retirar acessos pela lista:", erro);
            aviso("Não foi possível retirar os acessos. Verifique as regras do Firestore.");
        }
    };

    async function retirarAcessosTranspetroDoUid(uid, nome, email, concursosExistentes){
        const concursos = concursosExistentes || {};
        const transpetroAnterior = obterTranspetro({ concursos });
        const transpetro = { ...transpetroAnterior };

        CARGOS_TRANSPETRO.forEach(item => {
            transpetro[item.chave] = {
                liberado: false,
                liberadoEm: null
            };
        });

        await dbFarol.collection("acessosConcursos")
            .doc(uid)
            .set({
                uid,
                nome: nome || "Aluno",
                email: email || "",
                emailNormalizado: String(email || "").trim().toLowerCase(),
                concursos: {
                    ...concursos,
                    transpetro2026: transpetro
                },
                atualizadoPor: emailAtual(),
                atualizadoEm: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
    }

    window.retirarAcessosTranspetroFarol = async function(){
        if(!exigirSessaoAdmin("Confirme novamente a senha do administrador para retirar os acessos do Transpetro.")){
            return;
        }
        if(!usuarioSelecionado){
            aviso("Busque uma conta antes de retirar os acessos.");
            return;
        }
        if(!confirm("Deseja retirar todos os cargos do Transpetro MAR desta conta?")){
            return;
        }

        try{
            await retirarAcessosTranspetroDoUid(
                usuarioSelecionado.uid,
                usuarioSelecionado.nome,
                usuarioSelecionado.email,
                usuarioSelecionado.concursos
            );

            aviso("Acessos do Transpetro retirados com sucesso.");
            limparResultadoEdicao();
            await window.carregarListaAcessosFarol();
            window.mostrarAbaAcessosFarol("liberados");
        }catch(erro){
            console.error("Erro ao retirar acessos do Transpetro:", erro);
            aviso("Não foi possível retirar os acessos do Transpetro. Verifique as regras do Firestore.");
        }
    };

    window.revogarAcessosTranspetroDaListaFarol = async function(uid){
        if(!exigirSessaoAdmin("Confirme novamente a senha do administrador para retirar os acessos do Transpetro.")){
            return;
        }

        const item = acessosLiberadosCache.find(registro => registro.uid === uid);
        if(!item){
            aviso("Aluno não encontrado na lista atual.");
            return;
        }

        const nome = item.nome || "este aluno";
        if(!confirm(`Deseja retirar todos os cargos do Transpetro MAR de ${nome}?`)){
            return;
        }

        try{
            await retirarAcessosTranspetroDoUid(
                item.uid,
                item.nome,
                item.email,
                item.concursos
            );

            aviso("Acessos do Transpetro retirados com sucesso.");
            await window.carregarListaAcessosFarol();
        }catch(erro){
            console.error("Erro ao retirar Transpetro pela lista:", erro);
            aviso("Não foi possível retirar os acessos do Transpetro. Verifique as regras do Firestore.");
        }
    };

    // Compatibilidade com botões/atalhos antigos que ainda possam existir em cache.
    window.retirarAcessoTaifeiroFarol = window.retirarAcessosTranspetroFarol;
    window.revogarTaifeiroDaListaFarol = window.revogarAcessosTranspetroDaListaFarol;

    function atualizarBotoesAdminV75(mostrar){
        [
            "btnPainelAcessosAdmin",
            "btnPainelAcessosAdminPerfil"
        ].forEach(id => {
            const botao = document.getElementById(id);

            if(botao){
                botao.style.display = mostrar
                    ? "inline-flex"
                    : "none";
            }
        });
    }

    if(authFarol && typeof authFarol.onAuthStateChanged === "function"){
        authFarol.onAuthStateChanged(async user => {
            limparConfirmacao();

            let permitido = false;

            if(
                user &&
                typeof window.verificarPermissaoAdminFarol ===
                "function"
            ){
                permitido =
                    await window.verificarPermissaoAdminFarol(true);
            }

            atualizarBotoesAdminV75(permitido);
        });
    }

    window.addEventListener(
        "farol:permissao-admin",
        event => {
            atualizarBotoesAdminV75(
                Boolean(
                    event &&
                    event.detail &&
                    event.detail.admin === true
                )
            );
        }
    );

    document.addEventListener("DOMContentLoaded", () => {
        atualizarBotoesAdminV75(
            ehAdministrador()
        );
    });
})();

/* ==========================================================
   FAROL DO SABER — PAINEL ALUNOS ON-LINE V1
========================================================== */
(function(){
    "use strict";

    const COLECAO_PRESENCA_ADMIN = "presencaAlunos";
    const LIMITE_ONLINE_ADMIN_MS = 90 * 1000;
    const LIMITE_RECENTE_ADMIN_MS = 24 * 60 * 60 * 1000;

    let alunosPresencaCacheFarol = [];
    let cancelarEscutaPresencaFarol = null;
    let relogioOnlineFarol = null;

    function dbPresencaAdminFarol(){
        return (
            window.farolFirebase &&
            window.farolFirebase.db
        ) || window.dbAdminFarol || null;
    }

    function tempoDesdeFarol(valor){
        const tempo = Number(valor) || 0;
        if(!tempo){
            return "não registrado";
        }

        const diferenca = Math.max(0, Date.now() - tempo);
        const segundos = Math.floor(diferenca / 1000);

        if(segundos < 20){
            return "agora";
        }
        if(segundos < 60){
            return `há ${segundos} segundos`;
        }

        const minutos = Math.floor(segundos / 60);
        if(minutos < 60){
            return `há ${minutos} minuto${minutos === 1 ? "" : "s"}`;
        }

        const horas = Math.floor(minutos / 60);
        if(horas < 24){
            return `há ${horas} hora${horas === 1 ? "" : "s"}`;
        }

        const dias = Math.floor(horas / 24);
        return `há ${dias} dia${dias === 1 ? "" : "s"}`;
    }

    function duracaoFarol(inicio, fim){
        const valorInicio = Number(inicio) || 0;

        if(!valorInicio){
            return "tempo não registrado";
        }

        const valorFim =
            Number(fim) > 0
                ? Number(fim)
                : Date.now();

        const minutos = Math.max(
            0,
            Math.floor((valorFim - valorInicio) / 60000)
        );

        if(minutos < 1){
            return "menos de 1 minuto";
        }
        if(minutos < 60){
            return `${minutos} minuto${minutos === 1 ? "" : "s"}`;
        }

        const horas = Math.floor(minutos / 60);
        const resto = minutos % 60;

        return resto
            ? `${horas}h ${resto}min`
            : `${horas} hora${horas === 1 ? "" : "s"}`;
    }

    function fimSessaoExibicaoFarol(item){
        if(estaOnlineFarol(item)){
            return Date.now();
        }

        return (
            Number(item && item.saiuEm) ||
            Number(item && item.ultimaAtividade) ||
            Date.now()
        );
    }

    function estaOnlineFarol(item){
        return (
            item &&
            item.online === true &&
            Date.now() - (Number(item.ultimaAtividade) || 0)
                <= LIMITE_ONLINE_ADMIN_MS
        );
    }

    function textoVisualizandoFarol(item){
        const partes = [];

        if(item.disciplina){
            partes.push(item.disciplina);
        }
        if(item.assunto){
            partes.push(item.assunto);
        }
        if(item.tipoTela){
            partes.push(item.tipoTela);
        }else if(item.telaNome){
            partes.push(item.telaNome);
        }

        return partes.length
            ? partes.join(" → ")
            : (item.telaNome || "Navegação no Farol");
    }

    function renderizarResumoOnlineFarol(lista){
        const area = document.getElementById("resumoAlunosOnlineFarol");
        const contadorAba = document.getElementById("contadorOnlineAbaFarol");

        const agora = Date.now();
        const online = lista.filter(estaOnlineFarol).length;
        const ativosHoje = lista.filter(item =>
            agora - (Number(item.ultimaAtividade) || 0)
                <= LIMITE_RECENTE_ADMIN_MS
        ).length;

        if(contadorAba){
            contadorAba.textContent = String(online);
        }

        if(area){
            area.innerHTML = `
                <div class="resumo-online-card online">
                    <strong>${online}</strong>
                    <span>on-line agora</span>
                </div>
                <div class="resumo-online-card hoje">
                    <strong>${ativosHoje}</strong>
                    <span>ativos nas últimas 24h</span>
                </div>
                <div class="resumo-online-card total">
                    <strong>${lista.length}</strong>
                    <span>presenças registradas</span>
                </div>
            `;
        }
    }

    function renderizarAlunosOnlineFarol(){
        const area = document.getElementById("listaAlunosOnlineFarol");
        if(!area){
            return;
        }

        const filtro = String(
            document.getElementById("filtroAlunosOnlineFarol")?.value || ""
        )
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();

        const situacao =
            document.getElementById("situacaoAlunosOnlineFarol")?.value ||
            "online";

        const agora = Date.now();

        const lista = alunosPresencaCacheFarol
            .filter(item => {
                const atividade =
                    Number(item.ultimaAtividade) || 0;

                if(situacao === "online"){
                    return estaOnlineFarol(item);
                }

                return agora - atividade <= LIMITE_RECENTE_ADMIN_MS;
            })
            .filter(item => {
                if(!filtro){
                    return true;
                }

                const busca = [
                    item.nome,
                    item.email,
                    item.concurso,
                    item.cargo,
                    item.disciplina,
                    item.assunto,
                    item.tipoTela,
                    item.dispositivo
                ]
                    .join(" ")
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase();

                return busca.includes(filtro);
            })
            .sort((a, b) => {
                const onlineA = estaOnlineFarol(a) ? 1 : 0;
                const onlineB = estaOnlineFarol(b) ? 1 : 0;

                if(onlineA !== onlineB){
                    return onlineB - onlineA;
                }

                return (
                    Number(b.ultimaAtividade) || 0
                ) - (
                    Number(a.ultimaAtividade) || 0
                );
            });

        renderizarResumoOnlineFarol(alunosPresencaCacheFarol);

        if(lista.length === 0){
            area.innerHTML = `
                <div class="admin-lista-vazia">
                    <span>🛰️</span>
                    <h3>Nenhum aluno encontrado</h3>
                    <p>
                        Não há alunos on-line com os filtros escolhidos.
                    </p>
                </div>
            `;
            return;
        }

        area.innerHTML = lista.map(item => {
            const online = estaOnlineFarol(item);
            const nome = window.textoSeguroAdminFarol(item.nome || "Aluno");
            const email = window.textoSeguroAdminFarol(item.email || "E-mail não informado");
            const visualizando = window.textoSeguroAdminFarol(textoVisualizandoFarol(item));
            const concurso = window.textoSeguroAdminFarol(item.concurso || "Não selecionado");
            const cargo = window.textoSeguroAdminFarol(item.cargo || "Não selecionado");
            const dispositivo = window.textoSeguroAdminFarol(item.dispositivo || "Não identificado");

            return `
                <article class="card-aluno-online-admin ${online ? "online" : "offline"}">
                    <div class="linha-principal-online-admin">
                        <div class="status-online-admin ${online ? "ativo" : "inativo"}"></div>

                        <div class="identificacao-online-admin">
                            <h3>
                                ${online ? "🟢" : "⚪"} ${nome}
                            </h3>
                            <p>${email}</p>
                        </div>

                        <span class="selo-situacao-online ${online ? "ativo" : "inativo"}">
                            ${online ? "ON-LINE" : "VISTO RECENTEMENTE"}
                        </span>
                    </div>

                    <div class="acoes-card-online-admin">
                        <button
                            type="button"
                            class="btn-historico-aluno-v75"
                            data-uid="${window.textoSeguroAdminFarol(item.uid)}">
                            📚 Ver histórico
                        </button>
                    </div>

                    <div class="grade-detalhes-online-admin">
                        <div>
                            <span>Concurso</span>
                            <strong>${concurso}</strong>
                        </div>
                        <div>
                            <span>Cargo/Rota</span>
                            <strong>${cargo}</strong>
                        </div>
                        <div class="detalhe-visualizando-online">
                            <span>Visualizando</span>
                            <strong>${visualizando}</strong>
                        </div>
                        <div>
                            <span>Nesta página</span>
                            <strong>${duracaoFarol(
                                item.paginaDesde,
                                fimSessaoExibicaoFarol(item)
                            )}</strong>
                        </div>
                        <div>
                            <span>Na plataforma</span>
                            <strong>${duracaoFarol(
                                item.entrouEm,
                                fimSessaoExibicaoFarol(item)
                            )}</strong>
                        </div>
                        <div>
                            <span>Última atividade</span>
                            <strong>${tempoDesdeFarol(item.ultimaAtividade)}</strong>
                        </div>
                        <div>
                            <span>Dispositivo</span>
                            <strong>${dispositivo}</strong>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        area.querySelectorAll(
            ".btn-historico-aluno-v75"
        ).forEach(botao => {
            botao.addEventListener("click", () => {
                const uid = String(
                    botao.dataset.uid || ""
                );

                const aluno =
                    alunosPresencaCacheFarol.find(
                        item => String(item.uid || "") === uid
                    );

                if(!aluno){
                    return;
                }

                window.abrirHistoricoAlunoFarol(
                    String(aluno.uid || ""),
                    String(aluno.nome || "Aluno"),
                    String(aluno.email || "")
                );
            });
        });
    }

    window.filtrarAlunosOnlineFarol =
        renderizarAlunosOnlineFarol;

    window.carregarAlunosOnlineFarol = function(forcar){
        if(!window.sessaoAdminFarolConfirmada || !window.sessaoAdminFarolConfirmada()){
            return;
        }

        const banco = dbPresencaAdminFarol();
        const area = document.getElementById("listaAlunosOnlineFarol");

        if(!banco){
            if(area){
                area.innerHTML = `
                    <div class="admin-lista-vazia">
                        <span>⚠️</span>
                        <h3>Firebase indisponível</h3>
                        <p>Não foi possível acessar os registros de presença.</p>
                    </div>
                `;
            }
            return;
        }

        if(cancelarEscutaPresencaFarol && !forcar){
            renderizarAlunosOnlineFarol();
            return;
        }

        if(cancelarEscutaPresencaFarol){
            cancelarEscutaPresencaFarol();
            cancelarEscutaPresencaFarol = null;
        }

        cancelarEscutaPresencaFarol = banco
            .collection(COLECAO_PRESENCA_ADMIN)
            .onSnapshot(snapshot => {
                alunosPresencaCacheFarol = [];

                snapshot.forEach(doc => {
                    alunosPresencaCacheFarol.push({
                        uid: doc.id,
                        ...(doc.data() || {})
                    });
                });

                renderizarAlunosOnlineFarol();
            }, erro => {
                console.error("Falha ao acompanhar alunos on-line:", erro);

                if(area){
                    area.innerHTML = `
                        <div class="admin-lista-vazia">
                            <span>🔐</span>
                            <h3>Sem permissão para ler a presença</h3>
                            <p>
                                Publique as regras do Firestore incluídas no pacote.
                            </p>
                        </div>
                    `;
                }
            });

        if(relogioOnlineFarol){
            clearInterval(relogioOnlineFarol);
        }

        relogioOnlineFarol = setInterval(
            renderizarAlunosOnlineFarol,
            15000
        );
    };

    const mostrarAbaAntesOnlineFarol =
        window.mostrarAbaAcessosFarol;

    window.mostrarAbaAcessosFarol = function(aba){
        if(!window.sessaoAdminFarolConfirmada || !window.sessaoAdminFarolConfirmada()){
            return;
        }

        const abaFinal =
            aba === "editar"
                ? "editar"
                : (
                    aba === "online"
                        ? "online"
                        : "liberados"
                );

        const painelLiberados =
            document.getElementById("abaAcessosLiberadosFarol");

        const painelEditar =
            document.getElementById("abaEditarAcessoFarol");

        const painelOnline =
            document.getElementById("abaAlunosOnlineFarol");

        const botaoLiberados =
            document.getElementById("btnAbaLiberadosFarol");

        const botaoEditar =
            document.getElementById("btnAbaEditarFarol");

        const botaoOnline =
            document.getElementById("btnAbaOnlineFarol");

        if(painelLiberados){
            painelLiberados.style.display =
                abaFinal === "liberados" ? "block" : "none";
        }

        if(painelEditar){
            painelEditar.style.display =
                abaFinal === "editar" ? "block" : "none";
        }

        if(painelOnline){
            painelOnline.style.display =
                abaFinal === "online" ? "block" : "none";
        }

        if(botaoLiberados){
            botaoLiberados.classList.toggle(
                "ativa",
                abaFinal === "liberados"
            );
        }

        if(botaoEditar){
            botaoEditar.classList.toggle(
                "ativa",
                abaFinal === "editar"
            );
        }

        if(botaoOnline){
            botaoOnline.classList.toggle(
                "ativa",
                abaFinal === "online"
            );
        }

        if(abaFinal === "online"){
            window.carregarAlunosOnlineFarol(false);
        }else if(
            typeof mostrarAbaAntesOnlineFarol === "function"
        ){
            mostrarAbaAntesOnlineFarol(abaFinal);
        }
    };
})();

/* ==========================================================
   FAROL DO SABER — HISTÓRICO DE ATIVIDADES V1
========================================================== */
(function(){
    "use strict";

    const COLECAO_HISTORICO_ADMIN = "historicoAtividades";
    let historicoAlunoAtualFarol = [];
    let historicoAlunoUidAtualFarol = "";
    let historicoAlunoNomeAtualFarol = "";
    let historicoAlunoEmailAtualFarol = "";

    function dbHistoricoAdminFarol(){
        return (
            window.farolFirebase &&
            window.farolFirebase.db
        ) || window.dbAdminFarol || null;
    }

    function textoSeguroHistoricoFarol(valor){
        if(typeof window.textoSeguroAdminFarol === "function"){
            return window.textoSeguroAdminFarol(valor);
        }

        return String(valor || "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function formatarDataHistoricoFarol(valor){
        const data = new Date(Number(valor) || 0);

        if(Number.isNaN(data.getTime())){
            return "Horário não registrado";
        }

        return data.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }

    function descricaoEventoHistoricoFarol(item){
        const partes = [];

        if(item.disciplina){
            partes.push(item.disciplina);
        }

        if(item.assunto){
            partes.push(item.assunto);
        }

        if(item.tipoTela){
            partes.push(item.tipoTela);
        }else if(item.telaNome){
            partes.push(item.telaNome);
        }

        return partes.length
            ? partes.join(" → ")
            : "Navegação no Farol";
    }

    function renderizarHistoricoAlunoFarol(lista, nome, email){
        const painel = document.getElementById("painelHistoricoAlunoFarol");
        const titulo = document.getElementById("tituloHistoricoAlunoFarol");
        const subtitulo = document.getElementById("subtituloHistoricoAlunoFarol");
        const area = document.getElementById("listaHistoricoAlunoFarol");

        if(!painel || !area){
            return;
        }

        painel.style.display = "block";

        if(titulo){
            titulo.textContent = `📚 Histórico de ${nome || "Aluno"}`;
        }

        if(subtitulo){
            subtitulo.textContent = email || "";
        }

        if(lista.length === 0){
            area.innerHTML = `
                <div class="admin-lista-vazia">
                    <span>🕘</span>
                    <h3>Nenhuma atividade registrada</h3>
                    <p>
                        O histórico começará a aparecer quando o aluno navegar
                        usando a nova versão do Farol.
                    </p>
                </div>
            `;
            return;
        }

        area.innerHTML = lista.map(item => {
            const evento = textoSeguroHistoricoFarol(
                descricaoEventoHistoricoFarol(item)
            );

            const concurso = textoSeguroHistoricoFarol(
                item.concurso || "Não selecionado"
            );

            const cargo = textoSeguroHistoricoFarol(
                item.cargo || "Não selecionado"
            );

            const dispositivo = textoSeguroHistoricoFarol(
                item.dispositivo || "Não identificado"
            );

            return `
                <article class="item-historico-admin">
                    <div class="linha-tempo-historico-admin">
                        <span class="ponto-historico-admin"></span>
                        <span class="linha-historico-admin"></span>
                    </div>

                    <div class="conteudo-historico-admin">
                        <div class="cabecalho-item-historico">
                            <div>
                                <strong>${evento}</strong>
                                <time>${formatarDataHistoricoFarol(item.criadoEm)}</time>
                            </div>

                            <button
                                type="button"
                                class="btn-excluir-registro-admin-v52"
                                onclick="excluirRegistroHistoricoAlunoFarol('${textoSeguroHistoricoFarol(item.id)}')">
                                🗑️ Excluir
                            </button>
                        </div>

                        <div class="detalhes-item-historico">
                            <span>🏛️ ${concurso}</span>
                            <span>🎯 ${cargo}</span>
                            <span>💻 ${dispositivo}</span>
                        </div>
                    </div>
                </article>
            `;
        }).join("");
    }

    window.abrirHistoricoAlunoFarol = async function(uid, nome, email){
        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        const banco = dbHistoricoAdminFarol();
        const area = document.getElementById("listaHistoricoAlunoFarol");
        const painel = document.getElementById("painelHistoricoAlunoFarol");

        if(!banco || !area || !painel){
            return;
        }

        historicoAlunoUidAtualFarol = String(uid || "");
        historicoAlunoNomeAtualFarol = String(nome || "Aluno");
        historicoAlunoEmailAtualFarol = String(email || "");

        painel.style.display = "block";
        area.innerHTML = `
            <div class="admin-lista-vazia">
                <span>⏳</span>
                <h3>Carregando histórico...</h3>
            </div>
        `;

        painel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        try{
            const snapshot = await banco
                .collection(COLECAO_HISTORICO_ADMIN)
                .where("uid", "==", uid)
                .limit(200)
                .get();

            historicoAlunoAtualFarol = [];

            snapshot.forEach(doc => {
                historicoAlunoAtualFarol.push({
                    id: doc.id,
                    ...(doc.data() || {})
                });
            });

            historicoAlunoAtualFarol.sort(
                (a, b) =>
                    (Number(b.criadoEm) || 0) -
                    (Number(a.criadoEm) || 0)
            );

            renderizarHistoricoAlunoFarol(
                historicoAlunoAtualFarol,
                nome,
                email
            );
        }catch(erro){
            console.error("Erro ao carregar histórico:", erro);

            area.innerHTML = `
                <div class="admin-lista-vazia">
                    <span>⚠️</span>
                    <h3>Não foi possível carregar o histórico</h3>
                    <p>
                        Código: ${textoSeguroHistoricoFarol(
                            (erro && erro.code) || "erro-desconhecido"
                        )}
                    </p>
                </div>
            `;
        }
    };


    async function excluirDocumentosEmLotesHistoricoV52(referencias){
        const banco = dbHistoricoAdminFarol();

        if(!banco || !referencias.length){
            return;
        }

        for(let inicio = 0; inicio < referencias.length; inicio += 400){
            const lote = banco.batch();

            referencias
                .slice(inicio, inicio + 400)
                .forEach(referencia => lote.delete(referencia));

            await lote.commit();
        }
    }

    window.excluirRegistroHistoricoAlunoFarol =
        async function(documentoId){

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        const item = historicoAlunoAtualFarol.find(
            registro => registro.id === documentoId
        );

        if(!item){
            return;
        }

        const confirmou = confirm(
            "Excluir este registro do histórico de visualização?\n\n" +
            "Esta ação não poderá ser desfeita."
        );

        if(!confirmou){
            return;
        }

        const banco = dbHistoricoAdminFarol();

        try{
            await banco
                .collection(COLECAO_HISTORICO_ADMIN)
                .doc(documentoId)
                .delete();

            historicoAlunoAtualFarol =
                historicoAlunoAtualFarol.filter(
                    registro => registro.id !== documentoId
                );

            renderizarHistoricoAlunoFarol(
                historicoAlunoAtualFarol,
                historicoAlunoNomeAtualFarol,
                historicoAlunoEmailAtualFarol
            );

            if(typeof window.mostrarToast === "function"){
                window.mostrarToast(
                    "Registro do histórico excluído."
                );
            }

        }catch(erro){
            console.error(
                "Erro ao excluir registro do histórico:",
                erro
            );

            alert(
                "Não foi possível excluir o registro. " +
                "Verifique as regras do Firestore."
            );
        }
    };

    window.limparHistoricoAlunoFarol = async function(){

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada() ||
            !historicoAlunoUidAtualFarol
        ){
            return;
        }

        const confirmou = confirm(
            "ATENÇÃO!\n\n" +
            "Deseja apagar todo o histórico de visualização de " +
            historicoAlunoNomeAtualFarol +
            "?\n\nEsta ação não poderá ser desfeita."
        );

        if(!confirmou){
            return;
        }

        const banco = dbHistoricoAdminFarol();

        try{
            const snapshot = await banco
                .collection(COLECAO_HISTORICO_ADMIN)
                .where("uid", "==", historicoAlunoUidAtualFarol)
                .get();

            await excluirDocumentosEmLotesHistoricoV52(
                snapshot.docs.map(doc => doc.ref)
            );

            historicoAlunoAtualFarol = [];

            renderizarHistoricoAlunoFarol(
                [],
                historicoAlunoNomeAtualFarol,
                historicoAlunoEmailAtualFarol
            );

            if(typeof window.mostrarToast === "function"){
                window.mostrarToast(
                    "Histórico de visualização limpo."
                );
            }

        }catch(erro){
            console.error(
                "Erro ao limpar histórico do aluno:",
                erro
            );

            alert(
                "Não foi possível limpar o histórico. " +
                "Verifique as regras do Firestore."
            );
        }
    };

    window.fecharHistoricoAlunoFarol = function(){
        const painel = document.getElementById("painelHistoricoAlunoFarol");

        if(painel){
            painel.style.display = "none";
        }

        historicoAlunoUidAtualFarol = "";
        historicoAlunoNomeAtualFarol = "";
        historicoAlunoEmailAtualFarol = "";
        historicoAlunoAtualFarol = [];
    };
})();


// ==========================================================
// FAROL ADMIN V43 — HISTÓRICO DE ARENAS
// ==========================================================

(function(){
    "use strict";

    let historicoArenasCacheFarol = [];
    let historicoArenasCarregadoFarol = false;

    function bancoHistoricoArenasFarol(){
        return window.dbAdminFarol || null;
    }

    function textoSeguroArenaAdminFarol(valor){
        if(typeof window.textoSeguroAdminFarol === "function"){
            return window.textoSeguroAdminFarol(valor);
        }

        return String(valor || "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function dataArenaAdminFarol(valor){
        if(!valor){
            return null;
        }

        if(typeof valor.toDate === "function"){
            return valor.toDate();
        }

        if(typeof valor.seconds === "number"){
            return new Date(valor.seconds * 1000);
        }

        const data = new Date(valor);
        return Number.isNaN(data.getTime()) ? null : data;
    }

    function formatarDataArenaAdminFarol(valor){
        const data = dataArenaAdminFarol(valor);

        if(!data){
            return "Data não registrada";
        }

        return data.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    function formatarDuracaoArenaAdminFarol(ms){
        const totalSegundos =
            Math.max(0, Math.floor(Number(ms || 0) / 1000));

        if(totalSegundos < 60){
            return `${totalSegundos}s`;
        }

        const minutos = Math.floor(totalSegundos / 60);
        const segundos = totalSegundos % 60;

        return segundos
            ? `${minutos}min ${segundos}s`
            : `${minutos}min`;
    }

    function normalizarArenaAdminFarol(valor){
        return String(valor || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    function classeStatusArenaAdminFarol(status){
        if(status === "finalizada"){
            return "finalizada";
        }

        if(status === "cancelada"){
            return "cancelada";
        }

        return "encerrada";
    }

    function tituloStatusArenaAdminFarol(status){
        if(status === "finalizada"){
            return "Finalizada";
        }

        if(status === "cancelada"){
            return "Cancelada";
        }

        return "Encerrada";
    }

    function renderizarHistoricoArenasAdminFarol(lista){
        const area =
            document.getElementById("listaHistoricoArenasFarol");

        const resumo =
            document.getElementById("resumoHistoricoArenasFarol");

        if(!area || !resumo){
            return;
        }

        resumo.textContent =
            `${lista.length} Arena(s) encontrada(s)`;

        if(!lista.length){
            area.innerHTML = `
                <div class="admin-lista-vazia">
                    <span>🏟️</span>
                    <h3>Nenhuma Arena encontrada</h3>
                    <p>
                        As partidas concluídas depois desta atualização
                        aparecerão aqui.
                    </p>
                </div>
            `;
            return;
        }

        area.innerHTML = lista.map(arena => {
            const participantes =
                Array.isArray(arena.classificacao)
                ? arena.classificacao
                : Array.isArray(arena.participantes)
                    ? arena.participantes
                    : [];

            const vencedor =
                arena.vencedorNome ||
                (
                    arena.vencedores &&
                    arena.vencedores[0] &&
                    arena.vencedores[0].nome
                ) ||
                "Não definido";

            return `
                <article class="item-historico-arena-v51">
                    <div class="cabecalho-historico-arena-v51">
                        <div>
                            <span class="status-historico-arena-v51 ${classeStatusArenaAdminFarol(arena.status)}">
                                ${tituloStatusArenaAdminFarol(arena.status)}
                            </span>
                            <h4>${textoSeguroArenaAdminFarol(arena.codigo || arena.id)}</h4>
                        </div>

                        <div class="acoes-item-historico-arena-v52">
                            <time>
                                ${formatarDataArenaAdminFarol(
                                    arena.finalizadaEm ||
                                    arena.registradoEm
                                )}
                            </time>

                            <button
                                type="button"
                                class="btn-excluir-arena-admin-v52"
                                onclick="excluirArenaHistoricoAdminFarol('${textoSeguroArenaAdminFarol(arena.id || arena.codigo)}')">
                                🗑️ Excluir
                            </button>
                        </div>
                    </div>

                    <div class="grade-resumo-arena-v51">
                        <span>
                            <small>Disciplina</small>
                            <strong>${textoSeguroArenaAdminFarol(arena.disciplina || "Não informada")}</strong>
                        </span>
                        <span>
                            <small>Tópico</small>
                            <strong>${textoSeguroArenaAdminFarol(arena.topicoNome || arena.topico || "Não informado")}</strong>
                        </span>
                        <span>
                            <small>Participantes</small>
                            <strong>${Number(arena.totalParticipantes || participantes.length || 0)}</strong>
                        </span>
                        <span>
                            <small>Vencedor</small>
                            <strong>${textoSeguroArenaAdminFarol(vencedor)}</strong>
                        </span>
                        <span>
                            <small>Duração</small>
                            <strong>${formatarDuracaoArenaAdminFarol(arena.duracaoMs)}</strong>
                        </span>
                    </div>

                    <details class="detalhes-historico-arena-v51">
                        <summary>Ver resultado completo</summary>

                        <div class="configuracao-historico-arena-v51">
                            <span>
                                Criador:
                                <strong>${textoSeguroArenaAdminFarol(arena.criadorNome || arena.criadoPor || "Não informado")}</strong>
                            </span>
                            <span>
                                Questões:
                                <strong>${Number(arena.quantidadeQuestoes || 0)}</strong>
                            </span>
                            <span>
                                Tempo:
                                <strong>${Number(arena.tempoPorQuestao || 0)}s</strong>
                            </span>
                        </div>

                        <div class="classificacao-historico-arena-v51">
                            ${participantes.map((jogador, indice) => `
                                <div>
                                    <b>${Number(jogador.posicao || indice + 1)}º</b>
                                    <span>
                                        <strong>${textoSeguroArenaAdminFarol(jogador.nome || "Aluno")}</strong>
                                        <small>${textoSeguroArenaAdminFarol(jogador.email || "")}</small>
                                    </span>
                                    <span>
                                        <strong>${Number(jogador.pontos || 0)} pts</strong>
                                        <small>
                                            ${Number(jogador.acertos || 0)} acertos •
                                            ${Number(jogador.erros || 0)} erros
                                        </small>
                                    </span>
                                </div>
                            `).join("")}
                        </div>

                        ${
                            arena.motivoEncerramento
                            ? `
                                <p class="motivo-historico-arena-v51">
                                    <strong>Motivo:</strong>
                                    ${textoSeguroArenaAdminFarol(arena.motivoEncerramento)}
                                </p>
                            `
                            : ""
                        }
                    </details>
                </article>
            `;
        }).join("");
    }


    async function excluirReferenciasArenaEmLotesV52(referencias){
        const banco = bancoHistoricoArenasFarol();

        for(let inicio = 0; inicio < referencias.length; inicio += 400){
            const lote = banco.batch();

            referencias
                .slice(inicio, inicio + 400)
                .forEach(referencia => lote.delete(referencia));

            await lote.commit();
        }
    }

    window.excluirArenaHistoricoAdminFarol =
        async function(documentoId){

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        const arena = historicoArenasCacheFarol.find(
            item =>
                String(item.id || item.codigo) ===
                String(documentoId)
        );

        if(!arena){
            return;
        }

        const confirmou = confirm(
            "Excluir a Arena " +
            (arena.codigo || documentoId) +
            " do histórico?\n\n" +
            "Esta ação não poderá ser desfeita."
        );

        if(!confirmou){
            return;
        }

        const banco = bancoHistoricoArenasFarol();

        try{
            await banco
                .collection("historicoArenas")
                .doc(String(documentoId))
                .delete();

            historicoArenasCacheFarol =
                historicoArenasCacheFarol.filter(
                    item =>
                        String(item.id || item.codigo) !==
                        String(documentoId)
                );

            window.filtrarHistoricoArenasAdminFarol();

            if(typeof window.mostrarToast === "function"){
                window.mostrarToast(
                    "Arena excluída do histórico."
                );
            }

        }catch(erro){
            console.error(
                "Erro ao excluir Arena do histórico:",
                erro
            );

            alert(
                "Não foi possível excluir a Arena. " +
                "Verifique as regras do Firestore."
            );
        }
    };

    window.limparHistoricoArenasAdminFarol =
        async function(){

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        const confirmou = confirm(
            "ATENÇÃO!\n\n" +
            "Deseja apagar TODO o histórico de Arenas?\n\n" +
            "Esta ação não poderá ser desfeita."
        );

        if(!confirmou){
            return;
        }

        const banco = bancoHistoricoArenasFarol();

        try{
            const snapshot = await banco
                .collection("historicoArenas")
                .get();

            await excluirReferenciasArenaEmLotesV52(
                snapshot.docs.map(doc => doc.ref)
            );

            historicoArenasCacheFarol = [];
            historicoArenasCarregadoFarol = true;
            window.filtrarHistoricoArenasAdminFarol();

            if(typeof window.mostrarToast === "function"){
                window.mostrarToast(
                    "Histórico de Arenas limpo."
                );
            }

        }catch(erro){
            console.error(
                "Erro ao limpar histórico das Arenas:",
                erro
            );

            alert(
                "Não foi possível limpar o histórico. " +
                "Verifique as regras do Firestore."
            );
        }
    };

    window.filtrarHistoricoArenasAdminFarol = function(){
        const busca = normalizarArenaAdminFarol(
            document.getElementById(
                "filtroHistoricoArenaBuscaFarol"
            )?.value
        );

        const status = String(
            document.getElementById(
                "filtroHistoricoArenaStatusFarol"
            )?.value || ""
        );

        const lista = historicoArenasCacheFarol.filter(arena => {
            if(status && arena.status !== status){
                return false;
            }

            if(!busca){
                return true;
            }

            const participantes =
                Array.isArray(arena.participantes)
                ? arena.participantes
                : [];

            const texto = normalizarArenaAdminFarol([
                arena.codigo,
                arena.criadorNome,
                arena.disciplina,
                arena.topico,
                arena.topicoNome,
                arena.vencedorNome,
                ...participantes.flatMap(item => [
                    item.nome,
                    item.email
                ])
            ].join(" "));

            return texto.includes(busca);
        });

        renderizarHistoricoArenasAdminFarol(lista);
    };

    window.carregarHistoricoArenasAdminFarol =
        async function(forcar = false){

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        if(historicoArenasCarregadoFarol && !forcar){
            window.filtrarHistoricoArenasAdminFarol();
            return;
        }

        const banco = bancoHistoricoArenasFarol();
        const area =
            document.getElementById("listaHistoricoArenasFarol");

        if(!banco || !area){
            return;
        }

        area.innerHTML = `
            <div class="admin-lista-vazia">
                <span>⏳</span>
                <h3>Carregando histórico das Arenas...</h3>
            </div>
        `;

        try{
            const snapshot = await banco
                .collection("historicoArenas")
                .limit(200)
                .get();

            historicoArenasCacheFarol = [];

            snapshot.forEach(doc => {
                historicoArenasCacheFarol.push({
                    id: doc.id,
                    ...(doc.data() || {})
                });
            });

            historicoArenasCacheFarol.sort((a, b) => {
                const dataA =
                    dataArenaAdminFarol(
                        a.finalizadaEm || a.registradoEm
                    )?.getTime() || 0;

                const dataB =
                    dataArenaAdminFarol(
                        b.finalizadaEm || b.registradoEm
                    )?.getTime() || 0;

                return dataB - dataA;
            });

            historicoArenasCarregadoFarol = true;
            window.filtrarHistoricoArenasAdminFarol();

        }catch(erro){
            console.error(
                "Erro ao carregar histórico das Arenas:",
                erro
            );

            area.innerHTML = `
                <div class="admin-lista-vazia">
                    <span>⚠️</span>
                    <h3>Não foi possível carregar o histórico</h3>
                    <p>
                        Verifique as regras do Firestore e publique
                        o arquivo de regras atualizado.
                    </p>
                </div>
            `;
        }
    };

    const mostrarAbaAntesHistoricoArena =
        window.mostrarAbaAcessosFarol;

    window.mostrarAbaAcessosFarol = function(aba){
        const historico =
            document.getElementById("abaHistoricoArenasFarol");

        const botaoHistorico =
            document.getElementById(
                "btnAbaHistoricoArenasFarol"
            );

        if(aba !== "historicoArenas"){
            if(historico){
                historico.style.display = "none";
            }

            if(botaoHistorico){
                botaoHistorico.classList.remove("ativa");
            }

            if(typeof mostrarAbaAntesHistoricoArena === "function"){
                return mostrarAbaAntesHistoricoArena
                    .apply(this, arguments);
            }

            return;
        }

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        [
            "abaAcessosLiberadosFarol",
            "abaEditarAcessoFarol",
            "abaAlunosOnlineFarol"
        ].forEach(id => {
            const painel = document.getElementById(id);
            if(painel){
                painel.style.display = "none";
            }
        });

        [
            "btnAbaLiberadosFarol",
            "btnAbaEditarFarol",
            "btnAbaOnlineFarol"
        ].forEach(id => {
            const botao = document.getElementById(id);
            if(botao){
                botao.classList.remove("ativa");
            }
        });

        if(historico){
            historico.style.display = "block";
        }

        if(botaoHistorico){
            botaoHistorico.classList.add("ativa");
        }

        window.carregarHistoricoArenasAdminFarol();
    };

})();


// ==========================================================
// FAROL ADMIN V46 — HISTÓRICO DE DUELOS
// ==========================================================

(function(){
    "use strict";

    let historicoDuelosCacheFarol = [];
    let historicoDuelosCarregadoFarol = false;

    function bancoHistoricoDuelosFarol(){
        return window.dbAdminFarol || null;
    }

    function textoSeguroDueloAdminFarol(valor){
        if(typeof window.textoSeguroAdminFarol === "function"){
            return window.textoSeguroAdminFarol(valor);
        }

        return String(valor || "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function dataDueloAdminFarol(valor){
        if(!valor){
            return null;
        }

        if(typeof valor.toDate === "function"){
            return valor.toDate();
        }

        if(typeof valor.seconds === "number"){
            return new Date(valor.seconds * 1000);
        }

        const data = new Date(valor);
        return Number.isNaN(data.getTime()) ? null : data;
    }

    function formatarDataDueloAdminFarol(valor){
        const data = dataDueloAdminFarol(valor);

        if(!data){
            return "Data não registrada";
        }

        return data.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    function normalizarDueloAdminFarol(valor){
        return String(valor || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    function renderizarHistoricoDuelosAdminFarol(lista){
        const area =
            document.getElementById("listaHistoricoDuelosFarol");

        const resumo =
            document.getElementById("resumoHistoricoDuelosFarol");

        if(!area || !resumo){
            return;
        }

        resumo.textContent =
            `${lista.length} Duelo(s) encontrado(s)`;

        if(!lista.length){
            area.innerHTML = `
                <div class="admin-lista-vazia">
                    <span>⚔️</span>
                    <h3>Nenhum Duelo encontrado</h3>
                    <p>
                        Os Duelos concluídos depois desta atualização
                        aparecerão aqui.
                    </p>
                </div>
            `;
            return;
        }

        area.innerHTML = lista.map(duelo => {
            const participantes =
                Array.isArray(duelo.classificacao)
                ? duelo.classificacao
                : Array.isArray(duelo.participantes)
                    ? duelo.participantes
                    : [];

            return `
                <article class="item-historico-duelo-v56">

                    <div class="cabecalho-historico-duelo-v56">
                        <div>
                            <span class="status-historico-duelo-v56 ${duelo.status === "cancelado" ? "cancelado" : "finalizado"}">
                                ${duelo.status === "cancelado" ? "Cancelado" : "Finalizado"}
                            </span>

                            <h4>
                                ${textoSeguroDueloAdminFarol(
                                    duelo.codigo || duelo.id
                                )}
                            </h4>
                        </div>

                        <div class="acoes-item-historico-arena-v52">
                            <time>
                                ${formatarDataDueloAdminFarol(
                                    duelo.finalizadoEm ||
                                    duelo.registradoEm
                                )}
                            </time>

                            <button
                                type="button"
                                class="btn-excluir-arena-admin-v52"
                                onclick="excluirDueloHistoricoAdminFarol('${textoSeguroDueloAdminFarol(duelo.id || duelo.codigo)}')">
                                🗑️ Excluir
                            </button>
                        </div>
                    </div>

                    <div class="grade-resumo-duelo-v56">
                        <span>
                            <small>Disciplina</small>
                            <strong>${textoSeguroDueloAdminFarol(duelo.disciplina || "Não informada")}</strong>
                        </span>

                        <span>
                            <small>Assunto</small>
                            <strong>${textoSeguroDueloAdminFarol(duelo.assunto || "Não informado")}</strong>
                        </span>

                        <span>
                            <small>Participantes</small>
                            <strong>${Number(duelo.totalParticipantes || participantes.length || 0)}</strong>
                        </span>

                        <span>
                            <small>Resultado</small>
                            <strong>${textoSeguroDueloAdminFarol(duelo.vencedorNome || "Não definido")}</strong>
                        </span>
                    </div>

                    <details class="detalhes-historico-duelo-v56">
                        <summary>Ver resultado completo</summary>

                        <div class="configuracao-historico-arena-v51">
                            <span>
                                Criador:
                                <strong>${textoSeguroDueloAdminFarol(duelo.criadoPorNome || duelo.criadoPor || "Não informado")}</strong>
                            </span>

                            <span>
                                Questões:
                                <strong>${Number(duelo.quantidade || 0)}</strong>
                            </span>
                        </div>

                        <div class="classificacao-historico-arena-v51">
                            ${participantes.map((jogador, indice) => `
                                <div>
                                    <b>${Number(jogador.posicao || indice + 1)}º</b>

                                    <span>
                                        <strong>${textoSeguroDueloAdminFarol(jogador.nome || "Aluno")}</strong>
                                        <small>${textoSeguroDueloAdminFarol(jogador.email || "")}</small>
                                    </span>

                                    <span>
                                        <strong>${Number(jogador.acertos || 0)} acertos</strong>
                                        <small>
                                            ${Number(jogador.erros || 0)} erros
                                            ${jogador.finalizado ? "" : " • não finalizou"}
                                        </small>
                                    </span>
                                </div>
                            `).join("")}
                        </div>
                    </details>

                </article>
            `;
        }).join("");
    }

    window.filtrarHistoricoDuelosAdminFarol = function(){
        const busca = normalizarDueloAdminFarol(
            document.getElementById(
                "filtroHistoricoDueloBuscaFarol"
            )?.value
        );

        const status = String(
            document.getElementById(
                "filtroHistoricoDueloStatusFarol"
            )?.value || ""
        );

        const lista = historicoDuelosCacheFarol.filter(duelo => {
            if(status && duelo.status !== status){
                return false;
            }

            if(!busca){
                return true;
            }

            const participantes =
                Array.isArray(duelo.participantes)
                ? duelo.participantes
                : [];

            const texto = normalizarDueloAdminFarol([
                duelo.codigo,
                duelo.criadoPorNome,
                duelo.disciplina,
                duelo.assunto,
                duelo.vencedorNome,
                ...participantes.flatMap(item => [
                    item.nome,
                    item.email
                ])
            ].join(" "));

            return texto.includes(busca);
        });

        renderizarHistoricoDuelosAdminFarol(lista);
    };

    window.carregarHistoricoDuelosAdminFarol =
        async function(forcar = false){

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        if(historicoDuelosCarregadoFarol && !forcar){
            window.filtrarHistoricoDuelosAdminFarol();
            return;
        }

        const banco = bancoHistoricoDuelosFarol();
        const area =
            document.getElementById("listaHistoricoDuelosFarol");

        if(!banco || !area){
            return;
        }

        area.innerHTML = `
            <div class="admin-lista-vazia">
                <span>⏳</span>
                <h3>Carregando histórico dos Duelos...</h3>
            </div>
        `;

        try{
            const snapshot = await banco
                .collection("historicoDuelos")
                .limit(200)
                .get();

            historicoDuelosCacheFarol = [];

            snapshot.forEach(doc => {
                historicoDuelosCacheFarol.push({
                    id: doc.id,
                    ...(doc.data() || {})
                });
            });

            historicoDuelosCacheFarol.sort((a, b) => {
                const dataA =
                    dataDueloAdminFarol(
                        a.finalizadoEm || a.registradoEm
                    )?.getTime() || 0;

                const dataB =
                    dataDueloAdminFarol(
                        b.finalizadoEm || b.registradoEm
                    )?.getTime() || 0;

                return dataB - dataA;
            });

            historicoDuelosCarregadoFarol = true;
            window.filtrarHistoricoDuelosAdminFarol();

        }catch(erro){
            console.error(
                "Erro ao carregar histórico dos Duelos:",
                erro
            );

            area.innerHTML = `
                <div class="admin-lista-vazia">
                    <span>⚠️</span>
                    <h3>Não foi possível carregar o histórico</h3>
                    <p>
                        Verifique se as regras atualizadas
                        foram publicadas no Firestore.
                    </p>
                </div>
            `;
        }
    };

    window.excluirDueloHistoricoAdminFarol =
        async function(documentoId){

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        const duelo = historicoDuelosCacheFarol.find(
            item =>
                String(item.id || item.codigo) ===
                String(documentoId)
        );

        if(!duelo){
            return;
        }

        const confirmou = confirm(
            "Excluir o Duelo " +
            (duelo.codigo || documentoId) +
            " do histórico?\n\n" +
            "Esta ação não poderá ser desfeita."
        );

        if(!confirmou){
            return;
        }

        try{
            await bancoHistoricoDuelosFarol()
                .collection("historicoDuelos")
                .doc(String(documentoId))
                .delete();

            historicoDuelosCacheFarol =
                historicoDuelosCacheFarol.filter(
                    item =>
                        String(item.id || item.codigo) !==
                        String(documentoId)
                );

            window.filtrarHistoricoDuelosAdminFarol();

            if(typeof window.mostrarToast === "function"){
                window.mostrarToast(
                    "Duelo excluído do histórico."
                );
            }

        }catch(erro){
            console.error(
                "Erro ao excluir Duelo do histórico:",
                erro
            );

            alert(
                "Não foi possível excluir o Duelo."
            );
        }
    };

    window.limparHistoricoDuelosAdminFarol =
        async function(){

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        const confirmou = confirm(
            "ATENÇÃO!\n\n" +
            "Deseja apagar TODO o histórico de Duelos?\n\n" +
            "Esta ação não poderá ser desfeita."
        );

        if(!confirmou){
            return;
        }

        try{
            const banco = bancoHistoricoDuelosFarol();

            const snapshot = await banco
                .collection("historicoDuelos")
                .get();

            for(
                let inicio = 0;
                inicio < snapshot.docs.length;
                inicio += 400
            ){
                const lote = banco.batch();

                snapshot.docs
                    .slice(inicio, inicio + 400)
                    .forEach(doc => lote.delete(doc.ref));

                await lote.commit();
            }

            historicoDuelosCacheFarol = [];
            historicoDuelosCarregadoFarol = true;
            window.filtrarHistoricoDuelosAdminFarol();

            if(typeof window.mostrarToast === "function"){
                window.mostrarToast(
                    "Histórico de Duelos limpo."
                );
            }

        }catch(erro){
            console.error(
                "Erro ao limpar histórico dos Duelos:",
                erro
            );

            alert(
                "Não foi possível limpar o histórico."
            );
        }
    };

    const mostrarAbaAntesHistoricoDuelos =
        window.mostrarAbaAcessosFarol;

    window.mostrarAbaAcessosFarol = function(aba){

        const painel =
            document.getElementById(
                "abaHistoricoDuelosFarol"
            );

        const botao =
            document.getElementById(
                "btnAbaHistoricoDuelosFarol"
            );

        if(aba !== "historicoDuelos"){

            if(painel){
                painel.style.display = "none";
            }

            if(botao){
                botao.classList.remove("ativa");
            }

            if(
                typeof mostrarAbaAntesHistoricoDuelos ===
                "function"
            ){
                return mostrarAbaAntesHistoricoDuelos
                    .apply(this, arguments);
            }

            return;
        }

        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            return;
        }

        [
            "abaAcessosLiberadosFarol",
            "abaEditarAcessoFarol",
            "abaAlunosOnlineFarol",
            "abaHistoricoArenasFarol"
        ].forEach(id => {
            const elemento = document.getElementById(id);

            if(elemento){
                elemento.style.display = "none";
            }
        });

        [
            "btnAbaLiberadosFarol",
            "btnAbaEditarFarol",
            "btnAbaOnlineFarol",
            "btnAbaHistoricoArenasFarol"
        ].forEach(id => {
            const elemento = document.getElementById(id);

            if(elemento){
                elemento.classList.remove("ativa");
            }
        });

        if(painel){
            painel.style.display = "block";
        }

        if(botao){
            botao.classList.add("ativa");
        }

        window.carregarHistoricoDuelosAdminFarol();
    };

})();


// ==========================================================
// FAROL V68 — PUBLICAÇÃO DE NOVIDADES PELO ADMINISTRADOR
// ==========================================================
(function(){
    "use strict";

    function textoSeguroV68(valor){
        if(typeof window.escaparHTML === "function") return window.escaparHTML(String(valor || ""));
        const div=document.createElement("div"); div.textContent=String(valor||""); return div.innerHTML;
    }

    function dataAdminV68(valor){
        try{ const d=valor&&typeof valor.toDate==="function"?valor.toDate():new Date(valor||Date.now()); return d.toLocaleString("pt-BR"); }catch(e){ return "—"; }
    }

    function obterBancoNovidadesV72(){
        return (
            (window.farolFirebase && window.farolFirebase.db) ||
            (typeof db !== "undefined" ? db : null) ||
            dbFarol ||
            null
        );
    }

    function obterAuthNovidadesV72(){
        return (
            (window.farolFirebase && window.farolFirebase.auth) ||
            (typeof auth !== "undefined" ? auth : null) ||
            authFarol ||
            null
        );
    }

    function mostrarAvisoNovidadesV73(mensagem){
        if(typeof window.mostrarToast === "function"){
            window.mostrarToast(mensagem);
            return;
        }

        window.alert(mensagem);
    }

    function mostrarStatusPublicacaoV72(mensagem, tipo){
        const area = document.getElementById(
            "statusPublicacaoNovidadeV72"
        );

        if(!area){
            mostrarAvisoNovidadesV73(mensagem);
            return;
        }

        area.textContent = mensagem;
        area.className =
            "status-publicacao-novidade-v72 " +
            (tipo || "info");
        area.hidden = false;
    }

    window.publicarNovidadeFarolV68 = async function(event){
        if(event && typeof event.preventDefault === "function"){
            event.preventDefault();
        }

        const botao = document.getElementById(
            "btnPublicarNovidadeFarolV68"
        );

        try{
            mostrarStatusPublicacaoV72(
                "Verificando os dados da publicação...",
                "info"
            );

            if(
                !window.sessaoAdminFarolConfirmada ||
                !window.sessaoAdminFarolConfirmada()
            ){
                mostrarStatusPublicacaoV72(
                    "A confirmação administrativa expirou. " +
                    "Confirme novamente sua senha e tente publicar.",
                    "erro"
                );

                if(
                    typeof window.abrirPainelAcessosFarol ===
                    "function"
                ){
                    window.abrirPainelAcessosFarol();
                }

                return false;
            }

            const banco = obterBancoNovidadesV72();
            const autenticacao = obterAuthNovidadesV72();
            const usuario = autenticacao && autenticacao.currentUser
                ? autenticacao.currentUser
                : null;

            if(!usuario){
                mostrarStatusPublicacaoV72(
                    "Sua sessão de login não está ativa. " +
                    "Saia da plataforma, entre novamente e tente publicar.",
                    "erro"
                );
                return false;
            }

            const email = String(usuario.email || "")
                .trim()
                .toLowerCase();

            const permitido =
                typeof window.verificarPermissaoAdminFarol === "function"
                    ? await window.verificarPermissaoAdminFarol(true)
                    : ehAdministrador();

            if(!permitido){
                mostrarStatusPublicacaoV72(
                    "A conta conectada não possui a permissão administrativa.",
                    "erro"
                );
                return false;
            }

            if(!banco){
                mostrarStatusPublicacaoV72(
                    "O Firestore não foi carregado. " +
                    "Atualize a página e tente novamente.",
                    "erro"
                );
                return false;
            }

            const titulo = String(
                document.getElementById(
                    "tituloNovidadeFarolV68"
                )?.value || ""
            ).trim();

            const resumo = String(
                document.getElementById(
                    "resumoNovidadeFarolV68"
                )?.value || ""
            ).trim();

            const texto = String(
                document.getElementById(
                    "textoNovidadeFarolV68"
                )?.value || ""
            ).trim();

            const categoria =
                document.getElementById(
                    "categoriaNovidadeFarolV68"
                )?.value || "atualizacao";

            const urgente = Boolean(
                document.getElementById(
                    "urgenteNovidadeFarolV68"
                )?.checked
            );

            if(!titulo || !resumo || !texto){
                mostrarStatusPublicacaoV72(
                    "Preencha o título, o resumo curto e o texto completo.",
                    "erro"
                );
                return false;
            }

            const confirmou = window.confirm(
                "Publicar esta novidade para todos os alunos?"
            );

            if(!confirmou){
                mostrarStatusPublicacaoV72(
                    "Publicação cancelada.",
                    "info"
                );
                return false;
            }

            if(botao){
                botao.disabled = true;
                botao.textContent = "Publicando...";
            }

            mostrarStatusPublicacaoV72(
                "Enviando a novidade para o Firestore...",
                "info"
            );

            const referencia = await banco
                .collection("novidadesFarol")
                .add({
                    titulo,
                    resumo,
                    texto,
                    categoria,
                    urgente,
                    ativa: true,
                    publicadoEm:
                        window.firebase.firestore.FieldValue
                            .serverTimestamp(),
                    criadoEmLocal: Date.now(),
                    criadoPor: usuario.uid,
                    autorEmail: email
                });

            document.getElementById(
                "formNovidadeFarolV68"
            )?.reset();

            mostrarStatusPublicacaoV72(
                "✅ Novidade publicada com sucesso. " +
                "Código: " + referencia.id,
                "sucesso"
            );

            mostrarAvisoNovidadesV73(
                "📢 Novidade publicada para os alunos."
            );

            if(
                typeof window.carregarNovidadesAdminV68 ===
                "function"
            ){
                await window.carregarNovidadesAdminV68();
            }

        }catch(erro){
            console.error(
                "Erro detalhado ao publicar novidade:",
                erro
            );

            const codigo = String(
                erro && erro.code ? erro.code : ""
            );

            let mensagem =
                "Não foi possível publicar.";

            if(codigo.includes("permission-denied")){
                mensagem =
                    "O Firestore recusou a publicação. " +
                    "Confirme se as regras foram publicadas e se a conta " +
                    "administradora está conectada.";
            }else if(codigo.includes("unauthenticated")){
                mensagem =
                    "A sessão do Firebase expirou. " +
                    "Entre novamente na plataforma.";
            }else if(codigo.includes("unavailable")){
                mensagem =
                    "O Firebase está indisponível ou sem conexão. " +
                    "Verifique a internet e tente novamente.";
            }else if(codigo.includes("failed-precondition")){
                mensagem =
                    "O Firestore ainda não está pronto para esta operação. " +
                    "Atualize a página e tente novamente.";
            }else{
                mensagem +=
                    " Código: " +
                    (codigo || "não informado") +
                    ". Detalhe: " +
                    String(
                        erro && erro.message
                            ? erro.message
                            : erro
                    );
            }

            mostrarStatusPublicacaoV72(
                mensagem,
                "erro"
            );

            mostrarAvisoNovidadesV73(mensagem);

        }finally{
            if(botao){
                botao.disabled = false;
                botao.textContent =
                    "📢 Publicar para os alunos";
            }
        }

        return false;
    };

    function vincularBotaoPublicacaoV72(){
        const formulario = document.getElementById(
            "formNovidadeFarolV68"
        );

        const botao = document.getElementById(
            "btnPublicarNovidadeFarolV68"
        );

        if(formulario && formulario.dataset.vinculadoV72 !== "true"){
            formulario.dataset.vinculadoV72 = "true";

            formulario.addEventListener(
                "submit",
                window.publicarNovidadeFarolV68
            );
        }

        if(botao){
            botao.type = "submit";
        }
    }

    if(document.readyState === "loading"){
        document.addEventListener(
            "DOMContentLoaded",
            vincularBotaoPublicacaoV72
        );
    }else{
        vincularBotaoPublicacaoV72();
    }

    function avisoNovidadesAdminV74(mensagem){
        if(
            typeof window.mostrarAvisoAdminFarol ===
            "function"
        ){
            window.mostrarAvisoAdminFarol(mensagem);
            return;
        }

        if(typeof window.mostrarToast === "function"){
            window.mostrarToast(mensagem);
            return;
        }

        window.alert(mensagem);
    }

    function timestampNovidadeAdminV74(item){
        const valor =
            item.publicadoEm ||
            item.criadoEmLocal ||
            item.atualizadoEm ||
            0;

        if(valor && typeof valor.toMillis === "function"){
            return valor.toMillis();
        }

        if(valor && typeof valor.toDate === "function"){
            return valor.toDate().getTime();
        }

        return Number(valor || 0);
    }

    window.carregarNovidadesAdminV68 = async function(){
        const area = document.getElementById(
            "listaNovidadesAdminV68"
        );

        if(!area){
            return;
        }

        const banco = obterBancoNovidadesV72();

        if(!banco){
            area.innerHTML =
                '<div class="admin-lista-vazia">' +
                'O Firestore ainda não foi carregado. Atualize a página.' +
                '</div>';
            return;
        }

        area.innerHTML =
            '<div class="admin-carregando-lista">' +
            'Carregando publicações...' +
            '</div>';

        try{
            // Sem orderBy: também recupera publicações antigas que possam
            // não possuir o campo publicadoEm.
            const snap = await banco
                .collection("novidadesFarol")
                .limit(50)
                .get();

            if(snap.empty){
                area.innerHTML =
                    '<div class="admin-lista-vazia">' +
                    'Nenhuma novidade publicada.' +
                    '</div>';
                return;
            }

            const documentos = snap.docs
                .map(doc => ({
                    id: doc.id,
                    item: doc.data() || {}
                }))
                .sort(
                    (a, b) =>
                        timestampNovidadeAdminV74(b.item) -
                        timestampNovidadeAdminV74(a.item)
                )
                .slice(0, 30);

            area.innerHTML = documentos.map(({id, item}) => {
                return `
                    <article class="item-novidade-admin-v68 ${item.ativa === false ? "inativa" : ""}">
                        <div>
                            <small>
                                ${item.urgente ? "⚠️ IMPORTANTE" : "📢 PUBLICAÇÃO"}
                                • ${dataAdminV68(
                                    item.publicadoEm ||
                                    item.criadoEmLocal
                                )}
                            </small>

                            <h4>${textoSeguroV68(item.titulo)}</h4>
                            <p>${textoSeguroV68(item.resumo)}</p>
                        </div>

                        <div class="acoes-novidade-admin-v68">
                            <button
                                type="button"
                                onclick="alternarNovidadeAdminV68('${id}', ${item.ativa === false ? "true" : "false"})">
                                ${item.ativa === false ? "Reativar" : "Ocultar"}
                            </button>

                            <button
                                type="button"
                                class="btn-perigo-admin-v52"
                                onclick="excluirNovidadeAdminV68('${id}')">
                                Excluir
                            </button>
                        </div>
                    </article>
                `;
            }).join("");

        }catch(erro){
            console.error(
                "Erro ao carregar publicações administrativas:",
                erro
            );

            area.innerHTML =
                '<div class="admin-lista-vazia">' +
                'Não foi possível carregar as publicações. ' +
                'Código: ' +
                textoSeguroV68(
                    erro && erro.code
                        ? erro.code
                        : "não informado"
                ) +
                '</div>';
        }
    };

    window.alternarNovidadeAdminV68 = async function(id, ativa){
        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            avisoNovidadesAdminV74(
                "Confirme novamente a senha do administrador."
            );
            return;
        }

        const banco = obterBancoNovidadesV72();

        if(!banco){
            avisoNovidadesAdminV74(
                "Firestore indisponível. Atualize a página."
            );
            return;
        }

        try{
            await banco
                .collection("novidadesFarol")
                .doc(id)
                .update({
                    ativa: Boolean(ativa),
                    atualizadoEm:
                        firebase.firestore.FieldValue
                            .serverTimestamp()
                });

            await window.carregarNovidadesAdminV68();

        }catch(erro){
            console.error(erro);
            avisoNovidadesAdminV74(
                "Não foi possível alterar a publicação."
            );
        }
    };

    window.excluirNovidadeAdminV68 = async function(id){
        if(
            !window.sessaoAdminFarolConfirmada ||
            !window.sessaoAdminFarolConfirmada()
        ){
            avisoNovidadesAdminV74(
                "Confirme novamente a senha do administrador."
            );
            return;
        }

        if(!window.confirm(
            "Excluir definitivamente esta novidade para todos os alunos?"
        )){
            return;
        }

        const banco = obterBancoNovidadesV72();

        if(!banco){
            avisoNovidadesAdminV74(
                "Firestore indisponível. Atualize a página."
            );
            return;
        }

        try{
            await banco
                .collection("novidadesFarol")
                .doc(id)
                .delete();

            avisoNovidadesAdminV74(
                "Publicação excluída para todos os alunos."
            );

            await window.carregarNovidadesAdminV68();

        }catch(erro){
            console.error(erro);
            avisoNovidadesAdminV74(
                "Não foi possível excluir a publicação."
            );
        }
    };

    const mostrarAbaAntesV68=window.mostrarAbaAcessosFarol;
    window.mostrarAbaAcessosFarol=function(aba){
        const painel=document.getElementById("abaNovidadesFarolV68");
        const botao=document.getElementById("btnAbaNovidadesFarolV68");
        if(aba!=="novidadesV68"){
            if(painel) painel.style.display="none";
            if(botao) botao.classList.remove("ativa");
            return typeof mostrarAbaAntesV68==="function" ? mostrarAbaAntesV68.apply(this,arguments) : undefined;
        }
        if(!window.sessaoAdminFarolConfirmada || !window.sessaoAdminFarolConfirmada()) return;
        ["abaAcessosLiberadosFarol","abaEditarAcessoFarol","abaAlunosOnlineFarol","abaHistoricoArenasFarol","abaHistoricoDuelosFarol"].forEach(id=>{const e=document.getElementById(id); if(e)e.style.display="none";});
        ["btnAbaLiberadosFarol","btnAbaEditarFarol","btnAbaOnlineFarol","btnAbaHistoricoArenasFarol","btnAbaHistoricoDuelosFarol"].forEach(id=>{const e=document.getElementById(id); if(e)e.classList.remove("ativa");});
        if(painel) painel.style.display="block";
        if(botao) botao.classList.add("ativa");
        window.carregarNovidadesAdminV68();
    };
})();


// ==========================================================
// FAROL V148 — SUPORTE PRIVADO — PAINEL DO ADMINISTRADOR
// ==========================================================
(function(){
    "use strict";

    let conversasSuporteAdminV148 = [];
    let uidSuporteSelecionadoV148 = "";
    let cancelarListaSuporteAdminV148 = null;
    let cancelarMensagensSuporteAdminV148 = null;
    let cancelarBadgeSuporteAdminV148 = null;

    function bancoSuporteAdminV148(){
        try{
            return window.dbAdminFarol ||
                (window.farolFirebase && window.farolFirebase.db) ||
                (typeof db !== "undefined" ? db : null);
        }catch(erro){
            return null;
        }
    }

    function authSuporteAdminV148(){
        try{
            return (window.farolFirebase && window.farolFirebase.auth) ||
                (typeof auth !== "undefined" ? auth : null);
        }catch(erro){
            return null;
        }
    }

    function textoSuporteAdminV148(valor){
        if(typeof window.textoSeguroAdminFarol === "function"){
            return window.textoSeguroAdminFarol(String(valor || ""));
        }
        return String(valor || "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function dataSuporteAdminV148(valor){
        const numero = Number(valor || 0);
        if(!numero) return "—";
        try{
            return new Date(numero).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            });
        }catch(erro){
            return "—";
        }
    }

    function atualizarContadorSuporteAdminV148(){
        const total = conversasSuporteAdminV148.filter(item => item.temNovaAluno === true).length;
        const badge = document.getElementById("contadorSuporteAdminV148");
        if(!badge) return;
        badge.hidden = total <= 0;
        badge.textContent = String(total);
    }

    function renderizarListaSuporteAdminV148(){
        const area = document.getElementById("listaConversasSuporteAdminV148");
        if(!area) return;

        const busca = String(document.getElementById("filtroSuporteAdminV148")?.value || "")
            .trim().toLowerCase();
        const somenteNovas = document.getElementById("somenteNovasSuporteAdminV148")?.checked === true;

        const filtradas = conversasSuporteAdminV148.filter(item => {
            if(somenteNovas && item.temNovaAluno !== true) return false;
            if(!busca) return true;
            const alvo = `${item.nome || ""} ${item.email || ""}`.toLowerCase();
            return alvo.includes(busca);
        });

        if(!filtradas.length){
            area.innerHTML = `
                <div class="admin-lista-vazia">
                    <span>💬</span>
                    <h3>Nenhuma conversa encontrada</h3>
                    <p>As mensagens enviadas pelos alunos aparecerão aqui.</p>
                </div>
            `;
            return;
        }

        area.innerHTML = filtradas.map(item => `
            <button
                type="button"
                class="card-conversa-suporte-admin-v148 ${item.uid === uidSuporteSelecionadoV148 ? "ativa" : ""} ${item.temNovaAluno === true ? "nova" : ""}"
                onclick="abrirConversaSuporteAdminFarolV148('${textoSuporteAdminV148(item.uid)}')">
                <div class="topo-card-conversa-suporte-v148">
                    <strong>${item.temNovaAluno === true ? "🔴 " : ""}${textoSuporteAdminV148(item.nome || "Aluno")}</strong>
                    <small>${textoSuporteAdminV148(dataSuporteAdminV148(item.atualizadoEm))}</small>
                </div>
                <span>${textoSuporteAdminV148(item.email || "")}</span>
                <p>${textoSuporteAdminV148(item.ultimaMensagem || "Sem mensagem")}</p>
            </button>
        `).join("");
    }

    window.filtrarSuporteAdminFarolV148 = renderizarListaSuporteAdminV148;

    function renderizarMensagensSuporteAdminV148(snapshot, aluno){
        const area = document.getElementById("mensagensConversaSuporteAdminV148");
        if(!area) return;

        if(!snapshot || snapshot.empty){
            area.innerHTML = '<div class="estado-suporte-admin-v148">Nenhuma mensagem nesta conversa.</div>';
            return;
        }

        let html = "";
        snapshot.forEach(doc => {
            const msg = doc.data() || {};
            const admin = msg.remetente === "admin";
            html += `
                <article class="mensagem-suporte-v148 ${admin ? "admin" : "aluno"}">
                    <div class="cabecalho-mensagem-suporte-v148">
                        <strong>${admin ? "🗼 Você / Suporte" : `👤 ${textoSuporteAdminV148(aluno.nome || "Aluno")}`}</strong>
                        <small>${textoSuporteAdminV148(dataSuporteAdminV148(msg.criadoEm))}</small>
                    </div>
                    <p>${textoSuporteAdminV148(msg.texto || "").replace(/\n/g, "<br>")}</p>
                </article>
            `;
        });
        area.innerHTML = html;
        requestAnimationFrame(() => { area.scrollTop = area.scrollHeight; });
    }

    window.abrirConversaSuporteAdminFarolV148 = async function(uid){
        if(!window.sessaoAdminFarolConfirmada || !window.sessaoAdminFarolConfirmada()) return;

        const aluno = conversasSuporteAdminV148.find(item => String(item.uid) === String(uid));
        const banco = bancoSuporteAdminV148();
        const detalhe = document.getElementById("detalheSuporteAdminV148");
        if(!aluno || !banco || !detalhe) return;

        uidSuporteSelecionadoV148 = String(uid);
        renderizarListaSuporteAdminV148();

        detalhe.innerHTML = `
            <div class="cabecalho-conversa-suporte-admin-v148">
                <div>
                    <h3>👤 ${textoSuporteAdminV148(aluno.nome || "Aluno")}</h3>
                    <p>${textoSuporteAdminV148(aluno.email || "")}</p>
                </div>
                <button type="button" onclick="fecharConversaSuporteAdminFarolV148()">✖ Fechar</button>
            </div>
            <div id="mensagensConversaSuporteAdminV148" class="lista-mensagens-suporte-v148">
                <div class="estado-suporte-admin-v148">Carregando conversa...</div>
            </div>
            <div class="form-resposta-suporte-admin-v148">
                <label for="respostaSuporteAdminV148">Responder ao aluno</label>
                <textarea id="respostaSuporteAdminV148" rows="4" maxlength="3000" placeholder="Digite sua resposta..."></textarea>
                <button id="btnResponderSuporteAdminV148" type="button" onclick="responderSuporteAdminFarolV148()">
                    📤 Enviar resposta
                </button>
            </div>
        `;

        if(cancelarMensagensSuporteAdminV148){
            cancelarMensagensSuporteAdminV148();
            cancelarMensagensSuporteAdminV148 = null;
        }

        cancelarMensagensSuporteAdminV148 = banco
            .collection("suporteFarol")
            .doc(uidSuporteSelecionadoV148)
            .collection("mensagens")
            .orderBy("criadoEm", "asc")
            .onSnapshot(snapshot => renderizarMensagensSuporteAdminV148(snapshot, aluno), erro => {
                console.error("Erro ao carregar mensagens do suporte:", erro);
                const area = document.getElementById("mensagensConversaSuporteAdminV148");
                if(area) area.innerHTML = '<div class="estado-suporte-admin-v148 erro">Não foi possível carregar esta conversa.</div>';
            });

        try{
            if(aluno.temNovaAluno === true){
                await banco.collection("suporteFarol").doc(uidSuporteSelecionadoV148).update({ temNovaAluno: false });
            }
        }catch(erro){
            console.warn("Não foi possível marcar a conversa como vista:", erro);
        }
    };

    window.fecharConversaSuporteAdminFarolV148 = function(){
        uidSuporteSelecionadoV148 = "";
        if(cancelarMensagensSuporteAdminV148){
            cancelarMensagensSuporteAdminV148();
            cancelarMensagensSuporteAdminV148 = null;
        }
        const detalhe = document.getElementById("detalheSuporteAdminV148");
        if(detalhe){
            detalhe.innerHTML = '<div class="estado-suporte-admin-v148">Selecione um aluno para abrir a conversa.</div>';
        }
        renderizarListaSuporteAdminV148();
    };

    window.responderSuporteAdminFarolV148 = async function(){
        if(!window.sessaoAdminFarolConfirmada || !window.sessaoAdminFarolConfirmada()) return;
        const banco = bancoSuporteAdminV148();
        const authAtual = authSuporteAdminV148();
        const usuarioAdmin = authAtual && authAtual.currentUser ? authAtual.currentUser : null;
        const campo = document.getElementById("respostaSuporteAdminV148");
        const botao = document.getElementById("btnResponderSuporteAdminV148");
        const texto = String(campo ? campo.value : "").trim();

        if(!uidSuporteSelecionadoV148 || !banco) return;
        if(!texto){
            if(typeof window.mostrarToast === "function") window.mostrarToast("Digite uma resposta.");
            return;
        }
        if(texto.length > 3000){
            if(typeof window.mostrarToast === "function") window.mostrarToast("A resposta deve ter no máximo 3.000 caracteres.");
            return;
        }

        if(botao){ botao.disabled = true; botao.textContent = "Enviando..."; }

        const conversaRef = banco.collection("suporteFarol").doc(uidSuporteSelecionadoV148);
        const mensagemRef = conversaRef.collection("mensagens").doc();
        const agora = Date.now();

        try{
            const lote = banco.batch();
            lote.set(mensagemRef, {
                uid: uidSuporteSelecionadoV148,
                remetente: "admin",
                autorNome: "Suporte Farol",
                autorEmail: String(usuarioAdmin && usuarioAdmin.email || "").toLowerCase(),
                texto,
                criadoEm: agora
            });
            lote.update(conversaRef, {
                ultimaMensagem: texto.slice(0, 180),
                ultimaMensagemRemetente: "admin",
                atualizadoEm: agora,
                temNovaAluno: false,
                temNovaResposta: true
            });
            await lote.commit();

            if(campo) campo.value = "";
            if(typeof window.mostrarToast === "function") window.mostrarToast("Resposta enviada ao aluno.");
        }catch(erro){
            console.error("Erro ao responder suporte:", erro);
            if(typeof window.mostrarToast === "function") window.mostrarToast("Não foi possível enviar a resposta.");
        }finally{
            if(botao){ botao.disabled = false; botao.textContent = "📤 Enviar resposta"; }
        }
    };

    window.carregarSuporteAdminFarolV148 = function(forcar){
        if(!window.sessaoAdminFarolConfirmada || !window.sessaoAdminFarolConfirmada()) return;
        const banco = bancoSuporteAdminV148();
        const area = document.getElementById("listaConversasSuporteAdminV148");

        if(!banco){
            if(area) area.innerHTML = '<div class="admin-lista-vazia">Firestore indisponível.</div>';
            return;
        }

        if(cancelarListaSuporteAdminV148 && !forcar){
            renderizarListaSuporteAdminV148();
            return;
        }
        if(cancelarListaSuporteAdminV148){
            cancelarListaSuporteAdminV148();
            cancelarListaSuporteAdminV148 = null;
        }

        cancelarListaSuporteAdminV148 = banco
            .collection("suporteFarol")
            .orderBy("atualizadoEm", "desc")
            .onSnapshot(snapshot => {
                conversasSuporteAdminV148 = snapshot.docs.map(doc => ({ uid: doc.id, ...(doc.data() || {}) }));
                atualizarContadorSuporteAdminV148();
                renderizarListaSuporteAdminV148();
            }, erro => {
                console.error("Erro ao carregar suporte:", erro);
                if(area){
                    area.innerHTML = '<div class="admin-lista-vazia">Não foi possível carregar as conversas. Verifique as regras do Firestore.</div>';
                }
            });
    };

    function iniciarBadgeSuporteAdminV148(){
        if(cancelarBadgeSuporteAdminV148){
            cancelarBadgeSuporteAdminV148();
            cancelarBadgeSuporteAdminV148 = null;
        }
        const banco = bancoSuporteAdminV148();
        if(!banco || !window.farolTemPermissaoAdmin || !window.farolTemPermissaoAdmin()) return;

        cancelarBadgeSuporteAdminV148 = banco
            .collection("suporteFarol")
            .where("temNovaAluno", "==", true)
            .onSnapshot(snapshot => {
                const badge = document.getElementById("contadorSuporteAdminV148");
                if(!badge) return;
                badge.hidden = snapshot.empty;
                badge.textContent = String(snapshot.size || 0);
            }, erro => console.warn("Não foi possível atualizar o contador do suporte:", erro));
    }

    const mostrarAbaAntesSuporteV148 = window.mostrarAbaAcessosFarol;
    window.mostrarAbaAcessosFarol = function(aba){
        const painel = document.getElementById("abaSuporteFarolV148");
        const botao = document.getElementById("btnAbaSuporteFarolV148");

        if(aba !== "suporteV148"){
            if(painel) painel.style.display = "none";
            if(botao) botao.classList.remove("ativa");
            return typeof mostrarAbaAntesSuporteV148 === "function"
                ? mostrarAbaAntesSuporteV148.apply(this, arguments)
                : undefined;
        }

        if(!window.sessaoAdminFarolConfirmada || !window.sessaoAdminFarolConfirmada()) return;

        [
            "abaAcessosLiberadosFarol",
            "abaEditarAcessoFarol",
            "abaAlunosOnlineFarol",
            "abaHistoricoArenasFarol",
            "abaHistoricoDuelosFarol",
            "abaNovidadesFarolV68"
        ].forEach(id => {
            const elemento = document.getElementById(id);
            if(elemento) elemento.style.display = "none";
        });

        [
            "btnAbaLiberadosFarol",
            "btnAbaEditarFarol",
            "btnAbaOnlineFarol",
            "btnAbaHistoricoArenasFarol",
            "btnAbaHistoricoDuelosFarol",
            "btnAbaNovidadesFarolV68"
        ].forEach(id => {
            const elemento = document.getElementById(id);
            if(elemento) elemento.classList.remove("ativa");
        });

        if(painel) painel.style.display = "block";
        if(botao) botao.classList.add("ativa");
        window.carregarSuporteAdminFarolV148(false);
    };

    window.addEventListener("farol:permissao-admin", event => {
        if(event && event.detail && event.detail.admin === true){
            setTimeout(iniciarBadgeSuporteAdminV148, 200);
        }else if(cancelarBadgeSuporteAdminV148){
            cancelarBadgeSuporteAdminV148();
            cancelarBadgeSuporteAdminV148 = null;
        }
    });

    if(window.farolTemPermissaoAdmin && window.farolTemPermissaoAdmin()){
        setTimeout(iniciarBadgeSuporteAdminV148, 300);
    }
})();
