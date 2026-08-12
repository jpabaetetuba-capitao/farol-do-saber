// Banco de questões — Educação Escolar Quilombola (2026)
// Base: Resolução CNE/CEB nº 8/2012, LDB, Lei nº 15.215/2025, PNEERQ e Lei nº 15.388/2026.
// Questões autorais em nível de concurso para professor.

const quilombola = [
  {
    pergunta: "O Decreto nº 4.887/2003, referência utilizada nas políticas de Educação Escolar Quilombola, caracteriza as comunidades remanescentes dos quilombos como:",
    alternativas: [
      "grupos definidos por comprovação genealógica estatal e residência contínua em território rural titulado.",
      "grupos étnico-raciais segundo critérios de autoatribuição, com trajetória histórica própria, relações territoriais específicas e presunção de ancestralidade negra ligada à resistência à opressão histórica.",
      "populações rurais negras reconhecidas por cadastro administrativo, ainda que não apresentem pertencimento coletivo ou trajetória histórica própria A identidade seria reconhecida depois pela autoridade competente com base em documentos da comunidade e registros administrativos do território.",
      "comunidades identificadas pelo poder público a partir da posse formal da terra e de vínculos econômicos tradicionais.",
      "grupos cuja identidade depende de certificação territorial prévia e de prova documental de descendência de antigos quilombos."
    ],
    correta: 1,
    explicacao: "A definição jurídica privilegia autoatribuição, trajetória histórica, relações territoriais específicas e ancestralidade negra relacionada à resistência histórica.",
    feedbackAcerto: "Você identificou que pertencimento quilombola não nasce de titulação fundiária nem de teste genealógico; a autoatribuição e a trajetória coletiva são centrais.",
    feedbackErro: "A correta reúne os elementos normativos da definição. As demais transformam titulação, cadastro, residência rural ou genealogia em requisito constitutivo.",
    dicaBanca: "Não confunda identidade quilombola com título da terra."
  },
  {
    pergunta: "Uma comunidade quilombola localizada em área urbana reivindica políticas específicas de Educação Escolar Quilombola. À luz das Diretrizes Nacionais, a reivindicação:",
    alternativas: [
      "é incompatível com a modalidade, pois a Educação Escolar Quilombola integra juridicamente a Educação do Campo.",
      "pode ser atendida na educação básica, mas a comunidade urbana deve adotar currículo comum sem diferenciação territorial Nessa hipótese, a escola poderia desenvolver projetos culturais próprios, mas as normas específicas da modalidade não incidiriam integralmente.",
      "depende de comprovação de que a maior parte das famílias mantenha atividade econômica rural fora da cidade.",
      "é cabível quando a escola estiver fisicamente inserida em território oficialmente titulado, ficando as demais situações sob as regras gerais da rede.",
      "é compatível com a modalidade, pois comunidades quilombolas existem tanto no campo quanto nas cidades e devem ter suas especificidades respeitadas."
    ],
    correta: 4,
    explicacao: "As Diretrizes reconhecem comunidades quilombolas rurais e urbanas. A localização urbana não elimina identidade, território simbólico, memória ou direito à educação específica.",
    feedbackAcerto: "Você evitou reduzir quilombo a ruralidade. Essa distinção é importante porque Educação Escolar Quilombola e Educação do Campo podem se relacionar, mas não são sinônimas.",
    feedbackErro: "A resposta correta reconhece comunidades urbanas. Os demais itens condicionam o direito à ruralidade, atividade agrícola ou titulação territorial.",
    dicaBanca: "Quilombola não significa necessariamente rural."
  },
  {
    pergunta: "Segundo as Diretrizes Curriculares Nacionais, a Educação Escolar Quilombola deve ser ofertada:",
    alternativas: [
      "unicamente nas escolas situadas em territórios quilombolas reconhecidos, com matrícula exclusiva de estudantes pertencentes à comunidade.",
      "nas escolas quilombolas rurais, ficando estudantes que vivem em cidades submetidos ao currículo comum da rede.",
      "nas escolas quilombolas e também nas escolas que recebem estudantes quilombolas fora de suas comunidades de origem.",
      "em unidades específicas criadas pelos sistemas de ensino, sem possibilidade de atendimento em escolas não quilombolas.",
      "nas escolas de educação básica que possuam maioria absoluta de matrículas quilombolas, independentemente da identidade da comunidade atendida."
    ],
    correta: 2,
    explicacao: "As Diretrizes alcançam escolas quilombolas e escolas que recebem estudantes quilombolas fora de suas comunidades de origem.",
    feedbackAcerto: "Você reconheceu que o direito acompanha os estudantes e a comunidade, não ficando preso ao endereço da escola.",
    feedbackErro: "A correta expressa o alcance das Diretrizes. As outras respostas criam exclusividade territorial, rural ou de composição da matrícula.",
    dicaBanca: "A modalidade também orienta escolas fora do território que recebem estudantes quilombolas."
  },
  {
    pergunta: "Qual formulação expressa adequadamente um objetivo das Diretrizes da Educação Escolar Quilombola?",
    alternativas: [
      "orientar sistemas de ensino e projetos educativos para garantir a modalidade nas etapas e modalidades da educação básica, respeitando práticas socioculturais, políticas, econômicas e formas próprias de produção de conhecimento.",
      "organizar uma rede paralela de ensino, independente das normas gerais da educação básica e da base nacional comum.",
      "substituir o currículo comum por conhecimentos tradicionais definidos pelas lideranças locais, preservando a autonomia comunitária A organização pedagógica seria construída em torno das decisões comunitárias e validada pelo sistema ao final do processo de elaboração.",
      "uniformizar os modelos de escola quilombola para assegurar equivalência curricular entre diferentes territórios.",
      "restringir a temática quilombola às escolas que possuam reconhecimento territorial definitivo pelo poder público."
    ],
    correta: 0,
    explicacao: "As Diretrizes orientam sistemas e escolas, preservam a base comum e exigem respeito às especificidades históricas, culturais, econômicas e pedagógicas das comunidades.",
    feedbackAcerto: "Você identificou a combinação correta entre direito comum à educação e especificidade quilombola, sem criar sistema isolado.",
    feedbackErro: "A correta articula norma nacional e contextualização. As demais substituem a base comum, uniformizam comunidades ou restringem o alcance da modalidade.",
    dicaBanca: "Especificidade não significa isolamento do sistema educacional."
  },
  {
    pergunta: "A afirmação de que a Educação Escolar Quilombola requer pedagogia própria significa que:",
    alternativas: [
      "cada comunidade pode afastar as normas nacionais de educação básica quando entender que elas não correspondem à sua tradição Essa interpretação trataria a autonomia comunitária como fundamento suficiente para afastar regras gerais de currículo, avaliação e formação docente.",
      "o ensino deve priorizar conteúdos comunitários e reduzir a formação básica comum para proteger a identidade cultural.",
      "as escolas devem adotar método pedagógico único criado nacionalmente para a população quilombola.",
      "a organização pedagógica deve respeitar especificidades étnico-raciais, culturais e territoriais, articulando-as aos princípios constitucionais e à base nacional comum.",
      "o currículo deve ser definido por lideranças comunitárias sem participação dos profissionais da educação ou dos sistemas de ensino."
    ],
    correta: 3,
    explicacao: "Pedagogia própria indica contextualização e respeito às especificidades, mas as Diretrizes mantêm princípios constitucionais, base nacional comum e princípios gerais da educação básica.",
    feedbackAcerto: "Você percebeu que 'própria' não quer dizer desconectada do direito comum à educação; significa uma organização que reconhece a comunidade.",
    feedbackErro: "A correta articula especificidade e base comum. Os distratores transformam autonomia em dispensa normativa ou currículo reduzido.",
    dicaBanca: "Pedagogia própria + base comum, não uma contra a outra."
  },
  {
    pergunta: "Em uma escola quilombola, o território é tratado no currículo como mero endereço administrativo. Essa abordagem é insuficiente porque as Diretrizes compreendem o território como:",
    alternativas: [
      "elemento jurídico voltado à regularização fundiária, sem função direta na organização pedagógica.",
      "espaço econômico associado aos modos de produção, enquanto memória e identidade pertencem ao campo cultural.",
      "referência de vida, pertencimento, memória, ancestralidade, relações sociais, práticas culturais e produção histórica da comunidade.",
      "categoria geográfica utilizada para definir transporte e infraestrutura, sem repercussão na seleção de conhecimentos escolares Nessa leitura, o território orientaria decisões logísticas e de infraestrutura, enquanto identidade e memória seriam trabalhadas em projetos culturais próprios.",
      "conceito restrito às comunidades rurais, pois nas comunidades urbanas a territorialidade perde relevância educativa."
    ],
    correta: 2,
    explicacao: "O território quilombola possui dimensões materiais e simbólicas e estrutura relações de pertencimento, memória, cultura e resistência.",
    feedbackAcerto: "Você foi além da leitura cartográfica. Nas Diretrizes, território também é experiência histórica e referência pedagógica.",
    feedbackErro: "A correta apresenta a multidimensionalidade territorial. As demais reduzem o conceito à terra, economia, transporte ou ruralidade.",
    dicaBanca: "Território quilombola é geografia vivida, história e pertencimento."
  },
  {
    pergunta: "Uma escola inclui no currículo narrativas sobre lideranças locais, processos de resistência, trajetórias familiares e transformações do território. Essa prática valoriza principalmente:",
    alternativas: [
      "memória coletiva como fonte de identidade e conhecimento na formação dos estudantes.",
      "registro histórico informal, útil em atividades culturais, mas sem relação com o currículo escolar.",
      "substituição da historiografia acadêmica por versões produzidas pela comunidade.",
      "patrimônio documental oficial, pois narrativas orais ganham valor educativo depois de serem registradas por escrito.",
      "ensino de história local como componente separado dos conhecimentos nacionais e afro-brasileiros."
    ],
    correta: 0,
    explicacao: "A memória coletiva é fundamento da Educação Escolar Quilombola e pode dialogar com diferentes fontes e conhecimentos escolares.",
    feedbackAcerto: "Você reconheceu memória como componente formativo, não como adereço comemorativo ou substituto do conhecimento acadêmico.",
    feedbackErro: "A correta valoriza memória coletiva. As demais a inferiorizam, isolam ou transformam em substituição curricular.",
    dicaBanca: "Memória comunitária é conhecimento e identidade, não decoração curricular."
  },
  {
    pergunta: "Ao trabalhar ancestralidade, uma professora propõe que os estudantes investiguem vínculos entre gerações, práticas culturais, modos de viver e formas de resistência. A proposta é coerente porque ancestralidade:",
    alternativas: [
      "se limita ao estudo de antepassados biológicos e à construção de árvores genealógicas.",
      "deve ser tratada no componente História, evitando sua presença em outros campos de experiência ou áreas.",
      "possui função simbólica relevante para eventos comunitários, mas não interfere na formação escolar contemporânea A ancestralidade seria valorizada como símbolo comunitário e registro histórico, mantendo pouca influência sobre currículo, formação docente ou práticas avaliativas.",
      "deve ser comprovada documentalmente antes de ser incorporada ao projeto pedagógico da escola.",
      "articula passado, presente, pertencimento, memória e continuidade cultural, contribuindo para a construção das identidades quilombolas."
    ],
    correta: 4,
    explicacao: "Ancestralidade é relação histórica e cultural entre gerações, não simples genealogia biológica.",
    feedbackAcerto: "Você identificou sua função viva: ela conecta memória, pertencimento e continuidade cultural no presente.",
    feedbackErro: "A correta reconhece a dimensão histórica e identitária. As demais reduzem ancestralidade a biologia, disciplina, cerimônia ou prova documental.",
    dicaBanca: "Ancestralidade não é sinônimo de genealogia."
  },
  {
    pergunta: "Estudantes entrevistam pessoas mais velhas para registrar histórias da comunidade e depois confrontam os relatos com documentos e pesquisas. Essa atividade:",
    alternativas: [
      "é inadequada porque fontes orais não têm confiabilidade suficiente para integrar o currículo formal.",
      "valoriza a oralidade e a memória sem impedir o diálogo crítico com outras fontes de conhecimento.",
      "é adequada se os relatos forem transcritos e validados por pesquisador externo antes do uso escolar como fonte curricular.",
      "substitui o conteúdo científico por narrativas comunitárias, contrariando a base nacional comum.",
      "deve permanecer como atividade extracurricular para preservar a distinção entre tradição e conhecimento escolar."
    ],
    correta: 1,
    explicacao: "As Diretrizes valorizam oralidade, memória e saberes comunitários, e nada impede sua análise crítica em diálogo com documentos e pesquisas.",
    feedbackAcerto: "Você reconheceu que valorizar oralidade não significa aceitar relatos sem investigação nem excluir outras fontes.",
    feedbackErro: "A correta combina reconhecimento e análise crítica. Os distratores inferiorizam a fonte oral ou apresentam falsa oposição com conhecimento escolar.",
    dicaBanca: "Oralidade pode ser fonte, objeto de análise e meio de transmissão de saberes."
  },
  {
    pergunta: "Na Educação Escolar Quilombola, patrimônio cultural deve ser entendido como:",
    alternativas: [
      "conjunto de edificações, objetos e documentos oficialmente tombados no território da comunidade Nessa concepção, manifestações orais, celebrações e práticas sociais só integrariam o patrimônio depois de registro ou reconhecimento institucional.",
      "bens materiais preservados pela comunidade, ficando festas, práticas e conhecimentos classificados como manifestações sociais.",
      "referências históricas reconhecidas por órgãos de patrimônio, mesmo quando não possuem significado atual para a comunidade.",
      "conjunto de bens materiais e imateriais, práticas, saberes, celebrações, memórias e referências que expressam a identidade e a história da comunidade.",
      "acervo escolar formado por registros sobre a comunidade, independentemente da participação dos próprios quilombolas em sua construção."
    ],
    correta: 3,
    explicacao: "O patrimônio cultural envolve bens materiais e imateriais e inclui práticas, conhecimentos, celebrações e referências da memória coletiva.",
    feedbackAcerto: "Você não reduziu patrimônio a prédios ou documentos oficiais; a dimensão imaterial é decisiva nesse tema.",
    feedbackErro: "A correta contempla bens e referências materiais e imateriais. As demais dependem de tombamento, oficialização ou acervo escolar.",
    dicaBanca: "Patrimônio cultural não é só o que pode ser tocado."
  },
  {
    pergunta: "Na construção do Projeto Político-Pedagógico de uma escola quilombola, a participação da comunidade deve ser compreendida como:",
    alternativas: [
      "etapa consultiva posterior à redação técnica, destinada a validar decisões já tomadas pela equipe escolar.",
      "mecanismo de escolha dos conteúdos culturais, enquanto objetivos, avaliação e gestão permanecem sob decisão exclusiva dos especialistas Nessa leitura, a comunidade poderia sugerir temas e atividades, mas o núcleo das decisões pedagógicas permaneceria sob responsabilidade técnica exclusiva da escola.",
      "reunião anual para aprovação do calendário e das atividades comemorativas vinculadas à identidade da comunidade.",
      "procedimento facultativo quando a direção e o corpo docente pertencem à própria comunidade quilombola.",
      "processo efetivo de construção coletiva do PPP, envolvendo escola e comunidade na definição de compromissos, identidade e organização pedagógica."
    ],
    correta: 4,
    explicacao: "O PPP é elemento estruturante das Diretrizes e sua construção deve ser participativa, envolvendo coletivo escolar e comunidade.",
    feedbackAcerto: "Você identificou participação como parte da elaboração do projeto, e não como simples homologação do texto pronto.",
    feedbackErro: "A correta trata a comunidade como sujeito da construção do PPP. Os demais itens reduzem sua participação a consulta, cultura ou calendário.",
    dicaBanca: "PPP quilombola não é documento feito para a comunidade; é construído com ela."
  },
  {
    pergunta: "O PPP de uma escola quilombola deve estar intrinsecamente relacionado:",
    alternativas: [
      "à matriz curricular estadual, sendo as referências comunitárias incluídas em projetos complementares.",
      "à realidade histórica, regional, política, sociocultural e econômica da comunidade quilombola.",
      "às atividades econômicas predominantes, que devem orientar a escolha dos componentes de maior carga horária.",
      "ao calendário cultural da comunidade, sem interferência sobre gestão, avaliação e organização curricular.",
      "aos conteúdos nacionais definidos para a rede, preservando neutralidade diante de conflitos históricos do território."
    ],
    correta: 2,
    explicacao: "As Diretrizes vinculam o PPP à realidade histórica, regional, política, sociocultural e econômica das comunidades.",
    feedbackAcerto: "Você reconheceu que o PPP contextualizado vai além de inserir festas ou conteúdos locais: ele se relaciona com a realidade ampla da comunidade.",
    feedbackErro: "A correta reúne as dimensões indicadas nas Diretrizes. As demais restringem o projeto à matriz estadual, economia ou calendário cultural.",
    dicaBanca: "PPP contextualizado envolve história, política, sociedade, cultura e economia."
  },
  {
    pergunta: "Uma equipe afirma que inserir a história e os saberes quilombolas no currículo exige diminuir os conhecimentos da base comum. A melhor interpretação das Diretrizes é:",
    alternativas: [
      "o currículo deve preservar a formação básica comum e articular conhecimentos escolares às referências históricas, culturais e territoriais quilombolas.",
      "o currículo quilombola possui autonomia para retirar componentes que não tenham aplicação imediata no território.",
      "os saberes comunitários substituem conteúdos nacionais quando houver conflito entre as duas perspectivas, por prevalecer a identidade territorial.",
      "a base comum deve ser aplicada integralmente, enquanto conhecimentos quilombolas ficam reservados à parte extracurricular Os conhecimentos quilombolas poderiam aparecer em oficinas, projetos e datas temáticas, sem alterar a seleção e a abordagem dos componentes curriculares regulares.",
      "a contextualização é recomendada para História e Artes, mas não para Matemática, Ciências ou Linguagens."
    ],
    correta: 0,
    explicacao: "As Diretrizes exigem especificidade sem romper com a base nacional comum. O desafio é integrar e contextualizar.",
    feedbackAcerto: "Você evitou a falsa escolha entre conhecimento comum e saber quilombola. O currículo deve promover diálogo entre ambos.",
    feedbackErro: "A correta articula base comum e contexto. As demais reduzem, segregam ou restringem a contextualização a algumas áreas.",
    dicaBanca: "Integração curricular é diferente de substituição curricular."
  },
  {
    pergunta: "Uma secretaria compra o mesmo material didático para todas as escolas e informa que os professores quilombolas podem contextualizá-lo oralmente. À luz das Diretrizes, uma política mais adequada seria:",
    alternativas: [
      "manter o material uniforme para assegurar igualdade e produzir um caderno cultural separado para datas comemorativas O caderno local seria utilizado como complemento cultural, enquanto os materiais comuns permaneceriam responsáveis pelas aprendizagens avaliadas no currículo.",
      "permitir que cada escola use materiais comunitários sem avaliação pedagógica, dispensando referências científicas externas.",
      "adotar material comum como fonte principal e evitar referências locais para não criar diferenças entre estudantes da rede.",
      "produzir e distribuir materiais específicos em diálogo com as realidades das comunidades, articulados aos conhecimentos escolares e às orientações curriculares.",
      "substituir materiais nacionais por registros produzidos pelas lideranças, que passam a definir integralmente o conteúdo escolar."
    ],
    correta: 3,
    explicacao: "As Diretrizes defendem produção e distribuição de material específico em diálogo com as realidades locais.",
    feedbackAcerto: "Você identificou que contextualização precisa alcançar o próprio material pedagógico, sem isolar a cultura num suplemento.",
    feedbackErro: "A correta combina especificidade, diálogo local e currículo escolar. Os demais itens padronizam ou eliminam referências acadêmicas.",
    dicaBanca: "Material específico não significa material isolado do currículo nacional."
  },
  {
    pergunta: "Em um projeto de Ciências, conhecimentos tradicionais sobre plantas são comparados com estudos botânicos, usos comunitários e questões ambientais. Essa prática:",
    alternativas: [
      "hierarquiza indevidamente o conhecimento tradicional ao colocá-lo em comparação com a ciência escolar Essa posição entende que a comparação entre saberes pode produzir falsa equivalência epistemológica e comprometer a precisão conceitual exigida no ensino de Ciências.",
      "promove diálogo entre formas de produção de conhecimento, sem exigir que uma delas seja tratada como substituta da outra.",
      "deve ocorrer fora da avaliação, porque saber tradicional tem valor cultural, mas não cognitivo.",
      "é válida se o conhecimento científico confirmar previamente todas as práticas descritas pela comunidade.",
      "substitui o currículo de Ciências por etnoconhecimento e compromete a formação básica comum."
    ],
    correta: 1,
    explicacao: "A Educação Escolar Quilombola valoriza saberes tradicionais e sua interlocução com conhecimentos sistematizados.",
    feedbackAcerto: "Você escolheu uma abordagem que respeita saberes comunitários e mantém investigação crítica.",
    feedbackErro: "A correta promove diálogo. Os distratores criam hierarquia automática, exclusão da avaliação ou dependência de validação externa prévia.",
    dicaBanca: "Diálogo de saberes não exige que um saber apague o outro."
  },
  {
    pergunta: "Segundo as orientações das Diretrizes, a formação inicial e continuada de docentes para a Educação Escolar Quilombola deve incluir estudos sobre:",
    alternativas: [
      "memória, ancestralidade, oralidade, corporeidade, estética e etnodesenvolvimento, articulados à trajetória histórica, política, econômica e sociocultural quilombola.",
      "gestão fundiária, produção agrícola e turismo comunitário como núcleo substitutivo da formação pedagógica geral A proposta concentraria a especificidade formativa no domínio das atividades econômicas e sociais do território, deixando a pedagogia geral para a formação comum.",
      "história da escravidão e legislação racial, ficando práticas culturais contemporâneas fora do eixo formativo.",
      "conteúdos gerais de diversidade, sem necessidade de abordar especificidades das diferentes comunidades quilombolas.",
      "metodologias de alfabetização próprias da modalidade, com currículo nacional uniforme para as demais áreas."
    ],
    correta: 0,
    explicacao: "O MEC destaca memória, ancestralidade, oralidade, corporeidade, estética e etnodesenvolvimento entre os temas da formação específica.",
    feedbackAcerto: "Você reconheceu um conjunto normativo pouco lembrado e muito útil para prova de professor.",
    feedbackErro: "A correta apresenta os eixos indicados. As demais reduzem a formação à produção, à história da escravidão ou a uma diversidade genérica.",
    dicaBanca: "Corporeidade, estética e etnodesenvolvimento são termos que podem aparecer em prova."
  },
  {
    pergunta: "A exigência de formação específica para profissionais da Educação Escolar Quilombola significa que:",
    alternativas: [
      "o docente da modalidade precisa ter nascido ou residir em comunidade quilombola para exercer legalmente a função.",
      "experiência comunitária substitui a formação docente prevista na legislação educacional quando a escola está no território A experiência comunitária seria reconhecida como saber profissional suficiente para docência contextualizada, ficando a formação formal para funções fora do território.",
      "todos os profissionais devem possuir graduação exclusiva em Educação Escolar Quilombola antes da contratação.",
      "a formação geral docente permanece necessária, mas deve incorporar conhecimentos e práticas capazes de responder às especificidades históricas, culturais e pedagógicas das comunidades.",
      "a formação específica se aplica aos professores de História e Artes, pois os demais componentes seguem currículo comum."
    ],
    correta: 3,
    explicacao: "A formação específica complementa e qualifica a formação profissional, sem criar requisito universal de origem comunitária ou curso único.",
    feedbackAcerto: "Você interpretou 'específica' como preparação contextualizada, e não como substituição das regras gerais de formação docente.",
    feedbackErro: "A correta articula formação geral e especificidade. As outras alternativas criam restrições de origem, diploma ou componente curricular.",
    dicaBanca: "Formação específica é conteúdo e preparação adequada, não requisito de nascimento."
  },
  {
    pergunta: "Além de docentes, a implementação da Educação Escolar Quilombola demanda formação de:",
    alternativas: [
      "diretores escolares, ficando equipes técnicas das secretarias sob as políticas gerais de gestão.",
      "coordenadores pedagógicos, enquanto gestores dos sistemas atuam no financiamento, na matrícula e na supervisão administrativa.",
      "representantes comunitários para que assumam funções técnicas das secretarias na execução da modalidade.",
      "profissionais responsáveis por alimentação e transporte, sem relação com equipes pedagógicas e administrativas.",
      "gestores dos sistemas, gestores escolares, coordenações pedagógicas e núcleos ou coordenações de diversidade, com participação das lideranças quilombolas na política."
    ],
    correta: 1,
    explicacao: "As Diretrizes não limitam a formação ao professor; a implementação depende de capacidade institucional em diferentes níveis da gestão.",
    feedbackAcerto: "Você reconheceu que a modalidade exige preparação de toda a cadeia de gestão educacional e diálogo com lideranças.",
    feedbackErro: "A correta amplia a formação para gestores e coordenações. Os demais itens fragmentam a política ou transferem funções técnicas à comunidade.",
    dicaBanca: "Implementar a modalidade exige formar quem ensina e quem gere."
  },
  {
    pergunta: "Uma secretaria planeja alterar currículo, transporte e organização de escolas que atendem estudantes quilombolas e comunica a decisão depois de pronta. Essa prática é incompatível com as Diretrizes porque:",
    alternativas: [
      "a Convenção nº 169 da OIT impede qualquer decisão pública sem unanimidade das lideranças da comunidade.",
      "a implementação deve ser acompanhada de consulta e participação das comunidades quilombolas e de suas organizações, respeitando seu direito de serem ouvidas nas decisões que as afetam.",
      "a comunidade possui poder de veto administrativo sobre toda política educacional que envolva estudantes quilombolas.",
      "a consulta deve ser realizada pelo Ministério Público, não pelos órgãos responsáveis pela política educacional.",
      "as decisões curriculares podem ser técnicas, mas transporte e nucleação dependem de autorização formal das associações comunitárias."
    ],
    correta: 4,
    explicacao: "As Diretrizes, apoiadas na Convenção nº 169, enfatizam consulta e participação da comunidade e de suas lideranças.",
    feedbackAcerto: "Você identificou a obrigação de participação sem transformar consulta em veto absoluto ou transferência de competência estatal.",
    feedbackErro: "A correta preserva consulta e participação. As demais confundem esse direito com unanimidade, veto ou autorização administrativa.",
    dicaBanca: "Consulta prévia não significa poder de veto automático."
  },
  {
    pergunta: "Sobre a gestão das escolas que recebem estudantes quilombolas fora de suas comunidades de origem, as Diretrizes orientam que:",
    alternativas: [
      "a escola aplique o projeto pedagógico comum da rede, pois a consulta comunitária é própria das escolas localizadas no território Essa interpretação entende que, fora do território, a escola responde às normas gerais da rede e a participação comunitária perde fundamento operacional.",
      "as lideranças sejam ouvidas em decisões sobre eventos culturais e celebrações comunitárias, sem interferência na gestão pedagógica.",
      "a gestão considere o direito de consulta e participação da comunidade e de suas lideranças nas decisões que repercutem sobre esses estudantes.",
      "a comunidade participe de questões curriculares, enquanto transporte e acesso permanecem decisões administrativas sem consulta.",
      "a participação ocorra por representante indicado pelo poder público, evitando vínculos diretos entre escola e organizações quilombolas."
    ],
    correta: 2,
    explicacao: "O direito de consulta e participação também alcança escolas que atendem estudantes quilombolas fora das comunidades.",
    feedbackAcerto: "Você percebeu que o direito não desaparece quando o estudante cruza os limites territoriais para estudar.",
    feedbackErro: "A correta mantém participação nas decisões que afetam os estudantes. As demais territorializam ou limitam indevidamente esse direito.",
    dicaBanca: "Estudar fora da comunidade não apaga pertencimento nem participação."
  },
  {
    pergunta: "Em uma comunidade quilombola rural, a prefeitura pretende levar todas as crianças da Educação Infantil para uma unidade nucleada fora do território. As Diretrizes indicam que:",
    alternativas: [
      "a centralização é preferível quando a unidade externa possui melhor infraestrutura, mesmo com deslocamento diário.",
      "a oferta fora do território é adequada quando o transporte tem menos de uma hora de duração.",
      "o Município pode decidir pela nucleação após consulta, pois a localização não possui tratamento específico para a Educação Infantil.",
      "a nucleação depende do número mínimo de crianças fixado anualmente pelo sistema de ensino.",
      "a Educação Infantil, pelas suas especificidades, deve ser ofertada no próprio território quilombola rural."
    ],
    correta: 3,
    explicacao: "As Diretrizes conferem forte proteção territorial à Educação Infantil quilombola em áreas rurais.",
    feedbackAcerto: "Você identificou que, para crianças pequenas, proximidade comunitária é parte da própria garantia educacional.",
    feedbackErro: "A correta prioriza oferta no território. Os demais itens tratam infraestrutura ou transporte como justificativa suficiente para afastamento.",
    dicaBanca: "Educação Infantil quilombola rural: oferta no próprio território."
  },
  {
    pergunta: "Quanto aos anos iniciais do Ensino Fundamental em comunidades quilombolas rurais, as Diretrizes orientam:",
    alternativas: [
      "nucleação em polos municipais com equipes maiores, quando houver transporte gratuito.",
      "oferta nos próprios territórios quilombolas, em razão das especificidades da etapa e da importância dos vínculos comunitários.",
      "transporte para escola urbana quando a turma local tiver estudantes de idades diferentes A medida seria justificada pela necessidade de organizar turmas homogêneas e ampliar a oferta de componentes e serviços na unidade de destino.",
      "oferta local condicionada à existência de prédio escolar próprio e número mínimo de matrículas.",
      "alternância entre escola do território e polo regional como forma padrão de organização dos anos iniciais."
    ],
    correta: 1,
    explicacao: "As Diretrizes, assim como na Educação Infantil, enfatizam a oferta dos anos iniciais nos próprios territórios quilombolas rurais.",
    feedbackAcerto: "Você reconheceu a proteção à escolarização próxima da comunidade nos anos iniciais.",
    feedbackErro: "A correta preserva a oferta no território. As demais transformam nucleação, número de alunos ou infraestrutura em condição geral.",
    dicaBanca: "Educação Infantil e anos iniciais recebem proteção territorial reforçada."
  },
  {
    pergunta: "Quando anos finais do Ensino Fundamental, Ensino Médio ou EJA não puderem ser ofertados no próprio território quilombola rural, a nucleação deve:",
    alternativas: [
      "ser direcionada para a escola urbana mais próxima, priorizando a menor distância rodoviária e garantindo integração regular com os serviços da sede municipal.",
      "ocorrer no polo com maior número de matrículas, independentemente de sua identidade territorial.",
      "priorizar polos quilombolas e considerar a participação das comunidades e lideranças na definição do local.",
      "utilizar polo não quilombola como primeira opção quando houver transporte regular e infraestrutura superior.",
      "ser definida pela secretaria antes da consulta, deixando à comunidade a escolha de horários e itinerários."
    ],
    correta: 4,
    explicacao: "As Diretrizes orientam a priorização de polos quilombolas e participação comunitária na definição do atendimento quando a oferta local não for possível.",
    feedbackAcerto: "Você combinou dois critérios centrais: referência quilombola do polo e participação da comunidade.",
    feedbackErro: "A correta corresponde à lógica das Diretrizes. Os demais itens tratam distância, porte ou infraestrutura como critério exclusivo.",
    dicaBanca: "Nucleação: primeiro pense em polo quilombola e participação."
  },
  {
    pergunta: "A vinculação de estudantes quilombolas rurais a polos não quilombolas, nos casos previstos pelas Diretrizes, deve ocorrer:",
    alternativas: [
      "como regra quando o polo externo oferecer ensino médio e educação profissional no mesmo espaço.",
      "quando a distância até o polo estiver dentro do limite definido pelo sistema estadual e houver transporte regular.",
      "quando a comunidade preferir transporte a manutenção de turma com número reduzido de estudantes.",
      "em situação comprovadamente excepcional, após análise das condições de oferta e participação da comunidade.",
      "após autorização do Conselho Tutelar, independentemente do posicionamento das lideranças comunitárias."
    ],
    correta: 2,
    explicacao: "As Diretrizes tratam a vinculação a polos não quilombolas como situação excepcional, não como rotina de racionalização administrativa.",
    feedbackAcerto: "Você reconheceu o caráter excepcional e a necessidade de análise contextual.",
    feedbackErro: "A correta evita transformar polo não quilombola em solução padrão. As demais criam gatilhos automáticos de distância, estrutura ou matrícula.",
    dicaBanca: "Polo não quilombola = excepcionalidade comprovada."
  },
  {
    pergunta: "Quando o transporte escolar de estudantes quilombolas se mostra necessário, deve-se priorizar:",
    alternativas: [
      "menor tempo possível no percurso residência-escola e transporte intracampo em condições adequadas de segurança.",
      "trajetos para escolas urbanas, por concentrarem serviços de apoio e equipes especializadas A justificativa seria a concentração de serviços pedagógicos, equipes multiprofissionais e recursos de apoio nas unidades da sede municipal.",
      "veículos de maior capacidade, mesmo que ampliem o tempo de percurso e o número de comunidades atendidas.",
      "rotas definidas pelo menor custo por estudante, desde que o veículo esteja regularizado.",
      "transporte entre territórios e sedes municipais, evitando rotas entre comunidades rurais."
    ],
    correta: 0,
    explicacao: "As Diretrizes destacam menor tempo de percurso, segurança e transporte intracampo quando houver necessidade de deslocamento.",
    feedbackAcerto: "Você reconheceu que transporte é parte do direito educacional e deve minimizar deslocamentos e ruptura territorial.",
    feedbackErro: "A correta combina tempo e intracampo. As demais priorizam eficiência logística ou deslocamento urbano.",
    dicaBanca: "Transporte quilombola: menor tempo + segurança + intracampo."
  },
  {
    pergunta: "Ao avaliar a qualidade do transporte escolar para estudantes quilombolas, qual conjunto de fatores está de acordo com as orientações das Diretrizes?",
    alternativas: [
      "distância, acessibilidade, condições das estradas e vias, clima, estado de conservação e idade dos veículos, além das possibilidades de trabalho pedagógico.",
      "quantidade de estudantes transportados e custo por quilômetro, pois os demais fatores pertencem à gestão geral do transporte.",
      "tempo de percurso e capacidade do veículo, ficando acessibilidade vinculada às políticas de educação especial.",
      "condições climáticas e segurança viária, sem necessidade de considerar a localização pedagógica da escola de destino.",
      "distância e regularidade da frequência, deixando as características do veículo sob responsabilidade exclusiva do fornecedor."
    ],
    correta: 1,
    explicacao: "As Diretrizes apresentam avaliação ampla do transporte, considerando distância, acessibilidade, vias, clima, veículos e qualidade do trabalho pedagógico.",
    feedbackAcerto: "Você reconheceu que transporte escolar não é apenas deslocamento físico; ele interfere em acesso, permanência e qualidade educativa.",
    feedbackErro: "A correta reúne os critérios relevantes. As demais reduzem a decisão a custo, capacidade ou logística.",
    dicaBanca: "Transporte deve ser analisado com lentes geográficas, de segurança, acessibilidade e pedagógicas."
  },
  {
    pergunta: "Quando uma criança quilombola com deficiência precisa ser transportada para atendimento escolar fora da comunidade, a solução deve:",
    alternativas: [
      "seguir o mesmo veículo usado pelos demais estudantes, pois diferenciação configuraria tratamento desigual.",
      "ser definida pela família, que assume responsabilidade pelas adaptações necessárias no percurso.",
      "usar transporte especializado fora do sistema escolar, evitando mistura entre políticas de educação e acessibilidade.",
      "considerar as condições específicas do estudante e garantir acessibilidade e segurança no deslocamento.",
      "ser autorizada por laudo médico anual que determine o tipo de veículo adequado."
    ],
    correta: 4,
    explicacao: "As Diretrizes exigem atenção às condições dos estudantes com deficiência e remetem às normas específicas de acessibilidade.",
    feedbackAcerto: "Você identificou que igualdade exige remover barreiras concretas, inclusive no transporte.",
    feedbackErro: "A correta considera acessibilidade e segurança. As demais uniformizam o atendimento ou deslocam a responsabilidade para família e saúde.",
    dicaBanca: "Transporte acessível é parte do direito à educação."
  },
  {
    pergunta: "Uma escola quilombola recebe cardápio padronizado com alimentos pouco presentes na cultura alimentar local. Segundo as Diretrizes, a política de alimentação escolar deve:",
    alternativas: [
      "priorizar o padrão nutricional nacional, deixando hábitos culturais para atividades educativas sobre alimentação.",
      "adotar o cardápio comum e reservar preparações locais para datas comemorativas da comunidade.",
      "ser definida por nutricionista sem consulta comunitária, porque a alimentação é tema técnico de saúde.",
      "usar alimentos locais quando adquiridos diretamente de produtores da própria comunidade e houver disponibilidade regular.",
      "dialogar com as comunidades e considerar suas especificidades socioculturais e hábitos alimentares na organização da alimentação escolar."
    ],
    correta: 0,
    explicacao: "As Diretrizes determinam alimentação escolar adequada às especificidades socioculturais e aos hábitos alimentares das comunidades, construída em diálogo com elas.",
    feedbackAcerto: "Você reconheceu que qualidade nutricional e cultura alimentar não são objetivos incompatíveis.",
    feedbackErro: "A correta articula alimentação e contexto sociocultural. As demais tratam a cultura como detalhe ou retiram participação comunitária.",
    dicaBanca: "Alimentação escolar quilombola também é política cultural e de direito."
  },
  {
    pergunta: "Qual prática melhor expressa o princípio de superar modelos massificados de alimentação escolar nas comunidades quilombolas?",
    alternativas: [
      "usar cardápio nacional com ajustes de quantidade conforme idade dos estudantes.",
      "construir cardápios com participação comunitária, hábitos alimentares locais e critérios nutricionais, articulando cultura e direito à alimentação adequada.",
      "substituir a alimentação escolar por produtos preparados pelas próprias famílias, conforme costume de cada comunidade.",
      "autorizar cada estudante a levar sua alimentação e direcionar os recursos públicos às famílias em maior vulnerabilidade.",
      "priorizar alimentos industrializados de maior durabilidade quando a escola estiver em área de difícil acesso."
    ],
    correta: 3,
    explicacao: "As Diretrizes defendem diálogo com a comunidade, respeito aos hábitos locais e qualidade da alimentação, sem transferir o dever público às famílias.",
    feedbackAcerto: "Você identificou uma política que combina participação, cultura e critérios nutricionais.",
    feedbackErro: "A correta supera padronização sem abandonar responsabilidade estatal. As demais individualizam ou precarizam a oferta.",
    dicaBanca: "Contextualizar merenda não significa privatizar a responsabilidade pela alimentação."
  },
  {
    pergunta: "O regime de cooperação na alimentação escolar quilombola deve ser compreendido como:",
    alternativas: [
      "transferência integral da gestão da alimentação às associações comunitárias, que definem compras e cardápios A associação comunitária assumiria planejamento, compras, execução e controle dos recursos, com prestação de contas posterior ao ente responsável pela rede.",
      "responsabilidade municipal exclusiva, já que a escola integra a rede local.",
      "articulação entre entes públicos e, quando cabível, sociedade civil, preservando a responsabilidade estatal e o diálogo com as comunidades.",
      "financiamento federal condicionado à adoção de cardápio único para todas as escolas quilombolas.",
      "gestão autônoma de cada escola, sem necessidade de integração com políticas públicas de alimentação."
    ],
    correta: 2,
    explicacao: "As Diretrizes tratam a alimentação escolar como política articulada entre entes federados e comunidades, sem retirar a responsabilidade pública.",
    feedbackAcerto: "Você distinguiu cooperação de transferência de dever estatal.",
    feedbackErro: "A correta preserva articulação e responsabilidade pública. As demais municipalizam, privatizam ou padronizam a política.",
    dicaBanca: "Cooperação não é abandono da responsabilidade pública."
  },
  {
    pergunta: "Antes do fechamento de uma escola quilombola, a LDB exige que o órgão normativo do sistema de ensino se manifeste considerando:",
    alternativas: [
      "o número de matrículas, o custo de manutenção e a disponibilidade de transporte para outra escola.",
      "parecer do Conselho Tutelar, autorização do Ministério Público e manifestação da associação comunitária.",
      "o resultado das avaliações externas e a capacidade de oferta da escola de destino.",
      "justificativa da Secretaria de Educação, diagnóstico do impacto da ação e manifestação da comunidade escolar.",
      "o plano municipal de educação e a existência de vagas no polo quilombola mais próximo."
    ],
    correta: 4,
    explicacao: "O parágrafo único do art. 28 da LDB protege escolas do campo, indígenas e quilombolas e exige procedimento prévio específico.",
    feedbackAcerto: "Você identificou os três elementos que o órgão normativo deve considerar antes do fechamento.",
    feedbackErro: "A correta apresenta justificativa, diagnóstico de impacto e manifestação comunitária. As demais substituem o procedimento por critérios administrativos.",
    dicaBanca: "Fechamento não pode ser decidido só por custo ou matrícula."
  },
  {
    pergunta: "Uma prefeitura oferece transporte adequado e vagas em outra escola e, por isso, fecha uma escola quilombola sem diagnóstico de impacto. À luz da LDB:",
    alternativas: [
      "a decisão é regular, porque transporte e vaga garantem o acesso ao ensino.",
      "a decisão é irregular, porque transporte não substitui o diagnóstico de impacto nem a manifestação e o procedimento exigidos para fechamento.",
      "a decisão é regular se a escola de destino tiver melhores resultados de aprendizagem.",
      "a decisão é irregular se a comunidade tiver se manifestado formalmente contra o fechamento, ainda que os demais requisitos tenham sido cumpridos.",
      "a decisão depende de homologação posterior pelo conselho de educação, que poderá suprir as etapas administrativas anteriores."
    ],
    correta: 0,
    explicacao: "O transporte pode ser relevante, mas não substitui o procedimento jurídico específico de fechamento.",
    feedbackAcerto: "Você reconheceu que acesso físico a outra escola não apaga impactos territoriais, culturais e pedagógicos.",
    feedbackErro: "A correta aponta a irregularidade procedimental. Os demais itens criam atalhos que a LDB não autoriza.",
    dicaBanca: "Vaga + transporte não equivalem ao procedimento legal de fechamento."
  },
  {
    pergunta: "Pela Lei nº 15.215/2025, a denominação de nova instituição pública de ensino quilombola deve considerar:",
    alternativas: [
      "nome escolhido pela Secretaria de Educação após consulta à direção escolar.",
      "votação municipal aberta a todos os eleitores do território da rede.",
      "lista tríplice apresentada pela comunidade, construída com participação local e relacionada a tradições, lideranças, figuras históricas e aspectos culturais.",
      "nome de personalidade nacional indicada pelo conselho de educação, desde que possua vínculo com a temática racial O critério permitiria homenagear personalidade de reconhecimento público mesmo sem relação direta com a história e as referências culturais da comunidade.",
      "denominação definida pela comunidade sem participação do Poder Executivo responsável pela rede."
    ],
    correta: 2,
    explicacao: "A Lei nº 15.215/2025 assegura participação comunitária por lista tríplice e atribui ao Poder Executivo responsável pela rede a denominação, observados os critérios legais.",
    feedbackAcerto: "Você identificou a combinação entre protagonismo comunitário e competência do poder público.",
    feedbackErro: "A correta menciona lista tríplice e referências culturais. As outras centralizam a decisão ou eliminam a competência do Executivo.",
    dicaBanca: "Denominação em 2025: comunidade sugere três nomes; Executivo realiza a escolha dentro das regras."
  },
  {
    pergunta: "Uma comunidade discorda do nome já existente de sua escola quilombola e pretende substituí-lo. A Lei nº 15.215/2025 prevê que:",
    alternativas: [
      "a alteração exige plebiscito local e aprovação do Legislativo municipal O procedimento incluiria consulta formal aos moradores e votação vinculante antes do encaminhamento da alteração ao órgão responsável pela rede.",
      "a comunidade pode solicitar a substituição ao Poder Executivo, apresentando relatório circunstanciado com os motivos do pedido.",
      "a mudança depende de decisão judicial quando o nome já consta oficialmente do censo escolar.",
      "a substituição ocorre por deliberação autônoma do conselho escolar, comunicada depois à rede.",
      "o nome existente é imutável, salvo quando homenageia pessoa viva."
    ],
    correta: 1,
    explicacao: "A lei permite pedido de substituição de denominação já existente e exige relatório circunstanciado que fundamente a solicitação.",
    feedbackAcerto: "Você identificou o procedimento correto para alteração de nome existente.",
    feedbackErro: "A correta prevê solicitação ao Executivo e relatório. As demais criam plebiscito, processo judicial ou imutabilidade.",
    dicaBanca: "Para trocar nome existente, pense em pedido + relatório circunstanciado."
  },
  {
    pergunta: "Ao escolher nome para uma escola quilombola pública, a Lei nº 15.215/2025 impede homenagem a:",
    alternativas: [
      "liderança comunitária falecida que tenha prestado relevantes serviços à coletividade.",
      "figura histórica local escolhida pela comunidade e incluída na lista tríplice.",
      "personalidade falecida relacionada à história da educação quilombola.",
      "pessoa cuja trajetória represente tradições e valores reconhecidos pela comunidade.",
      "pessoa viva, pessoa notabilizada pela defesa ou exploração de mão de obra escrava ou pessoa comprovadamente envolvida em lesa-humanidade, tortura ou violação de direitos humanos."
    ],
    correta: 3,
    explicacao: "A Lei nº 15.215/2025 articula participação comunitária e limites ético-jurídicos para a denominação de instituições.",
    feedbackAcerto: "Você identificou que a lista comunitária não afasta as proibições legais sobre quem pode ser homenageado.",
    feedbackErro: "A correta reúne hipóteses vedadas. As demais são situações que podem ser avaliadas conforme os critérios legais.",
    dicaBanca: "Participação comunitária existe dentro de limites de direitos humanos."
  },
  {
    pergunta: "A PNEERQ, instituída pela Portaria MEC nº 470/2024, tem como eixo central:",
    alternativas: [
      "substituir as Diretrizes da Educação Escolar Quilombola por uma política de equidade comum a toda a educação básica.",
      "organizar cotas de matrícula para estudantes quilombolas nas redes públicas de ensino.",
      "restringir o combate ao racismo às escolas com maioria de estudantes negros ou quilombolas.",
      "superar desigualdades étnico-raciais e o racismo nos ambientes de ensino e promover a política educacional para a população quilombola.",
      "financiar ações de formação docente em relações étnico-raciais como eixo central da política, deixando os demais compromissos às redes."
    ],
    correta: 2,
    explicacao: "A PNEERQ articula equidade racial, educação para relações étnico-raciais e fortalecimento da Educação Escolar Quilombola.",
    feedbackAcerto: "Você reconheceu a política como estrutura ampla de enfrentamento das desigualdades e consolidação da modalidade.",
    feedbackErro: "A correta expressa seu objetivo geral. As demais reduzem a política a cotas, formação ou determinado tipo de escola.",
    dicaBanca: "PNEERQ = equidade racial + ERER + Educação Escolar Quilombola."
  },
  {
    pergunta: "Entre os compromissos da PNEERQ está:",
    alternativas: [
      "garantir implementação do art. 26-A da LDB, formar profissionais, fortalecer capacidades institucionais, consolidar a Educação Escolar Quilombola e desenvolver mecanismos de enfrentamento ao racismo.",
      "criar currículo nacional separado para estudantes negros e quilombolas, com avaliação própria obrigatória.",
      "transferir a gestão da Educação Escolar Quilombola para organizações representativas das comunidades.",
      "substituir políticas estaduais e municipais por execução direta do MEC nas escolas participantes.",
      "limitar o monitoramento às taxas de matrícula e conclusão dos estudantes quilombolas."
    ],
    correta: 3,
    explicacao: "A PNEERQ possui compromissos de implementação normativa, formação, governança, monitoramento, consolidação da modalidade e enfrentamento do racismo.",
    feedbackAcerto: "Você reconheceu a política como um conjunto articulado de ações, e não como programa curricular isolado.",
    feedbackErro: "A correta reúne compromissos oficiais. As demais criam segregação curricular, centralização ou monitoramento estreito.",
    dicaBanca: "PNEERQ atua em lei, formação, gestão, monitoramento e resposta ao racismo."
  },
  {
    pergunta: "Os Protocolos de Identificação e Resposta ao Racismo lançados no âmbito da PNEERQ em 2026 têm como propósito:",
    alternativas: [
      "substituir os procedimentos disciplinares e jurídicos das redes por um rito nacional único A justificativa seria garantir tratamento uniforme dos casos, com protocolo administrativo substituindo normas locais e procedimentos já existentes nas redes.",
      "orientar redes, creches, pré-escolas e escolas na identificação e resposta a situações de racismo no ambiente educacional.",
      "criar sanções penais próprias para casos de racismo ocorridos em unidades escolares.",
      "ser aplicados em escolas quilombolas e em unidades com ações específicas de educação antirracista, conforme adesão da rede.",
      "transferir à direção escolar a investigação formal de crimes de racismo antes de acionar outros órgãos."
    ],
    correta: 1,
    explicacao: "Os protocolos são instrumentos orientadores para reconhecer e responder a situações de racismo no ambiente educacional.",
    feedbackAcerto: "Você identificou a finalidade pedagógica e institucional dos protocolos, sem transformá-los em legislação penal ou rito substitutivo.",
    feedbackErro: "A correta descreve sua função. As demais atribuem efeitos jurídicos ou alcance restrito que os protocolos não possuem.",
    dicaBanca: "Protocolos orientam prevenção, identificação e resposta; não substituem a lei."
  },
  {
    pergunta: "No Diagnóstico de Equidade Racial da PNEERQ, a análise das redes de ensino contempla dimensões como:",
    alternativas: [
      "currículo, materiais, formação, gestão, financiamento, indicadores, participação social e Educação Escolar Quilombola, entre outros eixos.",
      "rendimento escolar e matrícula por raça/cor seriam os indicadores centrais, evitando avaliações institucionais de gestão e currículo Nessa abordagem, a política seria monitorada por dados quantitativos considerados comparáveis entre redes, sem avaliação qualitativa de processos institucionais.",
      "infraestrutura e transporte, deixando currículo e formação fora do monitoramento nacional.",
      "implementação da Lei nº 10.639/2003 em escolas com estudantes quilombolas, sem abranger outras unidades da rede.",
      "o número de denúncias de racismo registradas no ano letivo seria o indicador direto de implementação da política."
    ],
    correta: 0,
    explicacao: "O diagnóstico foi estruturado em múltiplas dimensões, incluindo marco legal, formação, gestão, materiais, currículo, financiamento, monitoramento e participação.",
    feedbackAcerto: "Você identificou que equidade racial exige olhar sistêmico sobre a rede.",
    feedbackErro: "A correta apresenta a natureza multidimensional. As demais reduzem o diagnóstico a indicadores estreitos.",
    dicaBanca: "Diagnóstico de equidade não mede um único resultado; examina a capacidade da rede."
  },
  {
    pergunta: "O art. 26-A da LDB, diretamente relacionado às ações de educação antirracista e à PNEERQ, determina:",
    alternativas: [
      "estudo da história e cultura afro-brasileira e indígena no ensino fundamental e médio, em estabelecimentos públicos e privados.",
      "componente curricular autônomo obrigatório chamado Educação para as Relações Étnico-Raciais em todas as etapas da educação básica.",
      "ensino de história africana nas escolas com presença de estudantes negros ou quilombolas, conforme o perfil da matrícula.",
      "abordagem da temática em projetos anuais, sem necessidade de integração ao currículo escolar.",
      "estudo da cultura afro-brasileira restrito às disciplinas de História e Literatura."
    ],
    correta: 4,
    explicacao: "O art. 26-A torna obrigatório o estudo da história e cultura afro-brasileira e indígena no EF e EM, públicos e privados.",
    feedbackAcerto: "Você diferenciou obrigação curricular ampla de criação de disciplina isolada.",
    feedbackErro: "A correta corresponde à LDB. As demais restringem rede, público, disciplina ou forma de implementação.",
    dicaBanca: "Art. 26-A não é conteúdo exclusivo das escolas quilombolas."
  },
  {
    pergunta: "Um material didático apresenta quilombos apenas como fenômeno do período escravista e ignora comunidades contemporâneas. Em perspectiva antirracista e quilombola, o principal problema é:",
    alternativas: [
      "excesso de conteúdo histórico, que deveria ser substituído por atividades culturais contemporâneas.",
      "ausência de neutralidade, pois materiais escolares devem evitar debates sobre identidade racial.",
      "redução dos quilombos ao passado, invisibilizando sujeitos, direitos, territórios e produções culturais contemporâneas.",
      "uso do conceito de resistência, que pertence ao campo político e não deve integrar materiais didáticos.",
      "falta de delimitação entre história afro-brasileira e educação quilombola, que devem permanecer separadas."
    ],
    correta: 0,
    explicacao: "A educação antirracista precisa combater invisibilizações e estereótipos, reconhecendo comunidades quilombolas como sujeitos contemporâneos.",
    feedbackAcerto: "Você percebeu que um material pode estar factualmente correto sobre o passado e ainda produzir apagamento ao negar o presente.",
    feedbackErro: "A correta identifica a invisibilização contemporânea. As demais defendem neutralidade ou separações artificiais.",
    dicaBanca: "Quilombola não é apenas personagem histórico."
  },
  {
    pergunta: "No novo PNE instituído pela Lei nº 15.388/2026, o Objetivo 9 busca:",
    alternativas: [
      "concentrar a expansão da Educação Escolar Quilombola na educação básica rural.",
      "garantir acesso, oferta e permanência em todos os níveis, etapas e modalidades da educação escolar indígena, do campo e quilombola, com padrões nacionais de qualidade e redução de desigualdades regionais.",
      "substituir metas específicas das modalidades por uma única meta nacional de alfabetização.",
      "ampliar a oferta de educação profissional para povos tradicionais, deixando Educação Infantil e Ensino Fundamental a cargo dos planos locais.",
      "priorizar infraestrutura física como condição suficiente de qualidade nas escolas quilombolas."
    ],
    correta: 4,
    explicacao: "O Objetivo 9 do PNE 2026 trata conjuntamente Educação Escolar Indígena, Educação do Campo e Educação Escolar Quilombola e abrange acesso, oferta, permanência e qualidade.",
    feedbackAcerto: "Você identificou a amplitude do novo objetivo e não o reduziu a uma etapa ou a infraestrutura.",
    feedbackErro: "A correta corresponde ao Objetivo 9. As demais restringem níveis, metas ou dimensões da qualidade.",
    dicaBanca: "Novo PNE: acesso + oferta + permanência + qualidade."
  },
  {
    pergunta: "A Meta 9.c do PNE 2026 estabelece para creches na Educação Escolar Quilombola:",
    alternativas: [
      "atendimento de 50% da demanda manifesta até o quinto ano e universalização no final do plano A diferença entre demanda manifesta e cobertura nacional seria resolvida progressivamente, com metas intermediárias definidas pelos sistemas de ensino.",
      "universalização imediata para crianças de 0 a 5 anos em todos os territórios quilombolas.",
      "atendimento de 100% das crianças de 0 a 3 anos, independentemente da demanda manifesta.",
      "atender 100% da demanda manifesta e atingir, em nível nacional, ao menos 50% das crianças de 0 a 3 anos da modalidade até o final da vigência.",
      "manutenção da meta geral da Educação Infantil, sem percentual próprio para a modalidade."
    ],
    correta: 3,
    explicacao: "A Meta 9.c combina dois parâmetros: 100% da demanda manifesta e cobertura nacional mínima de 50% das crianças de 0 a 3 anos.",
    feedbackAcerto: "Você percebeu a diferença entre demanda manifesta e taxa nacional de cobertura.",
    feedbackErro: "A correta reúne os dois parâmetros. As demais trocam idades, percentuais ou eliminam a meta específica.",
    dicaBanca: "Creche quilombola no PNE: 100% demanda manifesta + 50% cobertura nacional."
  },
  {
    pergunta: "A Meta 9.f do PNE 2026 prevê:",
    alternativas: [
      "universalizar matrícula quilombola em qualquer escola da rede, sem referência às Diretrizes da modalidade A universalização seria medida pela matrícula do estudante, ainda que a proposta pedagógica da escola de destino não observe as diretrizes específicas da modalidade.",
      "universalizar o Ensino Fundamental e manter pré-escola e Ensino Médio submetidos às metas gerais.",
      "universalizar atendimento na pré-escola, Ensino Fundamental e Ensino Médio em conformidade com as Diretrizes da Educação Escolar Quilombola.",
      "universalizar a oferta em escolas localizadas dentro de territórios quilombolas reconhecidos, priorizando a territorialidade física.",
      "garantir permanência no Ensino Médio, ficando acesso às etapas anteriores tratado por outros objetivos."
    ],
    correta: 2,
    explicacao: "A Meta 9.f vincula universalização de pré-escola, EF e EM à conformidade com as Diretrizes Curriculares da modalidade.",
    feedbackAcerto: "Você identificou que universalização não significa qualquer vaga; a qualidade e a especificidade da oferta importam.",
    feedbackErro: "A correta inclui as três etapas e a conformidade com as Diretrizes.",
    dicaBanca: "Universalizar com identidade da modalidade, não apenas universalizar matrícula."
  },
  {
    pergunta: "A Meta 9.g do PNE 2026 considera, no mínimo, quais dimensões para padrões nacionais de qualidade nas modalidades contempladas?",
    alternativas: [
      "resultados em avaliações externas, taxa de aprovação, frequência e custo por aluno.",
      "currículo, alimentação, transporte e jornada em tempo integral.",
      "infraestrutura física, profissionais da educação, recursos pedagógicos e acessibilidade.",
      "conectividade, biblioteca, laboratório e formação superior de todos os docentes.",
      "participação comunitária, gestão democrática, memória e patrimônio cultural."
    ],
    correta: 1,
    explicacao: "A Meta 9.g explicita infraestrutura física, profissionais, recursos pedagógicos e acessibilidade como dimensões mínimas de qualidade.",
    feedbackAcerto: "Você identificou o conjunto literal da meta sem confundi-lo com estratégias adicionais do plano.",
    feedbackErro: "A correta traz as quatro dimensões mínimas. As demais misturam indicadores relevantes, mas não reproduzem a Meta 9.g.",
    dicaBanca: "Em metas legais, diferencie o núcleo obrigatório das estratégias complementares."
  },
  {
    pergunta: "Entre as estratégias do Objetivo 9 do PNE 2026 está:",
    alternativas: [
      "reduzir materiais específicos para evitar duplicação de conteúdos entre modalidades.",
      "usar materiais produzidos por editoras nacionais e revisados por especialistas em diversidade como forma de assegurar padrão técnico.",
      "produzir materiais próprios sem integração com pesquisa e extensão das instituições de ensino superior.",
      "concentrar materiais quilombolas em História e Cultura, mantendo as demais áreas sob materiais comuns da rede.",
      "instituir política de materiais didáticos, pedagógicos e literários de qualidade, com participação preferencial das comunidades e articulação entre saberes tradicionais, evidências científicas, ensino, pesquisa e extensão."
    ],
    correta: 3,
    explicacao: "A Estratégia 9.10 conecta qualidade, participação comunitária, saberes tradicionais, evidências científicas e instituições de ensino superior.",
    feedbackAcerto: "Você identificou uma formulação sofisticada que rejeita tanto padronização quanto isolamento do conhecimento comunitário.",
    feedbackErro: "A correta corresponde à estratégia do novo PNE. As demais restringem autoria, áreas ou diálogo científico.",
    dicaBanca: "PNE 2026 articula saber tradicional e evidência científica."
  },
  {
    pergunta: "Sobre alimentação escolar nas estratégias do PNE 2026 para comunidades quilombolas, é correto afirmar que o plano prevê:",
    alternativas: [
      "cardápio nacional padronizado com aquisição local quando houver excedente de produção.",
      "expansão da alimentação adquirida da agricultura familiar, respeitando características culturais e especificidades dos territórios quilombolas e apoiando produtores locais.",
      "compra direta de produtores quilombolas como regra de prioridade, independentemente dos demais critérios do programa de alimentação.",
      "substituição de refeições escolares por auxílio financeiro às famílias em territórios de difícil acesso.",
      "prioridade a produtos industrializados nas comunidades distantes para garantir regularidade de abastecimento."
    ],
    correta: 2,
    explicacao: "A Estratégia 9.9 amplia a política de alimentação escolar adquirida da agricultura familiar e exige respeito às características culturais e territoriais.",
    feedbackAcerto: "Você integrou alimentação, agricultura familiar, cultura e território.",
    feedbackErro: "A correta corresponde ao PNE. As demais padronizam, individualizam ou criam exclusividade de fornecedor não prevista.",
    dicaBanca: "Alimentação no PNE também é desenvolvimento local e respeito cultural."
  },
  {
    pergunta: "O PNE 2026 determina, entre outras estratégias relativas aos profissionais da Educação Escolar Quilombola:",
    alternativas: [
      "criar carreira nacional única para docentes quilombolas vinculada diretamente ao MEC.",
      "dispensar concurso público quando o candidato pertence à comunidade atendida.",
      "incentivar formação inicial e continuada, valorização, concursos específicos quando cabíveis e participação de representantes comunitários nos processos seletivos, conforme a Convenção nº 169.",
      "reservar a gestão escolar às lideranças comunitárias e a docência aos profissionais da rede.",
      "substituir critérios de formação pela experiência cultural em comunidades com escassez de docentes."
    ],
    correta: 0,
    explicacao: "As Estratégias 9.14, 9.16 e 9.17 articulam formação, carreira, concursos e escuta das comunidades nos processos seletivos.",
    feedbackAcerto: "Você reconheceu valorização e participação sem eliminar requisitos profissionais ou concurso público.",
    feedbackErro: "A correta reúne medidas do novo PNE. As demais criam contratação automática, carreira federal ou substituição da formação.",
    dicaBanca: "Participação comunitária em seleção não significa dispensa de critérios profissionais."
  },
  {
    pergunta: "A Estratégia 9.4 do PNE 2026 prevê, para as escolas quilombolas:",
    alternativas: [
      "currículos alinhados às Diretrizes da Educação Escolar Quilombola e da Educação do Campo, pautados na Pedagogia da Alternância, visando acesso, permanência, qualidade, conclusão e fortalecimento da identidade cultural e do bem-viver.",
      "currículos próprios desvinculados da base comum e organizados por lideranças comunitárias conforme referências culturais do território.",
      "adoção da Pedagogia da Alternância em escolas rurais com cursos de educação profissional, por sua vinculação ao trabalho comunitário.",
      "substituição das Diretrizes de 2012 por referenciais curriculares estaduais ajustados a cada território.",
      "currículo comum da rede acrescido de um componente anual de cultura quilombola."
    ],
    correta: 1,
    explicacao: "A Estratégia 9.4 traz uma atualização importante do PNE 2026 ao relacionar currículos quilombolas, Diretrizes da modalidade e Pedagogia da Alternância.",
    feedbackAcerto: "Você identificou uma estratégia nova e potencialmente muito cobrável em provas posteriores a 2026.",
    feedbackErro: "A correta corresponde ao texto do PNE. As demais segregam o currículo, restringem a Alternância ou reduzem a modalidade a um componente.",
    dicaBanca: "Atualização 2026: Estratégia 9.4 merece atenção especial."
  },
  {
    pergunta: "Uma rede quer revisar sua política de Educação Escolar Quilombola. Qual conjunto de medidas está mais alinhado ao marco vigente em 2026?",
    alternativas: [
      "manter currículo comum, acrescentar projetos culturais e concentrar estudantes em polos maiores para melhorar eficiência.",
      "garantir participação comunitária, mas preservar currículo, alimentação e transporte como decisões técnicas sem consulta.",
      "priorizar escolas no território e utilizar materiais locais, dispensando articulação com conhecimentos científicos e normas nacionais A proposta defenderia que a autenticidade territorial justificaria substituir referências curriculares externas por conhecimentos produzidos e validados na própria comunidade.",
      "focar no combate ao racismo, deixando território, transporte, alimentação e formação docente para políticas gerais da rede.",
      "articular Diretrizes de 2012, participação e consulta comunitária, PPP contextualizado, formação específica, materiais adequados, proteção territorial, alimentação culturalmente pertinente, PNEERQ e metas do PNE 2026."
    ],
    correta: 4,
    explicacao: "O marco atual é sistêmico: combina direitos territoriais, currículo, gestão, formação, material, alimentação, antirracismo e políticas nacionais recentes.",
    feedbackAcerto: "Você escolheu uma política integrada e atualizada, evitando reduzir Educação Escolar Quilombola a cultura, território ou combate ao racismo isoladamente.",
    feedbackErro: "A correta reúne os principais eixos vigentes. As demais fragmentam ou hierarquizam dimensões que precisam funcionar de forma articulada.",
    dicaBanca: "Questões integradoras exigem enxergar a modalidade como política completa, não como tema curricular."
  }
];
