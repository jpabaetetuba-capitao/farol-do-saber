/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 10: Abordagem Bilíngue na Escolarização de Pessoas com Surdez
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 05/09/2026.
   Bases: Lei 10.436/2002; Decreto 5.626/2005; LDB arts. 60-A/60-B;
   Lei 15.388/2026 (novo PNE); orientações Inep/MEC 2026.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-SUR-001",
        "numero": 1,
        "subtopico": "Educação Bilíngue de Surdos — conceito legal",
        "dificuldade": "alta",
        "pergunta": "Uma rede afirma que oferece Educação Bilíngue de Surdos porque mantém estudantes surdos em classes comuns com intérprete de Libras, embora toda a instrução, o currículo e a avaliação sejam organizados exclusivamente em português. À luz do art. 60-A da LDB e da orientação atual do Inep, essa afirmação é",
        "alternativas": [
            "adequada desde que o projeto político-pedagógico registre a Libras como recurso de acessibilidade, ainda que a língua de instrução do professor permaneça exclusivamente o português oral. no contexto escolar.",
            "adequada quando o intérprete está presente em todas as aulas, porque a tradução simultânea converte automaticamente uma turma comum em turma curricular bilíngue de surdos.",
            "inadequada somente se o estudante ainda não dominar a língua portuguesa escrita, pois a caracterização da modalidade depende prioritariamente do nível de proficiência em L2.",
            "inadequada, pois a modalidade pressupõe Libras como primeira língua e língua de instrução, interação, comunicação e ensino, com português escrito como segunda língua ao longo do processo escolar.",
            "inadequada apenas na educação infantil e nos anos iniciais, etapas em que a legislação exige professor surdo regente para qualquer oferta denominada educação bilíngue de surdos."
        ],
        "correta": 3,
        "feedbackAcerto": "Você distinguiu acessibilidade linguística por interpretação de uma modalidade de escolarização bilíngue. Na Educação Bilíngue de Surdos, a Libras ocupa papel estrutural no ensino, e o português é trabalhado na modalidade escrita como L2.",
        "feedbackErro": "A presença de intérprete pode assegurar acesso em determinados contextos, mas não transforma, por si só, a organização pedagógica em Educação Bilíngue de Surdos. A modalidade envolve língua de instrução, currículo, materiais e avaliação coerentes com Libras L1 e português escrito L2.",
        "analiseAlternativas": [
            "Incorreta. Libras não é mero recurso acessório na educação bilíngue; é língua de instrução e organização pedagógica.",
            "Incorreta. Intérprete é recurso/profissional de acessibilidade; sua presença isolada não caracteriza turma curricular bilíngue.",
            "Incorreta. A modalidade não depende de nível prévio de proficiência em português escrito.",
            "Correta. A definição legal e a orientação censitária atual exigem as duas línguas com papéis educacionais próprios, e não mera tradução do português oral.",
            "Incorreta. A legislação não estabelece essa exigência geral de professor surdo regente como critério único de caracterização."
        ],
        "dicaBanca": "FGV costuma colocar uma prática inclusiva verdadeira — como a presença de intérprete — dentro de uma conclusão maior e incorreta. Julgue a conclusão inteira.",
        "pegadinha": "Intérprete ≠ educação bilíngue automaticamente.",
        "memorizar2026": "Educação Bilíngue de Surdos: Libras L1 e língua de instrução + português escrito L2.",
        "fonte": "LDB, art. 60-A; Inep 2026 — Educação Bilíngue de Surdos e Turma Bilíngue."
    },
    {
        "id": "SEDUC-EE-SUR-002",
        "numero": 2,
        "subtopico": "Público-alvo da Educação Bilíngue de Surdos",
        "dificuldade": "alta",
        "pergunta": "Considerando a redação vigente da LDB, assinale a opção que identifica corretamente o público da modalidade Educação Bilíngue de Surdos.",
        "alternativas": [
            "Estudantes com qualquer deficiência auditiva, independentemente do uso de Libras ou da opção pela modalidade, desde que apresentem laudo audiológico atualizado.",
            "Estudantes surdos, surdocegos, com deficiência auditiva sinalizantes, surdos com altas habilidades/superdotação ou outras deficiências associadas, quando optantes pela modalidade.",
            "Estudantes surdos e surdocegos apenas, porque a presença de altas habilidades ou de deficiência associada desloca obrigatoriamente o atendimento para a Educação Especial. no contexto escolar.",
            "Exclusivamente estudantes surdos usuários fluentes de Libras desde a primeira infância, pois aprendizes iniciantes não podem ingressar em turma curricular bilíngue.",
            "Estudantes com surdez profunda bilateral, desde que frequentem simultaneamente classe comum, AEE e curso específico de Língua Portuguesa como segunda língua."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a enumeração legal do art. 60-A e percebeu que a opção pela modalidade faz parte da definição.",
        "feedbackErro": "A LDB não restringe o público apenas à surdez profunda nem exige fluência prévia em Libras, laudo como condição da modalidade ou frequência simultânea em três serviços.",
        "analiseAlternativas": [
            "Incorreta. A lei menciona deficiência auditiva sinalizante e a opção pela modalidade; não qualquer perda auditiva automaticamente.",
            "Correta. É o conjunto previsto no art. 60-A da LDB.",
            "Incorreta. A redação inclui surdos com AH/SD e outras deficiências associadas.",
            "Incorreta. Fluência prévia não aparece como requisito de ingresso; a modalidade também promove desenvolvimento linguístico.",
            "Incorreta. A lei não cria essa combinação obrigatória de serviços nem limita pelo grau audiológico."
        ],
        "dicaBanca": "Em questão literal da LDB, desconfie de alternativas que parecem inclusivas, mas retiram um grupo expressamente citado no artigo.",
        "pegadinha": "“Deficiência auditiva” no art. 60-A vem qualificada por “sinalizantes”.",
        "memorizar2026": "PAEBS inclui surdos, surdocegos, DA sinalizantes, surdos com AH/SD e deficiências associadas, optantes pela modalidade.",
        "fonte": "LDB, art. 60-A; MEC/Inep 2026."
    },
    {
        "id": "SEDUC-EE-SUR-003",
        "numero": 3,
        "subtopico": "Oferta ao longo da vida",
        "dificuldade": "media",
        "pergunta": "Uma secretaria municipal planeja iniciar a Educação Bilíngue de Surdos apenas no 1º ano do ensino fundamental, argumentando que antes dessa etapa a Libras deve ser tratada somente como apoio comunicacional. A orientação contraria a LDB porque a oferta",
        "alternativas": [
            "deve começar na pré-escola, aos quatro anos, e encerrar-se ao término da educação básica obrigatória, salvo para estudantes matriculados em EJA.",
            "pode iniciar no ensino fundamental, desde que a família receba formação em Libras durante a educação infantil e o estudante tenha acesso a recursos visuais.",
            "deve começar aos dois anos, quando se consolida a comunicação intencional, permanecendo facultativa durante a etapa de creche.",
            "deve iniciar quando houver diagnóstico audiológico definitivo e indicação profissional de uso predominante de Libras como língua de comunicação.",
            "deve iniciar ao zero ano, na educação infantil, e estender-se ao longo da vida, respeitando a opção pela modalidade e as especificidades linguísticas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou a literalidade do §2º do art. 60-A: a oferta começa ao zero ano, na educação infantil, e se estende ao longo da vida.",
        "feedbackErro": "A legislação não condiciona o início ao ensino fundamental, a uma idade de consolidação linguística nem a diagnóstico clínico definitivo.",
        "analiseAlternativas": [
            "Incorreta. A LDB não fixa início aos quatro anos nem término na educação básica.",
            "Incorreta. A possibilidade de apoio familiar não substitui o direito à oferta desde a educação infantil.",
            "Incorreta. A lei utiliza a expressão “ao zero ano”, e não dois anos.",
            "Incorreta. Diagnóstico clínico não é o marco temporal definido pela LDB.",
            "Correta. Reproduz o §2º do art. 60-A."
        ],
        "dicaBanca": "FGV gosta de datas e expressões literais pouco usuais. “Ao zero ano” é uma delas.",
        "pegadinha": "Não troque “ao zero ano” por “aos quatro anos” ou “no 1º ano”.",
        "memorizar2026": "Educação Bilíngue de Surdos: início ao zero ano + educação infantil + ao longo da vida.",
        "fonte": "LDB, art. 60-A, §2º."
    },
    {
        "id": "SEDUC-EE-SUR-004",
        "numero": 4,
        "subtopico": "Escolha do estudante e matrícula",
        "dificuldade": "alta",
        "pergunta": "Um estudante surdo oralizado e sua família preferem a escolarização em classe regular, com tecnologias assistivas e os recursos de acessibilidade necessários. A direção sustenta que a existência da modalidade bilíngue elimina essa possibilidade. Segundo a LDB, a direção está",
        "alternativas": [
            "incorreta, pois a oferta bilíngue não prejudica a prerrogativa de matrícula em escolas e classes regulares conforme decisão do estudante ou responsáveis, preservadas as garantias da LBI.",
            "correta, porque a Lei nº 14.191/2021 transformou a educação bilíngue em percurso obrigatório para toda pessoa surda, independentemente de sua escolha linguística.",
            "correta apenas se a rede possuir escola bilíngue no mesmo município, hipótese em que a escolha familiar deixa de produzir efeitos sobre a matrícula escolar.",
            "incorreta somente quando houver indicação clínica de implante coclear, pois a legislação vincula a opção pela classe regular à tecnologia auditiva utilizada pelo estudante. no contexto escolar.",
            "correta quando o estudante domina Libras, porque a fluência na primeira língua determina automaticamente a modalidade escolar a ser frequentada na educação básica."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu que a LDB preserva a decisão do estudante ou, quando couber, dos pais ou responsáveis, além das garantias da LBI para surdos oralizados.",
        "feedbackErro": "A Educação Bilíngue de Surdos é uma modalidade assegurada, não uma imposição automática a toda pessoa surda. A própria LDB resguarda a prerrogativa de matrícula em escolas e classes regulares.",
        "analiseAlternativas": [
            "Correta. É a regra do art. 60-A, §3º.",
            "Incorreta. A modalidade não se tornou obrigatória para toda pessoa surda.",
            "Incorreta. A existência de escola bilíngue não apaga a prerrogativa legal de escolha.",
            "Incorreta. A decisão educacional não é condicionada a implante coclear.",
            "Incorreta. Fluência em Libras não produz matrícula compulsória em modalidade específica."
        ],
        "dicaBanca": "Quando a questão disser que um direito novo “eliminou” outro direito de escolha ou acessibilidade, leia com cautela.",
        "pegadinha": "Oferta garantida não significa matrícula compulsória.",
        "memorizar2026": "LDB preserva opção pela educação bilíngue e prerrogativa de matrícula regular; surdos oralizados mantêm acesso a TA.",
        "fonte": "LDB, art. 60-A, §3º; LBI."
    },
    {
        "id": "SEDUC-EE-SUR-005",
        "numero": 5,
        "subtopico": "Lei de Libras — natureza linguística",
        "dificuldade": "media",
        "pergunta": "A Lei nº 10.436/2002 reconhece a Língua Brasileira de Sinais (Libras) como",
        "alternativas": [
            "código gestual auxiliar da língua portuguesa, cuja gramática deriva da modalidade escrita utilizada pelas comunidades surdas brasileiras.",
            "sistema universal de sinais usado de forma idêntica pelas comunidades surdas de todos os países e adaptado localmente apenas no vocabulário.",
            "meio legal de comunicação e expressão, constituído por sistema linguístico de natureza visual-motora, com estrutura gramatical própria.",
            "recurso terapêutico de reabilitação comunicacional que pode ser empregado pela escola enquanto o estudante não desenvolve oralização suficiente.",
            "modalidade escrita da língua portuguesa representada por movimentos das mãos, expressões faciais e convenções visuais de soletração."
        ],
        "correta": 2,
        "feedbackAcerto": "Você marcou a definição legal: Libras é língua, com natureza visual-motora e estrutura gramatical própria.",
        "feedbackErro": "A Lei de Libras não a reduz a código, terapia, português sinalizado ou sistema universal. Ela reconhece seu estatuto linguístico e seu uso pelas comunidades surdas do Brasil.",
        "analiseAlternativas": [
            "Incorreta. Libras não deriva gramaticalmente do português e não é mero código auxiliar.",
            "Incorreta. Línguas de sinais não são universais.",
            "Correta. É o núcleo do art. 1º e parágrafo único da Lei nº 10.436/2002.",
            "Incorreta. A lei não define Libras como instrumento terapêutico transitório.",
            "Incorreta. Libras possui estrutura própria e não é português expresso manualmente."
        ],
        "dicaBanca": "FGV já cobrou literalmente a natureza visual-motora e a estrutura gramatical própria da Libras.",
        "pegadinha": "“Visual-motora” e “gramática própria” são expressões-chave.",
        "memorizar2026": "Libras = língua reconhecida legalmente, visual-motora e com gramática própria.",
        "fonte": "Lei nº 10.436/2002, art. 1º."
    },
    {
        "id": "SEDUC-EE-SUR-006",
        "numero": 6,
        "subtopico": "Libras e Língua Portuguesa",
        "dificuldade": "alta",
        "pergunta": "Sobre a relação entre Libras e Língua Portuguesa segundo a Lei nº 10.436/2002 e a LDB, analise as afirmativas.",
        "alternativas": [
            "I e II, apenas.",
            "I e III, apenas.",
            "II e III, apenas.",
            "III, apenas.",
            "I, II e III."
        ],
        "correta": 0,
        "feedbackAcerto": "Você distinguiu corretamente o reconhecimento da Libras da exigência de ensino do português escrito como segunda língua na modalidade bilíngue.",
        "feedbackErro": "A afirmativa III é falsa: a Lei nº 10.436/2002 expressamente estabelece que Libras não pode substituir a modalidade escrita da língua portuguesa.",
        "analiseAlternativas": [
            "Correta. I e II estão corretas; III contraria a Lei de Libras.",
            "Incorreta. III é falsa, embora I esteja correta.",
            "Incorreta. III é falsa; I também é verdadeira.",
            "Incorreta. III é justamente a afirmativa incompatível com a legislação.",
            "Incorreta. A presença de III invalida o conjunto."
        ],
        "dicaBanca": "Nos itens I/II/III, a banca pode misturar uma frase pedagógica atual com uma literalidade legal. Julgue cada plano separadamente.",
        "pegadinha": "Reconhecer Libras não significa eliminar o português escrito.",
        "memorizar2026": "Bilíngue: Libras L1 + português escrito L2; Libras não substitui a modalidade escrita do português.",
        "fonte": "Lei nº 10.436/2002, art. 4º, parágrafo único; LDB, art. 60-A.",
        "afirmacoes": [
            "I. A Libras é reconhecida como meio legal de comunicação e expressão.",
            "II. Na Educação Bilíngue de Surdos, o português é ofertado na modalidade escrita como segunda língua.",
            "III. O reconhecimento legal da Libras autoriza a substituição da modalidade escrita da Língua Portuguesa em toda a escolarização."
        ]
    },
    {
        "id": "SEDUC-EE-SUR-007",
        "numero": 7,
        "subtopico": "Pessoa surda e deficiência auditiva — Decreto 5.626",
        "dificuldade": "alta",
        "pergunta": "Para os fins do Decreto nº 5.626/2005, a definição de pessoa surda enfatiza",
        "alternativas": [
            "exclusivamente o grau de perda auditiva aferido em audiograma, sendo pessoa surda quem apresenta perda bilateral igual ou superior a 41 dB nas frequências legais.",
            "a impossibilidade de desenvolver língua oral, pois o decreto diferencia surdez de deficiência auditiva pelo domínio ou não da fala em Língua Portuguesa.",
            "o uso obrigatório de Libras desde o nascimento, independentemente das experiências linguísticas, culturais e educacionais construídas pela pessoa ao longo da vida.",
            "a perda auditiva associada à compreensão e interação com o mundo por experiências visuais, manifestando a cultura principalmente pelo uso da Libras.",
            "a presença de laudo médico que reconheça identidade surda, documento necessário para que a escola assegure acessibilidade linguística e intérprete."
        ],
        "correta": 3,
        "feedbackAcerto": "Você distinguiu a definição de pessoa surda da definição quantitativa de deficiência auditiva presente no mesmo decreto.",
        "feedbackErro": "O Decreto nº 5.626/2005 associa pessoa surda à experiência visual e à cultura manifestada principalmente pelo uso da Libras; o critério de 41 dB aparece em definição separada de deficiência auditiva.",
        "analiseAlternativas": [
            "Incorreta. O critério audiométrico citado corresponde à definição de deficiência auditiva do parágrafo único, não à definição de pessoa surda do caput.",
            "Incorreta. O decreto não define surdez pela impossibilidade de oralização.",
            "Incorreta. A definição não usa “uso obrigatório desde o nascimento”.",
            "Correta. É o núcleo conceitual do art. 2º.",
            "Incorreta. O direito à acessibilidade educacional não depende desse tipo de laudo identitário."
        ],
        "dicaBanca": "FGV pode colocar o número de 41 dB, que é verdadeiro no decreto, dentro da pergunta errada. Verifique qual conceito está sendo solicitado.",
        "pegadinha": "Pessoa surda e deficiência auditiva aparecem separadas no art. 2º.",
        "memorizar2026": "Decreto 5.626: pessoa surda → experiências visuais/cultura/Libras; DA → critério audiométrico legal.",
        "fonte": "Decreto nº 5.626/2005, art. 2º."
    },
    {
        "id": "SEDUC-EE-SUR-008",
        "numero": 8,
        "subtopico": "Libras na formação docente",
        "dificuldade": "media",
        "pergunta": "Uma universidade revisa seus currículos e decide em quais cursos a Libras deve constar obrigatoriamente, nos termos do Decreto nº 5.626/2005. A opção correta é",
        "alternativas": [
            "inseri-la apenas nas licenciaturas em Pedagogia e Letras, porque os demais cursos de formação de professores podem tratá-la como conteúdo optativo de educação inclusiva.",
            "inseri-la nos cursos de formação de professores para o magistério e nos cursos de Fonoaudiologia, conforme as regras do decreto.",
            "inseri-la em todos os cursos superiores, sem distinção de área, pois o reconhecimento legal da Libras a tornou componente obrigatório universal da graduação brasileira.",
            "inseri-la somente nos cursos destinados à Educação Especial, uma vez que professores das classes comuns recebem apoio do intérprete em vez de formação linguística.",
            "inseri-la como disciplina obrigatória apenas quando a instituição possuir estudante surdo matriculado no semestre, vinculando a oferta à demanda individual."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou corretamente o art. 3º do Decreto nº 5.626/2005: Libras é disciplina obrigatória nos cursos de formação de professores e nos cursos de Fonoaudiologia.",
        "feedbackErro": "A obrigatoriedade não se restringe a Pedagogia/Educação Especial, mas também não alcança indistintamente todos os cursos superiores.",
        "analiseAlternativas": [
            "Incorreta. A obrigação alcança os cursos de formação de professores em sentido mais amplo.",
            "Correta. É a regra do art. 3º.",
            "Incorreta. O decreto não torna Libras obrigatória em toda graduação.",
            "Incorreta. A formação não se limita a docentes especializados.",
            "Incorreta. A obrigação curricular não depende da matrícula circunstancial de aluno surdo."
        ],
        "dicaBanca": "Em legislação, alternativas “todos os cursos” e “somente Educação Especial” são extremos sedutores. Procure o alcance exato.",
        "pegadinha": "Fonoaudiologia também entra na obrigatoriedade.",
        "memorizar2026": "Libras obrigatória: formação de professores + Fonoaudiologia, conforme Decreto 5.626.",
        "fonte": "Decreto nº 5.626/2005, art. 3º."
    },
    {
        "id": "SEDUC-EE-SUR-009",
        "numero": 9,
        "subtopico": "Acesso à comunicação e informação",
        "dificuldade": "alta",
        "pergunta": "Nos termos do Decreto nº 5.626/2005, uma instituição federal de ensino deve assegurar às pessoas surdas acesso à comunicação, à informação e à educação",
        "alternativas": [
            "apenas nas atividades curriculares presenciais, porque processos seletivos e serviços administrativos são regidos por normas gerais de acessibilidade e não pelo decreto.",
            "por meio de tradução de aulas, sendo dispensáveis tecnologias, materiais didáticos acessíveis e formação do professor regente sobre singularidade linguística.",
            "prioritariamente no AEE, transferindo para esse serviço a responsabilidade de tornar acessíveis os conteúdos produzidos pelos professores das classes comuns.",
            "somente após identificação formal da preferência linguística do estudante por Libras, pois usuários oralizados estão fora das garantias educacionais do decreto.",
            "nos processos seletivos, nas atividades e nos conteúdos curriculares, em todos os níveis, etapas e modalidades, da educação infantil à superior."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu o alcance amplo do art. 14: processos seletivos, atividades e conteúdos curriculares, em todos os níveis e etapas.",
        "feedbackErro": "O dever de acessibilidade não se restringe ao AEE nem a uma única ferramenta. O decreto prevê formação, profissionais, avaliação coerente, tecnologia e recursos didáticos.",
        "analiseAlternativas": [
            "Incorreta. O art. 14 inclui processos seletivos e outras dimensões institucionais.",
            "Incorreta. Tradução é uma medida entre várias e não elimina outras responsabilidades.",
            "Incorreta. A responsabilidade é institucional e não pode ser deslocada integralmente ao AEE.",
            "Incorreta. O direito não exclui automaticamente surdos oralizados.",
            "Correta. É a abrangência prevista no caput do art. 14."
        ],
        "dicaBanca": "FGV costuma ampliar ou reduzir indevidamente o alcance de um dispositivo. Observe os espaços e etapas expressamente enumerados.",
        "pegadinha": "Acessibilidade não começa e termina na sala de aula.",
        "memorizar2026": "Art. 14: seleção + atividades + conteúdos, da EI à educação superior.",
        "fonte": "Decreto nº 5.626/2005, art. 14."
    },
    {
        "id": "SEDUC-EE-SUR-010",
        "numero": 10,
        "subtopico": "Profissionais e funções",
        "dificuldade": "alta",
        "pergunta": "Em uma escola, o intérprete de Libras passa a definir objetivos curriculares, substituir o professor nas explicações e atribuir as notas do estudante surdo. À luz do Decreto nº 5.626/2005, a organização é inadequada porque",
        "alternativas": [
            "o intérprete pode assumir a docência apenas nos componentes em que o professor regente desconhece Libras, devendo a escola formalizar a substituição no diário de classe.",
            "o intérprete deveria atuar somente fora da sala de aula, pois dentro da classe a acessibilidade linguística é responsabilidade exclusiva do professor bilíngue.",
            "a função de tradução e interpretação é distinta da função docente; o professor mantém a responsabilidade pedagógica, ainda que trabalhe articuladamente com o intérprete.",
            "a avaliação do estudante surdo deve ser realizada exclusivamente pelo professor do AEE, que recebe do intérprete registros sobre participação e comunicação em aula.",
            "o intérprete só poderia atribuir notas se tivesse licenciatura na mesma área do professor regente e certificação de proficiência em Libras-Língua Portuguesa."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou uma distinção essencial: intérprete e professor têm funções diferentes. Articulação é necessária, mas tradução/interpretação não transfere a responsabilidade pedagógica da docência.",
        "feedbackErro": "O Decreto nº 5.626/2005 explicita que a função de tradutor e intérprete é distinta da função de professor docente. A presença do intérprete não substitui planejamento, ensino e avaliação pelo professor responsável.",
        "analiseAlternativas": [
            "Incorreta. O intérprete não se torna automaticamente docente substituto pela falta de Libras do regente.",
            "Incorreta. O decreto prevê atuação do intérprete inclusive em sala de aula.",
            "Correta. A distinção funcional é expressa no decreto.",
            "Incorreta. O AEE não assume automaticamente a avaliação curricular da classe comum.",
            "Incorreta. Formação adicional não transforma a função de intérprete em docência no caso descrito."
        ],
        "dicaBanca": "FGV gosta de confundir colaboração profissional com substituição de função. Pergunte: quem ensina? quem interpreta?",
        "pegadinha": "Intérprete não é professor particular do aluno surdo.",
        "memorizar2026": "Professor = responsabilidade pedagógica; TILS = tradução/interpretação e acessibilidade linguística.",
        "fonte": "Decreto nº 5.626/2005, arts. 14, §2º, e 21."
    },
    {
        "id": "SEDUC-EE-SUR-011",
        "numero": 11,
        "subtopico": "Escolas e classes bilíngues — Decreto 5.626",
        "dificuldade": "alta",
        "pergunta": "Segundo o Decreto nº 5.626/2005, são denominadas escolas ou classes de educação bilíngue aquelas em que",
        "alternativas": [
            "a Libras é utilizada no AEE e a Língua Portuguesa oral permanece como única língua de instrução durante as aulas do currículo comum.",
            "a Libras e a modalidade escrita da Língua Portuguesa são línguas de instrução utilizadas no desenvolvimento de todo o processo educativo.",
            "o estudante escolhe entre receber todo o currículo em Libras ou todo o currículo em português escrito, sem articulação entre as duas línguas.",
            "a Libras é componente extracurricular e o português escrito é empregado somente em atividades avaliativas e documentos oficiais da escola.",
            "a presença permanente de intérprete assegura o caráter bilíngue mesmo quando o professor e o currículo são organizados apenas em língua portuguesa."
        ],
        "correta": 1,
        "feedbackAcerto": "Você recuperou a definição do §1º do art. 22 do Decreto nº 5.626/2005.",
        "feedbackErro": "No decreto, educação bilíngue não é apenas oferta de Libras em momento separado nem simples presença de intérprete: as línguas integram o processo educativo.",
        "analiseAlternativas": [
            "Incorreta. Libras não fica restrita ao AEE na organização bilíngue.",
            "Correta. É a redação do §1º do art. 22.",
            "Incorreta. A modalidade não se estrutura pela exclusão de uma das línguas.",
            "Incorreta. Libras não é mero componente extracurricular.",
            "Incorreta. Interpretação isolada não define a modalidade bilíngue."
        ],
        "dicaBanca": "Questões literais podem vir misturadas a exemplos de acessibilidade plausíveis. Procure a definição normativa exata.",
        "pegadinha": "Bilíngue não é “português + intérprete”.",
        "memorizar2026": "Escola/classe bilíngue: Libras e português escrito integrados ao processo educativo.",
        "fonte": "Decreto nº 5.626/2005, art. 22, §1º."
    },
    {
        "id": "SEDUC-EE-SUR-012",
        "numero": 12,
        "subtopico": "Português escrito como L2",
        "dificuldade": "alta",
        "pergunta": "Uma professora corrige textos produzidos por estudantes surdos aprendizes de português como L2 utilizando exatamente os mesmos critérios formais aplicados a falantes nativos, sem considerar o percurso de segunda língua. Conforme o Decreto nº 5.626/2005, a avaliação deve",
        "alternativas": [
            "manter critérios idênticos, porque reconhecer singularidades linguísticas criaria redução curricular incompatível com a igualdade de expectativas acadêmicas.",
            "priorizar apenas a correção ortográfica, uma vez que o aspecto semântico já foi desenvolvido em Libras e não precisa ser considerado na produção em L2.",
            "suspender a produção escrita até o estudante atingir fluência avançada em Libras, evitando interferências entre a primeira e a segunda língua durante a alfabetização. no contexto escolar.",
            "valorizar o aspecto semântico e reconhecer a singularidade linguística manifestada no aspecto formal da Língua Portuguesa, em mecanismos coerentes com aprendizagem de L2.",
            "substituir avaliações escritas por respostas exclusivamente em Libras, pois a modalidade bilíngue dispensa a aprendizagem formal da Língua Portuguesa escrita."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou uma previsão expressa do art. 14: avaliação do português escrito coerente com aprendizagem de segunda língua, valorizando o aspecto semântico e reconhecendo singularidade linguística.",
        "feedbackErro": "Reconhecer o português como L2 não significa retirar objetivos de escrita nem ignorar a forma, mas exige critérios avaliativos coerentes com o processo linguístico do estudante surdo.",
        "analiseAlternativas": [
            "Incorreta. Igualdade de direito não exige ignorar a condição de aprendiz de L2.",
            "Incorreta. O aspecto semântico deve ser valorizado, não descartado.",
            "Incorreta. A legislação não condiciona o início da escrita a fluência avançada em Libras.",
            "Correta. É a orientação do art. 14, §1º, VI.",
            "Incorreta. Português escrito permanece componente da educação bilíngue."
        ],
        "dicaBanca": "FGV costuma cobrar avaliação como aplicação concreta da legislação. Observe se a alternativa confunde equidade com critérios cegos ao processo de L2.",
        "pegadinha": "L2 não é “português errado”; é processo linguístico que exige metodologia e avaliação próprias.",
        "memorizar2026": "Português escrito L2: ensino específico + avaliação coerente + valorização semântica + singularidade linguística.",
        "fonte": "Decreto nº 5.626/2005, art. 14, §1º, VI; MEC — Português para Surdos."
    },
    {
        "id": "SEDUC-EE-SUR-013",
        "numero": 13,
        "subtopico": "Avaliação em Libras",
        "dificuldade": "media",
        "pergunta": "Em uma avaliação de História, a escola deseja permitir que um estudante surdo expresse determinados conhecimentos em Libras. O Decreto nº 5.626/2005 prevê que a instituição pode",
        "alternativas": [
            "utilizar mecanismos alternativos para avaliação de conhecimentos expressos em Libras, com devido registro em vídeo ou outros meios eletrônicos e tecnológicos.",
            "aceitar apenas interpretação oral simultânea sem registro, pois avaliações em Libras não podem ser arquivadas em razão da natureza visual da língua.",
            "converter toda avaliação para Libras e dispensar definitivamente o português escrito em qualquer componente curricular da educação básica.",
            "permitir resposta em Libras somente quando o intérprete também for professor licenciado na disciplina e assumir responsabilidade pela correção do conteúdo. no contexto escolar.",
            "restringir a avaliação em Libras às atividades do AEE, mantendo obrigatoriamente apenas instrumentos em língua portuguesa na classe comum."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou a possibilidade expressa de mecanismos alternativos para conhecimentos expressos em Libras, com registro adequado.",
        "feedbackErro": "O decreto reconhece meios tecnológicos de registro da avaliação em Libras. Isso não elimina a aprendizagem do português escrito nem transfere correção ao intérprete.",
        "analiseAlternativas": [
            "Correta. É o art. 14, §1º, VII.",
            "Incorreta. A norma justamente prevê registro em vídeo ou outros meios tecnológicos.",
            "Incorreta. Avaliação em Libras não elimina o português escrito L2.",
            "Incorreta. Intérprete não assume automaticamente a função docente/avaliativa.",
            "Incorreta. A possibilidade não se restringe ao AEE."
        ],
        "dicaBanca": "Quando a banca trouxer tecnologia em avaliação, verifique se ela serve para registrar a produção em Libras, e não para descaracterizar o currículo.",
        "pegadinha": "Resposta em Libras pode ser avaliada e registrada.",
        "memorizar2026": "Avaliação acessível pode usar Libras + registro em vídeo/meio eletrônico.",
        "fonte": "Decreto nº 5.626/2005, art. 14, §1º, VII."
    },
    {
        "id": "SEDUC-EE-SUR-014",
        "numero": 14,
        "subtopico": "Turma bilíngue x AEE",
        "dificuldade": "alta",
        "pergunta": "No Censo Escolar, uma escola pretende declarar como “turma curricular de educação bilíngue de surdos” uma sala que funciona apenas no contraturno e oferece atividades de AEE em Libras. Segundo a orientação atual do Inep, a declaração é",
        "alternativas": [
            "correta, porque toda turma de AEE que utiliza Libras e português escrito deve ser registrada simultaneamente como classe bilíngue de escolarização.",
            "correta quando o professor do AEE é bilíngue e fluente em Libras, independentemente da natureza curricular ou complementar do atendimento oferecido.",
            "correta se os estudantes também estiverem matriculados em classe comum, já que a dupla matrícula transforma o AEE em componente curricular bilíngue.",
            "incorreta apenas quando o AEE funciona fora da escola de origem, pois dentro da mesma unidade os dois tipos de turma têm a mesma classificação censitária.",
            "incorreta, pois turma curricular de Educação Bilíngue de Surdos é turma de ensino/escolarização e não deve ser confundida com turma de AEE."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu uma atualização prática importante do Inep: turma curricular bilíngue e turma de AEE são categorias diferentes.",
        "feedbackErro": "A linguagem comum pode aproximar os dois serviços, mas a natureza é distinta. Educação Bilíngue de Surdos organiza escolarização curricular; AEE é apoio especializado quando necessário.",
        "analiseAlternativas": [
            "Incorreta. Uso de Libras no AEE não converte automaticamente a turma em escolarização bilíngue.",
            "Incorreta. Formação do professor não redefine, sozinha, a categoria da turma.",
            "Incorreta. Dupla matrícula não altera a natureza de cada turma.",
            "Incorreta. A distinção não depende do local físico do AEE.",
            "Correta. O Inep destaca explicitamente essa diferença."
        ],
        "dicaBanca": "Esta é uma pegadinha atual de 2026: duas expressões próximas, mas com funções administrativas e pedagógicas distintas.",
        "pegadinha": "Turma bilíngue curricular ≠ turma de AEE.",
        "memorizar2026": "EBS = escolarização curricular; AEE bilíngue = apoio especializado quando necessário.",
        "fonte": "Inep 2026 — Como declarar Turma de Educação Bilíngue de Surdos; LDB, art. 60-A.",
        "atualizacao2026": "O Inep atualizou em 31/08/2026 a orientação censitária e reforçou que turma curricular bilíngue não deve ser confundida com turma de AEE."
    },
    {
        "id": "SEDUC-EE-SUR-015",
        "numero": 15,
        "subtopico": "AEE bilíngue",
        "dificuldade": "alta",
        "pergunta": "Sobre o atendimento educacional especializado na Educação Bilíngue de Surdos, está correto afirmar que",
        "alternativas": [
            "é obrigatório para todo estudante da modalidade e deve substituir parte da escolarização curricular sempre que houver dificuldade no uso do português escrito.",
            "pode ser oferecido, quando necessário, para atender especificidades linguísticas, sem se confundir com a própria turma curricular de escolarização bilíngue.",
            "deve ocorrer exclusivamente em português escrito, porque a Libras já é utilizada como língua de instrução na modalidade e não pode integrar o apoio especializado.",
            "é destinado apenas a estudantes surdocegos ou com outras deficiências associadas, pois estudantes com surdez sem associação recebem apenas educação bilíngue curricular.",
            "deve ser realizado pelo intérprete de Libras, que acumula a função de professor do AEE sempre que atua na mesma escola do estudante."
        ],
        "correta": 1,
        "feedbackAcerto": "Você diferenciou o apoio especializado da modalidade escolar. A LDB prevê AEE bilíngue quando necessário para responder a especificidades linguísticas.",
        "feedbackErro": "AEE não é obrigatório universal, não substitui a escolarização e não é função automaticamente atribuída ao intérprete.",
        "analiseAlternativas": [
            "Incorreta. A necessidade deve ser avaliada; AEE não substitui escolarização curricular.",
            "Correta. É a lógica do art. 60-A, §1º, articulada à distinção censitária atual.",
            "Incorreta. A Libras pode integrar o atendimento conforme a necessidade linguística.",
            "Incorreta. A lei não restringe AEE bilíngue a deficiências associadas.",
            "Incorreta. Intérprete e professor do AEE são funções distintas."
        ],
        "dicaBanca": "FGV explora bastante o verbo “substituir”. Em modalidades e AEE, verifique sempre se a alternativa está trocando apoio por escolarização.",
        "pegadinha": "AEE pode complementar o percurso; não é a própria turma bilíngue.",
        "memorizar2026": "AEE bilíngue: quando necessário, específico, articulado e não substitutivo.",
        "fonte": "LDB, art. 60-A, §1º; Inep 2026."
    },
    {
        "id": "SEDUC-EE-SUR-016",
        "numero": 16,
        "subtopico": "Práticas pedagógicas visuais",
        "dificuldade": "alta",
        "pergunta": "Em uma turma bilíngue, o professor utiliza imagens, mapas conceituais, vídeos sinalizados e organização espacial da informação. Um colega conclui que, por serem “recursos visuais”, essas estratégias autorizam simplificar os objetivos curriculares dos estudantes surdos. A conclusão é",
        "alternativas": [
            "correta, porque o predomínio da experiência visual exige substituir conceitos abstratos por atividades concretas de menor complexidade durante toda a educação básica.",
            "incorreva apenas se houver estudante ouvinte na turma, pois em classes exclusivamente surdas a flexibilização de objetivos é consequência natural da diferença linguística. no contexto escolar.",
            "incorreta, porque recursos visuais e organização bilíngue tornam o acesso mais adequado sem justificar, por si só, redução das expectativas e dos objetivos de aprendizagem.",
            "correta quando o português escrito ainda está em aquisição, já que conteúdos acadêmicos devem aguardar o desenvolvimento completo da segunda língua.",
            "incorreta somente quando a família solicita currículo comum, pois a escola pode adotar objetivos reduzidos como regra pedagógica na ausência de manifestação familiar."
        ],
        "correta": 2,
        "feedbackAcerto": "Você separou acessibilidade linguística/metodológica de redução curricular. Visualidade pode ampliar compreensão sem empobrecer o conhecimento escolar.",
        "feedbackErro": "Prática bilíngue não equivale a simplificação. O professor deve organizar linguagem, recursos e estratégias para viabilizar acesso aos objetivos curriculares e altas expectativas.",
        "analiseAlternativas": [
            "Incorreta. Experiência visual não implica currículo de menor complexidade.",
            "Incorreta. A presença de ouvintes não define o direito aos objetivos de aprendizagem.",
            "Correta. Recursos visuais são meios de acesso, não justificativa automática para redução de expectativas.",
            "Incorreta. Aquisição de L2 não exige suspender conteúdos acadêmicos.",
            "Incorreta. Direito ao currículo não depende de pedido familiar para existir."
        ],
        "dicaBanca": "Distrator clássico: uma característica verdadeira do aluno é usada para justificar uma consequência pedagógica que não decorre dela.",
        "pegadinha": "Visualidade ≠ simplificação.",
        "memorizar2026": "Metodologia bilíngue adapta o acesso e a linguagem, não reduz automaticamente o currículo.",
        "fonte": "LBI, art. 28; LDB, art. 60-B; MEC — Educação Bilíngue de Surdos."
    },
    {
        "id": "SEDUC-EE-SUR-017",
        "numero": 17,
        "subtopico": "Materiais didáticos e professores bilíngues",
        "dificuldade": "media",
        "pergunta": "Além das garantias gerais da Educação Especial, o art. 60-B da LDB determina que os sistemas de ensino assegurem ao público da Educação Bilíngue de Surdos",
        "alternativas": [
            "professores bilíngues com formação mínima de nível médio, desde que aprovados em exame prático de proficiência organizado pelo sistema de ensino.",
            "apenas intérpretes de Libras, pois o professor regente pode permanecer monolíngue quando a tradução simultânea cobre todo o horário escolar.",
            "materiais exclusivamente digitais em Libras, dispensando livros e produções em português escrito para evitar interferência entre L1 e L2.",
            "materiais didáticos específicos e professores bilíngues com formação e especialização adequadas, em nível superior.",
            "currículo nacional próprio e separado da BNCC, elaborado pelas escolas bilíngues sem necessidade de articulação com as diretrizes da educação básica."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou a garantia adicional prevista no art. 60-B: materiais didáticos e professores bilíngues com formação e especialização adequadas, em nível superior.",
        "feedbackErro": "A LDB não reduz a modalidade a intérprete, não elimina materiais em português escrito e não autoriza currículo desconectado das referências nacionais.",
        "analiseAlternativas": [
            "Incorreta. O art. 60-B exige formação e especialização adequadas em nível superior.",
            "Incorreta. Intérprete não substitui professor bilíngue nem define sozinho a modalidade.",
            "Incorreta. A modalidade utiliza Libras L1 e português escrito L2; os materiais podem assumir diferentes formatos.",
            "Correta. É a redação central do art. 60-B.",
            "Incorreta. Especificidade linguística não significa currículo nacional paralelo à educação básica."
        ],
        "dicaBanca": "FGV costuma transformar um profissional importante em solução exclusiva. Na educação bilíngue, observe o conjunto de professores, materiais, currículo e acessibilidade.",
        "pegadinha": "Professor bilíngue e intérprete não são sinônimos.",
        "memorizar2026": "Art. 60-B: materiais didáticos + professores bilíngues com formação/especialização adequadas em nível superior.",
        "fonte": "LDB, art. 60-B."
    },
    {
        "id": "SEDUC-EE-SUR-018",
        "numero": 18,
        "subtopico": "Participação da comunidade surda",
        "dificuldade": "alta",
        "pergunta": "Um sistema de ensino cria critérios de contratação e avaliação periódica de professores bilíngues sem qualquer participação de entidades representativas das pessoas surdas. Considerando a LDB, essa decisão",
        "alternativas": [
            "é inadequada, pois o art. 60-B determina que tais entidades sejam ouvidas nos processos de contratação e avaliação periódica desses professores.",
            "é adequada se a banca examinadora contar com intérprete de Libras, medida que substitui a escuta das entidades representativas prevista na legislação.",
            "é adequada, porque a participação social ocorre apenas na elaboração do projeto político-pedagógico das escolas, não nos procedimentos de pessoal do sistema.",
            "é inadequada somente para concursos destinados a professores surdos, não alcançando processos seletivos de docentes ouvintes fluentes em Libras.",
            "é adequada quando os critérios técnicos são definidos por universidade pública, hipótese em que a consulta à comunidade surda se torna facultativa."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu uma previsão específica de participação social no parágrafo único do art. 60-B.",
        "feedbackErro": "A LDB manda ouvir entidades representativas das pessoas surdas nesses processos; intérprete na banca ou elaboração técnica por universidade não substituem essa exigência.",
        "analiseAlternativas": [
            "Correta. É a determinação do parágrafo único do art. 60-B.",
            "Incorreta. Intérprete pode garantir comunicação, mas não substitui a escuta institucional prevista.",
            "Incorreta. A lei prevê participação também nesses processos de contratação e avaliação.",
            "Incorreta. A regra não se limita ao candidato surdo.",
            "Incorreta. A origem técnica dos critérios não elimina a previsão legal de participação."
        ],
        "dicaBanca": "Quando a FGV pergunta participação da comunidade, procure saber se há uma previsão legal específica além dos princípios gerais.",
        "pegadinha": "“Ouvir entidades representativas” é texto legal, não mera recomendação.",
        "memorizar2026": "Contratação/avaliação de professores bilíngues: ouvir entidades representativas das pessoas surdas.",
        "fonte": "LDB, art. 60-B, parágrafo único."
    },
    {
        "id": "SEDUC-EE-SUR-019",
        "numero": 19,
        "subtopico": "Família e difusão da Libras",
        "dificuldade": "media",
        "pergunta": "Uma escola bilíngue entende que apenas estudantes surdos e professores especializados precisam ter contato com Libras. À luz do Decreto nº 5.626/2005, uma ação mais coerente seria",
        "alternativas": [
            "restringir os cursos de Libras aos estudantes surdos para preservar a língua como instrumento identitário específico e evitar interferências de usuários iniciantes.",
            "oferecer Libras apenas a familiares que comprovem convivência diária com o estudante, porque a difusão da língua fora desse núcleo não integra responsabilidade escolar.",
            "substituir atividades de formação por orientações pontuais do professor do AEE, pois cursos para a comunidade escolar extrapolam as ações previstas no decreto.",
            "priorizar materiais escritos em português para funcionários e gestores, reservando Libras às situações em que houver mediação direta de intérprete profissional.",
            "promover uso e difusão de Libras na comunidade escolar, envolvendo professores, alunos, funcionários, direção e familiares, inclusive mediante cursos."
        ],
        "correta": 4,
        "feedbackAcerto": "Você percebeu que a acessibilidade linguística também envolve comunidade escolar. O decreto prevê apoiar o uso e a difusão de Libras entre diferentes atores, inclusive familiares.",
        "feedbackErro": "Libras não deve ficar confinada ao estudante e a profissionais especializados. A escola pode promover ambiente linguístico mais acessível por formação e difusão.",
        "analiseAlternativas": [
            "Incorreta. Difusão não ameaça a identidade linguística e integra as medidas previstas.",
            "Incorreta. A ação alcança comunidade escolar mais ampla.",
            "Incorreta. O decreto menciona inclusive oferta de cursos.",
            "Incorreta. Restringir Libras ao intérprete mantém barreiras comunicacionais.",
            "Correta. Reproduz o art. 14, §1º, V."
        ],
        "dicaBanca": "FGV pode perguntar inclusão pela perspectiva institucional: não pense apenas no aluno, mas na transformação comunicacional da escola.",
        "pegadinha": "Acessibilidade linguística é responsabilidade coletiva.",
        "memorizar2026": "Difusão de Libras: professores + alunos + funcionários + direção + familiares.",
        "fonte": "Decreto nº 5.626/2005, art. 14, §1º, V."
    },
    {
        "id": "SEDUC-EE-SUR-020",
        "numero": 20,
        "subtopico": "Oralismo x abordagem bilíngue",
        "dificuldade": "alta",
        "pergunta": "Em uma reunião pedagógica, propõe-se proibir Libras nas atividades escolares para estimular exclusivamente a fala e a leitura labial, entendendo que o uso de sinais atrasaria a aprendizagem do português. Essa proposta se aproxima historicamente do",
        "alternativas": [
            "bilinguismo, porque estabelece prioridade temporária à língua oral antes da introdução da segunda língua escrita.",
            "oralismo, por centrar a educação na língua oral e restringir o uso de sinais como estratégia de escolarização.",
            "sociointeracionismo, pois busca desenvolver linguagem por meio de interações face a face sem apoio de recursos gráficos.",
            "comunicacionismo total, uma vez que escolhe a modalidade considerada mais eficiente para cada conteúdo do currículo.",
            "modelo social da deficiência, porque procura reduzir barreiras pela intensificação da comunicação oral em ambientes ouvintes."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou o oralismo como abordagem historicamente marcada pela centralidade da fala e pela restrição às línguas de sinais.",
        "feedbackErro": "A abordagem bilíngue contemporânea reconhece Libras como L1 e português escrito como L2; proibir a língua de sinais para privilegiar oralização contraria essa lógica.",
        "analiseAlternativas": [
            "Incorreta. Bilinguismo não começa por exclusão da Libras.",
            "Correta. A descrição corresponde ao oralismo.",
            "Incorreta. A característica central do caso não é interação social, mas imposição da língua oral.",
            "Incorreta. Comunicação total busca combinar diferentes recursos, não proibir sinais em favor exclusivo da fala.",
            "Incorreta. Modelo social não fundamenta supressão da língua de sinais."
        ],
        "dicaBanca": "Em história da educação de surdos, identifique qual língua é valorizada e se sinais são aceitos, combinados ou proibidos.",
        "pegadinha": "Bilinguismo não é oralismo com Libras de apoio.",
        "memorizar2026": "Oralismo: centralidade da fala/oralização; bilinguismo: Libras L1 + português escrito L2.",
        "fonte": "Fundamentos históricos da educação de surdos; Lei nº 14.191/2021."
    },
    {
        "id": "SEDUC-EE-SUR-021",
        "numero": 21,
        "subtopico": "Novo PNE 2026 — alfabetização bilíngue",
        "dificuldade": "alta",
        "pergunta": "A Lei nº 15.388/2026, que aprovou o novo Plano Nacional de Educação, estabeleceu meta específica para alfabetização do público da Educação Bilíngue de Surdos. Segundo essa meta, deve-se",
        "alternativas": [
            "alfabetizar em Libras até o final do segundo ano e iniciar português escrito apenas no terceiro ano, quando já estiver consolidada a primeira língua.",
            "garantir alfabetização em português escrito até o primeiro ano e, para estudantes que optarem pela modalidade, Libras até o final do segundo ano.",
            "alfabetizar simultaneamente em Libras e português oral até o primeiro ano, deixando o português escrito para a etapa final do ensino fundamental.",
            "alfabetizar em Libras como L1 desde a educação infantil até o primeiro ano do ensino fundamental e em português escrito como L2 até o final do segundo ano.",
            "estabelecer metas de alfabetização apenas para estudantes surdos sem deficiências associadas, porque os demais seguem exclusivamente os indicadores da Educação Especial."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou uma atualização de 2026 com grande potencial de prova: a Meta 10.d fixa marcos de alfabetização em Libras L1 e português escrito L2.",
        "feedbackErro": "O novo PNE diferencia os marcos das duas línguas e inclui o público da Educação Bilíngue de Surdos como um todo, sem a exclusão sugerida nos distratores.",
        "analiseAlternativas": [
            "Incorreta. Inverte os marcos temporais da meta.",
            "Incorreta. Também inverte a ordem e os prazos previstos.",
            "Incorreta. A meta trata de português escrito, não de português oral como L2.",
            "Correta. Reproduz a Meta 10.d do PNE 2026.",
            "Incorreta. A meta se dirige ao PAEBS, não apenas a surdos sem associação."
        ],
        "dicaBanca": "Atualização recente costuma render literalidade. Grave os marcos: Libras até 1º ano; português escrito até 2º ano.",
        "pegadinha": "Não troque L2 escrita por oralização.",
        "memorizar2026": "PNE 2026, Meta 10.d: Libras L1 até 1º ano; português escrito L2 até fim do 2º ano.",
        "fonte": "Lei nº 15.388/2026, Objetivo 10, Meta 10.d.",
        "atualizacao2026": "O novo PNE foi aprovado pela Lei nº 15.388, de 14/04/2026, e traz objetivo próprio para Educação Especial Inclusiva e Educação Bilíngue de Surdos."
    },
    {
        "id": "SEDUC-EE-SUR-022",
        "numero": 22,
        "subtopico": "Novo PNE 2026 — diretrizes curriculares",
        "dificuldade": "alta",
        "pergunta": "Entre as estratégias do novo PNE para a Educação Bilíngue de Surdos está a instituição de diretrizes nacionais destinadas a orientar documentos curriculares. Esses documentos devem considerar",
        "alternativas": [
            "a Libras como atividade complementar, o português oral como língua principal de ensino e adaptações individuais para estudantes que não acompanhem o currículo. no contexto escolar.",
            "a definição de um currículo único nacional exclusivo para escolas bilíngues, independente das diversidades regional, estadual e local.",
            "a Libras como língua de instrução, interação, comunicação e ensino, o português escrito como segunda língua e as especificidades linguísticas, identitárias e culturais do PAEBS.",
            "a substituição das diretrizes da educação básica por referenciais próprios da comunidade surda, sem articulação com objetivos educacionais nacionais.",
            "a utilização preferencial de intérpretes na função de regência para assegurar que todos os componentes curriculares sejam traduzidos de forma padronizada."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou a Estratégia 10.24 do novo PNE, que articula papel da Libras, português escrito L2 e especificidades linguísticas, identitárias e culturais.",
        "feedbackErro": "O PNE não transforma Libras em atividade complementar nem cria currículo isolado do restante da educação básica; a estratégia orienta documentos curriculares respeitando também diversidade territorial.",
        "analiseAlternativas": [
            "Incorreta. Libras ocupa função de instrução, e o português considerado é escrito como L2.",
            "Incorreta. A estratégia manda respeitar diversidade regional, estadual e local.",
            "Correta. É a formulação central da Estratégia 10.24.",
            "Incorreta. Especificidade não significa ruptura com as referências educacionais nacionais.",
            "Incorreta. Intérprete não deve ser confundido com regente/professor bilíngue."
        ],
        "dicaBanca": "Em norma nova, a FGV pode alterar uma única palavra: “complementar” no lugar de “instrução” já torna a alternativa errada.",
        "pegadinha": "Libras é estrutural, não acessória.",
        "memorizar2026": "PNE 2026: Libras = instrução/interação/comunicação/ensino; português escrito = L2; respeitar identidade e cultura.",
        "fonte": "Lei nº 15.388/2026, Estratégia 10.24.",
        "atualizacao2026": "A Estratégia 10.24 do PNE 2026 reforça explicitamente a centralidade curricular da Libras e do português escrito como L2."
    },
    {
        "id": "SEDUC-EE-SUR-023",
        "numero": 23,
        "subtopico": "Situação integrada — escola comum",
        "dificuldade": "alta",
        "pergunta": "Em uma escola comum, dois estudantes surdos optantes pela modalidade bilíngue participam de uma turma curricular em que a professora é fluente em Libras. A escola também dispõe de materiais bilíngues, trabalha português escrito como L2 e oferece AEE bilíngue a um deles após identificação de necessidade específica. A organização descrita",
        "alternativas": [
            "é compatível, pois a modalidade pode ocorrer em escola comum e o AEE bilíngue pode ser acrescentado quando necessário, sem se confundir com a escolarização curricular.",
            "é incompatível com a LDB, porque a Educação Bilíngue de Surdos só pode ser oferecida em escola criada exclusivamente para estudantes surdos.",
            "é incompatível porque o AEE bilíngue é obrigatório para todos os estudantes da turma, não podendo ser indicado apenas a quem apresenta necessidade específica.",
            "é compatível somente se houver intérprete em todas as aulas, ainda que a professora bilíngue conduza diretamente a instrução e a interação em Libras.",
            "é incompatível porque o português escrito deve ser trabalhado no AEE, enquanto a turma curricular bilíngue utiliza exclusivamente Libras em todos os componentes. no contexto escolar."
        ],
        "correta": 0,
        "feedbackAcerto": "Você integrou corretamente modalidade, local de oferta, língua de instrução e AEE. A LDB admite escola comum entre os espaços da Educação Bilíngue de Surdos.",
        "feedbackErro": "O caso respeita a organização bilíngue e usa AEE como apoio específico quando necessário. Nem intérprete universal nem AEE universal são requisitos para caracterizar toda turma.",
        "analiseAlternativas": [
            "Correta. A situação combina escolarização bilíngue curricular e apoio especializado conforme necessidade.",
            "Incorreta. A LDB permite oferta também em classes bilíngues, escolas comuns e polos.",
            "Incorreta. AEE bilíngue é oferecido quando necessário, não compulsoriamente a todos.",
            "Incorreta. Professor bilíngue pode garantir instrução direta em Libras; intérprete não é requisito automático em toda situação.",
            "Incorreta. Português escrito L2 integra a própria modalidade curricular."
        ],
        "dicaBanca": "Questões de caso da FGV exigem verificar cada peça do cenário. Não descarte um arranjo correto porque ele não corresponde a um único modelo físico de escola.",
        "pegadinha": "Educação bilíngue pode ocorrer em escola comum.",
        "memorizar2026": "Local de oferta é flexível; os papéis das línguas e a organização pedagógica é que caracterizam a modalidade.",
        "fonte": "LDB, art. 60-A; Inep 2026."
    },
    {
        "id": "SEDUC-EE-SUR-024",
        "numero": 24,
        "subtopico": "FGV — múltiplas afirmações",
        "dificuldade": "alta",
        "pergunta": "À luz da legislação atual sobre Educação Bilíngue de Surdos, analise as afirmativas.",
        "alternativas": [
            "I e II, apenas.",
            "I e IV, apenas.",
            "II, III e IV, apenas.",
            "I, II, III e IV.",
            "I, II e IV, apenas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou que I, II e IV são verdadeiras. A afirmativa III é falsa porque interpretação e educação bilíngue não são conceitos equivalentes.",
        "feedbackErro": "A LDB e as orientações atuais diferenciam claramente uma modalidade organizada em Libras L1/português escrito L2 da simples oferta de tradução e interpretação em uma classe comum.",
        "analiseAlternativas": [
            "Incorreta. IV também está correta.",
            "Incorreta. II também é verdadeira.",
            "Incorreta. III é falsa e I é verdadeira.",
            "Incorreta. III invalida o conjunto.",
            "Correta. I, II e IV são verdadeiras; III é falsa."
        ],
        "dicaBanca": "Não deixe uma frase verdadeira sobre intérprete fazer você concluir que ele define toda a modalidade. A FGV usa muito essa sobreposição de conceitos.",
        "pegadinha": "Acessibilidade por intérprete é importante, mas não equivale à organização curricular bilíngue.",
        "memorizar2026": "EBS = modalidade; TILS = profissional de tradução/interpretação; AEE bilíngue = apoio quando necessário.",
        "fonte": "LDB, arts. 60-A e 60-B; Decreto nº 5.626/2005; Inep 2026.",
        "afirmacoes": [
            "I. A Educação Bilíngue de Surdos é modalidade de educação escolar prevista em capítulo próprio da LDB.",
            "II. A Libras ocupa o lugar de primeira língua e o português escrito o de segunda língua na modalidade.",
            "III. Uma classe comum com intérprete é, por esse único fato, juridicamente uma turma curricular de Educação Bilíngue de Surdos.",
            "IV. Quando necessário, pode haver AEE bilíngue para atender especificidades linguísticas dos estudantes."
        ]
    },
    {
        "id": "SEDUC-EE-SUR-025",
        "numero": 25,
        "subtopico": "Síntese FGV — prática pedagógica",
        "dificuldade": "alta",
        "pergunta": "Uma escola pretende revisar sua proposta para estudantes surdos. Entre as medidas abaixo, assinale a que melhor expressa a abordagem bilíngue prevista atualmente na legislação educacional.",
        "alternativas": [
            "priorizar a aprendizagem do português oral antes de introduzir Libras, usando sinais somente quando houver dificuldade persistente de comunicação em sala.",
            "organizar o currículo comum com Libras como língua de instrução e interação, português escrito como L2, materiais adequados, avaliação acessível e participação da comunidade surda.",
            "manter o ensino integralmente em português e ampliar a carga horária do AEE em Libras, concentrando no contraturno todas as adaptações linguísticas do estudante.",
            "criar atividades curriculares reduzidas para estudantes surdos e utilizar o intérprete como responsável pelo planejamento individual, correção e recuperação paralela. no contexto escolar.",
            "adotar Libras como único idioma escolar e dispensar o ensino do português escrito, preservando a identidade surda e evitando interferência entre as duas línguas."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reuniu os elementos centrais: Libras estruturando instrução e interação, português escrito L2, acessibilidade, currículo e participação.",
        "feedbackErro": "Abordagem bilíngue não é oralismo prévio, AEE substitutivo, currículo reduzido ou exclusão do português escrito. É organização educacional em duas línguas com funções próprias.",
        "analiseAlternativas": [
            "Incorreta. A lógica descrita é oralista e subordina Libras à dificuldade de oralização.",
            "Correta. Integra língua de instrução, L2 escrita, currículo, avaliação, materiais e participação.",
            "Incorreta. AEE não deve concentrar nem substituir toda a acessibilidade linguística da escolarização.",
            "Incorreta. Intérprete não assume função docente, e surdez não justifica currículo reduzido.",
            "Incorreta. A modalidade inclui português escrito como segunda língua."
        ],
        "dicaBanca": "Na questão-síntese, procure a alternativa que organiza o sistema e não apenas adiciona um recurso isolado ao estudante.",
        "pegadinha": "Inclusão linguística não é “colocar Libras ao lado do português”; é organizar pedagogicamente os papéis das duas línguas.",
        "memorizar2026": "Abordagem bilíngue = Libras L1/instrução + português escrito L2 + currículo acessível + profissionais preparados + participação.",
        "fonte": "LDB, arts. 60-A e 60-B; Lei nº 10.436/2002; Decreto nº 5.626/2005; Lei nº 15.388/2026."
    }
];

    window.seducEducacaoEspecialEducacaoBilingueSurdez2026 = banco;
})();
