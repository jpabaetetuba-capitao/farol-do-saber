const office = [

{
    pergunta: "Considerando a planilha apresentada na imagem, qual fórmula foi utilizada para obter o valor total de R$ 6.710,00 exibido na célula E7?",

    imagem: "imagens/questoes/excel01.png",

    alternativas: [
        "=MÉDIA(E2:E6)",
        "=MÁXIMO(E2:E6)",
        "=SOMA(E2:E6)",
        "=CONT.SE(E2:E6)",
        "=PROCV(E2:E6)"
    ],

    correta: 2,

    feedback: "O valor de R$ 6.710,00 corresponde à soma dos valores da coluna Total (E2 até E6). A função adequada é =SOMA(E2:E6).",

    assunto: "office"
},

{
    pergunta: "Considerando as notas apresentadas na imagem, qual será o resultado da função =MÉDIA(B2:B6)?",

    imagem: "imagens/questoes/excel02.png",

    alternativas: [
        "7",
        "7,5",
        "8",
        "8,5",
        "9"
    ],

    correta: 2,

    feedback: "A média é calculada somando todas as notas e dividindo pela quantidade de alunos. (8 + 6 + 10 + 7 + 9) ÷ 5 = 40 ÷ 5 = 8. A função MÉDIA é uma das mais cobradas em provas de Excel.",

    assunto: "office"
},
{
    pergunta: "Ao aplicar a função =MÁXIMO(B2:B6) aos dados apresentados na imagem, qual valor será retornado?",

    imagem: "imagens/questoes/excel03.png",

    alternativas: [
        "R$ 2.800,00",
        "R$ 3.200,00",
        "R$ 2.400,00",
        "R$ 1.900,00",
        "R$ 1.500,00"
    ],

    correta: 1,

    feedback: "A função MÁXIMO retorna o maior valor do intervalo analisado. Entre os valores apresentados, o maior é R$ 3.200,00, correspondente ao vendedor Carlos.\n\nDica de prova: a função MÁXIMO retorna o valor numérico, não o nome associado a ele.",

    assunto: "office"
},
{
    pergunta: "Considerando os dados apresentados na imagem, qual valor seria retornado pela função =MÍNIMO(A2:A6)?",

    imagem: "imagens/questoes/excel04.png",

    alternativas: [
        "31",
        "28",
        "25",
        "22",
        "27"
    ],

    correta: 3,

    feedback: "A função MÍNIMO retorna o menor valor existente no intervalo informado. Entre as temperaturas 28, 31, 25, 22 e 27, o menor valor é 22.\n\nDica de prova: não confunda a função MÍNIMO com MENOR. A função MÍNIMO retorna diretamente o menor valor do intervalo.",

    assunto: "office"
},
{
    pergunta: "Considerando os dados apresentados na imagem, qual resultado será retornado pela função =CONT.SE(A2:A7;\"Aprovado\")?",

    imagem: "imagens/questoes/excel05.png",

    alternativas: [
        "2",
        "3",
        "4",
        "5",
        "6"
    ],

    correta: 2,

    feedback: "A função CONT.SE conta quantas células atendem ao critério informado. Na tabela existem quatro ocorrências da palavra 'Aprovado' (linhas 2, 4, 5 e 7), portanto o resultado será 4.\n\nDica de prova: CONT.SE conta apenas as células que correspondem exatamente ao critério especificado.",

    assunto: "office"
},
{
    pergunta: "Considerando que a célula C2 contém a fórmula =SE(B2>=7;\"Aprovado\";\"Reprovado\"), qual será o resultado exibido para o aluno Bruno?",

    imagem: "imagens/questoes/excel06.png",

    alternativas: [
        "Aprovado",
        "Reprovado",
        "7",
        "Erro",
        "Falso"
    ],

    correta: 1,

    feedback: "A nota de Bruno é 4. Como 4 não é maior ou igual a 7, a condição da função SE é falsa e o resultado retornado será 'Reprovado'.\n\nDica de prova: a função SE possui a estrutura =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso).",

    assunto: "office"
},
{
    pergunta: "Considere que a célula C2 contenha a fórmula =E(A2>=7;B2>=75%). Com base nos dados apresentados na imagem, qual será o resultado retornado para a primeira linha?",

    imagem: "imagens/questoes/excel07.png",

    alternativas: [
        "VERDADEIRO",
        "FALSO",
        "Aprovado",
        "Reprovado",
        "Erro"
    ],

    correta: 0,

    feedback: "A função E retorna VERDADEIRO somente quando todas as condições são verdadeiras. Na primeira linha, a nota é 8 (maior ou igual a 7) e a frequência é 90% (maior ou igual a 75%). Como ambas as condições são satisfeitas, o resultado será VERDADEIRO.\n\nDica de prova: a função E exige que todas as condições sejam verdadeiras para retornar VERDADEIRO.",

    assunto: "office"
},
{
    pergunta: "Considerando os valores apresentados na planilha, qual será o resultado da fórmula =PROCV(\"Monitor\";A2:B6;2;FALSO)?",

    imagem: "imagens/questoes/excel08.png",

    alternativas: [
        "R$ 180,00",
        "R$ 350,00",
        "R$ 450,00",
        "R$ 900,00",
        "Erro"
    ],

    correta: 1,

    feedback: "A função PROCV procura o valor 'Monitor' na primeira coluna do intervalo A2:B6 e retorna o valor correspondente da segunda coluna. O valor associado ao produto Monitor é R$ 350,00.\n\nDica de prova: no PROCV, o valor procurado deve estar na primeira coluna da matriz de pesquisa.",

    assunto: "office"
},
{
    pergunta: "Observando a planilha da imagem, qual função do Excel é a mais adequada para retornar automaticamente o nome 'Carlos' quando o código 103 é informado?",

    imagem: "imagens/questoes/excel09.png",

    alternativas: [
        "MÉDIA",
        "CONT.SE",
        "PROCV",
        "MÁXIMO",
        "SOMA"
    ],

    correta: 2,

    feedback: "A função PROCV (Procura Vertical) é utilizada para localizar um valor na primeira coluna de uma tabela e retornar uma informação correspondente em outra coluna. Na imagem, ao informar o código 103, a função retorna o nome Carlos.\n\nDica de prova: a PROCV é uma das funções mais cobradas em concursos, especialmente em situações de busca de códigos, matrículas, produtos e funcionários.",

    assunto: "office"
},
{
    pergunta: "Observando a planilha apresentada na imagem, qual categoria possui o maior valor de despesa?",

    imagem: "imagens/questoes/excel10.png",

    alternativas: [
        "Alimentação",
        "Transporte",
        "Moradia",
        "Lazer",
        "Outros"
    ],

    correta: 2,

    feedback: "Ao analisar os valores da tabela, verifica-se que a categoria Moradia possui a maior despesa, totalizando R$ 1.200,00. Questões desse tipo exigem interpretação da planilha e identificação do maior valor apresentado.",

    assunto: "office"
},
{
    pergunta: "Observando a planilha apresentada na imagem, qual vendedor está associado ao produto 'Monitor'?",

    imagem: "imagens/questoes/excel11.png",

    alternativas: [
        "Ana",
        "Bruno",
        "Carlos",
        "Daniela",
        "Eduardo"
    ],

    correta: 2,

    feedback: "Ao analisar a linha correspondente ao produto 'Monitor', verifica-se que o vendedor associado é Carlos. Questões desse tipo avaliam a capacidade de localizar informações em tabelas e interpretar corretamente os dados apresentados.",

    assunto: "office"
},
{
    pergunta: "Observando a imagem do Microsoft Word, qual guia da Faixa de Opções está selecionada no momento?",

    imagem: "imagens/questoes/word01.png",

    alternativas: [
        "Inserir",
        "Layout",
        "Página Inicial",
        "Design",
        "Revisão"
    ],

    correta: 2,

    feedback: "A guia 'Página Inicial' está destacada na Faixa de Opções. É nessa guia que se encontram os principais comandos de formatação de texto, como fonte, alinhamento, negrito, itálico e estilos.",

    assunto: "office"
},
{
    pergunta: "Observando a imagem do Microsoft Word, qual recurso está sendo editado no documento?",

    imagem: "imagens/questoes/word02.png",

    alternativas: [
        "Quebra de Página",
        "Marca d’Água",
        "Cabeçalho e Rodapé",
        "Sumário Automático",
        "Controle de Alterações"
    ],

    correta: 2,

    feedback: "A imagem mostra a guia contextual 'Cabeçalho e Rodapé' ativa e as áreas de cabeçalho e rodapé destacadas no documento. Esse recurso é utilizado para inserir informações que serão exibidas em todas as páginas, como títulos, datas, logotipos e numeração de páginas.",

    assunto: "office"
},
{
    pergunta: "Observando a imagem do Microsoft Word, qual recurso está sendo exibido na parte superior do documento?",

    imagem: "imagens/questoes/word03.png",

    alternativas: [
        "Índice Remissivo",
        "Bibliografia",
        "Sumário Automático",
        "Legenda de Figura",
        "Nota de Rodapé"
    ],

    correta: 2,

    feedback: "A imagem apresenta um Sumário Automático criado a partir dos estilos de títulos do Word. Esse recurso gera automaticamente a relação de capítulos, seções e respectivas páginas do documento.\n\nDica de prova: para que o Sumário Automático funcione corretamente, é necessário aplicar estilos como Título 1, Título 2 e Título 3 aos títulos do documento.",

    assunto: "office"
},
{
    pergunta: "A imagem do Microsoft Word exibe duas marcações pontilhadas identificadas como 'Quebra de Seção'. Qual é a principal finalidade desse recurso?",

    imagem: "imagens/questoes/word04.png",

    alternativas: [
        "Inserir uma quebra automática de linha dentro de um parágrafo.",
        "Separar partes do documento permitindo configurações independentes de formatação.",
        "Criar um índice automático baseado nos títulos do texto.",
        "Adicionar comentários ocultos para revisão do documento.",
        "Dividir uma tabela extensa em várias páginas."
    ],

    correta: 1,

    feedback: "As Quebras de Seção permitem dividir um documento em partes independentes. Cada seção pode possuir configurações próprias, como orientação da página (retrato ou paisagem), numeração, cabeçalhos, rodapés e margens diferentes.\n\nDica de concurso: a Quebra de Página apenas inicia uma nova página, enquanto a Quebra de Seção cria uma nova seção com configurações próprias. Essa diferença é muito cobrada em provas de informática.",

    assunto: 'office'
},
{
    pergunta: "A imagem mostra duas Quebras de Seção diferentes no Microsoft Word: 'Próxima Página' e 'Página Ímpar'. Qual alternativa descreve corretamente a diferença entre elas?",

    imagem: "imagens/questoes/word05.png",

    alternativas: [
        "Ambas possuem exatamente a mesma função e produzem resultados idênticos.",
        "A quebra 'Próxima Página' inicia a seção seguinte na página seguinte, enquanto a quebra 'Página Ímpar' inicia a nova seção obrigatoriamente na próxima página ímpar.",
        "A quebra 'Página Ímpar' é utilizada apenas para documentos impressos em orientação paisagem.",
        "A quebra 'Próxima Página' cria apenas uma quebra de linha avançada dentro do mesmo parágrafo.",
        "A quebra 'Página Ímpar' remove automaticamente cabeçalhos e rodapés da próxima seção."
    ],

    correta: 1,

    feedback: "Correto! A Quebra de Seção 'Próxima Página' inicia a nova seção na página imediatamente seguinte. Já a Quebra de Seção 'Página Ímpar' força o início da nova seção na próxima página ímpar disponível, podendo inclusive inserir uma página em branco para manter essa regra.\n\nDica de concurso: as quebras Página Ímpar e Página Par são muito utilizadas em livros, apostilas e documentos que seguem padrão de impressão frente e verso. Bancas adoram cobrar essa diferença.",

    assunto: 'office'
},
{
    pergunta: "Observando a interface do Microsoft PowerPoint exibida na imagem, qual elemento localizado à esquerda da tela permite ao usuário visualizar e navegar rapidamente entre os slides da apresentação?",

    imagem: "imagens/questoes/powerpoint01.png",

    alternativas: [
        "Painel de Anotações.",
        "Faixa de Opções (Ribbon).",
        "Painel de Miniaturas de Slides.",
        "Barra de Status.",
        "Modo de Leitura."
    ],

    correta: 2,

    feedback: "Correto! O Painel de Miniaturas de Slides fica localizado à esquerda da janela do PowerPoint e exibe versões reduzidas dos slides da apresentação. Ele permite navegar rapidamente, reorganizar a ordem dos slides e selecionar um slide específico para edição.\n\nPegadinha de concurso: a Faixa de Opções (Ribbon) fica na parte superior e contém os comandos; já o Painel de Miniaturas serve exclusivamente para visualização e navegação entre os slides.",

    assunto: 'office'
},
{
    pergunta: "Observando a apresentação exibida no Microsoft PowerPoint, qual recurso permite alterar rapidamente o modelo visual de todos os slides, incluindo cores, fontes e efeitos, mantendo a padronização da apresentação?",

    imagem: "imagens/questoes/powerpoint02.png",

    alternativas: [
        "Transições.",
        "Layout do Slide.",
        "Tema da Apresentação.",
        "Animações.",
        "Cronograma."
    ],

    correta: 2,

    feedback: "Correto! Os Temas do PowerPoint aplicam um conjunto padronizado de cores, fontes, efeitos e estilos a toda a apresentação. Alterar o tema modifica rapidamente a aparência global dos slides sem a necessidade de formatar cada elemento individualmente.\n\nPegadinha de concurso: Layout altera apenas a disposição dos elementos em um slide específico. Tema altera o visual completo da apresentação.",

    assunto: 'office'
},
{
    pergunta: "Na apresentação exibida, observa-se uma imagem ocupando grande parte do slide de capa. Qual recurso do PowerPoint permite inserir fotografias, ilustrações e outros elementos gráficos diretamente em um slide?",

    imagem: "imagens/questoes/powerpoint03.png",

    alternativas: [
        "Transições.",
        "Inserir Imagens.",
        "Animações.",
        "Classificar Slides.",
        "Painel de Anotações."
    ],

    correta: 1,

    feedback: "Correto! O comando Inserir Imagens, localizado na guia Inserir, permite adicionar fotografias, capturas de tela, ícones e outros recursos gráficos aos slides. Esses elementos são amplamente utilizados para tornar apresentações mais visuais e atrativas.\n\nPegadinha de concurso: Animações controlam movimentos dos objetos; Transições controlam a passagem entre slides. Nenhum desses recursos é utilizado para inserir imagens no slide.",

    assunto: 'office'
},
{
    pergunta: "A imagem mostra o Microsoft PowerPoint com um único slide em branco selecionado. Qual comando da guia Página Inicial permite inserir rapidamente um novo slide na apresentação?",

    imagem: "imagens/questoes/powerpoint04.png",

    alternativas: [
        "Novo Slide.",
        "Redefinir.",
        "Layout.",
        "Seção.",
        "Substituir."
    ],

    correta: 0,

    feedback: "Correto! O comando Novo Slide, localizado no grupo Slides da guia Página Inicial, adiciona um novo slide à apresentação. Ao clicar na seta do botão, o usuário pode escolher diferentes layouts para o novo slide.\n\nPegadinha de concurso: Redefinir restaura o layout original do slide atual; Layout altera a estrutura de um slide existente; Novo Slide cria efetivamente um novo slide na apresentação.",

    assunto: 'office'
},

{
    pergunta: "No Microsoft Excel, qual função é utilizada para retornar a quantidade de células que atendem a um único critério estabelecido pelo usuário?",

    alternativas: [
        "SOMASE",
        "CONT.SE",
        "PROCV",
        "MÉDIASE",
        "SE"
    ],

    correta: 1,

    feedback: "A função CONT.SE conta quantas células de um intervalo atendem a um critério específico. É amplamente cobrada em concursos juntamente com SOMASE e MÉDIASE.",

    assunto: 'office'
},
{
    pergunta: "No Microsoft Word, o recurso utilizado para gerar automaticamente uma lista de títulos e subtítulos de um documento é denominado:",

    alternativas: [
        "Legenda",
        "Índice Remissivo",
        "Sumário",
        "Nota de Rodapé",
        "Referência Cruzada"
    ],

    correta: 2,

    feedback: "O Sumário Automático é criado a partir dos estilos de título aplicados ao documento.",

    assunto: 'office'
},
{
    pergunta: "No PowerPoint, as transições são aplicadas:",

    alternativas: [
        "A caracteres individuais.",
        "A objetos específicos do slide.",
        "À passagem entre slides.",
        "A tabelas e gráficos.",
        "Somente a imagens."
    ],

    correta: 2,

    feedback: "Transições controlam os efeitos visuais exibidos durante a mudança de um slide para outro.",

    assunto: 'office'
},
{
    pergunta: "Qual função do Excel procura um valor na primeira coluna de uma tabela e retorna uma informação correspondente localizada na mesma linha?",

    alternativas: [
        "SE",
        "CONT.SE",
        "SOMASE",
        "PROCV",
        "MÉDIA"
    ],

    correta: 3,

    feedback: "PROCV significa Procura Vertical e é uma das funções mais cobradas em provas de informática.",

    assunto: 'office'
},
{
    pergunta: "No Word, qual recurso permite inserir explicações ou observações complementares ao texto no rodapé da página?",

    alternativas: [
        "Legenda",
        "Nota de Rodapé",
        "Comentário",
        "Referência Cruzada",
        "Indicador"
    ],

    correta: 1,

    feedback: "As notas de rodapé são utilizadas para comentários, referências e observações complementares.",

    assunto: 'office'
},
{
    pergunta: "No Excel, a fórmula =SE(A1>=7;\"Aprovado\";\"Reprovado\") retornará:",

    alternativas: [
        "O valor de A1.",
        "VERDADEIRO ou FALSO.",
        "Aprovado se A1 for maior ou igual a 7.",
        "A média da planilha.",
        "Erro de sintaxe."
    ],

    correta: 2,

    feedback: "A função SE executa testes lógicos retornando valores diferentes conforme a condição seja verdadeira ou falsa.",

    assunto: 'office'
},

{
    pergunta: "Qual guia do PowerPoint reúne os comandos relacionados aos efeitos de movimentação dos objetos em um slide?",

    alternativas: [
        "Design",
        "Inserir",
        "Exibir",
        "Animações",
        "Revisão"
    ],

    correta: 3,

    feedback: "A guia Animações permite configurar efeitos aplicados a textos, imagens, formas e outros objetos.",

    assunto: 'office'
},
{
    pergunta: "No Excel, qual operador é utilizado para representar uma condição lógica 'diferente de'?",

    alternativas: [
        "=",
        ">",
        "<>",
        "<=",
        ">="
    ],

    correta: 2,

    feedback: "O operador <> significa diferente de e é muito utilizado em funções lógicas e filtros.",

    assunto: 'office'
},

{
    pergunta: "No Word, a combinação Ctrl + B possui como função padrão:",

    alternativas: [
        "Salvar documento.",
        "Aplicar negrito.",
        "Abrir documento.",
        "Inserir quebra de página.",
        "Centralizar texto."
    ],

    correta: 1,

    feedback: "Ctrl+B aplica ou remove a formatação em negrito do texto selecionado.",

    assunto: 'office'
},

{
    pergunta: "No PowerPoint, o Modo de Apresentação de Slides é utilizado para:",

    alternativas: [
        "Editar temas.",
        "Exibir a apresentação ao público.",
        "Inserir imagens.",
        "Criar gráficos.",
        "Alterar layouts."
    ],

    correta: 1,

    feedback: "O modo Apresentação de Slides exibe os slides em tela cheia para apresentação.",

    assunto: 'office'
},
{
    pergunta: "No Excel, qual função permite somar valores que atendam simultaneamente a mais de um critério?",

    alternativas: [
        "SOMA",
        "SOMASE",
        "SOMASES",
        "CONT.SE",
        "PROCV"
    ],

    correta: 2,

    feedback: "SOMASES permite múltiplos critérios simultâneos. Já SOMASE trabalha com apenas um critério.",

    assunto: 'office'
},
{
    pergunta: "No Word, o recurso Mala Direta é utilizado principalmente para:",

    alternativas: [
        "Criar apresentações multimídia.",
        "Automatizar o envio de documentos personalizados para diversos destinatários.",
        "Gerar sumários automáticos.",
        "Inserir notas de rodapé.",
        "Controlar alterações no documento."
    ],

    correta: 1,

    feedback: "A Mala Direta combina uma fonte de dados com um documento-modelo para produzir cartas, etiquetas e e-mails personalizados.",

    assunto: 'office'
},{
    pergunta: "No PowerPoint, qual recurso permite que alterações de layout e formatação sejam aplicadas a vários slides simultaneamente?",

    alternativas: [
        "Transições",
        "Classificação de Slides",
        "Mestre de Slides",
        "Animações",
        "Modo Leitura"
    ],

    correta: 2,

    feedback: "O Mestre de Slides controla elementos globais da apresentação, como logotipos, fontes e posicionamento de objetos.",

    assunto: 'office'
},{
    pergunta: "No Excel, qual resultado será retornado pela fórmula =E(5>3;8<10)?",

    alternativas: [
        "FALSO",
        "VERDADEIRO",
        "ERRO",
        "5",
        "10"
    ],

    correta: 1,

    feedback: "A função E retorna VERDADEIRO somente quando todas as condições são verdadeiras.",

    assunto: 'office'
},{
    pergunta: "No Word, qual recurso é mais adequado para garantir padronização automática de títulos, subtítulos e demais elementos do documento?",

    alternativas: [
        "Temas",
        "Marcadores",
        "Estilos",
        "Comentários",
        "Colunas"
    ],

    correta: 2,

    feedback: "Os Estilos permitem aplicar formatações padronizadas e facilitam a criação de sumários automáticos.",

    assunto: 'office'
},{
    pergunta: "No Excel, qual função retorna o maior valor encontrado em um intervalo de células?",

    alternativas: [
        "MAIOR",
        "MAXIMO",
        "MAX",
        "SUPERIOR",
        "ALTO"
    ],

    correta: 2,

    feedback: "A função MAX retorna o maior valor existente em um conjunto de dados.",

    assunto: 'office'
},{
    pergunta: "No PowerPoint, qual modo de exibição apresenta miniaturas de todos os slides ao mesmo tempo, facilitando a reorganização da sequência da apresentação?",

    alternativas: [
        "Modo Leitura",
        "Modo Estrutura",
        "Classificação de Slides",
        "Mestre de Slides",
        "Apresentação de Slides"
    ],

    correta: 2,

    feedback: "O modo Classificação de Slides permite visualizar e reorganizar rapidamente toda a apresentação.",

    assunto: 'office'
},{
    pergunta: "No Excel, qual função lógica retorna VERDADEIRO quando pelo menos uma das condições avaliadas é verdadeira?",

    alternativas: [
        "E",
        "SE",
        "OU",
        "CONT.SE",
        "SOMASE"
    ],

    correta: 2,

    feedback: "A função OU retorna VERDADEIRO quando ao menos uma condição é satisfeita.",

    assunto: 'office'
},{
    pergunta: "No Word, ao utilizar Ctrl + Enter, o programa executa qual ação?",

    alternativas: [
        "Insere uma quebra de seção.",
        "Insere uma quebra de página.",
        "Abre um novo documento.",
        "Cria uma nota de rodapé.",
        "Salva o documento."
    ],

    correta: 1,

    feedback: "Ctrl + Enter insere uma quebra de página, iniciando o conteúdo seguinte na próxima página.",

    assunto: 'office'
},
{
    pergunta: "No Excel, qual função é utilizada para retornar a posição de um valor dentro de um intervalo?",

    alternativas: [
        "ÍNDICE",
        "CORRESP",
        "PROCV",
        "DESLOC",
        "LOCALIZAR"
    ],

    correta: 1,

    feedback: "A função CORRESP retorna a posição relativa de um item dentro de um intervalo.",

    assunto: 'office'
},

{
    pergunta: "No Excel, a função ÍNDICE é frequentemente utilizada em conjunto com CORRESP porque:",

    alternativas: [
        "Permite criar gráficos automaticamente.",
        "Substitui completamente as funções lógicas.",
        "Possibilita buscas mais flexíveis do que o PROCV.",
        "Transforma números em texto.",
        "Protege células contra edição."
    ],

    correta: 2,

    feedback: "ÍNDICE + CORRESP é uma combinação muito usada por ser mais flexível do que PROCV.",

    assunto: 'office'
},

{
    pergunta: "No Word, qual recurso permite acompanhar alterações feitas por diferentes revisores em um documento?",

    alternativas: [
        "AutoTexto",
        "Controle de Alterações",
        "Mala Direta",
        "Estilos",
        "Sumário"
    ],

    correta: 1,

    feedback: "O Controle de Alterações registra inserções, exclusões e modificações realizadas no documento.",

    assunto: 'office'
},

{
    pergunta: "No PowerPoint, as transições são aplicadas:",

    alternativas: [
        "Entre slides.",
        "A objetos individuais.",
        "Somente a imagens.",
        "Somente a textos.",
        "Ao plano de fundo."
    ],

    correta: 0,

    feedback: "Transições ocorrem entre slides. Animações são aplicadas aos objetos.",

    assunto: 'office'
},

{
    pergunta: "No Excel, qual função conta apenas células que contêm números?",

    alternativas: [
        "CONT.SE",
        "CONT.VALORES",
        "CONT.NÚM",
        "SOMA",
        "MÉDIA"
    ],

    correta: 2,

    feedback: "CONT.NÚM contabiliza apenas células contendo valores numéricos.",

    assunto: 'office'
},

{
    pergunta: "No Word, um sumário automático depende principalmente da utilização correta de:",

    alternativas: [
        "Quebras de página",
        "Marcadores",
        "Estilos de Título",
        "Tabelas",
        "Comentários"
    ],

    correta: 2,

    feedback: "Os títulos formatados com estilos permitem ao Word gerar automaticamente o sumário.",

    assunto: 'office'
},

{
    pergunta: "No Excel, qual operador é utilizado para indicar uma referência de intervalo?",

    alternativas: [
        ";",
        ":",
        "&",
        "@",
        "%"
    ],

    correta: 1,

    feedback: "O operador ':' define intervalos, como A1:A10.",

    assunto: 'office'
},

{
    pergunta: "No PowerPoint, qual recurso permite ocultar um slide sem removê-lo da apresentação?",

    alternativas: [
        "Excluir Slide",
        "Classificar Slides",
        "Ocultar Slide",
        "Mestre de Slides",
        "Reorganizar Slide"
    ],

    correta: 2,

    feedback: "Ocultar Slide mantém o slide no arquivo, mas impede sua exibição durante a apresentação.",

    assunto: 'office'
},

{
    pergunta: "No Excel, qual fórmula retorna o texto 'Aprovado' quando a nota em A1 for maior ou igual a 7, e 'Reprovado' caso contrário?",

    alternativas: [
        "=SE(A1>=7;\"Aprovado\";\"Reprovado\")",
        "=SE(A1>=7;Aprovado;Reprovado)",
        "=SE(A1>7;\"Aprovado\")",
        "=SE(A1=7;\"Aprovado\";\"Reprovado\")",
        "=OU(A1>=7;\"Aprovado\";\"Reprovado\")"
    ],

    correta: 0,

    feedback: "A função SE exige condição, valor se verdadeiro e valor se falso.",

    assunto: 'office'
},

{
    pergunta: "Em uma apresentação do PowerPoint, a tecla F5 inicia:",

    alternativas: [
        "A edição do slide.",
        "A apresentação a partir do slide atual.",
        "A apresentação desde o primeiro slide.",
        "A impressão dos slides.",
        "O modo de revisão."
    ],

    correta: 2,

    feedback: "F5 inicia a apresentação desde o primeiro slide. Shift + F5 inicia do slide atual.",

    assunto: 'office'
},

];