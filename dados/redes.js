// FAROL DO SABER - REDES DE COMPUTADORES
// Banco revisado para concursos de professor - 70 questões de nível médio/difícil.
// Gabarito balanceado: 14 respostas em cada posição (A-E).

const redes = [
    {
        "id": "redes_001",
        "pergunta": "Uma escola possui computadores administrativos, impressoras e um servidor interligados dentro do mesmo prédio. Quanto à abrangência geográfica, essa estrutura é melhor classificada como:",
        "alternativas": [
            "WAN, pois qualquer rede com servidor é considerada de longa distância nesse cenário de rede.",
            "LAN, pois conecta dispositivos em uma área local relativamente limitada.",
            "MAN, pois toda rede institucional precisa abranger diferentes bairros.",
            "PAN, pois os equipamentos pertencem à mesma organização usuária.",
            "VPN, pois a rede interna utiliza endereços privados para comunicação."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. LAN caracteriza redes locais, como as existentes em uma residência, laboratório, escola ou escritório.",
        "feedbackErro": "Resposta correta: LAN, pois conecta dispositivos em uma área local relativamente limitada.\n\nComentário: LAN caracteriza redes locais, como as existentes em uma residência, laboratório, escola ou escritório.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: A banca pode misturar finalidade e abrangência: LAN, MAN e WAN classificam principalmente a extensão da rede.",
        "assunto": "redes",
        "subtopico": "tipos-topologias-redes"
    },
    {
        "id": "redes_002",
        "pergunta": "Uma secretaria municipal interliga unidades localizadas em cidades diferentes por enlaces de uma operadora. Considerando apenas a abrangência dessa rede, trata-se tipicamente de uma:",
        "alternativas": [
            "LAN, porque todos os equipamentos pertencem à mesma instituição pública.",
            "PAN, porque cada servidor atende um conjunto pessoal de dispositivos clientes.",
            "WLAN, porque enlaces de operadora dispensam infraestrutura física entre cidades.",
            "WAN, porque conecta redes ou unidades separadas por grandes distâncias geográficas.",
            "VLAN, porque a separação entre cidades é feita por identificação lógica de portas nesse cenário de rede."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. WAN cobre áreas extensas e pode interligar diferentes LANs por infraestrutura de telecomunicações.",
        "feedbackErro": "Resposta correta: WAN, porque conecta redes ou unidades separadas por grandes distâncias geográficas.\n\nComentário: WAN cobre áreas extensas e pode interligar diferentes LANs por infraestrutura de telecomunicações.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Pertencer à mesma organização não transforma uma rede geograficamente ampla em LAN.",
        "assunto": "redes",
        "subtopico": "tipos-topologias-redes"
    },
    {
        "id": "redes_003",
        "pergunta": "Em um laboratório, cada computador possui um cabo próprio até um switch central. Se um cabo de uma estação for rompido, apenas aquela estação perde a conectividade. A topologia descrita é:",
        "alternativas": [
            "barramento, pois todos os computadores compartilham o mesmo meio de transmissão principal.",
            "anel, pois cada estação encaminha os quadros para a próxima estação do circuito.",
            "malha completa, pois cada computador possui ligação direta com todos os demais equipamentos.",
            "ponto a ponto, pois não existe equipamento intermediário no caminho entre as estações.",
            "estrela, pois os dispositivos mantêm enlaces individuais com um ponto central."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Na topologia estrela, um ponto central — geralmente um switch — concentra as conexões individuais.",
        "feedbackErro": "Resposta correta: estrela, pois os dispositivos mantêm enlaces individuais com um ponto central.\n\nComentário: Na topologia estrela, um ponto central — geralmente um switch — concentra as conexões individuais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Estrela é muito comum em Ethernet moderna; queda de uma estação não implica queda das demais.",
        "assunto": "redes",
        "subtopico": "tipos-topologias-redes"
    },
    {
        "id": "redes_004",
        "pergunta": "Sobre Internet, intranet e extranet, assinale a alternativa que apresenta a relação mais adequada entre esses conceitos.",
        "alternativas": [
            "Uma intranet depende de acesso público pela Internet para que seus serviços internos funcionem.",
            "Uma extranet pode disponibilizar parte de recursos internos a parceiros externos devidamente autorizados.",
            "Uma extranet corresponde à Internet inteira quando acessada por usuários de uma organização.",
            "Uma intranet utiliza protocolos incompatíveis com os empregados normalmente na Internet.",
            "Uma extranet elimina controles de autenticação para facilitar o acesso de fornecedores externos nesse cenário de rede."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Extranet estende acesso controlado a determinados recursos de uma organização para usuários externos autorizados.",
        "feedbackErro": "Resposta correta: Uma extranet pode disponibilizar parte de recursos internos a parceiros externos devidamente autorizados.\n\nComentário: Extranet estende acesso controlado a determinados recursos de uma organização para usuários externos autorizados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: A tecnologia pode ser a mesma da Internet; o que muda é o público autorizado e o controle de acesso.",
        "assunto": "redes",
        "subtopico": "tipos-topologias-redes"
    },
    {
        "id": "redes_005",
        "pergunta": "Dois notebooks trocam arquivos diretamente por Bluetooth a poucos metros de distância, sem utilizar o roteador da residência. Quanto ao alcance e à finalidade, essa conexão se aproxima de uma:",
        "alternativas": [
            "MAN, por usar comunicação sem fio dentro de uma área urbana delimitada.",
            "WAN, por permitir transferência de dados sem depender da rede local cabeada.",
            "VLAN, por separar logicamente os notebooks de outros dispositivos da residência.",
            "Extranet, por permitir a comunicação entre dispositivos sem autenticação no roteador.",
            "PAN, por conectar dispositivos pessoais em uma área de alcance bastante reduzida."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. PAN é uma rede de alcance pessoal, frequentemente associada a Bluetooth e dispositivos próximos.",
        "feedbackErro": "Resposta correta: PAN, por conectar dispositivos pessoais em uma área de alcance bastante reduzida.\n\nComentário: PAN é uma rede de alcance pessoal, frequentemente associada a Bluetooth e dispositivos próximos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Não confunda tecnologia sem fio com WLAN: Bluetooth pessoal costuma aparecer como exemplo de PAN.",
        "assunto": "redes",
        "subtopico": "tipos-topologias-redes"
    },
    {
        "id": "redes_006",
        "pergunta": "Uma empresa divide logicamente a mesma infraestrutura de switches para separar o setor financeiro do laboratório, embora os computadores estejam no mesmo prédio. O recurso associado a essa separação é:",
        "alternativas": [
            "VPN, que substitui os switches locais por túneis criptografados entre cada computador do prédio.",
            "WAN, que transforma segmentos internos em redes de longa distância independentes da localização.",
            "VLAN, que cria domínios lógicos distintos sobre uma infraestrutura física compartilhada.",
            "PAN, que restringe cada setor a conexões pessoais de curto alcance entre seus equipamentos.",
            "DNS, que separa fisicamente as portas da rede conforme os nomes atribuídos aos computadores."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. VLAN permite segmentação lógica em switches, separando grupos mesmo quando compartilham a mesma infraestrutura física.",
        "feedbackErro": "Resposta correta: VLAN, que cria domínios lógicos distintos sobre uma infraestrutura física compartilhada.\n\nComentário: VLAN permite segmentação lógica em switches, separando grupos mesmo quando compartilham a mesma infraestrutura física.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: VLAN é segmentação lógica; VPN é túnel seguro sobre uma rede existente.",
        "assunto": "redes",
        "subtopico": "tipos-topologias-redes"
    },
    {
        "id": "redes_007",
        "pergunta": "Em uma rede cliente-servidor, qual situação caracteriza melhor esse modelo de organização?",
        "alternativas": [
            "Cada computador troca recursos diretamente com o equipamento conectado ao mesmo cabo físico local.",
            "Todos os computadores possuem necessariamente a mesma função, sem qualquer serviço centralizado.",
            "O acesso aos recursos depende de comunicação Bluetooth direta entre pares previamente associados.",
            "Um servidor central oferece serviços ou recursos que são solicitados pelos computadores clientes.",
            "A rede funciona sem protocolos de comunicação porque o servidor controla diretamente cada cliente."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. No modelo cliente-servidor, clientes solicitam serviços que são disponibilizados por servidores.",
        "feedbackErro": "Resposta correta: Um servidor central oferece serviços ou recursos que são solicitados pelos computadores clientes.\n\nComentário: No modelo cliente-servidor, clientes solicitam serviços que são disponibilizados por servidores.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: O modelo descreve papéis na comunicação, não o tamanho físico da rede nem o tipo de cabeamento.",
        "assunto": "redes",
        "subtopico": "tipos-topologias-redes"
    },
    {
        "id": "redes_008",
        "pergunta": "Em uma rede ponto a ponto (peer-to-peer) simples, é correto afirmar que:",
        "alternativas": [
            "os próprios computadores podem compartilhar recursos diretamente, sem depender de um servidor dedicado para cada serviço.",
            "cada estação precisa encaminhar todo o tráfego por um servidor central antes de alcançar outra estação.",
            "o compartilhamento direto impede que os computadores utilizem sistemas operacionais ou autenticação local.",
            "os computadores precisam estar em cidades diferentes para que a comunicação seja considerada entre pares.",
            "a rede exige um controlador de domínio para distribuir endereços IP e registrar todos os compartilhamentos nesse cenário de rede."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Em redes peer-to-peer, os participantes podem atuar diretamente como fornecedores e consumidores de recursos.",
        "feedbackErro": "Resposta correta: os próprios computadores podem compartilhar recursos diretamente, sem depender de um servidor dedicado para cada serviço.\n\nComentário: Em redes peer-to-peer, os participantes podem atuar diretamente como fornecedores e consumidores de recursos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Peer-to-peer não significa ausência de segurança ou de endereçamento; significa menor centralização dos serviços.",
        "assunto": "redes",
        "subtopico": "tipos-topologias-redes"
    },
    {
        "id": "redes_009",
        "pergunta": "Em uma LAN Ethernet, um equipamento recebe um quadro e o encaminha preferencialmente apenas pela porta associada ao endereço MAC de destino. Esse comportamento é típico de um:",
        "alternativas": [
            "hub, que consulta uma tabela de roteamento IP antes de encaminhar cada quadro recebido.",
            "roteador, que encaminha quadros locais com base prioritária no endereço MAC de destino final.",
            "modem, que mantém uma tabela de endereços MAC para separar os computadores de uma mesma LAN.",
            "access point, que substitui o cabeamento Ethernet e executa a tradução de nomes DNS da rede.",
            "switch, que aprende endereços MAC e os associa às suas portas."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Switches Ethernet aprendem endereços MAC e encaminham quadros entre portas da mesma rede local.",
        "feedbackErro": "Resposta correta: switch, que aprende endereços MAC e os associa às suas portas.\n\nComentário: Switches Ethernet aprendem endereços MAC e encaminham quadros entre portas da mesma rede local.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Em prova, endereço MAC e comutação de quadros apontam para switch; endereço IP e redes distintas apontam para roteador.",
        "assunto": "redes",
        "subtopico": "equipamentos-de-rede"
    },
    {
        "id": "redes_010",
        "pergunta": "Um computador alcança outros dispositivos da mesma sub-rede, mas precisa enviar tráfego destinado a uma rede diferente. O equipamento que normalmente encaminha esses pacotes entre redes é o:",
        "alternativas": [
            "switch, responsável por resolver nomes de domínio e localizar servidores fora da rede local.",
            "roteador, responsável por escolher caminhos entre redes IP distintas.",
            "hub, responsável por selecionar a melhor rota IP conforme a tabela de encaminhamento configurada.",
            "repetidor, responsável por traduzir endereços privados em nomes públicos durante a navegação.",
            "patch panel, responsável por decidir para qual rede externa cada pacote deverá ser encaminhado."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Roteadores interligam redes IP diferentes e tomam decisões de encaminhamento com base em endereços e rotas.",
        "feedbackErro": "Resposta correta: roteador, responsável por escolher caminhos entre redes IP distintas.\n\nComentário: Roteadores interligam redes IP diferentes e tomam decisões de encaminhamento com base em endereços e rotas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Quando a questão fala em “sair da sub-rede” ou “interligar redes”, procure a função de roteamento.",
        "assunto": "redes",
        "subtopico": "equipamentos-de-rede"
    },
    {
        "id": "redes_011",
        "pergunta": "Em uma rede sem fio institucional, qual é a função mais diretamente associada a um access point (AP)?",
        "alternativas": [
            "atribuir endereços públicos a todos os dispositivos que se conectam por rádio, como função própria do ponto de acesso.",
            "substituir o serviço DNS por resolução local dos nomes dos computadores conectados ao Wi-Fi.",
            "fornecer acesso à rede para dispositivos Wi-Fi e integrá-los à infraestrutura de rede existente.",
            "converter qualquer conexão sem fio em ligação Bluetooth de curto alcance entre dois dispositivos.",
            "realizar a modulação do sinal da operadora e dispensar a presença de switches ou roteadores na rede."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. O access point oferece conectividade 802.11 e normalmente conecta clientes sem fio à rede local.",
        "feedbackErro": "Resposta correta: fornecer acesso à rede para dispositivos Wi-Fi e integrá-los à infraestrutura de rede existente.\n\nComentário: O access point oferece conectividade 802.11 e normalmente conecta clientes sem fio à rede local.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: AP fornece acesso sem fio; DHCP, DNS, roteamento e modem são funções distintas, embora um roteador doméstico possa integrá-las.",
        "assunto": "redes",
        "subtopico": "equipamentos-de-rede"
    },
    {
        "id": "redes_012",
        "pergunta": "Em uma residência com acesso por fibra, o equipamento da operadora converte o sinal óptico para uma interface de rede usada pelo roteador. Em termos funcionais, esse equipamento cumpre papel semelhante ao de um:",
        "alternativas": [
            "switch de acesso, escolhendo rotas externas com base no domínio de cada site solicitado pelo usuário.",
            "servidor DHCP, convertendo sinais ópticos diretamente em endereços IP privados para cada aplicação.",
            "modem/terminal de acesso, fazendo a interface entre a tecnologia da operadora e a rede do assinante.",
            "firewall de aplicação, filtrando automaticamente qualquer conteúdo recebido antes de chegar ao roteador.",
            "repetidor Wi-Fi, ampliando por rádio o alcance do enlace óptico que chega ao imóvel do assinante."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Modems e terminais de acesso fazem a interface entre a tecnologia do provedor e a rede do assinante.",
        "feedbackErro": "Resposta correta: modem/terminal de acesso, fazendo a interface entre a tecnologia da operadora e a rede do assinante.\n\nComentário: Modems e terminais de acesso fazem a interface entre a tecnologia do provedor e a rede do assinante.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: A banca pode usar “modem” de forma funcional mesmo quando a tecnologia atual emprega ONT em fibra.",
        "assunto": "redes",
        "subtopico": "equipamentos-de-rede"
    },
    {
        "id": "redes_013",
        "pergunta": "Comparando hub e switch Ethernet, qual afirmativa é mais adequada?",
        "alternativas": [
            "O hub aprende endereços MAC de origem, enquanto o switch transmite os quadros indistintamente em todas as portas.",
            "O switch trabalha com nomes DNS, enquanto o hub decide o encaminhamento com base nos endereços IPv4 dos hosts.",
            "O hub cria sub-redes IP independentes, enquanto o switch impede que equipamentos da mesma LAN se comuniquem.",
            "O switch pode encaminhar quadros de forma seletiva entre portas, enquanto o hub replica sinais para as demais portas.",
            "O switch depende de conexão com a Internet para aprender portas, enquanto o hub funcionaria restrito a redes locais isoladas."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Hub repete sinais; switch aprende MACs e consegue encaminhar quadros de modo mais seletivo.",
        "feedbackErro": "Resposta correta: O switch pode encaminhar quadros de forma seletiva entre portas, enquanto o hub replica sinais para as demais portas.\n\nComentário: Hub repete sinais; switch aprende MACs e consegue encaminhar quadros de modo mais seletivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Switch e hub podem aparecer juntos em questões sobre domínio de colisão e eficiência da LAN.",
        "assunto": "redes",
        "subtopico": "equipamentos-de-rede"
    },
    {
        "id": "redes_014",
        "pergunta": "Uma escola pretende instalar rede cabeada Ethernet comum em salas próximas, utilizando cabos de pares trançados e conectores usuais de rede. O meio descrito corresponde tipicamente a:",
        "alternativas": [
            "cabo coaxial com conector BNC, utilizado como padrão principal das redes Ethernet atuais em escritórios.",
            "fibra monomodo com conector USB, empregada diretamente entre computadores e switches de mesa.",
            "cabo HDMI com conector 8P8C, usado para transportar simultaneamente quadros Ethernet e vídeo digital.",
            "cabo UTP com conector modular 8P8C, conhecido no uso corrente como RJ-45.",
            "par telefônico com conector RJ-11, usado como substituto direto do cabeamento Ethernet de quatro pares."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. UTP é o cabo de par trançado sem blindagem muito usado em Ethernet, normalmente terminado em conector 8P8C.",
        "feedbackErro": "Resposta correta: cabo UTP com conector modular 8P8C, conhecido no uso corrente como RJ-45.\n\nComentário: UTP é o cabo de par trançado sem blindagem muito usado em Ethernet, normalmente terminado em conector 8P8C.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Em concursos, “RJ-45” é o nome corrente esperado para o conector Ethernet de par trançado.",
        "assunto": "redes",
        "subtopico": "meios-fisicos-cabeamento"
    },
    {
        "id": "redes_015",
        "pergunta": "Em relação à fibra óptica e ao cabo metálico, assinale a alternativa correta.",
        "alternativas": [
            "A fibra transmite dados por corrente elétrica e por isso sofre mais interferência que o par trançado metálico.",
            "O par trançado utiliza pulsos luminosos e precisa de conversores ópticos em cada tomada de rede convencional.",
            "A fibra depende de aterramento do condutor central para evitar colisões entre sinais de computadores diferentes.",
            "O cabo metálico e a fibra utilizam o mesmo princípio físico de transmissão e se diferenciariam basicamente pelo conector.",
            "A fibra transmite dados por sinais luminosos e é imune à interferência eletromagnética no meio de transmissão."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Fibra óptica conduz luz e não sofre interferência eletromagnética como meios metálicos.",
        "feedbackErro": "Resposta correta: A fibra transmite dados por sinais luminosos e é imune à interferência eletromagnética no meio de transmissão.\n\nComentário: Fibra óptica conduz luz e não sofre interferência eletromagnética como meios metálicos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Fibra costuma ser associada a maior alcance, alta capacidade e imunidade a interferências eletromagnéticas.",
        "assunto": "redes",
        "subtopico": "meios-fisicos-cabeamento"
    },
    {
        "id": "redes_016",
        "pergunta": "Ao organizar um rack de rede, um patch panel é utilizado principalmente para:",
        "alternativas": [
            "organizar e terminar o cabeamento estruturado, facilitando a conexão das tomadas às portas dos equipamentos.",
            "atribuir endereços IP automaticamente aos computadores ligados às tomadas de rede do edifício.",
            "filtrar pacotes de entrada e saída com base em regras definidas pela equipe de segurança da organização nesse cenário de rede.",
            "amplificar sinais Wi-Fi para aumentar a cobertura sem fio nos ambientes mais afastados do roteador.",
            "converter nomes de domínio em endereços IP antes de encaminhar as requisições para a Internet."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Patch panel é elemento passivo de organização e terminação do cabeamento estruturado.",
        "feedbackErro": "Resposta correta: organizar e terminar o cabeamento estruturado, facilitando a conexão das tomadas às portas dos equipamentos.\n\nComentário: Patch panel é elemento passivo de organização e terminação do cabeamento estruturado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Não confunda componentes passivos do rack com equipamentos ativos, como switch e roteador.",
        "assunto": "redes",
        "subtopico": "meios-fisicos-cabeamento"
    },
    {
        "id": "redes_017",
        "pergunta": "Um repetidor de sinal é empregado em uma rede principalmente para:",
        "alternativas": [
            "selecionar a rota IP mais adequada entre redes pertencentes a provedores de Internet diferentes.",
            "criar contas de usuário e autenticar dispositivos antes de permitir acesso aos recursos compartilhados.",
            "resolver nomes de domínio e manter uma base autoritativa com os endereços dos servidores da organização nesse cenário de rede.",
            "regenerar ou retransmitir o sinal, ampliando o alcance físico dentro das limitações da tecnologia utilizada.",
            "substituir a criptografia Wi-Fi por autenticação baseada no endereço físico da placa de rede como mecanismo central."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Repetidores atuam sobre o sinal para estender o alcance; não executam roteamento, DNS ou autenticação de usuários.",
        "feedbackErro": "Resposta correta: regenerar ou retransmitir o sinal, ampliando o alcance físico dentro das limitações da tecnologia utilizada.\n\nComentário: Repetidores atuam sobre o sinal para estender o alcance; não executam roteamento, DNS ou autenticação de usuários.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: A palavra-chave é alcance físico do sinal, não escolha de caminho entre redes.",
        "assunto": "redes",
        "subtopico": "equipamentos-de-rede"
    },
    {
        "id": "redes_018",
        "pergunta": "Um computador conectado à rede recebe automaticamente endereço IP, máscara, gateway e servidor DNS. O serviço mais diretamente responsável por fornecer esses parâmetros é:",
        "alternativas": [
            "DNS, que distribui endereços aos clientes ao converter nomes de máquinas em parâmetros de rede.",
            "ARP, que fornece máscara e gateway depois de associar o endereço IP ao endereço físico do cliente.",
            "HTTP, que entrega a configuração de rede junto com a primeira página acessada pelo navegador.",
            "DHCP, que entrega configurações de rede aos clientes por concessão automática.",
            "ICMP, que define automaticamente os parâmetros do host ao testar a conectividade com o roteador."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. DHCP automatiza a configuração de parâmetros IP dos clientes, reduzindo configuração manual.",
        "feedbackErro": "Resposta correta: DHCP, que entrega configurações de rede aos clientes por concessão automática.\n\nComentário: DHCP automatiza a configuração de parâmetros IP dos clientes, reduzindo configuração manual.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: DHCP entrega configuração; DNS resolve nomes. Essa distinção é recorrente em concursos.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_019",
        "pergunta": "Em uma estação Windows configurada para obter IPv4 automaticamente, surge o endereço 169.254.36.18 e o acesso à rede falha. A interpretação mais provável é que:",
        "alternativas": [
            "o DNS atribuiu um endereço público temporário para que a estação possa navegar sem o roteador.",
            "o gateway converteu o endereço privado em um endereço externo para corrigir uma falha de roteamento.",
            "a estação não obteve resposta do DHCP e adotou um endereço de autoconfiguração local.",
            "o computador recebeu uma faixa reservada para servidores Web e precisaria renovar o certificado HTTPS para voltar à rede.",
            "o switch bloqueou o endereço MAC e transferiu o equipamento automaticamente para uma rede sem fio isolada."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Na prática, 169.254.x.x é forte indício de APIPA após falha na obtenção de configuração por DHCP.",
        "feedbackErro": "Resposta correta: a estação não obteve resposta do DHCP e adotou um endereço de autoconfiguração local.\n\nComentário: Na prática, 169.254.x.x é forte indício de APIPA após falha na obtenção de configuração por DHCP.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Se aparecer 169.254.x.x em uma questão de diagnóstico, verifique primeiro DHCP e conectividade local.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_020",
        "pergunta": "Um notebook usa o endereço 192.168.10.25 na rede da escola. Sobre esse endereço, é correto afirmar que ele pertence a uma faixa:",
        "alternativas": [
            "pública, reservada para equipamentos que precisam ser encontrados diretamente em qualquer ponto da Internet.",
            "multicast, destinada a enviar o mesmo pacote simultaneamente a vários grupos de servidores externos.",
            "loopback, utilizada para que o próprio computador teste internamente sua pilha de protocolos de rede.",
            "link-local IPv4, utilizada quando o computador não recebe configuração automática do serviço DHCP.",
            "privada, destinada ao uso interno e sem roteamento direto como endereço público na Internet."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. 192.168.0.0/16 é uma das faixas privadas definidas para redes internas.",
        "feedbackErro": "Resposta correta: privada, destinada ao uso interno e sem roteamento direto como endereço público na Internet.\n\nComentário: 192.168.0.0/16 é uma das faixas privadas definidas para redes internas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: As três faixas privadas clássicas são 10/8, 172.16/12 e 192.168/16.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_021",
        "pergunta": "Vários computadores de uma residência usam endereços privados, mas aparecem na Internet compartilhando o mesmo endereço público do roteador. O mecanismo associado a esse cenário é:",
        "alternativas": [
            "NAT/PAT, que traduz endereços internos e diferencia conexões ao permitir o compartilhamento do endereço público.",
            "DNS, que substitui os endereços privados pelo nome de domínio do provedor antes de cada conexão externa.",
            "DHCP, que converte cada endereço interno em endereço público durante o tempo de concessão do cliente.",
            "ARP, que troca endereços IP internos por endereços MAC públicos antes que os quadros saiam para a Internet.",
            "ICMP, que encapsula conexões privadas em mensagens de controle para que o provedor reconheça cada computador nesse cenário de rede."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Em redes domésticas, NAT com tradução de portas permite que vários hosts internos compartilhem um endereço público.",
        "feedbackErro": "Resposta correta: NAT/PAT, que traduz endereços internos e diferencia conexões ao permitir o compartilhamento do endereço público.\n\nComentário: Em redes domésticas, NAT com tradução de portas permite que vários hosts internos compartilhem um endereço público.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: NAT trata tradução de endereços; DHCP trata concessão; DNS trata nomes.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_022",
        "pergunta": "Um computador comunica-se normalmente com outros equipamentos da mesma rede local, mas não alcança nenhuma rede externa. Entre os parâmetros de configuração, o mais diretamente associado à saída da sub-rede é o:",
        "alternativas": [
            "gateway padrão, usado como próximo salto para destinos fora da rede local.",
            "servidor DNS, usado como caminho obrigatório por todos os pacotes destinados a redes externas.",
            "endereço MAC, usado para indicar ao provedor qual rota global deve ser adotada para cada destino.",
            "nome do host, usado pelo roteador para descobrir em qual rede externa o computador pretende entrar.",
            "sufixo de pesquisa DNS, usado para substituir a máscara de sub-rede durante conexões pela Internet."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O gateway padrão é o roteador utilizado quando o destino não está na mesma sub-rede do host.",
        "feedbackErro": "Resposta correta: gateway padrão, usado como próximo salto para destinos fora da rede local.\n\nComentário: O gateway padrão é o roteador utilizado quando o destino não está na mesma sub-rede do host.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Se a LAN funciona mas redes externas não, gateway é um dos primeiros parâmetros a verificar.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_023",
        "pergunta": "Dois computadores possuem endereços 192.168.1.20/24 e 192.168.1.80/24. Considerando apenas esses dados, eles pertencem:",
        "alternativas": [
            "a sub-redes diferentes, porque os dois últimos números do endereço IP precisam ser iguais em uma rede /24.",
            "à mesma rede pública, porque qualquer endereço iniciado por 192 é roteável diretamente pela Internet.",
            "a redes diferentes, porque cada computador de uma LAN precisa utilizar uma máscara exclusiva para evitar conflitos.",
            "a uma rede de loopback, porque o prefixo /24 indica que a comunicação permanece dentro do próprio computador.",
            "à mesma sub-rede 192.168.1.0/24 e podem tentar comunicação local sem recorrer ao gateway para esse destino."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Com máscara /24, os primeiros 24 bits definem a rede; ambos estão no bloco 192.168.1.0/24.",
        "feedbackErro": "Resposta correta: à mesma sub-rede 192.168.1.0/24 e podem tentar comunicação local sem recorrer ao gateway para esse destino.\n\nComentário: Com máscara /24, os primeiros 24 bits definem a rede; ambos estão no bloco 192.168.1.0/24.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: A máscara determina qual parte do IP identifica rede e qual parte identifica host.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_024",
        "pergunta": "Ao configurar manualmente dois computadores na mesma rede, ambos recebem exatamente o endereço 192.168.0.50. O problema mais provável será:",
        "alternativas": [
            "falha de DNS, pois cada nome de computador precisa estar associado a dois endereços IP diferentes na rede local.",
            "erro de gateway, pois o roteador exige que todos os computadores tenham o mesmo endereço IP para sair da rede.",
            "conflito de endereço IP, pois dois hosts não devem utilizar simultaneamente o mesmo endereço na mesma rede.",
            "falha de máscara, pois endereços iguais indicam automaticamente que os computadores pertencem a sub-redes diferentes.",
            "erro de Wi-Fi, pois endereços IPv4 idênticos impedem o ponto de acesso de transmitir sinais de rádio aos clientes."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Endereços IP precisam ser únicos dentro do mesmo domínio de endereçamento para evitar conflitos.",
        "feedbackErro": "Resposta correta: conflito de endereço IP, pois dois hosts não devem utilizar simultaneamente o mesmo endereço na mesma rede.\n\nComentário: Endereços IP precisam ser únicos dentro do mesmo domínio de endereçamento para evitar conflitos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: DHCP ajuda a reduzir conflitos justamente porque administra concessões de endereços.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_025",
        "pergunta": "Em IPv4, o endereço 127.0.0.1 é tradicionalmente utilizado para:",
        "alternativas": [
            "broadcast da rede local, permitindo alcançar todos os dispositivos conectados ao mesmo switch.",
            "loopback, permitindo testar a comunicação da pilha de rede do próprio computador.",
            "gateway padrão, permitindo que o host alcance qualquer destino localizado fora da sub-rede.",
            "DNS local, permitindo resolver automaticamente qualquer domínio sem consultar servidores externos.",
            "endereço privado do roteador, permitindo compartilhar a conexão pública por meio de tradução NAT."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. 127.0.0.1 é o endereço de loopback mais conhecido e representa o próprio host.",
        "feedbackErro": "Resposta correta: loopback, permitindo testar a comunicação da pilha de rede do próprio computador.\n\nComentário: 127.0.0.1 é o endereço de loopback mais conhecido e representa o próprio host.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Loopback testa o próprio computador; não exige que a interface física esteja alcançando a rede externa.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_026",
        "pergunta": "Quando um equipamento precisa descobrir o endereço MAC correspondente ao IPv4 de outro host na mesma LAN, entra em ação principalmente o protocolo:",
        "alternativas": [
            "DNS, responsável por associar cada endereço IPv4 a uma porta física específica do switch da rede local.",
            "DHCP, responsável por consultar o fabricante da placa de rede antes de entregar uma concessão de endereço.",
            "HTTP, responsável por obter o endereço físico do servidor antes de transferir recursos de uma página Web.",
            "SMTP, responsável por descobrir o endereço de hardware do destinatário antes de enviar uma mensagem eletrônica.",
            "ARP, responsável por relacionar um endereço IPv4 local ao endereço físico usado no enlace."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. ARP resolve IPv4 para MAC dentro do enlace local para permitir a entrega dos quadros Ethernet.",
        "feedbackErro": "Resposta correta: ARP, responsável por relacionar um endereço IPv4 local ao endereço físico usado no enlace.\n\nComentário: ARP resolve IPv4 para MAC dentro do enlace local para permitir a entrega dos quadros Ethernet.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: ARP relaciona IP e MAC; DNS relaciona nomes e endereços IP.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_027",
        "pergunta": "Ao digitar um nome como portal.escola.gov.br, o computador precisa descobrir o endereço IP correspondente antes de estabelecer a conexão. O serviço responsável por essa resolução é:",
        "alternativas": [
            "DNS, que traduz nomes de domínio em endereços IP e também mantém outros tipos de registros.",
            "DHCP, que converte o nome do site em um endereço temporário e o entrega ao navegador por concessão.",
            "ARP, que consulta servidores globais para descobrir o endereço IP associado a qualquer nome de domínio.",
            "NAT, que registra os nomes de domínio visitados e os converte em endereços privados da rede interna.",
            "FTP, que localiza o endereço IP do servidor antes de iniciar qualquer transferência de arquivo pela Web."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. DNS é o sistema hierárquico de nomes que associa domínios a endereços e outros registros.",
        "feedbackErro": "Resposta correta: DNS, que traduz nomes de domínio em endereços IP e também mantém outros tipos de registros.\n\nComentário: DNS é o sistema hierárquico de nomes que associa domínios a endereços e outros registros.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Se a questão fala em nome de domínio virando IP, a resposta central é DNS.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_028",
        "pergunta": "Um usuário consegue abrir um site digitando diretamente o endereço IP do servidor, mas recebe erro ao tentar acessar o mesmo serviço pelo nome do domínio. Qual serviço deve ser investigado primeiro?",
        "alternativas": [
            "DHCP, porque o computador perderia o endereço IP ao utilizar um nome de domínio em vez do endereço numérico.",
            "NAT, porque a tradução de endereços privados deixa de funcionar quando o usuário não informa o IP manualmente.",
            "DNS, porque a conectividade IP existe, mas a resolução do nome parece estar falhando.",
            "ARP, porque o protocolo precisa conhecer o endereço MAC de todos os servidores da Internet para resolver nomes.",
            "HTTP, porque o protocolo de páginas Web é responsável por registrar e distribuir todos os nomes de domínio."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Se o acesso por IP funciona e por nome não, a hipótese de falha de resolução DNS ganha força.",
        "feedbackErro": "Resposta correta: DNS, porque a conectividade IP existe, mas a resolução do nome parece estar falhando.\n\nComentário: Se o acesso por IP funciona e por nome não, a hipótese de falha de resolução DNS ganha força.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Questões de diagnóstico costumam separar conectividade IP de resolução de nomes.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_029",
        "pergunta": "O endereço MAC de uma interface de rede é utilizado principalmente como identificador:",
        "alternativas": [
            "de aplicação, empregado para indicar qual programa deverá receber os dados em qualquer rede da Internet.",
            "de enlace, empregado na entrega de quadros dentro da rede local Ethernet ou tecnologia equivalente.",
            "de domínio, empregado para associar sites e servidores aos nomes digitados pelos usuários no navegador.",
            "de roteamento global, empregado pelos roteadores da Internet para escolher caminhos entre sistemas autônomos.",
            "de usuário, empregado pelos servidores para substituir senhas durante processos de autenticação remota."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. MAC atua no enlace local; IP é o endereço lógico usado no roteamento entre redes.",
        "feedbackErro": "Resposta correta: de enlace, empregado na entrega de quadros dentro da rede local Ethernet ou tecnologia equivalente.\n\nComentário: MAC atua no enlace local; IP é o endereço lógico usado no roteamento entre redes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Não trate MAC como endereço roteável globalmente pela Internet.",
        "assunto": "redes",
        "subtopico": "enderecamento-ip"
    },
    {
        "id": "redes_030",
        "pergunta": "Ao acessar uma página por HTTPS, qual característica diferencia esse acesso do HTTP sem proteção criptográfica?",
        "alternativas": [
            "O HTTPS dispensa o protocolo IP e envia as páginas diretamente pelo endereço MAC do servidor remoto.",
            "O HTTPS garante que o conteúdo do site seja verdadeiro e impede que um domínio malicioso obtenha certificado.",
            "O HTTPS utiliza TLS para proteger a comunicação, oferecendo criptografia e verificação do certificado do servidor.",
            "O HTTPS substitui o DNS, porque o certificado digital conteria o endereço IP de todos os sites acessados nesse cenário.",
            "O HTTPS elimina a necessidade de autenticação, já que a criptografia identifica automaticamente cada usuário."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. HTTPS é HTTP protegido por TLS, que ajuda a preservar confidencialidade e integridade dos dados em trânsito.",
        "feedbackErro": "Resposta correta: O HTTPS utiliza TLS para proteger a comunicação, oferecendo criptografia e verificação do certificado do servidor.\n\nComentário: HTTPS é HTTP protegido por TLS, que ajuda a preservar confidencialidade e integridade dos dados em trânsito.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Cadeado indica canal protegido; não é garantia de que o site ou o conteúdo sejam legítimos.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_031",
        "pergunta": "Em correio eletrônico, qual associação entre protocolo e função está correta?",
        "alternativas": [
            "IMAP é usado para enviar mensagens entre servidores, enquanto SMTP teria a função de exibir a caixa postal no navegador.",
            "SMTP resolve nomes de servidores de e-mail, enquanto DNS transfere as mensagens para a caixa de entrada.",
            "SMTP é usado no envio/encaminhamento de mensagens, enquanto IMAP pode manter e sincronizar mensagens no servidor.",
            "POP3 criptografa mensagens no navegador, enquanto SMTP substitui a autenticação do usuário no provedor.",
            "HTTP recebe mensagens de qualquer cliente de e-mail, enquanto IMAP distribui endereços IP para as caixas postais."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. SMTP está ligado ao envio; IMAP está ligado ao acesso e sincronização de mensagens mantidas no servidor.",
        "feedbackErro": "Resposta correta: SMTP é usado no envio/encaminhamento de mensagens, enquanto IMAP pode manter e sincronizar mensagens no servidor.\n\nComentário: SMTP está ligado ao envio; IMAP está ligado ao acesso e sincronização de mensagens mantidas no servidor.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Em prova, lembre: SMTP envia; IMAP sincroniza; POP3 é associado ao recebimento por download.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_032",
        "pergunta": "Um servidor precisa permitir administração remota por terminal com proteção criptográfica das credenciais e da sessão. O protocolo mais adequado é:",
        "alternativas": [
            "Telnet, porque transmite a sessão em texto simples e por isso oferece maior compatibilidade com redes seguras.",
            "SSH, projetado para acesso remoto seguro por terminal e outras operações protegidas.",
            "FTP, porque utiliza autenticação de arquivos para substituir o terminal remoto durante a administração do servidor.",
            "SMTP, porque encapsula comandos administrativos em mensagens autenticadas entre o cliente e o servidor remoto.",
            "SNMP, porque fornece uma sessão de terminal interativa para executar comandos administrativos no sistema operacional."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. SSH é o protocolo clássico para terminal remoto seguro e substitui Telnet em cenários que exigem proteção.",
        "feedbackErro": "Resposta correta: SSH, projetado para acesso remoto seguro por terminal e outras operações protegidas.\n\nComentário: SSH é o protocolo clássico para terminal remoto seguro e substitui Telnet em cenários que exigem proteção.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Telnet é histórico e inseguro por não proteger a sessão como o SSH.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_033",
        "pergunta": "Sobre FTP e SFTP, assinale a alternativa correta.",
        "alternativas": [
            "SFTP opera sobre SSH e não deve ser confundido com o FTP tradicional nem com o FTPS.",
            "SFTP seria outro nome do FTP tradicional quando o servidor utiliza senha para autenticar o usuário.",
            "FTP e SFTP utilizam necessariamente a mesma porta e o mesmo mecanismo de proteção da sessão de dados.",
            "SFTP corresponde ao FTP executado dentro do navegador por HTTPS e depende do certificado digital do site.",
            "FTP tradicional utiliza criptografia do SSH por padrão, enquanto SFTP transmite comandos e arquivos em texto claro."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. SFTP é um protocolo de transferência de arquivos associado ao SSH e é distinto do FTP/FTPS.",
        "feedbackErro": "Resposta correta: SFTP opera sobre SSH e não deve ser confundido com o FTP tradicional nem com o FTPS.\n\nComentário: SFTP é um protocolo de transferência de arquivos associado ao SSH e é distinto do FTP/FTPS.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: A semelhança do nome costuma ser usada como pegadinha: SFTP não é “FTP com S”.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_034",
        "pergunta": "Quando um navegador solicita uma página a um servidor Web e recebe código HTTP 404, isso indica que:",
        "alternativas": [
            "o servidor confirmou o processamento bem-sucedido e está aguardando o navegador salvar o recurso em cache.",
            "a conexão foi redirecionada permanentemente e o navegador precisa consultar o DHCP para obter outra URL.",
            "o DNS não encontrou qualquer endereço IP para o domínio e por isso o servidor Web devolveu o código de erro.",
            "o servidor foi alcançado, mas o recurso solicitado não foi encontrado naquele endereço.",
            "o certificado TLS expirou e o servidor encerrou a conexão antes de receber a requisição HTTP, como comportamento padrão do código 404."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. 404 é um código HTTP de recurso não encontrado; o servidor Web foi alcançado para produzir essa resposta.",
        "feedbackErro": "Resposta correta: o servidor foi alcançado, mas o recurso solicitado não foi encontrado naquele endereço.\n\nComentário: 404 é um código HTTP de recurso não encontrado; o servidor Web foi alcançado para produzir essa resposta.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Não confunda 404 com falta de Internet ou falha de DNS.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_035",
        "pergunta": "Em uma URL como https://portal.exemplo.org/documentos/prova.pdf, o trecho “https” identifica:",
        "alternativas": [
            "o domínio principal do servidor responsável por armazenar o arquivo prova.pdf na Internet.",
            "o esquema/protocolo usado para acessar o recurso, indicando HTTP protegido por TLS.",
            "o caminho interno do arquivo dentro do sistema de diretórios físico do computador do usuário.",
            "o serviço DNS encarregado de traduzir o domínio portal.exemplo.org em um endereço de enlace.",
            "a extensão do documento que informa ao navegador qual aplicativo deverá abrir o arquivo baixado."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O início da URL informa o esquema de acesso; em https://, trata-se de HTTP com proteção TLS.",
        "feedbackErro": "Resposta correta: o esquema/protocolo usado para acessar o recurso, indicando HTTP protegido por TLS.\n\nComentário: O início da URL informa o esquema de acesso; em https://, trata-se de HTTP com proteção TLS.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Questões sobre URL podem separar esquema, domínio, caminho e nome do recurso.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_036",
        "pergunta": "O protocolo TCP é geralmente escolhido por aplicações que necessitam de:",
        "alternativas": [
            "transmissão sem controle de entrega, priorizando a menor sobrecarga mesmo quando a aplicação exige confiabilidade.",
            "resolução de nomes de domínio, mantendo uma base hierárquica de endereços IP de servidores na Internet.",
            "atribuição automática de endereços aos clientes, além de máscara e gateway durante a entrada na rede.",
            "descoberta do endereço MAC de um host local, dispensando o uso de endereçamento IP entre redes distintas.",
            "entrega confiável e ordenada dos dados, com controle de conexão e retransmissão quando necessário."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. TCP oferece comunicação orientada à conexão, com mecanismos de confiabilidade e ordenação.",
        "feedbackErro": "Resposta correta: entrega confiável e ordenada dos dados, com controle de conexão e retransmissão quando necessário.\n\nComentário: TCP oferece comunicação orientada à conexão, com mecanismos de confiabilidade e ordenação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Compare com UDP: menor sobrecarga e ausência dos mesmos mecanismos de confirmação e ordenação.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_037",
        "pergunta": "Em uma videoconferência em tempo real, pequenas perdas podem ser preferíveis a esperar retransmissões que aumentariam o atraso. Esse raciocínio ajuda a explicar o uso frequente de:",
        "alternativas": [
            "TCP em qualquer fluxo de áudio, porque descarta automaticamente pacotes atrasados antes que cheguem ao aplicativo.",
            "DNS para transportar áudio, porque o serviço prioriza respostas rápidas e não exige confirmação do destinatário.",
            "DHCP para transmitir vídeo, porque as concessões temporárias eliminam atrasos provocados por pacotes perdidos.",
            "UDP em fluxos de tempo real, por reduzir a sobrecarga e não impor a mesma lógica de retransmissão do TCP.",
            "ARP para videoconferência externa, porque o protocolo encontra o endereço físico de cada participante na Internet."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. UDP é comum em aplicações sensíveis a latência, nas quais a aplicação pode tolerar alguma perda.",
        "feedbackErro": "Resposta correta: UDP em fluxos de tempo real, por reduzir a sobrecarga e não impor a mesma lógica de retransmissão do TCP.\n\nComentário: UDP é comum em aplicações sensíveis a latência, nas quais a aplicação pode tolerar alguma perda.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: UDP não é “melhor” em geral; a escolha depende das necessidades de confiabilidade e atraso da aplicação.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_038",
        "pergunta": "O comando ou protocolo “ping” utiliza mensagens associadas ao ICMP principalmente para:",
        "alternativas": [
            "listar todos os arquivos compartilhados pelo destino e confirmar as permissões de cada usuário da rede.",
            "descobrir automaticamente a senha do roteador e verificar se a autenticação remota está funcionando.",
            "resolver nomes de domínio consultando diretamente os servidores DNS raiz a cada pacote transmitido.",
            "testar alcance e obter uma indicação básica de tempo de resposta entre origem e destino.",
            "mostrar a sequência completa de roteadores intermediários percorridos por cada conexão TCP do navegador."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Ping é um teste simples de alcance e latência aproximada com ICMP Echo.",
        "feedbackErro": "Resposta correta: testar alcance e obter uma indicação básica de tempo de resposta entre origem e destino.\n\nComentário: Ping é um teste simples de alcance e latência aproximada com ICMP Echo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Ping não prova que todos os serviços do destino estão disponíveis; firewalls também podem bloquear ICMP.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_039",
        "pergunta": "Ao executar tracert/traceroute para um servidor externo, o objetivo principal é:",
        "alternativas": [
            "identificar os saltos intermediários percorridos até o destino e observar onde podem surgir atrasos ou interrupções.",
            "medir a velocidade contratada da Internet transferindo um arquivo de tamanho fixo por cada roteador intermediário.",
            "listar os endereços MAC de todos os roteadores existentes na Internet entre o computador e o servidor consultado.",
            "renovar a concessão DHCP em cada rede atravessada para garantir que o pacote mantenha o mesmo endereço de origem.",
            "consultar o conteúdo do cache DNS de cada equipamento intermediário antes de estabelecer uma conexão com o destino nesse cenário de rede."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Traceroute/tracert revela os saltos do caminho usando o comportamento do TTL/hop limit.",
        "feedbackErro": "Resposta correta: identificar os saltos intermediários percorridos até o destino e observar onde podem surgir atrasos ou interrupções.\n\nComentário: Traceroute/tracert revela os saltos do caminho usando o comportamento do TTL/hop limit.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Ping testa alcance; traceroute ajuda a visualizar o caminho.",
        "assunto": "redes",
        "subtopico": "protocolos-servicos-portas"
    },
    {
        "id": "redes_040",
        "pergunta": "Em uma rede Wi-Fi doméstica, o nome que identifica logicamente a rede sem fio e aparece na lista de redes disponíveis é chamado de:",
        "alternativas": [
            "BSSID, nome textual escolhido pelo usuário e usado como senha de acesso em qualquer roteador doméstico.",
            "DNS, identificação pública do ponto de acesso usada para localizar a rede sem fio pela Internet.",
            "DHCP, nome atribuído à rede durante a concessão automática de um endereço IP ao primeiro cliente.",
            "SSID, identificador usado para distinguir a rede Wi-Fi de outras redes próximas.",
            "WPA, rótulo de transmissão que substitui o endereço MAC do access point durante a associação do cliente."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. SSID é o nome lógico da WLAN que os usuários costumam selecionar para conexão.",
        "feedbackErro": "Resposta correta: SSID, identificador usado para distinguir a rede Wi-Fi de outras redes próximas.\n\nComentário: SSID é o nome lógico da WLAN que os usuários costumam selecionar para conexão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: SSID identifica a rede; WPA2/WPA3 tratam proteção; DHCP trata configuração IP.",
        "assunto": "redes",
        "subtopico": "redes-sem-fio"
    },
    {
        "id": "redes_041",
        "pergunta": "Comparando, de forma geral, Wi-Fi em 2,4 GHz e 5 GHz no mesmo ambiente, qual afirmação é mais adequada?",
        "alternativas": [
            "2,4 GHz oferece maior velocidade e menor alcance por usar frequência mais baixa, independentemente das condições do ambiente.",
            "5 GHz tende a oferecer maior capacidade e menos interferência em muitos cenários, mas costuma ter menor alcance através de obstáculos.",
            "5 GHz atravessa paredes com maior facilidade e por isso costuma alcançar distâncias maiores que 2,4 GHz.",
            "2,4 GHz impede o uso de criptografia WPA2, enquanto 5 GHz é a faixa reservada para redes Wi-Fi protegidas nesse cenário de rede, considerando ainda a configuração descrita no enunciado.",
            "5 GHz indica conexão de quinta geração móvel e depende de cobertura celular da operadora para funcionar."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Em termos gerais, 2,4 GHz tende a alcançar mais; 5 GHz pode oferecer maior desempenho e menor congestionamento.",
        "feedbackErro": "Resposta correta: 5 GHz tende a oferecer maior capacidade e menos interferência em muitos cenários, mas costuma ter menor alcance através de obstáculos.\n\nComentário: Em termos gerais, 2,4 GHz tende a alcançar mais; 5 GHz pode oferecer maior desempenho e menor congestionamento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Não confunda frequência do Wi-Fi com tecnologia celular 5G.",
        "assunto": "redes",
        "subtopico": "redes-sem-fio"
    },
    {
        "id": "redes_042",
        "pergunta": "Uma rede Wi-Fi escolar apresenta boa intensidade de sinal, mas muitos usuários simultâneos percebem lentidão no mesmo canal. Uma explicação plausível é:",
        "alternativas": [
            "falha obrigatória do DNS, porque muitos clientes no mesmo canal impedem a tradução de nomes de domínio em endereços IP.",
            "erro de máscara, porque cada novo usuário reduz automaticamente a quantidade de bits disponíveis para a sub-rede.",
            "defeito do cabo do provedor, já que sinal Wi-Fi forte elimina qualquer possibilidade de congestionamento no meio sem fio.",
            "ausência de NAT, porque clientes conectados ao mesmo canal precisam possuir endereços públicos diferentes para transmitir.",
            "contenção do meio e interferência, pois os clientes compartilham o canal de rádio e disputam oportunidades de transmissão."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Wi-Fi é meio compartilhado; muitos clientes e redes vizinhas podem aumentar contenção e interferência mesmo com sinal forte.",
        "feedbackErro": "Resposta correta: contenção do meio e interferência, pois os clientes compartilham o canal de rádio e disputam oportunidades de transmissão.\n\nComentário: Wi-Fi é meio compartilhado; muitos clientes e redes vizinhas podem aumentar contenção e interferência mesmo com sinal forte.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Barras de sinal não medem sozinhas a qualidade total da conexão.",
        "assunto": "redes",
        "subtopico": "redes-sem-fio"
    },
    {
        "id": "redes_043",
        "pergunta": "Sobre WPA2 e WPA3 em redes Wi-Fi, assinale a alternativa correta.",
        "alternativas": [
            "São padrões de cabeamento Ethernet usados para diferenciar cabos de categoria 5e e 6 em redes locais.",
            "São protocolos de roteamento usados para escolher o melhor caminho entre access points de redes diferentes nesse cenário de rede.",
            "São serviços de resolução de nomes criados para impedir que usuários descubram o endereço IP do roteador.",
            "São mecanismos de proteção da rede sem fio, sendo o WPA3 uma evolução com melhorias de segurança em relação ao WPA2.",
            "São frequências de rádio que correspondem, respectivamente, às faixas de 2,4 GHz e 5 GHz do Wi-Fi."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. WPA2 e WPA3 tratam segurança de redes Wi-Fi; WPA3 é a geração posterior.",
        "feedbackErro": "Resposta correta: São mecanismos de proteção da rede sem fio, sendo o WPA3 uma evolução com melhorias de segurança em relação ao WPA2.\n\nComentário: WPA2 e WPA3 tratam segurança de redes Wi-Fi; WPA3 é a geração posterior.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Não confunda padrão de segurança com frequência ou padrão 802.11.",
        "assunto": "redes",
        "subtopico": "redes-sem-fio"
    },
    {
        "id": "redes_044",
        "pergunta": "Um usuário conecta o notebook a uma rede Wi-Fi pública aberta e precisa acessar informações sensíveis. Qual conduta reduz melhor a exposição?",
        "alternativas": [
            "priorizar conexões HTTPS e, quando aplicável, usar uma VPN confiável, evitando serviços sensíveis sem proteção adequada.",
            "desativar o firewall do notebook para que a rede pública consiga reconhecer corretamente todos os serviços do sistema.",
            "compartilhar arquivos da pasta pessoal para testar se os outros clientes da rede conseguem alcançar o computador.",
            "substituir HTTPS por HTTP para reduzir o tempo de conexão e impedir que o ponto de acesso registre o endereço visitado.",
            "usar a mesma senha do Wi-Fi como senha das contas acessadas, facilitando a recuperação caso a conexão seja interrompida."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Redes públicas exigem cautela; HTTPS e VPN podem proteger dados em trânsito contra observação local indevida.",
        "feedbackErro": "Resposta correta: priorizar conexões HTTPS e, quando aplicável, usar uma VPN confiável, evitando serviços sensíveis sem proteção adequada.\n\nComentário: Redes públicas exigem cautela; HTTPS e VPN podem proteger dados em trânsito contra observação local indevida.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Rede aberta não significa que todo tráfego esteja exposto da mesma forma, mas aumenta a necessidade de boas práticas.",
        "assunto": "redes",
        "subtopico": "redes-sem-fio"
    },
    {
        "id": "redes_045",
        "pergunta": "Um repetidor Wi-Fi é instalado em um ponto onde já chega sinal muito fraco do roteador principal. O resultado pode continuar ruim porque:",
        "alternativas": [
            "o repetidor precisa estar conectado diretamente ao servidor DNS para descobrir em qual frequência deve retransmitir.",
            "o repetidor depende de receber um enlace de qualidade suficiente para retransmiti-lo de forma útil.",
            "o repetidor transforma automaticamente a rede em 5 GHz, reduzindo a compatibilidade com qualquer dispositivo 2,4 GHz.",
            "o roteador principal deixa de fornecer endereços IP assim que detecta outro equipamento transmitindo o mesmo SSID.",
            "a retransmissão Wi-Fi elimina o uso de quadros e passa a depender de pacotes IP públicos entregues pela operadora."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Repetidores não “criam” qualidade: eles precisam receber um sinal razoável para estendê-lo com utilidade.",
        "feedbackErro": "Resposta correta: o repetidor depende de receber um enlace de qualidade suficiente para retransmiti-lo de forma útil.\n\nComentário: Repetidores não “criam” qualidade: eles precisam receber um sinal razoável para estendê-lo com utilidade.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Posicionamento é essencial em extensão de cobertura sem fio.",
        "assunto": "redes",
        "subtopico": "redes-sem-fio"
    },
    {
        "id": "redes_046",
        "pergunta": "Ocultar a divulgação do SSID de uma rede Wi-Fi deve ser entendido como:",
        "alternativas": [
            "um mecanismo equivalente ao WPA3, porque impede que clientes não autorizados detectem qualquer transmissão da rede.",
            "uma forma de criptografia do tráfego, pois o nome oculto é usado como chave para cifrar os quadros transmitidos.",
            "uma proteção que elimina a necessidade de senha quando o endereço MAC do cliente estiver previamente cadastrado no roteador.",
            "um recurso que impede fisicamente a propagação do sinal para fora do ambiente em que o access point está instalado.",
            "uma medida de baixa eficácia isoladamente, que não substitui criptografia forte e autenticação adequada."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Ocultar SSID não oferece proteção robusta; a rede continua transmitindo informações que podem revelar sua presença.",
        "feedbackErro": "Resposta correta: uma medida de baixa eficácia isoladamente, que não substitui criptografia forte e autenticação adequada.\n\nComentário: Ocultar SSID não oferece proteção robusta; a rede continua transmitindo informações que podem revelar sua presença.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Segurança Wi-Fi deve se apoiar em criptografia e autenticação, não em esconder apenas o nome da rede.",
        "assunto": "redes",
        "subtopico": "redes-sem-fio"
    },
    {
        "id": "redes_047",
        "pergunta": "Um access point oferece duas redes: uma para funcionários e outra para visitantes, com acesso restrito apenas à Internet. Essa configuração exemplifica principalmente:",
        "alternativas": [
            "amplificação do sinal, porque cada SSID duplica automaticamente a potência de transmissão do access point.",
            "resolução DNS redundante, porque redes com nomes diferentes precisam consultar servidores de domínio independentes.",
            "troca de frequência, porque funcionários usariam 5 GHz e visitantes ficariam limitados a 2,4 GHz por definição.",
            "segmentação de acesso, reduzindo a exposição da rede interna aos dispositivos de visitantes.",
            "conversão NAT estática, porque cada visitante precisa receber um endereço público fixo diferente do usado pelos funcionários."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Rede de convidados é uma forma comum de separar dispositivos não confiáveis da rede interna.",
        "feedbackErro": "Resposta correta: segmentação de acesso, reduzindo a exposição da rede interna aos dispositivos de visitantes.\n\nComentário: Rede de convidados é uma forma comum de separar dispositivos não confiáveis da rede interna.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Segmentar visitantes é uma prática de segurança e organização, não apenas uma escolha de nome de Wi-Fi.",
        "assunto": "redes",
        "subtopico": "redes-sem-fio"
    },
    {
        "id": "redes_048",
        "pergunta": "Em redes Wi-Fi, a intensidade do sinal indicada pelo dispositivo e a velocidade efetiva da Internet:",
        "alternativas": [
            "são equivalentes, pois quatro barras de Wi-Fi garantem que a velocidade contratada esteja integralmente disponível ao usuário.",
            "dependem do DNS, pois a resolução de nomes determinaria simultaneamente o nível do sinal de rádio e a taxa de download.",
            "só diferem quando o computador utiliza endereço IP público, pois redes privadas apresentam velocidade igual à intensidade do sinal.",
            "tornam-se idênticas quando o roteador e o notebook utilizam a mesma versão do sistema operacional e do navegador.",
            "são medidas diferentes; um sinal forte pode coexistir com Internet lenta por congestionamento, provedor ou outros fatores."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Sinal Wi-Fi mede a qualidade do enlace local; desempenho da Internet depende também de capacidade, interferência, servidor e provedor.",
        "feedbackErro": "Resposta correta: são medidas diferentes; um sinal forte pode coexistir com Internet lenta por congestionamento, provedor ou outros fatores.\n\nComentário: Sinal Wi-Fi mede a qualidade do enlace local; desempenho da Internet depende também de capacidade, interferência, servidor e provedor.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Boa cobertura não garante boa velocidade fim a fim.",
        "assunto": "redes",
        "subtopico": "redes-sem-fio"
    },
    {
        "id": "redes_049",
        "pergunta": "Um firewall instalado entre a rede interna e a Internet tem como função central:",
        "alternativas": [
            "resolver nomes de domínio e direcionar cada usuário ao servidor Web correspondente ao endereço solicitado.",
            "distribuir endereços IP aos clientes internos e renovar automaticamente as concessões quando elas expirarem.",
            "aumentar a potência do sinal Wi-Fi e selecionar o canal menos congestionado para cada dispositivo conectado.",
            "substituir o antivírus ao analisar o conteúdo de todos os arquivos existentes nos discos dos computadores da rede nesse cenário de rede.",
            "controlar o tráfego conforme regras de segurança, permitindo ou bloqueando comunicações de acordo com a política definida."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Firewall aplica regras ao tráfego de rede e ajuda a reduzir acessos não autorizados.",
        "feedbackErro": "Resposta correta: controlar o tráfego conforme regras de segurança, permitindo ou bloqueando comunicações de acordo com a política definida.\n\nComentário: Firewall aplica regras ao tráfego de rede e ajuda a reduzir acessos não autorizados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Firewall não substitui antivírus, atualizações ou autenticação; é uma camada de defesa.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_050",
        "pergunta": "Uma VPN é utilizada por um servidor público para que funcionários remotos acessem sistemas internos pela Internet. Nesse cenário, a VPN cria:",
        "alternativas": [
            "uma nova conexão física dedicada entre a residência do funcionário e cada servidor da instituição pública.",
            "um túnel lógico protegido sobre a rede pública, permitindo acesso remoto conforme as políticas da organização.",
            "um serviço DNS particular que substitui todos os mecanismos de autenticação e criptografia do acesso remoto.",
            "uma rede Wi-Fi de maior alcance que elimina a participação do provedor de Internet na comunicação do usuário.",
            "um endereço MAC público permanente que identifica o funcionário em qualquer rede utilizada durante o trabalho remoto."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. VPN cria túnel lógico sobre uma rede existente e pode proteger o tráfego entre os pontos configurados.",
        "feedbackErro": "Resposta correta: um túnel lógico protegido sobre a rede pública, permitindo acesso remoto conforme as políticas da organização.\n\nComentário: VPN cria túnel lógico sobre uma rede existente e pode proteger o tráfego entre os pontos configurados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: VPN não significa anonimato total nem elimina a necessidade de autenticação e boas práticas.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_051",
        "pergunta": "O acesso à VPN de uma organização exige senha e confirmação por aplicativo autenticador. Essa política aplica:",
        "alternativas": [
            "criptografia simétrica de dois níveis, na qual a senha do usuário é usada duas vezes para cifrar cada pacote transmitido.",
            "dupla concessão DHCP, que fornece dois endereços IP ao mesmo usuário para aumentar a disponibilidade da conexão remota.",
            "autenticação multifator, combinando fatores distintos para reduzir o risco de uso indevido de uma senha comprometida.",
            "roteamento redundante, que envia cópias idênticas dos pacotes por dois caminhos até que um deles seja confirmado pelo servidor.",
            "filtragem por endereço MAC, que substitui a identidade do usuário pelo código físico da interface utilizada no acesso remoto."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. MFA usa mais de um fator de autenticação, como senha e confirmação em dispositivo/aplicativo.",
        "feedbackErro": "Resposta correta: autenticação multifator, combinando fatores distintos para reduzir o risco de uso indevido de uma senha comprometida.\n\nComentário: MFA usa mais de um fator de autenticação, como senha e confirmação em dispositivo/aplicativo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Dois passos só são multifator quando representam fatores independentes, não apenas duas perguntas do mesmo tipo.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_052",
        "pergunta": "Uma organização separa câmeras, visitantes e computadores administrativos em segmentos distintos e controla a comunicação entre eles. O principal benefício de segurança é:",
        "alternativas": [
            "reduzir a superfície de exposição e limitar o movimento lateral caso um dispositivo ou segmento seja comprometido.",
            "aumentar automaticamente a velocidade contratada com o provedor, porque cada segmento recebe uma conexão externa independente.",
            "eliminar a necessidade de firewall, pois segmentos separados não conseguem trocar qualquer tráfego em nenhuma circunstância.",
            "dispensar autenticação dos usuários, já que a posição lógica do equipamento passa a comprovar a identidade de quem o utiliza.",
            "substituir backups, pois uma falha em um segmento não consegue afetar arquivos armazenados em computadores de outros setores."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Segmentação ajuda a controlar fluxos e a conter incidentes, reduzindo comunicações desnecessárias entre grupos.",
        "feedbackErro": "Resposta correta: reduzir a superfície de exposição e limitar o movimento lateral caso um dispositivo ou segmento seja comprometido.\n\nComentário: Segmentação ajuda a controlar fluxos e a conter incidentes, reduzindo comunicações desnecessárias entre grupos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Segregar rede é defesa em profundidade; não substitui controles de acesso, firewall e backup.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_053",
        "pergunta": "Um administrador recebe um e-mail pedindo “urgência” para clicar em um link e informar a senha da rede corporativa. O risco principal é:",
        "alternativas": [
            "phishing, uma tentativa de induzir o usuário a entregar credenciais ou outras informações por meio de engenharia social.",
            "sniffing, que depende de capturar diretamente os pacotes da rede e não envolve interação enganosa com o usuário.",
            "roteamento dinâmico, que alteraria o caminho dos pacotes em resposta ao recebimento de uma mensagem suspeita.",
            "fragmentação IP, que divide mensagens de e-mail grandes em pacotes menores para contornar os filtros do provedor.",
            "broadcast, que encaminha o mesmo e-mail a todos os computadores da LAN sem depender de um servidor de correio eletrônico."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Phishing usa fraude e engenharia social para obter credenciais ou induzir ações perigosas.",
        "feedbackErro": "Resposta correta: phishing, uma tentativa de induzir o usuário a entregar credenciais ou outras informações por meio de engenharia social.\n\nComentário: Phishing usa fraude e engenharia social para obter credenciais ou induzir ações perigosas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Urgência, links inesperados e solicitação de senha são sinais clássicos de engenharia social.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_054",
        "pergunta": "Ao configurar o roteador Wi-Fi de uma escola, manter a senha administrativa padrão de fábrica aumenta o risco porque:",
        "alternativas": [
            "o roteador deixa de conseguir distribuir endereços privados e passa automaticamente a fornecer IPs públicos aos computadores nesse cenário de rede.",
            "a senha padrão reduz fisicamente o alcance das antenas e obriga os usuários a se aproximarem do equipamento para navegar.",
            "o DNS deixa de responder a consultas externas e passa a aceitar nomes cadastrados manualmente pelo administrador.",
            "credenciais padrão podem ser conhecidas ou facilmente descobertas, permitindo alteração indevida da configuração do equipamento.",
            "a rede perde a capacidade de usar protocolos HTTPS, pois certificados digitais dependem da senha administrativa do roteador."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Credenciais padrão são uma fraqueza comum e devem ser substituídas por senhas administrativas fortes e únicas.",
        "feedbackErro": "Resposta correta: credenciais padrão podem ser conhecidas ou facilmente descobertas, permitindo alteração indevida da configuração do equipamento.\n\nComentário: Credenciais padrão são uma fraqueza comum e devem ser substituídas por senhas administrativas fortes e únicas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Senha do painel administrativo e senha do Wi-Fi são controles diferentes.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_055",
        "pergunta": "Um computador conectado à rede possui sistema e aplicativos sem atualizações de segurança há muito tempo. Mesmo com firewall ativo, existe risco relevante porque:",
        "alternativas": [
            "vulnerabilidades conhecidas podem permanecer exploráveis; firewall constitui uma das camadas de proteção.",
            "o firewall depende das atualizações do navegador para conseguir atribuir endereços IP aos programas que acessam a Internet.",
            "sistemas desatualizados deixam de possuir endereço MAC válido e por isso não podem ser identificados corretamente pelo switch.",
            "a falta de atualização transforma automaticamente conexões HTTPS em HTTP, mesmo quando o servidor oferece certificado válido.",
            "o DHCP recusa concessões a computadores com versões antigas do sistema operacional para preservar a segurança da rede local."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Atualizações corrigem falhas conhecidas; firewall não elimina vulnerabilidades do sistema ou das aplicações.",
        "feedbackErro": "Resposta correta: vulnerabilidades conhecidas podem permanecer exploráveis; firewall é apenas uma das camadas de proteção.\n\nComentário: Atualizações corrigem falhas conhecidas; firewall não elimina vulnerabilidades do sistema ou das aplicações.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Segurança eficaz é em camadas: atualização, autenticação, firewall, antimalware, backup e comportamento do usuário.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_056",
        "pergunta": "Em uma rede pública, um atacante captura pacotes que trafegam pelo meio para observar comunicações. A prática é conhecida como:",
        "alternativas": [
            "spoofing, que consistiria em aumentar artificialmente a intensidade do sinal para atrair clientes a um access point falso.",
            "sniffing, isto é, captura e análise de tráfego de rede, legítima em diagnóstico ou indevida quando feita sem autorização.",
            "phishing, que depende de alterar o endereço MAC do roteador antes de pedir credenciais diretamente ao usuário da rede.",
            "patching, que atualiza os pacotes capturados para corrigir vulnerabilidades antes que alcancem o computador de destino.",
            "routing, que registra o conteúdo das aplicações para decidir automaticamente por qual cabo cada quadro deverá ser enviado."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Sniffing é captura/análise de pacotes; pode ser ferramenta legítima de diagnóstico ou técnica de espionagem.",
        "feedbackErro": "Resposta correta: sniffing, isto é, captura e análise de tráfego de rede, legítima em diagnóstico ou indevida quando feita sem autorização.\n\nComentário: Sniffing é captura/análise de pacotes; pode ser ferramenta legítima de diagnóstico ou técnica de espionagem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Criptografia reduz o valor do conteúdo capturado por terceiros.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_057",
        "pergunta": "Um servidor interno precisa ser acessado da Internet por uma porta específica do roteador, que encaminhará as conexões ao endereço privado do servidor. O recurso descrito é:",
        "alternativas": [
            "DNS reverso, que publica automaticamente o endereço privado do servidor para que qualquer usuário da Internet possa acessá-lo.",
            "DHCP relay, que encaminha pedidos de configuração IP da Internet diretamente ao servidor interno em outra sub-rede.",
            "redirecionamento de porta (port forwarding), que mapeia uma porta externa para um destino interno definido.",
            "ARP proxy, que transforma a porta TCP pública em um endereço MAC usado por todos os computadores fora da rede local.",
            "SSID broadcast, que anuncia pela rede sem fio a porta do serviço interno para que clientes externos localizem o servidor."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Port forwarding publica de forma controlada um serviço interno por meio de uma porta no equipamento de borda.",
        "feedbackErro": "Resposta correta: redirecionamento de porta (port forwarding), que mapeia uma porta externa para um destino interno definido.\n\nComentário: Port forwarding publica de forma controlada um serviço interno por meio de uma porta no equipamento de borda.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Abrir porta aumenta a superfície exposta; deve ser feito apenas quando necessário e com o serviço protegido.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_058",
        "pergunta": "Uma rede de visitantes deve acessar a Internet, mas não as pastas e sistemas da rede administrativa. Qual medida é mais coerente?",
        "alternativas": [
            "usar o mesmo segmento e a mesma senha dos funcionários, confiando no antivírus dos visitantes para impedir acessos inadequados.",
            "desativar o DHCP da rede de visitantes e entregar a cada pessoa o endereço IP de um computador administrativo já cadastrado.",
            "ocultar o SSID da rede administrativa, mantendo os dois grupos no mesmo domínio de acesso e sem regras adicionais de filtragem.",
            "configurar o DNS para não resolver nomes internos, pois isso impede por si só qualquer acesso por endereço IP aos sistemas administrativos nesse cenário de rede.",
            "isolar a rede de convidados e aplicar regras que bloqueiem o acesso aos segmentos internos, liberando o necessário para a saída externa."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Rede de convidados deve ser segmentada e filtrada para impedir acesso desnecessário à infraestrutura interna.",
        "feedbackErro": "Resposta correta: isolar a rede de convidados e aplicar regras que bloqueiem o acesso aos segmentos internos, liberando apenas o necessário para saída externa.\n\nComentário: Rede de convidados deve ser segmentada e filtrada para impedir acesso desnecessário à infraestrutura interna.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Bloquear apenas resolução DNS não é controle de acesso; endereços IP ainda podem ser usados diretamente.",
        "assunto": "redes",
        "subtopico": "seguranca-em-redes"
    },
    {
        "id": "redes_059",
        "pergunta": "Um usuário informa “a Internet caiu”. O computador, porém, consegue pingar o gateway local, mas não um endereço IP público conhecido. Qual interpretação inicial é mais coerente?",
        "alternativas": [
            "o cabo entre o computador e o switch está necessariamente rompido, embora o gateway responda normalmente ao ping local.",
            "o problema é DNS, porque falhas de resolução de nomes também impediriam o acesso direto a endereços IP públicos.",
            "a conectividade local até o gateway existe, e a investigação deve avançar para o roteador, enlace do provedor ou rota externa.",
            "o endereço MAC do computador está duplicado, e essa duplicidade bloquearia os pacotes destinados às redes externas.",
            "o navegador precisa limpar o histórico, já que o ping depende dos mesmos arquivos de cache usados para abrir páginas Web, considerando ainda a configuração descrita no enunciado."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Se o gateway responde, parte da LAN funciona; falha para IP externo desloca a investigação para o caminho após o gateway.",
        "feedbackErro": "Resposta correta: a conectividade local até o gateway existe, e a investigação deve avançar para o roteador, enlace do provedor ou rota externa.\n\nComentário: Se o gateway responde, parte da LAN funciona; falha para IP externo desloca a investigação para o caminho após o gateway.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Diagnóstico eficiente testa por camadas: enlace local, IP, gateway, destino externo e depois DNS/aplicação.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_060",
        "pergunta": "Um computador consegue pingar 8.8.8.8, mas não abre sites quando são informados seus nomes. Qual causa é mais compatível com o sintoma?",
        "alternativas": [
            "falha física do cabo, porque a resolução de nomes exige pares trançados diferentes dos utilizados pelo protocolo ICMP.",
            "ausência de endereço IP, porque o computador não consegue enviar ping para um destino externo sem estar configurado na rede.",
            "defeito do switch, porque quadros destinados a DNS usam uma tabela de encaminhamento diferente daquela utilizada pelo ping.",
            "erro de gateway, porque um gateway incorreto permite alcançar endereços IP, mas bloqueia especificamente consultas por nome.",
            "falha ou configuração incorreta de DNS, porque a conectividade IP externa está presente."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Acesso por IP com falha por nome é um forte indício de problema de resolução DNS.",
        "feedbackErro": "Resposta correta: falha ou configuração incorreta de DNS, porque a conectividade IP externa está presente.\n\nComentário: Acesso por IP com falha por nome é um forte indício de problema de resolução DNS.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Antes de culpar o navegador, teste resolução com nslookup ou equivalente.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_061",
        "pergunta": "Ao executar ipconfig no Windows, um técnico pretende verificar principalmente:",
        "alternativas": [
            "parâmetros de configuração IP das interfaces, como endereço, máscara e gateway, conforme as opções utilizadas.",
            "o conteúdo de todos os pacotes que atravessam a placa de rede, incluindo senhas enviadas por aplicações sem criptografia.",
            "a rota completa até um servidor externo, mostrando cada roteador intermediário e o tempo gasto em cada salto.",
            "a lista de arquivos abertos por usuários remotos em compartilhamentos SMB disponíveis no computador local.",
            "o nível de sinal de todas as redes Wi-Fi próximas e o canal utilizado por cada access point detectado pelo adaptador."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. ipconfig é uma ferramenta de consulta e gestão de configuração IP no Windows.",
        "feedbackErro": "Resposta correta: parâmetros de configuração IP das interfaces, como endereço, máscara e gateway, conforme as opções utilizadas.\n\nComentário: ipconfig é uma ferramenta de consulta e gestão de configuração IP no Windows.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: ipconfig mostra configuração; ping testa alcance; tracert mostra caminho; nslookup consulta DNS.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_062",
        "pergunta": "O comando nslookup é particularmente útil quando se deseja:",
        "alternativas": [
            "medir a perda de pacotes em todos os saltos intermediários usando mensagens de eco repetidas para cada roteador.",
            "consultar informações de DNS e verificar como um nome está sendo resolvido para um endereço.",
            "renovar diretamente o endereço MAC da placa de rede para eliminar conflitos de identificação no switch local.",
            "listar as portas físicas do switch e descobrir qual cabo está conectado a cada computador da rede institucional.",
            "alterar as regras do firewall local sem conhecer o nome do perfil de rede aplicado pelo sistema operacional."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. nslookup consulta DNS e ajuda a diagnosticar problemas de resolução de nomes.",
        "feedbackErro": "Resposta correta: consultar informações de DNS e verificar como um nome está sendo resolvido para um endereço.\n\nComentário: nslookup consulta DNS e ajuda a diagnosticar problemas de resolução de nomes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Se o sintoma envolve domínio, endereço e resolução, nslookup é uma ferramenta provável.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_063",
        "pergunta": "Em uma videoconferência, o áudio chega em intervalos irregulares e com cortes, embora a largura de banda média pareça suficiente. O fenômeno relacionado à variação do atraso entre pacotes é chamado de:",
        "alternativas": [
            "throughput, que representaria a variação entre o endereço IP público e o endereço privado do mesmo usuário.",
            "broadcast, que mede a diferença de frequência entre as redes Wi-Fi de 2,4 GHz e 5 GHz próximas ao computador.",
            "jitter, variação do tempo de chegada dos pacotes que afeta aplicações em tempo real.",
            "DNS latency, que corresponde ao atraso variável entre cada quadro Ethernet recebido na porta do switch local.",
            "duplex, que representa a diferença de velocidade entre download e upload durante uma comunicação de voz."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Jitter é a variação do atraso e pode prejudicar voz e vídeo em tempo real.",
        "feedbackErro": "Resposta correta: jitter, variação do tempo de chegada dos pacotes que afeta aplicações em tempo real.\n\nComentário: Jitter é a variação do atraso e pode prejudicar voz e vídeo em tempo real.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Latência é atraso; jitter é variação do atraso; perda é ausência de pacotes.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_064",
        "pergunta": "Em uma conexão anunciada como 500 Mb/s, o termo Mb/s representa:",
        "alternativas": [
            "megabits por segundo, unidade de taxa de transmissão, distinta de megabytes por segundo.",
            "megabytes por segundo, exatamente a mesma unidade usada para indicar o tamanho de arquivos armazenados em disco.",
            "milhões de bytes por minuto, unidade usada por provedores para converter automaticamente downloads em espaço de armazenamento.",
            "megabits por pacote, quantidade fixa de dados presente em cada quadro Ethernet transmitido pela interface do roteador.",
            "megabytes binários por segundo, unidade equivalente a MiB/s e independente da forma como o provedor anuncia a conexão."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Provedores normalmente anunciam velocidade em bits por segundo; arquivos são comumente mostrados em bytes.",
        "feedbackErro": "Resposta correta: megabits por segundo, unidade de taxa de transmissão, distinta de megabytes por segundo.\n\nComentário: Provedores normalmente anunciam velocidade em bits por segundo; arquivos são comumente mostrados em bytes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Como 1 byte = 8 bits, não compare diretamente “500 Mb/s” com “500 MB/s”.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_065",
        "pergunta": "Uma cópia de arquivo pela rede local ocorre a 90 MB/s, enquanto a conexão com a Internet é contratada em 300 Mb/s. Esses valores não são contraditórios porque:",
        "alternativas": [
            "a velocidade da LAN precisa ser menor que a Internet, e o Windows multiplicaria por oito todo valor de cópia exibido na tela.",
            "a Internet utiliza bytes e a LAN utiliza bits, de modo que os números devem ser comparados sem conversão entre as duas unidades.",
            "a LAN e a Internet são caminhos distintos, e as unidades MB/s e Mb/s também representam grandezas expressas de forma diferente.",
            "o switch adiciona largura de banda contratada à conexão do provedor quando detecta transferência entre computadores da mesma rede.",
            "o roteador ignora os limites físicos da interface durante cópias locais e utiliza a memória RAM como substituta do enlace de rede."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Transferências locais não precisam atravessar o enlace de Internet, e bytes/segundo não são a mesma unidade de bits/segundo.",
        "feedbackErro": "Resposta correta: a LAN e a Internet são caminhos distintos, e as unidades MB/s e Mb/s também representam grandezas expressas de forma diferente.\n\nComentário: Transferências locais não precisam atravessar o enlace de Internet, e bytes/segundo não são a mesma unidade de bits/segundo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Separe desempenho da LAN do desempenho do acesso ao provedor.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_066",
        "pergunta": "Um computador conectado por Wi-Fi exibe endereço IP correto e acessa o roteador, mas a navegação fica lenta apenas em determinado cômodo. A melhor hipótese inicial é:",
        "alternativas": [
            "falha de DNS específica do cômodo, pois o serviço de nomes utiliza frequências diferentes conforme a posição física do usuário.",
            "conflito de endereço IP provocado pela parede, que alteraria o último octeto quando o sinal atravessa um obstáculo sólido.",
            "degradação do enlace sem fio por distância, obstáculos ou interferência naquele local.",
            "erro de gateway dependente da distância, porque o roteador modifica automaticamente sua rota padrão quando o sinal fica mais fraco.",
            "falha de NAT no notebook, já que a tradução de endereços ocorre na placa Wi-Fi e perde eficiência conforme aumenta a distância."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Se o problema muda conforme a localização física, sinal, interferência e obstáculos são hipóteses importantes.",
        "feedbackErro": "Resposta correta: degradação do enlace sem fio por distância, obstáculos ou interferência naquele local.\n\nComentário: Se o problema muda conforme a localização física, sinal, interferência e obstáculos são hipóteses importantes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Diagnóstico deve correlacionar o sintoma com o que mudou: local, horário, dispositivo ou serviço.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_067",
        "pergunta": "Durante uma transferência, o usuário observa alta latência, perda de pacotes e baixa taxa efetiva. Qual afirmação é adequada?",
        "alternativas": [
            "latência interfere no DNS e deixaria de afetar aplicações depois que o endereço IP do servidor fosse descoberto.",
            "perda e latência podem reduzir o desempenho percebido, especialmente em protocolos que retransmitem dados ou esperam confirmações.",
            "perda de pacotes aumenta a velocidade porque reduz a quantidade de dados que precisam chegar corretamente ao destino.",
            "taxa efetiva depende da velocidade nominal do link e não sofreria influência relevante de congestionamento ou retransmissões.",
            "protocolos confiáveis ignoram perda de pacotes, pois a confirmação do receptor substitui fisicamente os dados que não chegaram nesse cenário de rede."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Latência, perda, congestionamento e retransmissões podem reduzir throughput e qualidade percebida.",
        "feedbackErro": "Resposta correta: perda e latência podem reduzir o desempenho percebido, especialmente em protocolos que retransmitem dados ou esperam confirmações.\n\nComentário: Latência, perda, congestionamento e retransmissões podem reduzir throughput e qualidade percebida.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Velocidade nominal é apenas um dos fatores do desempenho fim a fim.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_068",
        "pergunta": "Em uma LAN, somente um computador não consegue acessar a rede; os demais funcionam normalmente. Qual abordagem é mais lógica no início do diagnóstico?",
        "alternativas": [
            "reiniciar o serviço DNS mundial, pois uma falha isolada em um computador indica problema na infraestrutura de nomes da Internet.",
            "substituir o roteador principal, porque o funcionamento dos demais dispositivos confirma que o defeito está no equipamento central.",
            "alterar o endereço IP de todos os computadores, pois um único cliente desconectado significa que a sub-rede inteira está incorreta.",
            "verificar primeiro o próprio computador, sua interface, cabo ou Wi-Fi e configuração IP antes de atribuir a falha ao provedor.",
            "solicitar troca do link da operadora, supondo que problemas do provedor normalmente atinjam um único host da rede local."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Quando apenas um host falha, comece pelos componentes e parâmetros específicos daquele host.",
        "feedbackErro": "Resposta correta: verificar primeiro o próprio computador, sua interface, cabo ou Wi-Fi e configuração IP antes de atribuir a falha ao provedor.\n\nComentário: Quando apenas um host falha, comece pelos componentes e parâmetros específicos daquele host.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Diagnóstico eficiente vai do mais local e provável para o mais amplo.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_069",
        "pergunta": "Dois computadores da mesma rede conseguem acessar a Internet, mas não conseguem compartilhar arquivos entre si. Isso demonstra que:",
        "alternativas": [
            "o roteador está necessariamente sem conexão com o provedor, porque compartilhamento de arquivos depende da mesma rota usada para acessar sites nesse cenário de rede.",
            "acesso à Internet funcionando não comprova, por si só, que compartilhamento local, descoberta de rede ou firewall estejam configurados corretamente.",
            "o DNS público está indisponível, pois qualquer compartilhamento local exige resolução por servidores externos antes de abrir uma pasta remota.",
            "os computadores precisam receber endereços IP públicos diferentes, pois endereços privados não permitem comunicação direta dentro da mesma LAN.",
            "o switch deixou de encaminhar quadros locais, situação incompatível com a possibilidade de qualquer computador alcançar o gateway e a Internet."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Serviços locais podem falhar por firewall, permissões ou descoberta mesmo quando a conectividade externa está normal.",
        "feedbackErro": "Resposta correta: acesso à Internet funcionando não comprova, por si só, que compartilhamento local, descoberta de rede ou firewall estejam configurados corretamente.\n\nComentário: Serviços locais podem falhar por firewall, permissões ou descoberta mesmo quando a conectividade externa está normal.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Não trate “Internet funciona” como prova de que todos os serviços da rede local também funcionam.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    },
    {
        "id": "redes_070",
        "pergunta": "Um usuário percebe que downloads ficam rápidos pela madrugada e lentos no início da noite, sem mudança no computador. Uma hipótese plausível é:",
        "alternativas": [
            "congestionamento em horários de maior uso, reduzindo a capacidade efetivamente disponível ao usuário.",
            "mudança automática do endereço MAC durante o dia, obrigando o roteador a reaprender a interface a cada horário de pico.",
            "expiração diária do DNS, que reduz a velocidade de todos os pacotes transferidos mesmo depois de o servidor já ter sido localizado.",
            "alteração periódica da máscara de sub-rede, que diminui o número de bits transportados em cada pacote no período noturno.",
            "troca automática de TCP por ARP no horário comercial, reduzindo o desempenho para priorizar computadores de empresas próximas."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Variação por horário pode indicar congestionamento ou compartilhamento de capacidade na rede local, provedor ou servidor remoto.",
        "feedbackErro": "Resposta correta: congestionamento em horários de maior uso, reduzindo a capacidade efetivamente disponível ao usuário.\n\nComentário: Variação por horário pode indicar congestionamento ou compartilhamento de capacidade na rede local, provedor ou servidor remoto.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dica da banca: Observe padrões de tempo: eles ajudam a separar problema permanente de saturação em determinados períodos.",
        "assunto": "redes",
        "subtopico": "diagnostico-desempenho"
    }
];
