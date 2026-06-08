const arquivos = [

{
    pergunta: "Em um sistema operacional moderno, um arquivo pode ser corretamente definido como:",

    alternativas: [

        "Uma unidade física de armazenamento responsável pela gravação permanente de dados.",

        "Uma estrutura lógica destinada ao armazenamento organizado de informações digitais.",

        "Um conjunto de diretórios utilizado para agrupar dispositivos de armazenamento.",

        "Uma área temporária da memória RAM destinada à execução de programas.",

        "Um mecanismo utilizado exclusivamente para compartilhamento de dados em rede."

    ],

    correta: 1,

    feedbackAcerto: `
Arquivo é uma estrutura lógica utilizada para armazenar informações digitais, independentemente do dispositivo físico em que esteja gravado.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A letra A descreve dispositivos de armazenamento.

A letra C refere-se a diretórios ou pastas.

A letra D refere-se à memória principal.

A letra E restringe incorretamente a função dos arquivos.
`,

    dicaBanca: `
Muitas bancas confundem conceitos físicos (HD, SSD) com conceitos lógicos (arquivo e pasta).
`
},

{
    pergunta: "Considere os arquivos RELATORIO.docx, RELATORIO.pdf e RELATORIO.xlsx. Assinale a afirmativa correta.",

    alternativas: [

        "Os três arquivos necessariamente possuem o mesmo conteúdo.",

        "Os três arquivos possuem extensões distintas que indicam formatos diferentes.",

        "Os três arquivos são incompatíveis com sistemas Windows.",

        "A alteração da extensão modifica automaticamente o conteúdo interno do arquivo.",

        "A extensão determina o tamanho máximo do arquivo."

    ],

    correta: 1,

    feedbackAcerto: `
As extensões indicam formatos diferentes de arquivos e geralmente estão associadas a aplicações específicas.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A extensão identifica o formato do arquivo, mas não garante conteúdo idêntico nem altera automaticamente seus dados.
`,

    dicaBanca: `
Decorar extensões famosas é uma das exigências mais comuns das bancas.
`
},

{
    pergunta: "Ao copiar um arquivo de uma pasta para outra localizada na mesma unidade de armazenamento, o resultado da operação será:",

    alternativas: [

        "A remoção automática do arquivo original.",

        "A criação de uma nova referência ao arquivo sem consumo adicional de espaço.",

        "A existência simultânea do arquivo original e da cópia.",

        "A transformação automática do arquivo em atalho.",

        "A substituição obrigatória do arquivo original."

    ],

    correta: 2,

    feedbackAcerto: `
A operação de cópia mantém o arquivo original e cria uma nova cópia no local de destino.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Copiar não remove o arquivo original. A remoção ocorre apenas em operações de mover ou recortar.
`,

    dicaBanca: `
A banca costuma misturar os conceitos de copiar e mover.
`
},

{
    pergunta: "No Windows, um usuário selecionou um arquivo e pressionou Shift + Delete. Nessa situação, é correto afirmar que:",

    alternativas: [

        "O arquivo será enviado para a Lixeira.",

        "O arquivo será compactado antes da exclusão.",

        "O arquivo será excluído sem passar pela Lixeira.",

        "O arquivo será ocultado.",

        "O arquivo será convertido em backup."

    ],

    correta: 2,

    feedbackAcerto: `
A combinação Shift + Delete realiza a exclusão direta do arquivo, sem enviá-lo para a Lixeira.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Delete envia para a Lixeira. Shift + Delete normalmente exclui diretamente.
`,

    dicaBanca: `
Uma das pegadinhas mais frequentes em concursos de informática.
`
},

{
    pergunta: "Sobre as propriedades de um arquivo em sistemas operacionais, assinale a alternativa correta.",

    alternativas: [

        "Todo arquivo possui obrigatoriamente o atributo oculto.",

        "As propriedades permitem consultar informações como tamanho, localização e datas relacionadas ao arquivo.",

        "As propriedades exibem apenas a extensão do arquivo.",

        "As propriedades não podem ser alteradas pelo usuário.",

        "As propriedades são exclusivas de arquivos executáveis."

    ],

    correta: 1,

    feedbackAcerto: `
As propriedades de um arquivo fornecem diversas informações relevantes, como tamanho, tipo, localização e datas.
`,

    feedbackErro: `
A alternativa correta é a letra B.

As propriedades não se limitam à extensão e podem variar conforme o sistema operacional.
`,

    dicaBanca: `
Questões sobre propriedades costumam explorar tamanho, localização e atributos.
`
},

{
    pergunta: "Um arquivo com extensão .exe normalmente está associado a:",

    alternativas: [

        "Documento de texto simples.",

        "Arquivo de imagem.",

        "Programa executável.",

        "Planilha eletrônica.",

        "Arquivo compactado."

    ],

    correta: 2,

    feedbackAcerto: `
A extensão .exe identifica programas executáveis no ambiente Windows.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Arquivos .exe normalmente executam aplicações ou instaladores.
`,

    dicaBanca: `
Extensões de arquivos aparecem com enorme frequência em provas.
`
},

{
    pergunta: "A alteração manual da extensão de um arquivo, sem conversão adequada, produz necessariamente qual efeito?",

    alternativas: [

        "Transforma automaticamente o conteúdo para o novo formato.",

        "Garante compatibilidade com qualquer programa.",

        "Altera apenas o nome do arquivo, não seu conteúdo interno.",

        "Reduz o tamanho do arquivo.",

        "Impede permanentemente sua abertura."

    ],

    correta: 2,

    feedbackAcerto: `
Mudar apenas a extensão não converte o conteúdo do arquivo.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A extensão faz parte do nome do arquivo. Alterá-la não modifica automaticamente sua estrutura interna.
`,

    dicaBanca: `
Muitas bancas exploram a falsa ideia de que trocar a extensão converte arquivos.
`
},

{
    pergunta: "Assinale a alternativa que apresenta apenas extensões normalmente associadas a arquivos de imagem.",

    alternativas: [

        ".jpg, .png e .gif",

        ".docx, .jpg e .xlsx",

        ".pptx, .png e .gif",

        ".pdf, .jpg e .bmp",

        ".exe, .jpg e .png"

    ],

    correta: 0,

    feedbackAcerto: `
JPG, PNG e GIF são extensões tradicionalmente associadas a imagens digitais.
`,

    feedbackErro: `
A alternativa correta é a letra A.

As demais misturam formatos de documentos, apresentações ou executáveis.
`,

    dicaBanca: `
Memorize os principais grupos de extensões: documentos, imagens, áudio, vídeo e executáveis.
`
},

{
    pergunta: "Em relação ao tamanho de arquivos digitais, é correto afirmar que:",

    alternativas: [

        "Arquivos com a mesma extensão possuem sempre o mesmo tamanho.",

        "O tamanho depende exclusivamente do nome atribuído ao arquivo.",

        "Arquivos de mesmo tipo podem apresentar tamanhos diferentes.",

        "A extensão determina diretamente o tamanho do arquivo.",

        "Arquivos PDF possuem tamanho fixo."

    ],

    correta: 2,

    feedbackAcerto: `
O tamanho depende da quantidade de dados armazenados e não apenas do tipo de arquivo.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Arquivos da mesma categoria podem possuir tamanhos completamente diferentes.
`,

    dicaBanca: `
A banca costuma tentar associar tamanho à extensão. Isso está errado.
`
},

{
    pergunta: "Em um ambiente corporativo, a principal finalidade da organização de arquivos em pastas é:",

    alternativas: [

        "Aumentar automaticamente a velocidade do processador.",

        "Reduzir o consumo de energia do computador.",

        "Facilitar o armazenamento, localização e gerenciamento das informações.",

        "Eliminar a necessidade de backups.",

        "Impedir a criação de novos arquivos."

    ],

    correta: 2,

    feedbackAcerto: `
A organização em pastas facilita a administração, localização e controle dos arquivos.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Pastas são mecanismos de organização lógica dos dados armazenados.
`,

    dicaBanca: `
Quando a questão mencionar organização lógica, geralmente a resposta estará relacionada às pastas e diretórios.
`
},

{
    pergunta: "Em sistemas operacionais modernos, uma pasta pode ser corretamente definida como:",

    alternativas: [

        "Um arquivo utilizado exclusivamente para armazenar imagens.",

        "Uma estrutura lógica destinada à organização de arquivos e outras pastas.",

        "Uma unidade física de armazenamento removível.",

        "Um programa responsável pela execução de aplicativos.",

        "Uma cópia de segurança criada automaticamente pelo sistema."

    ],

    correta: 1,

    feedbackAcerto: `
Pastas são estruturas lógicas utilizadas para organizar arquivos e subpastas, facilitando a administração dos dados.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Pastas não são dispositivos físicos nem programas. Sua principal função é organizar informações dentro do sistema de arquivos.
`,

    dicaBanca: `
Bancas costumam diferenciar conceitos físicos (HD, SSD) de conceitos lógicos (arquivo e pasta).
`
},

{
    pergunta: "Em uma estrutura hierárquica de diretórios, uma subpasta é:",

    alternativas: [

        "Uma pasta localizada dentro de outra pasta.",

        "Uma pasta protegida por senha.",

        "Um arquivo oculto.",

        "Uma unidade lógica criada automaticamente pelo sistema.",

        "Um backup armazenado em nuvem."

    ],

    correta: 0,

    feedbackAcerto: `
Subpasta é qualquer pasta contida dentro de outra pasta.
`,

    feedbackErro: `
A alternativa correta é a letra A.

O conceito de subpasta está relacionado à hierarquia de diretórios.
`,

    dicaBanca: `
Hierarquia de diretórios é assunto recorrente em provas de informática.
`
},

{
    pergunta: "No contexto de sistemas de arquivos, o diretório raiz corresponde:",

    alternativas: [

        "À última pasta criada pelo usuário.",

        "Ao nível mais alto da estrutura hierárquica de diretórios.",

        "À pasta utilizada exclusivamente para armazenar backups.",

        "Ao local onde ficam armazenados os arquivos temporários.",

        "À lixeira do sistema operacional."

    ],

    correta: 1,

    feedbackAcerto: `
O diretório raiz representa o ponto inicial da estrutura hierárquica de diretórios.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O diretório raiz é o nível superior da organização dos arquivos.
`,

    dicaBanca: `
Em Windows costuma aparecer associado a C:\.
`
},

{
    pergunta: "Considere o caminho C:\\Usuarios\\Joao\\Documentos\\Relatorio.docx. Nesse caso, Relatorio.docx corresponde a:",

    alternativas: [

        "Uma pasta.",

        "Uma unidade de armazenamento.",

        "Um diretório raiz.",

        "Um arquivo.",

        "Um atalho."

    ],

    correta: 3,

    feedbackAcerto: `
O elemento final do caminho apresentado é um arquivo identificado pela extensão .docx.
`,

    feedbackErro: `
A alternativa correta é a letra D.

Todo o restante representa diretórios utilizados para chegar ao arquivo.
`,

    dicaBanca: `
Observe sempre o último elemento do caminho e sua extensão.
`
},

{
    pergunta: "Ao mover um arquivo de uma pasta para outra na mesma unidade utilizando o comando Recortar e Colar, ocorre:",

    alternativas: [

        "A criação de duas cópias do arquivo.",

        "A exclusão definitiva do arquivo.",

        "A transferência do arquivo para o novo local sem manutenção da cópia original.",

        "A criação automática de um backup.",

        "A conversão do arquivo em atalho."

    ],

    correta: 2,

    feedbackAcerto: `
Mover significa transferir o arquivo de um local para outro, removendo-o da origem.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A operação difere da cópia, que mantém o arquivo original.
`,

    dicaBanca: `
Copiar gera duas versões. Mover mantém apenas uma.
`
},

{
    pergunta: "Um caminho absoluto é aquele que:",

    alternativas: [

        "Começa sempre pelo diretório raiz ou unidade de armazenamento.",

        "Indica apenas o nome do arquivo.",

        "Pode ser utilizado apenas em servidores.",

        "Não contém nomes de pastas.",

        "É utilizado exclusivamente em sistemas Linux."

    ],

    correta: 0,

    feedbackAcerto: `
O caminho absoluto descreve toda a localização do arquivo desde a raiz da estrutura.
`,

    feedbackErro: `
A alternativa correta é a letra A.

Ele permite localizar o arquivo independentemente do diretório atual.
`,

    dicaBanca: `
A diferença entre caminho absoluto e relativo aparece frequentemente em concursos.
`
},

{
    pergunta: "Um atalho criado na Área de Trabalho para um arquivo possui como característica principal:",

    alternativas: [

        "Substituir permanentemente o arquivo original.",

        "Conter obrigatoriamente uma cópia completa do arquivo.",

        "Permitir acesso rápido ao arquivo sem alterar sua localização original.",

        "Transformar o arquivo em executável.",

        "Impedir a exclusão do arquivo original."

    ],

    correta: 2,

    feedbackAcerto: `
O atalho apenas referencia o arquivo original, permitindo acesso mais rápido.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Atalhos não são cópias dos arquivos aos quais apontam.
`,

    dicaBanca: `
Excluir um atalho não exclui o arquivo original.
`
},

{
    pergunta: "Assinale a alternativa que representa corretamente uma unidade de medida de armazenamento superior ao megabyte (MB).",

    alternativas: [

        "Kilobyte (KB)",

        "Byte (B)",

        "Gigabyte (GB)",

        "Bit (b)",

        "Nibble"

    ],

    correta: 2,

    feedbackAcerto: `
Gigabyte possui capacidade superior ao Megabyte.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A sequência mais cobrada é: Byte → KB → MB → GB → TB.
`,

    dicaBanca: `
Decore a ordem crescente das unidades de armazenamento.
`
},

{
    pergunta: "Sobre o atributo 'Somente Leitura' aplicado a um arquivo, assinale a alternativa correta.",

    alternativas: [

        "Impede que o arquivo seja visualizado.",

        "Impede alterações no conteúdo do arquivo sem remoção do atributo.",

        "Oculta automaticamente o arquivo.",

        "Compacta o arquivo automaticamente.",

        "Transforma o arquivo em backup."

    ],

    correta: 1,

    feedbackAcerto: `
O atributo Somente Leitura dificulta alterações no conteúdo do arquivo.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O atributo não oculta nem compacta o arquivo.
`,

    dicaBanca: `
Não confunda os atributos Somente Leitura, Oculto e Sistema.
`
},

{
    pergunta: "Em relação aos atalhos do Windows, assinale a afirmativa correta.",

    alternativas: [

        "Todo atalho possui obrigatoriamente a extensão .exe.",

        "Atalhos não podem ser criados para pastas.",

        "A exclusão do arquivo original torna o atalho inválido.",

        "Atalhos ocupam exatamente o mesmo espaço do arquivo original.",

        "Atalhos são cópias integrais dos arquivos."

    ],

    correta: 2,

    feedbackAcerto: `
Se o arquivo original for removido ou movido inadequadamente, o atalho poderá deixar de funcionar.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Atalhos dependem da existência do objeto original para funcionar corretamente.
`,

    dicaBanca: `
Questões sobre atalhos normalmente exploram a diferença entre referência e cópia.
`
},
{
    pergunta: "Ao excluir um arquivo utilizando apenas a tecla Delete no Windows, o comportamento padrão será:",

    alternativas: [

        "A exclusão definitiva do arquivo.",

        "O envio do arquivo para a Lixeira.",

        "A compactação automática do arquivo.",

        "A conversão do arquivo em backup.",

        "O envio do arquivo para armazenamento em nuvem."

    ],

    correta: 1,

    feedbackAcerto: `
Por padrão, arquivos excluídos com a tecla Delete são enviados para a Lixeira, permitindo recuperação posterior.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A exclusão definitiva normalmente ocorre com Shift + Delete.
`,

    dicaBanca: `
A banca frequentemente cobra a diferença entre Delete e Shift + Delete.
`
},

{
    pergunta: "A principal finalidade da Lixeira do Windows é:",

    alternativas: [

        "Armazenar arquivos temporários do sistema.",

        "Servir como local de recuperação para arquivos excluídos.",

        "Executar arquivos removidos.",

        "Compactar automaticamente documentos.",

        "Criar cópias de segurança."

    ],

    correta: 1,

    feedbackAcerto: `
A Lixeira permite recuperar arquivos excluídos antes da remoção definitiva.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A função principal da Lixeira é armazenar temporariamente arquivos removidos.
`,

    dicaBanca: `
Lixeira não é backup.
`
},

{
    pergunta: "Ao restaurar um arquivo da Lixeira, ele será normalmente enviado para:",

    alternativas: [

        "A pasta Downloads.",

        "A Área de Trabalho.",

        "Sua localização original.",

        "A pasta Documentos.",

        "A unidade C:."

    ],

    correta: 2,

    feedbackAcerto: `
A restauração devolve o arquivo para o local de onde ele foi excluído.
`,

    feedbackErro: `
A alternativa correta é a letra C.

O Windows registra a localização original do arquivo.
`,

    dicaBanca: `
Restaurar não significa escolher um novo local.
`
},

{
    pergunta: "Assinale a alternativa correta sobre arquivos compactados.",

    alternativas: [

        "Possuem necessariamente extensão .exe.",

        "Servem para reduzir espaço ocupado e facilitar transporte de dados.",

        "Podem armazenar apenas um único arquivo.",

        "Não podem ser enviados por e-mail.",

        "Existem apenas em sistemas Windows."

    ],

    correta: 1,

    feedbackAcerto: `
A compactação reduz o tamanho dos dados e facilita armazenamento e compartilhamento.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Arquivos compactados podem conter vários arquivos e pastas.
`,

    dicaBanca: `
ZIP e RAR são os formatos mais cobrados.
`
},

{
    pergunta: "Qual das extensões abaixo está normalmente associada a arquivos compactados?",

    alternativas: [

        ".xlsx",

        ".pptx",

        ".zip",

        ".pdf",

        ".jpg"

    ],

    correta: 2,

    feedbackAcerto: `
A extensão .zip é amplamente utilizada para compactação de arquivos.
`,

    feedbackErro: `
A alternativa correta é a letra C.

As demais extensões pertencem a documentos, imagens ou apresentações.
`,

    dicaBanca: `
Também memorize a extensão .rar.
`
},

{
    pergunta: "Em relação aos arquivos ZIP, assinale a alternativa correta.",

    alternativas: [

        "Podem conter múltiplos arquivos e pastas.",

        "Podem armazenar apenas textos.",

        "São exclusivos do Windows.",

        "Não podem ser descompactados.",

        "Transformam arquivos em executáveis."

    ],

    correta: 0,

    feedbackAcerto: `
Um arquivo ZIP pode armazenar vários arquivos e diretórios em um único pacote compactado.
`,

    feedbackErro: `
A alternativa correta é a letra A.

ZIP é um formato de compactação amplamente utilizado.
`,

    dicaBanca: `
ZIP é um contêiner de arquivos.
`
},

{
    pergunta: "Sobre SSD e HD, assinale a afirmativa correta.",

    alternativas: [

        "SSD possui partes mecânicas móveis.",

        "HD utiliza memória flash sem partes móveis.",

        "SSD tende a apresentar maior velocidade de acesso aos dados.",

        "HD e SSD possuem exatamente a mesma tecnologia.",

        "SSD não pode armazenar arquivos."

    ],

    correta: 2,

    feedbackAcerto: `
SSDs normalmente oferecem acesso mais rápido aos dados que os HDs tradicionais.
`,

    feedbackErro: `
A alternativa correta é a letra C.

HD utiliza discos magnéticos. SSD utiliza memória flash.
`,

    dicaBanca: `
Velocidade e ausência de partes móveis são características clássicas dos SSDs.
`
},

{
    pergunta: "Qual dos dispositivos abaixo é considerado armazenamento removível?",

    alternativas: [

        "Memória RAM.",

        "Processador.",

        "Pendrive.",

        "Placa-mãe.",

        "Cache."

    ],

    correta: 2,

    feedbackAcerto: `
O pendrive é um dispositivo portátil de armazenamento removível.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Os demais componentes não são dispositivos removíveis de armazenamento de dados.
`,

    dicaBanca: `
Pendrive, cartão SD e HD externo aparecem frequentemente em provas.
`
},

{
    pergunta: "O armazenamento em nuvem caracteriza-se principalmente por:",

    alternativas: [

        "Armazenar dados exclusivamente em computadores pessoais.",

        "Utilizar servidores acessíveis pela internet para guardar informações.",

        "Dispensar conexão com a internet.",

        "Substituir totalmente os backups.",

        "Funcionar apenas em smartphones."

    ],

    correta: 1,

    feedbackAcerto: `
A nuvem utiliza servidores remotos acessados pela internet.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O conceito central é o armazenamento remoto dos dados.
`,

    dicaBanca: `
Google Drive, OneDrive e Dropbox são exemplos clássicos.
`
},

{
    pergunta: "Assinale a alternativa que apresenta apenas exemplos de serviços de armazenamento em nuvem.",

    alternativas: [

        "Windows, Linux e Android.",

        "Word, Excel e PowerPoint.",

        "Google Drive, OneDrive e Dropbox.",

        "Chrome, Firefox e Edge.",

        "ZIP, RAR e PDF."

    ],

    correta: 2,

    feedbackAcerto: `
Google Drive, OneDrive e Dropbox são serviços amplamente utilizados para armazenamento em nuvem.
`,

    feedbackErro: `
A alternativa correta é a letra C.

As demais alternativas apresentam sistemas operacionais, programas ou formatos de arquivos.
`,

    dicaBanca: `
As bancas adoram misturar navegadores, sistemas operacionais e serviços de nuvem.
`
},

{
    pergunta: "Em sistemas operacionais, um arquivo marcado com o atributo 'Oculto' possui qual característica?",

    alternativas: [

        "É automaticamente excluído após 30 dias.",

        "Não pode ser copiado para outra pasta.",

        "Não é exibido normalmente nas configurações padrão do explorador de arquivos.",

        "Torna-se um arquivo compactado.",

        "Só pode ser acessado por administradores."

    ],

    correta: 2,

    feedbackAcerto: `
Arquivos ocultos não são exibidos normalmente pelo Explorador de Arquivos, mas podem ser visualizados mediante configuração adequada.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Ocultar um arquivo não significa protegê-lo, excluí-lo ou compactá-lo.
`,

    dicaBanca: `
Não confunda arquivo oculto com arquivo protegido ou criptografado.
`
},

{
    pergunta: "Qual sequência apresenta corretamente as unidades de armazenamento em ordem crescente?",

    alternativas: [

        "KB → MB → GB → TB",

        "MB → KB → GB → TB",

        "KB → GB → MB → TB",

        "MB → GB → TB → KB",

        "GB → MB → KB → TB"

    ],

    correta: 0,

    feedbackAcerto: `
A sequência correta é KB (Kilobyte), MB (Megabyte), GB (Gigabyte) e TB (Terabyte).
`,

    feedbackErro: `
A alternativa correta é a letra A.

As bancas frequentemente cobram a ordem crescente das unidades de armazenamento.
`,

    dicaBanca: `
Decore também: Byte → KB → MB → GB → TB → PB.
`
},

{
    pergunta: "Considerando as unidades de armazenamento, assinale a afirmativa correta.",

    alternativas: [

        "1 GB é menor que 1 MB.",

        "1 TB corresponde a uma capacidade superior a 1 GB.",

        "1 KB é maior que 1 GB.",

        "MB é superior a TB.",

        "Todas as unidades possuem a mesma capacidade."

    ],

    correta: 1,

    feedbackAcerto: `
O Terabyte possui capacidade superior ao Gigabyte.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A ordem crescente mais cobrada é: KB, MB, GB e TB.
`,

    dicaBanca: `
A banca costuma inverter propositalmente as unidades.
`
},

{
    pergunta: "Em um caminho relativo, a localização de um arquivo é definida:",

    alternativas: [

        "A partir da unidade raiz.",

        "A partir do diretório atual.",

        "A partir da internet.",

        "A partir da Lixeira.",

        "Exclusivamente a partir da Área de Trabalho."

    ],

    correta: 1,

    feedbackAcerto: `
Caminhos relativos dependem da localização atual do usuário dentro da estrutura de diretórios.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O caminho absoluto começa na raiz; o relativo depende do diretório atual.
`,

    dicaBanca: `
A diferença entre caminho absoluto e relativo é tema clássico de concurso.
`
},

{
    pergunta: "Ao compartilhar uma pasta em rede, o administrador normalmente pode definir:",

    alternativas: [

        "Permissões de acesso para outros usuários.",

        "A velocidade do processador dos computadores conectados.",

        "A capacidade física do disco rígido.",

        "O tipo de memória RAM instalada.",

        "A frequência elétrica utilizada pela rede."

    ],

    correta: 0,

    feedbackAcerto: `
O compartilhamento geralmente envolve a definição de permissões de leitura, gravação ou controle total.
`,

    feedbackErro: `
A alternativa correta é a letra A.

Compartilhar pastas está relacionado ao controle de acesso aos dados.
`,

    dicaBanca: `
Permissões costumam aparecer associadas a leitura, gravação e modificação.
`
},

{
    pergunta: "Sobre arquivos compactados, assinale a alternativa correta.",

    alternativas: [

        "Todo arquivo compactado obrigatoriamente reduz seu tamanho pela metade.",

        "A compactação pode reduzir o tamanho de determinados arquivos, dependendo de seu conteúdo.",

        "Arquivos compactados não podem conter pastas.",

        "A compactação altera permanentemente o conteúdo do arquivo.",

        "Arquivos ZIP não podem ser descompactados."

    ],

    correta: 1,

    feedbackAcerto: `
O nível de compactação depende do tipo de dado armazenado.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Nem todo arquivo sofre a mesma redução de tamanho após a compactação.
`,

    dicaBanca: `
Arquivos já compactados costumam apresentar pouca redução adicional.
`
},

{
    pergunta: "Qual dispositivo abaixo normalmente oferece maior capacidade de armazenamento?",

    alternativas: [

        "Pendrive de 32 GB.",

        "Cartão SD de 64 GB.",

        "SSD de 1 TB.",

        "DVD de 4,7 GB.",

        "CD de 700 MB."

    ],

    correta: 2,

    feedbackAcerto: `
Entre as opções apresentadas, o SSD de 1 TB possui a maior capacidade.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Compare sempre as unidades antes de escolher a resposta.
`,

    dicaBanca: `
Questões desse tipo exigem atenção às unidades de medida.
`
},

{
    pergunta: "Quando um arquivo é renomeado, ocorre necessariamente:",

    alternativas: [

        "A alteração do seu conteúdo.",

        "A alteração de seu tamanho.",

        "A alteração apenas de sua identificação nominal.",

        "A exclusão da versão anterior.",

        "A mudança automática de extensão."

    ],

    correta: 2,

    feedbackAcerto: `
Renomear modifica apenas o nome do arquivo, não seu conteúdo.
`,

    feedbackErro: `
A alternativa correta é a letra C.

O conteúdo permanece inalterado após a renomeação.
`,

    dicaBanca: `
Trocar nome não significa converter nem modificar o arquivo.
`
},

{
    pergunta: "Sobre o armazenamento em nuvem, assinale a alternativa incorreta.",

    alternativas: [

        "Permite acesso aos arquivos a partir de diferentes dispositivos.",

        "Pode ser utilizado para sincronização de arquivos.",

        "Dispensa totalmente qualquer preocupação com segurança.",

        "Facilita compartilhamento de documentos.",

        "Pode exigir conexão com a internet para acesso remoto."

    ],

    correta: 2,

    feedbackAcerto: `
Mesmo em serviços de nuvem, continuam existindo preocupações relacionadas à segurança dos dados.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A nuvem não elimina riscos de segurança nem a necessidade de boas práticas.
`,

    dicaBanca: `
Questões com palavras como "sempre", "nunca" e "totalmente" costumam esconder pegadinhas.
`
},

{
    pergunta: "Assinale a alternativa que apresenta apenas dispositivos destinados ao armazenamento de dados.",

    alternativas: [

        "SSD, HD e Pendrive.",

        "Processador, SSD e HD.",

        "Memória RAM, Processador e SSD.",

        "Placa-mãe, HD e Monitor.",

        "Monitor, Teclado e SSD."

    ],

    correta: 0,

    feedbackAcerto: `
SSD, HD e Pendrive são dispositivos utilizados para armazenamento de dados.
`,

    feedbackErro: `
A alternativa correta é a letra A.

As demais opções misturam dispositivos de armazenamento com componentes de processamento ou periféricos.
`,

    dicaBanca: `
A banca adora misturar hardware de armazenamento com hardware de processamento.
`
},
{
    pergunta: "Em uma política de proteção de dados, o backup completo caracteriza-se por:",

    alternativas: [

        "Copiar apenas os arquivos modificados desde o último backup.",

        "Copiar apenas arquivos excluídos.",

        "Copiar todos os dados selecionados em cada execução.",

        "Copiar apenas arquivos do sistema operacional.",

        "Copiar exclusivamente arquivos compactados."

    ],

    correta: 2,

    feedbackAcerto: `
O backup completo realiza uma cópia integral de todos os dados selecionados, independentemente de alterações anteriores.
`,

    feedbackErro: `
A alternativa correta é a letra C.

No backup completo todos os arquivos são copiados novamente, mesmo que não tenham sofrido alterações.
`,

    dicaBanca: `
Backup completo = todos os dados.
`
},

{
    pergunta: "O backup incremental tem como principal característica:",

    alternativas: [

        "Copiar todos os arquivos existentes.",

        "Copiar apenas os arquivos alterados desde o último backup realizado.",

        "Copiar somente arquivos excluídos.",

        "Copiar apenas arquivos compactados.",

        "Copiar exclusivamente arquivos do usuário."

    ],

    correta: 1,

    feedbackAcerto: `
O backup incremental copia apenas os arquivos modificados desde o último backup, seja ele completo ou incremental.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O objetivo é reduzir tempo de execução e espaço de armazenamento.
`,

    dicaBanca: `
Incremental = desde o último backup.
`
},

{
    pergunta: "O backup diferencial copia:",

    alternativas: [

        "Todos os arquivos do sistema.",

        "Os arquivos alterados desde o último backup completo.",

        "Os arquivos alterados desde o último backup incremental.",

        "Somente arquivos ocultos.",

        "Apenas arquivos compactados."

    ],

    correta: 1,

    feedbackAcerto: `
O diferencial considera sempre como referência o último backup completo.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Essa é a principal diferença entre backup diferencial e incremental.
`,

    dicaBanca: `
Diferencial = desde o último backup completo.
`
},

{
    pergunta: "Assinale a alternativa que apresenta corretamente uma vantagem do backup incremental.",

    alternativas: [

        "Maior consumo de espaço em disco.",

        "Execução normalmente mais rápida e com menor volume de dados copiados.",

        "Dispensa qualquer backup completo.",

        "Possui recuperação mais simples que qualquer outro método.",

        "Não depende de backups anteriores."

    ],

    correta: 1,

    feedbackAcerto: `
Como apenas as alterações são copiadas, o backup incremental tende a ser mais rápido e econômico.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A principal vantagem do incremental é a eficiência na utilização de espaço e tempo.
`,

    dicaBanca: `
Incremental economiza tempo e armazenamento.
`
},

{
    pergunta: "Uma desvantagem típica do backup incremental durante a restauração é:",

    alternativas: [

        "Necessidade de recuperar apenas um único arquivo.",

        "Necessidade de utilizar o backup completo e todos os incrementais subsequentes.",

        "Impossibilidade de restaurar arquivos.",

        "Ausência de economia de espaço.",

        "Incompatibilidade com sistemas modernos."

    ],

    correta: 1,

    feedbackAcerto: `
A restauração exige o backup completo e todos os incrementais posteriores.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Quanto maior a cadeia de incrementais, mais complexa tende a ser a recuperação.
`,

    dicaBanca: `
Incremental = backup pequeno, restauração mais complexa.
`
},

{
    pergunta: "Uma organização executou um backup completo no domingo e backups diferenciais de segunda a sexta. Na sexta-feira, o backup diferencial conterá:",

    alternativas: [

        "Somente as alterações realizadas na sexta-feira.",

        "As alterações realizadas desde quinta-feira.",

        "As alterações realizadas desde o último backup completo.",

        "Apenas os arquivos novos.",

        "Todos os backups anteriores compactados."

    ],

    correta: 2,

    feedbackAcerto: `
O backup diferencial acumula todas as alterações desde o último backup completo.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Diferencial sempre aponta para o último backup completo.
`,

    dicaBanca: `
Diferencial cresce a cada dia até o próximo backup completo.
`
},

{
    pergunta: "Assinale a alternativa correta sobre a restauração de backups.",

    alternativas: [

        "A restauração serve apenas para arquivos excluídos.",

        "A restauração permite recuperar dados previamente armazenados em backup.",

        "A restauração elimina automaticamente os backups existentes.",

        "A restauração só pode ser realizada por administradores de rede.",

        "A restauração transforma arquivos em cópias compactadas."

    ],

    correta: 1,

    feedbackAcerto: `
A restauração é o processo de recuperação dos dados armazenados em backup.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O objetivo do backup é justamente possibilitar futura recuperação dos dados.
`,

    dicaBanca: `
Backup sem restauração não possui utilidade prática.
`
},

{
    pergunta: "Uma estratégia recomendada para proteção de dados consiste em:",

    alternativas: [

        "Manter apenas uma cópia dos dados no computador principal.",

        "Armazenar todas as cópias no mesmo disco físico.",

        "Manter múltiplas cópias dos dados em locais distintos.",

        "Realizar backup apenas após falhas do sistema.",

        "Evitar armazenamento externo."

    ],

    correta: 2,

    feedbackAcerto: `
Boas práticas recomendam múltiplas cópias armazenadas em locais diferentes.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Armazenar todas as cópias no mesmo local aumenta significativamente o risco de perda.
`,

    dicaBanca: `
A regra 3-2-1 aparece frequentemente em provas de informática.
`
},

{
    pergunta: "A chamada regra 3-2-1 de backup recomenda, entre outros aspectos:",

    alternativas: [

        "Três antivírus instalados simultaneamente.",

        "Três cópias dos dados, em dois tipos de mídia, sendo uma fora do local principal.",

        "Três usuários responsáveis pelo backup.",

        "Dois backups completos por dia e um diferencial.",

        "Uma única cópia armazenada em nuvem."

    ],

    correta: 1,

    feedbackAcerto: `
A regra 3-2-1 é uma das práticas mais conhecidas para proteção de dados.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Ela busca reduzir riscos de perda causados por falhas físicas ou desastres.
`,

    dicaBanca: `
3 cópias, 2 mídias diferentes, 1 cópia externa.
`
},

{
    pergunta: "A principal finalidade de um sistema de backup é:",

    alternativas: [

        "Aumentar a velocidade de processamento.",

        "Reduzir o consumo de energia elétrica.",

        "Permitir a recuperação de dados em caso de perda, corrupção ou exclusão.",

        "Substituir completamente os dispositivos de armazenamento.",

        "Eliminar a necessidade de segurança da informação."

    ],

    correta: 2,

    feedbackAcerto: `
O objetivo fundamental do backup é possibilitar a recuperação dos dados quando ocorrer algum incidente.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Backup está diretamente relacionado à disponibilidade e recuperação da informação.
`,

    dicaBanca: `
Quando aparecer "recuperação de dados", pense imediatamente em backup.
`
}

];