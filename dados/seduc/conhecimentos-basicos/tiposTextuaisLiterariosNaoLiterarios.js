/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 05
   Tipos Textuais • Textos Literários e Não Literários

   O edital SEDUC-PA 2026 cobra:
   "Tipos textuais, características específicas de cada tipo.
    Textos literários e não literários."

   Para o treino de "tipos textuais", este bloco usa também a
   classificação que a FGV explicita repetidamente em outros
   editais de Língua Portuguesa:
   informativo • publicitário • propagandístico • normativo
   • didático • divinatório.

   Essa enumeração é referência recorrente da banca e NÃO é
   apresentada como transcrição literal do edital SEDUC-PA.
   25 questões autorais com feedback por alternativa.
========================================================== */

(function(){
    "use strict";

    const banco =
[
    {
        "id": "SEDUC-LP-TIP-001",
        "numero": 1,
        "subtopico": "Tipo textual x gênero x modo discursivo",
        "dificuldade": "alta",
        "pergunta": "Ao analisar um texto para classificá-lo segundo a tipologia textual, o procedimento mais adequado é",
        "alternativas": [
            "considerar principalmente sua finalidade comunicativa, suas marcas predominantes e o contexto, sem confundir tipo textual com gênero ou modo de organização discursiva.",
            "identificar apenas o suporte em que circula, pois jornal, rede social e livro determinam automaticamente o tipo textual.",
            "usar somente a extensão do texto, classificando textos longos como didáticos e textos curtos como publicitários.",
            "considerar que gênero textual e tipo textual são denominações equivalentes para a mesma categoria.",
            "procurar um único verbo característico e, por ele, definir a classificação do texto inteiro."
        ],
        "correta": 0,
        "feedbackAcerto": "A classificação deve considerar finalidade, destinatário, marcas linguísticas e predominância. Gênero, tipo textual e modo discursivo são categorias relacionadas, mas diferentes.",
        "feedbackErro": "Evite critérios isolados. Suporte, tamanho ou uma única marca linguística não bastam para classificar um texto.",
        "analiseAlternativas": [
            "Correta. Reúne critérios funcionais e linguísticos e evita confundir categorias.",
            "Incorreta. O mesmo suporte pode veicular diferentes tipos de texto.",
            "Incorreta. Extensão não define tipologia.",
            "Incorreta. Gênero e tipo textual não são sinônimos.",
            "Incorreta. Uma marca isolada não determina a função predominante."
        ],
        "dicaBanca": "A FGV costuma explorar a diferença entre finalidade comunicativa, gênero e organização interna do texto.",
        "pegadinha": "Não transforme uma pista linguística em regra absoluta.",
        "memorizar2026": "Tipo textual = finalidade/função predominante; gênero = forma social concreta; modo discursivo = forma de organização.",
        "fonte": "Edital SEDUC-PA 2026; tipologia recorrente explicitada pela FGV em outros editais."
    },
    {
        "id": "SEDUC-LP-TIP-002",
        "numero": 2,
        "subtopico": "Texto informativo",
        "dificuldade": "media",
        "texto": "Segundo o boletim meteorológico, a temperatura mínima registrada em Belém foi de 24 °C, com previsão de chuva ao longo da tarde.",
        "pergunta": "O trecho é predominantemente informativo porque",
        "alternativas": [
            "procura induzir o leitor a comprar um produto relacionado ao clima.",
            "prioriza a transmissão de dados e fatos de interesse do leitor, com função referencial.",
            "estabelece uma obrigação jurídica sobre o comportamento do cidadão.",
            "apresenta previsão baseada em crença ou sistema interpretativo não científico.",
            "organiza o conhecimento para ensinar passo a passo um conteúdo escolar."
        ],
        "correta": 1,
        "feedbackAcerto": "O foco está em comunicar dados e informações verificáveis sobre uma situação.",
        "feedbackErro": "Pergunte qual é a função dominante do trecho. Aqui não se vende, não se regula e não se ensina sistematicamente; informa-se.",
        "analiseAlternativas": [
            "Incorreta. Não há finalidade comercial.",
            "Correta. Predomina a função de informar.",
            "Incorreta. Não há regra ou obrigação.",
            "Incorreta. A previsão meteorológica é de natureza científica, não divinatória.",
            "Incorreta. O trecho não tem organização didática."
        ],
        "dicaBanca": "Texto informativo tende a privilegiar conteúdo referencial, dados, fatos e esclarecimentos.",
        "pegadinha": "Previsão meteorológica não deve ser confundida com texto divinatório.",
        "memorizar2026": "Informativo = informar sobre fatos, dados ou situações.",
        "fonte": "Texto autoral; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-003",
        "numero": 3,
        "subtopico": "Texto publicitário",
        "dificuldade": "media",
        "texto": "Volte às aulas com mais organização. Conheça a nova mochila Farol: leve, resistente e com compartimento para notebook.",
        "pergunta": "O texto é predominantemente publicitário porque",
        "alternativas": [
            "divulga uma ideologia política e busca adesão a uma causa social.",
            "ensina, de forma sistemática, a organização de materiais escolares.",
            "promove um produto e emprega linguagem persuasiva voltada ao consumidor.",
            "estabelece normas obrigatórias para o transporte de notebooks.",
            "apresenta informação neutra e sem intenção de influenciar uma escolha."
        ],
        "correta": 2,
        "feedbackAcerto": "A publicidade busca promover produto, serviço ou marca e persuadir o consumidor.",
        "feedbackErro": "Observe a finalidade comercial e as qualidades destacadas do produto.",
        "analiseAlternativas": [
            "Incorreta. Isso caracterizaria finalidade propagandística.",
            "Incorreta. Não há ensino sistemático.",
            "Correta. Há promoção comercial e persuasão.",
            "Incorreta. Não se trata de norma.",
            "Incorreta. O texto quer influenciar a escolha do leitor."
        ],
        "dicaBanca": "Na distinção recorrente da FGV, publicidade tende ao consumo; propaganda tende à difusão de ideias, valores ou causas.",
        "pegadinha": "A palavra 'campanha' não basta: veja o que está sendo promovido.",
        "memorizar2026": "Publicitário = vender/promover produto, serviço ou marca.",
        "fonte": "Texto autoral; tipologia recorrente FGV."
    },
    {
        "id": "SEDUC-LP-TIP-004",
        "numero": 4,
        "subtopico": "Texto propagandístico",
        "dificuldade": "media",
        "texto": "Vacinar é proteger você e toda a comunidade. Procure a unidade de saúde e mantenha sua caderneta atualizada.",
        "pergunta": "Considerando a finalidade predominante, o texto aproxima-se do tipo propagandístico porque",
        "alternativas": [
            "descreve tecnicamente a composição química de uma vacina.",
            "pretende vender comercialmente um produto de determinada marca.",
            "apenas relata um fato já ocorrido, sem intenção persuasiva.",
            "difunde uma ideia de interesse coletivo e busca adesão a determinado comportamento social.",
            "apresenta uma previsão sobre acontecimentos futuros baseada em crença."
        ],
        "correta": 3,
        "feedbackAcerto": "O texto busca adesão a uma ideia/comportamento de interesse coletivo, característica associada à propaganda.",
        "feedbackErro": "A finalidade não é vender um produto, mas promover uma causa e induzir adesão social.",
        "analiseAlternativas": [
            "Incorreta. Não há descrição científica.",
            "Incorreta. Não há promoção comercial de marca.",
            "Incorreta. Há claramente intenção persuasiva.",
            "Correta. Há difusão de ideia e mobilização social.",
            "Incorreta. Não há caráter divinatório."
        ],
        "dicaBanca": "A FGV pode aproximar propaganda de campanhas sociais, institucionais, ideológicas ou políticas.",
        "pegadinha": "Publicidade e propaganda podem ambas persuadir; diferencie pelo objeto da persuasão.",
        "memorizar2026": "Propagandístico = difundir ideias, valores, causas ou comportamentos.",
        "fonte": "Texto autoral; tipologia recorrente FGV."
    },
    {
        "id": "SEDUC-LP-TIP-005",
        "numero": 5,
        "subtopico": "Texto normativo",
        "dificuldade": "media",
        "texto": "É proibida a entrada de pessoas não autorizadas nesta área. Os visitantes deverão apresentar identificação na portaria.",
        "pergunta": "O texto é predominantemente normativo porque",
        "alternativas": [
            "narra um episódio ocorrido na portaria.",
            "descreve a aparência dos visitantes.",
            "explica historicamente a origem da regra.",
            "procura vender um serviço de identificação.",
            "estabelece regra, proibição e dever de conduta."
        ],
        "correta": 4,
        "feedbackAcerto": "Textos normativos regulam comportamentos por regras, deveres, permissões, proibições ou procedimentos.",
        "feedbackErro": "Observe as expressões 'é proibida' e 'deverão', que estabelecem condutas obrigatórias.",
        "analiseAlternativas": [
            "Incorreta. Não há relato temporal.",
            "Incorreta. Não há descrição.",
            "Incorreta. A origem da norma não é explicada.",
            "Incorreta. Não existe objetivo comercial.",
            "Correta. O texto regula a conduta do destinatário."
        ],
        "dicaBanca": "Marcas como 'deverá', 'é vedado', 'é permitido', 'fica proibido' e estruturas prescritivas são fortes pistas.",
        "pegadinha": "Imperativo pode aparecer em vários textos; o normativo se reconhece pela função de regular condutas.",
        "memorizar2026": "Normativo = regras, deveres, permissões e proibições.",
        "fonte": "Texto autoral; tipologia recorrente FGV."
    },
    {
        "id": "SEDUC-LP-TIP-006",
        "numero": 6,
        "subtopico": "Texto didático",
        "dificuldade": "media",
        "texto": "A fotossíntese é o processo pelo qual organismos como plantas e algas utilizam energia luminosa para produzir matéria orgânica. Para compreender o processo, observe primeiro a função da clorofila e depois as etapas dependentes de luz.",
        "pergunta": "O caráter didático do trecho decorre principalmente de ele",
        "alternativas": [
            "organizar conceitos e explicações com finalidade de ensinar e facilitar a aprendizagem.",
            "vender um material escolar relacionado à fotossíntese.",
            "regular juridicamente a atividade de laboratório.",
            "fazer previsão não científica sobre o desenvolvimento das plantas.",
            "buscar adesão ideológica a uma causa ambiental."
        ],
        "correta": 0,
        "feedbackAcerto": "O texto didático organiza informações e explicações para ensinar e favorecer a compreensão.",
        "feedbackErro": "Nem todo texto que informa é didático. O didático estrutura o conhecimento com intenção pedagógica.",
        "analiseAlternativas": [
            "Correta. Há definição, sequência explicativa e orientação da aprendizagem.",
            "Incorreta. Não há promoção comercial.",
            "Incorreta. Não há norma jurídica.",
            "Incorreta. Não há previsão divinatória.",
            "Incorreta. Não há campanha ideológica."
        ],
        "dicaBanca": "Definições, exemplos, esquemas, explicações graduadas e atividades são comuns em textos didáticos.",
        "pegadinha": "Informar é parte do texto didático, mas sua finalidade central é ensinar.",
        "memorizar2026": "Didático = ensinar + organizar o conhecimento.",
        "fonte": "Texto autoral; tipologia recorrente FGV."
    },
    {
        "id": "SEDUC-LP-TIP-007",
        "numero": 7,
        "subtopico": "Texto divinatório",
        "dificuldade": "media",
        "texto": "Nesta semana, uma mudança inesperada poderá abrir novos caminhos profissionais. Evite decisões impulsivas e confie mais em sua intuição.",
        "pergunta": "O trecho exemplifica o tipo divinatório porque",
        "alternativas": [
            "apresenta resultados de uma pesquisa estatística sobre emprego.",
            "formula previsões e orientações sobre o futuro com base em um sistema interpretativo não científico.",
            "estabelece regras administrativas de contratação.",
            "vende um serviço por meio de vantagens objetivas e preço promocional.",
            "explica um conceito de psicologia de maneira didática."
        ],
        "correta": 1,
        "feedbackAcerto": "Textos divinatórios fazem previsões ou prognósticos futuros apoiados em sistemas de crença ou interpretação não científica.",
        "feedbackErro": "A presença de futuro, por si só, não basta. Aqui a previsão é apresentada sem base científica verificável.",
        "analiseAlternativas": [
            "Incorreta. Não há dados de pesquisa.",
            "Correta. É a característica central do tipo divinatório.",
            "Incorreta. Não há regra administrativa.",
            "Incorreta. Não há promoção comercial explícita.",
            "Incorreta. O objetivo não é ensinar conceito."
        ],
        "dicaBanca": "Horóscopos, cartas, astrologia e formas semelhantes são exemplos recorrentes.",
        "pegadinha": "Nem toda previsão é divinatória: previsão meteorológica ou projeção estatística podem ter base científica.",
        "memorizar2026": "Divinatório = prever por sistema interpretativo não científico.",
        "fonte": "Texto autoral; tipologia recorrente FGV."
    },
    {
        "id": "SEDUC-LP-TIP-008",
        "numero": 8,
        "subtopico": "Publicidade x propaganda",
        "dificuldade": "alta",
        "pergunta": "A distinção mais útil, no padrão de tipologia frequentemente empregado pela FGV, entre texto publicitário e propagandístico é a de que",
        "alternativas": [
            "o publicitário é sempre informativo, enquanto o propagandístico é sempre literário.",
            "o publicitário só circula em mídia impressa, enquanto o propagandístico só circula na internet.",
            "o publicitário tende a promover consumo de produto, serviço ou marca, enquanto o propagandístico tende a difundir ideias, valores, causas ou comportamentos.",
            "o publicitário não usa persuasão, enquanto o propagandístico depende dela.",
            "o publicitário é obrigatoriamente verbal, enquanto o propagandístico é apenas visual."
        ],
        "correta": 2,
        "feedbackAcerto": "Ambos podem ser persuasivos, mas diferem sobretudo quanto ao objeto e à finalidade da persuasão.",
        "feedbackErro": "Não use suporte, presença de imagem ou persuasão como critério exclusivo; ambos podem compartilhar essas características.",
        "analiseAlternativas": [
            "Incorreta. As categorias não se distinguem dessa forma.",
            "Incorreta. Ambos podem circular em diversos meios.",
            "Correta. É a distinção funcional mais útil.",
            "Incorreta. Publicidade também usa persuasão.",
            "Incorreta. Ambos podem combinar linguagem verbal e visual."
        ],
        "dicaBanca": "Pergunte: está promovendo consumo ou adesão a uma ideia/causa?",
        "pegadinha": "A forma pode ser parecida; a finalidade é o critério decisivo.",
        "memorizar2026": "Publicidade → consumo; propaganda → ideias/valores/causas.",
        "fonte": "Tipologia recorrente em editais FGV."
    },
    {
        "id": "SEDUC-LP-TIP-009",
        "numero": 9,
        "subtopico": "Normativo x injuntivo",
        "dificuldade": "alta",
        "pergunta": "Sobre texto normativo e modo injuntivo, assinale a afirmativa correta.",
        "alternativas": [
            "São expressões rigorosamente sinônimas e sempre designam a mesma categoria de análise.",
            "Um texto normativo jamais utiliza verbos no imperativo.",
            "O modo injuntivo só pode ocorrer em receitas culinárias.",
            "Um texto normativo pode organizar-se por sequências injuntivas, pois a categoria textual e o modo de organização discursiva não são idênticos.",
            "Todo texto injuntivo tem força jurídica obrigatória."
        ],
        "correta": 3,
        "feedbackAcerto": "Um texto normativo pode usar injunção para orientar ou impor condutas, sem que 'normativo' e 'injuntivo' sejam a mesma categoria.",
        "feedbackErro": "O erro comum é confundir função textual com modo de organização.",
        "analiseAlternativas": [
            "Incorreta. São categorias diferentes.",
            "Incorreta. Imperativo pode aparecer em normas.",
            "Incorreta. Injunção ocorre em muitos gêneros.",
            "Correta. Distingue adequadamente tipo e modo.",
            "Incorreta. Conselhos e instruções podem ser injuntivos sem força jurídica."
        ],
        "dicaBanca": "FGV gosta de cruzar categorias: um mesmo texto pode ser normativo e conter modo injuntivo predominante.",
        "pegadinha": "Tipo textual e modo discursivo não são rótulos concorrentes do mesmo nível.",
        "memorizar2026": "Normativo = função de regular; injuntivo = forma de organizar orientação/comando.",
        "fonte": "Edital SEDUC-PA 2026; tipologia recorrente FGV."
    },
    {
        "id": "SEDUC-LP-TIP-010",
        "numero": 10,
        "subtopico": "Informativo x didático",
        "dificuldade": "alta",
        "texto": "O relatório apresenta o conceito de evasão escolar, explica seus principais indicadores, traz exemplos e propõe exercícios para verificar a compreensão.",
        "pergunta": "Ainda que o texto transmita informações, sua organização permite classificá-lo prioritariamente como didático porque",
        "alternativas": [
            "usa qualquer dado numérico, característica exclusiva de materiais didáticos.",
            "possui necessariamente linguagem literária e subjetiva.",
            "pretende apenas registrar fatos sem interferir na aprendizagem do leitor.",
            "apresenta regras jurídicas obrigatórias.",
            "estrutura o conteúdo com explicação, exemplos e atividades voltadas à aprendizagem."
        ],
        "correta": 4,
        "feedbackAcerto": "O texto didático usa informação como matéria-prima, mas a organiza para ensinar.",
        "feedbackErro": "O critério central é a finalidade pedagógica, evidenciada pela explicação graduada e pelos exercícios.",
        "analiseAlternativas": [
            "Incorreta. Dados aparecem em muitos tipos.",
            "Incorreta. Didático não exige linguagem literária.",
            "Incorreta. Há intenção de ensinar.",
            "Incorreta. Não se trata de norma jurídica.",
            "Correta. A organização é pedagógica."
        ],
        "dicaBanca": "Quando informativo e didático parecem próximos, procure a intenção de ensinar e organizar a aprendizagem.",
        "pegadinha": "Todo texto didático informa, mas nem todo informativo é didático.",
        "memorizar2026": "Didático = informação organizada pedagogicamente.",
        "fonte": "Texto autoral; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-011",
        "numero": 11,
        "subtopico": "Texto literário — finalidade estética",
        "dificuldade": "media",
        "texto": "A chuva desenhava caminhos de prata na janela, e a cidade, cansada, parecia adormecer sob um lençol de névoa.",
        "pergunta": "A literariedade do trecho está principalmente associada",
        "alternativas": [
            "ao tratamento estético da linguagem, com imagens e significados que ultrapassam a referência objetiva.",
            "à obrigação de apresentar fatos verificáveis e linguagem estritamente denotativa.",
            "à existência de norma de conduta para o leitor.",
            "à promoção comercial de uma marca.",
            "à organização de conhecimento em etapas didáticas."
        ],
        "correta": 0,
        "feedbackAcerto": "Textos literários tendem a explorar linguagem estética, conotativa, expressiva e plurissignificativa.",
        "feedbackErro": "Observe as personificações e imagens: 'chuva desenhava', 'cidade cansada', 'lençol de névoa'.",
        "analiseAlternativas": [
            "Correta. Há elaboração estética e conotação.",
            "Incorreta. A linguagem não é estritamente denotativa.",
            "Incorreta. Não há norma.",
            "Incorreta. Não há publicidade.",
            "Incorreta. Não há finalidade pedagógica."
        ],
        "dicaBanca": "Literariedade não depende de verso; depende do tratamento da linguagem e da finalidade estética.",
        "pegadinha": "Prosa também pode ser literária.",
        "memorizar2026": "Literário = efeito estético + expressividade + plurissignificação.",
        "fonte": "Texto autoral; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-012",
        "numero": 12,
        "subtopico": "Texto não literário",
        "dificuldade": "media",
        "texto": "A unidade funcionará das 8h às 17h. Para atendimento, o usuário deverá apresentar documento de identificação com foto.",
        "pergunta": "O trecho é não literário porque, predominantemente,",
        "alternativas": [
            "não possui nenhum recurso de linguagem.",
            "cumpre finalidade prática e referencial, priorizando clareza e orientação objetiva.",
            "é necessariamente verdadeiro em todos os seus enunciados.",
            "não pode apresentar nenhuma ambiguidade.",
            "foi escrito em prosa."
        ],
        "correta": 1,
        "feedbackAcerto": "A distinção não depende de prosa/verso nem da ausência total de recursos estilísticos, mas da finalidade e do tratamento da linguagem.",
        "feedbackErro": "Textos não literários podem usar recursos expressivos; o ponto central é sua função prática/referencial predominante.",
        "analiseAlternativas": [
            "Incorreta. Qualquer texto mobiliza recursos de linguagem.",
            "Correta. O foco é funcional e objetivo.",
            "Incorreta. Literariedade não se define por verdade/falsidade.",
            "Incorreta. Ambiguidade pode ocorrer.",
            "Incorreta. Prosa pode ser literária ou não literária."
        ],
        "dicaBanca": "Evite definições negativas absolutas de texto não literário.",
        "pegadinha": "Não literário não significa 'sem estilo'.",
        "memorizar2026": "Não literário = finalidade prática/referencial predominante.",
        "fonte": "Texto autoral; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-013",
        "numero": 13,
        "subtopico": "Mesmo tema, tratamentos diferentes",
        "dificuldade": "alta",
        "pergunta": "Dois textos tratam da mesma enchente: um boletim informa nível do rio, áreas afetadas e rotas interditadas; um poema recria a enchente por imagens, ritmo e memória afetiva. A diferença principal entre eles está",
        "alternativas": [
            "no tema, pois textos literários e não literários não podem abordar o mesmo assunto.",
            "na extensão, pois o texto literário deve ser sempre mais curto.",
            "na finalidade e no tratamento da linguagem: referencial no boletim e estético no poema.",
            "na presença de verbos, que só ocorre no boletim.",
            "na possibilidade de circulação pública, exclusiva do texto não literário."
        ],
        "correta": 2,
        "feedbackAcerto": "O mesmo tema pode ser tratado literária ou não literariamente; o que muda é a finalidade e a elaboração linguística.",
        "feedbackErro": "Tema não determina literariedade. Observe a função do texto e o modo de construir sentidos.",
        "analiseAlternativas": [
            "Incorreta. O tema pode ser o mesmo.",
            "Incorreta. Extensão não define literariedade.",
            "Correta. Distingue finalidade e tratamento linguístico.",
            "Incorreta. Ambos podem ter verbos.",
            "Incorreta. Ambos podem circular publicamente."
        ],
        "dicaBanca": "A FGV pode colocar dois textos sobre o mesmo assunto e pedir a diferença de tratamento.",
        "pegadinha": "Assunto comum não implica tipo ou natureza textual igual.",
        "memorizar2026": "Literário x não literário: finalidade + linguagem, não tema.",
        "fonte": "Questão autoral; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-014",
        "numero": 14,
        "subtopico": "Literário não é sinônimo de ficção",
        "dificuldade": "alta",
        "pergunta": "Assinale a afirmativa correta sobre textos literários.",
        "alternativas": [
            "Todo texto literário deve narrar acontecimentos fictícios.",
            "Somente poemas em versos podem ser considerados literários.",
            "Textos literários são definidos pela ausência de qualquer referência ao mundo real.",
            "A literariedade pode ocorrer em textos que partem de experiências reais, pois depende do tratamento estético e expressivo da linguagem.",
            "Todo texto que contém metáfora é necessariamente literário."
        ],
        "correta": 3,
        "feedbackAcerto": "Memórias, crônicas e outros textos podem partir de fatos reais e ainda assim apresentar elaboração literária.",
        "feedbackErro": "Ficção, verso e metáfora não são condições necessárias e suficientes de literariedade.",
        "analiseAlternativas": [
            "Incorreta. Literatura não exige ficção.",
            "Incorreta. Há prosa literária.",
            "Incorreta. Literatura pode dialogar com fatos reais.",
            "Correta. O tratamento estético é decisivo.",
            "Incorreta. Metáfora também ocorre fora da literatura."
        ],
        "dicaBanca": "Desconfie de equivalências automáticas: literário = ficção; literário = poema; literário = metáfora.",
        "pegadinha": "Uma característica frequente não é necessariamente definidora.",
        "memorizar2026": "Literário ≠ obrigatoriamente ficcional.",
        "fonte": "Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-015",
        "numero": 15,
        "subtopico": "Recursos expressivos em texto não literário",
        "dificuldade": "alta",
        "texto": "Economize água: cada gota conta.",
        "pergunta": "A presença da expressão figurada e do efeito expressivo no enunciado",
        "alternativas": [
            "faz com que ele deixe obrigatoriamente de cumprir qualquer função prática.",
            "prova que todo slogan é um poema.",
            "transforma automaticamente a campanha em texto literário.",
            "impede a identificação de uma finalidade persuasiva.",
            "não basta para torná-lo literário, pois textos não literários também podem empregar recursos expressivos."
        ],
        "correta": 4,
        "feedbackAcerto": "Recursos como metáfora, ritmo, trocadilho e repetição podem aparecer em publicidade, propaganda e outros textos não literários.",
        "feedbackErro": "Não confunda presença de figura de linguagem com literariedade automática.",
        "analiseAlternativas": [
            "Incorreta. O texto mantém função prática.",
            "Incorreta. Slogan não é automaticamente poema.",
            "Incorreta. Figura de linguagem não basta.",
            "Incorreta. A finalidade persuasiva permanece.",
            "Correta. Recursos expressivos também ocorrem em textos não literários."
        ],
        "dicaBanca": "A FGV gosta de questionar critérios absolutos de literariedade.",
        "pegadinha": "Metáfora ≠ texto literário automaticamente.",
        "memorizar2026": "Recurso estilístico sozinho não define literatura.",
        "fonte": "Texto autoral; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-016",
        "numero": 16,
        "subtopico": "Gênero e tipo textual",
        "dificuldade": "alta",
        "pergunta": "Um mesmo gênero textual pode",
        "alternativas": [
            "mobilizar diferentes tipos e modos de organização, conforme a finalidade e o trecho analisado.",
            "pertencer obrigatoriamente a um único tipo textual em qualquer situação de uso.",
            "ser classificado apenas pela quantidade de parágrafos.",
            "dispensar análise de finalidade porque seu nome já determina todos os sentidos.",
            "ser literário e não literário simultaneamente em qualquer ocorrência."
        ],
        "correta": 0,
        "feedbackAcerto": "Gêneros são formas sociais de texto e podem combinar diferentes sequências, funções e recursos.",
        "feedbackErro": "Não trate o nome do gênero como classificação automática.",
        "analiseAlternativas": [
            "Correta. Textos reais são frequentemente híbridos.",
            "Incorreta. Um gênero pode variar.",
            "Incorreta. Parágrafos não definem tipo.",
            "Incorreta. A finalidade precisa ser analisada.",
            "Incorreta. A natureza literária depende da ocorrência e do tratamento, não é automática."
        ],
        "dicaBanca": "Notícia, crônica, anúncio, carta e outros gêneros podem mobilizar mais de uma organização textual.",
        "pegadinha": "Gênero é pista, não resposta automática.",
        "memorizar2026": "Gênero concreto pode combinar tipos e modos.",
        "fonte": "Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-017",
        "numero": 17,
        "subtopico": "Suporte não determina tipo",
        "dificuldade": "media",
        "pergunta": "Sobre suporte e tipo textual, é correto afirmar que",
        "alternativas": [
            "todo texto publicado em jornal é informativo.",
            "o suporte de circulação não determina sozinho o tipo textual, pois um mesmo meio pode conter notícia, anúncio, norma, opinião e outros textos.",
            "todo texto em rede social é publicitário.",
            "livros contêm apenas textos didáticos ou literários.",
            "cartazes são necessariamente propagandísticos."
        ],
        "correta": 1,
        "feedbackAcerto": "Meio de circulação e tipo textual são dimensões diferentes.",
        "feedbackErro": "Jornais, livros, sites e cartazes podem veicular textos de finalidades muito distintas.",
        "analiseAlternativas": [
            "Incorreta. Jornal contém diversos gêneros e tipos.",
            "Correta. O suporte não basta para classificar.",
            "Incorreta. Redes sociais têm ampla variedade textual.",
            "Incorreta. Livros também podem ser informativos, normativos etc.",
            "Incorreta. Cartaz pode ser informativo, publicitário e outros."
        ],
        "dicaBanca": "Evite inferir tipologia apenas pelo lugar em que o texto aparece.",
        "pegadinha": "Suporte ≠ finalidade.",
        "memorizar2026": "Onde circula não define sozinho o que o texto faz.",
        "fonte": "Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-018",
        "numero": 18,
        "subtopico": "Texto híbrido — predominância",
        "dificuldade": "alta",
        "texto": "A reportagem apresenta dados sobre evasão escolar e, ao final, defende que municípios ampliem políticas de permanência estudantil.",
        "pergunta": "A análise mais adequada é a de que",
        "alternativas": [
            "o texto deixa de ter qualquer caráter informativo porque apresenta opinião.",
            "todo dado numérico transforma o texto em didático.",
            "o texto combina funções informativa e argumentativa, devendo-se observar qual predomina no trecho ou no conjunto analisado.",
            "a defesa de políticas torna o texto automaticamente normativo.",
            "não é possível classificar textos que combinam mais de uma função."
        ],
        "correta": 2,
        "feedbackAcerto": "Textos reais podem combinar funções e modos; a prova costuma exigir identificação da predominância.",
        "feedbackErro": "Hibridismo não impede classificação; exige análise mais cuidadosa.",
        "analiseAlternativas": [
            "Incorreta. Informação e opinião podem coexistir.",
            "Incorreta. Dado não implica didatismo.",
            "Correta. Reconhece a combinação e a predominância.",
            "Incorreta. Defender política não equivale a estabelecer norma.",
            "Incorreta. A predominância permite análise."
        ],
        "dicaBanca": "A FGV gosta de textos híbridos justamente para testar classificações não mecânicas.",
        "pegadinha": "Mistura não significa ausência de predominância.",
        "memorizar2026": "Texto híbrido = funções combinadas; classifique pela predominante.",
        "fonte": "Questão autoral; padrão FGV."
    },
    {
        "id": "SEDUC-LP-TIP-019",
        "numero": 19,
        "subtopico": "Destinatário e contexto",
        "dificuldade": "media",
        "pergunta": "Na classificação tipológica, identificar o destinatário e o contexto de circulação é útil porque",
        "alternativas": [
            "permite dispensar a leitura do conteúdo.",
            "define automaticamente se o texto é literário.",
            "substitui a análise das marcas linguísticas.",
            "ajuda a compreender a finalidade comunicativa e o efeito que o texto pretende produzir.",
            "torna irrelevante a organização interna do texto."
        ],
        "correta": 3,
        "feedbackAcerto": "Destinatário e situação de circulação ajudam a interpretar por que e para que o texto foi produzido.",
        "feedbackErro": "Contexto é um critério importante, mas não substitui leitura, linguagem e estrutura.",
        "analiseAlternativas": [
            "Incorreta. O conteúdo continua essencial.",
            "Incorreta. Não determina sozinho literariedade.",
            "Incorreta. É necessário combinar critérios.",
            "Correta. Contexto e destinatário esclarecem finalidade e efeito.",
            "Incorreta. A organização interna segue relevante."
        ],
        "dicaBanca": "Pergunte sempre: quem fala, para quem, em que situação e com qual objetivo?",
        "pegadinha": "Contexto ajuda, mas não resolve sozinho.",
        "memorizar2026": "Destinatário + contexto → pista da finalidade.",
        "fonte": "Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-020",
        "numero": 20,
        "subtopico": "Previsão científica x divinatória",
        "dificuldade": "alta",
        "pergunta": "A diferença decisiva entre uma previsão meteorológica e um horóscopo, para fins de classificação textual, é que",
        "alternativas": [
            "ambos são sempre divinatórios porque falam do futuro.",
            "ambos são sempre informativos porque podem trazer datas.",
            "a previsão meteorológica é necessariamente literária.",
            "o horóscopo é necessariamente publicitário.",
            "a previsão meteorológica se apoia em dados e modelos científicos, enquanto o horóscopo se vincula a um sistema interpretativo não científico."
        ],
        "correta": 4,
        "feedbackAcerto": "Falar do futuro não basta para caracterizar texto divinatório; importa a base da previsão.",
        "feedbackErro": "A classificação deve considerar o fundamento do prognóstico, não apenas o tempo verbal.",
        "analiseAlternativas": [
            "Incorreta. Previsão científica não é divinatória.",
            "Incorreta. Data não define tipo.",
            "Incorreta. Meteorologia não é literatura por natureza.",
            "Incorreta. Horóscopo pode circular sem finalidade comercial.",
            "Correta. Distingue base científica e sistema divinatório."
        ],
        "dicaBanca": "Essa oposição é uma pegadinha clássica quando a palavra 'previsão' aparece.",
        "pegadinha": "Futuro ≠ divinatório.",
        "memorizar2026": "Divinatório depende de base interpretativa não científica.",
        "fonte": "Tipologia recorrente FGV."
    },
    {
        "id": "SEDUC-LP-TIP-021",
        "numero": 21,
        "subtopico": "Informativo com avaliação",
        "dificuldade": "alta",
        "texto": "O relatório registra aumento de 8% nas matrículas e considera o resultado positivo, embora ressalte desigualdades regionais.",
        "pergunta": "A presença de uma avaliação no trecho",
        "alternativas": [
            "não impede que o texto mantenha função predominantemente informativa, se o foco central continuar sendo apresentar dados e resultados.",
            "transforma obrigatoriamente o relatório em texto literário.",
            "faz com que qualquer dado apresentado deixe de ser informativo.",
            "transforma o texto automaticamente em propaganda.",
            "impede qualquer classificação textual."
        ],
        "correta": 0,
        "feedbackAcerto": "Textos informativos podem conter avaliações; a predominância depende do conjunto da finalidade e da organização.",
        "feedbackErro": "Não confunda presença de um elemento avaliativo com mudança automática de tipo.",
        "analiseAlternativas": [
            "Correta. A predominância informativa pode ser preservada.",
            "Incorreta. Avaliação não implica literariedade.",
            "Incorreta. Os dados continuam informativos.",
            "Incorreta. Não há difusão de causa ou ideia como objetivo central.",
            "Incorreta. É possível classificar pela predominância."
        ],
        "dicaBanca": "A FGV costuma inserir marcas de opinião em textos informativos para testar classificações rígidas.",
        "pegadinha": "Um traço secundário não necessariamente redefine o texto inteiro.",
        "memorizar2026": "Predominância > presença isolada de uma marca.",
        "fonte": "Questão autoral; padrão FGV."
    },
    {
        "id": "SEDUC-LP-TIP-022",
        "numero": 22,
        "subtopico": "Campanha institucional",
        "dificuldade": "media",
        "texto": "Respeito começa na escola. Diga não ao bullying e procure ajuda quando presenciar uma agressão.",
        "pergunta": "Pela finalidade predominante, o texto pode ser classificado como propagandístico porque",
        "alternativas": [
            "vende um serviço educacional.",
            "difunde um valor social e busca adesão a uma conduta coletiva.",
            "apresenta exclusivamente informação neutra.",
            "estabelece sanção jurídica obrigatória.",
            "faz previsão sobre acontecimentos futuros."
        ],
        "correta": 1,
        "feedbackAcerto": "Campanhas sociais e institucionais costumam difundir valores, causas e comportamentos desejados.",
        "feedbackErro": "Não há produto à venda nem norma jurídica; há persuasão em torno de uma causa.",
        "analiseAlternativas": [
            "Incorreta. Não existe finalidade comercial.",
            "Correta. Há promoção de valor e comportamento social.",
            "Incorreta. O texto busca adesão.",
            "Incorreta. Não há sanção normativa.",
            "Incorreta. Não há previsão."
        ],
        "dicaBanca": "Campanha pública pode ter linguagem semelhante à publicidade, mas sua finalidade pode ser propagandística.",
        "pegadinha": "Institucional não significa necessariamente informativo.",
        "memorizar2026": "Campanha de causa/valor → forte tendência propagandística.",
        "fonte": "Texto autoral; tipologia recorrente FGV."
    },
    {
        "id": "SEDUC-LP-TIP-023",
        "numero": 23,
        "subtopico": "Manual — didático x normativo",
        "dificuldade": "alta",
        "texto": "Para utilizar o equipamento com segurança, leia as instruções antes do primeiro uso. Não opere o aparelho com as mãos molhadas. Em caso de dano no cabo, interrompa imediatamente o uso.",
        "pergunta": "No trecho, a classificação normativa é favorecida principalmente porque",
        "alternativas": [
            "há uma história narrada em sequência temporal.",
            "o texto busca vender o equipamento.",
            "predominam prescrições e proibições destinadas a regular o uso seguro do aparelho.",
            "há linguagem poética e plurissignificativa.",
            "o texto prevê acontecimentos futuros por crença."
        ],
        "correta": 2,
        "feedbackAcerto": "Embora manuais possam ter função didática, este trecho específico enfatiza normas de segurança e regulação da conduta.",
        "feedbackErro": "A classificação depende do segmento analisado e da função predominante nele.",
        "analiseAlternativas": [
            "Incorreta. Não há narrativa.",
            "Incorreta. Não há publicidade.",
            "Correta. O foco está em prescrições e proibições.",
            "Incorreta. Não há finalidade estética.",
            "Incorreta. Não há divinação."
        ],
        "dicaBanca": "Um gênero como 'manual' pode conter trechos didáticos, informativos e normativos; observe o trecho.",
        "pegadinha": "Nome do gênero não define sozinho o tipo.",
        "memorizar2026": "Classifique o segmento pela função predominante.",
        "fonte": "Texto autoral; padrão FGV."
    },
    {
        "id": "SEDUC-LP-TIP-024",
        "numero": 24,
        "subtopico": "Notícia com descrição",
        "dificuldade": "alta",
        "texto": "A notícia relata a inauguração de uma escola e inclui um parágrafo descrevendo o prédio: paredes azuis, pátio amplo e salas iluminadas.",
        "pergunta": "A presença desse parágrafo descritivo",
        "alternativas": [
            "faz a notícia deixar necessariamente de ser informativa.",
            "transforma todo o texto em literatura.",
            "impede a identificação de uma função global.",
            "mostra que um texto informativo pode incorporar modo descritivo sem perder necessariamente sua finalidade predominante.",
            "prova que descrição e informação são categorias idênticas."
        ],
        "correta": 3,
        "feedbackAcerto": "O tipo textual global e o modo discursivo de um trecho podem coexistir em níveis diferentes.",
        "feedbackErro": "Descrição é modo de organização; notícia pode continuar informativa mesmo incorporando descrição.",
        "analiseAlternativas": [
            "Incorreta. A função global pode permanecer informativa.",
            "Incorreta. Descrição não implica literatura.",
            "Incorreta. A finalidade geral ainda pode ser reconhecida.",
            "Correta. Distingue adequadamente tipo e modo.",
            "Incorreta. São categorias distintas."
        ],
        "dicaBanca": "Essa distinção entre nível global e trecho específico é muito útil em textos híbridos.",
        "pegadinha": "Um trecho descritivo não redefine automaticamente o texto inteiro.",
        "memorizar2026": "Tipo global pode conter modos discursivos variados.",
        "fonte": "Questão autoral; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-TIP-025",
        "numero": 25,
        "subtopico": "Questão integradora",
        "dificuldade": "alta",
        "texto": "Em uma página escolar aparecem três blocos: (I) 'Inscrições abertas até sexta-feira; 120 vagas disponíveis'; (II) 'Participe! Esta é a oportunidade de transformar sua trajetória'; (III) 'O candidato deverá apresentar documento de identificação no dia da matrícula'.",
        "pergunta": "Considerando a função predominante de cada bloco, a associação mais adequada é",
        "alternativas": [
            "I didático; II normativo; III literário.",
            "I publicitário; II informativo; III divinatório.",
            "I propagandístico; II literário; III didático.",
            "I normativo; II divinatório; III publicitário.",
            "I informativo; II persuasivo/promocional; III normativo."
        ],
        "correta": 4,
        "feedbackAcerto": "O primeiro bloco comunica dados; o segundo busca mobilizar o destinatário; o terceiro estabelece dever de conduta.",
        "feedbackErro": "Classifique cada bloco pela finalidade imediata, sem usar o suporte 'página escolar' como resposta automática.",
        "analiseAlternativas": [
            "Incorreta. As três classificações não correspondem às funções.",
            "Incorreta. O primeiro bloco não vende/promove e o terceiro não é divinatório.",
            "Incorreta. As funções não correspondem.",
            "Incorreta. Não há divinação nem publicidade comercial nesses termos.",
            "Correta. Distingue informação, persuasão e norma."
        ],
        "dicaBanca": "FGV pode fragmentar um mesmo suporte em trechos de funções distintas.",
        "pegadinha": "O contexto geral ajuda, mas cada segmento pode ter função própria.",
        "memorizar2026": "Leia por função: informar, promover/difundir, regular, ensinar, prever.",
        "fonte": "Questão autoral; Edital SEDUC-PA 2026."
    }
];

    window.seducLinguaPortuguesaTiposTextuaisLiterariosNaoLiterarios2026 = banco;
})();
