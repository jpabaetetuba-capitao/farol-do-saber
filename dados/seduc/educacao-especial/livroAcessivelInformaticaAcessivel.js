/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 14: Livro Acessível e Informática Acessível
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 06/09/2026.
   Bases: LBI arts. 67-69; MEC/FNDE Livro Acessível; MEC Mecdaisy;
   FGV Educação Especial/Deficiência Visual e Professor A (AEE).
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-LIA-001",
        "numero": 1,
        "subtopico": "Livro acessível — conceito",
        "dificuldade": "media",
        "pergunta": "Em uma política de inclusão escolar, um livro pode ser considerado acessível quando",
        "alternativas": [
            "possui versão impressa com letras maiores, ainda que a navegação digital, as imagens e os demais elementos permaneçam inacessíveis.",
            "é produzido em um único formato especial padronizado, evitando escolhas diferentes entre estudantes com a mesma deficiência.",
            "oferece formato e recursos que permitem ao estudante acessar o conteúdo com autonomia, conforme suas necessidades e tecnologias de apoio.",
            "é entregue exclusivamente pelo AEE, pois materiais acessíveis não integram a rotina pedagógica da classe comum.",
            "mantém o conteúdo original, mas elimina elementos gráficos para reduzir a complexidade do material e facilitar sua adaptação escolar durante as atividades escolares regulares, conforme o planejamento da equipe."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou o princípio central: acessibilidade não é um formato único, mas a possibilidade real de acessar e utilizar o conteúdo com os recursos adequados.",
        "feedbackErro": "Livro acessível não significa apenas fonte maior, formato especial único ou material restrito ao AEE. O foco é remover barreiras de leitura e navegação sem empobrecer o conteúdo.",
        "analiseAlternativas": [
            "Incorreta. Ampliação pode ser necessária, mas sozinha não garante acessibilidade do conjunto do material.",
            "Incorreta. Pessoas com a mesma deficiência podem precisar de formatos e recursos distintos.",
            "Correta. Acessibilidade é funcional e deve permitir acesso efetivo ao conteúdo com autonomia.",
            "Incorreta. O material acessível deve circular no currículo e na classe comum, não ficar confinado ao AEE.",
            "Incorreta. Acessibilizar não exige retirar conteúdo relevante ou imagens; exige torná-los acessíveis."
        ],
        "dicaBanca": "A FGV costuma trocar “acessível” por “adaptado de alguma forma”. Pergunte se o estudante realmente consegue acessar, navegar e compreender o material.",
        "pegadinha": "Formato diferente não é sinônimo automático de formato acessível.",
        "memorizar2026": "Livro acessível = conteúdo preservado + formato/recursos que removem barreiras de leitura e uso.",
        "fonte": "LBI, arts. 68 e 69; MEC — Projeto Livro Acessível."
    },
    {
        "id": "SEDUC-EE-LIA-002",
        "numero": 2,
        "subtopico": "LBI — formatos acessíveis",
        "dificuldade": "alta",
        "pergunta": "Nos termos da Lei Brasileira de Inclusão, consideram-se formatos acessíveis, entre outros, arquivos digitais que",
        "alternativas": [
            "sejam produzidos exclusivamente em áudio, desde que o estudante não precise utilizar recursos visuais durante a leitura.",
            "possam ser reconhecidos por leitores de tela ou outras tecnologias assistivas, permitindo voz sintetizada, ampliação, contraste e impressão em Braille.",
            "mantenham a aparência da página impressa, ainda que sua estrutura não possa ser interpretada por tecnologia assistiva.",
            "sejam convertidos para imagem de alta resolução, pois a fidelidade visual é o principal critério de acessibilidade digital.",
            "sejam protegidos contra alterações pelo usuário, impedindo ajustes de fonte, contraste e navegação para preservar a obra original durante as atividades escolares regulares, conforme o planejamento da equipe."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu a definição legal de formato acessível do art. 68, §2º, da LBI.",
        "feedbackErro": "A LBI não define acessibilidade pela aparência visual ou por um formato único. O arquivo deve interagir com tecnologias assistivas e permitir diferentes formas de leitura.",
        "analiseAlternativas": [
            "Incorreta. Áudio pode ser um formato útil, mas a lei não limita formato acessível a conteúdo exclusivamente sonoro.",
            "Correta. Resume os elementos do art. 68, §2º, da LBI.",
            "Incorreta. Um arquivo visualmente fiel pode ser inacessível se não houver estrutura interpretável por tecnologia assistiva.",
            "Incorreta. Imagem de página não garante leitura por leitor de tela nem navegação estruturada.",
            "Incorreta. Bloquear ajustes pode criar barreiras para usuários que dependem de personalização."
        ],
        "dicaBanca": "FGV pode cobrar a literalidade do art. 68: leitor de tela, voz sintetizada, ampliação, contraste e impressão em Braille.",
        "pegadinha": "PDF visualmente bonito pode ser tecnicamente inacessível.",
        "memorizar2026": "LBI art. 68, §2º: formato acessível precisa conversar com tecnologias assistivas.",
        "fonte": "Lei nº 13.146/2015, art. 68, §2º."
    },
    {
        "id": "SEDUC-EE-LIA-003",
        "numero": 3,
        "subtopico": "LBI — compra pública de livros",
        "dificuldade": "alta",
        "pergunta": "Em edital público para compra de livros destinados às bibliotecas escolares, a administração pretende admitir editoras que comercializam apenas versões convencionais. À luz da LBI, essa previsão",
        "alternativas": [
            "é válida se a biblioteca dispuser de profissional capaz de converter posteriormente as obras para formatos acessíveis durante as atividades escolares regulares, conforme o planejamento da equipe.",
            "é válida quando a editora autorizar reprodução parcial para estudantes que apresentem laudo de deficiência visual.",
            "é válida desde que a escola mantenha exemplares em Braille de parte das obras mais utilizadas no currículo.",
            "é inválida somente quando houver estudante cego matriculado na escola no momento da aquisição dos livros.",
            "contraria a LBI, que prevê cláusula impeditiva à participação de editora que não ofereça sua produção também em formatos acessíveis."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou corretamente o art. 68, §1º: a compra pública de livros deve considerar a oferta da produção em formatos acessíveis.",
        "feedbackErro": "A obrigação não depende da existência de um aluno específico nem pode ser transferida integralmente à escola depois da compra.",
        "analiseAlternativas": [
            "Incorreta. A conversão posterior pela escola não substitui a regra estabelecida para a participação das editoras no edital.",
            "Incorreta. O direito não depende de laudo individual para que a política de aquisição seja acessível.",
            "Incorreta. Manter alguns títulos acessíveis não corrige edital que desconsidere a obrigação legal das editoras.",
            "Incorreta. A regra é de acessibilidade na política de aquisição, não uma resposta eventual à matrícula de um aluno.",
            "Correta. É a consequência expressa do art. 68, §1º, da LBI."
        ],
        "dicaBanca": "Questões jurídicas da FGV frequentemente inserem uma condição aparentemente razoável — “se houver aluno matriculado” — que não existe na norma.",
        "pegadinha": "Acessibilidade na compra pública é planejamento prévio, não adaptação apenas quando surge a demanda.",
        "memorizar2026": "Edital público de livros: oferta em formatos acessíveis deve integrar a própria aquisição.",
        "fonte": "Lei nº 13.146/2015, art. 68, §1º."
    },
    {
        "id": "SEDUC-EE-LIA-004",
        "numero": 4,
        "subtopico": "Braille, fonte ampliada e funcionalidade",
        "dificuldade": "media",
        "pergunta": "Uma estudante com baixa visão utiliza visão residual de forma funcional e lê com conforto quando há ampliação, contraste e espaçamento adequados. A escola decide fornecer somente material em Braille porque “é o formato próprio da deficiência visual”. A decisão é",
        "alternativas": [
            "inadequada, porque o formato deve ser escolhido conforme a funcionalidade e as necessidades da estudante, podendo incluir ampliação, contraste e recursos digitais acessíveis.",
            "adequada, porque o Braille é o sistema de leitura prioritário para qualquer estudante incluído no público da deficiência visual.",
            "adequada se o material em Braille for disponibilizado simultaneamente no AEE, ainda que a estudante não o utilize de forma funcional.",
            "inadequada apenas se a família solicitar fonte ampliada por escrito e demonstrar que o Braille reduz o desempenho escolar.",
            "adequada como medida de prevenção, pois o uso da visão residual deve ser reduzido para evitar progressão de dificuldades visuais durante a escolarização durante as atividades escolares regulares, conforme o planejamento da equipe."
        ],
        "correta": 0,
        "feedbackAcerto": "Você evitou a generalização pelo diagnóstico. Baixa visão pode demandar recursos ópticos, não ópticos e digitais, conforme funcionalidade.",
        "feedbackErro": "Não existe um único formato obrigatório para toda deficiência visual. O recurso deve responder à forma como a estudante acessa melhor a informação.",
        "analiseAlternativas": [
            "Correta. Ampliação, contraste e recursos digitais podem ser mais funcionais conforme o perfil da estudante.",
            "Incorreta. Braille não é obrigatório para toda pessoa com deficiência visual.",
            "Incorreta. Disponibilizar um recurso sem utilidade funcional não torna a prática adequada.",
            "Incorreta. A decisão pedagógica não depende de requerimento formal da família para reconhecer uma barreira já identificada.",
            "Incorreta. O uso funcional da visão residual não deve ser proibido por regra geral."
        ],
        "dicaBanca": "FGV gosta de testar generalizações: “todo cego”, “toda baixa visão”, “todo aluno com deficiência”. Prefira funcionalidade e avaliação individual.",
        "pegadinha": "Diagnóstico não escolhe sozinho o formato do livro.",
        "memorizar2026": "Baixa visão pode usar ampliação, contraste, recursos ópticos e digitais; Braille depende da necessidade funcional.",
        "fonte": "MEC — Deficiência Visual/AEE; LBI — acessibilidade e Tecnologia Assistiva."
    },
    {
        "id": "SEDUC-EE-LIA-005",
        "numero": 5,
        "subtopico": "Produção Braille — acesso equivalente",
        "dificuldade": "media",
        "pergunta": "A finalidade central das normas técnicas de produção de textos em Braille, no contexto educacional, é",
        "alternativas": [
            "padronizar a impressão de textos curtos, mantendo livros extensos em formato convencional para evitar aumento de volume físico.",
            "restringir a transcrição às disciplinas de linguagem, nas quais a representação escrita possui maior relevância pedagógica.",
            "substituir recursos digitais, porque a escrita Braille deve ser a única via de acesso ao texto para a pessoa cega alfabetizada.",
            "assegurar qualidade na transcrição para que a pessoa cega tenha acesso às informações e experiências transmitidas pelo texto em tinta.",
            "simplificar previamente o texto original, pois a leitura tátil exige menor extensão e vocabulário reduzido para ser funcional na escola."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou a finalidade pedagógica das normas: produzir Braille de qualidade que assegure acesso equivalente às informações.",
        "feedbackErro": "Braille não exige simplificação do conteúdo nem elimina outros formatos. A norma técnica busca fidelidade e qualidade de acesso.",
        "analiseAlternativas": [
            "Incorreta. O tamanho físico não autoriza excluir conteúdos de livros extensos da transcrição acessível.",
            "Incorreta. Braille pode ser utilizado em diferentes áreas curriculares.",
            "Incorreta. Recursos digitais e Braille podem coexistir conforme as necessidades e tarefas.",
            "Correta. Esse é o objetivo explicitado pelo MEC/Comissão Brasileira do Braille.",
            "Incorreta. A transcrição acessível não deve empobrecer automaticamente o texto original."
        ],
        "dicaBanca": "A FGV pode misturar “acessibilidade” com “simplificação”. São decisões diferentes.",
        "pegadinha": "Transcrever para Braille não significa reduzir conteúdo.",
        "memorizar2026": "Braille de qualidade garante acesso às mesmas informações, respeitando as regras do sistema.",
        "fonte": "MEC — Normas Técnicas para a Produção de Textos em Braille."
    },
    {
        "id": "SEDUC-EE-LIA-006",
        "numero": 6,
        "subtopico": "Informática acessível — leitor de tela",
        "dificuldade": "media",
        "pergunta": "Em informática acessível, um leitor de tela é um recurso que",
        "alternativas": [
            "converte informações apresentadas na interface em saída sintetizada ou compatível com outras formas de acesso, permitindo navegação sem depender da visão da tela.",
            "aumenta exclusivamente o tamanho das letras e dos ícones, preservando o restante da interface sem qualquer interpretação do conteúdo.",
            "adapta automaticamente qualquer página inacessível, ainda que o site não possua estrutura semântica, rótulos ou ordem lógica de navegação.",
            "funciona apenas em arquivos de texto simples, não podendo interagir com navegadores, menus, formulários ou aplicativos educacionais.",
            "é destinado prioritariamente a estudantes com baixa visão, enquanto pessoas cegas utilizam apenas linhas Braille para acessar computadores durante as atividades escolares regulares, conforme o planejamento da equipe."
        ],
        "correta": 0,
        "feedbackAcerto": "Você distinguiu leitor de tela de ampliador. O leitor interpreta elementos da interface e oferece saída acessível, geralmente por voz sintetizada e/ou integração com Braille.",
        "feedbackErro": "Leitor de tela não é mero zoom e não consegue “consertar” sozinho uma página mal construída. A acessibilidade do conteúdo digital continua necessária.",
        "analiseAlternativas": [
            "Correta. Leitores de tela permitem acesso e navegação por elementos da interface sem depender da percepção visual direta.",
            "Incorreta. Essa descrição corresponde mais a ampliadores de tela.",
            "Incorreta. Tecnologia assistiva não corrige automaticamente ausência de estrutura acessível do conteúdo.",
            "Incorreta. Leitores de tela interagem com muitos tipos de interfaces e aplicações quando são acessíveis.",
            "Incorreta. Pessoas cegas utilizam leitores de tela e podem também utilizar displays Braille."
        ],
        "dicaBanca": "A FGV já cobrou leitores de tela como programas com voz sintetizada. Diferencie leitura da tela de simples ampliação.",
        "pegadinha": "Leitor de tela não torna qualquer site acessível por mágica.",
        "memorizar2026": "Leitor de tela interpreta a interface e apresenta informação por saída acessível.",
        "fonte": "FGV — Educação Especial: Deficiência Visual; LBI, art. 68, §2º."
    },
    {
        "id": "SEDUC-EE-LIA-007",
        "numero": 7,
        "subtopico": "Informática acessível — ampliador de tela",
        "dificuldade": "media",
        "pergunta": "Um software ampliador de tela é particularmente útil quando o estudante",
        "alternativas": [
            "precisa converter toda informação textual em sinais de Libras para compreender interfaces digitais durante as atividades escolares.",
            "utiliza visão residual e se beneficia de aumento de caracteres, contraste, ajuste de cores e ampliação de regiões da interface.",
            "não consegue utilizar nenhum recurso visual e necessita exclusivamente de saída tátil por linha Braille, sem qualquer apoio sonoro.",
            "apresenta dificuldade de compreensão leitora e precisa que o programa resuma automaticamente os conteúdos curriculares exibidos na tela.",
            "necessita substituir teclado e mouse por acionadores externos, independentemente de suas condições visuais e motoras no contexto escolar."
        ],
        "correta": 1,
        "feedbackAcerto": "Você associou corretamente ampliadores de tela ao uso funcional da visão residual, com recursos de zoom, contraste e personalização visual.",
        "feedbackErro": "Ampliador não traduz conteúdo, não resume currículo e não é recurso de acesso motor. Sua finalidade é favorecer percepção visual da interface.",
        "analiseAlternativas": [
            "Incorreta. Conversão para Libras é outra estratégia de acessibilidade comunicacional.",
            "Correta. Ampliação e ajustes de contraste/cores são características típicas desses softwares.",
            "Incorreta. A descrição aponta para outros recursos, como linha Braille e leitor de tela.",
            "Incorreta. Dificuldade de compreensão não se resolve simplesmente com ampliador de tela.",
            "Incorreta. Acionadores e dispositivos alternativos de entrada atendem demandas motoras específicas."
        ],
        "dicaBanca": "A FGV já cobrou ampliadores e leitores de tela na mesma questão. Compare função, não apenas o nome do software.",
        "pegadinha": "Zoom não é leitor de tela; leitor de tela não é zoom.",
        "memorizar2026": "Ampliador = tornar visualmente perceptível; leitor de tela = apresentar informação por saída não visual.",
        "fonte": "FGV — Educação Especial: Deficiência Visual."
    },
    {
        "id": "SEDUC-EE-LIA-008",
        "numero": 8,
        "subtopico": "Informática acessível — DOSVOX",
        "dificuldade": "alta",
        "pergunta": "Em questão sobre tecnologias assistivas, a FGV já apresentou o sistema DOSVOX como recurso voltado principalmente para pessoas com",
        "alternativas": [
            "deficiência auditiva, por transformar textos em legendas sincronizadas nos ambientes digitais.",
            "deficiência intelectual, por organizar rotinas e simplificar automaticamente comandos de softwares educacionais.",
            "deficiência visual, oferecendo ambiente e recursos de acesso ao computador por meio de síntese de voz e aplicações específicas.",
            "deficiência física, por substituir qualquer dispositivo de entrada por comando ocular sem necessidade de configuração durante as atividades escolares regulares, conforme o planejamento da equipe.",
            "altas habilidades, por ampliar velocidade de leitura e navegação em bases digitais de pesquisa escolar."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu um exemplo cobrado pela própria FGV: DOSVOX é historicamente associado ao acesso de pessoas com deficiência visual ao computador.",
        "feedbackErro": "A banca pode usar nomes de tecnologias conhecidas para verificar se o candidato associa recurso e funcionalidade corretamente.",
        "analiseAlternativas": [
            "Incorreta. Legenda é recurso de acessibilidade comunicacional, mas não define a finalidade do DOSVOX.",
            "Incorreta. DOSVOX não é um organizador cognitivo voltado à deficiência intelectual.",
            "Correta. A FGV/Macaé 2024 cobrou essa associação diretamente.",
            "Incorreta. Acesso motor por comando ocular pertence a outra categoria de recursos assistivos.",
            "Incorreta. DOSVOX não é tecnologia específica para altas habilidades."
        ],
        "dicaBanca": "Quando a FGV citar um recurso pelo nome, pense primeiro na função e no público para o qual foi historicamente desenvolvido.",
        "pegadinha": "Não classifique tecnologia apenas por parecer “software educacional”.",
        "memorizar2026": "DOSVOX → acesso de pessoas com deficiência visual ao computador.",
        "fonte": "FGV/Macaé 2024 — Professor A (AEE)."
    },
    {
        "id": "SEDUC-EE-LIA-009",
        "numero": 9,
        "subtopico": "Acessibilidade digital — teclado",
        "dificuldade": "alta",
        "pergunta": "Uma plataforma de aprendizagem pode ser utilizada com leitor de tela, mas vários botões só funcionam quando o usuário clica com o mouse. Para torná-la mais acessível, é necessário",
        "alternativas": [
            "garantir que os controles possam ser alcançados e acionados por teclado, com ordem de foco lógica e identificação compreensível dos elementos.",
            "manter os botões como estão e orientar o estudante a utilizar um profissional de apoio sempre que precisar acionar funções inacessíveis.",
            "criar uma versão separada da plataforma somente para estudantes com deficiência, ainda que o conteúdo principal continue inacessível por teclado.",
            "converter todos os textos em arquivos de áudio, pois a navegação por teclado deixa de ser necessária quando existe saída sonora do conteúdo.",
            "retirar formulários e atividades interativas do percurso do estudante, preservando apenas páginas de leitura para reduzir barreiras de navegação."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou que acessibilidade digital envolve operação dos controles, não apenas leitura do texto. Navegação por teclado e foco lógico são requisitos fundamentais.",
        "feedbackErro": "Leitor de tela não resolve botão inacessível ao teclado. A interface deve permitir que o usuário alcance e acione funções de modo autônomo.",
        "analiseAlternativas": [
            "Correta. Operabilidade por teclado e foco previsível ampliam acesso para usuários de leitores de tela e outros recursos.",
            "Incorreta. Apoio humano não deve substituir correção de uma barreira digital evitável.",
            "Incorreta. Versão segregada não é a primeira resposta quando a interface comum pode ser construída acessivelmente.",
            "Incorreta. Áudio não substitui a necessidade de operar menus, botões e formulários.",
            "Incorreta. Remover atividades empobrece a participação em vez de eliminar a barreira técnica."
        ],
        "dicaBanca": "FGV pode descrever uma página que “funciona com leitor de tela” e esconder uma barreira de interação. Acessibilidade inclui perceber, compreender e operar.",
        "pegadinha": "Ouvir a página não basta se o aluno não consegue usar seus controles.",
        "memorizar2026": "Acessibilidade digital = conteúdo perceptível + navegação operável + estrutura compreensível.",
        "fonte": "LBI — acessibilidade à informação e comunicação; princípios de acessibilidade digital."
    },
    {
        "id": "SEDUC-EE-LIA-010",
        "numero": 10,
        "subtopico": "Texto alternativo em imagens",
        "dificuldade": "media",
        "pergunta": "Em um material digital de Ciências, uma imagem contém informação essencial para responder à atividade. Para um estudante que utiliza leitor de tela, a medida mais adequada é",
        "alternativas": [
            "retirar a imagem e substituí-la por uma pergunta diferente, evitando que o estudante dependa de um elemento originalmente visual.",
            "manter a imagem sem descrição e pedir ao colega ao lado que explique seu conteúdo durante a avaliação ou atividade.",
            "converter a imagem em um arquivo maior, pois alta resolução permite que o leitor de tela reconheça automaticamente todos os elementos.",
            "oferecer descrição textual adequada à finalidade pedagógica da imagem, preservando a informação necessária para realizar a atividade.",
            "indicar apenas “imagem de Ciências” no atributo textual, porque descrições detalhadas interferem na autonomia de interpretação do estudante."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou o princípio correto: quando a imagem carrega conteúdo, a descrição precisa transmitir a informação relevante para a tarefa sem resolver a questão pelo estudante.",
        "feedbackErro": "Imagem essencial não deve simplesmente ser removida ou deixada dependente de ajuda de colegas. A descrição precisa considerar a função pedagógica do elemento visual.",
        "analiseAlternativas": [
            "Incorreta. Trocar a atividade pode reduzir oportunidades e não enfrenta a barreira de acesso à informação.",
            "Incorreta. Colegas podem colaborar, mas acessibilidade do material não pode depender de mediação improvisada.",
            "Incorreta. Resolução da imagem não produz, por si só, descrição compreensível para leitor de tela.",
            "Correta. Texto alternativo deve comunicar o que é relevante no contexto da atividade.",
            "Incorreta. Rótulo genérico não transmite a informação visual necessária."
        ],
        "dicaBanca": "A FGV já cobrou audiodescrição e recursos visuais acessíveis. Em materiais digitais, pergunte qual informação a imagem acrescenta e como oferecê-la em outro modo.",
        "pegadinha": "Texto alternativo não é legenda genérica nem resposta pronta.",
        "memorizar2026": "Imagem informativa → descrição com o conteúdo relevante à finalidade pedagógica.",
        "fonte": "LBI — acesso à informação; princípios de acessibilidade digital e audiodescrição."
    },
    {
        "id": "SEDUC-EE-LIA-011",
        "numero": 11,
        "subtopico": "Documento digital acessível",
        "dificuldade": "alta",
        "pergunta": "Um professor envia aos estudantes um PDF formado apenas por fotografias das páginas de uma apostila. Visualmente o arquivo está completo, mas o leitor de tela anuncia apenas “imagem”. A melhor correção é",
        "alternativas": [
            "aumentar a resolução das fotografias e manter o PDF como imagem, porque o problema decorre principalmente da qualidade visual do arquivo.",
            "usar documento com texto reconhecível e estrutura adequada, incluindo títulos, ordem de leitura e descrições necessárias aos elementos não textuais.",
            "gravar uma aula explicando o conteúdo e dispensar o estudante do uso do material escrito, evitando retrabalho de acessibilidade do documento.",
            "imprimir as mesmas páginas em papel, pois a versão física elimina as limitações do arquivo digital para estudantes que utilizam tecnologia assistiva.",
            "pedir ao AEE que faça leitura oral individual do documento, mantendo o arquivo original para os demais estudantes da turma durante o semestre."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou uma barreira típica: PDF de imagem pode ser visualmente completo e ainda ser inacessível. Estrutura e texto reconhecível são essenciais.",
        "feedbackErro": "A resposta não é trocar o direito de leitura autônoma por mediação oral. O documento deve ser produzido ou corrigido para funcionar com tecnologia assistiva.",
        "analiseAlternativas": [
            "Incorreta. Melhorar a resolução não transforma imagem em texto estruturado para leitor de tela.",
            "Correta. Texto reconhecível, hierarquia e ordem de leitura são componentes de documento digital acessível.",
            "Incorreta. Aula em vídeo pode complementar, mas não substitui o material escrito quando ele é parte do currículo.",
            "Incorreta. Impressão convencional não resolve a necessidade de acesso não visual ao texto.",
            "Incorreta. AEE pode orientar, mas não deve se tornar leitor permanente de material que poderia ser disponibilizado acessivelmente."
        ],
        "dicaBanca": "FGV gosta de casos em que há “acesso aparente”. Veja se o estudante consegue usar o material com independência e não apenas recebê-lo.",
        "pegadinha": "PDF não é sinônimo de PDF acessível.",
        "memorizar2026": "Documento acessível precisa de texto interpretável, estrutura e ordem de leitura coerentes.",
        "fonte": "LBI, art. 68; MEC — livros digitais acessíveis."
    },
    {
        "id": "SEDUC-EE-LIA-012",
        "numero": 12,
        "subtopico": "Audiodescrição",
        "dificuldade": "media",
        "pergunta": "Sobre audiodescrição em atividades educacionais, assinale a afirmativa correta.",
        "alternativas": [
            "É uma forma de legenda escrita destinada prioritariamente a pessoas surdas, substituindo a narração oral do conteúdo visual.",
            "É um recurso que converte informações visuais em sinais táteis apresentados em uma tela dinâmica durante vídeos e apresentações.",
            "Só pode ser utilizada em produções audiovisuais profissionais, não sendo aplicável a imagens, eventos ou atividades escolares ao vivo durante as atividades escolares regulares, conforme o planejamento da equipe.",
            "Deve narrar todos os detalhes visuais possíveis, independentemente da relevância para a compreensão da atividade pedagógica.",
            "É um recurso de tradução intersemiótica que descreve informações visuais relevantes, ampliando o acesso de pessoas com deficiência visual."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu a função da audiodescrição: tornar acessíveis informações visuais relevantes por meio de descrição verbal.",
        "feedbackErro": "Audiodescrição não é legenda, Braille ou recurso exclusivo de cinema. Pode ser planejada para diferentes contextos educacionais e culturais.",
        "analiseAlternativas": [
            "Incorreta. Legendas e audiodescrição atendem barreiras distintas.",
            "Incorreta. A audiodescrição é verbal, não uma conversão obrigatória para saída tátil.",
            "Incorreta. Pode ser usada em atividades escolares, apresentações, imagens e eventos.",
            "Incorreta. A descrição precisa selecionar informações relevantes e respeitar o contexto e o tempo disponível.",
            "Correta. Essa é a essência do recurso já cobrado pela FGV."
        ],
        "dicaBanca": "A FGV já apresentou um exemplo de autodescrição e cobrou audiodescrição diretamente. Não confunda com legenda ou Libras.",
        "pegadinha": "Nem toda descrição é audiodescrição de qualidade; seleção e finalidade importam.",
        "memorizar2026": "Audiodescrição = verbalizar informação visual relevante para ampliar acesso.",
        "fonte": "FGV/Macaé 2024; LBI, art. 67, III."
    },
    {
        "id": "SEDUC-EE-LIA-013",
        "numero": 13,
        "subtopico": "Livro digital acessível — navegação",
        "dificuldade": "alta",
        "pergunta": "Em um livro digital acessível, a possibilidade de navegar por capítulos, seções e elementos estruturais é importante porque",
        "alternativas": [
            "permite substituir o currículo por trechos selecionados automaticamente pelo software, reduzindo a quantidade de leitura exigida.",
            "garante que todo usuário percorra o livro na mesma sequência, evitando diferenças de acesso entre estudantes com e sem deficiência.",
            "favorece localização e exploração autônoma do conteúdo, de modo semelhante ao uso de sumário, títulos e referências em um livro bem estruturado.",
            "impede o uso de leitores de tela em páginas específicas, preservando a organização definida pela editora e os direitos autorais da obra.",
            "elimina a necessidade de formatos como Braille, áudio ou ampliação, pois a navegação digital atende igualmente qualquer perfil de leitor durante as atividades escolares regulares, conforme o planejamento da equipe."
        ],
        "correta": 2,
        "feedbackAcerto": "Você percebeu que estrutura navegável é parte da autonomia leitora: o estudante precisa localizar, avançar, retornar e encontrar seções sem depender de ajuda.",
        "feedbackErro": "Acessibilidade digital não uniformiza modos de leitura nem elimina outros formatos. Ela amplia formas de localizar e utilizar o conteúdo.",
        "analiseAlternativas": [
            "Incorreta. Navegação não serve para reduzir automaticamente o currículo.",
            "Incorreta. Usuários podem escolher estratégias e sequências diferentes conforme a tarefa.",
            "Correta. Estrutura navegável possibilita acesso funcional ao conteúdo do livro.",
            "Incorreta. Acessibilidade não deve bloquear tecnologia assistiva em partes do material.",
            "Incorreta. Nenhum formato atende igualmente todas as necessidades."
        ],
        "dicaBanca": "FGV pode apresentar um recurso sofisticado, mas pergunte qual barreira concreta ele remove. Aqui, a barreira é localizar e navegar pelo conteúdo.",
        "pegadinha": "Livro digital não é acessível só porque abre no computador.",
        "memorizar2026": "Estrutura + navegação + compatibilidade com TA = autonomia no livro digital.",
        "fonte": "MEC — Projeto Livro Acessível; formato EPUB3 acessível."
    },
    {
        "id": "SEDUC-EE-LIA-014",
        "numero": 14,
        "subtopico": "Mecdaisy / DAISY",
        "dificuldade": "alta",
        "pergunta": "Nos materiais do MEC sobre livros digitais acessíveis, o padrão DAISY/Mecdaisy é associado à possibilidade de",
        "alternativas": [
            "gerar livro digital falado com navegação estruturada, busca, avanço e recuo por seções, além de recursos de ampliação e impressão em Braille.",
            "converter qualquer vídeo escolar em Libras automaticamente, substituindo intérprete e legendas em atividades síncronas.",
            "produzir somente audiolivros lineares, sem marcação de capítulos ou possibilidade de o usuário localizar trechos específicos.",
            "impedir cópia e personalização do texto, garantindo que a obra seja lida na mesma forma visual da edição impressa original.",
            "simplificar textos longos por inteligência artificial, gerando versões resumidas destinadas exclusivamente a estudantes com deficiência intelectual."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu os recursos de navegação e multimodalidade associados ao Mecdaisy/DAISY nos materiais do MEC.",
        "feedbackErro": "O diferencial não é apenas “ter áudio”, mas permitir navegação estruturada e diferentes modos de acesso ao livro.",
        "analiseAlternativas": [
            "Correta. O material do MEC descreve navegação, voz sintetizada, busca, ampliação e possibilidade de impressão em Braille.",
            "Incorreta. Conversão automática para Libras não define o DAISY.",
            "Incorreta. O padrão justamente supera limitações de audiolivro puramente linear.",
            "Incorreta. Personalização e navegação acessível são características desejáveis, não barreiras a serem impostas.",
            "Incorreta. DAISY não é tecnologia de simplificação curricular por IA."
        ],
        "dicaBanca": "Se a FGV comparar audiolivro linear e livro digital acessível, procure navegação estruturada e autonomia de localização.",
        "pegadinha": "Áudio sozinho não garante as mesmas possibilidades de navegação de um livro acessível.",
        "memorizar2026": "DAISY/Mecdaisy = livro digital falado + estrutura navegável + múltiplas formas de acesso.",
        "fonte": "MEC — Guia de Tecnologias Educacionais / Mecdaisy."
    },
    {
        "id": "SEDUC-EE-LIA-015",
        "numero": 15,
        "subtopico": "Desenho universal e informática",
        "dificuldade": "alta",
        "pergunta": "Uma escola adquire um novo ambiente virtual de aprendizagem. Entre as opções abaixo, a decisão mais alinhada ao desenho universal é",
        "alternativas": [
            "escolher a plataforma visualmente mais moderna e instalar extensões de acessibilidade apenas para os alunos que apresentarem laudo.",
            "adotar uma plataforma comum e, depois da matrícula de estudantes com deficiência, criar versões paralelas simplificadas conforme cada diagnóstico.",
            "usar um ambiente sem recursos de acessibilidade, desde que o AEE disponibilize computador próprio com programas especializados em outro turno.",
            "priorizar desde a seleção uma plataforma que seja operável por teclado, compatível com leitores de tela e permita personalização de apresentação.",
            "padronizar tamanho de fonte e contraste para todos os usuários, pois alterações individuais prejudicam a equivalência das atividades digitais."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou desenho universal ao processo de escolha: acessibilidade deve ser prevista desde o início, não adicionada apenas como remendo posterior.",
        "feedbackErro": "Acessibilidade planejada para o maior número de pessoas reduz a necessidade de versões paralelas e dependência de soluções posteriores.",
        "analiseAlternativas": [
            "Incorreta. Extensões podem ajudar, mas acessibilidade não deve depender de laudo ou de correção tardia.",
            "Incorreta. Versões paralelas segregadas não são a lógica prioritária do desenho universal.",
            "Incorreta. AEE não substitui acessibilidade do ambiente virtual usado no currículo comum.",
            "Correta. Operabilidade, compatibilidade e personalização são critérios adequados de seleção acessível.",
            "Incorreta. Personalização pode ser condição de acesso e não compromete a equivalência pedagógica."
        ],
        "dicaBanca": "Na FGV/Macaé 2024, desenho universal foi cobrado por exemplos concretos. Procure solução pensada para todos desde o projeto.",
        "pegadinha": "Acessibilidade posterior não é a mesma coisa que desenho universal.",
        "memorizar2026": "Desenho Universal: pensar acessibilidade desde a concepção do ambiente ou recurso.",
        "fonte": "LBI — Desenho Universal; FGV/Macaé 2024."
    },
    {
        "id": "SEDUC-EE-LIA-016",
        "numero": 16,
        "subtopico": "Recursos de acesso ao computador",
        "dificuldade": "alta",
        "pergunta": "Considere os recursos abaixo no contexto de uma sala de recursos multifuncionais: teclado com colmeia, acionador de pressão, mouse com entrada para acionador e lupa eletrônica. A associação correta é",
        "alternativas": [
            "lupa eletrônica é recurso de comunicação alternativa, enquanto teclado com colmeia é destinado exclusivamente a pessoas cegas.",
            "acionador de pressão e mouse adaptado podem favorecer acesso motor ao computador; lupa eletrônica pode apoiar estudantes com baixa visão.",
            "teclado com colmeia é um leitor de tela físico, e o acionador de pressão substitui softwares de acessibilidade visual.",
            "lupa eletrônica e mouse com acionador são recursos equivalentes, pois ambos ampliam a imagem apresentada na tela do computador.",
            "esses recursos só podem ser utilizados no AEE, pois na classe comum poderiam modificar as condições de realização das atividades avaliativas."
        ],
        "correta": 1,
        "feedbackAcerto": "Você associou os recursos à sua função, exatamente o tipo de relação que a FGV já cobrou em prova de Ensino Especial.",
        "feedbackErro": "Os recursos atendem barreiras distintas: acesso motor, ampliação visual, comunicação, entrada de dados etc. Não devem ser classificados apenas pelo fato de serem tecnológicos.",
        "analiseAlternativas": [
            "Incorreta. Lupa eletrônica é recurso de ampliação visual; teclado com colmeia pode apoiar acesso motor.",
            "Correta. Essa associação corresponde às funções dos recursos e ao padrão de cobrança da FGV.",
            "Incorreta. Colmeia não é leitor de tela, e acionador não substitui recurso visual.",
            "Incorreta. Mouse/acionador trata acesso motor; lupa trata ampliação visual.",
            "Incorreta. Recursos precisam acompanhar o estudante nos contextos em que removem barreiras, inclusive classe comum."
        ],
        "dicaBanca": "A FGV já apresentou uma planilha de recursos da sala multifuncional e pediu a associação recurso × uso. Treine função concreta de cada item.",
        "pegadinha": "“Tecnologia assistiva” é categoria ampla; a banca quer saber para que cada recurso serve.",
        "memorizar2026": "Acesso motor: acionadores/teclados adaptados. Baixa visão: lupas/ampliadores. Cegueira: leitores de tela/Braille.",
        "fonte": "FGV — Professor (Ensino Especial), prova com recursos de sala multifuncional."
    },
    {
        "id": "SEDUC-EE-LIA-017",
        "numero": 17,
        "subtopico": "AEE e informática acessível",
        "dificuldade": "media",
        "pergunta": "No trabalho do AEE com informática acessível, uma atuação adequada é",
        "alternativas": [
            "selecionar e ensinar o uso de recursos de acessibilidade, articulando-os às atividades da classe comum e acompanhando sua funcionalidade.",
            "concentrar o uso de softwares assistivos exclusivamente no turno do AEE para evitar diferenças entre os estudantes durante as aulas regulares.",
            "substituir conteúdos curriculares complexos por treinamento de informática sempre que o estudante depender de tecnologia assistiva.",
            "orientar apenas o estudante, pois professores da classe comum não precisam compreender os recursos utilizados para acesso ao currículo.",
            "definir o software a partir do diagnóstico médico e manter a mesma configuração enquanto o aluno permanecer na escola."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu que o AEE organiza, ensina e acompanha recursos de acessibilidade em articulação com o ensino comum.",
        "feedbackErro": "A informática acessível não deve ficar isolada no AEE. O recurso precisa funcionar nos contextos reais de aprendizagem e ser revisto quando necessário.",
        "analiseAlternativas": [
            "Correta. Seleção, ensino do uso, articulação e acompanhamento compõem atuação pedagógica coerente.",
            "Incorreta. Confinar o recurso ao AEE mantém barreiras na classe comum.",
            "Incorreta. Tecnologia assistiva dá acesso ao currículo; não substitui o currículo.",
            "Incorreta. Articulação com professores e equipe é necessária para uso funcional do recurso.",
            "Incorreta. Diagnóstico não determina sozinho o recurso nem impede ajustes posteriores."
        ],
        "dicaBanca": "FGV costuma opor AEE complementar a soluções paralelas. Se o recurso não chega à aula comum, desconfie.",
        "pegadinha": "AEE não é laboratório isolado de tecnologia.",
        "memorizar2026": "AEE ensina o uso do recurso para que ele funcione na escolarização real.",
        "fonte": "Decreto nº 12.686/2025; Inep/MEC — atividades do AEE."
    },
    {
        "id": "SEDUC-EE-LIA-018",
        "numero": 18,
        "subtopico": "Livro acessível — currículo comum",
        "dificuldade": "media",
        "pergunta": "Um estudante cego recebe o livro didático da turma em formato acessível. Para garantir inclusão curricular, a escola deve",
        "alternativas": [
            "usar o livro acessível apenas no AEE e trabalhar na classe comum com resumos produzidos pelo professor para facilitar o acompanhamento.",
            "manter o estudante nas mesmas sequências de estudo, mas dispensá-lo das atividades que utilizam imagens, gráficos e mapas presentes no material.",
            "organizar acesso às mesmas aprendizagens, tornando também acessíveis elementos gráficos, atividades e materiais complementares quando forem relevantes.",
            "substituir o livro comum por um material funcional específico, pois conteúdos visuais indicam inadequação do currículo regular para estudantes cegos durante as atividades escolares regulares, conforme o planejamento da equipe.",
            "priorizar conteúdos de linguagem e retirar disciplinas cuja representação visual exija adaptações mais complexas ao longo do ano letivo."
        ],
        "correta": 2,
        "feedbackAcerto": "Você preservou o currículo comum e reconheceu que acessibilidade deve alcançar também gráficos, mapas, imagens e atividades relevantes.",
        "feedbackErro": "Ter o texto principal acessível não basta se partes importantes do currículo continuam inacessíveis. A escola deve remover as barreiras do conjunto da atividade.",
        "analiseAlternativas": [
            "Incorreta. Livro acessível deve apoiar participação no currículo comum, não ser material restrito ao AEE.",
            "Incorreta. Dispensa sistemática cria perda curricular e não garante acessibilidade.",
            "Correta. O objetivo é acesso às mesmas aprendizagens com recursos apropriados aos diferentes elementos do material.",
            "Incorreta. Deficiência visual não justifica currículo paralelo funcional como regra.",
            "Incorreta. Complexidade de adaptação não autoriza eliminar disciplinas ou objetivos curriculares."
        ],
        "dicaBanca": "A FGV gosta de distratores que oferecem “resumo”, “dispensa” ou “atividade alternativa” em vez de remover a barreira do material principal.",
        "pegadinha": "Texto acessível + gráfico inacessível = material ainda parcialmente inacessível.",
        "memorizar2026": "Acessibilidade curricular alcança texto, imagem, tabela, gráfico, mapa e atividade conforme sua função pedagógica.",
        "fonte": "LBI, arts. 27, 28 e 68; MEC — Livro Acessível."
    },
    {
        "id": "SEDUC-EE-LIA-019",
        "numero": 19,
        "subtopico": "Baixa visão — personalização digital",
        "dificuldade": "alta",
        "pergunta": "Um estudante com baixa visão usa um tablet para ler livros digitais. Ele apresenta melhor desempenho quando ajusta fonte, espaçamento, contraste e brilho. A escola deve",
        "alternativas": [
            "bloquear as configurações após encontrar um padrão médio para a turma, garantindo que todos realizem as leituras nas mesmas condições visuais.",
            "permitir ajustes somente durante o AEE, mantendo os materiais sem personalização na classe comum para preservar a padronização da atividade.",
            "substituir o tablet por livro impresso ampliado, pois recursos digitais não são indicados quando existe possibilidade de material físico equivalente.",
            "reconhecer a personalização como recurso de acessibilidade e permitir ajustes conforme tarefa, ambiente e conforto visual do estudante.",
            "fixar a maior ampliação disponível no dispositivo, pois aumentar o tamanho sempre melhora a leitura e reduz a necessidade de outras adaptações."
        ],
        "correta": 3,
        "feedbackAcerto": "Você tratou a personalização como acessibilidade funcional. O melhor ajuste pode variar conforme texto, distância, iluminação, contraste e tarefa.",
        "feedbackErro": "Padronizar a configuração pode criar barreiras. A acessibilidade digital deve permitir que o usuário ajuste a apresentação de acordo com suas necessidades.",
        "analiseAlternativas": [
            "Incorreta. Igualdade formal de configuração não garante igualdade de acesso.",
            "Incorreta. O recurso precisa acompanhar o estudante na classe comum quando remove barreiras ali.",
            "Incorreta. Digital e impresso podem coexistir; a escolha depende de funcionalidade e contexto.",
            "Correta. Personalização é parte da acessibilidade para baixa visão.",
            "Incorreta. Ampliação excessiva pode dificultar navegação e leitura; o ajuste precisa ser funcional."
        ],
        "dicaBanca": "Distrator FGV comum: “quanto mais recurso, melhor”. Em acessibilidade, o parâmetro é funcionalidade, não intensidade máxima.",
        "pegadinha": "Maior ampliação não é automaticamente melhor leitura.",
        "memorizar2026": "Personalizar fonte, contraste, brilho e espaçamento pode ser condição de acesso para baixa visão.",
        "fonte": "LBI, art. 68, §2º; FGV — softwares ampliadores de tela."
    },
    {
        "id": "SEDUC-EE-LIA-020",
        "numero": 20,
        "subtopico": "Acessibilidade em avaliação digital",
        "dificuldade": "alta",
        "pergunta": "Uma prova online possui questões em texto acessível, mas o cronômetro, os botões “avançar” e “enviar” não são anunciados pelo leitor de tela. A situação indica que",
        "alternativas": [
            "a prova é acessível, pois o conteúdo acadêmico das questões pode ser lido e os demais elementos têm função apenas operacional.",
            "a barreira pode ser compensada pelo professor, que deve avisar verbalmente o tempo e clicar nos botões quando solicitado pelo estudante durante as atividades escolares regulares, conforme o planejamento da equipe.",
            "o problema se restringe ao software do leitor de tela, já que controles visuais não precisam ser programados para acessibilidade.",
            "a avaliação deve ser convertida integralmente para prova oral, mesmo que a interface possa ser corrigida antes da aplicação.",
            "a avaliação permanece inacessível, pois acesso ao texto não basta quando controles e informações essenciais não podem ser percebidos e operados autonomamente."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu que acessibilidade da avaliação inclui todo o fluxo de interação: informações, navegação, controles e envio da resposta.",
        "feedbackErro": "Uma prova pode ter texto acessível e ainda falhar em componentes operacionais essenciais. A solução deve remover a barreira da interface sempre que possível.",
        "analiseAlternativas": [
            "Incorreta. Controles e tempo fazem parte da experiência de realização da prova.",
            "Incorreta. Mediação humana não deve substituir uma correção técnica viável que devolva autonomia ao estudante.",
            "Incorreta. Elementos interativos precisam ser construídos para funcionar com tecnologias assistivas.",
            "Incorreta. Prova oral pode ser uma adaptação em alguns casos, mas não é necessária se a interface digital puder ser acessibilizada.",
            "Correta. Percepção e operação dos controles são parte da acessibilidade da avaliação digital."
        ],
        "dicaBanca": "FGV pode esconder a barreira fora do “conteúdo”. Cronômetro, formulário e botão também podem decidir se a prova é acessível.",
        "pegadinha": "Acessibilidade não termina no enunciado da questão.",
        "memorizar2026": "Avaliação digital acessível = conteúdo + navegação + controles + tempo/informações acessíveis.",
        "fonte": "LBI — educação e acessibilidade digital; princípios de Tecnologia Assistiva."
    },
    {
        "id": "SEDUC-EE-LIA-021",
        "numero": 21,
        "subtopico": "Formatos acessíveis — análise de afirmativas",
        "dificuldade": "alta",
        "pergunta": "Considerando livros e materiais digitais acessíveis, está correto o que se afirma em",
        "alternativas": [
            "I e II, apenas.",
            "I e III, apenas durante as atividades escolares regulares, conforme o planejamento da equipe.",
            "II e III, apenas.",
            "II, apenas.",
            "I, II e III."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou que II e III estão corretas: acessibilidade depende da compatibilidade/estrutura do arquivo e formatos diferentes podem atender necessidades diferentes.",
        "feedbackErro": "A afirmativa I é falsa porque transformar um documento em PDF não garante, por si só, acessibilidade. II e III refletem a lógica de acessibilidade funcional.",
        "analiseAlternativas": [
            "Incorreta. I é falsa, embora II seja verdadeira.",
            "Incorreta. I é falsa; III, isoladamente, não corrige a combinação.",
            "Correta. II e III expressam requisitos e princípios adequados.",
            "Incorreta. III também está correta.",
            "Incorreta. A presença da afirmativa I invalida o conjunto."
        ],
        "dicaBanca": "FGV usa muito I/II/III para testar generalizações. Julgue “PDF = acessível” como afirmação independente.",
        "pegadinha": "Formato de arquivo não garante acessibilidade sozinho.",
        "memorizar2026": "Arquivo acessível depende de estrutura, compatibilidade e possibilidade real de uso pelo estudante.",
        "fonte": "LBI, art. 68; MEC — Livro Acessível.",
        "afirmacoes": [
            "I. Todo arquivo em formato PDF é acessível, desde que mantenha visualmente o conteúdo da versão impressa.",
            "II. Um livro digital pode ser acessível quando sua estrutura é interpretável por tecnologia assistiva e permite navegação funcional.",
            "III. Braille, áudio, fonte ampliada e livro digital acessível podem coexistir, porque diferentes estudantes e tarefas exigem diferentes formas de acesso."
        ]
    },
    {
        "id": "SEDUC-EE-LIA-022",
        "numero": 22,
        "subtopico": "Informática acessível — V/F",
        "dificuldade": "alta",
        "pergunta": "Analise as afirmativas sobre informática acessível e assinale a sequência correta.",
        "alternativas": [
            "V – F – V.",
            "F – V – V.",
            "V – V – F.",
            "F – F – V.",
            "V – V – V."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou a sequência V–V–F: leitores de tela e ampliadores foram descritos corretamente; a terceira afirmação erra ao atribuir recursos de acesso motor exclusivamente à deficiência visual.",
        "feedbackErro": "I e II são verdadeiras. III é falsa porque teclados adaptados, colmeias e acionadores respondem principalmente a barreiras de acesso motor e não são exclusivos de deficiência visual.",
        "analiseAlternativas": [
            "Incorreta. A segunda afirmativa também é verdadeira e a terceira é falsa.",
            "Incorreta. A primeira afirmativa é verdadeira.",
            "Incorreta. A terceira afirmativa é falsa.",
            "Correta. A sequência é V – V – F.",
            "Incorreta. A terceira afirmativa impede considerar as três verdadeiras."
        ],
        "dicaBanca": "A FGV já cobrou leitores e ampliadores de tela em formato de afirmativas. Separe cada tecnologia pela função.",
        "pegadinha": "Não trate “acessibilidade ao computador” como uma única ferramenta.",
        "memorizar2026": "Leitor de tela e ampliador → acesso visual; teclado adaptado/acionador → acesso motor.",
        "fonte": "FGV — Educação Especial: Deficiência Visual; FGV — Ensino Especial.",
        "afirmacoes": [
            "I. Leitores de tela podem utilizar voz sintetizada para apresentar informações da interface.",
            "II. Ampliadores de tela podem oferecer zoom e combinações de contraste úteis a pessoas com baixa visão.",
            "III. Teclados adaptados, colmeias e acionadores são recursos destinados exclusivamente a estudantes com deficiência visual."
        ]
    },
    {
        "id": "SEDUC-EE-LIA-023",
        "numero": 23,
        "subtopico": "Biblioteca escolar acessível",
        "dificuldade": "alta",
        "pergunta": "Uma biblioteca escolar possui rampa, estantes acessíveis e computador com leitor de tela, mas seu catálogo online só pode ser consultado com mouse e as obras digitais são PDFs de imagem. A avaliação mais adequada é",
        "alternativas": [
            "a biblioteca já é acessível porque as principais barreiras arquitetônicas foram eliminadas e existe pelo menos um equipamento assistivo disponível.",
            "a acessibilidade é parcial: circulação física adequada não compensa catálogo e livros digitais que continuam inacessíveis à tecnologia assistiva.",
            "a biblioteca deve priorizar acessibilidade física, pois acessibilidade digital pode ser garantida individualmente pelo professor do AEE quando houver demanda.",
            "a presença do computador com leitor de tela torna os PDFs acessíveis, ainda que os arquivos não possuam texto reconhecível ou estrutura de navegação.",
            "o catálogo pode permanecer dependente de mouse se houver funcionário disponível para realizar pesquisas em nome dos estudantes que não conseguem utilizá-lo."
        ],
        "correta": 1,
        "feedbackAcerto": "Você avaliou a acessibilidade de forma integrada: espaço, catálogo, materiais e tecnologia precisam funcionar juntos para garantir uso autônomo.",
        "feedbackErro": "Acessibilidade física não substitui acessibilidade informacional e digital. Tecnologia assistiva também depende de conteúdo e interfaces compatíveis.",
        "analiseAlternativas": [
            "Incorreta. Acessibilidade arquitetônica e equipamento isolado não resolvem as barreiras do catálogo e dos arquivos.",
            "Correta. O ambiente é parcialmente acessível, mas ainda mantém barreiras digitais relevantes.",
            "Incorreta. Acessibilidade digital não é responsabilidade exclusiva do AEE nem deve ser adiada até surgir demanda individual.",
            "Incorreta. Leitor de tela não transforma automaticamente PDF de imagem em documento estruturado.",
            "Incorreta. Apoio de funcionário não substitui autonomia quando a barreira tecnológica pode ser removida."
        ],
        "dicaBanca": "A FGV costuma usar situações com “vários itens corretos” para perguntar se a inclusão está completa. Procure a barreira residual.",
        "pegadinha": "Acessibilidade é cadeia: uma etapa inacessível pode bloquear o uso de todo o serviço.",
        "memorizar2026": "Biblioteca acessível = espaço + catálogo + acervo + equipamentos + comunicação acessíveis.",
        "fonte": "LBI, arts. 42, 68 e 69; FGV/Macaé — desenho universal."
    },
    {
        "id": "SEDUC-EE-LIA-024",
        "numero": 24,
        "subtopico": "PNLD e Braille 2026",
        "dificuldade": "media",
        "pergunta": "Em 2026, o MEC e o FNDE concluíram a distribuição de livros didáticos em formato Braille-tinta para estudantes com deficiência visual da rede pública. Pedagogicamente, essa ação reforça que",
        "alternativas": [
            "formatos acessíveis devem integrar a política pública de materiais didáticos, permitindo acesso ao mesmo currículo sem depender de produção improvisada pela escola.",
            "o Braille-tinta passa a ser o formato obrigatório para todos os estudantes com deficiência visual, inclusive aqueles que utilizam apenas fonte ampliada.",
            "a entrega de livro acessível elimina a necessidade de AEE e de outros recursos, pois o acesso ao material impresso resolve as principais barreiras da escolarização.",
            "a escola pode deixar de produzir descrições de imagens e gráficos, já que o formato Braille substitui os elementos visuais presentes no livro didático.",
            "a distribuição nacional permite que atividades digitais permaneçam inacessíveis, pois a política de livro didático satisfaz integralmente o direito à informação."
        ],
        "correta": 0,
        "feedbackAcerto": "Você interpretou corretamente a política: materiais acessíveis devem estar incorporados ao sistema de distribuição, sem transformar a escola em responsável por improvisar todo o acesso.",
        "feedbackErro": "A entrega de Braille-tinta é importante, mas não cria formato único nem elimina outras dimensões de acessibilidade, AEE e recursos complementares.",
        "analiseAlternativas": [
            "Correta. A ação concretiza oferta planejada de material acessível no programa público de livros.",
            "Incorreta. O formato depende da necessidade funcional do estudante; baixa visão pode demandar outros recursos.",
            "Incorreta. Livro acessível não elimina outras barreiras nem o papel do AEE quando necessário.",
            "Incorreta. Imagens e gráficos relevantes continuam exigindo tratamento acessível apropriado.",
            "Incorreta. Acessibilidade deve alcançar também atividades e ambientes digitais."
        ],
        "dicaBanca": "Atualização 2026 pode aparecer como contexto de prova, mas a banca tende a cobrar o princípio por trás da política: acesso planejado ao material.",
        "pegadinha": "Um avanço em um formato não encerra todas as necessidades de acessibilidade.",
        "memorizar2026": "Política de livro acessível = garantir o material no formato adequado dentro do sistema educacional.",
        "fonte": "MEC/FNDE, julho de 2026 — distribuição de livros Braille-tinta.",
        "atualizacao2026": "Em julho de 2026, MEC e FNDE informaram a conclusão da postagem dos livros didáticos Braille-tinta previstos para o ano letivo."
    },
    {
        "id": "SEDUC-EE-LIA-025",
        "numero": 25,
        "subtopico": "Caso integrado — livro e informática acessíveis",
        "dificuldade": "alta",
        "pergunta": "Uma escola recebe uma estudante cega que utiliza leitor de tela e Braille. O livro digital da turma possui texto acessível, mas gráficos sem descrição; a plataforma funciona por teclado, exceto na tela de envio das tarefas; e o AEE ensina o uso dos recursos apenas em horário separado. A ação mais adequada é",
        "alternativas": [
            "manter o livro e a plataforma como estão e concentrar no AEE a leitura dos gráficos e o envio das tarefas, preservando a organização tecnológica já utilizada pela turma.",
            "priorizar a impressão em Braille de todo o material e dispensar a estudante da plataforma digital, porque o uso simultâneo de formatos tende a aumentar a carga cognitiva.",
            "garantir descrição acessível dos gráficos, corrigir o fluxo de envio por teclado e articular o uso de leitor de tela/Braille às atividades da classe comum.",
            "fornecer uma versão simplificada das tarefas em arquivo de texto, evitando que a estudante precise navegar pelos elementos mais complexos da plataforma.",
            "autorizar um colega a operar a plataforma durante as atividades, mantendo a estudante responsável apenas pela elaboração das respostas em seu próprio recurso."
        ],
        "correta": 2,
        "feedbackAcerto": "Você integrou corretamente as três dimensões: tornar os gráficos acessíveis, corrigir a operação da plataforma e articular Braille/leitor de tela às atividades da classe comum.",
        "feedbackErro": "A resposta inclusiva deve agir sobre cada barreira real: gráficos, operação da plataforma e articulação do recurso na classe comum, sem currículo paralelo ou dependência desnecessária.",
        "analiseAlternativas": [
            "Incorreta. Transferir barreiras para o AEE mantém materiais e plataforma inacessíveis na rotina escolar.",
            "Incorreta. Braille é importante, mas não exige abandono do ambiente digital acessível nem de outros formatos.",
            "Correta. Remove as barreiras de conteúdo e de navegação e integra os recursos assistivos à escolarização comum.",
            "Incorreta. Simplificar tarefas não substitui a remoção das barreiras tecnológicas e informacionais.",
            "Incorreta. Apoio entre pares pode existir, mas não deve substituir autonomia tecnológica que pode ser garantida por acessibilidade."
        ],
        "dicaBanca": "Caso integrado FGV: divida o enunciado em barreiras. Para cada uma, procure uma solução que mantenha currículo comum e autonomia.",
        "pegadinha": "Não resolva barreira digital com dependência humana permanente ou redução curricular.",
        "memorizar2026": "Livro acessível + interface acessível + TA usada na classe comum = acesso efetivo ao currículo.",
        "fonte": "LBI; MEC — Livro Acessível; FGV — Tecnologia Assistiva e AEE."
    }
];

    window.seducEducacaoEspecialLivroInformaticaAcessivel2026 = banco;
})();
