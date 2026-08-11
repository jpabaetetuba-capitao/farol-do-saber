// Banco de questões de Segurança da Informação - Farol do Saber
// 70 questões revisadas para nível de concurso, organizadas por subtópico.

const seguranca = [
    {
        "pergunta": "Em uma escola, o sistema de notas permite consulta apenas a usuários autorizados. Esse controle está diretamente relacionado ao princípio da:",
        "alternativas": [
            "confidencialidade, pois restringe o acesso à informação a pessoas devidamente autorizadas.",
            "integridade, pois impede que qualquer registro seja alterado durante o período letivo.",
            "disponibilidade, pois mantém o sistema acessível em todos os horários de funcionamento.",
            "autenticidade, pois comprova que todo dado armazenado foi produzido pela direção escolar e validado pelo sistema.",
            "não repúdio, pois impede que um usuário negue ter consultado determinada informação."
        ],
        "correta": 0,
        "feedbackAcerto": "A confidencialidade protege a informação contra acesso por pessoas não autorizadas.",
        "feedbackErro": "A resposta correta é:\n\nconfidencialidade, pois restringe o acesso à informação a pessoas devidamente autorizadas.\n\nComentário:\nA confidencialidade protege a informação contra acesso por pessoas não autorizadas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em prova, associe confidencialidade a acesso autorizado, não a alteração ou disponibilidade.",
        "assunto": "seguranca",
        "id": "seguranca_001",
        "subtopico": "fundamentos e princípios de segurança"
    },
    {
        "pergunta": "Após uma falha, um arquivo de frequência foi restaurado sem alterações indevidas em seu conteúdo. O aspecto de segurança evidenciado é a:",
        "alternativas": [
            "confidencialidade, porque o arquivo passou a exigir senha para qualquer tipo de acesso.",
            "integridade, porque o conteúdo permaneceu correto e protegido contra modificações não autorizadas.",
            "disponibilidade, porque o documento foi mantido aberto para todos os usuários da rede.",
            "autenticidade, porque a restauração substituiu a necessidade de identificar a origem do arquivo em cada recuperação realizada.",
            "privacidade, porque qualquer cópia do documento passou a ser considerada dado anonimizado."
        ],
        "correta": 1,
        "feedbackAcerto": "Integridade está relacionada à exatidão e à proteção contra alterações indevidas.",
        "feedbackErro": "A resposta correta é:\n\nintegridade, porque o conteúdo permaneceu correto e protegido contra modificações não autorizadas.\n\nComentário:\nIntegridade está relacionada à exatidão e à proteção contra alterações indevidas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda integridade com disponibilidade: uma informação pode estar disponível e ainda assim estar adulterada.",
        "assunto": "seguranca",
        "id": "seguranca_002",
        "subtopico": "fundamentos e princípios de segurança"
    },
    {
        "pergunta": "Um portal educacional permanece acessível aos professores durante o período de lançamento de notas, mesmo após a falha de um servidor. O princípio mais diretamente preservado é:",
        "alternativas": [
            "confidencialidade, pois a redundância impede que terceiros conheçam o endereço do servidor.",
            "integridade, pois a existência de outro servidor elimina qualquer possibilidade de alteração dos dados.",
            "disponibilidade, pois o serviço continua acessível aos usuários autorizados quando necessário.",
            "autenticidade, pois a continuidade do serviço comprova automaticamente a identidade dos usuários.",
            "não repúdio, pois a redundância registra de forma definitiva todas as operações realizadas."
        ],
        "correta": 2,
        "feedbackAcerto": "Disponibilidade busca assegurar que sistemas e informações estejam acessíveis quando necessários.",
        "feedbackErro": "A resposta correta é:\n\ndisponibilidade, pois o serviço continua acessível aos usuários autorizados quando necessário.\n\nComentário:\nDisponibilidade busca assegurar que sistemas e informações estejam acessíveis quando necessários.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Redundância e continuidade de serviço costumam apontar para disponibilidade.",
        "assunto": "seguranca",
        "id": "seguranca_003",
        "subtopico": "fundamentos e princípios de segurança"
    },
    {
        "pergunta": "Um servidor recebe um arquivo assinado digitalmente e verifica se a assinatura pertence ao remetente indicado. Nesse cenário, a verificação reforça principalmente a:",
        "alternativas": [
            "disponibilidade, ao garantir que o arquivo permaneça acessível mesmo sem conexão com a rede.",
            "confidencialidade, ao impedir que qualquer destinatário autorizado visualize o conteúdo do arquivo.",
            "integridade física, ao assegurar que o dispositivo de armazenamento não apresente defeitos.",
            "autenticidade, ao permitir verificar a identidade ou a origem associada à informação recebida.",
            "anonimização, ao remover elementos que permitam identificar o autor da mensagem transmitida."
        ],
        "correta": 3,
        "feedbackAcerto": "Autenticidade está ligada à comprovação de identidade ou origem.",
        "feedbackErro": "A resposta correta é:\n\nautenticidade, ao permitir verificar a identidade ou a origem associada à informação recebida.\n\nComentário:\nAutenticidade está ligada à comprovação de identidade ou origem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Quando a questão fala em confirmar quem é o usuário ou a origem de um dado, pense em autenticidade.",
        "assunto": "seguranca",
        "id": "seguranca_004",
        "subtopico": "fundamentos e princípios de segurança"
    },
    {
        "pergunta": "Uma organização adota firewall, autenticação multifator, antivírus e cópias de segurança em vez de depender de uma única barreira. Essa estratégia exemplifica:",
        "alternativas": [
            "segregação de funções, porque cada controle passa a ser administrado por um usuário diferente.",
            "autenticação federada, porque todos os controles passam a utilizar a mesma credencial institucional.",
            "minimização de dados, porque as informações deixam de ser armazenadas em diferentes sistemas.",
            "criptografia assimétrica, porque cada camada depende de um par de chaves para funcionar corretamente.",
            "defesa em profundidade, porque utiliza camadas complementares de proteção para reduzir o risco."
        ],
        "correta": 4,
        "feedbackAcerto": "Defesa em profundidade combina controles diferentes para que a falha de uma camada não deixe o ambiente sem proteção.",
        "feedbackErro": "A resposta correta é:\n\ndefesa em profundidade, porque utiliza camadas complementares de proteção para reduzir o risco.\n\nComentário:\nDefesa em profundidade combina controles diferentes para que a falha de uma camada não deixe o ambiente sem proteção.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Várias barreiras complementares em sequência são um sinal clássico de defesa em profundidade.",
        "assunto": "seguranca",
        "id": "seguranca_005",
        "subtopico": "fundamentos e princípios de segurança"
    },
    {
        "pergunta": "Em uma política de segurança, documentos são classificados como públicos, internos, confidenciais ou restritos. A finalidade principal dessa classificação é:",
        "alternativas": [
            "definir níveis de proteção e tratamento compatíveis com a sensibilidade de cada informação.",
            "determinar automaticamente o formato de arquivo que cada documento deverá utilizar no sistema.",
            "substituir os controles de acesso por regras baseadas unicamente na extensão e no formato dos arquivos.",
            "estabelecer quais documentos devem ser impressos e quais devem permanecer em formato digital.",
            "eliminar a necessidade de políticas de retenção, descarte e compartilhamento de informações."
        ],
        "correta": 0,
        "feedbackAcerto": "A classificação da informação orienta controles de acesso, armazenamento, compartilhamento e proteção conforme a sensibilidade.",
        "feedbackErro": "A resposta correta é:\n\ndefinir níveis de proteção e tratamento compatíveis com a sensibilidade de cada informação.\n\nComentário:\nA classificação da informação orienta controles de acesso, armazenamento, compartilhamento e proteção conforme a sensibilidade.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Classificação não muda o formato do arquivo; ela orienta como a informação deve ser protegida.",
        "assunto": "seguranca",
        "id": "seguranca_006",
        "subtopico": "fundamentos e princípios de segurança"
    },
    {
        "pergunta": "Uma instituição treina servidores para reconhecer mensagens suspeitas e verificar solicitações incomuns antes de agir. Esse treinamento é relevante porque:",
        "alternativas": [
            "substitui a necessidade de atualizar sistemas, já que usuários treinados evitam qualquer exploração técnica.",
            "reduz riscos decorrentes de erro humano e de técnicas de engenharia social usadas contra os usuários.",
            "impede a ocorrência de falhas de hardware, pois usuários passam a identificar defeitos antes do sistema.",
            "elimina a necessidade de autenticação forte, porque o comportamento do usuário passa a validar sua identidade.",
            "garante que mensagens legítimas deixem de ser classificadas como suspeitas pelos mecanismos de segurança."
        ],
        "correta": 1,
        "feedbackAcerto": "Conscientização reduz a probabilidade de usuários serem enganados por phishing, pretexting e outras técnicas.",
        "feedbackErro": "A resposta correta é:\n\nreduz riscos decorrentes de erro humano e de técnicas de engenharia social usadas contra os usuários.\n\nComentário:\nConscientização reduz a probabilidade de usuários serem enganados por phishing, pretexting e outras técnicas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em segurança, pessoas também fazem parte da proteção; treinamento não substitui controles técnicos.",
        "assunto": "seguranca",
        "id": "seguranca_007",
        "subtopico": "fundamentos e princípios de segurança"
    },
    {
        "pergunta": "Um programa malicioso depende de um arquivo hospedeiro e se propaga quando esse arquivo é executado. Essa característica é típica de:",
        "alternativas": [
            "worm, que se replica pela rede sem precisar estar associado a um arquivo hospedeiro.",
            "spyware, que tem como função principal monitorar atividades e coletar informações do usuário.",
            "vírus de computador, que costuma infectar arquivos e depende de execução para se disseminar.",
            "ransomware, que busca indisponibilizar dados e exigir pagamento para sua recuperação.",
            "adware, que exibe publicidade e pode acompanhar hábitos de navegação do usuário."
        ],
        "correta": 2,
        "feedbackAcerto": "Vírus normalmente se associa a arquivos ou programas hospedeiros e depende de execução.",
        "feedbackErro": "A resposta correta é:\n\nvírus de computador, que costuma infectar arquivos e depende de execução para se disseminar.\n\nComentário:\nVírus normalmente se associa a arquivos ou programas hospedeiros e depende de execução.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Vírus e worm podem se propagar, mas o worm não depende de um arquivo hospedeiro da mesma forma.",
        "assunto": "seguranca",
        "id": "seguranca_008",
        "subtopico": "ameaças, malwares e ataques"
    },
    {
        "pergunta": "Uma ameaça explora a rede para se replicar automaticamente entre computadores vulneráveis, sem depender da execução manual de um arquivo infectado. Trata-se de:",
        "alternativas": [
            "vírus, que exige necessariamente o uso de uma mídia removível para alcançar outro computador.",
            "trojan, cuja característica central é replicar-se por varredura automática de toda a rede.",
            "keylogger, que altera tabelas de roteamento para distribuir cópias de si mesmo entre os hosts.",
            "worm, cuja propagação pode ocorrer automaticamente por redes e serviços vulneráveis.",
            "adware, que utiliza anúncios publicitários como mecanismo obrigatório de propagação entre dispositivos."
        ],
        "correta": 3,
        "feedbackAcerto": "Worm é capaz de se propagar automaticamente, explorando redes ou vulnerabilidades.",
        "feedbackErro": "A resposta correta é:\n\nworm, cuja propagação pode ocorrer automaticamente por redes e serviços vulneráveis.\n\nComentário:\nWorm é capaz de se propagar automaticamente, explorando redes ou vulnerabilidades.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A palavra-chave é autorreplicação pela rede, sem depender de arquivo hospedeiro.",
        "assunto": "seguranca",
        "id": "seguranca_009",
        "subtopico": "ameaças, malwares e ataques"
    },
    {
        "pergunta": "Um arquivo apresentado como instalador de um aplicativo legítimo contém código malicioso oculto que é executado após a instalação. Esse comportamento caracteriza um:",
        "alternativas": [
            "worm, pois o arquivo precisa se replicar de forma autônoma entre máquinas para receber essa classificação.",
            "ransomware, pois qualquer programa disfarçado necessariamente criptografa os dados do usuário.",
            "firewall malicioso, pois a ameaça se apresenta como aplicativo para controlar conexões de rede.",
            "cookie persistente, pois o código permanece armazenado no sistema após o encerramento do navegador.",
            "cavalo de Troia, pois o programa aparenta ser legítimo enquanto executa uma ação maliciosa oculta."
        ],
        "correta": 4,
        "feedbackAcerto": "O Trojan se disfarça de software legítimo ou útil para induzir o usuário à execução.",
        "feedbackErro": "A resposta correta é:\n\ncavalo de Troia, pois o programa aparenta ser legítimo enquanto executa uma ação maliciosa oculta.\n\nComentário:\nO Trojan se disfarça de software legítimo ou útil para induzir o usuário à execução.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Trojan é associado ao disfarce; ele não precisa se autorreplicar.",
        "assunto": "seguranca",
        "id": "seguranca_010",
        "subtopico": "ameaças, malwares e ataques"
    },
    {
        "pergunta": "Após abrir um anexo, um usuário perde acesso aos documentos porque eles foram criptografados e surge uma cobrança para liberação. O incidente é compatível com:",
        "alternativas": [
            "ransomware, que pode bloquear ou criptografar dados e exigir pagamento da vítima.",
            "spyware, que coleta informações de uso sem necessariamente impedir o acesso aos arquivos.",
            "adware, que exibe publicidade e redirecionamentos durante a navegação do usuário.",
            "worm, cuja principal característica é a propagação automática entre sistemas conectados à rede.",
            "keylogger, que registra entradas do teclado para capturar credenciais e outras informações."
        ],
        "correta": 0,
        "feedbackAcerto": "Ransomware busca causar indisponibilidade ou perda de acesso e normalmente associa isso a extorsão.",
        "feedbackErro": "A resposta correta é:\n\nransomware, que pode bloquear ou criptografar dados e exigir pagamento da vítima.\n\nComentário:\nRansomware busca causar indisponibilidade ou perda de acesso e normalmente associa isso a extorsão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Criptografia de arquivos acompanhada de cobrança é o indício clássico de ransomware.",
        "assunto": "seguranca",
        "id": "seguranca_011",
        "subtopico": "ameaças, malwares e ataques"
    },
    {
        "pergunta": "Um software malicioso permanece em segundo plano registrando hábitos de navegação e enviando informações a terceiros sem consentimento. Ele se aproxima do conceito de:",
        "alternativas": [
            "ransomware, pois seu objetivo principal é impedir o acesso aos dados por meio de criptografia.",
            "spyware, pois monitora atividades e coleta informações do usuário de forma indevida.",
            "worm, pois precisa se replicar automaticamente entre redes para cumprir sua função de espionagem.",
            "firewall, pois observa conexões de rede e decide quais pacotes devem ser bloqueados ou permitidos.",
            "backup incremental, pois registra as alterações realizadas desde a última cópia de segurança executada."
        ],
        "correta": 1,
        "feedbackAcerto": "Spyware é voltado à espionagem e coleta indevida de informações.",
        "feedbackErro": "A resposta correta é:\n\nspyware, pois monitora atividades e coleta informações do usuário de forma indevida.\n\nComentário:\nSpyware é voltado à espionagem e coleta indevida de informações.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Monitoramento oculto e coleta de dados apontam para spyware.",
        "assunto": "seguranca",
        "id": "seguranca_012",
        "subtopico": "ameaças, malwares e ataques"
    },
    {
        "pergunta": "Em uma tentativa de acesso, o atacante testa grande quantidade de combinações de senha até encontrar uma válida. Essa técnica corresponde a:",
        "alternativas": [
            "phishing, baseado em persuadir o usuário a informar voluntariamente suas credenciais.",
            "spoofing, baseado em falsificar identidade, endereço ou origem de uma comunicação.",
            "força bruta, baseada na tentativa repetida de diferentes combinações de credenciais.",
            "sniffing, baseado em capturar e analisar tráfego que circula em uma rede.",
            "ransomware, baseado em restringir o acesso a dados e exigir pagamento da vítima."
        ],
        "correta": 2,
        "feedbackAcerto": "Força bruta testa combinações até encontrar uma credencial válida.",
        "feedbackErro": "A resposta correta é:\n\nforça bruta, baseada na tentativa repetida de diferentes combinações de credenciais.\n\nComentário:\nForça bruta testa combinações até encontrar uma credencial válida.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Se o foco é tentativa automatizada de muitas senhas, diferencie de phishing e engenharia social.",
        "assunto": "seguranca",
        "id": "seguranca_013",
        "subtopico": "ameaças, malwares e ataques"
    },
    {
        "pergunta": "Uma vulnerabilidade recém-descoberta começa a ser explorada antes de existir correção oficial amplamente disponível. No contexto de segurança, ela pode ser classificada como:",
        "alternativas": [
            "falso positivo, porque o sistema identifica como ataque um comportamento que ainda não foi corrigido.",
            "controle compensatório, porque a ausência de correção transforma automaticamente a falha em mecanismo de defesa.",
            "risco residual, porque toda vulnerabilidade sem correção passa a ser aceita pela organização por definição.",
            "vulnerabilidade de dia zero, por ser explorada em período no qual ainda não há correção adequada disponível.",
            "falha de disponibilidade, porque qualquer vulnerabilidade desconhecida provoca necessariamente indisponibilidade imediata."
        ],
        "correta": 3,
        "feedbackAcerto": "Dia zero está relacionado a falha ainda sem correção efetiva disponível no momento da exploração.",
        "feedbackErro": "A resposta correta é:\n\nvulnerabilidade de dia zero, por ser explorada em período no qual ainda não há correção adequada disponível.\n\nComentário:\nDia zero está relacionado a falha ainda sem correção efetiva disponível no momento da exploração.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Zero-day não significa que o ataque dure zero dias; refere-se à ausência de correção adequada.",
        "assunto": "seguranca",
        "id": "seguranca_014",
        "subtopico": "ameaças, malwares e ataques"
    },
    {
        "pergunta": "Um servidor recebe mensagem com aparência de comunicação oficial que o direciona a uma página falsa para digitar usuário e senha. A técnica descrita é:",
        "alternativas": [
            "força bruta, pois testa automaticamente grande número de senhas contra o sistema de autenticação sem depender da interação da vítima.",
            "sniffing, pois captura pacotes diretamente do tráfego de rede sem depender da interação do usuário.",
            "ransomware, pois criptografa arquivos e exige pagamento para restaurar o acesso aos dados.",
            "hardening, pois altera configurações do sistema para reduzir serviços e recursos expostos.",
            "phishing, pois utiliza comunicação enganosa para induzir a vítima a fornecer informações ou executar ações."
        ],
        "correta": 4,
        "feedbackAcerto": "Phishing busca enganar o usuário por mensagens, páginas ou comunicações falsas.",
        "feedbackErro": "A resposta correta é:\n\nphishing, pois utiliza comunicação enganosa para induzir a vítima a fornecer informações ou executar ações.\n\nComentário:\nPhishing busca enganar o usuário por mensagens, páginas ou comunicações falsas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Página falsa e pedido de credenciais são sinais típicos de phishing.",
        "assunto": "seguranca",
        "id": "seguranca_015",
        "subtopico": "engenharia social e golpes"
    },
    {
        "pergunta": "Um criminoso telefona fingindo ser do suporte técnico e solicita o código temporário de autenticação do funcionário. O ataque explora principalmente:",
        "alternativas": [
            "engenharia social, ao manipular confiança, urgência ou autoridade para obter informação da vítima.",
            "criptografia simétrica, ao tentar obter a mesma chave utilizada pelas duas partes na comunicação.",
            "integridade de dados, ao modificar o conteúdo dos arquivos armazenados pelo usuário no computador.",
            "disponibilidade, ao provocar sobrecarga de recursos para impedir que o serviço continue acessível.",
            "autenticação biométrica, ao tentar reproduzir uma característica física usada para identificar o usuário."
        ],
        "correta": 0,
        "feedbackAcerto": "Engenharia social explora comportamento e confiança humana em vez de depender apenas de falhas técnicas.",
        "feedbackErro": "A resposta correta é:\n\nengenharia social, ao manipular confiança, urgência ou autoridade para obter informação da vítima.\n\nComentário:\nEngenharia social explora comportamento e confiança humana em vez de depender apenas de falhas técnicas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Pedidos de senha ou código por telefone são um exemplo clássico de manipulação humana.",
        "assunto": "seguranca",
        "id": "seguranca_016",
        "subtopico": "engenharia social e golpes"
    },
    {
        "pergunta": "Uma mensagem fraudulenta é preparada com nome, função e informações específicas de determinado diretor escolar, tornando o conteúdo mais convincente. Esse golpe caracteriza:",
        "alternativas": [
            "spam, por ser enviado em massa a diversos destinatários e não depender de personalização específica para um único alvo.",
            "spear phishing, por ser uma tentativa de phishing direcionada e personalizada para uma vítima específica.",
            "worm, por usar informações pessoais para se replicar automaticamente nos computadores da instituição.",
            "brute force, por combinar dados pessoais com tentativas automáticas de todas as senhas possíveis.",
            "firewall spoofing, por simular o endereço de um equipamento de segurança para obter credenciais."
        ],
        "correta": 1,
        "feedbackAcerto": "Spear phishing é uma forma direcionada e personalizada de phishing.",
        "feedbackErro": "A resposta correta é:\n\nspear phishing, por ser uma tentativa de phishing direcionada e personalizada para uma vítima específica.\n\nComentário:\nSpear phishing é uma forma direcionada e personalizada de phishing.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Quanto mais específico o alvo e a personalização, mais a questão aponta para spear phishing.",
        "assunto": "seguranca",
        "id": "seguranca_017",
        "subtopico": "engenharia social e golpes"
    },
    {
        "pergunta": "Antes de pedir uma informação sigilosa, o atacante inventa uma história plausível, diz participar de uma auditoria e cria um contexto para convencer a vítima. Essa técnica é conhecida como:",
        "alternativas": [
            "tailgating, pois depende de entrar fisicamente em área restrita seguindo uma pessoa autorizada.",
            "shoulder surfing, pois obtém dados observando diretamente a tela ou o teclado de outra pessoa.",
            "pretexting, pois utiliza um pretexto ou identidade fabricada para tornar a solicitação convincente.",
            "dumpster diving, pois busca documentos ou informações descartadas de maneira inadequada.",
            "credential stuffing, pois reutiliza automaticamente pares de usuário e senha vazados anteriormente."
        ],
        "correta": 2,
        "feedbackAcerto": "Pretexting usa uma narrativa ou identidade inventada como fundamento do golpe.",
        "feedbackErro": "A resposta correta é:\n\npretexting, pois utiliza um pretexto ou identidade fabricada para tornar a solicitação convincente.\n\nComentário:\nPretexting usa uma narrativa ou identidade inventada como fundamento do golpe.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Pretexto convincente + solicitação de informação é a combinação central do pretexting.",
        "assunto": "seguranca",
        "id": "seguranca_018",
        "subtopico": "engenharia social e golpes"
    },
    {
        "pergunta": "Um atacante registra um domínio visualmente semelhante ao endereço verdadeiro, alterando uma letra, para induzir usuários a acessar uma página falsa. Essa prática é chamada de:",
        "alternativas": [
            "tailgating, que explora a entrada física junto com uma pessoa autorizada em área controlada.",
            "sniffing, que consiste em capturar pacotes e analisar o tráfego de uma rede de computadores.",
            "hashing, que transforma dados em um resumo de tamanho definido para verificação de integridade.",
            "typosquatting, que explora erros de digitação ou nomes muito semelhantes a domínios legítimos.",
            "allowlisting, que restringe execução a aplicações previamente autorizadas pela organização."
        ],
        "correta": 3,
        "feedbackAcerto": "Typosquatting usa domínios parecidos com os legítimos para enganar usuários.",
        "feedbackErro": "A resposta correta é:\n\ntyposquatting, que explora erros de digitação ou nomes muito semelhantes a domínios legítimos.\n\nComentário:\nTyposquatting usa domínios parecidos com os legítimos para enganar usuários.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Pequena alteração no nome do domínio é a pista principal.",
        "assunto": "seguranca",
        "id": "seguranca_019",
        "subtopico": "engenharia social e golpes"
    },
    {
        "pergunta": "Uma pessoa sem crachá entra em uma sala restrita logo atrás de um funcionário autorizado, aproveitando a porta aberta por ele. O caso exemplifica:",
        "alternativas": [
            "phishing, em que uma mensagem enganosa induz a vítima a entregar informações ou clicar em links.",
            "spoofing, em que a origem ou identidade de uma comunicação é falsificada tecnicamente.",
            "credential stuffing, em que credenciais vazadas são testadas automaticamente em outros serviços.",
            "shoulder surfing, em que informações são observadas visualmente durante seu uso por outra pessoa.",
            "tailgating, em que alguém obtém acesso físico seguindo uma pessoa autorizada."
        ],
        "correta": 4,
        "feedbackAcerto": "Tailgating é uma técnica de engenharia social associada a acesso físico indevido.",
        "feedbackErro": "A resposta correta é:\n\ntailgating, em que alguém obtém acesso físico seguindo uma pessoa autorizada.\n\nComentário:\nTailgating é uma técnica de engenharia social associada a acesso físico indevido.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Acompanhar uma pessoa autorizada por uma porta controlada aponta para tailgating.",
        "assunto": "seguranca",
        "id": "seguranca_020",
        "subtopico": "engenharia social e golpes"
    },
    {
        "pergunta": "Durante a digitação de uma senha em local público, uma pessoa próxima observa discretamente o teclado e memoriza os caracteres inseridos. Essa prática corresponde a:",
        "alternativas": [
            "shoulder surfing, que obtém informações por observação direta da tela, teclado ou comportamento da vítima.",
            "pretexting, que depende da criação de uma história falsa e de uma identidade convincente para induzir a vítima a colaborar.",
            "dumpster diving, que busca dados em documentos, dispositivos ou materiais descartados indevidamente.",
            "spear phishing, que utiliza mensagens direcionadas e personalizadas para enganar um alvo específico.",
            "spoofing, que falsifica tecnicamente a identidade ou a origem de uma comunicação eletrônica."
        ],
        "correta": 0,
        "feedbackAcerto": "Shoulder surfing explora observação visual para capturar informações sensíveis.",
        "feedbackErro": "A resposta correta é:\n\nshoulder surfing, que obtém informações por observação direta da tela, teclado ou comportamento da vítima.\n\nComentário:\nShoulder surfing explora observação visual para capturar informações sensíveis.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Olhar tela ou teclado de outra pessoa para obter dados é shoulder surfing.",
        "assunto": "seguranca",
        "id": "seguranca_021",
        "subtopico": "engenharia social e golpes"
    },
    {
        "pergunta": "Um antivírus atualizado identifica um arquivo malicioso antes de sua execução e o coloca em quarentena. A função exercida pelo software é:",
        "alternativas": [
            "substituir o firewall na filtragem de todo tráfego que entra ou sai da rede institucional.",
            "detectar e bloquear código malicioso, reduzindo o risco de execução e propagação no sistema.",
            "garantir a recuperação de documentos apagados por meio de cópias históricas automáticas.",
            "autenticar usuários remotos utilizando fatores independentes antes do acesso aos sistemas.",
            "criptografar todo arquivo do computador para impedir sua leitura por qualquer aplicação instalada."
        ],
        "correta": 1,
        "feedbackAcerto": "Antivírus atua na prevenção, detecção e tratamento de malware.",
        "feedbackErro": "A resposta correta é:\n\ndetectar e bloquear código malicioso, reduzindo o risco de execução e propagação no sistema.\n\nComentário:\nAntivírus atua na prevenção, detecção e tratamento de malware.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Antivírus não substitui firewall, backup ou autenticação.",
        "assunto": "seguranca",
        "id": "seguranca_022",
        "subtopico": "ferramentas, controles e hardening"
    },
    {
        "pergunta": "Uma organização deseja controlar conexões entre sua rede interna e a Internet com regras que permitam ou bloqueiem tráfego. O controle mais adequado é o:",
        "alternativas": [
            "antivírus, que analisa arquivos e processos em busca de códigos maliciosos conhecidos ou suspeitos.",
            "backup, que mantém cópias para recuperação de dados após falhas, exclusões ou incidentes.",
            "firewall, que aplica políticas de filtragem ao tráfego de rede conforme regras definidas.",
            "gerenciador de senhas, que armazena credenciais de forma protegida e facilita seu uso adequado.",
            "hash criptográfico, que gera um resumo para apoiar verificações de integridade de informações."
        ],
        "correta": 2,
        "feedbackAcerto": "Firewall controla tráfego conforme regras e políticas.",
        "feedbackErro": "A resposta correta é:\n\nfirewall, que aplica políticas de filtragem ao tráfego de rede conforme regras definidas.\n\nComentário:\nFirewall controla tráfego conforme regras e políticas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Se a questão fala em permitir ou bloquear conexões, o conceito central é firewall.",
        "assunto": "seguranca",
        "id": "seguranca_023",
        "subtopico": "ferramentas, controles e hardening"
    },
    {
        "pergunta": "Em um ambiente de monitoramento, uma solução apenas alerta sobre tráfego suspeito, enquanto outra pode bloquear automaticamente a atividade detectada. A associação correta é:",
        "alternativas": [
            "IPS para observação passiva; IDS para bloquear automaticamente qualquer pacote considerado suspeito.",
            "antivírus para filtrar rotas; firewall para analisar assinatura de arquivos armazenados localmente.",
            "SIEM para substituir autenticação; DLP para impedir qualquer conexão externa da organização.",
            "IDS para detecção e alerta; IPS para detecção com possibilidade de prevenção ou bloqueio.",
            "VPN para detectar intrusões; proxy para bloquear malware antes de alcançar o sistema operacional."
        ],
        "correta": 3,
        "feedbackAcerto": "IDS é predominantemente detectivo; IPS pode atuar preventivamente bloqueando tráfego.",
        "feedbackErro": "A resposta correta é:\n\nIDS para detecção e alerta; IPS para detecção com possibilidade de prevenção ou bloqueio.\n\nComentário:\nIDS é predominantemente detectivo; IPS pode atuar preventivamente bloqueando tráfego.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em provas, D de IDS lembra detecção; P de IPS lembra prevenção.",
        "assunto": "seguranca",
        "id": "seguranca_024",
        "subtopico": "ferramentas, controles e hardening"
    },
    {
        "pergunta": "Uma política impede que arquivos confidenciais sejam enviados por e-mail pessoal ou copiados para mídias não autorizadas. Esse objetivo é compatível com uma solução de:",
        "alternativas": [
            "DHCP, responsável por distribuir configurações de endereçamento IP aos dispositivos conectados.",
            "DNS, responsável por resolver nomes de domínio para endereços utilizados na comunicação de rede.",
            "NTP, utilizado para manter o horário de dispositivos e servidores sincronizado na infraestrutura.",
            "FTP, utilizado para transferir arquivos entre sistemas por meio de um serviço de rede específico.",
            "DLP, voltada a reduzir vazamento ou uso indevido de dados sensíveis em diferentes canais."
        ],
        "correta": 4,
        "feedbackAcerto": "DLP significa Data Loss Prevention e busca prevenir perda ou vazamento de dados.",
        "feedbackErro": "A resposta correta é:\n\nDLP, voltada a reduzir vazamento ou uso indevido de dados sensíveis em diferentes canais.\n\nComentário:\nDLP significa Data Loss Prevention e busca prevenir perda ou vazamento de dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Quando o foco é impedir saída indevida de informação sensível, pense em DLP.",
        "assunto": "seguranca",
        "id": "seguranca_025",
        "subtopico": "ferramentas, controles e hardening"
    },
    {
        "pergunta": "Em computadores administrativos, apenas programas previamente aprovados podem ser executados. Qual controle está sendo aplicado?",
        "alternativas": [
            "allowlisting de aplicações, que permite a execução do conjunto previamente autorizado pela política.",
            "quarentena de arquivos, que transfere programas instalados para uma área temporária de análise antes de autorizar sua execução normal.",
            "lista de bloqueio, que autoriza qualquer aplicativo que não esteja explicitamente marcado como confiável.",
            "autenticação federada, que escolhe quais programas podem ser usados com base no provedor de identidade.",
            "backup diferencial, que mantém cópias das aplicações permitidas desde a última instalação completa."
        ],
        "correta": 0,
        "feedbackAcerto": "Allowlisting define previamente o que pode ser executado e bloqueia o restante por padrão.",
        "feedbackErro": "A resposta correta é:\n\nallowlisting de aplicações, que permite a execução do conjunto previamente autorizado pela política.\n\nComentário:\nAllowlisting define previamente o que pode ser executado e bloqueia o restante por padrão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Lista de permitidos é mais restritiva que simplesmente bloquear alguns programas conhecidos.",
        "assunto": "seguranca",
        "id": "seguranca_026",
        "subtopico": "ferramentas, controles e hardening"
    },
    {
        "pergunta": "Uma equipe desabilita serviços desnecessários, remove contas padrão, aplica atualizações e ajusta permissões antes de colocar um servidor em produção. Esse processo é chamado de:",
        "alternativas": [
            "phishing, pois cria barreiras de autenticação para impedir que usuários sejam enganados por mensagens falsas.",
            "hardening, pois reduz a superfície de ataque por meio de configuração segura e eliminação de recursos desnecessários.",
            "backup completo, pois registra todo o estado do sistema para permitir restauração em caso de falha.",
            "tokenização, pois substitui serviços e contas por identificadores sem valor fora do ambiente protegido.",
            "sincronização, pois garante que as configurações de diferentes servidores permaneçam idênticas automaticamente e sem revisão administrativa."
        ],
        "correta": 1,
        "feedbackAcerto": "Hardening significa fortalecer a configuração de um sistema reduzindo exposição e serviços desnecessários.",
        "feedbackErro": "A resposta correta é:\n\nhardening, pois reduz a superfície de ataque por meio de configuração segura e eliminação de recursos desnecessários.\n\nComentário:\nHardening significa fortalecer a configuração de um sistema reduzindo exposição e serviços desnecessários.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Desabilitar recursos, aplicar patches e revisar permissões são ações típicas de hardening.",
        "assunto": "seguranca",
        "id": "seguranca_027",
        "subtopico": "ferramentas, controles e hardening"
    },
    {
        "pergunta": "Um arquivo suspeito é executado em ambiente isolado, com acesso limitado ao sistema real, para observar seu comportamento. O recurso utilizado é uma:",
        "alternativas": [
            "VPN, usada para criar um canal protegido de comunicação entre redes ou dispositivos remotos.",
            "DMZ, usada para separar serviços expostos externamente da rede interna de uma organização.",
            "sandbox, criada para executar código em ambiente controlado e limitar impactos sobre o sistema principal.",
            "ACL, usada para permitir ou negar tráfego com base em critérios definidos nos equipamentos de rede e nas políticas de acesso aplicadas.",
            "assinatura digital, usada para verificar autoria e integridade de uma informação eletrônica."
        ],
        "correta": 2,
        "feedbackAcerto": "Sandbox isola a execução de código para análise ou contenção.",
        "feedbackErro": "A resposta correta é:\n\nsandbox, criada para executar código em ambiente controlado e limitar impactos sobre o sistema principal.\n\nComentário:\nSandbox isola a execução de código para análise ou contenção.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A palavra-chave é isolamento de execução, não isolamento de rede.",
        "assunto": "seguranca",
        "id": "seguranca_028",
        "subtopico": "ferramentas, controles e hardening"
    },
    {
        "pergunta": "Uma falha conhecida em um programa pode ser explorada para obter acesso indevido ao sistema. Na análise de risco, essa falha é classificada como:",
        "alternativas": [
            "ameaça, por corresponder ao agente ou evento capaz de explorar uma condição de risco.",
            "impacto, por representar diretamente a consequência financeira produzida após o incidente.",
            "controle, por ser um mecanismo implementado para reduzir a probabilidade ou o efeito do risco.",
            "vulnerabilidade, por representar uma fraqueza que pode ser explorada por uma ameaça.",
            "ativo, por representar o recurso organizacional que precisa ser protegido contra incidentes."
        ],
        "correta": 3,
        "feedbackAcerto": "Vulnerabilidade é uma fraqueza ou falha passível de exploração.",
        "feedbackErro": "A resposta correta é:\n\nvulnerabilidade, por representar uma fraqueza que pode ser explorada por uma ameaça.\n\nComentário:\nVulnerabilidade é uma fraqueza ou falha passível de exploração.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Ameaça é quem ou o que pode explorar; vulnerabilidade é a fraqueza explorável.",
        "assunto": "seguranca",
        "id": "seguranca_029",
        "subtopico": "gestão de riscos, incidentes e auditoria"
    },
    {
        "pergunta": "Durante um incidente, a equipe isola temporariamente máquinas comprometidas para impedir que a atividade maliciosa alcance outros equipamentos. Essa ação pertence à etapa de:",
        "alternativas": [
            "erradicação, que busca remover a causa do incidente e eliminar artefatos maliciosos do ambiente.",
            "recuperação, que restabelece sistemas e serviços após o comprometimento ter sido controlado.",
            "preparação, que define previamente equipe, procedimentos, ferramentas e responsabilidades de resposta.",
            "auditoria, que revisa controles e evidências para avaliar conformidade e efetividade da segurança.",
            "contenção, que procura limitar a propagação e reduzir o impacto enquanto o incidente é tratado."
        ],
        "correta": 4,
        "feedbackAcerto": "Contenção limita o alcance do incidente antes da erradicação e recuperação.",
        "feedbackErro": "A resposta correta é:\n\ncontenção, que procura limitar a propagação e reduzir o impacto enquanto o incidente é tratado.\n\nComentário:\nContenção limita o alcance do incidente antes da erradicação e recuperação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Isolar equipamento comprometido é exemplo clássico de contenção.",
        "assunto": "seguranca",
        "id": "seguranca_030",
        "subtopico": "gestão de riscos, incidentes e auditoria"
    },
    {
        "pergunta": "Após conter um ataque, a equipe remove malware, elimina contas criadas pelo invasor e corrige a vulnerabilidade explorada. Essa etapa corresponde à:",
        "alternativas": [
            "erradicação, porque busca eliminar a causa e os componentes associados ao incidente.",
            "contenção, porque seu objetivo central é impedir temporariamente a propagação do evento durante a resposta.",
            "recuperação, porque consiste em devolver sistemas já limpos ao funcionamento normal monitorado.",
            "detecção, porque procura identificar sinais que indiquem a existência de um possível incidente.",
            "aceitação de risco, porque mantém a vulnerabilidade sem tratamento após avaliar seus impactos."
        ],
        "correta": 0,
        "feedbackAcerto": "Erradicação remove a ameaça e trata a causa técnica do comprometimento.",
        "feedbackErro": "A resposta correta é:\n\nerradicação, porque busca eliminar a causa e os componentes associados ao incidente.\n\nComentário:\nErradicação remove a ameaça e trata a causa técnica do comprometimento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Conter limita; erradicar remove; recuperar devolve à operação.",
        "assunto": "seguranca",
        "id": "seguranca_031",
        "subtopico": "gestão de riscos, incidentes e auditoria"
    },
    {
        "pergunta": "Uma instituição instala regularmente correções fornecidas pelos fabricantes para reduzir vulnerabilidades conhecidas. Essa atividade é chamada de:",
        "alternativas": [
            "gestão de identidade, que define usuários, permissões e fatores usados para autenticação nos sistemas.",
            "gestão de patches, que organiza avaliação, aplicação e acompanhamento de atualizações corretivas.",
            "gestão de backup, que mantém cópias de dados e testa a possibilidade de restauração após falhas.",
            "gestão de logs, que coleta registros de eventos para apoiar auditoria e investigação de incidentes.",
            "gestão de chaves, que controla criação, guarda, uso e substituição de chaves criptográficas."
        ],
        "correta": 1,
        "feedbackAcerto": "Patch management organiza correções e atualizações de segurança.",
        "feedbackErro": "A resposta correta é:\n\ngestão de patches, que organiza avaliação, aplicação e acompanhamento de atualizações corretivas.\n\nComentário:\nPatch management organiza correções e atualizações de segurança.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Correções do fabricante e atualização de vulnerabilidades remetem a patches.",
        "assunto": "seguranca",
        "id": "seguranca_032",
        "subtopico": "gestão de riscos, incidentes e auditoria"
    },
    {
        "pergunta": "Em uma análise de risco, a equipe considera a probabilidade de um incidente e as consequências que ele pode produzir para a organização. O objetivo é:",
        "alternativas": [
            "eliminar todo risco tecnológico antes que qualquer sistema possa ser utilizado pela organização.",
            "substituir controles preventivos por controles corretivos, independentemente da natureza do risco.",
            "avaliar e priorizar riscos para definir tratamentos compatíveis com sua probabilidade e impacto.",
            "converter qualquer vulnerabilidade identificada em incidente confirmado para fins de auditoria.",
            "garantir que riscos aceitos deixem de existir formalmente nos registros de segurança da instituição."
        ],
        "correta": 2,
        "feedbackAcerto": "Análise de risco apoia priorização e decisão sobre tratamento, considerando probabilidade e impacto.",
        "feedbackErro": "A resposta correta é:\n\navaliar e priorizar riscos para definir tratamentos compatíveis com sua probabilidade e impacto.\n\nComentário:\nAnálise de risco apoia priorização e decisão sobre tratamento, considerando probabilidade e impacto.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Segurança não elimina todos os riscos; ela os identifica, avalia e trata.",
        "assunto": "seguranca",
        "id": "seguranca_033",
        "subtopico": "gestão de riscos, incidentes e auditoria"
    },
    {
        "pergunta": "Registros mostram quem acessou determinado sistema, em que horário e quais operações foram realizadas. Esses registros apoiam principalmente:",
        "alternativas": [
            "criptografia de arquivos, ao transformar o conteúdo armazenado em dados ilegíveis para usuários não autorizados.",
            "autenticação biométrica, ao substituir credenciais convencionais por características físicas dos usuários.",
            "segmentação de rede, ao separar equipamentos em diferentes domínios de comunicação e segurança.",
            "auditoria e investigação de eventos, ao fornecer evidências sobre atividades realizadas no sistema.",
            "backup incremental, ao copiar mudanças ocorridas desde a última cópia realizada pela organização."
        ],
        "correta": 3,
        "feedbackAcerto": "Logs e trilhas de auditoria ajudam a rastrear ações e investigar incidentes.",
        "feedbackErro": "A resposta correta é:\n\nauditoria e investigação de eventos, ao fornecer evidências sobre atividades realizadas no sistema.\n\nComentário:\nLogs e trilhas de auditoria ajudam a rastrear ações e investigar incidentes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Quem fez o quê e quando é uma formulação típica de trilha de auditoria.",
        "assunto": "seguranca",
        "id": "seguranca_034",
        "subtopico": "gestão de riscos, incidentes e auditoria"
    },
    {
        "pergunta": "Um sistema de monitoramento gera alerta de malware para um arquivo legítimo que não representa ameaça. Essa ocorrência é um:",
        "alternativas": [
            "falso negativo, pois uma ameaça real teria deixado de ser identificada pelo mecanismo de segurança.",
            "incidente confirmado, pois qualquer alerta produzido pelo sistema comprova a ocorrência de comprometimento.",
            "risco aceito, pois o alerta deixa de ser investigado e passa a fazer parte da política da organização.",
            "controle compensatório, pois o erro de detecção substitui um controle que não pôde ser implementado.",
            "falso positivo, pois um comportamento legítimo foi classificado incorretamente como malicioso."
        ],
        "correta": 4,
        "feedbackAcerto": "Falso positivo ocorre quando o sistema acusa uma ameaça inexistente.",
        "feedbackErro": "A resposta correta é:\n\nfalso positivo, pois um comportamento legítimo foi classificado incorretamente como malicioso.\n\nComentário:\nFalso positivo ocorre quando o sistema acusa uma ameaça inexistente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Positivo = alerta; falso = o alerta não corresponde a uma ameaça real.",
        "assunto": "seguranca",
        "id": "seguranca_035",
        "subtopico": "gestão de riscos, incidentes e auditoria"
    },
    {
        "pergunta": "Uma organização deseja proteger o conteúdo de um arquivo para que ele seja compreensível apenas por quem possui a chave adequada. O recurso mais diretamente relacionado é:",
        "alternativas": [
            "criptografia, que transforma dados legíveis em conteúdo protegido por meio de algoritmo e chave.",
            "hash, que gera um resumo destinado a verificação e não foi projetado para recuperar o texto original.",
            "backup, que mantém cópias dos dados para permitir recuperação após perda ou indisponibilidade.",
            "assinatura digital, que busca comprovar autoria e integridade sem ter como objetivo principal ocultar o conteúdo.",
            "compressão, que reduz o espaço ocupado pelos dados sem oferecer sigilo criptográfico por si só."
        ],
        "correta": 0,
        "feedbackAcerto": "Criptografia protege a confidencialidade transformando dados com uso de chaves.",
        "feedbackErro": "A resposta correta é:\n\ncriptografia, que transforma dados legíveis em conteúdo protegido por meio de algoritmo e chave.\n\nComentário:\nCriptografia protege a confidencialidade transformando dados com uso de chaves.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Ocultar o conteúdo com possibilidade de decriptação aponta para criptografia.",
        "assunto": "seguranca",
        "id": "seguranca_036",
        "subtopico": "criptografia, hash e certificados"
    },
    {
        "pergunta": "Para verificar se um arquivo baixado foi alterado, o administrador compara o valor divulgado pelo fornecedor com o resumo calculado localmente. Esse resumo é um:",
        "alternativas": [
            "certificado digital, usado para associar uma identidade a uma chave pública em um contexto de confiança.",
            "hash criptográfico, adequado para verificar integridade por meio de um valor derivado do conteúdo.",
            "token de autenticação, usado como credencial temporária para comprovar posse de um fator de acesso.",
            "backup diferencial, usado para copiar alterações acumuladas desde a última cópia completa.",
            "firewall stateful, usado para decidir sobre tráfego considerando o estado das conexões estabelecidas."
        ],
        "correta": 1,
        "feedbackAcerto": "Hashes são usados para verificar integridade porque pequenas alterações produzem resumos diferentes.",
        "feedbackErro": "A resposta correta é:\n\nhash criptográfico, adequado para verificar integridade por meio de um valor derivado do conteúdo.\n\nComentário:\nHashes são usados para verificar integridade porque pequenas alterações produzem resumos diferentes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Comparar resumo do arquivo é um uso clássico de hash.",
        "assunto": "seguranca",
        "id": "seguranca_037",
        "subtopico": "criptografia, hash e certificados"
    },
    {
        "pergunta": "No armazenamento de senhas, adicionar um valor aleatório diferente a cada senha antes do cálculo do hash ajuda a:",
        "alternativas": [
            "permitir que o administrador recupere diretamente a senha original a partir do hash armazenado.",
            "substituir a necessidade de usar algoritmos adequados para armazenamento seguro de credenciais.",
            "reduzir a utilidade de tabelas pré-calculadas e fazer senhas iguais produzirem hashes diferentes.",
            "garantir que o hash obtido tenha o mesmo valor para usuários que utilizam a mesma senha.",
            "criptografar automaticamente toda a base de usuários com uma única chave compartilhada pelo sistema."
        ],
        "correta": 2,
        "feedbackAcerto": "O salt adiciona aleatoriedade ao processo de hash e dificulta ataques com tabelas pré-computadas.",
        "feedbackErro": "A resposta correta é:\n\nreduzir a utilidade de tabelas pré-calculadas e fazer senhas iguais produzirem hashes diferentes.\n\nComentário:\nO salt adiciona aleatoriedade ao processo de hash e dificulta ataques com tabelas pré-computadas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Salt não é senha secreta e não torna o hash reversível.",
        "assunto": "seguranca",
        "id": "seguranca_038",
        "subtopico": "criptografia, hash e certificados"
    },
    {
        "pergunta": "Um documento eletrônico é assinado digitalmente. Em regra, esse mecanismo contribui principalmente para verificar:",
        "alternativas": [
            "confidencialidade absoluta, pois a assinatura torna o conteúdo ilegível para qualquer pessoa sem autorização.",
            "disponibilidade contínua, pois um documento assinado permanece acessível mesmo após falha de armazenamento.",
            "anonimização, pois a assinatura remove elementos que possam identificar o responsável pelo documento.",
            "autoria e integridade, além de apoiar o não repúdio conforme o contexto e a infraestrutura utilizada.",
            "compressão do arquivo, pois a assinatura reduz o tamanho necessário para armazenar o conteúdo original."
        ],
        "correta": 3,
        "feedbackAcerto": "Assinatura digital está ligada à autenticidade, integridade e não repúdio, não à confidencialidade por si só.",
        "feedbackErro": "A resposta correta é:\n\nautoria e integridade, além de apoiar o não repúdio conforme o contexto e a infraestrutura utilizada.\n\nComentário:\nAssinatura digital está ligada à autenticidade, integridade e não repúdio, não à confidencialidade por si só.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Assinar não é o mesmo que criptografar o conteúdo para sigilo.",
        "assunto": "seguranca",
        "id": "seguranca_039",
        "subtopico": "criptografia, hash e certificados"
    },
    {
        "pergunta": "Na criptografia simétrica, remetente e destinatário precisam compartilhar de forma segura:",
        "alternativas": [
            "duas chaves públicas diferentes, sem necessidade de qualquer segredo entre os participantes.",
            "um certificado de autoridade certificadora para cada bloco do arquivo transmitido pela rede.",
            "um valor de hash reversível que permita reconstruir a mensagem original após a transmissão.",
            "uma assinatura digital comum que seja usada diretamente como chave para toda a comunicação.",
            "a mesma chave secreta utilizada no processo de cifrar e decifrar as informações."
        ],
        "correta": 4,
        "feedbackAcerto": "Criptografia simétrica usa a mesma chave secreta para cifrar e decifrar.",
        "feedbackErro": "A resposta correta é:\n\na mesma chave secreta utilizada no processo de cifrar e decifrar as informações.\n\nComentário:\nCriptografia simétrica usa a mesma chave secreta para cifrar e decifrar.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A questão costuma contrastar chave compartilhada da simétrica com par de chaves da assimétrica.",
        "assunto": "seguranca",
        "id": "seguranca_040",
        "subtopico": "criptografia, hash e certificados"
    },
    {
        "pergunta": "Um sistema utiliza um par formado por chave pública e chave privada com funções complementares. Essa característica corresponde à criptografia:",
        "alternativas": [
            "assimétrica, que utiliza duas chaves matematicamente relacionadas com papéis distintos.",
            "simétrica, que utiliza uma única chave secreta compartilhada entre as partes da comunicação.",
            "de hash, que gera um resumo unidirecional sem empregar par de chaves pública e privada.",
            "de backup, que replica dados em diferentes mídias para garantir disponibilidade após falhas.",
            "de compressão, que reduz redundância dos dados para diminuir tamanho de armazenamento e transmissão."
        ],
        "correta": 0,
        "feedbackAcerto": "Criptografia assimétrica usa um par de chaves pública e privada.",
        "feedbackErro": "A resposta correta é:\n\nassimétrica, que utiliza duas chaves matematicamente relacionadas com papéis distintos.\n\nComentário:\nCriptografia assimétrica usa um par de chaves pública e privada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Par de chaves é a pista central para assimétrica.",
        "assunto": "seguranca",
        "id": "seguranca_041",
        "subtopico": "criptografia, hash e certificados"
    },
    {
        "pergunta": "Ao acessar um site HTTPS, o navegador verifica o certificado apresentado pelo servidor. Uma função importante desse certificado é:",
        "alternativas": [
            "garantir que o conteúdo do site esteja livre de fraude, malware ou informações enganosas.",
            "associar a identidade do servidor a uma chave pública dentro de uma cadeia de confiança.",
            "impedir que qualquer usuário autorizado salve páginas ou arquivos recebidos durante a sessão.",
            "substituir o protocolo HTTP por um serviço de correio eletrônico com autenticação criptográfica.",
            "eliminar a necessidade de validar o nome do domínio apresentado na barra de endereços do navegador."
        ],
        "correta": 1,
        "feedbackAcerto": "Certificados digitais ajudam a autenticar o servidor e a estabelecer comunicação protegida.",
        "feedbackErro": "A resposta correta é:\n\nassociar a identidade do servidor a uma chave pública dentro de uma cadeia de confiança.\n\nComentário:\nCertificados digitais ajudam a autenticar o servidor e a estabelecer comunicação protegida.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "HTTPS protege o canal; certificado válido não garante que o conteúdo do site seja honesto.",
        "assunto": "seguranca",
        "id": "seguranca_042",
        "subtopico": "criptografia, hash e certificados"
    },
    {
        "pergunta": "Uma política orienta cada usuário a usar senha longa, exclusiva para o serviço e difícil de adivinhar. Essa prática reduz principalmente o risco de:",
        "alternativas": [
            "indisponibilidade causada por falha elétrica no servidor que hospeda o sistema de autenticação.",
            "alteração de arquivos decorrente de defeito físico na unidade de armazenamento do computador.",
            "comprometimento por adivinhação ou reutilização de credenciais obtidas em outros serviços.",
            "interceptação de todo tráfego de rede mesmo quando a comunicação utiliza protocolo criptografado.",
            "perda de dados causada pela ausência de cópias de segurança em mídias distintas e independentes."
        ],
        "correta": 2,
        "feedbackAcerto": "Senhas fortes e únicas reduzem ataques de adivinhação e o impacto de vazamentos em outros serviços.",
        "feedbackErro": "A resposta correta é:\n\ncomprometimento por adivinhação ou reutilização de credenciais obtidas em outros serviços.\n\nComentário:\nSenhas fortes e únicas reduzem ataques de adivinhação e o impacto de vazamentos em outros serviços.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Comprimento e exclusividade são mais relevantes do que regras artificiais fáceis de prever.",
        "assunto": "seguranca",
        "id": "seguranca_043",
        "subtopico": "autenticação, senhas e controle de acesso"
    },
    {
        "pergunta": "Um sistema solicita usuário e senha e verifica se as credenciais correspondem à identidade apresentada. Esse processo é denominado:",
        "alternativas": [
            "autorização, pois define quais ações e recursos o usuário autenticado pode utilizar no sistema.",
            "auditoria, pois registra posteriormente as operações realizadas pelo usuário durante sua sessão.",
            "criptografia, pois transforma dados em formato protegido por meio de um algoritmo e uma chave.",
            "autenticação, pois confirma se o usuário é realmente quem afirma ser antes do acesso.",
            "disponibilidade, pois mantém o serviço acessível aos usuários nos momentos em que é necessário."
        ],
        "correta": 3,
        "feedbackAcerto": "Autenticação verifica identidade; autorização define o que a identidade pode fazer.",
        "feedbackErro": "A resposta correta é:\n\nautenticação, pois confirma se o usuário é realmente quem afirma ser antes do acesso.\n\nComentário:\nAutenticação verifica identidade; autorização define o que a identidade pode fazer.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Quem é você? = autenticação. O que você pode fazer? = autorização.",
        "assunto": "seguranca",
        "id": "seguranca_044",
        "subtopico": "autenticação, senhas e controle de acesso"
    },
    {
        "pergunta": "Além da senha, um portal exige um código temporário gerado no celular. A principal vantagem dessa configuração é:",
        "alternativas": [
            "eliminar a necessidade de proteger o celular, pois o código temporário não pode ser explorado por terceiros.",
            "garantir que a conta fique imune a comprometimento, inclusive diante de phishing ou engenharia social.",
            "substituir a autenticação por autorização, pois o código define quais recursos o usuário pode acessar.",
            "transformar a senha em chave pública para que qualquer servidor consiga validar a identidade do usuário.",
            "combinar fatores diferentes, dificultando o acesso indevido mesmo se a senha for descoberta."
        ],
        "correta": 4,
        "feedbackAcerto": "2FA/MFA adiciona fator independente e reduz o impacto do comprometimento de uma senha.",
        "feedbackErro": "A resposta correta é:\n\ncombinar fatores diferentes, dificultando o acesso indevido mesmo se a senha for descoberta.\n\nComentário:\n2FA/MFA adiciona fator independente e reduz o impacto do comprometimento de uma senha.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Dois fatores devem vir de categorias distintas, não apenas duas senhas.",
        "assunto": "seguranca",
        "id": "seguranca_045",
        "subtopico": "autenticação, senhas e controle de acesso"
    },
    {
        "pergunta": "Uma aplicação utiliza impressão digital para validar a identidade do usuário. Esse fator de autenticação corresponde a:",
        "alternativas": [
            "algo que o usuário é, pois utiliza uma característica biométrica vinculada à pessoa.",
            "algo que o usuário sabe, pois a impressão digital funciona como uma senha memorizada.",
            "algo que o usuário possui, pois a característica biométrica é armazenada no dispositivo usado.",
            "algum lugar onde o usuário está, pois a biometria depende da localização física do equipamento.",
            "algo que o usuário faz, pois toda autenticação biométrica se baseia em comportamento digitado pelo usuário."
        ],
        "correta": 0,
        "feedbackAcerto": "Biometria clássica é fator de inerência: algo que o usuário é.",
        "feedbackErro": "A resposta correta é:\n\nalgo que o usuário é, pois utiliza uma característica biométrica vinculada à pessoa.\n\nComentário:\nBiometria clássica é fator de inerência: algo que o usuário é.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Senha = sabe; token = possui; biometria = é.",
        "assunto": "seguranca",
        "id": "seguranca_046",
        "subtopico": "autenticação, senhas e controle de acesso"
    },
    {
        "pergunta": "Um professor recebe acesso ao sistema de notas, mas não às configurações administrativas que não precisa utilizar. A política aplicada é o princípio do:",
        "alternativas": [
            "não repúdio, segundo o qual cada usuário deve aceitar formalmente todas as ações registradas no sistema.",
            "menor privilégio, segundo o qual cada usuário recebe as permissões necessárias às suas funções.",
            "controle físico, segundo o qual o acesso lógico depende da presença do usuário em prédio autorizado.",
            "backup mínimo, segundo o qual cada usuário mantém cópias dos arquivos que criou pessoalmente.",
            "anonimato, segundo o qual permissões são atribuídas sem registrar a identidade dos usuários do sistema."
        ],
        "correta": 1,
        "feedbackAcerto": "Menor privilégio limita permissões ao necessário para executar as atribuições.",
        "feedbackErro": "A resposta correta é:\n\nmenor privilégio, segundo o qual cada usuário recebe as permissões necessárias às suas funções.\n\nComentário:\nMenor privilégio limita permissões ao necessário para executar as atribuições.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Se o usuário não precisa de uma permissão, não deve recebê-la.",
        "assunto": "seguranca",
        "id": "seguranca_047",
        "subtopico": "autenticação, senhas e controle de acesso"
    },
    {
        "pergunta": "Uma conta exige senha e um aplicativo autenticador. Esses dois elementos pertencem, respectivamente, aos fatores:",
        "alternativas": [
            "algo que o usuário é e algo que o usuário sabe.",
            "algo que o usuário possui e algo que o usuário é, considerados nessa ordem durante a autenticação.",
            "algo que o usuário sabe e algo que o usuário possui.",
            "algo que o usuário sabe e algo que o usuário é.",
            "algo que o usuário faz e algo que o usuário sabe."
        ],
        "correta": 2,
        "feedbackAcerto": "Senha é conhecimento; aplicativo/token no dispositivo representa posse.",
        "feedbackErro": "A resposta correta é:\n\nalgo que o usuário sabe e algo que o usuário possui.\n\nComentário:\nSenha é conhecimento; aplicativo/token no dispositivo representa posse.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Classifique os fatores antes de contar quantos mecanismos foram usados.",
        "assunto": "seguranca",
        "id": "seguranca_048",
        "subtopico": "autenticação, senhas e controle de acesso"
    },
    {
        "pergunta": "Após várias tentativas consecutivas de senha incorreta, uma conta é bloqueada por alguns minutos. Esse controle busca principalmente:",
        "alternativas": [
            "garantir que o usuário deixe de esquecer a senha utilizada para acessar o sistema.",
            "impedir que usuários autenticados alterem arquivos aos quais possuem permissão de escrita.",
            "substituir o uso de autenticação multifator por um mecanismo mais simples de identificação.",
            "reduzir a eficiência de ataques automatizados de adivinhação de senhas.",
            "evitar que o sistema fique indisponível quando houver falha no servidor responsável pelos acessos."
        ],
        "correta": 3,
        "feedbackAcerto": "Bloqueio ou atraso após falhas reduz a velocidade de ataques de força bruta.",
        "feedbackErro": "A resposta correta é:\n\nreduzir a eficiência de ataques automatizados de adivinhação de senhas.\n\nComentário:\nBloqueio ou atraso após falhas reduz a velocidade de ataques de força bruta.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Controle de tentativas não substitui 2FA, mas dificulta adivinhação automatizada.",
        "assunto": "seguranca",
        "id": "seguranca_049",
        "subtopico": "autenticação, senhas e controle de acesso"
    },
    {
        "pergunta": "Uma escola mantém cópias dos dados acadêmicos para restaurá-los caso arquivos sejam apagados ou corrompidos. Essa prática corresponde a:",
        "alternativas": [
            "sincronização, que replica alterações e por isso substitui integralmente qualquer estratégia de recuperação.",
            "cache, que guarda dados temporários para acelerar acesso sem ter como objetivo principal a recuperação.",
            "criptografia, que protege confidencialidade, mas não cria uma cópia independente para restauração.",
            "compactação, que reduz espaço ocupado, mas não representa por si só uma estratégia de cópia de segurança.",
            "backup, que cria cópias destinadas à recuperação de dados após perda, falha ou incidente."
        ],
        "correta": 4,
        "feedbackAcerto": "Backup mantém cópias para recuperação; sincronização e cache têm finalidades diferentes.",
        "feedbackErro": "A resposta correta é:\n\nbackup, que cria cópias destinadas à recuperação de dados após perda, falha ou incidente.\n\nComentário:\nBackup mantém cópias para recuperação; sincronização e cache têm finalidades diferentes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Uma cópia de segurança deve permitir restaurar dados quando o original não estiver disponível ou íntegro.",
        "assunto": "seguranca",
        "id": "seguranca_050",
        "subtopico": "backup, continuidade e recuperação"
    },
    {
        "pergunta": "Em uma rotina, todo o conjunto selecionado de arquivos é copiado a cada execução, independentemente de alterações anteriores. Trata-se de backup:",
        "alternativas": [
            "completo, que copia todos os dados selecionados em cada execução da rotina.",
            "incremental, que copia mudanças ocorridas desde o backup anterior de qualquer tipo.",
            "diferencial, que copia mudanças acumuladas desde o último backup completo realizado.",
            "espelhado, que necessariamente mantém histórico de todas as versões apagadas no ambiente original.",
            "contínuo, que exige gravação de cada alteração em mídia física removível no mesmo instante em que ocorre."
        ],
        "correta": 0,
        "feedbackAcerto": "Backup completo copia todo o conjunto selecionado.",
        "feedbackErro": "A resposta correta é:\n\ncompleto, que copia todos os dados selecionados em cada execução da rotina.\n\nComentário:\nBackup completo copia todo o conjunto selecionado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Full = tudo; incremental = desde o último backup; diferencial = desde o último full.",
        "assunto": "seguranca",
        "id": "seguranca_051",
        "subtopico": "backup, continuidade e recuperação"
    },
    {
        "pergunta": "Após um backup completo feito no domingo, o procedimento de segunda-feira copia apenas os arquivos alterados desde a cópia realizada no domingo. Na terça, copia apenas o que mudou desde a cópia de segunda. O método é:",
        "alternativas": [
            "diferencial, pois cada execução copia alterações acumuladas desde o último backup completo.",
            "incremental, pois cada execução copia alterações desde o backup realizado imediatamente antes.",
            "completo, pois cada dia repete toda a seleção original independentemente das mudanças ocorridas.",
            "espelhamento, pois qualquer alteração é replicada sem manter conjuntos de cópia independentes.",
            "arquivamento, pois os arquivos copiados são retirados do ambiente de produção após cada execução."
        ],
        "correta": 1,
        "feedbackAcerto": "Incremental copia mudanças desde a última cópia realizada, reduzindo volume diário.",
        "feedbackErro": "A resposta correta é:\n\nincremental, pois cada execução copia alterações desde o backup realizado imediatamente antes.\n\nComentário:\nIncremental copia mudanças desde a última cópia realizada, reduzindo volume diário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "No incremental, a restauração pode exigir o full e a cadeia de incrementais.",
        "assunto": "seguranca",
        "id": "seguranca_052",
        "subtopico": "backup, continuidade e recuperação"
    },
    {
        "pergunta": "Para reduzir impacto de ransomware, qual prática de backup é mais adequada?",
        "alternativas": [
            "manter a única cópia de segurança em pasta sincronizada com permissão de escrita para todos os usuários.",
            "substituir cópias de segurança por antivírus, pois um sistema atualizado torna a restauração desnecessária.",
            "manter cópias isoladas ou protegidas contra alteração pelo mesmo ambiente comprometido e testar a restauração.",
            "armazenar todas as cópias na mesma unidade do computador de origem para facilitar o acesso imediato.",
            "permitir que qualquer conta administrativa apague versões históricas sem autenticação adicional, registro de auditoria ou aprovação posterior."
        ],
        "correta": 2,
        "feedbackAcerto": "Backups resistentes a ransomware precisam estar protegidos do mesmo comprometimento e ser restauráveis.",
        "feedbackErro": "A resposta correta é:\n\nmanter cópias isoladas ou protegidas contra alteração pelo mesmo ambiente comprometido e testar a restauração.\n\nComentário:\nBackups resistentes a ransomware precisam estar protegidos do mesmo comprometimento e ser restauráveis.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Backup conectado e gravável pelo mesmo ambiente pode ser atingido pelo ransomware.",
        "assunto": "seguranca",
        "id": "seguranca_053",
        "subtopico": "backup, continuidade e recuperação"
    },
    {
        "pergunta": "Um serviço permite recuperar uma versão do documento anterior a uma edição incorreta. Esse recurso ajuda na segurança porque:",
        "alternativas": [
            "o versionamento impede que qualquer usuário com permissão de edição faça alterações futuras no documento.",
            "cada versão funciona como criptografia do arquivo e torna o conteúdo ilegível para pessoas não autorizadas.",
            "o histórico substitui cópias de segurança externas em todos os cenários de perda ou indisponibilidade.",
            "o histórico de versões pode permitir retorno a um estado anterior do arquivo após alteração indevida.",
            "cada versão apaga automaticamente os metadados anteriores para garantir anonimização do documento."
        ],
        "correta": 3,
        "feedbackAcerto": "Versionamento ajuda a recuperar estados anteriores, mas não substitui toda estratégia de backup.",
        "feedbackErro": "A resposta correta é:\n\no histórico de versões pode permitir retorno a um estado anterior do arquivo após alteração indevida.\n\nComentário:\nVersionamento ajuda a recuperar estados anteriores, mas não substitui toda estratégia de backup.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Histórico de versões é útil contra edição acidental e alguns incidentes, desde que esteja protegido.",
        "assunto": "seguranca",
        "id": "seguranca_054",
        "subtopico": "backup, continuidade e recuperação"
    },
    {
        "pergunta": "A regra 3-2-1 de backup é normalmente resumida como:",
        "alternativas": [
            "três senhas para cada arquivo, duas contas administrativas e um antivírus instalado no servidor principal.",
            "três backups completos diários, dois diferenciais por hora e um incremental a cada alteração registrada.",
            "três servidores no mesmo rack, duas unidades no mesmo equipamento e uma pasta sincronizada em rede.",
            "três usuários autorizados, duas chaves de criptografia e uma assinatura digital para cada cópia produzida pela política de backup.",
            "três cópias dos dados, em dois tipos de mídia, com pelo menos uma cópia mantida fora do ambiente principal."
        ],
        "correta": 4,
        "feedbackAcerto": "A regra 3-2-1 busca diversidade e separação das cópias para reduzir falhas correlacionadas.",
        "feedbackErro": "A resposta correta é:\n\ntrês cópias dos dados, em dois tipos de mídia, com pelo menos uma cópia mantida fora do ambiente principal.\n\nComentário:\nA regra 3-2-1 busca diversidade e separação das cópias para reduzir falhas correlacionadas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A ideia central é não concentrar todas as cópias no mesmo meio ou local.",
        "assunto": "seguranca",
        "id": "seguranca_055",
        "subtopico": "backup, continuidade e recuperação"
    },
    {
        "pergunta": "Uma organização realiza backups diariamente, mas nunca verifica se os arquivos podem ser restaurados. O principal problema dessa prática é:",
        "alternativas": [
            "a existência da cópia não comprova que a recuperação funcionará quando os dados forem realmente necessários.",
            "os backups deixam de ser considerados cópias de segurança caso não sejam abertos diariamente pelos usuários.",
            "a ausência de teste transforma automaticamente todos os backups completos em incrementais após uma semana.",
            "o sistema perde a confidencialidade dos dados porque restaurações são a única forma de validar criptografia.",
            "o histórico de versões deixa de existir, pois testes de restauração são responsáveis por gerar cada versão."
        ],
        "correta": 0,
        "feedbackAcerto": "Testes de restauração validam se cópias estão íntegras e se o processo de recuperação funciona.",
        "feedbackErro": "A resposta correta é:\n\na existência da cópia não comprova que a recuperação funcionará quando os dados forem realmente necessários.\n\nComentário:\nTestes de restauração validam se cópias estão íntegras e se o processo de recuperação funciona.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Backup confiável é backup que pode ser restaurado.",
        "assunto": "seguranca",
        "id": "seguranca_056",
        "subtopico": "backup, continuidade e recuperação"
    },
    {
        "pergunta": "Uma rede Wi-Fi doméstica ainda utiliza senha padrão do roteador e configuração antiga. Qual medida aumenta de forma adequada a segurança?",
        "alternativas": [
            "ocultar o nome da rede e manter a senha padrão, pois o SSID invisível impede conexões não autorizadas.",
            "alterar credenciais padrão, usar padrão de proteção atual e manter firmware do equipamento atualizado.",
            "desativar a criptografia do Wi-Fi e confiar no firewall instalado nos computadores conectados.",
            "usar uma senha curta compartilhada publicamente, desde que o endereço do roteador tenha sido alterado.",
            "manter firmware antigo para evitar mudanças de configuração que possam afetar dispositivos já conectados."
        ],
        "correta": 1,
        "feedbackAcerto": "Credenciais únicas, criptografia atual e atualização do roteador são controles complementares.",
        "feedbackErro": "A resposta correta é:\n\nalterar credenciais padrão, usar padrão de proteção atual e manter firmware do equipamento atualizado.\n\nComentário:\nCredenciais únicas, criptografia atual e atualização do roteador são controles complementares.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Ocultar SSID não substitui autenticação e criptografia adequadas.",
        "assunto": "seguranca",
        "id": "seguranca_057",
        "subtopico": "redes, nuvem e ambientes seguros"
    },
    {
        "pergunta": "Um funcionário usa VPN corporativa para acessar sistemas internos a partir de casa. A VPN ajuda porque:",
        "alternativas": [
            "garante que o computador remoto esteja livre de malware antes de qualquer conexão com a rede corporativa.",
            "impede que o usuário acesse páginas fraudulentas ou informe credenciais em formulários falsos na Internet.",
            "cria um canal protegido para o tráfego entre o dispositivo e a infraestrutura configurada pela organização.",
            "substitui autenticação multifator, antivírus, atualizações e demais controles aplicados ao dispositivo remoto.",
            "elimina qualquer risco decorrente de arquivos maliciosos baixados durante a sessão de trabalho remoto."
        ],
        "correta": 2,
        "feedbackAcerto": "VPN protege a comunicação, mas não garante a segurança completa do endpoint ou do comportamento do usuário.",
        "feedbackErro": "A resposta correta é:\n\ncria um canal protegido para o tráfego entre o dispositivo e a infraestrutura configurada pela organização.\n\nComentário:\nVPN protege a comunicação, mas não garante a segurança completa do endpoint ou do comportamento do usuário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Canal protegido não significa dispositivo protegido contra todas as ameaças.",
        "assunto": "seguranca",
        "id": "seguranca_058",
        "subtopico": "redes, nuvem e ambientes seguros"
    },
    {
        "pergunta": "Em um serviço de nuvem, o provedor protege a infraestrutura física, enquanto o cliente continua responsável por aspectos como contas, permissões e dados conforme o serviço contratado. Esse modelo é chamado de:",
        "alternativas": [
            "confidencialidade total, pois o provedor assume automaticamente qualquer responsabilidade relacionada aos dados.",
            "backup terceirizado, pois toda informação na nuvem passa a ter cópias independentes sob responsabilidade do provedor.",
            "autenticação federada, pois todos os clientes usam necessariamente a mesma identidade para acessar os serviços.",
            "responsabilidade compartilhada, pois provedor e cliente possuem deveres de segurança em camadas diferentes.",
            "anonimização distribuída, pois dados armazenados em nuvem deixam de ser considerados identificáveis."
        ],
        "correta": 3,
        "feedbackAcerto": "Na nuvem, responsabilidades variam conforme o modelo, mas segurança não é atribuída integralmente a uma única parte.",
        "feedbackErro": "A resposta correta é:\n\nresponsabilidade compartilhada, pois provedor e cliente possuem deveres de segurança em camadas diferentes.\n\nComentário:\nNa nuvem, responsabilidades variam conforme o modelo, mas segurança não é atribuída integralmente a uma única parte.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Nuvem não transfere ao provedor todas as responsabilidades do cliente.",
        "assunto": "seguranca",
        "id": "seguranca_059",
        "subtopico": "redes, nuvem e ambientes seguros"
    },
    {
        "pergunta": "Um usuário precisa acessar informação sensível enquanto está conectado a uma rede Wi-Fi pública desconhecida. A conduta mais prudente é:",
        "alternativas": [
            "desativar HTTPS para reduzir a quantidade de dados expostos aos demais usuários conectados à rede pública.",
            "compartilhar arquivos por links públicos para não precisar autenticar a conta enquanto estiver fora da empresa.",
            "usar a mesma senha em diferentes serviços, pois isso diminui o tempo de exposição durante o acesso remoto.",
            "desativar atualizações e antivírus durante a conexão para evitar consumo de banda e interrupções no acesso.",
            "evitar a operação ou utilizar conexão confiável e mecanismos adicionais de proteção definidos pela organização."
        ],
        "correta": 4,
        "feedbackAcerto": "Redes públicas podem apresentar maior risco de interceptação, pontos falsos e monitoramento.",
        "feedbackErro": "A resposta correta é:\n\nevitar a operação ou utilizar conexão confiável e mecanismos adicionais de proteção definidos pela organização.\n\nComentário:\nRedes públicas podem apresentar maior risco de interceptação, pontos falsos e monitoramento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Para atividade sensível, prefira rede confiável e conexão protegida.",
        "assunto": "seguranca",
        "id": "seguranca_060",
        "subtopico": "redes, nuvem e ambientes seguros"
    },
    {
        "pergunta": "Uma rede sem fio utiliza WEP. Do ponto de vista de segurança, a avaliação mais adequada é:",
        "alternativas": [
            "WEP é um padrão antigo e vulnerável, devendo ser substituído por mecanismo de proteção mais atual.",
            "WEP oferece proteção superior ao WPA3 porque usa uma chave fixa que simplifica a autenticação dos clientes.",
            "WEP é equivalente ao HTTPS e protege todo o tráfego da aplicação mesmo depois que ele deixa a rede Wi-Fi.",
            "WEP permanece recomendado quando a senha contém muitos caracteres e o nome da rede não é divulgado.",
            "WEP substitui a necessidade de senha forte no roteador, já que sua função é autenticar o administrador do equipamento."
        ],
        "correta": 0,
        "feedbackAcerto": "WEP possui fragilidades conhecidas e não é adequado para proteger redes atuais.",
        "feedbackErro": "A resposta correta é:\n\nWEP é um padrão antigo e vulnerável, devendo ser substituído por mecanismo de proteção mais atual.\n\nComentário:\nWEP possui fragilidades conhecidas e não é adequado para proteger redes atuais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em concursos, WEP costuma aparecer como padrão obsoleto e inseguro.",
        "assunto": "seguranca",
        "id": "seguranca_061",
        "subtopico": "redes, nuvem e ambientes seguros"
    },
    {
        "pergunta": "Comparado a padrões Wi-Fi antigos, o WPA3 foi desenvolvido com melhorias de segurança para redes sem fio. É correto afirmar que ele:",
        "alternativas": [
            "elimina a necessidade de senha ou autenticação quando a rede é utilizada em ambiente residencial.",
            "representa uma evolução dos mecanismos de proteção e autenticação empregados em redes Wi-Fi atuais.",
            "substitui protocolos da Web e faz com que páginas HTTP passem a oferecer a mesma proteção do HTTPS.",
            "funciona como antivírus do roteador, analisando arquivos baixados antes que cheguem aos dispositivos.",
            "impede qualquer ataque de engenharia social realizado contra usuários conectados à rede sem fio."
        ],
        "correta": 1,
        "feedbackAcerto": "WPA3 é uma evolução dos mecanismos de segurança Wi-Fi, mas não substitui outros controles.",
        "feedbackErro": "A resposta correta é:\n\nrepresenta uma evolução dos mecanismos de proteção e autenticação empregados em redes Wi-Fi atuais.\n\nComentário:\nWPA3 é uma evolução dos mecanismos de segurança Wi-Fi, mas não substitui outros controles.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda segurança do enlace Wi-Fi com segurança de aplicações e comportamento do usuário.",
        "assunto": "seguranca",
        "id": "seguranca_062",
        "subtopico": "redes, nuvem e ambientes seguros"
    },
    {
        "pergunta": "Um arquivo armazenado em serviço de nuvem foi compartilhado com a opção 'qualquer pessoa com o link pode editar'. Qual é o principal risco dessa configuração?",
        "alternativas": [
            "o arquivo deixa automaticamente de possuir extensão e passa a ser interpretado como página da Web.",
            "a configuração impede o proprietário de recuperar versões anteriores mesmo quando o serviço oferece histórico.",
            "pessoas não previstas podem obter acesso e modificar o conteúdo se o link for divulgado ou repassado.",
            "o documento passa a usar protocolo de correio eletrônico e deixa de ser armazenado no serviço de nuvem.",
            "o compartilhamento público ativa criptografia ponta a ponta e bloqueia o acesso de usuários autorizados."
        ],
        "correta": 2,
        "feedbackAcerto": "Permissões excessivamente abertas em nuvem podem expor dados ou permitir alterações indevidas.",
        "feedbackErro": "A resposta correta é:\n\npessoas não previstas podem obter acesso e modificar o conteúdo se o link for divulgado ou repassado.\n\nComentário:\nPermissões excessivamente abertas em nuvem podem expor dados ou permitir alterações indevidas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em compartilhamento por link, avalie quem pode acessar e qual nível de permissão foi concedido.",
        "assunto": "seguranca",
        "id": "seguranca_063",
        "subtopico": "redes, nuvem e ambientes seguros"
    },
    {
        "pergunta": "Uma instituição coleta dados pessoais para prestar determinado serviço. Segundo a lógica de minimização de dados presente no banco, a prática adequada é:",
        "alternativas": [
            "reunir o maior volume possível de informações para usos futuros ainda não definidos pela instituição.",
            "manter indefinidamente todos os dados coletados, mesmo depois de encerrada a finalidade que justificou o uso.",
            "compartilhar os dados com qualquer setor interno desde que a organização possua controle de acesso ao sistema.",
            "coletar e tratar dados necessários e pertinentes à finalidade definida para o tratamento.",
            "substituir dados pessoais por senhas para que deixem de estar submetidos a regras de proteção e governança."
        ],
        "correta": 3,
        "feedbackAcerto": "Minimização orienta a limitar coleta e tratamento ao necessário para a finalidade.",
        "feedbackErro": "A resposta correta é:\n\ncoletar e tratar dados necessários e pertinentes à finalidade definida para o tratamento.\n\nComentário:\nMinimização orienta a limitar coleta e tratamento ao necessário para a finalidade.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Mais dados não significam melhor governança; a coleta deve ser compatível com a finalidade.",
        "assunto": "seguranca",
        "id": "seguranca_064",
        "subtopico": "LGPD, privacidade e governança"
    },
    {
        "pergunta": "Uma base que estava restrita a usuários autorizados é exposta publicamente por erro de configuração. No contexto de proteção de dados, essa situação pode caracterizar:",
        "alternativas": [
            "anonimização, pois os dados deixam de identificar pessoas quando ficam disponíveis publicamente.",
            "minimização, pois o acesso público reduz a quantidade de controles aplicados ao conjunto de informações.",
            "pseudonimização, pois o erro de configuração substitui automaticamente identificadores por códigos internos.",
            "retenção regular, pois a exposição passa a ser permitida enquanto os dados permanecerem armazenados no sistema.",
            "incidente de segurança com exposição ou acesso não autorizado a dados."
        ],
        "correta": 4,
        "feedbackAcerto": "Exposição ou acesso indevido pode constituir incidente de segurança envolvendo dados.",
        "feedbackErro": "A resposta correta é:\n\nincidente de segurança com exposição ou acesso não autorizado a dados.\n\nComentário:\nExposição ou acesso indevido pode constituir incidente de segurança envolvendo dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Vazamento não depende de invasão sofisticada; configuração incorreta também pode expor dados.",
        "assunto": "seguranca",
        "id": "seguranca_065",
        "subtopico": "LGPD, privacidade e governança"
    },
    {
        "pergunta": "Uma organização substitui identificadores diretos por códigos, mas mantém separadamente uma informação que permite reidentificar os titulares. Esse tratamento é mais compatível com:",
        "alternativas": [
            "pseudonimização, pois a reidentificação ainda pode ser possível mediante informação adicional mantida separadamente.",
            "anonimização, pois qualquer substituição de nome por código torna impossível identificar a pessoa em qualquer situação.",
            "criptografia simétrica, pois os códigos funcionam necessariamente como chaves para recuperar os dados originais.",
            "backup diferencial, pois a tabela de correspondência funciona como cópia das alterações feitas na base principal.",
            "compressão, pois identificadores codificados ocupam menos espaço e eliminam a relação com o titular dos dados."
        ],
        "correta": 0,
        "feedbackAcerto": "Pseudonimização reduz associação direta, mas pode permitir reidentificação com informação adicional.",
        "feedbackErro": "A resposta correta é:\n\npseudonimização, pois a reidentificação ainda pode ser possível mediante informação adicional mantida separadamente.\n\nComentário:\nPseudonimização reduz associação direta, mas pode permitir reidentificação com informação adicional.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Se há possibilidade de reidentificar usando informação separada, não trate como anonimização plena.",
        "assunto": "seguranca",
        "id": "seguranca_066",
        "subtopico": "LGPD, privacidade e governança"
    },
    {
        "pergunta": "Em uma atividade administrativa, são tratados dados referentes à saúde de uma pessoa. No banco de questões, esse tipo de informação é tratado como exemplo de:",
        "alternativas": [
            "dado anonimizado por padrão, porque informações de saúde não podem ser vinculadas à identidade do titular.",
            "dado pessoal sensível, que exige atenção especial em razão de sua natureza.",
            "dado público automático, porque registros de saúde são necessários para prestação de serviços institucionais.",
            "metadado técnico, porque a informação descreve características do sistema em que o cadastro foi criado.",
            "dado de autenticação, porque qualquer dado relacionado à pessoa pode funcionar diretamente como senha de acesso."
        ],
        "correta": 1,
        "feedbackAcerto": "O banco inclui dados de saúde entre exemplos de dados pessoais sensíveis.",
        "feedbackErro": "A resposta correta é:\n\ndado pessoal sensível, que exige atenção especial em razão de sua natureza.\n\nComentário:\nO banco inclui dados de saúde entre exemplos de dados pessoais sensíveis.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em questões de LGPD, saúde aparece frequentemente como exemplo de dado sensível.",
        "assunto": "seguranca",
        "id": "seguranca_067",
        "subtopico": "LGPD, privacidade e governança"
    },
    {
        "pergunta": "Uma equipe considera requisitos de privacidade desde a fase de planejamento de um novo sistema, e não apenas depois de colocá-lo em produção. Essa abordagem representa:",
        "alternativas": [
            "resposta a incidentes, que só pode ser executada depois que uma violação de segurança já ocorreu.",
            "backup by default, que cria cópias automáticas de todos os dados antes da definição de sua finalidade.",
            "privacy by design, que incorpora proteção de dados desde a concepção de processos e sistemas.",
            "autenticação contínua, que exige nova senha a cada alteração de qualquer campo do sistema pelo usuário.",
            "criptografia reversível, que permite retirar controles de privacidade quando o sistema entra em operação."
        ],
        "correta": 2,
        "feedbackAcerto": "Privacy by design incorpora privacidade desde a concepção do serviço ou sistema.",
        "feedbackErro": "A resposta correta é:\n\nprivacy by design, que incorpora proteção de dados desde a concepção de processos e sistemas.\n\nComentário:\nPrivacy by design incorpora privacidade desde a concepção do serviço ou sistema.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A pista é 'desde o planejamento', e não correção posterior.",
        "assunto": "seguranca",
        "id": "seguranca_068",
        "subtopico": "LGPD, privacidade e governança"
    },
    {
        "pergunta": "Discos que armazenaram dados pessoais serão descartados. Qual conduta está mais alinhada à segurança da informação?",
        "alternativas": [
            "apagar os atalhos dos arquivos e encaminhar imediatamente as mídias para reutilização externa.",
            "renomear os arquivos antes do descarte, pois nomes diferentes impedem que seu conteúdo seja recuperado.",
            "compactar os dados sem senha e manter a mídia em local público até que seja recolhida por terceiros.",
            "aplicar procedimento de descarte seguro que reduza a possibilidade de recuperação indevida dos dados.",
            "formatar rapidamente a unidade e considerar impossível qualquer recuperação sem avaliar o nível de sensibilidade."
        ],
        "correta": 3,
        "feedbackAcerto": "Descarte seguro de mídias busca impedir recuperação indevida de informações.",
        "feedbackErro": "A resposta correta é:\n\naplicar procedimento de descarte seguro que reduza a possibilidade de recuperação indevida dos dados.\n\nComentário:\nDescarte seguro de mídias busca impedir recuperação indevida de informações.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Excluir ou renomear arquivos não é o mesmo que sanitizar adequadamente uma mídia.",
        "assunto": "seguranca",
        "id": "seguranca_069",
        "subtopico": "LGPD, privacidade e governança"
    },
    {
        "pergunta": "Uma política de mesa limpa determina que documentos sensíveis não permaneçam expostos quando o posto de trabalho estiver desocupado. O objetivo principal é:",
        "alternativas": [
            "substituir controles digitais de acesso por regras físicas aplicadas a documentos impressos.",
            "garantir disponibilidade de documentos ao manter todas as informações armazenadas sobre a mesa do usuário.",
            "dispensar o uso de armários ou locais controlados, pois a política determina o descarte diário de documentos.",
            "transformar documentos impressos em dados anonimizados quando o usuário deixar o ambiente de trabalho.",
            "reduzir acesso visual, cópia ou retirada indevida de informações deixadas em áreas de trabalho."
        ],
        "correta": 4,
        "feedbackAcerto": "Clean desk reduz exposição física de documentos e informações.",
        "feedbackErro": "A resposta correta é:\n\nreduzir acesso visual, cópia ou retirada indevida de informações deixadas em áreas de trabalho.\n\nComentário:\nClean desk reduz exposição física de documentos e informações.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Segurança da informação também envolve papéis, telas, anotações e outras fontes visíveis.",
        "assunto": "seguranca",
        "id": "seguranca_070",
        "subtopico": "LGPD, privacidade e governança"
    }
];
