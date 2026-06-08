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

    feedbackAcerto: `
Muito bem!

A função SOMA é utilizada para adicionar os valores de um intervalo de células.

Como a célula E7 apresenta o total acumulado dos valores existentes entre E2 e E6, a fórmula correta é =SOMA(E2:E6).

Essa é uma das funções mais utilizadas em planilhas eletrônicas.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A função SOMA realiza a adição dos valores presentes no intervalo E2:E6.

A letra A está incorreta porque MÉDIA calcula a média dos valores.

A letra B está incorreta porque MÁXIMO retorna apenas o maior valor do intervalo.

A letra D está incorreta porque CONT.SE realiza contagem baseada em critérios.

A letra E está incorreta porque PROCV é utilizada para pesquisa de informações em tabelas.
`,

    dicaBanca: `
As bancas costumam cobrar a diferença entre SOMA, MÉDIA, MÁXIMO, MÍNIMO e CONT.SE. Saber identificar a finalidade de cada função é fundamental.
`,

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

    feedbackAcerto: `
Correto!

A função MÉDIA calcula a média aritmética dos valores informados.

Somando as notas e dividindo pela quantidade de alunos, obtém-se o resultado 8.

A função MÉDIA é amplamente utilizada em planilhas acadêmicas, financeiras e administrativas.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A soma das notas é 40.

Dividindo 40 por 5 alunos, o resultado é 8.

As demais alternativas apresentam valores incompatíveis com o cálculo realizado pela função MÉDIA.
`,

    dicaBanca: `
Em concursos, é comum a banca apresentar uma tabela e exigir o cálculo manual do resultado da função MÉDIA.
`,

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

    feedbackAcerto: `
Excelente!

A função MÁXIMO retorna o maior valor existente em um intervalo de células.

Entre os valores apresentados na tabela, o maior é R$ 3.200,00.

Essa função é muito utilizada em relatórios financeiros, vendas e análises estatísticas.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A função MÁXIMO procura o maior valor numérico dentro do intervalo informado.

Ao analisar os valores da tabela, verifica-se que R$ 3.200,00 é o maior deles.

As demais alternativas representam valores existentes na planilha, mas não correspondem ao valor máximo.
`,

    dicaBanca: `
Não confunda MÁXIMO com MAIOR. MÁXIMO retorna diretamente o maior valor encontrado no intervalo.
`,

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

    feedbackAcerto: `
Muito bem!

A função MÍNIMO retorna o menor valor existente em um conjunto de dados.

Comparando todos os valores apresentados na tabela, o menor deles é 22.

Essa função é frequentemente utilizada para identificar menores preços, notas ou temperaturas.
`,

    feedbackErro: `
A alternativa correta é a letra D.

A função MÍNIMO retorna o menor valor encontrado no intervalo analisado.

Entre os números apresentados, o menor valor é 22.

As demais alternativas fazem parte da tabela, porém não representam o menor valor existente.
`,

    dicaBanca: `
Questões envolvendo MÁXIMO e MÍNIMO costumam aparecer juntas para avaliar a interpretação de tabelas.
`,

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

    feedbackAcerto: `
Perfeito!

A função CONT.SE realiza uma contagem baseada em um critério.

Na tabela apresentada, a palavra 'Aprovado' aparece quatro vezes.

Por esse motivo, o resultado retornado pela função será 4.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A função CONT.SE conta quantas células atendem exatamente ao critério informado.

Ao analisar a tabela, existem quatro ocorrências da palavra 'Aprovado'.

As demais alternativas representam quantidades incorretas para o critério solicitado.
`,

    dicaBanca: `
CONT.SE é uma das funções mais cobradas em concursos juntamente com SOMASE, MÉDIASE e PROCV.
`,

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

    feedbackAcerto: `
Correto!

A função SE realiza um teste lógico.

Como a nota de Bruno é 4, a condição B2>=7 não é satisfeita.

Dessa forma, a função retorna o valor definido para a condição falsa: 'Reprovado'.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A função SE verifica se a nota é maior ou igual a 7.

Como Bruno possui nota 4, a condição é falsa.

Por isso, o resultado retornado é 'Reprovado'.

As demais alternativas não correspondem ao valor configurado para a condição falsa da fórmula.
`,

    dicaBanca: `
Memorize a estrutura da função SE: teste lógico, valor se verdadeiro e valor se falso.
`,

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

    feedbackAcerto: `
Muito bem!

A função E retorna VERDADEIRO apenas quando todas as condições avaliadas são verdadeiras.

Na situação apresentada, tanto a nota quanto a frequência atendem aos critérios estabelecidos.

Por isso, o resultado retornado é VERDADEIRO.
`,

    feedbackErro: `
A alternativa correta é a letra A.

A função E exige que todas as condições sejam verdadeiras.

Como a nota é maior ou igual a 7 e a frequência é maior ou igual a 75%, ambas as condições foram satisfeitas.

Logo, o resultado retornado é VERDADEIRO.
`,

    dicaBanca: `
Não confunda E com OU. A função E exige que todas as condições sejam verdadeiras.
`,

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

    feedbackAcerto: `
Excelente!

A função PROCV localiza um valor na primeira coluna da tabela e retorna uma informação correspondente na mesma linha.

Ao procurar o produto 'Monitor', a função retorna o valor associado de R$ 350,00.

Essa é uma das funções mais cobradas em concursos públicos.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A função PROCV procura o texto 'Monitor' na primeira coluna da tabela.

Após localizar o produto, retorna o conteúdo da segunda coluna correspondente.

O valor associado é R$ 350,00.

As demais alternativas representam valores incorretos para a pesquisa realizada.
`,

    dicaBanca: `
No PROCV, o valor procurado deve estar obrigatoriamente na primeira coluna da matriz de pesquisa.
`,

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

    feedbackAcerto: `
Perfeito!

A função PROCV é utilizada para localizar informações em tabelas.

Ao informar o código 103, ela pesquisa a tabela e retorna automaticamente o nome correspondente.

Esse tipo de busca é muito comum em cadastros, estoques e sistemas administrativos.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A função PROCV realiza pesquisas verticais em tabelas.

Nesse caso, ela localiza o código 103 e retorna o nome associado.

As demais funções possuem outras finalidades:
MÉDIA calcula médias, CONT.SE realiza contagens, MÁXIMO retorna o maior valor e SOMA efetua adições.
`,

    dicaBanca: `
Questões envolvendo PROCV aparecem frequentemente associadas a tabelas de produtos, funcionários e alunos.
`,

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

    feedbackAcerto: `
Correto!

Ao analisar os valores da tabela, verifica-se que a categoria Moradia apresenta a maior despesa.

Questões desse tipo avaliam a capacidade de interpretar corretamente os dados apresentados em planilhas.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Comparando os valores das categorias apresentadas, Moradia possui o maior valor de despesa.

As demais categorias apresentam valores inferiores.

Esse tipo de questão exige atenção à leitura dos dados da tabela.
`,

    dicaBanca: `
Nem toda questão de Excel envolve fórmulas. Muitas bancas cobram apenas interpretação de planilhas e gráficos.
`,

    assunto: "office"
},{
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

    feedbackAcerto: `
Muito bem!

Ao localizar o produto 'Monitor' na tabela e analisar a mesma linha, verifica-se que o vendedor associado é Carlos.

Questões desse tipo avaliam a capacidade de localizar informações e interpretar corretamente os dados apresentados.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Ao observar a linha correspondente ao produto 'Monitor', verifica-se que o vendedor associado é Carlos.

As demais alternativas correspondem a outros registros da tabela ou não possuem relação com o produto solicitado.
`,

    dicaBanca: `
Bancas frequentemente apresentam tabelas simples para testar a interpretação de dados sem exigir o uso de fórmulas.
`,

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

    feedbackAcerto: `
Excelente!

A guia Página Inicial é a guia principal do Microsoft Word.

Nela estão disponíveis comandos de formatação de texto, fonte, alinhamento, estilos, marcadores e edição básica do documento.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A guia Página Inicial concentra os comandos mais utilizados do Word, como negrito, itálico, tamanho da fonte, alinhamento e estilos.

As demais guias possuem funções específicas diferentes daquelas exibidas na imagem.
`,

    dicaBanca: `
Questões sobre a Faixa de Opções costumam cobrar a localização dos comandos dentro das guias do Word.
`,

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

    feedbackAcerto: `
Correto!

A imagem apresenta o modo de edição de Cabeçalho e Rodapé.

Esse recurso permite inserir informações que serão repetidas automaticamente nas páginas do documento, como títulos, datas, logotipos e numeração.
`,

    feedbackErro: `
A alternativa correta é a letra C.

O Word está exibindo a área de Cabeçalho e Rodapé em modo de edição.

Esse recurso é utilizado para inserir elementos que aparecem de forma repetida ao longo do documento.

As demais alternativas não correspondem ao recurso mostrado na imagem.
`,

    dicaBanca: `
Cabeçalho aparece na parte superior da página e Rodapé na parte inferior. Ambos podem conter textos, imagens e numeração.
`,

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

    feedbackAcerto: `
Perfeito!

O recurso exibido é um Sumário Automático.

Ele é gerado a partir dos estilos de títulos aplicados ao documento e permite atualizar automaticamente a numeração das páginas.
`,

    feedbackErro: `
A alternativa correta é a letra C.

O Word gera o Sumário Automático utilizando os estilos de títulos definidos no documento.

Esse recurso facilita a organização e navegação em textos longos.

As demais alternativas representam recursos diferentes do exibido na imagem.
`,

    dicaBanca: `
Sem utilizar os estilos Título 1, Título 2 e Título 3, o Word não consegue gerar corretamente um sumário automático.
`,

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

    feedbackAcerto: `
Muito bem!

As Quebras de Seção permitem dividir um documento em partes independentes.

Cada seção pode possuir configurações próprias de margens, orientação da página, cabeçalhos, rodapés e numeração.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A Quebra de Seção cria uma nova seção dentro do documento, permitindo configurações independentes para cada parte.

Ela é diferente da Quebra de Página, que apenas inicia uma nova página sem criar uma nova seção.

As demais alternativas não representam a finalidade desse recurso.
`,

    dicaBanca: `
Uma das pegadinhas mais comuns é confundir Quebra de Página com Quebra de Seção.
`,

    assunto: "office"
},{
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

    feedbackAcerto: `
Excelente!

A Quebra de Seção do tipo Próxima Página inicia a nova seção imediatamente na página seguinte.

Já a opção Página Ímpar força o início da nova seção na próxima página ímpar disponível, podendo inclusive inserir uma página em branco para respeitar essa regra.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A quebra Próxima Página inicia a nova seção na página seguinte.

A quebra Página Ímpar inicia a nova seção obrigatoriamente em uma página ímpar.

As demais alternativas apresentam características incorretas sobre o funcionamento das Quebras de Seção.
`,

    dicaBanca: `
Questões sobre Quebras de Seção costumam aparecer em provas que cobram recursos avançados do Word.
`,

    assunto: "office"
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

    feedbackAcerto: `
Correto!

O Painel de Miniaturas de Slides exibe versões reduzidas dos slides da apresentação.

Ele permite navegar rapidamente entre os slides, alterar a ordem deles e selecionar qualquer slide para edição.
`,

    feedbackErro: `
A alternativa correta é a letra C.

O Painel de Miniaturas de Slides fica localizado à esquerda da janela do PowerPoint.

Sua principal função é facilitar a navegação e reorganização dos slides.

As demais alternativas representam elementos diferentes da interface do programa.
`,

    dicaBanca: `
Bancas gostam de cobrar a identificação visual dos componentes da interface do PowerPoint.
`,

    assunto: "office"
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

    feedbackAcerto: `
Muito bem!

Os Temas permitem alterar rapidamente o visual completo da apresentação.

Ao aplicar um tema, cores, fontes, estilos e efeitos são atualizados automaticamente em todos os slides.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Os Temas são conjuntos padronizados de cores, fontes e efeitos visuais.

Eles permitem modificar a aparência global da apresentação sem editar slide por slide.

As demais alternativas possuem funções diferentes.
`,

    dicaBanca: `
Não confunda Tema com Layout. O Tema altera o visual geral; o Layout altera apenas a disposição dos elementos em um slide.
`,

    assunto: "office"
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

    feedbackAcerto: `
Perfeito!

O comando Inserir Imagens permite adicionar fotografias, figuras, capturas de tela e outros elementos gráficos aos slides.

Esse recurso é fundamental para tornar apresentações mais visuais e atrativas.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O comando Inserir Imagens está disponível na guia Inserir do PowerPoint.

Ele permite adicionar elementos gráficos diretamente aos slides.

As demais alternativas possuem funções relacionadas à navegação, efeitos ou organização da apresentação.
`,

    dicaBanca: `
Animações e Transições não inserem imagens. Elas apenas aplicam efeitos aos objetos já existentes.
`,

    assunto: "office"
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

    feedbackAcerto: `
Excelente!

O comando Novo Slide adiciona um novo slide à apresentação.

Além disso, permite escolher diferentes layouts para o slide que será criado.
`,

    feedbackErro: `
A alternativa correta é a letra A.

O comando Novo Slide é responsável por criar novos slides dentro da apresentação.

Layout altera a estrutura de um slide existente e Redefinir restaura as configurações originais do slide atual.

As demais opções não criam novos slides.
`,

    dicaBanca: `
A diferença entre Novo Slide e Layout é frequentemente cobrada em concursos de informática.
`,

    assunto: "office"
},{
    pergunta: "No Microsoft Excel, qual função é utilizada para retornar a quantidade de células que atendem a um único critério estabelecido pelo usuário?",

    alternativas: [
        "SOMASE",
        "CONT.SE",
        "PROCV",
        "MÉDIASE",
        "SE"
    ],

    correta: 1,

    feedbackAcerto: `
Correto!

A função CONT.SE é utilizada para contar quantas células atendem a um determinado critério.

Ela é amplamente utilizada em relatórios, controles de estoque, pesquisas e planilhas administrativas.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A função CONT.SE realiza contagem baseada em um critério definido pelo usuário.

A função SOMASE realiza somas condicionais.

PROCV realiza pesquisas em tabelas.

MÉDIASE calcula médias condicionais.

SE executa testes lógicos.
`,

    dicaBanca: `
CONT.SE, SOMASE e MÉDIASE costumam aparecer juntas em provas de Excel e LibreOffice Calc.
`,

    assunto: "office"
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

    feedbackAcerto: `
Muito bem!

O Sumário Automático organiza os títulos e subtítulos do documento e gera automaticamente a relação de tópicos com suas respectivas páginas.
`,

    feedbackErro: `
A alternativa correta é a letra C.

O Sumário é criado a partir dos estilos de títulos aplicados ao documento.

Legenda identifica figuras e tabelas.

Nota de Rodapé adiciona observações complementares.

Referência Cruzada cria ligações entre elementos do documento.

Índice Remissivo possui finalidade diferente do sumário.
`,

    dicaBanca: `
Sem utilizar os estilos Título 1, Título 2 e Título 3, o Word não consegue gerar corretamente um Sumário Automático.
`,

    assunto: "office"
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

    feedbackAcerto: `
Excelente!

As transições controlam os efeitos visuais exibidos quando ocorre a mudança de um slide para outro durante a apresentação.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Transições são aplicadas entre slides.

Quando o efeito é aplicado a textos, imagens ou formas dentro do slide, estamos falando de Animações.

Essa é uma das diferenças mais cobradas em concursos.
`,

    dicaBanca: `
Transição = entre slides.

Animação = dentro do slide.
`,

    assunto: "office"
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

    feedbackAcerto: `
Perfeito!

A função PROCV realiza buscas verticais em tabelas.

Ela localiza um valor na primeira coluna e retorna uma informação correspondente na mesma linha.
`,

    feedbackErro: `
A alternativa correta é a letra D.

PROCV significa Procura Vertical.

Essa função é utilizada para localizar informações em tabelas e retornar dados relacionados.

As demais funções possuem finalidades diferentes:
SE realiza testes lógicos, CONT.SE conta ocorrências, SOMASE soma valores condicionais e MÉDIA calcula médias.
`,

    dicaBanca: `
PROCV é uma das funções mais cobradas em concursos públicos e processos seletivos.
`,

    assunto: "office"
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

    feedbackAcerto: `
Correto!

As Notas de Rodapé permitem inserir observações, referências bibliográficas ou informações complementares vinculadas ao texto principal.
`,

    feedbackErro: `
A alternativa correta é a letra B.

As Notas de Rodapé aparecem na parte inferior da página e servem para complementar informações do texto.

Comentários são utilizados durante revisões.

Referências Cruzadas criam ligações internas no documento.

As demais alternativas não possuem essa finalidade.
`,

    dicaBanca: `
Não confunda Nota de Rodapé com Comentário. Ambos servem para observações, mas possuem objetivos diferentes.
`,

    assunto: "office"
},{
    pergunta: "No Excel, a fórmula =SE(A1>=7;\"Aprovado\";\"Reprovado\") retornará:",

    alternativas: [
        "O valor de A1.",
        "VERDADEIRO ou FALSO.",
        "Aprovado se A1 for maior ou igual a 7.",
        "A média da planilha.",
        "Erro de sintaxe."
    ],

    correta: 2,

    feedbackAcerto: `
Muito bem!

A função SE permite executar um teste lógico e retornar resultados diferentes conforme a condição seja verdadeira ou falsa.

Se A1 for maior ou igual a 7, o resultado será "Aprovado".
`,

    feedbackErro: `
A alternativa correta é a letra C.

A função SE avalia uma condição lógica.

Quando A1 é maior ou igual a 7, retorna "Aprovado".

Caso contrário, retorna "Reprovado".

As demais alternativas não representam corretamente o comportamento da fórmula apresentada.
`,

    dicaBanca: `
A estrutura da função SE é uma das mais cobradas em concursos: condição, valor verdadeiro e valor falso.
`,

    assunto: "office"
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

    feedbackAcerto: `
Excelente!

A guia Animações contém os recursos responsáveis pelos efeitos aplicados a textos, imagens, formas e demais objetos de um slide.
`,

    feedbackErro: `
A alternativa correta é a letra D.

Os efeitos de entrada, saída, destaque e trajetória de movimento são configurados na guia Animações.

As demais guias possuem funções diferentes relacionadas ao design, inserção ou visualização da apresentação.
`,

    dicaBanca: `
Não confunda Animações com Transições. Animações atuam nos objetos; Transições atuam entre os slides.
`,

    assunto: "office"
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

    feedbackAcerto: `
Correto!

O operador <> significa "diferente de".

Ele é amplamente utilizado em funções lógicas, filtros e testes condicionais.
`,

    feedbackErro: `
A alternativa correta é a letra C.

No Excel, o operador <> representa a condição "diferente de".

O símbolo = representa igualdade.

Os símbolos > e < representam comparações de maior ou menor valor.

Já <= e >= representam comparações compostas.
`,

    dicaBanca: `
Questões sobre operadores lógicos costumam aparecer em conjunto com as funções SE, E e OU.
`,

    assunto: "office"
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

    feedbackAcerto: `
Muito bem!

O atalho Ctrl + B ativa ou remove a formatação em negrito no texto selecionado.

É um dos atalhos mais utilizados do Microsoft Word.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Ctrl + B é utilizado para aplicar ou remover o negrito.

Salvar normalmente utiliza Ctrl + S.

Abrir documento utiliza Ctrl + O.

As demais opções não correspondem ao atalho apresentado.
`,

    dicaBanca: `
Atalhos de teclado aparecem com frequência em provas de informática e costumam gerar pegadinhas.
`,

    assunto: "office"
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

    feedbackAcerto: `
Perfeito!

O modo Apresentação de Slides exibe os slides em tela cheia para que sejam apresentados ao público.

É o modo utilizado durante palestras, aulas e reuniões.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O modo Apresentação de Slides tem como finalidade exibir a apresentação em tela cheia.

As demais alternativas correspondem a tarefas de edição realizadas antes da apresentação.
`,

    dicaBanca: `
Lembre-se: F5 inicia a apresentação desde o primeiro slide e Shift + F5 inicia a partir do slide atual.
`,

    assunto: "office"
},{
    pergunta: "No Excel, qual função permite somar valores que atendam simultaneamente a mais de um critério?",

    alternativas: [
        "SOMA",
        "SOMASE",
        "SOMASES",
        "CONT.SE",
        "PROCV"
    ],

    correta: 2,

    feedbackAcerto: `
Excelente!

A função SOMASES permite realizar somas utilizando múltiplos critérios ao mesmo tempo.

Ela é muito utilizada em relatórios financeiros, controles de vendas e análises gerenciais.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A função SOMASES realiza somas condicionais utilizando dois ou mais critérios.

A função SOMASE trabalha com apenas um critério.

CONT.SE realiza contagens e PROCV executa pesquisas em tabelas.

Já SOMA simplesmente adiciona valores sem aplicar condições.
`,

    dicaBanca: `
A diferença entre SOMASE e SOMASES é bastante cobrada em concursos de informática.
`,

    assunto: "office"
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

    feedbackAcerto: `
Muito bem!

A Mala Direta permite combinar um documento modelo com uma base de dados para gerar documentos personalizados.

É amplamente utilizada para cartas, etiquetas, certificados e comunicados.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A Mala Direta automatiza a criação de documentos personalizados para vários destinatários.

Ela utiliza um documento principal e uma fonte de dados.

As demais alternativas referem-se a recursos diferentes do Word.
`,

    dicaBanca: `
Mala Direta é um dos recursos avançados mais cobrados em provas de Microsoft Word.
`,

    assunto: "office"
},

