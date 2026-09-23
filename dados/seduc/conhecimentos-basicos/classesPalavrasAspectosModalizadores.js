/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 18:
   Classes de palavras; aspectos morfológicos, sintáticos,
   semânticos e textuais; modalizadores.
   25 questões autorais calibradas pelo edital e pelo padrão FGV.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-LP-CLP-001",
        "numero": 1,
        "subtopico": "Substantivo — substantivação no contexto",
        "dificuldade": "media",
        "pergunta": "Na frase “O caminhar diário ajudou a organizar as ideias”, a palavra “caminhar” funciona como",
        "alternativas": [
            "substantivo, pois é empregada como núcleo nominal, determinada pelo artigo “o”.",
            "verbo no infinitivo com função exclusiva de predicado.",
            "adjetivo, por caracterizar o termo “diário”.",
            "advérbio, por indicar circunstância de modo.",
            "interjeição, por expressar atitude do enunciador."
        ],
        "correta": 0,
        "feedbackAcerto": "O artigo “o” substantiva a forma infinitiva: “caminhar” passa a funcionar como núcleo de um sintagma nominal.",
        "feedbackErro": "A classe de uma palavra deve ser analisada em uso. O infinitivo pode ser substantivado quando desempenha função nominal.",
        "analiseAlternativas": [
            "Correta. O artigo e a função sintática confirmam o uso substantivo.",
            "Incorreta. A forma mantém origem verbal, mas não exerce aqui função de núcleo verbal.",
            "Incorreta. “diário” é que caracteriza “caminhar”.",
            "Incorreta. Não exprime circunstância.",
            "Incorreta. Não há reação emotiva autônoma."
        ],
        "dicaBanca": "A FGV costuma cobrar classe gramatical no contexto, não pela forma isolada.",
        "pegadinha": "Uma mesma forma pode exercer classes diferentes conforme o emprego.",
        "memorizar2026": "Classe gramatical depende do funcionamento contextual da palavra.",
        "fonte": "Edital SEDUC-PA 2026 — classes de palavras e aspectos morfológicos, sintáticos, semânticos e textuais."
    },
    {
        "id": "SEDUC-LP-CLP-002",
        "numero": 2,
        "subtopico": "Adjetivo — posição e efeito de sentido",
        "dificuldade": "alta",
        "pergunta": "Compare “um grande professor” e “um professor grande”. A mudança de posição do adjetivo mostra que",
        "alternativas": [
            "a classe gramatical de “grande” deixa de ser adjetivo na segunda expressão.",
            "a posição do adjetivo pode alterar a nuance semântica: na primeira, tende a indicar excelência; na segunda, pode indicar dimensão física.",
            "o substantivo “professor” passa a funcionar como advérbio.",
            "o artigo “um” muda de indefinido para definido.",
            "as duas expressões são necessariamente sinônimas em qualquer contexto."
        ],
        "correta": 1,
        "feedbackAcerto": "A anteposição e a posposição de certos adjetivos podem produzir leituras semânticas diferentes.",
        "feedbackErro": "A classe permanece adjetiva; o que muda é a interpretação construída pela posição e pelo contexto.",
        "analiseAlternativas": [
            "Incorreta. “grande” continua sendo adjetivo.",
            "Correta. A posição pode alterar o valor semântico.",
            "Incorreta. “professor” continua substantivo.",
            "Incorreta. “um” continua artigo indefinido.",
            "Incorreta. Há potencial diferença de sentido."
        ],
        "dicaBanca": "A FGV valoriza o efeito de sentido de escolhas gramaticais, e não apenas a nomenclatura.",
        "pegadinha": "Mudar a posição de uma palavra pode manter a classe e mudar o sentido.",
        "memorizar2026": "Adjetivo: forma + posição + contexto = efeito de sentido.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de análise contextual."
    },
    {
        "id": "SEDUC-LP-CLP-003",
        "numero": 3,
        "subtopico": "Artigo — determinação e pressuposição",
        "dificuldade": "media",
        "pergunta": "Em “A coordenadora pediu que os professores entregassem os relatórios”, o artigo definido em “os relatórios” tende a produzir o efeito de",
        "alternativas": [
            "indicar que se trata de quaisquer relatórios ainda não identificáveis.",
            "transformar “relatórios” em adjetivo.",
            "apresentar os relatórios como identificáveis ou recuperáveis no contexto comunicativo.",
            "eliminar a referência a um conjunto específico.",
            "indicar obrigatoriamente que existe apenas um relatório."
        ],
        "correta": 2,
        "feedbackAcerto": "O artigo definido tende a apresentar o referente como determinado, conhecido ou recuperável no contexto.",
        "feedbackErro": "Compare “os relatórios” com “uns relatórios”: o grau de determinação muda.",
        "analiseAlternativas": [
            "Incorreta. Essa leitura combina mais com indefinição.",
            "Incorreta. O substantivo mantém sua classe.",
            "Correta. O artigo definido orienta a identificação do referente.",
            "Incorreta. O artigo faz justamente o contrário.",
            "Incorreta. O plural afasta a ideia de unidade."
        ],
        "dicaBanca": "Artigos têm papel textual de introduzir, determinar e recuperar referentes.",
        "pegadinha": "Artigo não é mero acompanhante mecânico do substantivo.",
        "memorizar2026": "Artigo definido = referente apresentado como determinado/identificável.",
        "fonte": "Edital SEDUC-PA 2026 — artigos em seus aspectos semânticos e textuais."
    },
    {
        "id": "SEDUC-LP-CLP-004",
        "numero": 4,
        "subtopico": "Numeral — valor textual",
        "dificuldade": "media",
        "pergunta": "Em “Quase cem estudantes participaram da atividade”, a expressão “cem estudantes” contém um numeral que",
        "alternativas": [
            "qualifica subjetivamente os estudantes.",
            "retoma anaforicamente um referente anterior.",
            "indica ordem em uma sequência.",
            "quantifica o substantivo, enquanto “quase” reduz a precisão exata da quantidade no enunciado.",
            "funciona como interjeição de intensidade."
        ],
        "correta": 3,
        "feedbackAcerto": "“cem” quantifica; “quase” modaliza a precisão da quantidade, indicando valor aproximado inferior ao total mencionado.",
        "feedbackErro": "Separe a função do numeral da contribuição semântica do advérbio “quase”.",
        "analiseAlternativas": [
            "Incorreta. Não há caracterização qualitativa.",
            "Incorreta. Numeral não está retomando referente.",
            "Incorreta. “cem” é cardinal, não ordinal.",
            "Correta. Há quantificação com aproximação.",
            "Incorreta. Não é interjeição."
        ],
        "dicaBanca": "FGV pode combinar classes diferentes na mesma expressão para cobrar o efeito conjunto.",
        "pegadinha": "Numeral e advérbio podem atuar juntos na construção da quantidade.",
        "memorizar2026": "Numeral cardinal quantifica; o contexto pode torná-lo exato ou aproximado.",
        "fonte": "Edital SEDUC-PA 2026 — numerais e aspectos semânticos/textuais."
    },
    {
        "id": "SEDUC-LP-CLP-005",
        "numero": 5,
        "subtopico": "Pronome — referenciação e coesão",
        "dificuldade": "media",
        "pergunta": "Leia: “A escola lançou um projeto de leitura. Ele começará em outubro.” No segundo período, “ele”",
        "alternativas": [
            "indica uma circunstância temporal.",
            "introduz um referente completamente novo.",
            "funciona como artigo definido.",
            "expressa uma avaliação do enunciador.",
            "retoma “um projeto de leitura”, contribuindo para a coesão referencial."
        ],
        "correta": 4,
        "feedbackAcerto": "O pronome pessoal retoma um referente já introduzido e evita repetição.",
        "feedbackErro": "Procure o antecedente de “ele” no período anterior.",
        "analiseAlternativas": [
            "Incorreta. Não é advérbio.",
            "Incorreta. Há antecedente explícito.",
            "Incorreta. Não determina substantivo.",
            "Incorreta. Não expressa juízo.",
            "Correta. Há retomada anafórica."
        ],
        "dicaBanca": "A FGV frequentemente cruza pronomes com coesão, referenciação e interpretação.",
        "pegadinha": "Pronome deve ser lido pelo referente que recupera no texto.",
        "memorizar2026": "Pronome = importante recurso de referenciação e coesão.",
        "fonte": "Edital SEDUC-PA 2026 — pronomes nos aspectos sintáticos e textuais."
    },
    {
        "id": "SEDUC-LP-CLP-006",
        "numero": 6,
        "subtopico": "Verbo — tempo e efeito de sentido",
        "dificuldade": "alta",
        "pergunta": "Em um cartaz de combate ao preconceito, a frase “Vencerei essa luta” produz, em relação a “Venci essa luta”, o efeito principal de",
        "alternativas": [
            "projetar a ação como ainda não concluída, apresentando a luta como processo futuro ou em curso.",
            "eliminar qualquer referência temporal.",
            "transformar o verbo em substantivo.",
            "indicar que a ação é simultaneamente passada e concluída.",
            "produzir apenas mudança de pessoa gramatical."
        ],
        "correta": 0,
        "feedbackAcerto": "O futuro desloca o evento para uma realização ainda projetada, alterando a perspectiva temporal do enunciado.",
        "feedbackErro": "Compare o valor temporal de “venci” e “vencerei”. A diferença tem efeito direto na mensagem.",
        "analiseAlternativas": [
            "Correta. O futuro altera a perspectiva e o sentido discursivo.",
            "Incorreta. O tempo verbal continua marcado.",
            "Incorreta. A forma permanece verbal.",
            "Incorreta. Essa leitura corresponde mais ao pretérito perfeito.",
            "Incorreta. A pessoa continua sendo a primeira."
        ],
        "dicaBanca": "Na SEDUC-SP 2026, a FGV cobrou exatamente o efeito de sentido da substituição de uma forma verbal passada por uma futura.",
        "pegadinha": "Tempo verbal não é apenas classificação morfológica; constrói perspectiva discursiva.",
        "memorizar2026": "Verbo: tempo e modo ajudam a construir posicionamento e temporalidade.",
        "fonte": "FGV/SEDUC-SP 2026 — Professor de Língua Portuguesa, questão sobre “venci/vencerei”; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-CLP-007",
        "numero": 7,
        "subtopico": "Advérbio — efeito textual",
        "dificuldade": "alta",
        "pergunta": "Em “Agora percebo que interpretei mal a situação”, a combinação entre “agora” e “percebo” sugere que o enunciador",
        "alternativas": [
            "sempre teve a mesma compreensão.",
            "reformula no presente uma compreensão anterior.",
            "nega ter qualquer posicionamento.",
            "descreve apenas um lugar.",
            "apresenta uma ordem ao interlocutor."
        ],
        "correta": 1,
        "feedbackAcerto": "O advérbio temporal associado ao presente de “percebo” constrói contraste entre entendimento anterior e compreensão atual.",
        "feedbackErro": "Não basta classificar “agora” como advérbio de tempo; observe o efeito produzido no posicionamento do enunciador.",
        "analiseAlternativas": [
            "Incorreta. O enunciado pressupõe mudança de compreensão.",
            "Correta. Há reformulação no presente.",
            "Incorreta. O enunciador explicita seu ponto de vista.",
            "Incorreta. “agora” é temporal.",
            "Incorreta. Não há valor injuntivo."
        ],
        "dicaBanca": "A FGV/SEDUC-SP 2026 cobrou “agora” junto a “percebo” para avaliar efeito de sentido, não mera classificação.",
        "pegadinha": "Classificar o advérbio é só o primeiro passo; a FGV quer saber o que ele faz no texto.",
        "memorizar2026": "Advérbio pode marcar circunstância e também organizar o ponto de vista.",
        "fonte": "FGV/SEDUC-SP 2026 — Professor de Língua Portuguesa, questão 31; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-CLP-008",
        "numero": 8,
        "subtopico": "Conjunção — relação argumentativa",
        "dificuldade": "alta",
        "pergunta": "No enunciado “Estudei bastante, mas não obtive o resultado esperado”, a conjunção “mas”",
        "alternativas": [
            "introduz causa.",
            "indica conclusão necessária.",
            "estabelece oposição entre uma expectativa criada pela primeira oração e o resultado apresentado na segunda.",
            "apenas soma duas informações equivalentes.",
            "marca uma condição para que o fato ocorra."
        ],
        "correta": 2,
        "feedbackAcerto": "“Mas” estabelece relação adversativa e contrasta a expectativa ligada ao estudo com o resultado inesperado.",
        "feedbackErro": "A FGV costuma perguntar quais informações o conectivo põe em contraste e qual efeito essa relação produz.",
        "analiseAlternativas": [
            "Incorreta. Não há causa.",
            "Incorreta. Não é conclusiva.",
            "Correta. Há contraste argumentativo.",
            "Incorreta. Não é aditiva.",
            "Incorreta. Não é condicional."
        ],
        "dicaBanca": "Na SEDUC-SP 2026, a FGV cobrou a função argumentativa de “mas” em uma canção.",
        "pegadinha": "Não basta dizer “conjunção adversativa”; identifique o contraste concreto.",
        "memorizar2026": "Conjunção = classe relacional; o sentido depende das unidades que articula.",
        "fonte": "FGV/SEDUC-SP 2026 — Professor de Língua Portuguesa, questão sobre o conectivo “mas”; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-CLP-009",
        "numero": 9,
        "subtopico": "Interjeição — valor contextual",
        "dificuldade": "media",
        "pergunta": "No diálogo “— Ah! Então era isso que você queria dizer!”, a interjeição “Ah!” contribui principalmente para",
        "alternativas": [
            "indicar quantidade precisa.",
            "retomar um substantivo anterior.",
            "ligar duas orações por relação causal.",
            "expressar reação do falante diante de uma compreensão súbita.",
            "transformar a frase em registro necessariamente formal."
        ],
        "correta": 3,
        "feedbackAcerto": "Interjeições expressam reações, emoções, apelos e atitudes, cuja interpretação depende do contexto e da entonação.",
        "feedbackErro": "Observe a reação introduzida antes de “Então era isso...”.",
        "analiseAlternativas": [
            "Incorreta. Não é numeral.",
            "Incorreta. Não é pronome.",
            "Incorreta. Não é conjunção.",
            "Correta. Marca reação/compreensão.",
            "Incorreta. Interjeições são comuns na oralidade."
        ],
        "dicaBanca": "Interjeição é fortemente contextual; a mesma forma pode expressar surpresa, alívio, dor, reprovação etc.",
        "pegadinha": "Não atribua um único sentimento fixo à interjeição isolada.",
        "memorizar2026": "Interjeição = atitude/reação do enunciador, interpretada no contexto.",
        "fonte": "Edital SEDUC-PA 2026 — interjeições em seus aspectos semânticos e textuais."
    },
    {
        "id": "SEDUC-LP-CLP-010",
        "numero": 10,
        "subtopico": "Modalizador epistêmico",
        "dificuldade": "alta",
        "pergunta": "Na frase “Provavelmente a reunião terminará antes das 18h”, a palavra “provavelmente”",
        "alternativas": [
            "indica obrigação imposta ao receptor.",
            "expressa certeza absoluta.",
            "funciona como artigo indefinido.",
            "elimina o posicionamento do enunciador.",
            "modaliza o enunciado ao indicar uma avaliação de probabilidade."
        ],
        "correta": 4,
        "feedbackAcerto": "“Provavelmente” é modalizador epistêmico: sinaliza o grau de certeza/probabilidade assumido pelo enunciador.",
        "feedbackErro": "Pergunte qual grau de compromisso com a verdade da afirmação a palavra introduz.",
        "analiseAlternativas": [
            "Incorreta. Isso seria valor deôntico.",
            "Incorreta. O valor é probabilístico.",
            "Incorreta. Não determina substantivo.",
            "Incorreta. A palavra explicita posicionamento.",
            "Correta. Marca probabilidade."
        ],
        "dicaBanca": "Modalizadores revelam o grau de certeza, obrigação ou avaliação do enunciador.",
        "pegadinha": "Advérbio e modalizador não são categorias necessariamente excludentes: uma palavra pode ser advérbio e exercer função modalizadora.",
        "memorizar2026": "Epistêmico = certeza, dúvida, possibilidade, probabilidade.",
        "fonte": "Edital SEDUC-PA 2026 — modalizadores."
    },
    {
        "id": "SEDUC-LP-CLP-011",
        "numero": 11,
        "subtopico": "Modalizador deôntico",
        "dificuldade": "alta",
        "pergunta": "Em “Os candidatos devem apresentar documento de identificação”, o verbo “devem” expressa predominantemente",
        "alternativas": [
            "modalização deôntica de obrigação.",
            "modalização epistêmica de dúvida.",
            "avaliação afetiva positiva.",
            "mera localização temporal.",
            "quantificação aproximada."
        ],
        "correta": 0,
        "feedbackAcerto": "O verbo modal “dever” apresenta a ação como obrigatória no contexto.",
        "feedbackErro": "Modalização deôntica envolve dever, obrigação, permissão ou possibilidade normativa.",
        "analiseAlternativas": [
            "Correta. Há obrigação.",
            "Incorreta. Não há dúvida/probabilidade.",
            "Incorreta. Não é juízo apreciativo.",
            "Incorreta. O valor principal não é temporal.",
            "Incorreta. Não quantifica."
        ],
        "dicaBanca": "Verbos como dever, poder e precisar podem funcionar como modalizadores, dependendo do contexto.",
        "pegadinha": "“Dever” pode indicar probabilidade em outros contextos (“Ele deve estar em casa”); analise o uso concreto.",
        "memorizar2026": "Deôntico = obrigação, permissão, proibição, necessidade.",
        "fonte": "Edital SEDUC-PA 2026 — modalizadores."
    },
    {
        "id": "SEDUC-LP-CLP-012",
        "numero": 12,
        "subtopico": "Modalizador avaliativo/apreciativo",
        "dificuldade": "media",
        "pergunta": "Na frase “Felizmente, ninguém se feriu no acidente”, o termo “felizmente”",
        "alternativas": [
            "indica o local do acidente.",
            "expressa avaliação positiva do enunciador sobre o fato mencionado.",
            "atua como pronome indefinido.",
            "introduz uma causa objetiva.",
            "marca uma obrigação."
        ],
        "correta": 1,
        "feedbackAcerto": "“Felizmente” manifesta julgamento/apreciação do enunciador em relação ao conteúdo da oração.",
        "feedbackErro": "Observe que o termo não descreve circunstância da ação; ele avalia o fato inteiro.",
        "analiseAlternativas": [
            "Incorreta. Não é advérbio de lugar.",
            "Correta. Há modalização apreciativa.",
            "Incorreta. Não é pronome.",
            "Incorreta. Não estabelece causa.",
            "Incorreta. Não há valor deôntico."
        ],
        "dicaBanca": "A FGV costuma explorar palavras que revelam posicionamento, mesmo em textos aparentemente informativos.",
        "pegadinha": "Um advérbio pode modificar toda a oração e funcionar como modalizador.",
        "memorizar2026": "Apreciativo = juízo de valor do enunciador.",
        "fonte": "Edital SEDUC-PA 2026 — modalizadores e advérbios."
    },
    {
        "id": "SEDUC-LP-CLP-013",
        "numero": 13,
        "subtopico": "Substantivo abstrato e nominalização",
        "dificuldade": "alta",
        "pergunta": "Compare “A comissão analisou o projeto” e “A análise do projeto pela comissão foi concluída”. A transformação de “analisou” em “análise”",
        "alternativas": [
            "elimina qualquer relação semântica com a ação original.",
            "transforma o substantivo em verbo.",
            "nominaliza o processo, permitindo apresentá-lo como entidade e reorganizar a estrutura informacional do enunciado.",
            "cria uma interjeição.",
            "faz desaparecer todos os participantes da ação."
        ],
        "correta": 2,
        "feedbackAcerto": "A nominalização transforma um processo verbal em expressão nominal, recurso frequente em textos formais e científicos.",
        "feedbackErro": "Observe como a ação passa a ser tratada como “coisa”/entidade nomeável.",
        "analiseAlternativas": [
            "Incorreta. A relação semântica permanece.",
            "Incorreta. O movimento é verbo → substantivo.",
            "Correta. Há nominalização e reorganização textual.",
            "Incorreta. Não há interjeição.",
            "Incorreta. A comissão ainda pode aparecer como agente."
        ],
        "dicaBanca": "Aspectos morfológicos, sintáticos e textuais podem aparecer juntos na mesma questão.",
        "pegadinha": "Classe gramatical também interfere na organização do texto.",
        "memorizar2026": "Nominalização = processo/qualidade apresentados como nome.",
        "fonte": "Edital SEDUC-PA 2026 — substantivos em aspectos morfológicos, sintáticos, semânticos e textuais."
    },
    {
        "id": "SEDUC-LP-CLP-014",
        "numero": 14,
        "subtopico": "Pronome relativo — função textual",
        "dificuldade": "alta",
        "pergunta": "Em “A escola lançou uma norma que estabelece novos procedimentos”, o pronome relativo “que”",
        "alternativas": [
            "expressa emoção do enunciador.",
            "funciona como numeral ordinal.",
            "indica uma circunstância de tempo.",
            "retoma “uma norma” e introduz uma oração que restringe/caracteriza esse antecedente.",
            "atua como artigo definido."
        ],
        "correta": 3,
        "feedbackAcerto": "O relativo “que” retoma o antecedente e conecta a oração adjetiva à expressão nominal.",
        "feedbackErro": "Identifique o antecedente do pronome e a informação acrescentada sobre ele.",
        "analiseAlternativas": [
            "Incorreta. Não é interjeição.",
            "Incorreta. Não é numeral.",
            "Incorreta. Não é advérbio.",
            "Correta. Há retomada e conexão sintático-textual.",
            "Incorreta. Não determina substantivo como artigo."
        ],
        "dicaBanca": "Na SEDUC-SP 2026, a FGV cobrou o pronome relativo “que” em orações restritivas e explicativas, relacionando pontuação e sentido.",
        "pegadinha": "O “que” pode exercer papéis diferentes; identifique antecedente e função.",
        "memorizar2026": "Pronome relativo = retoma antecedente + liga oração subordinada.",
        "fonte": "FGV/SEDUC-SP 2026 — Professor de Língua Portuguesa, questão 26; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-CLP-015",
        "numero": 15,
        "subtopico": "Artigo e substantivação",
        "dificuldade": "media",
        "pergunta": "Em “O desconhecido costuma causar receio”, a presença do artigo “o” antes de “desconhecido”",
        "alternativas": [
            "impede que a palavra desempenhe função nominal.",
            "transforma obrigatoriamente a expressão em advérbio.",
            "indica plural.",
            "elimina qualquer valor adjetivo da base em todos os contextos.",
            "favorece a substantivação de “desconhecido”, que passa a funcionar como núcleo nominal."
        ],
        "correta": 4,
        "feedbackAcerto": "O artigo pode substantivar palavras de outras classes, fazendo-as funcionar como nomes em determinado contexto.",
        "feedbackErro": "Observe a função de núcleo do sintagma “o desconhecido”.",
        "analiseAlternativas": [
            "Incorreta. O artigo favorece função nominal.",
            "Incorreta. Não é advérbio.",
            "Incorreta. O artigo está no singular.",
            "Incorreta. A forma pode ser adjetiva em outros contextos.",
            "Correta. Há substantivação contextual."
        ],
        "dicaBanca": "A FGV gosta de palavras que mudam de classe conforme o contexto.",
        "pegadinha": "Classe contextual não elimina as possibilidades de uso da mesma forma em outros enunciados.",
        "memorizar2026": "Artigo + palavra de outra classe pode produzir substantivação.",
        "fonte": "Edital SEDUC-PA 2026 — artigos e substantivos."
    },
    {
        "id": "SEDUC-LP-CLP-016",
        "numero": 16,
        "subtopico": "Numeral — ordinal x cardinal",
        "dificuldade": "facil",
        "pergunta": "Na frase “A estudante ficou em terceiro lugar”, a palavra “terceiro” é um numeral",
        "alternativas": [
            "ordinal, pois indica posição em uma sequência.",
            "cardinal, pois expressa quantidade absoluta.",
            "multiplicativo, pois indica triplicação.",
            "fracionário, pois indica uma parte de três.",
            "coletivo, pois designa um conjunto."
        ],
        "correta": 0,
        "feedbackAcerto": "Numeral ordinal indica ordem ou posição.",
        "feedbackErro": "Pergunte se o numeral conta, ordena, multiplica ou fraciona.",
        "analiseAlternativas": [
            "Correta. “terceiro” indica ordem.",
            "Incorreta. Cardinal seria “três”.",
            "Incorreta. Multiplicativo seria “triplo”.",
            "Incorreta. Fracionário seria “um terço”.",
            "Incorreta. Não é coletivo."
        ],
        "dicaBanca": "Questões diretas ainda podem aparecer, mas a tendência é inserir o numeral em contexto.",
        "pegadinha": "Três, terceiro, triplo e um terço pertencem a subclasses diferentes.",
        "memorizar2026": "Cardinal = quantidade | ordinal = ordem | multiplicativo = multiplicação | fracionário = fração.",
        "fonte": "Edital SEDUC-PA 2026 — numerais."
    },
    {
        "id": "SEDUC-LP-CLP-017",
        "numero": 17,
        "subtopico": "Pronome demonstrativo — dêixis",
        "dificuldade": "media",
        "pergunta": "Em uma apresentação presencial, o professor aponta para um gráfico projetado e diz: “Este dado merece atenção”. O pronome “este”",
        "alternativas": [
            "expressa uma ação futura.",
            "funciona deiticamente, orientando o receptor para um referente presente na situação comunicativa.",
            "indica causa.",
            "é uma interjeição.",
            "marca uma quantidade indeterminada."
        ],
        "correta": 1,
        "feedbackAcerto": "O demonstrativo pode apontar para elementos do espaço/situação comunicativa, exercendo função dêitica.",
        "feedbackErro": "O gesto e o contexto situacional ajudam a identificar o referente.",
        "analiseAlternativas": [
            "Incorreta. Não é verbo.",
            "Correta. Há dêixis situacional.",
            "Incorreta. Não é conjunção causal.",
            "Incorreta. Não é interjeição.",
            "Incorreta. Não é numeral."
        ],
        "dicaBanca": "Pronomes demonstrativos podem ter valor textual ou extratextual.",
        "pegadinha": "Nem toda referência pronominal depende de antecedente escrito.",
        "memorizar2026": "Dêixis = referência orientada pela situação de enunciação.",
        "fonte": "Edital SEDUC-PA 2026 — pronomes em dimensão textual."
    },
    {
        "id": "SEDUC-LP-CLP-018",
        "numero": 18,
        "subtopico": "Verbo e impessoalização",
        "dificuldade": "alta",
        "pergunta": "Em um texto científico, a construção “Considera-se que os resultados são consistentes” contribui principalmente para",
        "alternativas": [
            "destacar emocionalmente quem escreveu o texto.",
            "produzir informalidade conversacional.",
            "apresentar a informação de modo mais impessoal, reduzindo a saliência de um agente individual.",
            "indicar ordem direta ao leitor.",
            "marcar necessariamente uma dúvida."
        ],
        "correta": 2,
        "feedbackAcerto": "A construção com “se” contribui para uma formulação impessoal e para o apagamento do agente individual.",
        "feedbackErro": "Observe o efeito discursivo da ausência de um sujeito agente individualizado.",
        "analiseAlternativas": [
            "Incorreta. O efeito é de distanciamento, não de emoção.",
            "Incorreta. É compatível com registro formal/científico.",
            "Correta. Há impessoalização discursiva.",
            "Incorreta. Não é imperativo.",
            "Incorreta. Não exprime obrigatoriamente dúvida."
        ],
        "dicaBanca": "A SEDUC-SP 2026 cobrou diretamente o efeito de sentido de “Considera-se que” na linguagem científica.",
        "pegadinha": "A análise de verbo/pronome deve chegar ao efeito textual produzido.",
        "memorizar2026": "Formas impessoais podem construir objetividade e distanciamento enunciativo.",
        "fonte": "FGV/SEDUC-SP 2026 — Professor de Língua Portuguesa, questão 34; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-CLP-019",
        "numero": 19,
        "subtopico": "Advérbio — escopo",
        "dificuldade": "alta",
        "pergunta": "Compare: I. “Somente os professores participaram.” II. “Os professores participaram somente da primeira etapa.” A posição de “somente” mostra que",
        "alternativas": [
            "a palavra deixa de ser advérbio na segunda frase.",
            "o substantivo “professores” muda de classe.",
            "a presença do advérbio não produz qualquer diferença interpretativa.",
            "o escopo do advérbio muda: em I restringe quem participou; em II restringe de que parte participaram.",
            "“somente” funciona como conjunção em ambas."
        ],
        "correta": 3,
        "feedbackAcerto": "A posição altera o termo sobre o qual incide a restrição, produzindo sentidos diferentes.",
        "feedbackErro": "Identifique qual segmento está sendo limitado por “somente” em cada frase.",
        "analiseAlternativas": [
            "Incorreta. Continua advérbio.",
            "Incorreta. “professores” continua substantivo.",
            "Incorreta. O escopo muda.",
            "Correta. A restrição recai sobre elementos diferentes.",
            "Incorreta. Não é conjunção."
        ],
        "dicaBanca": "A FGV explora palavras pequenas cujo deslocamento muda o sentido.",
        "pegadinha": "Classe pode permanecer a mesma, mas o escopo e o efeito textual mudam.",
        "memorizar2026": "Advérbios restritivos: observe posição e escopo.",
        "fonte": "Edital SEDUC-PA 2026 — advérbios em dimensão semântica e textual."
    },
    {
        "id": "SEDUC-LP-CLP-020",
        "numero": 20,
        "subtopico": "Conjunção — causa x explicação",
        "dificuldade": "alta",
        "pergunta": "No enunciado “Feche a janela, porque está chovendo”, a conjunção “porque” introduz",
        "alternativas": [
            "uma oposição.",
            "uma conclusão.",
            "uma comparação.",
            "uma condição.",
            "uma justificativa/explicação para a orientação expressa na oração anterior."
        ],
        "correta": 4,
        "feedbackAcerto": "A segunda oração justifica o pedido de fechar a janela.",
        "feedbackErro": "Não classifique o conectivo isoladamente; observe a relação entre as duas orações.",
        "analiseAlternativas": [
            "Incorreta. Não há contraste.",
            "Incorreta. Não é consequência conclusiva.",
            "Incorreta. Não há comparação.",
            "Incorreta. Não há hipótese condicional.",
            "Correta. Há justificativa da ordem."
        ],
        "dicaBanca": "A FGV cobra o valor semântico concreto das conjunções, não apenas listas decoradas.",
        "pegadinha": "“Porque” pode assumir relações diferentes conforme o enunciado.",
        "memorizar2026": "Conjunção = relação de sentido entre segmentos.",
        "fonte": "Edital SEDUC-PA 2026 — conjunções em dimensão semântica e textual."
    },
    {
        "id": "SEDUC-LP-CLP-021",
        "numero": 21,
        "subtopico": "Adjetivo — predicativo",
        "dificuldade": "media",
        "pergunta": "Em “Os estudantes permaneceram atentos durante a explicação”, a palavra “atentos” é",
        "alternativas": [
            "adjetivo com função de predicativo do sujeito, atribuindo estado aos estudantes.",
            "substantivo com função de objeto direto.",
            "advérbio que modifica “permaneceram”.",
            "pronome que retoma “estudantes”.",
            "numeral que quantifica o sujeito."
        ],
        "correta": 0,
        "feedbackAcerto": "“Atentos” caracteriza o sujeito por meio do verbo de ligação/estado “permaneceram”, funcionando como predicativo.",
        "feedbackErro": "Classe e função não são a mesma coisa: aqui a classe é adjetivo e a função sintática é predicativo do sujeito.",
        "analiseAlternativas": [
            "Correta. Classe e função estão adequadamente identificadas.",
            "Incorreta. Não é substantivo nem objeto.",
            "Incorreta. A palavra concorda com “estudantes” e expressa estado.",
            "Incorreta. Não retoma referente.",
            "Incorreta. Não quantifica."
        ],
        "dicaBanca": "FGV frequentemente exige diferenciar classe gramatical de função sintática.",
        "pegadinha": "Adjetivo pode ser adjunto adnominal ou predicativo, entre outras funções.",
        "memorizar2026": "Classe ≠ função: adjetivo pode exercer diferentes papéis sintáticos.",
        "fonte": "Edital SEDUC-PA 2026 — adjetivos em aspectos morfológicos e sintáticos."
    },
    {
        "id": "SEDUC-LP-CLP-022",
        "numero": 22,
        "subtopico": "Pronome indefinido e generalização",
        "dificuldade": "media",
        "pergunta": "Em “Alguns estudantes preferem estudar pela manhã”, o pronome “alguns”",
        "alternativas": [
            "identifica individualmente todos os estudantes.",
            "indica quantidade indefinida dentro do conjunto mencionado.",
            "funciona como verbo auxiliar.",
            "expressa certeza absoluta.",
            "introduz oposição argumentativa."
        ],
        "correta": 1,
        "feedbackAcerto": "“Alguns” quantifica de modo indefinido e delimita apenas parte do conjunto.",
        "feedbackErro": "Observe que não se informa exatamente quantos estudantes.",
        "analiseAlternativas": [
            "Incorreta. Não individualiza todos.",
            "Correta. Há quantificação indefinida.",
            "Incorreta. Não é verbo.",
            "Incorreta. Não é modalizador de certeza.",
            "Incorreta. Não é conjunção."
        ],
        "dicaBanca": "Pronomes indefinidos também interferem na extensão e precisão das afirmações.",
        "pegadinha": "“Alguns” não equivale a “todos” nem a uma quantidade exata.",
        "memorizar2026": "Pronome indefinido = referência/quantificação não precisa.",
        "fonte": "Edital SEDUC-PA 2026 — pronomes."
    },
    {
        "id": "SEDUC-LP-CLP-023",
        "numero": 23,
        "subtopico": "Verbo — modo e modalização",
        "dificuldade": "alta",
        "pergunta": "Na frase “Talvez a equipe conclua o trabalho hoje”, a combinação de “talvez” com o subjuntivo “conclua”",
        "alternativas": [
            "apresenta o fato como ordem categórica.",
            "transforma “equipe” em adjetivo.",
            "constrói uma leitura de possibilidade/incerteza em relação à realização do fato.",
            "expressa fato passado e concluído.",
            "elimina a atitude do enunciador."
        ],
        "correta": 2,
        "feedbackAcerto": "O advérbio/modalizador “talvez” e o subjuntivo colaboram para marcar possibilidade e menor compromisso epistêmico.",
        "feedbackErro": "Observe o grau de certeza assumido pelo enunciador.",
        "analiseAlternativas": [
            "Incorreta. Não há ordem.",
            "Incorreta. “equipe” permanece substantivo.",
            "Correta. Há modalização de possibilidade.",
            "Incorreta. O fato é projetado, não passado.",
            "Incorreta. A atitude é explicitada."
        ],
        "dicaBanca": "Modalização pode resultar da combinação entre advérbios, verbos e modos verbais.",
        "pegadinha": "Não procure modalizador apenas em uma palavra isolada.",
        "memorizar2026": "Talvez + subjuntivo = possibilidade/incerteza.",
        "fonte": "Edital SEDUC-PA 2026 — verbos, advérbios e modalizadores."
    },
    {
        "id": "SEDUC-LP-CLP-024",
        "numero": 24,
        "subtopico": "Conjunção — progressão textual",
        "dificuldade": "alta",
        "pergunta": "Em “Os dados são relevantes; portanto, o projeto deve ser revisto”, a conjunção/conector “portanto”",
        "alternativas": [
            "introduz uma causa anterior aos dados.",
            "expressa condição.",
            "marca alternância.",
            "introduz conclusão derivada da informação anterior e contribui para a progressão argumentativa.",
            "apenas repete a primeira oração."
        ],
        "correta": 3,
        "feedbackAcerto": "“Portanto” sinaliza conclusão e organiza a progressão lógica do argumento.",
        "feedbackErro": "A segunda parte é apresentada como consequência/conclusão do que foi afirmado antes.",
        "analiseAlternativas": [
            "Incorreta. Não é causal.",
            "Incorreta. Não é condicional.",
            "Incorreta. Não há escolha.",
            "Correta. Há valor conclusivo e função textual.",
            "Incorreta. Há avanço argumentativo."
        ],
        "dicaBanca": "Conjunções e conectores são cobrados pela relação semântica e pela função na progressão textual.",
        "pegadinha": "Nome da classe não basta; identifique o movimento argumentativo.",
        "memorizar2026": "Conjunção/conector organiza relações e progressão do texto.",
        "fonte": "Edital SEDUC-PA 2026 — conjunções em dimensão textual."
    },
    {
        "id": "SEDUC-LP-CLP-025",
        "numero": 25,
        "subtopico": "Caso integrador — classes e efeitos",
        "dificuldade": "alta",
        "pergunta": "Leia: “Felizmente, os dois estudantes que revisaram cuidadosamente o texto provavelmente evitarão novos erros.” A análise que melhor considera classes e efeitos de sentido é",
        "alternativas": [
            "“felizmente” e “provavelmente” são artigos; “dois” é pronome; “que” é advérbio.",
            "“dois” é adjetivo; “cuidadosamente” é substantivo; “que” é interjeição.",
            "“felizmente” indica tempo; “provavelmente” indica lugar; “dois” é artigo.",
            "“que” não possui antecedente e “cuidadosamente” funciona como pronome.",
            "“felizmente” avalia o fato, “dois” quantifica “estudantes”, “que” retoma esse antecedente, “cuidadosamente” modifica o processo de revisar e “provavelmente” marca probabilidade."
        ],
        "correta": 4,
        "feedbackAcerto": "A alternativa integra corretamente classificação e funcionamento textual: modalização apreciativa e epistêmica, numeral, pronome relativo e advérbio.",
        "feedbackErro": "A questão exige olhar cada forma no contexto e explicar o efeito produzido, não apenas memorizar rótulos.",
        "analiseAlternativas": [
            "Incorreta. As classes foram trocadas.",
            "Incorreta. “dois” é numeral, “cuidadosamente” é advérbio e “que” é pronome relativo.",
            "Incorreta. Os valores semânticos estão errados.",
            "Incorreta. “que” retoma “estudantes”; “cuidadosamente” é advérbio.",
            "Correta. A análise reúne classe, referência e modalização."
        ],
        "dicaBanca": "Este é o formato mais próximo da tendência recente da FGV: várias escolhas linguísticas analisadas pelo efeito conjunto.",
        "pegadinha": "A alternativa pode acertar uma classe e errar a função ou o valor textual.",
        "memorizar2026": "FGV: classe + função + sentido + efeito textual.",
        "fonte": "Edital SEDUC-PA 2026; calibrado por FGV/SEDUC-SP 2026, questões 26, 29, 31, 34 e 35."
    }
];

    window.seducLinguaPortuguesaClassesPalavrasModalizadores2026 = banco;
})();
