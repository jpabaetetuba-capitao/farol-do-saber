// Questões — Cartografia e Representação do Espaço
// Farol do Saber
// 50 questões contextualizadas, com distratores revisados e alternativas equilibradas.
// Gabarito distribuído entre A, B, C, D e E sem sequência previsível.

const cartografiaGeografia = [
    {
        "texto": "Uma secretaria municipal pretende elaborar um mapa para mostrar, em uma única imagem, escolas, unidades de saúde, comunidades ribeirinhas, estradas vicinais e áreas sujeitas a alagamento. O objetivo é apoiar decisões sobre transporte escolar e atendimento básico.",
        "pergunta": "Nesse caso, a principal função da cartografia é:",
        "alternativas": [
            "reproduzir toda a realidade municipal sem selecionar informações temáticas.",
            "mostrar somente a posição astronômica das localidades representadas.",
            "substituir pesquisas de campo por uma imagem geral do território municipal.",
            "organizar dados espaciais para apoiar localização, comparação e planejamento.",
            "registrar elementos do espaço sem permitir análise entre áreas diferentes."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A cartografia organiza informações espaciais para leitura, comparação e planejamento do território.",
        "feedbackErro": "A cartografia não é uma ilustração neutra nem uma cópia perfeita da realidade. Ela seleciona e organiza dados espaciais para permitir análise e tomada de decisão.",
        "dicaBanca": "Quando o enunciado fala em planejamento, serviços e localização, pense na função analítica da cartografia."
    },
    {
        "texto": "Um professor mostrou aos alunos quatro representações: uma imagem do Brasil com estados e capitais, uma carta topográfica com curvas de nível, uma planta de uma escola e um desenho simples indicando o caminho até uma comunidade.",
        "pergunta": "A associação correta entre representação e característica é:",
        "alternativas": [
            "croqui: representação simplificada, geralmente sem rigor cartográfico formal.",
            "planta: representação extensa, própria para continentes e grandes regiões.",
            "carta topográfica: desenho livre que dispensa escala e coordenadas técnicas.",
            "mapa político: documento destinado apenas a relevo, altitude e drenagem.",
            "croqui: representação precisa usada obrigatoriamente em levantamentos cadastrais."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O croqui é uma representação esquemática e simplificada, útil para orientação, mas sem o rigor de uma carta ou planta.",
        "feedbackErro": "A alternativa correta é a que define croqui como desenho simplificado. Cartas e plantas possuem maior precisão e normalmente usam escala.",
        "dicaBanca": "Diferencie: mapa é mais amplo; carta é técnica; planta detalha área pequena; croqui é esquemático."
    },
    {
        "texto": "Em um mapa sobre cobertura vegetal, a cor verde representa floresta, a cor amarela representa savana e a cor vermelha representa área desmatada. Em outro mapa, as mesmas cores indicam níveis de renda municipal.",
        "pergunta": "A situação demonstra que o significado das cores em um mapa depende principalmente:",
        "alternativas": [
            "da orientação do mapa, que atribui valor estatístico às diferentes tonalidades.",
            "da escala numérica, que determina quais cores representam valores altos ou baixos.",
            "da legenda, que define o significado das cores em cada representação temática.",
            "da projeção cartográfica, que fixa um significado universal para cada cor usada.",
            "da posição latitudinal, que altera automaticamente o sentido das cores no mapa."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A legenda é o elemento que define o significado de cores, linhas, símbolos e padrões.",
        "feedbackErro": "As cores não têm significado cartográfico fixo em todos os mapas. O sentido depende do tema e da legenda.",
        "dicaBanca": "Em questão com mapa, procure primeiro a legenda antes de interpretar cores e símbolos."
    },
    {
        "texto": "Um mapa apresenta o título 'Densidade demográfica por município', uma escala, uma seta indicando o norte, fonte dos dados e uma legenda com faixas de habitantes por quilômetro quadrado.",
        "pergunta": "O elemento responsável por informar o tema principal da representação é:",
        "alternativas": [
            "a legenda.",
            "a escala.",
            "a fonte.",
            "a orientação.",
            "o título."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. O título indica o tema do mapa e orienta a leitura inicial da representação.",
        "feedbackErro": "A escala mede proporção, a fonte informa origem dos dados e a orientação indica direção. O tema principal é indicado pelo título.",
        "dicaBanca": "Título responde: 'sobre o que é o mapa?'."
    },
    {
        "texto": "Em um mapa de uma área rural, uma seta norte aparece apontando para o canto superior direito da folha. Um aluno afirmou que o norte sempre corresponde à parte superior do papel.",
        "pergunta": "A afirmação do aluno está:",
        "alternativas": [
            "correta, porque o norte deve ocupar sempre a parte superior de qualquer mapa.",
            "correta apenas em plantas, pois cartas podem dispensar indicação de orientação.",
            "incorreta, pois a direção norte deve ser identificada pela orientação do mapa.",
            "incorreta, porque mapas temáticos não podem indicar pontos cardeais no papel.",
            "correta quando existe legenda, mesmo que a seta aponte para outra direção."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. O norte deve ser identificado pela seta, rosa dos ventos ou outro elemento de orientação do mapa.",
        "feedbackErro": "Não existe obrigação de o norte estar no alto da folha. O correto é seguir a orientação indicada pela representação.",
        "dicaBanca": "Norte no alto é convenção comum, não regra absoluta."
    },
    {
        "texto": "Uma localidade é representada pelas coordenadas 3°S e 52°W. O professor pede que os alunos identifiquem os hemisférios correspondentes.",
        "pergunta": "A localização está nos hemisférios:",
        "alternativas": [
            "Sul e Oriental.",
            "Norte e Ocidental.",
            "Sul e Ocidental.",
            "Norte e Oriental.",
            "Equatorial e Meridional."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. 3°S indica Hemisfério Sul; 52°W indica Hemisfério Ocidental.",
        "feedbackErro": "S indica sul em relação ao Equador; W indica oeste em relação a Greenwich. Portanto, a posição é Sul e Ocidental.",
        "dicaBanca": "Latitude define norte/sul; longitude define leste/oeste."
    },
    {
        "texto": "Durante uma aula, um estudante disse que latitude é medida a partir do Meridiano de Greenwich e longitude é medida a partir da Linha do Equador.",
        "pergunta": "A correção adequada é:",
        "alternativas": [
            "latitude toma o Equador como referência; longitude toma Greenwich.",
            "latitude toma Greenwich como referência; longitude toma o Equador.",
            "latitude mede altitude; longitude mede distância entre paralelos.",
            "latitude varia até 180°; longitude varia somente até 90°.",
            "latitude e longitude usam exclusivamente os polos como referência."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Latitude usa o Equador como referência; longitude usa o Meridiano de Greenwich.",
        "feedbackErro": "O estudante inverteu os conceitos. Latitude se relaciona ao Equador; longitude se relaciona a Greenwich.",
        "dicaBanca": "Equador = latitude. Greenwich = longitude."
    },
    {
        "texto": "Em um planisfério, duas cidades estão em latitudes semelhantes, mas uma delas está em grande altitude e apresenta temperaturas médias menores que a outra.",
        "pergunta": "A interpretação mais adequada é:",
        "alternativas": [
            "a altitude pode reduzir temperaturas mesmo em localidades de latitude semelhante.",
            "a longitude determina as temperaturas quando as latitudes são parecidas.",
            "a latitude deixa de influenciar o clima sempre que existe diferença de altitude.",
            "a escala do planisfério modifica a temperatura real das cidades representadas.",
            "a orientação do mapa explica a diferença térmica entre as duas localidades."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A latitude influencia o clima, mas a altitude também pode reduzir temperaturas.",
        "feedbackErro": "A latitude é importante, mas não atua sozinha. Altitude, relevo, massas de ar e maritimidade também interferem.",
        "dicaBanca": "Evite respostas que atribuem o clima a um único fator."
    },
    {
        "texto": "Considere um mapa em escala 1:250.000. Nele, a distância em linha reta entre duas vilas é de 4 cm.",
        "pergunta": "A distância real aproximada entre as vilas é:",
        "alternativas": [
            "1 km.",
            "4 km.",
            "10 km.",
            "25 km.",
            "100 km."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. 1 cm representa 250.000 cm, ou 2,5 km. Logo, 4 cm representam 10 km.",
        "feedbackErro": "Em 1:250.000, 1 cm = 250.000 cm = 2,5 km. Multiplicando por 4, chega-se a 10 km.",
        "dicaBanca": "Converta sempre: 100.000 cm = 1 km."
    },
    {
        "texto": "A distância real entre dois pontos é de 60 km. Um mapa foi construído na escala 1:2.000.000.",
        "pergunta": "A distância entre esses pontos no mapa será:",
        "alternativas": [
            "3 cm.",
            "1 cm.",
            "2 cm.",
            "6 cm.",
            "12 cm."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. 60 km equivalem a 6.000.000 cm. Dividindo por 2.000.000, resulta em 3 cm.",
        "feedbackErro": "Converta 60 km para centímetros: 6.000.000 cm. Depois divida pelo denominador da escala: 6.000.000 / 2.000.000 = 3 cm.",
        "dicaBanca": "Quando a distância real é dada, converta para centímetros antes de dividir pela escala."
    },
    {
        "texto": "Um técnico precisa representar detalhes de ruas, quadras e equipamentos públicos de um bairro. Ele deve escolher entre as escalas 1:10.000, 1:100.000, 1:1.000.000 e 1:5.000.000.",
        "pergunta": "A escala mais adequada para maior detalhamento é:",
        "alternativas": [
            "1:100.000, pois o denominador intermediário detalha melhor as quadras.",
            "1:1.000.000, porque escalas menores representam mais objetos urbanos.",
            "1:10.000, pois o menor denominador oferece maior detalhamento da área.",
            "1:5.000.000, porque grandes denominadores ampliam ruas e equipamentos.",
            "qualquer uma, pois o nível de detalhe independe da escala escolhida."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. 1:10.000 é a maior escala entre as opções e permite maior detalhamento.",
        "feedbackErro": "Quanto menor o denominador, maior a escala e maior o detalhamento. Portanto, 1:10.000 é a opção adequada.",
        "dicaBanca": "Escala grande = menor denominador = mais detalhes."
    },
    {
        "texto": "Um atlas escolar apresenta um mapa-múndi em escala 1:80.000.000 e uma planta de bairro em escala 1:5.000.",
        "pergunta": "Comparando as duas representações, é correto afirmar que:",
        "alternativas": [
            "o mapa-múndi possui maior escala por representar uma superfície mais extensa.",
            "as duas representações possuem a mesma escala por integrarem o mesmo atlas.",
            "a planta possui maior escala e maior detalhamento que o mapa-múndi.",
            "a escala 1:80.000.000 detalha mais ruas e lotes que a escala 1:5.000.",
            "a planta possui menor escala porque seu denominador numérico é menor."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A planta em 1:5.000 possui escala maior e mostra mais detalhes que o mapa-múndi.",
        "feedbackErro": "1:5.000 é escala maior que 1:80.000.000, porque o denominador é menor. Ela representa área menor com mais detalhes.",
        "dicaBanca": "Não confunda número grande com escala grande."
    },
    {
        "texto": "Um mapa foi reduzido em uma cópia, mas manteve uma escala gráfica desenhada junto à imagem. A escala numérica original deixou de corresponder exatamente à nova cópia.",
        "pergunta": "Nesse caso, a escala gráfica continua útil porque:",
        "alternativas": [
            "acompanha o redimensionamento da imagem e preserva a proporção visual.",
            "mantém seu valor porque não depende do tamanho físico da representação.",
            "substitui automaticamente a legenda quando o mapa é ampliado ou reduzido.",
            "corrige a projeção cartográfica e elimina deformações provocadas pela cópia.",
            "transforma a representação reduzida em uma carta topográfica de precisão."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A escala gráfica acompanha o redimensionamento da imagem, permitindo medições proporcionais.",
        "feedbackErro": "A escala numérica pode ficar incorreta quando o mapa é ampliado ou reduzido sem ajuste. A escala gráfica se redimensiona junto com o mapa.",
        "dicaBanca": "Escala gráfica é vantajosa em cópias ampliadas ou reduzidas."
    },
    {
        "texto": "Um planisfério usa uma projeção que preserva ângulos e formas locais, mas amplia visualmente áreas próximas aos polos.",
        "pergunta": "Essa característica está associada, de modo clássico, à projeção:",
        "alternativas": [
            "equivalente de Peters.",
            "conforme de Mercator.",
            "azimutal polar.",
            "cônica equivalente.",
            "afilática de Robinson."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A projeção de Mercator é conforme e amplia áreas de altas latitudes.",
        "feedbackErro": "A descrição corresponde à projeção de Mercator: preserva ângulos e formas locais, mas distorce áreas, especialmente próximas aos polos.",
        "dicaBanca": "Mercator costuma aparecer ligada à navegação e à ampliação das altas latitudes."
    },
    {
        "texto": "Um mapa foi elaborado para comparar proporcionalmente a extensão territorial dos continentes, mesmo que as formas fiquem deformadas.",
        "pergunta": "A propriedade cartográfica priorizada é:",
        "alternativas": [
            "conformidade, pois preserva simultaneamente formas e superfícies.",
            "equivalência, pois mantém proporcionais as áreas representadas.",
            "equidistância, pois conserva todas as distâncias do planisfério.",
            "azimutalidade, pois mantém iguais as direções entre todos os pontos.",
            "generalização, pois elimina deformações nas formas continentais."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Projeções equivalentes preservam áreas proporcionais.",
        "feedbackErro": "Quando o objetivo é manter proporção de áreas, fala-se em projeção equivalente. Ela pode deformar formas.",
        "dicaBanca": "Área preservada = equivalente."
    },
    {
        "texto": "Uma questão afirma: 'Existe projeção cartográfica capaz de representar toda a superfície terrestre em um plano sem qualquer deformação'.",
        "pergunta": "A afirmação deve ser considerada:",
        "alternativas": [
            "correta, porque recursos digitais eliminam as deformações de planisférios.",
            "correta apenas quando o mapa usa escala pequena e projeção cilíndrica.",
            "incorreta somente quando a representação não apresenta orientação norte.",
            "correta se áreas, formas e distâncias forem preservadas ao mesmo tempo.",
            "incorreta, pois toda projeção plana produz alguma deformação cartográfica."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Nenhuma projeção plana representa a superfície terrestre inteira sem deformações.",
        "feedbackErro": "Toda projeção cartográfica implica deformações de área, forma, distância ou direção. Não existe projeção perfeita.",
        "dicaBanca": "Desconfie de alternativas com 'sem qualquer deformação'."
    },
    {
        "texto": "Uma projeção cartográfica representa o Polo Norte no centro do mapa, com os meridianos irradiando a partir desse ponto.",
        "pergunta": "Quanto à superfície de projeção, trata-se mais provavelmente de uma projeção:",
        "alternativas": [
            "cilíndrica equatorial.",
            "azimutal ou plana.",
            "cônica de médias latitudes.",
            "policônica transversal.",
            "equivalente cilíndrica."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Projeções azimutais ou planas são comuns em representações polares ou centradas em um ponto.",
        "feedbackErro": "Mapas centrados nos polos, com aparência circular e meridianos irradiando, associam-se às projeções azimutais.",
        "dicaBanca": "Plano tangente ao globo = projeção azimutal."
    },
    {
        "texto": "Para representar uma faixa continental de médias latitudes, extensa no sentido leste-oeste, um cartógrafo optou por uma projeção cujo modelo geométrico utiliza um cone.",
        "pergunta": "Essa projeção é classificada como:",
        "alternativas": [
            "cônica.",
            "cilíndrica.",
            "azimutal.",
            "ortográfica.",
            "equivalente."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A superfície geométrica em forma de cone caracteriza projeção cônica.",
        "feedbackErro": "A própria descrição indica a resposta: cone corresponde à projeção cônica.",
        "dicaBanca": "Associe a superfície usada: cone = cônica."
    },
    {
        "texto": "Um mapa coroplético mostra diferentes municípios com tonalidades de azul, representando percentuais de domicílios com abastecimento de água. Tons mais escuros indicam percentuais mais altos.",
        "pergunta": "A leitura adequada desse tipo de mapa exige observar:",
        "alternativas": [
            "a área territorial dos municípios, independentemente dos percentuais exibidos.",
            "a legenda, os intervalos de classe e a unidade estatística representada.",
            "a orientação norte, pois ela determina a intensidade das tonalidades usadas.",
            "a longitude municipal, que explica diretamente os níveis de abastecimento.",
            "a escala gráfica, sem necessidade de conferir o tipo de dado apresentado."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Mapas coropléticos dependem da legenda, dos intervalos e da unidade territorial ou estatística usada.",
        "feedbackErro": "A cor precisa ser interpretada com a legenda. Também é essencial saber se o dado é percentual, absoluto, taxa ou índice.",
        "dicaBanca": "Em mapa temático, veja o que a cor mede."
    },
    {
        "texto": "Um mapa utiliza setas de diferentes espessuras para representar deslocamentos migratórios entre regiões. As setas indicam sentido e intensidade dos fluxos.",
        "pergunta": "Esse tipo de representação é mais adequado para mapear:",
        "alternativas": [
            "altitudes absolutas, expressas por setas que acompanham as curvas de nível.",
            "categorias de uso do solo, representadas pela largura das linhas de deslocamento.",
            "limites políticos fixos, indicados pelo sentido e pela espessura das setas.",
            "fluxos espaciais, como migração, transporte e circulação de mercadorias.",
            "áreas climáticas homogêneas, diferenciadas pela direção dos movimentos."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Setas são comuns em mapas de fluxos, indicando direção e intensidade de movimentos.",
        "feedbackErro": "A presença de setas com espessuras diferentes indica representação de fluxos, não apenas localização fixa.",
        "dicaBanca": "Seta no mapa geralmente sugere movimento ou circulação."
    },
    {
        "texto": "Em um mapa topográfico, as curvas de nível aparecem muito próximas em uma encosta e mais afastadas em uma área vizinha.",
        "pergunta": "A interpretação correta é:",
        "alternativas": [
            "curvas próximas indicam menor altitude absoluta do terreno.",
            "curvas afastadas indicam necessariamente encostas mais íngremes.",
            "curvas próximas indicam maior declividade do terreno.",
            "curvas próximas representam rios com maior velocidade de escoamento.",
            "curvas afastadas indicam ausência de variação altimétrica no relevo."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Curvas de nível próximas indicam terreno mais inclinado.",
        "feedbackErro": "Quanto mais próximas estão as curvas, maior é a variação de altitude em pequena distância, indicando maior declividade.",
        "dicaBanca": "Curvas próximas = encosta íngreme."
    },
    {
        "texto": "Um estudante afirmou que curvas de nível podem se cruzar livremente, pois representam caminhos de rios e estradas.",
        "pergunta": "A correção adequada é:",
        "alternativas": [
            "representam caminhos de drenagem e podem se cruzar em qualquer encosta.",
            "indicam diferentes longitudes e se cruzam nos pontos de maior altitude.",
            "mostram limites políticos e podem coincidir com rodovias e ferrovias.",
            "unem pontos de mesma altitude e normalmente não se cruzam.",
            "ligam pontos de igual distância e se cruzam quando a escala é pequena."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Curvas de nível unem pontos de mesma altitude e não se cruzam normalmente.",
        "feedbackErro": "Elas não representam estradas nem rios. Representam altitudes iguais no terreno.",
        "dicaBanca": "Curva de nível = mesma altitude."
    },
    {
        "texto": "Um órgão ambiental utiliza imagens de satélite para acompanhar avanço do desmatamento, focos de queimadas e alteração de corpos d'água.",
        "pergunta": "A tecnologia descrita está relacionada principalmente ao:",
        "alternativas": [
            "georreferenciamento cadastral.",
            "cartografia histórica.",
            "levantamento censitário.",
            "sensoriamento remoto.",
            "navegação astronômica."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Sensoriamento remoto obtém informações da superfície terrestre à distância, com sensores em satélites, aviões ou drones.",
        "feedbackErro": "O monitoramento por imagens de satélite é exemplo clássico de sensoriamento remoto.",
        "dicaBanca": "Satélite observando a superfície = sensoriamento remoto."
    },
    {
        "texto": "Um sistema digital permite sobrepor camadas de rios, estradas, escolas, áreas de risco e densidade populacional para apoiar o planejamento municipal.",
        "pergunta": "Esse sistema é melhor identificado como:",
        "alternativas": [
            "GPS, por produzir mapas temáticos sem necessidade de banco de dados geográficos.",
            "projeção cartográfica, por reunir camadas e calcular relações entre fenômenos.",
            "SIG, por integrar, sobrepor e analisar diferentes camadas de dados espaciais.",
            "escala gráfica, por cruzar informações de rios, serviços e população municipal.",
            "croqui digital, por dispensar coordenadas, atributos e análise espacial."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Sistemas de Informação Geográfica organizam dados em camadas e permitem análise espacial.",
        "feedbackErro": "O enunciado descreve a lógica dos SIG: camadas de informação, cruzamento de dados e apoio ao planejamento.",
        "dicaBanca": "Camadas sobrepostas de dados espaciais = SIG."
    },
    {
        "texto": "Um aplicativo de navegação informa a posição de um usuário por meio de sinais recebidos de satélites, combinando latitude, longitude e rota.",
        "pergunta": "A tecnologia mencionada está associada ao uso de:",
        "alternativas": [
            "SIG vetorial.",
            "escala gráfica.",
            "projeção cônica.",
            "sensoriamento aéreo.",
            "GNSS/GPS."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Sistemas GNSS, como o GPS, permitem posicionamento por satélites.",
        "feedbackErro": "Sinais de satélites usados para localização remetem a sistemas de navegação por satélite, como GPS/GNSS.",
        "dicaBanca": "Localização por satélite = GPS/GNSS."
    },
    {
        "texto": "Um mapa-múndi centraliza a Europa e divide o Oceano Pacífico nas bordas. Outro centraliza o Pacífico e coloca as Américas e a Ásia em lados opostos.",
        "pergunta": "A comparação permite concluir que:",
        "alternativas": [
            "todo planisfério possui um centro natural e obrigatório definido pela geografia.",
            "mapas que não centralizam a Europa apresentam erro técnico de orientação.",
            "a posição central elimina deformações e torna desnecessária uma projeção.",
            "a legenda determina qual continente deve ocupar o centro da representação.",
            "a centralização é uma escolha cartográfica que influencia a percepção espacial."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A centralidade é uma escolha de representação e afeta a percepção de proximidade e importância.",
        "feedbackErro": "Mapas são construções seletivas. Centralizar uma área é uma decisão cartográfica, não uma imposição natural.",
        "dicaBanca": "Mapa não é neutro: projeção, centro e recorte influenciam a leitura."
    },
    {
        "texto": "Em uma prova, o enunciado apresenta duas escalas: 1:25.000 e 1:250.000. Pede-se a opção que representa uma área menor com maior detalhamento.",
        "pergunta": "A resposta correta é:",
        "alternativas": [
            "1:25.000, por ser escala maior e representar área menor com mais detalhes.",
            "1:250.000, porque o denominador maior indica ampliação dos elementos locais.",
            "1:250.000, por mostrar menor superfície com maior precisão cartográfica.",
            "as duas escalas, pois o denominador não interfere no nível de detalhamento.",
            "nenhuma delas, porque escala se relaciona apenas à orientação do mapa."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. 1:25.000 tem menor denominador, portanto é escala maior e mostra mais detalhes.",
        "feedbackErro": "A escala 1:25.000 reduz menos a realidade que 1:250.000; por isso mostra área menor com maior detalhamento.",
        "dicaBanca": "Menor denominador = maior escala."
    },
    {
        "texto": "Um mapa informa que 1 cm representa 5 km na realidade.",
        "pergunta": "A escala numérica correspondente é:",
        "alternativas": [
            "1:50.000.",
            "1:5.000.",
            "1:5.000.000.",
            "1:50.000.000.",
            "1:500.000."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. 5 km correspondem a 500.000 cm; logo, a escala é 1:500.000.",
        "feedbackErro": "Converta 5 km para centímetros: 5 × 100.000 = 500.000 cm. Portanto, 1 cm no mapa representa 500.000 cm reais.",
        "dicaBanca": "Para escala numérica, converta quilômetros para centímetros."
    },
    {
        "texto": "Em um mapa de uso da terra, áreas agrícolas pequenas desapareceram quando a representação foi transformada de 1:50.000 para 1:5.000.000.",
        "pergunta": "Esse desaparecimento ocorre principalmente por causa da:",
        "alternativas": [
            "mudança de projeção que impede qualquer representação de áreas agrícolas.",
            "generalização cartográfica decorrente da redução do nível de detalhe.",
            "alteração da latitude das feições após a mudança da escala do mapa.",
            "perda da orientação norte durante a transformação da representação.",
            "aumento da escala, que exige retirar elementos pequenos da paisagem."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Em escalas menores, muitos detalhes precisam ser simplificados ou omitidos.",
        "feedbackErro": "Ao passar para 1:5.000.000, a área representada aumenta e o nível de detalhe diminui. Isso exige generalização.",
        "dicaBanca": "Escala menor = mais generalização."
    },
    {
        "texto": "Um mapa temático compara o número total de habitantes entre municípios, mas não informa a população relativa ou a densidade demográfica.",
        "pergunta": "O cuidado interpretativo necessário é:",
        "alternativas": [
            "considerar que população absoluta maior implica densidade sempre maior.",
            "comparar somente as cores, sem verificar a unidade estatística da legenda.",
            "diferenciar valores absolutos de taxas, proporções e densidades.",
            "concluir que municípios maiores em área possuem mais habitantes.",
            "usar a longitude como critério principal para interpretar população."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Número absoluto de habitantes não é o mesmo que densidade ou proporção.",
        "feedbackErro": "É preciso distinguir valores absolutos, taxas, proporções e densidade. Eles podem levar a interpretações diferentes.",
        "dicaBanca": "Cuidado com mapas estatísticos: absoluto e relativo não são a mesma coisa."
    },
    {
        "texto": "Em um mapa, a Linha do Equador e o Meridiano de Greenwich são usados como referências principais.",
        "pergunta": "Essas linhas servem, respectivamente, para medir:",
        "alternativas": [
            "longitude e latitude.",
            "altitude e longitude.",
            "latitude e altitude.",
            "escala e orientação.",
            "latitude e longitude."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A Linha do Equador é referência para latitude; Greenwich, para longitude.",
        "feedbackErro": "Equador e Greenwich são referências básicas do sistema de coordenadas geográficas.",
        "dicaBanca": "Equador = latitude; Greenwich = longitude."
    },
    {
        "texto": "Uma cidade está localizada a 45°W. Outra está a 30°W. Considerando apenas a diferença longitudinal e a regra geral de 15° por hora.",
        "pergunta": "A diferença aproximada entre elas é:",
        "alternativas": [
            "15 minutos.",
            "30 minutos.",
            "2 horas.",
            "3 horas.",
            "1 hora."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A diferença é de 15° de longitude, o que corresponde a aproximadamente 1 hora.",
        "feedbackErro": "45°W - 30°W = 15°. Pela regra geral, 15° correspondem a 1 hora.",
        "dicaBanca": "A cada 15° de longitude, considera-se cerca de uma hora."
    },
    {
        "texto": "Duas localidades estão em longitudes diferentes. Considerando a regra geral dos fusos horários, uma delas está mais a leste que a outra.",
        "pergunta": "A localidade situada mais a leste tende a apresentar horário:",
        "alternativas": [
            "mais atrasado, pois os horários diminuem no sentido leste.",
            "sempre igual, porque longitude não interfere no cálculo dos fusos.",
            "definido pela latitude, que determina as diferenças de horário.",
            "mais adiantado, segundo a regra geral dos fusos horários.",
            "mais atrasado apenas quando as cidades ficam no mesmo hemisfério."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. No deslocamento para leste, as horas tendem a adiantar.",
        "feedbackErro": "A regra geral é: leste adianta, oeste atrasa. Fatores políticos podem ajustar fusos oficiais, mas a lógica básica é essa.",
        "dicaBanca": "Leste adianta; oeste atrasa."
    },
    {
        "texto": "Um mapa de relevo usa tons verdes, amarelos, laranjas e marrons para indicar faixas de altitude.",
        "pergunta": "Esse tipo de recurso é chamado de:",
        "alternativas": [
            "símbolo proporcional.",
            "cor hipsométrica.",
            "curva batimétrica.",
            "escala cromática ordinal.",
            "projeção equivalente."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Cores hipsométricas representam faixas de altitude.",
        "feedbackErro": "Tons de cor associados a diferentes altitudes correspondem à representação hipsométrica do relevo.",
        "dicaBanca": "Hipsometria está ligada à altitude."
    },
    {
        "texto": "Em uma carta topográfica, duas curvas de nível consecutivas indicam 100 m e 120 m de altitude.",
        "pergunta": "A equidistância vertical entre as curvas é:",
        "alternativas": [
            "10 m.",
            "100 m.",
            "20 m.",
            "120 m.",
            "220 m."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A diferença entre 120 m e 100 m é 20 m.",
        "feedbackErro": "A equidistância vertical é a diferença de altitude entre curvas de nível consecutivas: 120 - 100 = 20 m.",
        "dicaBanca": "Equidistância é diferença vertical entre curvas sucessivas."
    },
    {
        "texto": "Um mapa sem fonte apresenta dados sobre desmatamento, mas não informa o ano nem a instituição responsável pelo levantamento.",
        "pergunta": "A principal limitação para a análise geográfica é:",
        "alternativas": [
            "impede calcular a direção norte mesmo que exista seta de orientação.",
            "torna impossível reconhecer as cores e os símbolos descritos na legenda.",
            "elimina a escala gráfica e impede qualquer medição de distância no mapa.",
            "faz o mapa perder suas coordenadas, ainda que elas estejam representadas.",
            "não permite avaliar a origem, a confiabilidade e a atualidade dos dados."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Fonte e data são essenciais para avaliar origem, confiabilidade e atualidade dos dados.",
        "feedbackErro": "Sem fonte e data, o leitor não sabe de onde vieram os dados nem a que período se referem.",
        "dicaBanca": "Fonte e data são parte da leitura crítica do mapa."
    },
    {
        "texto": "Um mapa apresenta círculos de tamanhos diferentes sobre cidades, indicando o volume de produção industrial de cada uma.",
        "pergunta": "A técnica de representação utilizada é mais próxima de:",
        "alternativas": [
            "símbolos proporcionais.",
            "curvas de nível.",
            "isolinhas climáticas.",
            "setas de fluxo.",
            "hachuras qualitativas."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Símbolos proporcionais usam tamanho variável para representar diferenças quantitativas.",
        "feedbackErro": "Quando o tamanho do círculo varia conforme o valor representado, trata-se de símbolo proporcional.",
        "dicaBanca": "Tamanho do símbolo variando = valor quantitativo."
    },
    {
        "texto": "Um mapa indica aeroportos por pequenos aviões, portos por âncoras e rodovias por linhas vermelhas. A explicação desses sinais aparece em uma caixa lateral.",
        "pergunta": "Essa caixa lateral é a:",
        "alternativas": [
            "escala.",
            "fonte.",
            "projeção.",
            "legenda.",
            "orientação."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A legenda explica os símbolos usados no mapa.",
        "feedbackErro": "A caixa que decodifica os símbolos cartográficos é a legenda.",
        "dicaBanca": "Símbolo no mapa precisa de legenda."
    },
    {
        "texto": "Um mapa de clima divide o Brasil em áreas com diferentes tipos climáticos usando cores. O leitor quer saber o significado de cada cor.",
        "pergunta": "Ele deve consultar principalmente:",
        "alternativas": [
            "a orientação, que define a distribuição dos tipos climáticos.",
            "a legenda, que explica as categorias associadas a cada cor.",
            "a escala numérica, que atribui significado às tonalidades usadas.",
            "o meridiano central, que classifica os climas representados.",
            "a fonte, que substitui a necessidade de interpretar as cores."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A legenda informa o significado das cores e categorias do mapa.",
        "feedbackErro": "As cores só podem ser interpretadas corretamente pela legenda do mapa.",
        "dicaBanca": "Cor sem legenda pode induzir erro."
    },
    {
        "texto": "Um município deseja mapear áreas de risco de inundação cruzando relevo, proximidade de rios, ocupação urbana e histórico de cheias.",
        "pergunta": "A ferramenta mais adequada para integrar esses dados é:",
        "alternativas": [
            "GPS isolado, suficiente para calcular risco sem dados de relevo e ocupação.",
            "projeção de Mercator, adequada para combinar cheias, população e drenagem.",
            "escala verbal, usada para integrar dados ambientais e urbanos do município.",
            "SIG ou geoprocessamento, capaz de cruzar as diferentes camadas espaciais.",
            "croqui sem coordenadas, capaz de substituir a análise espacial das camadas."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. SIG e geoprocessamento permitem integrar camadas espaciais diferentes para análise de risco.",
        "feedbackErro": "O problema exige cruzamento de dados espaciais, típico de SIG/geoprocessamento.",
        "dicaBanca": "Camadas + análise territorial = SIG."
    },
    {
        "texto": "Um candidato observa que um mapa de rotas aéreas mostra trajetos curvos entre continentes, embora no planisfério parecessem mais longos que linhas retas.",
        "pergunta": "Essa situação pode ser explicada porque:",
        "alternativas": [
            "as aeronaves seguem linhas curvas apenas para evitar o uso de coordenadas.",
            "projeções planas preservam todos os trajetos e distâncias do globo terrestre.",
            "rotas aéreas não podem ser comparadas entre um globo e um planisfério.",
            "a menor distância no globo pode aparecer curva em uma projeção plana.",
            "a escala do mapa transforma qualquer linha reta real em uma curva obrigatória."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Em uma superfície esférica, grandes círculos podem aparecer como curvas em mapas planos.",
        "feedbackErro": "A representação plana distorce trajetos. Rotas mais curtas no globo podem não parecer retas no planisfério.",
        "dicaBanca": "Globo e planisfério representam trajetos de modos diferentes."
    },
    {
        "texto": "Um mapa de uma cidade usa escala 1:20.000. Uma avenida mede 8 cm no mapa.",
        "pergunta": "A extensão real aproximada da avenida é:",
        "alternativas": [
            "160 m.",
            "1,6 km.",
            "800 m.",
            "16 km.",
            "160 km."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. 1 cm representa 20.000 cm, ou 200 m. 8 cm representam 1.600 m, ou 1,6 km.",
        "feedbackErro": "Em 1:20.000, 1 cm = 20.000 cm = 200 m. Multiplicando por 8, obtém-se 1.600 m = 1,6 km.",
        "dicaBanca": "Faça a conversão final para metros ou quilômetros."
    },
    {
        "texto": "Uma representação mostra apenas a localização aproximada de uma comunidade, de um rio e de uma estrada, sem escala precisa, apenas para orientar visitantes.",
        "pergunta": "Essa representação é melhor caracterizada como:",
        "alternativas": [
            "planta cadastral.",
            "croqui.",
            "carta topográfica.",
            "mapa temático.",
            "projeção azimutal."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Croqui é desenho simplificado usado para orientação geral.",
        "feedbackErro": "A ausência de escala precisa e o objetivo de orientação aproximada indicam croqui.",
        "dicaBanca": "Desenho simples de orientação = croqui."
    },
    {
        "texto": "Um mapa de pequena escala representa todo o continente sul-americano. Nele, rios menores e estradas locais não aparecem.",
        "pergunta": "A melhor explicação é:",
        "alternativas": [
            "a escala pequena exige generalização e omissão de detalhes locais.",
            "a escala pequena aumenta o detalhamento e torna rios menores invisíveis.",
            "a projeção continental impede a representação de estradas e cursos d’água.",
            "a ausência de longitude elimina elementos locais do mapa sul-americano.",
            "o cartógrafo deve retirar rios e estradas de toda representação continental."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Em mapas de pequena escala, detalhes locais são omitidos para manter a legibilidade.",
        "feedbackErro": "A representação de área extensa exige simplificação e seleção de informações, processo chamado generalização cartográfica.",
        "dicaBanca": "Escala pequena mostra área grande e poucos detalhes."
    },
    {
        "texto": "Um mapa físico representa rios em azul, áreas urbanas em cinza e limites estaduais por linhas pretas.",
        "pergunta": "A interpretação correta desses elementos depende:",
        "alternativas": [
            "da legenda e das convenções cartográficas adotadas na representação.",
            "da latitude máxima do mapa, que fixa o significado de todas as cores.",
            "do horário local, que determina como rios e limites devem ser simbolizados.",
            "da escala apenas, pois ela explica cores, linhas e categorias temáticas.",
            "da orientação norte, que substitui a leitura dos símbolos apresentados."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Convenções e legenda orientam a leitura dos símbolos cartográficos.",
        "feedbackErro": "As cores e linhas precisam ser interpretadas conforme a legenda e as convenções usadas no mapa.",
        "dicaBanca": "Leia os símbolos com apoio da legenda."
    },
    {
        "texto": "Uma projeção é descrita como equivalente. Um aluno conclui que ela preserva simultaneamente áreas, formas, distâncias e ângulos em todo o mapa.",
        "pergunta": "A conclusão do aluno está:",
        "alternativas": [
            "correta, porque uma projeção equivalente elimina qualquer deformação.",
            "incorreta, pois equivalência preserva áreas, mas não todos os atributos.",
            "correta quando o mapa também preserva formas e distâncias continentais.",
            "incorreta, pois equivalência preserva somente direções e ângulos locais.",
            "correta se a projeção utilizar uma escala gráfica e orientação norte."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Projeção equivalente conserva áreas, mas não elimina todas as deformações.",
        "feedbackErro": "Equivalente não significa perfeita. Significa preservação das áreas proporcionais.",
        "dicaBanca": "Equivalente = áreas, não perfeição total."
    },
    {
        "texto": "Um mapa rodoviário usa linhas mais grossas para rodovias principais e linhas mais finas para vias locais.",
        "pergunta": "Esse recurso gráfico expressa:",
        "alternativas": [
            "diferença de altitude das vias, indicada pela largura dos traçados rodoviários.",
            "mudança de longitude entre rodovias principais e caminhos de circulação local.",
            "variação da escala do mapa em cada trecho representado pela linha rodoviária.",
            "hierarquia da rede viária por meio da variação de espessura das linhas.",
            "orientação magnética das estradas, definida pela intensidade do símbolo linear."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A variação de espessura das linhas pode indicar hierarquia ou intensidade.",
        "feedbackErro": "Linhas mais grossas e finas são recursos cartográficos para diferenciar importância, tipo ou intensidade de elementos lineares.",
        "dicaBanca": "Espessura, cor e padrão de linha também comunicam informação."
    },
    {
        "texto": "Uma imagem orbital apresenta pixels de 30 metros. Outra imagem da mesma área apresenta pixels de 1 metro.",
        "pergunta": "Comparando as imagens, a de 1 metro possui:",
        "alternativas": [
            "menor resolução espacial, porque cada pixel cobre uma área territorial menor.",
            "menor detalhamento, pois pixels pequenos reduzem a quantidade de informação.",
            "maior resolução temporal, mesmo sem diferença na frequência de obtenção.",
            "escala obrigatoriamente menor, independentemente do uso feito da imagem.",
            "maior resolução espacial, permitindo identificar objetos menores no terreno."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Pixel de 1 metro representa área menor do terreno e permite maior detalhamento.",
        "feedbackErro": "Quanto menor o tamanho do pixel no terreno, maior a resolução espacial da imagem.",
        "dicaBanca": "Pixel menor = mais detalhe espacial."
    },
    {
        "texto": "Um mapa representa a distribuição de chuvas no país por faixas de milímetros anuais. As cores indicam classes de precipitação.",
        "pergunta": "Trata-se de um mapa:",
        "alternativas": [
            "político, porque as cores sempre indicam fronteiras administrativas nacionais.",
            "topográfico, pois qualquer dado de chuva corresponde a curvas de nível.",
            "cadastral, por organizar lotes urbanos conforme faixas de precipitação.",
            "náutico, porque a chuva é representada por classes de milímetros anuais.",
            "temático, pois representa espacialmente um fenômeno específico: a precipitação."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Mapas de precipitação representam um tema específico, portanto são mapas temáticos.",
        "feedbackErro": "O mapa temático destaca um fenômeno, como chuva, população, renda, vegetação ou produção.",
        "dicaBanca": "Fenômeno específico no espaço = mapa temático."
    },
    {
        "texto": "Um professor pediu que os alunos identificassem se um ponto localizado a 0° de latitude está no Hemisfério Norte ou Sul.",
        "pergunta": "A resposta correta é:",
        "alternativas": [
            "no Hemisfério Norte, porque toda latitude zero pertence à metade setentrional.",
            "no Hemisfério Sul, pois o Equador integra somente a metade meridional.",
            "sobre Greenwich, já que latitude zero corresponde ao meridiano principal.",
            "sobre a Linha do Equador, limite entre os hemisférios Norte e Sul.",
            "no Polo Norte, ponto em que a latitude começa a ser medida no globo."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Latitude 0° corresponde à Linha do Equador, limite entre os hemisférios Norte e Sul.",
        "feedbackErro": "A latitude 0° não está ao norte nem ao sul: corresponde ao Equador.",
        "dicaBanca": "0° de latitude = Equador."
    }
];
