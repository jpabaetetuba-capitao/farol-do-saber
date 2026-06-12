const redesTeoria = [
{
  titulo: "🌐 Conceitos Fundamentais de Redes de Computadores",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Uma rede de computadores é um conjunto de dispositivos interligados que podem trocar informações e compartilhar recursos.</p>
<p>Esses dispositivos podem incluir computadores, notebooks, smartphones, impressoras, servidores e diversos outros equipamentos.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p>O principal objetivo de uma rede é permitir a <strong>comunicação</strong> e o <strong>compartilhamento de recursos</strong> entre dispositivos.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 O QUE PODE SER COMPARTILHADO?</h3>
<ul>
  <li>📄 Arquivos e Pastas</li>
  <li>🖨 Impressoras</li>
  <li>🌐 Conexão com a Internet</li>
  <li>🗄 Bancos de dados</li>
  <li>💾 Servidores</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 COMUNICAÇÃO ENTRE DISPOSITIVOS</h3>
<p>Em uma rede, os dispositivos enviam e recebem dados através de protocolos de comunicação. Esses protocolos definem regras para que a troca de informações ocorra corretamente.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 ONDE ENCONTRAMOS REDES?</h3>
<p>As redes estão presentes em praticamente todos os ambientes modernos: 🏠 Residências, 🏢 Empresas, 🏫 Escolas, 🏥 Hospitais, 🚢 Navios e 🏛 Órgãos públicos.</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE</h4>
  <p>Palavras-chave de Redes:<br>
  <strong>Conectar</strong> ➔ <strong>Comunicar</strong> ➔ <strong>Compartilhar</strong></p>
</div>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p>Uma pegadinha comum é afirmar que uma rede serve <em>apenas</em> para compartilhar Internet.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌ Errado.</span> Além da Internet, as redes permitem compartilhar arquivos físicos (como um documento num servidor) e hardware (como uma única impressora para 20 computadores).</p>
</div>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 RESUMO FINAL</h4>
  <ul>
    <li>🌐 <strong>Rede:</strong> Conjunto de dispositivos conectados.</li>
    <li>🤝 <strong>Objetivo:</strong> Comunicação e compartilhamento.</li>
    <li>📜 <strong>Protocolos:</strong> Regras que organizam essa troca de dados.</li>
  </ul>
</div>
`
},

{
  titulo: "🖥️ Componentes de uma Rede",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Os componentes de uma rede são os equipamentos e elementos responsáveis pela comunicação e troca de informações. Cada componente possui uma função específica para garantir o funcionamento adequado da rede.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p>Uma rede depende da combinação exata de <strong>hardware</strong> (equipamentos), <strong>meios de transmissão</strong> (cabos/ar) e <strong>protocolos</strong> (software de regras).</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 HARDWARE DE REDE (EQUIPAMENTOS)</h3>
<ul>
  <li>💻 <strong>Dispositivos Finais (Hosts):</strong> Computadores, smartphones, impressoras. São a origem e o destino da informação.</li>
  <li>🗄 <strong>Servidores:</strong> Computadores potentes e especializados que <em>fornecem serviços</em> para outros dispositivos da rede (hospedam arquivos, sites, bancos de dados).</li>
  <li>📶 <strong>Placa de Rede (NIC):</strong> Componente instalado dentro do computador (cabeado ou Wi-Fi) que permite a ele "falar" com a rede.</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 EQUIPAMENTOS DE INTERLIGAÇÃO</h3>
<ul>
  <li>🔀 <strong>Switch:</strong> Conecta vários dispositivos <em>dentro da mesma rede local</em>.</li>
  <li>📡 <strong>Roteador:</strong> Encaminha os dados <em>entre redes diferentes</em> (Ex: conecta sua rede local à Internet).</li>
  <li>🌍 <strong>Modem:</strong> Realiza a comunicação direta com o provedor de Internet (modula e demodula o sinal).</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 MEIOS DE TRANSMISSÃO</h3>
<p>São as "estradas" por onde a informação passa: 🔌 Cabo de rede (Par Trançado), 🌐 Fibra óptica e 📶 Ondas de Rádio (Wi-Fi).</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE</h4>
  <p><strong>Servidor</strong> → Fornece Serviços<br>
  <strong>Switch</strong> → Liga Equipamentos Iguais (mesma rede)<br>
  <strong>Roteador</strong> → Liga Redes Diferentes<br>
  <strong>Modem</strong> → Liga ao Provedor</p>
</div>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Switch conecta sua casa à internet. / <span style="color: #28A745; font-weight: bold;">✔</span> O Switch conecta apenas os computadores <em>dentro</em> da sua casa. Quem liga à internet (outra rede) é o <strong>Roteador</strong>.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Modem e roteador são exatamente a mesma coisa. / <span style="color: #28A745; font-weight: bold;">✔</span> São conceitos diferentes, embora hoje as operadoras entreguem um único aparelho de plástico que faz as duas funções.</p>
</div>
`
},

{
  titulo: "📡 Tipos de Redes (LAN, MAN e WAN)",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>As redes de computadores podem ser classificadas de acordo com sua <strong>área de cobertura geográfica</strong>. Esse é o assunto de redes que mais cai em provas!</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 LAN (Local Area Network)</h3>
<p>Significa <strong>Rede Local</strong>. Cobre uma área pequena e geograficamente limitada.<br>
<strong>Exemplos:</strong> Uma casa, uma sala de aula, um laboratório de informática, o prédio de uma empresa ou um navio.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 MAN (Metropolitan Area Network)</h3>
<p>Significa <strong>Rede Metropolitana</strong>. Interliga várias redes locais dentro de uma cidade ou região metropolitana.<br>
<strong>Exemplos:</strong> Rede interligando todos os postos de saúde de uma prefeitura, ou a rede de uma universidade com campus espalhados pela cidade.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 WAN (Wide Area Network)</h3>
<p>Significa <strong>Rede de Longa Distância</strong>. Possui um alcance geográfico global, conectando cidades, estados, países e continentes inteiros.<br>
<strong>Exemplo Máximo:</strong> A própria Internet!</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DA ORDEM DE CRESCIMENTO</h4>
  <p><strong>LAN</strong> (Local / Prédio) ➔ <strong>MAN</strong> (Metrópole / Cidade) ➔ <strong>WAN</strong> (World / Mundo)</p>
</div>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p>A banca vai tentar te enganar usando o tamanho da empresa no lugar da distância.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> "A rede do banco Itaú é uma LAN porque é uma empresa privada." / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. O banco tem agências no país todo. Uma rede que corta o país é uma <strong>WAN</strong>.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> "A Internet é a maior LAN do mundo." / <span style="color: #28A745; font-weight: bold;">✔</span> A Internet é uma <strong>WAN</strong>.</p>
</div>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 RESUMO FINAL</h4>
  <ul>
    <li>🏠 <strong>LAN:</strong> Alcance Local (Pequenas distâncias).</li>
    <li>🏙️ <strong>MAN:</strong> Alcance Metropolitano (Cidades).</li>
    <li>🌍 <strong>WAN:</strong> Alcance Amplo (Países / Internet).</li>
  </ul>
</div>
`
},

{
  titulo: "🏢 Intranet e Extranet",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Os conceitos de Internet, Intranet e Extranet são definidos pelo <strong>público que tem acesso</strong> a elas, e não pela tecnologia utilizada (pois todas usam as mesmas tecnologias e protocolos da Internet, como o TCP/IP).</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 O QUE É INTRANET?</h3>
<p>É uma <strong>rede privada</strong> utilizada exclusivamente por uma organização. O acesso é restrito aos funcionários e membros autorizados <em>dentro</em> da instituição.</p>
<p><strong>Recursos:</strong> Sistemas de RH, manuais internos, portal de notícias corporativo, formulários de férias.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 O QUE É EXTRANET?</h3>
<p>É uma <strong>extensão da Intranet</strong>. Ela permite que pessoas externas à organização tenham um acesso controlado a partes da rede interna através da Internet.</p>
<p><strong>Quem acessa?</strong> Clientes, fornecedores, parceiros comerciais e prestadores de serviço (exigindo Login e Senha).</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DA COMPARAÇÃO</h4>
  <p>🌍 <strong>Internet:</strong> Acesso Público (Qualquer pessoa).<br>
  🏢 <strong>Intranet:</strong> Acesso Interno (Só funcionários).<br>
  🤝 <strong>Extranet:</strong> Acesso Externo Controlado (Parceiros com senha).</p>
</div>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> A Intranet usa protocolos diferentes da Internet para ser mais segura. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. A Intranet usa exatamente a mesma tecnologia (TCP/IP, HTTP). O que muda é a barreira de acesso (Firewall/Senhas).</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Se um funcionário acessa a Intranet de casa, ele está usando a Extranet. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. O funcionário <em>sempre</em> acessa a Intranet (mesmo via VPN). A Extranet é para público <strong>não-funcionário</strong> (fornecedores/clientes).</p>
</div>
`
},

{
  titulo: "🔢 Endereçamento IP",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>IP significa <strong>Internet Protocol</strong>. O endereço IP é o número de identificação único atribuído a cada dispositivo conectado a uma rede para que ele possa enviar e receber dados.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p>Assim como uma casa precisa de um CEP e um número para o correio entregar a carta, um computador precisa de um IP para a rede entregar os pacotes de dados. <strong>Não existem dois IPs iguais ativos na mesma rede.</strong></p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 IP PÚBLICO VS IP PRIVADO</h3>
<ul>
  <li>🌍 <strong>IP Público:</strong> É a sua "identidade" na Internet. É o endereço que seu provedor fornece. Único no mundo inteiro.</li>
  <li>🏠 <strong>IP Privado:</strong> É a identidade do seu celular ou PC <em>dentro da sua casa ou empresa</em>. Exemplo clássico: <code>192.168.1.10</code>. Ele não é válido na internet aberta, só no seu roteador local.</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Apenas os computadores possuem endereço IP. / <span style="color: #28A745; font-weight: bold;">✔</span> Qualquer equipamento na rede precisa de IP (SmartTV, celular, impressora de rede, geladeira inteligente).</p>
</div>
`
},

{
  titulo: "📍 IPv4 e IPv6",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Devido ao crescimento explosivo da internet, os endereços IP tradicionais (IPv4) começaram a esgotar, forçando a criação de um novo padrão gigante (IPv6).</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 IPv4 (O Padrão Antigo)</h3>
<ul>
  <li>Utiliza <strong>32 bits</strong>.</li>
  <li>Formado por <strong>4 blocos numéricos</strong>.</li>
  <li>Separados por <strong>pontos (.)</strong>.</li>
  <li>Cada bloco varia de 0 a 255. (Ex: <code>192.168.0.1</code>)</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 IPv6 (O Novo Padrão)</h3>
<ul>
  <li>Utiliza <strong>128 bits</strong> (Gera bilhões de trilhões de endereços a mais).</li>
  <li>Formado por <strong>8 blocos alfanuméricos (hexadecimais)</strong>.</li>
  <li>Separados por <strong>dois pontos (:)</strong>.</li>
  <li>Usa números de 0 a 9 e letras de A a F. (Ex: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>).</li>
</ul>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DA PROVA</h4>
  <p>Bateu o olho e viu só <strong>PONTOS</strong> e números curtos? = <strong>IPv4</strong>.<br>
  Bateu o olho e viu <strong>DOIS PONTOS (:)</strong>, letras e números grandes? = <strong>IPv6</strong>.</p>
</div>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Com a chegada do IPv6, o IPv4 parou imediatamente de funcionar. / <span style="color: #28A745; font-weight: bold;">✔</span> Errado. Existe uma convivência simultânea. A migração está sendo gradual.</p>
</div>
`
},

{
  titulo: "🌍 DNS (Domain Name System)",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>DNS significa <strong>Domain Name System</strong> (Sistema de Nomes de Domínio). Ele é o tradutor oficial da internet e resolve o problema da memória humana.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p>Computadores só conversam através de números (IPs). Humanos preferem palavras. O DNS é a "lista telefônica" que traduz nomes fáceis em números difíceis.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 COMO O DNS FUNCIONA?</h3>
<p>Quando você digita <code>www.google.com</code> no navegador:</p>
<ol>
  <li>O PC pergunta ao Servidor DNS: "Qual o IP do site google.com?"</li>
  <li>O DNS verifica na tabela dele e responde: "O IP é <code>142.250.218.14</code>".</li>
  <li>O seu computador se conecta a esse IP e carrega a página.</li>
</ol>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> O DNS traduz o IP para endereço MAC da máquina. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. Ele traduz <strong>Nome de Domínio (URL)</strong> para <strong>Endereço IP</strong> e vice-versa.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Sem o DNS é impossível acessar a Internet. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. Se você souber de cor o IP numérico do servidor, você consegue acessar o site digitando o IP direto na barra (mas é humanamente inviável decorar todos).</p>
</div>
`
},

{
  titulo: "📶 Modem, Roteador e Switch (A Fundo)",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Estes são os equipamentos físicos que fazem a rede pulsar. Entender a diferença fina entre eles é garantia de pontos na prova de hardware/redes.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 MODEM</h3>
<p>A palavra vem de <strong>MO</strong>dulador / <strong>DEM</strong>odulador. Ele converte o sinal analógico (que vem do poste na rua via cabo coaxial ou telefone) em sinal digital (que o PC entende).<br>
<strong>Função de prova:</strong> É a porta de entrada da casa, conectando sua rede local ao provedor (ISP).</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 ROTEADOR</h3>
<p>É o "guarda de trânsito" inteligente. Ele define a melhor ROTA para os pacotes de dados. <br>
<strong>Função de prova:</strong> Ele conecta REDES DIFERENTES (ex: liga a rede LAN da sua casa com a rede WAN da internet).</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 SWITCH</h3>
<p>É a régua de energia dos dados. Ele possui várias portas (buracos) para espetar cabos azuis.<br>
<strong>Função de prova:</strong> Ele conecta equipamentos DENTRO DA MESMA REDE (ex: liga 10 computadores na sala de uma empresa para formar uma LAN).</p>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 RESUMO FINAL</h4>
  <ul>
    <li>🌍 <strong>Modem:</strong> Traduz o sinal da operadora da rua para a casa.</li>
    <li>🔀 <strong>Roteador:</strong> Pega a internet do modem e "roteia/distribui" (criando a separação LAN/Internet).</li>
    <li>🔌 <strong>Switch:</strong> Multiplica as conexões para vários PCs locais via cabo.</li>
  </ul>
</div>
`
},

{
  titulo: "📡 Wi-Fi e Redes Sem Fio",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>As redes sem fio (Wireless) transmitem dados através de ondas eletromagnéticas. O padrão de rede local sem fio mais famoso é o Wi-Fi.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p><strong>Wi-Fi NÃO É sinônimo de Internet!</strong> O Wi-Fi é apenas o "cabo invisível". Você pode ter um roteador gerando Wi-Fi perfeito em casa, ligando seu celular à sua TV, mesmo se o provedor cortar sua internet.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 ACCESS POINT (Ponto de Acesso)</h3>
<p>É o dispositivo que irradia o sinal sem fio (as "antenas"). Em casa, essa função fica embutida dentro do Roteador. Em empresas, os Access Points são aquelas "bacias brancas" coladas no teto espalhadas pelo prédio.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 SEGURANÇA SEM FIO (CRIPTOGRAFIA)</h3>
<p>Como as ondas voam pelo ar, qualquer vizinho pode "ouvir" a rede. Por isso as redes usam senhas. Os padrões cobrados são:</p>
<ul>
  <li><strong>WEP:</strong> O mais antigo e quebrado. Muito inseguro.</li>
  <li><strong>WPA / WPA2:</strong> O padrão forte mais comum hoje.</li>
  <li><strong>WPA3:</strong> O padrão mais moderno e seguro atualmente.</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Redes Wi-Fi são invulneráveis a ataques se a rede estiver "oculta". / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. Ocultar o nome da rede (SSID) não impede invasões, apenas exige o uso forte dos protocolos WPA2/WPA3.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> O Wi-Fi é sempre mais rápido e estável que a rede cabeada. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. O cabo Ethernet direto na placa de rede sempre garante menos perdas, zero interferência magnética e mais velocidade bruta do que o Wi-Fi.</p>
</div>
`
},

{
  titulo: "🚨 Revisão Geral Rápida",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 O QUE VOCÊ NÃO PODE ESQUECER</h2>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 TABELA MESTRA DE REDES</h4>
  <ul>
    <li><strong>LAN:</strong> Rede da sua casa ou prédio.</li>
    <li><strong>MAN:</strong> Rede do tamanho de uma cidade.</li>
    <li><strong>WAN:</strong> A Internet! Global.</li>
    <li><strong>Intranet:</strong> A rede secreta dos funcionários.</li>
    <li><strong>Extranet:</strong> A rede com senha para clientes/fornecedores.</li>
    <li><strong>Roteador:</strong> Cria a rota e liga redes diferentes.</li>
    <li><strong>Switch:</strong> Multiplica pontos de cabo na LAN.</li>
    <li><strong>Modem:</strong> Puxa a internet da rua pra casa.</li>
    <li><strong>IP:</strong> O "RG/CPF" da máquina. IPv4 (pontos) e IPv6 (letras e dois pontos).</li>
    <li><strong>DNS:</strong> A agenda telefônica da internet (Nomes para IPs).</li>
  </ul>
</div>
`
},

{
  titulo: "📝 Questões Comentadas - Parte 1",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 HORA DE PRATICAR: QUESTÕES DE CONCURSOS</h2>
<p>Teste seus conhecimentos com essas questões sobre abrangência e equipamentos de rede.</p>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 1 (VUNESP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
A classificação de uma rede de computadores que abrange uma pequena área geográfica, como um único edifício, uma residência ou um escritório, e que permite o compartilhamento de arquivos e impressoras de forma ágil, é tecnicamente denominada:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) MAN (Metropolitan Area Network).</li>
  <li>B) WAN (Wide Area Network).</li>
  <li><strong>C) LAN (Local Area Network).</strong></li>
  <li>D) PAN (Personal Area Network).</li>
  <li>E) SAN (Storage Area Network).</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Questão clássica e direta. Redes limitadas a pequenas distâncias (um prédio, uma sala, uma casa) são classificadas como <strong>LAN</strong> (Redes Locais). Lembre-se do macete: LAN (Prédio) -> MAN (Cidade) -> WAN (Mundo).
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 2 (CEBRASPE)</h3>
<p><strong>Julgue o item a seguir:</strong><br>
A Intranet e a Extranet utilizam a mesma tecnologia da Internet (protocolos TCP/IP). A diferença primordial reside no fato de que a Intranet é restrita aos funcionários de uma organização, enquanto a Extranet permite o acesso externo controlado a parceiros e fornecedores.</p>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ CERTO</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Perfeito! A afirmativa resumiu de forma impecável a teoria. Todas as três (Internet, Intranet e Extranet) utilizam a mesma matriz tecnológica de protocolos web. A diferenciação entre elas é exclusivamente sobre <strong>quem tem permissão de acesso</strong>.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 3 (FGV)</h3>
<p><strong>Múltipla Escolha:</strong><br>
O equipamento de rede que atua na camada de enlace e que tem a função de interligar computadores em uma mesma rede local (LAN), encaminhando os dados diretamente para a porta do computador de destino sem replicar para os demais, é o:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Modem.</li>
  <li>B) Roteador.</li>
  <li><strong>C) Switch.</strong></li>
  <li>D) Firewall.</li>
  <li>E) Hub.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> O <strong>Switch</strong> é o concentrador inteligente que liga vários equipamentos <em>dentro da mesma rede local</em>. Ele entrega o pacote apenas na porta exata da máquina de destino, ao contrário do antigo e obsoleto "Hub", que espalhava a informação de forma "burra" para todos.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 4 (FCC)</h3>
