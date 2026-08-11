// Banco revisado — Educação Matemática e Metodologias
// 70 questões de nível de concurso, distribuídas por 18 subtemas.

const educacaoMatematicaMetodologias = [
    {
        "subtopico": "Educação Matemática",
        "pergunta": "Uma turma resolve corretamente algoritmos, mas não consegue explicar por que eles funcionam nem escolher estratégias em situações novas. A intervenção mais coerente com a Educação Matemática é:",
        "alternativas": [
            "articular procedimentos, significados, representações e discussão das estratégias utilizadas.",
            "ampliar a quantidade de exercícios do mesmo formato para estabilizar o algoritmo aprendido.",
            "substituir os algoritmos por jogos livres e deixar a formalização para etapas posteriores do curso.",
            "priorizar respostas finais corretas e reduzir o tempo dedicado às justificativas dos estudantes.",
            "separar atividades conceituais das procedimentais para evitar interferência entre formas de raciocínio."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! A Educação Matemática busca integrar conhecimento conceitual, procedimentos, linguagem e construção de significados, em vez de reduzir a aprendizagem à execução mecânica.",
        "feedbackErro": "❌ Atenção! A Educação Matemática busca integrar conhecimento conceitual, procedimentos, linguagem e construção de significados, em vez de reduzir a aprendizagem à execução mecânica.",
        "dicaBanca": "Questões difíceis costumam opor compreensão e procedimento. A alternativa forte integra os dois."
    },
    {
        "subtopico": "Educação Matemática",
        "pergunta": "Em reunião pedagógica, dois professores discordam. O primeiro afirma que compreender Matemática é dominar técnicas; o segundo defende que técnicas devem ser relacionadas a conceitos, problemas e argumentos. A posição mais adequada é:",
        "alternativas": [
            "a primeira, pois a precisão do cálculo antecede qualquer discussão sobre significado matemático.",
            "a segunda, porque o domínio procedimental ganha sentido quando articulado à compreensão conceitual.",
            "a primeira, desde que os exercícios aumentem gradualmente de dificuldade e mantenham o mesmo método.",
            "as duas, desde que cada aula escolha entre raciocínio conceitual ou treinamento procedimental.",
            "nenhuma, porque a Educação Matemática deve privilegiar recursos lúdicos em lugar de sistematização."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! Procedimentos e conceitos não são polos excludentes; uma prática consistente relaciona técnicas, significados e argumentação.",
        "feedbackErro": "❌ Atenção! Procedimentos e conceitos não são polos excludentes; uma prática consistente relaciona técnicas, significados e argumentação.",
        "dicaBanca": "Desconfie de respostas que tratem cálculo e compreensão como escolhas mutuamente excludentes."
    },
    {
        "subtopico": "Educação Matemática",
        "pergunta": "Ao observar uma aula, a coordenação registra: I. alunos comparam estratégias; II. o professor sistematiza propriedades; III. erros são discutidos; IV. a nota considera exclusivamente o resultado final. Qual conjunto de práticas é compatível com uma abordagem formativa da Educação Matemática?",
        "alternativas": [
            "I e IV.",
            "II e IV.",
            "I, II e III.",
            "III e IV.",
            "I, II, III e IV."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Comparação de estratégias, sistematização conceitual e análise do erro favorecem aprendizagem; reduzir avaliação ao resultado final rompe essa lógica.",
        "feedbackErro": "❌ Atenção! Comparação de estratégias, sistematização conceitual e análise do erro favorecem aprendizagem; reduzir avaliação ao resultado final rompe essa lógica.",
        "dicaBanca": "Em itens com assertivas, verifique se alguma delas recoloca o ensino mecânico por outro caminho."
    },
    {
        "subtopico": "Educação Matemática",
        "pergunta": "Um professor inicia frações com uma situação de partilha, passa a desenhos, compara diferentes escritas e termina explicitando relações simbólicas. Essa sequência evidencia:",
        "alternativas": [
            "uma substituição da abstração por experiências concretas que dispensam registros simbólicos posteriores.",
            "uma fragmentação metodológica, pois cada representação deveria ser ensinada em unidades separadas.",
            "um ensino centrado no cotidiano, no qual a formalização deve ser evitada para preservar o contexto.",
            "uma passagem intencional entre significados, representações e linguagem matemática formal.",
            "uma abordagem procedimental, porque a presença de símbolos elimina a construção de significados."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! A aprendizagem matemática se fortalece quando o estudante transita entre contextos, representações e formalização, compreendendo as relações entre elas.",
        "feedbackErro": "❌ Atenção! A aprendizagem matemática se fortalece quando o estudante transita entre contextos, representações e formalização, compreendendo as relações entre elas.",
        "dicaBanca": "A sequência didática pode partir do concreto sem ficar presa a ele. Observe a progressão para a abstração."
    },
    {
        "subtopico": "Resolução de problemas",
        "pergunta": "O professor pretende distinguir exercício de problema. Qual proposta caracteriza melhor uma situação-problema?",
        "alternativas": [
            "uma lista em que cada item repete o algoritmo demonstrado imediatamente antes pelo professor.",
            "uma atividade com números maiores e novo contexto, mas resolvida pelo mesmo procedimento indicado no enunciado, sem decisão estratégica.",
            "um cálculo contextualizado em compras cuja operação aparece explicitamente indicada na pergunta.",
            "uma sequência de contas com resposta numérica única e correção baseada no resultado do gabarito.",
            "uma tarefa em que o estudante precisa interpretar condições, selecionar estratégias e justificar a solução."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Problema envolve decisão e mobilização de conhecimentos; exercício tende a aplicar um procedimento já indicado ou conhecido.",
        "feedbackErro": "❌ Atenção! Problema envolve decisão e mobilização de conhecimentos; exercício tende a aplicar um procedimento já indicado ou conhecido.",
        "dicaBanca": "Contexto cotidiano não transforma automaticamente um exercício em problema. Procure necessidade de decisão."
    },
    {
        "subtopico": "Resolução de problemas",
        "pergunta": "Após resolver um problema, um aluno obtém 240 alunos para uma escola que possui 180 matrículas. O cálculo está correto, mas o resultado é incompatível com os dados. A ação docente mais adequada é:",
        "alternativas": [
            "solicitar que o aluno confronte o resultado com o contexto e revise pressupostos ou operações.",
            "considerar a solução correta, pois a execução algorítmica foi matematicamente adequada.",
            "fornecer a resposta esperada e pedir que o estudante refaça as contas até obtê-la.",
            "retirar o contexto do problema e transformar a tarefa em cálculo direto para evitar ambiguidade.",
            "atribuir erro de atenção e prosseguir, já que a validação do resultado não integra a resolução."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Resolver problemas inclui interpretar e validar a resposta no contexto, não apenas executar cálculos.",
        "feedbackErro": "❌ Atenção! Resolver problemas inclui interpretar e validar a resposta no contexto, não apenas executar cálculos.",
        "dicaBanca": "Uma solução matematicamente calculada pode ser inadequada ao problema; a banca explora essa diferença."
    },
    {
        "subtopico": "Resolução de problemas",
        "pergunta": "Considere as etapas: (1) compreender o problema; (2) planejar uma estratégia; (3) executar; (4) verificar a solução. Em uma abordagem não linear, é correto afirmar que:",
        "alternativas": [
            "as etapas devem ocorrer uma única vez e na ordem apresentada para preservar a validade da solução.",
            "o estudante pode retornar a etapas anteriores ao identificar inconsistências durante a resolução.",
            "a verificação serve para conferir contas, sem modificar a interpretação inicial do problema.",
            "o planejamento perde relevância quando o estudante conhece mais de um algoritmo possível.",
            "a compreensão termina antes dos cálculos e não deve ser revista após a execução da estratégia."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! A resolução de problemas é iterativa: novas evidências podem levar o aluno a reinterpretar dados, alterar estratégias e validar novamente.",
        "feedbackErro": "❌ Atenção! A resolução de problemas é iterativa: novas evidências podem levar o aluno a reinterpretar dados, alterar estratégias e validar novamente.",
        "dicaBanca": "Sequências de etapas em provas não significam rigidez absoluta; observe possibilidade de revisão do raciocínio."
    },
    {
        "subtopico": "Resolução de problemas",
        "pergunta": "Em uma mesma situação-problema, dois estudantes usam estratégias diferentes e chegam ao mesmo resultado. O professor deseja explorar pedagogicamente a situação. Deve:",
        "alternativas": [
            "selecionar a estratégia mais curta e solicitar que a turma abandone os demais procedimentos.",
            "aceitar ambos os resultados e encerrar a discussão, pois estratégias pessoais não exigem sistematização.",
            "promover a comparação das estratégias, discutindo eficiência, validade e condições de uso de cada uma.",
            "considerar equivalente qualquer procedimento que produza o resultado esperado, mesmo sem justificativa.",
            "registrar as duas soluções como estilos individuais, sem relacioná-las aos conceitos matemáticos envolvidos."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! A comparação de estratégias permite explicitar conceitos, avaliar argumentos e ampliar repertórios de resolução.",
        "feedbackErro": "❌ Atenção! A comparação de estratégias permite explicitar conceitos, avaliar argumentos e ampliar repertórios de resolução.",
        "dicaBanca": "Pluralidade de estratégias não significa ausência de critérios: validade, justificativa e generalização continuam importantes."
    },
    {
        "subtopico": "Modelagem matemática",
        "pergunta": "Uma turma investiga o consumo de água da escola. Coleta dados, define variáveis, constrói uma expressão, compara previsões com medições e revê o modelo. O elemento que melhor caracteriza modelagem matemática é:",
        "alternativas": [
            "a presença de dados reais, mesmo que sejam usados em uma fórmula fornecida previamente pelo professor.",
            "a coleta de informações do cotidiano antes de uma aula expositiva sobre o conteúdo previsto.",
            "o uso de planilhas para automatizar cálculos sem discutir hipóteses ou significado dos resultados.",
            "o ciclo de matematização, interpretação e validação em relação à situação investigada.",
            "a escolha de um tema social para debate, ainda que não haja construção de relações matemáticas."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! Modelagem envolve formular, matematizar, interpretar e validar um modelo, com possibilidade de revisão de hipóteses.",
        "feedbackErro": "❌ Atenção! Modelagem envolve formular, matematizar, interpretar e validar um modelo, com possibilidade de revisão de hipóteses.",
        "dicaBanca": "Tema real e tecnologia podem aparecer sem que exista modelagem. Procure construção e validação do modelo."
    },
    {
        "subtopico": "Modelagem matemática",
        "pergunta": "Ao modelar o custo de transporte escolar, os alunos supõem consumo médio constante de combustível. Depois percebem que trajetos urbanos alteram esse valor. Pedagogicamente, essa constatação deve ser tratada como:",
        "alternativas": [
            "falha que invalida o uso de modelagem em situações escolares com muitas variáveis.",
            "prova de que o modelo deve reproduzir a realidade com precisão integral para ter valor matemático.",
            "indício de que a turma deveria trabalhar com dados inventados para reduzir interferências do contexto.",
            "erro de cálculo que pode ser corrigido mantendo a hipótese inicial e ajustando os resultados obtidos.",
            "evidência de que modelos dependem de hipóteses e possuem limites de validade."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Modelos são representações simplificadas; discutir hipóteses, limites e adequação faz parte da atividade de modelagem.",
        "feedbackErro": "❌ Atenção! Modelos são representações simplificadas; discutir hipóteses, limites e adequação faz parte da atividade de modelagem.",
        "dicaBanca": "A banca costuma apresentar simplificação como defeito. Em modelagem, simplificar pode ser necessário, desde que explicitado."
    },
    {
        "subtopico": "Modelagem matemática",
        "pergunta": "Sobre modelagem no ensino, analise: I. parte de uma situação que pode admitir diferentes recortes; II. exige explicitar hipóteses; III. termina quando se obtém uma fórmula; IV. envolve interpretar o resultado no contexto. Está correto o que se afirma em:",
        "alternativas": [
            "I, II e IV.",
            "I e III.",
            "II e III.",
            "III e IV.",
            "I, II, III e IV."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! A obtenção de uma expressão não encerra a modelagem; é necessário interpretar, validar e, se necessário, revisar o modelo.",
        "feedbackErro": "❌ Atenção! A obtenção de uma expressão não encerra a modelagem; é necessário interpretar, validar e, se necessário, revisar o modelo.",
        "dicaBanca": "Quando a alternativa diz que o processo termina na fórmula, geralmente está reduzindo modelagem a aplicação algébrica."
    },
    {
        "subtopico": "Modelagem matemática",
        "pergunta": "Uma atividade usa dados reais de temperatura, mas o professor fornece o gráfico pronto e pede que os alunos copiem a equação indicada. Essa proposta:",
        "alternativas": [
            "constitui modelagem completa, pois qualquer trabalho com dados observados atende ao método.",
            "usa contexto real, porém oferece pouca oportunidade de modelagem porque decisões centrais já foram tomadas.",
            "é investigativa por definição, já que gráficos reais dispensam formulação de perguntas pelos estudantes.",
            "é mais autêntica que a modelagem, pois elimina hipóteses e reduz a possibilidade de conclusões imprecisas.",
            "equivale à modelagem quando a equação usada possui aplicação prática e o professor explica seu significado."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! Modelagem exige participação na formulação, escolha de relações e interpretação; dados reais, isoladamente, não garantem esse processo.",
        "feedbackErro": "❌ Atenção! Modelagem exige participação na formulação, escolha de relações e interpretação; dados reais, isoladamente, não garantem esse processo.",
        "dicaBanca": "Distinguir uso de contexto de modelagem é uma cobrança frequente em metodologias de Matemática."
    },
    {
        "subtopico": "Etnomatemática",
        "pergunta": "Em uma comunidade, artesãos usam procedimentos próprios para medir e repartir materiais. Uma abordagem etnomatemática adequada seria:",
        "alternativas": [
            "substituir os conceitos escolares pelos procedimentos locais para preservar a autenticidade cultural da prática.",
            "usar as peças artesanais como decoração e ensinar as fórmulas convencionais sem analisar os saberes envolvidos.",
            "investigar esses procedimentos, compreender sua lógica e relacioná-los a conceitos escolares sem hierarquizá-los de modo simplista.",
            "classificar os procedimentos locais como aproximações incompletas da Matemática formal e corrigi-los antes da discussão, tomando a notação escolar como referência superior.",
            "tratar o saber comunitário como curiosidade cultural separada do currículo para evitar misturar conhecimentos distintos."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Etnomatemática valoriza práticas culturais e promove diálogo com o conhecimento escolar, sem romantizar nem desqualificar saberes.",
        "feedbackErro": "❌ Atenção! Etnomatemática valoriza práticas culturais e promove diálogo com o conhecimento escolar, sem romantizar nem desqualificar saberes.",
        "dicaBanca": "Evite dois extremos: substituir a Matemática escolar ou reduzir práticas culturais a enfeite."
    },
    {
        "subtopico": "Etnomatemática",
        "pergunta": "Uma sequência sobre sistemas de numeração compara registros de diferentes povos e práticas comerciais locais. A intenção etnomatemática é mais bem expressa por:",
        "alternativas": [
            "demonstrar que todos os povos chegaram às mesmas representações pela mesma trajetória de raciocínio.",
            "provar que a notação atual é culturalmente neutra e superior por ser usada na escolarização contemporânea.",
            "manter os sistemas culturais no campo histórico, sem relacioná-los às estruturas matemáticas estudadas.",
            "evidenciar que ideias matemáticas são produzidas em contextos históricos e culturais diversos.",
            "usar exemplos culturais para motivar a aula e depois descartá-los quando começar o conteúdo considerado científico."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! A perspectiva etnomatemática reconhece diversidade de modos de produzir, organizar e comunicar conhecimentos matemáticos.",
        "feedbackErro": "❌ Atenção! A perspectiva etnomatemática reconhece diversidade de modos de produzir, organizar e comunicar conhecimentos matemáticos.",
        "dicaBanca": "Atenção a alternativas que usam diversidade, mas preservam uma hierarquia implícita entre saberes."
    },
    {
        "subtopico": "Etnomatemática",
        "pergunta": "Assinale a prática que MENOS se aproxima de uma perspectiva etnomatemática:",
        "alternativas": [
            "comparar estratégias de cálculo usadas em diferentes contextos sociais, discutir seus fundamentos e relacioná-las a formas escolares de representação matemática.",
            "investigar modos locais de medir terrenos e relacioná-los a unidades e proporcionalidade estudadas na escola.",
            "analisar padrões geométricos de produções culturais considerando técnica, significado e estrutura matemática.",
            "discutir como necessidades sociais contribuíram para diferentes formas de contagem e representação numérica.",
            "apresentar uma prática cultural como exemplo exótico e prosseguir sem investigar os conhecimentos matemáticos nela presentes."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! A utilização superficial de referências culturais não constitui etnomatemática; é preciso investigar sentidos, práticas e conhecimentos.",
        "feedbackErro": "❌ Atenção! A utilização superficial de referências culturais não constitui etnomatemática; é preciso investigar sentidos, práticas e conhecimentos.",
        "dicaBanca": "Em itens negativos, não confunda presença de cultura com abordagem etnomatemática efetiva."
    },
    {
        "subtopico": "Etnomatemática",
        "pergunta": "Ao articular saber comunitário e conhecimento escolar, o professor deve evitar:",
        "alternativas": [
            "tanto a desqualificação do saber local quanto sua idealização como conhecimento imune à análise crítica.",
            "comparar procedimentos e discutir em quais situações cada estratégia é eficiente ou adequada.",
            "explicitar relações entre práticas culturais, linguagem matemática e conceitos curriculares.",
            "permitir que estudantes descrevam procedimentos usados em suas comunidades e argumentem sobre eles.",
            "construir pontes entre diferentes formas de produzir conhecimento e os objetivos de aprendizagem da escola."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Uma abordagem crítica reconhece o valor cultural dos saberes sem tratá-los como inferiores ou intocáveis.",
        "feedbackErro": "❌ Atenção! Uma abordagem crítica reconhece o valor cultural dos saberes sem tratá-los como inferiores ou intocáveis.",
        "dicaBanca": "Distratores podem parecer respeitosos, mas romantizar também impede análise matemática crítica."
    },
    {
        "subtopico": "História da Matemática",
        "pergunta": "Ao introduzir números negativos, o professor apresenta dificuldades históricas de aceitação desse conceito e propõe problemas que exigem interpretar valores abaixo de uma referência. Esse uso da História da Matemática:",
        "alternativas": [
            "serve principalmente para memorizar datas e autores ligados ao aparecimento dos números negativos.",
            "ajuda a problematizar a construção do conceito e obstáculos que também podem aparecer na aprendizagem.",
            "substitui a necessidade de atividades atuais, pois o percurso histórico deve ser reproduzido pela turma.",
            "demonstra que dificuldades dos alunos são inevitáveis quando um conceito demorou a ser aceito historicamente.",
            "prova que a ordem histórica de criação dos conceitos deve determinar a sequência curricular de ensino."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! A História da Matemática pode contextualizar problemas e revelar a construção humana dos conceitos, sem virar cronologia rígida.",
        "feedbackErro": "❌ Atenção! A História da Matemática pode contextualizar problemas e revelar a construção humana dos conceitos, sem virar cronologia rígida.",
        "dicaBanca": "História didática não significa reproduzir exatamente a história nem decorar biografias."
    },
    {
        "subtopico": "História da Matemática",
        "pergunta": "Uma aula apresenta contribuições da Mesopotâmia, Índia, China, mundo islâmico, África e Europa para diferentes conhecimentos. A principal contribuição pedagógica dessa abordagem é:",
        "alternativas": [
            "substituir a análise dos conceitos por uma sequência de curiosidades sobre civilizações antigas.",
            "estabelecer qual civilização produziu a forma mais correta de Matemática em cada período histórico.",
            "ampliar a compreensão da Matemática como produção humana plural e historicamente situada.",
            "separar conhecimentos por origem cultural para evitar comparações entre procedimentos e representações.",
            "demonstrar que conhecimentos matemáticos se desenvolveram de modo linear até alcançar a forma atual."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Uma abordagem histórica plural combate a ideia de desenvolvimento único e linear da Matemática e amplia referências culturais.",
        "feedbackErro": "❌ Atenção! Uma abordagem histórica plural combate a ideia de desenvolvimento único e linear da Matemática e amplia referências culturais.",
        "dicaBanca": "A banca pode usar diversidade histórica de forma decorativa; procure vínculo com compreensão do conhecimento matemático."
    },
    {
        "subtopico": "História da Matemática",
        "pergunta": "Sobre História da Matemática no ensino, analise: I. pode contextualizar a origem de conceitos; II. pode apoiar problematizações; III. deve ser usada como cronologia independente do conteúdo; IV. pode mostrar mudanças em representações e métodos. Assinale:",
        "alternativas": [
            "I e III.",
            "II e III.",
            "III e IV.",
            "I, II e IV.",
            "I, II, III e IV."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! História da Matemática tem valor quando articulada ao conteúdo e à problematização, não como apêndice cronológico desvinculado.",
        "feedbackErro": "❌ Atenção! História da Matemática tem valor quando articulada ao conteúdo e à problematização, não como apêndice cronológico desvinculado.",
        "dicaBanca": "Se a história aparece como bloco de datas sem relação conceitual, a abordagem perde força didática."
    },
    {
        "subtopico": "História da Matemática",
        "pergunta": "Um professor conta a biografia de um matemático e, em seguida, aplica uma lista de exercícios sem qualquer relação com a narrativa. Nesse caso, o uso da história é:",
        "alternativas": [
            "investigativo, porque qualquer informação histórica estimula formulação de conjecturas pelos estudantes.",
            "epistemológico, pois biografias individuais explicam a estrutura e a validade dos conceitos matemáticos.",
            "interdisciplinar, porque a presença de fatos históricos garante integração entre História e Matemática.",
            "etnomatemático, já que a referência a uma pessoa do passado situa culturalmente o conhecimento escolar.",
            "predominantemente ilustrativo, pois não interfere na compreensão do conceito ou na atividade matemática."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Informação histórica pode ser motivadora, mas seu potencial didático aumenta quando se conecta a problemas, métodos e ideias matemáticas.",
        "feedbackErro": "❌ Atenção! Informação histórica pode ser motivadora, mas seu potencial didático aumenta quando se conecta a problemas, métodos e ideias matemáticas.",
        "dicaBanca": "Não confunda presença de história com uso histórico-conceitual da Matemática."
    },
    {
        "subtopico": "Jogos matemáticos",
        "pergunta": "Durante um jogo de estratégia, alunos percebem regularidades, registram jogadas e discutem como garantir vitória em certas situações. Para transformar a atividade em aprendizagem matemática, o professor deve:",
        "alternativas": [
            "mediar a análise das estratégias e conduzir uma sistematização dos conceitos e padrões identificados.",
            "preservar a espontaneidade do jogo e evitar intervenções que possam alterar as escolhas dos participantes.",
            "encerrar a atividade quando houver vencedores, pois o desempenho no jogo evidencia a aprendizagem alcançada.",
            "atribuir nota conforme o número de vitórias para valorizar raciocínio rápido e tomada de decisão eficiente.",
            "repetir as partidas até que a turma memorize a estratégia vencedora, sem necessidade de registro ou justificativa."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! O jogo torna-se recurso didático quando há objetivo, mediação, reflexão sobre estratégias e sistematização matemática.",
        "feedbackErro": "❌ Atenção! O jogo torna-se recurso didático quando há objetivo, mediação, reflexão sobre estratégias e sistematização matemática.",
        "dicaBanca": "Jogo por si só não garante aprendizagem. Procure o que acontece antes, durante e depois da partida."
    },
    {
        "subtopico": "Jogos matemáticos",
        "pergunta": "Um jogo foi escolhido porque é divertido, mas suas regras não mobilizam o conteúdo previsto para a aula. A decisão pedagógica mais adequada é:",
        "alternativas": [
            "manter o jogo, pois motivação e participação compensam a ausência de relação direta com o conteúdo.",
            "reformular a proposta ou escolher outro jogo que esteja alinhado aos objetivos matemáticos definidos.",
            "usar o jogo como avaliação somativa, já que o envolvimento dos alunos permite inferir compreensão matemática.",
            "acrescentar uma ficha de exercícios depois do jogo, independentemente do que ocorreu durante as partidas.",
            "reduzir o tempo de sistematização para aproveitar o interesse da turma e aumentar o número de rodadas."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! A escolha de jogos deve partir de objetivos de aprendizagem; ludicidade não substitui intencionalidade didática.",
        "feedbackErro": "❌ Atenção! A escolha de jogos deve partir de objetivos de aprendizagem; ludicidade não substitui intencionalidade didática.",
        "dicaBanca": "Em concursos, ‘atividade atrativa’ não é sinônimo de ‘atividade adequada’. Verifique o alinhamento pedagógico."
    },
    {
        "subtopico": "Jogos matemáticos",
        "pergunta": "Em um jogo, um estudante adota uma estratégia que funciona em algumas rodadas e falha em outras. O professor pode explorar essa situação pedindo que ele:",
        "alternativas": [
            "abandone a estratégia e copie o procedimento do colega que obteve maior número de vitórias.",
            "repita a mesma jogada até obter desempenho suficiente para confirmar que a estratégia é adequada.",
            "identifique condições em que a estratégia funciona e formule uma justificativa para os casos observados.",
            "registre o número de acertos, sem discutir as condições que explicam sucessos e fracassos.",
            "considere a estratégia válida porque ela produziu vitória em parte das partidas realizadas pela turma, sem investigar os casos em que o procedimento deixou de funcionar."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Jogos podem favorecer conjectura, teste, contraexemplo e argumentação quando o professor problematiza as estratégias.",
        "feedbackErro": "❌ Atenção! Jogos podem favorecer conjectura, teste, contraexemplo e argumentação quando o professor problematiza as estratégias.",
        "dicaBanca": "Uma estratégia que funciona algumas vezes não está generalizada; a banca pode explorar a necessidade de condições e prova."
    },
    {
        "subtopico": "Jogos matemáticos",
        "pergunta": "Qual forma de avaliação é mais coerente durante uma sequência com jogos matemáticos?",
        "alternativas": [
            "considerar a classificação final das partidas como indicador principal do domínio conceitual dos estudantes.",
            "avaliar a velocidade de resposta, pois jogos matemáticos têm como finalidade ampliar cálculo mental rápido.",
            "registrar participação e comportamento, sem analisar o raciocínio matemático mobilizado durante a atividade.",
            "observar decisões, registros, argumentos e evolução das estratégias, além dos resultados obtidos.",
            "aplicar uma prova desvinculada do jogo e desconsiderar evidências produzidas nas interações e registros."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! A avaliação deve considerar processos de raciocínio e aprendizagem evidenciados no jogo, não vitória ou velocidade isoladamente.",
        "feedbackErro": "❌ Atenção! A avaliação deve considerar processos de raciocínio e aprendizagem evidenciados no jogo, não vitória ou velocidade isoladamente.",
        "dicaBanca": "Vencer um jogo pode depender de sorte, experiência ou estratégia; não equivale diretamente a aprender o conceito."
    },
    {
        "subtopico": "Tecnologias no ensino da Matemática",
        "pergunta": "Em geometria dinâmica, alunos arrastam vértices de quadriláteros e observam quais propriedades permanecem invariantes. O uso pedagógico mais relevante da tecnologia é:",
        "alternativas": [
            "produzir figuras com maior precisão estética do que aquelas construídas com régua e compasso no caderno.",
            "reduzir a necessidade de justificativas, porque a visualização dinâmica confirma as propriedades observadas.",
            "substituir a definição dos conceitos por manipulação visual, evitando formalização que limite a descoberta.",
            "automatizar construções para que os estudantes concentrem o trabalho na obtenção rápida da resposta final.",
            "favorecer exploração de casos, formulação de conjecturas e discussão de invariantes geométricos."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Tecnologia pode ampliar investigação e visualização, mas observação empírica não substitui justificativa e sistematização.",
        "feedbackErro": "❌ Atenção! Tecnologia pode ampliar investigação e visualização, mas observação empírica não substitui justificativa e sistematização.",
        "dicaBanca": "Em geometria dinâmica, ver muitos casos sustenta conjecturas; não equivale a demonstração."
    },
    {
        "subtopico": "Tecnologias no ensino da Matemática",
        "pergunta": "Uma planilha eletrônica é usada para estudar crescimento percentual. Qual proposta explora melhor seu potencial didático?",
        "alternativas": [
            "variar parâmetros, comparar tabelas e gráficos e discutir como alterações afetam o comportamento do modelo.",
            "usar a planilha como calculadora para repetir uma fórmula fornecida, sem interpretar as relações entre as células.",
            "fornecer a tabela pronta e pedir que os alunos copiem os resultados para o caderno em ordem crescente.",
            "avaliar a habilidade de formatar células e gráficos como evidência principal da aprendizagem matemática.",
            "ocultar as fórmulas para evitar distrações e apresentar aos estudantes os resultados finais já calculados."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Planilhas ganham valor matemático quando permitem testar parâmetros, representar relações e interpretar padrões.",
        "feedbackErro": "❌ Atenção! Planilhas ganham valor matemático quando permitem testar parâmetros, representar relações e interpretar padrões.",
        "dicaBanca": "A tecnologia deve ampliar o pensamento matemático, não apenas acelerar cálculos ou produzir aparência gráfica."
    },
    {
        "subtopico": "Tecnologias no ensino da Matemática",
        "pergunta": "Sobre uso de calculadora, a posição pedagógica mais consistente é:",
        "alternativas": [
            "proibir seu uso em atividades escolares para evitar dependência e preservar o domínio dos algoritmos manuais.",
            "definir quando ela amplia investigação e quando o cálculo mental ou escrito é parte do objetivo de aprendizagem.",
            "liberar seu uso em qualquer situação, pois tecnologias tornam procedimentos de cálculo pouco relevantes no currículo.",
            "usar calculadora em tarefas rotineiras e retirar discussões sobre estimativa, ordem de grandeza e validação de resultados.",
            "reservar o recurso a estudantes com alto desempenho, que já dominam técnicas e podem avançar para tarefas complexas."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! A decisão sobre calculadora depende do objetivo didático; tecnologia e competências de cálculo podem coexistir.",
        "feedbackErro": "❌ Atenção! A decisão sobre calculadora depende do objetivo didático; tecnologia e competências de cálculo podem coexistir.",
        "dicaBanca": "Questões equilibradas evitam os extremos ‘proibir’ e ‘liberar sem critério’. Procure intencionalidade."
    },
    {
        "subtopico": "Tecnologias no ensino da Matemática",
        "pergunta": "Um aplicativo fornece correção imediata e adapta o nível das questões, mas trabalha por repetição de respostas. Seu uso:",
        "alternativas": [
            "substitui a mediação docente porque a adaptação automática identifica com precisão as causas dos erros conceituais.",
            "é inadequado ao ensino, pois recursos digitais de treino não podem integrar uma sequência didática de Matemática.",
            "pode apoiar treino específico, porém precisa ser complementado quando o objetivo envolve argumentação e compreensão conceitual.",
            "garante aprendizagem significativa ao ajustar a dificuldade, independentemente do tipo de tarefa e do feedback oferecido.",
            "deve ocupar o centro da sequência porque a personalização algorítmica elimina diferenças de ritmo entre estudantes e torna desnecessária a análise docente das respostas."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Um recurso pode ter utilidade limitada e ainda ser válido; sua adequação depende do objetivo e da mediação pedagógica.",
        "feedbackErro": "❌ Atenção! Um recurso pode ter utilidade limitada e ainda ser válido; sua adequação depende do objetivo e da mediação pedagógica.",
        "dicaBanca": "Distratores costumam tratar tecnologia como solução total ou problema total. A alternativa forte reconhece limites e usos."
    },
    {
        "subtopico": "Comunicação matemática",
        "pergunta": "Um aluno escreve: “multipliquei por 10 porque a vírgula anda”. O resultado está correto. Para desenvolver comunicação matemática, o professor deve:",
        "alternativas": [
            "aceitar a frase como justificativa suficiente, pois regras mnemônicas facilitam a comunicação e a memorização.",
            "corrigir a linguagem informal e fornecer a formulação técnica pronta para que a turma a copie no caderno.",
            "priorizar o cálculo correto e evitar discutir linguagem, já que o significado pode variar entre estudantes.",
            "pedir que o estudante explicite a relação com valor posicional e compare sua explicação com outras representações.",
            "substituir a explicação verbal por uma sequência de exercícios que reforce o procedimento de multiplicação decimal."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! Comunicar Matemática envolve justificar, relacionar representações e tornar explícito o significado dos procedimentos.",
        "feedbackErro": "❌ Atenção! Comunicar Matemática envolve justificar, relacionar representações e tornar explícito o significado dos procedimentos.",
        "dicaBanca": "Uma regra verbal pode funcionar como memória sem explicar o conceito; a banca pode explorar essa diferença."
    },
    {
        "subtopico": "Comunicação matemática",
        "pergunta": "Em discussão coletiva, três alunos apresentam solução por tabela, desenho e expressão algébrica. A mediação mais produtiva é:",
        "alternativas": [
            "escolher a expressão algébrica como solução oficial, por ser a forma mais formal de comunicação matemática.",
            "manter as três soluções separadas para respeitar estilos individuais sem produzir comparações entre registros.",
            "solicitar que todos convertam suas soluções para um único formato antes de discutir o raciocínio utilizado.",
            "avaliar as representações pela rapidez com que permitem chegar ao resultado numérico esperado no problema.",
            "relacionar as representações e discutir o que cada uma torna visível sobre a estrutura do problema."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! A coordenação entre diferentes registros amplia compreensão e permite analisar equivalências e limites de cada representação.",
        "feedbackErro": "❌ Atenção! A coordenação entre diferentes registros amplia compreensão e permite analisar equivalências e limites de cada representação.",
        "dicaBanca": "Formalização é importante, mas não torna outras representações descartáveis. Procure articulação entre registros."
    },
    {
        "subtopico": "Comunicação matemática",
        "pergunta": "Assinale a situação em que há argumentação matemática, e não mera descrição de procedimento:",
        "alternativas": [
            "o estudante explica por que a soma de dois números ímpares é par usando uma representação geral.",
            "o estudante relata os passos executados na calculadora até chegar ao resultado indicado no visor.",
            "o estudante copia o algoritmo do quadro e nomeia cada operação realizada na ordem apresentada.",
            "o estudante informa que escolheu uma fórmula porque ela foi usada em exercícios semelhantes da apostila.",
            "o estudante apresenta o resultado final e afirma que conferiu as contas duas vezes antes de entregar."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Argumentar exige razões que sustentem uma afirmação e possam ser avaliadas matematicamente, não apenas relatar ações.",
        "feedbackErro": "❌ Atenção! Argumentar exige razões que sustentem uma afirmação e possam ser avaliadas matematicamente, não apenas relatar ações.",
        "dicaBanca": "‘Explicar o que fez’ e ‘justificar por que é válido’ são níveis distintos de comunicação."
    },
    {
        "subtopico": "Comunicação matemática",
        "pergunta": "Uma professora deseja avaliar comunicação matemática. Qual evidência é mais adequada?",
        "alternativas": [
            "quantidade de respostas numéricas corretas produzidas em tempo limitado durante uma lista de exercícios.",
            "registros que articulam linguagem natural, símbolos, representações e justificativas coerentes.",
            "domínio de vocabulário técnico medido pela reprodução de definições exatamente como aparecem no livro.",
            "uso frequente de símbolos formais, mesmo quando as relações entre eles não são explicadas pelo estudante.",
            "organização estética do caderno e padronização das soluções conforme o modelo apresentado em aula."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! Comunicação matemática envolve clareza, significado e articulação entre registros, não ornamentação ou formalismo vazio.",
        "feedbackErro": "❌ Atenção! Comunicação matemática envolve clareza, significado e articulação entre registros, não ornamentação ou formalismo vazio.",
        "dicaBanca": "Símbolos corretos são importantes, mas não bastam quando o raciocínio não está comunicado."
    },
    {
        "subtopico": "Erro como recurso didático",
        "pergunta": "Vários alunos afirmam que 1/8 é maior que 1/6 porque 8 > 6. A melhor intervenção inicial é:",
        "alternativas": [
            "informar a regra correta de comparação e pedir que a turma memorize a relação entre denominador e tamanho da parte.",
            "marcar as respostas como erradas e propor uma nova lista até que a frequência do erro diminua significativamente.",
            "explorar o raciocínio que sustenta a comparação e confrontá-lo com representações ou situações de partilha.",
            "atribuir o equívoco à falta de atenção, pois a comparação de números naturais foi aplicada fora do contexto adequado.",
            "evitar discutir a resposta incorreta diante da turma para reduzir a possibilidade de disseminar a concepção equivocada."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! O erro revela uma hipótese conceitual — transferir a ordem dos naturais para frações — e pode orientar intervenção específica.",
        "feedbackErro": "❌ Atenção! O erro revela uma hipótese conceitual — transferir a ordem dos naturais para frações — e pode orientar intervenção específica.",
        "dicaBanca": "Erros recorrentes e coerentes costumam indicar concepções, não mero descuido."
    },
    {
        "subtopico": "Erro como recurso didático",
        "pergunta": "Dois alunos erram a mesma questão. Um não compreendeu o enunciado; outro escolheu uma estratégia válida, mas cometeu um erro aritmético. Avaliar os dois do mesmo modo seria inadequado porque:",
        "alternativas": [
            "erros aritméticos têm pouca importância pedagógica quando a estratégia geral escolhida está conceitualmente correta.",
            "dificuldades de leitura pertencem a Língua Portuguesa e não devem interferir na avaliação do conhecimento matemático.",
            "a correção precisa privilegiar o estudante que chegou mais perto do resultado numérico indicado pelo gabarito.",
            "o produto final não revela, por si só, a natureza do conhecimento e da dificuldade de cada estudante.",
            "a avaliação matemática deve separar compreensão, procedimento e comunicação em provas distintas para evitar sobreposição."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! A análise qualitativa do erro ajuda a distinguir obstáculos de interpretação, estratégia, conceito e cálculo.",
        "feedbackErro": "❌ Atenção! A análise qualitativa do erro ajuda a distinguir obstáculos de interpretação, estratégia, conceito e cálculo.",
        "dicaBanca": "Mesmo resultado incorreto pode esconder raciocínios muito diferentes; a banca pode pedir diagnóstico, não punição."
    },
    {
        "subtopico": "Erro como recurso didático",
        "pergunta": "Após um erro coletivo, o professor seleciona duas soluções anônimas para discussão. Essa estratégia é pedagogicamente adequada quando:",
        "alternativas": [
            "a solução incorreta é apresentada como exemplo do que deve ser evitado, sem discutir a lógica que a produziu.",
            "os alunos são convidados a votar na solução mais convincente e a decisão da maioria encerra a análise.",
            "o professor revela imediatamente a resposta certa para impedir que argumentos incorretos ganhem credibilidade.",
            "a comparação é usada para classificar quem apresenta raciocínio avançado e quem precisa retornar a exercícios básicos.",
            "a turma analisa os raciocínios com respeito, identifica pontos de ruptura e constrói critérios de validação."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! A discussão de erros pode promover argumentação e metacognição quando há análise do raciocínio, não exposição ou votação de opiniões.",
        "feedbackErro": "❌ Atenção! A discussão de erros pode promover argumentação e metacognição quando há análise do raciocínio, não exposição ou votação de opiniões.",
        "dicaBanca": "Erro como recurso didático exige ambiente seguro e critérios matemáticos de validação."
    },
    {
        "subtopico": "Erro como recurso didático",
        "pergunta": "Qual registro docente produz informação mais útil para planejar uma intervenção após uma atividade?",
        "alternativas": [
            "agrupar padrões de erro e relacioná-los aos conceitos ou procedimentos que parecem sustentar cada resposta.",
            "contabilizar o número total de erros de cada aluno e ordenar a turma do menor para o maior índice de acertos.",
            "registrar as questões com maior percentual de erro e repetir os mesmos exercícios na aula seguinte para reforço.",
            "separar estudantes entre atentos e desatentos conforme a quantidade de correções feitas durante a resolução.",
            "anotar resultados finais e evitar interpretar estratégias para reduzir a subjetividade do processo avaliativo."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Padrões de erro ajudam a formular hipóteses diagnósticas e orientar intervenções dirigidas às dificuldades reais.",
        "feedbackErro": "❌ Atenção! Padrões de erro ajudam a formular hipóteses diagnósticas e orientar intervenções dirigidas às dificuldades reais.",
        "dicaBanca": "Quantidade de erros informa desempenho; natureza do erro informa o que ensinar em seguida."
    },
    {
        "subtopico": "Avaliação em Matemática",
        "pergunta": "Antes de iniciar equações, o professor propõe situações para descobrir como os alunos interpretam igualdade e incógnita. Essa avaliação é principalmente:",
        "alternativas": [
            "somativa, porque produz dados que podem ser comparados com o desempenho ao final da unidade.",
            "diagnóstica, pois busca conhecimentos prévios para orientar o planejamento da sequência.",
            "classificatória, pois identifica estudantes que ainda não dominam conhecimentos necessários ao conteúdo novo.",
            "certificadora, porque verifica pré-requisitos e autoriza a turma a avançar para um nível conceitual superior.",
            "normativa, porque toma o desempenho inicial do grupo como referência para organizar intervenções individuais."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! A avaliação diagnóstica investiga conhecimentos e dificuldades antes ou no início de uma sequência para orientar decisões pedagógicas.",
        "feedbackErro": "❌ Atenção! A avaliação diagnóstica investiga conhecimentos e dificuldades antes ou no início de uma sequência para orientar decisões pedagógicas.",
        "dicaBanca": "Diagnosticar não significa rotular; o foco é planejar intervenções."
    },
    {
        "subtopico": "Avaliação em Matemática",
        "pergunta": "Durante a unidade, o professor analisa produções, devolve comentários e modifica tarefas seguintes. Esse uso da avaliação caracteriza:",
        "alternativas": [
            "função somativa, porque o acompanhamento contínuo produz uma síntese acumulativa do desempenho de cada aluno.",
            "função classificatória, pois os comentários permitem comparar estudantes e estabelecer níveis de domínio do conteúdo.",
            "função formativa, porque as evidências são utilizadas para regular ensino e aprendizagem.",
            "função diagnóstica, porque qualquer análise de erro tem como finalidade identificar conhecimentos anteriores dos estudantes.",
            "função normativa, porque ajustes no ensino devem seguir o padrão de desempenho predominante na turma."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Avaliação formativa utiliza evidências durante o processo para oferecer feedback e ajustar intervenções.",
        "feedbackErro": "❌ Atenção! Avaliação formativa utiliza evidências durante o processo para oferecer feedback e ajustar intervenções.",
        "dicaBanca": "A frequência da avaliação não define sua função; observe como a informação obtida é usada."
    },
    {
        "subtopico": "Avaliação em Matemática",
        "pergunta": "Uma questão de prova pede apenas a resposta numérica, embora o objetivo declarado seja avaliar argumentação matemática. O principal problema de alinhamento é:",
        "alternativas": [
            "a resposta numérica reduz a dificuldade da questão e deveria ser substituída por um problema com números maiores.",
            "a argumentação deve ser avaliada em atividades orais, enquanto provas escritas devem medir procedimentos e resultados.",
            "o objetivo está inadequado, porque argumentação não pode ser considerada parte da aprendizagem de Matemática escolar.",
            "o instrumento não produz evidência suficiente sobre a habilidade que se pretende avaliar.",
            "o instrumento é válido, pois uma resposta correta permite inferir que o estudante possui justificativa adequada para ela."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! A qualidade da avaliação depende do alinhamento entre objetivo, tarefa e evidência produzida pelo estudante.",
        "feedbackErro": "❌ Atenção! A qualidade da avaliação depende do alinhamento entre objetivo, tarefa e evidência produzida pelo estudante.",
        "dicaBanca": "Não basta a questão ser difícil; ela precisa revelar a habilidade declarada."
    },
    {
        "subtopico": "Avaliação em Matemática",
        "pergunta": "Ao elaborar critérios para uma resolução aberta, a rubrica mais coerente deve considerar:",
        "alternativas": [
            "resultado final, tempo de execução e quantidade de operações usadas, para garantir objetividade na correção.",
            "semelhança com a solução-modelo, organização do caderno e emprego da notação escolhida pelo professor.",
            "número de linhas da resolução, uso de fórmulas formais e ausência de rasuras no desenvolvimento apresentado.",
            "criatividade da estratégia, independentemente da validade matemática ou da coerência da justificativa produzida.",
            "compreensão do problema, estratégia, precisão, justificativa e comunicação, com descritores claros."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Rubricas podem tornar critérios transparentes e avaliar dimensões do raciocínio, desde que mantenham validade matemática.",
        "feedbackErro": "❌ Atenção! Rubricas podem tornar critérios transparentes e avaliar dimensões do raciocínio, desde que mantenham validade matemática.",
        "dicaBanca": "Critérios de apresentação não devem substituir critérios de compreensão, validade e argumentação."
    },
    {
        "subtopico": "Contextualização",
        "pergunta": "Uma questão diz: “João comprou 37 melancias. Calcule 248 × 37”. O contexto é dispensável para a resolução. Esse exemplo ilustra:",
        "alternativas": [
            "uma contextualização superficial, pois o cenário não participa da construção do significado do problema.",
            "uma boa contextualização, porque utiliza uma situação cotidiana e vocabulário acessível aos estudantes.",
            "uma situação de modelagem, pois relaciona multiplicação a uma atividade comercial reconhecível pela turma.",
            "uma investigação matemática, porque o contexto permite que o estudante escolha diferentes algoritmos de multiplicação.",
            "uma tarefa interdisciplinar, já que elementos de consumo conectam Matemática e conhecimentos da vida social."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Contextualizar exige que a situação influencie interpretação, decisões ou significado; trocar nomes em um cálculo não basta.",
        "feedbackErro": "❌ Atenção! Contextualizar exige que a situação influencie interpretação, decisões ou significado; trocar nomes em um cálculo não basta.",
        "dicaBanca": "Pergunte: se eu retirar a história, a tarefa muda? Se não muda, o contexto pode ser decorativo."
    },
    {
        "subtopico": "Contextualização",
        "pergunta": "Uma sequência começa com dados de tarifas de transporte, desenvolve proporcionalidade e depois generaliza relações em linguagem algébrica. A passagem do contexto à formalização é:",
        "alternativas": [
            "inadequada, porque a formalização rompe o vínculo com a experiência cotidiana que justificou a atividade inicial.",
            "adequada, porque contextualização pode conduzir à construção e posterior sistematização de conceitos abstratos.",
            "adequada quando a turma mantém exemplos concretos e evita generalizações que extrapolem os dados observados.",
            "inadequada, pois conceitos algébricos devem ser ensinados antes de qualquer situação contextual para evitar ambiguidades.",
            "adequada por substituir o conteúdo abstrato pelo estudo de tarifas, sem necessidade de desenvolver relações gerais."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! Contextualização não elimina abstração; pode servir de ponto de partida para descontextualizar, generalizar e aplicar novamente.",
        "feedbackErro": "❌ Atenção! Contextualização não elimina abstração; pode servir de ponto de partida para descontextualizar, generalizar e aplicar novamente.",
        "dicaBanca": "Uma falsa dicotomia comum é contexto versus formalização. O ensino pode articular ambos."
    },
    {
        "subtopico": "Contextualização",
        "pergunta": "Ao escolher um contexto para porcentagem, qual critério é pedagogicamente mais relevante?",
        "alternativas": [
            "o contexto deve ser conhecido por todos os alunos para impedir que experiências pessoais interfiram na resolução matemática.",
            "o contexto deve conter grande quantidade de dados para tornar a questão mais próxima de situações reais complexas.",
            "o contexto deve demandar interpretação das relações percentuais e ser adequado aos objetivos e à turma.",
            "o contexto deve evitar qualquer simplificação da realidade, pois situações autênticas precisam manter todas as variáveis presentes.",
            "o contexto deve ser atual e popular, mesmo que a relação com porcentagem apareça depois como cálculo independente."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Contextos são escolhas didáticas: precisam ser significativos, interpretáveis e matematicamente produtivos, sem exigir reprodução integral da realidade.",
        "feedbackErro": "❌ Atenção! Contextos são escolhas didáticas: precisam ser significativos, interpretáveis e matematicamente produtivos, sem exigir reprodução integral da realidade.",
        "dicaBanca": "Atualidade e familiaridade ajudam, mas não substituem pertinência matemática."
    },
    {
        "subtopico": "Contextualização",
        "pergunta": "Em educação financeira, estudantes comparam duas promoções que usam descontos e acréscimos sucessivos. A atividade é contextualizada porque:",
        "alternativas": [
            "o tema envolve dinheiro, elemento que transforma qualquer operação aritmética em situação contextualizada para a turma.",
            "as contas podem ser realizadas por calculadora, aproximando o exercício de práticas econômicas usadas fora da escola.",
            "a atividade utiliza marcas e preços, o que elimina a necessidade de sistematizar propriedades dos percentuais sucessivos.",
            "as informações do cenário são necessárias para interpretar percentuais, comparar alternativas e justificar uma decisão.",
            "o estudante escolhe uma promoção segundo preferência pessoal, e a decisão individual substitui a necessidade de argumentos matemáticos."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! Contexto é matematicamente relevante quando interfere na interpretação e nas decisões, e não apenas quando usa elementos cotidianos.",
        "feedbackErro": "❌ Atenção! Contexto é matematicamente relevante quando interfere na interpretação e nas decisões, e não apenas quando usa elementos cotidianos.",
        "dicaBanca": "Dinheiro e compras são contextos frequentes, mas a banca pode usá-los como enfeite. Analise a função do cenário."
    },
    {
        "subtopico": "Investigação matemática",
        "pergunta": "O professor propõe: “Que relações podem ser observadas entre a soma de números consecutivos e a quantidade de termos?” Os alunos testam casos e formulam hipóteses. Para completar uma investigação, é importante:",
        "alternativas": [
            "interromper os testes quando um padrão aparecer em vários exemplos e registrá-lo como regra matemática da turma.",
            "fornecer a fórmula geral logo após as primeiras observações para evitar que conjecturas incorretas persistam.",
            "manter diferentes conjecturas como respostas possíveis, já que investigações valorizam diversidade de ideias sobre resultados.",
            "avaliar a atividade pelo número de exemplos produzidos, pois a repetição empírica é o principal critério de validade.",
            "organizar evidências e discutir justificativas que sustentem ou refutem as conjecturas formuladas."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Investigação envolve conjecturar, testar, buscar contraexemplos, justificar e comunicar conclusões; muitos casos não constituem prova geral.",
        "feedbackErro": "❌ Atenção! Investigação envolve conjecturar, testar, buscar contraexemplos, justificar e comunicar conclusões; muitos casos não constituem prova geral.",
        "dicaBanca": "Padrão observado e proposição demonstrada não são equivalentes."
    },
    {
        "subtopico": "Investigação matemática",
        "pergunta": "Qual tarefa tem maior potencial investigativo?",
        "alternativas": [
            "explorar quais quadriláteros podem ser obtidos sob certas condições e justificar uma classificação construída pela turma.",
            "copiar as definições de quadrado, retângulo, losango e paralelogramo e resolver itens de identificação direta.",
            "seguir um roteiro que informa cada construção e pede confirmação das propriedades já listadas no enunciado.",
            "resolver dez questões em que a figura e a propriedade a ser aplicada aparecem indicadas no comando da atividade.",
            "assistir à demonstração do professor e reproduzir a mesma classificação em um quadro comparativo previamente estruturado."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Tarefas investigativas deixam espaço para formular relações, testar possibilidades e justificar classificações ou conclusões.",
        "feedbackErro": "❌ Atenção! Tarefas investigativas deixam espaço para formular relações, testar possibilidades e justificar classificações ou conclusões.",
        "dicaBanca": "Roteiro prático não é necessariamente investigação se as perguntas e conclusões já vêm determinadas."
    },
    {
        "subtopico": "Investigação matemática",
        "pergunta": "Durante uma investigação, um estudante encontra um contraexemplo para a conjectura da turma. A atitude mais adequada é:",
        "alternativas": [
            "descartar o caso por ser exceção, preservando a conjectura que funcionou para a maioria dos exemplos investigados.",
            "usar o contraexemplo para revisar a conjectura, identificar condições necessárias e formular uma versão mais precisa.",
            "substituir a conjectura por outra proposta pelo professor, pois a presença de contraexemplo encerra a investigação do grupo.",
            "manter a conjectura como aproximação intuitiva e registrar o contraexemplo em uma seção separada da atividade.",
            "considerar o contraexemplo resultado de erro operacional até que muitos casos semelhantes sejam encontrados pelos estudantes."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! Um contraexemplo válido refuta uma afirmação universal e pode orientar a formulação de hipóteses mais precisas.",
        "feedbackErro": "❌ Atenção! Um contraexemplo válido refuta uma afirmação universal e pode orientar a formulação de hipóteses mais precisas.",
        "dicaBanca": "Em questões de investigação, contraexemplo é ferramenta de refinamento conceitual, não obstáculo a esconder."
    },
    {
        "subtopico": "Investigação matemática",
        "pergunta": "Sobre a mediação docente em investigação matemática, é correto afirmar que o professor:",
        "alternativas": [
            "evita intervenções durante a exploração para preservar a autonomia e impedir influência sobre as descobertas dos alunos.",
            "define previamente a estratégia que deverá ser descoberta e conduz a turma por uma sequência de pistas até que todos reproduzam o método e a conclusão planejados.",
            "faz perguntas, seleciona produções para debate e conduz a sistematização sem entregar antecipadamente o percurso completo.",
            "limita-se a disponibilizar materiais e registrar resultados, deixando a formalização para estudo individual após a aula.",
            "intervém quando surge erro para substituir a estratégia do aluno por um procedimento matematicamente mais eficiente."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Investigação exige autonomia relativa e mediação intencional; professor não desaparece nem determina cada passo.",
        "feedbackErro": "❌ Atenção! Investigação exige autonomia relativa e mediação intencional; professor não desaparece nem determina cada passo.",
        "dicaBanca": "A falsa escolha ‘professor controla tudo’ versus ‘professor não intervém’ costuma aparecer em distratores."
    },
    {
        "subtopico": "BNCC e competências",
        "pergunta": "Uma sequência de Matemática trabalha leitura de dados, construção de gráficos, comparação de argumentos e tomada de decisão. Em termos de competências, a proposta:",
        "alternativas": [
            "desloca o foco do conteúdo, porque competências devem ser desenvolvidas depois do domínio completo das técnicas de cálculo.",
            "prioriza habilidades gerais e reduz a necessidade de sistematizar objetos de conhecimento matemáticos específicos.",
            "confunde competências com interdisciplinaridade, pois gráficos e argumentos pertencem a áreas distintas do currículo.",
            "articula representação, comunicação, raciocínio e argumentação em torno de conhecimentos matemáticos.",
            "substitui a aprendizagem matemática por decisões pessoais, já que situações abertas não permitem avaliação objetiva."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! Na BNCC, competências e conhecimentos se articulam em processos como raciocinar, representar, comunicar e resolver problemas.",
        "feedbackErro": "❌ Atenção! Na BNCC, competências e conhecimentos se articulam em processos como raciocinar, representar, comunicar e resolver problemas.",
        "dicaBanca": "Competência não é algo que vem depois do conteúdo; ela se desenvolve mobilizando conhecimentos em situações."
    },
    {
        "subtopico": "BNCC e competências",
        "pergunta": "Ao planejar com base em habilidades da BNCC, o professor deve evitar tratá-las como:",
        "alternativas": [
            "referências para definir aprendizagens esperadas e selecionar situações que permitam produzir evidências de aprendizagem.",
            "elementos que podem ser articulados em sequências didáticas e retomados em níveis crescentes de complexidade.",
            "orientações que precisam ser interpretadas em conjunto com o currículo e o contexto da rede e da escola.",
            "descrições que ajudam a alinhar objetivos, atividades, intervenções e avaliação em torno de aprendizagens previstas.",
            "itens isolados de uma lista a cumprir, sem relação com progressão, objetos de conhecimento e práticas matemáticas."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Habilidades orientam aprendizagens, mas não devem ser transformadas em checklist fragmentado e descontextualizado.",
        "feedbackErro": "❌ Atenção! Habilidades orientam aprendizagens, mas não devem ser transformadas em checklist fragmentado e descontextualizado.",
        "dicaBanca": "Quando quatro alternativas descrevem uso pedagógico e uma reduz a BNCC a lista burocrática, observe o princípio de articulação curricular."
    },
    {
        "subtopico": "BNCC e competências",
        "pergunta": "Considere: I. resolver problemas; II. representar ideias de diferentes modos; III. argumentar sobre procedimentos; IV. memorizar algoritmos sem analisar seus significados. Entre esses processos, os que melhor se alinham ao desenvolvimento de competências matemáticas são:",
        "alternativas": [
            "I, II e III.",
            "I e IV.",
            "II e IV.",
            "III e IV.",
            "I, II, III e IV."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! A memorização pode ter papel instrumental, mas isolada de significado, argumentação e resolução não caracteriza o desenvolvimento amplo de competências.",
        "feedbackErro": "❌ Atenção! A memorização pode ter papel instrumental, mas isolada de significado, argumentação e resolução não caracteriza o desenvolvimento amplo de competências.",
        "dicaBanca": "Itens com assertivas frequentemente inserem uma prática mecânica entre processos matemáticos legítimos."
    },
    {
        "subtopico": "BNCC e competências",
        "pergunta": "Uma professora escolhe uma habilidade da BNCC e cria uma atividade atraente, mas a tarefa não exige a ação cognitiva indicada pelo verbo da habilidade. O principal problema é:",
        "alternativas": [
            "uso inadequado da BNCC, pois habilidades devem orientar conteúdos e não a forma como os estudantes atuam nas tarefas.",
            "falta de alinhamento entre a aprendizagem esperada e a evidência que a atividade permite produzir.",
            "excesso de contextualização, já que atividades atraentes tendem a desviar atenção dos objetos de conhecimento previstos.",
            "ausência de avaliação somativa, porque o alinhamento de uma habilidade só pode ser verificado em instrumentos formais.",
            "dependência do verbo da habilidade, pois verbos curriculares descrevem temas e não níveis ou ações de aprendizagem."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! Planejamento por habilidades exige que a tarefa mobilize a ação e o conhecimento descritos, permitindo observar a aprendizagem pretendida.",
        "feedbackErro": "❌ Atenção! Planejamento por habilidades exige que a tarefa mobilize a ação e o conhecimento descritos, permitindo observar a aprendizagem pretendida.",
        "dicaBanca": "Verbo da habilidade é pista importante: identificar, comparar, argumentar, resolver e construir pedem evidências diferentes."
    },
    {
        "subtopico": "Inclusão em Matemática",
        "pergunta": "Um estudante compreende relações geométricas, mas apresenta dificuldade para acessar diagramas muito carregados visualmente. Uma adaptação adequada é:",
        "alternativas": [
            "reduzir o conteúdo a reconhecimento de figuras básicas para evitar que a dificuldade de acesso comprometa seu desempenho.",
            "dispensar o estudante das atividades geométricas e transferir a avaliação para conteúdos em que ele demonstra maior facilidade.",
            "oferecer representação visual mais acessível e recursos táteis ou digitais, preservando o objetivo conceitual da tarefa.",
            "manter o mesmo material para toda a turma, pois modificar a representação altera a igualdade das condições avaliativas.",
            "substituir a tarefa por atividade prática livre, sem exigir registro conceitual, já que a inclusão prioriza participação."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Inclusão busca remover barreiras de acesso sem reduzir expectativas ou abandonar o objetivo matemático central.",
        "feedbackErro": "❌ Atenção! Inclusão busca remover barreiras de acesso sem reduzir expectativas ou abandonar o objetivo matemático central.",
        "dicaBanca": "Adaptação não é simplificação automática; muitas vezes muda o meio de acesso, não a aprendizagem esperada."
    },
    {
        "subtopico": "Inclusão em Matemática",
        "pergunta": "Ao planejar uma aula, a professora oferece texto, esquema, material concreto e representação simbólica do mesmo conceito. Essa escolha favorece inclusão porque:",
        "alternativas": [
            "elimina a necessidade de intervenções individuais, pois variedade de recursos atende de modo completo a qualquer dificuldade.",
            "permite que cada aluno escolha uma representação e permaneça nela, sem necessidade de avançar para outras formas matemáticas.",
            "reduz a exigência conceitual ao distribuir o conteúdo em recursos distintos, tornando a atividade mais fácil para a turma.",
            "amplia formas de acesso e expressão, permitindo que diferentes estudantes construam relações entre representações.",
            "substitui avaliação formal por observação de participação, já que múltiplas representações dificultam critérios comuns de correção."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! Múltiplas representações podem remover barreiras e ampliar compreensão, mas continuam exigindo mediação, progressão e critérios de aprendizagem.",
        "feedbackErro": "❌ Atenção! Múltiplas representações podem remover barreiras e ampliar compreensão, mas continuam exigindo mediação, progressão e critérios de aprendizagem.",
        "dicaBanca": "Inclusão amplia caminhos; não elimina objetivos, avaliação ou necessidade de articulação entre representações."
    },
    {
        "subtopico": "Inclusão em Matemática",
        "pergunta": "Em avaliação, um aluno utiliza leitor de tela e tempo ampliado. Esses recursos:",
        "alternativas": [
            "produzem vantagem sobre os demais estudantes e devem ser compensados com questões de maior dificuldade conceitual.",
            "alteram a validade da avaliação porque condições idênticas são requisito para comparar desempenho entre estudantes.",
            "devem ser substituídos por prova oral, independentemente do objetivo e da natureza das questões matemáticas propostas.",
            "são adequados quando o professor reduz também os critérios de correção para corresponder às condições diferenciadas.",
            "podem garantir acesso equitativo ao instrumento sem alterar o conhecimento matemático que está sendo avaliado."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Equidade pode exigir condições diferenciadas para que a avaliação meça o construto pretendido, e não barreiras de acesso.",
        "feedbackErro": "❌ Atenção! Equidade pode exigir condições diferenciadas para que a avaliação meça o construto pretendido, e não barreiras de acesso.",
        "dicaBanca": "Igualdade de condições materiais não é sinônimo de equidade avaliativa."
    },
    {
        "subtopico": "Inclusão em Matemática",
        "pergunta": "Uma professora afirma que certo aluno “não nasceu para Matemática” e, por isso, oferece tarefas permanentemente mais simples. Essa prática é problemática porque:",
        "alternativas": [
            "transforma dificuldade atual em expectativa fixa e restringe oportunidades de acesso a aprendizagens matemáticas mais complexas.",
            "adota diferenciação pedagógica, estratégia indicada quando estudantes apresentam níveis distintos de domínio do conteúdo.",
            "evita frustração e permite que o aluno construa autoconfiança, mantendo-o em tarefas de baixa complexidade até que demonstre espontaneamente condições de retornar ao currículo comum.",
            "reconhece limites individuais e organiza expectativas realistas, reduzindo pressão por desempenho semelhante ao da turma.",
            "prioriza inclusão, pois adaptar o nível de desafio é suficiente para garantir participação significativa nas aulas."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Inclusão pressupõe altas expectativas com apoios adequados; reduzir permanentemente o currículo pode produzir exclusão pedagógica.",
        "feedbackErro": "❌ Atenção! Inclusão pressupõe altas expectativas com apoios adequados; reduzir permanentemente o currículo pode produzir exclusão pedagógica.",
        "dicaBanca": "Diferenciação não significa cristalizar o estudante em tarefas fáceis. Observe progressão e acesso ao currículo."
    },
    {
        "subtopico": "Planejamento didático",
        "pergunta": "O objetivo da aula é comparar estratégias de cálculo mental, mas a atividade central pede cópia de algoritmos e a avaliação contabiliza velocidade. O problema principal é:",
        "alternativas": [
            "ausência de tecnologia digital, que poderia tornar o cálculo mental mais rápido e permitir comparação entre resultados.",
            "desalinhamento entre objetivo, atividade e critério de avaliação.",
            "excesso de procedimentos formais, pois cálculo mental deve ocorrer sem qualquer registro escrito das estratégias utilizadas.",
            "uso de avaliação quantitativa, já que objetivos conceituais precisam ser avaliados por observação informal do professor.",
            "falta de contextualização, porque estratégias de cálculo mental só podem ser comparadas em problemas do cotidiano."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! Planejamento consistente articula o que se pretende aprender, o que o aluno fará e quais evidências serão consideradas.",
        "feedbackErro": "❌ Atenção! Planejamento consistente articula o que se pretende aprender, o que o aluno fará e quais evidências serão consideradas.",
        "dicaBanca": "Alinhamento construtivo é um bom critério para detectar incoerência entre intenção, tarefa e avaliação."
    },
    {
        "subtopico": "Planejamento didático",
        "pergunta": "Antes de uma aula sobre proporcionalidade, o professor antecipa estratégias corretas e erros prováveis dos alunos. Essa ação é relevante porque:",
        "alternativas": [
            "garante que o professor reconheça rapidamente a resposta esperada e reduza o tempo destinado a estratégias imprevistas.",
            "substitui a avaliação diagnóstica, pois prever erros é suficiente para conhecer as dificuldades reais de uma turma específica.",
            "permite planejar perguntas e intervenções que respondam a diferentes raciocínios durante a aula.",
            "evita que os estudantes usem procedimentos pessoais que se afastem da sequência metodológica planejada pelo docente.",
            "permite classificar previamente os alunos segundo o tipo de estratégia que provavelmente usarão na resolução."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Antecipar respostas é parte de um planejamento responsivo, mas hipóteses docentes precisam ser confrontadas com as produções reais.",
        "feedbackErro": "❌ Atenção! Antecipar respostas é parte de um planejamento responsivo, mas hipóteses docentes precisam ser confrontadas com as produções reais.",
        "dicaBanca": "Planejar intervenções não significa controlar todas as estratégias dos alunos."
    },
    {
        "subtopico": "Planejamento didático",
        "pergunta": "Em uma sequência, o professor usa material concreto, desenho, tabela e expressão algébrica. Para que os recursos formem progressão didática, é necessário:",
        "alternativas": [
            "apresentar os recursos em aulas distintas para que o estudante domine cada linguagem antes de compará-las.",
            "começar pela expressão algébrica e usar materiais depois como ilustração, garantindo rigor desde o início da sequência.",
            "permitir que cada estudante permaneça no recurso que considera mais fácil, evitando mudanças que possam gerar dificuldades.",
            "explicitar relações entre as representações e aumentar gradualmente a demanda de generalização e abstração.",
            "usar todos os recursos na mesma tarefa, pois variedade de materiais já caracteriza progressão metodológica do conteúdo."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! Progressão não é acumular recursos; envolve relações entre representações e crescente complexidade conceitual.",
        "feedbackErro": "❌ Atenção! Progressão não é acumular recursos; envolve relações entre representações e crescente complexidade conceitual.",
        "dicaBanca": "A banca pode confundir variedade com progressão. Procure mudança intencional na demanda cognitiva."
    },
    {
        "subtopico": "Planejamento didático",
        "pergunta": "Após uma avaliação formativa, metade da turma demonstra dificuldade em interpretar razão. No planejamento da aula seguinte, o professor deveria:",
        "alternativas": [
            "manter a sequência prevista para cumprir o cronograma e oferecer atividades extras aos estudantes com baixo desempenho.",
            "repetir a explicação anterior de modo mais lento, preservando os exemplos e procedimentos já apresentados na primeira aula.",
            "substituir o conteúdo por exercícios de regra de três, pois um algoritmo conhecido pode compensar dificuldade conceitual em razão.",
            "registrar a dificuldade para a avaliação final e prosseguir, já que alterações frequentes comprometem a coerência do planejamento.",
            "retomar o conceito com novas representações e tarefas que enfrentem a dificuldade diagnosticada antes de avançar."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Planejamento é flexível e deve incorporar evidências de aprendizagem para ajustar intervenções sem perder os objetivos curriculares.",
        "feedbackErro": "❌ Atenção! Planejamento é flexível e deve incorporar evidências de aprendizagem para ajustar intervenções sem perder os objetivos curriculares.",
        "dicaBanca": "Plano não é roteiro imutável; avaliação formativa só tem sentido quando informa decisões."
    },
    {
        "subtopico": "Rigor conceitual",
        "pergunta": "Ao estudar quadriláteros, alguns alunos afirmam que um quadrado não é retângulo porque “parece diferente”. A intervenção conceitualmente rigorosa é:",
        "alternativas": [
            "retomar as propriedades definidoras e discutir a inclusão de classes, usando exemplos e contraexemplos.",
            "aceitar a classificação cotidiana e registrar que, na Matemática escolar, nomes de figuras podem variar conforme o contexto.",
            "memorizar uma lista de características de cada figura e evitar relações de inclusão que aumentem a complexidade da classificação.",
            "usar imagens prototípicas de quadrado e retângulo para fortalecer a diferenciação visual antes de introduzir definições formais.",
            "considerar quadrado e retângulo categorias distintas no ensino inicial e corrigir essa simplificação em anos posteriores."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Rigor conceitual exige trabalhar propriedades necessárias e relações lógicas, evitando depender de protótipos visuais.",
        "feedbackErro": "❌ Atenção! Rigor conceitual exige trabalhar propriedades necessárias e relações lógicas, evitando depender de protótipos visuais.",
        "dicaBanca": "Em classificações inclusivas, definições têm mais peso que aparência típica."
    },
    {
        "subtopico": "Rigor conceitual",
        "pergunta": "Uma estratégia intuitiva produz respostas corretas em vários casos, mas falha em um contraexemplo. O professor deve:",
        "alternativas": [
            "preservar a estratégia como recurso informal, pois sua utilidade prática compensa a ausência de validade geral.",
            "discutir as condições de validade da estratégia e reformular a generalização com base no contraexemplo.",
            "substituí-la pela regra formal do livro e evitar analisar o erro para não reforçar uma generalização inadequada.",
            "aceitá-la em atividades introdutórias e considerar a formalização necessária quando surgirem conteúdos avançados.",
            "classificar o contraexemplo como caso especial e manter a regra para situações mais frequentes encontradas pelos alunos."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! Rigor envolve explicitar condições, limites e justificativas; contraexemplos ajudam a corrigir generalizações indevidas.",
        "feedbackErro": "❌ Atenção! Rigor envolve explicitar condições, limites e justificativas; contraexemplos ajudam a corrigir generalizações indevidas.",
        "dicaBanca": "Muitos exemplos favoráveis não salvam uma afirmação universal diante de um contraexemplo válido."
    },
    {
        "subtopico": "Rigor conceitual",
        "pergunta": "Sobre rigor conceitual e metodologias ativas, assinale a alternativa correta:",
        "alternativas": [
            "metodologias ativas priorizam descoberta pessoal, por isso definições formais devem ser evitadas para não restringir estratégias.",
            "rigor conceitual requer exposição direta do professor, enquanto atividades investigativas são adequadas a momentos de motivação.",
            "exploração e participação podem ser articuladas à precisão de definições, justificativas e sistematizações.",
            "a sistematização reduz autonomia porque transforma conclusões da turma em um conhecimento matemático previamente estabelecido.",
            "precisão matemática se refere à resposta final, de modo que diferentes justificativas são equivalentes se produzem o mesmo resultado."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Metodologias ativas e rigor não são opostos; exploração precisa culminar em análise, validação e sistematização.",
        "feedbackErro": "❌ Atenção! Metodologias ativas e rigor não são opostos; exploração precisa culminar em análise, validação e sistematização.",
        "dicaBanca": "Cuidado com falsas dicotomias entre participação do aluno e precisão matemática."
    },
    {
        "subtopico": "Rigor conceitual",
        "pergunta": "Ao definir número primo, o professor diz: “é um número que só divide por 1 e por ele mesmo”. Para aumentar o rigor, seria importante explicitar que:",
        "alternativas": [
            "a expressão cotidiana já é suficiente, porque exceções podem ser ensinadas quando surgirem em exercícios posteriores.",
            "a definição deve incluir números negativos que possuem dois divisores em módulo, ampliando o conjunto de exemplos possíveis.",
            "o número 1 pode ser tratado como primo em atividades iniciais, desde que a convenção seja corrigida no estudo de fatoração.",
            "a definição se refere a números naturais maiores que 1 com exatamente dois divisores positivos distintos.",
            "a quantidade de divisores é menos relevante que a impossibilidade de escrever o número como produto de outros naturais."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! Definições matemáticas precisam explicitar domínio e condições necessárias para evitar casos ambíguos, como o número 1.",
        "feedbackErro": "❌ Atenção! Definições matemáticas precisam explicitar domínio e condições necessárias para evitar casos ambíguos, como o número 1.",
        "dicaBanca": "Questões de rigor frequentemente exploram definições informais que funcionam em exemplos típicos, mas falham em casos-limite."
    },
    {
        "subtopico": "Autonomia do estudante",
        "pergunta": "Em um problema, o professor oferece três estratégias possíveis e pede que cada aluno escolha, justifique e depois compare sua decisão. A autonomia é favorecida porque:",
        "alternativas": [
            "o estudante pode escolher livremente, e a validade matemática da estratégia torna-se secundária diante da autoria da solução.",
            "o professor reduz sua mediação, permitindo que as preferências individuais definam o percurso e os critérios de avaliação.",
            "as estratégias fornecidas eliminam a necessidade de conhecimento prévio e tornam a atividade acessível a todos da mesma forma.",
            "a comparação final serve para identificar a estratégia mais rápida, que deve ser adotada pelo grupo em tarefas futuras.",
            "há espaço para decisão com critérios matemáticos e posterior reflexão sobre a escolha realizada."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Autonomia envolve tomada de decisão responsável, análise de resultados e justificativa; não é ausência de critérios ou mediação.",
        "feedbackErro": "❌ Atenção! Autonomia envolve tomada de decisão responsável, análise de resultados e justificativa; não é ausência de critérios ou mediação.",
        "dicaBanca": "Escolha sem reflexão não basta. Procure decisão acompanhada de justificativa e autorregulação."
    },
    {
        "subtopico": "Autonomia do estudante",
        "pergunta": "Um estudante verifica espontaneamente se sua resposta é plausível e decide refazer parte da solução. Essa atitude evidencia:",
        "alternativas": [
            "autorregulação, pois ele monitora o próprio processo e toma decisões para melhorar a solução.",
            "dependência procedimental, porque rever passos indica insegurança em relação ao método utilizado inicialmente.",
            "avaliação somativa individual, já que o estudante atribui valor ao próprio desempenho antes da correção docente.",
            "investigação formal, porque qualquer revisão de estratégia implica formulação e prova de uma conjectura matemática.",
            "comunicação matemática, pois o controle do procedimento interno substitui a necessidade de justificar a solução a terceiros."
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 Muito bem! Autonomia também se expressa em metacognição: planejar, monitorar, avaliar e ajustar o próprio trabalho.",
        "feedbackErro": "❌ Atenção! Autonomia também se expressa em metacognição: planejar, monitorar, avaliar e ajustar o próprio trabalho.",
        "dicaBanca": "A banca pode chamar autocorreção de ‘independência’; procure a ideia mais precisa de autorregulação."
    },
    {
        "subtopico": "Autonomia do estudante",
        "pergunta": "Para favorecer autonomia sem abandonar a mediação, o professor deve:",
        "alternativas": [
            "evitar feedback durante a resolução e comentar as estratégias depois que todos concluírem individualmente a tarefa.",
            "formular perguntas que ajudem o aluno a analisar escolhas, em vez de fornecer imediatamente o procedimento a seguir.",
            "permitir que o estudante mantenha uma estratégia incorreta até descobrir o problema sozinho, ainda que a dificuldade se prolongue.",
            "oferecer uma sequência fixa de pistas que conduza todos à mesma solução, reduzindo diferenças entre percursos individuais.",
            "transferir ao aluno a definição dos objetivos da aula e dos critérios de validade matemática usados na atividade."
        ],
        "correta": 1,
        "feedbackAcerto": "🎉 Muito bem! Mediação para autonomia cria apoios que levam o estudante a pensar sobre o próprio raciocínio, sem resolver por ele.",
        "feedbackErro": "❌ Atenção! Mediação para autonomia cria apoios que levam o estudante a pensar sobre o próprio raciocínio, sem resolver por ele.",
        "dicaBanca": "Autonomia é construída com scaffolding; professor não some e também não entrega cada passo."
    },
    {
        "subtopico": "Material manipulável",
        "pergunta": "Ao usar blocos de base dez para compreender reagrupamentos, a etapa decisiva para avançar além da manipulação é:",
        "alternativas": [
            "aumentar o tempo de manuseio até que os alunos realizem as trocas com rapidez e pouca necessidade de orientação.",
            "substituir gradualmente as peças por imagens semelhantes, mantendo o foco na aparência dos agrupamentos construídos.",
            "relacionar as trocas realizadas no material aos registros numéricos e ao valor posicional.",
            "retirar o material quando os estudantes acertarem os cálculos, sem discutir como as ações concretas correspondem ao algoritmo.",
            "usar cores fixas para cada ordem do sistema decimal, pois a associação visual garante compreensão do valor posicional."
        ],
        "correta": 2,
        "feedbackAcerto": "🎉 Muito bem! Material manipulável ganha sentido quando suas ações são conectadas às representações e estruturas matemáticas que pretende modelar.",
        "feedbackErro": "❌ Atenção! Material manipulável ganha sentido quando suas ações são conectadas às representações e estruturas matemáticas que pretende modelar.",
        "dicaBanca": "Objeto concreto não carrega o conceito por si só; o elo entre ação, representação e símbolo precisa ser construído."
    },
    {
        "subtopico": "Material manipulável",
        "pergunta": "Um professor usa peças fracionárias e conclui que todos compreenderam equivalência porque montaram 1/2 com duas peças de 1/4. Essa conclusão é precipitada porque:",
        "alternativas": [
            "peças fracionárias não são adequadas para equivalência, pois materiais concretos devem ser usados em conteúdos de números naturais.",
            "a equivalência só pode ser demonstrada por cálculo algébrico, e representações visuais têm função motivadora no ensino.",
            "o material reduz a dificuldade da tarefa e impede avaliar se o aluno conseguiria resolver a situação sem apoio externo.",
            "a ação correta no material não garante que o estudante compreenda e generalize a relação numérica envolvida.",
            "a montagem depende da cor e do formato das peças, características que tornam impossível estabelecer relações matemáticas válidas."
        ],
        "correta": 3,
        "feedbackAcerto": "🎉 Muito bem! É necessário verificar se o estudante transfere a relação observada para registros, argumentos e novas situações.",
        "feedbackErro": "❌ Atenção! É necessário verificar se o estudante transfere a relação observada para registros, argumentos e novas situações.",
        "dicaBanca": "‘Conseguiu montar’ não equivale automaticamente a ‘compreendeu o conceito’."
    },
    {
        "subtopico": "Material manipulável",
        "pergunta": "Sobre materiais manipuláveis, assinale a alternativa mais adequada:",
        "alternativas": [
            "são recursos próprios das séries iniciais, pois estudantes mais velhos precisam desenvolver pensamento simbólico sem apoio concreto.",
            "devem representar fielmente o objeto matemático, evitando modelos que simplifiquem propriedades ou destaquem aspectos específicos.",
            "são mais eficazes quando o professor demonstra o uso correto e os alunos reproduzem a manipulação antes da explicação conceitual.",
            "dispensam múltiplas representações quando permitem ao estudante observar diretamente as propriedades que serão formalizadas.",
            "podem apoiar inclusive ideias abstratas, desde que escolhidos e mediados em função do conceito e da progressão didática."
        ],
        "correta": 4,
        "feedbackAcerto": "🎉 Muito bem! Materiais são representações didáticas com potencial e limites; podem ser úteis em diferentes níveis quando articulados à abstração.",
        "feedbackErro": "❌ Atenção! Materiais são representações didáticas com potencial e limites; podem ser úteis em diferentes níveis quando articulados à abstração.",
        "dicaBanca": "Concreto não significa infantil. O critério é a função cognitiva e didática do recurso."
    }
];
