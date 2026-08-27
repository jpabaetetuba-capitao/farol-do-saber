// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// CONCEITOS DE ÉTICA — BANCO REVISADO 2026
// Ética e moral; princípios; valores; integridade; responsabilidade;
// ética pública; cidadania; democracia; conflito de interesses;
// Código de Ética — Decreto nº 1.171/1994.
// Padrão Instituto Ágata — 50 questões + feedbacks específicos.
// ============================================================

const eticaConceitos = [
    {
        "pergunta": "Em sentido conceitual, ética e moral distinguem-se porque:",
        "alternativas": [
            "a ética trata somente da vida privada, enquanto a moral se aplica apenas ao serviço público.",
            "ética e moral são termos rigorosamente idênticos em qualquer contexto.",
            "a ética corresponde apenas às leis escritas, enquanto a moral corresponde apenas às decisões judiciais.",
            "a moral é sempre universal e imutável, enquanto a ética varia conforme cada pessoa.",
            "a moral reúne costumes, valores e normas de um grupo, enquanto a ética reflete criticamente sobre a conduta e seus fundamentos."
        ],
        "correta": 4,
        "explicacao": "A moral costuma referir-se ao conjunto de costumes, normas e valores vividos por uma coletividade; a ética envolve reflexão crítica sobre a ação humana e seus fundamentos.",
        "feedbackAcerto": "Correto. A alternativa preserva a distinção entre normas e costumes vividos e a reflexão crítica sobre como agir.",
        "feedbackErro": "A pegadinha é inverter os conceitos ou tratá-los como sinônimos perfeitos. Em concursos, a moral aparece mais ligada a costumes e valores socialmente compartilhados.",
        "dicaBanca": "A Ágata pode cobrar a diferença entre ética e moral em formulações muito próximas."
    },
    {
        "pergunta": "Sobre a moral, assinale a alternativa correta:",
        "alternativas": [
            "relaciona-se a valores, costumes e regras de conduta compartilhados em determinado contexto social.",
            "é sinônimo de lei penal e existe apenas quando há sanção estatal.",
            "corresponde exclusivamente à reflexão filosófica sobre o bem e o mal.",
            "é composta somente por princípios universais, sem influência histórica ou cultural.",
            "não possui relação com padrões de comportamento aceitos por grupos sociais."
        ],
        "correta": 0,
        "explicacao": "Moral relaciona-se a valores, costumes e regras de conduta efetivamente vividos por indivíduos e grupos.",
        "feedbackAcerto": "Correto. A moral possui dimensão social e histórica e orienta comportamentos concretos.",
        "feedbackErro": "Se você marcou reflexão filosófica, aproximou-se do conceito de ética. Moral não se limita a norma jurídica nem é necessariamente imutável.",
        "dicaBanca": "Palavra-chave: costumes e valores compartilhados."
    },
    {
        "pergunta": "A ética, no campo do serviço público, não se limita:",
        "alternativas": [
            "à moralidade administrativa, porque toda ação legal é automaticamente ética.",
            "à observância de ordens superiores, pois dispensa qualquer referência normativa.",
            "à busca do interesse coletivo, porque deve priorizar preferências pessoais do agente.",
            "ao cumprimento formal da lei, pois também envolve integridade, finalidade pública e responsabilidade.",
            "à atuação funcional, porque decisões públicas devem seguir apenas convicções privadas."
        ],
        "correta": 3,
        "explicacao": "A atuação ética no serviço público ultrapassa a legalidade estrita e considera integridade, finalidade pública, responsabilidade e confiança institucional.",
        "feedbackAcerto": "Correto. Uma conduta pode ser formalmente permitida e ainda assim merecer avaliação ética quanto à finalidade e à forma de agir.",
        "feedbackErro": "O erro é equiparar automaticamente legalidade e ética. O cumprimento da lei é essencial, mas não esgota a dimensão ética.",
        "dicaBanca": "Questões recentes de ética pública exploram a ideia de que legalidade e ética não são sinônimos."
    },
    {
        "pergunta": "Um valor ético pode ser entendido como:",
        "alternativas": [
            "uma ordem administrativa emitida por autoridade hierarquicamente superior.",
            "uma referência que orienta escolhas e comportamentos considerados desejáveis, como honestidade e respeito.",
            "uma penalidade aplicada quando o servidor descumpre determinada norma.",
            "uma regra técnica usada apenas para organizar procedimentos internos.",
            "um direito subjetivo que independe de qualquer avaliação de conduta."
        ],
        "correta": 1,
        "explicacao": "Valores são referências que orientam preferências e comportamentos, como honestidade, justiça, respeito e responsabilidade.",
        "feedbackAcerto": "Correto. Valores influenciam a forma como se avaliam escolhas e ações.",
        "feedbackErro": "Não confunda valor com regra, sanção ou ordem. O valor funciona como referência orientadora da conduta.",
        "dicaBanca": "Ágata pode pedir a diferença entre valor, princípio e regra."
    },
    {
        "pergunta": "Princípios éticos diferenciam-se de regras específicas porque, em geral:",
        "alternativas": [
            "produzem sempre uma única solução automática para qualquer situação.",
            "descrevem apenas procedimentos administrativos detalhados e fechados.",
            "expressam orientações mais amplas que servem de fundamento para avaliar e conduzir comportamentos.",
            "existem somente quando acompanhados de sanção penal expressa.",
            "não possuem relação com valores ou critérios de decisão."
        ],
        "correta": 2,
        "explicacao": "Princípios são orientações gerais e fundamentais que informam a interpretação e a conduta, enquanto regras tendem a ser mais específicas.",
        "feedbackAcerto": "Correto. O princípio fornece direção e fundamento, sem necessariamente descrever cada passo do comportamento.",
        "feedbackErro": "O erro é tratar princípio como comando operacional fechado ou como simples sinônimo de regra.",
        "dicaBanca": "Observe o grau de generalidade: princípio é mais amplo que uma regra específica."
    },
    {
        "pergunta": "Integridade no serviço público está mais diretamente associada a:",
        "alternativas": [
            "obediência automática a qualquer ordem recebida pela chefia.",
            "cumprimento de metas mesmo quando os meios utilizados contrariem padrões éticos.",
            "defesa de interesses pessoais desde que não exista proibição expressa.",
            "coerência entre valores, normas e condutas, evitando vantagens indevidas e desvios de finalidade.",
            "preservação da imagem institucional por meio da ocultação de erros."
        ],
        "correta": 3,
        "explicacao": "Integridade envolve coerência entre valores, normas e ação concreta, com honestidade e compromisso com a finalidade pública.",
        "feedbackAcerto": "Correto. A integridade não depende apenas do resultado alcançado, mas também dos meios utilizados.",
        "feedbackErro": "Ocultar falhas, buscar vantagens pessoais ou cumprir ordens sem análise não caracteriza integridade.",
        "dicaBanca": "Integridade costuma aparecer ligada a coerência e prevenção de desvios."
    },
    {
        "pergunta": "Responsabilidade ética significa que o agente:",
        "alternativas": [
            "pode transferir toda responsabilidade à chefia sempre que agir por orientação superior.",
            "deve considerar consequências de seus atos e responder pelas escolhas realizadas no exercício de suas funções.",
            "é responsável apenas quando obtém vantagem financeira com sua conduta.",
            "deve evitar decisões difíceis para reduzir risco de responsabilização.",
            "responde somente por resultados, independentemente dos meios utilizados."
        ],
        "correta": 1,
        "explicacao": "Responsabilidade ética envolve consciência sobre escolhas, consequências e dever de responder pela própria atuação.",
        "feedbackAcerto": "Correto. A existência de hierarquia não elimina completamente a responsabilidade individual.",
        "feedbackErro": "O erro é imaginar que responsabilidade depende apenas de ganho financeiro ou que pode ser sempre transferida a outra pessoa.",
        "dicaBanca": "Responsabilidade ética inclui meios, decisões e consequências."
    },
    {
        "pergunta": "A imparcialidade no serviço público exige:",
        "alternativas": [
            "seguir preferências da maioria dos servidores, independentemente da norma.",
            "tratar todas as situações de forma idêntica, mesmo quando existam diferenças relevantes.",
            "evitar qualquer contato com usuários para preservar neutralidade absoluta.",
            "priorizar conhecidos quando a decisão não gerar prejuízo financeiro ao órgão.",
            "decidir com base em critérios objetivos e no interesse público, sem favorecimentos pessoais indevidos."
        ],
        "correta": 4,
        "explicacao": "Imparcialidade exige afastar preferências pessoais e favorecimentos, utilizando critérios legítimos e objetivos.",
        "feedbackAcerto": "Correto. Imparcialidade não significa ignorar diferenças relevantes, mas evitar privilégios e perseguições.",
        "feedbackErro": "Tratamento equitativo pode ser diferenciado quando houver fundamento legítimo; o problema ético é o favorecimento indevido.",
        "dicaBanca": "Não confunda imparcialidade com tratamento mecanicamente idêntico."
    },
    {
        "pergunta": "O interesse público, em uma perspectiva ética, deve:",
        "alternativas": [
            "ser flexibilizado sempre que um interesse privado trouxer benefício pessoal ao servidor.",
            "orientar a atuação do agente acima de vantagens particulares incompatíveis com a função.",
            "ser considerado apenas quando houver norma específica determinando sua aplicação.",
            "ser substituído por preferências da chefia em decisões discricionárias.",
            "ser identificado automaticamente com qualquer vontade da maioria."
        ],
        "correta": 1,
        "explicacao": "A ética pública orienta o agente a servir ao interesse coletivo e à finalidade institucional, e não a interesses particulares incompatíveis.",
        "feedbackAcerto": "Correto. A função pública não deve ser utilizada para benefício privado indevido.",
        "feedbackErro": "O erro é confundir interesse público com vontade pessoal, vontade da chefia ou simples preferência majoritária.",
        "dicaBanca": "Interesse público é eixo central da ética administrativa."
    },
    {
        "pergunta": "Uma conduta pode ser legal e ainda assim suscitar questionamento ético quando:",
        "alternativas": [
            "a decisão tenha sido tomada por servidor efetivo.",
            "toda conduta legal é, por definição, eticamente irrepreensível.",
            "o agente obtenha resultado eficiente, pois eficiência afasta qualquer questão ética.",
            "não exista reclamação formal de cidadão ou superior hierárquico.",
            "embora formalmente permitida, contrarie valores de integridade, finalidade pública ou confiança institucional."
        ],
        "correta": 4,
        "explicacao": "Legalidade e ética relacionam-se, mas não são conceitos idênticos; a ética pode avaliar finalidade, motivação e impacto de uma escolha.",
        "feedbackAcerto": "Correto. A ausência de proibição expressa não torna automaticamente uma conduta exemplar.",
        "feedbackErro": "A pegadinha é equiparar legalidade formal a legitimidade ética total.",
        "dicaBanca": "Questão clássica: 'legal' não significa necessariamente 'eticamente adequado'."
    },
    {
        "pergunta": "Honestidade, como valor ético, relaciona-se a:",
        "alternativas": [
            "cumprir ordens sem questionar sua legalidade ou finalidade.",
            "evitar admitir erros para proteger a imagem da instituição.",
            "agir com verdade, probidade e rejeição a fraude ou vantagem indevida.",
            "favorecer pessoas próximas quando não houver dano financeiro direto.",
            "omitir informações relevantes sempre que isso facilitar o serviço."
        ],
        "correta": 2,
        "explicacao": "Honestidade envolve veracidade, probidade e rejeição de fraude, engano e vantagem indevida.",
        "feedbackAcerto": "Correto. A honestidade orienta tanto relações internas quanto o atendimento ao público.",
        "feedbackErro": "Proteger imagem por ocultação, favorecer conhecidos ou omitir informação relevante pode contrariar a honestidade.",
        "dicaBanca": "Honestidade não é apenas 'não roubar'; também envolve verdade e probidade."
    },
    {
        "pergunta": "Respeito, no contexto ético, implica:",
        "alternativas": [
            "evitar aplicar regras quando o usuário se mostra insatisfeito.",
            "concordar com todas as opiniões para evitar conflito no exercício da função pública.",
            "reconhecer a dignidade das pessoas e tratá-las de forma compatível com seus direitos.",
            "manter distância absoluta para impedir vínculos profissionais no exercício da função pública.",
            "priorizar pessoas com maior influência social no exercício da função pública."
        ],
        "correta": 2,
        "explicacao": "Respeito está ligado ao reconhecimento da dignidade, direitos e consideração devida às pessoas.",
        "feedbackAcerto": "Correto. É possível discordar, aplicar regras e manter firmeza sem abandonar o respeito.",
        "feedbackErro": "O erro é confundir respeito com concordância, submissão ou favorecimento.",
        "dicaBanca": "Urbanidade é uma manifestação prática do respeito."
    },
    {
        "pergunta": "Justiça, como valor ético, está ligada principalmente a:",
        "alternativas": [
            "distribuição idêntica de recursos em qualquer situação, sem considerar necessidades.",
            "decisões fundamentadas, tratamento adequado e rejeição a privilégios arbitrários.",
            "prioridade automática a quem possui maior autoridade ou influência.",
            "aplicação de sanções sem necessidade de fundamentação.",
            "benefício de pessoas próximas quando não houver prejuízo mensurável."
        ],
        "correta": 1,
        "explicacao": "Justiça envolve critérios legítimos, equidade e rejeição a privilégios sem fundamento.",
        "feedbackAcerto": "Correto. Justiça não significa necessariamente tratar todos de forma absolutamente idêntica.",
        "feedbackErro": "O erro é confundir igualdade formal rígida com justiça em contextos que exigem considerar diferenças relevantes.",
        "dicaBanca": "Equidade é um conceito que pode aparecer como complemento de justiça."
    },
    {
        "pergunta": "Equidade diferencia-se de igualdade estrita porque:",
        "alternativas": [
            "pode considerar diferenças relevantes para assegurar tratamento justo e oportunidades efetivas.",
            "permite favorecer livremente pessoas escolhidas pelo agente público.",
            "elimina a necessidade de critérios objetivos nas decisões.",
            "autoriza descumprimento de normas quando houver boa intenção.",
            "significa tratar todas as pessoas exatamente da mesma forma."
        ],
        "correta": 0,
        "explicacao": "Equidade considera circunstâncias relevantes para alcançar tratamento justo, sem se confundir com privilégio arbitrário.",
        "feedbackAcerto": "Correto. A diferença legítima de tratamento precisa possuir fundamento objetivo.",
        "feedbackErro": "O erro é entender equidade como favoritismo ou como autorização para ignorar regras.",
        "dicaBanca": "Equidade não é privilégio."
    },
    {
        "pergunta": "Transparência ética na atuação pública significa:",
        "alternativas": [
            "expor dados sensíveis para demonstrar que não há nada a esconder.",
            "divulgar toda informação pública ou pessoal sem qualquer restrição no exercício da função pública.",
            "tornar públicas apenas as decisões que tenham boa repercussão no exercício da função pública.",
            "substituir registros formais por comunicação direta com os cidadãos no exercício da função pública.",
            "dar visibilidade e explicação adequada aos atos, respeitados os limites legais de sigilo e proteção de dados."
        ],
        "correta": 4,
        "explicacao": "Transparência deve conviver com sigilo legal, privacidade e proteção de dados.",
        "feedbackAcerto": "Correto. Transparência não é divulgação irrestrita.",
        "feedbackErro": "O erro é tratar publicidade como autorização para expor qualquer informação.",
        "dicaBanca": "Ágata pode colocar transparência e sigilo como se fossem incompatíveis; não são."
    },
    {
        "pergunta": "Accountability, em sentido amplo, relaciona-se a:",
        "alternativas": [
            "substituição das regras legais por compromissos pessoais de boa conduta.",
            "sigilo integral das decisões para preservar autonomia administrativa.",
            "liberdade do gestor para decidir sem explicar os resultados obtidos.",
            "prestação de contas, responsabilização e possibilidade de controle sobre a atuação pública.",
            "controle exclusivamente interno, sem qualquer prestação de contas à sociedade."
        ],
        "correta": 3,
        "explicacao": "Accountability envolve prestar contas, justificar decisões e admitir mecanismos de responsabilização e controle.",
        "feedbackAcerto": "Correto. A ideia conecta poder público, transparência e responsabilidade.",
        "feedbackErro": "O erro é confundir autonomia de decisão com ausência de controle.",
        "dicaBanca": "Mesmo quando a palavra aparecer em inglês, associe-a a prestação de contas e responsabilização."
    },
    {
        "pergunta": "Conflito de interesses ocorre quando:",
        "alternativas": [
            "interesse privado do agente pode interferir ou aparentar interferir no desempenho imparcial da função pública.",
            "qualquer discordância entre colegas sobre a melhor forma de executar uma tarefa.",
            "o servidor possui opinião pessoal sobre tema relacionado ao trabalho.",
            "há duas normas aplicáveis a uma mesma situação administrativa.",
            "o usuário contesta uma decisão tomada pelo servidor."
        ],
        "correta": 0,
        "explicacao": "Conflito de interesses surge quando interesses privados podem influenciar, ou parecer influenciar, o exercício imparcial da função.",
        "feedbackAcerto": "Correto. Não é necessário que o favorecimento já tenha ocorrido para existir risco ético.",
        "feedbackErro": "O erro é reduzir conflito de interesses a simples divergência profissional ou conflito normativo.",
        "dicaBanca": "A aparência de influência indevida também importa."
    },
    {
        "pergunta": "Ética da responsabilidade destaca a importância de:",
        "alternativas": [
            "avaliar a conduta somente pelo cumprimento literal da regra.",
            "seguir apenas intenções pessoais, independentemente dos resultados produzidos.",
            "considerar consequências previsíveis das decisões e responder pelos efeitos da atuação.",
            "transferir ao superior todas as consequências de uma decisão.",
            "desconsiderar impactos coletivos quando o ato beneficia o agente."
        ],
        "correta": 2,
        "explicacao": "A ética da responsabilidade chama atenção para consequências e efeitos previsíveis das escolhas.",
        "feedbackAcerto": "Correto. Uma boa intenção não torna irrelevante o impacto concreto da decisão.",
        "feedbackErro": "O erro é avaliar a conduta apenas pela intenção ou apenas pela formalidade.",
        "dicaBanca": "Intenção e consequência podem aparecer como polos de uma questão conceitual."
    },
    {
        "pergunta": "Ética do dever enfatiza:",
        "alternativas": [
            "que a motivação pessoal do agente substitui o dever institucional.",
            "que qualquer resultado positivo torna aceitável o meio utilizado.",
            "que normas devem ser ignoradas sempre que houver benefício coletivo aparente.",
            "a obrigação de agir conforme princípios e deveres reconhecidos, e não apenas segundo conveniência ou resultado.",
            "que consequências são o único critério para avaliar uma ação."
        ],
        "correta": 3,
        "explicacao": "A ética do dever valoriza a obrigação e o princípio que orientam a ação, e não somente suas consequências.",
        "feedbackAcerto": "Correto. A questão contrasta dever com conveniência e cálculo de resultados.",
        "feedbackErro": "O erro é transformar resultado positivo em justificativa automática para qualquer meio.",
        "dicaBanca": "Se aparecer 'o fim justifica os meios', desconfie em ética pública."
    },
    {
        "pergunta": "Virtude, em ética, pode ser entendida como:",
        "alternativas": [
            "benefício concedido ao agente que supera metas funcionais.",
            "sanção aplicada a quem descumpre uma regra moral.",
            "ordem escrita emitida pela autoridade competente.",
            "disposição habitual para agir de acordo com valores considerados bons, como prudência e honestidade.",
            "qualquer comportamento praticado repetidamente, mesmo que seja inadequado."
        ],
        "correta": 3,
        "explicacao": "Virtude refere-se a disposições de caráter e hábitos orientados ao bem, como prudência, coragem e honestidade.",
        "feedbackAcerto": "Correto. Nem todo hábito é virtude; a qualidade moral da disposição importa.",
        "feedbackErro": "O erro é confundir virtude com regra, prêmio ou repetição automática.",
        "dicaBanca": "Virtude = disposição estável para agir bem."
    },
    {
        "pergunta": "Prudência, como virtude ética, consiste em:",
        "alternativas": [
            "avaliar circunstâncias e consequências para escolher uma ação adequada e responsável.",
            "evitar qualquer decisão que possa gerar crítica.",
            "obedecer automaticamente à primeira orientação recebida.",
            "priorizar sempre a solução mais rápida, independentemente do contexto.",
            "adiar decisões até que desapareça qualquer possibilidade de risco."
        ],
        "correta": 0,
        "explicacao": "Prudência envolve julgamento cuidadoso, análise do contexto e escolha proporcional.",
        "feedbackAcerto": "Correto. Prudência não é medo nem omissão; é decisão refletida.",
        "feedbackErro": "O erro é confundir prudência com paralisia ou obediência automática.",
        "dicaBanca": "Prudência é análise responsável, não fuga da decisão."
    },
    {
        "pergunta": "Cidadania e ética relacionam-se porque:",
        "alternativas": [
            "participação democrática exige concordância com todas as decisões do Estado.",
            "cidadania limita-se ao direito de votar periodicamente.",
            "ética é matéria privada e não possui relação com participação social.",
            "direitos de cidadania dispensam deveres em relação à coletividade.",
            "o exercício de direitos e deveres pressupõe participação responsável e respeito às regras de convivência democrática."
        ],
        "correta": 4,
        "explicacao": "Cidadania envolve exercício de direitos, deveres e participação na vida coletiva, em diálogo com valores éticos.",
        "feedbackAcerto": "Correto. A dimensão cidadã vai além do voto e inclui convivência responsável e participação social.",
        "feedbackErro": "O erro é reduzir cidadania a um único direito ou separá-la completamente da responsabilidade coletiva.",
        "dicaBanca": "Ética e cidadania costumam ser cobradas em conjunto."
    },
    {
        "pergunta": "Ética e democracia aproximam-se porque a democracia pressupõe:",
        "alternativas": [
            "ausência de regras sempre que houver decisão da maioria.",
            "respeito a direitos, participação, pluralismo, responsabilidade e limites ao exercício do poder.",
            "submissão das minorias a qualquer vontade majoritária.",
            "prioridade de interesses pessoais de agentes eleitos.",
            "eliminação de divergências para garantir estabilidade institucional."
        ],
        "correta": 1,
        "explicacao": "A democracia envolve participação e maioria, mas também direitos, pluralismo, responsabilidade e proteção contra abusos.",
        "feedbackAcerto": "Correto. Decisão majoritária não legitima qualquer conduta.",
        "feedbackErro": "O erro é confundir democracia com poder ilimitado da maioria.",
        "dicaBanca": "Maioria não elimina direitos nem princípios."
    },
    {
        "pergunta": "O pluralismo, em perspectiva ética e democrática, implica:",
        "alternativas": [
            "impedir críticas às decisões públicas para preservar harmonia no exercício da função pública.",
            "considerar todas as opiniões igualmente corretas em qualquer situação no exercício da função pública.",
            "eliminar critérios técnicos para evitar privilegiar uma visão no exercício da função pública.",
            "reconhecer a legítima existência de diferentes ideias e posições, dentro dos limites dos direitos e da convivência democrática.",
            "adotar sempre a posição da maioria como moralmente superior no exercício da função pública."
        ],
        "correta": 3,
        "explicacao": "Pluralismo reconhece diversidade de ideias e admite debate, sem dispensar direitos, normas ou critérios racionais.",
        "feedbackAcerto": "Correto. Respeitar posições diferentes não significa aceitar qualquer conduta ou afirmar que toda opinião é verdadeira.",
        "feedbackErro": "O erro é confundir pluralismo com relativismo absoluto.",
        "dicaBanca": "Pluralismo admite divergência; não elimina critérios."
    },
    {
        "pergunta": "Relativismo moral, em sentido geral, sustenta que:",
        "alternativas": [
            "juízos morais podem variar conforme contextos culturais, históricos ou sociais.",
            "todos os valores morais são necessariamente universais e imutáveis.",
            "apenas leis escritas podem definir o que é moral.",
            "não existem diferenças de valores entre sociedades.",
            "qualquer comportamento é automaticamente aceitável se alguém o aprovar."
        ],
        "correta": 0,
        "explicacao": "O relativismo moral chama atenção para a variação de normas e valores entre contextos.",
        "feedbackAcerto": "Correto. A definição não significa que toda conduta seja obrigatoriamente aceitável.",
        "feedbackErro": "O erro é transformar relativismo em 'vale tudo' ou, no extremo oposto, em universalismo.",
        "dicaBanca": "Relativismo descreve variação; não equivale automaticamente a ausência total de critérios."
    },
    {
        "pergunta": "Universalismo ético defende, em linhas gerais, que:",
        "alternativas": [
            "alguns princípios podem pretender validade para todas as pessoas, independentemente de contexto particular.",
            "todo costume local é necessariamente correto para quem o pratica.",
            "não existem valores capazes de ultrapassar culturas específicas.",
            "apenas decisões administrativas possuem validade universal.",
            "todo comportamento depende exclusivamente da preferência individual."
        ],
        "correta": 0,
        "explicacao": "O universalismo admite princípios que aspiram a validade geral, como certas formulações de dignidade e direitos humanos.",
        "feedbackAcerto": "Correto. A ideia contrasta com posições que tornam todo valor dependente do contexto.",
        "feedbackErro": "O erro é confundir universalidade com mera imposição administrativa.",
        "dicaBanca": "Universalismo x relativismo é uma oposição conceitual clássica."
    },
    {
        "pergunta": "Dignidade da pessoa humana, na ética pública, funciona como:",
        "alternativas": [
            "critério para priorizar servidores em relação aos cidadãos.",
            "autorização para o agente decidir segundo suas preferências pessoais.",
            "justificativa para divulgar qualquer dado em nome da transparência.",
            "referência para impedir tratamento degradante, discriminatório ou instrumental das pessoas.",
            "princípio restrito ao campo da saúde e da assistência social."
        ],
        "correta": 3,
        "explicacao": "A dignidade orienta o respeito à pessoa como sujeito de direitos e limita práticas humilhantes ou discriminatórias.",
        "feedbackAcerto": "Correto. A pessoa não deve ser tratada como mero meio para conveniência institucional.",
        "feedbackErro": "O erro é restringir dignidade a uma área ou usá-la para justificar exposição indevida.",
        "dicaBanca": "Dignidade é valor transversal, não setorial."
    },
    {
        "pergunta": "Bem comum, em ética pública, refere-se:",
        "alternativas": [
            "ao benefício particular do maior número de servidores do órgão.",
            "às condições e interesses coletivos que a atuação estatal deve buscar promover legitimamente.",
            "à soma das preferências pessoais dos agentes públicos.",
            "ao interesse da autoridade que ocupa a chefia máxima.",
            "ao resultado financeiro positivo de qualquer decisão administrativa."
        ],
        "correta": 1,
        "explicacao": "Bem comum aponta para finalidade coletiva e condições que beneficiem a sociedade de forma legítima.",
        "feedbackAcerto": "Correto. Não se confunde com interesse corporativo, vontade da chefia ou resultado financeiro isolado.",
        "feedbackErro": "O erro é reduzir o bem comum a interesses privados agregados.",
        "dicaBanca": "Bem comum aproxima-se de finalidade pública e interesse coletivo."
    },
    {
        "pergunta": "Confiança pública é fortalecida quando:",
        "alternativas": [
            "erros são ocultados para evitar desgaste da imagem institucional.",
            "as instituições atuam com integridade, previsibilidade, transparência e respeito aos direitos.",
            "decisões são tomadas sem explicação para preservar autoridade.",
            "agentes priorizam relações pessoais para resolver problemas com rapidez.",
            "normas são aplicadas de forma diferente conforme a influência do usuário."
        ],
        "correta": 1,
        "explicacao": "A confiança institucional depende de comportamento coerente, íntegro, transparente e previsível.",
        "feedbackAcerto": "Correto. A confiança não se constrói pela ocultação de falhas, mas pela atuação responsável.",
        "feedbackErro": "O erro é confundir proteção da imagem com integridade institucional.",
        "dicaBanca": "Confiança é consequência de práticas éticas consistentes."
    },
    {
        "pergunta": "Consciência moral refere-se à capacidade de:",
        "alternativas": [
            "eliminar dúvidas em qualquer decisão complexa no exercício da função pública.",
            "memorizar todas as normas jurídicas aplicáveis à função pública.",
            "agir somente conforme opiniões da maioria no exercício da função pública.",
            "avaliar ações à luz de valores e reconhecer deveres, responsabilidades e possíveis consequências.",
            "substituir normas institucionais por convicções pessoais no exercício da função pública."
        ],
        "correta": 3,
        "explicacao": "Consciência moral envolve reflexão sobre certo e errado, deveres e responsabilidade.",
        "feedbackAcerto": "Correto. Ela não equivale a conhecimento completo da lei nem autoriza ignorar normas.",
        "feedbackErro": "O erro é transformar consciência moral em preferência pessoal absoluta.",
        "dicaBanca": "Consciência orienta reflexão; não substitui o ordenamento."
    },
    {
        "pergunta": "Autonomia moral significa:",
        "alternativas": [
            "liberdade para descumprir normas sempre que houver convicção pessoal.",
            "capacidade de refletir e assumir responsabilidade por escolhas, em vez de apenas obedecer de modo acrítico.",
            "independência absoluta em relação a qualquer dever social.",
            "possibilidade de agir sem prestar contas a superiores ou à sociedade.",
            "direito de rejeitar decisões coletivas sempre que houver discordância."
        ],
        "correta": 1,
        "explicacao": "Autonomia moral envolve reflexão e responsabilidade, não liberdade irrestrita.",
        "feedbackAcerto": "Correto. O indivíduo continua sujeito a normas e deveres, mas não reduz sua ação à obediência cega.",
        "feedbackErro": "O erro é confundir autonomia com ausência de limites.",
        "dicaBanca": "Autonomia moral ≠ fazer o que quiser."
    },
    {
        "pergunta": "Heteronomia moral ocorre quando a conduta é guiada principalmente:",
        "alternativas": [
            "pela avaliação consciente dos princípios envolvidos.",
            "por análise crítica e responsabilidade pessoal.",
            "por imposição externa, sem reflexão autônoma sobre os fundamentos da ação.",
            "pela ponderação entre deveres e consequências.",
            "por decisão livre baseada em convicções refletidas."
        ],
        "correta": 2,
        "explicacao": "Heteronomia enfatiza determinação externa da conduta, em contraste com autonomia moral.",
        "feedbackAcerto": "Correto. A obediência é o centro, e não a reflexão própria.",
        "feedbackErro": "O erro é atribuir à heteronomia características da autonomia.",
        "dicaBanca": "Autonomia e heteronomia são conceitos opostos frequentes em teoria ética."
    },
    {
        "pergunta": "Deontologia profissional refere-se principalmente:",
        "alternativas": [
            "ao estudo e sistematização de deveres e normas relacionados ao exercício de uma profissão ou função.",
            "à análise exclusiva das consequências econômicas de uma decisão.",
            "à descrição dos costumes pessoais do profissional fora do trabalho.",
            "à aplicação de sanções penais previstas para qualquer conduta.",
            "à administração de recursos materiais do órgão."
        ],
        "correta": 0,
        "explicacao": "Deontologia está ligada aos deveres profissionais e às normas de conduta de determinada atividade.",
        "feedbackAcerto": "Correto. Códigos de ética profissional possuem forte dimensão deontológica.",
        "feedbackErro": "O erro é confundir deontologia com punição, economia ou costumes privados.",
        "dicaBanca": "Deontologia = deveres profissionais."
    },
    {
        "pergunta": "Um código de ética profissional tem por função principal:",
        "alternativas": [
            "autorizar exceções às leis quando houver finalidade moral.",
            "substituir integralmente a legislação aplicável ao servidor.",
            "explicitar valores, deveres e padrões de conduta esperados no exercício da função.",
            "regular apenas comportamentos praticados fora do ambiente profissional.",
            "eliminar a necessidade de julgamento em situações concretas."
        ],
        "correta": 2,
        "explicacao": "Códigos de ética orientam condutas e explicitam valores e deveres, mas não substituem todo o ordenamento jurídico.",
        "feedbackAcerto": "Correto. Eles funcionam como referência normativa e valorativa para a atuação profissional.",
        "feedbackErro": "O erro é atribuir ao código poder para afastar leis ou resolver automaticamente todas as situações.",
        "dicaBanca": "Código de ética complementa, não substitui, as demais normas."
    },
    {
        "pergunta": "No Decreto nº 1.171/1994, a dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são apresentados como:",
        "alternativas": [
            "critérios exclusivos para avaliação anual de desempenho funcional.",
            "valores facultativos aplicáveis apenas quando não houver norma específica.",
            "primados maiores que devem nortear o servidor público no exercício do cargo ou função.",
            "regras destinadas somente aos ocupantes de cargos de direção.",
            "princípios aplicáveis apenas ao atendimento externo ao cidadão."
        ],
        "correta": 2,
        "explicacao": "O Código de Ética do servidor público federal apresenta esses elementos como primados maiores da atuação funcional.",
        "feedbackAcerto": "Correto. A redação demonstra que ética pública envolve mais do que cumprimento mecânico de tarefas.",
        "feedbackErro": "O erro é restringir esses valores a chefias, avaliação de desempenho ou atendimento externo.",
        "dicaBanca": "Esse trecho literal aparece com frequência em provas de ética pública."
    },
    {
        "pergunta": "Segundo a concepção do Código de Ética do servidor público federal, o servidor não deve decidir apenas entre:",
        "alternativas": [
            "o legal e o ilegal, mas também entre o honesto e o desonesto.",
            "o público e o privado, pois ambos possuem a mesma finalidade.",
            "o eficiente e o ineficiente, porque moralidade não integra sua atuação.",
            "o permitido e o proibido, já que a lei é irrelevante para a ética.",
            "o conveniente e o inconveniente, porque resultados justificam qualquer meio."
        ],
        "correta": 0,
        "explicacao": "O Decreto nº 1.171/1994 destaca que a função pública exige distinguir não só legal/ilegal, mas também honesto/desonesto.",
        "feedbackAcerto": "Correto. O enunciado reforça a dimensão moral da atuação pública.",
        "feedbackErro": "O erro é excluir a legalidade ou reduzir ética apenas à eficiência.",
        "dicaBanca": "Legalidade e honestidade aparecem juntas, mas não são idênticas."
    },
    {
        "pergunta": "A moralidade administrativa, em perspectiva ética, exige:",
        "alternativas": [
            "prioridade da eficiência, mesmo com violação de valores éticos.",
            "apenas obediência à forma do ato, independentemente da finalidade.",
            "preferência pela decisão mais conveniente ao agente responsável.",
            "ausência de controle sobre escolhas discricionárias.",
            "conduta compatível com honestidade, boa-fé e finalidade pública, além da mera aparência de legalidade."
        ],
        "correta": 4,
        "explicacao": "Moralidade administrativa acrescenta dimensão valorativa de honestidade, boa-fé e finalidade à atuação estatal.",
        "feedbackAcerto": "Correto. O ato público não deve ser analisado somente por sua forma externa.",
        "feedbackErro": "O erro é imaginar que uma decisão formalmente correta dispensa análise de finalidade e integridade.",
        "dicaBanca": "Moralidade é um princípio jurídico e também possui forte conteúdo ético."
    },
    {
        "pergunta": "Eficiência e ética são compatíveis quando:",
        "alternativas": [
            "a redução de custos permite flexibilizar valores de integridade.",
            "a rapidez justifica afastar procedimentos e garantias sempre que houver benefício coletivo.",
            "o resultado positivo torna irrelevante a forma utilizada para alcançá-lo.",
            "os resultados são buscados por meios legítimos, responsáveis e respeitosos aos direitos.",
            "a produtividade é considerada superior à dignidade das pessoas."
        ],
        "correta": 3,
        "explicacao": "Eficiência não autoriza violar legalidade, moralidade, dignidade ou outros valores éticos.",
        "feedbackAcerto": "Correto. Bons resultados precisam ser alcançados por meios legítimos.",
        "feedbackErro": "O erro é usar eficiência como justificativa para qualquer atalho.",
        "dicaBanca": "Eficiência não transforma meio inadequado em conduta ética."
    },
    {
        "pergunta": "Boa-fé na atuação pública envolve:",
        "alternativas": [
            "evitar reconhecer erro para preservar autoridade.",
            "ocultar informação relevante para proteger a imagem da administração.",
            "favorecer pessoas conhecidas quando não houver prejuízo financeiro.",
            "usar ambiguidades normativas para obter vantagem particular.",
            "agir com lealdade, honestidade e confiança legítima nas relações institucionais."
        ],
        "correta": 4,
        "explicacao": "Boa-fé envolve lealdade, honestidade e comportamento confiável nas relações jurídicas e administrativas.",
        "feedbackAcerto": "Correto. A boa-fé afasta manipulação e comportamento contraditório oportunista.",
        "feedbackErro": "O erro é confundir proteção da instituição com ocultação ou favorecimento.",
        "dicaBanca": "Boa-fé é ligada a confiança e lealdade."
    },
    {
        "pergunta": "Proporcionalidade, em uma decisão ética, significa:",
        "alternativas": [
            "usar sempre a medida mais rigorosa para prevenir novos problemas.",
            "evitar medidas excessivas e escolher resposta adequada à gravidade e à finalidade da situação.",
            "aplicar a mesma resposta a qualquer situação semelhante em aparência.",
            "priorizar a solução mais rápida, independentemente de seus efeitos.",
            "eliminar qualquer margem de análise do contexto concreto."
        ],
        "correta": 1,
        "explicacao": "Proporcionalidade exige adequação entre meio, finalidade e intensidade da resposta.",
        "feedbackAcerto": "Correto. Uma medida pode ser legítima em tese e ainda ser excessiva no caso concreto.",
        "feedbackErro": "O erro é transformar rigor máximo em regra ética.",
        "dicaBanca": "Questões situacionais podem testar excesso x resposta proporcional."
    },
    {
        "pergunta": "Favoritismo é eticamente inadequado porque:",
        "alternativas": [
            "é aceitável quando beneficia pessoa com boa reputação.",
            "torna todo tratamento diferenciado automaticamente proibido.",
            "impede qualquer decisão discricionária no serviço público.",
            "ocorre apenas quando há pagamento de vantagem financeira.",
            "substitui critérios legítimos por relações pessoais ou preferências indevidas."
        ],
        "correta": 4,
        "explicacao": "Favoritismo é preferência indevida fundada em vínculos pessoais, e não em critérios legítimos.",
        "feedbackAcerto": "Correto. O problema é a ausência de fundamento impessoal e objetivo.",
        "feedbackErro": "O erro é pensar que favoritismo exige dinheiro ou que toda diferenciação é favorecimento.",
        "dicaBanca": "Favorecimento indevido pode existir sem vantagem financeira."
    },
    {
        "pergunta": "Discricionariedade administrativa não significa:",
        "alternativas": [
            "necessidade de justificar decisões quando exigido pelo ordenamento.",
            "existência de margem de escolha dentro dos limites jurídicos aplicáveis.",
            "liberdade absoluta para decidir segundo preferências pessoais, pois permanece limitada por princípios e finalidade pública.",
            "possibilidade de ponderar alternativas legalmente admitidas.",
            "submissão a critérios de moralidade, razoabilidade e interesse público."
        ],
        "correta": 2,
        "explicacao": "Discricionariedade é margem legal de escolha, não autorização para arbitrariedade.",
        "feedbackAcerto": "Correto. A ética funciona como limite valorativo às escolhas administrativas.",
        "feedbackErro": "O erro é confundir escolha legítima com vontade pessoal ilimitada.",
        "dicaBanca": "Discricionariedade ≠ arbitrariedade."
    },
    {
        "pergunta": "Arbitrariedade caracteriza-se por:",
        "alternativas": [
            "decisão sem fundamento legítimo, marcada por vontade pessoal ou abuso no exercício do poder.",
            "escolha entre alternativas legais devidamente justificadas no exercício da função pública.",
            "aplicação de critério objetivo previsto em norma no exercício da função pública.",
            "decisão discricionária orientada ao interesse público no exercício da função pública.",
            "ponderação proporcional entre alternativas possíveis no exercício da função pública."
        ],
        "correta": 0,
        "explicacao": "Arbitrariedade é exercício do poder sem fundamento legítimo ou com desvio de finalidade.",
        "feedbackAcerto": "Correto. Ela se distingue da discricionariedade juridicamente limitada.",
        "feedbackErro": "O erro é tratar toda escolha administrativa como arbitrária.",
        "dicaBanca": "Compare: discricionariedade tem limites; arbitrariedade os rompe."
    },
    {
        "pergunta": "A ética profissional contribui para a qualidade do serviço público porque:",
        "alternativas": [
            "permite flexibilizar normas quando o agente possui boa intenção.",
            "elimina automaticamente qualquer conflito entre servidores e usuários.",
            "substitui capacitação técnica e procedimentos administrativos.",
            "orienta comportamentos, fortalece confiança e reduz práticas incompatíveis com a finalidade pública.",
            "garante resultados positivos independentemente das condições de trabalho."
        ],
        "correta": 3,
        "explicacao": "Ética melhora padrões de conduta e confiança, mas não substitui competência técnica ou organização institucional.",
        "feedbackAcerto": "Correto. Qualidade pública resulta também de integridade e responsabilidade.",
        "feedbackErro": "O erro é atribuir à ética um efeito mágico ou colocá-la no lugar da técnica.",
        "dicaBanca": "Ética e competência técnica são complementares."
    },
    {
        "pergunta": "Uma cultura ética em uma organização pública é favorecida por:",
        "alternativas": [
            "tolerância a pequenos desvios quando não geram repercussão externa.",
            "liderança coerente, regras claras, canais de orientação e responsabilização consistente.",
            "dependência exclusiva da consciência individual de cada servidor.",
            "ocultação de falhas para proteger a reputação institucional.",
            "tratamento diferente para servidores de maior prestígio."
        ],
        "correta": 1,
        "explicacao": "Cultura ética depende de incentivos, exemplo institucional, clareza e responsabilização, não apenas de virtudes individuais.",
        "feedbackAcerto": "Correto. O ambiente organizacional influencia condutas.",
        "feedbackErro": "O erro é normalizar pequenos desvios ou imaginar que ética é apenas assunto privado.",
        "dicaBanca": "Cultura ética é construída por práticas institucionais repetidas."
    },
    {
        "pergunta": "A ética pública exige atenção à aparência de impropriedade porque:",
        "alternativas": [
            "o servidor deve preocupar-se apenas com sanções formais.",
            "somente atos efetivamente criminosos têm relevância para a ética.",
            "aparência nunca importa quando o agente afirma ter boa intenção.",
            "a confiança pública depende apenas do resultado material das decisões.",
            "a confiança social pode ser afetada mesmo quando não se comprova vantagem indevida efetiva."
        ],
        "correta": 4,
        "explicacao": "Certas situações podem comprometer confiança por aparentarem favorecimento ou conflito, ainda que não haja prova de benefício concreto.",
        "feedbackAcerto": "Correto. Integridade também envolve prevenir situações que abalem legitimamente a confiança.",
        "feedbackErro": "O erro é reduzir ética ao que pode gerar punição criminal.",
        "dicaBanca": "Aparência de conflito é especialmente relevante em integridade pública."
    },
    {
        "pergunta": "Respeitar direitos humanos no serviço público significa:",
        "alternativas": [
            "considerar direitos humanos tema exclusivo da política externa.",
            "priorizar direitos apenas quando não houver impacto na eficiência.",
            "orientar a atuação pela dignidade, igualdade e proteção contra discriminações indevidas.",
            "aplicar direitos apenas a cidadãos sem vínculo com a administração.",
            "substituir normas nacionais por opiniões pessoais sobre justiça."
        ],
        "correta": 2,
        "explicacao": "Direitos humanos fornecem referências éticas e jurídicas de dignidade, igualdade e não discriminação.",
        "feedbackAcerto": "Correto. Eles alcançam relações concretas entre Estado e pessoas.",
        "feedbackErro": "O erro é tratá-los como tema abstrato ou condicionado à conveniência administrativa.",
        "dicaBanca": "Dignidade e não discriminação são eixos recorrentes."
    },
    {
        "pergunta": "Ética aplicada diferencia-se de ética apenas teórica porque:",
        "alternativas": [
            "limita-se a memorizar códigos e normas profissionais.",
            "abandona princípios gerais e aceita qualquer solução prática.",
            "analisa como princípios e valores orientam decisões em situações concretas.",
            "trata somente de sanções disciplinares.",
            "substitui reflexão crítica por procedimentos automáticos."
        ],
        "correta": 2,
        "explicacao": "Ética aplicada leva conceitos e princípios a problemas concretos, como ética pública, bioética e ética profissional.",
        "feedbackAcerto": "Correto. A aplicação não elimina reflexão; ela a conecta a decisões reais.",
        "feedbackErro": "O erro é reduzir ética aplicada a manual de procedimentos.",
        "dicaBanca": "Questões situacionais são formas de cobrar ética aplicada."
    },
    {
        "pergunta": "Quando dois valores entram em tensão em uma situação concreta, a análise ética deve:",
        "alternativas": [
            "considerar impossível qualquer decisão racional.",
            "escolher sempre o valor mais popular entre os envolvidos.",
            "ignorar um dos valores para simplificar a decisão.",
            "seguir apenas a preferência do agente responsável.",
            "considerar contexto, direitos, consequências e princípios para justificar uma decisão proporcional."
        ],
        "correta": 4,
        "explicacao": "Conflitos éticos podem exigir ponderação e justificativa, sem respostas automáticas.",
        "feedbackAcerto": "Correto. A existência de tensão não elimina a necessidade de decisão fundamentada.",
        "feedbackErro": "O erro é substituir ponderação por popularidade ou preferência pessoal.",
        "dicaBanca": "Conflito de valores não significa ausência de critérios."
    },
    {
        "pergunta": "Uma conduta eticamente exemplar no serviço público tende a combinar:",
        "alternativas": [
            "legalidade, integridade, respeito, imparcialidade e compromisso com o interesse público.",
            "rapidez, obediência e conveniência pessoal.",
            "sigilo, autonomia absoluta e preferência da chefia.",
            "eficiência, favorecimento e informalidade.",
            "discrição, segredo e ausência de prestação de contas."
        ],
        "correta": 0,
        "explicacao": "A ética pública exige combinação de valores e deveres, não um único critério isolado.",
        "feedbackAcerto": "Correto. A alternativa reúne referências compatíveis e complementares.",
        "feedbackErro": "Os distratores misturam valores legítimos com elementos incompatíveis, como favorecimento ou autonomia absoluta.",
        "dicaBanca": "Questões-síntese costumam combinar vários conceitos em uma alternativa."
    }
];

if (typeof window !== 'undefined') { window.eticaConceitos = eticaConceitos; }
