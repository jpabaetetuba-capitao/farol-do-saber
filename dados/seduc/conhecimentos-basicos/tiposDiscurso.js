/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 12: Tipos de Discurso
   Discurso direto • indireto • indireto livre • transposição
   25 questões autorais calibradas por provas oficiais FGV de professores.
========================================================== */

(function(){
    "use strict";
    const banco =
[
    {
        "id": "SEDUC-LP-DISC-001",
        "numero": 1,
        "subtopico": "Discurso direto — identificação",
        "dificuldade": "media",
        "pergunta": "Leia: A coordenadora fechou a pasta e avisou: — Amanhã divulgaremos o resultado. O segmento após os dois-pontos caracteriza discurso direto porque",
        "alternativas": [
            "reproduz a fala da personagem em sua própria voz, com marcas gráficas de citação.",
            "resume a fala da personagem por meio da voz do narrador.",
            "mistura a voz do narrador e a da personagem sem marca introdutória.",
            "apresenta apenas o pensamento interior da personagem.",
            "elimina referências de pessoa, tempo e lugar da fala original."
        ],
        "correta": 0,
        "feedbackAcerto": "A fala aparece autonomamente, marcada por dois-pontos e travessão.",
        "feedbackErro": "Observe quem enuncia as palavras: a própria personagem, e não o narrador.",
        "analiseAlternativas": [
            "Correta. A fala aparece autonomamente, marcada por dois-pontos e travessão.",
            "Incorreta. Isso descreve o discurso indireto.",
            "Incorreta. Essa fusão é característica do indireto livre.",
            "Incorreta. O trecho reproduz fala exteriorizada.",
            "Incorreta. O discurso direto preserva o centro dêitico da fala original."
        ],
        "dicaBanca": "A FGV cobra forma e efeito do discurso, não só pontuação.",
        "pegadinha": "Travessão pode ter outras funções; confirme que há fala reproduzida.",
        "memorizar2026": "Direto = personagem fala com voz própria; marcas usuais: travessão, aspas e dois-pontos.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-002",
        "numero": 2,
        "subtopico": "Discurso indireto — identificação",
        "dificuldade": "media",
        "pergunta": "Em “A diretora informou que a reunião começaria às oito horas”, há discurso indireto porque",
        "alternativas": [
            "a fala original é reproduzida entre aspas, sem interferência do narrador.",
            "o narrador incorpora o conteúdo da fala à sua própria construção sintática.",
            "não existe verbo que introduza a fala relatada.",
            "a personagem assume a narração em primeira pessoa.",
            "o trecho reproduz literalmente a entonação da fala original."
        ],
        "correta": 1,
        "feedbackAcerto": "A fala foi subordinada ao verbo “informou” e integrada à sintaxe do narrador.",
        "feedbackErro": "No indireto, o narrador relata o conteúdo, em geral com oração introduzida por “que” ou “se”.",
        "analiseAlternativas": [
            "Incorreta. Aspas e autonomia da fala apontariam para discurso direto.",
            "Correta. A fala foi subordinada ao verbo “informou” e integrada à sintaxe do narrador.",
            "Incorreta. “informou” é verbo de elocução.",
            "Incorreta. A personagem não assume a narração.",
            "Incorreta. Não há literalidade nem reprodução integral da entonação."
        ],
        "dicaBanca": "Procure verbo dicendi + integração sintática do conteúdo falado.",
        "pegadinha": "A presença de “que” ajuda, mas não basta sozinha; ele pode ter outras funções.",
        "memorizar2026": "Indireto = narrador relata a fala e adapta pessoa, tempo e espaço quando necessário.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-003",
        "numero": 3,
        "subtopico": "Discurso indireto livre — identificação",
        "dificuldade": "alta",
        "pergunta": "Leia: “Helena saiu da sala devagar. Outra reunião perdida. Por que ninguém a escutava? Amanhã não voltaria ali.” O trecho final exemplifica principalmente",
        "alternativas": [
            "discurso direto, porque há uma pergunta.",
            "discurso indireto, porque existe verbo de elocução explícito.",
            "discurso indireto livre, pois a perspectiva da personagem se funde à narração sem marca introdutória explícita.",
            "narração objetiva, sem presença da consciência da personagem.",
            "citação, porque o narrador reproduz palavras de uma fonte externa."
        ],
        "correta": 2,
        "feedbackAcerto": "A narração em terceira pessoa incorpora a perspectiva interior de Helena sem “ela pensou que...”.",
        "feedbackErro": "A pergunta e o valor avaliativo parecem vir da personagem, mas surgem dentro da voz narrativa.",
        "analiseAlternativas": [
            "Incorreta. Pergunta não transforma automaticamente o trecho em discurso direto.",
            "Incorreta. Não há verbo de elocução introduzindo oração subordinada.",
            "Correta. A narração em terceira pessoa incorpora a perspectiva interior de Helena sem “ela pensou que...”.",
            "Incorreta. A subjetividade da personagem é perceptível.",
            "Incorreta. Não há fonte externa citada."
        ],
        "dicaBanca": "A FGV já cobrou diretamente o discurso indireto livre em prova de professor.",
        "pegadinha": "Ausência de travessão não significa automaticamente discurso indireto.",
        "memorizar2026": "Indireto livre = voz do narrador + perspectiva da personagem, sem fórmula explícita de introdução.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-004",
        "numero": 4,
        "subtopico": "Direto → indireto — pessoa verbal",
        "dificuldade": "media",
        "pergunta": "O professor disse aos alunos: “Eu revisarei as notas.” Considerando relato posterior, a transposição adequada é",
        "alternativas": [
            "O professor disse aos alunos: ele revisará as notas.",
            "O professor disse aos alunos que eu revisaria as notas.",
            "O professor disse aos alunos que eles revisariam as notas.",
            "O professor disse aos alunos que revisaria as notas.",
            "O professor disse aos alunos que reviso as notas."
        ],
        "correta": 3,
        "feedbackAcerto": "A primeira pessoa da fala original passa a referir-se ao professor, e “revisaria” preserva a posterioridade em relação a “disse”.",
        "feedbackErro": "Identifique quem é o referente de “eu”: o professor, não o narrador nem os alunos.",
        "analiseAlternativas": [
            "Incorreta. Mistura marcas de fala direta e indireta.",
            "Incorreta. “eu” passaria a indicar o narrador do relato.",
            "Incorreta. Altera o agente da ação.",
            "Correta. A primeira pessoa da fala original passa a referir-se ao professor, e “revisaria” preserva a posterioridade em relação a “disse”.",
            "Incorreta. O presente altera a correlação temporal nesse contexto."
        ],
        "dicaBanca": "Na transposição, acompanhe pronome, pessoa verbal e tempo ao mesmo tempo.",
        "pegadinha": "Não transforme mecanicamente; preserve primeiro quem fala e a relação temporal.",
        "memorizar2026": "Direto → indireto: a 1ª pessoa da personagem costuma passar à 3ª pessoa no relato.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-005",
        "numero": 5,
        "subtopico": "Direto → indireto — dêiticos",
        "dificuldade": "alta",
        "pergunta": "Na segunda-feira, Ana disse: “Voltarei aqui amanhã.” Na quarta-feira, ao relatar essa fala, a forma mais adequada é",
        "alternativas": [
            "Ana disse que voltaria ali no dia seguinte.",
            "Ana disse que voltará aqui amanhã.",
            "Ana disse que voltaria aqui ontem.",
            "Ana disse que voltaria ali hoje.",
            "Ana disse: que voltaria lá amanhã."
        ],
        "correta": 0,
        "feedbackAcerto": "Ajusta adequadamente espaço (“aqui”→“ali”) e tempo (“amanhã”→“no dia seguinte”).",
        "feedbackErro": "Atenção: a resposta correta é a que converte “aqui” e “amanhã” para o novo centro enunciativo.",
        "analiseAlternativas": [
            "Correta. Ajusta adequadamente espaço e tempo ao novo centro de enunciação.",
            "Incorreta. Mantém os dêiticos da fala original.",
            "Incorreta. “ontem” altera a relação temporal prevista.",
            "Incorreta. “hoje” passa a apontar para o momento do relato.",
            "Incorreta. Mistura pontuação de discurso direto com sintaxe de indireto."
        ],
        "dicaBanca": "Monte uma linha do tempo: fala original x momento do relato.",
        "pegadinha": "“amanhã” não vira automaticamente “ontem”; depende do momento do relato.",
        "memorizar2026": "aqui→ali/lá; agora→então; hoje→naquele dia; amanhã→no dia seguinte, conforme o contexto.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-006",
        "numero": 6,
        "subtopico": "Imperativo no discurso indireto",
        "dificuldade": "alta",
        "pergunta": "A professora ordenou ao estudante: “Entregue o relatório agora.” A passagem correta para o discurso indireto é",
        "alternativas": [
            "A professora ordenou ao estudante que entrega o relatório agora.",
            "A professora ordenou ao estudante que entregasse o relatório naquele momento.",
            "A professora ordenou ao estudante: que entregasse o relatório então.",
            "A professora ordenou que o estudante entregou o relatório naquele momento.",
            "A professora ordenou ao estudante entregarás o relatório agora."
        ],
        "correta": 1,
        "feedbackAcerto": "A ordem passa a oração subordinada com subjuntivo; “agora” adapta-se ao novo ponto temporal.",
        "feedbackErro": "Relatar uma ordem pede estrutura como “ordenou que + subjuntivo”, sem afirmar que ela foi cumprida.",
        "analiseAlternativas": [
            "Incorreta. O indicativo não reproduz adequadamente a ordem relatada.",
            "Correta. A ordem passa a oração subordinada com subjuntivo; “agora” adapta-se ao novo ponto temporal.",
            "Incorreta. Dois-pontos não se combinam com a oração subordinada nessa forma.",
            "Incorreta. “entregou” transforma ordem em fato concluído.",
            "Incorreta. Mistura formas de pessoa e tempo."
        ],
        "dicaBanca": "Ordens, pedidos e conselhos exigem atenção ao modo verbal na transposição.",
        "pegadinha": "Relatar uma ordem não é afirmar que ela foi cumprida.",
        "memorizar2026": "Imperativo direto → verbo de ordem/pedido + que + subjuntivo.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-007",
        "numero": 7,
        "subtopico": "Interrogação total no indireto",
        "dificuldade": "media",
        "pergunta": "O coordenador perguntou a Lucas: “Você concluiu a atividade?” Em discurso indireto, a forma adequada é",
        "alternativas": [
            "O coordenador perguntou a Lucas que ele concluiu a atividade.",
            "O coordenador perguntou a Lucas: se concluíra a atividade.",
            "O coordenador perguntou a Lucas se ele havia concluído a atividade.",
            "O coordenador perguntou a Lucas porque ele concluiu a atividade.",
            "O coordenador perguntou a Lucas quando ele concluiu a atividade."
        ],
        "correta": 2,
        "feedbackAcerto": "Perguntas totais (sim/não) são frequentemente introduzidas por “se” no discurso indireto.",
        "feedbackErro": "A pergunta original não solicita causa nem tempo; pergunta apenas se o fato ocorreu.",
        "analiseAlternativas": [
            "Incorreta. “que” não é a forma esperada para essa interrogativa total.",
            "Incorreta. A pontuação com dois-pontos é inadequada.",
            "Correta. Perguntas totais (sim/não) são frequentemente introduzidas por “se” no discurso indireto.",
            "Incorreta. Cria pergunta causal inexistente.",
            "Incorreta. Cria pergunta temporal inexistente."
        ],
        "dicaBanca": "Pergunta sim/não → teste “se”; pergunta parcial → preserve onde, quando, por que etc.",
        "pegadinha": "Não confunda “se” interrogativo indireto com conjunção condicional.",
        "memorizar2026": "Interrogativa total indireta: perguntar se...",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-008",
        "numero": 8,
        "subtopico": "Interrogação parcial no indireto",
        "dificuldade": "media",
        "pergunta": "A aluna perguntou: “Onde será realizada a prova?” A transposição mais adequada é",
        "alternativas": [
            "A aluna perguntou se onde seria realizada a prova.",
            "A aluna perguntou que seria realizada a prova.",
            "A aluna perguntou aonde será realizada a prova.",
            "A aluna perguntou onde seria realizada a prova.",
            "A aluna perguntou: onde seria realizada a prova."
        ],
        "correta": 3,
        "feedbackAcerto": "A palavra interrogativa “onde” é preservada, enquanto o tempo verbal se ajusta ao relato.",
        "feedbackErro": "Como a pergunta pede informação de lugar, não se introduz a oração por “se”.",
        "analiseAlternativas": [
            "Incorreta. Duplica mecanismos interrogativos.",
            "Incorreta. Elimina a informação solicitada.",
            "Incorreta. “realizar-se” ocorre em um lugar, sem movimento que justifique “aonde”.",
            "Correta. A palavra interrogativa “onde” é preservada, enquanto o tempo verbal se ajusta ao relato.",
            "Incorreta. A pontuação não corresponde à integração sintática do indireto."
        ],
        "dicaBanca": "A FGV explora também onde/aonde dentro de estruturas de discurso relatado.",
        "pegadinha": "Nem toda pergunta indireta usa “se”.",
        "memorizar2026": "Pergunta parcial indireta preserva o pronome/advérbio interrogativo.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-009",
        "numero": 9,
        "subtopico": "Efeito do discurso direto",
        "dificuldade": "media",
        "pergunta": "Em uma reportagem escolar, lê-se: A estudante afirmou: “Foi a primeira vez que me senti realmente ouvida.” Em comparação com uma paráfrase indireta, a manutenção do discurso direto tende a",
        "alternativas": [
            "eliminar a presença da estudante no texto.",
            "tornar obrigatoriamente objetiva qualquer avaliação expressa.",
            "impedir que o autor selecione ou enquadre a fala citada.",
            "eliminar qualquer possibilidade de subjetividade.",
            "aproximar o leitor da voz da estudante e preservar marcas expressivas de sua fala."
        ],
        "correta": 4,
        "feedbackAcerto": "O discurso direto produz efeito de presença e pode preservar escolhas lexicais, emoção e ritmo da voz citada.",
        "feedbackErro": "A fala direta não garante neutralidade absoluta; ela altera sobretudo o modo como a voz da fonte aparece.",
        "analiseAlternativas": [
            "Incorreta. Faz o oposto: torna a voz da estudante mais presente.",
            "Incorreta. A fala pode ser avaliativa e subjetiva.",
            "Incorreta. Seleção e enquadramento continuam sendo possíveis.",
            "Incorreta. Pode inclusive conservar subjetividade.",
            "Correta. O discurso direto produz efeito de presença e pode preservar escolhas lexicais, emoção e ritmo da voz citada."
        ],
        "dicaBanca": "FGV pergunta “tipo de discurso e efeito”; não fique apenas na identificação formal.",
        "pegadinha": "Citação direta não equivale a neutralidade jornalística automática.",
        "memorizar2026": "Direto → efeito de presença, vivacidade e preservação da voz citada.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-010",
        "numero": 10,
        "subtopico": "Efeito do discurso indireto",
        "dificuldade": "media",
        "pergunta": "Na frase “O estudante explicou que não poderia comparecer porque estava doente”, o uso do discurso indireto permite ao narrador",
        "alternativas": [
            "reproduzir obrigatoriamente cada palavra original do estudante.",
            "eliminar qualquer mediação do narrador.",
            "apresentar apenas falas ficcionais.",
            "preservar necessariamente a mesma pessoa, o mesmo tempo e os mesmos dêiticos da fala original.",
            "integrar e sintetizar a fala alheia dentro de sua própria construção narrativa."
        ],
        "correta": 4,
        "feedbackAcerto": "O conteúdo da fala é mediado e integrado à sintaxe do narrador.",
        "feedbackErro": "O discurso indireto não exige literalidade; ele permite reformulação e síntese.",
        "analiseAlternativas": [
            "Incorreta. Literalidade não é exigência do indireto.",
            "Incorreta. O narrador é justamente mediador da fala.",
            "Incorreta. O recurso aparece em textos ficcionais e não ficcionais.",
            "Incorreta. Pessoa, tempo e dêiticos podem precisar de adaptação.",
            "Correta. O conteúdo da fala é mediado e integrado à sintaxe do narrador."
        ],
        "dicaBanca": "Pense em “mediação”: quem controla a formulação final é o narrador.",
        "pegadinha": "Indireto não é necessariamente menos fiel ao conteúdo; é menos literal na forma.",
        "memorizar2026": "Indireto = conteúdo da fala mediado pela sintaxe do narrador.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-011",
        "numero": 11,
        "subtopico": "Discurso indireto livre — efeito",
        "dificuldade": "alta",
        "pergunta": "Em narrativas, o discurso indireto livre é especialmente eficaz para",
        "alternativas": [
            "aproximar narrador e personagem, permitindo que avaliações ou pensamentos da personagem atravessem a narração.",
            "marcar toda fala por travessão e verbo dicendi.",
            "eliminar a subjetividade da personagem.",
            "separar rigidamente as vozes de narrador e personagem.",
            "transformar automaticamente a narrativa em texto argumentativo."
        ],
        "correta": 0,
        "feedbackAcerto": "O indireto livre reduz a fronteira entre voz narrativa e consciência da personagem.",
        "feedbackErro": "Esse tipo não separa rigidamente as vozes; sua principal marca é a aproximação entre elas.",
        "analiseAlternativas": [
            "Correta. O indireto livre reduz a fronteira entre voz narrativa e consciência da personagem.",
            "Incorreta. Isso remete ao discurso direto.",
            "Incorreta. Ele pode intensificar a subjetividade.",
            "Incorreta. Ocorre o contrário.",
            "Incorreta. Tipo de discurso não define modo argumentativo."
        ],
        "dicaBanca": "Identifique marcas afetivas ou perguntas que parecem da personagem, embora a narração continue em terceira pessoa.",
        "pegadinha": "Não exija verbo “pensar/dizer” para reconhecer a consciência da personagem.",
        "memorizar2026": "Indireto livre = narrador e personagem parecem falar em uníssono.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-012",
        "numero": 12,
        "subtopico": "Verbos de elocução",
        "dificuldade": "media",
        "pergunta": "No período “A secretária advertiu que o prazo terminaria naquela tarde”, o verbo “advertiu” é relevante porque",
        "alternativas": [
            "funciona como simples marcador de tempo, sem interferir no sentido.",
            "indica a atitude comunicativa atribuída à fala relatada: trata-se de uma advertência.",
            "prova que as palavras seguintes são reprodução literal.",
            "elimina a necessidade de identificar quem falou.",
            "transforma a oração seguinte em discurso direto."
        ],
        "correta": 1,
        "feedbackAcerto": "Verbos dicendi podem introduzir e também qualificar a fala: advertir, confessar, negar, ordenar, perguntar etc.",
        "feedbackErro": "Compare “disse”, “advertiu”, “confessou” e “acusou”: cada verbo enquadra a fala de modo diferente.",
        "analiseAlternativas": [
            "Incorreta. O verbo agrega valor semântico à forma de dizer.",
            "Correta. Verbos dicendi podem introduzir e também qualificar a fala: advertir, confessar, negar, ordenar, perguntar etc.",
            "Incorreta. O conteúdo está em discurso indireto, não é citação literal.",
            "Incorreta. O sujeito do verbo identifica a fonte da fala.",
            "Incorreta. O complemento com “que” permanece indireto."
        ],
        "dicaBanca": "A FGV pode explorar o efeito semântico do verbo de elocução.",
        "pegadinha": "“Disse” é relativamente neutro; outros verbos já interpretam a fala.",
        "memorizar2026": "Verbo dicendi introduz e pode enquadrar semanticamente a fala.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-013",
        "numero": 13,
        "subtopico": "Fala x pensamento",
        "dificuldade": "alta",
        "pergunta": "Leia: “Rafael olhou a lista. Não podia ser. Tinha estudado tanto e seu nome não estava ali.” Sem marcas de citação nem verbo de pensamento, as duas últimas frases podem ser lidas como",
        "alternativas": [
            "discurso direto obrigatório, pois contêm emoção.",
            "citação documental, pois reproduzem informação verificável.",
            "discurso indireto livre, caso representem a reação interior de Rafael incorporada à narração.",
            "discurso indireto obrigatório, pois não há travessão.",
            "narração sem qualquer focalização da personagem."
        ],
        "correta": 2,
        "feedbackAcerto": "A interpretação é compatível com a inserção da consciência de Rafael na voz narrativa.",
        "feedbackErro": "A ausência de marcas gráficas não basta; avalie de quem parece ser a avaliação “Não podia ser”.",
        "analiseAlternativas": [
            "Incorreta. Emoção não define discurso direto.",
            "Incorreta. Não há documento citado.",
            "Correta. A interpretação é compatível com a inserção da consciência de Rafael na voz narrativa.",
            "Incorreta. Indireto exige mediação sintática explícita, que não ocorre aqui.",
            "Incorreta. O trecho se aproxima da consciência da personagem."
        ],
        "dicaBanca": "A FGV usa literatura para exigir interpretação de vozes, não apenas nomenclatura.",
        "pegadinha": "Pergunte “de quem é essa avaliação?” antes de classificar.",
        "memorizar2026": "Indireto livre pode reproduzir fala interior, pensamento e reação afetiva.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-014",
        "numero": 14,
        "subtopico": "Transposição — advérbios temporais",
        "dificuldade": "alta",
        "pergunta": "Na sexta-feira, o diretor declarou: “Ontem recebemos os documentos e hoje iniciaremos a análise.” Na segunda-feira seguinte, a transposição coerente é",
        "alternativas": [
            "O diretor declarou que ontem receberam os documentos e hoje iniciariam a análise.",
            "O diretor declarou que no dia seguinte haviam recebido os documentos e naquele dia iniciaram a análise.",
            "O diretor declarou que naquela sexta-feira receberiam os documentos e no dia anterior iniciariam a análise.",
            "O diretor declarou que no dia anterior haviam recebido os documentos e naquele dia iniciariam a análise.",
            "O diretor declarou: que no dia anterior receberam os documentos e hoje iniciariam a análise."
        ],
        "correta": 3,
        "feedbackAcerto": "“ontem” remete ao dia anterior à declaração; “hoje”, ao próprio dia da declaração.",
        "feedbackErro": "Fixe a sexta-feira como momento da fala original e só depois converta os dêiticos.",
        "analiseAlternativas": [
            "Incorreta. Mantém dêiticos do relato e gera ambiguidade.",
            "Incorreta. Inverte as referências temporais.",
            "Incorreta. Troca a ordem cronológica dos fatos.",
            "Correta. “ontem” remete ao dia anterior à declaração; “hoje”, ao próprio dia da declaração.",
            "Incorreta. Mistura pontuação e mantém “hoje” inadequadamente."
        ],
        "dicaBanca": "A FGV transforma esse tema em questão de coerência temporal.",
        "pegadinha": "Dêiticos são relativos ao centro da fala original, não ao calendário isoladamente.",
        "memorizar2026": "No indireto, ajuste ontem/hoje/amanhã conforme o novo centro temporal.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-015",
        "numero": 15,
        "subtopico": "Transposição — demonstrativos e lugar",
        "dificuldade": "alta",
        "pergunta": "Em uma visita, a professora disse diante de um mural: “Este trabalho ficará aqui.” Dias depois, já em outro local, alguém relata corretamente:",
        "alternativas": [
            "A professora disse que este trabalho ficará aqui.",
            "A professora disse que esse trabalho ficaria aqui agora.",
            "A professora disse: aquele trabalho ficaria ali.",
            "A professora disse que este trabalho ficou aqui.",
            "A professora disse que aquele trabalho ficaria ali."
        ],
        "correta": 4,
        "feedbackAcerto": "A mudança do centro de enunciação justifica “este” → “aquele” e “aqui” → “ali”, além do ajuste verbal.",
        "feedbackErro": "O relato ocorre em outro lugar e depois do momento da fala original.",
        "analiseAlternativas": [
            "Incorreta. Mantém o centro dêitico da fala original.",
            "Incorreta. Mistura referências espaciais incompatíveis.",
            "Incorreta. Dois-pontos sugerem fala direta, mas a forma é indireta.",
            "Incorreta. Altera o aspecto temporal do fato.",
            "Correta. A mudança do centro de enunciação justifica “este” → “aquele” e “aqui” → “ali”, além do ajuste verbal."
        ],
        "dicaBanca": "Pronomes demonstrativos também participam da transposição do centro enunciativo.",
        "pegadinha": "Não pense só em tempos verbais; pessoa, espaço e tempo formam um conjunto.",
        "memorizar2026": "Transposição = preservar conteúdo ajustando o centro de enunciação.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-016",
        "numero": 16,
        "subtopico": "Pontuação do discurso direto",
        "dificuldade": "media",
        "pergunta": "Assinale a alternativa em que a pontuação introduz adequadamente uma fala direta.",
        "alternativas": [
            "A diretora afirmou: “O resultado sai hoje.”",
            "A diretora afirmou que: “O resultado sai hoje”.",
            "A diretora afirmou; “O resultado sai hoje.”",
            "A diretora afirmou. que o resultado sai hoje.",
            "A diretora afirmou, — O resultado sai hoje."
        ],
        "correta": 0,
        "feedbackAcerto": "Dois-pontos após o verbo de elocução podem anunciar a citação direta entre aspas.",
        "feedbackErro": "A fala direta precisa estar compatível com a estrutura sintática e com as marcas gráficas escolhidas.",
        "analiseAlternativas": [
            "Correta. Dois-pontos após o verbo de elocução podem anunciar a citação direta entre aspas.",
            "Incorreta. “que:” mistura introdução indireta e direta.",
            "Incorreta. Ponto e vírgula não é o sinal adequado nessa estrutura.",
            "Incorreta. Separa indevidamente a oração subordinada.",
            "Incorreta. Vírgula + travessão é inadequado nessa construção."
        ],
        "dicaBanca": "Tipos de discurso e pontuação se cruzam; a FGV pode cobrar a transposição por mais de um ângulo.",
        "pegadinha": "Evite misturar “disse que...” com dois-pontos/aspas da fala direta.",
        "memorizar2026": "Direto: verbo dicendi + dois-pontos + travessão/aspas é padrão frequente.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-017",
        "numero": 17,
        "subtopico": "Discurso direto sem verbo dicendi",
        "dificuldade": "alta",
        "pergunta": "Num conto, lê-se: “A porta se abriu. — Você demorou.” Sobre o segundo período, é correto afirmar que",
        "alternativas": [
            "não pode ser discurso direto, pois falta verbo como “disse”.",
            "é discurso direto; o contexto e o travessão permitem reconhecer a fala mesmo sem verbo dicendi explícito.",
            "é discurso indireto, porque a personagem não foi identificada.",
            "é discurso indireto livre, pois todo travessão indica fusão de vozes.",
            "é necessariamente fala do narrador."
        ],
        "correta": 1,
        "feedbackAcerto": "O verbo dicendi pode ser omitido quando a organização narrativa e gráfica torna a fala reconhecível.",
        "feedbackErro": "Não transforme uma marca frequente em condição obrigatória.",
        "analiseAlternativas": [
            "Incorreta. Verbo dicendi não é requisito absoluto.",
            "Correta. O verbo dicendi pode ser omitido quando a organização narrativa e gráfica torna a fala reconhecível.",
            "Incorreta. A forma é autônoma, não subordinada.",
            "Incorreta. Travessão não define indireto livre.",
            "Incorreta. A autoria depende do contexto narrativo."
        ],
        "dicaBanca": "A FGV costuma explorar exceções a regras simplificadas.",
        "pegadinha": "“Geralmente” não significa “sempre”.",
        "memorizar2026": "Discurso direto pode vir sem verbo dicendi, desde que a fala seja reconhecível.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-018",
        "numero": 18,
        "subtopico": "Indireto livre x direto",
        "dificuldade": "alta",
        "pergunta": "Assinale o trecho que melhor exemplifica discurso indireto livre.",
        "alternativas": [
            "Paulo disse: “Não volto mais.”",
            "Paulo disse que não voltaria mais.",
            "Paulo fechou a porta. Não voltaria mais. Para quê insistir?",
            "— Não volto mais — disse Paulo.",
            "Segundo Paulo, ele não pretendia voltar."
        ],
        "correta": 2,
        "feedbackAcerto": "A narração incorpora a perspectiva de Paulo sem aspas/travessão e sem verbo de pensamento introduzindo a passagem.",
        "feedbackErro": "Procure terceira pessoa com avaliação/pergunta da personagem sem introdução explícita.",
        "analiseAlternativas": [
            "Incorreta. É discurso direto.",
            "Incorreta. É discurso indireto.",
            "Correta. A narração incorpora a perspectiva de Paulo sem aspas/travessão e sem verbo de pensamento introduzindo a passagem.",
            "Incorreta. É discurso direto.",
            "Incorreta. É relato atribuído de forma explícita."
        ],
        "dicaBanca": "A FGV frequentemente pede o trecho exato em que ocorre o indireto livre.",
        "pegadinha": "A terceira pessoa não basta; precisa haver aproximação da perspectiva da personagem.",
        "memorizar2026": "Indireto livre: sem marcas formais de citação, mas com voz/perspectiva da personagem.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-019",
        "numero": 19,
        "subtopico": "Transposição — preservação de modalidade",
        "dificuldade": "alta",
        "pergunta": "Considere: O pai comentou: “Talvez eu chegue tarde hoje.” Assinale a transposição que preserva melhor o sentido em relato posterior.",
        "alternativas": [
            "O pai comentou que certamente chegaria tarde naquele dia.",
            "O pai comentou que chegara tarde no dia anterior.",
            "O pai comentou: que talvez chegasse tarde naquele dia.",
            "O pai comentou que talvez chegasse tarde naquele dia.",
            "O pai comentou que talvez eu chegasse tarde hoje."
        ],
        "correta": 3,
        "feedbackAcerto": "“Talvez” preserva a incerteza; “eu” é recalibrado para “o pai”; “hoje” passa a “naquele dia”.",
        "feedbackErro": "A transposição correta precisa conservar também a modalidade de dúvida.",
        "analiseAlternativas": [
            "Incorreta. Troca dúvida por certeza.",
            "Incorreta. Transforma possibilidade futura em fato passado.",
            "Incorreta. Pontuação híbrida.",
            "Correta. “Talvez” preserva a incerteza; “eu” é recalibrado para “o pai”; “hoje” passa a “naquele dia”.",
            "Incorreta. “eu/hoje” passam a se referir ao narrador e ao momento do relato."
        ],
        "dicaBanca": "A FGV costuma tornar um distrator quase perfeito e alterar só um modalizador.",
        "pegadinha": "Preservar o sentido inclui certeza/dúvida, não apenas pessoa e tempo.",
        "memorizar2026": "Transposição boa conserva conteúdo + modalidade + referências dêiticas.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-020",
        "numero": 20,
        "subtopico": "Voz do narrador x voz citada",
        "dificuldade": "alta",
        "pergunta": "Leia: O secretário classificou a medida como “um avanço histórico”. As aspas em “um avanço histórico” indicam que",
        "alternativas": [
            "o autor do texto necessariamente concorda com a avaliação.",
            "o segmento está em discurso indireto livre.",
            "as aspas tornam a expressão obrigatoriamente irônica.",
            "não existe discurso relatado, pois não há travessão.",
            "a expressão é atribuída ao secretário, distinguindo essa avaliação da formulação do narrador."
        ],
        "correta": 4,
        "feedbackAcerto": "As aspas delimitam palavras atribuídas à fonte e permitem separar a avaliação citada da voz do narrador.",
        "feedbackErro": "Citação não implica concordância do narrador nem ironia automática.",
        "analiseAlternativas": [
            "Incorreta. A atribuição pode justamente criar distância.",
            "Incorreta. Há marca explícita de citação.",
            "Incorreta. Ironia depende do contexto.",
            "Incorreta. Discurso direto também pode usar aspas.",
            "Correta. As aspas delimitam palavras atribuídas à fonte e permitem separar a avaliação citada da voz do narrador."
        ],
        "dicaBanca": "Em textos jornalísticos, identifique quem assume cada avaliação.",
        "pegadinha": "Palavra entre aspas não é automaticamente ironia.",
        "memorizar2026": "Citação marcada pode atribuir uma formulação a outra voz e criar distância enunciativa.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-021",
        "numero": 21,
        "subtopico": "Mudança de tempo verbal",
        "dificuldade": "alta",
        "pergunta": "Marina declarou: “Concluirei o relatório até sexta-feira.” Em relato posterior, “Marina declarou que concluiria o relatório até sexta-feira”",
        "alternativas": [
            "é adequada, pois o futuro em relação ao momento da fala pode ser expresso pelo futuro do pretérito em relação ao verbo de elocução passado.",
            "é inadequada porque futuro do presente nunca pode mudar no discurso indireto.",
            "é inadequada porque deveria usar obrigatoriamente o presente.",
            "é discurso indireto livre.",
            "é discurso direto sem aspas."
        ],
        "correta": 0,
        "feedbackAcerto": "“concluiria” expressa posterioridade em relação a um ponto passado (“declarou”).",
        "feedbackErro": "A correlação temporal é relativa ao momento da fala relatada, não uma troca arbitrária.",
        "analiseAlternativas": [
            "Correta. “concluiria” expressa posterioridade em relação a um ponto passado (“declarou”).",
            "Incorreta. A adaptação é frequente e adequada.",
            "Incorreta. O presente alteraria a relação temporal.",
            "Incorreta. Há verbo introdutor + oração subordinada explícita.",
            "Incorreta. A fala não aparece autonomamente."
        ],
        "dicaBanca": "A FGV cobra futuro do presente → futuro do pretérito em transposição contextualizada.",
        "pegadinha": "Tempo verbal não muda por tabela; muda para preservar relações temporais.",
        "memorizar2026": "Relato no passado: futuro original pode virar futuro do pretérito.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-022",
        "numero": 22,
        "subtopico": "Atribuição indireta",
        "dificuldade": "media",
        "pergunta": "Uma notícia informa: “Segundo a diretora, a escola ampliará o atendimento no próximo mês.” Essa construção",
        "alternativas": [
            "é necessariamente discurso direto, porque indica a fonte.",
            "atribui a informação à diretora sem apresentar uma citação literal de sua fala.",
            "só pode ser usada em textos literários.",
            "reproduz obrigatoriamente as mesmas palavras usadas pela diretora.",
            "elimina a mediação do jornalista."
        ],
        "correta": 1,
        "feedbackAcerto": "A informação é atribuída a uma fonte, mas não se apresenta como reprodução literal marcada.",
        "feedbackErro": "“Segundo X” marca fonte/atribuição, não literalidade.",
        "analiseAlternativas": [
            "Incorreta. Fonte indicada não transforma relato em citação direta.",
            "Correta. A informação é atribuída a uma fonte, mas não se apresenta como reprodução literal marcada.",
            "Incorreta. É comum em gêneros jornalísticos e acadêmicos.",
            "Incorreta. Não há garantia de literalidade.",
            "Incorreta. O jornalista ainda seleciona e formula o enunciado."
        ],
        "dicaBanca": "A FGV pode misturar discurso relatado com autoria e enunciação.",
        "pegadinha": "Fonte identificada ≠ fala literalmente citada.",
        "memorizar2026": "Atribuição indireta relata conteúdo sem necessariamente citar as palavras exatas.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-023",
        "numero": 23,
        "subtopico": "Transformação incorreta",
        "dificuldade": "alta",
        "pergunta": "Assinale a transposição de discurso direto para indireto que altera indevidamente uma informação da fala original.",
        "alternativas": [
            "“Eu voltarei amanhã”, disse Carlos. → Carlos disse que voltaria no dia seguinte.",
            "“Não estou triste”, explicou Ana. → Ana explicou que não estava triste.",
            "“Talvez eu participe”, afirmou Pedro. → Pedro afirmou que certamente participaria.",
            "“Você terminou?”, perguntou a professora. → A professora perguntou se o aluno havia terminado.",
            "“Venha agora”, ordenou a mãe. → A mãe ordenou que ele viesse naquele momento."
        ],
        "correta": 2,
        "feedbackAcerto": "“Talvez” expressa possibilidade; “certamente” transforma a fala em certeza.",
        "feedbackErro": "Compare não apenas tempos e pronomes, mas também modalizadores e valor pragmático.",
        "analiseAlternativas": [
            "Incorreta. Preserva a relação temporal.",
            "Incorreta. Preserva o conteúdo básico.",
            "Correta. “Talvez” expressa possibilidade; “certamente” transforma a fala em certeza.",
            "Incorreta. Pergunta total foi adequadamente introduzida por “se”.",
            "Incorreta. A ordem foi adequadamente relatada."
        ],
        "dicaBanca": "Alternativas FGV frequentemente erram em uma única palavra de modalidade.",
        "pegadinha": "A frase pode parecer gramaticalmente perfeita e ainda estar semanticamente errada.",
        "memorizar2026": "Na transposição, preserve também dúvida, certeza, ordem, pedido e avaliação.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-024",
        "numero": 24,
        "subtopico": "Direto, indireto e indireto livre — comparação",
        "dificuldade": "alta",
        "pergunta": "Considere: I. Júlia disse: “Estou cansada.” II. Júlia disse que estava cansada. III. Júlia sentou-se. Estava cansada demais. Não aguentaria outra reunião. A sequência I, II e III exemplifica, respectivamente,",
        "alternativas": [
            "indireto, direto e indireto livre.",
            "direto, indireto livre e indireto.",
            "indireto livre, indireto e direto.",
            "direto, indireto e indireto livre.",
            "direto, direto e indireto."
        ],
        "correta": 3,
        "feedbackAcerto": "I preserva a fala autônoma; II integra a fala ao narrador; III aproxima a narração da perspectiva interior de Júlia.",
        "feedbackErro": "Compare o grau de autonomia da voz da personagem em cada trecho.",
        "analiseAlternativas": [
            "Incorreta. Inverte I e II.",
            "Incorreta. II possui verbo dicendi + oração subordinada.",
            "Incorreta. I é fala direta marcada.",
            "Correta. I preserva a fala autônoma; II integra a fala ao narrador; III aproxima a narração da perspectiva interior de Júlia.",
            "Incorreta. III não apresenta citação direta."
        ],
        "dicaBanca": "Questões comparativas ajudam a fixar estrutura e efeito dos três tipos.",
        "pegadinha": "Não classifique apenas pela pontuação; observe a relação entre as vozes.",
        "memorizar2026": "Direto = voz autônoma; indireto = voz mediada; indireto livre = vozes aproximadas.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    },
    {
        "id": "SEDUC-LP-DISC-025",
        "numero": 25,
        "subtopico": "Caso integrador — padrão FGV",
        "dificuldade": "alta",
        "texto": "A mãe encontrou o filho diante da mochila ainda vazia. Perguntou se ele já havia separado os livros. O menino não respondeu. Claro que não. Para que arrumar tudo agora, se ainda faltava tanto tempo? Então a mãe insistiu: — Você vai se atrasar de novo.",
        "pergunta": "Sobre os tipos de discurso presentes no trecho, assinale a afirmativa correta.",
        "alternativas": [
            "“Perguntou se ele já havia separado os livros” é discurso direto.",
            "A fala final da mãe está em discurso indireto, pois vem depois de dois-pontos.",
            "O trecho utiliza exclusivamente discurso indireto.",
            "A pergunta retórica impede o reconhecimento da perspectiva do menino.",
            "“Claro que não. Para que arrumar tudo agora...?” pode representar discurso indireto livre, aproximando a narração da perspectiva do menino."
        ],
        "correta": 4,
        "feedbackAcerto": "O texto combina discurso indireto, possível indireto livre na reação do menino e discurso direto na fala final.",
        "feedbackErro": "A FGV costuma criar textos híbridos; um mesmo parágrafo pode alternar fala e pensamento.",
        "analiseAlternativas": [
            "Incorreta. É discurso indireto, introduzido por “perguntou” e “se”.",
            "Incorreta. Travessão e autonomia marcam discurso direto.",
            "Incorreta. Há indireto, direto e possível indireto livre.",
            "Incorreta. A pergunta pode justamente revelar a perspectiva do menino.",
            "Correta. O texto combina discurso indireto, possível indireto livre na reação do menino e discurso direto na fala final."
        ],
        "dicaBanca": "Em texto literário, marque cada mudança de voz antes de responder.",
        "pegadinha": "Um mesmo trecho pode conter mais de um tipo de discurso.",
        "memorizar2026": "FGV: classifique trecho a trecho e associe forma + efeito de sentido.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e por provas oficiais recentes da FGV para professores sobre tipos de discurso e transposição de fala."
    }
];

    window.seducLinguaPortuguesaTiposDiscurso2026 = banco;
})();
