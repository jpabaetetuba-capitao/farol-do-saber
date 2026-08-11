const sintaxe = [
    {
        "pergunta": "Em “Os relatórios da comissão chegaram ontem”, a análise sintática correta do sujeito é:",
        "alternativas": [
            "“Os relatórios da comissão” é sujeito simples, cujo núcleo é “relatórios”.",
            "“ontem” integra o sujeito, pois delimita temporalmente a ocorrência descrita.",
            "“da comissão” é sujeito simples, cujo núcleo é “comissão”.",
            "“chegaram ontem” constitui o sujeito, porque contém o verbo principal da oração.",
            "“Os relatórios” é sujeito composto, porque apresenta mais de um termo nominal."
        ],
        "correta": 0,
        "explicacao": "O sujeito completo é “Os relatórios da comissão”; há um único núcleo, “relatórios”, por isso o sujeito é simples.",
        "feedbackAcerto": "Correto. O sujeito completo é “Os relatórios da comissão”; há um único núcleo, “relatórios”, por isso o sujeito é simples.",
        "feedbackErro": "A resposta correta é: “Os relatórios da comissão” é sujeito simples, cujo núcleo é “relatórios”. O sujeito completo é “Os relatórios da comissão”; há um único núcleo, “relatórios”, por isso o sujeito é simples.",
        "dicaBanca": "Não confunda a extensão do sujeito com seu núcleo: sujeito simples pode ter vários determinantes."
    },
    {
        "pergunta": "Na oração “Chegaram ao auditório os novos professores da rede”, o termo que exerce a função de sujeito é:",
        "alternativas": [
            "“Chegaram ao auditório”, predicado nominal com sujeito inexistente.",
            "“ao auditório”, sujeito simples introduzido por preposição.",
            "“os novos professores”, objeto direto anteposto ao complemento nominal.",
            "“os novos professores da rede”, sujeito simples posposto ao verbo.",
            "“da rede”, sujeito oculto recuperado pelo contexto institucional."
        ],
        "correta": 3,
        "explicacao": "A ordem verbo–sujeito não altera a função sintática: quem chegou foram “os novos professores da rede”.",
        "feedbackAcerto": "Correto. A ordem verbo–sujeito não altera a função sintática: quem chegou foram “os novos professores da rede”.",
        "feedbackErro": "A resposta correta é: “os novos professores da rede”, sujeito simples posposto ao verbo. A ordem verbo–sujeito não altera a função sintática: quem chegou foram “os novos professores da rede”.",
        "dicaBanca": "Em ordem inversa, localize quem pratica ou experimenta o processo expresso pelo verbo antes de classificar."
    },
    {
        "pergunta": "Em “Revisamos cuidadosamente todos os pareceres antes da reunião”, o sujeito da forma verbal “revisamos” é:",
        "alternativas": [
            "inexistente, porque o verbo está empregado de forma impessoal.",
            "simples, expresso pelo sintagma “todos os pareceres”.",
            "sujeito oculto (desinencial), de primeira pessoa do plural.",
            "composto, formado pelos termos “pareceres” e “reunião”.",
            "indeterminado, pois não aparece escrito antes do verbo."
        ],
        "correta": 2,
        "explicacao": "A desinência verbal -mos permite recuperar o sujeito “nós”, que não está expresso, mas é determinado.",
        "feedbackAcerto": "Correto. A desinência verbal -mos permite recuperar o sujeito “nós”, que não está expresso, mas é determinado.",
        "feedbackErro": "A resposta correta é: sujeito oculto (desinencial), de primeira pessoa do plural. A desinência verbal -mos permite recuperar o sujeito “nós”, que não está expresso, mas é determinado.",
        "dicaBanca": "Sujeito oculto não é sujeito indeterminado: a flexão ou o contexto permite identificá-lo."
    },
    {
        "pergunta": "Em “Bateram à porta durante a madrugada e ninguém se identificou”, a primeira oração apresenta:",
        "alternativas": [
            "sujeito simples, representado pelo termo preposicionado “à porta”.",
            "sujeito oculto, porque a desinência verbal identifica claramente um grupo já mencionado.",
            "sujeito composto, formado por “porta” e “madrugada”, termos ligados à ação.",
            "sujeito indeterminado, sem referente identificável para a terceira pessoa do plural.",
            "oração sem sujeito, porque toda forma verbal no plural é impessoal nesse contexto."
        ],
        "correta": 3,
        "explicacao": "Na terceira pessoa do plural, sem referente anterior ou posterior que identifique o agente, o sujeito é indeterminado.",
        "feedbackAcerto": "Correto. Na terceira pessoa do plural, sem referente anterior ou posterior que identifique o agente, o sujeito é indeterminado.",
        "feedbackErro": "A resposta correta é: sujeito indeterminado, sem referente identificável para a terceira pessoa do plural. Na terceira pessoa do plural, sem referente anterior ou posterior que identifique o agente, o sujeito é indeterminado.",
        "dicaBanca": "Antes de marcar sujeito indeterminado com verbo no plural, verifique se o texto fornece um referente recuperável."
    },
    {
        "pergunta": "Na frase “Precisa-se de profissionais com experiência em alfabetização”, a classificação do sujeito é:",
        "alternativas": [
            "simples, tendo “profissionais” como núcleo e “de experiência” como adjunto.",
            "paciente, porque “profissionais” recebe a ação expressa pelo verbo.",
            "sujeito indeterminado, com “se” como índice de indeterminação.",
            "inexistente, já que a presença de “se” torna o verbo necessariamente impessoal.",
            "oculto, correspondente a “nós”, recuperado pela forma verbal de terceira pessoa."
        ],
        "correta": 2,
        "explicacao": "Com verbo transitivo indireto acompanhado de “se”, não se forma passiva sintética; o “se” indetermina o sujeito.",
        "feedbackAcerto": "Correto. Com verbo transitivo indireto acompanhado de “se”, não se forma passiva sintética; o “se” indetermina o sujeito.",
        "feedbackErro": "A resposta correta é: sujeito indeterminado, com “se” como índice de indeterminação. Com verbo transitivo indireto acompanhado de “se”, não se forma passiva sintética; o “se” indetermina o sujeito.",
        "dicaBanca": "Compare “Vendem-se livros” com “Precisa-se de profissionais”: a transitividade do verbo decide a análise."
    },
    {
        "pergunta": "Em “Havia muitos candidatos no corredor antes da abertura dos portões”, a oração apresenta:",
        "alternativas": [
            "sujeito indeterminado, porque não se identifica quem realizou a ação.",
            "sujeito composto, formado por “candidatos” e “portões”.",
            "sujeito inexistente, pois “haver” tem sentido de existir.",
            "sujeito simples, cujo núcleo é “candidatos”.",
            "sujeito oculto, recuperado pela ideia de organização do concurso."
        ],
        "correta": 2,
        "explicacao": "O verbo “haver”, com sentido de existir, é impessoal; “muitos candidatos” exerce função de objeto direto.",
        "feedbackAcerto": "Correto. O verbo “haver”, com sentido de existir, é impessoal; “muitos candidatos” exerce função de objeto direto.",
        "feedbackErro": "A resposta correta é: sujeito inexistente, pois “haver” tem sentido de existir. O verbo “haver”, com sentido de existir, é impessoal; “muitos candidatos” exerce função de objeto direto.",
        "dicaBanca": "Em análise sintática, “haver” existencial não tem sujeito, mesmo quando o termo seguinte está no plural."
    },
    {
        "pergunta": "Na oração “Faz dois anos que a escola implantou o projeto”, quanto à primeira forma verbal, é correto afirmar que:",
        "alternativas": [
            "“dois anos” é agente da passiva, pois representa a duração do processo verbal.",
            "o sujeito de “faz” é oculto e corresponde ao termo “a escola” mencionado depois.",
            "“faz” possui sujeito indeterminado, pois aparece na terceira pessoa do singular.",
            "“faz” é impessoal por indicar tempo decorrido, e a oração principal não tem sujeito.",
            "“dois anos” é sujeito simples de “faz”, razão pela qual o verbo deveria concordar com ele."
        ],
        "correta": 3,
        "explicacao": "O verbo “fazer”, quando indica tempo decorrido ou fenômeno meteorológico, é impessoal.",
        "feedbackAcerto": "Correto. O verbo “fazer”, quando indica tempo decorrido ou fenômeno meteorológico, é impessoal.",
        "feedbackErro": "A resposta correta é: “faz” é impessoal por indicar tempo decorrido, e a oração principal não tem sujeito. O verbo “fazer”, quando indica tempo decorrido ou fenômeno meteorológico, é impessoal.",
        "dicaBanca": "Verbos impessoais podem aparecer em locuções; o auxiliar também tende a permanecer no singular."
    },
    {
        "pergunta": "Compare: I. “Choveu durante toda a madrugada.” II. “Choveram críticas ao novo regulamento.” A análise correta é:",
        "alternativas": [
            "em I “madrugada” é sujeito; em II o sujeito é indeterminado.",
            "nas duas frases há oração sem sujeito, pois “chover” permanece impessoal nos dois empregos.",
            "em I o sujeito é oculto; em II “críticas” funciona como objeto direto.",
            "I: oração sem sujeito; II: sujeito simples “críticas ao novo regulamento”.",
            "nas duas frases o sujeito é simples, embora apareça depois do verbo em II."
        ],
        "correta": 3,
        "explicacao": "No emprego meteorológico, “chover” é impessoal; em sentido figurado, pode tornar-se verbo pessoal e concordar com o sujeito.",
        "feedbackAcerto": "Correto. No emprego meteorológico, “chover” é impessoal; em sentido figurado, pode tornar-se verbo pessoal e concordar com o sujeito.",
        "feedbackErro": "A resposta correta é: I: oração sem sujeito; II: sujeito simples “críticas ao novo regulamento”. No emprego meteorológico, “chover” é impessoal; em sentido figurado, pode tornar-se verbo pessoal e concordar com o sujeito.",
        "dicaBanca": "Não classifique um verbo como impessoal apenas pelo dicionário: observe o sentido que ele assume na frase."
    },
    {
        "pergunta": "Em “Os estudantes resolveram o problema em poucos minutos”, o predicado é classificado como:",
        "alternativas": [
            "verbo-nominal, porque “o problema” é predicativo do objeto.",
            "verbo-nominal, porque há simultaneamente verbo de ação e predicativo do sujeito.",
            "nominal, porque “problema” atribui característica ao sujeito.",
            "nominal, porque a expressão “em poucos minutos” funciona como predicativo.",
            "verbal, porque seu núcleo é o verbo nocional “resolveram”."
        ],
        "correta": 4,
        "explicacao": "O predicado tem como núcleo o verbo nocional “resolveram”; não há predicativo associado ao sujeito ou ao objeto.",
        "feedbackAcerto": "Correto. O predicado tem como núcleo o verbo nocional “resolveram”; não há predicativo associado ao sujeito ou ao objeto.",
        "feedbackErro": "A resposta correta é: verbal, porque seu núcleo é o verbo nocional “resolveram”. O predicado tem como núcleo o verbo nocional “resolveram”; não há predicativo associado ao sujeito ou ao objeto.",
        "dicaBanca": "Predicado verbal exige verbo nocional como núcleo; a presença de complementos não o transforma em verbo-nominal."
    },
    {
        "pergunta": "Na frase “A equipe permaneceu tranquila durante a avaliação”, o predicado é:",
        "alternativas": [
            "verbal, pois “tranquila” funciona como objeto direto do verbo.",
            "verbo-nominal, porque há dois núcleos verbais coordenados na oração.",
            "verbal, pois “permaneceu” expressa deslocamento físico da equipe.",
            "predicado nominal, com “tranquila” como predicativo do sujeito.",
            "verbo-nominal, pois “durante a avaliação” atribui estado ao sujeito."
        ],
        "correta": 3,
        "explicacao": "No contexto, “permanecer” liga o sujeito “A equipe” ao estado expresso por “tranquila”.",
        "feedbackAcerto": "Correto. No contexto, “permanecer” liga o sujeito “A equipe” ao estado expresso por “tranquila”.",
        "feedbackErro": "A resposta correta é: predicado nominal, com “tranquila” como predicativo do sujeito. No contexto, “permanecer” liga o sujeito “A equipe” ao estado expresso por “tranquila”.",
        "dicaBanca": "Verbos como ficar, permanecer e andar podem ser de ligação ou nocionais; o contexto decide."
    },
    {
        "pergunta": "Em “Os candidatos deixaram a sala preocupados”, a classificação do predicado e do termo “preocupados” é:",
        "alternativas": [
            "predicado nominal; “preocupados” é complemento nominal do sujeito.",
            "predicado verbo-nominal; “preocupados” é predicativo do sujeito.",
            "predicado verbal; “preocupados” é adjunto adnominal de “candidatos”.",
            "predicado nominal; “preocupados” é objeto direto de “deixaram”.",
            "predicado verbo-nominal; “preocupados” é predicativo do objeto “sala”."
        ],
        "correta": 1,
        "explicacao": "Há dois núcleos: o verbo nocional “deixaram” e o predicativo “preocupados”, atribuído ao sujeito “Os candidatos”.",
        "feedbackAcerto": "Correto. Há dois núcleos: o verbo nocional “deixaram” e o predicativo “preocupados”, atribuído ao sujeito “Os candidatos”.",
        "feedbackErro": "A resposta correta é: predicado verbo-nominal; “preocupados” é predicativo do sujeito. Há dois núcleos: o verbo nocional “deixaram” e o predicativo “preocupados”, atribuído ao sujeito “Os candidatos”.",
        "dicaBanca": "No predicado verbo-nominal, procure um verbo nocional e uma característica atribuída ao sujeito ou ao objeto."
    },
    {
        "pergunta": "Na oração “A comissão considerou insuficientes os documentos apresentados”, o termo “insuficientes” exerce a função de:",
        "alternativas": [
            "predicativo do sujeito, pois caracteriza diretamente “A comissão”.",
            "predicativo do objeto “os documentos apresentados”.",
            "adjunto adnominal, pois delimita diretamente quais documentos foram analisados.",
            "complemento nominal, pois completa o sentido do adjetivo “apresentados”.",
            "objeto direto, pois recebe sem preposição a ação do verbo “considerou”."
        ],
        "correta": 1,
        "explicacao": "“Os documentos apresentados” é objeto direto de “considerou”, e “insuficientes” atribui a esse objeto uma qualidade.",
        "feedbackAcerto": "Correto. “Os documentos apresentados” é objeto direto de “considerou”, e “insuficientes” atribui a esse objeto uma qualidade.",
        "feedbackErro": "A resposta correta é: predicativo do objeto “os documentos apresentados”. “Os documentos apresentados” é objeto direto de “considerou”, e “insuficientes” atribui a esse objeto uma qualidade.",
        "dicaBanca": "Verbos como considerar, julgar e achar frequentemente admitem predicativo do objeto."
    },
    {
        "pergunta": "Em “A coordenadora entregou os certificados aos concluintes”, os termos “os certificados” e “aos concluintes” são, respectivamente:",
        "alternativas": [
            "complemento nominal e objeto indireto.",
            "objeto direto e objeto indireto.",
            "adjunto adnominal e adjunto adverbial.",
            "objeto indireto e objeto direto.",
            "predicativo do objeto e complemento nominal."
        ],
        "correta": 1,
        "explicacao": "O verbo “entregar” pode construir-se como transitivo direto e indireto: entregar algo a alguém.",
        "feedbackAcerto": "Correto. O verbo “entregar” pode construir-se como transitivo direto e indireto: entregar algo a alguém.",
        "feedbackErro": "A resposta correta é: objeto direto e objeto indireto. O verbo “entregar” pode construir-se como transitivo direto e indireto: entregar algo a alguém.",
        "dicaBanca": "Para identificar OD e OI, observe a regência do verbo e não apenas a presença de preposição."
    },
    {
        "pergunta": "Na frase “Os servidores necessitam de orientação específica”, a expressão “de orientação específica” funciona como:",
        "alternativas": [
            "complemento nominal, porque completa o sentido do substantivo “servidores”.",
            "adjunto adnominal, porque caracteriza diretamente o núcleo do sujeito.",
            "agente da passiva, porque indica quem executa a ação verbal.",
            "objeto direto preposicionado, porque a preposição é facultativa nesse caso.",
            "objeto indireto, por completar um verbo que exige a preposição “de”."
        ],
        "correta": 4,
        "explicacao": "“Necessitar” rege a preposição “de”; o termo preposicionado completa o verbo e exerce função de objeto indireto.",
        "feedbackAcerto": "Correto. “Necessitar” rege a preposição “de”; o termo preposicionado completa o verbo e exerce função de objeto indireto.",
        "feedbackErro": "A resposta correta é: objeto indireto, por completar um verbo que exige a preposição “de”. “Necessitar” rege a preposição “de”; o termo preposicionado completa o verbo e exerce função de objeto indireto.",
        "dicaBanca": "Complemento nominal completa nome; objeto indireto completa verbo. Essa distinção é muito cobrada."
    },
    {
        "pergunta": "Em “O professor chamou a todos para a reunião”, a expressão “a todos” é:",
        "alternativas": [
            "objeto direto preposicionado do verbo “chamar”.",
            "agente da passiva, porque representa os participantes convocados.",
            "complemento nominal, pois retoma o conteúdo nominal de “professor”.",
            "adjunto adverbial de destinatário, porque indica para quem se dirige a ação.",
            "objeto indireto, porque todo termo iniciado por “a” completa verbo indiretamente."
        ],
        "correta": 0,
        "explicacao": "O verbo “chamar”, no sentido de convocar, é transitivo direto; o objeto aparece preposicionado diante de “todos”.",
        "feedbackAcerto": "Correto. O verbo “chamar”, no sentido de convocar, é transitivo direto; o objeto aparece preposicionado diante de “todos”.",
        "feedbackErro": "A resposta correta é: objeto direto preposicionado do verbo “chamar”. O verbo “chamar”, no sentido de convocar, é transitivo direto; o objeto aparece preposicionado diante de “todos”.",
        "dicaBanca": "Nem todo complemento iniciado por preposição é objeto indireto; confirme a transitividade do verbo."
    },
    {
        "pergunta": "Na construção “Esses relatórios, eu já os revisei”, o pronome “os” exerce a função de:",
        "alternativas": [
            "objeto indireto, pois substitui um complemento introduzido por preposição.",
            "objeto direto pleonástico, retomando “Esses relatórios”.",
            "predicativo do objeto, porque atribui estado aos relatórios revisados.",
            "sujeito simples, porque concorda semanticamente com “relatórios”.",
            "adjunto adnominal, porque determina o substantivo implícito na oração."
        ],
        "correta": 1,
        "explicacao": "O clítico “os” funciona como objeto direto de “revisei” e retoma o objeto deslocado para a esquerda.",
        "feedbackAcerto": "Correto. O clítico “os” funciona como objeto direto de “revisei” e retoma o objeto deslocado para a esquerda.",
        "feedbackErro": "A resposta correta é: objeto direto pleonástico, retomando “Esses relatórios”. O clítico “os” funciona como objeto direto de “revisei” e retoma o objeto deslocado para a esquerda.",
        "dicaBanca": "Em estruturas pleonásticas, o termo antecipado pode ser retomado por pronome átono com a mesma função sintática."
    },
    {
        "pergunta": "Em “A decisão desagradou aos candidatos”, a expressão “aos candidatos” exerce a função de:",
        "alternativas": [
            "adjunto adverbial, porque expressa a circunstância em que ocorreu o fato.",
            "objeto direto, porque representa quem sofre o efeito da decisão.",
            "predicativo do sujeito, porque atribui uma característica aos candidatos.",
            "objeto indireto exigido pelo verbo “desagradar”.",
            "complemento nominal, porque completa o sentido do substantivo “decisão”."
        ],
        "correta": 3,
        "explicacao": "O termo completa o verbo “desagradar”, que, no sentido de não agradar, é transitivo indireto.",
        "feedbackAcerto": "Correto. O termo completa o verbo “desagradar”, que, no sentido de não agradar, é transitivo indireto.",
        "feedbackErro": "A resposta correta é: objeto indireto exigido pelo verbo “desagradar”. O termo completa o verbo “desagradar”, que, no sentido de não agradar, é transitivo indireto.",
        "dicaBanca": "Sentido semântico de paciente não basta para classificar o termo; a estrutura sintática e a regência são decisivas."
    },
    {
        "pergunta": "Na expressão “a necessidade de apoio pedagógico”, o segmento “de apoio pedagógico” funciona como:",
        "alternativas": [
            "objeto indireto, porque completa diretamente um verbo subentendido.",
            "adjunto adnominal, porque indica o agente que pratica a ação de necessitar.",
            "adjunto adverbial, porque expressa circunstância de causa.",
            "predicativo, porque atribui característica ao substantivo “necessidade”.",
            "complemento nominal do substantivo “necessidade”."
        ],
        "correta": 4,
        "explicacao": "O substantivo abstrato “necessidade” pede um termo que explicite aquilo de que se necessita; esse termo é complemento nominal.",
        "feedbackAcerto": "Correto. O substantivo abstrato “necessidade” pede um termo que explicite aquilo de que se necessita; esse termo é complemento nominal.",
        "feedbackErro": "A resposta correta é: complemento nominal do substantivo “necessidade”. O substantivo abstrato “necessidade” pede um termo que explicite aquilo de que se necessita; esse termo é complemento nominal.",
        "dicaBanca": "Complemento nominal costuma ter valor passivo ou de alvo e completa substantivo, adjetivo ou advérbio."
    },
    {
        "pergunta": "Em “Os alunos consultaram o material da biblioteca”, a expressão “da biblioteca” funciona, no contexto, como:",
        "alternativas": [
            "objeto indireto, porque completa o verbo “consultaram” por meio de preposição.",
            "predicativo do objeto, porque atribui estado ao material consultado.",
            "adjunto adnominal, pois caracteriza “material” indicando sua origem ou pertencimento.",
            "complemento nominal, porque “material” é um substantivo abstrato que exige complemento.",
            "agente da passiva, porque a biblioteca realiza a ação de consultar."
        ],
        "correta": 2,
        "explicacao": "“Material” é substantivo concreto e “da biblioteca” especifica sua origem/pertencimento, atuando como adjunto adnominal.",
        "feedbackAcerto": "Correto. “Material” é substantivo concreto e “da biblioteca” especifica sua origem/pertencimento, atuando como adjunto adnominal.",
        "feedbackErro": "A resposta correta é: adjunto adnominal, pois caracteriza “material” indicando sua origem ou pertencimento. “Material” é substantivo concreto e “da biblioteca” especifica sua origem/pertencimento, atuando como adjunto adnominal.",
        "dicaBanca": "Para diferenciar adjunto adnominal de complemento nominal, observe a natureza do nome e a relação semântica estabelecida."
    },
    {
        "pergunta": "Compare: I. “A crítica do professor foi publicada.” II. “A crítica ao professor foi publicada.” A análise mais adequada dos termos destacados é:",
        "alternativas": [
            "nos dois casos, os termos são complementos nominais, pois acompanham o mesmo substantivo abstrato.",
            "em I há complemento nominal com valor de alvo; em II, adjunto adnominal com valor de agente.",
            "I: adjunto adnominal com valor de agente; II: complemento nominal com valor de alvo.",
            "nos dois casos, os termos são adjuntos adnominais, pois aparecem ligados ao substantivo por preposição.",
            "em I há objeto indireto; em II há adjunto adverbial de direção."
        ],
        "correta": 2,
        "explicacao": "Com substantivo abstrato, o termo agente/possuidor tende a ser adjunto adnominal; o termo alvo/paciente tende a ser complemento nominal.",
        "feedbackAcerto": "Correto. Com substantivo abstrato, o termo agente/possuidor tende a ser adjunto adnominal; o termo alvo/paciente tende a ser complemento nominal.",
        "feedbackErro": "A resposta correta é: I: adjunto adnominal com valor de agente; II: complemento nominal com valor de alvo. Com substantivo abstrato, o termo agente/possuidor tende a ser adjunto adnominal; o termo alvo/paciente tende a ser complemento nominal.",
        "dicaBanca": "Em nomes abstratos, pergunte quem pratica e quem recebe a ideia expressa pelo nome."
    },
    {
        "pergunta": "Na frase “O parecer foi elaborado pela equipe técnica”, a expressão “pela equipe técnica” é:",
        "alternativas": [
            "objeto indireto, porque completa o verbo “foi” com preposição.",
            "complemento nominal, porque completa o sentido do substantivo “parecer”.",
            "adjunto adverbial de instrumento, porque indica o meio usado na elaboração.",
            "predicativo do sujeito, porque caracteriza o parecer produzido.",
            "agente da passiva, pois indica quem pratica a ação expressa na voz passiva."
        ],
        "correta": 4,
        "explicacao": "Na voz passiva analítica, o termo que pratica a ação pode aparecer introduzido por “por” ou “de” e é agente da passiva.",
        "feedbackAcerto": "Correto. Na voz passiva analítica, o termo que pratica a ação pode aparecer introduzido por “por” ou “de” e é agente da passiva.",
        "feedbackErro": "A resposta correta é: agente da passiva, pois indica quem pratica a ação expressa na voz passiva. Na voz passiva analítica, o termo que pratica a ação pode aparecer introduzido por “por” ou “de” e é agente da passiva.",
        "dicaBanca": "Transforme a frase para a voz ativa: “A equipe técnica elaborou o parecer”. Isso ajuda a localizar o agente."
    },
    {
        "pergunta": "Em “Com muita atenção, os alunos analisaram o gráfico”, a expressão “Com muita atenção” exerce a função de:",
        "alternativas": [
            "objeto indireto do verbo “analisaram”.",
            "complemento nominal de “alunos”.",
            "predicativo do sujeito “os alunos”.",
            "adjunto adnominal do substantivo “gráfico”.",
            "adjunto adverbial de modo."
        ],
        "correta": 4,
        "explicacao": "A expressão indica a maneira como a ação de analisar foi realizada, funcionando como adjunto adverbial de modo.",
        "feedbackAcerto": "Correto. A expressão indica a maneira como a ação de analisar foi realizada, funcionando como adjunto adverbial de modo.",
        "feedbackErro": "A resposta correta é: adjunto adverbial de modo. A expressão indica a maneira como a ação de analisar foi realizada, funcionando como adjunto adverbial de modo.",
        "dicaBanca": "Adjuntos adverbiais exprimem circunstâncias; pergunte que relação de sentido o termo estabelece com o verbo."
    },
    {
        "pergunta": "Na frase “Belém, capital do Pará, recebe visitantes durante todo o ano”, a expressão “capital do Pará” é:",
        "alternativas": [
            "vocativo, porque chama diretamente a cidade mencionada.",
            "aposto explicativo, porque esclarece e identifica o termo “Belém”.",
            "adjunto adverbial de lugar, porque localiza geograficamente a ação.",
            "objeto direto, porque completa o sentido do verbo “recebe”.",
            "predicativo do sujeito, porque depende de um verbo de ligação implícito obrigatório."
        ],
        "correta": 1,
        "explicacao": "O segmento entre vírgulas explica o nome anterior e pode ser retirado sem destruir a estrutura básica da oração.",
        "feedbackAcerto": "Correto. O segmento entre vírgulas explica o nome anterior e pode ser retirado sem destruir a estrutura básica da oração.",
        "feedbackErro": "A resposta correta é: aposto explicativo, porque esclarece e identifica o termo “Belém”. O segmento entre vírgulas explica o nome anterior e pode ser retirado sem destruir a estrutura básica da oração.",
        "dicaBanca": "Aposto explica ou especifica um termo; vocativo é independente e serve para chamar o interlocutor."
    },
    {
        "pergunta": "Em “Trouxe três materiais: caderno, régua e calculadora”, o segmento após os dois-pontos exerce a função de:",
        "alternativas": [
            "aposto enumerativo, pois desenvolve o conteúdo do termo “três materiais”.",
            "predicativo do objeto, pois atribui características aos materiais.",
            "vocativo composto, pois nomeia os destinatários da ação.",
            "objeto indireto coordenado, pois completa o verbo por meio de três núcleos.",
            "adjunto adverbial de instrumento, pois indica os meios usados na ação."
        ],
        "correta": 0,
        "explicacao": "A enumeração detalha o termo antecedente “três materiais”, funcionando como aposto enumerativo.",
        "feedbackAcerto": "Correto. A enumeração detalha o termo antecedente “três materiais”, funcionando como aposto enumerativo.",
        "feedbackErro": "A resposta correta é: aposto enumerativo, pois desenvolve o conteúdo do termo “três materiais”. A enumeração detalha o termo antecedente “três materiais”, funcionando como aposto enumerativo.",
        "dicaBanca": "Dois-pontos podem introduzir aposto enumerativo, mas a pontuação sozinha não basta: observe a relação sintática."
    },
    {
        "pergunta": "Em “Professores, entreguem os diários até sexta-feira”, o termo “Professores” é:",
        "alternativas": [
            "vocativo, por indicar o interlocutor da ordem.",
            "aposto explicativo do sujeito oculto “vocês”.",
            "predicativo do sujeito, pois qualifica o agente da ação.",
            "objeto direto antecipado, pois recebe a ação de “entreguem”.",
            "sujeito simples do verbo “entreguem”."
        ],
        "correta": 0,
        "explicacao": "“Professores” não integra o sujeito da oração; é um chamamento dirigido ao interlocutor.",
        "feedbackAcerto": "Correto. “Professores” não integra o sujeito da oração; é um chamamento dirigido ao interlocutor.",
        "feedbackErro": "A resposta correta é: vocativo, por indicar o interlocutor da ordem. “Professores” não integra o sujeito da oração; é um chamamento dirigido ao interlocutor.",
        "dicaBanca": "Vocativo não exerce função sintática dentro do predicado e costuma ser isolado por vírgulas."
    },
    {
        "pergunta": "Na frase “A diretora anda preocupada com os resultados”, o verbo “anda” funciona como:",
        "alternativas": [
            "verbo de ligação, pois relaciona o sujeito ao estado expresso por “preocupada”.",
            "verbo intransitivo de deslocamento, tendo “com os resultados” como adjunto de lugar.",
            "verbo transitivo indireto, pois exige a preposição presente em “com os resultados”.",
            "verbo auxiliar, formando uma locução verbal com o adjetivo “preocupada”.",
            "verbo transitivo direto, tendo “preocupada” como objeto direto."
        ],
        "correta": 0,
        "explicacao": "No contexto, “andar” equivale a “estar” e liga “A diretora” ao predicativo “preocupada”.",
        "feedbackAcerto": "Correto. No contexto, “andar” equivale a “estar” e liga “A diretora” ao predicativo “preocupada”.",
        "feedbackErro": "A resposta correta é: verbo de ligação, pois relaciona o sujeito ao estado expresso por “preocupada”. No contexto, “andar” equivale a “estar” e liga “A diretora” ao predicativo “preocupada”.",
        "dicaBanca": "O mesmo verbo pode mudar de predicação: compare “anda preocupada” com “anda pela praça”."
    },
    {
        "pergunta": "Compare: I. “O aluno ficou nervoso.” II. “O aluno ficou na biblioteca.” Em relação ao verbo “ficar”, é correto afirmar que:",
        "alternativas": [
            "em ambas é verbo de ligação, pois “ficar” conserva valor de estado nos dois casos.",
            "em I é transitivo direto; em II, transitivo indireto por causa da preposição.",
            "em ambas é auxiliar de uma locução verbal elíptica.",
            "em I é intransitivo; em II, verbo de ligação, pois “biblioteca” caracteriza o sujeito.",
            "I: verbo de ligação; II: verbo nocional com adjunto adverbial de lugar."
        ],
        "correta": 4,
        "explicacao": "Em I, “nervoso” é estado do sujeito; em II, “na biblioteca” indica lugar, e “ficar” mantém sentido nocional de permanecer.",
        "feedbackAcerto": "Correto. Em I, “nervoso” é estado do sujeito; em II, “na biblioteca” indica lugar, e “ficar” mantém sentido nocional de permanecer.",
        "feedbackErro": "A resposta correta é: I: verbo de ligação; II: verbo nocional com adjunto adverbial de lugar. Em I, “nervoso” é estado do sujeito; em II, “na biblioteca” indica lugar, e “ficar” mantém sentido nocional de permanecer.",
        "dicaBanca": "Predicação verbal depende do uso concreto do verbo na frase."
    },
    {
        "pergunta": "Em “A comissão julgou procedente o recurso”, a estrutura sintática do predicado contém:",
        "alternativas": [
            "verbo de ligação, sujeito “o recurso” e predicativo do sujeito “procedente”.",
            "verbo intransitivo e dois adjuntos adverbiais de modo.",
            "verbo transitivo direto e objeto direto representado pelo termo “procedente”.",
            "verbo transitivo direto, objeto direto “o recurso” e predicativo do objeto “procedente”.",
            "verbo transitivo indireto, objeto indireto “o recurso” e adjunto adnominal “procedente”."
        ],
        "correta": 3,
        "explicacao": "“Julgar”, no sentido de considerar, seleciona objeto direto e pode atribuir-lhe uma característica por meio de predicativo do objeto.",
        "feedbackAcerto": "Correto. “Julgar”, no sentido de considerar, seleciona objeto direto e pode atribuir-lhe uma característica por meio de predicativo do objeto.",
        "feedbackErro": "A resposta correta é: verbo transitivo direto, objeto direto “o recurso” e predicativo do objeto “procedente”. “Julgar”, no sentido de considerar, seleciona objeto direto e pode atribuir-lhe uma característica por meio de predicativo do objeto.",
        "dicaBanca": "Em construções com considerar/julgar/achar, teste se o adjetivo caracteriza o objeto."
    },
    {
        "pergunta": "Na oração “Vendem-se livros didáticos nesta loja”, a análise correta é:",
        "alternativas": [
            "“nesta loja” é sujeito simples, pois indica o local em que ocorre a ação.",
            "“livros didáticos” é objeto direto, e “se” indetermina o sujeito.",
            "o sujeito é oculto “eles”, recuperável pela flexão verbal.",
            "“livros didáticos” é sujeito paciente, e “se” é partícula apassivadora.",
            "o sujeito é inexistente, porque a construção está na terceira pessoa do plural."
        ],
        "correta": 3,
        "explicacao": "A construção equivale a “Livros didáticos são vendidos nesta loja”; por isso há voz passiva sintética.",
        "feedbackAcerto": "Correto. A construção equivale a “Livros didáticos são vendidos nesta loja”; por isso há voz passiva sintética.",
        "feedbackErro": "A resposta correta é: “livros didáticos” é sujeito paciente, e “se” é partícula apassivadora. A construção equivale a “Livros didáticos são vendidos nesta loja”; por isso há voz passiva sintética.",
        "dicaBanca": "Com VTD ou VTDI + se, verifique se é possível transformar a estrutura em passiva analítica."
    },
    {
        "pergunta": "Na oração “Obedece-se às normas de segurança”, o “se” funciona como:",
        "alternativas": [
            "pronome reflexivo, porque o sujeito pratica e recebe a mesma ação.",
            "partícula apassivadora, e “às normas de segurança” é sujeito paciente.",
            "pronome recíproco, porque há ação mútua entre normas e agentes.",
            "índice de indeterminação do sujeito, com verbo transitivo indireto.",
            "partícula expletiva, sem qualquer relação com a estrutura do sujeito."
        ],
        "correta": 3,
        "explicacao": "“Obedecer” rege preposição “a”; com VTI + se, o sujeito fica indeterminado e o verbo permanece na terceira pessoa do singular.",
        "feedbackAcerto": "Correto. “Obedecer” rege preposição “a”; com VTI + se, o sujeito fica indeterminado e o verbo permanece na terceira pessoa do singular.",
        "feedbackErro": "A resposta correta é: índice de indeterminação do sujeito, com verbo transitivo indireto. “Obedecer” rege preposição “a”; com VTI + se, o sujeito fica indeterminado e o verbo permanece na terceira pessoa do singular.",
        "dicaBanca": "Se o termo após o verbo é introduzido por preposição exigida pela regência, desconfie de índice de indeterminação."
    },
    {
        "pergunta": "Em “Os livros que chegaram ontem serão catalogados”, o pronome relativo “que” exerce, na oração que introduz, a função de:",
        "alternativas": [
            "objeto direto do verbo “chegaram”.",
            "objeto indireto, pois retoma “livros” por meio de preposição implícita.",
            "adjunto adverbial de tempo, porque se relaciona com “ontem”.",
            "predicativo do sujeito, porque caracteriza o antecedente “livros”.",
            "sujeito do verbo “chegaram”."
        ],
        "correta": 4,
        "explicacao": "Na oração “que chegaram ontem”, o relativo substitui “os livros”: “os livros chegaram ontem”; logo, exerce função de sujeito.",
        "feedbackAcerto": "Correto. Na oração “que chegaram ontem”, o relativo substitui “os livros”: “os livros chegaram ontem”; logo, exerce função de sujeito.",
        "feedbackErro": "A resposta correta é: sujeito do verbo “chegaram”. Na oração “que chegaram ontem”, o relativo substitui “os livros”: “os livros chegaram ontem”; logo, exerce função de sujeito.",
        "dicaBanca": "Para descobrir a função do pronome relativo, substitua-o pelo antecedente dentro da oração subordinada."
    },
    {
        "pergunta": "Em “O relatório que a equipe revisou será enviado hoje”, o pronome relativo “que” funciona, na oração subordinada, como:",
        "alternativas": [
            "sujeito de “revisou”, porque retoma “relatório”.",
            "objeto indireto, pois todo relativo depende de preposição.",
            "objeto direto de “revisou”.",
            "complemento nominal de “equipe”.",
            "adjunto adverbial, pois antecipa a circunstância de tempo."
        ],
        "correta": 2,
        "explicacao": "Reconstituindo a oração: “a equipe revisou o relatório”; “o relatório” é objeto direto de “revisou”.",
        "feedbackAcerto": "Correto. Reconstituindo a oração: “a equipe revisou o relatório”; “o relatório” é objeto direto de “revisou”.",
        "feedbackErro": "A resposta correta é: objeto direto de “revisou”. Reconstituindo a oração: “a equipe revisou o relatório”; “o relatório” é objeto direto de “revisou”.",
        "dicaBanca": "O antecedente do relativo não determina sua função; é preciso analisar o papel que ele desempenha na oração subordinada."
    },
    {
        "pergunta": "Na frase “Este é o recurso de que precisamos”, o pronome relativo “que”, precedido de “de”, exerce a função de:",
        "alternativas": [
            "objeto indireto do verbo “precisamos”.",
            "adjunto adnominal, porque especifica o substantivo “recurso”.",
            "complemento nominal do pronome demonstrativo “Este”.",
            "objeto direto preposicionado, já que a preposição é facultativa com “precisar”.",
            "sujeito simples, porque retoma o antecedente “recurso”."
        ],
        "correta": 0,
        "explicacao": "O verbo “precisar”, no sentido de necessitar, rege “de”; na oração “precisamos do recurso”, o termo é objeto indireto.",
        "feedbackAcerto": "Correto. O verbo “precisar”, no sentido de necessitar, rege “de”; na oração “precisamos do recurso”, o termo é objeto indireto.",
        "feedbackErro": "A resposta correta é: objeto indireto do verbo “precisamos”. O verbo “precisar”, no sentido de necessitar, rege “de”; na oração “precisamos do recurso”, o termo é objeto indireto.",
        "dicaBanca": "A preposição antes do relativo costuma revelar a regência do termo que vem depois, não a função do antecedente."
    },
    {
        "pergunta": "Em “A coordenadora entregou-lhe o documento”, o pronome “lhe” exerce a função de:",
        "alternativas": [
            "complemento nominal do substantivo “coordenadora”.",
            "objeto indireto, equivalente a “a ele/a ela”.",
            "sujeito oculto do verbo “entregou”.",
            "predicativo do objeto “documento”.",
            "objeto direto, equivalente a “o/a”."
        ],
        "correta": 1,
        "explicacao": "Na construção “entregar algo a alguém”, “lhe” representa o destinatário e funciona como objeto indireto.",
        "feedbackAcerto": "Correto. Na construção “entregar algo a alguém”, “lhe” representa o destinatário e funciona como objeto indireto.",
        "feedbackErro": "A resposta correta é: objeto indireto, equivalente a “a ele/a ela”. Na construção “entregar algo a alguém”, “lhe” representa o destinatário e funciona como objeto indireto.",
        "dicaBanca": "Pronomes “lhe/lhes” são, em regra, objetos indiretos quando completam verbos."
    },
    {
        "pergunta": "Em “Os resultados surpreenderam-na”, o pronome “na” exerce a função de:",
        "alternativas": [
            "objeto direto do verbo “surpreenderam”.",
            "predicativo do sujeito, porque caracteriza “resultados”.",
            "sujeito simples, pois representa a pessoa afetada pela ação.",
            "adjunto adnominal, porque substitui um termo nominal feminino.",
            "objeto indireto, porque pronomes átonos femininos exigem preposição."
        ],
        "correta": 0,
        "explicacao": "“Surpreender” é transitivo direto nesse contexto; “na” equivale a “a ela” como objeto direto, sem preposição regida pelo verbo.",
        "feedbackAcerto": "Correto. “Surpreender” é transitivo direto nesse contexto; “na” equivale a “a ela” como objeto direto, sem preposição regida pelo verbo.",
        "feedbackErro": "A resposta correta é: objeto direto do verbo “surpreenderam”. “Surpreender” é transitivo direto nesse contexto; “na” equivale a “a ela” como objeto direto, sem preposição regida pelo verbo.",
        "dicaBanca": "Não confunda a forma “a ela” usada na explicação semântica com objeto indireto: verifique a regência do verbo."
    },
    {
        "pergunta": "Em “Aos alunos, o professor explicou-lhes novamente a regra”, a relação entre “Aos alunos” e “lhes” é de:",
        "alternativas": [
            "subordinação: “lhes” funciona como complemento nominal de “alunos”.",
            "objeto indireto pleonástico, com retomada pronominal do termo deslocado.",
            "aposição: o pronome “lhes” explica o conteúdo do termo “Aos alunos”.",
            "coordenação: são dois objetos indiretos independentes com referentes distintos.",
            "predicação: “Aos alunos” é predicativo e “lhes” é objeto direto."
        ],
        "correta": 1,
        "explicacao": "O termo preposicionado foi antecipado e retomado pelo clítico “lhes”, formando objeto indireto pleonástico.",
        "feedbackAcerto": "Correto. O termo preposicionado foi antecipado e retomado pelo clítico “lhes”, formando objeto indireto pleonástico.",
        "feedbackErro": "A resposta correta é: objeto indireto pleonástico, com retomada pronominal do termo deslocado. O termo preposicionado foi antecipado e retomado pelo clítico “lhes”, formando objeto indireto pleonástico.",
        "dicaBanca": "Em estruturas com tópico deslocado, observe se um pronome átono retoma o mesmo referente e a mesma função."
    },
    {
        "pergunta": "Em “A diretora encontrou a servidora preocupada”, a frase é estruturalmente ambígua porque “preocupada” pode:",
        "alternativas": [
            "ser complemento nominal ou adjunto adnominal, porque está ligado a um nome feminino.",
            "atuar como vocativo ou aposto explicativo, conforme a entonação empregada.",
            "funcionar como objeto direto ou objeto indireto, sem alteração da relação de sentido.",
            "predicativo do objeto “a servidora” ou do sujeito “A diretora”, conforme a leitura.",
            "ser sujeito simples ou agente da passiva, conforme sua posição em relação ao verbo."
        ],
        "correta": 3,
        "explicacao": "Como “A diretora” e “a servidora” são femininos singulares, “preocupada” pode caracterizar uma ou outra, e o contexto é necessário para desfazer a ambiguidade.",
        "feedbackAcerto": "Correto. Como “A diretora” e “a servidora” são femininos singulares, “preocupada” pode caracterizar uma ou outra, e o contexto é necessário para desfazer a ambiguidade.",
        "feedbackErro": "A resposta correta é: predicativo do objeto “a servidora” ou do sujeito “A diretora”, conforme a leitura. Como “A diretora” e “a servidora” são femininos singulares, “preocupada” pode caracterizar uma ou outra, e o contexto é necessário para desfazer a ambiguidade.",
        "dicaBanca": "Ambiguidade sintática pode surgir quando um termo predicativo concorda formalmente com mais de um constituinte possível."
    },
    {
        "pergunta": "Qual reescrita elimina a ambiguidade de “O professor informou ao coordenador que seu relatório estava incompleto”, deixando claro que o relatório pertence ao coordenador?",
        "alternativas": [
            "O professor, ao coordenador, informou que seu relatório estava incompleto.",
            "O professor informou-lhe que seu relatório pessoal estava incompleto naquela etapa de revisão.",
            "O professor informou ao coordenador que o relatório do coordenador estava incompleto.",
            "O professor informou ao coordenador sobre seu relatório incompleto.",
            "O professor informou que seu relatório estava incompleto ao coordenador."
        ],
        "correta": 2,
        "explicacao": "A explicitação do possuidor (“do coordenador”) elimina a possibilidade de “seu” retomar o professor.",
        "feedbackAcerto": "Correto. A explicitação do possuidor (“do coordenador”) elimina a possibilidade de “seu” retomar o professor.",
        "feedbackErro": "A resposta correta é: O professor informou ao coordenador que o relatório do coordenador estava incompleto. A explicitação do possuidor (“do coordenador”) elimina a possibilidade de “seu” retomar o professor.",
        "dicaBanca": "Pronomes possessivos de terceira pessoa são fontes frequentes de ambiguidade referencial."
    },
    {
        "pergunta": "Na transformação de “A equipe revisou o relatório” para “O relatório foi revisado pela equipe”, ocorre:",
        "alternativas": [
            "o adjunto adverbial da ativa passa a objeto direto da voz passiva.",
            "o sujeito da ativa desaparece necessariamente, sem possibilidade de expressão.",
            "o predicativo do objeto passa a complemento nominal na voz passiva.",
            "o objeto indireto da ativa passa a sujeito agente, mantendo-se o sujeito original.",
            "o objeto direto passa a sujeito paciente, e o sujeito passa a agente da passiva."
        ],
        "correta": 4,
        "explicacao": "A passivização de verbo transitivo direto promove o objeto direto a sujeito paciente; o antigo sujeito pode aparecer como agente da passiva.",
        "feedbackAcerto": "Correto. A passivização de verbo transitivo direto promove o objeto direto a sujeito paciente; o antigo sujeito pode aparecer como agente da passiva.",
        "feedbackErro": "A resposta correta é: o objeto direto passa a sujeito paciente, e o sujeito passa a agente da passiva. A passivização de verbo transitivo direto promove o objeto direto a sujeito paciente; o antigo sujeito pode aparecer como agente da passiva.",
        "dicaBanca": "Para conferir a transformação, acompanhe a função de cada termo antes e depois da mudança de voz."
    },
    {
        "pergunta": "Em “Foram entregues aos professores os novos materiais”, a análise correta é:",
        "alternativas": [
            "o sujeito é indeterminado, e ambos os termos são complementos verbais.",
            "“aos professores” é sujeito paciente, e “os novos materiais” é objeto direto.",
            "“os novos materiais” é sujeito paciente; “aos professores”, objeto indireto.",
            "a oração não possui sujeito, porque a locução verbal está na voz passiva.",
            "“os novos materiais” é agente da passiva, e “aos professores” é adjunto adverbial."
        ],
        "correta": 2,
        "explicacao": "A construção corresponde a “Alguém entregou os novos materiais aos professores”; na passiva, o OD vira sujeito paciente, enquanto o OI permanece.",
        "feedbackAcerto": "Correto. A construção corresponde a “Alguém entregou os novos materiais aos professores”; na passiva, o OD vira sujeito paciente, enquanto o OI permanece.",
        "feedbackErro": "A resposta correta é: “os novos materiais” é sujeito paciente; “aos professores”, objeto indireto. A construção corresponde a “Alguém entregou os novos materiais aos professores”; na passiva, o OD vira sujeito paciente, enquanto o OI permanece.",
        "dicaBanca": "Na passiva de verbos transitivos diretos e indiretos, apenas o objeto direto é promovido a sujeito."
    },
    {
        "pergunta": "Em “O respeito às diferenças deve orientar a prática pedagógica”, a expressão “às diferenças” funciona como:",
        "alternativas": [
            "objeto indireto do verbo “orientar”.",
            "predicativo do sujeito “O respeito”.",
            "complemento nominal do substantivo abstrato “respeito”.",
            "adjunto adnominal, porque indica o agente que pratica o respeito.",
            "adjunto adverbial de finalidade."
        ],
        "correta": 2,
        "explicacao": "“Às diferenças” indica o alvo do respeito e completa o substantivo abstrato “respeito”.",
        "feedbackAcerto": "Correto. “Às diferenças” indica o alvo do respeito e completa o substantivo abstrato “respeito”.",
        "feedbackErro": "A resposta correta é: complemento nominal do substantivo abstrato “respeito”. “Às diferenças” indica o alvo do respeito e completa o substantivo abstrato “respeito”.",
        "dicaBanca": "Em nomes abstratos, termos com valor de alvo/paciente tendem a funcionar como complemento nominal."
    },
    {
        "pergunta": "Em “Os projetos da escola receberam financiamento”, o segmento “da escola” exerce a função de:",
        "alternativas": [
            "adjunto adnominal, indicando pertencimento em relação a “projetos”.",
            "agente da passiva, porque a escola financia os projetos.",
            "objeto indireto, porque completa o verbo “receberam” por meio de preposição.",
            "predicativo do sujeito, porque atribui estado aos projetos.",
            "complemento nominal, porque todo termo preposicionado ligado a substantivo é complemento."
        ],
        "correta": 0,
        "explicacao": "“Da escola” determina quais projetos são mencionados, expressando pertencimento; não completa um nome abstrato de sentido incompleto.",
        "feedbackAcerto": "Correto. “Da escola” determina quais projetos são mencionados, expressando pertencimento; não completa um nome abstrato de sentido incompleto.",
        "feedbackErro": "A resposta correta é: adjunto adnominal, indicando pertencimento em relação a “projetos”. “Da escola” determina quais projetos são mencionados, expressando pertencimento; não completa um nome abstrato de sentido incompleto.",
        "dicaBanca": "Preposição não basta para identificar complemento nominal: examine a natureza do nome e a relação de sentido."
    },
    {
        "pergunta": "Na frase “A professora, muito cansada, encerrou a reunião”, a expressão “muito cansada” é:",
        "alternativas": [
            "adjunto adverbial de intensidade, porque modifica diretamente o verbo “encerrou”.",
            "objeto direto, porque completa o sentido do verbo “encerrou”.",
            "aposto explicativo, porque renomeia a professora com outra expressão nominal.",
            "adjunto adnominal, porque caracteriza permanentemente o núcleo do sujeito.",
            "predicativo do sujeito, exprimindo estado circunstancial da professora."
        ],
        "correta": 4,
        "explicacao": "A expressão adjetiva atribui um estado ao sujeito enquanto a ação ocorre, funcionando como predicativo do sujeito.",
        "feedbackAcerto": "Correto. A expressão adjetiva atribui um estado ao sujeito enquanto a ação ocorre, funcionando como predicativo do sujeito.",
        "feedbackErro": "A resposta correta é: predicativo do sujeito, exprimindo estado circunstancial da professora. A expressão adjetiva atribui um estado ao sujeito enquanto a ação ocorre, funcionando como predicativo do sujeito.",
        "dicaBanca": "Nem todo termo entre vírgulas é aposto: verifique se ele renomeia um substantivo ou predica uma característica."
    },
    {
        "pergunta": "Em “A professora dedicada recebeu a homenagem”, o termo “dedicada” funciona como:",
        "alternativas": [
            "adjunto adverbial de modo, porque indica como a professora recebeu a homenagem.",
            "adjunto adnominal, integrado ao sintagma “A professora dedicada”.",
            "complemento nominal, porque completa o sentido do substantivo “professora”.",
            "predicativo do objeto, porque “homenagem” recebe a característica.",
            "predicativo do sujeito, porque toda qualidade atribuída ao sujeito tem essa função."
        ],
        "correta": 1,
        "explicacao": "Sem verbo de ligação ou relação predicativa circunstancial, “dedicada” integra o grupo nominal “A professora dedicada” como adjunto adnominal.",
        "feedbackAcerto": "Correto. Sem verbo de ligação ou relação predicativa circunstancial, “dedicada” integra o grupo nominal “A professora dedicada” como adjunto adnominal.",
        "feedbackErro": "A resposta correta é: adjunto adnominal, integrado ao sintagma “A professora dedicada”. Sem verbo de ligação ou relação predicativa circunstancial, “dedicada” integra o grupo nominal “A professora dedicada” como adjunto adnominal.",
        "dicaBanca": "Compare “a professora dedicada” com “a professora chegou dedicada ao projeto”: a posição e a relação predicativa mudam a função."
    },
    {
        "pergunta": "Na frase “O resultado deixou os candidatos satisfeitos”, a análise correta é:",
        "alternativas": [
            "“os candidatos” é sujeito simples, e “satisfeitos” é predicativo do sujeito.",
            "“os candidatos” é objeto direto, e “satisfeitos” é predicativo desse objeto.",
            "“os candidatos” é objeto indireto, e “satisfeitos” é complemento nominal.",
            "“satisfeitos” é objeto direto, e “os candidatos” é agente da passiva.",
            "“satisfeitos” é adjunto adnominal, integrante do sintagma “os candidatos”."
        ],
        "correta": 1,
        "explicacao": "O verbo “deixar”, no sentido de tornar, seleciona objeto direto e atribui-lhe um estado por meio de predicativo do objeto.",
        "feedbackAcerto": "Correto. O verbo “deixar”, no sentido de tornar, seleciona objeto direto e atribui-lhe um estado por meio de predicativo do objeto.",
        "feedbackErro": "A resposta correta é: “os candidatos” é objeto direto, e “satisfeitos” é predicativo desse objeto. O verbo “deixar”, no sentido de tornar, seleciona objeto direto e atribui-lhe um estado por meio de predicativo do objeto.",
        "dicaBanca": "Teste a paráfrase “O resultado tornou os candidatos satisfeitos”."
    },
    {
        "pergunta": "Em “Os alunos assistiram atentos à apresentação”, o termo “atentos” é:",
        "alternativas": [
            "objeto indireto, porque se relaciona semanticamente com “à apresentação”.",
            "adjunto adnominal, porque acompanha o substantivo “alunos” dentro do mesmo sintagma.",
            "adjunto adverbial de modo, porque todo adjetivo após verbo indica circunstância.",
            "objeto direto, porque completa o sentido do verbo “assistiram”.",
            "predicativo do sujeito, pois expressa o estado dos alunos durante a ação."
        ],
        "correta": 4,
        "explicacao": "“Atentos” predica uma característica do sujeito “Os alunos” enquanto eles assistem à apresentação.",
        "feedbackAcerto": "Correto. “Atentos” predica uma característica do sujeito “Os alunos” enquanto eles assistem à apresentação.",
        "feedbackErro": "A resposta correta é: predicativo do sujeito, pois expressa o estado dos alunos durante a ação. “Atentos” predica uma característica do sujeito “Os alunos” enquanto eles assistem à apresentação.",
        "dicaBanca": "Adjetivo ligado circunstancialmente ao sujeito costuma exercer função de predicativo, não de adjunto adverbial."
    },
    {
        "pergunta": "Na frase “A resposta do candidato ao examinador foi objetiva”, a expressão “ao examinador” é:",
        "alternativas": [
            "adjunto adnominal, porque indica o autor da resposta.",
            "complemento nominal de “resposta”, indicando o destinatário.",
            "adjunto adverbial de direção, porque indica deslocamento físico.",
            "agente da passiva, porque o examinador produz a resposta.",
            "objeto indireto do verbo de ligação “foi”."
        ],
        "correta": 1,
        "explicacao": "“Ao examinador” completa o sentido do substantivo abstrato “resposta” e indica seu destinatário.",
        "feedbackAcerto": "Correto. “Ao examinador” completa o sentido do substantivo abstrato “resposta” e indica seu destinatário.",
        "feedbackErro": "A resposta correta é: complemento nominal de “resposta”, indicando o destinatário. “Ao examinador” completa o sentido do substantivo abstrato “resposta” e indica seu destinatário.",
        "dicaBanca": "Em substantivos de ação, diferencie o agente (“do candidato”) do alvo/destinatário (“ao examinador”)."
    },
    {
        "pergunta": "Considere “O diretor nomeou Ana coordenadora”. A palavra “coordenadora” exerce a função de:",
        "alternativas": [
            "adjunto adnominal, porque integra necessariamente o nome próprio “Ana”.",
            "aposto especificativo, porque renomeia Ana sem estabelecer relação predicativa com o verbo.",
            "predicativo do objeto, indicando a condição atribuída a Ana.",
            "objeto direto, enquanto “Ana” funciona como objeto indireto.",
            "predicativo do sujeito, porque caracteriza o diretor após a nomeação."
        ],
        "correta": 2,
        "explicacao": "“Ana” é objeto direto de “nomeou”, e “coordenadora” é o predicativo que indica a condição atribuída a esse objeto.",
        "feedbackAcerto": "Correto. “Ana” é objeto direto de “nomeou”, e “coordenadora” é o predicativo que indica a condição atribuída a esse objeto.",
        "feedbackErro": "A resposta correta é: predicativo do objeto, indicando a condição atribuída a Ana. “Ana” é objeto direto de “nomeou”, e “coordenadora” é o predicativo que indica a condição atribuída a esse objeto.",
        "dicaBanca": "Verbos como nomear, eleger, considerar e julgar frequentemente aparecem com predicativo do objeto."
    },
    {
        "pergunta": "Em “Ao final da reunião, restaram três questões pendentes”, a análise do sujeito é:",
        "alternativas": [
            "sujeito simples posposto: “três questões pendentes”.",
            "o sujeito é indeterminado, porque o verbo antecede o termo nominal.",
            "“três questões” é objeto direto, porque recebe o sentido do verbo.",
            "“Ao final da reunião” é sujeito simples, pois aparece antes do verbo.",
            "não há sujeito, pois “restar” funciona como verbo impessoal nessa construção."
        ],
        "correta": 0,
        "explicacao": "O verbo “restar” é pessoal nesse uso e concorda com o sujeito posposto “três questões pendentes”.",
        "feedbackAcerto": "Correto. O verbo “restar” é pessoal nesse uso e concorda com o sujeito posposto “três questões pendentes”.",
        "feedbackErro": "A resposta correta é: sujeito simples posposto: “três questões pendentes”. O verbo “restar” é pessoal nesse uso e concorda com o sujeito posposto “três questões pendentes”.",
        "dicaBanca": "A posição pós-verbal não transforma o sujeito em objeto; confira a concordância e a relação semântica."
    },
    {
        "pergunta": "Em “A aprovação dos candidatos pela comissão ocorreu ontem”, as expressões “dos candidatos” e “pela comissão” exercem, respectivamente, as funções de:",
        "alternativas": [
            "“dos candidatos”: complemento nominal; “pela comissão”: adjunto adnominal.",
            "complemento nominal e objeto indireto, porque as duas expressões são preposicionadas.",
            "adjunto adnominal e complemento nominal: os candidatos são agentes, e a comissão é o alvo.",
            "objeto direto e agente da passiva, pois ambos dependem do verbo “ocorreu”.",
            "predicativo do sujeito e adjunto adverbial, pois qualificam o núcleo “aprovação”."
        ],
        "correta": 0,
        "explicacao": "No substantivo abstrato “aprovação”, “dos candidatos” tem valor paciente/alvo e funciona como complemento nominal; “pela comissão” tem valor agente e funciona como adjunto adnominal.",
        "feedbackAcerto": "Correto. No substantivo abstrato “aprovação”, “dos candidatos” tem valor paciente/alvo e funciona como complemento nominal; “pela comissão” tem valor agente e funciona como adjunto adnominal.",
        "feedbackErro": "A resposta correta é: “dos candidatos”: complemento nominal; “pela comissão”: adjunto adnominal. No substantivo abstrato “aprovação”, “dos candidatos” tem valor paciente/alvo e funciona como complemento nominal; “pela comissão” tem valor agente e funciona como adjunto adnominal.",
        "dicaBanca": "Com substantivos abstratos derivados de verbos, a oposição agente × paciente é decisiva para distinguir adjunto adnominal de complemento nominal."
    }
];
