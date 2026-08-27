// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// LDB — LEI Nº 9.394/1996 E ATUALIZAÇÕES ATÉ 26/08/2026
// BANCO REVISADO PARA O PADRÃO INSTITUTO ÁGATA
// 50 questões: lei seca + interpretação + situações práticas.
// ============================================================

const apoioLDB = [
    {
        "pergunta": "De acordo com o art. 1º da LDB, a educação abrange os processos formativos que se desenvolvem:",
        "alternativas": [
            "na vida familiar, na convivência humana, no trabalho, nas instituições de ensino e pesquisa, nos movimentos sociais, nas organizações da sociedade civil e nas manifestações culturais.",
            "exclusivamente nas instituições escolares públicas e privadas.",
            "somente na família e nas instituições de ensino formal.",
            "apenas nas instituições de ensino, pesquisa e extensão.",
            "exclusivamente por meio do ensino organizado em currículos oficiais."
        ],
        "correta": 0,
        "explicacao": "A LDB adota conceito amplo de educação. O art. 1º inclui vida familiar, convivência humana, trabalho, instituições de ensino e pesquisa, movimentos sociais, organizações da sociedade civil e manifestações culturais.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Ágata costuma cobrar a literalidade dos artigos iniciais da LDB."
    },
    {
        "pergunta": "Nos termos da LDB, a educação escolar deverá vincular-se:",
        "alternativas": [
            "apenas ao mercado de trabalho.",
            "ao mundo do trabalho e à prática social.",
            "exclusivamente à preparação para exames.",
            "à prática social, sem relação com o mundo do trabalho.",
            "somente à formação científica."
        ],
        "correta": 1,
        "explicacao": "O § 2º do art. 1º determina que a educação escolar se vincule ao mundo do trabalho e à prática social.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Desconfie de alternativas com 'apenas', 'somente' ou 'exclusivamente'."
    },
    {
        "pergunta": "A educação, segundo o art. 2º da LDB, tem por finalidade:",
        "alternativas": [
            "exclusivamente a qualificação profissional.",
            "a transmissão de conteúdos mínimos nacionais, sem participação da família.",
            "prioritariamente a preparação para o ensino superior.",
            "o pleno desenvolvimento do educando, seu preparo para o exercício da cidadania e sua qualificação para o trabalho.",
            "apenas o desenvolvimento intelectual do educando."
        ],
        "correta": 3,
        "explicacao": "O art. 2º reúne três finalidades: pleno desenvolvimento do educando, preparo para o exercício da cidadania e qualificação para o trabalho.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "A banca pode trocar um dos três elementos por expressão parecida."
    },
    {
        "pergunta": "Assinale a alternativa que apresenta princípio do ensino expressamente previsto no art. 3º da LDB:",
        "alternativas": [
            "igualdade de condições para o acesso e permanência na escola.",
            "gratuidade do ensino apenas no ensino fundamental.",
            "centralização obrigatória da gestão escolar.",
            "uniformidade absoluta de concepções pedagógicas.",
            "seleção de estudantes por desempenho para garantir padrão de qualidade."
        ],
        "correta": 0,
        "explicacao": "A igualdade de condições para acesso e permanência na escola é princípio do ensino previsto no art. 3º.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Princípio da igualdade envolve acesso e permanência, não só matrícula."
    },
    {
        "pergunta": "Entre as garantias do dever do Estado com a educação está a educação básica obrigatória e gratuita:",
        "alternativas": [
            "dos 7 aos 17 anos.",
            "dos 4 aos 17 anos.",
            "dos 5 aos 18 anos.",
            "dos 6 aos 14 anos.",
            "dos 0 aos 17 anos."
        ],
        "correta": 1,
        "explicacao": "O art. 4º assegura educação básica obrigatória e gratuita dos 4 aos 17 anos.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Ágata costuma trocar as faixas etárias."
    },
    {
        "pergunta": "A LDB assegura atendimento educacional especializado gratuito aos educandos com deficiência, transtornos globais do desenvolvimento e altas habilidades ou superdotação:",
        "alternativas": [
            "transversal a todos os níveis, etapas e modalidades, preferencialmente na rede regular de ensino.",
            "apenas quando houver laudo médico renovado anualmente.",
            "exclusivamente em escolas especiais.",
            "exclusivamente fora do turno da escola regular.",
            "somente no ensino fundamental."
        ],
        "correta": 0,
        "explicacao": "O art. 4º prevê AEE gratuito, transversal a todos os níveis, etapas e modalidades, preferencialmente na rede regular.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Não transforme 'preferencialmente' em 'exclusivamente'."
    },
    {
        "pergunta": "Desde a alteração promovida pela Lei nº 15.276/2025, integra as garantias do dever do Estado previstas na LDB:",
        "alternativas": [
            "laboratório de robótica obrigatório em toda escola brasileira.",
            "transporte escolar gratuito para qualquer estudante de escola privada.",
            "fornecimento obrigatório de uniforme por todas as escolas privadas.",
            "refeição integral em todas as instituições de ensino superior.",
            "água potável e infraestrutura física e sanitária adequadas no ambiente escolar."
        ],
        "correta": 4,
        "explicacao": "A Lei nº 15.276/2025 acrescentou ao art. 4º da LDB a garantia de água potável e infraestrutura física e sanitária adequadas no ambiente escolar.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Atualização recente: forte candidata a cobrança."
    },
    {
        "pergunta": "O acesso à educação básica obrigatória, segundo a LDB, é:",
        "alternativas": [
            "faculdade dos sistemas de ensino.",
            "direito restrito aos estudantes matriculados até o início do ano letivo.",
            "direito apenas coletivo, sem exigibilidade individual.",
            "direito público subjetivo.",
            "benefício administrativo condicionado à disponibilidade orçamentária."
        ],
        "correta": 3,
        "explicacao": "O art. 5º qualifica o acesso à educação básica obrigatória como direito público subjetivo.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "A expressão 'direito público subjetivo' é muito cobrada."
    },
    {
        "pergunta": "É dever dos pais ou responsáveis efetuar a matrícula das crianças na educação básica a partir dos:",
        "alternativas": [
            "7 anos de idade.",
            "5 anos de idade.",
            "4 anos de idade.",
            "6 anos de idade.",
            "3 anos de idade."
        ],
        "correta": 2,
        "explicacao": "O art. 6º da LDB estabelece o dever de matrícula a partir dos 4 anos.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Associe: obrigatoriedade da educação básica = 4 a 17 anos."
    },
    {
        "pergunta": "Nos termos da LDB, a União, os Estados, o Distrito Federal e os Municípios organizarão, em regime de colaboração:",
        "alternativas": [
            "somente o financiamento do ensino superior.",
            "exclusivamente a educação especial.",
            "as escolas privadas do país.",
            "apenas o ensino fundamental.",
            "seus sistemas de ensino."
        ],
        "correta": 4,
        "explicacao": "O art. 8º prevê organização dos sistemas de ensino em regime de colaboração.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Regime de colaboração é expressão-chave da organização da educação nacional."
    },
    {
        "pergunta": "Na organização dos sistemas de ensino, cabe à União:",
        "alternativas": [
            "exercer função exclusivamente municipal.",
            "autorizar toda instituição privada de educação infantil municipal.",
            "substituir permanentemente Estados e Municípios em suas atribuições.",
            "administrar diretamente todas as escolas públicas do país.",
            "coordenar a política nacional de educação, articulando os diferentes níveis e sistemas e exercendo função normativa, redistributiva e supletiva."
        ],
        "correta": 4,
        "explicacao": "A União coordena a política nacional e exerce funções normativa, redistributiva e supletiva.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Ágata costuma cobrar as funções da União em conjunto."
    },
    {
        "pergunta": "Segundo a LDB, os Estados incumbir-se-ão prioritariamente de assegurar:",
        "alternativas": [
            "apenas a educação infantil.",
            "exclusivamente o ensino superior.",
            "o ensino fundamental e oferecer, com prioridade, o ensino médio.",
            "somente a educação profissional.",
            "creches e pré-escolas, sem atuação no ensino fundamental."
        ],
        "correta": 2,
        "explicacao": "O art. 10 atribui aos Estados assegurar o ensino fundamental e oferecer, com prioridade, o ensino médio.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Compare as prioridades de Estados e Municípios."
    },
    {
        "pergunta": "Após a Lei nº 15.369/2026, a LDB estabelece que os Municípios devem oferecer:",
        "alternativas": [
            "educação infantil somente nas zonas urbanas.",
            "somente creches nas zonas rurais.",
            "educação infantil em creches e pré-escolas nas zonas urbanas e rurais, na proporção da distribuição populacional, e, com prioridade, o ensino fundamental.",
            "educação superior antes de atender o ensino fundamental.",
            "ensino médio como prioridade absoluta."
        ],
        "correta": 2,
        "explicacao": "A Lei nº 15.369/2026 atualizou o art. 11, V, explicitando a oferta municipal de educação infantil nas zonas urbanas e rurais, na proporção da distribuição populacional.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Atualização de 2026: memorize a menção expressa a zonas urbanas e rurais."
    },
    {
        "pergunta": "De acordo com a LDB, os estabelecimentos de ensino têm a incumbência de:",
        "alternativas": [
            "substituir o Conselho Tutelar.",
            "fixar as competências da União em matéria educacional.",
            "elaborar e executar sua proposta pedagógica.",
            "definir as diretrizes curriculares nacionais.",
            "legislar sobre o sistema federal de ensino."
        ],
        "correta": 2,
        "explicacao": "O art. 12 atribui aos estabelecimentos de ensino a elaboração e execução de sua proposta pedagógica.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Diferencie incumbências da escola, dos docentes e dos entes federativos."
    },
    {
        "pergunta": "A LDB determina que os estabelecimentos de ensino notifiquem ao Conselho Tutelar:",
        "alternativas": [
            "todo estudante que obtiver nota inferior à média em uma avaliação.",
            "apenas casos de abandono escolar já consumado.",
            "qualquer atraso de estudante, independentemente de frequência.",
            "a relação dos alunos que apresentem faltas acima de 30% do percentual permitido em lei.",
            "somente faltas acima de 75% do total de aulas do ano."
        ],
        "correta": 3,
        "explicacao": "O art. 12 prevê notificação ao Conselho Tutelar da relação dos alunos que apresentem quantidade de faltas acima de 30% do percentual permitido em lei.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Pegadinha clássica: não é 30% das aulas; é 30% do percentual de faltas permitido em lei."
    },
    {
        "pergunta": "Entre as incumbências dos docentes previstas na LDB está:",
        "alternativas": [
            "aprovar o orçamento municipal.",
            "definir as diretrizes nacionais da educação.",
            "participar da elaboração da proposta pedagógica do estabelecimento de ensino.",
            "exercer, obrigatoriamente, direção administrativa da escola.",
            "autorizar o funcionamento de escolas privadas."
        ],
        "correta": 2,
        "explicacao": "O art. 13 prevê a participação dos docentes na elaboração da proposta pedagógica.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Art. 13 = incumbências dos docentes."
    },
    {
        "pergunta": "A gestão democrática do ensino público na educação básica observará, entre outros, o princípio da:",
        "alternativas": [
            "proibição da participação da comunidade escolar.",
            "nomeação vitalícia de dirigentes escolares.",
            "centralização de todas as decisões na União.",
            "participação dos profissionais da educação na elaboração do projeto pedagógico da escola.",
            "exclusão dos conselhos escolares."
        ],
        "correta": 3,
        "explicacao": "O art. 14 prevê participação dos profissionais da educação na elaboração do projeto pedagógico e participação das comunidades escolar e local em conselhos escolares ou equivalentes.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Gestão democrática = participação, não centralização."
    },
    {
        "pergunta": "Os sistemas de ensino assegurarão às unidades escolares públicas de educação básica que os integram:",
        "alternativas": [
            "autonomia para deixar de cumprir a carga horária legal.",
            "independência total das normas do sistema.",
            "progressivos graus de autonomia pedagógica e administrativa e de gestão financeira.",
            "poder para extinguir etapas da educação básica.",
            "autonomia legislativa para criar leis federais."
        ],
        "correta": 2,
        "explicacao": "O art. 15 prevê progressivos graus de autonomia pedagógica e administrativa e de gestão financeira, observadas as normas gerais de direito financeiro público.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Autonomia escolar não significa ausência de regras."
    },
    {
        "pergunta": "Integram os sistemas municipais de ensino:",
        "alternativas": [
            "apenas escolas municipais de ensino fundamental.",
            "todas as instituições privadas de ensino médio do Município.",
            "universidades federais instaladas no Município.",
            "somente a Secretaria Municipal de Educação.",
            "instituições de ensino fundamental, médio e educação infantil mantidas pelo poder público municipal; instituições de educação infantil criadas e mantidas pela iniciativa privada; e órgãos municipais de educação."
        ],
        "correta": 4,
        "explicacao": "O art. 18 enumera esses componentes do sistema municipal de ensino.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Esse formato já apareceu em prova do Instituto Ágata."
    },
    {
        "pergunta": "A educação escolar compõe-se de:",
        "alternativas": [
            "educação básica, formada pela educação infantil, ensino fundamental e ensino médio, e educação superior.",
            "educação básica formada apenas por ensino fundamental e médio.",
            "somente ensino fundamental e ensino médio.",
            "ensino fundamental e educação superior apenas.",
            "educação infantil e educação profissional apenas."
        ],
        "correta": 0,
        "explicacao": "O art. 21 divide a educação escolar em educação básica e educação superior; a básica compreende educação infantil, ensino fundamental e ensino médio.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Questão direta e muito provável em nível médio."
    },
    {
        "pergunta": "A educação básica poderá organizar-se em séries anuais, períodos semestrais, ciclos, alternância regular de períodos de estudos, grupos não seriados ou outras formas:",
        "alternativas": [
            "sem possibilidade de considerar idade ou competência.",
            "exclusivamente para escolas privadas.",
            "sempre que o interesse do processo de aprendizagem assim o recomendar.",
            "somente mediante autorização do Congresso Nacional.",
            "apenas no ensino médio."
        ],
        "correta": 2,
        "explicacao": "O art. 23 admite diferentes formas de organização sempre que o interesse do processo de aprendizagem assim recomendar.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Não confunda flexibilidade organizacional com liberdade para descumprir a LDB."
    },
    {
        "pergunta": "Na educação básica, a classificação em qualquer série ou etapa, exceto a primeira do ensino fundamental, pode ser feita:",
        "alternativas": [
            "por promoção, por transferência ou independentemente de escolarização anterior, mediante avaliação feita pela escola.",
            "apenas por transferência.",
            "exclusivamente por decisão da família.",
            "apenas mediante exame nacional aplicado pela União.",
            "somente por idade cronológica."
        ],
        "correta": 0,
        "explicacao": "O art. 24 permite classificação por promoção, transferência ou avaliação feita pela escola, conforme regulamentação do sistema.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Questões sobre classificação aparecem com frequência em pedagogia."
    },
    {
        "pergunta": "A verificação do rendimento escolar observará, entre outros critérios:",
        "alternativas": [
            "impossibilidade de avanço mediante verificação do aprendizado.",
            "proibição de estudos de recuperação.",
            "prevalência obrigatória da prova final.",
            "avaliação exclusivamente quantitativa.",
            "avaliação contínua e cumulativa, com prevalência dos aspectos qualitativos sobre os quantitativos e dos resultados ao longo do período sobre eventuais provas finais."
        ],
        "correta": 4,
        "explicacao": "O art. 24 estabelece avaliação contínua e cumulativa e prevalência dos aspectos qualitativos e do desempenho ao longo do período.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Esse é um padrão de questão já usado pela Ágata em 2026."
    },
    {
        "pergunta": "A LDB determina a obrigatoriedade de estudos de recuperação para os casos de baixo rendimento escolar:",
        "alternativas": [
            "exclusivamente a pedido da família.",
            "somente mediante autorização do Conselho Tutelar.",
            "de preferência paralelos ao período letivo, disciplinados pelas instituições de ensino em seus regimentos.",
            "apenas no ensino médio.",
            "somente após o encerramento do ano."
        ],
        "correta": 2,
        "explicacao": "O art. 24 prevê estudos de recuperação, de preferência paralelos ao período letivo.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Palavra-chave: 'de preferência paralelos'."
    },
    {
        "pergunta": "Para aprovação, a frequência mínima exigida pela LDB, ressalvadas regras específicas legalmente previstas, é de:",
        "alternativas": [
            "60% do total de horas letivas.",
            "75% do total de horas letivas.",
            "70% do total de horas letivas.",
            "80% do total de horas letivas.",
            "50% do total de horas letivas."
        ],
        "correta": 1,
        "explicacao": "O art. 24 exige frequência mínima de 75% do total de horas letivas para aprovação.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Não confunda frequência mínima com percentual usado na comunicação ao Conselho Tutelar."
    },
    {
        "pergunta": "A Lei nº 15.360/2026 acrescentou o art. 25-A à LDB. Entre as condições que o poder público deve assegurar às escolas públicas de educação básica está:",
        "alternativas": [
            "piscina olímpica e auditório em todas as escolas.",
            "internato escolar obrigatório.",
            "estádio de futebol e pista de atletismo.",
            "biblioteca, laboratórios de ciências e de informática equipados e acesso à internet.",
            "transporte aéreo para estudantes de zonas rurais."
        ],
        "correta": 3,
        "explicacao": "O novo art. 25-A prevê condições mínimas como biblioteca, laboratórios de ciências e informática equipados, internet, quadra coberta, cozinha, refeitório, banheiros e acessibilidade, entre outras.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Alteração de março de 2026: conteúdo muito atual."
    },
    {
        "pergunta": "Sobre os currículos da educação infantil, do ensino fundamental e do ensino médio, a LDB estabelece que devem ter:",
        "alternativas": [
            "currículo determinado exclusivamente pelo Município.",
            "somente parte diversificada, sem base nacional comum.",
            "conteúdo definido apenas pelas famílias.",
            "base nacional comum, complementada por parte diversificada exigida pelas características regionais e locais da sociedade, da cultura, da economia e dos educandos.",
            "currículo exclusivamente nacional e idêntico em todas as escolas."
        ],
        "correta": 3,
        "explicacao": "O art. 26 prevê base nacional comum complementada por parte diversificada.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Questão semelhante já foi cobrada pela Ágata."
    },
    {
        "pergunta": "Conforme alteração da Lei nº 15.468/2026, a LDB passou a prever como componente curricular obrigatório, no âmbito do estudo da realidade social e política:",
        "alternativas": [
            "engenharia ambiental.",
            "educação política e direitos da cidadania.",
            "direito empresarial.",
            "contabilidade pública.",
            "educação militar."
        ],
        "correta": 1,
        "explicacao": "A Lei nº 15.468/2026 acrescentou o § 9º-B ao art. 26, tornando educação política e direitos da cidadania componente curricular obrigatório nesse âmbito.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Atualização de julho de 2026: revisar antes da prova."
    },
    {
        "pergunta": "Na educação infantil, a avaliação será feita:",
        "alternativas": [
            "mediante acompanhamento e registro do desenvolvimento das crianças, sem o objetivo de promoção, mesmo para o acesso ao ensino fundamental.",
            "exclusivamente por notas numéricas.",
            "com reprovação anual obrigatória.",
            "por prova final obrigatória para ingresso no ensino fundamental.",
            "por exame nacional padronizado."
        ],
        "correta": 0,
        "explicacao": "O art. 31 determina acompanhamento e registro do desenvolvimento sem objetivo de promoção, mesmo para acesso ao ensino fundamental.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Educação infantil: avaliação sem objetivo de promoção."
    },
    {
        "pergunta": "A educação infantil será oferecida em:",
        "alternativas": [
            "creches somente para crianças de 2 a 4 anos.",
            "pré-escolas apenas para crianças de 5 anos.",
            "creches de 0 a 5 anos e pré-escolas de 6 a 7 anos.",
            "instituições de ensino fundamental para todas as crianças de 0 a 5 anos.",
            "creches, ou entidades equivalentes, para crianças de até 3 anos, e pré-escolas para crianças de 4 a 5 anos."
        ],
        "correta": 4,
        "explicacao": "O art. 30 organiza a educação infantil em creches (até 3 anos) e pré-escolas (4 a 5 anos).",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Faixas etárias são alvo clássico de troca nas alternativas."
    },
    {
        "pergunta": "O ensino fundamental obrigatório, de acordo com a LDB, tem duração de:",
        "alternativas": [
            "8 anos, iniciando aos 6 anos.",
            "9 anos, iniciando aos 6 anos.",
            "9 anos, iniciando aos 7 anos.",
            "8 anos, iniciando aos 7 anos.",
            "10 anos, iniciando aos 5 anos."
        ],
        "correta": 1,
        "explicacao": "O art. 32 prevê ensino fundamental obrigatório com duração de 9 anos, gratuito na escola pública, iniciando-se aos 6 anos.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Memorize 9 anos / início aos 6."
    },
    {
        "pergunta": "Entre os objetivos do ensino fundamental está:",
        "alternativas": [
            "somente o domínio da leitura, sem escrita e cálculo.",
            "a especialização profissional precoce obrigatória.",
            "a seleção de estudantes para o ensino médio.",
            "o desenvolvimento da capacidade de aprender, tendo como meios básicos o pleno domínio da leitura, da escrita e do cálculo.",
            "exclusivamente a preparação para vestibulares."
        ],
        "correta": 3,
        "explicacao": "O art. 32 inclui o desenvolvimento da capacidade de aprender, com pleno domínio da leitura, da escrita e do cálculo.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Ágata costuma preservar quase toda a frase e trocar um elemento."
    },
    {
        "pergunta": "A educação especial, para os efeitos da LDB, é modalidade de educação escolar oferecida:",
        "alternativas": [
            "exclusivamente em instituições segregadas.",
            "apenas mediante decisão judicial.",
            "somente no ensino fundamental.",
            "exclusivamente por instituições privadas.",
            "preferencialmente na rede regular de ensino."
        ],
        "correta": 4,
        "explicacao": "O art. 58 define a educação especial como modalidade oferecida preferencialmente na rede regular de ensino.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "A palavra 'preferencialmente' é central."
    },
    {
        "pergunta": "A oferta de educação especial, nos termos da LDB:",
        "alternativas": [
            "é restrita à educação básica.",
            "termina obrigatoriamente ao fim do ensino médio.",
            "depende exclusivamente de instituição especializada.",
            "tem início na educação infantil e estende-se ao longo da vida.",
            "começa apenas no ensino fundamental."
        ],
        "correta": 3,
        "explicacao": "O § 3º do art. 58 estabelece que a oferta tem início na educação infantil e estende-se ao longo da vida.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Atualização incorporada à LDB desde 2018."
    },
    {
        "pergunta": "Quando necessário, a LDB prevê, na escola regular:",
        "alternativas": [
            "substituição obrigatória de toda atividade da classe comum por atendimento separado.",
            "atendimento exclusivamente clínico.",
            "retirada permanente do estudante das atividades coletivas.",
            "dispensa do estudante do currículo escolar.",
            "serviços de apoio especializado para atender às peculiaridades da clientela da educação especial."
        ],
        "correta": 4,
        "explicacao": "O § 1º do art. 58 prevê serviços de apoio especializado, na escola regular, quando necessários.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Esta é a conexão correta da LDB com o cargo de Apoio Escolar."
    },
    {
        "pergunta": "O art. 59 da LDB determina que os sistemas de ensino assegurem aos educandos da educação especial:",
        "alternativas": [
            "currículo único sem qualquer adaptação.",
            "dispensa automática de avaliação.",
            "currículos, métodos, técnicas, recursos educativos e organização específicos para atender às suas necessidades.",
            "proibição de acesso a programas sociais suplementares.",
            "segregação obrigatória em classe especial."
        ],
        "correta": 2,
        "explicacao": "O art. 59, I, prevê currículos, métodos, técnicas, recursos educativos e organização específicos.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Questão de lei seca muito relevante para Apoio Escolar."
    },
    {
        "pergunta": "A terminalidade específica prevista no art. 59 da LDB destina-se:",
        "alternativas": [
            "aos educandos que não puderem atingir o nível exigido para conclusão do ensino fundamental em virtude de suas deficiências, nas condições legais.",
            "apenas a estudantes superdotados.",
            "a todos os alunos da educação infantil.",
            "exclusivamente a estudantes do ensino superior.",
            "a qualquer aluno com nota baixa em uma disciplina."
        ],
        "correta": 0,
        "explicacao": "O art. 59 prevê terminalidade específica nas hipóteses legalmente indicadas e aceleração para superdotados.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Não confunda terminalidade específica com aceleração."
    },
    {
        "pergunta": "Para educandos com altas habilidades ou superdotação, a LDB assegura:",
        "alternativas": [
            "proibição de avanço escolar.",
            "atendimento apenas após o ensino médio.",
            "currículo sem diferenciação.",
            "aceleração para concluir em menor tempo o programa escolar.",
            "retenção obrigatória para amadurecimento."
        ],
        "correta": 3,
        "explicacao": "O art. 59, II, prevê aceleração para concluir em menor tempo o programa escolar.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "A banca pode inverter terminalidade específica e aceleração."
    },
    {
        "pergunta": "A LDB assegura aos educandos da educação especial:",
        "alternativas": [
            "somente profissionais sem formação pedagógica.",
            "proibição de capacitação do professor da classe comum.",
            "professores com especialização adequada para atendimento especializado e professores do ensino regular capacitados para a integração desses educandos nas classes comuns.",
            "apenas professores de instituições privadas.",
            "um único modelo de profissional para todas as necessidades."
        ],
        "correta": 2,
        "explicacao": "O art. 59, III, prevê tanto professores com especialização adequada para atendimento especializado quanto professores do ensino regular capacitados.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Observe que a lei menciona dois perfis de formação."
    },
    {
        "pergunta": "Em uma escola pública, um estudante com deficiência necessita de apoio para alimentação, higiene e locomoção, sem que isso substitua as atribuições pedagógicas do professor. À luz da LDB, a leitura mais adequada é:",
        "alternativas": [
            "a matrícula na classe comum deve ser cancelada.",
            "o apoio especializado somente pode ocorrer fora da escola regular.",
            "o estudante deve ser retirado de todas as atividades coletivas.",
            "o apoio deve assumir integralmente o planejamento pedagógico da turma.",
            "o apoio pode integrar os serviços necessários à inclusão, articulado ao processo escolar e sem afastar o estudante da classe comum por conveniência."
        ],
        "correta": 4,
        "explicacao": "A LDB orienta a oferta preferencial na rede regular e prevê serviços de apoio especializado quando necessários. O apoio não autoriza isolamento por mera conveniência.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Situação prática, mas agora vinculada aos arts. 58 e 59 — não apenas 'boa conduta' genérica."
    },
    {
        "pergunta": "Uma escola decide impedir a matrícula de estudante com deficiência alegando que não possui turma especial. Considerando a LDB, essa decisão é:",
        "alternativas": [
            "incompatível com a orientação de oferta preferencial da educação especial na rede regular e com as garantias de acesso à educação.",
            "compatível com a lei, porque educação especial só pode ocorrer em turma especial.",
            "válida se a família não apresentar laudo médico mensal.",
            "necessária até que exista escola especializada no Município.",
            "obrigatória sempre que houver necessidade de apoio."
        ],
        "correta": 0,
        "explicacao": "A LDB prioriza a oferta da educação especial na rede regular e assegura o direito à educação. A inexistência de turma especial não justifica, por si só, impedir matrícula.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Ágata gosta de situações que exigem reconhecer uma regra legal."
    },
    {
        "pergunta": "Uma escola avalia uma criança da pré-escola com prova final e condiciona sua passagem ao ensino fundamental à nota mínima. De acordo com a LDB, a medida é:",
        "alternativas": [
            "incorreta, pois a avaliação na educação infantil ocorre por acompanhamento e registro, sem objetivo de promoção.",
            "facultativa para cada professor.",
            "obrigatória se houver autorização da família.",
            "correta apenas para crianças de 5 anos.",
            "correta, porque a pré-escola é etapa seletiva."
        ],
        "correta": 0,
        "explicacao": "O art. 31 afasta finalidade promocional da avaliação na educação infantil.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Questão prática diretamente vinculada a um dispositivo."
    },
    {
        "pergunta": "Um aluno apresenta baixo rendimento durante o ano. A escola informa que só oferecerá recuperação depois da prova final. A orientação da LDB é que os estudos de recuperação sejam:",
        "alternativas": [
            "sempre posteriores ao ano letivo.",
            "preferencialmente paralelos ao período letivo.",
            "restritos aos anos finais do ensino fundamental.",
            "ofertados somente mediante ordem judicial.",
            "proibidos durante o período letivo."
        ],
        "correta": 1,
        "explicacao": "A LDB prevê recuperação obrigatória nos casos de baixo rendimento, de preferência paralela ao período letivo.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Palavra 'preferencialmente' costuma aparecer como pegadinha."
    },
    {
        "pergunta": "Um Município pretende priorizar a expansão do ensino superior municipal antes de atender plenamente sua educação infantil e seu ensino fundamental. Pela LDB, essa atuação:",
        "alternativas": [
            "depende apenas de autorização da escola.",
            "só é admitida em outros níveis quando estiverem atendidas plenamente as necessidades de sua área de competência e houver recursos acima dos mínimos constitucionais vinculados.",
            "é livre e independe das necessidades de sua área de competência.",
            "é obrigatória em todos os Municípios.",
            "é sempre proibida, ainda que suas atribuições prioritárias estejam plenamente atendidas."
        ],
        "correta": 1,
        "explicacao": "O art. 11 condiciona a atuação municipal em outros níveis ao pleno atendimento das necessidades de sua área de competência e ao uso de recursos acima dos mínimos vinculados.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Questão comum sobre prioridade municipal."
    },
    {
        "pergunta": "A Lei nº 15.462/2026 atualizou a LDB para explicitar, entre as atividades de aperfeiçoamento profissional continuado dos profissionais da educação básica pública:",
        "alternativas": [
            "somente graduação inicial.",
            "cursos de qualificação, pós-graduação lato sensu e stricto sensu e período para realização de pesquisa na área da educação.",
            "apenas cursos livres de curta duração.",
            "apenas cursos oferecidos pela própria escola.",
            "exclusivamente atividades sem afastamento remunerado."
        ],
        "correta": 1,
        "explicacao": "A Lei nº 15.462/2026 alterou o art. 67, II, especificando essas atividades e mantendo a possibilidade de licenciamento periódico remunerado para esse fim.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Atualização de julho de 2026: alto valor de revisão."
    },
    {
        "pergunta": "Após a Lei nº 15.326/2026, são considerados professores da educação infantil, devendo ser enquadrados na carreira do magistério, os que:",
        "alternativas": [
            "prestam qualquer serviço terceirizado na educação infantil.",
            "atuam em qualquer função administrativa de creche, sem requisito de formação.",
            "trabalham apenas com alimentação escolar.",
            "atuam como voluntários em instituições privadas.",
            "exercem função docente e atuam diretamente com as crianças educandas, possuem a formação exigida e foram aprovados em concurso público, independentemente da designação do cargo."
        ],
        "correta": 4,
        "explicacao": "A Lei nº 15.326/2026 acrescentou o § 2º ao art. 61 da LDB com essa definição.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Não confunda profissional de apoio escolar com professor da educação infantil: a lei exige função docente e os demais requisitos."
    },
    {
        "pergunta": "Entre os princípios da valorização dos profissionais da educação escolar previstos na LDB está:",
        "alternativas": [
            "redução da experiência docente na valorização profissional.",
            "eliminação de período reservado a estudos.",
            "proibição de progressão funcional.",
            "aperfeiçoamento profissional continuado.",
            "ingresso exclusivamente por indicação política nos sistemas públicos."
        ],
        "correta": 3,
        "explicacao": "O art. 67 prevê valorização dos profissionais da educação, incluindo aperfeiçoamento profissional continuado.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Art. 67 é tema clássico de legislação educacional."
    },
    {
        "pergunta": "A LDB estabelece que a formação dos profissionais da educação terá como um de seus fundamentos:",
        "alternativas": [
            "a formação exclusivamente a distância.",
            "a associação entre teorias e práticas, mediante estágios supervisionados e capacitação em serviço.",
            "o desprezo pelas experiências anteriores.",
            "a ausência de formação continuada.",
            "a separação absoluta entre teoria e prática."
        ],
        "correta": 1,
        "explicacao": "O art. 61 prevê, entre os fundamentos, associação entre teorias e práticas e aproveitamento de formação e experiências anteriores.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Observe os fundamentos da formação profissional."
    },
    {
        "pergunta": "Também integra os fundamentos da formação dos profissionais da educação, na redação atual da LDB:",
        "alternativas": [
            "a substituição do Conselho Tutelar pela escola.",
            "a divulgação pública de dados sensíveis dos estudantes.",
            "a dispensa de capacitação sobre proteção de crianças e adolescentes.",
            "a obrigatoriedade de investigação criminal pelo professor.",
            "a proteção integral dos direitos de crianças e adolescentes e o apoio à formação permanente para identificação de maus-tratos, negligência e violência sexual."
        ],
        "correta": 4,
        "explicacao": "O art. 61 passou a incluir a proteção integral e a formação permanente para identificação de maus-tratos, negligência e violência sexual.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Relevante para Apoio Escolar porque conecta LDB e proteção da criança."
    },
    {
        "pergunta": "Uma escola mantém estudante com deficiência apenas como observador em atividades coletivas, embora seja possível sua participação com apoio e adaptações. À luz dos princípios da LDB e da educação especial, a conduta:",
        "alternativas": [
            "favorece igualdade de condições de permanência.",
            "é inadequada, pois o direito à permanência e à participação educacional não se satisfaz com presença meramente física quando barreiras podem ser reduzidas.",
            "substitui legalmente a necessidade de planejamento pedagógico.",
            "é exigida sempre que houver profissional de apoio.",
            "é obrigatória para evitar riscos."
        ],
        "correta": 1,
        "explicacao": "A LDB protege igualdade de condições de acesso e permanência e organiza a educação especial preferencialmente na rede regular, com recursos e apoios adequados.",
        "feedbackAcerto": "Excelente! Você identificou corretamente o que dispõe a LDB.",
        "feedbackErro": "Revise o dispositivo da LDB indicado na explicação e compare com as palavras-chave das alternativas.",
        "dicaBanca": "Aqui a situação prática depende de princípios reais da LDB."
    }
];

if (typeof window !== 'undefined') { window.apoioLDB = apoioLDB; }