{
    pergunta: "No PowerPoint, qual recurso permite que alterações de layout e formatação sejam aplicadas a vários slides simultaneamente?",

    alternativas: [
        "Transições",
        "Classificação de Slides",
        "Mestre de Slides",
        "Animações",
        "Modo Leitura"
    ],

    correta: 2,

    feedbackAcerto: `
Correto!

O Mestre de Slides permite controlar elementos globais da apresentação.

Ao modificar o Mestre, as alterações podem ser aplicadas automaticamente a vários slides.
`,

    feedbackErro: `
A alternativa correta é a letra C.

O Mestre de Slides é utilizado para padronizar layouts, fontes, logotipos e posicionamento de elementos.

As demais alternativas possuem funções relacionadas à navegação ou efeitos visuais.
`,

    dicaBanca: `
Questões sobre Mestre de Slides costumam aparecer associadas à padronização de apresentações corporativas.
`,

    assunto: "office"
},

{
    pergunta: "No Excel, qual resultado será retornado pela fórmula =E(5>3;8<10)?",

    alternativas: [
        "FALSO",
        "VERDADEIRO",
        "ERRO",
        "5",
        "10"
    ],

    correta: 1,

    feedbackAcerto: `
Perfeito!

A função E retorna VERDADEIRO quando todas as condições avaliadas são verdadeiras.

Como 5 é maior que 3 e 8 é menor que 10, ambas as condições são satisfeitas.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A função E exige que todas as condições sejam verdadeiras.

Na expressão apresentada, as duas comparações são verdadeiras.

Por isso, o resultado retornado é VERDADEIRO.
`,

    dicaBanca: `
A função E normalmente aparece em conjunto com a função SE para criar regras de decisão mais complexas.
`,

    assunto: "office"
},

