// Banco de Avaliação da Aprendizagem — 50 questões autorais em nível de concurso para professor.
// Revisado em agosto de 2026. Inclui fundamentos teóricos, instrumentos, feedback, LDB e avaliação institucional/externa.

const avaliacao = [
  {
    pergunta: "Uma escola substituiu a prática de atribuir notas isoladas por um processo no qual os professores coletam evidências, interpretam o que os estudantes compreenderam e decidem quais intervenções realizar. Essa mudança expressa, sobretudo, a passagem de uma concepção de avaliação como:",
    alternativas: [
      "mensuração classificatória para um processo de julgamento pedagógico orientado à aprendizagem.",
      "registro descritivo para um sistema de certificação baseado em resultados acumulados e de prestação de contas administrativa ao final do período letivo.",
      "observação informal para um procedimento estatístico de comparação entre turmas.",
      "controle do rendimento para uma prática centrada na autoavaliação dos estudantes.",
      "verificação de conteúdos para uma substituição dos objetivos por competências gerais."
    ],
    correta: 0,
    explicacao: "A avaliação contemporânea não se reduz à medição. Ela envolve produzir evidências, interpretá-las à luz de critérios e tomar decisões que possam melhorar o ensino e a aprendizagem.",
    feedbackAcerto: "Você identificou o núcleo da mudança: a informação avaliativa passa a ter função decisória. O ponto central não é abandonar notas, mas deixar de tratar a avaliação como simples mensuração e classificação.",
    feedbackErro: "A alternativa correta é a que descreve a passagem da mensuração classificatória para o julgamento pedagógico orientado à aprendizagem. As demais confundem avaliação formativa com abandono de critérios, substituição de objetivos ou simples mudança de instrumentos.",
    dicaBanca: "Quando o enunciado destaca evidência + interpretação + decisão, procure uma concepção de avaliação comprometida com a aprendizagem."
  },
  {
    pergunta: "Para Cipriano Luckesi, uma diferença fundamental entre examinar e avaliar está no uso que se faz do resultado obtido. Nessa perspectiva, caracteriza mais adequadamente o ato de avaliar:",
    alternativas: [
      "atribuir uma nota que sintetize o desempenho e permita ordenar os estudantes ao final do percurso.",
      "investigar a qualidade da aprendizagem e, a partir do diagnóstico, decidir intervenções que favoreçam avanços.",
      "aplicar instrumentos equivalentes para assegurar comparabilidade entre estudantes de uma mesma turma e encerrar o processo com a formalização do resultado obtido.",
      "verificar o domínio de conteúdos e registrar o resultado de forma objetiva no sistema escolar.",
      "estabelecer um padrão mínimo de rendimento e certificar quem atingiu o nível previsto."
    ],
    correta: 1,
    explicacao: "Em Luckesi, avaliar envolve diagnosticar a realidade e tomar uma decisão a favor da melhoria. O exame tende a se encerrar na constatação/classificação; a avaliação exige decisão pedagógica consequente.",
    feedbackAcerto: "Você reconheceu a distinção essencial em Luckesi: o diagnóstico não é o ponto final. Avaliar implica acolher os dados, qualificá-los e agir pedagogicamente sobre a realidade encontrada.",
    feedbackErro: "A resposta correta é a investigação seguida de decisão pedagógica. As outras alternativas descrevem usos possíveis de provas e registros, mas mantêm o foco em mensuração, comparação, classificação ou certificação, que não definem o sentido avaliativo defendido por Luckesi.",
    dicaBanca: "Luckesi: diagnóstico sem decisão pedagógica aproxima-se de verificação; avaliação exige ação consequente."
  },
  {
    pergunta: "Um professor aplicou uma atividade diagnóstica e constatou que metade da turma não compreendia um conceito indispensável à unidade seguinte. Segundo uma concepção avaliativa coerente com Luckesi, a conduta mais adequada é:",
    alternativas: [
      "registrar o baixo desempenho e manter o planejamento para preservar a sequência curricular prevista.",
      "reaplicar o mesmo instrumento alguns dias depois para confirmar a estabilidade do resultado obtido e manter a mesma sequência didática prevista para todos os estudantes.",
      "reorganizar o ensino, oferecer novas oportunidades de aprendizagem e acompanhar se a dificuldade foi superada.",
      "separar os estudantes por nível de desempenho para tornar homogêneas as atividades subsequentes.",
      "converter o resultado diagnóstico em nota parcial para aumentar o compromisso dos estudantes com o conteúdo."
    ],
    correta: 2,
    explicacao: "Na perspectiva de Luckesi, o diagnóstico deve subsidiar uma decisão. Identificar uma dificuldade exige uma ação pedagógica capaz de criar condições para que a aprendizagem avance.",
    feedbackAcerto: "Você aplicou corretamente o princípio diagnóstico-decisório: o professor usa o resultado para intervir, e depois volta a observar a aprendizagem para verificar os efeitos da ação.",
    feedbackErro: "A correta é reorganizar o ensino e acompanhar a superação da dificuldade. Registrar, repetir a prova, separar alunos ou transformar diagnóstico em nota não responde pedagogicamente ao problema identificado.",
    dicaBanca: "Em questões de Luckesi, procure a sequência: investigar → qualificar → decidir → intervir."
  },
  {
    pergunta: "Uma professora acompanha as produções de cada estudante ao longo do bimestre, formula perguntas sobre seus raciocínios, devolve observações e propõe desafios seguintes de acordo com as respostas apresentadas. Essa prática aproxima-se diretamente da concepção de Jussara Hoffmann denominada avaliação:",
    alternativas: [
      "criterial, porque compara o desempenho do estudante com objetivos previamente explicitados.",
      "diagnóstica, porque identifica conhecimentos prévios antes do desenvolvimento dos conteúdos.",
      "somativa, porque reúne evidências de diferentes momentos para compor um resultado final com ênfase na consolidação do resultado ao término do período avaliado.",
      "mediadora, porque utiliza o acompanhamento e o diálogo para promover novas possibilidades de aprendizagem.",
      "normativa, porque interpreta o desempenho individual em relação ao comportamento do grupo."
    ],
    correta: 3,
    explicacao: "A avaliação mediadora, em Hoffmann, enfatiza acompanhamento, diálogo, interpretação do percurso do estudante e intervenções que favoreçam continuidade e avanço na aprendizagem.",
    feedbackAcerto: "Você reconheceu que não basta avaliar muitas vezes; o diferencial está em transformar as informações do percurso em mediação pedagógica, com perguntas, devolutivas e novos desafios.",
    feedbackErro: "A resposta correta é avaliação mediadora. Diagnóstica, somativa, criterial e normativa descrevem outras finalidades ou referências de julgamento e não explicam o papel dialógico e interventivo apresentado.",
    dicaBanca: "Hoffmann: mediação = acompanhar o pensamento do estudante e intervir para que ele avance."
  },
  {
    pergunta: "Uma escola afirma ter adotado 'avaliação mediadora' porque passou a aplicar uma prova curta toda sexta-feira. À luz de Jussara Hoffmann, essa justificativa é insuficiente porque:",
    alternativas: [
      "a mediação depende de substituir provas escritas por instrumentos qualitativos e descritivos em qualquer situação.",
      "a frequência semanal descaracteriza a avaliação, que deve ocorrer em momentos mais espaçados do percurso.",
      "a avaliação mediadora exige que os estudantes definam os próprios critérios antes de cada instrumento utilizado e solicitar justificativas individuais após a divulgação dos resultados.",
      "a mediação pressupõe que os resultados semanais sejam convertidos em registros cumulativos de desempenho.",
      "o caráter mediador decorre do acompanhamento interpretativo e das intervenções produzidas a partir das evidências, e não da frequência das provas."
    ],
    correta: 4,
    explicacao: "Aplicar instrumentos com frequência não torna a avaliação mediadora. O essencial é interpretar o percurso do estudante, dialogar sobre suas produções e usar as evidências para promover novas aprendizagens.",
    feedbackAcerto: "Você distinguiu continuidade de mediação. Uma avaliação pode ser frequente e continuar classificatória; torna-se mediadora quando o professor transforma evidências em diálogo e intervenção pedagógica.",
    feedbackErro: "A correta é a que destaca acompanhamento interpretativo e intervenção. As demais transformam mediação em tipo de instrumento, periodicidade, autodefinição de critérios ou simples acumulação de resultados.",
    dicaBanca: "Pegadinha clássica: avaliação contínua não é sinônimo automático de avaliação mediadora."
  },
  {
    pergunta: "Na perspectiva de Philippe Perrenoud, a ideia de 'regulação das aprendizagens' está melhor representada quando o professor:",
    alternativas: [
      "utiliza evidências do percurso para ajustar situações didáticas e ajudar o estudante a modificar estratégias de aprendizagem.",
      "mantém os critérios de correção estáveis para garantir comparabilidade entre diferentes grupos avaliados.",
      "converte os resultados de cada atividade em indicadores numéricos para acompanhar a evolução da turma e utilizar a série histórica para monitorar a estabilidade do rendimento ao longo do período.",
      "aplica avaliações intermediárias para antecipar a nota que provavelmente será obtida na etapa final.",
      "reorganiza os estudantes em grupos fixos segundo faixas de desempenho observadas nas avaliações."
    ],
    correta: 0,
    explicacao: "Para Perrenoud, a avaliação formativa participa da regulação das aprendizagens quando informa ajustes no ensino e ajuda o estudante a compreender e modificar seus modos de aprender.",
    feedbackAcerto: "Você identificou regulação como ajuste do processo, não como controle estatístico. A informação avaliativa precisa alterar a ação pedagógica ou as estratégias de aprendizagem.",
    feedbackErro: "A correta é a utilização das evidências para ajustar situações didáticas e estratégias. As demais tratam de comparabilidade, quantificação, previsão de nota ou agrupamento, sem caracterizar regulação formativa.",
    dicaBanca: "Perrenoud: regulação significa usar informação avaliativa para modificar o percurso enquanto ele acontece."
  },
  {
    pergunta: "Um professor anuncia que realizará uma 'avaliação formativa', mas utiliza o instrumento somente para compor a média, sem oferecer devolutiva nem alterar qualquer decisão de ensino. Considerando a noção de avaliação formativa discutida por autores como Perrenoud e Hadji, o problema principal é que:",
    alternativas: [
      "o instrumento deveria ter sido aplicado antes do início do conteúdo para assumir função formativa.",
      "a função formativa depende do uso das informações para orientar a aprendizagem e regular as intervenções pedagógicas.",
      "a avaliação formativa exige instrumentos sem nota, pois qualquer pontuação transforma o procedimento em somativo.",
      "o professor deveria comparar os resultados individuais com a média da turma antes de decidir a classificação.",
      "a atividade deveria ser refeita com perguntas abertas, uma vez que itens objetivos não produzem evidências formativas."
    ],
    correta: 1,
    explicacao: "A função formativa não está determinada pelo formato, pelo momento ou pela presença de nota, mas pelo uso das evidências para apoiar avanços e regular o ensino e a aprendizagem.",
    feedbackAcerto: "Você percebeu que 'formativa' descreve uma função. O mesmo instrumento pode ter uso formativo ou meramente somativo, dependendo do que professor e estudante fazem com as informações produzidas.",
    feedbackErro: "A correta destaca o uso regulador das informações. As demais transformam avaliação formativa em momento específico, ausência de nota, comparação normativa ou formato de questão.",
    dicaBanca: "Não confunda instrumento com função: a mesma prova pode produzir usos avaliativos diferentes."
  },
  {
    pergunta: "Em uma avaliação de leitura, a escola considera satisfatório o estudante que identifica a tese, reconhece os argumentos centrais e justifica sua interpretação com evidências do texto. O desempenho é julgado com base nesses critérios, sem comparação com a média da turma. Trata-se de avaliação predominantemente:",
    alternativas: [
      "normativa, porque utiliza parâmetros comuns para interpretar o rendimento do grupo.",
      "somativa, porque sintetiza os resultados de uma atividade realizada após o ensino.",
      "criterial, porque compara o desempenho com critérios de aprendizagem previamente estabelecidos.",
      "diagnóstica, porque identifica quais habilidades precisam ser ensinadas na etapa seguinte.",
      "ipsativa, porque compara o desempenho atual do estudante com seu próprio desempenho anterior tomando como referência a evolução do próprio estudante em sucessivas produções."
    ],
    correta: 2,
    explicacao: "Na avaliação criterial, o julgamento é feito em relação a critérios ou padrões de aprendizagem definidos, e não à posição do estudante diante do grupo.",
    feedbackAcerto: "Você identificou corretamente a referência usada no julgamento: a pergunta é 'atingiu os critérios?', e não 'ficou acima ou abaixo dos colegas?'.",
    feedbackErro: "A correta é criterial. A alternativa normativa exigiria comparação com o grupo; as demais classificam a avaliação por função ou por outra referência de comparação.",
    dicaBanca: "Para diferenciar criterial e normativa, pergunte: o desempenho é comparado com um critério ou com outras pessoas?"
  },
  {
    pergunta: "Um professor ensinou interpretação de gráficos durante todo o bimestre, mas sua prova final avaliou majoritariamente memorização de definições. Mesmo que a correção seja objetiva, o principal problema de validade dessa avaliação é:",
    alternativas: [
      "o uso de uma prova final, que impede a obtenção de qualquer evidência sobre competências desenvolvidas.",
      "a ausência de questões discursivas, indispensáveis quando se pretende avaliar habilidades de interpretação.",
      "o número reduzido de instrumentos, que torna impossível produzir qualquer julgamento sobre aprendizagem.",
      "a falta de alinhamento entre os objetivos e experiências de aprendizagem e o que o instrumento efetivamente exige.",
      "a utilização de conceitos teóricos, que deveria ser evitada quando a habilidade principal envolve análise de dados e reduzir o peso de tarefas de interpretação para evitar interferência de habilidades não ensinadas."
    ],
    correta: 3,
    explicacao: "Uma avaliação é mais válida quando produz evidências pertinentes ao que se pretende avaliar. Se o objetivo foi interpretar gráficos, um instrumento centrado em definições mede outro construto.",
    feedbackAcerto: "Você identificou um problema de alinhamento e validade: o instrumento pode ser bem corrigido e ainda assim avaliar algo diferente do objetivo proposto.",
    feedbackErro: "A correta é a falta de alinhamento entre objetivos, ensino e avaliação. Não é o formato discursivo, a existência de prova final ou a presença de conceitos que determina, por si, a validade.",
    dicaBanca: "Validade: o instrumento precisa gerar evidência sobre a aprendizagem que realmente se pretende julgar."
  },
  {
    pergunta: "Duas professoras corrigem a mesma produção escrita usando a mesma rubrica. Uma atribui nível 4 e a outra nível 2 ao mesmo critério, sem conseguirem explicar a diferença por evidências do texto. Esse fato sugere, principalmente, necessidade de:",
    alternativas: [
      "substituir a rubrica por uma prova objetiva que elimine julgamentos profissionais na correção.",
      "ampliar o número de critérios para aumentar a quantidade de informações produzidas pela atividade.",
      "retirar descritores qualitativos e manter uma pontuação total definida para cada produção analisada e utilizar uma escala numérica comum para diminuir divergências entre os avaliadores.",
      "comparar a produção com a média da turma antes de atribuir o nível final ao estudante.",
      "aperfeiçoar os descritores e calibrar a interpretação dos critérios para aumentar a consistência dos julgamentos."
    ],
    correta: 4,
    explicacao: "Quando avaliadores aplicam o mesmo critério de modo muito discrepante, é necessário tornar os descritores mais claros e promover calibração para aumentar consistência e confiabilidade.",
    feedbackAcerto: "Você identificou que rubrica não garante consistência por si só. Critérios claros, exemplos e discussão entre avaliadores ajudam a reduzir interpretações divergentes.",
    feedbackErro: "A correta é aperfeiçoar descritores e calibrar julgamentos. Trocar o instrumento, aumentar critérios, retirar descritores ou comparar com a turma não resolve a origem da divergência.",
    dicaBanca: "Rubrica eficaz exige critério claro + descritor observável + interpretação compartilhada."
  },
  {
    pergunta: "No primeiro encontro de uma unidade sobre frações, a professora propõe situações-problema sem atribuição de nota para descobrir como os estudantes raciocinam, quais estratégias já dominam e onde aparecem obstáculos. A finalidade predominante dessa ação é:",
    alternativas: [
      "diagnóstica, pois busca conhecer o ponto de partida para orientar as decisões de ensino.",
      "formativa, pois produz regulação contínua durante toda a unidade de aprendizagem, por definição.",
      "somativa, pois registra uma síntese inicial que poderá ser comparada com o resultado final.",
      "normativa, pois permite organizar a turma segundo a distribuição do desempenho observado.",
      "certificadora, pois comprova quais conhecimentos prévios foram efetivamente consolidados."
    ],
    correta: 0,
    explicacao: "A avaliação diagnóstica busca compreender condições iniciais ou atuais da aprendizagem para subsidiar planejamento e intervenção.",
    feedbackAcerto: "Você reconheceu que o aspecto decisivo é a finalidade: conhecer como a turma pensa antes de definir ou ajustar o percurso de ensino.",
    feedbackErro: "A correta é diagnóstica. O fato de ocorrer no início não basta por si só, mas o uso descrito — conhecer o ponto de partida para planejar — caracteriza essa função.",
    dicaBanca: "Diagnóstica não é sinônimo de 'prova no começo'; é avaliação usada para conhecer necessidades e orientar o ponto de partida."
  },
  {
    pergunta: "Durante uma sequência didática, a professora recolhe respostas de saída ao final de cada aula, identifica um erro recorrente e inicia a aula seguinte com uma atividade específica para trabalhar aquela dificuldade. A função avaliativa predominante é:",
    alternativas: [
      "somativa, porque cada resposta de saída registra o desempenho ao término de uma aula.",
      "formativa, porque a evidência é utilizada durante o processo para decidir a intervenção seguinte.",
      "diagnóstica, porque toda identificação de dificuldade corresponde a diagnóstico inicial.",
      "normativa, porque o erro recorrente é definido a partir do comportamento predominante da turma considerando a frequência do erro em relação ao conjunto de respostas produzidas pela turma.",
      "certificadora, porque os registros acumulados comprovam o desenvolvimento das aprendizagens."
    ],
    correta: 1,
    explicacao: "A avaliação é formativa quando a informação produzida durante o percurso é utilizada para ajustar o ensino e apoiar a aprendizagem antes do encerramento do processo.",
    feedbackAcerto: "Você identificou o ciclo formativo completo: coleta de evidência, interpretação da dificuldade e intervenção imediata.",
    feedbackErro: "A correta é formativa. O instrumento poderia ser usado de outras formas, mas aqui sua função é regular o processo enquanto a aprendizagem está acontecendo.",
    dicaBanca: "Formativa = evidência durante o percurso + decisão pedagógica antes do encerramento."
  },
  {
    pergunta: "Ao final do semestre, uma escola precisa registrar se os estudantes alcançaram os objetivos previstos e emitir o resultado oficial do período. Mesmo tendo realizado acompanhamento formativo durante as aulas, essa etapa final cumpre principalmente função:",
    alternativas: [
      "diagnóstica, por identificar lacunas que deverão orientar o planejamento do semestre seguinte.",
      "mediadora, por transformar a síntese final em diálogo permanente com cada estudante.",
      "somativa, por sintetizar o nível de aprendizagem alcançado para fins de registro e decisão final.",
      "criterial, por exigir que todos os resultados finais sejam expressos em descritores de desempenho com base em critérios previamente publicados para o encerramento da etapa.",
      "normativa, por demandar comparação do rendimento individual com a distribuição da turma."
    ],
    correta: 2,
    explicacao: "A avaliação somativa sintetiza resultados de uma etapa e pode cumprir funções de registro, certificação ou decisão final. Ela pode coexistir com avaliação formativa.",
    feedbackAcerto: "Você reconheceu que avaliação formativa e somativa não são excludentes: acompanhar o processo não elimina a necessidade institucional de sintetizar resultados.",
    feedbackErro: "A correta é somativa. Diagnóstico e mediação podem decorrer da análise posterior, mas a finalidade descrita no enunciado é sintetizar e registrar o resultado da etapa.",
    dicaBanca: "Somativa = síntese de uma etapa; não significa, necessariamente, avaliação ruim ou exclusivamente classificatória."
  },
  {
    pergunta: "Considere três ações de um mesmo professor: I. Antes da unidade, investiga conhecimentos prévios; II. Durante as aulas, usa evidências para ajustar intervenções; III. Ao final, registra o nível alcançado em relação aos objetivos. As funções predominantes são, respectivamente:",
    alternativas: [
      "formativa, diagnóstica e somativa.",
      "diagnóstica, somativa e formativa.",
      "somativa, formativa e diagnóstica.",
      "diagnóstica, formativa e somativa.",
      "criterial, normativa e certificadora."
    ],
    correta: 3,
    explicacao: "As três funções se distinguem principalmente pelo uso das informações: diagnóstico do ponto de partida, regulação durante o percurso e síntese ao final da etapa.",
    feedbackAcerto: "Você associou corretamente cada ação à sua finalidade. A questão não depende do tipo de instrumento, mas do momento e, sobretudo, do uso pedagógico dos resultados.",
    feedbackErro: "A sequência correta é diagnóstica, formativa e somativa. As demais trocam as finalidades ou misturam categorias diferentes de classificação.",
    dicaBanca: "Em itens de associação, identifique primeiro a finalidade de cada ação, não o formato da atividade."
  },
  {
    pergunta: "Uma prova aplicada no meio do bimestre vale nota, mas o professor também analisa os erros, oferece devolutiva e reorganiza o ensino antes das atividades seguintes. A classificação mais adequada é:",
    alternativas: [
      "somativa, porque a existência de nota impediria qualquer uso formativo do mesmo instrumento.",
      "formativa, porque a devolutiva eliminaria a função de registro do desempenho atribuída ao instrumento ainda que o instrumento continue registrando um resultado utilizado na composição da média do período.",
      "diagnóstica, porque todo erro identificado representa uma necessidade de diagnóstico do estudante.",
      "normativa, porque provas com nota pressupõem comparação entre estudantes de uma mesma turma.",
      "um mesmo instrumento pode cumprir função somativa e também formativa, conforme os usos atribuídos às evidências."
    ],
    correta: 4,
    explicacao: "Funções avaliativas podem coexistir no mesmo instrumento. Uma atividade pode contribuir para a nota e, simultaneamente, orientar feedback e mudanças no ensino.",
    feedbackAcerto: "Você evitou uma dicotomia artificial: o que define a função avaliativa é o uso das informações, e um mesmo instrumento pode servir a mais de uma finalidade.",
    feedbackErro: "A correta reconhece a coexistência de funções. Nota não elimina automaticamente o potencial formativo, e devolutiva não apaga a função de registro.",
    dicaBanca: "Não classifique a avaliação pelo instrumento ou pela presença de nota; observe para que o resultado é usado."
  },
  {
    pergunta: "Segundo o art. 24, V, 'a', da LDB, a verificação do rendimento escolar na educação básica deve observar:",
    alternativas: [
      "avaliação contínua e cumulativa, com prevalência dos aspectos qualitativos sobre os quantitativos e dos resultados do período sobre eventuais provas finais.",
      "avaliação periódica e classificatória, com equilíbrio entre aspectos qualitativos e quantitativos e prevalência da média final com peso equivalente entre evidências qualitativas e quantitativas e síntese dos resultados no encerramento do período.",
      "avaliação contínua e diagnóstica, com prioridade dos resultados das provas finais quando houver divergência entre registros.",
      "avaliação cumulativa e normativa, com prevalência dos resultados quantitativos quando forem utilizados critérios comuns.",
      "avaliação processual e certificadora, com equivalência entre resultados do período letivo e resultados obtidos em exame final."
    ],
    correta: 0,
    explicacao: "A LDB determina avaliação contínua e cumulativa, prevalência dos aspectos qualitativos sobre os quantitativos e prevalência dos resultados ao longo do período sobre eventuais provas finais.",
    feedbackAcerto: "Você identificou a redação legal completa. As bancas costumam trocar uma das três relações: contínua/cumulativa, qualitativo/quantitativo e período/prova final.",
    feedbackErro: "A alternativa correta reúne os três critérios legais. As outras modificam a natureza da avaliação ou invertem as prevalências previstas no art. 24, V, 'a'.",
    dicaBanca: "Decore o triplo eixo da LDB: contínua+cumulativa; qualitativo>quantitativo; período>eventual prova final."
  },
  {
    pergunta: "Uma escola interpreta a expressão legal 'prevalência dos aspectos qualitativos sobre os quantitativos' como proibição do uso de notas e percentuais. Essa interpretação é:",
    alternativas: [
      "adequada, porque a LDB determina que o rendimento seja expresso por registros descritivos em toda a educação básica e requer que as instituições substituam escalas numéricas por conceitos descritivos em seus regimentos.",
      "inadequada, porque prevalência não significa exclusão; dados quantitativos podem ser usados, desde que o julgamento não se reduza a eles.",
      "adequada, desde que a escola utilize portfólios e observações sistemáticas como instrumentos principais de avaliação.",
      "inadequada, porque a LDB estabelece equivalência entre aspectos qualitativos e quantitativos no cálculo do resultado.",
      "adequada, pois qualquer escala numérica torna a avaliação incompatível com o caráter contínuo e cumulativo previsto em lei."
    ],
    correta: 1,
    explicacao: "A LDB estabelece prevalência dos aspectos qualitativos, não eliminação dos quantitativos. Notas e medidas podem integrar o processo, desde que não reduzam o julgamento à dimensão numérica.",
    feedbackAcerto: "Você fez a distinção jurídica correta: 'prevalecer' significa ter maior peso interpretativo, e não proibir registros quantitativos.",
    feedbackErro: "A correta afirma que dados quantitativos podem existir. As demais inventam uma obrigação de registro exclusivamente descritivo ou alteram a relação prevista na LDB.",
    dicaBanca: "Em legislação, cuidado com a diferença entre prevalência e exclusão."
  },
  {
    pergunta: "Uma escola estabelece que a nota de uma prova final substituirá todos os resultados produzidos durante o ano, mesmo quando o estudante demonstrou desempenho consistente ao longo do período. À luz do art. 24 da LDB, essa regra:",
    alternativas: [
      "é compatível com a autonomia escolar, pois o regimento pode definir qualquer forma de composição da média anual.",
      "é adequada quando a prova final utiliza critérios idênticos para todos os estudantes da mesma série.",
      "contraria a prevalência dos resultados obtidos ao longo do período sobre os de eventuais provas finais.",
      "é obrigatória nos sistemas que adotam avaliação cumulativa e certificação anual por componente curricular.",
      "contraria a LDB por admitir prova final, instrumento que não integra a verificação legal do rendimento escolar."
    ],
    correta: 2,
    explicacao: "A LDB admite eventuais provas finais, mas determina que os resultados obtidos ao longo do período prevaleçam sobre elas.",
    feedbackAcerto: "Você identificou a pegadinha: o problema não é existir prova final; é permitir que ela apague o percurso avaliativo acumulado durante o período.",
    feedbackErro: "A correta aponta a inversão da prevalência legal. Autonomia regimental não autoriza contrariar a LDB, e a lei não proíbe prova final.",
    dicaBanca: "Prova final pode existir; o que não pode é prevalecer sobre o conjunto de resultados do período."
  },
  {
    pergunta: "Sobre estudos de recuperação na educação básica, a LDB estabelece que:",
    alternativas: [
      "devem ocorrer ao término do ano letivo, após a consolidação dos resultados finais de cada componente.",
      "podem ser oferecidos pelas escolas quando houver disponibilidade de carga horária e recursos pedagógicos.",
      "devem substituir as avaliações do período quando o estudante apresentar baixo rendimento em dois ou mais componentes.",
      "são obrigatórios nos casos de baixo rendimento e devem ocorrer, de preferência, paralelamente ao período letivo.",
      "integram a avaliação somativa e têm como finalidade recalcular a média final dos estudantes abaixo do padrão."
    ],
    correta: 3,
    explicacao: "O art. 24, V, 'e', prevê obrigatoriedade de estudos de recuperação para casos de baixo rendimento, de preferência paralelos ao período letivo, conforme o regimento da instituição.",
    feedbackAcerto: "Você identificou tanto a obrigatoriedade quanto a preferência pela recuperação paralela. A lei busca intervenção durante o processo, e não concentração da recuperação no fim.",
    feedbackErro: "A correta reúne os dois elementos legais. As demais tornam a recuperação facultativa, exclusivamente final, substitutiva ou meramente recalculadora de nota.",
    dicaBanca: "LDB: recuperação é obrigatória e, de preferência, paralela ao período letivo."
  },
  {
    pergunta: "Analise as afirmações sobre o art. 24, V, da LDB: I. A avaliação deve ser contínua e cumulativa. II. Os aspectos qualitativos prevalecem sobre os quantitativos. III. Os resultados de eventual prova final prevalecem sobre os resultados do período. IV. A recuperação é obrigatória nos casos de baixo rendimento, preferencialmente paralela ao período letivo. Está correto o que se afirma em:",
    alternativas: [
      "I e III.",
      "II e III.",
      "I, II e III.",
      "II, III e IV.",
      "I, II e IV."
    ],
    correta: 4,
    explicacao: "As afirmações I, II e IV reproduzem critérios previstos na LDB. A III está invertida: são os resultados ao longo do período que prevalecem sobre eventuais provas finais.",
    feedbackAcerto: "Você identificou exatamente a inversão usada como distrator. A legislação valoriza o percurso acumulado, e não a predominância do exame final.",
    feedbackErro: "A resposta correta é I, II e IV. A afirmação III contradiz a redação do art. 24, V, 'a'.",
    dicaBanca: "Em itens de legislação, procure inversões de prevalência: é um recurso frequente de banca."
  },
  {
    pergunta: "Um professor pretende avaliar uma competência complexa desenvolvida em projeto interdisciplinar. Em vez de utilizar uma única prova, combina produto final, observação do processo, apresentação oral e autoavaliação. A principal justificativa pedagógica é:",
    alternativas: [
      "triangular evidências de diferentes fontes para construir um julgamento mais abrangente sobre a aprendizagem.",
      "reduzir a necessidade de critérios explícitos, pois a diversidade de instrumentos compensa diferenças de interpretação.",
      "garantir que todos os estudantes apresentem desempenho equivalente em pelo menos um dos instrumentos utilizados.",
      "substituir a avaliação somativa por uma coleção de registros formativos sem necessidade de síntese final.",
      "diminuir a influência dos objetivos de aprendizagem na correção, ampliando a liberdade de julgamento do professor."
    ],
    correta: 0,
    explicacao: "Competências complexas podem exigir evidências variadas. A triangulação de fontes permite observar dimensões diferentes e construir um julgamento mais sustentado.",
    feedbackAcerto: "Você percebeu que diversificar instrumentos não é um fim em si mesmo; serve para ampliar e cruzar evidências relevantes sobre o que se pretende avaliar.",
    feedbackErro: "A correta é triangulação de evidências. Diversidade de instrumentos não elimina critérios, não garante equivalência de desempenho e não dispensa síntese ou alinhamento com objetivos.",
    dicaBanca: "Instrumentos diferentes devem produzir evidências complementares, não aleatórias."
  },
  {
    pergunta: "Uma pasta contém todas as atividades feitas por um estudante durante o semestre, em ordem cronológica, mas sem seleção, comentários, critérios ou reflexão sobre o percurso. Para que esse material se aproxime de um portfólio avaliativo, é necessário principalmente:",
    alternativas: [
      "converter cada atividade em nota e calcular a média das produções reunidas no final do semestre.",
      "selecionar evidências significativas e analisá-las de modo a tornar visíveis progressos, dificuldades e reflexões sobre a aprendizagem.",
      "retirar as produções com erro para que o conjunto represente as aprendizagens consolidadas pelo estudante.",
      "organizar as atividades por tipo de instrumento para permitir comparação estatística entre diferentes componentes.",
      "substituir as tarefas escritas por registros visuais, já que portfólios devem privilegiar evidências não tradicionais preservando a sequência cronológica como principal referência para o julgamento final do desempenho."
    ],
    correta: 1,
    explicacao: "Portfólio avaliativo não é simples arquivo. Ele reúne evidências selecionadas e analisadas para tornar visível o percurso, os avanços, dificuldades e processos de reflexão.",
    feedbackAcerto: "Você distinguiu 'pasta de trabalhos' de portfólio. O valor avaliativo está na seleção, organização e interpretação das evidências do percurso.",
    feedbackErro: "A correta destaca seleção e análise do desenvolvimento. Média, exclusão de erros, organização estatística ou troca do formato das evidências não definem um portfólio.",
    dicaBanca: "Portfólio = coleção intencional + evidências do percurso + reflexão."
  },
  {
    pergunta: "Em uma rubrica para apresentação oral, o critério 'argumentação' possui os níveis: 1 'fraca', 2 'regular', 3 'boa', 4 'excelente'. A principal fragilidade desse desenho é:",
    alternativas: [
      "utilizar quatro níveis, quantidade insuficiente para diferenciar desempenhos em tarefas complexas.",
      "avaliar argumentação, habilidade que deveria ser observada prioritariamente por meio de textos escritos.",
      "os descritores são vagos e não explicitam quais evidências distinguem um nível de desempenho de outro.",
      "usar palavras qualitativas, pois rubricas precisam ser compostas por pontuações e percentuais objetivos.",
      "separar argumentação de outros critérios, já que rubricas devem produzir um julgamento global da atividade avaliada pela turma."
    ],
    correta: 2,
    explicacao: "Uma rubrica precisa de descritores observáveis que indiquem o que caracteriza cada nível. Rótulos como 'bom' e 'excelente' não esclarecem a evidência esperada.",
    feedbackAcerto: "Você identificou que o problema não é usar níveis, mas torná-los interpretáveis. Bons descritores ajudam estudante e avaliador a compreender por que um desempenho pertence a determinado nível.",
    feedbackErro: "A correta aponta a vagueza dos descritores. Quatro níveis podem ser suficientes, argumentação pode ser avaliada oralmente e rubricas podem usar descrições qualitativas e critérios separados.",
    dicaBanca: "Rubrica boa não diz só 'bom'; explica o que torna o desempenho bom."
  },
  {
    pergunta: "Uma professora deseja utilizar observação sistemática para avaliar colaboração em atividades de grupo. Qual procedimento fortalece a qualidade das evidências?",
    alternativas: [
      "registrar impressões gerais ao final do bimestre, quando já houver uma visão consolidada sobre cada estudante.",
      "observar com maior atenção estudantes que apresentaram problemas disciplinares nas primeiras atividades.",
      "atribuir uma nota de participação ao final de cada aula, sem explicitar os comportamentos que sustentaram o julgamento e registrar o desempenho com uma escala comum utilizada em todas as situações observadas durante o período.",
      "definir indicadores observáveis, registrar situações em momentos variados e comparar as evidências com critérios previamente estabelecidos.",
      "solicitar aos estudantes que escolham colegas exemplares e utilizar essas indicações como referência para os demais julgamentos."
    ],
    correta: 3,
    explicacao: "Observação sistemática exige intencionalidade: critérios, indicadores observáveis, registro em diferentes situações e interpretação das evidências.",
    feedbackAcerto: "Você reconheceu a diferença entre observar casualmente e observar para avaliar. O registro precisa estar conectado a indicadores e ocorrer em mais de uma situação.",
    feedbackErro: "A correta combina critérios, indicadores e registros variados. Impressões tardias, foco seletivo, notas sem evidência e indicação de colegas aumentam vieses.",
    dicaBanca: "Observação sistemática = o que observar + quando registrar + com qual critério interpretar."
  },
  {
    pergunta: "Em uma autoavaliação, os estudantes respondem somente à pergunta 'que nota você merece?' e o valor informado é incorporado à média sem justificativa. Para que a autoavaliação tenha maior função formativa, seria mais adequado:",
    alternativas: [
      "retirar qualquer relação com os objetivos da disciplina para favorecer espontaneidade e autenticidade das respostas.",
      "manter a nota livre, mas limitar sua influência no resultado final para reduzir possíveis distorções.",
      "solicitar que cada estudante compare sua nota com a média da turma antes de confirmar o resultado e justificar sua posição usando a distribuição de desempenho do grupo como parâmetro de comparação.",
      "pedir que o professor valide a nota com base em comportamento, pontualidade e entrega das atividades.",
      "oferecer critérios claros e pedir ao estudante que analise evidências do próprio desempenho, identifique avanços e estabeleça próximos passos."
    ],
    correta: 4,
    explicacao: "Autoavaliação formativa promove metacognição e autorregulação quando o estudante usa critérios e evidências para analisar seu percurso e planejar avanços.",
    feedbackAcerto: "Você identificou que autoavaliação não é 'dar a própria nota'. Seu potencial aparece quando o estudante julga evidências, reconhece lacunas e projeta ações.",
    feedbackErro: "A correta combina critérios, evidências e próximos passos. As demais mantêm a autoavaliação como opinião, comparação social ou julgamento comportamental.",
    dicaBanca: "Autoavaliação eficaz = critério + evidência + reflexão + ação futura."
  },
  {
    pergunta: "Em uma atividade de revisão por pares, estudantes utilizam uma rubrica para comentar rascunhos de colegas antes da versão final. Para que essa prática tenha valor formativo, é especialmente importante:",
    alternativas: [
      "preparar os estudantes para aplicar os critérios e produzir comentários específicos que possam orientar a revisão.",
      "garantir anonimato integral, pois conhecer o autor do trabalho invalida a avaliação feita entre colegas.",
      "converter a avaliação de cada colega em nota, de modo que o estudante leve o processo a sério.",
      "impedir divergências entre avaliadores, exigindo que todos atribuam exatamente o mesmo julgamento ao texto e estabelecer exemplos de respostas-modelo para reduzir variações na aplicação dos critérios pelos estudantes.",
      "limitar os comentários aos problemas encontrados, evitando elogios que reduzam a objetividade da análise."
    ],
    correta: 0,
    explicacao: "A avaliação por pares tem potencial formativo quando estudantes compreendem os critérios e aprendem a produzir feedback específico e utilizável.",
    feedbackAcerto: "Você reconheceu que revisão por pares exige ensino do próprio ato de avaliar. Sem critérios compreendidos e feedback de qualidade, a atividade vira opinião entre colegas.",
    feedbackErro: "A correta é preparar os estudantes para aplicar critérios e comentar de forma acionável. Anonimato, nota, unanimidade ou foco exclusivo em erros não são condições necessárias.",
    dicaBanca: "Avaliação por pares precisa ser ensinada: critério e qualidade do feedback são centrais."
  },
  {
    pergunta: "Um professor afirma que questões objetivas avaliam apenas memorização, enquanto questões discursivas avaliam necessariamente pensamento de ordem superior. A afirmação é inadequada porque:",
    alternativas: [
      "questões discursivas produzem evidências menos confiáveis devido à participação do julgamento do professor.",
      "o nível cognitivo depende da tarefa intelectual exigida pelo item, e não do formato objetivo ou discursivo em si.",
      "questões objetivas são adequadas para conteúdos conceituais, enquanto discursivas devem ser usadas para habilidades.",
      "questões discursivas só alcançam níveis superiores quando não há critérios de correção previamente definidos.",
      "o formato da questão determina o tipo de aprendizagem avaliado, mas pode ser compensado pelo número de itens no processo final."
    ],
    correta: 1,
    explicacao: "É possível construir itens objetivos que exigem análise e aplicação, assim como questões discursivas podem solicitar mera reprodução. O nível cognitivo depende da demanda da tarefa.",
    feedbackAcerto: "Você evitou associar formato a complexidade cognitiva. O que importa é o que o estudante precisa fazer com o conhecimento para responder.",
    feedbackErro: "A correta destaca a demanda cognitiva. Nenhum dos formatos é intrinsecamente superior, e critérios de correção não diminuem complexidade.",
    dicaBanca: "Não confunda formato do item com nível de pensamento exigido."
  },
  {
    pergunta: "Uma turma receberá um projeto avaliado em quatro critérios. Os estudantes conhecem os critérios somente depois de entregar o trabalho. Do ponto de vista da transparência avaliativa, o principal problema é que:",
    alternativas: [
      "a divulgação antecipada dos critérios faria os estudantes produzirem trabalhos muito semelhantes entre si.",
      "critérios prévios devem ser reservados ao professor para preservar a independência do julgamento profissional.",
      "os estudantes deixam de ter referências claras para orientar a produção e monitorar a qualidade do próprio trabalho.",
      "a avaliação perde caráter somativo, pois critérios conhecidos transformam qualquer tarefa em avaliação formativa.",
      "a existência de critérios reduz a possibilidade de o professor considerar aspectos inesperados presentes nos trabalhos de cada estudante."
    ],
    correta: 2,
    explicacao: "Critérios explicitados antes da tarefa tornam expectativas visíveis e ajudam o estudante a planejar, monitorar e revisar sua produção.",
    feedbackAcerto: "Você identificou que transparência não significa entregar a resposta; significa tornar os padrões de qualidade compreensíveis antes da execução.",
    feedbackErro: "A correta é a ausência de referências claras. Critérios prévios não eliminam criatividade, julgamento profissional ou função somativa.",
    dicaBanca: "Critério conhecido antecipadamente favorece autorregulação e justiça avaliativa."
  },
  {
    pergunta: "Compare duas devolutivas sobre uma resposta a um gráfico. Devolutiva 1: 'Precisa melhorar'. Devolutiva 2: 'Sua conclusão identifica a tendência geral, mas não usa os dados dos anos 2022 e 2023; incorpore esses valores para justificar a comparação'. A segunda é mais formativa porque:",
    alternativas: [
      "é mais longa e, por isso, fornece ao estudante maior quantidade de informação para memorizar.",
      "explica ao estudante qual nota deverá ser obtida quando ele corrigir o trabalho entregue.",
      "substitui o julgamento do estudante por uma orientação detalhada do professor sobre a resposta final avaliada.",
      "relaciona a evidência a um critério e indica uma ação concreta que pode melhorar a produção.",
      "evita mencionar aspectos positivos, concentrando a atenção no erro que precisa ser corrigido."
    ],
    correta: 3,
    explicacao: "Feedback formativo é específico, ligado a critérios e acionável: ajuda o estudante a compreender onde está e o que pode fazer para avançar.",
    feedbackAcerto: "Você identificou por que a devolutiva 2 é superior: ela descreve a qualidade atual e oferece um próximo passo diretamente ligado à tarefa.",
    feedbackErro: "A correta destaca critério e ação concreta. Comprimento, nota futura, entrega da resposta ou foco exclusivo em erro não definem feedback de qualidade.",
    dicaBanca: "Feedback útil responde: onde estou? o que falta? qual é o próximo passo?"
  },
  {
    pergunta: "Um professor devolve uma redação três meses depois da atividade, quando o conteúdo já foi encerrado, com a marcação '7,0' e sem comentários. Mesmo que a nota esteja corretamente calculada, o potencial formativo é baixo principalmente porque:",
    alternativas: [
      "a avaliação escrita não permite produzir feedback sobre processos complexos de aprendizagem.",
      "a atribuição de nota impede que o estudante revise o trabalho ou reconheça critérios de qualidade.",
      "o intervalo de três meses transforma a avaliação em instrumento de caráter normativo.",
      "a ausência de comentário exige que o estudante procure o professor, o que reduz a autonomia na aprendizagem.",
      "a devolutiva é tardia e pouco informativa, oferecendo escassos elementos para orientar uma ação de melhoria."
    ],
    correta: 4,
    explicacao: "Feedback formativo precisa chegar em tempo útil e fornecer informação que possa ser usada pelo estudante para revisar estratégias ou produções.",
    feedbackAcerto: "Você percebeu que correção tecnicamente correta não basta. Se a devolutiva chega tarde e não informa como avançar, perde grande parte de sua função reguladora.",
    feedbackErro: "A correta combina oportunidade temporal e qualidade da informação. Nota não impede revisão, e o problema não decorre do formato escrito ou de comparação normativa.",
    dicaBanca: "Feedback precisa ser utilizável enquanto ainda há oportunidade de aprender com ele."
  },
  {
    pergunta: "Em uma questão sobre densidade, vários estudantes chegam à mesma resposta errada usando o mesmo raciocínio. Uma abordagem coerente com avaliação formativa é:",
    alternativas: [
      "analisar o raciocínio que gerou o erro e planejar uma situação que confronte a concepção identificada.",
      "atribuir a pontuação prevista e seguir o conteúdo, pois a função da avaliação é registrar o nível alcançado.",
      "informar a fórmula correta e solicitar repetição de exercícios equivalentes até que a resposta se estabilize.",
      "retirar a questão do instrumento, já que o erro coletivo indica problema de dificuldade excessiva do item.",
      "considerar o erro como evidência de falta de estudo e orientar a turma a revisar o material em casa."
    ],
    correta: 0,
    explicacao: "O erro pode revelar hipóteses, procedimentos e concepções dos estudantes. Analisá-lo permite planejar intervenções mais precisas.",
    feedbackAcerto: "Você tratou o erro como dado sobre o pensamento, e não apenas como ausência de acerto. Isso permite uma intervenção dirigida à origem da dificuldade.",
    feedbackErro: "A correta é investigar o raciocínio e intervir sobre ele. Dar a resposta, retirar o item ou atribuir o erro a falta de estudo não explora seu potencial diagnóstico e formativo.",
    dicaBanca: "Erro recorrente é pista sobre como a turma está pensando."
  },
  {
    pergunta: "Após identificar baixo rendimento em uma habilidade, uma escola oferece 'recuperação' repetindo a mesma aula, com o mesmo material e a mesma estratégia que não funcionaram anteriormente. A principal limitação pedagógica é que:",
    alternativas: [
      "a recuperação deveria ocorrer no encerramento do bimestre para evitar interrupções no planejamento da turma.",
      "a recuperação precisa criar novas condições de aprendizagem, com intervenções ajustadas às dificuldades evidenciadas.",
      "a recuperação deve priorizar uma nova prova, pois o problema central é confirmar se o resultado inicial estava correto.",
      "a recuperação exige redução dos objetivos para adequá-los ao nível de desempenho apresentado pelos estudantes.",
      "a recuperação deve ser individual em todos os casos, porque dificuldades compartilhadas não permitem intervenção coletiva."
    ],
    correta: 1,
    explicacao: "Recuperar aprendizagem não é repetir mecanicamente o ensino anterior. As evidências devem orientar novas estratégias, apoios e oportunidades.",
    feedbackAcerto: "Você reconheceu que a recuperação precisa responder ao diagnóstico. Se nada muda na intervenção, as mesmas barreiras tendem a permanecer.",
    feedbackErro: "A correta é criar novas condições ajustadas às dificuldades. Recuperação não precisa ser final, baseada em nova prova, reduzida em objetivos ou necessariamente individual.",
    dicaBanca: "Recuperação eficaz modifica a intervenção, não só repete a oportunidade."
  },
  {
    pergunta: "Uma estudante com deficiência visual domina os mesmos objetivos de aprendizagem da turma, mas necessita leitor de tela para acessar o instrumento. Fornecer o recurso de acessibilidade, mantendo os critérios acadêmicos pertinentes, significa:",
    alternativas: [
      "reduzir a exigência avaliativa para compensar uma condição individual que interfere no desempenho.",
      "alterar os objetivos da atividade, pois instrumentos acessíveis precisam avaliar competências diferentes mantendo a mesma estrutura de acesso e compensando as diferenças por meio de critérios avaliativos diferenciados.",
      "remover uma barreira de acesso preservando o que se pretende avaliar e os critérios acadêmicos pertinentes.",
      "substituir a avaliação criterial por uma avaliação individualizada baseada no progresso pessoal.",
      "privilegiar a estudante em relação aos colegas, uma vez que ela recebe um recurso não utilizado por todos."
    ],
    correta: 2,
    explicacao: "Acessibilidade busca permitir que o estudante demonstre a aprendizagem sem que uma barreira irrelevante contamine a evidência sobre o objetivo avaliado.",
    feedbackAcerto: "Você distinguiu acesso de facilitação. O recurso muda a forma de acesso ao instrumento, não necessariamente o critério ou o objetivo de aprendizagem.",
    feedbackErro: "A correta é remover a barreira mantendo o construto avaliado. As demais confundem acessibilidade com redução de exigência, mudança de objetivos ou privilégio.",
    dicaBanca: "Adaptação de acesso não é sinônimo de redução de expectativa acadêmica."
  },
  {
    pergunta: "Após receber feedback sobre um texto, o estudante tem a oportunidade de revisar a produção e explicar quais mudanças realizou com base nos critérios. Esse procedimento fortalece a avaliação formativa porque:",
    alternativas: [
      "transforma o resultado inicial em um registro provisório que não precisa ser considerado no julgamento do professor.",
      "garante que todos os estudantes cheguem ao mesmo nível de desempenho após a segunda versão do texto.",
      "substitui a necessidade de ensino direto, pois a revisão individual passa a conduzir todo o processo de aprendizagem e transferir ao estudante a responsabilidade central por identificar e corrigir os próprios equívocos.",
      "fecha o ciclo entre devolutiva e ação do estudante, permitindo que a informação avaliativa produza melhoria observável.",
      "elimina a função somativa da tarefa, já que trabalhos revisados não podem integrar uma síntese de desempenho."
    ],
    correta: 3,
    explicacao: "Feedback ganha força formativa quando o estudante pode agir sobre ele. Revisão e justificativa tornam visível a utilização da devolutiva no processo de melhoria.",
    feedbackAcerto: "Você identificou o ciclo completo: evidência → feedback → ação do estudante → nova evidência. Sem oportunidade de uso, a devolutiva perde parte de seu valor.",
    feedbackErro: "A correta destaca a ação do estudante após o feedback. Revisão não garante resultado igual, não substitui ensino e não impede uso somativo posterior.",
    dicaBanca: "Feedback sem oportunidade de ação é informação; com revisão, torna-se parte do processo de aprendizagem."
  },
  {
    pergunta: "Uma escola analisa seu projeto político-pedagógico, clima escolar, participação das famílias, práticas de gestão, resultados de aprendizagem e condições de funcionamento para definir prioridades de melhoria. Esse processo caracteriza principalmente:",
    alternativas: [
      "avaliação da aprendizagem, pois utiliza resultados dos estudantes como uma das fontes de informação.",
      "avaliação somativa, pois produz uma síntese institucional ao final de determinado período.",
      "avaliação externa, pois considera indicadores que podem ser comparados com outras instituições da rede quando a análise utiliza indicadores comuns e referências de desempenho definidas para toda a rede de ensino.",
      "avaliação normativa, pois estabelece um padrão institucional para interpretar o desempenho da comunidade.",
      "avaliação institucional, pois examina múltiplas dimensões da própria escola para orientar seu aperfeiçoamento."
    ],
    correta: 4,
    explicacao: "Avaliação institucional examina a escola como organização educativa, articulando diferentes dimensões para subsidiar reflexão e melhoria.",
    feedbackAcerto: "Você diferenciou o objeto da avaliação: aqui não se avalia apenas o estudante, mas a instituição em suas práticas, condições, relações e resultados.",
    feedbackErro: "A correta é avaliação institucional. Resultados de aprendizagem podem integrar a análise, mas não definem sozinhos o processo; tampouco ele se torna externo ou normativo por usar indicadores.",
    dicaBanca: "Pergunte 'quem ou o que é o objeto da avaliação?': estudante, instituição, rede ou programa."
  },
  {
    pergunta: "Sobre avaliações externas em larga escala e avaliação da aprendizagem realizada pelo professor, é correto afirmar que:",
    alternativas: [
      "produzem evidências em escalas e finalidades distintas; resultados externos podem apoiar diagnósticos, mas não substituem o acompanhamento cotidiano da aprendizagem.",
      "avaliam os mesmos objetivos e devem produzir resultados equivalentes quando os instrumentos possuem qualidade técnica semelhante porque ambos deveriam medir as mesmas aprendizagens e produzir conclusões equivalentes sobre cada estudante.",
      "as avaliações externas são mais válidas porque utilizam itens padronizados e, por isso, dispensam avaliações internas.",
      "a avaliação do professor deve reproduzir matrizes externas para garantir comparabilidade entre estudante, escola e rede.",
      "resultados de larga escala têm função individual diagnóstica suficiente para definir as intervenções de cada estudante."
    ],
    correta: 0,
    explicacao: "Avaliações externas e avaliações de sala de aula operam em escalas, recortes e finalidades diferentes. Dados externos podem informar decisões, mas não substituem evidências próximas do processo cotidiano.",
    feedbackAcerto: "Você reconheceu a complementaridade sem confundir funções. Indicadores de rede ou escola não oferecem, por si, diagnóstico individual completo de cada estudante.",
    feedbackErro: "A correta distingue escalas e usos. Padronização não torna avaliação externa substituta da avaliação docente, e a prática escolar não deve se reduzir à matriz do teste.",
    dicaBanca: "Resultados externos são uma fonte de evidência, não o retrato completo da aprendizagem de cada aluno."
  },
  {
    pergunta: "Uma escola recebe resultados de uma avaliação externa mostrando desempenho baixo em resolução de problemas. Qual uso é pedagogicamente mais adequado?",
    alternativas: [
      "treinar os estudantes com itens do mesmo formato até que se familiarizem com a estrutura utilizada pela prova.",
      "cruzar os dados externos com produções da escola, identificar habilidades frágeis e planejar intervenções curriculares e didáticas.",
      "substituir as avaliações internas por simulados periódicos para acompanhar se a média da escola está aumentando.",
      "concentrar o currículo nas habilidades de menor desempenho até que os indicadores externos alcancem a meta da rede.",
      "atribuir aos professores das turmas avaliadas responsabilidade direta pelo resultado e estabelecer metas individuais de correção para que cada docente responda por metas vinculadas diretamente à média obtida por seus estudantes na avaliação."
    ],
    correta: 1,
    explicacao: "Dados externos ganham sentido pedagógico quando são analisados com outras evidências e usados para investigar causas, revisar currículo e planejar intervenções.",
    feedbackAcerto: "Você escolheu um uso diagnóstico e contextualizado dos dados. A escola não trata o indicador como fim em si mesmo nem reduz o currículo ao treinamento para prova.",
    feedbackErro: "A correta é cruzar fontes e planejar intervenções. Treino de formato, substituição das avaliações internas, estreitamento curricular e responsabilização individual simplificam indevidamente o dado.",
    dicaBanca: "Use avaliação externa para perguntar 'o que precisamos investigar e melhorar?', não para transformar currículo em treinamento."
  },
  {
    pergunta: "Uma rede decide dedicar grande parte do tempo letivo à repetição de itens semelhantes aos da avaliação externa, retirando projetos, experimentos e conteúdos que não aparecem diretamente na matriz do teste. O principal risco é:",
    alternativas: [
      "aumentar a complexidade do currículo ao incorporar habilidades avaliadas por instrumentos padronizados.",
      "reduzir a comparabilidade dos resultados, já que estudantes treinados tendem a responder de forma menos estável.",
      "estreitar o currículo, transformando o indicador avaliativo em finalidade do ensino e empobrecendo experiências formativas.",
      "tornar a avaliação externa formativa, porque os itens passam a orientar diretamente as intervenções de sala de aula.",
      "diminuir a validade do teste externo, pois conteúdos ensinados especificamente para a prova deixam de compor a matriz porque a exposição prévia aos conteúdos avaliados comprometeria a interpretação dos resultados obtidos pela rede."
    ],
    correta: 2,
    explicacao: "Quando a escola passa a ensinar para o teste, há risco de estreitamento curricular: o instrumento deixa de ser uma fonte de informação e passa a comandar o currículo.",
    feedbackAcerto: "Você identificou a diferença entre usar resultados para melhorar o ensino e reduzir o ensino ao que é medido pelo teste.",
    feedbackErro: "A correta é estreitamento curricular. O problema central não é comparabilidade ou validade técnica do teste, mas empobrecimento da formação e inversão entre meio e finalidade.",
    dicaBanca: "Avaliação deve servir ao currículo; currículo não deve virar preparação para avaliação."
  },
  {
    pergunta: "Em uma seleção interna, a escola considera que os 20% com maior pontuação receberão determinada vaga, independentemente de um padrão absoluto de domínio. Já em outra atividade, considera aprovado quem demonstra quatro critérios previamente definidos. As referências são, respectivamente:",
    alternativas: [
      "criterial e somativa.",
      "somativa e diagnóstica.",
      "ipsativa e normativa.",
      "normativa e criterial.",
      "diagnóstica e formativa."
    ],
    correta: 3,
    explicacao: "A referência normativa interpreta o desempenho em relação ao grupo. A criterial o interpreta em relação a critérios ou padrões previamente estabelecidos.",
    feedbackAcerto: "Você distinguiu corretamente os dois referenciais: no primeiro caso importa a posição relativa; no segundo, o atendimento a critérios de domínio.",
    feedbackErro: "A correta é normativa e criterial. As outras misturam função, momento e referência de julgamento.",
    dicaBanca: "Normativa = posição no grupo. Criterial = atingimento de critérios."
  },
  {
    pergunta: "Um teste padronizado apresenta alta consistência de resultados, mas avalia predominantemente velocidade de leitura quando o objetivo declarado era compreender argumentos complexos. Nesse caso, é possível afirmar que:",
    alternativas: [
      "a consistência elevada assegura validade suficiente, pois medidas estáveis representam adequadamente qualquer objetivo avaliado.",
      "a validade é alta porque velocidade de leitura integra toda situação de compreensão textual, mesmo sem relação com os critérios previstos desde que os itens estejam tecnicamente bem construídos e sejam aplicados em condições padronizadas aos estudantes.",
      "a baixa correspondência com o objetivo pode ser compensada aumentando o número de itens de velocidade no instrumento.",
      "a confiabilidade não pode ser analisada quando o teste mede um aspecto diferente daquele definido no planejamento.",
      "um instrumento pode produzir resultados consistentes e ainda apresentar problema de validade por não representar adequadamente o construto pretendido."
    ],
    correta: 4,
    explicacao: "Confiabilidade e validade são propriedades relacionadas, mas distintas. Um instrumento pode medir algo de forma consistente e, ainda assim, medir a coisa errada.",
    feedbackAcerto: "Você separou precisão de pertinência. Resultados estáveis não resolvem um problema de alinhamento entre o que se deseja avaliar e o que o teste realmente exige.",
    feedbackErro: "A correta reconhece consistência sem validade suficiente. Aumentar itens ou invocar estabilidade não corrige a inadequação do construto.",
    dicaBanca: "Pergunta-chave: o instrumento mede de forma consistente? e mede aquilo que deveria medir?"
  },
  {
    pergunta: "Uma professora pretende avaliar a capacidade de argumentar com base em evidências. Qual tarefa produz evidência mais alinhada a esse objetivo?",
    alternativas: [
      "apresentar dados contraditórios sobre um problema e pedir que o estudante defenda uma conclusão justificando-a com evidências relevantes.",
      "solicitar a definição memorizada de argumento e a enumeração das partes que compõem uma justificativa.",
      "pedir ao estudante que escolha a alternativa correta entre cinco definições de evidência científica.",
      "aplicar uma lista de conceitos sobre argumentação e calcular o percentual de acertos obtidos na atividade.",
      "solicitar um resumo do capítulo sobre argumentação sem indicar critérios relacionados ao uso de evidências e utilizar uma rubrica geral de organização textual para atribuir o desempenho alcançado pelo estudante."
    ],
    correta: 0,
    explicacao: "Se o objetivo é avaliar argumentação baseada em evidências, a tarefa precisa exigir que o estudante construa uma posição e use dados para sustentá-la.",
    feedbackAcerto: "Você alinhou a evidência ao objetivo. Saber definir 'argumento' não demonstra necessariamente que o estudante consegue argumentar.",
    feedbackErro: "A correta exige desempenho autêntico da habilidade. As demais medem sobretudo reconhecimento, memorização ou resumo de conceitos.",
    dicaBanca: "Para avaliar uma habilidade, peça ao estudante que execute a habilidade."
  },
  {
    pergunta: "Em planejamento reverso, o professor começa definindo a aprendizagem desejada, determina quais evidências mostrariam que ela foi alcançada e, depois, escolhe experiências de ensino. O ganho avaliativo dessa lógica é:",
    alternativas: [
      "permitir que a avaliação seja elaborada depois das aulas, quando o professor já conhece o desempenho da turma.",
      "fortalecer o alinhamento entre objetivos, evidências esperadas e atividades de ensino.",
      "reduzir a necessidade de instrumentos variados, pois a evidência final já é definida no início do planejamento.",
      "garantir que os critérios avaliativos permaneçam iguais para qualquer turma que trabalhe o mesmo conteúdo.",
      "separar avaliação e metodologia para evitar que o instrumento influencie as estratégias pedagógicas."
    ],
    correta: 1,
    explicacao: "Planejamento reverso favorece coerência porque os objetivos e as evidências desejadas orientam a seleção das experiências de aprendizagem.",
    feedbackAcerto: "Você identificou o ponto central: pensar na evidência antes das atividades ajuda a evitar ensinar uma coisa e avaliar outra.",
    feedbackErro: "A correta é o fortalecimento do alinhamento. A abordagem não dispensa diversidade, não exige critérios idênticos para qualquer contexto e não separa avaliação do ensino.",
    dicaBanca: "Objetivo → evidência → experiência de aprendizagem: essa sequência reduz desalinhamentos."
  },
  {
    pergunta: "Uma professora percebe que estudantes acertam exercícios rotineiros, mas fracassam quando precisam aplicar o mesmo conceito em uma situação nova. Se o objetivo curricular envolve transferência da aprendizagem, a avaliação precisa:",
    alternativas: [
      "manter exercícios conhecidos para diminuir interferências do contexto na demonstração do conhecimento.",
      "aumentar o número de itens rotineiros para obter estimativa mais estável do domínio conceitual.",
      "incluir situações novas que exijam mobilização do conceito, permitindo verificar se o conhecimento é transferido.",
      "substituir tarefas práticas por questões conceituais, porque transferência não pode ser observada diretamente.",
      "usar autoavaliação como fonte principal, já que o estudante é quem melhor reconhece se consegue aplicar o conhecimento."
    ],
    correta: 2,
    explicacao: "Transferência implica utilizar conhecimentos em contextos novos. Para avaliá-la, a tarefa precisa exigir adaptação e mobilização, não mera repetição.",
    feedbackAcerto: "Você alinhou o desenho da tarefa à aprendizagem desejada. Acertar exercícios familiares pode demonstrar domínio procedimental restrito sem evidenciar transferência.",
    feedbackErro: "A correta é incluir situações novas. Mais itens rotineiros aumentam quantidade de evidência do mesmo comportamento, mas não mudam o que está sendo avaliado.",
    dicaBanca: "Se o objetivo é transferir, a avaliação precisa apresentar novidade suficiente para exigir aplicação."
  },
  {
    pergunta: "Uma prova de História pretende avaliar análise causal, mas 80% dos itens pedem datas e nomes isolados. Antes de discutir nota de corte ou dificuldade dos itens, a primeira revisão necessária é:",
    alternativas: [
      "aumentar a quantidade de questões para representar melhor o conteúdo ministrado no bimestre.",
      "diminuir o peso das questões factuais e manter a estrutura da prova para preservar comparabilidade.",
      "substituir questões objetivas por discursivas, formato mais adequado para qualquer análise histórica.",
      "revisar a tabela de especificações e o alinhamento cognitivo para representar adequadamente a habilidade de análise causal.",
      "elevar o nível de dificuldade das perguntas factuais para aproximá-las da exigência cognitiva pretendida e exigir relações cronológicas mais extensas entre fatos e acontecimentos trabalhados durante o período."
    ],
    correta: 3,
    explicacao: "A representatividade do conteúdo e do nível cognitivo precisa ser planejada. Uma tabela de especificações ajuda a alinhar objetivos, tópicos e demandas cognitivas do instrumento.",
    feedbackAcerto: "Você atacou a origem do problema: a prova não representa a habilidade declarada. Mudar nota de corte ou tornar fatos mais difíceis não cria análise causal.",
    feedbackErro: "A correta é revisar o alinhamento cognitivo e a especificação do instrumento. Formato discursivo pode ajudar em alguns casos, mas não é condição suficiente nem necessária.",
    dicaBanca: "Primeiro pergunte se o instrumento representa o objetivo; depois discuta dificuldade e pontuação."
  },
  {
    pergunta: "Uma escola usa prova, projeto e observação para avaliar o mesmo conjunto de aprendizagens. Os três instrumentos apontam que determinado estudante compreende conceitos, mas apresenta dificuldade em aplicá-los de forma autônoma. A convergência dessas fontes:",
    alternativas: [
      "prova que os três instrumentos são equivalentes e podem ser substituídos por aquele de aplicação mais rápida.",
      "indica que a dificuldade decorre do estudante, não sendo necessário revisar as condições de ensino oferecidas.",
      "elimina a necessidade de julgamento profissional, pois diferentes evidências chegaram à mesma conclusão.",
      "autoriza transformar a conclusão em diagnóstico permanente, já que a triangulação garante estabilidade do desempenho podendo orientar decisões permanentes sem necessidade de novas evidências em avaliações posteriores.",
      "fortalece a interpretação sobre a dificuldade, embora o professor ainda precise considerar contexto, critérios e possibilidades de intervenção."
    ],
    correta: 4,
    explicacao: "Convergência entre fontes pode fortalecer uma interpretação, mas não elimina análise contextual nem transforma o julgamento em verdade definitiva.",
    feedbackAcerto: "Você reconheceu o valor e o limite da triangulação: evidências convergentes aumentam sustentação, mas continuam exigindo interpretação e decisão pedagógica.",
    feedbackErro: "A correta combina maior sustentação com cautela. Instrumentos não se tornam equivalentes, nem a dificuldade vira diagnóstico permanente ou isenta o ensino de análise.",
    dicaBanca: "Triangulação fortalece uma conclusão; não elimina julgamento profissional."
  },
  {
    pergunta: "Em conselho de classe, a equipe observa que estudantes têm bom desempenho em atividades de sala, mas resultados baixos em uma prova comum da rede. A decisão mais consistente é:",
    alternativas: [
      "investigar o alinhamento entre a prova, o currículo ensinado, os critérios e as evidências de sala antes de concluir sobre a aprendizagem.",
      "adotar a prova comum como referência principal, pois instrumentos padronizados possuem maior objetividade que avaliações docentes e deve orientar a revisão das avaliações internas quando houver qualquer divergência entre as duas fontes.",
      "desconsiderar a prova comum, já que qualquer divergência com a avaliação de sala indica baixa validade do instrumento externo.",
      "calcular uma média entre os dois resultados para neutralizar diferenças metodológicas e produzir um julgamento equilibrado.",
      "reaplicar a prova comum em condições idênticas, pois divergências decorrem prioritariamente de fatores momentâneos de desempenho."
    ],
    correta: 0,
    explicacao: "Quando fontes divergem, o caminho é investigar o que cada uma mede, como se alinha aos objetivos e quais condições podem explicar a diferença.",
    feedbackAcerto: "Você evitou escolher automaticamente uma fonte 'mais verdadeira'. Divergência entre evidências é informação importante que precisa ser investigada.",
    feedbackErro: "A correta é analisar alinhamento e condições. Padronização não garante superioridade, e média aritmética não resolve diferenças de construto ou finalidade.",
    dicaBanca: "Evidências divergentes pedem investigação, não escolha automática de um vencedor."
  },
  {
    pergunta: "A LDB atribui à União a responsabilidade de assegurar processo nacional de avaliação do rendimento escolar em colaboração com os sistemas de ensino. Segundo a lei, uma finalidade expressa desse processo é:",
    alternativas: [
      "certificar individualmente os estudantes que concluíram o ensino fundamental e o ensino médio.",
      "definir prioridades e contribuir para a melhoria da qualidade do ensino.",
      "substituir avaliações estaduais e municipais para unificar os critérios de rendimento escolar.",
      "determinar a aprovação e a reprovação dos estudantes com base em padrões nacionais de desempenho.",
      "estabelecer o currículo mínimo obrigatório a partir dos resultados obtidos nas avaliações nacionais."
    ],
    correta: 1,
    explicacao: "O art. 9º, VI, da LDB prevê processo nacional de avaliação do rendimento escolar com objetivo de definir prioridades e melhorar a qualidade do ensino.",
    feedbackAcerto: "Você identificou a finalidade legal do sistema nacional de avaliação. O dispositivo trata de informação para prioridades e qualidade, não de certificação individual ou decisão de aprovação.",
    feedbackErro: "A correta é definir prioridades e melhorar a qualidade. As demais atribuem à avaliação nacional funções que a LDB não estabelece nesse dispositivo.",
    dicaBanca: "Em legislação, diferencie avaliação de sistema de decisão individual sobre promoção escolar."
  },
  {
    pergunta: "Uma rede divulga aos responsáveis somente a nota individual do estudante e recusa acesso aos resultados de avaliações de qualidade e rendimento realizados pelo poder público. À luz da LDB atualmente vigente, essa postura:",
    alternativas: [
      "é adequada, porque resultados de avaliações públicas são informações administrativas destinadas aos gestores educacionais.",
      "é adequada quando os dados foram produzidos em parceria com organizações externas à administração pública inclusive quando os resultados tiverem sido produzidos por organização contratada para executar a avaliação.",
      "não se harmoniza com a garantia de acesso, por pais, responsáveis e estudantes, aos resultados das avaliações de qualidade e rendimento escolar.",
      "é obrigatória para preservar o sigilo das avaliações e impedir comparação pública entre instituições de ensino.",
      "é permitida quando os resultados agregados já foram divulgados em relatório técnico pelo respectivo sistema de ensino."
    ],
    correta: 2,
    explicacao: "A redação atual da LDB garante a pais, responsáveis e estudantes acesso aos resultados das avaliações de qualidade e de rendimento escolar realizadas pelo poder público ou em parceria.",
    feedbackAcerto: "Você reconheceu que a transparência educacional alcança resultados avaliativos. A garantia não se limita à nota individual entregue pela escola.",
    feedbackErro: "A correta aponta a incompatibilidade com a garantia legal de acesso. Parceria externa, divulgação agregada ou alegação administrativa não anulam o direito previsto na LDB.",
    dicaBanca: "Atualização importante: transparência dos resultados educacionais passou a ter previsão expressa na LDB."
  },
  {
    pergunta: "Associe autor e ideia: I. Luckesi; II. Hoffmann; III. Perrenoud. a. avaliação mediadora e acompanhamento dialógico do percurso; b. diagnóstico seguido de decisão pedagógica em favor da aprendizagem; c. regulação das aprendizagens pela utilização formativa das evidências. A associação correta é:",
    alternativas: [
      "I-a; II-c; III-b.",
      "I-c; II-b; III-a.",
      "I-b; II-c; III-a.",
      "I-b; II-a; III-c.",
      "I-c; II-a; III-b."
    ],
    correta: 3,
    explicacao: "Luckesi destaca o caráter diagnóstico-decisório; Hoffmann desenvolve a avaliação mediadora; Perrenoud relaciona avaliação formativa à regulação das aprendizagens.",
    feedbackAcerto: "Você distinguiu três autores frequentemente aproximados por defenderem avaliação a serviço da aprendizagem, mas com formulações características diferentes.",
    feedbackErro: "A correta é I-b, II-a, III-c. As demais trocam conceitos que pertencem a tradições teóricas próximas, mas não equivalentes.",
    dicaBanca: "Memorize os núcleos sem simplificar demais: Luckesi—diagnóstico/decisão; Hoffmann—mediação; Perrenoud—regulação."
  },
  {
    pergunta: "Uma escola pretende reformular sua política avaliativa. Analise as decisões: I. explicitar critérios antes das tarefas; II. utilizar resultados durante o processo para replanejar; III. fazer da prova final o resultado predominante quando houver divergência com o percurso; IV. oferecer recuperação preferencialmente durante o período letivo; V. combinar diferentes evidências quando a aprendizagem for complexa. À luz de princípios avaliativos contemporâneos e da LDB, são adequadas:",
    alternativas: [
      "I, II e III.",
      "II, III e IV.",
      "I, III, IV e V.",
      "II, IV e V.",
      "I, II, IV e V."
    ],
    correta: 4,
    explicacao: "Critérios claros, uso formativo das evidências, recuperação paralela e múltiplas fontes são coerentes com uma avaliação voltada à aprendizagem. A LDB não autoriza que a prova final prevaleça sobre o percurso; estabelece o contrário.",
    feedbackAcerto: "Você integrou teoria e legislação. A única decisão inadequada é a III, porque inverte a prevalência prevista no art. 24 da LDB.",
    feedbackErro: "A resposta correta é I, II, IV e V. A afirmação III é incompatível com a LDB, que faz prevalecer os resultados do período sobre eventuais provas finais.",
    dicaBanca: "Questão integradora: combine princípios pedagógicos com a redação legal e procure inversões sutis."
  }
];
