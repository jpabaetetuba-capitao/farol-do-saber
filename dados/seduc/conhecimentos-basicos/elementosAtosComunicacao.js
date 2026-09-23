/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 15: Elementos dos Atos de Comunicação
   25 questões autorais calibradas pelo edital e pelo padrão FGV.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-LP-COM-001",
        "numero": 1,
        "subtopico": "Emissor / remetente",
        "dificuldade": "media",
        "pergunta": "A direção de uma escola envia aos responsáveis, pelo aplicativo institucional, o aviso: “A reunião pedagógica ocorrerá na próxima terça-feira, às 18h”. Nesse ato de comunicação, o emissor é",
        "alternativas": [
            "a direção da escola, responsável pela produção e pelo envio do aviso.",
            "os responsáveis pelos estudantes, pois são eles que interpretarão a informação.",
            "a reunião pedagógica, porque constitui o assunto do aviso.",
            "o aplicativo institucional, porque transporta a mensagem.",
            "a língua portuguesa, porque permite a codificação do texto."
        ],
        "correta": 0,
        "feedbackAcerto": "O emissor ou remetente é quem produz e envia a mensagem. No caso, essa função é desempenhada institucionalmente pela direção da escola.",
        "feedbackErro": "Separe quem produz a mensagem de quem a recebe, do meio utilizado e do assunto tratado.",
        "analiseAlternativas": [
            "Correta. A direção é a fonte institucional da mensagem.",
            "Incorreta. Os responsáveis são os destinatários/receptores.",
            "Incorreta. A reunião é o referente/assunto.",
            "Incorreta. O aplicativo funciona como canal/meio.",
            "Incorreta. A língua portuguesa é o código."
        ],
        "dicaBanca": "A FGV pode apresentar instituições, órgãos ou grupos como emissores; não procure necessariamente uma pessoa individual.",
        "pegadinha": "Emissor não é o aparelho ou aplicativo que transmite a mensagem.",
        "memorizar2026": "Emissor/remetente = quem produz e envia a mensagem.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de identificação dos elementos do ato comunicativo."
    },
    {
        "id": "SEDUC-LP-COM-002",
        "numero": 2,
        "subtopico": "Receptor / destinatário",
        "dificuldade": "media",
        "pergunta": "Em um e-mail da coordenação pedagógica dirigido aos professores, lê-se: “Pedimos que os planos de aula sejam enviados até sexta-feira”. O receptor desse ato comunicativo é",
        "alternativas": [
            "a coordenação pedagógica.",
            "os professores aos quais o e-mail foi dirigido.",
            "o pedido de envio dos planos de aula.",
            "a caixa de correio eletrônico utilizada pela escola.",
            "a norma-padrão empregada na redação."
        ],
        "correta": 1,
        "feedbackAcerto": "Receptor ou destinatário é quem recebe e interpreta a mensagem; no enunciado, são os professores.",
        "feedbackErro": "Pergunte: para quem a mensagem foi produzida? A resposta identifica o receptor.",
        "analiseAlternativas": [
            "Incorreta. A coordenação exerce o papel de emissor.",
            "Correta. Os professores são os destinatários do pedido.",
            "Incorreta. O pedido constitui o conteúdo da mensagem.",
            "Incorreta. O e-mail é o canal/meio.",
            "Incorreta. A norma linguística integra o código/forma usada."
        ],
        "dicaBanca": "Em textos institucionais, o destinatário pode aparecer explicitamente no vocativo, no cabeçalho ou ser inferido pela situação.",
        "pegadinha": "Quem é mencionado no texto nem sempre é quem recebe o texto.",
        "memorizar2026": "Receptor/destinatário = quem recebe e interpreta a mensagem.",
        "fonte": "Edital SEDUC-PA 2026; modelo comunicativo recorrente em provas FGV."
    },
    {
        "id": "SEDUC-LP-COM-003",
        "numero": 3,
        "subtopico": "Mensagem",
        "dificuldade": "media",
        "pergunta": "Em um cartaz afixado no corredor lê-se: “Biblioteca aberta até as 20h durante a semana de provas”. Nesse ato comunicativo, a mensagem corresponde",
        "alternativas": [
            "ao conjunto de estudantes que circula pelo corredor.",
            "ao cartaz enquanto suporte físico.",
            "ao conteúdo transmitido sobre o horário de funcionamento da biblioteca.",
            "à língua portuguesa utilizada na formulação.",
            "à própria biblioteca, que é o assunto mencionado."
        ],
        "correta": 2,
        "feedbackAcerto": "Mensagem é o conteúdo efetivamente transmitido pelo emissor ao receptor.",
        "feedbackErro": "Não confunda conteúdo transmitido com suporte, código, destinatário ou referente.",
        "analiseAlternativas": [
            "Incorreta. Os estudantes podem ser receptores.",
            "Incorreta. O cartaz é suporte/canal material.",
            "Correta. Esse é o conteúdo comunicado.",
            "Incorreta. A língua portuguesa é o código.",
            "Incorreta. A biblioteca integra o referente/assunto."
        ],
        "dicaBanca": "A FGV pode aproximar 'mensagem' e 'referente'. Mensagem é aquilo que se diz; referente é aquilo sobre o que se fala.",
        "pegadinha": "Suporte físico ≠ mensagem.",
        "memorizar2026": "Mensagem = conteúdo transmitido.",
        "fonte": "Edital SEDUC-PA 2026; elementos clássicos do ato de comunicação."
    },
    {
        "id": "SEDUC-LP-COM-004",
        "numero": 4,
        "subtopico": "Código",
        "dificuldade": "media",
        "pergunta": "Um estudante brasileiro recebe instruções escritas integralmente em japonês e não consegue compreendê-las, embora o documento esteja perfeitamente legível. O problema comunicativo decorre principalmente",
        "alternativas": [
            "da inexistência de um emissor.",
            "da ausência de receptor.",
            "da falta de um referente.",
            "do não compartilhamento do código empregado na mensagem.",
            "da interrupção física do canal."
        ],
        "correta": 3,
        "feedbackAcerto": "O documento chega ao receptor, mas o sistema de signos utilizado não é dominado por ele; há falha relacionada ao código.",
        "feedbackErro": "O canal funcionou: o documento chegou e está legível. O obstáculo é compreender o sistema linguístico usado.",
        "analiseAlternativas": [
            "Incorreta. Houve alguém/instituição que produziu o documento.",
            "Incorreta. O estudante é o receptor.",
            "Incorreta. A mensagem possui assunto/referente.",
            "Correta. O código não é compartilhado pelo receptor.",
            "Incorreta. O canal não está interrompido."
        ],
        "dicaBanca": "A FGV já cobrou situação semelhante envolvendo hieróglifos para identificar falha de código.",
        "pegadinha": "Não compreender a língua não é falha do canal.",
        "memorizar2026": "Código = sistema de signos compartilhado para construir e interpretar a mensagem.",
        "fonte": "Edital SEDUC-PA 2026; FGV/SME-SP — questão sobre falha comunicativa por desconhecimento do código."
    },
    {
        "id": "SEDUC-LP-COM-005",
        "numero": 5,
        "subtopico": "Canal",
        "dificuldade": "media",
        "pergunta": "Durante uma aula on-line, a imagem permanece normal, mas o áudio fica completamente interrompido por falha na conexão. Considerando o ato comunicativo, o elemento diretamente comprometido é",
        "alternativas": [
            "o emissor.",
            "o receptor.",
            "o referente.",
            "o código.",
            "o canal."
        ],
        "correta": 4,
        "feedbackAcerto": "A falha técnica impede a circulação sonora da mensagem; trata-se de problema no canal.",
        "feedbackErro": "Canal é a via física ou tecnológica pela qual a mensagem circula. A interrupção da conexão é uma interferência nessa via.",
        "analiseAlternativas": [
            "Incorreta. O professor continua sendo o emissor.",
            "Incorreta. Os alunos continuam sendo receptores.",
            "Incorreta. O tema da aula permanece o referente.",
            "Incorreta. A língua empregada continua sendo compreensível.",
            "Correta. A transmissão está fisicamente comprometida."
        ],
        "dicaBanca": "A FGV distingue desconhecimento do assunto, desconhecimento do código e dificuldade física para ouvir/receber a mensagem.",
        "pegadinha": "Não ouvir por distância, ruído ou falha técnica tende a apontar para o canal.",
        "memorizar2026": "Canal = meio/via por que a mensagem circula.",
        "fonte": "Edital SEDUC-PA 2026; FGV/SME-SP — questões sobre falhas no ato comunicativo."
    },
    {
        "id": "SEDUC-LP-COM-006",
        "numero": 6,
        "subtopico": "Referente / contexto",
        "dificuldade": "media",
        "pergunta": "A secretaria publica: “A aula de amanhã foi transferida para o auditório por causa da manutenção elétrica”. O referente principal da mensagem é",
        "alternativas": [
            "a alteração da aula e as circunstâncias relacionadas a ela.",
            "a secretaria enquanto autora do comunicado.",
            "os estudantes que lerão o aviso.",
            "a língua portuguesa usada na redação.",
            "o aplicativo em que o aviso foi publicado."
        ],
        "correta": 0,
        "feedbackAcerto": "Referente é o assunto, situação ou realidade sobre a qual a mensagem se constrói; aqui, é a mudança da aula.",
        "feedbackErro": "Pergunte: de que realidade ou assunto a mensagem trata? Isso aponta para o referente.",
        "analiseAlternativas": [
            "Correta. É o assunto central da comunicação.",
            "Incorreta. A secretaria é emissora.",
            "Incorreta. Os estudantes são receptores.",
            "Incorreta. A língua é o código.",
            "Incorreta. O aplicativo é o canal."
        ],
        "dicaBanca": "A FGV já cobrou diretamente o referente como elemento indispensável à compreensão do ato comunicativo.",
        "pegadinha": "Referente não é sinônimo de mensagem: é aquilo a que a mensagem se refere.",
        "memorizar2026": "Referente/contexto = assunto, situação ou realidade focalizada.",
        "fonte": "Edital SEDUC-PA 2026; FGV — prova de Professor/SME-SP com questão sobre referente."
    },
    {
        "id": "SEDUC-LP-COM-007",
        "numero": 7,
        "subtopico": "Falha de código",
        "dificuldade": "alta",
        "pergunta": "Em uma reunião com familiares, um técnico utiliza continuamente siglas e abreviações desconhecidas do público, sem explicá-las. Embora todos escutem perfeitamente, vários participantes não compreendem a exposição. A falha ocorre principalmente porque",
        "alternativas": [
            "o canal foi interrompido.",
            "o código/repertório empregado não é suficientemente compartilhado entre emissor e receptores.",
            "o referente deixou de existir.",
            "a mensagem não possui emissor identificável.",
            "os receptores não estão fisicamente presentes."
        ],
        "correta": 1,
        "feedbackAcerto": "Siglas e jargões podem integrar um código especializado. Se o público não domina esse repertório, a compreensão fica comprometida.",
        "feedbackErro": "O som chega normalmente; portanto, não é um problema físico de canal. O obstáculo está nos signos e convenções usados.",
        "analiseAlternativas": [
            "Incorreta. Todos escutam a mensagem.",
            "Correta. Falta compartilhamento suficiente do código especializado.",
            "Incorreta. O assunto existe e está sendo tratado.",
            "Incorreta. O técnico funciona como emissor.",
            "Incorreta. Os receptores estão na reunião."
        ],
        "dicaBanca": "A FGV gosta de transformar situações reais em diagnóstico do elemento comunicativo que falhou.",
        "pegadinha": "Jargão inadequado ao público pode produzir falha de código mesmo dentro da mesma língua.",
        "memorizar2026": "Código só funciona quando emissor e receptor compartilham os signos necessários.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV sobre diagnóstico de falhas comunicativas."
    },
    {
        "id": "SEDUC-LP-COM-008",
        "numero": 8,
        "subtopico": "Falha de canal",
        "dificuldade": "media",
        "pergunta": "Em uma palestra, pessoas sentadas no fundo do auditório não conseguem ouvir parte da exposição porque o sistema de som apresenta defeito. O problema está relacionado",
        "alternativas": [
            "ao referente, pois o tema é desconhecido.",
            "ao código, pois a língua empregada é inadequada.",
            "ao canal, pois a transmissão sonora da mensagem foi prejudicada.",
            "ao emissor, pois ele necessariamente formulou uma mensagem incoerente.",
            "ao receptor, pois todo problema de compreensão decorre de quem recebe."
        ],
        "correta": 2,
        "feedbackAcerto": "O defeito no sistema de som interfere na via de transmissão; portanto, compromete o canal.",
        "feedbackErro": "A dificuldade não decorre do assunto nem do idioma, mas da impossibilidade física de ouvir adequadamente.",
        "analiseAlternativas": [
            "Incorreta. Nada indica desconhecimento do tema.",
            "Incorreta. Nada indica problema com a língua ou sistema de signos.",
            "Correta. O meio físico de transmissão falhou.",
            "Incorreta. Não há evidência de má formulação.",
            "Incorreta. A causa está no meio de transmissão."
        ],
        "dicaBanca": "Em questão oficial para professor, a FGV utilizou situação de pessoas distantes de um conferencista para diferenciar canal de tema.",
        "pegadinha": "Dificuldade de ouvir ≠ ignorância sobre o tema.",
        "memorizar2026": "Ruído físico e falha técnica normalmente comprometem o canal.",
        "fonte": "Edital SEDUC-PA 2026; FGV/SME-SP — ato comunicativo e identificação da falha."
    },
    {
        "id": "SEDUC-LP-COM-009",
        "numero": 9,
        "subtopico": "Referente extratextual",
        "dificuldade": "alta",
        "pergunta": "Durante uma visita guiada, o professor aponta para um prédio e afirma: “Aquele foi inaugurado no século XIX”. A identificação do referente de “aquele” depende principalmente",
        "alternativas": [
            "de uma definição apresentada posteriormente no mesmo período.",
            "de um antecedente nominal já escrito na frase.",
            "do conhecimento das regras de concordância.",
            "da situação extratextual compartilhada pelos participantes, inclusive do gesto de apontar.",
            "do reconhecimento da função poética."
        ],
        "correta": 3,
        "feedbackAcerto": "O referente não está nomeado no texto; é recuperado pela situação comunicativa e pelo gesto, portanto é extratextual.",
        "feedbackErro": "Não há antecedente verbalizado na frase. A compreensão depende do contexto situacional compartilhado.",
        "analiseAlternativas": [
            "Incorreta. Não há definição posterior.",
            "Incorreta. Nenhum substantivo anterior funciona como antecedente.",
            "Incorreta. Concordância não identifica o objeto apontado.",
            "Correta. O referente é recuperado fora do texto.",
            "Incorreta. A função poética é irrelevante aqui."
        ],
        "dicaBanca": "A FGV já cobrou a distinção entre referente recuperado dentro do texto e referente conhecido pela situação externa.",
        "pegadinha": "Dêiticos como 'este', 'aquele', 'aqui' e 'agora' podem depender fortemente do contexto extratextual.",
        "memorizar2026": "Referente extratextual = recuperado pela situação/conhecimento externo, não por antecedente escrito.",
        "fonte": "Edital SEDUC-PA 2026; FGV — Professor/SME-SP, questão sobre referente extratextual."
    },
    {
        "id": "SEDUC-LP-COM-010",
        "numero": 10,
        "subtopico": "Referente textual",
        "dificuldade": "alta",
        "pergunta": "Leia: “A escola apresentou um novo projeto de leitura. Ele começará em outubro.” No segundo período, o pronome “ele”",
        "alternativas": [
            "constitui o emissor da mensagem.",
            "indica o canal de comunicação.",
            "funciona como código não verbal.",
            "introduz um referente totalmente desconhecido.",
            "retoma textualmente “um novo projeto de leitura”, permitindo identificar seu referente no próprio texto."
        ],
        "correta": 4,
        "feedbackAcerto": "O referente de 'ele' é recuperado no próprio texto, pela retomada anafórica do sintagma anterior.",
        "feedbackErro": "Procure o antecedente do pronome. Ele está expresso no primeiro período.",
        "analiseAlternativas": [
            "Incorreta. Pronome não é o emissor.",
            "Incorreta. Não é meio de transmissão.",
            "Incorreta. É elemento verbal do código linguístico.",
            "Incorreta. Há antecedente explícito.",
            "Correta. O referente é intratextual/textual."
        ],
        "dicaBanca": "A FGV cruza frequentemente elementos da comunicação com coesão e referência.",
        "pegadinha": "Referente textual pode ser recuperado por pronome, substituição lexical ou outras relações coesivas.",
        "memorizar2026": "Referente textual/intratextual = identificável por elementos presentes no próprio texto.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de referenciação e ato comunicativo."
    },
    {
        "id": "SEDUC-LP-COM-011",
        "numero": 11,
        "subtopico": "Código compartilhado",
        "dificuldade": "media",
        "pergunta": "Dois profissionais utilizam entre si abreviações técnicas que ambos dominam e a conversa ocorre sem dificuldade. Nesse caso, a eficácia comunicativa se explica, entre outros fatores, porque",
        "alternativas": [
            "emissor e receptor compartilham o código necessário à interpretação da mensagem.",
            "o canal deixa de existir quando há vocabulário técnico.",
            "todo jargão profissional possui função poética.",
            "o referente não interfere na compreensão.",
            "a mensagem dispensa contexto sempre que houver siglas."
        ],
        "correta": 0,
        "feedbackAcerto": "O compartilhamento do repertório técnico permite que as siglas sejam codificadas e decodificadas corretamente.",
        "feedbackErro": "Jargão não é problema por si só; torna-se obstáculo quando não é compartilhado pelos interlocutores.",
        "analiseAlternativas": [
            "Correta. Compartilhar o código favorece a compreensão.",
            "Incorreta. O canal continua existindo.",
            "Incorreta. Jargão não implica função poética.",
            "Incorreta. O referente continua sendo elemento da comunicação.",
            "Incorreta. O contexto pode continuar necessário."
        ],
        "dicaBanca": "A adequação do código depende do interlocutor e da situação.",
        "pegadinha": "Vocabulário técnico pode ser perfeitamente adequado em comunicação entre especialistas.",
        "memorizar2026": "Eficiência comunicativa exige compatibilidade entre código, público e contexto.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de adequação comunicativa."
    },
    {
        "id": "SEDUC-LP-COM-012",
        "numero": 12,
        "subtopico": "Repertório e conhecimento de mundo",
        "dificuldade": "alta",
        "pergunta": "Dois leitores compreendem de maneira diferente uma charge porque apenas um deles conhece o fato social ao qual ela faz alusão. A diferença de interpretação decorre sobretudo",
        "alternativas": [
            "da inexistência de mensagem.",
            "da diferença de repertório e de conhecimento de mundo dos receptores.",
            "da falta absoluta de código linguístico.",
            "da ausência de emissor.",
            "da impossibilidade de uma charge possuir referente."
        ],
        "correta": 1,
        "feedbackAcerto": "Conhecimento prévio, repertório cultural e contexto influenciam diretamente a interpretação da mensagem.",
        "feedbackErro": "A charge existe, possui autor, código e referente. O que muda é o repertório mobilizado pelos leitores.",
        "analiseAlternativas": [
            "Incorreta. A charge contém mensagem.",
            "Correta. O conhecimento contextual altera a interpretação.",
            "Incorreta. Há código verbal e/ou visual.",
            "Incorreta. Existe um produtor da charge.",
            "Incorreta. A charge pode remeter a fatos, ideias e situações."
        ],
        "dicaBanca": "A FGV trabalha o ato comunicativo como processo de construção de sentido, não como transmissão mecânica.",
        "pegadinha": "Compartilhar a língua não significa compartilhar todo o conhecimento necessário à interpretação.",
        "memorizar2026": "Receptor interpreta com base em código + contexto + repertório.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de leitura contextual."
    },
    {
        "id": "SEDUC-LP-COM-013",
        "numero": 13,
        "subtopico": "Intenção comunicativa",
        "dificuldade": "media",
        "pergunta": "Uma campanha escolar traz a frase “Doe um livro. Multiplique histórias.” Considerando o ato comunicativo, a intenção predominante do emissor é",
        "alternativas": [
            "testar se o canal funciona.",
            "explicar o significado da palavra “livro”.",
            "persuadir o destinatário a realizar uma ação.",
            "relatar objetivamente um acontecimento passado.",
            "demonstrar desconhecimento do referente."
        ],
        "correta": 2,
        "feedbackAcerto": "O imperativo e o slogan são usados para orientar/persuadir o receptor a doar livros.",
        "feedbackErro": "Observe o efeito pretendido sobre o destinatário: levá-lo a agir.",
        "analiseAlternativas": [
            "Incorreta. Não é simples manutenção do contato.",
            "Incorreta. Não há metalinguagem.",
            "Correta. A finalidade é persuasiva/conativa.",
            "Incorreta. Não há relato de fato passado.",
            "Incorreta. O referente é claro."
        ],
        "dicaBanca": "A intenção comunicativa ajuda a compreender a função da linguagem e a escolha dos demais elementos do ato.",
        "pegadinha": "Mensagem e intenção não são idênticas: uma é o conteúdo; a outra é o efeito pretendido.",
        "memorizar2026": "Intenção comunicativa = objetivo do emissor ao produzir a mensagem.",
        "fonte": "Edital SEDUC-PA 2026; FGV — questões sobre finalidade e adequação do ato comunicativo."
    },
    {
        "id": "SEDUC-LP-COM-014",
        "numero": 14,
        "subtopico": "Mensagem x código",
        "dificuldade": "alta",
        "pergunta": "Assinale a afirmativa que distingue corretamente mensagem e código em um ato de comunicação.",
        "alternativas": [
            "Mensagem é o destinatário; código é o emissor.",
            "Mensagem é o meio físico; código é o assunto.",
            "Mensagem é a realidade externa; código é o canal.",
            "Mensagem é o conteúdo produzido; código é o sistema de signos usado para construí-lo.",
            "Mensagem e código são termos equivalentes."
        ],
        "correta": 3,
        "feedbackAcerto": "A mensagem é o conteúdo transmitido; o código é o sistema compartilhado que permite formulá-la e interpretá-la.",
        "feedbackErro": "Pense na diferença entre 'o que foi dito' e 'em que sistema de signos foi dito'.",
        "analiseAlternativas": [
            "Incorreta. Destinatário e emissor são participantes.",
            "Incorreta. Meio físico é canal.",
            "Incorreta. Realidade externa corresponde ao referente/contexto.",
            "Correta. É a distinção conceitual adequada.",
            "Incorreta. São elementos distintos."
        ],
        "dicaBanca": "FGV gosta de alternativas que trocam as definições entre os elementos.",
        "pegadinha": "Língua portuguesa = código; frase concreta produzida = mensagem.",
        "memorizar2026": "Mensagem = conteúdo | Código = sistema de signos.",
        "fonte": "Edital SEDUC-PA 2026; elementos dos atos de comunicação."
    },
    {
        "id": "SEDUC-LP-COM-015",
        "numero": 15,
        "subtopico": "Elementos e funções da linguagem",
        "dificuldade": "alta",
        "pergunta": "A correspondência correta entre elemento do ato comunicativo e função da linguagem que o coloca em destaque é",
        "alternativas": [
            "emissor – fática; canal – emotiva.",
            "receptor – poética; mensagem – conativa.",
            "código – referencial; referente – metalinguística.",
            "mensagem – fática; canal – poética.",
            "emissor – emotiva; receptor – conativa; canal – fática; código – metalinguística; mensagem – poética; referente – referencial."
        ],
        "correta": 4,
        "feedbackAcerto": "Essa é a associação clássica entre os seis elementos e as seis funções da linguagem.",
        "feedbackErro": "Relacione cada função ao foco: emissor/emotiva; receptor/conativa; canal/fática; código/metalinguística; mensagem/poética; referente/referencial.",
        "analiseAlternativas": [
            "Incorreta. Emissora é emotiva e canal é fático.",
            "Incorreta. Receptor é conativo e mensagem é poética.",
            "Incorreta. Código é metalinguístico e referente é referencial.",
            "Incorreta. Mensagem é poética e canal é fático.",
            "Correta. Todas as associações estão adequadas."
        ],
        "dicaBanca": "Este tópico dialoga diretamente com o módulo anterior, Funções da Linguagem.",
        "pegadinha": "O elemento participa sempre do ato; a função indica qual deles ganha destaque.",
        "memorizar2026": "Emissor-emotiva | Receptor-conativa | Canal-fática | Código-metalinguística | Mensagem-poética | Referente-referencial.",
        "fonte": "Edital SEDUC-PA 2026; modelo funcional recorrente em provas FGV."
    },
    {
        "id": "SEDUC-LP-COM-016",
        "numero": 16,
        "subtopico": "Adequação do canal",
        "dificuldade": "alta",
        "pergunta": "Uma escola precisa comunicar imediatamente a suspensão das aulas da manhã a centenas de famílias. Entre as decisões abaixo, a mais coerente com a noção de adequação do ato comunicativo é",
        "alternativas": [
            "utilizar um canal oficial de amplo alcance e rapidez, com mensagem objetiva e identificação clara do emissor.",
            "empregar apenas um mural interno, mesmo sabendo que as famílias não estarão na escola antes do horário suspenso.",
            "usar linguagem técnica sem explicação para tornar o comunicado mais formal.",
            "omitir a identificação da escola para reduzir o tamanho da mensagem.",
            "substituir a informação objetiva por frases vagas para evitar preocupação."
        ],
        "correta": 0,
        "feedbackAcerto": "A escolha do canal deve considerar urgência, alcance, destinatário e confiabilidade; a mensagem também precisa ser clara.",
        "feedbackErro": "O ato comunicativo eficaz depende da articulação entre público, finalidade, canal, código e mensagem.",
        "analiseAlternativas": [
            "Correta. O canal e a formulação são adequados à urgência e ao público.",
            "Incorreta. O canal tem baixo alcance para a necessidade apresentada.",
            "Incorreta. Formalidade não justifica dificultar a compreensão.",
            "Incorreta. Identificação do emissor favorece credibilidade.",
            "Incorreta. Vagueza prejudica a finalidade informativa."
        ],
        "dicaBanca": "A FGV cobra adequação comunicativa considerando emissor, receptor, canal e intenção, e não apenas correção gramatical.",
        "pegadinha": "Canal correto depende do contexto; não existe um meio universalmente melhor.",
        "memorizar2026": "Canal adequado = compatível com finalidade, público, urgência e situação.",
        "fonte": "Edital SEDUC-PA 2026; FGV — questões sobre adequação à situação comunicativa."
    },
    {
        "id": "SEDUC-LP-COM-017",
        "numero": 17,
        "subtopico": "Ruído físico",
        "dificuldade": "media",
        "pergunta": "Durante uma reunião, uma obra ao lado da escola produz ruído intenso e impede que parte do público ouça a fala da diretora. Nesse caso, o ruído comunicativo",
        "alternativas": [
            "elimina o referente da mensagem.",
            "interfere no canal e dificulta que a mensagem chegue adequadamente ao receptor.",
            "transforma a língua portuguesa em outro código.",
            "faz do receptor o emissor.",
            "torna toda mensagem necessariamente ambígua."
        ],
        "correta": 1,
        "feedbackAcerto": "O barulho atua como interferência física sobre o canal sonoro.",
        "feedbackErro": "Ruído é qualquer interferência que prejudique a circulação ou interpretação da mensagem; aqui é claramente físico.",
        "analiseAlternativas": [
            "Incorreta. O assunto continua existindo.",
            "Correta. Há interferência na transmissão sonora.",
            "Incorreta. O código linguístico não muda.",
            "Incorreta. Os papéis comunicativos não se invertem por causa do barulho.",
            "Incorreta. Pode haver perda de informação sem ambiguidade."
        ],
        "dicaBanca": "Ruído pode ser físico, técnico ou até semântico; identifique sua origem no caso concreto.",
        "pegadinha": "Ruído de comunicação não significa apenas som alto.",
        "memorizar2026": "Ruído = interferência que dificulta transmissão ou compreensão.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de falhas no ato comunicativo."
    },
    {
        "id": "SEDUC-LP-COM-018",
        "numero": 18,
        "subtopico": "Ruído semântico / ambiguidade",
        "dificuldade": "alta",
        "pergunta": "Um aviso diz apenas: “O responsável deve procurar o banco amanhã”, sem contexto que esclareça se “banco” significa instituição financeira ou assento. A dificuldade decorre principalmente",
        "alternativas": [
            "da inexistência de canal.",
            "da ausência total de receptor.",
            "de ambiguidade semântica na mensagem, que pode funcionar como ruído para a interpretação.",
            "da impossibilidade de a língua portuguesa funcionar como código.",
            "de excesso de informação sobre o referente."
        ],
        "correta": 2,
        "feedbackAcerto": "A palavra polissêmica, sem contexto suficiente, abre duas interpretações e cria ruído semântico.",
        "feedbackErro": "A mensagem chegou e o código é conhecido; o problema é a falta de determinação suficiente do sentido.",
        "analiseAlternativas": [
            "Incorreta. A mensagem foi transmitida por algum meio.",
            "Incorreta. Há destinatário presumido.",
            "Correta. O sentido de 'banco' fica indeterminado.",
            "Incorreta. O código é compartilhado.",
            "Incorreta. O problema é insuficiência, não excesso, de contexto."
        ],
        "dicaBanca": "A FGV pode cruzar comunicação, polissemia e ambiguidade.",
        "pegadinha": "Conhecer todas as palavras não garante compreender a intenção da mensagem.",
        "memorizar2026": "Ruído semântico = interferência de sentido, como ambiguidade ou vocabulário inadequado.",
        "fonte": "Edital SEDUC-PA 2026; articulação com polissemia e ambiguidade previstas no mesmo programa."
    },
    {
        "id": "SEDUC-LP-COM-019",
        "numero": 19,
        "subtopico": "Dependência do contexto",
        "dificuldade": "alta",
        "pergunta": "A frase isolada “Ele conseguiu novamente” é pouco informativa para alguém que não participou da conversa anterior. Nesse caso, a dificuldade principal está",
        "alternativas": [
            "na falta de alfabeto.",
            "na inexistência de canal.",
            "na impossibilidade de identificar o emissor.",
            "na insuficiência de contexto/referente para recuperar quem é “ele” e o que foi conseguido.",
            "na ausência de sinais de pontuação."
        ],
        "correta": 3,
        "feedbackAcerto": "A frase é gramatical, mas depende de informações contextuais para determinar referentes e conteúdo.",
        "feedbackErro": "O problema não é formal; faltam dados do contexto compartilhado.",
        "analiseAlternativas": [
            "Incorreta. O alfabeto está presente.",
            "Incorreta. A frase foi recebida.",
            "Incorreta. Mesmo com emissor conhecido, a referência pode continuar obscura.",
            "Correta. O sentido depende de informações contextuais ausentes.",
            "Incorreta. A pontuação não resolve a referência."
        ],
        "dicaBanca": "A FGV costuma valorizar o referente e o contexto como condições de compreensão.",
        "pegadinha": "Frase gramaticalmente correta pode falhar comunicativamente.",
        "memorizar2026": "Correção gramatical ≠ suficiência comunicativa.",
        "fonte": "Edital SEDUC-PA 2026; FGV — importância do referente no ato de comunicação."
    },
    {
        "id": "SEDUC-LP-COM-020",
        "numero": 20,
        "subtopico": "Código multimodal",
        "dificuldade": "media",
        "pergunta": "Uma placa de trânsito combina cor, forma geométrica, pictograma e eventualmente palavras. Nesse ato comunicativo, é correto afirmar que",
        "alternativas": [
            "apenas as palavras constituem código; elementos visuais nunca codificam informação.",
            "o pictograma é o receptor da mensagem.",
            "a estrada é sempre o emissor.",
            "a placa não possui mensagem por não ser um texto exclusivamente verbal.",
            "o código pode ser multimodal, articulando sinais visuais e, quando presentes, sinais verbais."
        ],
        "correta": 4,
        "feedbackAcerto": "Código não precisa ser apenas verbal. Sistemas visuais também organizam signos convencionais capazes de produzir mensagem.",
        "feedbackErro": "Comunicação pode ocorrer por palavras, imagens, cores, gestos, sinais sonoros e combinações entre eles.",
        "analiseAlternativas": [
            "Incorreta. Sinais visuais podem integrar o código.",
            "Incorreta. Pictograma é signo, não destinatário.",
            "Incorreta. A estrada não produz a mensagem.",
            "Incorreta. Mensagens podem ser não verbais.",
            "Correta. A comunicação pode mobilizar diferentes sistemas de signos."
        ],
        "dicaBanca": "FGV trabalha textos verbais e não verbais; não reduza código à língua escrita.",
        "pegadinha": "Não verbal ≠ ausência de código.",
        "memorizar2026": "Código pode ser verbal, visual, gestual, sonoro ou multimodal.",
        "fonte": "Edital SEDUC-PA 2026; abordagem textual e comunicativa recorrente na FGV."
    },
    {
        "id": "SEDUC-LP-COM-021",
        "numero": 21,
        "subtopico": "Referente extratextual conhecido",
        "dificuldade": "alta",
        "pergunta": "Em uma conversa entre moradores que acabaram de presenciar uma forte chuva, alguém diz: “Isso alagou novamente a entrada da escola”, apontando para a água acumulada. O pronome “isso” remete",
        "alternativas": [
            "a um referente extratextual recuperado pela situação compartilhada e pelo gesto do falante.",
            "a uma palavra necessariamente escrita antes no mesmo período.",
            "ao canal por onde a mensagem circula.",
            "ao código da língua portuguesa.",
            "ao próprio receptor."
        ],
        "correta": 0,
        "feedbackAcerto": "O referente é identificado pela realidade presente na situação comunicativa, não por antecedente textual.",
        "feedbackErro": "O gesto e a experiência compartilhada fornecem a referência.",
        "analiseAlternativas": [
            "Correta. A referência depende do contexto extratextual.",
            "Incorreta. Não há antecedente verbal obrigatório.",
            "Incorreta. Não se trata do meio de transmissão.",
            "Incorreta. Não se trata do sistema de signos.",
            "Incorreta. O pronome aponta para uma situação, não para o destinatário."
        ],
        "dicaBanca": "A FGV já formulou questão específica sobre referente extratextual conhecido.",
        "pegadinha": "Pronomes demonstrativos podem apontar para texto ou situação; verifique onde o referente está.",
        "memorizar2026": "Extratextual = fora do texto, mas acessível pelo contexto.",
        "fonte": "Edital SEDUC-PA 2026; FGV/SME-SP — referente extratextual."
    },
    {
        "id": "SEDUC-LP-COM-022",
        "numero": 22,
        "subtopico": "Alternância de papéis",
        "dificuldade": "media",
        "pergunta": "Em um diálogo presencial, um professor pergunta “Qual foi sua dúvida?” e o estudante responde explicando o problema. Nessa interação, é correto afirmar que",
        "alternativas": [
            "o professor permanece receptor durante todo o diálogo.",
            "os papéis de emissor e receptor podem alternar-se à medida que os interlocutores tomam a palavra.",
            "o estudante nunca exerce função de emissor.",
            "o canal deixa de existir quando ocorre resposta.",
            "a mensagem permanece idêntica em todos os turnos."
        ],
        "correta": 1,
        "feedbackAcerto": "Em interações dialógicas, os interlocutores alternam os papéis de produção e recepção das mensagens.",
        "feedbackErro": "O modelo não precisa ser rígido ou unidirecional; em diálogo, quem recebe pode responder e tornar-se emissor.",
        "analiseAlternativas": [
            "Incorreta. O professor também emite a pergunta.",
            "Correta. Há alternância dos papéis comunicativos.",
            "Incorreta. O aluno emite sua resposta.",
            "Incorreta. O canal continua permitindo a interação.",
            "Incorreta. Cada turno produz uma nova mensagem."
        ],
        "dicaBanca": "Não trate comunicação interativa como simples envio unidirecional.",
        "pegadinha": "Emissor e receptor são papéis do ato comunicativo, não identidades fixas.",
        "memorizar2026": "No diálogo, emissor ↔ receptor podem alternar-se.",
        "fonte": "Edital SEDUC-PA 2026; abordagem interacional da comunicação."
    },
    {
        "id": "SEDUC-LP-COM-023",
        "numero": 23,
        "subtopico": "Canal x código",
        "dificuldade": "alta",
        "pergunta": "Uma professora envia pelo aplicativo da escola um áudio em língua portuguesa aos responsáveis. Nessa situação, a distinção correta é",
        "alternativas": [
            "aplicativo e língua portuguesa são ambos receptores.",
            "o áudio é sempre o referente e o aplicativo é o emissor.",
            "a língua portuguesa integra o código, enquanto o aplicativo/conexão funciona como canal de transmissão.",
            "o aplicativo é o código e a língua portuguesa é o canal.",
            "não há mensagem porque a comunicação não é escrita."
        ],
        "correta": 2,
        "feedbackAcerto": "O sistema linguístico usado para formar o conteúdo é o código; o meio tecnológico que transporta o áudio é canal.",
        "feedbackErro": "Pergunte: qual sistema de signos constrói a mensagem? E por qual meio ela chega ao destinatário?",
        "analiseAlternativas": [
            "Incorreta. São elementos de natureza diferente.",
            "Incorreta. O áudio contém/veicula a mensagem; o aplicativo não é emissor.",
            "Correta. Código e canal estão corretamente distinguidos.",
            "Incorreta. Os conceitos foram invertidos.",
            "Incorreta. Mensagem pode ser oral."
        ],
        "dicaBanca": "Código e canal são frequentemente confundidos em questões objetivas.",
        "pegadinha": "Português, Libras, pictogramas = códigos; telefone, papel, rádio, internet = canais/meios.",
        "memorizar2026": "Código constrói; canal transporta.",
        "fonte": "Edital SEDUC-PA 2026; FGV — diagnóstico de falhas de código e canal."
    },
    {
        "id": "SEDUC-LP-COM-024",
        "numero": 24,
        "subtopico": "Relação com funções da linguagem",
        "dificuldade": "alta",
        "pergunta": "Se uma mensagem usa a própria língua para explicar o significado de uma palavra, o elemento do ato comunicativo colocado em destaque e a função predominante são, respectivamente,",
        "alternativas": [
            "emissor e função emotiva.",
            "receptor e função conativa.",
            "canal e função fática.",
            "código e função metalinguística.",
            "referente e função poética."
        ],
        "correta": 3,
        "feedbackAcerto": "Quando o código é objeto da própria mensagem, predomina a função metalinguística.",
        "feedbackErro": "Lembre a associação do tópico anterior: metalinguística focaliza o código.",
        "analiseAlternativas": [
            "Incorreta. Emotiva focaliza o emissor.",
            "Incorreta. Conativa focaliza o receptor.",
            "Incorreta. Fática focaliza o canal.",
            "Correta. Código ↔ função metalinguística.",
            "Incorreta. Poética focaliza a própria mensagem."
        ],
        "dicaBanca": "A sequência do edital aproxima propositalmente Funções da Linguagem e Elementos dos Atos de Comunicação.",
        "pegadinha": "Referente é foco da função referencial; mensagem é foco da poética.",
        "memorizar2026": "Código em destaque → função metalinguística.",
        "fonte": "Edital SEDUC-PA 2026; relação entre elementos do ato comunicativo e funções da linguagem."
    },
    {
        "id": "SEDUC-LP-COM-025",
        "numero": 25,
        "subtopico": "Caso integrador",
        "dificuldade": "alta",
        "pergunta": "A direção grava um vídeo curto, em português, explicando aos responsáveis que a entrada dos estudantes ocorrerá uma hora mais tarde por causa de uma manutenção. O vídeo é publicado no canal oficial da escola. A análise correta dos elementos desse ato comunicativo é",
        "alternativas": [
            "emissor = responsáveis; receptor = direção; código = manutenção; referente = português.",
            "emissor = vídeo; receptor = aplicativo; mensagem = responsáveis; canal = língua portuguesa.",
            "emissor = manutenção; receptor = estudantes; código = horário; mensagem = aplicativo.",
            "emissor = direção; receptor = língua portuguesa; mensagem = vídeo; referente = canal oficial.",
            "emissor = direção; receptores = responsáveis; mensagem = aviso sobre a alteração de horário; código = língua portuguesa e recursos audiovisuais; canal = meio digital oficial; referente = mudança da entrada causada pela manutenção."
        ],
        "correta": 4,
        "feedbackAcerto": "A alternativa organiza adequadamente participantes, conteúdo, sistema de signos, meio de transmissão e situação/assunto.",
        "feedbackErro": "Analise elemento por elemento: quem envia? quem recebe? o que é comunicado? em que código? por qual meio? sobre qual realidade?",
        "analiseAlternativas": [
            "Incorreta. Papéis e conceitos estão trocados.",
            "Incorreta. Vídeo e aplicativo são meios/suportes, não os participantes.",
            "Incorreta. A manutenção é parte do referente, não emissor.",
            "Incorreta. Língua portuguesa é código, não receptor.",
            "Correta. Todos os elementos foram corretamente identificados."
        ],
        "dicaBanca": "Questões integradoras são boas candidatas à FGV porque exigem distinguir vários elementos em uma situação concreta.",
        "pegadinha": "Não confunda suporte, canal e mensagem; observe a função de cada elemento no caso apresentado.",
        "memorizar2026": "Quem envia? → emissor | quem recebe? → receptor | o quê? → mensagem | em que sistema? → código | por onde? → canal | sobre quê? → referente.",
        "fonte": "Edital SEDUC-PA 2026; FGV/SME-SP — referente e falhas no ato comunicativo."
    }
];

    window.seducLinguaPortuguesaElementosAtosComunicacao2026 = banco;
})();