{
    pergunta: "No Word, qual recurso é mais adequado para garantir padronização automática de títulos, subtítulos e demais elementos do documento?",

    alternativas: [
        "Temas",
        "Marcadores",
        "Estilos",
        "Comentários",
        "Colunas"
    ],

    correta: 2,

    feedbackAcerto: `
Excelente!

Os Estilos permitem aplicar formatações padronizadas de forma rápida e consistente.

Além disso, são fundamentais para a criação de Sumários Automáticos.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Os Estilos padronizam títulos, subtítulos e outros elementos do documento.

Eles facilitam a organização do texto e permitem a geração automática de sumários.

As demais alternativas não possuem essa finalidade principal.
`,

    dicaBanca: `
Sempre que a questão mencionar padronização automática e Sumário Automático, pense em Estilos.
`,

    assunto: "office"
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

    feedbackAcerto: `
Muito bem!

A função MAX retorna o maior valor existente em um intervalo de células.

Ela é amplamente utilizada para identificar maiores vendas, maiores notas, maiores preços e outros valores máximos em planilhas.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A função MAX é utilizada para retornar o maior valor encontrado em um conjunto de dados.

As demais alternativas não correspondem ao nome correto da função utilizada pelo Excel.

Embora exista a função MAIOR, ela possui finalidade diferente e exige parâmetros adicionais.
`,

    dicaBanca: `
Muitas bancas confundem MAX com MAIOR. MAX retorna o maior valor diretamente; MAIOR retorna o n-ésimo maior valor.
`,

    assunto: "office"
},

