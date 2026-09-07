/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 8: Atendimento Educacional Especializado para alunos com Deficiência Intelectual
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo e matriz FGV revisados em 05/09/2026.
========================================================== */

(function(){
    "use strict";
    const banco = [
    {
        "id": "SEDUC-EE-AEEDI-001",
        "numero": 1,
        "subtopico": "Deficiência Intelectual — compreensão contemporânea",
        "dificuldade": "alta",
        "pergunta": "Em uma reunião pedagógica, uma professora afirma que o baixo rendimento escolar, isoladamente, é suficiente para concluir que um estudante apresenta Deficiência Intelectual. A afirmação é",
        "alternativas": [
            "adequada, porque o desempenho acadêmico abaixo da média constitui o principal critério educacional para a identificação da deficiência, dispensando análise específica do funcionamento adaptativo quando a dificuldade é persistente.",
            "adequada quando as dificuldades persistem por dois anos letivos, ainda que não haja análise de outras dimensões do funcionamento do estudante.",
            "inadequada, pois a Deficiência Intelectual envolve limitações significativas no funcionamento intelectual e adaptativo, consideradas em contexto e no período do desenvolvimento.",
            "inadequada apenas quando o estudante apresenta bom desempenho em atividades práticas, já que estas afastam a hipótese de limitação intelectual.",
            "adequada se a equipe escolar registrar as dificuldades em relatório pedagógico e a família concordar com a classificação proposta."
        ],
        "correta": 2,
        "feedbackAcerto": "Você separou dificuldade escolar de Deficiência Intelectual. O desempenho acadêmico pode indicar necessidade de investigação e apoio, mas não autoriza, sozinho, uma conclusão diagnóstica ou pedagógica determinista.",
        "feedbackErro": "Baixo rendimento pode decorrer de múltiplas barreiras e condições. A compreensão contemporânea considera funcionamento intelectual, comportamento adaptativo, contexto, desenvolvimento, potencialidades e necessidades de apoio.",
        "analiseAlternativas": [
            "Incorreta. Desempenho escolar baixo não é critério único nem suficiente para definir Deficiência Intelectual.",
            "Incorreta. A duração da dificuldade não substitui a análise multidimensional do funcionamento e do contexto.",
            "Correta. A definição contemporânea considera funcionamento intelectual e adaptativo e evita inferências baseadas apenas em notas ou rendimento.",
            "Incorreta. Bom desempenho prático não exclui automaticamente a condição; perfis de habilidades podem ser heterogêneos.",
            "Incorreta. Registro escolar e concordância familiar não transformam uma inferência simplificada em identificação adequada."
        ],
        "dicaBanca": "A FGV costuma oferecer uma explicação aparentemente objetiva — nota, laudo ou desempenho — como se fosse suficiente. Procure a alternativa multidimensional.",
        "pegadinha": "Dificuldade de aprendizagem ≠ Deficiência Intelectual.",
        "memorizar2026": "DI: funcionamento intelectual + comportamento adaptativo + contexto + período do desenvolvimento; nunca apenas nota escolar.",
        "fonte": "AAIDD, 12ª ed.; Lei nº 13.146/2015; FGV Vitória 2024 — Educação Especial: Deficiência Intelectual."
    },
    {
        "id": "SEDUC-EE-AEEDI-002",
        "numero": 2,
        "subtopico": "Comportamento adaptativo",
        "dificuldade": "alta",
        "pergunta": "Ao planejar apoios para um estudante com Deficiência Intelectual, a equipe considera comportamento adaptativo. Nesse conceito, devem ser observadas, principalmente, habilidades",
        "alternativas": [
            "acadêmicas, motoras e sensoriais, pois o comportamento adaptativo se restringe ao desempenho observado em tarefas escolares formais.",
            "conceituais e acadêmicas, ficando as habilidades sociais e práticas sob responsabilidade exclusiva da família e dos serviços de saúde.",
            "práticas e de autocuidado, já que a dimensão conceitual não integra a avaliação do funcionamento adaptativo.",
            "sociais e emocionais, desde que avaliadas separadamente das exigências reais dos ambientes em que o estudante participa.",
            "conceituais, sociais e práticas, analisadas em relação às demandas da vida cotidiana e aos contextos de participação do estudante."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu os três domínios clássicos do comportamento adaptativo: conceitual, social e prático, sempre interpretados em contexto.",
        "feedbackErro": "O comportamento adaptativo não se reduz ao autocuidado, à nota escolar ou a um único ambiente. A análise precisa considerar como o estudante funciona em demandas reais e quais apoios favorecem sua participação.",
        "analiseAlternativas": [
            "Incorreta. O conceito é mais amplo que tarefas acadêmicas e não se limita a aspectos motores ou sensoriais.",
            "Incorreta. Habilidades sociais e práticas integram o comportamento adaptativo e também interessam ao planejamento educacional.",
            "Incorreta. A dimensão conceitual é parte do comportamento adaptativo, junto às dimensões social e prática.",
            "Incorreta. Habilidades sociais precisam ser interpretadas em contexto, e não isoladas das situações reais de participação.",
            "Correta. Conceitual, social e prática são as dimensões centrais do comportamento adaptativo."
        ],
        "dicaBanca": "Quando a banca pedir comportamento adaptativo, procure a tríade conceitual–social–prática.",
        "pegadinha": "Não transforme comportamento adaptativo em sinônimo de “atividades de vida diária”.",
        "memorizar2026": "Comportamento adaptativo = habilidades conceituais + sociais + práticas em contexto.",
        "fonte": "AAIDD, 12ª ed. (2021)."
    },
    {
        "id": "SEDUC-EE-AEEDI-003",
        "numero": 3,
        "subtopico": "Finalidade do AEE para DI",
        "dificuldade": "alta",
        "pergunta": "Uma escola pretende utilizar o AEE de um estudante com Deficiência Intelectual para refazer, de modo mais simples, as mesmas tarefas não concluídas na classe comum. À luz da regulamentação vigente, a proposta",
        "alternativas": [
            "é adequada se o atendimento ocorrer no contraturno e houver registro das atividades no PAEE.",
            "é inadequada, porque o AEE deve organizar recursos, estratégias e acessibilidade para complementar a escolarização, e não funcionar como reforço ou repetição da classe comum.",
            "é adequada quando o estudante apresenta atraso acadêmico, pois a prioridade do AEE passa a ser recuperar conteúdos curriculares não dominados, especialmente quando a classe comum não dispõe de tempo para retomadas individualizadas.",
            "é inadequada apenas quando as tarefas repetidas forem idênticas às da turma, sendo suficiente trocar o material para caracterizar o AEE.",
            "é adequada se o professor do AEE assumir a responsabilidade principal pela aprendizagem dos conteúdos que o estudante não acompanhou."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a função do AEE: complementar a escolarização da pessoa com deficiência por meio de recursos, estratégias, acessibilidade e apoios que ampliem participação e aprendizagem.",
        "feedbackErro": "O AEE não é reforço escolar nem espaço de repetição simplificada do currículo. Ele articula apoios e recursos para remover barreiras e favorecer o trabalho na classe comum.",
        "analiseAlternativas": [
            "Incorreta. Contraturno e registro não mudam a natureza pedagógica inadequada de simples reforço.",
            "Correta. O AEE é complementar para pessoas com deficiência e não substitui nem replica a escolarização comum.",
            "Incorreta. Atraso acadêmico não transforma o AEE em recuperação paralela de conteúdos.",
            "Incorreta. Apenas trocar o material não basta; a finalidade e a estratégia precisam responder às barreiras identificadas.",
            "Incorreta. A responsabilidade pela escolarização é compartilhada; o AEE apoia e complementa o trabalho da classe comum."
        ],
        "dicaBanca": "FGV gosta de aproximar “AEE” de “reforço”. Pergunte: a ação remove barreiras e amplia participação ou apenas repete conteúdo?",
        "pegadinha": "AEE ≠ reforço escolar.",
        "memorizar2026": "Para DI, AEE é complementar: recursos + estratégias + acessibilidade + articulação com a classe comum.",
        "fonte": "Decreto nº 12.686/2025, arts. 5º e 6º; Inep — FAQ AEE 2026; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-AEEDI-004",
        "numero": 4,
        "subtopico": "Objetivos do AEE — autonomia e participação",
        "dificuldade": "alta",
        "pergunta": "No AEE de um estudante com Deficiência Intelectual, a professora propõe situações de resolução de problemas, comunicação, organização da rotina e uso funcional de recursos, articuladas às atividades da turma. Essa atuação é coerente porque",
        "alternativas": [
            "o AEE deve priorizar habilidades funcionais e suspender temporariamente os objetivos acadêmicos até que o estudante demonstre independência suficiente.",
            "o desenvolvimento da autonomia deve ocorrer antes da participação em atividades coletivas, evitando que a interação social interfira na aprendizagem individual e permitindo que o estudante só retorne ao grupo após demonstrar maior independência.",
            "as atividades funcionais são próprias do AEE e, por isso, devem ser planejadas sem relação direta com o currículo ou com o professor da classe comum.",
            "o AEE pode desenvolver habilidades cognitivas, comunicacionais e de autonomia, desde que tais ações apoiem acesso, participação e aprendizagem no percurso escolar comum.",
            "a articulação com a turma é recomendável apenas quando o estudante já atingiu os mesmos resultados acadêmicos dos colegas sem apoio especializado."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu que autonomia não é um currículo paralelo: ela pode ser desenvolvida no AEE em conexão com participação, comunicação, resolução de problemas e acesso ao currículo comum.",
        "feedbackErro": "A autonomia é objetivo legítimo do AEE, mas não antecede nem substitui a escolarização. Ela deve ser construída em situações significativas, articuladas à participação do estudante na escola e em outros contextos.",
        "analiseAlternativas": [
            "Incorreta. Habilidades funcionais não exigem suspensão dos objetivos acadêmicos.",
            "Incorreta. Participação social e aprendizagem podem se fortalecer mutuamente; não há etapa obrigatória de isolamento prévio.",
            "Incorreta. O AEE deve articular-se à classe comum e às demandas reais do estudante.",
            "Correta. A regulamentação atual inclui desenvolvimento de habilidades e autonomia com finalidade de ampliar participação e aprendizagem.",
            "Incorreta. Apoio especializado não depende de o estudante primeiro alcançar desempenho sem apoio."
        ],
        "dicaBanca": "Quando a FGV falar em autonomia, verifique se ela aparece vinculada à participação e ao desenvolvimento — e não como pré-requisito para inclusão.",
        "pegadinha": "Autonomia não significa “aprender sozinho”.",
        "memorizar2026": "AEE desenvolve autonomia para participar melhor, não para substituir a participação.",
        "fonte": "Decreto nº 12.686/2025, art. 6º; Inep — FAQ AEE 2026; FGV Vitória 2024."
    },
    {
        "id": "SEDUC-EE-AEEDI-005",
        "numero": 5,
        "subtopico": "Estudo de caso — barreiras e potencialidades",
        "dificuldade": "alta",
        "pergunta": "Durante o estudo de caso de um estudante com Deficiência Intelectual, a equipe registra apenas dificuldades de atenção, memória e raciocínio. Para adequar o procedimento à política vigente, é necessário também",
        "alternativas": [
            "analisar o contexto escolar, as barreiras, as potencialidades, as demandas de apoio e os recursos de acessibilidade capazes de ampliar participação e aprendizagem.",
            "definir previamente um nível fixo de complexidade curricular para evitar propostas acima das capacidades estimadas do estudante.",
            "solicitar avaliação clínica antes de qualquer estratégia pedagógica, pois o estudo de caso depende da confirmação diagnóstica da deficiência e só depois desse documento a escola poderá definir apoios individualizados com segurança.",
            "concentrar a investigação nas limitações adaptativas, deixando interesses e estratégias já bem-sucedidas para a etapa posterior de avaliação.",
            "restringir a participação da família ao fornecimento de documentos, preservando a autonomia técnica da escola na definição do plano."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou a lógica atual do estudo de caso: observar o estudante em contexto, identificar barreiras e potencialidades e definir apoios e recursos.",
        "feedbackErro": "Um estudo de caso centrado apenas em déficits fica incompleto. A norma exige leitura contextual e orientada à remoção de barreiras, com participação do estudante e da família.",
        "analiseAlternativas": [
            "Correta. Resume as etapas atuais do estudo de caso previstas no Decreto nº 12.686/2025.",
            "Incorreta. O estudo de caso não deve antecipar um teto de aprendizagem com base em estimativas fixas.",
            "Incorreta. A oferta do AEE não depende de diagnóstico ou laudo de saúde.",
            "Incorreta. Potencialidades e estratégias que funcionam são elementos centrais, não acessórios.",
            "Incorreta. A participação da família e do estudante deve ocorrer ao longo do processo, e não apenas na entrega de documentos."
        ],
        "dicaBanca": "FGV costuma esconder a falha em um estudo de caso que parece detalhado, mas olha só para “déficits”. Procure barreiras + potencialidades + apoios.",
        "pegadinha": "Estudo de caso não é inventário de incapacidades.",
        "memorizar2026": "Estudo de caso: demandas/barreiras → contexto → potencialidades/apoios → estratégias/acessibilidade.",
        "fonte": "Decreto nº 12.686/2025, art. 11; Decreto nº 12.773/2025."
    },
    {
        "id": "SEDUC-EE-AEEDI-006",
        "numero": 6,
        "subtopico": "AEE e exigência de laudo",
        "dificuldade": "alta",
        "pergunta": "A família de um estudante com sinais persistentes de necessidade de apoio pedagógico ainda aguarda avaliação de saúde. A escola informa que somente iniciará o estudo de caso e o AEE após a entrega do laudo. Segundo a regulamentação atual, a escola",
        "alternativas": [
            "pode aguardar o laudo, desde que mantenha o estudante na classe comum e registre as dificuldades observadas.",
            "deve iniciar apenas adaptações gerais na sala comum, pois o estudo de caso depende de documento clínico que identifique o público da Educação Especial e delimite previamente o tipo de apoio que poderá ser oferecido no atendimento especializado.",
            "deve encaminhar o estudante ao AEE provisoriamente, mas suspender o atendimento se a avaliação clínica não confirmar a hipótese inicial.",
            "pode exigir laudo apenas para estudantes com Deficiência Intelectual, por se tratar de condição que envolve funcionamento intelectual.",
            "não pode condicionar o AEE a laudo; o estudo de caso pedagógico orienta a identificação de barreiras, potencialidades e apoios, podendo documentos de saúde atuar apenas como subsídio."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou uma atualização normativa central: a garantia do AEE não pode ser condicionada a diagnóstico, laudo ou relatório de profissional de saúde.",
        "feedbackErro": "A política vigente desloca a decisão pedagógica para o estudo de caso. Documentos clínicos podem subsidiar o processo quando existentes, mas não funcionam como porta de entrada obrigatória para o AEE.",
        "analiseAlternativas": [
            "Incorreta. Aguardar o laudo posterga um apoio que a norma não condiciona à documentação clínica.",
            "Incorreta. O estudo de caso é pedagógico e não depende de confirmação clínica prévia.",
            "Incorreta. A continuidade do apoio não pode ser condicionada automaticamente a confirmação médica.",
            "Incorreta. A vedação de condicionar o AEE a laudo não cria exceção específica para Deficiência Intelectual.",
            "Correta. O estudo de caso fundamenta a decisão pedagógica; documentos de saúde são subsidiários, quando existentes."
        ],
        "dicaBanca": "Em 2026, “laudo obrigatório para AEE” é um distrator especialmente perigoso porque era prática comum em muitas redes.",
        "pegadinha": "Laudo pode subsidiar; não pode condicionar.",
        "memorizar2026": "AEE 2026: estudo de caso pedagógico primeiro; laudo não é requisito.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §§ 6º e 7º; Portaria MEC nº 421/2026; Inep 2026.",
        "afirmacoes": "atualizacao2026: A exigência de laudo como condição para acesso ao AEE é expressamente vedada na política vigente."
    },
    {
        "id": "SEDUC-EE-AEEDI-007",
        "numero": 7,
        "subtopico": "PAEE e PEI — articulação",
        "dificuldade": "alta",
        "pergunta": "Após o estudo de caso de um aluno com Deficiência Intelectual, a escola elabora PAEE e PEI. A organização mais coerente com as regras atuais é",
        "alternativas": [
            "utilizar o PAEE apenas para registrar o atendimento na sala de recursos e reservar o PEI às adaptações realizadas pela família em casa.",
            "elaborar os dois documentos de forma pedagógica e articulada, orientando a classe comum, o AEE, as ações colaborativas e o acompanhamento do desenvolvimento.",
            "concentrar no PEI o diagnóstico e as limitações do estudante, enquanto o PAEE define exclusivamente o cronograma de atendimentos especializados e os recursos que serão usados apenas pelo professor da sala de recursos.",
            "usar o PAEE como substituto do planejamento da classe comum sempre que o estudante apresentar necessidades de apoio mais intensas.",
            "elaborar apenas um dos dois documentos, escolhendo aquele que a equipe considere mais adequado ao tipo de deficiência identificado."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu a função articuladora dos instrumentos individualizados: eles derivam do estudo de caso e orientam ações na classe comum, no AEE e no trabalho colaborativo.",
        "feedbackErro": "PAEE e PEI não são prontuários clínicos nem documentos isolados da rotina escolar. A política atual os integra ao planejamento pedagógico e ao PPP.",
        "analiseAlternativas": [
            "Incorreta. O PAEE não se limita à sala de recursos e o PEI não é documento familiar.",
            "Correta. Os instrumentos derivam do estudo de caso e orientam classe comum, AEE, colaboração e acompanhamento.",
            "Incorreta. Diagnóstico não é o eixo do PEI; a natureza desses documentos é pedagógica.",
            "Incorreta. PAEE não substitui o planejamento nem a escolarização da classe comum.",
            "Incorreta. A redação vigente vincula o estudo de caso à elaboração de PAEE e PEI."
        ],
        "dicaBanca": "A FGV pode trocar a função dos documentos. Grave quem articula o quê: estudo de caso fundamenta; PAEE/PEI orientam a ação pedagógica.",
        "pegadinha": "PAEE e PEI não são “documentos do AEE” desconectados da sala comum.",
        "memorizar2026": "Estudo de caso → PAEE + PEI → execução articulada → monitoramento/revisão.",
        "fonte": "Decreto nº 12.686/2025, arts. 11 e 12, com redação do Decreto nº 12.773/2025; Inep 2026.",
        "afirmacoes": "atualizacao2026: O Decreto nº 12.773/2025 passou a explicitar PAEE e PEI como instrumentos derivados do estudo de caso."
    },
    {
        "id": "SEDUC-EE-AEEDI-008",
        "numero": 8,
        "subtopico": "Trabalho colaborativo — AEE e classe comum",
        "dificuldade": "alta",
        "pergunta": "Uma professora do AEE identifica que determinado material visual facilita a compreensão de um estudante com Deficiência Intelectual. A conduta mais alinhada à educação inclusiva é",
        "alternativas": [
            "utilizar o material apenas durante o AEE para preservar a especificidade do atendimento especializado, registrando seus resultados antes de qualquer compartilhamento com a classe comum e evitando interferência de outros profissionais no procedimento.",
            "encaminhar o recurso ao profissional de apoio escolar, que deverá assumir a aplicação sempre que o estudante apresentar dificuldade.",
            "sugerir que a família treine o uso do material em casa antes de sua introdução na classe comum.",
            "articular com o professor da classe comum como o recurso pode ser incorporado às atividades, acompanhar seus efeitos e ajustar a estratégia conforme as evidências.",
            "substituir as atividades da turma por uma sequência individual baseada no recurso, evitando que as exigências curriculares gerem frustração."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou o princípio de colaboração: uma estratégia útil no AEE ganha sentido quando melhora o acesso e a participação do estudante nas situações reais de escolarização.",
        "feedbackErro": "O recurso não deve ficar “preso” ao AEE. O professor especializado articula, orienta e acompanha sua utilização na classe comum quando isso favorece aprendizagem e participação.",
        "analiseAlternativas": [
            "Incorreta. Restringir um recurso funcional ao AEE pode impedir sua generalização para a classe comum.",
            "Incorreta. O profissional de apoio não substitui a responsabilidade pedagógica dos professores.",
            "Incorreta. A família pode colaborar, mas não é condição para que a escola utilize uma estratégia pedagógica adequada.",
            "Correta. A articulação entre AEE e classe comum é eixo da atuação especializada.",
            "Incorreta. Um recurso de acessibilidade não exige criação de currículo paralelo ou redução automática de expectativas."
        ],
        "dicaBanca": "FGV Vitória 2024 cobrou planejamento articulado e adequações em colaboração com a classe comum.",
        "pegadinha": "AEE eficiente não é o que “funciona na SRM”; é o que amplia participação na vida escolar.",
        "memorizar2026": "Professor do AEE: identificar recurso → articular uso → acompanhar efeito → reajustar.",
        "fonte": "Decreto nº 12.686/2025, arts. 6º e 12; FGV Vitória 2024; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-AEEDI-009",
        "numero": 9,
        "subtopico": "Estratégias pedagógicas — instruções e mediação",
        "dificuldade": "media",
        "pergunta": "Um estudante com Deficiência Intelectual compreende melhor tarefas quando recebe instruções curtas, exemplos e apoio visual. Ao planejar uma atividade nova, a professora deve",
        "alternativas": [
            "manter a explicação longa usada com a turma e repetir exatamente as mesmas palavras quantas vezes forem necessárias, evitando mudanças na forma de apresentação.",
            "dividir a tarefa em etapas compreensíveis, usar linguagem clara e pistas visuais, verificar a compreensão e retirar apoios gradualmente quando possível.",
            "substituir a atividade por outra de menor complexidade, pois a necessidade de apoio para compreender instruções indica que o objetivo está acima da capacidade do estudante.",
            "oferecer ajuda integral durante toda a execução, prevenindo erros e garantindo que o estudante produza a resposta esperada sem hesitação.",
            "orientar apenas o profissional de apoio a explicar a tarefa, para que o estudante não dependa da mediação do professor da classe comum."
        ],
        "correta": 1,
        "feedbackAcerto": "Você escolheu uma estratégia de mediação ajustada à barreira: clareza, segmentação, apoio visual, checagem de compreensão e retirada gradual de suporte.",
        "feedbackErro": "Apoiar não significa simplificar automaticamente o objetivo nem fazer pelo estudante. A mediação deve tornar a tarefa compreensível e favorecer progressiva autonomia.",
        "analiseAlternativas": [
            "Incorreta. Repetir a mesma explicação pode manter a barreira se a forma de apresentação não for acessível.",
            "Correta. Segmentação, linguagem clara e pistas visuais são estratégias de acesso que podem ser graduadas.",
            "Incorreta. Necessidade de mediação não prova que o objetivo é inadequado.",
            "Incorreta. Ajuda total e permanente pode reduzir oportunidades de iniciativa e autonomia.",
            "Incorreta. O professor da classe comum continua responsável pelo ensino e pela mediação pedagógica."
        ],
        "dicaBanca": "Distrator clássico: confundir “apoio” com “fazer pelo aluno” ou “reduzir a atividade”.",
        "pegadinha": "Mediação boa é a que permite fazer com apoio hoje para fazer com maior autonomia depois.",
        "memorizar2026": "Instrução acessível: clareza + etapas + pistas + checagem + retirada gradual de apoio.",
        "fonte": "FGV Vitória 2024; FGV SEDUC-SP 2026; princípios de mediação pedagógica inclusiva."
    },
    {
        "id": "SEDUC-EE-AEEDI-010",
        "numero": 10,
        "subtopico": "Recursos concretos e visuais",
        "dificuldade": "media",
        "pergunta": "Em Matemática, um aluno com Deficiência Intelectual apresenta dificuldade para compreender um problema envolvendo dinheiro. A intervenção pedagógica mais coerente é",
        "alternativas": [
            "usar cédulas e moedas simuladas, situações de compra e representações visuais, relacionando o conceito matemático a experiências significativas e avançando progressivamente para registros simbólicos.",
            "manter apenas exercícios escritos, porque recursos concretos podem criar dependência e atrasar a aprendizagem de conceitos abstratos.",
            "substituir o conteúdo por treino de reconhecimento de moedas, sem relação com os objetivos matemáticos da turma.",
            "utilizar o recurso concreto apenas no AEE e exigir que, na classe comum, o estudante resolva o problema sem qualquer apoio para verificar se houve aprendizagem real e se o conceito foi internalizado de modo independente, sem necessidade de mediações externas.",
            "reduzir a atividade a operações de uma única etapa, independentemente da barreira identificada, para evitar sobrecarga cognitiva."
        ],
        "correta": 0,
        "feedbackAcerto": "Você escolheu um uso pedagógico intencional do concreto: aproximar o conceito de uma situação significativa e construir pontes para representações mais abstratas.",
        "feedbackErro": "Recurso concreto não é fim em si mesmo nem precisa ficar restrito ao AEE. Ele deve servir ao objetivo de aprendizagem e ser ajustado conforme a resposta do estudante.",
        "analiseAlternativas": [
            "Correta. O material concreto atua como mediação para compreensão e pode apoiar a passagem ao registro simbólico.",
            "Incorreta. Recursos concretos não impedem abstração; podem funcionar como apoio para construí-la.",
            "Incorreta. Reconhecer moedas pode ser útil, mas não deve substituir automaticamente o objetivo matemático da atividade.",
            "Incorreta. Acessibilidade também deve estar disponível na classe comum quando necessária.",
            "Incorreta. Reduzir complexidade sem analisar a barreira pode empobrecer a aprendizagem."
        ],
        "dicaBanca": "FGV gosta de recursos “bons” usados com finalidade errada. Pergunte sempre: qual objetivo o recurso está ajudando a alcançar?",
        "pegadinha": "Recurso não é atividade decorativa; precisa mediar um objetivo.",
        "memorizar2026": "Concreto/visual → significado → compreensão → progressão para outras formas de representação.",
        "fonte": "FGV SEDUC-SP 2026 — Tecnologia Assistiva e materiais; princípios de educação inclusiva."
    },
    {
        "id": "SEDUC-EE-AEEDI-011",
        "numero": 11,
        "subtopico": "Generalização da aprendizagem",
        "dificuldade": "alta",
        "pergunta": "No AEE, um estudante aprende a consultar uma rotina visual para organizar os materiais. Na classe comum, porém, continua dependendo de instruções constantes. Para favorecer generalização, é mais adequado",
        "alternativas": [
            "manter a rotina visual exclusivamente no AEE até que o estudante a utilize sem qualquer ajuda naquele ambiente.",
            "trocar o recurso por instruções orais na sala comum, pois usar a mesma estratégia em dois contextos pode gerar dependência.",
            "articular o uso da rotina em diferentes momentos e ambientes, com apoios graduados, para que a habilidade seja transferida para situações reais da vida escolar.",
            "aumentar o número de sessões do AEE antes de introduzir o recurso na turma, garantindo domínio completo em ambiente controlado e reduzindo o risco de que a mudança de contexto interfira na execução da habilidade aprendida.",
            "solicitar ao profissional de apoio que organize os materiais pelo estudante, reduzindo a necessidade de ele consultar a rotina durante a aula."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou que aprender uma estratégia não basta; é preciso favorecer sua utilização em diferentes contextos e com níveis progressivos de autonomia.",
        "feedbackErro": "Generalização exige conexão entre ambientes, pessoas, tarefas e situações. Isolar a habilidade no AEE pode produzir bom desempenho apenas naquele contexto.",
        "analiseAlternativas": [
            "Incorreta. Esperar domínio isolado pode atrasar a transferência da habilidade para o cotidiano escolar.",
            "Incorreta. Mudar a estratégia sem necessidade elimina uma pista já funcional.",
            "Correta. A mesma habilidade precisa ser praticada e ajustada em contextos diversos para ganhar funcionalidade.",
            "Incorreta. Domínio em ambiente controlado não garante transferência automática para a sala comum.",
            "Incorreta. Fazer a organização pelo estudante reduz a oportunidade de ele usar a estratégia aprendida."
        ],
        "dicaBanca": "Se o estudante “só faz no AEE”, pense em generalização e articulação com os contextos reais.",
        "pegadinha": "Desempenho em um ambiente não garante transferência automática.",
        "memorizar2026": "Generalizar = usar a aprendizagem em pessoas, tarefas, ambientes e situações diferentes.",
        "fonte": "FGV Vitória 2024 — AEE/DI; princípios de aprendizagem funcional e contextualizada."
    },
    {
        "id": "SEDUC-EE-AEEDI-012",
        "numero": 12,
        "subtopico": "Funções cognitivas e resolução de problemas",
        "dificuldade": "alta",
        "pergunta": "Em vez de oferecer ao aluno com Deficiência Intelectual apenas exercícios repetitivos, a professora do AEE propõe situações em que ele compara alternativas, explica escolhas e testa estratégias para resolver problemas. Essa escolha pedagógica",
        "alternativas": [
            "é inadequada, porque o AEE deve privilegiar treino de habilidades básicas antes de propor situações que exijam tomada de decisão.",
            "é adequada somente quando o estudante apresenta linguagem oral suficiente para justificar verbalmente todas as etapas do raciocínio.",
            "é inadequada se os problemas se relacionarem ao currículo da turma, pois o AEE deve trabalhar habilidades distintas das desenvolvidas na classe comum.",
            "é adequada, pois pode favorecer desenvolvimento de conceitos, pensamento estratégico e autonomia, desde que as mediações sejam ajustadas ao estudante.",
            "é adequada apenas quando utilizada como avaliação final, após o estudante demonstrar domínio por repetição das respostas esperadas."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu o potencial do AEE para promover processos cognitivos ativos, e não apenas treino mecânico. O desafio pode ser mantido com mediações ajustadas.",
        "feedbackErro": "A Deficiência Intelectual não justifica restringir o ensino à repetição. Situações de comparação, escolha, explicação e resolução de problemas podem ampliar autonomia e compreensão.",
        "analiseAlternativas": [
            "Incorreta. Habilidades básicas e resolução de problemas podem ser desenvolvidas de forma articulada.",
            "Incorreta. O estudante pode demonstrar raciocínio por diferentes formas de comunicação e expressão.",
            "Incorreta. Articular-se ao currículo comum é desejável; o AEE não precisa operar em um universo separado.",
            "Correta. Mediação e desafio significativo favorecem desenvolvimento cognitivo e autonomia.",
            "Incorreta. Resolução de problemas não deve ficar restrita à avaliação final após treino repetitivo."
        ],
        "dicaBanca": "A FGV Vitória 2024 cobrou a ideia de desenvolvimento mental de conceitos e resolução de situações-problema ligada à autonomia.",
        "pegadinha": "DI não implica pedagogia da repetição.",
        "memorizar2026": "AEE para DI: desafiar com apoio, favorecer conceitos, escolhas, estratégias e autonomia.",
        "fonte": "FGV Vitória 2024 — Educação Especial: Deficiência Intelectual."
    },
    {
        "id": "SEDUC-EE-AEEDI-013",
        "numero": 13,
        "subtopico": "Habilidades funcionais e currículo comum",
        "dificuldade": "alta",
        "pergunta": "Uma equipe decide que, por apresentar Deficiência Intelectual, um estudante passará a trabalhar somente autocuidado, organização pessoal e atividades de vida diária, deixando de participar de Ciências e História. A decisão é",
        "alternativas": [
            "adequada quando as habilidades funcionais são registradas no PEI e acompanhadas pelo professor do AEE.",
            "adequada se a família priorizar independência e concordar com a substituição dos componentes curriculares.",
            "adequada durante períodos de maior necessidade de apoio adaptativo, desde que o estudante permaneça fisicamente na sala comum e participe das atividades coletivas somente nos momentos em que a equipe considerar compatíveis com seu nível de desempenho.",
            "inadequada apenas se o estudante demonstrar desempenho acadêmico próximo ao da turma nas avaliações diagnósticas.",
            "inadequada, porque habilidades funcionais podem ser ensinadas, mas não justificam retirar o direito de acesso ao currículo comum e às experiências coletivas de aprendizagem."
        ],
        "correta": 4,
        "feedbackAcerto": "Você diferenciou ampliação de autonomia de empobrecimento curricular. Habilidades funcionais são importantes, mas não devem substituir automaticamente o conhecimento escolar.",
        "feedbackErro": "A inclusão exige acesso ao currículo comum com apoios. Um planejamento que transforma a Deficiência Intelectual em justificativa para excluir componentes curriculares reforça baixas expectativas.",
        "analiseAlternativas": [
            "Incorreta. Registrar uma decisão no PEI não torna legítima a retirada injustificada do currículo comum.",
            "Incorreta. A participação familiar não autoriza negar direitos curriculares.",
            "Incorreta. Presença física sem acesso ao currículo não caracteriza inclusão pedagógica.",
            "Incorreta. O direito ao currículo não depende de desempenho próximo ao da turma.",
            "Correta. Habilidades funcionais podem integrar o planejamento sem substituir o acesso às experiências curriculares comuns."
        ],
        "dicaBanca": "FGV costuma oferecer “vida diária” como alternativa aparentemente protetiva. Veja se ela está substituindo indevidamente o currículo.",
        "pegadinha": "Funcionalidade não é currículo reduzido.",
        "memorizar2026": "Autonomia + currículo comum: uma coisa não precisa excluir a outra.",
        "fonte": "Decreto nº 12.686/2025, arts. 3º, 4º e 6º; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-AEEDI-014",
        "numero": 14,
        "subtopico": "Tecnologia Assistiva — função",
        "dificuldade": "alta",
        "pergunta": "No atendimento de um estudante com Deficiência Intelectual, a equipe avalia diferentes recursos tecnológicos. Para caracterizar uma escolha de Tecnologia Assistiva no contexto escolar, o critério decisivo é",
        "alternativas": [
            "o valor do equipamento, pois recursos especializados de maior custo tendem a oferecer maior potencial de compensação das limitações.",
            "a presença de software específico para Educação Especial, independentemente da função que exerça nas atividades escolares do estudante, desde que tenha sido desenvolvido para pessoas com deficiência e esteja previsto no planejamento do AEE.",
            "o uso exclusivo no AEE, já que recursos de Tecnologia Assistiva devem ser ensinados em ambiente especializado antes de chegar à classe comum.",
            "a indicação de um profissional de saúde, uma vez que recursos assistivos exigem prescrição externa antes de sua utilização pedagógica.",
            "a função de ampliar a funcionalidade, a comunicação, o acesso ou a participação do estudante em atividades significativas, podendo envolver recursos simples ou sofisticados."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou o núcleo funcional da Tecnologia Assistiva. O que importa é o que o recurso possibilita ao estudante, não seu preço, sofisticação ou local de uso.",
        "feedbackErro": "Tecnologia Assistiva pode envolver desde adaptações simples até recursos digitais. Sua escolha deve responder a uma barreira e ser avaliada pelo ganho de participação, autonomia ou acesso.",
        "analiseAlternativas": [
            "Incorreta. Custo não define Tecnologia Assistiva nem garante adequação à necessidade.",
            "Incorreta. Um software pode ser pedagógico sem ser assistivo; a função exercida é decisiva.",
            "Incorreta. O recurso pode e deve acompanhar o estudante nos ambientes em que é necessário.",
            "Incorreta. A escola pode organizar recursos pedagógicos e assistivos sem transformar prescrição clínica em condição obrigatória.",
            "Correta. Tecnologia Assistiva é definida pelo ganho funcional e pela remoção de barreiras à participação."
        ],
        "dicaBanca": "A FGV SEDUC-SP 2026 cobrou que TA não se limita a equipamentos sofisticados e deve ser pensada a partir das necessidades do aluno.",
        "pegadinha": "“Tecnologia” não basta: precisa haver função assistiva.",
        "memorizar2026": "TA = recurso/serviço que amplia funcionalidade, autonomia, acesso ou participação.",
        "fonte": "FGV SEDUC-SP 2026; LBI, art. 3º, III; Decreto nº 12.686/2025, art. 11, §5º."
    },
    {
        "id": "SEDUC-EE-AEEDI-015",
        "numero": 15,
        "subtopico": "Comunicação Aumentativa e Alternativa",
        "dificuldade": "alta",
        "pergunta": "Um estudante com Deficiência Intelectual compreende as atividades, mas encontra dificuldade para expressar escolhas e respostas oralmente. A escola considera uma prancha de comunicação com símbolos. A conduta mais adequada é",
        "alternativas": [
            "usar a prancha apenas em momentos de crise comunicativa, evitando que ela interfira no desenvolvimento de outras formas de expressão.",
            "introduzir o recurso de forma planejada, ensinar seu uso e disponibilizá-lo nos contextos em que amplie comunicação, participação e possibilidade de resposta.",
            "reservar a prancha ao AEE até que o estudante demonstre domínio completo dos símbolos antes de utilizá-la com colegas e professores, evitando que múltiplos interlocutores e ambientes prejudiquem a consolidação inicial do sistema comunicativo.",
            "substituir todas as tentativas de fala pela prancha, pois a Comunicação Aumentativa e Alternativa deve se tornar o único canal comunicativo.",
            "usar símbolos somente para necessidades básicas, mantendo respostas acadêmicas obrigatoriamente em linguagem oral ou escrita."
        ],
        "correta": 1,
        "feedbackAcerto": "Você entendeu a CAA como recurso de participação. Ela pode ampliar expressão, escolhas, respostas e interação e precisa estar disponível nos contextos em que é funcional.",
        "feedbackErro": "CAA não deve ser tratada como último recurso, instrumento exclusivo do AEE ou substituição obrigatória de outras formas de comunicação. Seu uso é multimodal e orientado à funcionalidade.",
        "analiseAlternativas": [
            "Incorreta. Limitar o recurso a crises reduz oportunidades de comunicação cotidiana e acadêmica.",
            "Correta. O recurso deve ser ensinado e utilizado onde favorece comunicação e participação.",
            "Incorreta. Esperar domínio isolado no AEE pode impedir aprendizagem comunicativa em situações reais.",
            "Incorreta. CAA pode complementar outras formas de expressão; não exige substituir toda fala.",
            "Incorreta. Comunicação acadêmica também pode ser acessibilizada por CAA quando necessário."
        ],
        "dicaBanca": "FGV SEDUC-SP 2026 citou pranchas de comunicação para estudantes com DI como recurso de CAA para escolhas, sentimentos, respostas e necessidades.",
        "pegadinha": "CAA não é só para “pedir coisas”; também dá voz acadêmica e social.",
        "memorizar2026": "CAA = ampliar expressão e participação em diferentes contextos.",
        "fonte": "FGV SEDUC-SP 2026; LBI atualizada; princípios de Comunicação Aumentativa e Alternativa."
    },
    {
        "id": "SEDUC-EE-AEEDI-016",
        "numero": 16,
        "subtopico": "Avaliação da aprendizagem",
        "dificuldade": "alta",
        "pergunta": "Na avaliação de um estudante com Deficiência Intelectual, a professora deseja verificar compreensão de um conteúdo de Ciências. Qual procedimento é mais coerente com uma avaliação inclusiva?",
        "alternativas": [
            "aplicar instrumento mais simples que o da turma e atribuir nota máxima se o estudante demonstrar esforço, ainda que não seja possível identificar o que aprendeu.",
            "usar apenas observação informal, pois avaliações estruturadas tendem a produzir comparação inadequada entre estudantes com diferentes ritmos.",
            "manter o mesmo formato escrito e o mesmo tempo para todos, garantindo igualdade de tratamento na aferição dos resultados.",
            "diversificar formas de resposta e apoios pertinentes, manter foco no objetivo de aprendizagem e registrar evidências para orientar intervenções e replanejamento.",
            "substituir a avaliação do conteúdo por uma escala de comportamento adaptativo, já que esta é mais representativa do desenvolvimento do estudante."
        ],
        "correta": 3,
        "feedbackAcerto": "Você escolheu uma avaliação que preserva o objetivo e flexibiliza os meios de demonstrar aprendizagem, usando evidências para acompanhar e replanejar.",
        "feedbackErro": "A avaliação inclusiva não é aprovação automática, ausência de critérios ou uniformidade rígida. Ela deve produzir informação válida sobre o que o estudante aprendeu e sobre os apoios que ainda precisa.",
        "analiseAlternativas": [
            "Incorreta. Esforço importa, mas não substitui a análise das aprendizagens pretendidas.",
            "Incorreta. Observação é útil, mas não precisa ser o único instrumento.",
            "Incorreta. Igualdade formal pode manter barreiras de acesso à demonstração da aprendizagem.",
            "Correta. Diversificar instrumentos e manter referência nos objetivos permite avaliação formativa e acessível.",
            "Incorreta. Comportamento adaptativo não substitui a avaliação de aprendizagens curriculares."
        ],
        "dicaBanca": "A FGV mistura frequentemente “equidade” com “facilitar”. A alternativa correta mantém o objetivo, mas muda o acesso ou a expressão quando necessário.",
        "pegadinha": "Avaliação acessível não é avaliação sem critério.",
        "memorizar2026": "Avaliar DI: objetivo claro + meios acessíveis + evidências + acompanhamento + replanejamento.",
        "fonte": "FGV Vitória 2024; Decreto nº 12.686/2025, art. 11, §5º; princípios de avaliação formativa."
    },
    {
        "id": "SEDUC-EE-AEEDI-017",
        "numero": 17,
        "subtopico": "Participação na classe comum",
        "dificuldade": "alta",
        "pergunta": "Em uma turma de alfabetização, um estudante com Deficiência Intelectual precisa de mais tempo, mediação e materiais de apoio. A equipe propõe que ele passe a maior parte das aulas em outro espaço, realizando tarefas mais simples. A alternativa mais adequada é",
        "alternativas": [
            "manter o estudante na classe comum, com apoios e estratégias de acessibilidade articulados ao AEE, assegurando participação nas experiências de alfabetização da turma.",
            "alternar períodos iguais entre classe comum e sala de recursos, pois a inclusão depende de equilíbrio de tempo entre os dois espaços educativos.",
            "manter a matrícula na turma, mas organizar atividades individuais sem relação com as propostas dos colegas, evitando comparação de desempenho e preservando a autoestima até que o estudante alcance habilidades consideradas básicas para acompanhar o currículo comum.",
            "priorizar o AEE durante o período de alfabetização e ampliar gradualmente a frequência na classe comum após o domínio de habilidades básicas.",
            "permitir participação coletiva apenas nas atividades lúdicas, reservando conteúdos formais a propostas individualizadas de menor complexidade."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou a lógica da inclusão e da função complementar do AEE: o estudante permanece no espaço comum de escolarização e recebe os apoios necessários para participar e aprender.",
        "feedbackErro": "Mais tempo ou mediação não justificam separação sistemática. A classe comum é espaço de escolarização; o AEE complementa e organiza recursos e estratégias.",
        "analiseAlternativas": [
            "Correta. Garante classe comum, apoios, AEE complementar e participação nas experiências curriculares.",
            "Incorreta. A inclusão não é definida por uma divisão matemática de tempo entre classe comum e AEE.",
            "Incorreta. Presença física com currículo desconectado pode manter exclusão pedagógica.",
            "Incorreta. AEE não substitui a alfabetização da classe comum nem funciona como etapa preparatória para inclusão.",
            "Incorreta. O estudante tem direito de participar também dos conteúdos formais com os apoios necessários."
        ],
        "dicaBanca": "Essa estrutura apareceu diretamente na FGV SEDUC-SP 2026: separar com tarefas mais simples era o distrator; classe comum + apoio + AEE complementar era o núcleo correto.",
        "pegadinha": "Inclusão não é “ficar na escola”; é participar do currículo.",
        "memorizar2026": "Classe comum = escolarização. AEE = complementaridade e acessibilidade.",
        "fonte": "FGV SEDUC-SP 2026, questão sobre estudante com DI na alfabetização; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-AEEDI-018",
        "numero": 18,
        "subtopico": "Interação social e aprendizagem",
        "dificuldade": "alta",
        "pergunta": "Sob uma perspectiva histórico-cultural aplicada à inclusão de estudantes com Deficiência Intelectual, é correto considerar que",
        "alternativas": [
            "a aprendizagem ocorre de forma mais eficiente quando o estudante domina individualmente uma habilidade antes de interagir com colegas que apresentam níveis diferentes de desempenho.",
            "a heterogeneidade da turma pode constituir fonte de desenvolvimento, especialmente quando há mediação, linguagem, colaboração e participação em atividades compartilhadas.",
            "a interação entre pares deve ser reservada às atividades sociais, porque a construção de conceitos acadêmicos depende principalmente de treino individual sistemático.",
            "o apoio de colegas é útil apenas para tarefas funcionais, pois conteúdos escolares exigem intervenção direta do professor sem participação de outros estudantes.",
            "a mediação social tende a reduzir autonomia em estudantes com DI, razão pela qual deve ser retirada nas fases iniciais de aprendizagem."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu a aprendizagem como processo mediado socialmente. Heterogeneidade, linguagem e colaboração podem ampliar oportunidades de desenvolvimento quando bem organizadas.",
        "feedbackErro": "A perspectiva histórico-cultural não trata interação como distração da aprendizagem. A mediação de professores e pares pode apoiar construção de conceitos e participação.",
        "analiseAlternativas": [
            "Incorreta. Interação não precisa esperar domínio individual prévio.",
            "Correta. Heterogeneidade e colaboração podem atuar como recursos de desenvolvimento e aprendizagem.",
            "Incorreta. Interação entre pares também pode contribuir para aprendizagem acadêmica.",
            "Incorreta. Apoio entre pares pode ser pedagógico e não se limita a tarefas funcionais.",
            "Incorreta. Mediação adequada pode promover, e não necessariamente reduzir, autonomia."
        ],
        "dicaBanca": "FGV Vitória 2024 cobrou explicitamente heterogeneidade, aprendizagem colaborativa e singularidade na perspectiva histórico-cultural.",
        "pegadinha": "Interação não é prêmio depois de aprender; pode ser caminho para aprender.",
        "memorizar2026": "Aprendizagem mediada: linguagem + interação + colaboração + singularidade.",
        "fonte": "FGV Vitória 2024 — Educação Especial: Deficiência Intelectual."
    },
    {
        "id": "SEDUC-EE-AEEDI-019",
        "numero": 19,
        "subtopico": "Altas expectativas e risco de subestimação",
        "dificuldade": "alta",
        "pergunta": "Ao elaborar o planejamento de um estudante com Deficiência Intelectual, a equipe decide reduzir previamente a complexidade de todas as atividades “para preservar sua autoestima”. Essa justificativa é",
        "alternativas": [
            "adequada quando baseada no diagnóstico, porque a redução de expectativa evita experiências de fracasso recorrente.",
            "adequada se o professor do AEE definir previamente quais conteúdos são compatíveis com o nível intelectual do estudante e registrar no PEI uma sequência de objetivos reduzidos que funcione como referência estável para todos os componentes curriculares.",
            "inadequada apenas nas disciplinas em que o aluno já demonstrou desempenho equivalente ao da turma.",
            "adequada quando a redução é registrada no PEI e revista ao final do ano letivo.",
            "inadequada, pois os apoios devem ser definidos a partir de barreiras e evidências de aprendizagem, evitando transformar a deficiência em justificativa automática para baixas expectativas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu uma das armadilhas mais importantes da inclusão de estudantes com DI: a superproteção pode produzir um currículo pobre e limitar oportunidades de desenvolvimento.",
        "feedbackErro": "Evitar frustração não significa retirar desafios previamente. O planejamento precisa observar o estudante real, oferecer apoios e ajustar estratégias a partir de evidências.",
        "analiseAlternativas": [
            "Incorreta. Diagnóstico não define automaticamente o grau de desafio pedagógico apropriado.",
            "Incorreta. O professor do AEE não estabelece um teto curricular baseado em “nível intelectual”.",
            "Incorreta. A inadequação não depende de já haver equivalência de desempenho com a turma.",
            "Incorreta. Registrar no PEI não torna válida uma redução automática e generalizada de expectativas.",
            "Correta. Apoios e flexibilizações devem responder a barreiras e evidências, mantendo expectativas de aprendizagem significativas."
        ],
        "dicaBanca": "FGV SEDUC-SP 2026 usou como distrator a ideia de tarefas mais simples por haver “limites ao aprendizado”.",
        "pegadinha": "Superproteção também pode excluir.",
        "memorizar2026": "Altas expectativas + apoios adequados > redução automática de objetivos.",
        "fonte": "FGV SEDUC-SP 2026; FGV Vitória 2024; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-AEEDI-020",
        "numero": 20,
        "subtopico": "Família e estudante no planejamento",
        "dificuldade": "media",
        "pergunta": "Ao iniciar o estudo de caso de um estudante com Deficiência Intelectual, a equipe escolar decide ouvir a família somente depois que o PAEE e o PEI estiverem concluídos. A conduta mais adequada seria",
        "alternativas": [
            "garantir a participação do estudante e dos familiares ao longo do estudo de caso, incorporando informações sobre estratégias já usadas, necessidades atuais e acompanhamento dos planos.",
            "manter o procedimento, pois a participação da família deve ocorrer apenas na etapa de ciência e assinatura dos documentos pedagógicos.",
            "consultar a família somente sobre habilidades de vida diária, deixando aprendizagem e currículo exclusivamente sob decisão dos profissionais da escola, pois a participação familiar em metas acadêmicas poderia interferir na autonomia técnica da equipe pedagógica.",
            "solicitar que a família forneça o laudo e, após sua análise, definir se haverá necessidade de participação no planejamento pedagógico.",
            "ouvir primeiro os profissionais de saúde e, apenas em caso de divergência, convidar a família para complementar as informações."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou que participação não é assinatura final. A família e o próprio estudante contribuem para conhecer história, estratégias, interesses, necessidades e efeitos dos apoios.",
        "feedbackErro": "A política vigente exige envolvimento ao longo do estudo de caso. A colaboração qualifica o planejamento e não retira a responsabilidade pedagógica da escola.",
        "analiseAlternativas": [
            "Correta. Corresponde à participação contínua prevista no Decreto nº 12.686/2025.",
            "Incorreta. Ciência formal ao final não equivale a envolvimento ao longo do processo.",
            "Incorreta. A família pode contribuir em diferentes dimensões, não apenas nas habilidades funcionais.",
            "Incorreta. Laudo não condiciona participação nem acesso ao planejamento pedagógico.",
            "Incorreta. Profissionais externos podem subsidiar quando necessário, mas não substituem a participação familiar e escolar."
        ],
        "dicaBanca": "Se a alternativa reduzir a família a “assinar” ou “receber orientação”, desconfie.",
        "pegadinha": "Parceria não é terceirização nem comunicação unilateral.",
        "memorizar2026": "Estudante + família participam do estudo de caso e do acompanhamento dos planos.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §3º; Inep 2026."
    },
    {
        "id": "SEDUC-EE-AEEDI-021",
        "numero": 21,
        "subtopico": "Profissional de apoio e responsabilidade pedagógica",
        "dificuldade": "alta",
        "pergunta": "Um estudante com Deficiência Intelectual conta com profissional de apoio escolar para necessidades identificadas no estudo de caso. Durante as aulas, o professor regente passa a entregar todas as atividades ao profissional de apoio, que decide como ensinar o conteúdo ao estudante. Essa organização",
        "alternativas": [
            "é adequada se o profissional de apoio possuir experiência com Educação Especial e mantiver comunicação semanal com o professor regente.",
            "é adequada porque o profissional de apoio assume a mediação pedagógica individual enquanto o professor regente ensina o restante da turma.",
            "é inadequada apenas quando o estudante frequenta AEE, pois nesse caso a orientação pedagógica deve partir exclusivamente do professor especializado e ser executada pelo profissional de apoio durante as aulas para garantir continuidade entre os serviços.",
            "é inadequada, porque apoio escolar não substitui a responsabilidade docente; as funções do profissional devem estar articuladas ao PAEE/PEI e às necessidades identificadas.",
            "é adequada quando a turma é numerosa, desde que as atividades do estudante permaneçam relacionadas ao mesmo tema trabalhado pelos colegas."
        ],
        "correta": 3,
        "feedbackAcerto": "Você separou apoio escolar de docência. O profissional de apoio atua nas funções previstas para remover barreiras e favorecer participação, mas não substitui professor regente ou professor do AEE.",
        "feedbackErro": "A existência de apoio não transfere a responsabilidade pedagógica. O trabalho deve seguir os instrumentos individualizados e ocorrer em articulação com os professores.",
        "analiseAlternativas": [
            "Incorreta. Experiência não transforma o profissional de apoio em responsável docente pelo ensino.",
            "Incorreta. A mediação pedagógica permanece responsabilidade dos professores; apoio escolar não é professor particular.",
            "Incorreta. A inadequação existe independentemente da frequência ao AEE.",
            "Correta. O apoio atua em consonância com PAEE/PEI sem substituir funções docentes.",
            "Incorreta. Tamanho da turma não autoriza transferência da responsabilidade pedagógica."
        ],
        "dicaBanca": "A banca pode chamar o profissional de apoio de “mediador” para sugerir que ele ensina no lugar do professor. Verifique as atribuições.",
        "pegadinha": "Profissional de apoio ≠ professor particular.",
        "memorizar2026": "Apoio escolar favorece participação; planejamento e ensino continuam sob responsabilidade docente.",
        "fonte": "Decreto nº 12.773/2025, art. 14; LBI, art. 3º, XIII."
    },
    {
        "id": "SEDUC-EE-AEEDI-022",
        "numero": 22,
        "subtopico": "AEE não é reforço nem currículo paralelo",
        "dificuldade": "alta",
        "pergunta": "Assinale a prática que melhor caracteriza um AEE coerente com a escolarização inclusiva de um estudante com Deficiência Intelectual.",
        "alternativas": [
            "refazer semanalmente as avaliações da classe comum em versão reduzida, garantindo que o estudante obtenha nota mínima para progressão.",
            "organizar um currículo independente, concentrado em habilidades funcionais, para evitar que os conteúdos da turma produzam sobrecarga.",
            "selecionar recursos, desenvolver estratégias e orientar sua utilização nos contextos escolares em que o estudante encontra barreiras de acesso, comunicação ou participação.",
            "antecipar no AEE todos os conteúdos que serão ensinados na sala regular, para que o estudante chegue às aulas com vantagem compensatória e reduza a necessidade de adaptações durante a participação com os colegas na classe comum.",
            "centralizar as decisões pedagógicas no professor especializado, que possui formação específica para definir o que o estudante é capaz de aprender."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou a atuação especializada orientada a barreiras, recursos e articulação com os contextos reais de participação escolar.",
        "feedbackErro": "O AEE não existe para garantir nota, construir currículo separado, antecipar toda a matéria ou estabelecer um teto de aprendizagem. Ele complementa a escolarização removendo barreiras.",
        "analiseAlternativas": [
            "Incorreta. Refazer provas reduzidas para garantir nota transforma o AEE em recuperação e distorce sua finalidade.",
            "Incorreta. Currículo independente como regra fragmenta a escolarização comum.",
            "Correta. AEE identifica e organiza recursos e estratégias que ampliam acesso e participação.",
            "Incorreta. Antecipação de conteúdo pode ser uma estratégia pontual, mas não define a função do AEE nem deve virar pré-ensino paralelo permanente.",
            "Incorreta. A decisão pedagógica é colaborativa e não autoriza o professor especializado a fixar capacidades do estudante."
        ],
        "dicaBanca": "Questão de definição funcional: descarte alternativas que transformam o AEE em reforço, pré-aula ou classe especial individual.",
        "pegadinha": "AEE não é “aula particular da Educação Especial”.",
        "memorizar2026": "AEE = remover barreiras + organizar recursos + articular apoios.",
        "fonte": "Decreto nº 12.686/2025, arts. 5º e 6º; FGV Vitória 2024; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-AEEDI-023",
        "numero": 23,
        "subtopico": "AEE para DI — julgamento de afirmativas",
        "dificuldade": "alta",
        "pergunta": "Sobre o Atendimento Educacional Especializado para estudantes com Deficiência Intelectual, está correto o que se afirma em",
        "alternativas": [
            "I, apenas.",
            "II, apenas.",
            "I e III, apenas.",
            "I e II, apenas.",
            "I, II e III."
        ],
        "correta": 3,
        "feedbackAcerto": "Você julgou corretamente: I e II estão de acordo com a perspectiva inclusiva; III é falsa porque o AEE não deve permanecer restrito à sala de recursos nem operar isoladamente da classe comum.",
        "feedbackErro": "A afirmativa III contém a armadilha. Estratégias podem ser ensinadas no AEE, mas seu valor educacional aumenta quando são articuladas aos contextos em que o estudante participa e aprende.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa II também está correta.",
            "Incorreta. A afirmativa I também está correta.",
            "Incorreta. A afirmativa III é falsa ao restringir recursos e estratégias ao espaço especializado.",
            "Correta. I e II estão corretas; III contraria a articulação entre AEE e classe comum.",
            "Incorreta. A presença da afirmativa III invalida o conjunto."
        ],
        "dicaBanca": "FGV usa muito combinações I/II/III. Julgue cada item antes de olhar as alternativas.",
        "pegadinha": "“Unicamente na SRM” costuma ser uma pista de isolamento do AEE.",
        "memorizar2026": "Individualidade + potencialidades/apoios + articulação; nunca AEE isolado.",
        "fonte": "FGV Vitória 2024 — questão sobre AEE e Deficiência Intelectual; Decreto nº 12.686/2025.",
        "afirmacoes": [
            "I. O planejamento deve considerar individualidade, interesses, potencialidades e necessidades de apoio do estudante.",
            "II. Recursos e estratégias do AEE devem contribuir para participação e aprendizagem também na classe comum.",
            "III. Para preservar sua especificidade, o plano pedagógico do AEE deve ser executado unicamente na Sala de Recursos Multifuncionais."
        ]
    },
    {
        "id": "SEDUC-EE-AEEDI-024",
        "numero": 24,
        "subtopico": "Recursos, avaliação e tecnologia — V/F",
        "dificuldade": "alta",
        "pergunta": "As afirmativas são, respectivamente,",
        "alternativas": [
            "V – V – F – F.",
            "F – V – V – F.",
            "V – F – V – V.",
            "F – F – V – V.",
            "V – F – V – F."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou a sequência correta. Recursos podem ampliar expressão e participação; já substituir a participação do estudante ou reduzir automaticamente objetivos contraria a lógica inclusiva.",
        "feedbackErro": "Para resolver, observe a finalidade de cada ação: apoio legítimo aumenta acesso e autonomia; práticas inadequadas substituem o estudante ou rebaixam expectativas sem relação com a barreira.",
        "analiseAlternativas": [
            "Correta. I e II são verdadeiras; III e IV são falsas.",
            "Incorreta. A afirmativa I é verdadeira e a III é falsa.",
            "Incorreta. A afirmativa II é verdadeira e a IV é falsa.",
            "Incorreta. I e II não são falsas.",
            "Incorreta. A afirmativa II também é verdadeira."
        ],
        "dicaBanca": "Em V/F da FGV, transforme cada frase em pergunta de finalidade: “isso amplia participação ou substitui o estudante?”.",
        "pegadinha": "Um recurso pode ser inclusivo no nome e excludente no uso.",
        "memorizar2026": "Recurso bom = funcional, intencional e disponível onde a barreira acontece.",
        "fonte": "FGV SEDUC-SP 2026 — TA/CAA; Decreto nº 12.686/2025.",
        "afirmacoes": [
            "( ) Pranchas de comunicação podem ampliar escolhas e respostas de estudantes com DI quando há barreira de expressão.",
            "( ) Materiais concretos e visuais podem funcionar como mediação quando ligados ao objetivo de aprendizagem.",
            "( ) Tecnologia Assistiva deve substituir a participação direta do estudante sempre que houver risco de erro.",
            "( ) A presença de Deficiência Intelectual justifica reduzir previamente os objetivos curriculares em todas as disciplinas."
        ]
    },
    {
        "id": "SEDUC-EE-AEEDI-025",
        "numero": 25,
        "subtopico": "Caso integrado — AEE, DI e inclusão",
        "dificuldade": "alta",
        "pergunta": "Uma aluna com Deficiência Intelectual participa das aulas de Geografia, mas necessita de mais tempo para organizar informações e de apoio visual para responder às atividades. O estudo de caso identifica boa compreensão oral, interesse por mapas e dificuldade para registrar textos longos. A equipe escolar deve, prioritariamente,",
        "alternativas": [
            "reduzir o conteúdo de Geografia e avaliar apenas conceitos básicos, preservando sua autoestima e evitando situações de maior exigência cognitiva.",
            "transferir a maior parte do componente para o AEE, onde a professora especializada poderá ensinar o conteúdo com ritmo individual e menos interferência da turma.",
            "manter os mesmos materiais e critérios de resposta usados com a turma, oferecendo tempo adicional apenas depois de confirmar formalmente o diagnóstico clínico.",
            "solicitar ao profissional de apoio que escreva as respostas ditadas pela aluna em todas as atividades, adotando essa solução como procedimento permanente.",
            "manter a estudante no currículo comum, oferecer apoio visual e formas acessíveis de registro, articular AEE e classe comum e monitorar os apoios."
        ],
        "correta": 4,
        "feedbackAcerto": "Você integrou os principais princípios do bloco: currículo comum, estudo de caso, potencialidades, acessibilidade, formas alternativas de expressão, colaboração e monitoramento.",
        "feedbackErro": "A resposta inclusiva não é separar, rebaixar o conteúdo ou tornar um apoio permanente sem avaliação. Ela parte das barreiras e potencialidades reais para organizar meios de participação e aprendizagem.",
        "analiseAlternativas": [
            "Incorreta. A dificuldade de registro não justifica redução automática dos conteúdos e objetivos.",
            "Incorreta. O AEE complementa e articula; não deve assumir a maior parte da escolarização de Geografia.",
            "Incorreta. Acessibilidade não depende de confirmação clínica e uniformidade pode manter a barreira de expressão.",
            "Incorreta. Escrita por terceiros pode ser apoio pontual em algumas situações, mas torná-la permanente sem avaliar alternativas reduz autonomia.",
            "Correta. A proposta responde diretamente às barreiras e potencialidades e preserva participação no currículo comum."
        ],
        "dicaBanca": "Questão-caso FGV: identifique a barreira concreta antes de escolher o apoio. Aqui, a compreensão existe; o gargalo é organização/registro.",
        "pegadinha": "Não reduza o objetivo quando a barreira está no meio de expressão.",
        "memorizar2026": "Caso integrado: potencialidade + barreira + apoio funcional + classe comum + AEE articulado + acompanhamento.",
        "fonte": "Decreto nº 12.686/2025; Decreto nº 12.773/2025; Inep 2026; FGV SEDUC-SP 2026."
    }
];

    window.seducEducacaoEspecialAeeDeficienciaIntelectual2026 = banco;
})();
