// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// ORGANIZAÇÃO DA EDUCAÇÃO BÁSICA — LDB ATUALIZADA
// SEGUNDA AUDITORIA DE DISTRATORES — 2026
// 50 questões — 5 alternativas — padrão Instituto Ágata.
// Distratores harmonizados para evitar pista pelo comprimento.
// ============================================================

const apoioOrganizacaoEducacao = [
    {
        "pergunta": "A educação escolar brasileira compõe-se de:",
        "alternativas": [
            "ensino médio e educação superior.",
            "educação infantil e ensino fundamental.",
            "ensino fundamental e ensino médio.",
            "educação básica e educação profissional.",
            "educação básica e educação superior."
        ],
        "correta": 4,
        "explicacao": "A LDB divide a educação escolar em educação básica e educação superior.",
        "feedbackAcerto": "Correto. Você identificou os dois níveis que compõem a educação escolar na LDB.",
        "feedbackErro": "Não confunda níveis com etapas. Educação infantil, fundamental e médio são etapas da educação básica.",
        "dicaBanca": "Ágata pode trocar nível, etapa e modalidade."
    },
    {
        "pergunta": "A educação básica é formada por:",
        "alternativas": [
            "educação infantil, ensino fundamental e ensino médio.",
            "creche, pré-escola e graduação.",
            "ensino fundamental, médio e superior.",
            "pré-escola, fundamental e EJA.",
            "educação infantil e ensino fundamental."
        ],
        "correta": 0,
        "explicacao": "O art. 21 da LDB reúne educação infantil, ensino fundamental e ensino médio na educação básica.",
        "feedbackAcerto": "Correto. São exatamente as três etapas da educação básica.",
        "feedbackErro": "Creche e pré-escola são subdivisões da educação infantil, e educação superior é outro nível.",
        "dicaBanca": "Memorize: EI + EF + EM."
    },
    {
        "pergunta": "Entre as finalidades da educação básica está:",
        "alternativas": [
            "selecionar estudantes para prosseguimento obrigatório no ensino superior.",
            "priorizar avaliações classificatórias como finalidade central da escolarização.",
            "preparar o estudante exclusivamente para ingresso imediato no mercado de trabalho.",
            "uniformizar trajetórias escolares e reduzir diferenças entre os percursos formativos.",
            "desenvolver o educando e assegurar formação comum para o exercício da cidadania."
        ],
        "correta": 4,
        "explicacao": "O art. 22 relaciona desenvolvimento do educando, cidadania, trabalho e estudos posteriores.",
        "feedbackAcerto": "Correto. A finalidade é ampla e formativa, não apenas profissional ou seletiva.",
        "feedbackErro": "Alternativas que reduzem a educação básica ao mercado ou à seleção distorcem o art. 22.",
        "dicaBanca": "Finalidades do art. 22 são cobrança literal possível."
    },
    {
        "pergunta": "A LDB estabelece como objetivos precípuos da educação básica:",
        "alternativas": [
            "alfabetização plena e formação de leitores.",
            "alfabetização digital e ensino técnico.",
            "formação profissional e seleção.",
            "avaliação externa e promoção.",
            "leitura e preparação militar."
        ],
        "correta": 0,
        "explicacao": "A alfabetização plena e a formação de leitores foram incluídas expressamente no art. 22.",
        "feedbackAcerto": "Correto. Esses dois objetivos aparecem hoje de forma explícita na LDB.",
        "feedbackErro": "Não acrescente objetivos plausíveis que a redação legal não apresenta nesse dispositivo.",
        "dicaBanca": "Atualização relativamente recente e boa para prova."
    },
    {
        "pergunta": "A educação básica pode organizar-se em:",
        "alternativas": [
            "exclusivamente em séries anuais organizadas segundo a idade cronológica.",
            "em modelo nacional único definido pela União para todas as redes de ensino.",
            "em séries, semestres, ciclos e outras formas admitidas pela LDB.",
            "somente em períodos semestrais, desde que mantida a carga horária anual.",
            "apenas em ciclos de aprendizagem, vedada a organização por séries."
        ],
        "correta": 2,
        "explicacao": "O art. 23 admite diferentes formas de organização quando o processo de aprendizagem recomendar.",
        "feedbackAcerto": "Correto. A LDB oferece flexibilidade organizacional aos sistemas e escolas.",
        "feedbackErro": "O distrator tenta transformar uma lista aberta em modelo único.",
        "dicaBanca": "Art. 23: flexibilidade é a ideia central."
    },
    {
        "pergunta": "O calendário escolar pode adequar-se:",
        "alternativas": [
            "somente às condições climáticas previstas para o território do sistema de ensino.",
            "apenas às férias nacionais e aos feriados oficialmente previstos no calendário.",
            "somente mediante autorização específica da União para cada alteração realizada.",
            "livremente às peculiaridades locais, ainda que isso reduza a carga horária mínima.",
            "às peculiaridades locais, sem reduzir o número mínimo de horas letivas exigidas."
        ],
        "correta": 4,
        "explicacao": "A LDB permite adequação às peculiaridades locais, inclusive climáticas e econômicas, sem redução das horas letivas.",
        "feedbackAcerto": "Correto. A flexibilidade do calendário preserva a carga horária exigida.",
        "feedbackErro": "A pegadinha é aceitar adaptação local com redução das horas previstas em lei.",
        "dicaBanca": "Flexibilidade não significa redução da carga."
    },
    {
        "pergunta": "A classificação em série ou etapa, exceto a primeira do ensino fundamental, pode ocorrer:",
        "alternativas": [
            "somente por promoção, desde que o estudante tenha cursado a etapa imediatamente anterior.",
            "apenas por avaliação nacional aplicada pelo respectivo sistema de ensino.",
            "exclusivamente por transferência de estabelecimento situado no mesmo sistema de ensino.",
            "por promoção, transferência ou avaliação realizada pela escola, nas condições previstas pela LDB.",
            "somente com base na idade cronológica e no histórico escolar apresentado."
        ],
        "correta": 3,
        "explicacao": "O art. 24 admite promoção, transferência e classificação mediante avaliação, nas condições legais.",
        "feedbackAcerto": "Correto. A LDB prevê mais de uma forma de classificação.",
        "feedbackErro": "Se marcou apenas promoção, restringiu indevidamente as possibilidades previstas.",
        "dicaBanca": "Observe a exceção da primeira série/etapa do fundamental."
    },
    {
        "pergunta": "Na verificação do rendimento escolar, a LDB determina:",
        "alternativas": [
            "prevalência dos resultados obtidos nas provas finais sobre os resultados do período.",
            "realização de uma única avaliação anual com função classificatória e cumulativa.",
            "avaliação predominantemente quantitativa, baseada em médias e resultados numéricos.",
            "avaliação contínua e cumulativa, com prevalência dos aspectos qualitativos e do percurso escolar.",
            "aprovação automática sempre que houver frequência mínima exigida pela legislação."
        ],
        "correta": 3,
        "explicacao": "A avaliação deve ser contínua e cumulativa, valorizando aspectos qualitativos e resultados ao longo do período.",
        "feedbackAcerto": "Correto. A LDB privilegia acompanhamento processual em relação a provas isoladas.",
        "feedbackErro": "Não confunda avaliação contínua com aprovação automática; são conceitos distintos.",
        "dicaBanca": "Qualitativo > quantitativo é formulação clássica."
    },
    {
        "pergunta": "Os estudos de recuperação devem ser oferecidos:",
        "alternativas": [
            "apenas ao fim do ano.",
            "apenas mediante pedido familiar.",
            "preferencialmente paralelos ao período letivo.",
            "somente após reprovação.",
            "exclusivamente no contraturno."
        ],
        "correta": 2,
        "explicacao": "A LDB prevê estudos de recuperação, de preferência paralelos ao período letivo.",
        "feedbackAcerto": "Correto. A recuperação deve ocorrer durante o processo, sempre que possível.",
        "feedbackErro": "A expressão legal é 'de preferência paralelos'; não é apenas recuperação final.",
        "dicaBanca": "Ágata costuma explorar 'preferencialmente'."
    },
    {
        "pergunta": "Para aprovação, a frequência mínima exigida pela LDB no ensino fundamental e médio é de:",
        "alternativas": [
            "75% das horas letivas.",
            "60% das horas letivas.",
            "70% das horas letivas.",
            "80% das horas letivas.",
            "50% das horas letivas."
        ],
        "correta": 0,
        "explicacao": "A regra geral do art. 24 exige frequência mínima de 75% do total de horas letivas.",
        "feedbackAcerto": "Correto. Você diferenciou a frequência do fundamental/médio da regra própria da pré-escola.",
        "feedbackErro": "Não confunda 75% do fundamental e médio com 60% exigidos na pré-escola.",
        "dicaBanca": "Par numérico importante: pré-escola 60%; EF/EM 75%."
    },
    {
        "pergunta": "A educação infantil é:",
        "alternativas": [
            "primeira etapa da educação básica.",
            "modalidade exclusiva da rede municipal.",
            "primeiro nível da educação superior.",
            "etapa facultativa após os seis anos.",
            "modalidade complementar."
        ],
        "correta": 0,
        "explicacao": "O art. 29 define a educação infantil como primeira etapa da educação básica.",
        "feedbackAcerto": "Correto. A posição da educação infantil na estrutura educacional está correta.",
        "feedbackErro": "Modalidade e etapa não são sinônimos; aqui a lei usa expressamente 'primeira etapa'.",
        "dicaBanca": "Questão curta e literal é comum em legislação."
    },
    {
        "pergunta": "A finalidade da educação infantil é o desenvolvimento integral da criança de até cinco anos em aspectos:",
        "alternativas": [
            "cognitivo e profissional.",
            "apenas físico e intelectual.",
            "físico, psicológico, intelectual e social.",
            "somente social e emocional.",
            "físico e disciplinar."
        ],
        "correta": 2,
        "explicacao": "O art. 29 menciona desenvolvimento físico, psicológico, intelectual e social.",
        "feedbackAcerto": "Correto. A educação infantil trabalha desenvolvimento integral e complementa família e comunidade.",
        "feedbackErro": "Evite alternativas que reduzam desenvolvimento integral a duas dimensões.",
        "dicaBanca": "Memorize as quatro dimensões."
    },
    {
        "pergunta": "As creches destinam-se, segundo a LDB, a crianças:",
        "alternativas": [
            "de quatro a cinco anos.",
            "de até três anos.",
            "de cinco a seis anos.",
            "de zero a cinco anos sem distinção.",
            "a partir dos seis anos."
        ],
        "correta": 1,
        "explicacao": "O art. 30 destina creches ou entidades equivalentes às crianças de até três anos.",
        "feedbackAcerto": "Correto. Você diferenciou creche de pré-escola.",
        "feedbackErro": "A faixa de quatro a cinco anos corresponde à pré-escola.",
        "dicaBanca": "Creche: até 3; pré-escola: 4 e 5."
    },
    {
        "pergunta": "A pré-escola atende crianças:",
        "alternativas": [
            "de quatro a cinco anos.",
            "de até três anos.",
            "de cinco a sete anos.",
            "de três a seis anos.",
            "a partir de seis anos."
        ],
        "correta": 0,
        "explicacao": "A pré-escola atende crianças de quatro e cinco anos.",
        "feedbackAcerto": "Correto. Essa faixa integra a educação infantil e já está na educação básica obrigatória.",
        "feedbackErro": "Não use faixas históricas antigas; a redação atual é quatro a cinco anos.",
        "dicaBanca": "Idades são distratores fáceis para a banca."
    },
    {
        "pergunta": "Na educação infantil, a avaliação ocorre:",
        "alternativas": [
            "com finalidade de promoção para o ensino fundamental, conforme o desempenho alcançado.",
            "por exames padronizados de abrangência nacional aplicados ao final da pré-escola.",
            "por acompanhamento e registro do desenvolvimento, sem objetivo de promoção para etapa seguinte.",
            "com retenção obrigatória da criança quando os objetivos previstos não forem alcançados.",
            "exclusivamente por provas semestrais e registros quantitativos de desempenho."
        ],
        "correta": 2,
        "explicacao": "O art. 31 determina acompanhamento e registro do desenvolvimento, sem finalidade de promoção.",
        "feedbackAcerto": "Correto. A avaliação acompanha processos de desenvolvimento e aprendizagem.",
        "feedbackErro": "A pegadinha é importar para a educação infantil uma lógica classificatória ou de promoção.",
        "dicaBanca": "Educação infantil: acompanhar, registrar, não promover."
    },
    {
        "pergunta": "A carga horária mínima anual da educação infantil é de:",
        "alternativas": [
            "600 horas em 180 dias.",
            "800 horas em 200 dias.",
            "800 horas em 180 dias.",
            "700 horas em 200 dias.",
            "1.000 horas em 200 dias."
        ],
        "correta": 1,
        "explicacao": "A LDB estabelece 800 horas distribuídas por no mínimo 200 dias de trabalho educacional.",
        "feedbackAcerto": "Correto. Você acertou simultaneamente carga horária e número mínimo de dias.",
        "feedbackErro": "Não confunda com a carga do ensino médio, que sofreu alterações próprias.",
        "dicaBanca": "EI: 800 horas / 200 dias."
    },
    {
        "pergunta": "Na educação infantil, o atendimento diário mínimo é de:",
        "alternativas": [
            "4h parcial e 7h integral.",
            "5h parcial e 8h integral.",
            "4h parcial e 8h integral.",
            "5h parcial e 7h integral.",
            "3h parcial e 6h integral."
        ],
        "correta": 0,
        "explicacao": "A LDB fixa quatro horas para turno parcial e sete horas para jornada integral.",
        "feedbackAcerto": "Correto. Esses números são literais do art. 31.",
        "feedbackErro": "Os distratores alteram apenas uma das cargas para testar atenção.",
        "dicaBanca": "Par numérico: 4h parcial / 7h integral."
    },
    {
        "pergunta": "Na pré-escola, a frequência mínima exigida é de:",
        "alternativas": [
            "50%.",
            "80%.",
            "70%.",
            "60%.",
            "75%."
        ],
        "correta": 3,
        "explicacao": "O controle de frequência da pré-escola exige mínimo de 60% do total de horas.",
        "feedbackAcerto": "Correto. A regra específica da pré-escola é 60%.",
        "feedbackErro": "Se marcou 75%, aplicou indevidamente a regra do fundamental e médio.",
        "dicaBanca": "Compare: pré-escola 60%; EF/EM 75%."
    },
    {
        "pergunta": "A documentação expedida na educação infantil deve permitir:",
        "alternativas": [
            "classificar a criança para o fundamental.",
            "definir aprovação ou reprovação.",
            "atestar processos de desenvolvimento e aprendizagem.",
            "substituir registros pedagógicos.",
            "selecionar turmas por desempenho."
        ],
        "correta": 2,
        "explicacao": "A documentação deve atestar os processos de desenvolvimento e aprendizagem da criança.",
        "feedbackAcerto": "Correto. Ela registra a trajetória sem assumir função classificatória.",
        "feedbackErro": "Não transforme documentação pedagógica em boletim de promoção.",
        "dicaBanca": "Avaliação e documentação da EI têm caráter de acompanhamento."
    },
    {
        "pergunta": "O ensino fundamental obrigatório tem duração de:",
        "alternativas": [
            "10 anos, iniciando aos 6.",
            "8 anos, iniciando aos 7.",
            "9 anos, iniciando aos 5.",
            "9 anos, iniciando aos 6.",
            "8 anos, iniciando aos 6."
        ],
        "correta": 3,
        "explicacao": "O art. 32 fixa nove anos de duração e início aos seis anos.",
        "feedbackAcerto": "Correto. Esse é o formato vigente do ensino fundamental.",
        "feedbackErro": "Os distratores combinam duração e idade antigas ou incorretas.",
        "dicaBanca": "EF: 9 anos / início aos 6."
    },
    {
        "pergunta": "Entre os objetivos do ensino fundamental está:",
        "alternativas": [
            "especialização técnica precoce.",
            "formação profissional obrigatória.",
            "domínio de língua estrangeira apenas.",
            "seleção para o ensino médio.",
            "pleno domínio da leitura, escrita e cálculo."
        ],
        "correta": 4,
        "explicacao": "O desenvolvimento da capacidade de aprender tem leitura, escrita e cálculo como meios básicos.",
        "feedbackAcerto": "Correto. Essa finalidade aparece expressamente no art. 32.",
        "feedbackErro": "Não substitua formação básica por profissionalização precoce.",
        "dicaBanca": "Leitura + escrita + cálculo é trio literal."
    },
    {
        "pergunta": "O ensino fundamental deve favorecer a compreensão:",
        "alternativas": [
            "somente do ambiente natural e das relações da criança com o espaço físico.",
            "apenas dos valores familiares e dos conhecimentos transmitidos pela comunidade local.",
            "exclusivamente do sistema político e das instituições administrativas do país.",
            "somente de tecnologia, matemática e conteúdos relacionados ao mundo do trabalho.",
            "do ambiente natural e social, do sistema político, da tecnologia, das artes e dos valores sociais."
        ],
        "correta": 4,
        "explicacao": "O art. 32 reúne ambiente natural e social, sistema político, tecnologia, artes e valores sociais.",
        "feedbackAcerto": "Correto. O objetivo é amplo e integra diferentes dimensões da realidade.",
        "feedbackErro": "Os distratores recortam apenas uma parte da enumeração legal.",
        "dicaBanca": "Listas legais são alvo frequente de inversões."
    },
    {
        "pergunta": "No ensino fundamental, a jornada escolar incluirá pelo menos:",
        "alternativas": [
            "3 horas de trabalho efetivo.",
            "4 horas de trabalho efetivo em sala de aula.",
            "5 horas de permanência obrigatória.",
            "6 horas de atividades pedagógicas.",
            "7 horas de jornada integral."
        ],
        "correta": 1,
        "explicacao": "O art. 34 prevê pelo menos quatro horas de trabalho efetivo em sala, ressalvadas hipóteses legais.",
        "feedbackAcerto": "Correto. Quatro horas é a regra mínima geral do ensino fundamental.",
        "feedbackErro": "Não confunda jornada mínima do fundamental com jornada integral da educação infantil.",
        "dicaBanca": "Compare números entre etapas."
    },
    {
        "pergunta": "O ensino fundamental será ministrado progressivamente em tempo integral:",
        "alternativas": [
            "obrigatoriamente em todas as redes de imediato.",
            "a critério dos sistemas de ensino.",
            "somente na rede federal.",
            "apenas nas capitais.",
            "mediante autorização do MEC."
        ],
        "correta": 1,
        "explicacao": "A LDB prevê progressiva oferta em tempo integral, a critério dos sistemas de ensino.",
        "feedbackAcerto": "Correto. A lei combina direção de expansão com competência dos sistemas.",
        "feedbackErro": "O erro é transformar progressividade em obrigação imediata e uniforme.",
        "dicaBanca": "Atenção à expressão 'a critério dos sistemas'."
    },
    {
        "pergunta": "O ensino médio constitui:",
        "alternativas": [
            "primeira etapa da educação básica.",
            "nível independente da educação básica.",
            "modalidade do ensino fundamental.",
            "etapa final da educação básica.",
            "etapa da educação superior."
        ],
        "correta": 3,
        "explicacao": "O art. 35 define o ensino médio como etapa final da educação básica.",
        "feedbackAcerto": "Correto. A sequência das etapas foi corretamente identificada.",
        "feedbackErro": "Não confunda etapa final da educação básica com educação superior.",
        "dicaBanca": "EI primeira; EM final."
    },
    {
        "pergunta": "A duração mínima do ensino médio é de:",
        "alternativas": [
            "2 anos.",
            "4 anos.",
            "3 anos.",
            "5 anos.",
            "6 semestres obrigatórios apenas."
        ],
        "correta": 2,
        "explicacao": "A LDB estabelece duração mínima de três anos para o ensino médio.",
        "feedbackAcerto": "Correto. A duração mínima legal permanece três anos.",
        "feedbackErro": "Não confunda reorganizações curriculares com mudança da duração mínima da etapa.",
        "dicaBanca": "Questão objetiva de literalidade."
    },
    {
        "pergunta": "Atualmente, a carga horária mínima anual é, respectivamente, para ensino fundamental e ensino médio:",
        "alternativas": [
            "800h e 800h.",
            "1.000h e 1.000h.",
            "800h e 1.000h.",
            "1.000h e 800h.",
            "800h e 1.200h."
        ],
        "correta": 2,
        "explicacao": "O art. 24, após a Lei nº 14.945/2024, fixa 800 horas para o fundamental e 1.000 para o médio.",
        "feedbackAcerto": "Correto. Você aplicou a redação atualizada da LDB.",
        "feedbackErro": "Materiais antigos podem trazer 800 horas para ambos; para prova atual, use a redação vigente.",
        "dicaBanca": "Atualização importante: EF 800h / EM 1.000h."
    },
    {
        "pergunta": "As cargas mínimas anuais do fundamental e médio devem ser distribuídas por, no mínimo:",
        "alternativas": [
            "180 dias de efetivo trabalho escolar, independentemente da carga horária anual.",
            "200 dias de efetivo trabalho escolar, excluído o tempo reservado aos exames finais.",
            "210 dias letivos, incluídos os períodos destinados exclusivamente à recuperação final.",
            "190 dias de atividades escolares, desde que cumprida integralmente a carga horária.",
            "220 dias de efetivo trabalho escolar, salvo autorização do sistema de ensino."
        ],
        "correta": 1,
        "explicacao": "A regra geral mantém no mínimo duzentos dias de efetivo trabalho escolar.",
        "feedbackAcerto": "Correto. A carga anual varia entre etapas, mas o mínimo de dias permanece 200 nessa regra.",
        "feedbackErro": "Não associe aumento de horas do ensino médio a aumento automático do número mínimo de dias.",
        "dicaBanca": "200 dias é número clássico da LDB."
    },
    {
        "pergunta": "A educação básica obrigatória e gratuita abrange, em regra, a faixa etária:",
        "alternativas": [
            "zero a dezessete anos.",
            "quatro a quatorze anos.",
            "seis a quatorze anos.",
            "quatro a dezessete anos.",
            "cinco a dezoito anos."
        ],
        "correta": 3,
        "explicacao": "O dever estatal abrange educação básica obrigatória e gratuita dos quatro aos dezessete anos.",
        "feedbackAcerto": "Correto. A faixa inclui pré-escola, ensino fundamental e ensino médio.",
        "feedbackErro": "Zero a três anos têm direito à educação infantil gratuita, mas não integram a faixa de obrigatoriedade.",
        "dicaBanca": "Direito à creche ≠ escolaridade obrigatória."
    },
    {
        "pergunta": "O dever do Estado inclui educação infantil gratuita:",
        "alternativas": [
            "somente dos 4 aos 5 anos.",
            "a partir dos 6 anos.",
            "somente até 3 anos.",
            "apenas para famílias de baixa renda.",
            "às crianças de até 5 anos."
        ],
        "correta": 4,
        "explicacao": "O art. 4º garante educação infantil gratuita às crianças de até cinco anos.",
        "feedbackAcerto": "Correto. A gratuidade alcança creche e pré-escola.",
        "feedbackErro": "Não confunda gratuidade da educação infantil com obrigatoriedade, que começa aos quatro anos.",
        "dicaBanca": "Gratuidade e obrigatoriedade têm alcances diferentes."
    },
    {
        "pergunta": "Os programas suplementares de material didático, transporte, alimentação e assistência à saúde alcançam:",
        "alternativas": [
            "todas as etapas da educação básica.",
            "somente a educação infantil.",
            "apenas estudantes de baixa renda.",
            "somente o ensino fundamental.",
            "apenas ensino médio."
        ],
        "correta": 0,
        "explicacao": "A LDB prevê atendimento ao educando em todas as etapas da educação básica por esses programas.",
        "feedbackAcerto": "Correto. A redação atual não limita os programas ao ensino fundamental.",
        "feedbackErro": "Materiais antigos podem refletir redações anteriores mais restritas.",
        "dicaBanca": "Observe sempre 'todas as etapas'."
    },
    {
        "pergunta": "A oferta de ensino noturno regular deve ser:",
        "alternativas": [
            "restrita ao ensino médio.",
            "idêntica ao diurno em qualquer circunstância.",
            "adequada às condições do educando.",
            "facultativa aos sistemas.",
            "substituída por EJA."
        ],
        "correta": 2,
        "explicacao": "O dever estatal inclui ensino noturno regular adequado às condições do educando.",
        "feedbackAcerto": "Correto. A adequação às condições do estudante é elemento expresso da LDB.",
        "feedbackErro": "Ensino noturno e EJA não são sinônimos.",
        "dicaBanca": "Ágata pode explorar conceitos próximos para confundir."
    },
    {
        "pergunta": "A educação escolar para jovens e adultos deve considerar:",
        "alternativas": [
            "necessidades e disponibilidades dos educandos, especialmente trabalhadores.",
            "somente o currículo diurno.",
            "apenas a idade cronológica.",
            "apenas avaliação final.",
            "exclusivamente ensino a distância."
        ],
        "correta": 0,
        "explicacao": "A LDB exige características e modalidades adequadas às necessidades e disponibilidades dos jovens e adultos.",
        "feedbackAcerto": "Correto. A organização deve favorecer acesso e permanência, inclusive de trabalhadores.",
        "feedbackErro": "O erro é impor um formato único sem considerar condições concretas dos educandos.",
        "dicaBanca": "EJA é modalidade, não etapa."
    },
    {
        "pergunta": "Os Municípios devem oferecer prioritariamente:",
        "alternativas": [
            "educação profissional técnica de nível médio e cursos de formação inicial.",
            "ensino médio regular e educação profissional integrada, conforme a demanda local.",
            "educação superior pública municipal, com prioridade para cursos de licenciatura.",
            "educação infantil e, com prioridade, o ensino fundamental, nos termos da LDB.",
            "somente creches e pré-escolas, ficando o ensino fundamental a cargo dos Estados."
        ],
        "correta": 3,
        "explicacao": "A redação atual do art. 11 atribui aos Municípios educação infantil e prioridade ao ensino fundamental.",
        "feedbackAcerto": "Correto. A prioridade municipal permanece vinculada ao ensino fundamental.",
        "feedbackErro": "Não confunda prioridade com exclusividade absoluta de atuação.",
        "dicaBanca": "Competências dos entes são tema clássico."
    },
    {
        "pergunta": "Na redação atual de 2026, os Municípios devem oferecer educação infantil em creches e pré-escolas:",
        "alternativas": [
            "somente nas zonas urbanas, onde se concentra a maior parte da demanda educacional.",
            "apenas quando houver determinação judicial específica ou inexistência de vaga próxima.",
            "exclusivamente nas sedes municipais e nos distritos com maior densidade populacional.",
            "nas zonas urbanas e rurais, na proporção da distribuição populacional do Município.",
            "exclusivamente por convênios com entidades privadas quando a população residir em área rural."
        ],
        "correta": 3,
        "explicacao": "A Lei nº 15.369/2026 atualizou o art. 11 para explicitar oferta urbana e rural proporcional à distribuição populacional.",
        "feedbackAcerto": "Correto. Essa alteração é especialmente relevante para provas municipais futuras.",
        "feedbackErro": "Se seu material traz apenas 'oferecer educação infantil em creches e pré-escolas', ele pode estar desatualizado.",
        "dicaBanca": "Atualização de 2026: atenção para zona urbana e rural."
    },
    {
        "pergunta": "Os Estados incumbem-se prioritariamente de assegurar:",
        "alternativas": [
            "somente educação infantil, em colaboração com os Municípios e instituições comunitárias.",
            "apenas educação superior, ficando a educação básica integralmente a cargo dos Municípios.",
            "ensino fundamental e, com prioridade, o ensino médio, conforme as incumbências previstas na LDB.",
            "exclusivamente ensino médio, sem participação dos Estados no ensino fundamental.",
            "creches e pré-escolas, com atendimento prioritário às regiões metropolitanas."
        ],
        "correta": 2,
        "explicacao": "A LDB distribui responsabilidades entre os entes e atribui aos Estados atuação no fundamental e prioridade ao médio.",
        "feedbackAcerto": "Correto. A alternativa preserva a lógica federativa da LDB.",
        "feedbackErro": "Evite transformar prioridade em exclusividade: há articulação e regime de colaboração.",
        "dicaBanca": "Município: EF prioritário; Estado: EM prioritário."
    },
    {
        "pergunta": "O Distrito Federal exerce competências educacionais atribuídas:",
        "alternativas": [
            "somente aos Estados.",
            "aos Estados e aos Municípios.",
            "somente aos Municípios.",
            "apenas à União.",
            "exclusivamente ao sistema federal."
        ],
        "correta": 1,
        "explicacao": "A LDB determina aplicação ao Distrito Federal das competências referentes a Estados e Municípios.",
        "feedbackAcerto": "Correto. O DF acumula essas competências na organização educacional.",
        "feedbackErro": "Não escolha apenas uma esfera; a regra combina as duas.",
        "dicaBanca": "DF = competências estaduais + municipais."
    },
    {
        "pergunta": "Os estabelecimentos de ensino têm incumbência de:",
        "alternativas": [
            "definir sozinhos a LDB.",
            "elaborar e executar sua proposta pedagógica.",
            "legislar sobre o sistema estadual.",
            "autorizar outras escolas.",
            "fixar normas nacionais."
        ],
        "correta": 1,
        "explicacao": "O art. 12 atribui aos estabelecimentos elaborar e executar a proposta pedagógica.",
        "feedbackAcerto": "Correto. A escola possui responsabilidades próprias dentro das normas do sistema.",
        "feedbackErro": "Não confunda autonomia pedagógica com competência legislativa ou regulatória.",
        "dicaBanca": "Proposta pedagógica é incumbência direta da escola."
    },
    {
        "pergunta": "Também compete aos estabelecimentos de ensino:",
        "alternativas": [
            "credenciar universidades e autorizar cursos superiores de instituições privadas do sistema.",
            "nomear secretários municipais e definir a estrutura administrativa da secretaria de educação.",
            "administrar seu pessoal e seus recursos materiais e financeiros no âmbito da instituição.",
            "editar diretrizes curriculares nacionais e normas gerais obrigatórias para todos os sistemas.",
            "definir impostos e contribuições destinados ao financiamento das despesas educacionais."
        ],
        "correta": 2,
        "explicacao": "A administração de pessoal e recursos integra as incumbências da escola previstas na LDB.",
        "feedbackAcerto": "Correto. A organização escolar envolve dimensões pedagógicas e administrativas.",
        "feedbackErro": "Os demais itens pertencem a outras esferas de poder ou regulação.",
        "dicaBanca": "Art. 12 mistura deveres pedagógicos e administrativos."
    },
    {
        "pergunta": "Os docentes devem participar:",
        "alternativas": [
            "somente das avaliações externas.",
            "da elaboração da proposta pedagógica do estabelecimento.",
            "apenas da gestão financeira.",
            "da autorização de outras escolas.",
            "exclusivamente do conselho municipal."
        ],
        "correta": 1,
        "explicacao": "O art. 13 inclui participação dos docentes na elaboração da proposta pedagógica.",
        "feedbackAcerto": "Correto. O professor não é mero executor de um documento produzido sem sua participação.",
        "feedbackErro": "Não confunda participação pedagógica com competências administrativas do sistema.",
        "dicaBanca": "Art. 13 é muito cobrado em concursos escolares."
    },
    {
        "pergunta": "Entre as incumbências dos docentes está:",
        "alternativas": [
            "autorizar matrículas e transferências de estudantes independentemente das normas do sistema.",
            "definir individualmente o currículo nacional a ser adotado por toda a rede de ensino.",
            "credenciar a instituição escolar e autorizar seu funcionamento perante o sistema de ensino.",
            "elaborar e cumprir plano de trabalho em consonância com a proposta pedagógica da escola.",
            "aprovar o calendário municipal e fixar os períodos letivos das demais unidades escolares."
        ],
        "correta": 3,
        "explicacao": "O plano de trabalho docente deve estar alinhado à proposta pedagógica da escola.",
        "feedbackAcerto": "Correto. A LDB articula trabalho docente e projeto pedagógico.",
        "feedbackErro": "O erro é atribuir ao professor competências institucionais ou normativas que não são suas.",
        "dicaBanca": "Plano de trabalho ↔ proposta pedagógica."
    },
    {
        "pergunta": "Os sistemas de ensino devem definir normas de gestão democrática considerando:",
        "alternativas": [
            "participação apenas dos estudantes na escolha direta dos responsáveis pela gestão escolar.",
            "decisão exclusiva da direção da escola sobre todas as matérias pedagógicas e administrativas.",
            "adoção de modelo único definido nacionalmente, sem adaptação às normas de cada sistema.",
            "gestão restrita às questões financeiras e administrativas, sem participação pedagógica.",
            "participação dos profissionais da educação e das comunidades escolar e local nos processos de gestão."
        ],
        "correta": 4,
        "explicacao": "A LDB associa gestão democrática à participação dos profissionais e das comunidades escolar e local.",
        "feedbackAcerto": "Correto. A gestão democrática envolve participação, observadas as normas dos sistemas.",
        "feedbackErro": "O erro é reduzir democracia a uma única eleição ou a um único grupo.",
        "dicaBanca": "Gestão democrática é participação organizada."
    },
    {
        "pergunta": "A educação do campo deve considerar:",
        "alternativas": [
            "as peculiaridades da vida rural, de cada região e das populações atendidas.",
            "a adoção do mesmo calendário e da mesma organização escolar em todo o território nacional.",
            "a reprodução integral de currículos urbanos, sem adequações à realidade do campo.",
            "a eliminação de adaptações metodológicas relacionadas ao trabalho e à cultura local.",
            "a oferta prioritária de educação a distância em substituição às unidades escolares do campo."
        ],
        "correta": 0,
        "explicacao": "O art. 28 exige adaptações adequadas às peculiaridades da vida rural e regional.",
        "feedbackAcerto": "Correto. Organização, currículo e calendário podem ser contextualizados.",
        "feedbackErro": "O erro é interpretar igualdade como uniformidade absoluta entre contextos.",
        "dicaBanca": "Campo: contexto local importa."
    },
    {
        "pergunta": "Na educação do campo, o calendário escolar pode adequar-se:",
        "alternativas": [
            "às principais datas comerciais e festividades definidas pelo poder público local.",
            "às fases do ciclo agrícola e às condições climáticas próprias de cada região.",
            "somente ao calendário urbano estabelecido para as escolas situadas na sede municipal.",
            "apenas às férias nacionais e aos feriados previstos em calendário federal.",
            "às características locais, ainda que isso implique redução da carga horária legal."
        ],
        "correta": 1,
        "explicacao": "A LDB menciona expressamente ciclo agrícola e condições climáticas.",
        "feedbackAcerto": "Correto. A organização escolar pode dialogar com a realidade produtiva e climática local.",
        "feedbackErro": "A adequação não autoriza descumprir as exigências legais de carga horária.",
        "dicaBanca": "Questão literal do art. 28."
    },
    {
        "pergunta": "O fechamento de escola do campo, indígena ou quilombola exige previamente:",
        "alternativas": [
            "consulta exclusiva aos professores efetivos que atuam na unidade escolar atingida.",
            "decisão administrativa do prefeito ou do secretário municipal, independentemente de outros procedimentos.",
            "justificativa financeira acompanhada de estudo sobre custos de manutenção da unidade.",
            "autorização prévia do Ministério da Educação em todos os casos de fechamento de escola.",
            "manifestação do órgão normativo, análise do impacto e manifestação da comunidade escolar envolvida."
        ],
        "correta": 4,
        "explicacao": "A LDB estabelece procedimento prévio que inclui justificativa, diagnóstico de impacto e manifestação comunitária.",
        "feedbackAcerto": "Correto. O fechamento não pode ocorrer como decisão administrativa simples e isolada.",
        "feedbackErro": "Os distratores eliminam etapas relevantes do procedimento legal.",
        "dicaBanca": "Procedimento protetivo é tema de prova municipal."
    },
    {
        "pergunta": "A educação profissional e tecnológica, na estrutura da LDB:",
        "alternativas": [
            "substitui o ensino médio sempre que o estudante optar por formação profissional técnica.",
            "destina-se exclusivamente a pessoas adultas que já tenham concluído a educação básica.",
            "constitui etapa obrigatória da educação básica situada entre o ensino fundamental e o médio.",
            "integra apenas a educação superior e depende de ingresso por processo seletivo específico.",
            "é modalidade articulável a diferentes níveis e formas de educação, conforme a organização da LDB."
        ],
        "correta": 4,
        "explicacao": "A educação profissional e tecnológica articula-se com diferentes níveis e modalidades e com trabalho, ciência e tecnologia.",
        "feedbackAcerto": "Correto. Ela não constitui uma quarta etapa da educação básica.",
        "feedbackErro": "O erro é confundir modalidade/oferta formativa com etapa da educação básica.",
        "dicaBanca": "Etapa e modalidade novamente são o ponto-chave."
    },
    {
        "pergunta": "A Educação de Jovens e Adultos destina-se a quem:",
        "alternativas": [
            "articula-se a diferentes níveis e modalidades de educação e às dimensões do trabalho, ciência e tecnologia.",
            "é uma modalidade restrita ao ensino médio e desvinculada da educação superior.",
            "é uma etapa autônoma da educação básica voltada à formação para o trabalho.",
            "substitui a formação geral quando oferecida juntamente com o ensino médio.",
            "destina-se exclusivamente a estudantes adultos que já concluíram a educação básica."
        ],
        "correta": 0,
        "explicacao": "A educação profissional e tecnológica articula-se aos diferentes níveis e modalidades de educação e às dimensões do trabalho, da ciência e da tecnologia.",
        "feedbackAcerto": "Correto. Você reconheceu a natureza articulada da educação profissional e tecnológica sem transformá-la em etapa autônoma.",
        "feedbackErro": "Revise a posição da educação profissional na LDB: ela não constitui uma quarta etapa da educação básica nem se limita ao ensino médio ou aos adultos.",
        "dicaBanca": "A banca pode tentar transformar modalidade e articulação educacional em 'etapa' independente."
    },
    {
        "pergunta": "A educação especial, na organização educacional brasileira, é:",
        "alternativas": [
            "etapa posterior ao ensino médio destinada aos estudantes que necessitem de atendimento especializado.",
            "nível paralelo à educação básica, organizado de forma independente da escolarização comum.",
            "modalidade que substitui obrigatoriamente a classe comum quando houver deficiência ou TEA.",
            "serviço de natureza exclusivamente clínica, realizado por profissionais especializados fora da escola.",
            "modalidade oferecida preferencialmente na rede regular, transversal aos níveis, etapas e modalidades."
        ],
        "correta": 4,
        "explicacao": "A LDB caracteriza a educação especial como modalidade e prevê transversalidade do atendimento especializado.",
        "feedbackAcerto": "Correto. Educação especial não é uma etapa separada da educação básica.",
        "feedbackErro": "O erro é transformar uma modalidade transversal em nível ou sistema paralelo.",
        "dicaBanca": "Reforce a diferença entre nível, etapa e modalidade."
    },
    {
        "pergunta": "A educação básica pode organizar turmas com alunos de séries distintas para determinados componentes:",
        "alternativas": [
            "apenas em componentes de matemática, ciências e demais áreas com conteúdos cumulativos.",
            "sempre que houver falta de professor habilitado para organizar turmas regulares por série.",
            "somente na educação infantil, em atividades de natureza lúdica e de convivência.",
            "quando houver níveis equivalentes de adiantamento na matéria, nas hipóteses admitidas pela LDB.",
            "nunca, porque a legislação proíbe qualquer agrupamento de estudantes de séries diferentes."
        ],
        "correta": 3,
        "explicacao": "O art. 24 admite turmas com alunos de séries distintas em componentes como línguas estrangeiras e artes, entre outros.",
        "feedbackAcerto": "Correto. A LDB permite flexibilidade em situações específicas.",
        "feedbackErro": "O erro é tratar a seriação como estrutura absolutamente rígida.",
        "dicaBanca": "Questão de exceção costuma gerar bons distratores."
    },
    {
        "pergunta": "Uma escola pretende reduzir os dias letivos porque aumentará a duração diária das aulas. Pela regra geral da LDB:",
        "alternativas": [
            "pode reduzir livremente os dias letivos quando houver aumento proporcional da jornada diária.",
            "deve preservar o mínimo legal de dias de efetivo trabalho escolar e de carga horária aplicável.",
            "pode realizar a redução mediante autorização expressa dos pais ou responsáveis pelos estudantes.",
            "pode reduzir o calendário para 150 dias se mantiver integralmente a carga horária anual.",
            "depende apenas de aprovação do conselho escolar, sem necessidade de observar os mínimos legais."
        ],
        "correta": 1,
        "explicacao": "A carga horária e o mínimo de dias são requisitos próprios que devem ser observados.",
        "feedbackAcerto": "Correto. Aumentar horas por dia não autoriza, por si só, descumprir o mínimo anual de dias.",
        "feedbackErro": "A pegadinha é tratar horas e dias como requisitos intercambiáveis.",
        "dicaBanca": "Em prova, confira sempre os dois requisitos."
    }
];

if (typeof window !== 'undefined') { window.apoioOrganizacaoEducacao = apoioOrganizacaoEducacao; }
