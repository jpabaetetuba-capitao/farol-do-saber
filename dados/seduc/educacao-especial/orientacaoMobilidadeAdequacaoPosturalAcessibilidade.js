/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 13: Orientação e Mobilidade, Adequação Postural e Acessibilidade Espacial
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 06/09/2026.
   Bases: LBI; Decreto 12.686/2025 (com 12.773/2025); Inep/MEC AEE;
   MEC Orientação e Mobilidade; MEC AEE Deficiência Física; FGV 2013/2024.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-OMA-001",
        "numero": 1,
        "subtopico": "Orientação e Mobilidade — finalidade",
        "dificuldade": "media",
        "pergunta": "No Atendimento Educacional Especializado, o ensino de técnicas de orientação e mobilidade para um estudante com deficiência visual tem como finalidade central",
        "alternativas": [
            "organizar o transporte do estudante entre sua residência e a escola, reduzindo a necessidade de deslocamentos autônomos nos espaços internos.",
            "treinar trajetos fixos previamente definidos pela equipe, evitando mudanças de rota para preservar a segurança durante toda a escolarização.",
            "favorecer o conhecimento dos espaços e a locomoção com segurança, independência e autonomia, usando estratégias adequadas ao perfil do estudante.",
            "substituir a exploração espontânea dos ambientes por condução de um adulto sempre que houver circulação fora da sala de recursos.",
            "ensinar exclusivamente o uso da bengala longa, pois os demais recursos sensoriais pertencem ao trabalho clínico e não ao contexto educacional no contexto escolar."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou a finalidade educacional da O&M: ampliar conhecimento espacial, segurança, independência e autonomia nos ambientes reais de vida e escolarização.",
        "feedbackErro": "Orientação e mobilidade não é transporte escolar nem treino mecânico de uma única rota ou recurso. O trabalho desenvolve estratégias para que o estudante compreenda os espaços e se desloque de modo cada vez mais autônomo.",
        "analiseAlternativas": [
            "Incorreta. Transporte escolar e O&M são coisas distintas; O&M desenvolve competências de orientação e deslocamento.",
            "Incorreta. Rotas podem ser treinadas, mas o objetivo não é criar dependência de trajetos imutáveis.",
            "Correta. Essa é a finalidade indicada pelo Inep/MEC para o ensino de técnicas de orientação e mobilidade no AEE.",
            "Incorreta. Condução permanente por adulto pode reduzir autonomia; apoio deve ser proporcional à necessidade.",
            "Incorreta. Bengala é um recurso importante, mas O&M também mobiliza conceitos espaciais, sentidos remanescentes, pistas ambientais e outras técnicas."
        ],
        "dicaBanca": "A FGV costuma separar 'mobilidade' de ideias próximas. Procure autonomia, segurança e conhecimento do ambiente — não transporte ou condução permanente.",
        "pegadinha": "Orientação e mobilidade não é sinônimo de bengala.",
        "memorizar2026": "O&M = conhecer o espaço + orientar-se + deslocar-se com segurança, independência e autonomia.",
        "fonte": "Inep/MEC — atividades do AEE, atualizado em 31/08/2026; MEC, Orientação e Mobilidade."
    },
    {
        "id": "SEDUC-EE-OMA-002",
        "numero": 2,
        "subtopico": "Técnica do guia vidente",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. Na técnica do guia vidente, o guia deve puxar a pessoa cega pelo antebraço para indicar com antecedência mudanças de direção.",
            "II. A pessoa cega pode segurar o braço do guia logo acima do cotovelo, mantendo posição que lhe permita perceber os movimentos corporais do guia.",
            "III. A técnica deve favorecer participação ativa da pessoa cega, que pode orientar o guia e assumir responsabilidade progressiva por sua segurança."
        ],
        "pergunta": "Considerando orientações clássicas de O&M adotadas em materiais do MEC, está correto o que se afirma em",
        "alternativas": [
            "Somente a afirmativa I está correta.",
            "II e III, apenas.",
            "I e II, apenas.",
            "I, II e III.",
            "III, apenas."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu que o guia vidente não arrasta nem conduz passivamente a pessoa cega. A técnica utiliza contato adequado e leitura dos movimentos do guia, preservando participação ativa.",
        "feedbackErro": "A afirmativa I é falsa porque puxar a pessoa pelo braço não corresponde à técnica adequada. II e III expressam a lógica de contato, informação corporal e participação ativa.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa I é falsa.",
            "Correta. II e III estão compatíveis com a técnica de guia vidente e com a promoção de autonomia.",
            "Incorreta. Inclui a afirmativa I, que descreve condução inadequada.",
            "Incorreta. A afirmativa I torna o conjunto errado.",
            "Incorreta. A afirmativa II também está correta."
        ],
        "dicaBanca": "A FGV/Vitória 2024 cobrou detalhes da técnica do guia vidente em formato V/F. Julgue postura e papel de cada pessoa com atenção.",
        "pegadinha": "Ajuda física não significa puxar, empurrar ou retirar o controle da pessoa cega.",
        "memorizar2026": "Guia vidente: informação corporal + contato adequado + pessoa cega ativa, não passiva.",
        "fonte": "MEC, Orientação e Mobilidade; FGV/Vitória 2024 — Educação Especial: Deficiência Visual."
    },
    {
        "id": "SEDUC-EE-OMA-003",
        "numero": 3,
        "subtopico": "Orientação espacial e pistas ambientais",
        "dificuldade": "media",
        "pergunta": "Durante o reconhecimento de um novo bloco escolar, o professor do AEE explora com o estudante texturas do piso, sons, mudanças de direção, portas, correntes de ar e pontos de referência. Essa prática",
        "alternativas": [
            "deve ser evitada, porque pistas ambientais variam e podem gerar dependência sensorial quando substituem a visão.",
            "é adequada apenas antes do estudante aprender a usar bengala, devendo ser abandonada após o domínio do recurso.",
            "corresponde a treino perceptivo sem relação com O&M, pois a orientação espacial se restringe à memorização de trajetos.",
            "integra o desenvolvimento da orientação espacial, porque diferentes pistas podem apoiar a construção de referências e decisões de deslocamento.",
            "é recomendada somente para baixa visão, já que na cegueira os dados auditivos e táteis não fornecem referências espaciais confiáveis durante os diferentes percursos da rotina escolar."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou que O&M utiliza informações do ambiente e sentidos remanescentes para construir referências espaciais e apoiar decisões durante o deslocamento.",
        "feedbackErro": "Pistas auditivas, táteis, proprioceptivas e ambientais fazem parte da orientação. Elas não são uma fase descartável nem se limitam a estudantes com baixa visão.",
        "analiseAlternativas": [
            "Incorreta. Pistas ambientais podem aumentar autonomia quando ensinadas de modo funcional.",
            "Incorreta. A bengala não substitui o uso de informações sensoriais e referências do ambiente.",
            "Incorreta. Orientação espacial envolve conceitos e interpretação do ambiente, não apenas decorar trajetos.",
            "Correta. A exploração de pistas e referências integra a construção de orientação espacial.",
            "Incorreta. Pessoas cegas também utilizam informações táteis, auditivas e outras pistas para se orientar."
        ],
        "dicaBanca": "Se o caso descreve exploração do ambiente, a FGV tende a cobrar a função pedagógica das pistas, e não uma oposição simplista entre sentidos.",
        "pegadinha": "Bengala e pistas ambientais se complementam.",
        "memorizar2026": "Orientação = interpretar referências do ambiente para saber onde estou, para onde vou e como chegar.",
        "fonte": "MEC, Orientação e Mobilidade — conhecimentos básicos para inclusão."
    },
    {
        "id": "SEDUC-EE-OMA-004",
        "numero": 4,
        "subtopico": "O&M — autonomia e superproteção",
        "dificuldade": "alta",
        "pergunta": "A família solicita que um funcionário acompanhe um adolescente cego de mãos dadas em todos os deslocamentos na escola, mesmo em rotas já dominadas, por receio de acidentes. A resposta pedagógica mais adequada é",
        "alternativas": [
            "manter o acompanhamento integral, pois a segurança deve prevalecer sobre qualquer objetivo de independência em ambiente escolar.",
            "avaliar as habilidades e os riscos, combinar apoios proporcionais e favorecer deslocamentos progressivamente autônomos nas rotas que o estudante domina.",
            "retirar todo apoio imediatamente, porque qualquer assistência humana interfere negativamente no desenvolvimento da orientação e mobilidade.",
            "substituir a circulação do estudante por atividades em um único ambiente, reduzindo exposições a situações imprevistas sem prejudicar o currículo.",
            "permitir autonomia apenas quando o estudante utilizar bengala longa, ainda que demonstre estratégias seguras com outros recursos e referências ambientais."
        ],
        "correta": 1,
        "feedbackAcerto": "Você equilibrou segurança e autonomia. Apoios devem ser definidos com base no funcionamento real, nos riscos e na progressão do estudante, sem criar dependência desnecessária.",
        "feedbackErro": "A resposta inclusiva não é superproteger nem retirar apoio de modo abrupto. O objetivo é avaliar, ensinar e graduar os apoios para ampliar segurança e autonomia.",
        "analiseAlternativas": [
            "Incorreta. Segurança não exige dependência permanente quando o estudante já possui habilidades funcionais.",
            "Correta. Apoio proporcional, ensino e progressão respeitam segurança e autonomia.",
            "Incorreta. Apoios humanos podem ser necessários em determinadas situações; autonomia não é abandono.",
            "Incorreta. Restringir ambientes reduz participação e oportunidades de aprendizagem.",
            "Incorreta. Bengala pode ser indicada, mas não é condição universal para qualquer deslocamento autônomo."
        ],
        "dicaBanca": "FGV gosta de distratores que parecem 'protetores'. Veja se a proteção elimina participação ou mantém dependência sem necessidade.",
        "pegadinha": "Segurança ≠ superproteção.",
        "memorizar2026": "Apoio certo é o necessário para avançar — nem ausência de ajuda, nem ajuda permanente sem avaliação.",
        "fonte": "MEC — O&M; LBI; Decreto 12.686/2025."
    },
    {
        "id": "SEDUC-EE-OMA-005",
        "numero": 5,
        "subtopico": "O&M no currículo e na rotina",
        "dificuldade": "alta",
        "pergunta": "Uma escola realiza O&M apenas em encontros isolados no AEE e não permite que as estratégias aprendidas sejam utilizadas nas mudanças de sala, biblioteca ou atividades externas. Essa organização é",
        "alternativas": [
            "adequada, porque O&M é conteúdo especializado e deve ser praticado somente sob supervisão direta do professor do AEE.",
            "adequada quando o estudante ainda está em processo de aprendizagem, pois generalizar técnicas antes do domínio completo aumenta o risco de erro nos diferentes ambientes da escola.",
            "inadequada apenas se a escola não possuir piso tátil, já que esse recurso é indispensável para transferir habilidades a outros espaços.",
            "adequada se a classe comum garantir conteúdos equivalentes, pois autonomia de deslocamento não integra os objetivos educacionais do AEE.",
            "inadequada, porque as habilidades devem ganhar funcionalidade nos espaços reais, com articulação entre AEE, escola e demais contextos de participação."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou a lógica de funcionalidade. Estratégias de O&M precisam apoiar participação real nos ambientes em que o estudante vive e aprende.",
        "feedbackErro": "Treinar apenas no AEE pode esvaziar a finalidade da O&M. As habilidades devem ser articuladas à rotina e aos espaços reais, com apoio e segurança adequados.",
        "analiseAlternativas": [
            "Incorreta. O AEE ensina e organiza estratégias, mas seu uso precisa alcançar os contextos reais.",
            "Incorreta. Generalização pode ser planejada de forma gradual; não depende de domínio absoluto prévio.",
            "Incorreta. Piso tátil pode ser importante, mas não é condição única para aplicar O&M.",
            "Incorreta. Deslocamento autônomo amplia acesso ao currículo, participação e vida escolar.",
            "Correta. Funcionalidade e generalização são centrais para que O&M produza autonomia e participação."
        ],
        "dicaBanca": "Desconfie de alternativas que confinam uma habilidade ao AEE. A FGV costuma valorizar uso funcional no contexto escolar.",
        "pegadinha": "Aprender uma técnica sem poder usá-la na rotina não garante inclusão.",
        "memorizar2026": "O&M deve sair do treino e chegar à vida escolar real.",
        "fonte": "Inep/MEC — AEE; MEC — O&M."
    },
    {
        "id": "SEDUC-EE-OMA-006",
        "numero": 6,
        "subtopico": "Adequação postural — conceito",
        "dificuldade": "media",
        "pergunta": "No campo da Tecnologia Assistiva aplicada à escola, a adequação postural relaciona-se principalmente à",
        "alternativas": [
            "prescrição de exercícios corretivos para normalizar padrões motores antes de o estudante participar das atividades acadêmicas.",
            "organização de posicionamento, mobiliário e apoios que favoreçam estabilidade, conforto e funcionalidade durante as atividades realizadas pelo estudante.",
            "substituição da cadeira de rodas por mobiliário escolar convencional sempre que o estudante conseguir permanecer sentado por alguns minutos.",
            "definição de uma postura única considerada ideal para todos os estudantes com deficiência física, independentemente da tarefa realizada.",
            "imobilização de segmentos corporais para evitar movimentos involuntários, ainda que esses movimentos possam ter função de acesso ou comunicação durante as atividades pedagógicas do turno."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu adequação postural como modalidade de Tecnologia Assistiva voltada à funcionalidade: posicionamento e recursos devem melhorar participação na tarefa, não aproximar o corpo de um padrão estético.",
        "feedbackErro": "Adequação postural não é normalização corporal nem imobilização por princípio. O foco está em estabilidade, conforto, alinhamento funcional e acesso às atividades.",
        "analiseAlternativas": [
            "Incorreta. Participação não deve ser adiada até uma suposta correção motora.",
            "Correta. Mobiliário, posicionamento e apoios são organizados para favorecer função e participação.",
            "Incorreta. A escolha do assento depende da funcionalidade e da atividade, não de aproximação ao mobiliário convencional.",
            "Incorreta. Adequação é individualizada e relacionada às demandas da pessoa e da tarefa.",
            "Incorreta. Movimentos funcionais não devem ser eliminados automaticamente; qualquer suporte precisa ser avaliado."
        ],
        "dicaBanca": "A FGV já cobrou adequação postural como ramo da Tecnologia Assistiva. Associe-a a avaliação, indicação de recursos e melhora da funcionalidade.",
        "pegadinha": "Postura 'bonita' não é o objetivo; postura funcional é.",
        "memorizar2026": "Adequação postural = posicionar e apoiar para ampliar função, conforto, acesso e participação.",
        "fonte": "FGV — Educação Especial: Deficiência Física, questão sobre adequação postural; MEC — AEE Deficiência Física."
    },
    {
        "id": "SEDUC-EE-OMA-007",
        "numero": 7,
        "subtopico": "Adequação postural — caso escolar",
        "dificuldade": "alta",
        "pergunta": "Um estudante que usa cadeira de rodas consegue responder oralmente às atividades, mas a mesa não permite aproximação adequada e seus braços ficam sem apoio para escrever ou manipular materiais. A primeira resposta da escola deve ser",
        "alternativas": [
            "reduzir a quantidade de atividades manuais, mantendo a mesa atual para preservar a organização da sala.",
            "solicitar que o profissional de apoio realize os registros escritos, evitando esforço postural durante as aulas.",
            "transferir o estudante para uma carteira na lateral da sala, onde exista espaço para a cadeira de rodas, mesmo sem superfície de trabalho adequada.",
            "avaliar posicionamento, altura, aproximação e apoios necessários, ajustando mobiliário e recursos para favorecer acesso funcional às tarefas.",
            "substituir atividades escritas por avaliações orais de forma permanente, já que a dificuldade motora torna desnecessária a adequação do mobiliário."
        ],
        "correta": 3,
        "feedbackAcerto": "Você tratou a barreira no ponto em que ela ocorre: mobiliário e posicionamento. A adequação deve permitir que o estudante use suas habilidades para participar diretamente.",
        "feedbackErro": "A barreira não está no conteúdo, mas na relação entre corpo, cadeira, mesa e tarefa. Reduzir atividades ou fazer pelo estudante mantém a barreira.",
        "analiseAlternativas": [
            "Incorreta. Reduzir tarefas não resolve a inadequação do mobiliário.",
            "Incorreta. Apoio humano não deve substituir uma ação que o estudante pode realizar com condições adequadas.",
            "Incorreta. Espaço para estacionar a cadeira não basta se não houver acesso funcional à superfície de trabalho.",
            "Correta. Avaliar posição e ajustar mobiliário/apoios atua diretamente na barreira funcional.",
            "Incorreta. Formatos orais podem ser úteis, mas não eliminam o dever de promover acesso às tarefas que envolvem escrita ou manipulação quando pertinentes."
        ],
        "dicaBanca": "Em caso de deficiência física, identifique se a dificuldade decorre da tarefa ou do acesso à tarefa. A FGV explora bastante essa diferença.",
        "pegadinha": "Trocar a atividade pode esconder uma barreira de mobiliário que deveria ser removida.",
        "memorizar2026": "Antes de reduzir a tarefa, ajuste o acesso: posição + mobiliário + apoio + recurso.",
        "fonte": "MEC — AEE Deficiência Física; LBI, acessibilidade e Tecnologia Assistiva."
    },
    {
        "id": "SEDUC-EE-OMA-008",
        "numero": 8,
        "subtopico": "Adequação postural — individualização",
        "dificuldade": "alta",
        "pergunta": "Sobre adequação postural na escola, assinale a afirmativa correta.",
        "alternativas": [
            "Deve ser definida a partir da funcionalidade do estudante, das tarefas e do ambiente, podendo exigir ajustes distintos ao longo da rotina escolar.",
            "Uma vez encontrada a posição mais estável, os mesmos apoios devem ser mantidos em todas as atividades para evitar variações posturais e facilitar a rotina de acompanhamento da equipe.",
            "É atribuição exclusiva da fisioterapia, cabendo à escola apenas cumprir a prescrição sem registrar efeitos sobre a participação pedagógica.",
            "Deve priorizar simetria corporal mesmo quando essa posição reduz alcance, comunicação ou acesso a materiais durante a atividade.",
            "É indicada somente quando há risco de deformidade ortopédica, não sendo recurso de acesso ao currículo ou de participação."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu o caráter funcional e contextual da adequação postural. A melhor posição pode variar conforme tarefa, ambiente, comunicação e forma de acesso.",
        "feedbackErro": "Adequação postural precisa dialogar com o que o estudante faz. Não é uma posição universal, exclusivamente clínica ou indicada apenas para prevenção de deformidades.",
        "analiseAlternativas": [
            "Correta. Funcionalidade, atividade e contexto orientam a escolha e a revisão dos apoios.",
            "Incorreta. Mudanças de tarefa podem exigir posições e apoios diferentes.",
            "Incorreta. Profissionais de saúde podem colaborar, mas a escola deve observar funcionalidade e participação no contexto pedagógico.",
            "Incorreta. Simetria não pode ser buscada às custas da função e da participação.",
            "Incorreta. Adequação postural também pode ampliar acesso, comunicação, manipulação e autonomia."
        ],
        "dicaBanca": "Distrator típico: transformar um recurso funcional em protocolo corporal rígido. A FGV tende a premiar a alternativa contextualizada.",
        "pegadinha": "Mais estável não significa melhor em qualquer tarefa.",
        "memorizar2026": "Postura adequada é a que funciona para aquela pessoa, naquela atividade e naquele contexto.",
        "fonte": "MEC — Tecnologia Assistiva e Educação Inclusiva; AEE Deficiência Física."
    },
    {
        "id": "SEDUC-EE-OMA-009",
        "numero": 9,
        "subtopico": "Adequação postural — trabalho colaborativo",
        "dificuldade": "media",
        "pergunta": "Na implantação de um novo sistema de assento para uma estudante com deficiência física, a atuação mais coerente com a perspectiva inclusiva é",
        "alternativas": [
            "seguir exclusivamente a indicação clínica, pois professores não devem interferir em decisões relacionadas ao posicionamento corporal.",
            "deixar que a família escolha o recurso com base no conforto percebido em casa e adotar a mesma configuração na escola.",
            "considerar apenas as medidas antropométricas, porque participação e desempenho acadêmico são consequências posteriores do posicionamento e na seleção do mobiliário escolar.",
            "aguardar a aquisição do equipamento definitivo antes de realizar qualquer adaptação provisória no ambiente escolar.",
            "articular estudante, família, escola e profissionais pertinentes, observando conforto, função, comunicação e participação nas atividades reais."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou o trabalho colaborativo. A adequação precisa combinar conhecimento técnico com observação pedagógica e participação da própria estudante.",
        "feedbackErro": "Uma indicação isolada não basta. O recurso deve ser acompanhado no contexto real, com informação de quem o utiliza e de quem observa sua funcionalidade nas tarefas.",
        "analiseAlternativas": [
            "Incorreta. Conhecimento clínico pode contribuir, mas não substitui observação pedagógica e funcional.",
            "Incorreta. A família é parceira, porém as demandas escolares também precisam ser consideradas.",
            "Incorreta. Medidas são importantes, mas a efetividade se verifica na atividade e participação.",
            "Incorreta. Adaptações provisórias seguras podem remover barreiras enquanto se busca solução mais estável.",
            "Correta. Decisão compartilhada e acompanhamento funcional favorecem melhor ajuste do recurso."
        ],
        "dicaBanca": "FGV costuma criar falsas exclusividades profissionais. Em TA, a lógica é interdisciplinar e centrada na funcionalidade da pessoa.",
        "pegadinha": "Prescrição técnica sem acompanhamento no contexto pode falhar.",
        "memorizar2026": "Adequação postural eficaz = técnica + estudante + tarefa + ambiente + acompanhamento.",
        "fonte": "LBI — Tecnologia Assistiva; MEC — AEE Deficiência Física."
    },
    {
        "id": "SEDUC-EE-OMA-010",
        "numero": 10,
        "subtopico": "Adequação postural — finalidade pedagógica",
        "dificuldade": "alta",
        "pergunta": "Uma adequação postural bem-sucedida deve ser avaliada, no contexto escolar, principalmente por sua capacidade de",
        "alternativas": [
            "manter o estudante na mesma posição durante todo o turno, reduzindo a necessidade de mudanças e transferências.",
            "aproximar o padrão corporal do estudante ao dos colegas, favorecendo aparência homogênea no ambiente da sala.",
            "favorecer desempenho funcional, acesso a materiais, comunicação, conforto e participação nas atividades propostas.",
            "diminuir a intervenção do professor do AEE, transferindo o acompanhamento para os profissionais responsáveis pelo equipamento.",
            "reduzir o número de adaptações curriculares, pois uma postura adequada elimina outras barreiras pedagógicas e comunicacionais."
        ],
        "correta": 2,
        "feedbackAcerto": "Você avaliou a adequação pelo que ela permite fazer. O critério é funcional: acesso, comunicação, conforto, manipulação, participação e autonomia.",
        "feedbackErro": "Adequação postural não busca imobilidade, aparência padronizada nem substitui outros apoios. Ela é uma parte do conjunto de acessibilidade.",
        "analiseAlternativas": [
            "Incorreta. Permanecer na mesma posição por todo o turno não é meta e pode ser inadequado.",
            "Incorreta. Inclusão não busca homogeneizar corpos.",
            "Correta. A efetividade se mede pela funcionalidade nas tarefas e pela participação.",
            "Incorreta. A escola continua acompanhando o impacto pedagógico do recurso.",
            "Incorreta. Outras barreiras podem permanecer mesmo com boa adequação postural."
        ],
        "dicaBanca": "Quando aparecer 'adequação postural', pergunte: o que o estudante consegue fazer melhor com esse posicionamento?",
        "pegadinha": "O recurso é meio, não fim.",
        "memorizar2026": "Avaliar postura = avaliar função e participação.",
        "fonte": "FGV — Deficiência Física; MEC — Tecnologia Assistiva."
    },
    {
        "id": "SEDUC-EE-OMA-011",
        "numero": 11,
        "subtopico": "Acessibilidade espacial — barreiras",
        "dificuldade": "media",
        "pergunta": "Uma escola possui entrada com rampa, mas o laboratório e a biblioteca ficam em pavimentos acessíveis somente por escadas. À luz da acessibilidade inclusiva, é correto afirmar que",
        "alternativas": [
            "a escola ainda apresenta barreiras arquitetônicas, pois a existência de uma entrada acessível não garante uso autônomo dos diferentes ambientes.",
            "a escola pode ser considerada acessível, porque a rota principal de entrada atende ao requisito de acesso ao prédio.",
            "a barreira deixa de existir se um funcionário estiver disponível para transportar o estudante nos deslocamentos entre os pavimentos.",
            "a acessibilidade está garantida se conteúdos do laboratório e da biblioteca forem oferecidos em atividades equivalentes na sala de aula e com acesso aos mesmos objetivos curriculares.",
            "a situação configura apenas barreira pedagógica, já que o problema ocorre durante atividades relacionadas ao currículo."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu que acessibilidade espacial envolve circulação e uso efetivo dos ambientes, e não apenas chegada ao edifício.",
        "feedbackErro": "Uma rampa isolada não transforma a escola inteira em acessível. Rotas e ambientes relevantes precisam permitir uso com segurança e autonomia.",
        "analiseAlternativas": [
            "Correta. Laboratório e biblioteca inacessíveis mantêm barreiras arquitetônicas à participação.",
            "Incorreta. A entrada acessível é necessária, mas não suficiente.",
            "Incorreta. Apoio humano não substitui a eliminação de barreiras arquitetônicas como regra.",
            "Incorreta. Atividade paralela não assegura acesso ao mesmo espaço e às experiências coletivas.",
            "Incorreta. A barreira descrita está na edificação, portanto é arquitetônica."
        ],
        "dicaBanca": "A FGV gosta de situações com uma adaptação visível que parece resolver tudo. Verifique a rota completa e o uso dos ambientes.",
        "pegadinha": "Ter rampa ≠ ser uma escola acessível.",
        "memorizar2026": "Acessibilidade espacial = entrar + circular + alcançar + usar + sair com segurança.",
        "fonte": "LBI, arts. 3º, 53 a 56; ABNT NBR 9050:2020."
    },
    {
        "id": "SEDUC-EE-OMA-012",
        "numero": 12,
        "subtopico": "Desenho Universal e adaptação razoável",
        "dificuldade": "alta",
        "pergunta": "De acordo com a Lei Brasileira de Inclusão, no planejamento de ambientes e serviços acessíveis, a relação entre desenho universal e adaptação razoável é melhor expressa por",
        "alternativas": [
            "adaptação razoável como regra geral, enquanto desenho universal é reservado a edifícios novos de grande circulação.",
            "desenho universal aplicado apenas ao mobiliário, e adaptação razoável utilizada para barreiras arquitetônicas e comunicacionais.",
            "adoção livre de qualquer um dos dois modelos, cabendo ao gestor escolher a solução de menor custo para cada situação.",
            "desenho universal como regra geral e, quando comprovadamente não puder ser empreendido, adoção de adaptação razoável.",
            "desenho universal restrito a pessoas com deficiência permanente, enquanto adaptação razoável atende pessoas com mobilidade temporariamente reduzida."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou a lógica da LBI: o desenho universal é a regra geral; quando não for possível implementá-lo, deve-se adotar adaptação razoável.",
        "feedbackErro": "A LBI não coloca os dois conceitos como opções equivalentes nem os separa por tipo de deficiência. Há prioridade normativa pelo desenho universal.",
        "analiseAlternativas": [
            "Incorreta. A ordem está invertida.",
            "Incorreta. Desenho universal não se restringe ao mobiliário.",
            "Incorreta. A escolha não é apenas econômica; deve observar os direitos e parâmetros de acessibilidade.",
            "Correta. Essa é a relação estabelecida pela LBI.",
            "Incorreta. Os conceitos não são divididos por permanência ou temporariedade da mobilidade."
        ],
        "dicaBanca": "Questão de literalidade: FGV pode trocar a ordem entre desenho universal e adaptação razoável.",
        "pegadinha": "Regra geral = desenho universal.",
        "memorizar2026": "LBI: desenho universal primeiro; adaptação razoável quando aquele comprovadamente não for possível.",
        "fonte": "Lei 13.146/2015, art. 55, §§ 1º e 2º."
    },
    {
        "id": "SEDUC-EE-OMA-013",
        "numero": 13,
        "subtopico": "Acessibilidade espacial — rota acessível",
        "dificuldade": "alta",
        "pergunta": "Em uma escola, a rota entre a sala de aula e o refeitório possui largura suficiente, mas é frequentemente obstruída por caixas, mesas móveis e materiais de limpeza. Nesse caso, a gestão deve compreender que",
        "alternativas": [
            "a rota permanece acessível porque suas dimensões construtivas atendem ao projeto aprovado e os obstáculos são temporários.",
            "a manutenção da faixa de circulação livre faz parte da acessibilidade no uso cotidiano, exigindo organização do espaço e retirada dos obstáculos.",
            "a responsabilidade é do estudante com mobilidade reduzida, que deve aprender rotas alternativas sempre que houver objetos no trajeto.",
            "a escola pode manter os objetos se houver profissional de apoio disponível para reorganizá-los no momento em que o estudante passar.",
            "a situação diz respeito apenas à segurança geral, sem relação com acessibilidade, já que não existe alteração permanente na edificação e pode ser tratada apenas com orientação verbal."
        ],
        "correta": 1,
        "feedbackAcerto": "Você percebeu que acessibilidade não termina no projeto. Uma rota construída corretamente pode tornar-se inacessível pelo modo como o espaço é usado e organizado.",
        "feedbackErro": "Barreiras também podem surgir na gestão cotidiana do ambiente. Obstáculos temporários podem impedir circulação e devem ser prevenidos.",
        "analiseAlternativas": [
            "Incorreta. Dimensão adequada não compensa obstrução da rota.",
            "Correta. Acessibilidade exige faixa de circulação efetivamente livre e utilizável.",
            "Incorreta. Não se transfere ao estudante o ônus de contornar barreiras criadas pela escola.",
            "Incorreta. Apoio humano eventual não substitui organização acessível do ambiente.",
            "Incorreta. Obstáculos no percurso interferem diretamente na acessibilidade e segurança."
        ],
        "dicaBanca": "FGV pode apresentar espaço 'tecnicamente adaptado' que é mal utilizado. Analise funcionamento real, não só obra.",
        "pegadinha": "Acessibilidade precisa ser mantida no cotidiano.",
        "memorizar2026": "Rota acessível precisa existir no projeto e permanecer livre no uso.",
        "fonte": "LBI; ABNT NBR 9050:2020; Programa Escola Acessível."
    },
    {
        "id": "SEDUC-EE-OMA-014",
        "numero": 14,
        "subtopico": "Sinalização e acessibilidade",
        "dificuldade": "media",
        "pergunta": "Ao reorganizar a sinalização interna da escola, a equipe decide combinar informações visuais, táteis e, quando pertinente, sonoras. Essa decisão é",
        "alternativas": [
            "inadequada, porque diferentes formas de sinalização podem produzir informações redundantes e dificultar a orientação das pessoas nos diferentes espaços de circulação da escola.",
            "adequada apenas em instituições especializadas, pois escolas comuns devem adotar sinalização única para todos os estudantes.",
            "inadequada quando existe piso tátil, já que a sinalização tátil no piso dispensa outras formas de informação ambiental.",
            "adequada somente em áreas de circulação externa, sendo desnecessária em biblioteca, sanitários e demais ambientes internos.",
            "compatível com acessibilidade, pois diferentes formas de informação podem reduzir barreiras e favorecer orientação e uso autônomo dos espaços."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu a lógica multimodal da acessibilidade. Sinalização visual, tátil e sonora pode atender diferentes necessidades e ampliar autonomia.",
        "feedbackErro": "Acessibilidade não exige um único canal de informação. Redundância planejada pode justamente ampliar compreensão e orientação para pessoas diferentes.",
        "analiseAlternativas": [
            "Incorreta. Diferentes canais podem ser complementares quando organizados de forma coerente.",
            "Incorreta. Escola comum também precisa ser acessível.",
            "Incorreta. Piso tátil não substitui toda a comunicação e sinalização ambiental.",
            "Incorreta. Ambientes internos também devem permitir identificação e uso acessível.",
            "Correta. A combinação de sinais pode reduzir barreiras sensoriais e informacionais."
        ],
        "dicaBanca": "Não confunda padronização de informação com uso de um único sentido. Acessibilidade pode ser multimodal.",
        "pegadinha": "Piso tátil não resolve toda a sinalização.",
        "memorizar2026": "Informação acessível pode combinar recursos visuais, táteis e sonoros.",
        "fonte": "LBI; Programa Escola Acessível; ABNT NBR 9050:2020."
    },
    {
        "id": "SEDUC-EE-OMA-015",
        "numero": 15,
        "subtopico": "Barreiras — classificação legal",
        "dificuldade": "alta",
        "pergunta": "Uma porta estreita impede a passagem de cadeira de rodas para a sala de leitura. Segundo a classificação de barreiras da LBI, trata-se predominantemente de barreira",
        "alternativas": [
            "atitudinal, porque a escola permitiu a permanência de uma condição que restringe participação.",
            "urbanística, pois toda barreira de circulação está situada no espaço de uso coletivo.",
            "arquitetônica, por estar localizada em elemento de uma edificação e impedir seu uso acessível.",
            "nos transportes, uma vez que a cadeira de rodas é um recurso de mobilidade utilizado para deslocamento.",
            "tecnológica, porque o problema poderia ser resolvido com equipamento ou recurso de Tecnologia Assistiva."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou a classificação legal: barreiras existentes em edifícios públicos ou privados são arquitetônicas.",
        "feedbackErro": "Embora uma situação possa envolver dimensões atitudinais ou de gestão, a barreira descrita está fisicamente na edificação: a porta.",
        "analiseAlternativas": [
            "Incorreta. Pode haver falha institucional, mas o obstáculo descrito é um elemento físico da edificação.",
            "Incorreta. Barreiras urbanísticas situam-se em vias e espaços públicos ou privados abertos ao público; aqui o foco é o edifício.",
            "Correta. Porta de edificação que impede passagem configura barreira arquitetônica.",
            "Incorreta. A categoria transporte refere-se aos sistemas e meios de transporte.",
            "Incorreta. A origem do impedimento é arquitetônica, ainda que recursos possam auxiliar."
        ],
        "dicaBanca": "FGV pode misturar as categorias legais. Localize onde a barreira está: via/espaço urbano, edifício, transporte, comunicação, atitude ou tecnologia.",
        "pegadinha": "O fato de envolver deslocamento não transforma toda barreira em 'transporte'.",
        "memorizar2026": "No edifício = barreira arquitetônica.",
        "fonte": "Lei 13.146/2015, art. 3º, IV."
    },
    {
        "id": "SEDUC-EE-OMA-016",
        "numero": 16,
        "subtopico": "Atualização normativa 2025/2026",
        "dificuldade": "alta",
        "pergunta": "Um material antigo da escola fundamenta a organização do AEE no Decreto nº 7.611/2011. Considerando a regulamentação federal vigente em 2026, a equipe deve saber que",
        "alternativas": [
            "o Decreto 7.611/2011 continua sendo a norma federal principal e o Decreto 12.686/2025 apenas criou uma rede de formação sem alterar o AEE e mantém a mesma regulamentação pedagógica do atendimento.",
            "o Decreto 7.611/2011 foi incorporado à LBI e passou a ter hierarquia de lei, mantendo integralmente suas regras sobre AEE.",
            "ambos os decretos estão vigentes e cabe a cada rede escolher qual deles utilizar como fundamento de sua política de Educação Especial.",
            "o Decreto 12.686/2025 aplica-se somente ao ensino superior, enquanto o Decreto 7.611/2011 continua disciplinando a educação básica.",
            "o Decreto 12.686/2025 instituiu a PNEEI e revogou expressamente o Decreto 7.611/2011, devendo a leitura atual considerar também suas alterações posteriores."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou uma atualização normativa importante: o art. 23 do Decreto 12.686/2025 revogou expressamente o Decreto 7.611/2011.",
        "feedbackErro": "Em 2026, não se deve tratar o Decreto 7.611/2011 como norma federal vigente do AEE. O novo marco é o Decreto 12.686/2025, com as alterações do Decreto 12.773/2025.",
        "analiseAlternativas": [
            "Incorreta. O Decreto 7.611/2011 foi revogado.",
            "Incorreta. Decreto não foi transformado em lei nem incorporado à LBI.",
            "Incorreta. Não existe opção entre os dois decretos como normas vigentes concorrentes.",
            "Incorreta. O Decreto 12.686/2025 alcança a política nacional de Educação Especial Inclusiva em todos os níveis, etapas e modalidades.",
            "Correta. A revogação expressa está no art. 23 do Decreto 12.686/2025."
        ],
        "dicaBanca": "Norma antiga em apostila é uma pegadinha provável. Em atualização legislativa, confira revogações expressas.",
        "pegadinha": "Decreto 7.611/2011 = referência histórica, não base federal vigente em 2026.",
        "memorizar2026": "PNEEI atual: Decreto 12.686/2025 + alterações do Decreto 12.773/2025.",
        "fonte": "Decreto 12.686/2025, art. 23; Decreto 12.773/2025.",
        "atualizacao2026": "O mapa visual do Bloco 13 menciona o Decreto 7.611/2011 na base legal; considere-o revogado pelo Decreto 12.686/2025."
    },
    {
        "id": "SEDUC-EE-OMA-017",
        "numero": 17,
        "subtopico": "Tecnologia Assistiva — mobilidade e postura",
        "dificuldade": "media",
        "pergunta": "Assinale a opção que apresenta exemplos compatíveis com modalidades de Tecnologia Assistiva relevantes ao tema deste bloco.",
        "alternativas": [
            "orientação e mobilidade, adequação postural, mobiliário adaptado e recursos que ampliem funcionalidade e participação.",
            "avaliação classificatória, reforço escolar, adequação postural e transporte coletivo convencional.",
            "currículo paralelo, bengala longa, terapia corretiva e redução permanente de objetivos acadêmicos.",
            "apoio pedagógico genérico, diagnóstico clínico, sinalização comum e exercícios de memorização espacial.",
            "segregação por nível de mobilidade, cadeira de rodas, treinamento motor prévio e substituição da classe comum com acompanhamento especializado da equipe escolar."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu modalidades e recursos de TA diretamente vinculados à mobilidade, posicionamento e funcionalidade.",
        "feedbackErro": "Tecnologia Assistiva não inclui práticas segregadoras, diagnóstico, reforço ou redução curricular. Ela reúne recursos, estratégias, metodologias, práticas e serviços para ampliar funcionalidade e participação.",
        "analiseAlternativas": [
            "Correta. Todos os elementos apresentados podem integrar ações de TA na escola.",
            "Incorreta. Avaliação classificatória e reforço escolar não são modalidades de TA.",
            "Incorreta. Currículo paralelo e redução de objetivos não são TA, e 'terapia corretiva' não define recurso educacional de acessibilidade.",
            "Incorreta. Diagnóstico clínico e exercícios comuns não são, por si, TA.",
            "Incorreta. Segregação e substituição da classe comum contrariam a finalidade inclusiva da TA."
        ],
        "dicaBanca": "A FGV já cobrou categorias de Tecnologia Assistiva e adequação postural. Não confunda serviço de acessibilidade com qualquer apoio escolar.",
        "pegadinha": "Nem toda intervenção feita com estudante com deficiência é Tecnologia Assistiva.",
        "memorizar2026": "TA promove funcionalidade relacionada à atividade e participação.",
        "fonte": "LBI, art. 3º, III; MEC — Tecnologia Assistiva e Educação Inclusiva; FGV — Deficiência Física."
    },
    {
        "id": "SEDUC-EE-OMA-018",
        "numero": 18,
        "subtopico": "Trabalho multiprofissional e papel pedagógico",
        "dificuldade": "alta",
        "pergunta": "Um profissional de saúde recomenda ajustes de posicionamento para um estudante. Na escola, a equipe percebe que uma das configurações dificulta o uso do comunicador e o alcance dos materiais. A conduta mais adequada é",
        "alternativas": [
            "manter a configuração prescrita sem alterações, porque recomendações de saúde prevalecem sobre observações pedagógicas.",
            "interromper o uso de qualquer recurso postural e aguardar nova avaliação clínica antes de o estudante retomar as atividades.",
            "adotar a configuração somente durante avaliações, mantendo a postura habitual no restante do turno para evitar conflito entre equipes.",
            "discutir as observações com estudante, família e profissionais envolvidos, buscando ajuste que preserve segurança e amplie funcionalidade nas tarefas.",
            "substituir o comunicador por respostas de sim/não feitas pelo profissional de apoio, evitando que a posição corporal interfira no planejamento durante as atividades coletivas da turma."
        ],
        "correta": 3,
        "feedbackAcerto": "Você articulou conhecimentos técnicos e pedagógicos. A efetividade do posicionamento deve ser observada nas atividades reais e discutida de forma colaborativa.",
        "feedbackErro": "A escola não deve ignorar recomendações técnicas, mas também não pode desconsiderar efeitos funcionais observados no contexto. O caminho é articulação e ajuste colaborativo.",
        "analiseAlternativas": [
            "Incorreta. Recomendações devem dialogar com a funcionalidade real no contexto escolar.",
            "Incorreta. Interromper toda ação pode gerar perda de participação sem necessidade.",
            "Incorreta. Uso episódico não resolve a barreira funcional do cotidiano.",
            "Correta. A decisão compartilhada permite integrar segurança, comunicação, acesso e participação.",
            "Incorreta. Fazer a comunicação pelo estudante reduz autoria e não resolve a barreira postural."
        ],
        "dicaBanca": "FGV costuma opor 'exclusividade profissional' a trabalho articulado. Na inclusão, conhecimentos se complementam.",
        "pegadinha": "Interdisciplinaridade não significa hierarquia automática de uma área sobre outra.",
        "memorizar2026": "Observe no contexto, registre e articule ajustes com quem participa da decisão.",
        "fonte": "LBI; MEC — AEE Deficiência Física; Decreto 12.686/2025."
    },
    {
        "id": "SEDUC-EE-OMA-019",
        "numero": 19,
        "subtopico": "Participação do estudante e família",
        "dificuldade": "media",
        "pergunta": "Ao planejar mudanças de rota, mobiliário e recursos de mobilidade para uma estudante, a escola deve",
        "alternativas": [
            "definir o plano internamente e apresentar à família apenas depois da instalação, evitando interferências em decisões técnicas ao longo de todo o processo de implementação.",
            "considerar preferências, experiências e respostas funcionais da estudante, articulando família e profissionais quando necessário.",
            "priorizar a opinião da família sobre a da estudante, pois responsáveis legais conhecem melhor os riscos do ambiente escolar.",
            "escolher os recursos mais padronizados pela rede, mesmo que a estudante demonstre maior autonomia com outra solução disponível.",
            "condicionar a participação da estudante à idade mínima estabelecida para decisões de acessibilidade e Tecnologia Assistiva."
        ],
        "correta": 1,
        "feedbackAcerto": "Você colocou a estudante como participante da decisão. Acessibilidade e TA precisam considerar preferências, funcionalidade e contextos, com diálogo familiar e profissional.",
        "feedbackErro": "Planejamento inclusivo não é algo feito sobre o estudante sem ele. A participação deve ser garantida conforme suas possibilidades, sem automatizar prioridade de família, rede ou profissional.",
        "analiseAlternativas": [
            "Incorreta. A família e a estudante podem oferecer informações essenciais antes da implementação.",
            "Correta. Essa abordagem combina protagonismo, funcionalidade e colaboração.",
            "Incorreta. A família é parceira, mas não elimina a voz e o protagonismo da estudante.",
            "Incorreta. Padronização não deve prevalecer sobre adequação funcional.",
            "Incorreta. Não existe regra geral que exclua crianças ou adolescentes da participação em decisões que lhes dizem respeito."
        ],
        "dicaBanca": "Quando a alternativa transforma o estudante em receptor passivo do recurso, desconfie.",
        "pegadinha": "Planejamento individualizado não é planejamento sem o indivíduo.",
        "memorizar2026": "Nada sobre funcionalidade deve ignorar a experiência de quem usa o recurso.",
        "fonte": "Decreto 12.686/2025 — participação no estudo de caso; LBI."
    },
    {
        "id": "SEDUC-EE-OMA-020",
        "numero": 20,
        "subtopico": "Avaliação funcional e acompanhamento",
        "dificuldade": "alta",
        "pergunta": "Após instalar uma mesa adaptada e reorganizar uma rota de circulação, a equipe deseja avaliar se as medidas funcionaram. O indicador mais coerente é",
        "alternativas": [
            "o custo final das adaptações em comparação com o orçamento inicialmente aprovado pela rede.",
            "o número de recursos adquiridos, pois maior quantidade de equipamentos indica maior nível de acessibilidade.",
            "a redução da necessidade de planejamento individual, já que adaptações físicas eficazes dispensam outros apoios e recursos de apoio individualizados no cotidiano.",
            "a semelhança visual do mobiliário adaptado com o mobiliário utilizado pelos demais estudantes da turma.",
            "a melhora observada no acesso, segurança, autonomia, desempenho funcional e participação da estudante nas atividades reais."
        ],
        "correta": 4,
        "feedbackAcerto": "Você avaliou resultados funcionais, não quantidade ou aparência. A medida é eficaz quando reduz barreiras e melhora participação nas atividades relevantes.",
        "feedbackErro": "Acessibilidade não se mede pelo número de recursos, custo, estética ou desaparecimento de outros apoios. É preciso observar efeitos concretos na vida escolar.",
        "analiseAlternativas": [
            "Incorreta. Custo é dado de gestão, não indicador suficiente de efetividade funcional.",
            "Incorreta. Quantidade de recursos não garante adequação.",
            "Incorreta. Uma barreira removida não elimina automaticamente outras necessidades.",
            "Incorreta. Similaridade estética não define funcionalidade.",
            "Correta. Resultados devem ser observados na atividade, autonomia, segurança e participação."
        ],
        "dicaBanca": "FGV costuma trocar resultado pedagógico por indicador administrativo. Pergunte: o que mudou para o estudante?",
        "pegadinha": "Mais equipamento não significa mais acessibilidade.",
        "memorizar2026": "Avaliar acessibilidade = verificar se a barreira realmente diminuiu na prática.",
        "fonte": "LBI; Decreto 12.686/2025; princípios de Tecnologia Assistiva."
    },
    {
        "id": "SEDUC-EE-OMA-021",
        "numero": 21,
        "subtopico": "Caso integrado — deficiência visual e física",
        "dificuldade": "alta",
        "pergunta": "Um estudante com baixa visão e mobilidade reduzida precisa deslocar-se até o laboratório, cuja rota possui degrau isolado e sinalização de baixo contraste. A intervenção mais inclusiva é",
        "alternativas": [
            "transferir as aulas práticas para a sala comum somente para esse estudante, preservando a organização física do laboratório para os demais.",
            "manter o trajeto e garantir acompanhamento por profissional de apoio, que deverá avisar verbalmente sobre o degrau e conduzir o estudante.",
            "atuar sobre a rota e a sinalização, organizar recursos de orientação adequados e avaliar com o estudante os apoios necessários para uso autônomo do laboratório.",
            "priorizar recurso óptico para baixa visão, pois a melhora do acesso visual tende a compensar a barreira de circulação existente no trajeto.",
            "aguardar reforma estrutural completa antes de permitir participação no laboratório, evitando soluções provisórias que possam diferenciar o estudante e preservar a segurança institucional durante o período."
        ],
        "correta": 2,
        "feedbackAcerto": "Você integrou acessibilidade espacial, O&M e individualização. A solução atua nas barreiras do ambiente e nos apoios necessários sem retirar o estudante da experiência comum.",
        "feedbackErro": "A intervenção inclusiva não transfere a atividade, mantém a barreira com ajuda humana nem aposta em um único recurso sensorial. É preciso atuar no ambiente e no apoio funcional.",
        "analiseAlternativas": [
            "Incorreta. Transferir a atividade cria experiência paralela e preserva a barreira.",
            "Incorreta. Apoio humano pode ser útil, mas não substitui a remoção da barreira de circulação e informação.",
            "Correta. Combina remoção de barreiras, orientação e avaliação individualizada.",
            "Incorreta. Recurso óptico não elimina um degrau nem garante acessibilidade da rota.",
            "Incorreta. Soluções seguras e razoáveis podem ser implementadas enquanto mudanças estruturais maiores são planejadas."
        ],
        "dicaBanca": "Em casos integrados, prefira alternativas que atuem simultaneamente no ambiente e nos apoios — sem retirar o aluno da atividade.",
        "pegadinha": "Compensar a barreira no estudante é diferente de remover a barreira.",
        "memorizar2026": "Inclusão eficaz combina acessibilidade do ambiente + recursos + autonomia + participação.",
        "fonte": "LBI; MEC O&M; Programa Escola Acessível."
    },
    {
        "id": "SEDUC-EE-OMA-022",
        "numero": 22,
        "subtopico": "FGV — O&M em V/F",
        "dificuldade": "alta",
        "afirmacoes": [
            "( ) O&M pode utilizar a técnica do guia vidente em ambientes internos e externos.",
            "( ) O domínio da bengala longa torna desnecessário o uso de pistas táteis, auditivas e referências ambientais.",
            "( ) O ensino deve considerar formação de conceitos e uso funcional dos sentidos remanescentes."
        ],
        "pergunta": "Assinale a sequência correta.",
        "alternativas": [
            "V – F – V.",
            "F – V – V.",
            "V – V – F.",
            "F – F – V.",
            "V – F – F."
        ],
        "correta": 0,
        "feedbackAcerto": "Você acertou a sequência: guia vidente pode integrar O&M, a bengala não elimina outras pistas e a orientação envolve conceitos e sentidos remanescentes.",
        "feedbackErro": "O segundo item é falso: O&M combina estratégias e informações ambientais; a bengala é um recurso importante, não um substituto de toda percepção e orientação.",
        "analiseAlternativas": [
            "Correta. A sequência é V – F – V.",
            "Incorreta. O primeiro item é verdadeiro e o segundo é falso.",
            "Incorreta. O segundo item é falso e o terceiro é verdadeiro.",
            "Incorreta. O primeiro item também é verdadeiro.",
            "Incorreta. O terceiro item é verdadeiro."
        ],
        "dicaBanca": "A FGV/Vitória 2024 usou V/F para procedimentos de O&M. Não julgue a técnica isoladamente; observe sua finalidade.",
        "pegadinha": "Uma tecnologia não apaga outras estratégias de orientação.",
        "memorizar2026": "O&M é um sistema de estratégias, não um equipamento único.",
        "fonte": "FGV/Vitória 2024; MEC — Orientação e Mobilidade."
    },
    {
        "id": "SEDUC-EE-OMA-023",
        "numero": 23,
        "subtopico": "Rotas de fuga e emergência",
        "dificuldade": "alta",
        "pergunta": "Sobre acessibilidade e segurança em situações de emergência, assinale a afirmativa correta.",
        "alternativas": [
            "rotas de fuga e saídas de emergência também devem observar padrões de acessibilidade para permitir saída segura de pessoas com deficiência ou mobilidade reduzida.",
            "as exigências de acessibilidade podem ser suspensas em rotas de emergência, porque a evacuação depende prioritariamente de assistência humana.",
            "basta que exista uma saída acessível em qualquer ponto da edificação, ainda que não esteja conectada às áreas de uso dos estudantes por rota acessível.",
            "em emergência, a acessibilidade se restringe à sinalização sonora, pois alterações arquitetônicas podem reduzir a velocidade de evacuação dos demais usuários em todos os ambientes de uso coletivo da escola.",
            "a responsabilidade por evacuação acessível é exclusiva da defesa civil e do corpo de bombeiros, não integrando o planejamento cotidiano da escola."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu que acessibilidade também se aplica à segurança e à evacuação. A LBI prevê rotas de fuga e saídas de emergência acessíveis.",
        "feedbackErro": "Emergência não suspende o direito à acessibilidade. Planejamento de segurança precisa contemplar pessoas com diferentes formas de mobilidade e comunicação.",
        "analiseAlternativas": [
            "Correta. A LBI exige acessibilidade em rotas de fuga e saídas de emergência nos locais abrangidos pela norma.",
            "Incorreta. Assistência humana pode integrar o plano, mas não elimina a exigência de acessibilidade.",
            "Incorreta. A saída precisa ser alcançável por percurso acessível e funcional.",
            "Incorreta. Comunicação em emergência pode exigir múltiplos recursos e acessibilidade arquitetônica.",
            "Incorreta. A escola também deve planejar condições seguras de uso e saída."
        ],
        "dicaBanca": "FGV pode testar acessibilidade em cenários de segurança. 'Emergência' não é autorização para abandonar o desenho inclusivo.",
        "pegadinha": "Acessibilidade vale também para sair do prédio.",
        "memorizar2026": "Entrar, usar e sair com segurança fazem parte da acessibilidade.",
        "fonte": "LBI, arts. 53 a 56; ABNT NBR 9050:2020 — acessibilidade e segurança em edificações."
    },
    {
        "id": "SEDUC-EE-OMA-024",
        "numero": 24,
        "subtopico": "Programa Escola Acessível",
        "dificuldade": "media",
        "pergunta": "Entre ações compatíveis com a promoção de acessibilidade física e de recursos em escolas públicas, encontram-se",
        "alternativas": [
            "construção de salas especiais separadas, instalação de catracas de controle e compra de mobiliário padronizado para reduzir diferenças entre estudantes.",
            "adequação de rampas e sanitários, alargamento de passagens, sinalização acessível, mobiliário acessível e aquisição de recursos de Tecnologia Assistiva.",
            "reforma apenas da sala de recursos multifuncionais, porque os demais espaços da escola pertencem à escolarização comum e não ao campo da acessibilidade.",
            "contratação permanente de pessoas para transportar estudantes, substituindo intervenções arquitetônicas quando o custo da obra for mais elevado.",
            "aquisição de equipamentos de alta tecnologia como prioridade absoluta, mesmo quando barreiras simples de circulação e mobiliário permanecem sem solução."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou um conjunto coerente de ações de acessibilidade escolar: adequação arquitetônica, sinalização, mobiliário e Tecnologia Assistiva.",
        "feedbackErro": "Acessibilidade escolar não se reduz à sala de recursos nem se substitui por transporte humano. O planejamento deve atuar nas barreiras concretas da escola.",
        "analiseAlternativas": [
            "Incorreta. Segregação e padronização de mobiliário não são objetivos de acessibilidade.",
            "Correta. Essas ações aparecem entre as finalidades do Programa Escola Acessível e de normas do FNDE.",
            "Incorreta. Todos os ambientes de uso escolar podem precisar de acessibilidade.",
            "Incorreta. Apoio humano não substitui, como regra, adequações arquitetônicas necessárias.",
            "Incorreta. O grau de tecnologia deve responder à necessidade, e barreiras simples não devem ser ignoradas."
        ],
        "dicaBanca": "FGV pode misturar ação de acessibilidade com medida assistencial ou segregadora. Observe se a alternativa remove barreiras do ambiente comum.",
        "pegadinha": "Escola Acessível não é apenas Sala de Recursos acessível.",
        "memorizar2026": "Acessibilidade escolar envolve arquitetura + mobiliário + sinalização + recursos/TA.",
        "fonte": "FNDE — Programa Escola Acessível; Resolução CD/FNDE nº 27/2011."
    },
    {
        "id": "SEDUC-EE-OMA-025",
        "numero": 25,
        "subtopico": "Caso integrado FGV",
        "dificuldade": "alta",
        "pergunta": "Uma estudante usa cadeira de rodas e comunica-se por prancha fixada à mesa. Após mudança de sala, a nova carteira não permite aproximação frontal, a prancha fica fora de alcance e a rota até o quadro tem passagem estreita. A melhor conduta é",
        "alternativas": [
            "manter a estudante próxima à porta e solicitar ao profissional de apoio que movimente a prancha e entregue materiais sempre que necessário.",
            "priorizar a comunicação por perguntas de sim/não até que a escola consiga adquirir mobiliário definitivo e ampliar a passagem.",
            "reduzir atividades que exijam deslocamento ou escolha de símbolos, preservando objetivos conceituais enquanto as barreiras físicas permanecerem.",
            "avaliar rota, mobiliário, posicionamento e acesso à prancha, implementar ajustes seguros e acompanhar se as mudanças ampliam autonomia e participação.",
            "transferir temporariamente a estudante para o AEE durante atividades que dependam do quadro ou de comunicação mais complexa, evitando exposição às barreiras."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reuniu os três eixos do bloco: acessibilidade espacial, adequação postural e funcionalidade do recurso de comunicação. A solução remove barreiras e verifica resultados.",
        "feedbackErro": "Fazer pelo estudante, restringir comunicação, reduzir atividades ou retirá-lo da turma mantém as barreiras. O caso exige intervenção no ambiente e no acesso funcional.",
        "analiseAlternativas": [
            "Incorreta. Apoio humano não deve assumir tarefas que podem ser realizadas com ambiente e recurso adequados.",
            "Incorreta. Reduzir a comunicação até uma compra futura limita participação e autoria.",
            "Incorreta. Preservar objetivo não justifica aceitar barreiras de acesso quando elas podem ser enfrentadas.",
            "Correta. A alternativa atua nas barreiras, no posicionamento e no recurso, com acompanhamento funcional.",
            "Incorreta. AEE complementa e apoia; não substitui participação na classe comum diante de barreiras escolares."
        ],
        "dicaBanca": "Caso FGV forte: a correta geralmente não 'compensa' a barreira pelo aluno; ela reorganiza ambiente e apoios para que ele participe.",
        "pegadinha": "Profissional de apoio não é substituto de acessibilidade.",
        "memorizar2026": "Pergunte sempre: a solução aumenta autoria e participação ou apenas faz a atividade acontecer apesar da barreira?",
        "fonte": "LBI; Decreto 12.686/2025; MEC — TA/AEE; princípios de acessibilidade espacial."
    }
];

    window.seducEducacaoEspecialOrientacaoMobilidadePosturalAcessibilidade2026 = banco;
})();
