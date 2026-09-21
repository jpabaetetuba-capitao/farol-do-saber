/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 10: Pontuação e Sinais Gráficos
   25 questões autorais calibradas pelo padrão recente da FGV.
   Foco: vírgula, dois-pontos, ponto e vírgula, travessão, parênteses,
   aspas, reticências, interrogação, exclamação e discurso direto.
========================================================== */

(function(){
    "use strict";

    const banco =
[
    {
        "id": "SEDUC-LP-PONT-001",
        "numero": 1,
        "subtopico": "Vírgula — vocativo",
        "dificuldade": "media",
        "pergunta": "Em uma mensagem institucional aos responsáveis, assinale a frase pontuada corretamente.",
        "alternativas": [
            "Senhores responsáveis, informamos que a reunião começará às 18h.",
            "Senhores, responsáveis informamos que a reunião começará às 18h.",
            "Senhores responsáveis informamos, que a reunião começará às 18h.",
            "Senhores responsáveis informamos que, a reunião começará às 18h.",
            "Senhores responsáveis informamos que a reunião, começará às 18h."
        ],
        "correta": 0,
        "feedbackAcerto": "O vocativo “Senhores responsáveis” deve ser isolado por vírgula.",
        "feedbackErro": "A questão explora um uso clássico da vírgula: isolar o termo pelo qual o interlocutor é chamado.",
        "analiseAlternativas": [
            "Correta. O vocativo está adequadamente isolado.",
            "Incorreta. A vírgula separa indevidamente o núcleo do vocativo de seu modificador.",
            "Incorreta. Não se separa a conjunção integrante “que” da oração que introduz.",
            "Incorreta. A vírgula depois de “que” é inadequada.",
            "Incorreta. Separa sujeito e verbo da oração subordinada."
        ],
        "dicaBanca": "A FGV gosta de usar vocativos em comunicados, bilhetes e falas diretas.",
        "pegadinha": "Nem toda pausa da fala vira vírgula; identifique a função sintática.",
        "memorizar2026": "Vocativo = termo de chamamento, geralmente isolado por vírgula(s).",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-002",
        "numero": 2,
        "subtopico": "Vírgula — sujeito e verbo",
        "dificuldade": "media",
        "pergunta": "Assinale a frase em que a vírgula foi empregada de acordo com a norma-padrão.",
        "alternativas": [
            "Os estudantes da turma, participaram da oficina.",
            "Os estudantes da turma participaram da oficina, mas saíram antes do encerramento.",
            "A equipe pedagógica, decidiu rever o cronograma.",
            "Os resultados da avaliação, foram divulgados ontem.",
            "A professora responsável pelo projeto, apresentou o relatório."
        ],
        "correta": 1,
        "feedbackAcerto": "A vírgula antes de “mas” separa orações coordenadas adversativas e não rompe a relação entre sujeito e verbo.",
        "feedbackErro": "O erro mais comum nas demais frases é separar o sujeito de seu predicado.",
        "analiseAlternativas": [
            "Incorreta. A vírgula separa sujeito e verbo.",
            "Correta. A oração adversativa introduzida por “mas” é separada por vírgula.",
            "Incorreta. A vírgula separa sujeito e verbo.",
            "Incorreta. A vírgula separa sujeito e locução verbal.",
            "Incorreta. A vírgula separa sujeito e verbo."
        ],
        "dicaBanca": "Antes de aceitar uma vírgula, verifique se ela está cortando uma ligação sintática básica.",
        "pegadinha": "A leitura oral pode induzir uma pausa onde a norma não admite vírgula.",
        "memorizar2026": "Não separe sujeito e verbo por vírgula sem motivo estrutural.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-003",
        "numero": 3,
        "subtopico": "Vírgula — oração adverbial deslocada",
        "dificuldade": "media",
        "pergunta": "Em um relatório escolar, a forma mais adequada é",
        "alternativas": [
            "Embora os dados tenham melhorado a direção manterá o acompanhamento.",
            "Embora os dados, tenham melhorado, a direção manterá o acompanhamento.",
            "Embora os dados tenham melhorado, a direção manterá o acompanhamento.",
            "Embora, os dados tenham melhorado a direção, manterá o acompanhamento.",
            "Embora os dados tenham melhorado a direção, manterá, o acompanhamento."
        ],
        "correta": 2,
        "feedbackAcerto": "A oração adverbial concessiva anteposta deve ser separada da oração principal por vírgula.",
        "feedbackErro": "A vírgula não deve quebrar o interior da subordinada nem separar sujeito e verbo da principal.",
        "analiseAlternativas": [
            "Incorreta. Falta a vírgula que delimita a oração adverbial anteposta.",
            "Incorreta. A vírgula interna separa o sujeito “os dados” do verbo “tenham melhorado”.",
            "Correta. A subordinada anteposta está adequadamente isolada.",
            "Incorreta. Há vírgulas em posições inadequadas.",
            "Incorreta. Separa sujeito e verbo e ainda fragmenta o predicado."
        ],
        "dicaBanca": "A FGV frequentemente testa a pontuação junto com a relação lógica entre as orações.",
        "pegadinha": "Primeiro identifique a oração inteira; só depois decida onde ela começa e termina.",
        "memorizar2026": "Oração adverbial anteposta: vírgula após o bloco deslocado.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-004",
        "numero": 4,
        "subtopico": "Vírgula — oração explicativa",
        "dificuldade": "alta",
        "pergunta": "Observe: “Os professores, que participaram da formação, receberão certificado.” Nesse contexto, as vírgulas indicam que",
        "alternativas": [
            "somente os professores que participaram receberão certificado.",
            "nenhum professor participou da formação.",
            "a expressão “que participaram da formação” restringe o grupo de professores.",
            "a informação entre vírgulas é explicativa e apresenta o grupo como um todo.",
            "as vírgulas são facultativas e não interferem no sentido."
        ],
        "correta": 3,
        "feedbackAcerto": "As vírgulas marcam oração adjetiva explicativa; a leitura tende a abranger o conjunto referido por “os professores”.",
        "feedbackErro": "A retirada ou inclusão das vírgulas pode mudar o valor restritivo/explicativo e, portanto, o sentido.",
        "analiseAlternativas": [
            "Incorreta. Essa leitura é típica da oração restritiva sem vírgulas.",
            "Incorreta. O enunciado não autoriza essa conclusão.",
            "Incorreta. A presença das vírgulas indica valor explicativo, não restritivo.",
            "Correta. A oração entre vírgulas acrescenta uma explicação ao referente.",
            "Incorreta. A pontuação interfere na interpretação."
        ],
        "dicaBanca": "FGV gosta de perguntar o efeito semântico da vírgula, não apenas a regra.",
        "pegadinha": "Vírgula não é só pausa: pode alterar o alcance da informação.",
        "memorizar2026": "Restritiva: sem vírgulas. Explicativa: isolada por vírgulas.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-005",
        "numero": 5,
        "subtopico": "Vírgula — restritiva x explicativa",
        "dificuldade": "alta",
        "pergunta": "Compare: I. “Os alunos que estudaram passaram.” II. “Os alunos, que estudaram, passaram.” A diferença principal é que",
        "alternativas": [
            "as duas frases têm rigorosamente o mesmo sentido.",
            "a frase I é incorreta por não usar vírgulas.",
            "a frase II é incorreta porque toda oração com “que” dispensa vírgula.",
            "a frase I afirma que todos os alunos estudaram.",
            "a frase I restringe o grupo; a frase II acrescenta uma explicação sobre o conjunto."
        ],
        "correta": 4,
        "feedbackAcerto": "A presença das vírgulas altera o tipo de oração adjetiva e a leitura do referente.",
        "feedbackErro": "Na primeira frase, a oração seleciona quais alunos; na segunda, funciona como explicação.",
        "analiseAlternativas": [
            "Incorreta. A pontuação modifica o sentido.",
            "Incorreta. A restritiva normalmente não usa vírgulas.",
            "Incorreta. Orações explicativas com “que” são isoladas por vírgulas.",
            "Incorreta. I não afirma que todos estudaram; seleciona os que estudaram.",
            "Correta. Resume a oposição entre restrição e explicação."
        ],
        "dicaBanca": "Quando a banca oferece duas versões quase iguais, procure o efeito de sentido da pontuação.",
        "pegadinha": "Uma vírgula pode mudar o grupo ao qual a informação se aplica.",
        "memorizar2026": "Sem vírgulas = recorte; com vírgulas = comentário explicativo.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-006",
        "numero": 6,
        "subtopico": "Vírgula — aposto explicativo",
        "dificuldade": "media",
        "pergunta": "Assinale a frase corretamente pontuada.",
        "alternativas": [
            "Belém, capital do Pará, recebe visitantes de várias regiões.",
            "Belém capital, do Pará recebe visitantes de várias regiões.",
            "Belém capital do Pará, recebe visitantes de várias regiões.",
            "Belém, capital do Pará recebe, visitantes de várias regiões.",
            "Belém capital do Pará recebe visitantes, de várias regiões."
        ],
        "correta": 0,
        "feedbackAcerto": "“Capital do Pará” é aposto explicativo e deve ser isolado por vírgulas.",
        "feedbackErro": "O aposto acrescenta uma explicação sobre “Belém” e não deve romper outras relações sintáticas.",
        "analiseAlternativas": [
            "Correta. O aposto explicativo está isolado corretamente.",
            "Incorreta. As vírgulas fragmentam o aposto.",
            "Incorreta. Falta a vírgula inicial do aposto e há separação entre sujeito e verbo.",
            "Incorreta. Falta a segunda vírgula do aposto e há vírgula indevida no complemento.",
            "Incorreta. A vírgula separa preposição e complemento."
        ],
        "dicaBanca": "Aposto e vocativo são dois alvos muito frequentes da vírgula em questões objetivas.",
        "pegadinha": "Identifique se o trecho explica um nome ou chama o interlocutor.",
        "memorizar2026": "Aposto explicativo = informação acessória isolada por vírgulas.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-007",
        "numero": 7,
        "subtopico": "Ponto e vírgula — enumeração complexa",
        "dificuldade": "alta",
        "pergunta": "Em um relatório, a pontuação que melhor organiza a enumeração é",
        "alternativas": [
            "Participaram da reunião professores de Belém, Pará, diretores de Santarém, Pará, e técnicos de Marabá, Pará.",
            "Participaram da reunião professores de Belém, Pará; diretores de Santarém, Pará; e técnicos de Marabá, Pará.",
            "Participaram da reunião professores; de Belém, Pará, diretores; de Santarém, Pará, e técnicos; de Marabá, Pará.",
            "Participaram da reunião: professores de Belém; Pará, diretores de Santarém; Pará, e técnicos de Marabá; Pará.",
            "Participaram da reunião professores de Belém: Pará; diretores de Santarém: Pará; e técnicos de Marabá: Pará."
        ],
        "correta": 1,
        "feedbackAcerto": "O ponto e vírgula separa com clareza itens de uma enumeração que já contêm vírgulas internas.",
        "feedbackErro": "Esse é um dos usos mais típicos do ponto e vírgula em textos administrativos.",
        "analiseAlternativas": [
            "Incorreta. A sequência fica ambígua porque todos os itens são separados apenas por vírgulas.",
            "Correta. O ponto e vírgula hierarquiza adequadamente os itens.",
            "Incorreta. Os cortes ocorrem dentro dos próprios grupos nominais.",
            "Incorreta. A pontuação fragmenta “Belém, Pará” e “Santarém, Pará”.",
            "Incorreta. Os dois-pontos não têm função adequada nesses pontos."
        ],
        "dicaBanca": "FGV costuma cobrar ponto e vírgula em períodos longos e enumerações com vírgulas internas.",
        "pegadinha": "Use o sinal para separar blocos maiores, não para quebrar unidades internas.",
        "memorizar2026": "Ponto e vírgula = separação intermediária entre vírgula e ponto.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-008",
        "numero": 8,
        "subtopico": "Dois-pontos — explicação",
        "dificuldade": "media",
        "pergunta": "Assinale a frase em que os dois-pontos foram empregados adequadamente.",
        "alternativas": [
            "A escola decidiu: porque o prazo era curto.",
            "A escola: decidiu ampliar o atendimento.",
            "A escola tinha uma prioridade: garantir o atendimento aos estudantes.",
            "A escola tinha: uma prioridade garantir o atendimento aos estudantes.",
            "A escola tinha uma prioridade garantir: o atendimento aos estudantes."
        ],
        "correta": 2,
        "feedbackAcerto": "Os dois-pontos introduzem uma explicação/especificação do termo “uma prioridade”.",
        "feedbackErro": "O sinal deve estabelecer relação clara com o segmento anterior e não separar termos essenciais arbitrariamente.",
        "analiseAlternativas": [
            "Incorreta. Os dois-pontos não substituem a relação causal introduzida por “porque”.",
            "Incorreta. Separa sujeito e verbo.",
            "Correta. O segundo segmento explicita qual era a prioridade.",
            "Incorreta. Separa verbo e complemento.",
            "Incorreta. O corte ocorre dentro do complemento."
        ],
        "dicaBanca": "Pergunte o que vem depois dos dois-pontos: explicação, enumeração, fala ou consequência anunciada?",
        "pegadinha": "Não use dois-pontos apenas porque há uma pausa forte na leitura.",
        "memorizar2026": "Dois-pontos anunciam algo que desenvolve ou especifica o que veio antes.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-009",
        "numero": 9,
        "subtopico": "Travessão — inserção explicativa",
        "dificuldade": "media",
        "pergunta": "Em “A avaliação — segundo a coordenação — será aplicada na sexta-feira”, os travessões",
        "alternativas": [
            "separam o sujeito do verbo e tornam a frase incorreta.",
            "marcam obrigatoriamente uma fala de personagem.",
            "substituem ponto final e encerram o período.",
            "isolam uma informação intercalada, com efeito semelhante ao de vírgulas ou parênteses.",
            "indicam que a expressão “segundo a coordenação” é o núcleo do predicado."
        ],
        "correta": 3,
        "feedbackAcerto": "Os travessões isolam uma expressão intercalada e lhe conferem destaque.",
        "feedbackErro": "Além de marcar falas, o travessão pode funcionar como sinal de inserção explicativa.",
        "analiseAlternativas": [
            "Incorreta. O trecho intercalado justifica a separação gráfica sem romper a estrutura.",
            "Incorreta. Travessão não serve apenas para discurso direto.",
            "Incorreta. O período continua depois do segundo travessão.",
            "Correta. O segmento intercalado é destacado sem alterar a estrutura principal.",
            "Incorreta. A expressão é acessória."
        ],
        "dicaBanca": "A FGV explora a possibilidade de trocar vírgulas, parênteses e travessões e pergunta pelo efeito.",
        "pegadinha": "Sinais substituíveis nem sempre produzem o mesmo grau de destaque.",
        "memorizar2026": "Travessões intercalados = inserção destacada dentro da frase.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-010",
        "numero": 10,
        "subtopico": "Parênteses — informação acessória",
        "dificuldade": "media",
        "pergunta": "No trecho “A escola (fundada em 1985) passou por reforma”, os parênteses servem para",
        "alternativas": [
            "indicar uma pergunta do autor.",
            "marcar uma citação literal.",
            "separar uma oração principal de seu sujeito.",
            "introduzir uma fala direta.",
            "isolar uma informação adicional, acessória ao núcleo da frase."
        ],
        "correta": 4,
        "feedbackAcerto": "Os parênteses inserem uma informação secundária sem interromper definitivamente a construção principal.",
        "feedbackErro": "O conteúdo entre parênteses pode ser relevante, mas é apresentado como acessório em relação ao eixo da frase.",
        "analiseAlternativas": [
            "Incorreta. Não há interrogação.",
            "Incorreta. Não há marca de citação.",
            "Incorreta. A estrutura principal permanece “A escola passou por reforma”.",
            "Incorreta. Não há discurso direto.",
            "Correta. “Fundada em 1985” é informação adicional."
        ],
        "dicaBanca": "Compare o grau de destaque: parênteses tendem a criar um afastamento maior do fluxo principal.",
        "pegadinha": "Informação acessória não significa informação inútil; significa que não é o núcleo sintático.",
        "memorizar2026": "Parênteses = comentário, explicação ou dado adicional inserido.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-011",
        "numero": 11,
        "subtopico": "Aspas — uso não literal",
        "dificuldade": "media",
        "pergunta": "Em “O novo sistema prometia ser ‘simples’, mas exigia seis etapas para cada cadastro”, as aspas em “simples” sugerem",
        "alternativas": [
            "distanciamento crítico ou uso irônico da palavra.",
            "erro obrigatório de ortografia.",
            "início de uma oração subordinada.",
            "enumeração de etapas.",
            "fala direta de um personagem identificado."
        ],
        "correta": 0,
        "feedbackAcerto": "As aspas destacam a palavra e, pelo contraste com o contexto, produzem distanciamento/ironia.",
        "feedbackErro": "FGV costuma associar sinais gráficos a efeitos de sentido, especialmente aspas e travessões.",
        "analiseAlternativas": [
            "Correta. O contexto questiona o valor literal de “simples”.",
            "Incorreta. Aspas não indicam erro ortográfico por si só.",
            "Incorreta. Não têm função sintática de subordinação.",
            "Incorreta. Não há enumeração marcada pelas aspas.",
            "Incorreta. O trecho não identifica uma fala direta específica."
        ],
        "dicaBanca": "Quando houver aspas, observe se marcam citação, título, estrangeirismo, destaque ou ironia.",
        "pegadinha": "O mesmo sinal pode ter funções diferentes conforme o contexto.",
        "memorizar2026": "Aspas podem marcar uso especial, não literal ou citado de uma expressão.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-012",
        "numero": 12,
        "subtopico": "Reticências — efeito de suspensão",
        "dificuldade": "media",
        "pergunta": "No enunciado “Talvez, se todos colaborarem...”, as reticências indicam principalmente",
        "alternativas": [
            "conclusão categórica da ideia.",
            "suspensão do pensamento e abertura para continuação ou inferência.",
            "enumeração completa e fechada.",
            "erro de concordância deliberado.",
            "mudança obrigatória de interlocutor."
        ],
        "correta": 1,
        "feedbackAcerto": "As reticências deixam a formulação em suspensão e permitem que o leitor projete uma continuação.",
        "feedbackErro": "Esse sinal é fortemente associado a hesitação, interrupção, incompletude e efeito expressivo.",
        "analiseAlternativas": [
            "Incorreta. O enunciado não fecha a conclusão.",
            "Correta. Há suspensão intencional da ideia.",
            "Incorreta. Não há enumeração concluída.",
            "Incorreta. Reticências não sinalizam erro gramatical.",
            "Incorreta. Não há troca obrigatória de interlocutor."
        ],
        "dicaBanca": "FGV frequentemente pergunta qual efeito expressivo as reticências produzem.",
        "pegadinha": "Não reduza reticências a “pausa longa”; considere o efeito semântico.",
        "memorizar2026": "Reticências = suspensão, hesitação, continuidade sugerida ou interrupção.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-013",
        "numero": 13,
        "subtopico": "Interrogação — pergunta direta x indireta",
        "dificuldade": "media",
        "pergunta": "Assinale a frase pontuada corretamente.",
        "alternativas": [
            "A diretora perguntou: se todos haviam recebido o aviso?",
            "A diretora perguntou se todos haviam recebido o aviso?",
            "A diretora perguntou se todos haviam recebido o aviso.",
            "A diretora, perguntou se todos haviam recebido o aviso?",
            "A diretora perguntou, se todos haviam recebido o aviso."
        ],
        "correta": 2,
        "feedbackAcerto": "Uma pergunta indireta integra uma frase declarativa e, em regra, termina com ponto, não com interrogação.",
        "feedbackErro": "A presença do verbo “perguntou” não transforma automaticamente a frase toda em pergunta direta.",
        "analiseAlternativas": [
            "Incorreta. Os dois-pontos e a interrogação não correspondem à construção indireta apresentada.",
            "Incorreta. A frase contém pergunta indireta.",
            "Correta. A oração interrogativa indireta integra uma declaração.",
            "Incorreta. Além da interrogação, há vírgula entre sujeito e verbo.",
            "Incorreta. A vírgula antes de “se” é inadequada."
        ],
        "dicaBanca": "A FGV explora a diferença entre forma interrogativa e valor semântico de pergunta.",
        "pegadinha": "Nem toda frase que relata uma pergunta termina com “?”.",
        "memorizar2026": "Pergunta direta: “Você vem?”; indireta: “Perguntei se você vinha.”",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-014",
        "numero": 14,
        "subtopico": "Exclamação — efeito expressivo",
        "dificuldade": "media",
        "pergunta": "Em “Que excelente notícia!”, o ponto de exclamação contribui para",
        "alternativas": [
            "transformar a frase em pergunta.",
            "neutralizar a avaliação do falante.",
            "indicar obrigatoriamente uma ordem.",
            "intensificar a expressão de emoção ou avaliação.",
            "marcar uma citação literal."
        ],
        "correta": 3,
        "feedbackAcerto": "O ponto de exclamação reforça a atitude emotiva/avaliativa do enunciador.",
        "feedbackErro": "Esse sinal pode acompanhar surpresa, admiração, alegria, indignação e também ordens, conforme o contexto.",
        "analiseAlternativas": [
            "Incorreta. Não há estrutura interrogativa.",
            "Incorreta. O sinal intensifica, não neutraliza, a avaliação.",
            "Incorreta. Exclamação não implica obrigatoriamente imperativo.",
            "Correta. O sinal reforça a carga expressiva.",
            "Incorreta. Aspas seriam o sinal típico de citação."
        ],
        "dicaBanca": "Leia a frase inteira: o sinal contribui para o efeito, mas não cria sozinho a intenção comunicativa.",
        "pegadinha": "Exclamação não é sinônimo de grito nem de ordem.",
        "memorizar2026": "“!” intensifica valor expressivo conforme o contexto.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-015",
        "numero": 15,
        "subtopico": "Discurso direto — dois-pontos e travessão",
        "dificuldade": "media",
        "pergunta": "Assinale a forma adequada de introduzir uma fala direta em um texto narrativo.",
        "alternativas": [
            "A professora explicou, — a atividade será entregue amanhã.",
            "A professora explicou; — a atividade será entregue amanhã.",
            "A professora explicou —: a atividade será entregue amanhã.",
            "A professora explicou? — A atividade será entregue amanhã.",
            "A professora explicou:\n— A atividade será entregue amanhã."
        ],
        "correta": 4,
        "feedbackAcerto": "Os dois-pontos podem anunciar a fala, e o travessão pode marcar o início do discurso direto.",
        "feedbackErro": "A pontuação do discurso direto depende da construção, mas essa combinação é padrão e clara.",
        "analiseAlternativas": [
            "Incorreta. A vírgula antes do travessão não exerce adequadamente a função de anunciar a fala.",
            "Incorreta. O ponto e vírgula não é o sinal apropriado para anunciar a fala nessa estrutura.",
            "Incorreta. A sequência “—:” é inadequada.",
            "Incorreta. A interrogação não corresponde ao enunciado narrativo.",
            "Correta. Dois-pontos anunciam e travessão introduz a fala."
        ],
        "dicaBanca": "FGV pode pedir reescritura de discurso direto mantendo função e pontuação coerentes.",
        "pegadinha": "Não existe um único modelo de discurso direto, mas os sinais precisam combinar com a estrutura.",
        "memorizar2026": "Dois-pontos podem anunciar; travessão ou aspas podem delimitar a fala.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-016",
        "numero": 16,
        "subtopico": "Pontuação e sentido — vírgula decisiva",
        "dificuldade": "alta",
        "pergunta": "Compare: I. “Não, espere.” II. “Não espere.” A vírgula faz com que",
        "alternativas": [
            "I contenha uma negativa seguida de pedido para esperar, enquanto II proíbe a espera.",
            "as duas frases tenham o mesmo sentido.",
            "I seja gramaticalmente incorreta.",
            "II passe a ser uma pergunta.",
            "I contenha obrigatoriamente um vocativo."
        ],
        "correta": 0,
        "feedbackAcerto": "A vírgula separa a palavra-resposta “não” do imperativo “espere”, produzindo sentido oposto ao da frase sem vírgula.",
        "feedbackErro": "Esse tipo de item exemplifica como pontuação pode alterar diretamente o conteúdo proposicional.",
        "analiseAlternativas": [
            "Correta. A pontuação modifica a relação entre “não” e o verbo.",
            "Incorreta. Os sentidos são diferentes.",
            "Incorreta. A frase I é perfeitamente possível.",
            "Incorreta. Não há interrogação.",
            "Incorreta. “Não” não é vocativo."
        ],
        "dicaBanca": "Questões FGV podem ser resolvidas pela leitura semântica: pergunte o que cada versão realmente diz.",
        "pegadinha": "Uma única vírgula pode inverter a orientação prática da frase.",
        "memorizar2026": "Pontuação organiza sintaxe e também produz sentido.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-017",
        "numero": 17,
        "subtopico": "Pois — explicativo x conclusivo",
        "dificuldade": "alta",
        "pergunta": "Assinale a alternativa em que a pontuação de “pois” está adequada ao valor conclusivo.",
        "alternativas": [
            "Ele saiu mais cedo, pois estava cansado.",
            "Ele cumpriu todas as etapas; foi, pois, aprovado.",
            "Ele, pois estava cansado, saiu mais cedo.",
            "Ele cumpriu pois, todas as etapas e foi aprovado.",
            "Ele cumpriu todas as etapas pois foi, aprovado."
        ],
        "correta": 1,
        "feedbackAcerto": "Com valor conclusivo e deslocado no interior da oração, “pois” aparece isolado por vírgulas.",
        "feedbackErro": "No valor explicativo/causal, “pois” costuma introduzir a oração e não fica isolado da mesma forma.",
        "analiseAlternativas": [
            "Incorreta. Aqui “pois” tem valor explicativo/causal, não conclusivo.",
            "Correta. “Pois” conclusivo está intercalado e isolado.",
            "Incorreta. A construção mistura valor e pontuação de modo inadequado.",
            "Incorreta. As vírgulas quebram a estrutura.",
            "Incorreta. Há pontuação inadequada e alteração de relação lógica."
        ],
        "dicaBanca": "FGV gosta de combinar pontuação e semântica de conectivos.",
        "pegadinha": "Não decore apenas “vírgula antes de pois”; identifique o valor do conectivo.",
        "memorizar2026": "“Pois” explicativo ≠ “pois” conclusivo; a posição e a pontuação ajudam a distingui-los.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-018",
        "numero": 18,
        "subtopico": "Conectivo intercalado — portanto",
        "dificuldade": "media",
        "pergunta": "Assinale a frase pontuada adequadamente.",
        "alternativas": [
            "O prazo terminou portanto os documentos não serão aceitos.",
            "O prazo, terminou portanto, os documentos não serão aceitos.",
            "O prazo terminou; os documentos, portanto, não serão aceitos.",
            "O prazo terminou, os documentos portanto não serão aceitos.",
            "O prazo terminou portanto; os documentos, não serão aceitos."
        ],
        "correta": 2,
        "feedbackAcerto": "“Portanto” intercalado é isolado por vírgulas; o ponto e vírgula separa duas orações independentes relacionadas.",
        "feedbackErro": "A alternativa organiza adequadamente os dois blocos e o conectivo conclusivo.",
        "analiseAlternativas": [
            "Incorreta. Falta delimitação entre as orações e do conectivo.",
            "Incorreta. Há vírgula indevida entre sujeito e verbo.",
            "Correta. A estrutura está clara e normativa.",
            "Incorreta. Há justaposição inadequada de orações e falta isolamento de “portanto”.",
            "Incorreta. O ponto e vírgula está em posição inadequada e há vírgula entre sujeito e verbo."
        ],
        "dicaBanca": "Conectivos deslocados como “portanto”, “contudo” e “entretanto” costumam ser isolados.",
        "pegadinha": "Não confunda pontuação do conectivo com a separação entre as próprias orações.",
        "memorizar2026": "Conectivo intercalado = isolamento por vírgulas.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-019",
        "numero": 19,
        "subtopico": "Vocativo — efeito de sentido",
        "dificuldade": "alta",
        "pergunta": "Compare: I. “Vamos comer, crianças!” II. “Vamos comer crianças!” A vírgula em I",
        "alternativas": [
            "é facultativa e não interfere na leitura.",
            "separa o sujeito do verbo.",
            "marca uma oração explicativa.",
            "isola o vocativo “crianças” e evita que ele seja lido como objeto do verbo.",
            "transforma a frase em pergunta."
        ],
        "correta": 3,
        "feedbackAcerto": "A vírgula identifica “crianças” como interlocutor, não como complemento do verbo “comer”.",
        "feedbackErro": "É um exemplo clássico de mudança de sentido pela pontuação e útil para reconhecer vocativo.",
        "analiseAlternativas": [
            "Incorreta. A ausência da vírgula produz outra leitura.",
            "Incorreta. “Crianças” não é sujeito de “vamos comer”.",
            "Incorreta. Não há oração adjetiva.",
            "Correta. A vírgula marca o chamamento.",
            "Incorreta. O sinal final é de exclamação."
        ],
        "dicaBanca": "Quando houver substantivo após uma forma verbal, teste se ele é complemento ou chamamento.",
        "pegadinha": "Pontuação pode impedir uma leitura sintaticamente possível, mas semanticamente indesejada.",
        "memorizar2026": "Vocativo isolado = interlocutor claramente marcado.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-020",
        "numero": 20,
        "subtopico": "Dois-pontos — enumeração anunciada",
        "dificuldade": "media",
        "pergunta": "Assinale a frase em que os dois-pontos anunciam corretamente uma enumeração.",
        "alternativas": [
            "A escola: adquiriu computadores, livros e projetores.",
            "A escola adquiriu: computadores, livros e projetores.",
            "A escola adquiriu computadores: livros e projetores.",
            "A escola adquiriu computadores, livros: e projetores.",
            "A escola adquiriu três itens: computadores, livros e projetores."
        ],
        "correta": 4,
        "feedbackAcerto": "A expressão “três itens” cria uma expectativa que é desenvolvida pela enumeração após os dois-pontos.",
        "feedbackErro": "Os dois-pontos funcionam melhor quando o primeiro segmento anuncia semanticamente o que vem depois.",
        "analiseAlternativas": [
            "Incorreta. Separa sujeito e verbo.",
            "Incorreta. Separa verbo e complemento sem elemento anunciador.",
            "Incorreta. Fragmenta a enumeração.",
            "Incorreta. Fragmenta a coordenação.",
            "Correta. A enumeração explica “três itens”."
        ],
        "dicaBanca": "Antes dos dois-pontos, procure um termo que anuncie explicação, lista, fala ou consequência.",
        "pegadinha": "Não insira dois-pontos entre verbo e complemento apenas porque haverá uma lista.",
        "memorizar2026": "Dois-pontos exigem relação de anúncio/desenvolvimento.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-021",
        "numero": 21,
        "subtopico": "Vírgula — expressão intercalada",
        "dificuldade": "media",
        "pergunta": "Assinale a frase corretamente pontuada.",
        "alternativas": [
            "Os alunos, segundo a direção, receberão o material na segunda-feira.",
            "Os alunos segundo, a direção receberão o material na segunda-feira.",
            "Os alunos segundo a direção, receberão o material na segunda-feira.",
            "Os alunos, segundo a direção receberão, o material na segunda-feira.",
            "Os alunos segundo a direção receberão, o material na segunda-feira."
        ],
        "correta": 0,
        "feedbackAcerto": "A expressão intercalada “segundo a direção” deve ser isolada por vírgulas.",
        "feedbackErro": "Retirando o segmento intercalado, a estrutura principal permanece “Os alunos receberão o material”.",
        "analiseAlternativas": [
            "Correta. A intercalação está delimitada.",
            "Incorreta. A vírgula quebra a expressão preposicionada.",
            "Incorreta. Falta a vírgula inicial da intercalação.",
            "Incorreta. Falta a segunda vírgula no ponto correto e aparece outra indevida.",
            "Incorreta. Separa verbo e complemento."
        ],
        "dicaBanca": "Um bom teste é retirar o trecho intercalado e verificar se a frase-base continua íntegra.",
        "pegadinha": "A expressão intercalada deve ter começo e fim claramente marcados.",
        "memorizar2026": "Termo intercalado = isolamento bilateral por vírgulas, travessões ou parênteses.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-022",
        "numero": 22,
        "subtopico": "Vírgula — coordenação adversativa",
        "dificuldade": "media",
        "pergunta": "Assinale a frase corretamente pontuada.",
        "alternativas": [
            "A equipe revisou o projeto mas, manteve o cronograma.",
            "A equipe revisou o projeto, mas manteve o cronograma.",
            "A equipe, revisou o projeto mas manteve o cronograma.",
            "A equipe revisou, o projeto mas manteve o cronograma.",
            "A equipe revisou o projeto mas manteve, o cronograma."
        ],
        "correta": 1,
        "feedbackAcerto": "A oração introduzida por “mas” é normalmente separada por vírgula da oração anterior.",
        "feedbackErro": "As demais opções inserem vírgulas em posições que quebram sujeito, verbo ou complementos.",
        "analiseAlternativas": [
            "Incorreta. A vírgula depois de “mas” é inadequada nessa estrutura.",
            "Correta. A adversativa está adequadamente separada.",
            "Incorreta. Separa sujeito e verbo.",
            "Incorreta. Separa verbo e objeto.",
            "Incorreta. Separa verbo e objeto."
        ],
        "dicaBanca": "Conjunções adversativas são ponto clássico de vírgula em provas.",
        "pegadinha": "Não basta localizar “mas”: confira se não há outra vírgula indevida no período.",
        "memorizar2026": "Antes de “mas”, em coordenação adversativa, usa-se normalmente vírgula.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-023",
        "numero": 23,
        "subtopico": "Vírgula antes de “e” — sujeitos diferentes",
        "dificuldade": "alta",
        "pergunta": "Em qual frase a vírgula antes de “e” é justificável por separar orações com sujeitos diferentes?",
        "alternativas": [
            "A professora explicou o conteúdo, e revisou os exercícios.",
            "Os alunos leram o texto, e responderam às questões.",
            "A professora concluiu a exposição, e os alunos iniciaram a atividade.",
            "A direção publicou, e divulgou o edital.",
            "A escola comprou livros, e computadores."
        ],
        "correta": 2,
        "feedbackAcerto": "Na terceira alternativa, as orações têm sujeitos diferentes: “a professora” e “os alunos”.",
        "feedbackErro": "A vírgula antes de “e” não é automática; pode ser usada em contextos específicos, entre eles a mudança de sujeito e maior autonomia entre orações.",
        "analiseAlternativas": [
            "Incorreta. O sujeito é o mesmo nas duas ações; a vírgula é desnecessária.",
            "Incorreta. O sujeito é o mesmo nas duas ações.",
            "Correta. Há mudança de sujeito entre as orações.",
            "Incorreta. A vírgula separa dois verbos com o mesmo sujeito sem necessidade.",
            "Incorreta. Separa itens simples de um mesmo complemento."
        ],
        "dicaBanca": "FGV evita regras absolutas sobre “e”: observe sujeito, extensão e efeito de leitura.",
        "pegadinha": "“Nunca há vírgula antes de e” é uma regra falsa.",
        "memorizar2026": "Antes de “e”, a vírgula pode aparecer quando há mudança de sujeito ou razões expressivas/estruturais.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-024",
        "numero": 24,
        "subtopico": "Ponto e vírgula — orações extensas",
        "dificuldade": "alta",
        "pergunta": "Assinale a alternativa em que o ponto e vírgula melhora a organização de duas orações longas que já contêm vírgulas internas.",
        "alternativas": [
            "A equipe, após revisar os dados; apresentou o relatório final, na sexta-feira.",
            "A equipe apresentou; após revisar os dados, o relatório final na sexta-feira.",
            "A equipe apresentou o relatório final, após revisar os dados, e; a direção iniciou a análise.",
            "A equipe apresentou o relatório final, após revisar os dados; a direção, por sua vez, iniciou a análise.",
            "A equipe; apresentou o relatório final, após revisar os dados, a direção iniciou a análise."
        ],
        "correta": 3,
        "feedbackAcerto": "O ponto e vírgula separa dois blocos oracionais relativamente autônomos, ambos com vírgulas internas.",
        "feedbackErro": "O sinal ajuda a hierarquizar a estrutura sem fragmentar sujeito e predicado.",
        "analiseAlternativas": [
            "Incorreta. O ponto e vírgula separa sujeito e verbo.",
            "Incorreta. Separa o verbo de seus complementos.",
            "Incorreta. A posição após “e” é inadequada.",
            "Correta. Os dois blocos ficam claramente organizados.",
            "Incorreta. O sinal separa sujeito e verbo e ainda deixa duas orações justapostas sem delimitação adequada."
        ],
        "dicaBanca": "Quando o período já contém muitas vírgulas internas, o ponto e vírgula pode separar blocos maiores.",
        "pegadinha": "Ponto e vírgula não é “vírgula forte” usada aleatoriamente; ele deve respeitar as unidades sintáticas.",
        "memorizar2026": "Use ponto e vírgula para organizar blocos de maior autonomia.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    },
    {
        "id": "SEDUC-LP-PONT-025",
        "numero": 25,
        "subtopico": "Questão integradora — pontuação completa",
        "dificuldade": "alta",
        "pergunta": "Assinale a alternativa inteiramente correta quanto à pontuação.",
        "alternativas": [
            "Professores, que participaram da reunião entregaram os relatórios; ontem.",
            "Professores que participaram, da reunião, entregaram os relatórios ontem.",
            "Professores que participaram da reunião entregaram, os relatórios ontem.",
            "Professores que participaram da reunião; entregaram os relatórios, ontem.",
            "Professores que participaram da reunião entregaram os relatórios ontem."
        ],
        "correta": 4,
        "feedbackAcerto": "A oração “que participaram da reunião” é restritiva e não deve ser isolada por vírgulas; também não há motivo para separar verbo e complemento ou inserir ponto e vírgula.",
        "feedbackErro": "A alternativa correta mostra que, muitas vezes, a melhor pontuação é não inserir sinal onde a sintaxe não o exige.",
        "analiseAlternativas": [
            "Incorreta. Falta uma segunda vírgula para uma leitura explicativa e o ponto e vírgula antes de “ontem” é inadequado.",
            "Incorreta. As vírgulas fragmentam a oração restritiva.",
            "Incorreta. Separa verbo e objeto direto.",
            "Incorreta. Separa sujeito e predicado com ponto e vírgula e isola advérbio curto sem necessidade.",
            "Correta. A estrutura está clara, coesa e sem sinais indevidos."
        ],
        "dicaBanca": "Questões finais da FGV costumam premiar a alternativa sem “pontuação decorativa”.",
        "pegadinha": "Pontuar bem também significa saber quando não usar sinal.",
        "memorizar2026": "Pontuação correta respeita sintaxe, sentido e efeito textual.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — tópico Pontuação e sinais gráficos."
    }
];

    window.seducLinguaPortuguesaPontuacaoSinaisGraficos2026 = banco;
})();
