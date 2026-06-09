const redes = [

{
    pergunta: "Uma rede de computadores pode ser definida como:",

    alternativas: [

        "Um conjunto de programas instalados em um único computador.",

        "Um sistema operacional destinado ao compartilhamento de arquivos.",

        "Um conjunto de computadores e dispositivos interligados para troca de informações e compartilhamento de recursos.",

        "Um equipamento utilizado para acesso à Internet.",

        "Uma conexão exclusiva entre dois navegadores web."

    ],

    correta: 2,

    feedbackAcerto:
`Uma rede de computadores é formada por dispositivos interconectados que podem compartilhar informações, arquivos, impressoras e outros recursos.`,

    feedbackErro:
`A alternativa correta é a letra C. Redes de computadores permitem comunicação e compartilhamento de recursos entre dispositivos conectados.`,

    dicaBanca:
`A definição de rede é uma das cobranças mais frequentes em provas de Informática.`

},

{
    pergunta: "Um dos principais objetivos da utilização de redes de computadores é:",

    alternativas: [

        "Impedir a comunicação entre dispositivos.",

        "Compartilhar recursos e informações entre usuários e equipamentos.",

        "Substituir os sistemas operacionais dos computadores.",

        "Eliminar a necessidade de armazenamento de dados.",

        "Aumentar exclusivamente a velocidade do processador."

    ],

    correta: 1,

    feedbackAcerto:
`As redes permitem compartilhar recursos como impressoras, arquivos, conexões de Internet e informações entre usuários.`,

    feedbackErro:
`A alternativa correta é a letra B. O compartilhamento de recursos é uma das principais vantagens das redes de computadores.`,

    dicaBanca:
`Quando a banca perguntar a finalidade de uma rede, normalmente a resposta envolve comunicação e compartilhamento.`

},

{
    pergunta: "Em uma rede de computadores, o equipamento ou programa que solicita um serviço é denominado:",

    alternativas: [

        "Servidor.",

        "Cliente.",

        "Roteador.",

        "Switch.",

        "Firewall."

    ],

    correta: 1,

    feedbackAcerto:
`Cliente é o dispositivo ou software que solicita recursos ou serviços disponibilizados por outro equipamento na rede.`,

    feedbackErro:
`A alternativa correta é a letra B. O cliente solicita serviços; o servidor fornece os serviços solicitados.`,

    dicaBanca:
`Decore a relação: Cliente solicita, Servidor fornece.`

},

{
    pergunta: "No modelo cliente-servidor, é correto afirmar que o servidor:",

    alternativas: [

        "Solicita recursos aos clientes.",

        "Tem como função principal fornecer serviços, recursos ou informações aos clientes da rede.",

        "É utilizado apenas para acesso à Internet.",

        "Substitui os computadores clientes.",

        "Não pode armazenar arquivos."

    ],

    correta: 1,

    feedbackAcerto:
`O servidor é responsável por disponibilizar recursos, aplicações, arquivos ou serviços para os clientes conectados à rede.`,

    feedbackErro:
`A alternativa correta é a letra B. O servidor fornece serviços e recursos aos dispositivos clientes.`,

    dicaBanca:
`Questões sobre cliente-servidor são extremamente comuns em concursos de Informática.`

},

{
    pergunta: "Uma característica típica das redes do tipo ponto a ponto (Peer-to-Peer - P2P) é:",

    alternativas: [

        "A existência obrigatória de um servidor central dedicado.",

        "A impossibilidade de compartilhamento de arquivos.",

        "Todos os computadores podem atuar como clientes e servidores.",

        "A utilização exclusiva em grandes empresas.",

        "O acesso restrito à Internet."

    ],

    correta: 2,

    feedbackAcerto:
`Nas redes P2P, os computadores podem compartilhar recursos diretamente entre si, sem a necessidade de um servidor central dedicado.`,

    feedbackErro:
`A alternativa correta é a letra C. Em redes ponto a ponto, cada computador pode fornecer e utilizar recursos simultaneamente.`,

    dicaBanca:
`P2P = Peer-to-Peer = computadores atuando de forma equivalente dentro da rede.`

},

{
    pergunta: "Uma rede do tipo PAN (Personal Area Network) caracteriza-se por:",

    alternativas: [

        "Abranger cidades inteiras por meio de conexões de longa distância.",

        "Interligar dispositivos pessoais em uma área muito pequena.",

        "Conectar computadores de diferentes países.",

        "Ser utilizada exclusivamente por provedores de Internet.",

        "Exigir obrigatoriamente cabeamento de fibra óptica."

    ],

    correta: 1,

    feedbackAcerto:
`PAN é uma rede de alcance reduzido utilizada para conectar dispositivos pessoais, como smartphones, tablets, notebooks e smartwatches.`,

    feedbackErro:
`A alternativa correta é a letra B. Redes PAN possuem pequeno alcance e normalmente utilizam tecnologias como Bluetooth.`,

    dicaBanca:
`PAN = Personal Area Network = rede pessoal.`

},

{
    pergunta: "Uma rede local utilizada em residências, escritórios ou laboratórios é normalmente classificada como:",

    alternativas: [

        "WAN.",

        "MAN.",

        "LAN.",

        "PAN.",

        "VPN."

    ],

    correta: 2,

    feedbackAcerto:
`LAN (Local Area Network) é uma rede local que conecta dispositivos dentro de uma área geográfica limitada.`,

    feedbackErro:
`A alternativa correta é a letra C. LAN é a classificação mais comum para redes domésticas e corporativas locais.`,

    dicaBanca:
`LAN = Local Area Network.`

},

{
    pergunta: "Uma rede MAN (Metropolitan Area Network) tem como característica principal:",

    alternativas: [

        "Abranger uma área maior que uma LAN e menor que uma WAN.",

        "Conectar apenas dispositivos móveis.",

        "Operar exclusivamente via satélite.",

        "Possuir alcance inferior ao de uma PAN.",

        "Ser restrita a um único computador."

    ],

    correta: 0,

    feedbackAcerto:
`MAN é utilizada para conectar redes localizadas em diferentes pontos de uma cidade ou região metropolitana.`,

    feedbackErro:
`A alternativa correta é a letra A. MAN ocupa posição intermediária entre LAN e WAN em termos de abrangência.`,

    dicaBanca:
`MAN = Metropolitan Area Network.`

},

{
    pergunta: "A Internet é frequentemente considerada um exemplo de:",

    alternativas: [

        "PAN.",

        "LAN.",

        "MAN.",

        "WAN.",

        "WLAN."

    ],

    correta: 3,

    feedbackAcerto:
`A Internet conecta redes espalhadas por grandes distâncias geográficas, sendo considerada um exemplo clássico de WAN.`,

    feedbackErro:
`A alternativa correta é a letra D. WAN (Wide Area Network) é uma rede de longa distância e grande abrangência.`,

    dicaBanca:
`Internet = maior exemplo de WAN cobrado em concursos.`

},

{
    pergunta: "A sigla WLAN refere-se a:",

    alternativas: [

        "Uma rede local sem fio.",

        "Uma rede de longa distância.",

        "Uma rede pessoal baseada exclusivamente em Bluetooth.",

        "Um protocolo de Internet.",

        "Um equipamento de rede."

    ],

    correta: 0,

    feedbackAcerto:
`WLAN (Wireless Local Area Network) é uma rede local que utiliza tecnologia sem fio, normalmente Wi-Fi.`,

    feedbackErro:
`A alternativa correta é a letra A. WLAN é uma LAN sem fio utilizada em residências, escolas e empresas.`,

    dicaBanca:
`Wireless = sem fio. WLAN = rede local sem fio.`

},

{
    pergunta: "Em redes de computadores, o modem é um equipamento utilizado principalmente para:",

    alternativas: [

        "Conectar dispositivos de uma rede local sem acesso à Internet.",

        "Converter sinais para permitir a comunicação entre a rede do usuário e o provedor de Internet.",

        "Armazenar arquivos compartilhados na rede.",

        "Filtrar pacotes de dados maliciosos.",

        "Distribuir endereços IP automaticamente."

    ],

    correta: 1,

    feedbackAcerto:
`O modem realiza a conversão dos sinais utilizados pelo provedor, permitindo o acesso à Internet por dispositivos da rede.`,

    feedbackErro:
`A alternativa correta é a letra B. O modem estabelece a comunicação entre a rede do usuário e o provedor de acesso à Internet.`,

    dicaBanca:
`Modem é frequentemente associado ao acesso à Internet.`

},

{
    pergunta: "O Hub é um equipamento de rede que:",

    alternativas: [

        "Encaminha os dados apenas ao destinatário correto.",

        "Analisa endereços IP antes de transmitir informações.",

        "Recebe dados e os retransmite para todas as portas conectadas.",

        "Funciona exclusivamente em redes sem fio.",

        "Substitui completamente os roteadores."

    ],

    correta: 2,

    feedbackAcerto:
`O Hub replica os dados recebidos para todas as portas, independentemente do destinatário pretendido.`,

    feedbackErro:
`A alternativa correta é a letra C. O Hub não faz seleção inteligente do destino dos dados, transmitindo-os para todos os dispositivos conectados.`,

    dicaBanca:
`Hub = equipamento mais simples e menos eficiente que o Switch.`

},

{
    pergunta: "Uma das principais vantagens do Switch em relação ao Hub é:",

    alternativas: [

        "Transmitir dados para todas as portas simultaneamente.",

        "Encaminhar os dados apenas para a porta associada ao dispositivo destinatário.",

        "Dispensar o uso de cabeamento.",

        "Substituir o modem no acesso à Internet.",

        "Permitir apenas conexões sem fio."

    ],

    correta: 1,

    feedbackAcerto:
`O Switch identifica o destino dos dados e encaminha a informação apenas para a porta correta, aumentando a eficiência da rede.`,

    feedbackErro:
`A alternativa correta é a letra B. Diferentemente do Hub, o Switch realiza encaminhamento inteligente dos dados.`,

    dicaBanca:
`Switch = mais eficiente que Hub porque reduz tráfego desnecessário.`

},

{
    pergunta: "O roteador (Router) tem como função principal:",

    alternativas: [

        "Armazenar páginas da Internet.",

        "Conectar diferentes redes e encaminhar pacotes entre elas.",

        "Substituir o sistema operacional dos computadores.",

        "Controlar exclusivamente impressoras de rede.",

        "Atuar apenas como repetidor de sinal."

    ],

    correta: 1,

    feedbackAcerto:
`O roteador conecta redes distintas e define os melhores caminhos para o encaminhamento dos pacotes de dados.`,

    feedbackErro:
`A alternativa correta é a letra B. O roteador é responsável pela comunicação entre redes diferentes, incluindo o acesso à Internet.`,

    dicaBanca:
`Roteador = equipamento responsável por interligar redes.`

},

{
    pergunta: "Um Access Point (Ponto de Acesso) é utilizado para:",

    alternativas: [

        "Converter sinais analógicos em digitais.",

        "Criar ou expandir uma rede sem fio (Wi-Fi).",

        "Substituir completamente os switches.",

        "Armazenar dados dos usuários da rede.",

        "Realizar criptografia de arquivos."

    ],

    correta: 1,

    feedbackAcerto:
`O Access Point permite que dispositivos sem fio se conectem a uma rede, ampliando ou criando cobertura Wi-Fi.`,

    feedbackErro:
`A alternativa correta é a letra B. O Access Point é amplamente utilizado para disponibilizar acesso sem fio em redes locais.`,

    dicaBanca:
`Access Point = equipamento associado à criação e expansão de redes Wi-Fi.`

},

{
    pergunta: "Em redes de computadores, um endereço IP tem como principal finalidade:",

    alternativas: [

        "Identificar unicamente um dispositivo em uma rede.",

        "Substituir o endereço MAC do equipamento.",

        "Armazenar arquivos compartilhados.",

        "Controlar o funcionamento do sistema operacional.",

        "Definir a velocidade da conexão."

    ],

    correta: 0,

    feedbackAcerto:
`O endereço IP é utilizado para identificar dispositivos em uma rede e permitir a comunicação entre eles.`,

    feedbackErro:
`A alternativa correta é a letra A. Todo dispositivo conectado a uma rede TCP/IP necessita de um endereço IP para ser identificado.`,

    dicaBanca:
`IP = identificação lógica do dispositivo na rede.`

},

{
    pergunta: "Sobre o IPv4, assinale a alternativa correta.",

    alternativas: [

        "É composto por 128 bits.",

        "Utiliza exclusivamente letras em sua representação.",

        "É representado normalmente por quatro grupos numéricos separados por pontos.",

        "Substituiu completamente o IPv6.",

        "Não é utilizado na Internet."

    ],

    correta: 2,

    feedbackAcerto:
`O IPv4 utiliza 32 bits e normalmente é representado por quatro números separados por pontos, como 192.168.1.1.`,

    feedbackErro:
`A alternativa correta é a letra C. O IPv4 é o padrão tradicional de endereçamento utilizado em redes TCP/IP.`,

    dicaBanca:
`Exemplo clássico de IPv4: 192.168.0.1.`

},

{
    pergunta: "Uma das principais razões para o desenvolvimento do IPv6 foi:",

    alternativas: [

        "Eliminar a utilização da Internet.",

        "Substituir os navegadores web.",

        "Disponibilizar uma quantidade muito maior de endereços IP.",

        "Eliminar os protocolos TCP e UDP.",

        "Reduzir a velocidade das redes."

    ],

    correta: 2,

    feedbackAcerto:
`O IPv6 foi criado principalmente para solucionar a escassez de endereços disponíveis no IPv4.`,

    feedbackErro:
`A alternativa correta é a letra C. O crescimento da Internet exigiu um padrão capaz de fornecer muito mais endereços IP.`,

    dicaBanca:
`IPv4 = 32 bits. IPv6 = 128 bits.`

},

{
    pergunta: "O endereço MAC (Media Access Control) é:",

    alternativas: [

        "Um endereço lógico atribuído pelo provedor.",

        "Um endereço físico associado à placa de rede do dispositivo.",

        "Um protocolo utilizado para navegação na Internet.",

        "Um tipo de roteador sem fio.",

        "Um endereço utilizado apenas em redes WAN."

    ],

    correta: 1,

    feedbackAcerto:
`O endereço MAC é gravado na interface de rede e identifica fisicamente o equipamento em uma rede local.`,

    feedbackErro:
`A alternativa correta é a letra B. O MAC Address é um identificador físico associado à placa de rede.`,

    dicaBanca:
`IP = endereço lógico. MAC = endereço físico.`

},

{
    pergunta: "A expressão TCP/IP refere-se a:",

    alternativas: [

        "Um equipamento utilizado para conectar redes.",

        "Um sistema operacional de rede.",

        "Uma suíte de protocolos responsável pela comunicação em redes e na Internet.",

        "Um navegador utilizado para acessar páginas web.",

        "Um serviço de correio eletrônico."

    ],

    correta: 2,

    feedbackAcerto:
`TCP/IP é o conjunto de protocolos que permite a comunicação entre dispositivos em redes locais e na Internet.`,

    feedbackErro:
`A alternativa correta é a letra C. A suíte TCP/IP constitui a base das comunicações modernas em redes de computadores.`,

    dicaBanca:
`Quando a banca falar em 'conjunto de protocolos da Internet', pense imediatamente em TCP/IP.`

},

{
    pergunta: "O cabo de par trançado é amplamente utilizado em redes locais porque:",

    alternativas: [

        "Permite transmissão exclusivamente sem fio.",

        "Apresenta baixo custo e facilidade de instalação.",

        "Utiliza sinais luminosos para transmissão de dados.",

        "É empregado apenas em redes de longa distância.",

        "Substitui completamente os roteadores."

    ],

    correta: 1,

    feedbackAcerto:
`O cabo de par trançado é o meio físico mais utilizado em redes locais devido ao seu baixo custo, facilidade de instalação e bom desempenho.`,

    feedbackErro:
`A alternativa correta é a letra B. O cabo de par trançado é amplamente empregado em redes Ethernet domésticas e corporativas.`,

    dicaBanca:
`UTP (Unshielded Twisted Pair) é o tipo mais comum de cabo de par trançado.`

},

{
    pergunta: "Uma das principais vantagens da fibra óptica em relação aos cabos metálicos é:",

    alternativas: [

        "Maior suscetibilidade a interferências eletromagnéticas.",

        "Menor capacidade de transmissão de dados.",

        "Maior velocidade e imunidade a interferências eletromagnéticas.",

        "Funcionamento exclusivo em redes domésticas.",

        "Necessidade obrigatória de sinais elétricos para transmissão."

    ],

    correta: 2,

    feedbackAcerto:
`A fibra óptica transmite dados por meio de sinais luminosos, oferecendo alta velocidade e resistência a interferências eletromagnéticas.`,

    feedbackErro:
`A alternativa correta é a letra C. A fibra óptica é amplamente utilizada em redes modernas devido ao seu desempenho superior.`,

    dicaBanca:
`Fibra óptica = luz, alta velocidade e baixa interferência.`

},

{
    pergunta: "O cabo coaxial foi amplamente utilizado em redes e sistemas de comunicação por apresentar:",

    alternativas: [

        "Estrutura composta por um condutor central envolvido por blindagem.",

        "Transmissão baseada exclusivamente em luz.",

        "Funcionamento apenas em redes sem fio.",

        "Necessidade de roteadores especiais.",

        "Uso exclusivo em redes PAN."

    ],

    correta: 0,

    feedbackAcerto:
`O cabo coaxial possui um condutor central cercado por material isolante e blindagem metálica, reduzindo interferências externas.`,

    feedbackErro:
`A alternativa correta é a letra A. A blindagem é uma das principais características do cabo coaxial.`,

    dicaBanca:
`O cabo coaxial ainda é muito utilizado em sistemas de TV a cabo e algumas aplicações de telecomunicações.`

},

{
    pergunta: "A tecnologia Wi-Fi é utilizada para:",

    alternativas: [

        "Realizar conexões de rede sem a utilização de cabos.",

        "Substituir protocolos TCP/IP.",

        "Converter sinais analógicos em digitais.",

        "Armazenar arquivos em servidores.",

        "Identificar dispositivos por endereço MAC."

    ],

    correta: 0,

    feedbackAcerto:
`O Wi-Fi permite a conexão de dispositivos a redes locais utilizando comunicação sem fio por ondas de rádio.`,

    feedbackErro:
`A alternativa correta é a letra A. Wi-Fi é uma tecnologia de comunicação sem fio amplamente utilizada em residências, empresas e instituições de ensino.`,

    dicaBanca:
`Wi-Fi está associado ao conceito de WLAN (Wireless Local Area Network).`

},

{
    pergunta: "A tecnologia Bluetooth é mais adequada para:",

    alternativas: [

        "Conectar redes de computadores entre diferentes continentes.",

        "Realizar conexões de curta distância entre dispositivos.",

        "Substituir a Internet em redes corporativas.",

        "Distribuir endereços IP automaticamente.",

        "Implementar redes WAN."

    ],

    correta: 1,

    feedbackAcerto:
`Bluetooth é uma tecnologia de comunicação sem fio de curto alcance utilizada para conectar dispositivos como fones de ouvido, teclados, celulares e notebooks.`,

    feedbackErro:
`A alternativa correta é a letra B. O Bluetooth foi desenvolvido para comunicação entre dispositivos próximos.`,

    dicaBanca:
`Bluetooth = curto alcance. Wi-Fi = maior alcance e maior taxa de transmissão.`

},
{
    pergunta: "Em redes de computadores, o Firewall tem como principal função:",

    alternativas: [

        "Armazenar arquivos compartilhados na rede.",

        "Controlar e filtrar o tráfego de dados entre redes ou dispositivos.",

        "Converter sinais digitais em analógicos.",

        "Distribuir endereços IP automaticamente.",

        "Substituir o sistema operacional dos computadores."

    ],

    correta: 1,

    feedbackAcerto:
`O Firewall atua como uma barreira de proteção, monitorando e filtrando o tráfego de dados para aumentar a segurança da rede.`,

    feedbackErro:
`A alternativa correta é a letra B. Firewalls são utilizados para controlar acessos e bloquear tráfego não autorizado.`,

    dicaBanca:
`Firewall = proteção e controle de tráfego de rede.`

},

{
    pergunta: "Uma VPN (Virtual Private Network) é utilizada para:",

    alternativas: [

        "Aumentar a capacidade física dos cabos de rede.",

        "Criar uma conexão segura entre dispositivos por meio de redes públicas, como a Internet.",

        "Substituir o endereço IP dos computadores.",

        "Distribuir sinal Wi-Fi.",

        "Realizar backup automático de arquivos."

    ],

    correta: 1,

    feedbackAcerto:
`A VPN cria um canal seguro para transmissão de dados, permitindo acesso remoto protegido a redes corporativas e outros recursos.`,

    feedbackErro:
`A alternativa correta é a letra B. VPN significa Rede Privada Virtual e é amplamente utilizada para comunicação segura pela Internet.`,

    dicaBanca:
`VPN = conexão segura sobre uma rede pública.`

},

{
    pergunta: "Uma das vantagens do uso de redes de computadores é:",

    alternativas: [

        "Impedir o compartilhamento de recursos.",

        "Eliminar a necessidade de comunicação entre usuários.",

        "Possibilitar o compartilhamento de arquivos, impressoras e conexões.",

        "Restringir o acesso a sistemas operacionais.",

        "Substituir totalmente dispositivos de armazenamento."

    ],

    correta: 2,

    feedbackAcerto:
`O compartilhamento de recursos é uma das principais vantagens das redes, reduzindo custos e aumentando a produtividade.`,

    feedbackErro:
`A alternativa correta é a letra C. Redes permitem compartilhar arquivos, impressoras, aplicações e acesso à Internet.`,

    dicaBanca:
`Compartilhamento de recursos é um conceito clássico de provas de Informática.`

},

{
    pergunta: "Assinale a alternativa que apresenta corretamente a diferença entre uma rede local (LAN) e a Internet.",

    alternativas: [

        "LAN e Internet são exatamente a mesma coisa.",

        "A Internet é uma rede mundial composta por diversas redes, enquanto a LAN possui alcance limitado.",

        "A LAN possui alcance mundial e a Internet alcance local.",

        "A Internet funciona apenas por cabos e a LAN apenas por Wi-Fi.",

        "A LAN não utiliza protocolos de rede."

    ],

    correta: 1,

    feedbackAcerto:
`Uma LAN possui abrangência limitada, enquanto a Internet conecta inúmeras redes distribuídas mundialmente.`,

    feedbackErro:
`A alternativa correta é a letra B. A principal diferença está na abrangência e na escala das redes.`,

    dicaBanca:
`LAN = rede local. Internet = interconexão global de redes.`

},

{
    pergunta: "Sobre boas práticas de segurança em redes de computadores, assinale a alternativa correta.",

    alternativas: [

        "Compartilhar senhas aumenta a segurança da rede.",

        "Atualizações de segurança devem ser evitadas para impedir incompatibilidades.",

        "O uso de senhas fortes e a atualização de sistemas ajudam a proteger a rede contra ameaças.",

        "Firewalls tornam desnecessário qualquer outro cuidado de segurança.",

        "Redes Wi-Fi abertas são sempre mais seguras que redes protegidas por senha."

    ],

    correta: 2,

    feedbackAcerto:
`Senhas fortes, atualizações frequentes e boas práticas de uso são medidas fundamentais para aumentar a segurança em redes de computadores.`,

    feedbackErro:
`A alternativa correta é a letra C. A segurança depende da combinação de ferramentas e boas práticas adotadas pelos usuários.`,

    dicaBanca:
`Bancas modernas valorizam conceitos de prevenção, atualização e uso consciente da tecnologia.`

},
];
