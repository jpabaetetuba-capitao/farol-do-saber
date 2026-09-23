/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 16: Estrutura e Formação de Palavras
   25 questões autorais calibradas pelo edital e por provas FGV para professor.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-LP-EFP-001",
        "numero": 1,
        "subtopico": "Formação x flexão",
        "dificuldade": "media",
        "pergunta": "Considere as formas “livro”, “livros” e “livreiro”. A análise correta é:",
        "alternativas": [
            "“livros” resulta de flexão de número, enquanto “livreiro” resulta de formação de uma nova palavra por derivação.",
            "“livros” e “livreiro” são ambos casos de derivação sufixal.",
            "“livreiro” é apenas uma flexão de gênero de “livro”.",
            "“livros” forma uma nova palavra, mas “livreiro” mantém exatamente a mesma palavra.",
            "as três formas exemplificam apenas variações flexionais do mesmo vocábulo."
        ],
        "correta": 0,
        "feedbackAcerto": "A flexão modifica propriedades gramaticais da mesma palavra; a formação cria outro vocábulo. “Livros” é plural de “livro”, enquanto “livreiro” é palavra derivada.",
        "feedbackErro": "Pergunte se surgiu um novo vocábulo ou apenas uma variação gramatical da mesma palavra.",
        "analiseAlternativas": [
            "Correta. “-s” marca número; “-eiro” participa da criação de novo vocábulo.",
            "Incorreta. O plural não é processo de formação de palavra.",
            "Incorreta. “Livreiro” não é flexão de gênero.",
            "Incorreta. A relação está invertida.",
            "Incorreta. “Livreiro” possui identidade lexical própria."
        ],
        "dicaBanca": "A FGV pode misturar estrutura, formação e flexão na mesma questão.",
        "pegadinha": "Nem todo acréscimo ao final da palavra é sufixo derivacional; pode ser desinência flexional.",
        "memorizar2026": "Flexão = mesma palavra; formação = novo vocábulo.",
        "fonte": "Edital SEDUC-PA 2026 — Estrutura e formação de palavras; padrão morfológico FGV."
    },
    {
        "id": "SEDUC-LP-EFP-002",
        "numero": 2,
        "subtopico": "Radical e família de palavras",
        "dificuldade": "media",
        "pergunta": "No conjunto “livro, livraria, livreiro”, o segmento que concentra o núcleo lexical comum é",
        "alternativas": [
            "o sufixo “-aria”.",
            "o radical “livr-”.",
            "a desinência “-o”.",
            "a vogal temática “-e-”.",
            "o prefixo “li-”."
        ],
        "correta": 1,
        "feedbackAcerto": "“Livr-” é o radical comum às palavras da família, concentrando o núcleo básico de significado.",
        "feedbackErro": "Procure o segmento recorrente que permanece associado ao mesmo núcleo lexical.",
        "analiseAlternativas": [
            "Incorreta. “-aria” participa da formação de “livraria”.",
            "Correta. “livr-” é o radical compartilhado.",
            "Incorreta. “-o” não constitui o núcleo lexical.",
            "Incorreta. Não há vogal temática “-e-” nesse conjunto.",
            "Incorreta. “li-” não é prefixo."
        ],
        "dicaBanca": "A FGV já cobrou identificação de radical em formas verbais e nominais.",
        "pegadinha": "Radical não é necessariamente a palavra inteira nem precisa coincidir com uma palavra autônoma.",
        "memorizar2026": "Radical = núcleo lexical compartilhado por palavras da mesma família.",
        "fonte": "Edital SEDUC-PA 2026; FGV/SEDUC-AM — identificação de elemento mórfico/radical."
    },
    {
        "id": "SEDUC-LP-EFP-003",
        "numero": 3,
        "subtopico": "Morfema",
        "dificuldade": "media",
        "pergunta": "Em morfologia, denomina-se morfema",
        "alternativas": [
            "qualquer sílaba pronunciada com maior intensidade.",
            "somente o radical de uma palavra.",
            "a menor unidade significativa ou funcional que participa da estrutura da palavra.",
            "apenas os prefixos e sufixos que criam palavras novas.",
            "qualquer letra que possa aparecer isoladamente."
        ],
        "correta": 2,
        "feedbackAcerto": "Morfemas são unidades mínimas dotadas de significado lexical ou função gramatical.",
        "feedbackErro": "O conceito é mais amplo que radical ou afixo: desinências e vogais temáticas também integram a estrutura mórfica.",
        "analiseAlternativas": [
            "Incorreta. Sílaba é unidade fonológica, não necessariamente mórfica.",
            "Incorreta. Radical é um tipo de morfema.",
            "Correta. É a definição funcional adequada.",
            "Incorreta. Morfema não se limita a afixos derivacionais.",
            "Incorreta. Letra é unidade gráfica."
        ],
        "dicaBanca": "A banca pode cruzar fonologia e morfologia; não confunda sílaba, letra e morfema.",
        "pegadinha": "Morfema não é sinônimo de sílaba.",
        "memorizar2026": "Morfema = menor unidade significativa/funcional da estrutura da palavra.",
        "fonte": "Edital SEDUC-PA 2026 — Estrutura de palavras."
    },
    {
        "id": "SEDUC-LP-EFP-004",
        "numero": 4,
        "subtopico": "Tema e vogal temática verbal",
        "dificuldade": "alta",
        "pergunta": "Na forma verbal “cantávamos”, a segmentação morfológica tradicional identifica “cant-” como radical e “-a-” como",
        "alternativas": [
            "prefixo de intensidade.",
            "sufixo formador de substantivo.",
            "desinência número-pessoal.",
            "vogal temática da primeira conjugação.",
            "desinência nominal de gênero."
        ],
        "correta": 3,
        "feedbackAcerto": "Em “cantar”, a vogal temática “-a-” caracteriza a primeira conjugação e, unida ao radical, forma o tema verbal.",
        "feedbackErro": "Observe a conjugação do infinitivo “cantar”: a vogal anterior a “-r” é a vogal temática.",
        "analiseAlternativas": [
            "Incorreta. Não há prefixo.",
            "Incorreta. Trata-se de forma verbal.",
            "Incorreta. A desinência número-pessoal de “cantávamos” é “-mos”.",
            "Correta. “-a-” é a vogal temática.",
            "Incorreta. Não é nome nem marca gênero."
        ],
        "dicaBanca": "FGV pode cobrar radical, tema e desinências dentro de formas verbais.",
        "pegadinha": "Tema verbal = radical + vogal temática.",
        "memorizar2026": "cant-a-r → radical cant- + vogal temática -a-.",
        "fonte": "Edital SEDUC-PA 2026; análise mórfica tradicional."
    },
    {
        "id": "SEDUC-LP-EFP-005",
        "numero": 5,
        "subtopico": "Desinências",
        "dificuldade": "media",
        "pergunta": "Na palavra “meninos”, o segmento “-s” exerce principalmente a função de",
        "alternativas": [
            "criar um substantivo a partir de um verbo.",
            "formar uma palavra por composição.",
            "alterar o radical da palavra.",
            "marcar a conjugação verbal.",
            "indicar flexão de número, sem criar um novo vocábulo."
        ],
        "correta": 4,
        "feedbackAcerto": "O “-s” marca plural, portanto é morfema flexional e não processo de formação lexical.",
        "feedbackErro": "O plural modifica o número gramatical da mesma palavra.",
        "analiseAlternativas": [
            "Incorreta. Não há derivação de verbo.",
            "Incorreta. Não há combinação de radicais.",
            "Incorreta. O radical não é substituído.",
            "Incorreta. Trata-se de substantivo.",
            "Correta. Há flexão de número."
        ],
        "dicaBanca": "Uma das principais pegadinhas é tratar desinência como sufixo derivacional.",
        "pegadinha": "Final de palavra ≠ automaticamente sufixo.",
        "memorizar2026": "Desinência flexiona; sufixo derivacional pode formar outro vocábulo.",
        "fonte": "Edital SEDUC-PA 2026 — Estrutura de palavras."
    },
    {
        "id": "SEDUC-LP-EFP-006",
        "numero": 6,
        "subtopico": "Derivação prefixal",
        "dificuldade": "media",
        "pergunta": "No trecho “O regulamento foi relido pela equipe”, a palavra “relido” apresenta, em sua base lexical, o prefixo “re-”, cujo valor no contexto é de",
        "alternativas": [
            "repetição, como em “reler”.",
            "negação.",
            "posição inferior.",
            "anterioridade absoluta.",
            "movimento para fora."
        ],
        "correta": 0,
        "feedbackAcerto": "O prefixo “re-” acrescenta à base “ler” a ideia de repetição: ler novamente.",
        "feedbackErro": "A FGV costuma explorar não apenas o processo, mas o valor semântico do afixo.",
        "analiseAlternativas": [
            "Correta. “re-” marca repetição nesse contexto.",
            "Incorreta. Negação é comum em prefixos como in-/im- ou des-, conforme a base.",
            "Incorreta. Não há valor espacial inferior.",
            "Incorreta. O sentido é repetição, não simples anterioridade.",
            "Incorreta. Não há ideia de exteriorização."
        ],
        "dicaBanca": "FGV/SEDUC-AM já cobrou diretamente valor semântico de prefixo.",
        "pegadinha": "O mesmo prefixo pode assumir nuances diferentes conforme a palavra; use o contexto.",
        "memorizar2026": "Derivação prefixal = prefixo + base; analise também o sentido criado.",
        "fonte": "Edital SEDUC-PA 2026; FGV/SEDUC-AM — valor semântico de prefixos."
    },
    {
        "id": "SEDUC-LP-EFP-007",
        "numero": 7,
        "subtopico": "Derivação sufixal",
        "dificuldade": "media",
        "pergunta": "A palavra “livreiro”, em relação a “livro”, exemplifica",
        "alternativas": [
            "derivação regressiva.",
            "derivação sufixal, com acréscimo de “-eiro” à base.",
            "derivação imprópria.",
            "composição por aglutinação.",
            "parassíntese."
        ],
        "correta": 1,
        "feedbackAcerto": "“Livreiro” é formado pela adição do sufixo “-eiro” à base relacionada a “livro”.",
        "feedbackErro": "Não há dois radicais nem entrada simultânea obrigatória de prefixo e sufixo.",
        "analiseAlternativas": [
            "Incorreta. Não ocorre redução da base verbal.",
            "Correta. Há acréscimo de sufixo derivacional.",
            "Incorreta. Houve alteração formal.",
            "Incorreta. Não há composição de dois radicais.",
            "Incorreta. Não há prefixo e sufixo simultâneos."
        ],
        "dicaBanca": "Observe se o afixo vem antes ou depois do radical e se a nova palavra muda de classe ou sentido.",
        "pegadinha": "Sufixação pode mudar a classe gramatical, mas essa mudança não é obrigatória em todos os casos.",
        "memorizar2026": "Sufixo = afixo depois do radical.",
        "fonte": "Edital SEDUC-PA 2026 — Formação de palavras."
    },
    {
        "id": "SEDUC-LP-EFP-008",
        "numero": 8,
        "subtopico": "Derivação prefixal e sufixal",
        "dificuldade": "alta",
        "pergunta": "Em “infelizmente”, a análise mais adequada do processo de formação é",
        "alternativas": [
            "composição por justaposição.",
            "derivação parassintética, porque prefixo e sufixo aparecem na mesma palavra.",
            "derivação prefixal e sufixal, pois existem “infeliz” e “felizmente” como formas independentes.",
            "derivação regressiva.",
            "derivação imprópria."
        ],
        "correta": 2,
        "feedbackAcerto": "A presença de formas intermediárias válidas mostra que os afixos não precisam entrar simultaneamente; por isso, não é parassíntese.",
        "feedbackErro": "O teste essencial é verificar se existem palavras formadas apenas com o prefixo ou apenas com o sufixo.",
        "analiseAlternativas": [
            "Incorreta. Não há união de dois radicais.",
            "Incorreta. A existência de “infeliz” e “felizmente” afasta a parassíntese.",
            "Correta. Prefixo e sufixo podem ser acrescentados independentemente.",
            "Incorreta. Não há redução.",
            "Incorreta. Há acréscimo formal de morfemas."
        ],
        "dicaBanca": "Essa distinção é uma pegadinha clássica: prefixal+sufixal ≠ parassintética.",
        "pegadinha": "Ter prefixo e sufixo ao mesmo tempo não basta para haver parassíntese.",
        "memorizar2026": "Se há formas intermediárias válidas, tende a ser prefixal e sufixal, não parassíntese.",
        "fonte": "Edital SEDUC-PA 2026 — Derivação."
    },
    {
        "id": "SEDUC-LP-EFP-009",
        "numero": 9,
        "subtopico": "Derivação parassintética",
        "dificuldade": "alta",
        "pergunta": "Assinale a palavra que exemplifica derivação parassintética.",
        "alternativas": [
            "infeliz.",
            "felizmente.",
            "desigualdade.",
            "entristecer.",
            "pesca."
        ],
        "correta": 3,
        "feedbackAcerto": "“Entristecer” forma-se com entrada simultânea de prefixo e sufixo em torno da base “triste”; não se usam, com o mesmo valor, formas intermediárias como *tristecer ou *entriste.",
        "feedbackErro": "Procure a formação que exige simultaneamente prefixo e sufixo.",
        "analiseAlternativas": [
            "Incorreta. É prefixal.",
            "Incorreta. É sufixal.",
            "Incorreta. Há formas intermediárias “desigual” e “igualdade”.",
            "Correta. É exemplo tradicional de parassíntese.",
            "Incorreta. É derivação regressiva de “pescar”."
        ],
        "dicaBanca": "Teste sempre as formas intermediárias.",
        "pegadinha": "Parassíntese não é sinônimo de palavra com dois afixos.",
        "memorizar2026": "Parassíntese = prefixo + base + sufixo simultaneamente.",
        "fonte": "Edital SEDUC-PA 2026 — Formação de palavras."
    },
    {
        "id": "SEDUC-LP-EFP-010",
        "numero": 10,
        "subtopico": "Derivação regressiva",
        "dificuldade": "media",
        "pergunta": "No par “pescar → pesca”, o substantivo “pesca” exemplifica",
        "alternativas": [
            "derivação prefixal.",
            "composição.",
            "derivação imprópria.",
            "derivação sufixal.",
            "derivação regressiva, com redução formal em relação ao verbo de base."
        ],
        "correta": 4,
        "feedbackAcerto": "Substantivos como “pesca”, associados a verbos como “pescar”, são tradicionalmente classificados como casos de derivação regressiva.",
        "feedbackErro": "A formação não acrescenta afixo nem mantém exatamente a mesma forma; há redução em relação ao verbo.",
        "analiseAlternativas": [
            "Incorreta. Não há prefixo.",
            "Incorreta. Não há dois radicais.",
            "Incorreta. A forma não permanece idêntica.",
            "Incorreta. Não há acréscimo de sufixo.",
            "Correta. Há derivação regressiva."
        ],
        "dicaBanca": "A FGV já cobrou derivação regressiva diretamente em prova para professor.",
        "pegadinha": "Regressiva é frequente na formação de substantivos deverbais.",
        "memorizar2026": "pescar → pesca | atacar → ataque | vender → venda.",
        "fonte": "Edital SEDUC-PA 2026; FGV/SEDUC-AM — derivação regressiva."
    },
    {
        "id": "SEDUC-LP-EFP-011",
        "numero": 11,
        "subtopico": "Derivação imprópria",
        "dificuldade": "media",
        "pergunta": "Na frase “O não do diretor encerrou a discussão”, a palavra “não” exemplifica",
        "alternativas": [
            "derivação imprópria, pois passa a funcionar como substantivo sem mudança de forma.",
            "derivação sufixal.",
            "composição por justaposição.",
            "derivação regressiva.",
            "parassíntese."
        ],
        "correta": 0,
        "feedbackAcerto": "O advérbio “não” foi substantivado pelo contexto, sem acréscimo ou retirada de morfemas.",
        "feedbackErro": "Observe que a forma gráfica permanece a mesma; o que muda é a classe/função lexical.",
        "analiseAlternativas": [
            "Correta. É conversão ou derivação imprópria.",
            "Incorreta. Não há sufixo.",
            "Incorreta. Não há união de bases.",
            "Incorreta. Não há redução.",
            "Incorreta. Não há prefixo e sufixo simultâneos."
        ],
        "dicaBanca": "Artigos e determinantes frequentemente sinalizam substantivação em casos de derivação imprópria.",
        "pegadinha": "Mudança de classe não exige necessariamente mudança na forma.",
        "memorizar2026": "Derivação imprópria = nova classe, mesma forma.",
        "fonte": "Edital SEDUC-PA 2026 — Formação de palavras."
    },
    {
        "id": "SEDUC-LP-EFP-012",
        "numero": 12,
        "subtopico": "Composição por justaposição",
        "dificuldade": "media",
        "pergunta": "A palavra “guarda-roupa” é formada por",
        "alternativas": [
            "derivação regressiva.",
            "composição por justaposição, pois os elementos se unem preservando sua integridade fonológica básica.",
            "derivação parassintética.",
            "composição por aglutinação, com perda fonética na união.",
            "derivação imprópria."
        ],
        "correta": 1,
        "feedbackAcerto": "Na justaposição, os elementos se unem sem perda fonética relevante de suas formas.",
        "feedbackErro": "Compare com “planalto”, em que há alteração na junção dos elementos.",
        "analiseAlternativas": [
            "Incorreta. Não deriva de verbo por redução.",
            "Correta. É composição por justaposição.",
            "Incorreta. Não envolve prefixo+sufixo simultâneos.",
            "Incorreta. Não há perda fonética característica.",
            "Incorreta. Não há simples mudança de classe."
        ],
        "dicaBanca": "Composição envolve mais de um elemento lexical/radical; depois verifique se houve alteração fonética.",
        "pegadinha": "Hífen não é o critério decisivo para classificar justaposição.",
        "memorizar2026": "Justaposição = união sem perda fonética relevante.",
        "fonte": "Edital SEDUC-PA 2026 — Composição."
    },
    {
        "id": "SEDUC-LP-EFP-013",
        "numero": 13,
        "subtopico": "Composição por aglutinação",
        "dificuldade": "media",
        "pergunta": "A formação de “planalto”, tradicionalmente relacionada a “plano + alto”, é exemplo de",
        "alternativas": [
            "derivação prefixal.",
            "derivação sufixal.",
            "composição por aglutinação.",
            "derivação regressiva.",
            "derivação imprópria."
        ],
        "correta": 2,
        "feedbackAcerto": "Na aglutinação, os elementos se fundem com alteração fonética/formal.",
        "feedbackErro": "Observe que a combinação não preserva integralmente as duas formas de origem.",
        "analiseAlternativas": [
            "Incorreta. Não há simples prefixação.",
            "Incorreta. Não há simples sufixação.",
            "Correta. “planalto” é exemplo tradicional de aglutinação.",
            "Incorreta. Não deriva de verbo por redução.",
            "Incorreta. Há mudança formal."
        ],
        "dicaBanca": "A FGV pode cobrar composição a partir da forma resultante e do grau de conservação dos elementos.",
        "pegadinha": "Justaposição e aglutinação são tipos de composição, não de derivação.",
        "memorizar2026": "Aglutinação = fusão com alteração/perda fonética.",
        "fonte": "Edital SEDUC-PA 2026 — Formação por composição."
    },
    {
        "id": "SEDUC-LP-EFP-014",
        "numero": 14,
        "subtopico": "Valor semântico de prefixos",
        "dificuldade": "alta",
        "pergunta": "No enunciado “O documento foi reavaliado pela comissão”, o prefixo presente em “reavaliado” expressa, no contexto, a ideia de",
        "alternativas": [
            "negação.",
            "movimento para baixo.",
            "oposição entre dois elementos.",
            "repetição ou realização novamente da ação de avaliar.",
            "ausência de intensidade."
        ],
        "correta": 3,
        "feedbackAcerto": "“Reavaliar” significa avaliar novamente; o prefixo “re-” acrescenta valor reiterativo.",
        "feedbackErro": "Analise o efeito semântico concreto do prefixo sobre a base “avaliar”.",
        "analiseAlternativas": [
            "Incorreta. Não há negação.",
            "Incorreta. Não há valor espacial.",
            "Incorreta. Não há oposição.",
            "Correta. O valor é de repetição.",
            "Incorreta. A alternativa não descreve o sentido produzido."
        ],
        "dicaBanca": "FGV cobra afixo + efeito de sentido, e não somente o nome do processo.",
        "pegadinha": "Evite decorar um único significado para cada prefixo sem consultar o contexto.",
        "memorizar2026": "re- em “reavaliar” = novamente.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de semântica dos afixos."
    },
    {
        "id": "SEDUC-LP-EFP-015",
        "numero": 15,
        "subtopico": "Valor semântico de sufixos",
        "dificuldade": "media",
        "pergunta": "Em “jardineiro”, o sufixo “-eiro” contribui, nesse contexto lexical, para indicar",
        "alternativas": [
            "o radical de origem verbal.",
            "uma desinência de número.",
            "uma vogal temática.",
            "negação da base.",
            "uma designação associada a ocupação/atividade ligada a “jardim”."
        ],
        "correta": 4,
        "feedbackAcerto": "O sufixo “-eiro” participa da formação de nomes com diferentes valores; em “jardineiro”, indica pessoa ligada à atividade relacionada a jardins.",
        "feedbackErro": "Não trate o sufixo como flexão: ele ajuda a criar um novo vocábulo e acrescenta valor lexical.",
        "analiseAlternativas": [
            "Incorreta. “-eiro” não é radical.",
            "Incorreta. Não marca plural.",
            "Incorreta. Não é vogal temática.",
            "Incorreta. Não exprime negação.",
            "Correta. O sufixo cria nome associado a ocupação/atividade."
        ],
        "dicaBanca": "Sufixos podem carregar valores semânticos como profissão, qualidade, lugar, ação, diminuição ou aumento.",
        "pegadinha": "O valor do sufixo depende da palavra concreta.",
        "memorizar2026": "Analise processo + valor semântico do afixo.",
        "fonte": "Edital SEDUC-PA 2026 — Estrutura e formação de palavras."
    },
    {
        "id": "SEDUC-LP-EFP-016",
        "numero": 16,
        "subtopico": "Formação e efeito de sentido",
        "dificuldade": "alta",
        "pergunta": "Em uma campanha, lê-se: “Precisamos reconstruir a confiança da comunidade”. A escolha de “reconstruir”, em lugar de “construir”, sugere que",
        "alternativas": [
            "se pressupõe a existência anterior de uma confiança que precisa ser estabelecida novamente.",
            "a confiança nunca existiu.",
            "o prefixo “re-” transforma obrigatoriamente o verbo em substantivo.",
            "a palavra resulta de composição por aglutinação.",
            "a construção deve ocorrer pela primeira vez."
        ],
        "correta": 0,
        "feedbackAcerto": "A formação prefixal participa do sentido textual: “reconstruir” pressupõe construir novamente/restabelecer.",
        "feedbackErro": "A FGV tende a relacionar morfologia e efeito de sentido. Compare “construir” e “reconstruir”.",
        "analiseAlternativas": [
            "Correta. O prefixo introduz valor reiterativo/restaurativo.",
            "Incorreta. O termo sugere justamente estado anterior.",
            "Incorreta. A classe verbal permanece.",
            "Incorreta. Não há composição.",
            "Incorreta. “re-” afasta essa leitura."
        ],
        "dicaBanca": "Nas provas mais recentes, a FGV privilegia o funcionamento da forma linguística dentro do texto.",
        "pegadinha": "Formação de palavras não é assunto isolado da semântica.",
        "memorizar2026": "Morfema pode alterar o efeito de sentido do enunciado.",
        "fonte": "Edital SEDUC-PA 2026; padrão contextual da FGV em provas docentes."
    },
    {
        "id": "SEDUC-LP-EFP-017",
        "numero": 17,
        "subtopico": "Mudança de classe por sufixação",
        "dificuldade": "media",
        "pergunta": "No par “claro → clareza”, a formação da segunda palavra envolve",
        "alternativas": [
            "apenas flexão de gênero.",
            "derivação sufixal com formação de substantivo a partir de uma base adjetiva.",
            "derivação regressiva.",
            "composição por justaposição.",
            "derivação imprópria sem mudança formal."
        ],
        "correta": 1,
        "feedbackAcerto": "A sufixação forma “clareza”, substantivo relacionado ao adjetivo “claro”.",
        "feedbackErro": "Há criação de nova palavra e mudança de classe, com acréscimo derivacional.",
        "analiseAlternativas": [
            "Incorreta. Não se trata de flexão.",
            "Correta. Há sufixação e mudança de classe.",
            "Incorreta. Não ocorre redução.",
            "Incorreta. Não há dois radicais.",
            "Incorreta. A forma foi modificada."
        ],
        "dicaBanca": "A banca pode perguntar simultaneamente processo e classe gramatical resultante.",
        "pegadinha": "Mudança de classe pode ocorrer por sufixação ou por derivação imprópria; observe se a forma mudou.",
        "memorizar2026": "claro → clareza: derivação sufixal e mudança adjetivo → substantivo.",
        "fonte": "Edital SEDUC-PA 2026 — Formação de palavras."
    },
    {
        "id": "SEDUC-LP-EFP-018",
        "numero": 18,
        "subtopico": "Família lexical",
        "dificuldade": "media",
        "pergunta": "O conjunto que melhor exemplifica uma família de palavras construída em torno de um radical comum é",
        "alternativas": [
            "casa, mesa, livro.",
            "ontem, hoje, amanhã.",
            "pedra, pedreiro, pedregulho.",
            "falar, ouvir, silêncio.",
            "alto, baixo, médio."
        ],
        "correta": 2,
        "feedbackAcerto": "As três palavras mantêm relação lexical e compartilham a base radical associada a “pedra”.",
        "feedbackErro": "Família lexical exige parentesco morfológico, não apenas relação semântica entre palavras.",
        "analiseAlternativas": [
            "Incorreta. Não compartilham radical.",
            "Incorreta. São palavras semanticamente relacionadas, mas não da mesma família morfológica.",
            "Correta. Há base lexical comum.",
            "Incorreta. O campo semântico não implica radical comum.",
            "Incorreta. Relação de oposição/escala não forma família morfológica."
        ],
        "dicaBanca": "Não confunda família de palavras com campo semântico.",
        "pegadinha": "Palavras relacionadas em sentido podem ter radicais completamente diferentes.",
        "memorizar2026": "Família lexical = parentesco morfológico + radical/base comum.",
        "fonte": "Edital SEDUC-PA 2026 — Estrutura de palavras."
    },
    {
        "id": "SEDUC-LP-EFP-019",
        "numero": 19,
        "subtopico": "Justaposição x aglutinação",
        "dificuldade": "alta",
        "pergunta": "A oposição entre “guarda-roupa” e “planalto” ilustra, respectivamente,",
        "alternativas": [
            "prefixação e sufixação.",
            "regressão e conversão.",
            "parassíntese e prefixação.",
            "composição por justaposição e composição por aglutinação.",
            "sufixação e flexão."
        ],
        "correta": 3,
        "feedbackAcerto": "“Guarda-roupa” preserva os elementos na união; “planalto” apresenta fusão/alteração fonética.",
        "feedbackErro": "Ambas são palavras compostas; o critério é a conservação ou alteração dos elementos.",
        "analiseAlternativas": [
            "Incorreta. Não são processos derivacionais simples.",
            "Incorreta. Não há esses processos.",
            "Incorreta. Não há parassíntese.",
            "Correta. Justaposição e aglutinação, nessa ordem.",
            "Incorreta. Não se trata de flexão."
        ],
        "dicaBanca": "Questões comparativas ajudam a banca a testar duas classificações de uma vez.",
        "pegadinha": "O hífen sozinho não decide o processo.",
        "memorizar2026": "guarda-roupa = justaposição | planalto = aglutinação.",
        "fonte": "Edital SEDUC-PA 2026 — Composição."
    },
    {
        "id": "SEDUC-LP-EFP-020",
        "numero": 20,
        "subtopico": "Prefixal e sufixal x parassintética",
        "dificuldade": "alta",
        "pergunta": "A palavra “desigualdade” não deve ser classificada como parassintética porque",
        "alternativas": [
            "não possui radical.",
            "não apresenta prefixo.",
            "é formada exclusivamente por composição.",
            "é uma simples flexão de “igual”.",
            "existem formas intermediárias válidas, como “desigual” e “igualdade”, mostrando independência dos afixos."
        ],
        "correta": 4,
        "feedbackAcerto": "A existência de “desigual” e “igualdade” mostra que prefixo e sufixo não precisam entrar simultaneamente.",
        "feedbackErro": "Faça o teste das formas intermediárias: essa é a chave para distinguir parassíntese de prefixação+sufixação.",
        "analiseAlternativas": [
            "Incorreta. A base lexical está presente.",
            "Incorreta. Há prefixo “des-”.",
            "Incorreta. Não há composição de dois radicais.",
            "Incorreta. Surgiu novo vocábulo.",
            "Correta. Os afixos são independentes."
        ],
        "dicaBanca": "Esse teste evita um dos erros mais comuns em formação de palavras.",
        "pegadinha": "Dois afixos visíveis ≠ parassíntese automática.",
        "memorizar2026": "Formas intermediárias existentes → prefixal e sufixal.",
        "fonte": "Edital SEDUC-PA 2026 — Derivação."
    },
    {
        "id": "SEDUC-LP-EFP-021",
        "numero": 21,
        "subtopico": "Alomorfia do radical",
        "dificuldade": "alta",
        "pergunta": "As formas “faço”, “fiz” e “feito”, relacionadas ao verbo “fazer”, mostram que",
        "alternativas": [
            "um mesmo morfema lexical pode apresentar variantes formais, fenômeno conhecido como alomorfia.",
            "cada forma pertence a uma família lexical sem relação com as demais.",
            "o radical é sempre invariável em português.",
            "todas as diferenças são produzidas por prefixos.",
            "as três palavras são compostas por aglutinação."
        ],
        "correta": 0,
        "feedbackAcerto": "A base lexical de um mesmo vocábulo pode apresentar realizações formais diferentes em sua flexão ou formação.",
        "feedbackErro": "FGV já explorou variantes do radical do verbo “fazer”. O radical não precisa aparecer sempre com a mesma forma material.",
        "analiseAlternativas": [
            "Correta. Trata-se de variação mórfica do radical/base.",
            "Incorreta. As formas pertencem ao mesmo paradigma lexical.",
            "Incorreta. Há radicais com variantes.",
            "Incorreta. Não há prefixos responsáveis por essas formas.",
            "Incorreta. Não há composição."
        ],
        "dicaBanca": "A FGV/SEDUC-AM já perguntou especificamente por variantes da raiz/radical de “fazer”.",
        "pegadinha": "Radical é unidade lexical; isso não significa identidade fonética absoluta em todas as formas.",
        "memorizar2026": "Um morfema pode ter alomorfes: formas diferentes com a mesma função lexical.",
        "fonte": "FGV/SEDUC-AM — questão sobre variantes do radical de “fazer”; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-022",
        "numero": 22,
        "subtopico": "Estrutura verbal",
        "dificuldade": "alta",
        "pergunta": "Na análise tradicional de “cantávamos” como cant-a-va-mos, os segmentos “-va-” e “-mos” indicam, respectivamente,",
        "alternativas": [
            "radical e vogal temática.",
            "desinência modo-temporal e desinência número-pessoal.",
            "prefixo e sufixo derivacional.",
            "vogal temática e radical.",
            "sufixo nominal e desinência de gênero."
        ],
        "correta": 1,
        "feedbackAcerto": "“-va-” marca informações de tempo/modo e “-mos” marca número/pessoa na forma verbal.",
        "feedbackErro": "Separe estrutura lexical (radical/tema) de marcas flexionais do verbo.",
        "analiseAlternativas": [
            "Incorreta. O radical é “cant-” e a vogal temática é “-a-”.",
            "Correta. São desinências verbais flexionais.",
            "Incorreta. Não criam novo vocábulo.",
            "Incorreta. A ordem e as funções estão erradas.",
            "Incorreta. Trata-se de verbo."
        ],
        "dicaBanca": "FGV pode pedir classificação de um segmento específico dentro de uma forma verbal.",
        "pegadinha": "Desinências verbais não são sufixos derivacionais.",
        "memorizar2026": "cant-a-va-mos → radical + VT + DMT + DNP.",
        "fonte": "Edital SEDUC-PA 2026 — Estrutura de palavras."
    },
    {
        "id": "SEDUC-LP-EFP-023",
        "numero": 23,
        "subtopico": "Criação lexical em contexto",
        "dificuldade": "alta",
        "pergunta": "Em um texto literário, o autor combina partes de palavras ligadas a “coração”, “samba” e “tamborim” para criar uma forma inédita. Do ponto de vista da formação vocabular, o procedimento evidencia",
        "alternativas": [
            "mera flexão de número de uma palavra já existente.",
            "eliminação obrigatória de qualquer efeito semântico.",
            "produtividade lexical pela combinação de elementos de palavras para criar uma nova unidade expressiva.",
            "apenas correção ortográfica de um vocábulo antigo.",
            "transformação de uma oração em substantivo sem alteração formal."
        ],
        "correta": 2,
        "feedbackAcerto": "A língua dispõe de mecanismos produtivos de criação lexical; em textos literários, combinações inéditas podem concentrar campos de sentido e produzir efeito expressivo.",
        "feedbackErro": "A questão não descreve flexão nem simples mudança de classe; há criação deliberada de nova unidade lexical.",
        "analiseAlternativas": [
            "Incorreta. Forma-se novo vocábulo.",
            "Incorreta. O efeito semântico é central.",
            "Correta. Há produtividade lexical e criação expressiva.",
            "Incorreta. Não se trata de ortografia.",
            "Incorreta. Não é derivação imprópria."
        ],
        "dicaBanca": "Na prova FGV 2026 para Professor de Língua Portuguesa, a banca explorou a criação estilística de “corasamborim” em contexto.",
        "pegadinha": "A FGV pode cobrar formação lexical pelo efeito produzido no texto, e não pela nomenclatura isolada.",
        "memorizar2026": "Processos de formação também são recursos de construção de sentido.",
        "fonte": "FGV/SEDUC-SP 2026 — Professor de Língua Portuguesa, questão sobre criação lexical de “corasamborim”."
    },
    {
        "id": "SEDUC-LP-EFP-024",
        "numero": 24,
        "subtopico": "Radical x tema",
        "dificuldade": "alta",
        "pergunta": "Assinale a afirmativa correta sobre radical e tema verbal.",
        "alternativas": [
            "São sempre exatamente o mesmo segmento.",
            "Radical é necessariamente um prefixo.",
            "Tema é formado apenas pela desinência número-pessoal.",
            "Nos verbos regulares, o tema resulta normalmente da combinação do radical com a vogal temática.",
            "Vogal temática só ocorre em substantivos."
        ],
        "correta": 3,
        "feedbackAcerto": "Na análise tradicional dos verbos regulares, radical + vogal temática constituem o tema.",
        "feedbackErro": "Use como modelo cantar: radical cant-; vogal temática -a-; tema canta-.",
        "analiseAlternativas": [
            "Incorreta. Tema e radical são conceitos distintos.",
            "Incorreta. Radical não é prefixo.",
            "Incorreta. Desinência número-pessoal vem depois do tema.",
            "Correta. É a relação tradicional.",
            "Incorreta. Vogais temáticas são especialmente relevantes na conjugação verbal."
        ],
        "dicaBanca": "Em prova para professor, a FGV já distinguiu raiz/radical/tema em análise de forma verbal.",
        "pegadinha": "Radical ≠ tema.",
        "memorizar2026": "Tema verbal = radical + vogal temática.",
        "fonte": "Edital SEDUC-PA 2026; FGV/SEDUC-AM — análise de elemento mórfico."
    },
    {
        "id": "SEDUC-LP-EFP-025",
        "numero": 25,
        "subtopico": "Caso integrador — processo e sentido",
        "dificuldade": "alta",
        "pergunta": "Considere “desigualdade”. A análise que reúne corretamente estrutura, processo de formação e efeito lexical é",
        "alternativas": [
            "é flexão de “igual”, e “des-” marca número.",
            "é composição por justaposição de “des” e “igualdade”.",
            "é parassíntese porque todo vocábulo com prefixo e sufixo é parassintético.",
            "é derivação regressiva de “desigualar”.",
            "é formação prefixal e sufixal a partir da base “igual”, com “des-” acrescentando oposição/negação e “-dade” formando substantivo de qualidade/estado; “desigual” e “igualdade” existem independentemente."
        ],
        "correta": 4,
        "feedbackAcerto": "A análise considera simultaneamente a existência das formas intermediárias, o valor dos afixos e a classe resultante.",
        "feedbackErro": "A questão exige o raciocínio completo: estrutura + processo + sentido. Teste as formas “desigual” e “igualdade”.",
        "analiseAlternativas": [
            "Incorreta. Não é flexão e “des-” não marca número.",
            "Incorreta. “des-” é prefixo, não radical autônomo nesse vocábulo.",
            "Incorreta. A existência de formas intermediárias exclui parassíntese.",
            "Incorreta. Não ocorre redução deverbal.",
            "Correta. Reúne processo, estrutura e efeito semântico."
        ],
        "dicaBanca": "O formato mais próximo da FGV combina classificação com justificativa semântica e contextual.",
        "pegadinha": "A alternativa pode acertar o nome de um afixo, mas errar o processo global.",
        "memorizar2026": "Analise sempre: base → morfemas → processo → classe resultante → sentido.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de morfologia contextualizada."
    }
];

    window.seducLinguaPortuguesaEstruturaFormacaoPalavras2026 = banco;
})();