<p><strong>Múltipla Escolha:</strong><br>
O serviço responsável por traduzir nomes amigáveis para os usuários, como "www.tst.jus.br", nos respectivos endereços de IP numéricos que as máquinas utilizam para se comunicarem na rede, é conhecido como:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) DHCP.</li>
  <li>B) FTP.</li>
  <li>C) HTTP.</li>
  <li><strong>D) DNS.</strong></li>
  <li>E) MAC.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra D</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Essa é a função mestra do <strong>DNS</strong> (Domain Name System). Ele é a grande lista telefônica da internet. Nós memorizamos o nome do site (domínio) e o DNS faz o favor de traduzir isso para o endereço numérico IP real do servidor.
</div>
`
},

{
  titulo: "📝 Questões Comentadas - Parte 2",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 MAIS QUESTÕES DE CONCURSOS PARA FIXAÇÃO</h2>
<p>Vamos fechar com questões avançadas sobre IPs e segurança de redes sem fio.</p>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 5 (Instituto AOCP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
O endereço de IP <code>192.168.1.100</code> é composto por 4 blocos numéricos separados por pontos. Esse formato indica, categoricamente, que o endereço em questão pertence ao padrão:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li><strong>A) IPv4.</strong></li>
  <li>B) IPv6.</li>
  <li>C) MAC Address.</li>
  <li>D) DNS reverso.</li>
  <li>E) Endereço de Broadcast.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra A</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Bateu o olho e viu apenas números (variando de 0 a 255) formatados em 4 bloquinhos divididos por <strong>pontos</strong>? É a estrutura clássica e inconfundível do <strong>IPv4</strong>. O IPv6 utiliza o sistema alfanumérico (hexadecimal) com 8 blocos e dois pontos (<code>:</code>).
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 6 (CEBRASPE)</h3>
<p><strong>Julgue o item a seguir:</strong><br>
Para que um smartphone, uma televisão smart e um notebook consigam compartilhar a mesma impressora sem fio dentro de uma residência, não é necessário que todos possuam acesso ativo à Internet, bastando que estejam devidamente conectados à mesma rede local Wi-Fi.</p>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ CERTO</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Perfeito! Essa questão pega muita gente. <strong>Rede local (LAN / Wi-Fi) não é sinônimo de Internet (WAN).</strong> Se o cabo da fibra ótica lá da rua se romper, você perde a Internet, mas o roteador da sua casa continua criando a rede Wi-Fi local. Portanto, o computador pode enviar o arquivo para a impressora pela rede sem fio tranquilamente, mesmo estando "offline" do mundo externo.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 7 (FGV)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Em relação à segurança de redes sem fio (Wireless/Wi-Fi), assinale o protocolo mais moderno, projetado para oferecer o mais alto nível de criptografia e proteção contra ataques de força bruta, superando seus antecessores:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) WEP.</li>
  <li>B) FTP.</li>
  <li>C) HTTPS.</li>
  <li><strong>D) WPA3.</strong></li>
  <li>E) SMTP.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra D</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> A evolução da segurança do Wi-Fi seguiu os passos: WEP (muito velho/inseguro) -> WPA -> WPA2 (ainda muito usado) -> <strong>WPA3</strong> (o mais moderno, atual e blindado). Os outros itens não têm a ver: FTP envia arquivos, SMTP envia e-mail, e HTTPS cifra a navegação de páginas web, não a rede Wi-Fi em si.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 8 (VUNESP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Quando se fala em interligar redes distintas, como a rede local de uma empresa à internet, qual é o equipamento de hardware primariamente responsável por traçar a rota, encaminhar os pacotes de dados e realizar a ponte entre a LAN corporativa e a rede da operadora externa?</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Switch.</li>
  <li>B) Placa de Rede.</li>
  <li><strong>C) Roteador.</strong></li>
  <li>D) Access Point.</li>
  <li>E) Cabo de Par Trançado.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Falou em interligar "redes distintas" (ex: LAN e WAN), falou em <strong>Roteador</strong>! O nome entrega a função: ele cria "Rotas" de tráfego entre redes diferentes. O Switch interliga aparelhos dentro da mesma rede (não traça rotas externas).
</div>
`
}
];
