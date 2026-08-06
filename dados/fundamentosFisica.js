const fundamentosFisica = [
    {
        pergunta: "Em um experimento, um estudante registra 2,5 m, 40 s, 18 °C e a observação “a superfície parece áspera”. Quais registros correspondem a grandezas físicas medidas?",
        alternativas: [
            "apenas 2,5 m, porque comprimento é a única grandeza mensurável do conjunto.",
            "2,5 m, 40 s e 18 °C, pois apresentam valor numérico associado a uma unidade.",
            "os quatro registros, pois toda descrição sensorial corresponde a uma medida física.",
            "somente 40 s e 18 °C, porque o metro não pertence ao Sistema Internacional.",
            "apenas a observação de aspereza, porque medidas numéricas são interpretações subjetivas."
        ],
        correta: 1,
        explicacao: "Grandeza física é uma propriedade mensurável expressa por número e unidade. A descrição de aspereza, sem escala ou instrumento, é qualitativa.",
        feedbackAcerto: "Correto. Você separou medidas quantitativas de uma observação meramente qualitativa.",
        feedbackErro: "Procure sempre número e unidade; uma percepção sem quantificação não é uma medida física.",
        dicaBanca: "Grandeza medida = valor numérico + unidade."
    },
    {
        pergunta: "Um aplicativo informa: massa de 70 kg, temperatura de 36,5 °C, deslocamento de 200 m para leste e velocidade de 5 m/s para norte. A classificação correta é:",
        alternativas: [
            "todas são vetoriais porque possuem valor numérico e unidade.",
            "massa e deslocamento são escalares; temperatura e velocidade são vetoriais.",
            "massa e temperatura são escalares; deslocamento e velocidade são vetoriais.",
            "somente a velocidade é vetorial, pois deslocamento não possui sentido.",
            "todas são escalares porque nenhuma envolve força resultante."
        ],
        correta: 2,
        explicacao: "Grandezas vetoriais exigem módulo, direção e sentido; escalares exigem apenas valor e unidade.",
        feedbackAcerto: "Correto. Você utilizou direção e sentido como critério de classificação.",
        feedbackErro: "Não basta haver unidade: verifique se a grandeza precisa de orientação espacial.",
        dicaBanca: "Deslocamento, velocidade, aceleração e força são vetoriais."
    },
    {
        pergunta: "Uma mochila está parada no bagageiro de um ônibus que se desloca em linha reta. Para um passageiro sentado, ela está em repouso; para uma pessoa na calçada, está em movimento. Isso ocorre porque:",
        alternativas: [
            "a mochila possui duas velocidades absolutas ao mesmo tempo.",
            "movimento e repouso dependem do referencial adotado.",
            "o movimento só existe quando há aceleração diferente de zero.",
            "a pessoa na calçada observa uma trajetória fisicamente incorreta.",
            "o ônibus elimina a inércia dos objetos transportados."
        ],
        correta: 1,
        explicacao: "A posição de um corpo e sua variação devem ser descritas em relação a um referencial.",
        feedbackAcerto: "Correto. Você reconheceu o caráter relativo de movimento e repouso.",
        feedbackErro: "O corpo não muda de estado por causa do observador; muda a descrição em relação ao referencial.",
        dicaBanca: "Pergunte sempre: em relação a quê?"
    },
    {
        pergunta: "Um corredor percorre 300 m em 50 s e depois 200 m em 30 s. Qual é sua rapidez média no percurso completo?",
        alternativas: [
            "5,00 m/s.",
            "6,67 m/s.",
            "6,25 m/s.",
            "7,50 m/s.",
            "10,00 m/s."
        ],
        correta: 2,
        explicacao: "Rapidez média = distância total/tempo total = 500 m/80 s = 6,25 m/s.",
        feedbackAcerto: "Correto. Você somou distâncias e tempos antes de calcular a média.",
        feedbackErro: "Não faça a média aritmética das rapidez dos trechos sem considerar seus tempos.",
        dicaBanca: "Use distância total dividida pelo tempo total."
    },
    {
        pergunta: "Um automóvel percorre 180 km em 3 h, sem considerar paradas intermediárias. Sua velocidade escalar média é:",
        alternativas: [
            "60 km/h.",
            "20 km/h.",
            "90 km/h.",
            "180 km/h.",
            "540 km/h."
        ],
        correta: 0,
        explicacao: "Velocidade escalar média = distância percorrida/tempo = 180/3 = 60 km/h.",
        feedbackAcerto: "Correto. O cálculo respeitou a relação entre distância e tempo.",
        feedbackErro: "Somar ou multiplicar os valores não representa a definição de velocidade média.",
        dicaBanca: "v = Δs/Δt."
    },
    {
        pergunta: "Um veículo mantém 25 m/s em uma rodovia. Esse valor corresponde a:",
        alternativas: [
            "6,9 km/h.",
            "90 km/h.",
            "25 km/h.",
            "69 km/h.",
            "250 km/h."
        ],
        correta: 1,
        explicacao: "Para converter m/s em km/h, multiplica-se por 3,6: 25 × 3,6 = 90.",
        feedbackAcerto: "Correto. Você aplicou corretamente o fator de conversão.",
        feedbackErro: "m/s e km/h não possuem o mesmo valor numérico.",
        dicaBanca: "De m/s para km/h: × 3,6."
    },
    {
        pergunta: "Um ciclista aumenta sua velocidade de 4 m/s para 16 m/s em 6 s. A aceleração média é:",
        alternativas: [
            "0,5 m/s².",
            "3 m/s².",
            "12 m/s².",
            "20 m/s².",
            "2 m/s²."
        ],
        correta: 4,
        explicacao: "a = Δv/Δt = (16 − 4)/6 = 2 m/s².",
        feedbackAcerto: "Correto. Você calculou a variação da velocidade antes de dividir pelo tempo.",
        feedbackErro: "A aceleração não é a velocidade final dividida pelo tempo; use a variação.",
        dicaBanca: "a = (vfinal − vinicial)/Δt."
    },
    {
        pergunta: "Um carro faz uma curva com rapidez constante de 60 km/h. Mesmo sem aumentar o valor indicado no velocímetro, ele apresenta aceleração porque:",
        alternativas: [
            "a direção do vetor velocidade está mudando.",
            "qualquer movimento possui aceleração igual à rapidez.",
            "a massa do carro aumenta durante a curva.",
            "a força resultante é necessariamente nula.",
            "o tempo deixa de ser medido durante a mudança de direção."
        ],
        correta: 0,
        explicacao: "Aceleração é qualquer variação do vetor velocidade, incluindo mudanças de módulo, direção ou sentido.",
        feedbackAcerto: "Correto. Você distinguiu rapidez constante de velocidade vetorial constante.",
        feedbackErro: "Em trajetória curva, a direção muda; portanto, existe aceleração.",
        dicaBanca: "Aceleração não significa apenas aumentar a rapidez."
    },
    {
        pergunta: "Quando um ônibus freia bruscamente, passageiros tendem a continuar deslocando-se para a frente. O fenômeno é explicado pela:",
        alternativas: [
            "ação e reação entre passageiro e banco, que atuam no mesmo corpo.",
            "redução instantânea da massa dos passageiros.",
            "ausência de gravidade dentro do ônibus.",
            "transformação da velocidade em energia potencial gravitacional.",
            "inércia, tendência de manter o estado de movimento."
        ],
        correta: 4,
        explicacao: "Pela Primeira Lei, um corpo tende a manter repouso ou movimento retilíneo uniforme se a resultante for nula.",
        feedbackAcerto: "Correto. A tendência de conservar o movimento explica o deslocamento para a frente.",
        feedbackErro: "O ônibus reduz sua velocidade antes do corpo do passageiro acompanhar a mudança.",
        dicaBanca: "Freadas e arrancadas são situações clássicas de inércia."
    },
    {
        pergunta: "Dois carrinhos recebem a mesma força resultante. O carrinho A tem massa de 2 kg e o B, de 4 kg. Comparando as acelerações:",
        alternativas: [
            "A aceleração de A é o dobro da aceleração de B.",
            "as acelerações são iguais porque a força é a mesma.",
            "a aceleração de B é o dobro da aceleração de A.",
            "A não acelera porque possui menor massa.",
            "B possui aceleração quatro vezes maior."
        ],
        correta: 0,
        explicacao: "Pela relação a = F/m, para a mesma força a aceleração é inversamente proporcional à massa.",
        feedbackAcerto: "Correto. Menor massa produz maior aceleração sob a mesma força.",
        feedbackErro: "A força igual não garante aceleração igual quando as massas são diferentes.",
        dicaBanca: "Com F constante: maior massa, menor aceleração."
    },
    {
        pergunta: "Ao caminhar, uma pessoa empurra o chão para trás e o chão exerce força para a frente sobre seus pés. Essas forças:",
        alternativas: [
            "anulam-se porque atuam ambas sobre a pessoa.",
            "possuem intensidades diferentes para permitir o movimento.",
            "existem apenas enquanto a pessoa permanece parada.",
            "são produzidas pela inércia e não constituem um par de interação, considerando os dados fornecidos no enunciado.",
            "têm mesma intensidade e sentidos opostos, mas atuam em corpos diferentes."
        ],
        correta: 4,
        explicacao: "Pares de ação e reação atuam em corpos diferentes, têm mesma intensidade, mesma direção e sentidos opostos.",
        feedbackAcerto: "Correto. Você evitou a ideia de que ação e reação se anulam no mesmo corpo.",
        feedbackErro: "Forças só se anulam diretamente quando atuam no mesmo corpo.",
        dicaBanca: "Ação e reação: corpos diferentes."
    },
    {
        pergunta: "Uma pessoa empurra uma parede com força de 150 N. A parede permanece parada. A força que a parede exerce sobre a pessoa é, aproximadamente:",
        alternativas: [
            "0 N, porque a parede não se move.",
            "75 N no mesmo sentido.",
            "150 N no mesmo sentido.",
            "150 N em sentido oposto.",
            "300 N em sentido oposto."
        ],
        correta: 3,
        explicacao: "A Terceira Lei estabelece forças de mesma intensidade e sentidos opostos entre os corpos.",
        feedbackAcerto: "Correto. Ausência de movimento não significa ausência de força de reação.",
        feedbackErro: "A parede pode exercer força mesmo sem se deslocar.",
        dicaBanca: "Movimento não é requisito para existir ação e reação."
    },
    {
        pergunta: "Um astronauta leva um objeto da Terra para a Lua. Comparando massa e peso do objeto:",
        alternativas: [
            "massa e peso diminuem na mesma proporção.",
            "a massa diminui, mas o peso permanece constante.",
            "a massa permanece praticamente constante, mas o peso diminui devido à menor gravidade.",
            "massa e peso permanecem iguais aos valores terrestres, sem alterar as demais grandezas do sistema.",
            "o peso torna-se nulo e a massa aumenta."
        ],
        correta: 2,
        explicacao: "Massa é propriedade do corpo; peso é força gravitacional P = m·g.",
        feedbackAcerto: "Correto. Você relacionou a variação do peso à aceleração da gravidade.",
        feedbackErro: "A massa não depende do planeta, enquanto o peso depende de g.",
        dicaBanca: "Massa em kg; peso em newtons."
    },
    {
        pergunta: "Uma caixa de 8 kg está em um local onde g = 10 m/s². O módulo de seu peso é:",
        alternativas: [
            "80 N.",
            "0,8 N.",
            "8 N.",
            "18 N.",
            "800 N."
        ],
        correta: 0,
        explicacao: "P = m·g = 8 × 10 = 80 N.",
        feedbackAcerto: "Correto. Você aplicou a relação entre massa e gravidade.",
        feedbackErro: "O valor 8 kg representa massa, não peso.",
        dicaBanca: "Peso = massa × gravidade."
    },
    {
        pergunta: "Uma força horizontal constante de 50 N desloca uma caixa 4 m na mesma direção. O trabalho realizado pela força é:",
        alternativas: [
            "12,5 J.",
            "46 J.",
            "200 J.",
            "54 J.",
            "400 J."
        ],
        correta: 2,
        explicacao: "Quando força e deslocamento têm a mesma direção, W = F·d = 50 × 4 = 200 J.",
        feedbackAcerto: "Correto. Você considerou força, deslocamento e alinhamento.",
        feedbackErro: "Trabalho mecânico não é calculado pela soma dos valores.",
        dicaBanca: "Mesma direção: W = Fd."
    },
    {
        pergunta: "Uma pessoa segura uma mala parada a 1,2 m do chão durante 20 s. Considerando o deslocamento da mala nulo, o trabalho mecânico da força exercida pela pessoa sobre ela é:",
        alternativas: [
            "igual ao peso multiplicado por 20 s.",
            "positivo porque existe esforço muscular.",
            "negativo porque a gravidade atua para baixo.",
            "igual à energia potencial da mala.",
            "zero."
        ],
        correta: 4,
        explicacao: "Trabalho mecânico depende do deslocamento do ponto de aplicação da força. Sem deslocamento, o trabalho é zero.",
        feedbackAcerto: "Correto. Você distinguiu esforço fisiológico de trabalho mecânico.",
        feedbackErro: "A pessoa consome energia, mas a força sobre a mala não realiza trabalho mecânico sem deslocamento.",
        dicaBanca: "Força sem deslocamento: trabalho nulo."
    },
    {
        pergunta: "Dois corpos possuem a mesma massa. O corpo B move-se com o dobro da velocidade do corpo A. A energia cinética de B é:",
        alternativas: [
            "metade da energia de A.",
            "igual à energia de A.",
            "duas vezes a energia de A, nas condições físicas apresentadas.",
            "quatro vezes a energia cinética de A.",
            "oito vezes a energia de A."
        ],
        correta: 3,
        explicacao: "Ec = m·v²/2. Ao dobrar a velocidade, a energia cinética é multiplicada por quatro.",
        feedbackAcerto: "Correto. Você considerou a dependência quadrática da velocidade.",
        feedbackErro: "Energia cinética não cresce linearmente com a velocidade.",
        dicaBanca: "Na energia cinética, a velocidade está ao quadrado."
    },
    {
        pergunta: "Uma caixa é elevada do chão para uma prateleira, mantendo a mesma massa. Sua energia potencial gravitacional aumenta porque:",
        alternativas: [
            "sua velocidade aumentou obrigatoriamente.",
            "sua massa foi transformada em energia.",
            "a gravidade deixou de atuar durante a elevação, sem alterar as demais grandezas do sistema.",
            "o corpo passou a possuir aceleração horizontal.",
            "a altura em relação ao nível de referência aumentou."
        ],
        correta: 4,
        explicacao: "Ep = mgh. Para massa e gravidade constantes, maior altura implica maior energia potencial.",
        feedbackAcerto: "Correto. Você identificou a variável que mudou.",
        feedbackErro: "A energia potencial depende da posição no campo gravitacional, não de uma velocidade obrigatória.",
        dicaBanca: "Energia potencial gravitacional cresce com a altura."
    },
    {
        pergunta: "Em uma montanha-russa ideal, o carrinho desce de um ponto alto sem motor e sem atrito. Durante a descida:",
        alternativas: [
            "a energia cinética transforma-se integralmente em massa.",
            "a energia mecânica aumenta porque a gravidade cria energia.",
            "a energia potencial permanece constante enquanto a velocidade aumenta, de acordo com o modelo utilizado na questão.",
            "energia potencial gravitacional transforma-se em energia cinética, mantendo a energia mecânica.",
            "toda a energia é dissipada em calor, mesmo sem atrito."
        ],
        correta: 3,
        explicacao: "Sem forças dissipativas, a energia mecânica se conserva e ocorre transformação entre potencial e cinética.",
        feedbackAcerto: "Correto. Você aplicou conservação da energia mecânica.",
        feedbackErro: "A gravidade transforma a forma da energia, mas não cria energia mecânica adicional.",
        dicaBanca: "Sem atrito: Ep diminui e Ec aumenta."
    },
    {
        pergunta: "Duas máquinas realizam o mesmo trabalho. A máquina A conclui em 10 s e a B em 25 s. A comparação correta é:",
        alternativas: [
            "B possui maior potência porque permanece ligada por mais tempo, durante o intervalo analisado.",
            "as potências são iguais porque o trabalho é o mesmo.",
            "A possui menor potência porque usa menos segundos.",
            "A possui maior potência porque realiza o mesmo trabalho em menos tempo.",
            "não é possível comparar potência usando trabalho e tempo."
        ],
        correta: 3,
        explicacao: "Potência é a taxa de realização de trabalho: P = W/Δt.",
        feedbackAcerto: "Correto. Menor tempo para o mesmo trabalho significa maior potência.",
        feedbackErro: "Potência mede rapidez de transformação de energia, não apenas quantidade de trabalho.",
        dicaBanca: "Mesmo trabalho em menor tempo = maior potência."
    },
    {
        pergunta: "Duas panelas contêm água: a primeira a 80 °C e a segunda a 40 °C. A afirmação correta é:",
        alternativas: [
            "a panela mais quente contém uma substância chamada calor.",
            "temperatura indica o estado térmico; calor é energia transferida devido à diferença de temperatura.",
            "calor e temperatura são grandezas idênticas medidas na mesma unidade, considerando os dados fornecidos no enunciado.",
            "a panela mais fria não possui energia interna.",
            "temperatura mede diretamente a quantidade total de matéria."
        ],
        correta: 1,
        explicacao: "Temperatura está relacionada à agitação térmica; calor é energia em trânsito entre corpos a temperaturas diferentes.",
        feedbackAcerto: "Correto. Você separou estado térmico de transferência de energia.",
        feedbackErro: "Corpos não armazenam 'calor'; eles possuem energia interna.",
        dicaBanca: "Calor é transferência; temperatura é estado térmico."
    },
    {
        pergunta: "Um bloco metálico a 90 °C é colocado em contato com outro a 20 °C, em sistema isolado. Inicialmente, o calor flui:",
        alternativas: [
            "do bloco frio para o quente, por possuir menor energia.",
            "nos dois sentidos com a mesma taxa, sem transferência líquida.",
            "do bloco a 90 °C para o bloco a 20 °C.",
            "apenas quando os blocos tiverem a mesma temperatura.",
            "do corpo de menor massa para o de maior massa."
        ],
        correta: 2,
        explicacao: "O fluxo espontâneo de calor ocorre do corpo de maior temperatura para o de menor temperatura.",
        feedbackAcerto: "Correto. Você utilizou a diferença de temperatura como direção do fluxo.",
        feedbackErro: "Massa não define sozinha o sentido da transferência térmica.",
        dicaBanca: "Calor espontâneo: quente → frio."
    },
    {
        pergunta: "Uma temperatura de 27 °C corresponde aproximadamente a 300 K. Sobre a escala Kelvin, é correto afirmar que:",
        alternativas: [
            "0 K corresponde ao ponto de congelamento da água.",
            "valores em kelvin são obtidos multiplicando Celsius por 273, sem alterar as demais grandezas do sistema.",
            "seu zero corresponde ao zero absoluto e o símbolo é K, sem o sinal de grau.",
            "a escala apresenta temperaturas negativas abaixo de 0 K.",
            "1 K possui tamanho diferente de uma variação de 1 °C."
        ],
        correta: 2,
        explicacao: "A relação aproximada é K = °C + 273, e o zero absoluto é o limite inferior da escala.",
        feedbackAcerto: "Correto. Você reconheceu a origem e a notação da escala absoluta.",
        feedbackErro: "0 °C corresponde a cerca de 273 K, não a 0 K.",
        dicaBanca: "Kelvin usa K, não °K."
    },
    {
        pergunta: "Uma extremidade de uma barra metálica é aquecida, e algum tempo depois a outra extremidade também esquenta, sem transporte macroscópico do metal. O mecanismo predominante é:",
        alternativas: [
            "convecção, devido ao deslocamento de massa do sólido.",
            "condução térmica.",
            "radiação, pois todo calor exige propagação no vácuo.",
            "evaporação, pela mudança do metal para o estado gasoso.",
            "refração, pela mudança de direção da energia."
        ],
        correta: 1,
        explicacao: "Na condução, energia térmica é transferida por interações entre partículas, especialmente em sólidos.",
        feedbackAcerto: "Correto. Você associou contato e sólido à condução.",
        feedbackErro: "Convecção exige movimento de fluido; a barra sólida não circula.",
        dicaBanca: "Contato em sólido geralmente indica condução."
    },
    {
        pergunta: "Ao aquecer água em uma panela, porções mais quentes sobem e porções mais frias descem. Esse movimento ocorre porque:",
        alternativas: [
            "a água transfere calor apenas por contato entre partículas imóveis, durante o intervalo analisado.",
            "ondas eletromagnéticas obrigam toda a água a subir ao mesmo tempo.",
            "a massa das moléculas desaparece quando são aquecidas.",
            "diferenças de temperatura geram diferenças de densidade e correntes de convecção.",
            "a gravidade deixa de atuar sobre as regiões mais quentes."
        ],
        correta: 3,
        explicacao: "Convecção envolve transporte de energia pelo movimento do fluido causado por diferenças de densidade.",
        feedbackAcerto: "Correto. Você relacionou aquecimento, densidade e circulação.",
        feedbackErro: "A água não perde massa nem deixa de sofrer ação da gravidade.",
        dicaBanca: "Convecção ocorre em líquidos e gases."
    },
    {
        pergunta: "A Terra recebe energia do Sol através do espaço praticamente vazio. O mecanismo que permite essa transferência é:",
        alternativas: [
            "condução por contato direto entre as superfícies.",
            "convecção de matéria solar até o planeta.",
            "difusão de partículas do ar interplanetário.",
            "evaporação da superfície solar.",
            "radiação eletromagnética."
        ],
        correta: 4,
        explicacao: "Radiação eletromagnética não necessita de meio material para se propagar.",
        feedbackAcerto: "Correto. Você identificou o único mecanismo capaz de atravessar o vácuo.",
        feedbackErro: "Condução e convecção dependem de matéria.",
        dicaBanca: "No vácuo, a transferência térmica ocorre por radiação."
    },
    {
        pergunta: "Trilhos ferroviários são instalados com pequenas folgas entre segmentos. Essas folgas servem para:",
        alternativas: [
            "impedir que os trilhos conduzam corrente elétrica.",
            "eliminar a força peso durante dias quentes.",
            "permitir a dilatação térmica e reduzir o risco de deformações.",
            "aumentar a massa do metal quando a temperatura sobe, nas condições físicas apresentadas.",
            "converter calor em energia química."
        ],
        correta: 2,
        explicacao: "Materiais tendem a dilatar quando aquecidos; folgas acomodam a variação dimensional.",
        feedbackAcerto: "Correto. Você relacionou a solução de engenharia à dilatação.",
        feedbackErro: "A massa não aumenta de modo relevante; mudam as dimensões.",
        dicaBanca: "Pontes e trilhos precisam de espaço para dilatar."
    },
    {
        pergunta: "Uma perturbação produzida em uma corda desloca-se até a outra extremidade, enquanto cada ponto da corda apenas oscila em torno de sua posição. Isso mostra que uma onda:",
        alternativas: [
            "transporta todas as partículas da corda até a outra extremidade.",
            "só pode existir quando há corrente elétrica.",
            "é um corpo material que se move no meio.",
            "transporta energia sem transportar permanentemente matéria junto com a perturbação.",
            "não transfere energia porque as partículas retornam à posição inicial, sem alterar as demais grandezas do sistema."
        ],
        correta: 3,
        explicacao: "Ondas propagam energia e informação; as partículas do meio geralmente oscilam localmente.",
        feedbackAcerto: "Correto. Você diferenciou propagação da onda de transporte líquido de matéria.",
        feedbackErro: "O retorno das partículas à posição de equilíbrio não impede a transferência de energia.",
        dicaBanca: "A onda avança; o meio oscila."
    },
    {
        pergunta: "Uma fonte realiza 120 oscilações em 4 s. A frequência da onda produzida é:",
        alternativas: [
            "30 Hz.",
            "0,03 Hz.",
            "4 Hz.",
            "116 Hz.",
            "480 Hz."
        ],
        correta: 0,
        explicacao: "f = número de oscilações/tempo = 120/4 = 30 Hz.",
        feedbackAcerto: "Correto. Você calculou quantos ciclos ocorrem por segundo.",
        feedbackErro: "Hertz representa oscilações por segundo.",
        dicaBanca: "f = N/Δt."
    },
    {
        pergunta: "Em um mesmo meio, uma onda mantém velocidade de 12 m/s. Quando sua frequência aumenta de 3 Hz para 6 Hz, o comprimento de onda:",
        alternativas: [
            "aumenta de 4 m para 8 m.",
            "permanece em 4 m.",
            "diminui de 12 m para 6 m.",
            "diminui de 4 m para 2 m.",
            "aumenta de 2 m para 4 m."
        ],
        correta: 3,
        explicacao: "Pela relação v = λf, com velocidade constante, λ é inversamente proporcional à frequência.",
        feedbackAcerto: "Correto. Ao dobrar a frequência, o comprimento de onda caiu pela metade.",
        feedbackErro: "Não confunda velocidade de propagação com frequência.",
        dicaBanca: "No mesmo meio: frequência sobe, comprimento diminui."
    },
    {
        pergunta: "Uma onda sonora não atravessa o vácuo, mas a luz solar atravessa o espaço. A diferença ocorre porque:",
        alternativas: [
            "a luz possui massa e transporta o meio material consigo.",
            "o som é eletromagnético, mas possui frequência insuficiente, considerando os dados fornecidos no enunciado.",
            "ondas mecânicas existem apenas em sólidos.",
            "o som é mecânico e necessita de meio material; a luz é eletromagnética e pode propagar-se no vácuo.",
            "ondas eletromagnéticas não transportam energia."
        ],
        correta: 3,
        explicacao: "Ondas mecânicas dependem da oscilação de partículas de um meio; eletromagnéticas não.",
        feedbackAcerto: "Correto. Você utilizou a necessidade de meio como critério.",
        feedbackErro: "Som pode propagar-se em sólidos, líquidos e gases, mas não no vácuo.",
        dicaBanca: "Som precisa de meio; luz não."
    },
    {
        pergunta: "No ar, o som produzido por uma caixa acústica é classificado como:",
        alternativas: [
            "onda eletromagnética transversal.",
            "onda mecânica exclusivamente transversal.",
            "radiação ionizante longitudinal.",
            "corrente de elétrons no ar.",
            "onda mecânica longitudinal."
        ],
        correta: 4,
        explicacao: "O som no ar precisa de meio e produz compressões e rarefações na direção de propagação.",
        feedbackAcerto: "Correto. Você identificou natureza mecânica e comportamento longitudinal.",
        feedbackErro: "O som não é radiação eletromagnética.",
        dicaBanca: "No ar, som = mecânico e longitudinal."
    },
    {
        pergunta: "Duas notas têm a mesma intensidade, mas uma é percebida como mais aguda. A nota mais aguda possui:",
        alternativas: [
            "maior amplitude e mesma frequência.",
            "menor velocidade no mesmo ar.",
            "maior timbre por possuir mais energia.",
            "menor frequência e maior comprimento de onda.",
            "maior frequência."
        ],
        correta: 4,
        explicacao: "A altura sonora — grave ou agudo — depende principalmente da frequência.",
        feedbackAcerto: "Correto. Você associou som agudo a frequência maior.",
        feedbackErro: "Amplitude está mais ligada à intensidade sonora.",
        dicaBanca: "Agudo = frequência alta; grave = frequência baixa."
    },
    {
        pergunta: "Um violino e uma flauta executam a mesma nota com a mesma intensidade, mas soam diferentes. A característica responsável é o:",
        alternativas: [
            "timbre, relacionado à forma de onda e aos harmônicos.",
            "eco, causado pela reflexão do som.",
            "tom, determinado apenas pela amplitude.",
            "nível de pressão, que define a frequência fundamental.",
            "comprimento da sala, que elimina os harmônicos."
        ],
        correta: 0,
        explicacao: "Timbre permite distinguir fontes que emitem sons com mesma altura e intensidade.",
        feedbackAcerto: "Correto. Você relacionou a identidade sonora à composição de frequências.",
        feedbackErro: "Altura e intensidade podem ser iguais, mas a forma de onda permanecer diferente.",
        dicaBanca: "Timbre identifica a fonte sonora."
    },
    {
        pergunta: "Uma pessoa grita diante de uma montanha e ouve novamente sua voz após certo intervalo. O fenômeno é causado pela:",
        alternativas: [
            "refração do som ao entrar no ouvido.",
            "reflexão das ondas sonoras.",
            "difração que destrói a onda original.",
            "polarização das ondas longitudinais.",
            "interferência que impede o retorno da onda."
        ],
        correta: 1,
        explicacao: "O eco resulta do retorno perceptível do som após refletir em uma superfície distante.",
        feedbackAcerto: "Correto. Você identificou o retorno da onda como reflexão.",
        feedbackErro: "Difração contorna obstáculos; refração muda velocidade e direção entre meios.",
        dicaBanca: "Eco é reflexão com atraso perceptível."
    },
    {
        pergunta: "A luz de uma lanterna atravessa o ar e também pode propagar-se no vácuo. Ela é uma onda:",
        alternativas: [
            "mecânica e longitudinal.",
            "eletromagnética e transversal.",
            "mecânica e transversal.",
            "sonora e ionizante.",
            "material e dependente de ar, considerando os dados fornecidos no enunciado."
        ],
        correta: 1,
        explicacao: "A luz é radiação eletromagnética e suas oscilações são transversais.",
        feedbackAcerto: "Correto. Você diferenciou luz de ondas mecânicas.",
        feedbackErro: "A luz não precisa de partículas materiais para se propagar.",
        dicaBanca: "Luz = onda eletromagnética."
    },
    {
        pergunta: "Uma pessoa vê sua imagem em um espelho plano porque os raios luminosos:",
        alternativas: [
            "refletem no espelho e chegam aos olhos com ângulo de reflexão igual ao de incidência.",
            "atravessam o espelho e retornam por refração, nas condições físicas apresentadas.",
            "são absorvidos integralmente pela superfície.",
            "transformam-se em ondas sonoras.",
            "sofrem dispersão em todas as cores."
        ],
        correta: 0,
        explicacao: "A formação da imagem em espelho plano decorre da reflexão regular da luz.",
        feedbackAcerto: "Correto. Você aplicou a lei da reflexão.",
        feedbackErro: "O espelho não precisa deixar a luz atravessar para formar imagem.",
        dicaBanca: "Espelho plano: reflexão."
    },
    {
        pergunta: "Um canudo parcialmente mergulhado em água parece quebrado na superfície. Isso ocorre porque a luz:",
        alternativas: [
            "é refletida integralmente e não atravessa a água.",
            "sofre difração apenas na extremidade do canudo.",
            "transforma-se em onda mecânica ao entrar no líquido, sem alterar as demais grandezas do sistema.",
            "é absorvida pela água e recriada no ar.",
            "muda de velocidade e direção ao passar entre água e ar."
        ],
        correta: 4,
        explicacao: "Refração é a mudança de velocidade e, em geral, de direção quando a luz passa entre meios.",
        feedbackAcerto: "Correto. Você relacionou a aparência deslocada à refração.",
        feedbackErro: "A luz atravessa a interface; não é totalmente refletida.",
        dicaBanca: "Mudança de meio e desvio da luz indicam refração."
    },
    {
        pergunta: "A luz branca atravessa um prisma e forma uma faixa de cores. O fenômeno ocorre porque:",
        alternativas: [
            "o prisma cria novas cores por reação química.",
            "todas as cores possuem exatamente a mesma refração, de acordo com o modelo utilizado na questão.",
            "a luz branca é formada por uma única frequência.",
            "o prisma transforma luz em som visível.",
            "cada cor sofre refração diferente devido à dependência do índice com o comprimento de onda."
        ],
        correta: 4,
        explicacao: "A dispersão separa componentes da luz branca porque diferentes comprimentos de onda desviam de modo diferente.",
        feedbackAcerto: "Correto. Você explicou o fenômeno pelo comportamento das diferentes cores.",
        feedbackErro: "As cores já compõem a luz branca; o prisma apenas as separa.",
        dicaBanca: "Prisma e arco-íris lembram dispersão."
    },
    {
        pergunta: "Retrovisores externos utilizam espelhos convexos principalmente porque eles:",
        alternativas: [
            "formam imagens reais ampliadas sobre a superfície.",
            "formam imagens virtuais reduzidas e ampliam o campo de visão.",
            "convergem todos os raios para um foco à frente do espelho, durante o intervalo analisado.",
            "eliminam a distância aparente dos veículos.",
            "produzem imagens do mesmo tamanho que o objeto."
        ],
        correta: 1,
        explicacao: "Espelhos convexos oferecem maior campo visual, embora reduzam a imagem e alterem a percepção de distância.",
        feedbackAcerto: "Correto. Você reconheceu a vantagem e a consequência do uso do espelho convexo.",
        feedbackErro: "A imagem convexa é virtual, direita e reduzida.",
        dicaBanca: "Convexo = campo maior e imagem menor."
    },
    {
        pergunta: "Em um fio metálico ligado a uma fonte, os elétrons livres passam a apresentar movimento orientado. Esse movimento constitui:",
        alternativas: [
            "onda sonora longitudinal.",
            "fluxo de prótons através do núcleo dos átomos.",
            "transferência de calor sem deslocamento de cargas.",
            "corrente elétrica.",
            "indução magnética sem diferença de potencial."
        ],
        correta: 3,
        explicacao: "Nos metais, a corrente elétrica corresponde ao movimento ordenado de elétrons livres.",
        feedbackAcerto: "Correto. Você identificou o portador de carga no condutor metálico.",
        feedbackErro: "Prótons permanecem ligados aos núcleos; quem se desloca pelo metal são elétrons.",
        dicaBanca: "Corrente em metais = movimento ordenado de elétrons."
    },
    {
        pergunta: "Cobre e alumínio são usados em fios porque:",
        alternativas: [
            "possuem cargas que se movimentam com relativa facilidade no material.",
            "não possuem elétrons em sua estrutura.",
            "impedem completamente a passagem de corrente.",
            "transformam toda energia elétrica em energia nuclear, nas condições físicas apresentadas.",
            "só conduzem quando estão no estado gasoso."
        ],
        correta: 0,
        explicacao: "Condutores apresentam portadores de carga com maior mobilidade.",
        feedbackAcerto: "Correto. Você relacionou condução à mobilidade das cargas.",
        feedbackErro: "Todo metal possui elétrons; a diferença está na facilidade de movimento.",
        dicaBanca: "Condutor facilita movimento de cargas."
    },
    {
        pergunta: "Uma pilha, fios e uma lâmpada foram conectados, mas um dos fios ficou interrompido. A lâmpada não acendeu porque:",
        alternativas: [
            "a pilha perdeu instantaneamente toda sua energia química, sem alterar as demais grandezas do sistema.",
            "a corrente elétrica só existe dentro da lâmpada.",
            "o circuito ficou aberto e não houve caminho contínuo para a corrente.",
            "um circuito precisa ter obrigatoriamente duas pilhas.",
            "os elétrons foram consumidos antes de chegar à lâmpada."
        ],
        correta: 2,
        explicacao: "Para haver corrente sustentada, o circuito deve formar um caminho fechado.",
        feedbackAcerto: "Correto. Você identificou a interrupção como causa da ausência de corrente.",
        feedbackErro: "Cargas não são consumidas pela lâmpada; energia é transferida no circuito.",
        dicaBanca: "Lâmpada acesa exige circuito fechado."
    },
    {
        pergunta: "Um resistor de 20 Ω é submetido a uma tensão de 10 V. A corrente elétrica é:",
        alternativas: [
            "2 A.",
            "10 A.",
            "0,5 A.",
            "20 A.",
            "200 A."
        ],
        correta: 2,
        explicacao: "Pela Lei de Ohm, I = U/R = 10/20 = 0,5 A.",
        feedbackAcerto: "Correto. Você aplicou a relação entre tensão, resistência e corrente.",
        feedbackErro: "Multiplicar tensão por resistência não fornece corrente.",
        dicaBanca: "I = U/R."
    },
    {
        pergunta: "Em um circuito, a tensão permanece constante. Se a resistência elétrica dobra, a corrente:",
        alternativas: [
            "dobra.",
            "cai para a metade.",
            "permanece igual.",
            "quadruplica.",
            "torna-se necessariamente zero."
        ],
        correta: 1,
        explicacao: "Pela Lei de Ohm, com U constante, corrente e resistência são inversamente proporcionais.",
        feedbackAcerto: "Correto. Você interpretou a relação I = U/R.",
        feedbackErro: "Aumentar a resistência dificulta a passagem de corrente.",
        dicaBanca: "Tensão fixa: R sobe, I desce."
    },
    {
        pergunta: "Em uma residência, lâmpadas e aparelhos são ligados predominantemente em paralelo. Uma vantagem é:",
        alternativas: [
            "a corrente é obrigatoriamente igual em todos os aparelhos.",
            "cada aparelho recebe a mesma tensão e pode funcionar independentemente dos demais.",
            "se um aparelho for desligado, todos os outros também param.",
            "a tensão total é dividida igualmente entre todos os equipamentos, considerando os dados fornecidos no enunciado.",
            "o circuito dispensa dispositivos de proteção."
        ],
        correta: 1,
        explicacao: "Em paralelo, os ramos estão submetidos à mesma tensão e podem ser controlados separadamente.",
        feedbackAcerto: "Correto. Você relacionou associação em paralelo à independência dos aparelhos.",
        feedbackErro: "Em série, uma interrupção pode desligar todo o circuito.",
        dicaBanca: "Residências: ligação em paralelo."
    },
    {
        pergunta: "Um fio de resistência muito baixa conecta diretamente os terminais de uma fonte. A situação é perigosa porque:",
        alternativas: [
            "a resistência elevada impede totalmente o movimento de cargas, nas condições físicas apresentadas.",
            "a tensão da fonte desaparece sem transformação de energia.",
            "a corrente pode tornar-se muito elevada e provocar aquecimento intenso.",
            "o circuito passa a produzir apenas energia luminosa.",
            "os elétrons deixam de interagir com o material do fio."
        ],
        correta: 2,
        explicacao: "Baixa resistência sob determinada tensão pode produzir corrente intensa, aquecimento e risco de incêndio.",
        feedbackAcerto: "Correto. Você aplicou a Lei de Ohm à situação de risco.",
        feedbackErro: "Curto-circuito está associado a resistência muito baixa, não muito alta.",
        dicaBanca: "Curto: caminho de baixa resistência e corrente elevada."
    },
    {
        pergunta: "Dois ímãs são aproximados. Quando polos norte e sul ficam frente a frente, ocorre:",
        alternativas: [
            "atração.",
            "repulsão.",
            "neutralização permanente dos ímãs.",
            "criação de carga elétrica líquida.",
            "desaparecimento do campo magnético."
        ],
        correta: 0,
        explicacao: "Polos opostos se atraem; polos de mesmo nome se repelem.",
        feedbackAcerto: "Correto. Você aplicou a regra de interação magnética.",
        feedbackErro: "A aproximação não destrói obrigatoriamente o magnetismo.",
        dicaBanca: "Polos diferentes atraem; iguais repelem."
    },
    {
        pergunta: "A agulha de uma bússola orienta-se aproximadamente na direção norte-sul porque:",
        alternativas: [
            "interage com o campo magnético terrestre.",
            "é atraída diretamente pela força gravitacional do Polo Norte.",
            "recebe corrente elétrica contínua da atmosfera.",
            "aponta sempre na direção do vento predominante.",
            "reflete a luz solar em direção aos polos."
        ],
        correta: 0,
        explicacao: "A agulha imantada sofre torque e se alinha ao campo magnético da Terra.",
        feedbackAcerto: "Correto. Você identificou a interação responsável pela orientação.",
        feedbackErro: "Gravidade atua verticalmente e não explica a direção horizontal da agulha.",
        dicaBanca: "Bússola é um pequeno ímã no campo terrestre."
    },
    {
        pergunta: "Uma bobina enrolada em um núcleo de ferro torna-se magnética quando ligada a uma bateria. O fenômeno ocorre porque:",
        alternativas: [
            "o ferro transforma elétrons em polos elétricos permanentes.",
            "a bateria envia ímãs prontos para o interior da bobina.",
            "o núcleo elimina a resistência e cria energia do nada.",
            "a corrente elétrica na bobina produz campo magnético.",
            "a corrente converte integralmente o ferro em carga elétrica."
        ],
        correta: 3,
        explicacao: "Correntes elétricas geram campos magnéticos, e o núcleo de ferro intensifica o efeito.",
        feedbackAcerto: "Correto. Você relacionou eletricidade e magnetismo.",
        feedbackErro: "A bateria fornece energia e mantém corrente; não envia ímãs.",
        dicaBanca: "Corrente em bobina gera campo magnético."
    },
    {
        pergunta: "Ao mover um ímã para dentro e para fora de uma bobina, um medidor registra corrente elétrica. A corrente surge devido:",
        alternativas: [
            "ao contato mecânico obrigatório entre ímã e fio.",
            "à transformação direta da massa do ímã em elétrons.",
            "à variação do fluxo magnético através da bobina.",
            "à presença de campo magnético constante sem qualquer movimento.",
            "ao aquecimento da bobina pela luz ambiente."
        ],
        correta: 2,
        explicacao: "A indução eletromagnética ocorre quando o fluxo magnético através de um circuito varia.",
        feedbackAcerto: "Correto. Você identificou a variação, e não apenas a presença, do campo.",
        feedbackErro: "Um campo constante em relação à bobina não induz necessariamente corrente.",
        dicaBanca: "Indução exige mudança do fluxo magnético."
    },
    {
        pergunta: "Um motor transforma energia elétrica em movimento, enquanto um gerador transforma movimento em energia elétrica. Ambos utilizam:",
        alternativas: [
            "apenas transferência de calor por condução.",
            "reações nucleares de fissão em pequenos ímãs.",
            "interações entre campos magnéticos, correntes e movimento.",
            "refração da luz em fios metálicos.",
            "transformações químicas sem participação de campos, nas condições físicas apresentadas."
        ],
        correta: 2,
        explicacao: "Motores e geradores baseiam-se em princípios do eletromagnetismo.",
        feedbackAcerto: "Correto. Você reconheceu a conversão em sentidos opostos dentro do mesmo campo físico.",
        feedbackErro: "O funcionamento central não depende de óptica nem de reações nucleares.",
        dicaBanca: "Motor e gerador são aplicações do eletromagnetismo."
    },
    {
        pergunta: "Energia pode ser emitida e propagar-se na forma de ondas eletromagnéticas ou partículas. Em Física, esse transporte é chamado de:",
        alternativas: [
            "condução elétrica.",
            "convecção térmica.",
            "trabalho mecânico.",
            "radiação.",
            "refração."
        ],
        correta: 3,
        explicacao: "Radiação é energia em propagação, podendo ser eletromagnética ou corpuscular.",
        feedbackAcerto: "Correto. Você utilizou uma definição ampla e fisicamente adequada.",
        feedbackErro: "Radiação não é sinônimo exclusivo de radioatividade ou perigo.",
        dicaBanca: "Radiação é energia emitida e propagada."
    },
    {
        pergunta: "A diferença fundamental entre radiação ionizante e não ionizante é que a ionizante:",
        alternativas: [
            "só se propaga em líquidos e sólidos, de acordo com o modelo utilizado na questão.",
            "pode transferir energia suficiente para arrancar elétrons de átomos ou moléculas.",
            "não interage com a matéria.",
            "não transporta energia.",
            "é sempre letal em qualquer dose."
        ],
        correta: 1,
        explicacao: "Ionização ocorre quando a radiação remove elétrons e forma íons.",
        feedbackAcerto: "Correto. Você identificou o critério energético da classificação.",
        feedbackErro: "Efeito biológico depende de tipo, dose e condições de exposição.",
        dicaBanca: "Ionizante = energia suficiente para remover elétrons."
    },
    {
        pergunta: "Em exames médicos, raios X atravessam tecidos de modo diferente e formam imagens internas. O controle de dose é necessário porque eles:",
        alternativas: [
            "são ondas sonoras que rompem tecidos por vibração.",
            "não transportam energia e por isso exigem amplificação.",
            "são correntes elétricas que permanecem no corpo.",
            "produzem sempre danos graves mesmo em qualquer exposição mínima.",
            "são radiações ionizantes e podem causar efeitos biológicos."
        ],
        correta: 4,
        explicacao: "Raios X são úteis no diagnóstico, mas a exposição deve ser justificada e otimizada.",
        feedbackAcerto: "Correto. Você reconheceu benefício e risco dependente da exposição.",
        feedbackErro: "Ionizante não significa automaticamente fatal; dose e proteção importam.",
        dicaBanca: "Uso médico: benefício, dose e proteção."
    },
    {
        pergunta: "Uma antena transmite sinais que atravessam o espaço e são captados por um receptor. As ondas de rádio são:",
        alternativas: [
            "ondas eletromagnéticas não ionizantes em aplicações usuais.",
            "ondas mecânicas que dependem obrigatoriamente de ar.",
            "correntes de elétrons que viajam diretamente da antena ao receptor.",
            "ondas sonoras acima do limite de audição.",
            "radiações ionizantes equivalentes aos raios X."
        ],
        correta: 0,
        explicacao: "Ondas de rádio pertencem ao espectro eletromagnético e podem propagar-se no vácuo.",
        feedbackAcerto: "Correto. Você diferenciou sinal eletromagnético de som e corrente no fio.",
        feedbackErro: "A antena produz campos variáveis; elétrons não viajam até o receptor.",
        dicaBanca: "Rádio é eletromagnético, não sonoro."
    },
    {
        pergunta: "Em um forno, micro-ondas transferem energia ao alimento e favorecem o aquecimento de regiões com moléculas polares. Isso demonstra que:",
        alternativas: [
            "apenas radiação ionizante consegue aquecer materiais.",
            "micro-ondas são ondas sonoras produzidas pelo aparelho.",
            "o aquecimento resulta de reações nucleares no alimento.",
            "não ionizante significa incapaz de produzir qualquer efeito físico, nas condições físicas apresentadas.",
            "radiação não ionizante pode interagir com a matéria e transferir energia."
        ],
        correta: 4,
        explicacao: "Micro-ondas são eletromagnéticas não ionizantes e podem provocar aquecimento.",
        feedbackAcerto: "Correto. Você evitou confundir não ionizante com ausência de interação.",
        feedbackErro: "A classificação trata da capacidade de ionizar, não da incapacidade de transferir energia.",
        dicaBanca: "Não ionizante também transporta energia."
    },
    {
        pergunta: "Ao projetar um sistema de frenagem, engenheiros analisam velocidade, massa, atrito, distância de parada e dissipação de energia. O exemplo mostra que a Física:",
        alternativas: [
            "atua somente na composição química do combustível.",
            "é dispensável quando o veículo possui controle eletrônico.",
            "estuda movimento sem considerar forças ou energia.",
            "permite relacionar grandezas e leis para aumentar eficiência e segurança nos transportes.",
            "substitui testes práticos por fórmulas sem condições reais, sem alterar as demais grandezas do sistema."
        ],
        correta: 3,
        explicacao: "Mecânica, energia, atrito e potência são fundamentais no estudo de transportes.",
        feedbackAcerto: "Correto. Você reconheceu a aplicação integrada de conceitos físicos.",
        feedbackErro: "Modelos físicos orientam projetos, mas devem dialogar com testes e condições reais.",
        dicaBanca: "Transporte envolve movimento, força, energia e segurança."
    },
    {
        pergunta: "Um aparelho recebe 500 J de energia e transforma 350 J na forma útil desejada. Seu rendimento é:",
        alternativas: [
            "70%.",
            "30%.",
            "50%.",
            "85%.",
            "150%."
        ],
        correta: 0,
        explicacao: "η = Eútil/Etotal × 100 = 350/500 × 100 = 70%.",
        feedbackAcerto: "Correto. Você comparou energia útil com energia fornecida.",
        feedbackErro: "A energia restante foi dissipada em outras formas; rendimento real é menor que 100%.",
        dicaBanca: "Rendimento = útil/total × 100."
    },
    {
        pergunta: "Uma questão fornece massa em gramas, velocidade em m/s e pede energia cinética em joules. Antes de substituir valores na fórmula, o procedimento mais adequado é:",
        alternativas: [
            "usar os números diretamente, pois unidades não interferem no resultado.",
            "identificar as grandezas, converter a massa para quilogramas e verificar a coerência das unidades.",
            "somar massa e velocidade para obter uma estimativa.",
            "escolher a alternativa com maior número de casas decimais.",
            "converter a velocidade para km/h, mesmo que a fórmula use unidades do SI, durante o intervalo analisado."
        ],
        correta: 1,
        explicacao: "A resolução física exige leitura das grandezas, conversão de unidades e escolha coerente da relação matemática.",
        feedbackAcerto: "Correto. Você priorizou análise dimensional antes do cálculo.",
        feedbackErro: "Substituir valores incompatíveis produz resultados numericamente possíveis, mas fisicamente incorretos.",
        dicaBanca: "Antes da fórmula: grandezas, unidades e condições."
    }
];
