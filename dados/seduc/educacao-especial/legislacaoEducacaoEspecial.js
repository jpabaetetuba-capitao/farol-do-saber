/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 3: Legislação Específica da Educação Especial
   30 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 02/09/2026.
==========================================================
   Revisão FGV de distratores e equilíbrio de extensão: 02/09/2026.
 ========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-LEG-001",
        "numero": 1,
        "subtopico": "Constituição Federal",
        "dificuldade": "media",
        "pergunta": "Nos termos da Constituição Federal de 1988, o dever do Estado com a educação será efetivado, entre outras garantias, mediante",
        "alternativas": [
            "atendimento educacional especializado às pessoas com deficiência, preferencialmente na rede regular de ensino.",
            "substituição da rede regular por instituições especializadas quando houver deficiência.",
            "atendimento educacional especializado apenas no ensino fundamental.",
            "matrícula em classes especiais como regra constitucional para estudantes com deficiência.",
            "atendimento especializado condicionado à apresentação de laudo médico."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a literalidade do art. 208, III, da Constituição. A garantia constitucional é o atendimento educacional especializado às pessoas com deficiência, preferencialmente na rede regular de ensino.",
        "feedbackErro": "A Constituição não cria escolarização segregada como regra, não limita o AEE ao ensino fundamental e não condiciona essa garantia à apresentação de laudo médico.",
        "analiseAlternativas": [
            "Correta. É a redação constitucional do art. 208, III.",
            "Incorreta. A Constituição não determina substituição da rede regular por instituições especializadas.",
            "Incorreta. O dispositivo constitucional não restringe o AEE ao ensino fundamental.",
            "Incorreta. A classe especial não aparece como regra constitucional de escolarização.",
            "Incorreta. A Constituição não estabelece laudo médico como condição para o direito educacional."
        ],
        "dicaBanca": "FGV gosta de cobrar palavras exatas da Constituição. Grave “AEE” + “preferencialmente na rede regular de ensino”.",
        "pegadinha": "“Preferencialmente” não significa “exclusivamente”, mas também não autoriza concluir que a segregação seja a regra.",
        "memorizar2026": "CF/88, art. 208, III: AEE + pessoa com deficiência + preferencialmente na rede regular.",
        "fonte": "Constituição Federal de 1988, art. 208, III."
    },
    {
        "id": "SEDUC-EE-LEG-002",
        "numero": 2,
        "subtopico": "Constituição Federal",
        "dificuldade": "alta",
        "pergunta": "Uma candidata afirmou que, por usar a expressão “preferencialmente na rede regular de ensino”, o art. 208, III, da Constituição torna facultativa a inclusão escolar e permite ao sistema educacional optar livremente pela segregação. Essa interpretação é",
        "alternativas": [
            "correta, porque a expressão confere ao sistema ampla discricionariedade para escolher entre escola comum e instituição especializada, sem outros condicionamentos.",
            "incorreta, pois “preferencialmente” não autoriza segregação como regra e deve ser lido em conjunto com os demais marcos inclusivos.",
            "correta quando a instituição especializada é privada sem fins lucrativos e possui convênio regular com o poder público.",
            "incorreta apenas para TEA e deficiência intelectual, grupos para os quais a legislação atual prioriza a classe comum.",
            "correta quando a equipe técnica classifica a deficiência como severa e recomenda atendimento especializado intensivo."
        ],
        "correta": 1,
        "feedbackAcerto": "Você percebeu a pegadinha semântica. “Preferencialmente” não é “exclusivamente”, mas a Constituição hoje deve ser lida junto da Convenção sobre os Direitos das Pessoas com Deficiência, da LBI e da legislação inclusiva vigente.",
        "feedbackErro": "A leitura isolada de uma palavra não pode transformar a exceção em política de segregação. A FGV costuma exigir interpretação sistemática entre Constituição, Convenção e legislação infraconstitucional.",
        "analiseAlternativas": [
            "Incorreta. A palavra não elimina o dever estatal de construir educação inclusiva.",
            "Correta. A interpretação deve ser sistemática e compatível com os demais marcos inclusivos.",
            "Incorreta. A natureza pública ou privada da instituição não altera o sentido constitucional.",
            "Incorreta. O raciocínio não depende do diagnóstico específico.",
            "Incorreta. Grau de apoio necessário não autoriza concluir, de forma automática, por segregação."
        ],
        "dicaBanca": "Quando a FGV isolar uma palavra de uma norma, verifique se a alternativa ignora o restante do sistema jurídico.",
        "pegadinha": "“Preferencialmente” é uma das palavras favoritas de banca para criar uma alternativa absoluta.",
        "memorizar2026": "Não confunda: preferencialmente ≠ exclusivamente; inclusão continua sendo o eixo do sistema atual.",
        "fonte": "CF/88, art. 208, III; Convenção sobre os Direitos das Pessoas com Deficiência, art. 24; LBI, arts. 27 e 28."
    },
    {
        "id": "SEDUC-EE-LEG-003",
        "numero": 3,
        "subtopico": "Convenção sobre os Direitos das Pessoas com Deficiência",
        "dificuldade": "media",
        "pergunta": "A Convenção sobre os Direitos das Pessoas com Deficiência, promulgada pelo Decreto nº 6.949/2009, estabelece no campo educacional que os Estados Partes devem assegurar",
        "alternativas": [
            "rede especial separada em todos os níveis de ensino.",
            "admissão no ensino comum condicionada a avaliação clínica que comprove possibilidade de acompanhar o currículo regular.",
            "sistema educacional inclusivo em todos os níveis e aprendizagem ao longo da vida.",
            "atendimento educacional apenas durante a educação básica.",
            "currículo único sem qualquer adaptação individual."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu o núcleo do art. 24 da Convenção: sistema educacional inclusivo em todos os níveis e aprendizagem ao longo de toda a vida, sem discriminação e com igualdade de oportunidades.",
        "feedbackErro": "A Convenção não institui segregação, não condiciona o acesso a avaliação clínica e não proíbe adaptações. Ao contrário, exige apoios e adaptações razoáveis.",
        "analiseAlternativas": [
            "Incorreta. A Convenção estabelece sistema educacional inclusivo, não rede segregada como regra.",
            "Incorreta. O acesso não depende de avaliação clínica como condição prévia.",
            "Correta. É a diretriz central do art. 24.",
            "Incorreta. O direito alcança todos os níveis e a aprendizagem ao longo da vida.",
            "Incorreta. A Convenção prevê adaptações razoáveis segundo necessidades individuais."
        ],
        "dicaBanca": "FGV costuma apresentar uma alternativa “igual para todos” como se fosse inclusiva. Veja se a igualdade proposta elimina adaptações necessárias.",
        "pegadinha": "Uniformidade não é sinônimo de igualdade de oportunidades.",
        "memorizar2026": "Convenção, art. 24: sistema inclusivo + todos os níveis + aprendizagem ao longo da vida.",
        "fonte": "Decreto nº 6.949/2009, Convenção sobre os Direitos das Pessoas com Deficiência, art. 24."
    },
    {
        "id": "SEDUC-EE-LEG-004",
        "numero": 4,
        "subtopico": "Convenção sobre os Direitos das Pessoas com Deficiência",
        "dificuldade": "alta",
        "pergunta": "Uma escola afirma que cumpre a Convenção porque matricula estudantes com deficiência na classe comum, mas se recusa a realizar adaptações razoáveis ou oferecer apoios individualizados. À luz do art. 24 da Convenção, essa conduta é",
        "alternativas": [
            "adequada, pois a matrícula encerra a obrigação estatal.",
            "adequada se a escola garantir o AEE em outro espaço e mantiver a matrícula do estudante na classe comum.",
            "adequada quando os mesmos materiais são entregues a todos.",
            "inadequada, pois matrícula sem adaptações razoáveis e apoios individualizados não assegura educação inclusiva.",
            "inadequada apenas se houver deficiência física."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou corretamente a Convenção a um caso concreto. A inclusão exige mais do que presença física: adaptações razoáveis e apoios individualizados devem viabilizar educação efetiva.",
        "feedbackErro": "A matrícula, isoladamente, não satisfaz a Convenção. O art. 24 prevê apoios no sistema educacional geral e medidas individualizadas que maximizem desenvolvimento acadêmico e social.",
        "analiseAlternativas": [
            "Incorreta. Matrícula é apenas parte do direito à inclusão.",
            "Incorreta. A oferta de AEE não dispensa adaptações no ensino comum.",
            "Incorreta. Tratar todos de forma idêntica pode manter barreiras.",
            "Correta. A Convenção prevê adaptações razoáveis e apoios individualizados e efetivos.",
            "Incorreta. A regra não se limita a um tipo de deficiência."
        ],
        "dicaBanca": "Caso prático FGV: pergunte sempre “há apenas matrícula ou há condições reais de participação e aprendizagem?”.",
        "pegadinha": "A banca pode usar “mesmos materiais para todos” para parecer igualitário, mas isso pode negar acessibilidade.",
        "memorizar2026": "Inclusão = acesso + adaptação razoável + apoio necessário + participação efetiva.",
        "fonte": "Decreto nº 6.949/2009, Convenção, art. 24, itens 2(c), 2(d) e 2(e)."
    },
    {
        "id": "SEDUC-EE-LEG-005",
        "numero": 5,
        "subtopico": "Convenção sobre os Direitos das Pessoas com Deficiência",
        "dificuldade": "alta",
        "pergunta": "No ordenamento jurídico brasileiro, a Convenção sobre os Direitos das Pessoas com Deficiência possui",
        "alternativas": [
            "hierarquia equivalente à de ato regulamentar do Poder Executivo.",
            "hierarquia supralegal, porém inferior à Constituição Federal.",
            "força normativa equivalente à de lei ordinária federal.",
            "valor de recomendação internacional sem equivalência constitucional, desde que a escola registre a necessidade e assegure acompanhamento educacional durante a medida.",
            "hierarquia constitucional, por ter sido aprovada pelo rito do art. 5º, § 3º, da Constituição."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou um ponto clássico de prova. A Convenção foi aprovada pelo rito constitucional qualificado e integra o bloco de constitucionalidade brasileiro.",
        "feedbackErro": "A Convenção não é simples recomendação nem lei ordinária. Sua aprovação pelo procedimento do art. 5º, § 3º, conferiu equivalência às emendas constitucionais.",
        "analiseAlternativas": [
            "Incorreta. Trata-se de tratado internacional de direitos humanos incorporado ao ordenamento brasileiro.",
            "Incorreta. Sua hierarquia não é inferior à LDB.",
            "Incorreta. Produz efeitos jurídicos vinculantes.",
            "Incorreta. Não possui simples status de lei ordinária.",
            "Correta. Foi incorporada com hierarquia constitucional."
        ],
        "dicaBanca": "FGV gosta de perguntar “status” e não apenas conteúdo. Associe Decreto 6.949/2009 à Convenção e ao rito do art. 5º, §3º.",
        "pegadinha": "Não confunda decreto de promulgação com hierarquia normativa do tratado promulgado.",
        "memorizar2026": "Convenção da PcD = tratado de direitos humanos com equivalência constitucional no Brasil.",
        "fonte": "Decreto Legislativo nº 186/2008; Decreto nº 6.949/2009; CF/88, art. 5º, § 3º."
    },
    {
        "id": "SEDUC-EE-LEG-006",
        "numero": 6,
        "subtopico": "LDB — Educação Especial",
        "dificuldade": "media",
        "pergunta": "Considerando a literalidade vigente do art. 58 da LDB, a Educação Especial é modalidade de educação escolar oferecida preferencialmente na rede regular de ensino para educandos com",
        "alternativas": [
            "deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação.",
            "deficiência, TEA e TDAH, exclusivamente.",
            "qualquer dificuldade de aprendizagem persistente.",
            "deficiência física e intelectual apenas.",
            "necessidades educacionais especiais decorrentes de deficiência, transtornos do desenvolvimento ou dificuldades persistentes de aprendizagem."
        ],
        "correta": 0,
        "feedbackAcerto": "Você marcou a redação literal da LDB. Esse ponto é especialmente importante porque a terminologia da LDB não coincide integralmente com a política nacional mais recente.",
        "feedbackErro": "A questão pediu a literalidade do art. 58. A LDB ainda utiliza “transtornos globais do desenvolvimento”, além de deficiência e altas habilidades ou superdotação.",
        "analiseAlternativas": [
            "Correta. É a formulação literal vigente da LDB.",
            "Incorreta. TEA é a terminologia usada na política atual, mas a pergunta pediu a literalidade da LDB; TDAH também não integra essa enumeração.",
            "Incorreta. Dificuldade de aprendizagem, por si só, não define o público do art. 58.",
            "Incorreta. A LDB não restringe o público a esses dois grupos.",
            "Incorreta. A lei enumera categorias específicas."
        ],
        "dicaBanca": "Se o comando disser “segundo a LDB”, responda a LDB — mesmo que outra norma recente use terminologia diferente.",
        "pegadinha": "TGD × TEA é uma pegadinha provável em 2026.",
        "memorizar2026": "LDB, art. 58: deficiência + TGD + altas habilidades/superdotação.",
        "fonte": "Lei nº 9.394/1996, art. 58."
    },
    {
        "id": "SEDUC-EE-LEG-007",
        "numero": 7,
        "subtopico": "LDB — Educação Especial",
        "dificuldade": "media",
        "pergunta": "Nos termos do art. 58 da LDB, haverá, quando necessário,",
        "alternativas": [
            "currículo paralelo obrigatório para todos os estudantes público da Educação Especial.",
            "serviços de apoio especializado na escola regular, quando necessários às peculiaridades da Educação Especial.",
            "substituição automática da classe comum pelo AEE.",
            "matrícula na escola regular condicionada à existência de serviço especializado quando o estudo de caso indicar necessidade de apoio contínuo.",
            "avaliação clínica obrigatória antes do início da escolarização."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a previsão legal de serviços de apoio especializado quando necessários. A LDB articula a Educação Especial à rede regular e admite apoios voltados às peculiaridades dos estudantes.",
        "feedbackErro": "A LDB não determina currículo paralelo, substituição da classe comum, condicionamento à SRM ou avaliação clínica prévia.",
        "analiseAlternativas": [
            "Incorreta. Currículo paralelo obrigatório não é regra da LDB.",
            "Correta. Corresponde ao §1º do art. 58.",
            "Incorreta. Apoio especializado não substitui automaticamente a escolarização comum.",
            "Incorreta. Sala de recursos não é condição de matrícula.",
            "Incorreta. A LDB não estabelece essa exigência clínica."
        ],
        "dicaBanca": "Observe a expressão “quando necessário”: a banca pode trocá-la por “obrigatoriamente para todos”.",
        "pegadinha": "Necessidade de apoio é individual; não se presume apoio idêntico para todos.",
        "memorizar2026": "LDB: apoio especializado quando necessário, articulado à escola regular.",
        "fonte": "Lei nº 9.394/1996, art. 58, § 1º."
    },
    {
        "id": "SEDUC-EE-LEG-008",
        "numero": 8,
        "subtopico": "LDB — Educação Especial",
        "dificuldade": "alta",
        "pergunta": "Entre as garantias previstas no art. 59 da LDB aos educandos público da Educação Especial, encontra-se",
        "alternativas": [
            "redução curricular quando a deficiência limitar o acompanhamento do currículo comum, desde que a decisão seja registrada no planejamento individual.",
            "dispensa de avaliação escolar em razão da deficiência.",
            "currículos, métodos, técnicas, recursos educativos e organização específicos para atender às necessidades dos educandos.",
            "obrigatoriedade de escolarização em instituição especializada.",
            "substituição da formação docente por equipe clínica."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou uma das garantias expressas do art. 59: organização pedagógica, métodos, técnicas e recursos específicos devem responder às necessidades do estudante.",
        "feedbackErro": "A LDB não impõe redução automática do currículo, dispensa de avaliação, segregação ou substituição da docência por atuação clínica.",
        "analiseAlternativas": [
            "Incorreta. A lei não determina redução automática do currículo.",
            "Incorreta. Avaliação não é dispensada; deve ser adequada.",
            "Correta. É previsão expressa do art. 59, I.",
            "Incorreta. A escolarização especializada não é apresentada como obrigação geral.",
            "Incorreta. Formação docente continua sendo elemento essencial da política educacional."
        ],
        "dicaBanca": "FGV costuma trocar “adequação” por “redução”. Nem toda adaptação curricular significa empobrecimento de objetivos.",
        "pegadinha": "“Específico” não significa “separado”: recursos específicos podem garantir acesso ao currículo comum.",
        "memorizar2026": "Art. 59 = currículo/métodos/técnicas/recursos/organização adequados às necessidades.",
        "fonte": "Lei nº 9.394/1996, art. 59, I."
    },
    {
        "id": "SEDUC-EE-LEG-009",
        "numero": 9,
        "subtopico": "LDB — Educação Especial",
        "dificuldade": "alta",
        "pergunta": "Sobre o art. 60 da LDB e sua relação com instituições especializadas sem fins lucrativos, assinale a afirmativa correta.",
        "alternativas": [
            "A LDB proíbe qualquer apoio público a instituições especializadas.",
            "a existência de instituição conveniada pode suprir a oferta especializada da rede pública, desde que a matrícula na escola comum seja preservada.",
            "O apoio técnico e financeiro só pode ocorrer para instituições com fins lucrativos.",
            "apoio público a instituições privadas sem fins lucrativos especializadas, preservada a prioridade de ampliar o atendimento na rede pública regular.",
            "O apoio a instituições especializadas torna a Educação Especial uma modalidade exclusivamente privada."
        ],
        "correta": 3,
        "feedbackAcerto": "Você captou a dupla ideia do art. 60: admite-se apoio a instituições especializadas sem fins lucrativos, mas a própria LDB preserva a preferência pela ampliação do atendimento na rede pública regular.",
        "feedbackErro": "A norma não cria exclusividade pública nem privada e não permite que convênios façam desaparecer a responsabilidade da rede pública regular.",
        "analiseAlternativas": [
            "Incorreta. A LDB admite apoio técnico e financeiro em determinadas condições.",
            "Incorreta. O convênio não elimina o dever da rede pública.",
            "Incorreta. A referência legal é a instituições privadas sem fins lucrativos.",
            "Correta. Essa combinação corresponde ao art. 60 e seu parágrafo único.",
            "Incorreta. A modalidade continua sendo responsabilidade do sistema educacional."
        ],
        "dicaBanca": "Em alternativas FGV, cuidado com extremos: “proíbe qualquer parceria” e “transfere toda responsabilidade” costumam estar errados.",
        "pegadinha": "Parceria possível ≠ terceirização integral do dever estatal.",
        "memorizar2026": "LDB, art. 60: apoio possível + prioridade de ampliação na rede pública regular.",
        "fonte": "Lei nº 9.394/1996, art. 60 e parágrafo único."
    },
    {
        "id": "SEDUC-EE-LEG-010",
        "numero": 10,
        "subtopico": "Terminologia legal — LDB x PNEEI",
        "dificuldade": "alta",
        "pergunta": "Uma questão de concurso apresenta duas normas: a LDB e o Decreto nº 12.686/2025. Para identificar corretamente o público da Educação Especial, o candidato deve considerar que",
        "alternativas": [
            "as duas normas utilizam obrigatoriamente a expressão TGD.",
            "a LDB foi revogada pelo Decreto nº 12.686/2025.",
            "o Decreto mais recente pode atualizar a terminologia aplicada pela administração educacional e, por isso, substituir a redação legal da LDB.",
            "a expressão TEA deixou de ter validade após a publicação da PNEEI.",
            "a LDB mantém a expressão “transtornos globais do desenvolvimento”, enquanto a PNEEI vigente utiliza “TEA”."
        ],
        "correta": 4,
        "feedbackAcerto": "Você separou corretamente literalidade legal e terminologia da política vigente. Em prova, é fundamental identificar qual documento o enunciado manda aplicar.",
        "feedbackErro": "Um decreto não revoga nem altera a redação de uma lei. A diferença terminológica deve ser reconhecida e resolvida conforme a fonte indicada no comando da questão.",
        "analiseAlternativas": [
            "Incorreta. A PNEEI atual usa TEA.",
            "Incorreta. A LDB continua vigente.",
            "Incorreta. Decreto não altera lei por simples posterioridade.",
            "Incorreta. TEA é justamente a terminologia usada pela política vigente.",
            "Correta. Essa diferença terminológica existe e é relevante para prova."
        ],
        "dicaBanca": "Sempre sublinhe no comando: “segundo a LDB”, “segundo a PNEEI”, “segundo a LBI”.",
        "pegadinha": "Lei e decreto podem usar terminologias diferentes sem que um decreto reescreva a lei.",
        "memorizar2026": "LDB = TGD; PNEEI 2025 = TEA.",
        "fonte": "Lei nº 9.394/1996, art. 58; Decreto nº 12.686/2025, art. 3º.",
        "atualizacao2026": "Em 2026, mantenha a diferença terminológica no material: a LDB conserva TGD; a política vigente trabalha com TEA."
    },
    {
        "id": "SEDUC-EE-LEG-011",
        "numero": 11,
        "subtopico": "Lei Brasileira de Inclusão — Educação",
        "dificuldade": "media",
        "pergunta": "Segundo o art. 27 da Lei Brasileira de Inclusão, a educação da pessoa com deficiência deve ser assegurada por meio de",
        "alternativas": [
            "sistema educacional inclusivo em todos os níveis e aprendizagem ao longo da vida.",
            "ensino especial separado como regra geral.",
            "AEE substitutivo da escolarização comum.",
            "currículo com objetivos previamente diferenciados quando o diagnóstico indicar necessidade de apoio educacional mais intenso.",
            "matrícula condicionada à avaliação biopsicossocial."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou a formulação central do art. 27 da LBI: sistema educacional inclusivo em todos os níveis e aprendizagem ao longo de toda a vida.",
        "feedbackErro": "A LBI estrutura a educação como direito inclusivo e não estabelece segregação, substituição do ensino comum ou condição clínica para matrícula.",
        "analiseAlternativas": [
            "Correta. É a regra do art. 27.",
            "Incorreta. A LBI adota sistema educacional inclusivo.",
            "Incorreta. AEE não substitui escolarização.",
            "Incorreta. Diagnóstico não autoriza reduzir currículo de forma automática.",
            "Incorreta. A matrícula não é condicionada dessa maneira."
        ],
        "dicaBanca": "FGV costuma cobrar a combinação “todos os níveis + aprendizado ao longo da vida”.",
        "pegadinha": "Cuidado com alternativas que trocam inclusão por atendimento separado “mais adequado”.",
        "memorizar2026": "LBI, art. 27: inclusão em todos os níveis e aprendizagem ao longo da vida.",
        "fonte": "Lei nº 13.146/2015, art. 27."
    },
    {
        "id": "SEDUC-EE-LEG-012",
        "numero": 12,
        "subtopico": "Lei Brasileira de Inclusão — Escolas privadas",
        "dificuldade": "alta",
        "pergunta": "Uma escola privada informa aos pais que cobrará uma taxa adicional mensal para custear profissional de apoio e recursos de acessibilidade do estudante com deficiência. De acordo com a LBI, a cobrança é",
        "alternativas": [
            "permitida se prevista no contrato escolar e vinculada a custos adicionais de acessibilidade não incluídos na mensalidade.",
            "vedada, pois a instituição privada não pode cobrar valor adicional para cumprir as medidas inclusivas previstas na LBI.",
            "permitida quando houver laudo médico que recomende apoio individualizado não disponível na estrutura regular da escola.",
            "permitida para tecnologia assistiva de uso individual, desde que a família concorde previamente com a cobrança.",
            "vedada no Ensino Fundamental, mas admissível nas demais etapas da Educação Básica mediante previsão contratual."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou corretamente o art. 28, §1º, da LBI. A escola privada deve cumprir as medidas inclusivas abrangidas pelo dispositivo sem repassar custo adicional ao estudante em mensalidade, anuidade ou matrícula.",
        "feedbackErro": "A obrigação não depende de contrato, laudo, nível de ensino ou tipo específico de apoio. A cobrança adicional vinculada às medidas inclusivas é vedada.",
        "analiseAlternativas": [
            "Incorreta. Cláusula contratual não afasta a vedação legal.",
            "Correta. É a regra do art. 28, §1º, da LBI.",
            "Incorreta. Laudo não torna lícita a cobrança adicional.",
            "Incorreta. A vedação não se restringe a tecnologia assistiva.",
            "Incorreta. A regra alcança instituições privadas de qualquer nível e modalidade nos termos do dispositivo."
        ],
        "dicaBanca": "Questão prática com “taxa de inclusão” é clássica: a resposta tende a ser vedação de cobrança adicional.",
        "pegadinha": "Não confunda custo interno da escola com cobrança específica ao estudante.",
        "memorizar2026": "Escola privada: cumpre medidas inclusivas sem taxa extra de inclusão.",
        "fonte": "Lei nº 13.146/2015, art. 28, §1º."
    },
    {
        "id": "SEDUC-EE-LEG-013",
        "numero": 13,
        "subtopico": "Lei Brasileira de Inclusão — Medidas educacionais",
        "dificuldade": "media",
        "pergunta": "Entre as medidas que a LBI determina ao poder público no campo da educação está",
        "alternativas": [
            "dispensa de atividades recreativas quando houver risco decorrente da deficiência e recomendação da equipe escolar.",
            "priorização da oralização em substituição à Libras quando o estudante demonstrar possibilidade de comunicação oral.",
            "oferta de profissional de apoio, recursos de acessibilidade e tecnologia assistiva que ampliem autonomia e participação.",
            "separação pedagógica temporária do estudante com deficiência intelectual quando houver objetivos individualizados no PEI.",
            "restrição das adaptações razoáveis aos casos em que a instituição não disponha de recursos de acessibilidade universais."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu medidas expressas do art. 28 da LBI: profissionais de apoio, acessibilidade, tecnologia assistiva e recursos que favoreçam autonomia, participação e aprendizagem.",
        "feedbackErro": "A LBI não promove exclusão de atividades, substituição linguística, segregação nem proibição de adaptações. Seu eixo é eliminar barreiras.",
        "analiseAlternativas": [
            "Incorreta. A LBI assegura participação em atividades escolares, inclusive recreativas.",
            "Incorreta. Libras é reconhecida e protegida; oralização não a substitui juridicamente.",
            "Correta. Profissional de apoio e tecnologia assistiva integram as medidas previstas.",
            "Incorreta. Segregação obrigatória contraria o sistema inclusivo.",
            "Incorreta. Adaptações razoáveis são instrumento de inclusão."
        ],
        "dicaBanca": "Alternativas corretas da LBI geralmente apontam para acesso, permanência, participação, autonomia e eliminação de barreiras.",
        "pegadinha": "“Apoio” não significa retirar o estudante do currículo comum.",
        "memorizar2026": "LBI: apoio + acessibilidade + tecnologia assistiva + participação.",
        "fonte": "Lei nº 13.146/2015, art. 28, especialmente incisos XII, XVI e XVII."
    },
    {
        "id": "SEDUC-EE-LEG-014",
        "numero": 14,
        "subtopico": "Atualização 2025 — Comunicação aumentativa e alternativa",
        "dificuldade": "alta",
        "pergunta": "A Lei nº 15.249/2025 alterou a LBI e a Lei de Acessibilidade. No campo educacional, a atualização passou a prever",
        "alternativas": [
            "a substituição de Libras por pictogramas.",
            "o uso obrigatório de tecnologia de alto custo em todas as escolas.",
            "a substituição progressiva de recursos tradicionais de comunicação alternativa por tecnologias digitais de maior funcionalidade.",
            "sistemas de comunicação aumentativa e alternativa de baixa tecnologia no AEE para estudantes com necessidades complexas de comunicação.",
            "a exigência de diagnóstico médico para uso de pictogramas."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou uma atualização legislativa recente e relevante para 2026. A LBI passou a mencionar expressamente sistemas de CAA de baixa tecnologia no AEE para estudantes com necessidades complexas de comunicação.",
        "feedbackErro": "A nova lei não substitui Libras, não exige tecnologia cara nem condiciona o recurso a diagnóstico. Ela amplia acessibilidade comunicacional por soluções de baixa tecnologia.",
        "analiseAlternativas": [
            "Incorreta. Libras e CAA cumprem funções distintas e podem coexistir.",
            "Incorreta. A atualização enfatiza inclusive baixa tecnologia.",
            "Incorreta. A lei amplia, não extingue, alternativas comunicacionais.",
            "Correta. É a atualização introduzida no art. 28 da LBI.",
            "Incorreta. O texto não cria essa condição médica."
        ],
        "dicaBanca": "Atualização de 2025 tem perfil de questão “novidade legislativa”. Dê atenção especial a CAA + baixa tecnologia.",
        "pegadinha": "“Baixa tecnologia” é justamente o detalhe que a banca pode inverter.",
        "memorizar2026": "Lei 15.249/2025: CAA de baixa tecnologia entrou expressamente na LBI.",
        "fonte": "Lei nº 15.249/2025; LBI, art. 28, XIX.",
        "atualizacao2026": "Tema novo para a prova de 2026: comunicação aumentativa e alternativa de baixa tecnologia."
    },
    {
        "id": "SEDUC-EE-LEG-015",
        "numero": 15,
        "subtopico": "Lei do TEA — Lei 12.764/2012",
        "dificuldade": "media",
        "pergunta": "Para todos os efeitos legais, a pessoa com transtorno do espectro autista é considerada",
        "alternativas": [
            "pessoa com transtorno de aprendizagem, sem equiparação legal à deficiência.",
            "pessoa com deficiência somente para fins previdenciários.",
            "pessoa com deficiência apenas se houver comprometimento intelectual.",
            "pessoa com deficiência apenas durante a infância.",
            "pessoa com deficiência."
        ],
        "correta": 4,
        "feedbackAcerto": "Você marcou a regra expressa da Lei nº 12.764/2012: a pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais.",
        "feedbackErro": "A equiparação legal não depende de idade, deficiência intelectual ou finalidade específica. A lei é clara ao dizer “para todos os efeitos legais”.",
        "analiseAlternativas": [
            "Incorreta. TEA não é excluído do regime jurídico da pessoa com deficiência.",
            "Incorreta. A equiparação não se limita à previdência.",
            "Incorreta. Não há essa condição.",
            "Incorreta. A regra vale para todas as idades.",
            "Correta. É o §2º do art. 1º da Lei nº 12.764/2012."
        ],
        "dicaBanca": "Na FGV, a expressão “para todos os efeitos legais” pode aparecer de forma literal.",
        "pegadinha": "Não condicione a equiparação a características que a lei não exige.",
        "memorizar2026": "TEA = pessoa com deficiência para todos os efeitos legais.",
        "fonte": "Lei nº 12.764/2012, art. 1º, §2º."
    },
    {
        "id": "SEDUC-EE-LEG-016",
        "numero": 16,
        "subtopico": "Lei do TEA — Acompanhante especializado",
        "dificuldade": "alta",
        "pergunta": "Um estudante com TEA está incluído em classe comum e o estudo educacional demonstra necessidade de apoio individual específico. A Lei nº 12.764/2012 prevê que, em caso de comprovada necessidade, ele",
        "alternativas": [
            "terá direito a acompanhante especializado.",
            "deverá ser automaticamente transferido para classe especial.",
            "perderá o direito ao currículo comum.",
            "somente poderá receber apoio mediante decisão judicial.",
            "deverá ser atendido exclusivamente pelo professor do AEE."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou a previsão legal do acompanhante especializado em caso de comprovada necessidade para pessoa com TEA incluída em classe comum.",
        "feedbackErro": "A lei não determina transferência, perda de currículo, decisão judicial prévia ou exclusividade do AEE. O ponto-chave é a necessidade comprovada.",
        "analiseAlternativas": [
            "Correta. É a previsão do art. 3º, §1º, na redação vigente.",
            "Incorreta. A necessidade de acompanhante não implica segregação.",
            "Incorreta. Apoio não retira o direito ao currículo comum.",
            "Incorreta. A lei não condiciona o direito a decisão judicial.",
            "Incorreta. O acompanhante especializado e o AEE possuem funções distintas."
        ],
        "dicaBanca": "FGV pode opor “comprovada necessidade” a “direito automático para todo TEA”. Leia com atenção.",
        "pegadinha": "A lei assegura acompanhante quando necessário; não diz que todo estudante com TEA terá automaticamente o mesmo apoio.",
        "memorizar2026": "TEA em classe comum + comprovada necessidade = direito a acompanhante especializado.",
        "fonte": "Lei nº 12.764/2012, art. 3º, §1º, redação vigente."
    },
    {
        "id": "SEDUC-EE-LEG-017",
        "numero": 17,
        "subtopico": "Libras — Lei 10.436/2002",
        "dificuldade": "media",
        "pergunta": "A Lei nº 10.436/2002 estabelece que a Libras",
        "alternativas": [
            "é reconhecida como recurso de acessibilidade comunicacional, mas sem status de meio legal de comunicação e expressão.",
            "é meio legal de comunicação e expressão, sem substituir a modalidade escrita da língua portuguesa.",
            "substitui obrigatoriamente o português escrito na educação de surdos.",
            "é língua estrangeira de uso optativo pelo poder público.",
            "é restrita às instituições federais."
        ],
        "correta": 1,
        "feedbackAcerto": "Você distinguiu dois pontos literais da Lei de Libras: reconhecimento como meio legal de comunicação e expressão e impossibilidade de substituir a modalidade escrita do português.",
        "feedbackErro": "A lei reconhece a Libras nacionalmente e determina apoio à sua difusão; ao mesmo tempo, preserva a modalidade escrita da língua portuguesa.",
        "analiseAlternativas": [
            "Incorreta. A lei confere reconhecimento jurídico expresso à Libras.",
            "Correta. Reúne o art. 1º e o parágrafo único do art. 4º.",
            "Incorreta. A Libras não substitui a modalidade escrita do português.",
            "Incorreta. Libras não é tratada como língua estrangeira.",
            "Incorreta. Seu reconhecimento não é restrito a um sistema de ensino."
        ],
        "dicaBanca": "Pergunta literal: “Libras pode substituir o português escrito?” Não, segundo a Lei 10.436/2002.",
        "pegadinha": "Não confunda reconhecimento da Libras com eliminação da segunda língua escrita.",
        "memorizar2026": "Libras = meio legal; português escrito permanece juridicamente assegurado.",
        "fonte": "Lei nº 10.436/2002, arts. 1º, 2º e 4º, parágrafo único."
    },
    {
        "id": "SEDUC-EE-LEG-018",
        "numero": 18,
        "subtopico": "Libras — Decreto 5.626/2005",
        "dificuldade": "alta",
        "pergunta": "Segundo o Decreto nº 5.626/2005, a Libras deve ser inserida como disciplina curricular obrigatória",
        "alternativas": [
            "em todos os cursos superiores que formem profissionais para atuação direta em serviços públicos.",
            "nos cursos de Educação Especial e nas licenciaturas que incluam estágio com estudantes surdos.",
            "nos cursos de formação de professores, em nível médio e superior, e nos cursos de Fonoaudiologia.",
            "nas licenciaturas em Letras e Pedagogia, podendo os demais cursos de formação docente oferecê-la de forma optativa.",
            "nos cursos em que houver estudante surdo matriculado ou demanda formal da instituição de ensino."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente o alcance do art. 3º do Decreto nº 5.626/2005: formação de professores e Fonoaudiologia.",
        "feedbackErro": "O decreto não torna Libras obrigatória em todo e qualquer curso superior, nem depende da existência de aluno surdo. Nos demais cursos, a disciplina é tratada como optativa conforme a norma.",
        "analiseAlternativas": [
            "Incorreta. O decreto não impõe obrigatoriedade a todos os cursos superiores.",
            "Incorreta. O alcance é mais amplo que Educação Especial.",
            "Correta. É a regra do art. 3º.",
            "Incorreta. Não se limita a Letras.",
            "Incorreta. A obrigação decorre do tipo de curso, não da matrícula de estudante surdo."
        ],
        "dicaBanca": "FGV pode trocar “obrigatória nos cursos de formação de professores” por “obrigatória em todos os cursos superiores”.",
        "pegadinha": "Atenção: obrigatória para formação docente e Fono; optativa nos demais cursos superiores/profissionais, conforme o decreto.",
        "memorizar2026": "Decreto 5.626: Libras obrigatória na formação de professores e Fonoaudiologia.",
        "fonte": "Decreto nº 5.626/2005, art. 3º."
    },
    {
        "id": "SEDUC-EE-LEG-019",
        "numero": 19,
        "subtopico": "Libras — Conceito de pessoa surda",
        "dificuldade": "alta",
        "pergunta": "Para fins do Decreto nº 5.626/2005, considera-se pessoa surda aquela que",
        "alternativas": [
            "possui perda auditiva aferida por critérios audiológicos e necessita de recurso de amplificação sonora para acompanhar a comunicação oral, quando houver decisão pedagógica fundamentada e comunicação prévia à família.",
            "utiliza aparelho auditivo ou implante coclear e, por isso, apresenta necessidade educacional específica relacionada à comunicação.",
            "não adquire língua oral de forma funcional e depende da Libras para participar de qualquer situação comunicativa.",
            "por ter perda auditiva, compreende e interage com o mundo por experiências visuais, manifestando sua cultura principalmente pelo uso da Libras.",
            "apresenta perda auditiva congênita e utiliza prioritariamente recursos visuais em contextos educacionais."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu a definição normativa de pessoa surda do Decreto nº 5.626/2005, que destaca experiência visual e cultura manifestada principalmente pela Libras.",
        "feedbackErro": "O decreto diferencia pessoa surda de uma definição puramente audiométrica. A alternativa correta reproduz o eixo cultural-linguístico presente no art. 2º.",
        "analiseAlternativas": [
            "Incorreta. Essa formulação confunde pessoa surda com critério audiométrico de deficiência auditiva.",
            "Incorreta. Uso de aparelho não define juridicamente pessoa surda.",
            "Incorreta. A norma não estabelece essa impossibilidade absoluta.",
            "Correta. É o conceito do art. 2º.",
            "Incorreta. O decreto não exige origem congênita."
        ],
        "dicaBanca": "FGV pode explorar a diferença entre “pessoa surda” e “deficiência auditiva” dentro do próprio Decreto 5.626.",
        "pegadinha": "Não reduza a definição de pessoa surda a número de decibéis.",
        "memorizar2026": "Pessoa surda no Decreto 5.626: experiência visual + cultura + Libras.",
        "fonte": "Decreto nº 5.626/2005, art. 2º."
    },
    {
        "id": "SEDUC-EE-LEG-020",
        "numero": 20,
        "subtopico": "Educação Bilíngue de Surdos — LDB",
        "dificuldade": "media",
        "pergunta": "A Lei nº 14.191/2021 inseriu na LDB a modalidade de Educação Bilíngue de Surdos, caracterizada pela oferta de",
        "alternativas": [
            "português oral como primeira língua e Libras como apoio eventual.",
            "Libras e português oral, ambos como primeira língua.",
            "somente Libras, sem ensino de português escrito.",
            "português escrito como primeira língua e Libras como segunda.",
            "Libras como primeira língua e português escrito como segunda língua."
        ],
        "correta": 4,
        "feedbackAcerto": "Você marcou a definição legal do art. 60-A da LDB: Libras é a primeira língua e o português escrito é a segunda língua na Educação Bilíngue de Surdos.",
        "feedbackErro": "A modalidade bilíngue não trata Libras como mero apoio, nem elimina o português escrito. A ordem L1/L2 é elemento literal de alta incidência em prova.",
        "analiseAlternativas": [
            "Incorreta. Libras não aparece como apoio eventual nessa modalidade.",
            "Incorreta. A lei não define duas primeiras línguas.",
            "Incorreta. Português escrito integra a modalidade como segunda língua.",
            "Incorreta. A ordem está invertida.",
            "Correta. É a definição do art. 60-A da LDB."
        ],
        "dicaBanca": "Decore a ordem: Libras L1 → português escrito L2.",
        "pegadinha": "A banca pode inverter as línguas mantendo o restante da alternativa correto.",
        "memorizar2026": "Educação Bilíngue de Surdos: Libras 1ª + português escrito 2ª.",
        "fonte": "Lei nº 14.191/2021; LDB, art. 60-A."
    },
    {
        "id": "SEDUC-EE-LEG-021",
        "numero": 21,
        "subtopico": "Educação Bilíngue de Surdos — oferta",
        "dificuldade": "alta",
        "pergunta": "Segundo o art. 60-A da LDB, a oferta de Educação Bilíngue de Surdos",
        "alternativas": [
            "inicia-se ao zero ano e estende-se ao longo da vida.",
            "começará obrigatoriamente apenas no ensino fundamental.",
            "será encerrada ao final da educação básica.",
            "só poderá ocorrer em escolas bilíngues exclusivas.",
            "impede matrícula em escolas e classes regulares."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou a literalidade do §2º do art. 60-A: início ao zero ano, na educação infantil, e extensão ao longo da vida.",
        "feedbackErro": "A lei não limita a modalidade ao ensino fundamental ou à educação básica, não restringe os locais de oferta a escolas exclusivas e preserva prerrogativas de matrícula em classes regulares.",
        "analiseAlternativas": [
            "Correta. É a redação do §2º do art. 60-A.",
            "Incorreta. A oferta começa antes do ensino fundamental.",
            "Incorreta. A lei fala em extensão ao longo da vida.",
            "Incorreta. A modalidade pode ocorrer em diferentes arranjos previstos na LDB.",
            "Incorreta. O §3º preserva prerrogativas de matrícula conforme decisão do estudante ou responsáveis."
        ],
        "dicaBanca": "“Zero ano” é um detalhe literal que pode aparecer em questão FGV.",
        "pegadinha": "Educação bilíngue não significa obrigatoriedade de escola separada.",
        "memorizar2026": "Oferta bilíngue: desde zero ano + ao longo da vida.",
        "fonte": "LDB, art. 60-A, §§2º e 3º, incluído pela Lei nº 14.191/2021."
    },
    {
        "id": "SEDUC-EE-LEG-022",
        "numero": 22,
        "subtopico": "Resolução CNE/CEB nº 2/2001",
        "dificuldade": "media",
        "pergunta": "A Resolução CNE/CEB nº 2/2001 é reconhecida, no conjunto normativo da Educação Especial, por",
        "alternativas": [
            "instituir a Política Nacional de Proteção dos Direitos da Pessoa com TEA.",
            "instituir as Diretrizes Nacionais para a Educação Especial na Educação Básica.",
            "regulamentar a Lei de Libras.",
            "instituir exclusivamente as Diretrizes Operacionais do AEE.",
            "criar a Educação Bilíngue de Surdos na LDB."
        ],
        "correta": 1,
        "feedbackAcerto": "Você associou corretamente a Resolução CNE/CEB nº 2/2001 às Diretrizes Nacionais para a Educação Especial na Educação Básica.",
        "feedbackErro": "As demais alternativas correspondem a outros atos: Lei 12.764/2012, Decreto 5.626/2005, Resolução 4/2009 e Lei 14.191/2021.",
        "analiseAlternativas": [
            "Incorreta. A política do TEA é da Lei nº 12.764/2012.",
            "Correta. Essa é a função da Resolução CNE/CEB nº 2/2001.",
            "Incorreta. A Lei de Libras é regulamentada pelo Decreto nº 5.626/2005.",
            "Incorreta. As Diretrizes Operacionais do AEE são da Resolução CNE/CEB nº 4/2009.",
            "Incorreta. A Educação Bilíngue de Surdos foi inserida na LDB pela Lei nº 14.191/2021."
        ],
        "dicaBanca": "Questões de associação normativa são frequentes: saiba “qual ato fez o quê”.",
        "pegadinha": "Resolução 2/2001 e Resolução 4/2009 têm objetos diferentes.",
        "memorizar2026": "2/2001 = Diretrizes Nacionais da Educação Especial na Educação Básica.",
        "fonte": "Resolução CNE/CEB nº 2, de 11 de setembro de 2001."
    },
    {
        "id": "SEDUC-EE-LEG-023",
        "numero": 23,
        "subtopico": "Resolução CNE/CEB nº 4/2009",
        "dificuldade": "alta",
        "pergunta": "A Resolução CNE/CEB nº 4/2009, já cobrada pela FGV em provas de Educação Especial, determina que o projeto político-pedagógico da escola de ensino regular deve",
        "alternativas": [
            "retirar o AEE da organização pedagógica da escola.",
            "prever o AEE no PPP apenas para estudantes da própria escola, admitindo articulação externa somente por convênio do sistema de ensino.",
            "institucionalizar o AEE, prevendo no PPP sua organização, recursos, profissionais e articulação.",
            "substituir a matrícula em classe comum pela matrícula no AEE.",
            "condicionar o AEE à emissão de laudo médico."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou o ponto central que a própria FGV costuma explorar: o AEE deve estar institucionalizado no PPP e integrado à organização da escola.",
        "feedbackErro": "A Resolução não transforma AEE em escolarização substitutiva, não o retira do PPP e não cria condição médica para acesso.",
        "analiseAlternativas": [
            "Incorreta. A norma faz exatamente o contrário: institucionaliza a oferta.",
            "Incorreta. A organização do AEE admite articulações e não se resume a alunos da própria escola nessa formulação.",
            "Correta. O PPP deve prever estrutura, matrícula, cronograma, profissionais e redes de apoio.",
            "Incorreta. AEE é complementar/suplementar, não substitutivo.",
            "Incorreta. A norma não estabelece laudo como condição."
        ],
        "dicaBanca": "FGV já perguntou diretamente o que o PPP deve institucionalizar sobre AEE. Trate esse ponto como alta prioridade.",
        "pegadinha": "AEE não é atividade paralela sem vínculo com o PPP.",
        "memorizar2026": "Resolução 4/2009: AEE institucionalizado no PPP.",
        "fonte": "Resolução CNE/CEB nº 4/2009, especialmente arts. 2º e 10."
    },
    {
        "id": "SEDUC-EE-LEG-024",
        "numero": 24,
        "subtopico": "Política de 2008 x PNEEI 2025",
        "dificuldade": "alta",
        "pergunta": "Em uma prova, o enunciado cita expressamente a “Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva (2008)”. O candidato, ao responder, deve",
        "alternativas": [
            "ignorar a referência histórica e aplicar apenas a PNEEI vigente, pois normas posteriores substituem automaticamente documentos anteriores.",
            "considerar o documento de 2008 como lei federal material, já que serviu de fundamento para políticas posteriores de inclusão.",
            "tratar 2008 e 2025 como versões equivalentes da mesma política, utilizando a terminologia mais recente nas respostas.",
            "responder conforme o documento indicado e distingui-lo da PNEEI vigente de 2025 quando a questão exigir legislação atual.",
            "considerar que a política de 2008 prevalece sobre a LDB nas matérias específicas de Educação Especial."
        ],
        "correta": 3,
        "feedbackAcerto": "Você adotou a estratégia correta de prova: primeiro identifique a fonte pedida pelo comando. A FGV ainda usa documentos históricos em enunciados, mas isso não transforma a política de 2008 na política nacional vigente de 2025.",
        "feedbackErro": "Não se deve misturar automaticamente marcos de épocas diferentes. A resposta depende do documento explicitamente citado, salvo quando o comando pedir legislação atual.",
        "analiseAlternativas": [
            "Incorreta. O documento citado pelo enunciado não pode ser simplesmente ignorado.",
            "Incorreta. Política pública/documento orientador não se converte automaticamente em lei.",
            "Incorreta. Existem diferenças de contexto, terminologia e regulamentação.",
            "Correta. É a técnica de leitura jurídica adequada.",
            "Incorreta. A LDB não foi revogada pela política de 2008."
        ],
        "dicaBanca": "Antes de resolver, circule a expressão “de acordo com...” no comando.",
        "pegadinha": "Norma mais nova não autoriza responder outra fonte quando a banca pede um documento específico.",
        "memorizar2026": "2008 = marco histórico; 2025 = política nacional vigente. Leia a fonte pedida.",
        "fonte": "Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva (2008); Decreto nº 12.686/2025.",
        "atualizacao2026": "Para 2026, diferencie sempre o documento de 2008 da PNEEI instituída em 2025."
    },
    {
        "id": "SEDUC-EE-LEG-025",
        "numero": 25,
        "subtopico": "PNEEI 2025 — público e transversalidade",
        "dificuldade": "media",
        "pergunta": "À luz do Decreto nº 12.686/2025, a Educação Especial caracteriza-se como modalidade transversal e tem como público, na terminologia da política vigente, estudantes com",
        "alternativas": [
            "deficiência e dificuldades de aprendizagem, apenas.",
            "TEA e TDAH, apenas.",
            "qualquer transtorno do neurodesenvolvimento.",
            "deficiência, transtornos globais do desenvolvimento e transtornos específicos de aprendizagem com impacto escolar persistente.",
            "deficiência, transtorno do espectro autista e altas habilidades ou superdotação."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou simultaneamente a transversalidade e o público da política vigente: deficiência, TEA e altas habilidades/superdotação.",
        "feedbackErro": "A PNEEI não inclui automaticamente todas as dificuldades ou transtornos do neurodesenvolvimento como público da modalidade e utiliza TEA, não TGD, nessa enumeração.",
        "analiseAlternativas": [
            "Incorreta. Dificuldade de aprendizagem não substitui as categorias legais.",
            "Incorreta. TDAH não integra essa enumeração por si só.",
            "Incorreta. A categoria é mais delimitada.",
            "Incorreta. Mistura terminologia da LDB com condição que não compõe a enumeração.",
            "Correta. É a formulação atual da política vigente."
        ],
        "dicaBanca": "PNEEI 2025: memorize três grupos e a palavra “transversal”.",
        "pegadinha": "Não amplie o público por analogia em questão de literalidade normativa.",
        "memorizar2026": "PNEEI: deficiência + TEA + altas habilidades/superdotação; modalidade transversal.",
        "fonte": "Decreto nº 12.686/2025, arts. 2º e 3º."
    },
    {
        "id": "SEDUC-EE-LEG-026",
        "numero": 26,
        "subtopico": "PNEEI 2025 — AEE",
        "dificuldade": "alta",
        "pergunta": "Na política nacional vigente, o Atendimento Educacional Especializado é definido, quanto à sua função, como",
        "alternativas": [
            "complementar para deficiência e TEA e suplementar para altas habilidades ou superdotação.",
            "substitutivo da escolarização comum para estudantes com deficiência.",
            "suplementar para todo o público da Educação Especial, com variação apenas na intensidade e no tipo de recurso utilizado.",
            "serviço clínico prestado pela escola.",
            "reforço escolar destinado a recuperar notas baixas."
        ],
        "correta": 0,
        "feedbackAcerto": "Você distinguiu corretamente complementar e suplementar na PNEEI vigente. Essa diferença é um ponto forte para questões literais e casos práticos.",
        "feedbackErro": "O AEE não substitui escolarização, não é atendimento clínico e não se confunde com reforço escolar. A política diferencia a função conforme o público.",
        "analiseAlternativas": [
            "Correta. É a distinção adotada pelo Decreto nº 12.686/2025.",
            "Incorreta. AEE não substitui a classe comum.",
            "Incorreta. A função não é suplementar para todos indistintamente.",
            "Incorreta. AEE é serviço educacional.",
            "Incorreta. Sua finalidade é eliminar barreiras e organizar recursos, não recuperar nota."
        ],
        "dicaBanca": "Palavras-chave: deficiência/TEA → complementar; altas habilidades → suplementar.",
        "pegadinha": "Complementar/suplementar não é sinônimo de substitutivo.",
        "memorizar2026": "AEE atual: complementar (deficiência/TEA) + suplementar (AH/SD).",
        "fonte": "Decreto nº 12.686/2025, art. 5º."
    },
    {
        "id": "SEDUC-EE-LEG-027",
        "numero": 27,
        "subtopico": "Decreto 12.773/2025 — organização dos sistemas",
        "dificuldade": "alta",
        "pergunta": "O Decreto nº 12.773/2025 alterou a PNEEI e passou a prever que Estados, Distrito Federal e Municípios",
        "alternativas": [
            "devem encerrar convênios existentes e concentrar a oferta da modalidade na rede pública comum.",
            "podem organizar a modalidade também por parcerias e convênios com instituições privadas sem fins lucrativos especializadas, nos termos da LDB.",
            "podem delegar a execução pedagógica da Educação Especial às instituições conveniadas, mantendo apenas supervisão administrativa, desde que a medida esteja prevista no regimento e seja formalmente justificada pela instituição.",
            "devem priorizar instituições conveniadas nos casos em que a rede comum não disponha de professor especializado.",
            "podem oferecer Educação Especial por convênio como forma preferencial, mantendo a rede própria apenas de modo suplementar."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou uma alteração importante de dezembro de 2025: a norma passou a explicitar a possibilidade de parcerias e convênios nos termos da LDB, sem transformar isso em exclusividade ou transferência integral do dever estatal.",
        "feedbackErro": "A alteração não extingue instituições, não obriga convênio e não autoriza abandonar a classe comum ou o sistema público.",
        "analiseAlternativas": [
            "Incorreta. A norma não determina extinção.",
            "Correta. Essa possibilidade foi inserida pelo art. 4º-A.",
            "Incorreta. Parceria não significa transferência integral da responsabilidade.",
            "Incorreta. O direito à escolarização comum com apoios permanece.",
            "Incorreta. A parceria é possibilidade, não forma única de oferta."
        ],
        "dicaBanca": "Desconfie de “proibido qualquer convênio” e de “somente por convênio”: os dois extremos estão errados.",
        "pegadinha": "Parceria possível ≠ substituição do sistema público inclusivo.",
        "memorizar2026": "Decreto 12.773/2025: permite parcerias qualificadas, não terceirização total.",
        "fonte": "Decreto nº 12.773/2025, inclusão do art. 4º-A no Decreto nº 12.686/2025.",
        "atualizacao2026": "Alteração de dezembro de 2025 com potencial de cobrança em 2026."
    },
    {
        "id": "SEDUC-EE-LEG-028",
        "numero": 28,
        "subtopico": "Portarias MEC 421 e 572/2026",
        "dificuldade": "alta",
        "pergunta": "Sobre as atualizações federais de 2026, assinale a afirmativa correta.",
        "alternativas": [
            "A Portaria MEC nº 572/2026 substituiu o Decreto nº 12.686/2025 e passou a concentrar a implementação da PNEEI nos centros de formação.",
            "A Portaria MEC nº 421/2026 regulamentou a LBI e criou novas hipóteses de cobrança de serviços educacionais especializados.",
            "A Portaria MEC nº 421/2026 regulamentou a implementação da PNEEI e a Rede Nacional; a nº 572/2026 instituiu 27 Centros de Formação Continuada em Educação Especial Inclusiva.",
            "A Portaria MEC nº 572/2026 reorganizou a formação continuada e tornou facultativa a participação dos sistemas estaduais e municipais na Rede Nacional.",
            "As Portarias nº 421/2026 e nº 572/2026 tratam da seleção e formação de profissionais para concursos públicos da Educação Especial."
        ],
        "correta": 2,
        "feedbackAcerto": "Você distinguiu corretamente as duas atualizações de 2026: a Portaria 421 organiza a política e a Rede Nacional; a 572 institui 27 centros de formação, um em cada unidade da Federação.",
        "feedbackErro": "As portarias não revogam a PNEEI, não criam a LBI e não extinguem formação. Elas operacionalizam e fortalecem a política vigente.",
        "analiseAlternativas": [
            "Incorreta. A Portaria 572 integra a PNEEI e não a revoga.",
            "Incorreta. A LBI é a Lei nº 13.146/2015.",
            "Correta. Essa é a distinção funcional entre as duas portarias.",
            "Incorreta. A Portaria 572 justamente cria centros de formação.",
            "Incorreta. O objeto é política pública de Educação Especial Inclusiva."
        ],
        "dicaBanca": "Atualizações do ano da prova são ótimas candidatas a questões de associação “norma → finalidade”.",
        "pegadinha": "Não troque 421 (Rede/implementação) com 572 (27 centros de formação).",
        "memorizar2026": "421 = implementação/Rede; 572 = 27 centros de formação.",
        "fonte": "Portaria MEC nº 421/2026; Portaria MEC nº 572/2026.",
        "atualizacao2026": "Portarias publicadas em maio e julho de 2026, respectivamente."
    },
    {
        "id": "SEDUC-EE-LEG-029",
        "numero": 29,
        "subtopico": "Aplicação integrada da LBI e Lei do TEA",
        "dificuldade": "alta",
        "pergunta": "Uma escola privada recusa a matrícula de uma criança com TEA e informa que, mesmo se reconsiderar, cobrará valor adicional para os apoios de inclusão. À luz da legislação federal, a conduta é",
        "alternativas": [
            "lícita se a escola demonstrar que não dispõe de estrutura especializada e indicar outra instituição com os apoios necessários.",
            "lícita se a família não apresentar documentação clínica que justifique os recursos de acessibilidade solicitados.",
            "parcialmente lícita: a matrícula deve ser aceita, mas a escola pode cobrar separadamente pelos apoios individualizados não previstos na mensalidade, desde que a escola registre a necessidade e assegure acompanhamento educacional durante a medida.",
            "ilícita: a recusa de matrícula por deficiência e a cobrança adicional por medidas inclusivas são vedadas; o TEA é equiparado à deficiência para fins legais.",
            "ilícita quanto à recusa, mas a cobrança específica seria possível se prevista no contrato e vinculada a recurso de uso individual."
        ],
        "correta": 3,
        "feedbackAcerto": "Você integrou corretamente três regras: TEA é juridicamente pessoa com deficiência; recusa de matrícula por deficiência é proibida; e instituição privada não pode cobrar taxa adicional para cumprir as medidas inclusivas da LBI.",
        "feedbackErro": "A ausência de SRM ou de documento clínico não autoriza discriminação. A legislação protege acesso à matrícula e veda repassar ao estudante uma “taxa de inclusão”.",
        "analiseAlternativas": [
            "Incorreta. Falta de SRM não legitima recusa de matrícula.",
            "Incorreta. Avaliação biopsicossocial não é licença para discriminar.",
            "Incorreta. A cobrança adicional também é vedada.",
            "Correta. A alternativa reúne corretamente Lei do TEA e LBI.",
            "Incorreta. A taxa adicional não é facultativa nesse contexto; é vedada."
        ],
        "dicaBanca": "FGV gosta de casos que exigem combinar duas ou três normas em uma única resposta.",
        "pegadinha": "Uma alternativa pode acertar a recusa e errar a cobrança — leia todas as partes.",
        "memorizar2026": "TEA = PcD; matrícula não pode ser negada; escola privada não cobra taxa de inclusão.",
        "fonte": "Lei nº 12.764/2012, arts. 1º, §2º, e 7º; Lei nº 13.146/2015, art. 28, §1º."
    },
    {
        "id": "SEDUC-EE-LEG-030",
        "numero": 30,
        "subtopico": "Integração normativa — FGV difícil",
        "dificuldade": "alta",
        "pergunta": "Considere as afirmativas a seguir sobre a legislação da Educação Especial.\n\nI. A Convenção sobre os Direitos das Pessoas com Deficiência assegura sistema educacional inclusivo em todos os níveis.\nII. A LDB, em sua literalidade, ainda utiliza a expressão “transtornos globais do desenvolvimento”.\nIII. A Lei nº 14.191/2021 estabelece Libras como primeira língua e português escrito como segunda língua na Educação Bilíngue de Surdos.\nIV. A PNEEI instituída em 2025 utiliza TEA na identificação de seu público.\nV. A escola privada pode cobrar valor adicional sempre que houver profissional de apoio escolar.\n\nEstá correto o que se afirma em",
        "alternativas": [
            "I, II e V, apenas.",
            "II, III e V, apenas.",
            "I, III e IV, apenas.",
            "I, II, III e V, apenas.",
            "I, II, III e IV, apenas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você cruzou corretamente quatro marcos normativos e identificou a única proposição falsa: a LBI veda cobrança adicional pelas medidas inclusivas abrangidas pelo art. 28.",
        "feedbackErro": "I, II, III e IV estão corretas. A afirmativa V está errada porque instituições privadas não podem criar cobrança adicional em mensalidades, anuidades ou matrículas para cumprir as determinações inclusivas previstas na LBI.",
        "analiseAlternativas": [
            "Incorreta. V é falsa e III e IV também são verdadeiras.",
            "Incorreta. V é falsa e I e IV são verdadeiras.",
            "Incorreta. II também é verdadeira.",
            "Incorreta. V é falsa.",
            "Correta. Apenas V está errada."
        ],
        "dicaBanca": "Em questão longa da FGV, marque cada item com a norma de origem antes de olhar as alternativas: Convenção, LDB, Lei 14.191, PNEEI, LBI.",
        "pegadinha": "Uma única expressão absoluta (“pode cobrar sempre”) pode derrubar uma alternativa com quatro itens corretos.",
        "memorizar2026": "Mapa mental jurídico: Convenção = inclusão; LDB = TGD; Bilíngue = Libras L1/PT escrito L2; PNEEI = TEA; LBI = sem taxa extra.",
        "fonte": "Decreto nº 6.949/2009, art. 24; Lei nº 9.394/1996, art. 58 e 60-A; Decreto nº 12.686/2025; Lei nº 13.146/2015, art. 28, §1º."
    }
];

    window.seducEducacaoEspecialLegislacao2026 = banco;
})();
