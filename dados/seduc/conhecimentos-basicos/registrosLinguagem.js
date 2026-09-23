/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 13: Registros de Linguagem
   25 questões autorais calibradas pelo edital e por provas FGV de professores.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id":"SEDUC-LP-REG-001",
        "numero":1,
        "subtopico":"Adequação comunicativa",
        "dificuldade":"media",
        "pergunta":"Em uma entrevista oral, uma influenciadora afirma: ‘Eu trabalho aqui em casa, né? Aí eu organizo tudo e tal...’. Considerando a situação de comunicação, a avaliação mais adequada desse registro é:",
        "alternativas":[
            "As marcas de informalidade podem ser adequadas à entrevista oral e ao grau de espontaneidade da situação.",
            "O uso de ‘né’ e ‘aí’ torna o enunciado necessariamente incorreto em qualquer contexto.",
            "A fala deveria reproduzir o padrão de um relatório administrativo para ser comunicativamente eficiente.",
            "A oralidade só é aceitável quando não apresenta repetições ou marcadores conversacionais.",
            "O tema profissional da entrevista exige obrigatoriamente registro erudito."
        ],
        "correta":0,
        "feedbackAcerto":"A FGV valoriza a noção de adequação: marcas coloquiais podem ser plenamente compatíveis com uma entrevista oral espontânea.",
        "feedbackErro":"Não julgue o registro isoladamente. Observe interlocutores, gênero, meio, finalidade e grau de formalidade da situação.",
        "analiseAlternativas":[
            "Correta. A informalidade pode ser funcional e adequada ao contexto oral.",
            "Incorreta. Essas marcas não são erros universais; seu valor depende da situação.",
            "Incorreta. Entrevista oral e relatório administrativo têm condições de produção diferentes.",
            "Incorreta. Repetições e marcadores são comuns na oralidade espontânea.",
            "Incorreta. Tema profissional não determina sozinho registro erudito."
        ],
        "dicaBanca":"A FGV já cobrou em prova de professor exatamente a adequação de marcas informais em entrevista oral.",
        "pegadinha":"Tema sério não obriga, por si só, registro formal.",
        "memorizar2026":"Registro adequado = escolha compatível com situação, interlocutor, finalidade e meio.",
        "fonte":"Edital SEDUC-PA 2026; FGV — Professor de Língua Portuguesa, Prefeitura de São Lourenço da Mata/PE, questão sobre variedades linguísticas em entrevista oral."
    },
    {
        "id":"SEDUC-LP-REG-002",
        "numero":2,
        "subtopico":"Registro formal",
        "dificuldade":"media",
        "pergunta":"Um professor precisa solicitar oficialmente à direção a correção de um lançamento em seu assentamento funcional. Entre as redações abaixo, a mais adequada ao registro formal é:",
        "alternativas":[
            "Oi, direção! Dá uma olhada lá porque meu registro ficou meio errado.",
            "Solicito a verificação do lançamento funcional indicado, a fim de que seja efetuada a correção necessária.",
            "Então, queria ver se vocês conseguem ajeitar aquele negócio no sistema.",
            "Galera da direção, preciso que resolvam isso aí pra mim, beleza?",
            "Poxa, meu cadastro deu ruim; peço que vocês deem um jeito."
        ],
        "correta":1,
        "feedbackAcerto":"A alternativa adota vocabulário preciso, impessoalidade e construção compatível com comunicação administrativa.",
        "feedbackErro":"Registro formal evita gírias, marcas excessivamente conversacionais e referências vagas quando a situação exige precisão institucional.",
        "analiseAlternativas":[
            "Incorreta. Há marcas coloquiais e referência imprecisa.",
            "Correta. É clara, objetiva e adequada a uma solicitação institucional.",
            "Incorreta. ‘aquele negócio’ e a construção conversacional reduzem a precisão.",
            "Incorreta. ‘Galera’, ‘isso aí’ e ‘beleza’ são incompatíveis com o contexto oficial.",
            "Incorreta. ‘deu ruim’ e ‘dar um jeito’ são coloquiais."
        ],
        "dicaBanca":"Formalidade não significa rebuscamento; significa adequação, clareza, monitoramento e precisão.",
        "pegadinha":"Uma frase difícil não é automaticamente mais formal.",
        "memorizar2026":"Formal = monitorado, preciso e adequado ao contexto institucional.",
        "fonte":"Edital SEDUC-PA 2026; padrão de adequação comunicativa recorrente em provas FGV."
    },
    {
        "id":"SEDUC-LP-REG-003",
        "numero":3,
        "subtopico":"Registro corrente",
        "dificuldade":"media",
        "pergunta":"Assinale a frase que exemplifica melhor um registro corrente, entendido como uso cotidiano correto, neutro e sem marcas fortes de intimidade ou erudição.",
        "alternativas":[
            "Vossa Senhoria haverá por bem encaminhar o expediente supracitado.",
            "Mano, depois a gente desenrola isso aí.",
            "O professor explicou o conteúdo e os alunos fizeram as atividades.",
            "Eita, mainha, chega mais que eu te conto!",
            "A hermenêutica do enunciado evidencia intrincada tessitura semântica."
        ],
        "correta":2,
        "feedbackAcerto":"A frase é correta, cotidiana e neutra, sem marcas de intimidade, gíria ou elaboração erudita.",
        "feedbackErro":"O registro corrente ocupa uma faixa intermediária: não é burocrático/erudito nem marcadamente coloquial ou familiar.",
        "analiseAlternativas":[
            "Incorreta. Registro administrativo solene.",
            "Incorreta. Há gíria e coloquialidade forte.",
            "Correta. Uso cotidiano, claro e correto.",
            "Incorreta. Marcas familiares e regionais são evidentes.",
            "Incorreta. Vocabulário erudito e especializado."
        ],
        "dicaBanca":"A FGV usa classificações de registro em que ‘corrente’ não significa descuidado.",
        "pegadinha":"Corrente ≠ popular; corrente pode estar plenamente de acordo com a norma culta.",
        "memorizar2026":"Registro corrente = cotidiano, correto e relativamente neutro.",
        "fonte":"Edital SEDUC-PA 2026; FGV — cobrança de registros corrente, formal, familiar e erudito em provas recentes."
    },
    {
        "id":"SEDUC-LP-REG-004",
        "numero":4,
        "subtopico":"Registro familiar",
        "dificuldade":"media",
        "pergunta":"Uma estudante envia à irmã: ‘Mana, chego mais tarde. Guarda um pedaço do bolo pra mim!’. Nesse contexto, o registro é predominantemente",
        "alternativas":[
            "erudito, porque emprega vocativo.",
            "formal, porque a frase é gramaticalmente compreensível.",
            "técnico, porque informa horário e pedido.",
            "familiar, pelas marcas de intimidade e proximidade entre interlocutoras.",
            "administrativo, porque transmite uma solicitação."
        ],
        "correta":3,
        "feedbackAcerto":"A relação íntima entre as interlocutoras e a escolha lexical ‘Mana’ caracterizam registro familiar.",
        "feedbackErro":"O tipo de registro não é definido apenas pela correção gramatical nem pela presença de um pedido; a relação entre os participantes é decisiva.",
        "analiseAlternativas":[
            "Incorreta. Vocativo não torna o registro erudito.",
            "Incorreta. Compreensibilidade e correção não bastam para classificar como formal.",
            "Incorreta. Não há vocabulário especializado.",
            "Correta. Há proximidade afetiva e baixa distância social.",
            "Incorreta. Pedido pessoal não equivale a comunicação administrativa."
        ],
        "dicaBanca":"Observe a relação entre os interlocutores: intimidade costuma favorecer registro familiar.",
        "pegadinha":"Registro familiar pode ser gramaticalmente correto.",
        "memorizar2026":"Familiar = intimidade + proximidade + maior liberdade expressiva.",
        "fonte":"Edital SEDUC-PA 2026; classificação de registros explorada em itens FGV."
    },
    {
        "id":"SEDUC-LP-REG-005",
        "numero":5,
        "subtopico":"Registro popular",
        "dificuldade":"media",
        "pergunta":"Em uma narrativa, o narrador reproduz a fala de uma personagem: ‘Os menino chegou cedo e já foi tudo pra beira do rio.’ A interpretação linguística mais adequada é:",
        "alternativas":[
            "Trata-se de linguagem sem sistema, porque há discordâncias em relação à norma-padrão.",
            "O trecho deve ser considerado incompreensível por não seguir o registro formal.",
            "A fala prova que a personagem não domina qualquer variedade da língua portuguesa.",
            "A única análise possível é classificá-la como erro e substituir toda a fala pela norma-padrão.",
            "O trecho apresenta marcas de uma variedade popular, legítima linguisticamente, cuja adequação depende do contexto."
        ],
        "correta":4,
        "feedbackAcerto":"Variações populares não são ausência de língua; possuem regularidades e podem ser funcionais na caracterização de personagens e contextos.",
        "feedbackErro":"A prova pode contrastar norma-padrão e variedades sem autorizar preconceito linguístico.",
        "analiseAlternativas":[
            "Incorreta. Variedades populares têm estrutura e regularidades.",
            "Incorreta. O trecho é compreensível.",
            "Incorreta. Uma forma não padrão não autoriza concluir incapacidade linguística geral.",
            "Incorreta. Em narrativa, a variedade pode cumprir função estilística e social.",
            "Correta. Reconhece variação e adequação sem estigmatização."
        ],
        "dicaBanca":"A FGV já cobrou de professor a atitude de reconhecer a provável adequação da linguagem coloquial à situação.",
        "pegadinha":"Desvio da norma-padrão não significa ausência de competência comunicativa.",
        "memorizar2026":"Variação popular é variedade linguística; avaliação deve considerar contexto e finalidade.",
        "fonte":"Edital SEDUC-PA 2026; FGV — SMESP, Professor de Português, questão sobre atitude diante de segmento coloquial."
    },
    {
        "id":"SEDUC-LP-REG-006",
        "numero":6,
        "subtopico":"Registro erudito",
        "dificuldade":"media",
        "pergunta":"Entre as opções, a frase que mais se aproxima de um registro erudito é:",
        "alternativas":[
            "A exegese do documento requer acurada análise de suas implicações hermenêuticas.",
            "A gente vê isso depois, sem estresse.",
            "O relatório ficou pronto hoje.",
            "Mano, esse texto tá pesado demais.",
            "Me manda o arquivo quando der."
        ],
        "correta":0,
        "feedbackAcerto":"Há vocabulário raro/especializado e construção altamente monitorada, características associadas ao registro erudito.",
        "feedbackErro":"Registro erudito tende a usar vocabulário mais raro, preciso e elaborado, frequentemente em contextos especializados.",
        "analiseAlternativas":[
            "Correta. ‘exegese’, ‘acurada’ e ‘hermenêuticas’ elevam o grau de elaboração lexical.",
            "Incorreta. Registro informal.",
            "Incorreta. Registro corrente.",
            "Incorreta. Gíria e coloquialidade.",
            "Incorreta. Registro informal."
        ],
        "dicaBanca":"Não confunda formal com erudito: todo erudito é altamente monitorado, mas nem todo formal usa vocabulário raro.",
        "pegadinha":"Formalidade pode ser simples; erudição envolve grau maior de elaboração lexical.",
        "memorizar2026":"Erudito = alto monitoramento + vocabulário incomum/especializado.",
        "fonte":"Edital SEDUC-PA 2026; classificação de registros explorada pela FGV."
    },
    {
        "id":"SEDUC-LP-REG-007",
        "numero":7,
        "subtopico":"Gíria",
        "dificuldade":"media",
        "pergunta":"Em ‘A prova foi de boa, mas a última questão pegou geral’, a expressão ‘de boa’ funciona como",
        "alternativas":[
            "jargão técnico da área de educação.",
            "marca de gíria/coloquialidade associada a determinados grupos e situações informais.",
            "arcaísmo próprio de textos jurídicos.",
            "forma obrigatória da língua falada brasileira.",
            "registro erudito por sintetizar uma avaliação."
        ],
        "correta":1,
        "feedbackAcerto":"‘De boa’ é expressão coloquial/gíria, típica de contextos informais e capaz de marcar identidade e proximidade social.",
        "feedbackErro":"Gíria está ligada a uso social e identitário; não é vocabulário técnico de profissão.",
        "analiseAlternativas":[
            "Incorreta. Jargão pertence a área profissional/especializada.",
            "Correta. É marca coloquial de uso social.",
            "Incorreta. Não é forma antiga em desuso.",
            "Incorreta. A fala admite muitos registros.",
            "Incorreta. A expressão não é erudita."
        ],
        "dicaBanca":"A banca pode pedir a função social da gíria, não apenas sua definição.",
        "pegadinha":"Gíria ≠ jargão.",
        "memorizar2026":"Gíria = marca social/identitária; jargão = vocabulário técnico de grupo profissional/especializado.",
        "fonte":"Edital SEDUC-PA 2026; padrão conceitual recorrente em questões FGV sobre registros."
    },
    {
        "id":"SEDUC-LP-REG-008",
        "numero":8,
        "subtopico":"Jargão profissional",
        "dificuldade":"media",
        "pergunta":"Em uma reunião pedagógica, um docente diz: ‘Precisamos alinhar o PPP às habilidades da BNCC e rever as evidências da avaliação formativa.’ O trecho exemplifica principalmente",
        "alternativas":[
            "gíria juvenil sem relação com atividade profissional.",
            "registro familiar por ocorrer entre colegas.",
            "linguagem popular decorrente de baixa escolarização.",
            "jargão profissional, com termos próprios do campo educacional.",
            "registro divinatório, por antecipar ações futuras."
        ],
        "correta":3,
        "feedbackAcerto":"PPP, BNCC e avaliação formativa pertencem ao repertório técnico-profissional da educação.",
        "feedbackErro":"A relação entre colegas não elimina a presença de vocabulário técnico especializado.",
        "analiseAlternativas":[
            "Incorreta. Não são expressões identitárias juvenis.",
            "Incorreta. A proximidade entre colegas não é o aspecto central do trecho.",
            "Incorreta. O vocabulário é técnico, não popular.",
            "Correta. Há léxico próprio do campo profissional.",
            "Incorreta. Não se trata de previsão."
        ],
        "dicaBanca":"Pergunte se o vocabulário identifica uma profissão/área específica.",
        "pegadinha":"Jargão pode aparecer tanto em registro formal quanto informal.",
        "memorizar2026":"Jargão = léxico especializado de uma comunidade profissional/técnica.",
        "fonte":"Edital SEDUC-PA 2026; abordagem de registros e léxico especializado recorrente na FGV."
    },
    {
        "id":"SEDUC-LP-REG-009",
        "numero":9,
        "subtopico":"Oralidade x escrita",
        "dificuldade":"alta",
        "pergunta":"Na transcrição de uma fala espontânea aparecem hesitações, repetições e marcadores como ‘então’, ‘né’ e ‘tipo’. A análise mais adequada é:",
        "alternativas":[
            "Esses elementos são sempre erros e devem ser apagados em qualquer transcrição.",
            "A língua falada se caracteriza por ausência de organização textual.",
            "Esses traços podem funcionar na organização da interação oral, embora nem sempre devam ser mantidos numa retextualização formal escrita.",
            "A escrita formal deve reproduzir todas as hesitações para preservar a correção gramatical.",
            "A presença de marcadores conversacionais transforma qualquer fala em gíria."
        ],
        "correta":2,
        "feedbackAcerto":"Traços de planejamento em tempo real são comuns à oralidade e podem desempenhar funções discursivas; a passagem à escrita depende da finalidade.",
        "feedbackErro":"Não trate oralidade como escrita defeituosa. São modalidades com condições de produção diferentes.",
        "analiseAlternativas":[
            "Incorreta. Em transcrição linguística, esses elementos podem ser relevantes.",
            "Incorreta. A fala possui organização própria.",
            "Correta. Distingue função oral e adequação na retextualização.",
            "Incorreta. Escrita formal não precisa reproduzir hesitações.",
            "Incorreta. Marcadores conversacionais não são necessariamente gíria."
        ],
        "dicaBanca":"FGV já cobrou traços específicos da língua falada, como interrupções e reformulações.",
        "pegadinha":"Oralidade ≠ informalidade absoluta; escrita ≠ formalidade obrigatória.",
        "memorizar2026":"Fala e escrita têm recursos próprios; adequação depende do gênero e da finalidade.",
        "fonte":"Edital SEDUC-PA 2026; FGV — itens sobre marcas da língua falada e adequação comunicativa."
    },
    {
        "id":"SEDUC-LP-REG-010",
        "numero":10,
        "subtopico":"Tema x registro",
        "dificuldade":"alta",
        "pergunta":"Um podcast universitário discute mudanças climáticas com linguagem acessível, exemplos cotidianos e algumas marcas conversacionais. Sobre o registro, é correto afirmar que",
        "alternativas":[
            "o tema científico exige obrigatoriamente vocabulário erudito e construções solenes.",
            "a presença de termos cotidianos torna o conteúdo cientificamente inválido.",
            "o registro deve ser classificado como formal apenas porque o assunto é acadêmico.",
            "qualquer marca oral impede que a comunicação seja considerada adequada.",
            "o registro pode ser menos formal e ainda adequado, se estiver ajustado ao público, ao meio e à finalidade de divulgação."
        ],
        "correta":4,
        "feedbackAcerto":"A escolha de registro depende da situação comunicativa e do público; divulgação científica pode buscar acessibilidade sem perder rigor.",
        "feedbackErro":"Não classifique o registro apenas pelo tema. A FGV privilegia a relação entre linguagem e contexto.",
        "analiseAlternativas":[
            "Incorreta. Ciência pode ser divulgada em linguagem acessível.",
            "Incorreta. Cotidianidade lexical não invalida conteúdo.",
            "Incorreta. Assunto não determina sozinho o registro.",
            "Incorreta. Oralidade pode ser adequada ao podcast.",
            "Correta. Adequação envolve público, gênero, meio e finalidade."
        ],
        "dicaBanca":"A própria FGV já ofereceu como distrator a ideia de que tema formal exige registro formal.",
        "pegadinha":"Tema ≠ registro.",
        "memorizar2026":"O contexto é decisivo para avaliar o registro.",
        "fonte":"Edital SEDUC-PA 2026; FGV — abordagem contextual de registros de linguagem."
    },
    {
        "id":"SEDUC-LP-REG-011",
        "numero":11,
        "subtopico":"Adequação ao destinatário",
        "dificuldade":"media",
        "pergunta":"A mesma professora escreve duas mensagens: I. ao grupo de amigos: ‘Gente, chego daqui a pouco!’; II. à Secretaria: ‘Informo que chegarei às 14h para a reunião agendada.’ A diferença entre I e II mostra principalmente",
        "alternativas":[
            "adequação do registro à relação entre interlocutores e à situação comunicativa.",
            "incapacidade de manter uma única variedade linguística.",
            "erro no primeiro texto, porque mensagens devem ser sempre formais.",
            "mudança de idioma entre as duas mensagens.",
            "oposição entre língua correta e língua incorreta."
        ],
        "correta":0,
        "feedbackAcerto":"Falantes competentes ajustam suas escolhas linguísticas a diferentes contextos e interlocutores.",
        "feedbackErro":"Variar o registro de modo apropriado é sinal de competência comunicativa, não de incoerência.",
        "analiseAlternativas":[
            "Correta. A mudança responde ao contexto e aos destinatários.",
            "Incorreta. Alternância adequada é competência comunicativa.",
            "Incorreta. O registro informal pode ser adequado ao grupo de amigos.",
            "Incorreta. Ambas estão em português.",
            "Incorreta. A distinção é de adequação, não de valor absoluto."
        ],
        "dicaBanca":"A banca valoriza a noção de repertório e escolha situacional.",
        "pegadinha":"Usar registros diferentes não é contradição; pode ser precisão comunicativa.",
        "memorizar2026":"Competência comunicativa inclui saber variar o registro.",
        "fonte":"Edital SEDUC-PA 2026; FGV — adequação à situação comunicativa."
    },
    {
        "id":"SEDUC-LP-REG-012",
        "numero":12,
        "subtopico":"Retextualização informal → formal",
        "dificuldade":"alta",
        "pergunta":"A frase informal ‘A gente vai ver isso depois e te manda um retorno’ será usada em comunicado institucional. A reescrita mais adequada é:",
        "alternativas":[
            "A gente vai olhar isso aí depois e te responde.",
            "Analisaremos a questão posteriormente e encaminharemos uma resposta.",
            "Nós vai analisar a situação e depois passa a resposta.",
            "Isso será visto pela gente aí depois, beleza?",
            "Vamo analisar e retornamos quando der."
        ],
        "correta":1,
        "feedbackAcerto":"A retextualização preserva o conteúdo e ajusta vocabulário, pessoa e grau de formalidade.",
        "feedbackErro":"A passagem ao formal não exige linguagem artificial, mas deve retirar marcas excessivamente conversacionais e vaguidão.",
        "analiseAlternativas":[
            "Incorreta. Mantém coloquialidade.",
            "Correta. Preserva o sentido com registro institucional claro.",
            "Incorreta. Há problemas de concordância e registro.",
            "Incorreta. ‘aí’ e ‘beleza’ são inadequados ao contexto.",
            "Incorreta. Mantém oralidade e imprecisão."
        ],
        "dicaBanca":"Em reescrita de registro, verifique se o sentido foi mantido.",
        "pegadinha":"Formalizar não é encher a frase de palavras difíceis.",
        "memorizar2026":"Retextualizar = adaptar forma e registro sem distorcer o conteúdo essencial.",
        "fonte":"Edital SEDUC-PA 2026; padrão FGV de reescrita e adequação."
    },
    {
        "id":"SEDUC-LP-REG-013",
        "numero":13,
        "subtopico":"‘A gente’ e adequação",
        "dificuldade":"alta",
        "pergunta":"Sobre o emprego de ‘a gente’ em lugar de ‘nós’, assinale a afirmativa mais adequada.",
        "alternativas":[
            "É sempre erro gramatical e não integra o português brasileiro.",
            "Só ocorre em fala de pessoas sem escolarização.",
            "É forma comum no português brasileiro, sobretudo em registros menos formais, e sua adequação depende do contexto.",
            "É obrigatória em documentos oficiais porque aproxima o emissor do leitor.",
            "Tem exatamente o mesmo grau de formalidade de ‘nós’ em todos os gêneros."
        ],
        "correta":2,
        "feedbackAcerto":"‘A gente’ é amplamente usado no português brasileiro; a escolha em relação a ‘nós’ envolve também grau de formalidade e gênero.",
        "feedbackErro":"A questão pede avaliação sociolinguística e pragmática, não condenação absoluta.",
        "analiseAlternativas":[
            "Incorreta. A forma é corrente no português brasileiro.",
            "Incorreta. É usada por falantes de diferentes níveis de escolaridade.",
            "Correta. Reconhece uso real e adequação contextual.",
            "Incorreta. Documentos oficiais tendem a preferir formas mais monitoradas.",
            "Incorreta. O grau de formalidade pode diferir."
        ],
        "dicaBanca":"A FGV explora variação sem reduzir tudo a certo/errado.",
        "pegadinha":"Frequência de uso não significa adequação universal.",
        "memorizar2026":"‘A gente’ é legítimo no uso; a escolha depende do registro.",
        "fonte":"Edital SEDUC-PA 2026; princípios de variação e adequação presentes em provas FGV de professores."
    },
    {
        "id":"SEDUC-LP-REG-014",
        "numero":14,
        "subtopico":"Variação regional",
        "dificuldade":"media",
        "pergunta":"Palavras ou pronúncias diferentes para o mesmo referente em regiões distintas do país exemplificam principalmente variação",
        "alternativas":[
            "histórica.",
            "estilística apenas.",
            "técnica.",
            "regional ou diatópica.",
            "individual sem relação social."
        ],
        "correta":3,
        "feedbackAcerto":"A variação diatópica relaciona diferenças linguísticas ao espaço geográfico.",
        "feedbackErro":"Associe ‘topos’ a lugar: diatópica = geográfica/regional.",
        "analiseAlternativas":[
            "Incorreta. Histórica se relaciona ao tempo.",
            "Incorreta. O critério aqui é geográfico.",
            "Incorreta. Não se trata de terminologia especializada.",
            "Correta. É variação regional/diatópica.",
            "Incorreta. Há padrão coletivo relacionado a região."
        ],
        "dicaBanca":"A banca pode usar exemplos concretos em vez de nomear a categoria.",
        "pegadinha":"Regionalismo não é automaticamente informal.",
        "memorizar2026":"Diatópica = região; diastrática = grupo social; diafásica = situação/estilo; diacrônica = tempo.",
        "fonte":"Edital SEDUC-PA 2026; conteúdo de variação linguística associado a registros."
    },
    {
        "id":"SEDUC-LP-REG-015",
        "numero":15,
        "subtopico":"Variação situacional",
        "dificuldade":"media",
        "pergunta":"Um advogado conversa de forma descontraída com um amigo no almoço e, horas depois, emprega linguagem técnica e formal em uma petição. A mudança exemplifica principalmente",
        "alternativas":[
            "variação histórica, porque ocorre em momentos diferentes do dia.",
            "variação regional, porque o falante muda de ambiente físico.",
            "incorreção linguística em uma das situações.",
            "variação exclusivamente etária.",
            "variação situacional/estilística, determinada pelo contexto comunicativo."
        ],
        "correta":4,
        "feedbackAcerto":"O mesmo falante ajusta seu repertório às demandas de contextos diferentes.",
        "feedbackErro":"Mudança de situação comunicativa não é variação histórica; trata-se de adequação estilística/contextual.",
        "analiseAlternativas":[
            "Incorreta. Variação histórica ocorre ao longo do tempo social da língua.",
            "Incorreta. O fator relevante não é simplesmente o espaço geográfico.",
            "Incorreta. Ambas podem ser adequadas.",
            "Incorreta. Idade não explica a alternância descrita.",
            "Correta. É variação situacional/diafásica."
        ],
        "dicaBanca":"Observe se é o mesmo falante adaptando-se à situação.",
        "pegadinha":"Mudança de contexto não é necessariamente mudança de variedade regional.",
        "memorizar2026":"Diafásica = adequação ao contexto/situação.",
        "fonte":"Edital SEDUC-PA 2026; abordagem FGV de adequação comunicativa."
    },
    {
        "id":"SEDUC-LP-REG-016",
        "numero":16,
        "subtopico":"Preconceito linguístico",
        "dificuldade":"alta",
        "pergunta":"Em sala, um estudante comenta que determinada fala regional é ‘português errado de gente que não sabe falar’. A intervenção docente mais adequada é",
        "alternativas":[
            "explicar que variedades linguísticas possuem regras e valor comunicativo, distinguindo diversidade de inadequação à norma-padrão em contextos que a exigem.",
            "confirmar que apenas a variedade-padrão constitui língua portuguesa legítima.",
            "proibir qualquer discussão sobre variedades para evitar conflitos.",
            "afirmar que toda forma linguística é adequada a qualquer situação, sem exceção.",
            "eliminar do ensino qualquer referência à norma-padrão."
        ],
        "correta":0,
        "feedbackAcerto":"A resposta combate o preconceito sem negar a necessidade de ensinar adequação e norma-padrão em contextos específicos.",
        "feedbackErro":"Educação linguística não exige escolher entre respeito à variação e ensino da norma-padrão; ambos podem coexistir.",
        "analiseAlternativas":[
            "Correta. Reconhece diversidade e adequação contextual.",
            "Incorreta. Reduz a língua a uma única variedade.",
            "Incorreta. Evita uma discussão pedagógica necessária.",
            "Incorreta. Adequação varia conforme a situação.",
            "Incorreta. A norma-padrão continua relevante em muitos gêneros."
        ],
        "dicaBanca":"Em prova de professor, a FGV tende a privilegiar uma postura pedagógica de adequação, não de condenação automática.",
        "pegadinha":"Respeitar a variação não significa afirmar que todo registro serve para toda situação.",
        "memorizar2026":"Sem preconceito + com adequação = abordagem pedagógica equilibrada.",
        "fonte":"Edital SEDUC-PA 2026; FGV — SMESP, questão sobre linguagem coloquial e adequação; edital também prevê explicação de preconceito linguístico no bloco específico de Português."
    },
    {
        "id":"SEDUC-LP-REG-017",
        "numero":17,
        "subtopico":"Linguagem de anúncio",
        "dificuldade":"alta",
        "pergunta":"Um anúncio diz: ‘Tem coisa que nem seu melhor amigo faz pra você.’ A escolha de ‘tem’, ‘pra’ e ‘você’ pode ser interpretada como",
        "alternativas":[
            "falha involuntária que impede a publicidade de cumprir sua função.",
            "interferência planejada de um registro mais próximo da fala, capaz de aproximar o anunciante do público.",
            "uso de registro erudito para conferir autoridade ao produto.",
            "prova de que anúncios não seguem qualquer estratégia linguística.",
            "jargão técnico exclusivo da publicidade."
        ],
        "correta":1,
        "feedbackAcerto":"A informalidade pode ser estratégia persuasiva de proximidade social em publicidade.",
        "feedbackErro":"Observe o efeito pretendido: a escolha coloquial pode ser deliberada e funcional.",
        "analiseAlternativas":[
            "Incorreta. A escolha pode ser intencional.",
            "Correta. A FGV já explorou exatamente esse efeito em anúncio.",
            "Incorreta. O registro não é erudito.",
            "Incorreta. Há estratégia de aproximação.",
            "Incorreta. São formas coloquiais, não jargão técnico."
        ],
        "dicaBanca":"Em textos publicitários, informalidade pode ser recurso de aproximação e persuasão.",
        "pegadinha":"Registro informal não é sinônimo de falta de planejamento.",
        "memorizar2026":"Publicidade pode usar oralidade estrategicamente para criar proximidade.",
        "fonte":"Edital SEDUC-PA 2026; FGV — questão oficial sobre anúncio e interferência da língua falada para aproximação social."
    },
    {
        "id":"SEDUC-LP-REG-018",
        "numero":18,
        "subtopico":"Registro e efeito de humor",
        "dificuldade":"alta",
        "pergunta":"Em uma tirinha, uma personagem usa fala fortemente regional, enquanto outra responde em registro corrente. O contraste de registros pode",
        "alternativas":[
            "ser sempre eliminado, porque variedades diferentes impedem humor.",
            "provar que uma personagem possui maior inteligência que a outra.",
            "funcionar como recurso de caracterização das personagens e contribuir para o efeito humorístico.",
            "ser irrelevante para a construção de sentido em textos multimodais.",
            "indicar obrigatoriamente uma diferença de nacionalidade."
        ],
        "correta":2,
        "feedbackAcerto":"A variação pode integrar a construção estilística, social e humorística do texto.",
        "feedbackErro":"Em tirinhas, as escolhas linguísticas ajudam a construir identidade, relações e humor.",
        "analiseAlternativas":[
            "Incorreta. O contraste pode produzir humor.",
            "Incorreta. Registro não mede inteligência.",
            "Correta. É efeito textual possível e frequente.",
            "Incorreta. Linguagem verbal integra a multimodalidade.",
            "Incorreta. Variação regional não implica país diferente."
        ],
        "dicaBanca":"A FGV já relacionou variação linguística e efeito humorístico em quadrinhos.",
        "pegadinha":"Variedade linguística também produz efeitos literários e humorísticos.",
        "memorizar2026":"Registro participa da caracterização e do efeito de sentido.",
        "fonte":"Edital SEDUC-PA 2026; FGV — questões oficiais sobre variação linguística em quadrinhos."
    },
    {
        "id":"SEDUC-LP-REG-019",
        "numero":19,
        "subtopico":"Formalidade e pronomes",
        "dificuldade":"media",
        "pergunta":"Sobre o pronome ‘você’, assinale a afirmativa mais adequada em termos de registro.",
        "alternativas":[
            "É sempre informal e nunca aparece em comunicação institucional.",
            "É necessariamente familiar, independentemente do gênero.",
            "Só pode ser usado na oralidade.",
            "Seu grau de formalidade depende do gênero, da relação entre interlocutores e das convenções da situação.",
            "É forma erudita exclusiva de textos literários."
        ],
        "correta":3,
        "feedbackAcerto":"‘Você’ circula em diferentes gêneros e níveis de formalidade; o contexto define seu valor pragmático.",
        "feedbackErro":"Evite classificações absolutas: muitas formas linguísticas mudam de valor conforme a situação.",
        "analiseAlternativas":[
            "Incorreta. Pode ocorrer em comunicação institucional dirigida ao público.",
            "Incorreta. Não é sempre familiar.",
            "Incorreta. É amplamente usado na escrita.",
            "Correta. O valor depende do contexto e das convenções do gênero.",
            "Incorreta. Não é forma exclusiva nem erudita."
        ],
        "dicaBanca":"A FGV costuma avaliar o efeito da escolha linguística no contexto, não rótulos fixos.",
        "pegadinha":"Uma mesma palavra pode circular em registros distintos.",
        "memorizar2026":"Registro é propriedade do uso contextual, não etiqueta imutável de cada palavra.",
        "fonte":"Edital SEDUC-PA 2026; abordagem contextual de registros recorrente na FGV."
    },
    {
        "id":"SEDUC-LP-REG-020",
        "numero":20,
        "subtopico":"Registro digital",
        "dificuldade":"media",
        "pergunta":"Em uma conversa privada por aplicativo, um professor escreve a um colega: ‘blz, te mando o arquivo + tarde’. Sobre esse uso, é correto afirmar que",
        "alternativas":[
            "abreviações digitais são sempre inadequadas porque não pertencem ao português.",
            "o gênero digital privado exige a mesma elaboração de um ofício administrativo.",
            "a mensagem é necessariamente incompreensível por empregar abreviações.",
            "abreviações são aceitáveis apenas se constarem de dicionário normativo.",
            "as abreviações podem ser adequadas em interação privada informal, mas não devem ser transferidas automaticamente para gêneros oficiais."
        ],
        "correta":4,
        "feedbackAcerto":"A adequação depende do gênero e do destinatário; práticas digitais informais não devem ser julgadas fora de contexto.",
        "feedbackErro":"Não generalize convenções de um gênero para todos os demais.",
        "analiseAlternativas":[
            "Incorreta. Abreviações são práticas reais de escrita digital.",
            "Incorreta. Gêneros têm graus de monitoramento diferentes.",
            "Incorreta. A mensagem pode ser compreendida pelos interlocutores.",
            "Incorreta. Dicionário não é condição para uso comunicativo.",
            "Correta. Reconhece adequação contextual e limites de transferência."
        ],
        "dicaBanca":"Em registros digitais, considere relação entre interlocutores e gênero.",
        "pegadinha":"Escrita digital não é automaticamente registro formal.",
        "memorizar2026":"Meio digital admite múltiplos registros: e-mail oficial ≠ chat privado.",
        "fonte":"Edital SEDUC-PA 2026; princípios de adequação e práticas de linguagem em canais digitais."
    },
    {
        "id":"SEDUC-LP-REG-021",
        "numero":21,
        "subtopico":"Correção x adequação",
        "dificuldade":"alta",
        "pergunta":"Considere a frase gramaticalmente correta: ‘Solicito-vos obséquio de remeterdes, com a máxima brevidade, a documentação supramencionada.’ Enviada por mensagem instantânea a um amigo próximo, ela pode ser considerada",
        "alternativas":[
            "gramaticalmente possível, mas inadequadamente solene para a situação de intimidade.",
            "obrigatoriamente informal, porque foi enviada por aplicativo.",
            "incorreta apenas por empregar segunda pessoa.",
            "perfeitamente adequada, porque toda frase correta é adequada a qualquer contexto.",
            "popular, porque pede um favor."
        ],
        "correta":0,
        "feedbackAcerto":"Correção gramatical e adequação comunicativa são dimensões diferentes.",
        "feedbackErro":"Uma frase pode estar correta e, ainda assim, ser inadequada ao contexto por excesso de solenidade.",
        "analiseAlternativas":[
            "Correta. O problema é pragmático/estilístico, não necessariamente gramatical.",
            "Incorreta. O meio não determina sozinho o registro.",
            "Incorreta. A segunda pessoa não é o problema central.",
            "Incorreta. Correção não garante adequação universal.",
            "Incorreta. Pedido não define registro popular."
        ],
        "dicaBanca":"A FGV já formulou a ideia de ‘boa expressão’ como adequação à situação.",
        "pegadinha":"Correto ≠ adequado em qualquer contexto.",
        "memorizar2026":"Adequação comunicativa vai além da gramática.",
        "fonte":"Edital SEDUC-PA 2026; FGV — item sobre boa expressão como linguagem adequada à situação."
    },
    {
        "id":"SEDUC-LP-REG-022",
        "numero":22,
        "subtopico":"Formalidade excessiva",
        "dificuldade":"alta",
        "pergunta":"Em uma atividade destinada a crianças de 7 anos, o comando diz: ‘Procedei à circunscrição gráfica do vocábulo correspondente à representação imagética’. O principal problema é",
        "alternativas":[
            "a inexistência de verbos no enunciado.",
            "a inadequação do registro ao público, por excesso de elaboração lexical.",
            "a presença de linguagem popular.",
            "o uso de gíria infantil.",
            "a falta de concordância nominal."
        ],
        "correta":1,
        "feedbackAcerto":"O vocabulário altamente erudito dificulta a comunicação com o público-alvo e viola a adequação didática.",
        "feedbackErro":"Mesmo uma construção formalmente correta pode ser ruim se não considerar quem vai lê-la.",
        "analiseAlternativas":[
            "Incorreta. Há forma verbal (‘Procedei’).",
            "Correta. O registro é excessivamente erudito para o público infantil.",
            "Incorreta. O problema é o oposto.",
            "Incorreta. Não há gíria.",
            "Incorreta. Não é o ponto central."
        ],
        "dicaBanca":"Em prova docente, considere a adequação da linguagem ao nível de ensino e à finalidade da atividade.",
        "pegadinha":"Mais formal não significa mais eficiente.",
        "memorizar2026":"A linguagem pedagógica deve ser clara e adequada ao estudante.",
        "fonte":"Edital SEDUC-PA 2026; princípio FGV de adequação comunicativa aplicado ao contexto educacional."
    },
    {
        "id":"SEDUC-LP-REG-023",
        "numero":23,
        "subtopico":"Variação histórica",
        "dificuldade":"media",
        "pergunta":"Em um romance do século XIX aparecem formas hoje pouco usadas no cotidiano, mas naturais ao período em que a obra foi escrita. Esse fenômeno exemplifica principalmente",
        "alternativas":[
            "variação regional exclusivamente.",
            "jargão profissional.",
            "variação histórica ou diacrônica.",
            "registro familiar contemporâneo.",
            "erro introduzido obrigatoriamente pelo autor."
        ],
        "correta":2,
        "feedbackAcerto":"A língua muda ao longo do tempo; usos antigos podem ser adequados ao período histórico da obra.",
        "feedbackErro":"Quando o fator de mudança é o tempo histórico, trata-se de variação diacrônica.",
        "analiseAlternativas":[
            "Incorreta. A variável principal é temporal.",
            "Incorreta. Não se trata de vocabulário de profissão.",
            "Correta. É variação histórica/diacrônica.",
            "Incorreta. A referência é a outro período histórico.",
            "Incorreta. Forma antiga não é necessariamente erro."
        ],
        "dicaBanca":"FGV pode apresentar um texto antigo e pedir o valor histórico de determinada forma.",
        "pegadinha":"Arcaísmo contextualizado não é erro automático.",
        "memorizar2026":"Diacrônica = mudança da língua ao longo do tempo.",
        "fonte":"Edital SEDUC-PA 2026; conteúdo de variação linguística associado a registros."
    },
    {
        "id":"SEDUC-LP-REG-024",
        "numero":24,
        "subtopico":"Marcas de formalidade",
        "dificuldade":"alta",
        "pergunta":"Qual alteração tende a elevar o grau de formalidade de ‘A gente vai mandar os documentos depois’ sem modificar essencialmente a informação?",
        "alternativas":[
            "A gente manda os documento depois.",
            "A gente vai mandar isso aí mais tarde.",
            "Nós manda os papéis depois.",
            "Encaminharemos os documentos posteriormente.",
            "Vamo mandar os docs depois."
        ],
        "correta":3,
        "feedbackAcerto":"A substituição reduz marcas conversacionais e escolhe vocabulário mais monitorado, mantendo o conteúdo básico.",
        "feedbackErro":"Observe simultaneamente pessoa, concordância, escolha lexical e marcas de oralidade.",
        "analiseAlternativas":[
            "Incorreta. Acrescenta desvio de concordância.",
            "Incorreta. Mantém marcas informais.",
            "Incorreta. Há desvio de concordância verbal.",
            "Correta. É forma mais formal e preserva o núcleo informacional.",
            "Incorreta. Aumenta a informalidade."
        ],
        "dicaBanca":"Reescrita de registro exige preservar o sentido e alterar o grau de monitoramento.",
        "pegadinha":"Não basta trocar uma palavra; avalie a frase toda.",
        "memorizar2026":"Formalização: clareza + precisão + menos marcas de oralidade, sem rebuscamento desnecessário.",
        "fonte":"Edital SEDUC-PA 2026; padrão FGV de reescrita e adequação."
    },
    {
        "id":"SEDUC-LP-REG-025",
        "numero":25,
        "subtopico":"Caso integrador — registros",
        "dificuldade":"alta",
        "pergunta":"Uma escola publica três textos sobre a mesma reunião: (I) um aviso oficial às famílias; (II) uma postagem descontraída nas redes sociais; (III) uma mensagem privada entre professores. A melhor análise é:",
        "alternativas":[
            "Os três textos devem usar exatamente o mesmo registro, pois tratam do mesmo assunto.",
            "A postagem em rede social deve necessariamente empregar gíria para ser adequada.",
            "A mensagem privada entre professores precisa ser erudita por tratar de trabalho.",
            "O aviso oficial é o único gênero em que a língua portuguesa pode ser considerada correta.",
            "Os três podem apresentar registros distintos, desde que cada escolha seja adequada ao gênero, aos interlocutores e à finalidade."
        ],
        "correta":4,
        "feedbackAcerto":"O mesmo tema pode ser formulado de modos diferentes porque gênero, destinatário e finalidade orientam as escolhas linguísticas.",
        "feedbackErro":"Registro não é determinado apenas pelo assunto; considere a situação comunicativa completa.",
        "analiseAlternativas":[
            "Incorreta. Gêneros e públicos diferentes permitem registros diferentes.",
            "Incorreta. Rede social não exige gíria.",
            "Incorreta. Contexto profissional não implica erudição.",
            "Incorreta. Correção e legitimidade não pertencem a um único gênero.",
            "Correta. Resume o princípio central de adequação."
        ],
        "dicaBanca":"Questões integradoras da FGV costumam pedir a alternativa que articula gênero, contexto, interlocutor e efeito.",
        "pegadinha":"Mesmo tema ≠ mesmo registro.",
        "memorizar2026":"Registro é escolha contextual: quem fala + para quem + onde + para quê + por qual meio.",
        "fonte":"Edital SEDUC-PA 2026; FGV — provas de professores sobre variedades linguísticas, adequação e linguagem coloquial."
    }
    ];

    window.seducLinguaPortuguesaRegistrosLinguagem2026 = banco;
})();
