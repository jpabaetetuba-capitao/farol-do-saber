// Banco de questões — Educação do Campo (2026)
// Base principal: LDB art. 28; Decreto nº 7.352/2010; Diretrizes CNE e PRONERA.
// Questões autorais em nível de concurso para professor.

const educacaoCampo = [
  {
    pergunta: "Uma escola está situada no perímetro urbano da sede municipal, mas aproximadamente 85% de seus estudantes pertencem a comunidades ribeirinhas, extrativistas e de agricultura familiar. À luz do Decreto nº 7.352/2010, essa instituição:",
    alternativas: [
      "não pode ser considerada escola do campo, pois a classificação dependeria da localização definida pelo IBGE e do endereço da sede administrativa.",
      "pode ser considerada escola do campo, porque a definição também alcança escola urbana que atenda predominantemente populações do campo.",
      "pode receber ações de Educação do Campo, mas juridicamente permanece fora do conceito de escola do campo por estar em área urbana e, nessa leitura, a composição socioterritorial dos estudantes teria valor pedagógico restrito, sem efeito na classificação da escola.",
      "só será escola do campo se transferir sua sede administrativa para área rural e mantiver as turmas anexas na zona urbana.",
      "depende de reconhecimento individual do MEC, pois o Decreto não utiliza a composição do público atendido como critério."
    ],
    correta: 1,
    explicacao: "O Decreto nº 7.352/2010 considera escola do campo tanto a situada em área rural quanto a situada em área urbana que atenda predominantemente populações do campo.",
    feedbackAcerto: "Você identificou uma das pegadinhas mais importantes do Decreto: a localização física não é o único critério jurídico para caracterizar escola do campo.",
    feedbackErro: "A correta admite escola urbana que atenda predominantemente populações do campo. As demais reduzem a definição à localização ou criam procedimentos que o Decreto não exige.",
    dicaBanca: "Escola do campo pode estar em área urbana se o público atendido for predominantemente do campo."
  },
  {
    pergunta: "Para os efeitos do Decreto nº 7.352/2010, qual grupo integra expressamente a noção de populações do campo?",
    alternativas: [
      "estudantes urbanos matriculados em cursos técnicos de agropecuária, independentemente de vínculo com o meio rural.",
      "empresários do setor agroindustrial cuja atividade econômica tenha sede fora do perímetro urbano.",
      "qualquer morador de Município com território rural, ainda que sua existência material não guarde relação com o trabalho no campo.",
      "servidores públicos lotados em escolas rurais, ainda que residam e produzam suas condições materiais de existência em área urbana e essa leitura usaria vínculo funcional com a escola como critério de pertencimento às populações do campo e para caracterizar sua inserção socioterritorial perante a política educacional.",
      "agricultores familiares, extrativistas, pescadores artesanais, ribeirinhos, assentados, acampados, trabalhadores assalariados rurais, quilombolas, caiçaras, povos da floresta, caboclos e outros sujeitos definidos pelo vínculo material com o meio rural."
    ],
    correta: 4,
    explicacao: "O art. 1º, § 1º, I, apresenta uma definição ampla e plural das populações do campo, ligada às formas de vida e produção material no meio rural.",
    feedbackAcerto: "Você reconheceu que o Decreto não reduz os povos do campo a agricultores familiares. Ele enumera diversos grupos e ainda mantém cláusula aberta para outros sujeitos com vínculo material com o meio rural.",
    feedbackErro: "A correta reúne os grupos previstos no Decreto. Os demais itens utilizam localização administrativa, emprego ou setor econômico como substitutos indevidos da definição.",
    dicaBanca: "Populações do campo = diversidade social + produção das condições materiais no meio rural."
  },
  {
    pergunta: "Uma rede de ensino trata agricultores familiares, quilombolas, ribeirinhos, pescadores artesanais e povos da floresta como um grupo cultural homogêneo para utilizar um único modelo pedagógico. Essa opção contraria diretamente o princípio de:",
    alternativas: [
      "prioridade da formação profissional agrícola sobre os demais componentes da educação básica e, por essa lógica, diferenças culturais seriam tratadas em projetos locais sem repercussão sobre a organização curricular.",
      "centralização curricular como mecanismo de garantia de igualdade entre regiões.",
      "respeito à diversidade do campo em seus aspectos sociais, culturais, ambientais, políticos, econômicos, de gênero, geração, raça e etnia.",
      "separação entre políticas de identidade e organização pedagógica, evitando interferência comunitária no currículo.",
      "padronização de metodologias como condição para controle nacional da qualidade do ensino rural."
    ],
    correta: 2,
    explicacao: "O art. 2º, I, do Decreto nº 7.352/2010 estabelece o respeito à diversidade do campo em múltiplas dimensões.",
    feedbackAcerto: "Você identificou que reconhecer Educação do Campo não significa produzir uma identidade rural única. A própria norma exige respeito à diversidade interna dos povos do campo.",
    feedbackErro: "A correta é o princípio de respeito à diversidade. As demais defendem homogeneização que não aparece no Decreto.",
    dicaBanca: "Educação do Campo reconhece diversidade; não fabrica um sujeito rural único."
  },
  {
    pergunta: "Uma escola do campo propõe um PPP que relaciona pesquisa escolar, desenvolvimento social, sustentabilidade ambiental e mundo do trabalho. Essa proposta corresponde ao Decreto nº 7.352/2010 porque ele incentiva:",
    alternativas: [
      "projetos político-pedagógicos específicos que façam da escola espaço público de investigação e articulação de experiências voltadas ao desenvolvimento social justo e ambientalmente sustentável.",
      "currículos profissionalizantes centrados em produtividade agrícola e desvinculados da formação geral da educação básica.",
      "projetos de desenvolvimento local conduzidos pela escola em substituição às políticas econômicas e sociais do poder público.",
      "planos escolares definidos por empresas rurais da região para aproximar diretamente formação e demanda do mercado de trabalho.",
      "PPP uniforme para as escolas do campo de cada Estado, permitindo adequações de calendário conforme as condições climáticas locais e o desenvolvimento territorial seria tratado como tema transversal, sem interferir na estrutura geral do projeto pedagógico."
    ],
    correta: 0,
    explicacao: "O art. 2º, II, valoriza PPPs específicos e a escola como espaço público de investigação, articulada ao desenvolvimento social economicamente justo, ambientalmente sustentável e ao mundo do trabalho.",
    feedbackAcerto: "Você identificou que o vínculo com trabalho e desenvolvimento não significa reduzir a escola a treinamento produtivo.",
    feedbackErro: "A correta preserva investigação, justiça social, sustentabilidade e mundo do trabalho. As demais subordinam a escola ao mercado ou eliminam sua autonomia pedagógica contextualizada.",
    dicaBanca: "PPP do campo: investigação + justiça social + sustentabilidade + mundo do trabalho."
  },
  {
    pergunta: "Em determinada rede, todos os professores das escolas do campo recebem a mesma formação continuada oferecida às escolas urbanas, sem qualquer abordagem sobre condições concretas de vida e trabalho das comunidades atendidas. O Decreto nº 7.352/2010 orienta:",
    alternativas: [
      "manutenção do modelo comum, porque formação específica para o campo produziria tratamento desigual entre docentes da mesma rede e as especificidades territoriais seriam trabalhadas posteriormente pelos próprios docentes em ações de adaptação local.",
      "substituição da formação pedagógica por cursos técnicos de produção rural para aproximar professor e comunidade.",
      "formação específica restrita aos gestores, mantendo professores vinculados ao programa geral da rede.",
      "desenvolvimento de políticas de formação dos profissionais da educação que considerem as condições concretas de produção e reprodução social da vida no campo.",
      "formação profissional definida por associações comunitárias, sem necessidade de articulação com políticas públicas de formação docente."
    ],
    correta: 3,
    explicacao: "O art. 2º, III, estabelece formação de profissionais da educação voltada às especificidades das escolas do campo e às condições concretas da vida no campo.",
    feedbackAcerto: "Você percebeu que igualdade não significa formação indiferente ao contexto. A própria política exige preparação profissional conectada às especificidades territoriais.",
    feedbackErro: "A correta é a formação contextualizada. As demais confundem formação específica com formação agrícola, restrição a gestores ou transferência da responsabilidade estatal.",
    dicaBanca: "Formação para o campo considera as condições concretas de vida e trabalho das comunidades."
  },
  {
    pergunta: "Uma escola ajusta conteúdos, metodologias, organização escolar e calendário aos ciclos produtivos e às condições climáticas da região. No Decreto nº 7.352/2010, essa prática se relaciona principalmente ao princípio de:",
    alternativas: [
      "substituição da base comum por conhecimentos comunitários.",
      "gestão financeira descentralizada das unidades do campo.",
      "valorização da identidade da escola do campo por meio de PPP, currículo, metodologias e flexibilidade organizacional adequados às necessidades dos estudantes.",
      "autonomia plena da unidade para reduzir carga horária quando a produção agrícola exige participação familiar dos estudantes e essa flexibilidade permitiria reorganizar a oferta segundo o calendário produtivo definido pela comunidade.",
      "educação profissional obrigatória como eixo estruturador da educação básica do campo."
    ],
    correta: 2,
    explicacao: "O art. 2º, IV, associa identidade da escola do campo a projeto pedagógico, conteúdos, metodologias e flexibilidade organizacional, incluindo calendário adequado às fases do ciclo agrícola e condições climáticas.",
    feedbackAcerto: "Você relacionou corretamente contextualização e identidade institucional, sem confundir flexibilidade com redução das exigências legais.",
    feedbackErro: "A correta descreve o princípio do art. 2º, IV. As demais substituem currículo, reduzem carga horária ou profissionalizam a modalidade sem base normativa.",
    dicaBanca: "Flexibilidade do campo adapta a organização; não elimina o direito ao currículo e à carga legal."
  },
  {
    pergunta: "Uma Secretaria afirma que qualidade educacional deve ser controlada por indicadores técnicos, sem participação de comunidades ou movimentos sociais do campo. O Decreto nº 7.352/2010 adota posição diferente ao prever:",
    alternativas: [
      "controle social da qualidade da educação escolar mediante efetiva participação da comunidade e dos movimentos sociais do campo.",
      "controle comunitário exclusivo sobre currículo, contratação de professores e aplicação dos recursos da escola.",
      "avaliação realizada pelas organizações sociais em substituição aos sistemas oficiais de ensino e aos órgãos normativos e o sistema oficial passaria a cumprir função de registro e homologação dos resultados produzidos pelas organizações participantes.",
      "consulta facultativa aos movimentos sociais, limitada a temas culturais e eventos comunitários da escola.",
      "participação popular restrita à eleição da direção, deixando planejamento e acompanhamento fora do controle social."
    ],
    correta: 0,
    explicacao: "O art. 2º, V, reconhece explicitamente o controle social da qualidade por meio da efetiva participação da comunidade e dos movimentos sociais do campo.",
    feedbackAcerto: "Você identificou participação como princípio de controle social, mas sem transferir às organizações comunitárias todas as competências do sistema de ensino.",
    feedbackErro: "A correta reproduz o princípio. As demais ou eliminam a participação ou ampliam suas competências para além do texto normativo.",
    dicaBanca: "Controle social é participação efetiva, não mera consulta simbólica."
  },
  {
    pergunta: "Qual conjunto apresenta corretamente os cinco eixos de princípios do art. 2º do Decreto nº 7.352/2010?",
    alternativas: [
      "universalização curricular; formação técnica; gestão empresarial; produtividade; avaliação externa.",
      "território; profissionalização agrícola; centralização pedagógica; ensino remoto; financiamento rural e os demais elementos ligados à identidade escolar apareceriam como estratégias complementares de implementação da política.",
      "acesso; transporte; merenda; infraestrutura; avaliação de desempenho.",
      "currículo nacional; calendário único; formação geral; controle administrativo; integração produtiva.",
      "diversidade; PPP específico e desenvolvimento sustentável; formação profissional contextualizada; identidade/flexibilidade da escola; controle social com participação comunitária."
    ],
    correta: 4,
    explicacao: "Os cinco incisos do art. 2º articulam diversidade, PPP contextualizado, formação dos profissionais, identidade/flexibilidade e controle social.",
    feedbackAcerto: "Você reconheceu a estrutura normativa completa, em vez de reunir políticas importantes que pertencem a outros artigos do Decreto.",
    feedbackErro: "A correta sintetiza os cinco incisos do art. 2º. As demais listas misturam ações administrativas, infraestrutura e conceitos que não compõem esse conjunto de princípios.",
    dicaBanca: "Art. 2º: diversidade + PPP + formação + identidade/flexibilidade + controle social."
  },
  {
    pergunta: "O art. 28 da LDB, na redação vigente, determina que os sistemas de ensino promovam adaptações na educação básica para a população rural. Entre elas está:",
    alternativas: [
      "redução da base curricular comum quando os saberes comunitários forem considerados suficientes para a formação local e o contexto territorial seria considerado em projetos complementares desenvolvidos fora dos componentes curriculares centrais.",
      "conteúdos e metodologias apropriados às reais necessidades e interesses dos alunos das escolas do campo, com possibilidade de uso da Pedagogia da Alternância.",
      "substituição do calendário de 200 dias por calendário produtivo local definido pelas associações de agricultores.",
      "oferta obrigatória de formação técnica agrícola no ensino fundamental e no ensino médio das escolas do campo.",
      "organização idêntica à escola urbana, alterando-se os horários de entrada e saída em épocas de colheita e de maior dificuldade de deslocamento."
    ],
    correta: 1,
    explicacao: "A Lei nº 14.767/2023 atualizou o art. 28, I, da LDB e incluiu expressamente a possibilidade de uso da Pedagogia da Alternância.",
    feedbackAcerto: "Você identificou a atualização legislativa de 2023 e preservou a ideia de adequação curricular sem reduzir o direito aos conhecimentos escolares.",
    feedbackErro: "A correta corresponde ao inciso I. As demais transformam adequação em redução curricular, profissionalização compulsória ou calendário sem limites legais.",
    dicaBanca: "Desde 2023, a Pedagogia da Alternância aparece expressamente no art. 28 da LDB."
  },
  {
    pergunta: "Além de conteúdos e metodologias adequados, o art. 28 da LDB prevê:",
    alternativas: [
      "currículo definido por organizações produtivas locais e certificação profissional obrigatória ao final do ensino médio e a articulação com as práticas locais ficaria concentrada na parte diversificada definida pelo sistema de ensino.",
      "financiamento diferenciado por aluno e contratação prioritária de docentes residentes no território.",
      "substituição da avaliação escolar por acompanhamento comunitário e projetos de desenvolvimento territorial.",
      "organização escolar própria, inclusive calendário adequado às fases do ciclo agrícola e às condições climáticas, e adequação à natureza do trabalho na zona rural.",
      "dispensa de frequência em períodos produtivos, compensada por atividades familiares reconhecidas como tempo escolar."
    ],
    correta: 3,
    explicacao: "Os incisos II e III do art. 28 tratam da organização escolar própria, calendário adequado e adequação à natureza do trabalho na zona rural.",
    feedbackAcerto: "Você distinguiu adaptação organizacional legítima de dispensa de frequência ou substituição das responsabilidades escolares.",
    feedbackErro: "A correta reúne os incisos II e III. As demais criam mecanismos que o art. 28 não prevê.",
    dicaBanca: "Art. 28: currículo/metodologia + organização/calendário + natureza do trabalho rural."
  },
  {
    pergunta: "Uma escola pretende utilizar Pedagogia da Alternância e a direção afirma que essa metodologia deixou de ter base normativa nacional após a reforma do ensino médio. Essa afirmação está:",
    alternativas: [
      "correta, porque a Alternância passou a depender de autorização excepcional do Conselho Estadual de Educação.",
      "correta para a educação básica, permanecendo válida nos cursos superiores de formação de professores por norma específica.",
      "correta para escolas públicas, embora instituições comunitárias ainda possam utilizá-la em programas próprios.",
      "incorreta nas EFAs e CFRs, porque a legislação limitaria a Alternância aos modelos dos Centros Familiares de Formação permanecendo as demais escolas do campo vinculadas à organização convencional prevista em seus regimentos e calendários.",
      "incorreta, pois a LDB passou a mencionar expressamente a Pedagogia da Alternância em 2023 e o CNE mantém Diretrizes Curriculares específicas para a metodologia."
    ],
    correta: 4,
    explicacao: "A Lei nº 14.767/2023 incorporou a Alternância ao art. 28 da LDB, e a Resolução CNE/CP nº 1/2023 estabelece Diretrizes Curriculares da Pedagogia da Alternância.",
    feedbackAcerto: "Você identificou que a metodologia ganhou reforço normativo recente, e não perdeu validade.",
    feedbackErro: "A correta combina LDB e norma do CNE. As demais limitam territorial ou institucionalmente a Alternância sem fundamento.",
    dicaBanca: "Alternância tem base na LDB e diretriz nacional específica de 2023."
  },
  {
    pergunta: "Em uma experiência de Alternância, o Tempo Comunidade é tratado como período sem intencionalidade formativa, destinado apenas à permanência do estudante em casa. Essa compreensão:",
    alternativas: [
      "é adequada quando a escola registra as atividades como estudo domiciliar e mantém avaliações no Tempo Escola.",
      "é compatível com a Alternância se a família acompanhar o estudante e assinar relatórios de participação.",
      "reduz a proposta, porque os diferentes tempos e espaços formativos devem articular experiência, investigação, comunidade e conhecimentos sistematizados.",
      "é recomendável nos anos iniciais, pois a investigação territorial deve ser reservada às etapas posteriores da educação básica.",
      "corresponde à LDB, que menciona Alternância como forma de calendário, mas não como metodologia de articulação formativa e as atividades comunitárias seriam tratadas como tarefas complementares sem contabilização formativa equivalente ao tempo escolar."
    ],
    correta: 2,
    explicacao: "A Pedagogia da Alternância articula tempos e espaços distintos como partes do processo formativo, não como simples divisão administrativa do calendário.",
    feedbackAcerto: "Você identificou que Tempo Comunidade precisa ter intencionalidade educativa e relação com o Tempo Escola.",
    feedbackErro: "A correta reconhece a articulação formativa. As demais reduzem a Alternância a presença física, assinatura familiar ou divisão temporal.",
    dicaBanca: "Alternância não é férias intercaladas; os dois tempos são formativos."
  },
  {
    pergunta: "Uma escola do campo deseja trabalhar práticas produtivas tradicionais da comunidade em Ciências. Qual abordagem melhor atende ao art. 6º do Decreto nº 7.352/2010?",
    alternativas: [
      "promover diálogo entre saberes próprios da comunidade e saberes acadêmicos, construindo proposta contextualizada sem substituir um pelo outro.",
      "usar os conhecimentos comunitários como motivação inicial e descartá-los quando começar o conteúdo científico formal porque a função dos saberes locais seria aproximar inicialmente o estudante do tema antes da sistematização acadêmica.",
      "substituir os saberes acadêmicos pelos conhecimentos tradicionais, pois a Educação do Campo prioriza a experiência local.",
      "separar as duas formas de conhecimento em componentes distintos para impedir interferência entre ciência e cultura.",
      "utilizar materiais produzidos na comunidade como referência principal, evitando livros didáticos de circulação nacional."
    ],
    correta: 0,
    explicacao: "O art. 6º exige materiais e conteúdos relacionados aos conhecimentos das populações do campo, considerando saberes próprios em diálogo com os saberes acadêmicos.",
    feedbackAcerto: "Você evitou dois extremos: negar o saber local ou substituir o conhecimento sistematizado por ele.",
    feedbackErro: "A correta é o diálogo entre saberes. As demais hierarquizam, isolam ou eliminam uma das dimensões previstas na norma.",
    dicaBanca: "Contextualizar = colocar saber local e conhecimento acadêmico em diálogo."
  },
  {
    pergunta: "Sobre os recursos didáticos destinados à Educação do Campo, o Decreto nº 7.352/2010 determina que:",
    alternativas: [
      "sejam produzidos por universidades públicas para garantir validação científica e uniformidade técnica dos conteúdos.",
      "tenham conteúdo nacional uniforme e sejam complementados oralmente pelo professor com referências locais.",
      "sejam restritos a materiais impressos, preservando as tecnologias digitais para programas específicos de inclusão digital e as tecnologias digitais seriam usadas como suporte de acesso, não como parte dos recursos contextualizados da política.",
      "atendam às especificidades formativas das populações do campo e incluam conhecimentos das comunidades em diálogo com saberes acadêmicos.",
      "sejam aprovados por organizações sociais do campo antes de qualquer avaliação pelo sistema de ensino."
    ],
    correta: 3,
    explicacao: "O art. 6º abrange recursos didáticos, pedagógicos, tecnológicos, culturais e literários e exige contextualização com os saberes das comunidades e acadêmicos.",
    feedbackAcerto: "Você reconheceu que a norma não reduz contextualização a um suplemento oral do professor nem limita o tipo de recurso.",
    feedbackErro: "A correta reproduz a lógica do art. 6º. As demais impõem exclusividade institucional, tecnológica ou procedimental inexistente.",
    dicaBanca: "Material do campo precisa dialogar com a realidade sem abandonar o conhecimento acadêmico."
  },
  {
    pergunta: "Na formação de professores para a Educação do Campo, o Decreto nº 7.352/2010 admite:",
    alternativas: [
      "metodologias de educação a distância e formação concomitante à atuação profissional, inclusive com Pedagogia da Alternância e atividades de ensino, pesquisa e extensão.",
      "formação a distância voltada aos gestores, mantendo professores em percursos presenciais de formação continuada.",
      "formação concomitante à atuação em caráter emergencial e sem integração com pesquisa ou extensão.",
      "Pedagogia da Alternância voltada aos estudantes da educação básica, sem aplicação na formação dos profissionais.",
      "formação técnica rural como substituta da licenciatura quando o professor pertence à própria comunidade."
    ],
    correta: 1,
    explicacao: "O art. 5º permite EaD, formação concomitante à atuação e metodologias adequadas, inclusive Alternância, ensino, pesquisa e extensão.",
    feedbackAcerto: "Você identificou que o Decreto flexibiliza estratégias formativas sem reduzir exigências profissionais ou substituir formação docente por experiência rural.",
    feedbackErro: "A correta corresponde ao art. 5º. As demais restringem instrumentos ou criam substituições de formação não previstas.",
    dicaBanca: "Formação docente do campo pode combinar atuação, Alternância, ensino, pesquisa e extensão."
  },
  {
    pergunta: "Quanto aos cursos de licenciatura das instituições públicas de ensino superior, o Decreto nº 7.352/2010 determina que seus projetos político-pedagógicos incorporem:",
    alternativas: [
      "processos de interação entre campo e cidade e organização própria dos espaços e tempos da formação, em consonância com as diretrizes nacionais.",
      "habilitação agrícola obrigatória para todo licenciando que possa trabalhar em Município com população rural.",
      "estágio curricular integralmente realizado em escola do campo, qualquer que seja a área de formação do curso.",
      "currículo específico de Educação do Campo separado das demais licenciaturas e sem componentes comuns de formação docente e essa organização seria planejada pelo sistema sem necessidade de relação direta com o território ou a trajetória dos licenciandos.",
      "disciplinas sobre produção rural como requisito único para caracterizar formação adequada às escolas do campo."
    ],
    correta: 0,
    explicacao: "O art. 5º, § 3º, fala expressamente em processos de interação campo-cidade e organização dos espaços e tempos formativos nos PPPs das licenciaturas públicas.",
    feedbackAcerto: "Você identificou uma obrigação de formação docente mais sofisticada que a simples inclusão de disciplina sobre meio rural.",
    feedbackErro: "A correta reproduz a diretriz. As demais transformam contextualização em habilitação agrícola ou estágio obrigatório universal.",
    dicaBanca: "Licenciatura pública: interação campo-cidade + organização dos tempos e espaços formativos."
  },
  {
    pergunta: "Uma rede mantém turma dos anos iniciais com estudantes de idades e graus de conhecimento diferentes e conclui que sua existência é, por definição, irregular. Segundo o Decreto nº 7.352/2010:",
    alternativas: [
      "a turma deve ser extinta, porque a heterogeneidade etária seria compatível com a EJA, e não com turmas regulares dos anos iniciais.",
      "a turma é permitida em escolas privadas comunitárias organizadas por Alternância e com autorização específica do sistema.",
      "a organização pode ser assegurada quando necessária ao cumprimento do direito à educação, especialmente nos anos iniciais do ensino fundamental.",
      "a turma exige transformação automática em classe de EJA para compatibilizar idades e percursos escolares.",
      "a organização é tolerada por um ano, devendo o ente encaminhar os estudantes à escola nucleada mais próxima."
    ],
    correta: 3,
    explicacao: "O art. 7º, I, prevê organização de turmas com alunos de diferentes idades e graus de conhecimento de uma mesma etapa, especialmente nos anos iniciais, quando necessária para garantir o direito à educação.",
    feedbackAcerto: "Você reconheceu que multietariedade/multisseriação não é irregularidade automática; precisa ser analisada no contexto de garantia do direito.",
    feedbackErro: "A correta corresponde ao art. 7º. As demais impõem fechamento, EJA ou prazo inexistente.",
    dicaBanca: "Turma heterogênea pode ser estratégia legítima para garantir o direito à educação."
  },
  {
    pergunta: "Um Município decide ofertar EJA para trabalhadores rurais apenas na sede urbana, em horário incompatível com suas jornadas de trabalho. O Decreto nº 7.352/2010 orienta, para redução do analfabetismo:",
    alternativas: [
      "priorizar cursos remotos padronizados para evitar diferenciação de horário entre públicos da mesma rede.",
      "ofertar políticas de EJA nas localidades onde as pessoas vivem e trabalham, respeitando suas especificidades de horários e calendário.",
      "concentrar a EJA em escolas maiores, porque a oferta descentralizada é reservada ao ensino fundamental regular.",
      "substituir EJA por qualificação profissional de curta duração quando houver baixa escolarização de adultos.",
      "ofertar alfabetização no campo e transferir a continuidade dos estudos para a sede municipal após essa etapa e a continuidade poderia ocorrer por transporte à sede municipal depois da etapa inicial de escolarização."
    ],
    correta: 1,
    explicacao: "O art. 3º, I, vincula redução do analfabetismo à oferta de EJA onde as pessoas vivem e trabalham, respeitando horários e calendário.",
    feedbackAcerto: "Você identificou que acesso formal a uma vaga distante e incompatível com a vida laboral não satisfaz a diretriz específica do Decreto.",
    feedbackErro: "A correta reproduz a orientação do art. 3º. As demais centralizam ou fragmentam o direito.",
    dicaBanca: "EJA do campo deve dialogar com lugar, trabalho, horários e calendário."
  },
  {
    pergunta: "Entre os objetivos destinados a superar defasagens históricas na Educação do Campo, o Decreto nº 7.352/2010 prevê:",
    alternativas: [
      "redução do currículo comum para ampliar a permanência dos estudantes no território.",
      "priorização do ensino técnico em substituição à EJA nas áreas com maior índice de analfabetismo.",
      "concentração de investimentos digitais em escolas urbanas que atendam estudantes provenientes do campo e as escolas do campo utilizariam as estruturas urbanas da rede como polos de acesso comunitário às tecnologias disponíveis.",
      "transferência da responsabilidade por infraestrutura para associações e cooperativas rurais.",
      "fornecimento de energia elétrica, água potável e saneamento, além de inclusão digital com acesso a computadores, internet e outras tecnologias."
    ],
    correta: 4,
    explicacao: "O art. 3º inclui condições estruturais básicas e inclusão digital entre os mecanismos de superação das defasagens históricas.",
    feedbackAcerto: "Você identificou que a Política de Educação do Campo envolve também infraestrutura e acesso tecnológico, não só currículo.",
    feedbackErro: "A correta reúne dois incisos do art. 3º. As demais reduzem direitos ou deslocam responsabilidade pública.",
    dicaBanca: "Educação do Campo também cobra energia, água, saneamento e inclusão digital."
  },
  {
    pergunta: "Sobre a Educação de Jovens e Adultos na Política de Educação do Campo, assinale a alternativa correta.",
    alternativas: [
      "deve ser ofertada de forma independente da formação profissional para preservar o caráter escolar da EJA.",
      "destina-se à alfabetização e ao ensino fundamental, enquanto a formação profissional seria desenvolvida em programa próprio.",
      "o Decreto prevê fomento da EJA com integração da qualificação social e profissional ao ensino fundamental e articulação com desenvolvimento sustentável do campo.",
      "a qualificação profissional substitui os componentes da escolarização quando os estudantes já possuem experiência laboral rural.",
      "a integração com trabalho ocorre no PRONERA e não integra as ações gerais da Política de Educação do Campo e os vínculos entre escolarização e qualificação ficariam restritos aos projetos ligados diretamente à reforma agrária."
    ],
    correta: 2,
    explicacao: "Os arts. 3º e 4º articulam EJA com qualificação social e profissional e desenvolvimento sustentável do campo.",
    feedbackAcerto: "Você reconheceu integração entre escolarização e qualificação sem transformar formação profissional em substituta da educação básica.",
    feedbackErro: "A correta corresponde ao Decreto. As demais separam artificialmente EJA e qualificação ou reduzem a escolarização.",
    dicaBanca: "EJA do campo pode integrar qualificação social e profissional."
  },
  {
    pergunta: "Uma escola serve alimentação escolar totalmente desvinculada dos hábitos alimentares locais, mesmo existindo condições de considerar a cultura alimentar da comunidade. O Decreto nº 7.352/2010 estabelece que:",
    alternativas: [
      "o cardápio deve seguir padrão único nacional para garantir igualdade nutricional entre estudantes.",
      "a cultura alimentar local pode aparecer em projetos pedagógicos, mas não interfere na alimentação escolar.",
      "o ente pode utilizar hábitos locais quando os produtos forem produzidos pela agricultura familiar da própria comunidade e os cardápios de outras comunidades permaneceriam organizados a partir do padrão geral definido pela rede de ensino.",
      "a alimentação deve considerar os hábitos do contexto socioeconômico-cultural-tradicional predominante em que a escola está inserida.",
      "essa adequação é recomendação administrativa do PRONERA, não regra da Política de Educação do Campo."
    ],
    correta: 3,
    explicacao: "O art. 8º determina alimentação escolar de acordo com hábitos alimentares do contexto socioeconômico-cultural-tradicional predominante.",
    feedbackAcerto: "Você identificou que a contextualização também alcança alimentação escolar, e não apenas currículo e calendário.",
    feedbackErro: "A correta reproduz o art. 8º. As demais tratam cultura alimentar como elemento meramente pedagógico ou opcional.",
    dicaBanca: "Educação do Campo contextualiza até a alimentação escolar."
  },
  {
    pergunta: "Entre as ações que podem receber apoio técnico e financeiro da União no âmbito da Política de Educação do Campo está:",
    alternativas: [
      "educação superior com prioridade para formação de professores do campo, além de construção/adequação de escolas, formação de profissionais, recursos didáticos e transporte adequado às especificidades.",
      "transporte e infraestrutura seriam as ações financiáveis, enquanto currículo, materiais e formação permaneceriam a cargo dos sistemas locais.",
      "a política de apoio alcançaria a educação básica, ficando a educação superior fora do Decreto nº 7.352/2010.",
      "formação profissional agrícola compulsória em todas as escolas que recebam complementação financeira da União.",
      "criação de rede federal própria para substituir a oferta estadual e municipal em territórios rurais."
    ],
    correta: 1,
    explicacao: "O art. 4º apresenta um conjunto amplo de ações apoiáveis, da educação infantil à superior, incluindo infraestrutura, formação, materiais e transporte.",
    feedbackAcerto: "Você reconheceu a abrangência vertical e material das ações previstas no Decreto.",
    feedbackErro: "A correta reúne ações expressas. As demais limitam a política ou inventam federalização e profissionalização compulsória.",
    dicaBanca: "Apoio da União no campo vai muito além de transporte."
  },
  {
    pergunta: "Quanto ao transporte escolar na Educação do Campo, o Decreto nº 7.352/2010 determina que sua oferta:",
    alternativas: [
      "seja padronizada nacionalmente, assegurando o mesmo tempo máximo de deslocamento para todos os territórios.",
      "priorize o deslocamento para escolas urbanas, por oferecerem maior variedade de serviços educacionais.",
      "seja considerada medida suficiente para justificar fechamento e nucleação de escolas pequenas.",
      "o financiamento do transporte alcançaria matrículas dos anos finais do ensino fundamental e do ensino médio.",
      "respeite especificidades geográficas, culturais e sociais, bem como limites de idade e etapas escolares."
    ],
    correta: 4,
    explicacao: "O art. 4º, IX, vincula transporte escolar às especificidades geográficas, culturais e sociais e aos limites de idade e etapa.",
    feedbackAcerto: "Você identificou que transporte não é uma solução neutra aplicável da mesma forma a qualquer território e faixa etária.",
    feedbackErro: "A correta corresponde ao Decreto. As demais transformam transporte em justificativa universal de centralização.",
    dicaBanca: "Transporte escolar deve ser analisado segundo território, idade e etapa."
  },
  {
    pergunta: "Uma Secretaria deseja fechar uma escola do campo por baixa matrícula. Já possui justificativa financeira e realizou reunião com famílias. Antes do fechamento, a LDB exige ainda, entre os elementos do procedimento:",
    alternativas: [
      "homologação pelo Ministério da Educação e parecer do Conselho Tutelar da localidade.",
      "aprovação por maioria absoluta da Câmara Municipal e consulta ao Ministério Público.",
      "manifestação do órgão normativo do respectivo sistema de ensino, que considerará a justificativa, o diagnóstico do impacto e a manifestação da comunidade escolar.",
      "autorização do INCRA, quando houver estudantes ligados à agricultura familiar ou a assentamentos.",
      "comprovação de transporte escolar gratuito para todos os estudantes, requisito que substitui a análise de impacto e, uma vez garantido o deslocamento, os demais efeitos sociais e pedagógicos seriam tratados durante a implementação da medida."
    ],
    correta: 2,
    explicacao: "O parágrafo único do art. 28 da LDB, incluído pela Lei nº 12.960/2014, estabelece manifestação do órgão normativo, justificativa da Secretaria, diagnóstico de impacto e manifestação da comunidade.",
    feedbackAcerto: "Você identificou o procedimento jurídico completo e percebeu que consulta à comunidade, sozinha, não basta.",
    feedbackErro: "A correta apresenta os elementos legais. As demais criam autoridades ou requisitos substitutivos não previstos.",
    dicaBanca: "Fechamento: órgão normativo + justificativa + diagnóstico de impacto + comunidade."
  },
  {
    pergunta: "Uma prefeitura afirma que oferecer transporte para uma escola urbana elimina a necessidade de avaliar impactos do fechamento da escola local. Essa interpretação é:",
    alternativas: [
      "incorreta, porque acesso físico é uma dimensão do direito; a LDB exige diagnóstico de impacto e manifestação comunitária antes do fechamento.",
      "correta se o tempo de deslocamento estiver abaixo do limite fixado pelo sistema de ensino.",
      "correta nos anos finais e no ensino médio, pois a proteção contra fechamento seria voltada à educação infantil e aos anos iniciais ficando a reorganização das etapas posteriores condicionada predominantemente à existência de transporte adequado e vaga disponível.",
      "incorreta se houver comunidade quilombola ou indígena, porque escolas do campo comuns seguiriam procedimento administrativo geral.",
      "correta quando a escola urbana oferecer biblioteca, laboratório e professores habilitados em todas as áreas."
    ],
    correta: 0,
    explicacao: "Transporte pode contribuir para acesso, mas não substitui o procedimento jurídico específico de fechamento nem elimina impactos territoriais, sociais e pedagógicos.",
    feedbackAcerto: "Você evitou a falsa equivalência entre vaga transportada e preservação integral do direito à educação contextualizada.",
    feedbackErro: "A correta preserva o diagnóstico e a manifestação comunitária. As demais criam exceções que não existem no parágrafo único do art. 28.",
    dicaBanca: "Transporte não apaga o dever de avaliar o impacto do fechamento."
  },
  {
    pergunta: "Na análise de um processo de nucleação escolar no campo, qual postura é mais compatível com as diretrizes nacionais?",
    alternativas: [
      "considerar matrícula, custo por aluno, idade, etapa, distância, tempo de deslocamento, impactos territoriais e condições pedagógicas antes da decisão.",
      "priorizar o menor custo administrativo, porque a oferta de transporte compensa diferenças territoriais.",
      "concentrar automaticamente todas as turmas multisseriadas em escolas maiores para elevar a padronização curricular.",
      "usar a nucleação como regra para Educação Infantil e anos iniciais, deixando oferta comunitária para localidades sem estrada.",
      "avaliar a segurança do transporte como critério decisivo, deixando currículo e pertencimento comunitário para a etapa de implementação."
    ],
    correta: 1,
    explicacao: "As normas de Educação do Campo orientam que reorganizações territoriais considerem direito à educação, etapa, deslocamento, comunidade e condições pedagógicas, e não apenas eficiência administrativa.",
    feedbackAcerto: "Você escolheu uma análise multidimensional, coerente com a proteção territorial da Educação do Campo.",
    feedbackErro: "A correta não absolutiza custo nem transporte. As demais reduzem a decisão a uma variável administrativa.",
    dicaBanca: "Nucleação não é sinônimo de eficiência; precisa ser analisada como política educacional territorial."
  },
  {
    pergunta: "Segundo as Diretrizes Complementares da Educação Básica do Campo, a oferta de Educação Infantil e dos anos iniciais do Ensino Fundamental deve privilegiar:",
    alternativas: [
      "escolas nucleadas urbanas, desde que disponham de transporte adaptado e alimentação escolar.",
      "o atendimento nas próprias comunidades rurais, evitando deslocamentos desnecessários e avaliando com cautela processos de nucleação.",
      "escolas de maior porte, independentemente da distância, para garantir equipes docentes mais amplas.",
      "alternância obrigatória entre escola comunitária e unidade central do Município.",
      "oferta domiciliar orientada quando a comunidade tiver número reduzido de crianças."
    ],
    correta: 4,
    explicacao: "As diretrizes nacionais valorizam a oferta próxima às comunidades, especialmente para crianças e estudantes dos anos iniciais, e tratam nucleação/deslocamento com cautela.",
    feedbackAcerto: "Você identificou que idade e etapa importam na decisão territorial. Quanto menores os estudantes, maior a relevância da proximidade comunitária.",
    feedbackErro: "A correta prioriza atendimento nas comunidades. As demais transformam centralização em regra.",
    dicaBanca: "Educação Infantil e anos iniciais pedem forte proteção à oferta nas próprias comunidades."
  },
  {
    pergunta: "Uma escola urbana possui turmas anexas que funcionam em comunidades rurais e atendem populações do campo. Segundo o Decreto nº 7.352/2010:",
    alternativas: [
      "as turmas anexas podem ser consideradas do campo nas condições previstas na definição legal, ainda que a sede da escola esteja em área urbana.",
      "as turmas seriam urbanas por derivação, pois a classificação acompanharia a localização da sede administrativa.",
      "as turmas só podem ser consideradas do campo se possuírem código escolar independente da escola-sede.",
      "a vinculação urbana impede acesso a qualquer política de Educação do Campo, mesmo que o público seja predominantemente rural e o acesso às ações da política dependeria da criação de unidade administrativa própria para cada turma situada em área rural.",
      "a classificação depende da modalidade de ensino ofertada e não da população atendida."
    ],
    correta: 0,
    explicacao: "O § 2º do art. 1º admite como do campo turmas anexas vinculadas a escolas de sede urbana que funcionem nas condições da definição do § 1º.",
    feedbackAcerto: "Você reconheceu que o Decreto protege a realidade do atendimento, não apenas o endereço administrativo da escola-sede.",
    feedbackErro: "A correta corresponde ao § 2º. As demais criam exigência de código próprio ou classificação automática pela sede.",
    dicaBanca: "Turma anexa pode ser do campo mesmo com escola-sede urbana."
  },
  {
    pergunta: "Uma escola do campo usa o mesmo calendário urbano, embora parte dos estudantes fique impossibilitada de deslocar-se durante a cheia anual. Qual solução está mais de acordo com a legislação?",
    alternativas: [
      "manter o calendário porque uniformidade da rede prevalece sobre condições territoriais.",
      "cancelar os dias de cheia e compensar a frequência sem reposição de tempo escolar.",
      "transformar as atividades do período em férias, reduzindo o ano letivo para evitar reprovação por falta porque a reorganização do período letivo seria entendida como compensação suficiente diante das condições climáticas da região.",
      "adequar a organização e o calendário às condições climáticas e produtivas locais, preservando as exigências legais de tempo escolar.",
      "transferir temporariamente todos os estudantes para uma escola urbana enquanto durar a cheia."
    ],
    correta: 3,
    explicacao: "Tanto a LDB quanto o Decreto nº 7.352/2010 admitem calendário adequado às fases produtivas e condições climáticas, sem converter flexibilidade em redução ilegal do tempo escolar.",
    feedbackAcerto: "Você aplicou a contextualização organizacional a um problema territorial concreto.",
    feedbackErro: "A correta ajusta calendário com preservação das exigências legais. As demais mantêm barreira ou reduzem o direito.",
    dicaBanca: "Calendário do campo pode ser diferente; carga legal continua sendo direito."
  },
  {
    pergunta: "Sobre o PRONERA, assinale a alternativa correta.",
    alternativas: [
      "é programa voltado à alfabetização de adultos nos assentamentos, com continuidade dos estudos assumida pelas redes regulares.",
      "integra a Política de Educação do Campo e busca oferecer educação formal a jovens e adultos do público da reforma agrária em todos os níveis de ensino, além de melhorar acesso e desenvolvimento dos assentamentos.",
      "é programa do MEC destinado ao financiamento de licenciaturas em Educação do Campo nas universidades federais.",
      "atende todas as populações do campo exatamente com os mesmos critérios utilizados pelo Decreto para definir o conceito amplo de povos do campo.",
      "substitui as redes regulares de ensino nos territórios de reforma agrária por projetos educacionais vinculados ao INCRA."
    ],
    correta: 2,
    explicacao: "O Decreto nº 7.352/2010 integra o PRONERA à Política de Educação do Campo e define objetivos ligados à educação formal em todos os níveis, acesso e desenvolvimento dos assentamentos.",
    feedbackAcerto: "Você identificou o alcance do programa sem confundi-lo com a definição geral das populações do campo.",
    feedbackErro: "A correta sintetiza os arts. 11 e 12. As demais restringem, universalizam indevidamente o público ou substituem as redes regulares.",
    dicaBanca: "PRONERA = reforma agrária + educação formal em vários níveis + desenvolvimento dos assentamentos."
  },
  {
    pergunta: "Qual alternativa melhor diferencia populações do campo e público do PRONERA?",
    alternativas: [
      "as expressões são juridicamente equivalentes e abrangem os mesmos grupos em qualquer ação pública.",
      "populações do campo abrangeriam grupos tradicionais, enquanto o PRONERA atenderia trabalhadores assalariados rurais em geral.",
      "PRONERA é mais amplo que Educação do Campo, pois inclui estudantes urbanos sem vínculo com áreas de reforma agrária.",
      "a definição de populações do campo é territorialmente ampla; o PRONERA possui público próprio relacionado à reforma agrária, assentamentos e demais categorias previstas em suas regras.",
      "populações do campo seria conceito pedagógico, enquanto o PRONERA teria definição normativa própria e operacional."
    ],
    correta: 4,
    explicacao: "O Decreto usa uma definição ampla para populações do campo e, em artigos próprios, define beneficiários do PRONERA vinculados à política de reforma agrária.",
    feedbackAcerto: "Você percebeu que dois conceitos relacionados não são sinônimos. Essa distinção evita ampliar automaticamente o PRONERA a todo sujeito do campo.",
    feedbackErro: "A correta separa a política ampla do programa específico. As demais igualam ou invertem os conceitos.",
    dicaBanca: "Todo público do PRONERA dialoga com o campo, mas nem toda população do campo é público automático do PRONERA."
  },
  {
    pergunta: "Entre os projetos que o PRONERA pode apoiar está:",
    alternativas: [
      "alfabetização e escolarização de jovens e adultos, formação profissional articulada ao nível médio, cursos técnicos, graduação, pós-graduação, formação de educadores, materiais e estudos/pesquisas.",
      "alfabetização e EJA do ensino fundamental formariam o núcleo do programa, enquanto cursos técnicos e superiores seriam financiados em outras ações.",
      "licenciaturas e pós-graduação para professores de assentamentos constituiriam o eixo de formação superior do programa.",
      "formação profissional de nível médio e superior, excluídos projetos de escolarização básica e produção de materiais didáticos e os cursos voltados à educação básica seriam considerados ações preparatórias fora do núcleo financiável do programa.",
      "qualquer curso privado escolhido pelo beneficiário, mediante repasse individual de bolsa integral pelo INCRA."
    ],
    correta: 0,
    explicacao: "O art. 14 do Decreto apresenta um leque amplo de projetos, da alfabetização à pós-graduação, além de formação de educadores, materiais e pesquisa.",
    feedbackAcerto: "Você identificou que o PRONERA é muito mais abrangente do que um programa de alfabetização.",
    feedbackErro: "A correta reúne áreas previstas no art. 14. As demais restringem ou transformam o programa em financiamento individual irrestrito.",
    dicaBanca: "PRONERA vai da alfabetização à pós-graduação."
  },
  {
    pergunta: "Atualmente, a execução do PRONERA ocorre por meio de parcerias. Segundo as informações oficiais do INCRA, essas parcerias podem envolver:",
    alternativas: [
      "instituições de ensino públicas e privadas sem fins lucrativos, além de governos estaduais e municipais.",
      "instituições privadas com fins lucrativos escolhidas diretamente pelos estudantes beneficiários.",
      "universidades federais e institutos federais seriam os executores do programa por se tratar de política nacional.",
      "Estados e Municípios com assentamentos anteriores ao Decreto seriam os entes aptos a participar das parcerias.",
      "organizações da sociedade civil ligadas a movimentos de reforma agrária seriam as entidades executoras prioritárias."
    ],
    correta: 2,
    explicacao: "O INCRA informa que o PRONERA é executado por parcerias com instituições de ensino públicas e privadas sem fins lucrativos, governos estaduais e municipais.",
    feedbackAcerto: "Você identificou a natureza cooperativa do programa sem restringi-lo a universidades federais ou movimentos sociais.",
    feedbackErro: "A correta corresponde à execução institucional atual. As demais limitam ou privatizam indevidamente o programa.",
    dicaBanca: "PRONERA trabalha por parcerias institucionais, não por escolha individual irrestrita de cursos."
  },
  {
    pergunta: "Uma proposta do PRONERA prevê curso superior para beneficiários de assentamentos e formação continuada de educadores. Isso é:",
    alternativas: [
      "incompatível, porque o programa encerra sua atuação no ensino médio.",
      "compatível se o curso superior for licenciatura em área ligada às necessidades educacionais e produtivas dos assentamentos.",
      "compatível, pois o programa apoia formação em diferentes níveis e áreas, incluindo superior e pós-graduação, conforme suas regras.",
      "incompatível para educadores, porque formação docente é atribuição exclusiva do MEC.",
      "compatível mediante incorporação do projeto à política regular de uma universidade pública participante do programa."
    ],
    correta: 1,
    explicacao: "O PRONERA apoia formação superior, pós-graduação e formação de educadores/professores vinculados ao seu público e objetivos.",
    feedbackAcerto: "Você reconheceu a amplitude formativa do programa e não o reduziu ao ensino básico.",
    feedbackErro: "A correta é a compatibilidade. As demais criam restrições de nível, área ou instituição não previstas.",
    dicaBanca: "Não reduza PRONERA à alfabetização ou ao técnico."
  },
  {
    pergunta: "Em 2025, o INCRA publicou versão revisada do Manual de Operações do PRONERA. Para uma questão de concurso, a consequência mais adequada dessa informação é:",
    alternativas: [
      "o Manual revogou o Decreto nº 7.352/2010 e passou a ser a única base normativa do programa.",
      "as regras operacionais atuais devem ser lidas em conjunto com o marco legal do programa, sem substituir o Decreto que institui seus objetivos e estrutura.",
      "o PRONERA deixou de integrar a Política de Educação do Campo e passou a ser programa autônomo do INCRA.",
      "as categorias do Decreto teriam sido substituídas por critérios definidos em cada edital anual e no manual operacional vigente.",
      "a atualização operacional tornou o programa temporário e condicionado à vigência de cada projeto aprovado."
    ],
    correta: 3,
    explicacao: "O Manual atualizado orienta a operação do programa, mas não substitui o Decreto nº 7.352/2010 como marco normativo estruturante.",
    feedbackAcerto: "Você distinguiu regulamentação operacional de base legal, habilidade importante em questões de políticas públicas.",
    feedbackErro: "A correta articula normas em níveis distintos. As demais atribuem ao Manual efeitos revogatórios ou estruturais que ele não possui.",
    dicaBanca: "Manual orienta operação; Decreto estrutura política e objetivos."
  },
  {
    pergunta: "Uma escola do campo desenvolve projeto de agricultura sustentável em que estudantes analisam solo, água, práticas produtivas, história local e organização comunitária. A proposta se aproxima do trabalho como princípio educativo porque:",
    alternativas: [
      "substitui conteúdos escolares por atividades produtivas que preparam diretamente para o mercado rural e passaria a avaliar o êxito do projeto pela capacidade de inserção dos estudantes nas cadeias produtivas locais.",
      "articula trabalho, conhecimento, cultura e transformação da realidade como dimensões da formação humana.",
      "transforma a escola em unidade produtiva e mede aprendizagem pelo resultado econômico do projeto.",
      "prioriza saberes empíricos e reduz a necessidade de conhecimentos científicos sistematizados.",
      "direciona os estudantes à permanência no campo como resultado esperado da formação vinculada ao território e ao trabalho rural."
    ],
    correta: 2,
    explicacao: "Na Educação do Campo, o trabalho pode ser compreendido como dimensão histórica, social e formativa, articulada à produção da vida e do conhecimento.",
    feedbackAcerto: "Você reconheceu uma concepção educativa de trabalho, e não mero treinamento ocupacional.",
    feedbackErro: "A correta articula formação humana e realidade. As demais reduzem trabalho a mercado, produção ou permanência compulsória no campo.",
    dicaBanca: "Trabalho como princípio educativo não é treinamento para emprego."
  },
  {
    pergunta: "Qual prática reduz indevidamente o trabalho como princípio educativo a uma visão economicista?",
    alternativas: [
      "estudar relações entre produção, tecnologia, ambiente e organização social da comunidade.",
      "investigar como mudanças técnicas afetam trabalho, território e sustentabilidade local.",
      "organizar o currículo para treinar a execução de tarefas produtivas demandadas por empregadores rurais e medir desempenho por produtividade.",
      "relacionar conhecimentos científicos às práticas produtivas e às transformações históricas do território.",
      "analisar conflitos e cooperações envolvidos na produção e distribuição dos bens na região."
    ],
    correta: 3,
    explicacao: "Reduzir trabalho a treinamento imediato para tarefas produtivas elimina sua dimensão cultural, histórica, social e formativa.",
    feedbackAcerto: "Você identificou a alternativa que transforma educação em adestramento ocupacional.",
    feedbackErro: "A correta é o treinamento exclusivo para demandas empresariais. As demais utilizam trabalho como objeto amplo de conhecimento e formação.",
    dicaBanca: "Se trabalho aparece só como emprego imediato, desconfie da redução conceitual."
  },
  {
    pergunta: "Na construção histórica da Educação do Campo, os movimentos sociais e os próprios sujeitos do campo:",
    alternativas: [
      "participaram da execução posterior das políticas definidas pelo Estado e pelas universidades, sem interferir nos fundamentos pedagógicos.",
      "tiveram papel relevante na reivindicação do direito à educação, na crítica à antiga lógica de Educação Rural e na formulação de novas referências político-pedagógicas.",
      "atuaram de forma concentrada na educação profissional, sem influência sobre currículo ou organização escolar.",
      "foram substituídos por instâncias técnicas depois das Diretrizes de 2002, que encerraram a participação social na formulação de políticas.",
      "contribuíram para expansão física das escolas, enquanto os fundamentos pedagógicos permaneceriam sob responsabilidade dos sistemas e a participação política dos movimentos seria reconhecida sem repercussão sobre currículo, gestão ou concepção de educação."
    ],
    correta: 1,
    explicacao: "A Educação do Campo está historicamente ligada às lutas sociais por direito à educação, território, reconhecimento cultural e participação na formulação pedagógica.",
    feedbackAcerto: "Você reconheceu protagonismo político e pedagógico, sem transformar movimentos sociais em gestores exclusivos do sistema.",
    feedbackErro: "A correta destaca sua participação histórica ampla. As demais reduzem a atuação a execução ou infraestrutura.",
    dicaBanca: "Educação do Campo nasce também de mobilização social e disputa por direitos."
  },
  {
    pergunta: "A mudança da antiga noção de Educação Rural para Educação do Campo pode ser sintetizada, pedagogicamente, pela passagem de:",
    alternativas: [
      "uma abordagem centrada no rural como espaço a ser adaptado ao modelo urbano para outra que reconhece sujeitos, territórios, culturas e participação na construção do direito à educação.",
      "uma escola de currículo científico para outra que substitui ciência por saberes tradicionais e experiências comunitárias.",
      "uma educação básica geral para outra destinada prioritariamente à formação técnica agrícola.",
      "uma política pública estatal para outra administrada por movimentos sociais e organizações comunitárias e as organizações comunitárias assumiriam a definição curricular e administrativa das escolas vinculadas aos seus territórios.",
      "uma escola regular para outra que funciona sem calendário, séries, avaliação ou normas comuns de ensino."
    ],
    correta: 0,
    explicacao: "A Educação do Campo desloca a visão do rural como espaço periférico e reconhece protagonismo, território, cultura, trabalho e direitos, sem abandonar o conhecimento escolar.",
    feedbackAcerto: "Você identificou uma mudança político-pedagógica, não apenas terminológica.",
    feedbackErro: "A correta apresenta a mudança de concepção. As demais criam substituição de ciência, tecnificação ou ausência de normas.",
    dicaBanca: "Campo ≠ simples novo nome para rural; muda a perspectiva sobre sujeitos e direitos."
  },
  {
    pergunta: "Uma Escola Família Agrícola organiza Tempo Escola e Tempo Comunidade, envolve famílias e relaciona investigação territorial aos componentes curriculares. Essa organização:",
    alternativas: [
      "é incompatível com o currículo comum, porque a Alternância exige currículo independente das diretrizes nacionais e os conhecimentos produzidos na comunidade precisariam ser convertidos em conteúdo escolar antes de integrar a carga formativa.",
      "é própria de programa de educação informal e não pode integrar a educação básica regular.",
      "pode ser reconhecida em cursos técnicos, sem aplicação às demais etapas da educação básica regular.",
      "depende de transformação da EFA em escola pública para ter validade educacional.",
      "é coerente com a Pedagogia da Alternância, que articula diferentes tempos, espaços, sujeitos e saberes em um processo formativo."
    ],
    correta: 4,
    explicacao: "EFAs são historicamente vinculadas à Alternância, articulando escola, família, comunidade, território e intencionalidade pedagógica.",
    feedbackAcerto: "Você identificou a essência formativa sem confundir Alternância com currículo paralelo ou educação informal.",
    feedbackErro: "A correta reconhece a articulação. As demais restringem etapas, natureza institucional ou validade curricular.",
    dicaBanca: "EFA é um exemplo clássico de Alternância, mas a metodologia não se limita a ela."
  },
  {
    pergunta: "Sobre EFAs, CFRs e Pedagogia da Alternância, assinale a alternativa correta.",
    alternativas: [
      "EFAs e CFRs são referências históricas importantes da Alternância, mas a metodologia possui diretrizes próprias e não está juridicamente restrita a esses modelos institucionais.",
      "a Alternância só pode ser usada por EFAs e CFRs porque a LDB não a autoriza em outras escolas do campo.",
      "o uso da Alternância exige que a instituição seja privada comunitária e tenha participação formal de famílias em sua administração e outras escolas poderiam utilizar experiências inspiradas no modelo, mas não a metodologia com reconhecimento normativo equivalente.",
      "CFRs podem utilizar Alternância, enquanto EFAs seguiriam organização seriada convencional definida pelo sistema.",
      "a Resolução CNE/CP nº 1/2023 retirou a Alternância da educação básica e a concentrou na formação superior."
    ],
    correta: 0,
    explicacao: "As EFAs e CFRs são referências históricas, mas a LDB e as Diretrizes de 2023 tratam a Alternância de maneira mais ampla.",
    feedbackAcerto: "Você evitou confundir origem e presença histórica da metodologia com exclusividade jurídica.",
    feedbackErro: "A correta distingue referência institucional de alcance normativo. As demais restringem a metodologia sem base atual.",
    dicaBanca: "Alternância é maior que EFA/CFR."
  },
  {
    pergunta: "Uma escola decide adotar Alternância apenas alternando duas semanas na escola e duas em casa, sem atividades orientadas, pesquisa ou articulação curricular no período comunitário. A proposta:",
    alternativas: [
      "atende à metodologia porque a duração dos dois tempos é o único elemento obrigatório da Alternância.",
      "é adequada se o estudante entregar declaração familiar comprovando presença na comunidade.",
      "é adequada quando as avaliações ocorrerem no Tempo Escola e os conteúdos forem ministrados integralmente presencialmente.",
      "descaracteriza a dimensão formativa da Alternância, pois alternar calendário sem integração pedagógica entre tempos e espaços não basta.",
      "corresponde ao modelo recomendado para evitar contabilização do Tempo Comunidade como atividade letiva."
    ],
    correta: 4,
    explicacao: "A Alternância exige intencionalidade e integração pedagógica entre tempos e espaços; a mera troca de local não constitui metodologia completa.",
    feedbackAcerto: "Você identificou que estrutura temporal e proposta pedagógica precisam caminhar juntas.",
    feedbackErro: "A correta rejeita a alternância meramente logística. As demais reduzem a metodologia a presença, declaração ou calendário.",
    dicaBanca: "O nome é Alternância, mas o núcleo é articulação formativa."
  },
  {
    pergunta: "Na denominação de uma instituição pública de ensino do campo, uma lei federal de 2025 passou a assegurar participação comunitária por meio de:",
    alternativas: [
      "referendo obrigatório de toda a população do Município antes da escolha do nome.",
      "aprovação do Conselho Nacional de Educação para nomes relacionados à memória local.",
      "elaboração, pela comunidade do campo, de lista tríplice de nomes a ser considerada pelo Poder Executivo responsável pela rede.",
      "escolha direta do nome pela associação comunitária, sem participação do poder público mantenedor.",
      "consulta facultativa realizada após a publicação do ato de denominação da escola."
    ],
    correta: 3,
    explicacao: "A Lei nº 15.215/2025 estabeleceu procedimento de participação das comunidades indígenas, quilombolas e do campo, com sugestão em lista tríplice de nomes.",
    feedbackAcerto: "Você identificou uma atualização recente que reforça participação comunitária até na denominação das instituições públicas.",
    feedbackErro: "A correta apresenta a lista tríplice. As demais criam referendo, competência nacional ou decisão unilateral.",
    dicaBanca: "Atualização 2025: comunidade participa da denominação com lista tríplice."
  },
  {
    pergunta: "Uma política estadual de Educação do Campo pretende receber apoio técnico e financeiro suplementar da União. Entre as condições previstas no art. 9º do Decreto nº 7.352/2010 está:",
    alternativas: [
      "ter currículo estadual único para todas as escolas rurais e urbanas, garantindo equivalência acadêmica.",
      "transferir a gestão das escolas do campo para consórcios intermunicipais em regiões de baixa densidade.",
      "substituir planos locais de educação por plano federal específico para os territórios rurais.",
      "prever no respectivo plano de educação diretrizes e metas para manutenção e desenvolvimento da Educação do Campo, além de estruturas técnico-pedagógicas e colegiadas nas hipóteses previstas.",
      "comprovar que todas as escolas do campo funcionam em prédio próprio e possuem matrícula mínima definida pelo MEC."
    ],
    correta: 2,
    explicacao: "O art. 9º vincula o apoio suplementar a diretrizes/metas nos planos e prevê equipes técnico-pedagógicas e instâncias colegiadas para Estados e DF.",
    feedbackAcerto: "Você reconheceu que planejamento institucional e participação integram as condições da política.",
    feedbackErro: "A correta corresponde ao art. 9º. As demais inventam currículo único, consórcios ou exigências físicas.",
    dicaBanca: "Plano de educação e estruturas de gestão/participação aparecem no art. 9º."
  },
  {
    pergunta: "Qual alternativa apresenta uma decisão pedagógica coerente com a Educação do Campo sem cair em relativismo curricular?",
    alternativas: [
      "ensinar conteúdos nacionais sem qualquer referência territorial, pois contextualização interfere na objetividade do conhecimento mantendo a contextualização reservada a projetos extracurriculares para não interferir nos objetivos curriculares comuns.",
      "articular conhecimentos acadêmicos, objetivos curriculares e problemas reais do território, preservando rigor conceitual e ampliando capacidade de compreender e transformar a realidade.",
      "trocar conteúdos acadêmicos por saberes locais em disciplinas que tratem de ambiente, trabalho ou cultura.",
      "manter conhecimentos locais restritos a feiras culturais, evitando sua presença em atividades avaliativas e projetos de investigação.",
      "definir o currículo pela utilidade econômica imediata dos conteúdos para as atividades produtivas predominantes na região."
    ],
    correta: 1,
    explicacao: "A Educação do Campo exige diálogo entre conhecimento sistematizado e realidade local, sem defender empobrecimento ou substituição curricular.",
    feedbackAcerto: "Você escolheu contextualização com rigor acadêmico, exatamente o equilíbrio necessário para uma questão difícil.",
    feedbackErro: "A correta integra currículo e território. As demais descontextualizam, substituem ciência ou subordinam currículo à utilidade econômica.",
    dicaBanca: "Contextualizar não é simplificar; é dar sentido sem reduzir rigor."
  },
  {
    pergunta: "Uma rede implementa internet de alta velocidade nas escolas do campo e permite que a comunidade próxima utilize ações de inclusão digital. Essa iniciativa:",
    alternativas: [
      "está alinhada ao Decreto nº 7.352/2010, que prevê contribuição para inclusão digital da comunidade escolar e população próxima às escolas.",
      "ultrapassa a política, porque os recursos digitais deveriam beneficiar os estudantes matriculados e as equipes das escolas.",
      "é compatível com escolas que ofereçam educação profissional e tecnológica, por sua vinculação direta com o mundo do trabalho.",
      "depende de vinculação ao PRONERA, pois inclusão digital não integra a política geral de Educação do Campo.",
      "é ação de assistência social sem relação normativa com as medidas educacionais do Decreto."
    ],
    correta: 3,
    explicacao: "O art. 3º, IV, prevê acesso a computadores, internet e outras tecnologias digitais, beneficiando comunidade escolar e população próxima.",
    feedbackAcerto: "Você identificou que inclusão digital possui alcance comunitário expresso no Decreto.",
    feedbackErro: "A correta corresponde ao art. 3º. As demais restringem o público ou deslocam a ação para outro programa.",
    dicaBanca: "Inclusão digital na Educação do Campo pode alcançar a comunidade próxima."
  },
  {
    pergunta: "Em uma escola ribeirinha, a cheia anual altera rotas, horários, alimentação disponível e atividades produtivas das famílias. Qual solução melhor integra diferentes normas da Educação do Campo?",
    alternativas: [
      "transferir a escola para a sede urbana porque alterações ambientais tornam inviável qualquer organização estável no território.",
      "adaptar calendário, transporte, alimentação e projetos pedagógicos às condições territoriais, preservando o direito ao currículo, ao tempo escolar e à participação da comunidade.",
      "reduzir o calendário durante o período da cheia e compensar a carga por atividades domésticas sem planejamento docente.",
      "manter organização urbana idêntica, porque tratamento igual significa aplicar o mesmo modelo em toda a rede.",
      "substituir ensino regular por Alternância em todos os anos, pois a presença de ciclos naturais torna essa metodologia obrigatória."
    ],
    correta: 2,
    explicacao: "O conjunto normativo permite adaptar calendário, transporte, alimentação e planejamento às especificidades, mas preserva direitos educacionais e não torna a Alternância compulsória.",
    feedbackAcerto: "Você integrou território, organização escolar e direito à aprendizagem sem usar contextualização como justificativa para redução de oferta.",
    feedbackErro: "A correta equilibra adaptação e garantia de direitos. As demais centralizam, reduzem tempo escolar ou tornam uma metodologia obrigatória.",
    dicaBanca: "Boa questão de Campo costuma exigir integrar várias dimensões, não escolher uma palavra-chave."
  },
  {
    pergunta: "Um Estado oferece excelente transporte para uma escola central, mas fecha três escolas locais sem diagnóstico de impacto e sem manifestação do órgão normativo. A política apresenta problema porque:",
    alternativas: [
      "o transporte deveria ser interestadual para justificar a centralização da oferta.",
      "o fechamento é vedado em qualquer circunstância, mesmo com procedimento legal e análise de impacto.",
      "o processo desrespeita exigências específicas da LDB para fechamento, e a qualidade do transporte não substitui o procedimento nem a análise territorial.",
      "a consulta à comunidade é dispensável quando a escola central possui melhor infraestrutura e professores especializados.",
      "a LDB exigiria diagnóstico de impacto, enquanto a manifestação do órgão normativo ficaria reservada às escolas indígenas."
    ],
    correta: 0,
    explicacao: "O fechamento não é absolutamente proibido, mas está condicionado a procedimento específico. Transporte adequado não supre diagnóstico, manifestação comunitária e órgão normativo.",
    feedbackAcerto: "Você evitou dois extremos: fechamento livre e proibição absoluta.",
    feedbackErro: "A correta identifica a falha procedimental. As demais eliminam requisitos ou tratam o fechamento como juridicamente impossível.",
    dicaBanca: "Fechamento pode ocorrer, mas não como simples ato administrativo."
  },
  {
    pergunta: "Analise as afirmações: I. Escola situada em área urbana pode ser considerada escola do campo se atender predominantemente populações do campo. II. O art. 28 da LDB admite Pedagogia da Alternância. III. O PRONERA atende automaticamente todo sujeito enquadrado na definição ampla de população do campo. IV. O Decreto admite turmas com diferentes idades e graus de conhecimento dentro de uma mesma etapa quando necessário ao direito à educação. Está correto o que se afirma em:",
    alternativas: [
      "I, II e III.",
      "I, II e IV.",
      "II, III e IV.",
      "I e III.",
      "I, III e IV."
    ],
    correta: 1,
    explicacao: "I, II e IV estão corretas. A III erra porque o PRONERA possui público próprio relacionado às políticas de reforma agrária e às regras específicas do programa.",
    feedbackAcerto: "Você integrou definição de escola do campo, LDB, multisseriação e PRONERA sem confundir política ampla com público específico de programa.",
    feedbackErro: "A correta é I, II e IV. A III é a única falsa por ampliar automaticamente o PRONERA a toda população do campo.",
    dicaBanca: "Não trate 'populações do campo' e 'beneficiários do PRONERA' como sinônimos."
  },
  {
    pergunta: "Uma política municipal pretende ser coerente com a Educação do Campo. Qual conjunto de medidas é o mais adequado?",
    alternativas: [
      "currículo urbano comum, transporte centralizado e formação geral idêntica, adicionando eventos culturais rurais ao calendário e a contextualização territorial ficaria concentrada em eventos e projetos específicos sem alterar a organização geral da rede.",
      "fechamento de pequenas escolas com base em custo, seguido de oferta de transporte e consulta comunitária posterior.",
      "currículo definido pelas atividades econômicas locais, redução da formação geral e prioridade a qualificação profissional.",
      "autonomia irrestrita das comunidades para substituir normas dos sistemas por formas educativas próprias.",
      "PPP contextualizado; diálogo entre saberes locais e acadêmicos; participação comunitária; formação específica; calendário e transporte adequados ao território; preservação dos procedimentos legais de reorganização da rede."
    ],
    correta: 4,
    explicacao: "A síntese normativa combina contextualização curricular, participação, formação, flexibilidade organizacional, território e garantia jurídica do direito à educação.",
    feedbackAcerto: "Você escolheu uma política integrada, e não uma medida isolada ou um modelo que substitua direitos escolares por particularismos.",
    feedbackErro: "A correta reúne os principais eixos da legislação. As demais confundem contextualização com padronização, redução curricular, fechamento administrativo ou autonomia sem limites.",
    dicaBanca: "Educação do Campo é uma política integrada de direito, território, qualidade e participação."
  }
];
