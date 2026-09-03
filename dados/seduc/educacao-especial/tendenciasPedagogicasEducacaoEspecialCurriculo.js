/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 7: Tendências Pedagógicas na Prática da Educação Especial Integrada ao Currículo
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo e matriz FGV revisados em 02/09/2026.
========================================================== */

(function(){
    "use strict";
    const banco = [
    {
        "id": "SEDUC-EE-TEND-001",
        "numero": 1,
        "subtopico": "Tendências pedagógicas — leitura crítica",
        "dificuldade": "alta",
        "pergunta": "Ao discutir tendências pedagógicas e Educação Especial, uma equipe afirma que basta identificar a tendência 'correta' para garantir uma prática inclusiva. A interpretação mais adequada é",
        "alternativas": [
            "a classificação teórica define, por si só, se a prática será inclusiva, pois cada tendência possui efeitos pedagógicos fixos.",
            "a perspectiva inclusiva dispensa o estudo das tendências, porque o enfoque em direitos humanos tornaria secundárias as concepções de ensino, aprendizagem e currículo.",
            "as tendências orientam concepções e escolhas, mas a inclusão depende de como currículo, mediação, avaliação, acessibilidade e participação são concretizados.",
            "uma prática só pode ser inclusiva quando abandona conteúdos sistematizados e prioriza exclusivamente experiências espontâneas.",
            "a adoção de metodologias ativas garante inclusão mesmo quando permanecem barreiras de comunicação, avaliação e acesso ao currículo."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou que tendência pedagógica é referência para compreender escolhas docentes, não um selo automático de inclusão. A prática precisa ser analisada pelas condições reais de acesso, participação e aprendizagem.",
        "feedbackErro": "Nenhuma corrente pedagógica funciona como garantia automática. A FGV costuma exigir análise das consequências concretas da prática, especialmente quando uma proposta aparentemente moderna mantém barreiras.",
        "analiseAlternativas": [
            "Incorreta. Concepções influenciam a prática, mas seus efeitos dependem das decisões concretas do professor e da escola.",
            "Incorreta. A educação inclusiva exige também concepções de ensino, currículo, avaliação e aprendizagem coerentes com direitos e diversidade.",
            "Correta. A tendência orienta a ação, mas inclusão se verifica pela organização efetiva do currículo, dos apoios e da participação.",
            "Incorreta. A inclusão não exige abandonar conhecimentos sistematizados nem substituir intencionalidade por espontaneísmo.",
            "Incorreta. Metodologia ativa sem acessibilidade e participação pode continuar excluindo estudantes."
        ],
        "dicaBanca": "Se a alternativa transformar uma tendência em fórmula infalível, desconfie. A FGV prefere analisar a prática e seus efeitos.",
        "pegadinha": "'Moderna' ou 'ativa' não significa automaticamente inclusiva.",
        "memorizar2026": "Tendência orienta; inclusão se comprova na prática: acesso + participação + aprendizagem + acessibilidade.",
        "fonte": "FGV SEDUC-AM 2014; FGV Macaé 2024; Decreto nº 12.686/2025, arts. 2º a 4º."
    },
    {
        "id": "SEDUC-EE-TEND-002",
        "numero": 2,
        "subtopico": "Tendência tradicional",
        "dificuldade": "media",
        "pergunta": "Em uma sala, o professor organiza todas as aulas pela exposição oral, exige reprodução fiel do conteúdo e utiliza o mesmo instrumento de avaliação para todos, sem rever a prática diante de barreiras identificadas. A organização aproxima-se predominantemente da tendência",
        "alternativas": [
            "renovadora progressivista, pela centralidade das experiências do estudante.",
            "libertadora, pela problematização do conhecimento e diálogo horizontal.",
            "crítico-social dos conteúdos, pela mediação entre saber sistematizado e prática social.",
            "sociointeracionista, pela aprendizagem construída nas relações entre pares.",
            "tradicional, pela centralidade docente, transmissão e uniformização do percurso."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu traços clássicos da tendência tradicional: professor como centro, transmissão do conteúdo, disciplina e forte ênfase na reprodução. O problema inclusivo surge quando isso se associa à uniformização rígida e à manutenção de barreiras.",
        "feedbackErro": "A existência de conteúdo sistematizado não define sozinha a tendência tradicional. O conjunto do caso — centralidade do professor, reprodução e formato único — é decisivo.",
        "analiseAlternativas": [
            "Incorreta. A renovadora progressivista valoriza atividade, experiência e participação do estudante.",
            "Incorreta. A libertadora enfatiza diálogo, problematização e leitura crítica da realidade.",
            "Incorreta. A crítico-social valoriza conteúdos, mas articulados à realidade e com mediação intencional.",
            "Incorreta. O sociointeracionismo destaca mediação, linguagem e interação social.",
            "Correta. A descrição reúne centralidade docente, transmissão e homogeneização típicas da tendência tradicional."
        ],
        "dicaBanca": "A FGV pode usar 'conteúdo' como distração. Não confunda valorização do conhecimento com transmissão uniforme e passividade.",
        "pegadinha": "Conteúdo sistematizado não é sinônimo de tradicionalismo; observe a relação professor–aluno e a metodologia.",
        "memorizar2026": "Tradicional: professor-centro + transmissão + memorização + disciplina; na inclusão, cuidado com formato único.",
        "fonte": "FGV SEDUC-AM 2014; fundamentos das tendências pedagógicas brasileiras."
    },
    {
        "id": "SEDUC-EE-TEND-003",
        "numero": 3,
        "subtopico": "Tendência tecnicista",
        "dificuldade": "alta",
        "pergunta": "Uma proposta de ensino organiza objetivos comportamentais minuciosos, sequências padronizadas, controle de desempenho e procedimentos definidos para elevar eficiência e produtividade. Essa descrição corresponde, predominantemente, à tendência",
        "alternativas": [
            "renovadora não diretiva, centrada na autorrealização e nas relações interpessoais.",
            "tecnicista, marcada pela racionalização do ensino, controle de resultados e padronização de procedimentos.",
            "libertária, orientada pela autogestão do grupo e pela crítica às formas institucionais de poder.",
            "histórico-crítica, porque a definição de objetivos e o controle sistemático do desempenho seriam formas de garantir apropriação do conhecimento escolar.",
            "libertadora, cujo eixo é o diálogo problematizador sobre a realidade vivida pelos educandos."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou o tecnicismo pelo foco em eficiência, objetivos operacionais, padronização e controle do desempenho.",
        "feedbackErro": "A FGV já cobrou tendências pedagógicas relacionando descrições concretas a suas concepções. Aqui, o vocabulário de eficiência e controle é mais importante do que a simples presença de objetivos.",
        "analiseAlternativas": [
            "Incorreta. A não diretiva privilegia desenvolvimento pessoal e relações, não controle técnico do comportamento.",
            "Correta. Racionalização, objetivos operacionais, padronização e controle de resultados são marcas tecnicistas.",
            "Incorreta. A libertária enfatiza autogestão, participação e crítica à autoridade institucional.",
            "Incorreta. A histórico-crítica articula conhecimento sistematizado e transformação da prática social.",
            "Incorreta. A libertadora trabalha diálogo e problematização, não desenho instrucional padronizado."
        ],
        "dicaBanca": "Palavras como eficiência, produtividade, objetivos operacionais e controle costumam apontar para tecnicismo.",
        "pegadinha": "Uso de tecnologia não torna uma prática tecnicista; o núcleo é a racionalização e o controle do processo.",
        "memorizar2026": "Tecnicismo = eficiência + padronização + objetivos operacionais + controle de resultados.",
        "fonte": "FGV Macaé 2024 — Professor A/AEE; FGV SEDUC-AM 2014."
    },
    {
        "id": "SEDUC-EE-TEND-004",
        "numero": 4,
        "subtopico": "Renovadora progressivista / Escola Nova",
        "dificuldade": "alta",
        "pergunta": "Uma professora organiza situações-problema, experiências, investigação e atividades nas quais os estudantes participam ativamente da construção do percurso, atuando ela como orientadora do processo. A prática aproxima-se da tendência",
        "alternativas": [
            "tradicional, porque mantém intencionalidade e planejamento docente.",
            "tecnicista, porque utiliza objetivos e acompanhamento do desempenho.",
            "crítico-social dos conteúdos, necessariamente, porque toda atividade investigativa parte da prática social.",
            "renovadora progressivista, pela valorização da experiência, do aprender fazendo e da atividade do estudante.",
            "não diretiva, pois qualquer atuação do professor como orientador elimina a necessidade de objetivos curriculares."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu a renovadora progressivista pela centralidade da atividade do aluno, experiência, resolução de problemas e professor como orientador.",
        "feedbackErro": "Metodologia ativa pode aparecer em diferentes concepções. Nesta questão, o conjunto 'experiência + aprender fazendo + atividade do estudante' direciona para a renovadora progressivista.",
        "analiseAlternativas": [
            "Incorreta. Planejamento não caracteriza, por si só, tendência tradicional.",
            "Incorreta. Objetivos e acompanhamento podem existir em várias concepções; não há aqui foco em controle técnico.",
            "Incorreta. Investigação não basta para identificar a crítico-social; faltaria a articulação explícita com conhecimento e prática social.",
            "Correta. Experiência, atividade e resolução de problemas são marcas da renovadora progressivista.",
            "Incorreta. A não diretiva enfatiza relações e desenvolvimento pessoal, não ausência de objetivos curriculares."
        ],
        "dicaBanca": "Não classifique pela palavra 'atividade'. Leia quem decide, como se aprende e qual é a função do professor.",
        "pegadinha": "Metodologia ativa não pertence exclusivamente a uma tendência.",
        "memorizar2026": "Renovadora progressivista: aluno ativo + experiência + problema + professor orientador.",
        "fonte": "Tendências pedagógicas brasileiras; FGV SEDUC-AM 2014."
    },
    {
        "id": "SEDUC-EE-TEND-005",
        "numero": 5,
        "subtopico": "Progressista — crítico-social/histórico-crítica",
        "dificuldade": "alta",
        "pergunta": "Em uma proposta integrada ao currículo comum, o professor garante acesso ao conhecimento sistematizado, relaciona-o à realidade social dos estudantes e organiza mediações para que todos possam apropriar-se criticamente desse saber. Essa orientação é mais compatível com",
        "alternativas": [
            "uma perspectiva crítica do ensino, em que o conhecimento escolar é mediado e articulado à prática social, sem ser negado ao estudante com deficiência.",
            "uma orientação tecnicista, porque o domínio de conteúdos deve anteceder qualquer relação com a realidade social.",
            "uma prática não diretiva, na qual o professor evita interferir na construção do conhecimento para preservar autonomia.",
            "uma concepção tradicional, pois o acesso ao conhecimento sistematizado exigiria organização comum do ensino, ainda que articulada à realidade social dos estudantes.",
            "uma abordagem assistencialista, pois estudantes com deficiência precisam de conteúdos funcionais antes do currículo comum."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou que abordagens críticas não recusam o conhecimento sistematizado; defendem sua apropriação com mediação e vínculo com a prática social. Na Educação Especial inclusiva, isso reforça o direito ao currículo comum.",
        "feedbackErro": "O erro frequente é supor que inclusão exige retirar conteúdos ou que qualquer valorização de conhecimento sistematizado seja tradicional. A diferença está na mediação, no acesso e na finalidade social da aprendizagem.",
        "analiseAlternativas": [
            "Correta. A formulação articula conhecimento escolar, mediação e prática social, coerente com tendências críticas.",
            "Incorreta. O tecnicismo prioriza eficiência e controle, não a apropriação crítica vinculada à realidade social.",
            "Incorreta. A não diretiva reduz a intervenção docente e centra o desenvolvimento pessoal.",
            "Incorreta. Conteúdo sistematizado não basta para caracterizar tendência tradicional.",
            "Incorreta. Assistencialismo não justifica adiar ou negar acesso ao currículo comum."
        ],
        "dicaBanca": "FGV pode colocar 'conteúdo' em alternativas tradicional e crítica. Observe se há mediação, prática social e apropriação crítica.",
        "pegadinha": "Conhecimento sistematizado não é inimigo da inclusão; negar acesso a ele pode ser exclusão curricular.",
        "memorizar2026": "Perspectiva crítica: conhecimento + mediação + realidade social + transformação.",
        "fonte": "FGV SEDUC-AM 2014; Decreto nº 12.686/2025, art. 4º, §1º."
    },
    {
        "id": "SEDUC-EE-TEND-006",
        "numero": 6,
        "subtopico": "Constructivismo e sociointeracionismo — cuidado conceitual",
        "dificuldade": "alta",
        "pergunta": "Em uma questão sobre tendências e concepções pedagógicas, um candidato afirma que 'construtivismo' e 'sociointeracionismo' são categorias idênticas às tendências liberais e progressistas classificadas por Libâneo. A afirmação é",
        "alternativas": [
            "correta, pois toda teoria de aprendizagem corresponde diretamente a uma tendência pedagógica da mesma classificação histórica, desde que aplicada de modo coerente ao currículo escolar.",
            "correta apenas para o sociointeracionismo, que integra formalmente a tendência progressista libertadora.",
            "incorreta, pois são concepções de aprendizagem e desenvolvimento que orientam práticas, mas não equivalem à taxonomia clássica de tendências de Libâneo.",
            "incorreta apenas porque o construtivismo pertence exclusivamente à tendência tecnicista e o sociointeracionismo à tradicional.",
            "correta quando aplicadas à Educação Especial, pois a inclusão elimina diferenças entre classificações pedagógicas."
        ],
        "correta": 2,
        "feedbackAcerto": "Você evitou uma confusão conceitual importante. Constructivismo e sociointeracionismo orientam práticas, mas não são sinônimos das categorias clássicas de tendências liberais e progressistas.",
        "feedbackErro": "A FGV pode misturar tendências, teorias de aprendizagem e autores. O candidato precisa reconhecer aproximações sem transformar classificações diferentes em equivalentes.",
        "analiseAlternativas": [
            "Incorreta. Teoria de aprendizagem e tendência pedagógica não são categorias necessariamente coincidentes.",
            "Incorreta. Sociointeracionismo não é subcategoria formal da tendência libertadora na classificação de Libâneo.",
            "Correta. São referenciais distintos que podem dialogar com práticas pedagógicas sem se confundirem taxonomicamente.",
            "Incorreta. Essa associação não encontra fundamento teórico.",
            "Incorreta. A perspectiva inclusiva não apaga diferenças conceituais entre teorias e tendências."
        ],
        "dicaBanca": "A FGV gosta de misturar nomes conhecidos. Pergunte: é tendência pedagógica, teoria de aprendizagem, autor ou princípio inclusivo?",
        "pegadinha": "Não transforme aproximação teórica em equivalência de classificações.",
        "memorizar2026": "Libâneo = tendências pedagógicas; Piaget/Vygotsky = referenciais de aprendizagem e desenvolvimento que influenciam práticas.",
        "fonte": "Fundamentos de tendências pedagógicas e teorias da aprendizagem; matriz FGV 2024/2026."
    },
    {
        "id": "SEDUC-EE-TEND-007",
        "numero": 7,
        "subtopico": "Sociointeracionismo — mediação",
        "dificuldade": "alta",
        "pergunta": "Em uma turma inclusiva, o professor organiza atividades colaborativas, usa linguagem e recursos acessíveis, oferece mediação e cria oportunidades para que os estudantes aprendam também nas interações entre pares. A concepção de aprendizagem mais diretamente relacionada é a",
        "alternativas": [
            "behaviorista, porque a aprendizagem decorre principalmente da repetição de respostas reforçadas.",
            "tradicional, pois o grupo serve apenas para reproduzir o conteúdo apresentado pelo professor.",
            "não diretiva, porque a mediação do professor deveria ser progressivamente reduzida para que a interação entre os estudantes assumisse a função principal na construção do conhecimento.",
            "sociointeracionista, que atribui papel relevante à interação social, à linguagem e à mediação na construção das aprendizagens.",
            "tecnicista, pois a cooperação é um procedimento padronizado para aumentar produtividade acadêmica."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu elementos sociointeracionistas: aprendizagem mediada, interação, linguagem e participação de outros sujeitos no desenvolvimento.",
        "feedbackErro": "Atividade em grupo, sozinha, não garante sociointeracionismo. O enunciado destaca mediação e linguagem, que são pistas conceituais mais fortes.",
        "analiseAlternativas": [
            "Incorreta. O behaviorismo enfatiza estímulos, respostas e consequências, não a mediação social descrita.",
            "Incorreta. A tendência tradicional não atribui centralidade à construção conjunta do conhecimento.",
            "Incorreta. O professor aparece como mediador ativo, e não como presença reduzida ao mínimo.",
            "Correta. Interação, linguagem e mediação são elementos centrais do referencial sociointeracionista.",
            "Incorreta. A cooperação não está apresentada como técnica de produtividade e controle."
        ],
        "dicaBanca": "Quando aparecer 'mediação + linguagem + interação social', pense em Vygotsky/sociointeracionismo.",
        "pegadinha": "Grupo por grupo não basta; importa a qualidade da mediação e da interação.",
        "memorizar2026": "Sociointeracionismo = aprendizagem mediada socialmente + linguagem + interação.",
        "fonte": "Referencial sociointeracionista; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-TEND-008",
        "numero": 8,
        "subtopico": "Prática inclusiva — currículo comum",
        "dificuldade": "alta",
        "pergunta": "Uma escola afirma adotar uma pedagogia inclusiva, mas elabora para estudantes com deficiência um currículo permanente separado, com objetivos não relacionados ao que a turma estuda. A principal contradição está em",
        "alternativas": [
            "usar objetivos individualizados, pois todo planejamento inclusivo deve ser absolutamente idêntico para a turma.",
            "romper a referência do currículo comum e converter diferenciação pedagógica em percurso paralelo, reduzindo participação e acesso ao conhecimento.",
            "organizar qualquer apoio específico, pois a inclusão exige que o estudante aprenda sem recursos adicionais.",
            "planejar antecipadamente, pois adaptações só deveriam ocorrer após tentativa no currículo comum e comprovação pedagógica de que o estudante não alcança os objetivos previstos.",
            "utilizar avaliação diferenciada, porque instrumentos distintos sempre impedem comparação pedagógica entre estudantes."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a diferença entre acessibilizar o currículo comum e criar um percurso paralelo. A inclusão admite ajustes, recursos e formas diferentes de participação sem justificar exclusão curricular.",
        "feedbackErro": "A presença de adaptações não é o problema. O ponto crítico é desconectar o estudante do currículo comum de forma automática e permanente.",
        "analiseAlternativas": [
            "Incorreta. Planejamento pode conter estratégias individualizadas sem abandonar a referência curricular comum.",
            "Correta. Currículo paralelo pode produzir segregação pedagógica mesmo dentro da escola regular.",
            "Incorreta. Apoios e recursos são componentes legítimos da educação inclusiva.",
            "Incorreta. Antecipar barreiras é desejável; não é preciso esperar o fracasso.",
            "Incorreta. Diferenciar instrumentos pode ser necessário para garantir acesso ao mesmo objetivo."
        ],
        "dicaBanca": "FGV 2026 explorou a ideia de manter o estudante no mesmo tema e evitar tarefas isoladas e desconectadas.",
        "pegadinha": "Individualizar apoio não é individualizar toda a escolarização.",
        "memorizar2026": "Currículo inclusivo = referência comum + acessibilidade + flexibilizações e apoios quando necessários.",
        "fonte": "Decreto nº 12.686/2025, art. 4º, §1º; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-TEND-009",
        "numero": 9,
        "subtopico": "Metodologias ativas e inclusão",
        "dificuldade": "alta",
        "pergunta": "Uma coordenação determina o uso obrigatório de aprendizagem baseada em projetos em todas as turmas e conclui que, por ser metodologia ativa, a medida torna automaticamente as aulas inclusivas. Essa conclusão é",
        "alternativas": [
            "correta, pois metodologias ativas eliminam a necessidade de adaptações razoáveis e recursos de acessibilidade.",
            "correta desde que os projetos sejam avaliados por uma rubrica comum e organizados com os mesmos critérios de participação, preservando a igualdade formal entre os estudantes.",
            "incorreta apenas para estudantes que utilizam comunicação alternativa, por exigirem metodologia individualizada.",
            "incorreta, pois a metodologia pode favorecer participação, mas precisa de acessibilidade, flexibilidade e apoios para não reproduzir barreiras.",
            "correta quando o professor reduz sua mediação e permite que os grupos resolvam autonomamente todas as dificuldades."
        ],
        "correta": 3,
        "feedbackAcerto": "Você separou metodologia ativa de inclusão automática. Projetos podem ser inclusivos quando há intencionalidade, acessibilidade, mediação e participação efetiva.",
        "feedbackErro": "Uma estratégia pedagógica não é inclusiva apenas pelo nome. O critério é saber se todos conseguem acessar, participar, expressar-se e aprender.",
        "analiseAlternativas": [
            "Incorreta. Metodologia ativa não elimina necessidades de acessibilidade ou apoio.",
            "Incorreta. Rubrica única pode manter barreiras se não considerar meios acessíveis de demonstração.",
            "Incorreta. Comunicação alternativa pode integrar atividades coletivas e projetos.",
            "Correta. O potencial inclusivo depende do desenho acessível, flexível e mediado da proposta.",
            "Incorreta. Autonomia não significa ausência de mediação docente."
        ],
        "dicaBanca": "A FGV usa práticas 'modernas' que escondem rigidez. Pergunte sempre se há acesso e participação para todos.",
        "pegadinha": "Metodologia ativa sem acessibilidade pode continuar excludente.",
        "memorizar2026": "Inclusão não é o nome da metodologia; é a qualidade do acesso, participação e aprendizagem.",
        "fonte": "FGV SEDUC-SP 2026; Decreto nº 12.686/2025, arts. 2º a 4º."
    },
    {
        "id": "SEDUC-EE-TEND-010",
        "numero": 10,
        "subtopico": "Professor — mediação e intencionalidade",
        "dificuldade": "media",
        "pergunta": "Na prática pedagógica inclusiva, o papel do professor é melhor descrito como o de quem",
        "alternativas": [
            "planeja, medeia, observa evidências, diversifica estratégias e reorganiza apoios para garantir acesso ao currículo e aprendizagem.",
            "transfere ao AEE a responsabilidade pelos estudantes público da Educação Especial, mantendo o planejamento da classe comum estável para preservar a função específica de cada professor.",
            "reduz sua intervenção para que o estudante construa sozinho estratégias de superação das barreiras impostas pelo currículo.",
            "prioriza o diagnóstico clínico para definir previamente o teto de complexidade das atividades propostas.",
            "aplica a mesma metodologia a todos e oferece apoio apenas quando houver desempenho abaixo da média da turma."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu o professor como mediador e planejador de condições de aprendizagem. A prática inclusiva combina intencionalidade, acompanhamento e replanejamento.",
        "feedbackErro": "A inclusão não desloca a responsabilidade para o AEE nem exige ausência de intervenção. O professor comum continua responsável pelo ensino e articula apoios.",
        "analiseAlternativas": [
            "Correta. Planejamento, mediação, observação e replanejamento sustentam práticas inclusivas.",
            "Incorreta. AEE e classe comum têm funções articuladas; não há transferência integral de responsabilidade.",
            "Incorreta. Autonomia se constrói com apoios e mediação, não pelo abandono pedagógico.",
            "Incorreta. Diagnóstico não define sozinho expectativas ou possibilidades de aprendizagem.",
            "Incorreta. Uniformidade metodológica pode produzir barreiras."
        ],
        "dicaBanca": "Procure verbos de ação pedagógica: planejar, mediar, observar, adaptar e replanejar.",
        "pegadinha": "Professor mediador não é professor ausente.",
        "memorizar2026": "Docência inclusiva = intencionalidade + mediação + evidências + replanejamento.",
        "fonte": "Decreto nº 12.686/2025; FGV Caraguatatuba 2024; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-TEND-011",
        "numero": 11,
        "subtopico": "Avaliação formativa",
        "dificuldade": "alta",
        "pergunta": "Uma professora acompanha o progresso durante as atividades, registra estratégias utilizadas, oferece devolutivas e modifica o planejamento quando identifica barreiras. Essa avaliação é predominantemente",
        "alternativas": [
            "somativa, porque toda decisão baseada em resultados ocorre depois de uma etapa de ensino.",
            "classificatória, porque o registro contínuo do desempenho permite comparar resultados e organizar intervenções diferenciadas segundo níveis de aprendizagem.",
            "diagnóstica exclusivamente inicial, pois não deve ocorrer durante o processo de ensino.",
            "normativa, porque compara continuamente o estudante ao desempenho médio da turma.",
            "formativa, porque integra acompanhamento, feedback e reorientação do ensino ao longo do processo."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu a avaliação formativa como parte do processo: acompanha, informa intervenções e permite replanejar.",
        "feedbackErro": "A FGV já cobrou avaliação formativa em Educação Especial destacando continuidade e identificação de dificuldades e avanços.",
        "analiseAlternativas": [
            "Incorreta. A avaliação somativa sintetiza resultados e não é o foco do caso.",
            "Incorreta. O objetivo não é classificar estudantes, mas orientar o ensino.",
            "Incorreta. O caso enfatiza acompanhamento contínuo, não apenas diagnóstico inicial.",
            "Incorreta. O critério não é comparação com a média da turma.",
            "Correta. A avaliação acompanha evidências e orienta intervenções e replanejamento."
        ],
        "dicaBanca": "FGV Macaé 2024: formativa = contínua + identifica dificuldades e avanços + orienta o processo.",
        "pegadinha": "Registro não significa classificação; pode servir à avaliação formativa.",
        "memorizar2026": "Avaliação formativa: acompanhar → interpretar evidências → intervir → replanejar.",
        "fonte": "FGV Macaé 2024 — Professor A/AEE."
    },
    {
        "id": "SEDUC-EE-TEND-012",
        "numero": 12,
        "subtopico": "Ensino da turma toda — Mantoan",
        "dificuldade": "alta",
        "pergunta": "Com base na perspectiva do ensino da turma toda, assinale a prática mais coerente com a inclusão.",
        "alternativas": [
            "manter todos no mesmo tema, mas retirar estudantes com deficiência das atividades coletivas sempre que precisarem de apoio.",
            "organizar grupos por desempenho fixo para facilitar tarefas em níveis permanentes de complexidade.",
            "propor situações comuns de aprendizagem com diferentes recursos e formas de participação, preservando altas expectativas e pertencimento ao grupo.",
            "substituir objetivos curriculares por atividades funcionais sempre que o estudante apresentar ritmo mais lento.",
            "priorizar tarefas individuais para estudantes com deficiência quando isso favorecer concentração, retomando a interação com pares após a consolidação das habilidades previstas."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou a lógica do ensino da turma toda: atividade comum, participação de todos, diversidade de meios e manutenção de expectativas de aprendizagem.",
        "feedbackErro": "A perspectiva inclusiva não exige que todos façam tudo do mesmo jeito; exige pertencimento ao processo de aprendizagem e acesso aos apoios necessários.",
        "analiseAlternativas": [
            "Incorreta. Apoio específico não justifica retirada sistemática das atividades coletivas.",
            "Incorreta. Agrupamento fixo por desempenho pode cristalizar expectativas e segregação.",
            "Correta. Diferentes meios dentro de uma situação comum favorecem participação e aprendizagem.",
            "Incorreta. Ritmo diferente não autoriza substituição automática dos objetivos.",
            "Incorreta. Cooperação pode ser recurso legítimo de aprendizagem."
        ],
        "dicaBanca": "A FGV SEDUC-SP 2026 cobrou diretamente 'ensinar a turma toda', diversidade, cooperação e adaptação sem empobrecimento.",
        "pegadinha": "Mesmo tema não significa mesmo caminho.",
        "memorizar2026": "Ensinar a turma toda = não separar por deficiência + diversificar meios + manter participação e altas expectativas.",
        "fonte": "FGV SEDUC-SP 2026, questão baseada em Mantoan."
    },
    {
        "id": "SEDUC-EE-TEND-013",
        "numero": 13,
        "subtopico": "Currículo e BNCC/DCNs",
        "dificuldade": "alta",
        "pergunta": "A respeito da integração da Educação Especial ao currículo, analise as afirmativas.",
        "alternativas": [
            "I e III, apenas.",
            "II, apenas.",
            "I e II, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou que I e II são corretas. A BNCC e as diretrizes curriculares aplicam-se ao público da Educação Especial; adaptações razoáveis e acessibilidade apoiam o acesso ao currículo.",
        "feedbackErro": "A chave é distinguir acesso ao currículo comum de currículo paralelo. A Educação Especial é transversal e oferece recursos e serviços para apoiar a escolarização.",
        "analiseAlternativas": [
            "Incorreta. III é falsa, embora I esteja correta.",
            "Incorreta. A afirmativa I também está correta.",
            "Correta. I e II expressam a aplicação das diretrizes curriculares e a função dos apoios.",
            "Incorreta. A presença de III invalida a combinação.",
            "Incorreta. III está errada ao tornar o currículo paralelo consequência automática da deficiência."
        ],
        "dicaBanca": "Quando aparecer BNCC/DCNs, lembre que o Decreto de 2025 afirma expressamente sua aplicação ao público da Educação Especial.",
        "pegadinha": "Acessibilidade curricular não significa currículo à parte.",
        "memorizar2026": "Currículo comum é referência; apoios e adaptações tornam o acesso possível.",
        "fonte": "Decreto nº 12.686/2025, art. 4º, §1º.",
        "afirmacoes": [
            "I. A BNCC e as diretrizes curriculares nacionais das etapas e modalidades da educação básica aplicam-se aos estudantes público da Educação Especial.",
            "II. Adaptações razoáveis e recursos de acessibilidade podem modificar meios de acesso, participação e expressão sem retirar automaticamente o estudante do currículo comum.",
            "III. A existência de deficiência autoriza substituir o currículo comum por um percurso paralelo permanente, independentemente das barreiras observadas."
        ],
        "atualizacao2026": "O Decreto nº 12.686/2025 explicita a aplicação da BNCC e das diretrizes curriculares ao público da Educação Especial."
    },
    {
        "id": "SEDUC-EE-TEND-014",
        "numero": 14,
        "subtopico": "Interdisciplinaridade e participação",
        "dificuldade": "media",
        "pergunta": "Em um projeto interdisciplinar, o estudante com deficiência participa da investigação, escolhe formas acessíveis de registrar dados, trabalha com colegas e apresenta conclusões por meio de recurso de comunicação adequado. A prática evidencia",
        "alternativas": [
            "fragmentação curricular, pois a interdisciplinaridade elimina a especificidade de cada área.",
            "redução de objetivos, porque o uso de formas alternativas de expressão torna a atividade menos exigente.",
            "substituição parcial do currículo por tecnologia assistiva, pois o recurso específico passa a definir uma rota própria de aprendizagem para o estudante dentro do projeto.",
            "integração entre currículo, acessibilidade e participação, com diferentes meios para alcançar objetivos de aprendizagem.",
            "individualização segregadora, pois o estudante utiliza recurso que não é necessário aos demais colegas."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu uma prática em que acessibilidade é incorporada à atividade para garantir participação no objetivo comum.",
        "feedbackErro": "O recurso acessível muda o meio de participação, não elimina a exigência conceitual nem substitui o conhecimento.",
        "analiseAlternativas": [
            "Incorreta. Interdisciplinaridade articula áreas; não pressupõe apagar seus conhecimentos.",
            "Incorreta. Meio alternativo de expressão não implica objetivo inferior.",
            "Incorreta. Tecnologia assistiva é suporte, não substituto do conteúdo.",
            "Correta. O exemplo integra currículo, participação, cooperação e acessibilidade.",
            "Incorreta. Diferenciar recurso para remover barreira é equidade, não segregação."
        ],
        "dicaBanca": "FGV gosta de confundir 'diferente' com 'mais fácil'. Pergunte se o objetivo conceitual foi preservado.",
        "pegadinha": "Recurso diferente não significa currículo diferente.",
        "memorizar2026": "Integração curricular inclusiva = mesmo direito ao conhecimento + diferentes meios de acesso e expressão.",
        "fonte": "Decreto nº 12.686/2025; LBI, art. 28."
    },
    {
        "id": "SEDUC-EE-TEND-015",
        "numero": 15,
        "subtopico": "Baixa expectativa e capacitismo pedagógico",
        "dificuldade": "alta",
        "pergunta": "Uma professora decide não propor atividades de argumentação a um estudante com deficiência intelectual porque presume, antes de qualquer tentativa ou mediação, que ele não será capaz de participar. A prática revela",
        "alternativas": [
            "adequação curricular legítima, pois o diagnóstico permite antecipar habilidades de maior complexidade e preservar o estudante de experiências para as quais ainda não demonstrou prontidão.",
            "barreira atitudinal associada a baixa expectativa, capaz de restringir oportunidades de aprendizagem e participação.",
            "avaliação diagnóstica, porque a professora utilizou informação prévia para adequar os objetivos.",
            "diferenciação inclusiva, pois proteger o estudante de atividades complexas preserva sua autoestima.",
            "planejamento flexível, pois a retirada prévia de desafios é recomendada quando há deficiência intelectual."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou uma barreira atitudinal: a deficiência é usada como previsão de incapacidade e justificativa para negar experiências de aprendizagem.",
        "feedbackErro": "A educação inclusiva mantém altas expectativas com os apoios necessários. Diagnóstico não deve virar teto pedagógico.",
        "analiseAlternativas": [
            "Incorreta. Diagnóstico não determina antecipadamente o limite de aprendizagem.",
            "Correta. Baixa expectativa baseada na deficiência é barreira atitudinal.",
            "Incorreta. Não houve investigação pedagógica, mas presunção de incapacidade.",
            "Incorreta. Superproteção pode reduzir oportunidades e participação.",
            "Incorreta. Flexibilidade não equivale a retirar desafios antes de observar barreiras."
        ],
        "dicaBanca": "FGV 2026 explorou a crítica às tarefas simplificadas e à restrição de participação com base na deficiência intelectual.",
        "pegadinha": "Baixa expectativa pode parecer cuidado, mas funcionar como exclusão.",
        "memorizar2026": "Alta expectativa + apoio adequado; não confundir apoio com redução antecipada de possibilidades.",
        "fonte": "FGV SEDUC-SP 2026; Decreto nº 12.686/2025, art. 2º, V."
    },
    {
        "id": "SEDUC-EE-TEND-016",
        "numero": 16,
        "subtopico": "AEE e currículo integrado",
        "dificuldade": "alta",
        "pergunta": "Em uma escola, o professor do AEE planeja recursos de acessibilidade em diálogo com o professor da classe comum e acompanha se esses recursos ampliam a participação nas atividades curriculares. Essa atuação é",
        "alternativas": [
            "inadequada, porque o AEE deve trabalhar conteúdos próprios e independentes da classe comum.",
            "adequada apenas se o professor do AEE também assumir a avaliação dos conteúdos em que o estudante apresenta dificuldades persistentes, garantindo continuidade entre os dois atendimentos.",
            "adequada, pois articula o AEE ao currículo e organiza recursos para remover barreiras que interferem na escolarização comum.",
            "inadequada, porque recursos do AEE não podem ser utilizados fora da sala de recursos.",
            "adequada somente quando a deficiência exige substituição parcial da frequência na classe comum."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu a articulação entre AEE e classe comum. O atendimento especializado deve apoiar acesso, participação e aprendizagem no currículo.",
        "feedbackErro": "AEE não é reforço escolar nem currículo independente. Sua função inclui organizar recursos e estratégias para enfrentar barreiras.",
        "analiseAlternativas": [
            "Incorreta. AEE não deve constituir currículo paralelo.",
            "Incorreta. O professor do AEE não substitui o professor da classe comum na avaliação curricular.",
            "Correta. A articulação apoia acesso ao currículo e participação na classe comum.",
            "Incorreta. Recursos podem ser utilizados nos diferentes contextos escolares.",
            "Incorreta. AEE não substitui a frequência na classe comum."
        ],
        "dicaBanca": "FGV Macaé 2024 cobrou que AEE é complementar, não substitutivo ou paralelo.",
        "pegadinha": "AEE integrado ao currículo não significa reforço do mesmo conteúdo.",
        "memorizar2026": "AEE: identificar barreiras + organizar recursos + articular apoios à escolarização comum.",
        "fonte": "Resolução CNE/CEB nº 4/2009; Decreto nº 12.686/2025; FGV Macaé 2024."
    },
    {
        "id": "SEDUC-EE-TEND-017",
        "numero": 17,
        "subtopico": "Tendência libertadora",
        "dificuldade": "alta",
        "pergunta": "Uma prática pedagógica parte de situações vividas pelos estudantes, promove diálogo, problematiza relações sociais e busca que o conhecimento contribua para leitura crítica e transformação da realidade. Entre as tendências progressistas, aproxima-se mais da",
        "alternativas": [
            "libertadora, pela centralidade do diálogo, da problematização e da conscientização sobre a realidade.",
            "tradicional, porque utiliza conteúdos provenientes da experiência social.",
            "tecnicista, pois transforma problemas sociais em objetivos operacionais mensuráveis.",
            "renovadora não diretiva, porque toda prática dialogada evita intervenção intencional do professor.",
            "behaviorista, porque a mudança social é entendida como resultado do reforço de comportamentos desejáveis."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu a tendência libertadora, associada à problematização da realidade, diálogo e conscientização.",
        "feedbackErro": "A simples referência à realidade social pode aparecer em outras correntes. Aqui, diálogo + problematização + transformação são decisivos.",
        "analiseAlternativas": [
            "Correta. Esses elementos são característicos da pedagogia libertadora.",
            "Incorreta. A tradicional não se organiza pela problematização dialógica.",
            "Incorreta. O tecnicismo trabalha racionalização e controle.",
            "Incorreta. A não diretiva não corresponde à pedagogia problematizadora descrita.",
            "Incorreta. O behaviorismo não explica a proposta emancipatória apresentada."
        ],
        "dicaBanca": "FGV pode cruzar Paulo Freire com outras tendências progressistas. Procure diálogo, problematização e conscientização.",
        "pegadinha": "'Realidade social' isoladamente não basta; observe a finalidade emancipatória.",
        "memorizar2026": "Libertadora = diálogo + problematização + conscientização + transformação.",
        "fonte": "Tendências pedagógicas progressistas; FGV SEDUC-AM 2014."
    },
    {
        "id": "SEDUC-EE-TEND-018",
        "numero": 18,
        "subtopico": "Tendência libertária",
        "dificuldade": "alta",
        "pergunta": "Em determinada experiência escolar, a organização do trabalho enfatiza autogestão, participação coletiva, vivência grupal e questionamento de relações autoritárias, com forte valorização das decisões do grupo. A tendência progressista mais próxima é a",
        "alternativas": [
            "crítico-social dos conteúdos, pois seu foco principal é a assimilação de conteúdos vinculados à prática social.",
            "renovadora progressivista, porque toda atividade coletiva corresponde à Escola Nova.",
            "libertadora, necessariamente, já que qualquer participação coletiva pressupõe palavras geradoras.",
            "tradicional, porque a disciplina do grupo substitui a autoridade formal do professor.",
            "libertária, pela ênfase na autogestão, experiência coletiva e crítica às estruturas autoritárias."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou a tendência libertária pela autogestão, participação do grupo e crítica a formas autoritárias de organização.",
        "feedbackErro": "Libertadora e libertária pertencem ao campo progressista, mas não são sinônimas. A libertária enfatiza autogestão e experiência grupal.",
        "analiseAlternativas": [
            "Incorreta. A crítico-social enfatiza apropriação do saber e mediação docente.",
            "Incorreta. Atividade coletiva, sozinha, não caracteriza Escola Nova.",
            "Incorreta. A libertadora prioriza diálogo e problematização.",
            "Incorreta. A crítica à autoridade não aproxima a proposta da tendência tradicional.",
            "Correta. Autogestão e experiência grupal são marcas da tendência libertária."
        ],
        "dicaBanca": "Libertadora: diálogo/problematização. Libertária: autogestão/grupo. Crítico-social: conteúdos + prática social.",
        "pegadinha": "As tendências progressistas são próximas em finalidade social, mas diferem em método e foco.",
        "memorizar2026": "Libertária = autogestão + participação coletiva + crítica à autoridade.",
        "fonte": "Classificação das tendências pedagógicas progressistas."
    },
    {
        "id": "SEDUC-EE-TEND-019",
        "numero": 19,
        "subtopico": "Renovadora não diretiva",
        "dificuldade": "media",
        "pergunta": "Uma proposta pedagógica coloca no centro o desenvolvimento pessoal, as relações interpessoais e a autorrealização, atribuindo ao professor função de facilitar a aprendizagem e evitando forte direção dos conteúdos. Essa tendência é a",
        "alternativas": [
            "tradicional, porque valoriza a relação professor–aluno como eixo disciplinar.",
            "renovadora não diretiva, centrada na pessoa e no papel facilitador do professor.",
            "tecnicista, por transformar desenvolvimento pessoal em objetivo comportamental.",
            "crítico-social dos conteúdos, pela prioridade dada à relação interpessoal em lugar do saber sistematizado.",
            "libertária, pois toda redução de direção docente corresponde à autogestão institucional."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu a renovadora não diretiva pelo foco na pessoa, nas relações e no professor facilitador.",
        "feedbackErro": "A banca pode aproximar 'facilitador' de várias abordagens. O diferencial aqui é desenvolvimento pessoal e não diretividade.",
        "analiseAlternativas": [
            "Incorreta. A tradicional enfatiza transmissão e autoridade docente.",
            "Correta. A não diretiva prioriza desenvolvimento pessoal, relações e facilitação.",
            "Incorreta. O tecnicismo está ligado à racionalização e controle.",
            "Incorreta. A crítico-social valoriza mediação do conhecimento sistematizado.",
            "Incorreta. A libertária enfatiza autogestão e organização coletiva."
        ],
        "dicaBanca": "'Professor facilitador' pode aparecer em abordagens próximas; procure o foco em autorrealização e relações pessoais.",
        "pegadinha": "Não diretividade não é ausência de educação.",
        "memorizar2026": "Não diretiva = pessoa + relações + autorrealização + professor facilitador.",
        "fonte": "Tendências pedagógicas liberais."
    },
    {
        "id": "SEDUC-EE-TEND-020",
        "numero": 20,
        "subtopico": "Diversificação metodológica e equidade",
        "dificuldade": "alta",
        "pergunta": "Uma professora mantém os objetivos curriculares da unidade, mas oferece texto, áudio, imagens e material tátil; permite resposta escrita, oral ou por comunicação alternativa; e acompanha os mesmos critérios conceituais essenciais. A prática exemplifica",
        "alternativas": [
            "fragmentação do currículo, porque diferentes mídias impedem uma experiência comum.",
            "redução de expectativa, porque meios alternativos de resposta modificam as condições de realização e deveriam ser reservados a objetivos curriculares previamente flexibilizados.",
            "diferenciação pedagógica orientada pela equidade, com múltiplos meios de acesso e expressão sem abandonar objetivos essenciais.",
            "integração escolar, porque cada estudante se ajusta ao padrão previamente definido.",
            "tecnicismo inclusivo, pois a variedade de recursos substitui a necessidade de mediação docente."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu a diversificação como forma de garantir acesso e expressão, preservando o que se pretende aprender.",
        "feedbackErro": "Diversificar meios não significa criar currículos diferentes. A chave é manter objetivos conceituais e ajustar condições para remover barreiras.",
        "analiseAlternativas": [
            "Incorreta. Diferentes mídias podem ampliar o acesso ao mesmo conhecimento.",
            "Incorreta. Meios alternativos de expressão não reduzem necessariamente o nível conceitual.",
            "Correta. A equidade admite caminhos diferentes para assegurar acesso real aos objetivos.",
            "Incorreta. A situação descreve transformação da prática, não adaptação do aluno.",
            "Incorreta. Recurso diverso não caracteriza tecnicismo e não elimina mediação."
        ],
        "dicaBanca": "FGV pode tentar fazer 'igualdade' significar instrumento idêntico. Diferencie objetivo comum de meio uniforme.",
        "pegadinha": "Mesmo objetivo pode ser demonstrado por meios distintos.",
        "memorizar2026": "Equidade curricular = objetivos pertinentes + meios acessíveis + diferentes formas de participação e expressão.",
        "fonte": "Decreto nº 12.686/2025, arts. 2º a 4º; LBI, art. 28."
    },
    {
        "id": "SEDUC-EE-TEND-021",
        "numero": 21,
        "subtopico": "Associação — tendência e prática",
        "dificuldade": "alta",
        "pergunta": "Associe as descrições às referências pedagógicas correspondentes.",
        "alternativas": [
            "1 – 3 – 4 – 2.",
            "2 – 1 – 4 – 3.",
            "3 – 4 – 1 – 2.",
            "4 – 2 – 3 – 1.",
            "2 – 3 – 4 – 1."
        ],
        "correta": 4,
        "feedbackAcerto": "Você associou corretamente: tecnicista à padronização; libertadora ao diálogo; renovadora à experiência; crítico-social à mediação do saber sistematizado.",
        "feedbackErro": "Questões de associação da FGV exigem reconhecer a característica distintiva de cada corrente, não palavras gerais como participação ou conteúdo.",
        "analiseAlternativas": [
            "Incorreta. A primeira descrição não corresponde à tendência indicada nessa sequência.",
            "Incorreta. A segunda descrição é libertadora, não a tendência indicada.",
            "Incorreta. A sequência troca tecnicismo e renovadora.",
            "Incorreta. A primeira descrição é tecnicista.",
            "Correta. A sequência identifica adequadamente as quatro descrições."
        ],
        "dicaBanca": "Associe por palavras-chave: controle/eficiência; diálogo/problematização; experiência; conteúdos/prática social.",
        "pegadinha": "Alternativas de associação podem diferir em uma posição; resolva todas antes de comparar.",
        "memorizar2026": "Tecnicista=controle; Libertadora=diálogo; Renovadora=experiência; Crítico-social=conteúdo + prática social.",
        "fonte": "FGV — padrão de associação; FGV SEDUC-SP 2026.",
        "afirmacoes": [
            "1. Crítico-social dos conteúdos.",
            "2. Tecnicista.",
            "3. Libertadora.",
            "4. Renovadora progressivista.",
            "( ) Ênfase em eficiência, objetivos operacionais e procedimentos padronizados.",
            "( ) Diálogo e problematização da realidade como eixos do processo educativo.",
            "( ) Aprender fazendo, experiências e atividade do estudante.",
            "( ) Apropriação do conhecimento sistematizado mediada e relacionada à prática social."
        ]
    },
    {
        "id": "SEDUC-EE-TEND-022",
        "numero": 22,
        "subtopico": "Prática aparentemente inclusiva",
        "dificuldade": "alta",
        "pergunta": "Uma escola adota trabalho em grupos e projetos interdisciplinares, mas mantém estudantes com deficiência em tarefas simplificadas e sem relação com o produto coletivo. À luz da perspectiva inclusiva, é correto afirmar que",
        "alternativas": [
            "a metodologia é inclusiva, pois o simples uso de projetos e grupos garante participação de todos.",
            "a prática é adequada se as tarefas simplificadas forem realizadas no mesmo espaço físico.",
            "a escola aplica diferenciação legítima, porque objetivos individualizados podem ser definidos sempre que o professor considerar que a participação no produto coletivo não corresponde ao nível atual do estudante.",
            "a metodologia ativa não elimina exclusão quando o estudante permanece à margem do objetivo comum e da produção coletiva.",
            "a prática torna-se inclusiva desde que o professor do AEE aprove previamente as tarefas."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou que a forma externa da metodologia não basta. Projetos e grupos podem esconder segregação se o estudante estiver apenas fisicamente presente.",
        "feedbackErro": "A FGV 2026 utilizou casos em que tarefas simplificadas e isoladas eram apresentadas como proteção ou adaptação; o erro estava na restrição de participação.",
        "analiseAlternativas": [
            "Incorreta. Metodologia ativa não garante inclusão sem participação real.",
            "Incorreta. Mesmo espaço físico não corrige exclusão curricular.",
            "Incorreta. Deficiência não gera obrigação automática de objetivos desconectados.",
            "Correta. O critério é participação significativa no objetivo e na experiência coletiva.",
            "Incorreta. Aprovação do AEE não torna inclusiva uma tarefa segregadora."
        ],
        "dicaBanca": "Desconfie de técnica moderna usada para encobrir baixa expectativa ou currículo paralelo.",
        "pegadinha": "Inclusão não é aparência metodológica; é participação real na aprendizagem.",
        "memorizar2026": "Projeto inclusivo = participação no objetivo comum + papel significativo + apoios acessíveis.",
        "fonte": "FGV SEDUC-SP 2026; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-TEND-023",
        "numero": 23,
        "subtopico": "V/F — tendências e inclusão",
        "dificuldade": "alta",
        "pergunta": "Assinale V para a afirmativa verdadeira e F para a falsa.",
        "alternativas": [
            "V – V – F – V.",
            "V – F – V – F.",
            "F – V – V – F.",
            "F – F – V – V.",
            "V – F – F – V."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente: tendências influenciam a prática; inclusão exige acesso e participação; teorias de aprendizagem não equivalem mecanicamente às tendências de Libâneo; avaliação formativa favorece replanejamento.",
        "feedbackErro": "O item combina conteúdo teórico e aplicação inclusiva. A armadilha é tratar classificações diferentes como equivalentes.",
        "analiseAlternativas": [
            "Correta. A sequência é V–V–F–V.",
            "Incorreta. A segunda e a terceira foram classificadas de forma inadequada.",
            "Incorreta. A primeira é verdadeira e a quarta também.",
            "Incorreta. As duas primeiras não são falsas simultaneamente.",
            "Incorreta. A segunda é verdadeira e a terceira é falsa."
        ],
        "dicaBanca": "Em V/F, julgue a proposição inteira. Palavras como 'automaticamente' ou 'equivale' podem invalidar o item.",
        "pegadinha": "Não use palavras absolutas como único critério; avalie o conceito.",
        "memorizar2026": "Tendências orientam práticas; princípios inclusivos mostram se elas garantem direitos e aprendizagem.",
        "fonte": "FGV — estilo V/F; Decreto nº 12.686/2025.",
        "afirmacoes": [
            "( ) Tendências pedagógicas expressam concepções sobre ensino, aprendizagem, currículo e papéis de professor e estudante.",
            "( ) Uma prática inclusiva deve ser analisada também pelos efeitos sobre acesso, participação, aprendizagem e eliminação de barreiras.",
            "( ) Constructivismo e sociointeracionismo equivalem, sem distinção, às categorias de tendências liberais e progressistas de Libâneo.",
            "( ) Avaliação formativa pode fornecer evidências para ajustar estratégias e apoios durante o processo."
        ]
    },
    {
        "id": "SEDUC-EE-TEND-024",
        "numero": 24,
        "subtopico": "Formação docente inclusiva",
        "dificuldade": "alta",
        "pergunta": "Uma formação continuada promete ensinar um protocolo único de aula inclusiva, aplicável do mesmo modo a qualquer deficiência, turma ou contexto. À luz da perspectiva inclusiva, o principal problema dessa proposta é",
        "alternativas": [
            "valorizar planejamento, pois práticas inclusivas devem ser improvisadas conforme cada estudante.",
            "reduzir a formação a uma padronização que ignora diversidade, contexto, barreiras e necessidade de julgamento pedagógico.",
            "utilizar protocolo, porque qualquer instrumento de apoio à decisão pedagógica é incompatível com autonomia docente.",
            "oferecer formação aos professores da classe regular, já que inclusão deve ser tema exclusivo do AEE.",
            "buscar consistência entre práticas, pois a inclusão exige respostas totalmente individualizadas e, por isso, modelos comuns de planejamento comprometeriam a autonomia de cada professor diante de sua turma."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou o risco da receita universal. Formação inclusiva precisa desenvolver capacidade de analisar contexto, barreiras, evidências e apoios.",
        "feedbackErro": "Protocolos podem apoiar organização, mas não substituem julgamento pedagógico nem compreensão das diferenças. A FGV já cobrou a ressignificação do papel do professor.",
        "analiseAlternativas": [
            "Incorreta. Planejamento é essencial; inclusão não depende de improvisação.",
            "Correta. Uma receita única pode ignorar a diversidade e transformar inclusão em padronização.",
            "Incorreta. Instrumentos podem ser úteis se usados de modo crítico e flexível.",
            "Incorreta. A inclusão envolve todos os professores, não apenas especialistas.",
            "Incorreta. Coerência de princípios é desejável; o erro é exigir resposta idêntica em contextos diferentes."
        ],
        "dicaBanca": "FGV Caraguatatuba 2024: formação inclusiva ressignifica papéis e práticas; não se reduz a protocolo técnico.",
        "pegadinha": "Flexibilidade não é improviso; é decisão pedagógica fundamentada.",
        "memorizar2026": "Formação inclusiva = teoria + análise de barreiras + prática reflexiva + colaboração + replanejamento.",
        "fonte": "FGV Caraguatatuba 2024; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-TEND-025",
        "numero": 25,
        "subtopico": "Síntese — prática integrada ao currículo",
        "dificuldade": "alta",
        "pergunta": "Uma escola quer alinhar suas práticas pedagógicas à Educação Especial integrada ao currículo. Entre as propostas abaixo, a mais consistente é",
        "alternativas": [
            "preservar o currículo comum, planejar acessibilidade, diversificar estratégias, acompanhar evidências e articular classe comum, AEE, estudante e família.",
            "adotar uma metodologia ativa única, permitindo adaptações somente quando diagnóstico comprove incapacidade de acompanhar o padrão.",
            "manter objetivos gerais, mas transferir ao AEE todas as decisões sobre estudantes público da Educação Especial.",
            "priorizar atividades individuais fora da turma sempre que o estudante apresentar ritmo diferente, retomando as tarefas coletivas apenas quando demonstrar desempenho suficiente para acompanhar a sequência curricular comum.",
            "usar avaliações idênticas e critérios uniformes, oferecendo apoio apenas depois de confirmado baixo rendimento persistente."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reuniu os elementos centrais do bloco: currículo comum, acessibilidade, diversificação, avaliação formativa, colaboração e participação.",
        "feedbackErro": "As demais alternativas misturam elementos aparentemente legítimos com erros típicos: laudo como condição, transferência de responsabilidade, segregação e uniformidade.",
        "analiseAlternativas": [
            "Correta. Integra currículo, acessibilidade, participação, avaliação e colaboração sem criar percurso paralelo.",
            "Incorreta. Metodologia única e laudo como condição contradizem flexibilidade e acessibilidade.",
            "Incorreta. O AEE articula-se à classe comum, mas não assume sozinho o planejamento curricular.",
            "Incorreta. Ritmo diferente não justifica retirada sistemática das experiências comuns.",
            "Incorreta. Igualdade de direito não exige instrumento idêntico nem apoio apenas após fracasso."
        ],
        "dicaBanca": "Na questão-síntese, procure a alternativa que combina princípios corretos sem inserir uma condição excludente escondida.",
        "pegadinha": "FGV costuma tornar um distrator atraente com várias ideias corretas e um detalhe normativamente errado.",
        "memorizar2026": "Prática inclusiva integrada ao currículo = currículo comum + acessibilidade + mediação + diversidade + colaboração + avaliação formativa.",
        "fonte": "Decreto nº 12.686/2025; LBI, art. 28; Resolução CNE/CEB nº 4/2009; FGV SEDUC-SP 2026."
    }
];
    window.seducEducacaoEspecialTendenciasCurriculo2026 = banco;
})();
