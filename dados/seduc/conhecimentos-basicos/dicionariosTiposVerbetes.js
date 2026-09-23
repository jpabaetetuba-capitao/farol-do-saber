/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 20: Dicionários
   Tipos de dicionário e organização de verbetes.
   25 questões autorais calibradas pelo edital e pelo padrão FGV.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-LP-DIC-001",
        "numero": 1,
        "subtopico": "Dicionário x verbete",
        "dificuldade": "media",
        "pergunta": "Assinale a afirmativa correta sobre dicionário e verbete.",
        "alternativas": [
            "O dicionário é a obra de consulta; o verbete é o conjunto de informações organizado em torno de uma entrada ou lema.",
            "Verbete é sinônimo de alfabeto e dicionário é sinônimo de palavra.",
            "Todo verbete contém apenas um significado e nunca traz informações gramaticais.",
            "Dicionário é qualquer texto em ordem alfabética, independentemente de sua função.",
            "Verbete é apenas a definição, sem incluir classe, exemplos ou outras marcas."
        ],
        "correta": 0,
        "feedbackAcerto": "A distinção central é entre a obra de consulta como um todo e a unidade interna organizada em torno de uma entrada.",
        "feedbackErro": "Observe a relação parte-todo: o verbete é uma unidade do dicionário.",
        "analiseAlternativas": [
            "Correta. É a relação conceitual adequada.",
            "Incorreta. Os termos não são sinônimos.",
            "Incorreta. Um verbete pode apresentar várias acepções e muitas outras informações.",
            "Incorreta. A função lexicográfica é essencial.",
            "Incorreta. O verbete pode conter diversas informações além da definição."
        ],
        "dicaBanca": "FGV costuma pedir o que um verbete contém ou o que está ausente nele.",
        "pegadinha": "Não reduza verbete à definição.",
        "memorizar2026": "Dicionário = obra; verbete = unidade organizada em torno do lema.",
        "fonte": "Edital SEDUC-PA 2026 — Os dicionários: tipos, organização de verbetes."
    },
    {
        "id": "SEDUC-LP-DIC-002",
        "numero": 2,
        "subtopico": "Entrada / lema",
        "dificuldade": "media",
        "pergunta": "Em um dicionário, a palavra destacada que inicia o verbete e serve como forma de consulta é chamada de",
        "alternativas": [
            "acepção.",
            "entrada ou lema.",
            "marca de uso.",
            "etimologia.",
            "exemplo de uso."
        ],
        "correta": 1,
        "feedbackAcerto": "Entrada ou lema é a forma sob a qual o vocábulo é registrado e localizado no dicionário.",
        "feedbackErro": "Procure o nome da palavra que encabeça o verbete.",
        "analiseAlternativas": [
            "Incorreta. Acepção é cada significado registrado.",
            "Correta. Entrada/lema encabeça o verbete.",
            "Incorreta. Marca de uso informa registro ou domínio.",
            "Incorreta. Etimologia trata da origem.",
            "Incorreta. Exemplo ilustra emprego."
        ],
        "dicaBanca": "Em prova, a FGV pode chamar a entrada de lema.",
        "pegadinha": "Entrada não é a primeira definição; é a palavra consultada.",
        "memorizar2026": "Entrada/lema = palavra que encabeça o verbete.",
        "fonte": "Edital SEDUC-PA 2026; terminologia lexicográfica recorrente."
    },
    {
        "id": "SEDUC-LP-DIC-003",
        "numero": 3,
        "subtopico": "Classe gramatical",
        "dificuldade": "media",
        "pergunta": "No fragmento de verbete “apoio s.m.”, a abreviação “s.m.” informa",
        "alternativas": [
            "a origem histórica da palavra.",
            "a pronúncia obrigatória.",
            "a classe gramatical e o gênero: substantivo masculino.",
            "o sentido figurado.",
            "a formação por sufixação."
        ],
        "correta": 2,
        "feedbackAcerto": "As abreviações morfológicas identificam a categoria gramatical e, quando pertinente, o gênero.",
        "feedbackErro": "Leia as abreviações do verbete como informações estruturais, não como parte da definição.",
        "analiseAlternativas": [
            "Incorreta. Isso seria informação etimológica.",
            "Incorreta. Pronúncia costuma aparecer em indicação fonológica.",
            "Correta. s.m. = substantivo masculino.",
            "Incorreta. Sentido figurado costuma vir marcado por fig.",
            "Incorreta. Formação é outra informação."
        ],
        "dicaBanca": "Na prova FGV de Paulínia, a classe morfológica estava explicitamente presente no verbete de “apoio”.",
        "pegadinha": "Não confunda abreviação gramatical com marca de uso.",
        "memorizar2026": "s.m. = substantivo masculino; s.f. = substantivo feminino; adj. = adjetivo.",
        "fonte": "FGV Paulínia 2021 — Professor de Português, questão 59; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-DIC-004",
        "numero": 4,
        "subtopico": "Indicação fonológica",
        "dificuldade": "media",
        "pergunta": "Em um verbete, uma indicação como “[ô]” após a separação silábica de uma palavra serve principalmente para",
        "alternativas": [
            "indicar a origem latina.",
            "mostrar que a palavra é substantivo.",
            "numerar acepções.",
            "registrar informação de pronúncia/fonologia.",
            "marcar sentido figurado."
        ],
        "correta": 3,
        "feedbackAcerto": "Colchetes e sinais fonológicos podem indicar pronúncia, timbre vocálico ou outras informações fonéticas/fonológicas.",
        "feedbackErro": "Pergunte que tipo de informação não pertence ao significado, mas à realização sonora da palavra.",
        "analiseAlternativas": [
            "Incorreta. Origem é etimologia.",
            "Incorreta. Classe aparece em abreviações morfológicas.",
            "Incorreta. Acepções são geralmente numeradas.",
            "Correta. É informação fonológica.",
            "Incorreta. “fig.” é marca semântica/de uso."
        ],
        "dicaBanca": "A FGV já perguntou se um verbete trazia indicação fonológica.",
        "pegadinha": "Informação fonológica não é etimologia.",
        "memorizar2026": "Pronúncia/timbre podem aparecer entre colchetes ou por transcrição específica.",
        "fonte": "FGV Paulínia 2021 — Professor de Português, questão 59."
    },
    {
        "id": "SEDUC-LP-DIC-005",
        "numero": 5,
        "subtopico": "Acepções",
        "dificuldade": "media",
        "pergunta": "Em um verbete com os itens “1.”, “2.” e “3.” seguidos de definições diferentes, esses números indicam normalmente",
        "alternativas": [
            "a frequência de uso anual.",
            "a quantidade de sílabas.",
            "a ordem alfabética das palavras.",
            "o número de letras.",
            "acepções ou sentidos distintos da mesma entrada."
        ],
        "correta": 4,
        "feedbackAcerto": "A numeração organiza os diferentes sentidos registrados para uma mesma entrada.",
        "feedbackErro": "Em verbetes polissêmicos, cada significado costuma ser separado em uma acepção.",
        "analiseAlternativas": [
            "Incorreta. Não é estatística de uso.",
            "Incorreta. Não conta sílabas.",
            "Incorreta. A entrada já está localizada alfabeticamente.",
            "Incorreta. Não conta letras.",
            "Correta. Cada número introduz uma acepção."
        ],
        "dicaBanca": "FGV costuma pedir que o candidato relacione uma frase a uma acepção numerada.",
        "pegadinha": "Número de acepção não é grau de importância absoluta.",
        "memorizar2026": "Acepção = um dos sentidos registrados para o lema.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de leitura de verbetes."
    },
    {
        "id": "SEDUC-LP-DIC-006",
        "numero": 6,
        "subtopico": "Marcas de uso",
        "dificuldade": "media",
        "pergunta": "No verbete “claro ... 4. fig. evidente; compreensível”, a abreviação “fig.” indica",
        "alternativas": [
            "que a acepção é figurada, não literal.",
            "que a palavra só existe em linguagem científica.",
            "que o termo é obrigatoriamente pejorativo.",
            "que a acepção está em desuso.",
            "que a palavra é feminina."
        ],
        "correta": 0,
        "feedbackAcerto": "“fig.” marca emprego figurado da palavra naquela acepção.",
        "feedbackErro": "Marcas de uso orientam como, onde ou em que registro a acepção é empregada.",
        "analiseAlternativas": [
            "Correta. “fig.” = figurado.",
            "Incorreta. Uso científico costuma ter marca técnica específica.",
            "Incorreta. Pejorativo costuma ser “pej.”.",
            "Incorreta. Arcaico/antigo teria outra marca.",
            "Incorreta. Gênero é informação gramatical."
        ],
        "dicaBanca": "Abreviações do verbete têm função informativa precisa; a FGV gosta de testar a leitura delas.",
        "pegadinha": "fig., fam., pop., pej., reg., técn. não são sinônimos.",
        "memorizar2026": "Marca de uso = orientação sobre registro, domínio ou valor expressivo.",
        "fonte": "Edital SEDUC-PA 2026 — organização de verbetes."
    },
    {
        "id": "SEDUC-LP-DIC-007",
        "numero": 7,
        "subtopico": "Exemplos de uso",
        "dificuldade": "media",
        "pergunta": "A principal função de uma frase-exemplo dentro de um verbete é",
        "alternativas": [
            "fornecer a etimologia completa.",
            "mostrar o emprego da palavra em contexto e ajudar a compreender a acepção.",
            "substituir a classificação gramatical.",
            "provar que a palavra tem apenas um sentido.",
            "indicar a ordem alfabética."
        ],
        "correta": 1,
        "feedbackAcerto": "Exemplos mostram como a palavra funciona em contexto e podem esclarecer regência, construção e acepção.",
        "feedbackErro": "Pense no papel de uma frase construída ou registrada após a definição.",
        "analiseAlternativas": [
            "Incorreta. Etimologia trata da origem.",
            "Correta. O exemplo contextualiza o uso.",
            "Incorreta. Classe é informação independente.",
            "Incorreta. Pode haver várias acepções.",
            "Incorreta. A ordem alfabética pertence à organização geral."
        ],
        "dicaBanca": "FGV pode pedir que você associe um exemplo a determinada acepção.",
        "pegadinha": "Exemplo não é definição, embora possa ajudar a interpretá-la.",
        "memorizar2026": "Exemplo de uso = contexto que ilustra a acepção.",
        "fonte": "Edital SEDUC-PA 2026; organização microestrutural do verbete."
    },
    {
        "id": "SEDUC-LP-DIC-008",
        "numero": 8,
        "subtopico": "Etimologia",
        "dificuldade": "media",
        "pergunta": "Quando um verbete apresenta “ETIM” seguido da língua de origem e de uma forma antiga, a informação se refere",
        "alternativas": [
            "ao plural do vocábulo.",
            "à pronúncia atual.",
            "à origem e à história/formação histórica da palavra.",
            "à frequência de uso.",
            "ao gênero gramatical."
        ],
        "correta": 2,
        "feedbackAcerto": "Etimologia registra a origem histórica do vocábulo e, conforme a obra, etapas de sua formação/evolução.",
        "feedbackErro": "A abreviação “ETIM” é uma pista direta.",
        "analiseAlternativas": [
            "Incorreta. Plural é informação flexional.",
            "Incorreta. Pronúncia é informação fonológica.",
            "Correta. Trata da origem histórica.",
            "Incorreta. Não é estatística.",
            "Incorreta. Gênero aparece na classificação."
        ],
        "dicaBanca": "Em questão oficial da FGV, a leitura de “ETIM” foi central para reconhecer informação etimológica.",
        "pegadinha": "Etimologia não é o mesmo que derivação sincrônica da palavra em português atual.",
        "memorizar2026": "Etimologia = origem histórica do vocábulo.",
        "fonte": "FGV Senado 2022 — verbete de “abacateiro”; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-DIC-009",
        "numero": 9,
        "subtopico": "Formação do vocábulo x etimologia",
        "dificuldade": "alta",
        "pergunta": "Em um verbete, a indicação “[Dev. de apoiar]” informa principalmente",
        "alternativas": [
            "a pronúncia de “apoio”.",
            "o significado figurado.",
            "o gênero do substantivo.",
            "a formação/derivação do vocábulo em relação a “apoiar”, não uma etimologia histórica completa.",
            "a ordem alfabética."
        ],
        "correta": 3,
        "feedbackAcerto": "“Dev. de apoiar” descreve relação de formação lexical; não substitui necessariamente uma informação etimológica de origem histórica.",
        "feedbackErro": "Essa distinção foi justamente explorada pela FGV em prova de professor.",
        "analiseAlternativas": [
            "Incorreta. Pronúncia é outra informação.",
            "Incorreta. Não é marca de sentido figurado.",
            "Incorreta. Gênero já aparece em s.m.",
            "Correta. Trata da formação do vocábulo.",
            "Incorreta. Não se refere à macroestrutura."
        ],
        "dicaBanca": "Paulínia/FGV 2021 apresentou [Dev. de apoiar] e perguntou qual informação estava ausente: a etimologia.",
        "pegadinha": "Formação lexical atual ≠ origem etimológica completa.",
        "memorizar2026": "“Dev. de X” pode indicar derivação/formação; ETIM indica origem histórica.",
        "fonte": "FGV Paulínia 2021 — Professor de Português, questão 59."
    },
    {
        "id": "SEDUC-LP-DIC-010",
        "numero": 10,
        "subtopico": "Regência no verbete",
        "dificuldade": "media",
        "pergunta": "Um dicionário registra: “assistir v.t.i. ... assistir a algo”. A indicação “a algo” ajuda principalmente a informar",
        "alternativas": [
            "a etimologia.",
            "a pronúncia.",
            "o sentido figurado.",
            "a classe do substantivo “algo”.",
            "a regência/construção sintática associada ao verbo nessa acepção."
        ],
        "correta": 4,
        "feedbackAcerto": "Alguns verbetes registram preposições e construções exigidas pelo verbo, orientando a regência daquela acepção.",
        "feedbackErro": "A presença de preposição após o verbo costuma sinalizar informação sintático-regencial.",
        "analiseAlternativas": [
            "Incorreta. Não trata da origem.",
            "Incorreta. Não trata da pronúncia.",
            "Incorreta. Pode haver sentido literal ou figurado, mas a pista é regencial.",
            "Incorreta. O foco não é a classe de “algo”.",
            "Correta. É informação de regência."
        ],
        "dicaBanca": "Leia todas as informações após a definição; nem tudo é significado.",
        "pegadinha": "Regência pode variar conforme a acepção do verbo.",
        "memorizar2026": "Verbete pode informar: classe + sentido + regência + exemplos.",
        "fonte": "Edital SEDUC-PA 2026 — organização de verbetes."
    },
    {
        "id": "SEDUC-LP-DIC-011",
        "numero": 11,
        "subtopico": "Plural e formas flexionais",
        "dificuldade": "media",
        "pergunta": "Se um verbete registra uma forma irregular de plural, essa informação pertence principalmente",
        "alternativas": [
            "às informações gramaticais/flexionais da entrada.",
            "à etimologia.",
            "às marcas de registro social.",
            "à definição da primeira acepção.",
            "à indicação fonológica."
        ],
        "correta": 0,
        "feedbackAcerto": "Plural, gênero e outras variações podem integrar a descrição gramatical do verbete.",
        "feedbackErro": "Pergunte se a informação diz como a palavra flexiona ou de onde ela veio.",
        "analiseAlternativas": [
            "Correta. É informação flexional.",
            "Incorreta. Não é origem histórica.",
            "Incorreta. Não é marca social.",
            "Incorreta. Não é significado.",
            "Incorreta. Não é pronúncia."
        ],
        "dicaBanca": "FGV pode apresentar verbetes densos e perguntar que tipo de informação cada trecho oferece.",
        "pegadinha": "Nem toda informação após a entrada é uma acepção.",
        "memorizar2026": "Plural irregular = informação gramatical/flexional.",
        "fonte": "Edital SEDUC-PA 2026 — organização de verbetes."
    },
    {
        "id": "SEDUC-LP-DIC-012",
        "numero": 12,
        "subtopico": "Macroestrutura",
        "dificuldade": "alta",
        "pergunta": "A organização das entradas de um dicionário em uma sequência geral, normalmente alfabética, corresponde à",
        "alternativas": [
            "acepção.",
            "macroestrutura da obra.",
            "marca de uso.",
            "etimologia.",
            "regência."
        ],
        "correta": 1,
        "feedbackAcerto": "Macroestrutura diz respeito à organização do conjunto de entradas/verbete na obra.",
        "feedbackErro": "Diferencie a organização do dicionário como um todo da organização interna de cada verbete.",
        "analiseAlternativas": [
            "Incorreta. Acepção é sentido.",
            "Correta. Refere-se à estrutura global das entradas.",
            "Incorreta. Marca de uso fica dentro do verbete.",
            "Incorreta. Etimologia é informação interna.",
            "Incorreta. Regência também é informação interna."
        ],
        "dicaBanca": "O edital fala em “organização de verbetes”; compreender macro x micro ajuda a ler a estrutura com precisão.",
        "pegadinha": "Macro = conjunto/ordem das entradas; micro = interior do verbete.",
        "memorizar2026": "Macroestrutura = organização global das entradas.",
        "fonte": "Edital SEDUC-PA 2026 — tipos e organização de verbetes."
    },
    {
        "id": "SEDUC-LP-DIC-013",
        "numero": 13,
        "subtopico": "Microestrutura",
        "dificuldade": "alta",
        "pergunta": "Classe gramatical, acepções, marcas de uso, etimologia e exemplos, quando aparecem dentro de um verbete, fazem parte de sua",
        "alternativas": [
            "ordem alfabética externa.",
            "lista de páginas.",
            "microestrutura.",
            "capa editorial.",
            "bibliografia da obra."
        ],
        "correta": 2,
        "feedbackAcerto": "Microestrutura é a organização interna das informações de cada verbete.",
        "feedbackErro": "Pense no “interior” do verbete.",
        "analiseAlternativas": [
            "Incorreta. Isso é macroestrutura.",
            "Incorreta. Não é índice de páginas.",
            "Correta. São componentes internos do verbete.",
            "Incorreta. Não é elemento paratextual da capa.",
            "Incorreta. Não é bibliografia."
        ],
        "dicaBanca": "A FGV costuma explorar exatamente quais informações estão presentes em um verbete.",
        "pegadinha": "Microestrutura não é o conjunto de todas as entradas.",
        "memorizar2026": "Microestrutura = organização interna do verbete.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de leitura estrutural de verbetes."
    },
    {
        "id": "SEDUC-LP-DIC-014",
        "numero": 14,
        "subtopico": "Dicionário geral",
        "dificuldade": "media",
        "pergunta": "Um dicionário geral de língua caracteriza-se principalmente por",
        "alternativas": [
            "registrar apenas termos de uma profissão específica.",
            "traduzir obrigatoriamente todas as entradas para outra língua.",
            "apresentar apenas a história das palavras.",
            "abranger vocabulário amplo da língua e reunir diferentes tipos de informação lexical.",
            "listar somente sinônimos."
        ],
        "correta": 3,
        "feedbackAcerto": "Dicionários gerais buscam representar amplo conjunto do léxico comum, com definições e outras informações linguísticas.",
        "feedbackErro": "Compare-o com obras especializadas, bilíngues e etimológicas.",
        "analiseAlternativas": [
            "Incorreta. Isso se aproxima de obra terminológica.",
            "Incorreta. Isso caracteriza dicionário bilíngue.",
            "Incorreta. Isso é foco do etimológico.",
            "Correta. É a característica geral.",
            "Incorreta. Isso descreve um dicionário de sinônimos."
        ],
        "dicaBanca": "O edital pede “tipos de dicionário”; diferencie pelo objetivo da obra.",
        "pegadinha": "Tipo de dicionário depende do público, cobertura e finalidade.",
        "memorizar2026": "Dicionário geral = ampla cobertura do vocabulário da língua.",
        "fonte": "Edital SEDUC-PA 2026 — tipos de dicionário."
    },
    {
        "id": "SEDUC-LP-DIC-015",
        "numero": 15,
        "subtopico": "Dicionário escolar / minidicionário",
        "dificuldade": "media",
        "pergunta": "Um minidicionário escolar tende a",
        "alternativas": [
            "registrar apenas nomes próprios.",
            "eliminar qualquer informação gramatical.",
            "ser obrigatoriamente bilíngue.",
            "apresentar somente termos científicos.",
            "selecionar vocabulário e informações de forma mais condensada, adequada ao público e à finalidade pedagógica."
        ],
        "correta": 4,
        "feedbackAcerto": "Minidicionários e dicionários escolares fazem seleção e condensação de conteúdo em função do usuário-alvo.",
        "feedbackErro": "O tamanho menor não elimina necessariamente classe, pronúncia, exemplos ou acepções.",
        "analiseAlternativas": [
            "Incorreta. Não se restringe a nomes próprios.",
            "Incorreta. Pode trazer classe e outras informações.",
            "Incorreta. Pode ser monolíngue.",
            "Incorreta. Não se limita a ciência.",
            "Correta. A seleção é mais resumida e orientada ao público."
        ],
        "dicaBanca": "A prova FGV de Paulínia usou justamente um “minidicionário de Língua Portuguesa”.",
        "pegadinha": "Resumido não significa estruturalmente pobre.",
        "memorizar2026": "Minidicionário = seleção mais compacta de entradas e informações.",
        "fonte": "FGV Paulínia 2021 — Professor de Português; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-DIC-016",
        "numero": 16,
        "subtopico": "Dicionário especializado / terminológico",
        "dificuldade": "media",
        "pergunta": "Uma obra que reúne e define termos próprios da área de educação inclusiva, como “AEE”, “tecnologia assistiva” e “barreiras”, é mais bem classificada como",
        "alternativas": [
            "dicionário especializado/terminológico.",
            "dicionário etimológico exclusivamente.",
            "dicionário de antônimos.",
            "dicionário bilíngue por definição.",
            "dicionário histórico obrigatório."
        ],
        "correta": 0,
        "feedbackAcerto": "A cobertura concentrada em um domínio de conhecimento caracteriza um dicionário especializado ou terminológico.",
        "feedbackErro": "Observe o recorte temático das entradas.",
        "analiseAlternativas": [
            "Correta. A obra se organiza por terminologia de área específica.",
            "Incorreta. O foco não é origem histórica.",
            "Incorreta. Não se limita a relações de oposição.",
            "Incorreta. Não há necessariamente duas línguas.",
            "Incorreta. História lexical não é o foco."
        ],
        "dicaBanca": "Tipo de dicionário é reconhecido pelo objetivo e pelo universo lexical que seleciona.",
        "pegadinha": "Vocabulário técnico não torna a obra automaticamente bilíngue.",
        "memorizar2026": "Especializado/terminológico = léxico de um domínio específico.",
        "fonte": "Edital SEDUC-PA 2026 — tipos de dicionário."
    },
    {
        "id": "SEDUC-LP-DIC-017",
        "numero": 17,
        "subtopico": "Dicionário bilíngue",
        "dificuldade": "facil",
        "pergunta": "Um dicionário português–inglês, ao apresentar equivalentes lexicais entre as duas línguas, é classificado como",
        "alternativas": [
            "etimológico.",
            "bilíngue.",
            "de sinônimos.",
            "monolíngue geral.",
            "terminológico necessariamente."
        ],
        "correta": 1,
        "feedbackAcerto": "Dicionário bilíngue relaciona unidades de duas línguas, geralmente por equivalentes de tradução e outras informações de uso.",
        "feedbackErro": "O próprio par de línguas indica o tipo.",
        "analiseAlternativas": [
            "Incorreta. Etimológico trata de origem.",
            "Correta. Há duas línguas em relação.",
            "Incorreta. O objetivo principal não é listar sinônimos.",
            "Incorreta. Não é uma única língua.",
            "Incorreta. Pode ser geral."
        ],
        "dicaBanca": "Questões de tipos de dicionário podem ser diretas, mas devem ser distinguidas das de estrutura do verbete.",
        "pegadinha": "Bilíngue não significa apenas “ter palavras estrangeiras”.",
        "memorizar2026": "Bilíngue = estabelece correspondências entre duas línguas.",
        "fonte": "Edital SEDUC-PA 2026 — tipos de dicionário."
    },
    {
        "id": "SEDUC-LP-DIC-018",
        "numero": 18,
        "subtopico": "Dicionário etimológico",
        "dificuldade": "media",
        "pergunta": "O tipo de dicionário cujo foco principal é explicar a origem e o desenvolvimento histórico das palavras é o",
        "alternativas": [
            "escolar.",
            "de sinônimos.",
            "etimológico.",
            "bilíngue.",
            "terminológico."
        ],
        "correta": 2,
        "feedbackAcerto": "A obra etimológica privilegia a origem histórica dos vocábulos e suas formas anteriores.",
        "feedbackErro": "Etimologia = origem e história lexical.",
        "analiseAlternativas": [
            "Incorreta. Escolar é definido pelo público/finalidade.",
            "Incorreta. Sinônimos tratam de equivalências semânticas.",
            "Correta. É o foco etimológico.",
            "Incorreta. Bilíngue relaciona línguas.",
            "Incorreta. Terminológico trata de domínio específico."
        ],
        "dicaBanca": "A FGV já cobrou informação etimológica diretamente a partir de verbete.",
        "pegadinha": "Não confunda dicionário etimológico com indicação de derivação atual.",
        "memorizar2026": "Etimológico = origem/história das palavras.",
        "fonte": "FGV Senado 2022; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-DIC-019",
        "numero": 19,
        "subtopico": "Dicionário de sinônimos e antônimos",
        "dificuldade": "media",
        "pergunta": "Uma obra que organiza entradas para apresentar palavras de sentido semelhante e, em outra seção, de sentido oposto, é um dicionário",
        "alternativas": [
            "de pronúncia.",
            "etimológico.",
            "bilíngue.",
            "de sinônimos e antônimos.",
            "terminológico científico."
        ],
        "correta": 3,
        "feedbackAcerto": "Esse tipo de obra é voltado às relações semânticas de equivalência e oposição.",
        "feedbackErro": "Observe que a finalidade não é definir extensamente cada entrada, mas relacionar vocábulos.",
        "analiseAlternativas": [
            "Incorreta. Pronúncia não é o foco.",
            "Incorreta. Não trata de origem.",
            "Incorreta. Não envolve duas línguas.",
            "Correta. A função é relacionar sentidos semelhantes/opostos.",
            "Incorreta. Não está restrito a área técnica."
        ],
        "dicaBanca": "Esse tipo conversa diretamente com o tópico anterior de Semântica.",
        "pegadinha": "Tipo de obra pode priorizar relações lexicais em vez de definições extensas.",
        "memorizar2026": "Sinônimos/antônimos = dicionário de relações semânticas.",
        "fonte": "Edital SEDUC-PA 2026 — tipos de dicionário."
    },
    {
        "id": "SEDUC-LP-DIC-020",
        "numero": 20,
        "subtopico": "Leitura de verbete incompleto — padrão FGV",
        "dificuldade": "alta",
        "pergunta": "Considere o verbete fictício: “amparo (am.pa.ro) s.m. 1. proteção; auxílio. 2. apoio moral. [Dev. de amparar]”. Entre as informações abaixo, a que NÃO está explicitamente presente é",
        "alternativas": [
            "a separação silábica.",
            "a classe gramatical.",
            "as acepções.",
            "a formação/derivação do vocábulo.",
            "a origem etimológica histórica."
        ],
        "correta": 4,
        "feedbackAcerto": "O verbete traz separação, classe, sentidos e formação; não apresenta língua de origem ou informação etimológica histórica.",
        "feedbackErro": "Faça um inventário do que aparece literalmente no verbete antes de responder.",
        "analiseAlternativas": [
            "Incorreta. “am.pa.ro” está presente.",
            "Incorreta. “s.m.” aparece.",
            "Incorreta. Há duas acepções numeradas.",
            "Incorreta. “[Dev. de amparar]” informa formação.",
            "Correta. Não há indicação etimológica histórica."
        ],
        "dicaBanca": "Esse formato reproduz o raciocínio da questão 59 de Paulínia/FGV 2021, sem copiar o enunciado original.",
        "pegadinha": "“Dev. de” não é, por si só, etimologia completa.",
        "memorizar2026": "Questão FGV: inventarie cada informação e identifique a ausente.",
        "fonte": "FGV Paulínia 2021 — Professor de Português, questão 59."
    },
    {
        "id": "SEDUC-LP-DIC-021",
        "numero": 21,
        "subtopico": "Marcas de registro",
        "dificuldade": "media",
        "pergunta": "Em um verbete, a marca “fam.” antes de uma acepção indica normalmente",
        "alternativas": [
            "uso familiar/coloquial daquela acepção.",
            "origem francesa da palavra.",
            "substantivo feminino.",
            "forma arcaica obrigatória.",
            "pronúncia nasal."
        ],
        "correta": 0,
        "feedbackAcerto": "“fam.” é uma marca de uso que sinaliza emprego familiar/coloquial, conforme a convenção da obra.",
        "feedbackErro": "Marcas de registro descrevem o contexto de uso da acepção.",
        "analiseAlternativas": [
            "Correta. É uma marca de registro.",
            "Incorreta. Origem francesa apareceria em etimologia.",
            "Incorreta. Feminino costuma ser “s.f.”.",
            "Incorreta. Arcaico tem outras marcas, como “ant.” ou “arc.” conforme a obra.",
            "Incorreta. Pronúncia é informação fonológica."
        ],
        "dicaBanca": "A abreviação precisa ser interpretada segundo a legenda/convenção do dicionário.",
        "pegadinha": "Marcas podem variar de obra para obra; observe a convenção utilizada.",
        "memorizar2026": "fam. = familiar; fig. = figurado; pej. = pejorativo, conforme a legenda da obra.",
        "fonte": "Edital SEDUC-PA 2026 — organização de verbetes."
    },
    {
        "id": "SEDUC-LP-DIC-022",
        "numero": 22,
        "subtopico": "Ordem das acepções",
        "dificuldade": "alta",
        "pergunta": "Sobre a ordem das acepções em um verbete, é correto afirmar que",
        "alternativas": [
            "a acepção 1 é sempre a única correta.",
            "a numeração organiza sentidos segundo critérios editoriais da obra; o contexto determina qual acepção se aplica a um uso concreto.",
            "a última acepção é sempre a mais frequente.",
            "acepções numeradas são classes gramaticais diferentes obrigatoriamente.",
            "o número indica o grau de formalidade."
        ],
        "correta": 1,
        "feedbackAcerto": "A numeração organiza as acepções conforme critérios lexicográficos; para interpretar um texto, é preciso escolher a acepção compatível com o contexto.",
        "feedbackErro": "Não trate o número como valor absoluto de correção ou formalidade.",
        "analiseAlternativas": [
            "Incorreta. Todas as acepções registradas podem ser legítimas.",
            "Correta. O contexto seleciona o sentido pertinente.",
            "Incorreta. Não há regra universal desse tipo.",
            "Incorreta. Várias acepções podem pertencer à mesma classe.",
            "Incorreta. Formalidade é indicada por marcas de uso."
        ],
        "dicaBanca": "FGV gosta de cruzar dicionário e semântica: qual acepção corresponde ao emprego no texto?",
        "pegadinha": "Acepção 1 não significa “sentido verdadeiro”; é organização editorial.",
        "memorizar2026": "Acepções = sentidos; contexto escolhe o sentido do enunciado.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de interpretação lexical."
    },
    {
        "id": "SEDUC-LP-DIC-023",
        "numero": 23,
        "subtopico": "Verbete polissêmico",
        "dificuldade": "alta",
        "pergunta": "Um verbete registra para “rede”: 1. artefato de fios entrelaçados; 2. conjunto interligado de pessoas ou instituições; 3. sistema de computadores conectados. Essa organização evidencia",
        "alternativas": [
            "antonímia.",
            "paronímia.",
            "polissemia organizada em acepções distintas.",
            "uma falha do dicionário.",
            "apenas mudança de classe gramatical."
        ],
        "correta": 2,
        "feedbackAcerto": "A mesma entrada apresenta vários sentidos relacionados, organizados em acepções numeradas.",
        "feedbackErro": "Relacione esse tópico ao módulo anterior de Semântica.",
        "analiseAlternativas": [
            "Incorreta. Não há oposição.",
            "Incorreta. Não são palavras semelhantes; é a mesma entrada.",
            "Correta. Há polissemia.",
            "Incorreta. A multiplicidade de sentidos é normal.",
            "Incorreta. As acepções podem permanecer na mesma classe."
        ],
        "dicaBanca": "Dicionário e Semântica se cruzam: acepções são a forma lexicográfica de organizar sentidos.",
        "pegadinha": "Uma entrada pode ter muitas acepções sem gerar ambiguidade em todo uso.",
        "memorizar2026": "Polissemia no dicionário = sentidos numerados sob o mesmo lema.",
        "fonte": "Edital SEDUC-PA 2026 — Dicionários; articulação com Semântica."
    },
    {
        "id": "SEDUC-LP-DIC-024",
        "numero": 24,
        "subtopico": "Verbete e contexto",
        "dificuldade": "alta",
        "pergunta": "Um dicionário traz para “claro”: 1. iluminado; 2. compreensível; 3. evidente. Na frase “A explicação ficou clara”, a acepção adequada é a relacionada a",
        "alternativas": [
            "iluminação física.",
            "cor clara.",
            "evidência jurídica necessariamente.",
            "compreensibilidade da explicação.",
            "origem etimológica do adjetivo."
        ],
        "correta": 3,
        "feedbackAcerto": "O contexto seleciona a acepção “compreensível”.",
        "feedbackErro": "Leia o enunciado e compare o valor de cada acepção com o substantivo “explicação”.",
        "analiseAlternativas": [
            "Incorreta. Não há luz física.",
            "Incorreta. Não se fala de cor.",
            "Incorreta. O contexto é explicativo, não jurídico.",
            "Correta. “clara” = compreensível.",
            "Incorreta. Etimologia não responde ao sentido contextual."
        ],
        "dicaBanca": "Esse tipo de questão combina leitura de verbete com semântica contextual, padrão típico da FGV.",
        "pegadinha": "A definição correta depende da frase concreta.",
        "memorizar2026": "Verbete oferece opções; contexto seleciona a acepção.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de sentido contextual."
    },
    {
        "id": "SEDUC-LP-DIC-025",
        "numero": 25,
        "subtopico": "Caso integrador — estrutura de verbete",
        "dificuldade": "alta",
        "pergunta": "Considere o verbete fictício: “ponte s.f. [põ.te] 1. construção que permite transpor um obstáculo. 2. fig. meio de ligação entre pessoas ou ideias. ETIM ... Ex.: ‘O diálogo criou uma ponte entre os grupos.’” A análise correta é",
        "alternativas": [
            "“s.f.” indica pronúncia e “[põ.te]” indica gênero.",
            "“fig.” indica origem estrangeira da palavra.",
            "o exemplo pertence necessariamente à acepção 1.",
            "“ETIM” indica classe gramatical.",
            "“s.f.” informa classe/gênero; “[põ.te]” traz indicação fonológica; “fig.” marca sentido figurado; o exemplo corresponde à acepção 2; “ETIM” introduz informação etimológica."
        ],
        "correta": 4,
        "feedbackAcerto": "A alternativa identifica corretamente diferentes componentes da microestrutura do verbete.",
        "feedbackErro": "Leia cada marca separadamente e associe-a à sua função.",
        "analiseAlternativas": [
            "Incorreta. As funções foram trocadas.",
            "Incorreta. “fig.” = figurado.",
            "Incorreta. O exemplo usa “ponte” metaforicamente.",
            "Incorreta. ETIM é etimologia.",
            "Correta. A leitura estrutural está completa."
        ],
        "dicaBanca": "Questões integradoras são muito adequadas ao estilo FGV, que cobra leitura minuciosa do verbete.",
        "pegadinha": "Uma única linha do verbete pode combinar classe, pronúncia, sentido, marca de uso, exemplo e origem.",
        "memorizar2026": "FGV: leia a estrutura do verbete, não só a definição.",
        "fonte": "Edital SEDUC-PA 2026; FGV Paulínia 2021 e FGV Senado 2022."
    }
];

    window.seducLinguaPortuguesaDicionariosVerbetes2026 = banco;
})();
