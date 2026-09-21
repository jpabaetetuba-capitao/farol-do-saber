/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 02: Organização Estrutural dos Textos
   25 questões autorais com feedback, análise, dica e pegadinha.
   Conteúdo alinhado ao Edital nº 001/2026 — SEPLAD/SEDUC.
========================================================== */

(function(){
    "use strict";

    const banco =
[
    {
        "id": "SEDUC-LP-ORG-001",
        "numero": 1,
        "subtopico": "Macroestrutura",
        "dificuldade": "media",
        "texto": "Um artigo inicia apresentando o problema da evasão escolar, desenvolve possíveis causas e encerra propondo ações de acompanhamento dos estudantes.",
        "pergunta": "A organização global desse artigo pode ser descrita como",
        "alternativas": [
            "problema → análise de causas → proposição de encaminhamentos.",
            "exemplo → definição → narrativa cronológica.",
            "conclusão → introdução → desenvolvimento.",
            "descrição estática → enumeração aleatória → citação.",
            "pergunta retórica → ruptura temática → repetição."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Correta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Procure a sequência funcional das partes, não apenas palavras repetidas.",
        "pegadinha": "A FGV pode trocar a ordem das partes para produzir um distrator plausível.",
        "memorizar2026": "Macroestrutura = visão global da organização do texto.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026 — Organização estrutural dos textos."
    },
    {
        "id": "SEDUC-LP-ORG-002",
        "numero": 2,
        "subtopico": "Introdução",
        "dificuldade": "media",
        "texto": "Nos últimos anos, o uso de plataformas digitais na escola aumentou. Esse crescimento, porém, trouxe um desafio: como integrar tecnologia sem perder o foco pedagógico?",
        "pergunta": "No trecho, a segunda frase cumpre principalmente a função de",
        "alternativas": [
            "encerrar o tema com uma conclusão definitiva.",
            "formular o problema que orientará o desenvolvimento do texto.",
            "apresentar um exemplo que comprova a tese.",
            "enumerar consequências já demonstradas.",
            "resumir argumentos expostos anteriormente."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Na introdução, perguntas costumam delimitar o problema que será desenvolvido.",
        "pegadinha": "Não confunda pergunta inicial com conclusão.",
        "memorizar2026": "Introdução pode apresentar tema, recorte, problema ou tese.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-003",
        "numero": 3,
        "subtopico": "Desenvolvimento",
        "dificuldade": "media",
        "texto": "Depois de afirmar que a leitura diária favorece a aprendizagem, o autor apresenta resultados de pesquisas, exemplos de escolas e dados de desempenho.",
        "pergunta": "Esses elementos cumprem a função de",
        "alternativas": [
            "anunciar o assunto sem desenvolvê-lo.",
            "interromper a progressão do texto.",
            "sustentar e desenvolver a afirmação inicial.",
            "substituir a conclusão do texto.",
            "mudar o tema central."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Pergunte: o trecho amplia, comprova, exemplifica ou conclui?",
        "pegadinha": "Exemplo e dado costumam ter papel de sustentação, não de tese principal.",
        "memorizar2026": "Desenvolvimento = expansão, explicação, exemplificação ou argumentação.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-004",
        "numero": 4,
        "subtopico": "Conclusão",
        "dificuldade": "media",
        "texto": "Após discutir diferentes formas de participação das famílias, o texto termina: 'Por isso, ampliar canais de diálogo é condição importante para fortalecer a parceria entre escola e comunidade.'",
        "pergunta": "O segmento final funciona como",
        "alternativas": [
            "abertura temática.",
            "descrição neutra de um cenário.",
            "exemplo secundário.",
            "fecho que retoma a discussão e apresenta uma síntese avaliativa.",
            "mudança para assunto sem relação com o texto."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Conclusões costumam sintetizar ou extrair consequência do que veio antes.",
        "pegadinha": "Um conector conclusivo pode sinalizar o fecho, mas verifique o sentido.",
        "memorizar2026": "Conclusão = fechamento coerente da linha desenvolvida.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-005",
        "numero": 5,
        "subtopico": "Hierarquia das informações",
        "dificuldade": "alta",
        "texto": "Uma reportagem sobre transporte escolar informa que 40 veículos foram vistoriados, descreve duas falhas encontradas e destaca que a principal medida adotada foi a substituição imediata dos pneus inadequados.",
        "pergunta": "A informação hierarquicamente mais relevante no trecho é",
        "alternativas": [
            "a quantidade exata de veículos vistoriados.",
            "a existência de duas falhas.",
            "o fato de haver transporte escolar.",
            "a presença de pneus nos veículos.",
            "a medida principal adotada após a vistoria."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Nem toda informação tem o mesmo peso; observe marcas como 'principal'.",
        "pegadinha": "Detalhes numéricos podem parecer mais importantes do que a ideia destacada.",
        "memorizar2026": "Hierarquia textual = núcleo + informações de apoio.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-006",
        "numero": 6,
        "subtopico": "Parágrafo e unidade de sentido",
        "dificuldade": "media",
        "texto": "Um parágrafo apresenta a definição de educação inclusiva; o seguinte traz exemplos de barreiras; o terceiro discute estratégias para removê-las.",
        "pergunta": "A divisão em parágrafos contribui para",
        "alternativas": [
            "separar unidades de sentido articuladas no desenvolvimento do tema.",
            "eliminar qualquer relação entre as ideias.",
            "indicar que cada parágrafo trata de um tema sem conexão.",
            "substituir a necessidade de progressão textual.",
            "mostrar que o texto não possui estrutura global."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Correta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Parágrafo é unidade de desenvolvimento, não bloco isolado.",
        "pegadinha": "Mudança de parágrafo não implica ruptura temática.",
        "memorizar2026": "Cada parágrafo tende a desenvolver uma unidade de sentido articulada ao todo.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-007",
        "numero": 7,
        "subtopico": "Progressão textual",
        "dificuldade": "alta",
        "texto": "Primeiro, o texto define acessibilidade. Em seguida, diferencia barreiras físicas e comunicacionais. Depois, apresenta exemplos de soluções.",
        "pergunta": "Essa sequência mostra",
        "alternativas": [
            "retorno constante ao mesmo ponto sem avanço.",
            "progressão por ampliação e especificação do tema.",
            "ausência de relação entre as partes.",
            "inversão obrigatória de introdução e conclusão.",
            "repetição literal como único mecanismo de continuidade."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Progressão ocorre quando a informação nova se apoia no que já foi apresentado.",
        "pegadinha": "Continuidade não exige repetição literal.",
        "memorizar2026": "Progressão = avanço organizado do conteúdo.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-008",
        "numero": 8,
        "subtopico": "Título e conteúdo",
        "dificuldade": "media",
        "texto": "Título: 'Bibliotecas que aproximam leitores'. O texto relata projetos de empréstimo, rodas de leitura e ações itinerantes em bairros distantes.",
        "pergunta": "A relação entre título e corpo do texto é de",
        "alternativas": [
            "contradição.",
            "ausência total de vínculo.",
            "antecipação temática coerente.",
            "mera ornamentação sem função.",
            "substituição da ideia central."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "O título deve dialogar com o núcleo temático.",
        "pegadinha": "Título amplo demais ou alheio ao texto é um distrator comum.",
        "memorizar2026": "Título orienta a leitura e antecipa o assunto.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-009",
        "numero": 9,
        "subtopico": "Função de exemplo",
        "dificuldade": "media",
        "texto": "O autor afirma que pequenas adaptações podem ampliar a participação dos estudantes. Em seguida, relata o caso de uma sala que reorganizou mobiliário e melhorou a circulação.",
        "pergunta": "O segundo período funciona como",
        "alternativas": [
            "tese oposta.",
            "conclusão geral.",
            "mudança temática.",
            "exemplificação da afirmação anterior.",
            "definição de conceito."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Exemplo concretiza uma ideia geral.",
        "pegadinha": "Exemplo não é necessariamente a ideia principal.",
        "memorizar2026": "Exemplo = apoio ilustrativo a uma afirmação.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-010",
        "numero": 10,
        "subtopico": "Ordem das partes",
        "dificuldade": "alta",
        "texto": "Considere três trechos: I. 'Diante disso, é preciso revisar o planejamento.' II. 'O levantamento mostrou queda de frequência.' III. 'A equipe investigou as causas durante dois meses.'",
        "pergunta": "A ordem mais coerente para formar uma sequência textual é",
        "alternativas": [
            "I – II – III.",
            "I – III – II.",
            "II – I – III.",
            "III – I – II.",
            "II – III – I."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Reconstrua a sequência lógica: fato → investigação → conclusão/encaminhamento.",
        "pegadinha": "Conectores como 'diante disso' dependem de informação anterior.",
        "memorizar2026": "Ordem estrutural deve respeitar dependências lógicas.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-011",
        "numero": 11,
        "subtopico": "Tópico frasal",
        "dificuldade": "media",
        "texto": "Parágrafo: 'A formação continuada é essencial para o trabalho docente. Ela permite atualizar conhecimentos, discutir práticas e refletir sobre novos desafios.'",
        "pergunta": "A primeira frase funciona como",
        "alternativas": [
            "tópico frasal que apresenta a ideia a ser desenvolvida.",
            "exemplo específico.",
            "conclusão de um argumento anterior.",
            "informação lateral sem relação com o restante.",
            "citação de autoridade."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Correta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Identifique a frase que concentra a ideia-base do parágrafo.",
        "pegadinha": "A primeira frase nem sempre é tópico frasal, mas aqui orienta todo o trecho.",
        "memorizar2026": "Tópico frasal = núcleo orientador do parágrafo.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-012",
        "numero": 12,
        "subtopico": "Quebra de parágrafo",
        "dificuldade": "alta",
        "texto": "Um texto passa de 'causas da evasão' para 'estratégias de busca ativa'.",
        "pergunta": "Uma nova quebra de parágrafo é especialmente adequada quando",
        "alternativas": [
            "não há mudança alguma de foco.",
            "o texto passa a desenvolver uma nova unidade de sentido relacionada ao tema.",
            "se deseja impedir a leitura sequencial.",
            "o autor quer repetir literalmente a frase anterior.",
            "não existe conexão entre os assuntos."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Quebra de parágrafo costuma acompanhar mudança de foco dentro do mesmo tema.",
        "pegadinha": "Parágrafos não precisam ser independentes.",
        "memorizar2026": "Novo parágrafo = novo movimento de desenvolvimento, mantendo articulação.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-013",
        "numero": 13,
        "subtopico": "Coerência estrutural",
        "dificuldade": "alta",
        "texto": "Introdução: 'O texto discutirá os benefícios da leitura literária.' Desenvolvimento: benefícios cognitivos, emocionais e sociais. Conclusão: 'Por essas razões, ampliar o acesso a obras literárias é uma medida relevante.'",
        "pergunta": "A estrutura é coerente porque",
        "alternativas": [
            "a conclusão abandona o assunto inicial.",
            "os parágrafos tratam de temas incompatíveis.",
            "as partes mantêm continuidade temática e funcional.",
            "a introdução já contém todos os detalhes do desenvolvimento.",
            "o texto dispensa qualquer relação entre suas partes."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Observe se introdução, desenvolvimento e conclusão 'conversam'.",
        "pegadinha": "Uma conclusão pode acrescentar avaliação sem abandonar o tema.",
        "memorizar2026": "Estrutura coerente = partes funcionalmente articuladas.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-014",
        "numero": 14,
        "subtopico": "Função de segmento",
        "dificuldade": "media",
        "texto": "Trecho: 'Há, porém, um obstáculo adicional: muitas escolas ainda não possuem conexão estável.'",
        "pergunta": "No desenvolvimento de um texto sobre ensino digital, esse segmento introduz",
        "alternativas": [
            "um resumo final.",
            "uma definição do tema.",
            "um título alternativo.",
            "um novo aspecto problemático relacionado ao tema.",
            "uma informação sem vínculo com o assunto."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Palavras como 'obstáculo adicional' sinalizam função argumentativa.",
        "pegadinha": "Não confunda novo aspecto com mudança de tema.",
        "memorizar2026": "O desenvolvimento pode introduzir subproblemas relacionados ao núcleo.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-015",
        "numero": 15,
        "subtopico": "Resumo estrutural",
        "dificuldade": "alta",
        "texto": "Texto: apresentação de um problema; comparação de duas soluções; avaliação das vantagens de cada uma; recomendação final.",
        "pergunta": "A estrutura pode ser resumida como",
        "alternativas": [
            "narração cronológica de um fato.",
            "descrição física de um objeto.",
            "lista sem hierarquia.",
            "definição seguida de exemplo único.",
            "problema → comparação → avaliação → recomendação."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Resuma a função de cada parte em uma palavra ou expressão.",
        "pegadinha": "A FGV costuma cobrar esquema estrutural, não apenas conteúdo.",
        "memorizar2026": "Reconheça o desenho funcional do texto.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-016",
        "numero": 16,
        "subtopico": "Subtítulo",
        "dificuldade": "media",
        "texto": "Título: 'Educação e território'. Subtítulo: 'Como escolas ribeirinhas adaptam calendário e transporte às condições locais'.",
        "pergunta": "O subtítulo",
        "alternativas": [
            "delimita e especifica o recorte indicado pelo título.",
            "contradiz o título.",
            "elimina a necessidade do texto.",
            "introduz assunto alheio ao título.",
            "funciona como conclusão."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Correta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Subtítulo costuma restringir ou explicar o alcance do título.",
        "pegadinha": "Não trate título e subtítulo como partes independentes.",
        "memorizar2026": "Subtítulo = especificação do recorte.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-017",
        "numero": 17,
        "subtopico": "Introdução com tese",
        "dificuldade": "alta",
        "texto": "Trecho inicial: 'A ampliação do tempo escolar só produz resultados quando acompanhada de um projeto pedagógico consistente.'",
        "pergunta": "Esse período pode funcionar como",
        "alternativas": [
            "detalhe secundário sem relação com o texto.",
            "tese a ser desenvolvida e sustentada posteriormente.",
            "exemplo final.",
            "lista de dados.",
            "marca de encerramento."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Uma afirmação avaliativa forte no início pode atuar como tese.",
        "pegadinha": "Tema e tese não são a mesma coisa.",
        "memorizar2026": "Tese = posição central que o texto desenvolve.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-018",
        "numero": 18,
        "subtopico": "Informação principal e secundária",
        "dificuldade": "media",
        "texto": "Parágrafo: 'A escola ampliou o horário da biblioteca. A mudança começou em agosto, envolve três servidores e será avaliada ao fim do semestre.'",
        "pergunta": "A informação principal é",
        "alternativas": [
            "a avaliação ocorrer ao fim do semestre.",
            "a mudança ter começado em agosto.",
            "a ampliação do horário da biblioteca.",
            "o número de servidores.",
            "o mês possuir um semestre correspondente."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Pergunte qual afirmação poderia resumir o parágrafo.",
        "pegadinha": "Detalhes de data e número frequentemente são secundários.",
        "memorizar2026": "Ideia principal organiza os detalhes.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-019",
        "numero": 19,
        "subtopico": "Articulação entre parágrafos",
        "dificuldade": "alta",
        "texto": "Parágrafo 1 apresenta vantagens de uma política. Parágrafo 2 começa com 'Apesar desses ganhos, persistem desafios de implementação.'",
        "pergunta": "O segundo parágrafo",
        "alternativas": [
            "repete integralmente o primeiro.",
            "abandona o tema.",
            "encerra o texto sem avaliação.",
            "introduz contraponto dentro da mesma linha temática.",
            "apresenta informação incompatível com qualquer continuidade."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Observe a expressão que conecta os movimentos do texto.",
        "pegadinha": "Contraponto não equivale a ruptura temática.",
        "memorizar2026": "Articulação pode ocorrer por oposição entre aspectos do mesmo tema.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-020",
        "numero": 20,
        "subtopico": "Sequência expositiva",
        "dificuldade": "media",
        "texto": "Definição de 'busca ativa' → explicação de como funciona → exemplos de aplicação.",
        "pergunta": "Essa ordem é adequada porque",
        "alternativas": [
            "os exemplos substituem a definição.",
            "a explicação deveria necessariamente vir antes do conceito.",
            "não há qualquer relação entre as partes.",
            "a definição só pode aparecer no fim.",
            "vai do conceito geral para seu detalhamento e aplicação."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "A exposição frequentemente avança do geral para o específico.",
        "pegadinha": "Não existe uma única ordem possível, mas a sequência deve ser funcional.",
        "memorizar2026": "Geral → explicação → exemplo é estrutura expositiva comum.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-021",
        "numero": 21,
        "subtopico": "Ruptura temática",
        "dificuldade": "alta",
        "texto": "Um texto discute alimentação escolar e, sem qualquer transição, passa a detalhar a história de uma ponte municipal que não se relaciona ao assunto.",
        "pergunta": "O problema estrutural é",
        "alternativas": [
            "ruptura temática que prejudica a unidade do texto.",
            "excesso de conclusão.",
            "uso obrigatório de subtítulo.",
            "presença de tópico frasal.",
            "progressão adequada."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Correta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Unidade textual exige relação entre as partes.",
        "pegadinha": "Informação correta pode ser estruturalmente inadequada se for irrelevante.",
        "memorizar2026": "Ruptura temática = trecho sem função no eixo do texto.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-022",
        "numero": 22,
        "subtopico": "Fecho",
        "dificuldade": "media",
        "texto": "Último período: 'Em síntese, os dados mostram avanço, mas também indicam a necessidade de continuidade das ações.'",
        "pergunta": "A expressão 'Em síntese' sinaliza",
        "alternativas": [
            "introdução de tema inteiramente novo.",
            "movimento de fechamento e retomada do essencial.",
            "exemplo isolado.",
            "descrição detalhada.",
            "mudança brusca de assunto."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Correta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Marcadores podem indicar a função estrutural do trecho.",
        "pegadinha": "Não confunda síntese com simples repetição literal.",
        "memorizar2026": "Síntese final retoma o essencial para fechar o texto.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-023",
        "numero": 23,
        "subtopico": "Estrutura e gênero",
        "dificuldade": "alta",
        "texto": "Uma notícia costuma apresentar logo no início as informações essenciais do fato e, depois, ampliar detalhes e contexto.",
        "pergunta": "Essa característica mostra que",
        "alternativas": [
            "todos os gêneros possuem exatamente a mesma estrutura.",
            "o gênero não interfere na organização.",
            "a organização textual pode variar conforme a finalidade e o gênero.",
            "uma notícia deve sempre terminar com tese argumentativa.",
            "o título substitui o desenvolvimento."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Correta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Forma de organização depende do propósito comunicativo.",
        "pegadinha": "Não existe estrutura universal idêntica para todos os gêneros.",
        "memorizar2026": "Gênero e finalidade influenciam a estrutura.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-024",
        "numero": 24,
        "subtopico": "Reordenação",
        "dificuldade": "alta",
        "texto": "Frases: A) 'Por isso, a escola reorganizou o atendimento.' B) 'A procura pelo serviço dobrou em dois meses.' C) 'A equipe identificou filas e demora no agendamento.'",
        "pergunta": "A sequência mais adequada é",
        "alternativas": [
            "A – B – C.",
            "A – C – B.",
            "C – A – B.",
            "B – C – A.",
            "C – B – A."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Correta. A alternativa confunde detalhe com função estrutural.",
            "Incorreta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "'Por isso' exige uma causa anterior; procure encadear fato, diagnóstico e resposta.",
        "pegadinha": "Conector conclusivo não pode abrir a sequência sem referente lógico.",
        "memorizar2026": "Reordenação exige reconstruir dependências entre partes.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-ORG-025",
        "numero": 25,
        "subtopico": "Integração estrutural",
        "dificuldade": "alta",
        "texto": "Um texto começa com uma pergunta sobre abandono escolar, apresenta dados, discute fatores econômicos e familiares e termina defendendo acompanhamento individualizado.",
        "pergunta": "A melhor descrição de sua organização é",
        "alternativas": [
            "descrição de objeto sem progressão.",
            "lista de dados desconectados.",
            "narrativa ficcional.",
            "texto sem hierarquia de informações.",
            "problematização inicial, desenvolvimento analítico e conclusão propositiva."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou corretamente a relação estrutural ou textual exigida pelo enunciado.",
        "feedbackErro": "Releia o trecho e observe a função de cada parte no conjunto do texto. A FGV costuma criar alternativas plausíveis que trocam a função, o referente ou a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. A alternativa é compatível com a organização e o sentido do texto.",
            "Incorreta. A alternativa altera ou extrapola a função do trecho.",
            "Incorreta. A alternativa não corresponde à relação estabelecida no texto.",
            "Incorreta. A alternativa confunde detalhe com função estrutural.",
            "Correta. A alternativa acrescenta informação que o texto não sustenta."
        ],
        "dicaBanca": "Identifique o papel global de cada bloco.",
        "pegadinha": "A FGV pode usar rótulos abstratos para testar a leitura da estrutura.",
        "memorizar2026": "Problematização → análise → proposição é um desenho estrutural frequente.",
        "fonte": "Texto autoral; edital SEDUC-PA 2026."
    }
];

    window.seducLinguaPortuguesaOrganizacaoEstrutural2026 = banco;
})();
