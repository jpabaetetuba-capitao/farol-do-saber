const softwareTeoria = [
{
  titulo: "💻 1. Conceitos Fundamentais de Software",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>O software é um dos componentes essenciais de qualquer sistema computacional. Enquanto o hardware corresponde à parte física do computador, o software representa a <strong>parte lógica</strong>, composta por programas, instruções e dados que orientam o funcionamento desses equipamentos.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p>Sem o software, o hardware seria incapaz de executar tarefas úteis. Um computador ligado, mas sem programas instalados, não conseguiria realizar absolutamente nada. <strong>Hardware e software trabalham de maneira integrada.</strong></p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 HARDWARE x SOFTWARE</h3>
<ul>
  <li>💻 <strong>Hardware:</strong> Parte física (tocável). Ex: Teclado, Mouse, Monitor, Impressora, CPU, RAM.</li>
  <li>🧾 <strong>Software:</strong> Parte lógica (intangível). Ex: Windows, Linux, Android, Word, Chrome, WhatsApp.</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 DADOS, INFORMAÇÃO E SOFTWARE</h3>
<p><strong>Dados</strong> são fatos brutos sem contexto. <strong>Informação</strong> é o resultado do processamento útil desses dados. O <strong>Software</strong> é exatamente a ferramenta responsável por processar os dados brutos e transformá-los em informações úteis.</p>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> O software sofre desgaste físico com o tempo. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. O software é <strong>intangível</strong>. Ele pode ficar obsoleto ou desatualizado, mas não sofre desgaste físico (quem desgasta é o hardware).</p>
</div>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 RESUMO FINAL</h4>
  <ul>
    <li>💻 <strong>Hardware:</strong> Executa as operações físicas.</li>
    <li>🧾 <strong>Software:</strong> Fornece as instruções lógicas (a inteligência).</li>
    <li>🔄 <strong>Interdependência:</strong> Um não funciona sem o outro.</li>
  </ul>
</div>
`
},

{
  titulo: "🗂️ 2. Classificação dos Softwares",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Os softwares podem ser classificados de acordo com sua finalidade dentro do computador. De maneira geral, são divididos em três grandes categorias.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 1. SOFTWARE DE SISTEMA</h3>
<p>Controla o funcionamento do computador e gerencia o hardware. É a "base".<br>
<strong>Exemplos:</strong> Sistemas Operacionais (Windows, Linux, Android) e Drivers de dispositivos.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 2. SOFTWARE APLICATIVO</h3>
<p>Desenvolvido para atender <strong>diretamente às necessidades do usuário</strong> no dia a dia (tarefas finais).<br>
<strong>Exemplos:</strong> Word, Excel, Google Chrome, WhatsApp, Photoshop.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 3. SOFTWARE DE PROGRAMAÇÃO</h3>
<p>Fornece ferramentas utilizadas pelos programadores para criar <em>outros</em> softwares.<br>
<strong>Exemplos:</strong> Visual Studio, Eclipse, Compiladores e Interpretadores.</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE</h4>
  <p><strong>Sistema</strong> = Faz a máquina funcionar.<br>
  <strong>Aplicativo</strong> = Faz a sua tarefa (texto, internet, música).<br>
  <strong>Programação</strong> = Cria os dois anteriores.</p>
</div>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> O Windows é o aplicativo mais usado do mundo. / <span style="color: #28A745; font-weight: bold;">✔</span> Errado! O Windows é um <strong>Software de Sistema</strong> (Sistema Operacional), não é um Aplicativo.</p>
</div>
`
},

{
  titulo: "🪟 3. Sistemas Operacionais",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>O Sistema Operacional (SO) é o principal e mais importante <em>Software de Sistema</em> de um computador. Ele é o grande "gerente" da máquina.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 PRINCIPAIS FUNÇÕES DO SO</h3>
<ul>
  <li>🧠 <strong>Gerenciamento do Processador:</strong> Distribui o tempo da CPU entre os programas (Multitarefa).</li>
  <li>⚡ <strong>Gerenciamento de Memória:</strong> Decide quem usa a RAM e evita travamentos.</li>
  <li>📂 <strong>Gerenciamento de Arquivos:</strong> Organiza os dados no HD/SSD.</li>
  <li>🖨️ <strong>Gerenciamento de Dispositivos:</strong> Controla os periféricos via Drivers.</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 EXEMPLOS COBRADOS EM PROVA</h3>
<ul>
  <li>💻 <strong>Para Computadores:</strong> Windows, Linux, macOS.</li>
  <li>📱 <strong>Para Dispositivos Móveis:</strong> Android, iOS.</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> O Google Chrome é um sistema operacional web. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. O Chrome é apenas um <strong>Software Aplicativo</strong> (navegador). Para o Chrome rodar, ele precisa de um SO (como o Windows) instalado antes.</p>
</div>
`
},

{
  titulo: "📱 4. Softwares Aplicativos",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Os aplicativos resolvem os problemas práticos dos usuários. Todo aplicativo <strong>depende obrigatoriamente</strong> de um Sistema Operacional para funcionar.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 PRINCIPAIS CATEGORIAS</h3>
<ul>
  <li>📄 <strong>Editores de Texto:</strong> MS Word, LibreOffice Writer.</li>
  <li>📊 <strong>Planilhas Eletrônicas:</strong> MS Excel, LibreOffice Calc.</li>
  <li>🎞️ <strong>Apresentações:</strong> MS PowerPoint, LibreOffice Impress.</li>
  <li>🌐 <strong>Navegadores (Browsers):</strong> Google Chrome, Mozilla Firefox, Microsoft Edge.</li>
  <li>💬 <strong>Comunicação:</strong> WhatsApp, Microsoft Teams, Telegram.</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> O Google é o navegador mais usado do mundo. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. O "Google" (google.com) é um <em>Mecanismo de Busca</em> (site). O <strong>Google Chrome</strong> é o Navegador (aplicativo).</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> O Android é o aplicativo móvel do Google. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. O Android é um <strong>Sistema Operacional</strong>.</p>
</div>
`
},

{
  titulo: "🔓 5. Software Livre, Código Aberto e Proprietário",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>As bancas amam explorar a diferença entre um código fechado e as garantias de liberdade do usuário.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 SOFTWARE LIVRE (Free Software)</h3>
<p>Garante <strong>4 Liberdades Essenciais</strong> (estabelecidas pela FSF):</p>
<ol>
  <li>Executar o programa para qualquer finalidade.</li>
  <li>Estudar o código-fonte (logo, o código <em>tem</em> que ser aberto).</li>
  <li>Modificar o programa conforme a necessidade.</li>
  <li>Redistribuir as cópias e as melhorias.</li>
</ol>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p><strong>"Livre" não significa "Gratuito"!</strong> Um software livre pode ser cobrado, desde que, ao comprar, você receba junto as quatro liberdades e o código-fonte.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 OPEN SOURCE (Código Aberto)</h3>
<p>Tem o código disponível para auditoria e contribuição. Na prática dos concursos, Software Livre e Open Source (ex: Linux, LibreOffice) andam de mãos dadas, diferindo apenas em questões filosóficas.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 SOFTWARE PROPRIETÁRIO</h3>
<p>O fabricante mantém controle e o código é <strong>fechado</strong> (ex: Windows, Adobe Photoshop, MS Office). O usuário compra apenas o "direito de uso" (a licença), mas não o software em si.</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DA LICENÇA GPL</h4>
  <p>A licença <strong>GPL</strong> (GNU) e o conceito de <strong>Copyleft</strong> garantem que o software continue livre: se você pegar um código livre e modificá-lo, é obrigado a liberar a sua modificação de forma livre também.</p>
</div>
`
},

{
  titulo: "📄 6. Licenciamento de Software",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>A licença define como o programa pode ser utilizado, distribuído e comercializado comercialmente.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 PRINCIPAIS MODELOS DE LICENÇA</h3>
<ul>
  <li>🆓 <strong>Freeware:</strong> Software totalmente gratuito para uso, mas de código-fonte FECHADO. Você não pode alterar. (Ex: Adobe Reader).</li>
  <li>⏳ <strong>Shareware:</strong> Versão de avaliação (com funções limitadas). Tem o objetivo de forçar o usuário a comprar a licença no futuro.</li>
  <li>⏰ <strong>Trial:</strong> Uma variação de shareware com limite de tempo (ex: "Teste grátis por 30 dias").</li>
  <li>📺 <strong>Adware:</strong> Software gratuito sustentado por exibição massiva de propagandas.</li>
  <li>🕹️ <strong>Demo:</strong> Versão puramente demonstrativa com fase curta (comum em jogos).</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Todo freeware é considerado um Software Livre. / <span style="color: #28A745; font-weight: bold;">✔</span> Errado! O Freeware te dá a gratuidade, mas não te dá a LIBERDADE de acessar o código. Logo, não é livre.</p>
</div>
`
},

{
  titulo: "⚙️ 7. Linguagens de Programação",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>O computador só entende zeros e uns (Linguagem de Máquina). Para que os humanos consigam criar os softwares, utilizamos as Linguagens de Programação.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 NÍVEIS DE LINGUAGEM</h3>
<ul>
  <li>⚙️ <strong>Baixo Nível:</strong> Mais próxima da máquina e difícil para humanos (Ex: Assembly).</li>
  <li>💬 <strong>Alto Nível:</strong> Mais próxima da fala humana, focada na lógica (Ex: Python, Java, C++, PHP).</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 COMO O CÓDIGO É TRADUZIDO?</h3>
<ul>
  <li>📦 <strong>Compilador:</strong> Traduz TODO o código-fonte de uma vez só e gera um arquivo executável (ex: .exe). É mais rápido na hora de rodar.</li>
  <li>📜 <strong>Interpretador:</strong> Traduz e executa o código linha por linha, em tempo real.</li>
</ul>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DA POO</h4>
  <p>Se a banca citar <strong>"POO"</strong>, significa Programação Orientada a Objetos. É um modelo moderno que organiza os programas criando "objetos" que têm atributos e executam ações (métodos).</p>
</div>
`
},

{
  titulo: "🔌 8. Firmware, BIOS e UEFI",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Existe um tipo específico de software que vem "chumbado" nas peças físicas do computador, essencial para ligá-lo.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 O QUE É FIRMWARE?</h3>
<p>É o <strong>Software Embarcado</strong>, gravado permanentemente em uma memória de hardware. Exemplos: Software interno do roteador, software da Smart TV, e o mais famoso: a BIOS da Placa-Mãe.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 BIOS E UEFI</h3>
<ul>
  <li><strong>BIOS:</strong> É o firmware clássico que liga o PC, faz o POST (Teste de hardware) e chama o Windows.</li>
  <li><strong>UEFI:</strong> É a evolução da BIOS! Possui interface gráfica com mouse e traz o <strong>Secure Boot</strong> (Boot Seguro, que bloqueia malwares na inicialização).</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> O Firmware é uma peça física de hardware. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. Ele é um <strong>Software</strong> (programa), mas que mora dentro de um chip de hardware.</p>
</div>
`
},

{
  titulo: "🖨️ 9. Drivers de Dispositivos",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>O Sistema Operacional precisa "aprender" a falar com peças novas que você espeta no computador.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p><strong>Driver</strong> é um pequeno software (um tradutor) que fica instalado no Windows para que ele saiba dar ordens a um hardware específico (ex: Driver da placa de vídeo, Driver da impressora).</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 PLUG AND PLAY (PnP)</h3>
<p>Tecnologia que permite que o Windows configure automaticamente dispositivos novos logo que você os espeta (como um pendrive), instalando drivers genéricos sem você precisar de CD.</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DA DIFERENÇA</h4>
  <p><strong>Firmware:</strong> Instalado DENTRO da peça (hardware).<br>
  <strong>Driver:</strong> Instalado DENTRO do Windows (Sistema Operacional).</p>
</div>
`
},

{
  titulo: "🖥️ 10. Virtualização e Máquinas Virtuais",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>A virtualização permite criar um "computador fantasma" via software. Ou seja, rodar o Linux e o Windows ao mesmo tempo, em uma única máquina física.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 OS CONCEITOS (PROVA)</h3>
<ul>
  <li>🖥️ <strong>Host (Hospedeiro):</strong> É a sua máquina <em>física</em> real, que cede a memória e o processador.</li>
  <li>👻 <strong>Guest (Convidado):</strong> É a Máquina Virtual (VM) que roda isolada lá dentro.</li>
  <li>⚙️ <strong>Hipervisor:</strong> É o software mestre (ex: VirtualBox, VMware) que gerencia tudo e permite que a virtualização exista.</li>
</ul>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 VANTAGENS DO USO</h4>
  <p>Economia de hardware, segurança pelo isolamento (vírus na VM não afeta a máquina real), e uso de <strong>Snapshots</strong> (que tira uma "foto" e volta no tempo rapidamente caso o sistema quebre).</p>
</div>
`
},

{
  titulo: "☁️ 11. Computação em Nuvem (Cloud Computing)",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Entregar softwares, poder de processamento e arquivos de forma remota, sob demanda e via Internet.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 OS 3 GRANDES MODELOS (MEMORIZE!)</h3>
<ul>
  <li>🏢 <strong>IaaS (Infraestrutura as a Service):</strong> Você aluga "hardware virtual" bruto. (Ex: Amazon EC2). Focado na T.I. pesada.</li>
  <li>⚙️ <strong>PaaS (Plataforma as a Service):</strong> Aluga um ambiente pronto com banco de dados e bibliotecas. O foco é exclusivo para <strong>Desenvolvedores/Programadores</strong> trabalharem em seus códigos.</li>
  <li>📄 <strong>SaaS (Software as a Service):</strong> O aplicativo pronto, mastigado, via navegador. O foco é o <strong>Usuário Final</strong>. (Ex: Gmail, Google Drive, Office 365, Netflix).</li>
</ul>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DA NUVEM</h4>
  <p>I = Infraestrutura Bruta<br>
  P = Plataforma para Programador<br>
  S = Software para usuário final</p>
</div>
`
},

{
  titulo: "🛡️ 12. Segurança Relacionada a Software",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Os malwares são softwares escritos estritamente para causar prejuízos na base de segurança C.I.D. (Confidencialidade, Integridade e Disponibilidade).</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 PRINCIPAIS AMEAÇAS</h3>
<ul>
  <li>🦠 <strong>Vírus:</strong> Sofre mutação e infecta hospedeiros. PRECISA da ação do usuário (clique) para ativar.</li>
  <li>🪱 <strong>Worm (Verme):</strong> Independente, não precisa de arquivo hospedeiro, se auto-espalha pela rede explorando brechas.</li>
  <li>🐴 <strong>Trojan (Cavalo de Troia):</strong> O "presente" disfarçado de software útil que age abrindo as portas por trás.</li>
  <li>🔐 <strong>Ransomware:</strong> O Malware do <strong>sequestro</strong>. Criptografa o sistema todo e pede resgate em criptomoeda.</li>
</ul>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE (PATCHES)</h4>
  <p>Para se proteger, o usuário deve atualizar constantemente os softwares. O nome das correções curtas lançadas para cobrir buracos de segurança recém descobertos é <strong>Patch</strong>.</p>
</div>
`
},

{
  titulo: "🚨 13. Pegadinhas Clássicas de Concursos sobre Software",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 CASCA DE BANANA</h2>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <ul style="color: #721C24;">
    <li><span style="font-weight: bold;">❌</span> Hardware é parte lógica / <span style="color: #28A745; font-weight: bold;">✔</span> Software é a lógica, Hardware é física.</li>
    <li><span style="font-weight: bold;">❌</span> Google é navegador / <span style="color: #28A745; font-weight: bold;">✔</span> Google Chrome é o navegador. Google é site de buscas.</li>
    <li><span style="font-weight: bold;">❌</span> Software Livre e Freeware são sinônimos. / <span style="color: #28A745; font-weight: bold;">✔</span> Freeware é só gratuito (fechado). Software Livre te dá o código fonte (aberto).</li>
    <li><span style="font-weight: bold;">❌</span> Linux é um aplicativo e Word é sistema. / <span style="color: #28A745; font-weight: bold;">✔</span> Oposto total. Linux (SO) e Word (App).</li>
    <li><span style="font-weight: bold;">❌</span> Compilador traduz na hora. / <span style="color: #28A745; font-weight: bold;">✔</span> Quem traduz linha a linha na hora é o <em>Interpretador</em>.</li>
  </ul>
</div>
`
},

{
  titulo: "🏆 14. Revisão Geral e Mapa Mental",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 RETA FINAL</h2>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 TABELA MESTRA DE FIXAÇÃO</h4>
  <ul>
    <li><strong>Soft. Sistema:</strong> O gerente da máquina (Windows, Linux, Drivers, Android).</li>
    <li><strong>Soft. Aplicativo:</strong> O pau pra toda obra do usuário (Word, Chrome, Excel).</li>
    <li><strong>Licença Livre:</strong> Garante as 4 liberdades essenciais + código fonte aberto.</li>
    <li><strong>Virtualização:</strong> Host = Hardware físico; Guest = A máquina virtualizada.</li>
    <li><strong>Nuvem IaaS:</strong> Aluguel de Hardware/Infraestrutura.</li>
    <li><strong>Nuvem SaaS:</strong> Acesso a um software fim (Netflix, E-mail).</li>
    <li><strong>BIOS/UEFI:</strong> É Software, porém da categoria Firmware (mora na Placa-Mãe).</li>
    <li><strong>Ransomware:</strong> A grande ameaça de sequestro de dados (exige resgate criptográfico).</li>
  </ul>
</div>
`
},

{
  titulo: "📝 15. Questões Comentadas - Parte 1",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 HORA DE PRATICAR: QUESTÕES DE CONCURSOS</h2>
<p>Aplique agora os conceitos de Sistemas, Aplicativos e Licenciamento aprendidos.</p>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 1 (FCC)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Considerando os conceitos fundamentais de informática, a parte lógica de um sistema computacional, que compreende os programas e as instruções que dizem à máquina o que deve ser feito, bem como um exemplo clássico desse elemento, estão representados, respectivamente, em:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Hardware e Processador.</li>
  <li><strong>B) Software e Sistema Operacional.</strong></li>
  <li>C) Peopleware e Teclado.</li>
  <li>D) Hardware e Microsoft Word.</li>
  <li>E) Software e Disco Rígido (HD).</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra B</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> A "parte lógica" (intangível) é o <strong>Software</strong>. A questão pede um exemplo dele na sequência: o <em>Sistema Operacional</em> (como o Windows) é a categoria mais importante de software existente.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 2 (CEBRASPE)</h3>
