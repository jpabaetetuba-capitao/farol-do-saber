const hardware = [

{
    pergunta: "Em relação aos componentes de hardware de um computador, assinale a alternativa correta.",

    alternativas: [

        "A memória RAM é uma memória não volátil utilizada para armazenamento permanente de arquivos do usuário.",

        "O SSD utiliza tecnologia baseada em memória flash e, em regra, não possui partes mecânicas móveis.",

        "A CPU é um dispositivo de armazenamento responsável por guardar documentos e programas instalados.",

        "A ROM é uma memória volátil que perde seu conteúdo quando o computador é desligado.",

        "O monitor é classificado como periférico de entrada, pois recebe comandos do usuário."

    ],

    correta: 1,

    feedbackAcerto: "Correto. O SSD utiliza memória flash para armazenar dados e normalmente não possui partes mecânicas móveis, oferecendo maior velocidade e resistência quando comparado aos discos rígidos tradicionais.",

    feedbackErro: "A alternativa correta é a letra B. A memória RAM é volátil, a CPU realiza processamento e não armazenamento, a ROM é não volátil e o monitor é um periférico de saída. Questões sobre diferenças entre RAM, ROM, CPU, HD e SSD são muito frequentes em concursos.",

    dicaBanca: "Ágata e IVIN costumam trocar as características de RAM, ROM, CPU e SSD para induzir o candidato ao erro."
},


{
    pergunta: "Sobre os diferentes tipos de memória utilizados em computadores, assinale a alternativa correta.",

    alternativas: [

        "A memória ROM perde seu conteúdo sempre que o computador é desligado.",

        "A memória Cache possui velocidade inferior à memória RAM e é utilizada para armazenamento permanente.",

        "A memória RAM é utilizada para armazenamento temporário de dados e programas em execução.",

        "A memória Cache é responsável por armazenar arquivos do usuário de forma permanente.",

        "A memória ROM é utilizada exclusivamente para armazenar documentos produzidos pelo usuário."

    ],

    correta: 2,

    feedbackAcerto: "Correto. A memória RAM (Random Access Memory) armazena temporariamente dados e instruções dos programas que estão sendo executados. Seu conteúdo é perdido quando o computador é desligado, motivo pelo qual é classificada como memória volátil.",

    feedbackErro: "A alternativa correta é a letra C. A memória RAM é volátil e utilizada durante a execução dos programas. A ROM é uma memória não volátil, normalmente utilizada para armazenar instruções essenciais de inicialização do sistema. Já a memória Cache é extremamente rápida e auxilia a CPU, armazenando temporariamente dados frequentemente utilizados para aumentar o desempenho do processamento.",

    dicaBanca: "Questões da Ágata e da IVIN costumam confundir RAM, ROM e Cache. Memorize: RAM = temporária; ROM = permanente; Cache = muito rápida e próxima da CPU."
},
{
    pergunta: "Observe a imagem e assinale a alternativa correta.",

    imagem: "imagens/questoes/hardware01.png",

    alternativas: [

        "Periférico de entrada",

        "Periférico de saída",

        "Dispositivo híbrido",

        "Memória secundária",

        "Unidade de processamento"

    ],

    correta: 0,

    feedbackAcerto: "Correto. O scanner é um periférico de entrada, pois captura informações do meio externo e as envia para o computador.",

    feedbackErro: "A alternativa correta é a letra A. O scanner é um periférico de entrada. Sua função é digitalizar documentos, fotos e imagens para que possam ser processados pelo computador.",

    dicaBanca: "Ágata e IVIN costumam cobrar a classificação de periféricos em entrada, saída e híbridos."
},
{
    pergunta: "Sobre a memória Cache presente nos computadores modernos, assinale a alternativa correta.",

    alternativas: [

        "É utilizada para armazenamento permanente de arquivos do usuário.",

        "É uma memória extremamente rápida utilizada para reduzir o tempo de acesso aos dados mais frequentemente utilizados pelo processador.",

        "Substitui completamente a memória RAM durante a execução dos programas.",

        "Armazena o sistema operacional de forma permanente.",

        "Tem a mesma função e velocidade de um SSD."

    ],

    correta: 1,

    feedbackAcerto: "Correto! A memória Cache é uma memória de alta velocidade localizada próxima ou integrada ao processador. Sua função é armazenar temporariamente dados frequentemente utilizados, reduzindo o tempo de acesso e aumentando o desempenho do sistema.",

    feedbackErro: `
A alternativa correta é a letra B.

A memória Cache é uma memória extremamente rápida utilizada para armazenar temporariamente informações que possuem alta probabilidade de serem reutilizadas pelo processador.

Seu principal objetivo é diminuir o tempo necessário para acessar dados que normalmente estariam armazenados na memória RAM.

Em termos de velocidade, a hierarquia normalmente cobrada em concursos é:

Registradores → Cache → RAM → SSD → HD

Quanto mais próxima da CPU, maior a velocidade e menor a capacidade.

Muitas bancas tentam confundir Cache com RAM ou SSD. A Cache não substitui nenhum desses componentes; ela apenas auxilia o processador a trabalhar com mais eficiência.

Questões sobre hierarquia de memória são bastante frequentes em provas de Informática.
`,

    dicaBanca: "Cache = desempenho e velocidade."
},
{
    pergunta: "Assinale a alternativa que apresenta apenas componentes classificados como memórias voláteis.",

    alternativas: [

        "RAM e Cache.",

        "ROM e SSD.",

        "SSD e HD.",

        "ROM e Cache.",

        "Pendrive e RAM."

    ],

    correta: 0,

    feedbackAcerto: "Perfeito! Tanto a memória RAM quanto a memória Cache perdem seus dados quando a alimentação elétrica é interrompida.",

    feedbackErro: `
A alternativa correta é a letra A.

Memórias voláteis são aquelas que dependem de energia elétrica para manter as informações armazenadas.

Quando o computador é desligado, todo o conteúdo armazenado na RAM e na Cache é perdido.

Já SSD, HD, ROM, pendrives e cartões de memória são considerados dispositivos ou memórias não voláteis, pois mantêm as informações mesmo sem energia.

Essa diferença é extremamente cobrada em concursos públicos e costuma aparecer em questões conceituais ou em comparações entre componentes.

Uma dica importante é associar a RAM à execução temporária de programas, enquanto SSD e HD estão ligados ao armazenamento permanente.
`,

    dicaBanca: "Volátil = perde dados ao desligar."
},
{
    pergunta: "Uma das principais vantagens do SSD em relação ao HD tradicional é:",

    alternativas: [

        "Maior consumo de energia.",

        "Maior presença de componentes mecânicos.",

        "Maior velocidade de leitura e gravação de dados.",

        "Necessidade de desfragmentação constante.",

        "Menor resistência a impactos."

    ],

    correta: 2,

    feedbackAcerto: "Correto! Os SSDs apresentam velocidades significativamente superiores às dos HDs tradicionais.",

    feedbackErro: `
A alternativa correta é a letra C.

O SSD (Solid State Drive) utiliza memória flash para armazenar dados, eliminando a necessidade de discos magnéticos e partes mecânicas presentes nos HDs tradicionais.

Como consequência, o SSD oferece:

• Inicialização mais rápida do sistema;
• Maior velocidade de leitura e gravação;
• Menor consumo de energia;
• Menor geração de calor;
• Maior resistência a impactos.

Muitas bancas gostam de comparar SSD e HD em termos de velocidade, durabilidade e estrutura física.

Lembre-se: HD possui partes mecânicas; SSD não possui.
`,

    dicaBanca: "SSD = desempenho."
},
{
    pergunta: "A respeito da Unidade Central de Processamento (CPU), assinale a alternativa correta.",

    alternativas: [

        "É responsável pelo armazenamento permanente dos arquivos.",

        "Executa instruções e realiza operações lógicas e aritméticas.",

        "Possui a mesma função da memória RAM.",

        "Tem como principal função exibir imagens no monitor.",

        "É utilizada exclusivamente para conexões de rede."

    ],

    correta: 1,

    feedbackAcerto: "Excelente! A CPU é responsável pela execução das instruções e pelo processamento das informações.",

    feedbackErro: `
A alternativa correta é a letra B.

A CPU, também chamada de processador, é considerada o principal componente responsável pelo processamento das informações em um computador.

Ela interpreta instruções, realiza cálculos matemáticos e executa operações lógicas necessárias ao funcionamento dos programas.

Embora trabalhe em conjunto com RAM, SSD e demais componentes, a CPU possui função específica de processamento.

É comum em concursos a associação:

CPU → processamento;
RAM → armazenamento temporário;
SSD/HD → armazenamento permanente.

Compreender essa divisão de responsabilidades ajuda a resolver diversas questões de hardware.
`,

    dicaBanca: "CPU = processamento."
},
{
    pergunta: "Sobre a placa-mãe (motherboard), assinale a alternativa correta.",

    alternativas: [

        "É responsável pela exibição de imagens no monitor.",

        "Tem como função principal armazenar arquivos do usuário.",

        "Interliga e permite a comunicação entre os diversos componentes do computador.",

        "Substitui a memória RAM durante o processamento.",

        "É utilizada exclusivamente para acesso à internet."

    ],

    correta: 2,

    feedbackAcerto: "Correto! A placa-mãe funciona como a principal plataforma de integração dos componentes do computador.",

    feedbackErro: `
A alternativa correta é a letra C.

A placa-mãe é o componente responsável por conectar fisicamente e eletronicamente os diversos dispositivos do computador.

Nela são instalados componentes como:

• Processador;
• Memória RAM;
• Placa de vídeo;
• SSDs;
• Placas de expansão.

Sem a placa-mãe, os componentes não conseguiriam se comunicar adequadamente.

As bancas costumam apresentar alternativas confundindo a função da placa-mãe com a função da CPU, da memória RAM ou da placa de vídeo.

Lembre-se: a placa-mãe não processa dados nem armazena arquivos. Sua função principal é integrar os componentes do sistema.
`,

    dicaBanca: "Placa-mãe = integração dos componentes."
},
{
    pergunta: "Em relação aos componentes de hardware de um computador, assinale a alternativa correta.",

    alternativas: [

        "A GPU é responsável pelo armazenamento permanente dos dados.",

        "A CPU e a GPU possuem exatamente a mesma função.",

        "A GPU é especializada no processamento gráfico, enquanto a CPU realiza processamento de propósito geral.",

        "A CPU é utilizada exclusivamente para executar jogos.",

        "A GPU substitui a memória RAM durante a execução de programas."

    ],

    correta: 2,

    feedbackAcerto: "Correto! A CPU realiza processamento geral, enquanto a GPU é especializada em operações gráficas e paralelas.",

    feedbackErro: `
A alternativa correta é a letra C.

A CPU (Central Processing Unit) é responsável pela execução geral das instruções do sistema operacional e dos programas.

Já a GPU (Graphics Processing Unit) foi desenvolvida para lidar com processamento gráfico, renderização de imagens, vídeos e jogos.

Nos computadores modernos, a GPU também é utilizada em aplicações de inteligência artificial, mineração de dados e processamento paralelo.

Uma pegadinha muito comum em concursos é afirmar que a GPU substitui a CPU ou vice-versa. Isso é incorreto, pois ambos possuem funções diferentes e complementares.

Sempre associe:

CPU = processamento geral.

GPU = processamento gráfico.
`,

    dicaBanca: "CPU ≠ GPU."
},
{
    pergunta: "A respeito da interface USB (Universal Serial Bus), assinale a alternativa correta.",

    alternativas: [

        "É utilizada exclusivamente para transmissão de vídeo.",

        "Permite a conexão de diversos dispositivos periféricos ao computador.",

        "É utilizada apenas para acesso à internet.",

        "Substitui a memória RAM.",

        "É um tipo de memória permanente."

    ],

    correta: 1,

    feedbackAcerto: "Correto! A USB é uma interface universal utilizada para conectar diversos dispositivos ao computador.",

    feedbackErro: `
A alternativa correta é a letra B.

USB significa Universal Serial Bus e é uma das interfaces mais utilizadas na informática moderna.

Ela permite conectar diversos dispositivos, como:

• Mouse;
• Teclado;
• Impressora;
• Scanner;
• Pendrive;
• HD externo;
• Webcam.

As versões mais recentes da tecnologia USB também permitem transmissão de energia e dados em alta velocidade.

Muitas bancas tentam confundir USB com HDMI, RJ-45 ou Bluetooth.

USB é uma interface de conexão de periféricos e transferência de dados.
`,

    dicaBanca: "USB = periféricos."
},
{
    pergunta: "Assinale a alternativa que descreve corretamente a função da interface HDMI.",

    alternativas: [

        "Transmitir exclusivamente áudio analógico.",

        "Conectar computadores a redes locais.",

        "Transmitir áudio e vídeo digitais por um único cabo.",

        "Armazenar dados permanentemente.",

        "Conectar dispositivos USB."

    ],

    correta: 2,

    feedbackAcerto: "Perfeito! HDMI transmite áudio e vídeo digitais simultaneamente.",

    feedbackErro: `
A alternativa correta é a letra C.

HDMI significa High Definition Multimedia Interface.

Essa tecnologia foi criada para transmitir sinais digitais de áudio e vídeo em alta qualidade através de um único cabo.

Ela é amplamente utilizada em:

• Monitores;
• Televisores;
• Projetores;
• Videogames;
• Computadores.

Questões de concurso frequentemente comparam HDMI com:

RJ-45 → rede.

USB → periféricos.

HDMI → áudio e vídeo.

Memorizar essa associação costuma resolver várias questões.
`,

    dicaBanca: "HDMI = áudio + vídeo."
},
{
    pergunta: "O conector RJ-45 está diretamente associado a qual tecnologia?",

    alternativas: [

        "Vídeo digital.",

        "Áudio analógico.",

        "Redes Ethernet.",

        "Memória RAM.",

        "Armazenamento SSD."

    ],

    correta: 2,

    feedbackAcerto: "Correto! O RJ-45 é o conector padrão utilizado em redes Ethernet cabeadas.",

    feedbackErro: `
A alternativa correta é a letra C.

O conector RJ-45 é utilizado em cabos de rede do tipo par trançado.

Seu principal objetivo é permitir a comunicação entre computadores, switches, roteadores e demais dispositivos de rede.

É muito comum que bancas apresentem imagens de conectores e solicitem sua identificação.

Associações importantes:

RJ-45 → Rede.

USB → Periféricos.

HDMI → Áudio e vídeo.

P2/P3 → Áudio.

Conhecer essas associações é fundamental para provas de informática.
`,

    dicaBanca: "RJ-45 = rede Ethernet."
},
{
    pergunta: "Assinale a alternativa que contém apenas dispositivos classificados como periféricos de entrada.",

    alternativas: [

        "Monitor, impressora e caixa de som.",

        "Scanner, teclado e mouse.",

        "Monitor, scanner e projetor.",

        "Impressora, mouse e teclado.",

        "Caixa de som, webcam e monitor."

    ],

    correta: 1,

    feedbackAcerto: "Excelente! Scanner, teclado e mouse são dispositivos que enviam informações ao computador.",

    feedbackErro: `
A alternativa correta é a letra B.

Dispositivos de entrada são aqueles responsáveis por enviar dados ao computador.

Exemplos:

• Teclado;
• Mouse;
• Scanner;
• Webcam;
• Microfone.

Já os dispositivos de saída apresentam informações ao usuário:

• Monitor;
• Impressora;
• Projetor;
• Caixa de som.

Essa classificação é uma das mais cobradas em concursos públicos de informática.
`,

    dicaBanca: "Entrada = envia dados ao computador."
},
{
    pergunta: "A BIOS (Basic Input/Output System), presente nos computadores tradicionais, é normalmente armazenada em:",

    alternativas: [

        "Memória RAM.",

        "Memória Cache.",

        "Memória ROM.",

        "SSD.",

        "GPU."

    ],

    correta: 2,

    feedbackAcerto: "Correto! A BIOS é tradicionalmente armazenada em memória ROM, pois suas informações devem permanecer disponíveis mesmo após o desligamento do computador.",

    feedbackErro: `
A alternativa correta é a letra C.

A BIOS é um firmware responsável por iniciar o hardware do computador durante o processo de boot.

Para que essas informações não sejam perdidas quando o computador é desligado, elas precisam ser armazenadas em uma memória não volátil.

Historicamente, essa memória é a ROM (Read Only Memory).

Muitas bancas tentam confundir BIOS com RAM.

Lembre-se:

RAM = memória temporária.

ROM = memória permanente utilizada para armazenar instruções fundamentais de inicialização.

Atualmente a BIOS tradicional vem sendo substituída pela UEFI, mas o conceito cobrado em concursos continua sendo o mesmo.
`,
    dicaBanca: "BIOS → ROM."
},
{
    pergunta: "Quando um fabricante informa que determinado processador opera a 3,8 GHz, essa informação refere-se:",

    alternativas: [

        "À capacidade de armazenamento do processador.",

        "À frequência de operação do processador.",

        "À quantidade de memória RAM suportada.",

        "À velocidade da conexão de rede.",

        "À capacidade gráfica da GPU."

    ],

    correta: 1,

    feedbackAcerto: "Perfeito! O clock representa a frequência de operação do processador.",

    feedbackErro: `
A alternativa correta é a letra B.

O clock é medido em Hertz (Hz) e representa a quantidade de ciclos que o processador consegue executar por segundo.

Em computadores modernos é comum encontrar valores expressos em GHz (Gigahertz).

Embora um clock maior geralmente indique maior capacidade de processamento, o desempenho final depende também de diversos fatores:

• Número de núcleos;
• Memória Cache;
• Arquitetura;
• Tecnologia de fabricação.

Uma pegadinha comum é afirmar que GHz representa armazenamento ou memória, o que está incorreto.

GHz está relacionado à frequência de operação do processador.
`,
    dicaBanca: "GHz = frequência."
},
{
    pergunta: "A principal função da fonte de alimentação em um computador é:",

    alternativas: [

        "Armazenar energia para utilização futura.",

        "Converter energia elétrica e distribuí-la aos componentes.",

        "Controlar o acesso à internet.",

        "Executar instruções do sistema operacional.",

        "Gerenciar a memória RAM."

    ],

    correta: 1,

    feedbackAcerto: "Correto! A fonte converte e distribui energia para todos os componentes do computador.",

    feedbackErro: `
A alternativa correta é a letra B.

A fonte de alimentação é responsável por converter a corrente elétrica da rede em níveis adequados para os componentes internos do computador.

Ela fornece energia para:

• Processador;
• Placa-mãe;
• Memória RAM;
• SSD;
• HD;
• Placa de vídeo.

Sem uma fonte adequada, o computador não consegue operar corretamente.

Muitas bancas confundem a função da fonte com armazenamento de energia, semelhante a uma bateria, o que não corresponde à realidade dos computadores convencionais.
`,
    dicaBanca: "Fonte = energia."
},
{
    pergunta: "Assinale a alternativa que apresenta apenas componentes classificados como hardware interno.",

    alternativas: [

        "CPU, RAM e SSD.",

        "Monitor, teclado e mouse.",

        "Scanner, impressora e webcam.",

        "Projetor, monitor e caixa de som.",

        "Mouse, SSD e teclado."

    ],

    correta: 0,

    feedbackAcerto: "Correto! CPU, RAM e SSD são componentes instalados internamente no computador.",

    feedbackErro: `
A alternativa correta é a letra A.

Hardware interno corresponde aos componentes instalados dentro do gabinete ou integrados ao equipamento.

Exemplos:

• Processador;
• Memória RAM;
• SSD;
• HD;
• Placa-mãe;
• Placa de vídeo.

Já os dispositivos externos normalmente são classificados como periféricos.

Exemplos:

• Teclado;
• Mouse;
• Impressora;
• Scanner;
• Webcam.

As bancas costumam cobrar essa classificação em conjunto com periféricos de entrada e saída.
`,
    dicaBanca: "Interno = dentro do computador."
},
{
    pergunta: "Os barramentos existentes em um computador têm como principal finalidade:",

    alternativas: [

        "Realizar armazenamento permanente de dados.",

        "Transmitir informações entre os componentes do sistema.",

        "Exibir imagens no monitor.",

        "Substituir a memória RAM.",

        "Controlar exclusivamente a placa de vídeo."

    ],

    correta: 1,

    feedbackAcerto: "Correto! Os barramentos permitem a comunicação entre os diversos componentes do computador.",

    feedbackErro: `
A alternativa correta é a letra B.

Os barramentos são caminhos de comunicação utilizados para transportar dados, endereços e sinais de controle entre os componentes do computador.

Eles permitem a interação entre:

• CPU;
• Memória RAM;
• Placa-mãe;
• Dispositivos de armazenamento;
• Periféricos.

Sem os barramentos, os componentes não conseguiriam trocar informações.

Embora seja um assunto menos frequente, aparece ocasionalmente em concursos de informática de nível médio e técnico.
`,
    dicaBanca: "Barramento = comunicação."
},
{
    pergunta: "Sobre os dispositivos de saída utilizados para impressão de documentos, assinale a alternativa correta.",

    alternativas: [

        "Impressoras são classificadas como dispositivos de entrada.",

        "Impressoras possuem como principal função armazenar documentos.",

        "Impressoras são periféricos de saída responsáveis pela reprodução de informações em meio físico.",

        "Impressoras modernas são utilizadas exclusivamente para digitalização.",

        "Impressoras substituem a função dos monitores."

    ],

    correta: 2,

    feedbackAcerto: "Correto! Impressoras são periféricos de saída que transferem informações digitais para um meio físico, normalmente papel.",

    feedbackErro: `
A alternativa correta é a letra C.

As impressoras são classificadas como dispositivos de saída porque recebem informações do computador e as apresentam ao usuário em formato físico.

Entre os tipos mais comuns encontram-se:

• Impressora jato de tinta;
• Impressora laser;
• Impressora matricial.

As bancas costumam cobrar a classificação dos periféricos em entrada, saída ou entrada e saída.

Lembre-se:

Teclado → Entrada

Mouse → Entrada

Scanner → Entrada

Monitor → Saída

Impressora → Saída

Projetor → Saída

Essa é uma das classificações mais frequentes em provas de informática.
`,
    dicaBanca: "Impressora = dispositivo de saída."
},
{
    pergunta: "O monitor de vídeo é classificado como:",

    alternativas: [

        "Dispositivo de armazenamento.",

        "Dispositivo de processamento.",

        "Dispositivo de entrada.",

        "Dispositivo de saída.",

        "Dispositivo de comunicação."

    ],

    correta: 3,

    feedbackAcerto: "Perfeito! O monitor apresenta visualmente ao usuário as informações processadas pelo computador.",

    feedbackErro: `
A alternativa correta é a letra D.

O monitor é um periférico de saída, pois sua função é exibir informações geradas pelo computador.

Ele não realiza processamento nem armazenamento permanente.

Uma pegadinha comum das bancas é misturar funções dos componentes:

CPU → Processamento

RAM → Armazenamento temporário

SSD/HD → Armazenamento permanente

Monitor → Saída de dados

O monitor apenas apresenta os resultados ao usuário.
`,
    dicaBanca: "Monitor = saída."
},
{
    pergunta: "A webcam utilizada em videoconferências é classificada como:",

    alternativas: [

        "Dispositivo de saída.",

        "Dispositivo de entrada.",

        "Dispositivo de armazenamento.",

        "Dispositivo de processamento.",

        "Dispositivo de comunicação de rede."

    ],

    correta: 1,

    feedbackAcerto: "Correto! A webcam captura imagens e vídeos e os envia ao computador.",

    feedbackErro: `
A alternativa correta é a letra B.

A webcam é um dispositivo de entrada porque sua função é capturar informações externas e enviá-las ao computador.

O mesmo raciocínio vale para:

• Microfone;
• Scanner;
• Mouse;
• Teclado.

Já dispositivos como monitor e impressora são classificados como saída.

Em concursos públicos é muito comum a cobrança da classificação correta dos periféricos.
`,
    dicaBanca: "Webcam = entrada."
},
{
    pergunta: "Assinale a alternativa que classifica corretamente o microfone.",

    alternativas: [

        "Dispositivo de saída.",

        "Dispositivo de armazenamento.",

        "Dispositivo de entrada.",

        "Dispositivo de processamento.",

        "Dispositivo híbrido de armazenamento."

    ],

    correta: 2,

    feedbackAcerto: "Correto! O microfone capta sons e os envia ao computador para processamento.",

    feedbackErro: `
A alternativa correta é a letra C.

O microfone é um periférico de entrada porque sua função consiste em capturar sons do ambiente e convertê-los em sinais que possam ser processados pelo computador.

Essa informação costuma aparecer em conjunto com questões sobre:

• Webcam;
• Scanner;
• Teclado;
• Mouse.

Todos esses equipamentos enviam informações ao sistema e, portanto, são classificados como dispositivos de entrada.

A banca costuma explorar justamente a confusão entre dispositivos de entrada e saída.
`,
    dicaBanca: "Microfone = entrada."
},
{
    pergunta: "Em relação ao pendrive, assinale a alternativa correta.",

    alternativas: [

        "É uma memória volátil utilizada durante a execução dos programas.",

        "É um dispositivo de armazenamento removível baseado em memória flash.",

        "Substitui a função da memória RAM.",

        "É utilizado exclusivamente para conexão com a internet.",

        "Não permite gravação de dados pelo usuário."

    ],

    correta: 1,

    feedbackAcerto: "Correto! O pendrive é um dispositivo removível que utiliza memória flash para armazenamento de dados.",

    feedbackErro: `
A alternativa correta é a letra B.

O pendrive é um dispositivo de armazenamento removível amplamente utilizado para transporte e transferência de arquivos.

Sua tecnologia baseia-se em memória flash, que possui característica não volátil, ou seja, os dados permanecem armazenados mesmo sem alimentação elétrica.

É importante diferenciar:

RAM → memória temporária e volátil.

Pendrive → armazenamento permanente e não volátil.

SSD → armazenamento permanente interno ou externo.

As bancas frequentemente exploram essa diferença entre memória de trabalho e dispositivos de armazenamento.
`,
    dicaBanca: "Pendrive = armazenamento removível."
},
{
    pergunta: "Os cartões de memória utilizados em celulares, câmeras digitais e outros dispositivos eletrônicos são classificados como:",

    alternativas: [

        "Memórias voláteis.",

        "Dispositivos de armazenamento não volátil.",

        "Dispositivos de processamento.",

        "Interfaces de comunicação.",

        "Periféricos de saída."

    ],

    correta: 1,

    feedbackAcerto: "Correto! Cartões de memória são meios de armazenamento permanente baseados em memória flash.",

    feedbackErro: `
A alternativa correta é a letra B.

Cartões de memória, assim como pendrives e SSDs, utilizam memória flash para armazenar informações.

Por serem dispositivos não voláteis, mantêm os dados gravados mesmo após o desligamento do equipamento.

São amplamente utilizados em:

• Smartphones;
• Tablets;
• Câmeras digitais;
• Drones;
• Consoles portáteis.

Uma pegadinha comum consiste em associá-los à RAM apenas por ambos serem chamados de memória. Entretanto, suas funções são completamente diferentes.
`,
    dicaBanca: "Cartão de memória = memória flash."
},
{
    pergunta: "A tecnologia Bluetooth tem como principal finalidade:",

    alternativas: [

        "Realizar armazenamento permanente de dados.",

        "Permitir comunicação sem fio de curto alcance entre dispositivos.",

        "Substituir a memória RAM.",

        "Transmitir exclusivamente vídeo digital.",

        "Realizar processamento gráfico."

    ],

    correta: 1,

    feedbackAcerto: "Perfeito! O Bluetooth permite a comunicação sem fio entre dispositivos próximos.",

    feedbackErro: `
A alternativa correta é a letra B.

Bluetooth é uma tecnologia de comunicação sem fio de curto alcance utilizada para conectar dispositivos eletrônicos.

Exemplos de utilização:

• Fones de ouvido;
• Teclados sem fio;
• Mouse sem fio;
• Smartphones;
• Smartwatches.

As bancas costumam comparar Bluetooth com Wi-Fi.

Bluetooth → curto alcance e baixo consumo de energia.

Wi-Fi → maior alcance e acesso à rede.

Essa diferença é frequentemente explorada em provas de informática.
`,
    dicaBanca: "Bluetooth = curto alcance."
},
{
    pergunta: "Assinale a alternativa correta sobre a tecnologia Wi-Fi.",

    alternativas: [

        "É uma tecnologia de armazenamento de dados.",

        "É utilizada exclusivamente para impressão de documentos.",

        "Permite a comunicação em redes sem fio.",

        "Substitui o processador do computador.",

        "É um tipo de memória permanente."

    ],

    correta: 2,

    feedbackAcerto: "Correto! Wi-Fi é uma tecnologia utilizada para comunicação em redes sem fio.",

    feedbackErro: `
A alternativa correta é a letra C.

Wi-Fi é uma tecnologia baseada em padrões IEEE 802.11 utilizada para comunicação de dados sem a necessidade de cabos.

Seu principal objetivo é permitir que dispositivos acessem redes locais e a internet por meio de sinais de rádio.

Exemplos de dispositivos que utilizam Wi-Fi:

• Computadores;
• Smartphones;
• Tablets;
• Smart TVs;
• Impressoras de rede.

Uma comparação clássica em concursos:

RJ-45 → rede cabeada.

Wi-Fi → rede sem fio.

Bluetooth → comunicação sem fio de curto alcance.
`,
    dicaBanca: "Wi-Fi = rede sem fio."
},
{
    pergunta: "Em relação aos computadores do tipo notebook e desktop, assinale a alternativa correta.",

    alternativas: [

        "Somente desktops possuem processador.",

        "Notebooks não possuem memória RAM.",

        "Tanto notebooks quanto desktops possuem componentes equivalentes, embora em formatos diferentes.",

        "Desktops não utilizam sistemas operacionais.",

        "Notebooks não permitem conexão com redes."

    ],

    correta: 2,

    feedbackAcerto: "Correto! Apesar das diferenças físicas, ambos possuem componentes equivalentes para processamento, armazenamento e comunicação.",

    feedbackErro: `
A alternativa correta é a letra C.

Notebooks e desktops possuem arquitetura semelhante.

Ambos utilizam:

• Processador;
• Memória RAM;
• Armazenamento;
• Sistema operacional;
• Interfaces de comunicação.

A principal diferença está no formato físico e na mobilidade.

Notebooks são projetados para portabilidade, enquanto desktops normalmente oferecem maior facilidade de expansão e manutenção.

As bancas costumam apresentar afirmações exageradas, sugerindo que um tipo de equipamento possui recursos inexistentes no outro, o que geralmente está incorreto.
`,
    dicaBanca: "Notebook e desktop possuem os mesmos componentes básicos."
},
{
    pergunta: "Observe a imagem e assinale a alternativa correta sobre os conectores apresentados.",

    imagem: "imagens/questoes/hardware02.png",

    alternativas: [

        "O conector HDMI é utilizado para conexão de redes Ethernet.",

        "O conector RJ-45 é utilizado para transmissão de áudio e vídeo digital.",

        "O conector USB-C pode ser utilizado para transferência de dados, fornecimento de energia e, dependendo do dispositivo, transmissão de vídeo.",

        "O conector USB-A é utilizado exclusivamente para fornecimento de energia.",

        "O conector HDMI é utilizado para armazenamento permanente de dados."

    ],

    correta: 2,

    feedbackAcerto: "...",

    feedbackErro: "...",

    dicaBanca: "Conheça a função principal de cada interface."
},
{
    pergunta: "Associe corretamente os componentes de hardware às suas respectivas funções e assinale a alternativa correta.",

    alternativas: [

        "CPU → armazenamento permanente; SSD → processamento; RAM → exibição de imagens.",

        "RAM → armazenamento temporário; CPU → processamento; SSD → armazenamento permanente.",

        "GPU → armazenamento permanente; RAM → processamento; CPU → armazenamento temporário.",

        "ROM → processamento; SSD → memória volátil; RAM → armazenamento permanente.",

        "Cache → armazenamento permanente; CPU → armazenamento temporário; SSD → processamento."

    ],

    correta: 1,

    feedbackAcerto: "Correto! A RAM armazena temporariamente dados em uso, a CPU realiza o processamento e o SSD realiza armazenamento permanente.",

    feedbackErro: `
A alternativa correta é a letra B.

Essa questão exige o conhecimento das funções fundamentais dos principais componentes:

CPU:
Responsável pela execução de instruções e processamento de dados.

RAM:
Armazena temporariamente programas e dados em uso.

SSD:
Armazena permanentemente arquivos e programas.

Uma das estratégias mais comuns das bancas é trocar as funções dos componentes para induzir o erro.

Sempre procure associar cada componente à sua função principal antes de analisar detalhes mais específicos.
`,
    dicaBanca: "CPU = processa | RAM = temporária | SSD = permanente."
},
{
    pergunta: `
Analise as afirmativas abaixo:

I. O SSD é um dispositivo de armazenamento não volátil.

II. A memória RAM perde seus dados quando o computador é desligado.

III. O conector RJ-45 é utilizado em redes Ethernet.

Assinale a alternativa correta.
`,

    alternativas: [

        "Apenas I está correta.",

        "Apenas I e II estão corretas.",

        "Apenas II e III estão corretas.",

        "I, II e III estão corretas.",

        "Apenas III está correta."

    ],

    correta: 3,

    feedbackAcerto: "Perfeito! As três afirmativas estão corretas e representam conceitos clássicos de hardware cobrados em concursos.",

    feedbackErro: `
A alternativa correta é a letra D.

Analisando as afirmativas:

I. SSD é não volátil.
Correto. Os dados permanecem armazenados mesmo sem energia.

II. RAM é volátil.
Correto. Os dados são perdidos ao desligar o equipamento.

III. RJ-45 é utilizado em redes Ethernet.
Correto. É o conector mais comum em redes cabeadas.

Questões desse modelo são muito utilizadas pelas bancas porque avaliam diversos conceitos simultaneamente.

Uma técnica eficiente é analisar cada afirmativa isoladamente antes de verificar as alternativas.
`,
    dicaBanca: "Julgue cada afirmativa separadamente."
}

];