// ==========================
// FAROL DO SABER - ARQUIVOS
// Banco ampliado para 150 questões.
// Questões inéditas, distratores fortes e gabarito balanceado.
// ==========================

const arquivos = [
    {
        "pergunta": "Em um sistema operacional moderno, um arquivo pode ser corretamente definido como:",
        "alternativas": [
            "Uma unidade física de armazenamento responsável pela gravação permanente de dados.",
            "Uma estrutura lógica destinada ao armazenamento organizado de informações digitais.",
            "Um conjunto de diretórios utilizado para agrupar dispositivos de armazenamento.",
            "Uma área temporária da memória RAM destinada à execução de programas.",
            "Um mecanismo utilizado exclusivamente para compartilhamento de dados em rede."
        ],
        "correta": 1,
        "feedbackAcerto": "\nArquivo é uma estrutura lógica utilizada para armazenar informações digitais, independentemente do dispositivo físico em que esteja gravado.\n",
        "feedbackErro": "A resposta correta é:\n\nUma estrutura lógica destinada ao armazenamento organizado de informações digitais.\n\nComentário:\nArquivo é uma estrutura lógica utilizada para armazenar informações digitais, independentemente do dispositivo físico em que esteja gravado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nMuitas bancas confundem conceitos físicos (HD, SSD) com conceitos lógicos (arquivo e pasta).\n"
    },
    {
        "pergunta": "Considere os arquivos RELATORIO.docx, RELATORIO.pdf e RELATORIO.xlsx. Assinale a afirmativa correta.",
        "alternativas": [
            "Os três arquivos necessariamente possuem o mesmo conteúdo.",
            "Os três arquivos são incompatíveis com sistemas Windows.",
            "A alteração da extensão modifica automaticamente o conteúdo interno do arquivo.",
            "A extensão determina o tamanho máximo do arquivo.",
            "Os três arquivos possuem extensões distintas que indicam formatos diferentes."
        ],
        "correta": 4,
        "feedbackAcerto": "\nAs extensões indicam formatos diferentes de arquivos e geralmente estão associadas a aplicações específicas.\n",
        "feedbackErro": "A resposta correta é:\n\nOs três arquivos possuem extensões distintas que indicam formatos diferentes.\n\nComentário:\nAs extensões indicam formatos diferentes de arquivos e geralmente estão associadas a aplicações específicas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nDecorar extensões famosas é uma das exigências mais comuns das bancas.\n"
    },
    {
        "pergunta": "Ao copiar um arquivo de uma pasta para outra localizada na mesma unidade de armazenamento, o resultado da operação será:",
        "alternativas": [
            "A remoção automática do arquivo original.",
            "A criação de uma nova referência ao arquivo sem consumo adicional de espaço.",
            "A transformação automática do arquivo em atalho.",
            "A substituição obrigatória do arquivo original.",
            "A existência simultânea do arquivo original e da cópia."
        ],
        "correta": 4,
        "feedbackAcerto": "\nA operação de cópia mantém o arquivo original e cria uma nova cópia no local de destino.\n",
        "feedbackErro": "A resposta correta é:\n\nA existência simultânea do arquivo original e da cópia.\n\nComentário:\nA operação de cópia mantém o arquivo original e cria uma nova cópia no local de destino.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA banca costuma misturar os conceitos de copiar e mover.\n"
    },
    {
        "pergunta": "No Windows, um usuário selecionou um arquivo e pressionou Shift + Delete. Nessa situação, é correto afirmar que:",
        "alternativas": [
            "O arquivo será enviado para a Lixeira.",
            "O arquivo será compactado antes da exclusão.",
            "O arquivo será ocultado.",
            "O arquivo será convertido em backup.",
            "O arquivo será excluído sem passar pela Lixeira."
        ],
        "correta": 4,
        "feedbackAcerto": "\nA combinação Shift + Delete realiza a exclusão direta do arquivo, sem enviá-lo para a Lixeira.\n",
        "feedbackErro": "A resposta correta é:\n\nO arquivo será excluído sem passar pela Lixeira.\n\nComentário:\nA combinação Shift + Delete realiza a exclusão direta do arquivo, sem enviá-lo para a Lixeira.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nUma das pegadinhas mais frequentes em concursos de informática.\n"
    },
    {
        "pergunta": "Sobre as propriedades de um arquivo em sistemas operacionais, assinale a alternativa correta.",
        "alternativas": [
            "Todo arquivo possui obrigatoriamente o atributo oculto.",
            "As propriedades exibem apenas a extensão do arquivo.",
            "As propriedades não podem ser alteradas pelo usuário.",
            "As propriedades são exclusivas de arquivos executáveis.",
            "As propriedades permitem consultar informações como tamanho, localização e datas relacionadas ao arquivo."
        ],
        "correta": 4,
        "feedbackAcerto": "\nAs propriedades de um arquivo fornecem diversas informações relevantes, como tamanho, tipo, localização e datas.\n",
        "feedbackErro": "A resposta correta é:\n\nAs propriedades permitem consultar informações como tamanho, localização e datas relacionadas ao arquivo.\n\nComentário:\nAs propriedades de um arquivo fornecem diversas informações relevantes, como tamanho, tipo, localização e datas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre propriedades costumam explorar tamanho, localização e atributos.\n"
    },
    {
        "pergunta": "Um arquivo com extensão .exe normalmente está associado a:",
        "alternativas": [
            "Documento de texto simples.",
            "Arquivo de imagem.",
            "Programa executável.",
            "Planilha eletrônica.",
            "Arquivo compactado."
        ],
        "correta": 2,
        "feedbackAcerto": "\nA extensão .exe identifica programas executáveis no ambiente Windows.\n",
        "feedbackErro": "A resposta correta é:\n\nPrograma executável.\n\nComentário:\nA extensão .exe identifica programas executáveis no ambiente Windows.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nExtensões de arquivos aparecem com enorme frequência em provas.\n"
    },
    {
        "pergunta": "A alteração manual da extensão de um arquivo, sem conversão adequada, produz necessariamente qual efeito?",
        "alternativas": [
            "Transforma automaticamente o conteúdo para o novo formato.",
            "Altera apenas o nome do arquivo, não seu conteúdo interno.",
            "Garante compatibilidade com qualquer programa.",
            "Reduz o tamanho do arquivo.",
            "Impede permanentemente sua abertura."
        ],
        "correta": 1,
        "feedbackAcerto": "\nMudar apenas a extensão não converte o conteúdo do arquivo.\n",
        "feedbackErro": "A resposta correta é:\n\nAltera apenas o nome do arquivo, não seu conteúdo interno.\n\nComentário:\nMudar apenas a extensão não converte o conteúdo do arquivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nMuitas bancas exploram a falsa ideia de que trocar a extensão converte arquivos.\n"
    },
    {
        "pergunta": "Assinale a alternativa que apresenta apenas extensões normalmente associadas a arquivos de imagem.",
        "alternativas": [
            ".docx, .jpg e .xlsx",
            ".pptx, .png e .gif",
            ".jpg, .png e .gif",
            ".pdf, .jpg e .bmp",
            ".exe, .jpg e .png"
        ],
        "correta": 2,
        "feedbackAcerto": "\nJPG, PNG e GIF são extensões tradicionalmente associadas a imagens digitais.\n",
        "feedbackErro": "A resposta correta é:\n\n.jpg, .png e .gif\n\nComentário:\nJPG, PNG e GIF são extensões tradicionalmente associadas a imagens digitais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nMemorize os principais grupos de extensões: documentos, imagens, áudio, vídeo e executáveis.\n"
    },
    {
        "pergunta": "Em relação ao tamanho de arquivos digitais, é correto afirmar que:",
        "alternativas": [
            "Arquivos com a mesma extensão possuem sempre o mesmo tamanho.",
            "O tamanho depende exclusivamente do nome atribuído ao arquivo.",
            "A extensão determina diretamente o tamanho do arquivo.",
            "Arquivos de mesmo tipo podem apresentar tamanhos diferentes.",
            "Arquivos PDF possuem tamanho fixo."
        ],
        "correta": 3,
        "feedbackAcerto": "\nO tamanho depende da quantidade de dados armazenados e não apenas do tipo de arquivo.\n",
        "feedbackErro": "A resposta correta é:\n\nArquivos de mesmo tipo podem apresentar tamanhos diferentes.\n\nComentário:\nO tamanho depende da quantidade de dados armazenados e não apenas do tipo de arquivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA banca costuma tentar associar tamanho à extensão. Isso está errado.\n"
    },
    {
        "pergunta": "Em um ambiente corporativo, a principal finalidade da organização de arquivos em pastas é:",
        "alternativas": [
            "Aumentar automaticamente a velocidade do processador.",
            "Reduzir o consumo de energia do computador.",
            "Facilitar o armazenamento, localização e gerenciamento das informações.",
            "Eliminar a necessidade de backups.",
            "Impedir a criação de novos arquivos."
        ],
        "correta": 2,
        "feedbackAcerto": "\nA organização em pastas facilita a administração, localização e controle dos arquivos.\n",
        "feedbackErro": "A resposta correta é:\n\nFacilitar o armazenamento, localização e gerenciamento das informações.\n\nComentário:\nA organização em pastas facilita a administração, localização e controle dos arquivos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuando a questão mencionar organização lógica, geralmente a resposta estará relacionada às pastas e diretórios.\n"
    },
    {
        "pergunta": "Em sistemas operacionais modernos, uma pasta pode ser corretamente definida como:",
        "alternativas": [
            "Um arquivo utilizado exclusivamente para armazenar imagens.",
            "Uma unidade física de armazenamento removível.",
            "Um programa responsável pela execução de aplicativos.",
            "Uma cópia de segurança criada automaticamente pelo sistema.",
            "Uma estrutura lógica destinada à organização de arquivos e outras pastas."
        ],
        "correta": 4,
        "feedbackAcerto": "\nPastas são estruturas lógicas utilizadas para organizar arquivos e subpastas, facilitando a administração dos dados.\n",
        "feedbackErro": "A resposta correta é:\n\nUma estrutura lógica destinada à organização de arquivos e outras pastas.\n\nComentário:\nPastas são estruturas lógicas utilizadas para organizar arquivos e subpastas, facilitando a administração dos dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nBancas costumam diferenciar conceitos físicos (HD, SSD) de conceitos lógicos (arquivo e pasta).\n"
    },
    {
        "pergunta": "Em uma estrutura hierárquica de diretórios, uma subpasta é:",
        "alternativas": [
            "Uma pasta localizada dentro de outra pasta.",
            "Uma pasta protegida por senha.",
            "Um arquivo oculto.",
            "Uma unidade lógica criada automaticamente pelo sistema.",
            "Um backup armazenado em nuvem."
        ],
        "correta": 0,
        "feedbackAcerto": "\nSubpasta é qualquer pasta contida dentro de outra pasta.\n",
        "feedbackErro": "A resposta correta é:\n\nUma pasta localizada dentro de outra pasta.\n\nComentário:\nSubpasta é qualquer pasta contida dentro de outra pasta.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nHierarquia de diretórios é assunto recorrente em provas de informática.\n"
    },
    {
        "pergunta": "No contexto de sistemas de arquivos, o diretório raiz corresponde:",
        "alternativas": [
            "À última pasta criada pelo usuário.",
            "Ao nível mais alto da estrutura hierárquica de diretórios.",
            "À pasta utilizada exclusivamente para armazenar backups.",
            "Ao local onde ficam armazenados os arquivos temporários.",
            "À lixeira do sistema operacional."
        ],
        "correta": 1,
        "feedbackAcerto": "\nO diretório raiz representa o ponto inicial da estrutura hierárquica de diretórios.\n",
        "feedbackErro": "A resposta correta é:\n\nAo nível mais alto da estrutura hierárquica de diretórios.\n\nComentário:\nO diretório raiz representa o ponto inicial da estrutura hierárquica de diretórios.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nEm Windows costuma aparecer associado a C:.\n"
    },
    {
        "pergunta": "Considere o caminho C:\\Usuarios\\Joao\\Documentos\\Relatorio.docx. Nesse caso, Relatorio.docx corresponde a:",
        "alternativas": [
            "Um arquivo.",
            "Uma pasta.",
            "Uma unidade de armazenamento.",
            "Um diretório raiz.",
            "Um atalho."
        ],
        "correta": 0,
        "feedbackAcerto": "\nO elemento final do caminho apresentado é um arquivo identificado pela extensão .docx.\n",
        "feedbackErro": "A resposta correta é:\n\nUm arquivo.\n\nComentário:\nO elemento final do caminho apresentado é um arquivo identificado pela extensão .docx.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nObserve sempre o último elemento do caminho e sua extensão.\n"
    },
    {
        "pergunta": "Ao mover um arquivo de uma pasta para outra na mesma unidade utilizando o comando Recortar e Colar, ocorre:",
        "alternativas": [
            "A transferência do arquivo para o novo local sem manutenção da cópia original.",
            "A criação de duas cópias do arquivo.",
            "A exclusão definitiva do arquivo.",
            "A criação automática de um backup.",
            "A conversão do arquivo em atalho."
        ],
        "correta": 0,
        "feedbackAcerto": "\nMover significa transferir o arquivo de um local para outro, removendo-o da origem.\n",
        "feedbackErro": "A resposta correta é:\n\nA transferência do arquivo para o novo local sem manutenção da cópia original.\n\nComentário:\nMover significa transferir o arquivo de um local para outro, removendo-o da origem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nCopiar gera duas versões. Mover mantém apenas uma.\n"
    },
    {
        "pergunta": "Um caminho absoluto é aquele que:",
        "alternativas": [
            "Começa sempre pelo diretório raiz ou unidade de armazenamento.",
            "Indica apenas o nome do arquivo.",
            "Pode ser utilizado apenas em servidores.",
            "Não contém nomes de pastas.",
            "É utilizado exclusivamente em sistemas Linux."
        ],
        "correta": 0,
        "feedbackAcerto": "\nO caminho absoluto descreve toda a localização do arquivo desde a raiz da estrutura.\n",
        "feedbackErro": "A resposta correta é:\n\nComeça sempre pelo diretório raiz ou unidade de armazenamento.\n\nComentário:\nO caminho absoluto descreve toda a localização do arquivo desde a raiz da estrutura.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA diferença entre caminho absoluto e relativo aparece frequentemente em concursos.\n"
    },
    {
        "pergunta": "Um atalho criado na Área de Trabalho para um arquivo possui como característica principal:",
        "alternativas": [
            "Permitir acesso rápido ao arquivo sem alterar sua localização original.",
            "Substituir permanentemente o arquivo original.",
            "Conter obrigatoriamente uma cópia completa do arquivo.",
            "Transformar o arquivo em executável.",
            "Impedir a exclusão do arquivo original."
        ],
        "correta": 0,
        "feedbackAcerto": "\nO atalho apenas referencia o arquivo original, permitindo acesso mais rápido.\n",
        "feedbackErro": "A resposta correta é:\n\nPermitir acesso rápido ao arquivo sem alterar sua localização original.\n\nComentário:\nO atalho apenas referencia o arquivo original, permitindo acesso mais rápido.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nExcluir um atalho não exclui o arquivo original.\n"
    },
    {
        "pergunta": "Assinale a alternativa que representa corretamente uma unidade de medida de armazenamento superior ao megabyte (MB).",
        "alternativas": [
            "Kilobyte (KB)",
            "Gigabyte (GB)",
            "Byte (B)",
            "Bit (b)",
            "Nibble"
        ],
        "correta": 1,
        "feedbackAcerto": "\nGigabyte possui capacidade superior ao Megabyte.\n",
        "feedbackErro": "A resposta correta é:\n\nGigabyte (GB)\n\nComentário:\nGigabyte possui capacidade superior ao Megabyte.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nDecore a ordem crescente das unidades de armazenamento.\n"
    },
    {
        "pergunta": "Sobre o atributo 'Somente Leitura' aplicado a um arquivo, assinale a alternativa correta.",
        "alternativas": [
            "Impede que o arquivo seja visualizado.",
            "Oculta automaticamente o arquivo.",
            "Compacta o arquivo automaticamente.",
            "Transforma o arquivo em backup.",
            "Impede alterações no conteúdo do arquivo sem remoção do atributo."
        ],
        "correta": 4,
        "feedbackAcerto": "\nO atributo Somente Leitura dificulta alterações no conteúdo do arquivo.\n",
        "feedbackErro": "A resposta correta é:\n\nImpede alterações no conteúdo do arquivo sem remoção do atributo.\n\nComentário:\nO atributo Somente Leitura dificulta alterações no conteúdo do arquivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda os atributos Somente Leitura, Oculto e Sistema.\n"
    },
    {
        "pergunta": "Em relação aos atalhos do Windows, assinale a afirmativa correta.",
        "alternativas": [
            "Todo atalho possui obrigatoriamente a extensão .exe.",
            "A exclusão do arquivo original torna o atalho inválido.",
            "Atalhos não podem ser criados para pastas.",
            "Atalhos ocupam exatamente o mesmo espaço do arquivo original.",
            "Atalhos são cópias integrais dos arquivos."
        ],
        "correta": 1,
        "feedbackAcerto": "\nSe o arquivo original for removido ou movido inadequadamente, o atalho poderá deixar de funcionar.\n",
        "feedbackErro": "A resposta correta é:\n\nA exclusão do arquivo original torna o atalho inválido.\n\nComentário:\nSe o arquivo original for removido ou movido inadequadamente, o atalho poderá deixar de funcionar.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre atalhos normalmente exploram a diferença entre referência e cópia.\n"
    },
    {
        "pergunta": "Ao excluir um arquivo utilizando apenas a tecla Delete no Windows, o comportamento padrão será:",
        "alternativas": [
            "O envio do arquivo para a Lixeira.",
            "A exclusão definitiva do arquivo.",
            "A compactação automática do arquivo.",
            "A conversão do arquivo em backup.",
            "O envio do arquivo para armazenamento em nuvem."
        ],
        "correta": 0,
        "feedbackAcerto": "\nPor padrão, arquivos excluídos com a tecla Delete são enviados para a Lixeira, permitindo recuperação posterior.\n",
        "feedbackErro": "A resposta correta é:\n\nO envio do arquivo para a Lixeira.\n\nComentário:\nPor padrão, arquivos excluídos com a tecla Delete são enviados para a Lixeira, permitindo recuperação posterior.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA banca frequentemente cobra a diferença entre Delete e Shift + Delete.\n"
    },
    {
        "pergunta": "A principal finalidade da Lixeira do Windows é:",
        "alternativas": [
            "Servir como local de recuperação para arquivos excluídos.",
            "Armazenar arquivos temporários do sistema.",
            "Executar arquivos removidos.",
            "Compactar automaticamente documentos.",
            "Criar cópias de segurança."
        ],
        "correta": 0,
        "feedbackAcerto": "\nA Lixeira permite recuperar arquivos excluídos antes da remoção definitiva.\n",
        "feedbackErro": "A resposta correta é:\n\nServir como local de recuperação para arquivos excluídos.\n\nComentário:\nA Lixeira permite recuperar arquivos excluídos antes da remoção definitiva.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nLixeira não é backup.\n"
    },
    {
        "pergunta": "Ao restaurar um arquivo da Lixeira, ele será normalmente enviado para:",
        "alternativas": [
            "A pasta Downloads.",
            "A Área de Trabalho.",
            "Sua localização original.",
            "A pasta Documentos.",
            "A unidade C:."
        ],
        "correta": 2,
        "feedbackAcerto": "\nA restauração devolve o arquivo para o local de onde ele foi excluído.\n",
        "feedbackErro": "A resposta correta é:\n\nSua localização original.\n\nComentário:\nA restauração devolve o arquivo para o local de onde ele foi excluído.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nRestaurar não significa escolher um novo local.\n"
    },
    {
        "pergunta": "Assinale a alternativa correta sobre arquivos compactados.",
        "alternativas": [
            "Possuem necessariamente extensão .exe.",
            "Podem armazenar apenas um único arquivo.",
            "Não podem ser enviados por e-mail.",
            "Servem para reduzir espaço ocupado e facilitar transporte de dados.",
            "Existem apenas em sistemas Windows."
        ],
        "correta": 3,
        "feedbackAcerto": "\nA compactação reduz o tamanho dos dados e facilita armazenamento e compartilhamento.\n",
        "feedbackErro": "A resposta correta é:\n\nServem para reduzir espaço ocupado e facilitar transporte de dados.\n\nComentário:\nA compactação reduz o tamanho dos dados e facilita armazenamento e compartilhamento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nZIP e RAR são os formatos mais cobrados.\n"
    },
    {
        "pergunta": "Qual das extensões abaixo está normalmente associada a arquivos compactados?",
        "alternativas": [
            ".xlsx",
            ".pptx",
            ".pdf",
            ".zip",
            ".jpg"
        ],
        "correta": 3,
        "feedbackAcerto": "\nA extensão .zip é amplamente utilizada para compactação de arquivos.\n",
        "feedbackErro": "A resposta correta é:\n\n.zip\n\nComentário:\nA extensão .zip é amplamente utilizada para compactação de arquivos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nTambém memorize a extensão .rar.\n"
    },
    {
        "pergunta": "Em relação aos arquivos ZIP, assinale a alternativa correta.",
        "alternativas": [
            "Podem armazenar apenas textos.",
            "São exclusivos do Windows.",
            "Não podem ser descompactados.",
            "Podem conter múltiplos arquivos e pastas.",
            "Transformam arquivos em executáveis."
        ],
        "correta": 3,
        "feedbackAcerto": "\nUm arquivo ZIP pode armazenar vários arquivos e diretórios em um único pacote compactado.\n",
        "feedbackErro": "A resposta correta é:\n\nPodem conter múltiplos arquivos e pastas.\n\nComentário:\nUm arquivo ZIP pode armazenar vários arquivos e diretórios em um único pacote compactado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nZIP é um contêiner de arquivos.\n"
    },
    {
        "pergunta": "Sobre SSD e HD, assinale a afirmativa correta.",
        "alternativas": [
            "SSD tende a apresentar maior velocidade de acesso aos dados.",
            "SSD possui partes mecânicas móveis.",
            "HD utiliza memória flash sem partes móveis.",
            "HD e SSD possuem exatamente a mesma tecnologia.",
            "SSD não pode armazenar arquivos."
        ],
        "correta": 0,
        "feedbackAcerto": "\nSSDs normalmente oferecem acesso mais rápido aos dados que os HDs tradicionais.\n",
        "feedbackErro": "A resposta correta é:\n\nSSD tende a apresentar maior velocidade de acesso aos dados.\n\nComentário:\nSSDs normalmente oferecem acesso mais rápido aos dados que os HDs tradicionais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nVelocidade e ausência de partes móveis são características clássicas dos SSDs.\n"
    },
    {
        "pergunta": "Qual dos dispositivos abaixo é considerado armazenamento removível?",
        "alternativas": [
            "Memória RAM.",
            "Processador.",
            "Placa-mãe.",
            "Cache.",
            "Pendrive."
        ],
        "correta": 4,
        "feedbackAcerto": "\nO pendrive é um dispositivo portátil de armazenamento removível.\n",
        "feedbackErro": "A resposta correta é:\n\nPendrive.\n\nComentário:\nO pendrive é um dispositivo portátil de armazenamento removível.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nPendrive, cartão SD e HD externo aparecem frequentemente em provas.\n"
    },
    {
        "pergunta": "O armazenamento em nuvem caracteriza-se principalmente por:",
        "alternativas": [
            "Armazenar dados exclusivamente em computadores pessoais.",
            "Dispensar conexão com a internet.",
            "Substituir totalmente os backups.",
            "Funcionar apenas em smartphones.",
            "Utilizar servidores acessíveis pela internet para guardar informações."
        ],
        "correta": 4,
        "feedbackAcerto": "\nA nuvem utiliza servidores remotos acessados pela internet.\n",
        "feedbackErro": "A resposta correta é:\n\nUtilizar servidores acessíveis pela internet para guardar informações.\n\nComentário:\nA nuvem utiliza servidores remotos acessados pela internet.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nGoogle Drive, OneDrive e Dropbox são exemplos clássicos.\n"
    },
    {
        "pergunta": "Assinale a alternativa que apresenta apenas exemplos de serviços de armazenamento em nuvem.",
        "alternativas": [
            "Windows, Linux e Android.",
            "Word, Excel e PowerPoint.",
            "Chrome, Firefox e Edge.",
            "Google Drive, OneDrive e Dropbox.",
            "ZIP, RAR e PDF."
        ],
        "correta": 3,
        "feedbackAcerto": "\nGoogle Drive, OneDrive e Dropbox são serviços amplamente utilizados para armazenamento em nuvem.\n",
        "feedbackErro": "A resposta correta é:\n\nGoogle Drive, OneDrive e Dropbox.\n\nComentário:\nGoogle Drive, OneDrive e Dropbox são serviços amplamente utilizados para armazenamento em nuvem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nAs bancas adoram misturar navegadores, sistemas operacionais e serviços de nuvem.\n"
    },
    {
        "pergunta": "Em sistemas operacionais, um arquivo marcado com o atributo 'Oculto' possui qual característica?",
        "alternativas": [
            "É automaticamente excluído após 30 dias.",
            "Não pode ser copiado para outra pasta.",
            "Torna-se um arquivo compactado.",
            "Só pode ser acessado por administradores.",
            "Não é exibido normalmente nas configurações padrão do explorador de arquivos."
        ],
        "correta": 4,
        "feedbackAcerto": "\nArquivos ocultos não são exibidos normalmente pelo Explorador de Arquivos, mas podem ser visualizados mediante configuração adequada.\n",
        "feedbackErro": "A resposta correta é:\n\nNão é exibido normalmente nas configurações padrão do explorador de arquivos.\n\nComentário:\nArquivos ocultos não são exibidos normalmente pelo Explorador de Arquivos, mas podem ser visualizados mediante configuração adequada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda arquivo oculto com arquivo protegido ou criptografado.\n"
    },
    {
        "pergunta": "Qual sequência apresenta corretamente as unidades de armazenamento em ordem crescente?",
        "alternativas": [
            "MB → KB → GB → TB",
            "KB → GB → MB → TB",
            "MB → GB → TB → KB",
            "KB → MB → GB → TB",
            "GB → MB → KB → TB"
        ],
        "correta": 3,
        "feedbackAcerto": "\nA sequência correta é KB (Kilobyte), MB (Megabyte), GB (Gigabyte) e TB (Terabyte).\n",
        "feedbackErro": "A resposta correta é:\n\nKB → MB → GB → TB\n\nComentário:\nA sequência correta é KB (Kilobyte), MB (Megabyte), GB (Gigabyte) e TB (Terabyte).\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nDecore também: Byte → KB → MB → GB → TB → PB.\n"
    },
    {
        "pergunta": "Considerando as unidades de armazenamento, assinale a afirmativa correta.",
        "alternativas": [
            "1 TB corresponde a uma capacidade superior a 1 GB.",
            "1 GB é menor que 1 MB.",
            "1 KB é maior que 1 GB.",
            "MB é superior a TB.",
            "Todas as unidades possuem a mesma capacidade."
        ],
        "correta": 0,
        "feedbackAcerto": "\nO Terabyte possui capacidade superior ao Gigabyte.\n",
        "feedbackErro": "A resposta correta é:\n\n1 TB corresponde a uma capacidade superior a 1 GB.\n\nComentário:\nO Terabyte possui capacidade superior ao Gigabyte.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA banca costuma inverter propositalmente as unidades.\n"
    },
    {
        "pergunta": "Em um caminho relativo, a localização de um arquivo é definida:",
        "alternativas": [
            "A partir da unidade raiz.",
            "A partir do diretório atual.",
            "A partir da internet.",
            "A partir da Lixeira.",
            "Exclusivamente a partir da Área de Trabalho."
        ],
        "correta": 1,
        "feedbackAcerto": "\nCaminhos relativos dependem da localização atual do usuário dentro da estrutura de diretórios.\n",
        "feedbackErro": "A resposta correta é:\n\nA partir do diretório atual.\n\nComentário:\nCaminhos relativos dependem da localização atual do usuário dentro da estrutura de diretórios.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA diferença entre caminho absoluto e relativo é tema clássico de concurso.\n"
    },
    {
        "pergunta": "Ao compartilhar uma pasta em rede, o administrador normalmente pode definir:",
        "alternativas": [
            "A velocidade do processador dos computadores conectados.",
            "A capacidade física do disco rígido.",
            "O tipo de memória RAM instalada.",
            "A frequência elétrica utilizada pela rede.",
            "Permissões de acesso para outros usuários."
        ],
        "correta": 4,
        "feedbackAcerto": "\nO compartilhamento geralmente envolve a definição de permissões de leitura, gravação ou controle total.\n",
        "feedbackErro": "A resposta correta é:\n\nPermissões de acesso para outros usuários.\n\nComentário:\nO compartilhamento geralmente envolve a definição de permissões de leitura, gravação ou controle total.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nPermissões costumam aparecer associadas a leitura, gravação e modificação.\n"
    },
    {
        "pergunta": "Sobre arquivos compactados, assinale a alternativa correta.",
        "alternativas": [
            "Todo arquivo compactado obrigatoriamente reduz seu tamanho pela metade.",
            "A compactação pode reduzir o tamanho de determinados arquivos, dependendo de seu conteúdo.",
            "Arquivos compactados não podem conter pastas.",
            "A compactação altera permanentemente o conteúdo do arquivo.",
            "Arquivos ZIP não podem ser descompactados."
        ],
        "correta": 1,
        "feedbackAcerto": "\nO nível de compactação depende do tipo de dado armazenado.\n",
        "feedbackErro": "A resposta correta é:\n\nA compactação pode reduzir o tamanho de determinados arquivos, dependendo de seu conteúdo.\n\nComentário:\nO nível de compactação depende do tipo de dado armazenado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nArquivos já compactados costumam apresentar pouca redução adicional.\n"
    },
    {
        "pergunta": "Qual dispositivo abaixo normalmente oferece maior capacidade de armazenamento?",
        "alternativas": [
            "Pendrive de 32 GB.",
            "Cartão SD de 64 GB.",
            "SSD de 1 TB.",
            "DVD de 4,7 GB.",
            "CD de 700 MB."
        ],
        "correta": 2,
        "feedbackAcerto": "\nEntre as opções apresentadas, o SSD de 1 TB possui a maior capacidade.\n",
        "feedbackErro": "A resposta correta é:\n\nSSD de 1 TB.\n\nComentário:\nEntre as opções apresentadas, o SSD de 1 TB possui a maior capacidade.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões desse tipo exigem atenção às unidades de medida.\n"
    },
    {
        "pergunta": "Quando um arquivo é renomeado, ocorre necessariamente:",
        "alternativas": [
            "A alteração do seu conteúdo.",
            "A alteração de seu tamanho.",
            "A alteração apenas de sua identificação nominal.",
            "A exclusão da versão anterior.",
            "A mudança automática de extensão."
        ],
        "correta": 2,
        "feedbackAcerto": "\nRenomear modifica apenas o nome do arquivo, não seu conteúdo.\n",
        "feedbackErro": "A resposta correta é:\n\nA alteração apenas de sua identificação nominal.\n\nComentário:\nRenomear modifica apenas o nome do arquivo, não seu conteúdo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nTrocar nome não significa converter nem modificar o arquivo.\n"
    },
    {
        "pergunta": "Sobre o armazenamento em nuvem, assinale a alternativa incorreta.",
        "alternativas": [
            "Permite acesso aos arquivos a partir de diferentes dispositivos.",
            "Pode ser utilizado para sincronização de arquivos.",
            "Dispensa totalmente qualquer preocupação com segurança.",
            "Facilita compartilhamento de documentos.",
            "Pode exigir conexão com a internet para acesso remoto."
        ],
        "correta": 2,
        "feedbackAcerto": "\nMesmo em serviços de nuvem, continuam existindo preocupações relacionadas à segurança dos dados.\n",
        "feedbackErro": "A resposta correta é:\n\nDispensa totalmente qualquer preocupação com segurança.\n\nComentário:\nMesmo em serviços de nuvem, continuam existindo preocupações relacionadas à segurança dos dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões com palavras como \"sempre\", \"nunca\" e \"totalmente\" costumam esconder pegadinhas.\n"
    },
    {
        "pergunta": "Assinale a alternativa que apresenta apenas dispositivos destinados ao armazenamento de dados.",
        "alternativas": [
            "Processador, SSD e HD.",
            "SSD, HD e Pendrive.",
            "Memória RAM, Processador e SSD.",
            "Placa-mãe, HD e Monitor.",
            "Monitor, Teclado e SSD."
        ],
        "correta": 1,
        "feedbackAcerto": "\nSSD, HD e Pendrive são dispositivos utilizados para armazenamento de dados.\n",
        "feedbackErro": "A resposta correta é:\n\nSSD, HD e Pendrive.\n\nComentário:\nSSD, HD e Pendrive são dispositivos utilizados para armazenamento de dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA banca adora misturar hardware de armazenamento com hardware de processamento.\n"
    },
    {
        "pergunta": "Em uma política de proteção de dados, o backup completo caracteriza-se por:",
        "alternativas": [
            "Copiar apenas os arquivos modificados desde o último backup.",
            "Copiar todos os dados selecionados em cada execução.",
            "Copiar apenas arquivos excluídos.",
            "Copiar apenas arquivos do sistema operacional.",
            "Copiar exclusivamente arquivos compactados."
        ],
        "correta": 1,
        "feedbackAcerto": "\nO backup completo realiza uma cópia integral de todos os dados selecionados, independentemente de alterações anteriores.\n",
        "feedbackErro": "A resposta correta é:\n\nCopiar todos os dados selecionados em cada execução.\n\nComentário:\nO backup completo realiza uma cópia integral de todos os dados selecionados, independentemente de alterações anteriores.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nBackup completo = todos os dados.\n"
    },
    {
        "pergunta": "O backup incremental tem como principal característica:",
        "alternativas": [
            "Copiar todos os arquivos existentes.",
            "Copiar somente arquivos excluídos.",
            "Copiar apenas os arquivos alterados desde o último backup realizado.",
            "Copiar apenas arquivos compactados.",
            "Copiar exclusivamente arquivos do usuário."
        ],
        "correta": 2,
        "feedbackAcerto": "\nO backup incremental copia apenas os arquivos modificados desde o último backup, seja ele completo ou incremental.\n",
        "feedbackErro": "A resposta correta é:\n\nCopiar apenas os arquivos alterados desde o último backup realizado.\n\nComentário:\nO backup incremental copia apenas os arquivos modificados desde o último backup, seja ele completo ou incremental.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nIncremental = desde o último backup.\n"
    },
    {
        "pergunta": "O backup diferencial copia:",
        "alternativas": [
            "Todos os arquivos do sistema.",
            "Os arquivos alterados desde o último backup incremental.",
            "Somente arquivos ocultos.",
            "Os arquivos alterados desde o último backup completo.",
            "Apenas arquivos compactados."
        ],
        "correta": 3,
        "feedbackAcerto": "\nO diferencial considera sempre como referência o último backup completo.\n",
        "feedbackErro": "A resposta correta é:\n\nOs arquivos alterados desde o último backup completo.\n\nComentário:\nO diferencial considera sempre como referência o último backup completo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nDiferencial = desde o último backup completo.\n"
    },
    {
        "pergunta": "Assinale a alternativa que apresenta corretamente uma vantagem do backup incremental.",
        "alternativas": [
            "Execução normalmente mais rápida e com menor volume de dados copiados.",
            "Maior consumo de espaço em disco.",
            "Dispensa qualquer backup completo.",
            "Possui recuperação mais simples que qualquer outro método.",
            "Não depende de backups anteriores."
        ],
        "correta": 0,
        "feedbackAcerto": "\nComo apenas as alterações são copiadas, o backup incremental tende a ser mais rápido e econômico.\n",
        "feedbackErro": "A resposta correta é:\n\nExecução normalmente mais rápida e com menor volume de dados copiados.\n\nComentário:\nComo apenas as alterações são copiadas, o backup incremental tende a ser mais rápido e econômico.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nIncremental economiza tempo e armazenamento.\n"
    },
    {
        "pergunta": "Uma desvantagem típica do backup incremental durante a restauração é:",
        "alternativas": [
            "Necessidade de recuperar apenas um único arquivo.",
            "Impossibilidade de restaurar arquivos.",
            "Ausência de economia de espaço.",
            "Necessidade de utilizar o backup completo e todos os incrementais subsequentes.",
            "Incompatibilidade com sistemas modernos."
        ],
        "correta": 3,
        "feedbackAcerto": "\nA restauração exige o backup completo e todos os incrementais posteriores.\n",
        "feedbackErro": "A resposta correta é:\n\nNecessidade de utilizar o backup completo e todos os incrementais subsequentes.\n\nComentário:\nA restauração exige o backup completo e todos os incrementais posteriores.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nIncremental = backup pequeno, restauração mais complexa.\n"
    },
    {
        "pergunta": "Uma organização executou um backup completo no domingo e backups diferenciais de segunda a sexta. Na sexta-feira, o backup diferencial conterá:",
        "alternativas": [
            "Somente as alterações realizadas na sexta-feira.",
            "As alterações realizadas desde quinta-feira.",
            "As alterações realizadas desde o último backup completo.",
            "Apenas os arquivos novos.",
            "Todos os backups anteriores compactados."
        ],
        "correta": 2,
        "feedbackAcerto": "\nO backup diferencial acumula todas as alterações desde o último backup completo.\n",
        "feedbackErro": "A resposta correta é:\n\nAs alterações realizadas desde o último backup completo.\n\nComentário:\nO backup diferencial acumula todas as alterações desde o último backup completo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nDiferencial cresce a cada dia até o próximo backup completo.\n"
    },
    {
        "pergunta": "Assinale a alternativa correta sobre a restauração de backups.",
        "alternativas": [
            "A restauração serve apenas para arquivos excluídos.",
            "A restauração elimina automaticamente os backups existentes.",
            "A restauração permite recuperar dados previamente armazenados em backup.",
            "A restauração só pode ser realizada por administradores de rede.",
            "A restauração transforma arquivos em cópias compactadas."
        ],
        "correta": 2,
        "feedbackAcerto": "\nA restauração é o processo de recuperação dos dados armazenados em backup.\n",
        "feedbackErro": "A resposta correta é:\n\nA restauração permite recuperar dados previamente armazenados em backup.\n\nComentário:\nA restauração é o processo de recuperação dos dados armazenados em backup.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nBackup sem restauração não possui utilidade prática.\n"
    },
    {
        "pergunta": "Uma estratégia recomendada para proteção de dados consiste em:",
        "alternativas": [
            "Manter apenas uma cópia dos dados no computador principal.",
            "Armazenar todas as cópias no mesmo disco físico.",
            "Realizar backup apenas após falhas do sistema.",
            "Manter múltiplas cópias dos dados em locais distintos.",
            "Evitar armazenamento externo."
        ],
        "correta": 3,
        "feedbackAcerto": "\nBoas práticas recomendam múltiplas cópias armazenadas em locais diferentes.\n",
        "feedbackErro": "A resposta correta é:\n\nManter múltiplas cópias dos dados em locais distintos.\n\nComentário:\nBoas práticas recomendam múltiplas cópias armazenadas em locais diferentes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA regra 3-2-1 aparece frequentemente em provas de informática.\n"
    },
    {
        "pergunta": "A chamada regra 3-2-1 de backup recomenda, entre outros aspectos:",
        "alternativas": [
            "Três antivírus instalados simultaneamente.",
            "Três usuários responsáveis pelo backup.",
            "Dois backups completos por dia e um diferencial.",
            "Três cópias dos dados, em dois tipos de mídia, sendo uma fora do local principal.",
            "Uma única cópia armazenada em nuvem."
        ],
        "correta": 3,
        "feedbackAcerto": "\nA regra 3-2-1 é uma das práticas mais conhecidas para proteção de dados.\n",
        "feedbackErro": "A resposta correta é:\n\nTrês cópias dos dados, em dois tipos de mídia, sendo uma fora do local principal.\n\nComentário:\nA regra 3-2-1 é uma das práticas mais conhecidas para proteção de dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\n3 cópias, 2 mídias diferentes, 1 cópia externa.\n"
    },
    {
        "pergunta": "A principal finalidade de um sistema de backup é:",
        "alternativas": [
            "Aumentar a velocidade de processamento.",
            "Permitir a recuperação de dados em caso de perda, corrupção ou exclusão.",
            "Reduzir o consumo de energia elétrica.",
            "Substituir completamente os dispositivos de armazenamento.",
            "Eliminar a necessidade de segurança da informação."
        ],
        "correta": 1,
        "feedbackAcerto": "\nO objetivo fundamental do backup é possibilitar a recuperação dos dados quando ocorrer algum incidente.\n",
        "feedbackErro": "A resposta correta é:\n\nPermitir a recuperação de dados em caso de perda, corrupção ou exclusão.\n\nComentário:\nO objetivo fundamental do backup é possibilitar a recuperação dos dados quando ocorrer algum incidente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuando aparecer \"recuperação de dados\", pense imediatamente em backup.\n"
    },
    {
        "pergunta": "Em um ambiente Windows com sistema de arquivos NTFS, as permissões aplicadas a uma pasta servem principalmente para:",
        "alternativas": [
            "Definir quem pode acessar, modificar ou executar os arquivos contidos na pasta.",
            "Alterar automaticamente a extensão de todos os arquivos da pasta.",
            "Impedir que o sistema operacional reconheça subpastas compactadas.",
            "Converter documentos em atalhos quando forem movidos de local.",
            "Aumentar a velocidade física do disco rígido onde a pasta está gravada."
        ],
        "correta": 0,
        "feedbackAcerto": "Permissões NTFS controlam ações como leitura, gravação, modificação e execução sobre arquivos e pastas.",
        "feedbackErro": "A resposta correta é:\n\nDefinir quem pode acessar, modificar ou executar os arquivos contidos na pasta.\n\nComentário:\nPermissões NTFS controlam ações como leitura, gravação, modificação e execução sobre arquivos e pastas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Permissão está ligada a controle de acesso, não a conversão, velocidade ou tipo de arquivo."
    },
    {
        "pergunta": "Em uma política de backup, a regra 3-2-1 recomenda manter:",
        "alternativas": [
            "Três usuários administradores, duas senhas e uma cópia na nuvem.",
            "Três cópias dos dados, em dois tipos de mídia, com uma cópia fora do local principal.",
            "Três backups incrementais, dois diferenciais e um completo por dia.",
            "Três pastas protegidas, duas ocultas e uma somente leitura.",
            "Três versões do sistema operacional, duas licenças e uma imagem ISO."
        ],
        "correta": 1,
        "feedbackAcerto": "A regra 3-2-1 é uma prática de resiliência: várias cópias, mídias diferentes e pelo menos uma cópia externa.",
        "feedbackErro": "A resposta correta é:\n\nTrês cópias dos dados, em dois tipos de mídia, com uma cópia fora do local principal.\n\nComentário:\nA regra 3-2-1 é uma prática de resiliência: várias cópias, mídias diferentes e pelo menos uma cópia externa.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca pode misturar backup com senha, licença ou permissões. O núcleo da regra é cópia e localização."
    },
    {
        "pergunta": "Ao usar um caminho relativo como ..\\Relatorios\\maio.xlsx, o elemento '..' indica:",
        "alternativas": [
            "O diretório raiz da unidade atual.",
            "Uma pasta oculta chamada Relatorios.",
            "O diretório imediatamente superior ao diretório atual.",
            "A unidade física onde o arquivo está armazenado.",
            "Uma referência obrigatória à pasta Downloads."
        ],
        "correta": 2,
        "feedbackAcerto": "Em caminhos relativos, '..' representa o nível superior em relação ao diretório atual.",
        "feedbackErro": "A resposta correta é:\n\nO diretório imediatamente superior ao diretório atual.\n\nComentário:\nEm caminhos relativos, '..' representa o nível superior em relação ao diretório atual.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Caminho relativo depende da posição atual; caminho absoluto começa na raiz ou unidade."
    },
    {
        "pergunta": "Em arquivos digitais, um hash criptográfico é útil principalmente para:",
        "alternativas": [
            "Comprimir arquivos de imagem com perda de qualidade.",
            "Transformar qualquer documento em arquivo executável.",
            "Recuperar senhas esquecidas de arquivos compactados.",
            "Verificar se o conteúdo de um arquivo foi alterado.",
            "Aumentar automaticamente a capacidade de armazenamento."
        ],
        "correta": 3,
        "feedbackAcerto": "Um hash funciona como uma impressão digital do arquivo; alterações no conteúdo mudam o valor calculado.",
        "feedbackErro": "A resposta correta é:\n\nVerificar se o conteúdo de um arquivo foi alterado.\n\nComentário:\nUm hash funciona como uma impressão digital do arquivo; alterações no conteúdo mudam o valor calculado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Hash está associado à integridade, não à compactação nem à recuperação de senha."
    },
    {
        "pergunta": "Quando um arquivo é sincronizado por um serviço de nuvem e editado simultaneamente em dois dispositivos sem conciliação adequada, pode ocorrer:",
        "alternativas": [
            "A conversão automática do arquivo para o formato PDF/A.",
            "A remoção definitiva de todos os metadados do arquivo.",
            "A desativação do sistema de arquivos local.",
            "A alteração obrigatória da extensão para .tmp.",
            "A criação de cópias conflitantes ou versões divergentes do mesmo arquivo."
        ],
        "correta": 4,
        "feedbackAcerto": "Serviços de sincronização podem gerar conflitos quando versões diferentes são alteradas antes de serem sincronizadas.",
        "feedbackErro": "A resposta correta é:\n\nA criação de cópias conflitantes ou versões divergentes do mesmo arquivo.\n\nComentário:\nServiços de sincronização podem gerar conflitos quando versões diferentes são alteradas antes de serem sincronizadas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Sincronização não é o mesmo que backup perfeito; conflitos e versões são temas cobrados em prova."
    },
    {
        "pergunta": "A extensão de arquivo e o tipo MIME têm em comum o fato de:",
        "alternativas": [
            "Indicarem ou descreverem o tipo/formato de um conteúdo digital.",
            "Serem sempre definidos pelo fabricante do processador.",
            "Garantirem que o arquivo esteja livre de malware.",
            "Alterarem automaticamente o conteúdo interno do arquivo.",
            "Funcionarem apenas em sistemas Linux."
        ],
        "correta": 0,
        "feedbackAcerto": "Tanto a extensão quanto o tipo MIME ajudam sistemas e aplicações a identificar o tipo de conteúdo.",
        "feedbackErro": "A resposta correta é:\n\nIndicarem ou descreverem o tipo/formato de um conteúdo digital.\n\nComentário:\nTanto a extensão quanto o tipo MIME ajudam sistemas e aplicações a identificar o tipo de conteúdo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Identificação de tipo não significa segurança nem conversão automática."
    },
    {
        "pergunta": "Em sistemas de arquivos, metadados de um arquivo podem incluir:",
        "alternativas": [
            "Apenas o texto digitado dentro do documento.",
            "Tamanho, datas de criação/modificação, proprietário e atributos.",
            "Somente o programa usado para abrir o arquivo.",
            "Somente a senha do usuário que criou o arquivo.",
            "O endereço IP de todos os computadores da rede."
        ],
        "correta": 1,
        "feedbackAcerto": "Metadados descrevem informações sobre o arquivo, como tamanho, datas, dono, permissões e atributos.",
        "feedbackErro": "A resposta correta é:\n\nTamanho, datas de criação/modificação, proprietário e atributos.\n\nComentário:\nMetadados descrevem informações sobre o arquivo, como tamanho, datas, dono, permissões e atributos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Metadado é dado sobre o dado; não se limita ao conteúdo visível do documento."
    },
    {
        "pergunta": "Ao excluir um arquivo localizado em uma pasta compartilhada de rede, é comum que:",
        "alternativas": [
            "Ele seja enviado obrigatoriamente para a Lixeira local do computador do usuário.",
            "Ele seja convertido automaticamente em atalho no servidor.",
            "A recuperação dependa das configurações do servidor, versões anteriores ou backup.",
            "Ele seja movido para a pasta Downloads do usuário que excluiu.",
            "O arquivo passe a ocupar espaço na memória RAM até o próximo reinício."
        ],
        "correta": 2,
        "feedbackAcerto": "Arquivos apagados em compartilhamentos de rede nem sempre passam pela Lixeira local; a recuperação depende da estrutura do servidor e de backups.",
        "feedbackErro": "A resposta correta é:\n\nA recuperação dependa das configurações do servidor, versões anteriores ou backup.\n\nComentário:\nArquivos apagados em compartilhamentos de rede nem sempre passam pela Lixeira local; a recuperação depende da estrutura do servidor e de backups.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Cuidado: comportamento de exclusão local e exclusão em rede pode ser diferente."
    },
    {
        "pergunta": "Um arquivo marcado como 'somente leitura' geralmente:",
        "alternativas": [
            "Fica invisível no Explorador de Arquivos por padrão.",
            "É automaticamente criptografado com chave pública.",
            "Passa a ser executado como administrador.",
            "Pode ser aberto para consulta, mas sua alteração direta pode ser bloqueada ou exigir remoção do atributo.",
            "É removido da estrutura de diretórios."
        ],
        "correta": 3,
        "feedbackAcerto": "O atributo somente leitura restringe modificações diretas, mas não impede necessariamente a visualização.",
        "feedbackErro": "A resposta correta é:\n\nPode ser aberto para consulta, mas sua alteração direta pode ser bloqueada ou exigir remoção do atributo.\n\nComentário:\nO atributo somente leitura restringe modificações diretas, mas não impede necessariamente a visualização.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Somente leitura não é o mesmo que oculto, criptografado ou protegido por senha."
    },
    {
        "pergunta": "No Windows, caracteres como \\ / : * ? \" < > | são relevantes em nomes de arquivos porque:",
        "alternativas": [
            "São obrigatórios para identificar arquivos compactados.",
            "Podem ser usados apenas em arquivos de imagem.",
            "Definem automaticamente permissões NTFS avançadas.",
            "Transformam o arquivo em link simbólico.",
            "São reservados ou inválidos para nomes de arquivos e caminhos."
        ],
        "correta": 4,
        "feedbackAcerto": "Esses caracteres possuem funções especiais em caminhos e comandos, por isso são inválidos em nomes comuns de arquivos no Windows.",
        "feedbackErro": "A resposta correta é:\n\nSão reservados ou inválidos para nomes de arquivos e caminhos.\n\nComentário:\nEsses caracteres possuem funções especiais em caminhos e comandos, por isso são inválidos em nomes comuns de arquivos no Windows.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca costuma cobrar restrições de nomes de arquivos junto com caminhos e extensões."
    },
    {
        "pergunta": "Em um backup diferencial, se o último backup completo ocorreu no domingo, o backup diferencial de quarta-feira copiará:",
        "alternativas": [
            "Os arquivos alterados desde o backup completo de domingo.",
            "Apenas os arquivos alterados desde o backup incremental de terça-feira.",
            "Todos os arquivos selecionados, mesmo os não alterados.",
            "Somente os arquivos apagados depois de domingo.",
            "Apenas os arquivos compactados depois do último acesso."
        ],
        "correta": 0,
        "feedbackAcerto": "O diferencial usa como referência o último backup completo, copiando tudo que mudou desde ele.",
        "feedbackErro": "A resposta correta é:\n\nOs arquivos alterados desde o backup completo de domingo.\n\nComentário:\nO diferencial usa como referência o último backup completo, copiando tudo que mudou desde ele.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Incremental olha para o último backup realizado; diferencial olha para o último completo."
    },
    {
        "pergunta": "A principal diferença entre compactação com perda e compactação sem perda é que a compactação com perda:",
        "alternativas": [
            "Mantém todos os dados originais exatamente recuperáveis.",
            "Remove informações consideradas menos perceptíveis, podendo reduzir a fidelidade do arquivo.",
            "É aplicável somente a planilhas eletrônicas.",
            "Impede o envio do arquivo por e-mail.",
            "Cria obrigatoriamente arquivos com extensão .exe."
        ],
        "correta": 1,
        "feedbackAcerto": "Na compactação com perda, parte da informação é descartada para reduzir tamanho, comum em imagens, áudio e vídeo.",
        "feedbackErro": "A resposta correta é:\n\nRemove informações consideradas menos perceptíveis, podendo reduzir a fidelidade do arquivo.\n\nComentário:\nNa compactação com perda, parte da informação é descartada para reduzir tamanho, comum em imagens, áudio e vídeo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Sem perda permite recuperar os dados originais; com perda sacrifica fidelidade para reduzir tamanho."
    },
    {
        "pergunta": "Um link simbólico em um sistema de arquivos é melhor compreendido como:",
        "alternativas": [
            "Uma cópia integral e independente do arquivo original.",
            "Um arquivo temporário criado apenas pela memória RAM.",
            "Um caminho de referência que aponta para outro arquivo ou diretório.",
            "Uma extensão obrigatória de arquivos compactados.",
            "Um mecanismo exclusivo de backup em nuvem."
        ],
        "correta": 2,
        "feedbackAcerto": "Link simbólico é uma referência para outro local, não uma duplicação completa do conteúdo.",
        "feedbackErro": "A resposta correta é:\n\nUm caminho de referência que aponta para outro arquivo ou diretório.\n\nComentário:\nLink simbólico é uma referência para outro local, não uma duplicação completa do conteúdo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda link, atalho e cópia: todos facilitam acesso, mas não têm a mesma natureza técnica."
    },
    {
        "pergunta": "Um arquivo de imagem ISO normalmente representa:",
        "alternativas": [
            "Uma planilha protegida por senha.",
            "Uma pasta sincronizada em nuvem.",
            "Um documento de texto sem formatação.",
            "Uma imagem de disco ou mídia óptica em formato de arquivo.",
            "Um protocolo de compartilhamento de arquivos."
        ],
        "correta": 3,
        "feedbackAcerto": "ISO é frequentemente usado como imagem de disco, podendo representar o conteúdo de uma mídia ou instalador.",
        "feedbackErro": "A resposta correta é:\n\nUma imagem de disco ou mídia óptica em formato de arquivo.\n\nComentário:\nISO é frequentemente usado como imagem de disco, podendo representar o conteúdo de uma mídia ou instalador.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A extensão .iso costuma aparecer em instalação de sistemas e imagens de mídia."
    },
    {
        "pergunta": "Em um controle de versões de documentos, o principal benefício é:",
        "alternativas": [
            "Impedir qualquer alteração futura no arquivo.",
            "Eliminar a necessidade de armazenamento secundário.",
            "Converter automaticamente documentos em apresentações.",
            "Substituir permissões de acesso por extensões de arquivo.",
            "Permitir acompanhar alterações e recuperar versões anteriores."
        ],
        "correta": 4,
        "feedbackAcerto": "Versionamento permite rastrear mudanças e voltar a estados anteriores, útil em colaboração e recuperação.",
        "feedbackErro": "A resposta correta é:\n\nPermitir acompanhar alterações e recuperar versões anteriores.\n\nComentário:\nVersionamento permite rastrear mudanças e voltar a estados anteriores, útil em colaboração e recuperação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Versionamento não impede edição; ele registra ou organiza a evolução do arquivo."
    },
    {
        "pergunta": "A expressão 'permissão herdada' em pastas indica que:",
        "alternativas": [
            "As regras de acesso foram recebidas de uma pasta superior na hierarquia.",
            "O arquivo recebeu senha automaticamente ao ser copiado.",
            "O arquivo foi restaurado da Lixeira.",
            "A extensão do arquivo foi definida pelo sistema operacional.",
            "O backup foi feito em mídia removível."
        ],
        "correta": 0,
        "feedbackAcerto": "Permissões herdadas são repassadas de um diretório pai para arquivos ou subpastas.",
        "feedbackErro": "A resposta correta é:\n\nAs regras de acesso foram recebidas de uma pasta superior na hierarquia.\n\nComentário:\nPermissões herdadas são repassadas de um diretório pai para arquivos ou subpastas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em provas, herança costuma aparecer junto com permissões e estrutura hierárquica."
    },
    {
        "pergunta": "Ao comparar 1 byte e 1 bit, é correto afirmar que:",
        "alternativas": [
            "1 bit corresponde a 8 bytes.",
            "1 byte corresponde a 8 bits.",
            "Bit e byte possuem sempre o mesmo tamanho.",
            "Byte é usado apenas para medir velocidade de rede.",
            "Bit é utilizado exclusivamente para arquivos de imagem."
        ],
        "correta": 1,
        "feedbackAcerto": "Um byte é formado por 8 bits, distinção fundamental em armazenamento e transmissão de dados.",
        "feedbackErro": "A resposta correta é:\n\n1 byte corresponde a 8 bits.\n\nComentário:\nUm byte é formado por 8 bits, distinção fundamental em armazenamento e transmissão de dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Atenção às unidades: B maiúsculo geralmente byte; b minúsculo geralmente bit."
    },
    {
        "pergunta": "Quando um arquivo é aberto diretamente de um anexo de e-mail e editado sem salvá-lo em local conhecido, há risco de:",
        "alternativas": [
            "O arquivo ser convertido automaticamente em sistema operacional.",
            "A memória RAM ficar permanentemente ocupada pelo anexo.",
            "A edição ficar em pasta temporária ou não ser preservada como o usuário espera.",
            "O servidor de e-mail bloquear todos os backups futuros.",
            "A extensão do arquivo ser removida pelo navegador."
        ],
        "correta": 2,
        "feedbackAcerto": "Editar anexos diretamente pode salvar alterações em locais temporários, dificultando a localização posterior.",
        "feedbackErro": "A resposta correta é:\n\nA edição ficar em pasta temporária ou não ser preservada como o usuário espera.\n\nComentário:\nEditar anexos diretamente pode salvar alterações em locais temporários, dificultando a localização posterior.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Boas práticas: baixar/salvar em pasta conhecida antes de editar documentos importantes."
    },
    {
        "pergunta": "Um snapshot de volume ou sistema pode ser entendido como:",
        "alternativas": [
            "Um atalho criado obrigatoriamente na Área de Trabalho.",
            "Uma extensão para arquivos executáveis.",
            "Um protocolo de e-mail usado para anexos.",
            "Um registro do estado de arquivos ou sistema em determinado momento.",
            "Uma planilha de controle de permissões."
        ],
        "correta": 3,
        "feedbackAcerto": "Snapshot registra um estado em um ponto no tempo, podendo auxiliar em restauração ou recuperação.",
        "feedbackErro": "A resposta correta é:\n\nUm registro do estado de arquivos ou sistema em determinado momento.\n\nComentário:\nSnapshot registra um estado em um ponto no tempo, podendo auxiliar em restauração ou recuperação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Snapshot não substitui necessariamente backup externo; ele é uma fotografia lógica do estado."
    },
    {
        "pergunta": "Em relação a backup e sincronização em nuvem, assinale a alternativa mais adequada.",
        "alternativas": [
            "Sincronização e backup são sempre equivalentes.",
            "Backup só é possível quando a sincronização está desativada.",
            "Sincronização elimina a necessidade de controle de versões.",
            "Backup em nuvem impede qualquer erro humano.",
            "Sincronização pode replicar alterações e exclusões, enquanto backup busca permitir recuperação de versões ou dados perdidos."
        ],
        "correta": 4,
        "feedbackAcerto": "Sincronizar mantém dispositivos alinhados; backup deve preservar cópias recuperáveis em caso de erro, falha ou exclusão.",
        "feedbackErro": "A resposta correta é:\n\nSincronização pode replicar alterações e exclusões, enquanto backup busca permitir recuperação de versões ou dados perdidos.\n\nComentário:\nSincronizar mantém dispositivos alinhados; backup deve preservar cópias recuperáveis em caso de erro, falha ou exclusão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca gosta de confundir nuvem com backup perfeito. Nem toda sincronização é backup."
    },
    {
        "pergunta": "Em sistemas Windows, qual alternativa descreve corretamente uma limitação comum do FAT32 em comparação ao NTFS?",
        "alternativas": [
            "Não permite arquivos individuais maiores que 4 GB.",
            "Não reconhece dispositivos removíveis USB.",
            "Não pode ser lido por versões atuais do Windows.",
            "Não admite diretórios com subpastas internas.",
            "Não permite a gravação de nomes com extensão."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O FAT32 possui limite clássico de aproximadamente 4 GB por arquivo individual, enquanto o NTFS suporta arquivos maiores e recursos avançados.",
        "feedbackErro": "A resposta correta é:\n\nNão permite arquivos individuais maiores que 4 GB.\n\nComentário:\nO FAT32 possui limite clássico de aproximadamente 4 GB por arquivo individual, enquanto o NTFS suporta arquivos maiores e recursos avançados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "FAT32 costuma ser cobrado junto com NTFS e exFAT. Atenção ao limite de tamanho de arquivo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "No gerenciamento de arquivos, a extensão de um arquivo tem como principal finalidade:",
        "alternativas": [
            "Definir obrigatoriamente o conteúdo real do arquivo.",
            "Indicar ao sistema e aos programas o formato esperado do arquivo.",
            "Garantir que o arquivo esteja livre de código malicioso.",
            "Impedir a alteração manual do nome do arquivo.",
            "Determinar automaticamente o local físico no disco."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! A extensão ajuda o sistema operacional e os aplicativos a identificar o formato esperado, mas não altera nem garante o conteúdo interno.",
        "feedbackErro": "A resposta correta é:\n\nIndicar ao sistema e aos programas o formato esperado do arquivo.\n\nComentário:\nA extensão ajuda o sistema operacional e os aplicativos a identificar o formato esperado, mas não altera nem garante o conteúdo interno.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca gosta de confundir extensão com conversão real de formato. Trocar .docx por .pdf não converte o arquivo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Ao analisar um arquivo suspeito, qual informação é mais confiável para identificar seu tipo real do que apenas sua extensão?",
        "alternativas": [
            "A pasta em que o arquivo está salvo.",
            "A data de criação exibida nas propriedades.",
            "A assinatura interna ou cabeçalho do arquivo.",
            "O tamanho exibido no Explorador de Arquivos.",
            "A ordem alfabética do nome do arquivo."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! A assinatura interna, também chamada de cabeçalho ou magic number, ajuda a identificar o formato real independentemente da extensão visível.",
        "feedbackErro": "A resposta correta é:\n\nA assinatura interna ou cabeçalho do arquivo.\n\nComentário:\nA assinatura interna, também chamada de cabeçalho ou magic number, ajuda a identificar o formato real independentemente da extensão visível.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Extensão pode ser alterada pelo usuário. A identificação técnica do formato depende também da estrutura interna do arquivo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em um caminho como C:\\Users\\Joao\\Documentos\\relatorio.pdf, a expressão C: representa:",
        "alternativas": [
            "O nome do arquivo salvo na pasta Documentos.",
            "A extensão utilizada para identificar o formato.",
            "Um protocolo usado para acesso remoto.",
            "A unidade lógica de armazenamento usada no caminho.",
            "O atributo de proteção aplicado ao documento."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! No Windows, C: normalmente representa uma unidade lógica de armazenamento, como a partição principal do disco.",
        "feedbackErro": "A resposta correta é:\n\nA unidade lógica de armazenamento usada no caminho.\n\nComentário:\nNo Windows, C: normalmente representa uma unidade lógica de armazenamento, como a partição principal do disco.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em caminhos do Windows, observe a unidade, as pastas intermediárias e o arquivo final.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em sistemas do tipo Unix/Linux, um caminho iniciado por / geralmente indica:",
        "alternativas": [
            "Um arquivo compactado do usuário atual.",
            "Um atalho criado na área de trabalho.",
            "Uma unidade removível conectada ao sistema.",
            "Um caminho relativo ao diretório atual.",
            "Um caminho absoluto a partir do diretório raiz."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! A barra inicial / indica que o caminho parte do diretório raiz do sistema, caracterizando caminho absoluto.",
        "feedbackErro": "A resposta correta é:\n\nUm caminho absoluto a partir do diretório raiz.\n\nComentário:\nA barra inicial / indica que o caminho parte do diretório raiz do sistema, caracterizando caminho absoluto.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Windows costuma usar C:\\; Linux e Unix usam / como raiz do sistema de arquivos.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "O uso do caractere curinga * em pesquisas de arquivos normalmente permite:",
        "alternativas": [
            "Substituir qualquer sequência de caracteres no nome pesquisado.",
            "Excluir permanentemente todos os arquivos encontrados.",
            "Converter arquivos de um formato para outro automaticamente.",
            "Pesquisar apenas arquivos protegidos por senha.",
            "Localizar somente arquivos do sistema operacional."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O asterisco funciona como curinga para representar qualquer sequência de caracteres em buscas e filtros de nomes.",
        "feedbackErro": "A resposta correta é:\n\nSubstituir qualquer sequência de caracteres no nome pesquisado.\n\nComentário:\nO asterisco funciona como curinga para representar qualquer sequência de caracteres em buscas e filtros de nomes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Exemplo clássico: *.pdf localiza arquivos com extensão .pdf.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em pesquisas por arquivos, o caractere ? normalmente é utilizado para:",
        "alternativas": [
            "Substituir uma pasta inteira no caminho.",
            "Representar um único caractere desconhecido no nome pesquisado.",
            "Ocultar o arquivo dos resultados da busca.",
            "Abrir diretamente o conteúdo do arquivo encontrado.",
            "Transformar o arquivo em somente leitura."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! O ponto de interrogação representa um único caractere, enquanto o asterisco representa uma sequência de caracteres.",
        "feedbackErro": "A resposta correta é:\n\nRepresentar um único caractere desconhecido no nome pesquisado.\n\nComentário:\nO ponto de interrogação representa um único caractere, enquanto o asterisco representa uma sequência de caracteres.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A diferença entre * e ? é simples e aparece muito em questões de busca de arquivos.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "No Windows, qual alternativa apresenta caracteres normalmente inválidos em nomes de arquivos?",
        "alternativas": [
            "Letras acentuadas e espaços entre palavras.",
            "Números e hífens no final do nome.",
            "Barra, dois-pontos, asterisco e interrogação.",
            "Letras maiúsculas e minúsculas no mesmo nome.",
            "Sublinhado e parênteses no meio do nome."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Caracteres como \\, /, :, *, ?, \" , <, > e | são reservados ou inválidos em nomes de arquivos no Windows.",
        "feedbackErro": "A resposta correta é:\n\nBarra, dois-pontos, asterisco e interrogação.\n\nComentário:\nCaracteres como \\, /, :, *, ?, \" , <, > e | são reservados ou inválidos em nomes de arquivos no Windows.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca pode cobrar caracteres inválidos porque alguns deles têm função especial em caminhos e pesquisas.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em relação à diferenciação entre letras maiúsculas e minúsculas em nomes de arquivos, assinale a alternativa mais adequada.",
        "alternativas": [
            "Todos os sistemas tratam Arquivo.txt e arquivo.txt como nomes idênticos.",
            "Todos os sistemas proíbem o uso de maiúsculas em nomes de arquivos.",
            "A extensão define se o sistema diferencia maiúsculas de minúsculas.",
            "Alguns sistemas são sensíveis a maiúsculas e minúsculas, enquanto outros não são por padrão.",
            "A diferenciação ocorre apenas em arquivos de imagem."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Sistemas como Linux geralmente distinguem maiúsculas e minúsculas; Windows costuma não distinguir por padrão em nomes de arquivos.",
        "feedbackErro": "A resposta correta é:\n\nAlguns sistemas são sensíveis a maiúsculas e minúsculas, enquanto outros não são por padrão.\n\nComentário:\nSistemas como Linux geralmente distinguem maiúsculas e minúsculas; Windows costuma não distinguir por padrão em nomes de arquivos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Cuidado com afirmações absolutas. A regra depende do sistema de arquivos e da configuração.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "O conceito de diretório raiz em uma estrutura hierárquica de arquivos refere-se:",
        "alternativas": [
            "À pasta criada mais recentemente pelo usuário.",
            "Ao conjunto de arquivos excluídos e recuperáveis.",
            "Ao local usado apenas para documentos temporários.",
            "À primeira subpasta dentro da pasta pessoal.",
            "Ao ponto inicial da árvore de diretórios."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! O diretório raiz é o nível inicial da árvore de diretórios, a partir do qual os demais caminhos podem ser organizados.",
        "feedbackErro": "A resposta correta é:\n\nAo ponto inicial da árvore de diretórios.\n\nComentário:\nO diretório raiz é o nível inicial da árvore de diretórios, a partir do qual os demais caminhos podem ser organizados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Raiz é ponto de partida da estrutura; subpastas ficam abaixo dela.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um caminho relativo difere de um caminho absoluto porque o caminho relativo:",
        "alternativas": [
            "Depende do diretório atual como referência.",
            "Sempre começa pela unidade C: no Windows.",
            "É usado apenas para acessar sites da Internet.",
            "Dispensa qualquer nome de pasta no caminho.",
            "Aponta somente para arquivos compactados."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O caminho relativo parte do diretório atual; o caminho absoluto descreve a localização desde a raiz ou unidade.",
        "feedbackErro": "A resposta correta é:\n\nDepende do diretório atual como referência.\n\nComentário:\nO caminho relativo parte do diretório atual; o caminho absoluto descreve a localização desde a raiz ou unidade.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A pergunta costuma trocar absoluto e relativo. Leia a referência do caminho.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em redes Windows, um caminho no formato \\\\Servidor\\Compartilhamento\\Arquivo.docx é exemplo de:",
        "alternativas": [
            "Caminho local baseado em unidade removível.",
            "Caminho UNC para recurso compartilhado em rede.",
            "Extensão de arquivo compactado em nuvem.",
            "Atalho inválido para o diretório raiz.",
            "Comando de exclusão direta de arquivos."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! O formato UNC identifica recursos de rede, indicando servidor, compartilhamento e, quando necessário, pastas ou arquivos.",
        "feedbackErro": "A resposta correta é:\n\nCaminho UNC para recurso compartilhado em rede.\n\nComentário:\nO formato UNC identifica recursos de rede, indicando servidor, compartilhamento e, quando necessário, pastas ou arquivos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "UNC aparece muito em questões de arquivos em rede: \\\\servidor\\compartilhamento.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em sistemas de arquivos, o journaling tem como finalidade principal:",
        "alternativas": [
            "Compactar automaticamente arquivos de imagem.",
            "Bloquear o uso de nomes longos em pastas.",
            "Registrar operações para facilitar a recuperação da consistência após falhas.",
            "Substituir a necessidade de permissões de acesso.",
            "Alterar extensões sem modificar o conteúdo."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! O journaling registra operações do sistema de arquivos, ajudando a preservar ou restaurar a consistência após interrupções inesperadas.",
        "feedbackErro": "A resposta correta é:\n\nRegistrar operações para facilitar a recuperação da consistência após falhas.\n\nComentário:\nO journaling registra operações do sistema de arquivos, ajudando a preservar ou restaurar a consistência após interrupções inesperadas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Journaling está ligado à integridade do sistema de arquivos, não à compactação ou segurança total.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em um sistema de arquivos, a alocação de espaço tem relação direta com:",
        "alternativas": [
            "O idioma configurado no editor de textos.",
            "A cor do ícone exibido na pasta.",
            "A velocidade contratada do provedor de Internet.",
            "A forma como blocos ou clusters são usados para armazenar dados.",
            "A quantidade de janelas abertas pelo usuário."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! O sistema de arquivos organiza dados em unidades como blocos ou clusters, controlando como o espaço do dispositivo é ocupado.",
        "feedbackErro": "A resposta correta é:\n\nA forma como blocos ou clusters são usados para armazenar dados.\n\nComentário:\nO sistema de arquivos organiza dados em unidades como blocos ou clusters, controlando como o espaço do dispositivo é ocupado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Cluster e bloco aparecem como unidades de alocação; não confunda com pasta ou extensão.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "No gerenciamento de arquivos, fragmentação ocorre quando:",
        "alternativas": [
            "Um arquivo passa a exigir senha para abertura.",
            "Uma pasta deixa de aceitar novos documentos.",
            "A extensão do arquivo é removida pelo usuário.",
            "O arquivo é convertido automaticamente em atalho.",
            "Partes de um arquivo ficam gravadas em áreas não contíguas do disco."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! A fragmentação ocorre quando partes do arquivo ficam espalhadas em diferentes regiões do disco, principalmente em discos magnéticos.",
        "feedbackErro": "A resposta correta é:\n\nPartes de um arquivo ficam gravadas em áreas não contíguas do disco.\n\nComentário:\nA fragmentação ocorre quando partes do arquivo ficam espalhadas em diferentes regiões do disco, principalmente em discos magnéticos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Fragmentação é mais associada a HDs. SSDs não devem ser tratados como HDs em questões de desfragmentação.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Sobre desfragmentação, assinale a alternativa mais adequada para provas de Informática.",
        "alternativas": [
            "Pode melhorar a organização de dados em HDs, mas não é indicada da mesma forma para SSDs.",
            "É obrigatória para converter arquivos PDF em documentos editáveis.",
            "Apaga arquivos temporários e remove vírus automaticamente.",
            "Cria uma cópia de segurança completa do disco.",
            "Impede o uso de pastas compartilhadas na rede."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! A desfragmentação faz sentido principalmente em discos rígidos magnéticos; SSDs usam outra lógica e não se beneficiam da mesma forma.",
        "feedbackErro": "A resposta correta é:\n\nPode melhorar a organização de dados em HDs, mas não é indicada da mesma forma para SSDs.\n\nComentário:\nA desfragmentação faz sentido principalmente em discos rígidos magnéticos; SSDs usam outra lógica e não se beneficiam da mesma forma.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Bancas atuais cobram a diferença entre manutenção de HD e SSD.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Uma partição de disco pode ser corretamente compreendida como:",
        "alternativas": [
            "Um arquivo usado exclusivamente para compactação.",
            "Uma divisão lógica de uma unidade de armazenamento.",
            "Um atalho que aponta para a Lixeira.",
            "Um atributo aplicado apenas a arquivos ocultos.",
            "Uma extensão usada por arquivos executáveis."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Partição é uma divisão lógica criada em uma unidade física ou virtual, podendo receber sistema de arquivos próprio.",
        "feedbackErro": "A resposta correta é:\n\nUma divisão lógica de uma unidade de armazenamento.\n\nComentário:\nPartição é uma divisão lógica criada em uma unidade física ou virtual, podendo receber sistema de arquivos próprio.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Partição não é pasta comum. Ela organiza o espaço da unidade em divisões lógicas.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "A formatação de uma partição normalmente envolve:",
        "alternativas": [
            "A troca automática de todos os programas instalados.",
            "A remoção física do disco do computador.",
            "A preparação da área com um sistema de arquivos para uso.",
            "A criação obrigatória de uma conta em nuvem.",
            "A alteração do processador do equipamento."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Formatar prepara a partição com um sistema de arquivos, permitindo que dados sejam gravados e organizados.",
        "feedbackErro": "A resposta correta é:\n\nA preparação da área com um sistema de arquivos para uso.\n\nComentário:\nFormatar prepara a partição com um sistema de arquivos, permitindo que dados sejam gravados e organizados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Formatação não é sinônimo de backup. Em geral, pode causar perda de dados se feita sem cuidado.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em armazenamento, montar uma unidade ou volume significa:",
        "alternativas": [
            "Compactar todos os arquivos existentes.",
            "Trocar a extensão dos arquivos do usuário.",
            "Aplicar criptografia a cada documento.",
            "Tornar o sistema de arquivos acessível em determinado ponto da estrutura.",
            "Excluir automaticamente arquivos temporários."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Montar um volume torna seu sistema de arquivos acessível ao sistema operacional por meio de uma letra, pasta ou ponto de montagem.",
        "feedbackErro": "A resposta correta é:\n\nTornar o sistema de arquivos acessível em determinado ponto da estrutura.\n\nComentário:\nMontar um volume torna seu sistema de arquivos acessível ao sistema operacional por meio de uma letra, pasta ou ponto de montagem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Montagem está ligada ao acesso ao volume, não à conversão de arquivos.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um arquivo ISO é mais associado a:",
        "alternativas": [
            "Uma planilha eletrônica com macros habilitadas.",
            "Um arquivo temporário criado pelo navegador.",
            "Um atalho de execução rápida no Windows.",
            "Uma imagem de disco que pode representar mídia óptica ou instalação.",
            "Um protocolo de compartilhamento de impressoras."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Arquivos ISO são imagens de disco, frequentemente usadas para representar mídias de instalação ou cópias estruturadas de discos.",
        "feedbackErro": "A resposta correta é:\n\nUm protocolo de compartilhamento de impressoras.\n\nComentário:\nArquivos ISO são imagens de disco, frequentemente usadas para representar mídias de instalação ou cópias estruturadas de discos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "ISO não é extensão de planilha nem de atalho. É comum aparecer em instalação de sistemas.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "No Windows, ao excluir arquivo de uma unidade de rede compartilhada, o comportamento pode diferir da exclusão local porque:",
        "alternativas": [
            "O arquivo pode não passar pela Lixeira local do usuário.",
            "O arquivo sempre vira uma cópia compactada.",
            "A extensão do arquivo é removida automaticamente.",
            "A exclusão cria uma nova partição no servidor.",
            "O arquivo é convertido em atalho no destino."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Arquivos excluídos de locais de rede podem não ir para a Lixeira local, dependendo da configuração e do ambiente.",
        "feedbackErro": "A resposta correta é:\n\nO arquivo pode não passar pela Lixeira local do usuário.\n\nComentário:\nArquivos excluídos de locais de rede podem não ir para a Lixeira local, dependendo da configuração e do ambiente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Delete local e delete em rede não devem ser tratados sempre como idênticos.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "O atributo Somente Leitura em um arquivo indica, em regra, que:",
        "alternativas": [
            "O arquivo não pode ser aberto para visualização.",
            "Alterações no conteúdo tendem a ser impedidas ou exigem remoção do atributo.",
            "O arquivo fica invisível para todos os usuários.",
            "A extensão passa a ser bloqueada pelo sistema.",
            "O arquivo deixa de ocupar espaço em disco."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Somente Leitura dificulta ou impede alterações no arquivo, mas não equivale a criptografia nem a controle completo de permissões.",
        "feedbackErro": "A resposta correta é:\n\nAlterações no conteúdo tendem a ser impedidas ou exigem remoção do atributo.\n\nComentário:\nSomente Leitura dificulta ou impede alterações no arquivo, mas não equivale a criptografia nem a controle completo de permissões.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda atributo simples com segurança robusta. Somente Leitura não é senha.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "O atributo Oculto em um arquivo tem como efeito típico:",
        "alternativas": [
            "Impedir que o arquivo seja copiado por administradores.",
            "Remover o arquivo da unidade de armazenamento.",
            "Não exibir o arquivo nas configurações padrão do gerenciador de arquivos.",
            "Criptografar automaticamente seu conteúdo.",
            "Converter o arquivo em backup incremental."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Arquivo oculto pode deixar de aparecer na visualização padrão, mas continua existindo e pode ser exibido mediante configuração.",
        "feedbackErro": "A resposta correta é:\n\nNão exibir o arquivo nas configurações padrão do gerenciador de arquivos.\n\nComentário:\nArquivo oculto pode deixar de aparecer na visualização padrão, mas continua existindo e pode ser exibido mediante configuração.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Oculto não significa protegido, criptografado ou excluído.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em sistemas com controle de acesso, permissões de leitura, gravação e execução servem para:",
        "alternativas": [
            "Alterar automaticamente o tipo físico do disco.",
            "Converter arquivos entre formatos incompatíveis.",
            "Definir o tamanho máximo de cada extensão.",
            "Controlar ações permitidas aos usuários sobre arquivos e pastas.",
            "Eliminar a necessidade de backup periódico."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Permissões definem o que usuários ou grupos podem fazer, como ler, alterar, executar ou administrar arquivos e diretórios.",
        "feedbackErro": "A resposta correta é:\n\nControlar ações permitidas aos usuários sobre arquivos e pastas.\n\nComentário:\nPermissões definem o que usuários ou grupos podem fazer, como ler, alterar, executar ou administrar arquivos e diretórios.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Permissão é tema de segurança e administração. Não confunda com atributo visual do arquivo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "No contexto de permissões, herança significa que:",
        "alternativas": [
            "Todo arquivo passa a ser executável automaticamente.",
            "O nome da pasta é copiado para a extensão dos arquivos.",
            "Arquivos excluídos retornam sempre ao local original.",
            "Backups completos dispensam incrementais posteriores.",
            "Permissões de uma pasta podem ser propagadas para itens contidos nela."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! A herança permite que subpastas e arquivos recebam permissões definidas na pasta superior, salvo configurações específicas.",
        "feedbackErro": "A resposta correta é:\n\nPermissões de uma pasta podem ser propagadas para itens contidos nela.\n\nComentário:\nA herança permite que subpastas e arquivos recebam permissões definidas na pasta superior, salvo configurações específicas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Herança de permissões é muito cobrada quando a questão fala em pastas, subpastas e grupos de usuários.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em uma pasta compartilhada do Windows, permissões de compartilhamento e permissões NTFS devem ser analisadas porque:",
        "alternativas": [
            "O acesso efetivo pode depender da combinação entre elas.",
            "As permissões NTFS só valem para arquivos compactados.",
            "Permissões de compartilhamento sempre substituem senhas locais.",
            "A extensão do arquivo define automaticamente o usuário autorizado.",
            "Pastas compartilhadas não admitem controle de acesso."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Quando há compartilhamento em rede e NTFS, o acesso efetivo pode resultar da combinação entre permissões de compartilhamento e permissões locais.",
        "feedbackErro": "A resposta correta é:\n\nO acesso efetivo pode depender da combinação entre elas.\n\nComentário:\nQuando há compartilhamento em rede e NTFS, o acesso efetivo pode resultar da combinação entre permissões de compartilhamento e permissões locais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em provas, a palavra 'efetivo' costuma indicar soma ou restrição prática das permissões aplicáveis.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um atalho no Windows é diferente do arquivo original porque o atalho:",
        "alternativas": [
            "Sempre contém todo o conteúdo binário do arquivo.",
            "Apenas aponta para um destino, facilitando o acesso ao recurso.",
            "Impede a exclusão do arquivo original.",
            "Converte automaticamente documentos em executáveis.",
            "Ocupa obrigatoriamente o mesmo tamanho do arquivo apontado."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Atalho é uma referência para um destino. Excluir o atalho não exclui necessariamente o arquivo original.",
        "feedbackErro": "A resposta correta é:\n\nApenas aponta para um destino, facilitando o acesso ao recurso.\n\nComentário:\nAtalho é uma referência para um destino. Excluir o atalho não exclui necessariamente o arquivo original.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca gosta de perguntar se atalho é cópia. Não é: é referência.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um link simbólico em sistemas de arquivos pode ser entendido como:",
        "alternativas": [
            "Uma cópia compactada do conteúdo original.",
            "Uma partição física independente do disco.",
            "Uma referência especial que aponta para outro arquivo ou diretório.",
            "Um tipo de memória volátil usada por programas.",
            "Um protocolo exclusivo de navegação web."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Link simbólico é uma referência no sistema de arquivos que aponta para outro caminho, arquivo ou diretório.",
        "feedbackErro": "A resposta correta é:\n\nUma referência especial que aponta para outro arquivo ou diretório.\n\nComentário:\nLink simbólico é uma referência no sistema de arquivos que aponta para outro caminho, arquivo ou diretório.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Link simbólico e atalho têm ideia de referência, mas podem funcionar em nível diferente do sistema de arquivos.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em sistemas que suportam hard links, é correto afirmar que um hard link:",
        "alternativas": [
            "Aponta sempre para uma página da Web externa.",
            "Armazena a senha do usuário em arquivo separado.",
            "Cria necessariamente uma cópia física completa dos dados.",
            "Pode permitir que mais de um nome referencie o mesmo conteúdo no sistema de arquivos.",
            "Funciona apenas em arquivos enviados por e-mail."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Hard links permitem que mais de um nome de arquivo referencie o mesmo conteúdo/inode, conforme suporte do sistema de arquivos.",
        "feedbackErro": "A resposta correta é:\n\nPode permitir que mais de um nome referencie o mesmo conteúdo no sistema de arquivos.\n\nComentário:\nHard links permitem que mais de um nome de arquivo referencie o mesmo conteúdo/inode, conforme suporte do sistema de arquivos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Hard link não é simples cópia; a ideia central é múltipla referência ao mesmo conteúdo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Ao renomear um arquivo sem alterar sua extensão, o que normalmente permanece inalterado?",
        "alternativas": [
            "O conteúdo interno do arquivo.",
            "A localização física exata de todos os blocos.",
            "A data de último acesso em qualquer sistema.",
            "A permissão de todos os usuários da rede.",
            "O número de série do dispositivo."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Renomear altera a identificação nominal, mas não modifica necessariamente o conteúdo armazenado no arquivo.",
        "feedbackErro": "A resposta correta é:\n\nO conteúdo interno do arquivo.\n\nComentário:\nRenomear altera a identificação nominal, mas não modifica necessariamente o conteúdo armazenado no arquivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Trocar nome não significa editar conteúdo. Essa é pegadinha clássica.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Ao copiar um arquivo para outra pasta na mesma unidade, mantendo o original, ocorre:",
        "alternativas": [
            "Uma alteração obrigatória do formato interno.",
            "A criação de uma nova cópia no destino.",
            "A transformação do original em atalho.",
            "A exclusão automática da versão de origem.",
            "A remoção do arquivo da Lixeira."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Copiar cria outra ocorrência do arquivo no destino e preserva o arquivo na origem.",
        "feedbackErro": "A resposta correta é:\n\nA criação de uma nova cópia no destino.\n\nComentário:\nCopiar cria outra ocorrência do arquivo no destino e preserva o arquivo na origem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Copiar preserva origem; mover transfere. A banca troca esses verbos com frequência.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Ao mover um arquivo para outra pasta na mesma unidade, em regra, o sistema tende a:",
        "alternativas": [
            "Duplicar fisicamente todos os dados antes de apagar a cópia.",
            "Converter o arquivo em formato compactado.",
            "Atualizar a localização lógica do arquivo sem manter cópia na origem.",
            "Criar uma versão somente leitura do arquivo.",
            "Alterar o tipo do sistema de arquivos."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Na mesma unidade, mover geralmente altera a referência/localização lógica; o arquivo deixa de aparecer na origem.",
        "feedbackErro": "A resposta correta é:\n\nAtualizar a localização lógica do arquivo sem manter cópia na origem.\n\nComentário:\nNa mesma unidade, mover geralmente altera a referência/localização lógica; o arquivo deixa de aparecer na origem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Mover dentro da mesma unidade pode ser mais rápido que copiar entre unidades.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Ao mover um arquivo entre unidades diferentes, é comum que a operação envolva:",
        "alternativas": [
            "Apenas troca de extensão do arquivo.",
            "Somente alteração de data de criação.",
            "A criação de um atalho no local de destino.",
            "Cópia para o destino e remoção da origem ao final.",
            "A conversão obrigatória em arquivo ZIP."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Entre unidades diferentes, mover costuma equivaler a copiar para o destino e remover da origem quando a cópia é concluída.",
        "feedbackErro": "A resposta correta é:\n\nCópia para o destino e remoção da origem ao final.\n\nComentário:\nEntre unidades diferentes, mover costuma equivaler a copiar para o destino e remover da origem quando a cópia é concluída.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A diferença entre mover na mesma unidade e entre unidades é uma cobrança mais refinada.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "A opção 'Enviar para > Pasta compactada' no Windows está relacionada à criação de arquivo:",
        "alternativas": [
            "ISO",
            "EXE",
            "DLL",
            "TXT",
            "ZIP"
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! O recurso cria normalmente um arquivo ZIP, agrupando e compactando itens selecionados.",
        "feedbackErro": "A resposta correta é:\n\nZIP\n\nComentário:\nO recurso cria normalmente um arquivo ZIP, agrupando e compactando itens selecionados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Pasta compactada do Windows remete a ZIP, não a EXE ou ISO.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Ao extrair um arquivo ZIP, o usuário normalmente:",
        "alternativas": [
            "Obtém os arquivos contidos no pacote compactado.",
            "Transforma o ZIP em memória RAM volátil.",
            "Remove todas as permissões do sistema operacional.",
            "Exclui o arquivo original sem confirmação.",
            "Converte documentos em links simbólicos."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Extrair ou descompactar significa recuperar os itens armazenados dentro do arquivo compactado.",
        "feedbackErro": "A resposta correta é:\n\nObtém os arquivos contidos no pacote compactado.\n\nComentário:\nExtrair ou descompactar significa recuperar os itens armazenados dentro do arquivo compactado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Compactar junta/reduz; extrair recupera o conteúdo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Uma compactação sem perdas é aquela que:",
        "alternativas": [
            "Remove dados de forma irreversível para reduzir tamanho.",
            "Permite recuperar o conteúdo original após a descompactação.",
            "Só funciona em arquivos executáveis do Windows.",
            "Impede qualquer redução de tamanho em documentos.",
            "Elimina a necessidade de sistema de arquivos."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Na compactação sem perdas, os dados originais podem ser reconstruídos após a descompactação.",
        "feedbackErro": "A resposta correta é:\n\nPermite recuperar o conteúdo original após a descompactação.\n\nComentário:\nNa compactação sem perdas, os dados originais podem ser reconstruídos após a descompactação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "ZIP é exemplo comum de compactação sem perdas aplicada a arquivos.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em comparação com documentos de texto simples, arquivos de imagem JPEG geralmente usam técnica associada a:",
        "alternativas": [
            "Particionamento lógico do disco.",
            "Permissão de execução obrigatória.",
            "Compressão com perdas para reduzir tamanho.",
            "Controle de acesso por grupo local.",
            "Sistema de arquivos com journaling."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! JPEG costuma empregar compressão com perdas, reduzindo tamanho ao descartar parte de informações visuais.",
        "feedbackErro": "A resposta correta é:\n\nCompressão com perdas para reduzir tamanho.\n\nComentário:\nJPEG costuma empregar compressão com perdas, reduzindo tamanho ao descartar parte de informações visuais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Nem toda compactação é igual. Em imagens, diferencie PNG e JPEG em termos gerais.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um arquivo com extensão .lnk no Windows está normalmente associado a:",
        "alternativas": [
            "Arquivo de planilha eletrônica.",
            "Imagem vetorial compactada.",
            "Arquivo de configuração de rede sem fio.",
            "Atalho para outro recurso do sistema.",
            "Documento portátil com layout preservado."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! A extensão .lnk é associada a atalhos do Windows, que apontam para programas, arquivos, pastas ou recursos.",
        "feedbackErro": "A resposta correta é:\n\nAtalho para outro recurso do sistema.\n\nComentário:\nA extensão .lnk é associada a atalhos do Windows, que apontam para programas, arquivos, pastas ou recursos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Extensões menos lembradas, como .lnk, aparecem em questões de nível intermediário.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Arquivos temporários são, em regra, criados para:",
        "alternativas": [
            "Impedir a execução de todos os aplicativos.",
            "Substituir definitivamente o arquivo principal.",
            "Alterar o sistema de arquivos da unidade.",
            "Criar uma partição oculta obrigatória.",
            "Apoiar operações momentâneas de programas ou do sistema."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Arquivos temporários auxiliam processos em execução, instalações, edições e caches, podendo ser removidos quando não necessários.",
        "feedbackErro": "A resposta correta é:\n\nApoiar operações momentâneas de programas ou do sistema.\n\nComentário:\nArquivos temporários auxiliam processos em execução, instalações, edições e caches, podendo ser removidos quando não necessários.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Temporário não significa automaticamente inútil durante o uso. A remoção exige cuidado conforme o contexto.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um arquivo CSV é normalmente utilizado para:",
        "alternativas": [
            "Armazenar dados tabulares em formato textual separado por delimitadores.",
            "Executar programas compilados do sistema operacional.",
            "Representar imagens com transparência obrigatória.",
            "Criar cópias exatas de discos ópticos.",
            "Gerenciar permissões de usuários em rede."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! CSV é um formato textual simples usado para representar dados em linhas e colunas, separados por vírgula, ponto e vírgula ou outro delimitador.",
        "feedbackErro": "A resposta correta é:\n\nArmazenar dados tabulares em formato textual separado por delimitadores.\n\nComentário:\nCSV é um formato textual simples usado para representar dados em linhas e colunas, separados por vírgula, ponto e vírgula ou outro delimitador.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "CSV não é planilha completa; é texto estruturado que pode ser aberto por planilhas.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Arquivos PDF são frequentemente usados porque:",
        "alternativas": [
            "Permitem edição simultânea obrigatória por vários usuários.",
            "Preservam layout e apresentação do documento em diferentes ambientes.",
            "Executam macros automaticamente ao serem abertos.",
            "Substituem o sistema de arquivos do computador.",
            "Armazenam apenas imagens sem texto selecionável."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! O PDF é usado para preservar a aparência do documento, facilitando compartilhamento e impressão com layout consistente.",
        "feedbackErro": "A resposta correta é:\n\nPreservam layout e apresentação do documento em diferentes ambientes.\n\nComentário:\nO PDF é usado para preservar a aparência do documento, facilitando compartilhamento e impressão com layout consistente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "PDF pode conter texto, imagens e outros elementos. Não confunda com imagem simples.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um arquivo executável recebido por e-mail deve ser tratado com cautela porque:",
        "alternativas": [
            "Não pode conter instruções de programa.",
            "É sempre bloqueado fisicamente pelo disco rígido.",
            "Pode executar código no computador do usuário.",
            "É obrigatoriamente um documento de texto.",
            "Perde a extensão ao ser baixado."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Arquivos executáveis podem rodar código e, se maliciosos, comprometer o sistema.",
        "feedbackErro": "A resposta correta é:\n\nPode executar código no computador do usuário.\n\nComentário:\nArquivos executáveis podem rodar código e, se maliciosos, comprometer o sistema.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Extensões como .exe, .bat, .cmd, .scr e .msi exigem atenção em provas de segurança e arquivos.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um arquivo .bat no Windows normalmente contém:",
        "alternativas": [
            "Uma imagem compactada sem perdas.",
            "Uma tabela relacional criptografada.",
            "Um documento PDF protegido contra edição.",
            "Comandos em lote executáveis pelo interpretador de comandos.",
            "Um certificado digital de site HTTPS."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Arquivos .bat são scripts em lote que podem executar comandos no ambiente Windows.",
        "feedbackErro": "A resposta correta é:\n\nComandos em lote executáveis pelo interpretador de comandos.\n\nComentário:\nArquivos .bat são scripts em lote que podem executar comandos no ambiente Windows.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Nem todo arquivo perigoso é .exe. Scripts também podem executar comandos.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Extensões como .docm e .xlsm indicam, respectivamente, documentos do Office:",
        "alternativas": [
            "Compactados exclusivamente em formato ZIP.",
            "Convertidos permanentemente para imagem.",
            "Sem possibilidade de conter fórmulas.",
            "Criados apenas por sistemas Linux.",
            "Com suporte a macros."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! No Microsoft Office, extensões terminadas em m, como .docm e .xlsm, indicam arquivos com suporte a macros.",
        "feedbackErro": "A resposta correta é:\n\nCom suporte a macros.\n\nComentário:\nNo Microsoft Office, extensões terminadas em m, como .docm e .xlsm, indicam arquivos com suporte a macros.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Macros são muito cobradas em segurança, pois podem automatizar tarefas e também ser usadas de forma maliciosa.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "A propriedade 'tamanho em disco' pode ser maior que o 'tamanho' do arquivo porque:",
        "alternativas": [
            "O sistema de arquivos aloca espaço em unidades mínimas como clusters.",
            "A extensão do arquivo é contada duas vezes pelo sistema.",
            "Todo arquivo oculto consome o dobro do espaço real.",
            "Arquivos PDF são sempre armazenados sem compactação.",
            "O Windows converte bytes em bits nas propriedades."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O tamanho em disco considera a ocupação real nas unidades de alocação, podendo superar o tamanho lógico do arquivo.",
        "feedbackErro": "A resposta correta é:\n\nO sistema de arquivos aloca espaço em unidades mínimas como clusters.\n\nComentário:\nO tamanho em disco considera a ocupação real nas unidades de alocação, podendo superar o tamanho lógico do arquivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Tamanho do arquivo e tamanho em disco não são necessariamente iguais.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Metadados de um arquivo podem incluir:",
        "alternativas": [
            "A senha de todos os usuários do computador.",
            "Informações como autor, data, localização, dimensões ou propriedades do documento.",
            "A frequência de operação do processador.",
            "O endereço físico de cada setor do disco exibido ao usuário comum.",
            "A velocidade contratada do provedor de Internet."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Metadados são dados sobre o arquivo, como datas, autor, tamanho, dimensões, localização ou informações de câmera, conforme o tipo.",
        "feedbackErro": "A resposta correta é:\n\nInformações como autor, data, localização, dimensões ou propriedades do documento.\n\nComentário:\nMetadados são dados sobre o arquivo, como datas, autor, tamanho, dimensões, localização ou informações de câmera, conforme o tipo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Metadado é dado sobre dado. Em imagens, pode aparecer como EXIF.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em fotografias digitais, dados EXIF podem armazenar:",
        "alternativas": [
            "Apenas o nome do sistema operacional.",
            "Somente a extensão final do arquivo.",
            "Informações da captura, como câmera, data e, em alguns casos, localização.",
            "A senha de abertura do navegador.",
            "A lista completa de programas instalados."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! EXIF é um conjunto de metadados comum em imagens, podendo registrar dados da câmera, data, orientação e localização, se disponível.",
        "feedbackErro": "A resposta correta é:\n\nInformações da captura, como câmera, data e, em alguns casos, localização.\n\nComentário:\nEXIF é um conjunto de metadados comum em imagens, podendo registrar dados da câmera, data, orientação e localização, se disponível.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "EXIF é muito associado a fotos. Pode envolver privacidade quando guarda localização.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "O uso de hash em arquivos, como SHA-256, está relacionado principalmente a:",
        "alternativas": [
            "Aumentar a resolução de imagens digitais.",
            "Trocar a extensão sem afetar o conteúdo.",
            "Criar pastas ocultas automaticamente.",
            "Verificar integridade ou identificar alterações no conteúdo.",
            "Desfragmentar discos de estado sólido."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Funções hash geram um resumo do conteúdo; alterações no arquivo tendem a mudar o resultado, auxiliando a verificação de integridade.",
        "feedbackErro": "A resposta correta é:\n\nVerificar integridade ou identificar alterações no conteúdo.\n\nComentário:\nFunções hash geram um resumo do conteúdo; alterações no arquivo tendem a mudar o resultado, auxiliando a verificação de integridade.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Hash não criptografa o arquivo por si só. Ele ajuda a comparar integridade.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um checksum utilizado na distribuição de arquivos serve principalmente para:",
        "alternativas": [
            "Definir a pasta padrão de downloads.",
            "Impedir que o usuário renomeie arquivos.",
            "Aumentar a velocidade do Wi-Fi.",
            "Criar automaticamente um backup completo.",
            "Conferir se o arquivo recebido corresponde ao arquivo esperado."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! O checksum permite comparar um valor calculado no arquivo baixado com o valor publicado pelo fornecedor, detectando alterações ou corrupção.",
        "feedbackErro": "A resposta correta é:\n\nConferir se o arquivo recebido corresponde ao arquivo esperado.\n\nComentário:\nO checksum permite comparar um valor calculado no arquivo baixado com o valor publicado pelo fornecedor, detectando alterações ou corrupção.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Checksum e hash aparecem ligados à integridade de downloads.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "O backup completo é caracterizado por:",
        "alternativas": [
            "Copiar todos os dados selecionados na execução do backup.",
            "Copiar apenas arquivos alterados desde o último backup.",
            "Copiar somente arquivos excluídos da Lixeira.",
            "Sincronizar apenas metadados sem copiar conteúdo.",
            "Gravar somente arquivos ocultos e temporários."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O backup completo realiza uma cópia integral do conjunto selecionado, independentemente de alterações anteriores.",
        "feedbackErro": "A resposta correta é:\n\nCopiar todos os dados selecionados na execução do backup.\n\nComentário:\nO backup completo realiza uma cópia integral do conjunto selecionado, independentemente de alterações anteriores.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Full backup costuma consumir mais tempo e espaço, mas simplifica a restauração.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "O backup incremental diferencia-se do diferencial porque o incremental:",
        "alternativas": [
            "Nunca depende de backup completo anterior.",
            "Copia alterações desde o último backup realizado, completo ou incremental.",
            "Copia sempre todos os arquivos novamente.",
            "Serve apenas para arquivos compactados.",
            "É sinônimo de sincronização em nuvem."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! O incremental copia mudanças desde o backup anterior mais recente; o diferencial considera o último backup completo.",
        "feedbackErro": "A resposta correta é:\n\nCopia alterações desde o último backup realizado, completo ou incremental.\n\nComentário:\nO incremental copia mudanças desde o backup anterior mais recente; o diferencial considera o último backup completo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Incremental = desde o último backup. Diferencial = desde o último completo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "O backup diferencial copia, em regra:",
        "alternativas": [
            "Apenas os arquivos modificados desde o último backup incremental.",
            "Todos os arquivos do computador, mesmo sem seleção.",
            "Os arquivos alterados desde o último backup completo.",
            "Somente arquivos com extensão .zip ou .rar.",
            "Apenas dados armazenados na Lixeira."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! O diferencial acumula as alterações ocorridas desde o último backup completo.",
        "feedbackErro": "A resposta correta é:\n\nOs arquivos alterados desde o último backup completo.\n\nComentário:\nO diferencial acumula as alterações ocorridas desde o último backup completo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Diferencial cresce com o tempo até o próximo backup completo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Na estratégia de backup 3-2-1, a ideia central é manter:",
        "alternativas": [
            "Três usuários com a mesma senha em dois computadores e uma pasta pública.",
            "Três pastas ocultas, dois arquivos compactados e uma extensão segura.",
            "Três conexões de Internet, dois roteadores e um antivírus.",
            "Três cópias, em dois tipos de mídia, com uma cópia fora do local principal.",
            "Três sistemas operacionais, duas partições e uma Lixeira vazia."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! A regra 3-2-1 recomenda múltiplas cópias, diversidade de mídia e ao menos uma cópia externa/off-site.",
        "feedbackErro": "A resposta correta é:\n\nTrês cópias, em dois tipos de mídia, com uma cópia fora do local principal.\n\nComentário:\nA regra 3-2-1 recomenda múltiplas cópias, diversidade de mídia e ao menos uma cópia externa/off-site.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca pode cobrar backup como continuidade e recuperação, não só como cópia simples.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "RPO, em contexto de backup e recuperação, está mais ligado a:",
        "alternativas": [
            "Tempo máximo para trocar a extensão de um arquivo.",
            "Tamanho máximo permitido para arquivos em FAT32.",
            "Nome do usuário responsável pela pasta compartilhada.",
            "Ordem alfabética dos arquivos recuperados.",
            "Quantidade máxima aceitável de perda de dados medida no tempo."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! RPO indica o ponto de recuperação desejado, isto é, quanto dado a organização tolera perder em termos de tempo.",
        "feedbackErro": "A resposta correta é:\n\nQuantidade máxima aceitável de perda de dados medida no tempo.\n\nComentário:\nRPO indica o ponto de recuperação desejado, isto é, quanto dado a organização tolera perder em termos de tempo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "RPO trata perda de dados aceitável; RTO trata tempo de retorno do serviço.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "RTO, em planos de recuperação, refere-se principalmente:",
        "alternativas": [
            "Ao tempo máximo aceitável para restaurar um serviço ou sistema.",
            "Ao número de extensões existentes no arquivo.",
            "Ao tipo de compactação usado em imagens.",
            "À quantidade de bits de um endereço IPv6.",
            "À permissão de execução de um script."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! RTO é o objetivo de tempo de recuperação, isto é, o prazo aceitável para retomada do serviço após incidente.",
        "feedbackErro": "A resposta correta é:\n\nAo tempo máximo aceitável para restaurar um serviço ou sistema.\n\nComentário:\nRTO é o objetivo de tempo de recuperação, isto é, o prazo aceitável para retomada do serviço após incidente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "RTO = tempo para voltar. RPO = ponto de perda aceitável.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Uma cópia de sombra ou snapshot é mais bem descrita como:",
        "alternativas": [
            "Um arquivo de imagem JPEG com baixa resolução.",
            "Um registro do estado de dados em determinado momento.",
            "Um atalho sem destino válido no sistema.",
            "Uma partição obrigatoriamente formatada em FAT32.",
            "Um arquivo temporário de navegador anônimo."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Snapshot registra o estado de arquivos, volume ou sistema em um momento, auxiliando restauração ou versionamento.",
        "feedbackErro": "A resposta correta é:\n\nUm registro do estado de dados em determinado momento.\n\nComentário:\nSnapshot registra o estado de arquivos, volume ou sistema em um momento, auxiliando restauração ou versionamento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Snapshot pode ajudar, mas não substitui necessariamente uma política completa de backup externo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Versionamento de arquivos em serviços de armazenamento tem como vantagem:",
        "alternativas": [
            "Impedir qualquer exclusão feita pelo usuário.",
            "Eliminar a necessidade de autenticação.",
            "Permitir recuperar versões anteriores de um arquivo, conforme a política do serviço.",
            "Converter documentos em executáveis assinados.",
            "Garantir velocidade constante de Internet."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Versionamento permite voltar a versões anteriores, útil em edições indevidas, corrupção ou alterações acidentais.",
        "feedbackErro": "A resposta correta é:\n\nPermitir recuperar versões anteriores de um arquivo, conforme a política do serviço.\n\nComentário:\nVersionamento permite voltar a versões anteriores, útil em edições indevidas, corrupção ou alterações acidentais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Versionamento não é garantia infinita. Depende de retenção e configuração do serviço.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "RAID, embora aumente disponibilidade ou desempenho em certas configurações, não deve ser tratado como backup porque:",
        "alternativas": [
            "Nunca utiliza mais de um disco físico.",
            "Só funciona em pendrives removíveis.",
            "Remove a necessidade de restauração.",
            "Pode replicar falhas lógicas, exclusões ou corrupção de dados.",
            "É incompatível com servidores de arquivos."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! RAID pode proteger contra falha de disco em alguns níveis, mas não substitui backup contra exclusão, ransomware ou corrupção lógica.",
        "feedbackErro": "A resposta correta é:\n\nPode replicar falhas lógicas, exclusões ou corrupção de dados.\n\nComentário:\nRAID pode proteger contra falha de disco em alguns níveis, mas não substitui backup contra exclusão, ransomware ou corrupção lógica.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Frase clássica de prova e prática: RAID não é backup.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Deduplicação em armazenamento e backup consiste em:",
        "alternativas": [
            "Trocar a extensão dos arquivos repetidos.",
            "Impedir criação de subpastas.",
            "Salvar toda cópia repetida em locais diferentes.",
            "Excluir arquivos da Lixeira sem confirmação.",
            "Reduzir dados redundantes armazenando blocos repetidos de forma otimizada."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Deduplicação identifica dados repetidos e reduz redundância, economizando espaço em armazenamento ou backup.",
        "feedbackErro": "A resposta correta é:\n\nReduzir dados redundantes armazenando blocos repetidos de forma otimizada.\n\nComentário:\nDeduplicação identifica dados repetidos e reduz redundância, economizando espaço em armazenamento ou backup.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Deduplicação é otimização de espaço; não é o mesmo que compactação tradicional, embora ambas possam reduzir volume.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Sincronização de arquivos em nuvem difere de backup porque a sincronização:",
        "alternativas": [
            "Pode replicar alterações e exclusões entre dispositivos conectados.",
            "Impede permanentemente a perda de qualquer arquivo.",
            "Funciona apenas sem conexão com a Internet.",
            "Copia sempre todos os dados para mídia offline.",
            "Substitui políticas de retenção e versionamento."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Sincronização mantém conteúdos alinhados; por isso, exclusões ou alterações indevidas podem ser replicadas se não houver versionamento ou retenção adequada.",
        "feedbackErro": "A resposta correta é:\n\nPode replicar alterações e exclusões entre dispositivos conectados.\n\nComentário:\nSincronização mantém conteúdos alinhados; por isso, exclusões ou alterações indevidas podem ser replicadas se não houver versionamento ou retenção adequada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Nuvem não é automaticamente backup. Analise se há histórico, retenção e restauração.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em serviços como OneDrive ou Google Drive, um conflito de sincronização pode ocorrer quando:",
        "alternativas": [
            "O arquivo está salvo em uma pasta local comum.",
            "Duas versões do mesmo arquivo são alteradas em locais diferentes antes da sincronização completa.",
            "O usuário cria uma pasta vazia dentro de Documentos.",
            "A extensão do arquivo possui exatamente três letras.",
            "O sistema usa uma impressora como periférico de saída."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Conflitos surgem quando alterações concorrentes impedem o serviço de decidir automaticamente qual versão deve prevalecer.",
        "feedbackErro": "A resposta correta é:\n\nDuas versões do mesmo arquivo são alteradas em locais diferentes antes da sincronização completa.\n\nComentário:\nConflitos surgem quando alterações concorrentes impedem o serviço de decidir automaticamente qual versão deve prevalecer.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Conflito de sincronização é comum quando há edição offline ou simultânea.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Ao compartilhar um arquivo por link público, o principal risco é:",
        "alternativas": [
            "O arquivo deixar de ter extensão visível.",
            "A pasta local ser convertida em partição.",
            "Pessoas não previstas acessarem o conteúdo se o link for divulgado.",
            "O processador reduzir automaticamente o clock.",
            "O arquivo ficar maior por causa do nome."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Links públicos podem permitir acesso a qualquer pessoa que obtenha o link, conforme a configuração de compartilhamento.",
        "feedbackErro": "A resposta correta é:\n\nPessoas não previstas acessarem o conteúdo se o link for divulgado.\n\nComentário:\nLinks públicos podem permitir acesso a qualquer pessoa que obtenha o link, conforme a configuração de compartilhamento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em provas, observe a diferença entre compartilhar com usuários específicos e compartilhar por link.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "A opção de compartilhar arquivo com permissão 'visualizar' geralmente permite:",
        "alternativas": [
            "Alterar livremente o conteúdo do documento.",
            "Excluir o arquivo da conta do proprietário.",
            "Assumir a propriedade do arquivo automaticamente.",
            "Abrir ou consultar o conteúdo sem editar, conforme configuração.",
            "Converter o arquivo em executável do sistema."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Permissão de visualização permite acesso ao conteúdo, mas não edição, salvo configurações adicionais do serviço.",
        "feedbackErro": "A resposta correta é:\n\nAbrir ou consultar o conteúdo sem editar, conforme configuração.\n\nComentário:\nPermissão de visualização permite acesso ao conteúdo, mas não edição, salvo configurações adicionais do serviço.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Visualizar, comentar e editar são níveis diferentes de permissão em muitos serviços.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em organização documental, uma nomenclatura padronizada de arquivos contribui principalmente para:",
        "alternativas": [
            "Impedir que arquivos grandes ocupem espaço em disco.",
            "Eliminar a necessidade de antivírus.",
            "Aumentar a capacidade física do SSD.",
            "Transformar pastas em backups automáticos.",
            "Facilitar localização, controle de versões e identificação do conteúdo."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Padrões de nomes ajudam a localizar, ordenar, controlar versões e compreender o conteúdo sem abrir cada arquivo.",
        "feedbackErro": "A resposta correta é:\n\nFacilitar localização, controle de versões e identificação do conteúdo.\n\nComentário:\nPadrões de nomes ajudam a localizar, ordenar, controlar versões e compreender o conteúdo sem abrir cada arquivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Organização de arquivos não é só estética; é gestão da informação.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Na gestão de versões, o nome relatorio_final_final2.pdf representa um problema porque:",
        "alternativas": [
            "Pode dificultar a identificação clara da versão correta do documento.",
            "Impede o arquivo de ser salvo em qualquer sistema Windows.",
            "Transforma o documento em arquivo oculto.",
            "Remove automaticamente os metadados do arquivo.",
            "Bloqueia a criação de cópias de segurança."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Nomes improvisados e repetitivos dificultam controle de versão, revisão e auditoria do documento.",
        "feedbackErro": "A resposta correta é:\n\nPode dificultar a identificação clara da versão correta do documento.\n\nComentário:\nNomes improvisados e repetitivos dificultam controle de versão, revisão e auditoria do documento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Bancas podem cobrar boas práticas de organização, não apenas comandos do Windows.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "O arquivamento de documentos difere de backup porque o arquivamento costuma ter foco em:",
        "alternativas": [
            "Cópia rápida para recuperação após falha operacional imediata.",
            "Guarda organizada de informações para consulta, retenção ou histórico.",
            "Exclusão definitiva de todas as versões antigas.",
            "Conversão obrigatória de arquivos em planilhas.",
            "Alteração automática das permissões de rede."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Arquivamento prioriza guarda, organização e retenção; backup prioriza recuperação após falha, perda ou incidente.",
        "feedbackErro": "A resposta correta é:\n\nGuarda organizada de informações para consulta, retenção ou histórico.\n\nComentário:\nArquivamento prioriza guarda, organização e retenção; backup prioriza recuperação após falha, perda ou incidente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Arquivo morto/arquivamento não é a mesma coisa que backup operacional.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em ambiente corporativo, uma política de retenção de arquivos define:",
        "alternativas": [
            "A frequência de operação do processador dos servidores.",
            "O tipo de cabo usado na rede local.",
            "Prazos e critérios para manter, arquivar ou eliminar documentos.",
            "A extensão obrigatória para todo arquivo de imagem.",
            "A cor dos ícones exibidos no Explorador."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Política de retenção estabelece por quanto tempo documentos devem ser mantidos e quando podem ser descartados ou arquivados.",
        "feedbackErro": "A resposta correta é:\n\nPrazos e critérios para manter, arquivar ou eliminar documentos.\n\nComentário:\nPolítica de retenção estabelece por quanto tempo documentos devem ser mantidos e quando podem ser descartados ou arquivados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Retenção de documentos aparece em contexto administrativo, segurança e gestão da informação.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Uma quota de armazenamento aplicada a usuários tem como objetivo:",
        "alternativas": [
            "Converter arquivos grandes em atalhos.",
            "Permitir nomes inválidos em pastas.",
            "Criar senhas para todos os documentos.",
            "Limitar ou controlar o espaço que cada usuário pode ocupar.",
            "Substituir a função do sistema operacional."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Quotas controlam o uso de espaço por usuário, grupo ou volume, evitando consumo desorganizado do armazenamento.",
        "feedbackErro": "A resposta correta é:\n\nLimitar ou controlar o espaço que cada usuário pode ocupar.\n\nComentário:\nQuotas controlam o uso de espaço por usuário, grupo ou volume, evitando consumo desorganizado do armazenamento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Quota está ligada a limite de espaço, não a velocidade de processamento.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um servidor de arquivos em uma rede corporativa tem como finalidade típica:",
        "alternativas": [
            "Executar exclusivamente jogos instalados nos clientes.",
            "Substituir todas as estações de trabalho.",
            "Impedir qualquer compartilhamento entre setores.",
            "Converter IP em nome de domínio público.",
            "Centralizar armazenamento e compartilhamento de documentos com controle de acesso."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Servidor de arquivos centraliza documentos e permite aplicar permissões, backup e organização de forma mais controlada.",
        "feedbackErro": "A resposta correta é:\n\nCentralizar armazenamento e compartilhamento de documentos com controle de acesso.\n\nComentário:\nServidor de arquivos centraliza documentos e permite aplicar permissões, backup e organização de forma mais controlada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Servidor de arquivos não é apenas um computador comum; sua função principal é disponibilizar arquivos na rede.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "NAS, em armazenamento, é melhor definido como:",
        "alternativas": [
            "Dispositivo de armazenamento conectado à rede para compartilhamento de dados.",
            "Extensão usada para arquivos compactados sem perdas.",
            "Protocolo exclusivo para envio de mensagens eletrônicas.",
            "Arquivo temporário criado por navegadores.",
            "Memória volátil instalada no processador."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! NAS é um armazenamento conectado à rede, permitindo acesso compartilhado a arquivos por usuários e dispositivos.",
        "feedbackErro": "A resposta correta é:\n\nDispositivo de armazenamento conectado à rede para compartilhamento de dados.\n\nComentário:\nNAS é um armazenamento conectado à rede, permitindo acesso compartilhado a arquivos por usuários e dispositivos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "NAS aparece em questões que misturam rede e arquivos. Pense em armazenamento compartilhado.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "SMB/CIFS em ambiente Windows está associado principalmente a:",
        "alternativas": [
            "Compressão de imagens JPEG.",
            "Compartilhamento de arquivos e impressoras em rede.",
            "Execução de macros no Excel.",
            "Formatação de pendrives em FAT32.",
            "Criação de certificados digitais HTTPS."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! SMB/CIFS é associado ao compartilhamento de arquivos e impressoras, muito comum em redes Windows.",
        "feedbackErro": "A resposta correta é:\n\nCompartilhamento de arquivos e impressoras em rede.\n\nComentário:\nSMB/CIFS é associado ao compartilhamento de arquivos e impressoras, muito comum em redes Windows.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Protocolos de compartilhamento podem aparecer junto com caminhos UNC.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "NFS é um protocolo geralmente relacionado a:",
        "alternativas": [
            "Navegação em páginas HTML com criptografia.",
            "Troca de mensagens entre servidores de e-mail.",
            "Compartilhamento de sistemas de arquivos em rede, comum em Unix/Linux.",
            "Criação de apresentações no PowerPoint.",
            "Compactação de áudio com perdas."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! NFS permite compartilhamento de sistemas de arquivos pela rede, sendo tradicional em ambientes Unix/Linux.",
        "feedbackErro": "A resposta correta é:\n\nCompartilhamento de sistemas de arquivos em rede, comum em Unix/Linux.\n\nComentário:\nNFS permite compartilhamento de sistemas de arquivos pela rede, sendo tradicional em ambientes Unix/Linux.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "SMB costuma aparecer com Windows; NFS costuma aparecer com Unix/Linux.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Ao mapear uma unidade de rede no Windows, o usuário normalmente:",
        "alternativas": [
            "Formata a unidade física do servidor.",
            "Remove o compartilhamento dos demais usuários.",
            "Converte o caminho em um arquivo ZIP local.",
            "Associa um compartilhamento de rede a uma letra de unidade.",
            "Cria uma memória cache dentro da CPU."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Mapear unidade atribui uma letra, como Z:, a um recurso compartilhado em rede, facilitando o acesso.",
        "feedbackErro": "A resposta correta é:\n\nAssocia um compartilhamento de rede a uma letra de unidade.\n\nComentário:\nMapear unidade atribui uma letra, como Z:, a um recurso compartilhado em rede, facilitando o acesso.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Unidade mapeada parece local, mas aponta para recurso de rede.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Arquivos offline em sistemas de sincronização corporativa permitem:",
        "alternativas": [
            "Excluir permissões do servidor central.",
            "Aumentar a capacidade da placa de vídeo.",
            "Converter documentos em páginas da Web.",
            "Remover a necessidade de autenticação.",
            "Acessar cópias locais de arquivos de rede quando desconectado, com sincronização posterior."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Arquivos offline mantêm cópias locais para uso sem conexão e sincronizam alterações quando a rede retorna.",
        "feedbackErro": "A resposta correta é:\n\nAcessar cópias locais de arquivos de rede quando desconectado, com sincronização posterior.\n\nComentário:\nArquivos offline mantêm cópias locais para uso sem conexão e sincronizam alterações quando a rede retorna.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Offline não significa fora de controle; pode haver conflito de versões ao reconectar.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um arquivo criptografado tem como característica principal:",
        "alternativas": [
            "Conteúdo codificado para ser lido apenas com chave ou autorização adequada.",
            "Extensão obrigatoriamente removida do nome.",
            "Tamanho sempre reduzido pela metade.",
            "Impossibilidade de ser copiado para outra pasta.",
            "Conversão automática em arquivo temporário."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Criptografia protege o conteúdo por codificação, exigindo chave, senha ou autorização para leitura compreensível.",
        "feedbackErro": "A resposta correta é:\n\nConteúdo codificado para ser lido apenas com chave ou autorização adequada.\n\nComentário:\nCriptografia protege o conteúdo por codificação, exigindo chave, senha ou autorização para leitura compreensível.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Criptografar não é o mesmo que ocultar. O foco é proteger o conteúdo.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "A compactação com senha de um arquivo ZIP deve ser entendida como:",
        "alternativas": [
            "Garantia de que o arquivo não pode ser excluído.",
            "Proteção de acesso ao conteúdo, conforme o método de criptografia usado.",
            "Conversão do ZIP em backup completo automático.",
            "Substituição das permissões do sistema operacional.",
            "Bloqueio físico contra cópias em pendrive."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! ZIP com senha restringe o acesso ao conteúdo, mas a segurança depende do algoritmo e da força da senha.",
        "feedbackErro": "A resposta correta é:\n\nProteção de acesso ao conteúdo, conforme o método de criptografia usado.\n\nComentário:\nZIP com senha restringe o acesso ao conteúdo, mas a segurança depende do algoritmo e da força da senha.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Senha fraca compromete proteção. Não confunda senha com impossibilidade de cópia.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Assinatura digital aplicada a um documento eletrônico busca garantir principalmente:",
        "alternativas": [
            "Aumento do tamanho do arquivo para evitar cópias.",
            "Remoção automática de metadados do documento.",
            "Autenticidade e integridade do documento assinado.",
            "Conversão obrigatória do arquivo para imagem.",
            "Redução da necessidade de armazenamento."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Assinatura digital permite verificar a autoria/origem e detectar alterações posteriores no documento.",
        "feedbackErro": "A resposta correta é:\n\nAutenticidade e integridade do documento assinado.\n\nComentário:\nAssinatura digital permite verificar a autoria/origem e detectar alterações posteriores no documento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Assinatura digital não é apenas imagem de assinatura escaneada. Envolve mecanismo criptográfico.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Um documento digitalizado por scanner em formato de imagem difere de um documento com OCR porque o OCR:",
        "alternativas": [
            "Impede que o arquivo seja armazenado em nuvem.",
            "Transforma todo arquivo em executável.",
            "Apaga a imagem original automaticamente.",
            "Reconhece caracteres e pode tornar o texto pesquisável ou editável.",
            "Cria uma partição exclusiva para documentos."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! OCR reconhece caracteres em imagens ou PDFs digitalizados, permitindo busca textual e, em alguns casos, edição.",
        "feedbackErro": "A resposta correta é:\n\nReconhece caracteres e pode tornar o texto pesquisável ou editável.\n\nComentário:\nOCR reconhece caracteres em imagens ou PDFs digitalizados, permitindo busca textual e, em alguns casos, edição.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Scanner captura imagem; OCR interpreta texto na imagem.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Ao escolher formato para preservar transparência em imagem, um formato frequentemente adequado é:",
        "alternativas": [
            "TXT",
            "CSV",
            "EXE",
            "BAT",
            "PNG"
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! PNG é um formato de imagem que pode preservar transparência, diferentemente do JPEG em uso comum.",
        "feedbackErro": "A resposta correta é:\n\nPNG\n\nComentário:\nPNG é um formato de imagem que pode preservar transparência, diferentemente do JPEG em uso comum.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Para imagens, memorize: JPEG é comum para fotos; PNG é comum para transparência e sem perdas.",
        "assunto": "arquivos"
    },
    {
        "pergunta": "Em relação a arquivos com extensão .tmp, assinale a alternativa mais adequada.",
        "alternativas": [
            "São sempre arquivos finais de documentos oficiais.",
            "Representam exclusivamente imagens vetoriais.",
            "São obrigatoriamente arquivos executáveis do Windows.",
            "Indicam sempre cópias de segurança completas.",
            "Costumam estar associados a dados temporários criados por sistemas ou aplicativos."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Arquivos .tmp normalmente são temporários e podem ser criados durante instalações, edições, downloads ou execução de programas.",
        "feedbackErro": "A resposta correta é:\n\nCostumam estar associados a dados temporários criados por sistemas ou aplicativos.\n\nComentário:\nArquivos .tmp normalmente são temporários e podem ser criados durante instalações, edições, downloads ou execução de programas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "TMP remete a temporário. A banca pode cobrar sem afirmar que todo .tmp pode ser apagado sem risco naquele momento.",
        "assunto": "arquivos"
    }
];