<p><strong>Julgue o item a seguir:</strong><br>
O Google Chrome e o Microsoft Windows 11 enquadram-se na mesma classificação de categoria tecnológica, uma vez que ambos são sistemas operacionais desenvolvidos para garantir a navegação e a multitarefa segura do usuário.</p>
<p><strong>Gabarito:</strong> <span style="color: #DC3545; font-weight: bold; background-color: #F8D7DA; padding: 3px 8px; border-radius: 4px;">❌ ERRADO</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Pegadinha clássica. O Windows 11 é um <strong>Software de Sistema (Sistema Operacional)</strong>, responsável por ligar e gerenciar a máquina. O Google Chrome é um <strong>Software Aplicativo (Navegador)</strong>, que roda "por cima" do Windows. Eles pertencem a categorias bem diferentes.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 3 (FGV)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Sobre licenciamento, o software comercializado ou disponibilizado sem cobrança financeira ao usuário, mas que restringe e oculta as informações de seu código-fonte, barrando a liberdade de qualquer alteração estrutural do programa, é classificado como:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Software Livre (Free Software).</li>
  <li>B) Open Source.</li>
  <li><strong>C) Freeware.</strong></li>
  <li>D) Shareware.</li>
  <li>E) Adware.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Se ele é puramente "de graça", mas o desenvolvedor tranca o acesso às entranhas do código-fonte, ele é um <strong>Freeware</strong>. Para ser "Software Livre" (Free Software), o código-fonte deve ser aberto de forma obrigatória para garantir as liberdades da FSF.
