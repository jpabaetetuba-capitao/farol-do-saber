/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 19: Semântica
   Sentido próprio e figurado; antônimos, sinônimos,
   parônimos e hiperônimos; polissemia e ambiguidade.
   25 questões autorais calibradas pelo edital e pelo padrão FGV.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-LP-SEM-001",
        "numero": 1,
        "subtopico": "Sentido próprio x figurado",
        "dificuldade": "media",
        "pergunta": "Na frase “Depois da notícia, o diretor ficou com um peso nos ombros”, a expressão “peso nos ombros” foi empregada",
        "alternativas": [
            "em sentido figurado, indicando responsabilidade ou preocupação.",
            "em sentido próprio, indicando necessariamente um objeto físico sobre o corpo.",
            "como sinônimo exato de dor muscular.",
            "como parônimo de “preocupação”.",
            "como hiperônimo de “ombro”."
        ],
        "correta": 0,
        "feedbackAcerto": "O contexto mostra emprego figurado: “peso nos ombros” representa responsabilidade, tensão ou preocupação.",
        "feedbackErro": "Pergunte se o significado é literal/concreto ou se a expressão transfere uma ideia para representar outra.",
        "analiseAlternativas": [
            "Correta. A expressão constrói sentido figurado.",
            "Incorreta. Nada indica carga física real.",
            "Incorreta. Não há equivalência necessária com dor muscular.",
            "Incorreta. Parônimos são palavras semelhantes na forma, mas diferentes no sentido.",
            "Incorreta. Não há relação de hiperônimo."
        ],
        "dicaBanca": "A FGV costuma cobrar o sentido produzido no contexto, não a classificação isolada da expressão.",
        "pegadinha": "Palavra concreta pode assumir valor figurado sem perder sua forma.",
        "memorizar2026": "Sentido próprio = literal; figurado = sentido construído por associação/contexto.",
        "fonte": "Edital SEDUC-PA 2026 — Semântica: sentido próprio e figurado."
    },
    {
        "id": "SEDUC-LP-SEM-002",
        "numero": 2,
        "subtopico": "Sinonímia contextual",
        "dificuldade": "alta",
        "pergunta": "No período “A pesquisadora apresentou uma análise criteriosa dos dados”, a substituição que preserva melhor o sentido de “criteriosa” é",
        "alternativas": [
            "apressada.",
            "cuidadosa.",
            "ocasional.",
            "superficial.",
            "improvisada."
        ],
        "correta": 1,
        "feedbackAcerto": "“Cuidadosa” preserva, nesse contexto, o valor de análise feita com atenção, método e critério.",
        "feedbackErro": "Sinônimos precisam ser avaliados dentro do enunciado. Não basta haver proximidade genérica entre palavras.",
        "analiseAlternativas": [
            "Incorreta. “Apressada” se opõe ao cuidado sugerido.",
            "Correta. Mantém o núcleo semântico contextual.",
            "Incorreta. “Ocasional” trata de frequência/circunstância.",
            "Incorreta. “Superficial” contraria a ideia de rigor.",
            "Incorreta. “Improvisada” não preserva o valor."
        ],
        "dicaBanca": "Em prova para professor, a FGV já pediu sinônimos que mantivessem o sentido do texto, não meras equivalências de dicionário.",
        "pegadinha": "Sinônimo contextual ≠ palavra que pode substituir outra em qualquer frase.",
        "memorizar2026": "Sinonímia é sempre sensível ao contexto.",
        "fonte": "FGV/São Lourenço da Mata 2024 — Professor de Língua Portuguesa, cobrança de sinônimo contextual; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-SEM-003",
        "numero": 3,
        "subtopico": "Antonímia contextual",
        "dificuldade": "media",
        "pergunta": "Em “A proposta foi considerada viável”, o antônimo mais adequado de “viável”, nesse contexto, é",
        "alternativas": [
            "rápida.",
            "complexa.",
            "inviável.",
            "recente.",
            "provisória."
        ],
        "correta": 2,
        "feedbackAcerto": "“Inviável” estabelece oposição direta ao valor de possibilidade/execução expresso por “viável”.",
        "feedbackErro": "O antônimo precisa contrariar o sentido relevante da palavra na frase.",
        "analiseAlternativas": [
            "Incorreta. Rapidez não se opõe a viabilidade.",
            "Incorreta. Algo complexo pode ser viável.",
            "Correta. É a oposição semântica pertinente.",
            "Incorreta. Tempo não é o eixo semântico em questão.",
            "Incorreta. Provisoriedade não é oposição a viabilidade."
        ],
        "dicaBanca": "A FGV pode apresentar palavras do mesmo campo temático que não são antônimas.",
        "pegadinha": "Diferença de sentido não significa oposição.",
        "memorizar2026": "Antônimo = palavra que estabelece oposição de sentido no contexto.",
        "fonte": "Edital SEDUC-PA 2026 — antônimos."
    },
    {
        "id": "SEDUC-LP-SEM-004",
        "numero": 4,
        "subtopico": "Parônimos — descrição x discrição",
        "dificuldade": "media",
        "pergunta": "Assinale a frase em que o parônimo foi empregado de modo adequado.",
        "alternativas": [
            "A descrição do servidor durante a reunião foi elogiada por todos.",
            "O relatório apresentou uma discrição detalhada dos fatos.",
            "O professor agiu com descrição para não expor o estudante.",
            "A testemunha fez uma descrição objetiva do ocorrido.",
            "A discrição do acidente ocupou três páginas do relatório."
        ],
        "correta": 3,
        "feedbackAcerto": "“Descrição” significa ato de descrever; “discrição” significa reserva, prudência. A alternativa correta usa “descrição” no sentido de relato.",
        "feedbackErro": "Parônimos têm forma semelhante, mas sentidos distintos. Trocar uma letra pode alterar totalmente a frase.",
        "analiseAlternativas": [
            "Incorreta. O contexto pede “discrição”.",
            "Incorreta. O contexto pede “descrição”.",
            "Incorreta. O contexto pede “discrição”.",
            "Correta. Há relato/descrição do ocorrido.",
            "Incorreta. O contexto pede “descrição”."
        ],
        "dicaBanca": "A FGV usa parônimos para testar precisão vocabular e adequação semântica.",
        "pegadinha": "Descrição ≠ discrição.",
        "memorizar2026": "descrição = relato; discrição = reserva/prudência.",
        "fonte": "Edital SEDUC-PA 2026 — parônimos."
    },
    {
        "id": "SEDUC-LP-SEM-005",
        "numero": 5,
        "subtopico": "Hiperônimo",
        "dificuldade": "media",
        "pergunta": "Leia: “Os mosquitos invadiram a sala. Os insetos incomodaram os estudantes durante toda a aula.” A palavra “insetos” funciona como",
        "alternativas": [
            "sinônimo perfeito de “sala”.",
            "antônimo de “mosquitos”.",
            "parônimo de “estudantes”.",
            "hipônimo de “mosquitos”.",
            "hiperônimo de “mosquitos”, pois apresenta sentido mais geral."
        ],
        "correta": 4,
        "feedbackAcerto": "“Insetos” é termo mais geral que engloba “mosquitos”, funcionando também como recurso de retomada coesiva.",
        "feedbackErro": "Hiperônimo tem sentido mais abrangente; hipônimo é o termo mais específico.",
        "analiseAlternativas": [
            "Incorreta. Não há sinonímia.",
            "Incorreta. Não há oposição.",
            "Incorreta. Não há semelhança formal relevante.",
            "Incorreta. A relação está invertida.",
            "Correta. “Insetos” engloba “mosquitos”."
        ],
        "dicaBanca": "A FGV já cobrou hiperônimo como estratégia de retomada para evitar repetição.",
        "pegadinha": "Mais geral = hiperônimo; mais específico = hipônimo.",
        "memorizar2026": "inseto > mosquito; animal > cão; fruta > manga.",
        "fonte": "FGV/SME-SP — Professor, cobrança de hiperônimo em retomada coesiva; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-SEM-006",
        "numero": 6,
        "subtopico": "Polissemia",
        "dificuldade": "media",
        "pergunta": "Nas frases “Sentei no banco da praça” e “Fui ao banco resolver o pagamento”, a palavra “banco” exemplifica",
        "alternativas": [
            "polissemia, pois a mesma forma lexical apresenta sentidos distintos relacionados ao uso e reconhecidos pelo contexto.",
            "antonímia, porque os sentidos são opostos.",
            "paronímia, porque há duas palavras de grafias semelhantes.",
            "hiperonímia, porque um sentido engloba necessariamente o outro.",
            "sinonímia, porque as duas ocorrências significam exatamente a mesma coisa."
        ],
        "correta": 0,
        "feedbackAcerto": "A mesma forma “banco” possui mais de uma acepção, e o contexto seleciona a interpretação pertinente.",
        "feedbackErro": "Polissemia ocorre quando uma mesma palavra pode assumir diferentes sentidos.",
        "analiseAlternativas": [
            "Correta. É um caso clássico de polissemia.",
            "Incorreta. Os sentidos não são antônimos.",
            "Incorreta. A forma gráfica é a mesma.",
            "Incorreta. Não há relação gênero-espécie.",
            "Incorreta. Os sentidos são diferentes."
        ],
        "dicaBanca": "A FGV já explorou polissemia em jogos de palavras e humor.",
        "pegadinha": "Polissemia não é ambiguidade obrigatória: o contexto geralmente seleciona um sentido.",
        "memorizar2026": "Polissemia = uma palavra, vários sentidos possíveis.",
        "fonte": "FGV/SEAD-AP — Professor de Língua Portuguesa, questão sobre polissemia e jogo de palavras; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-SEM-007",
        "numero": 7,
        "subtopico": "Ambiguidade lexical",
        "dificuldade": "alta",
        "pergunta": "A frase “Ela viu a manga sobre a mesa” é potencialmente ambígua porque",
        "alternativas": [
            "não possui verbo.",
            "a palavra “manga” pode designar, conforme o contexto, uma fruta ou parte de uma peça de roupa.",
            "o sujeito é indeterminado.",
            "a palavra “mesa” é um hiperônimo.",
            "há obrigatoriamente sentido figurado."
        ],
        "correta": 1,
        "feedbackAcerto": "A ambiguidade decorre da polissemia/homonímia lexical de “manga” quando o contexto não é suficiente para selecionar uma leitura.",
        "feedbackErro": "Procure o elemento que admite mais de um sentido plausível dentro da frase.",
        "analiseAlternativas": [
            "Incorreta. “viu” é verbo.",
            "Correta. A palavra admite duas leituras plausíveis.",
            "Incorreta. O sujeito é “ela”.",
            "Incorreta. Não há relação de hiperônimo relevante.",
            "Incorreta. Ambas as leituras podem ser literais."
        ],
        "dicaBanca": "Ambiguidade lexical é uma das formas de ambiguidade exploradas em questões de semântica.",
        "pegadinha": "Polissemia é propriedade lexical; ambiguidade é efeito interpretativo em um enunciado.",
        "memorizar2026": "Ambiguidade ocorre quando duas ou mais leituras permanecem possíveis.",
        "fonte": "Edital SEDUC-PA 2026 — polissemia e ambiguidade."
    },
    {
        "id": "SEDUC-LP-SEM-008",
        "numero": 8,
        "subtopico": "Ambiguidade estrutural",
        "dificuldade": "alta",
        "pergunta": "Na frase “O professor encontrou o aluno com o telescópio”, a ambiguidade decorre do fato de",
        "alternativas": [
            "“professor” e “aluno” serem sinônimos.",
            "“telescópio” ser uma palavra figurada.",
            "a expressão “com o telescópio” poder ligar-se ao professor ou ao aluno, gerando duas estruturas interpretativas.",
            "o verbo “encontrar” não possuir sentido.",
            "o artigo “o” ser indefinido."
        ],
        "correta": 2,
        "feedbackAcerto": "A expressão preposicionada pode indicar o instrumento usado pelo professor ou caracterizar o aluno encontrado.",
        "feedbackErro": "A dúvida não está no significado isolado das palavras, mas em como os termos se relacionam estruturalmente.",
        "analiseAlternativas": [
            "Incorreta. Os substantivos não são sinônimos.",
            "Incorreta. “telescópio” mantém sentido literal.",
            "Correta. Há duas possibilidades de ligação sintática.",
            "Incorreta. O verbo é plenamente compreensível.",
            "Incorreta. “o” é artigo definido."
        ],
        "dicaBanca": "Em provas para professor, a FGV cobra diretamente identificação de frases ambíguas.",
        "pegadinha": "Nem toda ambiguidade é lexical; muitas resultam da estrutura da frase.",
        "memorizar2026": "Ambiguidade estrutural = mais de uma relação sintática possível.",
        "fonte": "FGV/SEEC-RN 2025 — Professor de Língua Portuguesa, cobrança de ambiguidade; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-SEM-009",
        "numero": 9,
        "subtopico": "Sentido figurado — metáfora",
        "dificuldade": "media",
        "pergunta": "Em “Aquela professora é uma luz para os estudantes”, o substantivo “luz” expressa",
        "alternativas": [
            "um fenômeno físico medido em laboratório.",
            "uma relação de antonímia.",
            "um hiperônimo de “professora”.",
            "sentido figurado associado a orientação, inspiração ou esclarecimento.",
            "um parônimo de “estudantes”."
        ],
        "correta": 3,
        "feedbackAcerto": "O termo “luz” transfere características simbólicas de orientação e clareza para caracterizar a professora.",
        "feedbackErro": "O contexto não descreve iluminação física; constrói uma associação figurada.",
        "analiseAlternativas": [
            "Incorreta. Não é o sentido literal.",
            "Incorreta. Não há oposição.",
            "Incorreta. Não há relação gênero-espécie.",
            "Correta. Trata-se de sentido figurado/metafórico.",
            "Incorreta. Não há paronímia."
        ],
        "dicaBanca": "Em sentido figurado, procure a relação criada entre campos semânticos diferentes.",
        "pegadinha": "A metáfora pode aparecer em linguagem cotidiana, não apenas literária.",
        "memorizar2026": "Figurado = associação contextual que ultrapassa o sentido literal.",
        "fonte": "Edital SEDUC-PA 2026 — sentido figurado."
    },
    {
        "id": "SEDUC-LP-SEM-010",
        "numero": 10,
        "subtopico": "Sinonímia — adequação contextual",
        "dificuldade": "alta",
        "pergunta": "Na frase “O diretor ficará grato se o relatório for entregue hoje”, a substituição por “agradecido”",
        "alternativas": [
            "é impossível porque as palavras pertencem a classes diferentes.",
            "cria necessariamente sentido oposto.",
            "transforma a frase em ambígua.",
            "é inadequada porque “grato” só pode significar agradável.",
            "pode preservar o sentido de reconhecimento/agradecimento nesse contexto."
        ],
        "correta": 4,
        "feedbackAcerto": "Nesse uso, “grato” e “agradecido” podem funcionar como equivalentes contextuais.",
        "feedbackErro": "A FGV já explorou pares próximos como “grato/agradecido” e exige avaliar a adequação dentro da frase.",
        "analiseAlternativas": [
            "Incorreta. Ambos podem funcionar como adjetivos.",
            "Incorreta. Não são antônimos.",
            "Incorreta. A substituição não gera necessariamente dupla leitura.",
            "Incorreta. “grato” também pode significar agradecido.",
            "Correta. Há sinonímia contextual possível."
        ],
        "dicaBanca": "A banca pode oferecer dois vocábulos possíveis e pedir qual é mais adequado à situação comunicativa.",
        "pegadinha": "Uma palavra polissêmica pode ter um sentido em que é sinônima de outra e outro sentido em que não é.",
        "memorizar2026": "Substituição semântica deve preservar o sentido do trecho.",
        "fonte": "FGV/SEEC-RN 2025 — Professor de Língua Portuguesa, escolha contextual entre vocábulos; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-SEM-011",
        "numero": 11,
        "subtopico": "Antonímia — oposição no contexto",
        "dificuldade": "media",
        "pergunta": "No enunciado “A explicação foi clara, não obscura”, as palavras “clara” e “obscura” estabelecem",
        "alternativas": [
            "relação de antonímia no eixo da compreensibilidade.",
            "relação de paronímia.",
            "relação de hiperonímia.",
            "polissemia obrigatória.",
            "sinonímia perfeita."
        ],
        "correta": 0,
        "feedbackAcerto": "No contexto, “clara” significa compreensível e “obscura”, pouco compreensível, formando oposição semântica.",
        "feedbackErro": "A oposição deve ser interpretada pelo sentido assumido pelas palavras na frase.",
        "analiseAlternativas": [
            "Correta. Há oposição contextual.",
            "Incorreta. As palavras não são semelhantes na forma.",
            "Incorreta. Nenhuma engloba semanticamente a outra.",
            "Incorreta. Não há multiplicidade de sentidos simultâneos.",
            "Incorreta. Os sentidos se opõem."
        ],
        "dicaBanca": "Antônimos também dependem da acepção ativada no contexto.",
        "pegadinha": "“claro” pode se opor a “escuro” ou “obscuro” conforme o sentido físico ou figurado.",
        "memorizar2026": "A antonímia acompanha o sentido contextual da palavra.",
        "fonte": "Edital SEDUC-PA 2026 — antônimos e sentido contextual."
    },
    {
        "id": "SEDUC-LP-SEM-012",
        "numero": 12,
        "subtopico": "Parônimos — ratificar x retificar",
        "dificuldade": "media",
        "pergunta": "Assinale a frase em que “ratificar” ou “retificar” está empregado corretamente.",
        "alternativas": [
            "O setor decidiu ratificar o erro de digitação, corrigindo-o.",
            "O candidato precisou retificar os dados incorretos de sua inscrição.",
            "O conselho retificou a decisão anterior, confirmando-a integralmente.",
            "O servidor ratificou o endereço errado, substituindo-o pelo correto.",
            "A ata foi ratificada porque continha três erros que precisavam ser corrigidos."
        ],
        "correta": 1,
        "feedbackAcerto": "“Retificar” significa corrigir; “ratificar” significa confirmar, validar.",
        "feedbackErro": "Associe: ratificar = confirmar; retificar = corrigir.",
        "analiseAlternativas": [
            "Incorreta. Corrigir exige “retificar”.",
            "Correta. Os dados incorretos são corrigidos.",
            "Incorreta. Confirmar integralmente seria “ratificar”.",
            "Incorreta. Substituir o errado pelo correto é retificar.",
            "Incorreta. Erros a corrigir pedem retificação."
        ],
        "dicaBanca": "Parônimos são uma fonte clássica de erro por semelhança gráfica/sonora.",
        "pegadinha": "Ratificar ≠ retificar.",
        "memorizar2026": "ratificar = confirmar | retificar = corrigir.",
        "fonte": "Edital SEDUC-PA 2026 — parônimos."
    },
    {
        "id": "SEDUC-LP-SEM-013",
        "numero": 13,
        "subtopico": "Hiperônimo como coesão",
        "dificuldade": "alta",
        "pergunta": "Leia: “A escola comprou tablets, notebooks e projetores. Esses equipamentos serão usados em atividades pedagógicas.” O termo “equipamentos”",
        "alternativas": [
            "é antônimo dos três termos anteriores.",
            "é parônimo de “projetores”.",
            "funciona como hiperônimo que retoma de modo mais geral os itens mencionados.",
            "é hipônimo de “tablets”.",
            "elimina a relação coesiva com a frase anterior."
        ],
        "correta": 2,
        "feedbackAcerto": "“Equipamentos” apresenta sentido mais geral e engloba os itens específicos citados, contribuindo para a coesão lexical.",
        "feedbackErro": "Procure a palavra de sentido mais abrangente que reúne os elementos anteriores.",
        "analiseAlternativas": [
            "Incorreta. Não há oposição.",
            "Incorreta. Não há paronímia.",
            "Correta. É hiperônimo e recurso coesivo.",
            "Incorreta. A relação está invertida.",
            "Incorreta. A retomada fortalece a coesão."
        ],
        "dicaBanca": "A FGV já cobrou hiperônimo exatamente como estratégia para evitar repetição.",
        "pegadinha": "Hiperônimo não é sinônimo exato; é termo semanticamente mais geral.",
        "memorizar2026": "Hiperônimo pode retomar vários hipônimos em bloco.",
        "fonte": "FGV/SME-SP e FGV/Canaã dos Carajás — questões de hiperônimo em retomada coesiva; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-SEM-014",
        "numero": 14,
        "subtopico": "Polissemia e humor",
        "dificuldade": "alta",
        "pergunta": "Em uma tirinha, um personagem diz “Estou sem cabeça para estudar” e outro responde “Então procure onde você a deixou”. O humor decorre",
        "alternativas": [
            "de uma relação de hiperonímia.",
            "de uma oposição entre sinônimos.",
            "de um erro ortográfico.",
            "da exploração de dois sentidos de “cabeça”: capacidade/disposição mental e parte física do corpo.",
            "da ausência total de referente."
        ],
        "correta": 3,
        "feedbackAcerto": "O segundo personagem lê literalmente uma expressão figurada, explorando a polissemia para produzir humor.",
        "feedbackErro": "A graça nasce da passagem entre uma acepção figurada e outra literal da mesma palavra.",
        "analiseAlternativas": [
            "Incorreta. Não há gênero-espécie.",
            "Incorreta. Não há sinonímia.",
            "Incorreta. A ortografia não é relevante.",
            "Correta. O jogo mobiliza duas acepções.",
            "Incorreta. Os referentes são recuperáveis."
        ],
        "dicaBanca": "A FGV já cobrou explicitamente jogos de palavras apoiados em polissemia.",
        "pegadinha": "Humor semântico costuma surgir quando o texto força a coexistência ou troca entre sentidos.",
        "memorizar2026": "Polissemia pode sustentar humor, publicidade, ironia e trocadilho.",
        "fonte": "FGV/SEAD-AP — Professor de Língua Portuguesa, questão sobre polissemia em jogo de palavras."
    },
    {
        "id": "SEDUC-LP-SEM-015",
        "numero": 15,
        "subtopico": "Ambiguidade referencial",
        "dificuldade": "alta",
        "pergunta": "Na frase “Maria falou com Ana sobre o projeto quando ela saiu da escola”, a ambiguidade decorre principalmente",
        "alternativas": [
            "de “projeto” possuir vários antônimos.",
            "de “escola” ser termo figurado.",
            "de “falou” ser parônimo de outra palavra.",
            "de “quando” ser um hiperônimo.",
            "da possibilidade de o pronome “ela” retomar Maria ou Ana."
        ],
        "correta": 4,
        "feedbackAcerto": "O pronome possui dois antecedentes possíveis, produzindo ambiguidade referencial.",
        "feedbackErro": "Pergunte a quem o pronome pode se referir. Há mais de uma candidata possível.",
        "analiseAlternativas": [
            "Incorreta. Antônimos não geram o problema.",
            "Incorreta. “escola” está em sentido literal.",
            "Incorreta. Não há paronímia.",
            "Incorreta. “quando” é conectivo temporal.",
            "Correta. O referente pronominal é duvidoso."
        ],
        "dicaBanca": "Ambiguidade pode surgir de pronome com antecedente incerto, algo frequente em itens FGV.",
        "pegadinha": "Frase gramaticalmente correta pode ser semanticamente ambígua.",
        "memorizar2026": "Ambiguidade referencial = mais de um antecedente possível.",
        "fonte": "FGV/SME-SP — Professor, cobrança de ambiguidade; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-SEM-016",
        "numero": 16,
        "subtopico": "Sentido figurado em expressão idiomática",
        "dificuldade": "media",
        "pergunta": "Em “Depois de semanas de negociação, a direção finalmente deu o braço a torcer”, a expressão destacada significa",
        "alternativas": [
            "ceder ou admitir uma posição contrária à inicialmente sustentada.",
            "sofrer uma lesão física no braço.",
            "demonstrar superioridade hierárquica.",
            "encerrar qualquer comunicação.",
            "fazer um gesto de despedida."
        ],
        "correta": 0,
        "feedbackAcerto": "“Dar o braço a torcer” é expressão idiomática figurada com valor de ceder, reconhecer ou aceitar algo.",
        "feedbackErro": "A leitura literal não se ajusta ao contexto de negociação.",
        "analiseAlternativas": [
            "Correta. Preserva o sentido figurado da expressão.",
            "Incorreta. É leitura literal inadequada.",
            "Incorreta. Não há valor hierárquico.",
            "Incorreta. A negociação chegou a uma mudança de posição.",
            "Incorreta. Não há despedida."
        ],
        "dicaBanca": "Expressões idiomáticas são terreno típico para oposição entre sentido próprio e figurado.",
        "pegadinha": "O sentido global da expressão pode não corresponder à soma literal das palavras.",
        "memorizar2026": "Expressão idiomática = sentido convencional construído pelo conjunto.",
        "fonte": "Edital SEDUC-PA 2026 — sentido figurado."
    },
    {
        "id": "SEDUC-LP-SEM-017",
        "numero": 17,
        "subtopico": "Sentido contextual de palavra polissêmica",
        "dificuldade": "alta",
        "pergunta": "Na frase “O clima da reunião ficou pesado após a discussão”, a palavra “pesado” significa, no contexto,",
        "alternativas": [
            "de grande massa física.",
            "tenso ou desagradável.",
            "muito lento por definição.",
            "de alta densidade material.",
            "obrigatoriamente cansativo."
        ],
        "correta": 1,
        "feedbackAcerto": "O contexto social de reunião e discussão seleciona o sentido figurado de ambiente tenso/desagradável.",
        "feedbackErro": "Use as pistas do enunciado para escolher a acepção pertinente da palavra.",
        "analiseAlternativas": [
            "Incorreta. É sentido físico que não se aplica ao contexto.",
            "Correta. É a interpretação contextual.",
            "Incorreta. Lentidão não é o sentido necessário.",
            "Incorreta. Não se trata de matéria física.",
            "Incorreta. Pode ser cansativo, mas não é o significado preciso."
        ],
        "dicaBanca": "A FGV valoriza a escolha da acepção que melhor se ajusta ao texto.",
        "pegadinha": "Polissemia exige seleção contextual da acepção.",
        "memorizar2026": "Palavra polissêmica + contexto = sentido selecionado.",
        "fonte": "Edital SEDUC-PA 2026 — polissemia."
    },
    {
        "id": "SEDUC-LP-SEM-018",
        "numero": 18,
        "subtopico": "Ambiguidade por posição do adjetivo",
        "dificuldade": "alta",
        "pergunta": "A frase “O diretor conversou com o professor novo” pode gerar dúvida, dependendo do contexto, porque “novo” pode ser interpretado como",
        "alternativas": [
            "sinônimo de “diretor” e de “professor” ao mesmo tempo.",
            "hiperônimo de “professor”.",
            "característica relativa à idade ou à condição de recém-chegado do professor.",
            "parônimo de “professor”.",
            "antônimo obrigatório de “diretor”."
        ],
        "correta": 2,
        "feedbackAcerto": "“Novo” é polissêmico: pode significar jovem ou recente/recém-chegado, e o contexto precisa selecionar a leitura.",
        "feedbackErro": "A dúvida não está em quem recebe o adjetivo, mas na acepção de “novo”.",
        "analiseAlternativas": [
            "Incorreta. Não há sinonímia.",
            "Incorreta. Não há relação de hiperônimo.",
            "Correta. As duas acepções são plausíveis.",
            "Incorreta. As palavras não são parônimas.",
            "Incorreta. Não há oposição necessária."
        ],
        "dicaBanca": "Ambiguidade pode nascer da polissemia mesmo quando a estrutura sintática é clara.",
        "pegadinha": "Uma única palavra pode abrir leituras diferentes sem haver erro gramatical.",
        "memorizar2026": "Ambiguidade lexical = duas acepções plausíveis no mesmo contexto.",
        "fonte": "Edital SEDUC-PA 2026 — polissemia e ambiguidade."
    },
    {
        "id": "SEDUC-LP-SEM-019",
        "numero": 19,
        "subtopico": "Sinonímia — limites",
        "dificuldade": "alta",
        "pergunta": "Sobre sinônimos, assinale a afirmativa correta.",
        "alternativas": [
            "Sinônimos são sempre intercambiáveis em qualquer contexto, sem mudança de registro ou sentido.",
            "Palavras sinônimas precisam ter a mesma origem histórica.",
            "Sinonímia só existe entre substantivos.",
            "Palavras podem ser sinônimas em determinado contexto e não em outro, porque registro, combinação e nuance interferem no sentido.",
            "Todo sinônimo é também um hiperônimo."
        ],
        "correta": 3,
        "feedbackAcerto": "A sinonímia absoluta é rara; contexto, registro e combinações lexicais limitam a substituição.",
        "feedbackErro": "A prova costuma trabalhar justamente a manutenção do sentido no contexto.",
        "analiseAlternativas": [
            "Incorreta. A substituição pode alterar nuance ou adequação.",
            "Incorreta. Origem histórica não define sinonímia.",
            "Incorreta. Outras classes podem apresentar proximidade de sentido.",
            "Correta. É a visão contextual adequada.",
            "Incorreta. Sinonímia e hiperonímia são relações distintas."
        ],
        "dicaBanca": "Quando a questão disser “sem prejuízo do sentido”, teste a palavra dentro da frase inteira.",
        "pegadinha": "Sinônimos de dicionário não são automaticamente sinônimos em todo contexto.",
        "memorizar2026": "Sinonímia é relativa e contextual.",
        "fonte": "FGV/São Lourenço da Mata 2024 — sinônimo sem prejuízo do sentido; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-SEM-020",
        "numero": 20,
        "subtopico": "Antonímia e polissemia",
        "dificuldade": "alta",
        "pergunta": "A palavra “claro” pode ter como antônimo “escuro” em “quarto claro” e “obscuro” em “texto claro”. Isso demonstra que",
        "alternativas": [
            "antônimos independem da acepção ativada.",
            "“escuro” e “obscuro” são sempre sinônimos perfeitos.",
            "“claro” possui apenas um sentido.",
            "antônimos são definidos exclusivamente pela forma das palavras.",
            "a relação de antonímia depende do sentido contextual assumido pela palavra polissêmica."
        ],
        "correta": 4,
        "feedbackAcerto": "Cada acepção de “claro” aciona um eixo de oposição diferente: luminosidade ou compreensibilidade.",
        "feedbackErro": "A oposição semântica acompanha a acepção usada no contexto.",
        "analiseAlternativas": [
            "Incorreta. O contexto é decisivo.",
            "Incorreta. Podem coincidir em certos usos, não em todos.",
            "Incorreta. O exemplo mostra polissemia.",
            "Incorreta. A relação é semântica.",
            "Correta. A antonímia varia conforme a acepção."
        ],
        "dicaBanca": "A FGV pode cruzar duas relações semânticas no mesmo item.",
        "pegadinha": "Palavra polissêmica pode ter antônimos diferentes para cada sentido.",
        "memorizar2026": "Antônimo é da acepção, não apenas da forma gráfica.",
        "fonte": "Edital SEDUC-PA 2026 — antônimos e polissemia."
    },
    {
        "id": "SEDUC-LP-SEM-021",
        "numero": 21,
        "subtopico": "Parônimos — eminente x iminente",
        "dificuldade": "media",
        "pergunta": "Assinale a frase em que o parônimo está empregado corretamente.",
        "alternativas": [
            "O risco de alagamento era iminente, segundo o alerta meteorológico.",
            "O professor era iminente pesquisador da área.",
            "A cerimônia homenageou um cientista iminente por sua trajetória.",
            "A chegada da tempestade foi considerada eminente para as próximas horas.",
            "O relatório destacou o eminente perigo de deslizamento."
        ],
        "correta": 0,
        "feedbackAcerto": "“Iminente” = prestes a acontecer; “eminente” = elevado, ilustre, destacado.",
        "feedbackErro": "Associe o perigo próximo a “iminente” e a pessoa de destaque a “eminente”.",
        "analiseAlternativas": [
            "Correta. O risco está prestes a ocorrer.",
            "Incorreta. Pesquisador de destaque é “eminente”.",
            "Incorreta. Cientista ilustre é “eminente”.",
            "Incorreta. Tempestade próxima é “iminente”.",
            "Incorreta. Perigo prestes a ocorrer é “iminente”."
        ],
        "dicaBanca": "Parônimos costumam aparecer em frases perfeitamente plausíveis, mas com uma palavra semanticamente inadequada.",
        "pegadinha": "eminente = ilustre | iminente = próximo de ocorrer.",
        "memorizar2026": "Eminente pessoa; iminente acontecimento.",
        "fonte": "Edital SEDUC-PA 2026 — parônimos."
    },
    {
        "id": "SEDUC-LP-SEM-022",
        "numero": 22,
        "subtopico": "Hiperônimo e hipônimo",
        "dificuldade": "media",
        "pergunta": "Na relação “fruta → manga, banana, laranja”, é correto afirmar que",
        "alternativas": [
            "“manga” é hiperônimo de “fruta”.",
            "“fruta” é hiperônimo dos demais termos, que apresentam sentido mais específico.",
            "“banana” é sinônimo perfeito de “laranja”.",
            "“fruta” é parônimo de “manga”.",
            "todos os termos são antônimos entre si."
        ],
        "correta": 1,
        "feedbackAcerto": "“Fruta” é categoria mais ampla; manga, banana e laranja são itens específicos abrangidos por ela.",
        "feedbackErro": "Pense em categoria geral e membros específicos.",
        "analiseAlternativas": [
            "Incorreta. A relação está invertida.",
            "Correta. É a relação de hiperonímia.",
            "Incorreta. São frutas diferentes.",
            "Incorreta. Não há paronímia.",
            "Incorreta. Não há oposição."
        ],
        "dicaBanca": "Mesmo quando o edital menciona apenas hiperônimo, compreender o termo específico ajuda a resolver as questões.",
        "pegadinha": "Hiperônimo sobe na hierarquia semântica; hipônimo desce.",
        "memorizar2026": "fruta = hiperônimo | manga = hipônimo.",
        "fonte": "Edital SEDUC-PA 2026 — hiperônimos; padrão FGV de relações lexicais."
    },
    {
        "id": "SEDUC-LP-SEM-023",
        "numero": 23,
        "subtopico": "Polissemia — acepção contextual",
        "dificuldade": "alta",
        "pergunta": "Considere: I. “A cabeça da equipe apresentou o projeto.” II. “Ele bateu a cabeça na porta.” A palavra “cabeça”",
        "alternativas": [
            "tem exatamente o mesmo sentido literal nas duas frases.",
            "é parônimo de “equipe” na primeira frase.",
            "apresenta sentidos diferentes: liderança/figura principal em I e parte do corpo em II.",
            "é antônimo de “porta”.",
            "funciona como hiperônimo de “projeto”."
        ],
        "correta": 2,
        "feedbackAcerto": "O mesmo item lexical ativa acepções diferentes conforme o contexto, ilustrando polissemia.",
        "feedbackErro": "Compare a realidade designada por “cabeça” em cada frase.",
        "analiseAlternativas": [
            "Incorreta. A primeira é figurada.",
            "Incorreta. Não há paronímia.",
            "Correta. Há duas acepções contextuais.",
            "Incorreta. Não há oposição.",
            "Incorreta. Não há relação de generalidade."
        ],
        "dicaBanca": "A polissemia costuma aparecer em textos de humor, publicidade e linguagem cotidiana.",
        "pegadinha": "Uma palavra polissêmica não precisa gerar ambiguidade se o contexto for suficiente.",
        "memorizar2026": "Polissemia = repertório de sentidos; contexto seleciona a acepção.",
        "fonte": "Edital SEDUC-PA 2026 — polissemia."
    },
    {
        "id": "SEDUC-LP-SEM-024",
        "numero": 24,
        "subtopico": "Ambiguidade — reescrita corretiva",
        "dificuldade": "alta",
        "pergunta": "A frase “A coordenadora informou à professora que sua turma faria a visita” é ambígua. A reescrita que elimina a ambiguidade, deixando claro que a turma é da professora, é",
        "alternativas": [
            "A coordenadora informou à professora sobre sua turma e a visita.",
            "A coordenadora informou que a professora visitaria sua turma.",
            "A coordenadora informou à professora que a turma faria sua visita.",
            "A coordenadora informou à professora que a turma da professora faria a visita.",
            "A coordenadora, que informou à professora, disse que sua turma faria a visita."
        ],
        "correta": 3,
        "feedbackAcerto": "A repetição controlada do referente “da professora” elimina a dúvida criada pelo possessivo “sua”.",
        "feedbackErro": "A melhor reescrita deve explicitar o referente, não apenas deslocar o pronome ambíguo.",
        "analiseAlternativas": [
            "Incorreta. “sua” continua ambíguo.",
            "Incorreta. Muda o conteúdo do enunciado.",
            "Incorreta. “sua visita” cria nova ambiguidade.",
            "Correta. O referente da turma fica explícito.",
            "Incorreta. “sua turma” continua podendo remeter à coordenadora."
        ],
        "dicaBanca": "A FGV frequentemente associa identificação de ambiguidade à escolha de uma reescrita mais clara.",
        "pegadinha": "Trocar a posição do pronome nem sempre elimina a ambiguidade.",
        "memorizar2026": "Para corrigir ambiguidade referencial, explicite o antecedente.",
        "fonte": "FGV/SME-SP — Professor, questões de ambiguidade; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-SEM-025",
        "numero": 25,
        "subtopico": "Caso integrador — relações semânticas",
        "dificuldade": "alta",
        "pergunta": "Leia: “Após o temporal, a escola ficou no escuro. Horas depois, a direção afirmou que ainda havia pontos obscuros no relatório sobre os danos.” A análise correta é",
        "alternativas": [
            "“escuro” e “obscuros” são empregados exatamente no mesmo sentido físico.",
            "“obscuros” é parônimo de “escuro”.",
            "“relatório” é hiperônimo de “danos”.",
            "há ambiguidade obrigatória porque “escuro” possui mais de um sentido na língua.",
            "o texto explora sentidos diferentes relacionados: “escuro” refere-se à ausência de luz, enquanto “obscuros” significa pouco claros ou não esclarecidos."
        ],
        "correta": 4,
        "feedbackAcerto": "A questão integra polissemia e sentido figurado: palavras da mesma base semântica são usadas em campos diferentes, físico e abstrato.",
        "feedbackErro": "Analise cada ocorrência pelo contexto: uma fala de iluminação; a outra, de clareza informacional.",
        "analiseAlternativas": [
            "Incorreta. A segunda ocorrência é figurada.",
            "Incorreta. Não é relação de parônimos.",
            "Incorreta. “relatório” não engloba semanticamente “danos”.",
            "Incorreta. Polissemia não implica ambiguidade quando o contexto seleciona claramente os sentidos.",
            "Correta. Há sentidos distintos e contextualizados."
        ],
        "dicaBanca": "FGV tende a integrar relações semânticas e efeito de sentido em um mesmo item.",
        "pegadinha": "Polissemia ≠ ambiguidade automática.",
        "memorizar2026": "Sempre separe: potencial de sentidos da palavra x leitura efetivamente produzida pelo contexto.",
        "fonte": "Edital SEDUC-PA 2026; calibrado por provas FGV para professor sobre polissemia, ambiguidade e sinonímia contextual."
    }
];

    window.seducLinguaPortuguesaSemantica2026 = banco;
})();
