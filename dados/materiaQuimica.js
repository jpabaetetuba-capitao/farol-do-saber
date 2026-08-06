const materiaQuimica = [
    {
        pergunta: "Uma seringa fechada contém ar e tem o êmbolo pressionado. Embora invisível, o ar oferece resistência e ocupa menor volume após a compressão. A observação comprova que o ar:",
        alternativas: [
            "é apenas energia, porque não pode ser visto diretamente.",
            "não é matéria, pois não mantém volume constante.",
            "é matéria, pois possui massa e ocupa espaço.",
            "é matéria somente quando se transforma em líquido.",
            "não possui massa, embora exerça pressão."
        ],
        correta: 2,
        explicacao: "Matéria é tudo que possui massa e ocupa espaço. Gases atendem a esses critérios, ainda que sejam invisíveis e compressíveis.",
        feedbackAcerto: "Correto. Você usou propriedades físicas, e não a visibilidade, para classificar o ar.",
        feedbackErro: "A ausência de forma ou volume fixos não impede que um gás seja matéria.",
        dicaBanca: "Gases também possuem massa e ocupam espaço."
    },
    {
        pergunta: "Uma placa de vidro foi cortada e transformada em uma janela. Nessa situação, a classificação correta é:",
        alternativas: [
            "vidro é o objeto; a placa é o material; a janela é o corpo sem função, de acordo com o modelo químico apresentado.",
            "vidro é o material; a placa é um corpo; a janela é um objeto com função definida.",
            "placa e janela são materiais, enquanto vidro é apenas uma substância.",
            "janela é o material; vidro é o corpo; placa é o objeto.",
            "corpo, objeto e material são termos equivalentes nessa situação."
        ],
        correta: 1,
        explicacao: "Material é a substância ou conjunto de substâncias empregado; corpo é uma porção limitada de matéria; objeto é um corpo associado a uma finalidade.",
        feedbackAcerto: "Correto. Você aplicou os três conceitos ao mesmo exemplo.",
        feedbackErro: "A função distingue o objeto, enquanto o material indica do que ele é constituído.",
        dicaBanca: "Material = do que é feito; objeto = para que serve."
    },
    {
        pergunta: "Uma amostra é levada da Terra para a Lua. O valor indicado por uma balança de comparação de massas permanece o mesmo, mas a força gravitacional sobre a amostra diminui. Isso ocorre porque:",
        alternativas: [
            "massa e peso são forças e variam igualmente com a gravidade.",
            "peso é medido em quilogramas e permanece constante.",
            "massa depende da gravidade, mas peso é propriedade interna do corpo, sem alterar a composição indicada.",
            "a amostra perde matéria ao ser levada para a Lua.",
            "massa é quantidade de matéria, enquanto peso depende da aceleração gravitacional."
        ],
        correta: 4,
        explicacao: "A massa é expressa em quilogramas e permanece praticamente constante; o peso é uma força, P = m·g, expressa em newtons.",
        feedbackAcerto: "Correto. Você distinguiu propriedade do corpo e força gravitacional.",
        feedbackErro: "A mudança de local altera g e, portanto, o peso, sem alterar a quantidade de matéria.",
        dicaBanca: "Massa em kg; peso em N."
    },
    {
        pergunta: "O êmbolo de uma seringa com ar pode ser pressionado com facilidade, mas uma seringa completamente cheia de água oferece grande resistência. A diferença ocorre porque:",
        alternativas: [
            "gases não possuem partículas e por isso desaparecem sob pressão, durante o processo analisado.",
            "líquidos possuem partículas sem qualquer movimento.",
            "a água deixa de ser matéria quando o êmbolo é pressionado.",
            "as partículas gasosas são maiores que o volume da seringa.",
            "as partículas dos gases apresentam maior espaço entre si do que as dos líquidos."
        ],
        correta: 4,
        explicacao: "Gases são mais compressíveis porque suas partículas estão, em média, muito mais afastadas.",
        feedbackAcerto: "Correto. Você relacionou o comportamento macroscópico ao modelo particulado.",
        feedbackErro: "Compressão reduz espaços entre partículas; não elimina a matéria.",
        dicaBanca: "Maior distância entre partículas explica maior compressibilidade."
    },
    {
        pergunta: "Duas amostras de alumínio, uma pequena e outra grande, apresentam massas e volumes diferentes. Entretanto, a razão massa/volume é praticamente a mesma. Isso mostra que a densidade:",
        alternativas: [
            "aumenta sempre que a massa da amostra aumenta.",
            "depende apenas do formato externo do corpo.",
            "é uma propriedade característica do material, independentemente da quantidade analisada.",
            "é igual à soma da massa com o volume.",
            "só pode ser comparada entre amostras de mesmo tamanho e formato, conforme os dados do enunciado."
        ],
        correta: 2,
        explicacao: "Para uma substância em condições definidas, densidade é uma propriedade intensiva: d = m/V.",
        feedbackAcerto: "Correto. Você reconheceu que quantidade e densidade são grandezas distintas.",
        feedbackErro: "Dobrar massa e volume na mesma proporção não altera a densidade.",
        dicaBanca: "Densidade é razão, não quantidade total."
    },
    {
        pergunta: "Dois blocos de mesmo volume são colocados na água. O bloco A tem massa de 400 g e o B, 1.200 g. Considerando a mesma água, a explicação mais provável para A flutuar e B afundar é:",
        alternativas: [
            "A possui maior peso e por isso permanece na superfície.",
            "B possui menor densidade porque apresenta maior massa.",
            "a flutuação depende apenas do volume, que é igual nos dois blocos, considerando as condições descritas.",
            "A possui densidade menor que a da água, enquanto B possui densidade maior.",
            "o bloco A não sofre ação da gravidade quando colocado na água."
        ],
        correta: 3,
        explicacao: "Para corpos totalmente comparáveis, densidade menor que a do líquido favorece flutuação; densidade maior favorece afundamento.",
        feedbackAcerto: "Correto. Você relacionou massa e volume à densidade relativa.",
        feedbackErro: "Maior massa no mesmo volume significa maior densidade, não menor.",
        dicaBanca: "Compare a densidade do corpo com a do líquido."
    },
    {
        pergunta: "Uma esfera maciça de aço afunda, mas um navio de aço flutua. A diferença ocorre porque o navio:",
        alternativas: [
            "possui grande volume interno com ar, reduzindo sua densidade média.",
            "deixa de sofrer ação da gravidade quando entra na água, de acordo com o modelo químico apresentado.",
            "é feito de aço menos denso que o aço da esfera.",
            "possui motores que anulam permanentemente seu peso.",
            "transforma água em ar ao redor do casco."
        ],
        correta: 0,
        explicacao: "O formato oco aumenta o volume total sem aumentar proporcionalmente a massa, reduzindo a densidade média do conjunto.",
        feedbackAcerto: "Correto. Você distinguiu densidade do material e densidade média do corpo.",
        feedbackErro: "O aço continua denso, mas o conjunto navio + ar desloca grande volume de água.",
        dicaBanca: "Navios flutuam pela densidade média e pelo empuxo."
    },
    {
        pergunta: "Em três recipientes, uma substância aparece: com forma e volume definidos; com volume definido e forma variável; e sem forma ou volume definidos. As três situações correspondem, respectivamente, aos estados:",
        alternativas: [
            "líquido, sólido e gasoso.",
            "gasoso, líquido e sólido.",
            "sólido, gasoso e líquido.",
            "sólido, líquido e gasoso.",
            "plasma, líquido e sólido."
        ],
        correta: 3,
        explicacao: "Sólidos mantêm forma e volume; líquidos mantêm volume e assumem a forma do recipiente; gases variam forma e volume.",
        feedbackAcerto: "Correto. Você aplicou propriedades macroscópicas aos três estados.",
        feedbackErro: "O estado líquido não mantém forma própria, mas conserva aproximadamente o volume.",
        dicaBanca: "Forma e volume são as pistas principais."
    },
    {
        pergunta: "Água desaparece lentamente de um prato à temperatura ambiente, entra em ebulição em uma panela e vaporiza quase instantaneamente ao tocar uma chapa muito quente. Os processos são, respectivamente:",
        alternativas: [
            "ebulição, evaporação e condensação.",
            "calefação, fusão e ebulição.",
            "evaporação, ebulição e calefação.",
            "evaporação, liquefação e sublimação.",
            "sublimação, ebulição e evaporação."
        ],
        correta: 2,
        explicacao: "Evaporação é superficial e lenta; ebulição ocorre em toda a massa no ponto de ebulição; calefação é muito rápida em superfície extremamente quente.",
        feedbackAcerto: "Correto. Você distinguiu três formas de vaporização pelo modo de ocorrência.",
        feedbackErro: "Todas são passagens do líquido para o gasoso, mas acontecem em condições diferentes.",
        dicaBanca: "Lenta e superficial = evaporação; bolhas = ebulição; contato muito quente = calefação."
    },
    {
        pergunta: "Um cubo de gelo é fundido e depois a água obtida é congelada novamente. Durante o processo:",
        alternativas: [
            "o hidrogênio e o oxigênio se separam e depois reagem novamente, conforme os dados do enunciado.",
            "forma-se uma nova substância durante a fusão.",
            "a massa desaparece enquanto a água está líquida.",
            "a composição química permanece H₂O, ocorrendo apenas mudanças no estado físico.",
            "ocorre reação química porque há absorção e liberação de calor."
        ],
        correta: 3,
        explicacao: "Mudanças de estado são transformações físicas: alteram organização e energia das partículas, mas não a identidade química.",
        feedbackAcerto: "Correto. Você distinguiu mudança energética de mudança na composição.",
        feedbackErro: "Transferência de calor pode ocorrer tanto em processos físicos quanto químicos.",
        dicaBanca: "Mudança de estado não cria nova substância."
    },
    {
        pergunta: "Uma amostra de água pura contém apenas moléculas de H₂O. Ela é classificada como substância composta porque:",
        alternativas: [
            "é formada por átomos de dois elementos químicos diferentes combinados em proporção definida.",
            "apresenta duas fases visíveis em qualquer temperatura.",
            "pode ser separada em hidrogênio e oxigênio por filtração, considerando as condições descritas.",
            "contém moléculas de tamanhos diferentes misturadas.",
            "possui oxigênio dissolvido entre moléculas de hidrogênio."
        ],
        correta: 0,
        explicacao: "Substâncias compostas são constituídas por mais de um elemento químico unido quimicamente.",
        feedbackAcerto: "Correto. Você utilizou a composição elementar e a proporção definida.",
        feedbackErro: "Filtração separa fases de misturas, não elementos de uma substância composta.",
        dicaBanca: "Mais de um elemento unido quimicamente = substância composta."
    },
    {
        pergunta: "Oxigênio gasoso, O₂, e ozônio, O₃, são formados apenas pelo elemento oxigênio, mas apresentam propriedades diferentes. Eles são:",
        alternativas: [
            "misturas homogêneas do mesmo elemento.",
            "substâncias compostas porque possuem mais de um átomo.",
            "substâncias simples alotrópicas.",
            "isótopos com números atômicos diferentes.",
            "íons positivos e negativos do oxigênio."
        ],
        correta: 2,
        explicacao: "Alotropia ocorre quando um mesmo elemento forma substâncias simples diferentes.",
        feedbackAcerto: "Correto. Você não confundiu número de átomos com número de elementos.",
        feedbackErro: "Uma substância pode ter várias unidades atômicas e ainda ser simples se houver apenas um elemento.",
        dicaBanca: "O₂ e O₃: mesmo elemento, estruturas diferentes."
    },
    {
        pergunta: "Após dissolver completamente sal em água, uma amostra foi retirada de diferentes pontos e apresentou a mesma composição. O sistema é:",
        alternativas: [
            "uma substância composta, pois o sal deixou de existir.",
            "uma mistura heterogênea com duas fases invisíveis.",
            "uma substância simples formada por água salgada.",
            "um elemento químico em estado líquido.",
            "uma mistura homogênea com uma única fase."
        ],
        correta: 4,
        explicacao: "Misturas homogêneas apresentam aspecto uniforme e uma única fase em escala macroscópica.",
        feedbackAcerto: "Correto. Você usou uniformidade e número de fases.",
        feedbackErro: "Dissolver não transforma os componentes em uma nova substância por si só.",
        dicaBanca: "Solução é mistura homogênea."
    },
    {
        pergunta: "Água e óleo são agitados e depois deixados em repouso. Formam duas camadas. A classificação correta é:",
        alternativas: [
            "substância composta com dois elementos.",
            "mistura homogênea porque ambos os componentes são líquidos.",
            "substância simples que sofreu separação física.",
            "mistura heterogênea com uma única fase.",
            "mistura heterogênea com duas fases líquidas."
        ],
        correta: 4,
        explicacao: "O número de fases depende da uniformidade do sistema, e não apenas do estado físico dos componentes.",
        feedbackAcerto: "Correto. Você reconheceu duas regiões visualmente distintas.",
        feedbackErro: "Dois líquidos podem formar uma ou mais fases, conforme sua miscibilidade.",
        dicaBanca: "Camadas distintas indicam fases distintas."
    },
    {
        pergunta: "Em uma amostra de granito são identificados visualmente cristais de quartzo, feldspato e mica. Por isso, o granito é:",
        alternativas: [
            "uma mistura heterogênea, pois apresenta componentes e fases distinguíveis.",
            "uma substância pura composta por três elementos.",
            "uma mistura homogênea porque todos os componentes são sólidos, conforme os dados do enunciado.",
            "um elemento químico encontrado em diferentes cores.",
            "uma solução sólida com composição uniforme em toda a amostra."
        ],
        correta: 0,
        explicacao: "A presença de minerais distintos e regiões identificáveis caracteriza heterogeneidade.",
        feedbackAcerto: "Correto. Você classificou o sistema pelo número de fases, não pelo estado físico.",
        feedbackErro: "Misturas de sólidos podem ser homogêneas ou heterogêneas.",
        dicaBanca: "Componentes visíveis no granito indicam heterogeneidade."
    },
    {
        pergunta: "Uma mistura contém areia insolúvel dispersa em água. Para recuperar a areia e deixar a água atravessar um meio poroso, deve-se usar:",
        alternativas: [
            "destilação fracionada.",
            "cromatografia.",
            "filtração.",
            "fusão fracionada.",
            "evaporação total."
        ],
        correta: 2,
        explicacao: "Na filtração, o sólido insolúvel fica retido e o líquido atravessa o filtro.",
        feedbackAcerto: "Correto. Você escolheu o método segundo estado físico e insolubilidade.",
        feedbackErro: "Destilação seria desnecessariamente complexa para separar sólido insolúvel de líquido.",
        dicaBanca: "Sólido insolúvel + líquido = filtração."
    },
    {
        pergunta: "Uma mistura de água e barro permanece em repouso até o sólido se depositar. Em seguida, o líquido superior é transferido cuidadosamente. O método é:",
        alternativas: [
            "decantação.",
            "destilação simples.",
            "cromatografia.",
            "centrifugação obrigatória.",
            "sublimação."
        ],
        correta: 0,
        explicacao: "A decantação utiliza diferença de densidade e sedimentação para separar fases.",
        feedbackAcerto: "Correto. Você reconheceu repouso, depósito e transferência da fase superior.",
        feedbackErro: "Centrifugação pode acelerar a sedimentação, mas não é obrigatória no procedimento descrito.",
        dicaBanca: "Sedimentar e verter = decantar."
    },
    {
        pergunta: "Deseja-se obter água líquida a partir de uma solução de sal em água. O método mais adequado é:",
        alternativas: [
            "destilação simples, vaporizando a água e condensando o vapor.",
            "filtração, porque o sal dissolvido fica retido no papel.",
            "decantação, porque o sal sedimenta rapidamente.",
            "catação, porque os cristais dissolvidos podem ser removidos manualmente.",
            "peneiração, porque água e sal possuem tamanhos de partículas diferentes."
        ],
        correta: 0,
        explicacao: "A destilação simples separa um líquido volátil de um sólido não volátil dissolvido.",
        feedbackAcerto: "Correto. Você considerou a recuperação do solvente.",
        feedbackErro: "O sal dissolvido atravessa filtros comuns junto com a água.",
        dicaBanca: "Para recuperar o líquido de uma solução sólido-líquido, use destilação."
    },
    {
        pergunta: "Uma mistura homogênea contém dois líquidos miscíveis com pontos de ebulição próximos. Para melhorar a separação, utiliza-se:",
        alternativas: [
            "filtração com papel de poros muito pequenos, durante o processo analisado.",
            "decantação após repouso prolongado.",
            "catação durante a ebulição.",
            "separação magnética.",
            "destilação fracionada com coluna de fracionamento."
        ],
        correta: 4,
        explicacao: "A coluna promove sucessivas vaporizações e condensações, favorecendo a separação de líquidos miscíveis.",
        feedbackAcerto: "Correto. Você relacionou pontos de ebulição próximos à necessidade de fracionamento.",
        feedbackErro: "Filtração e decantação não separam líquidos miscíveis.",
        dicaBanca: "Líquidos miscíveis com ebulições próximas: destilação fracionada."
    },
    {
        pergunta: "Uma tinta preta é colocada em papel e, com a passagem do solvente, separa-se em diferentes cores. A separação ocorre devido:",
        alternativas: [
            "à diferença de magnetismo entre os pigmentos.",
            "à ebulição simultânea de todos os componentes, conforme os dados do enunciado.",
            "às diferentes afinidades dos componentes pelas fases móvel e estacionária.",
            "à sedimentação das substâncias mais densas.",
            "ao tamanho dos grãos retidos por uma peneira."
        ],
        correta: 2,
        explicacao: "Na cromatografia, os componentes migram com velocidades diferentes conforme suas interações com as fases.",
        feedbackAcerto: "Correto. Você identificou o princípio do método.",
        feedbackErro: "O papel não funciona como simples filtro de tamanho nesse caso.",
        dicaBanca: "Cromatografia separa por afinidades diferentes."
    },
    {
        pergunta: "Qual sequência apresenta apenas transformações físicas?",
        alternativas: [
            "queima de madeira, enferrujamento do ferro e digestão de alimentos, considerando as condições descritas.",
            "derretimento do gelo, dissolução de açúcar em água e corte de uma folha de alumínio.",
            "fermentação do leite, fusão do gelo e combustão do álcool.",
            "cozimento de um ovo, evaporação da água e oxidação do cobre.",
            "decomposição da água, trituração do sal e queima do papel."
        ],
        correta: 1,
        explicacao: "Transformações físicas alteram estado, forma ou dispersão sem formar necessariamente novas substâncias.",
        feedbackAcerto: "Correto. Nas três situações, a identidade química principal é preservada.",
        feedbackErro: "Combustão, oxidação, fermentação e cozimento envolvem formação de novas substâncias.",
        dicaBanca: "Procure mudanças reversíveis de estado, forma ou dispersão."
    },
    {
        pergunta: "Qual sequência apresenta apenas transformações químicas?",
        alternativas: [
            "fusão do gelo, evaporação do álcool e corte do papel.",
            "dissolução do sal, filtração da areia e condensação do vapor.",
            "trituração do vidro, sublimação da naftalina e ebulição da água.",
            "congelamento da água, expansão de um gás e separação por peneiração.",
            "combustão do gás, formação de ferrugem e fermentação do açúcar."
        ],
        correta: 4,
        explicacao: "Transformações químicas produzem novas substâncias com composição e propriedades diferentes.",
        feedbackAcerto: "Correto. Combustão, oxidação e fermentação alteram a composição.",
        feedbackErro: "Mudanças de estado e separações físicas não criam novas substâncias.",
        dicaBanca: "Química: formação de novas substâncias."
    },
    {
        pergunta: "Ao misturar duas soluções incolores, forma-se um sólido branco e a temperatura aumenta. A conclusão mais adequada é:",
        alternativas: [
            "a reação está comprovada apenas porque houve agitação.",
            "há evidências de reação química, mas a identificação dos produtos exige análise adicional.",
            "formou-se obrigatoriamente um único produto gasoso.",
            "qualquer mudança de temperatura é sempre transformação física, sem alterar a composição indicada.",
            "o sólido é necessariamente um dos reagentes que congelou."
        ],
        correta: 1,
        explicacao: "Formação de precipitado e variação térmica podem indicar reação, mas evidências precisam ser interpretadas no contexto.",
        feedbackAcerto: "Correto. Você reconheceu indícios sem extrapolar o que os dados permitem.",
        feedbackErro: "Uma evidência sugere transformação química, mas não identifica sozinha todos os produtos.",
        dicaBanca: "Cor, gás, precipitado e temperatura são indícios, não respostas completas."
    },
    {
        pergunta: "Uma palha de aço exposta ao ar úmido ganha massa ao enferrujar. O aumento ocorre porque:",
        alternativas: [
            "o ferro absorve água sem alterar sua composição química.",
            "a ferrugem surge pela fragmentação física dos fios metálicos.",
            "a massa é criada durante a reação, contrariando a conservação da matéria no sistema analisado.",
            "o ferro transforma-se em oxigênio ao contato com a umidade.",
            "o ferro reage com substâncias do ambiente, incorporando principalmente oxigênio aos produtos."
        ],
        correta: 4,
        explicacao: "Na corrosão, ferro reage com oxigênio e água, formando compostos oxidados; em sistema aberto, matéria do ar é incorporada.",
        feedbackAcerto: "Correto. Você explicou o aumento de massa pela entrada de reagente gasoso.",
        feedbackErro: "A conservação da massa vale para o sistema completo, incluindo o oxigênio do ambiente.",
        dicaBanca: "Sistema aberto pode ganhar massa ao incorporar matéria externa."
    },
    {
        pergunta: "Na combustão completa do metano, formam-se dióxido de carbono e água. O processo é químico porque:",
        alternativas: [
            "o metano apenas muda do estado gasoso para o líquido.",
            "ligações são rompidas e formadas, originando substâncias diferentes dos reagentes.",
            "a chama elimina a matéria presente no combustível.",
            "o oxigênio atua somente como fonte de calor, sem reagir, conforme os dados do enunciado.",
            "a massa dos átomos muda durante o aquecimento."
        ],
        correta: 1,
        explicacao: "Reações químicas reorganizam átomos por ruptura e formação de ligações.",
        feedbackAcerto: "Correto. Você descreveu transformação de composição, não desaparecimento da matéria.",
        feedbackErro: "O oxigênio participa como reagente e os átomos são conservados.",
        dicaBanca: "Combustão reorganiza átomos em novos produtos."
    },
    {
        pergunta: "Na equação CH₄ + 2O₂ → CO₂ + 2H₂O, as substâncias à esquerda e à direita da seta são, respectivamente:",
        alternativas: [
            "produtos e catalisadores.",
            "solventes e solutos.",
            "íons e elementos.",
            "reagentes e produtos.",
            "coeficientes e índices."
        ],
        correta: 3,
        explicacao: "Reagentes são consumidos ou transformados; produtos são formados.",
        feedbackAcerto: "Correto. Você interpretou corretamente a organização de uma equação química.",
        feedbackErro: "Coeficientes e índices são números, não categorias de substâncias.",
        dicaBanca: "Esquerda reage; direita resulta."
    },
    {
        pergunta: "Para balancear uma equação química corretamente, deve-se:",
        alternativas: [
            "ajustar os coeficientes estequiométricos sem alterar os índices das fórmulas.",
            "alterar os índices para igualar o número total de moléculas, de acordo com o modelo químico apresentado.",
            "mudar a fórmula dos produtos até obter massas iguais.",
            "remover átomos que aparecem em excesso.",
            "igualar apenas o número de substâncias em cada lado."
        ],
        correta: 0,
        explicacao: "Coeficientes modificam quantidades de partículas; índices fazem parte da identidade das substâncias.",
        feedbackAcerto: "Correto. Você preservou as fórmulas durante o balanceamento.",
        feedbackErro: "Alterar H₂O para H₂O₂, por exemplo, cria outra substância.",
        dicaBanca: "Balanceie com números na frente, não dentro da fórmula."
    },
    {
        pergunta: "Em recipiente fechado, 10 g de hidrogênio reagem com 80 g de oxigênio, sem sobra de reagentes. A massa total dos produtos é:",
        alternativas: [
            "70 g.",
            "90 g.",
            "80 g.",
            "100 g.",
            "800 g."
        ],
        correta: 1,
        explicacao: "Em sistema fechado, a massa total se conserva: 10 + 80 = 90 g.",
        feedbackAcerto: "Correto. Você aplicou a conservação da massa ao sistema completo.",
        feedbackErro: "Reações reorganizam átomos, mas não criam nem destroem massa mensurável nas condições usuais.",
        dicaBanca: "Massa dos reagentes = massa dos produtos."
    },
    {
        pergunta: "No início do século XIX, um modelo representava o átomo como uma esfera maciça, indivisível e característica de cada elemento. Trata-se do modelo de:",
        alternativas: [
            "Thomson.",
            "Rutherford.",
            "Bohr.",
            "Schrödinger.",
            "Dalton."
        ],
        correta: 4,
        explicacao: "Dalton propôs átomos como esferas maciças e indivisíveis no contexto do conhecimento da época.",
        feedbackAcerto: "Correto. Você relacionou a descrição histórica ao modelo correspondente.",
        feedbackErro: "Modelos posteriores introduziram partículas subatômicas, núcleo e níveis de energia.",
        dicaBanca: "Dalton = esfera maciça."
    },
    {
        pergunta: "A descoberta do elétron levou à proposta de um átomo com carga positiva distribuída e elétrons incrustados. Esse modelo foi proposto por:",
        alternativas: [
            "Dalton.",
            "Rutherford.",
            "Thomson.",
            "Bohr.",
            "Chadwick."
        ],
        correta: 2,
        explicacao: "Thomson introduziu partículas negativas no átomo e propôs o modelo conhecido como pudim de passas.",
        feedbackAcerto: "Correto. Você identificou a inovação central do modelo.",
        feedbackErro: "Dalton não incluía estrutura interna; Rutherford introduziu o núcleo.",
        dicaBanca: "Thomson = esfera positiva com elétrons."
    },
    {
        pergunta: "No experimento da lâmina de ouro, a maioria das partículas atravessou a lâmina, mas poucas sofreram grandes desvios. Rutherford concluiu que:",
        alternativas: [
            "a carga positiva ocupa uniformemente todo o volume atômico, considerando as condições descritas.",
            "elétrons permanecem imóveis no interior do núcleo.",
            "o átomo é majoritariamente vazio e possui pequeno núcleo denso e positivo.",
            "o átomo é maciço e indivisível.",
            "o núcleo ocupa quase todo o volume do átomo."
        ],
        correta: 2,
        explicacao: "A passagem da maioria indicou espaço vazio; os grandes desvios revelaram concentração de massa e carga positiva.",
        feedbackAcerto: "Correto. Você conectou cada observação à conclusão correspondente.",
        feedbackErro: "Se o átomo fosse maciço ou uniformemente positivo, o padrão de desvios seria diferente.",
        dicaBanca: "Maioria atravessa = vazio; poucos desviam = núcleo concentrado."
    },
    {
        pergunta: "Para explicar espectros atômicos, Bohr propôs que os elétrons:",
        alternativas: [
            "podem ocupar qualquer energia sem restrição, de acordo com o modelo químico apresentado.",
            "ocupam níveis de energia definidos e mudam de nível ao absorver ou emitir energia.",
            "permanecem no núcleo junto aos prótons.",
            "não participam da emissão de luz.",
            "possuem carga positiva variável."
        ],
        correta: 1,
        explicacao: "No modelo de Bohr, níveis energéticos são quantizados e transições envolvem energia.",
        feedbackAcerto: "Correto. Você associou o modelo à quantização dos níveis.",
        feedbackErro: "A emissão de luz está relacionada à queda para níveis de menor energia.",
        dicaBanca: "Bohr = níveis de energia."
    },
    {
        pergunta: "No modelo quântico atual, a posição de um elétron não é descrita como uma órbita planetária exata. Em vez disso, utiliza-se:",
        alternativas: [
            "uma trajetória circular fixa determinada apenas pela massa.",
            "uma esfera maciça sem estrutura interna.",
            "um núcleo negativo cercado por prótons.",
            "uma linha reta percorrida com velocidade constante.",
            "uma região de probabilidade chamada orbital."
        ],
        correta: 4,
        explicacao: "Orbitais representam regiões de maior probabilidade de encontrar o elétron.",
        feedbackAcerto: "Correto. Você distinguiu orbital de órbita clássica.",
        feedbackErro: "O modelo atual trabalha com probabilidades e estados quânticos.",
        dicaBanca: "Orbital não é caminho fixo."
    },
    {
        pergunta: "A associação correta entre partículas e cargas é:",
        alternativas: [
            "próton negativo, elétron positivo e nêutron neutro, durante o processo analisado.",
            "próton positivo, elétron negativo e nêutron sem carga elétrica líquida.",
            "próton neutro, elétron negativo e nêutron positivo.",
            "próton positivo, elétron neutro e nêutron negativo.",
            "as três partículas possuem carga positiva."
        ],
        correta: 1,
        explicacao: "Prótons têm carga +1, elétrons −1 e nêutrons carga líquida zero.",
        feedbackAcerto: "Correto. Você identificou as cargas fundamentais do modelo escolar.",
        feedbackErro: "Neutralidade do átomo resulta do equilíbrio entre prótons e elétrons, não de partículas sem carga.",
        dicaBanca: "p⁺, e⁻, n⁰."
    },
    {
        pergunta: "Um átomo neutro possui número atômico 17 e número de massa 35. Ele apresenta:",
        alternativas: [
            "17 prótons, 17 elétrons e 18 nêutrons.",
            "17 prótons, 18 elétrons e 35 nêutrons.",
            "35 prótons, 17 elétrons e 18 nêutrons.",
            "18 prótons, 17 elétrons e 17 nêutrons.",
            "17 prótons, 35 elétrons e 52 nêutrons."
        ],
        correta: 0,
        explicacao: "Z = prótons; átomo neutro tem elétrons = prótons; nêutrons = A − Z = 18.",
        feedbackAcerto: "Correto. Você usou corretamente número atômico, massa e neutralidade.",
        feedbackErro: "Número de massa é soma de prótons e nêutrons, não quantidade de elétrons.",
        dicaBanca: "n = A − Z."
    },
    {
        pergunta: "Um átomo neutro perde dois elétrons. A espécie formada é:",
        alternativas: [
            "um ânion com carga 2−.",
            "um átomo neutro com dois prótons a menos.",
            "um cátion com carga 2+.",
            "um isótopo com número de massa reduzido.",
            "uma molécula sem carga."
        ],
        correta: 2,
        explicacao: "Perder elétrons deixa excesso de cargas positivas, formando cátion.",
        feedbackAcerto: "Correto. Você relacionou perda de elétrons a carga positiva.",
        feedbackErro: "A ionização não altera o número de prótons nem o número de massa.",
        dicaBanca: "Perde elétron → fica positivo."
    },
    {
        pergunta: "Um átomo neutro ganha um elétron. A espécie formada é:",
        alternativas: [
            "um cátion com carga 1+.",
            "um isótopo com um nêutron adicional.",
            "um átomo com número atômico maior.",
            "um ânion com carga 1−.",
            "uma substância simples sem carga."
        ],
        correta: 3,
        explicacao: "Ganhar elétron produz excesso de carga negativa.",
        feedbackAcerto: "Correto. Você relacionou ganho de elétron à formação de ânion.",
        feedbackErro: "Número atômico depende de prótons e não muda na formação do íon.",
        dicaBanca: "Ganha elétron → fica negativo."
    },
    {
        pergunta: "Dois átomos pertencem ao mesmo elemento químico quando possuem o mesmo número de:",
        alternativas: [
            "nêutrons.",
            "prótons.",
            "elétrons em qualquer situação.",
            "níveis de energia ocupados.",
            "partículas totais no núcleo."
        ],
        correta: 1,
        explicacao: "O número atômico, igual ao número de prótons, define a identidade do elemento.",
        feedbackAcerto: "Correto. Você utilizou o critério fundamental de identidade química.",
        feedbackErro: "Isótopos podem possuir diferentes números de nêutrons e continuar sendo o mesmo elemento.",
        dicaBanca: "Elemento químico é definido por Z."
    },
    {
        pergunta: "Elementos de uma mesma família da Tabela Periódica costumam apresentar comportamento semelhante porque:",
        alternativas: [
            "têm sempre o mesmo número de massa.",
            "ocupam o mesmo período e possuem igual número de camadas, durante o processo analisado.",
            "apresentam obrigatoriamente o mesmo estado físico.",
            "possuem configurações eletrônicas de valência relacionadas.",
            "possuem exatamente o mesmo número total de elétrons."
        ],
        correta: 3,
        explicacao: "A semelhança química entre elementos de um grupo está associada aos elétrons da camada de valência.",
        feedbackAcerto: "Correto. Você relacionou posição periódica e reatividade.",
        feedbackErro: "Elementos de uma família têm números atômicos diferentes.",
        dicaBanca: "Família lembra elétrons de valência semelhantes."
    },
    {
        pergunta: "Na formação de cloreto de sódio, o sódio perde um elétron e o cloro o recebe. A ligação no sólido resulta principalmente:",
        alternativas: [
            "do compartilhamento igual de elétrons entre átomos neutros.",
            "da atração eletrostática entre íons de cargas opostas.",
            "da formação de um mar de elétrons livres típico dos metais.",
            "da atração entre nêutrons dos dois elementos.",
            "da fusão dos núcleos atômicos."
        ],
        correta: 1,
        explicacao: "Ligação iônica envolve formação de cátions e ânions e atração eletrostática na rede cristalina.",
        feedbackAcerto: "Correto. Você descreveu tanto a transferência quanto a força que mantém o sólido.",
        feedbackErro: "A ligação não é um par isolado de átomos, mas uma rede de íons.",
        dicaBanca: "Iônica = íons opostos atraídos."
    },
    {
        pergunta: "Dois átomos não metálicos formam uma molécula ao compartilhar pares de elétrons. A ligação é:",
        alternativas: [
            "iônica, porque houve transferência completa de elétrons.",
            "metálica, porque surgiu um mar de elétrons livres.",
            "nuclear, porque os núcleos foram unidos.",
            "eletrolítica, porque a molécula precisa estar dissolvida.",
            "covalente."
        ],
        correta: 4,
        explicacao: "Ligações covalentes resultam do compartilhamento de pares eletrônicos, principalmente entre não metais.",
        feedbackAcerto: "Correto. Você utilizou o mecanismo de compartilhamento como critério.",
        feedbackErro: "Transferência de elétrons caracteriza formação de íons e ligação iônica.",
        dicaBanca: "Covalente = compartilhamento."
    },
    {
        pergunta: "Metais conduzem corrente no estado sólido e podem ser deformados sem se romper facilmente. Essas propriedades são explicadas por:",
        alternativas: [
            "moléculas isoladas unidas apenas por forças fracas.",
            "ânions metálicos presos a elétrons sem mobilidade.",
            "cátions metálicos organizados e elétrons deslocalizados móveis.",
            "pares de elétrons localizados entre átomos específicos, de acordo com o modelo químico apresentado.",
            "ausência completa de partículas carregadas no material."
        ],
        correta: 2,
        explicacao: "O modelo de ligação metálica envolve elétrons deslocalizados, que favorecem condutividade, maleabilidade e ductilidade.",
        feedbackAcerto: "Correto. Você conectou estrutura microscópica e propriedades macroscópicas.",
        feedbackErro: "A condutividade exige portadores de carga móveis.",
        dicaBanca: "Metal: elétrons deslocalizados."
    },
    {
        pergunta: "Uma solução aquosa apresenta pH 3 e aumenta a concentração de íons H₃O⁺. Em abordagem escolar, ela é classificada como:",
        alternativas: [
            "básica, porque possui pH menor que 7.",
            "neutra, porque contém água.",
            "salina, porque qualquer solução possui íons.",
            "ácida.",
            "metálica, porque conduz corrente."
        ],
        correta: 3,
        explicacao: "Soluções ácidas apresentam maior concentração de H₃O⁺ e, na escala usual, pH inferior a 7.",
        feedbackAcerto: "Correto. Você relacionou pH e espécie característica.",
        feedbackErro: "Conduzir corrente não basta para classificar uma solução como ácida.",
        dicaBanca: "pH abaixo de 7 indica acidez na escala usual."
    },
    {
        pergunta: "Uma solução aquosa de hidróxido de sódio apresenta pH 12. Ela é básica porque:",
        alternativas: [
            "favorece elevada concentração de íons OH⁻ em água.",
            "possui mais H₃O⁺ que uma solução ácida.",
            "não contém partículas carregadas.",
            "é formada obrigatoriamente por moléculas neutras, durante o processo analisado.",
            "todo composto com sódio é uma base forte."
        ],
        correta: 0,
        explicacao: "Bases de Arrhenius liberam ou favorecem OH⁻ em solução aquosa.",
        feedbackAcerto: "Correto. Você relacionou a classificação ao comportamento em água.",
        feedbackErro: "A presença de sódio, isoladamente, não define caráter básico.",
        dicaBanca: "Base em água: presença significativa de OH⁻."
    },
    {
        pergunta: "A 25 °C, uma solução apresenta pH 7. Na escala usual, ela é considerada:",
        alternativas: [
            "fortemente ácida.",
            "levemente ácida em qualquer condição.",
            "fortemente básica.",
            "neutra.",
            "um sal puro sem água."
        ],
        correta: 3,
        explicacao: "Em condições usuais, pH 7 corresponde à neutralidade, com concentrações iguais de H₃O⁺ e OH⁻.",
        feedbackAcerto: "Correto. Você aplicou corretamente a escala de pH.",
        feedbackErro: "A classificação de neutralidade refere-se às concentrações relativas de H₃O⁺ e OH⁻.",
        dicaBanca: "pH 7 é a referência escolar de neutralidade a 25 °C."
    },
    {
        pergunta: "Ácido clorídrico reage completamente com hidróxido de sódio em proporções adequadas. Os produtos principais são:",
        alternativas: [
            "hidrogênio e oxigênio gasosos.",
            "sódio metálico e cloro gasoso.",
            "apenas água, pois o sal desaparece.",
            "cloreto de sódio e água.",
            "ácido sulfúrico e hidróxido de cálcio."
        ],
        correta: 3,
        explicacao: "Em neutralização típica, H⁺ reage com OH⁻ formando água, e os íons restantes formam um sal.",
        feedbackAcerto: "Correto. Você identificou os produtos da reação ácido-base.",
        feedbackErro: "Neutralização não decompõe os elementos nem produz metais livres.",
        dicaBanca: "Ácido + base → sal + água."
    },
    {
        pergunta: "Qual composto é classificado como óxido em abordagem escolar?",
        alternativas: [
            "CO₂, por ser binário e possuir oxigênio ligado a outro elemento.",
            "NaCl, por conter sódio e cloro.",
            "H₂SO₄, por possuir oxigênio em sua fórmula, de acordo com o modelo químico apresentado.",
            "NaOH, por liberar OH⁻ em água.",
            "NH₃, por ser uma substância molecular."
        ],
        correta: 0,
        explicacao: "Óxidos são, em regra geral, compostos binários em que o oxigênio está ligado a outro elemento.",
        feedbackAcerto: "Correto. Você aplicou a definição sem classificar toda substância oxigenada como óxido.",
        feedbackErro: "Ácidos, bases e sais podem conter oxigênio sem serem óxidos.",
        dicaBanca: "Óxido: dois elementos, um deles oxigênio."
    },
    {
        pergunta: "O nitrato de potássio, KNO₃, pode ser obtido em reação de neutralização entre ácido nítrico e hidróxido de potássio. Ele é classificado como:",
        alternativas: [
            "ácido, porque contém oxigênio.",
            "base, porque contém potássio.",
            "sal.",
            "óxido, porque possui três átomos de oxigênio.",
            "substância simples, porque apresenta um cátion."
        ],
        correta: 2,
        explicacao: "Sais são compostos iônicos frequentemente obtidos em reações entre ácidos e bases.",
        feedbackAcerto: "Correto. Você classificou pela composição iônica e origem possível.",
        feedbackErro: "A presença de oxigênio ou metal isoladamente não define a função inorgânica.",
        dicaBanca: "Neutralização frequentemente produz sal."
    },
    {
        pergunta: "Na reação 2H₂ + O₂ → 2H₂O, duas substâncias formam um único tipo de produto. A reação é classificada como:",
        alternativas: [
            "decomposição.",
            "simples troca.",
            "dupla troca.",
            "combustão sem síntese.",
            "síntese ou adição."
        ],
        correta: 4,
        explicacao: "Reações de síntese formam produto mais complexo a partir de reagentes mais simples.",
        feedbackAcerto: "Correto. Você reconheceu o padrão geral A + B → AB.",
        feedbackErro: "Embora também possa ser combustão do hidrogênio, a classificação estrutural solicitada é síntese.",
        dicaBanca: "Síntese reúne reagentes em produto."
    },
    {
        pergunta: "Na reação 2H₂O₂ → 2H₂O + O₂, uma substância origina dois produtos. A classificação é:",
        alternativas: [
            "decomposição.",
            "síntese.",
            "simples troca.",
            "dupla troca.",
            "neutralização."
        ],
        correta: 0,
        explicacao: "Reações de decomposição seguem o padrão AB → A + B ou produtos mais simples.",
        feedbackAcerto: "Correto. Você identificou a ruptura de um reagente em mais de um produto.",
        feedbackErro: "Síntese apresenta o sentido oposto: vários reagentes formando produto.",
        dicaBanca: "Decomposição: um reagente, vários produtos."
    },
    {
        pergunta: "Na reação Zn + 2HCl → ZnCl₂ + H₂, o zinco desloca o hidrogênio do ácido. A reação é:",
        alternativas: [
            "síntese.",
            "decomposição.",
            "dupla troca.",
            "simples troca.",
            "neutralização sem deslocamento."
        ],
        correta: 3,
        explicacao: "Na simples troca, uma substância simples desloca um elemento de uma substância composta.",
        feedbackAcerto: "Correto. Você reconheceu o padrão A + BC → AC + B.",
        feedbackErro: "Na dupla troca, duas substâncias compostas trocam parceiros.",
        dicaBanca: "Simples troca envolve elemento livre deslocando outro."
    },
    {
        pergunta: "Ao misturar AgNO₃ e NaCl, forma-se AgCl sólido e NaNO₃ em solução. A reação é classificada como:",
        alternativas: [
            "síntese de um único produto.",
            "dupla troca com formação de precipitado.",
            "decomposição do nitrato de prata.",
            "simples troca envolvendo prata metálica.",
            "combustão do cloreto de sódio."
        ],
        correta: 1,
        explicacao: "Na dupla troca, íons de dois compostos trocam combinações; a formação de AgCl insolúvel impulsiona a reação.",
        feedbackAcerto: "Correto. Você identificou a troca de parceiros e o precipitado.",
        feedbackErro: "Não há elemento livre deslocando outro, portanto não é simples troca.",
        dicaBanca: "Dupla troca: AB + CD → AD + CB."
    },
    {
        pergunta: "Na equação 2H₂ + O₂ → 2H₂O, o coeficiente 2 diante de H₂ indica:",
        alternativas: [
            "dois átomos de hidrogênio dentro de cada molécula, apenas, sem alterar a composição indicada.",
            "que o hidrogênio possui número atômico 2.",
            "que a carga da molécula é 2+.",
            "duas unidades de H₂ participando da proporção estequiométrica.",
            "que o índice da fórmula foi alterado."
        ],
        correta: 3,
        explicacao: "Coeficientes indicam quantidades relativas de moléculas, fórmulas unitárias ou mols.",
        feedbackAcerto: "Correto. Você distinguiu coeficiente estequiométrico de índice químico.",
        feedbackErro: "O índice 2 já pertence à fórmula H₂; o número na frente multiplica a unidade inteira.",
        dicaBanca: "Coeficiente multiplica toda a fórmula."
    },
    {
        pergunta: "Na fórmula CO₂, o índice 2 informa que:",
        alternativas: [
            "cada unidade de CO₂ possui dois átomos de oxigênio para um de carbono.",
            "há duas moléculas de dióxido de carbono.",
            "o oxigênio possui carga elétrica 2+.",
            "o carbono apresenta número atômico 2.",
            "a fórmula deve ser multiplicada por dois na reação, durante o processo analisado."
        ],
        correta: 0,
        explicacao: "Índices indicam a proporção de átomos dentro da fórmula de uma substância.",
        feedbackAcerto: "Correto. Você separou composição da substância e quantidade estequiométrica.",
        feedbackErro: "Duas moléculas seriam representadas por coeficiente 2CO₂.",
        dicaBanca: "Índice fica dentro da fórmula; coeficiente fica na frente."
    },
    {
        pergunta: "Em um recipiente fechado, 40 g de reagentes transformam-se completamente. Ao final, a massa total dos produtos é:",
        alternativas: [
            "20 g.",
            "39 g, porque parte da massa vira energia.",
            "80 g.",
            "indeterminada, mesmo sem entrada ou saída de matéria.",
            "40 g."
        ],
        correta: 4,
        explicacao: "Em sistema fechado e nas condições químicas usuais, a massa total se conserva.",
        feedbackAcerto: "Correto. Você considerou o sistema completo.",
        feedbackErro: "Gases formados continuam dentro do recipiente e devem ser incluídos na medida.",
        dicaBanca: "Fechado: massa antes = massa depois."
    },
    {
        pergunta: "Uma ponte metálica próxima ao mar recebe pintura e proteção catódica. Essas medidas são importantes porque:",
        alternativas: [
            "aumentam a velocidade da corrosão para estabilizar a estrutura, considerando as condições descritas.",
            "reduzem reações de oxidação que enfraquecem o metal ao longo do tempo.",
            "transformam o metal em substância não material.",
            "impedem qualquer transferência de calor na ponte.",
            "eliminam a força gravitacional sobre a estrutura."
        ],
        correta: 1,
        explicacao: "Corrosão envolve processos de oxirredução e pode comprometer resistência, segurança e durabilidade.",
        feedbackAcerto: "Correto. Você relacionou prevenção química e integridade estrutural.",
        feedbackErro: "A proteção busca limitar contato com agentes oxidantes ou controlar processos eletroquímicos.",
        dicaBanca: "Corrosão é transformação química com impacto tecnológico."
    },
    {
        pergunta: "Em uma estação de tratamento, coagulação e floculação agregam partículas; decantação e filtração as removem; desinfecção reduz microrganismos. A interpretação correta é:",
        alternativas: [
            "todos os processos são apenas mudanças de estado físico.",
            "filtração transforma contaminantes em substâncias inofensivas.",
            "o tratamento combina processos físicos e químicos com finalidades diferentes.",
            "desinfecção substitui todas as etapas de remoção de partículas, de acordo com o modelo químico apresentado.",
            "decantação remove obrigatoriamente sais dissolvidos."
        ],
        correta: 2,
        explicacao: "Tratamento de água integra separação física, uso de reagentes e controle microbiológico.",
        feedbackAcerto: "Correto. Você reconheceu que diferentes problemas exigem etapas distintas.",
        feedbackErro: "Filtração retém partículas, mas não remove necessariamente solutos ou todos os microrganismos.",
        dicaBanca: "Cada etapa tem uma função específica."
    },
    {
        pergunta: "Em uma central de reciclagem, plásticos são separados por tipo antes do processamento. Essa separação é necessária porque:",
        alternativas: [
            "todos os plásticos possuem exatamente a mesma estrutura química, sem alterar a composição indicada.",
            "materiais com composições e propriedades diferentes podem exigir processos incompatíveis.",
            "a reciclagem elimina qualquer necessidade de classificação.",
            "misturar polímeros sempre melhora as propriedades do produto.",
            "somente a cor do material influencia o reaproveitamento."
        ],
        correta: 1,
        explicacao: "Conhecer composição, temperatura de processamento e compatibilidade é essencial para reciclar materiais.",
        feedbackAcerto: "Correto. Você relacionou propriedades químicas e viabilidade tecnológica.",
        feedbackErro: "O termo plástico reúne polímeros diferentes, com comportamentos distintos.",
        dicaBanca: "Reciclagem eficiente depende de identificação e separação."
    },
    {
        pergunta: "Em laboratório escolar, um frasco sem rótulo é encontrado sobre a bancada. A conduta correta é:",
        alternativas: [
            "provar pequena quantidade para tentar identificá-la, durante o processo analisado.",
            "aproximar o rosto e aspirar diretamente os vapores.",
            "misturar com água para verificar se ocorre reação.",
            "não manipular nem cheirar a substância e comunicar o responsável pelo laboratório.",
            "descartar imediatamente na pia sem orientação."
        ],
        correta: 3,
        explicacao: "Substâncias desconhecidas devem ser tratadas como potencialmente perigosas e identificadas por procedimentos seguros.",
        feedbackAcerto: "Correto. Você priorizou prevenção e protocolo.",
        feedbackErro: "Cheirar, provar, misturar ou descartar sem identificação pode causar acidentes e contaminação.",
        dicaBanca: "Sem rótulo: não toque e informe o responsável."
    },
    {
        pergunta: "Medicamentos, alimentos, combustíveis, tratamento de água, materiais e processos ambientais envolvem conhecimentos químicos. A conclusão adequada é:",
        alternativas: [
            "a Química estuda matéria, propriedades e transformações em contextos naturais e tecnológicos.",
            "a Química trata apenas de substâncias artificiais produzidas em laboratórios, conforme os dados do enunciado.",
            "fenômenos químicos acontecem somente quando há explosão ou chama.",
            "processos biológicos não envolvem matéria nem transformações químicas.",
            "a Química substitui completamente Física e Biologia."
        ],
        correta: 0,
        explicacao: "A Química está presente em sistemas naturais, organismos, tecnologias, ambiente e atividades cotidianas.",
        feedbackAcerto: "Correto. Você reconheceu a amplitude da ciência química.",
        feedbackErro: "A origem natural ou artificial não define se um fenômeno pertence à Química.",
        dicaBanca: "Química não é só laboratório: é matéria e transformação."
    }
];
