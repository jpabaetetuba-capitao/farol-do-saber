// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// EDUCAÇÃO ESPECIAL NA PERSPECTIVA INCLUSIVA
// AUDITORIA FINAL DE DISTRATORES — 2026
// Base preservada: CF/88, Convenção, LDB, LBI,
// Decreto nº 12.686/2025 e alterações.
// 50 questões — 5 alternativas — padrão Instituto Ágata.
// ============================================================

const apoioEducacaoInclusiva = [
    {
        "pergunta": "Na perspectiva inclusiva, a Educação Especial deve ser compreendida como:",
        "alternativas": [
            "um sistema paralelo destinado a substituir a escolarização comum.",
            "um serviço restrito a estudantes com deficiência física.",
            "um atendimento exclusivamente clínico realizado na escola.",
            "uma etapa da educação básica situada após o ensino fundamental.",
            "uma modalidade transversal que oferece recursos e serviços para apoiar, complementar ou suplementar a escolarização."
        ],
        "correta": 4,
        "explicacao": "A legislação educacional atual trata a Educação Especial como modalidade transversal, articulada ao sistema educacional inclusivo.",
        "feedbackAcerto": "Correto. A alternativa expressa a lógica inclusiva: a Educação Especial apoia o percurso escolar e não cria uma escolarização paralela.",
        "feedbackErro": "Se você marcou 'sistema paralelo' ou 'substitutivo', confundiu Educação Especial com segregação. Na perspectiva inclusiva, o apoio se articula à escolarização comum.",
        "dicaBanca": "Ágata costuma explorar a diferença entre modalidade transversal e sistema separado."
    },
    {
        "pergunta": "A Constituição Federal, ao tratar do dever do Estado com a educação, prevê atendimento educacional especializado às pessoas com deficiência:",
        "alternativas": [
            "exclusivamente em instituições especiais.",
            "apenas mediante laudo médico.",
            "somente no ensino fundamental.",
            "preferencialmente na rede regular de ensino.",
            "somente quando houver sala de recursos multifuncionais."
        ],
        "correta": 3,
        "explicacao": "O art. 208, III, da Constituição Federal prevê o atendimento educacional especializado, preferencialmente na rede regular de ensino.",
        "feedbackAcerto": "Correto. A palavra constitucional decisiva é 'preferencialmente', que orienta a oferta no contexto da rede regular.",
        "feedbackErro": "O erro mais comum é trocar 'preferencialmente' por 'exclusivamente' ou condicionar o direito a requisitos que a Constituição não estabelece.",
        "dicaBanca": "Questão de literalidade constitucional: atenção aos advérbios."
    },
    {
        "pergunta": "A Convenção sobre os Direitos das Pessoas com Deficiência, incorporada ao ordenamento brasileiro com equivalência de emenda constitucional, reconhece o direito das pessoas com deficiência:",
        "alternativas": [
            "a um sistema educacional inclusivo em todos os níveis e à aprendizagem ao longo da vida.",
            "à escolarização obrigatoriamente separada por tipo de deficiência, como regra geral para a organização da educação inclusiva..",
            "somente à educação básica, como regra geral para a organização da educação inclusiva..",
            "apenas a serviços terapêuticos dentro da escola, como regra geral para a organização da educação inclusiva..",
            "à dispensa do currículo comum, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 0,
        "explicacao": "O art. 24 da Convenção assegura sistema educacional inclusivo em todos os níveis e aprendizagem ao longo da vida.",
        "feedbackAcerto": "Correto. A Convenção é uma das bases jurídicas mais fortes da educação inclusiva no Brasil.",
        "feedbackErro": "Se você escolheu segregação, lembre que a Convenção trabalha com inclusão, igualdade de oportunidades e não exclusão do sistema geral de educação.",
        "dicaBanca": "Ágata pode cobrar a Convenção junto com LBI e LDB."
    },
    {
        "pergunta": "Segundo a Convenção sobre os Direitos das Pessoas com Deficiência, uma pessoa com deficiência não deve ser excluída do sistema educacional geral:",
        "alternativas": [
            "apenas quando houver vaga remanescente.",
            "sob alegação de deficiência.",
            "somente se tiver autonomia completa.",
            "desde que não necessite de adaptações.",
            "apenas após avaliação médica."
        ],
        "correta": 1,
        "explicacao": "A Convenção proíbe a exclusão do sistema educacional geral com base na deficiência.",
        "feedbackAcerto": "Correto. O direito à educação inclusiva não depende de o estudante demonstrar independência ou adaptação prévia à escola.",
        "feedbackErro": "A pegadinha é transferir ao estudante o dever de 'estar pronto' para a inclusão. O sistema é que deve remover barreiras e oferecer apoios.",
        "dicaBanca": "Desconfie de condições que transformem a deficiência em motivo de exclusão."
    },
    {
        "pergunta": "Na educação inclusiva, integração e inclusão não são conceitos equivalentes. A inclusão pressupõe:",
        "alternativas": [
            "que o estudante se adapte sozinho às estruturas já existentes.",
            "que a escola e o sistema educacional removam barreiras e se organizem para a participação de todos.",
            "que apenas estudantes com alto grau de autonomia permaneçam na classe comum.",
            "que o estudante frequente a classe comum somente em atividades sociais.",
            "que o AEE substitua as aulas regulares."
        ],
        "correta": 1,
        "explicacao": "A inclusão desloca o foco da adaptação individual do estudante para a transformação das condições, práticas e barreiras do ambiente educacional.",
        "feedbackAcerto": "Correto. A escola inclusiva reorganiza práticas, recursos e acessibilidade para responder à diversidade.",
        "feedbackErro": "Se você marcou que o estudante deve se adaptar à estrutura existente, escolheu uma lógica de integração, não de inclusão.",
        "dicaBanca": "Conceito clássico: integração adapta o aluno ao sistema; inclusão transforma o sistema."
    },
    {
        "pergunta": "O conceito de barreira, na perspectiva inclusiva, ajuda a compreender que a restrição de participação:",
        "alternativas": [
            "decorre exclusivamente da condição corporal do estudante, como regra geral para a organização da educação inclusiva..",
            "pode resultar da interação entre características da pessoa e obstáculos físicos, comunicacionais, tecnológicos ou atitudinais.",
            "é sempre consequência de falta de esforço do aluno.",
            "somente ocorre em prédios sem acessibilidade, como regra geral para a organização da educação inclusiva..",
            "não possui relação com práticas pedagógicas, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 1,
        "explicacao": "A abordagem inclusiva considera a interação entre impedimentos e barreiras do ambiente.",
        "feedbackAcerto": "Correto. A dificuldade de participação não deve ser atribuída automaticamente à pessoa; é necessário identificar obstáculos no contexto.",
        "feedbackErro": "O erro está em localizar todo o problema no estudante. Barreiras podem estar no espaço, na comunicação, nas tecnologias, nas atitudes e nas práticas.",
        "dicaBanca": "Ágata gosta de situações em que a deficiência não é a única causa da restrição."
    },
    {
        "pergunta": "Um professor afirma que um estudante não pode participar de uma atividade porque 'pessoas com esse diagnóstico não conseguem'. A principal barreira presente é:",
        "alternativas": [
            "urbanística.",
            "arquitetônica.",
            "atitudinal.",
            "nos transportes.",
            "tecnológica."
        ],
        "correta": 2,
        "explicacao": "A generalização preconceituosa sobre incapacidade configura barreira atitudinal.",
        "feedbackAcerto": "Correto. O obstáculo decorre de uma atitude baseada em estereótipo sobre deficiência.",
        "feedbackErro": "Se você marcou uma barreira física, observe que o enunciado não apresenta obstáculo material; o impedimento está na crença e na atitude do adulto.",
        "dicaBanca": "Barreira atitudinal é tema recorrente em provas de inclusão."
    },
    {
        "pergunta": "Uma atividade digital obrigatória não pode ser utilizada por estudante que depende de leitor de tela. O problema caracteriza principalmente:",
        "alternativas": [
            "barreira tecnológica e de acesso à informação.",
            "barreira exclusivamente urbanística.",
            "apenas dificuldade individual de aprendizagem.",
            "situação sem relação com acessibilidade.",
            "barreira apenas de transporte."
        ],
        "correta": 0,
        "explicacao": "Recursos digitais inacessíveis podem criar barreiras tecnológicas e de comunicação/informação.",
        "feedbackAcerto": "Correto. A acessibilidade educacional também alcança plataformas, documentos e tecnologias.",
        "feedbackErro": "A presença de tecnologia não garante acessibilidade. Se o recurso não pode ser usado pelo estudante, ele pode se tornar a própria barreira.",
        "dicaBanca": "Não limite acessibilidade a rampas e elevadores."
    },
    {
        "pergunta": "Na perspectiva inclusiva, adaptação razoável corresponde a:",
        "alternativas": [
            "qualquer redução automática do currículo para estudante com deficiência, como regra geral para a organização da educação inclusiva..",
            "benefício opcional concedido por liberalidade da escola, como regra geral para a organização da educação inclusiva..",
            "ajuste necessário e adequado, requerido em um caso concreto, sem ônus desproporcional ou indevido, para assegurar direitos em igualdade.",
            "medida apenas arquitetônica, como regra geral para a organização da educação inclusiva..",
            "substituição do estudante nas atividades que apresentam dificuldade, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 2,
        "explicacao": "A LBI define adaptação razoável como ajuste necessário e adequado para assegurar direitos em igualdade, sem ônus desproporcional e indevido.",
        "feedbackAcerto": "Correto. A adaptação razoável responde a uma necessidade concreta e busca igualdade de participação.",
        "feedbackErro": "O erro é confundir adaptação com simplificação automática ou retirada da atividade. A medida deve remover barreiras, não reduzir expectativas sem análise.",
        "dicaBanca": "Adaptação razoável é individualizada e vinculada a uma barreira concreta."
    },
    {
        "pergunta": "O desenho universal busca:",
        "alternativas": [
            "conceber produtos, ambientes, programas e serviços para uso pelo maior número possível de pessoas, sem necessidade de adaptação específica, sempre que possível.",
            "criar produtos e ambientes exclusivos para pessoas com deficiência, como regra geral para a organização da educação inclusiva..",
            "eliminar a necessidade de tecnologia assistiva em todos os casos, como regra geral para a organização da educação inclusiva..",
            "atender apenas normas arquitetônicas, como regra geral para a organização da educação inclusiva..",
            "substituir adaptações razoáveis individuais, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 0,
        "explicacao": "O desenho universal procura incorporar acessibilidade desde a concepção, sem excluir a possibilidade de tecnologias assistivas e adaptações quando necessárias.",
        "feedbackAcerto": "Correto. O ideal é planejar desde o início para a diversidade de usuários.",
        "feedbackErro": "Se você marcou que o desenho universal elimina toda adaptação individual, exagerou o alcance do conceito; necessidades específicas ainda podem exigir outros recursos.",
        "dicaBanca": "Desenho universal = acessibilidade desde o planejamento."
    },
    {
        "pergunta": "Na educação inclusiva, o Atendimento Educacional Especializado — AEE — tem relação com a escolarização comum porque:",
        "alternativas": [
            "a substitui quando o estudante apresenta deficiência, como regra geral para a organização da educação inclusiva..",
            "é destinado a atribuir notas diferenciadas, como regra geral para a organização da educação inclusiva..",
            "funciona apenas como reforço escolar, como regra geral para a organização da educação inclusiva..",
            "atua de forma articulada, identificando e organizando recursos e serviços que eliminem barreiras à participação e aprendizagem.",
            "deve ocorrer sem diálogo com professores da classe comum, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 3,
        "explicacao": "O AEE complementa ou suplementa a escolarização e organiza recursos de acessibilidade e apoio.",
        "feedbackAcerto": "Correto. AEE e sala comum devem dialogar para que recursos e estratégias tenham efeito na vida escolar real do estudante.",
        "feedbackErro": "O erro é tratar o AEE como aula paralela de reforço ou como substituto da classe comum.",
        "dicaBanca": "AEE não é reforço escolar nem terapia."
    },
    {
        "pergunta": "Um estudante frequenta o AEE e, por isso, a escola decide dispensá-lo das aulas da classe comum duas vezes por semana. Essa prática é:",
        "alternativas": [
            "adequada, porque o AEE substitui a escolarização nessas horas.",
            "obrigatória para estudantes com deficiência intelectual, como regra geral para a organização da educação inclusiva..",
            "inadequada, pois o AEE não deve substituir matrícula e frequência na classe comum.",
            "permitida sempre que a família concordar, como regra geral para a organização da educação inclusiva..",
            "correta somente na rede pública, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 2,
        "explicacao": "A política vigente expressamente impede que o AEE substitua a matrícula e a frequência na classe comum.",
        "feedbackAcerto": "Correto. O estudante deve receber apoio especializado sem perder o direito à escolarização comum.",
        "feedbackErro": "A pegadinha é tratar o AEE como alternativa à classe comum. A dupla oferta existe justamente porque as funções são diferentes.",
        "dicaBanca": "Se o AEE elimina aula comum, revise o conceito de complementaridade."
    },
    {
        "pergunta": "O estudo de caso, na organização atual da educação especial inclusiva, deve concentrar-se em:",
        "alternativas": [
            "diagnosticar clinicamente a deficiência.",
            "substituir toda avaliação pedagógica da turma.",
            "definir a capacidade civil do estudante.",
            "identificar demandas, barreiras, potencialidades e apoios necessários no contexto educacional.",
            "classificar o estudante por nível de deficiência."
        ],
        "correta": 3,
        "explicacao": "O estudo de caso é instrumento pedagógico voltado às necessidades educacionais, barreiras, potencialidades e apoios.",
        "feedbackAcerto": "Correto. O foco está na participação e na aprendizagem no contexto escolar, não em produzir diagnóstico clínico.",
        "feedbackErro": "Se você escolheu diagnóstico, confundiu atribuição pedagógica com atribuição da saúde.",
        "dicaBanca": "Estudo de caso: barreiras + potencialidades + apoios."
    },
    {
        "pergunta": "A exigência de laudo médico como condição obrigatória para iniciar o AEE:",
        "alternativas": [
            "contraria a política atual, que não condiciona a oferta a diagnóstico ou documento de profissional de saúde.",
            "está de acordo com a política vigente, como regra geral para a organização da educação inclusiva..",
            "é obrigatória apenas para estudantes com TEA, como regra geral para a organização da educação inclusiva..",
            "é necessária somente na educação infantil, como regra geral para a organização da educação inclusiva..",
            "é determinada pela LBI para todas as deficiências, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 0,
        "explicacao": "A política atual separa a identificação das necessidades educacionais da obrigatoriedade de diagnóstico clínico.",
        "feedbackAcerto": "Correto. O laudo pode contribuir como informação subsidiária, mas não pode ser a porta de entrada obrigatória para o AEE.",
        "feedbackErro": "O erro é transformar documento de saúde em requisito educacional. Isso pode criar barreira de acesso ao apoio.",
        "dicaBanca": "Atualização muito relevante para provas de 2026/2027."
    },
    {
        "pergunta": "O PAEE e o PEI, na política vigente, devem ser entendidos como:",
        "alternativas": [
            "documentos clínicos produzidos pela saúde, como regra geral para a organização da educação inclusiva..",
            "documentos exclusivos do profissional de apoio.",
            "formulários administrativos sem impacto na sala de aula.",
            "documentos pedagógicos individualizados, derivados do estudo de caso e atualizados continuamente.",
            "substitutos do projeto político-pedagógico, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 3,
        "explicacao": "PAEE e PEI são instrumentos pedagógicos individualizados que organizam o atendimento e a escolarização.",
        "feedbackAcerto": "Correto. Eles não são laudos nem prontuários médicos; orientam práticas pedagógicas e apoios.",
        "feedbackErro": "Se você marcou documento clínico, perdeu a natureza pedagógica desses instrumentos.",
        "dicaBanca": "PAEE/PEI: pedagógicos, individualizados e atualizáveis."
    },
    {
        "pergunta": "A elaboração e o acompanhamento de PAEE e PEI devem considerar:",
        "alternativas": [
            "somente a opinião do profissional de apoio, como regra geral para a organização da educação inclusiva..",
            "a participação do estudante, da família e da equipe escolar, conforme o caso, articulada ao estudo de caso.",
            "exclusivamente o diagnóstico médico, como regra geral para a organização da educação inclusiva..",
            "somente a nota do estudante, como regra geral para a organização da educação inclusiva..",
            "apenas as limitações observadas, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 1,
        "explicacao": "A política valoriza participação do estudante e familiares e construção pedagógica articulada.",
        "feedbackAcerto": "Correto. Os planos ganham qualidade quando integram informações do estudante, família e profissionais que participam do processo educacional.",
        "feedbackErro": "O erro é produzir planejamento sobre o estudante sem sua participação e sem diálogo com quem o acompanha.",
        "dicaBanca": "Planejamento inclusivo é colaborativo."
    },
    {
        "pergunta": "Na perspectiva inclusiva, o currículo comum:",
        "alternativas": [
            "deixa de se aplicar aos estudantes público da educação especial.",
            "deve ser substituído integralmente por atividades funcionais, como regra geral para a organização da educação inclusiva..",
            "continua sendo referência, com recursos, estratégias e adaptações que garantam acesso e participação.",
            "é aplicado apenas a estudantes sem deficiência, como regra geral para a organização da educação inclusiva..",
            "não pode sofrer qualquer flexibilização ou acessibilidade, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 2,
        "explicacao": "A inclusão curricular busca garantir acesso ao currículo comum por meio de apoios e adaptações, evitando currículos paralelos automáticos.",
        "feedbackAcerto": "Correto. O estudante participa do currículo da etapa com condições de acessibilidade e estratégias adequadas às necessidades.",
        "feedbackErro": "O erro é presumir que deficiência significa currículo separado ou totalmente reduzido.",
        "dicaBanca": "Adaptação de acesso não é abandono do currículo comum."
    },
    {
        "pergunta": "Uma professora entrega ao estudante com deficiência apenas desenhos para colorir enquanto a turma trabalha o conteúdo curricular. Sem justificativa pedagógica individualizada, essa prática:",
        "alternativas": [
            "é inclusiva porque mantém o estudante ocupado, como regra geral para a organização da educação inclusiva..",
            "é obrigatória para evitar frustração, como regra geral para a organização da educação inclusiva..",
            "pode configurar exclusão curricular, pois presença física sem acesso ao conteúdo não assegura participação e aprendizagem.",
            "é recomendada sempre que houver profissional de apoio, como regra geral para a organização da educação inclusiva..",
            "é equivalente ao AEE, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 2,
        "explicacao": "Inclusão exige acesso ao currículo e oportunidades reais de aprendizagem, não mera ocupação do estudante.",
        "feedbackAcerto": "Correto. Uma tarefa desconectada do objetivo da turma pode produzir exclusão dentro da própria sala comum.",
        "feedbackErro": "A pegadinha é confundir estar na sala com estar incluído pedagogicamente.",
        "dicaBanca": "Presença física ≠ inclusão curricular."
    },
    {
        "pergunta": "Na avaliação de um estudante com deficiência, uma prática inclusiva é:",
        "alternativas": [
            "garantir acessibilidade e adaptações necessárias, preservando o objetivo de aprendizagem que se pretende avaliar.",
            "eliminar toda avaliação, como regra geral para a organização da educação inclusiva..",
            "atribuir nota máxima automaticamente, como regra geral para a organização da educação inclusiva..",
            "avaliar apenas comportamento, como regra geral para a organização da educação inclusiva..",
            "usar sempre instrumento diferente e mais fácil, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 0,
        "explicacao": "A avaliação inclusiva busca remover barreiras do instrumento sem abandonar o que precisa ser verificado.",
        "feedbackAcerto": "Correto. Adaptar a forma de acesso ou resposta pode permitir que a avaliação meça o conhecimento, e não a barreira.",
        "feedbackErro": "O erro é confundir acessibilidade com aprovação automática ou redução indiscriminada de exigência.",
        "dicaBanca": "Pergunte: a adaptação remove barreira ou altera indevidamente o objetivo?"
    },
    {
        "pergunta": "Um estudante com baixa visão necessita prova ampliada. A escola oferece o mesmo conteúdo em fonte maior. Essa medida é exemplo de:",
        "alternativas": [
            "recurso de acessibilidade que preserva o objetivo avaliativo.",
            "segregação, como regra geral para a organização da educação inclusiva..",
            "redução curricular, como regra geral para a organização da educação inclusiva..",
            "dispensa de avaliação, como regra geral para a organização da educação inclusiva..",
            "atendimento clínico, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 0,
        "explicacao": "A ampliação modifica a apresentação do instrumento para permitir acesso visual, sem alterar o conteúdo avaliado.",
        "feedbackAcerto": "Correto. A adaptação remove uma barreira sensorial e mantém o mesmo objetivo de aprendizagem.",
        "feedbackErro": "Se você chamou isso de redução curricular, confundiu mudança de formato com mudança de conteúdo.",
        "dicaBanca": "Acessibilidade pode alterar o meio sem alterar o objetivo."
    },
    {
        "pergunta": "Em relação ao estudante surdo usuário de Libras, uma abordagem inclusiva reconhece:",
        "alternativas": [
            "a Libras apenas como recurso auxiliar eventual, como regra geral para a organização da educação inclusiva..",
            "que materiais visuais tornam desnecessário qualquer planejamento pedagógico, como regra geral para a organização da educação inclusiva..",
            "que a oralização deve ser obrigatória, como regra geral para a organização da educação inclusiva..",
            "que intérprete substitui o professor, como regra geral para a organização da educação inclusiva..",
            "a necessidade de acessibilidade linguística e o direito de utilizar sua língua e recursos adequados de comunicação."
        ],
        "correta": 4,
        "explicacao": "A inclusão de estudantes surdos exige acessibilidade linguística e respeito à Libras e às formas de comunicação pertinentes.",
        "feedbackAcerto": "Correto. A língua do estudante e os recursos de acessibilidade devem ser considerados no processo educacional.",
        "feedbackErro": "O erro é transformar acessibilidade linguística em imposição de oralidade ou supor que intérprete assume o papel docente.",
        "dicaBanca": "Intérprete media comunicação; professor continua responsável pelo ensino."
    },
    {
        "pergunta": "Sobre altas habilidades ou superdotação, é correto afirmar que:",
        "alternativas": [
            "esses estudantes não integram o público da educação especial.",
            "são identificados exclusivamente por notas altas, como regra geral para a organização da educação inclusiva..",
            "devem ser dispensados de acompanhamento pedagógico, como regra geral para a organização da educação inclusiva..",
            "necessitam apenas aceleração de série, como regra geral para a organização da educação inclusiva..",
            "integram o público da educação especial e podem necessitar atendimento suplementar e estratégias de enriquecimento."
        ],
        "correta": 4,
        "explicacao": "Altas habilidades/superdotação integram o público da educação especial e o AEE pode ter função suplementar.",
        "feedbackAcerto": "Correto. O atendimento deve responder às potencialidades e necessidades, podendo incluir enriquecimento e outras estratégias.",
        "feedbackErro": "O erro comum é pensar que apenas deficiência gera necessidade de educação especial.",
        "dicaBanca": "AEE: suplementar para altas habilidades/superdotação."
    },
    {
        "pergunta": "Um aluno apresenta rendimento elevado em uma área, criatividade e forte envolvimento com determinados problemas, mas notas medianas em outras disciplinas. Em uma perspectiva inclusiva:",
        "alternativas": [
            "as notas medianas excluem qualquer hipótese de altas habilidades, como regra geral para a organização da educação inclusiva..",
            "o estudante não necessita de desafio adicional, como regra geral para a organização da educação inclusiva..",
            "somente um laudo médico pode permitir qualquer ação pedagógica, como regra geral para a organização da educação inclusiva..",
            "a equipe pode aprofundar a observação e o estudo de caso, pois altas habilidades não se reduzem à média geral de notas.",
            "a escola deve aguardar desempenho perfeito em todas as áreas, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 3,
        "explicacao": "A identificação educacional de altas habilidades considera diferentes manifestações e não depende exclusivamente de notas uniformemente altas.",
        "feedbackAcerto": "Correto. Potencial elevado pode aparecer em áreas específicas e deve ser observado pedagogicamente.",
        "feedbackErro": "A pegadinha é usar desempenho escolar global como único marcador.",
        "dicaBanca": "Altas habilidades não significa excelência em tudo."
    },
    {
        "pergunta": "Em relação ao estudante com TEA, a perspectiva inclusiva recomenda:",
        "alternativas": [
            "identificar barreiras e necessidades individuais, pois o espectro apresenta grande diversidade de características e apoios.",
            "presumir as mesmas necessidades para todos com o diagnóstico.",
            "retirar o estudante de atividades coletivas por padrão, como regra geral para a organização da educação inclusiva..",
            "priorizar controle de comportamento acima da aprendizagem, como regra geral para a organização da educação inclusiva..",
            "condicionar participação ao uso de fala oral, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 0,
        "explicacao": "O diagnóstico não determina sozinho o perfil de funcionamento ou o apoio necessário.",
        "feedbackAcerto": "Correto. A inclusão exige análise individual e contextual, não um protocolo único para todas as pessoas com TEA.",
        "feedbackErro": "Se você generalizou pelo diagnóstico, caiu em uma lógica capacitista e pouco individualizada.",
        "dicaBanca": "Diagnóstico orienta informação; não substitui estudo das necessidades."
    },
    {
        "pergunta": "Em uma mudança de rotina, estudante com TEA demonstra ansiedade. Uma estratégia inclusiva é:",
        "alternativas": [
            "exigir adaptação imediata, sem explicações, como regra geral para a organização da educação inclusiva..",
            "usar comunicação clara, antecipação e recursos de previsibilidade, quando adequados ao estudante.",
            "retirá-lo permanentemente das atividades diferentes, como regra geral para a organização da educação inclusiva..",
            "expor seu diagnóstico para a turma, como regra geral para a organização da educação inclusiva..",
            "ignorar os sinais de desconforto, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 1,
        "explicacao": "Recursos de previsibilidade e comunicação podem reduzir barreiras e favorecer participação quando correspondem às necessidades do estudante.",
        "feedbackAcerto": "Correto. A estratégia busca apoiar a transição sem isolar nem punir.",
        "feedbackErro": "O erro é interpretar reação à mudança como simples desobediência e responder com imposição.",
        "dicaBanca": "Questões situacionais da Ágata costumam valorizar previsibilidade e comunicação acessível."
    },
    {
        "pergunta": "Comunicação aumentativa e alternativa pode ser utilizada:",
        "alternativas": [
            "apenas por pessoas sem nenhuma fala oral, como regra geral para a organização da educação inclusiva..",
            "exclusivamente por estudantes com TEA, como regra geral para a organização da educação inclusiva..",
            "somente fora da sala comum, como regra geral para a organização da educação inclusiva..",
            "apenas mediante prescrição médica, como regra geral para a organização da educação inclusiva..",
            "por pessoas com necessidades complexas de comunicação, de acordo com suas necessidades, inclusive como apoio complementar à fala."
        ],
        "correta": 4,
        "explicacao": "CAA reúne estratégias e recursos que ampliam possibilidades de expressão e compreensão de pessoas com necessidades complexas de comunicação.",
        "feedbackAcerto": "Correto. Ela pode complementar ou substituir formas de comunicação conforme a necessidade individual.",
        "feedbackErro": "O erro é restringir CAA a um diagnóstico ou exigir ausência total de fala.",
        "dicaBanca": "CAA é recurso de participação, não rótulo diagnóstico."
    },
    {
        "pergunta": "Quando um estudante utiliza prancha de comunicação, o profissional de apoio deve:",
        "alternativas": [
            "responder por ele sempre que a resposta demorar, como regra geral para a organização da educação inclusiva..",
            "usar o recurso apenas no AEE, como regra geral para a organização da educação inclusiva..",
            "retirar a prancha para estimular oralidade, como regra geral para a organização da educação inclusiva..",
            "dar tempo para a expressão, favorecer o uso do recurso e apoiar a interação com colegas e professores.",
            "mostrar as respostas corretas na prancha, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 3,
        "explicacao": "O apoio deve ampliar a autonomia comunicativa e a participação do estudante.",
        "feedbackAcerto": "Correto. O recurso existe para dar voz ao estudante; o adulto deve facilitar o uso, não substituir a manifestação.",
        "feedbackErro": "Se você escolheu responder pelo aluno, transformou apoio em silenciamento.",
        "dicaBanca": "Dar tempo também é acessibilidade."
    },
    {
        "pergunta": "Na perspectiva inclusiva, o profissional de apoio escolar:",
        "alternativas": [
            "substitui o professor no planejamento, ensino e avaliação, como regra geral para a organização da educação inclusiva..",
            "deve decidir autonomamente as adaptações curriculares, como regra geral para a organização da educação inclusiva..",
            "é responsável por elaborar sozinho o PEI, como regra geral para a organização da educação inclusiva..",
            "atua exclusivamente fora da sala, como regra geral para a organização da educação inclusiva..",
            "atua nas necessidades de apoio previstas para participação, locomoção, higiene, alimentação, interação e comunicação, articulado à equipe pedagógica."
        ],
        "correta": 4,
        "explicacao": "A função do profissional de apoio é distinta da função docente e deve estar integrada ao planejamento pedagógico.",
        "feedbackAcerto": "Correto. O apoio favorece acesso e participação sem assumir atribuições exclusivas do professor.",
        "feedbackErro": "O erro mais importante é confundir proximidade com o estudante com responsabilidade docente.",
        "dicaBanca": "Ágata já cobrou diretamente a separação entre apoio escolar e função docente."
    },
    {
        "pergunta": "O fato de um estudante precisar de profissional de apoio:",
        "alternativas": [
            "significa que deve permanecer sempre ao lado do adulto, como regra geral para a organização da educação inclusiva..",
            "torna o professor dispensável, como regra geral para a organização da educação inclusiva..",
            "impede trabalho em grupo, como regra geral para a organização da educação inclusiva..",
            "não elimina a necessidade de favorecer autonomia, interação com pares e redução gradual de ajuda quando possível.",
            "significa dependência permanente, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 3,
        "explicacao": "O apoio deve ser proporcional às necessidades e evitar dependência criada pelo excesso de ajuda.",
        "feedbackAcerto": "Correto. Uma boa atuação apoia o que é necessário e preserva oportunidades de autonomia.",
        "feedbackErro": "A pegadinha é tratar apoio como vigilância permanente ou substituição de todas as ações do estudante.",
        "dicaBanca": "Mais apoio não é sempre melhor; o apoio precisa ser adequado."
    },
    {
        "pergunta": "Durante a higiene, um estudante consegue realizar algumas etapas sozinho. A prática mais inclusiva é:",
        "alternativas": [
            "realizar todo o procedimento para economizar tempo.",
            "expor a dificuldade para justificar a demora.",
            "deixar o estudante sem supervisão, mesmo havendo risco.",
            "pedir a colegas que façam o procedimento.",
            "oferecer ajuda apenas nas etapas necessárias, respeitando privacidade, tempo e escolhas."
        ],
        "correta": 4,
        "explicacao": "A atuação inclusiva combina segurança, dignidade e autonomia possível.",
        "feedbackAcerto": "Correto. Apoio proporcional preserva habilidades do estudante sem abandoná-lo quando há necessidade.",
        "feedbackErro": "O erro está nos extremos: fazer tudo por ele ou retirar todo suporte.",
        "dicaBanca": "Autonomia com apoio é um eixo forte para o cargo."
    },
    {
        "pergunta": "Uma escola deixa de levar um estudante com mobilidade reduzida a uma visita pedagógica porque o ônibus não é acessível. A solução inclusiva é:",
        "alternativas": [
            "planejar transporte e apoios acessíveis para garantir sua participação na atividade.",
            "mantê-lo na escola para evitar transtornos.",
            "cancelar a matrícula do estudante na atividade.",
            "condicionar a participação à presença da família.",
            "substituir todas as visitas por atividades individuais."
        ],
        "correta": 0,
        "explicacao": "Acessibilidade e participação devem ser consideradas também em atividades externas vinculadas à escola.",
        "feedbackAcerto": "Correto. A barreira de transporte deve ser enfrentada pelo planejamento, e não transferida ao estudante como exclusão.",
        "feedbackErro": "A alternativa aparentemente 'protetiva' que deixa o aluno na escola mantém a barreira e restringe participação.",
        "dicaBanca": "Proteção não deve servir de justificativa automática para exclusão."
    },
    {
        "pergunta": "Em uma brincadeira no recreio, colegas dizem que um estudante com deficiência 'não consegue brincar'. A intervenção mais alinhada à inclusão é:",
        "alternativas": [
            "retirar o estudante para evitar conflito, como regra geral para a organização da educação inclusiva..",
            "substituir sempre a brincadeira por atividade individual, como regra geral para a organização da educação inclusiva..",
            "obrigar os colegas a brincar sem qualquer diálogo, como regra geral para a organização da educação inclusiva..",
            "contar detalhes do diagnóstico para convencer a turma, como regra geral para a organização da educação inclusiva..",
            "mediar a situação, enfrentar a barreira atitudinal e criar condições para participação sem expor ou infantilizar o estudante."
        ],
        "correta": 4,
        "explicacao": "A inclusão também abrange convivência, recreação e enfrentamento de barreiras atitudinais.",
        "feedbackAcerto": "Correto. A mediação busca transformar a relação e garantir participação respeitosa.",
        "feedbackErro": "O erro é resolver o preconceito retirando justamente quem foi excluído ou expondo informações privadas.",
        "dicaBanca": "Barreira atitudinal se enfrenta, não se contorna com isolamento."
    },
    {
        "pergunta": "Em reunião pedagógica, o profissional de apoio deve contribuir:",
        "alternativas": [
            "fazendo diagnóstico clínico do estudante.",
            "recusando-se a participar, pois sua função é apenas cuidado físico.",
            "definindo sozinho o currículo.",
            "expondo opiniões sobre a família sem relação com a escola.",
            "relatando observações objetivas sobre participação, autonomia, barreiras e apoios, preservando sigilo."
        ],
        "correta": 4,
        "explicacao": "O trabalho colaborativo utiliza observações do cotidiano para qualificar o planejamento pedagógico, respeitando os papéis profissionais.",
        "feedbackAcerto": "Correto. O apoio pode oferecer informações relevantes sem ultrapassar sua competência ou violar privacidade.",
        "feedbackErro": "O erro é oscilar entre decidir tudo e se omitir completamente; colaboração exige participação dentro dos limites da função.",
        "dicaBanca": "Relato objetivo é diferente de diagnóstico."
    },
    {
        "pergunta": "O professor e o profissional de apoio discordam sobre uma estratégia. A conduta mais adequada é:",
        "alternativas": [
            "o apoio aplicar sua estratégia sem comunicar ninguém, como regra geral para a organização da educação inclusiva..",
            "discutir a situação com a equipe pedagógica e alinhar a atuação aos objetivos e planos educacionais.",
            "o professor excluir o apoio de todas as decisões.",
            "adotar a escolha da família sem análise escolar, como regra geral para a organização da educação inclusiva..",
            "interromper a atividade até decisão judicial, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 1,
        "explicacao": "A inclusão exige atuação articulada e coerente com o planejamento pedagógico.",
        "feedbackAcerto": "Correto. Divergências devem ser resolvidas de forma profissional e colaborativa, não por decisões isoladas.",
        "feedbackErro": "A pegadinha é transformar experiência cotidiana em autorização para decisão pedagógica independente.",
        "dicaBanca": "Trabalho colaborativo não elimina papéis profissionais."
    },
    {
        "pergunta": "A participação da família na educação inclusiva:",
        "alternativas": [
            "substitui a responsabilidade da escola, como regra geral para a organização da educação inclusiva..",
            "deve ser favorecida como parte do diálogo e do planejamento, sem transferir à família obrigações próprias do sistema educacional.",
            "é dispensável quando existe laudo, como regra geral para a organização da educação inclusiva..",
            "ocorre apenas na matrícula, como regra geral para a organização da educação inclusiva..",
            "autoriza a família a definir sozinha os objetivos curriculares, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 1,
        "explicacao": "A legislação atual valoriza participação da família e do estudante, mantendo as responsabilidades institucionais da escola.",
        "feedbackAcerto": "Correto. Família e escola colaboram; nenhuma delas substitui integralmente a outra.",
        "feedbackErro": "O erro é usar participação familiar para transferir à família custos, apoios ou decisões que são responsabilidade educacional.",
        "dicaBanca": "Participação ≠ terceirização da obrigação escolar."
    },
    {
        "pergunta": "Uma escola particular cobra taxa adicional de matrícula de estudante com deficiência para custear adaptações inclusivas. À luz da LBI, essa cobrança é:",
        "alternativas": [
            "permitida se constar do contrato, como regra geral para a organização da educação inclusiva..",
            "obrigatória quando houver profissional de apoio, como regra geral para a organização da educação inclusiva..",
            "vedada, pois o cumprimento das medidas de inclusão não autoriza valores adicionais em mensalidades, anuidades ou matrículas.",
            "permitida somente no ensino médio, como regra geral para a organização da educação inclusiva..",
            "decidida livremente pela instituição, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 2,
        "explicacao": "A LBI veda cobrança adicional nas instituições privadas pelo cumprimento das obrigações de inclusão.",
        "feedbackAcerto": "Correto. O custo das medidas inclusivas não pode ser transferido individualmente ao estudante com deficiência.",
        "feedbackErro": "A pegadinha é supor que contrato privado pode afastar uma proibição legal.",
        "dicaBanca": "Direito inclusivo também se aplica à rede privada."
    },
    {
        "pergunta": "Recusar matrícula a um estudante por motivo de deficiência:",
        "alternativas": [
            "é incompatível com a legislação inclusiva e pode configurar discriminação.",
            "pode ser justificado pela ausência de experiência da escola.",
            "é permitido se a turma estiver organizada sem profissional de apoio.",
            "é permitido em escola privada.",
            "é obrigatório quando o estudante necessita de adaptações."
        ],
        "correta": 0,
        "explicacao": "A legislação brasileira veda discriminação e garante acesso à educação em sistema inclusivo.",
        "feedbackAcerto": "Correto. Necessidade de apoio ou adaptação não é fundamento legítimo para rejeitar o estudante.",
        "feedbackErro": "O erro é converter uma obrigação de acessibilidade da escola em condição de exclusão do aluno.",
        "dicaBanca": "Falta de preparo exige organização, não recusa discriminatória."
    },
    {
        "pergunta": "Em relação à acessibilidade, uma escola inclusiva deve considerar:",
        "alternativas": [
            "somente acesso físico ao prédio, como regra geral para a organização da educação inclusiva..",
            "apenas rampas e banheiros, como regra geral para a organização da educação inclusiva..",
            "dimensões arquitetônicas, comunicacionais, informacionais, tecnológicas e atitudinais, entre outras.",
            "somente recursos para estudantes cadeirantes, como regra geral para a organização da educação inclusiva..",
            "apenas materiais impressos, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 2,
        "explicacao": "A acessibilidade é multidimensional e envolve diferentes tipos de barreiras.",
        "feedbackAcerto": "Correto. Uma escola pode ter rampa e ainda ser inacessível na comunicação, tecnologia, atitudes ou práticas.",
        "feedbackErro": "O erro é reduzir acessibilidade à arquitetura.",
        "dicaBanca": "Rampa é importante, mas não é sinônimo de escola inclusiva."
    },
    {
        "pergunta": "Uma escola possui prédio acessível, mas professores impedem estudante com deficiência de participar de apresentações por presumirem incapacidade. Nesse caso:",
        "alternativas": [
            "a escola é plenamente inclusiva porque o prédio é acessível.",
            "há barreira atitudinal que compromete participação, apesar da acessibilidade arquitetônica.",
            "não existe barreira porque a matrícula foi garantida.",
            "o problema é exclusivamente curricular.",
            "a solução é transferir o estudante."
        ],
        "correta": 1,
        "explicacao": "Acessibilidade arquitetônica não elimina barreiras atitudinais.",
        "feedbackAcerto": "Correto. Inclusão requer participação real e combate a estereótipos, não apenas adequação física.",
        "feedbackErro": "Se você considerou a escola inclusiva apenas pela estrutura, ignorou a dimensão atitudinal.",
        "dicaBanca": "Questão boa para diferenciar tipos de acessibilidade."
    },
    {
        "pergunta": "Uma prática baseada em 'superproteção' pode ser excludente quando:",
        "alternativas": [
            "oferece apoio proporcional ao risco real, como regra geral para a organização da educação inclusiva..",
            "utiliza adaptações de segurança, como regra geral para a organização da educação inclusiva..",
            "respeita o tempo do estudante, como regra geral para a organização da educação inclusiva..",
            "impede sistematicamente o estudante de tentar, escolher ou participar de atividades que poderiam ser realizadas com apoio.",
            "considera orientação da equipe, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 3,
        "explicacao": "A superproteção pode restringir autonomia e participação quando substitui a pessoa sem necessidade.",
        "feedbackAcerto": "Correto. Uma conduta aparentemente cuidadosa pode tornar-se barreira se elimina oportunidades de participação e autonomia.",
        "feedbackErro": "A Ágata gosta de alternativas 'protetivas' que, na prática, isolam o estudante.",
        "dicaBanca": "Cuidado: segurança não é sinônimo de proibição."
    },
    {
        "pergunta": "Na perspectiva inclusiva, a autonomia do estudante:",
        "alternativas": [
            "significa ausência de qualquer apoio, como regra geral para a organização da educação inclusiva..",
            "pode ser construída e exercida com apoios necessários, respeitando escolhas e possibilidades.",
            "exige independência física total, como regra geral para a organização da educação inclusiva..",
            "é incompatível com profissional de apoio, como regra geral para a organização da educação inclusiva..",
            "depende de maioridade civil, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 1,
        "explicacao": "Autonomia não é o mesmo que independência absoluta; apoios podem ampliar a capacidade de escolher e participar.",
        "feedbackAcerto": "Correto. A função do apoio é justamente permitir que a pessoa exerça mais autonomia, não tomar todas as decisões por ela.",
        "feedbackErro": "O erro é usar dependência em alguma atividade como justificativa para retirar escolha e participação.",
        "dicaBanca": "Autonomia pode existir com apoio."
    },
    {
        "pergunta": "Em uma atividade, o estudante demora mais para responder usando comunicação alternativa. O profissional de apoio deve:",
        "alternativas": [
            "responder no lugar dele para manter o ritmo da turma.",
            "retirar o recurso, como regra geral para a organização da educação inclusiva..",
            "considerar ausência de resposta após alguns segundos, como regra geral para a organização da educação inclusiva..",
            "oferecer tempo de resposta e apoiar o uso do recurso, preservando a autoria da comunicação.",
            "pedir que outro aluno responda por ele, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 3,
        "explicacao": "O tempo necessário para utilização de recursos de comunicação integra as condições de acessibilidade.",
        "feedbackAcerto": "Correto. A comunicação pertence ao estudante; o apoio deve criar condições para que ele se expresse.",
        "feedbackErro": "O erro é priorizar velocidade da rotina em detrimento da participação e da autoria.",
        "dicaBanca": "Tempo de resposta também pode ser adaptação."
    },
    {
        "pergunta": "Quando a escola compartilha informações sobre deficiência de um estudante com toda a turma sem necessidade pedagógica e sem cuidado com privacidade:",
        "alternativas": [
            "pode violar dignidade, privacidade e proteção de dados pessoais.",
            "age corretamente porque inclusão exige divulgar diagnósticos.",
            "cumpre obrigação da LBI.",
            "não há problema se a informação for verdadeira.",
            "a divulgação é obrigatória para combater o capacitismo."
        ],
        "correta": 0,
        "explicacao": "Inclusão não autoriza exposição indiscriminada de diagnóstico ou dados sensíveis.",
        "feedbackAcerto": "Correto. Sensibilizar a comunidade não exige revelar informações pessoais do estudante.",
        "feedbackErro": "O erro é confundir conscientização com divulgação de dados privados.",
        "dicaBanca": "Combate ao preconceito deve preservar a pessoa."
    },
    {
        "pergunta": "A articulação intersetorial na educação inclusiva significa:",
        "alternativas": [
            "transferir à saúde a decisão sobre currículo e escolarização.",
            "exigir laudo para toda decisão pedagógica, como regra geral para a organização da educação inclusiva..",
            "promover diálogo entre educação e outras políticas, quando necessário, preservando as competências de cada setor.",
            "substituir o professor por profissional clínico, como regra geral para a organização da educação inclusiva..",
            "encaminhar para fora da escola todo estudante com necessidade de apoio."
        ],
        "correta": 2,
        "explicacao": "A intersetorialidade coordena diferentes políticas sem medicalizar nem retirar a responsabilidade educacional da escola.",
        "feedbackAcerto": "Correto. Saúde, assistência e educação podem cooperar, mas a escola mantém suas atribuições pedagógicas.",
        "feedbackErro": "O erro é pensar que articulação significa subordinação da educação à saúde.",
        "dicaBanca": "Intersetorialidade = cooperação com limites de competência."
    },
    {
        "pergunta": "Um estudante apresenta necessidade de apoio ainda não documentada por laudo. A escola deve:",
        "alternativas": [
            "aguardar o diagnóstico antes de remover qualquer barreira, como regra geral para a organização da educação inclusiva..",
            "encaminhá-lo automaticamente para escola especial, como regra geral para a organização da educação inclusiva..",
            "suspender sua matrícula, como regra geral para a organização da educação inclusiva..",
            "analisar pedagogicamente as necessidades e adotar apoios cabíveis, sem condicionar toda ação à documentação clínica.",
            "proibir adaptações até avaliação médica, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 3,
        "explicacao": "A política atual impede que a ausência de diagnóstico seja usada como barreira ao AEE e à identificação pedagógica de necessidades.",
        "feedbackAcerto": "Correto. A escola pode e deve agir sobre barreiras observadas no processo educacional.",
        "feedbackErro": "O erro é paralisar a inclusão até que o setor de saúde produza um documento.",
        "dicaBanca": "Necessidade educacional pode ser observada antes de diagnóstico."
    },
    {
        "pergunta": "Na perspectiva inclusiva, 'participação' significa:",
        "alternativas": [
            "estar fisicamente presente no mesmo prédio, como regra geral para a organização da educação inclusiva..",
            "apenas frequentar as aulas obrigatórias, como regra geral para a organização da educação inclusiva..",
            "ter oportunidades reais de envolver-se nas atividades, interações e decisões escolares com os apoios necessários.",
            "não precisar de apoio, como regra geral para a organização da educação inclusiva..",
            "ser aprovado ao final do ano, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 2,
        "explicacao": "Participação é dimensão substantiva da inclusão e vai além da presença física.",
        "feedbackAcerto": "Correto. O estudante precisa ter condições reais de se envolver na vida escolar.",
        "feedbackErro": "A pegadinha é confundir matrícula ou presença com participação.",
        "dicaBanca": "Os quatro eixos atuais são acesso, permanência, participação e aprendizagem."
    },
    {
        "pergunta": "Uma estudante com deficiência participa da classe comum, mas nunca recebe material em formato que consiga acessar. A situação demonstra:",
        "alternativas": [
            "inclusão plena, pois a matrícula está garantida.",
            "necessidade obrigatória de transferência, como regra geral para a organização da educação inclusiva..",
            "barreira à aprendizagem e participação, apesar do acesso físico à classe.",
            "ausência de responsabilidade escolar, como regra geral para a organização da educação inclusiva..",
            "problema exclusivo da família, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 2,
        "explicacao": "O direito à educação inclusiva exige recursos e acessibilidade que tornem o conteúdo utilizável pelo estudante.",
        "feedbackAcerto": "Correto. Estar na sala sem acessar o material produz exclusão pedagógica.",
        "feedbackErro": "O erro é considerar a matrícula suficiente para caracterizar inclusão.",
        "dicaBanca": "Acesso físico e acesso pedagógico são dimensões diferentes."
    },
    {
        "pergunta": "O combate ao capacitismo no contexto escolar envolve:",
        "alternativas": [
            "tratar pessoas com deficiência como eternamente dependentes para protegê-las.",
            "questionar estereótipos de incapacidade e garantir oportunidades de escolha, participação e aprendizagem.",
            "evitar qualquer conversa sobre deficiência, como regra geral para a organização da educação inclusiva..",
            "separar estudantes para reduzir conflitos, como regra geral para a organização da educação inclusiva..",
            "expor diagnósticos para gerar pena, como regra geral para a organização da educação inclusiva.."
        ],
        "correta": 1,
        "explicacao": "Capacitismo envolve crenças e práticas que inferiorizam ou presumem incapacidade com base na deficiência.",
        "feedbackAcerto": "Correto. Enfrentá-lo significa mudar atitudes e práticas que restringem oportunidades.",
        "feedbackErro": "O erro é substituir preconceito por paternalismo; superproteção também pode reproduzir capacitismo.",
        "dicaBanca": "Capacitismo pode aparecer como rejeição ou como paternalismo."
    },
    {
        "pergunta": "Uma escola decide que estudante com deficiência deve permanecer sempre acompanhado pelo apoio, inclusive quando consegue realizar atividades e interações de forma autônoma. A conduta mais adequada seria:",
        "alternativas": [
            "manter proximidade constante para demonstrar cuidado, como regra geral para a organização da educação inclusiva..",
            "deixar o estudante isolado quando não precisar do profissional.",
            "retirar definitivamente o apoio, como regra geral para a organização da educação inclusiva..",
            "pedir à família que decida diariamente, como regra geral para a organização da educação inclusiva..",
            "ajustar o nível de ajuda às necessidades de cada situação, evitando dependência desnecessária."
        ],
        "correta": 4,
        "explicacao": "O apoio deve ser funcional e proporcional às necessidades reais, ampliando autonomia e interação com pares.",
        "feedbackAcerto": "Correto. A presença do profissional não deve criar uma barreira adicional entre o estudante e a turma.",
        "feedbackErro": "O erro é confundir apoio individual com presença intrusiva permanente.",
        "dicaBanca": "Bom apoio também sabe quando recuar."
    },
    {
        "pergunta": "Assinale a alternativa que sintetiza melhor a Educação Especial na Perspectiva Inclusiva:",
        "alternativas": [
            "matricular o estudante na classe comum, ainda que permaneça sem acesso ao currículo, como regra geral para a organização da educação inclusiva..",
            "oferecer escolarização separada sempre que houver necessidade de adaptação, como regra geral para a organização da educação inclusiva..",
            "concentrar todo atendimento no AEE, como regra geral para a organização da educação inclusiva..",
            "priorizar diagnóstico e classificação antes de qualquer apoio, como regra geral para a organização da educação inclusiva..",
            "organizar o sistema, a escola, o currículo e os apoios para remover barreiras e assegurar acesso, permanência, participação e aprendizagem, respeitando a diversidade."
        ],
        "correta": 4,
        "explicacao": "A perspectiva inclusiva articula direito à classe comum, acessibilidade, apoio individualizado, participação e aprendizagem.",
        "feedbackAcerto": "Correto. A alternativa reúne os elementos centrais da inclusão contemporânea sem reduzir o direito à simples matrícula.",
        "feedbackErro": "Se você escolheu presença física, AEE isolado ou diagnóstico como centro do processo, ficou abaixo da concepção atual de educação inclusiva.",
        "dicaBanca": "Questão-síntese: barreiras, apoios e quatro dimensões da inclusão."
    }
];

if (typeof window !== 'undefined') { window.apoioEducacaoInclusiva = apoioEducacaoInclusiva; }
