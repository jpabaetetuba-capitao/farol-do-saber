// ==========================
// FAROL DO SABER - SOFTWARE
// Questões revisadas: gabarito balanceado, feedback sem letra fixa e duplicidades removidas.
// ==========================

const software = [
    {
        "pergunta": "Em informática, o termo software refere-se:",
        "alternativas": [
            "Ao conjunto de componentes físicos responsáveis pelo processamento e armazenamento de dados.",
            "Exclusivamente ao sistema operacional instalado no equipamento.",
            "Ao conjunto de programas, instruções e dados que orientam o funcionamento do computador.",
            "Apenas aos dispositivos de entrada e saída conectados ao computador.",
            "À memória RAM e aos dispositivos de armazenamento."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Software corresponde à parte lógica do computador, formada por programas, instruções e dados.",
        "feedbackErro": "A resposta correta é:\n\nAo conjunto de programas, instruções e dados que orientam o funcionamento do computador.\n\nComentário:\nSoftware corresponde à parte lógica do computador, formada por programas, instruções e dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Software = programas e instruções."
    },
    {
        "pergunta": "Assinale a alternativa que apresenta apenas exemplos de software.",
        "alternativas": [
            "SSD, Windows e Mouse.",
            "Processador, Linux e RAM.",
            "Monitor, Impressora e Windows.",
            "Teclado, LibreOffice e Scanner.",
            "Windows, Linux e LibreOffice."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! A resposta escolhida está de acordo com o conteúdo cobrado pela questão.",
        "feedbackErro": "A resposta correta é:\n\nWindows, Linux e LibreOffice.\n\nComentário:\nA resposta escolhida está de acordo com o conteúdo cobrado pela questão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Leia atentamente cada item da alternativa."
    },
    {
        "pergunta": "O sistema operacional é classificado como:",
        "alternativas": [
            "Software de armazenamento.",
            "Hardware de controle.",
            "Periférico de entrada.",
            "Memória permanente.",
            "Software básico."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! O sistema operacional é um software básico essencial para o funcionamento do computador.",
        "feedbackErro": "A resposta correta é:\n\nSoftware básico.\n\nComentário:\nO sistema operacional é um software básico essencial para o funcionamento do computador.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Sistema Operacional = Software Básico."
    },
    {
        "pergunta": "Assinale a alternativa que apresenta apenas softwares aplicativos.",
        "alternativas": [
            "Windows e Linux.",
            "Word, Excel e LibreOffice Writer.",
            "RAM, SSD e Word.",
            "Windows, Word e CPU.",
            "Linux, Processador e Excel."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Word, Excel e LibreOffice Writer são softwares aplicativos.",
        "feedbackErro": "A resposta correta é:\n\nWord, Excel e LibreOffice Writer.\n\nComentário:\nWord, Excel e LibreOffice Writer são softwares aplicativos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Aplicativo = realiza tarefas para o usuário."
    },
    {
        "pergunta": "A principal função de um sistema operacional é:",
        "alternativas": [
            "Substituir os aplicativos instalados.",
            "Realizar exclusivamente acesso à internet.",
            "Armazenar permanentemente os arquivos do usuário.",
            "Substituir o processador durante a execução dos programas.",
            "Controlar os recursos do computador e permitir a execução dos programas."
        ],
        "correta": 4,
        "feedbackAcerto": "Excelente! O sistema operacional gerencia os recursos do computador e permite a execução dos programas.",
        "feedbackErro": "A resposta correta é:\n\nControlar os recursos do computador e permitir a execução dos programas.\n\nComentário:\nO sistema operacional gerencia os recursos do computador e permite a execução dos programas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "SO = gerencia recursos do sistema."
    },
    {
        "pergunta": "O Microsoft Windows é classificado como:",
        "alternativas": [
            "Sistema operacional desenvolvido para gerenciar os recursos do computador.",
            "Software aplicativo utilizado para edição de textos.",
            "Dispositivo de armazenamento de dados.",
            "Software utilizado exclusivamente para acesso à internet.",
            "Linguagem de programação."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O Windows é um sistema operacional responsável pelo gerenciamento dos recursos do computador.",
        "feedbackErro": "A resposta correta é:\n\nSistema operacional desenvolvido para gerenciar os recursos do computador.\n\nComentário:\nO Windows é um sistema operacional responsável pelo gerenciamento dos recursos do computador.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Windows = Sistema Operacional."
    },
    {
        "pergunta": "Sobre o sistema operacional Linux, assinale a alternativa correta.",
        "alternativas": [
            "É um software proprietário desenvolvido pela Microsoft.",
            "É um aplicativo utilizado para edição de planilhas.",
            "É um sistema operacional livre e de código aberto.",
            "Funciona exclusivamente em servidores.",
            "Não possui interface gráfica."
        ],
        "correta": 2,
        "feedbackAcerto": "Perfeito! O Linux é conhecido por ser um sistema operacional livre e de código aberto.",
        "feedbackErro": "A resposta correta é:\n\nÉ um sistema operacional livre e de código aberto.\n\nComentário:\nO Linux é conhecido por ser um sistema operacional livre e de código aberto.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Linux = livre e open source."
    },
    {
        "pergunta": "O Android é classificado como:",
        "alternativas": [
            "Editor de textos.",
            "Antivírus.",
            "Hardware de comunicação.",
            "Sistema operacional para dispositivos móveis.",
            "Programa de compactação."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! O Android é um sistema operacional utilizado principalmente em smartphones e tablets.",
        "feedbackErro": "A resposta correta é:\n\nSistema operacional para dispositivos móveis.\n\nComentário:\nO Android é um sistema operacional utilizado principalmente em smartphones e tablets.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Android = sistema operacional móvel."
    },
    {
        "pergunta": "Os drivers de dispositivos possuem como principal finalidade:",
        "alternativas": [
            "Armazenar arquivos do usuário.",
            "Permitir a comunicação entre o sistema operacional e os dispositivos de hardware.",
            "Substituir a memória RAM.",
            "Executar planilhas eletrônicas.",
            "Proteger o computador contra vírus."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Os drivers permitem que o sistema operacional reconheça e utilize os dispositivos de hardware.",
        "feedbackErro": "A resposta correta é:\n\nPermitir a comunicação entre o sistema operacional e os dispositivos de hardware.\n\nComentário:\nOs drivers permitem que o sistema operacional reconheça e utilize os dispositivos de hardware.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Driver = comunicação entre software e hardware."
    },
    {
        "pergunta": "Uma das principais finalidades das atualizações de software é:",
        "alternativas": [
            "Reduzir a segurança do sistema.",
            "Eliminar a necessidade de antivírus.",
            "Transformar aplicativos em hardware.",
            "Substituir permanentemente o sistema operacional.",
            "Corrigir falhas, melhorar o desempenho e aumentar a segurança."
        ],
        "correta": 4,
        "feedbackAcerto": "Excelente! Atualizações ajudam a corrigir falhas e melhorar a segurança dos sistemas.",
        "feedbackErro": "A resposta correta é:\n\nCorrigir falhas, melhorar o desempenho e aumentar a segurança.\n\nComentário:\nAtualizações ajudam a corrigir falhas e melhorar a segurança dos sistemas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Atualização = correção + desempenho + segurança."
    },
    {
        "pergunta": "Os softwares utilitários têm como principal objetivo:",
        "alternativas": [
            "Substituir o sistema operacional.",
            "Executar exclusivamente planilhas eletrônicas.",
            "Auxiliar na manutenção, proteção e otimização do sistema.",
            "Controlar diretamente o processador.",
            "Substituir os dispositivos de hardware."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Os utilitários auxiliam na manutenção e no funcionamento adequado do sistema.",
        "feedbackErro": "A resposta correta é:\n\nAuxiliar na manutenção, proteção e otimização do sistema.\n\nComentário:\nOs utilitários auxiliam na manutenção e no funcionamento adequado do sistema.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Utilitário = manutenção e suporte."
    },
    {
        "pergunta": "A principal função de um software antivírus é:",
        "alternativas": [
            "Realizar edição de documentos.",
            "Detectar, prevenir e remover softwares maliciosos.",
            "Gerenciar o hardware do computador.",
            "Compactar arquivos.",
            "Controlar a memória RAM."
        ],
        "correta": 1,
        "feedbackAcerto": "Perfeito! O antivírus atua na proteção do sistema contra ameaças digitais.",
        "feedbackErro": "A resposta correta é:\n\nDetectar, prevenir e remover softwares maliciosos.\n\nComentário:\nO antivírus atua na proteção do sistema contra ameaças digitais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Antivírus = proteção contra malware."
    },
    {
        "pergunta": "Programas como WinRAR e 7-Zip são exemplos de:",
        "alternativas": [
            "Compactadores de arquivos.",
            "Sistemas operacionais.",
            "Editores de texto.",
            "Drivers de dispositivos.",
            "Antivírus."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! WinRAR e 7-Zip são programas utilizados para compactação e descompactação de arquivos.",
        "feedbackErro": "A resposta correta é:\n\nCompactadores de arquivos.\n\nComentário:\nWinRAR e 7-Zip são programas utilizados para compactação e descompactação de arquivos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "WinRAR = compactação."
    },
    {
        "pergunta": "Assinale a alternativa que apresenta apenas navegadores de internet.",
        "alternativas": [
            "Google Chrome, Mozilla Firefox e Microsoft Edge.",
            "Windows, Linux e Android.",
            "Word, Excel e PowerPoint.",
            "WinRAR, Avast e Chrome.",
            "LibreOffice Writer, Chrome e Firefox."
        ],
        "correta": 0,
        "feedbackAcerto": "Excelente! Chrome, Firefox e Edge são navegadores web.",
        "feedbackErro": "A resposta correta é:\n\nGoogle Chrome, Mozilla Firefox e Microsoft Edge.\n\nComentário:\nChrome, Firefox e Edge são navegadores web.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Browser = navegador."
    },
    {
        "pergunta": "Sobre as suítes de escritório Microsoft Office e LibreOffice, assinale a alternativa correta.",
        "alternativas": [
            "São sistemas operacionais.",
            "São softwares utilizados exclusivamente para acesso à internet.",
            "Substituem o sistema operacional.",
            "São dispositivos de hardware.",
            "São conjuntos de aplicativos destinados à produtividade e ao trabalho com documentos."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Ambas são suítes de aplicativos voltadas à criação e edição de documentos.",
        "feedbackErro": "A resposta correta é:\n\nSão conjuntos de aplicativos destinados à produtividade e ao trabalho com documentos.\n\nComentário:\nAmbas são suítes de aplicativos voltadas à criação e edição de documentos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Office e LibreOffice = suítes de escritório."
    },
    {
        "pergunta": "Um software disponibilizado gratuitamente por tempo limitado ou com funcionalidades restritas para avaliação é denominado:",
        "alternativas": [
            "Firmware.",
            "Shareware.",
            "Sistema Operacional.",
            "Open Source.",
            "Driver."
        ],
        "correta": 1,
        "feedbackAcerto": "Perfeito! Shareware é um software distribuído para teste ou avaliação.",
        "feedbackErro": "A resposta correta é:\n\nShareware.\n\nComentário:\nShareware é um software distribuído para teste ou avaliação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Shareware = avaliação."
    },
    {
        "pergunta": "Assinale a alternativa que caracteriza corretamente um software Open Source.",
        "alternativas": [
            "É obrigatoriamente pago.",
            "Não permite modificações pelos usuários.",
            "Possui código-fonte aberto para estudo e modificação conforme a licença adotada.",
            "Funciona apenas em servidores.",
            "É um tipo de hardware."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Open Source significa código aberto.",
        "feedbackErro": "A resposta correta é:\n\nPossui código-fonte aberto para estudo e modificação conforme a licença adotada.\n\nComentário:\nOpen Source significa código aberto.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Open Source = código aberto."
    },
    {
        "pergunta": "Um software cujo código-fonte não é disponibilizado ao público e cujo uso depende das regras estabelecidas pelo fabricante é denominado:",
        "alternativas": [
            "Open Source.",
            "Shareware.",
            "Freeware.",
            "Software Proprietário.",
            "Firmware."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Softwares proprietários possuem restrições definidas pelo desenvolvedor.",
        "feedbackErro": "A resposta correta é:\n\nSoftware Proprietário.\n\nComentário:\nSoftwares proprietários possuem restrições definidas pelo desenvolvedor.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Proprietário = código fechado."
    },
    {
        "pergunta": "\nAnalise as afirmativas abaixo:\n\nI. Softwares Freeware são necessariamente Open Source.\n\nII. Softwares Shareware normalmente permitem utilização para avaliação.\n\nIII. Softwares Open Source possuem código-fonte disponível conforme a licença adotada.\n\nAssinale a alternativa correta.\n",
        "alternativas": [
            "Apenas II e III estão corretas.",
            "Apenas I está correta.",
            "Apenas II está correta.",
            "I, II e III estão corretas.",
            "Apenas I e III estão corretas."
        ],
        "correta": 0,
        "feedbackAcerto": "Excelente! Apenas as afirmativas II e III estão corretas.",
        "feedbackErro": "A resposta correta é:\n\nApenas II e III estão corretas.\n\nComentário:\nApenas as afirmativas II e III estão corretas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Freeware ≠ Open Source."
    },
    {
        "pergunta": "A ausência do driver adequado para um dispositivo pode resultar em:",
        "alternativas": [
            "Melhoria automática do desempenho.",
            "Funcionamento parcial ou total impossibilidade de utilização do dispositivo.",
            "Aumento da capacidade da memória RAM.",
            "Substituição automática do hardware.",
            "Conversão do dispositivo em software."
        ],
        "correta": 1,
        "feedbackAcerto": "Perfeito! Sem o driver correto, o sistema operacional pode não reconhecer adequadamente o dispositivo.",
        "feedbackErro": "A resposta correta é:\n\nFuncionamento parcial ou total impossibilidade de utilização do dispositivo.\n\nComentário:\nSem o driver correto, o sistema operacional pode não reconhecer adequadamente o dispositivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Sem driver = sem comunicação adequada."
    },
    {
        "pergunta": "Uma vantagem das atualizações automáticas de software é:",
        "alternativas": [
            "Corrigir vulnerabilidades e manter o sistema mais seguro.",
            "Eliminar a necessidade de backups.",
            "Aumentar permanentemente a memória RAM.",
            "Substituir o sistema operacional.",
            "Dispensar o uso de antivírus."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Atualizações ajudam a corrigir falhas e vulnerabilidades conhecidas.",
        "feedbackErro": "A resposta correta é:\n\nCorrigir vulnerabilidades e manter o sistema mais seguro.\n\nComentário:\nAtualizações ajudam a corrigir falhas e vulnerabilidades conhecidas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Atualização = segurança."
    },
    {
        "pergunta": "Assinale a alternativa que associa corretamente o conceito ao seu significado.",
        "alternativas": [
            "Firmware → software embarcado em dispositivos eletrônicos.",
            "Driver → software para compactação de arquivos.",
            "Freeware → software obrigatoriamente de código aberto.",
            "Shareware → software distribuído exclusivamente mediante pagamento prévio.",
            "Sistema Operacional → periférico de controle."
        ],
        "correta": 0,
        "feedbackAcerto": "Excelente! Firmware é um software embarcado utilizado no controle básico de equipamentos.",
        "feedbackErro": "A resposta correta é:\n\nFirmware → software embarcado em dispositivos eletrônicos.\n\nComentário:\nFirmware é um software embarcado utilizado no controle básico de equipamentos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Memorize os conceitos fundamentais."
    },
    {
        "pergunta": "\nAnalise as afirmativas abaixo:\n\nI. O Windows é um sistema operacional.\n\nII. O Linux é um software de código aberto.\n\nIII. Drivers permitem a comunicação entre hardware e sistema operacional.\n\nAssinale a alternativa correta.\n",
        "alternativas": [
            "Apenas I está correta.",
            "I, II e III estão corretas.",
            "Apenas I e II estão corretas.",
            "Apenas II e III estão corretas.",
            "Apenas III está correta."
        ],
        "correta": 1,
        "feedbackAcerto": "Perfeito! Todas as afirmativas estão corretas.",
        "feedbackErro": "A resposta correta é:\n\nI, II e III estão corretas.\n\nComentário:\nTodas as afirmativas estão corretas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Julgue cada afirmativa individualmente."
    },
    {
        "pergunta": "Observe a imagem sobre driver no Gerenciador de Dispositivos e assinale a alternativa correta.",
        "imagem": "imagens/questoes/software01.png",
        "alternativas": [
            "O dispositivo está funcionando normalmente e não apresenta falhas.",
            "O símbolo indica que o dispositivo está protegido por antivírus.",
            "O símbolo indica que uma atualização foi concluída com sucesso.",
            "O símbolo exibido normalmente indica problema de driver ou falha de reconhecimento do dispositivo pelo sistema operacional.",
            "O símbolo indica que o dispositivo foi removido permanentemente do sistema."
        ],
        "correta": 3,
        "feedbackAcerto": "\nCorreto!\n\nO triângulo amarelo exibido no Gerenciador de Dispositivos normalmente indica que existe algum problema relacionado ao dispositivo.\n\nNa maioria dos casos, o problema está relacionado à ausência, incompatibilidade ou falha do driver utilizado pelo hardware.\n",
        "feedbackErro": "A resposta correta é:\n\nO símbolo exibido normalmente indica problema de driver ou falha de reconhecimento do dispositivo pelo sistema operacional.\n\nComentário:\nO triângulo amarelo exibido no Gerenciador de Dispositivos normalmente indica que existe algum problema relacionado ao dispositivo.\n\nNa maioria dos casos, o problema está relacionado à ausência, incompatibilidade ou falha do driver utilizado pelo hardware.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Triângulo amarelo no Gerenciador de Dispositivos geralmente indica problema de driver."
    },
    {
        "pergunta": "Observe a imagem sobre arquivo compactado e assinale a alternativa correta.",
        "imagem": "imagens/questoes/software02.png",
        "alternativas": [
            "O arquivo apresentado é um software antivírus.",
            "Arquivos .zip não podem conter documentos ou pastas.",
            "A extensão .zip indica que o arquivo foi compactado para reduzir espaço ou facilitar o armazenamento e o envio.",
            "A extensão .zip identifica exclusivamente arquivos executáveis do Windows.",
            "Arquivos compactados não podem ser descompactados posteriormente."
        ],
        "correta": 2,
        "feedbackAcerto": "\nCorreto!\n\nA extensão .zip indica que o arquivo foi compactado.\n\nA compactação é utilizada para reduzir o tamanho dos arquivos e facilitar o armazenamento, a transferência e o compartilhamento de informações.\n",
        "feedbackErro": "A resposta correta é:\n\nA extensão .zip indica que o arquivo foi compactado para reduzir espaço ou facilitar o armazenamento e o envio.\n\nComentário:\nA extensão .zip indica que o arquivo foi compactado.\n\nA compactação é utilizada para reduzir o tamanho dos arquivos e facilitar o armazenamento, a transferência e o compartilhamento de informações.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "ZIP = arquivo compactado."
    },
    {
        "pergunta": "Observe a imagem sobre o Explorador de Arquivos e assinale a alternativa correta.",
        "imagem": "imagens/questoes/software03.png",
        "alternativas": [
            "O item destacado permite acesso apenas aos arquivos armazenados na internet.",
            "O item destacado é utilizado exclusivamente para acessar dispositivos USB.",
            "O item destacado permite apenas visualizar a Lixeira do sistema.",
            "O item destacado representa uma área do Explorador de Arquivos que reúne unidades de armazenamento, pastas do usuário e dispositivos conectados ao computador.",
            "O item destacado é utilizado exclusivamente para acessar programas instalados."
        ],
        "correta": 3,
        "feedbackAcerto": "\nCorreto!\n\nO item \"Este Computador\" é um dos principais elementos do Explorador de Arquivos do Windows.\n\nEle permite acessar unidades de armazenamento, dispositivos conectados e diversas pastas do usuário.\n",
        "feedbackErro": "A resposta correta é:\n\nO item destacado representa uma área do Explorador de Arquivos que reúne unidades de armazenamento, pastas do usuário e dispositivos conectados ao computador.\n\nComentário:\nO item &quot;Este Computador&quot; é um dos principais elementos do Explorador de Arquivos do Windows.\n\nEle permite acessar unidades de armazenamento, dispositivos conectados e diversas pastas do usuário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Este Computador = acesso às unidades, pastas e dispositivos do sistema."
    },
    {
        "pergunta": "Observe a imagem sobre ferramenta do Windows e assinale a alternativa correta.",
        "imagem": "imagens/questoes/software04.png",
        "alternativas": [
            "A imagem apresenta o Gerenciador de Dispositivos do Windows.",
            "A imagem apresenta um navegador de internet utilizado para acesso a páginas web.",
            "A imagem apresenta um software antivírus utilizado para proteção do sistema.",
            "A imagem apresenta o Microsoft Word, um software aplicativo utilizado para criação e edição de documentos de texto.",
            "A imagem apresenta o Explorador de Arquivos do Windows."
        ],
        "correta": 3,
        "feedbackAcerto": "\nCorreto!\n\nA imagem mostra o Microsoft Word, um dos programas mais utilizados para criação, edição e formatação de documentos de texto.\n\nO Word faz parte da suíte Microsoft Office e é amplamente cobrado em concursos públicos.\n",
        "feedbackErro": "A resposta correta é:\n\nA imagem apresenta o Microsoft Word, um software aplicativo utilizado para criação e edição de documentos de texto.\n\nComentário:\nA imagem mostra o Microsoft Word, um dos programas mais utilizados para criação, edição e formatação de documentos de texto.\n\nO Word faz parte da suíte Microsoft Office e é amplamente cobrado em concursos públicos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Word = editor de textos da suíte Microsoft Office."
    },
    {
        "pergunta": "Observe a imagem sobre planilha eletrônica e assinale a alternativa correta.",
        "imagem": "imagens/questoes/software05.png",
        "alternativas": [
            "A função SOMA(C2:D2) realiza a multiplicação dos valores das células C2 e D2.",
            "A fórmula apresentada calcula a média dos valores das células C2 e D2.",
            "A fórmula exibida na barra de fórmulas calcula a soma dos valores contidos nas células C2 e D2.",
            "A função SOMA(C2:D2) é utilizada exclusivamente para criar gráficos.",
            "A fórmula apresentada serve para compactar arquivos armazenados na planilha."
        ],
        "correta": 2,
        "feedbackAcerto": "\nCorreto!\n\nA função SOMA é uma das funções mais utilizadas do Microsoft Excel.\n\nA expressão:\n\n=SOMA(C2:D2)\n\nrealiza a soma dos valores contidos no intervalo de células C2 até D2.\n",
        "feedbackErro": "A resposta correta é:\n\nA fórmula exibida na barra de fórmulas calcula a soma dos valores contidos nas células C2 e D2.\n\nComentário:\nA função SOMA é uma das funções mais utilizadas do Microsoft Excel.\n\nA expressão:\n\n=SOMA(C2:D2)\n\nrealiza a soma dos valores contidos no intervalo de células C2 até D2.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "SOMA() adiciona valores de células ou intervalos."
    },
    {
        "pergunta": "Em sistemas operacionais, o kernel é responsável principalmente por:",
        "alternativas": [
            "Gerenciar recursos essenciais do sistema, como processos, memória e dispositivos.",
            "Editar documentos de texto.",
            "Criar apresentações com slides.",
            "Compactar imagens com perda.",
            "Substituir a fonte de alimentação."
        ],
        "correta": 0,
        "feedbackAcerto": "O kernel é o núcleo do sistema operacional, fazendo a mediação entre hardware e software.",
        "feedbackErro": "A resposta correta é:\n\nGerenciar recursos essenciais do sistema, como processos, memória e dispositivos.\n\nComentário:\nO kernel é o núcleo do sistema operacional, fazendo a mediação entre hardware e software.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Kernel não é aplicativo de escritório nem periférico."
    },
    {
        "pergunta": "A shell, em um sistema operacional, pode ser entendida como:",
        "alternativas": [
            "Um tipo de memória física não volátil.",
            "Uma interface que permite ao usuário interagir com o sistema, por comandos ou ambiente gráfico.",
            "Um conector de rede Ethernet.",
            "Uma extensão de arquivo compactado.",
            "Um vírus que se propaga por e-mail."
        ],
        "correta": 1,
        "feedbackAcerto": "Shell é a camada de interação com o usuário, como terminal de comandos ou interface gráfica.",
        "feedbackErro": "A resposta correta é:\n\nUma interface que permite ao usuário interagir com o sistema, por comandos ou ambiente gráfico.\n\nComentário:\nShell é a camada de interação com o usuário, como terminal de comandos ou interface gráfica.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda kernel com shell: núcleo gerencia; shell interage."
    },
    {
        "pergunta": "Um processo em execução diferencia-se de um programa armazenado porque:",
        "alternativas": [
            "O processo é sempre hardware físico.",
            "O programa só existe na memória cache.",
            "O processo é uma instância ativa do programa em execução, com recursos associados.",
            "O processo não usa memória RAM.",
            "Todo programa armazenado está necessariamente em execução."
        ],
        "correta": 2,
        "feedbackAcerto": "Programa é arquivo/conjunto de instruções; processo é a execução ativa desse programa.",
        "feedbackErro": "A resposta correta é:\n\nO processo é uma instância ativa do programa em execução, com recursos associados.\n\nComentário:\nPrograma é arquivo/conjunto de instruções; processo é a execução ativa desse programa.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca pode trocar programa, processo e serviço."
    },
    {
        "pergunta": "Threads são úteis porque:",
        "alternativas": [
            "Transformam software em hardware.",
            "Substituem o sistema operacional.",
            "Eliminam a necessidade de CPU.",
            "Permitem dividir a execução de um processo em fluxos menores de processamento.",
            "Servem apenas para armazenar arquivos."
        ],
        "correta": 3,
        "feedbackAcerto": "Threads são unidades de execução dentro de um processo, permitindo paralelismo ou concorrência.",
        "feedbackErro": "A resposta correta é:\n\nPermitem dividir a execução de um processo em fluxos menores de processamento.\n\nComentário:\nThreads são unidades de execução dentro de um processo, permitindo paralelismo ou concorrência.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Processo pode conter uma ou mais threads."
    },
    {
        "pergunta": "Serviços ou daemons em sistemas operacionais caracterizam-se por:",
        "alternativas": [
            "Serem apenas documentos do Word.",
            "Funcionarem exclusivamente como dispositivos de entrada.",
            "Exigirem sempre interação visual direta do usuário.",
            "Substituírem o firmware da placa-mãe.",
            "Executarem em segundo plano para fornecer funcionalidades ao sistema ou à rede."
        ],
        "correta": 4,
        "feedbackAcerto": "Serviços/daemons rodam em segundo plano, como impressão, rede, atualização ou banco de dados.",
        "feedbackErro": "A resposta correta é:\n\nExecutarem em segundo plano para fornecer funcionalidades ao sistema ou à rede.\n\nComentário:\nServiços/daemons rodam em segundo plano, como impressão, rede, atualização ou banco de dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Nem todo software em execução aparece como janela para o usuário."
    },
    {
        "pergunta": "Gerenciadores de pacotes em sistemas como Linux têm como finalidade:",
        "alternativas": [
            "Instalar, atualizar e remover softwares gerenciando dependências.",
            "Aumentar a capacidade física do processador.",
            "Editar slides com animações.",
            "Medir a voltagem da fonte.",
            "Enviar mensagens por CCO."
        ],
        "correta": 0,
        "feedbackAcerto": "Gerenciadores de pacotes automatizam instalação e manutenção de softwares e bibliotecas.",
        "feedbackErro": "A resposta correta é:\n\nInstalar, atualizar e remover softwares gerenciando dependências.\n\nComentário:\nGerenciadores de pacotes automatizam instalação e manutenção de softwares e bibliotecas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Pacote de software não é arquivo compactado qualquer; inclui metadados e dependências."
    },
    {
        "pergunta": "Virtualização diferencia-se de emulação porque, em geral:",
        "alternativas": [
            "Emulação sempre é mais rápida que execução nativa.",
            "Virtualização executa ambientes convidados sobre hardware compatível, enquanto emulação simula arquitetura diferente.",
            "Virtualização só funciona sem sistema operacional.",
            "Ambas são sinônimos perfeitos.",
            "Virtualização serve apenas para compactar arquivos."
        ],
        "correta": 1,
        "feedbackAcerto": "Virtualização aproveita suporte do hardware; emulação reproduz comportamento de outra plataforma.",
        "feedbackErro": "A resposta correta é:\n\nVirtualização executa ambientes convidados sobre hardware compatível, enquanto emulação simula arquitetura diferente.\n\nComentário:\nVirtualização aproveita suporte do hardware; emulação reproduz comportamento de outra plataforma.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A diferença aparece em questões sobre máquinas virtuais e compatibilidade."
    },
    {
        "pergunta": "Um contêiner de aplicação, comparado a uma máquina virtual tradicional, normalmente:",
        "alternativas": [
            "Inclui obrigatoriamente um sistema operacional completo separado para cada aplicação.",
            "Substitui a necessidade de qualquer sistema operacional.",
            "Compartilha o kernel do sistema hospedeiro e isola processos e dependências da aplicação.",
            "Só pode executar aplicativos de escritório.",
            "É um tipo de memória RAM."
        ],
        "correta": 2,
        "feedbackAcerto": "Contêineres isolam aplicações usando recursos do sistema hospedeiro, geralmente com menor sobrecarga que VMs completas.",
        "feedbackErro": "A resposta correta é:\n\nCompartilha o kernel do sistema hospedeiro e isola processos e dependências da aplicação.\n\nComentário:\nContêineres isolam aplicações usando recursos do sistema hospedeiro, geralmente com menor sobrecarga que VMs completas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Contêiner não é o mesmo que máquina virtual completa."
    },
    {
        "pergunta": "Atualizar firmware exige cuidado porque:",
        "alternativas": [
            "Firmware é sempre um documento editável no Word.",
            "A atualização remove fisicamente o processador.",
            "Firmware só existe em navegadores web.",
            "Falhas durante o processo podem comprometer o funcionamento do dispositivo.",
            "Atualizar firmware impede qualquer backup."
        ],
        "correta": 3,
        "feedbackAcerto": "Firmware controla funções básicas do dispositivo; atualização incorreta pode causar falhas sérias.",
        "feedbackErro": "A resposta correta é:\n\nFalhas durante o processo podem comprometer o funcionamento do dispositivo.\n\nComentário:\nFirmware controla funções básicas do dispositivo; atualização incorreta pode causar falhas sérias.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Firmware é software embarcado em hardware."
    },
    {
        "pergunta": "Software Open Source não deve ser confundido com domínio público porque:",
        "alternativas": [
            "Open Source significa ausência total de autoria.",
            "Domínio público exige código fechado.",
            "Ambos são obrigatoriamente pagos.",
            "Open Source não permite modificação.",
            "Código aberto continua regido por uma licença, com direitos e obrigações definidos."
        ],
        "correta": 4,
        "feedbackAcerto": "Open Source disponibiliza código conforme uma licença; não significa ausência de regras.",
        "feedbackErro": "A resposta correta é:\n\nCódigo aberto continua regido por uma licença, com direitos e obrigações definidos.\n\nComentário:\nOpen Source disponibiliza código conforme uma licença; não significa ausência de regras.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Código aberto não é automaticamente domínio público."
    },
    {
        "pergunta": "O modelo freemium caracteriza-se por:",
        "alternativas": [
            "Oferecer versão gratuita com recursos limitados e recursos adicionais pagos.",
            "Exigir pagamento antes de qualquer teste.",
            "Disponibilizar sempre o código-fonte completo.",
            "Funcionar apenas como driver de impressora.",
            "Ser um tipo de sistema operacional embarcado."
        ],
        "correta": 0,
        "feedbackAcerto": "Freemium combina uso gratuito básico com funcionalidades premium pagas.",
        "feedbackErro": "A resposta correta é:\n\nOferecer versão gratuita com recursos limitados e recursos adicionais pagos.\n\nComentário:\nFreemium combina uso gratuito básico com funcionalidades premium pagas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda freeware, shareware, freemium e open source."
    },
    {
        "pergunta": "No modelo SaaS, o usuário normalmente:",
        "alternativas": [
            "Compra obrigatoriamente servidores físicos próprios.",
            "Acessa um software como serviço pela Internet, sem administrar diretamente a infraestrutura subjacente.",
            "Recebe apenas componentes de hardware.",
            "Instala manualmente o kernel do provedor.",
            "Usa exclusivamente software sem rede."
        ],
        "correta": 1,
        "feedbackAcerto": "SaaS entrega aplicação pronta ao usuário, como serviços de e-mail, CRM ou edição online.",
        "feedbackErro": "A resposta correta é:\n\nAcessa um software como serviço pela Internet, sem administrar diretamente a infraestrutura subjacente.\n\nComentário:\nSaaS entrega aplicação pronta ao usuário, como serviços de e-mail, CRM ou edição online.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "SaaS = software como serviço; IaaS = infraestrutura; PaaS = plataforma."
    },
    {
        "pergunta": "Uma API é melhor definida como:",
        "alternativas": [
            "Um tipo de monitor sensível ao toque.",
            "Um antivírus obrigatório do Windows.",
            "Um conjunto de regras e interfaces que permite comunicação entre sistemas ou aplicações.",
            "Uma extensão de arquivo de imagem.",
            "Um cabo usado apenas para áudio analógico."
        ],
        "correta": 2,
        "feedbackAcerto": "APIs permitem que programas interajam com funcionalidades de outros sistemas de forma padronizada.",
        "feedbackErro": "A resposta correta é:\n\nUm conjunto de regras e interfaces que permite comunicação entre sistemas ou aplicações.\n\nComentário:\nAPIs permitem que programas interajam com funcionalidades de outros sistemas de forma padronizada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "API não é interface visual para usuário comum; é interface entre softwares."
    },
    {
        "pergunta": "Uma interface de linha de comando (CLI) diferencia-se de uma interface gráfica (GUI) porque:",
        "alternativas": [
            "A CLI é sempre um hardware interno.",
            "A GUI não permite interação do usuário.",
            "A CLI funciona apenas em planilhas.",
            "A CLI recebe comandos textuais; a GUI utiliza elementos visuais como janelas, ícones e botões.",
            "A GUI substitui todos os drivers."
        ],
        "correta": 3,
        "feedbackAcerto": "CLI e GUI são formas diferentes de interação com o sistema ou programa.",
        "feedbackErro": "A resposta correta é:\n\nA CLI recebe comandos textuais; a GUI utiliza elementos visuais como janelas, ícones e botões.\n\nComentário:\nCLI e GUI são formas diferentes de interação com o sistema ou programa.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Ambas podem executar tarefas administrativas, mas com interfaces diferentes."
    },
    {
        "pergunta": "Assinatura de driver em sistemas operacionais modernos tem como finalidade:",
        "alternativas": [
            "Transformar driver em arquivo de imagem.",
            "Aumentar o tamanho da memória RAM.",
            "Remover a necessidade de hardware.",
            "Converter o driver em planilha.",
            "Ajudar a verificar a origem e integridade do driver antes da instalação ou execução."
        ],
        "correta": 4,
        "feedbackAcerto": "Drivers assinados reduzem o risco de instalação de código adulterado ou não confiável.",
        "feedbackErro": "A resposta correta é:\n\nAjudar a verificar a origem e integridade do driver antes da instalação ou execução.\n\nComentário:\nDrivers assinados reduzem o risco de instalação de código adulterado ou não confiável.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Assinatura digital está ligada a autenticidade e integridade."
    },
    {
        "pergunta": "Modo de compatibilidade em um sistema operacional é usado para:",
        "alternativas": [
            "Aumentar fisicamente o clock da CPU.",
            "Criar backup diferencial.",
            "Tentar executar programas antigos simulando condições de versões anteriores.",
            "Converter arquivos para PDF.",
            "Substituir senhas por biometria."
        ],
        "correta": 2,
        "feedbackAcerto": "Modo de compatibilidade ajuda softwares antigos a funcionarem em sistemas mais novos.",
        "feedbackErro": "A resposta correta é:\n\nTentar executar programas antigos simulando condições de versões anteriores.\n\nComentário:\nModo de compatibilidade ajuda softwares antigos a funcionarem em sistemas mais novos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Compatibilidade não garante funcionamento perfeito, mas ajusta o ambiente de execução."
    },
    {
        "pergunta": "Um sistema operacional de 64 bits, em relação a um de 32 bits, geralmente permite:",
        "alternativas": [
            "Uso obrigatório de monitores 4K.",
            "Eliminação da memória RAM.",
            "Proibição de redes Wi-Fi.",
            "Endereçamento de maior quantidade de memória e execução de aplicações 64 bits.",
            "Transformação automática de documentos em executáveis."
        ],
        "correta": 3,
        "feedbackAcerto": "Arquiteturas 64 bits suportam maior espaço de endereçamento de memória.",
        "feedbackErro": "A resposta correta é:\n\nEndereçamento de maior quantidade de memória e execução de aplicações 64 bits.\n\nComentário:\nArquiteturas 64 bits suportam maior espaço de endereçamento de memória.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A compatibilidade depende também do processador, sistema e aplicativo."
    },
    {
        "pergunta": "Um patch diferencia-se de uma atualização de versão maior porque normalmente:",
        "alternativas": [
            "Remove o sistema operacional do computador.",
            "É sempre um hardware substituído.",
            "Só serve para criar apresentações.",
            "Impede o uso de backup.",
            "Corrige falhas pontuais ou vulnerabilidades sem mudar necessariamente a versão principal do software."
        ],
        "correta": 4,
        "feedbackAcerto": "Patch costuma corrigir problemas específicos; upgrade maior pode trazer mudanças amplas de versão e recursos.",
        "feedbackErro": "A resposta correta é:\n\nCorrige falhas pontuais ou vulnerabilidades sem mudar necessariamente a versão principal do software.\n\nComentário:\nPatch costuma corrigir problemas específicos; upgrade maior pode trazer mudanças amplas de versão e recursos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em segurança, patches são fundamentais para corrigir vulnerabilidades."
    },
    {
        "pergunta": "Leitores de tela e alto contraste são exemplos de recursos de software voltados a:",
        "alternativas": [
            "Compactação de dados.",
            "Aumento de clock da CPU.",
            "Criação de cabos virtuais.",
            "Formatação de disco rígido.",
            "Acessibilidade digital."
        ],
        "correta": 4,
        "feedbackAcerto": "Recursos de acessibilidade ajudam pessoas com diferentes necessidades a utilizar sistemas e aplicações.",
        "feedbackErro": "A resposta correta é:\n\nAcessibilidade digital.\n\nComentário:\nRecursos de acessibilidade ajudam pessoas com diferentes necessidades a utilizar sistemas e aplicações.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Acessibilidade é qualidade de uso, não desempenho de hardware."
    },
    {
        "pergunta": "Logs de sistema são importantes porque:",
        "alternativas": [
            "Impedem fisicamente que o computador seja desligado.",
            "Substituem a memória RAM.",
            "Transformam texto em imagem.",
            "São sempre mensagens de spam.",
            "Registram eventos que auxiliam diagnóstico, auditoria e investigação de falhas ou incidentes."
        ],
        "correta": 4,
        "feedbackAcerto": "Logs registram atividades e eventos, apoiando suporte, segurança e rastreabilidade.",
        "feedbackErro": "A resposta correta é:\n\nRegistram eventos que auxiliam diagnóstico, auditoria e investigação de falhas ou incidentes.\n\nComentário:\nLogs registram atividades e eventos, apoiando suporte, segurança e rastreabilidade.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em segurança, logs são essenciais para auditoria e resposta a incidentes."
    },
{
    "pergunta": "Em um sistema operacional, o kernel é mais corretamente entendido como:",
    "alternativas": [
        "Núcleo responsável por controlar recursos essenciais e intermediar hardware e software.",
        "Aplicativo de edição usado para manipular documentos e planilhas.",
        "Conjunto de ícones exibidos na área de trabalho do usuário.",
        "Driver específico instalado apenas para controlar impressoras locais.",
        "Recurso gráfico utilizado para alterar temas e papéis de parede."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! O kernel é a parte central do sistema operacional, responsável por gerenciamento de processos, memória, dispositivos e chamadas ao sistema.",
    "feedbackErro": "A resposta correta é:\n\nNúcleo responsável por controlar recursos essenciais e intermediar hardware e software.\n\nComentário:\nO kernel é a parte central do sistema operacional, responsável por gerenciamento de processos, memória, dispositivos e chamadas ao sistema.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Kernel = núcleo do sistema operacional, não é aplicativo comum."
},
{
    "pergunta": "No gerenciamento de processos, a diferença adequada entre processo e thread é:",
    "alternativas": [
        "Thread possui sistema de arquivos próprio; processo apenas exibe interface gráfica.",
        "Processo possui contexto próprio; thread é fluxo de execução dentro de um processo.",
        "Processo é sempre temporário; thread é sempre gravada permanentemente em disco.",
        "Thread substitui o kernel; processo substitui os drivers de dispositivos.",
        "Processo existe apenas em servidores; thread existe apenas em smartphones."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Um processo é uma instância de programa em execução. Threads compartilham recursos do processo, mas representam fluxos de execução.",
    "feedbackErro": "A resposta correta é:\n\nProcesso possui contexto próprio; thread é fluxo de execução dentro de um processo.\n\nComentário:\nUm processo é uma instância de programa em execução. Threads compartilham recursos do processo, mas representam fluxos de execução.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Bancas gostam de associar processo a programa em execução e thread a execução interna."
},
{
    "pergunta": "Em sistemas operacionais com multitarefa preemptiva, é correto afirmar que:",
    "alternativas": [
        "Cada programa decide sozinho quando entregará definitivamente o processador.",
        "A CPU executa apenas uma aplicação durante toda a sessão do usuário.",
        "O sistema pode interromper uma tarefa para conceder tempo de CPU a outra.",
        "O disco rígido assume a execução dos processos no lugar do processador.",
        "Somente programas de escritório podem ser executados simultaneamente."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Na multitarefa preemptiva, o sistema operacional controla o escalonamento e pode alternar a execução entre processos.",
    "feedbackErro": "A resposta correta é:\n\nO sistema pode interromper uma tarefa para conceder tempo de CPU a outra.\n\nComentário:\nNa multitarefa preemptiva, o sistema operacional controla o escalonamento e pode alternar a execução entre processos.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Preemptiva = o sistema pode tomar o controle da CPU."
},
{
    "pergunta": "A memória virtual, em sistemas operacionais modernos, tem como finalidade principal:",
    "alternativas": [
        "Substituir fisicamente os módulos de RAM por memórias ROM permanentes.",
        "Transformar arquivos de texto em programas executáveis do sistema.",
        "Eliminar a necessidade de gerenciamento de processos pelo kernel.",
        "Permitir uso combinado de RAM e armazenamento para ampliar o espaço endereçável.",
        "Aumentar automaticamente a frequência elétrica do processador."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! A memória virtual usa técnicas como paginação para oferecer aos processos um espaço de memória maior e mais organizado.",
    "feedbackErro": "A resposta correta é:\n\nPermitir uso combinado de RAM e armazenamento para ampliar o espaço endereçável.\n\nComentário:\nA memória virtual usa técnicas como paginação para oferecer aos processos um espaço de memória maior e mais organizado.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Memória virtual não é memória física nova; é técnica de gerenciamento."
},
{
    "pergunta": "No contexto da paginação de memória, uma página corresponde a:",
    "alternativas": [
        "Arquivo de configuração usado exclusivamente por navegadores web.",
        "Setor físico de disco que armazena somente imagens compactadas.",
        "Janela gráfica que permite abrir aplicativos no ambiente desktop.",
        "Código malicioso que altera permissões do usuário administrador.",
        "Bloco de tamanho fixo usado para organizar partes da memória virtual."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! A paginação divide o espaço de memória em blocos, permitindo mapear páginas virtuais para quadros de memória física.",
    "feedbackErro": "A resposta correta é:\n\nBloco de tamanho fixo usado para organizar partes da memória virtual.\n\nComentário:\nA paginação divide o espaço de memória em blocos, permitindo mapear páginas virtuais para quadros de memória física.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Paginação é tema de gerenciamento de memória, não de páginas da Web."
},
{
    "pergunta": "O escalonador de processos de um sistema operacional atua principalmente para:",
    "alternativas": [
        "Definir a ordem e o tempo de uso da CPU pelos processos prontos.",
        "Converter documentos em arquivos compactados para envio por e-mail.",
        "Gerenciar exclusivamente as cores da interface gráfica do usuário.",
        "Substituir o antivírus na remoção de códigos maliciosos.",
        "Controlar apenas a velocidade física das portas USB conectadas."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! O escalonador decide quais processos utilizarão o processador, considerando políticas de prioridade, tempo e estado dos processos.",
    "feedbackErro": "A resposta correta é:\n\nDefinir a ordem e o tempo de uso da CPU pelos processos prontos.\n\nComentário:\nO escalonador decide quais processos utilizarão o processador, considerando políticas de prioridade, tempo e estado dos processos.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Escalonamento = organização do uso da CPU."
},
{
    "pergunta": "A separação entre modo usuário e modo kernel existe principalmente para:",
    "alternativas": [
        "Impedir que aplicativos utilizem qualquer memória durante sua execução.",
        "Proteger recursos críticos, restringindo operações sensíveis ao núcleo do sistema.",
        "Garantir que todos os programas sejam necessariamente de código aberto.",
        "Fazer com que arquivos compactados sejam descompactados automaticamente.",
        "Transformar usuários comuns em administradores sem autenticação prévia."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Operações privilegiadas devem ocorrer em modo kernel para evitar que aplicações comuns comprometam a estabilidade e a segurança.",
    "feedbackErro": "A resposta correta é:\n\nProteger recursos críticos, restringindo operações sensíveis ao núcleo do sistema.\n\nComentário:\nOperações privilegiadas devem ocorrer em modo kernel para evitar que aplicações comuns comprometam a estabilidade e a segurança.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Modo kernel possui privilégios maiores que o modo usuário."
},
{
    "pergunta": "Um sistema de arquivos, como NTFS, ext4 ou APFS, é responsável por:",
    "alternativas": [
        "Executar cálculos aritméticos no lugar da unidade central de processamento.",
        "Substituir protocolos de rede usados para comunicação entre computadores.",
        "Organizar a forma como dados e metadados são gravados e recuperados.",
        "Criar automaticamente contas de e-mail para todos os usuários locais.",
        "Eliminar a necessidade de permissões, logs e controle de acesso."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Sistemas de arquivos estruturam diretórios, arquivos, permissões, metadados e métodos de acesso ao armazenamento.",
    "feedbackErro": "A resposta correta é:\n\nOrganizar a forma como dados e metadados são gravados e recuperados.\n\nComentário:\nSistemas de arquivos estruturam diretórios, arquivos, permissões, metadados e métodos de acesso ao armazenamento.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Sistema de arquivos não é o disco; é a organização lógica dos dados."
},
{
    "pergunta": "Em sistemas Unix/Linux, permissões como leitura, escrita e execução indicam:",
    "alternativas": [
        "Quantidade máxima de memória RAM suportada pela placa-mãe.",
        "Velocidade física da conexão de rede cabeada ou sem fio.",
        "Tipo de compactação aplicada automaticamente aos documentos.",
        "Controle sobre quem pode abrir, alterar ou executar arquivos e diretórios.",
        "Nível de brilho configurado para o monitor do usuário."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! As permissões rwx permitem definir direitos de acesso para proprietário, grupo e outros usuários.",
    "feedbackErro": "A resposta correta é:\n\nControle sobre quem pode abrir, alterar ou executar arquivos e diretórios.\n\nComentário:\nAs permissões rwx permitem definir direitos de acesso para proprietário, grupo e outros usuários.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "rwx = read, write, execute."
},
{
    "pergunta": "O recurso de journaling em sistemas de arquivos tem como objetivo:",
    "alternativas": [
        "Criar automaticamente gráficos financeiros a partir de planilhas.",
        "Executar aplicativos móveis em qualquer sistema operacional desktop.",
        "Substituir a autenticação por senha em contas administrativas.",
        "Impedir que arquivos sejam copiados para unidades externas.",
        "Registrar operações pendentes para reduzir inconsistências após falhas."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! O journaling mantém registros de operações de escrita, auxiliando a recuperação da consistência após desligamentos inesperados.",
    "feedbackErro": "A resposta correta é:\n\nRegistrar operações pendentes para reduzir inconsistências após falhas.\n\nComentário:\nO journaling mantém registros de operações de escrita, auxiliando a recuperação da consistência após desligamentos inesperados.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Journaling está ligado à confiabilidade do sistema de arquivos."
},
{
    "pergunta": "A interface de linha de comando difere da interface gráfica porque:",
    "alternativas": [
        "Exige comandos textuais para executar tarefas e administrar recursos.",
        "Funciona apenas em computadores sem sistema operacional instalado.",
        "Impede totalmente a execução de scripts e tarefas automatizadas.",
        "Serve exclusivamente para visualizar imagens e apresentações.",
        "É incompatível com sistemas Linux, Windows e macOS atuais."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! CLI permite interação por comandos, sendo comum em administração de sistemas, automação e suporte técnico.",
    "feedbackErro": "A resposta correta é:\n\nExige comandos textuais para executar tarefas e administrar recursos.\n\nComentário:\nCLI permite interação por comandos, sendo comum em administração de sistemas, automação e suporte técnico.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "CLI = comandos; GUI = elementos gráficos."
},
{
    "pergunta": "Uma vantagem típica do uso de linha de comando em administração de sistemas é:",
    "alternativas": [
        "Eliminar a necessidade de permissões para modificar arquivos protegidos.",
        "Automatizar tarefas repetitivas por meio de scripts e comandos encadeados.",
        "Converter todo programa proprietário em software de código aberto.",
        "Substituir fisicamente cabos, roteadores e placas de rede.",
        "Garantir que qualquer comando digitado seja sempre reversível."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! A linha de comando facilita automação, administração remota, execução em lote e diagnóstico de sistemas.",
    "feedbackErro": "A resposta correta é:\n\nAutomatizar tarefas repetitivas por meio de scripts e comandos encadeados.\n\nComentário:\nA linha de comando facilita automação, administração remota, execução em lote e diagnóstico de sistemas.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Bancas associam terminal a automação e administração técnica."
},
{
    "pergunta": "Software de código aberto caracteriza-se principalmente por:",
    "alternativas": [
        "Ser sempre gratuito, sem qualquer condição de licença ou responsabilidade.",
        "Impedir que empresas utilizem o programa em ambientes profissionais.",
        "Disponibilizar o código-fonte para estudo, modificação e distribuição conforme licença.",
        "Funcionar apenas em sistemas Linux sem interface gráfica instalada.",
        "Ser obrigatoriamente desenvolvido por órgãos públicos ou universidades."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Open source envolve acesso ao código-fonte e permissões reguladas por licença, não sendo sinônimo automático de gratuidade irrestrita.",
    "feedbackErro": "A resposta correta é:\n\nDisponibilizar o código-fonte para estudo, modificação e distribuição conforme licença.\n\nComentário:\nOpen source envolve acesso ao código-fonte e permissões reguladas por licença, não sendo sinônimo automático de gratuidade irrestrita.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Código aberto não significa ausência de licença."
},
{
    "pergunta": "Em licenças de software, o conceito de copyleft busca:",
    "alternativas": [
        "Bloquear qualquer acesso ao código-fonte por usuários finais.",
        "Transformar todo freeware em programa obrigatoriamente comercial.",
        "Criar restrição técnica para impedir execução em servidores.",
        "Permitir redistribuição, preservando liberdades nas versões derivadas.",
        "Substituir contratos de uso por atualizações automáticas do sistema."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Copyleft permite uso e modificação, mas exige que versões derivadas mantenham liberdades semelhantes, conforme a licença.",
    "feedbackErro": "A resposta correta é:\n\nPermitir redistribuição, preservando liberdades nas versões derivadas.\n\nComentário:\nCopyleft permite uso e modificação, mas exige que versões derivadas mantenham liberdades semelhantes, conforme a licença.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Copyleft aparece muito em questões sobre software livre."
},
{
    "pergunta": "Um software proprietário distingue-se de um software livre principalmente porque:",
    "alternativas": [
        "É sempre menos seguro que qualquer programa gratuito disponível na Internet.",
        "Possui obrigatoriamente código-fonte aberto para auditoria pública.",
        "Pode ser executado apenas quando não houver sistema operacional instalado.",
        "É necessariamente um driver utilizado por impressoras e placas de vídeo.",
        "Seu uso, modificação e distribuição ficam sujeitos às restrições do titular."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Software proprietário é controlado por seu titular, que define regras de licenciamento, cópia, modificação e distribuição.",
    "feedbackErro": "A resposta correta é:\n\nSeu uso, modificação e distribuição ficam sujeitos às restrições do titular.\n\nComentário:\nSoftware proprietário é controlado por seu titular, que define regras de licenciamento, cópia, modificação e distribuição.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Proprietário = uso regulado pelo dono/licenciante."
},
{
    "pergunta": "A diferença adequada entre freeware e shareware é:",
    "alternativas": [
        "Freeware é gratuito; shareware costuma ser avaliação limitada ou temporária.",
        "Freeware sempre tem código aberto; shareware sempre é sistema operacional.",
        "Shareware é hardware físico; freeware é protocolo de comunicação.",
        "Freeware exige pagamento por uso inicial; shareware nunca possui restrições.",
        "Ambos são obrigatoriamente malwares distribuídos por mensagens falsas."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Freeware pode ser usado gratuitamente, enquanto shareware geralmente é oferecido para teste, com limitações ou prazo de avaliação.",
    "feedbackErro": "A resposta correta é:\n\nFreeware é gratuito; shareware costuma ser avaliação limitada ou temporária.\n\nComentário:\nFreeware pode ser usado gratuitamente, enquanto shareware geralmente é oferecido para teste, com limitações ou prazo de avaliação.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Freeware ≠ open source; shareware = avaliação."
},
{
    "pergunta": "No modelo SaaS, como ocorre em muitos serviços de e-mail e edição online:",
    "alternativas": [
        "O cliente recebe apenas cabos, roteadores e equipamentos de rede.",
        "O usuário acessa o software pela Internet, sem administrar a infraestrutura base.",
        "O provedor entrega somente processadores físicos para instalação local.",
        "O usuário obrigatoriamente compila o sistema operacional antes de usar.",
        "O serviço funciona apenas quando desconectado de qualquer rede pública."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! SaaS oferece aplicações prontas via Internet, reduzindo a necessidade de instalação e manutenção local pelo usuário.",
    "feedbackErro": "A resposta correta é:\n\nO usuário acessa o software pela Internet, sem administrar a infraestrutura base.\n\nComentário:\nSaaS oferece aplicações prontas via Internet, reduzindo a necessidade de instalação e manutenção local pelo usuário.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "SaaS = software como serviço."
},
{
    "pergunta": "Plataforma como Serviço (PaaS) é mais bem representada por:",
    "alternativas": [
        "Pacote de ícones usado apenas para personalizar a área de trabalho.",
        "Licença que proíbe qualquer uso de software em ambiente comercial.",
        "Ambiente pronto para desenvolver, testar e implantar aplicações.",
        "Programa cuja única função é apagar arquivos temporários locais.",
        "Driver físico gravado permanentemente na memória RAM do computador."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! PaaS fornece ambiente de desenvolvimento e implantação sem que o usuário gerencie diretamente toda a infraestrutura.",
    "feedbackErro": "A resposta correta é:\n\nAmbiente pronto para desenvolver, testar e implantar aplicações.\n\nComentário:\nPaaS fornece ambiente de desenvolvimento e implantação sem que o usuário gerencie diretamente toda a infraestrutura.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "PaaS fica entre infraestrutura e aplicação pronta."
},
{
    "pergunta": "No modelo IaaS, o cliente normalmente recebe:",
    "alternativas": [
        "Um editor de texto pronto, sem possibilidade de configurar servidores.",
        "Somente licença de uso para antivírus instalado em computador doméstico.",
        "Pacote de extensões de navegador para bloquear anúncios publicitários.",
        "Recursos computacionais virtualizados, como servidores, redes e armazenamento.",
        "Um arquivo compactado que substitui o sistema operacional local."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! IaaS fornece infraestrutura virtual sob demanda, permitindo que o cliente configure sistemas, aplicações e serviços.",
    "feedbackErro": "A resposta correta é:\n\nRecursos computacionais virtualizados, como servidores, redes e armazenamento.\n\nComentário:\nIaaS fornece infraestrutura virtual sob demanda, permitindo que o cliente configure sistemas, aplicações e serviços.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "IaaS = infraestrutura como serviço."
},
{
    "pergunta": "Um aplicativo web diferencia-se de um aplicativo desktop tradicional porque:",
    "alternativas": [
        "Depende exclusivamente de disquetes para instalação em cada computador.",
        "Não pode utilizar banco de dados, autenticação ou armazenamento de sessão.",
        "É obrigatoriamente mais inseguro que qualquer aplicativo instalado localmente.",
        "Funciona apenas quando todo o código-fonte está aberto ao usuário final.",
        "É acessado por navegador e executa parte de suas funções em servidores remotos."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Aplicações web são acessadas via navegador e geralmente combinam processamento no cliente e no servidor.",
    "feedbackErro": "A resposta correta é:\n\nÉ acessado por navegador e executa parte de suas funções em servidores remotos.\n\nComentário:\nAplicações web são acessadas via navegador e geralmente combinam processamento no cliente e no servidor.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Aplicativo web não é sinônimo de site estático simples."
},
{
    "pergunta": "Uma aplicação web progressiva (PWA) busca combinar:",
    "alternativas": [
        "Recursos de páginas web com comportamentos semelhantes aos de aplicativos instaláveis.",
        "Somente drivers de vídeo com cabos analógicos de transmissão.",
        "Licenças proprietárias com impedimento absoluto de atualização.",
        "Formatos de imagem com protocolos físicos de placa-mãe.",
        "BIOS tradicional com memória RAM removível de notebook."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! PWAs podem oferecer instalação, cache, notificações e funcionamento parcial offline, dependendo da implementação.",
    "feedbackErro": "A resposta correta é:\n\nRecursos de páginas web com comportamentos semelhantes aos de aplicativos instaláveis.\n\nComentário:\nPWAs podem oferecer instalação, cache, notificações e funcionamento parcial offline, dependendo da implementação.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "PWA costuma misturar experiência de app com tecnologias web."
},
{
    "pergunta": "Atualizações de firmware devem ser realizadas com atenção porque:",
    "alternativas": [
        "Firmware é sempre arquivo de texto sem relação com equipamentos físicos.",
        "Falhas durante o processo podem comprometer o funcionamento do dispositivo.",
        "Toda atualização de firmware remove automaticamente o sistema operacional.",
        "Firmware só existe em navegadores usados para acessar páginas web.",
        "O procedimento dispensa energia estável e instruções do fabricante."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Firmware controla funções básicas de dispositivos; uma atualização interrompida ou inadequada pode causar falhas sérias.",
    "feedbackErro": "A resposta correta é:\n\nFalhas durante o processo podem comprometer o funcionamento do dispositivo.\n\nComentário:\nFirmware controla funções básicas de dispositivos; uma atualização interrompida ou inadequada pode causar falhas sérias.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Firmware fica embarcado no dispositivo."
},
{
    "pergunta": "A assinatura digital de drivers em sistemas operacionais tem como objetivo:",
    "alternativas": [
        "Aumentar fisicamente a capacidade de armazenamento de HDs e SSDs.",
        "Converter automaticamente drivers em aplicativos de escritório.",
        "Ajudar a verificar origem e integridade do software de controle do dispositivo.",
        "Impedir que qualquer periférico utilize energia elétrica do computador.",
        "Substituir permanentemente a necessidade de atualizações de segurança."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Drivers assinados oferecem maior confiança quanto à procedência e à integridade, reduzindo riscos de instalação indevida.",
    "feedbackErro": "A resposta correta é:\n\nAjudar a verificar origem e integridade do software de controle do dispositivo.\n\nComentário:\nDrivers assinados oferecem maior confiança quanto à procedência e à integridade, reduzindo riscos de instalação indevida.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Assinatura digital está ligada a autenticidade e integridade."
},
{
    "pergunta": "O recurso Plug and Play permite que o sistema:",
    "alternativas": [
        "Transforme automaticamente hardware defeituoso em software aplicativo.",
        "Dispense qualquer driver em todos os equipamentos existentes.",
        "Bloqueie permanentemente o uso de periféricos USB e Bluetooth.",
        "Detecte dispositivos conectados e tente configurá-los com menor intervenção do usuário.",
        "Execute apenas programas instalados por linha de comando."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Plug and Play facilita a detecção e configuração de dispositivos, mas pode ainda exigir drivers adequados.",
    "feedbackErro": "A resposta correta é:\n\nDetecte dispositivos conectados e tente configurá-los com menor intervenção do usuário.\n\nComentário:\nPlug and Play facilita a detecção e configuração de dispositivos, mas pode ainda exigir drivers adequados.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Plug and Play não significa ausência absoluta de driver."
},
{
    "pergunta": "Uma camada de compatibilidade, em software, é utilizada para:",
    "alternativas": [
        "Substituir módulos de memória volátil por discos ópticos graváveis.",
        "Eliminar todos os controles de licença de programas proprietários.",
        "Impedir que qualquer arquivo antigo seja aberto por versões recentes.",
        "Converter senhas fracas em chaves criptográficas automaticamente.",
        "Permitir que aplicações projetadas para um ambiente funcionem em outro com adaptações."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Camadas de compatibilidade traduzem chamadas ou comportamentos esperados por uma aplicação para outro ambiente operacional.",
    "feedbackErro": "A resposta correta é:\n\nPermitir que aplicações projetadas para um ambiente funcionem em outro com adaptações.\n\nComentário:\nCamadas de compatibilidade traduzem chamadas ou comportamentos esperados por uma aplicação para outro ambiente operacional.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Compatibilidade não é pirataria; é adaptação técnica de execução."
},
{
    "pergunta": "Uma máquina virtual diferencia-se de uma instalação nativa porque:",
    "alternativas": [
        "Executa um sistema convidado sobre recursos abstraídos pelo virtualizador.",
        "Dispensa completamente processador, memória, disco e sistema operacional hospedeiro.",
        "Só pode ser usada para abrir arquivos de imagem em editores gráficos.",
        "É sempre mais rápida que qualquer sistema instalado diretamente no hardware.",
        "Remove a necessidade de licenciamento de todos os softwares executados."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! A máquina virtual executa um sistema operacional convidado em ambiente isolado criado por software de virtualização.",
    "feedbackErro": "A resposta correta é:\n\nExecuta um sistema convidado sobre recursos abstraídos pelo virtualizador.\n\nComentário:\nA máquina virtual executa um sistema operacional convidado em ambiente isolado criado por software de virtualização.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "VM = sistema convidado sobre virtualização."
},
{
    "pergunta": "Um hipervisor do tipo 1 é caracterizado por:",
    "alternativas": [
        "Rodar apenas como extensão de navegador em páginas web.",
        "Executar diretamente sobre o hardware, sem depender de sistema operacional hospedeiro comum.",
        "Funcionar exclusivamente como planilha para controle de ativos.",
        "Ser instalado dentro de um editor de textos para criar documentos.",
        "Substituir cabos de rede por conexões de áudio analógico."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Hipervisores tipo 1, chamados bare-metal, operam diretamente sobre o hardware e são comuns em servidores.",
    "feedbackErro": "A resposta correta é:\n\nExecutar diretamente sobre o hardware, sem depender de sistema operacional hospedeiro comum.\n\nComentário:\nHipervisores tipo 1, chamados bare-metal, operam diretamente sobre o hardware e são comuns em servidores.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Tipo 1 = direto no hardware; tipo 2 = sobre sistema hospedeiro."
},
{
    "pergunta": "Contêineres diferem de máquinas virtuais porque, em regra:",
    "alternativas": [
        "Sempre incluem um sistema operacional completo para cada aplicação executada.",
        "Exigem obrigatoriamente instalação em mídia óptica não regravável.",
        "Compartilham o kernel do sistema hospedeiro e isolam aplicações em nível de sistema.",
        "São usados apenas para compactar fotos em formatos sem perda.",
        "Eliminam qualquer necessidade de controle de acesso entre processos."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Contêineres isolam aplicações e dependências, geralmente com menor sobrecarga que máquinas virtuais completas.",
    "feedbackErro": "A resposta correta é:\n\nCompartilham o kernel do sistema hospedeiro e isolam aplicações em nível de sistema.\n\nComentário:\nContêineres isolam aplicações e dependências, geralmente com menor sobrecarga que máquinas virtuais completas.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Contêiner = isolamento leve, não uma VM completa."
},
{
    "pergunta": "Gerenciadores de pacotes, comuns em sistemas Linux, servem para:",
    "alternativas": [
        "Medir exclusivamente a temperatura do processador durante jogos.",
        "Converter automaticamente imagens digitais em cabos de rede.",
        "Substituir a memória cache por armazenamento em nuvem pública.",
        "Instalar, atualizar e remover softwares com controle de dependências.",
        "Bloquear o acesso a todos os repositórios oficiais do sistema."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Gerenciadores como APT, DNF e Pacman facilitam instalação, atualização, remoção e dependências de pacotes.",
    "feedbackErro": "A resposta correta é:\n\nInstalar, atualizar e remover softwares com controle de dependências.\n\nComentário:\nGerenciadores como APT, DNF e Pacman facilitam instalação, atualização, remoção e dependências de pacotes.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Pacote = software distribuído com metadados e dependências."
},
{
    "pergunta": "Repositórios oficiais de software são importantes porque:",
    "alternativas": [
        "Garantem que nenhum programa precisará de atualização futura.",
        "Transformam aplicativos instalados em arquivos somente de leitura.",
        "Substituem fisicamente placas de vídeo e unidades de armazenamento.",
        "Impedem que o sistema registre logs de instalação e remoção.",
        "Centralizam pacotes mantidos ou validados para instalação mais confiável."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Repositórios oficiais reduzem riscos de origem duvidosa e simplificam atualizações e compatibilidade entre pacotes.",
    "feedbackErro": "A resposta correta é:\n\nCentralizam pacotes mantidos ou validados para instalação mais confiável.\n\nComentário:\nRepositórios oficiais reduzem riscos de origem duvidosa e simplificam atualizações e compatibilidade entre pacotes.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Bancas associam repositório a distribuição confiável de software."
},
{
    "pergunta": "No contexto de instalação de programas, dependência é:",
    "alternativas": [
        "Componente ou biblioteca exigida para que outro software funcione corretamente.",
        "Dispositivo físico usado apenas para ampliar sinal de rede sem fio.",
        "Senha temporária gerada exclusivamente para autenticação biométrica.",
        "Arquivo de imagem que substitui o processador durante a execução.",
        "Atalho criado automaticamente para remover aplicativos do sistema."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Um programa pode depender de bibliotecas, frameworks ou runtimes para executar corretamente.",
    "feedbackErro": "A resposta correta é:\n\nComponente ou biblioteca exigida para que outro software funcione corretamente.\n\nComentário:\nUm programa pode depender de bibliotecas, frameworks ou runtimes para executar corretamente.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Erro de dependência costuma impedir instalação ou execução."
},
{
    "pergunta": "No versionamento semântico, uma alteração de versão principal geralmente indica:",
    "alternativas": [
        "Correção simples de ortografia sem alteração funcional relevante.",
        "Mudanças incompatíveis com versões anteriores ou quebra de compatibilidade.",
        "Mudança automática do fabricante do hardware utilizado pelo usuário.",
        "Conversão do programa em malware por definição técnica.",
        "Instalação de tema visual sem afetar APIs ou funcionalidades."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! No padrão major.minor.patch, alterações major costumam indicar mudanças que podem quebrar compatibilidade.",
    "feedbackErro": "A resposta correta é:\n\nMudanças incompatíveis com versões anteriores ou quebra de compatibilidade.\n\nComentário:\nNo padrão major.minor.patch, alterações major costumam indicar mudanças que podem quebrar compatibilidade.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Major = grande mudança; patch = correção pontual."
},
{
    "pergunta": "Uma atualização do tipo patch costuma representar:",
    "alternativas": [
        "Troca física obrigatória de placa-mãe e processador.",
        "Criação de uma rede metropolitana entre filiais distantes.",
        "Correção pontual de falhas, vulnerabilidades ou pequenos erros.",
        "Remoção definitiva de todos os dados do usuário por padrão.",
        "Instalação de um sistema operacional totalmente diferente."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Patches geralmente corrigem bugs ou vulnerabilidades sem representar uma nova versão principal do software.",
    "feedbackErro": "A resposta correta é:\n\nCorreção pontual de falhas, vulnerabilidades ou pequenos erros.\n\nComentário:\nPatches geralmente corrigem bugs ou vulnerabilidades sem representar uma nova versão principal do software.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Patch é uma das palavras mais cobradas em atualização e segurança."
},
{
    "pergunta": "Quando um software atinge o fim do suporte oficial, o principal risco é:",
    "alternativas": [
        "Passar a funcionar automaticamente como memória RAM adicional.",
        "Converter todos os arquivos do usuário em formatos abertos.",
        "Ganhar proteção permanente contra qualquer código malicioso.",
        "Deixar de receber correções de segurança e compatibilidade do fornecedor.",
        "Tornar-se obrigatoriamente software livre e gratuito."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Softwares sem suporte tendem a acumular vulnerabilidades não corrigidas, aumentando riscos operacionais e de segurança.",
    "feedbackErro": "A resposta correta é:\n\nDeixar de receber correções de segurança e compatibilidade do fornecedor.\n\nComentário:\nSoftwares sem suporte tendem a acumular vulnerabilidades não corrigidas, aumentando riscos operacionais e de segurança.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Fim de suporte é forte indicativo de risco em ambientes corporativos."
},
{
    "pergunta": "Rollback de software significa, em contexto de atualização:",
    "alternativas": [
        "Compactar todos os documentos para reduzir consumo de rede.",
        "Criar credenciais novas para todos os usuários administradores.",
        "Substituir cabos de rede por conexões Bluetooth de curto alcance.",
        "Converter planilhas em apresentações sem intervenção do usuário.",
        "Retornar a uma versão anterior após falha ou incompatibilidade."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Rollback é a reversão para um estado ou versão anterior quando uma atualização causa problemas.",
    "feedbackErro": "A resposta correta é:\n\nRetornar a uma versão anterior após falha ou incompatibilidade.\n\nComentário:\nRollback é a reversão para um estado ou versão anterior quando uma atualização causa problemas.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Rollback = voltar atrás."
},
{
    "pergunta": "Antes de uma atualização crítica em ambiente corporativo, recomenda-se:",
    "alternativas": [
        "Planejar testes, ponto de restauração ou backup e janela de manutenção.",
        "Desativar logs, permissões e autenticação para acelerar a instalação.",
        "Aplicar a mudança diretamente em todos os sistemas sem validação.",
        "Excluir versões anteriores sem registrar procedimento de retorno.",
        "Ignorar requisitos do fornecedor e mensagens de incompatibilidade."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Atualizações críticas devem ser planejadas para reduzir indisponibilidade e permitir reversão em caso de falha.",
    "feedbackErro": "A resposta correta é:\n\nPlanejar testes, ponto de restauração ou backup e janela de manutenção.\n\nComentário:\nAtualizações críticas devem ser planejadas para reduzir indisponibilidade e permitir reversão em caso de falha.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Bancas valorizam planejamento, teste e recuperação."
},
{
    "pergunta": "Assinaturas de antivírus ou bases de detecção são utilizadas para:",
    "alternativas": [
        "Aumentar a capacidade física do disco rígido instalado.",
        "Reconhecer padrões conhecidos de ameaças e apoiar a detecção.",
        "Transformar documentos de texto em programas executáveis.",
        "Substituir o sistema operacional por navegador web.",
        "Eliminar completamente o risco de erro humano na rede."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Bases de assinatura ajudam a identificar ameaças conhecidas, embora antivírus modernos também usem heurística e comportamento.",
    "feedbackErro": "A resposta correta é:\n\nReconhecer padrões conhecidos de ameaças e apoiar a detecção.\n\nComentário:\nBases de assinatura ajudam a identificar ameaças conhecidas, embora antivírus modernos também usem heurística e comportamento.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Assinatura ajuda na detecção, mas não garante proteção absoluta."
},
{
    "pergunta": "Um falso positivo em software de segurança ocorre quando:",
    "alternativas": [
        "Um malware real é liberado corretamente pelo antivírus.",
        "Um backup válido é restaurado sem alteração de integridade.",
        "Um item legítimo é classificado incorretamente como ameaça.",
        "Uma senha fraca é substituída por autenticação multifator.",
        "Um driver assinado é instalado a partir do site oficial."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Falso positivo é a detecção indevida de algo legítimo como malicioso ou suspeito.",
    "feedbackErro": "A resposta correta é:\n\nUm item legítimo é classificado incorretamente como ameaça.\n\nComentário:\nFalso positivo é a detecção indevida de algo legítimo como malicioso ou suspeito.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Falso positivo = alerta indevido; falso negativo = ameaça não detectada."
},
{
    "pergunta": "Compactação sem perdas é aquela em que:",
    "alternativas": [
        "Parte do conteúdo é descartada para reduzir tamanho permanentemente.",
        "O arquivo deixa de poder ser enviado por correio eletrônico.",
        "O formato passa a funcionar apenas em sistemas operacionais móveis.",
        "Os dados originais podem ser reconstruídos integralmente após descompactação.",
        "A extensão é trocada e o conteúdo se converte automaticamente."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Na compactação sem perdas, a descompactação permite recuperar exatamente os dados originais.",
    "feedbackErro": "A resposta correta é:\n\nOs dados originais podem ser reconstruídos integralmente após descompactação.\n\nComentário:\nNa compactação sem perdas, a descompactação permite recuperar exatamente os dados originais.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Sem perdas = recuperação integral."
},
{
    "pergunta": "Compactação com perdas, comum em mídias digitais, significa que:",
    "alternativas": [
        "Todos os dados originais são preservados bit a bit após a descompactação.",
        "O arquivo compactado torna-se obrigatoriamente executável no Windows.",
        "O processo serve apenas para criptografar senhas armazenadas.",
        "A técnica é exclusiva de planilhas eletrônicas e bancos de dados.",
        "Informações consideradas menos perceptíveis podem ser descartadas para reduzir tamanho."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Formatos com perdas reduzem tamanho descartando parte da informação, o que pode afetar qualidade.",
    "feedbackErro": "A resposta correta é:\n\nInformações consideradas menos perceptíveis podem ser descartadas para reduzir tamanho.\n\nComentário:\nFormatos com perdas reduzem tamanho descartando parte da informação, o que pode afetar qualidade.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Com perdas é comum em áudio, imagem e vídeo."
},
{
    "pergunta": "O reconhecimento óptico de caracteres (OCR) é utilizado para:",
    "alternativas": [
        "Converter imagens de texto em caracteres pesquisáveis ou editáveis.",
        "Aumentar a velocidade do processador durante jogos gráficos.",
        "Trocar automaticamente o sistema de arquivos de um disco.",
        "Criar redes privadas virtuais entre servidores remotos.",
        "Substituir certificados digitais em transações eletrônicas."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! OCR identifica caracteres em imagens ou documentos digitalizados, permitindo busca, cópia e edição do texto.",
    "feedbackErro": "A resposta correta é:\n\nConverter imagens de texto em caracteres pesquisáveis ou editáveis.\n\nComentário:\nOCR identifica caracteres em imagens ou documentos digitalizados, permitindo busca, cópia e edição do texto.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "OCR aparece muito ligado a scanner e digitalização."
},
{
    "pergunta": "Softwares CAD são empregados principalmente para:",
    "alternativas": [
        "Gerenciamento exclusivo de mensagens indesejadas de e-mail.",
        "Criação de desenhos técnicos, projetos e modelagens assistidas por computador.",
        "Instalação automática de drivers de som em sistemas móveis.",
        "Compactação de arquivos sem qualquer finalidade de projeto.",
        "Autenticação biométrica usada apenas em redes sem fio."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! CAD significa projeto assistido por computador, muito usado em engenharia, arquitetura e desenho técnico.",
    "feedbackErro": "A resposta correta é:\n\nCriação de desenhos técnicos, projetos e modelagens assistidas por computador.\n\nComentário:\nCAD significa projeto assistido por computador, muito usado em engenharia, arquitetura e desenho técnico.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "CAD = desenho/projeto técnico."
},
{
    "pergunta": "Um sistema ERP tem como característica típica:",
    "alternativas": [
        "Servir apenas para reproduzir áudio em computadores pessoais.",
        "Substituir todos os dispositivos físicos de uma rede local.",
        "Integrar processos empresariais, como compras, estoque, finanças e produção.",
        "Executar exclusivamente jogos 3D com aceleração gráfica.",
        "Eliminar a necessidade de cadastro e controle de usuários."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! ERP integra áreas e dados da organização, reduzindo duplicidade e facilitando gestão empresarial.",
    "feedbackErro": "A resposta correta é:\n\nIntegrar processos empresariais, como compras, estoque, finanças e produção.\n\nComentário:\nERP integra áreas e dados da organização, reduzindo duplicidade e facilitando gestão empresarial.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "ERP = gestão integrada da empresa."
},
{
    "pergunta": "Um sistema CRM é voltado principalmente para:",
    "alternativas": [
        "Controlar exclusivamente a temperatura interna do processador.",
        "Formatar discos rígidos e criar partições de inicialização.",
        "Substituir protocolos TCP/IP em redes corporativas.",
        "Gerenciar relacionamento com clientes, histórico de contatos e oportunidades.",
        "Criar imagens vetoriais sem relação com atendimento ou vendas."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! CRM concentra informações sobre clientes, interações, vendas, suporte e relacionamento comercial.",
    "feedbackErro": "A resposta correta é:\n\nGerenciar relacionamento com clientes, histórico de contatos e oportunidades.\n\nComentário:\nCRM concentra informações sobre clientes, interações, vendas, suporte e relacionamento comercial.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "CRM = cliente/relacionamento."
},
{
    "pergunta": "Ferramentas de BI são usadas para:",
    "alternativas": [
        "Substituir memórias voláteis por dispositivos de armazenamento permanente.",
        "Criar cabos de fibra óptica usando sinais analógicos.",
        "Realizar apenas edição de imagens sem dados estruturados.",
        "Bloquear atualizações de segurança em servidores corporativos.",
        "Analisar dados e apoiar decisões por meio de relatórios e indicadores."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Business Intelligence usa dados, painéis e relatórios para apoiar análise e tomada de decisão.",
    "feedbackErro": "A resposta correta é:\n\nAnalisar dados e apoiar decisões por meio de relatórios e indicadores.\n\nComentário:\nBusiness Intelligence usa dados, painéis e relatórios para apoiar análise e tomada de decisão.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "BI = análise de dados para decisão."
},
{
    "pergunta": "Um SGBD, como PostgreSQL, MySQL ou SQL Server, é responsável por:",
    "alternativas": [
        "Criar, consultar, organizar e controlar acesso a bancos de dados.",
        "Gerar energia elétrica estabilizada para computadores de mesa.",
        "Substituir o processador em operações de vídeo e renderização.",
        "Converter redes LAN em conexões Bluetooth de curto alcance.",
        "Executar apenas apresentações em tela cheia para o público."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Sistemas gerenciadores de bancos de dados controlam armazenamento, consulta, transações, segurança e integridade dos dados.",
    "feedbackErro": "A resposta correta é:\n\nCriar, consultar, organizar e controlar acesso a bancos de dados.\n\nComentário:\nSistemas gerenciadores de bancos de dados controlam armazenamento, consulta, transações, segurança e integridade dos dados.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "SGBD = gerenciamento de banco de dados."
},
{
    "pergunta": "Uma API pode ser definida como:",
    "alternativas": [
        "Dispositivo físico usado para armazenar dados em memória flash.",
        "Interface que permite comunicação padronizada entre sistemas ou aplicações.",
        "Tipo de cabo usado exclusivamente em redes ópticas metropolitanas.",
        "Programa criado apenas para excluir logs de auditoria do sistema.",
        "Formato de imagem que sempre reduz qualidade de fotografias."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! APIs expõem funções e dados de forma padronizada, permitindo integração entre softwares.",
    "feedbackErro": "A resposta correta é:\n\nInterface que permite comunicação padronizada entre sistemas ou aplicações.\n\nComentário:\nAPIs expõem funções e dados de forma padronizada, permitindo integração entre softwares.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "API = integração entre sistemas."
},
{
    "pergunta": "Um SDK é mais bem descrito como:",
    "alternativas": [
        "Arquivo compactado que contém apenas imagens sem metadados.",
        "Dispositivo de entrada usado para capturar movimentos do usuário.",
        "Conjunto de ferramentas e bibliotecas para desenvolvimento em determinada plataforma.",
        "Protocolo de e-mail destinado ao recebimento de mensagens.",
        "Licença que torna todo programa obrigatoriamente pago."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! SDKs fornecem bibliotecas, documentação, exemplos e ferramentas para criar aplicações em uma plataforma.",
    "feedbackErro": "A resposta correta é:\n\nConjunto de ferramentas e bibliotecas para desenvolvimento em determinada plataforma.\n\nComentário:\nSDKs fornecem bibliotecas, documentação, exemplos e ferramentas para criar aplicações em uma plataforma.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "SDK = kit de desenvolvimento."
},
{
    "pergunta": "Uma IDE, no desenvolvimento de software, normalmente reúne:",
    "alternativas": [
        "Somente cabos, roteadores e pontos de acesso sem fio.",
        "Apenas arquivos de áudio usados para apresentação multimídia.",
        "Unicamente antivírus, firewall e filtro de pacotes de rede.",
        "Editor, depurador, recursos de compilação e ferramentas de apoio ao programador.",
        "Exclusivamente planilhas para controle de estoque físico."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Ambientes integrados de desenvolvimento facilitam codificação, execução, teste e depuração de programas.",
    "feedbackErro": "A resposta correta é:\n\nEditor, depurador, recursos de compilação e ferramentas de apoio ao programador.\n\nComentário:\nAmbientes integrados de desenvolvimento facilitam codificação, execução, teste e depuração de programas.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "IDE = ambiente integrado para programar."
},
{
    "pergunta": "Compilador é o software que:",
    "alternativas": [
        "Registra teclas digitadas para capturar senhas de usuários.",
        "Distribui endereços IP automaticamente em redes locais.",
        "Compacta fotografias usando apenas algoritmos com perdas.",
        "Exibe páginas web armazenadas em servidores remotos.",
        "Traduz código-fonte para código executável ou intermediário antes da execução."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Compiladores traduzem programas escritos em linguagem de alto nível para uma forma executável ou intermediária.",
    "feedbackErro": "A resposta correta é:\n\nTraduz código-fonte para código executável ou intermediário antes da execução.\n\nComentário:\nCompiladores traduzem programas escritos em linguagem de alto nível para uma forma executável ou intermediária.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Compilar = traduzir antes da execução."
},
{
    "pergunta": "Interpretador difere do compilador porque geralmente:",
    "alternativas": [
        "Executa instruções analisando o código durante a execução do programa.",
        "Substitui fisicamente o processador por um dispositivo externo.",
        "Impede qualquer erro lógico durante a criação do algoritmo.",
        "Funciona apenas com arquivos de imagem digital compactados.",
        "Serve exclusivamente para instalar drivers de impressoras."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Interpretadores leem e executam o código em tempo de execução, diferentemente da compilação prévia completa.",
    "feedbackErro": "A resposta correta é:\n\nExecuta instruções analisando o código durante a execução do programa.\n\nComentário:\nInterpretadores leem e executam o código em tempo de execução, diferentemente da compilação prévia completa.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Interpretação ocorre durante a execução."
},
{
    "pergunta": "Ambiente de execução, como uma máquina virtual de linguagem, serve para:",
    "alternativas": [
        "Conectar cabos de rede em portas físicas do roteador.",
        "Fornecer suporte necessário para rodar programas daquela plataforma.",
        "Bloquear permanentemente o acesso a qualquer programa instalado.",
        "Transformar arquivos de texto em componentes eletrônicos.",
        "Eliminar a necessidade de sistema operacional e processador."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Runtimes fornecem bibliotecas e serviços necessários para executar programas desenvolvidos para uma plataforma.",
    "feedbackErro": "A resposta correta é:\n\nFornecer suporte necessário para rodar programas daquela plataforma.\n\nComentário:\nRuntimes fornecem bibliotecas e serviços necessários para executar programas desenvolvidos para uma plataforma.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Runtime = ambiente necessário para executar."
},
{
    "pergunta": "O bytecode, em linguagens como Java, é:",
    "alternativas": [
        "Arquivo de imagem usado exclusivamente em apresentações.",
        "Número físico gravado no conector de rede Ethernet.",
        "Código intermediário executado por uma máquina virtual compatível.",
        "Tipo de memória volátil instalada apenas em notebooks.",
        "Protocolo de envio de mensagens entre servidores de e-mail."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Bytecode permite que o programa seja executado em diferentes plataformas com máquina virtual adequada.",
    "feedbackErro": "A resposta correta é:\n\nCódigo intermediário executado por uma máquina virtual compatível.\n\nComentário:\nBytecode permite que o programa seja executado em diferentes plataformas com máquina virtual adequada.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Bytecode está entre código-fonte e execução pela VM."
},
{
    "pergunta": "Scripts são frequentemente usados em administração de sistemas para:",
    "alternativas": [
        "Trocar automaticamente cabos de rede danificados.",
        "Substituir a placa-mãe em computadores sem intervenção técnica.",
        "Garantir licenciamento gratuito para qualquer software proprietário.",
        "Automatizar sequências de comandos e rotinas repetitivas.",
        "Impedir que logs sejam gerados por sistemas operacionais."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Scripts permitem automatizar tarefas, configurar ambientes, processar arquivos e executar rotinas administrativas.",
    "feedbackErro": "A resposta correta é:\n\nAutomatizar sequências de comandos e rotinas repetitivas.\n\nComentário:\nScripts permitem automatizar tarefas, configurar ambientes, processar arquivos e executar rotinas administrativas.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Script = automação por comandos."
},
{
    "pergunta": "Macros em aplicativos de escritório são recursos que:",
    "alternativas": [
        "Aumentam fisicamente a memória RAM instalada no computador.",
        "Substituem protocolos de rede usados para acessar a Internet.",
        "Criam automaticamente certificados digitais emitidos por autoridade.",
        "Impedem qualquer risco de segurança em documentos recebidos.",
        "Automatizam ações dentro do aplicativo, podendo conter comandos ou código."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Macros automatizam tarefas, mas podem representar risco se documentos maliciosos executarem código indevido.",
    "feedbackErro": "A resposta correta é:\n\nAutomatizam ações dentro do aplicativo, podendo conter comandos ou código.\n\nComentário:\nMacros automatizam tarefas, mas podem representar risco se documentos maliciosos executarem código indevido.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Macro = automação; cuidado com macros de origem desconhecida."
},
{
    "pergunta": "Plug-ins e complementos de software são usados para:",
    "alternativas": [
        "Adicionar funcionalidades a um programa já existente.",
        "Substituir o sistema operacional por hardware dedicado.",
        "Eliminar toda necessidade de atualização do aplicativo principal.",
        "Converter programas aplicativos em dispositivos de armazenamento.",
        "Impedir que navegadores acessem páginas da Internet."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Complementos estendem funções do programa, mas podem exigir compatibilidade e cuidados de segurança.",
    "feedbackErro": "A resposta correta é:\n\nAdicionar funcionalidades a um programa já existente.\n\nComentário:\nComplementos estendem funções do programa, mas podem exigir compatibilidade e cuidados de segurança.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Extensão adiciona recurso, não substitui o programa principal."
},
{
    "pergunta": "Extensões de navegador devem ser instaladas com cautela porque:",
    "alternativas": [
        "Sempre transformam o navegador em sistema operacional completo.",
        "Podem acessar dados de navegação conforme permissões concedidas.",
        "São obrigatoriamente desenvolvidas pelo fabricante do computador.",
        "Eliminam a necessidade de conexão com a Internet.",
        "Impedem que cookies e cache sejam armazenados localmente."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Extensões podem ter permissões amplas; por isso é importante avaliar origem, permissões e reputação.",
    "feedbackErro": "A resposta correta é:\n\nPodem acessar dados de navegação conforme permissões concedidas.\n\nComentário:\nExtensões podem ter permissões amplas; por isso é importante avaliar origem, permissões e reputação.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Permissão excessiva em extensão pode gerar risco."
},
{
    "pergunta": "O cache de aplicativos e navegadores serve principalmente para:",
    "alternativas": [
        "Salvar permanentemente todas as senhas sem criptografia por padrão.",
        "Impedir que qualquer página web seja atualizada pelo servidor.",
        "Armazenar dados temporários que aceleram acessos futuros.",
        "Substituir o armazenamento físico do computador por memória ROM.",
        "Criar automaticamente cópias de segurança completas do sistema."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Cache guarda dados temporários para melhorar desempenho, mas pode precisar ser limpo em casos de erro ou conteúdo desatualizado.",
    "feedbackErro": "A resposta correta é:\n\nArmazenar dados temporários que aceleram acessos futuros.\n\nComentário:\nCache guarda dados temporários para melhorar desempenho, mas pode precisar ser limpo em casos de erro ou conteúdo desatualizado.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Cache = desempenho e reutilização temporária."
},
{
    "pergunta": "Cookies, no contexto de software de navegação, são:",
    "alternativas": [
        "Programas executáveis obrigatoriamente maliciosos em qualquer situação.",
        "Dispositivos físicos usados para ampliar a cobertura Wi-Fi.",
        "Drivers responsáveis por controlar monitores e placas de vídeo.",
        "Pequenos dados armazenados pelo navegador para sessões, preferências ou rastreamento.",
        "Formatos de compactação usados apenas em imagens sem perdas."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Cookies podem manter sessão e preferências, mas também podem ser usados para rastreamento conforme o contexto.",
    "feedbackErro": "A resposta correta é:\n\nPequenos dados armazenados pelo navegador para sessões, preferências ou rastreamento.\n\nComentário:\nCookies podem manter sessão e preferências, mas também podem ser usados para rastreamento conforme o contexto.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Cookie não é vírus por definição."
},
{
    "pergunta": "Uma suíte de escritório diferencia-se de um aplicativo isolado porque:",
    "alternativas": [
        "É composta apenas por drivers de vídeo e áudio do sistema.",
        "Funciona exclusivamente em servidores sem interface de usuário.",
        "Substitui completamente o sistema operacional do computador.",
        "É sempre um software malicioso distribuído por e-mail.",
        "Reúne vários programas integrados para produtividade, como texto, planilha e apresentação."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Suítes como Microsoft Office e LibreOffice agrupam aplicativos relacionados à produtividade.",
    "feedbackErro": "A resposta correta é:\n\nReúne vários programas integrados para produtividade, como texto, planilha e apresentação.\n\nComentário:\nSuítes como Microsoft Office e LibreOffice agrupam aplicativos relacionados à produtividade.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Suíte = conjunto de programas."
},
{
    "pergunta": "No LibreOffice, o aplicativo equivalente ao Microsoft Excel é:",
    "alternativas": [
        "Calc, utilizado para criação e edição de planilhas eletrônicas.",
        "Writer, voltado principalmente à edição de textos.",
        "Impress, usado principalmente para apresentações de slides.",
        "Base, voltado ao gerenciamento de bancos de dados.",
        "Draw, destinado a desenhos e elementos gráficos vetoriais."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Calc é o componente de planilhas do LibreOffice, equivalente funcional ao Excel em muitos contextos.",
    "feedbackErro": "A resposta correta é:\n\nCalc, utilizado para criação e edição de planilhas eletrônicas.\n\nComentário:\nCalc é o componente de planilhas do LibreOffice, equivalente funcional ao Excel em muitos contextos.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Word/Writer, Excel/Calc, PowerPoint/Impress."
},
{
    "pergunta": "O formato ODF está associado principalmente a:",
    "alternativas": [
        "Protocolo de envio de e-mails entre servidores SMTP.",
        "Padrão aberto de documentos usado por suítes como LibreOffice.",
        "Método de compactação exclusivo para arquivos executáveis.",
        "Tipo de endereço físico gravado em placas de rede.",
        "Sistema de arquivos usado apenas por discos ópticos antigos."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! ODF é um padrão aberto para documentos de texto, planilhas e apresentações.",
    "feedbackErro": "A resposta correta é:\n\nPadrão aberto de documentos usado por suítes como LibreOffice.\n\nComentário:\nODF é um padrão aberto para documentos de texto, planilhas e apresentações.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "ODF aparece em questões sobre formatos abertos."
},
{
    "pergunta": "Um leitor de PDF, por padrão, tem como finalidade principal:",
    "alternativas": [
        "Compilar código-fonte em linguagem de baixo nível.",
        "Gerenciar endereços IP atribuídos por DHCP.",
        "Abrir e visualizar documentos PDF, podendo ter recursos extras conforme o programa.",
        "Controlar fisicamente a rotação de discos magnéticos.",
        "Substituir todos os editores de texto do sistema operacional."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Leitores de PDF visualizam documentos; edição avançada depende de recursos específicos ou softwares próprios.",
    "feedbackErro": "A resposta correta é:\n\nAbrir e visualizar documentos PDF, podendo ter recursos extras conforme o programa.\n\nComentário:\nLeitores de PDF visualizam documentos; edição avançada depende de recursos específicos ou softwares próprios.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Visualizar PDF não é necessariamente editar PDF."
},
{
    "pergunta": "O Controle de Conta de Usuário (UAC), no Windows, busca:",
    "alternativas": [
        "Aumentar a velocidade da conexão Wi-Fi em redes domésticas.",
        "Formatar automaticamente mídias removíveis ao serem conectadas.",
        "Substituir antivírus, firewall e backup por um único recurso.",
        "Reduzir alterações não autorizadas solicitando confirmação para ações elevadas.",
        "Transformar todos os usuários comuns em administradores permanentes."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! O UAC solicita confirmação ou credenciais para operações que exigem privilégios administrativos.",
    "feedbackErro": "A resposta correta é:\n\nReduzir alterações não autorizadas solicitando confirmação para ações elevadas.\n\nComentário:\nO UAC solicita confirmação ou credenciais para operações que exigem privilégios administrativos.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "UAC = controle de elevação de privilégios."
},
{
    "pergunta": "Serviços do sistema operacional são programas que normalmente:",
    "alternativas": [
        "Funcionam apenas quando o usuário abre uma apresentação de slides.",
        "São arquivos de imagem usados exclusivamente para papéis de parede.",
        "Representam cabos físicos conectados entre roteador e modem.",
        "Impedem que processos sejam iniciados após o carregamento do sistema.",
        "Executam em segundo plano para fornecer funções ao sistema ou a aplicações."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Serviços executam tarefas de suporte, rede, impressão, atualização, segurança e outros recursos em segundo plano.",
    "feedbackErro": "A resposta correta é:\n\nExecutam em segundo plano para fornecer funções ao sistema ou a aplicações.\n\nComentário:\nServiços executam tarefas de suporte, rede, impressão, atualização, segurança e outros recursos em segundo plano.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Serviço = execução em segundo plano."
},
{
    "pergunta": "O Gerenciador de Tarefas é utilizado, entre outras funções, para:",
    "alternativas": [
        "Visualizar processos, consumo de recursos e aplicativos em execução.",
        "Alterar fisicamente o tipo de memória instalada na placa-mãe.",
        "Substituir o sistema de arquivos por um protocolo de rede.",
        "Converter automaticamente documentos em imagens vetoriais.",
        "Criar licenças de software para programas proprietários."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! O Gerenciador de Tarefas permite acompanhar processos, desempenho, inicialização e uso de CPU, memória, disco e rede.",
    "feedbackErro": "A resposta correta é:\n\nVisualizar processos, consumo de recursos e aplicativos em execução.\n\nComentário:\nO Gerenciador de Tarefas permite acompanhar processos, desempenho, inicialização e uso de CPU, memória, disco e rede.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Gerenciador de Tarefas = processos e desempenho."
},
{
    "pergunta": "O Agendador de Tarefas em sistemas operacionais permite:",
    "alternativas": [
        "Criar fisicamente novas portas USB no computador.",
        "Executar ações automaticamente em horários ou eventos definidos.",
        "Impedir que qualquer atualização de segurança seja instalada.",
        "Transformar programas de texto em sistemas operacionais.",
        "Substituir senhas por cabos de rede Ethernet."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Agendadores permitem automatizar scripts, rotinas de manutenção e execução de programas em condições específicas.",
    "feedbackErro": "A resposta correta é:\n\nExecutar ações automaticamente em horários ou eventos definidos.\n\nComentário:\nAgendadores permitem automatizar scripts, rotinas de manutenção e execução de programas em condições específicas.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Agendar = executar automaticamente conforme regra."
},
{
    "pergunta": "A diferença mais adequada entre serviço e aplicativo interativo é:",
    "alternativas": [
        "Serviço é hardware; aplicativo é sempre cabo de rede.",
        "Serviço só existe em celulares; aplicativo só existe em servidores.",
        "Serviço pode operar em segundo plano; aplicativo interativo depende mais da interface do usuário.",
        "Aplicativo não usa memória; serviço não usa processador.",
        "Ambos são obrigatoriamente arquivos compactados em formato ZIP."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Serviços geralmente executam funções contínuas ou automáticas, enquanto aplicativos interativos são usados diretamente pelo usuário.",
    "feedbackErro": "A resposta correta é:\n\nServiço pode operar em segundo plano; aplicativo interativo depende mais da interface do usuário.\n\nComentário:\nServiços geralmente executam funções contínuas ou automáticas, enquanto aplicativos interativos são usados diretamente pelo usuário.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Serviço em segundo plano é pegadinha comum."
},
{
    "pergunta": "Logs do sistema são importantes porque:",
    "alternativas": [
        "Substituem a memória RAM durante a execução de aplicativos.",
        "Aumentam fisicamente a capacidade da bateria de notebooks.",
        "Transformam arquivos temporários em programas executáveis.",
        "Registram eventos úteis para diagnóstico, auditoria e investigação de falhas.",
        "Impedem automaticamente qualquer erro humano ou invasão."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Logs registram eventos, erros, acessos e mudanças, auxiliando suporte técnico e análise de incidentes.",
    "feedbackErro": "A resposta correta é:\n\nRegistram eventos úteis para diagnóstico, auditoria e investigação de falhas.\n\nComentário:\nLogs registram eventos, erros, acessos e mudanças, auxiliando suporte técnico e análise de incidentes.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Log = registro de evento."
},
{
    "pergunta": "O Visualizador de Eventos do Windows é associado principalmente a:",
    "alternativas": [
        "Edição de planilhas e criação de apresentações profissionais.",
        "Instalação física de módulos de memória em notebooks.",
        "Gerenciamento exclusivo de cabos e conectores HDMI.",
        "Conversão de endereços de domínio em endereços IP públicos.",
        "Consulta de registros de sistema, segurança, aplicações e falhas."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! O Visualizador de Eventos permite examinar logs de aplicativos, segurança e sistema no Windows.",
    "feedbackErro": "A resposta correta é:\n\nConsulta de registros de sistema, segurança, aplicações e falhas.\n\nComentário:\nO Visualizador de Eventos permite examinar logs de aplicativos, segurança e sistema no Windows.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Eventos do Windows = logs para diagnóstico."
},
{
    "pergunta": "O Registro do Windows é:",
    "alternativas": [
        "Banco hierárquico de configurações do sistema, usuários e aplicativos.",
        "Arquivo de imagem usado apenas para papel de parede.",
        "Protocolo de transferência segura de páginas web.",
        "Cabo usado para conexão de redes Ethernet cabeadas.",
        "Aplicativo de apresentação equivalente ao Impress."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! O Registro armazena configurações importantes do Windows e de programas, exigindo cuidado ao ser alterado.",
    "feedbackErro": "A resposta correta é:\n\nBanco hierárquico de configurações do sistema, usuários e aplicativos.\n\nComentário:\nO Registro armazena configurações importantes do Windows e de programas, exigindo cuidado ao ser alterado.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Registro não é pasta comum de documentos."
},
{
    "pergunta": "Variáveis de ambiente são utilizadas para:",
    "alternativas": [
        "Medir a temperatura externa do local onde está o computador.",
        "Armazenar valores de configuração acessíveis por processos e pelo sistema.",
        "Substituir fisicamente discos SSD por memórias ROM.",
        "Criar contas bancárias para usuários de aplicativos online.",
        "Bloquear completamente a execução de qualquer script autorizado."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Variáveis de ambiente guardam caminhos, opções e valores consultados por programas e pelo sistema operacional.",
    "feedbackErro": "A resposta correta é:\n\nArmazenar valores de configuração acessíveis por processos e pelo sistema.\n\nComentário:\nVariáveis de ambiente guardam caminhos, opções e valores consultados por programas e pelo sistema operacional.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "PATH é a variável mais lembrada em concursos técnicos."
},
{
    "pergunta": "A variável PATH é relevante porque:",
    "alternativas": [
        "Define a velocidade máxima da rede Wi-Fi doméstica.",
        "Controla a quantidade física de núcleos do processador.",
        "Indica diretórios onde o sistema procura comandos e executáveis.",
        "Criptografa automaticamente todos os arquivos do usuário.",
        "Substitui os drivers de vídeo instalados no sistema."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! PATH permite executar comandos sem informar o caminho completo do arquivo executável.",
    "feedbackErro": "A resposta correta é:\n\nIndica diretórios onde o sistema procura comandos e executáveis.\n\nComentário:\nPATH permite executar comandos sem informar o caminho completo do arquivo executável.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "PATH está ligada à localização de executáveis."
},
{
    "pergunta": "PowerShell e Prompt de Comando são ferramentas relacionadas a:",
    "alternativas": [
        "Edição avançada de fotografias sem qualquer comando textual.",
        "Transmissão física de áudio e vídeo por cabo HDMI.",
        "Substituição de protocolos de roteamento em redes externas.",
        "Execução de comandos e administração do sistema por interface textual.",
        "Criação de certificados digitais por autoridade certificadora pública."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Ambas são interfaces de linha de comando, com PowerShell oferecendo recursos avançados de automação e administração.",
    "feedbackErro": "A resposta correta é:\n\nExecução de comandos e administração do sistema por interface textual.\n\nComentário:\nAmbas são interfaces de linha de comando, com PowerShell oferecendo recursos avançados de automação e administração.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "PowerShell costuma ser mais poderoso que o CMD tradicional."
},
{
    "pergunta": "O modo de segurança de um sistema operacional é utilizado para:",
    "alternativas": [
        "Aumentar permanentemente a velocidade do processador.",
        "Executar apenas jogos e aplicativos gráficos de alto desempenho.",
        "Instalar automaticamente todos os drivers de qualquer fabricante.",
        "Apagar logs de eventos para ocultar falhas do sistema.",
        "Inicializar com recursos mínimos para diagnóstico e correção de problemas."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! O modo de segurança carrega componentes essenciais, ajudando a diagnosticar drivers, serviços ou softwares problemáticos.",
    "feedbackErro": "A resposta correta é:\n\nInicializar com recursos mínimos para diagnóstico e correção de problemas.\n\nComentário:\nO modo de segurança carrega componentes essenciais, ajudando a diagnosticar drivers, serviços ou softwares problemáticos.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Modo de segurança = inicialização mínima para suporte."
},
{
    "pergunta": "Ponto de restauração, em sistemas como Windows, serve para:",
    "alternativas": [
        "Retornar configurações do sistema a um estado anterior registrado.",
        "Copiar integralmente todos os arquivos pessoais para a nuvem.",
        "Substituir backups completos de dados corporativos por padrão.",
        "Aumentar fisicamente o espaço de armazenamento disponível.",
        "Converter partições do disco em memória cache do processador."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Pontos de restauração ajudam a desfazer alterações do sistema, mas não substituem uma política de backup de arquivos.",
    "feedbackErro": "A resposta correta é:\n\nRetornar configurações do sistema a um estado anterior registrado.\n\nComentário:\nPontos de restauração ajudam a desfazer alterações do sistema, mas não substituem uma política de backup de arquivos.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Restauração do sistema não é backup completo."
},
{
    "pergunta": "Uma imagem do sistema é diferente de um simples backup de arquivos porque:",
    "alternativas": [
        "Armazena apenas atalhos da área de trabalho sem conteúdo real.",
        "Pode conter estado completo de partições, sistema e configurações.",
        "Funciona exclusivamente para compactar arquivos de áudio.",
        "É sempre menor que qualquer documento de texto simples.",
        "Dispensa qualquer mídia ou local de armazenamento externo."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Imagem de sistema pode permitir restauração mais ampla, incluindo sistema operacional, aplicações e configuração.",
    "feedbackErro": "A resposta correta é:\n\nPode conter estado completo de partições, sistema e configurações.\n\nComentário:\nImagem de sistema pode permitir restauração mais ampla, incluindo sistema operacional, aplicações e configuração.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Imagem do sistema é mais abrangente que cópia isolada de arquivos."
},
{
    "pergunta": "Arquivos MSI no Windows estão normalmente associados a:",
    "alternativas": [
        "Formatos de imagem vetorial usados em editores gráficos.",
        "Protocolos de roteamento entre redes autônomas.",
        "Pacotes de instalação gerenciados pelo Windows Installer.",
        "Bases de dados usadas somente por navegadores web.",
        "Cabos físicos para transmissão de áudio digital."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! MSI é um formato de pacote de instalação usado pelo Windows Installer para instalar, reparar ou remover programas.",
    "feedbackErro": "A resposta correta é:\n\nPacotes de instalação gerenciados pelo Windows Installer.\n\nComentário:\nMSI é um formato de pacote de instalação usado pelo Windows Installer para instalar, reparar ou remover programas.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "MSI costuma aparecer em questões de instalação de software."
},
{
    "pergunta": "Um aplicativo portátil é aquele que, em geral:",
    "alternativas": [
        "Funciona apenas se gravado permanentemente na BIOS.",
        "É obrigatório em servidores de banco de dados corporativos.",
        "Substitui toda autenticação por reconhecimento facial.",
        "Pode ser executado com pouca ou nenhuma instalação no sistema.",
        "Elimina qualquer risco de segurança por definição."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Aplicativos portáteis podem rodar a partir de pastas ou mídias removíveis, deixando menos dependências instaladas.",
    "feedbackErro": "A resposta correta é:\n\nPode ser executado com pouca ou nenhuma instalação no sistema.\n\nComentário:\nAplicativos portáteis podem rodar a partir de pastas ou mídias removíveis, deixando menos dependências instaladas.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Portátil não significa necessariamente seguro."
},
{
    "pergunta": "O desinstalador de um programa é usado para:",
    "alternativas": [
        "Aumentar a capacidade física da placa de vídeo.",
        "Transformar arquivos PDF em processadores de texto.",
        "Criar automaticamente rotas de rede entre países.",
        "Bloquear todas as atualizações do sistema operacional.",
        "Remover componentes instalados e registros associados ao aplicativo."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Desinstaladores removem arquivos, serviços, atalhos e configurações relacionados, embora resíduos possam permanecer.",
    "feedbackErro": "A resposta correta é:\n\nRemover componentes instalados e registros associados ao aplicativo.\n\nComentário:\nDesinstaladores removem arquivos, serviços, atalhos e configurações relacionados, embora resíduos possam permanecer.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Excluir o ícone não equivale a desinstalar corretamente."
},
{
    "pergunta": "Em sistemas móveis, permissões de aplicativos servem para:",
    "alternativas": [
        "Controlar acesso a recursos como câmera, localização, contatos e armazenamento.",
        "Aumentar a potência física da bateria em qualquer aparelho.",
        "Converter automaticamente aplicativos em sistemas operacionais.",
        "Desativar permanentemente a necessidade de atualização de segurança.",
        "Substituir cabos de carregamento por protocolos de e-mail."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Permissões limitam quais recursos o aplicativo pode usar, sendo essenciais para privacidade e segurança.",
    "feedbackErro": "A resposta correta é:\n\nControlar acesso a recursos como câmera, localização, contatos e armazenamento.\n\nComentário:\nPermissões limitam quais recursos o aplicativo pode usar, sendo essenciais para privacidade e segurança.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Permissão deve ser compatível com a função do app."
},
{
    "pergunta": "Sandbox, em contexto de software, é uma técnica que busca:",
    "alternativas": [
        "Substituir discos SSD por memórias ópticas de leitura única.",
        "Isolar a execução de código para reduzir impacto sobre o restante do sistema.",
        "Impedir que qualquer programa utilize recursos de processamento.",
        "Converter planilhas em arquivos de áudio automaticamente.",
        "Eliminar a necessidade de controle de acesso em redes públicas."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Sandbox restringe o ambiente de execução, limitando acesso a arquivos, recursos e partes sensíveis do sistema.",
    "feedbackErro": "A resposta correta é:\n\nIsolar a execução de código para reduzir impacto sobre o restante do sistema.\n\nComentário:\nSandbox restringe o ambiente de execução, limitando acesso a arquivos, recursos e partes sensíveis do sistema.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Sandbox = isolamento controlado."
},
{
    "pergunta": "Acessibilidade digital em software significa:",
    "alternativas": [
        "Criar programas que funcionem apenas em computadores de alto custo.",
        "Impedir ajustes de contraste, fonte, navegação e leitores de tela.",
        "Projetar recursos para uso por pessoas com diferentes necessidades e limitações.",
        "Substituir todo conteúdo textual por imagens sem descrição.",
        "Bloquear a navegação por teclado em formulários e menus."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Acessibilidade envolve leitores de tela, contraste, navegação por teclado, legendas, textos alternativos e desenho inclusivo.",
    "feedbackErro": "A resposta correta é:\n\nProjetar recursos para uso por pessoas com diferentes necessidades e limitações.\n\nComentário:\nAcessibilidade envolve leitores de tela, contraste, navegação por teclado, legendas, textos alternativos e desenho inclusivo.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Acessibilidade é inclusão no uso do software."
},
{
    "pergunta": "Internacionalização de software refere-se a:",
    "alternativas": [
        "Instalar o programa obrigatoriamente em servidores fora do país.",
        "Converter todo aplicativo em protocolo de comunicação internacional.",
        "Bloquear moedas, datas e acentos usados em outros idiomas.",
        "Preparar o sistema para adaptação a idiomas, formatos e regiões diferentes.",
        "Remover traduções para impedir uso por usuários estrangeiros."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Internacionalização prepara o software para localização, considerando idioma, moeda, data, fuso e convenções regionais.",
    "feedbackErro": "A resposta correta é:\n\nPreparar o sistema para adaptação a idiomas, formatos e regiões diferentes.\n\nComentário:\nInternacionalização prepara o software para localização, considerando idioma, moeda, data, fuso e convenções regionais.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "i18n prepara; localização adapta para uma região."
},
{
    "pergunta": "Assinatura digital de um instalador ajuda o usuário a verificar:",
    "alternativas": [
        "Quantidade física de memória RAM disponível no computador.",
        "Velocidade máxima do cabo HDMI conectado ao monitor.",
        "Garantia absoluta de que o programa nunca terá vulnerabilidades.",
        "Conversão automática de licença proprietária em código aberto.",
        "Autoria e integridade do arquivo antes da instalação."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! A assinatura digital indica quem assinou o instalador e se o arquivo foi alterado após a assinatura.",
    "feedbackErro": "A resposta correta é:\n\nAutoria e integridade do arquivo antes da instalação.\n\nComentário:\nA assinatura digital indica quem assinou o instalador e se o arquivo foi alterado após a assinatura.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Assinatura digital não garante perfeição, mas aumenta confiança."
},
{
    "pergunta": "A verificação por checksum ou hash de um arquivo baixado serve para:",
    "alternativas": [
        "Comparar a integridade do arquivo recebido com o valor divulgado.",
        "Aumentar a velocidade da Internet por compressão automática.",
        "Transformar o arquivo em software livre sem restrição de licença.",
        "Instalar drivers ausentes sem intervenção do sistema operacional.",
        "Substituir autenticação de usuários por impressão digital."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Hashes como SHA-256 permitem conferir se o arquivo foi corrompido ou alterado em relação ao valor esperado.",
    "feedbackErro": "A resposta correta é:\n\nComparar a integridade do arquivo recebido com o valor divulgado.\n\nComentário:\nHashes como SHA-256 permitem conferir se o arquivo foi corrompido ou alterado em relação ao valor esperado.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Hash confere integridade, não descriptografa conteúdo."
},
{
    "pergunta": "Uma aplicação de 64 bits, em comparação com uma de 32 bits, pode:",
    "alternativas": [
        "Funcionar obrigatoriamente em qualquer processador de 8 bits antigo.",
        "Endereçar mais memória, desde que sistema e hardware sejam compatíveis.",
        "Eliminar a necessidade de sistema operacional instalado.",
        "Impedir por definição todos os ataques de malware existentes.",
        "Transformar arquivos compactados em memória física adicional."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Arquitetura de 64 bits permite maior espaço de endereçamento, mas requer compatibilidade de processador e sistema.",
    "feedbackErro": "A resposta correta é:\n\nEndereçar mais memória, desde que sistema e hardware sejam compatíveis.\n\nComentário:\nArquitetura de 64 bits permite maior espaço de endereçamento, mas requer compatibilidade de processador e sistema.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "64 bits está muito ligado a capacidade de endereçamento de memória."
},
{
    "pergunta": "Em sistemas compatíveis, aplicações de 32 bits em sistema de 64 bits:",
    "alternativas": [
        "Sempre exigem troca física da placa-mãe a cada execução.",
        "São automaticamente convertidas em aplicativos móveis nativos.",
        "Podem funcionar por subsistemas de compatibilidade, com limitações próprias.",
        "Nunca podem ser executadas em qualquer circunstância técnica.",
        "Dispensam drivers, bibliotecas e permissões do sistema."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Muitos sistemas de 64 bits conseguem executar aplicações de 32 bits por compatibilidade, mas há limites e dependências.",
    "feedbackErro": "A resposta correta é:\n\nPodem funcionar por subsistemas de compatibilidade, com limitações próprias.\n\nComentário:\nMuitos sistemas de 64 bits conseguem executar aplicações de 32 bits por compatibilidade, mas há limites e dependências.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Compatibilidade não significa desempenho ou suporte ilimitado."
},
{
    "pergunta": "A limitação clássica de sistemas de 32 bits está relacionada principalmente a:",
    "alternativas": [
        "Impossibilidade de executar qualquer editor de texto simples.",
        "Obrigação de usar apenas monitores monocromáticos antigos.",
        "Ausência completa de suporte a redes locais cabeadas.",
        "Menor espaço de endereçamento de memória em relação a 64 bits.",
        "Proibição de criar contas de usuário no sistema operacional."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Sistemas de 32 bits têm espaço de endereçamento mais limitado, o que afeta o uso de grandes quantidades de memória.",
    "feedbackErro": "A resposta correta é:\n\nMenor espaço de endereçamento de memória em relação a 64 bits.\n\nComentário:\nSistemas de 32 bits têm espaço de endereçamento mais limitado, o que afeta o uso de grandes quantidades de memória.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "32 bits x 64 bits cai muito associado à memória."
},
{
    "pergunta": "Atualizações de sistema operacional podem afetar drivers porque:",
    "alternativas": [
        "Drivers são arquivos de imagem sem relação com hardware.",
        "Todo driver é sempre independente do sistema operacional instalado.",
        "Atualizações convertem automaticamente drivers em documentos PDF.",
        "Drivers funcionam apenas quando não há dispositivo conectado.",
        "Mudanças no sistema podem exigir versões compatíveis do software de controle."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Drivers dependem de compatibilidade com o sistema; atualizações podem corrigir ou causar problemas de funcionamento.",
    "feedbackErro": "A resposta correta é:\n\nMudanças no sistema podem exigir versões compatíveis do software de controle.\n\nComentário:\nDrivers dependem de compatibilidade com o sistema; atualizações podem corrigir ou causar problemas de funcionamento.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Driver incompatível é causa comum de falha após atualização."
},
{
    "pergunta": "A diferença entre firmware e driver é que:",
    "alternativas": [
        "Firmware fica embarcado no dispositivo; driver permite comunicação com o sistema.",
        "Firmware é aplicativo de planilha; driver é sempre arquivo de áudio.",
        "Driver fica gravado apenas em ROM; firmware roda somente no navegador.",
        "Ambos são nomes diferentes para a mesma tecla do teclado.",
        "Firmware não controla dispositivo algum; driver não usa software."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Firmware é software interno do equipamento; driver é software instalado no sistema para controlar ou acessar o dispositivo.",
    "feedbackErro": "A resposta correta é:\n\nFirmware fica embarcado no dispositivo; driver permite comunicação com o sistema.\n\nComentário:\nFirmware é software interno do equipamento; driver é software instalado no sistema para controlar ou acessar o dispositivo.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Firmware no dispositivo; driver no sistema."
},
{
    "pergunta": "BIOS e UEFI são exemplos de software do tipo:",
    "alternativas": [
        "Editor de texto usado para criar documentos acadêmicos.",
        "Firmware responsável por inicialização e configuração básica do hardware.",
        "Banco de dados empresarial voltado a relacionamento com clientes.",
        "Extensão de navegador usada para bloquear anúncios.",
        "Planilha eletrônica integrada a suíte de escritório."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! BIOS e UEFI inicializam o hardware e iniciam o carregamento do sistema operacional.",
    "feedbackErro": "A resposta correta é:\n\nFirmware responsável por inicialização e configuração básica do hardware.\n\nComentário:\nBIOS e UEFI inicializam o hardware e iniciam o carregamento do sistema operacional.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "BIOS/UEFI aparecem entre hardware e software."
},
{
    "pergunta": "O spooler de impressão tem como função:",
    "alternativas": [
        "Compactar imagens em formato vetorial sem perda.",
        "Controlar exclusivamente o brilho do monitor.",
        "Gerenciar fila e envio de trabalhos para a impressora.",
        "Distribuir endereços IP em redes locais por DHCP.",
        "Substituir o driver de vídeo por uma extensão web."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! O spooler organiza trabalhos de impressão, permitindo fila, pausa, cancelamento e envio ao dispositivo.",
    "feedbackErro": "A resposta correta é:\n\nGerenciar fila e envio de trabalhos para a impressora.\n\nComentário:\nO spooler organiza trabalhos de impressão, permitindo fila, pausa, cancelamento e envio ao dispositivo.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Spooler = fila de impressão."
},
{
    "pergunta": "Driver de impressora é necessário porque:",
    "alternativas": [
        "Aumenta fisicamente a quantidade de papel dentro da bandeja.",
        "Transforma a impressora em roteador de longa distância.",
        "Substitui qualquer necessidade de conexão elétrica.",
        "Traduz comandos do sistema ou aplicativo para linguagem compreendida pelo equipamento.",
        "Permite editar textos sem software aplicativo instalado."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! O driver permite que o sistema operacional envie instruções corretas ao modelo de impressora.",
    "feedbackErro": "A resposta correta é:\n\nTraduz comandos do sistema ou aplicativo para linguagem compreendida pelo equipamento.\n\nComentário:\nO driver permite que o sistema operacional envie instruções corretas ao modelo de impressora.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Driver é tradutor entre sistema e dispositivo."
},
{
    "pergunta": "Associação de arquivos em sistemas operacionais indica:",
    "alternativas": [
        "Quantidade máxima de energia consumida pelo processador.",
        "Endereço físico gravado na placa de rede do computador.",
        "Senha criptografada usada apenas por servidores de e-mail.",
        "Velocidade de transmissão de uma porta HDMI conectada.",
        "Qual aplicativo padrão será usado para abrir determinado tipo de arquivo."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! A associação relaciona extensões ou tipos de arquivo a programas padrão, como abrir PDF em um leitor específico.",
    "feedbackErro": "A resposta correta é:\n\nQual aplicativo padrão será usado para abrir determinado tipo de arquivo.\n\nComentário:\nA associação relaciona extensões ou tipos de arquivo a programas padrão, como abrir PDF em um leitor específico.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Extensão ajuda o sistema a escolher o programa padrão."
},
{
    "pergunta": "Perfis de usuário em sistemas operacionais servem para:",
    "alternativas": [
        "Separar configurações, dados e preferências de diferentes contas.",
        "Aumentar automaticamente o clock de todos os processadores.",
        "Converter protocolos de Internet em arquivos executáveis.",
        "Substituir discos rígidos por armazenamento volátil.",
        "Criar cabos físicos para cada aplicativo instalado."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Perfis permitem que usuários diferentes tenham áreas, configurações e permissões próprias no mesmo sistema.",
    "feedbackErro": "A resposta correta é:\n\nSeparar configurações, dados e preferências de diferentes contas.\n\nComentário:\nPerfis permitem que usuários diferentes tenham áreas, configurações e permissões próprias no mesmo sistema.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Perfil de usuário não é apenas nome de login."
},
{
    "pergunta": "Em um sistema multiusuário, permissões são necessárias para:",
    "alternativas": [
        "Eliminar a necessidade de memória e processador.",
        "Controlar o acesso de cada conta a arquivos, programas e recursos.",
        "Transformar todo arquivo em cópia de segurança automática.",
        "Impedir o uso de qualquer software aplicativo no sistema.",
        "Conectar computadores sem placas ou interfaces de rede."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Permissões protegem recursos e dados, definindo o que cada usuário ou grupo pode acessar e modificar.",
    "feedbackErro": "A resposta correta é:\n\nControlar o acesso de cada conta a arquivos, programas e recursos.\n\nComentário:\nPermissões protegem recursos e dados, definindo o que cada usuário ou grupo pode acessar e modificar.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Multiusuário exige controle de acesso."
},
{
    "pergunta": "Alterar a prioridade de um processo pode:",
    "alternativas": [
        "Aumentar fisicamente o número de núcleos do processador.",
        "Converter automaticamente o programa em serviço de rede.",
        "Influenciar a atenção dada pelo escalonador, sem garantir desempenho absoluto.",
        "Eliminar todos os gargalos de disco, memória e conexão.",
        "Transformar um aplicativo comum em sistema operacional."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Prioridade pode afetar o escalonamento, mas desempenho depende de vários recursos e limitações do sistema.",
    "feedbackErro": "A resposta correta é:\n\nInfluenciar a atenção dada pelo escalonador, sem garantir desempenho absoluto.\n\nComentário:\nPrioridade pode afetar o escalonamento, mas desempenho depende de vários recursos e limitações do sistema.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Prioridade não cria recurso físico novo."
},
{
    "pergunta": "Um processo em segundo plano caracteriza-se por:",
    "alternativas": [
        "Ser obrigatoriamente malware e sempre prejudicar o computador.",
        "Existir apenas quando não há sistema operacional instalado.",
        "Aparecer somente como arquivo compactado dentro da Lixeira.",
        "Executar sem interação direta constante com o usuário.",
        "Substituir fisicamente periféricos de entrada e saída."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Processos em segundo plano podem ser legítimos, como serviços de atualização, sincronização, impressão ou segurança.",
    "feedbackErro": "A resposta correta é:\n\nExecutar sem interação direta constante com o usuário.\n\nComentário:\nProcessos em segundo plano podem ser legítimos, como serviços de atualização, sincronização, impressão ou segurança.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Segundo plano não significa automaticamente ameaça."
},
{
    "pergunta": "A telemetria de uso em um software corporativo, quando autorizada, pode auxiliar a:",
    "alternativas": [
        "Coletar métricas de funcionamento para melhoria, suporte e tomada de decisão.",
        "Substituir todos os mecanismos de autenticação por acesso anônimo.",
        "Converter automaticamente licenças proprietárias em domínio público.",
        "Aumentar fisicamente a quantidade de portas USB disponíveis.",
        "Eliminar a necessidade de consentimento ou política de privacidade."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Telemetria coleta dados de uso e desempenho, devendo respeitar regras de privacidade e configuração adotadas.",
    "feedbackErro": "A resposta correta é:\n\nColetar métricas de funcionamento para melhoria, suporte e tomada de decisão.\n\nComentário:\nTelemetria coleta dados de uso e desempenho, devendo respeitar regras de privacidade e configuração adotadas.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Telemetria é coleta de métricas, não permissão para coletar qualquer dado."
},
{
    "pergunta": "Em aplicações corporativas, controle de versão de documentos ou códigos permite:",
    "alternativas": [
        "Impedir que qualquer usuário autorizado acesse arquivos compartilhados.",
        "Registrar alterações, identificar autores e recuperar estados anteriores.",
        "Aumentar automaticamente o tamanho físico do monitor utilizado.",
        "Converter protocolos de e-mail em sistemas operacionais móveis.",
        "Substituir backups, logs e permissões em todos os cenários."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Controle de versão ajuda a rastrear mudanças, comparar versões e recuperar estados anteriores de arquivos ou código.",
    "feedbackErro": "A resposta correta é:\n\nRegistrar alterações, identificar autores e recuperar estados anteriores.\n\nComentário:\nControle de versão ajuda a rastrear mudanças, comparar versões e recuperar estados anteriores de arquivos ou código.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Versão = rastreabilidade de alterações."
},
{
    "pergunta": "Um software legado, em ambiente institucional, é aquele que:",
    "alternativas": [
        "Foi instalado ontem e possui suporte completo do fabricante.",
        "É obrigatoriamente um programa livre sem qualquer dependência.",
        "Funciona apenas como extensão moderna de navegador móvel.",
        "Continua em uso apesar de tecnologia antiga, suporte restrito ou difícil manutenção.",
        "Dispensa integração, documentação e análise de risco operacional."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Sistemas legados podem ser críticos para a organização, mas tendem a exigir atenção quanto a suporte, segurança e integração.",
    "feedbackErro": "A resposta correta é:\n\nContinua em uso apesar de tecnologia antiga, suporte restrito ou difícil manutenção.\n\nComentário:\nSistemas legados podem ser críticos para a organização, mas tendem a exigir atenção quanto a suporte, segurança e integração.\n\nRevise a dica da banca para fixar o conteúdo.",
    "dicaBanca": "Legado não significa inútil; significa antigo ou difícil de manter."
}
];