</div>
`
},

{
  titulo: "📝 16. Questões Comentadas - Parte 2",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 MAIS QUESTÕES DE CONCURSOS PARA FIXAÇÃO</h2>
<p>Avançando pelos conceitos de Computação em Nuvem e Segurança aplicados ao mundo do Software.</p>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 4 (VUNESP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
No ecossistema da Computação em Nuvem (Cloud Computing), o serviço oferecido pelos grandes provedores em que o consumidor utiliza os recursos e a interface de um software completo fornecido diretamente pelo navegador web (como o acesso ao Gmail ou Google Drive), eximindo-se de qualquer preocupação com a infraestrutura interna do servidor, é o modelo denominado:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) IaaS (Infrastructure as a Service).</li>
  <li>B) PaaS (Platform as a Service).</li>
  <li><strong>C) SaaS (Software as a Service).</strong></li>
  <li>D) MaaS (Malware as a Service).</li>
  <li>E) CaaS (Communication as a Service).</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Falou de produto final pronto para uso em tela no navegador do cliente, trata-se de <strong>SaaS</strong> (Software como Serviço). A banca listou o IaaS e o PaaS para confundir, mas eles servem como aluguel de servidores ou ambiente bruto focado em desenvolvedores de TI.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 5 (Instituto AOCP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Existe um malware específico que tem como natureza principal causar extorsão financeira. Ele age invadindo a máquina e aplicando um sistema forte de criptografia em todos os arquivos pessoais do usuário. Após "trancar" os dados, os criminosos exigem resgate financeiro para fornecer a chave de desbloqueio. Esse software malicioso é o:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Spyware.</li>
  <li>B) Worm.</li>
  <li><strong>C) Ransomware.</strong></li>
  <li>D) Rootkit.</li>
  <li>E) Cavalo de Troia (Trojan).</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Criptografia indevida + Bloqueio do sistema + Solicitação de resgate ("ransom" em inglês) = <strong>Ransomware</strong>. É o ataque com software malicioso que mais aterroriza os órgãos públicos e empresas atualmente.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 6 (CEBRASPE)</h3>
<p><strong>Julgue o item a seguir:</strong><br>
A interface unificada extensível de firmware (UEFI), além de fornecer recursos mais robustos que o antigo BIOS, dispõe de uma funcionalidade chamada Secure Boot (inicialização segura), que protege o sistema impedindo que softwares não assinados e maliciosos operem antes do carregamento do próprio sistema operacional.</p>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ CERTO</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Excelente definição da banca! A UEFI é a substituta visual e inteligente da tradicional BIOS nas placas-mãe. O recurso <strong>Secure Boot</strong> foi introduzido por ela exatamente com essa finalidade tática de bloquear invasões primitivas de firmware logo na raiz do equipamento.
</div>
`
}
];
