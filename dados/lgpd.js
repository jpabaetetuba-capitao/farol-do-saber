// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// LGPD — LEI Nº 13.709/2018 — BANCO REVISADO 2026
// Conceitos, princípios, bases legais, dados sensíveis, crianças,
// direitos do titular, Poder Público, segurança e incidentes.
// Padrão Instituto Ágata — 50 questões + feedbacks específicos.
// ============================================================

const lgpd = [
    {
        "pergunta": "Para a LGPD, dado pessoal é:",
        "alternativas": [
            "apenas dado que contenha nome completo e número de CPF.",
            "qualquer informação pertencente a pessoa jurídica pública ou privada.",
            "somente informação protegida por sigilo médico ou bancário.",
            "informação relacionada a pessoa natural identificada ou identificável.",
            "informação anônima que não possa ser associada a pessoa alguma."
        ],
        "correta": 3,
        "explicacao": "O art. 5º, I, define dado pessoal como informação relacionada a pessoa natural identificada ou identificável.",
        "feedbackAcerto": "Correto. O conceito não exige nome ou CPF; basta que a informação permita identificar ou tornar identificável uma pessoa natural.",
        "feedbackErro": "Se você restringiu dado pessoal a CPF, nome ou dado sigiloso, reduziu indevidamente o conceito da LGPD.",
        "dicaBanca": "Ágata pode testar a diferença entre pessoa identificada e identificável."
    },
    {
        "pergunta": "É exemplo de dado pessoal sensível segundo a LGPD:",
        "alternativas": [
            "nome de uma escola pública.",
            "número de matrícula sem qualquer associação a pessoa.",
            "dado sobre saúde de uma pessoa natural.",
            "endereço de uma repartição municipal.",
            "informação sobre patrimônio de pessoa jurídica."
        ],
        "correta": 2,
        "explicacao": "O art. 5º, II, inclui entre os dados sensíveis informações sobre saúde, origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, vida sexual, dados genéticos e biométricos vinculados a pessoa natural.",
        "feedbackAcerto": "Correto. Informações de saúde pertencem à categoria especial de dados pessoais sensíveis.",
        "feedbackErro": "O erro é escolher informações institucionais ou de pessoa jurídica, que não correspondem ao conceito legal de dado pessoal sensível.",
        "dicaBanca": "Dados de saúde são especialmente relevantes no ambiente escolar."
    },
    {
        "pergunta": "Dado anonimizado é aquele:",
        "alternativas": [
            "relativo a titular que não possa ser identificado, considerando meios técnicos razoáveis e disponíveis.",
            "que teve apenas o nome retirado, mesmo que a pessoa continue facilmente identificável.",
            "que permanece vinculado ao CPF, mas não é divulgado ao público.",
            "que foi armazenado em sistema com senha de acesso.",
            "que pertence a criança ou adolescente e por isso não pode ser identificado."
        ],
        "correta": 0,
        "explicacao": "A anonimização exige que o titular não possa ser identificado considerando meios técnicos razoáveis e disponíveis.",
        "feedbackAcerto": "Correto. Retirar apenas o nome pode não ser suficiente se outros elementos ainda permitirem identificar a pessoa.",
        "feedbackErro": "A pegadinha é confundir anonimização com simples ocultação de um campo identificador.",
        "dicaBanca": "Sem nome não significa necessariamente anonimizado."
    },
    {
        "pergunta": "Na LGPD, tratamento de dados pessoais compreende:",
        "alternativas": [
            "operações como coleta, acesso, armazenamento, uso, compartilhamento e eliminação.",
            "somente coleta e armazenamento em sistemas eletrônicos.",
            "apenas divulgação pública de informações pessoais.",
            "exclusivamente processamento automatizado por computador.",
            "somente operações realizadas mediante consentimento."
        ],
        "correta": 0,
        "explicacao": "O conceito de tratamento é amplo e abrange praticamente todo o ciclo de vida do dado.",
        "feedbackAcerto": "Correto. A LGPD alcança desde a coleta até a eliminação, inclusive acesso e compartilhamento.",
        "feedbackErro": "Se você limitou tratamento a computador, consentimento ou divulgação, ignorou a amplitude do art. 5º.",
        "dicaBanca": "Tratamento é conceito amplo; não se resume a coleta."
    },
    {
        "pergunta": "O controlador, para fins da LGPD, é:",
        "alternativas": [
            "qualquer servidor que consulte um sistema institucional no contexto do tratamento de dados pessoais.",
            "o titular cujos dados são utilizados pelo órgão público no contexto do tratamento de dados pessoais.",
            "a pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais.",
            "somente a empresa contratada para armazenar os dados no contexto do tratamento de dados pessoais.",
            "o profissional responsável por fiscalizar exclusivamente a segurança física do arquivo."
        ],
        "correta": 2,
        "explicacao": "O controlador é quem toma as decisões referentes ao tratamento de dados pessoais.",
        "feedbackAcerto": "Correto. No Poder Público, a identificação do controlador deve considerar a pessoa jurídica ou órgão responsável pelas decisões sobre o tratamento.",
        "feedbackErro": "O erro é confundir controlador com titular, operador ou usuário individual do sistema.",
        "dicaBanca": "Controlador decide; operador realiza o tratamento em nome do controlador."
    },
    {
        "pergunta": "O operador é definido pela LGPD como:",
        "alternativas": [
            "o titular que autoriza a coleta dos próprios dados.",
            "quem decide livremente as finalidades do tratamento.",
            "quem realiza o tratamento de dados pessoais em nome do controlador.",
            "a autoridade pública que aplica sanções administrativas.",
            "qualquer pessoa que receba informação de forma casual."
        ],
        "correta": 2,
        "explicacao": "O operador realiza operações de tratamento em nome do controlador e conforme suas instruções.",
        "feedbackAcerto": "Correto. A característica central é atuar em nome do controlador.",
        "feedbackErro": "Se a alternativa atribui ao operador a decisão autônoma sobre finalidade, aproxima-o do papel de controlador.",
        "dicaBanca": "Memorize: controlador decide; operador executa em nome dele."
    },
    {
        "pergunta": "O encarregado pelo tratamento de dados pessoais exerce, entre outras, a função de:",
        "alternativas": [
            "autorizar judicialmente qualquer compartilhamento de dados.",
            "substituir o controlador em todas as decisões sobre finalidade do tratamento.",
            "atuar como canal de comunicação entre controlador, titulares e ANPD.",
            "representar obrigatoriamente cada titular em processo administrativo.",
            "realizar sozinho todas as operações técnicas de segurança da informação."
        ],
        "correta": 2,
        "explicacao": "A LGPD atribui ao encarregado função de comunicação e outras atribuições definidas pela lei e regulamentação.",
        "feedbackAcerto": "Correto. O encarregado facilita a relação entre organização, titulares e Autoridade Nacional.",
        "feedbackErro": "O erro é transformar o encarregado em controlador, advogado do titular ou único responsável técnico pela segurança.",
        "dicaBanca": "Encarregado não é sinônimo de controlador."
    },
    {
        "pergunta": "Segundo o princípio da finalidade, o tratamento deve:",
        "alternativas": [
            "dispensar justificativa sempre que ocorrer no Poder Público.",
            "utilizar todos os dados disponíveis para possíveis necessidades futuras.",
            "permitir mudança livre de finalidade sem nova análise.",
            "ser mantido em sigilo mesmo quando o titular tenha direito à informação.",
            "ser realizado para propósitos legítimos, específicos, explícitos e informados ao titular."
        ],
        "correta": 4,
        "explicacao": "A finalidade exige propósitos legítimos, específicos, explícitos e informados, sem tratamento posterior incompatível.",
        "feedbackAcerto": "Correto. A organização deve saber por que trata o dado e manter coerência com esse propósito.",
        "feedbackErro": "Coletar 'para qualquer uso futuro' contraria a especificidade exigida pela LGPD.",
        "dicaBanca": "Finalidade responde à pergunta: para quê o dado será tratado?"
    },
    {
        "pergunta": "O princípio da necessidade determina:",
        "alternativas": [
            "limitação do tratamento ao mínimo necessário para atingir a finalidade pretendida.",
            "coleta do maior número possível de dados para prevenir demandas futuras.",
            "obrigação de guardar todos os dados por tempo indeterminado.",
            "proibição absoluta de compartilhar dados entre setores públicos.",
            "exigência de consentimento para toda e qualquer operação."
        ],
        "correta": 0,
        "explicacao": "A necessidade exige pertinência, proporcionalidade e não excesso em relação às finalidades.",
        "feedbackAcerto": "Correto. A coleta deve ser limitada ao que realmente é necessário.",
        "feedbackErro": "O erro é adotar a lógica de 'coletar tudo por garantia', incompatível com minimização de dados.",
        "dicaBanca": "Necessidade = mínimo necessário."
    },
    {
        "pergunta": "Conforme o princípio da adequação, o tratamento deve ser:",
        "alternativas": [
            "baseado sempre em consentimento escrito e destacado.",
            "realizado exclusivamente em sistemas eletrônicos homologados pela ANPD.",
            "limitado a dados públicos disponibilizados na internet.",
            "compatível com as finalidades informadas ao titular e com o contexto do tratamento.",
            "igual para todos os órgãos, independentemente do serviço prestado."
        ],
        "correta": 3,
        "explicacao": "A adequação exige compatibilidade entre o tratamento realizado, a finalidade informada e o contexto.",
        "feedbackAcerto": "Correto. Não basta ter uma finalidade legítima; o uso concreto do dado deve ser coerente com ela.",
        "feedbackErro": "O erro é transformar adequação em requisito técnico específico ou consentimento obrigatório.",
        "dicaBanca": "Finalidade e adequação são princípios próximos, mas não idênticos."
    },
    {
        "pergunta": "O livre acesso assegura ao titular:",
        "alternativas": [
            "acesso apenas quando houver decisão judicial.",
            "acesso irrestrito a dados pessoais de terceiros tratados pelo mesmo órgão.",
            "direito de alterar qualquer registro sem procedimento de confirmação.",
            "obrigação de receber cópia impressa de toda base de dados do órgão.",
            "consulta facilitada e gratuita sobre a forma e a duração do tratamento e a integralidade de seus dados."
        ],
        "correta": 4,
        "explicacao": "O princípio do livre acesso garante consulta facilitada e gratuita ao titular sobre seus próprios dados e tratamento.",
        "feedbackAcerto": "Correto. O direito pertence ao titular e não autoriza acesso a dados de terceiros.",
        "feedbackErro": "O erro é transformar livre acesso em acesso irrestrito ao banco de dados institucional.",
        "dicaBanca": "Livre acesso protege o titular, não elimina o sigilo de terceiros."
    },
    {
        "pergunta": "O princípio da qualidade dos dados exige:",
        "alternativas": [
            "eliminação imediata de qualquer dado após sua primeira utilização.",
            "manutenção indefinida de registros antigos para preservar o histórico.",
            "uso exclusivo de dados coletados diretamente do titular.",
            "exatidão, clareza, relevância e atualização dos dados conforme a necessidade e a finalidade.",
            "divulgação pública para que terceiros confirmem a informação."
        ],
        "correta": 3,
        "explicacao": "A qualidade busca evitar decisões baseadas em informações incorretas, desatualizadas ou irrelevantes.",
        "feedbackAcerto": "Correto. Dados utilizados devem ser adequados à finalidade e mantidos com qualidade.",
        "feedbackErro": "O erro é imaginar que histórico antigo sempre deve prevalecer ou que divulgação pública é meio de validação.",
        "dicaBanca": "No ambiente escolar, dado desatualizado pode gerar apoio ou decisão inadequada."
    },
    {
        "pergunta": "O princípio da transparência garante:",
        "alternativas": [
            "sigilo absoluto sobre finalidades e agentes de tratamento.",
            "publicação integral de todos os dados pessoais tratados pelo órgão.",
            "dispensa de informação quando o tratamento ocorre no setor público.",
            "acesso de qualquer pessoa aos dados sensíveis existentes no sistema.",
            "informações claras, precisas e facilmente acessíveis sobre o tratamento, ressalvados segredos protegidos."
        ],
        "correta": 4,
        "explicacao": "A transparência exige clareza sobre como e por que os dados são tratados, sem violar segredos protegidos.",
        "feedbackAcerto": "Correto. Transparência sobre o tratamento não significa exposição dos próprios dados pessoais.",
        "feedbackErro": "O erro clássico é confundir transparência da atividade de tratamento com publicidade irrestrita do conteúdo dos dados.",
        "dicaBanca": "Transparência e privacidade coexistem."
    },
    {
        "pergunta": "Segurança, como princípio da LGPD, relaciona-se ao uso de:",
        "alternativas": [
            "somente arquivos físicos mantidos em armários com chave no contexto do tratamento de dados pessoais.",
            "apenas senhas fortes em sistemas eletrônicos no contexto do tratamento de dados pessoais.",
            "medidas técnicas e administrativas aptas a proteger dados contra acessos não autorizados e situações acidentais ou ilícitas.",
            "publicação dos dados para reduzir risco de perda de informação.",
            "consentimento do titular como substituto das medidas de proteção no contexto do tratamento de dados pessoais."
        ],
        "correta": 2,
        "explicacao": "O princípio da segurança exige medidas técnicas e administrativas adequadas aos riscos.",
        "feedbackAcerto": "Correto. Segurança não se limita a senha nem a formato digital.",
        "feedbackErro": "O erro é tratar uma única medida como suficiente ou imaginar que consentimento elimina o dever de proteção.",
        "dicaBanca": "Segurança vale para arquivos digitais e físicos."
    },
    {
        "pergunta": "O princípio da prevenção determina:",
        "alternativas": [
            "eliminação de todos os dados após cada atendimento.",
            "atuação somente depois que ocorrer incidente de segurança.",
            "proibição de qualquer tratamento que envolva dado sensível.",
            "adoção de medidas para prevenir a ocorrência de danos em virtude do tratamento.",
            "transferência integral da responsabilidade ao operador contratado."
        ],
        "correta": 3,
        "explicacao": "A prevenção exige atuação antecipada para reduzir riscos e danos.",
        "feedbackAcerto": "Correto. A LGPD não trabalha apenas com reação a incidentes.",
        "feedbackErro": "O erro é esperar o dano acontecer ou transferir completamente a responsabilidade a terceiros.",
        "dicaBanca": "Prevenção é agir antes do incidente."
    },
    {
        "pergunta": "O princípio da não discriminação proíbe:",
        "alternativas": [
            "tratamento de dados sensíveis em qualquer hipótese.",
            "qualquer diferenciação fundada em necessidade legítima e prevista em lei.",
            "uso de dados pessoais pelo Poder Público em políticas públicas.",
            "tratamento para fins discriminatórios ilícitos ou abusivos.",
            "análise de informações necessária ao atendimento individualizado."
        ],
        "correta": 3,
        "explicacao": "A LGPD proíbe o uso de dados para discriminação ilícita ou abusiva.",
        "feedbackAcerto": "Correto. Nem toda diferenciação é proibida; o foco é a finalidade discriminatória ilícita ou abusiva.",
        "feedbackErro": "O erro é transformar não discriminação em proibição absoluta de qualquer tratamento diferenciado.",
        "dicaBanca": "Não discriminação não impede políticas legítimas de inclusão."
    },
    {
        "pergunta": "O princípio da responsabilização e prestação de contas exige:",
        "alternativas": [
            "apenas declaração formal de que o órgão conhece a LGPD.",
            "demonstração de medidas eficazes capazes de comprovar observância e cumprimento das normas de proteção de dados.",
            "responsabilização exclusiva do encarregado por qualquer incidente no contexto do tratamento de dados pessoais.",
            "eliminação da necessidade de documentação interna dos tratamentos no contexto do tratamento de dados pessoais.",
            "transferência automática de responsabilidade ao fornecedor de tecnologia no contexto do tratamento de dados pessoais."
        ],
        "correta": 1,
        "explicacao": "A LGPD exige não apenas cumprir, mas ser capaz de demonstrar o cumprimento e a eficácia das medidas adotadas.",
        "feedbackAcerto": "Correto. Governança e evidências de conformidade fazem parte da prestação de contas.",
        "feedbackErro": "O erro é reduzir conformidade a declaração genérica ou concentrar toda responsabilidade em uma pessoa.",
        "dicaBanca": "Accountability também aparece dentro da própria LGPD."
    },
    {
        "pergunta": "Sobre consentimento na LGPD, assinale a alternativa correta:",
        "alternativas": [
            "é obrigatório para qualquer tratamento de dados pessoais pelo Poder Público.",
            "é uma das hipóteses legais de tratamento, mas não é a única.",
            "dispensa a observância dos princípios de finalidade e necessidade.",
            "autoriza tratamento para qualquer finalidade futura não informada.",
            "é sempre a base mais adequada para todo tratamento escolar."
        ],
        "correta": 1,
        "explicacao": "A LGPD prevê diversas bases legais no art. 7º e, para dados sensíveis, no art. 11.",
        "feedbackAcerto": "Correto. Consentimento é importante, mas a lei não se resume a ele.",
        "feedbackErro": "A pegadinha 'LGPD = consentimento' é uma das mais frequentes e está errada.",
        "dicaBanca": "Sempre identifique a base legal adequada; não presuma consentimento."
    },
    {
        "pergunta": "O tratamento de dados pessoais pode ocorrer para cumprimento de obrigação legal ou regulatória:",
        "alternativas": [
            "exclusivamente por determinação judicial.",
            "somente depois de autorização escrita do titular.",
            "apenas se os dados não forem sensíveis.",
            "somente em instituições privadas.",
            "independentemente de consentimento, quando presentes os requisitos legais."
        ],
        "correta": 4,
        "explicacao": "O cumprimento de obrigação legal ou regulatória é hipótese autônoma de tratamento prevista na LGPD.",
        "feedbackAcerto": "Correto. Quando a base legal é essa, consentimento não é requisito adicional automático.",
        "feedbackErro": "O erro é tratar consentimento como requisito universal.",
        "dicaBanca": "Base legal e consentimento não são sinônimos."
    },
    {
        "pergunta": "No Poder Público, o tratamento de dados deve ocorrer:",
        "alternativas": [
            "com liberdade para utilizar os dados em qualquer finalidade administrativa.",
            "somente mediante consentimento específico de cada cidadão.",
            "apenas quando o dado já estiver publicado na internet.",
            "sem necessidade de informar hipóteses de tratamento em seus veículos de comunicação.",
            "para atendimento de finalidade pública, persecução do interesse público e execução de competências ou atribuições legais."
        ],
        "correta": 4,
        "explicacao": "O art. 23 estabelece parâmetros específicos para o tratamento pelo Poder Público.",
        "feedbackAcerto": "Correto. O tratamento público deve estar vinculado a finalidade e competência legítimas.",
        "feedbackErro": "O erro é supor liberdade genérica de uso ou consentimento obrigatório em toda atividade estatal.",
        "dicaBanca": "No setor público, finalidade pública não significa uso ilimitado."
    },
    {
        "pergunta": "Em regra, dado sobre deficiência ou condição de saúde de estudante é:",
        "alternativas": [
            "informação pública obrigatória.",
            "dado anônimo por natureza.",
            "dado exclusivamente administrativo.",
            "dado pessoal sensível.",
            "dado de pessoa jurídica."
        ],
        "correta": 3,
        "explicacao": "Dados de saúde são classificados pela LGPD como dados pessoais sensíveis.",
        "feedbackAcerto": "Correto. Informações de saúde exigem atenção reforçada no tratamento.",
        "feedbackErro": "O erro é considerar que a escola pode tratar a informação como simples dado administrativo sem proteção especial.",
        "dicaBanca": "Saúde = dado sensível."
    },
    {
        "pergunta": "O tratamento de dados pessoais sensíveis:",
        "alternativas": [
            "dispensa os princípios gerais do art. 6º no contexto do tratamento de dados pessoais.",
            "é proibido em qualquer hipótese sem consentimento escrito no contexto do tratamento de dados pessoais.",
            "pode ocorrer livremente se o órgão for público no contexto do tratamento de dados pessoais.",
            "depende de hipótese legal específica prevista no art. 11, não necessariamente de consentimento em todos os casos.",
            "somente pode ser realizado por profissional de saúde no contexto do tratamento de dados pessoais."
        ],
        "correta": 3,
        "explicacao": "O art. 11 estabelece hipóteses próprias para dados sensíveis, algumas com e outras sem consentimento.",
        "feedbackAcerto": "Correto. A categoria sensível aumenta o cuidado, mas não significa proibição absoluta sem consentimento.",
        "feedbackErro": "O erro é aplicar regra universal de consentimento ou excluir os princípios gerais.",
        "dicaBanca": "Dados sensíveis têm bases específicas, não uma única base."
    },
    {
        "pergunta": "Quanto aos dados de crianças e adolescentes, a LGPD determina que o tratamento:",
        "alternativas": [
            "dependa sempre e exclusivamente de consentimento dos pais no contexto do tratamento de dados pessoais.",
            "seja realizado em seu melhor interesse, nos termos da lei e da legislação pertinente.",
            "seja proibido quando envolver dado sensível no contexto do tratamento de dados pessoais.",
            "seja livre em ambiente escolar por existir finalidade educacional.",
            "dispense transparência para evitar preocupação dos responsáveis no contexto do tratamento de dados pessoais."
        ],
        "correta": 1,
        "explicacao": "O art. 14 estabelece o melhor interesse como requisito central no tratamento de dados de crianças e adolescentes.",
        "feedbackAcerto": "Correto. O melhor interesse deve prevalecer na análise concreta.",
        "feedbackErro": "O erro é afirmar consentimento como única base possível ou considerar ambiente escolar zona livre da LGPD.",
        "dicaBanca": "Melhor interesse é palavra-chave para crianças e adolescentes."
    },
    {
        "pergunta": "Segundo o entendimento da ANPD consolidado no Enunciado nº 1/2023, dados de crianças e adolescentes:",
        "alternativas": [
            "podem ser tratados com bases dos arts. 7º ou 11, desde que observado e prevalente o melhor interesse.",
            "somente podem ser tratados mediante consentimento específico de um dos pais.",
            "não podem ser tratados com base em obrigação legal no contexto do tratamento de dados pessoais.",
            "somente podem ser utilizados por órgãos públicos no contexto do tratamento de dados pessoais.",
            "não podem integrar sistemas escolares digitais no contexto do tratamento de dados pessoais."
        ],
        "correta": 0,
        "explicacao": "A ANPD esclareceu que as bases legais dos arts. 7º e 11 podem ser utilizadas, com observância prevalente do melhor interesse.",
        "feedbackAcerto": "Correto. O entendimento evita reduzir todo tratamento de crianças ao consentimento.",
        "feedbackErro": "O erro é afirmar que consentimento parental é a única base legal possível.",
        "dicaBanca": "Atualização importante: melhor interesse + bases dos arts. 7º/11."
    },
    {
        "pergunta": "Uma escola deseja publicar em rede social foto identificável de estudante. Antes da publicação, deve:",
        "alternativas": [
            "avaliar finalidade, base legal aplicável, regras institucionais e proteção do melhor interesse da criança ou adolescente.",
            "publicar livremente porque a atividade ocorreu em espaço público escolar.",
            "considerar que a matrícula autoriza automaticamente qualquer uso de imagem.",
            "divulgar desde que não mencione o nome completo do estudante.",
            "entender que imagem não constitui dado pessoal."
        ],
        "correta": 0,
        "explicacao": "Imagem identificável é dado pessoal e seu uso deve possuir fundamento, finalidade e cuidados compatíveis com a idade do titular.",
        "feedbackAcerto": "Correto. A matrícula não cria autorização genérica e ilimitada para publicidade em redes sociais.",
        "feedbackErro": "O erro é imaginar que retirar o nome elimina identificação ou que evento escolar torna a imagem livre.",
        "dicaBanca": "Imagem de estudante também é dado pessoal."
    },
    {
        "pergunta": "Em formulário escolar, solicitar informação sem qualquer relação com o serviço oferecido pode contrariar principalmente o princípio da:",
        "alternativas": [
            "necessidade.",
            "prevenção.",
            "qualidade dos dados.",
            "livre acesso.",
            "não discriminação."
        ],
        "correta": 0,
        "explicacao": "O princípio da necessidade limita a coleta ao mínimo necessário para a finalidade.",
        "feedbackAcerto": "Correto. Se a escola não consegue justificar por que precisa da informação, a coleta deve ser revista.",
        "feedbackErro": "O erro é escolher princípio verdadeiro, mas menos diretamente ligado ao excesso de coleta.",
        "dicaBanca": "Questão típica: dado excessivo → necessidade."
    },
    {
        "pergunta": "Manter em sistema informação antiga e incorreta sobre necessidade de apoio de um estudante pode violar especialmente o princípio da:",
        "alternativas": [
            "livre acesso às informações do tratamento.",
            "finalidade definida para o uso dos registros.",
            "qualidade dos dados mantidos pelo controlador.",
            "prevenção de danos no tratamento de informações.",
            "transparência sobre as operações realizadas."
        ],
        "correta": 2,
        "explicacao": "A qualidade dos dados exige exatidão, clareza, relevância e atualização.",
        "feedbackAcerto": "Correto. Informação desatualizada pode gerar decisões inadequadas sobre o estudante.",
        "feedbackErro": "O erro é focar apenas na coleta; aqui o problema é a qualidade da informação mantida.",
        "dicaBanca": "Dado desatualizado → qualidade."
    },
    {
        "pergunta": "Um servidor envia planilha com dados de estudantes para grupo pessoal de mensagens sem necessidade. A situação envolve risco especialmente aos princípios de:",
        "alternativas": [
            "consentimento e universalidade.",
            "livre acesso e transparência.",
            "qualidade e adequação apenas.",
            "publicidade e eficiência.",
            "segurança e necessidade."
        ],
        "correta": 4,
        "explicacao": "O envio amplia exposição e utiliza canal inadequado, além de poder envolver dados além do necessário.",
        "feedbackAcerto": "Correto. A combinação mais direta é segurança e necessidade.",
        "feedbackErro": "O erro é confundir transparência com compartilhamento informal.",
        "dicaBanca": "Canal inadequado + dados excessivos = segurança + necessidade."
    },
    {
        "pergunta": "Compartilhar senha pessoal de sistema escolar com colega:",
        "alternativas": [
            "é recomendado para evitar demora no atendimento.",
            "é permitido se o colega tiver o mesmo cargo.",
            "é permitido quando houver finalidade pedagógica.",
            "é inadequado, pois compromete segurança e rastreabilidade dos acessos.",
            "é permitido desde que a senha seja alterada depois."
        ],
        "correta": 3,
        "explicacao": "Credenciais individuais são mecanismo de segurança e responsabilização.",
        "feedbackAcerto": "Correto. A necessidade de acesso do colega deve ser resolvida pelo procedimento institucional adequado.",
        "feedbackErro": "O erro é considerar finalidade legítima suficiente para burlar controle de acesso.",
        "dicaBanca": "Senha é pessoal; necessidade de acesso deve gerar autorização própria."
    },
    {
        "pergunta": "Um relatório impresso com dados sensíveis é esquecido em local aberto ao público. A conduta adequada é:",
        "alternativas": [
            "deixá-lo no local para não assumir responsabilidade sobre material de outro setor.",
            "proteger o documento e encaminhá-lo imediatamente ao fluxo institucional responsável.",
            "fotografá-lo para registrar o ocorrido antes de devolvê-lo.",
            "ler todo o conteúdo para identificar o titular.",
            "entregá-lo a qualquer servidor que esteja próximo."
        ],
        "correta": 1,
        "explicacao": "A proteção de dados também alcança documentos físicos e exige prevenção de acessos indevidos.",
        "feedbackAcerto": "Correto. A resposta deve reduzir a exposição e levar o documento ao responsável.",
        "feedbackErro": "O erro é produzir nova cópia, ampliar acesso ou ignorar o risco.",
        "dicaBanca": "LGPD não é apenas segurança digital."
    },
    {
        "pergunta": "O titular pode solicitar ao controlador, nos termos da LGPD:",
        "alternativas": [
            "confirmação da existência de tratamento e acesso aos próprios dados.",
            "acesso irrestrito aos dados pessoais de outras pessoas.",
            "exclusão imediata de qualquer dado mesmo quando houver obrigação legal de conservação.",
            "alteração de informação verdadeira para adequá-la à sua preferência.",
            "divulgação pública de todos os registros do órgão."
        ],
        "correta": 0,
        "explicacao": "O art. 18 assegura, entre outros direitos, confirmação do tratamento e acesso aos dados.",
        "feedbackAcerto": "Correto. Os direitos do titular possuem limites e não eliminam deveres legais do controlador.",
        "feedbackErro": "O erro é transformar direitos sobre os próprios dados em acesso a terceiros ou exclusão absoluta.",
        "dicaBanca": "Direitos do titular não são ilimitados."
    },
    {
        "pergunta": "Entre os direitos do titular está:",
        "alternativas": [
            "acesso às credenciais internas dos servidores que consultaram o sistema.",
            "modificação de dado correto apenas por conveniência pessoal.",
            "remoção de qualquer registro público obrigatório.",
            "impedimento de toda operação realizada por obrigação legal.",
            "correção de dados incompletos, inexatos ou desatualizados."
        ],
        "correta": 4,
        "explicacao": "A LGPD assegura correção de dados incompletos, inexatos ou desatualizados.",
        "feedbackAcerto": "Correto. Esse direito dialoga diretamente com o princípio da qualidade.",
        "feedbackErro": "O erro é transformar correção em direito de alterar informação verdadeira ou afastar obrigações legais.",
        "dicaBanca": "Correção = incompleto, inexato ou desatualizado."
    },
    {
        "pergunta": "Sobre eliminação de dados pessoais, é correto afirmar que:",
        "alternativas": [
            "somente pode ocorrer mediante decisão judicial no contexto do tratamento de dados pessoais.",
            "deve ocorrer sempre que o titular pedir, sem exceção no contexto do tratamento de dados pessoais.",
            "é proibida para qualquer órgão público no contexto do tratamento de dados pessoais.",
            "não é absoluta, pois a LGPD admite conservação em hipóteses legais mesmo após o término do tratamento.",
            "depende de autorização da ANPD em cada caso no contexto do tratamento de dados pessoais."
        ],
        "correta": 3,
        "explicacao": "A LGPD prevê hipóteses de conservação mesmo após o término do tratamento, como cumprimento de obrigação legal ou regulatória.",
        "feedbackAcerto": "Correto. O direito à eliminação e o término do tratamento devem ser analisados junto às hipóteses legais de conservação.",
        "feedbackErro": "O erro é imaginar exclusão absoluta a qualquer pedido.",
        "dicaBanca": "Pedido de eliminação não apaga obrigação legal de guarda."
    },
    {
        "pergunta": "A portabilidade de dados pessoais:",
        "alternativas": [
            "depende de decisão judicial no contexto do tratamento de dados pessoais.",
            "permite receber dados pessoais de terceiros armazenados pelo mesmo controlador.",
            "é exclusiva de dados bancários e financeiros no contexto do tratamento de dados pessoais.",
            "substitui o direito de acesso no contexto do tratamento de dados pessoais.",
            "é um dos direitos previstos na LGPD, observadas regulamentação e segredos comercial e industrial."
        ],
        "correta": 4,
        "explicacao": "A portabilidade integra o rol de direitos do titular do art. 18.",
        "feedbackAcerto": "Correto. Ela possui condições e regulamentação própria.",
        "feedbackErro": "O erro é limitar o direito a um setor ou confundi-lo com acesso a dados de terceiros.",
        "dicaBanca": "Portabilidade aparece expressamente no art. 18."
    },
    {
        "pergunta": "O titular tem direito de obter informação sobre:",
        "alternativas": [
            "entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados.",
            "qualquer dado mantido por terceiros sem relação com ele.",
            "senhas e mecanismos internos de segurança do controlador no contexto do tratamento de dados pessoais.",
            "segredos comerciais necessários ao funcionamento do sistema no contexto do tratamento de dados pessoais.",
            "opiniões pessoais dos servidores sobre seu cadastro no contexto do tratamento de dados pessoais."
        ],
        "correta": 0,
        "explicacao": "O art. 18 inclui informação sobre entidades com as quais houve uso compartilhado.",
        "feedbackAcerto": "Correto. Transparência sobre compartilhamento integra os direitos do titular.",
        "feedbackErro": "O erro é confundir direito à informação com acesso a segredos de segurança ou dados de terceiros.",
        "dicaBanca": "Compartilhamento deve ser rastreável e transparente ao titular."
    },
    {
        "pergunta": "Em relação à revogação do consentimento:",
        "alternativas": [
            "depende de autorização judicial no contexto do tratamento de dados pessoais.",
            "é proibida depois que o tratamento começa no contexto do tratamento de dados pessoais.",
            "pode ser realizada a qualquer momento mediante manifestação expressa do titular, por procedimento gratuito e facilitado.",
            "elimina automaticamente todos os dados, inclusive os que devam ser conservados por obrigação legal.",
            "somente pode ocorrer uma vez por ano no contexto do tratamento de dados pessoais."
        ],
        "correta": 2,
        "explicacao": "A LGPD prevê revogação do consentimento por procedimento gratuito e facilitado.",
        "feedbackAcerto": "Correto. Revogar consentimento não significa necessariamente eliminar toda informação cuja conservação tenha outra base legal.",
        "feedbackErro": "O erro é confundir revogação com apagamento absoluto.",
        "dicaBanca": "Consentimento deve ser tão revogável quanto foi concedido."
    },
    {
        "pergunta": "O uso compartilhado de dados pelo Poder Público deve:",
        "alternativas": [
            "atender a finalidades específicas de execução de políticas públicas e atribuição legal, observados os princípios da LGPD.",
            "ser livre sempre que ocorrer entre dois órgãos públicos no contexto do tratamento de dados pessoais.",
            "dispensar análise de necessidade quando houver interesse administrativo no contexto do tratamento de dados pessoais.",
            "ocorrer preferencialmente por grupos informais para acelerar o serviço no contexto do tratamento de dados pessoais.",
            "permitir transferência para qualquer empresa privada que preste serviço ao Município."
        ],
        "correta": 0,
        "explicacao": "O compartilhamento público não é automaticamente livre; exige finalidade, competência e observância da LGPD.",
        "feedbackAcerto": "Correto. Ser órgão público não elimina os princípios e requisitos de proteção de dados.",
        "feedbackErro": "O erro é presumir autorização genérica para circular bases entre órgãos ou particulares.",
        "dicaBanca": "Compartilhamento entre órgãos também precisa de fundamento."
    },
    {
        "pergunta": "A transferência de dados pessoais pelo Poder Público a entidade privada:",
        "alternativas": [
            "depende exclusivamente do consentimento de todos os titulares.",
            "é sempre livre quando a entidade possuir contrato com o Município.",
            "é proibida em qualquer circunstância.",
            "está sujeita às hipóteses e requisitos legais; não é autorizada genericamente pelo simples interesse administrativo.",
            "pode ocorrer para qualquer finalidade se os dados forem escolares."
        ],
        "correta": 3,
        "explicacao": "A LGPD estabelece regras próprias para comunicação e transferência pelo Poder Público, com hipóteses legais específicas.",
        "feedbackAcerto": "Correto. Contrato ou conveniência não criam autorização irrestrita.",
        "feedbackErro": "O erro está nos absolutos: 'sempre livre', 'sempre proibida' ou 'sempre por consentimento'.",
        "dicaBanca": "Relação público-privada exige atenção redobrada à finalidade."
    },
    {
        "pergunta": "Medidas de segurança previstas na LGPD devem ser observadas:",
        "alternativas": [
            "somente depois que ocorrer incidente no contexto do tratamento de dados pessoais.",
            "desde a fase de concepção do produto ou serviço até sua execução.",
            "apenas por empresas privadas de tecnologia no contexto do tratamento de dados pessoais.",
            "exclusivamente no armazenamento final dos dados no contexto do tratamento de dados pessoais.",
            "somente quando houver dados sensíveis no contexto do tratamento de dados pessoais."
        ],
        "correta": 1,
        "explicacao": "O art. 46 prevê segurança desde a concepção até a execução do produto ou serviço.",
        "feedbackAcerto": "Correto. A proteção deve ser incorporada desde o planejamento.",
        "feedbackErro": "O erro é tratar segurança como resposta posterior ou restrita a um tipo de agente.",
        "dicaBanca": "Segurança desde a concepção aproxima-se do conceito de privacy by design."
    },
    {
        "pergunta": "Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, o controlador deve:",
        "alternativas": [
            "comunicar à ANPD e ao titular, nos termos e prazos definidos pela regulamentação aplicável.",
            "aguardar reclamação do titular antes de tomar qualquer providência.",
            "comunicar apenas à empresa de tecnologia contratada.",
            "publicar imediatamente todos os dados envolvidos para demonstrar transparência.",
            "eliminar os registros do incidente para reduzir exposição."
        ],
        "correta": 0,
        "explicacao": "O art. 48 estabelece dever de comunicação de incidentes relevantes à Autoridade Nacional e ao titular.",
        "feedbackAcerto": "Correto. A comunicação integra a resposta institucional ao incidente.",
        "feedbackErro": "O erro é ocultar o evento, esperar reclamação ou ampliar a exposição.",
        "dicaBanca": "Incidente relevante exige resposta institucional e comunicação adequada."
    },
    {
        "pergunta": "Após enviar por engano dado sensível de estudante ao destinatário errado, o servidor deve:",
        "alternativas": [
            "pedir informalmente ao destinatário que ignore e não contar à escola.",
            "apagar a mensagem do próprio aparelho e considerar a questão encerrada.",
            "comunicar imediatamente o incidente pelo fluxo institucional para contenção e avaliação.",
            "aguardar para saber se haverá uso indevido antes de comunicar.",
            "enviar nova mensagem com outros dados para explicar o erro."
        ],
        "correta": 2,
        "explicacao": "Incidentes devem ser identificados, contidos, registrados e avaliados conforme a política institucional e a LGPD.",
        "feedbackAcerto": "Correto. A rapidez da comunicação interna ajuda a reduzir o dano e permite avaliar obrigações posteriores.",
        "feedbackErro": "O erro é ocultar o incidente ou criar nova exposição.",
        "dicaBanca": "Erro humano também pode ser incidente de segurança."
    },
    {
        "pergunta": "A Autoridade Nacional de Proteção de Dados — ANPD — possui, entre suas funções:",
        "alternativas": [
            "autorizar previamente cada formulário utilizado por órgãos municipais.",
            "administrar diretamente os bancos de dados de todas as escolas públicas.",
            "zelar pela proteção de dados pessoais e fiscalizar o cumprimento da LGPD.",
            "substituir os controladores nas decisões sobre finalidade do tratamento.",
            "emitir laudos individuais sobre dados de estudantes."
        ],
        "correta": 2,
        "explicacao": "A ANPD exerce funções normativas, orientativas e fiscalizatórias previstas na LGPD.",
        "feedbackAcerto": "Correto. A Autoridade não administra diretamente bases de cada órgão.",
        "feedbackErro": "O erro é transformar a ANPD em gestora operacional dos sistemas públicos.",
        "dicaBanca": "ANPD regula e fiscaliza; não opera a base de cada escola."
    },
    {
        "pergunta": "Dados tornados manifestamente públicos pelo próprio titular:",
        "alternativas": [
            "deixam definitivamente de ser protegidos pela LGPD no contexto do tratamento de dados pessoais.",
            "continuam sujeitos aos princípios e aos direitos previstos na LGPD nas operações de tratamento aplicáveis.",
            "podem ser utilizados para qualquer finalidade sem análise no contexto do tratamento de dados pessoais.",
            "tornam-se automaticamente dados anonimizados no contexto do tratamento de dados pessoais.",
            "não exigem nenhuma medida de segurança no contexto do tratamento de dados pessoais."
        ],
        "correta": 1,
        "explicacao": "A publicidade prévia não significa perda total da proteção jurídica do dado pessoal.",
        "feedbackAcerto": "Correto. O tratamento posterior continua submetido a princípios e requisitos aplicáveis.",
        "feedbackErro": "O erro é adotar a ideia de que 'está na internet, então pode tudo'.",
        "dicaBanca": "Dado público não significa dado sem proteção."
    },
    {
        "pergunta": "Uma lista de estudantes com nome e informação de deficiência é colocada em mural acessível a toda a escola. A principal preocupação é:",
        "alternativas": [
            "ausência de consentimento para qualquer tratamento administrativo.",
            "exposição desnecessária de dado pessoal sensível, contrariando finalidade, necessidade e segurança.",
            "impossibilidade de manter registros de estudantes com deficiência.",
            "proibição de a escola conhecer necessidades de apoio.",
            "falta de publicação do CPF junto ao nome."
        ],
        "correta": 1,
        "explicacao": "A escola pode precisar tratar a informação para apoio educacional, mas divulgação ampla exige fundamento próprio e respeito à minimização.",
        "feedbackAcerto": "Correto. O problema não é possuir o dado, mas expô-lo além de quem precisa conhecê-lo.",
        "feedbackErro": "O erro é confundir tratamento necessário com divulgação irrestrita.",
        "dicaBanca": "Necessidade também limita quem precisa ver o dado."
    },
    {
        "pergunta": "Uma escola adota aplicativo de terceiros para comunicação com responsáveis. Antes de utilizá-lo, deve:",
        "alternativas": [
            "presumir que aplicativo popular já está automaticamente adequado à LGPD.",
            "considerar que a contratação transfere toda responsabilidade ao fornecedor.",
            "permitir ao aplicativo coletar qualquer dado para melhorar o serviço.",
            "dispensar análise porque responsáveis utilizam celular pessoal.",
            "avaliar finalidade, dados tratados, segurança, responsabilidades e compatibilidade do fornecedor com a LGPD."
        ],
        "correta": 4,
        "explicacao": "A contratação de operador ou fornecedor não elimina deveres de governança e avaliação do controlador.",
        "feedbackAcerto": "Correto. O órgão deve conhecer quais dados serão tratados, para quê e sob quais medidas de proteção.",
        "feedbackErro": "O erro é terceirizar também a responsabilidade de governança.",
        "dicaBanca": "Fornecedor contratado não torna a LGPD problema 'do aplicativo'."
    },
    {
        "pergunta": "Se a finalidade puder ser atingida sem divulgar a identidade do estudante, uma boa prática é:",
        "alternativas": [
            "usar CPF no lugar do nome, pois CPF não identifica pessoa.",
            "publicar nome completo para aumentar transparência.",
            "avaliar uso de anonimização ou redução de identificadores, quando tecnicamente adequado.",
            "manter todos os dados por precaução.",
            "substituir nome por iniciais e considerar o dado automaticamente anônimo."
        ],
        "correta": 2,
        "explicacao": "A redução de identificadores e anonimização, quando efetiva e adequada, pode diminuir riscos.",
        "feedbackAcerto": "Correto. A solução deve considerar se a pessoa permanece identificável por outros elementos.",
        "feedbackErro": "O erro é chamar CPF ou iniciais de anonimização automática.",
        "dicaBanca": "Minimização e anonimização são estratégias diferentes."
    },
    {
        "pergunta": "Ao atender pedido de acesso a dados formulado pelo próprio titular ou responsável legítimo, a escola deve:",
        "alternativas": [
            "entregar imediatamente todo o banco de dados da turma.",
            "confirmar identidade e seguir procedimento institucional que proteja também dados de terceiros.",
            "exigir decisão judicial em qualquer caso.",
            "recusar porque dados escolares pertencem exclusivamente à escola.",
            "encaminhar senhas do sistema para que o interessado consulte diretamente."
        ],
        "correta": 1,
        "explicacao": "O atendimento de direitos deve assegurar identidade do solicitante, proteção de terceiros e procedimento seguro.",
        "feedbackAcerto": "Correto. A LGPD garante direitos sem abrir acesso indiscriminado aos sistemas.",
        "feedbackErro": "O erro é negar todo direito ou liberar a base completa.",
        "dicaBanca": "Direito de acesso precisa de autenticação e recorte adequado."
    },
    {
        "pergunta": "Em relação a prontuário ou relatório escolar contendo dados de terceiros, o direito de acesso:",
        "alternativas": [
            "transforma dados de terceiros em informação pública.",
            "autoriza entrega integral de qualquer informação porque o requerente é responsável por um estudante.",
            "permite consulta às anotações de outros alunos envolvidos no mesmo evento.",
            "dispensa análise do conteúdo antes da entrega.",
            "deve ser atendido com os cuidados necessários para preservar direitos e dados de outras pessoas."
        ],
        "correta": 4,
        "explicacao": "Direitos de um titular não eliminam direitos de outros titulares.",
        "feedbackAcerto": "Correto. O atendimento pode exigir ocultação ou separação de informações de terceiros.",
        "feedbackErro": "O erro é imaginar que um conflito ou documento comum elimina a privacidade dos demais.",
        "dicaBanca": "Acesso aos próprios dados ≠ acesso aos dados de todos."
    },
    {
        "pergunta": "A eliminação segura de documentos físicos com dados pessoais deve:",
        "alternativas": [
            "ser feita colocando papéis inteiros em lixeira comum.",
            "impedir recuperação ou acesso indevido ao conteúdo, seguindo política institucional de descarte.",
            "ocorrer somente quando o titular comparecer pessoalmente.",
            "ser substituída por armazenamento permanente.",
            "dispensar registro quando houver dados sensíveis."
        ],
        "correta": 1,
        "explicacao": "O ciclo de tratamento inclui descarte e deve preservar segurança até a eliminação.",
        "feedbackAcerto": "Correto. Jogar documento identificável em lixo comum pode gerar incidente de privacidade.",
        "feedbackErro": "O erro é tratar o descarte como etapa fora da LGPD.",
        "dicaBanca": "Proteção vale até o fim do ciclo de vida do dado."
    },
    {
        "pergunta": "Assinale a alternativa que melhor sintetiza a aplicação da LGPD no ambiente escolar:",
        "alternativas": [
            "obter consentimento para tudo e, depois disso, utilizar os dados livremente.",
            "tratar apenas os dados necessários, para finalidades legítimas, com base legal, segurança e respeito aos direitos dos titulares.",
            "evitar qualquer compartilhamento entre profissionais, mesmo quando necessário ao atendimento.",
            "publicar informações para garantir transparência e reduzir pedidos de acesso.",
            "transferir a proteção de dados integralmente ao setor de tecnologia."
        ],
        "correta": 1,
        "explicacao": "A conformidade exige combinação de finalidade, base legal, minimização, segurança, transparência e direitos.",
        "feedbackAcerto": "Correto. LGPD não é apenas consentimento nem apenas tecnologia.",
        "feedbackErro": "Os distratores transformam um aspecto legítimo em regra absoluta.",
        "dicaBanca": "Questão-síntese: finalidade + necessidade + base legal + segurança + direitos."
    }
];

if (typeof window !== 'undefined') { window.lgpd = lgpd; }
