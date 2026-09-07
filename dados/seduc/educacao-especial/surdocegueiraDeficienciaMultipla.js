/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 11: Surdocegueira e Deficiência Múltipla
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 05/09/2026.
   Bases: LDB; LBI; Decreto 12.686/2025; Portaria MEC 421/2026;
   Lei 14.951/2024; Lei 15.388/2026; Inep/MEC/IBC; FGV SEDUC-AM 2014.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-SDM-001",
        "numero": 1,
        "subtopico": "Surdocegueira — conceito",
        "dificuldade": "alta",
        "pergunta": "Uma equipe escolar descreve a surdocegueira apenas como a soma de uma deficiência visual com uma deficiência auditiva e decide aplicar, separadamente, estratégias destinadas a estudantes cegos e a estudantes surdos. À luz da abordagem educacional específica da surdocegueira, essa decisão é",
        "alternativas": [
            "adequada quando a escola dispõe simultaneamente de professor de Braille e intérprete de Libras, pois a combinação desses dois serviços cobre necessariamente todas as demandas do estudante, desde que a medida seja registrada no planejamento individualizado e revista periodicamente pela equipe escolar.",
            "adequada nos casos pós-linguísticos, porque a existência prévia de uma língua elimina a necessidade de estratégias próprias de comunicação e acesso à informação.",
            "inadequada somente quando não existe resíduo visual ou auditivo funcional, hipótese em que a escola deve priorizar recursos exclusivamente táteis.",
            "inadequada, pois a surdocegueira é uma condição singular, com efeitos próprios sobre comunicação, acesso à informação, mobilidade e interação, exigindo avaliação e estratégias individualizadas.",
            "adequada se o estudante também estiver registrado como pessoa com deficiência múltipla, já que essa classificação substitui a análise funcional específica da surdocegueira."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu o ponto central: surdocegueira não deve ser tratada como simples adição de duas deficiências. A combinação sensorial produz necessidades próprias e requer leitura funcional do estudante.",
        "feedbackErro": "A resposta correta rejeita a soma mecânica de estratégias. O perfil comunicativo, os resíduos sensoriais, a história linguística, a mobilidade e os apoios necessários precisam ser analisados de forma integrada.",
        "analiseAlternativas": [
            "Incorreta. Braille e Libras podem ser úteis, mas não cobrem automaticamente todas as necessidades nem dispensam adaptação ao perfil do estudante. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. A história linguística influencia as estratégias, mas não elimina as especificidades da surdocegueira.",
            "Incorreta. Recursos táteis podem ser centrais, porém a escolha depende do funcionamento sensorial e comunicativo individual.",
            "Correta. A surdocegueira é compreendida educacionalmente como condição única, com necessidades próprias de comunicação, informação e mobilidade.",
            "Incorreta. Registro cadastral não substitui avaliação funcional nem transforma surdocegueira em mera deficiência múltipla."
        ],
        "dicaBanca": "FGV já cobrou a ideia de adaptação da comunicação às condições específicas da pessoa surdocega. Evite respostas que apenas somem serviços.",
        "pegadinha": "Surdocegueira ≠ “surdez + cegueira” tratadas separadamente.",
        "memorizar2026": "Surdocegueira: condição única; planejamento integrado e individualizado.",
        "fonte": "MEC — Fascículo 5 Surdocegueira e Deficiência Múltipla; FGV/SEDUC-AM 2014; orientações educacionais atuais."
    },
    {
        "id": "SEDUC-EE-SDM-002",
        "numero": 2,
        "subtopico": "Surdocegueira — pré e pós-linguística",
        "dificuldade": "media",
        "pergunta": "A distinção entre surdocegueira pré-linguística e pós-linguística é pedagogicamente relevante porque considera principalmente",
        "alternativas": [
            "o grau audiométrico apresentado no momento da matrícula e a possibilidade de uso de aparelho de amplificação sonora individual.",
            "o momento em que a surdocegueira ocorre em relação à aquisição de uma língua, o que influencia comunicação, mediação e planejamento educacional.",
            "a idade cronológica do estudante e o nível de escolarização concluído antes do ingresso no atendimento educacional especializado.",
            "a existência de cegueira total ou baixa visão associada, independentemente da experiência linguística anterior da pessoa.",
            "a opção da família por Libras, português oral ou comunicação alternativa, sendo essa escolha o único critério para a classificação, quando houver concordância da família e acompanhamento contínuo dos efeitos pedagógicos ao longo do período letivo."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente o critério educacional mais importante dessa distinção: a experiência linguística anterior ou não à surdocegueira.",
        "feedbackErro": "Pré-linguística e pós-linguística se referem à relação entre o aparecimento da condição e a aquisição de uma língua. Isso repercute nas formas de comunicação e no planejamento, sem reduzir a pessoa a idade ou grau sensorial.",
        "analiseAlternativas": [
            "Incorreta. Audiometria pode subsidiar apoios, mas não define a classificação pré/pós-linguística.",
            "Correta. A relação temporal com a aquisição de uma língua orienta a compreensão do repertório comunicativo existente.",
            "Incorreta. Idade e escolaridade podem influenciar o contexto, mas não constituem o critério central dessa classificação.",
            "Incorreta. O grau visual isolado não define a história linguística.",
            "Incorreta. Preferências comunicativas devem ser respeitadas, porém não constituem o único critério classificatório. A condição adicional não corrige o erro central da alternativa."
        ],
        "dicaBanca": "Quando a banca mencionar “antes ou depois da aquisição da linguagem”, pense em pré-linguística x pós-linguística.",
        "pegadinha": "Não confunda classificação linguística com graduação clínica da perda sensorial.",
        "memorizar2026": "Pré-linguística: antes da aquisição de uma língua; pós-linguística: depois.",
        "fonte": "MEC/IBC — formação em surdocegueira; materiais de Educação Especial."
    },
    {
        "id": "SEDUC-EE-SDM-003",
        "numero": 3,
        "subtopico": "Comunicação — individualização",
        "dificuldade": "alta",
        "pergunta": "Uma estudante surdocega utiliza Libras em campo reduzido e possui resíduo visual funcional. Ao chegar à escola, a equipe decide substituí-la imediatamente por Libras tátil, por considerar que toda pessoa surdocega deve utilizar comunicação tátil. A conduta mais adequada é",
        "alternativas": [
            "manter a decisão, porque a comunicação tátil é obrigatória na surdocegueira e deve prevalecer mesmo quando há resíduo visual funcional.",
            "adotar exclusivamente a língua portuguesa escrita ampliada, pois o uso simultâneo de duas formas de comunicação tende a dificultar a aprendizagem.",
            "utilizar Libras tátil apenas durante avaliações, mantendo comunicação oral nas demais atividades para ampliar a autonomia comunicativa da estudante.",
            "solicitar previamente laudo clínico que indique a modalidade de comunicação e somente então definir as estratégias educacionais que serão utilizadas, desde que a escola documente a decisão no estudo de caso e monitore sua efetividade nas atividades da turma.",
            "preservar e avaliar a forma de comunicação funcional da estudante, ajustando distância, campo de sinalização, contraste e outros apoios conforme suas respostas e necessidades."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou a individualização da comunicação. Na surdocegueira, a modalidade precisa corresponder ao perfil sensorial, linguístico e funcional da pessoa.",
        "feedbackErro": "Não existe uma modalidade única obrigatória. Libras tátil, campo reduzido, alfabeto manual tátil, escrita ampliada, Braille, Tadoma ou outras formas podem ser combinadas conforme o estudante.",
        "analiseAlternativas": [
            "Incorreta. A comunicação tátil é uma possibilidade, não uma imposição para todos.",
            "Incorreta. A escolha deve ampliar canais de acesso, não eliminar recursos úteis sem avaliação funcional.",
            "Incorreta. Não se deve restringir uma modalidade funcional apenas à avaliação nem impor oralidade como regra.",
            "Incorreta. Documentos clínicos podem subsidiar, mas a decisão pedagógica não depende de prescrição médica. A condição adicional não corrige o erro central da alternativa.",
            "Correta. A adaptação da sinalização ao funcionamento visual é uma estratégia reconhecida e deve ser individualizada."
        ],
        "dicaBanca": "FGV 2014: a banca cobrou que o espaço de sinalização em Libras pode ser adaptado segundo a eficiência do funcionamento visual.",
        "pegadinha": "“Toda pessoa surdocega usa Libras tátil” é generalização errada.",
        "memorizar2026": "Comunicação na surdocegueira = multimodal, funcional e individualizada.",
        "fonte": "FGV/SEDUC-AM 2014, questão sobre surdocegueira; MEC/IBC."
    },
    {
        "id": "SEDUC-EE-SDM-004",
        "numero": 4,
        "subtopico": "Comunicação tátil — Libras e Tadoma",
        "dificuldade": "alta",
        "pergunta": "Sobre formas de comunicação que podem ser utilizadas com pessoas surdocegas, assinale a afirmativa correta.",
        "alternativas": [
            "O acesso tátil aos sinais pode ocorrer com as mãos da pessoa surdocega sobre as mãos do interlocutor, permitindo perceber configuração, movimento, localização e orientação dos sinais.",
            "O Tadoma é uma modalidade de escrita tátil na qual a pessoa identifica letras em relevo produzidas na palma da mão por meio de traçados convencionais.",
            "A Libras em campo reduzido deve ser utilizada apenas por pessoas com cegueira total, porque depende prioritariamente de percepção tátil das configurações de mão, se a equipe considerar essa organização necessária e reavaliar os apoios conforme o desenvolvimento do estudante.",
            "O alfabeto manual tátil substitui necessariamente qualquer língua previamente adquirida pela pessoa surdocega, inclusive em situações pós-linguísticas.",
            "A comunicação háptica dispensa o uso de outras modalidades, pois tem como função substituir língua, orientação espacial e acesso a informações do ambiente."
        ],
        "correta": 0,
        "feedbackAcerto": "Você marcou uma descrição coerente do acesso tátil aos sinais, tema que a FGV já cobrou diretamente.",
        "feedbackErro": "As demais alternativas confundem modalidades ou transformam recursos em sistemas obrigatórios e exclusivos. O repertório deve ser composto conforme a pessoa e a situação.",
        "analiseAlternativas": [
            "Correta. Essa forma permite perceber propriedades articulatórias do sinal por via tátil.",
            "Incorreta. Tadoma envolve percepção tátil de movimentos articulatórios da fala, tradicionalmente com contato na face/pescoço do interlocutor, não escrita em relevo.",
            "Incorreta. Campo reduzido é recurso visual para quem possui funcionamento visual útil, não técnica destinada à cegueira total. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. Alfabeto manual tátil é um recurso possível e não apaga uma língua previamente adquirida.",
            "Incorreta. Comunicação háptica pode ampliar informação contextual, mas não é automaticamente substituta de todos os demais canais."
        ],
        "dicaBanca": "FGV pode descrever corretamente um recurso conhecido, mas trocar seu canal sensorial ou finalidade.",
        "pegadinha": "Tadoma não é Braille nem escrita na palma da mão.",
        "memorizar2026": "Libras tátil e outros sistemas são escolhidos segundo funcionalidade e história linguística.",
        "fonte": "FGV/SEDUC-AM 2014; MEC/IBC — comunicação na surdocegueira."
    },
    {
        "id": "SEDUC-EE-SDM-005",
        "numero": 5,
        "subtopico": "Guia-intérprete — função",
        "dificuldade": "alta",
        "pergunta": "Durante uma visita pedagógica, a escola atribui ao guia-intérprete de um estudante surdocego a responsabilidade de decidir quais conteúdos curriculares serão ensinados e de substituí-lo nas atividades que exigem deslocamento. A atribuição adequada desse profissional é",
        "alternativas": [
            "assumir a regência curricular quando a comunicação do estudante exigir mediação tátil, pois a interpretação especializada transfere ao profissional a responsabilidade pedagógica principal, desde que os profissionais envolvidos compartilhem registros e revisem a estratégia em reuniões pedagógicas periódicas.",
            "realizar apenas deslocamentos físicos, evitando intervir em comunicação e acesso à informação para preservar a autonomia do estudante durante as atividades.",
            "mediar comunicação, informação e, conforme a necessidade, orientação e mobilidade, utilizando as formas comunicativas do estudante sem substituir sua participação nem a responsabilidade docente.",
            "selecionar os objetivos do PEI de forma independente e definir quais atividades comuns podem ser dispensadas em razão das barreiras sensoriais observadas.",
            "atuar exclusivamente em avaliações e eventos externos, porque a mediação cotidiana em sala de aula deve ser realizada apenas pelo professor regente."
        ],
        "correta": 2,
        "feedbackAcerto": "Você diferenciou mediação comunicativa e informacional de regência e decisão curricular. O guia-intérprete favorece acesso e autonomia; não substitui o estudante nem o professor.",
        "feedbackErro": "O profissional pode mediar comunicação, descrever ambientes, apoiar deslocamentos e favorecer acesso às atividades, mas não deve tomar o lugar do estudante ou assumir sozinho a função docente.",
        "analiseAlternativas": [
            "Incorreta. Mediação especializada não converte o guia-intérprete em professor regente responsável pelo currículo. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. A função inclui comunicação e acesso à informação, além de poder apoiar orientação e mobilidade.",
            "Correta. Essa descrição preserva mediação, autonomia e corresponsabilidade pedagógica.",
            "Incorreta. PEI e decisões curriculares são construções pedagógicas colaborativas, não atribuição isolada do guia-intérprete.",
            "Incorreta. A atuação pode ser necessária no cotidiano escolar, não apenas em avaliações ou saídas."
        ],
        "dicaBanca": "FGV gosta de confundir apoio profissional com substituição da docência ou da autonomia do estudante.",
        "pegadinha": "Apoiar não é decidir pelo aluno nem assumir a regência.",
        "memorizar2026": "Guia-intérprete: comunicação + informação + apoio à mobilidade, conforme necessidade.",
        "fonte": "Inep — definição de guia-intérprete; orientações de redes públicas de ensino."
    },
    {
        "id": "SEDUC-EE-SDM-006",
        "numero": 6,
        "subtopico": "Orientação e mobilidade",
        "dificuldade": "media",
        "pergunta": "No planejamento de orientação e mobilidade para um estudante surdocego, a ação mais coerente com uma perspectiva de autonomia é",
        "alternativas": [
            "restringir os deslocamentos a rotas previamente conduzidas por adulto, evitando exploração do espaço enquanto persistirem barreiras comunicacionais, desde que a medida seja registrada no planejamento individualizado e revista periodicamente pela equipe escolar.",
            "priorizar exclusivamente a memorização verbal dos trajetos, pois pistas táteis e referências ambientais podem gerar dependência do recurso.",
            "realizar o treinamento apenas fora do horário escolar, para não interferir no currículo comum e nas atividades da turma.",
            "substituir o ensino de mobilidade pelo acompanhamento permanente de um profissional, garantindo segurança por meio de condução direta.",
            "ensinar estratégias de deslocamento seguro articuladas à comunicação, às pistas ambientais e ao reconhecimento dos espaços reais frequentados pelo estudante."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu que orientação e mobilidade devem ampliar independência e participação nos ambientes efetivamente vividos pelo estudante.",
        "feedbackErro": "A meta não é criar dependência de condução. Técnicas, referências táteis/visuais/auditivas remanescentes e comunicação devem ser articuladas de forma funcional.",
        "analiseAlternativas": [
            "Incorreta. Condução constante pode ser necessária em situações específicas, mas não deve substituir oportunidades de desenvolver autonomia. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. Pistas ambientais são recursos importantes quando significativas para o estudante.",
            "Incorreta. O desenvolvimento funcional pode e deve dialogar com a vida escolar.",
            "Incorreta. Apoio permanente sem ensino de estratégias pode ampliar dependência.",
            "Correta. Integra mobilidade, comunicação e contexto, favorecendo segurança e autonomia."
        ],
        "dicaBanca": "Quando a alternativa fala em “substituir o ensino por acompanhamento”, desconfie. Inclusão busca apoio com desenvolvimento de autonomia.",
        "pegadinha": "Segurança não é sinônimo de superproteção.",
        "memorizar2026": "OM: reconhecer espaços + usar pistas + deslocar-se com segurança + ampliar autonomia.",
        "fonte": "IBC/MEC — Orientação e Mobilidade na surdocegueira."
    },
    {
        "id": "SEDUC-EE-SDM-007",
        "numero": 7,
        "subtopico": "Bengala longa — atualização legal",
        "dificuldade": "alta",
        "pergunta": "A Lei nº 14.951/2024 estabeleceu cores da bengala longa para identificação da condição de seu usuário. Para pessoa com surdocegueira, a lei prevê bengala",
        "alternativas": [
            "verde, por indicar presença de resíduo visual e necessidade combinada de apoio comunicacional durante o deslocamento.",
            "vermelha e branca, distinguindo a surdocegueira das cores destinadas à cegueira e à baixa visão.",
            "branca com faixa azul, padrão reservado à associação entre deficiência auditiva e deficiência visual no sistema nacional.",
            "amarela, desde que a pessoa utilize guia-intérprete ou cão-guia em deslocamentos externos e ambientes de grande circulação.",
            "branca, pois a lei não diferencia a surdocegueira de outras condições que envolvem cegueira ou baixa visão para fins de mobilidade."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a atualização legal: branca para cegueira, verde para baixa visão e vermelha e branca para surdocegueira.",
        "feedbackErro": "A Lei nº 14.951/2024 criou uma diferenciação expressa de cores. É um detalhe objetivo com forte potencial de cobrança literal.",
        "analiseAlternativas": [
            "Incorreta. Verde corresponde à baixa visão.",
            "Correta. A combinação vermelha e branca identifica a surdocegueira.",
            "Incorreta. A lei não adota faixa azul.",
            "Incorreta. Não há cor amarela condicionada ao uso de guia-intérprete ou cão-guia.",
            "Incorreta. A lei diferencia expressamente a surdocegueira."
        ],
        "dicaBanca": "Questões de legislação recente podem cobrar uma informação curta e literal. Memorize o trio de cores.",
        "pegadinha": "Não use associação intuitiva; a cor está definida em lei.",
        "memorizar2026": "Bengala: branca = cegueira; verde = baixa visão; vermelha+branca = surdocegueira.",
        "fonte": "Lei nº 14.951/2024, art. 2º.",
        "atualizacao2026": "A Lei nº 14.951/2024 está em vigor e prevê bengala vermelha e branca para pessoas com surdocegueira."
    },
    {
        "id": "SEDUC-EE-SDM-008",
        "numero": 8,
        "subtopico": "Censo Escolar — surdocegueira e deficiência múltipla",
        "dificuldade": "alta",
        "pergunta": "Em 2026, uma escola precisa declarar no Censo Escolar um estudante com surdocegueira e outra deficiência associada. Considerando a orientação atual do Inep, é correto afirmar que",
        "alternativas": [
            "a surdocegueira deve ser desmembrada obrigatoriamente em cegueira e surdez, pois não existe campo próprio para essa condição no Educacenso.",
            "a deficiência múltipla deve ser marcada manualmente junto com cada deficiência, sendo inválido o registro se esse campo não for selecionado pela escola, desde que a escola documente a decisão no estudo de caso e monitore sua efetividade nas atividades da turma.",
            "a escola deve escolher apenas uma deficiência principal, porque o sistema censitário não admite a declaração simultânea de condições distintas.",
            "a surdocegueira é um tipo coletado pelo Censo, e a deficiência múltipla é registrada automaticamente pelo sistema quando mais de uma deficiência é declarada para a mesma pessoa.",
            "o registro de deficiência múltipla depende de laudo que estabeleça qual condição produz maior impacto funcional no processo de escolarização."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou a atualização do Inep: surdocegueira aparece entre os tipos coletados, enquanto a deficiência múltipla decorre automaticamente da combinação de duas ou mais deficiências declaradas.",
        "feedbackErro": "O Censo Escolar 2026 distingue o campo de surdocegueira e não oferece marcação manual específica para “deficiência múltipla”; o sistema a identifica quando cabível.",
        "analiseAlternativas": [
            "Incorreta. Surdocegueira é declarada como tipo próprio no Censo Escolar.",
            "Incorreta. O campo de deficiência múltipla não está disponível para marcação manual. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. Mais de uma deficiência pode ser declarada para a mesma pessoa.",
            "Correta. Essa é a orientação atualizada do Inep em 31/08/2026.",
            "Incorreta. A regra censitária descrita não depende dessa hierarquização clínica."
        ],
        "dicaBanca": "FGV pode misturar conceito pedagógico com regra cadastral. Leia se a questão pergunta “o que é” ou “como o Censo registra”.",
        "pegadinha": "Surdocegueira é campo próprio; deficiência múltipla é resultado automático no Educacenso.",
        "memorizar2026": "Censo 2026: múltipla = associação registrada automaticamente quando há mais de uma deficiência declarada.",
        "fonte": "Inep — FAQ Censo Escolar, atualizado em 31/08/2026.",
        "atualizacao2026": "O Inep atualizou em 31/08/2026 a orientação sobre os tipos de deficiência e o registro automático da deficiência múltipla."
    },
    {
        "id": "SEDUC-EE-SDM-009",
        "numero": 9,
        "subtopico": "Deficiência múltipla — conceito pedagógico",
        "dificuldade": "media",
        "pergunta": "No trabalho pedagógico, deficiência múltipla deve ser compreendida como",
        "alternativas": [
            "associação de duas ou mais deficiências, cuja análise educacional considera possibilidades funcionais, comunicação, interação e aprendizagem, e não apenas a soma de diagnósticos.",
            "presença simultânea de duas dificuldades de aprendizagem persistentes, ainda que nenhuma delas seja reconhecida como deficiência nos critérios educacionais.",
            "combinação obrigatória entre deficiência intelectual e outra deficiência sensorial, pois associações exclusivamente físicas não caracterizam deficiência múltipla, se a equipe considerar essa organização necessária e reavaliar os apoios conforme o desenvolvimento do estudante.",
            "categoria destinada a estudantes com necessidade intensa de apoio, independentemente de apresentarem uma ou mais deficiências identificadas.",
            "condição definida pela deficiência considerada predominante, sendo as demais registradas apenas como informações clínicas complementares."
        ],
        "correta": 0,
        "feedbackAcerto": "Você marcou a definição correta e, principalmente, o modo adequado de interpretá-la pedagogicamente: associação de deficiências com análise integrada da funcionalidade e aprendizagem.",
        "feedbackErro": "A deficiência múltipla não se resume a intensidade de apoio, a transtornos de aprendizagem ou a uma combinação fixa. O ensino deve considerar o perfil real de cada estudante.",
        "analiseAlternativas": [
            "Correta. É a definição adotada nas orientações educacionais, com foco funcional e não meramente somatório.",
            "Incorreta. Dificuldades de aprendizagem não se transformam automaticamente em deficiência múltipla.",
            "Incorreta. Não há exigência de presença de deficiência intelectual nessa associação. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. Nível de apoio, isoladamente, não define a categoria.",
            "Incorreta. A análise não deve apagar deficiências associadas nem eleger uma como única referência pedagógica."
        ],
        "dicaBanca": "Nas alternativas, procure a que combina definição formal e leitura funcional do estudante.",
        "pegadinha": "Múltipla não significa “mais grave”; significa associação de duas ou mais deficiências.",
        "memorizar2026": "Deficiência múltipla: associação + análise integrada de funcionalidade, comunicação e aprendizagem.",
        "fonte": "Inep 2026; orientações educacionais de Educação Especial."
    },
    {
        "id": "SEDUC-EE-SDM-010",
        "numero": 10,
        "subtopico": "Avaliação funcional",
        "dificuldade": "alta",
        "pergunta": "Uma equipe recebe um estudante com deficiência múltipla e pretende elaborar o planejamento apenas a partir dos nomes dos diagnósticos presentes no prontuário. A medida mais adequada é",
        "alternativas": [
            "usar o diagnóstico de maior gravidade como referência única, evitando metas conflitantes entre diferentes áreas do desenvolvimento do estudante.",
            "dividir o planejamento por deficiência, com objetivos independentes para cada diagnóstico e sem necessidade de integrar os resultados observados, desde que os profissionais envolvidos compartilhem registros e revisem a estratégia em reuniões pedagógicas periódicas.",
            "realizar avaliação funcional e estudo de caso que identifiquem barreiras, potencialidades, formas de comunicação, apoios e respostas do estudante nos diferentes contextos.",
            "aguardar avaliação biopsicossocial obrigatória antes de iniciar qualquer adaptação pedagógica ou recurso de acessibilidade na escola.",
            "priorizar habilidades de autocuidado até que o estudante demonstre condições de acompanhar objetivos do currículo comum junto à turma."
        ],
        "correta": 2,
        "feedbackAcerto": "Você escolheu uma avaliação que parte da pessoa em contexto e produz informações úteis para planejar apoios, acessibilidade e participação.",
        "feedbackErro": "Diagnósticos podem subsidiar, mas não substituem estudo pedagógico e observação funcional. O planejamento inclusivo integra currículo, comunicação, autonomia e participação.",
        "analiseAlternativas": [
            "Incorreta. Eleger um diagnóstico como referência única pode ocultar potencialidades e necessidades relevantes.",
            "Incorreta. Fragmentar por deficiência reproduz a lógica somatória que o trabalho pedagógico deve superar. A condição adicional não corrige o erro central da alternativa.",
            "Correta. A avaliação funcional e o estudo de caso transformam informações em decisões pedagógicas contextualizadas.",
            "Incorreta. A escola não deve suspender apoios necessários aguardando documento externo obrigatório.",
            "Incorreta. Habilidades funcionais podem ser trabalhadas, mas não como condição prévia para acesso ao currículo comum."
        ],
        "dicaBanca": "FGV costuma premiar a alternativa que descreve avaliação contextual, contínua e orientada às potencialidades, não a que apenas cataloga déficits.",
        "pegadinha": "Diagnóstico informa; planejamento pedagógico investiga o estudante em ação.",
        "memorizar2026": "Avaliar funcionalmente = observar o que favorece comunicação, ação, participação e aprendizagem.",
        "fonte": "Decreto nº 12.686/2025; Portaria MEC nº 421/2026; materiais MEC."
    },
    {
        "id": "SEDUC-EE-SDM-011",
        "numero": 11,
        "subtopico": "AEE — natureza complementar",
        "dificuldade": "alta",
        "pergunta": "Para um estudante com surdocegueira, a escola organiza AEE com comunicação tátil, recursos de acessibilidade e orientação e mobilidade. Sobre a relação desse atendimento com a classe comum, é correto afirmar que o AEE",
        "alternativas": [
            "deve concentrar o ensino dos conteúdos curriculares complexos, deixando à classe comum apenas atividades de convivência e socialização com os demais estudantes.",
            "pode substituir temporariamente a classe comum quando a intensidade dos apoios sensoriais exigir atendimento individual em maior número de horas semanais.",
            "deve funcionar como reforço escolar especializado, repetindo os conteúdos da sala comum em formatos táteis até que o estudante alcance desempenho equivalente ao da turma, desde que a medida seja registrada no planejamento individualizado e revista periodicamente pela equipe escolar.",
            "é opcional quando a escola já possui guia-intérprete, pois a presença desse profissional supre a necessidade de recursos pedagógicos e de acessibilidade especializados.",
            "é complementar à escolarização do estudante com deficiência e organiza recursos e estratégias para assegurar acesso, participação e aprendizagem, sem substituir a classe comum."
        ],
        "correta": 4,
        "feedbackAcerto": "Você manteve a função correta do AEE: apoio especializado complementar, articulado à escolarização comum.",
        "feedbackErro": "O AEE não é reforço, não é currículo paralelo e não se torna substitutivo por intensidade de apoio. Profissionais e recursos de acessibilidade se articulam, mas não se anulam automaticamente.",
        "analiseAlternativas": [
            "Incorreta. Conteúdo curricular continua sendo responsabilidade da escolarização comum, com acessibilidade e colaboração.",
            "Incorreta. A intensidade do apoio não autoriza transformar AEE em substituição da escolarização.",
            "Incorreta. AEE diferencia-se de reforço escolar e organiza recursos de acessibilidade. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. A presença de guia-intérprete não elimina automaticamente a necessidade de AEE.",
            "Correta. É a natureza atual do AEE para estudantes com deficiência."
        ],
        "dicaBanca": "FGV gosta de trocar “complementar” por “substitutivo” ou “reforço”. Esses termos mudam a questão inteira.",
        "pegadinha": "AEE especializado não significa escolarização separada.",
        "memorizar2026": "AEE = complementar para deficiência/TEA; não substitui a classe comum.",
        "fonte": "Decreto nº 12.686/2025; Inep 2026 — conceito de AEE."
    },
    {
        "id": "SEDUC-EE-SDM-012",
        "numero": 12,
        "subtopico": "Estudo de caso, PAEE e PEI",
        "dificuldade": "alta",
        "pergunta": "Após o estudo de caso de uma estudante com deficiência múltipla, a equipe identifica barreiras comunicacionais, necessidades de posicionamento e recursos de CAA. De acordo com a regulamentação vigente, o passo pedagógico coerente é",
        "alternativas": [
            "encaminhar os achados exclusivamente à equipe de saúde, pois recursos de comunicação e posicionamento devem ser prescritos antes de constarem no planejamento escolar.",
            "organizar PAEE e PEI a partir das informações do estudo de caso, articulando objetivos, apoios, acessibilidade, participação e acompanhamento do percurso escolar.",
            "elaborar apenas o PAEE, porque o PEI se destina exclusivamente a estudantes com deficiência intelectual e não se aplica à deficiência múltipla.",
            "substituir o PEI por um relatório clínico funcional sempre que houver mais de uma deficiência, evitando duplicidade de documentos no acompanhamento.",
            "registrar apenas as limitações que justificam os apoios, deixando potencialidades e preferências para serem consideradas informalmente durante a execução."
        ],
        "correta": 1,
        "feedbackAcerto": "Você conectou corretamente estudo de caso e instrumentos pedagógicos individualizados, sem transformar recursos educacionais em decisões exclusivamente clínicas.",
        "feedbackErro": "O estudo de caso fundamenta PAEE e PEI na política vigente. Esses instrumentos devem considerar barreiras e potencialidades, apoiar a escolarização comum e ser acompanhados/revistos.",
        "analiseAlternativas": [
            "Incorreta. Articulação com saúde pode ajudar, mas a escola mantém responsabilidade pedagógica sobre acessibilidade e planejamento.",
            "Correta. O estudo de caso fundamenta os instrumentos e orienta ações articuladas.",
            "Incorreta. O PEI não é exclusivo da deficiência intelectual.",
            "Incorreta. Relatório clínico não substitui o planejamento pedagógico individualizado.",
            "Incorreta. Potencialidades, preferências e formas de participação também são essenciais para decisões educacionais."
        ],
        "dicaBanca": "FGV pode apresentar “encaminhar à saúde” como solução aparentemente técnica. Verifique se isso retira da escola uma responsabilidade pedagógica.",
        "pegadinha": "PAEE/PEI são pedagógicos, não prontuários clínicos.",
        "memorizar2026": "Estudo de caso → PAEE + PEI → execução → monitoramento → revisão.",
        "fonte": "Decreto nº 12.686/2025; Portaria MEC nº 421/2026."
    },
    {
        "id": "SEDUC-EE-SDM-013",
        "numero": 13,
        "subtopico": "Família e participação do estudante",
        "dificuldade": "media",
        "pergunta": "No planejamento de um aluno surdocego que utiliza objetos de referência para antecipar rotinas, a participação da família é importante principalmente porque",
        "alternativas": [
            "autoriza a escola a substituir avaliações pedagógicas por relatos familiares sobre o comportamento do estudante em casa.",
            "permite transferir à família a responsabilidade de escolher sozinha o sistema de comunicação e os recursos que serão usados em todas as situações escolares, desde que a escola documente a decisão no estudo de caso e monitore sua efetividade nas atividades da turma.",
            "garante que a escola mantenha as mesmas estratégias domésticas sem qualquer adaptação aos objetivos pedagógicos e às interações da turma.",
            "favorece continuidade e troca de informações sobre formas de comunicação, interesses, sinais, rotinas e respostas do estudante, apoiando decisões pedagógicas compartilhadas.",
            "dispensa observação direta do estudante quando os responsáveis apresentam registros detalhados de comunicação, alimentação, mobilidade e autocuidado."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu a família como parceira de informação e decisão, sem substituir a observação pedagógica ou a voz do próprio estudante.",
        "feedbackErro": "A colaboração família-escola ajuda a compreender sinais e rotinas e a dar consistência aos apoios, mas não transforma a família em única decisora nem elimina avaliação escolar.",
        "analiseAlternativas": [
            "Incorreta. Relatos familiares complementam, mas não substituem avaliação pedagógica.",
            "Incorreta. Escolhas devem ser construídas com o estudante, família e equipe, de forma contextual. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. Estratégias precisam ser funcionalmente adaptadas aos diferentes ambientes e objetivos.",
            "Correta. A continuidade comunicativa e a troca de informações podem ampliar compreensão, segurança e aprendizagem.",
            "Incorreta. Observação do estudante no contexto escolar continua indispensável."
        ],
        "dicaBanca": "Em provas, “participação da família” não significa delegar à família toda a decisão pedagógica.",
        "pegadinha": "Parceria = compartilhar informações e decisões; não terceirizar responsabilidades.",
        "memorizar2026": "Família e estudante participam do planejamento e do acompanhamento.",
        "fonte": "Decreto nº 12.686/2025; materiais MEC sobre surdocegueira."
    },
    {
        "id": "SEDUC-EE-SDM-014",
        "numero": 14,
        "subtopico": "Acesso à informação",
        "dificuldade": "alta",
        "pergunta": "Em uma aula de Ciências, o professor exibe um experimento a distância e apenas descreve oralmente o que está ocorrendo. Um estudante surdocego não acessa nem a demonstração visual nem a descrição oral. A resposta inclusiva mais adequada é",
        "alternativas": [
            "planejar acesso multissensorial e comunicacional ao fenômeno, com materiais concretos/táteis, descrição pelo sistema usado pelo estudante e oportunidade de exploração orientada.",
            "encaminhar o estudante ao AEE durante a demonstração para que receba posteriormente uma atividade equivalente, evitando alterar o ritmo da turma.",
            "manter a aula como está e fornecer um resumo escrito ao final, pois a equivalência curricular é garantida quando todos recebem os mesmos conceitos por algum meio.",
            "substituir o experimento por treino de habilidades funcionais mais acessíveis, uma vez que fenômenos visuais complexos têm menor valor pedagógico para a surdocegueira, se a equipe considerar essa organização necessária e reavaliar os apoios conforme o desenvolvimento do estudante.",
            "solicitar ao guia-intérprete que simplifique o conteúdo e selecione apenas as informações consideradas essenciais à autonomia cotidiana do estudante."
        ],
        "correta": 0,
        "feedbackAcerto": "Você priorizou acesso ao mesmo objeto de conhecimento por caminhos comunicacionais e sensoriais adequados, preservando participação com a turma.",
        "feedbackErro": "Inclusão exige antecipar como a informação chegará ao estudante. Retirá-lo da atividade ou empobrecer o conteúdo mantém a barreira em vez de removê-la.",
        "analiseAlternativas": [
            "Correta. Torna o fenômeno acessível sem retirar o estudante do currículo comum.",
            "Incorreta. AEE pode apoiar o planejamento, mas não deve virar destino para o aluno toda vez que a aula comum apresenta uma barreira.",
            "Incorreta. “Mesmo conteúdo depois” não garante participação nem acesso durante a experiência pedagógica.",
            "Incorreta. Complexidade visual não justifica trocar automaticamente o objetivo curricular. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. O guia-intérprete não deve reduzir sozinho o currículo nem selecionar objetivos."
        ],
        "dicaBanca": "FGV explora muito a diferença entre adaptar o acesso e retirar o aluno da experiência comum.",
        "pegadinha": "Equivalência não é “fazer outra coisa”; é tornar o conhecimento acessível.",
        "memorizar2026": "Acesso à informação deve ser planejado no momento da atividade, com o canal funcional do estudante.",
        "fonte": "LBI, art. 28; Decreto nº 12.686/2025; MEC/IBC."
    },
    {
        "id": "SEDUC-EE-SDM-015",
        "numero": 15,
        "subtopico": "Tecnologia assistiva e recursos",
        "dificuldade": "alta",
        "pergunta": "Na escolha de tecnologia assistiva para um estudante com deficiência múltipla e comunicação não oral, a equipe deve priorizar",
        "alternativas": [
            "o equipamento mais sofisticado disponível, pois maior complexidade tecnológica tende a produzir maior independência comunicativa em diferentes contextos, desde que os profissionais envolvidos compartilhem registros e revisem a estratégia em reuniões pedagógicas periódicas.",
            "um único recurso padronizado para casa e escola, evitando combinações que possam confundir o estudante durante a aquisição da comunicação.",
            "a funcionalidade do recurso para os objetivos do estudante, sua acessibilidade, possibilidade de uso nos contextos reais e participação do próprio usuário na avaliação das soluções.",
            "recursos de baixa tecnologia apenas como etapa provisória até que o estudante consiga utilizar dispositivo eletrônico com saída de voz e acesso digital.",
            "a indicação clínica do equipamento, deixando critérios pedagógicos de uso para serem definidos somente depois da aquisição do recurso recomendado."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou o princípio funcional da tecnologia assistiva: recurso bom é o que reduz barreiras e pode ser usado pela pessoa nos contextos em que precisa participar.",
        "feedbackErro": "Tecnologia não deve ser escolhida por prestígio, complexidade ou padronização. Baixa e alta tecnologia podem coexistir; avaliação e ensino de uso fazem parte da solução.",
        "analiseAlternativas": [
            "Incorreta. Sofisticação não garante funcionalidade nem acesso. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. Combinações multimodais podem ser justamente o que torna a comunicação funcional.",
            "Correta. Centraliza objetivos, contexto, participação do usuário e redução de barreiras.",
            "Incorreta. Baixa tecnologia não é necessariamente provisória ou inferior.",
            "Incorreta. Indicações externas podem subsidiar, mas critérios pedagógicos e funcionais são indispensáveis."
        ],
        "dicaBanca": "A FGV costuma criar a falsa equivalência “mais tecnologia = mais inclusão”. Julgue pela função, não pelo preço ou complexidade.",
        "pegadinha": "Recurso sem funcionalidade vira equipamento parado.",
        "memorizar2026": "TA: necessidade real + contexto + acessibilidade + treinamento + participação do usuário.",
        "fonte": "LBI; Inep — atividades do AEE; materiais de Tecnologia Assistiva."
    },
    {
        "id": "SEDUC-EE-SDM-016",
        "numero": 16,
        "subtopico": "CAA e comunicação multimodal",
        "dificuldade": "alta",
        "pergunta": "Um estudante com deficiência múltipla utiliza vocalizador eletrônico, gestos próprios e símbolos táteis. A professora considera que apenas o vocalizador deveria ser aceito, para padronizar sua comunicação. Nessa situação, é mais adequado",
        "alternativas": [
            "restringir os gestos próprios às interações familiares, porque códigos individuais não devem circular no ambiente escolar antes de serem convertidos em símbolos convencionais, desde que a medida seja registrada no planejamento individualizado e revista periodicamente pela equipe escolar.",
            "reconhecer e expandir os diferentes modos funcionais de comunicação do estudante, ensinando parceiros a interpretá-los e organizando CAA de forma multimodal conforme contexto e objetivos.",
            "manter somente o vocalizador durante atividades curriculares e permitir símbolos táteis apenas no AEE, diferenciando comunicação escolar de comunicação especializada.",
            "substituir os gestos por Libras, já que qualquer estudante não oral deve receber prioritariamente uma língua de sinais antes do uso de sistemas aumentativos.",
            "definir um sistema único por semestre, evitando que mudanças de canal sensorial produzam respostas inconsistentes na avaliação da aprendizagem."
        ],
        "correta": 1,
        "feedbackAcerto": "Você entendeu que comunicação funcional pode ser multimodal. A meta é ampliar expressão e compreensão, não obrigar a pessoa a um único canal.",
        "feedbackErro": "CAA pode combinar recursos, gestos, símbolos, dispositivos e outras formas. A escola deve conhecer os sinais do estudante, ensinar parceiros e ampliar possibilidades de participação.",
        "analiseAlternativas": [
            "Incorreta. Formas idiossincráticas podem ter valor comunicativo e devem ser compreendidas/expandidas, não simplesmente proibidas. A condição adicional não corrige o erro central da alternativa.",
            "Correta. Preserva os canais funcionais e trabalha comunicação como competência compartilhada entre estudante e parceiros.",
            "Incorreta. Separar artificialmente os canais por espaço pode reduzir comunicação espontânea.",
            "Incorreta. Libras pode ser adequada para alguns estudantes, mas não é prescrição universal para toda comunicação não oral.",
            "Incorreta. Padronização rígida pode desconsiderar demandas e contextos diferentes."
        ],
        "dicaBanca": "FGV: desconfie de alternativas que apresentam “padronizar” como sinônimo de organizar. Em comunicação, funcionalidade pode exigir diversidade de meios.",
        "pegadinha": "CAA não exige abandonar gestos, fala, sinais ou outros recursos úteis.",
        "memorizar2026": "CAA = aumentar/alternar canais de comunicação conforme a pessoa e a situação.",
        "fonte": "Inep — ensino do uso de CAA no AEE; materiais MEC."
    },
    {
        "id": "SEDUC-EE-SDM-017",
        "numero": 17,
        "subtopico": "Participação na classe comum",
        "dificuldade": "media",
        "pergunta": "Uma escola oferece boa estrutura de AEE a uma aluna com surdocegueira, mas a retira de aulas de Arte, Educação Física e projetos coletivos por considerar esses momentos pouco acessíveis. Essa organização é",
        "alternativas": [
            "adequada quando as atividades retiradas não integram componentes avaliados em larga escala e o AEE oferece experiências equivalentes em ambiente controlado.",
            "adequada se a família concordar, porque a participação em atividades coletivas é direito disponível e pode ser substituída por atendimento individual especializado.",
            "inadequada apenas quando a retirada supera metade da carga horária semanal, devendo pequenas substituições ser consideradas adaptação curricular razoável.",
            "adequada em atividades que exigem mobilidade, contato físico ou comunicação rápida, pois a prevenção de riscos deve prevalecer sobre a participação curricular.",
            "inadequada, porque acessibilidade e apoios devem ser organizados para garantir participação também nas atividades coletivas, curriculares e extracurriculares."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu que AEE de qualidade não compensa exclusão da vida comum da escola. O objetivo é remover barreiras para participação ampla.",
        "feedbackErro": "A retirada sistemática transforma o apoio especializado em segregação parcial. Segurança e acessibilidade devem ser planejadas, não usadas como justificativa automática para excluir.",
        "analiseAlternativas": [
            "Incorreta. Componentes e projetos não perdem valor educacional por não integrarem avaliação externa.",
            "Incorreta. Concordância familiar não torna adequada uma exclusão que a escola poderia enfrentar com acessibilidade e apoio.",
            "Incorreta. Não existe esse limiar percentual como regra inclusiva.",
            "Incorreta. Risco deve ser gerenciado com apoios e adaptações, não presumido como impedimento universal.",
            "Correta. A participação na vida escolar é parte do direito à educação inclusiva."
        ],
        "dicaBanca": "FGV gosta de apresentar AEE “muito bom” para mascarar exclusão da sala comum. Um direito não substitui o outro.",
        "pegadinha": "AEE não é compensação por retirar o aluno da turma.",
        "memorizar2026": "Participação inclui atividades curriculares, projetos, convivência e experiências da escola.",
        "fonte": "Convenção sobre os Direitos das Pessoas com Deficiência; LBI; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-SDM-018",
        "numero": 18,
        "subtopico": "Avaliação da aprendizagem",
        "dificuldade": "alta",
        "pergunta": "Na avaliação de um estudante surdocego que responde por sinais táteis convencionados e tempo ampliado, a professora pretende aplicar a mesma prova impressa da turma sem mediação, argumentando que alterar o formato comprometeria a igualdade. A prática correta é",
        "alternativas": [
            "manter o instrumento idêntico e desconsiderar itens não respondidos, pois qualquer adaptação do canal de comunicação altera o nível de exigência acadêmica.",
            "substituir a prova por parecer descritivo sem critérios de aprendizagem, evitando comparar o estudante com objetivos curriculares definidos para a turma.",
            "avaliar exclusivamente habilidades comunicativas e de autonomia até que o estudante demonstre domínio suficiente do sistema de comunicação usado pela escola.",
            "preservar os objetivos avaliados e oferecer formato, mediação comunicativa, recursos e tempo acessíveis, registrando evidências por meios compatíveis com a forma de expressão do estudante.",
            "delegar a avaliação ao AEE, pois o professor da classe comum não dispõe de parâmetros para interpretar respostas produzidas por canais táteis ou aumentativos, desde que a escola documente a decisão no estudo de caso e monitore sua efetividade nas atividades da turma."
        ],
        "correta": 3,
        "feedbackAcerto": "Você separou objetivo de aprendizagem de forma de acesso e resposta. A avaliação pode ser acessível sem reduzir o que se pretende verificar.",
        "feedbackErro": "Igualdade não exige instrumento idêntico quando o próprio formato cria uma barreira. Critérios curriculares podem ser preservados com mediação e recursos adequados.",
        "analiseAlternativas": [
            "Incorreta. Formato inacessível mede a barreira, não necessariamente a aprendizagem.",
            "Incorreta. Parecer sem critérios não substitui acompanhamento dos objetivos pedagógicos.",
            "Incorreta. Comunicação e autonomia são importantes, mas não devem restringir a avaliação do currículo.",
            "Correta. Ajusta meios e condições mantendo intencionalidade avaliativa.",
            "Incorreta. A avaliação da classe comum permanece responsabilidade docente, com colaboração do AEE e demais apoios. A condição adicional não corrige o erro central da alternativa."
        ],
        "dicaBanca": "Pergunte: a adaptação mudou o objetivo ou apenas removeu a barreira do instrumento? A FGV explora muito essa distinção.",
        "pegadinha": "Acessibilidade da avaliação não é “dar resposta” nem “facilitar conteúdo”.",
        "memorizar2026": "Avaliação inclusiva = mesmo objetivo pertinente + meios acessíveis + evidências válidas.",
        "fonte": "LBI, art. 28; Decreto nº 12.686/2025; diretrizes de avaliação inclusiva."
    },
    {
        "id": "SEDUC-EE-SDM-019",
        "numero": 19,
        "subtopico": "Profissional de apoio — necessidade pedagógica",
        "dificuldade": "alta",
        "pergunta": "A direção considera que todo estudante com deficiência múltipla deve receber automaticamente profissional de apoio escolar em tempo integral. À luz da política vigente, essa afirmação é",
        "alternativas": [
            "incorreta, porque a necessidade de apoio deve ser identificada a partir do estudo de caso e das barreiras nas atividades escolares, não apenas do rótulo diagnóstico.",
            "correta, pois a associação de duas ou mais deficiências constitui critério legal suficiente para concessão imediata de apoio individual permanente.",
            "correta quando houver limitação de comunicação, já que qualquer uso de CAA exige acompanhamento individual de profissional treinado durante toda a jornada.",
            "incorreta apenas nas escolas que possuem AEE no mesmo turno, hipótese em que o professor especializado assume as funções de cuidado e participação necessárias, se a equipe considerar essa organização necessária e reavaliar os apoios conforme o desenvolvimento do estudante.",
            "correta para estudantes menores de 18 anos, porque a legislação diferencia apoio escolar de autonomia apenas a partir da maioridade civil."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou a regra atual: o apoio se relaciona às necessidades reais identificadas no contexto escolar, e não a uma categoria diagnóstica automática.",
        "feedbackErro": "A deficiência múltipla pode envolver diferentes níveis e tipos de apoio. O estudo de caso deve identificar o que é necessário para acesso, participação, alimentação, higiene, locomoção ou outras atividades pertinentes.",
        "analiseAlternativas": [
            "Correta. A necessidade de apoio é individual e contextual.",
            "Incorreta. Associação de deficiências não cria, por si só, direito automático a apoio individual integral em qualquer situação.",
            "Incorreta. CAA não implica necessariamente presença constante de um profissional exclusivo.",
            "Incorreta. AEE não substitui funções de apoio quando estas são necessárias. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. A necessidade não é definida pela maioridade civil."
        ],
        "dicaBanca": "FGV pode transformar um direito verdadeiro em automatismo falso. “Pode precisar” não é “todo aluno precisa”.",
        "pegadinha": "Diagnóstico não define sozinho intensidade nem tipo de apoio.",
        "memorizar2026": "Profissional de apoio: decisão pedagógica contextual, não concessão automática por categoria.",
        "fonte": "Decreto nº 12.686/2025 e redação vigente; Portaria MEC nº 421/2026."
    },
    {
        "id": "SEDUC-EE-SDM-020",
        "numero": 20,
        "subtopico": "LDB — surdocegos na Educação Bilíngue de Surdos",
        "dificuldade": "alta",
        "pergunta": "Considerando o art. 60-A da LDB, uma pessoa surdocega",
        "alternativas": [
            "deve frequentar obrigatoriamente Educação Bilíngue de Surdos, porque a presença simultânea de perdas auditiva e visual torna inadequada a matrícula em classe comum, desde que os profissionais envolvidos compartilhem registros e revisem a estratégia em reuniões pedagógicas periódicas.",
            "pode integrar o público da Educação Bilíngue de Surdos quando optante pela modalidade, respeitadas suas especificidades de comunicação e as garantias de acessibilidade.",
            "não integra o público da Educação Bilíngue de Surdos, pois essa modalidade se restringe a estudantes surdos que utilizam Libras visual em campo aberto.",
            "pode frequentar a modalidade apenas quando possuir resíduo visual suficiente para acompanhar Libras sem adaptação tátil ou redução do campo de sinalização.",
            "deve escolher entre matrícula na Educação Bilíngue de Surdos e AEE, uma vez que as duas ofertas possuem finalidades incompatíveis no caso da surdocegueira."
        ],
        "correta": 1,
        "feedbackAcerto": "Você relacionou corretamente a LDB à surdocegueira: o art. 60-A inclui surdocegos entre os possíveis optantes pela modalidade bilíngue.",
        "feedbackErro": "A LDB não impõe a modalidade a toda pessoa surdocega nem exige uma forma visual específica de Libras. A decisão e as condições de acessibilidade devem respeitar o perfil do estudante.",
        "analiseAlternativas": [
            "Incorreta. A modalidade é uma possibilidade garantida, não matrícula compulsória para toda pessoa surdocega. A condição adicional não corrige o erro central da alternativa.",
            "Correta. Surdocegos aparecem expressamente no público do art. 60-A, quando optantes.",
            "Incorreta. A legislação não limita a modalidade a Libras visual em campo aberto.",
            "Incorreta. Adaptações táteis ou de campo visual podem ser necessárias e não excluem o estudante da modalidade.",
            "Incorreta. AEE e escolarização bilíngue podem se articular; não são opções excludentes por definição."
        ],
        "dicaBanca": "Banca pode cruzar dois tópicos do edital: surdocegueira e Educação Bilíngue de Surdos. Leia literalmente o público do art. 60-A.",
        "pegadinha": "Surdocego pode ser público da modalidade bilíngue, mas não é obrigado a ela.",
        "memorizar2026": "LDB 60-A: inclui surdocegos optantes pela Educação Bilíngue de Surdos.",
        "fonte": "LDB, art. 60-A."
    },
    {
        "id": "SEDUC-EE-SDM-021",
        "numero": 21,
        "subtopico": "AEE — atividades e recursos",
        "dificuldade": "media",
        "pergunta": "O conjunto de atividades do AEE que pode ser especialmente relevante, conforme o perfil de um estudante surdocego, inclui",
        "alternativas": [
            "apenas ensino de Libras e Língua Portuguesa escrita, pois recursos visuais e de mobilidade pertencem exclusivamente a serviços clínicos de reabilitação, desde que a medida seja registrada no planejamento individualizado e revista periodicamente pela equipe escolar.",
            "reforço de conteúdos da classe comum, treino de memorização e repetição de tarefas até que o estudante acompanhe o ritmo pedagógico da turma.",
            "alfabetização curricular substitutiva, desenvolvida no AEE enquanto a comunicação funcional não estiver suficientemente consolidada para a sala comum.",
            "exclusivamente ensino de Braille e Sorobã, uma vez que a deficiência auditiva não altera as estratégias de acesso de estudantes com perda visual.",
            "ensino de CAA, Braille quando pertinente, orientação e mobilidade e uso de recursos ópticos/não ópticos ou outras tecnologias assistivas conforme a necessidade individual."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reuniu atividades reconhecidas no AEE sem transformá-las em pacote obrigatório. A seleção depende da necessidade do estudante.",
        "feedbackErro": "O AEE dispõe de diferentes recursos e estratégias. Surdocegueira pode exigir combinações específicas de comunicação, mobilidade e acesso à informação, não um protocolo fixo.",
        "analiseAlternativas": [
            "Incorreta. Mobilidade e acessibilidade também fazem parte do campo educacional e podem integrar o AEE. A condição adicional não corrige o erro central da alternativa.",
            "Incorreta. AEE não é reforço escolar baseado em repetição do currículo comum.",
            "Incorreta. AEE não substitui alfabetização/escolarização da classe comum.",
            "Incorreta. Braille e Sorobã podem ser úteis, mas não são exclusivos nem suficientes para todos os perfis.",
            "Correta. Reúne atividades oficialmente reconhecidas, cuja escolha é individualizada."
        ],
        "dicaBanca": "FGV pode apresentar uma lista quase correta e inserir “exclusivamente” ou uma atividade substitutiva. Observe o caráter do AEE.",
        "pegadinha": "Atividades de AEE são meios de acesso; não um currículo paralelo.",
        "memorizar2026": "AEE pode ensinar CAA, Braille, OM e TA conforme necessidade — sem pacote obrigatório.",
        "fonte": "Inep 2026 — atividades do AEE."
    },
    {
        "id": "SEDUC-EE-SDM-022",
        "numero": 22,
        "subtopico": "Deficiência múltipla — expectativas e currículo",
        "dificuldade": "alta",
        "pergunta": "Uma professora recebe uma aluna com deficiência física e intelectual e decide, antes de avaliá-la, reduzir o currículo às habilidades de autocuidado, justificando que a combinação de deficiências inviabiliza aprendizagens acadêmicas. A prática deve ser",
        "alternativas": [
            "revista, porque a associação de deficiências não autoriza presumir incapacidade; o planejamento deve partir de potencialidades, barreiras, objetivos curriculares e apoios necessários.",
            "mantida no primeiro semestre e reavaliada somente após a aluna demonstrar independência em alimentação, higiene e mobilidade dentro da escola.",
            "mantida quando o PEI registrar a decisão, pois o documento individualizado autoriza substituição do currículo comum por objetivos funcionais adequados ao diagnóstico.",
            "revista apenas se a família apresentar avaliação clínica que comprove capacidade cognitiva compatível com os conteúdos acadêmicos previstos para a turma.",
            "mantida no AEE e modificada na classe comum, separando objetivos funcionais no atendimento especializado e objetivos acadêmicos exclusivamente com o professor regente, quando houver concordância da família e acompanhamento contínuo dos efeitos pedagógicos ao longo do período letivo."
        ],
        "correta": 0,
        "feedbackAcerto": "Você rejeitou a baixa expectativa produzida pelo diagnóstico e preservou o direito ao currículo comum com apoios e acessibilidade.",
        "feedbackErro": "Habilidades de vida diária podem fazer parte do planejamento quando relevantes, mas não devem substituir automaticamente aprendizagem acadêmica nem funcionar como pré-requisito para participação.",
        "analiseAlternativas": [
            "Correta. Planejamento inclusivo parte do estudante real e das barreiras, não de previsões deterministas sobre sua capacidade.",
            "Incorreta. Autonomia em autocuidado não é condição prévia para acesso ao currículo acadêmico.",
            "Incorreta. Registrar uma decisão inadequada no PEI não a torna inclusiva.",
            "Incorreta. A escola não precisa de comprovação clínica de “capacidade” para ensinar.",
            "Incorreta. AEE não deve receber um currículo funcional paralelo e separado da escolarização comum. A condição adicional não corrige o erro central da alternativa."
        ],
        "dicaBanca": "Distrator clássico: “objetivos funcionais” podem ser pertinentes, mas viram erro quando substituem automaticamente o currículo comum.",
        "pegadinha": "Funcionalidade complementa o desenvolvimento; não reduz a pessoa a autocuidado.",
        "memorizar2026": "Altas expectativas + apoios adequados + currículo comum acessível.",
        "fonte": "LBI; Decreto nº 12.686/2025; MEC — deficiência múltipla."
    },
    {
        "id": "SEDUC-EE-SDM-023",
        "numero": 23,
        "subtopico": "Comunicação e comportamento",
        "dificuldade": "alta",
        "pergunta": "Um estudante com deficiência múltipla apresenta movimentos corporais e vocalizações consistentes em determinadas situações, mas a equipe os considera “sem significado” porque não correspondem a palavras ou sinais convencionais. A ação pedagógica mais adequada é",
        "alternativas": [
            "ignorar as manifestações até que o estudante utilize um sistema convencional, evitando reforçar comportamentos que possam competir com a comunicação formal.",
            "registrar apenas as respostas que puderem ser reproduzidas em avaliação padronizada, pois sinais idiossincráticos não produzem evidência confiável de intenção comunicativa.",
            "substituir as manifestações por comandos de escolha fechada, reduzindo a ambiguidade e facilitando a mensuração objetiva de acertos e erros durante o AEE.",
            "observar padrões, contextos e consequências dessas manifestações, atribuir significado com cautela em parceria com o estudante/família e ampliar formas consistentes de comunicação funcional.",
            "encaminhar o comportamento para avaliação clínica antes de utilizá-lo pedagogicamente, já que comunicação não simbólica pode representar resposta involuntária sem valor educacional, desde que a escola documente a decisão no estudo de caso e monitore sua efetividade nas atividades da turma."
        ],
        "correta": 3,
        "feedbackAcerto": "Você tratou comunicação como processo construído na interação. Sinais não convencionais podem ter intenção e precisam ser observados, confirmados e ampliados.",
        "feedbackErro": "A ausência de palavras, fala ou sinais padronizados não significa ausência de comunicação. Parceiros competentes aprendem a reconhecer indícios e criam oportunidades para respostas mais claras.",
        "analiseAlternativas": [
            "Incorreta. Ignorar sinais potenciais pode reduzir iniciativa comunicativa e participação.",
            "Incorreta. Comunicação funcional não precisa ser limitada ao que cabe em instrumento padronizado.",
            "Incorreta. Escolhas fechadas podem ser úteis, mas não devem substituir investigação do repertório espontâneo.",
            "Correta. Observação contextual, consistência e parceria ajudam a transformar manifestações em comunicação compartilhada.",
            "Incorreta. Avaliação externa pode contribuir em alguns casos, mas não é condição para a escola observar e responder pedagogicamente. A condição adicional não corrige o erro central da alternativa."
        ],
        "dicaBanca": "FGV pode usar “comportamento” para esconder uma questão de comunicação. Pergunte se há função e consistência no contexto.",
        "pegadinha": "Não falar ≠ não comunicar.",
        "memorizar2026": "Comunicação emerge da interação: observar → interpretar com cautela → confirmar → ampliar repertório.",
        "fonte": "MEC — deficiência múltipla e comunicação; princípios de CAA."
    },
    {
        "id": "SEDUC-EE-SDM-024",
        "numero": 24,
        "subtopico": "Integração de apoios — I/II/III",
        "dificuldade": "alta",
        "pergunta": "Analise as afirmativas sobre escolarização de estudantes com surdocegueira e deficiência múltipla.",
        "alternativas": [
            "I e II, apenas.",
            "I, II e III.",
            "II e III, apenas.",
            "I e III, apenas.",
            "III, apenas."
        ],
        "correta": 1,
        "feedbackAcerto": "Você integrou três princípios atuais: comunicação individualizada, planejamento funcional/contextual e complementaridade entre AEE e classe comum.",
        "feedbackErro": "As três afirmativas estão corretas. Nenhuma delas transforma apoio especializado em substituição da escolarização ou presume um único sistema comunicativo.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa III também está correta.",
            "Correta. I, II e III descrevem práticas inclusivas compatíveis entre si.",
            "Incorreta. A afirmativa I também está correta.",
            "Incorreta. A afirmativa II também está correta.",
            "Incorreta. I e II também são verdadeiras."
        ],
        "dicaBanca": "Nas combinações da FGV, julgue cada frase sem procurar padrão no gabarito. Aqui nenhuma afirmação usa absolutismo indevido.",
        "pegadinha": "Nem todo item “III” é a pegadinha; às vezes as três estão corretas.",
        "memorizar2026": "Comunicação individualizada + avaliação funcional + AEE articulado = tríade essencial.",
        "fonte": "Decreto nº 12.686/2025; Inep 2026; MEC/IBC.",
        "afirmacoes": [
            "I. A forma de comunicação deve ser escolhida e ajustada conforme repertório linguístico, funcionamento sensorial e contexto do estudante.",
            "II. Na deficiência múltipla, o planejamento não deve se limitar à soma de diagnósticos, mas considerar funcionalidade, barreiras, potencialidades e apoios.",
            "III. O AEE organiza recursos e estratégias de acessibilidade e deve articular-se à classe comum, sem substituí-la."
        ]
    },
    {
        "id": "SEDUC-EE-SDM-025",
        "numero": 25,
        "subtopico": "Caso integrado FGV",
        "dificuldade": "alta",
        "pergunta": "Uma escola recebe uma estudante surdocega pós-linguística que utiliza Libras tátil, Braille e bengala longa vermelha e branca. Ela participa das aulas comuns, mas encontra barreiras em vídeos, deslocamentos e atividades de grupo. Entre as medidas propostas, a mais adequada é",
        "alternativas": [
            "manter a classe comum e concentrar todos os recursos especializados no contraturno, para que a dinâmica da turma não seja alterada por demandas individuais de acessibilidade.",
            "designar o guia-intérprete como responsável por adaptar conteúdos, decidir respostas em situações de risco e selecionar quais atividades coletivas são compatíveis com o perfil da estudante, desde que os profissionais envolvidos compartilhem registros e revisem a estratégia em reuniões pedagógicas periódicas.",
            "articular professor regente, AEE e apoios para tornar informações e espaços acessíveis durante as próprias atividades, preservar formas funcionais de comunicação e ampliar autonomia e participação.",
            "substituir vídeos e atividades de grupo por exercícios individuais em Braille, garantindo equivalência de conteúdo sem exigir mediação comunicacional durante interações com os pares.",
            "priorizar orientação e mobilidade até que a estudante se desloque com independência total, adiando temporariamente projetos coletivos que envolvam mudanças frequentes de ambiente."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reuniu os elementos essenciais do bloco: acessibilidade no contexto comum, comunicação funcional, articulação entre profissionais, autonomia e participação real.",
        "feedbackErro": "As outras alternativas oferecem apoios verdadeiros, mas os transformam em segregação, substituição de funções ou pré-requisitos para participar. A resposta inclusiva enfrenta as barreiras onde elas ocorrem.",
        "analiseAlternativas": [
            "Incorreta. Recursos do AEE precisam repercutir na acessibilidade da classe comum, não ficar confinados ao contraturno.",
            "Incorreta. Guia-intérprete media comunicação/informação e mobilidade conforme necessidade; não decide currículo nem age no lugar da estudante. A condição adicional não corrige o erro central da alternativa.",
            "Correta. Integra acessibilidade, comunicação, apoio especializado e participação no ambiente comum.",
            "Incorreta. Braille pode ser recurso importante, mas substituir experiências coletivas reduz interação e participação.",
            "Incorreta. Mobilidade pode ser desenvolvida simultaneamente à participação; independência total não é condição prévia para inclusão."
        ],
        "dicaBanca": "Questão de caso FGV: várias alternativas contêm recursos corretos. O erro está no modo como são organizados — isolamento, substituição ou condição prévia.",
        "pegadinha": "Recurso correto + organização excludente = alternativa errada.",
        "memorizar2026": "Inclusão: apoios no contexto real + comunicação acessível + autonomia progressiva + participação.",
        "fonte": "FGV/SEDUC-AM 2014; LBI; Decreto nº 12.686/2025; Lei nº 14.951/2024; MEC/IBC."
    }
];

    window.seducEducacaoEspecialSurdocegueiraDeficienciaMultipla2026 = banco;
})();
