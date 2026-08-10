// Questões — Cartografia e Representação do Espaço
// Farol do Saber — versão revisada: 70 questões difíceis
// Conteúdo reconstruído exclusivamente a partir dos eixos presentes no banco-base.

const cartografiaGeografia = [
    {
        "id": 1,
        "subtopico": "Função da cartografia",
        "texto": "Uma secretaria municipal cruza a localização de escolas, unidades de saúde, comunidades ribeirinhas, estradas vicinais e áreas sujeitas a alagamento para decidir novas rotas de atendimento.",
        "pergunta": "A função cartográfica mais diretamente mobilizada nessa situação é:",
        "alternativas": [
            "converter informações sociais em coordenadas para substituir levantamentos feitos em campo.",
            "definir o valor estatístico das áreas mapeadas a partir da orientação e da escala escolhidas.",
            "organizar informações espaciais para comparar localizações e apoiar decisões territoriais.",
            "registrar a posição dos equipamentos públicos sem relacioná-los às condições de acesso.",
            "reunir feições visíveis do município para produzir uma imagem geral sem análise relacional."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. O mapa funciona como instrumento de análise espacial quando organiza localizações e relações úteis ao planejamento.",
        "feedbackErro": "❌ Se a alternativa escolhida tratou o mapa como simples registro ou substituto do campo, faltou reconhecer sua função analítica e comparativa.",
        "dicaBanca": "💡 Cartografia para planejamento envolve seleção, localização, comparação e decisão.",
        "dica": "Cartografia para planejamento envolve seleção, localização, comparação e decisão.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 2,
        "subtopico": "Tipos de representação",
        "texto": "Uma equipe possui quatro documentos: um desenho simples para chegar a uma comunidade, uma representação detalhada de lotes urbanos, uma carta com curvas de nível e um mapa político do estado.",
        "pergunta": "Qual associação diferencia corretamente essas representações?",
        "alternativas": [
            "croqui orienta de modo esquemático; planta detalha área pequena; carta topográfica representa relevo com precisão; mapa político sintetiza divisões territoriais.",
            "croqui e planta possuem precisão equivalente; carta topográfica substitui mapas temáticos; mapa político prioriza drenagem e relevo em relação à finalidade de cada documento.",
            "planta é adequada a continentes; croqui exige coordenadas precisas; carta topográfica representa fluxos; mapa político mede distâncias reais.",
            "croqui detalha lotes urbanos; planta representa grandes regiões; carta topográfica dispensa escala; mapa político prioriza altitude.",
            "carta topográfica é um desenho livre; mapa político funciona como planta; croqui mostra cadastro fundiário; planta prioriza relevo regional."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. A distinção depende do grau de precisão, da área representada e da finalidade de cada documento.",
        "feedbackErro": "❌ Se houve troca entre planta, carta e croqui, o erro foi confundir precisão técnica, extensão representada e finalidade de uso.",
        "dicaBanca": "💡 Planta = área pequena e detalhada; carta = técnica; croqui = esquemático.",
        "dica": "Planta = área pequena e detalhada; carta = técnica; croqui = esquemático.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 3,
        "subtopico": "Elementos do mapa",
        "texto": "Um mapa municipal apresenta título, legenda, escala, seta de orientação, fonte e data. O leitor precisa identificar o tema, interpretar símbolos, medir distâncias e avaliar a atualidade dos dados.",
        "pergunta": "A leitura correta associa essas funções, respectivamente, a:",
        "alternativas": [
            "legenda, título, orientação e escala gráfica.",
            "fonte, escala, título e orientação.",
            "orientação, fonte, legenda e projeção.",
            "título, legenda, escala e fonte/data.",
            "escala, legenda, fonte e coordenadas."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. Título indica o tema, legenda decodifica símbolos, escala relaciona medidas e fonte/data ajudam a avaliar os dados.",
        "feedbackErro": "❌ Se a alternativa trocou esses elementos, o problema foi atribuir a um componente uma função cartográfica diferente da sua.",
        "dicaBanca": "💡 Leia cada elemento pelo que ele responde: tema, símbolo, medida, direção e origem do dado.",
        "dica": "Leia cada elemento pelo que ele responde: tema, símbolo, medida, direção e origem do dado.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 4,
        "subtopico": "Legenda e convenções",
        "texto": "Em dois mapas diferentes, a cor vermelha representa desmatamento em um e alta renda no outro. Linhas mais grossas também assumem significados distintos conforme o tema.",
        "pergunta": "O exemplo demonstra que símbolos cartográficos devem ser interpretados principalmente por meio:",
        "alternativas": [
            "do denominador da escala, que define quais cores representam valores elevados.",
            "da legenda e das convenções adotadas para aquela representação.",
            "da projeção escolhida, que atribui sentido temático aos símbolos utilizados.",
            "da latitude da área mapeada, que modifica o significado das cores e linhas.",
            "da orientação do mapa, que estabelece a hierarquia visual dos fenômenos."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. O significado de cores, linhas e símbolos é definido no contexto da representação e explicitado pela legenda.",
        "feedbackErro": "❌ A alternativa incorreta tratou cor ou símbolo como se tivesse significado universal, independente do tema e da legenda.",
        "dicaBanca": "💡 Cor e símbolo não têm significado universal; confira a legenda.",
        "dica": "Cor e símbolo não têm significado universal; confira a legenda.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 5,
        "subtopico": "Orientação",
        "texto": "Em uma carta, a seta do norte aponta para o canto superior direito da folha. Um leitor gira a carta para facilitar o acompanhamento de uma estrada no terreno.",
        "pergunta": "Qual procedimento mantém a orientação correta da leitura?",
        "alternativas": [
            "reposicionar mentalmente o norte para o alto da folha, considerando a convenção gráfica superior à seta indicada no mapa.",
            "considerar a legenda como indicador de orientação, pois os símbolos mantêm posição fixa.",
            "usar a escala numérica como referência de direção depois que a carta for girada.",
            "tomar a margem superior como norte quando a representação apresentar coordenadas geográficas.",
            "seguir a direção indicada pela seta ou rosa dos ventos, mesmo que o norte não coincida com o alto da folha."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. A orientação é dada pelo elemento próprio do mapa, não pela posição física da folha.",
        "feedbackErro": "❌ Se você escolheu o alto da página como referência fixa, confundiu uma convenção frequente com a orientação indicada no documento.",
        "dicaBanca": "💡 Norte no alto é comum, mas a seta/rosa dos ventos é a referência efetiva.",
        "dica": "Norte no alto é comum, mas a seta/rosa dos ventos é a referência efetiva.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 6,
        "subtopico": "Cartografia crítica",
        "texto": "Dois planisférios usam projeções semelhantes, mas um centraliza a Europa e outro centraliza o Pacífico. A disposição muda a percepção de proximidade e de posição relativa dos continentes.",
        "pergunta": "A comparação permite concluir que:",
        "alternativas": [
            "o centro e o recorte do mapa são escolhas cartográficas que influenciam a leitura do espaço.",
            "o continente colocado no centro passa a possuir coordenadas geográficas mais precisas.",
            "o planisfério tecnicamente correto é aquele que mantém a Europa no centro para conservar a organização espacial.",
            "a centralização define qual projeção elimina distorções entre os continentes representados.",
            "a escolha do centro altera a escala real dos continentes e corrige diferenças de área."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. Mapas são construções seletivas: centro, recorte e projeção participam da forma como o espaço é percebido.",
        "feedbackErro": "❌ A resposta incorreta tratou o centro do mapa como propriedade natural ou como mecanismo de correção geométrica, o que ele não é.",
        "dicaBanca": "💡 Mapas não são neutros: centro e recorte também comunicam.",
        "dica": "Mapas não são neutros: centro e recorte também comunicam.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 7,
        "subtopico": "Fonte e data",
        "texto": "Um mapa de desmatamento apresenta classes de intensidade e boa legenda, mas omite o ano e a instituição responsável pelos dados.",
        "pergunta": "A principal limitação dessa representação é:",
        "alternativas": [
            "tornar inviável a leitura da orientação geográfica indicada no próprio mapa.",
            "alterar as coordenadas das feições representadas por falta de referência temporal.",
            "dificultar a avaliação da origem, da confiabilidade e da atualidade das informações.",
            "eliminar a possibilidade de comparar distâncias mesmo que exista escala gráfica.",
            "impedir a interpretação das cores, ainda que as classes estejam descritas na legenda."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Sem fonte e data, o leitor perde critérios essenciais para julgar procedência e atualidade do dado.",
        "feedbackErro": "❌ Se você escolheu um problema de escala, legenda ou orientação, confundiu a ausência de metadados com elementos que continuam presentes no mapa.",
        "dicaBanca": "💡 Fonte e data permitem avaliar procedência e atualidade.",
        "dica": "Fonte e data permitem avaliar procedência e atualidade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 8,
        "subtopico": "Mapa temático",
        "texto": "Uma representação divide o território em faixas de precipitação anual, expressas em milímetros, para comparar áreas mais e menos chuvosas.",
        "pergunta": "A classificação mais adequada dessa representação é:",
        "alternativas": [
            "planta cadastral, porque os valores podem ser associados a unidades territoriais.",
            "mapa político, porque as classes são distribuídas dentro de limites territoriais.",
            "mapa temático, porque espacializa um fenômeno específico.",
            "carta topográfica, porque a precipitação varia em função do relevo representado.",
            "mapa rodoviário, porque a legenda utiliza uma sequência ordenada de cores."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Quando a representação destaca um fenômeno específico, ela é temática.",
        "feedbackErro": "❌ A alternativa incorreta confundiu o tema representado com o tipo de documento cartográfico.",
        "dicaBanca": "💡 Fenômeno específico espacializado = mapa temático.",
        "dica": "Fenômeno específico espacializado = mapa temático.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 9,
        "subtopico": "Coordenadas geográficas",
        "texto": "Um ponto A está em 3°S e 52°W; um ponto B está em 3°N e 52°W. Eles compartilham a mesma longitude, mas ficam em lados opostos do Equador.",
        "pergunta": "A comparação correta entre os pontos é:",
        "alternativas": [
            "A e B estão no Hemisfério Norte porque compartilham a mesma longitude a oeste de Greenwich.",
            "A está no Sul e Oriental, enquanto B está no Norte e Ocidental.",
            "A e B estão no Hemisfério Sul porque a longitude oeste determina a posição hemisférica principal.",
            "A está no Hemisfério Sul e B no Norte; ambos estão no Hemisfério Ocidental.",
            "A está no Ocidental e B no Oriental porque a latitude muda de sinal entre os pontos."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. Latitude define norte/sul; longitude define leste/oeste.",
        "feedbackErro": "❌ O erro mais provável é misturar latitude e longitude ao identificar os hemisférios.",
        "dicaBanca": "💡 Latitude: N/S. Longitude: E/W.",
        "dica": "Latitude: N/S. Longitude: E/W.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 10,
        "subtopico": "Latitude e longitude",
        "texto": "Um estudante afirma que 20° de latitude medem a distância angular a partir de Greenwich e 40° de longitude medem a distância angular a partir do Equador.",
        "pergunta": "A correção conceitual adequada é:",
        "alternativas": [
            "latitude é medida a partir do Equador; longitude é medida a partir de Greenwich.",
            "latitude e longitude medem a mesma dimensão, mas em hemisférios diferentes.",
            "latitude e longitude usam Greenwich como referência, variando a direção indicada pela coordenada.",
            "longitude corresponde à altitude angular e latitude mede a posição leste-oeste.",
            "latitude usa os polos como origem, enquanto longitude usa o Equador como referência."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. O estudante inverteu as referências fundamentais das coordenadas geográficas.",
        "feedbackErro": "❌ Se a resposta escolhida manteve Greenwich associado à latitude ou Equador à longitude, a inversão conceitual permaneceu.",
        "dicaBanca": "💡 Equador = latitude; Greenwich = longitude.",
        "dica": "Equador = latitude; Greenwich = longitude.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 11,
        "subtopico": "Hemisférios",
        "texto": "Uma estação está exatamente em 0° de latitude e 40°W de longitude.",
        "pergunta": "A descrição espacial correta é:",
        "alternativas": [
            "está sobre a Linha do Equador e no Hemisfério Ocidental.",
            "está simultaneamente nos hemisférios Norte e Oriental devido à latitude nula.",
            "está no Hemisfério Norte porque a longitude oeste desloca o ponto para a metade setentrional.",
            "está no Hemisfério Sul porque 0° de latitude marca o início das latitudes meridionais.",
            "está sobre Greenwich e no limite entre os hemisférios Oriental e Ocidental."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. Latitude 0° corresponde ao Equador; 40°W indica posição a oeste de Greenwich.",
        "feedbackErro": "❌ A alternativa incorreta confundiu a linha de referência da latitude com a da longitude.",
        "dicaBanca": "💡 0° de latitude = Equador; W = Ocidental.",
        "dica": "0° de latitude = Equador; W = Ocidental.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 12,
        "subtopico": "Fusos horários",
        "texto": "Duas cidades localizam-se, teoricamente, a 45°W e 15°W. Considere a regra geral de 15° de longitude para cada hora.",
        "pergunta": "A diferença teórica aproximada entre seus horários é:",
        "alternativas": [
            "1 hora.",
            "4 horas.",
            "2 horas.",
            "30 minutos.",
            "3 horas."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. A diferença longitudinal é 30°; dividindo por 15°, obtêm-se 2 horas.",
        "feedbackErro": "❌ Se o valor encontrado não foi 2 horas, reveja a diferença entre as longitudes antes de aplicar a relação 15°/hora.",
        "dicaBanca": "💡 Diferença de longitude ÷ 15 = diferença horária teórica.",
        "dica": "Diferença de longitude ÷ 15 = diferença horária teórica.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 13,
        "subtopico": "Fusos horários",
        "texto": "Uma cidade X está a leste de uma cidade Y. Para o exercício, considere a regra teórica dos fusos, sem ajustes políticos.",
        "pergunta": "Em relação a Y, o horário de X tende a ser:",
        "alternativas": [
            "definido pela latitude, já que a diferença norte-sul regula a hora local.",
            "mais atrasado, porque o deslocamento para leste reduz a longitude utilizada no cálculo.",
            "igual, pois a longitude altera posição, mas não interfere nos fusos teóricos.",
            "mais atrasado quando ambas as cidades estão no mesmo hemisfério longitudinal.",
            "mais adiantado, porque o deslocamento para leste acrescenta horas."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. Pela regra geral, leste adianta e oeste atrasa.",
        "feedbackErro": "❌ A alternativa errada inverteu a relação entre sentido longitudinal e avanço do horário.",
        "dicaBanca": "💡 Leste adianta; oeste atrasa.",
        "dica": "Leste adianta; oeste atrasa.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 14,
        "subtopico": "Coordenadas e fusos",
        "texto": "Três pontos situam-se em 60°W, 45°W e 30°W, todos na mesma latitude. Considere o fuso teórico baseado na longitude.",
        "pergunta": "Qual relação horária é coerente?",
        "alternativas": [
            "o ponto em 45°W tende a estar 2 horas adiantado em relação ao ponto em 60°W.",
            "o ponto em 30°W tende a estar 2 horas adiantado em relação ao ponto em 60°W.",
            "os três pontos tendem a ter o mesmo horário por compartilharem a mesma latitude.",
            "o ponto em 30°W tende a estar 1 hora atrasado em relação ao ponto em 45°W.",
            "o ponto em 60°W tende a estar 2 horas adiantado em relação ao ponto em 30°W."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. De 60°W para 30°W há 30° em direção leste, equivalentes a 2 horas teóricas.",
        "feedbackErro": "❌ Se você usou a latitude ou inverteu leste/oeste, o cálculo dos fusos ficou conceitualmente errado.",
        "dicaBanca": "💡 Compare longitudes e identifique primeiro o sentido leste-oeste.",
        "dica": "Compare longitudes e identifique primeiro o sentido leste-oeste.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 15,
        "subtopico": "Coordenadas e clima",
        "texto": "Duas cidades aparecem no mesmo paralelo de um planisfério, mas uma se encontra em área montanhosa e registra temperaturas médias mais baixas.",
        "pergunta": "A interpretação cartográfica e geográfica mais adequada é:",
        "alternativas": [
            "a orientação do mapa determina qual das cidades recebe menor temperatura média.",
            "a escala do planisfério modifica a temperatura representada nas áreas de maior relevo.",
            "a altitude altera a latitude efetiva da cidade e desloca sua posição climática no mapa.",
            "a diferença térmica resulta da longitude, já que cidades no mesmo paralelo têm clima equivalente.",
            "a semelhança de latitude não elimina a influência da altitude sobre a temperatura."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. O mapa localiza, mas a explicação climática precisa considerar outros fatores além da latitude.",
        "feedbackErro": "❌ A alternativa incorreta transformou elementos cartográficos, como escala ou orientação, em causas climáticas.",
        "dicaBanca": "💡 Localização cartográfica não substitui a análise dos fatores geográficos.",
        "dica": "Localização cartográfica não substitui a análise dos fatores geográficos.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 16,
        "subtopico": "Coordenadas geográficas",
        "texto": "Um ponto P está em 12°N e 70°W; outro Q está em 12°N e 40°W.",
        "pergunta": "Qual informação pode ser afirmada diretamente a partir das coordenadas?",
        "alternativas": [
            "P e Q estão no Hemisfério Norte e Oriental, porque possuem latitude positiva.",
            "P e Q estão no Hemisfério Norte e Ocidental, mas Q situa-se mais a leste que P.",
            "P está no Sul e Q no Norte, pois a diferença de longitude modifica a posição latitudinal dos pontos.",
            "P está mais a leste que Q, pois 70°W representa maior valor angular.",
            "Q está mais ao sul que P porque sua longitude é numericamente menor."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. A latitude N mantém ambos no Norte; as longitudes W os colocam no Ocidental, e 40°W fica mais a leste que 70°W.",
        "feedbackErro": "❌ Se você interpretou o maior número de longitude como posição mais a leste, esqueceu que ambos estão a oeste de Greenwich.",
        "dicaBanca": "💡 Em longitudes W, valores menores estão mais próximos de Greenwich.",
        "dica": "Em longitudes W, valores menores estão mais próximos de Greenwich.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 17,
        "subtopico": "Escala numérica",
        "texto": "Em um mapa 1:250.000, a distância entre duas vilas mede 4 cm. O planejador também precisa saber se esse mapa é suficientemente detalhado para localizar lotes urbanos.",
        "pergunta": "Qual conclusão combina corretamente o cálculo da distância e a adequação dessa escala?",
        "alternativas": [
            "a distância real é 1 km, e a escala é adequada para representar lotes urbanos individualmente.",
            "a distância real é 10 km, e a escala é inadequada para detalhar lotes urbanos.",
            "a distância real é 25 km, e o denominador indica grande detalhamento cadastral.",
            "a distância real é 100 km, e a escala permite representar quadras com precisão elevada.",
            "a distância real é 4 km, e o nível de detalhe independe do denominador da escala."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. Em 1:250.000, 1 cm corresponde a 2,5 km; 4 cm = 10 km. Trata-se de escala pequena demais para lotes.",
        "feedbackErro": "❌ Se o cálculo ou a interpretação do detalhamento falhou, reveja a conversão e a relação entre denominador e escala.",
        "dicaBanca": "💡 Calcule e depois interprete: escala maior mostra mais detalhe.",
        "dica": "Calcule e depois interprete: escala maior mostra mais detalhe.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 18,
        "subtopico": "Escala numérica",
        "texto": "A distância real entre duas cidades é 60 km e o mapa usa escala 1:2.000.000.",
        "pergunta": "Qual medida deve aparecer no mapa?",
        "alternativas": [
            "3 cm.",
            "30 cm.",
            "6 cm.",
            "1,2 cm.",
            "12 cm."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. 60 km = 6.000.000 cm; dividindo por 2.000.000, obtêm-se 3 cm.",
        "feedbackErro": "❌ Se o valor não foi 3 cm, provavelmente houve erro na conversão de quilômetros para centímetros ou na divisão pelo denominador.",
        "dicaBanca": "💡 Converta a distância real para centímetros antes de dividir.",
        "dica": "Converta a distância real para centímetros antes de dividir.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 19,
        "subtopico": "Escala e detalhamento",
        "texto": "Um técnico precisa escolher entre 1:10.000, 1:50.000, 1:500.000 e 1:5.000.000 para mapear ruas, quadras e equipamentos de um bairro.",
        "pergunta": "A escolha mais adequada é:",
        "alternativas": [
            "1:5.000.000, porque a grande área representada aumenta a precisão local.",
            "1:500.000, porque o nível de detalhe depende do tema e não da escala.",
            "1:500.000, pois escalas menores ampliam objetos urbanos localizados.",
            "1:10.000, por ser a maior escala e permitir maior detalhamento.",
            "1:50.000, porque um denominador intermediário reduz a generalização ao mínimo."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. Entre as opções, 1:10.000 reduz menos a realidade e permite representar feições menores.",
        "feedbackErro": "❌ A alternativa incorreta confundiu denominador grande com escala grande ou separou indevidamente detalhe e escala.",
        "dicaBanca": "💡 Menor denominador = maior escala = mais detalhes.",
        "dica": "Menor denominador = maior escala = mais detalhes.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 20,
        "subtopico": "Comparação de escalas",
        "texto": "Um atlas contém um mapa-múndi em 1:80.000.000 e uma planta urbana em 1:5.000.",
        "pergunta": "Comparando as duas representações, qual relação entre escala, área e detalhe está correta?",
        "alternativas": [
            "a planta tem escala menor porque seu denominador é numericamente menor.",
            "as duas escalas são equivalentes, pois pertencem ao mesmo conjunto cartográfico.",
            "o mapa-múndi mostra mais detalhes porque utiliza um denominador maior.",
            "o mapa-múndi tem escala maior porque representa uma superfície muito mais extensa.",
            "a planta tem escala maior, representa área menor e mostra mais detalhes."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. Escala maior corresponde ao menor denominador e a maior detalhamento de uma área menor.",
        "feedbackErro": "❌ Se você associou área maior a escala maior, inverteu a relação entre redução, extensão e detalhe.",
        "dicaBanca": "💡 Área grande costuma exigir escala pequena; área pequena pode usar escala grande.",
        "dica": "Área grande costuma exigir escala pequena; área pequena pode usar escala grande.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 21,
        "subtopico": "Escala gráfica",
        "texto": "Um mapa impresso é reduzido para 70% do tamanho original. A escala numérica não é atualizada, mas a escala gráfica é reduzida junto com a imagem.",
        "pergunta": "Por que a escala gráfica continua funcional?",
        "alternativas": [
            "porque o redimensionamento converte a escala numérica em uma escala verbal equivalente.",
            "porque seu traço sofre o mesmo redimensionamento da representação e conserva a proporção visual.",
            "porque a escala gráfica mantém valores corretos mesmo que seja impressa em tamanho diferente do mapa.",
            "porque a escala gráfica substitui a necessidade de conferir medidas depois da redução da imagem.",
            "porque a escala gráfica recalcula as coordenadas e corrige as deformações da projeção utilizada."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. A barra gráfica acompanha fisicamente a ampliação ou redução, preservando a relação visual de medida.",
        "feedbackErro": "❌ A alternativa errada atribuiu à escala gráfica funções de projeção, coordenadas ou cálculo automático que ela não realiza.",
        "dicaBanca": "💡 Escala gráfica acompanha o redimensionamento; a numérica pode deixar de corresponder.",
        "dica": "Escala gráfica acompanha o redimensionamento; a numérica pode deixar de corresponder.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 22,
        "subtopico": "Escala verbal e numérica",
        "texto": "Uma legenda de escala informa: “1 cm representa 5 km”.",
        "pergunta": "A forma numérica equivalente é:",
        "alternativas": [
            "1:50.000.",
            "1:5.000.",
            "1:50.000.000.",
            "1:5.000.000.",
            "1:500.000."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. 5 km correspondem a 500.000 cm, portanto 1 cm no mapa equivale a 500.000 cm reais.",
        "feedbackErro": "❌ Se o denominador ficou diferente de 500.000, reveja a conversão de quilômetros para centímetros.",
        "dicaBanca": "💡 1 km = 100.000 cm.",
        "dica": "1 km = 100.000 cm.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 23,
        "subtopico": "Generalização cartográfica",
        "texto": "Um mapa de uso da terra passa de 1:50.000 para 1:5.000.000. Pequenas áreas agrícolas deixam de aparecer, embora continuem existindo no terreno.",
        "pergunta": "O processo cartográfico que explica essa mudança é:",
        "alternativas": [
            "reprojeção, pois a mudança de escala desloca as feições para outras coordenadas.",
            "generalização, pois a escala menor exige seleção e simplificação das feições.",
            "orientação, pois mapas de menor escala alteram a posição do norte na folha.",
            "equivalência, pois a área dos polígonos precisa ser preservada pela nova escala.",
            "georreferenciamento, pois elementos menores são retirados quando faltam coordenadas precisas."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. Ao representar área maior com menos detalhe, o cartógrafo seleciona, simplifica ou omite feições.",
        "feedbackErro": "❌ A resposta incorreta confundiu generalização com projeção, orientação ou referência espacial.",
        "dicaBanca": "💡 Escala menor = mais generalização e menos detalhe.",
        "dica": "Escala menor = mais generalização e menos detalhe.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 24,
        "subtopico": "Escala numérica",
        "texto": "Em uma planta 1:20.000, uma avenida mede 8 cm. O município pretende compará-la com outra avenida de 2 km reais.",
        "pergunta": "Qual conclusão é correta?",
        "alternativas": [
            "a avenida representada mede 1,6 km e é 400 m menor que a avenida de 2 km.",
            "a avenida representada mede 160 km e não pode ser comparada com a segunda.",
            "a avenida representada mede 160 m e é 1,84 km menor que a outra.",
            "a avenida representada mede 800 m e é 1,2 km menor que a outra.",
            "a avenida representada mede 16 km e supera a outra em 14 km."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. Em 1:20.000, 1 cm = 200 m; 8 cm = 1.600 m = 1,6 km.",
        "feedbackErro": "❌ Se a comparação ficou errada, revise a conversão de 20.000 cm para 200 m antes de multiplicar por 8.",
        "dicaBanca": "💡 Faça primeiro a distância real, depois compare os valores na mesma unidade.",
        "dica": "Faça primeiro a distância real, depois compare os valores na mesma unidade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 25,
        "subtopico": "Escala e planejamento",
        "texto": "Uma equipe possui dois mapas de uma mesma região: 1:25.000 e 1:250.000. Ela precisa identificar acessos a lotes e, em outro momento, visualizar a rede regional de cidades.",
        "pergunta": "O uso mais coerente é:",
        "alternativas": [
            "usar 1:250.000 para detalhes e 1:25.000 para generalizar a rede regional.",
            "usar 1:25.000 para detalhes locais e 1:250.000 para visão regional mais abrangente.",
            "usar ambos para o mesmo nível de detalhe, já que o tema cartográfico é idêntico.",
            "usar 1:250.000 para lotes, pois o denominador maior amplia feições pequenas.",
            "usar 1:25.000 para visão regional, pois a escala maior representa uma área mais extensa."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. Cada escala é adequada a um nível de detalhe e a uma extensão de análise.",
        "feedbackErro": "❌ A alternativa incorreta inverteu a relação entre escala, área representada e detalhamento.",
        "dicaBanca": "💡 Escolha a escala conforme o problema: detalhe local ou visão regional.",
        "dica": "Escolha a escala conforme o problema: detalhe local ou visão regional.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 26,
        "subtopico": "Escala e generalização",
        "texto": "Ao reduzir um mapa municipal para inserir em um atlas estadual, o cartógrafo mantém rodovias principais, mas remove ruas locais e pequenos cursos d’água.",
        "pergunta": "Essa decisão é tecnicamente coerente porque:",
        "alternativas": [
            "a generalização deve retirar elementos pequenos mesmo quando forem essenciais ao tema representado no produto cartográfico final.",
            "a mudança de escala converte vias locais em símbolos sem localização espacial precisa no produto cartográfico final.",
            "o atlas estadual perde capacidade de representar drenagem quando a escala diminui, mesmo em temas que dependem desse dado.",
            "a nova escala exige preservar informações relevantes e simplificar elementos de menor importância para o objetivo do mapa.",
            "a redução da escala exige eliminar feições lineares e conservar preferencialmente elementos pontuais."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. Generalização é seleção orientada pela escala e pela finalidade, não exclusão mecânica de qualquer feição pequena.",
        "feedbackErro": "❌ A alternativa errada tratou a generalização como regra automática, sem considerar relevância temática.",
        "dicaBanca": "💡 Generalização depende da escala e também do objetivo do mapa.",
        "dica": "Generalização depende da escala e também do objetivo do mapa.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 27,
        "subtopico": "Escala e medição",
        "texto": "Uma rota mede 7,5 cm em um mapa 1:400.000.",
        "pergunta": "A distância real aproximada é:",
        "alternativas": [
            "18,75 km.",
            "75 km.",
            "30 km.",
            "300 km.",
            "3 km."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Em 1:400.000, 1 cm = 4 km; 7,5 cm = 30 km.",
        "feedbackErro": "❌ Se o resultado foi diferente, verifique a equivalência 400.000 cm = 4 km antes da multiplicação.",
        "dicaBanca": "💡 Transforme o denominador em quilômetros por centímetro.",
        "dica": "Transforme o denominador em quilômetros por centímetro.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 28,
        "subtopico": "Escala numérica",
        "texto": "Uma distância de 24 km precisa ocupar 6 cm em um mapa.",
        "pergunta": "Qual escala numérica atende a essa condição?",
        "alternativas": [
            "1:40.000.",
            "1:240.000.",
            "1:4.000.000.",
            "1:400.000.",
            "1:144.000."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. 24 km = 2.400.000 cm; dividindo por 6 cm, o denominador é 400.000.",
        "feedbackErro": "❌ Se o denominador não foi 400.000, reveja a conversão da distância real e a divisão pela distância no mapa.",
        "dicaBanca": "💡 Escala = distância real / distância no mapa, usando a mesma unidade.",
        "dica": "Escala = distância real / distância no mapa, usando a mesma unidade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 29,
        "subtopico": "Escala e escolha cartográfica",
        "texto": "Uma pesquisa precisa comparar a distribuição de grandes rios em todo o Brasil e, separadamente, localizar bocas de lobo em um bairro sujeito a alagamentos.",
        "pergunta": "A escolha de escala mais coerente é:",
        "alternativas": [
            "usar escala menor no bairro para representar com mais precisão os equipamentos de drenagem.",
            "usar escala maior nos dois casos, pois esse nível de detalhe favorece tanto a análise nacional quanto a local.",
            "usar escala menor no mapa nacional e no bairro, porque ambos representam fenômenos espaciais.",
            "usar a mesma escala nos dois mapas para manter a comparabilidade cartográfica.",
            "usar escala menor no mapa nacional e escala maior no mapa do bairro."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. O mapa nacional precisa abranger grande área; o mapa do bairro precisa representar detalhes pequenos.",
        "feedbackErro": "❌ A alternativa incorreta ignorou que diferentes problemas exigem diferentes níveis de redução e detalhe.",
        "dicaBanca": "💡 Escala deve ser escolhida conforme extensão da área e detalhe necessário.",
        "dica": "Escala deve ser escolhida conforme extensão da área e detalhe necessário.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 30,
        "subtopico": "Projeções cartográficas",
        "texto": "Um planisfério preserva ângulos e formas locais, favorecendo rumos de navegação, mas amplia muito as áreas próximas aos polos.",
        "pergunta": "A descrição corresponde à projeção:",
        "alternativas": [
            "projeção conforme de Mercator, que preserva ângulos e formas locais.",
            "projeção cônica, mais associada a faixas continentais de médias latitudes.",
            "projeção afilática, que busca compromisso visual entre diferentes deformações.",
            "projeção azimutal polar, centrada em um ponto e adequada a áreas polares.",
            "projeção equivalente, que prioriza a proporcionalidade das áreas continentais."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. Mercator é conforme: preserva ângulos localmente, mas distorce áreas em altas latitudes.",
        "feedbackErro": "❌ Se você marcou uma projeção equivalente, confundiu preservação de formas/ângulos com preservação de áreas.",
        "dicaBanca": "💡 Mercator: conformidade e forte distorção de áreas em altas latitudes.",
        "dica": "Mercator: conformidade e forte distorção de áreas em altas latitudes.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 31,
        "subtopico": "Projeções cartográficas",
        "texto": "Um atlas precisa comparar visualmente a extensão territorial dos continentes sem alterar a proporcionalidade de suas áreas.",
        "pergunta": "A propriedade que deve ser priorizada é:",
        "alternativas": [
            "centralização europeia, pois definiria a referência principal de comparação territorial.",
            "equidistância, pois manteria distâncias como prioridade da representação.",
            "generalização cartográfica, pois simplificaria as formas para comparar os continentes.",
            "conformidade, pois prioriza a preservação de ângulos e formas locais.",
            "equivalência, pois mantém proporcionais as áreas representadas."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. Projeções equivalentes preservam a proporção das áreas, embora possam deformar formas.",
        "feedbackErro": "❌ A alternativa incorreta confundiu preservação de área com outras propriedades ou escolhas de composição.",
        "dicaBanca": "💡 Área proporcional preservada = equivalência.",
        "dica": "Área proporcional preservada = equivalência.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 32,
        "subtopico": "Projeções cartográficas",
        "texto": "Um aluno afirma que, com software moderno, é possível produzir um planisfério que preserve ao mesmo tempo áreas, formas, distâncias e direções em toda a superfície.",
        "pergunta": "A avaliação correta é:",
        "alternativas": [
            "a afirmação é correta se o mapa usar escala pequena e resolução digital elevada.",
            "a afirmação é correta quando a projeção combina equivalência e conformidade em escala global.",
            "a afirmação é incorreta, pois a passagem da superfície curva para o plano implica deformações.",
            "a afirmação é incorreta quando o mapa deixa de apresentar escala gráfica no planisfério descrito.",
            "a afirmação é correta se a representação for centralizada no Equador no planisfério descrito."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Não há planisfério sem deformação; cada projeção prioriza determinadas propriedades.",
        "feedbackErro": "❌ A alternativa errada confundiu tecnologia de produção com a impossibilidade geométrica de planificar a esfera sem distorção.",
        "dicaBanca": "💡 Nenhuma projeção plana preserva tudo ao mesmo tempo.",
        "dica": "Nenhuma projeção plana preserva tudo ao mesmo tempo.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 33,
        "subtopico": "Projeção azimutal",
        "texto": "Uma representação polar coloca o Polo Norte no centro, com meridianos irradiando e paralelos formando círculos concêntricos.",
        "pergunta": "Quanto à superfície geométrica, a projeção é mais provavelmente:",
        "alternativas": [
            "cilíndrica equatorial.",
            "azimutal ou plana.",
            "cilíndrica equivalente.",
            "policônica oblíqua.",
            "cônica de médias latitudes."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. Projeções azimutais são apropriadas para representações centradas em um ponto, inclusive regiões polares.",
        "feedbackErro": "❌ Se você escolheu cone ou cilindro, desconsidere o nome do tema e observe a geometria descrita: plano tangente e centro único.",
        "dicaBanca": "💡 Mapa polar centrado em um ponto sugere projeção azimutal.",
        "dica": "Mapa polar centrado em um ponto sugere projeção azimutal.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 34,
        "subtopico": "Projeção cônica",
        "texto": "Um cartógrafo precisa representar uma extensa faixa continental situada em médias latitudes e alongada no sentido leste-oeste. Ele escolhe um modelo baseado em cone.",
        "pergunta": "A classificação e a adequação descritas correspondem a:",
        "alternativas": [
            "projeção cilíndrica, escolhida porque o cone preserva áreas tropicais.",
            "projeção conforme, pois a superfície cônica preserva formas e ângulos por definição geométrica.",
            "projeção equivalente, definida pelo formato geométrico cônico.",
            "projeção azimutal, adequada por manter o polo no centro do mapa.",
            "projeção cônica, apropriada a certas áreas de médias latitudes."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. A classificação geométrica é cônica, comum em representações de faixas de médias latitudes.",
        "feedbackErro": "❌ A alternativa errada confundiu superfície geométrica com propriedade cartográfica, que são classificações diferentes.",
        "dicaBanca": "💡 Cone = cônica; propriedade preservada é outra classificação.",
        "dica": "Cone = cônica; propriedade preservada é outra classificação.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 35,
        "subtopico": "Projeções e finalidade",
        "texto": "Três objetivos são propostos: I) navegação com preservação local de ângulos; II) comparação proporcional das áreas continentais; III) representação centrada no Polo Norte.",
        "pergunta": "A associação conceitual mais adequada é:",
        "alternativas": [
            "I — projeção cônica; II — projeção azimutal; III — projeção equivalente.",
            "I — projeção conforme; II — projeção equivalente; III — projeção azimutal.",
            "I — projeção azimutal; II — projeção cônica; III — projeção conforme, associando cada objetivo a uma propriedade distinta.",
            "I — projeção equivalente; II — projeção conforme; III — projeção cônica.",
            "I — projeção conforme; II — projeção azimutal; III — projeção cilíndrica."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. A finalidade determina a propriedade ou o tipo de projeção mais apropriado.",
        "feedbackErro": "❌ Se a associação falhou, reveja a diferença entre propriedade preservada e superfície geométrica.",
        "dicaBanca": "💡 Ângulos = conforme; áreas = equivalente; centro polar = azimutal.",
        "dica": "Ângulos = conforme; áreas = equivalente; centro polar = azimutal.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 36,
        "subtopico": "Projeções e distorções",
        "texto": "Dois mapas-múndi representam a Groenlândia com tamanhos visuais muito diferentes. Um deles é Mercator; o outro prioriza equivalência de áreas.",
        "pergunta": "A diferença principal decorre do fato de que:",
        "alternativas": [
            "Mercator amplia visualmente áreas de altas latitudes, enquanto uma projeção equivalente preserva proporções de área.",
            "a projeção equivalente reduz as principais deformações, enquanto Mercator concentra distorções nas longitudes.",
            "Mercator preserva áreas e a projeção equivalente preserva formas locais em altas latitudes.",
            "Mercator reduz a Groenlândia por estar distante do Equador, enquanto a equivalente a amplia.",
            "o tamanho visual depende principalmente da legenda, enquanto a propriedade geométrica da projeção tem efeito secundário."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. A diferença expressa escolhas distintas sobre quais propriedades preservar.",
        "feedbackErro": "❌ A resposta errada inverteu as propriedades ou atribuiu a legenda um efeito que é próprio da projeção.",
        "dicaBanca": "💡 Compare o que cada projeção prioriza e onde as distorções aumentam.",
        "dica": "Compare o que cada projeção prioriza e onde as distorções aumentam.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 37,
        "subtopico": "Cartografia crítica e projeções",
        "texto": "Um planisfério equivalente é escolhido para uma aula sobre comparação territorial. O professor alerta que formas podem parecer deformadas.",
        "pergunta": "Esse alerta é coerente porque:",
        "alternativas": [
            "a equivalência é uma técnica de generalização e não uma propriedade de projeção.",
            "a deformação ocorre porque a escala gráfica substitui a escala numérica.",
            "a equivalência depende da orientação norte e deixa de funcionar em planisférios completos.",
            "projeções equivalentes preservam formas e distâncias, mas alteram a área dos continentes.",
            "preservar áreas não significa preservar simultaneamente formas, ângulos e distâncias."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. Uma projeção pode preservar uma propriedade e sacrificar outras.",
        "feedbackErro": "❌ Se você tratou “equivalente” como “sem deformação”, confundiu preservação de área com perfeição geométrica.",
        "dicaBanca": "💡 Equivalente = área; outras propriedades podem sofrer distorção.",
        "dica": "Equivalente = área; outras propriedades podem sofrer distorção.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 38,
        "subtopico": "Rotas e projeções",
        "texto": "Em um globo, a rota mais curta entre duas cidades distantes segue um grande círculo. No planisfério, esse trajeto aparece curvo.",
        "pergunta": "A explicação correta é:",
        "alternativas": [
            "o trajeto curvo indica uma falha de orientação do planisfério durante a representação da rota intercontinental.",
            "a escala numérica converte linhas retas reais em curvas quando a distância aumenta.",
            "grandes círculos são propriedades de cartas topográficas e não do globo.",
            "a projeção plana pode representar como curva uma rota geodésica curta na superfície esférica.",
            "a rota fica curva porque aviões evitam meridianos e paralelos durante voos intercontinentais."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. A forma visual da rota muda porque uma superfície esférica é projetada em um plano.",
        "feedbackErro": "❌ A alternativa incorreta atribuiu a curvatura a escala, orientação ou decisão da aeronave em vez da projeção.",
        "dicaBanca": "💡 Globo e planisfério podem representar o mesmo trajeto com formas diferentes.",
        "dica": "Globo e planisfério podem representar o mesmo trajeto com formas diferentes.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 39,
        "subtopico": "Escolha de projeção",
        "texto": "Uma equipe precisa produzir dois mapas: um para comparar a área dos países e outro para orientar rumos de navegação preservando ângulos locais.",
        "pergunta": "A escolha mais coerente é utilizar, respectivamente:",
        "alternativas": [
            "uma projeção conforme nos dois casos, pois ela preserva área e ângulo.",
            "uma projeção cônica e uma projeção azimutal.",
            "uma projeção conforme e uma projeção equivalente.",
            "uma projeção equivalente e uma projeção conforme.",
            "uma projeção azimutal e uma projeção equivalente."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. Finalidades distintas exigem priorizar propriedades cartográficas diferentes.",
        "feedbackErro": "❌ Se você escolheu a mesma propriedade para os dois objetivos, confundiu comparação de áreas com preservação de ângulos.",
        "dicaBanca": "💡 Antes de escolher a projeção, identifique a propriedade que precisa ser preservada.",
        "dica": "Antes de escolher a projeção, identifique a propriedade que precisa ser preservada.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 40,
        "subtopico": "Mapa coroplético",
        "texto": "Um mapa coroplético representa percentuais de domicílios com abastecimento de água por município. As tonalidades foram agrupadas em cinco classes.",
        "pergunta": "Para interpretar corretamente o mapa, é indispensável considerar:",
        "alternativas": [
            "a orientação norte como fator que define a intensidade das tonalidades.",
            "a escala gráfica como substituta da informação estatística da legenda.",
            "a legenda, os intervalos de classe e o fato de o dado ser percentual.",
            "o tamanho territorial dos municípios como medida direta da proporção representada.",
            "a longitude dos municípios para comparar classes de abastecimento."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Em mapas coropléticos, unidade estatística e classes são essenciais para interpretar a cor.",
        "feedbackErro": "❌ A alternativa errada confundiu elementos de localização ou medida com a natureza do dado temático.",
        "dicaBanca": "💡 Pergunte: o que a cor mede e como as classes foram definidas?",
        "dica": "Pergunte: o que a cor mede e como as classes foram definidas?",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 41,
        "subtopico": "Mapas de fluxo",
        "texto": "Setas conectam regiões e variam de espessura conforme o número de migrantes entre elas.",
        "pergunta": "A simbologia comunica, ao mesmo tempo:",
        "alternativas": [
            "posição absoluta e escala numérica dos deslocamentos representados.",
            "direção e intensidade de um fluxo espacial.",
            "área territorial e densidade demográfica das regiões ligadas.",
            "altitude e declividade do terreno percorrido pelos migrantes.",
            "categoria de uso do solo e hierarquia administrativa das regiões."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. A seta indica sentido, e a espessura pode expressar magnitude do fluxo.",
        "feedbackErro": "❌ Se a resposta escolhida tratou a seta como símbolo de fenômeno fixo, faltou reconhecer sua função de representar movimento.",
        "dicaBanca": "💡 Seta = movimento; espessura pode indicar intensidade.",
        "dica": "Seta = movimento; espessura pode indicar intensidade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 42,
        "subtopico": "Símbolos proporcionais",
        "texto": "Um mapa coloca círculos sobre cidades; o diâmetro dos círculos aumenta conforme o volume de produção industrial.",
        "pergunta": "A técnica empregada é adequada porque:",
        "alternativas": [
            "o tamanho do símbolo varia para comunicar diferenças quantitativas entre pontos.",
            "o diâmetro representa classes qualitativas sem relação com magnitude numérica.",
            "o símbolo proporcional preserva a área real da cidade representada no mapa.",
            "a cor do símbolo determina a direção dos fluxos industriais entre as cidades.",
            "a posição do círculo substitui a necessidade de coordenadas ou referência espacial."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. Símbolos proporcionais variam de tamanho conforme a magnitude do fenômeno.",
        "feedbackErro": "❌ A alternativa incorreta confundiu tamanho do símbolo com direção, área real ou categoria qualitativa.",
        "dicaBanca": "💡 Tamanho variável do símbolo = intensidade quantitativa.",
        "dica": "Tamanho variável do símbolo = intensidade quantitativa.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 43,
        "subtopico": "Hipsometria",
        "texto": "Um mapa físico utiliza verde, amarelo, laranja e marrom para representar faixas crescentes de altitude.",
        "pergunta": "O recurso empregado é:",
        "alternativas": [
            "mapa de fluxos por classes de deslocamento vertical.",
            "representação hipsométrica por classes de altitude.",
            "curva batimétrica usada para indicar profundidades continentais.",
            "símbolo proporcional aplicado às unidades de relevo.",
            "projeção equivalente para preservar a altura real do terreno."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. Hipsometria utiliza classes ou cores para representar altitude.",
        "feedbackErro": "❌ A alternativa errada confundiu altitude com fluxo, projeção ou profundidade.",
        "dicaBanca": "💡 Hipsometria = altitude.",
        "dica": "Hipsometria = altitude.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 44,
        "subtopico": "Hierarquia visual",
        "texto": "Em um mapa rodoviário, autoestradas aparecem com linhas grossas, estradas regionais com linhas médias e vias locais com linhas finas.",
        "pergunta": "A variação de espessura expressa:",
        "alternativas": [
            "diferença de altitude entre as estradas representadas.",
            "posição longitudinal das vias em relação ao meridiano central.",
            "hierarquia da rede viária por meio de uma variável visual linear.",
            "distância real percorrida em cada rodovia, independentemente da legenda.",
            "mudança da escala cartográfica em cada trecho da rede."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. A espessura de linhas pode comunicar importância, classe ou intensidade de elementos lineares.",
        "feedbackErro": "❌ A alternativa incorreta atribuiu à espessura um significado geométrico ou locacional que não é indicado pelo tema.",
        "dicaBanca": "💡 Espessura de linha pode representar hierarquia ou intensidade.",
        "dica": "Espessura de linha pode representar hierarquia ou intensidade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 45,
        "subtopico": "Valores absolutos e relativos",
        "texto": "Um mapa mostra população total por município. Outro mostra densidade demográfica. Um município muito populoso aparece discreto no segundo mapa porque possui grande área territorial.",
        "pergunta": "A diferença entre os mapas ocorre porque:",
        "alternativas": [
            "a legenda do mapa absoluto transforma números totais em proporções territoriais.",
            "população absoluta depende da longitude, enquanto densidade depende da latitude municipal.",
            "o mapa de densidade utiliza escala maior e por isso reduz o valor dos municípios extensos.",
            "densidade demográfica corrige problemas de fonte existentes no mapa de população total.",
            "população absoluta e densidade medem dimensões diferentes do fenômeno demográfico."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. Total de habitantes e habitantes por unidade de área podem produzir padrões espaciais diferentes.",
        "feedbackErro": "❌ Se você escolheu escala, latitude ou legenda como causa, confundiu a medida estatística com elementos cartográficos da representação.",
        "dicaBanca": "💡 Absoluto, taxa, proporção e densidade não são medidas equivalentes.",
        "dica": "Absoluto, taxa, proporção e densidade não são medidas equivalentes.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 46,
        "subtopico": "Classes temáticas",
        "texto": "Dois mapas coropléticos usam os mesmos dados municipais, mas um divide os valores em três classes e outro em sete classes.",
        "pergunta": "Mesmo sem alterar os dados originais, essa escolha pode:",
        "alternativas": [
            "alterar as coordenadas geográficas dos municípios representados.",
            "modificar a área territorial real das unidades do mapa.",
            "corrigir distorções da projeção por aumentar o número de intervalos.",
            "transformar dados relativos em absolutos durante a classificação.",
            "mudar a percepção visual dos contrastes espaciais entre municípios."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. A forma de classificar valores influencia a leitura visual do padrão espacial.",
        "feedbackErro": "❌ A alternativa incorreta atribuiu às classes efeitos geométricos ou estatísticos que elas não produzem.",
        "dicaBanca": "💡 Classes são escolhas de representação e afetam a percepção do padrão.",
        "dica": "Classes são escolhas de representação e afetam a percepção do padrão.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 47,
        "subtopico": "Fonte e legenda",
        "texto": "Um mapa de renda usa cores bem definidas e fonte confiável, mas a legenda não informa se os valores são renda média, mediana ou percentual de domicílios por faixa.",
        "pergunta": "Qual problema interpretativo permanece?",
        "alternativas": [
            "não é possível verificar a instituição responsável, mesmo que a fonte esteja identificada.",
            "não é possível identificar a projeção, embora essa informação não defina a variável estatística.",
            "não é possível saber exatamente qual variável estatística as cores representam.",
            "não é possível medir distâncias corretamente porque a variável estatística não foi especificada.",
            "não é possível determinar a posição norte-sul dos municípios a partir das cores apresentadas."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Fonte confiável não substitui a definição clara da variável representada na legenda.",
        "feedbackErro": "❌ A alternativa errada apontou ausência de elementos que o enunciado não colocou em dúvida.",
        "dicaBanca": "💡 Legenda precisa explicar o significado estatístico, não apenas as cores.",
        "dica": "Legenda precisa explicar o significado estatístico, não apenas as cores.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 48,
        "subtopico": "Escolha de simbologia",
        "texto": "Uma equipe deseja representar: I) volume de produção em cidades; II) deslocamentos entre regiões; III) percentual de cobertura vegetal por município.",
        "pergunta": "A associação mais adequada é:",
        "alternativas": [
            "I — hipsometria; II — símbolos proporcionais; III — projeção equivalente.",
            "I — mapa coroplético; II — símbolos proporcionais; III — curvas de nível.",
            "I — setas de fluxo; II — hipsometria; III — símbolos proporcionais.",
            "I — símbolos proporcionais; II — setas de fluxo; III — mapa coroplético.",
            "I — curvas de nível; II — mapa coroplético; III — setas de fluxo."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. Cada variável pede uma forma de representação compatível com sua natureza espacial.",
        "feedbackErro": "❌ Se a associação falhou, reveja a diferença entre fenômenos pontuais, fluxos e valores relativos por área.",
        "dicaBanca": "💡 Escolha o símbolo conforme o tipo de dado e a geometria do fenômeno.",
        "dica": "Escolha o símbolo conforme o tipo de dado e a geometria do fenômeno.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 49,
        "subtopico": "Leitura temática",
        "texto": "Um mapa usa tons escuros para valores maiores, mas dois municípios sem dados aparecem em branco. Um aluno interpreta branco como valor zero.",
        "pergunta": "A atitude cartograficamente correta é:",
        "alternativas": [
            "usar a escala do mapa para estimar o valor dos municípios sem preenchimento.",
            "comparar a longitude dos municípios para inferir a classe ausente.",
            "assumir valor zero porque áreas sem cor representam ausência do fenômeno.",
            "consultar a legenda para distinguir ausência de dado de valor numérico nulo.",
            "atribuir a menor classe aos municípios em branco para manter a sequência visual."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. Sem legenda, branco pode significar ausência de dado, categoria específica ou outra convenção.",
        "feedbackErro": "❌ A alternativa errada transformou uma escolha visual em valor estatístico sem verificar a convenção usada.",
        "dicaBanca": "💡 Cor não preenchida também precisa de legenda.",
        "dica": "Cor não preenchida também precisa de legenda.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 50,
        "subtopico": "Curvas de nível",
        "texto": "Em uma carta topográfica, as curvas aparecem muito próximas na encosta A e bastante afastadas na encosta B.",
        "pergunta": "O que o espaçamento das curvas permite concluir sobre as duas encostas?",
        "alternativas": [
            "A apresenta menor altitude absoluta que B.",
            "A apresenta maior declividade que B.",
            "B apresenta maior declividade porque as curvas estão mais afastadas.",
            "B não apresenta variação altimétrica porque as curvas estão afastadas.",
            "A e B têm a mesma declividade porque as curvas representam altitudes iguais."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. Maior variação de altitude em pequena distância horizontal produz curvas mais próximas e encosta mais íngreme.",
        "feedbackErro": "❌ Se você confundiu espaçamento com altitude absoluta, lembre que proximidade das curvas indica declividade, não necessariamente maior altitude.",
        "dicaBanca": "💡 Curvas próximas = maior declividade.",
        "dica": "Curvas próximas = maior declividade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 51,
        "subtopico": "Curvas de nível",
        "texto": "Duas curvas consecutivas de uma carta indicam 100 m e 120 m. Outras curvas seguem o mesmo intervalo vertical.",
        "pergunta": "A equidistância vertical da carta é:",
        "alternativas": [
            "100 m.",
            "20 m.",
            "220 m.",
            "120 m.",
            "10 m."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. Equidistância é a diferença de altitude entre curvas consecutivas: 120 − 100 = 20 m.",
        "feedbackErro": "❌ Se você somou as cotas ou usou uma delas isoladamente, não calculou o intervalo vertical entre curvas sucessivas.",
        "dicaBanca": "💡 Equidistância = diferença vertical entre curvas consecutivas.",
        "dica": "Equidistância = diferença vertical entre curvas consecutivas.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 52,
        "subtopico": "Curvas de nível",
        "texto": "Uma carta apresenta linhas que unem pontos de mesma altitude. Em uma encosta comum, essas linhas aparecem contínuas e não se cruzam.",
        "pergunta": "Essas linhas são:",
        "alternativas": [
            "linhas de escala.",
            "isóbaras.",
            "curvas de nível.",
            "setas de fluxo.",
            "meridianos."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Curvas de nível representam pontos de igual altitude e permitem interpretar formas e declividades do relevo.",
        "feedbackErro": "❌ A alternativa errada confundiu uma isolinha altimétrica com linhas de pressão, coordenadas ou fluxos.",
        "dicaBanca": "💡 Curva de nível = mesma altitude.",
        "dica": "Curva de nível = mesma altitude.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 53,
        "subtopico": "Sensoriamento remoto",
        "texto": "Um órgão acompanha queimadas, expansão urbana e alteração de corpos d’água por imagens obtidas por sensores instalados em satélites e drones.",
        "pergunta": "A etapa de obtenção dessas informações corresponde principalmente ao:",
        "alternativas": [
            "sensoriamento remoto.",
            "sistema de coordenadas geográficas.",
            "desenho de croquis de campo.",
            "cálculo de escala cartográfica.",
            "georreferenciamento cadastral."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. Sensoriamento remoto obtém informações da superfície à distância por sensores.",
        "feedbackErro": "❌ Se você escolheu SIG ou georreferenciamento, observe que o enunciado destaca a aquisição de imagens por sensores.",
        "dicaBanca": "💡 Sensores em satélite, avião ou drone = sensoriamento remoto.",
        "dica": "Sensores em satélite, avião ou drone = sensoriamento remoto.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 54,
        "subtopico": "SIG",
        "texto": "Um sistema reúne camadas de rios, estradas, escolas, relevo, áreas de risco e densidade populacional, permitindo consultas e cruzamentos espaciais.",
        "pergunta": "A tecnologia descrita é:",
        "alternativas": [
            "sensoriamento remoto, por armazenar e cruzar bancos de dados municipais.",
            "escala gráfica, por relacionar dados ambientais e urbanos em uma mesma base.",
            "projeção cartográfica, por combinar feições físicas e sociais em camadas.",
            "GNSS, por produzir mapas temáticos diretamente a partir dos sinais recebidos de satélites.",
            "SIG, por integrar e analisar camadas de dados espaciais."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. O SIG organiza, cruza e analisa diferentes camadas georreferenciadas.",
        "feedbackErro": "❌ A resposta errada confundiu aquisição de posição ou imagem com integração e análise espacial de dados.",
        "dicaBanca": "💡 Camadas + banco de dados + análise espacial = SIG.",
        "dica": "Camadas + banco de dados + análise espacial = SIG.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 55,
        "subtopico": "GNSS/GPS",
        "texto": "Uma equipe de campo registra a posição de pontes e escolas por receptores que captam sinais de satélites de navegação.",
        "pergunta": "A tecnologia empregada para posicionamento é:",
        "alternativas": [
            "projeção azimutal, porque satélites utilizam referências polares.",
            "sensoriamento remoto, porque o receptor observa diretamente a superfície.",
            "escala numérica, porque a posição depende da relação entre mapa e terreno.",
            "GNSS/GPS, utilizado para obter posicionamento por sinais de satélites.",
            "SIG, porque as coordenadas são produzidas pela análise das camadas espaciais armazenadas no sistema."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. GNSS, incluindo GPS, é utilizado para obter posicionamento por sinais de satélites.",
        "feedbackErro": "❌ Se você marcou SIG, lembre que o SIG pode armazenar a posição, mas o receptor GNSS é que a obtém no campo.",
        "dicaBanca": "💡 GNSS/GPS = posicionamento por satélite.",
        "dica": "GNSS/GPS = posicionamento por satélite.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 56,
        "subtopico": "Geotecnologias integradas",
        "texto": "Para mapear desmatamento e depois verificar pontos específicos no campo, uma equipe usa imagens orbitais, registra coordenadas com receptor e cruza tudo com estradas e limites territoriais em um sistema digital.",
        "pergunta": "A sequência de tecnologias mais coerente é:",
        "alternativas": [
            "projeção cartográfica para observar, escala para posicionar e SIG para receber sinais de satélite.",
            "GNSS para produzir imagens orbitais, SIG para definir projeções e sensoriamento remoto para medir distâncias.",
            "sensoriamento remoto para posicionar, GNSS para analisar camadas e SIG para registrar imagens.",
            "sensoriamento remoto para observar, GNSS para posicionar e SIG para integrar e analisar.",
            "SIG para captar imagens, sensoriamento remoto para calcular coordenadas e GNSS para classificar camadas."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. As três tecnologias são complementares e cumprem funções diferentes no fluxo de trabalho.",
        "feedbackErro": "❌ A alternativa incorreta trocou as funções de aquisição de imagem, posicionamento e análise de camadas.",
        "dicaBanca": "💡 Observe → sensoriamento remoto; posicione → GNSS; integre/análise → SIG.",
        "dica": "Observe → sensoriamento remoto; posicione → GNSS; integre/análise → SIG.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 57,
        "subtopico": "SIG aplicado",
        "texto": "Um município quer mapear risco de inundação combinando relevo, distância dos rios, ocupação urbana e histórico de cheias.",
        "pergunta": "A ferramenta mais adequada para integrar essas variáveis é:",
        "alternativas": [
            "SIG/geoprocessamento, por permitir cruzamento de camadas espaciais.",
            "GNSS isolado, pois a posição dos pontos é suficiente para estimar o risco territorial.",
            "escala verbal, porque integra informações de distância e ocupação do solo.",
            "croqui, porque simplifica os fatores e dispensa uma base espacial comum.",
            "projeção de Mercator, por preservar formas locais e reunir dados ambientais."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. O problema exige combinação de múltiplas camadas, típica de SIG e geoprocessamento.",
        "feedbackErro": "❌ A alternativa errada escolheu ferramenta de posicionamento ou representação, não de integração analítica.",
        "dicaBanca": "💡 Análise multicamada = SIG/geoprocessamento.",
        "dica": "Análise multicamada = SIG/geoprocessamento.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 58,
        "subtopico": "Resolução espacial",
        "texto": "Duas imagens da mesma área possuem pixels de 30 m e 1 m. O objetivo é identificar pequenas edificações e, separadamente, acompanhar uma extensa mancha de vegetação.",
        "pergunta": "Ao comparar o tamanho dos pixels, qual interpretação sobre resolução espacial é correta?",
        "alternativas": [
            "a imagem de 1 m possui maior resolução temporal por definição, independentemente da frequência de aquisição.",
            "a imagem de 30 m tem maior resolução espacial porque cada pixel cobre área maior.",
            "as duas imagens têm a mesma resolução espacial porque registram a mesma superfície.",
            "a imagem de 1 m tem maior resolução espacial e permite distinguir objetos menores.",
            "a imagem de 30 m representa escala cartográfica maior e por isso mostra mais detalhes."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. Pixel menor no terreno corresponde a maior resolução espacial.",
        "feedbackErro": "❌ Se você associou pixel maior a maior resolução, inverteu a relação entre tamanho do pixel e detalhamento.",
        "dicaBanca": "💡 Pixel menor = maior resolução espacial.",
        "dica": "Pixel menor = maior resolução espacial.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 59,
        "subtopico": "Sensoriamento e escala",
        "texto": "Uma imagem de alta resolução permite identificar ruas e telhados, mas um mapa derivado dela é publicado em escala muito pequena para um atlas nacional.",
        "pergunta": "Ao relacionar resolução da imagem e escala do mapa final, qual conclusão é adequada?",
        "alternativas": [
            "a escala pequena aumenta o detalhamento dos objetos captados pela imagem de alta resolução na produção do mapa do atlas.",
            "a resolução espacial e a escala cartográfica são equivalentes e variam na mesma proporção na produção do mapa do atlas.",
            "a imagem pode conter grande detalhe, mas a representação final exigirá seleção e generalização compatíveis com a escala do mapa.",
            "a publicação no atlas converte a imagem em uma representação que dispensa escala cartográfica na produção do mapa do atlas.",
            "a alta resolução da imagem impede a generalização, pois os objetos detectados devem permanecer no produto final na produção do mapa do atlas."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Resolução da fonte e escala do produto final são conceitos distintos; o mapa pode exigir generalização.",
        "feedbackErro": "❌ A alternativa errada tratou resolução espacial e escala cartográfica como se fossem a mesma propriedade.",
        "dicaBanca": "💡 Detalhe da imagem não obriga o mapa final a exibir tudo.",
        "dica": "Detalhe da imagem não obriga o mapa final a exibir tudo.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 60,
        "subtopico": "Topografia integrada",
        "texto": "Em uma carta, as curvas 200 m, 220 m, 240 m e 260 m aparecem cada vez mais próximas em direção ao topo de uma encosta.",
        "pergunta": "Qual leitura combina corretamente equidistância e declividade?",
        "alternativas": [
            "a equidistância é 20 m e a declividade aumenta onde as curvas se aproximam.",
            "a equidistância varia de 20 a 60 m conforme o espaçamento horizontal das curvas.",
            "a equidistância é 260 m e a proximidade indica menor altitude absoluta.",
            "a equidistância é 60 m e a declividade diminui onde as curvas se aproximam.",
            "a equidistância é 20 m e a declividade é menor nas áreas de curvas próximas."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. O intervalo vertical é constante em 20 m; o espaçamento horizontal informa a declividade.",
        "feedbackErro": "❌ Se você alterou a equidistância com base no espaçamento horizontal, misturou intervalo vertical e inclinação do terreno.",
        "dicaBanca": "💡 Equidistância é vertical; espaçamento das curvas indica declividade.",
        "dica": "Equidistância é vertical; espaçamento das curvas indica declividade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 61,
        "subtopico": "Leitura cartográfica integrada",
        "texto": "Um mapa municipal de risco combina classes de inundação, escolas e unidades de saúde. A fonte é antiga, a escala é adequada e a legenda é clara.",
        "pergunta": "Antes de usar o mapa para decidir rotas de emergência, o cuidado mais importante é:",
        "alternativas": [
            "reposicionar o norte para o alto da página para facilitar a navegação.",
            "substituir a legenda por símbolos mais intuitivos para acelerar a leitura.",
            "verificar se os dados ainda representam as condições atuais do território.",
            "alterar a projeção do mapa, pois dados antigos decorrem de distorção geométrica.",
            "reduzir a escala para ampliar a quantidade de detalhes disponíveis."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Uma representação tecnicamente bem construída pode estar desatualizada e induzir decisões inadequadas.",
        "feedbackErro": "❌ A alternativa errada priorizou aparência ou geometria, embora o problema explicitado seja temporal e de atualidade da fonte.",
        "dicaBanca": "💡 Mapa confiável também precisa estar atualizado.",
        "dica": "Mapa confiável também precisa estar atualizado.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 62,
        "subtopico": "Escala e mapa temático",
        "texto": "Dois mapas usam os mesmos dados de uso do solo: um em 1:25.000 e outro em 1:1.000.000. O segundo omite pequenos fragmentos de vegetação.",
        "pergunta": "A explicação mais adequada é:",
        "alternativas": [
            "a mudança de escala altera as coordenadas e desloca fragmentos para fora do mapa.",
            "a escala menor do segundo mapa exige maior generalização das feições.",
            "a omissão decorre do tema, pois mapas de uso do solo não representam áreas pequenas.",
            "a generalização ocorre porque a projeção precisa preservar as áreas dos polígonos.",
            "a escala maior do segundo mapa reduz a possibilidade de representar polígonos pequenos."
        ],
        "correta": 1,
        "feedbackAcerto": "✅ Correto. A escala 1:1.000.000 representa área maior com menos detalhe, exigindo seleção.",
        "feedbackErro": "❌ Se você tratou 1:1.000.000 como escala maior, inverteu a relação entre denominador e detalhamento.",
        "dicaBanca": "💡 Menor escala, maior generalização.",
        "dica": "Menor escala, maior generalização.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 63,
        "subtopico": "Projeção e leitura crítica",
        "texto": "Um infográfico compara países usando um planisfério de Mercator e conclui que as áreas visualmente maiores possuem necessariamente maior extensão territorial.",
        "pergunta": "Qual crítica cartográfica é pertinente?",
        "alternativas": [
            "a legenda corrige as deformações da projeção quando apresenta os valores territoriais de cada país.",
            "a centralização europeia explica as diferenças visuais de tamanho, enquanto a projeção interfere principalmente nas direções.",
            "a projeção pode ampliar áreas de altas latitudes, então tamanho visual não deve ser confundido com área real.",
            "Mercator reduz áreas polares, por isso países próximos ao Equador parecem maiores que o real.",
            "a escala do planisfério elimina as distorções de área e torna a comparação direta confiável."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. Mercator é conforme e distorce áreas, sobretudo em altas latitudes.",
        "feedbackErro": "❌ A alternativa errada ignorou a propriedade da projeção ou atribuiu a outro elemento a distorção de área.",
        "dicaBanca": "💡 Em Mercator, aparência de área pode enganar.",
        "dica": "Em Mercator, aparência de área pode enganar.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 64,
        "subtopico": "Geotecnologias e planejamento",
        "texto": "Uma prefeitura precisa: localizar pontos de coleta no campo, acompanhar expansão urbana por imagens e escolher áreas prioritárias cruzando população, vias e risco.",
        "pergunta": "A combinação tecnológica mais adequada é:",
        "alternativas": [
            "GNSS para classificar imagens, sensoriamento remoto para integrar camadas e SIG para determinar fusos.",
            "SIG para obter sinais de satélite, GNSS para gerar imagens e sensoriamento remoto para cruzar bancos de dados.",
            "GNSS para posicionamento, sensoriamento remoto para monitoramento e SIG para análise multicamada.",
            "projeção cartográfica para posicionar, SIG para captar imagens e escala numérica para selecionar áreas.",
            "sensoriamento remoto para medir coordenadas, escala gráfica para monitorar e GNSS para analisar camadas."
        ],
        "correta": 2,
        "feedbackAcerto": "✅ Correto. As ferramentas se complementam porque atendem a etapas diferentes do planejamento espacial.",
        "feedbackErro": "❌ A alternativa incorreta trocou as funções básicas das geotecnologias apresentadas no próprio problema.",
        "dicaBanca": "💡 Posicionar, observar e analisar são etapas diferentes.",
        "dica": "Posicionar, observar e analisar são etapas diferentes.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 65,
        "subtopico": "Coordenadas e escala",
        "texto": "Um ponto de apoio está em 10°S, 50°W. Em um mapa 1:500.000, outro ponto localizado na mesma longitude aparece 6 cm ao norte.",
        "pergunta": "Qual afirmação combina corretamente localização e distância?",
        "alternativas": [
            "o primeiro ponto está no Hemisfério Sul e Ocidental; 6 cm representam cerca de 30 km.",
            "o primeiro ponto está no Norte e Oriental; 6 cm representam cerca de 60 km.",
            "o primeiro ponto está sobre o Equador; 6 cm representam cerca de 5 km no terreno.",
            "o primeiro ponto está no Sul e Oriental; 6 cm representam cerca de 300 km nas duas etapas do cálculo.",
            "o primeiro ponto está no Norte e Ocidental; 6 cm representam cerca de 3 km."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. 10°S e 50°W indicam Sul/Ocidental; em 1:500.000, 1 cm = 5 km e 6 cm = 30 km.",
        "feedbackErro": "❌ Se uma das duas partes falhou, revise separadamente hemisférios e conversão de escala antes de combinar a resposta.",
        "dicaBanca": "💡 Questões integradas exigem acertar localização e cálculo.",
        "dica": "Questões integradas exigem acertar localização e cálculo.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 66,
        "subtopico": "Mapa estatístico e crítica",
        "texto": "Um mapa coroplético mostra “número de habitantes” por município usando tonalidades, mas os municípios variam muito de área.",
        "pergunta": "Para comparar concentração populacional, a melhoria conceitual mais adequada seria:",
        "alternativas": [
            "manter os totais e aumentar o número de classes para corrigir a diferença de área municipal.",
            "trocar a projeção por Mercator para tornar comparáveis municípios de tamanhos diferentes.",
            "usar símbolos proporcionais e considerar que eles transformam população total em densidade.",
            "usar uma medida relativa, como densidade demográfica, em vez de interpretar totais como concentração.",
            "reduzir a escala do mapa, pois escalas menores corrigem diferenças entre valores absolutos e relativos."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. Concentração espacial exige relacionar população e área; o total isolado mede outra dimensão.",
        "feedbackErro": "❌ A alternativa errada tentou resolver um problema estatístico por meio de projeção, escala ou simbologia.",
        "dicaBanca": "💡 Escolha a medida estatística adequada antes de escolher a forma de representar.",
        "dica": "Escolha a medida estatística adequada antes de escolher a forma de representar.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 67,
        "subtopico": "Curvas de nível e planejamento",
        "texto": "Uma estrada deve evitar trechos muito íngremes. Em uma carta topográfica, o traçado A cruza curvas muito próximas; o traçado B cruza curvas mais espaçadas, mantendo a mesma equidistância.",
        "pergunta": "Considerando apenas a declividade, qual opção é preferível?",
        "alternativas": [
            "B, porque o maior espaçamento entre curvas indica menor inclinação do terreno.",
            "os dois, porque equidistância constante implica declividade igual nos trechos representados.",
            "B, porque curvas afastadas indicam maior altitude absoluta ao longo do percurso.",
            "A, porque a proximidade das curvas representa terreno mais plano e uniforme.",
            "A, porque curvas próximas indicam menor diferença vertical entre as cotas."
        ],
        "correta": 0,
        "feedbackAcerto": "✅ Correto. Com mesma equidistância, maior espaçamento horizontal indica menor declividade.",
        "feedbackErro": "❌ Se você escolheu A, confundiu proximidade de curvas com relevo suave; ocorre o contrário.",
        "dicaBanca": "💡 Para declividade, observe o espaçamento horizontal entre curvas.",
        "dica": "Para declividade, observe o espaçamento horizontal entre curvas.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 68,
        "subtopico": "Cartografia e decisão",
        "texto": "Um mapa de risco usa dados atuais, boa escala e legenda clara, mas foi produzido sem informar a fonte das ocorrências registradas.",
        "pergunta": "Qual aspecto da decisão fica mais comprometido?",
        "alternativas": [
            "o cálculo das distâncias, mesmo que a escala esteja indicada corretamente.",
            "a determinação do norte geográfico, mesmo que exista seta de orientação.",
            "a interpretação dos símbolos de risco, mesmo que a legenda esteja completa.",
            "a localização das áreas de risco, mesmo que as coordenadas estejam representadas.",
            "a avaliação da confiabilidade e da procedência dos dados utilizados."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. A ausência de fonte não apaga os outros elementos, mas reduz a capacidade de julgar a qualidade do dado.",
        "feedbackErro": "❌ A alternativa errada atribuiu à falta de fonte efeitos sobre escala, legenda ou localização que não decorrem dela.",
        "dicaBanca": "💡 Fonte responde: de onde veio o dado e quão confiável ele é?",
        "dica": "Fonte responde: de onde veio o dado e quão confiável ele é?",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 69,
        "subtopico": "Representação de fenômenos",
        "texto": "Um atlas precisa representar no mesmo capítulo: produção industrial por cidade, intensidade de fluxos migratórios e classes de precipitação anual.",
        "pergunta": "Qual combinação de técnicas é mais adequada?",
        "alternativas": [
            "mapa coroplético, hipsometria e setas de orientação para os três fenômenos indicados.",
            "curvas de nível, símbolos proporcionais e projeção cônica para representar os três conjuntos de dados.",
            "escala gráfica, mapa político e curvas batimétricas aplicadas aos três fenômenos do atlas.",
            "projeção equivalente, carta topográfica e símbolos de direção para os dados apresentados.",
            "símbolos proporcionais, setas de fluxo e mapa temático por classes de cor."
        ],
        "correta": 4,
        "feedbackAcerto": "✅ Correto. Cada fenômeno exige simbologia compatível: magnitude pontual, movimento e variável temática por área.",
        "feedbackErro": "❌ A alternativa incorreta misturou técnicas de relevo, projeção ou orientação com fenômenos que pedem outra linguagem visual.",
        "dicaBanca": "💡 Associe a técnica à natureza do fenômeno.",
        "dica": "Associe a técnica à natureza do fenômeno.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": 70,
        "subtopico": "Síntese cartográfica",
        "texto": "Uma equipe produz um mapa de risco municipal com base em imagens recentes, pontos coletados em campo, camadas de relevo e ocupação, classes de risco e escala adequada ao bairro.",
        "pergunta": "Qual síntese descreve melhor o processo?",
        "alternativas": [
            "o mapa final substitui a necessidade de verificar fonte, data e critérios usados para classificar o risco.",
            "a cartografia atua principalmente na etapa final de desenho, pois aquisição e análise pertencem a campos separados do mapa.",
            "a precisão das coordenadas torna secundária a escolha de projeção, legenda e escala para a comunicação.",
            "a cartografia integra aquisição, localização, análise, simbolização e escolha de escala para comunicar relações espaciais.",
            "a presença de geotecnologias elimina decisões cartográficas sobre escala, classes e simbologia."
        ],
        "correta": 3,
        "feedbackAcerto": "✅ Correto. O produto cartográfico resulta de várias decisões técnicas e analíticas, não apenas do desenho final.",
        "feedbackErro": "❌ A alternativa errada reduziu a cartografia a uma etapa isolada ou supôs que tecnologia elimina escolhas de representação.",
        "dicaBanca": "💡 Mapa é resultado de dados, análise e escolhas de representação.",
        "dica": "Mapa é resultado de dados, análise e escolhas de representação.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    }
];

if (typeof window !== "undefined") {
    window.cartografiaGeografia = cartografiaGeografia;
}
