/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 03: Marcas de Textualidade — Coesão, Coerência e Intertextualidade
   25 questões autorais com feedback, análise, dica e pegadinha.
   Conteúdo alinhado ao Edital nº 001/2026 — SEPLAD/SEDUC.
========================================================== */

(function(){
    "use strict";

    const banco =
[
    {
        "id": "SEDUC-LP-TXT-001",
        "numero": 1,
        "subtopico": "Coesão referencial",
        "dificuldade": "media",
        "texto": "Marina entregou o relatório à diretora. A gestora pediu que o documento fosse revisado.",
        "pergunta": "No segundo período, a expressão 'A gestora' retoma",
        "alternativas": [
            "a diretora.",
            "Marina.",
            "o relatório.",
            "o documento.",
            "a escola."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Identifique qual referente é compatível semanticamente com a ação expressa.",
        "pegadinha": "Pronomes pessoais podem gerar ambiguidade quando há mais de um referente possível.",
        "memorizar2026": "Coesão referencial = retomada de elementos já apresentados.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026 — Coesão, coerência e intertextualidade."
    },
    {
        "id": "SEDUC-LP-TXT-002",
        "numero": 2,
        "subtopico": "Anáfora",
        "dificuldade": "media",
        "texto": "Os estudantes receberam os tablets. Esses equipamentos serão usados nas atividades de pesquisa.",
        "pergunta": "A expressão 'Esses equipamentos' estabelece coesão porque",
        "alternativas": [
            "antecipa um referente que só aparecerá depois.",
            "retoma 'os tablets' por meio de uma expressão equivalente.",
            "introduz assunto sem relação com o anterior.",
            "elimina a necessidade de coerência.",
            "substitui uma conclusão por um exemplo."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Anáfora retoma algo já mencionado.",
        "pegadinha": "A retomada pode ocorrer por repetição, pronome ou expressão nominal equivalente.",
        "memorizar2026": "Anáfora = retomada de referente anterior.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-003",
        "numero": 3,
        "subtopico": "Catáfora",
        "dificuldade": "alta",
        "texto": "Há algo que todos precisam compreender: a avaliação deve orientar novas intervenções pedagógicas.",
        "pergunta": "No trecho, 'algo' funciona como",
        "alternativas": [
            "repetição lexical.",
            "elipse.",
            "catáfora, pois antecipa uma informação explicitada depois.",
            "conector conclusivo.",
            "hiperônimo de 'avaliação'."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Catáfora aponta para frente no texto.",
        "pegadinha": "Nem toda referência é anafórica; algumas antecipam o conteúdo.",
        "memorizar2026": "Catáfora = referência a elemento posterior.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-004",
        "numero": 4,
        "subtopico": "Conectivo de oposição",
        "dificuldade": "media",
        "texto": "A escola ampliou o acesso à internet, mas alguns espaços ainda apresentam sinal instável.",
        "pergunta": "O conectivo 'mas' estabelece relação de",
        "alternativas": [
            "adição.",
            "causa.",
            "explicação.",
            "oposição/contraste.",
            "conclusão."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Troque mentalmente o conector por 'porém' e verifique o sentido.",
        "pegadinha": "A FGV costuma propor conectivos possíveis gramaticalmente, mas incompatíveis semanticamente.",
        "memorizar2026": "'Mas' geralmente marca contraste/oposição.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-005",
        "numero": 5,
        "subtopico": "Conectivo de conclusão",
        "dificuldade": "media",
        "texto": "Os dados mostraram queda consistente nas faltas; portanto, a estratégia será mantida.",
        "pergunta": "Sem alterar o sentido, 'portanto' poderia ser substituído por",
        "alternativas": [
            "embora.",
            "porque.",
            "contudo.",
            "enquanto.",
            "por isso."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Procure outro conector conclusivo.",
        "pegadinha": "Conectivos próximos formalmente podem expressar relações diferentes.",
        "memorizar2026": "Conclusão: portanto, por isso, logo, assim (conforme contexto).",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-006",
        "numero": 6,
        "subtopico": "Substituição lexical",
        "dificuldade": "media",
        "texto": "O município inaugurou uma nova biblioteca. O equipamento público funcionará de terça a domingo.",
        "pergunta": "O uso de 'O equipamento público'",
        "alternativas": [
            "evita repetição e retoma 'uma nova biblioteca'.",
            "muda o referente para um prédio diferente.",
            "quebra a unidade temática.",
            "antecipa uma informação inexistente.",
            "cria contradição."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Correta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Expressões nominais podem retomar referentes com variação lexical.",
        "pegadinha": "Coesão não exige repetir exatamente a mesma palavra.",
        "memorizar2026": "Substituição lexical mantém o referente e varia a forma de nomeá-lo.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-007",
        "numero": 7,
        "subtopico": "Elipse",
        "dificuldade": "alta",
        "texto": "Alguns professores participaram da oficina; outros, da reunião pedagógica.",
        "pergunta": "No segundo segmento, ocorre",
        "alternativas": [
            "catáfora.",
            "elipse de 'participaram', recuperável pelo contexto.",
            "contradição temporal.",
            "intertextualidade.",
            "repetição integral."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Observe o verbo ausente, mas facilmente recuperável.",
        "pegadinha": "A elipse economiza repetição sem romper o sentido.",
        "memorizar2026": "Elipse = omissão de termo recuperável pelo contexto.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-008",
        "numero": 8,
        "subtopico": "Coerência global",
        "dificuldade": "alta",
        "texto": "Um texto defende a redução do desperdício de água. No último parágrafo, sem ironia ou mudança argumentativa, afirma que desperdiçar água deve ser incentivado.",
        "pergunta": "O problema principal é de",
        "alternativas": [
            "coesão referencial.",
            "pontuação.",
            "coerência global, por contradição com a linha de sentido do texto.",
            "intertextualidade.",
            "formação de palavras."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Coerência depende da compatibilidade entre as ideias ao longo do texto.",
        "pegadinha": "Um texto pode estar gramaticalmente ligado e ainda ser incoerente.",
        "memorizar2026": "Coerência global = compatibilidade de sentido do texto inteiro.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-009",
        "numero": 9,
        "subtopico": "Coerência local",
        "dificuldade": "media",
        "texto": "Trecho: 'A escola fechou para reforma durante julho. Por isso, naquele mês, as aulas presenciais continuaram normalmente no prédio em obras.'",
        "pergunta": "A incoerência decorre",
        "alternativas": [
            "da falta de título.",
            "do excesso de pronomes.",
            "da presença de intertextualidade.",
            "da incompatibilidade entre fechamento para reforma e continuidade normal das aulas presenciais no mesmo local.",
            "do uso de palavra estrangeira."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Compare as proposições próximas e veja se podem ser simultaneamente verdadeiras no contexto.",
        "pegadinha": "Coerência local pode ser quebrada em apenas duas frases.",
        "memorizar2026": "Coerência local = relação lógica plausível entre segmentos próximos.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-010",
        "numero": 10,
        "subtopico": "Progressão temática",
        "dificuldade": "alta",
        "texto": "O primeiro parágrafo apresenta a evasão escolar. O segundo explica fatores associados. O terceiro discute estratégias de prevenção.",
        "pergunta": "Essa sequência apresenta",
        "alternativas": [
            "ruptura temática total.",
            "repetição vazia.",
            "ausência de progressão.",
            "intertextualidade obrigatória.",
            "progressão temática, pois cada parte acrescenta informação relacionada ao eixo inicial."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Progressão combina continuidade temática com informação nova.",
        "pegadinha": "Repetir o mesmo tópico não é o mesmo que desenvolver o tema.",
        "memorizar2026": "Progressão temática = avanço do conteúdo mantendo um fio condutor.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-011",
        "numero": 11,
        "subtopico": "Coesão x coerência",
        "dificuldade": "alta",
        "texto": "Considere: 'João comprou um guarda-chuva. Portanto, os triângulos possuem três lados.'",
        "pergunta": "O trecho mostra que",
        "alternativas": [
            "a presença de um conector não garante coerência entre as ideias.",
            "todo uso de 'portanto' produz conclusão válida.",
            "a coerência depende apenas da gramática.",
            "não existe coesão entre frases.",
            "intertextualidade é condição da coerência."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Correta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Conectivo pode ligar formalmente duas frases sem tornar a relação lógica.",
        "pegadinha": "Coesão é necessária em muitos textos, mas não suficiente para produzir sentido coerente.",
        "memorizar2026": "Coesão liga; coerência faz sentido.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-012",
        "numero": 12,
        "subtopico": "Referente pronominal",
        "dificuldade": "alta",
        "texto": "A professora conversou com a coordenadora depois que ela saiu da reunião.",
        "pergunta": "O principal problema do trecho é",
        "alternativas": [
            "falta de verbo.",
            "ambiguidade do referente de 'ela'.",
            "ausência de pontuação obrigatória.",
            "uso incorreto de artigo.",
            "intertextualidade excessiva."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Pergunte: quem saiu da reunião?",
        "pegadinha": "Referentes pronominais ambíguos são pegadinha clássica.",
        "memorizar2026": "Coesão referencial exige referente claro.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-013",
        "numero": 13,
        "subtopico": "Hiperonímia na coesão",
        "dificuldade": "alta",
        "texto": "A escola recebeu computadores, tablets e projetores. Esses equipamentos serão distribuídos entre os setores.",
        "pergunta": "'Equipamentos' funciona como",
        "alternativas": [
            "antônimo dos termos anteriores.",
            "conector.",
            "hiperônimo que retoma itens específicos.",
            "catáfora.",
            "marca de conclusão."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Um termo mais geral pode retomar vários termos específicos.",
        "pegadinha": "A relação semântica entre palavras também pode produzir coesão.",
        "memorizar2026": "Hiperônimo = termo de sentido mais amplo.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-014",
        "numero": 14,
        "subtopico": "Relação causal",
        "dificuldade": "media",
        "texto": "As aulas foram suspensas porque a ponte de acesso ficou interditada.",
        "pergunta": "O conectivo 'porque' introduz",
        "alternativas": [
            "conclusão.",
            "condição.",
            "oposição.",
            "causa.",
            "comparação."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Pergunte por que as aulas foram suspensas.",
        "pegadinha": "'Porque' pode ter valor explicativo ou causal conforme o contexto.",
        "memorizar2026": "Causa responde ao motivo de um fato.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-015",
        "numero": 15,
        "subtopico": "Concessão",
        "dificuldade": "alta",
        "texto": "Embora o número de matrículas tenha aumentado, a taxa de frequência permaneceu estável.",
        "pergunta": "A relação entre as orações é de",
        "alternativas": [
            "causa direta.",
            "adição simples.",
            "conclusão.",
            "explicação.",
            "concessão, pois um fato não produz o resultado que poderia ser esperado."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Concessão marca contraste com uma expectativa possível.",
        "pegadinha": "Não confunda concessão com oposição simples.",
        "memorizar2026": "Embora = valor concessivo típico.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-016",
        "numero": 16,
        "subtopico": "Intertextualidade explícita",
        "dificuldade": "media",
        "texto": "Em um artigo sobre educação, o autor escreve: 'Como lembra Paulo Freire em sua obra, ensinar não se reduz à simples transmissão de conteúdos', identificando autor e obra em nota.",
        "pergunta": "O recurso caracteriza",
        "alternativas": [
            "intertextualidade explícita por citação/referência identificável.",
            "elipse.",
            "coesão por pronome.",
            "incoerência local.",
            "catáfora."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Correta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Intertextualidade explícita torna visível a relação com outro texto ou autor.",
        "pegadinha": "Nem toda referência cultural é implícita.",
        "memorizar2026": "Citação identificada = intertextualidade explícita.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-017",
        "numero": 17,
        "subtopico": "Intertextualidade implícita",
        "dificuldade": "alta",
        "texto": "Uma campanha de leitura usa o slogan 'Ler ou não ler, eis a questão', sem indicar a origem da formulação.",
        "pergunta": "O slogan estabelece",
        "alternativas": [
            "apenas repetição lexical.",
            "intertextualidade implícita por alusão a uma formulação conhecida.",
            "contradição lógica.",
            "elipse verbal obrigatória.",
            "coesão sequencial de causa."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Alusão pressupõe que o leitor reconheça outro texto, mesmo sem citação formal.",
        "pegadinha": "Ausência de fonte não elimina a relação intertextual.",
        "memorizar2026": "Alusão = intertextualidade implícita.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-018",
        "numero": 18,
        "subtopico": "Paráfrase e intertextualidade",
        "dificuldade": "media",
        "texto": "Um autor reapresenta com outras palavras a ideia central de um texto anterior, mantendo seu sentido e citando a fonte.",
        "pergunta": "Esse procedimento é",
        "alternativas": [
            "paródia.",
            "plágio necessariamente.",
            "paráfrase com relação intertextual explícita.",
            "catáfora.",
            "contradição."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Paráfrase reformula sem preservar necessariamente as mesmas palavras.",
        "pegadinha": "Paráfrase não é paródia: a primeira mantém o núcleo de sentido; a segunda transforma.",
        "memorizar2026": "Paráfrase = reformulação do conteúdo com outras palavras.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-019",
        "numero": 19,
        "subtopico": "Paródia",
        "dificuldade": "alta",
        "texto": "Uma campanha adapta ironicamente um verso famoso para criticar o consumo excessivo.",
        "pergunta": "O procedimento caracteriza",
        "alternativas": [
            "citação literal neutra.",
            "simples sinonímia.",
            "coesão referencial.",
            "paródia, pois retoma e transforma um texto anterior com novo efeito.",
            "elipse."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Paródia mantém reconhecível o texto-base, mas o transforma.",
        "pegadinha": "Não confunda transformação crítica/humorística com mera paráfrase.",
        "memorizar2026": "Paródia = retomada transformadora de outro texto.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-020",
        "numero": 20,
        "subtopico": "Coesão sequencial",
        "dificuldade": "alta",
        "texto": "O projeto começou com duas turmas. Além disso, recebeu apoio de novos professores e, por isso, ampliou o número de participantes.",
        "pergunta": "Os conectivos destacados organizam, respectivamente, relações de",
        "alternativas": [
            "causa e oposição.",
            "conclusão e causa.",
            "oposição e condição.",
            "explicação e concessão.",
            "adição e conclusão/consequência."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Analise cada conector isoladamente e depois no encadeamento.",
        "pegadinha": "Uma mesma frase pode combinar mais de uma relação lógica.",
        "memorizar2026": "'Além disso' adiciona; 'por isso' conclui/indica consequência.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-021",
        "numero": 21,
        "subtopico": "Repetição",
        "dificuldade": "media",
        "texto": "A repetição da palavra 'educação' em um texto curto pode ser adequada quando mantém o tópico, mas o excesso pode tornar a escrita pesada.",
        "pergunta": "A afirmação mostra que",
        "alternativas": [
            "repetição pode funcionar como recurso coesivo, embora seu excesso possa empobrecer a expressão.",
            "toda repetição é erro gramatical.",
            "coesão só ocorre com pronomes.",
            "sinônimos devem ser proibidos.",
            "coerência independe do vocabulário."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Correta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Nem toda repetição é defeito; avalie sua função.",
        "pegadinha": "A FGV pode transformar uma recomendação de estilo em regra absoluta.",
        "memorizar2026": "Repetição pode manter tópico, mas deve ser funcional.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-022",
        "numero": 22,
        "subtopico": "Troca de conectivo",
        "dificuldade": "alta",
        "texto": "Frase original: 'O número de inscritos aumentou, mas a frequência permaneceu estável.'",
        "pergunta": "Qual reescrita preserva a relação de sentido?",
        "alternativas": [
            "O número de inscritos aumentou, porque a frequência permaneceu estável.",
            "O número de inscritos aumentou, porém a frequência permaneceu estável.",
            "O número de inscritos aumentou, portanto a frequência permaneceu estável.",
            "O número de inscritos aumentou, se a frequência permaneceu estável.",
            "O número de inscritos aumentou, logo a frequência permaneceu estável."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Troque o conector sem alterar a relação lógica.",
        "pegadinha": "A FGV costuma cobrar substituição de conectivos por equivalência semântica.",
        "memorizar2026": "Mas ≈ porém/contudo/entretanto no valor adversativo.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-023",
        "numero": 23,
        "subtopico": "Conhecimento de mundo e coerência",
        "dificuldade": "alta",
        "texto": "Texto: 'Depois de colocar gelo no copo, a água ficou mais quente imediatamente, sem qualquer outra fonte de calor.'",
        "pergunta": "Sem contexto especial, a estranheza do enunciado decorre de",
        "alternativas": [
            "falta de artigo.",
            "falta de pronome.",
            "choque com o conhecimento de mundo mobilizado para construir coerência.",
            "intertextualidade.",
            "ausência de parágrafo."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Coerência também depende de conhecimentos compartilhados sobre o mundo.",
        "pegadinha": "Uma sequência pode ser gramaticalmente perfeita e semanticamente improvável.",
        "memorizar2026": "Coerência envolve texto + contexto + conhecimento de mundo.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-024",
        "numero": 24,
        "subtopico": "Coesão por sinonímia",
        "dificuldade": "media",
        "texto": "A equipe elaborou um plano de ação. A proposta será apresentada ao conselho na próxima semana.",
        "pergunta": "A palavra 'proposta'",
        "alternativas": [
            "cria novo referente sem relação com o anterior.",
            "antecipa um termo posterior.",
            "quebra a coerência.",
            "retoma 'plano de ação' por aproximação semântica no contexto.",
            "funciona como conector causal."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Substituição por termo semanticamente próximo evita repetição.",
        "pegadinha": "Sinônimo contextual não precisa ser sinônimo perfeito de dicionário.",
        "memorizar2026": "Coesão lexical pode ocorrer por sinonímia/aproximação semântica.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TXT-025",
        "numero": 25,
        "subtopico": "Integração coesão-coerência-intertextualidade",
        "dificuldade": "alta",
        "texto": "Um artigo retoma conceitos de outro autor, cita a fonte, utiliza pronomes com referentes claros e encadeia as ideias com conectivos adequados, sem contradições internas.",
        "pergunta": "É correto afirmar que o texto",
        "alternativas": [
            "apresenta somente intertextualidade, sem coesão.",
            "é coerente apenas porque possui citações.",
            "não possui mecanismos de retomada.",
            "dispensa relações lógicas por citar autoridade.",
            "combina mecanismos de coesão, coerência e intertextualidade."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Os três fenômenos podem ocorrer simultaneamente e cumprem funções distintas.",
        "pegadinha": "Não trate coesão, coerência e intertextualidade como categorias excludentes.",
        "memorizar2026": "Coesão liga; coerência organiza sentido; intertextualidade relaciona textos.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    }
];

    window.seducLinguaPortuguesaMarcasTextualidade2026 = banco;
})();
