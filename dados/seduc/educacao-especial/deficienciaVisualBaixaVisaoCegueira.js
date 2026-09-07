/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 9: Deficiência Visual — Baixa Visão e Cegueira
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo e matriz FGV revisados em 05/09/2026.
   Referências de estilo: FGV Vitória 2024 — Educação Especial: Deficiência Visual.
========================================================== */

(function(){
    "use strict";
    const banco = [
    {
        "id": "SEDUC-EE-DV-001",
        "numero": 1,
        "subtopico": "Baixa visão — compreensão educacional",
        "dificuldade": "alta",
        "pergunta": "Uma estudante com baixa visão consegue ler parte dos materiais impressos quando há ampliação, contraste e iluminação adequados. A equipe conclui que, por ainda utilizar a visão, ela não necessita de recursos de Educação Especial. À luz da perspectiva inclusiva, essa conclusão é",
        "alternativas": [
            "adequada, porque o uso funcional de qualquer resíduo visual afasta a necessidade de recursos especializados e indica que o ensino comum deve ocorrer sem adaptações específicas. no cotidiano escolar, inclusive nas atividades de avaliação.",
            "inadequada, pois a baixa visão pode demandar recursos ópticos e não ópticos, acessibilidade do material e estratégias que potencializem o uso funcional da visão no currículo comum.",
            "adequada quando a estudante reconhece letras ampliadas, já que o AEE para deficiência visual se destina prioritariamente às pessoas que utilizam o Sistema Braille.",
            "inadequada apenas se houver recomendação clínica expressa de lupa ou telescópio, pois a escola não pode definir recursos de acesso com base em observação pedagógica.",
            "adequada se a escola oferecer mais tempo de prova, medida que substitui outras adaptações de material e garante, por si só, a acessibilidade curricular necessária."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou que baixa visão não significa ausência de necessidade educacional específica. O uso funcional da visão pode ser potencializado por recursos ópticos, não ópticos, tecnologia e organização do ambiente.",
        "feedbackErro": "A existência de visão residual não elimina barreiras. A resposta educacional deve considerar como o estudante utiliza a visão, quais tarefas realiza e quais recursos ampliam acesso, participação e aprendizagem.",
        "analiseAlternativas": [
            "Incorreta. Visão residual não exclui a necessidade de acessibilidade nem de AEE quando indicado.",
            "Correta. A baixa visão pode requerer ampliação, contraste, iluminação, recursos ópticos e outras estratégias de acesso ao currículo.",
            "Incorreta. O AEE não se restringe ao ensino de Braille nem somente às pessoas cegas.",
            "Incorreta. Recursos pedagógicos e de acessibilidade não dependem de prescrição clínica como condição absoluta.",
            "Incorreta. Tempo adicional pode ser útil em alguns casos, mas não substitui recursos de acesso ao conteúdo."
        ],
        "dicaBanca": "FGV costuma testar se o candidato reduz baixa visão a uma medida clínica. Procure a alternativa que considera funcionamento visual e barreiras concretas.",
        "pegadinha": "“Enxerga alguma coisa” não significa “não precisa de acessibilidade”.",
        "memorizar2026": "Baixa visão: usar a visão funcional com recursos adequados, sem presumir independência apenas pela existência de resíduo visual.",
        "fonte": "Inep — atividades do AEE; MEC/SEESP — deficiência visual; LBI, art. 28."
    },
    {
        "id": "SEDUC-EE-DV-002",
        "numero": 2,
        "subtopico": "Cegueira — acesso à informação",
        "dificuldade": "media",
        "pergunta": "Ao receber um estudante cego, uma escola decide disponibilizar todos os conteúdos exclusivamente em áudio, entendendo que isso torna desnecessário o ensino e o uso do Sistema Braille. A decisão é",
        "alternativas": [
            "adequada, porque a tecnologia de áudio substitui a leitura e a escrita táteis sempre que o estudante dispõe de leitor de tela e fones de ouvido em todas as disciplinas. inclusive em tarefas que envolvem ortografia, notação matemática e revisão autônoma do próprio texto.",
            "adequada quando o estudante apresenta bom desempenho oral, pois a alfabetização em Braille pode ser dispensada sem análise das demandas de leitura e escrita autônomas.",
            "inadequada somente nas disciplinas de Língua Portuguesa e Matemática, nas quais a escrita convencional precisa necessariamente ser reproduzida em relevo.",
            "inadequada, pois recursos sonoros podem compor a acessibilidade, mas não justificam retirar do estudante, quando pertinente, o acesso ao Braille e a outras formas autônomas de leitura e escrita.",
            "adequada se a família concordar, porque a escolha de um único formato de acesso pode substituir a avaliação pedagógica das diferentes atividades curriculares."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu que acessibilidade não se reduz a um único formato. Áudio, leitor de tela, Braille e outros recursos podem coexistir conforme a tarefa, o estudante e o objetivo pedagógico.",
        "feedbackErro": "A tecnologia sonora amplia o acesso, mas não autoriza eliminar automaticamente o Braille ou outras formas de leitura e escrita. A escolha dos recursos deve responder às necessidades e atividades reais.",
        "analiseAlternativas": [
            "Incorreta. Áudio e leitor de tela não substituem universalmente todas as funções de leitura e escrita.",
            "Incorreta. Bom desempenho oral não é critério para dispensar acesso a sistemas de leitura e escrita.",
            "Incorreta. O acesso ao Braille não se limita a duas disciplinas.",
            "Correta. A combinação de recursos deve preservar autonomia e acesso ao currículo, sem impor um formato único.",
            "Incorreta. A participação da família é importante, mas não elimina a análise pedagógica da acessibilidade."
        ],
        "dicaBanca": "Desconfie de alternativas que transformam uma tecnologia útil em substituição universal de todas as demais.",
        "pegadinha": "Leitor de tela e Braille podem ser complementares, não concorrentes.",
        "memorizar2026": "Cegueira: acessibilidade multimodal; Braille continua sendo recurso fundamental de leitura e escrita quando pertinente.",
        "fonte": "LBI, art. 28, XII; Inep — ensino do Sistema Braille; IBC — Sistema Braille."
    },
    {
        "id": "SEDUC-EE-DV-003",
        "numero": 3,
        "subtopico": "Avaliação funcional da visão",
        "dificuldade": "alta",
        "pergunta": "Para planejar o atendimento de um estudante com deficiência visual, a equipe dispõe do valor de acuidade visual informado em relatório oftalmológico. A conduta pedagogicamente mais adequada é",
        "alternativas": [
            "considerar também o funcionamento visual nas tarefas, o ambiente, as barreiras, as estratégias já utilizadas, as potencialidades e os recursos que favorecem o acesso ao currículo.",
            "classificar previamente o estudante como usuário de Braille ou de tinta com base apenas no número da acuidade, evitando que observações escolares interfiram em uma decisão clínica.",
            "usar o relatório apenas para definir o tempo adicional de avaliação, mantendo os mesmos materiais e a mesma organização do espaço para preservar a igualdade entre os estudantes.",
            "aguardar uma nova avaliação médica que detalhe cada adaptação pedagógica, pois a escola não deve testar contraste, ampliação, posição na sala ou recursos tecnológicos por iniciativa própria.",
            "restringir o estudo de caso às limitações visuais descritas no documento, uma vez que potencialidades acadêmicas e barreiras do ambiente pertencem ao planejamento da classe comum."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou uma leitura funcional e contextual. Dados clínicos podem subsidiar, mas o planejamento pedagógico precisa observar o desempenho do estudante nas situações reais e as barreiras existentes.",
        "feedbackErro": "Acuidade visual, isoladamente, não determina toda a resposta educacional. A escola precisa analisar funcionamento visual, atividades, contexto, barreiras, potencialidades e recursos.",
        "analiseAlternativas": [
            "Correta. O planejamento articula informação clínica disponível com observação pedagógica e estudo de caso contextual.",
            "Incorreta. A decisão educacional não deve ser automática nem baseada apenas em um número clínico.",
            "Incorreta. Igualdade formal pode manter barreiras; materiais e ambiente podem necessitar adaptação.",
            "Incorreta. A escola tem responsabilidade pedagógica sobre recursos e acessibilidade e não precisa aguardar prescrição para toda medida.",
            "Incorreta. Estudo de caso é contextual e inclui barreiras e potencialidades."
        ],
        "dicaBanca": "Quando a FGV trouxer dado clínico, veja se a alternativa transforma o diagnóstico em “receita pedagógica”. Isso costuma ser o erro.",
        "pegadinha": "Acuidade ajuda a compreender a condição, mas não substitui avaliação funcional e pedagógica.",
        "memorizar2026": "Planejamento = estudante real + tarefa + ambiente + barreiras + recursos, e não apenas medida clínica.",
        "fonte": "MEC/SEESP — deficiência visual; Decreto nº 12.686/2025, art. 11; Inep 2026."
    },
    {
        "id": "SEDUC-EE-DV-004",
        "numero": 4,
        "subtopico": "Baixa visão — equidade e material ampliado",
        "dificuldade": "media",
        "pergunta": "Uma professora afirma que entregar a mesma folha, com fonte pequena e baixo contraste, a todos os estudantes é a forma mais justa de avaliação, inclusive para um aluno com baixa visão. Na perspectiva inclusiva, a afirmação é",
        "alternativas": [
            "adequada quando a prova contém poucas questões, pois a redução da quantidade de leitura compensa o formato visual sem necessidade de alterações no material.",
            "adequada se o estudante puder aproximar o rosto da folha, estratégia suficiente para eliminar a barreira de tamanho de fonte e contraste durante a avaliação.",
            "inadequada apenas se o estudante já utilizar lupa prescrita, pois sem recurso óptico formal a escola deve manter o mesmo formato de impressão para toda a turma.",
            "adequada porque alterar fonte, contraste ou espaçamento modifica o conteúdo da avaliação e poderia produzir vantagem acadêmica em relação aos demais estudantes. e, por essa razão, deveria ser vedado em avaliações formais da rede.",
            "inadequada, pois equidade pode exigir formato acessível, como ampliação, contraste, iluminação ou recurso tecnológico, preservando o objetivo acadêmico da avaliação."
        ],
        "correta": 4,
        "feedbackAcerto": "Você distinguiu igualdade formal de equidade. Alterar o formato de acesso não significa alterar o que se pretende avaliar.",
        "feedbackErro": "O mesmo material para todos pode manter uma barreira visual. A adaptação deve preservar o objetivo da avaliação e tornar o conteúdo perceptível e utilizável pelo estudante.",
        "analiseAlternativas": [
            "Incorreta. Menos itens não resolve necessariamente uma barreira de legibilidade.",
            "Incorreta. Aproximação excessiva não deve ser tratada como solução universal de acessibilidade.",
            "Incorreta. Acessibilidade pedagógica não depende de prescrição óptica formal.",
            "Incorreta. Formato acessível não altera necessariamente o conteúdo ou o objetivo avaliado.",
            "Correta. A equidade permite ajustar o meio de apresentação para garantir acesso ao mesmo objetivo."
        ],
        "dicaBanca": "A FGV gosta de usar “mesmo para todos” como falsa igualdade. Identifique se o formato impede o estudante de demonstrar o que sabe.",
        "pegadinha": "Ampliar a fonte não é facilitar o conteúdo.",
        "memorizar2026": "Avaliação acessível: mesmo objetivo, meio de acesso adequado.",
        "fonte": "LBI, art. 28, II, III e XVI; Inep — recursos ópticos e não ópticos."
    },
    {
        "id": "SEDUC-EE-DV-005",
        "numero": 5,
        "subtopico": "Observação escolar e encaminhamento",
        "dificuldade": "alta",
        "pergunta": "Um aluno passa a aproximar excessivamente o material, demonstra dificuldade para copiar do quadro e refere visão embaçada. A atitude inicial mais adequada da escola é",
        "alternativas": [
            "definir baixa visão no registro escolar e iniciar o AEE imediatamente, pois os sinais observados bastam para estabelecer a condição visual e a elegibilidade educacional.",
            "retirar temporariamente as atividades de leitura até que haja diagnóstico, evitando esforço visual que possa agravar uma possível condição ocular ainda não identificada.",
            "registrar as observações, conversar com a família, favorecer condições de acesso provisórias e orientar avaliação adequada, sem transformar sinais escolares em diagnóstico clínico.",
            "manter as atividades sem qualquer ajuste, pois a escola só pode alterar posição na sala, contraste ou tamanho de letra depois que houver laudo oftalmológico conclusivo.",
            "encaminhar diretamente para escolarização especializada, porque dificuldade persistente de acesso visual ao quadro indica que a classe comum pode não ser o ambiente adequado. em todos os componentes curriculares e durante todo o período de investigação."
        ],
        "correta": 2,
        "feedbackAcerto": "Você separou observação pedagógica de diagnóstico. A escola pode registrar sinais, dialogar com a família, favorecer acesso e orientar avaliação, sem rotular clinicamente o estudante.",
        "feedbackErro": "Sinais visuais merecem atenção, mas não autorizam diagnóstico escolar nem segregação. Ao mesmo tempo, a escola não precisa manter barreiras enquanto aguarda avaliação.",
        "analiseAlternativas": [
            "Incorreta. Observações escolares não bastam para diagnosticar uma condição visual.",
            "Incorreta. Suspender leitura de forma generalizada não é resposta pedagógica adequada.",
            "Correta. Combina cuidado, comunicação, acessibilidade e encaminhamento sem confundir papéis.",
            "Incorreta. Ajustes simples de acesso podem ser realizados pedagogicamente enquanto a situação é investigada.",
            "Incorreta. Dificuldade visual não justifica transferência automática da classe comum."
        ],
        "dicaBanca": "Em casos escolares, procure a alternativa que evita dois extremos: diagnosticar na escola ou ignorar sinais até chegar um laudo.",
        "pegadinha": "Observar ≠ diagnosticar; adaptar provisoriamente ≠ medicalizar.",
        "memorizar2026": "Escola observa, registra, dialoga, acessibiliza e encaminha; profissionais de saúde diagnosticam.",
        "fonte": "FGV Vitória 2024 — sinais de alterações visuais; LBI; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-DV-006",
        "numero": 6,
        "subtopico": "AEE — finalidade para deficiência visual",
        "dificuldade": "alta",
        "pergunta": "No AEE de um estudante com deficiência visual, a professora organiza atividades de uso de recursos de acessibilidade e articula sua funcionalidade com as tarefas da classe comum. Essa atuação está",
        "alternativas": [
            "inadequada, porque o AEE deve concentrar-se na recuperação dos conteúdos curriculares não aprendidos e deixar os recursos de acessibilidade sob responsabilidade exclusiva da família.",
            "adequada, pois o AEE pode ensinar e organizar recursos como Braille, tecnologia assistiva, orientação e mobilidade e recursos ópticos ou não ópticos, articulando-os à escolarização.",
            "inadequada quando o professor da classe comum participa do planejamento, uma vez que a definição de recursos especializados deve permanecer restrita ao profissional do AEE.",
            "adequada somente se o estudante for cego, porque estudantes com baixa visão utilizam prioritariamente o ensino comum e não integram atividades especializadas de acessibilidade.",
            "inadequada se o recurso também for utilizado fora da sala de recursos, pois os equipamentos do AEE devem permanecer no espaço especializado para controle e conservação."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu a função do AEE: organizar recursos pedagógicos e de acessibilidade e ensinar seu uso, em articulação com a classe comum e visando autonomia.",
        "feedbackErro": "AEE não é reforço, não é isolado e não se limita a um tipo de deficiência visual. Recursos devem produzir acesso e participação nas atividades reais do estudante.",
        "analiseAlternativas": [
            "Incorreta. AEE não se reduz a reforço escolar nem transfere acessibilidade à família.",
            "Correta. Essas atividades constam entre as ações de AEE e devem se articular ao currículo.",
            "Incorreta. A colaboração com o professor da classe comum é parte da efetividade dos recursos.",
            "Incorreta. Estudantes com baixa visão também podem necessitar de AEE e recursos especializados.",
            "Incorreta. O objetivo é funcionalidade no contexto escolar e social, não confinamento do recurso à SRM."
        ],
        "dicaBanca": "FGV Vitória/2024 cobrou tecnologia assistiva e atribuições do AEE. Cuidado com alternativas que isolam professor, recurso ou estudante.",
        "pegadinha": "Recurso do AEE deve funcionar onde a aprendizagem acontece.",
        "memorizar2026": "AEE = ensinar/organizar acessibilidade + articular com classe comum + promover autonomia.",
        "fonte": "Inep — atividades do AEE; Decreto nº 12.686/2025; Portaria MEC nº 421/2026."
    },
    {
        "id": "SEDUC-EE-DV-007",
        "numero": 7,
        "subtopico": "Estudo de caso e laudo",
        "dificuldade": "alta",
        "pergunta": "A coordenação escolar condiciona o início do estudo de caso e do AEE de uma aluna com deficiência visual à entrega de laudo médico atualizado. Considerando a regulamentação vigente, a decisão é",
        "alternativas": [
            "correta, pois o laudo atualizado é requisito obrigatório para que o professor do AEE possa registrar impedimentos funcionais e definir os recursos pedagógicos de acessibilidade. e em cada etapa de definição dos apoios especializados necessários.",
            "correta apenas quando houver solicitação de tecnologia assistiva de uso individual, já que a aquisição de recursos depende necessariamente de prescrição clínica detalhada.",
            "incorreta somente se a aluna já estiver cadastrada no Censo Escolar como pessoa com deficiência, hipótese em que o laudo anterior continua válido para fins pedagógicos.",
            "correta nas deficiências sensoriais, pois a observação pedagógica não é suficiente para iniciar estudo de barreiras e potencialidades relacionadas à visão ou à audição.",
            "incorreta, porque o estudo de caso é pedagógico e o acesso ao AEE não pode ser condicionado a diagnóstico ou laudo de saúde, embora documentos existentes possam subsidiar a análise."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou a atualização normativa: laudo pode subsidiar, mas não é condição para iniciar estudo de caso nem para garantir AEE.",
        "feedbackErro": "A regulamentação atual proíbe condicionar o AEE ao diagnóstico de saúde. O estudo de caso analisa impedimentos funcionais, barreiras, potencialidades e apoios no contexto educacional.",
        "analiseAlternativas": [
            "Incorreta. O laudo não é requisito obrigatório para o estudo pedagógico.",
            "Incorreta. Necessidade de recurso pode ser analisada pedagogicamente; prescrição clínica não é condição universal.",
            "Incorreta. A vedação não depende do cadastro censitário.",
            "Incorreta. Deficiência sensorial não cria exceção à natureza pedagógica do estudo de caso.",
            "Correta. AEE e estudo de caso não dependem de laudo, embora informações de saúde possam subsidiar quando disponíveis."
        ],
        "dicaBanca": "“Condicionado a laudo” é uma pegadinha normativa forte para 2026.",
        "pegadinha": "Documento de saúde pode ajudar; não pode virar porta de entrada obrigatória para direito educacional.",
        "memorizar2026": "AEE não exige laudo. Estudo de caso é pedagógico e colaborativo.",
        "fonte": "Decreto nº 12.686/2025, art. 11; Portaria MEC nº 421/2026, art. 7º; Inep 2026."
    },
    {
        "id": "SEDUC-EE-DV-008",
        "numero": 8,
        "subtopico": "Trabalho colaborativo",
        "dificuldade": "media",
        "pergunta": "Uma professora do AEE seleciona uma lupa eletrônica para um estudante com baixa visão e entende que sua responsabilidade termina ao ensinar o manuseio do equipamento na sala de recursos. A prática deve ser revista porque",
        "alternativas": [
            "o equipamento só pode ser utilizado durante o AEE até que o estudante demonstre domínio técnico suficiente para pedir autorização à direção para levá-lo à sala comum.",
            "a funcionalidade do recurso deve ser acompanhada apenas pela família, já que o professor comum não possui atribuição relacionada a equipamentos de tecnologia assistiva.",
            "a seleção de qualquer tecnologia visual é atribuição exclusiva de profissional de saúde, cabendo ao AEE somente cumprir as orientações recebidas e registrar frequência.",
            "o AEE deve articular o uso do recurso às tarefas reais, colaborar com o professor da classe comum e acompanhar se a tecnologia efetivamente amplia acesso, participação e autonomia.",
            "a lupa eletrônica deve ser substituída por material em Braille, pois recursos de ampliação tendem a criar dependência e não favorecem o desenvolvimento de autonomia escolar. como estratégia de prevenção de dependência tecnológica ao longo da escolarização."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou que tecnologia assistiva precisa ser funcional no contexto real. Ensinar a ferramenta é parte do processo; acompanhar seu uso na classe comum e ajustar estratégias também é essencial.",
        "feedbackErro": "O recurso não existe para ficar restrito ao AEE. Sua efetividade depende de articulação, acompanhamento e uso nas atividades em que a barreira aparece.",
        "analiseAlternativas": [
            "Incorreta. O recurso deve ser utilizado onde for necessário, não guardado até “domínio total”.",
            "Incorreta. Professor comum e AEE precisam colaborar na funcionalidade do recurso.",
            "Incorreta. A decisão pedagógica não é mera execução de prescrição clínica.",
            "Correta. Acompanhamento e colaboração verificam se a tecnologia remove de fato a barreira.",
            "Incorreta. Ampliação pode ser apropriada para baixa visão e não é sinônimo de dependência."
        ],
        "dicaBanca": "FGV já explorou a ideia de acompanhar a funcionalidade dos recursos, e não tratá-los como tarefa isolada do AEE.",
        "pegadinha": "Saber ligar o equipamento não significa que a barreira foi eliminada.",
        "memorizar2026": "TA eficaz = seleção + ensino de uso + aplicação na tarefa + acompanhamento + ajuste.",
        "fonte": "FGV Vitória 2024, questão sobre AEE e TA; Res. CNE/CEB nº 4/2009; Inep 2026."
    },
    {
        "id": "SEDUC-EE-DV-009",
        "numero": 9,
        "subtopico": "Sistema Braille — fundamentos",
        "dificuldade": "media",
        "pergunta": "Sobre o Sistema Braille, assinale a afirmativa correta.",
        "alternativas": [
            "É um sistema de leitura e escrita tátil baseado, em sua estrutura tradicional, na combinação de seis pontos em relevo organizados em duas colunas de três pontos.",
            "É um recurso exclusivamente alfabético, utilizado apenas em Língua Portuguesa e sem aplicação em matemática, música, ciências ou contextos de informática.",
            "É uma forma de impressão em relevo destinada apenas à leitura, enquanto a escrita por pessoas cegas deve ocorrer prioritariamente por ditado ou teclado convencional.",
            "É um método de comunicação criado para substituir a alfabetização convencional de toda pessoa com baixa visão, independentemente de seu funcionamento visual e preferências.",
            "É uma tecnologia óptica de ampliação de caracteres que converte automaticamente textos impressos em símbolos táteis, dispensando aprendizagem específica do código."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu a estrutura básica do Braille. As combinações de seis pontos permitem representar linguagem, matemática, música e outras áreas.",
        "feedbackErro": "Braille não é ampliação, nem é apenas leitura, nem é exclusivo da Língua Portuguesa. É um sistema tátil de leitura e escrita com múltiplas aplicações.",
        "analiseAlternativas": [
            "Correta. A cela tradicional organiza seis pontos em duas colunas de três.",
            "Incorreta. O Braille possui aplicações em diferentes áreas do conhecimento.",
            "Incorreta. O sistema permite leitura e escrita.",
            "Incorreta. Baixa visão não implica adoção automática do Braille.",
            "Incorreta. Braille não é recurso óptico de ampliação."
        ],
        "dicaBanca": "A FGV de Vitória/2024 cobrou vários conhecimentos técnicos de Braille. Este fundamento é básico para questões mais específicas.",
        "pegadinha": "Braille é sistema de leitura e escrita tátil, não “fonte ampliada em relevo”.",
        "memorizar2026": "Cela Braille tradicional: 6 pontos, 2 colunas × 3 linhas.",
        "fonte": "Instituto Benjamin Constant — Estrutura do Braille (2025); LBI, art. 28, XII."
    },
    {
        "id": "SEDUC-EE-DV-010",
        "numero": 10,
        "subtopico": "Recursos ópticos e não ópticos",
        "dificuldade": "alta",
        "pergunta": "O professor do AEE precisa diferenciar recursos ópticos e não ópticos utilizados por estudantes com baixa visão. Assinale a opção que apresenta, nessa ordem, um exemplo de recurso óptico e um de recurso não óptico.",
        "alternativas": [
            "contraste elevado no material e lupa manual de apoio, pois o primeiro modifica a imagem e o segundo reorganiza a iluminação disponível para a tarefa de leitura.",
            "caderno com pauta ampliada e telescópio, porque ambos alteram fisicamente a distância entre o olho e o estímulo e por isso pertencem ao mesmo grupo funcional.",
            "lupa manual e ampliação de caracteres, já que a primeira utiliza lente e a segunda modifica o material sem empregar sistema óptico de magnificação.",
            "iluminação direcionada e lente bifocal específica, pois recursos ambientais são classificados como ópticos quando melhoram a percepção do contraste na atividade.",
            "telescópio e lupa eletrônica, porque todo equipamento que amplia imagem é classificado pelo AEE como recurso óptico, ainda que funcione por processamento eletrônico."
        ],
        "correta": 2,
        "feedbackAcerto": "Você distinguiu corretamente os grupos: lupas e lentes são exemplos ópticos; ampliação de caracteres, contraste, iluminação e pauta ampliada são exemplos não ópticos.",
        "feedbackErro": "A classificação não depende apenas de “ajudar a ver”. Recursos ópticos envolvem sistemas de lentes; recursos não ópticos modificam material, ambiente ou apresentação da informação.",
        "analiseAlternativas": [
            "Incorreta. A ordem está invertida: contraste é não óptico e lupa é óptica.",
            "Incorreta. Pauta ampliada é não óptica e telescópio é óptico.",
            "Correta. Lupa é óptica; ampliação de caracteres é recurso não óptico.",
            "Incorreta. Iluminação é não óptica; lente bifocal é óptica.",
            "Incorreta. Lupa eletrônica é tecnologia de ampliação, mas não é classificada simplesmente como lente óptica tradicional."
        ],
        "dicaBanca": "FGV gosta de pares conceituais. Classifique cada item separadamente antes de olhar a combinação.",
        "pegadinha": "“Ajuda a enxergar” não significa automaticamente “recurso óptico”.",
        "memorizar2026": "Ópticos: lentes/lupas/telescópios. Não ópticos: contraste, iluminação, fonte ampliada, pauta ampliada, plano inclinado.",
        "fonte": "Inep — atividades do AEE: ensino do uso de recursos ópticos e não ópticos."
    },
    {
        "id": "SEDUC-EE-DV-011",
        "numero": 11,
        "subtopico": "Audiodescrição",
        "dificuldade": "alta",
        "pergunta": "Durante uma aula de Ciências, o professor projeta uma animação em que parte relevante da informação aparece apenas visualmente. Para tornar esse conteúdo acessível a um estudante cego, a estratégia mais adequada é",
        "alternativas": [
            "entregar posteriormente um resumo do tema em Braille, dispensando a descrição das informações visuais exibidas, pois o Braille substitui integralmente recursos audiovisuais.",
            "pedir a um colega que explique livremente as imagens durante a exibição, sem planejamento, já que qualquer descrição informal produz o mesmo efeito pedagógico da audiodescrição.",
            "ativar apenas o leitor de tela do computador, pois esse software interpreta automaticamente cenas, gestos, gráficos e relações espaciais presentes em qualquer vídeo.",
            "oferecer audiodescrição ou descrição verbal objetiva das informações visuais relevantes, articulada ao conteúdo e sem competir desnecessariamente com falas e sons essenciais.",
            "suspender o uso de animações com toda a turma, porque materiais visuais não podem integrar uma aula inclusiva quando há estudante que não utiliza a visão para acessá-los."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou a função da audiodescrição: traduzir informação visual relevante em palavras, com objetividade e pertinência ao contexto.",
        "feedbackErro": "Braille e leitor de tela não descrevem automaticamente o conteúdo visual de um vídeo. A acessibilidade exige tornar a informação visual significativa disponível em outro canal.",
        "analiseAlternativas": [
            "Incorreta. Um resumo posterior não torna necessariamente acessível a experiência visual durante a atividade.",
            "Incorreta. Apoio entre pares pode ajudar, mas audiodescrição requer intencionalidade e objetividade.",
            "Incorreta. Leitor de tela acessa interfaces/textos; não interpreta automaticamente toda cena visual.",
            "Correta. Descrição objetiva converte a informação visual relevante em linguagem acessível.",
            "Incorreta. Inclusão adapta o recurso; não precisa eliminar a mídia para todos."
        ],
        "dicaBanca": "A FGV Vitória/2024 perguntou diretamente sobre audiodescrição e objetividade.",
        "pegadinha": "Leitor de tela ≠ audiodescrição.",
        "memorizar2026": "Audiodescrição traduz imagens relevantes em palavras.",
        "fonte": "FGV Vitória 2024; LBI, conceitos de comunicação e acessibilidade."
    },
    {
        "id": "SEDUC-EE-DV-012",
        "numero": 12,
        "subtopico": "Leitor de tela e linha Braille",
        "dificuldade": "alta",
        "pergunta": "Um estudante cego utiliza computador para produzir textos. Sobre leitor de tela e linha Braille, é correto afirmar que",
        "alternativas": [
            "a linha Braille funciona como ampliador de tela e converte imagens em alto contraste, enquanto o leitor de tela serve apenas para digitar comandos sem apresentar o conteúdo do computador.",
            "o leitor de tela pode fornecer acesso sonoro às informações compatíveis da interface, e a linha Braille pode apresentar textualmente, em células táteis, dados enviados pelo software.",
            "os dois recursos executam a mesma função e, por isso, a escolha de um elimina pedagogicamente qualquer necessidade de acesso ao outro ou ao próprio Sistema Braille.",
            "a linha Braille é um recurso exclusivamente mecânico, sem conexão com computadores ou celulares, e deve ser utilizada apenas em exercícios de alfabetização realizados no AEE.",
            "o leitor de tela transforma automaticamente gráficos e fotografias em descrições completas, enquanto a linha Braille é utilizada somente para representar números e símbolos matemáticos."
        ],
        "correta": 1,
        "feedbackAcerto": "Você distinguiu as funções. Leitor de tela e linha Braille podem trabalhar articulados, oferecendo canais sonoro e tátil para acesso digital.",
        "feedbackErro": "Os recursos são diferentes e complementares. Linha Braille pode receber texto de dispositivos digitais; leitor de tela não descreve automaticamente qualquer imagem sem informação acessível.",
        "analiseAlternativas": [
            "Incorreta. Linha Braille não é ampliador visual e leitor de tela apresenta conteúdos por síntese de voz quando acessíveis.",
            "Correta. Essa é a relação funcional entre software leitor de tela e display/linha Braille.",
            "Incorreta. As funções não são idênticas e um recurso não elimina automaticamente o outro.",
            "Incorreta. Linhas Braille são dispositivos eletrônicos conectáveis a computadores e móveis.",
            "Incorreta. Leitor de tela não cria descrição completa de toda imagem, e linha Braille não se limita à matemática."
        ],
        "dicaBanca": "Quando a banca misturar tecnologias, pergunte qual canal cada uma utiliza: voz, tato, ampliação visual ou adaptação do material.",
        "pegadinha": "Linha Braille não é “máquina de escrever isolada”; pode funcionar como display tátil digital.",
        "memorizar2026": "Leitor de tela = saída sonora/controle de interface. Linha Braille = saída tátil em células Braille.",
        "fonte": "Instituto Benjamin Constant — Linha Braille; LBI, art. 28, XII."
    },
    {
        "id": "SEDUC-EE-DV-013",
        "numero": 13,
        "subtopico": "Orientação e mobilidade — finalidade",
        "dificuldade": "media",
        "pergunta": "No AEE e em ações especializadas voltadas à deficiência visual, o ensino de orientação e mobilidade tem como finalidade principal",
        "alternativas": [
            "substituir os deslocamentos independentes por acompanhamento constante de um adulto, reduzindo riscos e priorizando proteção física durante toda a rotina escolar.",
            "ensinar trajetos fixos dentro da escola, sem generalização para outros ambientes, porque técnicas de mobilidade dependem de locais previamente memorizados.",
            "desenvolver conhecimento dos espaços, noções e técnicas de deslocamento que ampliem segurança, independência e autonomia em diferentes ambientes.",
            "preparar exclusivamente para o uso da bengala longa, uma vez que pistas auditivas, táteis, noções espaciais e técnica de guia não integram esse campo de aprendizagem.",
            "compensar a ausência de acessibilidade arquitetônica, tornando desnecessária a remoção de obstáculos e a organização de rotas seguras nos ambientes escolares."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou o núcleo da orientação e mobilidade: conhecimento ambiental e técnicas para deslocamento com segurança, independência e autonomia.",
        "feedbackErro": "Orientação e mobilidade não significa dependência de guia nem apenas bengala. Também não substitui o dever de acessibilidade do ambiente.",
        "analiseAlternativas": [
            "Incorreta. O objetivo é ampliar autonomia, não instituir acompanhamento constante.",
            "Incorreta. As habilidades devem favorecer generalização e uso em diferentes espaços.",
            "Correta. A finalidade é viabilizar locomoção segura, independente e autônoma.",
            "Incorreta. O campo envolve mais que bengala longa.",
            "Incorreta. Treino de mobilidade não exime a escola de remover barreiras físicas."
        ],
        "dicaBanca": "FGV Vitória/2024 cobrou técnicas de guia e escadas. Antes dos detalhes, fixe a finalidade: segurança + independência + autonomia.",
        "pegadinha": "Ensinar mobilidade não é adaptar a pessoa a um ambiente inacessível sem mudar o ambiente.",
        "memorizar2026": "OM = orientação espacial + deslocamento seguro + autonomia.",
        "fonte": "Inep — ensino de técnicas de orientação e mobilidade; MEC — Orientação e Mobilidade."
    },
    {
        "id": "SEDUC-EE-DV-014",
        "numero": 14,
        "subtopico": "Sorobã — função pedagógica",
        "dificuldade": "alta",
        "pergunta": "Uma professora afirma que o sorobã deve substituir a compreensão conceitual de número e das operações para estudantes cegos, pois seu uso é essencialmente mecânico. A afirmação é",
        "alternativas": [
            "inadequada, porque o sorobã é um recurso para registrar e realizar operações, mas seu ensino deve estar articulado à construção de conceitos matemáticos e às estratégias do estudante.",
            "adequada, já que a manipulação das contas produz automaticamente compreensão de valor posicional, independentemente de mediação pedagógica ou de experiências com quantidade.",
            "inadequada apenas na alfabetização matemática inicial, tornando-se correta a partir do momento em que o estudante memoriza as regras de movimentação das contas no instrumento.",
            "adequada quando o estudante utiliza Braille, pois a combinação entre dois códigos especializados torna dispensável trabalhar situações-problema e diferentes representações numéricas. e suficiente para assegurar progressão acadêmica nas diferentes etapas escolares.",
            "inadequada porque o sorobã é recurso destinado somente a estudantes com baixa visão e depende de percepção visual para o registro das ordens e classes numéricas."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu o sorobã como ferramenta matemática, não como substituto da aprendizagem conceitual. Procedimento e compreensão precisam caminhar juntos.",
        "feedbackErro": "O recurso facilita registro e cálculo, mas não produz conceito automaticamente. Mediação, significado das operações e resolução de problemas continuam necessários.",
        "analiseAlternativas": [
            "Correta. O sorobã apoia cálculo e representação, mas deve ser integrado à compreensão matemática.",
            "Incorreta. Manipulação mecânica não garante conceito.",
            "Incorreta. Mesmo após domínio técnico, a matemática não se reduz ao instrumento.",
            "Incorreta. Braille e sorobã não eliminam resolução de problemas e múltiplas representações.",
            "Incorreta. Sorobã é amplamente utilizado por estudantes cegos e não depende de visão."
        ],
        "dicaBanca": "FGV Vitória/2024 cobrou detalhes do Método Moraes. Mesmo quando a prova for técnica, não perca a função pedagógica do recurso.",
        "pegadinha": "Dominar a técnica do sorobã ≠ compreender automaticamente a matemática.",
        "memorizar2026": "Sorobã = ferramenta de cálculo e representação articulada à construção conceitual.",
        "fonte": "IBC — formação em Soroban/Metodologia Moraes; FGV Vitória 2024."
    },
    {
        "id": "SEDUC-EE-DV-015",
        "numero": 15,
        "subtopico": "Currículo comum e acessibilidade",
        "dificuldade": "alta",
        "pergunta": "Em Geografia, a turma analisa um mapa temático. O professor decide que o estudante cego não participará, pois considera impossível trabalhar informação espacial sem visão. A alternativa mais inclusiva é",
        "alternativas": [
            "manter o estudante em atividade verbal paralela sobre o mesmo tema, evitando que uma representação tátil diferente gere conteúdo que não esteja disponível aos demais alunos.",
            "substituir o objetivo de interpretação espacial por memorização de nomes de estados e capitais, garantindo uma tarefa mais simples e compatível com a ausência de visão.",
            "usar mapa tátil ou representação em relevo, descrição orientada e mediação que permitam explorar relações espaciais vinculadas ao mesmo objetivo curricular da turma.",
            "encaminhar o conteúdo para o AEE e prosseguir com a aula visual na classe comum, pois adaptações de materiais especializados pertencem ao atendimento complementar.",
            "dispensar o estudante dessa unidade curricular e compensar a carga horária com atividades de orientação e mobilidade, que apresentam maior funcionalidade para sua autonomia."
        ],
        "correta": 2,
        "feedbackAcerto": "Você preservou o objetivo curricular e modificou o meio de acesso. Representações táteis e descrição podem permitir participação significativa em conteúdos espaciais.",
        "feedbackErro": "A deficiência visual não justifica retirar conteúdo, reduzir expectativa ou deslocar toda a responsabilidade ao AEE. O professor comum também deve ensinar de forma acessível.",
        "analiseAlternativas": [
            "Incorreta. Atividade paralela afasta o estudante da experiência curricular compartilhada.",
            "Incorreta. Reduzir o objetivo para memorização empobrece a aprendizagem.",
            "Correta. Acessibilidade tátil e descrição preservam o objetivo da interpretação espacial.",
            "Incorreta. AEE pode colaborar, mas não substitui a responsabilidade da classe comum.",
            "Incorreta. Orientação e mobilidade não substitui conteúdo curricular de Geografia."
        ],
        "dicaBanca": "Caso FGV típico: a resposta correta tende a remover a barreira mantendo o estudante no objetivo comum, e não trocar o conteúdo por algo “funcional”.",
        "pegadinha": "Acessibilidade curricular ≠ currículo reduzido.",
        "memorizar2026": "Mesmo objetivo curricular, formas diferentes de acesso e expressão.",
        "fonte": "LBI, art. 28; MEC — adaptações para alunos cegos e de baixa visão; PNEEI 2025/2026."
    },
    {
        "id": "SEDUC-EE-DV-016",
        "numero": 16,
        "subtopico": "Avaliação acessível",
        "dificuldade": "alta",
        "pergunta": "Em uma prova de História, uma aluna com baixa visão utiliza ampliação digital para leitura. A escola pretende proibir o recurso porque os demais estudantes não usarão computador. A decisão correta é",
        "alternativas": [
            "manter a proibição para preservar isonomia, oferecendo em compensação menor número de questões e nota proporcional ao esforço visual despendido pela estudante.",
            "permitir o recurso quando ele viabiliza acesso ao enunciado sem alterar o conhecimento avaliado, adotando outras condições de acessibilidade conforme a necessidade identificada.",
            "permitir o computador somente se o AEE estiver presente durante toda a prova, pois o professor da classe comum não pode acompanhar tecnologia assistiva em avaliação.",
            "substituir a prova por avaliação oral em todas as disciplinas, pois estudantes com baixa visão não devem utilizar instrumentos escritos quando há recurso tecnológico envolvido. mesmo quando o instrumento escrito continua acessível com ajustes de formato e tecnologia.",
            "usar apenas a versão impressa ampliada, porque a ampliação digital constitui vantagem indevida ao permitir mudança de tamanho, contraste e navegação durante a atividade."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou o princípio de acessibilidade na avaliação. Se o recurso modifica o acesso, mas não o constructo avaliado, sua utilização pode garantir equidade.",
        "feedbackErro": "Tecnologia assistiva não é vantagem indevida quando serve para remover uma barreira. O importante é preservar o objetivo da avaliação e assegurar condições de participação.",
        "analiseAlternativas": [
            "Incorreta. Reduzir questões e alterar nota não resolve adequadamente a barreira de acesso.",
            "Correta. O recurso acessa o enunciado sem mudar necessariamente o que está sendo avaliado.",
            "Incorreta. Professor comum pode acompanhar a avaliação; presença do AEE não é condição.",
            "Incorreta. A forma oral pode ser útil em situações específicas, mas não deve ser imposta a todas.",
            "Incorreta. Ampliação digital pode ser uma forma legítima de acessibilidade."
        ],
        "dicaBanca": "Pergunte: o recurso altera o conteúdo avaliado ou apenas o acesso? Essa distinção resolve muitas questões.",
        "pegadinha": "Tecnologia assistiva em prova não é “cola” quando apenas remove barreira.",
        "memorizar2026": "Acessibilidade na avaliação preserva o objetivo e adapta o meio.",
        "fonte": "LBI, art. 28, II, III e XII; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-DV-017",
        "numero": 17,
        "subtopico": "Baixa visão — iluminação e contraste",
        "dificuldade": "media",
        "pergunta": "Sobre a organização do ambiente para estudantes com baixa visão, assinale a afirmativa correta.",
        "alternativas": [
            "A maior quantidade possível de luz é sempre a melhor opção, pois baixa visão implica necessidade uniforme de iluminação intensa em qualquer atividade e condição ocular.",
            "Contraste e iluminação devem ser ajustados às necessidades funcionais do estudante e à tarefa, pois excesso de luz ou reflexo também pode dificultar o desempenho visual.",
            "O lugar do estudante deve ser fixado obrigatoriamente na primeira carteira, independentemente da fonte de luz, do campo visual, da tarefa ou do recurso que ele utiliza.",
            "O uso de fonte ampliada elimina a necessidade de observar contraste, distância, brilho e organização do espaço, já que o tamanho do caractere é o fator principal da baixa visão.",
            "Medidas ambientais só podem ser feitas mediante receita oftalmológica, porque mudanças de iluminação e posição na sala são consideradas intervenções clínicas."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu que acessibilidade visual é individual e depende da tarefa. Iluminação excessiva e reflexos podem ser barreiras para alguns estudantes.",
        "feedbackErro": "Não há configuração universal. A escola deve observar a resposta funcional e ajustar luz, contraste, posição e distância de forma individualizada.",
        "analiseAlternativas": [
            "Incorreta. Mais luz nem sempre significa melhor funcionamento visual.",
            "Correta. A adaptação deve ser funcional, individualizada e relacionada à tarefa.",
            "Incorreta. Primeira carteira não é regra universal.",
            "Incorreta. Fonte é apenas uma variável entre várias.",
            "Incorreta. Ajustes ambientais pedagógicos não dependem necessariamente de prescrição clínica."
        ],
        "dicaBanca": "Desconfie de soluções universais para baixa visão: “sempre mais luz”, “sempre primeira carteira”, “sempre fonte X”.",
        "pegadinha": "Baixa visão é heterogênea.",
        "memorizar2026": "Ajuste funcional: iluminação + contraste + posição + distância + recurso, conforme estudante e tarefa.",
        "fonte": "Inep — recursos não ópticos; MEC/SEESP — baixa visão."
    },
    {
        "id": "SEDUC-EE-DV-018",
        "numero": 18,
        "subtopico": "Participação em Educação Física",
        "dificuldade": "alta",
        "pergunta": "Em uma aula de Educação Física com estudante com baixa visão, qual conduta melhor expressa uma prática inclusiva?",
        "alternativas": [
            "manter as regras e o espaço sem mudanças para que o estudante desenvolva adaptação ao padrão da turma, oferecendo apenas um colega-guia se ele não conseguir acompanhar.",
            "propor atividades exclusivas para o estudante à margem do grupo, evitando colisões e garantindo que os demais alunos realizem a aula prevista sem alterações metodológicas.",
            "permitir participação apenas nas etapas sem deslocamento rápido, pois esportes e jogos coletivos apresentam risco incompatível com a deficiência visual no ambiente escolar. inclusive quando a escola dispõe de materiais sonoros, sinalização contrastante e apoio planejado.",
            "adaptar espaço, sinalização e materiais quando necessário, oferecer pistas sonoras ou de alto contraste e orientar a turma, preservando participação e objetivos pedagógicos comuns.",
            "substituir as aulas práticas por conteúdos teóricos sobre esporte, já que a avaliação da disciplina pode ser realizada por trabalhos escritos em formato acessível."
        ],
        "correta": 3,
        "feedbackAcerto": "Você preservou participação e objetivos, modificando condições que podem gerar barreiras. Pistas sonoras, contraste, organização do espaço e comunicação podem ampliar segurança e aprendizagem.",
        "feedbackErro": "Segregar, excluir movimentos ou apenas exigir adaptação individual não corresponde à inclusão. O ambiente e a metodologia devem ser organizados para participação segura.",
        "analiseAlternativas": [
            "Incorreta. A responsabilidade não deve recair apenas sobre o estudante ou colega-guia.",
            "Incorreta. Atividade paralela reduz convivência e participação.",
            "Incorreta. Não há proibição geral de jogos e deslocamentos para baixa visão.",
            "Correta. Adaptações funcionais preservam aprendizagem e participação coletiva.",
            "Incorreta. Teoria acessível não substitui automaticamente experiências práticas do componente."
        ],
        "dicaBanca": "FGV já apresentou caso de adaptação para baixa visão em Educação Física. Procure remoção de barreiras, não exclusão “por segurança”.",
        "pegadinha": "Proteção excessiva também pode ser barreira atitudinal.",
        "memorizar2026": "Segurança inclusiva = adaptar atividade e ambiente, não retirar o estudante da experiência.",
        "fonte": "FGV — questões de educação inclusiva/baixa visão; LBI, art. 28, XV e XVI."
    },
    {
        "id": "SEDUC-EE-DV-019",
        "numero": 19,
        "subtopico": "Autonomia e apoio",
        "dificuldade": "alta",
        "pergunta": "Uma auxiliar passa a conduzir um estudante cego pelo braço em todos os deslocamentos, mesmo quando ele já domina técnicas de orientação e mobilidade e solicita caminhar com autonomia. A conduta é",
        "alternativas": [
            "adequada, pois a responsabilidade pela segurança escolar autoriza substituir a escolha do estudante sempre que houver possibilidade de colisão ou mudança de ambiente. inclusive quando o estudante demonstra domínio das rotas e solicita realizar o percurso de modo independente.",
            "adequada apenas nos corredores movimentados, pois autonomia em orientação e mobilidade deve ocorrer somente em locais controlados e sem circulação de outras pessoas.",
            "inadequada somente quando o estudante utiliza bengala longa, já que a ausência desse recurso torna obrigatória a condução física por adulto dentro da escola.",
            "adequada se estiver prevista no PEI, porque qualquer apoio registrado em plano individual deve ser mantido de forma constante até o final do ano letivo.",
            "inadequada, pois apoio deve ampliar segurança e autonomia sem impor dependência; a forma de ajuda deve respeitar habilidades, preferências e necessidades reais do estudante."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu que apoio não significa controle. Autonomia envolve escolhas e uso das habilidades desenvolvidas, com ajuda quando necessária e consentida.",
        "feedbackErro": "Superproteção pode restringir participação. Apoios precisam ser proporcionais, revistos e orientados para independência e autonomia.",
        "analiseAlternativas": [
            "Incorreta. Segurança não autoriza ignorar sistematicamente autonomia e escolha.",
            "Incorreta. Habilidades de mobilidade devem funcionar em contextos reais, com apoio proporcional.",
            "Incorreta. Bengala não é condição para reconhecer autonomia.",
            "Incorreta. Planos devem ser monitorados e revistos; apoio não é imutável.",
            "Correta. O apoio adequado promove segurança sem produzir dependência desnecessária."
        ],
        "dicaBanca": "A FGV explora autonomia versus superproteção. Uma alternativa pode parecer “cuidadosa” e ainda ser excludente.",
        "pegadinha": "Ajudar demais também pode criar barreira.",
        "memorizar2026": "Apoio certo = o necessário, no momento necessário, respeitando autonomia.",
        "fonte": "LBI, autonomia e participação; MEC — Orientação e Mobilidade; PNEEI 2025/2026."
    },
    {
        "id": "SEDUC-EE-DV-020",
        "numero": 20,
        "subtopico": "Família, estudante e planejamento",
        "dificuldade": "media",
        "pergunta": "Na escolha de recursos de acessibilidade para um estudante com deficiência visual, a prática mais adequada é",
        "alternativas": [
            "considerar observações pedagógicas, preferências e experiência do estudante, dialogar com a família e testar a funcionalidade dos recursos nas atividades em que serão utilizados.",
            "definir o recurso exclusivamente a partir do diagnóstico oftalmológico, mantendo a família apenas informada sobre a decisão técnica tomada pela equipe especializada.",
            "escolher o equipamento de maior tecnologia disponível, porque recursos digitais mais sofisticados tendem a ser superiores aos materiais simples em qualquer atividade escolar. e, por isso, deveria orientar a decisão pedagógica antes mesmo de qualquer teste de funcionalidade em sala.",
            "padronizar o mesmo conjunto de recursos para todos os estudantes com baixa visão, favorecendo treinamento da equipe e reduzindo diferenças de atendimento entre turmas.",
            "delegar a escolha ao professor do AEE sem participação do estudante, evitando que preferências pessoais interfiram na decisão sobre a solução pedagogicamente mais eficiente."
        ],
        "correta": 0,
        "feedbackAcerto": "Você colocou funcionalidade e participação no centro da decisão. Um recurso só é adequado se responde à barreira real e funciona para aquele estudante na atividade concreta.",
        "feedbackErro": "Nem laudo, tecnologia cara, padronização ou decisão isolada garantem funcionalidade. Planejamento inclusivo exige escuta, teste, acompanhamento e colaboração.",
        "analiseAlternativas": [
            "Correta. Combina estudo contextual, participação e verificação funcional do recurso.",
            "Incorreta. Diagnóstico não substitui decisão pedagógica contextualizada.",
            "Incorreta. Sofisticação tecnológica não é sinônimo de adequação.",
            "Incorreta. Baixa visão é heterogênea e não admite pacote universal.",
            "Incorreta. O estudante deve participar das decisões que afetam seu acesso e autonomia."
        ],
        "dicaBanca": "Quando a banca oferecer “o recurso mais moderno” versus “o recurso funcional”, prefira a solução vinculada à necessidade real.",
        "pegadinha": "Tecnologia assistiva não é vitrine de equipamento.",
        "memorizar2026": "Recurso adequado = funcional para o estudante, a tarefa e o contexto.",
        "fonte": "Decreto nº 12.686/2025, estudo de caso; LBI, art. 28, VIII e XII."
    },
    {
        "id": "SEDUC-EE-DV-021",
        "numero": 21,
        "subtopico": "Baixa visão — uso funcional da visão",
        "dificuldade": "alta",
        "pergunta": "Sobre o uso da visão residual por estudantes com baixa visão, assinale a afirmativa correta.",
        "alternativas": [
            "Deve ser desencorajado quando houver esforço para aproximar materiais, porque utilizar visão residual pode acelerar a perda visual e comprometer a aprendizagem por outros sentidos.",
            "Deve ocorrer apenas no AEE, onde há controle de iluminação e recursos específicos, evitando que estratégias visuais diferentes alterem a rotina pedagógica da classe comum.",
            "Deve ser substituído progressivamente pelo Braille em todos os casos, pois a alfabetização tátil é mais estável e reduz a dependência de ampliação ou contraste ao longo da escolaridade. e permitiria evitar oscilações de desempenho decorrentes de iluminação, contraste e fadiga visual.",
            "Deve ser planejado com base exclusivamente na acuidade registrada em exame, pois desempenho funcional em atividades escolares varia demais para orientar seleção de recursos.",
            "Pode ser estimulado e potencializado com recursos e condições adequadas, considerando conforto, eficiência, tarefa e características individuais, sem impor uma única modalidade de acesso."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu a lógica funcional: utilizar e potencializar a visão disponível quando isso for útil ao estudante, com recursos e condições adequadas.",
        "feedbackErro": "Não se deve proibir o uso da visão residual nem impor Braille universalmente à baixa visão. A decisão depende de funcionamento, tarefa, conforto e recursos.",
        "analiseAlternativas": [
            "Incorreta. Não há regra pedagógica de evitar visão residual por presumido agravamento.",
            "Incorreta. Estratégias visuais precisam funcionar também na classe comum.",
            "Incorreta. Braille não deve ser imposto automaticamente a toda baixa visão.",
            "Incorreta. Acuidade é apenas um dado; funcionamento visual em tarefas também importa.",
            "Correta. A abordagem funcional combina potencial visual, conforto, tarefa e acessibilidade."
        ],
        "dicaBanca": "Termos como “todos”, “progressivamente” e “exclusivamente” são suspeitos em baixa visão, porque as necessidades são heterogêneas.",
        "pegadinha": "Estimular visão residual não significa negar outros canais de acesso.",
        "memorizar2026": "Baixa visão: potencializar o que funciona, com flexibilidade de recursos.",
        "fonte": "MEC/SEESP — baixa visão e avaliação funcional; Inep — recursos ópticos e não ópticos."
    },
    {
        "id": "SEDUC-EE-DV-022",
        "numero": 22,
        "subtopico": "Recursos — itens I, II e III",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. Lupas manuais, lentes específicas e telescópios são exemplos de recursos ópticos que podem ampliar o acesso visual a determinadas tarefas.",
            "II. Contraste, iluminação, plano inclinado, pauta ampliada e ampliação de caracteres são exemplos de recursos não ópticos.",
            "III. A escolha entre recursos ópticos e não ópticos deve ser padronizada pelo diagnóstico, dispensando observação de funcionalidade nas atividades escolares."
        ],
        "pergunta": "Considerando as atividades de AEE para estudantes com baixa visão, está correto o que se afirma em",
        "alternativas": [
            "I, apenas.",
            "II, apenas.",
            "I e III, apenas.",
            "I e II, apenas.",
            "I, II e III."
        ],
        "correta": 3,
        "feedbackAcerto": "Você classificou corretamente os recursos: I e II estão corretas; III está errada porque a funcionalidade deve ser observada no contexto e não definida apenas pelo diagnóstico.",
        "feedbackErro": "I e II estão corretas; III está errada porque a funcionalidade do recurso deve ser verificada no contexto, não definida automaticamente apenas pelo diagnóstico.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa II também está correta.",
            "Incorreta. A afirmativa I também está correta.",
            "Incorreta. A afirmativa III é falsa.",
            "Correta. I e II descrevem adequadamente recursos ópticos e não ópticos; III transforma o diagnóstico em decisão automática.",
            "Incorreta. III é falsa."
        ],
        "dicaBanca": "Em I/II/III da FGV, classifique as afirmações antes de olhar a combinação. Não deixe uma palavra como “dispensando” passar despercebida.",
        "pegadinha": "Diagnóstico não substitui teste de funcionalidade do recurso.",
        "memorizar2026": "Ópticos = lentes; não ópticos = mudanças de material/ambiente. Escolha é funcional.",
        "fonte": "Inep — ensino do uso de recursos ópticos e não ópticos."
    },
    {
        "id": "SEDUC-EE-DV-023",
        "numero": 23,
        "subtopico": "AEE, Braille e orientação e mobilidade — V/F",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. O AEE para estudante com deficiência visual é complementar à escolarização e não substitui a classe comum.",
            "II. O ensino do Sistema Braille e de técnicas de orientação e mobilidade pode integrar atividades do AEE conforme as necessidades do estudante.",
            "III. A matrícula no AEE pode substituir a frequência na classe comum quando o estudante cego precisa de atendimento intensivo de acessibilidade."
        ],
        "pergunta": "As afirmativas I, II e III são, respectivamente,",
        "alternativas": [
            "V – V – F.",
            "V – F – V.",
            "F – V – F.",
            "F – F – V.",
            "V – V – V."
        ],
        "correta": 0,
        "feedbackAcerto": "Você julgou corretamente: AEE é complementar, Braille e orientação e mobilidade podem integrar o atendimento, e AEE não substitui a frequência na classe comum.",
        "feedbackErro": "I e II estão corretas. III está errada: AEE não substitui matrícula e frequência na classe comum.",
        "analiseAlternativas": [
            "Correta. AEE é complementar; Braille/OM podem integrar o atendimento; substituição da classe comum é falsa.",
            "Incorreta. II é verdadeira e III é falsa.",
            "Incorreta. I também é verdadeira.",
            "Incorreta. I e II são verdadeiras.",
            "Incorreta. III é falsa."
        ],
        "dicaBanca": "FGV usa V/F para juntar conceito geral e detalhe normativo. A palavra “substituir” costuma decidir o item.",
        "pegadinha": "Atendimento intensivo não transforma AEE em escolarização substitutiva.",
        "memorizar2026": "AEE complementa; Braille e OM podem integrar; classe comum permanece espaço de escolarização.",
        "fonte": "Inep 2026; Decreto nº 12.686/2025; LBI, art. 28."
    },
    {
        "id": "SEDUC-EE-DV-024",
        "numero": 24,
        "subtopico": "Audiodescrição × leitor de tela",
        "dificuldade": "alta",
        "pergunta": "Uma escola possui apostila digital acessível ao leitor de tela, mas nela há gráficos sem descrição textual. A equipe conclui que o material já está plenamente acessível ao estudante cego. A conclusão é",
        "alternativas": [
            "adequada, pois leitor de tela interpreta todo elemento visual presente no arquivo, inclusive gráficos sem texto alternativo ou descrição de suas relações e tendências.",
            "adequada quando o arquivo está em PDF pesquisável, porque a presença de texto selecionável permite ao software reconstruir automaticamente qualquer informação gráfica.",
            "incorreta somente se o gráfico contiver cores, já que formas, eixos e relações numéricas são reconhecidos pelo leitor de tela sem necessidade de informação adicional.",
            "incorreta, porque acessibilidade textual do arquivo não garante acesso ao conteúdo visual; gráficos podem exigir descrição, dados estruturados ou representação tátil conforme o objetivo.",
            "adequada se o professor explicar o gráfico ao final da unidade, pois acessibilidade pode ser compensada posteriormente sem necessidade de acesso durante a atividade proposta. durante o trabalho coletivo em que os demais estudantes já analisaram e discutiram aquela informação."
        ],
        "correta": 3,
        "feedbackAcerto": "Você distinguiu acessibilidade da interface e acessibilidade do conteúdo. Um arquivo legível por leitor de tela ainda pode conter informação visual inacessível.",
        "feedbackErro": "Leitores de tela não transformam automaticamente gráficos sem descrição em informação compreensível. O conteúdo visual precisa de alternativa acessível adequada ao objetivo.",
        "analiseAlternativas": [
            "Incorreta. Leitor de tela não interpreta automaticamente todo gráfico sem informação acessível.",
            "Incorreta. Texto pesquisável não torna dados visuais automaticamente acessíveis.",
            "Incorreta. A barreira não depende apenas de cor.",
            "Correta. Descrição, dados estruturados ou material tátil podem ser necessários.",
            "Incorreta. Acesso tardio não equivale à participação na atividade no momento pedagógico."
        ],
        "dicaBanca": "A FGV pode misturar tecnologias corretas de modo incorreto. “Tem leitor de tela” não significa “todo conteúdo está acessível”.",
        "pegadinha": "Acessibilidade do arquivo ≠ acessibilidade de cada informação dentro dele.",
        "memorizar2026": "Conteúdo visual precisa de equivalente informacional acessível.",
        "fonte": "LBI — comunicação e tecnologia assistiva; IBC — linha Braille; FGV Vitória 2024 — audiodescrição."
    },
    {
        "id": "SEDUC-EE-DV-025",
        "numero": 25,
        "subtopico": "Caso integrado — baixa visão e classe comum",
        "dificuldade": "alta",
        "pergunta": "Uma estudante com baixa visão lê bem com ampliação digital e contraste ajustado, mas a escola mantém livros em fonte pequena, restringe o tablet ao AEE e reduz as tarefas da classe comum para evitar “cansaço visual”. A melhor reorganização é",
        "alternativas": [
            "manter o tablet no AEE e fornecer resumos impressos ampliados na classe comum, pois a tecnologia especializada deve ser ensinada antes de ser incorporada ao cotidiano curricular.",
            "preservar os materiais originais e ampliar o tempo de realização, evitando alterar recursos da turma enquanto a estudante desenvolve maior tolerância ao esforço visual.",
            "autorizar apenas o uso de lupa óptica em sala e reservar ampliação digital para avaliações, garantindo que diferentes recursos não interfiram na uniformidade metodológica da turma. e reduzir diferenças de procedimento entre avaliações, trabalhos e demais atividades da classe comum.",
            "reduzir objetivos e volume de leitura no PEI, porque a baixa visão justifica adequação permanente da complexidade acadêmica para prevenção de fadiga e frustração.",
            "garantir materiais acessíveis e uso funcional do tablet nas atividades, ajustar ambiente e avaliação, manter objetivos curriculares pertinentes e articular classe comum, AEE e estudante."
        ],
        "correta": 4,
        "feedbackAcerto": "Você integrou os princípios do bloco: recurso acessível deve acompanhar a atividade real, objetivos curriculares pertinentes são preservados e classe comum, AEE e estudante precisam atuar de forma articulada.",
        "feedbackErro": "A resposta inclusiva não confina o recurso ao AEE nem reduz automaticamente objetivos. Ela leva a acessibilidade para a classe comum e acompanha sua funcionalidade.",
        "analiseAlternativas": [
            "Incorreta. Restringir o tablet ao AEE mantém a barreira onde o currículo é desenvolvido.",
            "Incorreta. Tempo extra sem acesso visual adequado não resolve a barreira.",
            "Incorreta. Uniformidade metodológica não deve prevalecer sobre acessibilidade funcional.",
            "Incorreta. Baixa visão não justifica redução automática e permanente de objetivos.",
            "Correta. A proposta integra acessibilidade, currículo comum, colaboração e autonomia."
        ],
        "dicaBanca": "Em caso integrado, escolha a alternativa que leva o recurso para a atividade real, mantém expectativas e articula os atores da inclusão.",
        "pegadinha": "AEE não é estacionamento de tecnologia assistiva.",
        "memorizar2026": "Acessibilidade precisa acompanhar o estudante na classe comum e nas atividades reais.",
        "fonte": "LBI, art. 28; Inep 2026; Decreto nº 12.686/2025; FGV Vitória 2024."
    }
];

    window.seducEducacaoEspecialDeficienciaVisual2026 = banco;
})();
