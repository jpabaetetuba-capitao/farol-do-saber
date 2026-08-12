// Banco de questões — FUNDEB (2026)
// Base legal principal: EC nº 108/2020 e Lei nº 14.113/2020, com alterações posteriores.
// Questões autorais em nível de concurso para professor/gestor educacional.

const fundeb = [
  {
    pergunta: "Uma candidata afirmou que o Fundeb atual continua sendo um fundo temporário sujeito a nova prorrogação constitucional. Considerando o desenho vigente, essa afirmação é incorreta porque:",
    alternativas: [
      "A Emenda Constitucional nº 108/2020 tornou o Fundeb permanente e inseriu sua disciplina estrutural no texto constitucional.",
      "A Lei nº 14.113/2020 prorrogou o Fundeb por vinte anos e condicionou nova vigência à aprovação do Congresso Nacional.",
      "A Emenda Constitucional nº 59/2009 transformou o Fundef em Fundeb e fixou vigência por prazo indeterminado.",
      "O Plano Nacional de Educação de 2014 converteu o Fundeb em política permanente ao vinculá-lo às metas de financiamento.",
      "A Constituição manteve o Fundeb transitório, mas autorizou sua renovação automática enquanto houver matrículas na educação básica."
    ],
    correta: 0,
    explicacao: "A EC nº 108/2020 tornou o Fundeb permanente e passou a discipliná-lo no art. 212-A da Constituição. A Lei nº 14.113/2020 regulamenta o fundo permanente.",
    feedbackAcerto: "Você identificou a mudança constitucional decisiva: o novo Fundeb não depende de nova prorrogação periódica, porque sua permanência decorre da EC nº 108/2020.",
    feedbackErro: "A correta é a referência à EC nº 108/2020. As demais atribuem a permanência a normas que não produziram esse efeito ou mantêm, de forma equivocada, a lógica transitória do modelo anterior.",
    dicaBanca: "EC 108/2020 = permanência constitucional do Fundeb."
  },
  {
    pergunta: "Sobre a natureza e a organização do Fundeb, assinale a alternativa correta.",
    alternativas: [
      "Existe um fundo nacional único administrado pela União, que redistribui diretamente todos os recursos da educação básica aos entes.",
      "São fundos de natureza contábil constituídos no âmbito de cada Estado e do Distrito Federal, totalizando vinte e sete fundos.",
      "Cada Município mantém um fundo próprio e independente, enquanto os Estados participam por meio da complementação federal.",
      "O Fundeb possui personalidade jurídica própria e celebra contratos diretamente com escolas e fornecedores das redes públicas.",
      "A União integra a composição ordinária de cada fundo estadual como ente arrecadador das receitas locais vinculadas à educação em cada exercício."
    ],
    correta: 1,
    explicacao: "O Fundeb não é um caixa nacional único. A sistemática compreende fundos de natureza contábil no âmbito de cada Estado e do Distrito Federal, reunindo receitas e matrículas segundo as regras legais.",
    feedbackAcerto: "Você reconheceu a arquitetura federativa do Fundeb: vinte e sete fundos contábeis, e não um fundo nacional com personalidade jurídica própria.",
    feedbackErro: "A alternativa correta descreve os fundos estaduais e distrital. As demais criam fundos municipais autônomos, personalidade jurídica ou centralização nacional que não correspondem ao modelo legal.",
    dicaBanca: "Fundeb: 26 fundos estaduais + 1 do DF."
  },
  {
    pergunta: "Após a EC nº 108/2020, a norma que regulamenta de forma central o Fundeb permanente é:",
    alternativas: [
      "Lei nº 9.394/1996, responsável por instituir a cesta tributária e as modalidades de complementação federal e definiu diretamente as regras de complementação utilizadas pelos entes federativos após 2020.",
      "Lei nº 13.005/2014, que regulamenta os mecanismos de VAAF, VAAT e VAAR em cada rede de ensino.",
      "Lei nº 14.113/2020, que disciplina o Fundeb permanente e a distribuição, utilização e controle de seus recursos.",
      "Lei nº 11.494/2007, mantida como marco regulatório integral do fundo após a reforma constitucional de 2020.",
      "Lei nº 14.276/2021, que criou o Fundeb permanente e introduziu pela primeira vez a complementação da União."
    ],
    correta: 2,
    explicacao: "A Lei nº 14.113/2020 regulamenta o Fundeb permanente. Leis posteriores, como a Lei nº 14.276/2021, alteraram pontos dessa regulamentação, mas não substituíram seu papel central.",
    feedbackAcerto: "Você distinguiu a norma instituidora do regime atual das leis que tratam de educação em geral ou que apenas alteraram a regulamentação posterior.",
    feedbackErro: "A correta é a Lei nº 14.113/2020. A Lei nº 11.494/2007 regulava o Fundeb anterior, enquanto LDB, PNE e Lei nº 14.276/2021 têm funções distintas.",
    dicaBanca: "Novo Fundeb: EC 108/2020 + Lei 14.113/2020."
  },
  {
    pergunta: "Um Município pretende usar recursos do Fundeb para reformar a sede administrativa da Secretaria de Turismo, alegando que o prédio também receberá eventos estudantis. A aplicação é incompatível com a lei porque:",
    alternativas: [
      "a reforma de prédios administrativos é admitida quando o Município demonstra benefício indireto aos estudantes da rede.",
      "os recursos do fundo podem financiar qualquer política municipal vinculada ao desenvolvimento social e à formação cidadã incluindo ações de assistência, cultura e turismo previstas em planejamento intersetorial do Município.",
      "a destinação é possível quando a despesa recebe aprovação prévia do CACS-Fundeb e consta da lei orçamentária anual.",
      "os recursos devem financiar ações de manutenção e desenvolvimento do ensino da educação básica pública, nos termos legais.",
      "a vinculação à educação deixa de existir para a parcela que exceder o mínimo destinado à remuneração dos profissionais."
    ],
    correta: 3,
    explicacao: "O art. 25 da Lei nº 14.113/2020 vincula os recursos do Fundeb a ações de manutenção e desenvolvimento do ensino da educação básica pública, em consonância com o art. 70 da LDB.",
    feedbackAcerto: "Você aplicou corretamente o critério de finalidade da despesa. Uma justificativa indireta ou autorização administrativa não transforma gasto estranho à MDE em despesa financiável pelo Fundeb.",
    feedbackErro: "A correta exige enquadramento em MDE da educação básica pública. Aprovação do conselho, previsão orçamentária ou existência de saldo não afastam a vinculação legal.",
    dicaBanca: "Antes de analisar o gasto, pergunte: é MDE da educação básica pública?"
  },
  {
    pergunta: "Na distribuição ordinária dos recursos do Fundeb entre Estado e Municípios, o elemento central relacionado ao atendimento educacional é:",
    alternativas: [
      "a população residente em cada ente, com correção anual pelo índice de desenvolvimento humano municipal.",
      "a quantidade de escolas públicas existentes, diferenciada pelo porte físico e pelo número de profissionais lotados e corrigida pela quantidade de turnos e pela área construída dos estabelecimentos de cada rede.",
      "a arrecadação própria de cada rede, ajustada pela proporção de docentes em exercício na educação básica.",
      "o número de servidores vinculados à educação, ponderado pela jornada semanal e pela etapa em que atuam.",
      "o número de matrículas consideradas para o financiamento, submetidas às ponderações e aos critérios previstos na legislação."
    ],
    correta: 4,
    explicacao: "A distribuição considera matrículas elegíveis segundo os âmbitos de atuação prioritária e aplica ponderações relacionadas às etapas, modalidades, jornada, tipos de estabelecimento e outros fatores legais.",
    feedbackAcerto: "Você identificou que o Fundeb acompanha o atendimento educacional por meio das matrículas consideradas na sistemática de distribuição, e não pela população geral ou pelo quadro de servidores.",
    feedbackErro: "A correta menciona matrículas e ponderações. Quantidade de escolas, população total, arrecadação isolada ou número de servidores não constituem o critério central de distribuição.",
    dicaBanca: "FUNDEB distribui recursos com base em matrículas consideradas e ponderadas."
  },
  {
    pergunta: "Para fins de distribuição dos recursos do Fundeb, a Lei nº 14.113/2020 admite dupla matrícula, entre outras hipóteses, para estudantes:",
    alternativas: [
      "da rede pública regular que recebem atendimento educacional especializado, conforme as condições previstas na legislação.",
      "matriculados simultaneamente em duas escolas regulares da mesma rede por escolha da família durante o ano letivo.",
      "que frequentam reforço escolar oferecido por instituição privada contratada pela secretaria municipal de educação.",
      "inscritos em curso preparatório extracurricular e no ensino regular, desde que ambos utilizem currículo alinhado à BNCC.",
      "que participam de projeto de contraturno sem vínculo com atendimento educacional especializado ou educação profissional articulada."
    ],
    correta: 0,
    explicacao: "A lei admite dupla matrícula em hipóteses específicas, incluindo estudante da educação regular da rede pública que recebe atendimento educacional especializado.",
    feedbackAcerto: "Você reconheceu uma exceção legal importante: a dupla contagem não decorre de duas inscrições quaisquer, mas de situações expressamente previstas, como o AEE.",
    feedbackErro: "A correta é a matrícula regular combinada com AEE. As demais descrevem duplicidades ou atividades complementares que, por si, não geram a dupla matrícula prevista na lei.",
    dicaBanca: "Dupla matrícula no Fundeb é exceção legal, não duplicidade administrativa livre."
  },
  {
    pergunta: "Uma técnica afirma que as ponderações do Fundeb são fixas para sempre e que uma matrícula deve conservar o mesmo peso independentemente de etapa, modalidade, jornada ou tipo de estabelecimento. A afirmação está errada porque:",
    alternativas: [
      "cada rede local define anualmente seus próprios pesos, sem necessidade de coordenação nacional ou estudos técnicos a partir de estudos próprios de custo e sem necessidade de ato da Comissão Intergovernamental.",
      "a legislação prevê diferenças e ponderações que consideram características educacionais e são especificadas no âmbito da governança do Fundeb.",
      "os pesos são definidos diretamente pelo CACS de cada ente conforme o custo observado em sua prestação de contas anual.",
      "o fator de ponderação decorre da arrecadação tributária de cada Município e não guarda relação com características da oferta.",
      "a ponderação foi utilizada no período de transição do novo Fundeb e deixou de integrar a distribuição a partir de 2026."
    ],
    correta: 1,
    explicacao: "As ponderações procuram refletir diferenças de custo e características da oferta. A Comissão Intergovernamental possui atribuições para especificá-las segundo a legislação e estudos técnicos.",
    feedbackAcerto: "Você percebeu que ponderação não é um número imutável nem uma escolha local. Ela faz parte da sistemática nacional de distribuição e considera características da oferta educacional.",
    feedbackErro: "A correta reconhece a previsão legal de ponderações. As demais atribuem sua definição a cada rede ou conselho, eliminam sua relação com custos ou dizem que deixaram de existir.",
    dicaBanca: "Ponderação: diferença de valor conforme características da matrícula e regras nacionais."
  },
  {
    pergunta: "Dois Municípios possuem o mesmo número bruto de matrículas, mas apresentam valores de participação diferentes no Fundeb. Qual explicação é compatível com a sistemática legal?",
    alternativas: [
      "O número de matrículas não interfere na distribuição quando os Municípios pertencem ao mesmo Estado.",
      "A diferença pode decorrer do número de professores efetivos, que substitui a contagem de matrículas na apuração anual.",
      "As matrículas podem receber ponderações distintas conforme características da etapa, modalidade, jornada e oferta educacional.",
      "A rede com maior população geral recebe automaticamente fator adicional, ainda que tenha a mesma configuração de matrículas e recebe adicional proporcional ao crescimento demográfico registrado no último censo oficial.",
      "O CACS local pode elevar o valor de uma matrícula quando identifica custos superiores na prestação de contas da escola."
    ],
    correta: 2,
    explicacao: "A igualdade no número bruto de estudantes não implica igualdade no valor ponderado. Matrículas de segmentos distintos podem receber fatores diferentes na distribuição.",
    feedbackAcerto: "Você distinguiu matrícula bruta de matrícula ponderada. O valor relativo depende da configuração da oferta educacional, e não da simples contagem de alunos.",
    feedbackErro: "A correta é a diferença de ponderações. População, número de professores e decisão do CACS não substituem a sistemática legal de fatores.",
    dicaBanca: "Mesmo número de alunos não significa mesma quantidade de matrículas ponderadas."
  },
  {
    pergunta: "Em 2026, concluída a implantação progressiva do novo Fundeb, a complementação da União corresponde, no mínimo, a:",
    alternativas: [
      "19% do total de recursos que compõem os fundos, mantendo o patamar previsto para o quarto ano de implantação.",
      "20% do total, dividido igualmente entre VAAF e VAAT, com VAAR financiado fora desse percentual.",
      "21% do total, percentual consolidado após o último aumento previsto para 2025.",
      "23% do total de recursos de referência, patamar mínimo alcançado no sexto ano de implantação.",
      "25% do total, percentual resultante da soma da vinculação educacional constitucional com a complementação federal."
    ],
    correta: 3,
    explicacao: "A EC nº 108/2020 e a Lei nº 14.113/2020 previram implantação progressiva da complementação da União até 23%, patamar alcançado em 2026.",
    feedbackAcerto: "Você identificou o número atualizado para 2026. O percentual de 21% corresponde ao quinto ano da transição, enquanto 23% é o patamar do sexto ano.",
    feedbackErro: "A correta é 23%. Os demais percentuais confundem etapas da transição ou somam vinculações que não compõem a regra da complementação.",
    dicaBanca: "2026 é o ano-chave: complementação mínima da União chega a 23%."
  },
  {
    pergunta: "Assinale a alternativa que apresenta corretamente a estrutura mínima da complementação da União ao Fundeb após a implantação integral prevista para 2026.",
    alternativas: [
      "12% VAAF, 9% VAAT e 2% VAAR, totalizando 23 pontos percentuais.",
      "10% VAAF, 11% VAAT e 2% VAAR, totalizando 23 pontos percentuais.",
      "9% VAAF, 10,5% VAAT e 3,5% VAAR, totalizando 23 pontos percentuais distribuídos conforme a situação financeira e os resultados educacionais das redes beneficiárias.",
      "10,5% VAAF, 10% VAAT e 2,5% VAAR, totalizando 23 pontos percentuais.",
      "10% VAAF, no mínimo 10,5% VAAT e 2,5% VAAR, compondo o mínimo de 23%."
    ],
    correta: 4,
    explicacao: "A Constituição distribui a complementação mínima em 10 pontos percentuais para VAAF, no mínimo 10,5 para VAAT e 2,5 para VAAR.",
    feedbackAcerto: "Você acertou o trio numérico mais importante do novo Fundeb. Além do total de 23%, é essencial associar cada parcela à modalidade correta.",
    feedbackErro: "A correta combina 10% VAAF, 10,5% VAAT e 2,5% VAAR. Os distratores alteram a posição ou o tamanho das parcelas.",
    dicaBanca: "Memorize como bloco: 23 = 10 VAAF + 10,5 VAAT + 2,5 VAAR."
  },
  {
    pergunta: "Na complementação-VAAF, a aferição inicial considera o valor anual por aluno no âmbito de cada Estado e do Distrito Federal. Isso significa que:",
    alternativas: [
      "a lógica parte do conjunto de recursos dos fundos no âmbito estadual e verifica se o VAAF alcança o mínimo nacional.",
      "cada Município é comparado isoladamente pelo total de receitas educacionais antes de qualquer distribuição dentro do Estado.",
      "a modalidade depende do cumprimento das condicionalidades de gestão e da evolução dos indicadores de aprendizagem da rede em cada exercício anual.",
      "a União seleciona diretamente escolas com menor gasto por estudante e transfere a elas a parcela correspondente do VAAF.",
      "o cálculo utiliza o total das receitas educacionais da rede, incluindo as disponibilidades consideradas no cálculo do VAAT."
    ],
    correta: 0,
    explicacao: "O VAAF é apurado no âmbito de cada Estado e do Distrito Federal com base nos recursos que compõem os Fundos e nas matrículas consideradas, comparando-o ao VAAF mínimo nacional.",
    feedbackAcerto: "Você distinguiu corretamente o VAAF do VAAT: o primeiro parte da lógica do Fundo no âmbito estadual, enquanto o VAAT amplia a visão para a capacidade total da rede.",
    feedbackErro: "A correta descreve o âmbito estadual e os recursos do Fundo. As demais trazem características de VAAT ou VAAR ou inventam transferência direta por escola.",
    dicaBanca: "VAAF: primeiro olhe o Fundo no âmbito do Estado."
  },
  {
    pergunta: "O VAAT foi introduzido para ampliar a percepção sobre a capacidade de financiamento das redes. Em termos conceituais, ele se diferencia do VAAF porque:",
    alternativas: [
      "considera o desempenho dos estudantes e as metas de gestão antes de verificar a disponibilidade financeira da rede e usa esses resultados como critério principal para definir a complementação financeira da União.",
      "incorpora, além dos recursos do Fundeb e da complementação pertinente, outras receitas e disponibilidades vinculadas à educação previstas em lei.",
      "é calculado por escola e utiliza despesas efetivamente realizadas no ano corrente como principal referência.",
      "desconsidera as receitas do Fundeb para impedir dupla contagem e utiliza transferências federais adicionais como base principal.",
      "é restrito às redes estaduais e distrital, enquanto o VAAF é utilizado de forma exclusiva para redes municipais."
    ],
    correta: 1,
    explicacao: "O VAAT oferece visão financeira mais ampla da rede. Seu cálculo incorpora as receitas e disponibilidades especificadas no art. 13, § 3º, além dos valores relacionados ao próprio Fundeb.",
    feedbackAcerto: "Você identificou por que a regra mnemônica 'VAAT olha o total' é útil: ele amplia a base considerada, sem se confundir com indicador de desempenho.",
    feedbackErro: "A correta destaca a ampliação das receitas consideradas. As demais misturam VAAR, cálculo por escola, exclusão do Fundeb ou limitação por esfera.",
    dicaBanca: "VAAT = visão financeira ampliada da rede, não indicador de desempenho."
  },
  {
    pergunta: "A complementação-VAAR distingue-se de VAAF e VAAT principalmente porque:",
    alternativas: [
      "é distribuída às redes que apresentam menor arrecadação de impostos municipais, sem análise de indicadores educacionais e utiliza o indicador de arrecadação como parâmetro central para distribuir a parcela entre as redes.",
      "é calculada pelo custo médio de cada etapa e destinada às matrículas com maior fator de ponderação.",
      "depende de condicionalidades de melhoria da gestão e de evolução de indicadores de atendimento e aprendizagem com redução das desigualdades.",
      "é direcionada às redes cujo VAAT não alcança o mínimo nacional, utilizando o mesmo critério financeiro dessa modalidade.",
      "corresponde à parcela destinada a despesas de capital nas redes beneficiárias da complementação da União."
    ],
    correta: 2,
    explicacao: "O VAAR possui desenho associado a condicionalidades de gestão e a resultados de atendimento e aprendizagem, com atenção explícita à redução das desigualdades.",
    feedbackAcerto: "Você separou necessidade financeira de resultado condicionado. VAAF e VAAT partem de parâmetros de valor por aluno; VAAR acrescenta condicionalidades e indicadores.",
    feedbackErro: "A correta descreve o art. 14. As demais transformam VAAR em mecanismo de arrecadação, ponderação, VAAT ou despesa de capital.",
    dicaBanca: "VAAR: gestão + evolução de indicadores + redução de desigualdades."
  },
  {
    pergunta: "Um Município pertencente a um Estado com VAAF abaixo do mínimo nacional recebe recursos pela sistemática VAAF. Sobre essa modalidade, é correto afirmar que:",
    alternativas: [
      "a complementação é calculada a partir do VAAT individual do Município e independe do valor do fundo estadual.",
      "a parcela é exclusiva do Município, pois Estados não participam da distribuição de recursos dessa modalidade.",
      "a elegibilidade decorre de condicionalidades de gestão escolar semelhantes às exigidas para a complementação-VAAR e da evolução dos indicadores de atendimento e aprendizagem, com redução das desigualdades educacionais.",
      "a complementação atua no âmbito do Estado e do Distrito Federal quando o VAAF não alcança o mínimo definido nacionalmente.",
      "a modalidade utiliza a vulnerabilidade socioeconômica como critério direto e isolado para selecionar redes beneficiárias."
    ],
    correta: 3,
    explicacao: "A complementação-VAAF é acionada quando o VAAF no âmbito estadual ou distrital fica abaixo do mínimo nacional, sendo distribuída segundo a sistemática do Fundo.",
    feedbackAcerto: "Você localizou corretamente o nível de análise da modalidade: VAAF não é uma comparação financeira isolada de cada Município como ocorre no VAAT.",
    feedbackErro: "A correta descreve o mecanismo do VAAF. As demais deslocam a lógica para VAAT, VAAR ou critérios que não definem essa complementação.",
    dicaBanca: "VAAF-MIN é comparado no âmbito do Fundo estadual/distrital."
  },
  {
    pergunta: "Uma rede municipal não recebe complementação-VAAF, mas, após a consideração ampliada de suas receitas vinculadas à educação, apresenta VAAT inferior ao VAAT-MIN nacional. Nessa situação:",
    alternativas: [
      "a ausência de VAAF impede qualquer outra complementação da União para a mesma rede no exercício.",
      "a rede pode acessar VAAR por necessidade financeira, ainda que não cumpra as condicionalidades previstas para essa modalidade no exercício corrente.",
      "a rede deve aguardar o ajuste anual do VAAF, pois VAAT funciona como indicador informativo sem transferência financeira.",
      "a complementação-VAAT alcança Estados que já tenham recebido VAAF no mesmo exercício financeiro.",
      "a rede pode ser beneficiária da complementação-VAAT, pois essa modalidade analisa a capacidade financeira em nível de rede."
    ],
    correta: 4,
    explicacao: "O VAAT permite alcançar redes com baixa capacidade total de financiamento mesmo quando o Fundo estadual, considerado pelo VAAF, não se enquadra na complementação dessa primeira modalidade.",
    feedbackAcerto: "Você entendeu uma das inovações redistributivas do novo Fundeb: o VAAT pode identificar desigualdade interna que o VAAF estadual não captava.",
    feedbackErro: "A correta admite complementação-VAAT em nível de rede. Receber VAAF não é condição para acessar VAAT, e VAAR segue critérios próprios.",
    dicaBanca: "VAAT consegue enxergar redes pobres dentro de Estados que não recebem VAAF."
  },
  {
    pergunta: "Para fins da complementação-VAAR, qual situação atende a uma condicionalidade expressamente prevista na Lei nº 14.113/2020?",
    alternativas: [
      "Provimento do gestor escolar por critérios técnicos de mérito e desempenho ou participação da comunidade entre candidatos previamente avaliados por mérito e desempenho.",
      "Nomeação do gestor escolar por livre escolha do chefe do Executivo, desde que a indicação seja aprovada posteriormente pelo conselho escolar e a indicação seja validada pelo conselho escolar após análise administrativa da secretaria de educação.",
      "Eleição direta obrigatória de todos os diretores, sem etapa técnica anterior e com mandato coincidente com o do prefeito ou governador.",
      "Contratação de gestores escolares por organização social, com metas financeiras definidas no contrato de gestão de cada unidade.",
      "Escolha de diretores com base no tempo de serviço, ainda que não haja aferição de mérito, desempenho ou participação da comunidade."
    ],
    correta: 0,
    explicacao: "O art. 14 prevê como condicionalidade do VAAR uma forma de provimento que envolva critérios técnicos de mérito e desempenho, ou participação da comunidade entre candidatos previamente aprovados nessa avaliação.",
    feedbackAcerto: "Você percebeu a precisão da regra: a lei não impõe um modelo único de eleição direta, mas exige mérito e desempenho nas formas descritas.",
    feedbackErro: "A correta reproduz a lógica legal. As demais substituem os critérios técnicos por livre nomeação, tempo de serviço ou modelos não previstos.",
    dicaBanca: "VAAR e gestão escolar: mérito/desempenho é peça central da condicionalidade."
  },
  {
    pergunta: "Uma rede teve participação de 74% dos estudantes de um ano escolar periodicamente avaliado nos exames nacionais do sistema de avaliação da educação básica. Para a condicionalidade do VAAR relativa à participação, esse resultado:",
    alternativas: [
      "atende ao requisito, pois a lei estabelece participação mínima de 70% dos estudantes avaliáveis.",
      "não atende ao requisito geral de participação mínima de 80% previsto para os estudantes de cada ano escolar avaliado.",
      "atende ao requisito quando a média de aprendizagem da rede supera a média nacional daquele ciclo.",
      "não atende porque a Lei nº 14.113/2020 exige participação integral dos estudantes matriculados na rede.",
      "atende ao requisito se o CACS-Fundeb emitir parecer justificando as ausências registradas no exame nacional e apresentar justificativa formal das ausências acompanhada de plano de recomposição de participação."
    ],
    correta: 1,
    explicacao: "Entre as condicionalidades do VAAR está a participação de pelo menos 80% dos estudantes de cada ano escolar periodicamente avaliado em cada rede nos exames nacionais pertinentes.",
    feedbackAcerto: "Você identificou um percentual que costuma aparecer como pegadinha. Com 74%, a rede está abaixo do mínimo legal de 80% para essa condicionalidade.",
    feedbackErro: "A correta é a insuficiência diante dos 80%. Resultado de aprendizagem, parecer do CACS ou média nacional não substituem esse requisito de participação.",
    dicaBanca: "VAAR: participação mínima de 80% nos anos avaliados."
  },
  {
    pergunta: "Sobre as condicionalidades de melhoria da gestão ligadas ao VAAR, assinale a alternativa compatível com a legislação.",
    alternativas: [
      "A lei avalia desigualdade entre regiões do país, sem considerar diferenças socioeconômicas dentro das redes.",
      "A redução das desigualdades é aferida pela expansão de matrículas, independentemente do desempenho educacional.",
      "A redução das desigualdades socioeconômicas e raciais educacionais integra as condicionalidades consideradas para a modalidade.",
      "Critérios de equidade deixam de ser aplicados quando a rede apresenta crescimento na média geral de aprendizagem.",
      "A análise racial é vedada na distribuição de recursos porque a complementação deve utilizar parâmetros estritamente financeiros."
    ],
    correta: 2,
    explicacao: "O desenho do VAAR incorpora equidade. A Lei nº 14.113/2020 prevê redução das desigualdades educacionais socioeconômicas e raciais entre as condicionalidades.",
    feedbackAcerto: "Você identificou que melhorar a média geral não basta para a lógica do VAAR: a legislação também exige atenção às desigualdades.",
    feedbackErro: "A correta inclui desigualdades socioeconômicas e raciais. As demais reduzem a equidade a matrícula, média ou a excluem do mecanismo.",
    dicaBanca: "VAAR cobra resultado com equidade, não apenas crescimento da média."
  },
  {
    pergunta: "Entre as condicionalidades do VAAR, a legislação também contempla o regime de colaboração entre Estado e Municípios. Esse elemento está ligado à ideia de:",
    alternativas: [
      "substituir as competências municipais por um comando único da secretaria estadual para todas as redes públicas do território e concentrar no Estado a definição curricular, financeira e administrativa das redes participantes.",
      "transferir a gestão das escolas municipais ao Estado quando houver complementação da União ao fundo estadual.",
      "uniformizar salários e planos de carreira das redes como requisito financeiro para qualquer complementação federal.",
      "formalizar e fortalecer colaboração entre os entes na organização e execução de políticas educacionais conforme os critérios legais.",
      "condicionar o VAAR à fusão administrativa das redes municipais que apresentarem indicadores de aprendizagem semelhantes."
    ],
    correta: 3,
    explicacao: "A Lei nº 14.113/2020 inclui condicionalidade relacionada ao regime de colaboração entre Estado e Municípios. A lógica é cooperação federativa, não absorção de competências.",
    feedbackAcerto: "Você distinguiu colaboração de centralização. O requisito procura fortalecer coordenação entre redes sem extinguir a autonomia dos entes.",
    feedbackErro: "A correta descreve colaboração federativa. As demais criam fusão, subordinação ou uniformização administrativa que não decorrem da lei.",
    dicaBanca: "Regime de colaboração não significa hierarquia entre Estado e Município."
  },
  {
    pergunta: "Uma rede deseja demonstrar o cumprimento da condicionalidade curricular relacionada ao VAAR. A medida compatível com a legislação é:",
    alternativas: [
      "adotar currículo nacional único reproduzido integralmente, sem adaptações ao contexto local ou às especificidades da rede.",
      "substituir o currículo da rede por matrizes das avaliações externas, priorizando os conteúdos diretamente medidos nos exames.",
      "elaborar currículo independente da Base Nacional Comum Curricular, desde que aprovado pelo conselho municipal de educação.",
      "utilizar referenciais curriculares estaduais sem observar as competências e habilidades nacionais previstas para a educação básica.",
      "manter referenciais curriculares alinhados à Base Nacional Comum Curricular, conforme a condicionalidade estabelecida para o VAAR."
    ],
    correta: 4,
    explicacao: "Entre as condicionalidades de gestão do VAAR está a existência de referenciais curriculares alinhados à BNCC, conforme a legislação.",
    feedbackAcerto: "Você identificou alinhamento, não cópia literal. A BNCC funciona como referência nacional e não elimina a contextualização curricular das redes.",
    feedbackErro: "A correta é o alinhamento à BNCC. As demais confundem alinhamento com currículo único, treinamento para teste ou afastamento da base nacional.",
    dicaBanca: "VAAR: currículo alinhado à BNCC, não currículo reduzido à prova externa."
  },
  {
    pergunta: "Uma rede melhorou sua média de aprendizagem, mas ampliou fortemente a diferença de desempenho entre grupos socioeconômicos. Na lógica do VAAR, esse resultado exige cautela porque:",
    alternativas: [
      "os indicadores devem considerar melhoria da aprendizagem acompanhada de redução das desigualdades, e não só a elevação da média.",
      "o VAAR utiliza indicadores de atendimento, de modo que diferenças de aprendizagem não interferem na distribuição.",
      "a complementação considera a arrecadação da rede e utiliza os resultados educacionais como informação acessória.",
      "a desigualdade entre grupos é analisada no VAAT, por compor o cálculo da capacidade financeira da rede.",
      "a evolução da média geral elimina a análise de equidade quando o aumento supera o crescimento nacional do mesmo período da própria rede avaliada."
    ],
    correta: 0,
    explicacao: "A EC nº 108/2020 e a Lei nº 14.113/2020 associam o VAAR à evolução de atendimento e aprendizagem com redução das desigualdades.",
    feedbackAcerto: "Você percebeu que desempenho e equidade são dimensões combinadas. Uma média maior pode esconder agravamento de diferenças internas.",
    feedbackErro: "A correta exige melhoria com redução de desigualdades. As demais retiram a equidade do VAAR ou deslocam o tema para modalidades financeiras.",
    dicaBanca: "VAAR não premia média isolada: observe também atendimento e desigualdades."
  },
  {
    pergunta: "Sobre os indicadores usados na distribuição do VAAR, é correto afirmar que a legislação considera, entre outros elementos:",
    alternativas: [
      "o crescimento do Ideb agregado da rede, sem incorporar taxas de atendimento ou desigualdades educacionais.",
      "evolução de indicadores de atendimento e melhoria da aprendizagem, com redução das desigualdades, conforme a sistemática legal.",
      "arrecadação tributária municipal, patrimônio escolar e custo da folha como indicadores centrais de resultado educacional.",
      "quantidade absoluta de escolas em tempo integral e número de servidores efetivos como critérios únicos de melhoria da gestão e pela quantidade de matrículas computadas no Fundeb, sem uso de indicadores de aprendizagem ou equidade.",
      "nível de gasto por aluno isoladamente, porque redes que gastam mais demonstram maior eficiência educacional."
    ],
    correta: 1,
    explicacao: "O VAAR combina condicionalidades de gestão com indicadores de atendimento e aprendizagem, incluindo perspectiva de redução das desigualdades.",
    feedbackAcerto: "Você identificou o núcleo do mecanismo sem reduzi-lo a um único índice. A lei trabalha com uma avaliação mais ampla que simples média de desempenho.",
    feedbackErro: "A correta reflete a estrutura do VAAR. As demais substituem os indicadores legais por gasto, patrimônio, quantitativo de escolas ou um único índice.",
    dicaBanca: "VAAR = condicionalidades + indicadores, não um ranking simples."
  },
  {
    pergunta: "Uma secretaria calcula o mínimo de 70% para remuneração dos profissionais da educação básica incluindo toda a complementação-VAAR na base. À luz do art. 26 da Lei nº 14.113/2020, o procedimento:",
    alternativas: [
      "está correto, porque todas as modalidades de complementação integram a base dos 70% sem qualquer distinção.",
      "está correto se a rede utilizar o VAAR para pagar profissionais que atuam diretamente em sala de aula.",
      "precisa ser revisto, pois os recursos da complementação-VAAR são excluídos da base indicada para a subvinculação mínima de 70%.",
      "precisa ser revisto porque o percentual de 70% incide sobre a complementação-VAAF recebida pela rede.",
      "é inadequado porque a regra dos 70% foi substituída por percentual variável após a implantação integral do Fundeb em 2026 e passou a variar anualmente conforme o percentual total da complementação da União ao Fundeb."
    ],
    correta: 2,
    explicacao: "O art. 26 determina proporção não inferior a 70% dos recursos anuais dos Fundos para remuneração, excluindo da base os recursos da complementação-VAAR.",
    feedbackAcerto: "Você identificou uma sutileza que diferencia questão básica de questão difícil: conhecer 70% não basta; é preciso saber qual base legal entra no cálculo.",
    feedbackErro: "A correta exclui VAAR da base dos 70%. As outras incluem essa parcela, restringem o cálculo ao VAAF ou afirmam mudança inexistente em 2026.",
    dicaBanca: "Pegadinha avançada: 70%, mas com exclusão do VAAR da base legal."
  },
  {
    pergunta: "Um gestor afirma que os 70% do Fundeb destinados à remuneração alcançam somente professores regentes de turma. Essa interpretação é inadequada porque:",
    alternativas: [
      "a parcela se destina a todo servidor municipal, independentemente de vínculo com educação básica ou efetivo exercício.",
      "a regra alcança profissionais com licenciatura plena, incluindo aposentados vinculados à carreira do magistério.",
      "a lei destina o percentual à infraestrutura escolar e admite remuneração quando houver saldo ao fim do exercício.",
      "a norma refere-se aos profissionais da educação básica em efetivo exercício, conforme as definições legais, e não só a docentes regentes.",
      "a subvinculação é exclusiva de diretores, coordenadores e equipes de suporte, porque docentes possuem fonte própria de financiamento e demais profissionais ficam fora da base de cálculo, ainda que estejam em efetivo exercício na rede."
    ],
    correta: 3,
    explicacao: "A redação vigente do art. 26 utiliza a categoria 'profissionais da educação básica em efetivo exercício', mais ampla que professores regentes, segundo as definições legais aplicáveis.",
    feedbackAcerto: "Você leu corretamente a categoria jurídica. Trocar 'profissionais da educação' por 'professores' reduz indevidamente o alcance da norma.",
    feedbackErro: "A correta mantém a expressão legal. As demais ampliam para qualquer servidor, incluem inativos ou excluem docentes sem base jurídica.",
    dicaBanca: "Na prova, observe a expressão exata: profissionais da educação básica em efetivo exercício."
  },
  {
    pergunta: "Para atingir o mínimo legal destinado à remuneração dos profissionais da educação básica em efetivo exercício, a Lei nº 14.113/2020 admite que recursos do Fundeb sejam aplicados em:",
    alternativas: [
      "pagamento de aposentadorias de antigos profissionais, desde que tenham exercido função docente na rede pública e tenham vínculo previdenciário decorrente de cargo integrante da carreira da educação básica pública.",
      "gratificações a agentes políticos responsáveis pela elaboração da política educacional do Município.",
      "indenizações de natureza previdenciária vinculadas a servidores afastados definitivamente do efetivo exercício.",
      "benefícios destinados a qualquer servidor municipal quando o ente apresentar superávit financeiro no fundo.",
      "reajuste salarial sob formas como bonificação, abono, aumento, atualização ou correção salarial, conforme a regra legal."
    ],
    correta: 4,
    explicacao: "A Lei nº 14.276/2021 incluiu previsão que permite aplicar recursos, para atingir o mínimo de 70%, em reajuste salarial sob modalidades como bonificação, abono, aumento, atualização ou correção salarial.",
    feedbackAcerto: "Você identificou uma possibilidade expressamente prevista para valorização remuneratória, sem confundi-la com aposentadorias ou pagamentos a pessoas fora do efetivo exercício.",
    feedbackErro: "A correta corresponde à previsão legal. As demais envolvem despesas previdenciárias, agentes ou beneficiários não enquadrados na regra.",
    dicaBanca: "70% não significa só salário-base: a lei prevê formas de reajuste para atingir o mínimo."
  },
  {
    pergunta: "Sobre a parcela dos 30% não subvinculada à remuneração do art. 26, a Lei nº 14.113/2020 prevê hipótese específica em que ela pode remunerar:",
    alternativas: [
      "profissionais de psicologia ou serviço social com curso superior que integrem equipes multiprofissionais de atendimento aos educandos, observadas as condições legais.",
      "servidores aposentados da educação que desenvolvam atividades voluntárias de acompanhamento psicossocial nas escolas.",
      "consultores privados contratados para prestar atendimento psicológico eventual a gestores e equipes administrativas.",
      "profissionais de qualquer área da saúde lotados em unidades municipais, ainda que não integrem equipes que atendam os educandos com lotação em outra secretaria, desde que participem de ações intersetoriais previstas no plano municipal.",
      "agentes comunitários vinculados à assistência social que participem de reuniões escolares, independentemente de formação superior."
    ],
    correta: 0,
    explicacao: "O art. 26-A permite, na parcela dos 30% não subvinculada, remuneração de profissionais de psicologia ou serviço social, com diploma superior, integrantes de equipes multiprofissionais que atendam educandos, observadas as regras legais.",
    feedbackAcerto: "Você identificou a hipótese específica sem ampliar a autorização para qualquer profissional de saúde, assistência ou consultoria.",
    feedbackErro: "A correta reúne formação, área profissional e atuação em equipe multiprofissional. As demais afastam requisitos do dispositivo.",
    dicaBanca: "Art. 26-A: psicologia/serviço social + curso superior + equipe multiprofissional."
  },
  {
    pergunta: "Uma rede beneficiária recebeu R$ 8 milhões de complementação-VAAT. Desconsiderando outras obrigações específicas, qual valor mínimo dessa complementação deve ser aplicado em despesas de capital?",
    alternativas: [
      "R$ 800 mil, correspondente a 10% da complementação-VAAT recebida pela rede.",
      "R$ 1,2 milhão, correspondente a 15% da complementação-VAAT recebida pela rede.",
      "R$ 1,6 milhão, correspondente a 20% da complementação-VAAT recebida pela rede.",
      "R$ 4 milhões, correspondente a 50% da complementação-VAAT recebida pela rede.",
      "R$ 5,6 milhões, correspondente a 70% da complementação-VAAT recebida pela rede."
    ],
    correta: 1,
    explicacao: "O art. 27 estabelece aplicação mínima de 15% da complementação-VAAT, em cada rede beneficiada, em despesas de capital. Quinze por cento de R$ 8 milhões corresponde a R$ 1,2 milhão.",
    feedbackAcerto: "Você associou corretamente percentual, base de cálculo e operação. A regra é específica da complementação-VAAT, não do total do Fundeb.",
    feedbackErro: "A correta é R$ 1,2 milhão. Os demais valores resultam de percentuais que pertencem a outras regras ou não correspondem ao art. 27.",
    dicaBanca: "VAAT e capital: 15% da complementação recebida pela rede beneficiária."
  },
  {
    pergunta: "Sobre a destinação da complementação-VAAT à educação infantil, qual formulação é juridicamente mais precisa?",
    alternativas: [
      "Cada Município beneficiário deve aplicar exatamente 50% de sua complementação-VAAT na educação infantil, sem variação por indicador e o percentual deve ser aplicado de forma uniforme, sem diferenciação entre redes ou indicadores locais.",
      "Cada Estado beneficiário deve transferir metade de seu VAAT diretamente às creches municipais localizadas em seu território.",
      "A lei destina à educação infantil proporção de 50% dos recursos globais da complementação-VAAT, operacionalizada por indicador que fixa mínimos para Municípios beneficiados.",
      "A vinculação de 50% incide sobre todos os recursos anuais do Fundeb de cada Município que oferta creche e pré-escola.",
      "O percentual de 50% foi uma regra de transição encerrada antes de 2026 e atualmente não integra a sistemática do VAAT."
    ],
    correta: 2,
    explicacao: "O art. 28 trata de 50% dos recursos globais da complementação-VAAT destinados à educação infantil, com indicador que define percentuais mínimos de aplicação pelos Municípios beneficiados.",
    feedbackAcerto: "Você evitou a simplificação perigosa de afirmar que cada Município individualmente deve gastar exatamente metade do VAAT recebido em educação infantil.",
    feedbackErro: "A correta preserva a redação global e a função do indicador. As demais mudam a base, o ente responsável ou tratam a regra como extinta.",
    dicaBanca: "50% da VAAT para educação infantil é regra global, operacionalizada por indicador municipal."
  },
  {
    pergunta: "O indicador utilizado para orientar a aplicação da complementação-VAAT na educação infantil deve considerar obrigatoriamente:",
    alternativas: [
      "taxa de aprovação no ensino fundamental e percentual de professores com formação superior na rede.",
      "número de escolas de tempo integral e média de desempenho no sistema nacional de avaliação da educação básica.",
      "valor do piso salarial do magistério e proporção de servidores efetivos no quadro da secretaria de educação.",
      "déficit de cobertura da oferta e demanda anual e vulnerabilidade socioeconômica da população a ser atendida.",
      "crescimento da arrecadação municipal e participação da educação infantil no orçamento total da administração local."
    ],
    correta: 3,
    explicacao: "O parágrafo único do art. 28 exige que o indicador para educação infantil considere o déficit de cobertura e a vulnerabilidade socioeconômica da população a ser atendida.",
    feedbackAcerto: "Você identificou os dois componentes obrigatórios do indicador. Eles procuram direcionar recursos para necessidade de expansão e maior vulnerabilidade.",
    feedbackErro: "A correta combina cobertura e vulnerabilidade. Os demais elementos podem ser relevantes à gestão, mas não são os dois critérios obrigatórios indicados pelo dispositivo.",
    dicaBanca: "Educação infantil no VAAT: déficit de cobertura + vulnerabilidade socioeconômica."
  },
  {
    pergunta: "Regra geral, os recursos do Fundeb recebidos por um ente devem ser utilizados:",
    alternativas: [
      "até o encerramento do mandato do chefe do Executivo, permitindo acumulação para investimentos plurianuais sem limite específico desde que os recursos permaneçam em conta específica e sejam vinculados a ações do plano plurianual.",
      "no exercício seguinte ao crédito, pois a prestação de contas do fundo ocorre depois do fechamento do ano fiscal.",
      "em qualquer exercício dentro do ciclo de quatro anos do planejamento educacional do respectivo ente federativo.",
      "de acordo com disponibilidade de caixa, sem relação entre o exercício do crédito e a execução das despesas educacionais.",
      "no exercício financeiro em que forem creditados, ressalvada a possibilidade legal de utilização de parcela no exercício subsequente."
    ],
    correta: 4,
    explicacao: "O art. 25 estabelece utilização no exercício financeiro em que os recursos forem creditados, com exceção legal para parcela de até 10% no primeiro quadrimestre do exercício subsequente mediante crédito adicional.",
    feedbackAcerto: "Você identificou a regra e deixou espaço para a exceção expressamente prevista. O Fundeb não funciona como poupança livre para anos futuros.",
    feedbackErro: "A correta combina utilização no exercício com a exceção legal. As demais permitem postergação ampla ou desvinculam a execução do exercício financeiro.",
    dicaBanca: "Regra: usar no exercício do crédito; exceção: até 10% no primeiro quadrimestre seguinte."
  },
  {
    pergunta: "Um Município encerrou o exercício com parte dos recursos do Fundeb não utilizada. A Lei nº 14.113/2020 admite que:",
    alternativas: [
      "até 10% dos recursos recebidos possam ser utilizados no primeiro quadrimestre do exercício seguinte, mediante abertura de crédito adicional.",
      "até 15% do saldo seja automaticamente transferido ao exercício seguinte, sem necessidade de providência orçamentária.",
      "todo o saldo seja utilizado até o fim do exercício seguinte quando estiver reservado a obras de infraestrutura educacional e o projeto esteja incluído no plano de aplicação aprovado pela secretaria e pelo conselho de educação.",
      "até 30% dos recursos possam ser postergados, desde que correspondam à parcela não subvinculada à remuneração.",
      "o saldo possa permanecer por dois exercícios quando o CACS-Fundeb aprovar plano de aplicação apresentado pela secretaria."
    ],
    correta: 0,
    explicacao: "O art. 25, § 3º, admite utilização de até 10% dos recursos recebidos no primeiro quadrimestre do exercício imediatamente subsequente, mediante abertura de crédito adicional.",
    feedbackAcerto: "Você acertou os três elementos da exceção: limite de 10%, primeiro quadrimestre seguinte e necessidade de crédito adicional.",
    feedbackErro: "A correta reproduz a regra. Os demais percentuais, prazos e dispensas de procedimento orçamentário não correspondem ao dispositivo.",
    dicaBanca: "Saldo: até 10% + primeiro quadrimestre seguinte + crédito adicional."
  },
  {
    pergunta: "Uma prefeitura pretende pagar aposentadorias de ex-professores com recursos do Fundeb, argumentando que os beneficiários contribuíram para a educação básica durante décadas. A despesa:",
    alternativas: [
      "é admitida na parcela de 30%, desde que os aposentados tenham exercido o magistério por mais de dez anos.",
      "é vedada, porque aposentadorias e pensões não podem ser custeadas com os recursos dos Fundos.",
      "é admitida na parcela dos 70% quando os beneficiários estavam em efetivo exercício na data da aposentadoria.",
      "é permitida se houver saldo financeiro depois do cumprimento das aplicações mínimas do exercício.",
      "pode ser autorizada pelo Tribunal de Contas quando não comprometer despesas de manutenção e desenvolvimento do ensino."
    ],
    correta: 1,
    explicacao: "O art. 29 veda expressamente o pagamento de aposentadorias e pensões com recursos do Fundeb.",
    feedbackAcerto: "Você não confundiu valorização dos profissionais em exercício com financiamento previdenciário de inativos. A vinculação do Fundeb é à educação básica em funcionamento.",
    feedbackErro: "A correta aponta a vedação. Percentuais de 70% ou 30%, existência de saldo ou autorização de controle não afastam a proibição.",
    dicaBanca: "Aposentadoria e pensão: despesa vedada com Fundeb."
  },
  {
    pergunta: "Uma despesa pode estar ligada de forma genérica à infância e ainda assim não ser financiável pelo Fundeb. Para decidir corretamente, o gestor deve verificar sobretudo se ela:",
    alternativas: [
      "foi aprovada pelo conselho de educação e incluída em programa público com participação de estudantes da rede e esteja incluída em programa educacional oficialmente aprovado pelo conselho competente da rede.",
      "possui impacto social positivo e se relaciona de modo indireto com permanência e bem-estar dos estudantes.",
      "enquadra-se em manutenção e desenvolvimento do ensino da educação básica pública e não está entre as despesas vedadas.",
      "é executada pela Secretaria de Educação, pois a unidade orçamentária define a natureza educacional do gasto.",
      "consta do plano municipal de educação, documento suficiente para caracterizar qualquer ação como despesa de MDE."
    ],
    correta: 2,
    explicacao: "A aplicação do Fundeb depende do enquadramento material da despesa em MDE da educação básica pública e das vedações legais, não apenas do órgão executor ou de benefício social genérico.",
    feedbackAcerto: "Você aplicou um critério jurídico de conteúdo da despesa. Estar no orçamento da educação ou beneficiar crianças não basta para transformar o gasto em MDE.",
    feedbackErro: "A correta exige enquadramento em MDE e respeito às vedações. As demais usam critérios formais ou sociais insuficientes.",
    dicaBanca: "FUNDEB financia MDE, não toda política social que beneficie estudantes."
  },
  {
    pergunta: "Durante reunião, o presidente do CACS-Fundeb afirmou que o conselho poderia ordenar diretamente o pagamento de uma obra escolar para corrigir atraso da prefeitura. Essa afirmação é inadequada porque o CACS:",
    alternativas: [
      "atua na elaboração do orçamento e encerra sua competência quando os recursos são creditados ao ente.",
      "possui função consultiva restrita, sem acesso a documentos de execução ou prestação de contas do fundo.",
      "substitui os órgãos de controle interno, mas não pode intervir em contratos celebrados pelo Poder Executivo.",
      "exerce acompanhamento e controle social, mas não se confunde com o órgão responsável pela execução financeira das despesas.",
      "é órgão do Tribunal de Contas e só pode praticar atos de execução depois de autorização formal do conselheiro relator e pode executar a despesa quando houver autorização formal do órgão de controle externo competente."
    ],
    correta: 3,
    explicacao: "O CACS acompanha, fiscaliza e exerce controle social, mas não é unidade executora das despesas do Fundeb.",
    feedbackAcerto: "Você distinguiu controle de execução. O conselho pode exigir informações, visitar obras e emitir pareceres, mas não assume a gestão financeira do ente.",
    feedbackErro: "A correta delimita o papel do CACS. As demais restringem demais suas competências ou o transformam em órgão executivo ou do Tribunal de Contas.",
    dicaBanca: "CACS controla e acompanha; quem executa o orçamento é o ente gestor."
  },
  {
    pergunta: "Por decisão da maioria de seus membros, um CACS-Fundeb municipal convoca o Secretário de Educação para prestar esclarecimentos sobre fluxo de recursos e execução de despesas. Segundo a lei, a autoridade convocada deverá:",
    alternativas: [
      "responder por escrito em até dez dias, sendo facultativa sua presença na reunião do conselho.",
      "comparecer no prazo fixado pelo prefeito, que poderá substituir a convocação por relatório da controladoria.",
      "prestar esclarecimentos no prazo de sessenta dias, salvo urgência reconhecida pelo Tribunal de Contas.",
      "comparecer na reunião seguinte do conselho, independentemente do intervalo entre a convocação e a sessão ordinária.",
      "apresentar-se em prazo não superior a trinta dias, conforme a prerrogativa legal do conselho."
    ],
    correta: 4,
    explicacao: "O art. 33 permite ao conselho convocar, por decisão da maioria, o Secretário de Educação ou servidor equivalente, que deve apresentar-se em prazo não superior a 30 dias.",
    feedbackAcerto: "Você identificou uma competência concreta do controle social e o prazo associado a ela, ponto típico de questão literal de concurso.",
    feedbackErro: "A correta traz 30 dias. Os demais prazos e formas de substituição não correspondem à previsão legal.",
    dicaBanca: "CACS: convocação do Secretário → comparecimento em até 30 dias."
  },
  {
    pergunta: "Para exercer suas atribuições, o CACS-Fundeb requisita ao Poder Executivo cópia de documentos sobre licitação, empenho, liquidação e pagamento de obra custeada pelo Fundo. A resposta deve ocorrer:",
    alternativas: [
      "em prazo não superior a vinte dias, conforme a previsão legal aplicável à requisição de documentos pelo conselho.",
      "em até trinta dias, mesmo prazo definido para o comparecimento do Secretário de Educação convocado pelo conselho.",
      "em até quarenta e cinco dias, prazo relacionado ao primeiro marco anual de repasse da complementação da União.",
      "depois do encerramento do exercício, quando os documentos integrarem formalmente a prestação de contas anual.",
      "no prazo definido pelo regulamento municipal, porque a Lei nº 14.113/2020 não estabelece limite para essa resposta."
    ],
    correta: 0,
    explicacao: "O art. 33 prevê requisição de documentos ao Executivo e resposta em prazo não superior a 20 dias.",
    feedbackAcerto: "Você separou corretamente dois prazos que podem ser confundidos: 20 dias para resposta documental e 30 dias para a autoridade convocada apresentar-se.",
    feedbackErro: "A correta é 20 dias. Os demais prazos misturam outra competência do CACS ou retiram um limite previsto na lei.",
    dicaBanca: "Prazo de prova: documentos 20 dias; convocado 30 dias."
  },
  {
    pergunta: "Entre as prerrogativas do CACS-Fundeb está a realização de visitas para verificar, in loco:",
    alternativas: [
      "o desempenho individual dos professores e aplicar sanções funcionais quando forem constatadas falhas pedagógicas com base em relatórios de frequência e resultados acadêmicos elaborados pela direção de cada unidade.",
      "o desenvolvimento de obras e serviços escolares, a adequação do transporte e o uso de bens adquiridos com recursos do Fundo.",
      "a regularidade tributária das famílias beneficiárias de programas educacionais mantidos pelo Município.",
      "a execução de políticas de saúde escolar financiadas integralmente por recursos externos ao sistema educacional.",
      "o cumprimento de metas do prefeito e recomendar diretamente sua responsabilização administrativa em caso de atraso."
    ],
    correta: 1,
    explicacao: "A Lei nº 14.113/2020 autoriza visitas in loco para acompanhar obras e serviços, transporte escolar e utilização de bens adquiridos com recursos do Fundo.",
    feedbackAcerto: "Você reconheceu uma ferramenta operacional do controle social. O CACS não é corregedoria de servidores nem órgão sancionador do chefe do Executivo.",
    feedbackErro: "A correta reúne objetos de visita previstos na lei. As demais extrapolam a competência do conselho.",
    dicaBanca: "CACS não fica preso a papel: a lei admite verificação in loco."
  },
  {
    pergunta: "Além de acompanhar a aplicação dos recursos, aos CACS-Fundeb incumbe:",
    alternativas: [
      "homologar licitações da educação antes da assinatura dos contratos pelo Poder Executivo competente.",
      "autorizar abertura de créditos adicionais destinados à utilização de saldos do Fundo no exercício seguinte.",
      "elaborar parecer sobre as prestações de contas relacionadas ao Fundeb, conforme a competência estabelecida em lei.",
      "julgar definitivamente as contas do chefe do Executivo e aplicar multa administrativa em caso de irregularidade com competência sancionadora sobre agentes públicos responsáveis por irregularidades na execução.",
      "substituir a controladoria interna na certificação das despesas de pessoal custeadas pela parcela dos 70%."
    ],
    correta: 2,
    explicacao: "A lei atribui aos conselhos a elaboração de parecer sobre as prestações de contas do Fundeb. Isso integra o controle social, sem transformá-los em tribunais de contas.",
    feedbackAcerto: "Você separou emissão de parecer de julgamento definitivo. O conselho produz manifestação relevante para a prestação de contas, mas não ocupa o lugar do controle externo.",
    feedbackErro: "A correta é a elaboração do parecer. Homologação de licitação, crédito adicional, julgamento definitivo e substituição da controladoria não são funções do CACS.",
    dicaBanca: "CACS emite parecer; Tribunal de Contas exerce controle externo e julgamento conforme suas competências."
  },
  {
    pergunta: "Para preservar a independência do controle social, a Lei nº 14.113/2020 estabelece que os CACS-Fundeb:",
    alternativas: [
      "integram a estrutura administrativa da Secretaria de Educação e se submetem às orientações do secretário quanto à fiscalização.",
      "possuem personalidade jurídica autônoma e orçamento próprio destacado do orçamento do ente federativo.",
      "são vinculados ao Tribunal de Contas competente, que nomeia seus membros e define seu calendário de reuniões.",
      "atuam com autonomia, sem vinculação ou subordinação institucional ao Poder Executivo local.",
      "funcionam como comissão temporária do Poder Legislativo, encerrando-se ao final de cada exercício financeiro."
    ],
    correta: 3,
    explicacao: "O art. 33 estabelece autonomia dos conselhos, sem vinculação ou subordinação institucional ao Poder Executivo local.",
    feedbackAcerto: "Você identificou uma garantia estrutural do controle social. Autonomia não significa personalidade jurídica ou orçamento próprio, mas independência institucional para exercer a fiscalização.",
    feedbackErro: "A correta é a autonomia sem subordinação ao Executivo. As demais criam vínculos ou estruturas que a lei não prevê.",
    dicaBanca: "Controle social precisa de autonomia perante o gestor dos recursos."
  },
  {
    pergunta: "Na escolha da presidência do CACS-Fundeb, a regra legal determina que:",
    alternativas: [
      "o Secretário de Educação assuma a presidência por ser responsável pela gestão da política educacional e permaneça na função durante o mesmo período de mandato dos demais integrantes do colegiado.",
      "o chefe do Executivo indique livremente o presidente entre os representantes da administração pública.",
      "o representante do Tribunal de Contas presida o colegiado para assegurar independência fiscalizatória.",
      "o membro com maior tempo de serviço público ocupe a presidência durante todo o mandato do conselho.",
      "o presidente seja eleito pelos pares, vedada a função ao representante do governo gestor dos recursos do Fundo."
    ],
    correta: 4,
    explicacao: "O presidente do conselho é eleito pelo colegiado, e o representante do governo gestor dos recursos não pode ocupar essa função.",
    feedbackAcerto: "Você identificou o mecanismo de proteção à independência: quem representa diretamente o governo que administra os recursos não pode presidir o órgão de controle social.",
    feedbackErro: "A correta combina eleição pelos pares e impedimento específico. As demais entregam a presidência ao gestor ou criam critérios inexistentes.",
    dicaBanca: "Presidente do CACS: eleição pelos pares; representante do governo gestor não pode presidir."
  },
  {
    pergunta: "Sobre o mandato dos membros dos CACS-Fundeb, assinale a alternativa correta.",
    alternativas: [
      "É de quatro anos, vedada a recondução para o próximo mandato, iniciando-se em 1º de janeiro do terceiro ano do mandato do respectivo chefe do Executivo.",
      "É de dois anos, com uma recondução permitida, iniciando-se junto com o mandato do prefeito, governador ou presidente e com possibilidade de nova indicação pelo mesmo segmento após avaliação de desempenho do conselheiro.",
      "É de quatro anos, com reconduções sucessivas, desde que os segmentos representados renovem formalmente a indicação.",
      "É de três anos, sem recondução, iniciando-se no primeiro dia do exercício seguinte à nomeação do chefe do Executivo.",
      "É de cinco anos, com início após a aprovação das contas do primeiro exercício do respectivo governo."
    ],
    correta: 0,
    explicacao: "A Lei nº 14.113/2020 fixa mandato de quatro anos, veda recondução para o próximo mandato e estabelece início em 1º de janeiro do terceiro ano de mandato do titular do Executivo.",
    feedbackAcerto: "Você acertou uma regra cheia de detalhes que a banca pode fragmentar: duração, recondução e momento de início.",
    feedbackErro: "A correta reúne os três elementos legais. As outras alteram prazo, possibilidade de recondução ou sincronização com o Executivo.",
    dicaBanca: "CACS: 4 anos + sem recondução ao próximo + início no 3º ano do Executivo."
  },
  {
    pergunta: "Quanto à periodicidade mínima das reuniões dos CACS-Fundeb, a legislação determina reuniões:",
    alternativas: [
      "mensais, com calendário aprovado antes do início de cada exercício financeiro.",
      "no mínimo trimestrais, sem prejuízo de convocação por seu presidente.",
      "bimestrais, acompanhando os registros das informações no sistema de orçamentos públicos em educação.",
      "semestrais, salvo quando houver complementação-VAAR ou irregularidade denunciada ao colegiado.",
      "anuais, por ocasião da elaboração do parecer conclusivo sobre a prestação de contas do Fundo."
    ],
    correta: 1,
    explicacao: "Os conselhos devem reunir-se, no mínimo, trimestralmente, ou por convocação de seu presidente.",
    feedbackAcerto: "Você identificou a periodicidade mínima prevista em lei. O conselho pode reunir-se com maior frequência, mas não reduzir o padrão abaixo do trimestral.",
    feedbackErro: "A correta é trimestral. Os demais intervalos confundem rotinas de outros sistemas ou limitam indevidamente o funcionamento.",
    dicaBanca: "CACS: reunião mínima trimestral."
  },
  {
    pergunta: "Na composição do CACS-Fundeb em âmbito municipal, a Lei nº 14.113/2020 prevê representação de diferentes segmentos. Entre os integrantes básicos encontram-se:",
    alternativas: [
      "prefeito, vice-prefeito, presidente da Câmara, secretário de educação e dois membros do Tribunal de Contas.",
      "representantes da União, do Estado, do Ministério Público, dos sindicatos e das universidades públicas locais.",
      "representantes do Executivo municipal, professores, diretores, servidores técnico-administrativos, pais e estudantes da educação básica pública.",
      "membros indicados pelo prefeito entre gestores escolares, contadores, procuradores e representantes de fornecedores do Município além de fornecedores contratados, quando convidados pelo Executivo para representar usuários dos serviços.",
      "representantes de escolas privadas, sistema S, entidades empresariais e conselhos profissionais ligados ao desenvolvimento econômico."
    ],
    correta: 2,
    explicacao: "A composição municipal básica é plural e inclui representantes do Executivo, professores, diretores, servidores técnico-administrativos, pais e estudantes, além de representações adicionais quando existentes nas hipóteses legais.",
    feedbackAcerto: "Você reconheceu que o CACS foi desenhado para reunir governo e comunidade educacional, e não para ser composto apenas pelo Executivo ou por órgãos de controle.",
    feedbackErro: "A correta apresenta os segmentos centrais previstos na lei. As demais incluem autoridades ou entidades que não formam a composição básica municipal.",
    dicaBanca: "CACS municipal: pluralidade de governo + trabalhadores + famílias + estudantes."
  },
  {
    pergunta: "É impedido de integrar o CACS-Fundeb, entre outras hipóteses previstas em lei:",
    alternativas: [
      "professor da rede pública indicado pela entidade sindical da categoria, por possuir vínculo com a educação.",
      "diretor de escola pública escolhido pelos seus pares, porque exerce função de gestão na unidade escolar.",
      "responsável por estudante da educação básica pública que não possua vínculo funcional com o Executivo gestor.",
      "prefeito, vice-prefeito e seus cônjuges ou parentes consanguíneos ou afins até o terceiro grau, conforme a vedação legal.",
      "representante de organização da sociedade civil sem fins lucrativos que cumpra os requisitos de funcionamento e atuação e mantenha independência financeira em relação ao Executivo responsável pela gestão dos recursos."
    ],
    correta: 3,
    explicacao: "A lei estabelece impedimentos destinados a evitar conflitos de interesse, incluindo titulares de altos cargos do Executivo e respectivos cônjuges e parentes até o terceiro grau.",
    feedbackAcerto: "Você identificou uma vedação expressa e não confundiu vínculo legítimo de representação com conflito de interesse.",
    feedbackErro: "A correta apresenta impedimento legal. Professores, diretores, pais e organizações da sociedade civil podem integrar o conselho quando atendidas as regras pertinentes.",
    dicaBanca: "CACS: fique atento aos impedimentos por conflito de interesse e parentesco."
  },
  {
    pergunta: "Na hipótese de inexistência de estudantes emancipados para ocupar a representação estudantil no CACS-Fundeb:",
    alternativas: [
      "a vaga deve ser automaticamente transferida ao representante dos pais até o fim do mandato.",
      "o conselho pode funcionar sem qualquer representação dos estudantes, sem forma alternativa de participação.",
      "a vaga passa ao Poder Executivo, que indicará servidor para representar os interesses dos estudantes.",
      "o representante estudantil não emancipado assume como membro titular com direito a voto em todas as deliberações.",
      "a representação estudantil pode acompanhar as reuniões do conselho com direito a voz, conforme a previsão legal."
    ],
    correta: 4,
    explicacao: "A lei prevê que, não havendo estudantes emancipados, a representação estudantil poderá acompanhar as reuniões com direito a voz.",
    feedbackAcerto: "Você identificou a solução legal para preservar participação estudantil sem ignorar a regra relativa à emancipação para integrar formalmente o conselho.",
    feedbackErro: "A correta é o acompanhamento com direito a voz. As outras eliminam a representação, transferem a vaga ou atribuem condição de titular sem base legal.",
    dicaBanca: "Estudante não emancipado: pode haver representação com direito a voz."
  },
  {
    pergunta: "Os registros necessários à verificação do cumprimento dos percentuais de aplicação do Fundeb são informados em sistema de informações sobre orçamentos públicos em educação. A ausência de registro no prazo legal pode acarretar:",
    alternativas: [
      "suspensão de transferências voluntárias e da contratação de operações de crédito, ressalvadas as exceções legais, até regularização.",
      "perda definitiva da complementação da União referente ao exercício e redistribuição automática aos demais entes do Estado.",
      "extinção do CACS-Fundeb local e nomeação de comissão federal para substituir o conselho durante o exercício.",
      "proibição de utilizar a parcela dos 30% do Fundo, mantendo-se liberada a remuneração prevista no art. 26.",
      "cancelamento de convênios educacionais já executados e devolução integral dos recursos recebidos no exercício corrente e obrigação de restituir os valores registrados fora do prazo mesmo depois da regularização cadastral."
    ],
    correta: 0,
    explicacao: "O art. 38 prevê registro bimestral das informações. A ausência de registro em até 30 dias após o encerramento do bimestre ocasiona suspensão de transferências voluntárias e de certas operações de crédito até regularização.",
    feedbackAcerto: "Você reconheceu que a consequência está ligada à transparência fiscal e orçamentária, sem inventar perda definitiva do Fundeb ou intervenção no conselho.",
    feedbackErro: "A correta descreve a sanção legal. As demais criam efeitos que não correspondem ao art. 38.",
    dicaBanca: "SIOPE/Fundeb: falta de registro pode bloquear transferências voluntárias até regularizar."
  },
  {
    pergunta: "Quanto ao cronograma da complementação da União, a Lei nº 14.113/2020 estabelece, entre outros marcos, que sejam assegurados repasses acumulados de pelo menos:",
    alternativas: [
      "50% até 30 de junho e 100% até 31 de dezembro do próprio exercício.",
      "45% até 31 de julho, 85% até 31 de dezembro e 100% até 31 de janeiro do exercício seguinte.",
      "40% até 30 de junho, 80% até 30 de novembro e 100% até o fim do primeiro trimestre seguinte.",
      "60% até 31 de julho, 90% até 31 de dezembro e ajuste final até 30 de abril do exercício seguinte.",
      "25% por trimestre, em quatro parcelas iguais, sem previsão de ajuste no exercício imediatamente subsequente."
    ],
    correta: 1,
    explicacao: "A lei prevê pagamentos mensais e garante marcos acumulados mínimos de 45% até 31 de julho, 85% até 31 de dezembro e 100% até 31 de janeiro do exercício seguinte.",
    feedbackAcerto: "Você acertou um detalhe operacional menos conhecido, útil para questões literais de nível mais alto.",
    feedbackErro: "A correta apresenta a sequência 45–85–100 nos prazos legais. As demais alteram percentuais e datas.",
    dicaBanca: "Cronograma avançado: 45% julho, 85% dezembro, 100% janeiro seguinte."
  },
  {
    pergunta: "Em 2026, o FNDE publica informações de execução do Fundeb nas três modalidades de complementação da União. Essa realidade confirma que:",
    alternativas: [
      "o VAAR substituiu o VAAT após o término da transição constitucional e passou a concentrar toda a parcela baseada em redes.",
      "o VAAF deixou de existir quando a complementação total chegou a 23%, mantendo-se mecanismos por rede.",
      "VAAF, VAAT e VAAR coexistem na sistemática vigente, cada uma com critérios próprios de distribuição.",
      "as três siglas passaram a representar etapas sucessivas de um mesmo cálculo, sem transferências distintas aos entes beneficiários.",
      "o atingimento de 23% eliminou diferenças entre as modalidades e transformou a complementação em uma única parcela nacional."
    ],
    correta: 2,
    explicacao: "Em 2026, a implantação integral não extingue modalidades: VAAF, VAAT e VAAR permanecem, cada qual com sua lógica legal e cronogramas divulgados pelo FNDE.",
    feedbackAcerto: "Você evitou um erro comum de transição: chegar a 23% não significa fundir ou substituir as modalidades.",
    feedbackErro: "A correta reconhece a coexistência. As demais supõem extinção, fusão ou ausência de transferências distintas que não ocorreu.",
    dicaBanca: "2026 completa a implantação; não extingue VAAF, VAAT ou VAAR."
  },
  {
    pergunta: "Uma rede beneficiada recebeu R$ 20 milhões de complementação-VAAT. Considerando apenas a obrigação do art. 27 da Lei nº 14.113/2020, o mínimo a aplicar em despesas de capital é:",
    alternativas: [
      "R$ 1 milhão.",
      "R$ 2 milhões.",
      "R$ 2,5 milhões.",
      "R$ 3 milhões.",
      "R$ 4 milhões."
    ],
    correta: 3,
    explicacao: "O art. 27 exige 15% da complementação-VAAT em despesas de capital. Quinze por cento de R$ 20 milhões corresponde a R$ 3 milhões.",
    feedbackAcerto: "Você aplicou o percentual à base correta. A dificuldade é não misturar os 15% do VAAT com os percentuais de 10%, 23%, 50% ou 70% existentes em outras regras.",
    feedbackErro: "A correta é R$ 3 milhões. Os demais valores correspondem a percentuais diferentes ou cálculos incorretos.",
    dicaBanca: "Em cálculo de Fundeb, identifique primeiro a base: aqui é a complementação-VAAT."
  },
  {
    pergunta: "Analise as afirmações: I. Em 2026, a complementação mínima da União alcança 23%. II. O VAAR corresponde a 2,5 pontos percentuais e depende de condicionalidades e indicadores. III. A base da subvinculação dos 70% inclui a complementação-VAAR. IV. Ao menos 15% da complementação-VAAT de cada rede beneficiada deve financiar despesas de capital. V. O CACS atua com autonomia em relação ao Executivo local. Está correto o que se afirma em:",
    alternativas: [
      "I, II e III.",
      "I, III e IV.",
      "II, III, IV e V.",
      "I, II, III e V.",
      "I, II, IV e V."
    ],
    correta: 4,
    explicacao: "As afirmações I, II, IV e V estão corretas. A III está errada porque o art. 26 exclui a complementação-VAAR da base utilizada para a subvinculação mínima de 70%.",
    feedbackAcerto: "Você integrou os pontos mais difíceis do tema: percentual de 2026, natureza do VAAR, base dos 70%, capital no VAAT e autonomia do controle social.",
    feedbackErro: "A resposta correta é I, II, IV e V. A afirmação III inverte uma ressalva expressa da Lei nº 14.113/2020.",
    dicaBanca: "Questão integradora: atenção especial às bases de cálculo, não só aos percentuais."
  }
];
