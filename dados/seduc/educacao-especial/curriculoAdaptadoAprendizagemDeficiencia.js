/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 5: Currículo Adaptado, Aprendizagem e Deficiência
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo revisado em 02/09/2026.
   Matriz de estilo: provas FGV de Educação Especial, com destaque
   para SEDUC-SP 2026 (DUA, barreiras e práticas inclusivas).
==========================================================
   Revisão FGV de distratores e equilíbrio de extensão: 02/09/2026.
 ========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-CUR-001",
        "numero": 1,
        "subtopico": "Currículo inclusivo — referência comum",
        "dificuldade": "media",
        "pergunta": "Uma escola decide elaborar, para um estudante com deficiência, um currículo inteiramente separado do que é desenvolvido com a turma, sob o argumento de que isso tornaria a aprendizagem “mais adequada”. À luz da perspectiva inclusiva, a medida mais apropriada é",
        "alternativas": [
            "manter o currículo comum como referência e organizar recursos, estratégias e adaptações que assegurem acesso, participação e aprendizagem.",
            "criar um currículo paralelo, pois estudantes com deficiência não precisam compartilhar objetivos educacionais com a turma.",
            "substituir os conteúdos curriculares por atividades de vida diária em todas as disciplinas.",
            "retirar o estudante das atividades coletivas sempre que houver conteúdos considerados complexos.",
            "adotar exclusivamente atividades do AEE como currículo principal do estudante."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou o princípio central: o estudante tem direito ao currículo comum, com acessibilidade, apoios e adaptações quando necessários. A resposta inclusiva não é apartá-lo do conhecimento escolar, mas remover barreiras para que participe e aprenda.",
        "feedbackErro": "A perspectiva inclusiva não autoriza transformar a deficiência em justificativa automática para um currículo paralelo, reduzido ou desconectado da turma. A legislação atual assegura acesso ao currículo em condições de igualdade e prevê recursos de acessibilidade e adaptações razoáveis.",
        "analiseAlternativas": [
            "Correta. O currículo comum permanece como referência; apoios e adaptações servem para tornar esse currículo acessível.",
            "Incorreta. Currículo paralelo e segregado rompe a participação no percurso comum e pode produzir exclusão pedagógica.",
            "Incorreta. Habilidades funcionais podem ser trabalhadas quando pertinentes, mas não substituem automaticamente o currículo escolar.",
            "Incorreta. Retirada sistemática reduz participação e não constitui resposta inclusiva.",
            "Incorreta. O AEE é complementar ou suplementar; não substitui a escolarização na classe comum."
        ],
        "dicaBanca": "Quando a FGV opuser 'currículo comum com apoios' a 'currículo separado', a alternativa inclusiva tende a preservar o acesso ao conhecimento comum.",
        "pegadinha": "Não confunda diferenciação pedagógica com criação de um ensino paralelo.",
        "memorizar2026": "Currículo inclusivo = currículo comum + acessibilidade + apoios + adaptações quando necessárias.",
        "fonte": "LBI, arts. 27 e 28, III; Decreto nº 12.686/2025, art. 4º, §1º e art. 11, §5º."
    },
    {
        "id": "SEDUC-EE-CUR-002",
        "numero": 2,
        "subtopico": "Adaptação curricular — finalidade",
        "dificuldade": "media",
        "pergunta": "Em uma turma inclusiva, a professora identifica que um estudante compreende os conceitos trabalhados, mas encontra barreira para registrar respostas longas por escrito. A adaptação mais coerente é",
        "alternativas": [
            "reduzir permanentemente os objetivos de aprendizagem para evitar frustração.",
            "permitir resposta oral ou por recurso tecnológico, preservando o objetivo conceitual avaliado.",
            "dispensar o estudante de todas as avaliações escritas e de qualquer forma de registro.",
            "substituir a atividade por exercícios de conteúdo mais simples e de série anterior.",
            "atribuir a mesma forma de resposta a todos, pois qualquer diferenciação viola a igualdade."
        ],
        "correta": 1,
        "feedbackAcerto": "Você distinguiu objetivo de aprendizagem de meio de expressão. Se a barreira está na forma de registrar, pode-se flexibilizar o modo de resposta sem reduzir o conhecimento que se pretende avaliar.",
        "feedbackErro": "Adaptar não significa diminuir automaticamente o que o estudante deve aprender, nem dispensá-lo do processo avaliativo. A adequação deve responder à barreira identificada e preservar, sempre que possível, o objetivo pedagógico.",
        "analiseAlternativas": [
            "Incorreta. Redução permanente de objetivos não decorre automaticamente de dificuldade na escrita.",
            "Correta. Muda-se o meio de expressão para eliminar a barreira, preservando o objetivo conceitual.",
            "Incorreta. A avaliação continua necessária; o que pode mudar é o instrumento ou a forma de resposta.",
            "Incorreta. Simplificar o conteúdo sem relação com a barreira pode empobrecer o currículo.",
            "Incorreta. Equidade admite diferenciação de meios para assegurar oportunidades reais."
        ],
        "dicaBanca": "FGV gosta de perguntar: o que está sendo avaliado? Se é compreensão conceitual, não deixe a forma de escrita se tornar uma barreira indevida.",
        "pegadinha": "Alterar o meio de resposta não é 'facilitar a prova'; é adequar o acesso ao objetivo avaliado.",
        "memorizar2026": "Adapte o meio quando o meio é a barreira; preserve o objetivo quando ele continua pertinente.",
        "fonte": "LBI, art. 28, II e III; Decreto nº 12.686/2025, art. 3º, V e VI."
    },
    {
        "id": "SEDUC-EE-CUR-003",
        "numero": 3,
        "subtopico": "Flexibilização curricular — equidade",
        "dificuldade": "alta",
        "pergunta": "Sobre flexibilização curricular em uma perspectiva inclusiva, está correto o que se afirma em",
        "alternativas": [
            "I, apenas.",
            "III, apenas.",
            "I e II, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu que flexibilização é uma resposta pedagógica às barreiras e pode incidir sobre diferentes dimensões do ensino. Ela não se confunde com redução obrigatória de expectativas.",
        "feedbackErro": "A afirmativa III torna a questão errada quando incluída: flexibilização não é sinônimo de reduzir objetivos em qualquer caso. O planejamento deve considerar o estudante, o contexto, as barreiras, os apoios e o propósito pedagógico.",
        "analiseAlternativas": [
            "Incorreta. I está correta, mas II também está.",
            "Incorreta. III é falsa: flexibilização não implica redução obrigatória de complexidade.",
            "Correta. I e II expressam a lógica inclusiva; III absolutiza uma prática que não é obrigatória.",
            "Incorreta. Inclui a afirmativa III, que está errada.",
            "Incorreta. A afirmativa III invalida o conjunto."
        ],
        "dicaBanca": "Em itens I/II/III da FGV, desconfie de termos absolutos como 'obrigatoriamente' e 'sempre' quando tratam de adaptações.",
        "pegadinha": "Flexibilizar ≠ baixar expectativa automaticamente.",
        "memorizar2026": "Flexibilização é ajuste intencional para eliminar barreiras e favorecer aprendizagem.",
        "fonte": "Decreto nº 12.686/2025, arts. 3º e 4º; LBI, art. 28.",
        "afirmacoes": [
            "I. Pode envolver ajustes em tempo, recursos, organização, linguagem e estratégias.",
            "II. Deve ser planejada a partir das barreiras e necessidades observadas, e não apenas do diagnóstico.",
            "III. Significa, obrigatoriamente, reduzir o nível de complexidade dos objetivos curriculares para estudantes com deficiência."
        ]
    },
    {
        "id": "SEDUC-EE-CUR-004",
        "numero": 4,
        "subtopico": "Acessibilidade curricular",
        "dificuldade": "alta",
        "pergunta": "Um estudante com baixa visão recebe o mesmo material impresso da turma, com fonte pequena e baixo contraste. A escola afirma que isso garante igualdade porque todos receberam exatamente o mesmo material. A conduta correta seria",
        "alternativas": [
            "manter o material idêntico e oferecer explicação oral apenas se o estudante solicitar.",
            "transferir a responsabilidade de adaptação ao professor do AEE.",
            "substituir integralmente o conteúdo por atividades em Braille, mesmo que o estudante utilize visão residual.",
            "oferecer material acessível à baixa visão, preservando o mesmo conteúdo curricular.",
            "reduzir a quantidade de conteúdo para compensar a dificuldade visual."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou o conceito de acessibilidade curricular: a igualdade de direito ao currículo pode exigir diferentes formatos, recursos e meios de acesso. O conteúdo não precisa ser empobrecido porque o suporte é inadequado.",
        "feedbackErro": "A distribuição de material idêntico não garante equidade quando o formato cria uma barreira. A escola deve providenciar recursos acessíveis de acordo com as necessidades do estudante.",
        "analiseAlternativas": [
            "Incorreta. A barreira já foi identificada; esperar a solicitação não substitui a responsabilidade de acessibilizar o material.",
            "Incorreta. O AEE pode colaborar, mas a acessibilidade é responsabilidade institucional e da prática pedagógica.",
            "Incorreta. Baixa visão não implica uso obrigatório de Braille; o recurso deve corresponder à necessidade individual.",
            "Correta. Preserva o conteúdo e modifica o acesso, eliminando a barreira visual.",
            "Incorreta. Dificuldade de acesso visual não justifica redução automática do conteúdo."
        ],
        "dicaBanca": "A FGV costuma explorar igualdade x equidade: 'o mesmo para todos' pode ser discriminatório quando mantém barreiras.",
        "pegadinha": "Acessibilidade não é privilégio nem redução curricular.",
        "memorizar2026": "Mesmo conteúdo pode exigir diferentes formatos de acesso.",
        "fonte": "LBI, art. 28, II, III e XVI; Decreto nº 12.686/2025, art. 11, §5º."
    },
    {
        "id": "SEDUC-EE-CUR-005",
        "numero": 5,
        "subtopico": "Currículo inclusivo — diagnóstico e potencialidades",
        "dificuldade": "alta",
        "pergunta": "Uma equipe pedagógica utiliza o diagnóstico clínico de um estudante como principal critério para definir, antecipadamente, que ele não conseguirá aprender determinados conteúdos. Essa prática é",
        "alternativas": [
            "adequada, porque o diagnóstico pode orientar limites pedagógicos quando elaborado por equipe multiprofissional e atualizado periodicamente, desde que haja articulação com o AEE e revisão periódica dos resultados observados.",
            "adequada se a família concordar com objetivos reduzidos e a decisão for reavaliada ao fim de cada período letivo.",
            "adequada se o PEI registrar as limitações identificadas e prever atividades compatíveis com o diagnóstico.",
            "inadequada apenas quando não houver AEE capaz de compensar as limitações previstas no diagnóstico.",
            "inadequada, pois o planejamento deve considerar potencialidades, barreiras, contexto, apoios e evidências de aprendizagem, sem presumir incapacidade pelo diagnóstico."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou a lógica contemporânea: diagnóstico não é sentença pedagógica. O planejamento inclusivo parte do estudo do estudante em contexto, das potencialidades, barreiras, demandas de apoio e respostas às intervenções.",
        "feedbackErro": "O diagnóstico pode subsidiar a compreensão das necessidades, mas não determina sozinho o que o estudante é capaz de aprender. Antecipar incapacidade com base nele reforça uma leitura medicalizante e reduz expectativas.",
        "analiseAlternativas": [
            "Incorreta. Diagnóstico clínico não define de modo determinista limites de aprendizagem.",
            "Incorreta. Concordância familiar não legitima prática pedagógica discriminatória.",
            "Incorreta. Registrar no PEI não torna adequada uma decisão baseada em presunção de incapacidade.",
            "Incorreta. A inadequação independe de o estudante frequentar AEE.",
            "Correta. O planejamento deve considerar potencialidades, barreiras, contexto e apoios."
        ],
        "dicaBanca": "Se a alternativa transformar laudo ou diagnóstico em 'teto de aprendizagem', desconfie.",
        "pegadinha": "Deficiência não determina incapacidade de aprender.",
        "memorizar2026": "Planeje a partir do estudante real em contexto, não de expectativas fixadas pelo diagnóstico.",
        "fonte": "Decreto nº 12.686/2025, art. 11; LBI, arts. 27 e 28."
    },
    {
        "id": "SEDUC-EE-CUR-006",
        "numero": 6,
        "subtopico": "DUA — antecipação de barreiras",
        "dificuldade": "alta",
        "pergunta": "Uma professora, antes de iniciar uma unidade didática, prevê que haverá estudantes com diferentes formas de acesso à informação, participação e expressão. Por isso, já organiza materiais em formatos variados, opções de participação e diferentes formas de demonstrar aprendizagem. Essa prática se aproxima do",
        "alternativas": [
            "Desenho Universal para a Aprendizagem, pois considera a diversidade desde o planejamento inicial e antecipa barreiras.",
            "ensino individualizado exclusivo, pois cria um currículo diferente para cada aluno antes da aula.",
            "modelo clínico, pois parte das limitações previamente diagnosticadas.",
            "currículo paralelo, pois abandona objetivos comuns de aprendizagem.",
            "reforço escolar, pois oferece mais de uma atividade sobre o mesmo conteúdo."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu o traço central do DUA cobrado pela FGV em 2026: antecipar barreiras e planejar, desde o início, diferentes possibilidades de acesso e participação.",
        "feedbackErro": "O DUA não é um conjunto de remendos posteriores nem um currículo separado por estudante. Ele busca tornar o planejamento inicial mais flexível para a diversidade da turma.",
        "analiseAlternativas": [
            "Correta. Antecipar barreiras e diversificar possibilidades desde o planejamento é núcleo do DUA.",
            "Incorreta. DUA não significa construir um currículo isolado para cada aluno.",
            "Incorreta. O foco não é classificar limitações clínicas, mas planejar acessibilidade pedagógica.",
            "Incorreta. O DUA preserva objetivos educacionais e amplia caminhos para alcançá-los.",
            "Incorreta. Diversidade de meios não se reduz a reforço escolar."
        ],
        "dicaBanca": "A prova FGV SEDUC-SP 2026 cobrou literalmente a antecipação de barreiras no currículo e a diversidade considerada no planejamento inicial.",
        "pegadinha": "DUA não é 'adaptar depois que deu errado'; é pensar a diversidade antes.",
        "memorizar2026": "DUA = antecipar barreiras + ampliar opções de acesso, participação e expressão.",
        "fonte": "FGV SEDUC-SP 2026, Educação Especial, questões 26 e 27; referência pedagógica de Zerbato e Mendes."
    },
    {
        "id": "SEDUC-EE-CUR-007",
        "numero": 7,
        "subtopico": "DUA — princípios",
        "dificuldade": "media",
        "pergunta": "Em relação aos três grandes princípios do Desenho Universal para a Aprendizagem, assinale a associação correta.",
        "alternativas": [
            "Engajamento = como demonstrar; representação = por que aprender; ação e expressão = o que aprender.",
            "Engajamento = por que aprender; representação = o que aprender; ação e expressão = como demonstrar o que se aprendeu.",
            "Engajamento = memorização; representação = avaliação; ação e expressão = reforço.",
            "Engajamento = adaptação individual; representação = diagnóstico; ação e expressão = laudo.",
            "Engajamento = conteúdo; representação = disciplina; ação e expressão = série."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a organização clássica do DUA: múltiplas formas de engajamento, de representação e de ação/expressão.",
        "feedbackErro": "Os princípios do DUA não correspondem a diagnóstico ou tipos de avaliação. Eles organizam formas de envolver o estudante, apresentar o conhecimento e permitir que ele aja e expresse o que sabe.",
        "analiseAlternativas": [
            "Incorreta. Troca as funções de engajamento, representação e ação/expressão.",
            "Correta. Engajamento = por que; representação = o que; ação/expressão = como.",
            "Incorreta. Esses termos não são os três princípios do DUA.",
            "Incorreta. DUA não se estrutura por diagnóstico ou laudo.",
            "Incorreta. Série e disciplina não são princípios do DUA."
        ],
        "dicaBanca": "FGV 2026 cobrou diretamente os três eixos: engajamento, representação e ação e expressão.",
        "pegadinha": "Não troque representação com ação/expressão.",
        "memorizar2026": "DUA: envolver → representar → permitir agir/expressar.",
        "fonte": "FGV SEDUC-SP 2026, Educação Especial, questão 27."
    },
    {
        "id": "SEDUC-EE-CUR-008",
        "numero": 8,
        "subtopico": "DUA — alcance",
        "dificuldade": "alta",
        "pergunta": "Sobre o Desenho Universal para a Aprendizagem, está correto o que se afirma em",
        "alternativas": [
            "II, apenas.",
            "I e III, apenas.",
            "I e II, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu o equilíbrio correto: o DUA amplia a acessibilidade desde o planejamento e beneficia a diversidade da turma, mas não elimina a necessidade de apoios individualizados quando eles forem necessários.",
        "feedbackErro": "A afirmativa III é a pegadinha. Um planejamento universalmente mais acessível não consegue antecipar todas as necessidades individuais. DUA e adaptações individualizadas podem coexistir.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa I também é verdadeira.",
            "Incorreta. Inclui III, que é falsa.",
            "Correta. I e II são verdadeiras; III é absoluta e incorreta.",
            "Incorreta. Inclui III, que é falsa.",
            "Incorreta. III torna o conjunto incorreto."
        ],
        "dicaBanca": "Na própria prova FGV 2026 apareceu a armadilha de afirmar que o DUA elimina recursos específicos.",
        "pegadinha": "DUA reduz barreiras gerais, mas não apaga necessidades individuais.",
        "memorizar2026": "DUA para todos + apoio individual quando necessário.",
        "fonte": "FGV SEDUC-SP 2026, Educação Especial, questões 26, 27 e item integrador final.",
        "afirmacoes": [
            "I. É útil para toda a turma, e não apenas para estudantes público da Educação Especial.",
            "II. Pode reduzir a necessidade de adaptações posteriores ao considerar a diversidade desde o início.",
            "III. Elimina a necessidade de apoios ou adaptações individualizadas em qualquer situação."
        ]
    },
    {
        "id": "SEDUC-EE-CUR-009",
        "numero": 9,
        "subtopico": "DUA — representação",
        "dificuldade": "media",
        "pergunta": "Durante uma aula de Ciências, a professora apresenta o mesmo conceito por texto, imagem, esquema tátil e explicação oral, permitindo que os estudantes utilizem os recursos que favoreçam sua compreensão. No DUA, essa decisão exemplifica principalmente múltiplas formas de",
        "alternativas": [
            "engajamento.",
            "avaliação somativa.",
            "ação e expressão.",
            "representação.",
            "reforço individual."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu o princípio da representação: diversificar a maneira de apresentar informações e conceitos para ampliar o acesso à compreensão.",
        "feedbackErro": "No DUA, representação se refere a como o conteúdo chega ao estudante. Engajamento diz respeito ao envolvimento e ação/expressão à forma como o estudante atua e demonstra aprendizagem.",
        "analiseAlternativas": [
            "Incorreta. Engajamento trata principalmente de interesse, motivação e participação.",
            "Incorreta. DUA não é uma classificação de modalidades de avaliação.",
            "Incorreta. Ação e expressão trata das formas de produzir, responder e demonstrar aprendizagem.",
            "Correta. Texto, imagem, áudio e recursos táteis são múltiplas formas de representação.",
            "Incorreta. A prática beneficia a turma e não é mero reforço."
        ],
        "dicaBanca": "Pergunte: 'o professor está mudando como o conteúdo é apresentado ou como o aluno responde?' Se apresenta, pense em representação.",
        "pegadinha": "Representação = múltiplos caminhos para acessar a informação.",
        "memorizar2026": "DUA: representação responde a 'o que aprender?'.",
        "fonte": "FGV SEDUC-SP 2026; princípios do DUA."
    },
    {
        "id": "SEDUC-EE-CUR-010",
        "numero": 10,
        "subtopico": "DUA — ação e expressão",
        "dificuldade": "media",
        "pergunta": "Em uma atividade sobre meio ambiente, todos os estudantes devem demonstrar compreensão dos mesmos conceitos. A professora permite que o produto final seja apresentado em texto, áudio, vídeo, infográfico ou exposição oral, desde que os critérios conceituais sejam atendidos. A prática corresponde principalmente a",
        "alternativas": [
            "redução de objetivos curriculares.",
            "adaptação exclusivamente destinada à Educação Especial.",
            "substituição da avaliação por atividade livre.",
            "múltiplas formas de representação.",
            "múltiplas formas de ação e expressão."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou ação e expressão: o objetivo conceitual é mantido, mas os estudantes dispõem de diferentes meios para demonstrar o que aprenderam.",
        "feedbackErro": "A variedade de produtos não significa ausência de critérios. O DUA permite diversificar meios de ação e expressão mantendo objetivos e critérios pedagógicos claros.",
        "analiseAlternativas": [
            "Incorreta. Os objetivos foram preservados.",
            "Incorreta. A possibilidade pode beneficiar toda a turma.",
            "Incorreta. Continua existindo avaliação e critérios.",
            "Incorreta. Representação é a forma como o conteúdo é apresentado ao estudante.",
            "Correta. Diversifica-se como o estudante demonstra a aprendizagem."
        ],
        "dicaBanca": "FGV pode tentar fazer parecer que diferentes formatos significam 'facilitação'. Observe se os critérios de aprendizagem foram mantidos.",
        "pegadinha": "Ação/expressão = diferentes maneiras de mostrar o que se sabe.",
        "memorizar2026": "Mesmo objetivo, diferentes formas de demonstrar aprendizagem.",
        "fonte": "FGV SEDUC-SP 2026; princípios do DUA."
    },
    {
        "id": "SEDUC-EE-CUR-011",
        "numero": 11,
        "subtopico": "Aprendizagem e deficiência — modelo social",
        "dificuldade": "alta",
        "pergunta": "Uma professora afirma que as dificuldades de participação de um estudante decorrem exclusivamente de sua deficiência e que a escola pouco pode fazer além de encaminhá-lo ao atendimento especializado. A perspectiva inclusiva contrapõe essa afirmação porque",
        "alternativas": [
            "as dificuldades podem resultar da interação entre características do estudante e barreiras do contexto, que a escola deve identificar e remover.",
            "a deficiência deixa de existir quando a escola oferece recursos pedagógicos.",
            "todo problema de aprendizagem é causado exclusivamente por barreiras atitudinais.",
            "o atendimento especializado deve substituir a sala comum quando houver barreiras significativas.",
            "o diagnóstico clínico deve ter função apenas documental, pois a análise pedagógica das barreiras substitui informações de saúde no planejamento escolar."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou o modelo social e a perspectiva inclusiva: dificuldades de participação e aprendizagem não são explicadas apenas por características individuais; barreiras físicas, pedagógicas, comunicacionais, tecnológicas e atitudinais também importam.",
        "feedbackErro": "A inclusão não nega características individuais nem eventuais informações clínicas. Ela rejeita a ideia de que toda dificuldade esteja 'dentro do aluno' e desloca parte da responsabilidade para a organização do ambiente educacional.",
        "analiseAlternativas": [
            "Correta. Reproduz a lógica de interação pessoa-contexto e responsabilidade do sistema pela remoção de barreiras.",
            "Incorreta. Recursos não fazem a deficiência 'desaparecer'; eles podem reduzir barreiras e ampliar participação.",
            "Incorreta. Barreiras podem ser de diferentes tipos, não apenas atitudinais.",
            "Incorreta. AEE não substitui a classe comum.",
            "Incorreta. Informações clínicas podem subsidiar quando pertinentes; não determinam sozinhas o planejamento."
        ],
        "dicaBanca": "A FGV SEDUC-SP 2026 cobrou expressamente que barreiras podem decorrer da interação entre características do estudante e fatores contextuais.",
        "pegadinha": "Nem tudo está 'no aluno'; nem tudo está 'na escola'. Analise a interação entre ambos.",
        "memorizar2026": "Deficiência + contexto/barreiras = experiência de participação e aprendizagem.",
        "fonte": "FGV SEDUC-SP 2026, Educação Especial, questão 23; Decreto nº 12.686/2025, art. 11."
    },
    {
        "id": "SEDUC-EE-CUR-012",
        "numero": 12,
        "subtopico": "Aprendizagem e deficiência — expectativas",
        "dificuldade": "media",
        "pergunta": "Em relação às expectativas de aprendizagem para estudantes com deficiência, a conduta pedagógica mais adequada é",
        "alternativas": [
            "presumir limitações acadêmicas a partir do diagnóstico para evitar frustração.",
            "manter altas expectativas e oferecer apoios, mediações e recursos com base em evidências de aprendizagem.",
            "evitar desafios cognitivos e privilegiar apenas atividades concretas.",
            "definir objetivos exclusivamente funcionais, independentemente da etapa escolar.",
            "comparar periodicamente o estudante aos colegas para verificar se os apoios mantêm sua trajetória próxima aos objetivos comuns da turma."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu que inclusão combina altas expectativas com apoios e avaliação contínua. O direito à aprendizagem envolve buscar o máximo desenvolvimento possível segundo características, interesses e necessidades.",
        "feedbackErro": "Baixar expectativas de forma automática é uma forma de barreira pedagógica. Apoiar o estudante não significa protegê-lo de desafios, mas organizar condições para que avance.",
        "analiseAlternativas": [
            "Incorreta. Diagnóstico não deve funcionar como teto de aprendizagem.",
            "Correta. Altas expectativas e apoios são compatíveis com equidade e desenvolvimento.",
            "Incorreta. Recursos concretos podem ser úteis, mas não devem virar limite fixo.",
            "Incorreta. Objetivos funcionais podem compor o planejamento, mas não substituem automaticamente o currículo da etapa.",
            "Incorreta. Comparação entre estudantes não é o fundamento para garantir acesso ao currículo comum."
        ],
        "dicaBanca": "A FGV costuma colocar 'proteção' e 'simplificação' como distratores aparentemente benevolentes.",
        "pegadinha": "Expectativa alta + apoio adequado é diferente de exigência sem suporte.",
        "memorizar2026": "Inclusão não reduz potencial; cria condições para desenvolvê-lo.",
        "fonte": "LBI, art. 27; FGV SEDUC-SP 2026, questões sobre inclusão e práticas pedagógicas."
    },
    {
        "id": "SEDUC-EE-CUR-013",
        "numero": 13,
        "subtopico": "Barreiras à aprendizagem — identificação",
        "dificuldade": "alta",
        "pergunta": "Uma escola apresenta as seguintes situações:\n\nI. Material digital incompatível com leitor de tela.\nII. Professor que acredita que estudante com deficiência intelectual não pode participar de atividades investigativas.\nIII. Sala localizada em andar sem rota acessível.\n\nAs situações exemplificam, respectivamente, barreiras",
        "alternativas": [
            "pedagógica, arquitetônica e comunicacional.",
            "atitudinal, tecnológica e pedagógica.",
            "tecnológica/comunicacional, atitudinal e arquitetônica.",
            "arquitetônica, metodológica e tecnológica.",
            "exclusivamente individuais do estudante."
        ],
        "correta": 2,
        "feedbackAcerto": "Você classificou corretamente os exemplos: incompatibilidade tecnológica/comunicacional, preconceito ou baixa expectativa como barreira atitudinal e ausência de rota acessível como barreira arquitetônica.",
        "feedbackErro": "Barreiras não são características do estudante. Elas se manifestam no ambiente, nas tecnologias, na comunicação, nas atitudes e nas práticas pedagógicas.",
        "analiseAlternativas": [
            "Incorreta. O primeiro caso é tecnológico/comunicacional, e o terceiro é arquitetônico.",
            "Incorreta. O primeiro não é atitudinal; o segundo, sim.",
            "Correta. Os três exemplos correspondem às categorias indicadas.",
            "Incorreta. A ordem das categorias não corresponde às situações.",
            "Incorreta. As situações descrevem barreiras do contexto escolar, não 'defeitos individuais'."
        ],
        "dicaBanca": "FGV pode apresentar exemplos concretos sem nomear a categoria. Identifique onde está o obstáculo: atitude, espaço, comunicação, tecnologia ou prática pedagógica.",
        "pegadinha": "Barreira = obstáculo do contexto que restringe participação ou aprendizagem.",
        "memorizar2026": "Primeiro identifique a barreira; depois escolha recurso, estratégia ou adaptação.",
        "fonte": "LBI, art. 3º, IV; Decreto nº 12.686/2025, art. 11."
    },
    {
        "id": "SEDUC-EE-CUR-014",
        "numero": 14,
        "subtopico": "Mediação pedagógica",
        "dificuldade": "media",
        "pergunta": "Durante uma atividade investigativa, um estudante apresenta dificuldade para organizar informações e formular hipóteses. Em vez de fornecer a resposta, a professora oferece roteiro, perguntas orientadoras e esquema visual. Essa intervenção",
        "alternativas": [
            "reduz a autonomia se o apoio orientar etapas do raciocínio que o estudante deveria construir integralmente de forma independente.",
            "constitui reforço escolar e deveria ocorrer apenas no AEE.",
            "é inadequada porque todos deveriam realizar a atividade sem diferenciação.",
            "exemplifica mediação pedagógica que amplia participação e autonomia sem retirar do estudante o trabalho cognitivo.",
            "deve ser evitada para não alterar a validade da atividade."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu a mediação como apoio que estrutura o caminho sem substituir o pensamento do estudante. O objetivo é favorecer apropriação do conhecimento e autonomia progressiva.",
        "feedbackErro": "Apoio não significa fazer pelo estudante. Recursos como roteiros, esquemas e perguntas podem sustentar o processo cognitivo e manter o aluno protagonista.",
        "analiseAlternativas": [
            "Incorreta. Apoios bem planejados podem ampliar autonomia em vez de reduzi-la.",
            "Incorreta. Mediação pedagógica também ocorre na classe comum e não é sinônimo de reforço.",
            "Incorreta. Equidade permite apoios diferenciados conforme a necessidade.",
            "Correta. A professora oferece andaimes sem retirar o aluno da atividade intelectual.",
            "Incorreta. A validade pedagógica depende do objetivo; apoiar o acesso não invalida a aprendizagem."
        ],
        "dicaBanca": "Observe se o professor 'faz pelo aluno' ou 'cria condições para o aluno fazer'. A segunda opção costuma ser a lógica inclusiva.",
        "pegadinha": "Mediação = apoio temporário e intencional para favorecer aprendizagem e autonomia.",
        "memorizar2026": "Apoiar não é substituir o estudante.",
        "fonte": "FGV SEDUC-SP 2026, Conhecimentos Gerais, questão 7; princípios da mediação pedagógica."
    },
    {
        "id": "SEDUC-EE-CUR-015",
        "numero": 15,
        "subtopico": "Participação e protagonismo",
        "dificuldade": "alta",
        "pergunta": "Uma escola quer ampliar a inclusão e decide ouvir estudantes com deficiência sobre barreiras, recursos e estratégias que influenciam sua participação nas aulas. A iniciativa é",
        "alternativas": [
            "inadequada, porque decisões pedagógicas competem exclusivamente aos profissionais.",
            "adequada apenas para estudantes maiores de 18 anos.",
            "irrelevante, pois a acessibilidade deve ser definida somente a partir de normas técnicas.",
            "inadequada se houver PEI, pois o plano já substitui a participação do estudante.",
            "adequada, porque participação, autonomia e protagonismo do estudante são componentes de uma educação inclusiva."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou que o estudante não é objeto passivo de decisões. A escuta e a participação ajudam a compreender barreiras, preferências e recursos que favorecem aprendizagem e pertencimento.",
        "feedbackErro": "A equipe pedagógica mantém sua responsabilidade profissional, mas isso não exclui a voz do estudante. A legislação e a política inclusiva valorizam participação e gestão democrática.",
        "analiseAlternativas": [
            "Incorreta. Responsabilidade profissional não significa excluir a participação do estudante.",
            "Incorreta. A participação deve ser adequada à idade e às condições, não limitada à maioridade.",
            "Incorreta. Normas técnicas são importantes, mas não substituem a análise da experiência concreta do estudante.",
            "Incorreta. PEI deve ser construído e acompanhado de forma participativa; não elimina a escuta.",
            "Correta. Participação e autonomia integram a perspectiva inclusiva."
        ],
        "dicaBanca": "A FGV 2026 cobrou protagonismo, autonomia e participação de pessoas com deficiência nas decisões sobre sua escolarização.",
        "pegadinha": "Inclusão não é decidir tudo 'para' o estudante, mas também construir 'com' ele quando possível.",
        "memorizar2026": "Voz do estudante = dado pedagógico relevante para remover barreiras.",
        "fonte": "FGV SEDUC-SP 2026, Educação Especial, questão 25; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-CUR-016",
        "numero": 16,
        "subtopico": "Estratégias pedagógicas inclusivas",
        "dificuldade": "media",
        "pergunta": "Em uma turma heterogênea, qual prática melhor traduz uma estratégia pedagógica inclusiva?",
        "alternativas": [
            "combinar recursos, linguagem acessível, atividades colaborativas e diferentes formas de participação conforme as barreiras observadas.",
            "oferecer atividades diferenciadas aos estudantes com laudo quando os objetivos comuns forem considerados pouco adequados ao perfil funcional identificado.",
            "Separar permanentemente os estudantes que necessitam de apoio para que aprendam em ritmo próprio.",
            "Utilizar uma única metodologia para garantir tratamento igualitário.",
            "Substituir atividades desafiadoras por tarefas repetitivas para estudantes com deficiência."
        ],
        "correta": 0,
        "feedbackAcerto": "Você escolheu uma prática que amplia caminhos de acesso, interação e participação sem separar o estudante do currículo da turma.",
        "feedbackErro": "As estratégias inclusivas são selecionadas a partir do objetivo pedagógico e das barreiras, e podem beneficiar diferentes estudantes. Segregação, padronização rígida e simplificação automática não constituem inclusão.",
        "analiseAlternativas": [
            "Correta. Diversifica meios e recursos mantendo vínculo com os objetivos de aprendizagem.",
            "Incorreta. Laudo não é critério para conceder toda e qualquer adaptação pedagógica, e a atividade não deve ficar desconectada do currículo.",
            "Incorreta. Separação permanente enfraquece participação e convivência.",
            "Incorreta. Igualdade de direito não exige metodologia única.",
            "Incorreta. Repetição e simplificação automática podem reduzir expectativas."
        ],
        "dicaBanca": "A banca valoriza alternativas que combinam diversidade de estratégias com manutenção do vínculo curricular.",
        "pegadinha": "Recurso diferenciado não precisa ser exclusivo de um aluno.",
        "memorizar2026": "Ensino inclusivo oferece caminhos variados para objetivos pedagógicos significativos.",
        "fonte": "LBI, art. 28; Decreto nº 12.686/2025; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-CUR-017",
        "numero": 17,
        "subtopico": "Tecnologia assistiva — função",
        "dificuldade": "media",
        "pergunta": "Uma professora utiliza um software leitor de tela para que um estudante cego acesse textos digitais e participe das mesmas atividades de pesquisa da turma. Nesse caso, o recurso atua principalmente como",
        "alternativas": [
            "substituto do currículo comum.",
            "tecnologia assistiva que elimina barreiras de acesso e amplia autonomia e participação.",
            "instrumento de avaliação clínica da deficiência visual.",
            "recurso especializado de uso prioritário no AEE, podendo ser levado à classe comum apenas em atividades previamente planejadas.",
            "meio de reduzir a quantidade de conteúdos trabalhados."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a função da tecnologia assistiva: ampliar funcionalidade, autonomia, acesso e participação. O leitor de tela permite acesso ao mesmo conteúdo por outro meio.",
        "feedbackErro": "Tecnologia assistiva não substitui currículo, professor ou classe comum. Ela pode ser utilizada nos diferentes espaços escolares quando necessária para remover barreiras.",
        "analiseAlternativas": [
            "Incorreta. O recurso dá acesso ao currículo; não o substitui.",
            "Correta. Leitor de tela é exemplo clássico de recurso que amplia acesso e autonomia.",
            "Incorreta. Seu uso pedagógico não é avaliação clínica.",
            "Incorreta. Recursos de TA podem acompanhar o estudante na classe comum e em outros contextos escolares.",
            "Incorreta. A finalidade é acesso, não redução de conteúdo."
        ],
        "dicaBanca": "FGV costuma diferenciar tecnologia comum de tecnologia assistiva pela função exercida para autonomia, participação e funcionalidade.",
        "pegadinha": "TA é definida pela função que cumpre para a pessoa, não apenas pelo fato de ser tecnológica.",
        "memorizar2026": "Tecnologia assistiva = recurso/serviço para ampliar funcionalidade, autonomia e participação.",
        "fonte": "LBI, arts. 3º, III e 74-75; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-CUR-018",
        "numero": 18,
        "subtopico": "Avaliação inclusiva — acessibilidade",
        "dificuldade": "alta",
        "pergunta": "Sobre avaliação da aprendizagem em contexto inclusivo, está correto o que se afirma em",
        "alternativas": [
            "I, apenas.",
            "III, apenas.",
            "I e II, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou que uma avaliação inclusiva preserva o objetivo pedagógico, mas pode diversificar instrumentos, formatos, tempo e recursos de acessibilidade. A igualdade de direito não exige procedimentos idênticos.",
        "feedbackErro": "A afirmativa III confunde igualdade com padronização. Se o formato da avaliação cria uma barreira irrelevante ao objetivo, ele pode precisar ser ajustado.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa II também está correta.",
            "Incorreta. III é falsa.",
            "Correta. I e II descrevem práticas inclusivas; III impõe uniformidade indevida.",
            "Incorreta. Inclui III, que está errada.",
            "Incorreta. III invalida o conjunto."
        ],
        "dicaBanca": "A FGV costuma inserir 'mesmo tempo e mesmo formato para todos' como falsa ideia de igualdade.",
        "pegadinha": "Acessibilidade na avaliação não é dar resposta nem diminuir critério; é permitir que o estudante demonstre o que sabe.",
        "memorizar2026": "Objetivo comum pode ter instrumento acessível e forma de resposta diferenciada.",
        "fonte": "LBI, art. 28; Decreto nº 12.686/2025; Portaria MEC nº 421/2026.",
        "afirmacoes": [
            "I. Pode utilizar diferentes instrumentos e formas de resposta, desde que coerentes com o objetivo avaliado.",
            "II. Deve considerar recursos de acessibilidade necessários para evitar que a barreira do instrumento distorça o resultado.",
            "III. Para garantir igualdade, todos os estudantes devem responder necessariamente no mesmo formato e no mesmo tempo."
        ]
    },
    {
        "id": "SEDUC-EE-CUR-019",
        "numero": 19,
        "subtopico": "Avaliação — foco na aprendizagem",
        "dificuldade": "alta",
        "pergunta": "Um professor avalia um estudante com deficiência intelectual apenas por atividades muito simplificadas, diferentes das experiências de aprendizagem da turma, e conclui que ele “não acompanha o currículo”. O principal problema dessa prática é que",
        "alternativas": [
            "dispensar o estudante de avaliações comparáveis às da turma, utilizando apenas registros descritivos de participação.",
            "atribuir ao professor do AEE a avaliação principal, deixando ao regente apenas o registro de frequência e participação.",
            "priorizar testes padronizados simplificados para comparar o estudante a parâmetros específicos de deficiência intelectual, quando a equipe considerar que essa organização favorece o ritmo de aprendizagem do estudante.",
            "a avaliação pode estar medindo um currículo empobrecido, e não a aprendizagem com apoios e acessibilidade vinculados aos objetivos curriculares.",
            "aplicar exatamente a mesma prova da turma, sem ajustes, para garantir comparabilidade e evitar redução de expectativas."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou que a avaliação deve dialogar com o que foi ensinado e com os objetivos de aprendizagem. Um currículo artificialmente reduzido pode produzir conclusões equivocadas sobre a capacidade do estudante.",
        "feedbackErro": "Avaliar inclusão não significa criar tarefas 'mais fáceis' por princípio, nem aplicar procedimentos idênticos a todos. É necessário assegurar experiências significativas de aprendizagem e instrumentos acessíveis.",
        "analiseAlternativas": [
            "Incorreta. Estudantes com deficiência intelectual devem ser avaliados em seu processo de aprendizagem.",
            "Incorreta. O professor da classe comum também avalia; o AEE articula e apoia.",
            "Incorreta. Teste padronizado exclusivo ignora diversidade de formas de demonstrar aprendizagem.",
            "Correta. A desconexão curricular e a simplificação automática podem mascarar potencialidades e aprendizagem.",
            "Incorreta. Ajustes podem ser necessários para garantir equidade."
        ],
        "dicaBanca": "A FGV SEDUC-SP 2026 rejeitou explicitamente substituir tarefas da classe regular por atividades mais simples e menos desafiadoras como regra.",
        "pegadinha": "Não confunda avaliação acessível com avaliação empobrecida.",
        "memorizar2026": "Avalie o que foi ensinado, com acessibilidade e apoio, não a deficiência.",
        "fonte": "FGV SEDUC-SP 2026, Educação Especial, questão 28 e item integrador final."
    },
    {
        "id": "SEDUC-EE-CUR-020",
        "numero": 20,
        "subtopico": "Recursos pedagógicos — colaboração",
        "dificuldade": "alta",
        "pergunta": "Uma escola desenvolve materiais acessíveis para um estudante e os mantém exclusivamente na sala de recursos, sem disponibilizá-los nas aulas em que são necessários. Essa organização é",
        "alternativas": [
            "adequada, porque recursos especializados integram prioritariamente o AEE e devem permanecer sob controle do professor especializado.",
            "adequada quando o recurso foi adquirido com verba da Educação Especial e seu uso fora da SRM não estiver previsto no plano de atendimento.",
            "adequada se o estudante utilizar o material no contraturno e receber orientação para transferir sozinho a estratégia para a classe comum.",
            "inadequada somente quando o recurso for digital ou indispensável à comunicação do estudante nas atividades avaliativas.",
            "inadequada, pois os recursos de acessibilidade devem acompanhar as atividades em que são necessários, inclusive na classe comum, com articulação entre profissionais."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu que o recurso deve estar onde a barreira ocorre. A articulação entre AEE e classe comum é essencial para que materiais e estratégias ampliem efetivamente a participação e a aprendizagem.",
        "feedbackErro": "Guardar o recurso no AEE pode neutralizar sua função. O AEE identifica, produz e organiza recursos, mas eles devem ser utilizados nos contextos em que o estudante precisa deles.",
        "analiseAlternativas": [
            "Incorreta. Recursos podem e devem circular para apoiar participação em diferentes espaços escolares.",
            "Incorreta. A fonte do recurso não define onde ele pode ser pedagogicamente utilizado.",
            "Incorreta. O contraturno não elimina a necessidade de acessibilidade durante as aulas comuns.",
            "Incorreta. O princípio vale para recursos digitais, táteis, comunicacionais e outros.",
            "Correta. A finalidade é eliminar barreiras nas atividades educacionais, em articulação com a classe comum."
        ],
        "dicaBanca": "Pergunte onde está a barreira. Se ela acontece na sala comum, deixar o recurso apenas no AEE é incoerente.",
        "pegadinha": "Recurso de acessibilidade deve acompanhar a necessidade, não ficar preso ao espaço onde foi produzido.",
        "memorizar2026": "AEE organiza recursos; a escola os utiliza para garantir acesso e participação.",
        "fonte": "Decreto nº 12.686/2025, art. 6º, III e art. 11, §5º; Resolução CNE/CEB nº 4/2009."
    },
    {
        "id": "SEDUC-EE-CUR-021",
        "numero": 21,
        "subtopico": "Currículo comum x currículo paralelo",
        "dificuldade": "alta",
        "pergunta": "Considere duas propostas para um estudante com deficiência.\n\nProposta 1: participar dos mesmos temas estudados pela turma, com materiais acessíveis, mediação e diferentes formas de resposta.\nProposta 2: realizar, durante todas as aulas, fichas simplificadas sem relação com os conteúdos da turma.\n\nÀ luz da educação inclusiva, é correto afirmar que",
        "alternativas": [
            "a Proposta 1 é mais adequada, pois mantém o currículo comum e organiza apoios para participação e aprendizagem.",
            "a Proposta 2 é preferível, pois evita qualquer risco de frustração.",
            "as duas propostas podem ser equivalentes se o estudante permanecer na turma e o conteúdo paralelo estiver previsto no PEI como adequação individualizada.",
            "a Proposta 2 é obrigatória para estudantes com deficiência intelectual.",
            "a Proposta 1 só é permitida quando o estudante não frequenta o AEE."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou que inclusão curricular exige pertencimento ao processo de ensino da turma. Diferenciações podem existir, mas não devem transformar o estudante em participante de um currículo paralelo sem vínculo com a experiência coletiva.",
        "feedbackErro": "A presença física na sala não basta. Se o estudante recebe sempre tarefas desconectadas e simplificadas, pode ocorrer exclusão dentro da própria classe comum.",
        "analiseAlternativas": [
            "Correta. Preserva o tema comum e diversifica acesso, mediação e expressão.",
            "Incorreta. Evitar desafios por princípio reduz oportunidades de desenvolvimento.",
            "Incorreta. Presença física não torna equivalentes práticas com graus diferentes de participação curricular.",
            "Incorreta. Deficiência intelectual não impõe currículo paralelo.",
            "Incorreta. AEE e participação no currículo comum são complementares."
        ],
        "dicaBanca": "FGV usa muito a pegadinha da 'inclusão física': aluno está na sala, mas pedagogicamente separado.",
        "pegadinha": "Estar na classe comum não basta; é preciso participar do currículo e aprender.",
        "memorizar2026": "Currículo paralelo permanente = alerta de exclusão pedagógica.",
        "fonte": "FGV SEDUC-SP 2026, Educação Especial, questões 28-30 e item integrador."
    },
    {
        "id": "SEDUC-EE-CUR-022",
        "numero": 22,
        "subtopico": "Adaptações razoáveis — caso concreto",
        "dificuldade": "alta",
        "pergunta": "Um estudante necessita de tempo adicional para organizar respostas em uma avaliação. O professor argumenta que conceder esse tempo seria privilégio. A interpretação mais adequada é",
        "alternativas": [
            "o professor está correto, porque igualdade exige o mesmo tempo para todos.",
            "o tempo adicional pode ser ajuste razoável para remover barreira sem alterar o conteúdo ou os critérios essenciais da avaliação.",
            "o estudante deve ser dispensado da avaliação.",
            "o tempo adicional pode ser concedido quando laudo ou parecer técnico indicar necessidade relacionada ao modo de organização das respostas.",
            "a adaptação só pode ocorrer no AEE, não em avaliação da classe comum."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou o princípio de equidade: um ajuste no tempo pode remover uma barreira sem reduzir o objetivo pedagógico nem conferir vantagem indevida.",
        "feedbackErro": "Ajuste razoável não é privilégio. Ele busca condições equitativas de participação. Também não deve ser condicionado automaticamente a prescrição clínica quando a necessidade pedagógica pode ser identificada pela escola.",
        "analiseAlternativas": [
            "Incorreta. Mesmo procedimento não garante igualdade real quando há barreira.",
            "Correta. Ajustar tempo pode ser medida de acessibilidade preservando critérios essenciais.",
            "Incorreta. O objetivo é viabilizar avaliação, não dispensá-la.",
            "Incorreta. A necessidade pode ser definida pedagogicamente; laudo não é condição universal para acesso e planejamento.",
            "Incorreta. A adaptação ocorre onde a barreira aparece, inclusive na classe comum."
        ],
        "dicaBanca": "FGV costuma chamar equidade de 'privilégio' em distratores. Observe se o ajuste remove uma barreira sem entregar a resposta.",
        "pegadinha": "Ajuste razoável = condição necessária e adequada, sem ônus desproporcional, para garantir direito.",
        "memorizar2026": "Equidade muda meios quando necessário para preservar oportunidades e objetivos.",
        "fonte": "LBI, arts. 3º, VI e 28; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-CUR-023",
        "numero": 23,
        "subtopico": "Planejamento curricular — DUA e individualização",
        "dificuldade": "alta",
        "pergunta": "Uma equipe afirma que, após adotar princípios do DUA no planejamento, não precisa mais elaborar medidas individualizadas para nenhum estudante. Essa conclusão é",
        "alternativas": [
            "correta, porque o DUA substitui adaptações individuais sempre que os três princípios forem aplicados ao planejamento da turma.",
            "correta para estudantes cuja deficiência não demande tecnologia assistiva ou apoio de comunicação.",
            "inadequada, porque o DUA amplia a acessibilidade geral, mas não elimina apoios e adaptações individualizadas quando necessários.",
            "inadequada somente quando a escola não possui SRM ou profissional especializado para apoiar a implementação do DUA.",
            "correta se todos os professores utilizarem materiais multimodais e oferecerem mais de uma forma de participação."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu a complementaridade entre desenho universal e apoios individualizados. Planejar para a diversidade reduz barreiras, mas não antecipa todas as necessidades de todos os estudantes.",
        "feedbackErro": "A política inclusiva combina acessibilidade ampla e respostas individualizadas quando necessárias. Transformar o DUA em argumento para negar apoio específico contraria sua finalidade.",
        "analiseAlternativas": [
            "Incorreta. DUA não elimina adaptações e apoios individualizados.",
            "Incorreta. O princípio vale para qualquer estudante conforme a necessidade, não apenas deficiência física.",
            "Correta. DUA e medidas individualizadas podem coexistir.",
            "Incorreta. A necessidade de apoio não depende da existência de SRM.",
            "Incorreta. Multimodalidade, por si só, não garante resposta a todas as necessidades individuais."
        ],
        "dicaBanca": "Na prova FGV 2026 apareceu exatamente a ideia errada de que DUA eliminaria recursos específicos.",
        "pegadinha": "Universal não significa suficiente para todos em qualquer situação.",
        "memorizar2026": "DUA amplia a base; individualização completa o que ainda for necessário.",
        "fonte": "FGV SEDUC-SP 2026, Educação Especial, item integrador final; Decreto nº 12.686/2025, art. 3º, VI."
    },
    {
        "id": "SEDUC-EE-CUR-024",
        "numero": 24,
        "subtopico": "Currículo, BNCC e Educação Especial",
        "dificuldade": "alta",
        "pergunta": "De acordo com a política nacional vigente, a relação entre BNCC, diretrizes curriculares e estudantes público da Educação Especial deve ser compreendida no sentido de que",
        "alternativas": [
            "a BNCC não se aplica à Educação Especial.",
            "o estudante público da Educação Especial pode seguir currículo definido pelo AEE quando o PEI registrar objetivos distintos dos da turma.",
            "a BNCC aplica-se somente aos estudantes com deficiência que não necessitam de adaptações.",
            "a BNCC e as diretrizes curriculares também se aplicam ao público da Educação Especial, com acessibilidade e apoios necessários.",
            "cada escola pode dispensar integralmente a BNCC para estudantes com TEA."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou uma regra expressa do Decreto nº 12.686/2025: BNCC e diretrizes curriculares das etapas e modalidades aplicam-se ao público da Educação Especial. Inclusão significa garantir acesso a esse direito curricular com os apoios necessários.",
        "feedbackErro": "A Educação Especial é transversal e não cria uma base curricular nacional paralela. O sistema deve tornar o currículo acessível e adotar adaptações razoáveis de acordo com as necessidades.",
        "analiseAlternativas": [
            "Incorreta. O decreto afirma expressamente a aplicação da BNCC ao público da Educação Especial.",
            "Incorreta. O AEE complementa/suplementa a escolarização e não define currículo substitutivo.",
            "Incorreta. A aplicação não depende de ausência de necessidade de adaptação.",
            "Correta. Combina referência curricular comum com acessibilidade e adaptações razoáveis.",
            "Incorreta. A escola não pode dispensar genericamente a BNCC com base no diagnóstico."
        ],
        "dicaBanca": "Esse ponto é ótimo para FGV porque contrapõe transversalidade da Educação Especial a uma falsa ideia de currículo separado.",
        "pegadinha": "BNCC e DCNs também se aplicam ao público da Educação Especial.",
        "memorizar2026": "Referência curricular comum + adaptações razoáveis conforme necessidade.",
        "fonte": "Decreto nº 12.686/2025, art. 4º, §§1º e 2º.",
        "atualizacao2026": "Atualização 2025/2026: o Decreto nº 12.686/2025, com redação vigente após o Decreto nº 12.773/2025, explicita a aplicação da BNCC e das diretrizes curriculares ao público da Educação Especial."
    },
    {
        "id": "SEDUC-EE-CUR-025",
        "numero": 25,
        "subtopico": "Integração — caso FGV",
        "dificuldade": "alta",
        "pergunta": "Uma escola pretende revisar suas práticas curriculares. Está correto o que se propõe em",
        "alternativas": [
            "I e IV, apenas.",
            "II e III, apenas.",
            "I, II e IV, apenas.",
            "II, III e IV, apenas.",
            "I, II e III, apenas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você integrou os principais eixos do bloco: DUA para antecipar barreiras, apoios individualizados quando necessários e acesso ao currículo comum. A proposta IV é a única incompatível por transformar simplificação e isolamento em regra.",
        "feedbackErro": "O erro está em naturalizar tarefas simplificadas e desconectadas. Inclusão não proíbe qualquer diferenciação; ela exige que a diferenciação tenha finalidade pedagógica e favoreça participação e aprendizagem, não segregação curricular.",
        "analiseAlternativas": [
            "Incorreta. IV é incompatível com a perspectiva inclusiva, e II e III também são adequadas.",
            "Incorreta. I também está correta.",
            "Incorreta. Inclui IV, que está errada, e omite III.",
            "Incorreta. Inclui IV, que está errada, e omite I.",
            "Correta. I, II e III articulam DUA, individualização e currículo comum; IV cria currículo paralelo simplificado como regra."
        ],
        "dicaBanca": "Esta é a síntese do padrão FGV 2026: barreiras + planejamento antecipatório + DUA + recursos + participação + rejeição de simplificação automática.",
        "pegadinha": "Nem 'tudo igual' nem 'currículo separado': a resposta inclusiva combina referência comum, flexibilidade e apoios.",
        "memorizar2026": "Planejar → identificar barreiras → diversificar → apoiar → avaliar → replanejar.",
        "fonte": "FGV SEDUC-SP 2026, Educação Especial, questões 23, 26, 27, 28 e item integrador final; LBI e Decreto nº 12.686/2025.",
        "afirmacoes": [
            "I. Antecipar barreiras no planejamento e oferecer múltiplas formas de engajamento, representação e ação/expressão.",
            "II. Utilizar adaptações individualizadas quando necessárias, sem presumir redução de objetivos apenas pela deficiência.",
            "III. Manter os estudantes vinculados ao currículo comum, com recursos de acessibilidade e apoio colaborativo.",
            "IV. Substituir, como regra, atividades da turma por tarefas simplificadas e isoladas para estudantes com deficiência."
        ]
    }
];

    window.seducEducacaoEspecialCurriculo2026 = banco;
})();
