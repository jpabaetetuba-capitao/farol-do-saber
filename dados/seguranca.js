const seguranca = [

{
    pergunta: "A Segurança da Informação pode ser definida como o conjunto de medidas destinadas a:",

    alternativas: [

        "Aumentar exclusivamente a velocidade dos computadores.",

        "Garantir a proteção das informações contra acessos, alterações ou destruições não autorizadas.",

        "Substituir sistemas operacionais vulneráveis.",

        "Eliminar a necessidade de backups.",

        "Impedir totalmente o uso da Internet."

    ],

    correta: 1,

    feedbackAcerto:
`A Segurança da Informação busca proteger os dados e garantir que estejam acessíveis apenas a pessoas autorizadas, preservando sua confiabilidade e disponibilidade.`,

    feedbackErro:
`A alternativa correta é a letra B. Segurança da Informação envolve políticas, procedimentos e tecnologias voltados à proteção das informações.`,

    dicaBanca:
`Questão clássica de conceito geral. Segurança da Informação protege dados contra acesso, alteração ou destruição indevida.`

},

{
    pergunta: "O princípio da Confidencialidade está relacionado à:",

    alternativas: [

        "Garantia de que a informação esteja disponível quando necessária.",

        "Proteção da informação contra acesso por pessoas não autorizadas.",

        "Garantia de que a informação não sofreu alterações.",

        "Capacidade de recuperar arquivos apagados.",

        "Velocidade de transmissão dos dados."

    ],

    correta: 1,

    feedbackAcerto:
`Confidencialidade significa que apenas pessoas autorizadas podem acessar determinadas informações.`,

    feedbackErro:
`A alternativa correta é a letra B. A Confidencialidade protege as informações contra divulgação indevida.`,

    dicaBanca:
`Confidencialidade = sigilo da informação.`

},

{
    pergunta: "O princípio da Integridade tem como objetivo assegurar que:",

    alternativas: [

        "A informação permaneça correta e não seja alterada indevidamente.",

        "A informação esteja disponível 24 horas por dia.",

        "Apenas usuários autorizados possam acessar a rede.",

        "Os dados sejam armazenados em nuvem.",

        "O acesso seja realizado por biometria."

    ],

    correta: 0,

    feedbackAcerto:
`Integridade garante que os dados permaneçam completos, corretos e sem alterações não autorizadas.`,

    feedbackErro:
`A alternativa correta é a letra A. A Integridade protege a exatidão e consistência das informações.`,

    dicaBanca:
`Integridade = informação íntegra, sem adulteração.`

},

{
    pergunta: "O princípio da Disponibilidade refere-se à garantia de que:",

    alternativas: [

        "Os dados não possam ser copiados.",

        "A informação esteja acessível aos usuários autorizados quando necessária.",

        "As informações sejam criptografadas.",

        "Os computadores estejam desligados fora do expediente.",

        "As senhas sejam alteradas diariamente."

    ],

    correta: 1,

    feedbackAcerto:
`Disponibilidade garante que sistemas, serviços e informações estejam acessíveis quando requisitados por usuários autorizados.`,

    feedbackErro:
`A alternativa correta é a letra B. Um sistema indisponível compromete um dos pilares fundamentais da Segurança da Informação.`,

    dicaBanca:
`Disponibilidade = acesso quando necessário.`

},

{
    pergunta: "O princípio da Autenticidade está relacionado à capacidade de:",

    alternativas: [

        "Garantir que a informação ou usuário seja realmente quem afirma ser.",

        "Eliminar vírus automaticamente.",

        "Aumentar a velocidade da rede.",

        "Realizar backups periódicos.",

        "Compartilhar informações sem restrições."

    ],

    correta: 0,

    feedbackAcerto:
`Autenticidade garante a verificação da identidade de usuários, sistemas ou informações.`,

    feedbackErro:
`A alternativa correta é a letra A. A Autenticidade permite confirmar a origem e a legitimidade das informações.`,

    dicaBanca:
`Autenticidade = comprovação da identidade ou origem da informação.`

},
{
    pergunta: "Em Segurança da Informação, o termo malware é utilizado para designar:",

    alternativas: [

        "Qualquer equipamento utilizado em redes de computadores.",

        "Um software desenvolvido para proteger sistemas contra ameaças.",

        "Um programa malicioso criado para causar danos, coletar informações ou comprometer sistemas.",

        "Um mecanismo de criptografia de dados.",

        "Um protocolo utilizado na Internet."

    ],

    correta: 2,

    feedbackAcerto:
`Malware é o termo genérico utilizado para programas maliciosos, como vírus, worms, trojans, spyware e ransomware.`,

    feedbackErro:
`A alternativa correta é a letra C. Malware significa software malicioso desenvolvido para causar prejuízos ou obter vantagens indevidas.`,

    dicaBanca:
`Malware é um gênero. Vírus, worm e trojan são espécies de malware.`

},

{
    pergunta: "Um vírus de computador caracteriza-se por:",

    alternativas: [

        "Propagar-se automaticamente sem necessidade de hospedeiro.",

        "Necessitar estar associado a um arquivo ou programa para se disseminar.",

        "Ser exclusivamente utilizado para espionagem.",

        "Bloquear redes sem infectar arquivos.",

        "Atuar apenas em dispositivos móveis."

    ],

    correta: 1,

    feedbackAcerto:
`O vírus precisa infectar arquivos ou programas para ser executado e se propagar para outros sistemas.`,

    feedbackErro:
`A alternativa correta é a letra B. Diferentemente dos worms, os vírus dependem de um arquivo hospedeiro para se espalhar.`,

    dicaBanca:
`Vírus = precisa de hospedeiro. Worm = não precisa.`

},

{
    pergunta: "O worm (verme) diferencia-se dos vírus tradicionais porque:",

    alternativas: [

        "Não é considerado malware.",

        "Propaga-se automaticamente pelas redes sem necessidade de arquivo hospedeiro.",

        "Atua exclusivamente em navegadores web.",

        "É incapaz de causar danos aos sistemas.",

        "Necessita sempre da ação manual do usuário."

    ],

    correta: 1,

    feedbackAcerto:
`Os worms possuem capacidade de autorreplicação e podem se espalhar automaticamente pela rede.`,

    feedbackErro:
`A alternativa correta é a letra B. A principal característica do worm é a propagação automática sem necessidade de infectar arquivos.`,

    dicaBanca:
`Worm = autorreplicação automática.`

},

{
    pergunta: "O Cavalo de Troia (Trojan Horse) recebe esse nome porque:",

    alternativas: [

        "É um programa legítimo utilizado para criptografia.",

        "Se apresenta como software confiável, mas executa ações maliciosas ocultas.",

        "Atua exclusivamente em redes militares.",

        "É utilizado para realizar backups automáticos.",

        "Possui capacidade de corrigir vulnerabilidades."

    ],

    correta: 1,

    feedbackAcerto:
`O Trojan engana o usuário ao parecer legítimo, mas executa funções maliciosas sem seu conhecimento.`,

    feedbackErro:
`A alternativa correta é a letra B. O Cavalo de Troia utiliza técnicas de disfarce para induzir o usuário à instalação.`,

    dicaBanca:
`Trojan = disfarce. Não possui autorreplicação própria como o worm.`

},

{
    pergunta: "O ransomware é um tipo de malware cujo principal objetivo é:",

    alternativas: [

        "Aumentar a velocidade da rede.",

        "Bloquear ou criptografar dados da vítima para exigir pagamento pelo desbloqueio.",

        "Exibir anúncios publicitários.",

        "Atualizar sistemas automaticamente.",

        "Controlar impressoras compartilhadas."

    ],

    correta: 1,

    feedbackAcerto:
`O ransomware sequestra informações, geralmente por criptografia, exigindo resgate para liberar o acesso aos dados.`,

    feedbackErro:
`A alternativa correta é a letra B. O ransomware é uma das ameaças mais perigosas da atualidade devido ao bloqueio dos dados da vítima.`,

    dicaBanca:
`Ransom = resgate. Ransomware = malware de sequestro de dados.`

},
{
    pergunta: "O spyware é um tipo de malware desenvolvido principalmente para:",

    alternativas: [

        "Aumentar a velocidade da conexão com a Internet.",

        "Monitorar atividades e coletar informações do usuário sem autorização.",

        "Realizar backups automáticos.",

        "Criptografar arquivos para exigir resgate.",

        "Bloquear o funcionamento de impressoras."

    ],

    correta: 1,

    feedbackAcerto:
`O spyware é um software espião criado para monitorar atividades, coletar dados e transmitir informações sem o conhecimento do usuário.`,

    feedbackErro:
`A alternativa correta é a letra B. O spyware tem como principal objetivo a espionagem e coleta indevida de informações.`,

    dicaBanca:
`Spy = espião. Spyware = software espião.`

},

{
    pergunta: "O adware é um software que:",

    alternativas: [

        "Tem como principal finalidade exibir anúncios publicitários ao usuário.",

        "Realiza criptografia de dados corporativos.",

        "Impede o acesso à Internet.",

        "Substitui programas antivírus.",

        "É utilizado para autenticação biométrica."

    ],

    correta: 0,

    feedbackAcerto:
`O adware exibe propagandas e anúncios, muitas vezes de forma excessiva ou indesejada.`,

    feedbackErro:
`A alternativa correta é a letra A. O objetivo principal do adware é a exibição de publicidade.`,

    dicaBanca:
`Ad = advertisement (propaganda). Adware = software de anúncios.`

},

{
    pergunta: "Um keylogger é um programa malicioso utilizado para:",

    alternativas: [

        "Monitorar e registrar teclas digitadas pelo usuário.",

        "Aumentar a velocidade do teclado.",

        "Proteger senhas contra invasões.",

        "Realizar cópias de segurança automáticas.",

        "Atualizar sistemas operacionais."

    ],

    correta: 0,

    feedbackAcerto:
`O keylogger registra tudo o que é digitado, podendo capturar senhas, dados bancários e outras informações confidenciais.`,

    feedbackErro:
`A alternativa correta é a letra A. O keylogger é uma ferramenta frequentemente utilizada para roubo de credenciais.`,

    dicaBanca:
`Key = tecla. Logger = registrador. Keylogger = registrador de teclas.`

},

{
    pergunta: "O phishing é uma técnica utilizada por criminosos para:",

    alternativas: [

        "Melhorar a segurança dos sistemas.",

        "Obter informações confidenciais por meio de mensagens, páginas ou comunicações falsas.",

        "Realizar backups automáticos.",

        "Corrigir vulnerabilidades em computadores.",

        "Aumentar a velocidade da Internet."

    ],

    correta: 1,

    feedbackAcerto:
`O phishing utiliza fraude e engano para induzir vítimas a fornecer senhas, dados bancários ou informações pessoais.`,

    feedbackErro:
`A alternativa correta é a letra B. O phishing explora a confiança da vítima para obter dados sigilosos.`,

    dicaBanca:
`Phishing é um dos temas mais cobrados atualmente em concursos.`

},

{
    pergunta: "A Engenharia Social caracteriza-se por:",

    alternativas: [

        "Ataques exclusivamente realizados por softwares maliciosos.",

        "Técnicas que exploram falhas humanas para obter informações ou acesso indevido.",

        "Métodos de criptografia avançada.",

        "Ferramentas utilizadas para bloquear vírus.",

        "Processos automáticos de backup."

    ],

    correta: 1,

    feedbackAcerto:
`A Engenharia Social busca manipular pessoas para que revelem informações ou executem ações que comprometam a segurança.`,

    feedbackErro:
`A alternativa correta é a letra B. Muitas invasões bem-sucedidas exploram o comportamento humano em vez de falhas técnicas.`,

    dicaBanca:
`O elo mais fraco da segurança costuma ser o fator humano.`

},

{
    pergunta: "A principal função de um software antivírus é:",

    alternativas: [

        "Aumentar a velocidade da conexão com a Internet.",

        "Detectar, bloquear e remover códigos maliciosos dos sistemas.",

        "Substituir o sistema operacional do computador.",

        "Gerenciar impressoras de rede.",

        "Realizar criptografia de arquivos automaticamente."

    ],

    correta: 1,

    feedbackAcerto:
`Os antivírus são ferramentas desenvolvidas para identificar, bloquear e remover ameaças como vírus, worms e outros malwares.`,

    feedbackErro:
`A alternativa correta é a letra B. O antivírus atua na prevenção, detecção e remoção de softwares maliciosos.`,

    dicaBanca:
`Antivírus não substitui outras medidas de segurança, como firewall e atualizações.`

},

{
    pergunta: "O firewall pode ser definido como:",

    alternativas: [

        "Um programa destinado exclusivamente à remoção de vírus.",

        "Um mecanismo de proteção que controla e filtra o tráfego de dados entre redes ou dispositivos.",

        "Um tipo de malware utilizado para espionagem.",

        "Uma ferramenta de backup em nuvem.",

        "Um sistema de compactação de arquivos."

    ],

    correta: 1,

    feedbackAcerto:
`O firewall monitora e controla o tráfego de rede, permitindo ou bloqueando comunicações conforme regras de segurança.`,

    feedbackErro:
`A alternativa correta é a letra B. O firewall atua como uma barreira de proteção contra acessos indevidos.`,

    dicaBanca:
`Firewall = filtro de tráfego de rede.`

},

{
    pergunta: "Um software antispyware é utilizado para:",

    alternativas: [

        "Criar redes sem fio.",

        "Detectar e remover programas espiões (spywares).",

        "Gerenciar usuários de uma rede corporativa.",

        "Executar backups automáticos.",

        "Criptografar discos rígidos."

    ],

    correta: 1,

    feedbackAcerto:
`O antispyware é especializado na identificação e remoção de softwares espiões que coletam informações sem autorização.`,

    feedbackErro:
`A alternativa correta é a letra B. O antispyware atua especificamente contra spywares e programas semelhantes.`,

    dicaBanca:
`Antivírus é mais amplo; antispyware é especializado em programas espiões.`

},

{
    pergunta: "Manter sistemas operacionais e aplicativos atualizados é importante porque:",

    alternativas: [

        "Impede completamente qualquer ataque cibernético.",

        "Elimina a necessidade de antivírus.",

        "Corrige falhas e vulnerabilidades que podem ser exploradas por invasores.",

        "Aumenta apenas a capacidade de armazenamento do computador.",

        "Substitui o uso de senhas fortes."

    ],

    correta: 2,

    feedbackAcerto:
`As atualizações frequentemente corrigem vulnerabilidades de segurança descobertas pelos fabricantes ou pesquisadores.`,

    feedbackErro:
`A alternativa correta é a letra C. Sistemas desatualizados costumam ser alvos mais fáceis para ataques.`,

    dicaBanca:
`Atualização de segurança é uma das principais medidas preventivas cobradas em concursos.`

},

{
    pergunta: "A criptografia é uma técnica utilizada para:",

    alternativas: [

        "Aumentar a velocidade da rede.",

        "Transformar informações em formato protegido, tornando-as compreensíveis apenas para quem possui autorização.",

        "Eliminar vírus automaticamente.",

        "Substituir certificados digitais.",

        "Realizar cópias de segurança."

    ],

    correta: 1,

    feedbackAcerto:
`A criptografia protege a confidencialidade das informações por meio da codificação dos dados.`,

    feedbackErro:
`A alternativa correta é a letra B. A criptografia é amplamente utilizada para proteger dados armazenados e transmitidos.`,

    dicaBanca:
`Criptografia = proteção da informação por codificação.`

},

{
    pergunta: "Uma senha considerada forte deve:",

    alternativas: [

        "Conter apenas números para facilitar a memorização.",

        "Ser composta exclusivamente pelo nome do usuário.",

        "Combinar letras maiúsculas, minúsculas, números e caracteres especiais.",

        "Ser compartilhada com colegas de confiança.",

        "Ser utilizada por várias pessoas do mesmo setor."

    ],

    correta: 2,

    feedbackAcerto:
`Senhas fortes combinam diferentes tipos de caracteres e evitam informações fáceis de adivinhar, aumentando a segurança da conta.`,

    feedbackErro:
`A alternativa correta é a letra C. Quanto maior a complexidade da senha, mais difícil será sua descoberta por atacantes.`,

    dicaBanca:
`Evite datas de nascimento, nomes e sequências simples como 123456.`

},

{
    pergunta: "Em Segurança da Informação, autenticação é o processo de:",

    alternativas: [

        "Realizar backup dos dados.",

        "Verificar a identidade de um usuário, sistema ou dispositivo.",

        "Criptografar arquivos automaticamente.",

        "Compartilhar informações na rede.",

        "Eliminar códigos maliciosos."

    ],

    correta: 1,

    feedbackAcerto:
`A autenticação tem como objetivo confirmar que o usuário é realmente quem afirma ser.`,

    feedbackErro:
`A alternativa correta é a letra B. A autenticação é um dos mecanismos fundamentais de controle de acesso.`,

    dicaBanca:
`Autenticação = confirmação da identidade.`

},

{
    pergunta: "A autenticação em dois fatores (2FA) aumenta a segurança porque:",

    alternativas: [

        "Substitui completamente as senhas.",

        "Exige duas formas independentes de verificação para conceder acesso.",

        "Impede qualquer tipo de invasão.",

        "Funciona apenas em dispositivos móveis.",

        "Elimina a necessidade de criptografia."

    ],

    correta: 1,

    feedbackAcerto:
`O 2FA adiciona uma camada extra de proteção, exigindo uma segunda verificação além da senha.`,

    feedbackErro:
`A alternativa correta é a letra B. A autenticação em dois fatores reduz significativamente o risco de acessos indevidos.`,

    dicaBanca:
`Exemplo: senha + código recebido no celular.`

},

{
    pergunta: "A biometria é um método de autenticação baseado em:",

    alternativas: [

        "Endereços IP.",

        "Características físicas ou comportamentais do indivíduo.",

        "Protocolos de rede.",

        "Programas antivírus.",

        "Serviços de backup."

    ],

    correta: 1,

    feedbackAcerto:
`A biometria utiliza características únicas, como impressão digital, reconhecimento facial ou íris, para validar a identidade.`,

    feedbackErro:
`A alternativa correta é a letra B. Métodos biométricos utilizam atributos próprios do indivíduo.`,

    dicaBanca:
`Impressão digital e reconhecimento facial são exemplos clássicos de biometria.`

},

{
    pergunta: "Os certificados digitais têm como principal finalidade:",

    alternativas: [

        "Aumentar a velocidade da Internet.",

        "Garantir autenticidade, integridade e identificação em transações eletrônicas.",

        "Substituir sistemas operacionais.",

        "Eliminar a necessidade de senhas.",

        "Realizar backups automáticos."

    ],

    correta: 1,

    feedbackAcerto:
`Os certificados digitais permitem comprovar identidades e proteger comunicações eletrônicas por meio de mecanismos criptográficos.`,

    feedbackErro:
`A alternativa correta é a letra B. Certificados digitais são amplamente utilizados para autenticação e assinatura digital.`,

    dicaBanca:
`Certificado Digital = identidade eletrônica confiável.`

},
{
    pergunta: "Em Segurança da Informação, backup é definido como:",

    alternativas: [

        "Um mecanismo utilizado para remover vírus automaticamente.",

        "Uma cópia de segurança dos dados destinada à recuperação em caso de perda ou dano.",

        "Um sistema de criptografia de arquivos.",

        "Um método de autenticação de usuários.",

        "Um tipo de firewall."

    ],

    correta: 1,

    feedbackAcerto:
`Backup é uma cópia de segurança criada para possibilitar a recuperação de informações em situações de falha, exclusão acidental ou ataques.`,

    feedbackErro:
`A alternativa correta é a letra B. O objetivo principal do backup é permitir a restauração dos dados quando necessário.`,

    dicaBanca:
`Backup = cópia de segurança.`

},

{
    pergunta: "O backup completo (Full Backup) caracteriza-se por:",

    alternativas: [

        "Copiar apenas os arquivos alterados desde o último backup.",

        "Copiar somente arquivos novos.",

        "Realizar uma cópia integral dos dados selecionados.",

        "Armazenar exclusivamente senhas do sistema.",

        "Funcionar apenas em ambientes corporativos."

    ],

    correta: 2,

    feedbackAcerto:
`O backup completo copia todos os arquivos selecionados, facilitando a recuperação dos dados.`,

    feedbackErro:
`A alternativa correta é a letra C. O Full Backup realiza uma cópia integral das informações escolhidas.`,

    dicaBanca:
`Backup completo = maior tempo e maior espaço de armazenamento.`

},

{
    pergunta: "O backup incremental tem como característica principal:",

    alternativas: [

        "Copiar todos os dados em cada execução.",

        "Copiar apenas os arquivos alterados desde o último backup realizado.",

        "Armazenar exclusivamente arquivos de sistema.",

        "Substituir a necessidade de backup completo.",

        "Funcionar apenas em servidores."

    ],

    correta: 1,

    feedbackAcerto:
`O backup incremental registra apenas as alterações ocorridas após o último backup, economizando tempo e espaço.`,

    feedbackErro:
`A alternativa correta é a letra B. O incremental copia somente os dados modificados desde a última operação de backup.`,

    dicaBanca:
`Incremental = apenas mudanças recentes.`

},

{
    pergunta: "O armazenamento em nuvem (cloud storage) permite:",

    alternativas: [

        "Armazenar dados em servidores acessíveis pela Internet.",

        "Eliminar completamente os riscos de perda de dados.",

        "Substituir todos os mecanismos de segurança.",

        "Utilizar arquivos apenas em modo offline.",

        "Dispensar o uso de senhas."

    ],

    correta: 0,

    feedbackAcerto:
`A computação em nuvem possibilita armazenar e acessar arquivos remotamente por meio da Internet.`,

    feedbackErro:
`A alternativa correta é a letra A. Serviços de nuvem permitem armazenamento remoto e sincronização de dados.`,

    dicaBanca:
`Google Drive, OneDrive e Dropbox são exemplos clássicos.`

},

{
    pergunta: "Assinale a alternativa que apresenta uma boa prática de Segurança da Informação.",

    alternativas: [

        "Utilizar a mesma senha em todos os serviços.",

        "Compartilhar credenciais com colegas de trabalho.",

        "Ignorar atualizações de segurança para evitar incompatibilidades.",

        "Realizar backups periódicos e manter sistemas atualizados.",

        "Abrir anexos de remetentes desconhecidos."

    ],

    correta: 3,

    feedbackAcerto:
`Backups regulares e atualizações frequentes estão entre as medidas mais importantes para reduzir riscos de segurança.`,

    feedbackErro:
`A alternativa correta é a letra D. Boas práticas incluem atualização de sistemas, backups e cuidados com senhas e arquivos suspeitos.`,

    dicaBanca:
`Questões de boas práticas costumam reunir várias medidas preventivas na mesma alternativa.`

},
{
    pergunta: "A Lei Geral de Proteção de Dados (LGPD) tem como principal objetivo:",

    alternativas: [

        "Regular exclusivamente o comércio eletrônico.",

        "Proteger os dados pessoais e garantir direitos aos titulares dessas informações.",

        "Controlar o acesso à Internet no Brasil.",

        "Substituir os mecanismos de criptografia.",

        "Criar sistemas operacionais mais seguros."

    ],

    correta: 1,

    feedbackAcerto:
`A LGPD estabelece regras para coleta, armazenamento, tratamento e compartilhamento de dados pessoais, buscando proteger a privacidade dos cidadãos.`,

    feedbackErro:
`A alternativa correta é a letra B. A LGPD visa proteger os dados pessoais e garantir maior controle dos titulares sobre suas informações.`,

    dicaBanca:
`LGPD = proteção de dados pessoais e privacidade.`

},

{
    pergunta: "Um vazamento de dados ocorre quando:",

    alternativas: [

        "Os dados são armazenados em servidores de backup.",

        "Informações são acessadas, divulgadas ou expostas sem autorização.",

        "Os usuários alteram suas senhas regularmente.",

        "Arquivos são compactados para economizar espaço.",

        "A rede opera em alta velocidade."

    ],

    correta: 1,

    feedbackAcerto:
`O vazamento de dados envolve a exposição indevida de informações, podendo causar prejuízos financeiros, legais e reputacionais.`,

    feedbackErro:
`A alternativa correta é a letra B. Vazamentos ocorrem quando dados são acessados ou divulgados sem autorização.`,

    dicaBanca:
`Vazamento de dados é um tema muito atual e frequentemente relacionado à LGPD.`

},

{
    pergunta: "Uma medida recomendada para aumentar a segurança de uma rede Wi-Fi é:",

    alternativas: [

        "Manter a rede sem senha para facilitar o acesso.",

        "Utilizar senhas fortes e mecanismos de criptografia adequados.",

        "Compartilhar a senha em redes sociais.",

        "Desativar qualquer forma de autenticação.",

        "Permitir acesso irrestrito a qualquer dispositivo."

    ],

    correta: 1,

    feedbackAcerto:
`O uso de senhas fortes e protocolos de segurança ajuda a proteger a rede contra acessos não autorizados.`,

    feedbackErro:
`A alternativa correta é a letra B. Redes Wi-Fi devem utilizar autenticação e criptografia para aumentar a proteção.`,

    dicaBanca:
`Wi-Fi seguro = senha forte + criptografia.`

},

{
    pergunta: "Ao receber um e-mail com anexos ou links de origem desconhecida, a atitude mais segura é:",

    alternativas: [

        "Abrir imediatamente para verificar o conteúdo.",

        "Encaminhar a mensagem para todos os contatos.",

        "Executar os anexos para testar se são seguros.",

        "Verificar a origem da mensagem antes de clicar em links ou abrir anexos.",

        "Desativar o antivírus temporariamente."

    ],

    correta: 3,

    feedbackAcerto:
`Mensagens desconhecidas podem conter golpes, malware ou tentativas de phishing. A verificação da origem é fundamental.`,

    feedbackErro:
`A alternativa correta é a letra D. O usuário deve confirmar a procedência da mensagem antes de interagir com links ou anexos.`,

    dicaBanca:
`E-mail suspeito + link suspeito = possível phishing.`

},

{
    pergunta: "Durante a navegação na Internet, uma prática recomendada de segurança é:",

    alternativas: [

        "Ignorar avisos de segurança exibidos pelo navegador.",

        "Fornecer dados pessoais em qualquer site solicitado.",

        "Verificar a confiabilidade dos sites e observar o uso de conexões seguras (HTTPS).",

        "Utilizar a mesma senha em todos os serviços online.",

        "Desativar atualizações automáticas do navegador."

    ],

    correta: 2,

    feedbackAcerto:
`A navegação segura envolve verificar a legitimidade dos sites acessados e utilizar conexões protegidas por HTTPS.`,

    feedbackErro:
`A alternativa correta é a letra C. A análise da confiabilidade dos sites reduz riscos de golpes e roubo de informações.`,

    dicaBanca:
`HTTPS indica comunicação criptografada, embora não garanta sozinho a legitimidade do site.`

},

];