{
    pergunta: "No PowerPoint, qual modo de exibição apresenta miniaturas de todos os slides ao mesmo tempo, facilitando a reorganização da sequência da apresentação?",

    alternativas: [
        "Modo Leitura",
        "Modo Estrutura",
        "Classificação de Slides",
        "Mestre de Slides",
        "Apresentação de Slides"
    ],

    correta: 2,

    feedbackAcerto: `
Excelente!

O modo Classificação de Slides exibe miniaturas de todos os slides simultaneamente.

Isso facilita a visualização geral da apresentação e permite reorganizar rapidamente sua sequência.
`,

    feedbackErro: `
A alternativa correta é a letra C.

O modo Classificação de Slides mostra todos os slides em formato de miniaturas.

Ele é utilizado principalmente para reorganizar a ordem da apresentação.

As demais opções possuem finalidades diferentes dentro do PowerPoint.
`,

    dicaBanca: `
Questões sobre modos de exibição costumam aparecer frequentemente em provas de PowerPoint.
`,

    assunto: "office"
},

{
    pergunta: "No Excel, qual função lógica retorna VERDADEIRO quando pelo menos uma das condições avaliadas é verdadeira?",

    alternativas: [
        "E",
        "SE",
        "OU",
        "CONT.SE",
        "SOMASE"
    ],

    correta: 2,

    feedbackAcerto: `
Correto!

A função OU retorna VERDADEIRO quando pelo menos uma das condições informadas é satisfeita.

Ela é muito utilizada em regras que admitem múltiplas possibilidades de aprovação.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A função OU exige que apenas uma das condições seja verdadeira para retornar VERDADEIRO.

Já a função E exige que todas as condições sejam verdadeiras.

As demais alternativas possuem finalidades diferentes.
`,

    dicaBanca: `
A principal diferença entre E e OU é uma das mais cobradas em funções lógicas.
`,

    assunto: "office"
},

