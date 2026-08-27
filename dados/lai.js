// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// LAI — LEI Nº 12.527/2011 — BANCO REVISADO 2026
// Transparência ativa/passiva, pedidos, prazos, sigilo,
// informação pessoal, SIC, recursos e situações escolares.
// Padrão Instituto Ágata — 50 questões + feedbacks específicos.
// ============================================================

const lai = [
    {
        "pergunta": "A Lei nº 12.527/2011, conhecida como Lei de Acesso à Informação (LAI), tem como diretriz:",
        "alternativas": [
            "o sigilo como regra para documentos administrativos.",
            "a publicidade como preceito geral e o sigilo como exceção.",
            "a divulgação apenas mediante ordem judicial.",
            "o acesso restrito aos cidadãos diretamente interessados.",
            "a publicidade somente após autorização da autoridade máxima."
        ],
        "correta": 1,
        "explicacao": "A LAI estabelece a publicidade como regra e o sigilo como exceção.",
        "feedbackAcerto": "Correto. Essa é uma das diretrizes centrais da LAI.",
        "feedbackErro": "A pegadinha é inverter a lógica da lei: o sigilo não é a regra geral.",
        "dicaBanca": "Memorize: publicidade é regra; sigilo é exceção."
    },
    {
        "pergunta": "Para os efeitos da LAI, informação é:",
        "alternativas": [
            "dados, processados ou não, que podem ser utilizados para produção e transmissão de conhecimento, contidos em qualquer meio, suporte ou formato.",
            "apenas documento escrito e assinado por autoridade pública no contexto do acesso à informação pública.",
            "somente conteúdo armazenado em sistema eletrônico oficial no contexto do acesso à informação pública.",
            "exclusivamente dado já publicado em portal de transparência no contexto do acesso à informação pública.",
            "apenas informação produzida após a entrada em vigor da lei no contexto do acesso à informação pública."
        ],
        "correta": 0,
        "explicacao": "A definição legal é ampla e independe do meio, suporte ou formato.",
        "feedbackAcerto": "Correto. A LAI não limita informação a papel ou sistema eletrônico.",
        "feedbackErro": "O erro é restringir o conceito a determinado suporte ou momento de produção.",
        "dicaBanca": "Conceitos do art. 4º podem aparecer literalmente na prova."
    },
    {
        "pergunta": "Informação pessoal, segundo a LAI, é aquela relacionada:",
        "alternativas": [
            "exclusivamente a empresas privadas contratadas pelo Estado.",
            "à pessoa natural identificada ou identificável.",
            "somente a agentes públicos ocupantes de cargo efetivo.",
            "a qualquer órgão público, ainda que sem relação com pessoa natural.",
            "apenas a dados bancários protegidos por sigilo."
        ],
        "correta": 1,
        "explicacao": "A LAI define informação pessoal como relacionada à pessoa natural identificada ou identificável.",
        "feedbackAcerto": "Correto. O conceito guarda relação direta com a proteção da intimidade e da vida privada.",
        "feedbackErro": "O erro é limitar informação pessoal a uma categoria específica de pessoa ou dado.",
        "dicaBanca": "Pessoa natural identificada ou identificável é expressão-chave."
    },
    {
        "pergunta": "A transparência ativa ocorre quando o órgão público:",
        "alternativas": [
            "fornece informação somente após recurso administrativo.",
            "responde a pedido individual apresentado pelo cidadão.",
            "divulga informações de interesse coletivo independentemente de solicitação.",
            "divulga apenas documentos classificados como sigilosos.",
            "aguarda ordem judicial para publicar dados institucionais."
        ],
        "correta": 2,
        "explicacao": "Transparência ativa é a divulgação espontânea de informações pelo Poder Público.",
        "feedbackAcerto": "Correto. Não é necessário que alguém apresente pedido de acesso.",
        "feedbackErro": "Se houve requerimento do interessado, o caso se aproxima da transparência passiva.",
        "dicaBanca": "Ativa = órgão divulga sem pedido."
    },
    {
        "pergunta": "A transparência passiva está relacionada:",
        "alternativas": [
            "à classificação de documentos sigilosos.",
            "à publicação espontânea em portal oficial.",
            "à divulgação automática de despesas públicas.",
            "ao atendimento de pedidos de acesso formulados pelos interessados.",
            "à proteção de dados pessoais em arquivos internos."
        ],
        "correta": 3,
        "explicacao": "Transparência passiva corresponde à resposta do Estado a solicitações de acesso.",
        "feedbackAcerto": "Correto. Aqui existe iniciativa do interessado.",
        "feedbackErro": "O erro é confundir divulgação espontânea com atendimento a requerimento.",
        "dicaBanca": "Passiva = cidadão pede; Administração responde."
    },
    {
        "pergunta": "O pedido de acesso à informação deve conter:",
        "alternativas": [
            "autorização de advogado ou representante legal.",
            "justificativa detalhada do motivo pelo qual a informação será usada.",
            "comprovação de interesse jurídico direto no assunto.",
            "identificação do requerente e especificação da informação requerida.",
            "declaração de que o pedido não será divulgado a terceiros."
        ],
        "correta": 3,
        "explicacao": "A LAI exige identificação do requerente e especificação da informação, sem exigir demonstração de interesse jurídico.",
        "feedbackAcerto": "Correto. O cidadão deve indicar o que busca, mas não precisa justificar por que deseja a informação.",
        "feedbackErro": "O erro clássico é exigir motivação do pedido.",
        "dicaBanca": "Pedido de LAI não exige explicar o motivo."
    },
    {
        "pergunta": "Quanto aos motivos do pedido de acesso, a LAI estabelece que:",
        "alternativas": [
            "somente são dispensados em pedidos feitos presencialmente.",
            "devem ser informados sempre que o documento for administrativo.",
            "são obrigatórios para pedidos apresentados por pessoa jurídica.",
            "podem ser exigidos livremente pelo servidor responsável.",
            "são vedadas exigências relativas aos motivos determinantes da solicitação."
        ],
        "correta": 4,
        "explicacao": "O art. 10, §3º, proíbe exigir os motivos determinantes do pedido.",
        "feedbackAcerto": "Correto. A Administração não pode condicionar o acesso à explicação da finalidade do requerente.",
        "feedbackErro": "O erro é criar requisito que a lei expressamente veda.",
        "dicaBanca": "Questão muito cobrada: não se exige motivação."
    },
    {
        "pergunta": "Se a informação solicitada estiver disponível imediatamente, o órgão deve:",
        "alternativas": [
            "autorizar ou conceder o acesso imediato.",
            "aguardar obrigatoriamente vinte dias.",
            "encaminhar o pedido à autoridade máxima.",
            "exigir novo requerimento por escrito.",
            "publicar primeiro a informação no diário oficial."
        ],
        "correta": 0,
        "explicacao": "A LAI determina acesso imediato quando a informação estiver disponível.",
        "feedbackAcerto": "Correto. O prazo de resposta não deve ser usado para atrasar informação já acessível.",
        "feedbackErro": "O erro é tratar o prazo máximo como prazo obrigatório.",
        "dicaBanca": "Disponível agora = acesso imediato."
    },
    {
        "pergunta": "Não sendo possível conceder acesso imediato, o órgão deverá responder ao pedido, em regra, em até:",
        "alternativas": [
            "5 dias.",
            "20 dias.",
            "10 dias.",
            "15 dias.",
            "30 dias."
        ],
        "correta": 1,
        "explicacao": "O art. 11 estabelece prazo de até 20 dias para resposta quando o acesso imediato não for possível.",
        "feedbackAcerto": "Correto. Esse é o prazo ordinário da LAI.",
        "feedbackErro": "O erro é confundir o prazo inicial com sua possível prorrogação.",
        "dicaBanca": "Decore: 20 + 10, com justificativa."
    },
    {
        "pergunta": "O prazo de 20 dias para resposta ao pedido de acesso pode ser prorrogado por:",
        "alternativas": [
            "mais 10 dias, mediante justificativa expressa comunicada ao requerente.",
            "mais 20 dias, independentemente de justificativa.",
            "mais 5 dias, somente por decisão judicial.",
            "mais 30 dias, a critério do servidor responsável.",
            "prazo indeterminado quando houver grande volume de documentos."
        ],
        "correta": 0,
        "explicacao": "A LAI admite prorrogação por mais 10 dias, mediante justificativa expressa.",
        "feedbackAcerto": "Correto. A prorrogação não é automática nem ilimitada.",
        "feedbackErro": "O erro é alterar o prazo ou dispensar a justificativa.",
        "dicaBanca": "Fórmula de prova: 20 dias + 10 dias justificados."
    },
    {
        "pergunta": "Quando o órgão não possuir a informação solicitada, deverá, quando souber:",
        "alternativas": [
            "encaminhar o cidadão obrigatoriamente ao Poder Judiciário no contexto do acesso à informação pública.",
            "negar definitivamente o pedido sem qualquer orientação no contexto do acesso à informação pública.",
            "criar documento novo para responder ao requerente no contexto do acesso à informação pública.",
            "indicar o órgão ou entidade que a detém ou remeter o requerimento, cientificando o interessado.",
            "arquivar o pedido sem comunicação ao requerente no contexto do acesso à informação pública."
        ],
        "correta": 3,
        "explicacao": "A LAI prevê orientação ao interessado ou remessa do pedido quando conhecido o órgão detentor.",
        "feedbackAcerto": "Correto. A Administração deve facilitar o acesso, e não simplesmente encerrar o atendimento.",
        "feedbackErro": "O erro é transformar ausência da informação naquele órgão em negativa sem orientação.",
        "dicaBanca": "Órgão não tem, mas sabe quem tem: indique ou encaminhe."
    },
    {
        "pergunta": "No caso de negativa de acesso, o requerente tem direito a:",
        "alternativas": [
            "ser informado apenas de que o pedido foi indeferido.",
            "receber apenas comunicação verbal sem fundamentação.",
            "conhecer a justificativa somente após decisão judicial.",
            "obter o inteiro teor da decisão de negativa por certidão ou cópia.",
            "ter acesso aos fundamentos apenas se contratar advogado."
        ],
        "correta": 3,
        "explicacao": "A negativa deve ser formalizada de modo que o interessado conheça a decisão e possa exercer recurso.",
        "feedbackAcerto": "Correto. A transparência também alcança a própria decisão de negar acesso.",
        "feedbackErro": "O erro é aceitar negativa informal ou sem possibilidade de conhecimento dos fundamentos.",
        "dicaBanca": "Negativa precisa permitir controle e recurso."
    },
    {
        "pergunta": "Quando apenas parte do documento for sigilosa, a LAI assegura:",
        "alternativas": [
            "destruição da parte sigilosa antes do fornecimento no contexto do acesso à informação pública.",
            "sigilo integral de todo o documento no contexto do acesso à informação pública.",
            "acesso à parte não sigilosa por certidão, extrato ou cópia com ocultação da parte protegida.",
            "acesso integral sempre que existir trecho público no contexto do acesso à informação pública.",
            "acesso apenas após término do prazo de sigilo de toda a informação."
        ],
        "correta": 2,
        "explicacao": "A existência de trecho protegido não impede acesso ao restante do documento.",
        "feedbackAcerto": "Correto. Deve-se preservar a parte sigilosa e liberar a informação acessível.",
        "feedbackErro": "O erro é aplicar sigilo total quando a restrição pode ser separada.",
        "dicaBanca": "Sigilo parcial não transforma documento inteiro em secreto."
    },
    {
        "pergunta": "O serviço de busca e fornecimento da informação é:",
        "alternativas": [
            "sempre sujeito a taxa administrativa no contexto do acesso à informação pública.",
            "gratuito, ressalvado o custo dos serviços e materiais usados na reprodução de documentos.",
            "gratuito apenas para servidores públicos no contexto do acesso à informação pública.",
            "pago sempre que houver mais de dez páginas.",
            "gratuito somente em pedidos eletrônicos no contexto do acesso à informação pública."
        ],
        "correta": 1,
        "explicacao": "A regra é gratuidade, podendo haver cobrança apenas do custo de reprodução.",
        "feedbackAcerto": "Correto. A cobrança não pode funcionar como preço pelo direito de acesso.",
        "feedbackErro": "O erro é criar taxa pelo simples processamento do pedido.",
        "dicaBanca": "Acesso é gratuito; reprodução pode gerar custo."
    },
    {
        "pergunta": "Quem não puder arcar com custos de reprodução sem prejuízo do sustento próprio ou da família:",
        "alternativas": [
            "somente poderá consultar o documento presencialmente.",
            "perde o direito de receber cópia.",
            "deve limitar o pedido a uma página.",
            "precisa obter autorização judicial para isenção.",
            "pode ser isento desses custos nos termos da LAI."
        ],
        "correta": 4,
        "explicacao": "A LAI prevê isenção para quem declarar situação econômica que impeça o pagamento sem prejuízo do sustento.",
        "feedbackAcerto": "Correto. O custo de reprodução não deve inviabilizar o direito de acesso.",
        "feedbackErro": "O erro é transformar dificuldade econômica em barreira ao acesso.",
        "dicaBanca": "Gratuidade e isenção podem aparecer juntas em prova."
    },
    {
        "pergunta": "O acesso à informação compreende, entre outros, o direito de obter:",
        "alternativas": [
            "apenas dados publicados em diário oficial.",
            "somente resumo produzido pelo órgão.",
            "informação primária, íntegra, autêntica e atualizada.",
            "exclusivamente informação sem qualquer dado pessoal.",
            "documentos apenas após encerramento de todo processo administrativo."
        ],
        "correta": 2,
        "explicacao": "O art. 7º inclui o acesso a informação primária, íntegra, autêntica e atualizada.",
        "feedbackAcerto": "Correto. A lei busca qualidade e confiabilidade da informação fornecida.",
        "feedbackErro": "O erro é restringir o direito a resumos ou publicações já existentes.",
        "dicaBanca": "Primária, íntegra, autêntica e atualizada é expressão literal importante."
    },
    {
        "pergunta": "A LAI assegura acesso a informação sobre:",
        "alternativas": [
            "apenas despesas já julgadas pelos tribunais de contas.",
            "atividades exercidas pelos órgãos e entidades, inclusive relativas à sua política, organização e serviços.",
            "somente atos da administração direta federal.",
            "exclusivamente contratos concluídos há mais de cinco anos.",
            "apenas informações previamente solicitadas por órgão de controle."
        ],
        "correta": 1,
        "explicacao": "A lei abrange informações institucionais, organizacionais, financeiras, patrimoniais e de serviços.",
        "feedbackAcerto": "Correto. O direito de acesso possui alcance amplo sobre a atuação pública.",
        "feedbackErro": "O erro é restringir o acesso a um tipo de documento ou esfera específica.",
        "dicaBanca": "LAI alcança organização, políticas, serviços, recursos e resultados."
    },
    {
        "pergunta": "Os órgãos públicos devem divulgar, independentemente de requerimento, informações de interesse coletivo ou geral:",
        "alternativas": [
            "em local de fácil acesso, inclusive por seus sítios oficiais quando aplicável.",
            "apenas em arquivos físicos internos no contexto do acesso à informação pública.",
            "somente após autorização judicial no contexto do acesso à informação pública.",
            "exclusivamente mediante solicitação individual no contexto do acesso à informação pública.",
            "apenas quando não envolver recursos públicos no contexto do acesso à informação pública."
        ],
        "correta": 0,
        "explicacao": "O art. 8º estabelece dever de divulgação ativa de informações de interesse coletivo.",
        "feedbackAcerto": "Correto. A Administração deve promover transparência por iniciativa própria.",
        "feedbackErro": "O erro é condicionar toda divulgação a requerimento.",
        "dicaBanca": "Art. 8º = transparência ativa."
    },
    {
        "pergunta": "Entre as informações que devem integrar a transparência ativa está:",
        "alternativas": [
            "registro das despesas.",
            "prontuário médico nominal de cada servidor.",
            "senha de acesso aos sistemas administrativos.",
            "dados pessoais sensíveis de estudantes.",
            "informação classificada enquanto vigente o sigilo."
        ],
        "correta": 0,
        "explicacao": "A LAI prevê divulgação de registros de despesas, repasses, licitações, contratos e outros dados de interesse coletivo.",
        "feedbackAcerto": "Correto. Despesas públicas integram o núcleo de transparência ativa.",
        "feedbackErro": "O erro é confundir controle de gastos com exposição de dados pessoais ou de segurança.",
        "dicaBanca": "Despesas, licitações e contratos são itens clássicos do art. 8º."
    },
    {
        "pergunta": "Também deve ser divulgado ativamente:",
        "alternativas": [
            "documentos classificados em grau ultrassecreto.",
            "senha funcional dos responsáveis por licitações.",
            "dados pessoais dos familiares dos licitantes.",
            "informação sobre procedimentos licitatórios, editais, resultados e contratos celebrados.",
            "informações pessoais sem relação com o procedimento."
        ],
        "correta": 3,
        "explicacao": "A transparência ativa alcança licitações e contratos, preservadas informações legalmente protegidas.",
        "feedbackAcerto": "Correto. O controle social sobre contratações é objetivo expresso da LAI.",
        "feedbackErro": "O erro é usar transparência para expor credenciais, dados pessoais ou informação classificada.",
        "dicaBanca": "Licitação e contrato aparecem expressamente na transparência ativa."
    },
    {
        "pergunta": "A divulgação ativa deve incluir:",
        "alternativas": [
            "apenas projetos sem execução financeira no contexto do acesso à informação pública.",
            "somente ações já concluídas no contexto do acesso à informação pública.",
            "dados gerais para acompanhamento de programas, ações, projetos e obras.",
            "exclusivamente programas do governo federal no contexto do acesso à informação pública.",
            "informações apenas quando houver denúncia formal."
        ],
        "correta": 2,
        "explicacao": "A LAI determina divulgação de dados que permitam acompanhar programas, ações, projetos e obras.",
        "feedbackAcerto": "Correto. A transparência deve permitir acompanhamento da execução pública.",
        "feedbackErro": "O erro é limitar o acesso a ações concluídas ou situações excepcionais.",
        "dicaBanca": "Controle social exige acompanhar, não apenas conhecer depois."
    },
    {
        "pergunta": "O Serviço de Informações ao Cidadão — SIC — tem entre suas funções:",
        "alternativas": [
            "classificar automaticamente todo documento produzido pelo órgão.",
            "atender e orientar o público quanto ao acesso a informações.",
            "aplicar sanções disciplinares aos servidores.",
            "substituir a autoridade máxima do órgão.",
            "julgar ações judiciais sobre acesso à informação."
        ],
        "correta": 1,
        "explicacao": "O SIC existe para facilitar a relação entre cidadão e Administração no exercício do direito de acesso.",
        "feedbackAcerto": "Correto. Orientação e atendimento fazem parte de suas funções.",
        "feedbackErro": "O erro é atribuir ao SIC competências de classificação, disciplina ou julgamento judicial.",
        "dicaBanca": "SIC = porta de entrada do cidadão para a LAI."
    },
    {
        "pergunta": "O SIC também deve:",
        "alternativas": [
            "impedir pedidos repetidos de informação no contexto do acesso à informação pública.",
            "autorizar toda contratação pública do órgão no contexto do acesso à informação pública.",
            "publicar dados pessoais de qualquer requerente no contexto do acesso à informação pública.",
            "eliminar documentos após o atendimento no contexto do acesso à informação pública.",
            "informar sobre tramitação de documentos nas unidades e protocolizar requerimentos de acesso."
        ],
        "correta": 4,
        "explicacao": "A LAI atribui ao SIC tarefas práticas de orientação, tramitação e protocolo.",
        "feedbackAcerto": "Correto. O serviço organiza o atendimento ao cidadão.",
        "feedbackErro": "O erro é transformar o SIC em unidade de gestão administrativa geral.",
        "dicaBanca": "Conheça as funções operacionais do SIC."
    },
    {
        "pergunta": "Quanto à identificação do requerente, as exigências:",
        "alternativas": [
            "podem restringir pedidos a eleitores do local.",
            "podem exigir documentação excessiva para evitar pedidos genéricos.",
            "devem incluir justificativa do interesse no documento.",
            "precisam demonstrar vínculo com o Município.",
            "não podem conter requisitos que inviabilizem a solicitação."
        ],
        "correta": 4,
        "explicacao": "A LAI proíbe requisitos de identificação que inviabilizem o direito de acesso.",
        "feedbackAcerto": "Correto. A identificação deve servir ao processamento, não criar barreira indevida.",
        "feedbackErro": "O erro é usar burocracia como filtro para o direito fundamental.",
        "dicaBanca": "Identificação sim; barreira desproporcional, não."
    },
    {
        "pergunta": "A LAI permite que o pedido de acesso seja apresentado:",
        "alternativas": [
            "apenas por advogado constituído no contexto do acesso à informação pública.",
            "somente presencialmente e com firma reconhecida no contexto do acesso à informação pública.",
            "por qualquer meio legítimo, devendo os órgãos viabilizar alternativa de encaminhamento pela internet.",
            "exclusivamente por carta registrada no contexto do acesso à informação pública.",
            "somente mediante formulário impresso oficial no contexto do acesso à informação pública."
        ],
        "correta": 2,
        "explicacao": "A lei busca facilitar o acesso e prevê alternativa de encaminhamento de pedidos pelos sítios oficiais.",
        "feedbackAcerto": "Correto. O exercício do direito não deve depender de formalismo excessivo.",
        "feedbackErro": "O erro é restringir o pedido a uma única forma burocrática.",
        "dicaBanca": "LAI privilegia facilitação do acesso."
    },
    {
        "pergunta": "A classificação de informação quanto ao grau de sigilo pode ocorrer como:",
        "alternativas": [
            "secreta, pessoal ou administrativa.",
            "confidencial, privada ou pública.",
            "restrita, confidencial ou secreta.",
            "reservada, confidencial ou pessoal.",
            "reservada, secreta ou ultrassecreta."
        ],
        "correta": 4,
        "explicacao": "A LAI estabelece três graus de classificação: reservada, secreta e ultrassecreta.",
        "feedbackAcerto": "Correto. São categorias legais específicas.",
        "feedbackErro": "O erro é importar classificações de outros regimes documentais.",
        "dicaBanca": "Decore os três graus: reservada, secreta, ultrassecreta."
    },
    {
        "pergunta": "O prazo máximo de restrição de acesso para informação reservada é de:",
        "alternativas": [
            "5 anos.",
            "10 anos.",
            "15 anos.",
            "20 anos.",
            "25 anos."
        ],
        "correta": 0,
        "explicacao": "A informação reservada pode permanecer restrita por até 5 anos.",
        "feedbackAcerto": "Correto. É o menor prazo entre os três graus da LAI.",
        "feedbackErro": "O erro é confundir os prazos de reservada, secreta e ultrassecreta.",
        "dicaBanca": "Reservada 5; secreta 15; ultrassecreta 25."
    },
    {
        "pergunta": "O prazo máximo de restrição para informação secreta é de:",
        "alternativas": [
            "5 anos.",
            "15 anos.",
            "10 anos.",
            "20 anos.",
            "25 anos."
        ],
        "correta": 1,
        "explicacao": "A informação secreta possui prazo máximo de 15 anos.",
        "feedbackAcerto": "Correto. Esse é o prazo intermediário.",
        "feedbackErro": "O erro é trocar com reservada ou ultrassecreta.",
        "dicaBanca": "Sequência: 5, 15, 25."
    },
    {
        "pergunta": "O prazo máximo de restrição para informação ultrassecreta é de:",
        "alternativas": [
            "25 anos.",
            "5 anos.",
            "10 anos.",
            "15 anos.",
            "20 anos."
        ],
        "correta": 0,
        "explicacao": "A classificação ultrassecreta admite restrição por até 25 anos, ressalvadas regras legais específicas.",
        "feedbackAcerto": "Correto. É o maior prazo ordinário previsto na classificação da LAI.",
        "feedbackErro": "O erro é confundir com os 15 anos da informação secreta.",
        "dicaBanca": "Ultrassecreta = 25 anos."
    },
    {
        "pergunta": "Na classificação do sigilo, deve ser observado:",
        "alternativas": [
            "sempre o grau mais elevado para prevenir divulgação indevida.",
            "o critério menos restritivo possível, considerando gravidade do risco e prazo máximo de restrição.",
            "o interesse político da autoridade responsável.",
            "a repercussão negativa que a divulgação possa gerar ao gestor.",
            "a conveniência de evitar pedidos de acesso."
        ],
        "correta": 1,
        "explicacao": "A LAI exige ponderação e uso do grau menos restritivo compatível com a proteção necessária.",
        "feedbackAcerto": "Correto. Sigilo não deve ser ampliado por conveniência.",
        "feedbackErro": "O erro é tratar classificação como mecanismo de proteção da imagem do gestor.",
        "dicaBanca": "Sigilo precisa ser necessário e proporcional."
    },
    {
        "pergunta": "Informações cuja divulgação possa pôr em risco a defesa e a soberania nacionais podem:",
        "alternativas": [
            "ser classificadas apenas por decisão judicial no contexto do acesso à informação pública.",
            "jamais sofrer restrição de acesso no contexto do acesso à informação pública.",
            "ser classificadas nos termos da LAI quando presentes os requisitos legais.",
            "ser automaticamente eliminadas no contexto do acesso à informação pública.",
            "ser mantidas em sigilo sem prazo ou classificação."
        ],
        "correta": 2,
        "explicacao": "A LAI prevê hipóteses de informações imprescindíveis à segurança da sociedade e do Estado que podem ser classificadas.",
        "feedbackAcerto": "Correto. A restrição exige enquadramento e procedimento legal.",
        "feedbackErro": "O erro é escolher entre transparência absoluta e sigilo ilimitado.",
        "dicaBanca": "Classificação exige hipótese legal + autoridade competente + prazo."
    },
    {
        "pergunta": "A classificação não pode ser usada para:",
        "alternativas": [
            "proteger informação cuja divulgação gere risco legalmente reconhecido.",
            "ocultar ilegalidade ou evitar constrangimento meramente político.",
            "resguardar segurança da sociedade e do Estado nas hipóteses legais.",
            "preservar informação durante prazo de sigilo regularmente fixado.",
            "proteger interesse juridicamente previsto pela LAI."
        ],
        "correta": 1,
        "explicacao": "O sigilo não é instrumento para esconder irregularidades ou proteger reputação política.",
        "feedbackAcerto": "Correto. A finalidade da classificação é proteger riscos previstos em lei.",
        "feedbackErro": "O erro é aceitar sigilo como ferramenta de conveniência administrativa.",
        "dicaBanca": "Sigilo não serve para esconder erro."
    },
    {
        "pergunta": "Informações ou documentos que versem sobre condutas que impliquem violação de direitos humanos praticada por agentes públicos:",
        "alternativas": [
            "não podem ser objeto de restrição de acesso.",
            "devem ser sempre classificados como ultrassecretos.",
            "podem ficar sigilosos por até 100 anos.",
            "dependem de autorização do agente envolvido para divulgação.",
            "somente podem ser acessados por familiares das vítimas."
        ],
        "correta": 0,
        "explicacao": "A LAI impede restrição de acesso a informações sobre violações de direitos humanos praticadas por agentes públicos ou a mando de autoridades.",
        "feedbackAcerto": "Correto. A lei estabelece proteção especial ao acesso nesse caso.",
        "feedbackErro": "O erro é aplicar sigilo justamente onde a LAI o afasta.",
        "dicaBanca": "Direitos humanos é exceção importante à restrição."
    },
    {
        "pergunta": "O acesso à informação necessária à tutela judicial ou administrativa de direitos fundamentais:",
        "alternativas": [
            "não pode ser negado.",
            "depende sempre de classificação reservada.",
            "é permitido apenas por decisão judicial.",
            "pode ser recusado por conveniência administrativa.",
            "exige demonstração de interesse econômico."
        ],
        "correta": 0,
        "explicacao": "A LAI veda negar acesso quando a informação for necessária à tutela judicial ou administrativa de direitos fundamentais.",
        "feedbackAcerto": "Correto. A proteção de direitos fundamentais limita o sigilo.",
        "feedbackErro": "O erro é criar obstáculos que a própria lei afasta.",
        "dicaBanca": "Direitos fundamentais têm proteção expressa na LAI."
    },
    {
        "pergunta": "Informações pessoais relativas à intimidade, vida privada, honra e imagem têm acesso restrito, em regra, pelo prazo máximo de:",
        "alternativas": [
            "25 anos após a produção.",
            "5 anos a contar do pedido.",
            "15 anos a partir da classificação.",
            "100 anos a contar da data de sua produção.",
            "prazo indeterminado sem previsão legal."
        ],
        "correta": 3,
        "explicacao": "O art. 31 prevê restrição de acesso por até 100 anos para informações pessoais dessa natureza.",
        "feedbackAcerto": "Correto. Esse prazo não se confunde com os graus de sigilo 5/15/25.",
        "feedbackErro": "O erro é aplicar à informação pessoal os prazos de classificação de segurança.",
        "dicaBanca": "Informação pessoal: até 100 anos."
    },
    {
        "pergunta": "A restrição de acesso a informação pessoal:",
        "alternativas": [
            "transforma automaticamente a informação pessoal em ultrassecreta e impede qualquer hipótese legal de acesso por terceiros.",
            "é absoluta durante cem anos e não admite exceções relacionadas à apuração de irregularidades administrativas.",
            "impede qualquer acesso por agentes públicos, mesmo quando necessário ao exercício regular de suas atribuições.",
            "não pode ser invocada para prejudicar processo de apuração de irregularidades em que o titular esteja envolvido, nem ações de recuperação de fatos históricos de maior relevância.",
            "elimina a possibilidade de consentimento do titular e impede divulgação mesmo nas hipóteses expressamente autorizadas pela lei."
        ],
        "correta": 3,
        "explicacao": "A LAI estabelece limites ao uso da proteção de informação pessoal como obstáculo à apuração e à memória histórica relevante.",
        "feedbackAcerto": "Correto. A proteção da privacidade não é instrumento de impunidade.",
        "feedbackErro": "O erro é interpretar o prazo de 100 anos como sigilo absoluto.",
        "dicaBanca": "Informação pessoal tem proteção forte, mas não ilimitada."
    },
    {
        "pergunta": "O consentimento da pessoa a que se referem informações pessoais pode ser dispensado quando necessário, entre outras hipóteses, para:",
        "alternativas": [
            "favorecimento de pessoa conhecida no contexto do acesso à informação pública.",
            "promoção comercial de empresa privada no contexto do acesso à informação pública.",
            "curiosidade de servidores do órgão no contexto do acesso à informação pública.",
            "divulgação em redes sociais institucionais sem finalidade pública.",
            "proteção do interesse público e geral preponderante, nos casos previstos em lei."
        ],
        "correta": 4,
        "explicacao": "A LAI prevê hipóteses legais em que o consentimento não é exigido para acesso a informações pessoais.",
        "feedbackAcerto": "Correto. A dispensa precisa estar ligada às hipóteses legais, não a mera conveniência.",
        "feedbackErro": "O erro é transformar exceção legal em autorização para usos privados ou curiosidade.",
        "dicaBanca": "Proteção da vida, pesquisa e interesse público podem aparecer como hipóteses legais."
    },
    {
        "pergunta": "Servidor que recusa deliberadamente fornecer informação requerida nos termos da LAI, sem fundamento legal:",
        "alternativas": [
            "somente responde se houver dano financeiro ao requerente.",
            "age corretamente porque todo documento público é sigiloso até autorização.",
            "não possui responsabilidade se o pedido vier de pessoa sem vínculo com o órgão.",
            "pode praticar conduta ilícita sujeita às consequências previstas em lei.",
            "pode negar livremente quando considerar o pedido inconveniente."
        ],
        "correta": 3,
        "explicacao": "A LAI prevê responsabilidade por recusa, atraso deliberado ou fornecimento incorreto em determinadas condições.",
        "feedbackAcerto": "Correto. O dever de acesso possui mecanismos de responsabilização.",
        "feedbackErro": "O erro é transformar a decisão sobre acesso em escolha pessoal do servidor.",
        "dicaBanca": "Negativa precisa de fundamento; recusa arbitrária pode gerar responsabilidade."
    },
    {
        "pergunta": "Também pode configurar conduta ilícita na LAI:",
        "alternativas": [
            "orientar o cidadão sobre onde localizar informação pública.",
            "corrigir dado antes de fornecê-lo ao requerente.",
            "fornecer intencionalmente informação incorreta, incompleta ou imprecisa.",
            "proteger trecho legalmente sigiloso de um documento.",
            "encaminhar pedido ao órgão que detém a informação."
        ],
        "correta": 2,
        "explicacao": "A lei responsabiliza comportamentos que sabotem deliberadamente o direito de acesso.",
        "feedbackAcerto": "Correto. Informação deliberadamente falsa ou incompleta viola a finalidade da LAI.",
        "feedbackErro": "O erro é escolher condutas que, ao contrário, facilitam ou protegem legitimamente o acesso.",
        "dicaBanca": "Não basta responder: a informação deve ser correta e íntegra."
    },
    {
        "pergunta": "Destruir ou subtrair informação sob guarda pública com intenção de impedir acesso:",
        "alternativas": [
            "é válido se houver cópia informal com servidor.",
            "é permitido quando o documento não tiver sido solicitado.",
            "pode configurar conduta ilícita nos termos da LAI e de outras normas aplicáveis.",
            "é mera falha administrativa sem repercussão jurídica.",
            "é autorizado quando a informação puder causar crítica ao órgão."
        ],
        "correta": 2,
        "explicacao": "A preservação da informação é condição para efetividade do direito de acesso.",
        "feedbackAcerto": "Correto. Destruição deliberada para impedir acesso é incompatível com a LAI.",
        "feedbackErro": "O erro é admitir eliminação por conveniência ou antes de pedido formal.",
        "dicaBanca": "Gestão documental também protege o direito de acesso."
    },
    {
        "pergunta": "Ao receber pedido sobre documento que contém nome de estudante e dados de saúde, a escola deve:",
        "alternativas": [
            "retirar apenas o nome e considerar sempre resolvido o risco de identificação.",
            "publicar integralmente porque o documento pertence a órgão público.",
            "negar todo o documento sem verificar possibilidade de acesso parcial.",
            "fornecer os dados de saúde se o requerente disser que tem curiosidade acadêmica.",
            "analisar o acesso preservando informações pessoais e sensíveis que não possam ser divulgadas."
        ],
        "correta": 4,
        "explicacao": "A LAI exige conciliar transparência com proteção da intimidade e de dados pessoais, inclusive mediante acesso parcial.",
        "feedbackAcerto": "Correto. Documento público pode conter trechos protegidos.",
        "feedbackErro": "O erro é escolher publicidade total ou sigilo total sem análise do conteúdo.",
        "dicaBanca": "LAI + LGPD: libere o que é público e proteja o que é pessoal."
    },
    {
        "pergunta": "Um cidadão pede quantidade total de estudantes que recebem determinado apoio, sem solicitar nomes. Em regra:",
        "alternativas": [
            "somente os pais dos estudantes podem obter dados estatísticos.",
            "o pedido deve ser negado porque qualquer informação sobre estudantes é pessoal.",
            "a informação estatística pode ser fornecida, desde que não permita identificação indevida dos estudantes.",
            "a escola deve fornecer também os diagnósticos para justificar o número.",
            "a informação precisa ser classificada como reservada."
        ],
        "correta": 2,
        "explicacao": "Dados agregados podem atender à transparência sem expor titulares, desde que não possibilitem reidentificação indevida.",
        "feedbackAcerto": "Correto. A proteção de dados não impede transparência estatística legítima.",
        "feedbackErro": "O erro é transformar privacidade em bloqueio de toda informação coletiva.",
        "dicaBanca": "Quantidade agregada ≠ prontuário individual."
    },
    {
        "pergunta": "Um responsável solicita informações exclusivamente sobre seu filho e apresenta identificação adequada. A escola deve:",
        "alternativas": [
            "negar automaticamente por envolver informação pessoal no contexto do acesso à informação pública.",
            "entregar todos os registros da turma porque o responsável possui interesse escolar.",
            "processar o pedido conforme as regras aplicáveis, verificando legitimidade e protegendo dados de terceiros.",
            "publicar a resposta no portal para garantir igualdade no contexto do acesso à informação pública.",
            "fornecer credenciais do sistema para acesso direto no contexto do acesso à informação pública."
        ],
        "correta": 2,
        "explicacao": "O acesso a informações pessoais deve considerar legitimidade do solicitante e direitos de terceiros.",
        "feedbackAcerto": "Correto. A resposta deve ser individualizada e segura.",
        "feedbackErro": "O erro é negar tudo ou abrir acesso a informações de outras pessoas.",
        "dicaBanca": "Direito de acesso não autoriza acesso ao banco inteiro."
    },
    {
        "pergunta": "Ao fornecer cópia de ocorrência escolar envolvendo vários estudantes, pode ser necessário:",
        "alternativas": [
            "publicar a ocorrência em mural para assegurar publicidade.",
            "divulgar todos os nomes para preservar a integridade do documento.",
            "negar integralmente qualquer acesso ao registro.",
            "ocultar dados pessoais de terceiros que não devam ser disponibilizados ao requerente.",
            "substituir os nomes por CPF dos estudantes."
        ],
        "correta": 3,
        "explicacao": "O acesso parcial permite conciliar direito à informação e privacidade de terceiros.",
        "feedbackAcerto": "Correto. A proteção pode ser feita por tarjamento ou outra técnica adequada.",
        "feedbackErro": "O erro é pensar que integridade documental exige exposição de terceiros.",
        "dicaBanca": "Acesso parcial é ferramenta essencial na LAI."
    },
    {
        "pergunta": "A Administração pode alegar que um pedido 'dá muito trabalho' para simplesmente recusá-lo?",
        "alternativas": [
            "Não, mas deve exigir que o cidadão explique por que precisa da informação.",
            "Sim; volume de trabalho é motivo suficiente para negar qualquer pedido.",
            "Sim; basta o servidor registrar que está ocupado.",
            "Não; eventual dificuldade deve ser tratada conforme a lei, e a negativa precisa ter fundamento jurídico.",
            "Sim; pedidos complexos não estão sujeitos à LAI."
        ],
        "correta": 3,
        "explicacao": "A conveniência administrativa não substitui as hipóteses legais de restrição ou os procedimentos da LAI.",
        "feedbackAcerto": "Correto. O direito de acesso não depende da disponibilidade subjetiva do servidor.",
        "feedbackErro": "O erro é transformar carga de trabalho em exceção genérica à transparência.",
        "dicaBanca": "Dificuldade operacional não cria sigilo."
    },
    {
        "pergunta": "Quando a informação já está disponível ao público em formato acessível, o órgão pode:",
        "alternativas": [
            "retirar a informação do portal antes de responder no contexto do acesso à informação pública.",
            "negar o pedido sem indicar onde está a informação no contexto do acesso à informação pública.",
            "exigir pagamento para revelar o endereço eletrônico no contexto do acesso à informação pública.",
            "obrigar o requerente a comparecer presencialmente no contexto do acesso à informação pública.",
            "informar ao requerente o local e a forma pela qual poderá consultá-la ou obtê-la."
        ],
        "correta": 4,
        "explicacao": "A LAI permite orientar o interessado para a fonte pública já disponível.",
        "feedbackAcerto": "Correto. Isso facilita o acesso e evita reprodução desnecessária.",
        "feedbackErro": "O erro é negar sem orientar ou criar barreiras artificiais.",
        "dicaBanca": "Informação já publicada: indique claramente onde encontrá-la."
    },
    {
        "pergunta": "A gestão transparente da informação pressupõe:",
        "alternativas": [
            "acesso restrito a servidores e órgãos de controle no contexto do acesso à informação pública.",
            "publicidade absoluta sem qualquer hipótese de restrição no contexto do acesso à informação pública.",
            "sigilo preventivo de todo documento até análise individual no contexto do acesso à informação pública.",
            "divulgação apenas de informações favoráveis à Administração no contexto do acesso à informação pública.",
            "amplo acesso e divulgação, com proteção da informação sigilosa e pessoal nos limites legais."
        ],
        "correta": 4,
        "explicacao": "A LAI combina transparência ampla com proteção responsável das exceções legais.",
        "feedbackAcerto": "Correto. Transparência e proteção não são princípios incompatíveis.",
        "feedbackErro": "O erro é escolher extremos de publicidade absoluta ou sigilo generalizado.",
        "dicaBanca": "Boa prova cobra equilíbrio entre acesso e proteção."
    },
    {
        "pergunta": "A cultura de transparência prevista pela LAI busca superar a ideia de que:",
        "alternativas": [
            "informações públicas pertencem à Administração e só podem ser reveladas por favor da autoridade.",
            "o cidadão possui direito de acesso a informações públicas.",
            "a publicidade é princípio constitucional no contexto do acesso à informação pública.",
            "órgãos devem prestar contas de sua atuação no contexto do acesso à informação pública.",
            "existem hipóteses legais de sigilo no contexto do acesso à informação pública."
        ],
        "correta": 0,
        "explicacao": "A informação pública é gerida pelo Estado em benefício da sociedade; acesso não é favor pessoal da autoridade.",
        "feedbackAcerto": "Correto. A LAI promove mudança de cultura do segredo para cultura de acesso.",
        "feedbackErro": "O erro é negar a própria finalidade democrática da lei.",
        "dicaBanca": "Informação pública não é propriedade pessoal do gestor."
    },
    {
        "pergunta": "A LAI deve ser aplicada no ambiente escolar de forma integrada:",
        "alternativas": [
            "com divulgação automática de todo registro produzido pela escola.",
            "à proteção da intimidade, aos dados pessoais e às demais normas aplicáveis.",
            "com sigilo de qualquer informação relacionada a estudante.",
            "somente aos documentos financeiros da unidade.",
            "apenas quando o pedido for feito por servidor público."
        ],
        "correta": 1,
        "explicacao": "A escola pública está sujeita à transparência, mas precisa proteger informações pessoais e sensíveis.",
        "feedbackAcerto": "Correto. A solução adequada depende da natureza da informação e de quem solicita o acesso.",
        "feedbackErro": "O erro é adotar publicidade total ou sigilo total.",
        "dicaBanca": "No ambiente escolar, LAI e proteção de dados caminham juntas."
    },
    {
        "pergunta": "Assinale a alternativa que melhor resume a LAI:",
        "alternativas": [
            "informações públicas são acessíveis apenas após publicação oficial no contexto do acesso à informação pública.",
            "todo documento público deve ser divulgado integralmente, inclusive dados pessoais no contexto do acesso à informação pública.",
            "o cidadão somente acessa informação se demonstrar interesse jurídico no contexto do acesso à informação pública.",
            "a Administração decide livremente se responderá aos pedidos no contexto do acesso à informação pública.",
            "o acesso é a regra, o sigilo é exceção fundamentada, e a Administração deve facilitar a transparência ativa e passiva."
        ],
        "correta": 4,
        "explicacao": "A LAI estrutura um regime de transparência em que acesso é regra, restrições precisam de fundamento e o Estado deve facilitar o exercício do direito.",
        "feedbackAcerto": "Correto. A alternativa reúne os pilares centrais da lei sem transformar transparência em exposição irrestrita.",
        "feedbackErro": "Os distratores introduzem barreiras ou absolutizam a publicidade de forma incompatível com a LAI.",
        "dicaBanca": "Questão-síntese: acesso + facilitação + exceções legais."
    }
];

if (typeof window !== 'undefined') { window.lai = lai; }
