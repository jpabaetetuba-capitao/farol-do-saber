// Banco de questões — TEA / Lei Berenice Piana / Educação Especial Inclusiva (2026)
// Questões autorais em nível de concurso para professor, atualizadas conforme legislação vigente.

const tea = [
  {
    pergunta: "Para os efeitos da Lei nº 12.764/2012, a caracterização legal da pessoa com transtorno do espectro autista observa a forma prevista nos incisos I ou II do § 1º do art. 1º. Assinale a alternativa compatível com essa redação legal.",
    alternativas: [
      "Deficiência persistente e clinicamente significativa da comunicação e da interação sociais ou padrões restritivos e repetitivos de comportamentos, interesses e atividades, nas formas descritas pela lei.",
      "Comprometimento intelectual associado a prejuízo acadêmico e necessidade permanente de apoio em atividades da vida diária.",
      "Alteração sensorial acompanhada de deficiência motora e dificuldade de adaptação escolar identificada antes da adolescência.",
      "Prejuízo de linguagem oral, deficiência intelectual e comportamento repetitivo presentes conjuntamente em todos os contextos avaliados e documentados por equipe multiprofissional em avaliações clínicas sucessivas realizadas ao longo do desenvolvimento.",
      "Dificuldade de aprendizagem acompanhada de isolamento social e baixo rendimento escolar durante dois períodos letivos consecutivos."
    ],
    correta: 0,
    explicacao: "A Lei nº 12.764/2012, para seus próprios efeitos, utiliza a fórmula dos incisos I ou II: deficiência persistente e clinicamente significativa da comunicação/interação sociais ou padrões restritivos e repetitivos, cada qual detalhado no dispositivo.",
    feedbackAcerto: "Você identificou a literalidade legal. A questão exige atenção ao conectivo usado pela Lei Berenice Piana, sem importar critérios de outros manuais diagnósticos para dentro do texto jurídico.",
    feedbackErro: "A alternativa correta reproduz a estrutura dos incisos I ou II do § 1º do art. 1º. As demais acrescentam requisitos que a lei não estabelece, como deficiência intelectual, prejuízo acadêmico ou deficiência motora.",
    dicaBanca: "Quando a banca disser 'para os efeitos da Lei nº 12.764/2012', priorize a redação da própria lei."
  },
  {
    pergunta: "Uma secretaria informou que os direitos próprios das pessoas com deficiência se aplicariam à pessoa com TEA apenas quando houvesse também deficiência intelectual. A orientação é incompatível com a Lei nº 12.764/2012 porque:",
    alternativas: [
      "a equiparação jurídica depende do grau de suporte e deve ser definida por avaliação biopsicossocial em cada política pública.",
      "a pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais, independentemente dessa associação.",
      "a equiparação ocorre na área educacional e precisa ser renovada a cada etapa de ensino conforme as necessidades do estudante.",
      "a pessoa com TEA é considerada pessoa com deficiência até os dezoito anos e, depois, passa a depender de avaliação funcional.",
      "a condição de pessoa com deficiência decorre da emissão da CIPTEA e produz efeitos a partir da data de expedição da carteira."
    ],
    correta: 1,
    explicacao: "O § 2º do art. 1º da Lei nº 12.764/2012 dispõe expressamente que a pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais.",
    feedbackAcerto: "Você reconheceu um dos dispositivos mais cobrados da Lei Berenice Piana: a equiparação é legal e não depende de deficiência intelectual associada, idade ou CIPTEA.",
    feedbackErro: "A correta é a equiparação para todos os efeitos legais. As demais criam condições temporais, documentais ou clínicas que não constam dessa regra.",
    dicaBanca: "TEA = pessoa com deficiência para todos os efeitos legais."
  },
  {
    pergunta: "Uma prefeitura organiza ações para pessoas com TEA separando rigidamente saúde, educação e assistência social, sem canais de articulação entre os setores. Qual diretriz da Lei nº 12.764/2012 é diretamente contrariada?",
    alternativas: [
      "Prioridade para pesquisas epidemiológicas destinadas a dimensionar a magnitude do transtorno no País.",
      "Estímulo à inserção da pessoa com TEA no mercado de trabalho, observadas as peculiaridades da deficiência.",
      "Intersetorialidade no desenvolvimento das ações, das políticas e no atendimento à pessoa com TEA.",
      "Responsabilidade do poder público quanto à informação pública relativa ao transtorno e às suas implicações.",
      "Incentivo à formação e à capacitação de profissionais especializados, pais e responsáveis."
    ],
    correta: 2,
    explicacao: "A intersetorialidade é diretriz expressa da Política Nacional de Proteção dos Direitos da Pessoa com TEA e exige articulação entre políticas e serviços.",
    feedbackAcerto: "Você relacionou o problema do enunciado à diretriz correta: fragmentação institucional é o oposto de atuação intersetorial.",
    feedbackErro: "A correta é intersetorialidade. As demais também são diretrizes legais, mas não respondem ao problema específico de setores que atuam sem articulação.",
    dicaBanca: "Se o caso descreve serviços isolados, procure a diretriz de intersetorialidade."
  },
  {
    pergunta: "Na elaboração de uma política municipal para pessoas com TEA, o governo decidiu excluir entidades, famílias e representantes da comunidade de todas as etapas de formulação e acompanhamento. Segundo a Lei nº 12.764/2012, a medida conflita com a diretriz de:",
    alternativas: [
      "centralização administrativa da política de atendimento no ente responsável pelo financiamento da ação.",
      "prioridade técnica das equipes especializadas sobre manifestações de usuários e entidades da sociedade civil.",
      "definição dos serviços por profissionais de saúde, com posterior comunicação dos resultados à comunidade local.",
      "participação da comunidade na formulação das políticas públicas e controle social de sua implantação, acompanhamento e avaliação.",
      "consulta comunitária restrita à fase de avaliação final, depois de concluída a execução orçamentária da política e publicados os indicadores de resultado."
    ],
    correta: 3,
    explicacao: "A participação da comunidade na formulação das políticas públicas e no controle social de sua implementação, acompanhamento e avaliação é diretriz expressa da Lei nº 12.764/2012.",
    feedbackAcerto: "Você identificou que participação social não é uma etapa decorativa ao final do processo; integra a própria formulação e o controle da política.",
    feedbackErro: "A correta reproduz a diretriz legal. As outras alternativas centralizam decisões ou reduzem a participação comunitária a momento posterior.",
    dicaBanca: "Lei Berenice Piana: comunidade participa da formulação e do controle social."
  },
  {
    pergunta: "Entre os direitos à saúde assegurados pela Lei nº 12.764/2012, encontra-se:",
    alternativas: [
      "diagnóstico definitivo como requisito prévio para acesso a atendimento multiprofissional e demais ações de saúde.",
      "tratamento hospitalar como porta de entrada preferencial para todos os cuidados relacionados ao transtorno.",
      "acesso a medicamentos condicionado à existência de deficiência intelectual ou outra condição clínica associada.",
      "avaliação médica periódica como substituta das ações de habilitação, reabilitação e acompanhamento multiprofissional nas diferentes etapas do cuidado em saúde nos serviços de referência da rede pública.",
      "diagnóstico precoce, ainda que não definitivo, atendimento multiprofissional, nutrição adequada, terapia nutricional, medicamentos e informações que auxiliem diagnóstico e tratamento."
    ],
    correta: 4,
    explicacao: "O art. 3º, III, assegura acesso à atenção integral em saúde e enumera diagnóstico precoce, ainda que não definitivo, atendimento multiprofissional, nutrição e terapia nutricional, medicamentos e informações.",
    feedbackAcerto: "Você observou que a lei não transforma um diagnóstico definitivo em porta obrigatória para os demais direitos de saúde; ela valoriza atenção integral e identificação precoce.",
    feedbackErro: "A correta reúne os elementos expressamente previstos. As demais criam condicionamentos ou hierarquias de cuidado que o dispositivo não estabelece.",
    dicaBanca: "Na lei, 'diagnóstico precoce, ainda que não definitivo' é expressão importante."
  },
  {
    pergunta: "A Lei nº 15.256/2025 acrescentou uma diretriz à Política Nacional de Proteção dos Direitos da Pessoa com TEA. Essa atualização passou a incentivar:",
    alternativas: [
      "a investigação diagnóstica do TEA em pessoas adultas e em pessoas idosas.",
      "a emissão automática da CIPTEA para toda pessoa acima de sessenta anos que relate sinais compatíveis com TEA.",
      "a revisão compulsória de diagnósticos realizados na infância quando a pessoa completa dezoito anos.",
      "a criação de centros exclusivos para diagnóstico tardio, desvinculados das redes existentes de saúde e proteção social.",
      "a limitação das campanhas de conscientização às pessoas que não receberam diagnóstico durante a infância."
    ],
    correta: 0,
    explicacao: "A Lei nº 15.256/2025 incluiu o inciso IX no art. 2º da Lei nº 12.764/2012, incentivando a investigação diagnóstica em pessoas adultas e idosas.",
    feedbackAcerto: "Você identificou uma atualização recente e muito cobrável em prova: a política passou a mencionar de forma expressa adultos e idosos na investigação diagnóstica.",
    feedbackErro: "A correta corresponde à nova diretriz. As demais criam carteira automática, revisão compulsória ou estruturas que a Lei nº 15.256/2025 não instituiu.",
    dicaBanca: "Atualização 2025: investigação diagnóstica também em adultos e idosos."
  },
  {
    pergunta: "Após a Lei nº 15.131/2025, a nutrição adequada e a terapia nutricional previstas entre os direitos da pessoa com TEA devem ser compreendidas como:",
    alternativas: [
      "prescrição de dieta padronizada definida pela escola em conjunto com a família, sem necessidade de profissional habilitado.",
      "ações de promoção e proteção sob o ponto de vista nutricional realizadas por profissional de saúde legalmente habilitado, observados protocolos clínicos e diretrizes terapêuticas competentes.",
      "substituição dos demais cuidados de saúde quando a intervenção nutricional apresentar resposta clínica favorável.",
      "direito restrito a crianças e adolescentes matriculados em instituições públicas de educação básica.",
      "tratamento definido pelo cuidador da pessoa com TEA conforme preferências alimentares, experiências relatadas pela família e observação cotidiana das respostas alimentares em todas as etapas do cuidado."
    ],
    correta: 1,
    explicacao: "A Lei nº 15.131/2025 detalhou a nutrição adequada e a terapia nutricional, exigindo profissional de saúde legalmente habilitado e observância dos protocolos clínicos e diretrizes terapêuticas da autoridade competente.",
    feedbackAcerto: "Você identificou os requisitos legais da atualização de 2025 e evitou transformar terapia nutricional em dieta informal ou decisão escolar.",
    feedbackErro: "A correta reúne profissional habilitado e protocolos/diretrizes. As demais deslocam a decisão para escola, família ou cuidador, ou restringem indevidamente o direito.",
    dicaBanca: "Lei 15.131/2025: nutrição/terapia nutricional com profissional habilitado e protocolos."
  },
  {
    pergunta: "Uma rede pública oferece cursos sobre TEA para seus profissionais, mas afirma que a legislação não reconhece qualquer necessidade de orientação aos pais e responsáveis. Essa afirmação contraria a diretriz de:",
    alternativas: [
      "estímulo à inserção da pessoa com TEA no mercado de trabalho e nos programas de aprendizagem profissional.",
      "prioridade a estudos epidemiológicos destinados a conhecer a magnitude do transtorno em âmbito nacional.",
      "incentivo à formação e capacitação de profissionais especializados, bem como de pais e responsáveis.",
      "garantia de residência protegida para pessoas que necessitem de apoio para moradia e vida comunitária.",
      "controle social exercido pelas famílias sobre a execução orçamentária das políticas municipais de saúde."
    ],
    correta: 2,
    explicacao: "A Lei nº 12.764/2012 inclui como diretriz o incentivo à formação e capacitação de profissionais especializados e também de pais e responsáveis.",
    feedbackAcerto: "Você percebeu que a política não enxerga formação como tema restrito aos técnicos; famílias e responsáveis também aparecem expressamente.",
    feedbackErro: "A correta é a diretriz de formação/capacitação. As demais tratam de temas legais distintos.",
    dicaBanca: "Profissionais + pais + responsáveis aparecem juntos na diretriz de capacitação."
  },
  {
    pergunta: "Qual alternativa reúne direitos expressamente previstos no art. 3º da Lei nº 12.764/2012?",
    alternativas: [
      "acesso à educação superior gratuita, emprego público reservado, transporte gratuito e benefício previdenciário automático.",
      "moradia própria subsidiada, aposentadoria especial, atendimento escolar domiciliar e medicamentos de livre escolha.",
      "ensino profissionalizante, benefício assistencial independente de critérios legais, residência escolar e emprego protegido em programas mantidos pelo poder público local.",
      "educação e ensino profissionalizante, moradia inclusive residência protegida, mercado de trabalho, previdência social e assistência social.",
      "vaga em escola específica, emprego em jornada reduzida, moradia institucional e benefício fiscal na aquisição de veículo."
    ],
    correta: 3,
    explicacao: "O art. 3º, IV, assegura acesso à educação e ensino profissionalizante, moradia inclusive residência protegida, mercado de trabalho, previdência social e assistência social.",
    feedbackAcerto: "Você distinguiu direitos efetivamente enumerados pela lei de benefícios que dependeriam de outras normas e requisitos específicos.",
    feedbackErro: "A correta reproduz a enumeração do art. 3º. As demais acrescentam gratuidade, reserva, aposentadoria ou benefícios automáticos que o dispositivo não estabelece.",
    dicaBanca: "Questões literais podem misturar direitos reais com benefícios não previstos na Lei nº 12.764."
  },
  {
    pergunta: "A Lei nº 12.764/2012 estabelece proteção contra discriminação e tratamento incompatível com a dignidade da pessoa com TEA. Assinale a alternativa correta.",
    alternativas: [
      "A privação do convívio familiar é admitida quando a equipe escolar entende que a convivência prejudica a adaptação do estudante.",
      "A internação em unidade especializada pode ser usada como medida pedagógica para resolver dificuldades persistentes de inclusão escolar.",
      "A liberdade pode ser restringida por decisão administrativa quando a pessoa apresentar comportamento repetitivo em espaço público.",
      "O tratamento diferenciado baseado em estereótipos é permitido quando a medida é apresentada como forma de proteção da própria pessoa e aprovada por equipe responsável.",
      "A pessoa com TEA não será submetida a tratamento desumano ou degradante, privada da liberdade ou do convívio familiar, nem discriminada por motivo da deficiência."
    ],
    correta: 4,
    explicacao: "O art. 4º protege dignidade, liberdade, convivência familiar e não discriminação. A eventual internação médica observa legislação própria e não constitui instrumento pedagógico de segregação.",
    feedbackAcerto: "Você identificou a proteção integral prevista na lei e rejeitou justificativas paternalistas ou administrativas para restringir direitos.",
    feedbackErro: "A correta reproduz o art. 4º. As demais transformam dificuldade de inclusão ou comportamento em motivo para restrições que a lei não autoriza.",
    dicaBanca: "Proteção legal não pode virar justificativa para segregação."
  },
  {
    pergunta: "A Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (CIPTEA) foi criada com a finalidade legal de:",
    alternativas: [
      "garantir atenção integral, pronto atendimento e prioridade no atendimento e no acesso a serviços públicos e privados, especialmente saúde, educação e assistência social.",
      "substituir os documentos civis da pessoa com TEA nas relações com órgãos de educação, saúde e assistência social.",
      "funcionar como requisito constitutivo para que a pessoa seja considerada pessoa com deficiência perante a administração pública.",
      "autorizar atendimento preferencial em serviços de saúde, sem produzir efeitos nos demais serviços públicos ou privados.",
      "registrar a intensidade do transtorno e definir, com base nela, o nível de prioridade a ser concedido pelos estabelecimentos em cada tipo de serviço prestado oferecido ao usuário."
    ],
    correta: 0,
    explicacao: "O art. 3º-A da Lei nº 12.764/2012 criou a CIPTEA para favorecer atenção integral, pronto atendimento e prioridade no acesso a serviços públicos e privados, com destaque para saúde, educação e assistência social.",
    feedbackAcerto: "Você identificou a finalidade da carteira sem atribuir a ela a criação da condição jurídica da pessoa com deficiência.",
    feedbackErro: "A correta corresponde ao art. 3º-A. A CIPTEA não substitui documentos civis nem é fonte constitutiva dos direitos da pessoa com TEA.",
    dicaBanca: "CIPTEA facilita identificação e prioridade; os direitos decorrem da lei."
  },
  {
    pergunta: "Sobre a expedição da CIPTEA, assinale a alternativa correta.",
    alternativas: [
      "É competência exclusiva da União e exige perícia realizada por junta médica federal antes da emissão do documento, com posterior validação pelo órgão local em sistema nacional próprio.",
      "É expedida pelos órgãos responsáveis pela política nos Estados, Distrito Federal e Municípios, mediante requerimento acompanhado de relatório médico com indicação do CID.",
      "É emitida pelas escolas públicas e privadas quando a pessoa está matriculada, dispensando documentação médica.",
      "É expedida pelo conselho tutelar para crianças e adolescentes e pela assistência social para pessoas adultas.",
      "É emitida pelos serviços do SUS depois de avaliação multiprofissional que determine o grau de suporte da pessoa."
    ],
    correta: 1,
    explicacao: "A Lei Romeo Mion atribuiu a emissão aos órgãos responsáveis pela execução da política nos Estados, DF e Municípios, mediante requerimento e relatório médico com indicação do CID.",
    feedbackAcerto: "Você distinguiu o procedimento de emissão da carteira das regras educacionais sobre AEE, que não dependem de laudo de saúde.",
    feedbackErro: "A correta descreve os entes e documentos previstos. As demais transferem a competência para União, escola, Conselho Tutelar ou SUS de forma não prevista.",
    dicaBanca: "Não misture: CIPTEA exige relatório médico; AEE não pode ser condicionado a laudo."
  },
  {
    pergunta: "A CIPTEA possui, segundo a Lei nº 12.764/2012:",
    alternativas: [
      "validade de dois anos e novo número a cada renovação, para permitir atualização periódica das informações clínicas.",
      "validade indeterminada, desde que o titular mantenha endereço e telefone atualizados junto ao órgão emissor.",
      "validade de cinco anos, com atualização cadastral e revalidação mantendo-se o mesmo número.",
      "validade de dez anos para adultos e de cinco anos para crianças e adolescentes, em razão das mudanças cadastrais.",
      "validade vinculada ao relatório médico apresentado, expirando na data prevista pelo profissional responsável."
    ],
    correta: 2,
    explicacao: "O § 3º do art. 3º-A estabelece validade de cinco anos, dados cadastrais atualizados e revalidação com o mesmo número.",
    feedbackAcerto: "Você identificou os três detalhes literais que podem aparecer separados em prova: prazo, atualização e manutenção do número.",
    feedbackErro: "A correta é cinco anos com revalidação do mesmo número. As demais criam prazos ou condições que a lei não prevê.",
    dicaBanca: "CIPTEA: 5 anos + dados atualizados + mesmo número na revalidação."
  },
  {
    pergunta: "Uma pessoa com TEA comparece a serviço público sem portar CIPTEA. O servidor afirma que, sem a carteira, ela deixa de ser considerada pessoa com deficiência e perde os direitos previstos na Lei nº 12.764/2012. A conclusão é:",
    alternativas: [
      "correta, pois a CIPTEA constitui a prova jurídica indispensável da condição para todos os serviços e políticas públicas.",
      "correta quando o serviço não dispõe de equipe médica capaz de confirmar a condição apresentada pelo usuário.",
      "correta para fins de prioridade, embora os demais direitos possam ser exercidos mediante outro documento de identificação e comprovação complementar da condição.",
      "incorreta, porque a condição jurídica e os direitos decorrem da legislação; a CIPTEA é instrumento de identificação e facilitação do atendimento.",
      "incorreta porque a carteira foi extinta após a criação da Política Nacional de Educação Especial Inclusiva em 2025."
    ],
    correta: 3,
    explicacao: "A Lei nº 12.764/2012 considera a pessoa com TEA pessoa com deficiência por força do art. 1º, § 2º. A CIPTEA facilita identificação e prioridade, mas não cria essa condição jurídica.",
    feedbackAcerto: "Você separou documento de identificação da fonte do direito. A ausência física da carteira não apaga a equiparação legal do TEA à deficiência.",
    feedbackErro: "A correta afirma que os direitos decorrem da lei. As demais transformam a CIPTEA em requisito constitutivo ou afirmam extinção inexistente.",
    dicaBanca: "Documento facilita comprovação; não cria a condição jurídica."
  },
  {
    pergunta: "A finalidade da CIPTEA alcança prioridade no atendimento e no acesso:",
    alternativas: [
      "em repartições públicas federais, ficando os serviços estaduais e municipais sujeitos a regulamentação própria.",
      "em serviços de saúde e assistência social, enquanto a educação é tratada em dispositivo separado e fora da carteira.",
      "em órgãos públicos, sem abranger estabelecimentos privados de atendimento ao público.",
      "em serviços privados de saúde quando contratados pelo SUS, sem alcançar outras relações privadas.",
      "em serviços públicos e privados, com destaque legal para saúde, educação e assistência social."
    ],
    correta: 4,
    explicacao: "O art. 3º-A menciona serviços públicos e privados e destaca, de forma expressa, saúde, educação e assistência social.",
    feedbackAcerto: "Você reconheceu a amplitude da finalidade legal da CIPTEA e não a restringiu a um ente, setor ou tipo de prestador.",
    feedbackErro: "A correta reflete o texto da lei. As demais limitam indevidamente a prioridade por esfera governamental ou natureza do serviço.",
    dicaBanca: "CIPTEA: prioridade em serviços públicos e privados."
  },
  {
    pergunta: "Um gestor escolar recusa matrícula de estudante com TEA em razão da deficiência. Nos termos do art. 7º da Lei nº 12.764/2012, a sanção administrativa prevista é:",
    alternativas: [
      "multa de três a vinte salários-mínimos.",
      "advertência na primeira ocorrência e multa fixa de dez salários-mínimos na reincidência.",
      "multa de um a cinco salários-mínimos e suspensão obrigatória das atividades da escola.",
      "multa equivalente ao valor de vinte mensalidades da instituição, independentemente do número de recusas.",
      "suspensão do gestor por trinta dias e encaminhamento automático do caso ao Poder Judiciário."
    ],
    correta: 0,
    explicacao: "O art. 7º prevê multa de 3 a 20 salários-mínimos ao gestor escolar ou autoridade competente que recusar matrícula de aluno com TEA ou outro tipo de deficiência.",
    feedbackAcerto: "Você identificou o intervalo legal exato, um detalhe objetivo que aparece com frequência em concursos.",
    feedbackErro: "A correta é 3 a 20 salários-mínimos. As demais inventam advertência, valores fixos ou sanções não previstas nesse caput.",
    dicaBanca: "Recusa de matrícula: multa de 3 a 20 salários-mínimos."
  },
  {
    pergunta: "Se houver reincidência na recusa de matrícula, a Lei nº 12.764/2012 estabelece que:",
    alternativas: [
      "a multa será duplicada e a escola ficará impedida de realizar novas matrículas durante o ano letivo seguinte.",
      "apurada a reincidência em processo administrativo, com contraditório e ampla defesa, haverá perda do cargo.",
      "a autoridade perderá o cargo de forma imediata, antes da instauração do processo administrativo, para proteger o estudante.",
      "a instituição terá seu credenciamento automaticamente cancelado pelo sistema de ensino responsável pela supervisão.",
      "o gestor será afastado por noventa dias e poderá retornar ao cargo depois de curso de formação em educação inclusiva."
    ],
    correta: 1,
    explicacao: "O § 1º do art. 7º prevê perda do cargo em caso de reincidência apurada em processo administrativo, assegurados contraditório e ampla defesa.",
    feedbackAcerto: "Você acertou tanto a consequência quanto as garantias procedimentais. A lei não autoriza perda imediata do cargo sem processo.",
    feedbackErro: "A correta reúne reincidência, processo administrativo, contraditório, ampla defesa e perda do cargo. As demais criam efeitos automáticos ou diferentes.",
    dicaBanca: "Reincidência: processo administrativo + contraditório/ampla defesa + perda do cargo."
  },
  {
    pergunta: "Segundo o Decreto nº 8.368/2014, ao tomar conhecimento de recusa de matrícula de estudante com deficiência:",
    alternativas: [
      "a denúncia pode ser apresentada unicamente pelos pais ou responsáveis legais do estudante diretamente ao Ministério Público.",
      "a apuração depende de representação formal do CACS-Fundeb ou do conselho de educação competente.",
      "qualquer interessado pode denunciar a recusa ao órgão administrativo competente.",
      "a denúncia deve ser encaminhada à direção da própria escola, que decide em caráter definitivo sobre sua procedência.",
      "o fato só pode ser examinado depois do encerramento do processo de matrícula da rede de ensino."
    ],
    correta: 2,
    explicacao: "O art. 6º do Decreto nº 8.368/2014 dispõe que qualquer interessado poderá denunciar a recusa ao órgão administrativo competente.",
    feedbackAcerto: "Você identificou que a legitimidade para denunciar é ampla e não fica restrita à família ou a órgãos colegiados.",
    feedbackErro: "A correta reproduz o decreto. As demais criam restrições de legitimidade ou etapas não previstas.",
    dicaBanca: "Recusa de matrícula: qualquer interessado pode denunciar."
  },
  {
    pergunta: "Uma escola privada informa à família de estudante com TEA que haverá mensalidade adicional para custear recursos e profissional de apoio exigidos para sua inclusão. À luz da Lei Brasileira de Inclusão, a cobrança:",
    alternativas: [
      "é admitida quando a instituição comprova que o custo individual ultrapassa a média das despesas dos demais estudantes e discrimina o valor em contrato apresentado à família.",
      "é admitida se prevista no contrato antes da matrícula e aceita expressamente pelos responsáveis pelo estudante.",
      "é permitida em cursos livres e na educação básica, mas vedada no ensino superior privado.",
      "é vedada, pois instituições privadas devem cumprir as obrigações de educação inclusiva sem cobrar valores adicionais em mensalidades, anuidades ou matrículas.",
      "é possível quando a família escolhe profissional de apoio diferente daquele disponibilizado pela instituição."
    ],
    correta: 3,
    explicacao: "O art. 28, § 1º, da LBI estende obrigações de educação inclusiva às instituições privadas e veda cobrança de valores adicionais para cumpri-las.",
    feedbackAcerto: "Você aplicou corretamente a LBI à pessoa com TEA, que é considerada pessoa com deficiência para todos os efeitos legais.",
    feedbackErro: "A correta é a vedação de cobrança adicional. Previsão contratual ou demonstração de custo não transforma a taxa em permitida.",
    dicaBanca: "Escola privada não pode repassar à família o custo da inclusão como taxa adicional."
  },
  {
    pergunta: "A legislação brasileira também tipifica como crime determinadas práticas discriminatórias no acesso à educação da pessoa com deficiência. Entre elas está:",
    alternativas: [
      "solicitar documentos acadêmicos exigidos de todos os candidatos durante o procedimento regular de matrícula.",
      "realizar avaliação pedagógica para conhecer necessidades de acessibilidade depois de efetivada a matrícula do estudante.",
      "organizar atendimento educacional especializado integrado ao projeto pedagógico da instituição de ensino.",
      "solicitar à família informações relevantes para planejamento de apoios e recursos de acessibilidade durante o ano letivo e registrar essas informações no plano pedagógico.",
      "recusar, cobrar valores adicionais, suspender, procrastinar, cancelar ou fazer cessar inscrição de aluno em razão de sua deficiência."
    ],
    correta: 4,
    explicacao: "A Lei nº 7.853/1989, com redação dada pela LBI, tipifica como crime recusar ou criar obstáculos desse tipo à inscrição do aluno em razão da deficiência.",
    feedbackAcerto: "Você distinguiu práticas pedagógicas legítimas de ações discriminatórias que impedem, oneram ou interrompem o acesso educacional.",
    feedbackErro: "A correta descreve condutas criminalizadas. Solicitar informações ou planejar apoios depois da matrícula não é equivalente a discriminar por deficiência.",
    dicaBanca: "Recusar ou onerar matrícula por deficiência pode ter repercussão criminal."
  },
  {
    pergunta: "Na Lei nº 12.764/2012, o direito ao acompanhante especializado para pessoa com TEA incluída em classe comum do ensino regular surge:",
    alternativas: [
      "em caso de comprovada necessidade.",
      "com a apresentação da CIPTEA, que presume necessidade de acompanhamento durante todo o período escolar.",
      "com o diagnóstico de TEA, independentemente das barreiras e demandas observadas no contexto educacional.",
      "quando o professor regente declara não possuir formação específica para trabalhar com o estudante.",
      "depois de decisão judicial que determine a presença individual de acompanhante durante todas as atividades."
    ],
    correta: 0,
    explicacao: "O art. 3º, § 1º, vincula o direito ao acompanhante especializado à comprovada necessidade da pessoa com TEA incluída em classe comum.",
    feedbackAcerto: "Você identificou a expressão legal decisiva. O diagnóstico, isoladamente, não significa que toda pessoa com TEA necessite do mesmo tipo ou intensidade de apoio.",
    feedbackErro: "A correta é 'comprovada necessidade'. As outras alternativas transformam carteira, diagnóstico ou dificuldade do professor em gatilhos automáticos.",
    dicaBanca: "Acompanhante especializado: necessidade comprovada, não regra uniforme para todo TEA."
  },
  {
    pergunta: "Nos termos do Decreto nº 8.368/2014, a instituição de ensino disponibilizará acompanhante especializado quando comprovada necessidade de apoio às atividades de:",
    alternativas: [
      "planejamento curricular, elaboração de provas, correção de atividades e substituição eventual do professor regente.",
      "comunicação, interação social, locomoção, alimentação e cuidados pessoais.",
      "atendimento clínico, administração de terapias, prescrição de medicamentos e acompanhamento hospitalar.",
      "gestão de sala, definição de objetivos, ensino dos conteúdos e atribuição de conceitos ao estudante.",
      "supervisão disciplinar, controle de frequência, elaboração do currículo e orientação profissional da turma."
    ],
    correta: 1,
    explicacao: "O Decreto nº 8.368/2014 detalha apoio em comunicação, interação social, locomoção, alimentação e cuidados pessoais.",
    feedbackAcerto: "Você reconheceu funções de apoio relacionadas à participação e às necessidades do estudante, sem transferir ao acompanhante a docência ou atos clínicos.",
    feedbackErro: "A correta reúne as cinco áreas do decreto. As demais atribuem funções pedagógicas do professor, de gestão ou de profissões regulamentadas.",
    dicaBanca: "Acompanhante especializado apoia participação; não substitui professor nem profissional clínico."
  },
  {
    pergunta: "Uma direção escolar determina que o acompanhante especializado passe a ensinar individualmente todo o currículo ao estudante com TEA, enquanto o professor regente deixa de planejar sua participação nas aulas. Essa organização é inadequada porque:",
    alternativas: [
      "o acompanhante deve assumir o ensino individual, mas a escola precisa registrar essa estratégia no plano educacional do estudante.",
      "o professor regente pode transferir a docência quando a turma possui muitos estudantes e o acompanhante tem experiência na área.",
      "o apoio não substitui a responsabilidade pedagógica do professor e da escola pela escolarização do estudante em classe comum.",
      "o estudante com TEA deve receber currículo próprio fora da sala comum quando necessita de acompanhante para participar.",
      "a presença do acompanhante transforma o AEE em serviço substitutivo da escolarização regular durante o período de apoio."
    ],
    correta: 2,
    explicacao: "O acompanhante/profissional de apoio favorece acesso e participação, mas a responsabilidade pelo ensino continua sendo da escola e dos docentes. Apoio não equivale a substituição da docência.",
    feedbackAcerto: "Você distinguiu apoio à participação de terceirização pedagógica. A inclusão não ocorre quando o estudante é entregue a outro profissional e se afasta do planejamento da turma.",
    feedbackErro: "A correta preserva a responsabilidade pedagógica do professor e da escola. As demais legitimam separação ou substituição da docência.",
    dicaBanca: "Profissional de apoio não é professor particular dentro da sala comum."
  },
  {
    pergunta: "Segundo a Política Nacional de Educação Especial Inclusiva vigente, a oferta de profissional de apoio escolar:",
    alternativas: [
      "depende da apresentação de laudo médico que descreva o diagnóstico e o nível de suporte necessário no ambiente escolar, com atualização periódica do documento.",
      "é automática para todo estudante com TEA, pois o diagnóstico presume necessidade de acompanhamento contínuo.",
      "fica a critério administrativo da escola, sem necessidade de análise das barreiras encontradas pelo estudante.",
      "é avaliada pelo estudo de caso e independe de diagnóstico, laudo, relatório ou outro documento emitido por profissional de saúde.",
      "é definida pelo serviço de saúde responsável pelo acompanhamento clínico e comunicada à escola para execução."
    ],
    correta: 3,
    explicacao: "O Decreto nº 12.686/2025, com redação do Decreto nº 12.773/2025, determina que a necessidade do profissional de apoio seja avaliada pelo estudo de caso e não condicionada a documentos de saúde.",
    feedbackAcerto: "Você identificou uma atualização muito importante para concursos de 2026: apoio escolar é decisão educacional fundamentada no estudo de caso, não autorização médica.",
    feedbackErro: "A correta reúne estudo de caso e independência de laudo. As demais medicalizam ou automatizam a decisão.",
    dicaBanca: "Profissional de apoio: estudo de caso, não exigência de laudo."
  },
  {
    pergunta: "De acordo com o Decreto nº 12.686/2025, o profissional de apoio escolar pode atuar:",
    alternativas: [
      "na prescrição de recursos terapêuticos e na definição clínica das necessidades do estudante dentro da escola.",
      "na elaboração autônoma dos objetivos curriculares, substituindo o professor regente quando houver barreiras de aprendizagem e registrando o progresso acadêmico do estudante.",
      "na realização de procedimentos técnicos próprios de profissões regulamentadas quando a família autorizar por escrito.",
      "na avaliação diagnóstica do TEA e na indicação do nível de suporte educacional necessário ao estudante.",
      "na locomoção, higiene, alimentação, interação social, comunicação e uso de tecnologias e recursos auxiliares previstos no atendimento educacional."
    ],
    correta: 4,
    explicacao: "O art. 14 do Decreto nº 12.686/2025 define funções de apoio ligadas a locomoção, higiene, alimentação, interação, comunicação e utilização de recursos auxiliares, em consonância com PAEE e PEI.",
    feedbackAcerto: "Você reconheceu o caráter educacional e funcional do apoio sem atribuir ao profissional tarefas clínicas ou a substituição da docência.",
    feedbackErro: "A correta corresponde às competências atuais. As demais invadem atribuições docentes ou de profissões regulamentadas.",
    dicaBanca: "Apoio escolar remove barreiras de participação; não diagnostica nem prescreve."
  },
  {
    pergunta: "Quanto à atuação cotidiana do profissional de apoio escolar na política vigente, é correto afirmar que ele:",
    alternativas: [
      "atua nas atividades escolares em que se fizer necessário e se reporta à equipe pedagógica quando preciso.",
      "permanece vinculado a uma sala de recursos e participa das demais atividades escolares por autorização do professor do AEE.",
      "executa seu trabalho de forma independente da equipe pedagógica para preservar autonomia na relação com o estudante.",
      "atua nas atividades de higiene e alimentação, ficando a comunicação e a interação social sob responsabilidade exclusiva do professor.",
      "acompanha o estudante fora da sala comum, evitando interferência nas metodologias utilizadas pelo professor regente."
    ],
    correta: 0,
    explicacao: "O Decreto nº 12.686/2025 estabelece atuação do profissional de apoio nas atividades escolares e articulação com a equipe pedagógica.",
    feedbackAcerto: "Você identificou que apoio é parte do trabalho educacional articulado, e não uma função paralela ou isolada dentro da escola.",
    feedbackErro: "A correta combina presença nas atividades necessárias e referência à equipe pedagógica. As demais segregam ou restringem indevidamente a atuação.",
    dicaBanca: "Profissional de apoio trabalha articulado à equipe pedagógica."
  },
  {
    pergunta: "Na Política Nacional de Educação Especial Inclusiva instituída em 2025, o público da educação especial inclui:",
    alternativas: [
      "estudantes com deficiência e altas habilidades, enquanto o TEA permanece vinculado a política educacional separada.",
      "estudantes com deficiência, transtorno do espectro autista e altas habilidades ou superdotação.",
      "estudantes com baixo rendimento, transtornos de aprendizagem e qualquer dificuldade escolar identificada pela equipe pedagógica.",
      "crianças com deficiência na educação básica, ficando adultos com TEA fora da modalidade de educação especial.",
      "estudantes com laudo clínico de deficiência ou TEA e estudantes com altas habilidades comprovadas por avaliação médica."
    ],
    correta: 1,
    explicacao: "O Decreto nº 12.686/2025 inclui expressamente estudantes com deficiência, TEA e altas habilidades/superdotação.",
    feedbackAcerto: "Você identificou o público definido pela política sem transformar dificuldade escolar geral ou laudo médico em critério de pertencimento.",
    feedbackErro: "A correta reproduz o art. 1º. As demais excluem TEA, ampliam indevidamente o público ou condicionam a documentos clínicos.",
    dicaBanca: "Público atual: deficiência + TEA + altas habilidades/superdotação."
  },
  {
    pergunta: "Para estudante com TEA, o Atendimento Educacional Especializado (AEE) possui caráter:",
    alternativas: [
      "substitutivo da escolarização quando as necessidades de apoio dificultam a permanência na classe comum.",
      "suplementar, porque acrescenta conteúdos avançados ao currículo desenvolvido na escolarização regular.",
      "complementar à escolarização, com recursos, estratégias e acessibilidade voltados à participação e aprendizagem.",
      "clínico-terapêutico, integrado à escola para execução de intervenções prescritas pelos serviços de saúde.",
      "administrativo, destinado a registrar adaptações e encaminhar solicitações de recursos à secretaria de educação."
    ],
    correta: 2,
    explicacao: "O art. 5º do Decreto nº 12.686/2025 define o AEE como complementar à escolarização de pessoas com deficiência e TEA e suplementar para altas habilidades/superdotação.",
    feedbackAcerto: "Você distinguiu corretamente complementar de suplementar e não confundiu AEE com clínica ou escolarização paralela.",
    feedbackErro: "A correta é complementar para TEA. A suplementação é associada às altas habilidades; substituição da classe comum é incompatível com a regra do AEE.",
    dicaBanca: "TEA no AEE = complementar; altas habilidades = suplementar."
  },
  {
    pergunta: "Uma escola propõe matricular um estudante com TEA no AEE em lugar da classe comum, alegando que a sala de recursos oferece atendimento mais individualizado. Segundo a política vigente:",
    alternativas: [
      "a substituição é permitida quando o estudo de caso registra necessidade elevada de apoio pedagógico.",
      "a substituição pode ocorrer por decisão conjunta da família e da equipe do AEE ao início de cada ano letivo.",
      "a matrícula na classe comum deixa de ser necessária se o estudante frequentar o AEE em carga horária equivalente.",
      "a matrícula e a frequência no AEE não podem substituir a matrícula e a frequência na classe comum.",
      "a escola pode optar entre classe comum e AEE, desde que garanta o mesmo número de horas curriculares."
    ],
    correta: 3,
    explicacao: "O art. 8º do Decreto nº 12.686/2025 proíbe que matrícula no AEE substitua matrícula e frequência na classe comum.",
    feedbackAcerto: "Você identificou uma distinção estrutural da educação inclusiva: AEE apoia a escolarização, não cria uma via paralela que a substitua.",
    feedbackErro: "A correta reproduz a vedação. Estudo de caso, família ou equivalência de carga horária não autorizam substituição.",
    dicaBanca: "AEE soma apoio à classe comum; não ocupa o lugar dela."
  },
  {
    pergunta: "Uma rede orienta as escolas a iniciar o AEE de estudante com sinais de TEA somente depois da apresentação de laudo médico conclusivo. A orientação contraria a política vigente porque:",
    alternativas: [
      "o laudo médico é dispensado quando a família apresenta CIPTEA com validade atualizada.",
      "o AEE pode começar sem laudo durante trinta dias, mas depois o documento clínico passa a ser obrigatório.",
      "a escola deve substituir o laudo por avaliação psicológica realizada por profissional do próprio sistema de ensino.",
      "o diagnóstico é exigido para o AEE de estudantes com TEA, mas não para estudantes com outras deficiências identificadas diretamente pela equipe pedagógica.",
      "a garantia da oferta do AEE não pode ser condicionada a diagnóstico, laudo, relatório ou outro documento de profissional de saúde."
    ],
    correta: 4,
    explicacao: "O art. 11, § 7º, do Decreto nº 12.686/2025 veda condicionar a oferta do AEE a documentos de saúde.",
    feedbackAcerto: "Você identificou uma das mudanças mais importantes do marco atual: a escola deve estudar barreiras e necessidades educacionais sem transformar o laudo clínico em porta de entrada do AEE.",
    feedbackErro: "A correta reproduz a regra. CIPTEA, prazo provisório ou avaliação psicológica não funcionam como substitutos obrigatórios.",
    dicaBanca: "AEE: direito educacional; laudo de saúde não é condição de acesso."
  },
  {
    pergunta: "No estudo de caso previsto na Política Nacional de Educação Especial Inclusiva, a sequência de análise inclui:",
    alternativas: [
      "identificação das demandas e barreiras, análise do contexto escolar, identificação de potencialidades e apoios e definição de estratégias e recursos de acessibilidade.",
      "diagnóstico clínico, classificação do nível de suporte, definição da terapia e posterior adaptação do currículo escolar.",
      "aplicação de teste padronizado, comparação com a média da turma, emissão de laudo e encaminhamento ao AEE.",
      "observação do comportamento, escolha do profissional de apoio, definição da carga horária e encaminhamento para sala separada, com revisão periódica pela equipe escolar.",
      "análise médica, avaliação psicológica, parecer da assistência social e decisão administrativa da secretaria de educação."
    ],
    correta: 0,
    explicacao: "O art. 11 organiza o estudo de caso em demandas/barreiras, contexto escolar, potencialidades/demandas de apoio e estratégias/recursos para eliminação de barreiras.",
    feedbackAcerto: "Você reconheceu o caráter pedagógico e contextual do estudo de caso, em vez de convertê-lo em sequência clínica de diagnóstico.",
    feedbackErro: "A correta reflete as etapas legais. As demais medicalizam ou reduzem o processo a testes e encaminhamentos.",
    dicaBanca: "Estudo de caso olha barreiras + contexto + potencialidades + apoios + estratégias."
  },
  {
    pergunta: "Durante a realização do estudo de caso de estudante com TEA, a escola decide ouvir a família apenas depois de concluído o plano. Essa decisão é incompatível com o Decreto nº 12.686/2025 porque:",
    alternativas: [
      "a família deve aprovar formalmente cada estratégia pedagógica antes que a equipe escolar possa colocá-la em prática e registrar os resultados no plano individualizado.",
      "o envolvimento do estudante e dos familiares responsáveis pelo cuidado cotidiano deve ser garantido ao longo de todo o estudo de caso.",
      "a família substitui a equipe pedagógica na definição dos recursos de acessibilidade e das adaptações curriculares.",
      "a participação familiar é obrigatória na fase clínica do diagnóstico, mas não integra a etapa de planejamento educacional.",
      "o plano precisa ser elaborado pelos serviços de saúde e validado pela família antes de ser enviado à escola."
    ],
    correta: 1,
    explicacao: "O decreto garante participação do estudante e dos familiares ao longo de todo o estudo de caso, inclusive para histórico de estratégias, necessidades e acompanhamento da implementação.",
    feedbackAcerto: "Você identificou participação como elemento processual, não como mera comunicação do plano pronto.",
    feedbackErro: "A correta corresponde ao decreto. A participação familiar não significa transferir à família a responsabilidade técnica da equipe pedagógica.",
    dicaBanca: "Estudo de caso é feito com estudante e família, não sobre eles à distância."
  },
  {
    pergunta: "A avaliação biopsicossocial da deficiência, quando existente, em relação ao estudo de caso educacional:",
    alternativas: [
      "substitui o estudo de caso e passa a definir diretamente as medidas pedagógicas que a escola deve executar.",
      "é requisito obrigatório para início do AEE e para elaboração dos documentos individualizados da escola.",
      "pode ser utilizada como documento subsidiário ao estudo de caso, sem substituir a análise educacional.",
      "deve ser realizada pela própria escola antes da matrícula do estudante no AEE ou na classe comum.",
      "define de forma vinculante a necessidade de profissional de apoio e o número de horas de atendimento semanal."
    ],
    correta: 2,
    explicacao: "O Decreto nº 12.686/2025 admite a avaliação biopsicossocial como documento subsidiário ao estudo de caso.",
    feedbackAcerto: "Você identificou corretamente a posição desse documento: ele pode contribuir, mas não ocupa o lugar da análise educacional contextualizada.",
    feedbackErro: "A correta é caráter subsidiário. As demais transformam a avaliação em requisito ou decisão vinculante.",
    dicaBanca: "Biopsicossocial pode subsidiar; estudo de caso continua sendo metodologia educacional própria."
  },
  {
    pergunta: "Após o Decreto nº 12.773/2025, o resultado do estudo de caso fundamenta:",
    alternativas: [
      "o laudo educacional e o relatório médico utilizados para comprovar o TEA perante a rede de ensino.",
      "o currículo diferenciado e a dispensa do estudante das aprendizagens previstas para a classe comum, com revisão semestral pela equipe pedagógica.",
      "o parecer clínico da escola e a classificação do estudante em nível de suporte pedagógico.",
      "o Plano de Atendimento Educacional Especializado (PAEE) e o Plano Educacional Individualizado (PEI).",
      "o contrato de acompanhamento especializado firmado entre a escola, a família e o serviço de saúde."
    ],
    correta: 3,
    explicacao: "A redação atual do art. 11, § 2º, prevê que o resultado do estudo de caso fundamentará PAEE e PEI.",
    feedbackAcerto: "Você identificou os documentos pedagógicos centrais da política atual sem confundi-los com laudo ou contrato clínico.",
    feedbackErro: "A correta é PAEE e PEI. As demais transformam o estudo de caso em documento médico ou mecanismo de redução curricular.",
    dicaBanca: "Estudo de caso → PAEE + PEI."
  },
  {
    pergunta: "Segundo o Decreto nº 12.686/2025, PAEE e PEI têm a finalidade de orientar:",
    alternativas: [
      "o atendimento clínico da pessoa com TEA e a escolha das terapias que deverão ser realizadas dentro da escola.",
      "a substituição das atividades da classe comum por propostas individualizadas desenvolvidas pelo professor do AEE.",
      "a definição do diagnóstico educacional, do nível de suporte e das metas terapêuticas da pessoa acompanhada.",
      "a relação contratual com o profissional de apoio e os procedimentos de saúde autorizados durante o período escolar, com registro das responsabilidades de cada setor.",
      "o trabalho na classe comum, o AEE, as atividades colaborativas no estabelecimento e as ações de articulação intersetorial."
    ],
    correta: 4,
    explicacao: "O art. 12 atribui a PAEE e PEI função orientadora do trabalho na classe comum, no AEE, das atividades colaborativas e das ações intersetoriais.",
    feedbackAcerto: "Você reconheceu que os planos conectam os diferentes contextos educacionais e não servem para separar o estudante do currículo comum.",
    feedbackErro: "A correta corresponde às quatro finalidades do decreto. As demais atribuem natureza clínica ou substitutiva aos documentos.",
    dicaBanca: "PAEE/PEI articulam classe comum + AEE + colaboração + intersetorialidade."
  },
  {
    pergunta: "Na regulamentação da Portaria MEC nº 421/2026, é correto afirmar que:",
    alternativas: [
      "o PAEE registra o estudo de caso e o PEI contempla o plano de acessibilização curricular, com medidas didático-pedagógicas e avaliativas quando indicadas.",
      "o PAEE é o plano clínico do estudante e o PEI se limita ao registro administrativo da matrícula no AEE.",
      "o PEI é elaborado pelo profissional de saúde, enquanto o PAEE é feito pelo professor regente sem participação do AEE.",
      "o PAEE substitui o projeto político-pedagógico e o PEI substitui o planejamento curricular da turma durante sua vigência e orienta todas as avaliações do estudante.",
      "os dois documentos têm finalidade idêntica e devem reproduzir o mesmo conteúdo em formulários separados."
    ],
    correta: 0,
    explicacao: "A Portaria MEC nº 421/2026 detalha o PAEE como registro do estudo de caso e o PEI como documento de acessibilização curricular, incluindo medidas curriculares, didático-pedagógicas e avaliativas.",
    feedbackAcerto: "Você distinguiu a função específica dos dois documentos dentro da mesma lógica inclusiva.",
    feedbackErro: "A correta corresponde à Portaria. As demais medicalizam, separam indevidamente os profissionais ou transformam os planos em substitutos do PPP e do currículo.",
    dicaBanca: "PAEE registra o estudo de caso; PEI detalha acessibilização curricular."
  },
  {
    pergunta: "Uma rede de ensino considera excessivo manter formulários separados de PAEE e PEI. Segundo a Portaria MEC nº 421/2026:",
    alternativas: [
      "a rede deve manter os dois documentos separados porque a unificação é vedada em qualquer hipótese.",
      "a rede pode adotar documento único que contemple as finalidades de PAEE e PEI, respeitados os critérios mínimos estabelecidos.",
      "a rede pode eliminar o PAEE se o estudante tiver profissional de apoio escolar em todas as atividades e o PEI registrar os apoios utilizados.",
      "a rede pode substituir os dois documentos pelo laudo médico e pela avaliação biopsicossocial da deficiência.",
      "a unificação é permitida para estudantes com altas habilidades, ficando estudantes com deficiência ou TEA em formulários separados."
    ],
    correta: 1,
    explicacao: "A Portaria nº 421/2026 permite documento único que contemple as finalidades do PAEE e do PEI, desde que sejam observados os critérios mínimos.",
    feedbackAcerto: "Você identificou flexibilidade administrativa sem perder as funções pedagógicas obrigatórias dos documentos.",
    feedbackErro: "A correta é a possibilidade de documento único com critérios mínimos. As demais eliminam documentos por laudo, apoio ou tipo de público.",
    dicaBanca: "Pode unificar o formulário; não pode apagar as finalidades de PAEE e PEI."
  },
  {
    pergunta: "Uma escola decide disponibilizar profissional de apoio escolar sem relacionar sua atuação ao PAEE e ao PEI. Segundo o marco vigente, essa prática deve ser revista porque o profissional:",
    alternativas: [
      "deve seguir prescrições da equipe de saúde, que prevalecem sobre os documentos pedagógicos da escola.",
      "deve trabalhar com plano próprio e independente para evitar interferência da equipe pedagógica no vínculo com o estudante.",
      "atua em consonância com PAEE e PEI, articulando seu apoio às estratégias e necessidades identificadas pedagogicamente.",
      "deve utilizar o PEI nas atividades acadêmicas e ignorá-lo em situações de comunicação, higiene e locomoção.",
      "atua com base no diagnóstico clínico, enquanto PAEE e PEI se destinam ao trabalho do professor do AEE."
    ],
    correta: 2,
    explicacao: "O Decreto nº 12.686/2025 determina que o profissional de apoio atue em consonância com PAEE e PEI.",
    feedbackAcerto: "Você identificou que o apoio integra um planejamento pedagógico maior e não funciona como serviço paralelo definido por diagnóstico.",
    feedbackErro: "A correta é a articulação com PAEE e PEI. As demais separam o apoio da equipe pedagógica ou subordinam a atuação à prescrição clínica.",
    dicaBanca: "Profissional de apoio precisa estar conectado ao planejamento educacional do estudante."
  },
  {
    pergunta: "Quanto à formação prevista no Decreto nº 12.686/2025, com alterações de 2025, assinale a alternativa correta.",
    alternativas: [
      "Professor do AEE e profissional de apoio escolar precisam ter a mesma formação continuada mínima de cento e oitenta horas.",
      "O profissional de apoio precisa ter licenciatura e o professor do AEE pode atuar com formação de nível médio acompanhada de curso específico de trezentas e sessenta horas em educação especial inclusiva.",
      "O professor do AEE precisa de formação continuada de cento e oitenta horas e o profissional de apoio de trezentas e sessenta horas.",
      "O professor do AEE deve possuir formação docente e formação continuada mínima de trezentas e sessenta horas; o profissional de apoio, nível médio e formação continuada mínima de cento e oitenta horas.",
      "Ambos podem atuar sem formação específica durante todo o período em que houver supervisão direta da equipe pedagógica da unidade."
    ],
    correta: 3,
    explicacao: "O Decreto nº 12.773/2025 fixou 360 horas de formação continuada para professor do AEE e 180 horas para profissional de apoio, além das formações iniciais próprias de cada função.",
    feedbackAcerto: "Você acertou dois números que a banca pode inverter. A função docente exige habilitação para docência; o apoio tem formação inicial mínima de nível médio.",
    feedbackErro: "A correta combina 360h e 180h com os requisitos iniciais correspondentes. As demais trocam cargas ou formações.",
    dicaBanca: "Decore: AEE 360h; apoio escolar 180h."
  },
  {
    pergunta: "A Lei nº 15.249/2025 ampliou medidas de acessibilidade comunicacional. No campo educacional, a LBI passou a prever:",
    alternativas: [
      "substituição da comunicação oral por pictogramas para todos os estudantes com TEA matriculados no AEE.",
      "uso de pranchas de pictogramas condicionado à incapacidade de alfabetização do estudante avaliada pela equipe escolar.",
      "comunicação aumentativa de alta tecnologia como recurso obrigatório em toda escola que possua estudante com deficiência e apresente demanda de comunicação em atividades pedagógicas.",
      "pranchas padronizadas nacionalmente, com os mesmos símbolos e vocabulário em todos os contextos escolares.",
      "sistemas de comunicação aumentativa e alternativa de baixa tecnologia no AEE para estudantes com necessidades complexas de comunicação."
    ],
    correta: 4,
    explicacao: "A Lei nº 15.249/2025 acrescentou à LBI previsão de sistemas de comunicação aumentativa e alternativa de baixa tecnologia no AEE para estudantes com necessidades complexas de comunicação.",
    feedbackAcerto: "Você identificou a atualização de 2025 sem restringi-la ao diagnóstico de TEA ou transformá-la em recurso uniforme para todos.",
    feedbackErro: "A correta reproduz o novo inciso XIX do art. 28 da LBI. As demais impõem uso universal, padronização ou critérios não previstos.",
    dicaBanca: "CAA é recurso de acessibilidade para necessidade comunicacional, não rótulo automático associado ao TEA."
  },
  {
    pergunta: "Em uma atividade de Ciências, um estudante com TEA participa pouco das discussões orais, mas demonstra compreensão por meio de escrita e escolha de imagens. A conduta pedagógica mais inclusiva é:",
    alternativas: [
      "permitir diferentes formas de expressão alinhadas ao objetivo da atividade e utilizar essas evidências para ampliar progressivamente sua participação.",
      "dispensá-lo das atividades coletivas e avaliar seu desempenho por tarefas individuais durante todo o bimestre.",
      "exigir resposta oral idêntica à dos colegas, pois utilizar outro meio reduziria o nível acadêmico da atividade.",
      "transferir a avaliação de sua aprendizagem ao profissional de apoio escolar, que conhece melhor suas formas de comunicação e pode registrar os resultados no lugar do professor.",
      "atribuir nota pela presença e pela tentativa de participação, deixando o domínio do conteúdo fora da avaliação."
    ],
    correta: 0,
    explicacao: "Inclusão envolve remover barreiras de comunicação sem abandonar o objetivo acadêmico. Formas diversas de expressão podem produzir evidências válidas da mesma aprendizagem.",
    feedbackAcerto: "Você manteve a expectativa curricular e flexibilizou o meio de participação, que é uma diferença central entre acessibilidade e redução de exigência.",
    feedbackErro: "A correta amplia os meios de expressão preservando o objetivo. As demais segregam, exigem um único canal comunicativo, transferem a docência ou deixam de avaliar a aprendizagem.",
    dicaBanca: "Adapte o acesso e a expressão sem abandonar o que o estudante precisa aprender."
  },
  {
    pergunta: "Um estudante com TEA apresenta sofrimento intenso em mudanças inesperadas de rotina. A escola planeja uma visita externa. Qual estratégia pedagógica é mais adequada?",
    alternativas: [
      "retirar o estudante da visita para evitar qualquer situação que possa alterar sua rotina habitual.",
      "antecipar informações sobre a mudança, utilizar apoios visuais ou outros recursos pertinentes e planejar estratégias para participação no evento.",
      "manter a mudança em segredo até o momento da saída para estimular adaptação espontânea a situações imprevisíveis.",
      "substituir a visita por atividade individual na sala de recursos, pois experiências externas não integram a inclusão escolar.",
      "condicionar a participação à presença de familiar durante todo o evento, ainda que a escola possa organizar os apoios necessários e antecipar a mudança de rotina."
    ],
    correta: 1,
    explicacao: "Antecipação, previsibilidade e recursos de acessibilidade podem reduzir barreiras diante de mudanças sem excluir o estudante das experiências da turma.",
    feedbackAcerto: "Você escolheu adaptar a participação em vez de proteger por exclusão. A estratégia considera necessidade individual e mantém o direito de participar.",
    feedbackErro: "A correta planeja previsibilidade e apoio. As demais evitam a atividade, aumentam a imprevisibilidade ou transferem a responsabilidade à família.",
    dicaBanca: "Inclusão diante de mudança: preparar e apoiar, não excluir."
  },
  {
    pergunta: "Em sala, um estudante com TEA utiliza prancha de comunicação para responder perguntas e fazer escolhas. Um professor sugere retirar o recurso para estimular fala oral. A decisão mais adequada é:",
    alternativas: [
      "retirar gradualmente a prancha, pois recursos de comunicação podem impedir o desenvolvimento de outras formas de expressão.",
      "permitir a prancha no AEE, mantendo a comunicação oral como padrão obrigatório na classe comum.",
      "preservar o recurso de comunicação quando ele amplia acesso, expressão e participação, articulando seu uso ao planejamento educacional.",
      "substituir a prancha por respostas dadas pelo profissional de apoio quando o estudante demonstrar dificuldade para selecionar símbolos.",
      "limitar o recurso a situações sociais, porque respostas acadêmicas precisam ser produzidas por fala ou escrita convencional."
    ],
    correta: 2,
    explicacao: "Comunicação aumentativa e alternativa é recurso de acessibilidade. Quando favorece expressão e participação, deve ser integrada às atividades e ao planejamento, e não retirada para forçar um canal específico.",
    feedbackAcerto: "Você reconheceu comunicação como direito de participação. O recurso não é um obstáculo a ser removido por princípio.",
    feedbackErro: "A correta preserva o recurso útil. As demais restringem, substituem a voz do estudante ou impõem modalidades convencionais como condição de aprendizagem.",
    dicaBanca: "CAA dá voz ao estudante; não é prêmio nem obstáculo ao ensino."
  },
  {
    pergunta: "Uma avaliação pretende verificar compreensão de relações causais em História. Para estudante com TEA que apresenta barreira importante na produção escrita extensa, mas argumenta adequadamente por meio de organização visual e fala apoiada, a melhor adaptação é:",
    alternativas: [
      "reduzir o número de relações causais exigidas e atribuir o mesmo conceito final utilizado para os demais estudantes, compensando a dificuldade de produção escrita.",
      "substituir o conteúdo de História por atividade de habilidades sociais para evitar sobrecarga durante a avaliação.",
      "avaliar participação e comportamento, pois dificuldades de escrita impedem aferir o domínio do conteúdo curricular.",
      "oferecer forma acessível de demonstrar as relações causais, preservando os critérios centrais de aprendizagem da atividade.",
      "dispensar a avaliação formal e utilizar a presença nas aulas como evidência suficiente do desenvolvimento acadêmico."
    ],
    correta: 3,
    explicacao: "Acessibilidade avaliativa busca remover a barreira do meio de resposta sem alterar indevidamente o construto avaliado. Se o objetivo é raciocínio causal, a escrita extensa pode não ser essencial.",
    feedbackAcerto: "Você distinguiu adaptação de acesso de redução curricular. O estudante continua demonstrando a mesma aprendizagem por uma forma de expressão mais acessível.",
    feedbackErro: "A correta preserva critérios acadêmicos. As demais reduzem objetivos, substituem o currículo ou deixam de produzir evidência da aprendizagem.",
    dicaBanca: "Pergunte: o que é o objetivo da avaliação e o que é apenas barreira do formato?"
  },
  {
    pergunta: "Durante atividades mais ruidosas, um estudante com TEA costuma sair do lugar, tapar os ouvidos e perder a sequência da tarefa. Antes de interpretar a conduta como desobediência, a equipe pedagógica deve:",
    alternativas: [
      "aplicar consequência disciplinar consistente para que o comportamento não seja reforçado pela retirada temporária da atividade.",
      "transferir o estudante para turma menor, pois a reação demonstra incompatibilidade com ambientes coletivos de aprendizagem.",
      "solicitar à família intervenção clínica antes de permitir sua participação em novas atividades com maior nível de ruído e aguardar orientação externa à escola.",
      "determinar que o profissional de apoio mantenha o estudante sentado até a finalização da tarefa planejada pela turma.",
      "analisar barreiras e condições do contexto, identificar o que desencadeia a dificuldade e planejar recursos ou ajustes que favoreçam participação."
    ],
    correta: 4,
    explicacao: "Uma leitura inclusiva procura compreender a relação entre comportamento, barreiras do ambiente e necessidades de apoio. O estudo do contexto orienta intervenções mais adequadas que punição ou exclusão.",
    feedbackAcerto: "Você tratou a situação como informação sobre uma possível barreira e não como falha moral do estudante.",
    feedbackErro: "A correta investiga contexto e planeja apoio. As demais punem, segregam, medicalizam ou impõem contenção da participação sem compreender a causa.",
    dicaBanca: "Comportamento também pode sinalizar barreira; investigue antes de punir."
  },
  {
    pergunta: "Um professor percebe que determinado interesse intenso de um estudante com TEA pode ajudá-lo a iniciar uma sequência de Matemática. Uma utilização pedagogicamente adequada desse interesse é:",
    alternativas: [
      "usá-lo como ponte para engajamento e construção de novos conhecimentos, sem limitar o currículo a esse único tema.",
      "organizar todo o currículo anual em torno do interesse, evitando conteúdos que não despertem motivação imediata.",
      "transformar o interesse em recompensa concedida depois que o estudante conclui tarefas escolares sem adaptações.",
      "evitar mencionar o tema para impedir reforço de padrões restritivos e incentivar interesses considerados mais adequados.",
      "atribuir ao profissional de apoio a tarefa de trabalhar esse interesse fora da classe enquanto a turma segue o currículo."
    ],
    correta: 0,
    explicacao: "Interesses do estudante podem funcionar como mediadores de engajamento, desde que não reduzam o currículo nem se tornem condição para toda aprendizagem.",
    feedbackAcerto: "Você usou uma característica individual como recurso pedagógico sem transformar o estudante no próprio interesse.",
    feedbackErro: "A correta emprega o interesse como ponte. As demais restringem o currículo, usam o tema de modo punitivo ou segregam o trabalho.",
    dicaBanca: "Interesse pode abrir a porta do conteúdo; não precisa virar a sala inteira."
  },
  {
    pergunta: "Em trabalho em grupo, colegas passam a responder por um estudante com TEA antes que ele tenha tempo de utilizar seu recurso de comunicação. A intervenção docente mais adequada é:",
    alternativas: [
      "manter a dinâmica, pois a ajuda dos colegas reduz o tempo de espera e aumenta a produtividade do grupo.",
      "organizar turnos e tempo de resposta, orientar os colegas a aguardar e garantir que o estudante participe por sua própria forma de comunicação.",
      "retirar o estudante do grupo e permitir que faça a atividade individualmente para evitar constrangimento diante dos colegas.",
      "autorizar que o profissional de apoio responda em nome do estudante quando o grupo estiver com dificuldade de compreender sua comunicação e o tempo da atividade estiver reduzido.",
      "avaliar o grupo pelo produto final, deixando a forma de participação de cada integrante fora dos objetivos pedagógicos."
    ],
    correta: 1,
    explicacao: "Participação inclusiva exige preservar a voz e o tempo do estudante. Apoio entre pares não deve substituir sua expressão ou tomada de decisão.",
    feedbackAcerto: "Você identificou uma barreira atitudinal sutil: ajudar demais também pode silenciar. O professor precisa estruturar condições reais de participação.",
    feedbackErro: "A correta garante tempo, turnos e comunicação própria. As demais substituem a voz do estudante ou o segregam.",
    dicaBanca: "Inclusão não é falar pelo estudante; é criar condições para que ele participe."
  },
  {
    pergunta: "Uma escola pretende excluir estudante com TEA de feira científica porque acredita que o movimento do evento poderá causar desconforto. A decisão mais alinhada à educação inclusiva é:",
    alternativas: [
      "manter a exclusão, desde que a escola ofereça atividade acadêmica equivalente no mesmo horário.",
      "permitir participação se a família assumir integralmente o acompanhamento e os riscos durante o evento.",
      "planejar, com o estudante e a família quando pertinente, apoios, previsibilidade, espaços de regulação e formas de participação compatíveis com suas necessidades.",
      "transferir a apresentação para o profissional de apoio, deixando o estudante presente no local sem responsabilidade sobre o projeto e com participação predominantemente observacional.",
      "reduzir o projeto do estudante a atividade de observação para diminuir exigências de interação com visitantes e colegas."
    ],
    correta: 2,
    explicacao: "Atividades culturais, científicas e sociais integram a experiência escolar. O caminho inclusivo é remover barreiras e planejar apoios, não excluir preventivamente.",
    feedbackAcerto: "Você escolheu planejamento de participação em vez de segregação por antecipação de risco.",
    feedbackErro: "A correta combina apoio e participação. As demais excluem, transferem responsabilidade à família ou retiram protagonismo acadêmico do estudante.",
    dicaBanca: "Não presuma incapacidade; planeje condições de participação."
  },
  {
    pergunta: "A família de estudante com TEA conhece estratégias que funcionam bem em casa e compartilha essas informações com a escola. Qual postura é mais adequada?",
    alternativas: [
      "usar as informações familiares como instruções obrigatórias, mesmo quando não se ajustarem ao contexto e aos objetivos escolares.",
      "desconsiderar as estratégias de casa, pois decisões educacionais precisam ser tomadas sem influência de experiências familiares.",
      "transferir à família a escolha de currículo, critérios avaliativos e carga horária do AEE para garantir participação efetiva.",
      "considerar as contribuições da família e do estudante no estudo de caso, articulando-as à análise pedagógica e ao contexto escolar.",
      "solicitar que a família aplique em casa as estratégias escolares antes de a equipe decidir se elas poderão ser utilizadas na instituição."
    ],
    correta: 3,
    explicacao: "A política vigente garante envolvimento do estudante e da família no estudo de caso. As informações trazidas por eles devem dialogar com a análise pedagógica, não substituir a responsabilidade profissional da escola.",
    feedbackAcerto: "Você encontrou o equilíbrio entre participação e responsabilidade técnica. A família contribui com conhecimento valioso sem assumir o lugar da equipe escolar.",
    feedbackErro: "A correta articula contribuições e análise pedagógica. As demais impõem ou descartam a família, ou transferem a ela funções da escola.",
    dicaBanca: "Participação familiar é colaboração, não terceirização da responsabilidade pedagógica."
  },
  {
    pergunta: "Analise as afirmações: I. A pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais. II. A CIPTEA tem validade de cinco anos e é revalidada com o mesmo número. III. A oferta do AEE pode ser condicionada a laudo médico conclusivo. IV. O estudo de caso fundamenta PAEE e PEI. V. A necessidade de profissional de apoio escolar é avaliada pelo estudo de caso e não depende de documento de saúde. Está correto o que se afirma em:",
    alternativas: [
      "I, II e III.",
      "I, III e IV.",
      "II, III, IV e V.",
      "I, II, III e V.",
      "I, II, IV e V."
    ],
    correta: 4,
    explicacao: "As afirmações I, II, IV e V estão corretas. A III está errada: o marco vigente proíbe condicionar a garantia do AEE a diagnóstico, laudo, relatório ou outro documento de profissional de saúde.",
    feedbackAcerto: "Você integrou a Lei Berenice Piana, a CIPTEA e a política educacional inclusiva atual sem confundir regras de identificação civil com critérios educacionais de apoio.",
    feedbackErro: "A resposta correta é I, II, IV e V. A única incorreta é a III, porque transforma laudo clínico em requisito educacional de acesso ao AEE.",
    dicaBanca: "Questão integradora: CIPTEA pode exigir relatório para emissão; AEE não pode exigir laudo para ser garantido."
  }
];
