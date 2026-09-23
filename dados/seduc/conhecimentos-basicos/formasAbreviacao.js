/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 17: Formas de Abreviação
   25 questões autorais calibradas pelo edital e pelo padrão FGV.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-LP-ABR-001",
        "numero": 1,
        "subtopico": "Conceito de abreviatura",
        "dificuldade": "media",
        "pergunta": "Em um relatório escolar, a palavra “página” aparece como “pág.”. Essa forma exemplifica",
        "alternativas": [
            "abreviatura, isto é, redução gráfica convencional de uma palavra.",
            "símbolo de unidade de medida.",
            "sigla formada por letras iniciais.",
            "acrônimo pronunciável como palavra.",
            "flexão nominal de número."
        ],
        "correta": 0,
        "feedbackAcerto": "“pág.” é uma abreviatura convencional: reduz graficamente a palavra e conserva o ponto abreviativo.",
        "feedbackErro": "Abreviatura reduz uma palavra ou expressão; símbolo, sigla e acrônimo seguem convenções diferentes.",
        "analiseAlternativas": [
            "Correta. “pág.” é abreviatura consagrada de “página”.",
            "Incorreta. Não representa grandeza ou unidade de medida.",
            "Incorreta. Não é formada por iniciais de uma denominação.",
            "Incorreta. Não é uma sigla pronunciável como palavra.",
            "Incorreta. Não há flexão."
        ],
        "dicaBanca": "A FGV costuma misturar as categorias e perguntar qual forma está adequadamente grafada.",
        "pegadinha": "Nem toda forma reduzida é sigla.",
        "memorizar2026": "Abreviatura = redução gráfica convencional, normalmente com ponto.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de formas de abreviação."
    },
    {
        "id": "SEDUC-LP-ABR-002",
        "numero": 2,
        "subtopico": "Símbolos de unidades",
        "dificuldade": "media",
        "pergunta": "Em um comunicado, a escola informa que a caminhada terá percurso de “5 km”. Nessa expressão, “km” é",
        "alternativas": [
            "abreviatura de uso livre.",
            "símbolo padronizado de quilômetro, grafado sem ponto e sem marca de plural.",
            "sigla institucional.",
            "acrônimo científico.",
            "abreviatura que exige “s” no plural."
        ],
        "correta": 1,
        "feedbackAcerto": "“km” é símbolo de unidade e não leva ponto abreviativo nem “s” de plural.",
        "feedbackErro": "Símbolos de unidades obedecem a convenções próprias e não funcionam como abreviaturas comuns.",
        "analiseAlternativas": [
            "Incorreta. Não é abreviatura livre.",
            "Correta. “km” é símbolo padronizado.",
            "Incorreta. Não representa uma instituição.",
            "Incorreta. Não é acrônimo.",
            "Incorreta. Símbolos não recebem marca de plural."
        ],
        "dicaBanca": "FGV já cobrou explicitamente que h, km e Ag são símbolos sem ponto e sem plural.",
        "pegadinha": "“5 kms” e “5 km.” estão inadequados.",
        "memorizar2026": "Símbolo: sem ponto, sem plural.",
        "fonte": "FGV — questão sobre símbolos, siglas e acrônimos; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ABR-003",
        "numero": 3,
        "subtopico": "Sigla",
        "dificuldade": "media",
        "pergunta": "No enunciado “A FGV divulgará o resultado”, a forma “FGV” é classificada, no uso corrente, como",
        "alternativas": [
            "abreviatura de tratamento.",
            "símbolo químico.",
            "sigla formada pelas letras iniciais de Fundação Getulio Vargas.",
            "sufixo nominal.",
            "abreviatura latina."
        ],
        "correta": 2,
        "feedbackAcerto": "“FGV” é uma sigla constituída pelas iniciais da denominação institucional.",
        "feedbackErro": "Observe a origem da forma reduzida: ela corresponde às letras iniciais de um nome próprio composto.",
        "analiseAlternativas": [
            "Incorreta. Não é título de tratamento.",
            "Incorreta. Não é símbolo químico.",
            "Correta. É sigla institucional.",
            "Incorreta. Não é morfema.",
            "Incorreta. Não é expressão latina."
        ],
        "dicaBanca": "Siglas normalmente aparecem sem pontos entre as letras.",
        "pegadinha": "FGV, IBGE, INSS e IPTU não devem ser escritos com pontos entre as letras.",
        "memorizar2026": "Sigla = forma reduzida construída a partir de iniciais, em regra sem pontos.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV sobre siglas."
    },
    {
        "id": "SEDUC-LP-ABR-004",
        "numero": 4,
        "subtopico": "Acrônimo",
        "dificuldade": "media",
        "pergunta": "“Anvisa” diferencia-se de “FGV”, na classificação tradicional das formas de abreviação, porque “Anvisa”",
        "alternativas": [
            "é símbolo de unidade.",
            "é apenas uma abreviatura com ponto.",
            "não deriva de uma denominação maior.",
            "é acrônimo, pois a forma reduzida pode ser pronunciada como uma palavra.",
            "deve obrigatoriamente ser soletrada letra por letra."
        ],
        "correta": 3,
        "feedbackAcerto": "Acrônimos são formas reduzidas construídas de modo a permitir leitura como palavra, como Anvisa e Unesco.",
        "feedbackErro": "A distinção pedida é fonológica: pronúncia como palavra x leitura letra por letra.",
        "analiseAlternativas": [
            "Incorreta. Não é unidade.",
            "Incorreta. Não leva ponto abreviativo.",
            "Incorreta. Resulta de denominação institucional.",
            "Correta. Essa é a característica do acrônimo.",
            "Incorreta. Isso a aproximaria de siglas soletradas."
        ],
        "dicaBanca": "A FGV já diferenciou siglas e acrônimos em questões específicas.",
        "pegadinha": "Acrônimo é uma forma de sigla pronunciável como palavra; a grafia segue convenção consagrada.",
        "memorizar2026": "Acrônimo = sigla pronunciável como palavra.",
        "fonte": "FGV — questões sobre formas de abreviação; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ABR-005",
        "numero": 5,
        "subtopico": "Forma adequada — padrão FGV",
        "dificuldade": "alta",
        "pergunta": "Assinale a forma adequadamente grafada segundo as convenções de abreviação exploradas pela FGV.",
        "alternativas": [
            "Ag. para o símbolo químico da prata.",
            "I.P.T.U. para Imposto Predial e Territorial Urbano.",
            "10 hs. para dez horas.",
            "5 kms para cinco quilômetros.",
            "dez. para o mês de dezembro."
        ],
        "correta": 4,
        "feedbackAcerto": "“dez.” é abreviatura consagrada de dezembro. Os símbolos Ag, h e km não recebem ponto ou “s”, e siglas como IPTU não usam pontos entre as letras.",
        "feedbackErro": "A banca já cobrou exatamente esse tipo de contraste entre abreviatura, símbolo e sigla.",
        "analiseAlternativas": [
            "Incorreta. O símbolo químico é Ag, sem ponto.",
            "Incorreta. A sigla é IPTU, sem pontos.",
            "Incorreta. O símbolo de hora é h, sem “s” e sem ponto.",
            "Incorreta. O símbolo km não recebe “s”.",
            "Correta. “dez.” é forma abreviada convencional."
        ],
        "dicaBanca": "Questão inspirada em cobrança direta da FGV sobre formas de abreviação.",
        "pegadinha": "Ponto é típico de muitas abreviaturas, mas não de símbolos nem de siglas.",
        "memorizar2026": "Ag | IPTU | 10 h | 5 km | dez.",
        "fonte": "FGV/AL-BA 2014 — questão direta sobre formas de abreviação."
    },
    {
        "id": "SEDUC-LP-ABR-006",
        "numero": 6,
        "subtopico": "Horas",
        "dificuldade": "media",
        "pergunta": "Um aviso informa o horário de início da reunião. A forma mais adequada para representar “oito horas”, usando o símbolo da unidade, é",
        "alternativas": [
            "8 h",
            "8 h.",
            "8 hs",
            "8 hrs.",
            "8 Hs"
        ],
        "correta": 0,
        "feedbackAcerto": "O símbolo de hora é “h”, sem ponto abreviativo e sem marca de plural.",
        "feedbackErro": "Não trate “h” como abreviatura comum; é símbolo de unidade.",
        "analiseAlternativas": [
            "Correta. Forma padronizada: 8 h",
            "Incorreta. Como forma isolada, o símbolo não recebe ponto próprio; um ponto só apareceria se encerrasse a frase.",
            "Incorreta. Símbolo não recebe “s”.",
            "Incorreta. “hrs.” não é o símbolo padronizado.",
            "Incorreta. A grafia do símbolo é h minúsculo."
        ],
        "dicaBanca": "A FGV já usou “10hs.” como distrator.",
        "pegadinha": "O símbolo é h; plural é indicado pelo numeral, não por “s”.",
        "memorizar2026": "8 h, 10 h, 14 h.",
        "fonte": "FGV — questões sobre símbolos e abreviações."
    },
    {
        "id": "SEDUC-LP-ABR-007",
        "numero": 7,
        "subtopico": "Plural de símbolos",
        "dificuldade": "media",
        "pergunta": "Em um relatório de atividades, qual forma está correta?",
        "alternativas": [
            "Percurso: 12 kms",
            "Carga: 20 kg",
            "Duração: 3 hs",
            "Distância: 8 Km",
            "Massa: 15 kgs"
        ],
        "correta": 1,
        "feedbackAcerto": "“kg” é símbolo padronizado; não recebe ponto próprio nem “s” de plural.",
        "feedbackErro": "Símbolos não variam no plural e sua caixa gráfica é convencional.",
        "analiseAlternativas": [
            "Incorreta. O correto é 12 km.",
            "Correta. “20 kg” está adequadamente formado; o ponto mostrado fecha a frase.",
            "Incorreta. O correto é 3 h.",
            "Incorreta. O símbolo é km, em minúsculas.",
            "Incorreta. O correto é 15 kg."
        ],
        "dicaBanca": "A banca explora a diferença entre ponto do símbolo e ponto final da frase.",
        "pegadinha": "Um símbolo pode aparecer antes de ponto final sem que o ponto passe a fazer parte dele.",
        "memorizar2026": "kg, km, h: invariáveis.",
        "fonte": "Padrão de símbolos trabalhado pela FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ABR-008",
        "numero": 8,
        "subtopico": "Símbolo químico",
        "dificuldade": "media",
        "pergunta": "Em uma questão de ciências, a prata é representada por “Ag”. Do ponto de vista das formas de abreviação, essa grafia",
        "alternativas": [
            "deve ser “Ag.”, porque toda forma reduzida leva ponto.",
            "deve ser “AG”, porque símbolos usam apenas maiúsculas.",
            "está correta: trata-se de símbolo químico e não se acrescenta ponto abreviativo.",
            "deve receber “s” quando houver mais de um átomo.",
            "é uma sigla institucional."
        ],
        "correta": 2,
        "feedbackAcerto": "“Ag” é símbolo químico e sua grafia convencional não inclui ponto.",
        "feedbackErro": "Símbolos químicos seguem convenções próprias de maiúsculas/minúsculas e não são abreviaturas comuns.",
        "analiseAlternativas": [
            "Incorreta. Símbolos não levam ponto abreviativo.",
            "Incorreta. A segunda letra permanece minúscula.",
            "Correta. Ag é a forma convencional.",
            "Incorreta. Símbolos não recebem plural.",
            "Incorreta. Não é nome institucional."
        ],
        "dicaBanca": "A oposição Ag x Ag. já apareceu literalmente em prova FGV.",
        "pegadinha": "Maiúsculas/minúsculas também fazem parte da convenção dos símbolos.",
        "memorizar2026": "Prata = Ag, sem ponto.",
        "fonte": "FGV/AL-BA 2014 — formas de abreviação."
    },
    {
        "id": "SEDUC-LP-ABR-009",
        "numero": 9,
        "subtopico": "Plural de siglas",
        "dificuldade": "alta",
        "pergunta": "Em um texto, o autor precisa indicar o plural de “ONG”. Entre as formas abaixo, a mais adequada é",
        "alternativas": [
            "ONG’s",
            "ONG.s",
            "ONGS",
            "ONGs",
            "ONG-es"
        ],
        "correta": 3,
        "feedbackAcerto": "Quando se marca o plural de siglas, admite-se o acréscimo de “s” minúsculo, sem apóstrofo: ONGs.",
        "feedbackErro": "Não se usa apóstrofo para pluralizar siglas em português.",
        "analiseAlternativas": [
            "Incorreta. O apóstrofo não é usado para esse plural.",
            "Incorreta. Não se acrescenta ponto antes do plural.",
            "Incorreta. O “s” de plural é minúsculo na convenção mais usada.",
            "Correta. ONGs.",
            "Incorreta. Não se cria terminação com hífen."
        ],
        "dicaBanca": "FGV já explora a forma gráfica das siglas, especialmente pontos, maiúsculas e plural.",
        "pegadinha": "Plural de sigla ≠ uso de apóstrofo.",
        "memorizar2026": "ONGs, TCCs, MPs — sem apóstrofo.",
        "fonte": "Convenção de plural de siglas; padrão FGV de grafia."
    },
    {
        "id": "SEDUC-LP-ABR-010",
        "numero": 10,
        "subtopico": "Títulos e tratamentos",
        "dificuldade": "media",
        "pergunta": "Em uma lista de contatos institucionais, qual forma exemplifica uma abreviatura de tratamento corretamente pontuada?",
        "alternativas": [
            "Prof",
            "Dra",
            "Sra",
            "Sr",
            "Prof."
        ],
        "correta": 4,
        "feedbackAcerto": "“Prof.” é abreviatura consagrada de “professor” e conserva o ponto abreviativo.",
        "feedbackErro": "Abreviaturas de títulos/tratamentos normalmente mantêm o ponto, como Sr., Sra., Dr., Dra. e Prof.",
        "analiseAlternativas": [
            "Incorreta. Falta o ponto abreviativo.",
            "Incorreta. Falta o ponto abreviativo.",
            "Incorreta. Falta o ponto abreviativo.",
            "Incorreta. Falta o ponto abreviativo.",
            "Correta. Há abreviatura e ponto."
        ],
        "dicaBanca": "A banca costuma opor abreviaturas pontuadas a siglas e símbolos sem ponto.",
        "pegadinha": "A presença de maiúscula não elimina o ponto abreviativo.",
        "memorizar2026": "Sr., Sra., Dr., Dra., Prof.",
        "fonte": "Edital SEDUC-PA 2026; convenções de abreviaturas."
    },
    {
        "id": "SEDUC-LP-ABR-011",
        "numero": 11,
        "subtopico": "Abreviaturas em textos administrativos",
        "dificuldade": "media",
        "pergunta": "No trecho “Consulte a pág. 12 do relatório”, a forma “pág.”",
        "alternativas": [
            "é abreviatura convencional e mantém o ponto abreviativo.",
            "é símbolo e deveria ser escrita sem ponto.",
            "é sigla formada por letras iniciais.",
            "é acrônimo pronunciável como palavra.",
            "é erro, pois palavras nunca podem ser abreviadas em textos formais."
        ],
        "correta": 0,
        "feedbackAcerto": "“pág.” é abreviatura convencional de “página” e pode ocorrer em referências e indicações concisas.",
        "feedbackErro": "Textos formais admitem abreviaturas consagradas; o problema é inventar formas não padronizadas.",
        "analiseAlternativas": [
            "Correta. Forma convencional.",
            "Incorreta. Não é símbolo de unidade.",
            "Incorreta. Não é sigla.",
            "Incorreta. Não é acrônimo.",
            "Incorreta. Abreviaturas padronizadas são usadas em textos formais."
        ],
        "dicaBanca": "FGV pode perguntar não só a categoria, mas a adequação da forma ao gênero textual.",
        "pegadinha": "Formalidade não significa proibição absoluta de abreviações.",
        "memorizar2026": "Use formas consagradas e adequadas ao gênero.",
        "fonte": "Edital SEDUC-PA 2026; padrão de redação administrativa."
    },
    {
        "id": "SEDUC-LP-ABR-012",
        "numero": 12,
        "subtopico": "Sigla sem pontos",
        "dificuldade": "media",
        "pergunta": "Em um texto sobre tributos, qual grafia é adequada para Imposto Predial e Territorial Urbano?",
        "alternativas": [
            "I.P.T.U.",
            "IPTU",
            "I-PTU",
            "Iptu.",
            "IPTU. como ponto obrigatório integrante da sigla"
        ],
        "correta": 1,
        "feedbackAcerto": "A sigla é grafada IPTU, sem pontos entre as letras.",
        "feedbackErro": "Siglas não recebem ponto entre suas letras; um ponto pode aparecer apenas como pontuação do período.",
        "analiseAlternativas": [
            "Incorreta. Não se pontuam as letras da sigla.",
            "Correta. IPTU.",
            "Incorreta. Não há hífen.",
            "Incorreta. Não é abreviatura com ponto.",
            "Incorreta. Ponto final pode encerrar a frase, mas não integra a sigla."
        ],
        "dicaBanca": "I.P.T.U. já apareceu como distrator em prova da FGV.",
        "pegadinha": "Não confunda pontuação da frase com grafia da sigla.",
        "memorizar2026": "IPTU, IBGE, INSS, FGV — sem pontos internos.",
        "fonte": "FGV/AL-BA 2014 — formas de abreviação."
    },
    {
        "id": "SEDUC-LP-ABR-013",
        "numero": 13,
        "subtopico": "Sigla x acrônimo",
        "dificuldade": "alta",
        "pergunta": "Na distinção tradicional adotada em questões sobre abreviação, “FGV” e “Unesco” exemplificam, respectivamente,",
        "alternativas": [
            "dois símbolos.",
            "duas abreviaturas com ponto.",
            "uma sigla soletrada e um acrônimo pronunciável como palavra.",
            "um acrônimo e um símbolo.",
            "uma abreviatura latina e uma sigla química."
        ],
        "correta": 2,
        "feedbackAcerto": "FGV é normalmente lida letra por letra; Unesco forma uma unidade pronunciável como palavra.",
        "feedbackErro": "A diferença focal é o modo de pronúncia da forma reduzida.",
        "analiseAlternativas": [
            "Incorreta. Não são símbolos.",
            "Incorreta. Não levam ponto abreviativo.",
            "Correta. Essa é a distinção pedida.",
            "Incorreta. FGV não é acrônimo nessa distinção.",
            "Incorreta. Nenhuma das duas categorias se aplica."
        ],
        "dicaBanca": "A banca pode tratar “acrônimo” como um tipo de sigla pronunciável.",
        "pegadinha": "Toda forma com iniciais não é necessariamente lida letra por letra.",
        "memorizar2026": "FGV → sigla soletrada | Unesco → acrônimo.",
        "fonte": "Padrão FGV de distinção sigla/acrônimo."
    },
    {
        "id": "SEDUC-LP-ABR-014",
        "numero": 14,
        "subtopico": "Ponto abreviativo e ponto final",
        "dificuldade": "alta",
        "pergunta": "Considere a frase: “Procure o prof.”. Sobre o ponto final, é correto afirmar que",
        "alternativas": [
            "deveriam aparecer dois pontos sucessivos: um da abreviatura e outro da frase.",
            "o ponto deveria ser retirado porque “prof” nunca leva ponto.",
            "a frase só poderia terminar com ponto de interrogação.",
            "o único ponto pode acumular a função de ponto abreviativo e de encerramento do período.",
            "abreviaturas não podem ocorrer no fim de período."
        ],
        "correta": 3,
        "feedbackAcerto": "Quando uma abreviatura pontuada encerra a frase, não se duplicam os pontos.",
        "feedbackErro": "O ponto da abreviatura já coincide com o ponto de encerramento do período.",
        "analiseAlternativas": [
            "Incorreta. Não se duplicam pontos.",
            "Incorreta. “prof.” é abreviatura pontuada.",
            "Incorreta. O tipo de frase não exige interrogação.",
            "Correta. Um só ponto cumpre ambas as funções.",
            "Incorreta. Podem ocorrer no final."
        ],
        "dicaBanca": "A pontuação pode aparecer combinada ao estudo das abreviaturas.",
        "pegadinha": "Não escreva “prof..”.",
        "memorizar2026": "Abreviatura no fim da frase: um único ponto.",
        "fonte": "Convenção ortográfica de abreviaturas; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ABR-015",
        "numero": 15,
        "subtopico": "Padronização",
        "dificuldade": "media",
        "pergunta": "Uma servidora cria, por conta própria, a forma “relat.” para “relatório” e passa a usá-la em documentos oficiais, embora o órgão não adote essa abreviatura. O principal problema é que",
        "alternativas": [
            "qualquer redução gráfica é proibida em português.",
            "abreviaturas precisam ter exatamente duas letras.",
            "abreviaturas só podem representar nomes próprios.",
            "formas reduzidas nunca aparecem em textos administrativos.",
            "abreviações devem seguir convenções e padronizações reconhecíveis, evitando criações arbitrárias em textos formais."
        ],
        "correta": 4,
        "feedbackAcerto": "A eficiência da abreviação depende do caráter convencional e reconhecível; em textos oficiais, padronização é especialmente importante.",
        "feedbackErro": "O problema não é abreviar em si, mas criar uma forma não consagrada que pode prejudicar clareza e uniformidade.",
        "analiseAlternativas": [
            "Incorreta. Abreviaturas existem e são produtivas.",
            "Incorreta. Não há esse limite fixo.",
            "Incorreta. Podem representar nomes comuns.",
            "Incorreta. São frequentes em usos padronizados.",
            "Correta. Convenção e clareza são essenciais."
        ],
        "dicaBanca": "FGV costuma tratar a norma como uso convencional, não como invenção livre do redator.",
        "pegadinha": "Economia gráfica não justifica qualquer redução.",
        "memorizar2026": "Abreviação eficaz = convencional + clara + adequada ao gênero.",
        "fonte": "Edital SEDUC-PA 2026; padrão de redação formal."
    },
    {
        "id": "SEDUC-LP-ABR-016",
        "numero": 16,
        "subtopico": "Adequação ao contexto",
        "dificuldade": "alta",
        "pergunta": "Em uma mensagem interna muito concisa, a equipe utiliza “pág.”, “art.” e “cap.” de forma padronizada e compreensível. Nesse contexto, o uso é adequado porque",
        "alternativas": [
            "as abreviaturas são consagradas e compatíveis com a finalidade de economia gráfica do texto.",
            "qualquer palavra pode ser reduzida livremente.",
            "o ponto transforma automaticamente uma redução em forma correta.",
            "textos formais exigem o máximo possível de abreviações.",
            "abreviaturas dispensam conhecimento compartilhado pelo leitor."
        ],
        "correta": 0,
        "feedbackAcerto": "Formas consagradas podem ser adequadas quando o gênero, o público e a finalidade favorecem concisão.",
        "feedbackErro": "A adequação depende de convenção, clareza e contexto, não da redução pela redução.",
        "analiseAlternativas": [
            "Correta. Há padronização e adequação contextual.",
            "Incorreta. Não se abrevia arbitrariamente.",
            "Incorreta. O ponto não legitima qualquer forma.",
            "Incorreta. Formalidade não exige excesso de abreviações.",
            "Incorreta. O leitor precisa reconhecer as formas."
        ],
        "dicaBanca": "Questões recentes da FGV tendem a contextualizar escolhas linguísticas.",
        "pegadinha": "Forma correta fora de contexto pode ser inadequada ao gênero.",
        "memorizar2026": "Convenção + contexto = adequação.",
        "fonte": "Edital SEDUC-PA 2026; padrão contextual recente da FGV."
    },
    {
        "id": "SEDUC-LP-ABR-017",
        "numero": 17,
        "subtopico": "Abreviaturas de meses",
        "dificuldade": "media",
        "pergunta": "Em uma referência em que se adotam abreviaturas convencionais de meses, qual forma é seguramente reconhecida como abreviatura de fevereiro?",
        "alternativas": [
            "fevr",
            "fev.",
            "FEVº",
            "fvr.",
            "fev"
        ],
        "correta": 1,
        "feedbackAcerto": "“fev.” é forma consagrada de abreviar fevereiro.",
        "feedbackErro": "Nas abreviaturas convencionais dos meses, o ponto abreviativo faz parte da forma.",
        "analiseAlternativas": [
            "Incorreta. Não é a forma convencional.",
            "Correta. “fev.”.",
            "Incorreta. Não se usa indicador ordinal.",
            "Incorreta. Não é a forma consagrada.",
            "Incorreta. Falta o ponto abreviativo na convenção trabalhada."
        ],
        "dicaBanca": "A FGV já cobrou abreviatura de mês, como “dez.” para dezembro.",
        "pegadinha": "Não confunda abreviatura de mês com símbolo.",
        "memorizar2026": "jan., fev., mar., abr., jun., jul., ago., set., out., nov., dez.",
        "fonte": "FGV — questão sobre “dez.”; manuais de estilo registram abreviaturas de meses."
    },
    {
        "id": "SEDUC-LP-ABR-018",
        "numero": 18,
        "subtopico": "Abreviatura latina — etc.",
        "dificuldade": "media",
        "pergunta": "Na enumeração “livros, cadernos, revistas etc.”, a forma “etc.”",
        "alternativas": [
            "é símbolo de unidade.",
            "é sigla institucional.",
            "é forma abreviada consagrada da expressão latina “et cetera”.",
            "é acrônimo brasileiro.",
            "não deve levar ponto em nenhuma situação."
        ],
        "correta": 2,
        "feedbackAcerto": "“etc.” é forma abreviada consagrada de “et cetera” e conserva o ponto.",
        "feedbackErro": "A forma não representa instituição nem unidade de medida.",
        "analiseAlternativas": [
            "Incorreta. Não é símbolo.",
            "Incorreta. Não é sigla.",
            "Correta. É abreviação latina consagrada.",
            "Incorreta. Não é acrônimo institucional.",
            "Incorreta. A grafia convencional inclui ponto."
        ],
        "dicaBanca": "As abreviaturas latinas aparecem dentro do tema “formas de abreviação” em questões da FGV.",
        "pegadinha": "Origem latina não transforma a expressão em sigla.",
        "memorizar2026": "etc. = et cetera.",
        "fonte": "FGV — questões sobre formas de abreviação e abreviaturas latinas."
    },
    {
        "id": "SEDUC-LP-ABR-019",
        "numero": 19,
        "subtopico": "Abreviatura latina — et al.",
        "dificuldade": "alta",
        "pergunta": "Em referências acadêmicas, “et al.” é empregado para indicar, de forma abreviada, a presença de",
        "alternativas": [
            "uma unidade de medida.",
            "uma instituição internacional.",
            "um título de tratamento.",
            "outros autores além daquele ou daqueles explicitamente mencionados, conforme a norma adotada.",
            "uma data incompleta."
        ],
        "correta": 3,
        "feedbackAcerto": "“et al.” deriva de expressão latina usada em referências para indicar outros autores, conforme a norma bibliográfica aplicável.",
        "feedbackErro": "É uma convenção acadêmica de abreviação, não sigla ou símbolo.",
        "analiseAlternativas": [
            "Incorreta. Não é unidade.",
            "Incorreta. Não é nome institucional.",
            "Incorreta. Não é tratamento.",
            "Correta. É uso acadêmico consagrado.",
            "Incorreta. Não se refere a data."
        ],
        "dicaBanca": "A banca pode inserir abreviações em gêneros acadêmicos e administrativos.",
        "pegadinha": "O ponto pertence à parte abreviada “al.”.",
        "memorizar2026": "et al. = e outros, em referências, conforme a norma adotada.",
        "fonte": "Formas consagradas de abreviação em textos acadêmicos; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ABR-020",
        "numero": 20,
        "subtopico": "Gênero em abreviaturas",
        "dificuldade": "media",
        "pergunta": "Em um convite formal, qual par apresenta abreviaturas convencionais que distinguem gênero?",
        "alternativas": [
            "km / kms",
            "IPTU / IPTUs",
            "Ag / Ags",
            "FGV / FGVS",
            "Dr. / Dra."
        ],
        "correta": 4,
        "feedbackAcerto": "“Dr.” e “Dra.” são abreviaturas convencionais de doutor e doutora.",
        "feedbackErro": "Símbolos e siglas não funcionam como flexão de tratamento; o par pedido é de abreviaturas nominais.",
        "analiseAlternativas": [
            "Incorreta. Símbolos não recebem plural.",
            "Incorreta. Não é par de gênero.",
            "Incorreta. Símbolo químico não flexiona.",
            "Incorreta. Não representa gênero.",
            "Correta. Dr. / Dra."
        ],
        "dicaBanca": "Abreviaturas de tratamento podem conservar distinções morfológicas do termo por extenso.",
        "pegadinha": "Não aplique regras de abreviatura nominal a símbolos.",
        "memorizar2026": "Dr. / Dra.; Sr. / Sra.",
        "fonte": "Convenções de títulos e tratamentos; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ABR-021",
        "numero": 21,
        "subtopico": "Leitura da forma reduzida",
        "dificuldade": "alta",
        "pergunta": "A diferença entre “FGV” e um acrônimo como “Anvisa” pode ser explicada, principalmente, pelo fato de que",
        "alternativas": [
            "FGV tende a ser lida pela sequência dos nomes das letras, enquanto Anvisa pode ser pronunciada como uma palavra.",
            "FGV leva ponto e Anvisa não.",
            "Anvisa é símbolo de unidade.",
            "FGV é abreviatura latina.",
            "Anvisa não deriva de nome institucional."
        ],
        "correta": 0,
        "feedbackAcerto": "Essa distinção de leitura é central na oposição tradicional entre sigla soletrada e acrônimo.",
        "feedbackErro": "Não é questão de ponto ou origem latina, mas de possibilidade de leitura como palavra.",
        "analiseAlternativas": [
            "Correta. É a diferença principal.",
            "Incorreta. FGV também não leva pontos internos.",
            "Incorreta. Anvisa não é unidade.",
            "Incorreta. FGV é sigla institucional.",
            "Incorreta. Anvisa deriva de uma denominação institucional."
        ],
        "dicaBanca": "Não se prenda apenas à aparência gráfica; observe também a pronúncia.",
        "pegadinha": "Sigla e acrônimo podem ter origem em letras iniciais, mas comportamento fonológico distinto.",
        "memorizar2026": "Soletrada = sigla; pronunciável = acrônimo.",
        "fonte": "Padrão FGV de distinção entre formas de abreviação."
    },
    {
        "id": "SEDUC-LP-ABR-022",
        "numero": 22,
        "subtopico": "Forma padronizada em contexto",
        "dificuldade": "media",
        "pergunta": "Um relatório registra: “A atividade ocorreu a 3 km da escola”. A forma “km” está adequada porque",
        "alternativas": [
            "toda abreviatura termina em consoante.",
            "é símbolo de unidade, cuja forma é invariável e não leva ponto abreviativo.",
            "é sigla de “quilômetro”.",
            "é acrônimo internacional.",
            "deveria ser “kms”, mas o contexto permite simplificação."
        ],
        "correta": 1,
        "feedbackAcerto": "“km” é símbolo padronizado, não sigla nem abreviatura flexionável.",
        "feedbackErro": "Unidades de medida são representadas por símbolos convencionais e invariáveis.",
        "analiseAlternativas": [
            "Incorreta. Não é regra de abreviatura.",
            "Correta. Essa é a natureza de “km”.",
            "Incorreta. Não é sigla.",
            "Incorreta. Não é acrônimo.",
            "Incorreta. Não recebe “s”."
        ],
        "dicaBanca": "A FGV explora a classificação da forma, não só a grafia.",
        "pegadinha": "km ≠ “abreviação comum” de quilômetro.",
        "memorizar2026": "Símbolo de unidade = forma fixa.",
        "fonte": "FGV — formas de abreviação; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ABR-023",
        "numero": 23,
        "subtopico": "Caixa gráfica dos símbolos",
        "dificuldade": "alta",
        "pergunta": "Assinale a opção em que o símbolo de quilômetro está corretamente grafado.",
        "alternativas": [
            "5 KM",
            "5 Km",
            "5 km",
            "5 kM",
            "5 kms"
        ],
        "correta": 2,
        "feedbackAcerto": "O símbolo padronizado é “km”, com ambas as letras minúsculas e sem plural.",
        "feedbackErro": "A forma gráfica do símbolo é convencional e sensível ao uso de maiúsculas/minúsculas.",
        "analiseAlternativas": [
            "Incorreta. Ambas maiúsculas não correspondem ao símbolo.",
            "Incorreta. O K não é maiúsculo.",
            "Correta. 5 km.",
            "Incorreta. M não é maiúsculo.",
            "Incorreta. Não há plural em “s”."
        ],
        "dicaBanca": "Em símbolos, a caixa gráfica pode ser parte da própria convenção.",
        "pegadinha": "Não “normalize” símbolos como se fossem siglas.",
        "memorizar2026": "quilômetro = km.",
        "fonte": "Convenção internacional de unidades; padrão FGV de símbolos."
    },
    {
        "id": "SEDUC-LP-ABR-024",
        "numero": 24,
        "subtopico": "Símbolo no fim da frase",
        "dificuldade": "alta",
        "pergunta": "Na frase “O percurso total foi de 8 km.”, o ponto depois de “km”",
        "alternativas": [
            "é obrigatório porque “km.” é a forma do símbolo.",
            "marca plural de quilômetros.",
            "transforma “km” em abreviatura.",
            "é apenas o ponto final do período; o símbolo em si continua sendo “km”, sem ponto.",
            "torna a frase inadequada."
        ],
        "correta": 3,
        "feedbackAcerto": "O símbolo não leva ponto abreviativo; o ponto observado encerra a frase.",
        "feedbackErro": "Diferencie grafia da forma reduzida de pontuação sintática do período.",
        "analiseAlternativas": [
            "Incorreta. O símbolo é km.",
            "Incorreta. Plural não é marcado por ponto.",
            "Incorreta. A categoria não muda.",
            "Correta. O ponto pertence à frase.",
            "Incorreta. A frase está correta."
        ],
        "dicaBanca": "É uma boa pegadinha para combinar abreviação com pontuação.",
        "pegadinha": "“km.” pode ser correto no fim da frase, mas o ponto não integra o símbolo.",
        "memorizar2026": "Símbolo sem ponto próprio; frase pode terminar com ponto.",
        "fonte": "Convenções de símbolos e pontuação; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ABR-025",
        "numero": 25,
        "subtopico": "Caso integrador",
        "dificuldade": "alta",
        "pergunta": "Uma nota administrativa contém: “Consulte a pág. 8. A reunião será às 10 h. O percurso é de 2 km. O IPTU será discutido com representantes de ONGs e da Anvisa.” A análise correta é",
        "alternativas": [
            "“pág.” e “km” são siglas, enquanto IPTU é símbolo.",
            "“10 h” está errada porque deveria ser “10 hs.”.",
            "“ONGs” deveria usar apóstrofo: ONG’s.",
            "“IPTU” deveria receber pontos entre as letras.",
            "o texto combina adequadamente abreviatura (“pág.”), símbolos (“h”, “km”), sigla (“IPTU”), plural de sigla (“ONGs”) e acrônimo (“Anvisa”)."
        ],
        "correta": 4,
        "feedbackAcerto": "A alternativa identifica corretamente cada forma reduzida e sua convenção gráfica.",
        "feedbackErro": "Classifique item por item antes de avaliar a grafia: abreviatura, símbolo, sigla, plural de sigla e acrônimo.",
        "analiseAlternativas": [
            "Incorreta. “pág.” é abreviatura e km é símbolo.",
            "Incorreta. O símbolo h não recebe “s”.",
            "Incorreta. O plural não usa apóstrofo.",
            "Incorreta. Siglas não recebem pontos internos.",
            "Correta. A classificação é completa e adequada."
        ],
        "dicaBanca": "Questões integradoras são úteis porque a FGV costuma aproximar categorias parecidas em uma mesma alternativa.",
        "pegadinha": "O mesmo texto pode conter várias formas de abreviação com regras diferentes.",
        "memorizar2026": "pág. | h | km | IPTU | ONGs | Anvisa.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de formas de abreviação."
    }
];

    window.seducLinguaPortuguesaFormasAbreviacao2026 = banco;
})();
