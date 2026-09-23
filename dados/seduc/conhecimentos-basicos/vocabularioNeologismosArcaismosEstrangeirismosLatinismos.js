/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 21: Vocabulário
   Neologismos, arcaísmos, estrangeirismos e latinismos.
   25 questões autorais calibradas pelo edital e pelo padrão FGV.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-LP-VOC-001",
        "numero": 1,
        "subtopico": "Neologismo — conceito",
        "dificuldade": "media",
        "pergunta": "Assinale a afirmativa correta sobre neologismos.",
        "alternativas": [
            "São palavras ou sentidos novos que surgem para atender necessidades expressivas, sociais, culturais ou tecnológicas.",
            "São necessariamente palavras estrangeiras ainda não adaptadas ao português.",
            "São palavras antigas que deixaram de ser usadas.",
            "São apenas expressões latinas empregadas em textos formais.",
            "São erros de linguagem que ainda não foram corrigidos pelos dicionários."
        ],
        "correta": 0,
        "feedbackAcerto": "Neologismo pode ser uma forma lexical nova ou um novo sentido atribuído a palavra já existente.",
        "feedbackErro": "Neologismo está ligado à novidade lexical ou semântica; não se confunde obrigatoriamente com estrangeirismo nem com erro.",
        "analiseAlternativas": [
            "Correta. A definição contempla criação formal e inovação de sentido.",
            "Incorreta. Um estrangeirismo pode funcionar como neologismo, mas as categorias não são equivalentes.",
            "Incorreta. Isso caracteriza arcaísmo.",
            "Incorreta. Isso caracteriza latinismo.",
            "Incorreta. Neologismo pode integrar legitimamente a língua."
        ],
        "dicaBanca": "A FGV costuma cobrar o fenômeno pelo funcionamento no contexto, não apenas por definição.",
        "pegadinha": "Palavra nova ≠ necessariamente estrangeirismo.",
        "memorizar2026": "Neologismo = novidade lexical ou semântica.",
        "fonte": "Edital SEDUC-PA 2026 — Vocabulário: neologismos, arcaísmos, estrangeirismos, latinismos; padrão FGV."
    },
    {
        "id": "SEDUC-LP-VOC-002",
        "numero": 2,
        "subtopico": "Neologismo formal",
        "dificuldade": "media",
        "pergunta": "Em um texto contemporâneo, o verbo “uberizar” é usado com o sentido de organizar uma atividade segundo um modelo de trabalho mediado por plataformas digitais. Nesse emprego, “uberizar” exemplifica principalmente",
        "alternativas": [
            "arcaísmo.",
            "neologismo formal, pela criação de uma nova palavra a partir de uma base já conhecida.",
            "latinismo.",
            "regionalismo obrigatório.",
            "simples flexão do substantivo “Uber”."
        ],
        "correta": 1,
        "feedbackAcerto": "Há criação lexical com novo verbo derivado de uma base conhecida.",
        "feedbackErro": "A forma foi criada e passou a designar uma realidade contemporânea; isso caracteriza inovação lexical.",
        "analiseAlternativas": [
            "Incorreta. Não é palavra antiga em desuso.",
            "Correta. Há criação formal de novo vocábulo.",
            "Incorreta. Não é expressão de origem latina.",
            "Incorreta. O uso não depende de região específica.",
            "Incorreta. Trata-se de formação lexical, não flexão."
        ],
        "dicaBanca": "A FGV pode apresentar vocábulo recente em texto de imprensa e perguntar seu processo de renovação lexical.",
        "pegadinha": "Neologismo formal cria nova forma; neologismo semântico cria novo sentido para forma já existente.",
        "memorizar2026": "Formal = nova forma lexical.",
        "fonte": "Edital SEDUC-PA 2026; FGV — cobrança contextual de neologismos."
    },
    {
        "id": "SEDUC-LP-VOC-003",
        "numero": 3,
        "subtopico": "Neologismo semântico",
        "dificuldade": "alta",
        "pergunta": "Na informática, “nuvem” passou a designar também um ambiente remoto de armazenamento e processamento de dados. Esse uso exemplifica",
        "alternativas": [
            "arcaísmo lexical.",
            "estrangeirismo não adaptado.",
            "neologismo semântico, pois uma palavra existente recebe um novo sentido.",
            "latinismo técnico.",
            "redução vocabular por abreviação."
        ],
        "correta": 2,
        "feedbackAcerto": "A forma “nuvem” já existia; a inovação está no novo significado tecnológico.",
        "feedbackErro": "Observe se houve criação de nova forma ou ampliação de sentido de forma já existente.",
        "analiseAlternativas": [
            "Incorreta. O termo continua atual.",
            "Incorreta. A palavra é portuguesa.",
            "Correta. Há expansão semântica.",
            "Incorreta. Não é expressão latina.",
            "Incorreta. Não há redução gráfica."
        ],
        "dicaBanca": "A distinção formal x semântico pode aparecer misturada a textos sobre tecnologia.",
        "pegadinha": "Novidade de sentido também é neologismo.",
        "memorizar2026": "Semântico = palavra antiga, sentido novo.",
        "fonte": "Edital SEDUC-PA 2026 — neologismos."
    },
    {
        "id": "SEDUC-LP-VOC-004",
        "numero": 4,
        "subtopico": "Categorias que se sobrepõem",
        "dificuldade": "alta",
        "pergunta": "Uma palavra estrangeira recém-incorporada ao português pode, em determinado momento histórico, ser classificada simultaneamente como",
        "alternativas": [
            "arcaísmo e latinismo obrigatoriamente.",
            "regionalismo e antônimo.",
            "latinismo e desinência.",
            "estrangeirismo e neologismo, se a questão focalizar tanto sua origem externa quanto sua novidade no léxico.",
            "sinônimo e hiperônimo necessariamente."
        ],
        "correta": 3,
        "feedbackAcerto": "As classificações podem focalizar aspectos diferentes: origem estrangeira e novidade lexical podem coexistir.",
        "feedbackErro": "Não trate todas as categorias lexicais como compartimentos absolutamente exclusivos.",
        "analiseAlternativas": [
            "Incorreta. Arcaísmo pressupõe desuso/antiguidade.",
            "Incorreta. Não há relação necessária.",
            "Incorreta. Desinência é categoria morfológica.",
            "Correta. Os critérios podem se sobrepor.",
            "Incorreta. Não há necessidade de relações semânticas desse tipo."
        ],
        "dicaBanca": "Leia o comando: a FGV pode perguntar pelo aspecto predominante que está sendo analisado.",
        "pegadinha": "Estrangeirismo e neologismo não são sempre mutuamente exclusivos.",
        "memorizar2026": "Classificação depende do critério focalizado.",
        "fonte": "Edital SEDUC-PA 2026; análise lexicológica contextual."
    },
    {
        "id": "SEDUC-LP-VOC-005",
        "numero": 5,
        "subtopico": "Arcaísmo — conceito",
        "dificuldade": "media",
        "pergunta": "A palavra “outrossim”, hoje pouco frequente na comunicação cotidiana e associada a registros antigos ou muito formais, é exemplo de",
        "alternativas": [
            "neologismo.",
            "estrangeirismo.",
            "sigla.",
            "latinismo obrigatório.",
            "arcaísmo ou vocábulo de uso arcaizante, conforme o contexto."
        ],
        "correta": 4,
        "feedbackAcerto": "Arcaísmos são formas antigas, em desuso ou de frequência muito reduzida na língua corrente, embora possam sobreviver em registros específicos.",
        "feedbackErro": "O traço decisivo é a relação com um estágio antigo ou com uso hoje pouco corrente.",
        "analiseAlternativas": [
            "Incorreta. Não é novidade lexical.",
            "Incorreta. Não é empréstimo estrangeiro recente.",
            "Incorreta. Não é abreviação por iniciais.",
            "Incorreta. A origem histórica não determina aqui a categoria cobrada.",
            "Correta. O uso é arcaizante."
        ],
        "dicaBanca": "A FGV pode apresentar arcaísmo em texto literário ou histórico e perguntar seu efeito estilístico.",
        "pegadinha": "Arcaísmo não significa palavra “errada”.",
        "memorizar2026": "Arcaísmo = forma antiga ou em desuso na língua corrente.",
        "fonte": "Edital SEDUC-PA 2026 — arcaísmos."
    },
    {
        "id": "SEDUC-LP-VOC-006",
        "numero": 6,
        "subtopico": "Arcaísmo e efeito de sentido",
        "dificuldade": "alta",
        "pergunta": "Em um romance histórico, o narrador emprega “vossa mercê” em diálogos ambientados em séculos passados. O recurso contribui principalmente para",
        "alternativas": [
            "reconstituir linguisticamente a época e produzir efeito de ambientação histórica.",
            "modernizar deliberadamente o vocabulário.",
            "introduzir um estrangeirismo contemporâneo.",
            "eliminar marcas de tempo da narrativa.",
            "substituir um termo técnico por equivalente científico."
        ],
        "correta": 0,
        "feedbackAcerto": "O emprego de forma antiga pode colaborar para caracterizar época, personagem e atmosfera textual.",
        "feedbackErro": "A análise deve considerar por que uma forma antiga foi escolhida em determinado gênero e situação narrativa.",
        "analiseAlternativas": [
            "Correta. Há efeito de ambientação histórica.",
            "Incorreta. O movimento é o oposto.",
            "Incorreta. Não se trata de termo importado contemporâneo.",
            "Incorreta. A marca temporal é reforçada.",
            "Incorreta. Não há terminologia científica."
        ],
        "dicaBanca": "FGV valoriza a função textual do vocabulário, não apenas o rótulo.",
        "pegadinha": "Arcaísmo pode ser intencional e estilisticamente funcional.",
        "memorizar2026": "Arcaísmo em literatura pode construir época e voz.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de efeito de sentido."
    },
    {
        "id": "SEDUC-LP-VOC-007",
        "numero": 7,
        "subtopico": "Arcaísmo x erro",
        "dificuldade": "media",
        "pergunta": "Assinale a afirmativa correta.",
        "alternativas": [
            "Todo arcaísmo deve ser tratado como erro gramatical.",
            "Uma forma arcaica pode ser inadequada em certa situação atual, mas ser legítima em texto histórico, jurídico antigo ou construção estilística.",
            "Arcaísmo é sinônimo de estrangeirismo.",
            "Palavras arcaicas não aparecem em textos literários.",
            "Uma palavra só é arcaísmo se tiver origem latina."
        ],
        "correta": 1,
        "feedbackAcerto": "Adequação depende do contexto; uma forma antiga pode ter função legítima em determinados gêneros.",
        "feedbackErro": "A classificação histórica do vocábulo não equivale automaticamente a julgamento de erro.",
        "analiseAlternativas": [
            "Incorreta. Desuso não é sinônimo de erro.",
            "Correta. O contexto determina a adequação.",
            "Incorreta. Os critérios são diferentes.",
            "Incorreta. Literatura frequentemente mobiliza arcaísmos.",
            "Incorreta. Arcaísmo não é definido pela língua de origem."
        ],
        "dicaBanca": "Evite alternativas absolutas do tipo “todo”, “sempre”, “nunca”.",
        "pegadinha": "Arcaísmo = informação histórica/uso; erro = julgamento normativo.",
        "memorizar2026": "Antigo não significa necessariamente incorreto.",
        "fonte": "Edital SEDUC-PA 2026 — arcaísmos."
    },
    {
        "id": "SEDUC-LP-VOC-008",
        "numero": 8,
        "subtopico": "Estrangeirismo — conceito",
        "dificuldade": "media",
        "pergunta": "A palavra “software”, empregada em português mantendo sua forma gráfica estrangeira, exemplifica",
        "alternativas": [
            "arcaísmo.",
            "latinismo jurídico.",
            "estrangeirismo não adaptado.",
            "derivação regressiva.",
            "desinência nominal."
        ],
        "correta": 2,
        "feedbackAcerto": "O vocábulo foi incorporado de outra língua sem adaptação gráfica relevante.",
        "feedbackErro": "A questão focaliza a origem estrangeira e a manutenção da forma original.",
        "analiseAlternativas": [
            "Incorreta. É vocábulo contemporâneo.",
            "Incorreta. Não é expressão latina.",
            "Correta. É estrangeirismo não adaptado.",
            "Incorreta. Não há derivação por redução.",
            "Incorreta. Não é morfema flexional."
        ],
        "dicaBanca": "A FGV pode cobrar identificação direta ou adequação do estrangeirismo ao contexto.",
        "pegadinha": "Estrangeirismo não adaptado costuma manter grafia estrangeira.",
        "memorizar2026": "software, feedback, design, delivery, marketing = formas estrangeiras não adaptadas.",
        "fonte": "Edital SEDUC-PA 2026 — estrangeirismos."
    },
    {
        "id": "SEDUC-LP-VOC-009",
        "numero": 9,
        "subtopico": "Estrangeirismo adaptado",
        "dificuldade": "media",
        "pergunta": "Qual palavra exemplifica melhor um empréstimo estrangeiro já adaptado à grafia do português?",
        "alternativas": [
            "software.",
            "marketing.",
            "feedback.",
            "futebol.",
            "design."
        ],
        "correta": 3,
        "feedbackAcerto": "“Futebol” é forma aportuguesada do inglês football.",
        "feedbackErro": "Procure a palavra cuja forma foi adaptada às convenções gráficas e fonológicas do português.",
        "analiseAlternativas": [
            "Incorreta. Mantém forma estrangeira.",
            "Incorreta. Mantém forma estrangeira.",
            "Incorreta. Mantém forma estrangeira.",
            "Correta. É empréstimo adaptado.",
            "Incorreta. Mantém forma estrangeira."
        ],
        "dicaBanca": "O contraste adaptado x não adaptado pode ser cobrado pela própria grafia.",
        "pegadinha": "Nem todo empréstimo lexical mantém a forma original.",
        "memorizar2026": "Adaptados: futebol, xampu, estresse, uísque, clube.",
        "fonte": "Edital SEDUC-PA 2026 — estrangeirismos; ortografia lexical."
    },
    {
        "id": "SEDUC-LP-VOC-010",
        "numero": 10,
        "subtopico": "Estrangeirismo e adequação",
        "dificuldade": "alta",
        "pergunta": "Em um manual destinado ao público geral, o redator substitui “deadline” por “prazo final”. A mudança pode ser considerada adequada porque",
        "alternativas": [
            "todo estrangeirismo é proibido em português.",
            "nenhuma palavra inglesa pode aparecer em texto formal.",
            "“deadline” é necessariamente arcaísmo.",
            "“prazo final” é um latinismo equivalente.",
            "a opção em português pode aumentar a transparência para o público, sem que isso implique considerar todo estrangeirismo incorreto."
        ],
        "correta": 4,
        "feedbackAcerto": "A adequação lexical depende de público, gênero e finalidade; usar equivalente claro pode favorecer compreensão.",
        "feedbackErro": "A questão não pede condenação absoluta de estrangeirismos, mas avaliação comunicativa.",
        "analiseAlternativas": [
            "Incorreta. Não existe proibição geral.",
            "Incorreta. Há estrangeirismos consolidados em registros formais.",
            "Incorreta. Trata-se de estrangeirismo.",
            "Incorreta. “prazo final” não é latinismo.",
            "Correta. A escolha pode ser mais acessível no contexto."
        ],
        "dicaBanca": "A FGV tende a privilegiar adequação ao contexto em vez de purismo linguístico.",
        "pegadinha": "Estrangeirismo ≠ erro automático.",
        "memorizar2026": "Avalie público + gênero + finalidade + clareza.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de adequação vocabular."
    },
    {
        "id": "SEDUC-LP-VOC-011",
        "numero": 11,
        "subtopico": "Latinismo — ad hoc",
        "dificuldade": "media",
        "pergunta": "Na frase “Foi criada uma comissão ad hoc para analisar o caso”, a expressão latina “ad hoc” significa",
        "alternativas": [
            "para isso, para essa finalidade específica.",
            "depois disso.",
            "sem qualquer planejamento.",
            "em segredo.",
            "por acaso."
        ],
        "correta": 0,
        "feedbackAcerto": "“Ad hoc” significa literalmente “para isto” e designa algo criado ou destinado a uma finalidade específica.",
        "feedbackErro": "Latinismos devem ser reconhecidos pelo significado convencional da expressão.",
        "analiseAlternativas": [
            "Correta. É o equivalente adequado.",
            "Incorreta. Não indica posterioridade.",
            "Incorreta. Pode haver planejamento.",
            "Incorreta. Não significa sigilo.",
            "Incorreta. Não indica casualidade."
        ],
        "dicaBanca": "A FGV já cobrou equivalentes portugueses de latinismos em prova objetiva.",
        "pegadinha": "Não tente deduzir livremente; memorize as expressões mais frequentes.",
        "memorizar2026": "ad hoc = para isso / para finalidade específica.",
        "fonte": "FGV — cobrança de latinismos; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-VOC-012",
        "numero": 12,
        "subtopico": "Latinismo — in loco",
        "dificuldade": "media",
        "pergunta": "Em “A equipe realizou a inspeção in loco”, a expressão “in loco” equivale a",
        "alternativas": [
            "em caráter provisório.",
            "no local.",
            "em hipótese alguma.",
            "por escrito.",
            "em conjunto."
        ],
        "correta": 1,
        "feedbackAcerto": "“In loco” é usado com o sentido de “no próprio local”.",
        "feedbackErro": "Associe a expressão ao contexto de presença física no lugar do fato.",
        "analiseAlternativas": [
            "Incorreta. Isso se aproxima de “pro tempore”.",
            "Correta. É o equivalente usual.",
            "Incorreta. Não expressa negação.",
            "Incorreta. Não se refere ao meio escrito.",
            "Incorreta. Não indica coletividade."
        ],
        "dicaBanca": "FGV gosta de pedir o equivalente semântico correto do latinismo.",
        "pegadinha": "in loco ≠ online, remotamente ou por documento.",
        "memorizar2026": "in loco = no local.",
        "fonte": "Edital SEDUC-PA 2026 — latinismos; padrão FGV."
    },
    {
        "id": "SEDUC-LP-VOC-013",
        "numero": 13,
        "subtopico": "Latinismo — status quo",
        "dificuldade": "media",
        "pergunta": "Na frase “A proposta pretende alterar o status quo da instituição”, a expressão “status quo” refere-se",
        "alternativas": [
            "ao texto publicado depois da decisão.",
            "à mudança rápida de regras.",
            "ao estado atual das coisas.",
            "à opinião individual do autor.",
            "ao local físico da instituição."
        ],
        "correta": 2,
        "feedbackAcerto": "“Status quo” designa o estado ou situação vigente.",
        "feedbackErro": "Pense na expressão como referência à situação existente antes da mudança.",
        "analiseAlternativas": [
            "Incorreta. Não é documento.",
            "Incorreta. É justamente o que se pretende alterar.",
            "Correta. Refere-se à situação vigente.",
            "Incorreta. Não é opinião individual.",
            "Incorreta. Não indica lugar."
        ],
        "dicaBanca": "Latinismos podem aparecer em textos jornalísticos, jurídicos e administrativos.",
        "pegadinha": "status quo = situação atual, não mudança.",
        "memorizar2026": "status quo = estado atual das coisas.",
        "fonte": "Edital SEDUC-PA 2026 — latinismos."
    },
    {
        "id": "SEDUC-LP-VOC-014",
        "numero": 14,
        "subtopico": "Latinismo — curriculum vitae",
        "dificuldade": "media",
        "pergunta": "A expressão latina “curriculum vitae”, em contexto profissional, refere-se",
        "alternativas": [
            "a uma decisão provisória.",
            "ao local de uma atividade.",
            "a uma hipótese formulada anteriormente.",
            "ao histórico de formação e experiências de uma pessoa.",
            "a uma citação indireta de outro autor."
        ],
        "correta": 3,
        "feedbackAcerto": "“Curriculum vitae” designa o registro de formação, experiência e qualificações.",
        "feedbackErro": "Trata-se de expressão latina consolidada no contexto acadêmico e profissional.",
        "analiseAlternativas": [
            "Incorreta. Não é “pro tempore”.",
            "Incorreta. Não é “in loco”.",
            "Incorreta. Não é “a priori”.",
            "Correta. Esse é o sentido consagrado.",
            "Incorreta. Isso se relacionaria a “apud”."
        ],
        "dicaBanca": "Observe o domínio de uso da expressão para inferir seu sentido.",
        "pegadinha": "Latinismos não aparecem apenas no Direito.",
        "memorizar2026": "curriculum vitae = histórico de vida acadêmica/profissional.",
        "fonte": "Edital SEDUC-PA 2026 — latinismos."
    },
    {
        "id": "SEDUC-LP-VOC-015",
        "numero": 15,
        "subtopico": "Latinismo — a priori",
        "dificuldade": "media",
        "pergunta": "Em “A priori, não há motivo para cancelar a atividade”, “a priori” significa, no contexto,",
        "alternativas": [
            "de maneira definitiva.",
            "após a análise dos resultados.",
            "no próprio local.",
            "em memória de alguém.",
            "de antemão, antes de exame posterior ou experiência mais completa."
        ],
        "correta": 4,
        "feedbackAcerto": "“A priori” indica consideração anterior à verificação posterior ou à experiência específica.",
        "feedbackErro": "O contraste clássico é “a priori” x “a posteriori”.",
        "analiseAlternativas": [
            "Incorreta. Não implica certeza definitiva.",
            "Incorreta. Isso se aproxima de “a posteriori”.",
            "Incorreta. Isso é “in loco”.",
            "Incorreta. Isso é “in memoriam”.",
            "Correta. É o valor da expressão."
        ],
        "dicaBanca": "Pares latinos são alvos naturais de distratores invertidos.",
        "pegadinha": "a priori = antes; a posteriori = depois, com base no que foi observado.",
        "memorizar2026": "a priori = previamente.",
        "fonte": "Edital SEDUC-PA 2026 — latinismos."
    },
    {
        "id": "SEDUC-LP-VOC-016",
        "numero": 16,
        "subtopico": "Latinismo — a posteriori",
        "dificuldade": "media",
        "pergunta": "A expressão “a posteriori” é empregada corretamente em",
        "alternativas": [
            "“A conclusão foi formulada a posteriori, após a análise dos dados coletados.”",
            "“A equipe chegou a posteriori ao local, isto é, fisicamente presente.”",
            "“O documento foi escrito a posteriori, isto é, em latim.”",
            "“O servidor ocupou o cargo a posteriori, isto é, temporariamente.”",
            "“O relatório foi feito a posteriori, isto é, em nome de outra pessoa.”"
        ],
        "correta": 0,
        "feedbackAcerto": "“A posteriori” indica conclusão ou conhecimento estabelecido depois, com base em dados/experiência.",
        "feedbackErro": "Procure a alternativa em que a expressão está associada à ideia de posterioridade e observação.",
        "analiseAlternativas": [
            "Correta. O uso está adequado.",
            "Incorreta. Presença física é “in loco”.",
            "Incorreta. A expressão não significa “em latim”.",
            "Incorreta. Temporário é “pro tempore”.",
            "Incorreta. Não significa representação."
        ],
        "dicaBanca": "Questões de latinismo podem cobrar emprego correto em frase.",
        "pegadinha": "Não escolha apenas porque a frase “soa formal”.",
        "memorizar2026": "a posteriori = depois, a partir de fatos/experiência.",
        "fonte": "Edital SEDUC-PA 2026 — latinismos."
    },
    {
        "id": "SEDUC-LP-VOC-017",
        "numero": 17,
        "subtopico": "Latinismo — et al.",
        "dificuldade": "alta",
        "pergunta": "Em referências acadêmicas, a forma latina “et al.” é usada normalmente para",
        "alternativas": [
            "indicar local de publicação.",
            "indicar a existência de outros autores além do primeiro ou dos autores explicitados.",
            "marcar uma citação de citação.",
            "informar que o texto foi publicado anonimamente.",
            "substituir o título da obra."
        ],
        "correta": 1,
        "feedbackAcerto": "“Et al.” é abreviação de expressão latina equivalente a “e outros”.",
        "feedbackErro": "Diferencie “et al.” de “apud”, que se associa à citação de uma fonte por intermédio de outra.",
        "analiseAlternativas": [
            "Incorreta. Não indica lugar.",
            "Correta. Significa “e outros”.",
            "Incorreta. Isso é uso associado a “apud”.",
            "Incorreta. Não indica anonimato.",
            "Incorreta. Não substitui título."
        ],
        "dicaBanca": "Latinismos acadêmicos podem ser cobrados pelo uso prático.",
        "pegadinha": "et al. ≠ apud.",
        "memorizar2026": "et al. = e outros.",
        "fonte": "Edital SEDUC-PA 2026 — latinismos."
    },
    {
        "id": "SEDUC-LP-VOC-018",
        "numero": 18,
        "subtopico": "Latinismo — apud",
        "dificuldade": "alta",
        "pergunta": "Em trabalhos acadêmicos, o termo latino “apud” costuma indicar",
        "alternativas": [
            "uma palavra antiga em desuso.",
            "uma conclusão feita antes da pesquisa.",
            "uma citação de um autor encontrada em obra de outro autor.",
            "uma publicação sem data.",
            "um termo estrangeiro aportuguesado."
        ],
        "correta": 2,
        "feedbackAcerto": "“Apud” é empregado em referência a citação de citação, conforme as normas e práticas bibliográficas aplicáveis.",
        "feedbackErro": "Associe a expressão ao uso acadêmico de fonte intermediária.",
        "analiseAlternativas": [
            "Incorreta. Isso seria arcaísmo.",
            "Incorreta. Isso é “a priori”.",
            "Correta. Indica fonte citada por intermédio de outra.",
            "Incorreta. Não significa ausência de data.",
            "Incorreta. Não é processo de adaptação."
        ],
        "dicaBanca": "Contextos acadêmicos favorecem cobrança de latinismos funcionais.",
        "pegadinha": "apud é relação entre fontes, não simples plural de autores.",
        "memorizar2026": "apud = citado por / conforme citado em.",
        "fonte": "Edital SEDUC-PA 2026 — latinismos."
    },
    {
        "id": "SEDUC-LP-VOC-019",
        "numero": 19,
        "subtopico": "Identificação integrada — padrão FGV",
        "dificuldade": "alta",
        "pergunta": "Assinale a alternativa em que a classificação do vocábulo ou expressão está correta.",
        "alternativas": [
            "Arcaísmo: “software”.",
            "Neologismo: “outrossim”.",
            "Latinismo: “feedback”.",
            "Estrangeirismo: “marketing”.",
            "Arcaísmo: “ad hoc”."
        ],
        "correta": 3,
        "feedbackAcerto": "“Marketing” é palavra de origem inglesa usada em português e constitui estrangeirismo.",
        "feedbackErro": "Compare o critério de cada categoria: novidade, antiguidade/desuso, origem estrangeira ou origem latina.",
        "analiseAlternativas": [
            "Incorreta. “software” é estrangeirismo.",
            "Incorreta. “outrossim” é forma arcaizante.",
            "Incorreta. “feedback” é estrangeirismo de origem inglesa.",
            "Correta. “marketing” é estrangeirismo.",
            "Incorreta. “ad hoc” é latinismo."
        ],
        "dicaBanca": "A FGV já usou exatamente o formato de apresentar categorias lexicais e pedir a identificação correta.",
        "pegadinha": "Não deixe a formalidade da palavra fazer você confundir latinismo com arcaísmo.",
        "memorizar2026": "Classifique pelo critério central.",
        "fonte": "FGV — questão objetiva sobre tipos de vocábulo; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-VOC-020",
        "numero": 20,
        "subtopico": "Neologismo em texto — padrão FGV",
        "dificuldade": "alta",
        "pergunta": "Um cronista cria deliberadamente uma palavra inexistente nos usos comuns, e essa forma passa a circular entre leitores por algum tempo. A situação exemplifica",
        "alternativas": [
            "neologismo lexical, cuja aceitação e permanência dependem do uso pela comunidade.",
            "arcaísmo obrigatório.",
            "latinismo culto.",
            "apenas erro ortográfico.",
            "sigla institucional."
        ],
        "correta": 0,
        "feedbackAcerto": "A criação individual pode gerar neologismo; sua difusão e permanência dependem da adoção social.",
        "feedbackErro": "A FGV já explorou em prova para professor a relação entre criação lexical, circulação e aceitação pela comunidade.",
        "analiseAlternativas": [
            "Correta. Há criação nova e possível difusão social.",
            "Incorreta. Arcaísmo é forma antiga.",
            "Incorreta. Não há origem latina necessária.",
            "Incorreta. Criação lexical deliberada não se reduz a erro.",
            "Incorreta. Não é formada por iniciais."
        ],
        "dicaBanca": "A banca pode discutir neologismo por meio de texto teórico ou literário.",
        "pegadinha": "Nem todo neologismo permanece na língua.",
        "memorizar2026": "Criação + circulação + aceitação social determinam a trajetória do neologismo.",
        "fonte": "FGV/SME-SP — prova para professor com questão sobre criação lexical; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-VOC-021",
        "numero": 21,
        "subtopico": "Arcaísmo x regionalismo",
        "dificuldade": "alta",
        "pergunta": "Uma palavra usada atualmente em determinada região do país, embora pouco conhecida em outras áreas, deve ser classificada automaticamente como arcaísmo?",
        "alternativas": [
            "Sim, porque todo uso restrito é antigo.",
            "Não. Restrição geográfica pode caracterizar regionalismo; arcaísmo se relaciona principalmente à antiguidade e ao desuso na língua corrente.",
            "Sim, se a palavra não aparecer em textos oficiais.",
            "Não, porque arcaísmos só existem em latim.",
            "Sim, desde que a palavra seja informal."
        ],
        "correta": 1,
        "feedbackAcerto": "Regionalismo e arcaísmo usam critérios distintos: distribuição geográfica x distribuição histórica/temporal.",
        "feedbackErro": "Não confunda variação diatópica com variação diacrônica.",
        "analiseAlternativas": [
            "Incorreta. Uso regional não implica antiguidade.",
            "Correta. Os critérios são diferentes.",
            "Incorreta. Presença em texto oficial não define arcaísmo.",
            "Incorreta. Arcaísmo pode ter diversas origens.",
            "Incorreta. Informalidade também não define arcaísmo."
        ],
        "dicaBanca": "A FGV pode aproximar categorias vocabulares para testar o critério de classificação.",
        "pegadinha": "Pouco conhecido ≠ necessariamente antigo.",
        "memorizar2026": "Regionalismo = lugar; arcaísmo = tempo/desuso.",
        "fonte": "Edital SEDUC-PA 2026; variação lexical."
    },
    {
        "id": "SEDUC-LP-VOC-022",
        "numero": 22,
        "subtopico": "Empréstimo e adaptação",
        "dificuldade": "media",
        "pergunta": "Assinale o grupo formado apenas por empréstimos lexicalmente adaptados ao português.",
        "alternativas": [
            "software, design, marketing.",
            "feedback, delivery, streaming.",
            "futebol, xampu, estresse.",
            "download, home office, coffee break.",
            "job, briefing, podcast."
        ],
        "correta": 2,
        "feedbackAcerto": "“Futebol”, “xampu” e “estresse” apresentam adaptação às convenções do português.",
        "feedbackErro": "Observe quais itens mantêm a grafia estrangeira e quais foram aportuguesados.",
        "analiseAlternativas": [
            "Incorreta. As formas mantêm grafia estrangeira.",
            "Incorreta. As formas mantêm grafia estrangeira.",
            "Correta. São formas adaptadas.",
            "Incorreta. São formas não adaptadas.",
            "Incorreta. Mantêm formas estrangeiras."
        ],
        "dicaBanca": "A grafia oferece pista importante para distinguir empréstimo adaptado de estrangeirismo não adaptado.",
        "pegadinha": "Adaptação pode ocorrer em grafia, pronúncia e flexão.",
        "memorizar2026": "futebol, xampu, estresse = aportuguesados.",
        "fonte": "Edital SEDUC-PA 2026 — estrangeirismos."
    },
    {
        "id": "SEDUC-LP-VOC-023",
        "numero": 23,
        "subtopico": "Efeito estilístico do vocabulário",
        "dificuldade": "alta",
        "pergunta": "Um autor contemporâneo introduz vários arcaísmos na fala de uma personagem para dar ao discurso um tom solene e antigo. Nesse caso, os arcaísmos",
        "alternativas": [
            "funcionam apenas como falhas de atualização vocabular.",
            "demonstram necessariamente desconhecimento do português moderno.",
            "provam que o texto é jurídico.",
            "participam da caracterização da voz da personagem e do efeito estilístico.",
            "eliminam qualquer possibilidade de compreensão."
        ],
        "correta": 3,
        "feedbackAcerto": "A seleção vocabular ajuda a construir voz, época, registro e efeito expressivo.",
        "feedbackErro": "A análise textual precisa considerar a intenção e o gênero, não apenas a frequência atual das palavras.",
        "analiseAlternativas": [
            "Incorreta. O uso pode ser deliberado.",
            "Incorreta. Pode ser escolha consciente.",
            "Incorreta. Arcaísmo não torna o gênero jurídico.",
            "Correta. Há função estilística e de caracterização.",
            "Incorreta. O contexto pode tornar os termos compreensíveis."
        ],
        "dicaBanca": "A FGV costuma integrar vocabulário e interpretação.",
        "pegadinha": "Uma forma marcada pode ser perfeitamente adequada à intenção do texto.",
        "memorizar2026": "Escolha lexical também caracteriza voz e registro.",
        "fonte": "Edital SEDUC-PA 2026; padrão FGV de efeito de sentido."
    },
    {
        "id": "SEDUC-LP-VOC-024",
        "numero": 24,
        "subtopico": "Latinismo — ex abrupto",
        "dificuldade": "alta",
        "pergunta": "Na frase “Ex abrupto, o palestrante encerrou sua exposição e saiu da sala”, o latinismo “ex abrupto” equivale a",
        "alternativas": [
            "no mesmo lugar.",
            "de propósito.",
            "por intermédio de outro autor.",
            "antes de qualquer análise.",
            "de repente, bruscamente."
        ],
        "correta": 4,
        "feedbackAcerto": "“Ex abrupto” é empregado com valor de repentinamente, de modo brusco.",
        "feedbackErro": "A expressão foi cobrada pela FGV em item sobre equivalência de latinismos.",
        "analiseAlternativas": [
            "Incorreta. Isso é “in loco”.",
            "Incorreta. Não significa finalidade.",
            "Incorreta. Isso se relaciona a “apud”.",
            "Incorreta. Isso é “a priori”.",
            "Correta. É o equivalente adequado."
        ],
        "dicaBanca": "Memorize latinismos que a FGV já transformou em questão de equivalência.",
        "pegadinha": "A aparência erudita pode induzir a traduções intuitivas erradas.",
        "memorizar2026": "ex abrupto = de repente / bruscamente.",
        "fonte": "FGV — questão oficial sobre latinismos; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-VOC-025",
        "numero": 25,
        "subtopico": "Caso integrador",
        "dificuldade": "alta",
        "pergunta": "Leia: “O relatório, elaborado in loco, descreve como a equipe passou a usar um novo chatbot, enquanto documentos antigos ainda registram formas como outrossim.” A análise correta é",
        "alternativas": [
            "“in loco” é estrangeirismo inglês; “chatbot” é arcaísmo; “outrossim” é neologismo.",
            "“in loco” é arcaísmo; “chatbot” é latinismo; “outrossim” é estrangeirismo.",
            "“in loco” é neologismo; “chatbot” é arcaísmo; “outrossim” é latinismo.",
            "“in loco” é sigla; “chatbot” é latinismo; “outrossim” é regionalismo.",
            "“in loco” é latinismo; “chatbot” pode ser tratado como estrangeirismo e neologismo recente conforme o critério; “outrossim” é forma arcaizante."
        ],
        "correta": 4,
        "feedbackAcerto": "A alternativa distingue origem latina, incorporação recente de termo estrangeiro e uso arcaizante.",
        "feedbackErro": "A questão exige aplicar critérios diferentes ao mesmo trecho: origem, novidade lexical e antiguidade/desuso.",
        "analiseAlternativas": [
            "Incorreta. Todas as classificações foram trocadas.",
            "Incorreta. “in loco” é latinismo e “chatbot” não é expressão latina.",
            "Incorreta. As classificações não correspondem aos critérios.",
            "Incorreta. “in loco” não é sigla.",
            "Correta. A análise respeita os diferentes critérios lexicais."
        ],
        "dicaBanca": "No caso integrador, verifique qual critério cada palavra ativa: novidade, origem estrangeira, origem latina ou desuso.",
        "pegadinha": "Uma palavra pode ter mais de uma classificação pertinente, dependendo da pergunta.",
        "memorizar2026": "FGV: contexto + critério + efeito de sentido.",
        "fonte": "Edital SEDUC-PA 2026; calibrado por questões FGV sobre neologismos, estrangeirismos e latinismos."
    }
];

    window.seducLinguaPortuguesaVocabulario2026 = banco;
})();
