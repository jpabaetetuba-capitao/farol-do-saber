/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 06: Tipologia da Frase Portuguesa

   Edital SEDUC-PA 2026: “Tipologia da frase portuguesa.”

   Foco do bloco:
   • declarativa (afirmativa e negativa)
   • interrogativa (direta/indireta; total/parcial/alternativa)
   • exclamativa
   • injuntiva/imperativa
   • optativa
   • frase nominal x frase verbal
   • forma gramatical x intenção comunicativa

   25 questões autorais calibradas por questões oficiais FGV,
   com feedback por alternativa.
========================================================== */

(function(){
    "use strict";

    const banco =
[
    {
        "id": "SEDUC-LP-FRA-001",
        "numero": 1,
        "subtopico": "Frase declarativa afirmativa",
        "dificuldade": "facil",
        "pergunta": "Assinale a frase classificada corretamente como declarativa afirmativa.",
        "alternativas": [
            "A biblioteca abre às oito horas.",
            "A biblioteca abre às oito horas?",
            "Abra a biblioteca às oito horas!",
            "Que biblioteca organizada!",
            "Tomara que a biblioteca abra cedo!"
        ],
        "correta": 0,
        "feedbackAcerto": "A frase transmite uma informação sem marca de negação, pergunta, ordem ou desejo.",
        "feedbackErro": "Na tipologia da frase, observe a intenção comunicativa predominante. A alternativa correta apenas declara um fato.",
        "analiseAlternativas": [
            "Correta. É declarativa afirmativa.",
            "Incorreta. É interrogativa direta.",
            "Incorreta. É injuntiva/imperativa.",
            "Incorreta. É exclamativa.",
            "Incorreta. É optativa."
        ],
        "dicaBanca": "A FGV costuma colocar frases com o mesmo tema e mudar apenas a modalidade.",
        "pegadinha": "Ponto final não basta sozinho; o sentido declarativo é decisivo.",
        "memorizar2026": "Declarativa = apresenta uma informação; pode ser afirmativa ou negativa.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-002",
        "numero": 2,
        "subtopico": "Frase declarativa negativa",
        "dificuldade": "facil",
        "pergunta": "A frase declarativa negativa está corretamente exemplificada em",
        "alternativas": [
            "Não feche a porta.",
            "Os alunos não chegaram atrasados.",
            "Os alunos chegaram?",
            "Como os alunos chegaram cedo!",
            "Quem dera que os alunos chegassem cedo!"
        ],
        "correta": 1,
        "feedbackAcerto": "A alternativa declara um fato e contém marca de negação.",
        "feedbackErro": "Não confunda presença de 'não' com frase negativa declarativa: 'Não feche' é injunção negativa.",
        "analiseAlternativas": [
            "Incorreta. É injuntiva negativa.",
            "Correta. Declara negativamente um fato.",
            "Incorreta. É interrogativa.",
            "Incorreta. É exclamativa.",
            "Incorreta. É optativa."
        ],
        "dicaBanca": "A banca explora frases negativas com valor de ordem para confundir declaração e injunção.",
        "pegadinha": "O advérbio 'não' não determina sozinho a modalidade.",
        "memorizar2026": "Declarativa negativa = declaração + negação; injuntiva negativa = proibição/orientação.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-003",
        "numero": 3,
        "subtopico": "Interrogação total",
        "dificuldade": "media",
        "pergunta": "Em qual frase a interrogação é total, isto é, admite essencialmente resposta 'sim' ou 'não'?",
        "alternativas": [
            "Por que a reunião foi adiada?",
            "Quando começa a prova?",
            "Você já entregou o relatório?",
            "Qual documento está faltando?",
            "Você prefere manhã ou tarde?"
        ],
        "correta": 2,
        "feedbackAcerto": "'Você já entregou o relatório?' admite resposta nuclear sim/não e, por isso, é uma interrogativa total.",
        "feedbackErro": "Interrogação total pergunta pela validade global da proposição. Perguntas com 'por que', 'quando', 'qual' ou alternativas exigem informação específica.",
        "analiseAlternativas": [
            "Incorreta. É parcial: pede a causa.",
            "Incorreta. É parcial: pede o tempo.",
            "Correta. Pode ser respondida essencialmente por sim/não.",
            "Incorreta. É parcial: pede identificação.",
            "Incorreta. É alternativa: exige escolha entre opções."
        ],
        "dicaBanca": "A FGV já cobrou explicitamente a oposição entre interrogação total e parcial.",
        "pegadinha": "Pergunta com duas alternativas explícitas não é total só porque começa com 'você'.",
        "memorizar2026": "Interrogativa total = sim/não; parcial = pede um elemento específico.",
        "fonte": "FGV — padrão de questão oficial sobre interrogação total; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-004",
        "numero": 4,
        "subtopico": "Interrogação parcial",
        "dificuldade": "media",
        "pergunta": "Assinale a frase que apresenta uma interrogação parcial.",
        "alternativas": [
            "O curso começa amanhã?",
            "Você concluiu a inscrição?",
            "A reunião será presencial?",
            "Onde será aplicada a prova?",
            "O resultado já saiu?"
        ],
        "correta": 3,
        "feedbackAcerto": "'Onde' solicita uma informação específica de lugar, característica da interrogação parcial.",
        "feedbackErro": "Interrogações parciais contêm ou pressupõem um elemento interrogativo que pede uma parcela da informação.",
        "analiseAlternativas": [
            "Incorreta. É total.",
            "Incorreta. É total.",
            "Incorreta. É total.",
            "Correta. Solicita o lugar.",
            "Incorreta. É total."
        ],
        "dicaBanca": "Palavras como quem, qual, onde, quando, como e por que costumam introduzir interrogativas parciais.",
        "pegadinha": "Nem toda pergunta iniciada por pronome pessoal é total; observe o dado solicitado.",
        "memorizar2026": "Parcial = a resposta preenche uma lacuna informativa específica.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-005",
        "numero": 5,
        "subtopico": "Interrogação alternativa",
        "dificuldade": "alta",
        "pergunta": "Na frase 'Você fará a prova em Belém ou em Abaetetuba?', a interrogação é melhor caracterizada como",
        "alternativas": [
            "declarativa negativa.",
            "exclamativa.",
            "injuntiva.",
            "interrogativa parcial introduzida por advérbio.",
            "interrogativa alternativa, pois solicita escolha entre opções apresentadas."
        ],
        "correta": 4,
        "feedbackAcerto": "A pergunta oferece duas possibilidades e pede que o interlocutor escolha uma delas.",
        "feedbackErro": "Ela não se resolve adequadamente apenas com sim/não, nem contém palavra interrogativa que peça livremente um dado.",
        "analiseAlternativas": [
            "Incorreta. Há pergunta, não declaração.",
            "Incorreta. Não predomina expressão emotiva.",
            "Incorreta. Não orienta ação.",
            "Incorreta. Não há advérbio interrogativo solicitando informação aberta.",
            "Correta. A resposta esperada seleciona uma alternativa."
        ],
        "dicaBanca": "A FGV usa perguntas com 'ou' para testar se o candidato confunde alternativa com interrogativa total.",
        "pegadinha": "A forma 'Você...?' não garante interrogação total.",
        "memorizar2026": "Interrogativa alternativa = apresenta opções de resposta no próprio enunciado.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-006",
        "numero": 6,
        "subtopico": "Interrogação indireta",
        "dificuldade": "alta",
        "pergunta": "Assinale a opção que contém uma interrogação indireta.",
        "alternativas": [
            "Não sabemos quando a equipe retornará.",
            "Quando a equipe retornará?",
            "A equipe retornará amanhã?",
            "Retorne amanhã, por favor.",
            "Como a equipe trabalha bem!"
        ],
        "correta": 0,
        "feedbackAcerto": "A pergunta está incorporada a uma oração declarativa ('Não sabemos...'), sem formulação interrogativa direta.",
        "feedbackErro": "Interrogação indireta expressa conteúdo interrogativo subordinado a verbos como saber, perguntar, descobrir, informar etc.",
        "analiseAlternativas": [
            "Correta. 'Quando a equipe retornará' funciona como pergunta indireta.",
            "Incorreta. É interrogativa direta parcial.",
            "Incorreta. É interrogativa direta total.",
            "Incorreta. É injuntiva.",
            "Incorreta. É exclamativa."
        ],
        "dicaBanca": "A FGV cobra interrogação direta x indireta mesmo quando não há ponto de interrogação na indireta.",
        "pegadinha": "Ausência de '?' não elimina o conteúdo interrogativo indireto.",
        "memorizar2026": "Direta: pergunta autônoma. Indireta: pergunta integrada a outra oração.",
        "fonte": "FGV — padrão de questão oficial sobre interrogação direta/indireta; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-007",
        "numero": 7,
        "subtopico": "Frase injuntiva — ordem",
        "dificuldade": "facil",
        "pergunta": "Assinale a frase de valor injuntivo.",
        "alternativas": [
            "A sala está silenciosa.",
            "A sala está silenciosa?",
            "Mantenha a sala em silêncio.",
            "Que silêncio agradável!",
            "Oxalá a sala permaneça silenciosa."
        ],
        "correta": 2,
        "feedbackAcerto": "O verbo 'mantenha' orienta diretamente a conduta do destinatário.",
        "feedbackErro": "Frase injuntiva pode expressar ordem, pedido, conselho, recomendação ou proibição.",
        "analiseAlternativas": [
            "Incorreta. Declarativa.",
            "Incorreta. Interrogativa.",
            "Correta. Orienta uma ação.",
            "Incorreta. Exclamativa.",
            "Incorreta. Optativa."
        ],
        "dicaBanca": "Imperativo é pista forte, mas a FGV também cobra injunções formuladas de modo indireto.",
        "pegadinha": "Injunção não é sinônimo de agressividade; pode ser conselho ou pedido cortês.",
        "memorizar2026": "Injuntiva = pretende levar o interlocutor a fazer ou evitar algo.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-008",
        "numero": 8,
        "subtopico": "Injunção indireta / ato de fala",
        "dificuldade": "alta",
        "pergunta": "Em uma sala muito quente, alguém diz ao colega próximo da janela: 'Você pode abrir a janela?'. Considerando a finalidade comunicativa predominante, a frase funciona como",
        "alternativas": [
            "declaração sobre a capacidade física do colega.",
            "injunção formulada como pedido cortês.",
            "exclamação de surpresa.",
            "expressão de desejo sem destinatário.",
            "interrogação parcial sobre a janela."
        ],
        "correta": 1,
        "feedbackAcerto": "Embora tenha forma interrogativa, no contexto a finalidade é solicitar que o colega abra a janela.",
        "feedbackErro": "A FGV pode distinguir forma gramatical e valor pragmático. A intenção comunicativa pode transformar uma pergunta formal em pedido.",
        "analiseAlternativas": [
            "Incorreta. Essa leitura literal ignora o contexto comunicativo.",
            "Correta. A pergunta funciona como pedido indireto.",
            "Incorreta. Não há surpresa.",
            "Incorreta. Há destinatário e ação solicitada.",
            "Incorreta. Não se pede uma informação específica sobre a janela."
        ],
        "dicaBanca": "Leia a situação comunicativa: a banca gosta de atos de fala indiretos.",
        "pegadinha": "Forma interrogativa pode realizar função injuntiva.",
        "memorizar2026": "Modalidade formal e intenção pragmática podem não coincidir.",
        "fonte": "FGV — padrão de questão oficial em que pergunta formal realiza pedido; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-009",
        "numero": 9,
        "subtopico": "Frase exclamativa",
        "dificuldade": "facil",
        "pergunta": "A frase exclamativa está corretamente exemplificada em",
        "alternativas": [
            "A prova será amanhã.",
            "A prova será amanhã?",
            "Faça a prova amanhã.",
            "Como essa prova foi difícil!",
            "Tomara que a prova seja tranquila."
        ],
        "correta": 3,
        "feedbackAcerto": "A frase expressa intensamente uma avaliação/emoção diante da dificuldade da prova.",
        "feedbackErro": "Exclamativas exteriorizam reação afetiva, surpresa, admiração, indignação, intensidade ou outros estados expressivos.",
        "analiseAlternativas": [
            "Incorreta. Declarativa.",
            "Incorreta. Interrogativa.",
            "Incorreta. Injuntiva.",
            "Correta. Expressa reação emocional/intensiva.",
            "Incorreta. Optativa."
        ],
        "dicaBanca": "O ponto de exclamação é pista, mas não resolve sozinho: injuntivas e optativas também podem terminá-lo.",
        "pegadinha": "Não classifique apenas pela pontuação.",
        "memorizar2026": "Exclamativa = expressa reação, emoção ou intensidade.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-010",
        "numero": 10,
        "subtopico": "Frase optativa",
        "dificuldade": "media",
        "pergunta": "Assinale a frase optativa.",
        "alternativas": [
            "Que resultado excelente!",
            "O resultado será divulgado hoje.",
            "O resultado já foi divulgado?",
            "Divulguem o resultado hoje.",
            "Que você tenha um excelente resultado!"
        ],
        "correta": 4,
        "feedbackAcerto": "A frase expressa desejo dirigido ao interlocutor, característica da optativa.",
        "feedbackErro": "Optativas exprimem desejo, voto, esperança ou bênção; frequentemente aparecem com subjuntivo e fórmulas como 'tomara', 'oxalá', 'que...'.",
        "analiseAlternativas": [
            "Incorreta. Exclamativa.",
            "Incorreta. Declarativa.",
            "Incorreta. Interrogativa.",
            "Incorreta. Injuntiva.",
            "Correta. Expressa desejo."
        ],
        "dicaBanca": "A exclamação pode aparecer tanto em optativas quanto em exclamativas; identifique a intenção de desejar.",
        "pegadinha": "'Que...' pode iniciar exclamativa ('Que beleza!') ou optativa ('Que você vença!').",
        "memorizar2026": "Optativa = desejo/voto/esperança.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-011",
        "numero": 11,
        "subtopico": "Frase nominal",
        "dificuldade": "media",
        "pergunta": "Assinale a frase nominal, isto é, construída sem verbo.",
        "alternativas": [
            "Silêncio na biblioteca!",
            "A biblioteca está silenciosa.",
            "Façam silêncio na biblioteca.",
            "A biblioteca ficou silenciosa.",
            "Houve silêncio na biblioteca."
        ],
        "correta": 0,
        "feedbackAcerto": "'Silêncio na biblioteca!' possui sentido completo no contexto e não apresenta verbo.",
        "feedbackErro": "Frase nominal não é sinônimo de frase curta; o critério é a ausência de verbo.",
        "analiseAlternativas": [
            "Correta. Não há verbo.",
            "Incorreta. Há o verbo 'está'.",
            "Incorreta. Há o verbo 'façam'.",
            "Incorreta. Há o verbo 'ficou'.",
            "Incorreta. Há o verbo 'houve'."
        ],
        "dicaBanca": "A FGV já cobrou identificação e transformação de frases verbais em nominais.",
        "pegadinha": "Uma frase nominal pode ser exclamativa ou até ter valor injuntivo no contexto.",
        "memorizar2026": "Frase nominal = enunciado sem verbo; frase verbal = enunciado com verbo.",
        "fonte": "FGV — padrão de questões oficiais sobre frase nominal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-012",
        "numero": 12,
        "subtopico": "Frase verbal",
        "dificuldade": "facil",
        "pergunta": "Entre as opções, a única frase verbal é",
        "alternativas": [
            "Que calor!",
            "Atenção aos prazos!",
            "Os candidatos aguardam o resultado.",
            "Silêncio absoluto.",
            "Parabéns aos aprovados!"
        ],
        "correta": 2,
        "feedbackAcerto": "A alternativa contém o verbo 'aguardam'.",
        "feedbackErro": "Frase verbal é organizada em torno de verbo ou locução verbal. As demais são frases nominais.",
        "analiseAlternativas": [
            "Incorreta. Frase nominal.",
            "Incorreta. Frase nominal.",
            "Correta. Há verbo.",
            "Incorreta. Frase nominal.",
            "Incorreta. Frase nominal."
        ],
        "dicaBanca": "Não confunda sentido completo com presença de verbo: frases nominais também comunicam plenamente.",
        "pegadinha": "Ponto de exclamação não transforma frase nominal em verbal.",
        "memorizar2026": "Verbal = contém verbo; nominal = não contém verbo.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-013",
        "numero": 13,
        "subtopico": "Pontuação e modalidade",
        "dificuldade": "alta",
        "pergunta": "Sobre a relação entre sinais de pontuação e tipologia da frase, assinale a afirmativa correta.",
        "alternativas": [
            "Toda frase terminada por exclamação é necessariamente exclamativa.",
            "Toda frase terminada por ponto final é declarativa.",
            "Toda frase com verbo no imperativo termina obrigatoriamente por exclamação.",
            "A pontuação é uma pista importante, mas a classificação depende também da intenção e do sentido da frase.",
            "Frases optativas não admitem ponto de exclamação."
        ],
        "correta": 3,
        "feedbackAcerto": "A modalidade não é definida mecanicamente pelo sinal final; intenção, construção e contexto também importam.",
        "feedbackErro": "Uma injunção ('Pare!') e uma optativa ('Que dê tudo certo!') podem ter exclamação; pedidos podem aparecer como perguntas.",
        "analiseAlternativas": [
            "Incorreta. Exclamação pode acompanhar injuntivas e optativas.",
            "Incorreta. O ponto final pode encerrar enunciados cuja função precisa do contexto.",
            "Incorreta. Imperativos podem ocorrer com ponto final, por exemplo em instruções.",
            "Correta. É o critério mais seguro.",
            "Incorreta. Optativas frequentemente recebem exclamação."
        ],
        "dicaBanca": "A FGV testa o valor comunicativo, não apenas a aparência gráfica.",
        "pegadinha": "Pontuação é pista, não sentença final de classificação.",
        "memorizar2026": "Classifique por sentido + intenção + forma, e só depois confirme pela pontuação.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-014",
        "numero": 14,
        "subtopico": "Interrogação retórica",
        "dificuldade": "alta",
        "pergunta": "Na frase 'Quem nunca desejou um dia de descanso?', usada em um texto argumentativo sem esperar resposta efetiva do leitor, a construção é",
        "alternativas": [
            "declarativa, porque transmite uma opinião.",
            "interrogativa em sua forma, com emprego retórico no contexto.",
            "injuntiva, porque obriga o leitor a responder.",
            "optativa, porque expressa desejo.",
            "nominal, porque não possui verbo."
        ],
        "correta": 1,
        "feedbackAcerto": "A estrutura é interrogativa, embora a pergunta seja retórica e tenha função argumentativa no texto.",
        "feedbackErro": "A finalidade retórica não apaga a forma interrogativa. É possível classificar a frase e, separadamente, explicar seu efeito discursivo.",
        "analiseAlternativas": [
            "Incorreta. A forma é interrogativa.",
            "Correta. Pergunta formal com uso retórico.",
            "Incorreta. Não exige ação do destinatário.",
            "Incorreta. O desejo é mencionado, não formulado como voto.",
            "Incorreta. Há o verbo 'desejou'."
        ],
        "dicaBanca": "A FGV gosta de separar tipo de frase de função argumentativa.",
        "pegadinha": "Pergunta retórica continua sendo formalmente interrogativa.",
        "memorizar2026": "Interrogativa retórica = forma de pergunta + resposta não efetivamente solicitada.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-015",
        "numero": 15,
        "subtopico": "Interrogação indireta e pontuação",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase em que há conteúdo interrogativo sem ponto de interrogação.",
        "alternativas": [
            "Que notícia excelente!",
            "Diga-me se o formulário foi enviado.",
            "Envie o formulário agora.",
            "O formulário foi enviado.",
            "Tomara que o formulário tenha sido enviado."
        ],
        "correta": 1,
        "feedbackAcerto": "A oração 'se o formulário foi enviado' corresponde a uma interrogação indireta integrada ao pedido 'Diga-me'.",
        "feedbackErro": "Interrogativas indiretas normalmente não recebem ponto de interrogação porque fazem parte de outra estrutura sintática.",
        "analiseAlternativas": [
            "Incorreta. Exclamativa.",
            "Correta. Há pergunta indireta introduzida por 'se'.",
            "Incorreta. Injuntiva.",
            "Incorreta. Declarativa.",
            "Incorreta. Optativa."
        ],
        "dicaBanca": "Procure verbos que introduzem busca de informação: saber, perguntar, dizer, descobrir, verificar.",
        "pegadinha": "Nem toda pergunta tem '?'.",
        "memorizar2026": "Interrogação indireta pode ser introduzida por 'se' em perguntas totais reportadas.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-016",
        "numero": 16,
        "subtopico": "Injuntiva negativa",
        "dificuldade": "media",
        "pergunta": "A frase 'Não utilize o elevador em caso de incêndio.' classifica-se predominantemente como",
        "alternativas": [
            "declarativa negativa.",
            "interrogativa total.",
            "exclamativa.",
            "optativa.",
            "injuntiva negativa, pois estabelece uma proibição/orientação."
        ],
        "correta": 4,
        "feedbackAcerto": "O enunciado orienta o comportamento do destinatário por meio de uma proibição.",
        "feedbackErro": "O 'não' marca negação, mas a finalidade não é declarar um fato; é impedir uma ação.",
        "analiseAlternativas": [
            "Incorreta. Não há simples declaração.",
            "Incorreta. Não há pergunta.",
            "Incorreta. O foco não é emoção.",
            "Incorreta. Não expressa desejo.",
            "Correta. Trata-se de proibição, portanto injunção."
        ],
        "dicaBanca": "Avisos e placas são ótimos contextos para a FGV testar injunção.",
        "pegadinha": "Negação + imperativo não forma declarativa negativa.",
        "memorizar2026": "Injuntiva negativa = proibição, conselho ou orientação para não agir.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-017",
        "numero": 17,
        "subtopico": "Afirmativa x negativa",
        "dificuldade": "media",
        "pergunta": "Assinale a opção em que a classificação afirmativa/negativa está correta.",
        "alternativas": [
            "'Ninguém faltou à reunião.' — declarativa afirmativa.",
            "'Talvez ele não venha.' — injuntiva negativa.",
            "'Os resultados ainda não foram publicados.' — declarativa negativa.",
            "'Não se atrasem!' — declarativa negativa.",
            "'Quem não estudou?' — declarativa negativa."
        ],
        "correta": 2,
        "feedbackAcerto": "A frase declara que os resultados não foram publicados e apresenta marca explícita de negação.",
        "feedbackErro": "A presença de expressão negativa precisa ser combinada com a modalidade. 'Não se atrasem!' é injunção; 'Quem não estudou?' é pergunta.",
        "analiseAlternativas": [
            "Incorreta. 'Ninguém' dá valor negativo à declaração.",
            "Incorreta. É uma declaração modalizada, não injunção.",
            "Correta. Declaração negativa.",
            "Incorreta. É injuntiva negativa.",
            "Incorreta. É interrogativa."
        ],
        "dicaBanca": "A FGV costuma cruzar polaridade (afirmativa/negativa) com modalidade (declarativa/injuntiva/interrogativa).",
        "pegadinha": "Negatividade e tipo de frase são dimensões diferentes.",
        "memorizar2026": "Primeiro identifique a modalidade; depois observe se a proposição é afirmada ou negada.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-018",
        "numero": 18,
        "subtopico": "Classificação comparativa",
        "dificuldade": "alta",
        "pergunta": "Considere as frases: I. 'Você terminou a atividade?' II. 'Termine a atividade.' III. 'Que atividade difícil!' A classificação correta de I, II e III é, respectivamente,",
        "alternativas": [
            "interrogativa, injuntiva e exclamativa.",
            "declarativa, optativa e interrogativa.",
            "interrogativa, declarativa e optativa.",
            "injuntiva, interrogativa e declarativa.",
            "exclamativa, injuntiva e declarativa."
        ],
        "correta": 0,
        "feedbackAcerto": "I formula pergunta; II orienta uma ação; III expressa avaliação intensiva.",
        "feedbackErro": "Compare a intenção central de cada frase, não apenas a pontuação.",
        "analiseAlternativas": [
            "Correta. As três classificações correspondem às funções das frases.",
            "Incorreta. Nenhuma das três classificações se ajusta.",
            "Incorreta. II não declara; III não expressa desejo.",
            "Incorreta. I não é ordem; II não é pergunta.",
            "Incorreta. I não é exclamação; III não é declaração."
        ],
        "dicaBanca": "Questões de correspondência são frequentes quando a banca quer testar várias modalidades em um único item.",
        "pegadinha": "Não use um único sinal gráfico como critério para todas as frases.",
        "memorizar2026": "Pergunta → interrogativa; orientação → injuntiva; emoção/intensidade → exclamativa.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-019",
        "numero": 19,
        "subtopico": "Optativa x exclamativa",
        "dificuldade": "alta",
        "pergunta": "Assinale a opção em que a frase é optativa, e não apenas exclamativa.",
        "alternativas": [
            "Que lugar bonito!",
            "Como você cresceu!",
            "Que susto enorme!",
            "Quanto trabalho hoje!",
            "Tomara que todos sejam aprovados!"
        ],
        "correta": 4,
        "feedbackAcerto": "'Tomara que...' expressa desejo/esperança de aprovação, núcleo da modalidade optativa.",
        "feedbackErro": "As demais expressam reação, avaliação ou intensidade, sem formular um voto para que algo aconteça.",
        "analiseAlternativas": [
            "Incorreta. Exclamativa avaliativa.",
            "Incorreta. Exclamativa.",
            "Incorreta. Exclamativa.",
            "Incorreta. Exclamativa intensiva.",
            "Correta. Expressa desejo."
        ],
        "dicaBanca": "Procure marcas de desejo: tomara, oxalá, que + subjuntivo, fórmulas de bênção.",
        "pegadinha": "Nem todo 'que' exclamativo é optativo.",
        "memorizar2026": "Optativa deseja um estado de coisas; exclamativa reage a um estado de coisas.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-020",
        "numero": 20,
        "subtopico": "Frase nominal com valor injuntivo",
        "dificuldade": "alta",
        "pergunta": "Em uma placa escolar, lê-se apenas 'Silêncio!'. Essa construção é corretamente analisada como",
        "alternativas": [
            "frase verbal declarativa.",
            "interrogativa indireta.",
            "optativa verbal.",
            "frase nominal que, no contexto, possui valor injuntivo.",
            "frase nominal necessariamente exclamativa, sem qualquer função diretiva."
        ],
        "correta": 3,
        "feedbackAcerto": "Não há verbo, por isso a frase é nominal; no contexto da placa, ela orienta o destinatário a fazer silêncio.",
        "feedbackErro": "Estrutura e função são dimensões diferentes. Uma frase nominal pode realizar uma ordem ou orientação.",
        "analiseAlternativas": [
            "Incorreta. Não há verbo nem declaração de fato.",
            "Incorreta. Não há pergunta.",
            "Incorreta. Não há verbo nem desejo.",
            "Correta. Estrutura nominal + função injuntiva.",
            "Incorreta. A exclamação gráfica não elimina o valor diretivo."
        ],
        "dicaBanca": "A FGV gosta de cruzar classificação estrutural e finalidade comunicativa.",
        "pegadinha": "Nominal/verbal não substitui declarativa/interrogativa/injuntiva; são eixos diferentes.",
        "memorizar2026": "Uma mesma frase pode ser nominal quanto à estrutura e injuntiva quanto à função.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-021",
        "numero": 21,
        "subtopico": "Interrogativa total x alternativa",
        "dificuldade": "alta",
        "pergunta": "Assinale a pergunta que é total, e não alternativa nem parcial.",
        "alternativas": [
            "Você prefere estudar pela manhã ou à noite?",
            "Qual disciplina você revisará hoje?",
            "Por que a prova foi adiada?",
            "Você já leu o edital completo?",
            "Quando será divulgado o local de prova?"
        ],
        "correta": 3,
        "feedbackAcerto": "A pergunta sobre a leitura do edital admite resposta básica sim/não.",
        "feedbackErro": "As alternativas A e as perguntas com qual/por que/quando exigem respostas específicas.",
        "analiseAlternativas": [
            "Incorreta. Interrogativa alternativa.",
            "Incorreta. Parcial.",
            "Incorreta. Parcial.",
            "Correta. Total.",
            "Incorreta. Parcial."
        ],
        "dicaBanca": "Faça o teste do sim/não. Se uma resposta binária satisfaz o núcleo da pergunta, ela tende a ser total.",
        "pegadinha": "Perguntas com 'ou' explícito normalmente pedem escolha, não simples sim/não.",
        "memorizar2026": "Total = valida a proposição inteira; parcial/alternativa = solicita conteúdo específico.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-022",
        "numero": 22,
        "subtopico": "Frase declarativa modalizada",
        "dificuldade": "alta",
        "pergunta": "Na frase 'Talvez a equipe conclua o trabalho hoje.', a classificação mais adequada é",
        "alternativas": [
            "declarativa, pois apresenta uma informação modalizada por possibilidade.",
            "interrogativa, porque existe incerteza.",
            "optativa, porque toda possibilidade expressa desejo.",
            "injuntiva, porque orienta a equipe.",
            "exclamativa, porque o advérbio intensifica a frase."
        ],
        "correta": 0,
        "feedbackAcerto": "A incerteza não transforma a frase em pergunta ou desejo; o enunciador declara uma possibilidade.",
        "feedbackErro": "Modalizadores como 'talvez', 'provavelmente' e 'certamente' alteram o grau de compromisso com a informação, mas não necessariamente a modalidade frasal.",
        "analiseAlternativas": [
            "Correta. É uma declaração de possibilidade.",
            "Incorreta. Não há pergunta.",
            "Incorreta. Possibilidade não equivale a desejo.",
            "Incorreta. Não há orientação ao destinatário.",
            "Incorreta. Não há reação exclamativa."
        ],
        "dicaBanca": "FGV explora modalizadores; não confunda incerteza semântica com interrogação.",
        "pegadinha": "Dúvida declarada não é pergunta.",
        "memorizar2026": "Declarativas também podem expressar certeza, probabilidade, dúvida ou avaliação.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-023",
        "numero": 23,
        "subtopico": "Interrogação direta x indireta",
        "dificuldade": "media",
        "pergunta": "A transformação que converte corretamente a pergunta direta 'Quando será a reunião?' em interrogação indireta é",
        "alternativas": [
            "Quando será a reunião.",
            "Diga quando será a reunião?",
            "Gostaria de saber quando será a reunião.",
            "Que a reunião seja amanhã!",
            "Realize a reunião amanhã."
        ],
        "correta": 2,
        "feedbackAcerto": "'Gostaria de saber quando será a reunião.' incorpora o conteúdo interrogativo a uma estrutura declarativa, sem exigir ponto de interrogação.",
        "feedbackErro": "A interrogação indireta mantém a informação perguntada, mas a subordina a uma expressão como 'gostaria de saber'.",
        "analiseAlternativas": [
            "Incorreta. Apenas retirar o ponto de interrogação não cria uma indireta adequada.",
            "Incorreta. A pontuação e a construção não são a forma padrão pedida.",
            "Correta. Conteúdo interrogativo integrado a outra oração.",
            "Incorreta. Optativa.",
            "Incorreta. Injuntiva."
        ],
        "dicaBanca": "A banca pode pedir reescrituras entre interrogação direta e indireta.",
        "pegadinha": "Na indireta, o ponto de interrogação geralmente desaparece.",
        "memorizar2026": "Direta: 'Quando será?'; indireta: 'Quero saber quando será.'",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-024",
        "numero": 24,
        "subtopico": "Frase nominal e exclamativa",
        "dificuldade": "media",
        "pergunta": "Na frase 'Que surpresa!', é correto afirmar que ela é",
        "alternativas": [
            "verbal e injuntiva.",
            "verbal e declarativa.",
            "nominal e interrogativa.",
            "nominal e optativa.",
            "nominal quanto à estrutura e exclamativa quanto à modalidade."
        ],
        "correta": 4,
        "feedbackAcerto": "Não há verbo e o enunciado expressa reação emocional; por isso, é nominal e exclamativo.",
        "feedbackErro": "As classificações estrutural (nominal/verbal) e modal (declarativa/interrogativa etc.) podem coexistir.",
        "analiseAlternativas": [
            "Incorreta. Não há verbo nem ordem.",
            "Incorreta. Não há verbo nem simples declaração.",
            "Incorreta. Não há pergunta.",
            "Incorreta. Não há desejo.",
            "Correta. Ausência de verbo + reação exclamativa."
        ],
        "dicaBanca": "Quando houver duas classificações, verifique se pertencem a eixos diferentes e podem coexistir.",
        "pegadinha": "Nominal não significa neutra: uma frase nominal pode ser exclamativa, injuntiva etc.",
        "memorizar2026": "Estrutura responde 'há verbo?'; modalidade responde 'qual é a intenção comunicativa?'.",
        "fonte": "Questão autoral calibrada por matriz e questões oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-FRA-025",
        "numero": 25,
        "subtopico": "Questão integradora — padrão FGV",
        "dificuldade": "alta",
        "pergunta": "Assinale a opção em que a classificação indicada está correta.",
        "alternativas": [
            "'Quem chegou primeiro?' — declarativa.",
            "'Não deixem os documentos sobre a mesa.' — injuntiva.",
            "'Que todos tenham boa prova!' — interrogativa.",
            "'Os portões não abriram ainda.' — exclamativa.",
            "'Você trouxe identidade ou passaporte?' — interrogativa total."
        ],
        "correta": 1,
        "feedbackAcerto": "'Não deixem...' expressa uma proibição/orientação e é, portanto, injuntiva.",
        "feedbackErro": "As demais alternativas trocam a modalidade real por outra: pergunta parcial, optativa, declarativa negativa e pergunta alternativa.",
        "analiseAlternativas": [
            "Incorreta. É interrogativa parcial.",
            "Correta. É uma injunção negativa.",
            "Incorreta. É optativa.",
            "Incorreta. É declarativa negativa.",
            "Incorreta. É interrogativa alternativa, não total."
        ],
        "dicaBanca": "Esse formato reproduz uma cobrança recorrente da FGV: várias frases curtas com classificação ao lado.",
        "pegadinha": "A banca costuma usar pontuação ou negação para induzir classificação apressada.",
        "memorizar2026": "FGV: identifique a intenção, depois refine — total/parcial, direta/indireta, afirmativa/negativa, nominal/verbal.",
        "fonte": "Questão autoral calibrada por provas oficiais FGV sobre tipologia da frase; Edital SEDUC-PA 2026."
    }
];

    window.seducLinguaPortuguesaTipologiaFrase2026 = banco;
})();
