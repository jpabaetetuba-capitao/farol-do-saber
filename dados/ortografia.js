const ortografia = [
    {
        "pergunta": "Em um relatório escolar, assinale a alternativa em que todas as palavras estão grafadas de acordo com a norma ortográfica vigente.",
        "alternativas": [
            "exceção, privilégio, pesquisa, análise e autorização.",
            "excessão, privilégio, pesquisa, análise e autorização.",
            "exceção, previlégio, pesquisa, análise e autorização.",
            "exceção, privilégio, pesquiza, análise e autorização.",
            "exceção, privilégio, pesquisa, análize e autorização."
        ],
        "correta": 0,
        "explicacao": "As formas corretas são exceção, privilégio, pesquisa, análise e autorização.",
        "feedbackAcerto": "Correto. As formas corretas são exceção, privilégio, pesquisa, análise e autorização.",
        "feedbackErro": "A resposta correta é a alternativa A. As formas corretas são exceção, privilégio, pesquisa, análise e autorização.",
        "dicaBanca": "Observe palavras de alta frequência em provas e compare-as com sua família lexical."
    },
    {
        "pergunta": "Um diretor registrou que o atendimento inadequado provocou desconforto nos usuários. Assinale a redação ortograficamente correta.",
        "alternativas": [
            "O mal atendimento provocou mau-estar nos usuários.",
            "O mau atendimento provocou mal-estar nos usuários.",
            "O mau atendimento provocou mau-estar nos usuários.",
            "O mal atendimento provocou mal-estar nos usuários.",
            "O mau atendimento provocou mal estar nos usuários."
        ],
        "correta": 1,
        "explicacao": "Mau é adjetivo e se opõe a bom; mal-estar é substantivo composto grafado com hífen.",
        "feedbackAcerto": "Correto. Mau é adjetivo e se opõe a bom; mal-estar é substantivo composto grafado com hífen.",
        "feedbackErro": "A resposta correta é a alternativa B. Mau é adjetivo e se opõe a bom; mal-estar é substantivo composto grafado com hífen.",
        "dicaBanca": "Teste mau por bom e mal por bem; depois verifique se a expressão composta exige hífen."
    },
    {
        "pergunta": "Em uma pergunta indireta inserida em ata, qual forma completa corretamente a lacuna? “A comissão não explicou ___ o prazo foi alterado.”",
        "alternativas": [
            "porque",
            "porquê",
            "por que",
            "por quê",
            "o porquê"
        ],
        "correta": 2,
        "explicacao": "Em pergunta indireta com sentido de 'por qual razão', emprega-se por que, separado e sem acento.",
        "feedbackAcerto": "Correto. Em pergunta indireta com sentido de 'por qual razão', emprega-se por que, separado e sem acento.",
        "feedbackErro": "A resposta correta é a alternativa C. Em pergunta indireta com sentido de 'por qual razão', emprega-se por que, separado e sem acento.",
        "dicaBanca": "Substitua mentalmente a expressão por 'por qual razão'."
    },
    {
        "pergunta": "Após a alteração do calendário, um servidor perguntou pela razão da mudança. Assinale a forma ortograficamente adequada para encerrar a pergunta direta.",
        "alternativas": [
            "A reunião foi adiada por que?",
            "A reunião foi adiada porque?",
            "A reunião foi adiada porquê?",
            "A reunião foi adiada por quê?",
            "A reunião foi adiada o porquê?"
        ],
        "correta": 3,
        "explicacao": "No fim de uma pergunta direta, a sequência é grafada por quê, separada e com acento.",
        "feedbackAcerto": "Correto. No fim de uma pergunta direta, a sequência é grafada por quê, separada e com acento.",
        "feedbackErro": "A resposta correta é a alternativa D. No fim de uma pergunta direta, a sequência é grafada por quê, separada e com acento.",
        "dicaBanca": "Quando 'por que' aparece imediatamente antes de pausa forte ou no fim da frase, observe a tonicidade de 'quê'."
    },
    {
        "pergunta": "Assinale a alternativa em que o emprego de “porquê” está correto.",
        "alternativas": [
            "A direção não explicou porquê cancelou a reunião.",
            "Ninguém entendeu por quê a reunião foi cancelada.",
            "Os alunos perguntaram o porquê a aula terminou cedo.",
            "A coordenação informou por quê modificaria o cronograma.",
            "O conselho discutiu o porquê da alteração do calendário."
        ],
        "correta": 4,
        "explicacao": "Porquê é substantivo, significa 'motivo' e costuma vir acompanhado de determinante: o porquê da alteração.",
        "feedbackAcerto": "Correto. Porquê é substantivo, significa 'motivo' e costuma vir acompanhado de determinante: o porquê da alteração.",
        "feedbackErro": "A resposta correta é a alternativa E. Porquê é substantivo, significa 'motivo' e costuma vir acompanhado de determinante: o porquê da alteração.",
        "dicaBanca": "Procure um artigo ou outro determinante antes da palavra; isso costuma sinalizar o substantivo."
    },
    {
        "pergunta": "Assinale a frase em que “onde” e “aonde” foram empregados adequadamente.",
        "alternativas": [
            "Não sei onde o diretor pretende chegar com essa proposta.",
            "Aonde fica a secretaria em que entregaremos os documentos?",
            "Onde você vai depois da reunião pedagógica?",
            "A escola aonde trabalho receberá novos computadores.",
            "Não sabemos aonde estão arquivadas as atas."
        ],
        "correta": 0,
        "explicacao": "Onde indica permanência/localização; aonde é usado com verbos que exigem a preposição a e exprimem movimento para um destino. Em 'onde fica', há localização.",
        "feedbackAcerto": "Correto. Onde indica permanência/localização; aonde é usado com verbos que exigem a preposição a e exprimem movimento para um destino. Em 'onde fica', há localização.",
        "feedbackErro": "A resposta correta é a alternativa A. Onde indica permanência/localização; aonde é usado com verbos que exigem a preposição a e exprimem movimento para um destino. Em 'onde fica', há localização.",
        "dicaBanca": "Observe a regência do verbo e pergunte se há ideia de destino ou de permanência."
    },
    {
        "pergunta": "Em qual alternativa as formas “há” e “a” estão corretamente empregadas?",
        "alternativas": [
            "O curso começou a três meses e terminará há duas semanas.",
            "O curso começou há três meses e terminará daqui a duas semanas.",
            "O curso começou há três meses e terminará daqui há duas semanas.",
            "O curso começou a três meses e terminará daqui a duas semanas.",
            "O curso começou há três meses e terminará a duas semanas atrás."
        ],
        "correta": 1,
        "explicacao": "Há indica tempo decorrido; a, em construções como 'daqui a', indica tempo futuro.",
        "feedbackAcerto": "Correto. Há indica tempo decorrido; a, em construções como 'daqui a', indica tempo futuro.",
        "feedbackErro": "A resposta correta é a alternativa B. Há indica tempo decorrido; a, em construções como 'daqui a', indica tempo futuro.",
        "dicaBanca": "Tempo passado decorrido admite 'há'; tempo futuro em 'daqui a' usa a preposição a."
    },
    {
        "pergunta": "Assinale a alternativa correta quanto às expressões “acerca de”, “a cerca de” e “há cerca de”.",
        "alternativas": [
            "A reunião ocorreu acerca de duas horas e tratou há cerca de inclusão escolar.",
            "A escola fica há cerca de dois quilômetros do centro e debateu a cerca de avaliações.",
            "O relatório trata acerca de inclusão e foi concluído há cerca de duas semanas.",
            "O relatório trata a cerca de inclusão e foi concluído acerca de duas semanas.",
            "O relatório trata há cerca de inclusão e foi concluído a cerca de duas semanas."
        ],
        "correta": 2,
        "explicacao": "Acerca de significa 'sobre'; há cerca de indica tempo passado aproximado.",
        "feedbackAcerto": "Correto. Acerca de significa 'sobre'; há cerca de indica tempo passado aproximado.",
        "feedbackErro": "A resposta correta é a alternativa C. Acerca de significa 'sobre'; há cerca de indica tempo passado aproximado.",
        "dicaBanca": "Troque 'acerca de' por 'sobre' e 'há cerca de' por 'faz aproximadamente'."
    },
    {
        "pergunta": "Em um comunicado, a expressão destacada deve indicar finalidade. Qual alternativa está correta?",
        "alternativas": [
            "A reunião foi convocada afim de revisar o regulamento.",
            "A reunião foi convocada à fim de revisar o regulamento.",
            "A reunião foi convocada a-fim de revisar o regulamento.",
            "A reunião foi convocada a fim de revisar o regulamento.",
            "A reunião foi convocada afim à revisar o regulamento."
        ],
        "correta": 3,
        "explicacao": "A fim de é locução prepositiva que expressa finalidade. Afim é adjetivo e significa semelhante ou relacionado.",
        "feedbackAcerto": "Correto. A fim de é locução prepositiva que expressa finalidade. Afim é adjetivo e significa semelhante ou relacionado.",
        "feedbackErro": "A resposta correta é a alternativa D. A fim de é locução prepositiva que expressa finalidade. Afim é adjetivo e significa semelhante ou relacionado.",
        "dicaBanca": "Se a expressão puder ser substituída por 'para', use a fim de."
    },
    {
        "pergunta": "Assinale a frase em que “senão” e “se não” foram empregados de acordo com o sentido.",
        "alternativas": [
            "Senão houver recurso, o resultado será homologado.",
            "O candidato não fez outra coisa se não reclamar.",
            "A equipe não tinha alternativa se não adiar a reunião.",
            "Se não significa 'caso contrário' em qualquer contexto.",
            "Se não houver recurso, o resultado será homologado."
        ],
        "correta": 4,
        "explicacao": "Se não corresponde a 'caso não' em uma oração condicional: 'Se não houver recurso...'.",
        "feedbackAcerto": "Correto. Se não corresponde a 'caso não' em uma oração condicional: 'Se não houver recurso...'.",
        "feedbackErro": "A resposta correta é a alternativa E. Se não corresponde a 'caso não' em uma oração condicional: 'Se não houver recurso...'.",
        "dicaBanca": "Verifique se é possível separar a conjunção condicional 'se' do advérbio de negação 'não'."
    },
    {
        "pergunta": "Um parecer afirma que a nova medida está de acordo com os objetivos do projeto. Qual expressão reproduz esse sentido?",
        "alternativas": [
            "A medida vai ao encontro dos objetivos do projeto.",
            "A medida vai de encontro aos objetivos do projeto.",
            "A medida vai ao encontro contra os objetivos do projeto.",
            "A medida vai de encontro com os objetivos do projeto.",
            "A medida vai em encontro aos objetivos do projeto."
        ],
        "correta": 0,
        "explicacao": "Ir ao encontro de significa concordar, favorecer ou corresponder; ir de encontro a significa colidir ou contrariar.",
        "feedbackAcerto": "Correto. Ir ao encontro de significa concordar, favorecer ou corresponder; ir de encontro a significa colidir ou contrariar.",
        "feedbackErro": "A resposta correta é a alternativa A. Ir ao encontro de significa concordar, favorecer ou corresponder; ir de encontro a significa colidir ou contrariar.",
        "dicaBanca": "Associe 'ao encontro de' a aproximação/concordância e 'de encontro a' a choque/oposição."
    },
    {
        "pergunta": "Assinale a alternativa em que todas as expressões estão grafadas corretamente.",
        "alternativas": [
            "derrepente, à partir, porisso, com certeza.",
            "de repente, a partir, por isso, com certeza.",
            "de-repente, a partir, por isso, concerteza.",
            "de repente, apartir, por-isso, comcerteza.",
            "derrepente, a-partir, por isso, com certeza."
        ],
        "correta": 1,
        "explicacao": "As formas normativas são de repente, a partir, por isso e com certeza.",
        "feedbackAcerto": "Correto. As formas normativas são de repente, a partir, por isso e com certeza.",
        "feedbackErro": "A resposta correta é a alternativa B. As formas normativas são de repente, a partir, por isso e com certeza.",
        "dicaBanca": "Muitas expressões frequentes são grafadas separadamente, embora a fala possa sugerir união."
    },
    {
        "pergunta": "Assinale a alternativa em que as duas formas estão grafadas corretamente.",
        "alternativas": [
            "bem vindo e bem-estar.",
            "bem-vindo e bem estar.",
            "bem-vindo e bem-estar.",
            "benvindo e bem-estar.",
            "bemvindo e bemestar."
        ],
        "correta": 2,
        "explicacao": "Bem-vindo e bem-estar são grafados com hífen.",
        "feedbackAcerto": "Correto. Bem-vindo e bem-estar são grafados com hífen.",
        "feedbackErro": "A resposta correta é a alternativa C. Bem-vindo e bem-estar são grafados com hífen.",
        "dicaBanca": "Palavras formadas com bem- conservam hífen em diversos compostos lexicalizados; confirme a forma consagrada."
    },
    {
        "pergunta": "Assinale a alternativa em que o par de palavras está adequado ao contexto.",
        "alternativas": [
            "O servidor fez a discrição minuciosa dos fatos e agiu com descrição durante a apuração.",
            "O servidor fez a descrissão dos fatos e agiu com discrição durante a apuração.",
            "O servidor fez a descrição dos fatos e agiu com descrição durante a apuração.",
            "O servidor fez a descrição minuciosa dos fatos e agiu com discrição durante a apuração.",
            "O servidor fez a discrissão dos fatos e agiu com descrição durante a apuração."
        ],
        "correta": 3,
        "explicacao": "Descrição é o ato de descrever; discrição significa reserva, prudência ou sobriedade.",
        "feedbackAcerto": "Correto. Descrição é o ato de descrever; discrição significa reserva, prudência ou sobriedade.",
        "feedbackErro": "A resposta correta é a alternativa D. Descrição é o ato de descrever; discrição significa reserva, prudência ou sobriedade.",
        "dicaBanca": "Parônimos exigem atenção ao significado, não só à semelhança sonora."
    },
    {
        "pergunta": "Uma instituição cedeu temporariamente uma sala para a aplicação de prova. Assinale a frase correta.",
        "alternativas": [
            "A seção da sala foi autorizada pela direção.",
            "A sessão da sala foi autorizada pela direção.",
            "A ceção da sala foi autorizada pela direção.",
            "A sesão da sala foi autorizada pela direção.",
            "A cessão da sala foi autorizada pela direção."
        ],
        "correta": 4,
        "explicacao": "Cessão significa ato de ceder. Seção é divisão ou setor; sessão é reunião, período ou encontro.",
        "feedbackAcerto": "Correto. Cessão significa ato de ceder. Seção é divisão ou setor; sessão é reunião, período ou encontro.",
        "feedbackErro": "A resposta correta é a alternativa E. Cessão significa ato de ceder. Seção é divisão ou setor; sessão é reunião, período ou encontro.",
        "dicaBanca": "Associe cessão ao verbo ceder."
    },
    {
        "pergunta": "Em um comunicado, qual alternativa diferencia corretamente “sessão”, “seção” e “cessão”?",
        "alternativas": [
            "A sessão pedagógica ocorrerá na seção de formação, após a cessão do auditório pela direção.",
            "A seção pedagógica ocorrerá na sessão de formação, após a cessão do auditório pela direção.",
            "A cessão pedagógica ocorrerá na seção de formação, após a sessão do auditório pela direção.",
            "A sessão pedagógica ocorrerá na cessão de formação, após a seção do auditório pela direção.",
            "A sessão pedagógica ocorrerá na seção de formação, após a seção do auditório pela direção."
        ],
        "correta": 0,
        "explicacao": "Sessão designa reunião; seção, setor ou divisão; cessão, ato de ceder.",
        "feedbackAcerto": "Correto. Sessão designa reunião; seção, setor ou divisão; cessão, ato de ceder.",
        "feedbackErro": "A resposta correta é a alternativa A. Sessão designa reunião; seção, setor ou divisão; cessão, ato de ceder.",
        "dicaBanca": "Relacione cada grafia ao seu núcleo de sentido: reunião, divisão e ato de ceder."
    },
    {
        "pergunta": "Assinale a alternativa correta quanto ao emprego de “ratificar” e “retificar”.",
        "alternativas": [
            "A comissão retificou o resultado, confirmando-o sem qualquer alteração.",
            "A comissão ratificou o resultado, confirmando-o; depois retificou um nome grafado incorretamente.",
            "A comissão ratificou o nome errado, corrigindo sua grafia.",
            "A comissão retificou a decisão anterior, confirmando-a integralmente e sem modificar nenhum dado publicado.",
            "A comissão ratificou o documento para substituir um dado incorreto."
        ],
        "correta": 1,
        "explicacao": "Ratificar significa confirmar; retificar significa corrigir ou tornar reto/certo.",
        "feedbackAcerto": "Correto. Ratificar significa confirmar; retificar significa corrigir ou tornar reto/certo.",
        "feedbackErro": "A resposta correta é a alternativa B. Ratificar significa confirmar; retificar significa corrigir ou tornar reto/certo.",
        "dicaBanca": "Se o sentido for confirmar, pense em ratificar; se for corrigir, retificar."
    },
    {
        "pergunta": "Em qual alternativa “eminente” e “iminente” estão empregados corretamente?",
        "alternativas": [
            "O risco eminente de queda levou à evacuação, e o palestrante iminente abriu o evento.",
            "O risco eminente de queda levou à evacuação, e o eminente pesquisador abriu o evento.",
            "O risco iminente de queda levou à evacuação, e o eminente pesquisador abriu o evento.",
            "O risco iminente de queda levou à evacuação, e o iminente pesquisador abriu o evento.",
            "O risco eminente de queda levou à evacuação, e o pesquisador eminete abriu o evento."
        ],
        "correta": 2,
        "explicacao": "Iminente significa prestes a acontecer; eminente significa elevado, ilustre ou destacado.",
        "feedbackAcerto": "Correto. Iminente significa prestes a acontecer; eminente significa elevado, ilustre ou destacado.",
        "feedbackErro": "A resposta correta é a alternativa C. Iminente significa prestes a acontecer; eminente significa elevado, ilustre ou destacado.",
        "dicaBanca": "Associe iminente a proximidade temporal e eminente a destaque ou prestígio."
    },
    {
        "pergunta": "Assinale a alternativa em que “comprimento” e “cumprimento” estão adequados ao contexto.",
        "alternativas": [
            "O cumprimento da mesa foi medido antes do evento, e o comprimento das normas foi exigido.",
            "O comprimento da mesa foi medido antes do evento, e o comprimento das normas foi exigido.",
            "O cumprimento da mesa foi medido antes do evento, e o cumprimento das normas foi exigido.",
            "O comprimento da mesa foi medido antes do evento, e o cumprimento das normas foi exigido.",
            "O conprimento da mesa foi medido, e o cumprimento das normas foi exigido."
        ],
        "correta": 3,
        "explicacao": "Comprimento refere-se a extensão; cumprimento pode significar execução de obrigação ou saudação.",
        "feedbackAcerto": "Correto. Comprimento refere-se a extensão; cumprimento pode significar execução de obrigação ou saudação.",
        "feedbackErro": "A resposta correta é a alternativa D. Comprimento refere-se a extensão; cumprimento pode significar execução de obrigação ou saudação.",
        "dicaBanca": "Relacione comprimento a medida e cumprimento ao verbo cumprir."
    },
    {
        "pergunta": "Assinale a frase em que “mandado” e “mandato” estão corretamente empregados.",
        "alternativas": [
            "O juiz expediu um mandato de segurança, e o prefeito iniciou novo mandado.",
            "O juiz expediu um mandado de segurança, e o prefeito iniciou novo mandado.",
            "O juiz expediu um mandato de segurança, e o prefeito iniciou novo mandato.",
            "O juiz expediu um mandatto de segurança, e o prefeito iniciou novo mandato.",
            "O juiz expediu um mandado de segurança, e o prefeito iniciou novo mandato."
        ],
        "correta": 4,
        "explicacao": "Mandado é ordem ou determinação formal; mandato é período ou poder conferido para exercer função.",
        "feedbackAcerto": "Correto. Mandado é ordem ou determinação formal; mandato é período ou poder conferido para exercer função.",
        "feedbackErro": "A resposta correta é a alternativa E. Mandado é ordem ou determinação formal; mandato é período ou poder conferido para exercer função.",
        "dicaBanca": "Associe mandado a ordem e mandato a exercício de cargo ou representação."
    },
    {
        "pergunta": "Em uma notícia sobre mobilidade urbana, qual alternativa está correta?",
        "alternativas": [
            "O tráfego de veículos aumentou, enquanto a polícia investigava o tráfico de mercadorias ilícitas.",
            "O tráfico de veículos aumentou, enquanto a polícia investigava o tráfego de mercadorias ilícitas.",
            "O tráfego de veículos aumentou, enquanto a polícia investigava o tráfego de mercadorias ilícitas.",
            "O tráfico de veículos aumentou, enquanto a polícia investigava o tráfico de mercadorias ilícitas.",
            "O tráfeco de veículos aumentou, enquanto a polícia investigava o tráfico de mercadorias ilícitas."
        ],
        "correta": 0,
        "explicacao": "Tráfego relaciona-se à circulação; tráfico refere-se a comércio ou atividade ilícita.",
        "feedbackAcerto": "Correto. Tráfego relaciona-se à circulação; tráfico refere-se a comércio ou atividade ilícita.",
        "feedbackErro": "A resposta correta é a alternativa A. Tráfego relaciona-se à circulação; tráfico refere-se a comércio ou atividade ilícita.",
        "dicaBanca": "Observe o campo semântico: circulação de veículos versus comércio ilícito."
    },
    {
        "pergunta": "Assinale a alternativa que completa corretamente: “Durante a cerimônia, o coral apresentou um ___; depois, a equipe realizou o ___ do equipamento defeituoso.”",
        "alternativas": [
            "conserto / concerto",
            "concerto / conserto",
            "concerto / concerto",
            "conserto / conserto",
            "conçerto / conserto"
        ],
        "correta": 1,
        "explicacao": "Concerto pode designar apresentação musical; conserto significa reparo.",
        "feedbackAcerto": "Correto. Concerto pode designar apresentação musical; conserto significa reparo.",
        "feedbackErro": "A resposta correta é a alternativa B. Concerto pode designar apresentação musical; conserto significa reparo.",
        "dicaBanca": "Associe concerto à música e conserto à reparação."
    },
    {
        "pergunta": "Em qual alternativa “viagem” e “viajem” estão corretamente empregadas?",
        "alternativas": [
            "Espero que os professores viagem amanhã; a viajem está prevista no calendário.",
            "Espero que os professores viajem amanhã; a viajem está prevista no calendário.",
            "Espero que os professores viajem amanhã; a viagem está prevista no calendário.",
            "Espero que os professores viagem amanhã; a viagem está prevista no calendário.",
            "Espero que os professores viajém amanhã; a viagem está prevista no calendário."
        ],
        "correta": 2,
        "explicacao": "Viagem é substantivo; viajem é forma verbal do verbo viajar.",
        "feedbackAcerto": "Correto. Viagem é substantivo; viajem é forma verbal do verbo viajar.",
        "feedbackErro": "A resposta correta é a alternativa C. Viagem é substantivo; viajem é forma verbal do verbo viajar.",
        "dicaBanca": "Observe se a palavra nomeia o deslocamento ou exprime a ação verbal."
    },
    {
        "pergunta": "Assinale a frase em que “deferir” e “diferir” estão corretamente empregados.",
        "alternativas": [
            "A comissão decidiu diferir o pedido, embora reconhecesse que ele atendia plenamente aos requisitos previstos.",
            "A comissão decidiu deferir o pedido; sua fundamentação deferia da apresentada no recurso.",
            "A comissão decidiu diferir o pedido; sua fundamentação deferia da apresentada no recurso.",
            "A comissão decidiu deferir o pedido; sua fundamentação, porém, diferia da apresentada no recurso.",
            "A comissão decidiu deferir o pedido; sua fundamentação diferia à apresentada no recurso."
        ],
        "correta": 3,
        "explicacao": "Deferir significa conceder ou atender; diferir pode significar distinguir-se ou adiar.",
        "feedbackAcerto": "Correto. Deferir significa conceder ou atender; diferir pode significar distinguir-se ou adiar.",
        "feedbackErro": "A resposta correta é a alternativa D. Deferir significa conceder ou atender; diferir pode significar distinguir-se ou adiar.",
        "dicaBanca": "Em processos, deferir costuma significar conceder; diferir pode equivaler a ser diferente."
    },
    {
        "pergunta": "Em qual alternativa “acender” e “ascender” foram empregados corretamente?",
        "alternativas": [
            "O técnico mandou ascender as luzes, enquanto a servidora buscava acender na carreira.",
            "O técnico mandou acender as luzes, enquanto a servidora buscava acender na carreira.",
            "O técnico mandou ascender as luzes, enquanto a servidora buscava ascender na carreira.",
            "O técnico mandou assender as luzes, enquanto a servidora buscava ascender na carreira.",
            "O técnico mandou acender as luzes, enquanto a servidora buscava ascender na carreira."
        ],
        "correta": 4,
        "explicacao": "Acender significa ligar ou pôr fogo; ascender significa subir ou elevar-se.",
        "feedbackAcerto": "Correto. Acender significa ligar ou pôr fogo; ascender significa subir ou elevar-se.",
        "feedbackErro": "A resposta correta é a alternativa E. Acender significa ligar ou pôr fogo; ascender significa subir ou elevar-se.",
        "dicaBanca": "Associe acender a luz/fogo e ascender a subida."
    },
    {
        "pergunta": "Assinale a alternativa em que todas as palavras estão grafadas corretamente.",
        "alternativas": [
            "empecilho, beneficente, reivindicação, espontâneo.",
            "impecilho, beneficiente, reinvindicação, espontâneo.",
            "empecilho, beneficiente, reivindicação, expontâneo.",
            "impecilho, beneficente, reinvindicação, espontâneo.",
            "empecilho, beneficente, reinvindicação, expontâneo."
        ],
        "correta": 0,
        "explicacao": "As grafias normativas são empecilho, beneficente, reivindicação e espontâneo.",
        "feedbackAcerto": "Correto. As grafias normativas são empecilho, beneficente, reivindicação e espontâneo.",
        "feedbackErro": "A resposta correta é a alternativa A. As grafias normativas são empecilho, beneficente, reivindicação e espontâneo.",
        "dicaBanca": "Desconfie de formas contaminadas pela pronúncia popular, como 'reinvindicação'."
    },
    {
        "pergunta": "Qual alternativa contém todas as formas ortográficas corretas no contexto apresentado?",
        "alternativas": [
            "excessão, suscetível, conciência, fascínio.",
            "exceção, suscetível, consciência, fascínio.",
            "exceção, sucetível, consciência, facínio.",
            "exceção, suscetível, consiência, fascínio.",
            "excessão, suscetível, consciência, facínio."
        ],
        "correta": 1,
        "explicacao": "Exceção, suscetível, consciência e fascínio são as grafias corretas.",
        "feedbackAcerto": "Correto. Exceção, suscetível, consciência e fascínio são as grafias corretas.",
        "feedbackErro": "A resposta correta é a alternativa B. Exceção, suscetível, consciência e fascínio são as grafias corretas.",
        "dicaBanca": "Observe encontros consonantais e sequências gráficas que costumam ser simplificadas na fala."
    },
    {
        "pergunta": "Assinale a alternativa em que a grafia das palavras com G ou J está correta.",
        "alternativas": [
            "A equipe fez uma viajem e registrou a paisajem do local.",
            "A equipe fez uma viagem e registrou a paizagem do local.",
            "A equipe fez uma viagem e registrou a paisagem do local.",
            "A equipe fez uma viajem e registrou a paisagem do local.",
            "A equipe fez uma viagem e registrou a paisajem do local."
        ],
        "correta": 2,
        "explicacao": "Viagem e paisagem, como substantivos terminados em -agem, são grafados com g.",
        "feedbackAcerto": "Correto. Viagem e paisagem, como substantivos terminados em -agem, são grafados com g.",
        "feedbackErro": "A resposta correta é a alternativa C. Viagem e paisagem, como substantivos terminados em -agem, são grafados com g.",
        "dicaBanca": "Compare com formas verbais em -jem, como 'que eles viajem'."
    },
    {
        "pergunta": "Assinale a alternativa em que as palavras com X ou CH estão corretamente grafadas.",
        "alternativas": [
            "enchergar, mexer, enxame, xícara.",
            "enxergar, mecher, enxame, xícara.",
            "enxergar, mexer, enchame, chícara.",
            "enxergar, mexer, enxame, xícara.",
            "enchergar, mecher, enxame, chícara."
        ],
        "correta": 3,
        "explicacao": "As grafias corretas são enxergar, mexer, enxame e xícara.",
        "feedbackAcerto": "Correto. As grafias corretas são enxergar, mexer, enxame e xícara.",
        "feedbackErro": "A resposta correta é a alternativa D. As grafias corretas são enxergar, mexer, enxame e xícara.",
        "dicaBanca": "Em palavras de grafia irregular, a memória visual e a família lexical ajudam a confirmar a forma."
    },
    {
        "pergunta": "Assinale a alternativa em que todas as palavras estão corretamente grafadas com S, SS, C ou Ç.",
        "alternativas": [
            "proceso, excessão, nescessário, concessão.",
            "processo, exceção, nescessário, conceção.",
            "proceço, exceção, necessário, concssão.",
            "processo, excessão, necessário, conceção.",
            "processo, exceção, necessário, concessão."
        ],
        "correta": 4,
        "explicacao": "Processo, exceção, necessário e concessão estão de acordo com a ortografia vigente.",
        "feedbackAcerto": "Correto. Processo, exceção, necessário e concessão estão de acordo com a ortografia vigente.",
        "feedbackErro": "A resposta correta é a alternativa E. Processo, exceção, necessário e concessão estão de acordo com a ortografia vigente.",
        "dicaBanca": "Não confie apenas no som /s/: ele pode corresponder a diferentes grafemas."
    },
    {
        "pergunta": "Segundo o Acordo Ortográfico, assinale a alternativa em que o hífen está empregado corretamente.",
        "alternativas": [
            "micro-ondas e anti-inflamatório.",
            "microondas e antiinflamatório.",
            "micro-ondas e antiinflamatório.",
            "microondas e anti-inflamatório.",
            "micro ondas e anti inflamatório."
        ],
        "correta": 0,
        "explicacao": "Usa-se hífen quando o prefixo termina com a mesma vogal que inicia o segundo elemento: micro-ondas, anti-inflamatório.",
        "feedbackAcerto": "Correto. Usa-se hífen quando o prefixo termina com a mesma vogal que inicia o segundo elemento: micro-ondas, anti-inflamatório.",
        "feedbackErro": "A resposta correta é a alternativa A. Usa-se hífen quando o prefixo termina com a mesma vogal que inicia o segundo elemento: micro-ondas, anti-inflamatório.",
        "dicaBanca": "Compare a vogal final do prefixo com a vogal inicial do segundo elemento."
    },
    {
        "pergunta": "Assinale a alternativa correta quanto ao emprego do hífen com prefixos.",
        "alternativas": [
            "auto-escola, infra-estrutura, semi-aberto.",
            "autoescola, infraestrutura, semiaberto.",
            "auto escola, infra estrutura, semi-aberto.",
            "autoescola, infra-estrutura, semi aberto.",
            "auto-escola, infraestrutura, semiaberto."
        ],
        "correta": 1,
        "explicacao": "Com prefixo terminado em vogal seguido de palavra iniciada por vogal diferente, em regra não se usa hífen: autoescola, infraestrutura, semiaberto.",
        "feedbackAcerto": "Correto. Com prefixo terminado em vogal seguido de palavra iniciada por vogal diferente, em regra não se usa hífen: autoescola, infraestrutura, semiaberto.",
        "feedbackErro": "A resposta correta é a alternativa B. Com prefixo terminado em vogal seguido de palavra iniciada por vogal diferente, em regra não se usa hífen: autoescola, infraestrutura, semiaberto.",
        "dicaBanca": "Vogais diferentes após o prefixo tendem a se unir sem hífen."
    },
    {
        "pergunta": "Em qual alternativa o hífen está corretamente empregado diante de H?",
        "alternativas": [
            "antihigiênico, superhomem, préhistória.",
            "anti higiênico, super-homem, préhistória.",
            "anti-higiênico, super-homem, pré-história.",
            "antihigiênico, super-homem e pré-história.",
            "anti-higiênico, superhomem, pré-história."
        ],
        "correta": 2,
        "explicacao": "Em formações prefixais, emprega-se hífen diante de palavra iniciada por h: anti-higiênico, super-homem, pré-história.",
        "feedbackAcerto": "Correto. Em formações prefixais, emprega-se hífen diante de palavra iniciada por h: anti-higiênico, super-homem, pré-história.",
        "feedbackErro": "A resposta correta é a alternativa C. Em formações prefixais, emprega-se hífen diante de palavra iniciada por h: anti-higiênico, super-homem, pré-história.",
        "dicaBanca": "Diante de h, verifique a regra específica do prefixo; o hífen é regra geral nesse encontro."
    },
    {
        "pergunta": "Assinale a alternativa em que as três formas seguem a ortografia vigente.",
        "alternativas": [
            "exaluno, vice-diretor, recém formado.",
            "ex-aluno, vicediretor, recém-formado.",
            "ex aluno, vice diretor, recém-formado.",
            "ex-aluno, vice-diretor, recém-formado.",
            "ex-aluno, vice-diretor, recémformado."
        ],
        "correta": 3,
        "explicacao": "Os prefixos ex-, vice- e recém- aparecem com hífen nesses casos: ex-aluno, vice-diretor, recém-formado.",
        "feedbackAcerto": "Correto. Os prefixos ex-, vice- e recém- aparecem com hífen nesses casos: ex-aluno, vice-diretor, recém-formado.",
        "feedbackErro": "A resposta correta é a alternativa D. Os prefixos ex-, vice- e recém- aparecem com hífen nesses casos: ex-aluno, vice-diretor, recém-formado.",
        "dicaBanca": "Alguns prefixos têm comportamento estável com hífen; memorize os mais cobrados."
    },
    {
        "pergunta": "Assinale a alternativa correta quanto às formas compostas.",
        "alternativas": [
            "guarda chuva, segunda feira, arco íris.",
            "guardachuva, segunda-feira, arcoíris.",
            "guarda-chuva, segundafeira, arco-íris.",
            "guarda chuva, segunda-feira, arcoíris.",
            "guarda-chuva, segunda-feira, arco-íris."
        ],
        "correta": 4,
        "explicacao": "Guarda-chuva, segunda-feira e arco-íris mantêm hífen na ortografia vigente.",
        "feedbackAcerto": "Correto. Guarda-chuva, segunda-feira e arco-íris mantêm hífen na ortografia vigente.",
        "feedbackErro": "A resposta correta é a alternativa E. Guarda-chuva, segunda-feira e arco-íris mantêm hífen na ortografia vigente.",
        "dicaBanca": "Palavras compostas lexicalizadas podem conservar hífen; verifique a forma registrada."
    },
    {
        "pergunta": "Em qual alternativa a palavra composta perdeu o hífen na ortografia vigente?",
        "alternativas": [
            "paraquedas.",
            "para-quedas.",
            "para quedas.",
            "pára-quedas.",
            "pará-quedas."
        ],
        "correta": 0,
        "explicacao": "Paraquedas é grafado sem hífen e sem acento, conforme a ortografia vigente.",
        "feedbackAcerto": "Correto. Paraquedas é grafado sem hífen e sem acento, conforme a ortografia vigente.",
        "feedbackErro": "A resposta correta é a alternativa A. Paraquedas é grafado sem hífen e sem acento, conforme a ortografia vigente.",
        "dicaBanca": "Alguns compostos perderam a noção de composição e passaram a ser grafados como uma só palavra."
    },
    {
        "pergunta": "Assinale a alternativa que apresenta grafia correta em uma locução de uso corrente.",
        "alternativas": [
            "fim-de-semana.",
            "fim de semana.",
            "fim-de semana.",
            "fim de-semana.",
            "fimdesemana."
        ],
        "correta": 1,
        "explicacao": "Locuções como fim de semana são, em regra, grafadas sem hífen.",
        "feedbackAcerto": "Correto. Locuções como fim de semana são, em regra, grafadas sem hífen.",
        "feedbackErro": "A resposta correta é a alternativa B. Locuções como fim de semana são, em regra, grafadas sem hífen.",
        "dicaBanca": "Não confunda locução com palavra composta lexicalizada."
    },
    {
        "pergunta": "Assinale a alternativa em que o emprego de maiúsculas e minúsculas está adequado em um texto administrativo.",
        "alternativas": [
            "O ministério da educação publicou a norma em Agosto.",
            "O Ministério da educação publicou a norma em Agosto.",
            "O Ministério da Educação publicou a norma em agosto.",
            "O ministério da Educação publicou a norma em agosto.",
            "O Ministério Da Educação publicou a norma em agosto."
        ],
        "correta": 2,
        "explicacao": "Em nome oficial de órgão, usam-se iniciais maiúsculas nos elementos significativos; nomes de meses são grafados com minúscula.",
        "feedbackAcerto": "Correto. Em nome oficial de órgão, usam-se iniciais maiúsculas nos elementos significativos; nomes de meses são grafados com minúscula.",
        "feedbackErro": "A resposta correta é a alternativa C. Em nome oficial de órgão, usam-se iniciais maiúsculas nos elementos significativos; nomes de meses são grafados com minúscula.",
        "dicaBanca": "Separe nomes próprios institucionais de nomes comuns de calendário."
    },
    {
        "pergunta": "Assinale a alternativa em que os nomes próprios geográficos estão corretamente grafados.",
        "alternativas": [
            "abaetetuba fica no Pará, na região Norte do brasil.",
            "Abaetetuba fica no pará, na Região norte do Brasil.",
            "Abaetetuba fica no Pará, na região norte do brasil.",
            "Abaetetuba fica no Pará, na Região Norte do Brasil.",
            "abaetetuba fica no pará, na Região Norte do Brasil."
        ],
        "correta": 3,
        "explicacao": "Abaetetuba, Pará, Região Norte e Brasil são nomes próprios geográficos e recebem iniciais maiúsculas.",
        "feedbackAcerto": "Correto. Abaetetuba, Pará, Região Norte e Brasil são nomes próprios geográficos e recebem iniciais maiúsculas.",
        "feedbackErro": "A resposta correta é a alternativa D. Abaetetuba, Pará, Região Norte e Brasil são nomes próprios geográficos e recebem iniciais maiúsculas.",
        "dicaBanca": "Diferencie designações geográficas oficiais de substantivos comuns."
    },
    {
        "pergunta": "Assinale a alternativa em que o uso das letras K, W e Y está de acordo com a ortografia vigente.",
        "alternativas": [
            "Essas letras não integram o alfabeto oficial e só podem aparecer em nomes estrangeiros.",
            "K, w e y foram eliminadas do alfabeto com o Acordo Ortográfico.",
            "K, w e y podem aparecer em símbolos, mas não fazem parte do alfabeto.",
            "O alfabeto oficial tem 23 letras, embora admita k, w e y em siglas.",
            "O alfabeto da língua portuguesa tem 26 letras e inclui k, w e y."
        ],
        "correta": 4,
        "explicacao": "O Acordo Ortográfico estabelece alfabeto de 26 letras, incluindo k, w e y.",
        "feedbackAcerto": "Correto. O Acordo Ortográfico estabelece alfabeto de 26 letras, incluindo k, w e y.",
        "feedbackErro": "A resposta correta é a alternativa E. O Acordo Ortográfico estabelece alfabeto de 26 letras, incluindo k, w e y.",
        "dicaBanca": "Uma mudança formal importante do Acordo foi a explicitação dessas três letras no alfabeto."
    },
    {
        "pergunta": "Assinale a alternativa em que a forma está de acordo com o Acordo Ortográfico.",
        "alternativas": [
            "auto-observação.",
            "autoobservação.",
            "auto observação.",
            "auto-observaçao.",
            "auto-observassão."
        ],
        "correta": 0,
        "explicacao": "Em auto-observação, o prefixo auto- termina em o e o segundo elemento começa por o; por isso, emprega-se hífen.",
        "feedbackAcerto": "Correto. Em auto-observação, o prefixo auto- termina em o e o segundo elemento começa por o; por isso, emprega-se hífen.",
        "feedbackErro": "A resposta correta é a alternativa A. Em auto-observação, o prefixo auto- termina em o e o segundo elemento começa por o; por isso, emprega-se hífen.",
        "dicaBanca": "Mesma vogal no encontro entre prefixo e segundo elemento favorece o hífen."
    },
    {
        "pergunta": "Qual alternativa apresenta grafia correta segundo as regras de prefixação?",
        "alternativas": [
            "interregional.",
            "inter-regional.",
            "inter regional.",
            "interrregional.",
            "inter-regi-onal."
        ],
        "correta": 1,
        "explicacao": "Quando o prefixo termina em r e o segundo elemento começa por r, emprega-se hífen: inter-regional.",
        "feedbackAcerto": "Correto. Quando o prefixo termina em r e o segundo elemento começa por r, emprega-se hífen: inter-regional.",
        "feedbackErro": "A resposta correta é a alternativa B. Quando o prefixo termina em r e o segundo elemento começa por r, emprega-se hífen: inter-regional.",
        "dicaBanca": "Consoante final do prefixo igual à inicial do segundo elemento costuma exigir hífen."
    },
    {
        "pergunta": "Assinale a alternativa correta quanto ao prefixo “co-”.",
        "alternativas": [
            "co-autor.",
            "co autor.",
            "coautor.",
            "co-autor e coautor são formas equivalentes na norma brasileira atual.",
            "co-autôr."
        ],
        "correta": 2,
        "explicacao": "Coautor é grafado sem hífen. O prefixo co- aglutina-se ao segundo elemento nesse caso.",
        "feedbackAcerto": "Correto. Coautor é grafado sem hífen. O prefixo co- aglutina-se ao segundo elemento nesse caso.",
        "feedbackErro": "A resposta correta é a alternativa C. Coautor é grafado sem hífen. O prefixo co- aglutina-se ao segundo elemento nesse caso.",
        "dicaBanca": "Alguns prefixos têm comportamento próprio; 'co-' é um dos mais cobrados."
    },
    {
        "pergunta": "Assinale a alternativa em que a grafia está correta.",
        "alternativas": [
            "re-eleição e pré-existente.",
            "re-eleição e pre-existente.",
            "reeleição e préexistente.",
            "reeleição e preexistente.",
            "re eleição e pre existente."
        ],
        "correta": 3,
        "explicacao": "Reeleição e preexistente são grafadas sem hífen nesses casos.",
        "feedbackAcerto": "Correto. Reeleição e preexistente são grafadas sem hífen nesses casos.",
        "feedbackErro": "A resposta correta é a alternativa D. Reeleição e preexistente são grafadas sem hífen nesses casos.",
        "dicaBanca": "Não aplique automaticamente a regra da vogal repetida aos prefixos re- e pre- átonos."
    },
    {
        "pergunta": "Em um formulário, assinale a alternativa em que a forma “tampouco” foi empregada corretamente.",
        "alternativas": [
            "O candidato não apresentou documento, tão pouco justificativa.",
            "O candidato não apresentou documento, tam pouco justificativa.",
            "O candidato não apresentou documento, tão-pouco justificativa.",
            "O candidato não apresentou documento, tampouco de justificativa.",
            "O candidato não apresentou documento, tampouco justificativa."
        ],
        "correta": 4,
        "explicacao": "Tampouco significa 'também não' e é grafado em uma só palavra.",
        "feedbackAcerto": "Correto. Tampouco significa 'também não' e é grafado em uma só palavra.",
        "feedbackErro": "A resposta correta é a alternativa E. Tampouco significa 'também não' e é grafado em uma só palavra.",
        "dicaBanca": "Se a expressão puder ser substituída por 'também não', a forma é tampouco."
    },
    {
        "pergunta": "Assinale a alternativa em que “tão pouco” está corretamente empregado.",
        "alternativas": [
            "Havia tão pouco tempo para a revisão que a equipe priorizou os pontos essenciais.",
            "Havia tampouco tempo para a revisão que a equipe priorizou os pontos essenciais.",
            "Havia tão-pouco tempo para a revisão que a equipe priorizou os pontos essenciais.",
            "Havia tam pouco tempo para a revisão que a equipe priorizou os pontos essenciais.",
            "Havia tampouco de tempo para a revisão que a equipe priorizou os pontos essenciais."
        ],
        "correta": 0,
        "explicacao": "Tão pouco combina o advérbio de intensidade tão com o pronome/adjetivo pouco, indicando pequena quantidade.",
        "feedbackAcerto": "Correto. Tão pouco combina o advérbio de intensidade tão com o pronome/adjetivo pouco, indicando pequena quantidade.",
        "feedbackErro": "A resposta correta é a alternativa A. Tão pouco combina o advérbio de intensidade tão com o pronome/adjetivo pouco, indicando pequena quantidade.",
        "dicaBanca": "Quando 'pouco' puder variar ou indicar quantidade, examine se 'tão' funciona como intensificador."
    },
    {
        "pergunta": "Assinale a alternativa em que “à toa” e “atoa” estão corretamente distinguidos.",
        "alternativas": [
            "O aluno ficou atoa no corredor, e o rebocador à toa a embarcação.",
            "O aluno ficou à toa no corredor, e o rebocador atoa a embarcação.",
            "O aluno ficou à-toa no corredor, e o rebocador a toa a embarcação.",
            "O aluno ficou a toa no corredor, e o rebocador àtoa a embarcação.",
            "O aluno ficou atoa no corredor, e o rebocador atoa a embarcação."
        ],
        "correta": 1,
        "explicacao": "À toa é locução adverbial/adjetiva; atoa é forma do verbo atoar, 'rebocar'.",
        "feedbackAcerto": "Correto. À toa é locução adverbial/adjetiva; atoa é forma do verbo atoar, 'rebocar'.",
        "feedbackErro": "A resposta correta é a alternativa B. À toa é locução adverbial/adjetiva; atoa é forma do verbo atoar, 'rebocar'.",
        "dicaBanca": "O contexto sintático e o sentido determinam se há locução com crase ou forma verbal."
    },
    {
        "pergunta": "Assinale a alternativa em que a expressão destacada está grafada corretamente.",
        "alternativas": [
            "A equipe refez o cronograma derrepente, após a publicação da retificação.",
            "A equipe refez o cronograma de-repente, após a publicação da retificação.",
            "A equipe refez o cronograma de repente, após a publicação da retificação.",
            "A equipe refez o cronograma derepente, após a publicação da retificação.",
            "A equipe refez o cronograma de repentemente, após a publicação da retificação."
        ],
        "correta": 2,
        "explicacao": "A locução adverbial de repente é grafada em duas palavras, sem hífen.",
        "feedbackAcerto": "Correto. A locução adverbial de repente é grafada em duas palavras, sem hífen.",
        "feedbackErro": "A resposta correta é a alternativa C. A locução adverbial de repente é grafada em duas palavras, sem hífen.",
        "dicaBanca": "A pronúncia encadeada não autoriza unir graficamente palavras de uma locução."
    },
    {
        "pergunta": "Considere as formas abaixo:\nI. anti-inflamatório\nII. autoescola\nIII. micro-ondas\nIV. vice-diretor\nSegundo a ortografia vigente, quais estão corretas?",
        "alternativas": [
            "I e III estão corretas; II e IV estão incorretas.",
            "II e IV estão corretas; I e III estão incorretas.",
            "I, II e III estão corretas; IV está incorreta.",
            "I, II, III e IV estão corretas.",
            "II, III e IV estão corretas; I está incorreta."
        ],
        "correta": 3,
        "explicacao": "As quatro formas estão corretas: anti-inflamatório e micro-ondas por encontro de vogais iguais; autoescola sem hífen; vice-diretor com hífen.",
        "feedbackAcerto": "Correto. As quatro formas estão corretas: anti-inflamatório e micro-ondas por encontro de vogais iguais; autoescola sem hífen; vice-diretor com hífen.",
        "feedbackErro": "A resposta correta é a alternativa D. As quatro formas estão corretas: anti-inflamatório e micro-ondas por encontro de vogais iguais; autoescola sem hífen; vice-diretor com hífen.",
        "dicaBanca": "Analise cada prefixo separadamente; regras de hífen não são idênticas para todos."
    },
    {
        "pergunta": "Leia as afirmações sobre ortografia:\nI. “por que” pode ocorrer em pergunta indireta.\nII. “há cerca de” pode indicar tempo passado aproximado.\nIII. “aonde” combina com verbos que exprimem movimento e exigem a preposição a.\nIV. “mal” pode funcionar como advérbio e opõe-se, em muitos contextos, a “bem”.\nAssinale a alternativa correta.",
        "alternativas": [
            "I e II estão corretas; III e IV estão incorretas.",
            "II e III estão corretas; I e IV estão incorretas.",
            "I, III e IV estão corretas; II está incorreta.",
            "IV está correta; I, II e III estão incorretas.",
            "I, II, III e IV estão corretas."
        ],
        "correta": 4,
        "explicacao": "As quatro afirmações estão corretas segundo a norma-padrão.",
        "feedbackAcerto": "Correto. As quatro afirmações estão corretas segundo a norma-padrão.",
        "feedbackErro": "A resposta correta é a alternativa E. As quatro afirmações estão corretas segundo a norma-padrão.",
        "dicaBanca": "Resolva cada afirmação isoladamente antes de combinar o conjunto."
    }
];
