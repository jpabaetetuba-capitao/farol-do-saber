// Questões — Clima e Dinâmica Climática
// Farol do Saber
// 50 questões autorais, contextualizadas e auditadas.

const climaDinamicaClimatica = [
    {
        "texto": "Uma previsão anuncia pancadas de chuva para a tarde, enquanto um estudo descreve a média de temperatura e precipitação de uma cidade ao longo de décadas.",
        "pergunta": "A distinção correta entre os dois tipos de informação é:",
        "alternativas": [
            "a previsão define o clima regional; o estudo registra apenas uma condição diária.",
            "os dois textos descrevem clima, pois ambos mencionam chuva e temperatura.",
            "a previsão trata do tempo atmosférico; o estudo de longo prazo caracteriza o clima.",
            "os dois textos descrevem tempo, pois usam dados observados da atmosfera.",
            "a previsão mede apenas umidade; o estudo determina somente pressão atmosférica."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Tempo atmosférico corresponde às condições de curto prazo; clima resulta da análise de padrões e médias em períodos longos.",
        "feedbackErro": "Revise o conceito central. Tempo atmosférico corresponde às condições de curto prazo; clima resulta da análise de padrões e médias em períodos longos.",
        "dicaBanca": "Observe a escala temporal: horas e dias indicam tempo; séries longas indicam clima."
    },
    {
        "texto": "Uma estação meteorológica registra temperatura, umidade, pressão, vento e precipitação durante o dia.",
        "pergunta": "Essas variáveis são classificadas como:",
        "alternativas": [
            "fatores geográficos fixos que determinam sozinhos o clima.",
            "tipos climáticos definidos apenas pela latitude do lugar.",
            "formas de relevo produzidas pela circulação atmosférica.",
            "zonas térmicas estabelecidas exclusivamente pela altitude.",
            "elementos climáticos observados e medidos na atmosfera."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Temperatura, umidade, pressão, ventos e precipitação são elementos do clima e do tempo que podem ser medidos.",
        "feedbackErro": "Revise o conceito central. Temperatura, umidade, pressão, ventos e precipitação são elementos do clima e do tempo que podem ser medidos.",
        "dicaBanca": "Elemento é aquilo que se mede; fator é aquilo que influencia."
    },
    {
        "texto": "Duas cidades estão na mesma latitude, mas uma está a 1.500 metros de altitude e registra médias térmicas menores.",
        "pergunta": "O fator climático que melhor explica a diferença é:",
        "alternativas": [
            "a longitude, pois define diretamente a quantidade anual de chuva.",
            "a altitude, pois a temperatura tende a diminuir com a elevação do terreno.",
            "a vegetação, pois impede qualquer variação de temperatura nas cidades.",
            "a pressão, pois é um elemento sem relação com a elevação do relevo.",
            "a continentalidade, pois cidades altas ficam sempre distantes do oceano."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A altitude influencia a temperatura porque o ar se torna menos denso e, em média, mais frio em níveis elevados.",
        "feedbackErro": "Revise o conceito central. A altitude influencia a temperatura porque o ar se torna menos denso e, em média, mais frio em níveis elevados.",
        "dicaBanca": "Mesma latitude e temperaturas diferentes: verifique altitude, maritimidade e relevo."
    },
    {
        "texto": "Uma cidade litorânea apresenta menor amplitude térmica anual que outra localizada no interior do continente, em latitude semelhante.",
        "pergunta": "A interpretação correta é:",
        "alternativas": [
            "a proximidade do mar aumenta sempre a amplitude térmica durante o ano.",
            "a distância do oceano impede mudanças sazonais de temperatura no interior.",
            "a latitude deixa de influenciar o clima quando existe massa continental.",
            "a maritimidade modera temperaturas, enquanto a continentalidade amplia a amplitude.",
            "a altitude das cidades litorâneas é sempre maior que a das cidades interiores."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A água aquece e esfria mais lentamente que o continente, moderando temperaturas próximas ao litoral.",
        "feedbackErro": "Revise o conceito central. A água aquece e esfria mais lentamente que o continente, moderando temperaturas próximas ao litoral.",
        "dicaBanca": "Maritimidade modera; continentalidade tende a ampliar amplitudes."
    },
    {
        "texto": "Ao subir uma encosta voltada para ventos úmidos, o ar se eleva, resfria e condensa. No lado oposto, o ar desce mais seco.",
        "pergunta": "O fenômeno descrito corresponde:",
        "alternativas": [
            "à chuva orográfica e à formação de sombra de chuva no lado de sotavento.",
            "à chuva frontal, produzida apenas pelo encontro de massas de mesma temperatura.",
            "à chuva convectiva, causada exclusivamente por correntes oceânicas profundas.",
            "ao efeito estufa, responsável pela condensação em todas as montanhas.",
            "à inversão térmica, que aumenta a umidade do lado protegido do relevo."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O relevo força o ar úmido a subir, favorecendo chuva a barlavento e maior secura a sotavento.",
        "feedbackErro": "Revise o conceito central. O relevo força o ar úmido a subir, favorecendo chuva a barlavento e maior secura a sotavento.",
        "dicaBanca": "Montanha + ar úmido ascendendo = chuva orográfica."
    },
    {
        "texto": "Em uma tarde muito quente, o ar próximo à superfície sobe rapidamente, resfria em altitude e forma nuvens de grande desenvolvimento vertical.",
        "pergunta": "Esse processo favorece principalmente:",
        "alternativas": [
            "chuvas orográficas, sempre ligadas à passagem sobre montanhas.",
            "chuvas convectivas, geralmente intensas e de curta duração.",
            "chuvas frontais, que exigem apenas aquecimento local da superfície.",
            "nevascas polares, comuns em qualquer área tropical durante o verão.",
            "secas prolongadas, pois a convecção impede a formação de nuvens."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O forte aquecimento da superfície gera correntes ascendentes, condensação e pancadas convectivas.",
        "feedbackErro": "Revise o conceito central. O forte aquecimento da superfície gera correntes ascendentes, condensação e pancadas convectivas.",
        "dicaBanca": "Calor intenso + ar subindo rapidamente = convecção."
    },
    {
        "texto": "Uma massa de ar frio avança e empurra uma massa de ar quente para cima, provocando queda de temperatura e chuva.",
        "pergunta": "A situação caracteriza:",
        "alternativas": [
            "uma frente quente, na qual o ar frio avança sob outra massa fria.",
            "uma zona de calmaria, sem contraste térmico entre massas de ar.",
            "uma inversão térmica, produzida apenas por urbanização e poluição.",
            "uma frente fria, formada pelo avanço do ar frio sobre o ar quente.",
            "uma monção, definida pela passagem rápida de uma frente polar."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Na frente fria, o ar frio, mais denso, avança por baixo do ar quente e pode gerar chuva e redução de temperatura.",
        "feedbackErro": "Revise o conceito central. Na frente fria, o ar frio, mais denso, avança por baixo do ar quente e pode gerar chuva e redução de temperatura.",
        "dicaBanca": "Ar frio avançando e elevando o ar quente = frente fria."
    },
    {
        "texto": "Em mapas meteorológicos, isóbaras muito próximas aparecem em torno de uma área de baixa pressão.",
        "pergunta": "Essa configuração costuma indicar:",
        "alternativas": [
            "forte gradiente de pressão e possibilidade de ventos mais intensos.",
            "ausência de vento, porque a pressão atmosférica está uniformemente distribuída.",
            "temperaturas iguais em toda a região, independentemente da circulação do ar.",
            "chuva obrigatória em todos os pontos, sem relação com umidade disponível.",
            "redução automática da nebulosidade em qualquer sistema de baixa pressão."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Quanto maior a diferença de pressão em pequena distância, maior tende a ser a força que movimenta o ar.",
        "feedbackErro": "Revise o conceito central. Quanto maior a diferença de pressão em pequena distância, maior tende a ser a força que movimenta o ar.",
        "dicaBanca": "Isóbaras próximas indicam gradiente de pressão mais forte."
    },
    {
        "texto": "Próximo à Linha do Equador, o intenso aquecimento favorece a ascensão do ar e a convergência dos ventos alísios.",
        "pergunta": "A faixa atmosférica descrita é a:",
        "alternativas": [
            "Zona Polar, caracterizada por subsidência permanente e calor intenso.",
            "Zona de Convergência do Atlântico Sul, fixa sobre todo o planeta.",
            "Corrente de Jato Subtropical, localizada junto à superfície equatorial.",
            "Alta Subtropical, onde o ar ascende continuamente e produz chuvas diárias.",
            "Zona de Convergência Intertropical, associada a chuvas frequentes."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A ZCIT é uma faixa de baixa pressão próxima ao Equador, onde convergem ventos e o ar úmido ascende.",
        "feedbackErro": "Revise o conceito central. A ZCIT é uma faixa de baixa pressão próxima ao Equador, onde convergem ventos e o ar úmido ascende.",
        "dicaBanca": "Convergência dos alísios próxima ao Equador = ZCIT."
    },
    {
        "texto": "Entre as altas subtropicais e a baixa pressão equatorial, ventos sopram de forma relativamente persistente.",
        "pergunta": "Esses ventos são denominados:",
        "alternativas": [
            "monções, que mudam sazonalmente e atuam apenas sobre oceanos polares.",
            "ventos de oeste, que dominam exclusivamente as baixas latitudes.",
            "alísios, que convergem em direção à faixa equatorial.",
            "brisas de vale, causadas por diferenças diárias de relevo e insolação.",
            "correntes de jato, que circulam junto ao solo em velocidade constante."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Os ventos alísios partem das altas subtropicais e convergem para a baixa equatorial.",
        "feedbackErro": "Revise o conceito central. Os ventos alísios partem das altas subtropicais e convergem para a baixa equatorial.",
        "dicaBanca": "Altas subtropicais para o Equador = alísios."
    },
    {
        "texto": "No sul e sudeste da Ásia, a diferença sazonal de aquecimento entre continente e oceano altera a direção dos ventos e o regime de chuvas.",
        "pergunta": "Esse sistema climático é conhecido como:",
        "alternativas": [
            "alísios, com direção regular entre altas subtropicais e o Equador.",
            "brisa marítima, circulação diária entre oceano e continente.",
            "frente polar, faixa móvel ligada ao encontro de massas de ar.",
            "ciclone extratropical, sistema de baixa pressão de médias latitudes.",
            "monção, circulação sazonal gerada pelo contraste entre terra e mar."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. As monções são circulações sazonais que mudam conforme o contraste térmico e de pressão entre oceano e continente.",
        "feedbackErro": "Revise o conceito central. As monções são circulações sazonais que mudam conforme o contraste térmico e de pressão entre oceano e continente.",
        "dicaBanca": "Mudança sazonal de ventos e chuvas na Ásia = monções."
    },
    {
        "texto": "Um ciclone tropical se forma sobre águas oceânicas muito quentes e organiza ventos fortes ao redor de uma área de baixa pressão.",
        "pergunta": "Uma condição essencial para sua formação é:",
        "alternativas": [
            "oceano quente, alta umidade e convecção atmosférica organizada.",
            "continente frio, ar seco e forte subsidência junto à superfície.",
            "águas geladas, alta pressão e pouca disponibilidade de vapor.",
            "grande atrito terrestre e ausência de circulação sobre o oceano.",
            "formação sobre o Equador, onde o efeito de rotação é reduzido."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Ciclones tropicais dependem de calor oceânico, umidade e organização da convecção; enfraquecem sobre terra ou água fria.",
        "feedbackErro": "Revise o conceito central. Ciclones tropicais dependem de calor oceânico, umidade e organização da convecção; enfraquecem sobre terra ou água fria.",
        "dicaBanca": "Ciclone tropical ganha energia do oceano quente."
    },
    {
        "texto": "Em um continente, a faixa próxima ao Equador apresenta calor durante todo o ano e chuvas abundantes, com pequena amplitude térmica anual.",
        "pergunta": "O tipo climático predominante é:",
        "alternativas": [
            "mediterrâneo, com verão seco e inverno mais chuvoso.",
            "desértico, com baixa umidade e grande escassez de chuva.",
            "temperado continental, com estações térmicas muito contrastantes.",
            "equatorial, quente e úmido, com chuvas frequentes.",
            "polar, com temperaturas baixas e precipitação geralmente reduzida."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. O clima equatorial combina elevada temperatura, alta umidade e chuvas abundantes ao longo do ano.",
        "feedbackErro": "Revise o conceito central. O clima equatorial combina elevada temperatura, alta umidade e chuvas abundantes ao longo do ano.",
        "dicaBanca": "Calor constante + muita umidade + baixa amplitude = equatorial."
    },
    {
        "texto": "Uma região apresenta verão quente e seco, enquanto o inverno é mais ameno e chuvoso.",
        "pergunta": "Esse regime é típico do clima:",
        "alternativas": [
            "equatorial, com calor e chuvas abundantes durante todo o ano.",
            "mediterrâneo, com verão seco e inverno mais chuvoso.",
            "tropical de monções, com verão úmido e inverno mais seco.",
            "polar, com verão curto e baixas temperaturas anuais.",
            "desértico, com pouca chuva e forte déficit hídrico."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O clima mediterrâneo apresenta verão seco e inverno mais chuvoso, padrão clássico de certas áreas subtropicais.",
        "feedbackErro": "Revise o conceito central. O clima mediterrâneo apresenta verão seco e inverno mais chuvoso, padrão clássico de certas áreas subtropicais.",
        "dicaBanca": "Verão seco e inverno chuvoso = mediterrâneo."
    },
    {
        "texto": "Uma área interior apresenta baixa precipitação anual, grande amplitude térmica e vegetação muito adaptada à escassez de água.",
        "pergunta": "A classificação climática mais adequada é:",
        "alternativas": [
            "equatorial úmido, com chuva abundante e pequena amplitude térmica.",
            "temperado oceânico, com chuvas regulares e verões amenos.",
            "desértico ou árido, com precipitação escassa e déficit hídrico.",
            "tropical litorâneo, com forte umidade proveniente do oceano.",
            "subpolar úmido, com inverno longo e verão de curta duração."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Climas áridos apresentam precipitação muito baixa em relação à evaporação potencial e forte limitação hídrica.",
        "feedbackErro": "Revise o conceito central. Climas áridos apresentam precipitação muito baixa em relação à evaporação potencial e forte limitação hídrica.",
        "dicaBanca": "Chuva escassa e déficit hídrico persistente = árido."
    },
    {
        "texto": "Em uma região de médias latitudes próxima ao oceano, os invernos são menos rigorosos, os verões são amenos e as chuvas ocorrem em vários meses.",
        "pergunta": "O clima descrito é:",
        "alternativas": [
            "temperado continental, com maior amplitude térmica anual.",
            "mediterrâneo, com verão seco e inverno mais chuvoso.",
            "polar, com temperaturas muito baixas na maior parte do ano.",
            "temperado oceânico, com influência moderadora do mar.",
            "tropical sazonal, com verão chuvoso e inverno seco."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. O clima temperado oceânico apresenta menor amplitude térmica e umidade mais distribuída pela influência do oceano.",
        "feedbackErro": "Revise o conceito central. O clima temperado oceânico apresenta menor amplitude térmica e umidade mais distribuída pela influência do oceano.",
        "dicaBanca": "Médias latitudes + mar moderando temperaturas = temperado oceânico."
    },
    {
        "texto": "Em áreas de alta latitude, as temperaturas permanecem baixas por grande parte do ano e o verão é curto.",
        "pergunta": "Esse padrão corresponde principalmente ao clima:",
        "alternativas": [
            "equatorial, com calor elevado e chuvas convectivas frequentes.",
            "polar, caracterizado por frio intenso e baixa evaporação.",
            "subtropical úmido, com quatro estações e verão quente prolongado.",
            "mediterrâneo, com verão seco e inverno chuvoso.",
            "semiárido, com calor intenso e chuvas irregulares de verão."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O clima polar ocorre em altas latitudes, com baixa insolação média, verão curto e temperaturas muito reduzidas.",
        "feedbackErro": "Revise o conceito central. O clima polar ocorre em altas latitudes, com baixa insolação média, verão curto e temperaturas muito reduzidas.",
        "dicaBanca": "Alta latitude e frio persistente = polar."
    },
    {
        "texto": "O clima de uma montanha muda rapidamente com a altitude, mesmo em baixa latitude.",
        "pergunta": "A melhor interpretação é:",
        "alternativas": [
            "a latitude deixa de atuar e não interfere na radiação recebida.",
            "a pressão aumenta com a altitude e eleva as temperaturas médias.",
            "o relevo bloqueia toda circulação de ar entre diferentes encostas.",
            "a altitude produz o mesmo regime de chuva em todas as vertentes.",
            "a altitude cria pisos térmicos e modifica temperatura e umidade."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Montanhas apresentam variação altitudinal de temperatura e condições de umidade, formando diferentes faixas ambientais.",
        "feedbackErro": "Revise o conceito central. Montanhas apresentam variação altitudinal de temperatura e condições de umidade, formando diferentes faixas ambientais.",
        "dicaBanca": "Montanha: pense em altitude, pisos térmicos e efeito orográfico."
    },
    {
        "texto": "Na Amazônia, altas temperaturas, intensa evapotranspiração e grande disponibilidade de umidade favorecem chuvas frequentes.",
        "pergunta": "O clima dominante em grande parte da região é:",
        "alternativas": [
            "semiárido, com chuvas irregulares e déficit hídrico prolongado.",
            "subtropical, com estações térmicas marcadas e geadas frequentes.",
            "equatorial úmido, com calor constante e precipitação elevada.",
            "tropical de altitude, com temperaturas reduzidas pelo relevo.",
            "mediterrâneo, com verão seco e inverno mais chuvoso."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Grande parte da Amazônia apresenta clima equatorial, com calor, umidade e chuvas abundantes.",
        "feedbackErro": "Revise o conceito central. Grande parte da Amazônia apresenta clima equatorial, com calor, umidade e chuvas abundantes.",
        "dicaBanca": "Amazônia central: equatorial quente e úmido."
    },
    {
        "texto": "No Brasil Central, são comuns verão chuvoso e inverno seco, com temperaturas elevadas na maior parte do ano.",
        "pergunta": "O tipo climático descrito é:",
        "alternativas": [
            "tropical sazonal, com verão chuvoso e inverno seco.",
            "equatorial úmido, com chuvas regulares em todos os meses.",
            "subtropical, com maior contraste térmico entre as estações.",
            "semiárido, com baixa chuva e forte irregularidade anual.",
            "mediterrâneo, com verão seco e inverno chuvoso."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O clima tropical típico do Brasil Central apresenta duas estações pluviométricas marcadas: verão chuvoso e inverno seco.",
        "feedbackErro": "Revise o conceito central. O clima tropical típico do Brasil Central apresenta duas estações pluviométricas marcadas: verão chuvoso e inverno seco.",
        "dicaBanca": "Brasil Central: verão chuvoso e inverno seco."
    },
    {
        "texto": "No litoral oriental brasileiro, massas de ar úmidas do Atlântico e o relevo costeiro influenciam a distribuição das chuvas.",
        "pergunta": "Esse padrão está associado ao clima:",
        "alternativas": [
            "tropical atlântico, com umidade oceânica e chuvas litorâneas.",
            "tropical continental, com reduzida influência do oceano.",
            "semiárido, com chuvas escassas em áreas interiores.",
            "equatorial, com calor e umidade elevados o ano inteiro.",
            "subtropical, com maior variação térmica e frentes frias."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O clima tropical atlântico ocorre em trechos do litoral e sofre influência das massas úmidas oceânicas e do relevo.",
        "feedbackErro": "Revise o conceito central. O clima tropical atlântico ocorre em trechos do litoral e sofre influência das massas úmidas oceânicas e do relevo.",
        "dicaBanca": "Litoral oriental + umidade do Atlântico = tropical atlântico."
    },
    {
        "texto": "Em áreas elevadas do Sudeste, a altitude ameniza as temperaturas e o inverno pode ser mais frio e seco.",
        "pergunta": "A classificação adequada é:",
        "alternativas": [
            "equatorial de altitude, com chuva diária e calor uniforme.",
            "mediterrâneo tropical, com inverno chuvoso em todas as áreas.",
            "tropical de altitude, influenciado pela elevação do relevo.",
            "polar de montanha, com neve permanente nos planaltos.",
            "semiárido serrano, com aridez constante ao longo do ano."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. O tropical de altitude ocorre em áreas elevadas do Sudeste, com temperaturas menores que em áreas tropicais baixas.",
        "feedbackErro": "Revise o conceito central. O tropical de altitude ocorre em áreas elevadas do Sudeste, com temperaturas menores que em áreas tropicais baixas.",
        "dicaBanca": "Sudeste elevado + temperaturas amenizadas = tropical de altitude."
    },
    {
        "texto": "No interior do Nordeste, as chuvas são irregulares, concentradas em poucos meses e sujeitas a longos períodos de estiagem.",
        "pergunta": "O clima predominante é:",
        "alternativas": [
            "equatorial, com chuva abundante e pequena amplitude térmica.",
            "subtropical, com chuvas distribuídas e inverno mais frio.",
            "tropical atlântico, com forte umidade oceânica no litoral.",
            "mediterrâneo, com verão seco e inverno mais chuvoso.",
            "semiárido, com chuvas irregulares e déficit hídrico frequente."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. O semiárido brasileiro combina altas temperaturas, chuvas irregulares e déficit hídrico frequente.",
        "feedbackErro": "Revise o conceito central. O semiárido brasileiro combina altas temperaturas, chuvas irregulares e déficit hídrico frequente.",
        "dicaBanca": "Sertão + irregularidade de chuvas + estiagens = semiárido."
    },
    {
        "texto": "No Sul do Brasil, as massas de ar polar atuam com frequência, as estações térmicas são mais marcadas e as chuvas tendem a se distribuir ao longo do ano.",
        "pergunta": "O tipo climático predominante é:",
        "alternativas": [
            "equatorial, com calor constante e chuvas muito abundantes.",
            "subtropical, com maior amplitude térmica e atuação polar.",
            "semiárido, com longa estiagem e chuva bastante irregular.",
            "tropical típico, com verão chuvoso e inverno mais seco.",
            "mediterrâneo, com verão seco e inverno mais chuvoso."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O clima subtropical do Sul apresenta maior variação sazonal e influência regular de massas polares.",
        "feedbackErro": "Revise o conceito central. O clima subtropical do Sul apresenta maior variação sazonal e influência regular de massas polares.",
        "dicaBanca": "Sul do Brasil + estações marcadas + geadas = subtropical."
    },
    {
        "texto": "Uma massa de ar quente e muito úmida forma-se sobre a Amazônia ocidental e transporta umidade para outras regiões do Brasil.",
        "pergunta": "Essa massa é a:",
        "alternativas": [
            "Massa Tropical Continental, quente e geralmente seca.",
            "Massa Polar Atlântica, fria e úmida.",
            "Massa Tropical Atlântica, quente e úmida oceânica.",
            "Massa Equatorial Continental, quente e úmida.",
            "Massa Equatorial Atlântica, quente e úmida do Atlântico."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A Massa Equatorial Continental forma-se na Amazônia ocidental e é quente e úmida, influenciando chuvas e transporte de vapor.",
        "feedbackErro": "Revise o conceito central. A Massa Equatorial Continental forma-se na Amazônia ocidental e é quente e úmida, influenciando chuvas e transporte de vapor.",
        "dicaBanca": "Amazônia ocidental + quente e úmida = mEc."
    },
    {
        "texto": "Uma massa de ar quente e geralmente seca forma-se sobre a região do Chaco e pode favorecer tempo quente no interior do Brasil.",
        "pergunta": "A massa descrita é a:",
        "alternativas": [
            "Massa Equatorial Continental.",
            "Massa Tropical Continental.",
            "Massa Polar Atlântica.",
            "Massa Tropical Atlântica.",
            "Massa Equatorial Atlântica."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A Massa Tropical Continental origina-se na área do Chaco, sendo quente e geralmente seca.",
        "feedbackErro": "Revise o conceito central. A Massa Tropical Continental origina-se na área do Chaco, sendo quente e geralmente seca.",
        "dicaBanca": "Chaco + quente e seca = mTc."
    },
    {
        "texto": "Uma massa quente e úmida forma-se sobre o Atlântico Sul e atua em grande parte da faixa litorânea brasileira.",
        "pergunta": "A identificação correta é:",
        "alternativas": [
            "Massa Polar Atlântica, fria e úmida, formada no Atlântico Sul.",
            "Massa Tropical Continental, quente e seca, formada no Chaco.",
            "Massa Equatorial Continental, quente e úmida, de origem amazônica.",
            "Massa Equatorial Atlântica, quente e úmida, do Atlântico Norte.",
            "Massa Tropical Atlântica, quente e úmida, do Atlântico Sul."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A mTa é quente e úmida e se forma sobre o Atlântico Sul, influenciando o litoral brasileiro.",
        "feedbackErro": "Revise o conceito central. A mTa é quente e úmida e se forma sobre o Atlântico Sul, influenciando o litoral brasileiro.",
        "dicaBanca": "Atlântico Sul subtropical + quente e úmida = mTa."
    },
    {
        "texto": "Durante o inverno, uma massa fria avança pelo território brasileiro e pode provocar quedas acentuadas de temperatura até na Amazônia ocidental.",
        "pergunta": "O fenômeno amazônico associado é chamado de:",
        "alternativas": [
            "veranico, produzido pela atuação contínua da massa equatorial.",
            "monção, gerada pela inversão sazonal dos ventos amazônicos.",
            "friagem, causada pelo avanço da Massa Polar Atlântica.",
            "ressaca, resultante apenas de marés elevadas no litoral.",
            "seca verde, causada pelo resfriamento do Atlântico Norte."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A friagem é a queda de temperatura na Amazônia provocada pela penetração de ar polar.",
        "feedbackErro": "Revise o conceito central. A friagem é a queda de temperatura na Amazônia provocada pela penetração de ar polar.",
        "dicaBanca": "Ar polar chegando à Amazônia = friagem."
    },
    {
        "texto": "No verão, uma faixa persistente de nebulosidade pode se estender da Amazônia ao Sudeste e ao Atlântico, provocando vários dias de chuva.",
        "pergunta": "Esse sistema é a:",
        "alternativas": [
            "Zona de Convergência do Atlântico Sul.",
            "Zona de Convergência Intertropical.",
            "Alta Subtropical do Atlântico Sul.",
            "Corrente de Humboldt.",
            "Frente Polar Antártica."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A ZCAS é uma banda de nebulosidade e chuva que costuma ligar a Amazônia ao Sudeste e ao Atlântico no verão.",
        "feedbackErro": "Revise o conceito central. A ZCAS é uma banda de nebulosidade e chuva que costuma ligar a Amazônia ao Sudeste e ao Atlântico no verão.",
        "dicaBanca": "Faixa de chuva Amazônia–Sudeste no verão = ZCAS."
    },
    {
        "texto": "No norte do Nordeste, grande parte das chuvas depende do deslocamento sazonal de uma faixa de baixa pressão próxima ao Equador.",
        "pergunta": "O sistema atmosférico citado é:",
        "alternativas": [
            "a Massa Tropical Continental.",
            "a Zona de Convergência do Atlântico Sul.",
            "a Alta Polar Antártica.",
            "a Zona de Convergência Intertropical.",
            "a Corrente de Jato Polar."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A ZCIT influencia fortemente as chuvas do norte do Nordeste ao migrar sazonalmente sobre o Atlântico tropical.",
        "feedbackErro": "Revise o conceito central. A ZCIT influencia fortemente as chuvas do norte do Nordeste ao migrar sazonalmente sobre o Atlântico tropical.",
        "dicaBanca": "Norte do Nordeste + faixa equatorial de chuva = ZCIT."
    },
    {
        "texto": "O aquecimento anormal das águas superficiais do Pacífico Equatorial modifica a circulação atmosférica e pode alterar chuvas em diversas regiões.",
        "pergunta": "O fenômeno descrito é:",
        "alternativas": [
            "La Niña, fase fria do sistema oceano-atmosfera do Pacífico.",
            "monção, circulação sazonal entre áreas continentais e oceânicas.",
            "ZCAS, faixa de nebulosidade que atua no verão sul-americano.",
            "El Niño, fase quente do sistema oceano-atmosfera do Pacífico.",
            "friagem, queda de temperatura causada pela entrada de ar polar."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. El Niño é a fase quente do ENOS, associada ao aquecimento anormal do Pacífico Equatorial.",
        "feedbackErro": "Revise o conceito central. El Niño é a fase quente do ENOS, associada ao aquecimento anormal do Pacífico Equatorial.",
        "dicaBanca": "Pacífico Equatorial mais quente que a média = El Niño."
    },
    {
        "texto": "O resfriamento anormal das águas superficiais do Pacífico Equatorial altera ventos e padrões de precipitação.",
        "pergunta": "A fase descrita é:",
        "alternativas": [
            "La Niña, fase fria do ENOS.",
            "El Niño, fase fria do Atlântico Sul.",
            "ZCIT, fase oceânica da circulação polar.",
            "monção, fase fria permanente do Pacífico.",
            "friagem, resfriamento do oceano por relevo."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. La Niña é a fase fria do ENOS, com águas do Pacífico Equatorial mais frias que a média.",
        "feedbackErro": "Revise o conceito central. La Niña é a fase fria do ENOS, com águas do Pacífico Equatorial mais frias que a média.",
        "dicaBanca": "Pacífico Equatorial mais frio que a média = La Niña."
    },
    {
        "texto": "Uma reportagem afirma que todo episódio de El Niño produz exatamente os mesmos efeitos em todas as regiões brasileiras.",
        "pergunta": "A avaliação correta é:",
        "alternativas": [
            "a afirmação é correta, pois os efeitos se repetem igualmente em todas as regiões.",
            "a afirmação é inadequada, pois os impactos variam conforme intensidade e interação.",
            "a afirmação é correta, porque toda chuva brasileira depende apenas do Pacífico.",
            "a afirmação é inadequada somente quando o episódio ocorre durante o inverno.",
            "a afirmação é correta, pois outros sistemas atmosféricos deixam de influenciar."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O ENOS influencia o clima, mas seus impactos não são mecânicos nem idênticos; dependem de diversas interações atmosféricas e oceânicas.",
        "feedbackErro": "Revise o conceito central. O ENOS influencia o clima, mas seus impactos não são mecânicos nem idênticos; dependem de diversas interações atmosféricas e oceânicas.",
        "dicaBanca": "Fenômenos climáticos influenciam, mas não determinam sozinhos todos os resultados."
    },
    {
        "texto": "Um climograma apresenta temperaturas elevadas durante todo o ano e precipitação abundante em quase todos os meses.",
        "pergunta": "A leitura mais provável indica clima:",
        "alternativas": [
            "semiárido, com chuvas escassas e longas estiagens.",
            "mediterrâneo, com verão seco e inverno chuvoso.",
            "polar, com temperaturas muito baixas no inverno.",
            "temperado continental, com grande contraste sazonal.",
            "equatorial úmido, com pequena amplitude térmica anual."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Temperaturas altas e chuvas abundantes durante quase todo o ano são características do clima equatorial úmido.",
        "feedbackErro": "Revise o conceito central. Temperaturas altas e chuvas abundantes durante quase todo o ano são características do clima equatorial úmido.",
        "dicaBanca": "No climograma, observe conjuntamente barras de chuva e linha de temperatura."
    },
    {
        "texto": "Outro climograma mostra verão chuvoso, inverno seco e temperaturas altas na maior parte do ano.",
        "pergunta": "O padrão é compatível com clima:",
        "alternativas": [
            "equatorial úmido, sem estação seca bem definida.",
            "subtropical, com chuvas distribuídas e inverno frio.",
            "tropical sazonal, típico de amplas áreas do Brasil Central.",
            "mediterrâneo, com verão seco e inverno chuvoso.",
            "polar, com verão curto e temperaturas reduzidas."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. O clima tropical sazonal apresenta verão chuvoso e inverno seco, com temperaturas geralmente elevadas.",
        "feedbackErro": "Revise o conceito central. O clima tropical sazonal apresenta verão chuvoso e inverno seco, com temperaturas geralmente elevadas.",
        "dicaBanca": "Verão chuvoso e inverno seco = tropical sazonal."
    },
    {
        "texto": "Uma cidade tem média de 28 °C no mês mais quente e 16 °C no mês mais frio.",
        "pergunta": "A amplitude térmica anual aproximada é:",
        "alternativas": [
            "44 °C.",
            "28 °C.",
            "12 °C.",
            "16 °C.",
            "6 °C."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A amplitude térmica é a diferença entre a maior e a menor média: 28 − 16 = 12 °C.",
        "feedbackErro": "Revise o conceito central. A amplitude térmica é a diferença entre a maior e a menor média: 28 − 16 = 12 °C.",
        "dicaBanca": "Amplitude térmica = temperatura maior menos temperatura menor."
    },
    {
        "texto": "Bairros densamente construídos, com pouca vegetação e grande área asfaltada, registram temperaturas maiores que áreas rurais próximas.",
        "pergunta": "O fenômeno é denominado:",
        "alternativas": [
            "inversão térmica, com retenção de ar frio e poluentes junto ao solo.",
            "ilha de calor urbana, com temperaturas maiores que no entorno.",
            "chuva orográfica, causada pela subida do ar em áreas montanhosas.",
            "friagem, produzida pela entrada de massas polares no continente.",
            "monção local, gerada por mudança sazonal da direção dos ventos."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A ilha de calor resulta da urbanização, impermeabilização, pouca vegetação e liberação de calor por atividades humanas.",
        "feedbackErro": "Revise o conceito central. A ilha de calor resulta da urbanização, impermeabilização, pouca vegetação e liberação de calor por atividades humanas.",
        "dicaBanca": "Cidade mais quente que o entorno = ilha de calor."
    },
    {
        "texto": "Em uma manhã fria e estável, uma camada de ar quente permanece acima do ar mais frio próximo ao solo, dificultando a dispersão de poluentes.",
        "pergunta": "A situação caracteriza:",
        "alternativas": [
            "efeito estufa, que bloqueia toda circulação atmosférica local.",
            "frente fria, que dispersa obrigatoriamente os poluentes.",
            "chuva convectiva, que mantém o ar frio preso junto ao solo.",
            "inversão térmica, que reduz a mistura vertical do ar.",
            "brisa marítima, que impede a entrada de ar limpo na cidade."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Na inversão térmica, o ar frio fica retido próximo à superfície sob uma camada mais quente, favorecendo concentração de poluentes.",
        "feedbackErro": "Revise o conceito central. Na inversão térmica, o ar frio fica retido próximo à superfície sob uma camada mais quente, favorecendo concentração de poluentes.",
        "dicaBanca": "Ar frio preso abaixo de ar quente = inversão térmica."
    },
    {
        "texto": "O efeito estufa natural mantém a Terra em temperatura adequada à vida, mas atividades humanas aumentam a concentração de gases que retêm calor.",
        "pergunta": "A interpretação correta é:",
        "alternativas": [
            "a intensificação humana do efeito estufa amplia o aquecimento global.",
            "o efeito estufa é inteiramente artificial e surgiu com a industrialização.",
            "todos os gases atmosféricos aquecem o planeta com a mesma intensidade.",
            "a retirada do efeito estufa manteria a temperatura média do planeta.",
            "o aquecimento atual decorre apenas de variações diárias do tempo."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O efeito estufa é natural e essencial, mas sua intensificação por emissões humanas aumenta o aquecimento do sistema climático.",
        "feedbackErro": "Revise o conceito central. O efeito estufa é natural e essencial, mas sua intensificação por emissões humanas aumenta o aquecimento do sistema climático.",
        "dicaBanca": "Não confunda efeito estufa natural com sua intensificação antrópica."
    },
    {
        "texto": "Uma pessoa afirma que uma semana muito fria prova que o aquecimento global não existe.",
        "pergunta": "A resposta cientificamente adequada é:",
        "alternativas": [
            "uma semana fria elimina tendências observadas em séries climáticas longas.",
            "tempo e clima são iguais, portanto um evento define a tendência global.",
            "o aquecimento exige calor recorde em todos os lugares e em todos os dias.",
            "eventos frios deixam de ocorrer quando a média global aumenta.",
            "um episódio local e curto não invalida uma tendência climática global."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Mudança climática é analisada por tendências de longo prazo; eventos frios locais continuam possíveis dentro de um clima global mais quente.",
        "feedbackErro": "Revise o conceito central. Mudança climática é analisada por tendências de longo prazo; eventos frios locais continuam possíveis dentro de um clima global mais quente.",
        "dicaBanca": "Um evento isolado de tempo não define uma tendência climática."
    },
    {
        "texto": "Uma cidade costeira eleva diques, amplia drenagem e cria sistemas de alerta para chuvas extremas e elevação do nível do mar.",
        "pergunta": "Essas medidas são exemplos de:",
        "alternativas": [
            "mitigação exclusiva, pois eliminam diretamente todas as emissões globais.",
            "variabilidade natural, pois dispensam planejamento e obras públicas.",
            "geoengenharia, pois modificam a órbita terrestre para reduzir riscos.",
            "previsão do tempo, pois substituem políticas urbanas de longo prazo.",
            "adaptação climática, voltada à redução de vulnerabilidades."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Adaptação busca reduzir danos e vulnerabilidades aos impactos climáticos; mitigação procura reduzir emissões ou ampliar remoções.",
        "feedbackErro": "Revise o conceito central. Adaptação busca reduzir danos e vulnerabilidades aos impactos climáticos; mitigação procura reduzir emissões ou ampliar remoções.",
        "dicaBanca": "Adaptar = preparar-se para impactos; mitigar = atacar as causas."
    },
    {
        "texto": "Um governo substitui parte da geração fóssil por fontes de baixo carbono e amplia eficiência energética.",
        "pergunta": "A política está mais diretamente relacionada à:",
        "alternativas": [
            "adaptação, pois protege diretamente áreas costeiras contra impactos.",
            "previsão meteorológica, pois calcula chuva para as próximas horas.",
            "regionalização, pois redefine limites entre zonas climáticas.",
            "mitigação, pois reduz emissões de gases de efeito estufa.",
            "inversão térmica, pois retém o ar frio próximo à superfície."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Mitigação envolve ações para reduzir emissões ou aumentar remoções de gases de efeito estufa.",
        "feedbackErro": "Revise o conceito central. Mitigação envolve ações para reduzir emissões ou aumentar remoções de gases de efeito estufa.",
        "dicaBanca": "Redução de emissões = mitigação."
    },
    {
        "texto": "Duas áreas recebem a mesma chuva intensa, mas uma possui drenagem, moradias seguras e alerta; a outra apresenta ocupação precária em área inundável.",
        "pergunta": "A diferença de danos demonstra que o risco depende:",
        "alternativas": [
            "da combinação entre ameaça climática, exposição e vulnerabilidade social.",
            "apenas do volume de chuva, sem relação com infraestrutura ou moradia.",
            "somente da latitude, que determina todos os impactos urbanos.",
            "exclusivamente do tipo climático regional, sem ação do poder público.",
            "apenas da densidade populacional, independentemente da localização."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Desastres não resultam apenas do fenômeno físico; exposição, vulnerabilidade e capacidade de resposta alteram os impactos.",
        "feedbackErro": "Revise o conceito central. Desastres não resultam apenas do fenômeno físico; exposição, vulnerabilidade e capacidade de resposta alteram os impactos.",
        "dicaBanca": "Ameaça semelhante pode gerar danos diferentes conforme vulnerabilidade."
    },
    {
        "texto": "Uma escola compara mapas de temperatura, séries de chuva e relatos de moradores para estudar mudanças no clima local.",
        "pergunta": "A prática mais adequada é:",
        "alternativas": [
            "usar apenas um dia de observação para concluir sobre décadas de clima.",
            "ignorar séries históricas e aceitar relatos pessoais como única fonte.",
            "integrar séries, mapas e experiências locais, separando clima de evento.",
            "aceitar toda percepção individual como evidência estatística suficiente.",
            "eliminar gráficos e mapas para evitar comparação entre diferentes períodos."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. O estudo climático deve articular séries confiáveis, representações espaciais e conhecimentos locais, sem confundir percepções com tendências estatísticas.",
        "feedbackErro": "Revise o conceito central. O estudo climático deve articular séries confiáveis, representações espaciais e conhecimentos locais, sem confundir percepções com tendências estatísticas.",
        "dicaBanca": "Boa análise climática combina escalas, fontes e séries temporais."
    },
    {
        "texto": "Em uma questão, a umidade relativa do ar cai enquanto a temperatura sobe, sem entrada adicional de vapor d’água.",
        "pergunta": "A relação pode ocorrer porque:",
        "alternativas": [
            "o aquecimento transforma rapidamente todo vapor disponível em chuva.",
            "o ar quente comporta mais vapor, podendo reduzir a umidade relativa.",
            "a umidade relativa mede somente a quantidade absoluta de nuvens.",
            "a temperatura não interfere na capacidade do ar de conter vapor.",
            "o ar mais quente mantém sempre a umidade relativa em cem por cento."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A umidade relativa compara o vapor presente com o máximo que o ar poderia conter na temperatura observada.",
        "feedbackErro": "Revise o conceito central. A umidade relativa compara o vapor presente com o máximo que o ar poderia conter na temperatura observada.",
        "dicaBanca": "Umidade relativa depende também da temperatura do ar."
    },
    {
        "texto": "Uma massa de ar úmido encontra uma massa fria e o ar quente sobe gradualmente sobre ela, produzindo nebulosidade extensa.",
        "pergunta": "A situação representa:",
        "alternativas": [
            "uma frente quente, com ascensão suave do ar quente sobre o ar frio.",
            "uma frente fria, com avanço do ar quente sob a massa fria.",
            "uma linha de instabilidade sem contraste entre massas de ar.",
            "uma monção, definida apenas pela mudança diária do vento.",
            "uma inversão térmica produzida pelo encontro de dois oceanos."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Na frente quente, o ar quente avança e sobe sobre o ar frio, geralmente gerando nuvens mais extensas e precipitação gradual.",
        "feedbackErro": "Revise o conceito central. Na frente quente, o ar quente avança e sobe sobre o ar frio, geralmente gerando nuvens mais extensas e precipitação gradual.",
        "dicaBanca": "Ar quente avançando sobre ar frio = frente quente."
    },
    {
        "texto": "No verão, o continente aquece mais rapidamente que o oceano durante o dia, gerando diferenças locais de pressão.",
        "pergunta": "Próximo ao litoral, isso favorece:",
        "alternativas": [
            "brisa terrestre, com vento do oceano para o continente à noite.",
            "vento polar, com direção fixa causada apenas pela latitude.",
            "monção de inverno, com circulação diária entre praia e bairro.",
            "corrente de jato, que sopra junto à superfície litorânea.",
            "brisa marítima, com vento do mar para a terra durante o dia."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Durante o dia, a terra aquece mais, o ar sobe e o vento sopra do mar relativamente mais frio para o continente.",
        "feedbackErro": "Revise o conceito central. Durante o dia, a terra aquece mais, o ar sobe e o vento sopra do mar relativamente mais frio para o continente.",
        "dicaBanca": "Dia no litoral: mar para terra = brisa marítima."
    },
    {
        "texto": "Durante a noite, o continente esfria mais rapidamente que o oceano.",
        "pergunta": "A circulação local mais provável é:",
        "alternativas": [
            "brisa marítima, com vento da terra para o oceano.",
            "alísio polar, com vento do litoral para o Equador.",
            "brisa terrestre, com vento da terra para o mar.",
            "frente quente, com ar oceânico subindo sobre o continente.",
            "monção tropical, com inversão obrigatória a cada madrugada."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. À noite, a terra fica relativamente mais fria e a circulação tende a soprar da terra para o mar.",
        "feedbackErro": "Revise o conceito central. À noite, a terra fica relativamente mais fria e a circulação tende a soprar da terra para o mar.",
        "dicaBanca": "Noite no litoral: terra para mar = brisa terrestre."
    },
    {
        "texto": "Uma encosta urbana desmatada recebe chuva intensa e ocorre deslizamento. A previsão meteorológica indicava o evento, mas não impediu a ocupação vulnerável.",
        "pergunta": "A conclusão mais adequada é:",
        "alternativas": [
            "a previsão elimina a vulnerabilidade das moradias localizadas em encostas.",
            "a previsão ajuda no alerta, mas o risco exige planejamento e prevenção.",
            "o deslizamento depende só do clima, sem relação com o uso do solo.",
            "o radar torna desnecessários drenagem, fiscalização e política habitacional.",
            "o alerta substitui obras preventivas e medidas de ordenamento territorial."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Previsão e alerta são importantes, mas precisam estar combinados com prevenção, infraestrutura e gestão do território.",
        "feedbackErro": "Revise o conceito central. Previsão e alerta são importantes, mas precisam estar combinados com prevenção, infraestrutura e gestão do território.",
        "dicaBanca": "Informação meteorológica reduz risco quando ligada a políticas de prevenção."
    },
    {
        "texto": "Em um mapa climático, uma cidade amazônica aparece em zona quente e muito úmida, enquanto outra do sertão está em zona quente e seca.",
        "pergunta": "A comparação demonstra que:",
        "alternativas": [
            "cidades tropicais apresentam obrigatoriamente o mesmo regime de chuvas.",
            "a proximidade do Equador elimina diferenças regionais de umidade.",
            "o relevo e as massas de ar não interferem na distribuição das chuvas.",
            "a latitude atua com circulação, relevo, umidade e continentalidade.",
            "a continentalidade sempre produz clima úmido nas áreas interiores."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Mesmo em latitudes tropicais semelhantes, fatores climáticos e sistemas atmosféricos produzem regimes de chuva diferentes.",
        "feedbackErro": "Revise o conceito central. Mesmo em latitudes tropicais semelhantes, fatores climáticos e sistemas atmosféricos produzem regimes de chuva diferentes.",
        "dicaBanca": "Evite explicações monocausais para o clima."
    }
];

if(typeof window !== "undefined"){
    window.climaDinamicaClimatica = climaDinamicaClimatica;
}
