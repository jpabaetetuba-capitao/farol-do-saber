/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 6: Processo de Inclusão no Ensino Regular
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 02/09/2026.
   Matriz de estilo: FGV Educação Especial (Canaã dos Carajás 2025
   e SEDUC-SP 2026), com distratores plausíveis e extensão controlada.
========================================================== */

(function(){
    "use strict";
    const banco = [
    {
        "id": "SEDUC-EE-INC-001",
        "numero": 1,
        "subtopico": "Inclusão — acesso, permanência, participação e aprendizagem",
        "dificuldade": "alta",
        "pergunta": "Uma escola comemora o aumento das matrículas de estudantes público da Educação Especial e conclui que, por isso, já alcançou plenamente a inclusão. Considerando a perspectiva inclusiva, essa conclusão é",
        "alternativas": [
            "adequada, pois a matrícula na classe comum é o indicador suficiente para caracterizar inclusão escolar.",
            "incompleta, porque inclusão também exige permanência, participação e aprendizagem com eliminação de barreiras.",
            "adequada quando o estudante frequenta a classe comum em pelo menos metade da carga horária semanal.",
            "incompleta apenas se a escola não possuir sala de recursos multifuncionais ou professor do AEE.",
            "adequada desde que a matrícula tenha sido realizada sem exigência de avaliação clínica prévia."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou que presença física não esgota o direito à inclusão. O sistema inclusivo deve organizar condições para acesso, permanência, participação e aprendizagem, com apoio necessário.",
        "feedbackErro": "Matrícula é indispensável, mas não suficiente. A escola pode manter exclusão pedagógica mesmo com o estudante presente, se persistirem barreiras, baixa participação e ausência de condições de aprendizagem.",
        "analiseAlternativas": [
            "Incorreta. A matrícula é condição de acesso, mas não define sozinha a qualidade da inclusão.",
            "Correta. A política vigente articula acesso, permanência, participação e aprendizagem como dimensões do direito.",
            "Incorreta. A inclusão não é medida por percentual de presença na classe comum, e sim pelas condições efetivas de escolarização.",
            "Incorreta. A ausência de sala de recursos pode exigir reorganização da oferta, mas não é o único critério de inclusão.",
            "Incorreta. Não exigir avaliação clínica é compatível com a inclusão, mas isso não torna a matrícula suficiente."
        ],
        "dicaBanca": "FGV gosta de colocar um elemento verdadeiro — como matrícula — como se ele bastasse para fechar todo o conceito.",
        "pegadinha": "Não confunda acesso com inclusão plena.",
        "memorizar2026": "Inclusão = acesso + permanência + participação + aprendizagem.",
        "fonte": "Decreto nº 12.686/2025, arts. 1º a 4º, com redação do Decreto nº 12.773/2025."
    },
    {
        "id": "SEDUC-EE-INC-002",
        "numero": 2,
        "subtopico": "Integração x inclusão",
        "dificuldade": "alta",
        "pergunta": "Em uma rede de ensino, estudantes com deficiência podem frequentar a classe comum desde que acompanhem o mesmo ritmo, os mesmos materiais e as mesmas formas de avaliação, sem que a escola altere sua organização. Esse modelo aproxima-se da",
        "alternativas": [
            "inclusão, porque preserva a convivência com os pares e evita classes especiais.",
            "equidade, porque utiliza critérios uniformes e reduz tratamentos diferenciados.",
            "integração, pois a permanência depende da adaptação do estudante à organização escolar já existente.",
            "acessibilidade universal, pois não diferencia materiais, metodologias ou instrumentos avaliativos.",
            "educação especial inclusiva, pois mantém o estudante no currículo comum sem qualquer distinção."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu a lógica integracionista: o estudante entra no espaço comum, mas a estrutura escolar permanece praticamente inalterada e o ônus da adaptação recai sobre ele.",
        "feedbackErro": "A presença em classe comum não basta para caracterizar inclusão quando a escola exige que o estudante se ajuste ao padrão já existente, sem remover barreiras nem diversificar práticas.",
        "analiseAlternativas": [
            "Incorreta. Convivência é importante, mas inclusão exige transformação das condições de participação e aprendizagem.",
            "Incorreta. Uniformidade não é sinônimo de equidade quando mantém barreiras para determinados estudantes.",
            "Correta. A integração admite inserção no espaço comum, mas condiciona a participação à adaptação do aluno.",
            "Incorreta. Acessibilidade implica reduzir barreiras e pode exigir diferenciação de meios e recursos.",
            "Incorreta. Currículo comum não significa formato único de ensino e avaliação para todos."
        ],
        "dicaBanca": "Pergunte: quem está sendo obrigado a se adaptar? Se a escola permanece igual e o estudante precisa encaixar-se, pense em integração.",
        "pegadinha": "Classe comum pode existir sem inclusão real.",
        "memorizar2026": "Integração: aluno se ajusta. Inclusão: sistema se reorganiza.",
        "fonte": "Fundamentos da Educação Especial Inclusiva; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-INC-003",
        "numero": 3,
        "subtopico": "Classe comum — espaço de escolarização",
        "dificuldade": "alta",
        "pergunta": "Uma professora afirma que o estudante público da Educação Especial deve permanecer na classe comum apenas nas atividades de socialização, enquanto os conteúdos curriculares principais devem ser trabalhados exclusivamente em atendimento separado. À luz da política vigente, essa proposta é",
        "alternativas": [
            "compatível, desde que o atendimento separado utilize o mesmo material didático adotado pela turma.",
            "compatível quando o estudante apresenta necessidade de apoio intensivo identificada no estudo de caso.",
            "compatível se a família concordar formalmente com a divisão entre socialização e escolarização.",
            "incompatível, pois a classe comum é espaço de escolarização e o apoio não deve criar um percurso curricular substitutivo.",
            "incompatível apenas se o atendimento separado ocorrer dentro do mesmo turno da classe comum."
        ],
        "correta": 3,
        "feedbackAcerto": "Você distinguiu socialização de escolarização. O estudante tem direito a participar do currículo e da aprendizagem na classe comum; apoios especializados devem favorecer esse acesso, não substituir o percurso escolar comum.",
        "feedbackErro": "A inclusão não reserva à classe comum apenas convivência. O direito alcança aprendizagem e currículo; separar permanentemente conteúdos centrais pode produzir exclusão pedagógica dentro da própria escola.",
        "analiseAlternativas": [
            "Incorreta. Usar o mesmo material não resolve a substituição do percurso curricular comum por atendimento separado.",
            "Incorreta. Necessidade de apoio intensivo pode ampliar suportes, mas não transforma o atendimento especializado em escolarização substitutiva.",
            "Incorreta. A concordância familiar não afasta o direito educacional ao sistema inclusivo e à participação curricular.",
            "Correta. A classe comum é espaço de escolarização; os apoios especializados devem ampliar acesso e participação.",
            "Incorreta. O problema central é o caráter substitutivo e segregador, não apenas o horário em que ocorre."
        ],
        "dicaBanca": "FGV costuma oferecer uma solução que parece protetiva, mas retira do estudante o acesso ao currículo comum.",
        "pegadinha": "Socializar sem aprender não é inclusão plena.",
        "memorizar2026": "Classe comum = convivência + currículo + aprendizagem + participação.",
        "fonte": "Decreto nº 12.686/2025, arts. 1º, §3º, 4º e 8º; Convenção, art. 24."
    },
    {
        "id": "SEDUC-EE-INC-004",
        "numero": 4,
        "subtopico": "AEE x classe comum",
        "dificuldade": "alta",
        "pergunta": "Sobre a relação entre Atendimento Educacional Especializado (AEE) e escolarização na classe comum, analise as afirmativas.",
        "alternativas": [
            "I, apenas.",
            "II e III, apenas.",
            "I e III, apenas.",
            "I e II, apenas.",
            "I, II e III."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou que I e II estão corretas. O AEE organiza recursos, acessibilidade e estratégias, mas sua matrícula não substitui a matrícula e a frequência na classe comum.",
        "feedbackErro": "A afirmativa III é falsa porque transforma o AEE em substituto da escolarização comum. A política vigente estabelece exatamente o contrário.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa II também está correta.",
            "Incorreta. III é falsa ao admitir substituição da classe comum.",
            "Incorreta. III invalida a combinação, embora I esteja correta.",
            "Correta. I e II descrevem a relação complementar/suplementar e não substitutiva do AEE.",
            "Incorreta. A afirmativa III está errada."
        ],
        "dicaBanca": "Em itens I/II/III, isole o verbo principal. 'Apoiar/complementar' é compatível; 'substituir' costuma mudar o gabarito.",
        "pegadinha": "AEE não é uma segunda escola.",
        "memorizar2026": "AEE apoia a escolarização; não ocupa o lugar da classe comum.",
        "fonte": "Decreto nº 12.686/2025, arts. 5º a 8º; Resolução CNE/CEB nº 4/2009.",
        "afirmacoes": [
            "I. O AEE pode organizar recursos pedagógicos e de acessibilidade para eliminar barreiras à participação e à aprendizagem.",
            "II. A matrícula no AEE não substitui a matrícula e a frequência na classe comum.",
            "III. Quando o estudo de caso indicar necessidade de apoio intensivo, o AEE poderá assumir a escolarização regular do estudante."
        ]
    },
    {
        "id": "SEDUC-EE-INC-005",
        "numero": 5,
        "subtopico": "Equidade e igualdade",
        "dificuldade": "alta",
        "pergunta": "Dois estudantes realizam uma avaliação: um responde por escrito e outro utiliza recurso de comunicação alternativa, mantendo-se os mesmos objetivos conceituais e critérios de correção. À luz da educação inclusiva, a situação exemplifica",
        "alternativas": [
            "quebra indevida da igualdade, porque instrumentos diferentes tornam os resultados incomparáveis.",
            "redução de exigência, pois comunicação alternativa só deve ser utilizada em atividades de treino funcional.",
            "integração, porque os estudantes permanecem submetidos ao mesmo conteúdo sem mudança de objetivos.",
            "privilégio pedagógico, já que um dos estudantes recebeu condição mais favorável para demonstrar conhecimentos.",
            "equidade, pois meios distintos podem assegurar oportunidade efetiva de demonstrar a mesma aprendizagem."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou o princípio da equidade. Diferenciar o meio de resposta pode remover uma barreira sem reduzir o objetivo nem o rigor do que está sendo avaliado.",
        "feedbackErro": "Equidade não exige instrumentos idênticos. Quando o formato de resposta cria uma barreira, a escola pode utilizar meio acessível preservando objetivos e critérios pedagógicos.",
        "analiseAlternativas": [
            "Incorreta. Comparabilidade depende dos objetivos e critérios, não da identidade absoluta do instrumento.",
            "Incorreta. Comunicação alternativa é recurso de participação e expressão, não mero treino funcional.",
            "Incorreta. O caso descreve diferenciação para remover barreira, característica de equidade, não integração.",
            "Incorreta. A adaptação do meio não constitui vantagem indevida quando busca igualdade de oportunidade.",
            "Correta. Equidade admite meios distintos para assegurar acesso real ao mesmo direito de aprender e demonstrar aprendizagem."
        ],
        "dicaBanca": "Quando a alternativa disser 'tratamento diferente', pergunte se a diferença remove barreira ou concede vantagem sem relação com a necessidade.",
        "pegadinha": "Igualdade formal pode manter desigualdade concreta.",
        "memorizar2026": "Equidade = ajustar condições para garantir oportunidades reais.",
        "fonte": "Decreto nº 12.686/2025, art. 2º; LBI, art. 28."
    },
    {
        "id": "SEDUC-EE-INC-006",
        "numero": 6,
        "subtopico": "Barreiras atitudinais",
        "dificuldade": "media",
        "pergunta": "Em uma escola, um professor evita convidar uma estudante com deficiência física para apresentar trabalhos em público, embora ela manifeste interesse e tenha recursos de acessibilidade disponíveis, porque acredita que 'seria exigir demais'. A principal barreira evidenciada é",
        "alternativas": [
            "atitudinal, pois a baixa expectativa do professor restringe a participação com base na deficiência.",
            "arquitetônica, pois toda restrição de participação de pessoa com deficiência decorre prioritariamente do espaço físico.",
            "tecnológica, porque a existência de recurso de acessibilidade demonstra que o equipamento utilizado é insuficiente.",
            "comunicacional, já que apresentações públicas exigem linguagem oral e, por isso, pressupõem adaptação do canal de comunicação.",
            "curricular, porque qualquer diferenciação de oportunidade caracteriza alteração indevida dos objetivos de aprendizagem."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou uma barreira atitudinal: a expectativa reduzida do professor, baseada na deficiência, limita a participação antes de considerar potencialidades e apoios disponíveis.",
        "feedbackErro": "O enunciado não aponta impedimento físico, tecnológico ou comunicacional como causa principal. A restrição nasce de uma crença capacitista que antecipa incapacidade.",
        "analiseAlternativas": [
            "Correta. Preconceitos, estereótipos e baixas expectativas podem funcionar como barreiras atitudinais.",
            "Incorreta. Não há obstáculo físico descrito como causa da exclusão da atividade.",
            "Incorreta. O recurso existe; o problema é a decisão do professor, não sua ausência.",
            "Incorreta. Nada indica que a comunicação oral seja inviável ou seja o fator determinante.",
            "Incorreta. A situação trata de oportunidade de participação, não de alteração curricular."
        ],
        "dicaBanca": "FGV costuma esconder barreira atitudinal em frases aparentemente protetivas como 'para não expor', 'para não frustrar' ou 'para não exigir demais'.",
        "pegadinha": "Superproteção também pode excluir.",
        "memorizar2026": "Baixa expectativa baseada na deficiência = barreira atitudinal.",
        "fonte": "LBI, art. 3º; Decreto nº 12.686/2025, art. 2º, V."
    },
    {
        "id": "SEDUC-EE-INC-007",
        "numero": 7,
        "subtopico": "Barreiras pedagógicas e metodológicas",
        "dificuldade": "alta",
        "pergunta": "Uma turma trabalha apenas com exposição oral longa, cópia do quadro e uma única forma de prova, embora vários estudantes demonstrem dificuldades de acesso às informações por razões distintas. A resposta mais coerente com a educação inclusiva é",
        "alternativas": [
            "diversificar apresentação, participação e expressão, mantendo objetivos claros e acompanhando as barreiras reduzidas.",
            "manter o método e encaminhar ao AEE apenas os estudantes que não acompanharem o desempenho médio.",
            "reduzir os conteúdos curriculares para toda a turma, evitando diferenças entre os estudantes que necessitam de apoio.",
            "adotar materiais individualizados apenas após comprovação clínica das dificuldades observadas em sala.",
            "preservar a metodologia e ampliar o tempo de prova, pois a inclusão deve evitar mudanças na prática do professor regente."
        ],
        "correta": 0,
        "feedbackAcerto": "Você escolheu a resposta que atua sobre a barreira pedagógica. Diversificar meios de ensino e expressão amplia acesso sem exigir que a dificuldade seja transformada em problema individual do estudante.",
        "feedbackErro": "Quando a própria organização da aula produz barreiras para vários alunos, a resposta inclusiva começa pela revisão das práticas e dos recursos, sem depender de diagnóstico clínico.",
        "analiseAlternativas": [
            "Correta. Diversificação pedagógica e monitoramento das barreiras são coerentes com planejamento inclusivo.",
            "Incorreta. Encaminhar apenas os alunos desloca o problema da metodologia para o indivíduo e pode manter a barreira.",
            "Incorreta. Diversificar meios não implica reduzir objetivos ou empobrecer o currículo da turma.",
            "Incorreta. Estratégias pedagógicas acessíveis não dependem de comprovação clínica.",
            "Incorreta. Tempo ampliado pode ser útil em casos específicos, mas não corrige uma metodologia globalmente restritiva."
        ],
        "dicaBanca": "A FGV costuma perguntar se a resposta está no aluno ou no desenho da prática. Procure quem está produzindo a barreira.",
        "pegadinha": "Apoio individual não substitui revisão metodológica quando a barreira é coletiva.",
        "memorizar2026": "Metodologia inclusiva = diversificar meios, preservar objetivos e observar evidências.",
        "fonte": "Decreto nº 12.686/2025, arts. 3º, V e VI, 6º e 11."
    },
    {
        "id": "SEDUC-EE-INC-008",
        "numero": 8,
        "subtopico": "Acessibilidade e adaptações razoáveis",
        "dificuldade": "alta",
        "pergunta": "Uma escola oferece material digital acessível, mobiliário adequado, legendas, recursos de comunicação e ajustes de tempo conforme necessidades identificadas. Essas medidas devem ser compreendidas, principalmente, como",
        "alternativas": [
            "benefícios compensatórios concedidos somente aos estudantes que apresentem laudo de deficiência.",
            "recursos próprios do AEE, sem relação direta com a responsabilidade da classe comum e da gestão escolar.",
            "adaptações e recursos de acessibilidade destinados a eliminar barreiras e ampliar participação e aprendizagem.",
            "formas de flexibilização que autorizam reduzir os objetivos curriculares sempre que houver necessidade de apoio.",
            "medidas excepcionais incompatíveis com a igualdade, porque alteram as condições originalmente oferecidas à turma."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu que acessibilidade e adaptações razoáveis são instrumentos de garantia do direito à educação, dirigidos à eliminação de barreiras e à participação efetiva.",
        "feedbackErro": "Essas medidas não são privilégios, não pertencem exclusivamente ao AEE e não implicam redução automática do currículo. Elas respondem a barreiras concretas.",
        "analiseAlternativas": [
            "Incorreta. Acessibilidade é direito e não pode ser tratada como favor condicionado a laudo.",
            "Incorreta. O AEE pode colaborar, mas a escola como um todo responde pela acessibilidade educacional.",
            "Correta. A função central é eliminar barreiras e assegurar acesso, participação e aprendizagem.",
            "Incorreta. Apoio ou adaptação não produz, por si só, redução de objetivos curriculares.",
            "Incorreta. Diferenciar condições para garantir igualdade de oportunidades é compatível com equidade."
        ],
        "dicaBanca": "Se a alternativa chamar acessibilidade de 'privilégio' ou 'favor', procure a lógica de direito e remoção de barreiras.",
        "pegadinha": "Adaptação razoável não é redução automática de expectativa.",
        "memorizar2026": "Acessibilidade = condição de exercício do direito, não benefício extraordinário.",
        "fonte": "LBI, arts. 3º e 28; Convenção, art. 24; Decreto nº 12.686/2025, art. 11, §5º."
    },
    {
        "id": "SEDUC-EE-INC-009",
        "numero": 9,
        "subtopico": "Profissional de apoio escolar",
        "dificuldade": "alta",
        "pergunta": "A família de um estudante solicita profissional de apoio escolar. A direção responde que só avaliará o pedido após a entrega de laudo médico que indique expressamente esse profissional. Segundo a regulamentação vigente, a direção deveria",
        "alternativas": [
            "manter a exigência, pois a oferta do apoio depende de prescrição clínica específica que delimite as funções do profissional.",
            "dispensar o estudo pedagógico quando a família apresentar relatório médico detalhado sobre a funcionalidade do estudante.",
            "ofertar automaticamente o profissional a todo estudante com deficiência ou TEA, independentemente de análise escolar.",
            "avaliar a necessidade pelo estudo de caso, sem condicionar a oferta a documento emitido por profissional de saúde.",
            "encaminhar o pedido exclusivamente ao professor do AEE, a quem cabe decidir de forma autônoma sobre a contratação."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou a regra vigente: a necessidade de profissional de apoio escolar é avaliada pedagogicamente pelo estudo de caso e não depende de laudo ou prescrição de profissional de saúde.",
        "feedbackErro": "Nem o laudo é requisito obrigatório, nem o apoio é automático por diagnóstico. A decisão deve considerar necessidades de participação, autonomia, comunicação, locomoção e demais barreiras observadas no contexto escolar.",
        "analiseAlternativas": [
            "Incorreta. A norma atual afasta expressamente a exigência de documento de saúde como condição da oferta.",
            "Incorreta. Documento clínico pode subsidiar, mas não substitui a análise pedagógica e contextual.",
            "Incorreta. A oferta não decorre automaticamente do diagnóstico; deve ser avaliada no estudo de caso.",
            "Correta. É a regra expressa do Decreto nº 12.686/2025 após a alteração de 2025.",
            "Incorreta. A decisão integra o processo pedagógico institucional e não é ato isolado do professor do AEE."
        ],
        "dicaBanca": "FGV já cobrou atribuições do profissional de apoio. Em 2026, acrescente a regra nova: estudo de caso, sem condicionamento a laudo.",
        "pegadinha": "Nem 'laudo obrigatório' nem 'apoio automático' estão corretos.",
        "memorizar2026": "Profissional de apoio: necessidade avaliada no estudo de caso; laudo não é condição.",
        "fonte": "Decreto nº 12.686/2025, art. 14, §2º, com redação do Decreto nº 12.773/2025.",
        "atualizacao2026": "Regra vigente em 2026: a oferta do profissional de apoio escolar é avaliada pelo estudo de caso e independe de documento emitido por profissional de saúde."
    },
    {
        "id": "SEDUC-EE-INC-010",
        "numero": 10,
        "subtopico": "Família e estudante — participação",
        "dificuldade": "alta",
        "pergunta": "Ao elaborar estratégias para um estudante público da Educação Especial, a escola decide comunicar à família apenas as decisões finais, para evitar que opiniões externas interfiram na autonomia pedagógica. Essa conduta é",
        "alternativas": [
            "adequada, porque decisões educacionais cabem exclusivamente aos profissionais da escola e devem preservar sua autoridade técnica.",
            "inadequada, pois estudante e familiares devem participar da construção e do acompanhamento das estratégias.",
            "adequada quando o estudante já possui PEI, pois a participação familiar ocorre somente antes da formalização do documento.",
            "inadequada apenas quando houver conflito entre a família e o professor regente sobre a forma de avaliação utilizada.",
            "adequada se o AEE mantiver contato periódico com a família, ainda que a classe comum não compartilhe o planejamento."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu que participação familiar e estudantil não se reduz a receber uma decisão pronta. A política vigente prevê envolvimento ao longo do estudo de caso e do acompanhamento das estratégias.",
        "feedbackErro": "A autonomia pedagógica não elimina a gestão democrática nem a participação do estudante e da família. Essas contribuições ajudam a compreender contextos, estratégias já utilizadas e necessidades atuais.",
        "analiseAlternativas": [
            "Incorreta. A equipe tem responsabilidade técnica, mas a política prevê participação do estudante e dos familiares.",
            "Correta. A participação é processual, não mera comunicação final.",
            "Incorreta. A participação continua durante implementação e acompanhamento, não apenas antes do PEI.",
            "Incorreta. O direito de participação não depende da existência de conflito pedagógico.",
            "Incorreta. Contato isolado do AEE não substitui articulação institucional e planejamento compartilhado."
        ],
        "dicaBanca": "FGV cobrou participação da família em Canaã dos Carajás. Evite alternativas que reduzam a família a 'assinar', 'ser informada' ou 'fiscalizar'.",
        "pegadinha": "Participar não é apenas receber aviso.",
        "memorizar2026": "Família e estudante contribuem na construção e no acompanhamento das estratégias.",
        "fonte": "Decreto nº 12.686/2025, arts. 3º e 11, §§3º e 4º."
    },
    {
        "id": "SEDUC-EE-INC-011",
        "numero": 11,
        "subtopico": "Articulação intersetorial",
        "dificuldade": "alta",
        "pergunta": "Durante o estudo de caso, surgem questões de saúde e proteção social que interferem no cotidiano do estudante. A escola, nesse contexto, deve",
        "alternativas": [
            "transferir a responsabilidade educacional aos serviços de saúde até que as questões clínicas estejam resolvidas.",
            "suspender o planejamento escolar, pois a análise pedagógica deve ocorrer somente após parecer da rede de proteção.",
            "limitar o contato à assistência social, porque profissionais da saúde não podem fornecer informações que subsidiem decisões pedagógicas.",
            "encaminhar o estudante para atendimento externo e retirar temporariamente as adaptações para evitar sobreposição de intervenções.",
            "dialogar com os serviços pertinentes quando necessário, mantendo a responsabilidade educacional da escola."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou o sentido da articulação intersetorial: dialogar com saúde, assistência e proteção quando necessário, sem transferir a responsabilidade pela escolarização.",
        "feedbackErro": "Intersetorialidade não significa medicalizar a educação nem aguardar que outro setor resolva o problema. Cada política mantém suas atribuições e coopera para atenção integral.",
        "analiseAlternativas": [
            "Incorreta. Saúde pode colaborar, mas não assume a responsabilidade pedagógica da escola.",
            "Incorreta. O planejamento não precisa ficar paralisado à espera de parecer externo.",
            "Incorreta. Profissionais de diferentes setores podem subsidiar o processo, observadas regras de privacidade e pertinência.",
            "Incorreta. Retirar adaptações pode recriar barreiras e não decorre da articulação entre serviços.",
            "Correta. A norma prevê diálogo intersetorial quando necessário e mantém o estudo de caso como processo pedagógico."
        ],
        "dicaBanca": "Se uma alternativa usa intersetorialidade para 'transferir' a responsabilidade da escola, ela provavelmente está errada.",
        "pegadinha": "Articular não é terceirizar.",
        "memorizar2026": "Intersetorialidade = cooperação entre setores com responsabilidades preservadas.",
        "fonte": "Decreto nº 12.686/2025, arts. 2º, VII, 3º, VIII e 11, §4º."
    },
    {
        "id": "SEDUC-EE-INC-012",
        "numero": 12,
        "subtopico": "Pertencimento e participação",
        "dificuldade": "media",
        "pergunta": "Um estudante está matriculado na classe comum, mas realiza quase todas as atividades em uma carteira separada, recebe tarefas desconectadas do trabalho da turma e raramente participa de projetos coletivos. A situação revela",
        "alternativas": [
            "inclusão efetiva, porque a matrícula comum garante pertencimento independentemente da organização pedagógica.",
            "adaptação curricular adequada, pois tarefas diferentes devem ser preferidas sempre que houver deficiência.",
            "ensino colaborativo, já que o estudante permanece fisicamente no mesmo ambiente dos colegas.",
            "autonomia pedagógica da escola, desde que as tarefas individuais estejam registradas no PEI.",
            "risco de exclusão na classe comum, pois presença física sem participação pode manter segregação pedagógica."
        ],
        "correta": 4,
        "feedbackAcerto": "Você percebeu uma forma de exclusão interna: o estudante está fisicamente presente, mas permanece apartado das experiências curriculares e coletivas da turma.",
        "feedbackErro": "A inclusão exige participação e pertencimento, não apenas endereço escolar comum. Atividades individualizadas podem ser necessárias, mas não devem se tornar isolamento permanente ou currículo paralelo.",
        "analiseAlternativas": [
            "Incorreta. Matrícula não garante, por si só, participação, pertencimento e aprendizagem.",
            "Incorreta. Diferenciação pode ser necessária, mas não é regra automática nem justificativa para desconexão permanente.",
            "Incorreta. Permanecer no mesmo espaço não caracteriza ensino colaborativo.",
            "Incorreta. O PEI orienta apoios e estratégias, mas não legitima segregação pedagógica.",
            "Correta. A descrição aponta presença física com baixa participação e desconexão curricular."
        ],
        "dicaBanca": "A FGV pode descrever uma 'inclusão aparente'. Observe se o aluno está com a turma ou apenas no mesmo espaço físico.",
        "pegadinha": "Mesma sala não significa mesma experiência educacional.",
        "memorizar2026": "Pertencimento exige participação real, não simples presença.",
        "fonte": "Decreto nº 12.686/2025, arts. 1º a 4º; Convenção, art. 24."
    },
    {
        "id": "SEDUC-EE-INC-013",
        "numero": 13,
        "subtopico": "Avaliação inclusiva",
        "dificuldade": "alta",
        "pergunta": "Uma professora adapta a forma de resposta de uma avaliação, mas mantém os objetivos de aprendizagem e os critérios de análise do conteúdo. Em seguida, registra evidências para replanejar apoios. Essa prática é",
        "alternativas": [
            "inadequada, porque qualquer mudança no instrumento compromete a validade da avaliação em relação aos demais estudantes.",
            "adequada somente se o estudante tiver desempenho abaixo da média nas avaliações anteriores da turma.",
            "inadequada, pois avaliação inclusiva deve utilizar os mesmos meios e tempos para preservar imparcialidade.",
            "adequada, pois instrumento acessível e uso formativo das evidências podem preservar objetivos e critérios claros.",
            "adequada apenas quando a adaptação é aplicada a todos os estudantes, independentemente das barreiras observadas."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu uma avaliação inclusiva: o meio pode ser acessível e os dados podem orientar replanejamento, sem abandonar objetivos e critérios pedagógicos.",
        "feedbackErro": "A imparcialidade não exige instrumentos idênticos quando o próprio formato cria barreira. O essencial é garantir condições de demonstrar a aprendizagem e interpretar evidências com critérios claros.",
        "analiseAlternativas": [
            "Incorreta. Alterar o meio de resposta não invalida a avaliação se os objetivos e critérios forem preservados.",
            "Incorreta. A adaptação decorre da barreira identificada, não de uma nota mínima anterior.",
            "Incorreta. Igualdade de formato pode produzir desigualdade de acesso.",
            "Correta. Acessibilidade e função formativa são compatíveis com rigor pedagógico.",
            "Incorreta. Algumas estratégias podem beneficiar todos, mas apoios específicos não precisam ser universalizados."
        ],
        "dicaBanca": "FGV gosta de confundir equidade com perda de rigor. Separe 'o que se avalia' de 'como o estudante demonstra'.",
        "pegadinha": "Acessibilizar não é facilitar o conteúdo.",
        "memorizar2026": "Avaliação inclusiva: objetivo claro + instrumento acessível + evidência para replanejar.",
        "fonte": "LBI, art. 28; Decreto nº 12.686/2025, arts. 3º, 4º e 11."
    },
    {
        "id": "SEDUC-EE-INC-014",
        "numero": 14,
        "subtopico": "Altas expectativas e capacitismo",
        "dificuldade": "alta",
        "pergunta": "Uma equipe reduz antecipadamente os objetivos de aprendizagem de todos os estudantes com deficiência intelectual, antes de observar seu desempenho ou as barreiras do contexto. Essa prática é problemática porque",
        "alternativas": [
            "o currículo comum deve ser aplicado sem qualquer adaptação, independentemente das necessidades individuais observadas.",
            "a redução automática pode expressar baixa expectativa capacitista e ignorar potencialidades e barreiras do contexto.",
            "somente o professor do AEE pode definir objetivos de aprendizagem para estudantes público da Educação Especial.",
            "objetivos individualizados são proibidos na educação inclusiva, ainda que decorram de estudo pedagógico e planejamento colaborativo.",
            "a deficiência intelectual exige avaliação exclusivamente funcional, sem consideração dos conteúdos curriculares da etapa."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou o problema central: antecipar limites a partir do rótulo diagnóstico pode produzir baixa expectativa e empobrecimento curricular antes de qualquer análise pedagógica contextual.",
        "feedbackErro": "A educação inclusiva não proíbe adaptações nem objetivos individualizados quando pedagogicamente justificados. O erro está em reduzir expectativas de forma automática e generalizada pela condição do estudante.",
        "analiseAlternativas": [
            "Incorreta. Adaptações e apoios podem ser necessários; o problema não é toda diferenciação.",
            "Correta. A decisão automática baseada na deficiência ignora potencialidades e barreiras do contexto.",
            "Incorreta. A definição de objetivos envolve planejamento educacional e não é atribuição exclusiva do AEE.",
            "Incorreta. Instrumentos individualizados podem ser utilizados quando coerentes com o estudo de caso e o currículo.",
            "Incorreta. A aprendizagem curricular não deve ser abandonada em favor de uma visão apenas funcional."
        ],
        "dicaBanca": "Distrator FGV típico: uma alternativa combate baixa expectativa usando a ideia extrema de 'nenhuma adaptação'. Inclusão não é rigidez.",
        "pegadinha": "Nem reduzir automaticamente, nem negar qualquer adaptação.",
        "memorizar2026": "Altas expectativas + apoios adequados + evidências reais de aprendizagem.",
        "fonte": "Decreto nº 12.686/2025, arts. 2º a 4º e 11; LBI, art. 28."
    },
    {
        "id": "SEDUC-EE-INC-015",
        "numero": 15,
        "subtopico": "Currículo comum e apoios",
        "dificuldade": "alta",
        "pergunta": "Ao planejar uma sequência didática, a equipe deseja preservar a participação de um estudante com deficiência visual no mesmo tema trabalhado pela turma. A alternativa mais consistente é",
        "alternativas": [
            "substituir o tema por conteúdo funcional de menor complexidade, evitando frustração diante dos recursos visuais utilizados.",
            "manter os recursos originais e solicitar que o AEE explique posteriormente tudo aquilo que não puder ser acessado em sala.",
            "selecionar recursos acessíveis e descrições adequadas, mantendo o objetivo curricular e os apoios necessários.",
            "retirar as imagens e materiais visuais de toda a turma, pois inclusão exige que todos utilizem exatamente os mesmos canais sensoriais.",
            "transferir a atividade principal para o contraturno, porque recursos acessíveis pertencem prioritariamente ao atendimento especializado."
        ],
        "correta": 2,
        "feedbackAcerto": "Você escolheu a estratégia que preserva o objetivo curricular e modifica os meios de acesso. A acessibilidade deve chegar à classe comum e pode ser complementada por apoios individualizados.",
        "feedbackErro": "Inclusão não exige retirar recursos úteis da turma nem deslocar a aprendizagem principal para o contraturno. O caminho é tornar materiais e estratégias acessíveis ao estudante.",
        "analiseAlternativas": [
            "Incorreta. A barreira visual não justifica redução automática da complexidade curricular.",
            "Incorreta. O AEE pode apoiar, mas não deve reparar depois uma barreira que pode ser enfrentada no planejamento da classe comum.",
            "Correta. Mantém o objetivo e organiza acesso por recursos adequados e apoios necessários.",
            "Incorreta. DUA e acessibilidade ampliam meios; não exigem empobrecimento dos recursos de toda a turma.",
            "Incorreta. Recursos de acessibilidade devem apoiar a escolarização comum, não deslocá-la."
        ],
        "dicaBanca": "Quando o problema está no canal de acesso, desconfie de alternativas que reduzem o conteúdo em vez de adaptar o recurso.",
        "pegadinha": "Mudar o meio não é mudar o direito ao currículo.",
        "memorizar2026": "Currículo comum + recurso acessível + apoio necessário.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §5º; LBI, art. 28."
    },
    {
        "id": "SEDUC-EE-INC-016",
        "numero": 16,
        "subtopico": "Princípios do processo inclusivo",
        "dificuldade": "alta",
        "pergunta": "A respeito do processo de inclusão no ensino regular, assinale (V) para a afirmativa verdadeira e (F) para a falsa.",
        "alternativas": [
            "V – V – F – V.",
            "F – V – V – F.",
            "V – F – V – V.",
            "F – F – V – V.",
            "V – V – V – F."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou a sequência correta: V – V – F – V. Inclusão exige participação, apoios e eliminação de barreiras; não autoriza transformar AEE em substituto da classe comum.",
        "feedbackErro": "A terceira afirmativa é falsa porque o AEE não substitui matrícula e frequência na classe comum. As demais expressam dimensões coerentes com o sistema inclusivo.",
        "analiseAlternativas": [
            "Correta. As duas primeiras e a quarta são verdadeiras; a terceira é falsa.",
            "Incorreta. A primeira é verdadeira e a terceira é falsa.",
            "Incorreta. A segunda é verdadeira e a terceira é falsa.",
            "Incorreta. A primeira e a segunda são verdadeiras.",
            "Incorreta. A terceira não pode ser considerada verdadeira."
        ],
        "dicaBanca": "Em sequências V/F, marque primeiro os itens com palavras normativas fortes: matrícula, substituição, condicionamento e participação.",
        "pegadinha": "AEE substitutivo costuma quebrar a sequência.",
        "memorizar2026": "Classe comum permanece o eixo da escolarização; apoios ampliam acesso e participação.",
        "fonte": "Decreto nº 12.686/2025, arts. 1º a 8º.",
        "afirmacoes": [
            "( ) Inclusão exige condições de acesso, permanência, participação e aprendizagem.",
            "( ) Apoios individualizados podem ser necessários para garantir igualdade de oportunidades.",
            "( ) A matrícula no AEE pode substituir a frequência na classe comum quando houver recomendação pedagógica.",
            "( ) Barreiras podem estar no ambiente, na comunicação, nas atitudes e nas práticas pedagógicas."
        ]
    },
    {
        "id": "SEDUC-EE-INC-017",
        "numero": 17,
        "subtopico": "AEE — objetivos e articulação",
        "dificuldade": "alta",
        "pergunta": "Considerando os objetivos atuais do AEE, está correto afirmar que ele",
        "alternativas": [
            "concentra a escolarização dos estudantes público da Educação Especial e delega à classe comum funções prioritariamente sociais.",
            "identifica barreiras e organiza recursos, mas deve evitar interferência na prática do professor regente para preservar autonomia docente.",
            "atua somente na sala de recursos multifuncionais e não alcança atividades realizadas em outros espaços da escola.",
            "tem como finalidade principal reforçar os conteúdos em que o estudante apresentou baixo rendimento nas avaliações regulares.",
            "organiza recursos de acessibilidade, articula profissionais e qualifica participação e aprendizagem na escolarização comum."
        ],
        "correta": 4,
        "feedbackAcerto": "Você selecionou a formulação mais completa: o AEE identifica e enfrenta barreiras, organiza recursos e articula profissionais para qualificar participação e aprendizagem.",
        "feedbackErro": "AEE não é reforço, nem escolarização paralela, nem serviço isolado da prática da classe comum. Sua função está diretamente ligada às condições de acesso e participação no percurso educacional.",
        "analiseAlternativas": [
            "Incorreta. A classe comum não se restringe à socialização e o AEE não concentra a escolarização.",
            "Incorreta. Articulação com o professor regente e demais profissionais é parte da finalidade do AEE.",
            "Incorreta. Recursos e estratégias do AEE devem repercutir em todas as atividades educacionais necessárias.",
            "Incorreta. Reforço de conteúdo não define a função do AEE.",
            "Correta. Resume objetivos expressos do AEE na política nacional vigente."
        ],
        "dicaBanca": "Na FGV, AEE correto costuma aparecer ligado a 'recursos de acessibilidade', 'eliminação de barreiras' e 'articulação', não a reforço escolar.",
        "pegadinha": "AEE não é reforço nem classe paralela.",
        "memorizar2026": "AEE = barreiras + recursos + articulação + participação/aprendizagem.",
        "fonte": "Decreto nº 12.686/2025, arts. 5º e 6º; Resolução CNE/CEB nº 4/2009."
    },
    {
        "id": "SEDUC-EE-INC-018",
        "numero": 18,
        "subtopico": "Exclusão pedagógica na classe comum",
        "dificuldade": "alta",
        "pergunta": "Uma escola mantém estudante com TEA na turma regular, mas determina que ele participe somente de atividades previamente escolhidas pelo profissional de apoio, sem planejamento conjunto com o professor e sem acesso sistemático às tarefas coletivas. A principal inadequação está em",
        "alternativas": [
            "utilizar profissional de apoio, pois esse serviço deve ocorrer apenas fora da classe comum para não interferir no trabalho docente.",
            "organizar a participação de modo paralelo, transferindo do professor e da equipe a responsabilidade pela escolarização.",
            "permitir atividades diferenciadas, já que toda diferenciação contraria o princípio de igualdade no ensino regular.",
            "manter o estudante na turma, pois alunos com TEA deveriam frequentar exclusivamente o AEE quando necessitam apoio frequente.",
            "não exigir do profissional de apoio formação docente completa, requisito necessário para elaborar e ministrar o currículo da turma."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou o núcleo do problema: o profissional de apoio não deve se tornar 'professor particular' que assume sozinho a escolarização e cria um percurso paralelo ao da turma.",
        "feedbackErro": "O profissional de apoio favorece acesso, participação, comunicação, locomoção e autonomia conforme o plano pedagógico. Planejamento e ensino permanecem responsabilidade da equipe educacional e do professor da classe comum.",
        "analiseAlternativas": [
            "Incorreta. O apoio pode atuar nas atividades escolares e não deve ser isolado fora da classe.",
            "Correta. O caso transforma apoio em substituto do planejamento e produz percurso paralelo.",
            "Incorreta. Diferenciação pode ser necessária; o problema é a desconexão e a transferência de responsabilidade.",
            "Incorreta. TEA integra o público da política inclusiva e não implica escolarização exclusiva no AEE.",
            "Incorreta. O profissional de apoio não é responsável por ministrar sozinho o currículo da turma."
        ],
        "dicaBanca": "FGV já diferencia professor do AEE, professor regente e profissional de apoio. Observe quem planeja, quem ensina e quem apoia.",
        "pegadinha": "Apoio não é professor particular do estudante.",
        "memorizar2026": "Profissional de apoio favorece participação; escolarização é responsabilidade pedagógica da escola.",
        "fonte": "Decreto nº 12.686/2025, arts. 12 e 14."
    },
    {
        "id": "SEDUC-EE-INC-019",
        "numero": 19,
        "subtopico": "AEE sem laudo",
        "dificuldade": "alta",
        "pergunta": "Uma escola identifica barreiras significativas e inicia estudo de caso de um estudante, mas decide suspender o AEE até que a família apresente diagnóstico emitido por especialista. Essa decisão é",
        "alternativas": [
            "adequada, pois o estudo de caso apenas organiza informações depois que o diagnóstico clínico confirma o público da Educação Especial.",
            "adequada quando a escola pretende registrar o estudante no Censo Escolar e precisa justificar a matrícula no AEE.",
            "inadequada, porque a oferta do AEE não pode ser condicionada à exigência de diagnóstico, laudo, relatório ou documento de saúde.",
            "inadequada apenas quando já houver PEI aprovado pela equipe pedagógica e ciência formal da família.",
            "adequada se a suspensão for temporária e a escola oferecer atividades adaptadas na classe comum durante a espera."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou a atualização normativa: o AEE não pode ser condicionado à apresentação de laudo ou diagnóstico. O estudo de caso é metodologia pedagógica e pode contar com documentos externos como subsídio, não como pré-requisito.",
        "feedbackErro": "Suspender o AEE por ausência de documento clínico contraria a política vigente. A avaliação biopsicossocial pode subsidiar, mas não substitui nem condiciona o processo pedagógico.",
        "analiseAlternativas": [
            "Incorreta. O estudo de caso não depende de confirmação clínica prévia para existir.",
            "Incorreta. A garantia educacional do AEE não fica subordinada a essa exigência documental.",
            "Correta. É a regra expressa do art. 11, §7º, do Decreto vigente.",
            "Incorreta. A proibição do condicionamento não depende de já existir PEI.",
            "Incorreta. Medida temporária não legitima condição documental que a norma afastou."
        ],
        "dicaBanca": "Atenção à atualização 2025/2026: FGV pode colocar linguagem antiga de 'laudo obrigatório' contra a regra atual do estudo de caso.",
        "pegadinha": "Documento de saúde pode subsidiar; não é porta de entrada obrigatória do AEE.",
        "memorizar2026": "AEE não condicionado a diagnóstico/laudo/relatório de saúde.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §§6º e 7º.",
        "atualizacao2026": "Em 2026, a garantia da oferta do AEE não pode ser condicionada a documento emitido por profissional de saúde."
    },
    {
        "id": "SEDUC-EE-INC-020",
        "numero": 20,
        "subtopico": "Adaptação razoável — participação",
        "dificuldade": "alta",
        "pergunta": "Um estudante utiliza tecnologia assistiva para comunicação. Em um seminário, a professora permite que ele apresente utilizando o dispositivo, mantendo o mesmo tema, tempo equivalente e critérios de conteúdo da turma. A medida",
        "alternativas": [
            "é inadequada, porque o uso de tecnologia assistiva altera a natureza oral da atividade e impede comparação entre desempenhos.",
            "é adequada, pois adapta o meio de comunicação sem necessariamente alterar o objetivo acadêmico da atividade.",
            "é inadequada, porque recursos individuais devem ser empregados apenas no AEE para não interferir na dinâmica da classe comum.",
            "é adequada somente se todos os colegas também utilizarem recurso tecnológico durante a apresentação do seminário.",
            "é inadequada quando o dispositivo produz voz sintetizada, pois a apresentação deve avaliar expressão oral espontânea."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu uma adaptação razoável: o recurso muda o canal de expressão e permite participação, enquanto o objetivo acadêmico e os critérios de conteúdo permanecem preservados.",
        "feedbackErro": "Tecnologia assistiva pode ser usada na classe comum. O fato de a expressão ocorrer por outro meio não significa menor exigência quando o objetivo é demonstrar compreensão e comunicar o conteúdo.",
        "analiseAlternativas": [
            "Incorreta. A comparabilidade pode ser preservada por objetivos e critérios, sem exigir o mesmo canal de comunicação.",
            "Correta. A tecnologia remove a barreira de expressão e mantém o núcleo acadêmico da atividade.",
            "Incorreta. Recursos de acessibilidade devem repercutir na escolarização comum quando necessários.",
            "Incorreta. Equidade não exige que um apoio individual seja aplicado indistintamente a todos.",
            "Incorreta. Se o objetivo principal é o conteúdo do seminário, o canal de expressão pode ser acessibilizado."
        ],
        "dicaBanca": "Leia o objetivo da atividade. Se a competência avaliada não é 'produzir fala sem apoio', o recurso de comunicação pode ser parte legítima da resposta.",
        "pegadinha": "Tecnologia assistiva não reduz automaticamente o rigor.",
        "memorizar2026": "Adapte o canal quando o canal é a barreira.",
        "fonte": "LBI, arts. 3º e 28; Decreto nº 12.686/2025, arts. 3º, V e 11, §5º."
    },
    {
        "id": "SEDUC-EE-INC-021",
        "numero": 21,
        "subtopico": "Equidade — apoios diferenciados",
        "dificuldade": "alta",
        "pergunta": "A coordenação questiona por que um aluno tem tempo adicional e outro utiliza material ampliado, alegando que todos deveriam receber exatamente as mesmas condições. A resposta mais consistente é",
        "alternativas": [
            "igualdade educacional exige uniformidade de recursos, salvo quando houver determinação judicial em sentido contrário.",
            "apoios diferenciados são admissíveis somente no AEE; na classe comum as condições devem ser idênticas para evitar favorecimento.",
            "a equidade pode exigir apoios diferentes para assegurar oportunidades efetivas de participação e aprendizagem.",
            "o tratamento diferenciado é aceitável quando reduz objetivos de aprendizagem, compensando formalmente as limitações do estudante.",
            "a escola deve escolher um único padrão de adaptação por tipo de deficiência, garantindo tratamento homogêneo entre estudantes com o mesmo diagnóstico."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou equidade de modo preciso: apoios podem variar entre estudantes porque as barreiras e necessidades também variam, enquanto o direito à participação e à aprendizagem permanece comum.",
        "feedbackErro": "Uniformidade não é requisito de justiça educacional. O apoio deve responder à necessidade real, não ser distribuído por diagnóstico nem limitado ao AEE.",
        "analiseAlternativas": [
            "Incorreta. A escola tem dever educacional de acessibilidade e não depende de ordem judicial para ajustar condições.",
            "Incorreta. Apoios precisam alcançar a classe comum e outros espaços onde a barreira ocorre.",
            "Correta. Equidade ajusta condições para garantir oportunidades reais.",
            "Incorreta. Apoio diferenciado não significa redução obrigatória de objetivos.",
            "Incorreta. Mesmo diagnóstico pode envolver barreiras e necessidades distintas."
        ],
        "dicaBanca": "FGV cobra equidade como tratamento diferenciado para reduzir desigualdades, mas cuidado com alternativas que transformam isso em privilégio ou padronização por diagnóstico.",
        "pegadinha": "Mesmo diagnóstico não significa mesmo apoio.",
        "memorizar2026": "Equidade olha a barreira e a necessidade, não o rótulo isolado.",
        "fonte": "Decreto nº 12.686/2025, art. 2º, II e III; LBI, art. 28."
    },
    {
        "id": "SEDUC-EE-INC-022",
        "numero": 22,
        "subtopico": "Trabalho colaborativo",
        "dificuldade": "alta",
        "pergunta": "Professor regente e professor do AEE analisam juntos as barreiras de uma atividade, selecionam recursos acessíveis e acompanham a resposta do estudante. Essa organização é coerente porque",
        "alternativas": [
            "o AEE deve assumir o planejamento das adaptações, cabendo ao professor regente executar as orientações recebidas.",
            "o trabalho colaborativo articula responsabilidades sem transformar o AEE em serviço isolado ou substitutivo.",
            "a colaboração torna desnecessário o PEI, já que decisões informais entre professores substituem os instrumentos individualizados.",
            "a atuação conjunta é recomendada apenas quando o estudante possui profissional de apoio escolar durante todas as aulas.",
            "o planejamento colaborativo transfere ao professor do AEE a avaliação do estudante, preservando ao regente apenas os conteúdos comuns."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu a articulação como parte da inclusão: o AEE e a classe comum devem compartilhar informações e estratégias, preservando responsabilidades complementares.",
        "feedbackErro": "Colaboração não significa hierarquia entre professores nem dispensa documentos pedagógicos quando obrigatórios. Ela integra recursos, estratégias e acompanhamento em torno da escolarização comum.",
        "analiseAlternativas": [
            "Incorreta. O professor regente não é mero executor; planejamento e escolarização são responsabilidades compartilhadas conforme as funções de cada profissional.",
            "Correta. A articulação evita isolamento do AEE e fortalece a participação na classe comum.",
            "Incorreta. Colaboração não elimina PAEE/PEI quando exigidos pela regulamentação vigente.",
            "Incorreta. A necessidade de profissional de apoio não condiciona o trabalho colaborativo entre docentes.",
            "Incorreta. Avaliação e acompanhamento não são deslocados integralmente ao AEE."
        ],
        "dicaBanca": "FGV cobra atribuições profissionais. Distratores fortes trocam 'colaboração' por 'subordinação' ou transferência de responsabilidade.",
        "pegadinha": "Colaborar não é mandar nem substituir.",
        "memorizar2026": "Classe comum + AEE: articulação contínua em torno de barreiras, recursos e aprendizagem.",
        "fonte": "Decreto nº 12.686/2025, arts. 6º e 12."
    },
    {
        "id": "SEDUC-EE-INC-023",
        "numero": 23,
        "subtopico": "PNEEI 2025/2026 — classes comuns",
        "dificuldade": "alta",
        "pergunta": "De acordo com a Política Nacional de Educação Especial Inclusiva vigente, a garantia do sistema educacional inclusivo ocorre por meio da organização do sistema educacional geral de forma a assegurar que os estudantes público da Educação Especial",
        "alternativas": [
            "tenham o direito de ser incluídos em classes e escolas comuns, com o apoio necessário à participação, permanência e aprendizagem.",
            "sejam direcionados preferencialmente ao AEE sempre que necessitarem de medidas de apoio individualizadas e efetivas.",
            "possam escolher entre escolarização comum e especializada com equivalência automática de finalidade e percurso curricular.",
            "frequentem classes comuns apenas após comprovação de que conseguem acompanhar os objetivos previstos sem adaptações significativas.",
            "tenham assegurada presença no ensino regular, embora a participação curricular dependa da capacidade funcional indicada no diagnóstico."
        ],
        "correta": 0,
        "feedbackAcerto": "Você marcou a formulação compatível com a redação vigente: direito à inclusão em classes e escolas comuns, com apoio necessário para participação, permanência e aprendizagem.",
        "feedbackErro": "A política atual não condiciona a classe comum à capacidade de acompanhar sem apoio nem coloca AEE e escolarização comum como alternativas equivalentes de substituição.",
        "analiseAlternativas": [
            "Correta. Resume a garantia expressa no art. 1º, §3º, com a redação vigente.",
            "Incorreta. O AEE apoia a escolarização; necessidade de apoio não desloca automaticamente o estudante para atendimento especializado.",
            "Incorreta. O sistema inclusivo organiza a escolarização comum com apoios; não cria equivalência automática entre percursos substitutivos.",
            "Incorreta. A inclusão não depende de desempenho prévio sem adaptações.",
            "Incorreta. Participação curricular não é condicionada pelo diagnóstico clínico."
        ],
        "dicaBanca": "Questão literal com distratores plausíveis: memorize a sequência 'classes e escolas comuns + apoio + participação/permanência/aprendizagem'.",
        "pegadinha": "Não transforme apoio em critério de exclusão da classe comum.",
        "memorizar2026": "PNEEI vigente: classes/escolas comuns com apoio necessário.",
        "fonte": "Decreto nº 12.686/2025, art. 1º, §3º, com redação do Decreto nº 12.773/2025.",
        "atualizacao2026": "A redação do §3º do art. 1º foi alterada pelo Decreto nº 12.773/2025; estude a versão vigente em 2026."
    },
    {
        "id": "SEDUC-EE-INC-024",
        "numero": 24,
        "subtopico": "Preferencialmente na rede regular",
        "dificuldade": "alta",
        "pergunta": "Ao interpretar a expressão 'preferencialmente na rede regular de ensino' presente na legislação educacional, uma equipe conclui que o sistema pode dispensar esforços de inclusão sempre que considerar mais conveniente encaminhar o estudante para atendimento separado. Essa interpretação é",
        "alternativas": [
            "correta, porque 'preferencialmente' atribui discricionariedade plena à escola para escolher o modelo de escolarização.",
            "correta se a decisão for tomada em conjunto com a família e registrada no PEI como medida de proteção educacional.",
            "incorreta apenas para estudantes com deficiência física, cuja acessibilidade é obrigação expressa da LBI.",
            "incorreta, pois a expressão deve ser lida no conjunto de normas que organiza o sistema educacional inclusivo.",
            "correta quando o atendimento separado permitir maior quantidade de recursos especializados do que a escola comum consegue disponibilizar."
        ],
        "correta": 3,
        "feedbackAcerto": "Você fez a leitura sistemática correta. 'Preferencialmente' não pode ser transformado em autorização ampla para dispensar o dever de organizar condições inclusivas no sistema educacional geral.",
        "feedbackErro": "A interpretação atual combina Constituição, Convenção, LBI, LDB e política nacional. A existência de serviços especializados não elimina o dever de promover inclusão e acessibilidade na escolarização comum.",
        "analiseAlternativas": [
            "Incorreta. A expressão não cria liberdade irrestrita para abandonar o sistema inclusivo.",
            "Incorreta. Participação familiar é relevante, mas não converte segregação em regra de conveniência.",
            "Incorreta. O sistema inclusivo não se restringe a um tipo de deficiência.",
            "Correta. A interpretação deve harmonizar as normas que protegem educação inclusiva e igualdade de oportunidades.",
            "Incorreta. Maior disponibilidade de recursos não autoriza concluir automaticamente pela substituição da escolarização comum."
        ],
        "dicaBanca": "FGV gosta de isolar palavras normativas. Leia 'preferencialmente' em conjunto com Convenção e LBI, não como licença para segregação.",
        "pegadinha": "Preferencialmente ≠ facultativamente segundo conveniência administrativa.",
        "memorizar2026": "Interpretação sistemática: Constituição + Convenção + LBI + LDB + PNEEI vigente.",
        "fonte": "CF/88, art. 208, III; Convenção, art. 24; LDB, art. 58; LBI, arts. 27 e 28; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-INC-025",
        "numero": 25,
        "subtopico": "Caso integrador — inclusão no ensino regular",
        "dificuldade": "alta",
        "pergunta": "Uma escola recebe uma estudante com deficiência que utiliza comunicação alternativa. A equipe identifica barreiras na participação em debates, na avaliação escrita e no acesso a alguns materiais. Considerando uma resposta inclusiva, a conduta mais adequada é",
        "alternativas": [
            "encaminhar a estudante ao AEE durante as atividades de maior exigência comunicacional e manter a classe comum apenas para conteúdos que consiga acompanhar sem apoio.",
            "aguardar avaliação clínica completa antes de definir recursos, pois a escolha de tecnologia assistiva depende de diagnóstico funcional conclusivo.",
            "manter os mesmos instrumentos da turma e compensar eventuais perdas com nota de participação, evitando diferenciação de procedimentos.",
            "reduzir previamente os objetivos curriculares e concentrar o planejamento individualizado em habilidades funcionais de comunicação.",
            "articular classe comum, AEE, estudante e família para remover barreiras e ajustar meios de participação sem substituir a escolarização comum."
        ],
        "correta": 4,
        "feedbackAcerto": "Você integrou os princípios do bloco: escolarização comum, participação do estudante e da família, articulação com o AEE, recursos de acessibilidade e ajustes dos meios sem transformar o apoio em substituição curricular.",
        "feedbackErro": "A resposta inclusiva não espera laudo para começar a agir, não transforma AEE em refúgio das atividades difíceis e não reduz automaticamente objetivos. Ela identifica barreiras e organiza apoios na escolarização comum.",
        "analiseAlternativas": [
            "Incorreta. Retirar a estudante justamente nas atividades mais exigentes pode excluir sua participação e transformar o AEE em substitutivo.",
            "Incorreta. A escolha pedagógica de recursos não precisa aguardar diagnóstico clínico conclusivo para iniciar o enfrentamento das barreiras.",
            "Incorreta. Igualdade de instrumentos pode manter barreiras e nota compensatória não substitui acessibilidade.",
            "Incorreta. Redução prévia de objetivos com base na deficiência pode empobrecer o currículo antes da análise das necessidades reais.",
            "Correta. A proposta articula apoios e acessibilidade mantendo a classe comum como espaço de escolarização."
        ],
        "dicaBanca": "Questão integradora FGV: elimine alternativas que contenham uma ação correta, mas a usem para justificar retirada da classe comum, laudo obrigatório ou redução automática do currículo.",
        "pegadinha": "A melhor resposta inclusiva combina acesso ao currículo, apoio e participação — não apenas um desses elementos.",
        "memorizar2026": "Identificar barreiras → planejar apoios → participar na classe comum → acompanhar aprendizagem → replanejar.",
        "fonte": "Decreto nº 12.686/2025; LBI, arts. 27 e 28; Convenção, art. 24; Resolução CNE/CEB nº 4/2009."
    }
];
    window.seducEducacaoEspecialInclusaoRegular2026 = banco;
})();
