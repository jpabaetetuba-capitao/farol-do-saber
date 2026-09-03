/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 2: Planejamento da Educação Especial
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 01/09/2026.
   Bases principais: Decreto 12.686/2025 (redação do 12.773/2025)
   e Portaria MEC 421/2026.
==========================================================
   Revisão FGV de distratores e equilíbrio de extensão: 02/09/2026.
 ========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-PLAN-001",
        "numero": 1,
        "subtopico": "Planejamento inclusivo",
        "dificuldade": "media",
        "pergunta": "Em uma reunião pedagógica, a coordenação afirma que o planejamento para estudantes público da Educação Especial deve ser revisto à luz das barreiras encontradas, dos resultados de aprendizagem e dos apoios efetivamente necessários. Essa compreensão caracteriza o planejamento como",
        "alternativas": [
            "procedimento burocrático concluído no início do ano letivo.",
            "documento clínico destinado a registrar limitações funcionais.",
            "processo intencional, contínuo, flexível e passível de replanejamento.",
            "instrumento exclusivo do professor do AEE.",
            "mecanismo de redução prévia das expectativas de aprendizagem."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu a natureza processual do planejamento inclusivo. Ele parte de objetivos pedagógicos, acompanha o desenvolvimento do estudante e pode ser ajustado conforme evidências, barreiras e necessidades de apoio.",
        "feedbackErro": "A alternativa correta descreve o planejamento como processo contínuo e flexível. Na perspectiva inclusiva, planejar não é preencher um formulário imutável nem transferir a responsabilidade ao AEE; é organizar, acompanhar e replanejar a ação pedagógica.",
        "analiseAlternativas": [
            "Incorreta. Planejamento não se encerra no início do ano; deve acompanhar o percurso do estudante.",
            "Incorreta. Informações clínicas podem subsidiar, mas o planejamento é pedagógico, não clínico.",
            "Correta. Intencionalidade, acompanhamento e replanejamento são compatíveis com a educação inclusiva.",
            "Incorreta. O planejamento envolve classe comum, AEE, equipe escolar e articulações necessárias.",
            "Incorreta. Inclusão não pressupõe reduzir expectativas de forma automática por causa de uma condição."
        ],
        "dicaBanca": "Quando a FGV opuser planejamento dinâmico a formulário rígido, procure a alternativa que articula objetivos, acompanhamento e revisão.",
        "pegadinha": "‘Planejamento individualizado’ não significa currículo isolado nem plano fixo.",
        "memorizar2026": "Planejar = definir ações + acompanhar evidências + ajustar estratégias.",
        "fonte": "Decreto nº 12.686/2025, arts. 3º, 4º e 12; Portaria MEC nº 421/2026, art. 7º."
    },
    {
        "id": "SEDUC-EE-PLAN-002",
        "numero": 2,
        "subtopico": "Estudo de caso",
        "dificuldade": "media",
        "pergunta": "Segundo a regulamentação vigente da Educação Especial Inclusiva, o estudo de caso corresponde à etapa que",
        "alternativas": [
            "sistematiza informações sobre demandas, barreiras, potencialidades, apoios e recursos de acessibilidade para orientar decisões pedagógicas.",
            "integra avaliação pedagógica e diagnóstico de saúde, atribuindo ao documento clínico a definição inicial da elegibilidade para o atendimento.",
            "serve apenas para comprovar a deficiência perante o Censo Escolar.",
            "é realizada somente após a elaboração do PAEE e do PEI.",
            "define automaticamente a necessidade de profissional de apoio para todo estudante com TEA."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente o estudo de caso como metodologia pedagógica inicial que organiza informações do contexto educacional e sustenta a definição de estratégias e apoios.",
        "feedbackErro": "O estudo de caso não é uma etapa clínica nem mero documento comprobatório. Ele analisa demandas, barreiras, contexto, potencialidades e apoios para orientar PAEE, PEI e demais decisões pedagógicas.",
        "analiseAlternativas": [
            "Correta. Essa formulação reúne as etapas expressas no art. 11 do Decreto nº 12.686/2025.",
            "Incorreta. Diagnóstico de saúde não substitui o estudo pedagógico e não é requisito para sua realização.",
            "Incorreta. O estudo de caso tem função pedagógica mais ampla do que a declaração censitária.",
            "Incorreta. O estudo de caso antecede e fundamenta PAEE e PEI.",
            "Incorreta. A necessidade de apoio é avaliada no estudo de caso; não decorre automaticamente do diagnóstico."
        ],
        "dicaBanca": "FGV gosta de trocar ‘analisar barreiras e potencialidades’ por ‘confirmar diagnóstico’. Essa troca torna a alternativa errada.",
        "pegadinha": "O estudo de caso não procura apenas déficits; também identifica potencialidades e recursos.",
        "memorizar2026": "Estudo de caso: demandas → barreiras/contexto → potencialidades/apoios → estratégias e acessibilidade.",
        "fonte": "Decreto nº 12.686/2025, art. 11, com redação do Decreto nº 12.773/2025."
    },
    {
        "id": "SEDUC-EE-PLAN-003",
        "numero": 3,
        "subtopico": "Estudo de caso",
        "dificuldade": "alta",
        "pergunta": "Uma escola iniciou o estudo de caso de uma aluna com deficiência física. A equipe pretende limitar a análise às dificuldades de locomoção observadas na estudante. À luz do Decreto nº 12.686/2025, essa decisão é",
        "alternativas": [
            "adequada, pois o estudo de caso deve restringir-se aos impedimentos funcionais.",
            "adequada, desde que posteriormente seja juntado laudo médico.",
            "adequada se a família concordar com o foco inicial nos impedimentos e a equipe ampliar a análise apenas quando surgirem novas barreiras.",
            "inadequada, pois o estudo deve analisar também contexto, barreiras, potencialidades, apoios e recursos de acessibilidade.",
            "inadequada apenas porque o professor da classe comum deveria conduzir sozinho o estudo."
        ],
        "correta": 3,
        "feedbackAcerto": "Você percebeu que o estudo de caso é contextual e não se limita ao impedimento funcional. O planejamento precisa compreender também barreiras, potencialidades, apoios e recursos capazes de ampliar participação e aprendizagem.",
        "feedbackErro": "A alternativa correta amplia o olhar para além da limitação individual. A norma exige análise do contexto escolar, das barreiras, das potencialidades e das demandas de apoio, seguida da definição de estratégias e recursos de acessibilidade.",
        "analiseAlternativas": [
            "Incorreta. O impedimento é apenas uma parte da análise.",
            "Incorreta. Laudo pode subsidiar, mas não corrige um estudo de caso pedagogicamente incompleto.",
            "Incorreta. A participação da família é importante, mas não autoriza reduzir as etapas previstas na norma.",
            "Correta. Essa é a lógica contextual e pedagógica prevista no art. 11.",
            "Incorreta. O estudo é conduzido no âmbito do AEE de modo colaborativo, não exclusivamente pelo professor da classe comum."
        ],
        "dicaBanca": "Em caso prático, procure saber se a escola está olhando apenas para ‘o que o aluno não consegue’ ou também para as barreiras que pode remover.",
        "pegadinha": "FGV pode usar uma descrição tecnicamente verdadeira do impedimento para esconder que o contexto escolar não foi analisado.",
        "memorizar2026": "Deficiência não se planeja só pelo impedimento; planeja-se pela interação estudante–barreiras–apoios.",
        "fonte": "Decreto nº 12.686/2025, art. 11, § 1º e § 5º."
    },
    {
        "id": "SEDUC-EE-PLAN-004",
        "numero": 4,
        "subtopico": "Estudo de caso",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. Seu resultado fundamenta o PAEE e o PEI.",
            "II. O envolvimento do estudante e dos familiares deve ser garantido ao longo do processo.",
            "III. A avaliação biopsicossocial, quando existente, substitui a análise pedagógica do contexto escolar."
        ],
        "pergunta": "Está correto o que se afirma em",
        "alternativas": [
            "I, apenas.",
            "I e II, apenas.",
            "II e III, apenas.",
            "III, apenas.",
            "I, II e III."
        ],
        "correta": 1,
        "feedbackAcerto": "Você separou corretamente o papel pedagógico do estudo de caso do papel subsidiário de documentos externos. I e II estão de acordo com a norma; III está errada.",
        "feedbackErro": "A combinação correta é I e II. A avaliação biopsicossocial pode subsidiar o estudo de caso, mas não substitui a análise pedagógica das barreiras, potencialidades e necessidades de apoio.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa II também é verdadeira.",
            "Correta. O estudo fundamenta PAEE/PEI e deve envolver estudante e familiares.",
            "Incorreta. III é falsa porque a avaliação biopsicossocial é subsidiária.",
            "Incorreta. III é falsa e I e II são verdadeiras.",
            "Incorreta. A presença da afirmativa III invalida a alternativa."
        ],
        "dicaBanca": "Nas questões I/II/III da FGV, atenção aos verbos ‘subsidiar’ e ‘substituir’: eles mudam completamente o sentido.",
        "pegadinha": "Documento de saúde pode colaborar; não toma o lugar da análise pedagógica.",
        "memorizar2026": "Biopsicossocial: pode subsidiar. Estudo de caso: permanece pedagógico e contextual.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §§ 2º, 3º e 6º."
    },
    {
        "id": "SEDUC-EE-PLAN-005",
        "numero": 5,
        "subtopico": "Participação da família e estudante",
        "dificuldade": "media",
        "pergunta": "Durante a elaboração dos instrumentos individualizados, uma equipe escolar decidiu ouvir a família apenas ao final, quando os documentos já estivessem prontos. Considerando a política vigente, a conduta mais adequada seria",
        "alternativas": [
            "manter a decisão, pois a família não participa de decisões pedagógicas.",
            "ouvir apenas o estudante, porque sua opinião substitui a participação familiar.",
            "solicitar que a família apenas assine o documento elaborado pela escola.",
            "restringir a participação familiar aos casos em que houver laudo médico.",
            "envolver estudante e familiares durante o estudo de caso e o acompanhamento da implementação dos planos."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu que a participação não é mera assinatura final. Família e estudante contribuem para histórico, necessidades atuais, acompanhamento e implementação das estratégias.",
        "feedbackErro": "A norma garante envolvimento do estudante e dos familiares durante o estudo de caso, e não apenas uma ciência formal no final. Essa participação ajuda a construir estratégias mais coerentes com o cotidiano e as necessidades do estudante.",
        "analiseAlternativas": [
            "Incorreta. A família integra o processo colaborativo previsto na política.",
            "Incorreta. A participação do estudante é relevante, mas não elimina a dos familiares.",
            "Incorreta. Assinatura sem participação prévia não corresponde ao envolvimento previsto na norma.",
            "Incorreta. Laudo não condiciona a participação familiar.",
            "Correta. A participação ocorre ao longo do estudo de caso e acompanha a implementação."
        ],
        "dicaBanca": "Se a alternativa reduzir participação a ‘ser informado’ ou ‘assinar’, desconfie: participação envolve contribuição real no processo.",
        "pegadinha": "Gestão democrática não se resume a comunicação unilateral da escola para a família.",
        "memorizar2026": "Família e estudante participam da construção e do acompanhamento, não só da formalização.",
        "fonte": "Decreto nº 12.686/2025, art. 11, § 3º; art. 3º."
    },
    {
        "id": "SEDUC-EE-PLAN-006",
        "numero": 6,
        "subtopico": "Articulação intersetorial",
        "dificuldade": "media",
        "pergunta": "No estudo de caso, a escola identifica que a permanência de um estudante depende também de ações articuladas com assistência social e saúde. Nesse caso, a regulamentação permite",
        "alternativas": [
            "transferir à rede de saúde a condução das ações diretamente relacionadas à condição clínica, mantendo a escola responsável apenas pelo currículo.",
            "estabelecer diálogo com a rede de proteção social sem transferir a responsabilidade educacional da escola.",
            "suspender o planejamento escolar até a conclusão de avaliação clínica.",
            "substituir o PAEE e o PEI por relatório intersetorial.",
            "condicionar a oferta do AEE ao parecer favorável da equipe de saúde."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a articulação intersetorial: a escola pode dialogar com saúde, assistência social e proteção à criança e ao adolescente sem terceirizar sua responsabilidade pedagógica.",
        "feedbackErro": "A articulação com a rede de proteção é prevista quando necessária, mas não transforma profissionais externos em responsáveis pelo planejamento escolar nem permite condicionar direitos educacionais a parecer clínico.",
        "analiseAlternativas": [
            "Incorreta. A articulação não transfere a responsabilidade pedagógica da escola.",
            "Correta. O diálogo intersetorial complementa o planejamento e a atenção integral.",
            "Incorreta. A escola não deve paralisar sua ação pedagógica aguardando diagnóstico.",
            "Incorreta. PAEE e PEI continuam sendo instrumentos pedagógicos próprios.",
            "Incorreta. AEE não pode ser condicionado a documento ou parecer de saúde."
        ],
        "dicaBanca": "FGV costuma opor ‘articulação’ a ‘transferência de responsabilidade’. Articular é trabalhar em rede, não delegar o ensino.",
        "pegadinha": "Intersetorialidade não medicaliza a educação.",
        "memorizar2026": "Rede de proteção apoia; escola continua responsável por ensinar e planejar.",
        "fonte": "Decreto nº 12.686/2025, art. 11, § 4º; arts. 2º e 6º."
    },
    {
        "id": "SEDUC-EE-PLAN-007",
        "numero": 7,
        "subtopico": "Laudo e planejamento",
        "dificuldade": "alta",
        "pergunta": "Os responsáveis por um estudante solicitaram AEE, mas a direção informou que o estudo de caso e o planejamento individualizado somente começariam após a apresentação de laudo médico. A orientação da direção é",
        "alternativas": [
            "correta, porque o laudo formaliza a elegibilidade para o AEE e deve anteceder qualquer planejamento individualizado.",
            "correta para deficiência intelectual e TEA, em razão da necessidade de confirmação diagnóstica para definição dos apoios, quando houver justificativa pedagógica registrada e acompanhamento dos resultados pela equipe escolar.",
            "correta quando a escola não possui equipe multiprofissional e precisa de avaliação externa para iniciar o estudo de caso.",
            "inadequada, pois matrícula, escolarização e AEE não podem ser condicionados a laudo, e o planejamento deve apoiar-se em critérios pedagógicos.",
            "inadequada somente se o estudante já estiver matriculado no AEE e tiver plano anterior que possa ser atualizado."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou a atualização central de 2025/2026: o planejamento educacional e o AEE não dependem da apresentação de laudo. O estudo de caso é o instrumento pedagógico que orienta a identificação de barreiras e apoios.",
        "feedbackErro": "A exigência de laudo como condição é vedada. Documento de saúde pode existir e subsidiar o processo, mas não pode bloquear matrícula, escolarização, AEE ou o início do planejamento pedagógico.",
        "analiseAlternativas": [
            "Incorreta. A norma veda tornar laudo requisito para o AEE.",
            "Incorreta. A vedação não se limita a categorias específicas.",
            "Incorreta. A ausência de equipe multiprofissional não cria obrigação de laudo.",
            "Correta. O planejamento é pedagógico e o laudo não é condição de acesso.",
            "Incorreta. A vedação vale antes e durante a organização do atendimento."
        ],
        "dicaBanca": "Se aparecer ‘somente após laudo’, ‘depende de diagnóstico’ ou ‘condicionado a relatório médico’, marque como forte indício de erro.",
        "pegadinha": "‘Pode subsidiar’ ≠ ‘é requisito’.",
        "memorizar2026": "Laudo pode ajudar, mas não pode abrir ou fechar a porta do direito educacional.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §§ 6º e 7º; Portaria MEC nº 421/2026, art. 7º, § 4º.",
        "atualizacao2026": "A Portaria MEC nº 421/2026 reforçou expressamente a vedação de condicionar matrícula, escolarização e AEE a documento de saúde."
    },
    {
        "id": "SEDUC-EE-PLAN-008",
        "numero": 8,
        "subtopico": "PAEE",
        "dificuldade": "media",
        "pergunta": "Nos termos da Portaria MEC nº 421/2026, o PAEE deve registrar o estudo de caso e contemplar, entre outros elementos,",
        "alternativas": [
            "materiais e recursos para eliminar barreiras, necessidade de tecnologia assistiva/CAA, avaliação de apoios e demandas de formação ou articulação com a rede de proteção.",
            "metas curriculares, frequência, notas e estratégias de recuperação definidas pelo professor regente para cada bimestre.",
            "diagnóstico, CID, prognóstico clínico e recomendações terapêuticas relacionadas à participação escolar.",
            "cronograma de frequência na SRM, registros de presença e lista de atividades realizadas durante o atendimento.",
            "adaptações arquitetônicas e de mobiliário existentes, sem necessidade de registrar barreiras pedagógicas ou comunicacionais."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou os componentes mínimos do PAEE previstos na Portaria 421/2026. O plano registra o estudo de caso e organiza recursos, tecnologia assistiva/CAA, apoios e demandas de formação ou articulação em rede.",
        "feedbackErro": "O PAEE não é relatório clínico nem simples agenda de AEE. Seu conteúdo mínimo está ligado às barreiras do contexto educacional, aos recursos necessários, à avaliação de apoios e às demandas da escola para implementar a inclusão.",
        "analiseAlternativas": [
            "Correta. Resume os quatro incisos do art. 10 da Portaria MEC nº 421/2026.",
            "Incorreta. Metas da classe podem dialogar com o planejamento, mas não constituem sozinhas o conteúdo mínimo do PAEE.",
            "Incorreta. Diagnóstico e CID não definem o PAEE.",
            "Incorreta. O PAEE é mais amplo que o horário de atendimento.",
            "Incorreta. Barreiras arquitetônicas são apenas uma dimensão entre várias possíveis."
        ],
        "dicaBanca": "Para PAEE, pense em ‘barreiras + recursos + apoios + articulação’.",
        "pegadinha": "FGV pode tentar transformar o PAEE em prontuário clínico ou agenda da SRM.",
        "memorizar2026": "PAEE registra o estudo de caso e organiza meios para eliminar/minimizar barreiras.",
        "fonte": "Portaria MEC nº 421/2026, art. 10."
    },
    {
        "id": "SEDUC-EE-PLAN-009",
        "numero": 9,
        "subtopico": "PAEE e PEI",
        "dificuldade": "alta",
        "pergunta": "Uma rede de ensino pretende criar um único documento para reunir as finalidades do PAEE e do PEI. De acordo com a Portaria MEC nº 421/2026, essa decisão",
        "alternativas": [
            "é vedado porque PAEE e PEI possuem finalidades distintas e, por segurança pedagógica, devem permanecer em documentos separados.",
            "é permitida apenas nas instituições federais de ensino superior.",
            "é permitida somente mediante autorização individual do Ministério da Educação.",
            "é permitida apenas quando não houver professor de AEE.",
            "pode ser adotado documento único, desde que contemple as finalidades e os critérios mínimos de PAEE e PEI."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou uma regra nova e bastante cobrável: a rede pode adotar documento único, desde que preserve as finalidades e os critérios mínimos dos dois instrumentos.",
        "feedbackErro": "A Portaria 421/2026 permite documento único. O ponto central é que a simplificação administrativa não pode eliminar conteúdos ou finalidades essenciais de PAEE e PEI.",
        "analiseAlternativas": [
            "Incorreta. A Portaria autoriza expressamente documento único.",
            "Incorreta. A possibilidade não se restringe ao ensino superior federal.",
            "Incorreta. A norma não exige autorização individual do MEC para essa opção.",
            "Incorreta. A existência de professor do AEE não impede a adoção do documento único.",
            "Correta. É exatamente a condição prevista no art. 7º, § 2º."
        ],
        "dicaBanca": "Questão de literalidade: ‘podem adotar documento único’ + ‘desde que observados os critérios mínimos’.",
        "pegadinha": "Documento único não significa apagar a diferença de finalidade entre PAEE e PEI.",
        "memorizar2026": "Pode unir o formulário; não pode perder o conteúdo.",
        "fonte": "Portaria MEC nº 421/2026, art. 7º, § 2º.",
        "atualizacao2026": "Regra expressa da Portaria MEC nº 421/2026."
    },
    {
        "id": "SEDUC-EE-PLAN-010",
        "numero": 10,
        "subtopico": "PEI",
        "dificuldade": "media",
        "pergunta": "Na organização atual, o Plano Educacional Individualizado (PEI) é compreendido, em síntese, como",
        "alternativas": [
            "relatório de saúde que define a elegibilidade do estudante para a Educação Especial.",
            "plano voltado às atividades da Sala de Recursos Multifuncionais, com reflexos na classe comum apenas quando previstos pelo professor do AEE.",
            "instrumento de planejamento pedagógico e acessibilização curricular articulado à classe comum e aos apoios definidos no estudo de caso.",
            "documento destinado apenas ao registro de frequência no AEE.",
            "substituto do currículo da classe comum."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou a função pedagógica do PEI. Ele organiza a acessibilização curricular e articula atividades, medidas de acessibilidade, acompanhamento e devolutivas, sem substituir o currículo comum.",
        "feedbackErro": "O PEI não é laudo, diário de frequência ou currículo paralelo. Ele orienta a participação e a aprendizagem do estudante no currículo, com medidas e estratégias definidas a partir do estudo de caso.",
        "analiseAlternativas": [
            "Incorreta. PEI é documento pedagógico, não relatório de saúde.",
            "Incorreta. O PEI articula AEE e classe comum; não fica restrito à SRM.",
            "Correta. Essa formulação corresponde ao art. 11 da Portaria 421/2026 e à orientação atual do Inep.",
            "Incorreta. Frequência não expressa a finalidade do PEI.",
            "Incorreta. O estudante continua vinculado ao currículo comum, com acessibilização e apoios."
        ],
        "dicaBanca": "PEI = acessibilização curricular + articulação + acompanhamento.",
        "pegadinha": "Individualizar não é criar um currículo segregado.",
        "memorizar2026": "O PEI aproxima o currículo das necessidades do estudante; não afasta o estudante do currículo.",
        "fonte": "Portaria MEC nº 421/2026, art. 11; orientações do Inep/Censo Escolar 2026."
    },
    {
        "id": "SEDUC-EE-PLAN-011",
        "numero": 11,
        "subtopico": "Responsabilidades no planejamento",
        "dificuldade": "alta",
        "pergunta": "Segundo as orientações atuais do Inep para o Censo Escolar, o PEI deve ser elaborado",
        "alternativas": [
            "pelo professor da sala de aula comum/regular, com suporte do professor do AEE e da equipe escolar.",
            "exclusivamente pelo professor do AEE, sem intervenção do professor regente.",
            "pelo profissional de apoio escolar, que acompanha diretamente o estudante.",
            "pela família, com homologação posterior da escola.",
            "por profissional de saúde, quando houver diagnóstico de deficiência."
        ],
        "correta": 0,
        "feedbackAcerto": "Você distinguiu corretamente os papéis. O professor da classe comum assume a elaboração do PEI com suporte do AEE e da equipe escolar, reforçando que a responsabilidade pedagógica permanece na escolarização comum.",
        "feedbackErro": "A orientação atual do Inep atribui a elaboração do PEI ao professor da sala comum/regular, com suporte do professor do AEE e da equipe. Isso impede a lógica de ‘entregar’ o planejamento do estudante exclusivamente ao especialista.",
        "analiseAlternativas": [
            "Correta. É a orientação expressa nas perguntas frequentes do Inep atualizadas em 2026.",
            "Incorreta. O professor do AEE oferece suporte e articulação, mas não monopoliza o PEI.",
            "Incorreta. Profissional de apoio não exerce atribuição docente.",
            "Incorreta. A família participa e fornece informações, mas não substitui a elaboração pedagógica escolar.",
            "Incorreta. Profissional de saúde pode subsidiar informações, não elaborar o PEI como responsável pedagógico."
        ],
        "dicaBanca": "Se a alternativa ‘retira’ o estudante do professor regente e transfere tudo ao AEE, desconfie.",
        "pegadinha": "Especialização não elimina a responsabilidade do professor da classe comum.",
        "memorizar2026": "PEI: professor da classe comum + suporte do AEE + equipe escolar.",
        "fonte": "Inep, Perguntas Frequentes do Censo Escolar — Educação Especial, atualização 2026; Portaria MEC nº 421/2026."
    },
    {
        "id": "SEDUC-EE-PLAN-012",
        "numero": 12,
        "subtopico": "PPP",
        "dificuldade": "media",
        "pergunta": "A institucionalização do PAEE e do PEI no estabelecimento de ensino deve",
        "alternativas": [
            "ficar restrita aos arquivos pessoais do professor do AEE.",
            "ser prevista apenas no regimento interno da Sala de Recursos Multifuncionais.",
            "ocorrer somente quando houver estudante com laudo médico.",
            "ser dispensada se a escola utilizar documento único.",
            "compor o projeto político-pedagógico da instituição."
        ],
        "correta": 4,
        "feedbackAcerto": "Você relacionou corretamente os instrumentos individualizados ao planejamento institucional. PAEE e PEI não devem funcionar como documentos isolados: sua institucionalização integra o PPP.",
        "feedbackErro": "A legislação atual vincula a institucionalização de PAEE e PEI ao projeto político-pedagógico. Isso reforça que inclusão é responsabilidade da escola como organização, não apenas de um profissional ou serviço.",
        "analiseAlternativas": [
            "Incorreta. Documentos isolados do planejamento institucional fragilizam a articulação.",
            "Incorreta. A institucionalização ultrapassa a SRM e alcança a organização escolar.",
            "Incorreta. Laudo não condiciona a elaboração ou institucionalização pedagógica.",
            "Incorreta. Mesmo documento único deve preservar finalidades e integração institucional.",
            "Correta. O Decreto prevê expressamente a composição do PPP."
        ],
        "dicaBanca": "FGV gosta de cobrar PPP como espaço de institucionalização do AEE e das práticas inclusivas.",
        "pegadinha": "Plano individual não significa responsabilidade individual do especialista.",
        "memorizar2026": "PAEE/PEI são individualizados; a política que os sustenta é institucional.",
        "fonte": "Decreto nº 12.686/2025, art. 12, § 1º, redação do Decreto nº 12.773/2025."
    },
    {
        "id": "SEDUC-EE-PLAN-013",
        "numero": 13,
        "subtopico": "PAEE e PEI",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. Orientar o trabalho desenvolvido na sala de aula comum.",
            "II. Orientar o trabalho no âmbito do AEE.",
            "III. Orientar atividades colaborativas no estabelecimento e ações de articulação intersetorial."
        ],
        "pergunta": "Está correto o que se afirma em",
        "alternativas": [
            "I, apenas.",
            "I, II e III.",
            "II, apenas.",
            "I e III, apenas.",
            "II e III, apenas."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a amplitude dos instrumentos. PAEE e PEI orientam sala comum, AEE, colaboração escolar e articulação intersetorial.",
        "feedbackErro": "A redação atual do Decreto é expressa: os planos não estão confinados à sala de recursos. Eles conectam o trabalho da classe comum, o AEE, as atividades colaborativas e a rede intersetorial.",
        "analiseAlternativas": [
            "Incorreta. II e III também são finalidades previstas.",
            "Correta. Os três itens reproduzem a finalidade legal dos instrumentos.",
            "Incorreta. I e III também estão previstos.",
            "Incorreta. O trabalho no AEE também deve ser orientado.",
            "Incorreta. A sala comum também integra expressamente a finalidade dos planos."
        ],
        "dicaBanca": "Quando a questão disser que PAEE/PEI ‘servem apenas ao AEE’, lembre do art. 12, § 2º.",
        "pegadinha": "Os planos atravessam espaços e profissionais; não são propriedade da SRM.",
        "memorizar2026": "Sala comum + AEE + colaboração + intersetorialidade.",
        "fonte": "Decreto nº 12.686/2025, art. 12, § 2º, redação do Decreto nº 12.773/2025."
    },
    {
        "id": "SEDUC-EE-PLAN-014",
        "numero": 14,
        "subtopico": "Classe comum e AEE",
        "dificuldade": "alta",
        "pergunta": "Um professor regente informa à família que não adaptará suas estratégias porque ‘o aluno já tem professor de AEE para cuidar dessas questões’. À luz da perspectiva inclusiva, essa posição é",
        "alternativas": [
            "adequada, porque o professor do AEE assume o planejamento das adaptações e o regente executa apenas o currículo comum, desde que o estudo de caso indique a medida e a família participe do acompanhamento.",
            "adequada se o AEE ocorrer no contraturno e houver comunicação periódica entre os dois professores.",
            "adequada para deficiência intelectual quando o PEI atribuir ao AEE objetivos individualizados de aprendizagem.",
            "inadequada, pois o AEE complementa o trabalho pedagógico e não retira da classe comum a responsabilidade pelo currículo e pela escolarização.",
            "inadequada apenas quando o PEI não definir claramente a divisão de responsabilidades entre professor regente e AEE."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu a articulação correta entre classe comum e AEE. O AEE apoia, complementa/suplementa e organiza recursos, mas não substitui o trabalho pedagógico do professor regente.",
        "feedbackErro": "A posição do professor está errada porque fragmenta responsabilidades. O planejamento inclusivo é colaborativo e o estudante continua pertencendo à classe comum e ao currículo da turma.",
        "analiseAlternativas": [
            "Incorreta. AEE não assume integralmente a docência da classe comum.",
            "Incorreta. O horário do AEE não altera a responsabilidade do professor regente.",
            "Incorreta. A condição do estudante não transfere a responsabilidade curricular.",
            "Correta. AEE e classe comum devem atuar articuladamente, sem substituição.",
            "Incorreta. O problema é conceitual e não depende da data de revisão do PEI."
        ],
        "dicaBanca": "Pergunte: ‘a alternativa transforma o AEE em aula particular substitutiva?’ Se sim, está fora da lógica inclusiva.",
        "pegadinha": "AEE não é lugar para ‘entregar o aluno’.",
        "memorizar2026": "Professor regente ensina; AEE articula apoios e acessibilidade.",
        "fonte": "Decreto nº 12.686/2025, arts. 5º, 8º e 12; Portaria MEC nº 421/2026, arts. 4º e 11."
    },
    {
        "id": "SEDUC-EE-PLAN-015",
        "numero": 15,
        "subtopico": "Currículo e acessibilidade",
        "dificuldade": "media",
        "pergunta": "Ao elaborar o planejamento de uma estudante com baixa visão, a equipe propõe ampliar fontes, ajustar contraste, disponibilizar arquivo digital acessível e manter os mesmos objetivos curriculares, com outras formas de acesso e resposta. A proposta exemplifica",
        "alternativas": [
            "segregação curricular, porque cria um percurso diferenciado e desvinculado da referência comum.",
            "substituição do currículo comum pelo AEE, pois os recursos passam a organizar os objetivos de aprendizagem.",
            "acessibilização curricular, porque ajusta meios de acesso e resposta sem reduzir automaticamente os objetivos.",
            "dispensa de avaliação, já que formatos acessíveis tornariam desnecessário verificar a aprendizagem.",
            "redução curricular, pois a baixa visão exigiria diminuição prévia da quantidade e complexidade dos conteúdos."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou uma prática de acessibilização: os objetivos podem ser mantidos enquanto os meios de acesso, participação e demonstração da aprendizagem são ajustados.",
        "feedbackErro": "A inclusão não exige currículo paralelo nem redução automática. Recursos, formatos e estratégias podem ser modificados para remover barreiras e assegurar acesso ao currículo comum.",
        "analiseAlternativas": [
            "Incorreta. A proposta aproxima a estudante do currículo da turma, não a separa.",
            "Incorreta. O AEE apoia a acessibilidade; não substitui o currículo comum.",
            "Correta. Mudam-se meios e recursos para garantir acesso e participação.",
            "Incorreta. Avaliação continua necessária e também deve ser acessível.",
            "Incorreta. Deficiência não determina redução automática dos objetivos."
        ],
        "dicaBanca": "FGV frequentemente usa ‘atividade mais fácil’ como distrator. A pergunta certa é: a adaptação remove barreira ou reduz expectativa sem necessidade?",
        "pegadinha": "Acessibilizar não é simplificar automaticamente.",
        "memorizar2026": "Primeiro remova barreiras; depois avalie necessidades individualizadas com base em evidências.",
        "fonte": "Decreto nº 12.686/2025, arts. 3º, 4º e 11; Portaria MEC nº 421/2026, art. 11."
    },
    {
        "id": "SEDUC-EE-PLAN-016",
        "numero": 16,
        "subtopico": "Recursos de acessibilidade",
        "dificuldade": "alta",
        "pergunta": "Os recursos de acessibilidade considerados no estudo de caso e no planejamento educacional",
        "alternativas": [
            "restringem-se às condições arquitetônicas e de mobilidade, pois materiais e comunicação pertencem ao planejamento pedagógico comum.",
            "dependem de indicação técnica ou clínica quando envolvem tecnologia assistiva, comunicação ou adequações posturais.",
            "devem ser concentrados no AEE, com empréstimo à classe comum apenas quando o professor especializado considerar necessário.",
            "correspondem principalmente a tecnologias digitais e softwares especializados, enquanto adaptações físicas são tratadas fora do planejamento educacional.",
            "podem envolver tecnologias, serviços, estratégias e adaptações voltadas à eliminação de barreiras em diferentes dimensões da vida escolar."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu o conceito amplo de acessibilidade educacional. O planejamento pode envolver recursos físicos, comunicacionais, tecnológicos, pedagógicos e organizacionais conforme as barreiras identificadas.",
        "feedbackErro": "Acessibilidade não se limita à arquitetura nem à tecnologia digital. O Decreto usa conceito abrangente, voltado a eliminar barreiras em diferentes dimensões da experiência escolar.",
        "analiseAlternativas": [
            "Incorreta. Barreiras arquitetônicas são apenas parte do problema.",
            "Incorreta. Recursos pedagógicos de acessibilidade não dependem necessariamente de prescrição clínica.",
            "Incorreta. Acessibilidade deve acompanhar a participação do estudante em toda a escola.",
            "Incorreta. Tecnologia digital é uma possibilidade entre diversas estratégias e serviços.",
            "Correta. Essa formulação corresponde ao art. 11, § 5º."
        ],
        "dicaBanca": "Quando a banca restringir acessibilidade a ‘rampa’ ou ‘computador’, procure uma opção mais ampla.",
        "pegadinha": "Acessibilidade é multidimensional.",
        "memorizar2026": "Materiais + ambientes + transporte + mobiliário + comunicação + informação + demais dimensões da vida escolar.",
        "fonte": "Decreto nº 12.686/2025, art. 11, § 5º."
    },
    {
        "id": "SEDUC-EE-PLAN-017",
        "numero": 17,
        "subtopico": "Avaliação inclusiva",
        "dificuldade": "media",
        "pergunta": "Em uma avaliação de Ciências, um estudante utiliza comunicação aumentativa e alternativa. Para verificar a mesma habilidade prevista para a turma, o professor permite que ele responda por seu sistema de comunicação. Essa medida é compatível com",
        "alternativas": [
            "dispensa da avaliação formal, porque o sistema alternativo substituiria o instrumento escolar.",
            "redução curricular, porque a comunicação alternativa indicaria necessidade de objetivos menos complexos.",
            "acessibilidade avaliativa, pois muda o meio de resposta e preserva a habilidade que se pretende verificar.",
            "substituição da avaliação da classe comum por avaliação conduzida pelo professor do AEE.",
            "tratamento privilegiado, porque permite forma de resposta diferente da utilizada pelos demais estudantes."
        ],
        "correta": 2,
        "feedbackAcerto": "Você percebeu a diferença entre objetivo avaliado e modo de resposta. A acessibilidade avaliativa pode modificar o meio pelo qual o estudante demonstra aprendizagem, preservando a habilidade que se pretende verificar.",
        "feedbackErro": "A medida não elimina a avaliação nem reduz automaticamente o conteúdo. Ela remove uma barreira de comunicação para que a avaliação meça conhecimento, e não a impossibilidade de usar um formato inadequado.",
        "analiseAlternativas": [
            "Incorreta. O estudante continua sendo avaliado.",
            "Incorreta. A forma de resposta mudou; o conteúdo não foi necessariamente reduzido.",
            "Correta. É exemplo de medida de acessibilidade avaliativa.",
            "Incorreta. A avaliação curricular permanece responsabilidade da escolarização comum.",
            "Incorreta. Equidade admite condições diferenciadas para garantir oportunidade real de demonstrar aprendizagem."
        ],
        "dicaBanca": "FGV pode confundir ‘adaptação da avaliação’ com ‘facilitação’. Veja se o objetivo cognitivo foi mantido.",
        "pegadinha": "Acessível não é sinônimo de mais fácil.",
        "memorizar2026": "Avaliar a aprendizagem, não a barreira.",
        "fonte": "Portaria MEC nº 421/2026, art. 11, II; Decreto nº 12.686/2025, art. 4º."
    },
    {
        "id": "SEDUC-EE-PLAN-018",
        "numero": 18,
        "subtopico": "Acompanhamento e replanejamento",
        "dificuldade": "media",
        "pergunta": "Após dois meses, os registros mostram que uma estratégia prevista no PEI não favoreceu a participação do estudante. A conduta mais adequada é",
        "alternativas": [
            "manter a estratégia até a revisão anual do PEI para preservar estabilidade e comparabilidade dos registros de acompanhamento.",
            "reavaliar evidências, ajustar a estratégia e registrar o replanejamento em coerência com a avaliação contínua.",
            "encerrar o PEI e manter apenas o PAEE.",
            "solicitar novo laudo antes de alterar qualquer medida pedagógica.",
            "retirar o estudante das atividades em que a estratégia não funcionou."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou a lógica de avaliação contínua. O plano deve orientar a prática, e os registros de desenvolvimento servem justamente para verificar se as medidas funcionam e quando precisam ser ajustadas.",
        "feedbackErro": "Planejamento individualizado não é contrato imutável. A avaliação contínua permite replanejar estratégias, preservando o foco em participação, desenvolvimento e aprendizagem.",
        "analiseAlternativas": [
            "Incorreta. Manter uma estratégia ineficaz por formalismo contraria a lógica de acompanhamento.",
            "Correta. Replanejamento baseado em evidências é coerente com o caráter contínuo dos instrumentos.",
            "Incorreta. PAEE e PEI têm finalidades articuladas; não se descarta um automaticamente.",
            "Incorreta. Alteração pedagógica não depende de novo laudo.",
            "Incorreta. A primeira resposta deve ser remover barreiras e ajustar o planejamento, não excluir o estudante."
        ],
        "dicaBanca": "Se o caso mostra que uma intervenção não funcionou, a resposta FGV tende a valorizar monitoramento e ajuste, não rigidez.",
        "pegadinha": "Plano bom é usado para tomar decisão; não para ficar arquivado.",
        "memorizar2026": "Registrar → acompanhar → avaliar → replanejar.",
        "fonte": "Portaria MEC nº 421/2026, arts. 7º e 11."
    },
    {
        "id": "SEDUC-EE-PLAN-019",
        "numero": 19,
        "subtopico": "PEI — conteúdo mínimo",
        "dificuldade": "alta",
        "pergunta": "De acordo com a Portaria MEC nº 421/2026, o PEI deve conter, no mínimo,",
        "alternativas": [
            "medidas de acessibilidade curricular, didático-pedagógica e avaliativa, articulação com o AEE, estratégias de monitoramento e devolutivas às famílias.",
            "diagnóstico funcional, dados clínicos relevantes, objetivos anuais e registro das intervenções terapêuticas que repercutem na escolarização, quando houver justificativa pedagógica registrada e acompanhamento dos resultados pela equipe escolar.",
            "objetivos anuais, frequência, resultados de avaliações e adaptações definidas exclusivamente pelo professor regente.",
            "cronograma do AEE, relação de profissionais que acompanham o estudante e síntese das orientações intersetoriais recebidas pela escola.",
            "adaptações avaliativas e metas de autonomia, ficando o currículo e as estratégias da classe comum registrados apenas no PAEE."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente os quatro eixos mínimos do PEI previstos no art. 11 da Portaria 421/2026.",
        "feedbackErro": "O PEI é plano de acessibilização curricular. Seu conteúdo mínimo articula atividades e profissionais, medidas de acessibilidade, monitoramento e devolutivas à família; não é prontuário médico.",
        "analiseAlternativas": [
            "Correta. A alternativa sintetiza os incisos I a IV do art. 11.",
            "Incorreta. Diagnóstico e prescrição não são conteúdo mínimo do PEI.",
            "Incorreta. Frequência e notas são insuficientes para caracterizar o plano.",
            "Incorreta. O PEI não se reduz à agenda do AEE nem a profissionais externos.",
            "Incorreta. Acessibilização curricular é justamente parte central do PEI."
        ],
        "dicaBanca": "Questão de literalidade muito provável: memorize os quatro blocos do art. 11.",
        "pegadinha": "Não confunda conteúdo mínimo do PAEE (art. 10) com conteúdo mínimo do PEI (art. 11).",
        "memorizar2026": "PEI: articulação das atividades + acessibilidade curricular/avaliativa + monitoramento + devolutivas à família.",
        "fonte": "Portaria MEC nº 421/2026, art. 11.",
        "atualizacao2026": "Conteúdo mínimo definido expressamente pela Portaria MEC nº 421/2026."
    },
    {
        "id": "SEDUC-EE-PLAN-020",
        "numero": 20,
        "subtopico": "Revisão anual",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. PAEE e PEI devem ser revisados anualmente.",
            "II. A revisão anual deve compatibilizar os documentos com a avaliação contínua do estudante.",
            "III. A existência de revisão anual impede ajustes pedagógicos ao longo do ano."
        ],
        "pergunta": "Está correto o que se afirma em",
        "alternativas": [
            "I, apenas.",
            "III, apenas.",
            "I e III, apenas.",
            "I e II, apenas.",
            "I, II e III."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou que a revisão anual não torna o planejamento rígido. I e II são expressamente previstas; III está errada porque os documentos têm atualização contínua e podem demandar ajustes durante o percurso.",
        "feedbackErro": "A combinação correta é I e II. A revisão anual é um marco formal de compatibilização com a avaliação contínua, não uma proibição de replanejar antes dela.",
        "analiseAlternativas": [
            "Incorreta. II também é verdadeira.",
            "Incorreta. III é falsa.",
            "Incorreta. III é falsa e II é verdadeira.",
            "Correta. I e II reproduzem o art. 7º, § 3º da Portaria 421/2026.",
            "Incorreta. III contradiz a ideia de atualização contínua."
        ],
        "dicaBanca": "FGV pode transformar ‘revisão anual’ em ‘só pode mudar uma vez por ano’. Isso é falso.",
        "pegadinha": "Revisão anual é obrigatória; ajustes pedagógicos podem ocorrer sempre que necessários.",
        "memorizar2026": "Atualização contínua + revisão anual.",
        "atualizacao2026": "A revisão anual de PAEE e PEI está expressa na Portaria MEC nº 421/2026.",
        "fonte": "Portaria MEC nº 421/2026, art. 7º, § 3º; Decreto nº 12.686/2025, art. 12."
    },
    {
        "id": "SEDUC-EE-PLAN-021",
        "numero": 21,
        "subtopico": "Profissional de apoio e planejamento",
        "dificuldade": "alta",
        "pergunta": "Em determinada escola, o profissional de apoio passou a definir sozinho os objetivos curriculares e as adaptações avaliativas de um estudante, alegando que é quem permanece mais tempo ao seu lado. Segundo a Portaria MEC nº 421/2026, essa atuação",
        "alternativas": [
            "é adequada, porque proximidade cotidiana transfere ao apoio a responsabilidade docente.",
            "é inadequada, pois o profissional de apoio atua segundo o planejamento pedagógico e não assume atribuições docentes.",
            "é adequada desde que a família concorde.",
            "é adequada quando o estudante utiliza tecnologia assistiva e o profissional de apoio domina o recurso empregado nas atividades curriculares.",
            "é inadequada somente se não houver registro no PAEE."
        ],
        "correta": 1,
        "feedbackAcerto": "Você diferenciou apoio escolar de docência. O profissional de apoio atua conforme PAEE/PEI e sob orientação da equipe pedagógica, mas não assume objetivos curriculares ou atribuições próprias do professor.",
        "feedbackErro": "A Portaria é explícita: o trabalho do profissional de apoio subordina-se ao planejamento pedagógico, e suas atribuições não se confundem com funções docentes.",
        "analiseAlternativas": [
            "Incorreta. Proximidade não altera a natureza da função.",
            "Correta. É a regra dos arts. 12 e 13 da Portaria 421/2026.",
            "Incorreta. Concordância familiar não transforma função de apoio em função docente.",
            "Incorreta. O uso de tecnologia assistiva não transfere responsabilidade curricular.",
            "Incorreta. A separação entre apoio e docência vale independentemente do registro específico."
        ],
        "dicaBanca": "Profissional de apoio ≠ professor particular.",
        "pegadinha": "O apoio pode participar da rotina, mas não assume atribuições docentes.",
        "memorizar2026": "Apoio atua em consonância com PAEE/PEI e sob orientação pedagógica.",
        "fonte": "Portaria MEC nº 421/2026, arts. 12 e 13."
    },
    {
        "id": "SEDUC-EE-PLAN-022",
        "numero": 22,
        "subtopico": "Tecnologia assistiva no planejamento",
        "dificuldade": "media",
        "pergunta": "Uma estudante necessita utilizar tablet com aplicativo de comunicação durante as atividades. No planejamento da escola, a utilização do dispositivo como tecnologia assistiva",
        "alternativas": [
            "pode ser autorizada por parecer pedagógico da instituição quando destinada à aprendizagem, comunicação ou socialização.",
            "depende obrigatoriamente de receita médica.",
            "é proibida durante avaliações por ser dispositivo digital portátil.",
            "somente pode ocorrer na Sala de Recursos Multifuncionais.",
            "depende de autorização formal da família e de registro no PEI quando o equipamento for de propriedade particular do estudante."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou corretamente a regra atual: o dispositivo digital portátil pode ser utilizado como tecnologia assistiva mediante parecer pedagógico da instituição.",
        "feedbackErro": "A legislação admite o uso pedagógico do dispositivo quando ele funciona como tecnologia assistiva. A decisão é educacional e não depende obrigatoriamente de prescrição médica.",
        "analiseAlternativas": [
            "Correta. É a hipótese prevista no art. 12, § 4º do Decreto.",
            "Incorreta. A norma exige parecer pedagógico, não receita médica obrigatória.",
            "Incorreta. Acessibilidade avaliativa pode inclusive exigir o recurso, conforme o planejamento.",
            "Incorreta. Tecnologia assistiva acompanha a participação do estudante nos diferentes espaços necessários.",
            "Incorreta. Não existe essa exigência geral de decisão judicial."
        ],
        "dicaBanca": "Quando o enunciado falar em celular/tablet, veja se ele está sendo usado como distração ou como recurso de acessibilidade.",
        "pegadinha": "‘Dispositivo digital’ não é automaticamente proibido quando exerce função assistiva.",
        "memorizar2026": "Tecnologia assistiva pode ser autorizada por parecer pedagógico.",
        "fonte": "Decreto nº 12.686/2025, art. 12, § 4º."
    },
    {
        "id": "SEDUC-EE-PLAN-023",
        "numero": 23,
        "subtopico": "Planejamento e trabalho colaborativo",
        "dificuldade": "alta",
        "pergunta": "Em uma escola, o professor do AEE prepara recursos acessíveis, mas nunca conversa com o professor regente; este, por sua vez, envia ao AEE atividades totalmente diferentes do currículo trabalhado em sala. O principal problema dessa organização é",
        "alternativas": [
            "a ausência de diagnóstico clínico atualizado.",
            "a inexistência de sala exclusiva para o AEE, quando a escola mantém recursos de acessibilidade distribuídos em outros ambientes.",
            "a falta de articulação entre AEE, classe comum e planejamento curricular, que fragmenta a escolarização.",
            "a impossibilidade de o professor do AEE produzir recursos pedagógicos.",
            "a participação excessiva do professor regente no processo."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu que inclusão exige articulação. Recursos do AEE devem dialogar com o currículo e com as barreiras reais da classe comum, evitando que o estudante viva dois percursos desconectados.",
        "feedbackErro": "O problema descrito não é clínico nem de espaço físico. É pedagógico: AEE e classe comum funcionam como ilhas, contrariando a finalidade de articulação prevista para os planos e para o próprio atendimento.",
        "analiseAlternativas": [
            "Incorreta. Diagnóstico não resolveria a falta de colaboração pedagógica.",
            "Incorreta. O AEE pode ocorrer em espaços organizados para esse fim; o ponto central não é a sala exclusiva.",
            "Correta. A falta de articulação fragmenta o currículo e reduz a efetividade dos apoios.",
            "Incorreta. Produzir recursos é uma das funções possíveis do AEE.",
            "Incorreta. A participação do professor regente é necessária, não excessiva."
        ],
        "dicaBanca": "Em casos FGV, procure a alternativa que preserva a unidade do percurso escolar do aluno.",
        "pegadinha": "AEE desconectado da sala comum vira atendimento paralelo.",
        "memorizar2026": "Apoio especializado precisa conversar com o que o estudante vive e aprende na classe comum.",
        "fonte": "Decreto nº 12.686/2025, arts. 6º e 12; Portaria MEC nº 421/2026, arts. 4º, 10 e 11."
    },
    {
        "id": "SEDUC-EE-PLAN-024",
        "numero": 24,
        "subtopico": "Síntese normativa",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. PAEE e PEI podem ser reunidos em documento único pela rede de ensino, desde que preservados os critérios mínimos.",
            "II. PAEE e PEI devem ser revisados anualmente de modo compatível com a avaliação contínua.",
            "III. A elaboração dos instrumentos depende da apresentação prévia de laudo médico."
        ],
        "pergunta": "Assinale a opção correta.",
        "alternativas": [
            "Apenas I é verdadeira.",
            "Apenas II é verdadeira.",
            "Apenas III é verdadeira.",
            "I e III são verdadeiras.",
            "I e II são verdadeiras."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reuniu três atualizações importantes: documento único é possível, revisão anual é obrigatória e laudo médico não pode ser exigido como condição.",
        "feedbackErro": "A alternativa correta combina I e II. A afirmativa III contraria expressamente a vedação de condicionar matrícula, escolarização e AEE a diagnóstico ou laudo.",
        "analiseAlternativas": [
            "Incorreta. II também é verdadeira.",
            "Incorreta. I também é verdadeira.",
            "Incorreta. III é falsa.",
            "Incorreta. III é falsa.",
            "Correta. I e II correspondem ao art. 7º, §§ 2º e 3º; III contraria o § 4º."
        ],
        "dicaBanca": "Uma única palavra pode decidir a questão: ‘depende’ de laudo torna III falsa.",
        "pegadinha": "Novo não significa complicado: memorize os três parágrafos centrais do art. 7º.",
        "memorizar2026": "Documento único: pode. Revisão anual: deve. Laudo como condição: não pode.",
        "atualizacao2026": "Conjunto de regras centrais da Portaria MEC nº 421/2026.",
        "fonte": "Portaria MEC nº 421/2026, art. 7º, §§ 2º a 4º."
    },
    {
        "id": "SEDUC-EE-PLAN-025",
        "numero": 25,
        "subtopico": "Caso integrado FGV",
        "dificuldade": "alta",
        "pergunta": "Uma escola recebe um estudante público da Educação Especial e organiza as seguintes ações: realiza estudo de caso com participação da família; identifica barreiras e potencialidades; elabora PAEE e PEI articulando AEE e classe comum; define recursos de acessibilidade; registra estratégias de acompanhamento; e decide rever os planos à luz da avaliação contínua. Entretanto, condiciona o início do AEE à entrega de laudo médico. Considerando a regulamentação vigente, a avaliação correta dessa conduta é",
        "alternativas": [
            "as ações são válidas se o laudo for usado apenas para segurança administrativa e não para definir sozinho os objetivos pedagógicos.",
            "apenas a participação da família está incorreta, pois o estudo de caso deve ser exclusivamente técnico.",
            "PAEE e PEI estão incorretos porque devem ser elaborados antes do estudo de caso.",
            "o planejamento está adequado em grande parte, mas é ilegal condicionar matrícula, escolarização ou AEE a laudo de saúde.",
            "a escola deveria substituir o PAEE e o PEI por um relatório clínico único."
        ],
        "correta": 3,
        "feedbackAcerto": "Você integrou corretamente o bloco inteiro. O estudo de caso, a articulação entre planos, acessibilidade, monitoramento e participação estão alinhados à política; a falha é transformar o laudo em requisito para o AEE.",
        "feedbackErro": "A única ruptura do caso está no condicionamento ao laudo. A legislação atual permite que documentos de saúde subsidiem o planejamento, mas impede que sejam usados como barreira de acesso ao direito educacional.",
        "analiseAlternativas": [
            "Incorreta. O laudo não é requisito para iniciar o AEE.",
            "Incorreta. A participação da família e do estudante é prevista no estudo de caso.",
            "Incorreta. PAEE e PEI derivam do estudo de caso, e não o antecedem.",
            "Correta. Todo o restante do fluxo está coerente, mas a exigência de laudo viola a norma.",
            "Incorreta. Relatório clínico não substitui instrumentos pedagógicos individualizados."
        ],
        "dicaBanca": "Nas questões-síntese da FGV, não rejeite todo o caso porque há um erro. Localize exatamente a ação incompatível com a norma.",
        "pegadinha": "Um caso pode trazer seis condutas corretas e uma expressão absoluta errada.",
        "memorizar2026": "Estudo de caso → PAEE/PEI → execução → acompanhamento/replanejamento; laudo pode subsidiar, nunca condicionar.",
        "fonte": "Decreto nº 12.686/2025, arts. 11 e 12; Portaria MEC nº 421/2026, arts. 7º, 10 e 11."
    }
];

    window.seducEducacaoEspecialPlanejamento2026 = banco;
})();
