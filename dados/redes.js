const redes = [
    {
        "id": "redes_001",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: gateway padrão.",
        "alternativas": [
            "Encaminhar pacotes destinados a redes externas à rede local.",
            "Resolver nomes de domínio em endereços IP.",
            "Atribuir endereços IP automaticamente aos clientes.",
            "Identificar fisicamente interfaces de rede.",
            "Armazenar mensagens recebidas de correio eletrônico."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O gateway padrão é o próximo salto usado para alcançar redes fora da sub-rede local.",
        "feedbackErro": "Resposta correta: Encaminhar pacotes destinados a redes externas à rede local. O gateway padrão é o próximo salto usado para alcançar redes fora da sub-rede local.",
        "dicaBanca": "Dica da banca: Gateway é a porta de saída lógica da rede local.",
        "assunto": "redes"
    },
    {
        "id": "redes_002",
        "pergunta": "Considere a seguinte situação: o computador acessa a LAN, mas precisa de um equipamento para sair para a Internet. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "servidor DNS.",
            "gateway padrão.",
            "servidor DHCP.",
            "endereço MAC.",
            "servidor POP3."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O gateway padrão é o próximo salto usado para alcançar redes fora da sub-rede local.",
        "feedbackErro": "Resposta correta: gateway padrão. O gateway padrão é o próximo salto usado para alcançar redes fora da sub-rede local.",
        "dicaBanca": "Dica da banca: Gateway é a porta de saída lógica da rede local.",
        "assunto": "redes"
    },
    {
        "id": "redes_003",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: DHCP.",
        "alternativas": [
            "Resolver nomes canônicos em endereços IPv6.",
            "Encaminhar pacotes entre sistemas autônomos.",
            "Fornecer automaticamente configurações de rede aos dispositivos clientes.",
            "Filtrar tráfego por política de segurança.",
            "Sincronizar relógios de computadores na rede."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. O DHCP automatiza a entrega de parâmetros de rede, reduzindo configuração manual e conflitos.",
        "feedbackErro": "Resposta correta: Fornecer automaticamente configurações de rede aos dispositivos clientes. O DHCP automatiza a entrega de parâmetros de rede, reduzindo configuração manual e conflitos.",
        "dicaBanca": "Dica da banca: DHCP entrega configuração IP; DNS resolve nomes.",
        "assunto": "redes"
    },
    {
        "id": "redes_004",
        "pergunta": "Considere a seguinte situação: um notebook entra na rede e recebe IP, máscara, gateway e DNS sem configuração manual. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "DNS.",
            "BGP.",
            "Firewall.",
            "DHCP.",
            "NTP."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. O DHCP automatiza a entrega de parâmetros de rede, reduzindo configuração manual e conflitos.",
        "feedbackErro": "Resposta correta: DHCP. O DHCP automatiza a entrega de parâmetros de rede, reduzindo configuração manual e conflitos.",
        "dicaBanca": "Dica da banca: DHCP entrega configuração IP; DNS resolve nomes.",
        "assunto": "redes"
    },
    {
        "id": "redes_005",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: ARP.",
        "alternativas": [
            "Descobrir o servidor de e-mail de um domínio.",
            "Atribuir endereço IPv6 global ao roteador.",
            "Criptografar consultas feitas ao navegador.",
            "Estabelecer conexão confiável fim a fim.",
            "Descobrir o endereço MAC correspondente a um endereço IPv4 na rede local."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. O ARP mapeia IP para MAC no mesmo enlace, permitindo a entrega do quadro na LAN.",
        "feedbackErro": "Resposta correta: Descobrir o endereço MAC correspondente a um endereço IPv4 na rede local. O ARP mapeia IP para MAC no mesmo enlace, permitindo a entrega do quadro na LAN.",
        "dicaBanca": "Dica da banca: ARP relaciona IP e MAC; DNS relaciona nome e IP.",
        "assunto": "redes"
    },
    {
        "id": "redes_006",
        "pergunta": "Considere a seguinte situação: um host sabe o IP local de destino, mas precisa descobrir o endereço físico para montar o quadro Ethernet. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "ARP.",
            "registro MX.",
            "SLAAC.",
            "HTTPS.",
            "TCP."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O ARP mapeia IP para MAC no mesmo enlace, permitindo a entrega do quadro na LAN.",
        "feedbackErro": "Resposta correta: ARP. O ARP mapeia IP para MAC no mesmo enlace, permitindo a entrega do quadro na LAN.",
        "dicaBanca": "Dica da banca: ARP relaciona IP e MAC; DNS relaciona nome e IP.",
        "assunto": "redes"
    },
    {
        "id": "redes_007",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: endereço IPv4 privado.",
        "alternativas": [
            "Endereçamento exclusivo para multicast global.",
            "Endereçamento usado em redes internas, sem roteamento direto na Internet pública.",
            "Endereçamento usado somente para loopback local.",
            "Endereçamento obrigatório para servidores DNS raiz.",
            "Endereçamento que identifica fabricantes de placas de rede."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Faixas como 10/8, 172.16/12 e 192.168/16 são privadas e normalmente usam NAT para acesso externo.",
        "feedbackErro": "Resposta correta: Endereçamento usado em redes internas, sem roteamento direto na Internet pública. Faixas como 10/8, 172.16/12 e 192.168/16 são privadas e normalmente usam NAT para acesso externo.",
        "dicaBanca": "Dica da banca: Memorize as três faixas privadas do IPv4.",
        "assunto": "redes"
    },
    {
        "id": "redes_008",
        "pergunta": "Considere a seguinte situação: um computador usa 192.168.1.20 dentro de uma residência e sai para a Internet por NAT. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "multicast IPv4.",
            "loopback IPv4.",
            "endereço IPv4 privado.",
            "registro raiz DNS.",
            "OUI."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Faixas como 10/8, 172.16/12 e 192.168/16 são privadas e normalmente usam NAT para acesso externo.",
        "feedbackErro": "Resposta correta: endereço IPv4 privado. Faixas como 10/8, 172.16/12 e 192.168/16 são privadas e normalmente usam NAT para acesso externo.",
        "dicaBanca": "Dica da banca: Memorize as três faixas privadas do IPv4.",
        "assunto": "redes"
    },
    {
        "id": "redes_009",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: APIPA.",
        "alternativas": [
            "Faixa pública entregue por provedores de Internet.",
            "Registro DNS usado para servidores de e-mail.",
            "Método de autenticação de redes sem fio.",
            "Autoconfiguração IPv4 usada quando o cliente não obtém endereço via DHCP.",
            "Padrão de marcação de VLAN em switches."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Endereços 169.254.x.x indicam autoconfiguração local, comum quando o DHCP falha.",
        "feedbackErro": "Resposta correta: Autoconfiguração IPv4 usada quando o cliente não obtém endereço via DHCP. Endereços 169.254.x.x indicam autoconfiguração local, comum quando o DHCP falha.",
        "dicaBanca": "Dica da banca: 169.254.x.x é forte indício de problema com DHCP.",
        "assunto": "redes"
    },
    {
        "id": "redes_010",
        "pergunta": "Considere a seguinte situação: uma estação recebe automaticamente o endereço 169.254.18.7 após falhar a comunicação com o DHCP. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "IP público.",
            "registro MX.",
            "WPA2-Enterprise.",
            "802.1Q.",
            "APIPA."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Endereços 169.254.x.x indicam autoconfiguração local, comum quando o DHCP falha.",
        "feedbackErro": "Resposta correta: APIPA. Endereços 169.254.x.x indicam autoconfiguração local, comum quando o DHCP falha.",
        "dicaBanca": "Dica da banca: 169.254.x.x é forte indício de problema com DHCP.",
        "assunto": "redes"
    },
    {
        "id": "redes_011",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: SLAAC.",
        "alternativas": [
            "Autoconfiguração de endereços IPv6 a partir de anúncios de roteador.",
            "Tradução de endereço privado para público.",
            "Consulta de nome de domínio para IPv4.",
            "Monitoramento de dispositivos por MIB.",
            "Transferência de arquivo por conexão segura."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. SLAAC permite autoconfiguração IPv6 sem o mesmo modelo clássico do DHCPv4.",
        "feedbackErro": "Resposta correta: Autoconfiguração de endereços IPv6 a partir de anúncios de roteador. SLAAC permite autoconfiguração IPv6 sem o mesmo modelo clássico do DHCPv4.",
        "dicaBanca": "Dica da banca: SLAAC é tema típico de transição IPv6.",
        "assunto": "redes"
    },
    {
        "id": "redes_012",
        "pergunta": "Considere a seguinte situação: um host IPv6 monta seu endereço usando informações anunciadas pelo roteador, sem DHCPv4. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "NAT.",
            "SLAAC.",
            "DNS A.",
            "SNMP.",
            "SFTP."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. SLAAC permite autoconfiguração IPv6 sem o mesmo modelo clássico do DHCPv4.",
        "feedbackErro": "Resposta correta: SLAAC. SLAAC permite autoconfiguração IPv6 sem o mesmo modelo clássico do DHCPv4.",
        "dicaBanca": "Dica da banca: SLAAC é tema típico de transição IPv6.",
        "assunto": "redes"
    },
    {
        "id": "redes_013",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: PAT.",
        "alternativas": [
            "Bloquear loops físicos em switches redundantes.",
            "Validar registros DNS por assinatura digital.",
            "Permitir que vários hosts compartilhem um IP público diferenciando conexões por portas.",
            "Transferir arquivos por porta 21 sem criptografia.",
            "Sincronizar relógios por servidores de tempo."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. PAT, também chamado NAT overload, usa portas para multiplexar conexões de vários hosts.",
        "feedbackErro": "Resposta correta: Permitir que vários hosts compartilhem um IP público diferenciando conexões por portas. PAT, também chamado NAT overload, usa portas para multiplexar conexões de vários hosts.",
        "dicaBanca": "Dica da banca: PAT é a forma doméstica mais comum de NAT.",
        "assunto": "redes"
    },
    {
        "id": "redes_014",
        "pergunta": "Considere a seguinte situação: o roteador mantém uma tabela com portas para identificar conexões de vários clientes internos. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "STP.",
            "DNSSEC.",
            "FTP.",
            "PAT.",
            "NTP."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. PAT, também chamado NAT overload, usa portas para multiplexar conexões de vários hosts.",
        "feedbackErro": "Resposta correta: PAT. PAT, também chamado NAT overload, usa portas para multiplexar conexões de vários hosts.",
        "dicaBanca": "Dica da banca: PAT é a forma doméstica mais comum de NAT.",
        "assunto": "redes"
    },
    {
        "id": "redes_015",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: port forwarding.",
        "alternativas": [
            "Aumentar automaticamente o alcance do Wi-Fi.",
            "Atribuir IP automático aos clientes locais.",
            "Resolver nome de domínio em endereço IP.",
            "Bloquear loops de camada 2 por redundância.",
            "Redirecionar conexão recebida em uma porta externa para um host interno específico."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. O redirecionamento de portas publica serviço interno por meio do IP/porta do equipamento de borda.",
        "feedbackErro": "Resposta correta: Redirecionar conexão recebida em uma porta externa para um host interno específico. O redirecionamento de portas publica serviço interno por meio do IP/porta do equipamento de borda.",
        "dicaBanca": "Dica da banca: Port forwarding exige cautela de segurança.",
        "assunto": "redes"
    },
    {
        "id": "redes_016",
        "pergunta": "Considere a seguinte situação: um serviço interno de câmera IP precisa ser acessado pela Internet usando uma porta do roteador. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "port forwarding.",
            "roaming Wi-Fi.",
            "DHCP.",
            "DNS.",
            "STP."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O redirecionamento de portas publica serviço interno por meio do IP/porta do equipamento de borda.",
        "feedbackErro": "Resposta correta: port forwarding. O redirecionamento de portas publica serviço interno por meio do IP/porta do equipamento de borda.",
        "dicaBanca": "Dica da banca: Port forwarding exige cautela de segurança.",
        "assunto": "redes"
    },
    {
        "id": "redes_017",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: hub.",
        "alternativas": [
            "Selecionar a porta exata por tabela MAC.",
            "Repetir sinais recebidos para todas as portas conectadas.",
            "Rotear pacotes usando prefixos IP.",
            "Filtrar tráfego por regras stateful.",
            "Separar VLANs com 802.1Q."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Hub é equipamento simples de camada física, associado a colisões e tráfego desnecessário.",
        "feedbackErro": "Resposta correta: Repetir sinais recebidos para todas as portas conectadas. Hub é equipamento simples de camada física, associado a colisões e tráfego desnecessário.",
        "dicaBanca": "Dica da banca: Hub é menos inteligente que switch.",
        "assunto": "redes"
    },
    {
        "id": "redes_018",
        "pergunta": "Considere a seguinte situação: um equipamento legado envia o mesmo sinal recebido para todos os dispositivos do segmento. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "switch.",
            "roteador.",
            "hub.",
            "firewall.",
            "trunk 802.1Q."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Hub é equipamento simples de camada física, associado a colisões e tráfego desnecessário.",
        "feedbackErro": "Resposta correta: hub. Hub é equipamento simples de camada física, associado a colisões e tráfego desnecessário.",
        "dicaBanca": "Dica da banca: Hub é menos inteligente que switch.",
        "assunto": "redes"
    },
    {
        "id": "redes_019",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: access point.",
        "alternativas": [
            "Traduzir endereços privados em públicos.",
            "Resolver nomes de domínio recursivamente.",
            "Monitorar portas TCP em servidores.",
            "Fornecer acesso sem fio a uma rede local.",
            "Armazenar logs de correio eletrônico."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. O Access Point cria ou amplia a cobertura WLAN, conectando clientes sem fio à rede.",
        "feedbackErro": "Resposta correta: Fornecer acesso sem fio a uma rede local. O Access Point cria ou amplia a cobertura WLAN, conectando clientes sem fio à rede.",
        "dicaBanca": "Dica da banca: AP não é necessariamente roteador; é ponto de acesso sem fio.",
        "assunto": "redes"
    },
    {
        "id": "redes_020",
        "pergunta": "Considere a seguinte situação: usuários conectam notebooks e celulares à LAN por meio de sinal Wi-Fi corporativo. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "NAT.",
            "DNS recursivo.",
            "netstat.",
            "servidor SMTP.",
            "access point."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. O Access Point cria ou amplia a cobertura WLAN, conectando clientes sem fio à rede.",
        "feedbackErro": "Resposta correta: access point. O Access Point cria ou amplia a cobertura WLAN, conectando clientes sem fio à rede.",
        "dicaBanca": "Dica da banca: AP não é necessariamente roteador; é ponto de acesso sem fio.",
        "assunto": "redes"
    },
    {
        "id": "redes_021",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: modem.",
        "alternativas": [
            "Adaptar o sinal da rede do provedor para o acesso do usuário.",
            "Segmentar redes lógicas por VLAN.",
            "Enviar quadros Ethernet somente ao MAC correto.",
            "Bloquear loops de camada 2.",
            "Criar políticas de grupo do domínio."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O modem está ligado ao acesso ao provedor; roteadores domésticos podem integrar modem e roteador no mesmo aparelho.",
        "feedbackErro": "Resposta correta: Adaptar o sinal da rede do provedor para o acesso do usuário. O modem está ligado ao acesso ao provedor; roteadores domésticos podem integrar modem e roteador no mesmo aparelho.",
        "dicaBanca": "Dica da banca: Identifique a função do equipamento, não apenas o nome comercial.",
        "assunto": "redes"
    },
    {
        "id": "redes_022",
        "pergunta": "Considere a seguinte situação: o equipamento faz a interface entre a tecnologia da operadora e a rede do assinante. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "switch gerenciável.",
            "modem.",
            "switch L2.",
            "STP.",
            "GPO."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O modem está ligado ao acesso ao provedor; roteadores domésticos podem integrar modem e roteador no mesmo aparelho.",
        "feedbackErro": "Resposta correta: modem. O modem está ligado ao acesso ao provedor; roteadores domésticos podem integrar modem e roteador no mesmo aparelho.",
        "dicaBanca": "Dica da banca: Identifique a função do equipamento, não apenas o nome comercial.",
        "assunto": "redes"
    },
    {
        "id": "redes_023",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: firewall stateful.",
        "alternativas": [
            "Analisar somente o comprimento do cabo.",
            "Resolver domínios em servidores raiz.",
            "Avaliar o tráfego considerando o estado das conexões.",
            "Trocar IP por MAC no enlace local.",
            "Distribuir SSIDs em pontos de acesso."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Um firewall stateful acompanha sessões/conexões para tomar decisões mais contextuais.",
        "feedbackErro": "Resposta correta: Avaliar o tráfego considerando o estado das conexões. Um firewall stateful acompanha sessões/conexões para tomar decisões mais contextuais.",
        "dicaBanca": "Dica da banca: Stateful acompanha conexão; stateless examina pacotes de forma mais isolada.",
        "assunto": "redes"
    },
    {
        "id": "redes_024",
        "pergunta": "Considere a seguinte situação: a regra permite respostas de conexões já iniciadas internamente sem liberar qualquer tráfego novo de entrada. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "testador de cabos.",
            "DNS raiz.",
            "ARP.",
            "firewall stateful.",
            "controlador Wi-Fi."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Um firewall stateful acompanha sessões/conexões para tomar decisões mais contextuais.",
        "feedbackErro": "Resposta correta: firewall stateful. Um firewall stateful acompanha sessões/conexões para tomar decisões mais contextuais.",
        "dicaBanca": "Dica da banca: Stateful acompanha conexão; stateless examina pacotes de forma mais isolada.",
        "assunto": "redes"
    },
    {
        "id": "redes_025",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: VPN.",
        "alternativas": [
            "Aumentar fisicamente a categoria do cabo UTP.",
            "Atribuir endereços IP por broadcast local.",
            "Resolver nomes usando registros MX.",
            "Comutar quadros por tabela CAM.",
            "Criar túnel seguro sobre rede pública ou não confiável."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. VPN protege a comunicação e permite acesso remoto ou interligação entre redes.",
        "feedbackErro": "Resposta correta: Criar túnel seguro sobre rede pública ou não confiável. VPN protege a comunicação e permite acesso remoto ou interligação entre redes.",
        "dicaBanca": "Dica da banca: VPN não significa anonimato absoluto; significa túnel seguro conforme configuração.",
        "assunto": "redes"
    },
    {
        "id": "redes_026",
        "pergunta": "Considere a seguinte situação: um servidor interno é acessado por funcionário remoto através de um túnel criptografado. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "VPN.",
            "cabeamento Cat6.",
            "DHCP.",
            "DNS MX.",
            "switching L2."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. VPN protege a comunicação e permite acesso remoto ou interligação entre redes.",
        "feedbackErro": "Resposta correta: VPN. VPN protege a comunicação e permite acesso remoto ou interligação entre redes.",
        "dicaBanca": "Dica da banca: VPN não significa anonimato absoluto; significa túnel seguro conforme configuração.",
        "assunto": "redes"
    },
    {
        "id": "redes_027",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: trunk 802.1Q.",
        "alternativas": [
            "Conectar um único computador final a uma VLAN sem marcação.",
            "Transportar tráfego de múltiplas VLANs em um mesmo enlace.",
            "Atribuir IP automaticamente a clientes sem fio.",
            "Validar certificados de sites HTTPS.",
            "Sincronizar hora em servidores."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O trunk usa marcação, geralmente 802.1Q, para carregar várias VLANs.",
        "feedbackErro": "Resposta correta: Transportar tráfego de múltiplas VLANs em um mesmo enlace. O trunk usa marcação, geralmente 802.1Q, para carregar várias VLANs.",
        "dicaBanca": "Dica da banca: Access carrega uma VLAN para host final; trunk carrega várias VLANs.",
        "assunto": "redes"
    },
    {
        "id": "redes_028",
        "pergunta": "Considere a seguinte situação: dois switches precisam transportar as VLANs 10, 20 e 30 pelo mesmo cabo de uplink. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "porta access.",
            "DHCP.",
            "trunk 802.1Q.",
            "TLS.",
            "NTP."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. O trunk usa marcação, geralmente 802.1Q, para carregar várias VLANs.",
        "feedbackErro": "Resposta correta: trunk 802.1Q. O trunk usa marcação, geralmente 802.1Q, para carregar várias VLANs.",
        "dicaBanca": "Dica da banca: Access carrega uma VLAN para host final; trunk carrega várias VLANs.",
        "assunto": "redes"
    },
    {
        "id": "redes_029",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: STP.",
        "alternativas": [
            "Entregar IP e gateway aos clientes.",
            "Criptografar comunicação web por TLS.",
            "Resolver nomes de domínios em IP.",
            "Evitar loops de camada 2 em redes com caminhos redundantes.",
            "Medir tempo de resposta com ICMP."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. O Spanning Tree Protocol previne loops em topologias Ethernet redundantes.",
        "feedbackErro": "Resposta correta: Evitar loops de camada 2 em redes com caminhos redundantes. O Spanning Tree Protocol previne loops em topologias Ethernet redundantes.",
        "dicaBanca": "Dica da banca: Loops em camada 2 podem gerar tempestade de broadcast.",
        "assunto": "redes"
    },
    {
        "id": "redes_030",
        "pergunta": "Considere a seguinte situação: dois switches possuem links redundantes e um protocolo bloqueia um caminho para evitar tempestade de broadcast. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "DHCP.",
            "HTTPS.",
            "DNS.",
            "ping.",
            "STP."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. O Spanning Tree Protocol previne loops em topologias Ethernet redundantes.",
        "feedbackErro": "Resposta correta: STP. O Spanning Tree Protocol previne loops em topologias Ethernet redundantes.",
        "dicaBanca": "Dica da banca: Loops em camada 2 podem gerar tempestade de broadcast.",
        "assunto": "redes"
    },
    {
        "id": "redes_031",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: domínio de broadcast.",
        "alternativas": [
            "Conjunto de dispositivos que recebe broadcasts da mesma rede/VLAN.",
            "Grupo de portas TCP abertas em um servidor.",
            "Área de cobertura de uma antena Bluetooth.",
            "Tempo máximo de cache DNS.",
            "Lista de endereços MAC de fabricantes."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Roteadores e VLANs separam domínios de broadcast; switches simples não separam por padrão.",
        "feedbackErro": "Resposta correta: Conjunto de dispositivos que recebe broadcasts da mesma rede/VLAN. Roteadores e VLANs separam domínios de broadcast; switches simples não separam por padrão.",
        "dicaBanca": "Dica da banca: Broadcast é limitado por roteamento/VLAN.",
        "assunto": "redes"
    },
    {
        "id": "redes_032",
        "pergunta": "Considere a seguinte situação: sem VLANs, os hosts do mesmo switch recebem determinados quadros enviados para todos. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "portas em escuta.",
            "domínio de broadcast.",
            "PAN Bluetooth.",
            "TTL DNS.",
            "OUI."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Roteadores e VLANs separam domínios de broadcast; switches simples não separam por padrão.",
        "feedbackErro": "Resposta correta: domínio de broadcast. Roteadores e VLANs separam domínios de broadcast; switches simples não separam por padrão.",
        "dicaBanca": "Dica da banca: Broadcast é limitado por roteamento/VLAN.",
        "assunto": "redes"
    },
    {
        "id": "redes_033",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: topologia estrela.",
        "alternativas": [
            "Usar um único cabo compartilhado por todos os nós.",
            "Ligar cada nó ao próximo em um circuito fechado.",
            "Conectar dispositivos a um ponto central, como switch.",
            "Interligar todos os nós com múltiplos caminhos redundantes.",
            "Substituir todos os enlaces por Bluetooth pessoal."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A estrela é comum em redes locais modernas com switches centrais.",
        "feedbackErro": "Resposta correta: Conectar dispositivos a um ponto central, como switch. A estrela é comum em redes locais modernas com switches centrais.",
        "dicaBanca": "Dica da banca: Estrela = ponto central.",
        "assunto": "redes"
    },
    {
        "id": "redes_034",
        "pergunta": "Considere a seguinte situação: computadores de um laboratório chegam a um switch central por cabos individuais. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "topologia barramento.",
            "topologia anel.",
            "topologia malha.",
            "topologia estrela.",
            "rede PAN."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A estrela é comum em redes locais modernas com switches centrais.",
        "feedbackErro": "Resposta correta: topologia estrela. A estrela é comum em redes locais modernas com switches centrais.",
        "dicaBanca": "Dica da banca: Estrela = ponto central.",
        "assunto": "redes"
    },
    {
        "id": "redes_035",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: LAN.",
        "alternativas": [
            "Rede pessoal de curtíssimo alcance.",
            "Rede metropolitana entre bairros.",
            "Rede de longa distância entre países.",
            "Túnel criptografado sobre rede pública.",
            "Rede local de área limitada, como residência, escola ou escritório."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. LAN é Local Area Network, usada em ambientes geograficamente limitados.",
        "feedbackErro": "Resposta correta: Rede local de área limitada, como residência, escola ou escritório. LAN é Local Area Network, usada em ambientes geograficamente limitados.",
        "dicaBanca": "Dica da banca: LAN = local.",
        "assunto": "redes"
    },
    {
        "id": "redes_036",
        "pergunta": "Considere a seguinte situação: computadores de uma sala são ligados ao mesmo switch e compartilham impressora local. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "LAN.",
            "PAN.",
            "MAN.",
            "WAN.",
            "VPN."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. LAN é Local Area Network, usada em ambientes geograficamente limitados.",
        "feedbackErro": "Resposta correta: LAN. LAN é Local Area Network, usada em ambientes geograficamente limitados.",
        "dicaBanca": "Dica da banca: LAN = local.",
        "assunto": "redes"
    },
    {
        "id": "redes_037",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: PAN.",
        "alternativas": [
            "Rede local cabeada de um escritório.",
            "Rede pessoal de curtíssimo alcance entre dispositivos do usuário.",
            "Rede metropolitana de uma prefeitura.",
            "Rede mundial formada por várias redes.",
            "Rede virtual privada entre filiais."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. PAN geralmente é associada a dispositivos pessoais e Bluetooth.",
        "feedbackErro": "Resposta correta: Rede pessoal de curtíssimo alcance entre dispositivos do usuário. PAN geralmente é associada a dispositivos pessoais e Bluetooth.",
        "dicaBanca": "Dica da banca: PAN = Personal Area Network.",
        "assunto": "redes"
    },
    {
        "id": "redes_038",
        "pergunta": "Considere a seguinte situação: um celular troca dados com fone sem fio e relógio inteligente próximos. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "LAN.",
            "MAN.",
            "PAN.",
            "Internet/WAN.",
            "VPN site-to-site."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. PAN geralmente é associada a dispositivos pessoais e Bluetooth.",
        "feedbackErro": "Resposta correta: PAN. PAN geralmente é associada a dispositivos pessoais e Bluetooth.",
        "dicaBanca": "Dica da banca: PAN = Personal Area Network.",
        "assunto": "redes"
    },
    {
        "id": "redes_039",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: WAN.",
        "alternativas": [
            "Rede pessoal de fones Bluetooth.",
            "Rede local de uma sala de aula.",
            "Sub-rede criada por VLAN local.",
            "Rede de grande abrangência geográfica que interliga redes distantes.",
            "Nome lógico de uma rede Wi-Fi."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. WAN conecta localidades distantes e a Internet é exemplo clássico.",
        "feedbackErro": "Resposta correta: Rede de grande abrangência geográfica que interliga redes distantes. WAN conecta localidades distantes e a Internet é exemplo clássico.",
        "dicaBanca": "Dica da banca: WAN = longa distância.",
        "assunto": "redes"
    },
    {
        "id": "redes_040",
        "pergunta": "Considere a seguinte situação: filiais em estados diferentes comunicam-se por links de operadora. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "PAN.",
            "LAN.",
            "VLAN.",
            "SSID.",
            "WAN."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. WAN conecta localidades distantes e a Internet é exemplo clássico.",
        "feedbackErro": "Resposta correta: WAN. WAN conecta localidades distantes e a Internet é exemplo clássico.",
        "dicaBanca": "Dica da banca: WAN = longa distância.",
        "assunto": "redes"
    },
    {
        "id": "redes_041",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: WLAN.",
        "alternativas": [
            "Rede local sem fio baseada em tecnologias como Wi-Fi.",
            "Rede local exclusivamente cabeada.",
            "Rede de longa distância por operadora.",
            "Rede pessoal somente por USB.",
            "Serviço de resolução DNS."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. WLAN é uma LAN sem fio.",
        "feedbackErro": "Resposta correta: Rede local sem fio baseada em tecnologias como Wi-Fi. WLAN é uma LAN sem fio.",
        "dicaBanca": "Dica da banca: Wireless = sem fio.",
        "assunto": "redes"
    },
    {
        "id": "redes_042",
        "pergunta": "Considere a seguinte situação: usuários acessam a rede do escritório por SSID e senha WPA2. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "LAN cabeada.",
            "WLAN.",
            "WAN.",
            "USB local.",
            "DNS."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. WLAN é uma LAN sem fio.",
        "feedbackErro": "Resposta correta: WLAN. WLAN é uma LAN sem fio.",
        "dicaBanca": "Dica da banca: Wireless = sem fio.",
        "assunto": "redes"
    },
    {
        "id": "redes_043",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: BSSID.",
        "alternativas": [
            "Nome amigável da rede sem fio.",
            "Senha digitada para entrar no Wi-Fi.",
            "Identificador geralmente baseado no MAC de um ponto de acesso Wi-Fi.",
            "Registro DNS que aponta IPv6.",
            "Porta usada por área remota Windows."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. BSSID identifica a célula/AP específico, mesmo que o SSID seja o mesmo.",
        "feedbackErro": "Resposta correta: Identificador geralmente baseado no MAC de um ponto de acesso Wi-Fi. BSSID identifica a célula/AP específico, mesmo que o SSID seja o mesmo.",
        "dicaBanca": "Dica da banca: Mesmo SSID pode ter vários BSSIDs.",
        "assunto": "redes"
    },
    {
        "id": "redes_044",
        "pergunta": "Considere a seguinte situação: duas antenas anunciam o mesmo nome de rede, mas cada uma possui identificador próprio de rádio. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "SSID.",
            "PSK.",
            "AAAA.",
            "BSSID.",
            "RDP 3389."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. BSSID identifica a célula/AP específico, mesmo que o SSID seja o mesmo.",
        "feedbackErro": "Resposta correta: BSSID. BSSID identifica a célula/AP específico, mesmo que o SSID seja o mesmo.",
        "dicaBanca": "Dica da banca: Mesmo SSID pode ter vários BSSIDs.",
        "assunto": "redes"
    },
    {
        "id": "redes_045",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: WEP.",
        "alternativas": [
            "Padrão moderno equivalente ao WPA3.",
            "Protocolo de roteamento dinâmico interno.",
            "Conector usado em fibra óptica.",
            "Serviço seguro de shell remoto.",
            "Padrão antigo de segurança Wi-Fi com fragilidades conhecidas."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. WEP é considerado inseguro e não recomendado em redes atuais.",
        "feedbackErro": "Resposta correta: Padrão antigo de segurança Wi-Fi com fragilidades conhecidas. WEP é considerado inseguro e não recomendado em redes atuais.",
        "dicaBanca": "Dica da banca: Quando aparecer WEP, pense em inseguro/obsoleto.",
        "assunto": "redes"
    },
    {
        "id": "redes_046",
        "pergunta": "Considere a seguinte situação: uma prova afirma que determinado padrão sem fio legado não é recomendado por vulnerabilidades criptográficas. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "WEP.",
            "WPA3.",
            "OSPF.",
            "LC.",
            "SSH."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. WEP é considerado inseguro e não recomendado em redes atuais.",
        "feedbackErro": "Resposta correta: WEP. WEP é considerado inseguro e não recomendado em redes atuais.",
        "dicaBanca": "Dica da banca: Quando aparecer WEP, pense em inseguro/obsoleto.",
        "assunto": "redes"
    },
    {
        "id": "redes_047",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: 2,4 GHz no Wi-Fi.",
        "alternativas": [
            "Menor alcance relativo e mais canais não sobrepostos.",
            "Maior alcance relativo e maior tendência a interferências.",
            "Uso obrigatório de cabo Ethernet.",
            "Frequência exclusiva do Bluetooth sem coexistência.",
            "Impossibilidade de usar criptografia."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A faixa de 2,4 GHz atravessa melhor obstáculos, mas é mais congestionada.",
        "feedbackErro": "Resposta correta: Maior alcance relativo e maior tendência a interferências. A faixa de 2,4 GHz atravessa melhor obstáculos, mas é mais congestionada.",
        "dicaBanca": "Dica da banca: 2,4 GHz = alcance; 5 GHz = menos interferência e mais canais.",
        "assunto": "redes"
    },
    {
        "id": "redes_048",
        "pergunta": "Considere a seguinte situação: em uma casa, o sinal chega mais longe, mas sofre com muitas redes vizinhas e dispositivos no mesmo espectro. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "5 GHz no Wi-Fi.",
            "Ethernet cabeada.",
            "2,4 GHz no Wi-Fi.",
            "Bluetooth isolado.",
            "WEP obrigatório."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A faixa de 2,4 GHz atravessa melhor obstáculos, mas é mais congestionada.",
        "feedbackErro": "Resposta correta: 2,4 GHz no Wi-Fi. A faixa de 2,4 GHz atravessa melhor obstáculos, mas é mais congestionada.",
        "dicaBanca": "Dica da banca: 2,4 GHz = alcance; 5 GHz = menos interferência e mais canais.",
        "assunto": "redes"
    },
    {
        "id": "redes_049",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: CSMA/CA.",
        "alternativas": [
            "Método clássico de detecção de colisões em hubs Ethernet.",
            "Protocolo de roteamento externo da Internet.",
            "Serviço de atribuição automática de IP.",
            "Método usado no Wi-Fi para reduzir colisões no meio sem fio.",
            "Registro DNS de consulta reversa."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. CSMA/CA busca evitar colisões em redes sem fio.",
        "feedbackErro": "Resposta correta: Método usado no Wi-Fi para reduzir colisões no meio sem fio. CSMA/CA busca evitar colisões em redes sem fio.",
        "dicaBanca": "Dica da banca: CA = collision avoidance; CD = collision detection.",
        "assunto": "redes"
    },
    {
        "id": "redes_050",
        "pergunta": "Considere a seguinte situação: como o rádio não detecta colisões como o cabo antigo, o padrão tenta evitá-las antes da transmissão. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "CSMA/CD.",
            "BGP.",
            "DHCP.",
            "PTR.",
            "CSMA/CA."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. CSMA/CA busca evitar colisões em redes sem fio.",
        "feedbackErro": "Resposta correta: CSMA/CA. CSMA/CA busca evitar colisões em redes sem fio.",
        "dicaBanca": "Dica da banca: CA = collision avoidance; CD = collision detection.",
        "assunto": "redes"
    },
    {
        "id": "redes_051",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: Wi-Fi IEEE 802.11.",
        "alternativas": [
            "Família de padrões de redes locais sem fio.",
            "Família de padrões Ethernet cabeados.",
            "Protocolo usado para envio de e-mail.",
            "Porta TCP para acesso remoto seguro.",
            "Sistema de nomes hierárquico da Internet."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. IEEE 802.11 define tecnologias Wi-Fi.",
        "feedbackErro": "Resposta correta: Família de padrões de redes locais sem fio. IEEE 802.11 define tecnologias Wi-Fi.",
        "dicaBanca": "Dica da banca: 802.11 = Wi-Fi.",
        "assunto": "redes"
    },
    {
        "id": "redes_052",
        "pergunta": "Considere a seguinte situação: a prova cita WLAN, access points e padrões como 802.11n/ac/ax. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "IEEE 802.3.",
            "Wi-Fi IEEE 802.11.",
            "SMTP.",
            "SSH.",
            "DNS."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. IEEE 802.11 define tecnologias Wi-Fi.",
        "feedbackErro": "Resposta correta: Wi-Fi IEEE 802.11. IEEE 802.11 define tecnologias Wi-Fi.",
        "dicaBanca": "Dica da banca: 802.11 = Wi-Fi.",
        "assunto": "redes"
    },
    {
        "id": "redes_053",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: cabo UTP.",
        "alternativas": [
            "Fibra que transmite dados por luz em núcleo de vidro.",
            "Cabo com condutor central e blindagem concêntrica.",
            "Par trançado não blindado usado em muitas redes Ethernet.",
            "Protocolo para transferência segura de arquivos.",
            "Conector telefônico usado em linhas analógicas."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. UTP é Unshielded Twisted Pair, o par trançado sem blindagem comum em LANs.",
        "feedbackErro": "Resposta correta: Par trançado não blindado usado em muitas redes Ethernet. UTP é Unshielded Twisted Pair, o par trançado sem blindagem comum em LANs.",
        "dicaBanca": "Dica da banca: UTP é o cabo mais lembrado em redes locais.",
        "assunto": "redes"
    },
    {
        "id": "redes_054",
        "pergunta": "Considere a seguinte situação: o cabeamento de uma LAN usa pares de cobre trançados sem blindagem e conector RJ-45. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "fibra óptica.",
            "coaxial.",
            "SFTP.",
            "cabo UTP.",
            "RJ-11."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. UTP é Unshielded Twisted Pair, o par trançado sem blindagem comum em LANs.",
        "feedbackErro": "Resposta correta: cabo UTP. UTP é Unshielded Twisted Pair, o par trançado sem blindagem comum em LANs.",
        "dicaBanca": "Dica da banca: UTP é o cabo mais lembrado em redes locais.",
        "assunto": "redes"
    },
    {
        "id": "redes_055",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: fibra óptica.",
        "alternativas": [
            "Meio metálico baseado em pares de cobre trançados.",
            "Conector telefônico usado em linhas analógicas.",
            "Protocolo de consulta de nomes de domínio.",
            "Padrão de segurança antigo do Wi-Fi.",
            "Meio que transmite dados por pulsos de luz e sofre pouca interferência eletromagnética."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A fibra óptica usa luz e é indicada para alto desempenho e distâncias maiores.",
        "feedbackErro": "Resposta correta: Meio que transmite dados por pulsos de luz e sofre pouca interferência eletromagnética. A fibra óptica usa luz e é indicada para alto desempenho e distâncias maiores.",
        "dicaBanca": "Dica da banca: Fibra = luz e baixa interferência.",
        "assunto": "redes"
    },
    {
        "id": "redes_056",
        "pergunta": "Considere a seguinte situação: um enlace precisa de alta velocidade, grande distância e imunidade a ruído elétrico. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "fibra óptica.",
            "cabo UTP.",
            "RJ-11.",
            "DNS.",
            "WEP."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A fibra óptica usa luz e é indicada para alto desempenho e distâncias maiores.",
        "feedbackErro": "Resposta correta: fibra óptica. A fibra óptica usa luz e é indicada para alto desempenho e distâncias maiores.",
        "dicaBanca": "Dica da banca: Fibra = luz e baixa interferência.",
        "assunto": "redes"
    },
    {
        "id": "redes_057",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: fibra monomodo.",
        "alternativas": [
            "Fibra comum em distâncias menores dentro de prédios.",
            "Fibra indicada para distâncias maiores e enlaces de alta capacidade.",
            "Cabo de cobre de baixo custo para LAN.",
            "Conector Ethernet de par trançado.",
            "Técnica de autenticação sem fio fraca."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Monomodo usa núcleo menor e é comum em enlaces longos.",
        "feedbackErro": "Resposta correta: Fibra indicada para distâncias maiores e enlaces de alta capacidade. Monomodo usa núcleo menor e é comum em enlaces longos.",
        "dicaBanca": "Dica da banca: Monomodo = maior distância; multimodo = menor distância.",
        "assunto": "redes"
    },
    {
        "id": "redes_058",
        "pergunta": "Considere a seguinte situação: a operadora precisa interligar pontos distantes com baixa atenuação. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "fibra multimodo.",
            "UTP Cat5e.",
            "fibra monomodo.",
            "RJ-45.",
            "WEP."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Monomodo usa núcleo menor e é comum em enlaces longos.",
        "feedbackErro": "Resposta correta: fibra monomodo. Monomodo usa núcleo menor e é comum em enlaces longos.",
        "dicaBanca": "Dica da banca: Monomodo = maior distância; multimodo = menor distância.",
        "assunto": "redes"
    },
    {
        "id": "redes_059",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: PoE.",
        "alternativas": [
            "Resolver nomes e cachear respostas DNS.",
            "Transportar múltiplas VLANs por trunk.",
            "Detectar loops de camada 2 em switches.",
            "Transmitir energia elétrica e dados pelo mesmo cabo Ethernet compatível.",
            "Controlar envio de e-mails entre servidores."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Power over Ethernet alimenta dispositivos como APs, câmeras IP e telefones VoIP.",
        "feedbackErro": "Resposta correta: Transmitir energia elétrica e dados pelo mesmo cabo Ethernet compatível. Power over Ethernet alimenta dispositivos como APs, câmeras IP e telefones VoIP.",
        "dicaBanca": "Dica da banca: PoE aparece muito com câmeras IP e access points.",
        "assunto": "redes"
    },
    {
        "id": "redes_060",
        "pergunta": "Considere a seguinte situação: um access point no teto recebe alimentação pelo próprio cabo de rede ligado ao switch. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "DNS cache.",
            "802.1Q.",
            "STP.",
            "SMTP.",
            "PoE."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Power over Ethernet alimenta dispositivos como APs, câmeras IP e telefones VoIP.",
        "feedbackErro": "Resposta correta: PoE. Power over Ethernet alimenta dispositivos como APs, câmeras IP e telefones VoIP.",
        "dicaBanca": "Dica da banca: PoE aparece muito com câmeras IP e access points.",
        "assunto": "redes"
    },
    {
        "id": "redes_061",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: jitter.",
        "alternativas": [
            "Variação da latência entre pacotes sucessivos.",
            "Atraso fixo total entre origem e destino.",
            "Capacidade teórica de um enlace.",
            "Quantidade de hosts em uma sub-rede.",
            "Nome do gateway padrão."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Jitter alto prejudica voz e vídeo em tempo real.",
        "feedbackErro": "Resposta correta: Variação da latência entre pacotes sucessivos. Jitter alto prejudica voz e vídeo em tempo real.",
        "dicaBanca": "Dica da banca: Jitter = variação do atraso.",
        "assunto": "redes"
    },
    {
        "id": "redes_062",
        "pergunta": "Considere a seguinte situação: a chamada de voz tem cortes porque os pacotes chegam em intervalos irregulares. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "latência.",
            "jitter.",
            "largura de banda.",
            "tamanho da sub-rede.",
            "gateway."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Jitter alto prejudica voz e vídeo em tempo real.",
        "feedbackErro": "Resposta correta: jitter. Jitter alto prejudica voz e vídeo em tempo real.",
        "dicaBanca": "Dica da banca: Jitter = variação do atraso.",
        "assunto": "redes"
    },
    {
        "id": "redes_063",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: throughput.",
        "alternativas": [
            "Capacidade nominal do meio físico.",
            "Tempo de atraso de ida e volta.",
            "Taxa efetiva de dados transmitidos com sucesso.",
            "Variação de atraso entre pacotes.",
            "Endereço físico de placa de rede."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Throughput é o desempenho real observado, que pode ser menor que a banda nominal.",
        "feedbackErro": "Resposta correta: Taxa efetiva de dados transmitidos com sucesso. Throughput é o desempenho real observado, que pode ser menor que a banda nominal.",
        "dicaBanca": "Dica da banca: Banda é capacidade; throughput é vazão real.",
        "assunto": "redes"
    },
    {
        "id": "redes_064",
        "pergunta": "Considere a seguinte situação: apesar do link contratado ser alto, a vazão real medida na transferência é menor. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "largura de banda.",
            "latência.",
            "jitter.",
            "throughput.",
            "MAC."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Throughput é o desempenho real observado, que pode ser menor que a banda nominal.",
        "feedbackErro": "Resposta correta: throughput. Throughput é o desempenho real observado, que pode ser menor que a banda nominal.",
        "dicaBanca": "Dica da banca: Banda é capacidade; throughput é vazão real.",
        "assunto": "redes"
    },
    {
        "id": "redes_065",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: VoIP.",
        "alternativas": [
            "Criar redes pessoais por Bluetooth.",
            "Distribuir endereços por concessão.",
            "Bloquear tráfego com base em regras.",
            "Traduzir IP privado para público.",
            "Transmitir voz por redes IP."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. VoIP transporta voz sobre IP e é sensível a latência, jitter e perda.",
        "feedbackErro": "Resposta correta: Transmitir voz por redes IP. VoIP transporta voz sobre IP e é sensível a latência, jitter e perda.",
        "dicaBanca": "Dica da banca: VoIP exige atenção a QoS.",
        "assunto": "redes"
    },
    {
        "id": "redes_066",
        "pergunta": "Considere a seguinte situação: telefones corporativos usam a rede de dados para chamadas de voz. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "VoIP.",
            "PAN.",
            "DHCP.",
            "firewall.",
            "NAT."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. VoIP transporta voz sobre IP e é sensível a latência, jitter e perda.",
        "feedbackErro": "Resposta correta: VoIP. VoIP transporta voz sobre IP e é sensível a latência, jitter e perda.",
        "dicaBanca": "Dica da banca: VoIP exige atenção a QoS.",
        "assunto": "redes"
    },
    {
        "id": "redes_067",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: traceroute/tracert.",
        "alternativas": [
            "Resolver registros DNS autoritativos.",
            "Identificar os saltos do caminho até um destino.",
            "Exibir tabela ARP do host.",
            "Configurar endereço IP manual.",
            "Abrir sessão remota criptografada."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Traceroute usa o comportamento do TTL para revelar roteadores intermediários.",
        "feedbackErro": "Resposta correta: Identificar os saltos do caminho até um destino. Traceroute usa o comportamento do TTL para revelar roteadores intermediários.",
        "dicaBanca": "Dica da banca: Rota até o destino = traceroute/tracert.",
        "assunto": "redes"
    },
    {
        "id": "redes_068",
        "pergunta": "Considere a seguinte situação: a equipe precisa descobrir por quais roteadores o pacote passa até o servidor externo. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "nslookup.",
            "arp -a.",
            "traceroute/tracert.",
            "configuração IP.",
            "SSH."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Traceroute usa o comportamento do TTL para revelar roteadores intermediários.",
        "feedbackErro": "Resposta correta: traceroute/tracert. Traceroute usa o comportamento do TTL para revelar roteadores intermediários.",
        "dicaBanca": "Dica da banca: Rota até o destino = traceroute/tracert.",
        "assunto": "redes"
    },
    {
        "id": "redes_069",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: nslookup.",
        "alternativas": [
            "Testar latência por mensagens ICMP.",
            "Listar portas e conexões locais.",
            "Descobrir MACs aprendidos pelo switch.",
            "Consultar informações e respostas DNS.",
            "Sincronizar relógios de rede."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. nslookup é usado para diagnóstico de DNS.",
        "feedbackErro": "Resposta correta: Consultar informações e respostas DNS. nslookup é usado para diagnóstico de DNS.",
        "dicaBanca": "Dica da banca: Problema de resolução de nomes combina com nslookup.",
        "assunto": "redes"
    },
    {
        "id": "redes_070",
        "pergunta": "Considere a seguinte situação: o aluno quer verificar qual IP está sendo retornado para determinado domínio. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "ping.",
            "netstat.",
            "tabela CAM.",
            "NTP.",
            "nslookup."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. nslookup é usado para diagnóstico de DNS.",
        "feedbackErro": "Resposta correta: nslookup. nslookup é usado para diagnóstico de DNS.",
        "dicaBanca": "Dica da banca: Problema de resolução de nomes combina com nslookup.",
        "assunto": "redes"
    },
    {
        "id": "redes_071",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: ipconfig /all.",
        "alternativas": [
            "Mostrar detalhes da configuração de rede no Windows.",
            "Transferir arquivos com criptografia via SSH.",
            "Bloquear tráfego por política de firewall.",
            "Criar registro DNS MX.",
            "Descobrir todos os saltos até o destino."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. ipconfig /all exibe detalhes das interfaces de rede no Windows.",
        "feedbackErro": "Resposta correta: Mostrar detalhes da configuração de rede no Windows. ipconfig /all exibe detalhes das interfaces de rede no Windows.",
        "dicaBanca": "Dica da banca: Configuração IP local no Windows: ipconfig.",
        "assunto": "redes"
    },
    {
        "id": "redes_072",
        "pergunta": "Considere a seguinte situação: o suporte solicita IP, máscara, gateway, DNS e MAC configurados na estação. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "SFTP.",
            "ipconfig /all.",
            "ACL.",
            "registro MX.",
            "tracert."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. ipconfig /all exibe detalhes das interfaces de rede no Windows.",
        "feedbackErro": "Resposta correta: ipconfig /all. ipconfig /all exibe detalhes das interfaces de rede no Windows.",
        "dicaBanca": "Dica da banca: Configuração IP local no Windows: ipconfig.",
        "assunto": "redes"
    },
    {
        "id": "redes_073",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: MTU.",
        "alternativas": [
            "Tempo de vida de uma resposta DNS em cache.",
            "Nome lógico da rede Wi-Fi.",
            "Tamanho máximo da unidade de transmissão em um enlace.",
            "Porta usada por acesso remoto Windows.",
            "Grupo de usuários do domínio."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. MTU define o maior tamanho transportável sem fragmentação no enlace.",
        "feedbackErro": "Resposta correta: Tamanho máximo da unidade de transmissão em um enlace. MTU define o maior tamanho transportável sem fragmentação no enlace.",
        "dicaBanca": "Dica da banca: MTU padrão comum em Ethernet é 1500 bytes.",
        "assunto": "redes"
    },
    {
        "id": "redes_074",
        "pergunta": "Considere a seguinte situação: pacotes grandes sofrem fragmentação ou falham em determinado caminho da rede. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "TTL DNS.",
            "SSID.",
            "RDP 3389.",
            "MTU.",
            "grupo de domínio."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. MTU define o maior tamanho transportável sem fragmentação no enlace.",
        "feedbackErro": "Resposta correta: MTU. MTU define o maior tamanho transportável sem fragmentação no enlace.",
        "dicaBanca": "Dica da banca: MTU padrão comum em Ethernet é 1500 bytes.",
        "assunto": "redes"
    },
    {
        "id": "redes_075",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: DNS TTL.",
        "alternativas": [
            "Limitar a quantidade de saltos de um pacote IP.",
            "Definir o número de portas do switch.",
            "Identificar a frequência do Wi-Fi.",
            "Controlar colisões no Ethernet antigo.",
            "Definir por quanto tempo uma resposta DNS pode ficar em cache."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. O TTL de DNS controla a validade de respostas armazenadas em cache.",
        "feedbackErro": "Resposta correta: Definir por quanto tempo uma resposta DNS pode ficar em cache. O TTL de DNS controla a validade de respostas armazenadas em cache.",
        "dicaBanca": "Dica da banca: TTL DNS = tempo de cache da resposta.",
        "assunto": "redes"
    },
    {
        "id": "redes_076",
        "pergunta": "Considere a seguinte situação: um domínio alterado demora a atualizar em alguns clientes devido ao cache ainda válido. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "DNS TTL.",
            "TTL IP.",
            "densidade de portas.",
            "canal Wi-Fi.",
            "CSMA/CD."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O TTL de DNS controla a validade de respostas armazenadas em cache.",
        "feedbackErro": "Resposta correta: DNS TTL. O TTL de DNS controla a validade de respostas armazenadas em cache.",
        "dicaBanca": "Dica da banca: TTL DNS = tempo de cache da resposta.",
        "assunto": "redes"
    },
    {
        "id": "redes_077",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: registro AAAA.",
        "alternativas": [
            "Associar nome a endereço IPv4.",
            "Associar nome de domínio a endereço IPv6.",
            "Indicar servidor de e-mail.",
            "Definir alias de nome canônico.",
            "Mapear IP de volta para nome."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. O registro AAAA retorna endereço IPv6 associado ao nome consultado.",
        "feedbackErro": "Resposta correta: Associar nome de domínio a endereço IPv6. O registro AAAA retorna endereço IPv6 associado ao nome consultado.",
        "dicaBanca": "Dica da banca: AAAA tem relação com IPv6.",
        "assunto": "redes"
    },
    {
        "id": "redes_078",
        "pergunta": "Considere a seguinte situação: o domínio precisa apontar para 2001:db8::10. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "A.",
            "MX.",
            "registro AAAA.",
            "CNAME.",
            "PTR."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. O registro AAAA retorna endereço IPv6 associado ao nome consultado.",
        "feedbackErro": "Resposta correta: registro AAAA. O registro AAAA retorna endereço IPv6 associado ao nome consultado.",
        "dicaBanca": "Dica da banca: AAAA tem relação com IPv6.",
        "assunto": "redes"
    },
    {
        "id": "redes_079",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: registro MX.",
        "alternativas": [
            "Apontar nome para IPv4.",
            "Apontar nome para IPv6.",
            "Criar alias de outro nome.",
            "Indicar servidores responsáveis por e-mail de um domínio.",
            "Mapear endereço IP para nome."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. MX é o registro usado no roteamento de e-mails de um domínio.",
        "feedbackErro": "Resposta correta: Indicar servidores responsáveis por e-mail de um domínio. MX é o registro usado no roteamento de e-mails de um domínio.",
        "dicaBanca": "Dica da banca: MX = mail exchange.",
        "assunto": "redes"
    },
    {
        "id": "redes_080",
        "pergunta": "Considere a seguinte situação: a configuração do domínio precisa informar para onde devem ser entregues as mensagens de e-mail. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "A.",
            "AAAA.",
            "CNAME.",
            "PTR.",
            "registro MX."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. MX é o registro usado no roteamento de e-mails de um domínio.",
        "feedbackErro": "Resposta correta: registro MX. MX é o registro usado no roteamento de e-mails de um domínio.",
        "dicaBanca": "Dica da banca: MX = mail exchange.",
        "assunto": "redes"
    },
    {
        "id": "redes_081",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: registro PTR.",
        "alternativas": [
            "Permitir consulta reversa de IP para nome.",
            "Apontar domínio para IPv4.",
            "Apontar domínio para IPv6.",
            "Indicar servidor de e-mail.",
            "Criar alias de nome canônico."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. PTR é usado em DNS reverso.",
        "feedbackErro": "Resposta correta: Permitir consulta reversa de IP para nome. PTR é usado em DNS reverso.",
        "dicaBanca": "Dica da banca: PTR = reverse DNS.",
        "assunto": "redes"
    },
    {
        "id": "redes_082",
        "pergunta": "Considere a seguinte situação: o administrador precisa verificar o nome associado a determinado endereço IP. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "A.",
            "registro PTR.",
            "AAAA.",
            "MX.",
            "CNAME."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. PTR é usado em DNS reverso.",
        "feedbackErro": "Resposta correta: registro PTR. PTR é usado em DNS reverso.",
        "dicaBanca": "Dica da banca: PTR = reverse DNS.",
        "assunto": "redes"
    },
    {
        "id": "redes_083",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: SMTP.",
        "alternativas": [
            "Receber e sincronizar mensagens no servidor.",
            "Baixar mensagens para cliente local.",
            "Enviar e encaminhar mensagens de correio eletrônico.",
            "Resolver nomes de domínio em IP.",
            "Transferir arquivos por sessão interativa."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. SMTP é o protocolo clássico de envio de e-mail.",
        "feedbackErro": "Resposta correta: Enviar e encaminhar mensagens de correio eletrônico. SMTP é o protocolo clássico de envio de e-mail.",
        "dicaBanca": "Dica da banca: SMTP envia; POP3/IMAP recebem.",
        "assunto": "redes"
    },
    {
        "id": "redes_084",
        "pergunta": "Considere a seguinte situação: um servidor de e-mail precisa encaminhar uma mensagem para outro servidor. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "IMAP.",
            "POP3.",
            "DNS.",
            "SMTP.",
            "FTP."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. SMTP é o protocolo clássico de envio de e-mail.",
        "feedbackErro": "Resposta correta: SMTP. SMTP é o protocolo clássico de envio de e-mail.",
        "dicaBanca": "Dica da banca: SMTP envia; POP3/IMAP recebem.",
        "assunto": "redes"
    },
    {
        "id": "redes_085",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: POP3.",
        "alternativas": [
            "Enviar mensagens entre servidores.",
            "Sincronizar pastas complexas no servidor.",
            "Resolver nomes de domínio.",
            "Transportar páginas web seguras.",
            "Receber mensagens com foco no download para o cliente."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. POP3 é protocolo de recebimento, tradicionalmente ligado ao download de mensagens.",
        "feedbackErro": "Resposta correta: Receber mensagens com foco no download para o cliente. POP3 é protocolo de recebimento, tradicionalmente ligado ao download de mensagens.",
        "dicaBanca": "Dica da banca: POP3 recebe; SMTP envia.",
        "assunto": "redes"
    },
    {
        "id": "redes_086",
        "pergunta": "Considere a seguinte situação: um cliente de e-mail baixa mensagens de uma caixa postal para leitura local. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "POP3.",
            "SMTP.",
            "IMAP.",
            "DNS.",
            "HTTPS."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. POP3 é protocolo de recebimento, tradicionalmente ligado ao download de mensagens.",
        "feedbackErro": "Resposta correta: POP3. POP3 é protocolo de recebimento, tradicionalmente ligado ao download de mensagens.",
        "dicaBanca": "Dica da banca: POP3 recebe; SMTP envia.",
        "assunto": "redes"
    },
    {
        "id": "redes_087",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: HTTPS.",
        "alternativas": [
            "Enviar e-mails por servidores SMTP.",
            "Proteger comunicação web usando HTTP sobre TLS.",
            "Entregar IP a clientes da LAN.",
            "Mapear IP para MAC local.",
            "Monitorar roteadores via MIB."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. HTTPS protege o canal com TLS, aumentando confidencialidade e integridade.",
        "feedbackErro": "Resposta correta: Proteger comunicação web usando HTTP sobre TLS. HTTPS protege o canal com TLS, aumentando confidencialidade e integridade.",
        "dicaBanca": "Dica da banca: HTTPS não garante que o site seja honesto; protege a conexão.",
        "assunto": "redes"
    },
    {
        "id": "redes_088",
        "pergunta": "Considere a seguinte situação: o navegador mostra cadeado e usa a porta 443 para acessar o servidor. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "SMTP.",
            "DHCP.",
            "HTTPS.",
            "ARP.",
            "SNMP."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. HTTPS protege o canal com TLS, aumentando confidencialidade e integridade.",
        "feedbackErro": "Resposta correta: HTTPS. HTTPS protege o canal com TLS, aumentando confidencialidade e integridade.",
        "dicaBanca": "Dica da banca: HTTPS não garante que o site seja honesto; protege a conexão.",
        "assunto": "redes"
    },
    {
        "id": "redes_089",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: SSH.",
        "alternativas": [
            "Fornecer acesso remoto em texto claro legado.",
            "Transferir páginas web por porta 80.",
            "Resolver nomes em servidores recursivos.",
            "Fornecer acesso remoto seguro e criptografado.",
            "Entregar IP automático aos clientes."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. SSH substitui Telnet quando há necessidade de acesso remoto seguro.",
        "feedbackErro": "Resposta correta: Fornecer acesso remoto seguro e criptografado. SSH substitui Telnet quando há necessidade de acesso remoto seguro.",
        "dicaBanca": "Dica da banca: SSH porta 22; Telnet porta 23.",
        "assunto": "redes"
    },
    {
        "id": "redes_090",
        "pergunta": "Considere a seguinte situação: o administrador acessa um servidor Linux remotamente pela porta 22. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "Telnet.",
            "HTTP.",
            "DNS.",
            "DHCP.",
            "SSH."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. SSH substitui Telnet quando há necessidade de acesso remoto seguro.",
        "feedbackErro": "Resposta correta: SSH. SSH substitui Telnet quando há necessidade de acesso remoto seguro.",
        "dicaBanca": "Dica da banca: SSH porta 22; Telnet porta 23.",
        "assunto": "redes"
    },
    {
        "id": "redes_091",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: FTP.",
        "alternativas": [
            "Transferir arquivos usando protocolo tradicional, geralmente sem criptografia nativa.",
            "Transferir arquivos sobre SSH.",
            "Acessar páginas web com TLS.",
            "Enviar mensagens de e-mail.",
            "Monitorar dispositivos de rede."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. FTP tradicional usa porta 21 para controle e não é seguro por padrão.",
        "feedbackErro": "Resposta correta: Transferir arquivos usando protocolo tradicional, geralmente sem criptografia nativa. FTP tradicional usa porta 21 para controle e não é seguro por padrão.",
        "dicaBanca": "Dica da banca: FTP, FTPS e SFTP são diferentes.",
        "assunto": "redes"
    },
    {
        "id": "redes_092",
        "pergunta": "Considere a seguinte situação: um servidor usa porta 21 para controle de transferência de arquivos. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "SFTP.",
            "FTP.",
            "HTTPS.",
            "SMTP.",
            "SNMP."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. FTP tradicional usa porta 21 para controle e não é seguro por padrão.",
        "feedbackErro": "Resposta correta: FTP. FTP tradicional usa porta 21 para controle e não é seguro por padrão.",
        "dicaBanca": "Dica da banca: FTP, FTPS e SFTP são diferentes.",
        "assunto": "redes"
    },
    {
        "id": "redes_093",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: NTP.",
        "alternativas": [
            "Resolver nome de domínio em IP.",
            "Atribuir IP a clientes automaticamente.",
            "Sincronizar relógios de dispositivos na rede.",
            "Acessar terminal remoto seguro.",
            "Enviar e-mails entre servidores."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. NTP mantém horário sincronizado, essencial para logs, autenticação e auditoria.",
        "feedbackErro": "Resposta correta: Sincronizar relógios de dispositivos na rede. NTP mantém horário sincronizado, essencial para logs, autenticação e auditoria.",
        "dicaBanca": "Dica da banca: NTP = Network Time Protocol.",
        "assunto": "redes"
    },
    {
        "id": "redes_094",
        "pergunta": "Considere a seguinte situação: servidores precisam manter logs com horários coerentes para auditoria. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "DNS.",
            "DHCP.",
            "SSH.",
            "NTP.",
            "SMTP."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. NTP mantém horário sincronizado, essencial para logs, autenticação e auditoria.",
        "feedbackErro": "Resposta correta: NTP. NTP mantém horário sincronizado, essencial para logs, autenticação e auditoria.",
        "dicaBanca": "Dica da banca: NTP = Network Time Protocol.",
        "assunto": "redes"
    },
    {
        "id": "redes_095",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: SNMP.",
        "alternativas": [
            "Transferir páginas HTML por navegador.",
            "Entregar configuração IP aos clientes.",
            "Proteger Wi-Fi com criptografia.",
            "Enviar correio eletrônico entre domínios.",
            "Monitorar e gerenciar dispositivos de rede."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. SNMP é usado em monitoramento e gerenciamento de ativos de rede.",
        "feedbackErro": "Resposta correta: Monitorar e gerenciar dispositivos de rede. SNMP é usado em monitoramento e gerenciamento de ativos de rede.",
        "dicaBanca": "Dica da banca: SNMP aparece com MIB, traps e gerência de rede.",
        "assunto": "redes"
    },
    {
        "id": "redes_096",
        "pergunta": "Considere a seguinte situação: um sistema coleta uso de interface, memória e alertas de switches e roteadores. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "SNMP.",
            "HTTP.",
            "DHCP.",
            "WPA2.",
            "SMTP."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. SNMP é usado em monitoramento e gerenciamento de ativos de rede.",
        "feedbackErro": "Resposta correta: SNMP. SNMP é usado em monitoramento e gerenciamento de ativos de rede.",
        "dicaBanca": "Dica da banca: SNMP aparece com MIB, traps e gerência de rede.",
        "assunto": "redes"
    },
    {
        "id": "redes_097",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: porta 443.",
        "alternativas": [
            "Porta tradicional do HTTP.",
            "Porta tradicional do HTTPS.",
            "Porta tradicional do Telnet.",
            "Porta tradicional do SMTP.",
            "Porta tradicional do POP3."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. HTTPS usa tradicionalmente TCP 443.",
        "feedbackErro": "Resposta correta: Porta tradicional do HTTPS. HTTPS usa tradicionalmente TCP 443.",
        "dicaBanca": "Dica da banca: HTTPS = 443.",
        "assunto": "redes"
    },
    {
        "id": "redes_098",
        "pergunta": "Considere a seguinte situação: o firewall libera acesso seguro ao servidor web pela porta padrão. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "porta 80.",
            "porta 23.",
            "porta 443.",
            "porta 25.",
            "porta 110."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. HTTPS usa tradicionalmente TCP 443.",
        "feedbackErro": "Resposta correta: porta 443. HTTPS usa tradicionalmente TCP 443.",
        "dicaBanca": "Dica da banca: HTTPS = 443.",
        "assunto": "redes"
    },
    {
        "id": "redes_099",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: porta 53.",
        "alternativas": [
            "Porta tradicional do SSH.",
            "Porta tradicional do IMAP.",
            "Porta tradicional do NTP.",
            "Porta tradicional do DNS.",
            "Porta tradicional do RDP."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. DNS usa a porta 53, em UDP e também TCP em situações específicas.",
        "feedbackErro": "Resposta correta: Porta tradicional do DNS. DNS usa a porta 53, em UDP e também TCP em situações específicas.",
        "dicaBanca": "Dica da banca: DNS = 53.",
        "assunto": "redes"
    },
    {
        "id": "redes_100",
        "pergunta": "Considere a seguinte situação: o firewall precisa permitir consultas de resolução de nomes. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "porta 22.",
            "porta 143.",
            "porta 123.",
            "porta 3389.",
            "porta 53."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. DNS usa a porta 53, em UDP e também TCP em situações específicas.",
        "feedbackErro": "Resposta correta: porta 53. DNS usa a porta 53, em UDP e também TCP em situações específicas.",
        "dicaBanca": "Dica da banca: DNS = 53.",
        "assunto": "redes"
    },
    {
        "id": "redes_101",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: porta 3389.",
        "alternativas": [
            "Porta tradicional do RDP.",
            "Porta tradicional do HTTPS.",
            "Porta tradicional do DNS.",
            "Porta tradicional do POP3.",
            "Porta tradicional do SMTP."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. RDP usa tradicionalmente TCP 3389.",
        "feedbackErro": "Resposta correta: Porta tradicional do RDP. RDP usa tradicionalmente TCP 3389.",
        "dicaBanca": "Dica da banca: RDP = área de trabalho remota.",
        "assunto": "redes"
    },
    {
        "id": "redes_102",
        "pergunta": "Considere a seguinte situação: o acesso remoto gráfico a uma máquina Windows usa a porta padrão do serviço. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "porta 443.",
            "porta 3389.",
            "porta 53.",
            "porta 110.",
            "porta 25."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. RDP usa tradicionalmente TCP 3389.",
        "feedbackErro": "Resposta correta: porta 3389. RDP usa tradicionalmente TCP 3389.",
        "dicaBanca": "Dica da banca: RDP = área de trabalho remota.",
        "assunto": "redes"
    },
    {
        "id": "redes_103",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: IDS.",
        "alternativas": [
            "Bloquear automaticamente todo tráfego detectado.",
            "Entregar endereços IP por DHCP.",
            "Detectar eventos suspeitos e gerar alertas.",
            "Resolver nomes DNS reversos.",
            "Transmitir energia via Ethernet."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. IDS é focado em detecção e alerta; o IPS pode bloquear/prevenir.",
        "feedbackErro": "Resposta correta: Detectar eventos suspeitos e gerar alertas. IDS é focado em detecção e alerta; o IPS pode bloquear/prevenir.",
        "dicaBanca": "Dica da banca: IDS detecta; IPS pode bloquear.",
        "assunto": "redes"
    },
    {
        "id": "redes_104",
        "pergunta": "Considere a seguinte situação: a solução monitora tráfego e avisa a equipe sobre comportamento anormal. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "IPS.",
            "DHCP.",
            "PTR.",
            "IDS.",
            "PoE."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. IDS é focado em detecção e alerta; o IPS pode bloquear/prevenir.",
        "feedbackErro": "Resposta correta: IDS. IDS é focado em detecção e alerta; o IPS pode bloquear/prevenir.",
        "dicaBanca": "Dica da banca: IDS detecta; IPS pode bloquear.",
        "assunto": "redes"
    },
    {
        "id": "redes_105",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: IPS.",
        "alternativas": [
            "Apenas registrar eventos sem intervenção.",
            "Resolver nomes de domínio em IPv6.",
            "Sincronizar horário dos servidores.",
            "Marcar quadros com VLAN.",
            "Detectar e bloquear/prevenir tráfego malicioso conforme política."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. IPS atua de forma preventiva, podendo bloquear tráfego suspeito.",
        "feedbackErro": "Resposta correta: Detectar e bloquear/prevenir tráfego malicioso conforme política. IPS atua de forma preventiva, podendo bloquear tráfego suspeito.",
        "dicaBanca": "Dica da banca: IPS = prevenção.",
        "assunto": "redes"
    },
    {
        "id": "redes_106",
        "pergunta": "Considere a seguinte situação: a solução impede automaticamente uma tentativa de exploração identificada no tráfego. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "IPS.",
            "IDS.",
            "AAAA.",
            "NTP.",
            "802.1Q."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. IPS atua de forma preventiva, podendo bloquear tráfego suspeito.",
        "feedbackErro": "Resposta correta: IPS. IPS atua de forma preventiva, podendo bloquear tráfego suspeito.",
        "dicaBanca": "Dica da banca: IPS = prevenção.",
        "assunto": "redes"
    },
    {
        "id": "redes_107",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: proxy.",
        "alternativas": [
            "Identificar fisicamente interfaces Ethernet.",
            "Intermediar requisições entre cliente e serviço de destino.",
            "Enviar pacotes entre redes por rotas.",
            "Atribuir IP e máscara automaticamente.",
            "Prevenir loops de camada 2."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Proxy pode aplicar filtros, cache, autenticação e registro de acessos.",
        "feedbackErro": "Resposta correta: Intermediar requisições entre cliente e serviço de destino. Proxy pode aplicar filtros, cache, autenticação e registro de acessos.",
        "dicaBanca": "Dica da banca: Proxy = intermediário.",
        "assunto": "redes"
    },
    {
        "id": "redes_108",
        "pergunta": "Considere a seguinte situação: a empresa filtra e registra acessos web por um servidor intermediário. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "MAC.",
            "roteador.",
            "proxy.",
            "DHCP.",
            "STP."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Proxy pode aplicar filtros, cache, autenticação e registro de acessos.",
        "feedbackErro": "Resposta correta: proxy. Proxy pode aplicar filtros, cache, autenticação e registro de acessos.",
        "dicaBanca": "Dica da banca: Proxy = intermediário.",
        "assunto": "redes"
    },
    {
        "id": "redes_109",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: MFA.",
        "alternativas": [
            "Liberar acesso por senha única compartilhada.",
            "Substituir criptografia de rede por cabo.",
            "Desativar logs de acesso remoto.",
            "Exigir múltiplos fatores para autenticação.",
            "Distribuir IPs sem servidor DHCP."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. MFA reduz o risco de acesso indevido quando uma senha é comprometida.",
        "feedbackErro": "Resposta correta: Exigir múltiplos fatores para autenticação. MFA reduz o risco de acesso indevido quando uma senha é comprometida.",
        "dicaBanca": "Dica da banca: MFA fortalece acesso remoto.",
        "assunto": "redes"
    },
    {
        "id": "redes_110",
        "pergunta": "Considere a seguinte situação: o acesso VPN exige senha e confirmação em aplicativo autenticador. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "senha compartilhada.",
            "cabeamento.",
            "sem logs.",
            "APIPA.",
            "MFA."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. MFA reduz o risco de acesso indevido quando uma senha é comprometida.",
        "feedbackErro": "Resposta correta: MFA. MFA reduz o risco de acesso indevido quando uma senha é comprometida.",
        "dicaBanca": "Dica da banca: MFA fortalece acesso remoto.",
        "assunto": "redes"
    },
    {
        "id": "redes_111",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: 802.1X.",
        "alternativas": [
            "Controlar acesso à rede por autenticação de porta ou conexão.",
            "Marcar VLANs em links trunk.",
            "Definir padrões de fibra monomodo.",
            "Resolver nomes por DNS reverso.",
            "Sincronizar horário dos roteadores."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. 802.1X é usado em controle de acesso a redes cabeadas e sem fio.",
        "feedbackErro": "Resposta correta: Controlar acesso à rede por autenticação de porta ou conexão. 802.1X é usado em controle de acesso a redes cabeadas e sem fio.",
        "dicaBanca": "Dica da banca: 802.1X é comum com RADIUS.",
        "assunto": "redes"
    },
    {
        "id": "redes_112",
        "pergunta": "Considere a seguinte situação: antes de liberar a porta do switch, o usuário ou dispositivo precisa se autenticar. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "802.1Q.",
            "802.1X.",
            "fibra óptica.",
            "PTR.",
            "NTP."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. 802.1X é usado em controle de acesso a redes cabeadas e sem fio.",
        "feedbackErro": "Resposta correta: 802.1X. 802.1X é usado em controle de acesso a redes cabeadas e sem fio.",
        "dicaBanca": "Dica da banca: 802.1X é comum com RADIUS.",
        "assunto": "redes"
    },
    {
        "id": "redes_113",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: NAC.",
        "alternativas": [
            "Converter sinais do provedor em rede doméstica.",
            "Resolver nomes de domínio externos.",
            "Controlar acesso de dispositivos à rede conforme identidade e conformidade.",
            "Aumentar alcance do Bluetooth.",
            "Transportar mensagens POP3."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. NAC avalia dispositivos e aplica políticas antes ou durante o acesso à rede.",
        "feedbackErro": "Resposta correta: Controlar acesso de dispositivos à rede conforme identidade e conformidade. NAC avalia dispositivos e aplica políticas antes ou durante o acesso à rede.",
        "dicaBanca": "Dica da banca: NAC = Network Access Control.",
        "assunto": "redes"
    },
    {
        "id": "redes_114",
        "pergunta": "Considere a seguinte situação: um notebook sem antivírus atualizado é colocado em rede restrita antes de acessar sistemas internos. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "modem.",
            "DNS.",
            "PAN.",
            "NAC.",
            "POP3."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. NAC avalia dispositivos e aplica políticas antes ou durante o acesso à rede.",
        "feedbackErro": "Resposta correta: NAC. NAC avalia dispositivos e aplica políticas antes ou durante o acesso à rede.",
        "dicaBanca": "Dica da banca: NAC = Network Access Control.",
        "assunto": "redes"
    },
    {
        "id": "redes_115",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: segmentação de rede.",
        "alternativas": [
            "Unificar todos os hosts no mesmo broadcast.",
            "Desativar autenticação por facilidade.",
            "Expor servidores internos sem filtro.",
            "Usar senhas padrão em roteadores.",
            "Separar ambientes para reduzir riscos e controlar tráfego."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Segmentação melhora segurança, organização e controle de comunicação.",
        "feedbackErro": "Resposta correta: Separar ambientes para reduzir riscos e controlar tráfego. Segmentação melhora segurança, organização e controle de comunicação.",
        "dicaBanca": "Dica da banca: Segmentar reduz movimento lateral.",
        "assunto": "redes"
    },
    {
        "id": "redes_116",
        "pergunta": "Considere a seguinte situação: visitantes, câmeras e setor financeiro ficam em redes lógicas separadas. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "segmentação de rede.",
            "rede plana.",
            "acesso sem senha.",
            "exposição direta.",
            "credencial padrão."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Segmentação melhora segurança, organização e controle de comunicação.",
        "feedbackErro": "Resposta correta: segmentação de rede. Segmentação melhora segurança, organização e controle de comunicação.",
        "dicaBanca": "Dica da banca: Segmentar reduz movimento lateral.",
        "assunto": "redes"
    },
    {
        "id": "redes_117",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: Zero Trust.",
        "alternativas": [
            "Liberar a rede interna sem validação.",
            "Não confiar automaticamente por estar dentro da rede.",
            "Dispensar MFA em acessos remotos.",
            "Permitir tráfego total entre setores.",
            "Usar senha padrão por conveniência."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Zero Trust exige verificação contínua e acesso mínimo necessário.",
        "feedbackErro": "Resposta correta: Não confiar automaticamente por estar dentro da rede. Zero Trust exige verificação contínua e acesso mínimo necessário.",
        "dicaBanca": "Dica da banca: Ideia central: nunca confiar automaticamente, sempre verificar.",
        "assunto": "redes"
    },
    {
        "id": "redes_118",
        "pergunta": "Considere a seguinte situação: mesmo na rede corporativa, o acesso é verificado continuamente e limitado por contexto. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "confiança interna total.",
            "senha única.",
            "Zero Trust.",
            "rede plana.",
            "credencial padrão."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Zero Trust exige verificação contínua e acesso mínimo necessário.",
        "feedbackErro": "Resposta correta: Zero Trust. Zero Trust exige verificação contínua e acesso mínimo necessário.",
        "dicaBanca": "Dica da banca: Ideia central: nunca confiar automaticamente, sempre verificar.",
        "assunto": "redes"
    },
    {
        "id": "redes_119",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: sniffing.",
        "alternativas": [
            "Entregar endereço IP por concessão.",
            "Consultar nome de domínio.",
            "Criar rotas estáticas.",
            "Capturar ou analisar tráfego de rede.",
            "Crimpar cabo RJ-45."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Sniffing pode ser legítimo em diagnóstico ou indevido em espionagem.",
        "feedbackErro": "Resposta correta: Capturar ou analisar tráfego de rede. Sniffing pode ser legítimo em diagnóstico ou indevido em espionagem.",
        "dicaBanca": "Dica da banca: Sniffing = captura/análise de pacotes.",
        "assunto": "redes"
    },
    {
        "id": "redes_120",
        "pergunta": "Considere a seguinte situação: uma ferramenta é usada para observar pacotes que passam pela interface de rede. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "DHCP.",
            "DNS.",
            "roteamento estático.",
            "cabeamento.",
            "sniffing."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Sniffing pode ser legítimo em diagnóstico ou indevido em espionagem.",
        "feedbackErro": "Resposta correta: sniffing. Sniffing pode ser legítimo em diagnóstico ou indevido em espionagem.",
        "dicaBanca": "Dica da banca: Sniffing = captura/análise de pacotes.",
        "assunto": "redes"
    },
    {
        "id": "redes_121",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: spoofing.",
        "alternativas": [
            "Falsificar identidade ou origem em uma comunicação.",
            "Sincronizar relógios por servidores externos.",
            "Calcular máscara de sub-rede.",
            "Transmitir energia por Ethernet.",
            "Gerenciar filas de impressão."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Spoofing envolve falsificação de origem, identidade ou informação.",
        "feedbackErro": "Resposta correta: Falsificar identidade ou origem em uma comunicação. Spoofing envolve falsificação de origem, identidade ou informação.",
        "dicaBanca": "Dica da banca: Spoofing = falsificação.",
        "assunto": "redes"
    },
    {
        "id": "redes_122",
        "pergunta": "Considere a seguinte situação: um atacante se passa por outro endereço ou serviço para enganar a vítima. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "NTP.",
            "spoofing.",
            "CIDR.",
            "PoE.",
            "servidor de impressão."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Spoofing envolve falsificação de origem, identidade ou informação.",
        "feedbackErro": "Resposta correta: spoofing. Spoofing envolve falsificação de origem, identidade ou informação.",
        "dicaBanca": "Dica da banca: Spoofing = falsificação.",
        "assunto": "redes"
    },
    {
        "id": "redes_123",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: DNS spoofing.",
        "alternativas": [
            "Falsificar tabela MAC do switch por porta.",
            "Aumentar jitter para voz sobre IP.",
            "Fornecer resposta DNS falsa para redirecionar o usuário.",
            "Atribuir IP automático com DHCP.",
            "Estabelecer sessão TCP confiável."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. DNS spoofing manipula resolução de nomes e pode redirecionar acessos.",
        "feedbackErro": "Resposta correta: Fornecer resposta DNS falsa para redirecionar o usuário. DNS spoofing manipula resolução de nomes e pode redirecionar acessos.",
        "dicaBanca": "Dica da banca: DNS falso pode levar a site falso.",
        "assunto": "redes"
    },
    {
        "id": "redes_124",
        "pergunta": "Considere a seguinte situação: o usuário digita um domínio correto, mas é levado a endereço controlado pelo atacante. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "CAM spoofing.",
            "jitter.",
            "DHCP.",
            "DNS spoofing.",
            "TCP handshake."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. DNS spoofing manipula resolução de nomes e pode redirecionar acessos.",
        "feedbackErro": "Resposta correta: DNS spoofing. DNS spoofing manipula resolução de nomes e pode redirecionar acessos.",
        "dicaBanca": "Dica da banca: DNS falso pode levar a site falso.",
        "assunto": "redes"
    },
    {
        "id": "redes_125",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: DNSSEC.",
        "alternativas": [
            "Criptografar todo tráfego web automaticamente.",
            "Atribuir IP a clientes sem servidor.",
            "Marcar VLANs em quadros Ethernet.",
            "Evitar colisões em redes Wi-Fi.",
            "Validar autenticidade e integridade de respostas DNS."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. DNSSEC adiciona assinaturas ao DNS, mas não garante sigilo da consulta.",
        "feedbackErro": "Resposta correta: Validar autenticidade e integridade de respostas DNS. DNSSEC adiciona assinaturas ao DNS, mas não garante sigilo da consulta.",
        "dicaBanca": "Dica da banca: DNSSEC protege autenticidade/integridade, não confidencialidade.",
        "assunto": "redes"
    },
    {
        "id": "redes_126",
        "pergunta": "Considere a seguinte situação: o domínio usa assinaturas para reduzir risco de resposta DNS falsificada. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "DNSSEC.",
            "HTTPS.",
            "SLAAC.",
            "802.1Q.",
            "CSMA/CA."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. DNSSEC adiciona assinaturas ao DNS, mas não garante sigilo da consulta.",
        "feedbackErro": "Resposta correta: DNSSEC. DNSSEC adiciona assinaturas ao DNS, mas não garante sigilo da consulta.",
        "dicaBanca": "Dica da banca: DNSSEC protege autenticidade/integridade, não confidencialidade.",
        "assunto": "redes"
    },
    {
        "id": "redes_127",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: DoH.",
        "alternativas": [
            "Transportar VLANs por tags Ethernet.",
            "Transportar consultas DNS por HTTPS.",
            "Acessar terminal remoto pela porta 22.",
            "Sincronizar relógios por UDP 123.",
            "Monitorar dispositivos por SNMP."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. DNS over HTTPS encapsula consultas DNS em HTTPS.",
        "feedbackErro": "Resposta correta: Transportar consultas DNS por HTTPS. DNS over HTTPS encapsula consultas DNS em HTTPS.",
        "dicaBanca": "Dica da banca: DoH está associado à privacidade das consultas DNS.",
        "assunto": "redes"
    },
    {
        "id": "redes_128",
        "pergunta": "Considere a seguinte situação: o navegador envia resolução de nomes encapsulada em conexão HTTPS. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "802.1Q.",
            "SSH.",
            "DoH.",
            "NTP.",
            "SNMP."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. DNS over HTTPS encapsula consultas DNS em HTTPS.",
        "feedbackErro": "Resposta correta: DoH. DNS over HTTPS encapsula consultas DNS em HTTPS.",
        "dicaBanca": "Dica da banca: DoH está associado à privacidade das consultas DNS.",
        "assunto": "redes"
    },
    {
        "id": "redes_129",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: logs de rede.",
        "alternativas": [
            "Substituir a necessidade de autenticação.",
            "Aumentar alcance físico de cabos.",
            "Eliminar qualquer falha de configuração.",
            "Registrar eventos para auditoria, diagnóstico e investigação.",
            "Criar endereços IPv4 ilimitados."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Logs ajudam a identificar falhas, acessos e eventos suspeitos.",
        "feedbackErro": "Resposta correta: Registrar eventos para auditoria, diagnóstico e investigação. Logs ajudam a identificar falhas, acessos e eventos suspeitos.",
        "dicaBanca": "Dica da banca: Sem log, investigação fica fraca.",
        "assunto": "redes"
    },
    {
        "id": "redes_130",
        "pergunta": "Considere a seguinte situação: após incidente, a equipe verifica horários, origens e ações registradas pelos equipamentos. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "sem autenticação.",
            "repetidor.",
            "automação total.",
            "IPv6.",
            "logs de rede."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Logs ajudam a identificar falhas, acessos e eventos suspeitos.",
        "feedbackErro": "Resposta correta: logs de rede. Logs ajudam a identificar falhas, acessos e eventos suspeitos.",
        "dicaBanca": "Dica da banca: Sem log, investigação fica fraca.",
        "assunto": "redes"
    },
    {
        "id": "redes_131",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: SIEM.",
        "alternativas": [
            "Coletar e correlacionar eventos e logs de segurança.",
            "Fornecer IP automaticamente em rede local.",
            "Enviar e-mails por servidores SMTP.",
            "Definir cabos de fibra monomodo.",
            "Comutar quadros por endereço MAC."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. SIEM centraliza e correlaciona eventos para apoiar detecção e resposta.",
        "feedbackErro": "Resposta correta: Coletar e correlacionar eventos e logs de segurança. SIEM centraliza e correlaciona eventos para apoiar detecção e resposta.",
        "dicaBanca": "Dica da banca: SIEM = gestão/correlação de eventos de segurança.",
        "assunto": "redes"
    },
    {
        "id": "redes_132",
        "pergunta": "Considere a seguinte situação: alertas de firewall, servidor, VPN e endpoint são reunidos em uma plataforma de correlação. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "DHCP.",
            "SIEM.",
            "SMTP.",
            "fibra monomodo.",
            "switch."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. SIEM centraliza e correlaciona eventos para apoiar detecção e resposta.",
        "feedbackErro": "Resposta correta: SIEM. SIEM centraliza e correlaciona eventos para apoiar detecção e resposta.",
        "dicaBanca": "Dica da banca: SIEM = gestão/correlação de eventos de segurança.",
        "assunto": "redes"
    },
    {
        "id": "redes_133",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: backup de configuração.",
        "alternativas": [
            "Aumentar automaticamente largura de banda.",
            "Substituir documentação de endereçamento.",
            "Permitir restauração rápida de parâmetros de equipamentos de rede.",
            "Impedir qualquer queda de energia.",
            "Dispensar controle de mudanças."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Backups de configuração reduzem tempo de recuperação após falhas.",
        "feedbackErro": "Resposta correta: Permitir restauração rápida de parâmetros de equipamentos de rede. Backups de configuração reduzem tempo de recuperação após falhas.",
        "dicaBanca": "Dica da banca: Equipamentos de rede também precisam de backup.",
        "assunto": "redes"
    },
    {
        "id": "redes_134",
        "pergunta": "Considere a seguinte situação: um switch falha e a equipe restaura VLANs, trunks e ACLs em equipamento substituto. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "QoS.",
            "endereçamento sem mapa.",
            "nobreak ausente.",
            "backup de configuração.",
            "mudança informal."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Backups de configuração reduzem tempo de recuperação após falhas.",
        "feedbackErro": "Resposta correta: backup de configuração. Backups de configuração reduzem tempo de recuperação após falhas.",
        "dicaBanca": "Dica da banca: Equipamentos de rede também precisam de backup.",
        "assunto": "redes"
    },
    {
        "id": "redes_135",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: failover.",
        "alternativas": [
            "Distribuir carga entre vários servidores ativos.",
            "Medir variação da latência.",
            "Entregar IP por tempo de concessão.",
            "Criar alias DNS para outro nome.",
            "Transferir operação para recurso secundário quando o principal falha."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Failover reduz indisponibilidade ao acionar alternativa previamente preparada.",
        "feedbackErro": "Resposta correta: Transferir operação para recurso secundário quando o principal falha. Failover reduz indisponibilidade ao acionar alternativa previamente preparada.",
        "dicaBanca": "Dica da banca: Failover = assumir após falha.",
        "assunto": "redes"
    },
    {
        "id": "redes_136",
        "pergunta": "Considere a seguinte situação: o link reserva assume automaticamente quando o link principal fica indisponível. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "failover.",
            "balanceamento.",
            "jitter.",
            "DHCP lease.",
            "CNAME."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Failover reduz indisponibilidade ao acionar alternativa previamente preparada.",
        "feedbackErro": "Resposta correta: failover. Failover reduz indisponibilidade ao acionar alternativa previamente preparada.",
        "dicaBanca": "Dica da banca: Failover = assumir após falha.",
        "assunto": "redes"
    },
    {
        "id": "redes_137",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: balanceamento de carga.",
        "alternativas": [
            "Acionar recurso reserva apenas após falha.",
            "Distribuir requisições entre múltiplos recursos disponíveis.",
            "Bloquear loops em camada 2.",
            "Resolver nome de domínio para IPv6.",
            "Filtrar tráfego por endereço MAC."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Load balancing reparte carga para evitar sobrecarga e melhorar continuidade.",
        "feedbackErro": "Resposta correta: Distribuir requisições entre múltiplos recursos disponíveis. Load balancing reparte carga para evitar sobrecarga e melhorar continuidade.",
        "dicaBanca": "Dica da banca: Balanceamento não é igual a backup.",
        "assunto": "redes"
    },
    {
        "id": "redes_138",
        "pergunta": "Considere a seguinte situação: requisições web são divididas entre três servidores para melhorar desempenho e disponibilidade. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "failover passivo.",
            "STP.",
            "balanceamento de carga.",
            "AAAA.",
            "port security."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. Load balancing reparte carga para evitar sobrecarga e melhorar continuidade.",
        "feedbackErro": "Resposta correta: balanceamento de carga. Load balancing reparte carga para evitar sobrecarga e melhorar continuidade.",
        "dicaBanca": "Dica da banca: Balanceamento não é igual a backup.",
        "assunto": "redes"
    },
    {
        "id": "redes_139",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: roteamento dinâmico.",
        "alternativas": [
            "Exigir configuração manual de cada rota.",
            "Resolver nomes de domínio por cache.",
            "Converter endereço privado por porta.",
            "Aprender e atualizar rotas por protocolos de roteamento.",
            "Bloquear tráfego por regra local."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Protocolos dinâmicos ajustam rotas automaticamente conforme a topologia.",
        "feedbackErro": "Resposta correta: Aprender e atualizar rotas por protocolos de roteamento. Protocolos dinâmicos ajustam rotas automaticamente conforme a topologia.",
        "dicaBanca": "Dica da banca: Dinâmico = protocolo troca rotas.",
        "assunto": "redes"
    },
    {
        "id": "redes_140",
        "pergunta": "Considere a seguinte situação: roteadores trocam informações e recalculam caminho após queda de enlace. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "rota estática.",
            "DNS cache.",
            "PAT.",
            "ACL.",
            "roteamento dinâmico."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Protocolos dinâmicos ajustam rotas automaticamente conforme a topologia.",
        "feedbackErro": "Resposta correta: roteamento dinâmico. Protocolos dinâmicos ajustam rotas automaticamente conforme a topologia.",
        "dicaBanca": "Dica da banca: Dinâmico = protocolo troca rotas.",
        "assunto": "redes"
    },
    {
        "id": "redes_141",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: RIP.",
        "alternativas": [
            "Protocolo de roteamento dinâmico baseado em vetor de distância.",
            "Protocolo de estado de enlace com áreas hierárquicas.",
            "Protocolo de roteamento entre sistemas autônomos.",
            "Protocolo de segurança para Wi-Fi moderno.",
            "Protocolo de acesso remoto seguro."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. RIP usa vetor de distância e métrica por saltos, sendo mais simples e limitado.",
        "feedbackErro": "Resposta correta: Protocolo de roteamento dinâmico baseado em vetor de distância. RIP usa vetor de distância e métrica por saltos, sendo mais simples e limitado.",
        "dicaBanca": "Dica da banca: RIP = hops/saltos.",
        "assunto": "redes"
    },
    {
        "id": "redes_142",
        "pergunta": "Considere a seguinte situação: a métrica principal é contagem de saltos, com limitações de escala. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "OSPF.",
            "RIP.",
            "BGP.",
            "WPA3.",
            "SSH."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. RIP usa vetor de distância e métrica por saltos, sendo mais simples e limitado.",
        "feedbackErro": "Resposta correta: RIP. RIP usa vetor de distância e métrica por saltos, sendo mais simples e limitado.",
        "dicaBanca": "Dica da banca: RIP = hops/saltos.",
        "assunto": "redes"
    },
    {
        "id": "redes_143",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: BGP.",
        "alternativas": [
            "Protocolo interno baseado em vetor de distância simples.",
            "Serviço de resolução de nomes local.",
            "Protocolo de roteamento entre sistemas autônomos na Internet.",
            "Protocolo de transferência de arquivos seguro.",
            "Padrão de criptografia para Wi-Fi."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. BGP é o protocolo central de roteamento interdomínios na Internet.",
        "feedbackErro": "Resposta correta: Protocolo de roteamento entre sistemas autônomos na Internet. BGP é o protocolo central de roteamento interdomínios na Internet.",
        "dicaBanca": "Dica da banca: BGP aparece em contexto de Internet e operadoras.",
        "assunto": "redes"
    },
    {
        "id": "redes_144",
        "pergunta": "Considere a seguinte situação: operadoras trocam rotas globais entre seus sistemas autônomos. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "RIP.",
            "DNS.",
            "SFTP.",
            "BGP.",
            "WPA2."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. BGP é o protocolo central de roteamento interdomínios na Internet.",
        "feedbackErro": "Resposta correta: BGP. BGP é o protocolo central de roteamento interdomínios na Internet.",
        "dicaBanca": "Dica da banca: BGP aparece em contexto de Internet e operadoras.",
        "assunto": "redes"
    },
    {
        "id": "redes_145",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: rota padrão.",
        "alternativas": [
            "Rota exclusiva para loopback local.",
            "Rota usada apenas para multicast.",
            "Registro DNS de e-mail.",
            "Tabela de MACs do switch.",
            "Caminho usado quando não há rota mais específica para o destino."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A rota padrão IPv4 é representada por 0.0.0.0/0.",
        "feedbackErro": "Resposta correta: Caminho usado quando não há rota mais específica para o destino. A rota padrão IPv4 é representada por 0.0.0.0/0.",
        "dicaBanca": "Dica da banca: Rota padrão = caminho para o restante.",
        "assunto": "redes"
    },
    {
        "id": "redes_146",
        "pergunta": "Considere a seguinte situação: qualquer destino desconhecido é encaminhado para 0.0.0.0/0 via gateway. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "rota padrão.",
            "127.0.0.0/8.",
            "224.0.0.0/4.",
            "MX.",
            "CAM."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A rota padrão IPv4 é representada por 0.0.0.0/0.",
        "feedbackErro": "Resposta correta: rota padrão. A rota padrão IPv4 é representada por 0.0.0.0/0.",
        "dicaBanca": "Dica da banca: Rota padrão = caminho para o restante.",
        "assunto": "redes"
    },
    {
        "id": "redes_147",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: máscara de sub-rede.",
        "alternativas": [
            "Identificar fabricante de placa Ethernet.",
            "Separar porção de rede e porção de host em um endereço IP.",
            "Definir porta de aplicação web.",
            "Criptografar tráfego Wi-Fi.",
            "Sincronizar horário do servidor."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A máscara define o bloco de rede ao qual o host pertence.",
        "feedbackErro": "Resposta correta: Separar porção de rede e porção de host em um endereço IP. A máscara define o bloco de rede ao qual o host pertence.",
        "dicaBanca": "Dica da banca: Máscara responde se destinos estão na mesma rede.",
        "assunto": "redes"
    },
    {
        "id": "redes_148",
        "pergunta": "Considere a seguinte situação: dois IPs são comparados com /24 para saber se estão na mesma rede local. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "OUI.",
            "porta TCP.",
            "máscara de sub-rede.",
            "WPA2.",
            "NTP."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A máscara define o bloco de rede ao qual o host pertence.",
        "feedbackErro": "Resposta correta: máscara de sub-rede. A máscara define o bloco de rede ao qual o host pertence.",
        "dicaBanca": "Dica da banca: Máscara responde se destinos estão na mesma rede.",
        "assunto": "redes"
    },
    {
        "id": "redes_149",
        "pergunta": "Em redes de computadores, assinale a alternativa que descreve corretamente: VLSM.",
        "alternativas": [
            "Usar uma única máscara fixa em todas as sub-redes.",
            "Usar apenas endereços públicos na LAN.",
            "Substituir DNS por ARP.",
            "Usar máscaras de tamanhos variáveis para aproveitar melhor endereços.",
            "Aumentar potência do sinal Wi-Fi."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. VLSM permite sub-redes dimensionadas conforme necessidade.",
        "feedbackErro": "Resposta correta: Usar máscaras de tamanhos variáveis para aproveitar melhor endereços. VLSM permite sub-redes dimensionadas conforme necessidade.",
        "dicaBanca": "Dica da banca: VLSM = máscara variável.",
        "assunto": "redes"
    },
    {
        "id": "redes_150",
        "pergunta": "Considere a seguinte situação: redes com 100, 30 e 6 hosts recebem blocos diferentes em vez de todos terem o mesmo tamanho. O conceito ou recurso mais diretamente relacionado é:",
        "alternativas": [
            "FLSM.",
            "IP público obrigatório.",
            "ARP.",
            "potência RF.",
            "VLSM."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. VLSM permite sub-redes dimensionadas conforme necessidade.",
        "feedbackErro": "Resposta correta: VLSM. VLSM permite sub-redes dimensionadas conforme necessidade.",
        "dicaBanca": "Dica da banca: VLSM = máscara variável.",
        "assunto": "redes"
    }
];
