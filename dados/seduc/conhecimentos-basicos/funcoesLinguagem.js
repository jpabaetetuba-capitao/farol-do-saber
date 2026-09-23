/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 14: Funções da Linguagem
   25 questões autorais calibradas pelo edital e pelo padrão FGV.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-LP-FUN-001",
        "numero": 1,
        "subtopico": "Função referencial",
        "dificuldade": "media",
        "pergunta": "Em um comunicado da escola lê-se: ‘As inscrições para a oficina estarão abertas de 5 a 9 de outubro, das 8h às 17h, na secretaria’. Nesse trecho, predomina a função da linguagem denominada",
        "alternativas": [
            "referencial, pois o foco está na transmissão objetiva de informações sobre um fato ou procedimento.",
            "emotiva, pois o enunciador expõe seus sentimentos sobre a oficina.",
            "conativa, pois o texto procura ordenar diretamente uma conduta do leitor.",
            "fática, pois a mensagem serve principalmente para testar o funcionamento do canal.",
            "poética, pois a organização sonora e figurativa da mensagem é o elemento central."
        ],
        "correta": 0,
        "feedbackAcerto": "A mensagem privilegia dados objetivos de tempo, local e procedimento; por isso, a função referencial é predominante.",
        "feedbackErro": "Pergunte qual elemento domina o texto. Aqui, datas, horário e local são o núcleo da mensagem, sem destaque para emoção, contato ou elaboração estética.",
        "analiseAlternativas": [
            "Correta. O referente/contexto e as informações objetivas ocupam o primeiro plano.",
            "Incorreta. Não há expressão subjetiva de sentimentos.",
            "Incorreta. O texto informa; não formula ordem ou apelo como núcleo.",
            "Incorreta. O canal não é o centro da mensagem.",
            "Incorreta. Não há valorização predominante da forma da mensagem."
        ],
        "dicaBanca": "A FGV costuma apresentar frases curtas e pedir a função predominante, não a única função possível.",
        "pegadinha": "Informar sobre uma ação futura não transforma automaticamente o texto em conativo.",
        "memorizar2026": "Referencial = foco predominante no referente/contexto e na informação.",
        "fonte": "Edital SEDUC-PA 2026; tipologia funcional da linguagem recorrente em provas FGV."
    },
    {
        "id": "SEDUC-LP-FUN-002",
        "numero": 2,
        "subtopico": "Função emotiva",
        "dificuldade": "media",
        "pergunta": "Após receber o resultado de um projeto, uma professora escreve em seu diário: ‘Estou profundamente feliz com o avanço da turma; hoje senti que todo o esforço valeu a pena’. A função predominante é",
        "alternativas": [
            "referencial, porque o texto menciona um resultado escolar.",
            "emotiva ou expressiva, porque a mensagem evidencia sentimentos e avaliações do enunciador.",
            "metalinguística, porque o texto explica o significado de palavras usadas no diário.",
            "fática, porque a finalidade principal é manter aberto um canal de comunicação.",
            "conativa, porque a professora tenta convencer a turma a estudar."
        ],
        "correta": 1,
        "feedbackAcerto": "Primeira pessoa, sentimentos e avaliação subjetiva colocam o emissor em destaque, caracterizando função emotiva/expressiva.",
        "feedbackErro": "O fato escolar é apenas o contexto; o centro do trecho é a reação subjetiva de quem enuncia.",
        "analiseAlternativas": [
            "Incorreta. Há referência a um fato, mas o foco está na experiência subjetiva.",
            "Correta. O emissor e suas emoções dominam o enunciado.",
            "Incorreta. O código linguístico não é explicado.",
            "Incorreta. Não há teste ou manutenção do contato.",
            "Incorreta. Não há apelo dirigido à turma."
        ],
        "dicaBanca": "Marcas de primeira pessoa, interjeições, avaliações e estados afetivos favorecem a leitura emotiva.",
        "pegadinha": "Texto que relata um fato pode ser emotivo se a avaliação do emissor dominar.",
        "memorizar2026": "Emotiva/expressiva = foco no emissor e em sua atitude subjetiva.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de identificação de função predominante em frases contextualizadas."
    },
    {
        "id": "SEDUC-LP-FUN-003",
        "numero": 3,
        "subtopico": "Função conativa",
        "dificuldade": "media",
        "pergunta": "Em um cartaz de campanha escolar aparece: ‘Participe da coleta seletiva. Separe seus resíduos e ajude a transformar a escola’. A função predominante é",
        "alternativas": [
            "fática, porque a mensagem confirma que o cartaz está visível.",
            "poética, porque toda campanha utiliza linguagem figurada.",
            "conativa ou apelativa, porque o texto procura orientar e influenciar a ação do destinatário.",
            "metalinguística, porque os verbos no imperativo explicam o próprio código.",
            "emotiva, porque a escola revela um sentimento pessoal."
        ],
        "correta": 2,
        "feedbackAcerto": "Imperativos e apelo direto ao leitor colocam o destinatário no centro da mensagem; a função conativa é predominante.",
        "feedbackErro": "Observe para quem a mensagem está voltada e o efeito pretendido: levar o leitor a agir.",
        "analiseAlternativas": [
            "Incorreta. Não se testa o canal.",
            "Incorreta. Pode haver elaboração verbal, mas não é o foco principal.",
            "Correta. Há orientação direta da conduta do receptor.",
            "Incorreta. Não há explicação do código linguístico.",
            "Incorreta. Não predomina expressão subjetiva do emissor."
        ],
        "dicaBanca": "A FGV já cobrou função conativa em frases que incentivam o destinatário a agir.",
        "pegadinha": "Nem todo texto persuasivo é publicitário; a função conativa aparece em ordens, conselhos, convites e campanhas.",
        "memorizar2026": "Conativa/apelativa = foco no receptor; imperativo e vocativo são pistas frequentes.",
        "fonte": "Edital SEDUC-PA 2026; FGV — provas objetivas com identificação de função conativa."
    },
    {
        "id": "SEDUC-LP-FUN-004",
        "numero": 4,
        "subtopico": "Função fática",
        "dificuldade": "media",
        "pergunta": "Durante uma aula on-line, o professor interrompe a explicação e pergunta: ‘Vocês estão me ouvindo bem? Alô, pessoal, o áudio está chegando?’. Nesse momento, predomina a função",
        "alternativas": [
            "poética, porque a repetição cria ritmo.",
            "referencial, porque o professor informa o conteúdo da aula.",
            "emotiva, porque o professor manifesta insegurança.",
            "fática, pois o enunciado verifica e mantém o funcionamento do canal de comunicação.",
            "metalinguística, pois o professor analisa a estrutura da língua."
        ],
        "correta": 3,
        "feedbackAcerto": "O objetivo é testar o canal e assegurar a continuidade do contato, núcleo da função fática.",
        "feedbackErro": "A pergunta não busca conteúdo novo sobre o tema da aula; ela verifica se a comunicação está funcionando.",
        "analiseAlternativas": [
            "Incorreta. A forma sonora não é o foco.",
            "Incorreta. O conteúdo da aula foi momentaneamente suspenso.",
            "Incorreta. Pode haver preocupação, mas não é a função central.",
            "Correta. O canal e a manutenção do contato estão em primeiro plano.",
            "Incorreta. O código linguístico não é objeto da mensagem."
        ],
        "dicaBanca": "‘Alô’, ‘está me ouvindo?’, ‘certo?’, saudações e fórmulas de contato podem assumir função fática conforme o contexto.",
        "pegadinha": "Uma pergunta nem sempre é referencial: pode apenas testar o canal.",
        "memorizar2026": "Fática = foco no canal e na abertura/manutenção/checagem do contato.",
        "fonte": "Edital SEDUC-PA 2026; classificação funcional da linguagem."
    },
    {
        "id": "SEDUC-LP-FUN-005",
        "numero": 5,
        "subtopico": "Função metalinguística",
        "dificuldade": "media",
        "pergunta": "Em uma atividade de língua portuguesa, lê-se: ‘Parônimo é o vocábulo que apresenta forma ou som semelhante ao de outro, mas significado diferente’. A função predominante é",
        "alternativas": [
            "referencial, exclusivamente, porque toda definição apenas informa fatos externos à língua.",
            "poética, porque a definição valoriza a sonoridade das palavras.",
            "fática, porque a frase estabelece contato com o leitor.",
            "conativa, porque o leitor é levado a mudar de comportamento.",
            "metalinguística, porque a língua é utilizada para explicar um elemento do próprio código linguístico."
        ],
        "correta": 4,
        "feedbackAcerto": "Quando a linguagem fala da própria linguagem — palavra, significado, classe, construção — predomina a função metalinguística.",
        "feedbackErro": "O referente da frase pertence ao próprio código linguístico: ela define um termo da língua.",
        "analiseAlternativas": [
            "Incorreta. Embora haja informação, o objeto explicado é o próprio código.",
            "Incorreta. A semelhança sonora é conteúdo da definição, não exploração estética da forma.",
            "Incorreta. O canal não é testado.",
            "Incorreta. Não se busca orientar uma ação.",
            "Correta. Código explicando código é a marca central da metalinguagem."
        ],
        "dicaBanca": "A FGV já cobrou em prova de Professor de Português a identificação da função metalinguística.",
        "pegadinha": "Definições de termos linguísticos podem informar e, ao mesmo tempo, ser predominantemente metalinguísticas.",
        "memorizar2026": "Metalinguística = foco no código; linguagem usada para explicar a própria linguagem.",
        "fonte": "Edital SEDUC-PA 2026; FGV — Professor Educação Básica II/Português (Paulínia), questão sobre função metalinguística."
    },
    {
        "id": "SEDUC-LP-FUN-006",
        "numero": 6,
        "subtopico": "Função poética",
        "dificuldade": "alta",
        "pergunta": "Um projeto de leitura adota o slogan: ‘Livro aberto, mundo desperto’. Considerando a concisão, o paralelismo e a sonoridade da formulação, é correto afirmar que",
        "alternativas": [
            "a função poética ganha destaque porque a própria forma da mensagem participa da produção do efeito de sentido.",
            "a função referencial é exclusiva, pois o slogan apenas comunica um dado objetivo.",
            "a função fática predomina necessariamente em todo slogan.",
            "a função metalinguística é dominante porque a palavra ‘livro’ pertence à linguagem.",
            "a função emotiva é obrigatória sempre que há rima ou ritmo."
        ],
        "correta": 0,
        "feedbackAcerto": "O paralelismo e a construção sonora fazem da forma da mensagem um elemento relevante, o que destaca a função poética.",
        "feedbackErro": "Função poética não significa necessariamente poesia em versos; significa atenção especial à construção da mensagem.",
        "analiseAlternativas": [
            "Correta. A forma verbal foi elaborada para produzir impacto e memorização.",
            "Incorreta. Não se trata de mera informação objetiva.",
            "Incorreta. Slogan costuma ter apelo, mas não é fático por definição.",
            "Incorreta. O texto não explica o código.",
            "Incorreta. Ritmo não implica foco no emissor."
        ],
        "dicaBanca": "A função poética pode aparecer em slogans, títulos, provérbios e textos não literários.",
        "pegadinha": "Poética ≠ poema; o critério é o foco na elaboração da mensagem.",
        "memorizar2026": "Poética = foco na mensagem, na seleção e combinação das palavras e nos efeitos de forma.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de análise de efeitos de linguagem."
    },
    {
        "id": "SEDUC-LP-FUN-007",
        "numero": 7,
        "subtopico": "Predominância de funções",
        "dificuldade": "alta",
        "pergunta": "Em um anúncio lê-se: ‘Sua leitura pode ir mais longe. Assine agora e descubra novos mundos’. Embora haja elaboração expressiva, a função predominante é",
        "alternativas": [
            "emotiva, pois o anunciante confessa sua experiência pessoal.",
            "conativa, pois o texto procura induzir o destinatário a realizar uma ação.",
            "fática, pois a mensagem serve apenas para manter contato.",
            "metalinguística, pois o anúncio explica como funciona a publicidade.",
            "referencial, pois a informação objetiva é o único componente relevante."
        ],
        "correta": 1,
        "feedbackAcerto": "A elaboração verbal pode contribuir para o anúncio, mas o objetivo predominante é levar o receptor a assinar.",
        "feedbackErro": "Em textos reais, funções se combinam. Identifique qual finalidade domina o conjunto.",
        "analiseAlternativas": [
            "Incorreta. Não há confissão do emissor.",
            "Correta. O receptor é convocado diretamente a agir.",
            "Incorreta. Não há simples manutenção de contato.",
            "Incorreta. O código publicitário não é explicado.",
            "Incorreta. O apelo supera a finalidade de informar."
        ],
        "dicaBanca": "A FGV valoriza a noção de predominância: uma mensagem pode mobilizar mais de uma função.",
        "pegadinha": "Presença de slogan não torna automaticamente a função poética predominante.",
        "memorizar2026": "Funções coexistem; classifique pela finalidade e pelo foco predominantes.",
        "fonte": "Edital SEDUC-PA 2026; FGV — abordagem funcional em publicidade e comunicação."
    },
    {
        "id": "SEDUC-LP-FUN-008",
        "numero": 8,
        "subtopico": "Referencial x emotiva",
        "dificuldade": "alta",
        "pergunta": "Compare: I. ‘A temperatura máxima prevista para Belém é de 33 °C.’ II. ‘Esse calor está insuportável; mal consigo me concentrar!’. As funções predominantes em I e II são, respectivamente,",
        "alternativas": [
            "poética e conativa.",
            "fática e metalinguística.",
            "referencial e emotiva.",
            "conativa e referencial.",
            "metalinguística e poética."
        ],
        "correta": 2,
        "feedbackAcerto": "I apresenta dado objetivo; II expressa avaliação e estado do emissor. Logo, referencial e emotiva.",
        "feedbackErro": "Observe a diferença entre descrição objetiva de um dado e reação subjetiva de quem fala.",
        "analiseAlternativas": [
            "Incorreta. Não há foco formal nem apelo direto.",
            "Incorreta. O canal e o código não são centrais.",
            "Correta. Informação objetiva em I; subjetividade em II.",
            "Incorreta. I não tenta orientar o receptor.",
            "Incorreta. Nenhum trecho explica o código ou explora a forma como núcleo."
        ],
        "dicaBanca": "A banca pode contrastar duas frases sobre o mesmo tema para testar mudança de foco funcional.",
        "pegadinha": "O tema é o mesmo; a função muda conforme o modo de enunciar.",
        "memorizar2026": "Referencial informa; emotiva avalia/sente a partir do emissor.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de contraste entre objetividade e expressividade."
    },
    {
        "id": "SEDUC-LP-FUN-009",
        "numero": 9,
        "subtopico": "Fática x referencial",
        "dificuldade": "alta",
        "pergunta": "Em uma ligação, a pessoa diz: ‘Certo... estou ouvindo. Pode continuar’. A função predominante dessas expressões é",
        "alternativas": [
            "conativa, pois determinam uma ação obrigatória ao interlocutor.",
            "poética, pois organizam ritmicamente o diálogo.",
            "referencial, pois comunicam informações novas sobre o tema.",
            "fática, pois sinalizam que o contato permanece estabelecido e que a interação pode prosseguir.",
            "emotiva, pois revelam uma emoção intensa."
        ],
        "correta": 3,
        "feedbackAcerto": "As expressões regulam a continuidade da interação e confirmam o canal, característica fática.",
        "feedbackErro": "O conteúdo novo é mínimo; o papel principal é mostrar ao interlocutor que a comunicação continua ativa.",
        "analiseAlternativas": [
            "Incorreta. ‘Pode continuar’ aqui funciona no gerenciamento do contato, não como ordem central de conduta.",
            "Incorreta. A forma estética não é relevante.",
            "Incorreta. Não há informação temática substantiva.",
            "Correta. O contato é confirmado e mantido.",
            "Incorreta. Não há expressão afetiva predominante."
        ],
        "dicaBanca": "No diálogo, marcadores como ‘certo’, ‘aham’, ‘entendi’, ‘pois não’ podem exercer função fática conforme o contexto.",
        "pegadinha": "Uma expressão pode ter forma imperativa e ainda desempenhar papel fático na interação.",
        "memorizar2026": "Fática administra o contato e o fluxo comunicativo.",
        "fonte": "Edital SEDUC-PA 2026; teoria das funções da linguagem aplicada à interação."
    },
    {
        "id": "SEDUC-LP-FUN-010",
        "numero": 10,
        "subtopico": "Metalinguagem em dicionário",
        "dificuldade": "media",
        "pergunta": "Em um verbete de dicionário, a entrada ‘coesão’ é seguida de definição, classe gramatical e exemplos de uso. Nesse caso, destaca-se a função",
        "alternativas": [
            "conativa, por orientar uma ordem ao leitor.",
            "emotiva, por registrar a opinião do dicionarista.",
            "fática, por verificar a atenção do consulente.",
            "poética, porque todo verbete trabalha cuidadosamente as palavras.",
            "metalinguística, pois um sistema de signos é empregado para explicar unidades e usos do próprio código."
        ],
        "correta": 4,
        "feedbackAcerto": "Dicionários são exemplos clássicos de metalinguagem: a língua descreve a própria língua.",
        "feedbackErro": "Embora o verbete também transmita informação, o objeto explicado pertence ao próprio código linguístico.",
        "analiseAlternativas": [
            "Incorreta. Não há apelo comportamental.",
            "Incorreta. O foco não é a subjetividade do autor.",
            "Incorreta. O canal não é testado.",
            "Incorreta. A precisão verbal não implica função poética predominante.",
            "Correta. O código é o objeto da própria mensagem."
        ],
        "dicaBanca": "A FGV costuma cobrar metalinguagem por definições e relações entre palavras, sem exigir texto longo.",
        "pegadinha": "Referencial e metalinguística podem coexistir; veja se o referente é o próprio código.",
        "memorizar2026": "Dicionário/gramática explicando língua = forte marca metalinguística.",
        "fonte": "Edital SEDUC-PA 2026; FGV — questões de função metalinguística."
    },
    {
        "id": "SEDUC-LP-FUN-011",
        "numero": 11,
        "subtopico": "Função poética em texto não literário",
        "dificuldade": "alta",
        "pergunta": "Uma campanha de biblioteca usa a frase ‘Quem lê, leva; quem relê, revela’. O recurso que mais favorece a função poética é",
        "alternativas": [
            "a organização paralela e o jogo sonoro e lexical entre ‘lê’, ‘relê’, ‘leva’ e ‘revela’.",
            "a existência de um destinatário, pois todo texto com receptor é poético.",
            "a presença de verbos, porque a função poética depende de ação.",
            "a ausência de informação objetiva, condição obrigatória para a função poética.",
            "o fato de a frase pertencer a uma campanha institucional."
        ],
        "correta": 0,
        "feedbackAcerto": "A seleção e combinação das palavras, o paralelismo e o jogo sonoro colocam a forma da mensagem em destaque.",
        "feedbackErro": "Busque os recursos que fazem a própria construção verbal produzir parte do efeito.",
        "analiseAlternativas": [
            "Correta. A forma linguística é decisiva para o impacto da frase.",
            "Incorreta. Todo ato comunicativo tem receptor, e isso não define função poética.",
            "Incorreta. Verbos não caracterizam função poética.",
            "Incorreta. Função poética pode coexistir com informação.",
            "Incorreta. O gênero/canal não determina sozinho a função."
        ],
        "dicaBanca": "Slogans são bons candidatos a combinar função conativa e poética; determine qual aspecto o enunciado da questão destaca.",
        "pegadinha": "Não confunda gênero publicitário com uma única função da linguagem.",
        "memorizar2026": "Poética = equivalências, paralelismos, ritmo, jogos sonoros/semânticos e escolhas formais relevantes.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de análise de forma e efeito de sentido."
    },
    {
        "id": "SEDUC-LP-FUN-012",
        "numero": 12,
        "subtopico": "Conativa em contexto escolar",
        "dificuldade": "media",
        "pergunta": "No início de uma prova, lê-se: ‘Leia atentamente cada questão e assinale apenas uma alternativa’. A função predominante é",
        "alternativas": [
            "emotiva, porque o elaborador revela preocupação.",
            "conativa, porque as instruções orientam diretamente o comportamento do candidato.",
            "referencial, porque a frase descreve um acontecimento já ocorrido.",
            "poética, porque a formulação é breve.",
            "metalinguística, porque a palavra ‘questão’ pertence ao código da prova."
        ],
        "correta": 1,
        "feedbackAcerto": "Instruções dirigidas ao destinatário, sobretudo com imperativo, são manifestação típica da função conativa/apelativa.",
        "feedbackErro": "O enunciado não descreve um fato; ele orienta o que o candidato deve fazer.",
        "analiseAlternativas": [
            "Incorreta. A preocupação do elaborador não é o foco.",
            "Correta. O destinatário e sua ação são centrais.",
            "Incorreta. Não se relata um evento.",
            "Incorreta. Brevidade não é critério de função poética.",
            "Incorreta. Não há explicação do código linguístico."
        ],
        "dicaBanca": "Manuais, instruções, regulamentos e campanhas podem trazer forte função conativa.",
        "pegadinha": "Texto normativo/injuntivo não é uma função da linguagem; é outra categoria de análise.",
        "memorizar2026": "Conativa = orientação/apelo ao receptor.",
        "fonte": "Edital SEDUC-PA 2026; FGV — padrão de reconhecimento de função apelativa."
    },
    {
        "id": "SEDUC-LP-FUN-013",
        "numero": 13,
        "subtopico": "Funções combinadas",
        "dificuldade": "alta",
        "pergunta": "Considere o aviso: ‘Prezadas famílias, informamos que a reunião será às 18h. Por favor, confirmem presença até sexta-feira’. As funções que se destacam nas duas frases, respectivamente, são",
        "alternativas": [
            "poética e fática.",
            "emotiva e metalinguística.",
            "referencial e conativa.",
            "fática e emotiva.",
            "metalinguística e referencial."
        ],
        "correta": 2,
        "feedbackAcerto": "A primeira frase comunica dado objetivo; a segunda solicita uma ação do destinatário.",
        "feedbackErro": "Analise cada segmento separadamente: informar horário não tem o mesmo foco que pedir confirmação.",
        "analiseAlternativas": [
            "Incorreta. Não há elaboração formal nem teste do canal como núcleos.",
            "Incorreta. Não há sentimento nem explicação do código.",
            "Correta. Informação objetiva seguida de apelo ao receptor.",
            "Incorreta. O contato e a subjetividade não são predominantes.",
            "Incorreta. Nenhuma frase explica a linguagem."
        ],
        "dicaBanca": "A FGV pode mudar a função predominante dentro do mesmo gênero ou texto.",
        "pegadinha": "Não classifique o documento inteiro automaticamente por uma única função.",
        "memorizar2026": "Cada segmento pode privilegiar um foco funcional diferente.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de análise segmentada da função textual."
    },
    {
        "id": "SEDUC-LP-FUN-014",
        "numero": 14,
        "subtopico": "Função emotiva e modalização",
        "dificuldade": "alta",
        "pergunta": "No comentário ‘Infelizmente, a biblioteca continuará fechada esta semana’, o advérbio ‘infelizmente’",
        "alternativas": [
            "elimina a função referencial, tornando impossível reconhecer qualquer informação objetiva.",
            "transforma a frase em metalinguística, pois comenta uma palavra do texto.",
            "serve apenas para manter o canal de comunicação.",
            "introduz uma avaliação do emissor, acrescentando componente emotivo a uma mensagem também informativa.",
            "indica necessariamente função conativa, pois influencia o receptor."
        ],
        "correta": 3,
        "feedbackAcerto": "‘Infelizmente’ marca atitude avaliativa do enunciador. A informação permanece, mas recebe tonalidade emotiva.",
        "feedbackErro": "Funções podem coexistir: a frase informa um fato e, ao mesmo tempo, manifesta uma avaliação.",
        "analiseAlternativas": [
            "Incorreta. A informação objetiva continua presente.",
            "Incorreta. O código não é explicado.",
            "Incorreta. O canal não é o foco.",
            "Correta. O modalizador evidencia a atitude do emissor.",
            "Incorreta. Não há pedido ou orientação ao destinatário."
        ],
        "dicaBanca": "Modalizadores e advérbios avaliativos ajudam a reconhecer a presença da função emotiva.",
        "pegadinha": "Predominância não significa exclusividade.",
        "memorizar2026": "Avaliação do emissor pode coexistir com informação referencial.",
        "fonte": "Edital SEDUC-PA 2026; FGV — análise de marcas de subjetividade e objetividade."
    },
    {
        "id": "SEDUC-LP-FUN-015",
        "numero": 15,
        "subtopico": "Função fática em saudações",
        "dificuldade": "media",
        "pergunta": "Em um atendimento telefônico, a sequência ‘Bom dia! Pois não? Estou ouvindo’ desempenha principalmente a função",
        "alternativas": [
            "poética, por valorizar a estética das palavras.",
            "emotiva, por relatar sentimentos pessoais.",
            "referencial, por apresentar dados sobre o atendimento.",
            "metalinguística, por explicar expressões de cortesia.",
            "fática, por iniciar e sustentar a interação entre os interlocutores."
        ],
        "correta": 4,
        "feedbackAcerto": "Saudação e marcas de acompanhamento ajudam a abrir e manter o contato entre os participantes.",
        "feedbackErro": "O objetivo principal dessas fórmulas é fazer a interação funcionar, e não transmitir informação temática relevante.",
        "analiseAlternativas": [
            "Incorreta. Não há exploração estética.",
            "Incorreta. Não se expressa estado afetivo central.",
            "Incorreta. O conteúdo informativo é mínimo.",
            "Incorreta. O código não é explicado.",
            "Correta. São fórmulas típicas de abertura/manutenção do canal."
        ],
        "dicaBanca": "Cortesia e função fática podem se sobrepor em fórmulas de abertura e continuidade do contato.",
        "pegadinha": "‘Bom dia’ pode ter conteúdo referencial literal, mas no uso social costuma funcionar principalmente como contato.",
        "memorizar2026": "Saudar, chamar, confirmar escuta e encerrar contato são usos fáticos frequentes.",
        "fonte": "Edital SEDUC-PA 2026; teoria funcional aplicada à interação."
    },
    {
        "id": "SEDUC-LP-FUN-016",
        "numero": 16,
        "subtopico": "Metalinguística x referencial",
        "dificuldade": "alta",
        "pergunta": "Assinale o enunciado em que predomina a função metalinguística.",
        "alternativas": [
            "‘Ironia não é o mesmo que mentira: na ironia, o sentido pretendido contrasta com a formulação literal.’",
            "‘A ironia do discurso deixou o público desconfortável.’",
            "‘Use a ironia com cuidado em textos formais.’",
            "‘Que ironia maravilhosa!’",
            "‘Alô, você entendeu a ironia?’"
        ],
        "correta": 0,
        "feedbackAcerto": "A alternativa define e explica um fenômeno da própria linguagem, portanto focaliza o código.",
        "feedbackErro": "Procure a frase em que a linguagem é objeto da própria linguagem, e não apenas tema de uma informação ou comentário.",
        "analiseAlternativas": [
            "Correta. Explica um conceito linguístico.",
            "Incorreta. Relata efeito de um fenômeno num contexto.",
            "Incorreta. Orienta comportamento do receptor.",
            "Incorreta. Expressa avaliação/emocionalidade.",
            "Incorreta. Há marca fática (‘Alô’) e pergunta ao interlocutor."
        ],
        "dicaBanca": "A FGV já usou contraste entre conceitos para identificar função metalinguística em prova docente.",
        "pegadinha": "A simples presença de uma palavra sobre linguagem não basta; veja se o enunciado explica o código.",
        "memorizar2026": "Metalinguagem: definir, explicar ou comentar signos e regras do próprio sistema.",
        "fonte": "Edital SEDUC-PA 2026; FGV — Professor Educação Básica II/Português, questão de função metalinguística."
    },
    {
        "id": "SEDUC-LP-FUN-017",
        "numero": 17,
        "subtopico": "Referencial em notícia",
        "dificuldade": "media",
        "pergunta": "Uma notícia escolar informa número de participantes, data do evento, resultados e fontes consultadas, sem comentários avaliativos do redator. O predomínio funcional tende a ser",
        "alternativas": [
            "fático, pois toda notícia precisa de um canal.",
            "referencial, porque o texto privilegia o referente e a transmissão de dados verificáveis.",
            "emotivo, porque os fatos afetam o leitor.",
            "poético, porque notícias possuem título.",
            "metalinguístico, porque a notícia emprega palavras."
        ],
        "correta": 1,
        "feedbackAcerto": "A centralidade de fatos, dados e fontes favorece a função referencial/denotativa.",
        "feedbackErro": "O fato de toda comunicação possuir canal, emissor e código não significa que essas funções sejam predominantes.",
        "analiseAlternativas": [
            "Incorreta. Existência de canal não caracteriza predomínio fático.",
            "Correta. Contexto/referente e informação objetiva dominam.",
            "Incorreta. Efeito no leitor não equivale à expressão do emissor.",
            "Incorreta. Título não torna a mensagem poética.",
            "Incorreta. Toda mensagem usa código; metalinguagem exige explicá-lo."
        ],
        "dicaBanca": "Dados, estatísticas, datas e descrição factual são fortes pistas da função referencial.",
        "pegadinha": "Elementos do ato comunicativo estão sempre presentes, mas não estão sempre em foco.",
        "memorizar2026": "Referencial/denotativa = objetividade informativa e foco no contexto.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV em textos informativos."
    },
    {
        "id": "SEDUC-LP-FUN-018",
        "numero": 18,
        "subtopico": "Poética e conativa em slogan",
        "dificuldade": "alta",
        "pergunta": "No slogan ‘Doe tempo. Multiplique futuros.’, pode-se afirmar corretamente que",
        "alternativas": [
            "somente a função referencial está presente, porque há dois verbos.",
            "a função fática é obrigatoriamente predominante porque o texto é curto.",
            "há combinação relevante de função conativa, pelo apelo ao receptor, e poética, pela construção sintética e paralela.",
            "a função metalinguística domina porque ‘multiplique’ é usado figuradamente.",
            "a função emotiva é exclusiva porque a campanha trata de solidariedade."
        ],
        "correta": 2,
        "feedbackAcerto": "Os imperativos convocam o receptor, enquanto a formulação paralela e figurada intensifica a elaboração da mensagem.",
        "feedbackErro": "Textos publicitários e campanhas costumam combinar funções; analise tanto a finalidade quanto a forma.",
        "analiseAlternativas": [
            "Incorreta. Verbos não determinam função referencial.",
            "Incorreta. Comprimento do texto não define função fática.",
            "Correta. Apelo + elaboração formal coexistem claramente.",
            "Incorreta. Uso figurado não é metalinguagem.",
            "Incorreta. O tema solidário não implica expressão do emissor."
        ],
        "dicaBanca": "A FGV pode perguntar combinação de funções, especialmente em slogans e publicidade.",
        "pegadinha": "Figurado ≠ metalinguístico; imperativo ≠ ausência de função poética.",
        "memorizar2026": "Slogan: frequentemente conativa + poética; veja qual aspecto a questão pede.",
        "fonte": "Edital SEDUC-PA 2026; FGV — questões sobre função conativa e efeitos formais em mensagens persuasivas."
    },
    {
        "id": "SEDUC-LP-FUN-019",
        "numero": 19,
        "subtopico": "Efeito de sentido da função poética",
        "dificuldade": "alta",
        "pergunta": "Em um texto, a repetição intencional de estruturas, a aliteração e a escolha de palavras por semelhança sonora contribuem principalmente para",
        "alternativas": [
            "comprovar a objetividade científica do texto.",
            "testar se o leitor recebeu a mensagem.",
            "explicar o código empregado.",
            "destacar a materialidade e a organização da própria mensagem, reforçando a função poética.",
            "eliminar qualquer intenção persuasiva do enunciado."
        ],
        "correta": 3,
        "feedbackAcerto": "Recursos sonoros e estruturais fazem o leitor perceber a forma da mensagem, núcleo da função poética.",
        "feedbackErro": "A questão destaca mecanismos formais, não informação factual, contato ou explicação do código.",
        "analiseAlternativas": [
            "Incorreta. Recursos sonoros não provam cientificidade.",
            "Incorreta. Isso seria foco fático.",
            "Incorreta. Isso seria metalinguagem.",
            "Correta. A própria construção verbal ganha relevo.",
            "Incorreta. Função poética pode coexistir com persuasão."
        ],
        "dicaBanca": "Quando o enunciado chama atenção para repetição, ritmo, paralelismo, aliteração ou jogo verbal, pense em função poética.",
        "pegadinha": "Poética não se restringe à linguagem literária.",
        "memorizar2026": "Poética = forma da mensagem produzindo sentido e efeito.",
        "fonte": "Edital SEDUC-PA 2026; análise funcional de recursos expressivos."
    },
    {
        "id": "SEDUC-LP-FUN-020",
        "numero": 20,
        "subtopico": "Função emotiva em interjeição",
        "dificuldade": "media",
        "pergunta": "A fala ‘Ah, que alívio! Finalmente conseguimos concluir o projeto!’ evidencia predominantemente a função",
        "alternativas": [
            "metalinguística, porque comenta a palavra ‘projeto’.",
            "referencial, porque apenas informa a conclusão.",
            "conativa, porque ordena que alguém conclua o projeto.",
            "fática, porque testa o canal.",
            "emotiva, porque a reação afetiva do emissor ocupa o primeiro plano."
        ],
        "correta": 4,
        "feedbackAcerto": "Interjeição, exclamação e avaliação subjetiva evidenciam o estado emocional de quem fala.",
        "feedbackErro": "A conclusão do projeto aparece como fato, mas o foco textual está na reação afetiva do emissor.",
        "analiseAlternativas": [
            "Incorreta. Não há comentário sobre código.",
            "Incorreta. Há informação, mas ela não é o foco predominante.",
            "Incorreta. Não existe ordem ao receptor.",
            "Incorreta. O contato não é testado.",
            "Correta. O emissor e sua emoção são centrais."
        ],
        "dicaBanca": "Exclamação não define sozinha a função emotiva, mas é forte pista quando acompanha avaliação subjetiva.",
        "pegadinha": "Pontuação expressiva é pista, não critério automático.",
        "memorizar2026": "Emotiva: primeira pessoa, interjeição, julgamento e estados afetivos.",
        "fonte": "Edital SEDUC-PA 2026; classificação funcional da linguagem."
    },
    {
        "id": "SEDUC-LP-FUN-021",
        "numero": 21,
        "subtopico": "Função conativa sem imperativo",
        "dificuldade": "alta",
        "pergunta": "Em uma campanha lê-se: ‘Você pode fazer a diferença na vida de uma criança’. Mesmo sem verbo no imperativo, a mensagem pode ser predominantemente conativa porque",
        "alternativas": [
            "se dirige ao receptor e procura influenciar sua atitude, mostrando que a função conativa não depende exclusivamente do imperativo.",
            "a palavra ‘criança’ explica o código linguístico.",
            "qualquer uso de ‘você’ transforma a frase obrigatoriamente em função fática.",
            "a frase não contém informação alguma sobre o mundo.",
            "mensagens de campanha nunca apresentam função poética."
        ],
        "correta": 0,
        "feedbackAcerto": "O apelo pode ser construído por pronomes, modalização, convite ou promessa; o imperativo é pista frequente, não requisito absoluto.",
        "feedbackErro": "A função é definida pelo foco comunicativo. O texto interpela o receptor e busca mobilizá-lo.",
        "analiseAlternativas": [
            "Correta. O destinatário é colocado no centro do efeito pretendido.",
            "Incorreta. Não há explicação do código.",
            "Incorreta. ‘Você’ pode marcar conatividade, mas não determina função fática.",
            "Incorreta. Há proposição e apelo.",
            "Incorreta. Campanhas podem combinar conativa e poética."
        ],
        "dicaBanca": "Não procure apenas marcas formais; identifique a intenção e o destinatário.",
        "pegadinha": "Imperativo ajuda, mas não é condição necessária para função conativa.",
        "memorizar2026": "Conativa = orientação/influência sobre o receptor, com ou sem imperativo explícito.",
        "fonte": "Edital SEDUC-PA 2026; FGV — função conativa em enunciados persuasivos."
    },
    {
        "id": "SEDUC-LP-FUN-022",
        "numero": 22,
        "subtopico": "Função poética x emotiva",
        "dificuldade": "alta",
        "pergunta": "Em um poema, o eu lírico manifesta tristeza por meio de repetições, ritmo e metáforas. Nessa situação, a análise mais adequada é:",
        "alternativas": [
            "Somente a função emotiva pode existir em textos com eu lírico.",
            "Podem coexistir função emotiva, pela expressão do eu, e função poética, pela elaboração formal da mensagem.",
            "A função poética é impossível quando há manifestação de sentimentos.",
            "A presença de metáfora torna o texto automaticamente metalinguístico.",
            "Todo poema é predominantemente fático porque pressupõe leitor."
        ],
        "correta": 1,
        "feedbackAcerto": "As funções não são mutuamente exclusivas. O texto pode destacar simultaneamente a subjetividade do emissor e a forma da mensagem.",
        "feedbackErro": "Não trate as seis funções como caixas exclusivas. A classificação costuma indicar predomínio e combinação.",
        "analiseAlternativas": [
            "Incorreta. Outras funções podem coexistir.",
            "Correta. Expressividade do eu e trabalho formal podem coexistir.",
            "Incorreta. Emoção e elaboração estética podem aparecer juntas.",
            "Incorreta. Metáfora é recurso semântico, não metalinguagem por si só.",
            "Incorreta. Existência de leitor não implica função fática predominante."
        ],
        "dicaBanca": "FGV pode explorar textos híbridos quanto às funções; evite respostas absolutas.",
        "pegadinha": "Função predominante ≠ função exclusiva.",
        "memorizar2026": "Um texto pode acionar várias funções ao mesmo tempo.",
        "fonte": "Edital SEDUC-PA 2026; teoria das funções aplicada a textos literários."
    },
    {
        "id": "SEDUC-LP-FUN-023",
        "numero": 23,
        "subtopico": "Função referencial e precisão",
        "dificuldade": "media",
        "pergunta": "Qual frase apresenta maior tendência à função referencial?",
        "alternativas": [
            "‘Que notícia maravilhosa!’",
            "‘Venha conhecer nossa nova biblioteca!’",
            "‘A biblioteca possui 12 mil exemplares e funciona de segunda a sexta, das 8h às 20h.’",
            "‘Biblioteca é uma palavra formada por...’",
            "‘Alô, a biblioteca está na linha?’"
        ],
        "correta": 2,
        "feedbackAcerto": "A alternativa C apresenta dados verificáveis, precisos e centrados no referente.",
        "feedbackErro": "Procure a frase com menor carga de apelo, emoção, contato ou comentário sobre o código.",
        "analiseAlternativas": [
            "Incorreta. Predomina reação emotiva.",
            "Incorreta. Há apelo conativo.",
            "Correta. Dados objetivos e verificáveis.",
            "Incorreta. A língua é objeto da própria linguagem: metalinguística.",
            "Incorreta. Abertura/teste de canal: fática."
        ],
        "dicaBanca": "Questões comparativas ajudam a memorizar o foco de cada função.",
        "pegadinha": "Objetividade é uma tendência da função referencial, não sinônimo de verdade absoluta.",
        "memorizar2026": "Referencial: informação, dados, descrição objetiva do referente/contexto.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de identificação de funções em frases curtas."
    },
    {
        "id": "SEDUC-LP-FUN-024",
        "numero": 24,
        "subtopico": "Caso integrador — funções em aula",
        "dificuldade": "alta",
        "pergunta": "Durante uma aula, a professora diz: ‘Alô, turma, todos me escutam? Hoje estudaremos metáfora. Metáfora é uma relação de sentido construída por aproximação entre elementos. Agora, identifiquem uma metáfora no texto’. A sequência mobiliza, respectivamente, com maior destaque,",
        "alternativas": [
            "emotiva, poética e fática.",
            "referencial, emotiva e metalinguística.",
            "poética, conativa e referencial.",
            "fática, metalinguística e conativa.",
            "conativa, fática e emotiva."
        ],
        "correta": 3,
        "feedbackAcerto": "O primeiro segmento testa o canal; o segundo explica um conceito da própria linguagem; o terceiro orienta uma ação da turma.",
        "feedbackErro": "Divida a sequência em três atos: checar contato, explicar o código e dar uma instrução.",
        "analiseAlternativas": [
            "Incorreta. O primeiro segmento é fático, não emotivo.",
            "Incorreta. O segundo é metalinguístico, não emotivo.",
            "Incorreta. O primeiro não é poético.",
            "Correta. Fática → metalinguística → conativa.",
            "Incorreta. A ordem funcional não corresponde aos três segmentos."
        ],
        "dicaBanca": "Questões integradoras podem exigir mudança de função ao longo de uma mesma situação comunicativa.",
        "pegadinha": "Não classifique toda a fala do professor com uma única função.",
        "memorizar2026": "Analise o foco de cada segmento: canal → código → receptor.",
        "fonte": "Edital SEDUC-PA 2026; FGV — funções da linguagem e atos de comunicação em provas docentes."
    },
    {
        "id": "SEDUC-LP-FUN-025",
        "numero": 25,
        "subtopico": "Síntese das funções",
        "dificuldade": "alta",
        "pergunta": "Assinale a associação correta entre função predominante e foco comunicativo.",
        "alternativas": [
            "Referencial — emissor; emotiva — canal; fática — contexto.",
            "Poética — receptor; conativa — código; metalinguística — mensagem.",
            "Fática — referente; referencial — mensagem; emotiva — receptor.",
            "Metalinguística — canal; poética — emissor; conativa — contexto.",
            "Referencial — contexto/referente; emotiva — emissor; conativa — receptor; fática — canal; metalinguística — código; poética — mensagem."
        ],
        "correta": 4,
        "feedbackAcerto": "Essa correspondência resume o modelo funcional mais cobrado: cada função privilegia um elemento do ato comunicativo.",
        "feedbackErro": "Associe: informar/contexto; expressar/emissor; apelar/receptor; manter contato/canal; explicar linguagem/código; elaborar forma/mensagem.",
        "analiseAlternativas": [
            "Incorreta. As associações estão trocadas.",
            "Incorreta. Poética focaliza mensagem, conativa receptor e metalinguística código.",
            "Incorreta. Fática focaliza canal e emotiva emissor.",
            "Incorreta. Metalinguística focaliza código e conativa receptor.",
            "Correta. Reúne as seis correspondências fundamentais."
        ],
        "dicaBanca": "Este quadro é útil, mas a FGV costuma cobrar a aplicação contextual, não apenas a memorização.",
        "pegadinha": "O elemento existe no ato comunicativo ≠ ele é o foco predominante da função.",
        "memorizar2026": "Referencial-contexto | Emotiva-emissor | Conativa-receptor | Fática-canal | Metalinguística-código | Poética-mensagem.",
        "fonte": "Edital SEDUC-PA 2026; FGV — modelo de funções da linguagem recorrente em provas objetivas."
    }
];

    window.seducLinguaPortuguesaFuncoesLinguagem2026 = banco;
})();
