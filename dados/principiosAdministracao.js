// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// PRINCÍPIOS DA ADMINISTRAÇÃO PÚBLICA — ART. 37 DA CF/88
// LIMPE + publicidade oficial + situações práticas.
// Padrão Instituto Ágata — 50 questões + feedbacks específicos.
// Revisão: 2026.
// ============================================================

const principiosAdministracao = [
    {
        "pergunta": "O caput do art. 37 da Constituição Federal submete a Administração Pública aos princípios de:",
        "alternativas": [
            "legalidade, impessoalidade, transparência, publicidade e hierarquia.",
            "legalidade, pessoalidade, moralidade, publicidade e economicidade.",
            "legalidade, impessoalidade, moralidade, publicidade e eficiência.",
            "moralidade, proporcionalidade, eficiência, supremacia e continuidade.",
            "legalidade, autotutela, indisponibilidade, publicidade e eficiência."
        ],
        "correta": 2,
        "explicacao": "O art. 37, caput, consagra expressamente os princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        "feedbackAcerto": "Correto. Você identificou o núcleo constitucional clássico conhecido pela sigla LIMPE.",
        "feedbackErro": "Os distratores misturam princípios expressos do art. 37 com outros princípios ou noções administrativas que não compõem o rol do caput.",
        "dicaBanca": "Ágata pode trocar apenas uma palavra do LIMPE para testar atenção."
    },
    {
        "pergunta": "Para o agente público, o princípio da legalidade significa que:",
        "alternativas": [
            "pode escolher qualquer medida que pareça moralmente correta.",
            "pode agir livremente sempre que não houver proibição expressa.",
            "deve seguir apenas ordens superiores, mesmo quando ilegais.",
            "pode afastar norma válida se considerar a solução mais eficiente.",
            "sua atuação deve encontrar fundamento e limites na ordem jurídica aplicável."
        ],
        "correta": 4,
        "explicacao": "Na Administração, a legalidade vincula a atuação estatal à competência e à autorização jurídica pertinentes.",
        "feedbackAcerto": "Correto. O agente público não possui a mesma liberdade do particular para agir apenas porque algo não foi proibido.",
        "feedbackErro": "O erro é aplicar ao servidor a lógica privada de 'tudo que não é proibido é permitido'.",
        "dicaBanca": "Legalidade administrativa é mais restritiva que a liberdade privada."
    },
    {
        "pergunta": "Uma escola pública cria, sem previsão legal ou regulamentar, nova cobrança obrigatória aos responsáveis. O princípio mais diretamente comprometido é:",
        "alternativas": [
            "publicidade.",
            "legalidade.",
            "eficiência.",
            "impessoalidade.",
            "continuidade."
        ],
        "correta": 1,
        "explicacao": "A criação de obrigação pela Administração exige fundamento jurídico competente.",
        "feedbackAcerto": "Correto. Sem base legal ou normativa válida, a cobrança viola a legalidade administrativa.",
        "feedbackErro": "Publicidade ou eficiência não corrigem a ausência de competência jurídica para criar a obrigação.",
        "dicaBanca": "Quando a questão envolve 'sem previsão legal', pense primeiro em legalidade."
    },
    {
        "pergunta": "Impessoalidade exige que a atuação administrativa:",
        "alternativas": [
            "permita preferência a pessoas conhecidas quando não houver dano financeiro.",
            "trate todas as pessoas exatamente da mesma forma, mesmo diante de situações diferentes.",
            "proíba qualquer contato direto entre servidor e cidadão.",
            "seja orientada pelo interesse público e por critérios objetivos, sem favorecimentos ou perseguições pessoais.",
            "considere a vontade da chefia como expressão automática do interesse público."
        ],
        "correta": 3,
        "explicacao": "Impessoalidade busca afastar personalização indevida, favoritismo e perseguição na atuação estatal.",
        "feedbackAcerto": "Correto. Critérios legítimos e objetivos devem orientar as decisões administrativas.",
        "feedbackErro": "O erro é confundir impessoalidade com tratamento cegamente idêntico ou ausência de contato humano.",
        "dicaBanca": "Impessoalidade ≠ frieza; significa ausência de favorecimento pessoal."
    },
    {
        "pergunta": "Um servidor atende primeiro um amigo que chegou depois dos demais usuários, sem justificativa funcional. A conduta viola principalmente:",
        "alternativas": [
            "continuidade.",
            "eficiência.",
            "publicidade.",
            "legalidade apenas.",
            "impessoalidade."
        ],
        "correta": 4,
        "explicacao": "Favorecer conhecido sem critério objetivo afronta a impessoalidade.",
        "feedbackAcerto": "Correto. A relação pessoal foi usada para alterar a ordem regular do atendimento.",
        "feedbackErro": "O erro é tratar o problema apenas como demora ou organização; o elemento central é o favorecimento pessoal.",
        "dicaBanca": "Favoritismo é pista clássica de impessoalidade."
    },
    {
        "pergunta": "A publicidade oficial de órgão público não pode conter:",
        "alternativas": [
            "informações de interesse coletivo divulgadas por meios institucionais.",
            "nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores.",
            "orientações sobre serviços públicos disponíveis à população.",
            "campanhas educativas sem personalização indevida.",
            "dados estatísticos de políticas públicas quando não houver sigilo legal."
        ],
        "correta": 1,
        "explicacao": "O art. 37, §1º, veda promoção pessoal em publicidade de atos, programas, obras, serviços e campanhas dos órgãos públicos.",
        "feedbackAcerto": "Correto. A publicidade institucional deve ter caráter educativo, informativo ou de orientação social, sem promoção pessoal.",
        "feedbackErro": "O erro é confundir publicidade oficial legítima com propaganda personalista.",
        "dicaBanca": "Ágata pode cobrar o §1º do art. 37 por situação-problema."
    },
    {
        "pergunta": "Uma campanha municipal exibe repetidamente nome e imagem do prefeito como responsável pessoal por obra pública. A principal violação é:",
        "alternativas": [
            "continuidade, por relacionar a obra a um único mandato.",
            "eficiência, porque a campanha pode ter custo elevado.",
            "legalidade, independentemente da existência de norma específica.",
            "impessoalidade, em razão da promoção pessoal na publicidade oficial.",
            "autotutela, por não haver revisão do ato administrativo."
        ],
        "correta": 3,
        "explicacao": "A Constituição proíbe publicidade oficial com elementos que caracterizem promoção pessoal de autoridade.",
        "feedbackAcerto": "Correto. O uso personalista da comunicação pública compromete a impessoalidade.",
        "feedbackErro": "O custo pode ser discutido, mas o núcleo constitucional do caso é a promoção pessoal.",
        "dicaBanca": "Publicidade oficial + nome/imagem de autoridade = atenção à impessoalidade."
    },
    {
        "pergunta": "Moralidade administrativa exige:",
        "alternativas": [
            "obediência a qualquer ordem emitida por autoridade competente.",
            "apenas conformidade formal com a lei escrita.",
            "conduta compatível com honestidade, boa-fé, lealdade e finalidade pública.",
            "preferência pela decisão de menor custo, independentemente dos meios.",
            "sigilo de todos os atos administrativos para evitar questionamentos."
        ],
        "correta": 2,
        "explicacao": "Moralidade acrescenta conteúdo ético-jurídico à atuação administrativa.",
        "feedbackAcerto": "Correto. Um ato pode estar formalmente dentro de uma regra e ainda afrontar a moralidade se houver desvio ético ou de finalidade.",
        "feedbackErro": "O erro é reduzir moralidade à mera legalidade formal.",
        "dicaBanca": "Legalidade e moralidade se complementam, mas não são sinônimos."
    },
    {
        "pergunta": "Um servidor utiliza informação obtida no cargo para beneficiar interesse particular de pessoa próxima. Ainda que não receba dinheiro, pode haver violação à:",
        "alternativas": [
            "publicidade e eficiência apenas.",
            "moralidade e impessoalidade.",
            "continuidade e autotutela.",
            "hierarquia e especialidade.",
            "motivação e descentralização."
        ],
        "correta": 1,
        "explicacao": "O uso da função para favorecer interesse privado pode comprometer moralidade e impessoalidade mesmo sem vantagem financeira direta.",
        "feedbackAcerto": "Correto. A ausência de pagamento não elimina o desvio ético e o favorecimento.",
        "feedbackErro": "O erro é restringir moralidade a corrupção com ganho econômico.",
        "dicaBanca": "Favorecimento sem dinheiro também pode ser imoral e impessoal."
    },
    {
        "pergunta": "O princípio da publicidade busca:",
        "alternativas": [
            "dispensar proteção de informações sensíveis.",
            "autorizar divulgação irrestrita de qualquer dado pessoal.",
            "substituir a necessidade de motivação dos atos.",
            "permitir propaganda pessoal de gestores públicos.",
            "dar transparência aos atos administrativos, ressalvadas hipóteses legais de sigilo."
        ],
        "correta": 4,
        "explicacao": "Publicidade assegura conhecimento e controle social, mas convive com sigilo legal e proteção de dados.",
        "feedbackAcerto": "Correto. Transparência não significa exposição indiscriminada.",
        "feedbackErro": "O erro é tratar publicidade como regra absoluta sem exceções legais.",
        "dicaBanca": "Publicidade e LGPD precisam ser lidas em conjunto."
    },
    {
        "pergunta": "Uma escola divulga em mural público diagnóstico médico de estudante para justificar atendimento diferenciado. A análise mais adequada é:",
        "alternativas": [
            "a publicidade não autoriza exposição de dado sensível sem finalidade e necessidade legítimas.",
            "a informação deve ser pública porque integra ato administrativo.",
            "qualquer dado escolar é público por envolver serviço estatal.",
            "a divulgação é obrigatória para garantir impessoalidade.",
            "o diagnóstico deixa de ser sensível quando utilizado pela escola."
        ],
        "correta": 0,
        "explicacao": "O princípio da publicidade não elimina os deveres de proteção de dados pessoais sensíveis.",
        "feedbackAcerto": "Correto. Transparência administrativa não legitima exposição desnecessária da saúde do estudante.",
        "feedbackErro": "O erro é transformar publicidade em acesso irrestrito a qualquer informação.",
        "dicaBanca": "Publicidade não é sinônimo de divulgação de dado sensível."
    },
    {
        "pergunta": "Eficiência administrativa exige:",
        "alternativas": [
            "redução de custos como único critério de decisão.",
            "prioridade absoluta da rapidez, ainda que direitos sejam desrespeitados.",
            "boa utilização dos recursos e busca de resultados adequados com qualidade e responsabilidade.",
            "eliminação de etapas legais para agilizar procedimentos.",
            "substituição da qualidade do serviço por metas quantitativas."
        ],
        "correta": 2,
        "explicacao": "Eficiência envolve produtividade, qualidade, boa gestão de recursos e resultados compatíveis com a legalidade.",
        "feedbackAcerto": "Correto. Ser eficiente não autoriza violar outros princípios constitucionais.",
        "feedbackErro": "O erro é usar eficiência como justificativa para atalhos ilegais ou perda de qualidade.",
        "dicaBanca": "Eficiência não supera legalidade, moralidade ou direitos."
    },
    {
        "pergunta": "Um servidor atende rapidamente, mas fornece informação errada para encerrar a fila. A conduta:",
        "alternativas": [
            "é eficiente porque reduziu o tempo médio de atendimento.",
            "não atende ao princípio da eficiência, pois rapidez sem qualidade não basta.",
            "é adequada se não houver reclamação formal.",
            "viola apenas publicidade.",
            "é válida quando o setor está sobrecarregado."
        ],
        "correta": 1,
        "explicacao": "Eficiência não se resume a velocidade; exige resultado útil e qualidade.",
        "feedbackAcerto": "Correto. Atendimento rápido com informação incorreta não produz resultado adequado.",
        "feedbackErro": "O erro é reduzir eficiência a tempo de atendimento.",
        "dicaBanca": "Rapidez ≠ eficiência."
    },
    {
        "pergunta": "A Administração divulga seus atos, mas utiliza linguagem incompreensível ao cidadão quando poderia comunicar com clareza. Isso pode comprometer:",
        "alternativas": [
            "exclusivamente a autotutela na atuação administrativa.",
            "apenas a legalidade formal do ato.",
            "somente a impessoalidade na atuação administrativa.",
            "unicamente a hierarquia na atuação administrativa.",
            "efetividade da publicidade e da eficiência do serviço."
        ],
        "correta": 4,
        "explicacao": "Publicidade efetiva pressupõe acesso compreensível, e eficiência também envolve qualidade da comunicação.",
        "feedbackAcerto": "Correto. Divulgar formalmente não basta se a informação não cumpre sua função prática.",
        "feedbackErro": "O erro é tratar publicidade como simples existência de publicação.",
        "dicaBanca": "Transparência útil exige clareza."
    },
    {
        "pergunta": "Aplicar critério objetivo de prioridade previsto em lei a pessoa com deficiência:",
        "alternativas": [
            "viola impessoalidade por não tratar todos de forma idêntica.",
            "é compatível com impessoalidade, porque o tratamento diferenciado possui fundamento legítimo.",
            "viola moralidade por favorecer um grupo específico.",
            "é permitido apenas quando houver ordem da chefia.",
            "depende de autorização dos demais usuários."
        ],
        "correta": 1,
        "explicacao": "Impessoalidade não impede tratamento diferenciado quando houver fundamento legal e objetivo.",
        "feedbackAcerto": "Correto. A diferenciação legítima não é favoritismo.",
        "feedbackErro": "O erro é confundir igualdade mecânica com impessoalidade.",
        "dicaBanca": "Critério legal de prioridade é diferente de privilégio pessoal."
    },
    {
        "pergunta": "Quando dois usuários estão na mesma condição jurídica, mas um recebe benefício por amizade com servidor, há ofensa à:",
        "alternativas": [
            "impessoalidade.",
            "eficiência.",
            "publicidade.",
            "continuidade.",
            "especialidade."
        ],
        "correta": 0,
        "explicacao": "O tratamento baseado em relação pessoal e não em critério jurídico afronta a impessoalidade.",
        "feedbackAcerto": "Correto. O problema está na personalização indevida da atuação estatal.",
        "feedbackErro": "O erro é desviar o foco para velocidade ou transparência.",
        "dicaBanca": "Amizade usada como critério = impessoalidade."
    },
    {
        "pergunta": "Um ato administrativo pode ser questionado por moralidade mesmo quando:",
        "alternativas": [
            "foi publicado regularmente e produziu resultado eficiente.",
            "aparentemente cumpre a forma legal, mas busca finalidade desonesta ou indevida.",
            "possui assinatura de autoridade competente na atuação administrativa.",
            "não gerou dano financeiro imediato na atuação administrativa.",
            "não recebeu reclamações de cidadãos na atuação administrativa."
        ],
        "correta": 1,
        "explicacao": "A moralidade permite avaliar conteúdo ético e finalidade do ato, não apenas sua forma.",
        "feedbackAcerto": "Correto. Formalidade não imuniza um ato contra controle de moralidade.",
        "feedbackErro": "O erro é presumir que assinatura, publicação ou ausência de dano bastam.",
        "dicaBanca": "Forma legal não garante moralidade."
    },
    {
        "pergunta": "A atuação eficiente de uma escola pública deve:",
        "alternativas": [
            "organizar recursos e processos para oferecer serviço de qualidade com respeito aos demais princípios.",
            "reduzir atendimentos complexos para melhorar indicadores na atuação administrativa.",
            "evitar estudantes que exijam mais tempo de apoio na atuação administrativa.",
            "priorizar metas numéricas em detrimento da aprendizagem na atuação administrativa.",
            "eliminar procedimentos de segurança para ganhar tempo na atuação administrativa."
        ],
        "correta": 0,
        "explicacao": "Eficiência deve melhorar a prestação do serviço sem excluir usuários nem violar direitos.",
        "feedbackAcerto": "Correto. Eficiência inclusiva busca melhor resultado para o serviço público.",
        "feedbackErro": "O erro é usar eficiência para justificar exclusão ou redução indevida de direitos.",
        "dicaBanca": "Em Apoio Escolar, eficiência não pode signific 'atender só quem dá menos trabalho'."
    },
    {
        "pergunta": "A publicidade pode ser restringida:",
        "alternativas": [
            "para impedir controle social sobre despesas na atuação administrativa.",
            "sempre que a autoridade preferir evitar críticas.",
            "quando o ato administrativo for impopular na atuação administrativa.",
            "quando houver fundamento constitucional ou legal de sigilo ou proteção de direitos.",
            "em qualquer situação envolvendo servidor público na atuação administrativa."
        ],
        "correta": 3,
        "explicacao": "A transparência é regra, mas existem hipóteses legítimas de restrição.",
        "feedbackAcerto": "Correto. O sigilo precisa de fundamento jurídico e não pode ser usado por mera conveniência.",
        "feedbackErro": "O erro é transformar sigilo em instrumento para evitar fiscalização.",
        "dicaBanca": "Sigilo é exceção fundamentada, não preferência da autoridade."
    },
    {
        "pergunta": "Ocultar deliberadamente informação pública para impedir fiscalização social afronta principalmente:",
        "alternativas": [
            "eficiência.",
            "impessoalidade.",
            "publicidade.",
            "continuidade.",
            "especialidade."
        ],
        "correta": 2,
        "explicacao": "A publicidade garante transparência e possibilidade de controle sobre a atuação administrativa.",
        "feedbackAcerto": "Correto. Ocultar informação sem fundamento legítimo impede o controle social.",
        "feedbackErro": "O erro é tratar o caso como mera falha de produtividade.",
        "dicaBanca": "Transparência negada sem base legal = publicidade."
    },
    {
        "pergunta": "Cumprir norma válida mesmo quando o servidor pessoalmente discorda dela relaciona-se diretamente à:",
        "alternativas": [
            "legalidade.",
            "moralidade apenas.",
            "publicidade.",
            "eficiência.",
            "impessoalidade apenas."
        ],
        "correta": 0,
        "explicacao": "A atuação do agente deve observar a ordem jurídica aplicável, independentemente de preferência pessoal.",
        "feedbackAcerto": "Correto. A discordância pessoal não autoriza afastar norma válida.",
        "feedbackErro": "O erro é confundir convicção moral individual com poder de descumprir regra jurídica.",
        "dicaBanca": "Preferência pessoal não substitui a legalidade."
    },
    {
        "pergunta": "Se uma ordem superior é manifestamente ilegal, o servidor:",
        "alternativas": [
            "pode escolher cumpri-la se considerar o resultado eficiente.",
            "deve cumpri-la sempre e depois representar.",
            "não deve cumpri-la apenas por invocação da hierarquia.",
            "deve obedecer porque legalidade se aplica somente à chefia.",
            "pode executá-la se não houver dano financeiro."
        ],
        "correta": 2,
        "explicacao": "Hierarquia não afasta a legalidade; ordens manifestamente ilegais não devem ser tratadas como obrigatórias.",
        "feedbackAcerto": "Correto. O dever de obediência possui limite jurídico.",
        "feedbackErro": "O erro é colocar hierarquia acima da legalidade.",
        "dicaBanca": "Hierarquia não legitima ilegalidade."
    },
    {
        "pergunta": "A escolha de fornecedor com base em amizade, ignorando critérios objetivos, compromete:",
        "alternativas": [
            "motivação e especialidade.",
            "publicidade e eficiência apenas.",
            "continuidade e hierarquia.",
            "impessoalidade e moralidade.",
            "legalidade apenas, sem dimensão ética."
        ],
        "correta": 3,
        "explicacao": "Favorecimento pessoal em decisão pública atinge impessoalidade e moralidade e pode também envolver ilegalidade conforme o caso.",
        "feedbackAcerto": "Correto. A relação pessoal substitui critérios legítimos e compromete integridade.",
        "feedbackErro": "O erro é reduzir o problema a um aspecto formal ou financeiro.",
        "dicaBanca": "Favoritismo costuma atingir mais de um princípio."
    },
    {
        "pergunta": "Usar veículo oficial para finalidade estritamente particular, sem autorização, afronta especialmente:",
        "alternativas": [
            "publicidade e eficiência.",
            "moralidade e legalidade.",
            "impessoalidade e publicidade apenas.",
            "continuidade e hierarquia.",
            "motivação e autotutela."
        ],
        "correta": 1,
        "explicacao": "O uso privado indevido de bem público pode contrariar a lei e a moralidade administrativa.",
        "feedbackAcerto": "Correto. A finalidade pública do bem foi desviada.",
        "feedbackErro": "O erro é procurar um princípio sem relação com o uso indevido do patrimônio.",
        "dicaBanca": "Desvio de finalidade costuma envolver legalidade e moralidade."
    },
    {
        "pergunta": "A publicação de dados estatísticos agregados, sem identificação de estudantes, pode atender à publicidade porque:",
        "alternativas": [
            "publicidade exige sempre identificação nominal dos beneficiários.",
            "todo dado agregado é automaticamente público em qualquer situação.",
            "a LGPD não se aplica a escolas públicas.",
            "estatísticas eliminam qualquer necessidade de cautela com reidentificação.",
            "permite transparência sem necessariamente expor dados pessoais individualizados."
        ],
        "correta": 4,
        "explicacao": "Transparência pode ser promovida com dados agregados e técnicas de minimização, conforme a finalidade.",
        "feedbackAcerto": "Correto. É possível conciliar controle social e privacidade.",
        "feedbackErro": "O erro é afirmar ausência total de risco ou obrigação de identificação nominal.",
        "dicaBanca": "Boa administração busca transparência com minimização."
    },
    {
        "pergunta": "O princípio da eficiência foi incluído expressamente no caput do art. 37 pela:",
        "alternativas": [
            "Emenda Constitucional nº 45/2004.",
            "Constituição de 1967.",
            "Emenda Constitucional nº 19/1998.",
            "Lei nº 8.112/1990.",
            "Lei de Responsabilidade Fiscal."
        ],
        "correta": 2,
        "explicacao": "A EC nº 19/1998 incluiu expressamente a eficiência entre os princípios do caput do art. 37.",
        "feedbackAcerto": "Correto. Esse é um dado histórico-normativo clássico.",
        "feedbackErro": "O erro é atribuir a inclusão a lei ordinária ou emenda diversa.",
        "dicaBanca": "Ágata pode cobrar a origem constitucional da eficiência."
    },
    {
        "pergunta": "A publicidade dos atos administrativos também favorece:",
        "alternativas": [
            "autonomia absoluta da autoridade.",
            "promoção pessoal de agentes públicos.",
            "dispensa de motivação dos atos.",
            "sigilo de informações de interesse coletivo.",
            "controle social e responsabilização da Administração."
        ],
        "correta": 4,
        "explicacao": "Transparência permite conhecimento, fiscalização e controle da atuação pública.",
        "feedbackAcerto": "Correto. Publicidade está ligada à accountability e ao controle social.",
        "feedbackErro": "O erro é transformar publicidade em ferramenta de autopromoção.",
        "dicaBanca": "Publicidade fortalece controle, não personalismo."
    },
    {
        "pergunta": "Um servidor divulga apenas resultados positivos e oculta deliberadamente falhas relevantes do serviço. Isso pode comprometer:",
        "alternativas": [
            "eficiência apenas.",
            "legalidade apenas.",
            "impessoalidade apenas.",
            "moralidade e publicidade.",
            "continuidade apenas."
        ],
        "correta": 3,
        "explicacao": "A seleção enganosa de informações pode violar deveres de transparência e integridade.",
        "feedbackAcerto": "Correto. Publicidade parcial usada para manipular percepção pública pode também atingir moralidade.",
        "feedbackErro": "O erro é tratar divulgação seletiva como mera estratégia de comunicação.",
        "dicaBanca": "Transparência não deve ser manipulativa."
    },
    {
        "pergunta": "A administração adota procedimento mais rápido, porém sem garantir direito de defesa exigido em lei. A medida:",
        "alternativas": [
            "é válida se reduzir custos na atuação administrativa.",
            "é válida porque eficiência prevalece sobre formalidades na atuação administrativa.",
            "não é válida apenas por ser eficiente, pois a legalidade deve ser respeitada.",
            "é válida se houver apoio da maioria dos usuários.",
            "somente viola publicidade na atuação administrativa."
        ],
        "correta": 2,
        "explicacao": "Eficiência não autoriza afastar garantias ou requisitos legais.",
        "feedbackAcerto": "Correto. Os princípios constitucionais devem ser harmonizados, e não usados para eliminar uns aos outros.",
        "feedbackErro": "O erro é imaginar hierarquia absoluta da eficiência sobre a legalidade.",
        "dicaBanca": "Princípios do art. 37 coexistem."
    },
    {
        "pergunta": "Uma decisão administrativa que beneficia determinado grupo por critério previsto em política pública legítima:",
        "alternativas": [
            "viola moralidade porque seleciona beneficiários na atuação administrativa.",
            "sempre viola impessoalidade por criar tratamento diferente na atuação administrativa.",
            "é válida apenas se beneficiar todos igualmente na atuação administrativa.",
            "dispensa publicidade por envolver política pública na atuação administrativa.",
            "pode ser compatível com impessoalidade se o critério for objetivo e juridicamente justificável."
        ],
        "correta": 4,
        "explicacao": "Impessoalidade admite diferenciações baseadas em critérios gerais, objetivos e legítimos.",
        "feedbackAcerto": "Correto. A política pública não é favoritismo quando aplica critérios previamente definidos.",
        "feedbackErro": "O erro é confundir seleção objetiva com privilégio pessoal.",
        "dicaBanca": "Benefício focalizado não é necessariamente favorecimento indevido."
    },
    {
        "pergunta": "Uma escola estabelece regra informal para negar atendimento a estudantes considerados 'difíceis'. A situação pode violar:",
        "alternativas": [
            "apenas continuidade na atuação administrativa.",
            "apenas eficiência na atuação administrativa.",
            "somente publicidade na atuação administrativa.",
            "legalidade, impessoalidade e moralidade.",
            "exclusivamente especialidade na atuação administrativa."
        ],
        "correta": 3,
        "explicacao": "Regra informal excludente pode não ter base jurídica, personalizar o serviço e afrontar a ética pública.",
        "feedbackAcerto": "Correto. Mais de um princípio pode ser atingido simultaneamente.",
        "feedbackErro": "O erro é procurar uma única dimensão quando o caso combina ilegalidade, discriminação e desvio ético.",
        "dicaBanca": "Questões mais difíceis podem envolver dois ou três princípios."
    },
    {
        "pergunta": "A eficiência pode ser medida apenas pelo menor custo?",
        "alternativas": [
            "Não; eficiência não possui relação com recursos na atuação administrativa.",
            "Sim; menor custo sempre significa maior eficiência na atuação administrativa.",
            "Sim; desde que o gestor publique os resultados.",
            "Não; custo é um fator, mas qualidade, resultado e atendimento adequado também importam.",
            "Sim; qualidade é tema exclusivo da moralidade na atuação administrativa."
        ],
        "correta": 3,
        "explicacao": "Eficiência envolve relação entre recursos e resultados, sem desprezar qualidade e finalidade.",
        "feedbackAcerto": "Correto. Economizar prejudicando o serviço não caracteriza boa eficiência.",
        "feedbackErro": "O erro é reduzir eficiência a economia financeira.",
        "dicaBanca": "Custo baixo com serviço ruim não é eficiência."
    },
    {
        "pergunta": "A moralidade administrativa permite questionar conduta que:",
        "alternativas": [
            "é apenas lenta, sem qualquer aspecto ético ou jurídico.",
            "usa a função pública de modo incompatível com honestidade e boa-fé.",
            "gera custo elevado, independentemente da finalidade na atuação administrativa.",
            "foi publicada regularmente na atuação administrativa.",
            "possui motivação técnica documentada na atuação administrativa."
        ],
        "correta": 1,
        "explicacao": "Moralidade atinge a dimensão ética da atuação estatal.",
        "feedbackAcerto": "Correto. Desonestidade, deslealdade e desvio ético são centrais na análise da moralidade.",
        "feedbackErro": "O erro é escolher fatores neutros que, isoladamente, não demonstram imoralidade.",
        "dicaBanca": "Moralidade procura o conteúdo ético da ação."
    },
    {
        "pergunta": "Quando a Administração utiliza critérios previamente divulgados para selecionar beneficiários, fortalece:",
        "alternativas": [
            "eficiência apenas.",
            "hierarquia e continuidade.",
            "moralidade apenas.",
            "impessoalidade e publicidade.",
            "especialidade e autotutela."
        ],
        "correta": 3,
        "explicacao": "Critérios objetivos reduzem favorecimento, e sua divulgação amplia transparência.",
        "feedbackAcerto": "Correto. A situação combina impessoalidade e publicidade.",
        "feedbackErro": "O erro é ignorar que mais de um princípio pode ser promovido pela mesma prática.",
        "dicaBanca": "Critério objetivo + divulgação = boa combinação para prova."
    },
    {
        "pergunta": "Publicidade oficial deve ter caráter:",
        "alternativas": [
            "educativo, informativo ou de orientação social.",
            "promocional da autoridade responsável.",
            "partidário quando houver interesse institucional.",
            "comercial para gerar receita ao órgão.",
            "sigiloso para preservar a imagem pública."
        ],
        "correta": 0,
        "explicacao": "O art. 37, §1º, define as finalidades legítimas da publicidade dos órgãos públicos.",
        "feedbackAcerto": "Correto. A Constituição delimita o caráter da comunicação institucional.",
        "feedbackErro": "O erro é aceitar promoção pessoal ou partidária.",
        "dicaBanca": "Decore: educativo, informativo ou orientação social."
    },
    {
        "pergunta": "A expressão LIMPE é usada para memorizar:",
        "alternativas": [
            "legalidade, impessoalidade, moralidade, publicidade e eficiência.",
            "legalidade, interesse público, moralidade, prudência e economicidade.",
            "legitimidade, impessoalidade, motivação, publicidade e efetividade.",
            "legalidade, indisponibilidade, moralidade, proporcionalidade e eficiência.",
            "licitação, impessoalidade, motivação, publicidade e economicidade."
        ],
        "correta": 0,
        "explicacao": "LIMPE corresponde aos cinco princípios expressos no caput do art. 37.",
        "feedbackAcerto": "Correto. A sigla é recurso mnemônico, não nome oficial constitucional.",
        "feedbackErro": "O erro é inserir princípios verdadeiros, mas que não fazem parte da sigla.",
        "dicaBanca": "Ágata pode usar siglas para questão objetiva."
    },
    {
        "pergunta": "Um servidor recusa atendimento a usuário por antipatia pessoal. A violação mais direta é:",
        "alternativas": [
            "eficiência.",
            "publicidade.",
            "impessoalidade.",
            "continuidade.",
            "especialidade."
        ],
        "correta": 2,
        "explicacao": "A relação pessoal não pode determinar acesso ao serviço público.",
        "feedbackAcerto": "Correto. A antipatia foi usada como critério de atuação estatal.",
        "feedbackErro": "O erro é focar no resultado lento e perder o elemento pessoal.",
        "dicaBanca": "Simpatia ou antipatia não podem dirigir o serviço público."
    },
    {
        "pergunta": "Um gestor manda retirar seu nome de campanha institucional para evitar personalização. A medida:",
        "alternativas": [
            "reduz eficiência da comunicação.",
            "viola publicidade por ocultar a autoridade responsável.",
            "reforça a impessoalidade da publicidade oficial.",
            "afronta legalidade por não identificar o agente.",
            "contraria moralidade por impedir reconhecimento político."
        ],
        "correta": 2,
        "explicacao": "A publicidade institucional não deve promover pessoalmente autoridades ou servidores.",
        "feedbackAcerto": "Correto. O foco deve estar no órgão, serviço ou política pública.",
        "feedbackErro": "O erro é supor que publicidade exige promoção nominal da autoridade.",
        "dicaBanca": "Institucional ≠ pessoal."
    },
    {
        "pergunta": "Quando a Administração publica ato apenas após longo atraso injustificado, pode haver prejuízo:",
        "alternativas": [
            "à publicidade e à eficiência.",
            "somente à impessoalidade.",
            "apenas à moralidade.",
            "exclusivamente à legalidade.",
            "somente à continuidade."
        ],
        "correta": 0,
        "explicacao": "Publicidade tardia pode reduzir transparência útil e eficiência administrativa.",
        "feedbackAcerto": "Correto. Tempestividade também importa para a utilidade da informação.",
        "feedbackErro": "O erro é pensar publicidade apenas como ato formal sem considerar sua efetividade.",
        "dicaBanca": "Publicidade útil deve ser tempestiva."
    },
    {
        "pergunta": "O princípio da publicidade não afasta:",
        "alternativas": [
            "dever de promoção pessoal de autoridades.",
            "proteção da intimidade, da vida privada e de dados legalmente protegidos.",
            "obrigação de divulgar qualquer prontuário individual.",
            "necessidade de tornar sigilo uma regra geral.",
            "direito da Administração de ocultar despesas."
        ],
        "correta": 1,
        "explicacao": "A transparência pública convive com direitos fundamentais de privacidade e hipóteses legais de sigilo.",
        "feedbackAcerto": "Correto. O ordenamento exige conciliação entre transparência e proteção de direitos.",
        "feedbackErro": "O erro é transformar publicidade em exposição de dados pessoais.",
        "dicaBanca": "Art. 37 deve dialogar com LGPD e direitos fundamentais."
    },
    {
        "pergunta": "Servidor que utiliza posição funcional para conseguir vantagem particular indevida compromete principalmente:",
        "alternativas": [
            "eficiência e motivação.",
            "publicidade e eficiência.",
            "continuidade e legalidade apenas.",
            "hierarquia e publicidade.",
            "moralidade e impessoalidade."
        ],
        "correta": 4,
        "explicacao": "O uso da função para benefício particular indevido contraria integridade e neutralidade do serviço.",
        "feedbackAcerto": "Correto. Há desvio ético e personalização da função pública.",
        "feedbackErro": "O erro é tratar a situação apenas como desempenho ou comunicação.",
        "dicaBanca": "Vantagem privada indevida geralmente aponta para moralidade."
    },
    {
        "pergunta": "A Administração escolhe solução um pouco mais cara, mas muito mais segura e eficaz. Isso:",
        "alternativas": [
            "pode ser compatível com eficiência, pois eficiência não se resume ao menor preço.",
            "sempre viola eficiência porque o custo aumentou na atuação administrativa.",
            "viola moralidade por gastar mais recursos na atuação administrativa.",
            "somente é possível mediante sigilo na atuação administrativa.",
            "viola impessoalidade por escolher solução diferente na atuação administrativa."
        ],
        "correta": 0,
        "explicacao": "Eficiência avalia custo-benefício, qualidade e resultado, e não apenas preço.",
        "feedbackAcerto": "Correto. Uma solução de maior custo pode gerar melhor resultado global.",
        "feedbackErro": "O erro é equiparar eficiência a economia imediata.",
        "dicaBanca": "Menor preço não é automaticamente melhor eficiência."
    },
    {
        "pergunta": "Quando um ato é divulgado de forma acessível e compreensível, isso favorece:",
        "alternativas": [
            "promoção pessoal e hierarquia.",
            "publicidade e controle social.",
            "sigilo e eficiência apenas.",
            "impessoalidade apenas.",
            "legalidade apenas."
        ],
        "correta": 1,
        "explicacao": "Informação clara amplia transparência e possibilidade de fiscalização.",
        "feedbackAcerto": "Correto. A publicidade cumpre melhor sua finalidade quando é compreensível.",
        "feedbackErro": "O erro é reduzir publicidade à mera publicação formal.",
        "dicaBanca": "Transparência real exige compreensão."
    },
    {
        "pergunta": "A impessoalidade também protege o servidor porque:",
        "alternativas": [
            "autoriza tratamento hostil para demonstrar neutralidade na atuação administrativa.",
            "permite ignorar necessidades específicas dos usuários na atuação administrativa.",
            "dispensa fundamentação de decisões na atuação administrativa.",
            "reduz pressão para decidir com base em relações pessoais e favorece critérios objetivos.",
            "elimina qualquer responsabilidade individual na atuação administrativa."
        ],
        "correta": 3,
        "explicacao": "Critérios impessoais ajudam a proteger agentes e cidadãos contra favorecimentos e perseguições.",
        "feedbackAcerto": "Correto. A impessoalidade organiza decisões em torno de critérios legítimos.",
        "feedbackErro": "O erro é confundir neutralidade com frieza ou ausência de responsabilidade.",
        "dicaBanca": "Impessoalidade também é proteção institucional."
    },
    {
        "pergunta": "Assinale a situação mais compatível com moralidade administrativa:",
        "alternativas": [
            "servidor recusa favor pessoal solicitado por conhecido e mantém o critério institucional.",
            "servidor favorece conhecido porque o resultado final seria o mesmo.",
            "servidor oculta erro para proteger a imagem do setor.",
            "servidor usa bem público para necessidade privada sem autorização.",
            "servidor divulga dado sigiloso para demonstrar transparência."
        ],
        "correta": 0,
        "explicacao": "Recusar favorecimento e preservar a finalidade pública demonstra integridade e moralidade.",
        "feedbackAcerto": "Correto. A conduta evita desvio ético e mantém coerência institucional.",
        "feedbackErro": "Os distratores apresentam atalhos ou desvios incompatíveis com a moralidade.",
        "dicaBanca": "Situações de pressão pessoal são boas para cobrar moralidade."
    },
    {
        "pergunta": "Uma norma interna contraria lei vigente. O servidor deve:",
        "alternativas": [
            "ignorar o conflito enquanto ninguém reclamar.",
            "seguir a norma interna porque é mais específica.",
            "escolher a regra que considerar mais eficiente.",
            "cumprir ambas mesmo que sejam incompatíveis.",
            "observar a legalidade e buscar solução institucional para adequação da norma inferior."
        ],
        "correta": 4,
        "explicacao": "A legalidade exige respeito à hierarquia normativa e correção de incompatibilidades pelos meios adequados.",
        "feedbackAcerto": "Correto. Norma interna não pode afastar lei superior.",
        "feedbackErro": "O erro é tratar especificidade ou eficiência como fundamento para descumprir lei.",
        "dicaBanca": "Conflito de normas pode aparecer dentro de questão de legalidade."
    },
    {
        "pergunta": "Servidor que presta informação correta, dentro do prazo e por canal oficial exemplifica especialmente:",
        "alternativas": [
            "continuidade apenas.",
            "impessoalidade apenas.",
            "moralidade apenas.",
            "legalidade apenas.",
            "eficiência e publicidade."
        ],
        "correta": 4,
        "explicacao": "A prestação tempestiva e correta de informação combina qualidade do serviço com transparência.",
        "feedbackAcerto": "Correto. O caso envolve mais de um princípio do LIMPE.",
        "feedbackErro": "O erro é procurar sempre apenas um princípio quando o enunciado admite combinação.",
        "dicaBanca": "Ágata pode cobrar princípios simultaneamente."
    },
    {
        "pergunta": "Uma Administração transparente, mas que pratica favorecimentos pessoais:",
        "alternativas": [
            "não apresenta problema constitucional se os atos forem legais.",
            "cumpre todos os princípios porque divulga seus atos.",
            "viola apenas eficiência.",
            "cumpre publicidade, mas viola impessoalidade e possivelmente moralidade.",
            "viola somente continuidade."
        ],
        "correta": 3,
        "explicacao": "Os princípios do art. 37 são cumulativos; cumprir um não compensa violar outro.",
        "feedbackAcerto": "Correto. Transparência não legitima favoritismo.",
        "feedbackErro": "O erro é imaginar compensação entre princípios constitucionais.",
        "dicaBanca": "LIMPE não funciona por média: todos devem ser observados."
    },
    {
        "pergunta": "Se um ato é eficiente e impessoal, mas ilegal:",
        "alternativas": [
            "pode ser mantido se gerar economia.",
            "torna-se válido porque dois princípios foram atendidos.",
            "continua inválido sob a ótica do princípio da legalidade.",
            "somente precisa ser publicado.",
            "depende da opinião da chefia."
        ],
        "correta": 2,
        "explicacao": "Os princípios não autorizam afastar a legalidade em razão de bom resultado ou neutralidade.",
        "feedbackAcerto": "Correto. A atuação administrativa precisa respeitar simultaneamente os princípios aplicáveis.",
        "feedbackErro": "O erro é usar eficiência ou impessoalidade para 'compensar' ilegalidade.",
        "dicaBanca": "Não existe compensação de ilegalidade por eficiência."
    },
    {
        "pergunta": "Assinale a alternativa que melhor sintetiza a relação entre os princípios do art. 37:",
        "alternativas": [
            "devem ser observados conjuntamente, pois se complementam na atuação administrativa.",
            "eficiência prevalece sempre que houver conflito com os demais.",
            "publicidade torna desnecessária a moralidade.",
            "legalidade elimina a necessidade de impessoalidade.",
            "cada órgão escolhe quais princípios aplicará conforme sua realidade."
        ],
        "correta": 0,
        "explicacao": "Legalidade, impessoalidade, moralidade, publicidade e eficiência integram um conjunto de deveres constitucionais cumulativos.",
        "feedbackAcerto": "Correto. A boa administração precisa harmonizar os princípios, não escolher um e abandonar os outros.",
        "feedbackErro": "Os distratores criam falsas hierarquias ou dispensas entre princípios.",
        "dicaBanca": "Questão-síntese: LIMPE é conjunto, não cardápio."
    }
];

if (typeof window !== 'undefined') { window.principiosAdministracao = principiosAdministracao; }
