/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 08
   PROBLEMAS ESTRUTURAIS DAS FRASES

   Edital SEDUC-PA 2026:
   “Problemas estruturais das frases.”

   Foco do bloco:
   • ambiguidade referencial e de ligação
   • pronomes com antecedente pouco claro
   • paralelismo sintático e semântico
   • coordenação e correlação defeituosas
   • comparações mal estruturadas
   • fragmentos e quebras de construção
   • modificadores mal posicionados
   • pleonasmos e redundâncias desnecessárias
   • excesso de encaixes e perda de clareza
   • reescritura corretiva com preservação de sentido

   25 questões autorais, majoritariamente contextualizadas,
   calibradas pelo padrão recente da FGV.
========================================================== */

(function(){
    "use strict";

    const banco =
[
    {
        "id": "SEDUC-LP-PEF-001",
        "numero": 1,
        "subtopico": "Ambiguidade referencial",
        "dificuldade": "media",
        "pergunta": "A coordenadora escreveu no grupo: “Conversei com a professora sobre a mãe da aluna e ela pediu uma nova reunião.” Se a intenção é informar, sem ambiguidade, que foi a professora quem pediu a reunião, a melhor reescritura é",
        "alternativas": [
            "Conversei com a professora sobre a mãe da aluna, e a professora pediu uma nova reunião.",
            "Conversei com a professora sobre a mãe da aluna e ela mesma pediu uma reunião nova.",
            "Conversei com a professora sobre a mãe da aluna, que pediu uma nova reunião.",
            "Sobre a mãe da aluna, conversei com a professora e ela pediu uma nova reunião.",
            "A professora e a mãe da aluna, conversei com elas, e ela pediu nova reunião."
        ],
        "correta": 0,
        "feedbackAcerto": "A repetição controlada de “a professora” elimina a dúvida sobre o referente sem alterar a informação.",
        "feedbackErro": "O pronome “ela” pode retomar mais de um nome feminino. A correção estrutural deve tornar o referente inequívoco.",
        "analiseAlternativas": [
            "Correta. Explicita o referente da ação de pedir.",
            "Incorreta. “Ela mesma” continua dependendo da identificação de “ela”.",
            "Incorreta. “Que” tende a retomar “mãe da aluna”, alterando o referente pretendido.",
            "Incorreta. A ambiguidade de “ela” permanece.",
            "Incorreta. A construção é truncada e mantém referência pouco clara."
        ],
        "dicaBanca": "A FGV explora muito pronomes cujo antecedente pode ser mais de um termo.",
        "pegadinha": "Pronome gramaticalmente correto pode produzir frase estruturalmente ambígua.",
        "memorizar2026": "Referente claro: o leitor deve saber sem adivinhação a quem o pronome se refere.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-002",
        "numero": 2,
        "subtopico": "Ambiguidade de adjunção",
        "dificuldade": "alta",
        "pergunta": "Na frase “A professora observou o estudante com o binóculo”, o principal problema estrutural é que",
        "alternativas": [
            "o verbo “observar” exige obrigatoriamente objeto indireto.",
            "o segmento “com o binóculo” pode indicar o instrumento usado pela professora ou uma característica circunstancial associada ao estudante.",
            "o sujeito da oração não pode ser identificado.",
            "a frase apresenta duas orações sem conectivo.",
            "o substantivo “estudante” não admite complemento."
        ],
        "correta": 1,
        "feedbackAcerto": "O sintagma “com o binóculo” admite duas ligações estruturais e, por isso, duas leituras.",
        "feedbackErro": "A ambiguidade não nasce do vocabulário isolado, mas do ponto da estrutura a que o segmento pode se ligar.",
        "analiseAlternativas": [
            "Incorreta. “Observar” é transitivo direto nesse uso.",
            "Correta. Há ambiguidade de ligação do adjunto.",
            "Incorreta. “A professora” é sujeito explícito.",
            "Incorreta. Há uma única oração.",
            "Incorreta. O problema não é a possibilidade de complemento do substantivo."
        ],
        "dicaBanca": "Pergunte sempre: este termo se liga a qual palavra ou oração?",
        "pegadinha": "Uma frase pode ter todas as palavras corretas e ainda assim permitir duas análises sintáticas.",
        "memorizar2026": "Ambiguidade estrutural = mais de uma possibilidade de ligação entre constituintes.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-003",
        "numero": 3,
        "subtopico": "Paralelismo sintático",
        "dificuldade": "media",
        "pergunta": "Em um plano escolar lê-se: “O projeto pretende ampliar o acesso à biblioteca, reduzir a evasão e que os estudantes participem mais das atividades.” O problema estrutural predominante é",
        "alternativas": [
            "a repetição excessiva de substantivos.",
            "a ausência de sujeito na última oração.",
            "a quebra de paralelismo entre os elementos coordenados.",
            "a falta de uma oração principal.",
            "a impossibilidade de coordenar três objetivos."
        ],
        "correta": 2,
        "feedbackAcerto": "Os dois primeiros objetivos são construídos com infinitivo; o terceiro passa para uma oração introduzida por “que”.",
        "feedbackErro": "Em enumerações coordenadas, a FGV costuma exigir simetria de construção quando os elementos exercem a mesma função.",
        "analiseAlternativas": [
            "Incorreta. Não há repetição relevante.",
            "Incorreta. “os estudantes” é sujeito da oração final.",
            "Correta. Há mudança injustificada de molde sintático.",
            "Incorreta. “O projeto pretende” organiza a estrutura.",
            "Incorreta. Três ou mais objetivos podem ser coordenados normalmente."
        ],
        "dicaBanca": "Compare a forma gramatical dos itens de uma enumeração: infinitivo com infinitivo, substantivo com substantivo, oração com oração.",
        "pegadinha": "A frase pode ser compreensível e mesmo assim ter paralelismo defeituoso.",
        "memorizar2026": "Paralelismo = estruturas equivalentes para funções equivalentes.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-004",
        "numero": 4,
        "subtopico": "Correção de paralelismo",
        "dificuldade": "media",
        "pergunta": "A reescritura que corrige adequadamente a frase “A escola deseja melhorar a frequência, a participação dos responsáveis e que os estudantes leiam mais” é",
        "alternativas": [
            "A escola deseja que melhore a frequência, a participação dos responsáveis e ler mais.",
            "A escola deseja melhorar a frequência, que os responsáveis participem e a leitura dos estudantes.",
            "A escola deseja a frequência melhor, a participação dos responsáveis e que os estudantes leiam.",
            "A escola deseja melhorar a frequência, ampliar a participação dos responsáveis e estimular a leitura dos estudantes.",
            "A escola deseja melhorar a frequência e os responsáveis, além de estudantes que leiam mais."
        ],
        "correta": 3,
        "feedbackAcerto": "A alternativa organiza os três objetivos com verbos no infinitivo: melhorar, ampliar e estimular.",
        "feedbackErro": "A melhor correção não é apenas “gramatical”; ela deve apresentar elementos coordenados com estrutura equivalente e sentido claro.",
        "analiseAlternativas": [
            "Incorreta. Mistura oração com infinitivo.",
            "Incorreta. Mantém estruturas heterogêneas.",
            "Incorreta. A primeira expressão é pouco natural e a quebra permanece.",
            "Correta. Há paralelismo sintático e semântico.",
            "Incorreta. “melhorar os responsáveis” produz relação semântica inadequada."
        ],
        "dicaBanca": "Na correção, procure uma sequência com o mesmo molde e verbos semanticamente compatíveis com seus complementos.",
        "pegadinha": "Paralelismo também envolve coerência semântica, não apenas aparência gramatical.",
        "memorizar2026": "Boa enumeração: mesma função + estrutura equivalente + sentido compatível.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-005",
        "numero": 5,
        "subtopico": "Redundância / pleonasmo vicioso",
        "dificuldade": "facil",
        "pergunta": "Assinale a frase em que há redundância estrutural desnecessária.",
        "alternativas": [
            "A equipe voltou a analisar o processo.",
            "Os responsáveis participaram juntos da reunião.",
            "A direção antecipou a divulgação prevista.",
            "O professor repetiu a explicação em outro exemplo.",
            "A reunião foi adiada para depois."
        ],
        "correta": 4,
        "feedbackAcerto": "“Adiar” já contém a ideia de transferir para momento posterior; “para depois” repete desnecessariamente essa informação.",
        "feedbackErro": "Nem toda repetição de ideia é inadequada; a banca costuma buscar a repetição que não acrescenta precisão nem efeito expressivo relevante.",
        "analiseAlternativas": [
            "Incorreta. “Voltou a” informa repetição da ação, não é redundância obrigatória.",
            "Incorreta. “juntos” pode enfatizar participação conjunta.",
            "Incorreta. “antecipou” e “prevista” não repetem a mesma informação.",
            "Incorreta. O segundo segmento especifica como houve repetição.",
            "Correta. “Adiar” já significa transferir para depois; a expressão repete a mesma noção."
        ],
        "dicaBanca": "FGV gosta de pleonasmos como “há anos atrás”, “planejar antecipadamente”, “repetir de novo” e combinações semelhantes.",
        "pegadinha": "Pleonasmo expressivo pode ser estilístico; pleonasmo vicioso é repetição inútil.",
        "memorizar2026": "Redundância problemática = informação repetida sem função comunicativa relevante.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-006",
        "numero": 6,
        "subtopico": "Pronome sem antecedente claro",
        "dificuldade": "media",
        "pergunta": "Em um aviso lê-se: “Os professores entregaram as fichas aos coordenadores depois de revisá-las, e eles solicitaram correções.” Para indicar que os coordenadores solicitaram as correções, a melhor solução é",
        "alternativas": [
            "substituir “eles” por “os coordenadores”.",
            "retirar “aos coordenadores”.",
            "substituir “correções” por “elas”.",
            "eliminar o verbo “solicitaram”.",
            "trocar “depois” por “antes”."
        ],
        "correta": 0,
        "feedbackAcerto": "A nomeação explícita do referente elimina a possibilidade de “eles” retomar professores ou coordenadores.",
        "feedbackErro": "Quando dois antecedentes têm o mesmo gênero e número, o pronome pode não ser suficiente para garantir clareza.",
        "analiseAlternativas": [
            "Correta. Elimina a ambiguidade referencial.",
            "Incorreta. Apaga informação necessária.",
            "Incorreta. Cria novo pronome sem resolver o primeiro.",
            "Incorreta. Elimina o núcleo da segunda informação.",
            "Incorreta. Muda a relação temporal e não resolve a referência."
        ],
        "dicaBanca": "Em textos administrativos, clareza costuma valer mais que evitar uma repetição curta.",
        "pegadinha": "Evitar repetição a qualquer custo pode criar ambiguidade.",
        "memorizar2026": "Se houver dois antecedentes possíveis, prefira nomear o referente.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-007",
        "numero": 7,
        "subtopico": "Fragmento frasal",
        "dificuldade": "media",
        "pergunta": "Qual item apresenta um fragmento que, isoladamente, não constitui uma frase completa no contexto formal?",
        "alternativas": [
            "A reunião terminou mais cedo.",
            "Embora os dados tenham sido divulgados no prazo.",
            "Silêncio no corredor!",
            "Os resultados serão revistos amanhã.",
            "Que ótima notícia!"
        ],
        "correta": 1,
        "feedbackAcerto": "“Embora” introduz uma oração subordinada que cria expectativa de uma oração principal; isolado, o segmento fica estruturalmente suspenso.",
        "feedbackErro": "Frase não se confunde com oração. Uma frase nominal pode ser completa; já uma subordinada introduzida por “embora” depende de outra estrutura.",
        "analiseAlternativas": [
            "Incorreta. É período completo.",
            "Correta. É oração subordinada fragmentada.",
            "Incorreta. É frase nominal completa no contexto.",
            "Incorreta. É período completo.",
            "Incorreta. É frase exclamativa completa."
        ],
        "dicaBanca": "A banca pode colocar lado a lado frase nominal válida e oração subordinada incompleta.",
        "pegadinha": "“Sem verbo” não significa necessariamente “fragmento”; dependência sintática é o ponto decisivo.",
        "memorizar2026": "Fragmento = segmento que depende estruturalmente de algo que não aparece.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-008",
        "numero": 8,
        "subtopico": "Coordenação defeituosa",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase em que a coordenação reúne elementos estruturalmente incompatíveis.",
        "alternativas": [
            "A equipe revisou o calendário e o regulamento.",
            "A escola ampliou a biblioteca e reformou o laboratório.",
            "O encontro discutiu a formação docente, a avaliação e como a família participa da escola.",
            "Os alunos leram os textos e responderam às questões.",
            "O relatório apresenta dados e propõe medidas."
        ],
        "correta": 2,
        "feedbackAcerto": "Os dois primeiros itens são sintagmas nominais; o terceiro é uma oração interrogativa indireta, quebrando o padrão da enumeração.",
        "feedbackErro": "A estrutura coordenada fica mais clara quando itens de mesma função aparecem em formas equivalentes.",
        "analiseAlternativas": [
            "Incorreta. Coordenação nominal regular.",
            "Incorreta. Coordenação verbal regular.",
            "Correta. Há quebra estrutural na série coordenada.",
            "Incorreta. Coordenação de predicados compatíveis.",
            "Incorreta. Dois verbos coordenados com o mesmo sujeito."
        ],
        "dicaBanca": "Procure a “lista escondida” da frase e compare a forma de cada item.",
        "pegadinha": "Uma conjunção correta não garante coordenação bem construída.",
        "memorizar2026": "Coordenação clara exige compatibilidade sintática e semântica.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-009",
        "numero": 9,
        "subtopico": "Comparação defeituosa",
        "dificuldade": "alta",
        "pergunta": "A frase “O desempenho desta turma foi superior à escola do turno da tarde” apresenta problema porque compara",
        "alternativas": [
            "duas turmas do mesmo turno.",
            "uma ação com uma qualidade.",
            "um desempenho com outro desempenho explicitamente.",
            "o desempenho de uma turma com uma escola, elementos de naturezas diferentes.",
            "duas escolas de municípios diferentes."
        ],
        "correta": 3,
        "feedbackAcerto": "O termo comparado é “desempenho”; portanto, o segundo membro deve trazer “o desempenho da escola/turma” ou uma forma elíptica equivalente.",
        "feedbackErro": "Comparações mal estruturadas costumam aproximar termos que não pertencem ao mesmo plano lógico.",
        "analiseAlternativas": [
            "Incorreta. Isso não está dito.",
            "Incorreta. O problema não é ação versus qualidade.",
            "Incorreta. O segundo desempenho não aparece.",
            "Correta. A comparação põe em paralelo grandezas diferentes.",
            "Incorreta. Não há informação sobre municípios."
        ],
        "dicaBanca": "Pergunte: “X é maior/melhor que o quê?” Os dois lados precisam ser comparáveis.",
        "pegadinha": "Comparação pode parecer natural na fala, mas deixar implícito um termo necessário à precisão.",
        "memorizar2026": "Compare elementos equivalentes: desempenho com desempenho, número com número, ação com ação.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-010",
        "numero": 10,
        "subtopico": "Correlação e paralelismo",
        "dificuldade": "media",
        "pergunta": "Qual frase apresenta correlação estrutural mais adequada?",
        "alternativas": [
            "A escola não apenas ampliou a biblioteca, como a reforma do laboratório.",
            "A escola tanto ampliou a biblioteca, mas também reformou o laboratório.",
            "A escola ampliou não só a biblioteca, e também o laboratório foi reformado.",
            "Não apenas a escola ampliou a biblioteca, mas a reforma do laboratório.",
            "A escola não apenas ampliou a biblioteca, mas também reformou o laboratório."
        ],
        "correta": 4,
        "feedbackAcerto": "“Não apenas... mas também...” estabelece correlação equilibrada entre dois verbos com o mesmo sujeito.",
        "feedbackErro": "Correlação exige pares compatíveis e estruturas paralelas. A presença de palavras correlativas isoladas não basta.",
        "analiseAlternativas": [
            "Incorreta. Verbo no primeiro membro e sintagma nominal no segundo.",
            "Incorreta. Mistura “tanto” com “mas também” de modo inadequado.",
            "Incorreta. Há mudança de estrutura e voz.",
            "Incorreta. O segundo membro fica nominal e incompleto.",
            "Correta. Correlação e paralelismo estão preservados."
        ],
        "dicaBanca": "A FGV observa pares como “não só... mas também”, “tanto... quanto”, “ora... ora”, “seja... seja”.",
        "pegadinha": "Par correlativo certo com estruturas erradas continua sendo problema estrutural.",
        "memorizar2026": "Correlação boa = par adequado + membros paralelos.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-011",
        "numero": 11,
        "subtopico": "Quebra de construção / anacoluto não intencional",
        "dificuldade": "alta",
        "pergunta": "Em um relatório aparece: “Os estudantes com maior dificuldade, precisamos oferecer acompanhamento semanal.” A reescritura mais clara, mantendo a ideia, é",
        "alternativas": [
            "Precisamos oferecer acompanhamento semanal aos estudantes com maior dificuldade.",
            "Os estudantes com maior dificuldade, acompanhamento semanal precisamos oferecer.",
            "Os estudantes com maior dificuldade precisam, nós, oferecer acompanhamento semanal.",
            "Aos estudantes com maior dificuldade, eles precisam acompanhamento semanal.",
            "Os estudantes, com maior dificuldade, precisamos oferecer-lhes acompanhamento."
        ],
        "correta": 0,
        "feedbackAcerto": "A reescritura integra corretamente “aos estudantes com maior dificuldade” ao verbo “oferecer”.",
        "feedbackErro": "O original lança um termo inicial e depois muda de construção, deixando-o sem função sintática integrada.",
        "analiseAlternativas": [
            "Correta. A estrutura fica completa e direta.",
            "Incorreta. Ordem artificial e pouco clara.",
            "Incorreta. Mistura sujeitos e rompe a estrutura.",
            "Incorreta. Altera o sentido: passa a dizer que os estudantes precisam oferecer algo.",
            "Incorreta. Mantém a ruptura entre “os estudantes” e o predicado."
        ],
        "dicaBanca": "Anacoluto pode ser recurso expressivo na literatura; em texto administrativo, costuma ser problema de construção quando involuntário.",
        "pegadinha": "Nem toda ruptura é erro em qualquer gênero; observe a intenção e o registro.",
        "memorizar2026": "Evite iniciar uma construção e concluí-la com outra incompatível.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-012",
        "numero": 12,
        "subtopico": "Modificador mal posicionado",
        "dificuldade": "alta",
        "pergunta": "Na frase “A escola ofereceu atividades aos alunos de leitura”, o principal problema estrutural é que",
        "alternativas": [
            "o verbo “oferecer” não admite dois complementos.",
            "o segmento “de leitura” fica mal posicionado e pode aparentar ligar-se a “alunos”, embora a intenção seja caracterizar “atividades”.",
            "a palavra “alunos” deveria obrigatoriamente estar no singular.",
            "a frase não possui sujeito.",
            "a preposição “aos” deveria ser eliminada em qualquer contexto."
        ],
        "correta": 1,
        "feedbackAcerto": "Ao ficar depois de “alunos”, “de leitura” pode ser associado ao termo errado. A forma mais clara é “A escola ofereceu atividades de leitura aos alunos”.",
        "feedbackErro": "O problema é de posição e ligação do modificador: “de leitura” deve ficar junto de “atividades”, termo que caracteriza.",
        "analiseAlternativas": [
            "Incorreta. “Oferecer algo a alguém” é uma construção regular.",
            "Correta. O modificador está afastado do nome que deve caracterizar.",
            "Incorreta. Não há exigência de singular.",
            "Incorreta. “A escola” é o sujeito.",
            "Incorreta. “aos alunos” identifica corretamente o destinatário."
        ],
        "dicaBanca": "FGV: um modificador pode estar gramaticalmente possível, mas mal colocado a ponto de prejudicar a clareza.",
        "pegadinha": "A proximidade de um modificador com o termo errado pode criar uma leitura indesejada.",
        "memorizar2026": "Coloque o modificador perto do termo que ele realmente caracteriza.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-013",
        "numero": 13,
        "subtopico": "Paralelismo semântico",
        "dificuldade": "media",
        "pergunta": "Assinale a enumeração em que há problema de paralelismo semântico.",
        "alternativas": [
            "A escola oferece biblioteca, laboratório e quadra esportiva.",
            "O curso exige leitura, escrita e participação nos debates.",
            "A reunião tratou de calendário, avaliação e formação docente.",
            "A candidata demonstrou experiência, responsabilidade e trabalhar bem em equipe.",
            "O relatório apresenta causas, consequências e propostas."
        ],
        "correta": 3,
        "feedbackAcerto": "“experiência” e “responsabilidade” são substantivos; “trabalhar bem em equipe” muda o tipo de unidade e quebra a série.",
        "feedbackErro": "Além da forma, os itens precisam ocupar posições equivalentes na enumeração.",
        "analiseAlternativas": [
            "Incorreta. Três espaços/equipamentos coordenados.",
            "Incorreta. Três atividades nominalizadas.",
            "Incorreta. Três temas nominais.",
            "Correta. Há quebra de paralelismo.",
            "Incorreta. Três categorias nominais coerentes."
        ],
        "dicaBanca": "Quando a lista começa com nomes, desconfie de um item que passa subitamente para oração ou infinitivo.",
        "pegadinha": "Itens semanticamente relacionados podem ainda estar estruturalmente mal coordenados.",
        "memorizar2026": "Séries paralelas facilitam leitura e evitam assimetrias.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-014",
        "numero": 14,
        "subtopico": "Ambiguidade em comparação",
        "dificuldade": "alta",
        "pergunta": "A frase “Joana gosta mais de Matemática do que Ana” admite duas leituras porque pode significar que",
        "alternativas": [
            "Joana e Ana são professoras de Matemática.",
            "Ana gosta apenas de Português.",
            "Joana gosta de Matemática e também de Ana na mesma intensidade.",
            "Joana gosta mais de Matemática do que Ana gosta de Matemática, ou gosta mais de Matemática do que gosta de Ana.",
            "Matemática gosta mais de Joana do que de Ana."
        ],
        "correta": 3,
        "feedbackAcerto": "A omissão de parte do segundo termo da comparação permite duas reconstruções diferentes.",
        "feedbackErro": "A ambiguidade nasce da elipse: o leitor pode completar mentalmente a estrutura de duas formas.",
        "analiseAlternativas": [
            "Incorreta. Não é uma leitura fornecida pela frase.",
            "Incorreta. Nada se afirma sobre Português.",
            "Incorreta. A frase indica comparação, não igualdade.",
            "Correta. São as duas interpretações estruturais possíveis.",
            "Incorreta. Inverte papéis sem base textual."
        ],
        "dicaBanca": "Comparações elípticas são terreno fértil para ambiguidade em provas da FGV.",
        "pegadinha": "O que foi omitido pode ser recuperado de mais de uma maneira.",
        "memorizar2026": "Em comparação ambígua, explicite o segundo termo: “do que Ana gosta” ou “do que gosta de Ana”.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-015",
        "numero": 15,
        "subtopico": "Comparação: correção estrutural",
        "dificuldade": "media",
        "pergunta": "A melhor correção para “O índice de leitura desta escola é maior que a escola vizinha” é",
        "alternativas": [
            "O índice de leitura desta escola é maior que uma escola vizinha qualquer.",
            "Esta escola tem índice de leitura maior, a escola vizinha.",
            "O índice de leitura desta escola e a escola vizinha é maior.",
            "A escola vizinha é menor que o índice de leitura desta escola.",
            "O índice de leitura desta escola é maior que o da escola vizinha."
        ],
        "correta": 4,
        "feedbackAcerto": "O pronome demonstrativo “o” retoma “índice de leitura”, criando uma comparação entre grandezas equivalentes.",
        "feedbackErro": "Compare índice com índice, e não índice com escola.",
        "analiseAlternativas": [
            "Incorreta. Mantém a comparação entre índice e escola.",
            "Incorreta. A estrutura fica truncada.",
            "Incorreta. Falta relação comparativa clara e há incompatibilidade estrutural.",
            "Incorreta. Compara escola com índice.",
            "Correta. “o da escola vizinha” = “o índice de leitura da escola vizinha”."
        ],
        "dicaBanca": "A elipse bem feita evita repetição e preserva o termo comparável.",
        "pegadinha": "Frase curta não é necessariamente frase precisa.",
        "memorizar2026": "Comparação correta põe elementos equivalentes nos dois polos.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-016",
        "numero": 16,
        "subtopico": "Pleonasmo contextual",
        "dificuldade": "media",
        "pergunta": "Em qual frase a repetição de sentido é claramente dispensável em um texto administrativo?",
        "alternativas": [
            "O prazo foi prorrogado por mais dez dias.",
            "O documento apresenta um resumo final das medidas.",
            "A equipe analisará novamente os recursos indeferidos.",
            "A direção retomará o assunto na próxima reunião.",
            "Os participantes devem entrar para dentro da sala apenas quando chamados."
        ],
        "correta": 4,
        "feedbackAcerto": "“Entrar” já implica movimento para dentro; “para dentro” é redundante no contexto administrativo.",
        "feedbackErro": "Algumas expressões repetem parcialmente uma ideia, mas acrescentam quantidade, tempo ou delimitação. O item correto repete sem acrescentar informação útil.",
        "analiseAlternativas": [
            "Incorreta. “mais dez dias” quantifica a prorrogação.",
            "Incorreta. “final” pode distinguir o resumo de outros momentos do documento.",
            "Incorreta. “novamente” informa repetição da análise.",
            "Incorreta. “próxima” localiza a reunião.",
            "Correta. “entrar para dentro” é pleonasmo vicioso."
        ],
        "dicaBanca": "Não marque toda repetição semântica como erro: verifique se o segundo termo acrescenta precisão.",
        "pegadinha": "FGV diferencia redundância inútil de especificação legítima.",
        "memorizar2026": "Pleonasmo vicioso = repetição sem ganho de precisão, contraste ou ênfase pertinente.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-017",
        "numero": 17,
        "subtopico": "Redundância temporal",
        "dificuldade": "facil",
        "pergunta": "Assinale a frase em que a expressão temporal apresenta redundância desnecessária.",
        "alternativas": [
            "O projeto começou há três anos.",
            "A escola funcionava naquele período.",
            "Há três anos atrás, a escola iniciou o projeto.",
            "O encontro ocorrerá daqui a três dias.",
            "No ano passado, a turma participou da feira."
        ],
        "correta": 2,
        "feedbackAcerto": "“Há três anos” já situa o fato no passado; “atrás” repete a mesma relação temporal.",
        "feedbackErro": "A FGV frequentemente cobra pleonasmos cristalizados na fala cotidiana.",
        "analiseAlternativas": [
            "Incorreta. Estrutura temporal regular.",
            "Incorreta. Não há repetição semântica.",
            "Correta. “há” + “atrás” duplicam a ideia de passado.",
            "Incorreta. “daqui a” marca futuro.",
            "Incorreta. Expressão temporal regular."
        ],
        "dicaBanca": "Para passado decorrido: “há três anos” OU “três anos atrás”.",
        "pegadinha": "Expressão muito comum na fala pode ser estruturalmente redundante em texto formal.",
        "memorizar2026": "Evite “há... atrás”.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-018",
        "numero": 18,
        "subtopico": "Excesso de encaixes",
        "dificuldade": "alta",
        "pergunta": "Leia: “A proposta que a equipe que acompanha o projeto apresentou será analisada amanhã.” Sem alterar a informação, a reescritura estruturalmente mais clara é",
        "alternativas": [
            "A proposta que será analisada amanhã que a equipe acompanha apresentou o projeto.",
            "A equipe que acompanha será analisada amanhã pela proposta do projeto.",
            "A equipe que acompanha o projeto apresentou a proposta, que será analisada amanhã.",
            "A proposta será que a equipe acompanha o projeto analisada amanhã.",
            "Amanhã, que a equipe acompanha o projeto, a proposta será apresentada."
        ],
        "correta": 2,
        "feedbackAcerto": "A reescritura reduz o encaixe de orações relativas e distribui as informações em uma sequência mais transparente.",
        "feedbackErro": "O original é gramatical, mas acumula “que... que...” com referentes próximos, aumentando o custo de processamento.",
        "analiseAlternativas": [
            "Incorreta. Relações ficam embaralhadas.",
            "Incorreta. Muda o sujeito do que será analisado.",
            "Correta. Preserva as informações com maior clareza.",
            "Incorreta. Estrutura quebrada.",
            "Incorreta. Relação entre os segmentos fica inadequada."
        ],
        "dicaBanca": "FGV pode avaliar clareza estrutural mesmo quando a frase original não contém erro normativo.",
        "pegadinha": "“Gramatical” não é sinônimo de “bem estruturada”.",
        "memorizar2026": "Reduzir encaixes excessivos pode aumentar clareza sem empobrecer conteúdo.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-019",
        "numero": 19,
        "subtopico": "Enumeração assimétrica",
        "dificuldade": "media",
        "pergunta": "Em um cartaz escolar lê-se: “Para participar, é necessário preencher o formulário, entregar os documentos e a presença na reunião.” A correção mais adequada é",
        "alternativas": [
            "Para participar, é necessário o formulário, entregar os documentos e presença.",
            "Para participar, é necessário preencher o formulário, entregar os documentos e comparecer à reunião.",
            "Para participar, preencher o formulário, documentos e comparecimento à reunião é necessário.",
            "Para participar, é necessário que preencha o formulário, entregar documentos e presença.",
            "Para participar, são necessários preencher, entregar e a presença."
        ],
        "correta": 1,
        "feedbackAcerto": "Os três requisitos passam a ser expressos por verbos no infinitivo: preencher, entregar e comparecer.",
        "feedbackErro": "O problema é o terceiro item nominal (“a presença”) depois de dois infinitivos.",
        "analiseAlternativas": [
            "Incorreta. Mistura nome e verbo.",
            "Correta. Restabelece paralelismo.",
            "Incorreta. A enumeração continua assimétrica.",
            "Incorreta. Mistura oração finita, infinitivo e nome.",
            "Incorreta. Estrutura nominal e verbal se chocam."
        ],
        "dicaBanca": "Em instruções, séries de infinitivos costumam produzir paralelismo claro.",
        "pegadinha": "Uma lista aparentemente simples pode esconder mudança de construção no último item.",
        "memorizar2026": "Mantenha o mesmo molde na enumeração.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-020",
        "numero": 20,
        "subtopico": "Dupla leitura por posição",
        "dificuldade": "alta",
        "pergunta": "Qual reescritura elimina a ambiguidade de “O professor avisou ao diretor que seria substituído” se quem será substituído é o professor?",
        "alternativas": [
            "O professor avisou ao diretor que seria substituído.",
            "O professor avisou que o diretor seria substituído.",
            "Ao diretor, o professor avisou que seria substituído.",
            "O professor avisou ao diretor: “Eu serei substituído.”",
            "O professor, que avisou ao diretor, seria substituído talvez."
        ],
        "correta": 3,
        "feedbackAcerto": "O discurso direto identifica explicitamente o referente de “eu” como o professor que fala.",
        "feedbackErro": "No original, o sujeito oculto de “seria substituído” pode ser associado ao professor ou ao diretor.",
        "analiseAlternativas": [
            "Incorreta. Mantém a ambiguidade.",
            "Incorreta. Define o diretor como substituído, alterando o sentido pedido.",
            "Incorreta. O deslocamento não resolve a referência do sujeito oculto.",
            "Correta. O referente fica inequívoco.",
            "Incorreta. Introduz “talvez” e muda o grau de certeza."
        ],
        "dicaBanca": "Quando a referência é o problema, uma boa reescritura deve nomear ou tornar inequívoco o participante.",
        "pegadinha": "Alterar a ordem nem sempre elimina ambiguidade.",
        "memorizar2026": "Clareza referencial vale mais que economia de palavras.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-021",
        "numero": 21,
        "subtopico": "Diagnóstico integrado",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase estruturalmente mais adequada para um comunicado formal.",
        "alternativas": [
            "A reunião terá como objetivos revisar o calendário, discutir os resultados e definir as próximas ações.",
            "A reunião terá como objetivos a revisão do calendário, discutir os resultados e as próximas ações serão definidas.",
            "A reunião, seus objetivos serão revisar calendário e que resultados sejam discutidos.",
            "Os objetivos da reunião, revisar o calendário, resultados e definir ações.",
            "A reunião terá objetivos, que serão o calendário, discutir resultados e ações."
        ],
        "correta": 0,
        "feedbackAcerto": "A frase apresenta núcleo claro e três objetivos em infinitivo, com paralelismo e sem ambiguidade.",
        "feedbackErro": "Os demais itens misturam estruturas, deixam termos soltos ou quebram a relação entre “objetivos” e seus complementos.",
        "analiseAlternativas": [
            "Correta. Estrutura paralela e clara.",
            "Incorreta. Mistura nome, infinitivo e oração passiva.",
            "Incorreta. Há termo solto e mudança de construção.",
            "Incorreta. Fragmentação da estrutura.",
            "Incorreta. Enumeração semanticamente e sintaticamente irregular."
        ],
        "dicaBanca": "Em questões integradas, procure primeiro a arquitetura da frase: núcleo + complementos + paralelismo.",
        "pegadinha": "Alternativa “bonita” pode esconder mudança de construção no meio da série.",
        "memorizar2026": "Frase formal forte = clareza + integração + paralelismo.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-022",
        "numero": 22,
        "subtopico": "Ambiguidade em grupo nominal",
        "dificuldade": "media",
        "pergunta": "Na frase “A escola convocou os responsáveis pelos alunos ausentes”, a palavra “ausentes” liga-se, pela estrutura mais natural, a",
        "alternativas": [
            "“escola”.",
            "“alunos”.",
            "“responsáveis”.",
            "“convocou”.",
            "“pelos”."
        ],
        "correta": 1,
        "feedbackAcerto": "O adjetivo “ausentes” está no masculino plural e se associa naturalmente ao substantivo “alunos”, também masculino plural.",
        "feedbackErro": "Questões estruturais também exigem identificar a ligação mais provável entre termos dentro do grupo nominal.",
        "analiseAlternativas": [
            "Incorreta. Gênero e posição não sustentam essa ligação.",
            "Correta. É o referente estrutural mais natural.",
            "Incorreta. “responsáveis” também é masculino plural, mas o encaixe imediato “alunos ausentes” forma a unidade mais direta.",
            "Incorreta. Adjetivo não modifica verbo nesse uso.",
            "Incorreta. Preposição não é o núcleo nominal modificado."
        ],
        "dicaBanca": "Observe proximidade, concordância e organização interna do sintagma.",
        "pegadinha": "Quando dois termos concordam, a posição ainda ajuda a definir a leitura mais natural.",
        "memorizar2026": "Leia por blocos: “os responsáveis” + “pelos alunos ausentes”.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-023",
        "numero": 23,
        "subtopico": "Paralelismo com “tanto... quanto”",
        "dificuldade": "media",
        "pergunta": "A frase que apresenta paralelismo adequado com a correlação “tanto... quanto” é",
        "alternativas": [
            "A escola tanto ampliou a biblioteca quanto a reforma do laboratório.",
            "Tanto a escola ampliou a biblioteca quanto o laboratório foi reformado por ela.",
            "A escola ampliou tanto a biblioteca quanto o laboratório.",
            "A escola tanto a biblioteca ampliou quanto reformando o laboratório.",
            "Tanto a ampliação da biblioteca quanto reformou o laboratório foram importantes."
        ],
        "correta": 2,
        "feedbackAcerto": "Os dois termos correlacionados — “a biblioteca” e “o laboratório” — têm a mesma função e a mesma forma nominal.",
        "feedbackErro": "As demais opções coordenam estruturas de naturezas diferentes ou apresentam construção quebrada.",
        "analiseAlternativas": [
            "Incorreta. Verbo de um lado e sintagma nominal do outro.",
            "Incorreta. Alterna voz ativa e passiva sem paralelismo.",
            "Correta. Estruturas equivalentes.",
            "Incorreta. Mistura forma finita e gerúndio.",
            "Incorreta. Nome no primeiro membro e verbo finito no segundo."
        ],
        "dicaBanca": "Identifique exatamente quais dois elementos o par correlativo está ligando.",
        "pegadinha": "“Tanto... quanto” correto exige membros realmente comparáveis.",
        "memorizar2026": "Correlação = simetria entre os elementos conectados.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-024",
        "numero": 24,
        "subtopico": "Comparação temporal defeituosa",
        "dificuldade": "alta",
        "pergunta": "A frase “Depois do curso, o professor está mais preparado que no ano passado” pode ser aprimorada porque compara uma pessoa com um período. A forma mais precisa é",
        "alternativas": [
            "Depois do curso, o professor está mais preparado que o ano passado.",
            "Depois do curso, o professor está mais preparado do que no ano passado, a escola.",
            "No ano passado, o professor e o curso eram menos preparados.",
            "Depois do curso, mais preparado, o professor do que o ano passado.",
            "Depois do curso, o professor está mais preparado do que estava no ano passado."
        ],
        "correta": 4,
        "feedbackAcerto": "A inclusão de “estava” explicita que se compara o estado atual do professor com seu estado anterior.",
        "feedbackErro": "O original é compreensível, mas a forma completa deixa o paralelismo lógico da comparação mais nítido.",
        "analiseAlternativas": [
            "Incorreta. Mantém pessoa versus período.",
            "Incorreta. Acrescenta termo desconectado.",
            "Incorreta. Muda o sentido e atribui “preparo” ao curso.",
            "Incorreta. Estrutura fragmentada.",
            "Correta. Compara dois estados do mesmo referente."
        ],
        "dicaBanca": "Complete mentalmente a comparação e verifique se os dois polos são equivalentes.",
        "pegadinha": "Elipse excessiva pode esconder comparação logicamente defeituosa.",
        "memorizar2026": "Compare estado com estado: “mais... do que estava...”.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-PEF-025",
        "numero": 25,
        "subtopico": "Reescritura integrada",
        "dificuldade": "alta",
        "pergunta": "Um comunicado foi redigido assim: “A direção informou aos professores e responsáveis que eles deverão atualizar os dados e a entrega dos documentos até sexta-feira.” A reescritura mais clara e estruturalmente equilibrada é",
        "alternativas": [
            "A direção informou que professores e responsáveis deverão atualizar os dados e entregar os documentos até sexta-feira.",
            "A direção informou aos professores e responsáveis que eles deverão atualizar os dados e a entrega até sexta-feira.",
            "Professores e responsáveis, a direção informou-lhes atualizar os dados e documentos entregues.",
            "A direção informou aos professores e responsáveis: atualização dos dados e entregar documentos até sexta-feira.",
            "A direção, que informou aos professores e responsáveis, eles deverão atualizar dados e entrega de documentos."
        ],
        "correta": 0,
        "feedbackAcerto": "A alternativa explicita o sujeito da obrigação e coordena dois infinitivos: atualizar e entregar.",
        "feedbackErro": "O original combina pronome potencialmente ambíguo com quebra de paralelismo entre “atualizar” e “a entrega”.",
        "analiseAlternativas": [
            "Correta. Resolve referência e paralelismo.",
            "Incorreta. Mantém a quebra entre verbo e nome.",
            "Incorreta. Construção truncada.",
            "Incorreta. Mistura sintagma nominal e infinitivo.",
            "Incorreta. Duplica o sujeito e rompe a construção."
        ],
        "dicaBanca": "Nas questões mais difíceis, a FGV pode juntar dois defeitos na mesma frase. Corrija um sem criar outro.",
        "pegadinha": "Reescritura perfeita não é só “mais elegante”: precisa preservar conteúdo e reorganizar a estrutura.",
        "memorizar2026": "Correção integrada: referente claro + paralelismo + sentido preservado.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV sobre ambiguidade, paralelismo, pleonasmo, reescritura e estrutura frasal; Edital SEDUC-PA 2026."
    }
];

    window.seducLinguaPortuguesaProblemasEstruturaisFrases2026 = banco;
})();
