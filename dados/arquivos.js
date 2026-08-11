// ================================================
// FAROL DO SABER - ARQUIVOS, PASTAS E BACKUP
// Banco revisado para concursos de professor - Informática Básica
// 70 questões | 14 respostas por letra | nível difícil
// Foco: conceitos, Windows/Explorador, operações com arquivos e pastas,
// compactação, armazenamento/nuvem, backup, permissões e integridade.
// ================================================

const arquivos = [
    {
        "pergunta": "Em uma secretaria escolar, a equipe organiza ofícios, planilhas e imagens em diferentes pastas. Nesse contexto, um arquivo é corretamente entendido como:",
        "alternativas": [
            "um espaço físico do disco reservado de forma permanente para um único tipo de documento.",
            "uma pasta especial que reúne atalhos para programas instalados no computador do usuário.",
            "uma unidade lógica que armazena informações identificadas por um nome e, em muitos casos, por uma extensão.",
            "um conjunto de dispositivos de armazenamento que recebe automaticamente o mesmo nome.",
            "uma área temporária da memória usada para manter documentos enquanto o computador está ligado e sem depender do aplicativo usado para criar o documento."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Arquivo é uma unidade lógica de informação armazenada em um sistema. Ele pode conter texto, imagem, áudio, planilha, programa ou outros dados.",
        "feedbackErro": "A resposta correta é:\n\numa unidade lógica que armazena informações identificadas por um nome e, em muitos casos, por uma extensão.\n\nComentário:\nArquivo é uma unidade lógica de informação armazenada em um sistema. Ele pode conter texto, imagem, áudio, planilha, programa ou outros dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda conceito lógico de arquivo com o dispositivo físico em que ele está armazenado.",
        "assunto": "arquivos",
        "id": "arquivos_001",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um servidor recebeu os arquivos edital.pdf, notas.xlsx e lista.pdf. Considerando nome e extensão dos arquivos, assinale a afirmativa correta.",
        "alternativas": [
            "A extensão costuma indicar o formato do arquivo e pode ajudar o sistema a associá-lo a determinados aplicativos.",
            "Arquivos com a mesma extensão devem possuir o mesmo conteúdo e o mesmo tamanho.",
            "Alterar a extensão de um arquivo converte internamente seu conteúdo para o novo formato indicado inclusive quando o aplicativo associado ao novo nome é diferente.",
            "O nome localizado antes do ponto determina o programa que o Windows deverá usar para abrir o arquivo.",
            "Dois arquivos com extensões diferentes não podem permanecer armazenados dentro de uma mesma pasta."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! A extensão costuma identificar o formato ou tipo do arquivo e auxilia a associação com aplicativos, mas não garante conteúdo ou tamanho iguais.",
        "feedbackErro": "A resposta correta é:\n\nA extensão costuma indicar o formato do arquivo e pode ajudar o sistema a associá-lo a determinados aplicativos.\n\nComentário:\nA extensão costuma identificar o formato ou tipo do arquivo e auxilia a associação com aplicativos, mas não garante conteúdo ou tamanho iguais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Extensão indica formato; ela não é sinônimo de conteúdo e sua simples troca não realiza conversão.",
        "assunto": "arquivos",
        "id": "arquivos_002",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um usuário renomeou relatorio.pdf para relatorio.docx apenas pelo Explorador de Arquivos, sem utilizar qualquer conversor. O efeito esperado é que:",
        "alternativas": [
            "o conteúdo seja convertido para o formato do Word, preservando automaticamente todos os elementos do PDF.",
            "o arquivo passe a ter duas extensões internas e seja aberto simultaneamente como PDF e documento do Word.",
            "o sistema crie uma segunda cópia no novo formato e mantenha o arquivo PDF original na mesma pasta.",
            "a alteração seja impedida porque sistemas operacionais não permitem modificar extensões de arquivos existentes.",
            "apenas a identificação externa seja alterada, podendo o conteúdo continuar incompatível com a nova extensão."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Trocar manualmente a extensão altera o nome do arquivo, não o formato interno dos dados. Por isso, o arquivo pode deixar de abrir corretamente no aplicativo associado.",
        "feedbackErro": "A resposta correta é:\n\napenas a identificação externa seja alterada, podendo o conteúdo continuar incompatível com a nova extensão.\n\nComentário:\nTrocar manualmente a extensão altera o nome do arquivo, não o formato interno dos dados. Por isso, o arquivo pode deixar de abrir corretamente no aplicativo associado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Conversão de formato exige salvar/exportar ou usar ferramenta apropriada; renomear não converte.",
        "assunto": "arquivos",
        "id": "arquivos_003",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Na pasta Documentos já existe o arquivo Ata.pdf. Um usuário tenta salvar outro arquivo também com o nome Ata.pdf na mesma pasta. Em condições normais, o sistema deverá:",
        "alternativas": [
            "armazenar os dois arquivos com nomes idênticos e diferenciá-los apenas pela data de criação registrada.",
            "exigir alguma forma de diferenciação, como substituir o existente ou usar outro nome para o novo arquivo.",
            "aceitar o segundo arquivo desde que ele tenha tamanho diferente daquele que já se encontra na pasta.",
            "manter os dois arquivos porque o conteúdo interno é usado como identificador principal no sistema operacional.",
            "converter automaticamente o arquivo mais antigo em atalho para impedir conflito entre nomes iguais."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Na mesma pasta, dois arquivos não podem coexistir com exatamente o mesmo nome e a mesma extensão. É necessário renomear, substituir ou escolher outro local.",
        "feedbackErro": "A resposta correta é:\n\nexigir alguma forma de diferenciação, como substituir o existente ou usar outro nome para o novo arquivo.\n\nComentário:\nNa mesma pasta, dois arquivos não podem coexistir com exatamente o mesmo nome e a mesma extensão. É necessário renomear, substituir ou escolher outro local.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A pegadinha costuma misturar nome, extensão e conteúdo: o conflito ocorre pela identificação do item dentro da mesma pasta.",
        "assunto": "arquivos",
        "id": "arquivos_004",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Ao consultar as propriedades de um documento no sistema operacional, é possível encontrar informações como:",
        "alternativas": [
            "apenas o programa que criou o documento e a senha usada para protegê-lo contra alterações.",
            "o conteúdo textual, pois tamanho e datas pertencem às propriedades da pasta.",
            "a extensão visível, porque localização e tamanho são informações do dispositivo físico e são exibidas da mesma forma para qualquer tipo de documento armazenado.",
            "nome, tipo, tamanho, localização e datas relacionadas ao arquivo, entre outras propriedades disponíveis.",
            "apenas a data de criação, já que outros metadados não são associados a arquivos comuns."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! As propriedades de um arquivo podem exibir nome, tipo, tamanho, localização, datas e outros metadados, conforme o sistema e o formato.",
        "feedbackErro": "A resposta correta é:\n\nnome, tipo, tamanho, localização e datas relacionadas ao arquivo, entre outras propriedades disponíveis.\n\nComentário:\nAs propriedades de um arquivo podem exibir nome, tipo, tamanho, localização, datas e outros metadados, conforme o sistema e o formato.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Questões de prova costumam diferenciar conteúdo do arquivo das informações descritivas sobre ele.",
        "assunto": "arquivos",
        "id": "arquivos_005",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma escola precisa distribuir um documento mantendo, tanto quanto possível, a mesma aparência em computadores diferentes e dificultando alterações acidentais de layout. Entre os formatos abaixo, o mais apropriado é:",
        "alternativas": [
            "TXT, porque mantém fontes, tabelas, imagens e paginação exatamente como no documento original.",
            "PDF, por ser amplamente usado para preservar a apresentação do documento entre diferentes ambientes.",
            "CSV, porque preserva formatação de texto, imagens e estilos complexos em qualquer programa de leitura.",
            "EXE, porque encapsula o documento e garante abertura segura em qualquer sistema operacional existente.",
            "BMP, porque converte automaticamente todas as páginas em texto pesquisável sem alterar a diagramação."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! O PDF é amplamente usado para distribuição de documentos quando se deseja preservar apresentação e paginação com boa compatibilidade entre ambientes.",
        "feedbackErro": "A resposta correta é:\n\nPDF, por ser amplamente usado para preservar a apresentação do documento entre diferentes ambientes.\n\nComentário:\nO PDF é amplamente usado para distribuição de documentos quando se deseja preservar apresentação e paginação com boa compatibilidade entre ambientes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Observe a finalidade do formato: PDF é documento; CSV é dado tabular; TXT é texto simples; EXE é executável.",
        "assunto": "arquivos",
        "id": "arquivos_006",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma planilha foi exportada para CSV para integração com outro sistema. Sobre esse formato, assinale a alternativa correta.",
        "alternativas": [
            "O CSV preserva fórmulas, gráficos, macros, cores e múltiplas planilhas da pasta de trabalho original.",
            "O CSV é um formato de imagem vetorial destinado a representar visualmente tabelas sem permitir leitura dos dados mesmo quando o arquivo foi criado originalmente em um editor de planilhas.",
            "O CSV funciona como arquivo compactado que reúne várias planilhas completas dentro de um único pacote criptografado.",
            "O CSV é um documento de texto formatado que mantém fontes, margens, cabeçalhos e paginação.",
            "O CSV armazena dados tabulares em texto, normalmente separados por delimitadores, sem preservar todos os recursos da planilha."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! CSV é um formato textual muito usado para troca de dados tabulares. Em geral, não preserva fórmulas, gráficos, formatação e outros recursos avançados de uma planilha.",
        "feedbackErro": "A resposta correta é:\n\nO CSV armazena dados tabulares em texto, normalmente separados por delimitadores, sem preservar todos os recursos da planilha.\n\nComentário:\nCSV é um formato textual muito usado para troca de dados tabulares. Em geral, não preserva fórmulas, gráficos, formatação e outros recursos avançados de uma planilha.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em prova, diferencie o dado tabular do conjunto completo de recursos de Excel ou Calc.",
        "assunto": "arquivos",
        "id": "arquivos_007",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um candidato recebe por e-mail os arquivos prova.pdf.exe e gabarito.pdf. Se o Windows estiver configurado para ocultar extensões conhecidas, qual prática é mais segura antes de abrir o primeiro arquivo?",
        "alternativas": [
            "Considerar o arquivo seguro porque “.pdf” aparece no nome e indica o formato que o remetente pretendeu informar.",
            "Renomear o arquivo apagando “.exe”, pois essa alteração transforma o executável em PDF legítimo.",
            "Exibir as extensões completas e verificar o tipo real do arquivo antes de executá-lo ou abri-lo.",
            "Mover o arquivo para outra pasta, pois a mudança de localização impede a execução de conteúdo malicioso.",
            "Compactar o arquivo em ZIP, porque a compactação neutraliza automaticamente qualquer código executável existente."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Um nome pode conter vários pontos. A extensão efetiva é decisiva para identificar o tipo aparente do arquivo; exibir extensões ajuda a perceber arquivos executáveis disfarçados.",
        "feedbackErro": "A resposta correta é:\n\nExibir as extensões completas e verificar o tipo real do arquivo antes de executá-lo ou abri-lo.\n\nComentário:\nUm nome pode conter vários pontos. A extensão efetiva é decisiva para identificar o tipo aparente do arquivo; exibir extensões ajuda a perceber arquivos executáveis disfarçados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Desconfie de nomes com dupla extensão. Renomear ou compactar não torna um executável automaticamente seguro.",
        "assunto": "arquivos",
        "id": "arquivos_008",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Em relação aos formatos de imagem, assinale a alternativa que apresenta uma associação adequada entre formato e característica.",
        "alternativas": [
            "PNG é frequentemente utilizado quando se deseja preservar transparência e qualidade sem compressão com perdas típica do JPEG.",
            "JPEG é indicado para qualquer imagem que exija transparência total e compressão sem perdas em todos os casos inclusive em fotografias e elementos gráficos usados em páginas da Web.",
            "BMP é um formato de documento paginado criado principalmente para preservar fontes e textos entre sistemas.",
            "GIF é um formato de planilha que armazena fórmulas, filtros, referências e múltiplas abas de dados.",
            "PDF é um formato raster exclusivo de fotografias e não pode conter texto pesquisável ou elementos vetoriais."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! PNG é muito usado em imagens que precisam de transparência e utiliza compressão sem perdas. JPEG costuma priorizar redução de tamanho em fotografias com compressão com perdas.",
        "feedbackErro": "A resposta correta é:\n\nPNG é frequentemente utilizado quando se deseja preservar transparência e qualidade sem compressão com perdas típica do JPEG.\n\nComentário:\nPNG é muito usado em imagens que precisam de transparência e utiliza compressão sem perdas. JPEG costuma priorizar redução de tamanho em fotografias com compressão com perdas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Associe o formato à finalidade mais típica, sem transformar uma característica comum em regra absoluta.",
        "assunto": "arquivos",
        "id": "arquivos_009",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Durante a execução de um aplicativo, surgem arquivos com extensão .tmp. A interpretação mais adequada é que esses arquivos:",
        "alternativas": [
            "são cópias completas de segurança e podem substituir qualquer política formal de backup da organização.",
            "são imagens temporárias que precisam ser convertidas para PNG antes do encerramento do programa.",
            "são executáveis do Windows criados para instalar atualizações e devem ser abertos manualmente pelo usuário durante operações comuns de instalação, atualização e execução de aplicativos.",
            "costumam armazenar dados temporários de programas ou do sistema e não devem ser tratados automaticamente como arquivos finais.",
            "são documentos finais sem extensão definida, cabendo ao usuário escolher o formato adequado depois."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Arquivos .tmp costumam ser temporários e podem surgir durante instalação, edição, download ou execução de programas.",
        "feedbackErro": "A resposta correta é:\n\ncostumam armazenar dados temporários de programas ou do sistema e não devem ser tratados automaticamente como arquivos finais.\n\nComentário:\nArquivos .tmp costumam ser temporários e podem surgir durante instalação, edição, download ou execução de programas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "“Temporário” não significa “sempre seguro para apagar naquele instante”; observe o contexto do programa em uso.",
        "assunto": "arquivos",
        "id": "arquivos_010",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma escola organiza seus documentos em Documentos\\2026\\Conselho\\Atas. Essa organização exemplifica:",
        "alternativas": [
            "um banco de dados relacional, porque cada pasta funciona como uma tabela vinculada ao diretório anterior.",
            "uma estrutura linear, pois cada arquivo só pode ser acessado percorrendo todos os diretórios do computador.",
            "uma estrutura linear em que a localização dos arquivos depende da sequência de diretórios apresentada ao usuário.",
            "uma estrutura hierárquica de pastas e subpastas, na qual cada nível pode conter arquivos e outros diretórios.",
            "uma coleção de atalhos, porque diretórios não armazenam arquivos diretamente e apenas apontam para outros locais."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Pastas e subpastas formam uma estrutura hierárquica, normalmente representada como árvore de diretórios.",
        "feedbackErro": "A resposta correta é:\n\numa estrutura hierárquica de pastas e subpastas, na qual cada nível pode conter arquivos e outros diretórios.\n\nComentário:\nPastas e subpastas formam uma estrutura hierárquica, normalmente representada como árvore de diretórios.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Hierarquia de pastas é organização lógica; não significa partição física nem banco de dados.",
        "assunto": "arquivos",
        "id": "arquivos_011",
        "subtopico": "pastas_caminhos_links",
        "nivel": "dificil"
    },
    {
        "pergunta": "Considere o caminho C:\\Usuarios\\Professor\\Documentos\\Plano.docx. Nesse caminho, é correto afirmar que:",
        "alternativas": [
            "Plano.docx representa uma pasta e Documentos representa a extensão usada para identificar seu formato.",
            "C: identifica a unidade, os nomes intermediários representam pastas e Plano.docx identifica o arquivo ao final do caminho.",
            "Professor é o nome do computador, enquanto Usuarios representa o dispositivo físico de armazenamento dentro da estrutura de diretórios exibida pelo Explorador de Arquivos.",
            "cada barra invertida separa versões diferentes do mesmo arquivo armazenadas automaticamente pelo sistema operacional.",
            "o caminho é relativo porque começa com a letra da unidade e depende da pasta atualmente aberta pelo usuário."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Em um caminho como C:\\Usuarios\\Professor\\Documentos\\Plano.docx, C: indica a unidade; os elementos intermediários são diretórios; e o último item é o arquivo.",
        "feedbackErro": "A resposta correta é:\n\nC: identifica a unidade, os nomes intermediários representam pastas e Plano.docx identifica o arquivo ao final do caminho.\n\nComentário:\nEm um caminho como C:\\Usuarios\\Professor\\Documentos\\Plano.docx, C: indica a unidade; os elementos intermediários são diretórios; e o último item é o arquivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Um caminho iniciado pela unidade e pela estrutura desde a raiz é um exemplo de caminho absoluto no Windows.",
        "assunto": "arquivos",
        "id": "arquivos_012",
        "subtopico": "pastas_caminhos_links",
        "nivel": "dificil"
    },
    {
        "pergunta": "Sobre caminho absoluto e caminho relativo, assinale a alternativa correta.",
        "alternativas": [
            "O absoluto identifica a localização a partir de uma referência completa; o relativo é interpretado a partir de um diretório de referência.",
            "O caminho relativo começa pela letra da unidade, enquanto o absoluto depende da pasta em que o usuário se encontra para identificar o item em qualquer diretório aberto pelo usuário.",
            "O caminho absoluto só pode indicar pastas, ao passo que o relativo é reservado para arquivos individuais.",
            "Os dois conceitos são equivalentes no Windows, variando apenas a forma como o Explorador exibe barras e nomes de pastas.",
            "O relativo contém o nome do usuário, enquanto o absoluto omite qualquer identificação de unidade ou raiz."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Caminho absoluto parte de uma referência completa, como a raiz ou unidade. Caminho relativo depende do diretório de referência atual.",
        "feedbackErro": "A resposta correta é:\n\nO absoluto identifica a localização a partir de uma referência completa; o relativo é interpretado a partir de um diretório de referência.\n\nComentário:\nCaminho absoluto parte de uma referência completa, como a raiz ou unidade. Caminho relativo depende do diretório de referência atual.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não associe “absoluto” a tamanho do caminho; a diferença está no ponto de referência usado para localizar o item.",
        "assunto": "arquivos",
        "id": "arquivos_013",
        "subtopico": "pastas_caminhos_links",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um professor copia o arquivo notas.xlsx de Documentos para uma pasta chamada Arquivo_Mensal, mantendo o original. Após a operação, em condições normais:",
        "alternativas": [
            "o arquivo passa a existir apenas na pasta de destino, pois copiar e mover produzem o mesmo resultado lógico.",
            "o arquivo de origem é convertido em atalho, enquanto os dados são transferidos integralmente para o destino.",
            "o sistema mantém uma referência única e faz as duas pastas apontarem para o mesmo conteúdo físico.",
            "o conteúdo é dividido entre as duas pastas e a abertura simultânea permite reconstruir o documento completo.",
            "existem uma origem e uma cópia no destino, que podem ser alteradas de forma independente após a operação."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Copiar mantém o item original e cria uma cópia no destino. Depois disso, alterações em uma cópia comum não são automaticamente refletidas na outra.",
        "feedbackErro": "A resposta correta é:\n\nexistem uma origem e uma cópia no destino, que podem ser alteradas de forma independente após a operação.\n\nComentário:\nCopiar mantém o item original e cria uma cópia no destino. Depois disso, alterações em uma cópia comum não são automaticamente refletidas na outra.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em concurso, compare o efeito final de copiar e mover, não apenas o atalho de teclado usado.",
        "assunto": "arquivos",
        "id": "arquivos_014",
        "subtopico": "operacoes_lixeira_atributos",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Windows, um usuário usa Recortar e Colar para transferir um arquivo de uma pasta para outra. Concluída a operação com sucesso, o resultado pretendido é:",
        "alternativas": [
            "manter duas cópias idênticas e sincronizadas, uma na origem e outra no destino escolhido.",
            "criar apenas um atalho no destino, preservando todos os dados na pasta de origem.",
            "mudar a localização do item, deixando-o no destino e retirando-o da origem ao final da operação.",
            "compactar o arquivo durante a transferência para economizar espaço na unidade de armazenamento utilizada.",
            "alterar apenas o nome do arquivo, sem modificar a pasta em que os dados se encontram armazenados."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Recortar e Colar é usado para mover o item: o objetivo final é que ele deixe a origem e passe a existir no destino.",
        "feedbackErro": "A resposta correta é:\n\nmudar a localização do item, deixando-o no destino e retirando-o da origem ao final da operação.\n\nComentário:\nRecortar e Colar é usado para mover o item: o objetivo final é que ele deixe a origem e passe a existir no destino.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Ctrl+X prepara a movimentação; a remoção efetiva da origem ocorre quando a operação de colagem é concluída.",
        "assunto": "arquivos",
        "id": "arquivos_015",
        "subtopico": "operacoes_lixeira_atributos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um arquivo foi selecionado no Explorador de Arquivos e o usuário pressionou Delete. Considerando o comportamento padrão para um arquivo local elegível à Lixeira, o sistema tende a:",
        "alternativas": [
            "apagar imediatamente os dados sem possibilidade de recuperação pela própria interface do Windows.",
            "apagar o item diretamente e remover também sua referência de recuperação disponível na interface do sistema.",
            "mover o item para a pasta Downloads, que funciona como área intermediária para exclusões realizadas pelo teclado.",
            "marcar o arquivo como leitura e solicitar nova confirmação quando o computador for reiniciado.",
            "enviar o item para a Lixeira, permitindo eventual restauração enquanto ele permanecer disponível nesse local."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! No comportamento padrão, Delete envia arquivos locais elegíveis à Lixeira. Isso possibilita restauração enquanto o item não for removido definitivamente.",
        "feedbackErro": "A resposta correta é:\n\nenviar o item para a Lixeira, permitindo eventual restauração enquanto ele permanecer disponível nesse local.\n\nComentário:\nNo comportamento padrão, Delete envia arquivos locais elegíveis à Lixeira. Isso possibilita restauração enquanto o item não for removido definitivamente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A questão pode mudar se citar Shift+Delete, unidade de rede, mídia específica ou exclusão definitiva.",
        "assunto": "arquivos",
        "id": "arquivos_016",
        "subtopico": "operacoes_lixeira_atributos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um usuário precisa excluir um arquivo sem enviá-lo à Lixeira. No Windows, a combinação tradicionalmente associada a essa ação é:",
        "alternativas": [
            "Ctrl + Delete, que excluiria o item selecionado e esvaziaria também a Lixeira associada ao usuário atual.",
            "Alt + Delete, que remove o arquivo e cria uma cópia de recuperação na pasta Documentos.",
            "Shift + Delete, que solicita a exclusão do item selecionado sem encaminhá-lo à Lixeira.",
            "Ctrl + Shift + V, que exclui o item após copiar seu caminho completo para a Área de Transferência.",
            "Windows + Delete, que marca o arquivo para exclusão definitiva apenas na próxima reinicialização."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Shift + Delete é o atalho clássico para excluir sem encaminhar o item à Lixeira.",
        "feedbackErro": "A resposta correta é:\n\nShift + Delete, que solicita a exclusão do item selecionado sem encaminhá-lo à Lixeira.\n\nComentário:\nShift + Delete é o atalho clássico para excluir sem encaminhar o item à Lixeira.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda exclusão sem Lixeira com “impossibilidade absoluta de recuperação” por qualquer técnica especializada.",
        "assunto": "arquivos",
        "id": "arquivos_017",
        "subtopico": "operacoes_lixeira_atributos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um documento foi excluído e ainda está disponível na Lixeira. Ao escolher Restaurar, o comportamento esperado é:",
        "alternativas": [
            "enviar o documento para a pasta Documentos, independentemente de onde ele estava armazenado anteriormente.",
            "recolocar o item em sua localização original, desde que o destino necessário continue disponível.",
            "criar uma segunda cópia na Área de Trabalho e preservar a versão excluída dentro da Lixeira para segurança.",
            "converter o arquivo em atalho e manter os dados físicos dentro da estrutura reservada à Lixeira do sistema.",
            "abrir uma janela para o usuário escolher uma nova extensão antes de recuperar o documento."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! A restauração pela Lixeira normalmente devolve o arquivo à localização de onde ele foi excluído.",
        "feedbackErro": "A resposta correta é:\n\nrecolocar o item em sua localização original, desde que o destino necessário continue disponível.\n\nComentário:\nA restauração pela Lixeira normalmente devolve o arquivo à localização de onde ele foi excluído.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "“Restaurar” não significa “salvar em Documentos”; pense na origem original do item.",
        "assunto": "arquivos",
        "id": "arquivos_018",
        "subtopico": "operacoes_lixeira_atributos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Ao renomear Projeto_1.docx para Projeto_Final.docx sem alterar o conteúdo nem a extensão, o usuário:",
        "alternativas": [
            "cria uma cópia nova e mantém automaticamente Projeto_1.docx disponível na mesma pasta como versão anterior.",
            "altera o formato interno do documento porque qualquer mudança no nome modifica a estrutura binária do arquivo.",
            "move o documento para outra pasta, pois o sistema interpreta um novo nome como nova localização lógica.",
            "altera a identificação nominal do arquivo, preservando normalmente seu conteúdo e seu formato.",
            "faz o sistema compactar o arquivo, pois nomes maiores são armazenados por meio de referência abreviada."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Renomear muda o nome do item. Se a extensão e o conteúdo não forem alterados, o formato e os dados permanecem os mesmos.",
        "feedbackErro": "A resposta correta é:\n\naltera a identificação nominal do arquivo, preservando normalmente seu conteúdo e seu formato.\n\nComentário:\nRenomear muda o nome do item. Se a extensão e o conteúdo não forem alterados, o formato e os dados permanecem os mesmos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Se a questão disser que a extensão também foi modificada, analise separadamente nome e formato interno.",
        "assunto": "arquivos",
        "id": "arquivos_019",
        "subtopico": "operacoes_lixeira_atributos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um arquivo possui o atributo “Somente leitura”. Em uma questão de informática básica, a interpretação mais adequada é:",
        "alternativas": [
            "o atributo sinaliza restrição à gravação de alterações no arquivo, sem significar necessariamente bloqueio total de leitura ou cópia.",
            "o arquivo fica invisível no Explorador e só pode ser localizado com pesquisa pelo nome completo.",
            "o conteúdo passa a ser criptografado e exige senha de administrador para qualquer tentativa de abertura.",
            "o sistema duplica automaticamente o documento antes de permitir que algum aplicativo faça sua leitura.",
            "o arquivo fica impedido de ser copiado, movido ou enviado por e-mail enquanto o atributo estiver ativo enquanto o atributo permanecer marcado nas propriedades do documento."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! “Somente leitura” está ligado à gravação/modificação do arquivo. Não significa ocultar, criptografar ou impedir automaticamente cópia e leitura.",
        "feedbackErro": "A resposta correta é:\n\no atributo sinaliza restrição à gravação de alterações no arquivo, sem significar necessariamente bloqueio total de leitura ou cópia.\n\nComentário:\n“Somente leitura” está ligado à gravação/modificação do arquivo. Não significa ocultar, criptografar ou impedir automaticamente cópia e leitura.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Distratores costumam misturar atributos diferentes: somente leitura, oculto, criptografado e permissões de acesso.",
        "assunto": "arquivos",
        "id": "arquivos_020",
        "subtopico": "operacoes_lixeira_atributos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um arquivo foi marcado com o atributo “Oculto” e o Explorador está na configuração padrão que não mostra itens ocultos. Nesse cenário, o arquivo:",
        "alternativas": [
            "continua existindo, mas pode deixar de ser exibido normalmente até que a visualização de itens ocultos seja habilitada.",
            "é removido do dispositivo e permanece apenas como referência de recuperação dentro da Lixeira do Windows.",
            "é automaticamente criptografado pelo sistema para impedir que outros usuários leiam seu conteúdo armazenado.",
            "passa a ocupar espaço apenas na memória RAM e retorna ao disco quando a opção de exibição for modificada.",
            "fica inacessível a qualquer aplicativo, pois ocultar um item equivale a revogar todas as permissões de leitura mesmo quando um programa conhece diretamente o caminho completo do item."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O atributo Oculto afeta principalmente a exibição do item conforme as configurações do Explorador; não apaga nem criptografa o arquivo.",
        "feedbackErro": "A resposta correta é:\n\ncontinua existindo, mas pode deixar de ser exibido normalmente até que a visualização de itens ocultos seja habilitada.\n\nComentário:\nO atributo Oculto afeta principalmente a exibição do item conforme as configurações do Explorador; não apaga nem criptografa o arquivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "“Oculto” é característica de visibilidade, não de segurança forte contra acesso.",
        "assunto": "arquivos",
        "id": "arquivos_021",
        "subtopico": "operacoes_lixeira_atributos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um atalho para o arquivo Plano.pdf foi colocado na Área de Trabalho. Sobre a relação entre o atalho e o arquivo original, assinale a correta.",
        "alternativas": [
            "O atalho é uma cópia integral do arquivo e ocupa, por definição, o mesmo espaço que o documento original.",
            "A abertura do atalho transfere definitivamente o arquivo original para a Área de Trabalho antes de exibi-lo.",
            "O atalho mantém uma versão independente e sincroniza alterações com o original que o computador é desligado.",
            "O atalho referencia o destino; excluir apenas o atalho não apaga o arquivo original para o qual ele apontava.",
            "O atalho substitui o nome real do arquivo e impede que o destino seja aberto diretamente pela pasta de origem."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Atalho é uma referência para um destino. Excluir o atalho, por si só, não exclui o arquivo original.",
        "feedbackErro": "A resposta correta é:\n\nO atalho referencia o destino; excluir apenas o atalho não apaga o arquivo original para o qual ele apontava.\n\nComentário:\nAtalho é uma referência para um destino. Excluir o atalho, por si só, não exclui o arquivo original.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Questões de concurso exploram a diferença entre referência e cópia física do conteúdo.",
        "assunto": "arquivos",
        "id": "arquivos_022",
        "subtopico": "pastas_caminhos_links",
        "nivel": "dificil"
    },
    {
        "pergunta": "O arquivo original associado a um atalho foi movido ou excluído, e o atalho não conseguiu localizar o destino. Isso ocorre porque:",
        "alternativas": [
            "o atalho contém uma cópia completa, mas depende da Lixeira para descriptografar os dados armazenados no destino original.",
            "o Windows bloqueia atalhos que o arquivo muda de data, mesmo que seu caminho permaneça exatamente o mesmo.",
            "o atalho depende de uma referência ao destino e pode deixar de funcionar quando essa referência deixa de ser válida.",
            "o sistema converte o atalho em arquivo temporário assim que detecta que o documento original não está aberto em memória.",
            "o atalho só funciona com arquivos executáveis e perde validade quando aponta para documentos, pastas ou outros recursos."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Atalhos dependem de uma referência ao destino. Se o alvo for removido ou a referência não puder ser resolvida, o atalho pode deixar de funcionar.",
        "feedbackErro": "A resposta correta é:\n\no atalho depende de uma referência ao destino e pode deixar de funcionar quando essa referência deixa de ser válida.\n\nComentário:\nAtalhos dependem de uma referência ao destino. Se o alvo for removido ou a referência não puder ser resolvida, o atalho pode deixar de funcionar.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não trate atalho como backup: ele não guarda uma cópia independente do conteúdo original.",
        "assunto": "arquivos",
        "id": "arquivos_023",
        "subtopico": "pastas_caminhos_links",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um usuário cria a estrutura Escola\\Turmas\\2026 e depois move a pasta 2026 para dentro de Arquivo. Qual afirmação descreve melhor a operação?",
        "alternativas": [
            "Os arquivos internos são convertidos em atalhos porque uma pasta que contém documentos não pode ser movida como unidade lógica.",
            "o nome “2026” é movido; os arquivos e subpastas permanecem na estrutura anterior até nova operação.",
            "A pasta é copiada para Arquivo e a original precisa ser apagada manualmente, pois sistemas operacionais não movem diretórios.",
            "o sistema cria uma partição chamada Arquivo para acomodar a pasta e evitar alteração de caminhos dos documentos existentes.",
            "a estrutura contida em 2026 acompanha a pasta na movimentação, preservadas as relações internas entre seus itens."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Ao mover uma pasta, seus arquivos e subpastas acompanham a estrutura, embora o caminho absoluto desses itens possa mudar.",
        "feedbackErro": "A resposta correta é:\n\na estrutura contida em 2026 acompanha a pasta na movimentação, preservadas as relações internas entre seus itens.\n\nComentário:\nAo mover uma pasta, seus arquivos e subpastas acompanham a estrutura, embora o caminho absoluto desses itens possa mudar.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Pense na pasta como um contêiner lógico: mover o contêiner desloca a árvore abaixo dele.",
        "assunto": "arquivos",
        "id": "arquivos_024",
        "subtopico": "pastas_caminhos_links",
        "nivel": "dificil"
    },
    {
        "pergunta": "Em uma pesquisa no Explorador de Arquivos, o usuário deseja localizar documentos PDF sem saber o nome exato de cada um. Uma estratégia coerente é:",
        "alternativas": [
            "alterar todos os arquivos da pasta para o mesmo nome antes de iniciar a pesquisa pelo conteúdo armazenado.",
            "usar um critério relacionado ao tipo ou à extensão .pdf, combinando-o com outros filtros se necessário.",
            "converter a pasta em ZIP, pois a pesquisa do sistema só reconhece extensões dentro de arquivos compactados.",
            "usar apenas a data do sistema, porque a extensão não pode ser utilizada como critério de localização de arquivos.",
            "abrir a Lixeira e restaurar os documentos, já que a busca por tipo de arquivo depende de histórico de exclusão."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Pesquisas podem usar nome, extensão/tipo, data e outros critérios, dependendo do sistema. A extensão é útil quando o nome exato é desconhecido.",
        "feedbackErro": "A resposta correta é:\n\nusar um critério relacionado ao tipo ou à extensão .pdf, combinando-o com outros filtros se necessário.\n\nComentário:\nPesquisas podem usar nome, extensão/tipo, data e outros critérios, dependendo do sistema. A extensão é útil quando o nome exato é desconhecido.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em prova prática, identifique qual dado o usuário conhece e qual filtro ajuda a reduzir os resultados.",
        "assunto": "arquivos",
        "id": "arquivos_025",
        "subtopico": "pastas_caminhos_links",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma pasta contém vários documentos que precisam ser enviados juntos por um serviço que aceita um único arquivo. Uma solução adequada é:",
        "alternativas": [
            "renomear a pasta com extensão .pdf, fazendo com que todos os documentos internos sejam convertidos em um único PDF.",
            "marcar os documentos como ocultos, pois itens ocultos são automaticamente agrupados pelo sistema durante o envio.",
            "compactar a pasta em um arquivo como ZIP, preservando os itens para posterior extração pelo destinatário.",
            "criar atalhos para os documentos e enviar apenas os atalhos, que transportam também o conteúdo dos arquivos originais.",
            "mover todos os arquivos para a Lixeira e restaurá-los no destino, processo que substitui a necessidade de compactação."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! ZIP pode reunir vários arquivos e pastas em um único pacote, que posteriormente pode ser extraído pelo destinatário.",
        "feedbackErro": "A resposta correta é:\n\ncompactar a pasta em um arquivo como ZIP, preservando os itens para posterior extração pelo destinatário.\n\nComentário:\nZIP pode reunir vários arquivos e pastas em um único pacote, que posteriormente pode ser extraído pelo destinatário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Compactar não é o mesmo que converter formatos ou criar atalhos para os arquivos.",
        "assunto": "arquivos",
        "id": "arquivos_026",
        "subtopico": "compactacao_midias_imagens",
        "nivel": "dificil"
    },
    {
        "pergunta": "Dois conjuntos de arquivos são compactados com o mesmo método: um contém textos sem compactação anterior e outro contém vídeos já fortemente comprimidos. É razoável esperar que:",
        "alternativas": [
            "ambos apresentem redução idêntica porque qualquer arquivo ZIP diminui o tamanho pela mesma proporção.",
            "o conjunto de vídeos reduza mais, pois arquivos maiores possuem necessariamente mais informações redundantes para remover quando os dois conjuntos são submetidos ao mesmo método de compactação.",
            "nenhum deles possa ser compactado, porque ZIP funciona apenas com pastas vazias ou arquivos executáveis do sistema.",
            "a compactação transforme os arquivos de vídeo em texto binário e os documentos em imagens para equalizar os tamanhos finais.",
            "o conjunto de textos possa reduzir mais, enquanto arquivos já comprimidos podem apresentar ganho pequeno de compactação adicional."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! A taxa de compressão depende do conteúdo. Dados com redundância tendem a comprimir melhor; formatos já comprimidos podem ter pouco ganho adicional.",
        "feedbackErro": "A resposta correta é:\n\no conjunto de textos possa reduzir mais, enquanto arquivos já comprimidos podem apresentar ganho pequeno de compactação adicional.\n\nComentário:\nA taxa de compressão depende do conteúdo. Dados com redundância tendem a comprimir melhor; formatos já comprimidos podem ter pouco ganho adicional.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não aceite afirmações de redução fixa: compactação não produz a mesma economia para todos os tipos de arquivo.",
        "assunto": "arquivos",
        "id": "arquivos_027",
        "subtopico": "compactacao_midias_imagens",
        "nivel": "dificil"
    },
    {
        "pergunta": "Ao extrair corretamente um arquivo ZIP que contém subpastas e documentos, o usuário espera:",
        "alternativas": [
            "obter os itens contidos no pacote, podendo preservar a estrutura de pastas criada no momento da compactação.",
            "apagar o ZIP automaticamente e manter apenas atalhos para os arquivos que estavam armazenados dentro dele.",
            "converter todos os documentos internos para o formato usado pelo aplicativo padrão instalado no computador.",
            "executar os arquivos internos durante a extração para validar se cada item pode ser aberto no computador de destino.",
            "mover o conteúdo para a Lixeira temporariamente e restaurá-lo em seguida no diretório escolhido para a extração."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Extrair significa recuperar os arquivos e pastas contidos no pacote compactado. A estrutura interna pode ser preservada.",
        "feedbackErro": "A resposta correta é:\n\nobter os itens contidos no pacote, podendo preservar a estrutura de pastas criada no momento da compactação.\n\nComentário:\nExtrair significa recuperar os arquivos e pastas contidos no pacote compactado. A estrutura interna pode ser preservada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Extração não implica execução automática dos arquivos nem conversão de seus formatos.",
        "assunto": "arquivos",
        "id": "arquivos_028",
        "subtopico": "compactacao_midias_imagens",
        "nivel": "dificil"
    },
    {
        "pergunta": "Em uma compactação “sem perdas”, a característica essencial é:",
        "alternativas": [
            "o arquivo compactado ocupar menos da metade do espaço original, independentemente do tipo de dado armazenado.",
            "o conteúdo visual sofrer pequenas alterações imperceptíveis, desde que o tamanho final seja significativamente reduzido.",
            "o sistema eliminar metadados e partes repetidas que jamais poderão ser recuperadas depois da descompactação.",
            "a descompactação permitir reconstruir os dados originais sem perda de informação causada pelo processo de compressão.",
            "o formato compactado poder ser aberto diretamente por qualquer aplicativo, sem necessidade de reconhecer sua estrutura."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Na compressão sem perdas, os dados podem ser reconstruídos integralmente após a descompressão.",
        "feedbackErro": "A resposta correta é:\n\na descompactação permitir reconstruir os dados originais sem perda de informação causada pelo processo de compressão.\n\nComentário:\nNa compressão sem perdas, os dados podem ser reconstruídos integralmente após a descompressão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "“Sem perdas” descreve fidelidade dos dados, não uma porcentagem mínima de redução do tamanho.",
        "assunto": "arquivos",
        "id": "arquivos_029",
        "subtopico": "compactacao_midias_imagens",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma fotografia JPEG foi salva repetidas vezes com compressão com perdas. Em comparação com um processo sem perdas, é correto afirmar que:",
        "alternativas": [
            "o JPEG não pode reduzir tamanho porque imagens fotográficas não contêm dados que possam ser comprimidos por software.",
            "a redução pode envolver descarte de informações, e recompressões sucessivas podem degradar a qualidade visual.",
            "a compressão com perdas preserva cada bit original e apenas muda o nome e a extensão do arquivo durante o salvamento.",
            "o arquivo aumenta de tamanho porque a perda de qualidade exige guardar cópias extras dos pixels descartados.",
            "o processo converte a fotografia em imagem vetorial, tornando-a independente de resolução e de dimensões em pixels."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! JPEG geralmente utiliza compressão com perdas. Salvar repetidamente com nova compressão pode aumentar a degradação visual.",
        "feedbackErro": "A resposta correta é:\n\na redução pode envolver descarte de informações, e recompressões sucessivas podem degradar a qualidade visual.\n\nComentário:\nJPEG geralmente utiliza compressão com perdas. Salvar repetidamente com nova compressão pode aumentar a degradação visual.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Compare “com perdas” e “sem perdas” pela possibilidade de reconstruir integralmente a informação original.",
        "assunto": "arquivos",
        "id": "arquivos_030",
        "subtopico": "compactacao_midias_imagens",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um computador escolar usa SSD para o sistema e um HD externo para cópias de documentos. Sobre esses dispositivos, assinale a alternativa correta.",
        "alternativas": [
            "o HD externo funciona como memória RAM e perde todo o conteúdo quando é desconectado da porta USB do computador.",
            "SSD e HD são meios de armazenamento não volátil; o SSD não usa as partes mecânicas móveis típicas do HD.",
            "o SSD é um serviço de armazenamento em nuvem e só mantém arquivos enquanto houver conexão ativa com a Internet.",
            "ambos são dispositivos de entrada e não podem receber novos arquivos após a instalação do sistema operacional.",
            "o SSD armazena apenas programas, enquanto documentos do usuário precisam permanecer em discos magnéticos."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! SSD e HD armazenam dados de forma não volátil. SSD utiliza memória flash e não possui as partes mecânicas móveis típicas do HD.",
        "feedbackErro": "A resposta correta é:\n\nSSD e HD são meios de armazenamento não volátil; o SSD não usa as partes mecânicas móveis típicas do HD.\n\nComentário:\nSSD e HD armazenam dados de forma não volátil. SSD utiliza memória flash e não possui as partes mecânicas móveis típicas do HD.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda armazenamento permanente com memória RAM ou armazenamento em nuvem.",
        "assunto": "arquivos",
        "id": "arquivos_031",
        "subtopico": "armazenamento_dispositivos_nuvem",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma escola armazena documentos em um serviço de nuvem e permite que professores autorizados os acessem em diferentes dispositivos. Essa característica está relacionada a:",
        "alternativas": [
            "armazenamento remoto em servidores do serviço, com acesso condicionado à conexão, sincronização e permissões configuradas.",
            "armazenamento local, pois serviços de nuvem mantêm uma cópia apenas no dispositivo usado no primeiro envio.",
            "conversão dos documentos em atalhos, já que arquivos reais não podem ser mantidos fora do computador em que foram criados.",
            "converter documentos para formatos adequados ao serviço antes que possam ser mantidos em servidores remotos.",
            "eliminação da necessidade de autenticação, porque a finalidade da nuvem é tornar os arquivos públicos para qualquer dispositivo."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Armazenamento em nuvem mantém dados em infraestrutura remota e pode permitir acesso e sincronização em diferentes dispositivos conforme autenticação e permissões.",
        "feedbackErro": "A resposta correta é:\n\narmazenamento remoto em servidores do serviço, com acesso condicionado à conexão, sincronização e permissões configuradas.\n\nComentário:\nArmazenamento em nuvem mantém dados em infraestrutura remota e pode permitir acesso e sincronização em diferentes dispositivos conforme autenticação e permissões.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Nuvem não significa “público” nem elimina controles de acesso e segurança.",
        "assunto": "arquivos",
        "id": "arquivos_032",
        "subtopico": "armazenamento_dispositivos_nuvem",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um arquivo está disponível “somente online” em um serviço de nuvem sincronizado. Em comparação com um arquivo mantido também offline no computador, isso geralmente significa que:",
        "alternativas": [
            "o arquivo online foi apagado do serviço remoto e resta apenas um registro de seu nome no dispositivo local.",
            "o conteúdo do arquivo está criptografado e não pode ser baixado mesmo quando o usuário possui autorização até que o proprietário altere manualmente o estado de disponibilidade do item.",
            "o arquivo foi transformado em atalho do Windows e perdeu qualquer relação com a conta de armazenamento em nuvem utilizada.",
            "o dispositivo pode exibir a referência ao item, mas precisará obter seu conteúdo do serviço quando for necessário acessá-lo.",
            "o conteúdo é mantido integralmente na memória RAM para abrir sem Internet, mas não ocupa espaço persistente no dispositivo."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Arquivos “somente online” podem aparecer na interface local sem manter todo o conteúdo armazenado no dispositivo; o acesso pode exigir download pelo serviço.",
        "feedbackErro": "A resposta correta é:\n\no dispositivo pode exibir a referência ao item, mas precisará obter seu conteúdo do serviço quando for necessário acessá-lo.\n\nComentário:\nArquivos “somente online” podem aparecer na interface local sem manter todo o conteúdo armazenado no dispositivo; o acesso pode exigir download pelo serviço.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Observe a diferença entre presença lógica na lista e disponibilidade integral offline no armazenamento local.",
        "assunto": "arquivos",
        "id": "arquivos_033",
        "subtopico": "armazenamento_dispositivos_nuvem",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um usuário possui 8 GB livres em um pendrive formatado com um sistema que limita o tamanho de um único arquivo a cerca de 4 GB. Ele tenta copiar um vídeo de 5 GB. Mesmo havendo espaço total suficiente, a cópia pode falhar porque:",
        "alternativas": [
            "o sistema exige que qualquer arquivo ocupe menos da metade do espaço disponível na unidade de destino.",
            "pendrives não podem armazenar arquivos de vídeo e aceitam apenas documentos, imagens e arquivos compactados.",
            "existe um limite por arquivo no sistema de arquivos da unidade, diferente da quantidade total de espaço livre disponível.",
            "o Windows reserva 4 GB para a Lixeira em toda mídia removível conectada ao computador.",
            "o tamanho exibido pelo vídeo considera memória RAM, e não o espaço que será efetivamente ocupado no dispositivo removível."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Um sistema de arquivos pode impor limite ao tamanho de um único arquivo. O caso clássico é FAT32, cujo limite impede armazenar arquivos individuais maiores que aproximadamente 4 GB.",
        "feedbackErro": "A resposta correta é:\n\nexiste um limite por arquivo no sistema de arquivos da unidade, diferente da quantidade total de espaço livre disponível.\n\nComentário:\nUm sistema de arquivos pode impor limite ao tamanho de um único arquivo. O caso clássico é FAT32, cujo limite impede armazenar arquivos individuais maiores que aproximadamente 4 GB.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Diferencie capacidade livre da unidade e limite permitido para um único arquivo.",
        "assunto": "arquivos",
        "id": "arquivos_034",
        "subtopico": "armazenamento_dispositivos_nuvem",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma escola realiza todos os domingos uma cópia de todos os arquivos selecionados para proteção. Esse procedimento caracteriza, em regra, um backup:",
        "alternativas": [
            "incremental, porque qualquer cópia periódica registra apenas aquilo que mudou desde o dia anterior.",
            "diferencial, porque o domingo funciona automaticamente como ponto de comparação com a semana encerrada.",
            "espelhado, porque copiar todos os arquivos significa manter duas unidades sincronizadas em tempo real.",
            "de versão, porque cada arquivo completo passa a ser considerado uma versão separada do sistema operacional.",
            "completo, pois cada execução inclui todo o conjunto de dados definido para aquela rotina de backup."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Backup completo copia todo o conjunto de dados selecionado em cada execução.",
        "feedbackErro": "A resposta correta é:\n\ncompleto, pois cada execução inclui todo o conjunto de dados definido para aquela rotina de backup.\n\nComentário:\nBackup completo copia todo o conjunto de dados selecionado em cada execução.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "“Completo” descreve o que é copiado naquela execução, não a frequência semanal ou diária da rotina.",
        "assunto": "arquivos",
        "id": "arquivos_035",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Após um backup completo no domingo, a escola faz backups incrementais de segunda a quinta. Na quinta-feira, o incremental deve considerar:",
        "alternativas": [
            "todos os dados existentes desde domingo, independentemente de terem sido modificados ou de já terem sido copiados antes.",
            "apenas os arquivos modificados no domingo, pois o incremental toma como referência o último backup completo disponível.",
            "uma cópia integral dos dados selecionados, porque cada incremental reconstrói o conjunto desde o backup completo.",
            "as alterações acumuladas desde o último backup completo, comportamento que corresponde ao conceito de backup diferencial.",
            "as alterações ocorridas desde o backup anterior, completo ou incremental, conforme a sequência adotada."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Backup incremental copia as alterações desde o último backup realizado na cadeia. Isso tende a reduzir o volume de cada execução.",
        "feedbackErro": "A resposta correta é:\n\nas alterações ocorridas desde o backup anterior, completo ou incremental, conforme a sequência adotada.\n\nComentário:\nBackup incremental copia as alterações desde o último backup realizado na cadeia. Isso tende a reduzir o volume de cada execução.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Incremental = desde o último backup; diferencial = desde o último backup completo.",
        "assunto": "arquivos",
        "id": "arquivos_036",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Depois de um backup completo no domingo, são realizados backups diferenciais de segunda a sexta. O backup diferencial de sexta-feira deverá conter, em regra:",
        "alternativas": [
            "apenas os arquivos alterados desde o backup diferencial de quinta-feira, descartando mudanças registradas nos dias anteriores.",
            "uma cópia integral de todos os dados, pois o diferencial substitui o backup completo ao final de cada semana.",
            "arquivos que tenham sido excluídos, porque documentos modificados permanecem no backup completo original.",
            "as alterações acumuladas desde o backup completo de domingo até o momento da execução de sexta-feira.",
            "as alterações ocorridas depois do último backup executado, comportamento típico da estratégia incremental."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Backup diferencial acumula as alterações realizadas desde o último backup completo.",
        "feedbackErro": "A resposta correta é:\n\nas alterações acumuladas desde o backup completo de domingo até o momento da execução de sexta-feira.\n\nComentário:\nBackup diferencial acumula as alterações realizadas desde o último backup completo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Na sequência de diferenciais, cada novo diferencial tende a incluir novamente alterações já registradas desde o completo.",
        "assunto": "arquivos",
        "id": "arquivos_037",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma organização possui um backup completo de domingo e incrementais de segunda, terça e quarta. Para restaurar o estado mais recente na quarta-feira, a sequência necessária costuma envolver:",
        "alternativas": [
            "apenas o incremental de quarta, pois cada incremental contém automaticamente uma cópia completa de todos os dados anteriores.",
            "o backup completo e os incrementais necessários em sequência até alcançar o ponto de quarta-feira.",
            "o backup completo e o diferencial mais recente, ainda que a política usada não tenha produzido nenhum backup diferencial.",
            "o backup completo de domingo, porque incrementais servem apenas para auditoria e não participam da restauração.",
            "qualquer um dos arquivos de backup isoladamente, já que completo, incremental e diferencial são equivalentes na recuperação."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Na restauração incremental, normalmente é necessário o último backup completo e os incrementais posteriores relevantes até o ponto desejado.",
        "feedbackErro": "A resposta correta é:\n\no backup completo e os incrementais necessários em sequência até alcançar o ponto de quarta-feira.\n\nComentário:\nNa restauração incremental, normalmente é necessário o último backup completo e os incrementais posteriores relevantes até o ponto desejado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A desvantagem do incremental aparece principalmente na restauração, que pode depender de uma cadeia maior de backups.",
        "assunto": "arquivos",
        "id": "arquivos_038",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma empresa mantém o backup completo de domingo e um backup diferencial na sexta-feira. Para recuperar os dados até sexta, em condições normais, são necessários:",
        "alternativas": [
            "o backup completo de domingo e o diferencial de sexta-feira, que reúne as mudanças desde aquele completo.",
            "os cinco diferenciais da semana, mesmo que apenas o de sexta-feira esteja disponível e contenha as alterações acumuladas.",
            "o diferencial de sexta-feira, porque ele inclui também todos os arquivos existentes no backup completo de domingo.",
            "apenas o backup completo de domingo, pois o diferencial serve para conferência e não contém dados utilizáveis na restauração.",
            "os backups incrementais de cada dia, ainda que a estratégia adotada tenha sido diferencial durante a semana."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Para restaurar usando backup diferencial, normalmente basta o último backup completo e o diferencial mais recente desejado.",
        "feedbackErro": "A resposta correta é:\n\no backup completo de domingo e o diferencial de sexta-feira, que reúne as mudanças desde aquele completo.\n\nComentário:\nPara restaurar usando backup diferencial, normalmente basta o último backup completo e o diferencial mais recente desejado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Diferencial tende a simplificar a restauração em comparação com uma longa cadeia de incrementais.",
        "assunto": "arquivos",
        "id": "arquivos_039",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "A regra 3-2-1 é frequentemente citada em estratégias de backup. Sua ideia central é manter:",
        "alternativas": [
            "uma cópia principal e duas senhas diferentes, todas armazenadas no mesmo computador de trabalho.",
            "três backups completos por dia, dois usuários administradores e uma conta externa para recuperar a senha do sistema.",
            "três cópias dos dados, em dois tipos de mídia ou armazenamento, mantendo uma delas fora do local principal.",
            "manter uma cópia no local principal e duas cópias em diretórios distintos da mesma unidade de armazenamento.",
            "uma cópia em produção e duas cópias na mesma unidade física, desde que estejam em pastas e partições diferentes."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! A regra 3-2-1 recomenda três cópias dos dados, em dois tipos de mídia/armazenamento, com uma cópia fora do local principal.",
        "feedbackErro": "A resposta correta é:\n\ntrês cópias dos dados, em dois tipos de mídia ou armazenamento, mantendo uma delas fora do local principal.\n\nComentário:\nA regra 3-2-1 recomenda três cópias dos dados, em dois tipos de mídia/armazenamento, com uma cópia fora do local principal.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Três pastas no mesmo disco não atendem à ideia de independência contra falha física do dispositivo.",
        "assunto": "arquivos",
        "id": "arquivos_040",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um usuário mantém seus documentos sincronizados entre notebook e nuvem. Ele exclui por engano uma pasta e a exclusão é sincronizada. Por que a sincronização não deve ser confundida, por si só, com uma estratégia completa de backup?",
        "alternativas": [
            "porque serviços de sincronização não armazenam arquivos reais e mantêm apenas atalhos apontando para o computador do usuário.",
            "porque qualquer arquivo sincronizado é convertido automaticamente em leitura e deixa de admitir versões ou restauração.",
            "porque a sincronização pode propagar alterações e exclusões entre os locais conectados, enquanto o backup busca permitir recuperação de estados protegidos.",
            "porque sincronização funciona apenas dentro de uma rede local e não utiliza servidores remotos acessíveis pela Internet.",
            "porque backups não podem ser armazenados em nuvem, ao passo que sincronização depende de armazenamento remoto em qualquer configuração usada para manter os documentos atualizados."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Sincronização busca manter estados alinhados e pode replicar alterações ou exclusões. Backup visa preservar cópias recuperáveis de dados.",
        "feedbackErro": "A resposta correta é:\n\nporque a sincronização pode propagar alterações e exclusões entre os locais conectados, enquanto o backup busca permitir recuperação de estados protegidos.\n\nComentário:\nSincronização busca manter estados alinhados e pode replicar alterações ou exclusões. Backup visa preservar cópias recuperáveis de dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Um serviço pode oferecer sincronização e também recursos de backup/versionamento, mas os conceitos não são equivalentes.",
        "assunto": "arquivos",
        "id": "arquivos_041",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um documento compartilhado foi alterado e o serviço oferece histórico de versões. Esse recurso é especialmente útil para:",
        "alternativas": [
            "converter automaticamente o documento em PDF que um usuário diferente participa da edição colaborativa.",
            "recuperar uma versão anterior do arquivo quando a política e o período de retenção do serviço ainda a disponibilizam.",
            "garantir que qualquer exclusão local seja ignorada pela nuvem e não se propague para outros dispositivos sincronizados.",
            "impedir a criação de versões diferentes, mantendo apenas o primeiro conteúdo enviado ao serviço durante toda a vida do arquivo.",
            "substituir qualquer necessidade de permissões, pois versões anteriores são acessíveis publicamente para facilitar recuperação."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Histórico de versões permite retornar a estados anteriores do documento conforme as regras e o período de retenção do serviço.",
        "feedbackErro": "A resposta correta é:\n\nrecuperar uma versão anterior do arquivo quando a política e o período de retenção do serviço ainda a disponibilizam.\n\nComentário:\nHistórico de versões permite retornar a estados anteriores do documento conforme as regras e o período de retenção do serviço.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Versionamento ajuda na recuperação, mas não equivale automaticamente a política completa de backup e retenção.",
        "assunto": "arquivos",
        "id": "arquivos_042",
        "subtopico": "sincronizacao_versionamento_gestao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma equipe faz backup diariamente, mas nunca testou a restauração. Do ponto de vista da proteção dos dados, a principal fragilidade dessa prática é:",
        "alternativas": [
            "o backup só é considerado válido quando armazenado em mídia óptica, independentemente de qualquer teste de restauração realizado ainda que outras mídias de armazenamento estejam disponíveis para a organização.",
            "testes de restauração apagam necessariamente o backup original e por isso devem ser evitados em ambientes de produção.",
            "qualquer restauração altera a extensão dos arquivos recuperados, tornando impossível verificar sua integridade depois do teste.",
            "a rotina diária impede testes porque backups só podem ser restaurados após o encerramento definitivo do período de retenção.",
            "a existência do arquivo de backup não comprova, por si só, que os dados poderão ser recuperados corretamente quando forem necessários."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Backup útil é backup recuperável. Testes de restauração ajudam a verificar se a cópia está íntegra, acessível e adequada ao procedimento de recuperação.",
        "feedbackErro": "A resposta correta é:\n\na existência do arquivo de backup não comprova, por si só, que os dados poderão ser recuperados corretamente quando forem necessários.\n\nComentário:\nBackup útil é backup recuperável. Testes de restauração ajudam a verificar se a cópia está íntegra, acessível e adequada ao procedimento de recuperação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em prova, desconfie da ideia de que “ter backup” basta sem considerar restauração.",
        "assunto": "arquivos",
        "id": "arquivos_043",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma organização mantém uma única cópia de backup em um HD externo permanentemente conectado ao computador principal. Qual melhoria reduz melhor o risco de uma falha ou ataque atingir simultaneamente dados e backup?",
        "alternativas": [
            "criar várias pastas no mesmo HD externo, pois diretórios diferentes funcionam como mídias fisicamente independentes.",
            "usar nomes diferentes para as cópias, porque arquivos renomeados não podem ser afetados pelo mesmo incidente lógico.",
            "manter o HD conectado, já que a disponibilidade permanente impede que malware ou exclusões atinjam seus arquivos.",
            "manter uma cópia adicional isolada ou fora do ambiente principal, conforme a estratégia adotada.",
            "converter todos os arquivos do backup para ZIP, pois compactação impede alterações e substitui controles de acesso."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Uma cópia isolada ou off-site reduz o risco de o mesmo incidente atingir simultaneamente os dados de produção e todas as cópias de segurança.",
        "feedbackErro": "A resposta correta é:\n\nmanter uma cópia adicional isolada ou fora do ambiente principal, conforme a estratégia adotada.\n\nComentário:\nUma cópia isolada ou off-site reduz o risco de o mesmo incidente atingir simultaneamente os dados de produção e todas as cópias de segurança.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Diversificar localização e mídia é mais importante que apenas multiplicar pastas no mesmo dispositivo.",
        "assunto": "arquivos",
        "id": "arquivos_044",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma política de retenção de documentos digitais define principalmente:",
        "alternativas": [
            "qual extensão cada setor deve utilizar para padronizar documentos de texto, imagens, vídeos e planilhas.",
            "qual extensão cada usuário deverá empregar ao criar arquivos de texto, imagem, vídeo e planilha na instituição.",
            "o tamanho máximo de cada pasta e a quantidade de atalhos permitida na Área de Trabalho dos computadores corporativos.",
            "o aplicativo padrão que abrirá cada tipo de documento e o tema visual usado pelo Explorador de Arquivos.",
            "a velocidade mínima de rede para sincronizar arquivos com servidores e serviços de armazenamento remoto."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Política de retenção determina por quanto tempo informações devem ser mantidas, arquivadas ou eliminadas conforme critérios estabelecidos.",
        "feedbackErro": "A resposta correta é:\n\nqual extensão cada setor deve utilizar para padronizar documentos de texto, imagens, vídeos e planilhas.\n\nComentário:\nPolítica de retenção determina por quanto tempo informações devem ser mantidas, arquivadas ou eliminadas conforme critérios estabelecidos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda retenção documental com extensão, tamanho de pasta ou programa padrão de abertura.",
        "assunto": "arquivos",
        "id": "arquivos_045",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma pasta compartilhada em rede permite que alguns usuários apenas consultem documentos e outros também façam alterações. Essa diferença é obtida principalmente por:",
        "alternativas": [
            "extensões diferentes nos nomes dos arquivos, pois .pdf indica leitura e .docx concede alteração por padrão.",
            "tamanhos distintos de pasta, já que diretórios maiores recebem automaticamente privilégios administrativos na rede.",
            "compactação dos arquivos, porque itens ZIP são editáveis apenas pelos usuários que participaram de sua criação.",
            "permissões de acesso configuradas para definir ações autorizadas sobre a pasta e seus arquivos.",
            "atalhos personalizados, pois cada atalho determina de forma independente quem poderá abrir ou modificar o destino."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Permissões controlam quais usuários ou grupos podem executar ações como leitura e modificação em recursos compartilhados.",
        "feedbackErro": "A resposta correta é:\n\npermissões de acesso configuradas para definir ações autorizadas sobre a pasta e seus arquivos.\n\nComentário:\nPermissões controlam quais usuários ou grupos podem executar ações como leitura e modificação em recursos compartilhados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Formato do arquivo e atalho não substituem controle de acesso definido no recurso compartilhado.",
        "assunto": "arquivos",
        "id": "arquivos_046",
        "subtopico": "permissoes_compartilhamento_rede",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um professor recebe permissão apenas de leitura em uma pasta compartilhada. Em termos gerais, essa permissão tende a permitir que ele:",
        "alternativas": [
            "altere os arquivos existentes, mas não possa abrir novos documentos inseridos por outros usuários na mesma pasta.",
            "controle as permissões de outros usuários, desde que não exclua a pasta principal em que os documentos estão armazenados para administrar os demais documentos mantidos no mesmo recurso compartilhado.",
            "instale programas no servidor de arquivos porque leitura do conteúdo implica acesso administrativo ao equipamento remoto.",
            "cripte os documentos para impedir alterações, pois a permissão de leitura é implementada por criptografia automática.",
            "consulte os arquivos autorizados sem ter, por essa permissão, direito de sobrescrever seu conteúdo no local compartilhado."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Permissão de leitura é voltada à consulta do conteúdo; modificação exige privilégio adicional.",
        "feedbackErro": "A resposta correta é:\n\nconsulte os arquivos autorizados sem ter, por essa permissão, direito de sobrescrever seu conteúdo no local compartilhado.\n\nComentário:\nPermissão de leitura é voltada à consulta do conteúdo; modificação exige privilégio adicional.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Leia com atenção o verbo: visualizar/ler não equivale a editar, excluir ou administrar permissões.",
        "assunto": "arquivos",
        "id": "arquivos_047",
        "subtopico": "permissoes_compartilhamento_rede",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um arquivo em nuvem foi compartilhado por meio de um link configurado como “qualquer pessoa com o link pode visualizar”. O principal cuidado é que:",
        "alternativas": [
            "o acesso pode alcançar pessoas não previstas caso o link seja encaminhado ou publicado fora do público originalmente pretendido.",
            "o arquivo deixa automaticamente de existir na conta do proprietário e passa a pertencer a quem abrir o link primeiro.",
            "o link força download e execução do arquivo em qualquer dispositivo, mesmo quando o usuário apenas deseja visualizá-lo.",
            "a opção de visualização concede também edição, exclusão e alteração de permissões a todos os usuários que possuam o endereço durante todo o período em que o link permanecer ativo no serviço.",
            "o serviço remove a criptografia de transporte porque links compartilháveis só funcionam em conexões públicas sem proteção."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Links amplamente compartilháveis podem escapar do público pretendido se forem repassados. O risco depende das permissões atribuídas ao link.",
        "feedbackErro": "A resposta correta é:\n\no acesso pode alcançar pessoas não previstas caso o link seja encaminhado ou publicado fora do público originalmente pretendido.\n\nComentário:\nLinks amplamente compartilháveis podem escapar do público pretendido se forem repassados. O risco depende das permissões atribuídas ao link.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "“Qualquer pessoa com o link” deve ser lido literalmente: avalie a possibilidade de encaminhamento indevido.",
        "assunto": "arquivos",
        "id": "arquivos_048",
        "subtopico": "permissoes_compartilhamento_rede",
        "nivel": "dificil"
    },
    {
        "pergunta": "Em uma rede escolar, um servidor de arquivos é utilizado para centralizar documentos de vários setores. Uma vantagem típica dessa solução é:",
        "alternativas": [
            "impedir qualquer necessidade de autenticação, pois centralização significa que todos os usuários recebem as mesmas permissões.",
            "facilitar o compartilhamento e a administração de acesso aos documentos em um local controlado pela organização.",
            "eliminar backups, já que arquivos armazenados em servidor não estão sujeitos a falhas físicas, exclusões ou corrupção de dados.",
            "converter documentos para um formato único, permitindo que qualquer programa abra arquivos independentemente da extensão.",
            "garantir que todos os arquivos permaneçam disponíveis mesmo quando o servidor, a rede e a energia estiverem indisponíveis."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Servidores de arquivos centralizam armazenamento e podem facilitar compartilhamento, controle de acesso, administração e rotinas de proteção.",
        "feedbackErro": "A resposta correta é:\n\nfacilitar o compartilhamento e a administração de acesso aos documentos em um local controlado pela organização.\n\nComentário:\nServidores de arquivos centralizam armazenamento e podem facilitar compartilhamento, controle de acesso, administração e rotinas de proteção.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Centralização melhora gestão, mas não elimina autenticação, backup ou risco de indisponibilidade.",
        "assunto": "arquivos",
        "id": "arquivos_049",
        "subtopico": "permissoes_compartilhamento_rede",
        "nivel": "dificil"
    },
    {
        "pergunta": "Ao mapear no Windows um compartilhamento de rede para uma letra como Z:, o usuário passa a:",
        "alternativas": [
            "converter os arquivos remotos em arquivos locais independentes, dispensando qualquer conexão futura com a rede.",
            "criar uma partição física no disco interno com o mesmo tamanho do compartilhamento mantido pelo servidor.",
            "acessar o compartilhamento por uma referência semelhante a uma unidade, sem transformar por isso os dados remotos em armazenamento local.",
            "copiar automaticamente todo o conteúdo remoto para a Lixeira antes de disponibilizá-lo aos aplicativos do computador.",
            "alterar as permissões do servidor, pois letras de unidade só podem ser atribuídas por usuários com acesso administrativo total para que a letra atribuída permaneça visível no Explorador do computador."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Mapear uma unidade de rede associa um compartilhamento remoto a uma letra de unidade para facilitar acesso. Os dados continuam pertencendo ao recurso remoto.",
        "feedbackErro": "A resposta correta é:\n\nacessar o compartilhamento por uma referência semelhante a uma unidade, sem transformar por isso os dados remotos em armazenamento local.\n\nComentário:\nMapear uma unidade de rede associa um compartilhamento remoto a uma letra de unidade para facilitar acesso. Os dados continuam pertencendo ao recurso remoto.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Letra de unidade é uma forma de acesso, não uma cópia automática nem uma nova partição local.",
        "assunto": "arquivos",
        "id": "arquivos_050",
        "subtopico": "permissoes_compartilhamento_rede",
        "nivel": "dificil"
    },
    {
        "pergunta": "Dois professores editaram offline o mesmo arquivo sincronizado e depois reconectaram seus computadores. Um possível efeito é:",
        "alternativas": [
            "o serviço detectar versões concorrentes e exigir resolução de conflito ou preservar cópias distintas, conforme seu funcionamento.",
            "o arquivo ser descartado automaticamente, pois serviços de nuvem não aceitam qualquer edição feita enquanto o dispositivo está offline.",
            "o sistema escolher a versão criada no computador mais novo, independentemente de data, usuário ou política do serviço.",
            "ambas as versões serem combinadas bit a bit, garantindo um documento final semanticamente correto sem participação dos usuários.",
            "a extensão do arquivo ser removida para que o sistema possa sincronizar conteúdos produzidos por dispositivos diferentes."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Edições concorrentes podem gerar conflito de sincronização. Serviços podem criar cópias conflitantes, escolher versões por regras próprias ou solicitar intervenção.",
        "feedbackErro": "A resposta correta é:\n\no serviço detectar versões concorrentes e exigir resolução de conflito ou preservar cópias distintas, conforme seu funcionamento.\n\nComentário:\nEdições concorrentes podem gerar conflito de sincronização. Serviços podem criar cópias conflitantes, escolher versões por regras próprias ou solicitar intervenção.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não suponha que sincronização consiga “entender” e mesclar corretamente qualquer conteúdo automaticamente.",
        "assunto": "arquivos",
        "id": "arquivos_051",
        "subtopico": "sincronizacao_versionamento_gestao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Na organização de documentos, nomes como Ata_2026-08-10_v03.pdf são preferíveis a uma sequência como final2_agora_final.pdf principalmente porque:",
        "alternativas": [
            "nomes padronizados reduzem o tamanho físico do arquivo e melhoram automaticamente a velocidade de abertura no sistema operacional.",
            "o Windows bloqueia arquivos com palavras como “final” e exige números de versão para permitir movimentação entre pastas diferentes.",
            "uma convenção de nomes pode facilitar identificação, ordenação e controle de versões dos documentos ao longo do tempo.",
            "incluir data no nome cria uma assinatura digital que comprova autoria e impede alterações posteriores no conteúdo do documento.",
            "numerar versões elimina a necessidade de qualquer histórico, backup ou política de retenção para os documentos da organização."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Nomenclatura padronizada facilita localizar, ordenar e reconhecer versões ou finalidades dos documentos.",
        "feedbackErro": "A resposta correta é:\n\numa convenção de nomes pode facilitar identificação, ordenação e controle de versões dos documentos ao longo do tempo.\n\nComentário:\nNomenclatura padronizada facilita localizar, ordenar e reconhecer versões ou finalidades dos documentos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Padronização de nomes melhora gestão, mas não substitui backup, histórico de versões ou assinatura digital.",
        "assunto": "arquivos",
        "id": "arquivos_052",
        "subtopico": "sincronizacao_versionamento_gestao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma equipe usa os nomes Relatorio_v1.docx, Relatorio_v2.docx e Relatorio_v3.docx. Essa prática ilustra um controle manual de versões cujo objetivo é:",
        "alternativas": [
            "impedir que documentos antigos sejam abertos, pois versões anteriores ficam automaticamente criptografadas pelo sistema operacional.",
            "manter todas as versões com o mesmo nome interno para que ocupem um único espaço físico no dispositivo de armazenamento.",
            "garantir que apenas a versão com maior número possa ser copiada, compartilhada ou enviada por serviços de correio eletrônico.",
            "distinguir estados sucessivos do documento e reduzir o risco de confundir uma revisão antiga com a versão mais recente.",
            "converter o arquivo para um formato diferente a cada alteração, processo necessário para registrar corretamente o histórico."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Controle de versões ajuda a distinguir revisões sucessivas e identificar qual estado do documento deve ser usado ou recuperado.",
        "feedbackErro": "A resposta correta é:\n\ndistinguir estados sucessivos do documento e reduzir o risco de confundir uma revisão antiga com a versão mais recente.\n\nComentário:\nControle de versões ajuda a distinguir revisões sucessivas e identificar qual estado do documento deve ser usado ou recuperado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Número no nome é uma técnica de organização; não cria proteção criptográfica nem impede abertura das versões anteriores.",
        "assunto": "arquivos",
        "id": "arquivos_053",
        "subtopico": "sincronizacao_versionamento_gestao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Arquivamento e backup têm finalidades relacionadas, mas não idênticas. Assinale a alternativa que melhor diferencia os conceitos.",
        "alternativas": [
            "Arquivamento serve apenas para compactar arquivos antigos, enquanto backup serve para salvar programas instalados.",
            "Backup prioriza recuperação após perda ou incidente; arquivamento prioriza guarda organizada para consulta, histórico ou retenção.",
            "Backup é destinado a publicação de documentos, enquanto arquivamento existe para permitir edição colaborativa simultânea na nuvem.",
            "Arquivamento é uma técnica de criptografia, enquanto backup é uma técnica de conversão de formato para reduzir espaço ocupado.",
            "Os dois termos são sinônimos técnicos e qualquer arquivo arquivado deve ser considerado automaticamente uma cópia de segurança completa."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Backup é orientado à recuperação após perda ou incidente. Arquivamento costuma enfatizar guarda organizada, histórico, consulta e retenção.",
        "feedbackErro": "A resposta correta é:\n\nBackup prioriza recuperação após perda ou incidente; arquivamento prioriza guarda organizada para consulta, histórico ou retenção.\n\nComentário:\nBackup é orientado à recuperação após perda ou incidente. Arquivamento costuma enfatizar guarda organizada, histórico, consulta e retenção.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Uma organização pode arquivar documentos e também manter backups deles; as finalidades podem coexistir.",
        "assunto": "arquivos",
        "id": "arquivos_054",
        "subtopico": "sincronizacao_versionamento_gestao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um usuário envia um documento para uma pasta compartilhada na qual possui permissão de edição, mas outro usuário tem apenas leitura. Isso demonstra que:",
        "alternativas": [
            "o tipo de extensão define as permissões: quem abre DOCX edita, enquanto quem abre PDF recebe apenas leitura automática.",
            "as permissões estão vinculadas ao monitor utilizado, pois o mesmo arquivo pode aparecer editável em uma tela e leitura em outra.",
            "o conteúdo do arquivo determina o privilégio: documentos maiores exigem permissão de edição e os menores recebem apenas leitura.",
            "o usuário que criou o arquivo possui controle total, independentemente das regras configuradas no recurso compartilhado.",
            "usuários diferentes podem receber níveis distintos de acesso ao mesmo recurso conforme as permissões atribuídas."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Controles de acesso permitem atribuir níveis diferentes de permissão ao mesmo recurso para usuários ou grupos distintos.",
        "feedbackErro": "A resposta correta é:\n\nusuários diferentes podem receber níveis distintos de acesso ao mesmo recurso conforme as permissões atribuídas.\n\nComentário:\nControles de acesso permitem atribuir níveis diferentes de permissão ao mesmo recurso para usuários ou grupos distintos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Permissão não é definida pela extensão, tamanho do arquivo ou dispositivo de exibição.",
        "assunto": "arquivos",
        "id": "arquivos_055",
        "subtopico": "permissoes_compartilhamento_rede",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um site oficial publica um arquivo e também informa seu hash SHA-256. Antes de usar o arquivo baixado, o usuário calcula o hash local e compara os valores. A finalidade principal dessa comparação é:",
        "alternativas": [
            "descompactar o arquivo automaticamente, pois hashes substituem senhas de arquivos ZIP e liberam o conteúdo protegido.",
            "verificar se o conteúdo recebido corresponde ao esperado e detectar alterações que produzam valor de hash diferente.",
            "confirmar que o arquivo foi criado pela pessoa cujo nome aparece em suas propriedades, independentemente da origem do download.",
            "reduzir o tamanho do arquivo depois da transferência, removendo bytes redundantes identificados pelo algoritmo de hash.",
            "converter o formato para uma versão compatível com o computador, usando o valor do hash como nova extensão do documento."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Hash é útil para verificação de integridade: se o conteúdo muda, espera-se que o valor calculado também mude.",
        "feedbackErro": "A resposta correta é:\n\nverificar se o conteúdo recebido corresponde ao esperado e detectar alterações que produzam valor de hash diferente.\n\nComentário:\nHash é útil para verificação de integridade: se o conteúdo muda, espera-se que o valor calculado também mude.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Hash não é compactação, conversão de formato nem prova automática de autoria por si só.",
        "assunto": "arquivos",
        "id": "arquivos_056",
        "subtopico": "seguranca_integridade_criptografia",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um arquivo foi criptografado adequadamente. A propriedade mais diretamente associada a essa medida é:",
        "alternativas": [
            "garantir que o arquivo ocupe menos espaço, pois criptografia remove redundâncias do conteúdo antes do armazenamento.",
            "impedir qualquer alteração física no dispositivo, mesmo quando o usuário possui acesso administrativo ao computador.",
            "criar uma cópia externa automática, já que arquivos criptografados são enviados para um servidor de backup durante o processo.",
            "proteger a confidencialidade do conteúdo, exigindo chave, credencial ou mecanismo autorizado para sua leitura adequada.",
            "validar a autoria do documento com base no conteúdo criptografado, mesmo sem vínculo com identidade ou certificado."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Criptografia protege a confidencialidade ao transformar o conteúdo em uma forma que exige chave ou mecanismo autorizado para leitura.",
        "feedbackErro": "A resposta correta é:\n\nproteger a confidencialidade do conteúdo, exigindo chave, credencial ou mecanismo autorizado para sua leitura adequada.\n\nComentário:\nCriptografia protege a confidencialidade ao transformar o conteúdo em uma forma que exige chave ou mecanismo autorizado para leitura.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Criptografia não é sinônimo de compactação, backup ou assinatura digital.",
        "assunto": "arquivos",
        "id": "arquivos_057",
        "subtopico": "seguranca_integridade_criptografia",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma assinatura digital válida aplicada a um documento eletrônico está mais diretamente relacionada a:",
        "alternativas": [
            "ocultar o conteúdo do documento, impedindo que qualquer pessoa sem senha consiga visualizar as informações assinadas.",
            "reduzir o tamanho do arquivo, porque a assinatura substitui metadados e remove elementos redundantes do documento original.",
            "converter o documento em leitura, tornando tecnicamente impossível qualquer modificação posterior do arquivo armazenado e impede que o arquivo seja novamente salvo por qualquer aplicativo compatível.",
            "criar uma cópia física em mídia externa, garantindo recuperação do documento caso o arquivo principal seja excluído do computador.",
            "auxiliar na verificação de autoria/origem e integridade do documento, conforme o mecanismo criptográfico e o certificado utilizados."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Assinatura digital é associada à autenticidade/origem e integridade do documento, conforme o processo criptográfico utilizado.",
        "feedbackErro": "A resposta correta é:\n\nauxiliar na verificação de autoria/origem e integridade do documento, conforme o mecanismo criptográfico e o certificado utilizados.\n\nComentário:\nAssinatura digital é associada à autenticidade/origem e integridade do documento, conforme o processo criptográfico utilizado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda assinatura digital com criptografia de confidencialidade ou com backup.",
        "assunto": "arquivos",
        "id": "arquivos_058",
        "subtopico": "seguranca_integridade_criptografia",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um arquivo executável recebido de remetente desconhecido deve ser tratado com cautela porque:",
        "alternativas": [
            "arquivos executáveis são bloqueados pelo Windows e, portanto, não oferecem risco enquanto mantiverem a extensão original.",
            "o risco depende apenas do tamanho; executáveis pequenos não possuem espaço suficiente para conter código potencialmente malicioso quando são comparados com programas maiores recebidos pela mesma fonte.",
            "esse tipo de arquivo pode executar código, e a origem não confiável aumenta a necessidade de verificar legitimidade antes da execução.",
            "compactar o arquivo em ZIP antes de abrir impede que qualquer instrução prejudicial seja executada no computador do usuário.",
            "renomear a extensão para .pdf desativa permanentemente as instruções internas e transforma o conteúdo em documento comum."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Executáveis podem conter código que será executado no sistema. Arquivos de origem desconhecida exigem cautela e verificação antes da execução.",
        "feedbackErro": "A resposta correta é:\n\nesse tipo de arquivo pode executar código, e a origem não confiável aumenta a necessidade de verificar legitimidade antes da execução.\n\nComentário:\nExecutáveis podem conter código que será executado no sistema. Arquivos de origem desconhecida exigem cautela e verificação antes da execução.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Alterar o nome ou compactar não neutraliza automaticamente código potencialmente malicioso.",
        "assunto": "arquivos",
        "id": "arquivos_059",
        "subtopico": "seguranca_integridade_criptografia",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma equipe protege um arquivo ZIP com senha. Sobre essa medida, assinale a alternativa mais adequada.",
        "alternativas": [
            "a senha pode restringir o acesso ao conteúdo conforme o método de proteção usado, mas não substitui backup nem boas práticas de segurança.",
            "a senha transforma o ZIP em backup, garantindo recuperação mesmo que todas as cópias do arquivo sejam excluídas do dispositivo.",
            "a senha impede que o arquivo seja copiado ou apagado, pois proteção de acesso também bloqueia operações do sistema de arquivos.",
            "a senha garante que o conteúdo jamais seja descoberto, independentemente do método de proteção e da qualidade da credencial usada antes que o pacote seja enviado ou armazenado em outro dispositivo.",
            "a proteção remove automaticamente metadados, vírus e arquivos maliciosos existentes dentro do pacote compactado."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Proteção por senha pode restringir o acesso ao conteúdo de um arquivo compactado, conforme o método de criptografia utilizado.",
        "feedbackErro": "A resposta correta é:\n\na senha pode restringir o acesso ao conteúdo conforme o método de proteção usado, mas não substitui backup nem boas práticas de segurança.\n\nComentário:\nProteção por senha pode restringir o acesso ao conteúdo de um arquivo compactado, conforme o método de criptografia utilizado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Evite absolutos: senha em ZIP não torna o arquivo imune a exclusão, perda ou outras falhas de segurança.",
        "assunto": "arquivos",
        "id": "arquivos_060",
        "subtopico": "seguranca_integridade_criptografia",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma escola disponibiliza um instalador e informa um checksum oficial. Após o download, o valor calculado no arquivo local é diferente do publicado. A conclusão prudente é:",
        "alternativas": [
            "o checksum diferente confirma que o download foi mais recente e contém uma versão corrigida do programa.",
            "a diferença é normal que o arquivo é salvo em outra pasta, porque o caminho local participa do checksum.",
            "o valor diferente mostra apenas que o nome do arquivo mudou; conteúdo alterado não interfere no cálculo de verificação.",
            "o arquivo está necessariamente livre de falhas, pois colisões e alterações são detectadas e corrigidas automaticamente pelo checksum.",
            "o arquivo está livre de falhas porque o valor de verificação identifica e corrige diferenças encontradas no conteúdo."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Se o checksum/hash local difere do valor oficial esperado, o conteúdo recebido não corresponde exatamente ao arquivo de referência.",
        "feedbackErro": "A resposta correta é:\n\no arquivo está livre de falhas porque o valor de verificação identifica e corrige diferenças encontradas no conteúdo.\n\nComentário:\nSe o checksum/hash local difere do valor oficial esperado, o conteúdo recebido não corresponde exatamente ao arquivo de referência.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não execute a conclusão inversa: divergência não prova a causa, mas exige nova verificação da origem e do arquivo.",
        "assunto": "arquivos",
        "id": "arquivos_061",
        "subtopico": "seguranca_integridade_criptografia",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um documento digitalizado foi salvo apenas como imagem. Depois, aplicou-se OCR ao arquivo. O principal resultado esperado do OCR é:",
        "alternativas": [
            "reconhecer caracteres presentes na imagem e possibilitar, conforme a ferramenta, pesquisa, seleção ou edição do texto identificado.",
            "converter a imagem em arquivo executável para acelerar a pesquisa do conteúdo armazenado no documento digitalizado.",
            "criptografar automaticamente as palavras reconhecidas para impedir que o texto seja copiado por usuários não autorizados como etapa necessária para que os caracteres possam ser reconhecidos pelo sistema.",
            "reduzir a resolução da digitalização e eliminar toda informação gráfica que não seja composta por letras e números.",
            "criar um backup em nuvem e associar o documento a uma conta para permitir sincronização entre dispositivos diferentes."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! OCR reconhece caracteres em imagens de documentos e pode tornar o texto pesquisável, selecionável ou editável conforme a ferramenta.",
        "feedbackErro": "A resposta correta é:\n\nreconhecer caracteres presentes na imagem e possibilitar, conforme a ferramenta, pesquisa, seleção ou edição do texto identificado.\n\nComentário:\nOCR reconhece caracteres em imagens de documentos e pode tornar o texto pesquisável, selecionável ou editável conforme a ferramenta.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Digitalização gera imagem; OCR acrescenta reconhecimento de texto, não criptografia ou backup.",
        "assunto": "arquivos",
        "id": "arquivos_062",
        "subtopico": "seguranca_integridade_criptografia",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um arquivo possui dados EXIF com data e localização da fotografia. Antes de publicar a imagem, a pessoa remove esses metadados. Essa ação busca principalmente:",
        "alternativas": [
            "melhorar a resolução da fotografia, pois EXIF ocupa os pixels usados para armazenar detalhes visuais da imagem.",
            "reduzir a exposição de informações descritivas que podem acompanhar o arquivo, sem depender de alterar o conteúdo visual principal.",
            "converter o arquivo de JPEG para PNG sem alterar a extensão mostrada no nome da fotografia.",
            "impedir que a imagem seja copiada, pois a ausência de EXIF bloqueia a criação de novas cópias pelo sistema operacional.",
            "garantir autenticidade criptográfica, já que remover metadados equivale a aplicar uma assinatura digital ao arquivo publicado e comprova que nenhuma edição posterior foi realizada na fotografia publicada."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Metadados podem conter informações como data, equipamento e, em alguns casos, localização. Removê-los pode reduzir exposição dessas informações.",
        "feedbackErro": "A resposta correta é:\n\nreduzir a exposição de informações descritivas que podem acompanhar o arquivo, sem depender de alterar o conteúdo visual principal.\n\nComentário:\nMetadados podem conter informações como data, equipamento e, em alguns casos, localização. Removê-los pode reduzir exposição dessas informações.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "EXIF é metadado; não é o conjunto de pixels da imagem nem uma assinatura digital.",
        "assunto": "arquivos",
        "id": "arquivos_063",
        "subtopico": "seguranca_integridade_criptografia",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma professora arrasta um arquivo de uma pasta para outra e quer ter certeza de que o original permanecerá intacto. Sem depender do comportamento específico do arraste entre unidades, a ação mais inequívoca é usar:",
        "alternativas": [
            "Recortar e Colar, pois a movimentação preserva uma referência ao item de origem até a conclusão da operação.",
            "Shift + Delete seguido de Restaurar, porque a restauração cria uma segunda cópia no novo local selecionado pelo usuário.",
            "Renomear e depois arrastar, já que a mudança de nome transforma qualquer movimentação posterior em operação de cópia.",
            "Copiar e Colar, verificando a criação da cópia no destino e mantendo o arquivo original na origem.",
            "Criar um atalho no destino, pois o atalho contém uma reprodução integral e independente dos dados do arquivo apontado."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Quando o objetivo é manter o original e criar outro exemplar, Copiar e Colar expressa diretamente a operação desejada.",
        "feedbackErro": "A resposta correta é:\n\nCopiar e Colar, verificando a criação da cópia no destino e mantendo o arquivo original na origem.\n\nComentário:\nQuando o objetivo é manter o original e criar outro exemplar, Copiar e Colar expressa diretamente a operação desejada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Arrastar pode variar conforme origem, destino e teclas modificadoras; a questão pede a ação mais inequívoca.",
        "assunto": "arquivos",
        "id": "arquivos_064",
        "subtopico": "operacoes_lixeira_atributos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Após uma falha, a equipe percebe que o backup existe, mas a última cópia foi feita há duas semanas. Qual lição está mais diretamente relacionada ao planejamento da frequência de backup?",
        "alternativas": [
            "o formato do arquivo é mais importante que a frequência, porque documentos PDF não sofrem perda quando o backup está desatualizado.",
            "qualquer backup antigo é suficiente, já que a restauração recria automaticamente todas as alterações realizadas depois da cópia.",
            "a frequência deve considerar quanto trabalho ou quantos dados a organização aceita perder desde a última cópia recuperável.",
            "o backup deve ser executado apenas quando houver falha, pois cópias anteriores aumentam o risco de restaurar documentos desatualizados.",
            "a única solução válida é manter cópia em tempo real no mesmo disco, mesmo que o incidente também possa atingir esse dispositivo."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! A frequência de backup deve refletir a quantidade de dados ou trabalho que se aceita perder entre a última cópia recuperável e um incidente.",
        "feedbackErro": "A resposta correta é:\n\na frequência deve considerar quanto trabalho ou quantos dados a organização aceita perder desde a última cópia recuperável.\n\nComentário:\nA frequência de backup deve refletir a quantidade de dados ou trabalho que se aceita perder entre a última cópia recuperável e um incidente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Backup desatualizado pode restaurar o sistema, mas não recupera alterações que nunca chegaram a ser copiadas.",
        "assunto": "arquivos",
        "id": "arquivos_065",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma pasta mostra os arquivos “prova” e “prova”, aparentemente com o mesmo nome, mas as extensões estão ocultas. Após exibi-las, aparecem prova.docx e prova.pdf. A situação é possível porque:",
        "alternativas": [
            "o sistema ignora totalmente extensões e diferencia arquivos apenas pelo conteúdo armazenado dentro de cada documento.",
            "o Windows mantém um dos arquivos na RAM e outro no disco, por isso pode exibir dois nomes idênticos dentro da mesma pasta.",
            "o sistema cria automaticamente um atalho invisível para um dos documentos que detecta nomes-base repetidos.",
            "as extensões fazem parte da identificação dos arquivos, permitindo nomes-base iguais quando o nome completo é diferente.",
            "arquivos de formatos diferentes são armazenados em pastas físicas distintas, embora o Explorador os mostre juntos na tela."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! prova.docx e prova.pdf têm nomes completos diferentes por causa das extensões. Se as extensões estiverem ocultas, podem parecer iguais na interface.",
        "feedbackErro": "A resposta correta é:\n\nas extensões fazem parte da identificação dos arquivos, permitindo nomes-base iguais quando o nome completo é diferente.\n\nComentário:\nprova.docx e prova.pdf têm nomes completos diferentes por causa das extensões. Se as extensões estiverem ocultas, podem parecer iguais na interface.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em itens sobre nomes repetidos, verifique se a extensão faz parte do nome completo que está sendo comparado.",
        "assunto": "arquivos",
        "id": "arquivos_066",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma pasta está compartilhada, mas determinado usuário recebe mensagem de acesso negado. A interpretação mais adequada é:",
        "alternativas": [
            "o compartilhamento garante acesso irrestrito; portanto, a mensagem só pode indicar defeito físico no dispositivo de armazenamento.",
            "a extensão dos arquivos bloqueados deve estar incorreta, pois permissões não influenciam acesso a pastas de rede compartilhadas.",
            "o usuário pode não possuir as permissões necessárias, mesmo que a pasta esteja disponível na rede para outros usuários autorizados.",
            "o problema prova que o arquivo foi excluído, já que itens existentes em compartilhamentos não apresentam mensagem de acesso negado.",
            "o sistema exige que todos os usuários tenham a mesma senha; credenciais individuais são incompatíveis com pastas compartilhadas."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Compartilhar um recurso não significa torná-lo público para todos. Permissões e autenticação podem limitar quem acessa e quais ações realiza.",
        "feedbackErro": "A resposta correta é:\n\no usuário pode não possuir as permissões necessárias, mesmo que a pasta esteja disponível na rede para outros usuários autorizados.\n\nComentário:\nCompartilhar um recurso não significa torná-lo público para todos. Permissões e autenticação podem limitar quem acessa e quais ações realiza.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "“Está compartilhado” e “todos podem acessar” não são afirmações equivalentes.",
        "assunto": "arquivos",
        "id": "arquivos_067",
        "subtopico": "permissoes_compartilhamento_rede",
        "nivel": "dificil"
    },
    {
        "pergunta": "Uma instituição mantém três cópias de um conjunto de documentos, mas todas estão no mesmo HD físico em pastas diferentes. Em relação à resiliência contra falha desse HD, essa estratégia é fraca porque:",
        "alternativas": [
            "uma falha física do dispositivo pode atingir simultaneamente todas as cópias armazenadas nele, apesar de estarem em diretórios distintos.",
            "pastas diferentes usam formatos de arquivo diferentes, o que impede restauração conjunta depois de uma falha.",
            "o sistema operacional só reconhece como backup uma cópia gravada em CD ou DVD, ainda que existam outros meios de armazenamento.",
            "arquivos duplicados na mesma unidade são convertidos em atalhos e deixam de representar cópias independentes dos dados.",
            "o HD mantém apenas uma versão de cada arquivo e simula cópias por meio do cache, independentemente da quantidade de pastas criadas para economizar espaço quando o mesmo conteúdo aparece em diretórios diferentes."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Cópias em pastas diferentes no mesmo dispositivo não protegem adequadamente contra falha física daquele dispositivo.",
        "feedbackErro": "A resposta correta é:\n\numa falha física do dispositivo pode atingir simultaneamente todas as cópias armazenadas nele, apesar de estarem em diretórios distintos.\n\nComentário:\nCópias em pastas diferentes no mesmo dispositivo não protegem adequadamente contra falha física daquele dispositivo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Independência física e/ou geográfica das cópias é parte importante de uma estratégia resiliente de backup.",
        "assunto": "arquivos",
        "id": "arquivos_068",
        "subtopico": "backup_recuperacao_retencao",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um arquivo armazenado em nuvem foi marcado para uso offline em um notebook. A finalidade desse recurso é:",
        "alternativas": [
            "eliminar a cópia remota e manter o arquivo apenas no notebook para impedir acesso por outros dispositivos autorizados.",
            "transformar o arquivo em atalho e remover o conteúdo local para liberar espaço antes que a conexão seja interrompida.",
            "garantir que o documento não seja alterado na nuvem, ainda que o usuário o edite e depois reconecte o computador à Internet.",
            "converter o arquivo para PDF para que possa ser aberto sem depender do programa em que foi originalmente criado.",
            "manter uma cópia local disponível sem conexão e, conforme o serviço, sincronizar alterações quando a conectividade retornar."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Disponibilidade offline mantém conteúdo local para uso sem conexão; depois, o serviço pode sincronizar mudanças quando a conexão retornar.",
        "feedbackErro": "A resposta correta é:\n\nmanter uma cópia local disponível sem conexão e, conforme o serviço, sincronizar alterações quando a conectividade retornar.\n\nComentário:\nDisponibilidade offline mantém conteúdo local para uso sem conexão; depois, o serviço pode sincronizar mudanças quando a conexão retornar.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Offline não significa “desvinculado da nuvem” nem “bloqueado contra alterações futuras”.",
        "assunto": "arquivos",
        "id": "arquivos_069",
        "subtopico": "armazenamento_dispositivos_nuvem",
        "nivel": "dificil"
    },
    {
        "pergunta": "Um usuário baixa o arquivo relatorio.zip e, dentro dele, encontra relatorio.pdf. Para abrir normalmente o PDF sem alterar seu formato, o procedimento adequado é:",
        "alternativas": [
            "renomear relatorio.zip para relatorio.pdf, pois o nome da extensão é suficiente para converter o pacote em documento legível.",
            "extrair o conteúdo do ZIP e abrir o arquivo PDF com um aplicativo compatível, sem precisar renomear sua extensão.",
            "executar o ZIP como aplicativo, pois o próprio pacote gerencia a abertura dos documentos armazenados em sua estrutura.",
            "mover o ZIP para a Lixeira e restaurá-lo, ação que faz o Windows separar automaticamente os arquivos contidos no pacote.",
            "alterar o atributo para leitura, pois esse atributo descompacta o arquivo sem permitir mudanças no documento interno."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! ZIP é um contêiner compactado. Para acessar normalmente o PDF interno, pode-se extrair o conteúdo e então abrir o documento com aplicativo compatível.",
        "feedbackErro": "A resposta correta é:\n\nextrair o conteúdo do ZIP e abrir o arquivo PDF com um aplicativo compatível, sem precisar renomear sua extensão.\n\nComentário:\nZIP é um contêiner compactado. Para acessar normalmente o PDF interno, pode-se extrair o conteúdo e então abrir o documento com aplicativo compatível.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda extração com renomeação de extensão; mudar .zip para .pdf não converte o conteúdo.",
        "assunto": "arquivos",
        "id": "arquivos_070",
        "subtopico": "conceitos_extensoes_formatos",
        "nivel": "dificil"
    }
];
