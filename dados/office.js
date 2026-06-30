// ==========================
// FAROL DO SABER - OFFICE
// Questões revisadas: gabarito balanceado, feedback sem letra fixa e duplicidades removidas.
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "Considerando que a célula C2 contém a fórmula =SE(B2>=7;\"Aprovado\";\"Reprovado\"), qual será o resultado exibido para o aluno Bruno?",
        "imagem": "imagens/questoes/excel06.png",
        "alternativas": [
            "Aprovado",
            "Reprovado",
            "7",
            "Erro",
            "Falso"
        ],
        "correta": 1,
        "feedbackAcerto": "\nCorreto!\n\nA função SE realiza um teste lógico.\n\nComo a nota de Bruno é 4, a condição B2>=7 não é satisfeita.\n\nDessa forma, a função retorna o valor definido para a condição falsa: 'Reprovado'.\n",
        "feedbackErro": "A resposta correta é:\n\nReprovado\n\nComentário:\nA função SE realiza um teste lógico.\n\nComo a nota de Bruno é 4, a condição B2&gt;=7 não é satisfeita.\n\nDessa forma, a função retorna o valor definido para a condição falsa: &#039;Reprovado&#039;.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nMemorize a estrutura da função SE: teste lógico, valor se verdadeiro e valor se falso.\n",
        "assunto": "office"
    },
    {
        "pergunta": "Considere que a célula C2 contenha a fórmula =E(A2>=7;B2>=75%). Com base nos dados apresentados na imagem, qual será o resultado retornado para a primeira linha?",
        "imagem": "imagens/questoes/excel07.png",
        "alternativas": [
            "FALSO",
            "Aprovado",
            "VERDADEIRO",
            "Reprovado",
            "Erro"
        ],
        "correta": 2,
        "feedbackAcerto": "\nMuito bem!\n\nA função E retorna VERDADEIRO apenas quando todas as condições avaliadas são verdadeiras.\n\nNa situação apresentada, tanto a nota quanto a frequência atendem aos critérios estabelecidos.\n\nPor isso, o resultado retornado é VERDADEIRO.\n",
        "feedbackErro": "A resposta correta é:\n\nVERDADEIRO\n\nComentário:\nA função E retorna VERDADEIRO apenas quando todas as condições avaliadas são verdadeiras.\n\nNa situação apresentada, tanto a nota quanto a frequência atendem aos critérios estabelecidos.\n\nPor isso, o resultado retornado é VERDADEIRO.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda E com OU. A função E exige que todas as condições sejam verdadeiras.\n",
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "Observando a imagem do Microsoft Word, qual guia da Faixa de Opções está selecionada no momento?",
        "imagem": "imagens/questoes/word01.png",
        "alternativas": [
            "Página Inicial",
            "Inserir",
            "Layout",
            "Design",
            "Revisão"
        ],
        "correta": 0,
        "feedbackAcerto": "\nExcelente!\n\nA guia Página Inicial é a guia principal do Microsoft Word.\n\nNela estão disponíveis comandos de formatação de texto, fonte, alinhamento, estilos, marcadores e edição básica do documento.\n",
        "feedbackErro": "A resposta correta é:\n\nPágina Inicial\n\nComentário:\nA guia Página Inicial é a guia principal do Microsoft Word.\n\nNela estão disponíveis comandos de formatação de texto, fonte, alinhamento, estilos, marcadores e edição básica do documento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre a Faixa de Opções costumam cobrar a localização dos comandos dentro das guias do Word.\n",
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "Observando a imagem do Microsoft Word, qual recurso está sendo exibido na parte superior do documento?",
        "imagem": "imagens/questoes/word03.png",
        "alternativas": [
            "Sumário Automático",
            "Índice Remissivo",
            "Bibliografia",
            "Legenda de Figura",
            "Nota de Rodapé"
        ],
        "correta": 0,
        "feedbackAcerto": "\nPerfeito!\n\nO recurso exibido é um Sumário Automático.\n\nEle é gerado a partir dos estilos de títulos aplicados ao documento e permite atualizar automaticamente a numeração das páginas.\n",
        "feedbackErro": "A resposta correta é:\n\nSumário Automático\n\nComentário:\nO recurso exibido é um Sumário Automático.\n\nEle é gerado a partir dos estilos de títulos aplicados ao documento e permite atualizar automaticamente a numeração das páginas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nSem utilizar os estilos Título 1, Título 2 e Título 3, o Word não consegue gerar corretamente um sumário automático.\n",
        "assunto": "office"
    },
    {
        "pergunta": "A imagem do Microsoft Word exibe duas marcações pontilhadas identificadas como 'Quebra de Seção'. Qual é a principal finalidade desse recurso?",
        "imagem": "imagens/questoes/word04.png",
        "alternativas": [
            "Separar partes do documento permitindo configurações independentes de formatação.",
            "Inserir uma quebra automática de linha dentro de um parágrafo.",
            "Criar um índice automático baseado nos títulos do texto.",
            "Adicionar comentários ocultos para revisão do documento.",
            "Dividir uma tabela extensa em várias páginas."
        ],
        "correta": 0,
        "feedbackAcerto": "\nMuito bem!\n\nAs Quebras de Seção permitem dividir um documento em partes independentes.\n\nCada seção pode possuir configurações próprias de margens, orientação da página, cabeçalhos, rodapés e numeração.\n",
        "feedbackErro": "A resposta correta é:\n\nSeparar partes do documento permitindo configurações independentes de formatação.\n\nComentário:\nAs Quebras de Seção permitem dividir um documento em partes independentes.\n\nCada seção pode possuir configurações próprias de margens, orientação da página, cabeçalhos, rodapés e numeração.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nUma das pegadinhas mais comuns é confundir Quebra de Página com Quebra de Seção.\n",
        "assunto": "office"
    },
    {
        "pergunta": "A imagem mostra duas Quebras de Seção diferentes no Microsoft Word: 'Próxima Página' e 'Página Ímpar'. Qual alternativa descreve corretamente a diferença entre elas?",
        "imagem": "imagens/questoes/word05.png",
        "alternativas": [
            "Ambas possuem exatamente a mesma função e produzem resultados idênticos.",
            "A quebra 'Página Ímpar' é utilizada apenas para documentos impressos em orientação paisagem.",
            "A quebra 'Próxima Página' inicia a seção seguinte na página seguinte, enquanto a quebra 'Página Ímpar' inicia a nova seção obrigatoriamente na próxima página ímpar.",
            "A quebra 'Próxima Página' cria apenas uma quebra de linha avançada dentro do mesmo parágrafo.",
            "A quebra 'Página Ímpar' remove automaticamente cabeçalhos e rodapés da próxima seção."
        ],
        "correta": 2,
        "feedbackAcerto": "\nExcelente!\n\nA Quebra de Seção do tipo Próxima Página inicia a nova seção imediatamente na página seguinte.\n\nJá a opção Página Ímpar força o início da nova seção na próxima página ímpar disponível, podendo inclusive inserir uma página em branco para respeitar essa regra.\n",
        "feedbackErro": "A resposta correta é:\n\nA quebra &#039;Próxima Página&#039; inicia a seção seguinte na página seguinte, enquanto a quebra &#039;Página Ímpar&#039; inicia a nova seção obrigatoriamente na próxima página ímpar.\n\nComentário:\nA Quebra de Seção do tipo Próxima Página inicia a nova seção imediatamente na página seguinte.\n\nJá a opção Página Ímpar força o início da nova seção na próxima página ímpar disponível, podendo inclusive inserir uma página em branco para respeitar essa regra.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre Quebras de Seção costumam aparecer em provas que cobram recursos avançados do Word.\n",
        "assunto": "office"
    },
    {
        "pergunta": "Observando a interface do Microsoft PowerPoint exibida na imagem, qual elemento localizado à esquerda da tela permite ao usuário visualizar e navegar rapidamente entre os slides da apresentação?",
        "imagem": "imagens/questoes/powerpoint01.png",
        "alternativas": [
            "Painel de Anotações.",
            "Painel de Miniaturas de Slides.",
            "Faixa de Opções (Ribbon).",
            "Barra de Status.",
            "Modo de Leitura."
        ],
        "correta": 1,
        "feedbackAcerto": "\nCorreto!\n\nO Painel de Miniaturas de Slides exibe versões reduzidas dos slides da apresentação.\n\nEle permite navegar rapidamente entre os slides, alterar a ordem deles e selecionar qualquer slide para edição.\n",
        "feedbackErro": "A resposta correta é:\n\nPainel de Miniaturas de Slides.\n\nComentário:\nO Painel de Miniaturas de Slides exibe versões reduzidas dos slides da apresentação.\n\nEle permite navegar rapidamente entre os slides, alterar a ordem deles e selecionar qualquer slide para edição.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nBancas gostam de cobrar a identificação visual dos componentes da interface do PowerPoint.\n",
        "assunto": "office"
    },
    {
        "pergunta": "Observando a apresentação exibida no Microsoft PowerPoint, qual recurso permite alterar rapidamente o modelo visual de todos os slides, incluindo cores, fontes e efeitos, mantendo a padronização da apresentação?",
        "imagem": "imagens/questoes/powerpoint02.png",
        "alternativas": [
            "Transições.",
            "Tema da Apresentação.",
            "Layout do Slide.",
            "Animações.",
            "Cronograma."
        ],
        "correta": 1,
        "feedbackAcerto": "\nMuito bem!\n\nOs Temas permitem alterar rapidamente o visual completo da apresentação.\n\nAo aplicar um tema, cores, fontes, estilos e efeitos são atualizados automaticamente em todos os slides.\n",
        "feedbackErro": "A resposta correta é:\n\nTema da Apresentação.\n\nComentário:\nOs Temas permitem alterar rapidamente o visual completo da apresentação.\n\nAo aplicar um tema, cores, fontes, estilos e efeitos são atualizados automaticamente em todos os slides.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda Tema com Layout. O Tema altera o visual geral; o Layout altera apenas a disposição dos elementos em um slide.\n",
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No PowerPoint, as transições são aplicadas:",
        "alternativas": [
            "A caracteres individuais.",
            "À passagem entre slides.",
            "A objetos específicos do slide.",
            "A tabelas e gráficos.",
            "Somente a imagens."
        ],
        "correta": 1,
        "feedbackAcerto": "\nExcelente!\n\nAs transições controlam os efeitos visuais exibidos quando ocorre a mudança de um slide para outro durante a apresentação.\n",
        "feedbackErro": "A resposta correta é:\n\nÀ passagem entre slides.\n\nComentário:\nAs transições controlam os efeitos visuais exibidos quando ocorre a mudança de um slide para outro durante a apresentação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nTransição = entre slides.\n\nAnimação = dentro do slide.\n",
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No Excel, a fórmula =SE(A1>=7;\"Aprovado\";\"Reprovado\") retornará:",
        "alternativas": [
            "O valor de A1.",
            "VERDADEIRO ou FALSO.",
            "A média da planilha.",
            "Erro de sintaxe.",
            "Aprovado se A1 for maior ou igual a 7."
        ],
        "correta": 4,
        "feedbackAcerto": "\nMuito bem!\n\nA função SE permite executar um teste lógico e retornar resultados diferentes conforme a condição seja verdadeira ou falsa.\n\nSe A1 for maior ou igual a 7, o resultado será \"Aprovado\".\n",
        "feedbackErro": "A resposta correta é:\n\nAprovado se A1 for maior ou igual a 7.\n\nComentário:\nA função SE permite executar um teste lógico e retornar resultados diferentes conforme a condição seja verdadeira ou falsa.\n\nSe A1 for maior ou igual a 7, o resultado será &quot;Aprovado&quot;.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA estrutura da função SE é uma das mais cobradas em concursos: condição, valor verdadeiro e valor falso.\n",
        "assunto": "office"
    },
    {
        "pergunta": "Qual guia do PowerPoint reúne os comandos relacionados aos efeitos de movimentação dos objetos em um slide?",
        "alternativas": [
            "Design",
            "Inserir",
            "Exibir",
            "Revisão",
            "Animações"
        ],
        "correta": 4,
        "feedbackAcerto": "\nExcelente!\n\nA guia Animações contém os recursos responsáveis pelos efeitos aplicados a textos, imagens, formas e demais objetos de um slide.\n",
        "feedbackErro": "A resposta correta é:\n\nAnimações\n\nComentário:\nA guia Animações contém os recursos responsáveis pelos efeitos aplicados a textos, imagens, formas e demais objetos de um slide.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda Animações com Transições. Animações atuam nos objetos; Transições atuam entre os slides.\n",
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No Word, a combinação Ctrl + B possui como função padrão:",
        "alternativas": [
            "Salvar documento.",
            "Aplicar negrito.",
            "Abrir documento.",
            "Inserir quebra de página.",
            "Centralizar texto."
        ],
        "correta": 1,
        "feedbackAcerto": "\nMuito bem!\n\nO atalho Ctrl + B ativa ou remove a formatação em negrito no texto selecionado.\n\nÉ um dos atalhos mais utilizados do Microsoft Word.\n",
        "feedbackErro": "A resposta correta é:\n\nAplicar negrito.\n\nComentário:\nO atalho Ctrl + B ativa ou remove a formatação em negrito no texto selecionado.\n\nÉ um dos atalhos mais utilizados do Microsoft Word.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nAtalhos de teclado aparecem com frequência em provas de informática e costumam gerar pegadinhas.\n",
        "assunto": "office"
    },
    {
        "pergunta": "No PowerPoint, o Modo de Apresentação de Slides é utilizado para:",
        "alternativas": [
            "Editar temas.",
            "Inserir imagens.",
            "Exibir a apresentação ao público.",
            "Criar gráficos.",
            "Alterar layouts."
        ],
        "correta": 2,
        "feedbackAcerto": "\nPerfeito!\n\nO modo Apresentação de Slides exibe os slides em tela cheia para que sejam apresentados ao público.\n\nÉ o modo utilizado durante palestras, aulas e reuniões.\n",
        "feedbackErro": "A resposta correta é:\n\nExibir a apresentação ao público.\n\nComentário:\nO modo Apresentação de Slides exibe os slides em tela cheia para que sejam apresentados ao público.\n\nÉ o modo utilizado durante palestras, aulas e reuniões.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nLembre-se: F5 inicia a apresentação desde o primeiro slide e Shift + F5 inicia a partir do slide atual.\n",
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No Word, o recurso Mala Direta é utilizado principalmente para:",
        "alternativas": [
            "Criar apresentações multimídia.",
            "Gerar sumários automáticos.",
            "Inserir notas de rodapé.",
            "Automatizar o envio de documentos personalizados para diversos destinatários.",
            "Controlar alterações no documento."
        ],
        "correta": 3,
        "feedbackAcerto": "\nMuito bem!\n\nA Mala Direta permite combinar um documento modelo com uma base de dados para gerar documentos personalizados.\n\nÉ amplamente utilizada para cartas, etiquetas, certificados e comunicados.\n",
        "feedbackErro": "A resposta correta é:\n\nAutomatizar o envio de documentos personalizados para diversos destinatários.\n\nComentário:\nA Mala Direta permite combinar um documento modelo com uma base de dados para gerar documentos personalizados.\n\nÉ amplamente utilizada para cartas, etiquetas, certificados e comunicados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nMala Direta é um dos recursos avançados mais cobrados em provas de Microsoft Word.\n",
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No Excel, qual resultado será retornado pela fórmula =E(5>3;8<10)?",
        "alternativas": [
            "FALSO",
            "ERRO",
            "5",
            "VERDADEIRO",
            "10"
        ],
        "correta": 3,
        "feedbackAcerto": "\nPerfeito!\n\nA função E retorna VERDADEIRO quando todas as condições avaliadas são verdadeiras.\n\nComo 5 é maior que 3 e 8 é menor que 10, ambas as condições são satisfeitas.\n",
        "feedbackErro": "A resposta correta é:\n\nVERDADEIRO\n\nComentário:\nA função E retorna VERDADEIRO quando todas as condições avaliadas são verdadeiras.\n\nComo 5 é maior que 3 e 8 é menor que 10, ambas as condições são satisfeitas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nA função E normalmente aparece em conjunto com a função SE para criar regras de decisão mais complexas.\n",
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No Excel, qual função retorna o maior valor encontrado em um intervalo de células?",
        "alternativas": [
            "MAX",
            "MAIOR",
            "MAXIMO",
            "SUPERIOR",
            "ALTO"
        ],
        "correta": 0,
        "feedbackAcerto": "\nMuito bem!\n\nA função MAX retorna o maior valor existente em um intervalo de células.\n\nEla é amplamente utilizada para identificar maiores vendas, maiores notas, maiores preços e outros valores máximos em planilhas.\n",
        "feedbackErro": "A resposta correta é:\n\nMAX\n\nComentário:\nA função MAX retorna o maior valor existente em um intervalo de células.\n\nEla é amplamente utilizada para identificar maiores vendas, maiores notas, maiores preços e outros valores máximos em planilhas.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nMuitas bancas confundem MAX com MAIOR. MAX retorna o maior valor diretamente; MAIOR retorna o n-ésimo maior valor.\n",
        "assunto": "office"
    },
    {
        "pergunta": "No PowerPoint, qual modo de exibição apresenta miniaturas de todos os slides ao mesmo tempo, facilitando a reorganização da sequência da apresentação?",
        "alternativas": [
            "Modo Leitura",
            "Modo Estrutura",
            "Mestre de Slides",
            "Classificação de Slides",
            "Apresentação de Slides"
        ],
        "correta": 3,
        "feedbackAcerto": "\nExcelente!\n\nO modo Classificação de Slides exibe miniaturas de todos os slides simultaneamente.\n\nIsso facilita a visualização geral da apresentação e permite reorganizar rapidamente sua sequência.\n",
        "feedbackErro": "A resposta correta é:\n\nClassificação de Slides\n\nComentário:\nO modo Classificação de Slides exibe miniaturas de todos os slides simultaneamente.\n\nIsso facilita a visualização geral da apresentação e permite reorganizar rapidamente sua sequência.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões sobre modos de exibição costumam aparecer frequentemente em provas de PowerPoint.\n",
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No Word, ao utilizar Ctrl + Enter, o programa executa qual ação?",
        "alternativas": [
            "Insere uma quebra de seção.",
            "Insere uma quebra de página.",
            "Abre um novo documento.",
            "Cria uma nota de rodapé.",
            "Salva o documento."
        ],
        "correta": 1,
        "feedbackAcerto": "\nPerfeito!\n\nO atalho Ctrl + Enter insere uma Quebra de Página.\n\nCom isso, o conteúdo seguinte passa automaticamente para a próxima página do documento.\n",
        "feedbackErro": "A resposta correta é:\n\nInsere uma quebra de página.\n\nComentário:\nO atalho Ctrl + Enter insere uma Quebra de Página.\n\nCom isso, o conteúdo seguinte passa automaticamente para a próxima página do documento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nNão confunda Quebra de Página com Quebra de Seção. São recursos diferentes e muito cobrados em concursos.\n",
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No Excel, a função ÍNDICE é frequentemente utilizada em conjunto com CORRESP porque:",
        "alternativas": [
            "Permite criar gráficos automaticamente.",
            "Substitui completamente as funções lógicas.",
            "Transforma números em texto.",
            "Protege células contra edição.",
            "Possibilita buscas mais flexíveis do que o PROCV."
        ],
        "correta": 4,
        "feedbackAcerto": "\nExcelente!\n\nA combinação ÍNDICE + CORRESP é amplamente utilizada para realizar buscas avançadas em planilhas.\n\nEla oferece maior flexibilidade que o PROCV, pois permite pesquisar informações em qualquer direção da tabela.\n",
        "feedbackErro": "A resposta correta é:\n\nPossibilita buscas mais flexíveis do que o PROCV.\n\nComentário:\nA combinação ÍNDICE + CORRESP é amplamente utilizada para realizar buscas avançadas em planilhas.\n\nEla oferece maior flexibilidade que o PROCV, pois permite pesquisar informações em qualquer direção da tabela.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nQuestões mais avançadas de Excel costumam cobrar a diferença entre PROCV e a combinação ÍNDICE + CORRESP.\n",
        "assunto": "office"
    },
    {
        "pergunta": "No Word, qual recurso permite acompanhar alterações feitas por diferentes revisores em um documento?",
        "alternativas": [
            "AutoTexto",
            "Mala Direta",
            "Controle de Alterações",
            "Estilos",
            "Sumário"
        ],
        "correta": 2,
        "feedbackAcerto": "\nMuito bem!\n\nO Controle de Alterações registra inclusões, exclusões e modificações realizadas por diferentes usuários.\n\nEsse recurso é bastante utilizado em documentos colaborativos e revisões de textos.\n",
        "feedbackErro": "A resposta correta é:\n\nControle de Alterações\n\nComentário:\nO Controle de Alterações registra inclusões, exclusões e modificações realizadas por diferentes usuários.\n\nEsse recurso é bastante utilizado em documentos colaborativos e revisões de textos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nControle de Alterações e Comentários costumam aparecer juntos em provas sobre revisão de documentos.\n",
        "assunto": "office"
    },
    {
        "pergunta": "No Excel, qual função conta apenas células que contêm números?",
        "alternativas": [
            "CONT.NÚM",
            "CONT.SE",
            "CONT.VALORES",
            "SOMA",
            "MÉDIA"
        ],
        "correta": 0,
        "feedbackAcerto": "\nPerfeito!\n\nA função CONT.NÚM contabiliza apenas as células que possuem valores numéricos.\n\nTextos, células vazias e outros conteúdos não são considerados nessa contagem.\n",
        "feedbackErro": "A resposta correta é:\n\nCONT.NÚM\n\nComentário:\nA função CONT.NÚM contabiliza apenas as células que possuem valores numéricos.\n\nTextos, células vazias e outros conteúdos não são considerados nessa contagem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nCONT.NÚM e CONT.VALORES são frequentemente cobradas juntas para confundir candidatos.\n",
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "Em uma apresentação do PowerPoint, a tecla F5 inicia:",
        "alternativas": [
            "A apresentação desde o primeiro slide.",
            "A edição do slide.",
            "A apresentação a partir do slide atual.",
            "A impressão dos slides.",
            "O modo de revisão."
        ],
        "correta": 0,
        "feedbackAcerto": "\nPerfeito!\n\nA tecla F5 inicia a apresentação de slides desde o primeiro slide da apresentação.\n\nÉ um dos atalhos mais conhecidos do PowerPoint.\n",
        "feedbackErro": "A resposta correta é:\n\nA apresentação desde o primeiro slide.\n\nComentário:\nA tecla F5 inicia a apresentação de slides desde o primeiro slide da apresentação.\n\nÉ um dos atalhos mais conhecidos do PowerPoint.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nAtalhos de teclado do PowerPoint aparecem com frequência em provas de informática básica.\n",
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "Qual formato é o padrão de documentos do LibreOffice Writer?",
        "alternativas": [
            ".docx",
            ".txt",
            ".odt",
            ".pdf",
            ".rtf"
        ],
        "correta": 2,
        "feedbackAcerto": "\nExcelente!\n\nO formato padrão do LibreOffice Writer é ODT (Open Document Text).\n",
        "feedbackErro": "A resposta correta é:\n\n.odt\n\nComentário:\nO formato padrão do LibreOffice Writer é ODT (Open Document Text).\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nODT corresponde ao Writer assim como DOCX corresponde ao Word.\n",
        "assunto": "office"
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
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No Excel, qual recurso permite definir previamente quais valores podem ser digitados em uma célula?",
        "alternativas": [
            "Filtro",
            "Validação de Dados",
            "Classificação",
            "Congelar Painéis",
            "Comentário"
        ],
        "correta": 1,
        "feedbackAcerto": "\nMuito bem!\n\nA Validação de Dados permite restringir os valores aceitos em uma célula.\n",
        "feedbackErro": "A resposta correta é:\n\nValidação de Dados\n\nComentário:\nA Validação de Dados permite restringir os valores aceitos em uma célula.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nValidação de Dados é muito utilizada em formulários e planilhas corporativas.\n",
        "assunto": "office"
    },
    {
        "pergunta": "Qual recurso do Excel permite manter determinadas linhas ou colunas visíveis durante a rolagem da planilha?",
        "alternativas": [
            "Congelar Painéis",
            "Filtro",
            "Validação",
            "Classificação",
            "Ocultar"
        ],
        "correta": 0,
        "feedbackAcerto": "\nPerfeito!\n\nCongelar Painéis mantém linhas e colunas visíveis durante a navegação.\n",
        "feedbackErro": "A resposta correta é:\n\nCongelar Painéis\n\nComentário:\nCongelar Painéis mantém linhas e colunas visíveis durante a navegação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nCongelar Painéis é um recurso bastante cobrado em Excel.\n",
        "assunto": "office"
    },
    {
        "pergunta": "Na impressão de um documento do Word, a orientação Paisagem caracteriza-se por:",
        "alternativas": [
            "Página mais larga que alta",
            "Página mais alta que larga",
            "Página sem margens",
            "Página em formato quadrado",
            "Página sem cabeçalho"
        ],
        "correta": 0,
        "feedbackAcerto": "\nExcelente!\n\nNa orientação Paisagem, a largura da página é maior que sua altura.\n",
        "feedbackErro": "A resposta correta é:\n\nPágina mais larga que alta\n\nComentário:\nNa orientação Paisagem, a largura da página é maior que sua altura.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nRetrato = vertical. Paisagem = horizontal.\n",
        "assunto": "office"
    },
    {
        "pergunta": "Antes de imprimir um documento, qual recurso permite verificar como será o resultado final da impressão?",
        "alternativas": [
            "Controle de Alterações",
            "Visualização de Impressão",
            "Classificação",
            "Localizar",
            "Mala Direta"
        ],
        "correta": 1,
        "feedbackAcerto": "\nCorreto!\n\nA Visualização de Impressão permite verificar a aparência final do documento antes da impressão.\n",
        "feedbackErro": "A resposta correta é:\n\nVisualização de Impressão\n\nComentário:\nA Visualização de Impressão permite verificar a aparência final do documento antes da impressão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "\nVisualização de Impressão é frequentemente cobrada em Word e Writer.\n",
        "assunto": "office"
    },
    {
        "pergunta": "No Excel/Calc, a referência $A$1 em uma fórmula indica:",
        "alternativas": [
            "Referência absoluta de coluna e linha.",
            "Referência relativa de coluna e linha.",
            "Referência a uma planilha externa obrigatória.",
            "Intervalo entre A e 1.",
            "Erro de sintaxe."
        ],
        "correta": 0,
        "feedbackAcerto": "O símbolo $ fixa a coluna A e a linha 1, impedindo alteração ao copiar a fórmula.",
        "feedbackErro": "A resposta correta é:\n\nReferência absoluta de coluna e linha.\n\nComentário:\nO símbolo $ fixa a coluna A e a linha 1, impedindo alteração ao copiar a fórmula.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Referência absoluta é muito cobrada em questões de cópia de fórmulas.",
        "assunto": "office"
    },
    {
        "pergunta": "Ao copiar uma fórmula que contém A$1, é correto afirmar que:",
        "alternativas": [
            "A coluna e a linha ficam totalmente fixas.",
            "A coluna é relativa e a linha permanece fixa.",
            "A coluna permanece fixa e a linha é relativa.",
            "A referência aponta sempre para outra planilha.",
            "A fórmula se transforma em texto."
        ],
        "correta": 1,
        "feedbackAcerto": "Em A$1, apenas a linha 1 está fixada; a coluna A pode variar conforme a cópia.",
        "feedbackErro": "A resposta correta é:\n\nA coluna é relativa e a linha permanece fixa.\n\nComentário:\nEm A$1, apenas a linha 1 está fixada; a coluna A pode variar conforme a cópia.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Referência mista fixa somente a parte que contém o símbolo $.",
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "A fórmula =SE(E(A1>=7;B1>=75%);\"Aprovado\";\"Reprovado\") retorna 'Aprovado' quando:",
        "alternativas": [
            "Apenas A1 for maior que 7.",
            "Apenas B1 for menor que 75%.",
            "Qualquer uma das duas condições for verdadeira.",
            "A1 for maior ou igual a 7 e B1 for maior ou igual a 75%.",
            "As duas condições forem falsas."
        ],
        "correta": 3,
        "feedbackAcerto": "A função E exige que todas as condições sejam verdadeiras para retornar VERDADEIRO.",
        "feedbackErro": "A resposta correta é:\n\nA1 for maior ou igual a 7 e B1 for maior ou igual a 75%.\n\nComentário:\nA função E exige que todas as condições sejam verdadeiras para retornar VERDADEIRO.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "SE + E é pegadinha clássica: E exige simultaneidade; OU exige pelo menos uma condição.",
        "assunto": "office"
    },
    {
        "pergunta": "No Excel, a função CONT.SES diferencia-se de CONT.SE porque:",
        "alternativas": [
            "Soma valores em vez de contar.",
            "Retorna sempre texto.",
            "Só funciona com gráficos.",
            "É usada apenas no PowerPoint.",
            "Conta células com mais de um critério simultâneo."
        ],
        "correta": 4,
        "feedbackAcerto": "CONT.SES permite contagem com múltiplos critérios.",
        "feedbackErro": "A resposta correta é:\n\nConta células com mais de um critério simultâneo.\n\nComentário:\nCONT.SES permite contagem com múltiplos critérios.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "CONT.SE = um critério; CONT.SES = dois ou mais critérios.",
        "assunto": "office"
    },
    {
        "pergunta": "Em PROCV com o último argumento VERDADEIRO ou omitido, a pesquisa aproximada exige atenção porque:",
        "alternativas": [
            "A primeira coluna da matriz deve estar ordenada para evitar resultados incorretos.",
            "O valor procurado precisa estar na última coluna.",
            "A função deixa de pesquisar números.",
            "A matriz passa a ser lida da direita para a esquerda.",
            "A fórmula só funciona em documentos do Word."
        ],
        "correta": 0,
        "feedbackAcerto": "Na correspondência aproximada do PROCV, a ordenação da primeira coluna é essencial para resultados confiáveis.",
        "feedbackErro": "A resposta correta é:\n\nA primeira coluna da matriz deve estar ordenada para evitar resultados incorretos.\n\nComentário:\nNa correspondência aproximada do PROCV, a ordenação da primeira coluna é essencial para resultados confiáveis.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "PROCV com FALSO busca correspondência exata; com VERDADEIRO/omitido faz busca aproximada.",
        "assunto": "office"
    },
    {
        "pergunta": "A principal limitação clássica do PROCV é:",
        "alternativas": [
            "Não aceitar números como valor procurado.",
            "Não permitir retornar valores localizados à esquerda da coluna de pesquisa.",
            "Funcionar apenas em células vazias.",
            "Ser exclusivo do PowerPoint.",
            "Impedir o uso de referências absolutas."
        ],
        "correta": 1,
        "feedbackAcerto": "O PROCV procura na primeira coluna da matriz e retorna valores à direita dentro da mesma matriz.",
        "feedbackErro": "A resposta correta é:\n\nNão permitir retornar valores localizados à esquerda da coluna de pesquisa.\n\nComentário:\nO PROCV procura na primeira coluna da matriz e retorna valores à direita dentro da mesma matriz.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Essa limitação é frequentemente comparada com ÍNDICE + CORRESP ou PROCX.",
        "assunto": "office"
    },
    {
        "pergunta": "Uma referência circular em planilha ocorre quando:",
        "alternativas": [
            "Uma célula possui borda arredondada.",
            "Uma planilha contém apenas gráficos de pizza.",
            "Uma fórmula depende direta ou indiretamente do próprio resultado.",
            "Uma função usa texto entre aspas.",
            "Um arquivo é salvo em formato PDF."
        ],
        "correta": 2,
        "feedbackAcerto": "Referência circular acontece quando o cálculo retorna a si mesmo, direta ou indiretamente.",
        "feedbackErro": "A resposta correta é:\n\nUma fórmula depende direta ou indiretamente do próprio resultado.\n\nComentário:\nReferência circular acontece quando o cálculo retorna a si mesmo, direta ou indiretamente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca pode usar exemplos como A1 = A1 + 1 ou dependências em cadeia.",
        "assunto": "office"
    },
    {
        "pergunta": "Em planilhas, nomear um intervalo de células tem como vantagem:",
        "alternativas": [
            "Impedir qualquer edição da pasta de trabalho.",
            "Converter a planilha em apresentação.",
            "Remover todas as fórmulas existentes.",
            "Facilitar leitura e manutenção de fórmulas.",
            "Bloquear a impressão do arquivo."
        ],
        "correta": 3,
        "feedbackAcerto": "Nomes definidos permitem fórmulas mais compreensíveis, como =SOMA(Vendas) em vez de =SOMA(B2:B100).",
        "feedbackErro": "A resposta correta é:\n\nFacilitar leitura e manutenção de fórmulas.\n\nComentário:\nNomes definidos permitem fórmulas mais compreensíveis, como =SOMA(Vendas) em vez de =SOMA(B2:B100).\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Nome de intervalo melhora organização, mas não substitui proteção de planilha.",
        "assunto": "office"
    },
    {
        "pergunta": "Uma Tabela Dinâmica no Excel é mais adequada para:",
        "alternativas": [
            "Editar imagens vetoriais em slides.",
            "Criar notas de rodapé em documentos.",
            "Enviar e-mails com cópia oculta.",
            "Alterar o firmware do computador.",
            "Resumir, agrupar e analisar grandes conjuntos de dados."
        ],
        "correta": 4,
        "feedbackAcerto": "Tabelas Dinâmicas permitem cruzar campos, gerar totais e reorganizar análises rapidamente.",
        "feedbackErro": "A resposta correta é:\n\nResumir, agrupar e analisar grandes conjuntos de dados.\n\nComentário:\nTabelas Dinâmicas permitem cruzar campos, gerar totais e reorganizar análises rapidamente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Tabela Dinâmica é análise de dados, não formatação de texto ou apresentação.",
        "assunto": "office"
    },
    {
        "pergunta": "No Word, aplicar Estilos em títulos é importante porque:",
        "alternativas": [
            "Permite padronização e serve de base para recursos como sumário automático.",
            "Impede que o arquivo seja salvo em PDF.",
            "Transforma texto em imagem.",
            "Substitui a revisão ortográfica.",
            "Remove todas as quebras de página."
        ],
        "correta": 0,
        "feedbackAcerto": "Estilos estruturam o documento e facilitam padronização, navegação e criação de sumário.",
        "feedbackErro": "A resposta correta é:\n\nPermite padronização e serve de base para recursos como sumário automático.\n\nComentário:\nEstilos estruturam o documento e facilitam padronização, navegação e criação de sumário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Formatação direta pode parecer igual visualmente, mas não estrutura o documento como Estilos.",
        "assunto": "office"
    },
    {
        "pergunta": "No Word, o Controle de Alterações difere dos Comentários porque:",
        "alternativas": [
            "É usado apenas para inserir imagens.",
            "Registra edições feitas no texto, enquanto comentários adicionam observações sem alterar diretamente o conteúdo principal.",
            "Serve exclusivamente para formatar margens.",
            "Remove automaticamente o autor do documento.",
            "Impede a criação de sumário."
        ],
        "correta": 1,
        "feedbackAcerto": "Controle de Alterações acompanha inserções, exclusões e modificações; comentários são notas de revisão.",
        "feedbackErro": "A resposta correta é:\n\nRegistra edições feitas no texto, enquanto comentários adicionam observações sem alterar diretamente o conteúdo principal.\n\nComentário:\nControle de Alterações acompanha inserções, exclusões e modificações; comentários são notas de revisão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Ambos aparecem na revisão, mas têm finalidades diferentes.",
        "assunto": "office"
    },
    {
        "pergunta": "Uma Quebra de Seção no Word é indicada quando se deseja:",
        "alternativas": [
            "Inserir apenas uma nova linha no mesmo parágrafo.",
            "Corrigir automaticamente erros ortográficos.",
            "Aplicar configurações diferentes, como orientação ou cabeçalho, em partes distintas do documento.",
            "Alterar a senha do sistema operacional.",
            "Converter a planilha em banco de dados."
        ],
        "correta": 2,
        "feedbackAcerto": "Quebras de seção permitem configurações independentes entre partes do documento.",
        "feedbackErro": "A resposta correta é:\n\nAplicar configurações diferentes, como orientação ou cabeçalho, em partes distintas do documento.\n\nComentário:\nQuebras de seção permitem configurações independentes entre partes do documento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Quebra de página muda de página; quebra de seção cria uma divisão com formatação própria.",
        "assunto": "office"
    },
    {
        "pergunta": "Na Mala Direta do Word, a fonte de dados corresponde:",
        "alternativas": [
            "Ao tipo de letra escolhido para o título.",
            "Ao arquivo de imagem usado como marca d'água.",
            "À senha de proteção contra edição.",
            "Ao conjunto de registros, como nomes e endereços, usado para personalizar documentos.",
            "Ao protocolo de envio de e-mail."
        ],
        "correta": 3,
        "feedbackAcerto": "A fonte de dados fornece os campos variáveis que serão inseridos no documento principal.",
        "feedbackErro": "A resposta correta é:\n\nAo conjunto de registros, como nomes e endereços, usado para personalizar documentos.\n\nComentário:\nA fonte de dados fornece os campos variáveis que serão inseridos no documento principal.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Mala Direta combina documento modelo com base/fonte de dados.",
        "assunto": "office"
    },
    {
        "pergunta": "No Excel, colar apenas valores em vez de colar fórmulas é útil quando se deseja:",
        "alternativas": [
            "Transformar a célula em imagem vetorial.",
            "Criar automaticamente um gráfico dinâmico.",
            "Excluir todas as planilhas da pasta.",
            "Inserir quebra de seção.",
            "Manter o resultado calculado, sem manter a fórmula que o gerou."
        ],
        "correta": 4,
        "feedbackAcerto": "Colar valores preserva o resultado visível e remove a dependência da fórmula original.",
        "feedbackErro": "A resposta correta é:\n\nManter o resultado calculado, sem manter a fórmula que o gerou.\n\nComentário:\nColar valores preserva o resultado visível e remove a dependência da fórmula original.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Muito usado quando a fórmula não deve recalcular ou depender de outras células.",
        "assunto": "office"
    },
    {
        "pergunta": "No PowerPoint, o Mestre de Slides é usado para:",
        "alternativas": [
            "Controlar padrões visuais e layouts aplicados a vários slides.",
            "Executar antivírus nos arquivos da apresentação.",
            "Enviar a apresentação por protocolo SMTP.",
            "Transformar slides em linhas de planilha.",
            "Criar notas de rodapé do Word."
        ],
        "correta": 0,
        "feedbackAcerto": "O Mestre de Slides padroniza fontes, cores, logotipos, posições e layouts.",
        "feedbackErro": "A resposta correta é:\n\nControlar padrões visuais e layouts aplicados a vários slides.\n\nComentário:\nO Mestre de Slides padroniza fontes, cores, logotipos, posições e layouts.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Mestre de Slides é padronização global, não efeito entre slides.",
        "assunto": "office"
    },
    {
        "pergunta": "No PowerPoint, um gatilho de animação permite:",
        "alternativas": [
            "Alterar automaticamente o tamanho do arquivo salvo.",
            "Iniciar uma animação a partir de uma ação específica, como clique em determinado objeto.",
            "Converter a apresentação em sistema operacional.",
            "Bloquear o uso de imagens no slide.",
            "Criar uma tabela dinâmica."
        ],
        "correta": 1,
        "feedbackAcerto": "Gatilhos vinculam animações a ações específicas dentro do slide.",
        "feedbackErro": "A resposta correta é:\n\nIniciar uma animação a partir de uma ação específica, como clique em determinado objeto.\n\nComentário:\nGatilhos vinculam animações a ações específicas dentro do slide.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Animação atua em objetos; transição atua entre slides.",
        "assunto": "office"
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
        "assunto": "office"
    },
    {
        "pergunta": "No LibreOffice Impress, o programa equivalente mais próximo no Microsoft Office é:",
        "alternativas": [
            "Word",
            "Excel",
            "Access",
            "PowerPoint",
            "Outlook"
        ],
        "correta": 3,
        "feedbackAcerto": "LibreOffice Impress é usado para apresentações, função correspondente ao PowerPoint.",
        "feedbackErro": "A resposta correta é:\n\nPowerPoint\n\nComentário:\nLibreOffice Impress é usado para apresentações, função correspondente ao PowerPoint.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Writer ↔ Word; Calc ↔ Excel; Impress ↔ PowerPoint.",
        "assunto": "office"
    },
    {
        "pergunta": "Exportar um documento para PDF é adequado quando se deseja:",
        "alternativas": [
            "Manter todas as fórmulas editáveis como em uma planilha.",
            "Transformar automaticamente texto em banco de dados relacional.",
            "Substituir a necessidade de salvar o arquivo original editável.",
            "Executar macros do sistema operacional.",
            "Preservar a aparência do documento para visualização/distribuição, reduzindo alterações acidentais."
        ],
        "correta": 4,
        "feedbackAcerto": "PDF é usado para distribuição com layout preservado, embora o arquivo original editável continue importante.",
        "feedbackErro": "A resposta correta é:\n\nPreservar a aparência do documento para visualização/distribuição, reduzindo alterações acidentais.\n\nComentário:\nPDF é usado para distribuição com layout preservado, embora o arquivo original editável continue importante.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "PDF não deve ser confundido com o arquivo-fonte editável do Word, Calc ou PowerPoint.",
        "assunto": "office"
    },
{
    "pergunta": "No Excel, ao copiar a fórmula =$A$1+B1 da célula C1 para C2, como fica a referência ao primeiro termo da fórmula?",
    "alternativas": [
        "Permanece como $A$1.",
        "Altera para $A$2.",
        "Altera para A$2.",
        "Altera para $B$1.",
        "Altera para A1."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! A referência absoluta mantém fixa a coluna e a linha durante a cópia da fórmula.",
    "feedbackErro": "A resposta correta indica que $A$1 permanece fixo. O símbolo $ antes da coluna e da linha impede a alteração da referência ao copiar a fórmula.",
    "dicaBanca": "Referência absoluta fixa coluna e linha: $A$1.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Word, a utilização correta dos Estilos de Título é indispensável principalmente para:",
    "alternativas": [
        "Gerar um sumário automático com base na estrutura do documento.",
        "Salvar o arquivo automaticamente em PDF a cada alteração.",
        "Impedir qualquer alteração feita por outros revisores.",
        "Converter tabelas em imagens sem perda de formatação.",
        "Criar cópia oculta do documento em nuvem."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! O sumário automático depende dos estilos aplicados aos títulos e subtítulos.",
    "feedbackErro": "A resposta correta relaciona Estilos de Título ao Sumário Automático. O Word usa essa estrutura para montar a lista de tópicos.",
    "dicaBanca": "Quando a banca falar em sumário automático, pense em Estilos de Título.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, o Mestre de Slides é utilizado quando o usuário deseja:",
    "alternativas": [
        "Padronizar elementos visuais que se repetem em diversos slides.",
        "Aplicar uma transição diferente em cada objeto do slide.",
        "Converter automaticamente a apresentação em planilha.",
        "Criar fórmulas de cálculo entre caixas de texto.",
        "Executar a apresentação apenas no modo rascunho."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! O Mestre de Slides controla padrões de layout, fontes, logotipos e elementos recorrentes.",
    "feedbackErro": "A resposta correta é a que trata da padronização visual. O Mestre de Slides evita editar slide por slide.",
    "dicaBanca": "Mestre de Slides = padronização geral da apresentação.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, o erro #N/D costuma aparecer quando uma função de pesquisa, como PROCV, PROCX ou CORRESP:",
    "alternativas": [
        "Não encontra o valor procurado no intervalo definido.",
        "Divide um número por zero dentro da fórmula.",
        "Usa referência de célula inexistente ou excluída.",
        "Recebe texto onde a planilha exige uma data válida.",
        "Tem excesso de formatação condicional aplicada."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! #N/D indica que o valor pesquisado não foi localizado.",
    "feedbackErro": "A resposta correta associa #N/D a valor não disponível ou não encontrado, muito comum em funções de pesquisa.",
    "dicaBanca": "#N/D costuma aparecer em pesquisa; #DIV/0! aparece em divisão por zero.",
    "assunto": "office"
},
{
    "pergunta": "No Word, a Quebra de Seção é mais adequada que a Quebra de Página quando se deseja:",
    "alternativas": [
        "Aplicar margens, orientação ou cabeçalhos diferentes em parte do documento.",
        "Mover o cursor para a linha seguinte dentro do mesmo parágrafo.",
        "Inserir uma imagem no centro exato da página atual.",
        "Transformar o texto selecionado em hiperlink externo.",
        "Compactar automaticamente o arquivo antes de salvar."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! A Quebra de Seção permite configurações independentes dentro do documento.",
    "feedbackErro": "A resposta correta destaca configurações diferentes por seção, como margens, orientação e cabeçalhos.",
    "dicaBanca": "Quebra de Página muda a página; Quebra de Seção muda a estrutura de formatação.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, a opção Congelar Painéis é útil principalmente para:",
    "alternativas": [
        "Manter linhas ou colunas visíveis durante a rolagem da planilha.",
        "Bloquear definitivamente a edição de todas as células da pasta.",
        "Transformar fórmulas em valores estáticos sem cálculo.",
        "Ocultar planilhas de forma protegida por senha.",
        "Remover automaticamente linhas duplicadas de uma tabela."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Congelar Painéis facilita a leitura de tabelas grandes mantendo títulos visíveis.",
    "feedbackErro": "A resposta correta identifica que o recurso mantém linhas ou colunas fixas durante a rolagem.",
    "dicaBanca": "Congelar Painéis não é proteção; é recurso de visualização.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, uma transição difere de uma animação porque a transição:",
    "alternativas": [
        "Controla o efeito de passagem de um slide para outro.",
        "Afeta somente caracteres selecionados dentro de uma caixa de texto.",
        "Define permissões de edição da apresentação.",
        "Calcula automaticamente o tempo total de fala.",
        "Insere comentários de revisão no rodapé do slide."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Transições ocorrem entre slides, enquanto animações atuam em objetos do slide.",
    "feedbackErro": "A resposta correta é a que relaciona transição à passagem entre slides.",
    "dicaBanca": "Transição = entre slides; animação = em objetos do slide.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Excel, ao utilizar Validação de Dados em uma célula, o usuário pode:",
    "alternativas": [
        "Restringir os valores permitidos, como datas, listas ou números dentro de limites.",
        "Criar automaticamente uma cópia de segurança da pasta de trabalho.",
        "Transformar todas as fórmulas em imagens protegidas.",
        "Excluir células duplicadas sem confirmação do usuário.",
        "Alterar o idioma da interface do aplicativo."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! A Validação de Dados limita ou orienta o tipo de entrada aceita na célula.",
    "feedbackErro": "A resposta correta associa validação ao controle de entrada de dados, como listas suspensas e limites numéricos.",
    "dicaBanca": "Validação de Dados = controle do que pode ser digitado.",
    "assunto": "office"
},
{
    "pergunta": "No Word, o Controle de Alterações permite:",
    "alternativas": [
        "Registrar inclusões, exclusões e modificações feitas por revisores.",
        "Aumentar automaticamente a resolução das imagens do documento.",
        "Criar macros para executar cálculos em tabelas.",
        "Converter parágrafos em slides de apresentação.",
        "Remover todas as senhas salvas no computador."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! O Controle de Alterações registra modificações para revisão e aprovação.",
    "feedbackErro": "A resposta correta relaciona o recurso à revisão de documentos, permitindo aceitar ou rejeitar alterações.",
    "dicaBanca": "Controle de Alterações é cobrado junto com Comentários e Revisão.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, uma Tabela Dinâmica é indicada principalmente para:",
    "alternativas": [
        "Resumir, cruzar e analisar grandes volumes de dados.",
        "Desativar permanentemente fórmulas automáticas.",
        "Substituir o uso de filtros simples em navegadores.",
        "Converter planilhas em apresentações multimídia.",
        "Eliminar a necessidade de formatação de células."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Tabelas Dinâmicas permitem resumir e reorganizar dados rapidamente.",
    "feedbackErro": "A resposta correta é a que aponta análise e resumo de grandes bases de dados.",
    "dicaBanca": "Tabela Dinâmica = síntese, cruzamento e análise de dados.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, o Modo Classificação de Slides é adequado para:",
    "alternativas": [
        "Visualizar miniaturas e reorganizar a sequência da apresentação.",
        "Editar fórmulas em células vinculadas ao Excel.",
        "Corrigir automaticamente erros ortográficos no Word.",
        "Adicionar notas de rodapé acadêmicas aos slides.",
        "Proteger apenas o primeiro slide contra cópia."
    ],
    "correta": 0,
    "feedbackAcerto": "Correto! Esse modo mostra miniaturas dos slides e facilita a reorganização.",
    "feedbackErro": "A resposta correta indica visualização geral e mudança de ordem dos slides.",
    "dicaBanca": "Classificação de Slides = visão geral em miniaturas.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Excel, a função CONT.SES é mais adequada que CONT.SE quando o objetivo é:",
    "alternativas": [
        "Somar valores de uma única coluna sem critério.",
        "Contar registros que atendem a dois ou mais critérios.",
        "Retornar o maior valor absoluto de uma matriz.",
        "Converter textos em datas automaticamente.",
        "Criar gráficos vinculados a slides."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! CONT.SES conta células ou registros considerando múltiplos critérios.",
    "feedbackErro": "A resposta correta diferencia CONT.SE, que usa um critério, de CONT.SES, que aceita vários critérios.",
    "dicaBanca": "O S no final geralmente indica múltiplos critérios: CONT.SES, SOMASES, MÉDIASES.",
    "assunto": "office"
},
{
    "pergunta": "No Word, o recurso Mala Direta é corretamente associado à:",
    "alternativas": [
        "Criação manual de um único documento sem variações.",
        "Geração de documentos personalizados a partir de uma fonte de dados.",
        "Remoção automática de páginas em branco ao imprimir.",
        "Aplicação de animações em objetos de texto.",
        "Proteção criptográfica de arquivos compactados."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Mala Direta combina um documento principal com uma lista de dados.",
    "feedbackErro": "A resposta correta relaciona Mala Direta a documentos personalizados, como cartas, etiquetas e certificados.",
    "dicaBanca": "Mala Direta = documento modelo + base de dados.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, um Layout de Slide define principalmente:",
    "alternativas": [
        "O efeito visual usado na troca entre dois slides.",
        "A disposição dos espaços reservados dentro de um slide.",
        "O tipo de senha exigida para abrir o arquivo.",
        "O protocolo usado para salvar a apresentação em nuvem.",
        "A fórmula usada para calcular dados da apresentação."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Layout define onde ficam título, conteúdo, imagens e demais espaços reservados.",
    "feedbackErro": "A resposta correta associa layout à organização dos elementos dentro de um slide.",
    "dicaBanca": "Tema muda aparência; Layout muda disposição dos elementos.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Word, a opção Mostrar/Ocultar marcas de formatação permite visualizar:",
    "alternativas": [
        "Somente imagens ocultas no cabeçalho.",
        "Símbolos como marcas de parágrafo, espaços e quebras.",
        "Senhas digitadas no documento protegido.",
        "Arquivos temporários salvos pelo Windows.",
        "Comentários excluídos de versões anteriores."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! As marcas ajudam a identificar espaços, parágrafos, tabulações e quebras.",
    "feedbackErro": "A resposta correta aponta elementos de formatação não imprimíveis.",
    "dicaBanca": "O símbolo ¶ está relacionado às marcas de formatação.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, o recurso Remover Duplicatas atua sobre:",
    "alternativas": [
        "A aparência visual das células selecionadas.",
        "Registros repetidos encontrados em uma tabela ou intervalo.",
        "Senhas duplicadas armazenadas no navegador.",
        "Macros criadas em outras pastas de trabalho.",
        "Erros ortográficos repetidos em comentários."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! O recurso identifica e remove registros duplicados conforme as colunas selecionadas.",
    "feedbackErro": "A resposta correta associa o comando à limpeza de dados repetidos em uma tabela.",
    "dicaBanca": "Remover Duplicatas é recurso de tratamento de dados, não de formatação.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, o Modo de Exibição do Apresentador permite:",
    "alternativas": [
        "Editar macros de segurança durante a apresentação.",
        "Exibir notas e controles ao apresentador sem mostrar tudo ao público.",
        "Converter automaticamente cada slide em planilha.",
        "Bloquear a navegação por hiperlinks internos.",
        "Remover imagens ocultas no slide mestre."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! O apresentador pode ver notas, próximo slide e controles enquanto o público vê a apresentação.",
    "feedbackErro": "A resposta correta identifica a utilidade do modo para condução da apresentação.",
    "dicaBanca": "Modo do Apresentador auxilia quem apresenta; não altera o conteúdo dos slides.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Word, a Referência Cruzada é utilizada para:",
    "alternativas": [
        "Criar senha de abertura para documentos compartilhados.",
        "Inserir menção dinâmica a títulos, figuras, tabelas ou itens numerados.",
        "Remover automaticamente todos os links externos do texto.",
        "Duplicar páginas mantendo a numeração congelada.",
        "Compactar imagens sem alterar o tamanho do arquivo."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Referências cruzadas apontam para elementos do próprio documento.",
    "feedbackErro": "A resposta correta trata de vínculos internos para figuras, títulos, tabelas ou itens numerados.",
    "dicaBanca": "Referência Cruzada não é nota de rodapé nem hyperlink externo comum.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, a opção Colar Especial > Valores é usada para:",
    "alternativas": [
        "Copiar apenas a largura das colunas selecionadas.",
        "Substituir fórmulas pelos resultados exibidos nas células.",
        "Criar validação automática em células vazias.",
        "Transformar texto em hiperlink para a Internet.",
        "Proteger uma planilha contra edição simultânea."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Colar como valores mantém o resultado, mas remove a fórmula da célula colada.",
    "feedbackErro": "A resposta correta é a que diferencia valor exibido de fórmula original.",
    "dicaBanca": "Colar Especial é muito cobrado em operações de planilha.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, a opção Ocultar Slide faz com que o slide:",
    "alternativas": [
        "Seja excluído permanentemente da apresentação.",
        "Permaneça no arquivo, mas não apareça na exibição normal.",
        "Seja convertido em imagem dentro do slide anterior.",
        "Fique disponível apenas em modo de edição do Excel.",
        "Tenha todas as animações removidas automaticamente."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! O slide oculto continua no arquivo, mas é pulado durante a apresentação.",
    "feedbackErro": "A resposta correta destaca que ocultar não significa excluir.",
    "dicaBanca": "Ocultar Slide é útil para conteúdo reserva.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Excel, a função TEXTO é utilizada para:",
    "alternativas": [
        "Remover senhas de células protegidas.",
        "Formatar um valor numérico ou data como texto conforme um padrão.",
        "Criar automaticamente filtros avançados em tabelas.",
        "Substituir uma função lógica por uma tabela dinâmica.",
        "Bloquear a atualização de vínculos externos."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! A função TEXTO converte valores em texto com formato definido.",
    "feedbackErro": "A resposta correta associa a função à apresentação formatada de números e datas.",
    "dicaBanca": "TEXTO é útil para exibir datas, moedas e códigos com formato específico.",
    "assunto": "office"
},
{
    "pergunta": "No LibreOffice Writer, o recurso Estilos cumpre papel semelhante ao do Word porque:",
    "alternativas": [
        "Salva arquivos apenas no formato DOCX.",
        "Padroniza a formatação e facilita a estruturação do documento.",
        "Executa macros sem solicitação de permissão.",
        "Converte automaticamente texto em apresentação.",
        "Remove comentários antes da impressão."
    ],
    "correta": 1,
    "feedbackAcerto": "Correto! Estilos padronizam elementos e ajudam na criação de sumários.",
    "feedbackErro": "A resposta correta relaciona estilos à padronização e organização do documento.",
    "dicaBanca": "Writer e Word cobram muito o uso de estilos para documentos longos.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, a função PROCV apresenta uma limitação clássica porque:",
    "alternativas": [
        "Só pode ser usada em arquivos salvos como PDF.",
        "Funciona apenas com textos e não aceita números.",
        "Procura o valor na primeira coluna da matriz informada.",
        "Exige que todas as células estejam mescladas.",
        "Substitui automaticamente a função SOMA."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! O PROCV busca o valor na primeira coluna da matriz de pesquisa.",
    "feedbackErro": "A resposta correta aponta a limitação de busca vertical do PROCV: o valor procurado deve estar na primeira coluna do intervalo.",
    "dicaBanca": "PROCV é muito cobrado justamente por suas limitações.",
    "assunto": "office"
},
{
    "pergunta": "No Word, a Nota de Rodapé é utilizada para:",
    "alternativas": [
        "Criar um título automático no início do documento.",
        "Inserir uma animação ao final de cada página.",
        "Adicionar observação ou referência na parte inferior da página.",
        "Aplicar senha ao cabeçalho e ao rodapé.",
        "Converter comentários em sumário."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Notas de rodapé aparecem no fim da página e complementam o texto.",
    "feedbackErro": "A resposta correta associa nota de rodapé a explicações, referências ou observações complementares.",
    "dicaBanca": "Nota de rodapé não é comentário de revisão.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, uma ação configurada em um objeto pode ser usada para:",
    "alternativas": [
        "Alterar automaticamente o tamanho físico do monitor.",
        "Proteger a apresentação contra impressão.",
        "Navegar para outro slide, abrir link ou executar ação durante a apresentação.",
        "Converter a apresentação em banco de dados relacional.",
        "Apagar todas as notas do apresentador."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Ações e hiperlinks podem tornar a apresentação interativa.",
    "feedbackErro": "A resposta correta identifica navegação e interação durante a apresentação.",
    "dicaBanca": "Ações no PowerPoint costumam aparecer com botões e hiperlinks.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Word, a função Localizar e Substituir permite:",
    "alternativas": [
        "Criar automaticamente uma apresentação com base no documento.",
        "Alterar o formato físico do teclado conectado.",
        "Encontrar ocorrências de texto e trocá-las por outro conteúdo.",
        "Excluir todos os estilos usados no documento sem confirmação.",
        "Gerar certificado digital do arquivo."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! O recurso procura textos e pode substituir ocorrências em massa.",
    "feedbackErro": "A resposta correta descreve a busca e substituição de termos no documento.",
    "dicaBanca": "Ctrl+L ou Ctrl+U podem variar conforme idioma e aplicativo; a banca costuma cobrar a função do recurso.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, o operador & é utilizado para:",
    "alternativas": [
        "Indicar um intervalo contínuo de células.",
        "Representar a condição diferente de.",
        "Concatenar textos ou resultados de fórmulas.",
        "Bloquear uma referência absoluta.",
        "Elevar um número a uma potência."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! O operador & une textos, valores e resultados em uma única cadeia.",
    "feedbackErro": "A resposta correta relaciona & à concatenação. Intervalo usa dois-pontos e diferente usa <>.",
    "dicaBanca": "Operadores de fórmula são pegadinhas frequentes em Excel.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, ao inserir um vídeo vinculado em vez de incorporado, é correto afirmar que:",
    "alternativas": [
        "O vídeo passa a fazer parte obrigatória do tema da apresentação.",
        "A apresentação fica sempre menor e independente do arquivo externo.",
        "O arquivo externo precisa estar acessível para reprodução correta.",
        "O vídeo é convertido automaticamente em gráfico editável.",
        "O recurso remove a necessidade de codecs no computador."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Arquivos vinculados dependem do caminho e da disponibilidade do arquivo original.",
    "feedbackErro": "A resposta correta identifica a dependência do arquivo externo quando o vídeo não é incorporado.",
    "dicaBanca": "Vincular reduz o arquivo, mas cria dependência externa.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, uma referência circular ocorre quando:",
    "alternativas": [
        "A planilha usa apenas números inteiros em suas fórmulas.",
        "A célula possui formatação monetária aplicada duas vezes.",
        "Uma fórmula depende direta ou indiretamente do próprio resultado.",
        "O arquivo é salvo em formato CSV com separador decimal.",
        "A pasta contém duas planilhas com o mesmo nome."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! A referência circular ocorre quando uma fórmula volta a depender de si mesma.",
    "feedbackErro": "A resposta correta descreve dependência direta ou indireta da própria célula calculada.",
    "dicaBanca": "Referência circular é erro lógico de cálculo, não problema de aparência.",
    "assunto": "office"
},
{
    "pergunta": "No Word, o recurso Legenda é usado principalmente para:",
    "alternativas": [
        "Criar senha de gravação do documento.",
        "Alterar o idioma do corretor ortográfico.",
        "Identificar figuras, tabelas ou equações com numeração automática.",
        "Executar apresentação em tela cheia.",
        "Remover espaços duplicados do texto."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! Legendas permitem numerar e identificar objetos como figuras e tabelas.",
    "feedbackErro": "A resposta correta associa legenda à identificação automática de elementos do documento.",
    "dicaBanca": "Legenda é diferente de comentário e nota de rodapé.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, a Formatação Condicional é indicada para:",
    "alternativas": [
        "Bloquear células com fórmulas contra edição manual.",
        "Reorganizar slides conforme o valor de uma célula.",
        "Aplicar formatos automaticamente com base em regras ou valores.",
        "Salvar o arquivo como imagem sem perda de dados.",
        "Criar assinaturas digitais para macros."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! A formatação muda automaticamente conforme critérios definidos.",
    "feedbackErro": "A resposta correta relaciona o recurso à aplicação automática de cores, ícones ou barras com base em regras.",
    "dicaBanca": "Formatação Condicional destaca dados; não protege células.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, o Painel de Animação serve para:",
    "alternativas": [
        "Trocar a extensão do arquivo de apresentação.",
        "Criar uma nova fonte para todo o sistema.",
        "Organizar, reordenar e configurar efeitos aplicados aos objetos.",
        "Calcular automaticamente os valores de uma tabela.",
        "Ocultar todos os slides com notas."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! O Painel de Animação permite controlar a sequência e as opções dos efeitos.",
    "feedbackErro": "A resposta correta identifica o gerenciamento das animações aplicadas aos objetos.",
    "dicaBanca": "Painel de Animação não é o mesmo que Transições.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, a função HOJE() retorna:",
    "alternativas": [
        "A hora atual do sistema, sem data.",
        "A data de criação do arquivo.",
        "A data atual, sem exigir argumento.",
        "O último dia útil do mês anterior.",
        "O fuso horário da planilha."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! HOJE() retorna a data atual do sistema.",
    "feedbackErro": "A resposta correta aponta que a função retorna a data atual e não precisa de argumentos.",
    "dicaBanca": "HOJE() retorna data; AGORA() retorna data e hora.",
    "assunto": "office"
},
{
    "pergunta": "No Word, a proteção de documento pode ser usada para:",
    "alternativas": [
        "Aumentar a resolução de imagens importadas.",
        "Converter automaticamente o texto em áudio.",
        "Restringir edição, formatação ou acesso conforme configuração.",
        "Criar fórmulas condicionais em parágrafos.",
        "Executar transições entre páginas."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! A proteção pode limitar alterações e controlar permissões no documento.",
    "feedbackErro": "A resposta correta relaciona proteção a restrição de edição, formatação ou abertura.",
    "dicaBanca": "Proteção não substitui backup nem revisão do conteúdo.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, a fórmula =MÉDIASE(A2:A10;\">=7\";B2:B10) calcula:",
    "alternativas": [
        "A soma de A2:A10 quando B2:B10 for maior que 7.",
        "A contagem dos valores de B2:B10 iguais a 7.",
        "A média de B2:B10 quando A2:A10 atender ao critério >=7.",
        "O maior valor de A2:A10 ignorando B2:B10.",
        "A posição do primeiro valor maior que 7."
    ],
    "correta": 2,
    "feedbackAcerto": "Correto! MÉDIASE calcula média conforme um critério aplicado ao intervalo indicado.",
    "feedbackErro": "A resposta correta observa que o critério é avaliado em A2:A10 e a média é feita sobre B2:B10.",
    "dicaBanca": "A ordem dos argumentos é uma pegadinha comum em MÉDIASE e SOMASE.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Word, o Índice Remissivo difere do Sumário porque o Índice Remissivo:",
    "alternativas": [
        "Lista automaticamente todos os arquivos abertos no Word.",
        "Mostra somente os títulos formatados como Título 1.",
        "Serve para aplicar estilos visuais ao texto selecionado.",
        "Organiza termos marcados e suas páginas de ocorrência.",
        "Insere números de página apenas no rodapé."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Índice Remissivo lista termos e páginas onde aparecem.",
    "feedbackErro": "A resposta correta identifica o índice remissivo como lista de termos marcados, diferente do sumário por títulos.",
    "dicaBanca": "Sumário trabalha com estrutura; índice remissivo trabalha com termos.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Excel, o recurso Texto para Colunas é adequado quando se deseja:",
    "alternativas": [
        "Mesclar células mantendo todos os valores originais.",
        "Salvar a pasta de trabalho em modo somente leitura.",
        "Criar gráfico dinâmico a partir de imagens.",
        "Separar dados de uma coluna usando delimitadores ou largura fixa.",
        "Validar senhas digitadas em formulários."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Texto para Colunas separa informações usando delimitadores como vírgula, ponto e vírgula ou espaço.",
    "feedbackErro": "A resposta correta identifica o recurso de divisão de dados em colunas.",
    "dicaBanca": "CSV e listas separadas por delimitadores costumam aparecer com Texto para Colunas.",
    "assunto": "office"
},
{
    "pergunta": "No Word, a orientação Retrato ou Paisagem pode ser aplicada apenas a parte do documento quando se usa:",
    "alternativas": [
        "Comentário com controle de alterações.",
        "Nota de rodapé vinculada ao parágrafo.",
        "Pincel de formatação em uma imagem.",
        "Quebra de seção adequada antes e depois do trecho.",
        "Marcador simples no início da página."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Seções permitem que apenas parte do documento tenha orientação diferente.",
    "feedbackErro": "A resposta correta aponta o uso de quebras de seção para configurações independentes.",
    "dicaBanca": "Orientação diferente em apenas algumas páginas exige seção.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, o recurso Anotações do Apresentador é utilizado para:",
    "alternativas": [
        "Criar legendas automáticas para imagens.",
        "Executar cálculos com base em gráficos.",
        "Aplicar o mesmo plano de fundo a todos os slides.",
        "Registrar lembretes e roteiro visíveis ao apresentador.",
        "Bloquear animações durante a impressão."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! As notas ajudam o apresentador sem precisar aparecer no slide exibido ao público.",
    "feedbackErro": "A resposta correta relaciona as anotações ao apoio de fala durante a apresentação.",
    "dicaBanca": "Notas do apresentador não são conteúdo principal do slide.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Word, o recurso Colunas é utilizado para:",
    "alternativas": [
        "Criar páginas duplicadas com a mesma numeração.",
        "Gerar gráficos estatísticos a partir do texto.",
        "Inserir fórmulas financeiras em parágrafos.",
        "Dividir o texto em duas ou mais colunas na página.",
        "Proteger imagens contra edição."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Colunas organizam o texto em blocos verticais, como em jornais e boletins.",
    "feedbackErro": "A resposta correta aponta a divisão do texto em colunas dentro da página.",
    "dicaBanca": "Não confunda colunas de texto no Word com colunas de planilha no Excel.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, o recurso Filtro permite:",
    "alternativas": [
        "Apagar todos os dados que não atendem ao critério.",
        "Transformar texto em fórmula automaticamente.",
        "Impedir a inserção de novas linhas na tabela.",
        "Exibir temporariamente apenas registros que atendem a critérios.",
        "Converter a tabela em imagem estática."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! O filtro oculta temporariamente registros que não atendem aos critérios definidos.",
    "feedbackErro": "A resposta correta destaca que filtrar não exclui os dados, apenas altera a visualização.",
    "dicaBanca": "Filtro não apaga; apenas exibe parte dos dados.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, agrupar objetos permite:",
    "alternativas": [
        "Transformar objetos em fórmula de cálculo.",
        "Desativar o slide mestre da apresentação.",
        "Remover o plano de fundo do slide ativo.",
        "Mover, redimensionar ou formatar vários elementos como um conjunto.",
        "Criar senha para apenas uma imagem."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! O agrupamento facilita manipular vários objetos simultaneamente.",
    "feedbackErro": "A resposta correta indica tratamento conjunto de formas, imagens e caixas de texto.",
    "dicaBanca": "Agrupar não mescla permanentemente os objetos; apenas os trata como conjunto.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, uma macro é:",
    "alternativas": [
        "Uma fórmula usada exclusivamente para somar células.",
        "Uma imagem vinculada ao resultado de uma planilha.",
        "Um tipo de gráfico financeiro padrão.",
        "Uma sequência de comandos automatizados, geralmente associada ao VBA.",
        "Um modo de impressão em escala reduzida."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Macros automatizam tarefas repetitivas e podem usar código VBA.",
    "feedbackErro": "A resposta correta associa macro à automação de comandos.",
    "dicaBanca": "Macros podem trazer riscos de segurança quando vindas de fontes desconhecidas.",
    "assunto": "office"
},
{
    "pergunta": "No Word, o recurso Comparar Documentos é utilizado para:",
    "alternativas": [
        "Inserir numeração automática em slides.",
        "Converter arquivos DOCX em planilhas editáveis.",
        "Remover quebras de seção em lote.",
        "Identificar diferenças entre duas versões de um documento.",
        "Criar etiquetas a partir de uma lista de e-mails."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! Comparar Documentos ajuda a visualizar mudanças entre versões.",
    "feedbackErro": "A resposta correta relaciona o recurso à análise de diferenças entre documentos.",
    "dicaBanca": "Comparar versões é tema comum em revisão documental.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, ao usar =SUBTOTAL(9;B2:B20) em uma lista filtrada, a função:",
    "alternativas": [
        "Converte os valores em texto formatado.",
        "Retorna sempre a quantidade de células preenchidas.",
        "Ignora qualquer tipo de filtro aplicado.",
        "Pode calcular a soma considerando o comportamento de listas filtradas.",
        "Executa uma pesquisa vertical na primeira coluna."
    ],
    "correta": 3,
    "feedbackAcerto": "Correto! SUBTOTAL pode realizar cálculos como soma e contagem em listas filtradas.",
    "feedbackErro": "A resposta correta reconhece que o código 9 indica soma e que SUBTOTAL é útil com filtros.",
    "dicaBanca": "SUBTOTAL é muito usado em bases filtradas.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No Word, o Painel de Navegação facilita principalmente:",
    "alternativas": [
        "A criação de senhas fortes para o arquivo.",
        "A compactação de imagens no documento.",
        "A execução de macros em lote.",
        "A alteração da extensão do arquivo.",
        "A localização de títulos, páginas e resultados de pesquisa."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! O painel permite navegar pela estrutura do documento e localizar conteúdos.",
    "feedbackErro": "A resposta correta relaciona o Painel de Navegação à busca e à navegação por títulos ou páginas.",
    "dicaBanca": "Painel de Navegação ajuda em documentos longos.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, o recurso Ensaiar Intervalos é usado para:",
    "alternativas": [
        "Criar automaticamente logotipos vetoriais.",
        "Bloquear todos os slides ocultos.",
        "Remover comentários de revisão.",
        "Importar dados de uma planilha CSV.",
        "Registrar tempos de apresentação de cada slide."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Ensaiar Intervalos grava tempos para orientar ou automatizar a apresentação.",
    "feedbackErro": "A resposta correta aponta o registro do tempo gasto em cada slide.",
    "dicaBanca": "Intervalos e temporização aparecem em questões de apresentação automática.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, uma segmentação de dados é utilizada principalmente em conjunto com:",
    "alternativas": [
        "Notas de rodapé.",
        "Cabeçalhos do Word.",
        "Transições de slide.",
        "Comentários simples.",
        "Tabelas e Tabelas Dinâmicas para filtragem visual."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Segmentações são filtros visuais usados em tabelas e tabelas dinâmicas.",
    "feedbackErro": "A resposta correta associa segmentação de dados a filtragem visual.",
    "dicaBanca": "Segmentação não é gráfico; é filtro visual interativo.",
    "assunto": "office"
},
{
    "pergunta": "No Word, uma legenda automática para figuras pode ser usada depois para gerar:",
    "alternativas": [
        "Uma senha de gravação.",
        "Uma macro assinada.",
        "Um slide mestre.",
        "Uma validação de dados.",
        "Uma lista de ilustrações."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Legendas numeradas permitem gerar listas de figuras ou tabelas.",
    "feedbackErro": "A resposta correta relaciona legenda à lista de ilustrações.",
    "dicaBanca": "Lista de ilustrações depende de legendas bem aplicadas.",
    "assunto": "office"
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
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, o Folheto é um modo de impressão usado para:",
    "alternativas": [
        "Editar o código VBA dos slides.",
        "Criar banco de dados vinculado.",
        "Bloquear animações de entrada.",
        "Aplicar validação de dados.",
        "Imprimir vários slides por página para o público."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Folhetos permitem distribuir a apresentação impressa em formato compacto.",
    "feedbackErro": "A resposta correta identifica a impressão de vários slides por página.",
    "dicaBanca": "Folheto está ligado à impressão, não à animação.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, o recurso Consolidar permite:",
    "alternativas": [
        "Trocar o tema visual da pasta de trabalho.",
        "Criar nota de rodapé em célula selecionada.",
        "Ocultar todos os comentários da planilha.",
        "Converter automaticamente imagens em texto.",
        "Resumir dados de diferentes intervalos ou planilhas."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Consolidar reúne dados de várias áreas para gerar um resumo.",
    "feedbackErro": "A resposta correta relaciona o recurso à consolidação de dados distribuídos.",
    "dicaBanca": "Consolidar é recurso de resumo, não de aparência.",
    "assunto": "office"
},
{
    "pergunta": "No Word, ao inserir um hiperlink, o usuário pode criar ligação para:",
    "alternativas": [
        "Apenas uma célula do Excel no mesmo computador.",
        "Somente uma imagem salva em PNG.",
        "Exclusivamente um endereço de e-mail corporativo.",
        "Apenas comentários do controle de alterações.",
        "Página da Web, arquivo, e-mail ou local no próprio documento."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Hiperlinks podem apontar para diferentes destinos internos ou externos.",
    "feedbackErro": "A resposta correta reconhece a variedade de destinos possíveis para um hiperlink.",
    "dicaBanca": "Hiperlink não se limita a sites.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, ao salvar uma planilha como CSV, é comum ocorrer:",
    "alternativas": [
        "Preservação de todas as fórmulas, gráficos e macros.",
        "Criação automática de vários slides vinculados.",
        "Proteção integral de células bloqueadas.",
        "Transformação do arquivo em apresentação.",
        "Armazenamento de dados em texto separado por delimitadores."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! CSV é formato textual usado para dados tabulares separados por delimitadores.",
    "feedbackErro": "A resposta correta aponta que CSV preserva dados em texto, não recursos completos da pasta Excel.",
    "dicaBanca": "CSV não preserva todos os recursos avançados da planilha.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, um Tema da apresentação reúne principalmente:",
    "alternativas": [
        "Senhas, macros e permissões de rede.",
        "Fórmulas, filtros e tabelas dinâmicas.",
        "Comentários, notas de rodapé e referências cruzadas.",
        "Hiperlinks, cookies e histórico de navegação.",
        "Cores, fontes, efeitos e estilos visuais coordenados."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Temas padronizam a aparência da apresentação.",
    "feedbackErro": "A resposta correta identifica o conjunto visual composto por cores, fontes e efeitos.",
    "dicaBanca": "Tema muda identidade visual; layout muda disposição do conteúdo.",
    "assunto": "office"
},
{
    "pergunta": "No Word, o recurso Ortografia e Gramática é utilizado para:",
    "alternativas": [
        "Gerar códigos de barras em mala direta.",
        "Criar gráficos com base em tabelas.",
        "Converter texto em imagem vetorial.",
        "Executar fórmulas condicionais.",
        "Auxiliar na revisão de erros linguísticos do documento."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! O recurso ajuda a revisar ortografia e gramática, embora não substitua leitura humana.",
    "feedbackErro": "A resposta correta associa o recurso à revisão linguística.",
    "dicaBanca": "Corretor ajuda, mas pode não entender contexto.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, a função TRANSPOR é utilizada para:",
    "alternativas": [
        "Proteger células contra edição simultânea.",
        "Converter texto em letras maiúsculas.",
        "Contar células preenchidas com números.",
        "Aplicar formatação de moeda.",
        "Inverter a orientação de linhas e colunas de um intervalo."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! TRANSPOR troca linhas por colunas e colunas por linhas.",
    "feedbackErro": "A resposta correta relaciona a função à mudança de orientação do intervalo.",
    "dicaBanca": "Transpor = transformar linhas em colunas.",
    "assunto": "office"
},
{
    "pergunta": "No PowerPoint, a opção Redefinir Slide serve para:",
    "alternativas": [
        "Excluir permanentemente todos os objetos do arquivo.",
        "Criar senha para iniciar a apresentação.",
        "Converter o slide em imagem JPEG.",
        "Remover o tema aplicado em toda a apresentação.",
        "Restaurar posições e formatações dos espaços reservados do layout."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! Redefinir ajusta o slide ao layout aplicado, sem necessariamente apagar todo o conteúdo.",
    "feedbackErro": "A resposta correta identifica a restauração dos espaços reservados conforme o layout.",
    "dicaBanca": "Redefinir Slide é diferente de Excluir Slide.",
    "assunto": "office"
},
{
    "pergunta": "No Excel, quando uma célula apresenta #####, normalmente isso indica:",
    "alternativas": [
        "Ausência de conexão com a Internet.",
        "Arquivo salvo em formato incompatível.",
        "Fórmula contendo macro maliciosa.",
        "Erro obrigatório de divisão por zero.",
        "Largura insuficiente para exibir o valor ou data negativa em certos contextos."
    ],
    "correta": 4,
    "feedbackAcerto": "Correto! O Excel pode exibir ##### quando a coluna é estreita demais para mostrar o conteúdo.",
    "feedbackErro": "A resposta correta relaciona o símbolo à exibição insuficiente da coluna, especialmente para números e datas.",
    "dicaBanca": "Antes de concluir que é erro de fórmula, aumente a largura da coluna.",
    "assunto": "office"
}

];