{
    pergunta: "No Word, ao utilizar Ctrl + Enter, o programa executa qual ação?",

    alternativas: [
        "Insere uma quebra de seção.",
        "Insere uma quebra de página.",
        "Abre um novo documento.",
        "Cria uma nota de rodapé.",
        "Salva o documento."
    ],

    correta: 1,

    feedbackAcerto: `
Perfeito!

O atalho Ctrl + Enter insere uma Quebra de Página.

Com isso, o conteúdo seguinte passa automaticamente para a próxima página do documento.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Ctrl + Enter é o atalho utilizado para inserir uma Quebra de Página.

Esse recurso é muito utilizado na formatação de documentos longos.

As demais alternativas não correspondem à função desse atalho.
`,

    dicaBanca: `
Não confunda Quebra de Página com Quebra de Seção. São recursos diferentes e muito cobrados em concursos.
`,

    assunto: "office"
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

    feedbackAcerto: `
Muito bem!

A função CORRESP retorna a posição relativa de um valor dentro de um intervalo.

Ela é frequentemente utilizada em conjunto com a função ÍNDICE para criar pesquisas avançadas.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A função CORRESP localiza um valor e informa sua posição dentro de um intervalo.

A função ÍNDICE retorna um valor com base em uma posição.

PROCV realiza pesquisas verticais.

As demais funções possuem finalidades diferentes.
`,

    dicaBanca: `
A combinação ÍNDICE + CORRESP é considerada uma alternativa mais flexível ao PROCV.
`,

    assunto: "office"
},{
    pergunta: "No Excel, a função ÍNDICE é frequentemente utilizada em conjunto com CORRESP porque:",

    alternativas: [
        "Permite criar gráficos automaticamente.",
        "Substitui completamente as funções lógicas.",
        "Possibilita buscas mais flexíveis do que o PROCV.",
        "Transforma números em texto.",
        "Protege células contra edição."
    ],

    correta: 2,

    feedbackAcerto: `
Excelente!

A combinação ÍNDICE + CORRESP é amplamente utilizada para realizar buscas avançadas em planilhas.

Ela oferece maior flexibilidade que o PROCV, pois permite pesquisar informações em qualquer direção da tabela.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A combinação ÍNDICE + CORRESP é utilizada para criar pesquisas mais flexíveis e eficientes que o PROCV.

Ela permite localizar valores sem a limitação de pesquisar apenas da esquerda para a direita.

As demais alternativas não representam a finalidade dessas funções.
`,

    dicaBanca: `
Questões mais avançadas de Excel costumam cobrar a diferença entre PROCV e a combinação ÍNDICE + CORRESP.
`,

    assunto: "office"
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

    feedbackAcerto: `
Muito bem!

O Controle de Alterações registra inclusões, exclusões e modificações realizadas por diferentes usuários.

Esse recurso é bastante utilizado em documentos colaborativos e revisões de textos.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O Controle de Alterações permite visualizar todas as modificações realizadas em um documento.

Ele facilita revisões e aprovações antes da versão final.

As demais opções possuem funções diferentes dentro do Word.
`,

    dicaBanca: `
Controle de Alterações e Comentários costumam aparecer juntos em provas sobre revisão de documentos.
`,

    assunto: "office"
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

    feedbackAcerto: `
Correto!

As transições são efeitos visuais aplicados durante a mudança de um slide para outro.

Elas ajudam a tornar a apresentação mais dinâmica e agradável visualmente.
`,

    feedbackErro: `
A alternativa correta é a letra A.

Transições atuam entre slides.

Quando os efeitos são aplicados em textos, imagens ou formas dentro do slide, estamos falando de animações.

Essa diferença é uma das mais cobradas em concursos.
`,

    dicaBanca: `
Lembre-se: Transição ocorre entre slides. Animação ocorre dentro do slide.
`,

    assunto: "office"
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

    feedbackAcerto: `
Perfeito!

A função CONT.NÚM contabiliza apenas as células que possuem valores numéricos.

Textos, células vazias e outros conteúdos não são considerados nessa contagem.
`,

    feedbackErro: `
A alternativa correta é a letra C.

A função CONT.NÚM conta exclusivamente células contendo números.

CONT.VALORES conta células preenchidas independentemente do conteúdo.

As demais funções possuem finalidades diferentes.
`,

    dicaBanca: `
CONT.NÚM e CONT.VALORES são frequentemente cobradas juntas para confundir candidatos.
`,

    assunto: "office"
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

    feedbackAcerto: `
Excelente!

O Sumário Automático é criado a partir dos Estilos de Título aplicados aos tópicos do documento.

Sem esses estilos, o Word não consegue estruturar corretamente o sumário.
`,

    feedbackErro: `
A alternativa correta é a letra C.

O Word utiliza os Estilos de Título para identificar capítulos, seções e subseções.

Com base nessa estrutura, o programa gera automaticamente o sumário.

As demais alternativas não são responsáveis pela criação do Sumário Automático.
`,

    dicaBanca: `
Sempre que a questão mencionar Sumário Automático, a resposta geralmente estará relacionada aos Estilos de Título.
`,

    assunto: "office"
},{
    pergunta: "No Excel, qual operador é utilizado para indicar uma referência de intervalo?",

    alternativas: [
        ";",
        ":",
        "&",
        "@",
        "%"
    ],

    correta: 1,

    feedbackAcerto: `
Muito bem!

O operador ":" é utilizado para definir intervalos de células em planilhas.

Por exemplo, A1:A10 representa todas as células compreendidas entre A1 e A10.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O operador ":" indica um intervalo contínuo de células.

Na expressão A1:A10, todas as células entre A1 e A10 fazem parte do intervalo.

Os demais símbolos possuem funções diferentes dentro das fórmulas.
`,

    dicaBanca: `
Questões sobre sintaxe de fórmulas costumam cobrar operadores como :, ;, =, >, < e <>.
`,

    assunto: "office"
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

    feedbackAcerto: `
Correto!

O recurso Ocultar Slide mantém o slide dentro da apresentação, mas impede sua exibição durante a execução normal dos slides.

É muito utilizado quando se deseja manter conteúdo de reserva para determinadas situações.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Ocultar Slide impede que o slide seja exibido durante a apresentação sem removê-lo do arquivo.

Dessa forma, o conteúdo continua disponível para futuras edições.

As demais alternativas possuem finalidades diferentes.
`,

    dicaBanca: `
Ocultar Slide é um recurso muito utilizado em apresentações corporativas e frequentemente aparece em provas de PowerPoint.
`,

    assunto: "office"
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

    feedbackAcerto: `
Excelente!

A função SE permite retornar resultados diferentes conforme uma condição seja verdadeira ou falsa.

Nesse caso, quando A1 for maior ou igual a 7, será exibido "Aprovado". Caso contrário, será exibido "Reprovado".
`,

    feedbackErro: `
A alternativa correta é a letra A.

A função SE exige três elementos: condição, valor para verdadeiro e valor para falso.

A fórmula apresentada está corretamente estruturada e retorna "Aprovado" ou "Reprovado" conforme a nota informada.

As demais alternativas apresentam erros de sintaxe ou lógica.
`,

    dicaBanca: `
A função SE é considerada uma das funções mais importantes e mais cobradas em concursos de informática.
`,

    assunto: "office"
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

    feedbackAcerto: `
Perfeito!

A tecla F5 inicia a apresentação de slides desde o primeiro slide da apresentação.

É um dos atalhos mais conhecidos do PowerPoint.
`,

    feedbackErro: `
A alternativa correta é a letra C.

Ao pressionar F5, o PowerPoint inicia a apresentação desde o primeiro slide.

Para iniciar a partir do slide atual, utiliza-se normalmente Shift + F5.

As demais alternativas não correspondem à função desse atalho.
`,

    dicaBanca: `
Atalhos de teclado do PowerPoint aparecem com frequência em provas de informática básica.
`,

    assunto: "office"
},

