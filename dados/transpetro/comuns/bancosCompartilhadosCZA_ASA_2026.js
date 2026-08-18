// ==========================================================
// FAROL DO SABER — TRANSPETRO MAR 2026
// BANCOS COMPARTILHADOS — COZINHEIRO (CZA) + AUXILIAR DE SAÚDE (ASA)
//
// Base: Banco 2026 do Taifeiro, somente nos tópicos que também
// constam dos editais de CZA e ASA.
//
// REGRAS DE SEGURANÇA DE CONTEÚDO:
// 1) Questão neutra: reutiliza com ID próprio do cargo.
// 2) Questão cujo ENUNCIADO cita Taifeiro: passa por adaptação.
// 3) Atribuições específicas do Taifeiro (tópico 2.8): não são
//    trocadas automaticamente por CZA/ASA.
// 4) Questões reais/adaptadas de provas anteriores são retiradas
//    destes novos Bancos 2026 para não misturar a prova comentada
//    do próprio cargo com o banco inédito.
// 5) Questões não reconhecidas com "Taifeiro" no comando são
//    excluídas por segurança, nunca alteradas cegamente.
// ==========================================================
(() => {
    "use strict";

    const baseTAA = Array.isArray(window.questoesTaifeiroBanco2026)
        ? window.questoesTaifeiroBanco2026
        : [];

    const CONFIGS = {
        cozinheiro: {
            prefixoId: "CZA",
            nome: "Cozinheiro",
            nomeMinusculo: "cozinheiro",
            plural: "Cozinheiros",
            pluralMinusculo: "cozinheiros",
            sigla: "CZA",
            secao: "Seção de Câmara."
        },
        auxiliarSaude: {
            prefixoId: "ASA",
            nome: "Auxiliar de Saúde",
            nomeMinusculo: "auxiliar de saúde",
            plural: "Auxiliares de Saúde",
            pluralMinusculo: "auxiliares de saúde",
            sigla: "ASA",
            secao: "Seção de Saúde."
        }
    };

    const CAMPOS_TEXTO_ADAPTAVEIS = [
        "assunto",
        "enunciado",
        "comentario",
        "explicacaoCorreta",
        "revisaoAssunto",
        "memorizar2026",
        "dicaMacete",
        "pegadinha"
    ];

    function clonar(valor){
        return JSON.parse(JSON.stringify(valor));
    }

    function idBase(q){
        return String(q && q.id || "");
    }

    function novoId(q, cfg){
        const id = idBase(q);
        if(/^TAA-2026-/i.test(id)){
            return id.replace(/^TAA-2026-/i, cfg.prefixoId + "-2026-");
        }
        return cfg.prefixoId + "-2026-COMUM-" + id;
    }

    function contemTaifeiroNoComando(q){
        return /\btaifeir[oa]s?\b|\bTAA\b/i.test(
            String(q && (q.enunciado || q.pergunta) || "")
        );
    }

    function ehHistoricaOuAdaptada(q){
        const tipo = String(q && q.tipoOrigem || "").toLowerCase();
        return tipo.includes("prova_anterior");
    }

    function substituirCargoTexto(valor, cfg){
        if(typeof valor !== "string") return valor;

        return valor
            .replace(/\bTaifeiros\b/g, cfg.plural)
            .replace(/\btaifeiros\b/g, cfg.pluralMinusculo)
            .replace(/\bTaifeiro\s*\(TAA\)/g, `${cfg.nome} (${cfg.sigla})`)
            .replace(/\btaifeiro\s*\(TAA\)/gi, `${cfg.nome} (${cfg.sigla})`)
            .replace(/\bTaifeiro\b/g, cfg.nome)
            .replace(/\btaifeiro\b/g, cfg.nomeMinusculo)
            .replace(/\bTAA\b/g, cfg.sigla);
    }

    function adaptarCamposTexto(q, cfg){
        CAMPOS_TEXTO_ADAPTAVEIS.forEach(campo => {
            if(typeof q[campo] === "string"){
                q[campo] = substituirCargoTexto(q[campo], cfg);
            }
        });

        if(Array.isArray(q.alternativas)){
            q.alternativas = q.alternativas.map(v =>
                substituirCargoTexto(v, cfg)
            );
        }

        if(Array.isArray(q.analiseAlternativas)){
            q.analiseAlternativas = q.analiseAlternativas.map(v =>
                substituirCargoTexto(v, cfg)
            );
        }

        return q;
    }

    function marcarCompartilhada(q, base, cfg, status){
        q.id = novoId(base, cfg);
        q.cargoBanco = cfg.nome;
        q.siglaCargoBanco = cfg.sigla;
        q.idBaseCompartilhada = idBase(base);
        q.origemBancoCompartilhado = "Taifeiro 2026 — conteúdo comum de edital";
        q.statusAdaptacaoCargo = status;
        return q;
    }

    function adaptarFluxoSecao006(base, cfg){
        const q = clonar(base);

        q.enunciado =
            `No fluxo de formação previsto para o CAAQ-CTS, a categoria de ${cfg.nome} (${cfg.sigla}) pertence à`;

        q.assunto = `${cfg.nome} — enquadramento por seção`;
        q.fonte = "Marinha do Brasil — CAAQ-CTS / PREPOM 2026 e NORMAM-101/DPC vigente.";
        q.atualizacao2026 = "Enquadramento das categorias CZA/TAA na Seção de Câmara e ENF/ASA na Seção de Saúde conferido em fonte oficial da Marinha em 2026.";

        if(cfg.sigla === "CZA"){
            q.correta = 0;
            q.comentario =
                "O Cozinheiro (CZA) pertence à Seção de Câmara.";
            q.explicacaoCorreta = q.comentario;
            q.revisaoAssunto =
                "No CAAQ-CTS, Cozinheiro (CZA) e Taifeiro (TAA) pertencem à Seção de Câmara; Enfermeiro (ENF) e Auxiliar de Saúde (ASA), à Seção de Saúde.";
            q.memorizar2026 = "CZA = Seção de Câmara.";
            q.dicaMacete = "Cozinheiro e Taifeiro → Câmara.";
            q.analiseAlternativas = [
                "Correta. CZA integra a Seção de Câmara.",
                "Incorreta. CZA não pertence à Seção de Convés.",
                "Incorreta. CZA não pertence à Seção de Máquinas.",
                "Incorreta. Saúde inclui ENF e ASA.",
                "Incorreta. Praticagem é outro grupo profissional."
            ];
        }else{
            q.correta = 3;
            q.comentario =
                "O Auxiliar de Saúde (ASA) pertence à Seção de Saúde.";
            q.explicacaoCorreta = q.comentario;
            q.revisaoAssunto =
                "No CAAQ-CTS, Enfermeiro (ENF) e Auxiliar de Saúde (ASA) pertencem à Seção de Saúde; Cozinheiro (CZA) e Taifeiro (TAA), à Seção de Câmara.";
            q.memorizar2026 = "ASA = Seção de Saúde.";
            q.dicaMacete = "ENF e ASA → Saúde.";
            q.analiseAlternativas = [
                "Incorreta. Câmara inclui CZA e TAA.",
                "Incorreta. ASA não pertence à Seção de Convés.",
                "Incorreta. ASA não pertence à Seção de Máquinas.",
                "Correta. ASA integra a Seção de Saúde.",
                "Incorreta. Praticagem é outro grupo profissional."
            ];
        }

        return marcarCompartilhada(q, base, cfg, "adaptada_manual");
    }

    function adaptarFluxo033(base, cfg){
        const q = clonar(base);

        q.enunciado =
            `Em relação especificamente ao ${cfg.nome} (${cfg.sigla}), assinale a afirmação correta.`;

        q.assunto = `${cfg.nome} — enquadramento no fluxo`;
        q.fonte = "Marinha do Brasil — CAAQ-CTS / PREPOM 2026 e NORMAM-101/DPC vigente.";
        q.atualizacao2026 = "Fluxo e seção conferidos para CZA e ASA em fontes oficiais da Marinha em 2026.";

        if(cfg.sigla === "CZA"){
            q.alternativas = [
                "Integra a Seção de Máquinas e ascende a Condutor de Máquinas apenas pelo tempo de embarque.",
                "Integra a Seção de Saúde e sua categoria imediatamente superior é Enfermeiro.",
                "Integra a Seção de Câmara e o CAAQ-CTS não prevê ascensão de categoria para CZA.",
                "Integra a Seção de Convés e ascende automaticamente a Marinheiro de Convés.",
                "É categoria do grupo dos Práticos e depende de Zona de Praticagem."
            ];
            q.correta = 2;
            q.comentario =
                "O CZA pertence à Seção de Câmara e o fluxo do CAAQ-CTS não estabelece ascensão de categoria para essa categoria.";
            q.explicacaoCorreta = q.comentario;
            q.memorizar2026 = "CZA = Câmara; sem ascensão de categoria no CAAQ-CTS.";
            q.analiseAlternativas = [
                "Incorreta. CZA não pertence à Seção de Máquinas.",
                "Incorreta. CZA não pertence à Seção de Saúde.",
                "Correta. É o enquadramento aplicável ao CZA.",
                "Incorreta. CZA não integra a Seção de Convés.",
                "Incorreta. Práticos constituem outro grupo profissional."
            ];
        }else{
            q.alternativas = [
                "Integra a Seção de Máquinas e ascende a Condutor de Máquinas apenas pelo tempo de embarque.",
                "Integra a Seção de Câmara e sua categoria imediatamente superior é Cozinheiro.",
                "Integra a Seção de Saúde e o CAAQ-CTS não prevê ascensão de categoria para ASA.",
                "Integra a Seção de Convés e ascende automaticamente a Marinheiro de Convés.",
                "É categoria do grupo dos Práticos e depende de Zona de Praticagem."
            ];
            q.correta = 2;
            q.comentario =
                "O ASA pertence à Seção de Saúde e o fluxo do CAAQ-CTS não estabelece ascensão de categoria para essa categoria.";
            q.explicacaoCorreta = q.comentario;
            q.memorizar2026 = "ASA = Saúde; sem ascensão de categoria no CAAQ-CTS.";
            q.analiseAlternativas = [
                "Incorreta. ASA não pertence à Seção de Máquinas.",
                "Incorreta. ASA pertence à Seção de Saúde.",
                "Correta. É o enquadramento aplicável ao ASA.",
                "Incorreta. ASA não integra a Seção de Convés.",
                "Incorreta. Práticos constituem outro grupo profissional."
            ];
        }

        q.revisaoAssunto =
            "O CAAQ-CTS contempla CZA/TAA na Seção de Câmara e ENF/ASA na Seção de Saúde. Essas categorias não seguem automaticamente os fluxos de ascensão de Convés ou Máquinas.";

        return marcarCompartilhada(q, base, cfg, "adaptada_manual");
    }

    function adaptarFluxo034(base, cfg){
        const q = adaptarCamposTexto(clonar(base), cfg);
        q.enunciado =
            `Ao estudar “fluxo de carreira dos aquaviários” para o cargo de ${cfg.nome}, é juridicamente adequado compreender que`;
        q.fonte = "Marinha do Brasil — CAAQ-CTS / PREPOM 2026 e NORMAM-101/DPC vigente.";
        q.atualizacao2026 = "Adaptação de contexto conferida para o cargo em 2026.";
        return marcarCompartilhada(q, base, cfg, "adaptada_contexto");
    }

    function adaptarCIR025(base, cfg){
        const q = clonar(base);

        q.assunto = `CIR exigida para ${cfg.nome} no edital Transpetro 2026`;
        q.enunciado =
            `No edital TRANSPETRO/PSP/MAR-2026.1, a documentação exigida para o cargo de ${cfg.nome} inclui a CIR na categoria de`;

        if(cfg.sigla === "CZA"){
            q.alternativas = [
                "Taifeiro (TAA), admitida como substituta automática.",
                "Cozinheiro (CZA), sem certificação correspondente/substituta indicada para a CIR na Tabela D.",
                "Auxiliar de Saúde (ASA), desde que haja experiência em Câmara.",
                "Moço de Convés (MOC), por possuir habilitação de convés.",
                "qualquer categoria do 1º Grupo, independentemente da seção."
            ];
            q.correta = 1;
            q.comentario =
                "A Tabela D exige CIR na categoria Cozinheiro (CZA) e não indica documento substituto para esse requisito.";
            q.explicacaoCorreta = q.comentario;
            q.revisaoAssunto =
                "Para o cargo de Cozinheiro, a Tabela D do edital exige CIR na categoria CZA, sem certificação correspondente/substituta para esse documento.";
            q.memorizar2026 = "Transpetro CZA 2026 → CIR categoria CZA.";
            q.analiseAlternativas = [
                "Incorreta. A Tabela D não aceita TAA como substituta automática.",
                "Correta. É a categoria expressamente exigida.",
                "Incorreta. ASA pertence a outra seção.",
                "Incorreta. MOC não substitui a CIR de CZA.",
                "Incorreta. O edital exige categoria específica."
            ];
        }else{
            q.alternativas = [
                "Enfermeiro (ENF), como única categoria aceita e sem possibilidade de CIR de ASA.",
                "Auxiliar de Saúde (ASA), sendo admitida CIR de Enfermeiro (ENF) como substituta prevista na Tabela A.",
                "Cozinheiro (CZA), quando houver experiência com gêneros alimentícios.",
                "Taifeiro (TAA), por pertencer ao mesmo grupo de Marítimos.",
                "qualquer categoria da Seção de Saúde, sem especificação no edital."
            ];
            q.correta = 1;
            q.comentario =
                "A Tabela A exige CIR na categoria Auxiliar de Saúde (ASA) e admite CIR de Enfermeiro (ENF) como documento substituto para esse requisito.";
            q.explicacaoCorreta = q.comentario;
            q.revisaoAssunto =
                "No ASA há uma diferença importante: a CIR obrigatória é a de Auxiliar de Saúde (ASA), e a Tabela A admite a CIR de Enfermeiro (ENF) como substituta.";
            q.memorizar2026 = "Transpetro ASA 2026 → CIR ASA; substituta prevista: ENF.";
            q.analiseAlternativas = [
                "Incorreta. A CIR de ASA continua sendo a documentação principal.",
                "Correta. É a regra expressa da Tabela A.",
                "Incorreta. CZA é categoria da Seção de Câmara.",
                "Incorreta. TAA não é substituto da CIR de ASA.",
                "Incorreta. O edital especifica ASA e prevê ENF como substituta."
            ];
        }

        q.dicaMacete =
            "Questão ligada ao edital exige conferir a tabela documental do próprio cargo.";
        q.pegadinha =
            "Categorias próximas não substituem automaticamente a CIR: vale o que a tabela do cargo autoriza.";
        q.fonte =
            cfg.sigla === "CZA"
                ? "Edital TRANSPETRO/PSP/MAR-2026.1 — Anexo III, Tabela D — Documentação para Cozinheiro (CZA)."
                : "Edital TRANSPETRO/PSP/MAR-2026.1 — Anexo III, Tabela A — Documentação para Auxiliar de Saúde (ASA).";
        q.atualizacao2026 = "Requisito documental conferido no edital oficial de 11/08/2026.";

        return marcarCompartilhada(q, base, cfg, "adaptada_manual");
    }

    function adaptarQuestao(base, cfg, auditoria){
        if(!base || typeof base !== "object"){
            return null;
        }

        // Provas anteriores ficam fora do novo banco CZA/ASA.
        if(ehHistoricaOuAdaptada(base)){
            auditoria.excluidasProvasAnteriores.push(idBase(base));
            return null;
        }

        if(!contemTaifeiroNoComando(base)){
            auditoria.reutilizadasNeutras++;
            return marcarCompartilhada(
                clonar(base),
                base,
                cfg,
                "reutilizada_neutra"
            );
        }

        const id = idBase(base);

        if(id === "TAA-2026-LMA-2.1-006"){
            auditoria.adaptadasManualmente++;
            return adaptarFluxoSecao006(base, cfg);
        }

        if(id === "TAA-2026-LMA-2.1-033"){
            auditoria.adaptadasManualmente++;
            return adaptarFluxo033(base, cfg);
        }

        if(id === "TAA-2026-LMA-2.1-034"){
            auditoria.adaptadasContexto++;
            return adaptarFluxo034(base, cfg);
        }

        if(id === "TAA-2026-LMA-2.2-025"){
            auditoria.adaptadasManualmente++;
            return adaptarCIR025(base, cfg);
        }

        // 2.8 contém atribuições específicas do Taifeiro. Não troca o nome
        // automaticamente porque a resposta pode deixar de ser verdadeira.
        if(String(base.topicoEdital || "").startsWith("2.8 ")){
            auditoria.excluidasAtribuicoesTaifeiro.push(id);
            return null;
        }

        // Fluxo de carreira e Língua Portuguesa merecem revisão individual:
        // uma simples troca de cargo pode alterar seção, requisito ou até
        // o valor linguístico do enunciado. Se não estiver na lista manual
        // acima, fica fora até revisão.
        if(
            String(base.topicoEdital || "").startsWith("2.1 ") ||
            String(base.disciplina || base.eixo || "").trim() === "Língua Portuguesa"
        ){
            auditoria.excluidasPorSeguranca.push(id);
            return null;
        }

        // Nos demais tópicos comuns, depois das exceções acima, o cargo aparece
        // apenas como personagem/contexto. A troca é explícita e auditada.
        const adaptada = adaptarCamposTexto(clonar(base), cfg);
        auditoria.adaptadasContexto++;
        return marcarCompartilhada(
            adaptada,
            base,
            cfg,
            "adaptada_contexto"
        );
    }

    function montarBanco(chaveConfig){
        const cfg = CONFIGS[chaveConfig];
        const auditoria = {
            cargo: cfg.nome,
            baseTotal: baseTAA.length,
            reutilizadasNeutras: 0,
            adaptadasManualmente: 0,
            adaptadasContexto: 0,
            excluidasProvasAnteriores: [],
            excluidasAtribuicoesTaifeiro: [],
            excluidasPorSeguranca: []
        };

        const banco = [];

        baseTAA.forEach(base => {
            try{
                const q = adaptarQuestao(base, cfg, auditoria);
                if(q) banco.push(q);
            }catch(erro){
                auditoria.excluidasPorSeguranca.push(idBase(base));
                console.warn("[Farol Bancos Compartilhados] Questão excluída por segurança:", idBase(base), erro);
            }
        });

        auditoria.totalFinal = banco.length;
        auditoria.totalExcluido =
            auditoria.excluidasProvasAnteriores.length +
            auditoria.excluidasAtribuicoesTaifeiro.length +
            auditoria.excluidasPorSeguranca.length;

        return { banco, auditoria };
    }

    const cza = montarBanco("cozinheiro");
    const asa = montarBanco("auxiliarSaude");

    window.questoesCozinheiroBanco2026 = cza.banco;
    window.questoesAuxiliarSaudeBanco2026 = asa.banco;

    window.auditoriaBancosCompartilhadosTranspetro2026 = {
        baseTaifeiro: baseTAA.length,
        cozinheiro: cza.auditoria,
        auxiliarSaude: asa.auditoria
    };

    console.info(
        "[Farol 2026] Bancos compartilhados CZA/ASA carregados:",
        window.auditoriaBancosCompartilhadosTranspetro2026
    );
})();
