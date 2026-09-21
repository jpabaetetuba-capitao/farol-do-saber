/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 01: Interpretação e Compreensão de Texto
   25 questões autorais com feedback específico por alternativa.
   Conteúdo alinhado ao Edital nº 001/2026 — SEPLAD/SEDUC.
   Foco: compreensão literal, inferência, ideia central, finalidade,
   pressupostos, ironia, sentido contextual, paráfrase e leitura crítica.
========================================================== */

(function(){
    "use strict";

    const banco =
[
    {
        "id": "SEDUC-LP-INTERP-001",
        "numero": 1,
        "subtopico": "Compreensão literal — informação expressa",
        "dificuldade": "facil",
        "texto": "A escola decidiu ampliar o horário da biblioteca durante o período de provas. Segundo a direção, a medida não substitui o estudo em casa, mas oferece aos estudantes um espaço silencioso, acesso a livros e apoio para pesquisa.",
        "pergunta": "De acordo com o texto, a ampliação do horário da biblioteca tem como finalidade principal",
        "alternativas": [
            "oferecer condições adicionais de estudo aos estudantes.",
            "substituir o estudo realizado fora da escola.",
            "garantir que todos os estudantes estudem apenas na biblioteca.",
            "reduzir a necessidade de consulta a livros e materiais de pesquisa.",
            "transferir para a direção a responsabilidade pelo desempenho dos estudantes."
        ],
        "correta": 0,
        "feedbackAcerto": "Você localizou a informação explicitamente apresentada: a biblioteca passa a oferecer mais condições de estudo, sem substituir o estudo realizado em outros espaços.",
        "feedbackErro": "A FGV frequentemente apresenta uma informação correta no texto e cria distratores com exageros como 'substituir', 'apenas' ou 'todos'. Volte ao trecho que explica a finalidade da medida.",
        "analiseAlternativas": [
            "Correta. Resume exatamente a função atribuída à ampliação do horário.",
            "Incorreta. O texto afirma expressamente que a medida não substitui o estudo em casa.",
            "Incorreta. O texto oferece uma possibilidade, não uma obrigação exclusiva.",
            "Incorreta. O acesso a livros e pesquisa é ampliado, não reduzido.",
            "Incorreta. O texto não transfere responsabilidade pelo desempenho à direção."
        ],
        "dicaBanca": "Em compreensão literal, procure a alternativa que reescreve o texto sem acrescentar absolutizações.",
        "pegadinha": "Palavras como 'somente', 'todos', 'sempre' e 'substituir' costumam transformar uma ideia verdadeira em falsa.",
        "memorizar2026": "Compreensão = localizar o que o texto efetivamente diz.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-002",
        "numero": 2,
        "subtopico": "Inferência — conclusão não expressa",
        "dificuldade": "media",
        "texto": "Quando o ônibus escolar chegou, Ana já aguardava no portão havia vinte minutos. Ela consultou o relógio novamente, guardou o caderno na mochila e enviou uma mensagem à coordenação.",
        "pergunta": "A partir das informações do texto, é possível inferir que",
        "alternativas": [
            "Ana havia esquecido o horário de saída do ônibus.",
            "o ônibus provavelmente chegou depois do horário esperado por Ana.",
            "A coordenação havia solicitado que Ana esperasse exatamente vinte minutos.",
            "Ana decidiu desistir de ir à escola antes da chegada do ônibus.",
            "o caderno de Ana era o motivo do atraso do transporte."
        ],
        "correta": 1,
        "feedbackAcerto": "A espera prolongada e a consulta ao relógio permitem inferir atraso em relação à expectativa de Ana, embora o texto não diga isso literalmente.",
        "feedbackErro": "Inferência não é invenção. Ela precisa ser sustentada por pistas do texto. Só uma alternativa decorre naturalmente da espera de vinte minutos e da consulta repetida ao relógio.",
        "analiseAlternativas": [
            "Incorreta. Não há pista de esquecimento do horário.",
            "Correta. É a conclusão compatível com os sinais narrados.",
            "Incorreta. O texto não informa orientação prévia da coordenação.",
            "Incorreta. Ana permaneceu aguardando até a chegada.",
            "Incorreta. Não existe relação causal entre o caderno e o atraso."
        ],
        "dicaBanca": "A FGV gosta de perguntar o que 'se pode inferir'. A resposta deve ser provável e apoiada por marcas textuais, não apenas possível no mundo real.",
        "pegadinha": "Algo ser imaginável não significa ser inferível.",
        "memorizar2026": "Inferência = informação implícita sustentada por pistas do texto.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-003",
        "numero": 3,
        "subtopico": "Tema e ideia central",
        "dificuldade": "media",
        "texto": "Tecnologia em sala de aula não produz aprendizagem por si só. Um recurso digital pode ampliar possibilidades de pesquisa, colaboração e autoria, mas seus resultados dependem do objetivo pedagógico, da mediação docente e das condições concretas de uso.",
        "pergunta": "A ideia central do texto é a de que",
        "alternativas": [
            "a tecnologia deve ser retirada das aulas quando houver dificuldade de aprendizagem.",
            "a mediação docente é dispensável quando a escola possui bons recursos digitais.",
            "os efeitos educacionais da tecnologia dependem de sua integração a objetivos e práticas pedagógicas.",
            "pesquisa, colaboração e autoria somente podem ocorrer por meios digitais.",
            "as condições concretas de uso são irrelevantes quando o recurso tecnológico é moderno."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou a tese que organiza o texto: a tecnologia não é automaticamente eficaz; seu valor educacional depende do modo como é integrada à prática pedagógica.",
        "feedbackErro": "A ideia central deve abranger o texto como um todo. Evite escolher um detalhe isolado ou uma conclusão extrema que o autor não defende.",
        "analiseAlternativas": [
            "Incorreta. O texto não propõe retirar tecnologia.",
            "Incorreta. O texto afirma o contrário: a mediação docente é um dos fatores relevantes.",
            "Correta. Sintetiza a tese sem distorcê-la.",
            "Incorreta. O texto diz que o digital pode ampliar essas possibilidades, não que seja o único meio.",
            "Incorreta. As condições concretas são explicitamente apresentadas como relevantes."
        ],
        "dicaBanca": "Em questões de ideia central, escolha a alternativa que explica por que todos os demais enunciados estão no texto.",
        "pegadinha": "Um detalhe verdadeiro não necessariamente representa a ideia central.",
        "memorizar2026": "Tema é o assunto; ideia central é o que o texto afirma sobre esse assunto.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-004",
        "numero": 4,
        "subtopico": "Finalidade comunicativa",
        "dificuldade": "media",
        "texto": "Antes de compartilhar uma notícia, verifique a fonte, confira a data de publicação e procure saber se outros veículos confiáveis registraram o mesmo fato. Alguns segundos de checagem podem evitar a circulação de informação falsa.",
        "pergunta": "A finalidade predominante do texto é",
        "alternativas": [
            "narrar um episódio de divulgação de notícia falsa.",
            "descrever tecnicamente o funcionamento de veículos de imprensa.",
            "defender que apenas jornalistas profissionais devem compartilhar notícias.",
            "orientar o leitor a adotar procedimentos de verificação antes de compartilhar informações.",
            "demonstrar que toda informação publicada na internet é falsa."
        ],
        "correta": 3,
        "feedbackAcerto": "O texto apresenta ações concretas dirigidas ao leitor — verificar, conferir, procurar — com finalidade orientadora.",
        "feedbackErro": "Observe os verbos no imperativo e o efeito pretendido sobre o comportamento do leitor. A finalidade não é apenas informar, mas orientar uma ação.",
        "analiseAlternativas": [
            "Incorreta. Não há sequência narrativa de um acontecimento específico.",
            "Incorreta. O texto não descreve funcionamento técnico da imprensa.",
            "Incorreta. Não existe essa exclusividade no texto.",
            "Correta. A orientação de conduta é o objetivo dominante.",
            "Incorreta. O texto alerta para informação falsa, sem generalizar toda a internet."
        ],
        "dicaBanca": "A finalidade do texto pode ser percebida pelo efeito pretendido: informar, convencer, orientar, criticar, divertir etc.",
        "pegadinha": "Não confunda assunto do texto com finalidade do texto.",
        "memorizar2026": "Finalidade = o que o autor pretende fazer com aquele texto em relação ao leitor.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-005",
        "numero": 5,
        "subtopico": "Informação implícita",
        "dificuldade": "alta",
        "texto": "Depois da terceira reunião sem a presença das famílias, a equipe decidiu mudar o horário dos encontros e oferecer participação remota. No encontro seguinte, a sala virtual atingiu o limite de participantes.",
        "pergunta": "O texto permite concluir que",
        "alternativas": [
            "a equipe encerrou definitivamente as reuniões presenciais.",
            "as famílias não tinham interesse em acompanhar a vida escolar dos estudantes.",
            "o limite da sala virtual era menor que o número de professores da escola.",
            "a mudança de horário foi desnecessária, pois a participação permaneceu igual.",
            "as alterações feitas pela equipe favoreceram maior participação no encontro seguinte."
        ],
        "correta": 4,
        "feedbackAcerto": "O contraste entre as reuniões sem presença e a sala virtual lotada sustenta a conclusão de que as mudanças favoreceram a participação.",
        "feedbackErro": "A resposta correta precisa articular dois momentos do texto. Não é necessário saber qual mudança foi mais importante; basta perceber que, após as alterações, a participação aumentou.",
        "analiseAlternativas": [
            "Incorreta. O texto não informa encerramento das reuniões presenciais.",
            "Incorreta. Ausência pode ter várias causas; o texto não atribui desinteresse.",
            "Incorreta. Não há informação sobre professores nem sobre a capacidade específica da sala.",
            "Incorreta. A participação mudou de ausência para lotação.",
            "Correta. É a inferência sustentada pela comparação entre antes e depois."
        ],
        "dicaBanca": "Muitas inferências da FGV surgem da relação entre duas informações distantes do texto.",
        "pegadinha": "Evite explicar a causa além do que o texto permite.",
        "memorizar2026": "Implícito válido = conclusão necessária ou altamente sustentada pelo conjunto de pistas.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-006",
        "numero": 6,
        "subtopico": "Pressuposto",
        "dificuldade": "alta",
        "texto": "A diretora voltou a pedir que os relatórios fossem entregues até sexta-feira.",
        "pergunta": "A frase pressupõe que",
        "alternativas": [
            "a diretora já havia feito esse pedido anteriormente.",
            "os relatórios foram obrigatoriamente entregues com atraso.",
            "a sexta-feira é o último dia útil de todas as escolas.",
            "os relatórios pertencem exclusivamente à diretora.",
            "a entrega ocorrerá necessariamente antes de sexta-feira."
        ],
        "correta": 0,
        "feedbackAcerto": "O verbo 'voltar a' aciona o pressuposto de repetição: o pedido já havia sido feito em momento anterior.",
        "feedbackErro": "Pressuposto é uma informação tomada como previamente válida pela construção linguística. Aqui, a expressão decisiva é 'voltou a pedir'.",
        "analiseAlternativas": [
            "Correta. 'Voltou a' pressupõe ocorrência anterior do pedido.",
            "Incorreta. O texto não afirma atraso.",
            "Incorreta. Não há generalização sobre calendários escolares.",
            "Incorreta. O texto não indica propriedade dos relatórios.",
            "Incorreta. Um pedido não garante que a ação ocorrerá."
        ],
        "dicaBanca": "FGV cobra pressupostos por meio de verbos e advérbios como 'voltar', 'continuar', 'ainda', 'deixar de', 'novamente'.",
        "pegadinha": "Pressuposto não é previsão do que acontecerá; é informação já embutida na formulação.",
        "memorizar2026": "'Voltou a X' pressupõe que X já ocorreu antes.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-007",
        "numero": 7,
        "subtopico": "Ironia e efeito de sentido",
        "dificuldade": "alta",
        "texto": "A escola anunciou que o novo sistema tornaria os processos 'mais simples'. Na primeira manhã de uso, foram necessárias quatro senhas, três confirmações por e-mail e duas ligações ao suporte para registrar uma única solicitação. Simples, sem dúvida.",
        "pergunta": "No último período, a expressão 'Simples, sem dúvida' produz efeito de",
        "alternativas": [
            "elogio literal à eficiência do sistema.",
            "ironia, pois o enunciado afirma o contrário do que os fatos anteriores sugerem.",
            "neutralidade, porque apenas repete o anúncio da escola.",
            "dúvida real sobre a quantidade de etapas do processo.",
            "aprovação parcial da necessidade de senhas e confirmações."
        ],
        "correta": 1,
        "feedbackAcerto": "O contexto contradiz o valor literal de 'simples'. A frase final retoma esse termo de modo irônico para criticar a complexidade do sistema.",
        "feedbackErro": "A interpretação de uma frase depende do contexto. Aqui, a enumeração de etapas torna incompatível a leitura literal de 'simples'.",
        "analiseAlternativas": [
            "Incorreta. Os fatos apresentados não sustentam elogio.",
            "Correta. A frase é ironicamente contrária ao que a situação demonstra.",
            "Incorreta. Há avaliação crítica evidente.",
            "Incorreta. A dúvida não é sobre a contagem das etapas.",
            "Incorreta. O texto não expressa aprovação."
        ],
        "dicaBanca": "Na ironia, a leitura literal entra em choque com o contexto.",
        "pegadinha": "A palavra isolada pode parecer positiva; o conjunto do texto redefine seu efeito.",
        "memorizar2026": "Ironia = dizer algo cujo sentido contextual aponta para avaliação oposta ou crítica.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-008",
        "numero": 8,
        "subtopico": "Sentido contextual de expressão",
        "dificuldade": "media",
        "texto": "O projeto começou pequeno, mas ganhou fôlego quando outras escolas passaram a participar.",
        "pergunta": "No contexto, a expressão 'ganhou fôlego' significa que o projeto",
        "alternativas": [
            "passou a exigir atividades físicas dos participantes.",
            "interrompeu temporariamente suas atividades.",
            "recebeu novo impulso e se fortaleceu.",
            "reduziu seu alcance para preservar recursos.",
            "mudou exclusivamente de nome."
        ],
        "correta": 2,
        "feedbackAcerto": "A expressão é figurada e, pelo contexto de ampliação da participação, significa ganhar força, impulso ou capacidade de continuidade.",
        "feedbackErro": "Substitua mentalmente a expressão por uma formulação compatível com o restante da frase. A adesão de outras escolas indica fortalecimento, não interrupção.",
        "analiseAlternativas": [
            "Incorreta. 'Fôlego' não está empregado em sentido físico.",
            "Incorreta. O contexto indica expansão.",
            "Correta. É a paráfrase adequada ao valor contextual.",
            "Incorreta. Participação de outras escolas sugere aumento de alcance.",
            "Incorreta. Não há referência a mudança de nome."
        ],
        "dicaBanca": "FGV costuma cobrar vocábulo ou expressão pelo sentido assumido naquele contexto, e não pela definição mais comum isoladamente.",
        "pegadinha": "Sentido figurado deve ser resolvido pelo contexto, não pelo dicionário mental da palavra isolada.",
        "memorizar2026": "Sentido contextual = significado ativado pela frase e pelo texto.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-009",
        "numero": 9,
        "subtopico": "Título adequado",
        "dificuldade": "media",
        "texto": "Em muitas cidades amazônicas, o rio não é apenas elemento da paisagem. Ele organiza deslocamentos, sustenta atividades econômicas, influencia hábitos alimentares e participa da memória coletiva das comunidades.",
        "pergunta": "O título mais adequado ao texto é",
        "alternativas": [
            "'O desaparecimento dos rios amazônicos'.",
            "'A alimentação como única função dos rios'.",
            "'Transporte urbano e rodovias na Amazônia'.",
            "'O rio como eixo da vida social amazônica'.",
            "'A substituição da economia ribeirinha pela indústria'."
        ],
        "correta": 3,
        "feedbackAcerto": "O título escolhido abrange as várias funções apresentadas: mobilidade, economia, alimentação e memória coletiva.",
        "feedbackErro": "Um bom título deve representar o núcleo do texto, e não apenas uma informação secundária nem uma ideia inexistente.",
        "analiseAlternativas": [
            "Incorreta. O texto não trata de desaparecimento.",
            "Incorreta. Alimentação é apenas um dos aspectos mencionados.",
            "Incorreta. Rodovias não aparecem no texto.",
            "Correta. Resume a multiplicidade de funções sociais atribuídas ao rio.",
            "Incorreta. Não há menção a substituição econômica."
        ],
        "dicaBanca": "Na escolha de título, procure a alternativa com amplitude suficiente para cobrir todo o conteúdo sem ser vaga demais.",
        "pegadinha": "O título não deve se prender a um único exemplo.",
        "memorizar2026": "Título adequado = síntese temática fiel e abrangente.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-010",
        "numero": 10,
        "subtopico": "Ponto de vista do autor",
        "dificuldade": "alta",
        "texto": "Avaliar não deveria significar apenas atribuir uma nota ao final de um percurso. Quando a avaliação identifica dificuldades durante a aprendizagem e orienta novas intervenções, ela deixa de ser mero registro e passa a participar do próprio processo de ensinar.",
        "pergunta": "A posição defendida pelo autor é a de que",
        "alternativas": [
            "toda forma de nota deve ser eliminada das escolas.",
            "a avaliação só é válida quando ocorre antes do ensino.",
            "a identificação de dificuldades é responsabilidade exclusiva do estudante.",
            "o registro de resultados não possui qualquer utilidade pedagógica.",
            "a avaliação pode cumprir função formativa quando orienta intervenções durante a aprendizagem."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou a tese avaliativa do texto: a avaliação ganha função formativa quando produz informação para orientar intervenções pedagógicas.",
        "feedbackErro": "O autor não rejeita notas de forma absoluta; ele critica a redução da avaliação a uma nota final e valoriza seu uso para acompanhar e intervir no processo.",
        "analiseAlternativas": [
            "Incorreta. O texto critica exclusividade, não a existência de notas.",
            "Incorreta. A avaliação descrita ocorre durante a aprendizagem.",
            "Incorreta. A intervenção é situada no processo de ensinar.",
            "Incorreta. O texto não elimina a utilidade do registro; critica sua insuficiência quando isolado.",
            "Correta. Expressa o ponto de vista defendido."
        ],
        "dicaBanca": "Quando a questão pedir 'posição', 'tese' ou 'ponto de vista', procure a avaliação assumida pelo autor, não apenas o tema.",
        "pegadinha": "Crítica a uma redução não equivale a rejeição absoluta do elemento criticado.",
        "memorizar2026": "Tese = opinião ou proposição central sustentada pelo texto.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-011",
        "numero": 11,
        "subtopico": "Fato e opinião",
        "dificuldade": "media",
        "texto": "A feira de ciências ocorrerá em 18 de outubro e reunirá 40 projetos. Para a coordenadora, será a edição mais interessante já realizada pela escola.",
        "pergunta": "Assinale a opção que apresenta uma opinião, e não uma informação verificável apresentada no texto.",
        "alternativas": [
            "'será a edição mais interessante já realizada pela escola'.",
            "'a feira de ciências ocorrerá em 18 de outubro'.",
            "'a feira reunirá 40 projetos'.",
            "'a coordenadora falou sobre a feira'.",
            "'há uma edição da feira prevista pela escola'."
        ],
        "correta": 0,
        "feedbackAcerto": "A avaliação 'mais interessante' depende de julgamento subjetivo. Data e quantidade de projetos são informações objetivamente verificáveis.",
        "feedbackErro": "Procure a formulação que contém avaliação subjetiva. Expressões comparativas de qualidade, como 'mais interessante', frequentemente marcam opinião.",
        "analiseAlternativas": [
            "Correta. Trata-se de julgamento avaliativo atribuído à coordenadora.",
            "Incorreta. A data é verificável.",
            "Incorreta. A quantidade é verificável.",
            "Incorreta. O próprio texto atribui uma fala à coordenadora.",
            "Incorreta. É uma informação derivável do anúncio do evento."
        ],
        "dicaBanca": "A FGV pode opor dado objetivo a avaliação subjetiva dentro do mesmo período.",
        "pegadinha": "Uma opinião pode estar explicitamente atribuída a alguém e continuar sendo opinião.",
        "memorizar2026": "Fato = verificável; opinião = avaliação, julgamento ou apreciação.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-012",
        "numero": 12,
        "subtopico": "Relação entre afirmações",
        "dificuldade": "alta",
        "texto": "A escola instalou bebedouros novos. A medida, entretanto, não resolveu o desperdício de água, porque parte dos vazamentos vinha da tubulação antiga.",
        "pergunta": "A relação de sentido estabelecida no texto indica que",
        "alternativas": [
            "os bebedouros novos foram a causa dos vazamentos antigos.",
            "a instalação dos bebedouros, embora positiva, foi insuficiente para solucionar todo o problema.",
            "a tubulação antiga deixou de apresentar vazamentos após a instalação.",
            "o desperdício ocorria exclusivamente nos bebedouros substituídos.",
            "a escola decidiu remover todos os bebedouros."
        ],
        "correta": 1,
        "feedbackAcerto": "O texto contrapõe uma ação de melhoria ao fato de que ela não foi suficiente, pois havia outra origem para o desperdício.",
        "feedbackErro": "Observe o contraste introduzido por 'entretanto' e a causa apresentada por 'porque'. A ação não é descrita como inútil, mas como insuficiente.",
        "analiseAlternativas": [
            "Incorreta. A tubulação já era antiga; não foi causada pelos novos equipamentos.",
            "Correta. Resume adequadamente a relação entre ação e resultado.",
            "Incorreta. Os vazamentos persistiam.",
            "Incorreta. O texto identifica outra fonte de desperdício.",
            "Incorreta. Não há essa decisão."
        ],
        "dicaBanca": "Questões de interpretação podem exigir que você combine contraste e causa sem nomear formalmente as conjunções.",
        "pegadinha": "'Não resolveu' não significa 'não ajudou em nada'.",
        "memorizar2026": "Leia as relações lógicas entre as informações, não apenas cada frase isoladamente.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-013",
        "numero": 13,
        "subtopico": "Generalização indevida",
        "dificuldade": "alta",
        "texto": "Uma pesquisa realizada com estudantes de três turmas de uma escola mostrou aumento do uso da biblioteca após a criação de clubes de leitura.",
        "pergunta": "Com base apenas no texto, é correto afirmar que",
        "alternativas": [
            "clubes de leitura sempre aumentam o uso de bibliotecas em qualquer escola.",
            "todos os estudantes das três turmas passaram a frequentar diariamente a biblioteca.",
            "a pesquisa encontrou aumento do uso da biblioteca no grupo observado.",
            "a criação de clubes de leitura é a única forma eficaz de estimular leitura.",
            "o resultado pode ser automaticamente aplicado a todas as escolas do Pará."
        ],
        "correta": 2,
        "feedbackAcerto": "A alternativa preserva os limites do dado apresentado: aumento no grupo observado. As demais transformam um resultado localizado em regra universal.",
        "feedbackErro": "A FGV costuma testar a diferença entre o que o texto mostra e uma generalização maior do que as evidências permitem.",
        "analiseAlternativas": [
            "Incorreta. 'Sempre' e 'qualquer escola' extrapolam o estudo.",
            "Incorreta. O texto fala em aumento de uso, não em frequência diária de todos.",
            "Correta. É a afirmação compatível com o alcance da pesquisa.",
            "Incorreta. Não há comparação com todas as estratégias possíveis.",
            "Incorreta. Não se pode universalizar automaticamente o achado."
        ],
        "dicaBanca": "Desconfie de universais ('todo', 'sempre', 'qualquer') quando o texto descreve amostra limitada.",
        "pegadinha": "Resultado de um grupo não autoriza conclusão universal sem suporte adicional.",
        "memorizar2026": "Interpretação fiel respeita o alcance das evidências.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-014",
        "numero": 14,
        "subtopico": "Paráfrase fiel",
        "dificuldade": "media",
        "texto": "Nem toda mudança produz melhoria, mas nenhuma melhoria ocorre sem alguma mudança.",
        "pergunta": "A alternativa que preserva o sentido do enunciado é",
        "alternativas": [
            "toda mudança necessariamente melhora uma situação.",
            "melhorias independem de alterações no estado anterior.",
            "mudança e melhoria são termos rigorosamente sinônimos.",
            "uma mudança pode não melhorar a situação, mas melhorar exige que algo seja modificado.",
            "se uma mudança falha, nenhuma melhoria futura será possível."
        ],
        "correta": 3,
        "feedbackAcerto": "A paráfrase mantém as duas relações do original: mudança não garante melhoria; melhoria pressupõe alguma mudança.",
        "feedbackErro": "Parafrasear exige conservar o conteúdo lógico. Veja se a alternativa mantém tanto a negação inicial quanto a condição expressa na segunda parte.",
        "analiseAlternativas": [
            "Incorreta. Contradiz a primeira parte.",
            "Incorreta. Contradiz a segunda parte.",
            "Incorreta. O texto distingue os conceitos.",
            "Correta. Preserva integralmente as duas ideias.",
            "Incorreta. O texto não faz previsão sobre mudanças futuras."
        ],
        "dicaBanca": "FGV gosta de paráfrases que alteram discretamente quantificadores ou relações lógicas.",
        "pegadinha": "Preservar palavras parecidas não basta; é preciso preservar a lógica.",
        "memorizar2026": "Boa paráfrase = mesma informação essencial, outra formulação.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-015",
        "numero": 15,
        "subtopico": "Conclusão coerente",
        "dificuldade": "alta",
        "texto": "A escola abriu um canal digital para sugestões. Nos primeiros meses, a maioria das mensagens tratava de problemas de infraestrutura. Após os reparos, esse tipo de mensagem diminuiu e aumentaram as sugestões sobre projetos culturais.",
        "pergunta": "A leitura do texto permite concluir que",
        "alternativas": [
            "as sugestões culturais causaram os problemas de infraestrutura.",
            "o canal digital deixou de ser utilizado depois dos reparos.",
            "a escola proibiu novas reclamações sobre infraestrutura.",
            "todos os problemas estruturais foram definitivamente resolvidos.",
            "o conteúdo das mensagens mudou ao longo do tempo, acompanhando mudanças nas demandas percebidas pelos usuários."
        ],
        "correta": 4,
        "feedbackAcerto": "O texto mostra mudança do foco das mensagens: primeiro infraestrutura, depois mais projetos culturais. A alternativa resume esse movimento sem exagerá-lo.",
        "feedbackErro": "Evite converter redução em desaparecimento total ou melhoria em solução definitiva. O texto só sustenta uma mudança de predominância temática.",
        "analiseAlternativas": [
            "Incorreta. Não há relação causal desse tipo.",
            "Incorreta. O canal continuou recebendo mensagens.",
            "Incorreta. Não há referência a proibição.",
            "Incorreta. 'Após os reparos' não equivale a resolução definitiva de tudo.",
            "Correta. É a síntese inferencial compatível com a sequência apresentada."
        ],
        "dicaBanca": "A FGV explora muito a diferença entre 'diminuiu' e 'acabou', 'aumentou' e 'tornou-se exclusivo'.",
        "pegadinha": "Mudança de frequência não é mudança absoluta.",
        "memorizar2026": "Respeite a intensidade expressa pelo texto.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-016",
        "numero": 16,
        "subtopico": "Contradição com o texto",
        "dificuldade": "facil",
        "texto": "O museu funciona de terça a domingo. Às quartas-feiras, a entrada é gratuita para todos os visitantes.",
        "pergunta": "Assinale a afirmativa que contradiz o texto.",
        "alternativas": [
            "o museu abre às segundas-feiras e fecha às quartas-feiras.",
            "o museu pode ser visitado aos domingos.",
            "há gratuidade geral às quartas-feiras.",
            "terça-feira é um dos dias de funcionamento.",
            "o texto não informa o preço da entrada nos demais dias."
        ],
        "correta": 0,
        "feedbackAcerto": "A primeira alternativa inverte as informações explicitamente fornecidas: segunda não integra o período de funcionamento e quarta é dia de abertura gratuita.",
        "feedbackErro": "Nesta questão, compare cada alternativa diretamente com o texto. Contradição exige incompatibilidade clara, não mera ausência de informação.",
        "analiseAlternativas": [
            "Correta. Contradiz diretamente o horário informado.",
            "Incorreta. É compatível com 'terça a domingo'.",
            "Incorreta. Está expressa no texto.",
            "Incorreta. Está incluída no período indicado.",
            "Incorreta. O texto realmente não informa os preços dos outros dias."
        ],
        "dicaBanca": "Diferencie 'falso segundo o texto' de 'não informado pelo texto'.",
        "pegadinha": "Ausência de informação não equivale automaticamente a contradição.",
        "memorizar2026": "Contradição = incompatibilidade; não informação = texto silencioso.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-017",
        "numero": 17,
        "subtopico": "Implicação de escolha lexical",
        "dificuldade": "alta",
        "texto": "O relatório reconhece avanços, mas alerta que os resultados ainda são desiguais entre as regiões.",
        "pergunta": "O emprego de 'ainda' sugere que",
        "alternativas": [
            "a desigualdade regional surgiu apenas depois dos avanços.",
            "há expectativa de que essa desigualdade possa ser reduzida ou superada ao longo do tempo.",
            "os avanços mencionados são falsos.",
            "o relatório considera a desigualdade irrelevante.",
            "as regiões já apresentam resultados idênticos."
        ],
        "correta": 1,
        "feedbackAcerto": "O advérbio 'ainda' indica permanência de uma situação vista como não definitiva, abrindo expectativa de mudança posterior.",
        "feedbackErro": "A interpretação de pequenas palavras é típica da FGV. 'Ainda' aqui marca continuidade temporal de uma situação que se espera modificar.",
        "analiseAlternativas": [
            "Incorreta. O texto não informa quando surgiu a desigualdade.",
            "Correta. É a implicação pragmática compatível com 'ainda'.",
            "Incorreta. O texto reconhece avanços.",
            "Incorreta. O verbo 'alerta' mostra relevância.",
            "Incorreta. Contradiz a afirmação de desigualdade."
        ],
        "dicaBanca": "Palavras pequenas — 'ainda', 'até', 'mesmo', 'já', 'só' — podem alterar fortemente a leitura.",
        "pegadinha": "Não ignore advérbios por parecerem acessórios.",
        "memorizar2026": "'Ainda' frequentemente indica continuidade + expectativa de possível mudança.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-018",
        "numero": 18,
        "subtopico": "Leitura de argumento e exemplo",
        "dificuldade": "media",
        "texto": "Pequenas mudanças de organização podem reduzir desperdícios. Uma escola, por exemplo, passou a imprimir comunicados apenas quando a versão digital não era suficiente e reduziu significativamente o consumo de papel.",
        "pergunta": "No texto, o caso da escola funciona como",
        "alternativas": [
            "negação da ideia apresentada na primeira frase.",
            "prova de que todo documento impresso é desnecessário.",
            "exemplo que concretiza a afirmação geral sobre redução de desperdícios.",
            "argumento para proibir o uso de papel nas escolas.",
            "informação sem relação com a afirmação inicial."
        ],
        "correta": 2,
        "feedbackAcerto": "A segunda frase exemplifica a afirmação geral da primeira, mostrando uma medida concreta associada à redução de desperdício.",
        "feedbackErro": "Observe a expressão 'por exemplo'. Ela indica que a situação específica serve para ilustrar uma ideia mais geral.",
        "analiseAlternativas": [
            "Incorreta. O exemplo confirma, não nega, a primeira frase.",
            "Incorreta. O próprio caso admite impressão quando necessária.",
            "Correta. Essa é a função do exemplo.",
            "Incorreta. O texto fala em redução, não proibição absoluta.",
            "Incorreta. Há relação explícita."
        ],
        "dicaBanca": "A FGV pode perguntar a função de um segmento na argumentação sem exigir nomenclatura complexa.",
        "pegadinha": "Exemplo não é automaticamente prova universal.",
        "memorizar2026": "Exemplo concretiza uma ideia geral, mas não a transforma em regra absoluta.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-019",
        "numero": 19,
        "subtopico": "Ambiguidade interpretativa",
        "dificuldade": "alta",
        "texto": "A coordenadora informou à professora que sua turma participaria da feira.",
        "pergunta": "A frase admite mais de uma interpretação porque",
        "alternativas": [
            "o verbo 'informar' não possui sentido em português formal.",
            "a palavra 'feira' só pode indicar um mercado.",
            "a oração não possui sujeito.",
            "o possessivo 'sua' pode referir-se à turma da coordenadora ou à turma da professora, conforme o contexto.",
            "o termo 'professora' pode funcionar simultaneamente como verbo e substantivo."
        ],
        "correta": 3,
        "feedbackAcerto": "O possessivo 'sua' tem referente potencialmente ambíguo, pois pode ser associado a mais de uma pessoa mencionada na frase.",
        "feedbackErro": "A ambiguidade decorre de um referente não claramente identificado. Pergunte: de quem é a turma?",
        "analiseAlternativas": [
            "Incorreta. 'Informar' é plenamente adequado.",
            "Incorreta. 'Feira' pode ter vários sentidos, mas o problema central aqui é outro.",
            "Incorreta. 'A coordenadora' é sujeito da oração principal.",
            "Correta. O possessivo permite dois referentes possíveis.",
            "Incorreta. 'Professora' é substantivo no contexto."
        ],
        "dicaBanca": "FGV gosta de ambiguidades decorrentes de pronomes possessivos e referências pouco claras.",
        "pegadinha": "Nem toda palavra polissêmica é a causa da ambiguidade específica da frase.",
        "memorizar2026": "Ambiguidade referencial = não fica claro a quem um termo se refere.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-020",
        "numero": 20,
        "subtopico": "Leitura crítica de afirmação absoluta",
        "dificuldade": "alta",
        "texto": "O uso de inteligência artificial pode apoiar algumas tarefas escolares, desde que haja critérios pedagógicos, verificação das informações e respeito à autoria.",
        "pergunta": "Uma leitura fiel do texto permite afirmar que o autor",
        "alternativas": [
            "considera que qualquer uso de inteligência artificial melhora a aprendizagem.",
            "defende a substituição do professor por sistemas automatizados.",
            "rejeita completamente o uso de inteligência artificial na escola.",
            "afirma que a verificação das informações é desnecessária quando há tecnologia.",
            "admite usos educacionais da inteligência artificial, mas condiciona sua adequação a critérios e cuidados."
        ],
        "correta": 4,
        "feedbackAcerto": "A expressão 'pode apoiar' e a condição introduzida por 'desde que' mostram uma posição não absoluta: há possibilidade de uso, sob critérios.",
        "feedbackErro": "Observe os modalizadores. O autor não diz 'sempre' nem 'nunca'; ele admite possibilidade condicionada.",
        "analiseAlternativas": [
            "Incorreta. 'Pode' não equivale a 'qualquer uso melhora'.",
            "Incorreta. Não há defesa de substituição docente.",
            "Incorreta. O texto admite uso.",
            "Incorreta. A verificação é expressamente exigida.",
            "Correta. Sintetiza a posição condicional do texto."
        ],
        "dicaBanca": "Alternativas extremas costumam distorcer textos moderados.",
        "pegadinha": "'Pode' ≠ 'deve' ≠ 'sempre'.",
        "memorizar2026": "Leia os modalizadores: eles delimitam o grau de compromisso do autor.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-021",
        "numero": 21,
        "subtopico": "Informação explícita x dedução indevida",
        "dificuldade": "media",
        "texto": "Dos 120 estudantes inscritos na oficina, 90 compareceram ao primeiro encontro.",
        "pergunta": "Com base somente nessa informação, é correto afirmar que",
        "alternativas": [
            "30 estudantes inscritos não compareceram ao primeiro encontro.",
            "os 30 ausentes desistiram definitivamente da oficina.",
            "os 90 presentes permaneceram até o fim da atividade.",
            "a oficina teve avaliação positiva de todos os presentes.",
            "os estudantes ausentes apresentaram justificativa formal."
        ],
        "correta": 0,
        "feedbackAcerto": "A única conclusão diretamente sustentada pelos números é a diferença entre inscritos e presentes: 120 − 90 = 30 ausentes no primeiro encontro.",
        "feedbackErro": "A questão testa o limite entre informação dedutível e narrativa inventada. Nada é dito sobre desistência, permanência, avaliação ou justificativa.",
        "analiseAlternativas": [
            "Correta. É dedução matemática direta dos dados.",
            "Incorreta. Ausência em um encontro não implica desistência.",
            "Incorreta. O texto não informa duração da presença.",
            "Incorreta. Não há avaliação da oficina.",
            "Incorreta. Não há informação sobre justificativas."
        ],
        "dicaBanca": "FGV mistura inferências válidas com histórias plausíveis, mas não sustentadas.",
        "pegadinha": "Plausível não é sinônimo de textual.",
        "memorizar2026": "Só conclua aquilo que os dados autorizam.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-022",
        "numero": 22,
        "subtopico": "Relação causa e consequência",
        "dificuldade": "media",
        "texto": "Como a ponte ficou interditada após a cheia do rio, o transporte escolar precisou adotar uma rota mais longa durante duas semanas.",
        "pergunta": "Segundo o texto, a adoção de uma rota mais longa ocorreu",
        "alternativas": [
            "para provocar a interdição da ponte.",
            "em consequência da interdição da ponte.",
            "antes da cheia do rio.",
            "sem relação com as condições de deslocamento.",
            "porque a escola decidiu reduzir o tempo de viagem."
        ],
        "correta": 1,
        "feedbackAcerto": "A interdição da ponte é apresentada como causa da mudança temporária de rota.",
        "feedbackErro": "A relação causal está explicitada: cheia → interdição → necessidade de rota mais longa.",
        "analiseAlternativas": [
            "Incorreta. Inverte causa e consequência.",
            "Correta. Reproduz a relação causal do texto.",
            "Incorreta. A mudança ocorreu após a interdição.",
            "Incorreta. A relação é explícita.",
            "Incorreta. Uma rota mais longa tende a aumentar, não reduzir, o percurso; além disso, isso não é informado."
        ],
        "dicaBanca": "Cuidado com alternativas que invertem a direção da causalidade.",
        "pegadinha": "Causa e consequência podem conter os mesmos elementos, mas em ordem lógica diferente.",
        "memorizar2026": "Pergunte: o que ocorreu primeiro e o que foi provocado por isso?",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-023",
        "numero": 23,
        "subtopico": "Compatibilidade semântica",
        "dificuldade": "alta",
        "texto": "A proposta foi recebida com cautela: ninguém a rejeitou de imediato, mas vários participantes pediram mais dados antes de apoiá-la.",
        "pergunta": "A atitude dos participantes pode ser caracterizada como",
        "alternativas": [
            "adesão entusiasmada e imediata.",
            "rejeição definitiva da proposta.",
            "aceitação condicionada a esclarecimentos adicionais.",
            "indiferença completa ao tema.",
            "proibição de qualquer debate posterior."
        ],
        "correta": 2,
        "feedbackAcerto": "A ausência de rejeição imediata combinada ao pedido de mais dados indica disposição para considerar a proposta, mas sem apoio incondicional.",
        "feedbackErro": "A palavra-chave é 'cautela'. O comportamento descrito não é nem adesão plena nem rejeição definitiva.",
        "analiseAlternativas": [
            "Incorreta. O texto destaca cautela, não entusiasmo.",
            "Incorreta. Não houve rejeição imediata.",
            "Correta. Resume a postura descrita.",
            "Incorreta. Pedir dados revela interesse, não indiferença.",
            "Incorreta. O pedido de dados pressupõe continuidade da análise."
        ],
        "dicaBanca": "A FGV costuma testar gradações: cautela, reserva, aprovação parcial, crítica moderada.",
        "pegadinha": "Não transforme posições intermediárias em extremos.",
        "memorizar2026": "Interpretação precisa respeitar o grau de intensidade das palavras.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-024",
        "numero": 24,
        "subtopico": "Intenção de segmento final",
        "dificuldade": "alta",
        "texto": "A escola possui regras para o uso dos laboratórios. Conhecê-las é importante; cumpri-las, indispensável.",
        "pergunta": "O segmento final 'cumpri-las, indispensável' tem a função de",
        "alternativas": [
            "reduzir a importância das regras.",
            "afirmar que conhecer e cumprir são ações igualmente dispensáveis.",
            "indicar que conhecer as regras basta para garantir segurança.",
            "intensificar a importância do cumprimento das regras em relação ao simples conhecimento delas.",
            "mostrar que as regras são apenas sugestões opcionais."
        ],
        "correta": 3,
        "feedbackAcerto": "O contraste entre 'importante' e 'indispensável' cria uma gradação: conhecer é relevante, mas cumprir é apresentado como necessário.",
        "feedbackErro": "Compare os dois qualificadores. 'Indispensável' é semanticamente mais forte do que 'importante'.",
        "analiseAlternativas": [
            "Incorreta. O segmento reforça, não reduz, a importância.",
            "Incorreta. O texto faz justamente o contrário.",
            "Incorreta. Conhecimento sozinho não é apresentado como suficiente.",
            "Correta. Há intensificação do valor atribuído ao cumprimento.",
            "Incorreta. 'Indispensável' exclui a ideia de opcionalidade."
        ],
        "dicaBanca": "FGV explora relações de intensidade e gradação dentro de frases curtas.",
        "pegadinha": "Palavras próximas podem ter força argumentativa diferente.",
        "memorizar2026": "Importante < indispensável: a segunda formulação intensifica a exigência.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    },
    {
        "id": "SEDUC-LP-INTERP-025",
        "numero": 25,
        "subtopico": "Caso integrador — compreensão e inferência",
        "dificuldade": "alta",
        "texto": "Durante meses, a escola atribuiu a baixa participação das famílias à falta de interesse. Uma pesquisa simples mostrou, porém, que muitos responsáveis trabalhavam no horário das reuniões e que parte deles não tinha transporte disponível à noite. Depois que a escola passou a alternar horários e oferecer participação remota, a presença aumentou.",
        "pergunta": "A principal conclusão que o texto sustenta é a de que",
        "alternativas": [
            "a participação das famílias depende exclusivamente da tecnologia.",
            "o trabalho dos responsáveis impede qualquer participação na vida escolar.",
            "a escola deve abandonar definitivamente reuniões presenciais.",
            "interesse das famílias e presença física são sempre equivalentes.",
            "uma interpretação inicial pode ser equivocada quando ignora barreiras concretas de participação."
        ],
        "correta": 4,
        "feedbackAcerto": "O texto corrige uma explicação inicial simplista ao revelar barreiras de horário e transporte; quando essas barreiras são reduzidas, a participação aumenta.",
        "feedbackErro": "A conclusão não é que tecnologia resolve tudo, nem que reuniões presenciais devem acabar. O foco é a revisão de uma interpretação inicial à luz de novas evidências.",
        "analiseAlternativas": [
            "Incorreta. Houve também alteração de horários; além disso, 'exclusivamente' exagera.",
            "Incorreta. O texto mostra obstáculos, não impossibilidade absoluta.",
            "Incorreta. Houve alternância e participação remota, não abandono obrigatório do presencial.",
            "Incorreta. O próprio texto demonstra que ausência física não significava falta de interesse.",
            "Correta. Resume a mudança de interpretação produzida pelos dados."
        ],
        "dicaBanca": "Questões integradoras da FGV frequentemente apresentam uma hipótese inicial, novos dados e uma revisão de conclusão.",
        "pegadinha": "Não confunda correlação aparente com causa comprovada.",
        "memorizar2026": "Boa compreensão textual revisa hipóteses quando o próprio texto apresenta evidências novas.",
        "fonte": "Texto autoral elaborado para treino no padrão FGV; edital SEDUC-PA 2026 — Língua Portuguesa."
    }
];

    window.seducLinguaPortuguesaInterpretacaoCompreensao2026 = banco;
})();