{
    pergunta: "No Microsoft Excel e no LibreOffice Calc, qual tipo de gráfico é mais indicado para representar a participação percentual de cada categoria em um total?",

    alternativas: [
        "Gráfico de Linhas",
        "Gráfico de Pizza",
        "Gráfico de Dispersão",
        "Gráfico de Área",
        "Gráfico Radar"
    ],

    correta: 1,

    feedbackAcerto: `
Correto!

O gráfico de Pizza é utilizado para representar partes de um todo, facilitando a visualização da participação percentual de cada categoria.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O gráfico de Pizza é o mais indicado para representar percentuais de participação em um total.

Os demais gráficos possuem finalidades diferentes.
`,

    dicaBanca: `
Gráfico de Pizza = participação percentual. Essa associação é muito cobrada em concursos.
`,

    assunto: "office"
},

{
    pergunta: "Qual recurso do Excel permite exibir apenas os registros que atendem a critérios específicos, ocultando temporariamente os demais?",

    alternativas: [
        "Classificação",
        "Filtro",
        "Validação",
        "Proteção",
        "Congelar Painéis"
    ],

    correta: 1,

    feedbackAcerto: `
Muito bem!

O Filtro permite exibir apenas os dados que atendem aos critérios definidos pelo usuário.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O recurso Filtro restringe temporariamente a visualização dos registros.

Os dados não são apagados, apenas ocultados.
`,

    dicaBanca: `
Filtro e Classificação costumam aparecer juntos nas provas.
`,

    assunto: "office"
},

