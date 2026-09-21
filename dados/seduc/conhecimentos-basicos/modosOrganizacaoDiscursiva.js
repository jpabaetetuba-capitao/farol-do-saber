/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 04: Modos de Organização Discursiva
   Descrição • Narração • Exposição • Argumentação • Injunção
   25 questões autorais com feedback específico por alternativa.
   Conteúdo alinhado ao Edital nº 001/2026 — SEPLAD/SEDUC.
========================================================== */

(function(){
    "use strict";

    const banco = [
        {
            id:"SEDUC-LP-MOD-001", numero:1, subtopico:"Descrição — caracterização", dificuldade:"media",
            texto:"A sala era estreita, de paredes claras e janelas altas. No fundo, duas estantes antigas ocupavam quase toda a parede.",
            pergunta:"O modo de organização discursiva predominante no trecho é a descrição, porque o texto",
            alternativas:[
                "apresenta características e disposição espacial de elementos, construindo uma imagem do ambiente.",
                "relata uma sequência de acontecimentos encadeados no tempo.",
                "explica um conceito por meio de definição e classificação.",
                "defende uma tese por meio de argumentos e contra-argumentos.",
                "orienta o leitor a executar ações em determinada ordem."
            ],
            correta:0,
            feedbackAcerto:"A descrição organiza o enunciado em torno de características, estados, localização e composição de seres, objetos ou ambientes.",
            feedbackErro:"Observe se o trecho faz avançar acontecimentos ou se, ao contrário, interrompe a ação para mostrar como algo é ou está disposto.",
            analiseAlternativas:[
                "Correta. O foco recai sobre atributos e relações espaciais da sala.",
                "Incorreta. Não há sucessão de ações ou transformação temporal relevante.",
                "Incorreta. O trecho não define nem explica um conceito.",
                "Incorreta. Não há tese a ser defendida.",
                "Incorreta. Não há comando nem orientação de procedimento."
            ],
            dicaBanca:"Na FGV, descrição costuma ser reconhecida pela predominância de atributos, estados e localização, e não apenas pela presença de adjetivos.",
            pegadinha:"Um trecho pode estar dentro de uma narrativa e, ainda assim, funcionar descritivamente em determinado momento.",
            memorizar2026:"Descrição = caracterizar e situar; responde frequentemente a 'como é/está?'.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026 — modos de organização discursiva."
        },
        {
            id:"SEDUC-LP-MOD-002", numero:2, subtopico:"Narração — sequência temporal", dificuldade:"media",
            texto:"O sinal tocou. Os alunos fecharam os cadernos, saíram da sala e, minutos depois, ocuparam o pátio.",
            pergunta:"A organização do trecho é predominantemente narrativa porque",
            alternativas:[
                "enumera qualidades permanentes dos alunos e do pátio.",
                "apresenta ações sucessivas que fazem a situação avançar no tempo.",
                "expõe objetivamente um conceito escolar.",
                "procura convencer o leitor sobre a importância do recreio.",
                "prescreve o comportamento que os alunos devem adotar."
            ],
            correta:1,
            feedbackAcerto:"A narração apresenta acontecimentos ou ações encadeados temporalmente, produzindo mudança de estado ou progressão dos fatos.",
            feedbackErro:"Procure verbos de ação e marcas de sucessão temporal. A narração faz os acontecimentos avançarem.",
            analiseAlternativas:[
                "Incorreta. O foco não está em qualidades estáticas.",
                "Correta. Há sequência de ações: tocar, fechar, sair e ocupar.",
                "Incorreta. Nenhum conceito é explicado.",
                "Incorreta. Não há defesa de uma posição.",
                "Incorreta. O texto relata fatos, não dá instruções."
            ],
            dicaBanca:"FGV costuma opor narração a descrição pela presença de mudança e progressão temporal.",
            pegadinha:"Ter verbos não basta para haver narração; é preciso que os eventos componham uma progressão.",
            memorizar2026:"Narração = acontecimentos + tempo + progressão/transformação.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-003", numero:3, subtopico:"Exposição — explicação", dificuldade:"media",
            texto:"A evaporação é a passagem gradual de uma substância do estado líquido para o gasoso. O processo ocorre na superfície do líquido e pode ser acelerado pelo aumento da temperatura.",
            pergunta:"O trecho organiza-se predominantemente pelo modo expositivo, pois",
            alternativas:[
                "cria uma cena por meio de detalhes sensoriais.",
                "relata um episódio com personagens e ações sucessivas.",
                "apresenta e explica informações sobre um fenômeno sem defender uma tese controversa.",
                "busca convencer o leitor a adotar uma opinião sobre a evaporação.",
                "fornece ordens para realizar um experimento."
            ],
            correta:2,
            feedbackAcerto:"A exposição tem como finalidade central apresentar, esclarecer, definir, classificar ou explicar informações.",
            feedbackErro:"Pergunte se o texto quer explicar algo ou persuadir o leitor. Aqui, o foco é informativo-explicativo.",
            analiseAlternativas:[
                "Incorreta. Não há composição sensorial de cena.",
                "Incorreta. Não há episódio nem progressão narrativa.",
                "Correta. O trecho define e explica o fenômeno.",
                "Incorreta. Não existe tese em disputa.",
                "Incorreta. O leitor não recebe instruções."
            ],
            dicaBanca:"Definições, classificações, explicações de processo e relações conceituais são marcas fortes da exposição.",
            pegadinha:"Exposição pode conter opinião pontual; o que importa é a função predominante do trecho.",
            memorizar2026:"Exposição = informar/explicar de modo organizado.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-004", numero:4, subtopico:"Argumentação — tese", dificuldade:"media",
            texto:"A ampliação do horário da biblioteca deve ser mantida, pois oferece aos estudantes mais oportunidades de estudo e democratiza o acesso aos materiais da escola.",
            pergunta:"O trecho é predominantemente argumentativo porque",
            alternativas:[
                "descreve fisicamente a biblioteca.",
                "narra a criação do serviço em ordem cronológica.",
                "define tecnicamente o conceito de biblioteca escolar.",
                "defende uma posição e apresenta razões para sustentá-la.",
                "ensina passo a passo como utilizar a biblioteca."
            ],
            correta:3,
            feedbackAcerto:"Argumentar é sustentar uma tese ou ponto de vista por meio de razões, evidências, exemplos, comparações ou outros recursos persuasivos.",
            feedbackErro:"Localize a posição defendida ('deve ser mantida') e as justificativas introduzidas por 'pois'.",
            analiseAlternativas:[
                "Incorreta. Não há caracterização física do espaço.",
                "Incorreta. Não se relata a história do serviço.",
                "Incorreta. Não se oferece definição conceitual.",
                "Correta. Há tese e dois argumentos em sua sustentação.",
                "Incorreta. Não existe sequência de instruções."
            ],
            dicaBanca:"A FGV frequentemente pede para localizar tese e argumento, mesmo sem usar esses nomes no enunciado.",
            pegadinha:"Explicar por que algo acontece não é necessariamente argumentar; há argumentação quando uma posição é sustentada.",
            memorizar2026:"Argumentação = tese + sustentação.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-005", numero:5, subtopico:"Injunção — orientação", dificuldade:"media",
            texto:"Antes de ligar o aparelho, verifique se o cabo está íntegro. Em seguida, conecte-o à tomada e pressione o botão lateral por três segundos.",
            pergunta:"O modo injuntivo predomina no trecho porque ele",
            alternativas:[
                "caracteriza visualmente um aparelho.",
                "relata o que alguém fez com o equipamento.",
                "explica a origem tecnológica do aparelho.",
                "defende que o aparelho é melhor que outros modelos.",
                "orienta o destinatário a executar ações em uma sequência."
            ],
            correta:4,
            feedbackAcerto:"A injunção dirige a conduta do destinatário por ordens, recomendações, instruções ou procedimentos.",
            feedbackErro:"Observe os verbos que orientam diretamente o leitor: 'verifique', 'conecte' e 'pressione'.",
            analiseAlternativas:[
                "Incorreta. Não há descrição física relevante.",
                "Incorreta. As ações são prescritas, não narradas como ocorridas.",
                "Incorreta. Não há explicação histórica ou conceitual.",
                "Incorreta. Nenhuma tese comparativa é defendida.",
                "Correta. O texto prescreve um procedimento sequenciado."
            ],
            dicaBanca:"Imperativo, infinitivo com valor de comando e sequenciadores procedimentais são pistas do modo injuntivo.",
            pegadinha:"Um texto no presente pode narrar ou instruir; a finalidade comunicativa decide.",
            memorizar2026:"Injunção = orientar/fazer agir.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-006", numero:6, subtopico:"Descrição objetiva e subjetiva", dificuldade:"alta",
            texto:"O prédio possui três pavimentos, fachada de vidro e duas entradas laterais.",
            pergunta:"Nesse trecho, a descrição é predominantemente objetiva porque",
            alternativas:[
                "seleciona dados observáveis e evita avaliações afetivas do enunciador.",
                "apresenta acontecimentos em sequência cronológica.",
                "procura convencer o leitor de que o prédio é bonito.",
                "explica as causas históricas da construção.",
                "ordena que o leitor visite as entradas laterais."
            ],
            correta:0,
            feedbackAcerto:"Descrição objetiva privilegia características verificáveis, com menor carga avaliativa explícita.",
            feedbackErro:"Compare dados observáveis ('três pavimentos', 'duas entradas') com avaliações subjetivas como 'belíssimo' ou 'opressivo'.",
            analiseAlternativas:[
                "Correta. O trecho enumera propriedades verificáveis.",
                "Incorreta. Não há progressão de eventos.",
                "Incorreta. Nenhum juízo de beleza aparece.",
                "Incorreta. Não há explicação causal ou histórica.",
                "Incorreta. Não há comando."
            ],
            dicaBanca:"A FGV pode explorar a diferença entre caracterização objetiva e marcas avaliativas do observador.",
            pegadinha:"Toda descrição envolve seleção; 'objetiva' não significa ausência absoluta de ponto de vista.",
            memorizar2026:"Descrição objetiva = traços verificáveis; subjetiva = maior presença de avaliação/impressão.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-007", numero:7, subtopico:"Narração — mudança de estado", dificuldade:"alta",
            texto:"Às oito horas a praça estava vazia. Pouco depois chegaram os feirantes, abriram as barracas e, em menos de meia hora, o lugar estava cheio.",
            pergunta:"A característica narrativa mais evidente no trecho é",
            alternativas:[
                "a enumeração de atributos permanentes da praça.",
                "a transformação de uma situação inicial por uma sequência de acontecimentos.",
                "a definição técnica de feira livre.",
                "a defesa de uma opinião sobre comércio popular.",
                "a apresentação de regras para montar barracas."
            ],
            correta:1,
            feedbackAcerto:"A narrativa parte de um estado inicial e mostra sua transformação por eventos sucessivos.",
            feedbackErro:"Compare o início ('praça vazia') e o final ('lugar cheio') e observe as ações que produzem essa mudança.",
            analiseAlternativas:[
                "Incorreta. O estado inicial é apenas ponto de partida da transformação.",
                "Correta. Há mudança de estado sustentada por ações e marcas temporais.",
                "Incorreta. Não se define o que é feira.",
                "Incorreta. Não há tese ou julgamento central.",
                "Incorreta. Não se prescreve procedimento."
            ],
            dicaBanca:"Situação inicial → acontecimentos → situação modificada é uma estrutura narrativa recorrente.",
            pegadinha:"Trechos narrativos podem conter uma descrição inicial; observe o que predomina no conjunto.",
            memorizar2026:"Narrar é mostrar fatos que se desenrolam e alteram a situação.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-008", numero:8, subtopico:"Exposição — definição", dificuldade:"media",
            texto:"Intertextualidade é a relação que um texto estabelece com outro texto, de modo explícito ou implícito.",
            pergunta:"O procedimento expositivo utilizado no trecho é principalmente",
            alternativas:[
                "descrição de cenário.",
                "sequência narrativa.",
                "definição de um conceito.",
                "refutação de um argumento.",
                "instrução de procedimento."
            ],
            correta:2,
            feedbackAcerto:"A definição é um procedimento típico da exposição: apresenta o significado ou os limites de um conceito.",
            feedbackErro:"A estrutura 'X é...' frequentemente introduz definição, embora seja necessário confirmar pelo sentido.",
            analiseAlternativas:[
                "Incorreta. Não há ambiente caracterizado.",
                "Incorreta. Não há fatos encadeados.",
                "Correta. O enunciado explica o que se entende por intertextualidade.",
                "Incorreta. Nenhum posicionamento alheio é contestado.",
                "Incorreta. Não se orienta uma ação."
            ],
            dicaBanca:"Definição, exemplificação, classificação, comparação e explicação são procedimentos frequentes do modo expositivo.",
            pegadinha:"Nem toda frase com 'é' é definição; o contexto é decisivo.",
            memorizar2026:"Exposição pode organizar o conhecimento por definição e explicação.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-009", numero:9, subtopico:"Argumentação — identificação da tese", dificuldade:"alta",
            texto:"Embora a implantação exija investimento inicial, a escola deveria ampliar os recursos de acessibilidade digital, pois isso favorece autonomia e participação de um número maior de estudantes.",
            pergunta:"A tese defendida no trecho é que",
            alternativas:[
                "todo investimento escolar é necessariamente caro.",
                "autonomia e participação são conceitos equivalentes.",
                "a implantação de acessibilidade dispensa planejamento.",
                "a escola deveria ampliar os recursos de acessibilidade digital.",
                "o investimento inicial impede qualquer ampliação."
            ],
            correta:3,
            feedbackAcerto:"A tese é a posição que o enunciador pretende sustentar; os demais elementos funcionam como concessão ou justificativas.",
            feedbackErro:"Separe a concessão ('embora...') da proposição defendida e das razões introduzidas por 'pois'.",
            analiseAlternativas:[
                "Incorreta. O texto trata de um investimento específico, sem universalizar.",
                "Incorreta. São benefícios relacionados, não sinônimos.",
                "Incorreta. Isso não é afirmado.",
                "Correta. Essa é a proposição central defendida.",
                "Incorreta. A concessão reconhece dificuldade, mas não conclui impossibilidade."
            ],
            dicaBanca:"Concessões podem aparecer antes da tese para tornar a argumentação mais equilibrada.",
            pegadinha:"Não confunda argumento, ressalva e tese.",
            memorizar2026:"Tese = posição central; argumentos = razões que a sustentam.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-010", numero:10, subtopico:"Injunção — marcas linguísticas", dificuldade:"media",
            texto:"Preencha o formulário, anexe o comprovante e envie a solicitação até sexta-feira.",
            pergunta:"A marca linguística que mais diretamente evidencia o caráter injuntivo é",
            alternativas:[
                "a presença de um substantivo abstrato.",
                "a ausência de conectivos causais.",
                "o emprego de adjetivos avaliativos.",
                "a referência a um prazo temporal.",
                "o emprego de formas verbais com valor de comando."
            ],
            correta:4,
            feedbackAcerto:"O imperativo ou outras formas verbais com valor diretivo são marcas centrais de textos injuntivos.",
            feedbackErro:"O prazo contribui para a orientação, mas o traço decisivo é a sequência de verbos que dirige a ação do leitor.",
            analiseAlternativas:[
                "Incorreta. Isso não define injunção.",
                "Incorreta. A ausência de causa não caracteriza o modo.",
                "Incorreta. Não há adjetivação avaliativa relevante.",
                "Incorreta. O prazo é circunstancial, não o principal marcador do modo.",
                "Correta. 'Preencha', 'anexe' e 'envie' dirigem diretamente a conduta."
            ],
            dicaBanca:"A injunção pode usar imperativo, infinitivo ou presente com valor prescritivo.",
            pegadinha:"Não reduza injunção ao modo imperativo; a função diretiva é mais ampla.",
            memorizar2026:"Injunção: linguagem orientada à ação do destinatário.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-011", numero:11, subtopico:"Predominância modal — descrição", dificuldade:"alta",
            texto:"Depois de atravessar o corredor, Clara entrou na biblioteca. Era um salão amplo, silencioso, com mesas de madeira escura e luz suave entrando pelas janelas.",
            pergunta:"Considerando especialmente o segundo período, predomina o modo",
            alternativas:[
                "descritivo, pois o avanço das ações cede lugar à caracterização do ambiente.",
                "narrativo, pois cada adjetivo representa uma ação sucessiva.",
                "expositivo, pois o salão é definido tecnicamente.",
                "argumentativo, pois a biblioteca é defendida como agradável.",
                "injuntivo, pois o leitor é orientado a entrar no espaço."
            ],
            correta:0,
            feedbackAcerto:"Um texto pode combinar modos. No segundo período, a função local é descrever o espaço, ainda que o primeiro período seja narrativo.",
            feedbackErro:"A questão delimita o segundo período. Observe a função desse segmento, e não apenas o modo global do fragmento.",
            analiseAlternativas:[
                "Correta. Há pausa na ação para caracterização espacial e sensorial.",
                "Incorreta. Adjetivos não são ações narrativas.",
                "Incorreta. Não se define conceito.",
                "Incorreta. Não há defesa de tese.",
                "Incorreta. Não há comando ao leitor."
            ],
            dicaBanca:"FGV pode cobrar o modo predominante de um trecho específico dentro de um texto maior.",
            pegadinha:"Modo local e modo global podem ser diferentes.",
            memorizar2026:"Textos são frequentemente heterogêneos: vários modos podem coexistir.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-012", numero:12, subtopico:"Predominância modal — narração", dificuldade:"alta",
            texto:"O laboratório era pequeno e muito iluminado. Às nove horas, o técnico abriu as portas, ligou os equipamentos e chamou a primeira turma.",
            pergunta:"No conjunto do trecho, a progressão principal passa a ser narrativa no segundo período porque",
            alternativas:[
                "o texto abandona qualquer referência temporal.",
                "ações sucessivas, associadas a um agente e a um momento, fazem a situação avançar.",
                "o autor apresenta uma definição de laboratório.",
                "a iluminação do espaço funciona como argumento.",
                "o técnico orienta diretamente o leitor."
            ],
            correta:1,
            feedbackAcerto:"A narrativa se estabelece por agente, ações e marca temporal, produzindo progressão do acontecimento.",
            feedbackErro:"O primeiro período é descritivo; o segundo introduz tempo e sequência de ações.",
            analiseAlternativas:[
                "Incorreta. Há marca temporal explícita: 'Às nove horas'.",
                "Correta. Esses elementos constituem progressão narrativa.",
                "Incorreta. Nenhum conceito é definido.",
                "Incorreta. A iluminação é detalhe descritivo, não argumento.",
                "Incorreta. O técnico age dentro da narrativa, não dá instruções ao leitor."
            ],
            dicaBanca:"Verbos de ação + marca temporal + agente costumam sinalizar narração quando há encadeamento.",
            pegadinha:"Descrição inicial não impede que a sequência se torne narrativa depois.",
            memorizar2026:"Narração organiza ações no tempo.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-013", numero:13, subtopico:"Exposição x argumentação", dificuldade:"alta",
            texto:"A avaliação diagnóstica ocorre antes ou no início de uma etapa de ensino e busca identificar conhecimentos prévios e dificuldades dos estudantes.",
            pergunta:"O trecho é melhor classificado como expositivo, e não argumentativo, porque",
            alternativas:[
                "usa linguagem obrigatoriamente neutra e sem qualquer seleção do autor.",
                "narra quando uma avaliação específica aconteceu.",
                "seu propósito central é explicar características e finalidade de um conceito, sem buscar adesão a uma tese.",
                "ordena que professores realizem a avaliação diagnóstica.",
                "descreve sensorialmente uma situação de sala de aula."
            ],
            correta:2,
            feedbackAcerto:"Exposição e argumentação podem usar explicações, mas a diferença central está na finalidade: esclarecer versus sustentar uma posição.",
            feedbackErro:"Pergunte se há uma tese que o leitor precisa aceitar. Neste caso, o texto apresenta características de um conceito.",
            analiseAlternativas:[
                "Incorreta. Nenhum texto é desprovido de seleção; esse não é o critério decisivo.",
                "Incorreta. Não há episódio particular narrado.",
                "Correta. A finalidade predominante é explicativa.",
                "Incorreta. Não há comando.",
                "Incorreta. Não há descrição sensorial."
            ],
            dicaBanca:"A presença de explicação não transforma automaticamente um trecho em argumentativo.",
            pegadinha:"Informação técnica pode ser usada dentro de argumento, mas isoladamente pode ter função expositiva.",
            memorizar2026:"Expor = esclarecer; argumentar = buscar adesão a uma tese.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-014", numero:14, subtopico:"Argumentação — concessão e refutação", dificuldade:"alta",
            texto:"Alguns afirmam que projetos de leitura retiram tempo das demais disciplinas. Esse argumento, porém, ignora que a leitura é condição para compreender conteúdos de todas elas.",
            pergunta:"A organização argumentativa do trecho consiste em",
            alternativas:[
                "descrever duas disciplinas escolares.",
                "narrar uma discussão ocorrida em sala.",
                "expor apenas dados neutros, sem posicionamento.",
                "apresentar uma posição contrária e, em seguida, contestá-la com uma razão.",
                "dar instruções para criar um projeto de leitura."
            ],
            correta:3,
            feedbackAcerto:"A argumentação pode incorporar a voz contrária para refutá-la, estratégia frequente em textos persuasivos.",
            feedbackErro:"Observe a estrutura 'alguns afirmam...' seguida por 'porém' e uma contestação explícita.",
            analiseAlternativas:[
                "Incorreta. Não há caracterização de disciplinas.",
                "Incorreta. Nenhum episódio concreto é narrado.",
                "Incorreta. O enunciador avalia o argumento alheio como insuficiente.",
                "Correta. Há apresentação de contra-argumento e refutação.",
                "Incorreta. Não há procedimento."
            ],
            dicaBanca:"Conectores adversativos frequentemente marcam refutação, ressalva ou mudança de orientação argumentativa.",
            pegadinha:"Citar uma opinião alheia não significa adotá-la.",
            memorizar2026:"Contra-argumento + refutação = estratégia argumentativa.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-015", numero:15, subtopico:"Injunção — sequência procedural", dificuldade:"media",
            texto:"Para emitir o certificado, acesse a área do candidato, selecione o concurso, clique em 'Certificados' e confirme seus dados.",
            pergunta:"A ordenação dos verbos no trecho tem como principal função",
            alternativas:[
                "compor uma descrição visual do sistema.",
                "reconstituir um fato passado.",
                "definir o conceito de certificado.",
                "provar que o sistema é eficiente.",
                "estabelecer uma sequência operacional para que o leitor alcance um resultado."
            ],
            correta:4,
            feedbackAcerto:"Textos instrucionais organizam ações de modo funcional, frequentemente segundo a ordem em que devem ser executadas.",
            feedbackErro:"A sequência verbal não relata o que aconteceu; orienta o que o usuário deve fazer.",
            analiseAlternativas:[
                "Incorreta. Não há foco em aparência.",
                "Incorreta. As ações são prescritas, não narradas no passado.",
                "Incorreta. Não há definição.",
                "Incorreta. Nenhum argumento sobre eficiência é desenvolvido.",
                "Correta. A sequência dirige o procedimento do usuário."
            ],
            dicaBanca:"Em injunção, a ordem dos enunciados pode ser funcional: trocar etapas pode inviabilizar o procedimento.",
            pegadinha:"Sequência de ações pode ocorrer tanto em narração quanto em injunção; veja se são relatadas ou prescritas.",
            memorizar2026:"Narrar = dizer o que aconteceu; instruir = dizer o que fazer.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-016", numero:16, subtopico:"Descrição — organização espacial", dificuldade:"media",
            texto:"À esquerda da entrada fica a secretaria; em frente, a sala dos professores; ao fundo do corredor, localiza-se a biblioteca.",
            pergunta:"A organização das informações apoia-se principalmente",
            alternativas:[
                "em relações espaciais que situam os elementos descritos.",
                "na cronologia de acontecimentos passados.",
                "em relações de causa e consequência para explicar um fenômeno.",
                "em argumentos destinados a defender uma proposta arquitetônica.",
                "em comandos dirigidos ao visitante."
            ],
            correta:0,
            feedbackAcerto:"Descrição espacial organiza elementos por posição, orientação e localização relativa.",
            feedbackErro:"As expressões 'à esquerda', 'em frente' e 'ao fundo' constituem o eixo do trecho.",
            analiseAlternativas:[
                "Correta. A progressão é espacial.",
                "Incorreta. Não há sequência temporal de fatos.",
                "Incorreta. Não se explica causa de fenômeno.",
                "Incorreta. Não se defende projeto algum.",
                "Incorreta. O texto informa localização, sem ordenar deslocamento."
            ],
            dicaBanca:"Descrição pode progredir no espaço: de cima para baixo, da esquerda para a direita, do geral ao particular etc.",
            pegadinha:"Localização de ambientes não é necessariamente injunção; só será injuntiva se orientar uma ação.",
            memorizar2026:"Descrição espacial = localização relativa dos elementos.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-017", numero:17, subtopico:"Narração — marcadores temporais", dificuldade:"media",
            texto:"Primeiro a chuva enfraqueceu; depois, o vento cessou; por fim, os barcos voltaram a deixar o porto.",
            pergunta:"Os marcadores 'primeiro', 'depois' e 'por fim' contribuem para",
            alternativas:[
                "transformar ações em atributos descritivos.",
                "ordenar temporalmente os acontecimentos narrados.",
                "classificar conceitos científicos.",
                "introduzir uma tese e seus argumentos.",
                "formular comandos ao leitor."
            ],
            correta:1,
            feedbackAcerto:"Marcadores temporais explicitam a ordem dos acontecimentos e reforçam a progressão narrativa.",
            feedbackErro:"Esses elementos respondem à pergunta 'em que ordem os fatos ocorreram?'.",
            analiseAlternativas:[
                "Incorreta. Eles não caracterizam objetos.",
                "Correta. Organizam a cronologia do trecho.",
                "Incorreta. Não há classificação.",
                "Incorreta. Não há tese.",
                "Incorreta. Não há instrução."
            ],
            dicaBanca:"A cronologia pode ser marcada por advérbios, locuções, tempos verbais ou pela própria ordem dos eventos.",
            pegadinha:"Narração não exige conectores temporais explícitos, embora eles facilitem seu reconhecimento.",
            memorizar2026:"Marcadores temporais ajudam a estruturar a progressão narrativa.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-018", numero:18, subtopico:"Exposição — classificação", dificuldade:"alta",
            texto:"Os resíduos podem ser classificados, quanto à origem, em domiciliares, comerciais, industriais, de serviços de saúde e de outras categorias específicas.",
            pergunta:"O procedimento discursivo predominante é",
            alternativas:[
                "narração de um processo de coleta.",
                "descrição impressionista dos resíduos.",
                "classificação, recurso frequente do modo expositivo.",
                "argumentação em defesa da reciclagem.",
                "injunção para separação do lixo."
            ],
            correta:2,
            feedbackAcerto:"Classificar é distribuir elementos em categorias segundo determinado critério, procedimento típico de textos expositivos.",
            feedbackErro:"Observe a expressão 'podem ser classificados, quanto à origem'. Ela anuncia o procedimento usado.",
            analiseAlternativas:[
                "Incorreta. Não há eventos sucessivos.",
                "Incorreta. Não há impressões sensoriais.",
                "Correta. O texto organiza conhecimento em classes.",
                "Incorreta. Não é defendida uma tese sobre reciclagem.",
                "Incorreta. Não há comando ao leitor."
            ],
            dicaBanca:"FGV pode cobrar definição, classificação, enumeração explicativa e comparação como estratégias de exposição.",
            pegadinha:"Enumerar categorias não é o mesmo que narrar uma sequência.",
            memorizar2026:"Classificação expositiva = categorias organizadas por critério.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-019", numero:19, subtopico:"Argumentação — evidência", dificuldade:"alta",
            texto:"A escola deveria manter o programa de reforço. No semestre em que ele foi oferecido, a taxa de aprovação dos participantes passou de 72% para 84%.",
            pergunta:"No trecho, o dado percentual desempenha a função de",
            alternativas:[
                "descrever a aparência dos participantes.",
                "estabelecer a ordem cronológica de uma narrativa.",
                "definir o que significa aprovação.",
                "servir de evidência em apoio à tese favorável à manutenção do programa.",
                "orientar o leitor a calcular sua própria nota."
            ],
            correta:3,
            feedbackAcerto:"Dados, pesquisas e exemplos podem funcionar como evidências argumentativas quando são mobilizados para sustentar uma conclusão.",
            feedbackErro:"O número não aparece apenas para informar: ele é usado em favor da afirmação inicial sobre manter o programa.",
            analiseAlternativas:[
                "Incorreta. Não há descrição física.",
                "Incorreta. O dado não organiza eventos em sequência.",
                "Incorreta. Não há definição conceitual.",
                "Correta. O dado atua como argumento/evidência.",
                "Incorreta. Não existe instrução de cálculo."
            ],
            dicaBanca:"O mesmo dado pode ser expositivo ou argumentativo; observe a função que ele desempenha no contexto.",
            pegadinha:"Informação factual dentro de um texto não significa automaticamente modo expositivo.",
            memorizar2026:"Na argumentação, fatos e dados podem sustentar a tese.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-020", numero:20, subtopico:"Injunção — recomendação", dificuldade:"alta",
            texto:"Para reduzir distrações durante o estudo, prefira deixar as notificações desativadas e faça pausas breves em intervalos regulares.",
            pergunta:"Embora não empregue uma ordem autoritária, o trecho é injuntivo porque",
            alternativas:[
                "narra hábitos de um estudante específico.",
                "descreve o funcionamento técnico das notificações.",
                "expõe a história das técnicas de estudo.",
                "discute duas teses opostas sobre concentração.",
                "apresenta recomendações destinadas a orientar o comportamento do leitor."
            ],
            correta:4,
            feedbackAcerto:"Injunção inclui ordens, conselhos, recomendações e instruções; não precisa ter tom autoritário.",
            feedbackErro:"O texto tenta orientar a conduta futura do leitor por meio de recomendações práticas.",
            analiseAlternativas:[
                "Incorreta. Não há personagem nem episódio particular.",
                "Incorreta. O funcionamento técnico não é explicado.",
                "Incorreta. Não há exposição histórica.",
                "Incorreta. Não se contrapõem teses.",
                "Correta. A função diretiva caracteriza a injunção."
            ],
            dicaBanca:"Conselhos e recomendações também pertencem ao campo injuntivo.",
            pegadinha:"Injunção não é sinônimo de ordem ríspida.",
            memorizar2026:"Injuntivo = direciona ação ou conduta, inclusive por conselho.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-021", numero:21, subtopico:"Modo discursivo x gênero", dificuldade:"alta",
            texto:"Uma reportagem pode narrar acontecimentos, descrever ambientes, expor dados e até apresentar passagens argumentativas.",
            pergunta:"A afirmação exemplifica corretamente que",
            alternativas:[
                "um mesmo gênero pode combinar diferentes modos de organização discursiva.",
                "todo gênero possui obrigatoriamente um único modo discursivo.",
                "descrição e narração são gêneros textuais, não modos.",
                "a presença de dados elimina qualquer outro modo de organização.",
                "argumentação só pode aparecer em editoriais."
            ],
            correta:0,
            feedbackAcerto:"Gênero textual e modo de organização não são categorias equivalentes: um gênero pode mobilizar vários modos.",
            feedbackErro:"A questão trata da combinação de modos dentro de um mesmo gênero, fenômeno normal nos textos reais.",
            analiseAlternativas:[
                "Correta. Reportagens podem combinar modos conforme a função de cada trecho.",
                "Incorreta. Textos reais frequentemente são heterogêneos.",
                "Incorreta. Descrição e narração são modos de organização.",
                "Incorreta. Dados podem coexistir com narração ou argumentação.",
                "Incorreta. Argumentação pode ocorrer em diversos gêneros."
            ],
            dicaBanca:"A FGV pode pedir para distinguir modo discursivo, tipo/gênero e função de um segmento.",
            pegadinha:"Não transforme categorias de análise em caixas exclusivas.",
            memorizar2026:"Gênero ≠ modo; um gênero pode combinar vários modos.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-022", numero:22, subtopico:"Transformação modal — narração", dificuldade:"alta",
            texto:"Original: 'A praça tem árvores altas, bancos de madeira e um coreto no centro.'",
            pergunta:"Assinale a reescrita que transforma o conteúdo predominantemente descritivo em uma sequência predominantemente narrativa.",
            alternativas:[
                "A praça é ampla e arborizada, com bancos distribuídos ao redor do coreto.",
                "Ao chegar à praça, Pedro atravessou o caminho entre as árvores, sentou-se em um banco e depois caminhou até o coreto.",
                "Praça é um espaço público destinado à convivência e ao lazer.",
                "A praça deve ser preservada, porque áreas verdes melhoram a qualidade de vida.",
                "Ao entrar na praça, mantenha os caminhos livres e descarte o lixo nas lixeiras."
            ],
            correta:1,
            feedbackAcerto:"A reescrita narrativa introduz personagem, ações e sequência temporal, alterando a organização predominante.",
            feedbackErro:"Procure a alternativa em que os elementos da praça deixam de ser apenas caracterizados e passam a integrar acontecimentos sucessivos.",
            analiseAlternativas:[
                "Incorreta. Continua predominantemente descritiva.",
                "Correta. Há personagem e ações encadeadas.",
                "Incorreta. A formulação é expositiva/definidora.",
                "Incorreta. Há tese e justificativa, portanto argumentação.",
                "Incorreta. Há orientação ao leitor, portanto injunção."
            ],
            dicaBanca:"Questões de reescrita podem cobrar mudança de modo discursivo pela alteração da finalidade e da estrutura.",
            pegadinha:"Manter o mesmo tema não significa manter o mesmo modo.",
            memorizar2026:"Modo depende de como o conteúdo é organizado, não apenas do assunto.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-023", numero:23, subtopico:"Exposição x avaliação", dificuldade:"alta",
            texto:"O programa atende 18 escolas e oferece três modalidades de formação continuada.",
            pergunta:"O enunciado tende ao modo expositivo porque",
            alternativas:[
                "usa números, o que torna qualquer texto automaticamente expositivo.",
                "apresenta obrigatoriamente uma sequência narrativa.",
                "fornece informações sobre o objeto sem explicitar uma posição a ser defendida.",
                "ordena às escolas que participem das formações.",
                "avalia o programa como excelente."
            ],
            correta:2,
            feedbackAcerto:"A finalidade imediata é informar sobre alcance e modalidades, sem tese avaliativa explícita.",
            feedbackErro:"Números podem aparecer em qualquer modo; o critério decisivo é a função do enunciado no contexto.",
            analiseAlternativas:[
                "Incorreta. Dados numéricos não determinam sozinhos o modo.",
                "Incorreta. Não há acontecimentos sucessivos.",
                "Correta. O trecho apresenta informação sobre o programa.",
                "Incorreta. Nenhum comando aparece.",
                "Incorreta. Não há adjetivação avaliativa."
            ],
            dicaBanca:"Não classifique pelo vocabulário isolado; classifique pela função predominante.",
            pegadinha:"Dado estatístico pode ser exposição ou argumento, conforme o uso.",
            memorizar2026:"O modo é definido pela organização funcional do enunciado.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-024", numero:24, subtopico:"Argumentação — pergunta retórica", dificuldade:"alta",
            texto:"Se a leitura amplia vocabulário, compreensão e repertório, por que tratá-la como atividade secundária na escola?",
            pergunta:"A pergunta final tem função predominantemente argumentativa porque",
            alternativas:[
                "solicita uma informação objetiva que o autor desconhece.",
                "descreve os hábitos de leitura dos estudantes.",
                "explica tecnicamente como se forma o vocabulário.",
                "induz o leitor a questionar uma posição implícita e reforça o ponto de vista do enunciador.",
                "orienta o leitor a executar uma sequência de ações."
            ],
            correta:3,
            feedbackAcerto:"Perguntas retóricas podem funcionar como recurso argumentativo quando orientam a conclusão do leitor sem buscar resposta informativa real.",
            feedbackErro:"Pergunte se o autor realmente espera uma resposta desconhecida ou se conduz o leitor a uma conclusão.",
            analiseAlternativas:[
                "Incorreta. A pergunta não busca informação nova do interlocutor.",
                "Incorreta. Não há descrição de hábitos.",
                "Incorreta. O trecho não explica mecanismo linguístico.",
                "Correta. A pergunta reforça criticamente o ponto de vista.",
                "Incorreta. Não há procedimento."
            ],
            dicaBanca:"FGV pode explorar efeitos argumentativos de perguntas, ironias, modalizadores e escolhas lexicais.",
            pegadinha:"Nem toda interrogativa é pergunta informativa.",
            memorizar2026:"Pergunta retórica pode servir à persuasão.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026."
        },
        {
            id:"SEDUC-LP-MOD-025", numero:25, subtopico:"Heterogeneidade e predominância", dificuldade:"alta",
            texto:"Em textos reais, descrição, narração, exposição, argumentação e injunção podem aparecer combinadas. A classificação de um trecho depende da função que predomina naquele segmento e da forma como as informações são organizadas.",
            pergunta:"A afirmação mais adequada sobre os modos de organização discursiva é",
            alternativas:[
                "um texto deixa de ser narrativo se contiver uma frase descritiva.",
                "todo texto expositivo exclui completamente marcas argumentativas.",
                "o emprego do imperativo transforma necessariamente o texto inteiro em injuntivo.",
                "a presença de adjetivos é suficiente para classificar qualquer trecho como descritivo.",
                "os modos podem coexistir, e a classificação deve considerar a função predominante do segmento analisado."
            ],
            correta:4,
            feedbackAcerto:"Textos são heterogêneos. A análise deve observar predominância funcional, sem exigir pureza absoluta de um modo.",
            feedbackErro:"As alternativas erradas tratam sinais locais como regras absolutas. A classificação depende do conjunto e da função predominante.",
            analiseAlternativas:[
                "Incorreta. Narrativas frequentemente contêm passagens descritivas.",
                "Incorreta. Exposição e argumentação podem coexistir.",
                "Incorreta. Imperativo isolado não define necessariamente o texto inteiro.",
                "Incorreta. Adjetivos também ocorrem em outros modos.",
                "Correta. Essa é a compreensão funcional e não mecanicista dos modos discursivos."
            ],
            dicaBanca:"A FGV costuma explorar a função predominante e os efeitos locais, não classificações rígidas por uma única palavra.",
            pegadinha:"Evite critérios automáticos: 'tem adjetivo = descrição', 'tem dado = exposição', 'tem imperativo = injunção'.",
            memorizar2026:"Modos podem coexistir; classifique pela função predominante.",
            fonte:"Texto autoral; Edital SEDUC-PA 2026 — descrição, narração, exposição, argumentação e injunção."
        }
    ];

    window.seducLinguaPortuguesaModosOrganizacaoDiscursiva2026 = banco;
})();
