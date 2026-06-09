const internet = [

{
    pergunta: "Em relação ao conceito de Internet, assinale a alternativa correta.",

    alternativas: [

        "A Internet é um software utilizado exclusivamente para acessar páginas da Web.",

        "A Internet consiste em uma rede mundial de computadores interligados que permite a troca de informações e serviços.",

        "A Internet é um protocolo responsável pela transmissão de páginas eletrônicas.",

        "A Internet corresponde apenas ao conjunto de páginas que compõem a World Wide Web (WWW).",

        "A Internet é uma rede privada utilizada exclusivamente por órgãos governamentais."

    ],

    correta: 1,

    feedbackAcerto:
`A Internet é uma rede global formada por milhões de dispositivos interconectados que utilizam protocolos de comunicação para compartilhar informações e serviços. A WWW é apenas um dos serviços disponíveis na Internet.`,

    feedbackErro:
`A alternativa correta é a letra B. A Internet é uma rede mundial de computadores e dispositivos conectados entre si. Ela permite comunicação, compartilhamento de dados, acesso a serviços online, correio eletrônico, transferência de arquivos e navegação na Web.`,

    dicaBanca:
`As bancas costumam diferenciar Internet (infraestrutura global de redes) de WWW (serviço de páginas web). Não confunda esses conceitos.`

},

{
    pergunta: "A World Wide Web (WWW) pode ser corretamente definida como:",

    alternativas: [

        "Uma rede privada utilizada por empresas para compartilhamento interno de informações.",

        "Um protocolo responsável pelo envio de mensagens eletrônicas.",

        "Um serviço da Internet que permite o acesso a páginas e documentos interligados por hiperlinks.",

        "Um sistema operacional utilizado em servidores web.",

        "Um programa antivírus destinado à proteção de navegadores."

    ],

    correta: 2,

    feedbackAcerto:
`A WWW (World Wide Web) é um dos principais serviços disponíveis na Internet. Ela permite acessar páginas e documentos conectados por hiperlinks, normalmente por meio de navegadores como Chrome, Firefox e Edge.`,

    feedbackErro:
`A alternativa correta é a letra C. A WWW não é sinônimo de Internet. Trata-se de um serviço que utiliza a infraestrutura da Internet para disponibilizar páginas, sites e conteúdos interligados por hiperlinks.`,

    dicaBanca:
`Questão clássica de concurso: Internet é a rede; WWW é um serviço que funciona sobre essa rede.`

},

{
    pergunta: "Ao acessar um endereço como https://www.faroldosaber.com.br, o trecho completo digitado pelo usuário recebe o nome de:",

    alternativas: [

        "Protocolo TCP/IP.",

        "URL.",

        "Domínio DNS.",

        "Servidor Web.",

        "Hyperlink."

    ],

    correta: 1,

    feedbackAcerto:
`URL (Uniform Resource Locator) é o endereço utilizado para localizar recursos na Internet, como páginas, imagens, vídeos ou arquivos.`,

    feedbackErro:
`A alternativa correta é a letra B. URL é o endereço que identifica e localiza um recurso na Internet. Uma URL pode conter protocolo, domínio, diretórios e outros elementos.`,

    dicaBanca:
`As bancas costumam apresentar exemplos de endereços e perguntar o significado de URL.`

},

{
    pergunta: "Assinale a alternativa que apresenta corretamente a diferença entre um site e uma página da Web.",

    alternativas: [

        "Não existe diferença; os termos são sinônimos.",

        "Página da Web é um conjunto de sites hospedados em um servidor.",

        "Site é um único documento HTML, enquanto página da Web é um conjunto de documentos.",

        "Site é um conjunto organizado de páginas da Web relacionadas entre si.",

        "Página da Web é utilizada apenas em redes privadas."

    ],

    correta: 3,

    feedbackAcerto:
`Um site é formado por várias páginas da Web relacionadas entre si. Cada página corresponde a um documento individual acessado por meio de uma URL específica.`,

    feedbackErro:
`A alternativa correta é a letra D. Um site reúne diversas páginas organizadas sob um mesmo domínio ou objetivo. Já a página da Web corresponde a um conteúdo individual dentro desse conjunto.`,

    dicaBanca:
`Lembre-se: página é a unidade individual; site é o conjunto de páginas.`

},

{
    pergunta: "Uma organização mantém uma rede interna acessível apenas aos seus funcionários. Essa rede é corretamente denominada:",

    alternativas: [

        "Internet.",

        "Extranet.",

        "Intranet.",

        "World Wide Web.",

        "DNS."

    ],

    correta: 2,

    feedbackAcerto:
`Intranet é uma rede privada utilizada dentro de uma organização, baseada nas mesmas tecnologias da Internet, mas restrita aos usuários autorizados.`,

    feedbackErro:
`A alternativa correta é a letra C. A Intranet é uma rede interna corporativa destinada ao compartilhamento de informações e recursos entre os membros da organização.`,

    dicaBanca:
`Decore a diferença: Internet = pública; Intranet = interna; Extranet = acesso externo controlado a parte da rede interna.`

},

{
    pergunta: "O protocolo HTTP (HyperText Transfer Protocol) tem como principal finalidade:",

    alternativas: [

        "Realizar a tradução de nomes de domínio em endereços IP.",

        "Permitir a transferência de páginas e recursos da Web entre cliente e servidor.",

        "Enviar mensagens de correio eletrônico entre servidores.",

        "Realizar a criptografia automática dos dados transmitidos.",

        "Gerenciar o roteamento de pacotes na Internet."

    ],

    correta: 1,

    feedbackAcerto:
`O HTTP é o protocolo utilizado para a comunicação entre navegadores e servidores web, permitindo a transferência de páginas, imagens e outros recursos da Web.`,

    feedbackErro:
`A alternativa correta é a letra B. O HTTP é responsável pela transferência de informações entre clientes e servidores web. Ele não realiza criptografia nem tradução de domínios.`,

    dicaBanca:
`Quando a banca citar navegação em páginas web, a resposta geralmente envolve o protocolo HTTP ou HTTPS.`

},

{
    pergunta: "A principal diferença entre HTTP e HTTPS é que o HTTPS:",

    alternativas: [

        "Possui velocidade de navegação superior em qualquer situação.",

        "Funciona apenas em redes corporativas.",

        "Utiliza criptografia para proteger os dados transmitidos.",

        "Dispensa a utilização de servidores web.",

        "Substitui o protocolo TCP/IP."

    ],

    correta: 2,

    feedbackAcerto:
`O HTTPS adiciona uma camada de segurança ao HTTP por meio da criptografia dos dados transmitidos, protegendo informações contra interceptações.`,

    feedbackErro:
`A alternativa correta é a letra C. O HTTPS utiliza certificados digitais e criptografia para garantir maior segurança durante a comunicação entre navegador e servidor.`,

    dicaBanca:
`Ao visualizar o cadeado ao lado do endereço do site, normalmente significa que a conexão utiliza HTTPS.`

},

{
    pergunta: "O protocolo DNS (Domain Name System) tem como função principal:",

    alternativas: [

        "Transferir arquivos entre computadores.",

        "Converter nomes de domínio em endereços IP.",

        "Enviar e-mails pela Internet.",

        "Realizar criptografia de dados.",

        "Controlar o acesso de usuários à rede."

    ],

    correta: 1,

    feedbackAcerto:
`O DNS atua como uma espécie de agenda da Internet, traduzindo nomes amigáveis, como www.google.com, em endereços IP compreendidos pelos computadores.`,

    feedbackErro:
`A alternativa correta é a letra B. Sem o DNS seria necessário memorizar endereços IP para acessar sites, o que tornaria a navegação muito mais difícil.`,

    dicaBanca:
`Questão extremamente frequente. DNS = resolução de nomes para IP.`

},

{
    pergunta: "O protocolo FTP é tradicionalmente utilizado para:",

    alternativas: [

        "Enviar mensagens instantâneas.",

        "Realizar chamadas de vídeo.",

        "Transferir arquivos entre computadores em rede.",

        "Traduzir endereços IP em domínios.",

        "Criptografar conexões web."

    ],

    correta: 2,

    feedbackAcerto:
`FTP significa File Transfer Protocol e é utilizado para transferência de arquivos entre dispositivos conectados a uma rede.`,

    feedbackErro:
`A alternativa correta é a letra C. O FTP foi desenvolvido especificamente para envio e recebimento de arquivos em ambientes de rede.`,

    dicaBanca:
`Lembre-se da sigla: File Transfer Protocol = protocolo de transferência de arquivos.`

},

{
    pergunta: "A expressão TCP/IP refere-se:",

    alternativas: [

        "A um navegador utilizado para acessar páginas web.",

        "A um conjunto de protocolos que serve de base para a comunicação na Internet.",

        "A um serviço de correio eletrônico.",

        "A um sistema operacional para servidores.",

        "A um mecanismo de criptografia de dados."

    ],

    correta: 1,

    feedbackAcerto:
`TCP/IP é a suíte de protocolos que permite a comunicação entre dispositivos na Internet, sendo considerada a base do funcionamento das redes modernas.`,

    feedbackErro:
`A alternativa correta é a letra B. O conjunto TCP/IP engloba diversos protocolos responsáveis pelo endereçamento, transporte e comunicação de dados na Internet.`,

    dicaBanca:
`Quando aparecer a expressão 'suíte de protocolos da Internet', pense imediatamente em TCP/IP.`

},

{
    pergunta: "Nos navegadores modernos, a funcionalidade Favoritos (Bookmarks) tem como principal objetivo:",

    alternativas: [

        "Armazenar senhas de acesso a sites.",

        "Registrar o histórico completo de navegação.",

        "Permitir o acesso rápido a páginas previamente salvas pelo usuário.",

        "Bloquear sites considerados inseguros.",

        "Excluir automaticamente arquivos temporários."

    ],

    correta: 2,

    feedbackAcerto:
`Os Favoritos permitem salvar endereços de páginas para acesso rápido posteriormente, sem necessidade de redigitar a URL.`,

    feedbackErro:
`A alternativa correta é a letra C. O recurso Favoritos serve para armazenar links de interesse do usuário, facilitando o acesso futuro.`,

    dicaBanca:
`Favoritos não se confundem com Histórico. Favoritos são salvos manualmente; Histórico é registrado automaticamente.`

},

{
    pergunta: "Em navegadores como Google Chrome, Mozilla Firefox e Microsoft Edge, o Histórico de Navegação é utilizado para:",

    alternativas: [

        "Armazenar exclusivamente arquivos baixados da Internet.",

        "Registrar automaticamente os sites visitados pelo usuário.",

        "Salvar cópias de segurança dos favoritos.",

        "Executar verificações antivírus em páginas acessadas.",

        "Impedir a abertura de páginas repetidas."

    ],

    correta: 1,

    feedbackAcerto:
`O Histórico registra automaticamente as páginas visitadas, permitindo sua consulta posterior pelo usuário.`,

    feedbackErro:
`A alternativa correta é a letra B. O Histórico é um registro automático das páginas acessadas durante a navegação.`,

    dicaBanca:
`Questão recorrente: Histórico = automático; Favoritos = escolha do usuário.`

},

{
    pergunta: "Ao utilizar o modo de navegação anônima (privada) em um navegador, é correto afirmar que:",

    alternativas: [

        "O usuário fica completamente invisível na Internet.",

        "O provedor de acesso deixa de registrar a navegação realizada.",

        "Os sites visitados não podem identificar o endereço IP do usuário.",

        "O navegador reduz o armazenamento local de histórico e cookies após o encerramento da sessão.",

        "A navegação passa a ser criptografada automaticamente."

    ],

    correta: 3,

    feedbackAcerto:
`A navegação anônima reduz o armazenamento local de informações, como histórico, cookies e dados temporários após o encerramento da sessão.`,

    feedbackErro:
`A alternativa correta é a letra D. O modo anônimo não torna o usuário invisível nem impede o monitoramento por provedores, redes corporativas ou sites acessados.`,

    dicaBanca:
`Muitas bancas exploram a falsa ideia de anonimato total. O modo anônimo protege apenas informações armazenadas localmente.`

},

{
    pergunta: "Quando um arquivo é obtido da Internet e armazenado no computador do usuário, ocorre uma operação conhecida como:",

    alternativas: [

        "Upload.",

        "Download.",

        "Streaming.",

        "Sincronização.",

        "Compartilhamento."

    ],

    correta: 1,

    feedbackAcerto:
`Download corresponde à transferência de dados da Internet para o dispositivo do usuário.`,

    feedbackErro:
`A alternativa correta é a letra B. Download é o recebimento de arquivos ou informações da rede para o equipamento local.`,

    dicaBanca:
`Download = receber; Upload = enviar.`

},

{
    pergunta: "Sobre os navegadores Google Chrome, Mozilla Firefox e Microsoft Edge, assinale a alternativa correta.",

    alternativas: [

        "São sistemas operacionais destinados ao acesso à Internet.",

        "São aplicativos utilizados para acessar páginas e serviços disponíveis na Web.",

        "São protocolos responsáveis pela comunicação entre computadores.",

        "Funcionam exclusivamente em computadores conectados por cabo.",

        "Não permitem gerenciamento de favoritos ou histórico."

    ],

    correta: 1,

    feedbackAcerto:
`Chrome, Firefox e Edge são navegadores web utilizados para acessar páginas, aplicações e serviços disponíveis na Internet.`,

    feedbackErro:
`A alternativa correta é a letra B. Navegadores são programas desenvolvidos para permitir a navegação e interação com conteúdos da Web.`,

    dicaBanca:
`A banca costuma perguntar a classificação desses programas. Eles são navegadores (browsers), não sistemas operacionais nem protocolos.`

},

{
    pergunta: "Os mecanismos de busca disponíveis na Internet têm como principal finalidade:",

    alternativas: [

        "Traduzir páginas automaticamente para outros idiomas.",

        "Permitir a localização de informações e conteúdos na Web por meio de palavras-chave.",

        "Substituir navegadores como Chrome e Firefox.",

        "Realizar a criptografia das páginas acessadas.",

        "Controlar o tráfego de dados entre computadores."

    ],

    correta: 1,

    feedbackAcerto:
`Mecanismos de busca, como Google e Bing, permitem localizar informações na Web a partir de palavras-chave fornecidas pelo usuário.`,

    feedbackErro:
`A alternativa correta é a letra B. Os motores de busca indexam páginas da Internet e permitem que os usuários encontrem conteúdos de forma rápida e organizada.`,

    dicaBanca:
`Google, Bing e Yahoo são exemplos clássicos de mecanismos de busca cobrados em concursos.`

},

{
    pergunta: "Ao utilizar aspas duplas em uma pesquisa realizada no Google, o mecanismo de busca tende a:",

    alternativas: [

        "Pesquisar apenas arquivos em formato PDF.",

        "Ignorar palavras comuns da expressão.",

        "Localizar a expressão exatamente como foi digitada.",

        "Traduzir automaticamente os resultados.",

        "Pesquisar somente em sites brasileiros."

    ],

    correta: 2,

    feedbackAcerto:
`O uso de aspas força a busca pela expressão exata, reduzindo resultados que contenham apenas palavras isoladas.`,

    feedbackErro:
`A alternativa correta é a letra C. As aspas indicam ao mecanismo de busca que a sequência de palavras deve ser encontrada exatamente na ordem informada.`,

    dicaBanca:
`Questões de pesquisa avançada costumam explorar operadores simples como aspas e sinais de exclusão.`

},

{
    pergunta: "Em uma pesquisa na Internet, o uso de operadores avançados tem como principal objetivo:",

    alternativas: [

        "Aumentar a velocidade da conexão.",

        "Restringir ou refinar os resultados apresentados pelo mecanismo de busca.",

        "Criptografar os dados pesquisados.",

        "Bloquear anúncios em páginas da Web.",

        "Substituir a utilização de palavras-chave."

    ],

    correta: 1,

    feedbackAcerto:
`Operadores avançados permitem refinar pesquisas, tornando os resultados mais precisos e relevantes para o usuário.`,

    feedbackErro:
`A alternativa correta é a letra B. Operadores de pesquisa são utilizados para restringir ou melhorar a qualidade dos resultados obtidos.`,

    dicaBanca:
`Quando a questão mencionar pesquisa avançada, normalmente a resposta envolve refinamento de resultados.`

},

{
    pergunta: "Em um endereço de correio eletrônico como usuario@empresa.com.br, o símbolo @ tem a função de:",

    alternativas: [

        "Indicar que a mensagem possui anexo.",

        "Separar o nome do usuário do domínio do serviço de e-mail.",

        "Identificar mensagens criptografadas.",

        "Indicar prioridade alta da mensagem.",

        "Substituir o protocolo de envio de e-mails."

    ],

    correta: 1,

    feedbackAcerto:
`O símbolo @ separa a identificação do usuário do domínio onde a conta de e-mail está hospedada.`,

    feedbackErro:
`A alternativa correta é a letra B. Em um endereço eletrônico, a parte anterior ao @ identifica o usuário e a posterior identifica o domínio do provedor ou organização.`,

    dicaBanca:
`Questão clássica de concursos. Saiba identificar corretamente as partes de um endereço eletrônico.`

},

{
    pergunta: "O serviço de Webmail caracteriza-se por:",

    alternativas: [

        "Permitir acesso ao correio eletrônico diretamente por meio de um navegador da Web.",

        "Funcionar exclusivamente em redes corporativas.",

        "Exigir obrigatoriamente um software instalado no computador.",

        "Permitir apenas o recebimento de mensagens.",

        "Ser utilizado exclusivamente em dispositivos móveis."

    ],

    correta: 0,

    feedbackAcerto:
`Webmail é o acesso ao correio eletrônico por meio de navegadores como Chrome, Firefox ou Edge, sem necessidade de programas específicos.`,

    feedbackErro:
`A alternativa correta é a letra A. Serviços como Gmail e Outlook Web são exemplos de Webmail, acessados diretamente pela Internet.`,

    dicaBanca:
`Webmail = acesso via navegador. Cliente de e-mail = programa instalado.`

},

{
    pergunta: "Ao enviar uma mensagem eletrônica para vários destinatários, o campo CC (Com Cópia) tem como finalidade:",

    alternativas: [

        "Ocultar todos os destinatários da mensagem.",

        "Enviar a mensagem apenas ao remetente.",

        "Encaminhar uma cópia visível da mensagem para outros destinatários.",

        "Anexar automaticamente arquivos ao e-mail.",

        "Excluir os destinatários principais."

    ],

    correta: 2,

    feedbackAcerto:
`O campo CC permite que outros destinatários recebam uma cópia da mensagem, com seus endereços visíveis para os demais participantes.`,

    feedbackErro:
`A alternativa correta é a letra C. O campo CC é utilizado para enviar cópias da mensagem a outros destinatários mantendo a visibilidade dos endereços.`,

    dicaBanca:
`CC = Com Cópia. Todos veem quem recebeu a mensagem.`

},

{
    pergunta: "Em relação ao campo CCO (Com Cópia Oculta), assinale a alternativa correta.",

    alternativas: [

        "Os destinatários inseridos em CCO ficam ocultos para os demais destinatários.",

        "O campo CCO impede o envio de anexos.",

        "O campo CCO só pode ser utilizado em mensagens corporativas.",

        "As mensagens enviadas em CCO não chegam ao destinatário.",

        "O campo CCO é utilizado exclusivamente para responder mensagens."

    ],

    correta: 0,

    feedbackAcerto:
`Os destinatários inseridos em CCO recebem a mensagem normalmente, mas seus endereços não são exibidos aos demais participantes.`,

    feedbackErro:
`A alternativa correta é a letra A. O recurso CCO é amplamente utilizado para preservar a privacidade dos destinatários.`,

    dicaBanca:
`CCO = Com Cópia Oculta. Os destinatários ficam escondidos dos demais.`

},

{
    pergunta: "Em sistemas de correio eletrônico, um anexo corresponde a:",

    alternativas: [

        "Uma assinatura digital obrigatória.",

        "Um arquivo enviado juntamente com a mensagem.",

        "Uma cópia automática do e-mail.",

        "Um mecanismo de criptografia.",

        "Um endereço alternativo de resposta."

    ],

    correta: 1,

    feedbackAcerto:
`Anexos são arquivos enviados junto à mensagem, como documentos, imagens, planilhas, apresentações ou outros tipos de conteúdo.`,

    feedbackErro:
`A alternativa correta é a letra B. O anexo permite transferir arquivos juntamente com a mensagem eletrônica.`,

    dicaBanca:
`Anexo = arquivo associado ao e-mail.`

},

{
    pergunta: "Em correio eletrônico, a pasta ou caixa de entrada tem como principal finalidade:",

    alternativas: [

        "Armazenar mensagens enviadas pelo usuário.",

        "Armazenar mensagens recebidas pelo usuário.",

        "Guardar exclusivamente mensagens excluídas.",

        "Armazenar arquivos baixados da Internet.",

        "Registrar apenas mensagens consideradas spam."

    ],

    correta: 1,

    feedbackAcerto:
`A Caixa de Entrada é o local onde ficam armazenadas as mensagens recebidas pelo usuário até que sejam lidas, organizadas ou removidas.`,

    feedbackErro:
`A alternativa correta é a letra B. A Caixa de Entrada reúne os e-mails recebidos, sendo uma das principais pastas de qualquer sistema de correio eletrônico.`,

    dicaBanca:
`Caixa de Entrada = mensagens recebidas. Itens Enviados = mensagens enviadas.`

},

{
    pergunta: "No contexto do correio eletrônico, spam é corretamente definido como:",

    alternativas: [

        "Mensagem enviada com criptografia avançada.",

        "Mensagem recebida de forma automática por servidores corporativos.",

        "Mensagem eletrônica não solicitada, geralmente enviada em massa.",

        "Arquivo anexado a uma mensagem.",

        "Resposta automática enviada pelo destinatário."

    ],

    correta: 2,

    feedbackAcerto:
`Spam é uma mensagem eletrônica não solicitada, normalmente enviada para um grande número de destinatários, frequentemente com fins publicitários ou fraudulentos.`,

    feedbackErro:
`A alternativa correta é a letra C. O termo spam refere-se a mensagens indesejadas enviadas em massa pela Internet.`,

    dicaBanca:
`Nem todo spam contém vírus, mas todo spam é considerado uma mensagem não solicitada.`

},

{
    pergunta: "Uma prática recomendada para reduzir riscos ao utilizar o correio eletrônico é:",

    alternativas: [

        "Abrir todos os anexos recebidos para verificar seu conteúdo.",

        "Compartilhar senhas com colegas de trabalho confiáveis.",

        "Clicar em links recebidos de remetentes desconhecidos.",

        "Verificar a origem da mensagem antes de abrir anexos ou acessar links.",

        "Desabilitar filtros de spam para receber todas as mensagens."

    ],

    correta: 3,

    feedbackAcerto:
`A verificação do remetente e da legitimidade da mensagem é uma das principais medidas de segurança contra golpes e códigos maliciosos.`,

    feedbackErro:
`A alternativa correta é a letra D. Antes de abrir anexos ou acessar links, é fundamental verificar a origem e a confiabilidade da mensagem.`,

    dicaBanca:
`Questões de segurança costumam associar anexos e links suspeitos aos principais vetores de ataque.`

},

{
    pergunta: "O golpe conhecido como phishing tem como objetivo principal:",

    alternativas: [

        "Aumentar a velocidade da navegação na Internet.",

        "Realizar cópias de segurança automáticas.",

        "Obter informações confidenciais por meio de mensagens ou páginas falsas.",

        "Eliminar arquivos temporários do navegador.",

        "Criptografar mensagens eletrônicas."

    ],

    correta: 2,

    feedbackAcerto:
`O phishing busca enganar o usuário para que forneça informações sensíveis, como senhas, dados bancários ou informações pessoais.`,

    feedbackErro:
`A alternativa correta é a letra C. O phishing utiliza técnicas de engenharia social para induzir a vítima a revelar dados confidenciais.`,

    dicaBanca:
`Phishing é um dos temas mais cobrados atualmente em provas de Informática.`

},

{
    pergunta: "Ao observar um cadeado ao lado do endereço de um site e a utilização do protocolo HTTPS, pode-se concluir que:",

    alternativas: [

        "O site está livre de qualquer ameaça ou fraude.",

        "A conexão entre o navegador e o servidor utiliza criptografia.",

        "O site pertence obrigatoriamente a um órgão governamental.",

        "O usuário está navegando em modo anônimo.",

        "O computador está protegido contra vírus."

    ],

    correta: 1,

    feedbackAcerto:
`O HTTPS indica que a comunicação entre o navegador e o servidor é protegida por criptografia, aumentando a segurança dos dados transmitidos.`,

    feedbackErro:
`A alternativa correta é a letra B. O cadeado e o HTTPS indicam uma conexão criptografada, mas não garantem que o site seja totalmente confiável.`,

    dicaBanca:
`HTTPS significa segurança na transmissão dos dados, não garantia absoluta de legitimidade do site.`

},

{
    pergunta: "Os certificados digitais utilizados em conexões seguras na Internet têm como principal finalidade:",

    alternativas: [

        "Aumentar a velocidade do acesso à Internet.",

        "Substituir navegadores web.",

        "Comprovar a identidade de sites e permitir conexões seguras.",

        "Armazenar mensagens de correio eletrônico.",

        "Realizar backup automático de arquivos."

    ],

    correta: 2,

    feedbackAcerto:
`Os certificados digitais ajudam a validar a identidade de sites e possibilitam o uso de conexões criptografadas, como HTTPS.`,

    feedbackErro:
`A alternativa correta é a letra C. Os certificados digitais são utilizados para autenticação e proteção das comunicações na Internet.`,

    dicaBanca:
`Certificado Digital = autenticação + segurança da comunicação.`

},

{
    pergunta: "Sobre segurança na Internet, assinale a alternativa correta.",

    alternativas: [

        "Senhas fortes devem conter apenas números para facilitar a memorização.",

        "O compartilhamento de senhas é recomendado em ambientes corporativos.",

        "Atualizações de segurança podem corrigir vulnerabilidades em sistemas e aplicativos.",

        "O antivírus elimina a necessidade de cuidados durante a navegação.",

        "Sites HTTPS dispensam qualquer atenção do usuário quanto a golpes."

    ],

    correta: 2,

    feedbackAcerto:
`Atualizações de segurança são fundamentais para corrigir falhas e vulnerabilidades exploradas por invasores.`,

    feedbackErro:
`A alternativa correta é a letra C. Manter sistemas e aplicativos atualizados é uma das principais boas práticas de segurança digital.`,

    dicaBanca:
`Bancas modernas valorizam conceitos de atualização, prevenção e boas práticas de segurança.`

},
{
    pergunta: "Em redes de computadores e na Internet, o termo Upload refere-se à operação de:",

    alternativas: [

        "Transferir dados da Internet para o computador do usuário.",

        "Enviar arquivos ou informações do dispositivo do usuário para outro computador ou servidor.",

        "Excluir arquivos armazenados na nuvem.",

        "Copiar arquivos entre pastas do mesmo computador.",

        "Criptografar dados transmitidos pela Internet."

    ],

    correta: 1,

    feedbackAcerto:
`Upload é o envio de dados do dispositivo do usuário para outro computador, servidor ou serviço na Internet. Um exemplo é anexar um arquivo em um e-mail ou enviar um documento para o Google Drive.`,

    feedbackErro:
`A alternativa correta é a letra B. Upload significa enviar dados para a Internet ou para outro dispositivo conectado à rede.`,

    dicaBanca:
`Decore: Upload = enviar. Download = receber.`

},

{
    pergunta: "Sobre Internet, Intranet e Extranet, assinale a alternativa correta.",

    alternativas: [

        "Internet e Intranet são sinônimos.",

        "A Extranet é uma rede mundial pública acessível a qualquer usuário.",

        "A Intranet é uma rede privada utilizada internamente por uma organização.",

        "A Internet é restrita aos funcionários de uma empresa.",

        "A Extranet substitui totalmente a Internet."

    ],

    correta: 2,

    feedbackAcerto:
`A Intranet é uma rede privada utilizada dentro de organizações para compartilhamento de informações e recursos entre usuários autorizados.`,

    feedbackErro:
`A alternativa correta é a letra C. Internet é pública, Intranet é privada e Extranet permite acesso controlado a usuários externos autorizados.`,

    dicaBanca:
`IVIN e Ágata costumam cobrar diretamente as diferenças entre Internet, Intranet e Extranet.`

},

{
    pergunta: "Em uma URL como https://www.concursos.com.br/edital.pdf, o trecho 'www.concursos.com.br' corresponde ao:",

    alternativas: [

        "Protocolo de comunicação.",

        "Domínio do site.",

        "Arquivo acessado.",

        "Navegador utilizado.",

        "Certificado digital."

    ],

    correta: 1,

    feedbackAcerto:
`O domínio identifica o site ou serviço acessado na Internet. No exemplo, 'www.concursos.com.br' é o domínio.`,

    feedbackErro:
`A alternativa correta é a letra B. O domínio é a identificação textual utilizada para localizar sites na Internet.`,

    dicaBanca:
`Questões de URL costumam cobrar protocolo, domínio e caminho do arquivo.`

},

{
    pergunta: "Assinale a alternativa que apresenta corretamente uma diferença entre Webmail e Cliente de E-mail.",

    alternativas: [

        "Webmail exige instalação obrigatória no computador.",

        "Cliente de e-mail só funciona em navegadores.",

        "Webmail é acessado via navegador, enquanto clientes de e-mail são programas instalados no dispositivo.",

        "Não existe diferença entre eles.",

        "Webmail não permite anexar arquivos."

    ],

    correta: 2,

    feedbackAcerto:
`Webmail é acessado por navegadores como Chrome ou Edge. Já clientes de e-mail, como Outlook e Thunderbird, são programas instalados.`,

    feedbackErro:
`A alternativa correta é a letra C. Essa é uma diferença clássica cobrada por diversas bancas.`,

    dicaBanca:
`Gmail pelo navegador = Webmail. Outlook instalado = Cliente de E-mail.`

},

{
    pergunta: "Em serviços de correio eletrônico, a pasta Rascunhos é utilizada para:",

    alternativas: [

        "Armazenar mensagens recebidas.",

        "Armazenar mensagens excluídas.",

        "Guardar mensagens que ainda não foram enviadas.",

        "Registrar mensagens classificadas como spam.",

        "Armazenar anexos baixados."

    ],

    correta: 2,

    feedbackAcerto:
`A pasta Rascunhos armazena mensagens que estão sendo elaboradas ou que foram salvas antes do envio definitivo.`,

    feedbackErro:
`A alternativa correta é a letra C. Rascunhos são mensagens não enviadas que permanecem salvas para edição posterior.`,

    dicaBanca:
`Saiba a função das principais pastas: Caixa de Entrada, Enviados, Rascunhos, Spam e Lixeira.`

},
];