{
    pergunta: "No Excel, a Classificação Crescente organiza os dados:",

    alternativas: [
        "Do maior para o menor",
        "Do menor para o maior",
        "De forma aleatória",
        "Por cores",
        "Por comentários"
    ],

    correta: 1,

    feedbackAcerto: `
Correto!

A classificação crescente organiza números do menor para o maior e textos em ordem alfabética.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Classificação crescente significa ordenar dados do menor para o maior.
`,

    dicaBanca: `
Ordem crescente = A→Z ou menor→maior.
`,

    assunto: "office"
},

{
    pergunta: "No Microsoft Word, qual recurso é utilizado para criar tabelas destinadas à organização de informações em linhas e colunas?",

    alternativas: [
        "SmartArt",
        "Tabela",
        "WordArt",
        "Comentário",
        "Indicador"
    ],

    correta: 1,

    feedbackAcerto: `
Perfeito!

As tabelas permitem organizar dados em linhas e colunas de forma estruturada.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O recurso Tabela é utilizado para organizar informações tabulares em documentos.
`,

    dicaBanca: `
Questões sobre tabelas aparecem frequentemente em provas de Word.
`,

    assunto: "office"
},

{
    pergunta: "Qual formato é o padrão de documentos do LibreOffice Writer?",

    alternativas: [
        ".docx",
        ".txt",
        ".pdf",
        ".odt",
        ".rtf"
    ],

    correta: 3,

    feedbackAcerto: `
Excelente!

O formato padrão do LibreOffice Writer é ODT (Open Document Text).
`,

    feedbackErro: `
A alternativa correta é a letra D.

ODT é o formato nativo utilizado pelo LibreOffice Writer.
`,

    dicaBanca: `
ODT corresponde ao Writer assim como DOCX corresponde ao Word.
`,

    assunto: "office"
},

