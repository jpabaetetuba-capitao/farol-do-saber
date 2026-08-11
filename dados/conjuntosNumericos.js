// FAROL DO SABER - CONJUNTOS NUMÉRICOS E OPERAÇÕES COM CONJUNTOS
// Banco revisado: 70 questões de nível concurso, com gabarito balanceado.

const conjuntosNumericos = [
    {
        "subtopico": "Noção de conjunto",
        "pergunta": "Considere A = {2, 4, 6, 8}. Qual afirmação descreve corretamente esse conjunto?",
        "alternativas": [
            "A possui quatro elementos distintos e a ordem em que foram escritos não altera o conjunto.",
            "A possui oito elementos porque o maior valor listado é 8.",
            "A muda de natureza se seus elementos forem escritos na ordem inversa.",
            "A admite repetição de um elemento como forma de aumentar a cardinalidade do conjunto representado.",
            "A representa uma sequência ordenada, e não uma coleção de elementos."
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! Em conjuntos, a cardinalidade conta elementos distintos; a ordem de apresentação não importa.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: A possui quatro elementos distintos e a ordem em que foram escritos não altera o conjunto.\n\nEm conjuntos, a cardinalidade conta elementos distintos; a ordem de apresentação não importa.\n",
        "dicaBanca": "\nNão confunda conjunto com sequência: ordem e repetição não alteram um conjunto.\n"
    },
    {
        "subtopico": "Representação por extensão e compreensão",
        "pergunta": "O conjunto A = {x ∈ Z | -2 ≤ x < 3} pode ser escrito por extensão como:",
        "alternativas": [
            "{-2, -1, 0, 1, 2, 3}",
            "{-2, -1, 0, 1, 2}",
            "{-1, 0, 1, 2}",
            "{-2, -1, 1, 2}",
            "{-3, -2, -1, 0, 1, 2}"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! Como x é inteiro, entram todos os valores de -2 até 2; o 3 fica excluído pela desigualdade estrita.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {-2, -1, 0, 1, 2}\n\nComo x é inteiro, entram todos os valores de -2 até 2; o 3 fica excluído pela desigualdade estrita.\n",
        "dicaBanca": "\nObserve com atenção os símbolos ≤ e < antes de listar os elementos.\n"
    },
    {
        "subtopico": "Pertinência e inclusão",
        "pergunta": "Se A = {1, 2, {3}} e B = {1, 2, 3}, assinale a relação verdadeira.",
        "alternativas": [
            "3 ∈ A",
            "{3} ⊂ B e {3} ∈ B",
            "{3} ∈ A",
            "A ⊂ B",
            "B ⊂ A"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! Em A, o objeto {3} aparece como elemento. Já o número 3, isoladamente, não aparece como elemento de A.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {3} ∈ A\n\nEm A, o objeto {3} aparece como elemento. Já o número 3, isoladamente, não aparece como elemento de A.\n",
        "dicaBanca": "\nPertinência compara elemento e conjunto; inclusão compara dois conjuntos.\n"
    },
    {
        "subtopico": "Pertinência e inclusão",
        "pergunta": "Considere A = {1, 2, 3} e B = {1, 2, 3, 4}. Qual alternativa é correta?",
        "alternativas": [
            "A ∈ B e 3 ⊂ A",
            "B ⊂ A e 4 ∈ A",
            "A = B e 4 ∉ B",
            "A ⊂ B e 3 ∈ A",
            "3 ⊂ B e A ∈ B"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! Todos os elementos de A pertencem a B, logo A é subconjunto de B; além disso, 3 é elemento de A.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: A ⊂ B e 3 ∈ A\n\nTodos os elementos de A pertencem a B, logo A é subconjunto de B; além disso, 3 é elemento de A.\n",
        "dicaBanca": "\nLeia ∈ como “é elemento de” e ⊂ como “é subconjunto de”.\n"
    },
    {
        "subtopico": "Subconjuntos e conjunto das partes",
        "pergunta": "Se A = {a, b, c}, quantos subconjuntos distintos possui A?",
        "alternativas": [
            "3",
            "6",
            "9",
            "12",
            "8"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! Um conjunto com n elementos possui 2^n subconjuntos. Para n = 3, temos 2³ = 8.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 8\n\nUm conjunto com n elementos possui 2^n subconjuntos. Para n = 3, temos 2³ = 8.\n",
        "dicaBanca": "\nInclua o conjunto vazio e o próprio conjunto na contagem dos subconjuntos.\n"
    },
    {
        "subtopico": "Subconjuntos e conjunto das partes",
        "pergunta": "Para A = {1, 2}, qual é o conjunto das partes P(A)?",
        "alternativas": [
            "{∅, {1}, {2}, {1, 2}}",
            "{{1}, {2}}",
            "{∅, {1}, {2}, 1, 2, {1, 2}}",
            "{{1, 2}, ∅}",
            "{1, 2, {1}, {2}}"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! P(A) é formado por todos os subconjuntos de A: vazio, unitários e o próprio A.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {∅, {1}, {2}, {1, 2}}\n\nP(A) é formado por todos os subconjuntos de A: vazio, unitários e o próprio A.\n",
        "dicaBanca": "\nOs elementos de P(A) são conjuntos, não números isolados.\n"
    },
    {
        "subtopico": "Subconjuntos e conjunto das partes",
        "pergunta": "Um conjunto possui 32 subconjuntos. Quantos elementos ele possui?",
        "alternativas": [
            "4",
            "5",
            "6",
            "8",
            "16"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! Se um conjunto tem n elementos, então possui 2^n subconjuntos. Como 32 = 2^5, n = 5.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 5\n\nSe um conjunto tem n elementos, então possui 2^n subconjuntos. Como 32 = 2^5, n = 5.\n",
        "dicaBanca": "\nQuando a questão fornece o número de subconjuntos, procure uma potência de 2.\n"
    },
    {
        "subtopico": "Representação por extensão e compreensão",
        "pergunta": "Qual conjunto corresponde a {x ∈ N | x é múltiplo de 4 e 0 < x ≤ 20}?",
        "alternativas": [
            "{0, 4, 8, 12, 16, 20}",
            "{4, 8, 12, 16}",
            "{4, 8, 12, 16, 20}",
            "{2, 4, 8, 12, 16, 20}",
            "{4, 6, 8, 12, 16, 20}"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! Os múltiplos positivos de 4 até 20 são 4, 8, 12, 16 e 20.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {4, 8, 12, 16, 20}\n\nOs múltiplos positivos de 4 até 20 são 4, 8, 12, 16 e 20.\n",
        "dicaBanca": "\nConverta a propriedade em uma lista antes de comparar as alternativas.\n"
    },
    {
        "subtopico": "Noção de conjunto",
        "pergunta": "Considere A = {1, 1, 2, 2, 3, 3}. Qual é a cardinalidade de A?",
        "alternativas": [
            "2",
            "4",
            "5",
            "3",
            "6"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! Repetições não criam novos elementos em um conjunto. Assim, A = {1, 2, 3} e n(A) = 3.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 3\n\nRepetições não criam novos elementos em um conjunto. Assim, A = {1, 2, 3} e n(A) = 3.\n",
        "dicaBanca": "\nCardinalidade conta elementos distintos, não ocorrências na escrita.\n"
    },
    {
        "subtopico": "Pertinência e inclusão",
        "pergunta": "Se A = {0, 2, 4, 6} e B = {2, 4}, qual relação é verdadeira?",
        "alternativas": [
            "A ⊂ B e 6 ∈ B",
            "B ∈ A e 4 ⊂ A",
            "A ∈ B e 0 ∈ B",
            "B = A e 2 ∉ A",
            "B ⊂ A e 6 ∉ B"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! B é formado por elementos que pertencem a A, portanto B é subconjunto de A; 6 não pertence a B.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: B ⊂ A e 6 ∉ B\n\nB é formado por elementos que pertencem a A, portanto B é subconjunto de A; 6 não pertence a B.\n",
        "dicaBanca": "\nNão troque o símbolo de pertinência pelo de inclusão.\n"
    },
    {
        "subtopico": "União",
        "pergunta": "Dados A = {1, 2, 3, 5} e B = {2, 4, 5, 6}, determine A ∪ B.",
        "alternativas": [
            "{1, 2, 3, 4, 5, 6}",
            "{2, 5}",
            "{1, 3, 4, 6}, formado pelos elementos que não são comuns aos dois conjuntos",
            "{1, 2, 3, 5}",
            "{2, 4, 5, 6}"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! A união reúne os elementos que pertencem a pelo menos um dos conjuntos, sem repetição.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {1, 2, 3, 4, 5, 6}\n\nA união reúne os elementos que pertencem a pelo menos um dos conjuntos, sem repetição.\n",
        "dicaBanca": "\nNa união, reúna os dois conjuntos e elimine duplicidades.\n"
    },
    {
        "subtopico": "Interseção",
        "pergunta": "Dados A = {1, 2, 3, 5} e B = {2, 4, 5, 6}, determine A ∩ B.",
        "alternativas": [
            "{1, 2, 3, 4, 5, 6}",
            "{2, 5}",
            "{1, 3, 4, 6}",
            "{1, 2, 5}",
            "{2, 4, 5, 6}"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! A interseção contém os elementos comuns aos dois conjuntos: 2 e 5.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {2, 5}\n\nA interseção contém os elementos comuns aos dois conjuntos: 2 e 5.\n",
        "dicaBanca": "\nInterseção significa “pertence aos dois ao mesmo tempo”.\n"
    },
    {
        "subtopico": "Diferença e complemento",
        "pergunta": "Se A = {1, 2, 3, 4, 5} e B = {2, 4, 6}, então A − B é:",
        "alternativas": [
            "{2, 4}",
            "{1, 3, 5, 6}",
            "{1, 3, 5}",
            "{1, 2, 3, 4, 5, 6}",
            "{6}"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! A − B mantém os elementos de A que não pertencem a B: 1, 3 e 5.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {1, 3, 5}\n\nA − B mantém os elementos de A que não pertencem a B: 1, 3 e 5.\n",
        "dicaBanca": "\nNa diferença, a ordem importa: A − B geralmente difere de B − A.\n"
    },
    {
        "subtopico": "Diferença e complemento",
        "pergunta": "No universo U = {1, 2, 3, 4, 5, 6, 7, 8}, seja A = {2, 4, 6, 8}. O complemento de A em U é:",
        "alternativas": [
            "{2, 4, 6, 8}",
            "{1, 2, 3, 4}",
            "{5, 6, 7, 8}",
            "{1, 3, 5, 7}",
            "{1, 3, 5, 7, 8}"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! O complemento reúne os elementos do universo que não pertencem a A.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {1, 3, 5, 7}\n\nO complemento reúne os elementos do universo que não pertencem a A.\n",
        "dicaBanca": "\nComplemento depende do conjunto universo informado na questão.\n"
    },
    {
        "subtopico": "Expressões com operações entre conjuntos",
        "pergunta": "Considere A = {1, 2, 3, 4}, B = {3, 4, 5} e C = {2, 4, 6}. O conjunto (A ∩ B) ∪ C é:",
        "alternativas": [
            "{3, 4}",
            "{2, 4}",
            "{1, 2, 3, 4, 5, 6}",
            "{2, 3, 4, 5, 6}",
            "{2, 3, 4, 6}"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! Primeiro, A ∩ B = {3, 4}; unindo com C = {2, 4, 6}, obtemos {2, 3, 4, 6}.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {2, 3, 4, 6}\n\nPrimeiro, A ∩ B = {3, 4}; unindo com C = {2, 4, 6}, obtemos {2, 3, 4, 6}.\n",
        "dicaBanca": "\nRespeite os parênteses: resolva a operação interna antes da união.\n"
    },
    {
        "subtopico": "Expressões com operações entre conjuntos",
        "pergunta": "Se A = {1, 3, 5, 7}, B = {3, 4, 5, 6} e C = {1, 5, 6}, então (A ∪ B) − C é:",
        "alternativas": [
            "{3, 4, 7}",
            "{1, 3, 4, 5, 6, 7}",
            "{1, 5, 6}",
            "{3, 4, 6, 7}",
            "{1, 3, 4, 7}"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! A ∪ B = {1, 3, 4, 5, 6, 7}; retirando os elementos de C, restam 3, 4 e 7.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {3, 4, 7}\n\nA ∪ B = {1, 3, 4, 5, 6, 7}; retirando os elementos de C, restam 3, 4 e 7.\n",
        "dicaBanca": "\nFaça a união completa antes de aplicar a diferença.\n"
    },
    {
        "subtopico": "Expressões com operações entre conjuntos",
        "pergunta": "Considere A = {0, 1, 2, 3, 4}, B = {2, 3, 5} e C = {1, 3, 5}. O conjunto A ∩ (B ∪ C) é:",
        "alternativas": [
            "{2, 3, 5}",
            "{1, 2, 3}",
            "{1, 3, 5}",
            "{0, 1, 2, 3, 4, 5}",
            "{3}"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! B ∪ C = {1, 2, 3, 5}; intersectando com A, ficam 1, 2 e 3.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {1, 2, 3}\n\nB ∪ C = {1, 2, 3, 5}; intersectando com A, ficam 1, 2 e 3.\n",
        "dicaBanca": "\nEm expressões compostas, resolva primeiro o que está entre parênteses.\n"
    },
    {
        "subtopico": "Diferença e complemento",
        "pergunta": "Para A = {a, b, c, d} e B = {c, d, e}, qual é B − A?",
        "alternativas": [
            "{a, b}",
            "{c, d}",
            "{e}",
            "{a, b, e}",
            "{c, d, e}"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! B − A contém os elementos de B que não pertencem a A. Apenas e satisfaz essa condição.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {e}\n\nB − A contém os elementos de B que não pertencem a A. Apenas e satisfaz essa condição.\n",
        "dicaBanca": "\nTrocar A − B por B − A muda o conjunto de partida.\n"
    },
    {
        "subtopico": "União",
        "pergunta": "Sabendo que A ⊂ B, qual igualdade envolvendo a união deve ser satisfeita?",
        "alternativas": [
            "A ∪ B = A",
            "A ∩ B = ∅",
            "A − B = A",
            "A ∪ B = B",
            "B − A = ∅"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! Quando A está contido em B, todos os elementos de A já estão em B; por isso a união é B.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: A ∪ B = B\n\nQuando A está contido em B, todos os elementos de A já estão em B; por isso a união é B.\n",
        "dicaBanca": "\nUse a relação de inclusão para simplificar operações.\n"
    },
    {
        "subtopico": "Interseção",
        "pergunta": "Se A ⊂ B, então qual igualdade é necessariamente verdadeira?",
        "alternativas": [
            "A ∩ B = B",
            "A ∪ B = A",
            "B − A = B",
            "A − B = B",
            "A ∩ B = A"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! Se todo elemento de A pertence a B, a parte comum entre A e B é o próprio A.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: A ∩ B = A\n\nSe todo elemento de A pertence a B, a parte comum entre A e B é o próprio A.\n",
        "dicaBanca": "\nConjunto contido no outro reaparece integralmente na interseção.\n"
    },
    {
        "subtopico": "Diferença e complemento",
        "pergunta": "Se A ∩ B = ∅, com A e B não vazios, é correto afirmar que:",
        "alternativas": [
            "A e B são disjuntos.",
            "A está contido em B.",
            "B está contido em A.",
            "A e B possuem a mesma cardinalidade.",
            "A ∪ B é o conjunto vazio."
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! Conjuntos sem elementos em comum são chamados disjuntos.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: A e B são disjuntos.\n\nConjuntos sem elementos em comum são chamados disjuntos.\n",
        "dicaBanca": "\nInterseção vazia caracteriza conjuntos disjuntos.\n"
    },
    {
        "subtopico": "Expressões com operações entre conjuntos",
        "pergunta": "No universo U = {1, 2, 3, 4, 5, 6}, sejam A = {1, 2, 3, 4} e B = {3, 4, 5}. Quantos elementos possui o complemento de A ∩ B em U?",
        "alternativas": [
            "1",
            "4",
            "2",
            "3",
            "6"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! A ∩ B = {3, 4}; seu complemento em U é {1, 2, 5, 6}, com quatro elementos.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 4\n\nA ∩ B = {3, 4}; seu complemento em U é {1, 2, 5, 6}, com quatro elementos.\n",
        "dicaBanca": "\nAche primeiro a interseção e só depois aplique o complemento.\n"
    },
    {
        "subtopico": "Cardinalidade",
        "pergunta": "Se n(A) = 28, n(B) = 35 e n(A ∩ B) = 12, qual é n(A ∪ B)?",
        "alternativas": [
            "39",
            "47",
            "51",
            "63",
            "75"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! Pela fórmula n(A ∪ B) = n(A) + n(B) − n(A ∩ B), temos 28 + 35 − 12 = 51.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 51\n\nPela fórmula n(A ∪ B) = n(A) + n(B) − n(A ∩ B), temos 28 + 35 − 12 = 51.\n",
        "dicaBanca": "\nSubtraia a interseção uma vez para evitar dupla contagem.\n"
    },
    {
        "subtopico": "Problemas contextualizados com dois conjuntos",
        "pergunta": "Em uma turma de 48 alunos, 30 estudam inglês, 22 estudam espanhol e 12 estudam os dois idiomas. Quantos estudam pelo menos um dos dois?",
        "alternativas": [
            "36",
            "42",
            "44",
            "40",
            "52"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! A união vale 30 + 22 − 12 = 40 alunos.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 40\n\nA união vale 30 + 22 − 12 = 40 alunos.\n",
        "dicaBanca": "\n“Pelo menos um” corresponde à união dos conjuntos.\n"
    },
    {
        "subtopico": "Complemento da união em contexto",
        "pergunta": "Em uma turma de 48 alunos, 30 estudam inglês, 22 estudam espanhol e 12 estudam os dois idiomas. Quantos não estudam nenhum dos dois?",
        "alternativas": [
            "4",
            "6",
            "10",
            "18",
            "8"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! A união tem 40 alunos; como a turma possui 48, restam 8 fora dos dois conjuntos.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 8\n\nA união tem 40 alunos; como a turma possui 48, restam 8 fora dos dois conjuntos.\n",
        "dicaBanca": "\nCalcule a união e subtraia do total do universo.\n"
    },
    {
        "subtopico": "Problemas contextualizados com dois conjuntos",
        "pergunta": "Em uma pesquisa com 200 pessoas, 120 usam o serviço A, 95 usam o serviço B e 55 usam ambos. Quantas usam somente o serviço A?",
        "alternativas": [
            "65",
            "40",
            "55",
            "80",
            "105"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! Quem usa somente A é contado em A, mas não na interseção: 120 − 55 = 65.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 65\n\nQuem usa somente A é contado em A, mas não na interseção: 120 − 55 = 65.\n",
        "dicaBanca": "\nPara “A, mas não B”, subtraia a interseção de A.\n"
    },
    {
        "subtopico": "Problemas contextualizados com dois conjuntos",
        "pergunta": "Em uma escola, 84 alunos participam de xadrez, 70 de robótica e 46 das duas atividades. Quantos participam de exatamente uma dessas atividades?",
        "alternativas": [
            "46",
            "62",
            "54",
            "108",
            "154"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! Somente xadrez: 84 − 46 = 38; somente robótica: 70 − 46 = 24; total = 62.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 62\n\nSomente xadrez: 84 − 46 = 38; somente robótica: 70 − 46 = 24; total = 62.\n",
        "dicaBanca": "\n“Exatamente uma” exclui a região comum aos dois conjuntos.\n"
    },
    {
        "subtopico": "Cardinalidade em contexto",
        "pergunta": "Em um grupo, 76 pessoas gostam de café, 58 gostam de chá e 26 gostam de ambos. Quantas gostam de café ou chá?",
        "alternativas": [
            "82",
            "102",
            "108",
            "134",
            "160"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! A união é 76 + 58 − 26 = 108.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 108\n\nA união é 76 + 58 − 26 = 108.\n",
        "dicaBanca": "\nNa linguagem de conjuntos, “ou” inclusivo indica união.\n"
    },
    {
        "subtopico": "Complemento da união em contexto",
        "pergunta": "Uma pesquisa com 150 pessoas mostrou que 92 assistem ao canal A, 68 ao canal B e 35 aos dois. Quantas não assistem a nenhum desses canais?",
        "alternativas": [
            "15",
            "33",
            "57",
            "25",
            "125"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! A união é 92 + 68 − 35 = 125; fora da união ficam 150 − 125 = 25 pessoas.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 25\n\nA união é 92 + 68 − 35 = 125; fora da união ficam 150 − 125 = 25 pessoas.\n",
        "dicaBanca": "\n“Nenhum” é o complemento da união no universo da pesquisa.\n"
    },
    {
        "subtopico": "Cardinalidade",
        "pergunta": "Se n(A ∪ B) = 73, n(A) = 45 e n(B) = 38, então n(A ∩ B) é:",
        "alternativas": [
            "6",
            "8",
            "28",
            "83",
            "10"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! Da fórmula da união, 73 = 45 + 38 − n(A ∩ B); logo a interseção vale 10.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 10\n\nDa fórmula da união, 73 = 45 + 38 − n(A ∩ B); logo a interseção vale 10.\n",
        "dicaBanca": "\nIsole a interseção na fórmula da cardinalidade da união.\n"
    },
    {
        "subtopico": "Problemas contextualizados com dois conjuntos",
        "pergunta": "Em uma seleção, 64 candidatos acertaram Matemática, 52 acertaram Português e 30 acertaram ambas. Quantos acertaram Matemática e erraram Português?",
        "alternativas": [
            "34",
            "22",
            "30",
            "46",
            "86"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! Dos 64 que acertaram Matemática, 30 também acertaram Português; portanto 64 − 30 = 34.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 34\n\nDos 64 que acertaram Matemática, 30 também acertaram Português; portanto 64 − 30 = 34.\n",
        "dicaBanca": "\nA expressão “A e não B” corresponde à diferença A − B.\n"
    },
    {
        "subtopico": "Problemas contextualizados com dois conjuntos",
        "pergunta": "Em uma comunidade de 300 pessoas, 180 utilizam transporte coletivo, 150 usam bicicleta e 90 usam ambos. Quantas usam exatamente um desses meios?",
        "alternativas": [
            "90",
            "150",
            "120",
            "240",
            "330"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! Somente coletivo = 90 e somente bicicleta = 60; portanto exatamente um = 150.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 150\n\nSomente coletivo = 90 e somente bicicleta = 60; portanto exatamente um = 150.\n",
        "dicaBanca": "\nRetire a interseção de cada conjunto antes de somar as regiões exclusivas.\n"
    },
    {
        "subtopico": "Complemento da união em contexto",
        "pergunta": "Em uma pesquisa com 260 estudantes, 150 preferem aulas presenciais, 130 preferem atividades online e 70 preferem ambas. Quantos não escolheram nenhuma dessas opções?",
        "alternativas": [
            "20",
            "30",
            "50",
            "110",
            "210"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! A união é 150 + 130 − 70 = 210; fora dela ficam 260 − 210 = 50.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 50\n\nA união é 150 + 130 − 70 = 210; fora dela ficam 260 − 210 = 50.\n",
        "dicaBanca": "\nDepois de achar a união, compare com o total pesquisado.\n"
    },
    {
        "subtopico": "Cardinalidade",
        "pergunta": "Dois conjuntos finitos A e B são disjuntos, com n(A) = 17 e n(B) = 23. Qual é n(A ∪ B)?",
        "alternativas": [
            "6",
            "17",
            "23",
            "40",
            "391"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! Como A ∩ B = ∅, nenhuma correção por dupla contagem é necessária: 17 + 23 = 40.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 40\n\nComo A ∩ B = ∅, nenhuma correção por dupla contagem é necessária: 17 + 23 = 40.\n",
        "dicaBanca": "\nSe os conjuntos são disjuntos, a cardinalidade da união é a soma direta.\n"
    },
    {
        "subtopico": "Problemas contextualizados com dois conjuntos",
        "pergunta": "Em um concurso, 240 candidatos fizeram a prova A, 180 fizeram a prova B e 150 fizeram ambas. Quantos fizeram somente uma das provas?",
        "alternativas": [
            "60",
            "90",
            "270",
            "420",
            "120"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! Somente A = 90 e somente B = 30; somando as regiões exclusivas, obtemos 120.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 120\n\nSomente A = 90 e somente B = 30; somando as regiões exclusivas, obtemos 120.\n",
        "dicaBanca": "\nPara exatamente uma prova, não conte quem pertence à interseção.\n"
    },
    {
        "subtopico": "Complemento e cardinalidade",
        "pergunta": "Em um universo U com 90 elementos, A possui 52 elementos. Quantos elementos possui o complemento de A em U?",
        "alternativas": [
            "38",
            "42",
            "52",
            "90",
            "142"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! O complemento tem n(U) − n(A) = 90 − 52 = 38 elementos.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 38\n\nO complemento tem n(U) − n(A) = 90 − 52 = 38 elementos.\n",
        "dicaBanca": "\nComplemento e conjunto original particionam o universo.\n"
    },
    {
        "subtopico": "Três conjuntos em situação-problema",
        "pergunta": "Em uma turma, 30 alunos estudam Inglês (I), 28 Espanhol (E) e 20 Francês (F). Sabe-se que 12 estudam I e E, 8 estudam I e F, 7 estudam E e F, e 4 estudam os três. Quantos estudam pelo menos um idioma?",
        "alternativas": [
            "47",
            "55",
            "51",
            "59",
            "69"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! Pela inclusão-exclusão: 30 + 28 + 20 − 12 − 8 − 7 + 4 = 55.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 55\n\nPela inclusão-exclusão: 30 + 28 + 20 − 12 − 8 − 7 + 4 = 55.\n",
        "dicaBanca": "\nEm três conjuntos, some os individuais, subtraia as interseções duplas e recoloque a tripla.\n"
    },
    {
        "subtopico": "Exatamente dois conjuntos",
        "pergunta": "No cenário em que n(I∩E)=12, n(I∩F)=8, n(E∩F)=7 e n(I∩E∩F)=4, quantos alunos estudam exatamente dois dos três idiomas?",
        "alternativas": [
            "11",
            "19",
            "15",
            "23",
            "27"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! As regiões exatamente duplas são 12−4, 8−4 e 7−4; somando, 8 + 4 + 3 = 15.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 15\n\nAs regiões exatamente duplas são 12−4, 8−4 e 7−4; somando, 8 + 4 + 3 = 15.\n",
        "dicaBanca": "\nCada interseção de dois inclui quem está nos três; retire a tripla de cada uma.\n"
    },
    {
        "subtopico": "Exatamente um conjunto",
        "pergunta": "Com n(I)=30, n(E)=28, n(F)=20, n(I∩E)=12, n(I∩F)=8, n(E∩F)=7 e n(I∩E∩F)=4, quantos estudam exatamente um idioma?",
        "alternativas": [
            "28",
            "32",
            "40",
            "36",
            "55"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! Somente I = 14, somente E = 13 e somente F = 9; totalizando 36.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 36\n\nSomente I = 14, somente E = 13 e somente F = 9; totalizando 36.\n",
        "dicaBanca": "\nCalcule as regiões exclusivas, lembrando de corrigir a tripla interseção.\n"
    },
    {
        "subtopico": "Três conjuntos contextualizados",
        "pergunta": "Em um evento, 70 pessoas visitaram o estande A, 65 o B e 50 o C. As interseções A∩B, A∩C e B∩C têm 30, 22 e 18 pessoas, respectivamente, e 10 visitaram os três. Quantas visitaram ao menos um estande?",
        "alternativas": [
            "105",
            "115",
            "135",
            "155",
            "125"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! Aplicando inclusão-exclusão: 70 + 65 + 50 − 30 − 22 − 18 + 10 = 125.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 125\n\nAplicando inclusão-exclusão: 70 + 65 + 50 − 30 − 22 − 18 + 10 = 125.\n",
        "dicaBanca": "\nEm três conjuntos, a interseção tripla deve ser somada de volta uma vez.\n"
    },
    {
        "subtopico": "Três conjuntos contextualizados",
        "pergunta": "Em uma escola com 180 alunos, 90 participam de esporte, 75 de música e 60 de teatro. Há 35 em esporte e música, 28 em esporte e teatro, 25 em música e teatro e 15 nas três. Quantos não participam de nenhuma dessas atividades?",
        "alternativas": [
            "28",
            "13",
            "23",
            "43",
            "152"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! A união é 90 + 75 + 60 − 35 − 28 − 25 + 15 = 152; então 180 − 152 = 28.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 28\n\nA união é 90 + 75 + 60 − 35 − 28 − 25 + 15 = 152; então 180 − 152 = 28.\n",
        "dicaBanca": "\nAche primeiro a união dos três conjuntos e depois o complemento.\n"
    },
    {
        "subtopico": "Exatamente dois conjuntos",
        "pergunta": "No cenário da escola, com interseções duplas 35, 28 e 25 e interseção tripla 15, quantos alunos participam de exatamente duas atividades?",
        "alternativas": [
            "28",
            "43",
            "38",
            "58",
            "88"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! Exatamente duas = (35−15) + (28−15) + (25−15) = 20 + 13 + 10 = 43.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 43\n\nExatamente duas = (35−15) + (28−15) + (25−15) = 20 + 13 + 10 = 43.\n",
        "dicaBanca": "\nNão some as interseções duplas sem descontar quem participa das três.\n"
    },
    {
        "subtopico": "Exatamente um conjunto",
        "pergunta": "No mesmo cenário, com 90 em esporte, 75 em música, 60 em teatro, interseções 35, 28 e 25 e tripla 15, quantos participam de exatamente uma atividade?",
        "alternativas": [
            "79",
            "89",
            "94",
            "109",
            "137"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! Somente esporte = 42, somente música = 30 e somente teatro = 22; total = 94.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 94\n\nSomente esporte = 42, somente música = 30 e somente teatro = 22; total = 94.\n",
        "dicaBanca": "\nPara achar a região exclusiva, retire as duas interseções e recoloque a tripla uma vez.\n"
    },
    {
        "subtopico": "Regiões em três conjuntos",
        "pergunta": "Em três conjuntos A, B e C, a região formada por elementos que pertencem a A e B, mas não a C, é representada por:",
        "alternativas": [
            "A ∩ B ∩ C",
            "A − (B ∪ C)",
            "(A ∪ B) − C",
            "(A ∩ B) − C",
            "C − (A ∩ B)"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! Primeiro exigimos pertencer simultaneamente a A e B; depois retiramos os elementos que também pertencem a C.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: (A ∩ B) − C\n\nPrimeiro exigimos pertencer simultaneamente a A e B; depois retiramos os elementos que também pertencem a C.\n",
        "dicaBanca": "\nTraduza “A e B, mas não C” em duas etapas: interseção e diferença.\n"
    },
    {
        "subtopico": "Regiões em três conjuntos",
        "pergunta": "A expressão A − (B ∪ C) representa os elementos que:",
        "alternativas": [
            "pertencem simultaneamente a A, B e C.",
            "pertencem a B ou C, mas não a A.",
            "pertencem a A e a pelo menos um entre B e C, incluindo regiões de interseção.",
            "pertencem a exatamente dois entre A, B e C.",
            "pertencem a A e não pertencem nem a B nem a C."
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! A diferença remove de A todos os elementos presentes na união B ∪ C.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: pertencem a A e não pertencem nem a B nem a C.\n\nA diferença remove de A todos os elementos presentes na união B ∪ C.\n",
        "dicaBanca": "\nLeia primeiro o conjunto retirado: B ∪ C contém quem está em B ou em C.\n"
    },
    {
        "subtopico": "Três conjuntos e regiões do diagrama",
        "pergunta": "Se n(A∩B)=18 e n(A∩B∩C)=7, quantos elementos estão em A e B, mas fora de C?",
        "alternativas": [
            "11",
            "7",
            "18",
            "25",
            "126"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! A interseção A∩B inclui os que também estão em C; retirando a tripla, 18 − 7 = 11.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 11\n\nA interseção A∩B inclui os que também estão em C; retirando a tripla, 18 − 7 = 11.\n",
        "dicaBanca": "\nInterseção dupla informada costuma incluir a região central dos três conjuntos.\n"
    },
    {
        "subtopico": "Naturais e inteiros",
        "pergunta": "Qual dos números abaixo pertence a Z, mas não pertence a N?",
        "alternativas": [
            "0",
            "-4",
            "3",
            "12",
            "25"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! O número −4 é inteiro e não é natural. Os demais valores listados são naturais na convenção que inclui o zero.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: -4\n\nO número −4 é inteiro e não é natural. Os demais valores listados são naturais na convenção que inclui o zero.\n",
        "dicaBanca": "\nInteiros incluem negativos; naturais não incluem números negativos.\n"
    },
    {
        "subtopico": "Racionais e irracionais",
        "pergunta": "Qual número é racional?",
        "alternativas": [
            "√3",
            "π",
            "0,272727...",
            "√7",
            "0,1010010001..."
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! Toda dízima periódica é racional, pois pode ser escrita como razão de dois inteiros.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 0,272727...\n\nToda dízima periódica é racional, pois pode ser escrita como razão de dois inteiros.\n",
        "dicaBanca": "\nDecimal infinito periódico é racional; infinito não periódico pode ser irracional.\n"
    },
    {
        "subtopico": "Racionais e irracionais",
        "pergunta": "Qual número é irracional?",
        "alternativas": [
            "-7",
            "0,125",
            "5/9",
            "√18",
            "√49"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! √18 = 3√2 e não pode ser escrito como razão de inteiros; os demais são racionais.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: √18\n\n√18 = 3√2 e não pode ser escrito como razão de inteiros; os demais são racionais.\n",
        "dicaBanca": "\nRaiz quadrada de inteiro que não é quadrado perfeito tende a produzir irracional.\n"
    },
    {
        "subtopico": "Classificação de números",
        "pergunta": "Considere os números -5, 0, 3/4, √16, √2 e π. Quantos são racionais?",
        "alternativas": [
            "1",
            "2",
            "5",
            "6",
            "4"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! São racionais -5, 0, 3/4 e √16 = 4. Já √2 e π são irracionais.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 4\n\nSão racionais -5, 0, 3/4 e √16 = 4. Já √2 e π são irracionais.\n",
        "dicaBanca": "\nSimplifique raízes e classifique cada número antes de contar.\n"
    },
    {
        "subtopico": "Conjuntos numéricos e inclusão",
        "pergunta": "Qual cadeia de inclusões está correta?",
        "alternativas": [
            "N ⊂ Z ⊂ Q ⊂ R",
            "Z ⊂ N ⊂ Q ⊂ R",
            "N ⊂ Q ⊂ Z ⊂ R",
            "Q ⊂ Z ⊂ N ⊂ R",
            "R ⊂ Q ⊂ Z ⊂ N"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! Naturais estão contidos nos inteiros, que estão contidos nos racionais, todos pertencentes aos reais.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: N ⊂ Z ⊂ Q ⊂ R\n\nNaturais estão contidos nos inteiros, que estão contidos nos racionais, todos pertencentes aos reais.\n",
        "dicaBanca": "\nMemorize a expansão dos conjuntos: N, Z, Q e R.\n"
    },
    {
        "subtopico": "Reais",
        "pergunta": "O conjunto R − Q corresponde ao conjunto dos:",
        "alternativas": [
            "naturais.",
            "irracionais.",
            "inteiros.",
            "racionais positivos.",
            "números reais negativos."
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! Retirar os racionais do conjunto dos reais deixa exatamente os números irracionais.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: irracionais.\n\nRetirar os racionais do conjunto dos reais deixa exatamente os números irracionais.\n",
        "dicaBanca": "\nOs reais são formados pela união disjunta de racionais e irracionais.\n"
    },
    {
        "subtopico": "Classificação de números",
        "pergunta": "O número √81 pertence ao menor dos conjuntos abaixo indicado por:",
        "alternativas": [
            "Z − N",
            "Q − Z",
            "N",
            "R − Q",
            "R − Z"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! Como √81 = 9, trata-se de um número natural; portanto também é inteiro, racional e real.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: N\n\nComo √81 = 9, trata-se de um número natural; portanto também é inteiro, racional e real.\n",
        "dicaBanca": "\nQuando pedirem o menor conjunto, simplifique o número antes de classificar.\n"
    },
    {
        "subtopico": "Racionais e irracionais",
        "pergunta": "A soma de um número racional com um número irracional é necessariamente:",
        "alternativas": [
            "um número natural.",
            "um número inteiro.",
            "um número racional.",
            "irracional.",
            "um número positivo."
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! Se r + i fosse racional, então i seria diferença de dois racionais, contradição; logo a soma é irracional.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: irracional.\n\nSe r + i fosse racional, então i seria diferença de dois racionais, contradição; logo a soma é irracional.\n",
        "dicaBanca": "\nRacional ± irracional permanece irracional.\n"
    },
    {
        "subtopico": "Racionais e irracionais",
        "pergunta": "O produto de dois números irracionais:",
        "alternativas": [
            "é irracional para toda escolha possível de dois fatores irracionais.",
            "é racional para quaisquer fatores escolhidos.",
            "é inteiro em qualquer escolha de fatores.",
            "é positivo para quaisquer fatores escolhidos.",
            "pode ser racional ou irracional, conforme os fatores."
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! Por exemplo, √2·√2 = 2 é racional, enquanto √2·√3 = √6 é irracional.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: pode ser racional ou irracional, conforme os fatores.\n\nPor exemplo, √2·√2 = 2 é racional, enquanto √2·√3 = √6 é irracional.\n",
        "dicaBanca": "\nEvite generalizar operações com irracionais sem testar exemplos.\n"
    },
    {
        "subtopico": "Intervalos reais",
        "pergunta": "O intervalo [-2, 3) representa os números reais x que satisfazem:",
        "alternativas": [
            "-2 ≤ x < 3",
            "-2 < x ≤ 3",
            "-2 < x < 3",
            "-2 ≤ x ≤ 3",
            "x < -2 ou x ≥ 3"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! Colchete inclui o extremo -2; parêntese exclui o extremo 3.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: -2 ≤ x < 3\n\nColchete inclui o extremo -2; parêntese exclui o extremo 3.\n",
        "dicaBanca": "\nAssocie colchete a inclusão do extremo e parêntese a exclusão.\n"
    },
    {
        "subtopico": "Intervalos reais",
        "pergunta": "A interseção dos intervalos [0, 5] e (3, 8) é:",
        "alternativas": [
            "[0, 8)",
            "(3, 5]",
            "[3, 5]",
            "(0, 8)",
            "[5, 8)"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! Os valores comuns são maiores que 3 e menores ou iguais a 5.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: (3, 5]\n\nOs valores comuns são maiores que 3 e menores ou iguais a 5.\n",
        "dicaBanca": "\nInterseção de intervalos é a faixa comum às duas condições.\n"
    },
    {
        "subtopico": "Intervalos reais",
        "pergunta": "A união dos intervalos (-∞, 2] e [2, 7) é:",
        "alternativas": [
            "(-∞, 2]",
            "[2, 7)",
            "(-∞, 7)",
            "(-∞, 7]",
            "(-∞, 2) ∪ (2, 7)"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! Os intervalos se encontram em 2 e, juntos, cobrem todos os reais menores que 7.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: (-∞, 7)\n\nOs intervalos se encontram em 2 e, juntos, cobrem todos os reais menores que 7.\n",
        "dicaBanca": "\nSe os intervalos se tocam em um ponto incluído, a união pode formar um único intervalo.\n"
    },
    {
        "subtopico": "Conjuntos definidos por propriedade",
        "pergunta": "No universo U = {1, 2, ..., 30}, seja A o conjunto dos múltiplos de 3 e B o dos múltiplos de 5. Quantos elementos possui A ∩ B?",
        "alternativas": [
            "1",
            "3",
            "5",
            "2",
            "8"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! A ∩ B contém os múltiplos de 15 dentro de U: 15 e 30.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 2\n\nA ∩ B contém os múltiplos de 15 dentro de U: 15 e 30.\n",
        "dicaBanca": "\nNa interseção de múltiplos, procure múltiplos do mínimo múltiplo comum.\n"
    },
    {
        "subtopico": "Conjuntos definidos por propriedade",
        "pergunta": "No universo U = {1, 2, ..., 40}, seja A o conjunto dos múltiplos de 4 e B o dos múltiplos de 6. Quantos elementos possui A ∪ B?",
        "alternativas": [
            "10",
            "11",
            "16",
            "17",
            "13"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! Há 10 múltiplos de 4, 6 múltiplos de 6 e 3 múltiplos de 12. Assim, 10 + 6 − 3 = 13.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 13\n\nHá 10 múltiplos de 4, 6 múltiplos de 6 e 3 múltiplos de 12. Assim, 10 + 6 − 3 = 13.\n",
        "dicaBanca": "\nConte cada conjunto e use inclusão-exclusão para os múltiplos comuns.\n"
    },
    {
        "subtopico": "Diferença em conjuntos numéricos",
        "pergunta": "Se A é o conjunto dos divisores positivos de 24 e B o conjunto dos divisores positivos de 36, então A − B é:",
        "alternativas": [
            "{8, 24}",
            "{1, 2, 3, 4, 6, 12}",
            "{9, 18, 36}",
            "{8, 9, 18, 24, 36}",
            "{1, 2, 3, 4, 6, 8, 12, 24}"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! Divisores de 24 são {1,2,3,4,6,8,12,24}; retirando os que também dividem 36, ficam 8 e 24.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {8, 24}\n\nDivisores de 24 são {1,2,3,4,6,8,12,24}; retirando os que também dividem 36, ficam 8 e 24.\n",
        "dicaBanca": "\nListe os divisores de cada número antes de fazer a diferença.\n"
    },
    {
        "subtopico": "União em conjuntos numéricos",
        "pergunta": "A = {x ∈ N | x divide 18} e B = {x ∈ N | x divide 30}. Quantos elementos possui A ∪ B?",
        "alternativas": [
            "11",
            "10",
            "12",
            "13",
            "14"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! A = {1,2,3,6,9,18} e B = {1,2,3,5,6,10,15,30}; a união tem 10 elementos distintos.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 10\n\nA = {1,2,3,6,9,18} e B = {1,2,3,5,6,10,15,30}; a união tem 10 elementos distintos.\n",
        "dicaBanca": "\nAo unir conjuntos de divisores, elimine os elementos repetidos.\n"
    },
    {
        "subtopico": "Operações com conjuntos numéricos",
        "pergunta": "Considere A = {x ∈ Z | -4 ≤ x ≤ 5} e B = {x ∈ Z | x é par}. Quantos elementos possui A ∩ B?",
        "alternativas": [
            "4",
            "6",
            "5",
            "7",
            "10"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! Os inteiros pares no intervalo são -4, -2, 0, 2 e 4, totalizando cinco elementos.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 5\n\nOs inteiros pares no intervalo são -4, -2, 0, 2 e 4, totalizando cinco elementos.\n",
        "dicaBanca": "\nTransforme a condição em uma lista curta antes de contar.\n"
    },
    {
        "subtopico": "Complemento em conjunto universo",
        "pergunta": "No universo U = {-5, -4, ..., 5}, seja A = {x ∈ U | x² ≤ 9}. Quantos elementos possui o complemento de A?",
        "alternativas": [
            "3",
            "5",
            "7",
            "4",
            "11"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! A = {-3,-2,-1,0,1,2,3}, com 7 elementos; U tem 11, logo o complemento tem 4.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 4\n\nA = {-3,-2,-1,0,1,2,3}, com 7 elementos; U tem 11, logo o complemento tem 4.\n",
        "dicaBanca": "\nResolva a desigualdade e compare com o universo informado.\n"
    },
    {
        "subtopico": "Conjuntos numéricos em contexto",
        "pergunta": "Um professor listou 0, -12, 5/4, 0,2, 0,121212..., √25, √7 e π. Quantos desses números são racionais?",
        "alternativas": [
            "4",
            "5",
            "7",
            "8",
            "6"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! São racionais 0, -12, 5/4, 0,2, a dízima periódica e √25 = 5; √7 e π são irracionais.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 6\n\nSão racionais 0, -12, 5/4, 0,2, a dízima periódica e √25 = 5; √7 e π são irracionais.\n",
        "dicaBanca": "\nDecimais finitos e dízimas periódicas são racionais.\n"
    },
    {
        "subtopico": "Conjuntos numéricos e operações",
        "pergunta": "Considere A = {-3, -2, -1, 0, 1, 2, 3, 4} e B o conjunto dos pares de A. Qual é A − B?",
        "alternativas": [
            "{-3, -1, 1, 3}",
            "{-2, 0, 2, 4}",
            "{-3, -2, -1, 1, 2, 3}",
            "{-3, -1, 0, 1, 3}",
            "{-2, -1, 1, 2}"
        ],
        "correta": 0,
        "feedbackAcerto": "\n🎉 Excelente! Retirando de A os elementos pares, restam os inteiros ímpares -3, -1, 1 e 3.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: {-3, -1, 1, 3}\n\nRetirando de A os elementos pares, restam os inteiros ímpares -3, -1, 1 e 3.\n",
        "dicaBanca": "\nDiferença A − B mantém elementos de A que não pertencem a B.\n"
    },
    {
        "subtopico": "Cardinalidade da união",
        "pergunta": "Se A é o conjunto dos múltiplos positivos de 2 menores que 20 e B o conjunto dos múltiplos positivos de 3 menores que 20, quantos elementos possui A ∪ B?",
        "alternativas": [
            "9",
            "12",
            "10",
            "13",
            "15"
        ],
        "correta": 1,
        "feedbackAcerto": "\n🎉 Excelente! A tem 9 elementos, B tem 6 e a interseção, formada pelos múltiplos de 6, tem 3; então 9 + 6 − 3 = 12.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 12\n\nA tem 9 elementos, B tem 6 e a interseção, formada pelos múltiplos de 6, tem 3; então 9 + 6 − 3 = 12.\n",
        "dicaBanca": "\nEm múltiplos de dois números, a interseção usa o MMC.\n"
    },
    {
        "subtopico": "Situações-problema com conjuntos",
        "pergunta": "Em uma pesquisa, 52 pessoas gostam de Matemática, 41 de Ciências e 17 de ambas. Se 80 pessoas foram consultadas, quantas gostam de exatamente uma das disciplinas?",
        "alternativas": [
            "35",
            "42",
            "59",
            "63",
            "76"
        ],
        "correta": 2,
        "feedbackAcerto": "\n🎉 Excelente! Somente Matemática = 35 e somente Ciências = 24; exatamente uma = 59.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 59\n\nSomente Matemática = 35 e somente Ciências = 24; exatamente uma = 59.\n",
        "dicaBanca": "\nNão confunda “pelo menos uma” com “exatamente uma”.\n"
    },
    {
        "subtopico": "Situações-problema com conjuntos",
        "pergunta": "Em uma turma de 60 alunos, 38 resolveram a questão A, 32 resolveram a questão B e 20 resolveram ambas. Quantos não resolveram nenhuma?",
        "alternativas": [
            "6",
            "8",
            "20",
            "10",
            "50"
        ],
        "correta": 3,
        "feedbackAcerto": "\n🎉 Excelente! A união é 38 + 32 − 20 = 50; assim, 60 − 50 = 10 não resolveram nenhuma.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 10\n\nA união é 38 + 32 − 20 = 50; assim, 60 − 50 = 10 não resolveram nenhuma.\n",
        "dicaBanca": "\n“Nenhuma” pede o complemento da união em relação ao total.\n"
    },
    {
        "subtopico": "Situações-problema com conjuntos",
        "pergunta": "Uma comissão deve escolher exatamente 3 representantes entre 5 pessoas distintas. Quantos subconjuntos de três elementos podem ser formados?",
        "alternativas": [
            "5",
            "8",
            "15",
            "25",
            "10"
        ],
        "correta": 4,
        "feedbackAcerto": "\n🎉 Excelente! O número de subconjuntos de 3 elementos em um conjunto de 5 é C(5,3) = 10.\n",
        "feedbackErro": "\n❌ Atenção! A resposta correta é: 10\n\nO número de subconjuntos de 3 elementos em um conjunto de 5 é C(5,3) = 10.\n",
        "dicaBanca": "\nQuando a ordem dos escolhidos não importa, use combinação, não arranjo.\n"
    }
];
