// ==========================
// FAROL DO SABER - OFFICE
// Banco revisado para concursos de professor.
// 70 questões | gabarito balanceado: 14 A, 14 B, 14 C, 14 D e 14 E.
// ==========================

const office = [
    {
        "pergunta": "Considerando a planilha apresentada na imagem, qual fórmula foi utilizada para obter o valor total de R$ 6.710,00 exibido na célula E7?",
        "imagem": "imagens/questoes/excel01.png",
        "alternativas": [
            "=MÉDIA(E2:E6)",
            "=MÁXIMO(E2:E6)",
            "=CONT.SE(E2:E6)",
            "=PROCV(E2:E6)",
            "=SOMA(E2:E6)"
        ],
        "correta": 4,
        "feedbackAcerto": "\nMuito bem!\n\nA função SOMA é utilizada para adicionar os valores de um intervalo de células.\n\nComo a célula E7 apresenta o total acumulado dos valores existentes entre E2 e E6, a fórmula correta é =SOMA(E2:E6).\n\nEssa é uma das funções mais utilizadas em planilhas eletrônicas.\n",
        "feedbackErro": "A resposta correta é:\n\n=SOMA(E2:E6)\n\nComentário:\nA função SOMA é utilizada para adicionar os valores de um intervalo de células.\n\nComo a célula E7 apresenta o total acumulado dos valores existentes entre E2 e E6, a fórmula correta é =SOMA(E2:E6).\n\nEssa é uma das funções mais utilizadas em planilhas eletrônicas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nAs bancas costumam cobrar a diferença entre SOMA, MÉDIA, MÁXIMO, MÍNIMO e CONT.SE. Saber identificar a finalidade de cada função é fundamental.\n",
        "assunto": "office",
        "id": "office_001",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "Considerando as notas apresentadas na imagem, qual será o resultado da função =MÉDIA(B2:B6)?",
        "imagem": "imagens/questoes/excel02.png",
        "alternativas": [
            "8",
            "7",
            "7,5",
            "8,5",
            "9"
        ],
        "correta": 0,
        "feedbackAcerto": "\nCorreto!\n\nA função MÉDIA calcula a média aritmética dos valores informados.\n\nSomando as notas e dividindo pela quantidade de alunos, obtém-se o resultado 8.\n\nA função MÉDIA é amplamente utilizada em planilhas acadêmicas, financeiras e administrativas.\n",
        "feedbackErro": "A resposta correta é:\n\n8\n\nComentário:\nA função MÉDIA calcula a média aritmética dos valores informados.\n\nSomando as notas e dividindo pela quantidade de alunos, obtém-se o resultado 8.\n\nA função MÉDIA é amplamente utilizada em planilhas acadêmicas, financeiras e administrativas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nEm concursos, é comum a banca apresentar uma tabela e exigir o cálculo manual do resultado da função MÉDIA.\n",
        "assunto": "office",
        "id": "office_002",
        "subtopico": "excel - funções básicas e estatísticas",
        "nivel": "dificil"
    },
    {
        "pergunta": "Ao aplicar a função =MÁXIMO(B2:B6) aos dados apresentados na imagem, qual valor será retornado?",
        "imagem": "imagens/questoes/excel03.png",
        "alternativas": [
            "R$ 2.800,00",
            "R$ 2.400,00",
            "R$ 1.900,00",
            "R$ 3.200,00",
            "R$ 1.500,00"
        ],
        "correta": 3,
        "feedbackAcerto": "\nExcelente!\n\nA função MÁXIMO retorna o maior valor existente em um intervalo de células.\n\nEntre os valores apresentados na tabela, o maior é R$ 3.200,00.\n\nEssa função é muito utilizada em relatórios financeiros, vendas e análises estatísticas.\n",
        "feedbackErro": "A resposta correta é:\n\nR$ 3.200,00\n\nComentário:\nA função MÁXIMO retorna o maior valor existente em um intervalo de células.\n\nEntre os valores apresentados na tabela, o maior é R$ 3.200,00.\n\nEssa função é muito utilizada em relatórios financeiros, vendas e análises estatísticas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda MÁXIMO com MAIOR. MÁXIMO retorna diretamente o maior valor encontrado no intervalo.\n",
        "assunto": "office",
        "id": "office_003",
        "subtopico": "excel - referências, fórmulas e erros",
        "nivel": "dificil"
    },
    {
        "pergunta": "Considerando os dados apresentados na imagem, qual valor seria retornado pela função =MÍNIMO(A2:A6)?",
        "imagem": "imagens/questoes/excel04.png",
        "alternativas": [
            "31",
            "28",
            "25",
            "22",
            "27"
        ],
        "correta": 3,
        "feedbackAcerto": "\nMuito bem!\n\nA função MÍNIMO retorna o menor valor existente em um conjunto de dados.\n\nComparando todos os valores apresentados na tabela, o menor deles é 22.\n\nEssa função é frequentemente utilizada para identificar menores preços, notas ou temperaturas.\n",
        "feedbackErro": "A resposta correta é:\n\n22\n\nComentário:\nA função MÍNIMO retorna o menor valor existente em um conjunto de dados.\n\nComparando todos os valores apresentados na tabela, o menor deles é 22.\n\nEssa função é frequentemente utilizada para identificar menores preços, notas ou temperaturas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões envolvendo MÁXIMO e MÍNIMO costumam aparecer juntas para avaliar a interpretação de tabelas.\n",
        "assunto": "office",
        "id": "office_004",
        "subtopico": "excel - funções básicas e estatísticas",
        "nivel": "dificil"
    },
    {
        "pergunta": "Considerando os dados apresentados na imagem, qual resultado será retornado pela função =CONT.SE(A2:A7;\"Aprovado\")?",
        "imagem": "imagens/questoes/excel05.png",
        "alternativas": [
            "2",
            "4",
            "3",
            "5",
            "6"
        ],
        "correta": 1,
        "feedbackAcerto": "\nPerfeito!\n\nA função CONT.SE realiza uma contagem baseada em um critério.\n\nNa tabela apresentada, a palavra 'Aprovado' aparece quatro vezes.\n\nPor esse motivo, o resultado retornado pela função será 4.\n",
        "feedbackErro": "A resposta correta é:\n\n4\n\nComentário:\nA função CONT.SE realiza uma contagem baseada em um critério.\n\nNa tabela apresentada, a palavra &#039;Aprovado&#039; aparece quatro vezes.\n\nPor esse motivo, o resultado retornado pela função será 4.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nCONT.SE é uma das funções mais cobradas em concursos juntamente com SOMASE, MÉDIASE e PROCV.\n",
        "assunto": "office",
        "id": "office_005",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "Considerando que a célula C2 contém a fórmula =SE(B2>=7;\"Aprovado\";\"Reprovado\"), qual será o resultado exibido para o aluno Bruno?",
        "imagem": "imagens/questoes/excel06.png",
        "alternativas": [
            "Aprovado",
            "Reprovado",
            "VERDADEIRO",
            "#VALOR!",
            "FALSO lógico"
        ],
        "correta": 1,
        "feedbackAcerto": "\nCorreto!\n\nA função SE realiza um teste lógico.\n\nComo a nota de Bruno é 4, a condição B2>=7 não é satisfeita.\n\nDessa forma, a função retorna o valor definido para a condição falsa: 'Reprovado'.\n",
        "feedbackErro": "A resposta correta é:\n\nReprovado\n\nComentário:\nCorreto!\n\nA função SE realiza um teste lógico.\n\nComo a nota de Bruno é 4, a condição B2>=7 não é satisfeita.\n\nDessa forma, a função retorna o valor definido para a condição falsa: 'Reprovado'.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nMemorize a estrutura da função SE: teste lógico, valor se verdadeiro e valor se falso.\n",
        "assunto": "office",
        "id": "office_006",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "Considere que a célula C2 contenha a fórmula =E(A2>=7;B2>=75%). Com base nos dados apresentados na imagem, qual será o resultado retornado para a primeira linha?",
        "imagem": "imagens/questoes/excel07.png",
        "alternativas": [
            "FALSO",
            "Aprovado",
            "VERDADEIRO",
            "Reprovado",
            "Erro de avaliação"
        ],
        "correta": 2,
        "feedbackAcerto": "\nMuito bem!\n\nA função E retorna VERDADEIRO apenas quando todas as condições avaliadas são verdadeiras.\n\nNa situação apresentada, tanto a nota quanto a frequência atendem aos critérios estabelecidos.\n\nPor isso, o resultado retornado é VERDADEIRO.\n",
        "feedbackErro": "A resposta correta é:\n\nVERDADEIRO\n\nComentário:\nMuito bem!\n\nA função E retorna VERDADEIRO apenas quando todas as condições avaliadas são verdadeiras.\n\nNa situação apresentada, tanto a nota quanto a frequência atendem aos critérios estabelecidos.\n\nPor isso, o resultado retornado é VERDADEIRO.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda E com OU. A função E exige que todas as condições sejam verdadeiras.\n",
        "assunto": "office",
        "id": "office_007",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "Considerando os valores apresentados na planilha, qual será o resultado da fórmula =PROCV(\"Monitor\";A2:B6;2;FALSO)?",
        "imagem": "imagens/questoes/excel08.png",
        "alternativas": [
            "R$ 350,00",
            "R$ 180,00",
            "R$ 450,00",
            "R$ 900,00",
            "Erro"
        ],
        "correta": 0,
        "feedbackAcerto": "\nExcelente!\n\nA função PROCV localiza um valor na primeira coluna da tabela e retorna uma informação correspondente na mesma linha.\n\nAo procurar o produto 'Monitor', a função retorna o valor associado de R$ 350,00.\n\nEssa é uma das funções mais cobradas em concursos públicos.\n",
        "feedbackErro": "A resposta correta é:\n\nR$ 350,00\n\nComentário:\nA função PROCV localiza um valor na primeira coluna da tabela e retorna uma informação correspondente na mesma linha.\n\nAo procurar o produto &#039;Monitor&#039;, a função retorna o valor associado de R$ 350,00.\n\nEssa é uma das funções mais cobradas em concursos públicos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNo PROCV, o valor procurado deve estar obrigatoriamente na primeira coluna da matriz de pesquisa.\n",
        "assunto": "office",
        "id": "office_008",
        "subtopico": "excel - tabelas, filtros e recursos avançados",
        "nivel": "dificil"
    },
    {
        "pergunta": "Observando a planilha da imagem, qual função do Excel é a mais adequada para retornar automaticamente o nome 'Carlos' quando o código 103 é informado?",
        "imagem": "imagens/questoes/excel09.png",
        "alternativas": [
            "MÉDIA",
            "CONT.SE",
            "MÁXIMO",
            "PROCV",
            "SOMA"
        ],
        "correta": 3,
        "feedbackAcerto": "\nPerfeito!\n\nA função PROCV é utilizada para localizar informações em tabelas.\n\nAo informar o código 103, ela pesquisa a tabela e retorna automaticamente o nome correspondente.\n\nEsse tipo de busca é muito comum em cadastros, estoques e sistemas administrativos.\n",
        "feedbackErro": "A resposta correta é:\n\nPROCV\n\nComentário:\nA função PROCV é utilizada para localizar informações em tabelas.\n\nAo informar o código 103, ela pesquisa a tabela e retorna automaticamente o nome correspondente.\n\nEsse tipo de busca é muito comum em cadastros, estoques e sistemas administrativos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões envolvendo PROCV aparecem frequentemente associadas a tabelas de produtos, funcionários e alunos.\n",
        "assunto": "office",
        "id": "office_009",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "Observando a planilha apresentada na imagem, qual categoria possui o maior valor de despesa?",
        "imagem": "imagens/questoes/excel10.png",
        "alternativas": [
            "Alimentação",
            "Transporte",
            "Lazer",
            "Moradia",
            "Outros"
        ],
        "correta": 3,
        "feedbackAcerto": "\nCorreto!\n\nAo analisar os valores da tabela, verifica-se que a categoria Moradia apresenta a maior despesa.\n\nQuestões desse tipo avaliam a capacidade de interpretar corretamente os dados apresentados em planilhas.\n",
        "feedbackErro": "A resposta correta é:\n\nMoradia\n\nComentário:\nAo analisar os valores da tabela, verifica-se que a categoria Moradia apresenta a maior despesa.\n\nQuestões desse tipo avaliam a capacidade de interpretar corretamente os dados apresentados em planilhas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNem toda questão de Excel envolve fórmulas. Muitas bancas cobram apenas interpretação de planilhas e gráficos.\n",
        "assunto": "office",
        "id": "office_010",
        "subtopico": "excel - funções básicas e estatísticas",
        "nivel": "dificil"
    },
    {
        "pergunta": "Observando a planilha apresentada na imagem, qual vendedor está associado ao produto 'Monitor'?",
        "imagem": "imagens/questoes/excel11.png",
        "alternativas": [
            "Ana",
            "Bruno",
            "Daniela",
            "Carlos",
            "Eduardo"
        ],
        "correta": 3,
        "feedbackAcerto": "\nMuito bem!\n\nAo localizar o produto 'Monitor' na tabela e analisar a mesma linha, verifica-se que o vendedor associado é Carlos.\n\nQuestões desse tipo avaliam a capacidade de localizar informações e interpretar corretamente os dados apresentados.\n",
        "feedbackErro": "A resposta correta é:\n\nCarlos\n\nComentário:\nAo localizar o produto &#039;Monitor&#039; na tabela e analisar a mesma linha, verifica-se que o vendedor associado é Carlos.\n\nQuestões desse tipo avaliam a capacidade de localizar informações e interpretar corretamente os dados apresentados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nBancas frequentemente apresentam tabelas simples para testar a interpretação de dados sem exigir o uso de fórmulas.\n",
        "assunto": "office",
        "id": "office_011",
        "subtopico": "excel - funções básicas e estatísticas",
        "nivel": "dificil"
    },
    {
        "pergunta": "Observando a imagem do Microsoft Word, qual recurso está sendo editado no documento?",
        "imagem": "imagens/questoes/word02.png",
        "alternativas": [
            "Quebra de Página",
            "Marca d’Água",
            "Cabeçalho e Rodapé",
            "Sumário Automático",
            "Controle de Alterações"
        ],
        "correta": 2,
        "feedbackAcerto": "\nCorreto!\n\nA imagem apresenta o modo de edição de Cabeçalho e Rodapé.\n\nEsse recurso permite inserir informações que serão repetidas automaticamente nas páginas do documento, como títulos, datas, logotipos e numeração.\n",
        "feedbackErro": "A resposta correta é:\n\nCabeçalho e Rodapé\n\nComentário:\nA imagem apresenta o modo de edição de Cabeçalho e Rodapé.\n\nEsse recurso permite inserir informações que serão repetidas automaticamente nas páginas do documento, como títulos, datas, logotipos e numeração.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nCabeçalho aparece na parte superior da página e Rodapé na parte inferior. Ambos podem conter textos, imagens e numeração.\n",
        "assunto": "office",
        "id": "office_012",
        "subtopico": "word - layout, seções e referências",
        "nivel": "dificil"
    },
    {
        "pergunta": "Observando a imagem do Microsoft Word, qual recurso está sendo exibido na parte superior do documento?",
        "imagem": "imagens/questoes/word03.png",
        "alternativas": [
            "Sumário Automático",
            "Índice Remissivo",
            "Bibliografia",
            "Legenda de Figura",
            "Lista de Ilustrações"
        ],
        "correta": 0,
        "feedbackAcerto": "\nPerfeito!\n\nO recurso exibido é um Sumário Automático.\n\nEle é gerado a partir dos estilos de títulos aplicados ao documento e permite atualizar automaticamente a numeração das páginas.\n",
        "feedbackErro": "A resposta correta é:\n\nSumário Automático\n\nComentário:\nPerfeito!\n\nO recurso exibido é um Sumário Automático.\n\nEle é gerado a partir dos estilos de títulos aplicados ao documento e permite atualizar automaticamente a numeração das páginas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nSem utilizar os estilos Título 1, Título 2 e Título 3, o Word não consegue gerar corretamente um sumário automático.\n",
        "assunto": "office",
        "id": "office_013",
        "subtopico": "word - layout, seções e referências",
        "nivel": "dificil"
    },
    {
        "pergunta": "Observando a interface do Microsoft PowerPoint exibida na imagem, qual elemento localizado à esquerda da tela permite ao usuário visualizar e navegar rapidamente entre os slides da apresentação?",
        "imagem": "imagens/questoes/powerpoint01.png",
        "alternativas": [
            "Painel de Anotações do Apresentador",
            "Painel de Miniaturas de Slides",
            "Faixa de Opções do PowerPoint",
            "Barra de Status da Apresentação",
            "Modo de Exibição de Leitura"
        ],
        "correta": 1,
        "feedbackAcerto": "\nCorreto!\n\nO Painel de Miniaturas de Slides exibe versões reduzidas dos slides da apresentação.\n\nEle permite navegar rapidamente entre os slides, alterar a ordem deles e selecionar qualquer slide para edição.\n",
        "feedbackErro": "A resposta correta é:\n\nPainel de Miniaturas de Slides\n\nComentário:\nCorreto!\n\nO Painel de Miniaturas de Slides exibe versões reduzidas dos slides da apresentação.\n\nEle permite navegar rapidamente entre os slides, alterar a ordem deles e selecionar qualquer slide para edição.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nBancas gostam de cobrar a identificação visual dos componentes da interface do PowerPoint.\n",
        "assunto": "office",
        "id": "office_014",
        "subtopico": "powerpoint - slides, layouts e apresentação",
        "nivel": "dificil"
    },
    {
        "pergunta": "Observando a apresentação exibida no Microsoft PowerPoint, qual recurso permite alterar rapidamente o modelo visual de todos os slides, incluindo cores, fontes e efeitos, mantendo a padronização da apresentação?",
        "imagem": "imagens/questoes/powerpoint02.png",
        "alternativas": [
            "Galeria de Transições",
            "Tema da Apresentação",
            "Layout dos Espaços Reservados",
            "Painel de Animação",
            "Formatação do Plano de Fundo"
        ],
        "correta": 1,
        "feedbackAcerto": "\nMuito bem!\n\nOs Temas permitem alterar rapidamente o visual completo da apresentação.\n\nAo aplicar um tema, cores, fontes, estilos e efeitos são atualizados automaticamente em todos os slides.\n",
        "feedbackErro": "A resposta correta é:\n\nTema da Apresentação\n\nComentário:\nMuito bem!\n\nOs Temas permitem alterar rapidamente o visual completo da apresentação.\n\nAo aplicar um tema, cores, fontes, estilos e efeitos são atualizados automaticamente em todos os slides.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda Tema com Layout. O Tema altera o visual geral; o Layout altera apenas a disposição dos elementos em um slide.\n",
        "assunto": "office",
        "id": "office_015",
        "subtopico": "powerpoint - design, transições e animações",
        "nivel": "dificil"
    },
    {
        "pergunta": "Na apresentação exibida, observa-se uma imagem ocupando grande parte do slide de capa. Qual recurso do PowerPoint permite inserir fotografias, ilustrações e outros elementos gráficos diretamente em um slide?",
        "imagem": "imagens/questoes/powerpoint03.png",
        "alternativas": [
            "Transições.",
            "Animações.",
            "Inserir Imagens.",
            "Classificar Slides.",
            "Painel de Anotações."
        ],
        "correta": 2,
        "feedbackAcerto": "\nPerfeito!\n\nO comando Inserir Imagens permite adicionar fotografias, figuras, capturas de tela e outros elementos gráficos aos slides.\n\nEsse recurso é fundamental para tornar apresentações mais visuais e atrativas.\n",
        "feedbackErro": "A resposta correta é:\n\nInserir Imagens.\n\nComentário:\nO comando Inserir Imagens permite adicionar fotografias, figuras, capturas de tela e outros elementos gráficos aos slides.\n\nEsse recurso é fundamental para tornar apresentações mais visuais e atrativas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nAnimações e Transições não inserem imagens. Elas apenas aplicam efeitos aos objetos já existentes.\n",
        "assunto": "office",
        "id": "office_016",
        "subtopico": "powerpoint - design, transições e animações",
        "nivel": "dificil"
    },
    {
        "pergunta": "A imagem mostra o Microsoft PowerPoint com um único slide em branco selecionado. Qual comando da guia Página Inicial permite inserir rapidamente um novo slide na apresentação?",
        "imagem": "imagens/questoes/powerpoint04.png",
        "alternativas": [
            "Redefinir.",
            "Layout.",
            "Novo Slide.",
            "Seção.",
            "Substituir."
        ],
        "correta": 2,
        "feedbackAcerto": "\nExcelente!\n\nO comando Novo Slide adiciona um novo slide à apresentação.\n\nAlém disso, permite escolher diferentes layouts para o slide que será criado.\n",
        "feedbackErro": "A resposta correta é:\n\nNovo Slide.\n\nComentário:\nO comando Novo Slide adiciona um novo slide à apresentação.\n\nAlém disso, permite escolher diferentes layouts para o slide que será criado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA diferença entre Novo Slide e Layout é frequentemente cobrada em concursos de informática.\n",
        "assunto": "office",
        "id": "office_017",
        "subtopico": "powerpoint - slides, layouts e apresentação",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Microsoft Excel, qual função é utilizada para retornar a quantidade de células que atendem a um único critério estabelecido pelo usuário?",
        "alternativas": [
            "CONT.SE",
            "SOMASE",
            "PROCV",
            "MÉDIASE",
            "SE"
        ],
        "correta": 0,
        "feedbackAcerto": "\nCorreto!\n\nA função CONT.SE é utilizada para contar quantas células atendem a um determinado critério.\n\nEla é amplamente utilizada em relatórios, controles de estoque, pesquisas e planilhas administrativas.\n",
        "feedbackErro": "A resposta correta é:\n\nCONT.SE\n\nComentário:\nA função CONT.SE é utilizada para contar quantas células atendem a um determinado critério.\n\nEla é amplamente utilizada em relatórios, controles de estoque, pesquisas e planilhas administrativas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nCONT.SE, SOMASE e MÉDIASE costumam aparecer juntas em provas de Excel e LibreOffice Calc.\n",
        "assunto": "office",
        "id": "office_018",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Microsoft Word, o recurso utilizado para gerar automaticamente uma lista de títulos e subtítulos de um documento é denominado:",
        "alternativas": [
            "Legenda",
            "Índice Remissivo",
            "Nota de Rodapé",
            "Referência Cruzada",
            "Sumário"
        ],
        "correta": 4,
        "feedbackAcerto": "\nMuito bem!\n\nO Sumário Automático organiza os títulos e subtítulos do documento e gera automaticamente a relação de tópicos com suas respectivas páginas.\n",
        "feedbackErro": "A resposta correta é:\n\nSumário\n\nComentário:\nO Sumário Automático organiza os títulos e subtítulos do documento e gera automaticamente a relação de tópicos com suas respectivas páginas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nSem utilizar os estilos Título 1, Título 2 e Título 3, o Word não consegue gerar corretamente um Sumário Automático.\n",
        "assunto": "office",
        "id": "office_019",
        "subtopico": "word - layout, seções e referências",
        "nivel": "dificil"
    },
    {
        "pergunta": "Qual função do Excel procura um valor na primeira coluna de uma tabela e retorna uma informação correspondente localizada na mesma linha?",
        "alternativas": [
            "PROCV",
            "SE",
            "CONT.SE",
            "SOMASE",
            "MÉDIA"
        ],
        "correta": 0,
        "feedbackAcerto": "\nPerfeito!\n\nA função PROCV realiza buscas verticais em tabelas.\n\nEla localiza um valor na primeira coluna e retorna uma informação correspondente na mesma linha.\n",
        "feedbackErro": "A resposta correta é:\n\nPROCV\n\nComentário:\nA função PROCV realiza buscas verticais em tabelas.\n\nEla localiza um valor na primeira coluna e retorna uma informação correspondente na mesma linha.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nPROCV é uma das funções mais cobradas em concursos públicos e processos seletivos.\n",
        "assunto": "office",
        "id": "office_020",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Word, qual recurso permite inserir explicações ou observações complementares ao texto no rodapé da página?",
        "alternativas": [
            "Legenda",
            "Nota de Rodapé",
            "Comentário",
            "Referência Cruzada",
            "Indicador"
        ],
        "correta": 1,
        "feedbackAcerto": "\nCorreto!\n\nAs Notas de Rodapé permitem inserir observações, referências bibliográficas ou informações complementares vinculadas ao texto principal.\n",
        "feedbackErro": "A resposta correta é:\n\nNota de Rodapé\n\nComentário:\nAs Notas de Rodapé permitem inserir observações, referências bibliográficas ou informações complementares vinculadas ao texto principal.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda Nota de Rodapé com Comentário. Ambos servem para observações, mas possuem objetivos diferentes.\n",
        "assunto": "office",
        "id": "office_021",
        "subtopico": "word - layout, seções e referências",
        "nivel": "dificil"
    },
    {
        "pergunta": "Qual guia do PowerPoint reúne os comandos relacionados aos efeitos de movimentação dos objetos em um slide?",
        "alternativas": [
            "Design do Slide",
            "Inserir Objetos",
            "Exibição da Apresentação",
            "Revisão do Conteúdo",
            "Animações"
        ],
        "correta": 4,
        "feedbackAcerto": "\nExcelente!\n\nA guia Animações contém os recursos responsáveis pelos efeitos aplicados a textos, imagens, formas e demais objetos de um slide.\n",
        "feedbackErro": "A resposta correta é:\n\nAnimações\n\nComentário:\nExcelente!\n\nA guia Animações contém os recursos responsáveis pelos efeitos aplicados a textos, imagens, formas e demais objetos de um slide.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda Animações com Transições. Animações atuam nos objetos; Transições atuam entre os slides.\n",
        "assunto": "office",
        "id": "office_022",
        "subtopico": "powerpoint - design, transições e animações",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, qual operador é utilizado para representar uma condição lógica 'diferente de'?",
        "alternativas": [
            "=",
            ">",
            "<=",
            "<>",
            ">="
        ],
        "correta": 3,
        "feedbackAcerto": "\nCorreto!\n\nO operador <> significa \"diferente de\".\n\nEle é amplamente utilizado em funções lógicas, filtros e testes condicionais.\n",
        "feedbackErro": "A resposta correta é:\n\n&lt;&gt;\n\nComentário:\nO operador  significa &quot;diferente de&quot;.\n\nEle é amplamente utilizado em funções lógicas, filtros e testes condicionais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre operadores lógicos costumam aparecer em conjunto com as funções SE, E e OU.\n",
        "assunto": "office",
        "id": "office_023",
        "subtopico": "excel - referências, fórmulas e erros",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, qual função permite somar valores que atendam simultaneamente a mais de um critério?",
        "alternativas": [
            "SOMA",
            "SOMASE",
            "CONT.SE",
            "PROCV",
            "SOMASES"
        ],
        "correta": 4,
        "feedbackAcerto": "\nExcelente!\n\nA função SOMASES permite realizar somas utilizando múltiplos critérios ao mesmo tempo.\n\nEla é muito utilizada em relatórios financeiros, controles de vendas e análises gerenciais.\n",
        "feedbackErro": "A resposta correta é:\n\nSOMASES\n\nComentário:\nA função SOMASES permite realizar somas utilizando múltiplos critérios ao mesmo tempo.\n\nEla é muito utilizada em relatórios financeiros, controles de vendas e análises gerenciais.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA diferença entre SOMASE e SOMASES é bastante cobrada em concursos de informática.\n",
        "assunto": "office",
        "id": "office_024",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No PowerPoint, qual recurso permite que alterações de layout e formatação sejam aplicadas a vários slides simultaneamente?",
        "alternativas": [
            "Transições",
            "Classificação de Slides",
            "Mestre de Slides",
            "Animações",
            "Modo Leitura"
        ],
        "correta": 2,
        "feedbackAcerto": "\nCorreto!\n\nO Mestre de Slides permite controlar elementos globais da apresentação.\n\nAo modificar o Mestre, as alterações podem ser aplicadas automaticamente a vários slides.\n",
        "feedbackErro": "A resposta correta é:\n\nMestre de Slides\n\nComentário:\nO Mestre de Slides permite controlar elementos globais da apresentação.\n\nAo modificar o Mestre, as alterações podem ser aplicadas automaticamente a vários slides.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre Mestre de Slides costumam aparecer associadas à padronização de apresentações corporativas.\n",
        "assunto": "office",
        "id": "office_025",
        "subtopico": "powerpoint - design, transições e animações",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Word, qual recurso é mais adequado para garantir padronização automática de títulos, subtítulos e demais elementos do documento?",
        "alternativas": [
            "Temas",
            "Marcadores",
            "Estilos",
            "Comentários",
            "Colunas"
        ],
        "correta": 2,
        "feedbackAcerto": "\nExcelente!\n\nOs Estilos permitem aplicar formatações padronizadas de forma rápida e consistente.\n\nAlém disso, são fundamentais para a criação de Sumários Automáticos.\n",
        "feedbackErro": "A resposta correta é:\n\nEstilos\n\nComentário:\nOs Estilos permitem aplicar formatações padronizadas de forma rápida e consistente.\n\nAlém disso, são fundamentais para a criação de Sumários Automáticos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nSempre que a questão mencionar padronização automática e Sumário Automático, pense em Estilos.\n",
        "assunto": "office",
        "id": "office_026",
        "subtopico": "word - layout, seções e referências",
        "nivel": "dificil"
    },
    {
        "pergunta": "No PowerPoint, qual modo de exibição apresenta miniaturas de todos os slides ao mesmo tempo, facilitando a reorganização da sequência da apresentação?",
        "alternativas": [
            "Modo de Leitura",
            "Modo de Estrutura",
            "Mestre de Slides",
            "Classificação de Slides",
            "Modo de Exibição do Apresentador"
        ],
        "correta": 3,
        "feedbackAcerto": "\nExcelente!\n\nO modo Classificação de Slides exibe miniaturas de todos os slides simultaneamente.\n\nIsso facilita a visualização geral da apresentação e permite reorganizar rapidamente sua sequência.\n",
        "feedbackErro": "A resposta correta é:\n\nClassificação de Slides\n\nComentário:\nExcelente!\n\nO modo Classificação de Slides exibe miniaturas de todos os slides simultaneamente.\n\nIsso facilita a visualização geral da apresentação e permite reorganizar rapidamente sua sequência.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre modos de exibição costumam aparecer frequentemente em provas de PowerPoint.\n",
        "assunto": "office",
        "id": "office_027",
        "subtopico": "powerpoint - slides, layouts e apresentação",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, qual função lógica retorna VERDADEIRO quando pelo menos uma das condições avaliadas é verdadeira?",
        "alternativas": [
            "E",
            "SE",
            "CONT.SE",
            "SOMASE",
            "OU"
        ],
        "correta": 4,
        "feedbackAcerto": "\nCorreto!\n\nA função OU retorna VERDADEIRO quando pelo menos uma das condições informadas é satisfeita.\n\nEla é muito utilizada em regras que admitem múltiplas possibilidades de aprovação.\n",
        "feedbackErro": "A resposta correta é:\n\nOU\n\nComentário:\nA função OU retorna VERDADEIRO quando pelo menos uma das condições informadas é satisfeita.\n\nEla é muito utilizada em regras que admitem múltiplas possibilidades de aprovação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA principal diferença entre E e OU é uma das mais cobradas em funções lógicas.\n",
        "assunto": "office",
        "id": "office_028",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, qual função é utilizada para retornar a posição de um valor dentro de um intervalo?",
        "alternativas": [
            "ÍNDICE",
            "PROCV",
            "DESLOC",
            "CORRESP",
            "LOCALIZAR"
        ],
        "correta": 3,
        "feedbackAcerto": "\nMuito bem!\n\nA função CORRESP retorna a posição relativa de um valor dentro de um intervalo.\n\nEla é frequentemente utilizada em conjunto com a função ÍNDICE para criar pesquisas avançadas.\n",
        "feedbackErro": "A resposta correta é:\n\nCORRESP\n\nComentário:\nA função CORRESP retorna a posição relativa de um valor dentro de um intervalo.\n\nEla é frequentemente utilizada em conjunto com a função ÍNDICE para criar pesquisas avançadas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA combinação ÍNDICE + CORRESP é considerada uma alternativa mais flexível ao PROCV.\n",
        "assunto": "office",
        "id": "office_029",
        "subtopico": "excel - tabelas, filtros e recursos avançados",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Word, um sumário automático depende principalmente da utilização correta de:",
        "alternativas": [
            "Quebras de página",
            "Marcadores",
            "Tabelas",
            "Comentários",
            "Estilos de Título"
        ],
        "correta": 4,
        "feedbackAcerto": "\nExcelente!\n\nO Sumário Automático é criado a partir dos Estilos de Título aplicados aos tópicos do documento.\n\nSem esses estilos, o Word não consegue estruturar corretamente o sumário.\n",
        "feedbackErro": "A resposta correta é:\n\nEstilos de Título\n\nComentário:\nO Sumário Automático é criado a partir dos Estilos de Título aplicados aos tópicos do documento.\n\nSem esses estilos, o Word não consegue estruturar corretamente o sumário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nSempre que a questão mencionar Sumário Automático, a resposta geralmente estará relacionada aos Estilos de Título.\n",
        "assunto": "office",
        "id": "office_030",
        "subtopico": "word - layout, seções e referências",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, qual operador é utilizado para indicar uma referência de intervalo?",
        "alternativas": [
            ";",
            "&",
            "@",
            ":",
            "%"
        ],
        "correta": 3,
        "feedbackAcerto": "\nMuito bem!\n\nO operador \":\" é utilizado para definir intervalos de células em planilhas.\n\nPor exemplo, A1:A10 representa todas as células compreendidas entre A1 e A10.\n",
        "feedbackErro": "A resposta correta é:\n\n:\n\nComentário:\nO operador &quot;:&quot; é utilizado para definir intervalos de células em planilhas.\n\nPor exemplo, A1:A10 representa todas as células compreendidas entre A1 e A10.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre sintaxe de fórmulas costumam cobrar operadores como :, ;, =, >, < e <>.\n",
        "assunto": "office",
        "id": "office_031",
        "subtopico": "excel - referências, fórmulas e erros",
        "nivel": "dificil"
    },
    {
        "pergunta": "No PowerPoint, qual recurso permite ocultar um slide sem removê-lo da apresentação?",
        "alternativas": [
            "Excluir Slide",
            "Classificar Slides",
            "Ocultar Slide",
            "Mestre de Slides",
            "Reorganizar Slide"
        ],
        "correta": 2,
        "feedbackAcerto": "\nCorreto!\n\nO recurso Ocultar Slide mantém o slide dentro da apresentação, mas impede sua exibição durante a execução normal dos slides.\n\nÉ muito utilizado quando se deseja manter conteúdo de reserva para determinadas situações.\n",
        "feedbackErro": "A resposta correta é:\n\nOcultar Slide\n\nComentário:\nO recurso Ocultar Slide mantém o slide dentro da apresentação, mas impede sua exibição durante a execução normal dos slides.\n\nÉ muito utilizado quando se deseja manter conteúdo de reserva para determinadas situações.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nOcultar Slide é um recurso muito utilizado em apresentações corporativas e frequentemente aparece em provas de PowerPoint.\n",
        "assunto": "office",
        "id": "office_032",
        "subtopico": "powerpoint - slides, layouts e apresentação",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, qual fórmula retorna o texto 'Aprovado' quando a nota em A1 for maior ou igual a 7, e 'Reprovado' caso contrário?",
        "alternativas": [
            "=SE(A1>=7;Aprovado;Reprovado)",
            "=SE(A1>7;\"Aprovado\")",
            "=SE(A1=7;\"Aprovado\";\"Reprovado\")",
            "=SE(A1>=7;\"Aprovado\";\"Reprovado\")",
            "=OU(A1>=7;\"Aprovado\";\"Reprovado\")"
        ],
        "correta": 3,
        "feedbackAcerto": "\nExcelente!\n\nA função SE permite retornar resultados diferentes conforme uma condição seja verdadeira ou falsa.\n\nNesse caso, quando A1 for maior ou igual a 7, será exibido \"Aprovado\". Caso contrário, será exibido \"Reprovado\".\n",
        "feedbackErro": "A resposta correta é:\n\n=SE(A1&gt;=7;&quot;Aprovado&quot;;&quot;Reprovado&quot;)\n\nComentário:\nA função SE permite retornar resultados diferentes conforme uma condição seja verdadeira ou falsa.\n\nNesse caso, quando A1 for maior ou igual a 7, será exibido &quot;Aprovado&quot;. Caso contrário, será exibido &quot;Reprovado&quot;.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA função SE é considerada uma das funções mais importantes e mais cobradas em concursos de informática.\n",
        "assunto": "office",
        "id": "office_033",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Microsoft Excel e no LibreOffice Calc, qual tipo de gráfico é mais indicado para representar a participação percentual de cada categoria em um total?",
        "alternativas": [
            "Gráfico de Linhas",
            "Gráfico de Pizza",
            "Gráfico de Dispersão",
            "Gráfico de Área",
            "Gráfico Radar"
        ],
        "correta": 1,
        "feedbackAcerto": "\nCorreto!\n\nO gráfico de Pizza é utilizado para representar partes de um todo, facilitando a visualização da participação percentual de cada categoria.\n",
        "feedbackErro": "A resposta correta é:\n\nGráfico de Pizza\n\nComentário:\nO gráfico de Pizza é utilizado para representar partes de um todo, facilitando a visualização da participação percentual de cada categoria.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nGráfico de Pizza = participação percentual. Essa associação é muito cobrada em concursos.\n",
        "assunto": "office",
        "id": "office_034",
        "subtopico": "libreoffice e equivalências",
        "nivel": "dificil"
    },
    {
        "pergunta": "Qual recurso do Excel permite exibir apenas os registros que atendem a critérios específicos, ocultando temporariamente os demais?",
        "alternativas": [
            "Classificação",
            "Validação",
            "Proteção",
            "Congelar Painéis",
            "Filtro"
        ],
        "correta": 4,
        "feedbackAcerto": "\nMuito bem!\n\nO Filtro permite exibir apenas os dados que atendem aos critérios definidos pelo usuário.\n",
        "feedbackErro": "A resposta correta é:\n\nFiltro\n\nComentário:\nO Filtro permite exibir apenas os dados que atendem aos critérios definidos pelo usuário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nFiltro e Classificação costumam aparecer juntos nas provas.\n",
        "assunto": "office",
        "id": "office_035",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a Classificação Crescente organiza os dados:",
        "alternativas": [
            "Do maior para o menor",
            "De forma aleatória",
            "Por cores",
            "Por comentários",
            "Do menor para o maior"
        ],
        "correta": 4,
        "feedbackAcerto": "\nCorreto!\n\nA classificação crescente organiza números do menor para o maior e textos em ordem alfabética.\n",
        "feedbackErro": "A resposta correta é:\n\nDo menor para o maior\n\nComentário:\nA classificação crescente organiza números do menor para o maior e textos em ordem alfabética.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nOrdem crescente = A→Z ou menor→maior.\n",
        "assunto": "office",
        "id": "office_036",
        "subtopico": "excel - funções básicas e estatísticas",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Microsoft Word, qual recurso é utilizado para criar tabelas destinadas à organização de informações em linhas e colunas?",
        "alternativas": [
            "SmartArt",
            "Tabela",
            "WordArt",
            "Comentário",
            "Indicador"
        ],
        "correta": 1,
        "feedbackAcerto": "\nPerfeito!\n\nAs tabelas permitem organizar dados em linhas e colunas de forma estruturada.\n",
        "feedbackErro": "A resposta correta é:\n\nTabela\n\nComentário:\nAs tabelas permitem organizar dados em linhas e colunas de forma estruturada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre tabelas aparecem frequentemente em provas de Word.\n",
        "assunto": "office",
        "id": "office_037",
        "subtopico": "word - formatação, estilos e revisão",
        "nivel": "dificil"
    },
    {
        "pergunta": "Qual formato é nativamente utilizado pelo LibreOffice Calc para armazenamento de planilhas?",
        "alternativas": [
            ".xlsx",
            ".csv",
            ".xls",
            ".txt",
            ".ods"
        ],
        "correta": 4,
        "feedbackAcerto": "\nMuito bem!\n\nODS é o formato padrão utilizado pelo LibreOffice Calc.\n",
        "feedbackErro": "A resposta correta é:\n\n.ods\n\nComentário:\nODS é o formato padrão utilizado pelo LibreOffice Calc.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nODS = Calc. XLSX = Excel.\n",
        "assunto": "office",
        "id": "office_038",
        "subtopico": "libreoffice e equivalências",
        "nivel": "dificil"
    },
    {
        "pergunta": "Qual formato é utilizado pelo LibreOffice Impress para apresentações?",
        "alternativas": [
            ".pptx",
            ".ppsx",
            ".odp",
            ".odt",
            ".ods"
        ],
        "correta": 2,
        "feedbackAcerto": "\nCorreto!\n\nODP é o formato padrão das apresentações criadas no LibreOffice Impress.\n",
        "feedbackErro": "A resposta correta é:\n\n.odp\n\nComentário:\nODP é o formato padrão das apresentações criadas no LibreOffice Impress.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nODP = Impress. PPTX = PowerPoint.\n",
        "assunto": "office",
        "id": "office_039",
        "subtopico": "libreoffice e equivalências",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, qual recurso permite definir previamente quais valores podem ser digitados em uma célula?",
        "alternativas": [
            "Formatação Condicional",
            "Validação de Dados",
            "Classificação Personalizada",
            "Congelar Painéis",
            "Gerenciador de Nomes"
        ],
        "correta": 1,
        "feedbackAcerto": "\nMuito bem!\n\nA Validação de Dados permite restringir os valores aceitos em uma célula.\n",
        "feedbackErro": "A resposta correta é:\n\nValidação de Dados\n\nComentário:\nMuito bem!\n\nA Validação de Dados permite restringir os valores aceitos em uma célula.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nValidação de Dados é muito utilizada em formulários e planilhas corporativas.\n",
        "assunto": "office",
        "id": "office_040",
        "subtopico": "excel - tabelas, filtros e recursos avançados",
        "nivel": "dificil"
    },
    {
        "pergunta": "Qual recurso do Excel permite manter determinadas linhas ou colunas visíveis durante a rolagem da planilha?",
        "alternativas": [
            "Congelar Painéis",
            "Formatação Condicional",
            "Validação de Dados",
            "Classificação Personalizada",
            "Agrupamento de Dados"
        ],
        "correta": 0,
        "feedbackAcerto": "\nPerfeito!\n\nCongelar Painéis mantém linhas e colunas visíveis durante a navegação.\n",
        "feedbackErro": "A resposta correta é:\n\nCongelar Painéis\n\nComentário:\nPerfeito!\n\nCongelar Painéis mantém linhas e colunas visíveis durante a navegação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nCongelar Painéis é um recurso bastante cobrado em Excel.\n",
        "assunto": "office",
        "id": "office_041",
        "subtopico": "excel - tabelas, filtros e recursos avançados",
        "nivel": "dificil"
    },
    {
        "pergunta": "Antes de imprimir um documento, qual recurso permite verificar como será o resultado final da impressão?",
        "alternativas": [
            "Controle de Alterações",
            "Visualização de Impressão",
            "Configuração de Página e Margens",
            "Painel de Navegação do Documento",
            "Gerenciamento de Mala Direta"
        ],
        "correta": 1,
        "feedbackAcerto": "\nCorreto!\n\nA Visualização de Impressão permite verificar a aparência final do documento antes da impressão.\n",
        "feedbackErro": "A resposta correta é:\n\nVisualização de Impressão\n\nComentário:\nCorreto!\n\nA Visualização de Impressão permite verificar a aparência final do documento antes da impressão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nVisualização de Impressão é frequentemente cobrada em Word e Writer.\n",
        "assunto": "office",
        "id": "office_042",
        "subtopico": "libreoffice e equivalências",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, considerando a precedência dos operadores, a fórmula =2+3*4 retorna:",
        "alternativas": [
            "20",
            "24",
            "14",
            "9",
            "Erro"
        ],
        "correta": 2,
        "feedbackAcerto": "A multiplicação tem precedência sobre a adição: 3*4=12; 2+12=14.",
        "feedbackErro": "A resposta correta é:\n\n14\n\nComentário:\nA multiplicação tem precedência sobre a adição: 3*4=12; 2+12=14.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Parênteses alteram a ordem; sem parênteses, multiplicação e divisão vêm antes de soma e subtração.",
        "assunto": "office",
        "id": "office_043",
        "subtopico": "excel - referências, fórmulas e erros",
        "nivel": "dificil"
    },
    {
        "pergunta": "No LibreOffice Calc, assim como no Excel configurado em português, o ponto e vírgula em fórmulas geralmente serve para:",
        "alternativas": [
            "Indicar intervalo contínuo de células.",
            "Aplicar negrito ao resultado.",
            "Separar argumentos de funções.",
            "Inserir comentário no documento.",
            "Proteger a planilha contra edição."
        ],
        "correta": 2,
        "feedbackAcerto": "Em muitas configurações em português, o ; separa argumentos, como em =SE(A1>0;\"Sim\";\"Não\").",
        "feedbackErro": "A resposta correta é:\n\nSeparar argumentos de funções.\n\nComentário:\nEm muitas configurações em português, o ; separa argumentos, como em =SE(A1>0;\"Sim\";\"Não\").\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Intervalo contínuo costuma usar dois-pontos, como A1:A10.",
        "assunto": "office",
        "id": "office_044",
        "subtopico": "libreoffice e equivalências",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, ao copiar a fórmula =$A$1+B1 da célula C1 para C2, como fica a referência ao primeiro termo da fórmula?",
        "alternativas": [
            "Permanece como $A$1.",
            "Altera para $A$2, preservando a coluna absoluta.",
            "Altera para A$2, mantendo apenas a linha fixa.",
            "Altera para $B$1, acompanhando a coluna de destino.",
            "Altera para A1, retirando as referências absolutas."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! A referência absoluta mantém fixa a coluna e a linha durante a cópia da fórmula.",
        "feedbackErro": "A resposta correta é:\n\nPermanece como $A$1.\n\nComentário:\nA referência absoluta mantém fixa a coluna e a linha durante a cópia da fórmula.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Referência absoluta fixa coluna e linha: $A$1.",
        "assunto": "office",
        "id": "office_045",
        "subtopico": "excel - referências, fórmulas e erros",
        "nivel": "dificil"
    },
    {
        "pergunta": "Em uma planilha, a fórmula =SOMASE(A2:A20;\"PA\";C2:C20) tem como finalidade:",
        "alternativas": [
            "Somar os valores de C2:C20 quando A2:A20 for igual a PA.",
            "Contar quantas células de A2:A20 possuem o texto PA.",
            "Calcular a média dos valores de C2:C20 associados a PA.",
            "Localizar PA em C2:C20 e retornar o valor correspondente.",
            "Somar todos os valores de A2:A20 independentemente de critério."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! SOMASE soma um intervalo numérico conforme um critério aplicado a outro intervalo.",
        "feedbackErro": "A resposta correta é a que soma o intervalo C2:C20 apenas quando o critério PA aparece em A2:A20.",
        "dicaBanca": "SOMASE trabalha com um critério; SOMASES trabalha com vários critérios.",
        "assunto": "office",
        "id": "office_046",
        "subtopico": "libreoffice e equivalências",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Word, a utilização correta dos Estilos de Título é indispensável principalmente para:",
        "alternativas": [
            "Gerar sumário automático com base na estrutura de títulos.",
            "Salvar o documento em PDF preservando todos os recursos de edição.",
            "Impedir alterações de revisores sem ativar proteção no documento.",
            "Converter tabelas em imagens mantendo referências de dados atualizáveis.",
            "Criar uma cópia em nuvem cada vez que um título for modificado."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O sumário automático depende dos estilos aplicados aos títulos e subtítulos.",
        "feedbackErro": "A resposta correta é:\n\nGerar sumário automático com base na estrutura de títulos.\n\nComentário:\nO sumário automático depende dos estilos aplicados aos títulos e subtítulos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Quando a banca falar em sumário automático, pense em Estilos de Título.",
        "assunto": "office",
        "id": "office_047",
        "subtopico": "word - layout, seções e referências",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, o erro #N/D costuma aparecer quando uma função de pesquisa, como PROCV, PROCX ou CORRESP:",
        "alternativas": [
            "Não encontra o valor procurado no intervalo definido.",
            "Divide um número por zero durante a avaliação da fórmula.",
            "Usa uma referência de célula que foi removida da pasta de trabalho.",
            "Recebe uma data como texto em uma operação que exige valor numérico.",
            "Encontra excesso de regras de formatação condicional no intervalo."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! #N/D indica que o valor pesquisado não foi localizado.",
        "feedbackErro": "A resposta correta é:\n\nNão encontra o valor procurado no intervalo definido.\n\nComentário:\n#N/D indica que o valor pesquisado não foi localizado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "#N/D costuma aparecer em pesquisa; #DIV/0! aparece em divisão por zero.",
        "assunto": "office",
        "id": "office_048",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a opção Congelar Painéis é útil principalmente para:",
        "alternativas": [
            "Manter linhas ou colunas visíveis durante a rolagem da planilha.",
            "Bloquear células selecionadas contra edição depois da proteção da planilha.",
            "Transformar fórmulas em valores estáticos sem alterar a aparência das células.",
            "Repetir cabeçalhos automaticamente em todas as páginas de impressão.",
            "Ocultar grupos de linhas e colunas mantendo a estrutura de tópicos."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Congelar Painéis facilita a leitura de tabelas grandes mantendo títulos visíveis.",
        "feedbackErro": "A resposta correta é:\n\nManter linhas ou colunas visíveis durante a rolagem da planilha.\n\nComentário:\nCongelar Painéis facilita a leitura de tabelas grandes mantendo títulos visíveis.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Congelar Painéis não é proteção; é recurso de visualização.",
        "assunto": "office",
        "id": "office_049",
        "subtopico": "excel - funções básicas e estatísticas",
        "nivel": "dificil"
    },
    {
        "pergunta": "No LibreOffice Calc, a função equivalente ao uso de uma condição simples para retornar valores diferentes é:",
        "alternativas": [
            "SE.",
            "PROCV.",
            "SOMASE.",
            "CORRESP.",
            "CONCATENAR."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! A função SE executa um teste lógico e retorna valores conforme o resultado.",
        "feedbackErro": "A resposta correta é SE. Ela permite definir resultado para condição verdadeira e resultado para condição falsa.",
        "dicaBanca": "SE é função lógica básica no Excel e no LibreOffice Calc.",
        "assunto": "office",
        "id": "office_050",
        "subtopico": "libreoffice e equivalências",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, uma Tabela Dinâmica é indicada principalmente para:",
        "alternativas": [
            "Resumir, cruzar e analisar grandes volumes de dados.",
            "Consolidar arquivos diferentes em uma única pasta sem fórmulas de vínculo.",
            "Substituir filtros por regras permanentes de validação das células.",
            "Converter dados tabulares em slides vinculados a uma apresentação.",
            "Eliminar fórmulas repetidas mantendo apenas os valores calculados."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Tabelas Dinâmicas permitem resumir e reorganizar dados rapidamente.",
        "feedbackErro": "A resposta correta é:\n\nResumir, cruzar e analisar grandes volumes de dados.\n\nComentário:\nTabelas Dinâmicas permitem resumir e reorganizar dados rapidamente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Tabela Dinâmica = síntese, cruzamento e análise de dados.",
        "assunto": "office",
        "id": "office_051",
        "subtopico": "excel - tabelas, filtros e recursos avançados",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a referência A$1, ao ser copiada para baixo, mantém fixa:",
        "alternativas": [
            "A linha 1.",
            "A coluna A.",
            "A célula inteira.",
            "A planilha ativa.",
            "O intervalo A1:A1."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O símbolo $ antes do número fixa a linha.",
        "feedbackErro": "A resposta correta identifica que apenas a linha 1 está fixa. A coluna poderá variar se a fórmula for copiada lateralmente.",
        "dicaBanca": "A$1 fixa linha; $A1 fixa coluna; $A$1 fixa ambos.",
        "assunto": "office",
        "id": "office_052",
        "subtopico": "excel - referências, fórmulas e erros",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a função CONT.SES é mais adequada que CONT.SE quando o objetivo é:",
        "alternativas": [
            "Somar valores que atendem simultaneamente a dois ou mais critérios.",
            "Contar registros que atendem a dois ou mais critérios.",
            "Retornar o maior valor condicionado por dois intervalos de pesquisa.",
            "Converter textos em datas conforme dois formatos definidos pelo usuário.",
            "Criar gráficos a partir de dois critérios aplicados à mesma tabela."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! CONT.SES conta células ou registros considerando múltiplos critérios.",
        "feedbackErro": "A resposta correta é:\n\nContar registros que atendem a dois ou mais critérios.\n\nComentário:\nCONT.SES conta células ou registros considerando múltiplos critérios.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "O S no final geralmente indica múltiplos critérios: CONT.SES, SOMASES, MÉDIASES.",
        "assunto": "office",
        "id": "office_053",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No PowerPoint, um Layout de Slide define principalmente:",
        "alternativas": [
            "O efeito aplicado na passagem entre dois slides consecutivos.",
            "A disposição dos espaços reservados dentro de um slide.",
            "O conjunto de permissões usado para proteger a apresentação.",
            "O local de armazenamento dos arquivos vinculados à apresentação.",
            "A sequência temporal dos efeitos de animação de cada objeto."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Layout define onde ficam título, conteúdo, imagens e demais espaços reservados.",
        "feedbackErro": "A resposta correta é:\n\nA disposição dos espaços reservados dentro de um slide.\n\nComentário:\nLayout define onde ficam título, conteúdo, imagens e demais espaços reservados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Tema muda aparência; Layout muda disposição dos elementos.",
        "assunto": "office",
        "id": "office_054",
        "subtopico": "powerpoint - slides, layouts e apresentação",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a fórmula =ARRED(12,486;2) retorna:",
        "alternativas": [
            "12,48",
            "12,49",
            "12,50",
            "12,40",
            "Erro de sintaxe"
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! O valor 12,486 arredondado para duas casas decimais resulta em 12,49.",
        "feedbackErro": "A resposta correta considera a terceira casa decimal, que é 6, elevando 12,48 para 12,49.",
        "dicaBanca": "ARRED exige atenção ao número de casas decimais.",
        "assunto": "office",
        "id": "office_055",
        "subtopico": "excel - referências, fórmulas e erros",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a utilização de referências entre planilhas permite:",
        "alternativas": [
            "Criar automaticamente uma nova conta de usuário.",
            "Usar valores de uma aba em fórmulas de outra aba.",
            "Impedir a abertura do arquivo em versões antigas.",
            "Converter todas as células em texto sem formatação.",
            "Excluir vínculos com gráficos incorporados."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Fórmulas podem buscar dados em outras planilhas da mesma pasta de trabalho.",
        "feedbackErro": "A resposta correta indica o uso de dados entre abas, como =Planilha2!A1.",
        "dicaBanca": "A referência entre abas costuma usar o nome da planilha seguido de ponto de exclamação.",
        "assunto": "office",
        "id": "office_056",
        "subtopico": "excel - referências, fórmulas e erros",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Word, a ferramenta Pincel de Formatação tem como finalidade:",
        "alternativas": [
            "Criar cópia de segurança do documento ativo.",
            "Copiar a formatação de um trecho e aplicá-la a outro.",
            "Transformar todas as tabelas em texto sem separadores.",
            "Inserir campos automáticos de mala direta.",
            "Comparar duas versões do documento."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! O Pincel de Formatação replica estilo visual, como fonte, tamanho e alinhamento.",
        "feedbackErro": "A resposta correta relaciona o recurso à cópia de formatação, não de conteúdo textual.",
        "dicaBanca": "Pincel copia aparência; Ctrl+C copia conteúdo.",
        "assunto": "office",
        "id": "office_057",
        "subtopico": "word - formatação, estilos e revisão",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a fórmula =ESQUERDA(\"MARITIMO\";3) retorna:",
        "alternativas": [
            "IMO",
            "MARITIMO",
            "MAR",
            "TIM",
            "Erro"
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! ESQUERDA retorna os primeiros caracteres do texto informado.",
        "feedbackErro": "A resposta correta é MAR, pois são os três primeiros caracteres da palavra MARITIMO.",
        "dicaBanca": "ESQUERDA pega do início; DIREITA pega do fim; EXT.TEXTO pega do meio.",
        "assunto": "office",
        "id": "office_058",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Word, a função Localizar e Substituir permite:",
        "alternativas": [
            "Criar uma apresentação com base na estrutura de títulos do documento.",
            "Alterar parâmetros de idioma e teclado usados na edição do arquivo.",
            "Encontrar ocorrências de texto e trocá-las por outro conteúdo.",
            "Remover estilos do documento preservando a aparência de cada trecho.",
            "Gerar referências cruzadas para cada ocorrência do termo localizado."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! O recurso procura textos e pode substituir ocorrências em massa.",
        "feedbackErro": "A resposta correta é:\n\nEncontrar ocorrências de texto e trocá-las por outro conteúdo.\n\nComentário:\nO recurso procura textos e pode substituir ocorrências em massa.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Ctrl+L ou Ctrl+U podem variar conforme idioma e aplicativo; a banca costuma cobrar a função do recurso.",
        "assunto": "office",
        "id": "office_059",
        "subtopico": "word - formatação, estilos e revisão",
        "nivel": "dificil"
    },
    {
        "pergunta": "No PowerPoint, ao inserir um vídeo vinculado em vez de incorporado, é correto afirmar que:",
        "alternativas": [
            "O vídeo passa a integrar o tema visual aplicado aos slides.",
            "A apresentação incorpora uma cópia temporária do vídeo a cada abertura.",
            "O arquivo externo precisa estar acessível para reprodução correta.",
            "O vídeo é convertido em objeto gráfico editável dentro da apresentação.",
            "A vinculação elimina a dependência de recursos de reprodução do sistema."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Arquivos vinculados dependem do caminho e da disponibilidade do arquivo original.",
        "feedbackErro": "A resposta correta é:\n\nO arquivo externo precisa estar acessível para reprodução correta.\n\nComentário:\nArquivos vinculados dependem do caminho e da disponibilidade do arquivo original.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Vincular reduz o arquivo, mas cria dependência externa.",
        "assunto": "office",
        "id": "office_060",
        "subtopico": "powerpoint - design, transições e animações",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a função HOJE() retorna:",
        "alternativas": [
            "A hora atual do sistema, sem informar a data.",
            "A data em que o arquivo foi criado pela primeira vez.",
            "A data atual, sem exigir argumento.",
            "O último dia útil do mês anterior à data do sistema.",
            "A data e a hora atuais em um único valor textual."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! HOJE() retorna a data atual do sistema.",
        "feedbackErro": "A resposta correta é:\n\nA data atual, sem exigir argumento.\n\nComentário:\nHOJE() retorna a data atual do sistema.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "HOJE() retorna data; AGORA() retorna data e hora.",
        "assunto": "office",
        "id": "office_061",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a função CORRESP retorna:",
        "alternativas": [
            "O conteúdo da célula situada em uma linha e coluna informadas.",
            "A soma dos valores que atendem a determinado critério.",
            "O texto localizado à esquerda de uma cadeia de caracteres.",
            "A posição relativa de um valor dentro de um intervalo.",
            "O número de planilhas existentes na pasta."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! CORRESP informa a posição relativa do item encontrado no intervalo.",
        "feedbackErro": "A resposta correta diferencia CORRESP de ÍNDICE. CORRESP retorna posição; ÍNDICE retorna valor.",
        "dicaBanca": "ÍNDICE + CORRESP é alternativa flexível ao PROCV.",
        "assunto": "office",
        "id": "office_062",
        "subtopico": "excel - funções lógicas e condicionais",
        "nivel": "dificil"
    },
    {
        "pergunta": "No PowerPoint, a inserção de Seções em uma apresentação é útil para:",
        "alternativas": [
            "Transformar slides em páginas de texto corrido.",
            "Aplicar criptografia individual a imagens.",
            "Impedir a reprodução de vídeos incorporados.",
            "Agrupar e organizar conjuntos de slides por assunto.",
            "Converter automaticamente a apresentação em planilha."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Seções ajudam a organizar apresentações grandes em blocos lógicos.",
        "feedbackErro": "A resposta correta associa seções ao agrupamento de slides relacionados.",
        "dicaBanca": "Seções organizam; Transições animam a passagem entre slides.",
        "assunto": "office",
        "id": "office_063",
        "subtopico": "powerpoint - design, transições e animações",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, ao proteger uma planilha, o usuário pode:",
        "alternativas": [
            "Impedir que o arquivo seja aberto em outro computador.",
            "Apagar automaticamente fórmulas ocultas.",
            "Converter células desbloqueadas em comentários.",
            "Restringir ações como edição de células bloqueadas.",
            "Substituir todas as funções por valores."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! A proteção de planilha limita ações de edição conforme permissões configuradas.",
        "feedbackErro": "A resposta correta trata de restrição de edição em células bloqueadas e outros elementos.",
        "dicaBanca": "Proteger planilha não é o mesmo que criptografar a abertura do arquivo.",
        "assunto": "office",
        "id": "office_064",
        "subtopico": "excel - funções básicas e estatísticas",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, uma pasta de trabalho corresponde:",
        "alternativas": [
            "A uma única célula selecionada na planilha ativa.",
            "Ao conjunto de fontes instaladas no sistema.",
            "A uma tabela dinâmica criada automaticamente.",
            "Ao arquivo que pode conter uma ou mais planilhas.",
            "Ao recurso que valida dados por lista suspensa."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! A pasta de trabalho é o arquivo do Excel e pode conter várias planilhas.",
        "feedbackErro": "A resposta correta diferencia pasta de trabalho de planilha. O arquivo contém abas/planilhas.",
        "dicaBanca": "Pasta de trabalho = arquivo; planilha = aba interna.",
        "assunto": "office",
        "id": "office_065",
        "subtopico": "excel - tabelas, filtros e recursos avançados",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, o recurso Atingir Meta é classificado como ferramenta de:",
        "alternativas": [
            "Correção ortográfica.",
            "Proteção de células.",
            "Inserção de gráfico.",
            "Formatação de página.",
            "Análise de hipóteses."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Atingir Meta altera um valor de entrada para alcançar um resultado desejado.",
        "feedbackErro": "A resposta correta associa Atingir Meta à Análise de Hipóteses.",
        "dicaBanca": "Atingir Meta, Tabela de Dados e Solver aparecem em análise de cenários.",
        "assunto": "office",
        "id": "office_066",
        "subtopico": "excel - funções básicas e estatísticas",
        "nivel": "dificil"
    },
    {
        "pergunta": "No PowerPoint, o recurso Ensaiar Intervalos é usado para:",
        "alternativas": [
            "Criar logotipos vetoriais a partir dos temas da apresentação.",
            "Bloquear slides ocultos contra alterações durante a edição.",
            "Remover comentários e anotações antes do modo de apresentação.",
            "Importar dados de planilhas e atualizar automaticamente gráficos vinculados.",
            "Registrar tempos de apresentação de cada slide."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Ensaiar Intervalos grava tempos para orientar ou automatizar a apresentação.",
        "feedbackErro": "A resposta correta é:\n\nRegistrar tempos de apresentação de cada slide.\n\nComentário:\nEnsaiar Intervalos grava tempos para orientar ou automatizar a apresentação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Intervalos e temporização aparecem em questões de apresentação automática.",
        "assunto": "office",
        "id": "office_067",
        "subtopico": "powerpoint - design, transições e animações",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Word, uma legenda automática para figuras pode ser usada depois para gerar:",
        "alternativas": [
            "Uma relação automática dos hiperlinks existentes no documento.",
            "Uma lista de macros associadas às imagens inseridas no texto.",
            "Um índice remissivo baseado nos nomes dos arquivos de imagem.",
            "Uma lista de referências cruzadas associadas aos objetos gráficos.",
            "Uma lista de ilustrações."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Legendas numeradas permitem gerar listas de figuras ou tabelas.",
        "feedbackErro": "A resposta correta é:\n\nUma lista de ilustrações.\n\nComentário:\nLegendas numeradas permitem gerar listas de figuras ou tabelas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Lista de ilustrações depende de legendas bem aplicadas.",
        "assunto": "office",
        "id": "office_068",
        "subtopico": "word - layout, seções e referências",
        "nivel": "dificil"
    },
    {
        "pergunta": "No Excel, a função =DIREITA(\"Concurso\";4) retorna:",
        "alternativas": [
            "Conc",
            "curso",
            "Concurso",
            "urso",
            "urso"
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! DIREITA retorna os caracteres finais do texto; em 'Concurso', os 4 últimos são 'urso'.",
        "feedbackErro": "A resposta correta é 'urso', formado pelos quatro últimos caracteres da palavra.",
        "dicaBanca": "DIREITA pega do fim do texto. Cuidado com alternativas parecidas.",
        "assunto": "office",
        "id": "office_069",
        "subtopico": "excel - funções básicas e estatísticas",
        "nivel": "dificil"
    },
    {
        "pergunta": "No PowerPoint, um Tema da apresentação reúne principalmente:",
        "alternativas": [
            "Senhas, macros e permissões de compartilhamento da apresentação.",
            "Fórmulas, filtros e tabelas usadas em objetos de planilha incorporados.",
            "Comentários, anotações e referências usadas durante a revisão do arquivo.",
            "Hiperlinks, mídias vinculadas e histórico de navegação do apresentador.",
            "Cores, fontes, efeitos e estilos visuais coordenados."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Temas padronizam a aparência da apresentação.",
        "feedbackErro": "A resposta correta é:\n\nCores, fontes, efeitos e estilos visuais coordenados.\n\nComentário:\nTemas padronizam a aparência da apresentação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Tema muda identidade visual; layout muda disposição do conteúdo.",
        "assunto": "office",
        "id": "office_070",
        "subtopico": "powerpoint - design, transições e animações",
        "nivel": "dificil"
    }
];