{
    pergunta: "Qual formato é nativamente utilizado pelo LibreOffice Calc para armazenamento de planilhas?",

    alternativas: [
        ".xlsx",
        ".ods",
        ".csv",
        ".xls",
        ".txt"
    ],

    correta: 1,

    feedbackAcerto: `
Muito bem!

ODS é o formato padrão utilizado pelo LibreOffice Calc.
`,

    feedbackErro: `
A alternativa correta é a letra B.

ODS é o formato nativo de planilhas do LibreOffice Calc.
`,

    dicaBanca: `
ODS = Calc. XLSX = Excel.
`,

    assunto: "office"
},

{
    pergunta: "Qual formato é utilizado pelo LibreOffice Impress para apresentações?",

    alternativas: [
        ".pptx",
        ".odp",
        ".ppsx",
        ".odt",
        ".ods"
    ],

    correta: 1,

    feedbackAcerto: `
Correto!

ODP é o formato padrão das apresentações criadas no LibreOffice Impress.
`,

    feedbackErro: `
A alternativa correta é a letra B.

ODP é o formato nativo do LibreOffice Impress.
`,

    dicaBanca: `
ODP = Impress. PPTX = PowerPoint.
`,

    assunto: "office"
},

{
    pergunta: "No Excel, qual recurso permite definir previamente quais valores podem ser digitados em uma célula?",

    alternativas: [
        "Filtro",
        "Validação de Dados",
        "Classificação",
        "Congelar Painéis",
        "Comentário"
    ],

    correta: 1,

    feedbackAcerto: `
Muito bem!

A Validação de Dados permite restringir os valores aceitos em uma célula.
`,

    feedbackErro: `
A alternativa correta é a letra B.

A Validação de Dados é utilizada para controlar entradas incorretas em planilhas.
`,

    dicaBanca: `
Validação de Dados é muito utilizada em formulários e planilhas corporativas.
`,

    assunto: "office"
},

{
    pergunta: "Qual recurso do Excel permite manter determinadas linhas ou colunas visíveis durante a rolagem da planilha?",

    alternativas: [
        "Filtro",
        "Congelar Painéis",
        "Validação",
        "Classificação",
        "Ocultar"
    ],

    correta: 1,

    feedbackAcerto: `
Perfeito!

Congelar Painéis mantém linhas e colunas visíveis durante a navegação.
`,

    feedbackErro: `
A alternativa correta é a letra B.

O recurso Congelar Painéis facilita a visualização de cabeçalhos em planilhas extensas.
`,

    dicaBanca: `
Congelar Painéis é um recurso bastante cobrado em Excel.
`,

    assunto: "office"
},

{
    pergunta: "Na impressão de um documento do Word, a orientação Paisagem caracteriza-se por:",

    alternativas: [
        "Página mais alta que larga",
        "Página mais larga que alta",
        "Página sem margens",
        "Página em formato quadrado",
        "Página sem cabeçalho"
    ],

    correta: 1,

    feedbackAcerto: `
Excelente!

Na orientação Paisagem, a largura da página é maior que sua altura.
`,

    feedbackErro: `
A alternativa correta é a letra B.

Paisagem significa página horizontal, mais larga do que alta.
`,

    dicaBanca: `
Retrato = vertical. Paisagem = horizontal.
`,

    assunto: "office"
},

{
    pergunta: "Antes de imprimir um documento, qual recurso permite verificar como será o resultado final da impressão?",

    alternativas: [
        "Visualização de Impressão",
        "Controle de Alterações",
        "Classificação",
        "Localizar",
        "Mala Direta"
    ],

    correta: 0,

    feedbackAcerto: `
Correto!

A Visualização de Impressão permite verificar a aparência final do documento antes da impressão.
`,

    feedbackErro: `
A alternativa correta é a letra A.

A Visualização de Impressão mostra exatamente como o documento será impresso.
`,

    dicaBanca: `
Visualização de Impressão é frequentemente cobrada em Word e Writer.
`,

    assunto: "office"
}

];
