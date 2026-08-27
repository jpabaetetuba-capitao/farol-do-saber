// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// DIRETRIZES CURRICULARES E BNCC — AUDITORIA FINAL DE DISTRATORES
// Base preservada do banco revisado de 27/08/2026.
// 50 questões — 5 alternativas — padrão Instituto Ágata.
// Distratores harmonizados para evitar pista pelo comprimento.
// ============================================================

const apoioBNCCDiretrizes = [
    {
        "pergunta": "A Base Nacional Comum Curricular — BNCC — é definida oficialmente como:",
        "alternativas": [
            "um currículo nacional completo, com conteúdos, métodos e avaliações iguais para todas as escolas.",
            "um regulamento destinado apenas às escolas públicas e às redes mantidas pelos entes federativos.",
            "um conjunto facultativo de orientações metodológicas que cada sistema pode adotar ou não.",
            "um documento normativo restrito ao Ensino Fundamental e às avaliações nacionais.",
            "um documento normativo que define aprendizagens essenciais a serem desenvolvidas ao longo da Educação Básica."
        ],
        "correta": 4,
        "explicacao": "A BNCC é documento normativo e define aprendizagens essenciais para as etapas e modalidades da Educação Básica.",
        "feedbackAcerto": "Correto. Você distinguiu BNCC de currículo pronto: ela estabelece aprendizagens essenciais que orientam a construção curricular.",
        "feedbackErro": "Se você marcou 'currículo único', caiu numa pegadinha frequente. A BNCC é referência normativa; redes e escolas elaboram currículos e propostas pedagógicas a partir dela.",
        "dicaBanca": "Ágata já cobrou diretamente o conceito de BNCC."
    },
    {
        "pergunta": "A BNCC deve nortear:",
        "alternativas": [
            "somente os currículos das redes estaduais e dos sistemas mantidos pelos governos estaduais.",
            "exclusivamente o currículo do Ensino Fundamental, sem alcançar outras etapas da Educação Básica.",
            "apenas a escolha de livros didáticos e demais materiais utilizados pelos professores.",
            "somente a elaboração de avaliações externas aplicadas pelos sistemas de ensino.",
            "os currículos dos sistemas e redes de ensino e as propostas pedagógicas das escolas públicas e privadas."
        ],
        "correta": 4,
        "explicacao": "A BNCC orienta currículos e propostas pedagógicas em toda a Educação Básica, nas redes públicas e privadas.",
        "feedbackAcerto": "Correto. A abrangência é nacional e alcança redes, sistemas e escolas.",
        "feedbackErro": "O erro é restringir a Base a uma rede, etapa ou instrumento específico. Ela orienta currículos e propostas pedagógicas.",
        "dicaBanca": "Questão de abrangência institucional é típica da banca."
    },
    {
        "pergunta": "Na BNCC, competência é entendida como:",
        "alternativas": [
            "memorização organizada de conteúdos conceituais definidos previamente para cada etapa escolar.",
            "capacidade demonstrada principalmente por resultados obtidos em provas e avaliações padronizadas.",
            "cumprimento adequado de tarefas escolares, independentemente de sua aplicação em diferentes contextos sociais.",
            "domínio de conteúdos conceituais e procedimentos específicos previstos para cada componente curricular.",
            "mobilização de conhecimentos, habilidades, atitudes e valores para resolver demandas complexas da vida cotidiana, da cidadania e do mundo do trabalho."
        ],
        "correta": 4,
        "explicacao": "A BNCC define competência pela mobilização articulada de conhecimentos, habilidades, atitudes e valores.",
        "feedbackAcerto": "Correto. Essa formulação é central na Base e já apareceu em prova do Instituto Ágata.",
        "feedbackErro": "Se você escolheu apenas conhecimento ou habilidade, deixou de fora atitudes e valores e a ideia de mobilização diante de demandas complexas.",
        "dicaBanca": "Decore o núcleo: conhecimentos + habilidades + atitudes + valores."
    },
    {
        "pergunta": "Quantas competências gerais a BNCC estabelece para a Educação Básica?",
        "alternativas": [
            "10.",
            "6.",
            "8.",
            "5.",
            "12."
        ],
        "correta": 0,
        "explicacao": "A BNCC estabelece dez competências gerais a serem desenvolvidas ao longo da Educação Básica.",
        "feedbackAcerto": "Correto. As dez competências gerais atravessam as etapas da Educação Básica.",
        "feedbackErro": "Se você errou o número, revise a estrutura geral da BNCC antes de memorizar competências específicas por área.",
        "dicaBanca": "Número objetivo: 10 competências gerais."
    },
    {
        "pergunta": "A competência geral relacionada ao uso de conhecimentos historicamente construídos sobre o mundo físico, social, cultural e digital busca:",
        "alternativas": [
            "valorizar e utilizar conhecimentos historicamente construídos para compreender a realidade, continuar aprendendo e colaborar para uma sociedade justa, democrática e inclusiva.",
            "substituir conhecimentos científicos consolidados por experiências pessoais e percepções individuais dos estudantes.",
            "priorizar conhecimentos digitais em relação aos saberes históricos, sociais, culturais e científicos.",
            "restringir a aprendizagem aos conteúdos escolares formais definidos para cada componente curricular.",
            "eliminar conhecimentos locais e comunitários para preservar uniformidade nacional na formação dos estudantes."
        ],
        "correta": 0,
        "explicacao": "Essa é a competência geral 1, vinculada ao conhecimento e à compreensão da realidade.",
        "feedbackAcerto": "Correto. A BNCC conecta conhecimento, aprendizagem contínua e participação na construção de uma sociedade justa, democrática e inclusiva.",
        "feedbackErro": "A alternativa errada costuma reduzir a competência a memorização ou a apenas um campo de conhecimento.",
        "dicaBanca": "Ágata pode cobrar a descrição de uma competência e pedir sua identificação."
    },
    {
        "pergunta": "A competência geral que envolve curiosidade intelectual, investigação, reflexão, análise crítica, imaginação e criatividade corresponde ao desenvolvimento do:",
        "alternativas": [
            "autoconhecimento e autocuidado.",
            "pensamento científico, crítico e criativo.",
            "repertório cultural exclusivamente artístico.",
            "projeto de vida apenas profissional.",
            "domínio de uma língua estrangeira."
        ],
        "correta": 1,
        "explicacao": "A competência geral 2 trata do pensamento científico, crítico e criativo.",
        "feedbackAcerto": "Correto. O elemento-chave é investigar causas, testar hipóteses, formular e resolver problemas de modo criativo.",
        "feedbackErro": "Se você marcou repertório cultural, note que o enunciado enfatiza investigação, hipóteses e resolução de problemas.",
        "dicaBanca": "Procure as palavras-chave de cada competência."
    },
    {
        "pergunta": "Valorizar e fruir diversas manifestações artísticas e culturais, das locais às mundiais, e participar de práticas diversificadas de produção artístico-cultural relaciona-se à competência de:",
        "alternativas": [
            "argumentação.",
            "repertório cultural.",
            "cultura digital.",
            "responsabilidade e cidadania.",
            "trabalho e projeto de vida."
        ],
        "correta": 1,
        "explicacao": "A competência geral 3 refere-se ao repertório cultural.",
        "feedbackAcerto": "Correto. Ela combina fruição, valorização e participação em manifestações artísticas e culturais.",
        "feedbackErro": "O erro é associar cultura digital ou argumentação apenas porque há produção e participação. O foco está nas manifestações artístico-culturais.",
        "dicaBanca": "Repertório cultural = competência geral 3."
    },
    {
        "pergunta": "A competência geral de comunicação inclui a utilização de:",
        "alternativas": [
            "somente linguagem verbal escrita, utilizada de acordo com a norma-padrão da língua portuguesa.",
            "diferentes linguagens — verbal, corporal, visual, sonora e digital — para expressar e partilhar informações, experiências, ideias e sentimentos.",
            "apenas linguagem acadêmica formal utilizada em situações de estudo e avaliação escolar.",
            "somente comunicação digital, especialmente em plataformas e ambientes virtuais de aprendizagem.",
            "apenas língua portuguesa formal, sem integração com outras formas de expressão e comunicação."
        ],
        "correta": 1,
        "explicacao": "A competência geral 4 amplia a comunicação para diferentes linguagens.",
        "feedbackAcerto": "Correto. A BNCC trata comunicação de forma multimodal, não limitada à escrita formal.",
        "feedbackErro": "Se você restringiu a uma linguagem, ignorou a pluralidade prevista na Base.",
        "dicaBanca": "Comunicação na BNCC é multimodal."
    },
    {
        "pergunta": "A competência de cultura digital propõe que o estudante:",
        "alternativas": [
            "utilize tecnologias de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais.",
            "utilize tecnologias prioritariamente para entretenimento e consumo de conteúdos digitais produzidos por terceiros.",
            "substitua formas não digitais de comunicação por ferramentas tecnológicas em todas as situações de aprendizagem.",
            "aprenda exclusivamente programação e uso técnico de computadores como finalidade principal da competência.",
            "utilize informações disponíveis on-line sem necessidade de avaliar fontes, autoria ou confiabilidade."
        ],
        "correta": 0,
        "explicacao": "A competência geral 5 envolve compreender, utilizar e criar tecnologias digitais de modo crítico, significativo, reflexivo e ético.",
        "feedbackAcerto": "Correto. Cultura digital não é apenas saber operar aparelhos; inclui criticidade, ética e autoria.",
        "feedbackErro": "O erro é reduzir cultura digital a uso técnico ou consumo de tecnologia.",
        "dicaBanca": "Ágata pode trocar 'crítico e ético' por uso meramente instrumental."
    },
    {
        "pergunta": "A competência geral relacionada a trabalho e projeto de vida envolve:",
        "alternativas": [
            "subordinar o currículo às exigências imediatas do mercado de trabalho e às necessidades produtivas locais.",
            "preparar o estudante exclusivamente para o exercício de uma profissão definida durante a Educação Básica.",
            "valorizar a diversidade de saberes e vivências e compreender relações do mundo do trabalho para fazer escolhas alinhadas à cidadania e ao projeto de vida.",
            "reduzir conhecimentos artísticos e culturais para ampliar componentes diretamente relacionados à formação profissional.",
            "definir ainda na Educação Infantil a profissão que orientará todo o percurso formativo posterior."
        ],
        "correta": 2,
        "explicacao": "A competência geral 6 articula diversidade de saberes, mundo do trabalho, autonomia, liberdade e responsabilidade.",
        "feedbackAcerto": "Correto. Projeto de vida é mais amplo do que escolha profissional.",
        "feedbackErro": "Se você marcou preparação profissional exclusiva, reduziu uma competência ampla de autonomia e cidadania ao mercado.",
        "dicaBanca": "Projeto de vida ≠ treinamento profissional."
    },
    {
        "pergunta": "Argumentar com base em fatos, dados e informações confiáveis, respeitando e promovendo direitos humanos e consciência socioambiental corresponde à competência geral de:",
        "alternativas": [
            "repertório cultural.",
            "argumentação.",
            "autoconhecimento.",
            "comunicação apenas.",
            "cultura digital apenas."
        ],
        "correta": 1,
        "explicacao": "A competência geral 7 é argumentação baseada em informações confiáveis, com posicionamento ético.",
        "feedbackAcerto": "Correto. A BNCC exige argumentação fundamentada, não mera opinião.",
        "feedbackErro": "O erro é confundir comunicação com argumentação. Toda argumentação comunica, mas aqui há ênfase em fatos, dados e posicionamento ético.",
        "dicaBanca": "Palavra-chave: fatos e dados confiáveis."
    },
    {
        "pergunta": "Conhecer-se, apreciar-se e cuidar da saúde física e emocional, reconhecendo emoções próprias e dos outros, relaciona-se à competência geral de:",
        "alternativas": [
            "repertório cultural.",
            "autoconhecimento e autocuidado.",
            "argumentação.",
            "cultura digital.",
            "conhecimento científico."
        ],
        "correta": 1,
        "explicacao": "A competência geral 8 trata de autoconhecimento e autocuidado.",
        "feedbackAcerto": "Correto. Ela envolve saúde física e emocional, diversidade humana e reconhecimento de emoções.",
        "feedbackErro": "Se você marcou empatia, lembre que empatia e cooperação aparecem mais diretamente na competência 9.",
        "dicaBanca": "Competência 8: conhecer-se e cuidar-se."
    },
    {
        "pergunta": "Exercitar empatia, diálogo, resolução de conflitos e cooperação corresponde à competência geral que também busca:",
        "alternativas": [
            "priorizar competição individual e desempenho pessoal como forma principal de convivência escolar.",
            "fazer-se respeitar e promover respeito ao outro e aos direitos humanos, acolhendo e valorizando a diversidade.",
            "evitar convivência com diferenças que possam gerar conflito ou dificuldade de comunicação entre os estudantes.",
            "eliminar conflitos principalmente por meio de autoridade e cumprimento rigoroso de regras disciplinares.",
            "substituir diálogo e cooperação por normas fixas capazes de evitar divergências no ambiente escolar."
        ],
        "correta": 1,
        "explicacao": "A competência geral 9 articula empatia, diálogo, cooperação e valorização da diversidade.",
        "feedbackAcerto": "Correto. O foco é conviver e cooperar com respeito às diferenças e aos direitos humanos.",
        "feedbackErro": "O erro é tratar convivência como submissão ou simples ausência de conflitos.",
        "dicaBanca": "Empatia e cooperação = competência 9."
    },
    {
        "pergunta": "Agir pessoal e coletivamente com autonomia, responsabilidade, flexibilidade, resiliência e determinação corresponde à competência geral de:",
        "alternativas": [
            "comunicação.",
            "repertório cultural.",
            "cultura digital.",
            "responsabilidade e cidadania.",
            "pensamento científico apenas."
        ],
        "correta": 3,
        "explicacao": "A competência geral 10 trata de responsabilidade e cidadania.",
        "feedbackAcerto": "Correto. Ela articula autonomia com decisões éticas, inclusivas, sustentáveis e solidárias.",
        "feedbackErro": "Se você marcou projeto de vida, observe que aqui aparecem responsabilidade coletiva, resiliência e ação cidadã.",
        "dicaBanca": "Competência 10: responsabilidade e cidadania."
    },
    {
        "pergunta": "Na Educação Infantil, os eixos estruturantes das práticas pedagógicas são:",
        "alternativas": [
            "leitura e escrita formal.",
            "alfabetização e avaliação.",
            "conteúdos e provas.",
            "disciplinas e exercícios.",
            "interações e brincadeira."
        ],
        "correta": 4,
        "explicacao": "A BNCC preserva interações e brincadeira como eixos estruturantes da Educação Infantil.",
        "feedbackAcerto": "Correto. Esses eixos orientam as experiências das crianças e a intencionalidade pedagógica.",
        "feedbackErro": "O erro é antecipar a lógica disciplinar e escolarizante do Ensino Fundamental para a Educação Infantil.",
        "dicaBanca": "Instituto Ágata cobrou BNCC/Educação Infantil em 2026."
    },
    {
        "pergunta": "Assinale a alternativa que reúne os seis direitos de aprendizagem e desenvolvimento da Educação Infantil na BNCC:",
        "alternativas": [
            "Brincar, alfabetizar, classificar, promover, expressar e testar.",
            "Ler, escrever, calcular, competir, memorizar e avaliar.",
            "Conviver, copiar, repetir, avaliar, explorar e memorizar.",
            "Conviver, brincar, participar, explorar, expressar e conhecer-se.",
            "Participar, graduar, calcular, disciplinar, brincar e avaliar."
        ],
        "correta": 3,
        "explicacao": "Os seis direitos são conviver, brincar, participar, explorar, expressar e conhecer-se.",
        "feedbackAcerto": "Correto. Esse conjunto é literal e central na estrutura da Educação Infantil.",
        "feedbackErro": "Se você misturou alfabetização, avaliação ou promoção, incluiu elementos que não compõem os seis direitos.",
        "dicaBanca": "Memorize os seis verbos."
    },
    {
        "pergunta": "O direito de aprendizagem 'brincar', segundo a BNCC, envolve:",
        "alternativas": [
            "brincar cotidianamente em diferentes espaços e tempos, com diferentes parceiros, ampliando experiências, conhecimentos, imaginação e criatividade.",
            "brincar apenas nos horários livres previstos na rotina, sem relação necessária com o planejamento pedagógico.",
            "brincar como atividade espontânea que não precisa estar relacionada a experiências de aprendizagem e desenvolvimento.",
            "brincar somente quando houver comando direto do professor e objetivos previamente definidos para cada ação.",
            "brincar como atividade complementar, realizada depois do cumprimento dos conteúdos considerados formais."
        ],
        "correta": 0,
        "explicacao": "A BNCC apresenta o brincar como direito cotidiano e experiência ampla de aprendizagem e desenvolvimento.",
        "feedbackAcerto": "Correto. Essa formulação aproxima-se diretamente de questão aplicada pela Ágata em 2026.",
        "feedbackErro": "O erro é tratar brincadeira como intervalo, prêmio ou atividade sem intencionalidade educativa.",
        "dicaBanca": "Ágata já cobrou especificamente o direito 'brincar'."
    },
    {
        "pergunta": "Na Educação Infantil, o direito de 'participar' envolve:",
        "alternativas": [
            "participar apenas das escolhas feitas pelos adultos, cumprindo orientações e decisões definidas previamente pela equipe escolar.",
            "participar ativamente, com adultos e outras crianças, do planejamento da gestão da escola e das atividades da vida cotidiana, dentro das possibilidades da etapa.",
            "participar somente de brincadeiras livres e situações em que não haja intencionalidade pedagógica organizada pelo professor.",
            "substituir a mediação pedagógica por decisões infantis irrestritas sobre rotina, materiais e objetivos de aprendizagem.",
            "participar prioritariamente de eventos comemorativos, apresentações e atividades coletivas previamente organizadas."
        ],
        "correta": 1,
        "explicacao": "O direito de participar reconhece a criança como sujeito ativo em decisões e experiências que compõem seu cotidiano.",
        "feedbackAcerto": "Correto. Participação infantil não elimina o papel do professor; amplia o protagonismo da criança dentro de uma organização pedagógica intencional.",
        "feedbackErro": "O erro é confundir protagonismo infantil com ausência de planejamento ou autoridade pedagógica.",
        "dicaBanca": "Criança ativa ≠ professor ausente."
    },
    {
        "pergunta": "Na Educação Infantil, a BNCC estabelece quantos campos de experiências?",
        "alternativas": [
            "3.",
            "4.",
            "6.",
            "5.",
            "10."
        ],
        "correta": 3,
        "explicacao": "A Educação Infantil está organizada em cinco campos de experiências.",
        "feedbackAcerto": "Correto. Os cinco campos articulam experiências que favorecem aprendizagens e desenvolvimento.",
        "feedbackErro": "Se você marcou seis, provavelmente confundiu o número de campos com os seis direitos de aprendizagem.",
        "dicaBanca": "6 direitos / 5 campos."
    },
    {
        "pergunta": "Qual alternativa apresenta um campo de experiências da Educação Infantil?",
        "alternativas": [
            "Educação financeira e consumo responsável no cotidiano.",
            "Álgebra, funções e pensamento algébrico elementar.",
            "Ciências da Natureza e suas Tecnologias aplicadas.",
            "Projeto de vida, escolha profissional e empreendedorismo.",
            "O eu, o outro e o nós nas relações e experiências."
        ],
        "correta": 4,
        "explicacao": "'O eu, o outro e o nós' é um dos cinco campos de experiências.",
        "feedbackAcerto": "Correto. Esse campo trabalha identidade, convivência, relações e construção de pertencimento.",
        "feedbackErro": "O erro é trazer áreas ou componentes de etapas posteriores da Educação Básica.",
        "dicaBanca": "Reconheça os nomes literais dos cinco campos."
    },
    {
        "pergunta": "Também constitui campo de experiências na Educação Infantil:",
        "alternativas": [
            "Leitura e produção textual formal.",
            "Geometria e medidas.",
            "História e memória social.",
            "Corpo, gestos e movimentos.",
            "Biologia e saúde."
        ],
        "correta": 3,
        "explicacao": "'Corpo, gestos e movimentos' integra a estrutura da Educação Infantil.",
        "feedbackAcerto": "Correto. O campo valoriza experiências corporais, expressivas e motoras.",
        "feedbackErro": "Se você marcou um componente disciplinar, antecipou a organização curricular do Ensino Fundamental.",
        "dicaBanca": "Campos de experiências não são disciplinas."
    },
    {
        "pergunta": "Na Educação Infantil, o campo 'Escuta, fala, pensamento e imaginação' favorece:",
        "alternativas": [
            "experiências com linguagem oral, narrativas, escuta, expressão e aproximação progressiva com a cultura escrita.",
            "alfabetização formal obrigatória, com domínio do sistema alfabético até o final da pré-escola.",
            "ensino sistemático de gramática, ortografia e análise linguística desde os primeiros anos da Educação Infantil.",
            "atividades baseadas principalmente em cópia, repetição e reprodução de palavras e frases.",
            "substituição gradual das brincadeiras por práticas formais de leitura e escrita preparatórias para o Ensino Fundamental."
        ],
        "correta": 0,
        "explicacao": "O campo promove experiências de comunicação, narrativas e cultura escrita sem impor escolarização precoce.",
        "feedbackAcerto": "Correto. A criança se aproxima da linguagem escrita em contextos significativos, preservando características da Educação Infantil.",
        "feedbackErro": "O erro é converter esse campo em alfabetização formal obrigatória.",
        "dicaBanca": "BNCC não transforma Educação Infantil em 1º ano antecipado."
    },
    {
        "pergunta": "As faixas etárias utilizadas pela BNCC para organizar objetivos de aprendizagem e desenvolvimento na Educação Infantil são:",
        "alternativas": [
            "infância inicial; infância média; adolescência.",
            "berçário; maternal; alfabetização.",
            "0 a 2; 3 a 5; 6 a 7 anos.",
            "creche; ensino fundamental; pré-escola.",
            "bebês; crianças bem pequenas; crianças pequenas."
        ],
        "correta": 4,
        "explicacao": "A BNCC utiliza os grupos bebês, crianças bem pequenas e crianças pequenas.",
        "feedbackAcerto": "Correto. A organização considera especificidades do desenvolvimento sem transformar as faixas em séries rígidas.",
        "feedbackErro": "O erro é usar nomenclaturas administrativas ou etapas que não correspondem à classificação da BNCC.",
        "dicaBanca": "Termos literais costumam aparecer na Ágata."
    },
    {
        "pergunta": "Na Educação Infantil, a criança é concebida pela BNCC como:",
        "alternativas": [
            "receptora de estímulos organizados pelo adulto, com participação predominantemente passiva nas experiências escolares.",
            "aprendiz cuja evolução depende principalmente de processos espontâneos de desenvolvimento, sem necessidade de mediação intencional.",
            "aluna que deve seguir instruções e rotinas definidas pelos adultos para garantir segurança e organização das atividades.",
            "sujeito ainda incapaz de participar das escolhas que envolvem experiências, espaços e materiais da rotina escolar.",
            "sujeito histórico e de direitos, ativo, que observa, questiona, constrói sentidos e conhecimentos nas interações e experiências."
        ],
        "correta": 4,
        "explicacao": "A concepção da criança é ativa e participativa, sem eliminar a intencionalidade educativa do professor.",
        "feedbackAcerto": "Correto. Essa compreensão apareceu em questão recente do Instituto Ágata.",
        "feedbackErro": "O erro é ir a um dos extremos: criança passiva ou aprendizagem totalmente espontânea sem mediação pedagógica.",
        "dicaBanca": "Ágata 2026: criança ativa + intencionalidade educativa."
    },
    {
        "pergunta": "Na Educação Infantil, a intencionalidade educativa do professor significa:",
        "alternativas": [
            "organizar e propor experiências que permitam às crianças conhecer a si, aos outros e ao mundo, considerando interesses, direitos e desenvolvimento.",
            "controlar todas as ações das crianças e reduzir iniciativas espontâneas para garantir cumprimento dos objetivos planejados.",
            "deixar que toda aprendizagem ocorra espontaneamente, sem organização prévia de tempos, espaços, materiais ou experiências.",
            "antecipar conteúdos formais do Ensino Fundamental como principal finalidade da prática pedagógica na Educação Infantil.",
            "aplicar provas periódicas e registros classificatórios para verificar se os objetivos definidos foram atingidos."
        ],
        "correta": 0,
        "explicacao": "A BNCC reconhece protagonismo infantil e, simultaneamente, o papel intencional do educador na organização de experiências.",
        "feedbackAcerto": "Correto. O professor planeja contextos de aprendizagem sem retirar a agência das crianças.",
        "feedbackErro": "A pegadinha é opor protagonismo infantil a planejamento docente. Na BNCC, eles coexistem.",
        "dicaBanca": "Questão muito próxima do padrão Ágata 2026."
    },
    {
        "pergunta": "A transição da Educação Infantil para o Ensino Fundamental deve:",
        "alternativas": [
            "romper com as experiências anteriores para iniciar uma etapa marcada por rotinas e conteúdos de escolarização formal.",
            "dispensar a troca de informações entre professores das duas etapas para evitar expectativas prévias sobre as crianças.",
            "antecipar avaliações classificatórias para identificar previamente os estudantes com maior domínio de leitura e escrita.",
            "priorizar a alfabetização formal como objetivo exclusivo do período inicial do Ensino Fundamental.",
            "garantir continuidade dos processos de aprendizagem e desenvolvimento, respeitando experiências anteriores e as especificidades da infância."
        ],
        "correta": 4,
        "explicacao": "A BNCC orienta continuidade e acolhimento na transição, evitando rupturas bruscas.",
        "feedbackAcerto": "Correto. A passagem de etapa deve considerar trajetórias, registros e experiências das crianças.",
        "feedbackErro": "O erro é imaginar que o Ensino Fundamental começa do zero ou exige ruptura com a Educação Infantil.",
        "dicaBanca": "Ágata cobrou transição EI → EF em 2026."
    },
    {
        "pergunta": "No Ensino Fundamental, a BNCC organiza os componentes curriculares por meio de:",
        "alternativas": [
            "campos de experiências utilizados igualmente em todas as áreas e componentes curriculares do Ensino Fundamental.",
            "conteúdos livres definidos exclusivamente pelas escolas, sem vinculação às aprendizagens previstas na Base.",
            "competências gerais utilizadas como única forma de organização do currículo e do planejamento docente.",
            "unidades temáticas, objetos de conhecimento e habilidades, conforme a estrutura prevista para cada componente curricular.",
            "disciplinas organizadas sem habilidades, objetos de conhecimento ou articulação com competências específicas."
        ],
        "correta": 3,
        "explicacao": "No Ensino Fundamental, as habilidades se relacionam a objetos de conhecimento organizados em unidades temáticas.",
        "feedbackAcerto": "Correto. Essa estrutura ajuda a compreender como a Base apresenta progressão de aprendizagens.",
        "feedbackErro": "O erro é levar os campos de experiências da Educação Infantil para o Ensino Fundamental.",
        "dicaBanca": "EI = campos de experiências; EF = unidades temáticas/objetos/habilidades."
    },
    {
        "pergunta": "No Ensino Fundamental, as competências específicas de área:",
        "alternativas": [
            "substituem as competências gerais e passam a ser a única referência para cada área do conhecimento.",
            "explicitam como as dez competências gerais se expressam e se desenvolvem em cada área do conhecimento.",
            "aplicam-se apenas ao 9º ano, quando ocorre a consolidação das aprendizagens do Ensino Fundamental.",
            "são definidas livremente por cada escola, sem necessidade de relação com as competências gerais da BNCC.",
            "destinam-se principalmente às avaliações externas e não precisam orientar os currículos escolares."
        ],
        "correta": 1,
        "explicacao": "As competências específicas articulam as competências gerais às características de cada área.",
        "feedbackAcerto": "Correto. Há uma relação de continuidade entre competências gerais, específicas e habilidades.",
        "feedbackErro": "O erro é tratar níveis da BNCC como estruturas independentes ou concorrentes.",
        "dicaBanca": "Competências específicas concretizam as gerais nas áreas."
    },
    {
        "pergunta": "A BNCC busca promover articulação horizontal e vertical das aprendizagens. A articulação vertical refere-se principalmente:",
        "alternativas": [
            "à relação entre escola e família apenas.",
            "à progressão entre anos e etapas, garantindo continuidade das aprendizagens.",
            "à divisão de turmas por rendimento.",
            "ao uso de avaliações nacionais.",
            "à relação entre escola urbana e rural."
        ],
        "correta": 1,
        "explicacao": "A articulação vertical está ligada à progressão e continuidade ao longo do percurso escolar.",
        "feedbackAcerto": "Correto. Ela ajuda a evitar fragmentação entre anos e etapas.",
        "feedbackErro": "Se você marcou relação entre áreas no mesmo ano, isso se aproxima mais da articulação horizontal.",
        "dicaBanca": "Horizontal = entre áreas; vertical = progressão no tempo."
    },
    {
        "pergunta": "Na BNCC, habilidade expressa:",
        "alternativas": [
            "uma aprendizagem que os estudantes devem desenvolver, articulada a objetos de conhecimento e competências previstas na BNCC.",
            "uma metodologia obrigatória que todos os professores devem utilizar para desenvolver determinado conteúdo.",
            "um conteúdo específico que precisa ser memorizado e reproduzido em atividades e avaliações escolares.",
            "uma forma padronizada de avaliação que deve ser aplicada igualmente em todas as redes de ensino.",
            "um material didático obrigatório definido nacionalmente para cada componente curricular."
        ],
        "correta": 0,
        "explicacao": "As habilidades descrevem aprendizagens esperadas e não prescrevem uma única metodologia.",
        "feedbackAcerto": "Correto. A BNCC define o que deve ser aprendido, deixando espaço para escolhas pedagógicas e curriculares.",
        "feedbackErro": "O erro é confundir habilidade com método. O professor e a rede decidem como organizar situações de ensino.",
        "dicaBanca": "BNCC define aprendizagens, não uma metodologia única."
    },
    {
        "pergunta": "No código EF02CI01, o trecho 'EF' indica:",
        "alternativas": [
            "Ensino Formal.",
            "Educação Física.",
            "Ensino Fundamental.",
            "Educação Fundamental Especial.",
            "Etapa Final."
        ],
        "correta": 2,
        "explicacao": "Na codificação da BNCC, EF identifica a etapa do Ensino Fundamental.",
        "feedbackAcerto": "Correto. A leitura dos códigos permite localizar etapa, ano, componente e posição da habilidade.",
        "feedbackErro": "Se você marcou Educação Física, lembre que a primeira sigla indica a etapa, não o componente.",
        "dicaBanca": "Ágata pode explorar leitura de códigos de habilidades."
    },
    {
        "pergunta": "Em um código de habilidade como EF02CI01, o número '02' logo após EF refere-se:",
        "alternativas": [
            "ao número que identifica o componente curricular dentro da estrutura da Educação Básica.",
            "à competência geral da BNCC que deve ser mobilizada na aprendizagem descrita.",
            "ao ano ou bloco de anos da etapa a que a habilidade está vinculada.",
            "à quantidade de objetos de conhecimento associados à habilidade indicada no código.",
            "ao nível de dificuldade atribuído à habilidade dentro da progressão curricular."
        ],
        "correta": 2,
        "explicacao": "O primeiro par de números após a etapa indica o ano ou bloco de anos.",
        "feedbackAcerto": "Correto. No exemplo, a habilidade está vinculada ao 2º ano do Ensino Fundamental.",
        "feedbackErro": "O erro é interpretar todos os números como competência ou posição da habilidade.",
        "dicaBanca": "Leia o código por blocos."
    },
    {
        "pergunta": "Na codificação EF02CI01, 'CI' identifica:",
        "alternativas": [
            "o campo de experiências.",
            "a competência de cidadania.",
            "o componente curricular Ciências.",
            "a área de Ciências Humanas.",
            "o ciclo inicial."
        ],
        "correta": 2,
        "explicacao": "Na estrutura dos códigos do Ensino Fundamental, a sigla intermediária identifica o componente curricular.",
        "feedbackAcerto": "Correto. 'CI' é a abreviação de Ciências.",
        "feedbackErro": "Se você confundiu com área ampla, observe que a codificação usa abreviações específicas dos componentes.",
        "dicaBanca": "Questão simples, boa para fixação estrutural."
    },
    {
        "pergunta": "A parte diversificada do currículo, prevista na LDB e articulada à BNCC:",
        "alternativas": [
            "deve ser idêntica em todo o país.",
            "substitui a base nacional comum.",
            "é opcional e pode ser ignorada pelas redes.",
            "deve considerar características regionais e locais da sociedade, cultura, economia e educandos.",
            "aplica-se apenas ao ensino privado."
        ],
        "correta": 3,
        "explicacao": "A base nacional comum é complementada por parte diversificada vinculada aos contextos regionais e locais.",
        "feedbackAcerto": "Correto. BNCC não significa apagar diferenças territoriais e culturais.",
        "feedbackErro": "O erro é opor base comum e diversidade. A organização curricular combina direitos comuns com contextualização local.",
        "dicaBanca": "Base comum + parte diversificada."
    },
    {
        "pergunta": "Segundo as Diretrizes Curriculares Nacionais Gerais para a Educação Básica, o currículo deve ser entendido:",
        "alternativas": [
            "como lista organizada de conteúdos, objetivos e procedimentos distribuídos entre os diferentes anos escolares.",
            "como grade horária que define componentes, carga horária e distribuição semanal das atividades.",
            "como conjunto de valores e práticas que produzem e socializam significados no espaço social e contribuem para a construção de identidades.",
            "como relação formal de disciplinas e componentes obrigatórios previstos para cada etapa da Educação Básica.",
            "como instrumento utilizado principalmente para selecionar estudantes de acordo com desempenho e progressão escolar."
        ],
        "correta": 2,
        "explicacao": "As DCNs adotam conceito amplo de currículo, ligado a práticas, valores, conhecimentos e construção de identidades.",
        "feedbackAcerto": "Correto. Currículo não se reduz à grade de disciplinas ou lista de conteúdos.",
        "feedbackErro": "O erro é usar uma visão burocrática e restrita de currículo.",
        "dicaBanca": "Ágata tende a cobrar conceitos educacionais em alternativas muito próximas."
    },
    {
        "pergunta": "As Diretrizes Curriculares Nacionais Gerais para a Educação Básica orientam-se por princípios:",
        "alternativas": [
            "exclusivamente econômicos.",
            "apenas técnicos e administrativos.",
            "religiosos e partidários.",
            "éticos, políticos e estéticos.",
            "somente científicos."
        ],
        "correta": 3,
        "explicacao": "As DCNs articulam princípios éticos, políticos e estéticos, também retomados pela BNCC.",
        "feedbackAcerto": "Correto. Esses princípios sustentam a formação humana integral e a organização curricular.",
        "feedbackErro": "Se você marcou apenas princípios técnicos, ignorou a dimensão formativa ampla das diretrizes.",
        "dicaBanca": "Trio clássico: éticos, políticos e estéticos."
    },
    {
        "pergunta": "A educação integral, presente na BNCC, refere-se:",
        "alternativas": [
            "exclusivamente à ampliação da jornada escolar e ao aumento do tempo diário de permanência na instituição.",
            "à preparação prioritária para o mercado de trabalho e para escolhas profissionais futuras.",
            "somente à oferta de escola em tempo integral, independentemente das experiências educativas propostas.",
            "ao desenvolvimento humano global em dimensões intelectual, física, afetiva, social, ética, moral e simbólica, entre outras.",
            "à ampliação quantitativa de conteúdos acadêmicos e da carga horária destinada aos componentes curriculares."
        ],
        "correta": 3,
        "explicacao": "A BNCC adota compromisso com educação integral como formação e desenvolvimento humano global.",
        "feedbackAcerto": "Correto. Tempo integral pode ser uma política de jornada; educação integral é uma concepção formativa mais ampla.",
        "feedbackErro": "O erro é confundir educação integral com escola em tempo integral.",
        "dicaBanca": "Integral = desenvolvimento global, não apenas mais horas."
    },
    {
        "pergunta": "A formação humana integral buscada pela BNCC está associada à construção de uma sociedade:",
        "alternativas": [
            "justa, democrática e inclusiva.",
            "competitiva e seletiva.",
            "uniforme e sem diversidade.",
            "exclusivamente tecnológica.",
            "organizada apenas por desempenho."
        ],
        "correta": 0,
        "explicacao": "A BNCC relaciona as competências gerais à formação humana integral e a uma sociedade justa, democrática e inclusiva.",
        "feedbackAcerto": "Correto. A dimensão social e ética está explicitamente vinculada ao projeto formativo da Base.",
        "feedbackErro": "O erro é reduzir a BNCC a desempenho acadêmico ou produtividade.",
        "dicaBanca": "Expressão literal frequente: justa, democrática e inclusiva."
    },
    {
        "pergunta": "Em relação à diversidade cultural e territorial, a implementação da BNCC deve:",
        "alternativas": [
            "garantir aprendizagens essenciais comuns e permitir contextualização dos currículos às realidades locais, regionais e culturais.",
            "padronizar integralmente os currículos e reduzir diferenças territoriais entre redes e escolas.",
            "eliminar conteúdos locais e regionais para assegurar uniformidade nacional das aprendizagens.",
            "impedir que as escolas considerem características dos estudantes ao organizar propostas pedagógicas.",
            "permitir que cada escola substitua as aprendizagens essenciais por conteúdos exclusivamente locais."
        ],
        "correta": 0,
        "explicacao": "A Base combina direitos comuns de aprendizagem com contextualização curricular.",
        "feedbackAcerto": "Correto. Uniformidade absoluta não é o objetivo da BNCC.",
        "feedbackErro": "O erro é pensar que uma base nacional comum produz um currículo idêntico em todas as escolas.",
        "dicaBanca": "Comum não significa uniforme."
    },
    {
        "pergunta": "Uma escola afirma que, por seguir a BNCC, não precisa elaborar proposta pedagógica própria. Essa afirmação é:",
        "alternativas": [
            "correta, pois a BNCC substitui o projeto político-pedagógico e define integralmente a proposta curricular da escola.",
            "correta apenas no Ensino Fundamental, etapa em que as aprendizagens essenciais são obrigatórias.",
            "correta apenas nas escolas públicas, porque as instituições privadas possuem maior autonomia curricular.",
            "incorreta, pois a BNCC orienta os currículos, mas cada escola deve elaborar sua proposta pedagógica conforme legislação e contexto.",
            "incorreta somente quando a rede exigir parte diversificada ou conteúdos complementares."
        ],
        "correta": 3,
        "explicacao": "A BNCC é referência obrigatória, mas não substitui o projeto ou proposta pedagógica da escola.",
        "feedbackAcerto": "Correto. A escola precisa contextualizar as aprendizagens e organizar suas práticas, tempos, metodologias e projetos.",
        "feedbackErro": "O erro é tratar a BNCC como documento pronto que elimina autonomia pedagógica.",
        "dicaBanca": "BNCC não substitui PPP."
    },
    {
        "pergunta": "Uma prática pedagógica coerente com a competência de argumentação é:",
        "alternativas": [
            "solicitar que os estudantes apresentem opiniões pessoais sem necessidade de dados, fontes ou justificativas.",
            "avaliar principalmente a capacidade de repetir os argumentos apresentados previamente pelo professor.",
            "pedir ao estudante que defenda posição utilizando dados confiáveis, examinando fontes e respeitando direitos humanos.",
            "estimular compartilhamento de informações e argumentos mesmo quando não houver verificação de sua confiabilidade.",
            "evitar debates com posições diferentes para impedir conflitos e facilitar a construção de consenso."
        ],
        "correta": 2,
        "explicacao": "A competência 7 envolve argumentação fundamentada, análise de informações e posicionamento ético.",
        "feedbackAcerto": "Correto. O foco não é apenas falar bem, mas sustentar posições com evidências confiáveis.",
        "feedbackErro": "O erro é confundir argumentar com impor opinião ou reproduzir discurso.",
        "dicaBanca": "Questões contextualizadas da Ágata costumam transformar competências em situações de sala."
    },
    {
        "pergunta": "Uma atividade em que estudantes produzem um vídeo, avaliam fontes digitais, respeitam autoria e refletem sobre impactos das redes desenvolve especialmente:",
        "alternativas": [
            "somente autoconhecimento.",
            "apenas repertório cultural.",
            "cultura digital.",
            "apenas cálculo.",
            "exclusivamente educação física."
        ],
        "correta": 2,
        "explicacao": "A situação mobiliza compreensão, produção e uso crítico, significativo e ético de tecnologias digitais.",
        "feedbackAcerto": "Correto. Isso vai além do uso instrumental de um aparelho e entra no campo da cultura digital.",
        "feedbackErro": "O erro é marcar comunicação apenas porque há vídeo; o enunciado destaca também crítica, autoria e ética digital.",
        "dicaBanca": "Observe qual competência predomina no contexto."
    },
    {
        "pergunta": "Uma escola promove projeto em que estudantes investigam qualidade da água local, formulam hipóteses, analisam dados e propõem soluções. A competência geral mais diretamente mobilizada é:",
        "alternativas": [
            "trabalho e projeto de vida, por relacionar investigação científica com escolhas futuras e inserção profissional.",
            "repertório cultural, por envolver conhecimentos da comunidade e valorização do território onde vivem os estudantes.",
            "autoconhecimento e autocuidado, por exigir reflexão sobre atitudes individuais diante dos problemas ambientais.",
            "comunicação, por envolver apresentação de resultados e troca de informações durante o desenvolvimento do projeto.",
            "pensamento científico, crítico e criativo, pela investigação de problemas, formulação de hipóteses, análise de dados e proposição de soluções."
        ],
        "correta": 4,
        "explicacao": "A atividade envolve investigação, hipótese, análise de dados e resolução de problemas.",
        "feedbackAcerto": "Correto. Esses elementos caracterizam diretamente a competência 2.",
        "feedbackErro": "Se você marcou comunicação, percebeu uma competência também presente, mas não a principal evidenciada pelo enunciado.",
        "dicaBanca": "Ágata pode perguntar a competência predominante em uma situação."
    },
    {
        "pergunta": "Na Educação Infantil, organizar uma sequência diária totalmente rígida, sem considerar interesses, iniciativas ou tempos das crianças:",
        "alternativas": [
            "é sempre coerente com a BNCC, pois a organização rígida garante previsibilidade e disciplina para todas as crianças.",
            "pode contrariar a concepção de criança ativa e os direitos de participar, explorar e expressar previstos para a etapa.",
            "é exigência da competência de responsabilidade e cidadania, aplicada desde a Educação Infantil.",
            "é condição necessária para garantir o direito de brincar de forma organizada e segura durante a rotina.",
            "substitui a necessidade de intencionalidade educativa porque todas as atividades já ficam previamente estruturadas."
        ],
        "correta": 1,
        "explicacao": "A rotina deve ser intencional e organizada, mas precisa acolher participação, exploração e expressão das crianças.",
        "feedbackAcerto": "Correto. Planejamento não significa rigidez absoluta nem silenciamento da iniciativa infantil.",
        "feedbackErro": "O erro é confundir intencionalidade pedagógica com controle integral de todas as ações.",
        "dicaBanca": "BNCC equilibra planejamento docente e protagonismo infantil."
    },
    {
        "pergunta": "Na transição para o Ensino Fundamental, registros e portfólios da Educação Infantil podem ser utilizados:",
        "alternativas": [
            "para classificar as crianças por desempenho antes do ingresso no Ensino Fundamental.",
            "para fundamentar decisões de reprovação ou retenção ao final da Educação Infantil.",
            "como elementos para compreender trajetórias e dar continuidade às aprendizagens, sem finalidade de promoção.",
            "como substitutos de toda observação pedagógica realizada pelos professores do Ensino Fundamental.",
            "apenas para arquivo administrativo, sem relação com a transição entre as etapas."
        ],
        "correta": 2,
        "explicacao": "A documentação pedagógica pode apoiar a continuidade entre etapas sem transformar a Educação Infantil em etapa classificatória.",
        "feedbackAcerto": "Correto. Os registros ajudam a nova equipe a conhecer processos vividos pelas crianças.",
        "feedbackErro": "O erro é atribuir função seletiva ou promocional a registros que devem apoiar continuidade pedagógica.",
        "dicaBanca": "Transição = continuidade, não seleção."
    },
    {
        "pergunta": "Em uma escola inclusiva, a aplicação da BNCC ao estudante público da Educação Especial:",
        "alternativas": [
            "é dispensada quando existe PEI, porque o plano individual passa a substituir as aprendizagens comuns.",
            "depende da ausência de deficiência intelectual e da possibilidade de acompanhar o currículo regular sem adaptação.",
            "deve ser substituída por currículo exclusivamente funcional sempre que houver necessidade de apoio especializado.",
            "permanece como referência curricular, com apoios, acessibilidade e estratégias necessários à participação e aprendizagem.",
            "ocorre somente no AEE, ficando a classe comum responsável apenas pela socialização e convivência."
        ],
        "correta": 3,
        "explicacao": "A legislação inclusiva atual mantém as referências curriculares da Educação Básica para estudantes público da Educação Especial.",
        "feedbackAcerto": "Correto. O PEI e os apoios organizam condições de acesso ao currículo; não anulam a BNCC.",
        "feedbackErro": "O erro é criar automaticamente um currículo paralelo apenas em razão da deficiência.",
        "dicaBanca": "BNCC + acessibilidade + individualização pedagógica."
    },
    {
        "pergunta": "Uma habilidade da BNCC:",
        "alternativas": [
            "obriga todos os professores a utilizar a mesma atividade, metodologia e sequência didática para garantir comparabilidade.",
            "proíbe contextualização regional para preservar a equivalência nacional das aprendizagens essenciais.",
            "define uma única forma de avaliação para verificar se o estudante desenvolveu a aprendizagem esperada.",
            "substitui o planejamento docente ao indicar diretamente as atividades que devem ser aplicadas em sala de aula.",
            "pode ser desenvolvida por diferentes metodologias, recursos e sequências didáticas, conforme o currículo e o contexto."
        ],
        "correta": 4,
        "explicacao": "A BNCC define aprendizagens esperadas, mas não fixa uma metodologia única para alcançá-las.",
        "feedbackAcerto": "Correto. Redes e professores têm espaço para contextualização e escolhas pedagógicas coerentes com os objetivos.",
        "feedbackErro": "O erro é interpretar normatividade das aprendizagens como padronização de métodos.",
        "dicaBanca": "Obrigatória é a aprendizagem essencial, não uma aula-modelo."
    },
    {
        "pergunta": "Após a atualização da LDB pela Lei nº 15.468/2026, passou a constituir componente curricular obrigatório no âmbito do estudo da realidade social e política:",
        "alternativas": [
            "programação computacional em todas as etapas.",
            "empreendedorismo obrigatório.",
            "educação política e direitos da cidadania.",
            "educação financeira como disciplina autônoma obrigatória.",
            "direito empresarial."
        ],
        "correta": 2,
        "explicacao": "A Lei nº 15.468/2026 acrescentou ao art. 26 da LDB a educação política e direitos da cidadania como componente curricular obrigatório nesse âmbito.",
        "feedbackAcerto": "Correto. Essa é uma atualização curricular de 2026 que deve ser incorporada à preparação para provas futuras.",
        "feedbackErro": "Se você marcou uma novidade plausível, mas não prevista nessa lei, caiu em distrator de atualização legislativa.",
        "dicaBanca": "Conteúdo novo de 2026: alto valor para revisão."
    },
    {
        "pergunta": "Sobre BNCC e currículo, assinale a alternativa correta:",
        "alternativas": [
            "BNCC e currículo são sinônimos e possuem a mesma função normativa em todas as redes e escolas.",
            "o currículo pode substituir as aprendizagens da BNCC por conteúdos locais sempre que a rede considerar necessário.",
            "a BNCC define aprendizagens essenciais; os currículos concretizam e contextualizam essas aprendizagens considerando redes, escolas e territórios.",
            "a BNCC determina materiais, metodologias e avaliações que devem ser adotados por todas as instituições.",
            "a parte diversificada do currículo substitui as aprendizagens essenciais quando houver características regionais específicas."
        ],
        "correta": 2,
        "explicacao": "A BNCC é referência normativa para aprendizagens; currículo é a concretização contextualizada dessas orientações.",
        "feedbackAcerto": "Correto. Essa distinção explica como pode haver unidade nacional sem eliminar diversidade local.",
        "feedbackErro": "O erro é transformar a Base em currículo pronto ou permitir que o currículo ignore as aprendizagens essenciais.",
        "dicaBanca": "Uma das pegadinhas mais importantes: BNCC ≠ currículo."
    },
    {
        "pergunta": "Assinale a alternativa que melhor sintetiza a relação entre Diretrizes Curriculares Nacionais e BNCC:",
        "alternativas": [
            "as DCNs orientam princípios e organização da Educação Básica, enquanto a BNCC explicita aprendizagens essenciais e competências, e ambas orientam currículos e práticas.",
            "a BNCC revogou as Diretrizes Curriculares Nacionais e passou a ser o único documento normativo curricular da Educação Básica.",
            "as DCNs tratam apenas da administração e organização escolar, sem relação com currículo, formação e práticas pedagógicas.",
            "a BNCC possui caráter facultativo, enquanto as DCNs constituem o único referencial obrigatório para a organização curricular.",
            "DCNs e BNCC possuem exatamente a mesma função, estrutura e conteúdo, diferenciando-se apenas pela data de publicação."
        ],
        "correta": 0,
        "explicacao": "DCNs e BNCC são referências normativas complementares: as Diretrizes oferecem princípios e orientações gerais; a Base detalha aprendizagens essenciais.",
        "feedbackAcerto": "Correto. Os documentos se complementam e não devem ser tratados como concorrentes ou idênticos.",
        "feedbackErro": "O erro é afirmar que um documento eliminou o outro ou que possuem a mesma função.",
        "dicaBanca": "Questão-síntese ideal para fechar o tópico."
    }
];

if (typeof window !== 'undefined') { window.apoioBNCCDiretrizes = apoioBNCCDiretrizes; }
