/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 12: Recursos Pedagógicos Acessíveis e Comunicação Aumentativa e Alternativa (CAA)
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 05/09/2026.
   Bases: LBI; Lei 10.098/2000; Lei 15.249/2025; Decreto 12.686/2025;
   Inep/MEC (AEE atualizado em 31/08/2026); FGV SEDUC-SP 2026.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-CAA-001",
        "numero": 1,
        "subtopico": "CAA — conceito e finalidade",
        "dificuldade": "media",
        "pergunta": "Uma professora afirma que a Comunicação Aumentativa e Alternativa (CAA) deve ser utilizada apenas quando a pessoa não possui nenhuma forma de fala. Considerando a finalidade educacional da CAA, essa afirmação é",
        "alternativas": [
            "correta, porque a CAA é definida como substituição da fala e perde sua finalidade quando existe qualquer emissão oral funcional.",
            "correta somente quando a escola dispõe de dispositivo eletrônico com saída de voz e de profissional especializado para operá-lo.",
            "incorreta, pois a CAA reúne estratégias e recursos que podem complementar ou substituir formas convencionais de comunicação conforme a necessidade da pessoa.",
            "incorreta apenas para estudantes com deficiência intelectual, já que nos demais casos o uso deve permanecer restrito ao atendimento clínico.",
            "correta se o estudante já tiver um sistema de símbolos estabelecido, pois a CAA não se destina ao desenvolvimento de novas formas de comunicação, ainda que a escola registre a medida no planejamento e a revise periodicamente."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou que CAA não é sinônimo de ausência total de fala. Ela pode ampliar, complementar ou oferecer uma via alternativa de comunicação funcional.",
        "feedbackErro": "O erro está em restringir a CAA a pessoas sem qualquer fala. A escolha depende das necessidades comunicativas e do funcionamento da pessoa nos contextos reais.",
        "analiseAlternativas": [
            "Incorreta. CAA pode ser aumentativa quando complementa a fala e alternativa quando oferece outra via de comunicação.",
            "Incorreta. A CAA inclui recursos de baixa e alta tecnologia e não depende de um único profissional ou equipamento.",
            "Correta. A função é ampliar possibilidades de expressão, compreensão, interação e participação, podendo complementar ou substituir meios convencionais.",
            "Incorreta. CAA não é exclusiva de um diagnóstico e não deve ficar confinada ao espaço clínico.",
            "Incorreta. Sistemas de CAA podem ser ensinados, ampliados e ajustados ao longo do tempo. O acréscimo administrativo não corrige o erro conceitual da alternativa."
        ],
        "dicaBanca": "FGV pode transformar 'alternativa' em 'substitutiva obrigatória'. Lembre que CAA também pode ser aumentativa.",
        "pegadinha": "Ter alguma fala não exclui automaticamente a necessidade de CAA.",
        "memorizar2026": "CAA = ampliar canais de comunicação; pode complementar e/ou oferecer alternativa.",
        "fonte": "Inep/MEC — atividades do AEE (atualizado em 31/08/2026); LBI, art. 28, XIX, incluído pela Lei 15.249/2025."
    },
    {
        "id": "SEDUC-EE-CAA-002",
        "numero": 2,
        "subtopico": "Necessidades complexas de comunicação",
        "dificuldade": "alta",
        "pergunta": "A Lei nº 15.249/2025 passou a definir, na legislação de acessibilidade e na LBI, a pessoa com necessidades complexas de comunicação. Assinale a opção compatível com essa definição.",
        "alternativas": [
            "É a pessoa com deficiência intelectual ou TEA que não desenvolveu linguagem oral até o início da escolarização obrigatória.",
            "É a pessoa matriculada no AEE que necessita de comunicação mediada por profissional de apoio em todas as atividades escolares.",
            "É a pessoa que utiliza exclusivamente pictogramas de baixa tecnologia por não possuir condições motoras para operar recursos eletrônicos, ainda que a escola registre a medida no planejamento e a revise periodicamente.",
            "É a pessoa cuja comunicação depende de avaliação clínica que confirme impedimento permanente da fala, da audição ou da linguagem escrita.",
            "É a pessoa que, por qualquer motivo, apresenta dificuldade significativa para compreender ou expressar mensagens por formas convencionais e necessita de recursos ou estratégias aumentativas ou alternativas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu a definição legal nova: ela não se limita a diagnóstico específico nem exige ausência total de fala.",
        "feedbackErro": "A definição da Lei 15.249/2025 é funcional e ampla: considera dificuldades significativas na compreensão ou expressão por formas convencionais e necessidade de recursos/estratégias aumentativas ou alternativas.",
        "analiseAlternativas": [
            "Incorreta. A lei não restringe a condição a TEA ou deficiência intelectual nem a uma idade específica.",
            "Incorreta. Necessidade de AEE ou de profissional de apoio não integra a definição legal.",
            "Incorreta. O conceito não exige uso exclusivo de baixa tecnologia nem depende de limitação motora. O acréscimo administrativo não corrige o erro conceitual da alternativa.",
            "Incorreta. A lei não condiciona a definição a laudo clínico nem exige permanência do impedimento da fala.",
            "Correta. Essa formulação corresponde ao núcleo da definição incluída na Lei de Acessibilidade e na LBI."
        ],
        "dicaBanca": "Norma recente + definição = alta chance de cobrança literal da FGV.",
        "pegadinha": "Não reduza 'necessidade complexa de comunicação' a um diagnóstico ou a não falar.",
        "memorizar2026": "Lei 15.249/2025: definição funcional, não diagnóstica.",
        "fonte": "Lei nº 15.249/2025, arts. 2º e 3º.",
        "atualizacao2026": "A Lei 15.249/2025 incluiu a definição de pessoa com necessidades complexas de comunicação na Lei 10.098/2000 e na LBI."
    },
    {
        "id": "SEDUC-EE-CAA-003",
        "numero": 3,
        "subtopico": "Baixa e alta tecnologia",
        "dificuldade": "media",
        "pergunta": "Em uma atividade de Ciências, um estudante utiliza uma prancha impressa com pictogramas para escolher materiais e formular respostas. Esse recurso é exemplo de",
        "alternativas": [
            "CAA de baixa tecnologia, porque organiza símbolos em suporte não eletrônico para ampliar a comunicação.",
            "recurso de alta tecnologia, pois toda prancha de comunicação exige processamento digital prévio para ser considerada CAA.",
            "material pedagógico comum, já que pictogramas não constituem recurso de acessibilidade quando usados dentro da classe regular.",
            "sistema de comunicação exclusivamente alternativo, porque pranchas impressas não podem complementar a fala ou outros meios de expressão.",
            "recurso de avaliação adaptada, sem função comunicacional, pois a escolha de símbolos não configura produção de mensagem."
        ],
        "correta": 0,
        "feedbackAcerto": "Você classificou corretamente a prancha impressa como recurso de CAA de baixa tecnologia.",
        "feedbackErro": "Pranchas impressas, cartões e símbolos em suportes simples são exemplos clássicos de baixa tecnologia. O valor pedagógico está na funcionalidade comunicativa, não no grau de sofisticação.",
        "analiseAlternativas": [
            "Correta. Prancha impressa com pictogramas é um recurso típico de CAA de baixa tecnologia.",
            "Incorreta. O suporte não eletrônico é justamente o que caracteriza o exemplo como baixa tecnologia.",
            "Incorreta. Pictogramas podem funcionar como recurso de acessibilidade comunicacional também na classe comum.",
            "Incorreta. A prancha pode complementar outras formas de comunicação; não é necessariamente substitutiva.",
            "Incorreta. Selecionar símbolos pode expressar escolhas, respostas, pedidos e comentários."
        ],
        "dicaBanca": "A FGV 2026 cobrou pranchas impressas como exemplo de CAA e Tecnologia Assistiva.",
        "pegadinha": "Tecnologia assistiva não significa apenas equipamento eletrônico.",
        "memorizar2026": "Prancha impressa = CAA de baixa tecnologia.",
        "fonte": "FGV/SEDUC-SP 2026, questão 30; Lei 15.249/2025; Inep/MEC."
    },
    {
        "id": "SEDUC-EE-CAA-004",
        "numero": 4,
        "subtopico": "AEE — atividade de CAA",
        "dificuldade": "alta",
        "pergunta": "Segundo a orientação atual do Inep, o ensino do uso da Comunicação Alternativa e Aumentativa no AEE consiste principalmente em",
        "alternativas": [
            "treinar a emissão oral correta antes de introduzir símbolos, evitando que recursos alternativos reduzam a motivação para o desenvolvimento da fala.",
            "selecionar um aplicativo padronizado para todos os estudantes com dificuldade comunicativa e concentrar seu uso no contraturno.",
            "substituir as atividades de leitura e escrita da classe comum por exercícios específicos de comunicação realizados na sala de recursos.",
            "organizar atividades que ampliem os canais de comunicação para atender necessidades de fala, leitura e escrita, utilizando recursos como cartões, pranchas, vocalizadores ou computador.",
            "ensinar exclusivamente símbolos pictográficos, pois objetos concretos, palavras escritas e recursos eletrônicos pertencem a outras categorias do AEE, ainda que a escola registre a medida no planejamento e a revise periodicamente."
        ],
        "correta": 3,
        "feedbackAcerto": "Você marcou a descrição oficial do Inep: ampliar canais de comunicação e atender necessidades de fala, leitura e escrita com diferentes recursos.",
        "feedbackErro": "O AEE não condiciona CAA à fala correta, não padroniza um único sistema e não substitui o currículo da classe comum.",
        "analiseAlternativas": [
            "Incorreta. CAA não exige treino oral prévio nem deve ser adiada até a fala estar estabelecida.",
            "Incorreta. A escolha é individualizada e o recurso precisa ser utilizado nos contextos em que a comunicação ocorre.",
            "Incorreta. AEE é complementar e não substitui as experiências curriculares da classe comum.",
            "Correta. Essa é a descrição atual do Inep para o ensino do uso da CAA no AEE.",
            "Incorreta. CAA pode envolver múltiplas representações e tecnologias, não apenas pictogramas. O acréscimo administrativo não corrige o erro conceitual da alternativa."
        ],
        "dicaBanca": "FGV gosta de alternativas que confinam o recurso ao AEE. O objetivo é fazer a comunicação funcionar na vida escolar.",
        "pegadinha": "CAA no AEE não significa CAA só no AEE.",
        "memorizar2026": "Inep: cartões, pranchas, vocalizadores e computador podem ser usados para ampliar fala, leitura e escrita.",
        "fonte": "Inep/MEC — Quais são as atividades do AEE? Atualizado em 31/08/2026."
    },
    {
        "id": "SEDUC-EE-CAA-005",
        "numero": 5,
        "subtopico": "Implementação — avaliação inicial",
        "dificuldade": "alta",
        "pergunta": "Antes de escolher um sistema de CAA para um estudante, a equipe realiza observações em diferentes rotinas, analisa como ele já pede, recusa, comenta e responde, e verifica aspectos motores, sensoriais e de acesso. Essa etapa tem como finalidade",
        "alternativas": [
            "definir se o estudante atingiu um nível cognitivo mínimo para receber CAA, evitando introduzir o recurso antes dos pré-requisitos necessários.",
            "determinar qual diagnóstico explica melhor a dificuldade de comunicação para vincular o estudante a uma categoria fixa de recurso.",
            "comprovar a necessidade de um recurso eletrônico, pois sistemas de alta tecnologia oferecem maior vocabulário e devem ser priorizados.",
            "selecionar previamente o conjunto de símbolos que será usado pela família, independentemente das situações comunicativas encontradas na escola.",
            "identificar o repertório comunicativo e as condições de acesso para orientar uma escolha funcional e individualizada do sistema."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu que a avaliação inicial orienta a escolha do sistema a partir da comunicação existente, das demandas e das possibilidades de acesso.",
        "feedbackErro": "Avaliar não é procurar um diagnóstico que determine o recurso nem exigir desempenho mínimo. É compreender como a pessoa comunica e em quais contextos precisa ampliar participação.",
        "analiseAlternativas": [
            "Incorreta. A avaliação não deve funcionar como barreira de entrada; ela serve para planejar apoio e acesso.",
            "Incorreta. Diagnóstico não determina automaticamente o tipo de CAA.",
            "Incorreta. Alta tecnologia não é superior por definição; a escolha depende de funcionalidade e contexto.",
            "Incorreta. Vocabulário e símbolos precisam dialogar com contextos reais e ser ajustados com participação dos usuários e parceiros.",
            "Correta. Repertório comunicativo, acesso motor/sensorial e contexto orientam a seleção do sistema."
        ],
        "dicaBanca": "FGV/SEDUC-SP 2026 cobrou a sequência avaliação → escolha → parceiros → integração nos contextos.",
        "pegadinha": "A avaliação serve para abrir caminhos, não para criar pré-requisitos excludentes.",
        "memorizar2026": "Primeiro compreenda comunicação + acesso + contexto; depois selecione e ensine o sistema.",
        "fonte": "FGV/SEDUC-SP 2026, questão 19; Inep/MEC; LBI."
    },
    {
        "id": "SEDUC-EE-CAA-006",
        "numero": 6,
        "subtopico": "Parceiros de comunicação",
        "dificuldade": "alta",
        "pergunta": "Uma escola adquiriu um comunicador eletrônico para um estudante, mas apenas o professor do AEE sabe utilizá-lo. Na sala comum, os demais adultos fazem perguntas e aguardam respostas orais. O principal ajuste necessário é",
        "alternativas": [
            "reservar o dispositivo ao AEE até que o estudante o domine sem ajuda, evitando respostas inconsistentes em outros ambientes.",
            "substituir o recurso eletrônico por uma prancha impressa, pois materiais de baixa tecnologia dispensam treinamento dos interlocutores.",
            "manter o recurso disponível na sala comum apenas para situações de avaliação formal, quando a resposta oral não puder ser registrada.",
            "designar um profissional de apoio como único interlocutor autorizado, reduzindo a variação na forma como o sistema é apresentado ao estudante, ainda que a escola registre a medida no planejamento e a revise periodicamente.",
            "treinar os parceiros de comunicação para modelar e reconhecer o uso do sistema, oferecer tempo de resposta e criar oportunidades reais de comunicação nas rotinas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou uma dimensão central da implementação: parceiros também precisam aprender a usar e apoiar o sistema.",
        "feedbackErro": "Um recurso pode fracassar mesmo sendo tecnicamente adequado se os interlocutores não modelam, não esperam a resposta ou não reconhecem as mensagens produzidas pelo estudante.",
        "analiseAlternativas": [
            "Incorreta. O sistema deve ganhar uso funcional nos diferentes contextos, não ficar retido até um suposto domínio prévio.",
            "Incorreta. Baixa tecnologia também exige ensino, modelagem e parceiros responsivos.",
            "Incorreta. CAA é ferramenta de comunicação cotidiana, não apenas recurso de prova.",
            "Incorreta. Restringir interlocução a uma pessoa cria dependência e reduz participação social. O acréscimo administrativo não corrige o erro conceitual da alternativa.",
            "Correta. Parceiros treinados ampliam oportunidades, consistência e aprendizagem comunicativa."
        ],
        "dicaBanca": "FGV 2026 cobrou explicitamente treinamento dos parceiros e modelagem sistemática.",
        "pegadinha": "Comprar o recurso não implementa a CAA.",
        "memorizar2026": "CAA eficaz = usuário + sistema + parceiros + oportunidades reais.",
        "fonte": "FGV/SEDUC-SP 2026, questão 19."
    },
    {
        "id": "SEDUC-EE-CAA-007",
        "numero": 7,
        "subtopico": "Integração em contextos",
        "dificuldade": "media",
        "pergunta": "Depois de aprender a usar uma prancha de comunicação no AEE, o estudante ainda não a utiliza no recreio nem nas aulas. A conduta mais adequada é",
        "alternativas": [
            "integrar a prancha às rotinas reais, organizando oportunidades de uso na sala, no recreio, na alimentação e em outros contextos relevantes.",
            "manter o treino no AEE até que o estudante consiga formar mensagens completas sem qualquer apoio do adulto.",
            "substituir a prancha por linguagem oral nas situações coletivas para evitar que o recurso chame atenção dos colegas.",
            "utilizar o sistema apenas em atividades planejadas de comunicação, preservando os demais momentos para interações espontâneas sem recurso, ainda que a escola registre a medida no planejamento e a revise periodicamente.",
            "limitar o uso às solicitações de necessidades básicas, pois ampliar funções comunicativas pode aumentar a dependência do sistema."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou o princípio de generalização: o sistema precisa estar onde a comunicação acontece.",
        "feedbackErro": "A CAA não deve ficar isolada no atendimento especializado nem restrita a pedidos básicos. Participação exige acesso ao sistema nos ambientes e funções comunicativas reais.",
        "analiseAlternativas": [
            "Correta. O uso em diferentes rotinas favorece generalização e comunicação funcional.",
            "Incorreta. Domínio sem apoio não é condição para usar CAA em outros contextos.",
            "Incorreta. Retirar o recurso para evitar visibilidade reduz acessibilidade e participação.",
            "Incorreta. A espontaneidade depende de ter meios disponíveis para comunicar também fora das tarefas estruturadas. O acréscimo administrativo não corrige o erro conceitual da alternativa.",
            "Incorreta. CAA deve permitir comentar, perguntar, recusar, escolher, brincar, responder e outras funções, não só pedir."
        ],
        "dicaBanca": "FGV 2026 cobrou que a CAA saia do atendimento especializado e passe a integrar rotina, recreação, alimentação e sala de aula.",
        "pegadinha": "Aprender CAA no AEE e não poder usá-la na turma é uma implementação incompleta.",
        "memorizar2026": "Generalizar = usar o sistema em pessoas, lugares, atividades e funções diversas.",
        "fonte": "FGV/SEDUC-SP 2026, questão 19."
    },
    {
        "id": "SEDUC-EE-CAA-008",
        "numero": 8,
        "subtopico": "Lei 15.249/2025 — educação",
        "dificuldade": "alta",
        "pergunta": "A Lei nº 15.249/2025 alterou a Lei Brasileira de Inclusão e acrescentou, entre as incumbências do poder público no campo educacional, a oferta de",
        "alternativas": [
            "plataformas digitais de alta tecnologia para todos os estudantes público da Educação Especial, independentemente da necessidade comunicativa.",
            "serviço obrigatório de intérprete de CAA em todas as escolas que possuam estudantes sem fala funcional.",
            "sistemas de CAA exclusivamente eletrônicos, desde que possuam voz sintetizada e banco de pictogramas padronizado nacionalmente.",
            "pranchas de pictogramas apenas em ambientes externos à escola, pois a alteração não alcançou o atendimento educacional especializado.",
            "sistemas de comunicação aumentativa e alternativa de baixa tecnologia no AEE de estudantes com necessidades complexas de comunicação."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou a alteração literal da LBI: sistemas de CAA de baixa tecnologia no AEE para estudantes com necessidades complexas de comunicação.",
        "feedbackErro": "A Lei 15.249/2025 trouxe uma atualização objetiva e cobravel: baixa tecnologia + AEE + necessidades complexas de comunicação.",
        "analiseAlternativas": [
            "Incorreta. A lei não impõe alta tecnologia a todo o público da Educação Especial.",
            "Incorreta. Não criou a figura de intérprete de CAA nem essa obrigação geral.",
            "Incorreta. A alteração destaca justamente sistemas de baixa tecnologia, sem excluir outras possibilidades pedagógicas.",
            "Incorreta. A lei também alterou o art. 28 da LBI, alcançando expressamente o AEE.",
            "Correta. É o conteúdo do novo inciso XIX do art. 28 da LBI."
        ],
        "dicaBanca": "Memorize o trio literal da atualização: CAA + baixa tecnologia + AEE para necessidades complexas de comunicação.",
        "pegadinha": "Não confunda a regra de placas em espaços públicos com a previsão educacional do art. 28 da LBI.",
        "memorizar2026": "LBI art. 28, XIX (Lei 15.249/2025).",
        "fonte": "Lei nº 15.249/2025, art. 3º.",
        "atualizacao2026": "Desde novembro de 2025, a LBI prevê expressamente sistemas de CAA de baixa tecnologia no AEE para estudantes com necessidades complexas de comunicação."
    },
    {
        "id": "SEDUC-EE-CAA-009",
        "numero": 9,
        "subtopico": "Lei 15.249/2025 — espaços públicos",
        "dificuldade": "alta",
        "pergunta": "Em relação às pranchas de CAA de baixa tecnologia previstas para espaços públicos e abertos ao público pela Lei nº 15.249/2025, é correto afirmar que",
        "alternativas": [
            "devem utilizar um conjunto nacional fixo de pictogramas para garantir uniformidade, ainda que o contexto comunicativo local exija vocabulário diferente, ainda que a escola registre a medida no planejamento e a revise periodicamente.",
            "são destinadas apenas a pessoas com diagnóstico formal de deficiência, porque a lei não alcança outras necessidades complexas de comunicação.",
            "devem ser adaptadas às necessidades comunicativas de cada contexto; em praças, parques e espaços de uso coletivo, a lei prevê placas com pranchas de pictogramas.",
            "substituem outras medidas de acessibilidade comunicacional quando instaladas, dispensando mecanismos técnicos adicionais previstos na legislação.",
            "são recursos escolares de uso exclusivo do AEE, podendo ser instaladas fora da escola somente mediante autorização do sistema de ensino."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou corretamente a atualização: a lei exige contextualização das pranchas e prevê sua instalação em espaços públicos de uso coletivo.",
        "feedbackErro": "A norma não cria pictogramas únicos, não restringe o direito a diagnóstico específico e não transforma as pranchas na única medida de acessibilidade comunicacional.",
        "analiseAlternativas": [
            "Incorreta. A lei exige adaptação aos contextos comunicativos, não vocabulário único nacional. O acréscimo administrativo não corrige o erro conceitual da alternativa.",
            "Incorreta. A definição alcança pessoa com necessidade complexa de comunicação por qualquer motivo, nos termos legais.",
            "Correta. É a lógica dos arts. 17 da Lei 10.098/2000 e 62-A da LBI após a Lei 15.249/2025.",
            "Incorreta. As pranchas integram um conjunto de mecanismos de acessibilidade; não dispensam outras medidas necessárias.",
            "Incorreta. A previsão de placas é justamente para praças, parques e demais espaços públicos de uso coletivo."
        ],
        "dicaBanca": "FGV pode cruzar Lei de Acessibilidade + LBI e trocar 'adaptada ao contexto' por 'padronizada'.",
        "pegadinha": "CAA de baixa tecnologia não é sinônimo de recurso exclusivamente escolar.",
        "memorizar2026": "Lei 15.249/2025: pranchas com pictogramas contextualizadas também em espaços públicos.",
        "fonte": "Lei nº 15.249/2025; Lei 10.098/2000, art. 17; LBI, art. 62-A."
    },
    {
        "id": "SEDUC-EE-CAA-010",
        "numero": 10,
        "subtopico": "Seleção de símbolos e vocabulário",
        "dificuldade": "alta",
        "pergunta": "Ao montar uma prancha para um estudante, a equipe inclui apenas os símbolos 'água', 'banheiro', 'comer' e 'dor', por considerar que a CAA deve priorizar necessidades básicas. Para ampliar a participação escolar, é mais adequado",
        "alternativas": [
            "manter somente esse vocabulário até que o estudante demonstre uso independente em 100% das oportunidades observadas.",
            "ampliar gradualmente o vocabulário para permitir também comentar, perguntar, recusar, escolher, cumprimentar, participar das aulas e falar sobre interesses relevantes.",
            "substituir os símbolos por frases prontas definidas pelos adultos, evitando combinações que possam gerar mensagens ambíguas.",
            "organizar uma prancha distinta para cada disciplina e impedir o uso dos símbolos de uma área em outras situações comunicativas.",
            "priorizar símbolos ligados ao comportamento e à rotina, deixando conceitos acadêmicos para respostas orais ou escritas convencionais, ainda que a escola registre a medida no planejamento e a revise periodicamente."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu que comunicação funcional vai muito além de pedir itens básicos. A pessoa precisa poder exercer diferentes funções comunicativas.",
        "feedbackErro": "Restringir o vocabulário a necessidades básicas limita voz, escolha, interação e participação curricular. O sistema deve crescer com as experiências e objetivos da pessoa.",
        "analiseAlternativas": [
            "Incorreta. Independência total não é condição para ampliar possibilidades de comunicação.",
            "Correta. Um vocabulário funcional deve apoiar diferentes funções comunicativas e participação acadêmica/social.",
            "Incorreta. Frases prontas podem ser úteis em alguns contextos, mas não devem impedir autoria e combinação de mensagens.",
            "Incorreta. Vocabulário pode ser organizado por contextos sem criar barreiras rígidas entre eles.",
            "Incorreta. CAA também pode apoiar participação no currículo e comunicação sobre conhecimentos acadêmicos. O acréscimo administrativo não corrige o erro conceitual da alternativa."
        ],
        "dicaBanca": "Distrator clássico: oferecer comunicação, mas só para 'necessidades básicas'. Inclusão exige voz mais ampla.",
        "pegadinha": "CAA não é apenas 'pedir água e banheiro'.",
        "memorizar2026": "Vocabulário deve apoiar múltiplas funções: pedir, comentar, perguntar, negar, escolher, participar.",
        "fonte": "Inep/MEC; princípios de implementação de CAA; FGV/SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-CAA-011",
        "numero": 11,
        "subtopico": "Modelagem do sistema",
        "dificuldade": "alta",
        "pergunta": "Durante uma roda de conversa, o professor fala normalmente e, ao mesmo tempo, aponta alguns símbolos no sistema de CAA do estudante para mostrar como ideias podem ser expressas por aquele recurso. Essa estratégia exemplifica",
        "alternativas": [
            "retirada gradual da CAA, pois o adulto usa o sistema para demonstrar ao estudante quais mensagens deverão depois ser produzidas oralmente.",
            "avaliação por tentativa discreta, em que o professor mede a precisão da seleção de símbolos antes de permitir participação espontânea.",
            "modelagem no próprio sistema de comunicação, oferecendo exemplos de uso durante interações significativas sem exigir imitação imediata.",
            "prompt físico total, porque apontar símbolos pelo adulto equivale a conduzir a mão do estudante até a resposta correta.",
            "comunicação facilitada, já que o adulto interfere diretamente no conteúdo da mensagem produzida pelo estudante."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou a modelagem: parceiros usam o próprio sistema para demonstrar formas de comunicar em contextos naturais.",
        "feedbackErro": "Modelar não significa exigir repetição nem selecionar a resposta no lugar do estudante. É tornar visível como o sistema pode ser usado para comunicar.",
        "analiseAlternativas": [
            "Incorreta. O objetivo não é retirar a CAA nem convertê-la em fala obrigatória.",
            "Incorreta. Modelagem ocorre em interação comunicativa e não depende de testar precisão antes de participar.",
            "Correta. O adulto oferece exemplos de uso do sistema e amplia oportunidades de aprendizagem comunicativa.",
            "Incorreta. Apontar no próprio sistema como modelo não é o mesmo que conduzir fisicamente a mão do estudante.",
            "Incorreta. O adulto demonstra o sistema, mas não deve produzir a mensagem em nome do estudante."
        ],
        "dicaBanca": "Na questão 19 da SEDUC-SP 2026, a FGV citou modelagem como prática dos parceiros de comunicação.",
        "pegadinha": "Modelar ≠ responder pelo estudante.",
        "memorizar2026": "Parceiro competente também usa o sistema para ensinar pelo exemplo.",
        "fonte": "FGV/SEDUC-SP 2026, questão 19."
    },
    {
        "id": "SEDUC-EE-CAA-012",
        "numero": 12,
        "subtopico": "Acesso motor ao sistema",
        "dificuldade": "alta",
        "pergunta": "Um estudante compreende os pictogramas da prancha, mas não consegue apontá-los com precisão devido a uma limitação motora. A equipe deve, prioritariamente,",
        "alternativas": [
            "concluir que o sistema simbólico é inadequado, pois o domínio da CAA pressupõe apontar diretamente os símbolos com o dedo indicador.",
            "reduzir o número de oportunidades comunicativas até que o estudante desenvolva coordenação motora suficiente para acessar a prancha sem ajuda, ainda que a escola registre a medida no planejamento e a revise periodicamente.",
            "trocar os pictogramas por perguntas de resposta sim/não, porque limitações motoras impedem a construção de mensagens com mais opções.",
            "avaliar formas alternativas de acesso, como varredura assistida, acionadores, seleção por olhar ou adaptações de posicionamento, conforme funcionalidade.",
            "substituir a CAA por mediação verbal do acompanhante, que poderá interpretar gestos e responder em nome do estudante quando necessário."
        ],
        "correta": 3,
        "feedbackAcerto": "Você separou competência comunicativa de método de acesso. Se o problema é selecionar fisicamente, adapta-se o acesso ao sistema.",
        "feedbackErro": "A limitação motora não deve ser confundida com incapacidade para compreender ou produzir mensagens. Recursos de acesso alternativo podem preservar autoria e autonomia.",
        "analiseAlternativas": [
            "Incorreta. Apontar diretamente é apenas uma das possíveis formas de acesso.",
            "Incorreta. Esperar melhora motora pode privar a pessoa de comunicação durante o período de maior necessidade. O acréscimo administrativo não corrige o erro conceitual da alternativa.",
            "Incorreta. Respostas sim/não podem integrar o repertório, mas não devem reduzir automaticamente possibilidades expressivas.",
            "Correta. A seleção do acesso depende da função motora, sensorial, postura, contexto e objetivos comunicativos.",
            "Incorreta. O parceiro pode apoiar, mas não deve substituir a autoria da mensagem quando há alternativas de acesso."
        ],
        "dicaBanca": "FGV pode oferecer um recurso correto, mas com método de acesso incompatível. Pergunte: como o estudante seleciona?",
        "pegadinha": "Problema motor não é problema de linguagem automaticamente.",
        "memorizar2026": "CAA inclui o sistema de símbolos e também a forma de acesso ao sistema.",
        "fonte": "LBI; Tecnologia Assistiva; princípios de CAA e acessibilidade."
    },
    {
        "id": "SEDUC-EE-CAA-013",
        "numero": 13,
        "subtopico": "CAA e desenvolvimento da fala",
        "dificuldade": "media",
        "pergunta": "Uma família teme que a introdução de CAA faça a criança 'desistir de falar'. A orientação pedagógica mais adequada é",
        "alternativas": [
            "adiar a CAA até o fim do período de alfabetização para verificar se a fala se desenvolve espontaneamente com as interações escolares.",
            "usar a CAA apenas em situações de crise, mantendo a linguagem oral como via principal nas demais rotinas para estimular esforço comunicativo.",
            "explicar que a CAA amplia meios de comunicação e pode coexistir com fala, gestos e outras formas, devendo ser usada quando favorecer comunicação funcional e participação.",
            "selecionar somente recursos sem símbolos gráficos, porque pictogramas criam dependência visual e reduzem a necessidade de produção oral.",
            "substituir gradualmente qualquer tentativa de fala pela CAA para evitar frustração e tornar o sistema alternativo a única via estável de comunicação, ainda que a escola registre a medida no planejamento e a revise periodicamente."
        ],
        "correta": 2,
        "feedbackAcerto": "Você evitou um mito frequente: CAA não precisa competir com a fala. O foco é garantir comunicação funcional e participação.",
        "feedbackErro": "A decisão não deve privar a pessoa de um meio de comunicação enquanto se espera desenvolvimento oral. CAA pode coexistir com outras modalidades.",
        "analiseAlternativas": [
            "Incorreta. Adiar acesso à comunicação pode aumentar barreiras e participação reduzida.",
            "Incorreta. Uso apenas em crises impede aprendizagem consistente e generalização.",
            "Correta. O sistema pode complementar fala, gestos e outros recursos conforme a necessidade.",
            "Incorreta. Símbolos gráficos não são proibidos nem implicam automaticamente dependência prejudicial.",
            "Incorreta. A CAA não exige eliminar tentativas de fala; pode ser multimodal. O acréscimo administrativo não corrige o erro conceitual da alternativa."
        ],
        "dicaBanca": "Alternativas que colocam 'fala versus CAA' como escolha excludente costumam estar erradas.",
        "pegadinha": "Comunicação multimodal é possível e frequentemente desejável.",
        "memorizar2026": "CAA não precisa substituir fala; ela assegura comunicação agora e pode coexistir com outras formas.",
        "fonte": "Inep/MEC; FGV/SEDUC-SP 2026; princípios de CAA."
    },
    {
        "id": "SEDUC-EE-CAA-014",
        "numero": 14,
        "subtopico": "Recursos pedagógicos acessíveis",
        "dificuldade": "media",
        "pergunta": "Um recurso pedagógico acessível é melhor definido como aquele que",
        "alternativas": [
            "possui tecnologia digital incorporada e pode ser utilizado pelo maior número possível de estudantes sem qualquer adaptação individual, ainda que a escola registre a medida no planejamento e a revise periodicamente.",
            "é produzido exclusivamente pelo professor do AEE e empregado no contraturno para compensar dificuldades observadas no currículo comum.",
            "remove ou reduz barreiras de acesso, participação e expressão, sendo selecionado pela funcionalidade e pelas demandas da atividade e do estudante.",
            "reduz a complexidade dos objetivos curriculares para tornar a tarefa compatível com o diagnóstico do estudante.",
            "é identificado previamente por categoria de deficiência e aplicado de maneira semelhante a estudantes com o mesmo diagnóstico."
        ],
        "correta": 2,
        "feedbackAcerto": "Você definiu acessibilidade pela função: remover barreiras e permitir acesso, participação e expressão no contexto real.",
        "feedbackErro": "O recurso não é acessível por ser digital, por vir do AEE ou por simplificar conteúdo. Ele é acessível quando responde à barreira e ao objetivo pedagógico.",
        "analiseAlternativas": [
            "Incorreta. Recursos acessíveis podem ser simples ou complexos e ainda requerer ajustes individualizados. O acréscimo administrativo não corrige o erro conceitual da alternativa.",
            "Incorreta. AEE pode colaborar, mas acessibilidade deve chegar às atividades da classe comum e aos demais espaços.",
            "Correta. Funcionalidade, barreira, contexto e objetivo pedagógico orientam a escolha.",
            "Incorreta. Acessibilizar não significa reduzir objetivos por diagnóstico.",
            "Incorreta. Pessoas com o mesmo diagnóstico podem ter necessidades e formas de acesso diferentes."
        ],
        "dicaBanca": "FGV tende a trocar 'funcionalidade' por 'sofisticação tecnológica' ou 'diagnóstico'.",
        "pegadinha": "Recurso bonito ou moderno não é automaticamente acessível.",
        "memorizar2026": "Acessível = adequado à barreira + ao estudante + à tarefa + ao contexto.",
        "fonte": "LBI, art. 28; Decreto 12.686/2025; Inep/MEC."
    },
    {
        "id": "SEDUC-EE-CAA-015",
        "numero": 15,
        "subtopico": "Comunicação no currículo comum",
        "dificuldade": "alta",
        "pergunta": "Em uma aula de História, o estudante utiliza CAA para responder perguntas, fazer comentários e discordar dos colegas. Um professor sugere retirar a prancha porque 'a atividade é acadêmica, não de comunicação'. A decisão correta é",
        "alternativas": [
            "retirar a prancha nas atividades avaliativas, mas mantê-la em debates informais para preservar a validade acadêmica das respostas escritas.",
            "manter o sistema disponível, porque comunicação é meio de acesso e expressão também nas atividades curriculares e pode viabilizar participação acadêmica.",
            "substituir a CAA por respostas de múltipla escolha sempre que o conteúdo exigir análise, pois sistemas simbólicos são adequados apenas a mensagens concretas.",
            "usar o recurso somente quando o professor do AEE estiver presente para verificar se a seleção dos símbolos corresponde ao conteúdo ensinado.",
            "permitir a prancha somente para perguntas e pedidos, deixando comentários e discordâncias para formas convencionais de linguagem."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu que comunicação atravessa o currículo. A CAA pode ser a via pela qual o estudante expressa conhecimento, opinião e participação acadêmica.",
        "feedbackErro": "Retirar o sistema justamente em atividades acadêmicas transforma o meio de comunicação em barreira. A avaliação deve focar o objetivo, não impor forma inacessível de resposta.",
        "analiseAlternativas": [
            "Incorreta. Acessibilidade também se aplica às avaliações quando o recurso não altera indevidamente o construto avaliado.",
            "Correta. CAA pode sustentar participação em debates, respostas, produção de ideias e demonstração de aprendizagem.",
            "Incorreta. Sistemas podem apoiar mensagens complexas quando vocabulário, acesso e ensino são adequados.",
            "Incorreta. O uso funcional não deve depender da presença constante do professor do AEE.",
            "Incorreta. Restringir funções comunicativas reduz voz e participação."
        ],
        "dicaBanca": "Pergunte: a banca está retirando o meio de expressão justamente quando o aluno precisa demonstrar aprendizagem?",
        "pegadinha": "CAA não é só recurso de necessidade básica; é acesso à participação curricular.",
        "memorizar2026": "Direito ao currículo inclui meios acessíveis para expressar conhecimento.",
        "fonte": "LBI, art. 28; Decreto 12.686/2025; Inep/MEC."
    },
    {
        "id": "SEDUC-EE-CAA-016",
        "numero": 16,
        "subtopico": "Família e continuidade",
        "dificuldade": "media",
        "pergunta": "Para favorecer continuidade no uso de um sistema de CAA entre escola e casa, a prática mais adequada é",
        "alternativas": [
            "entregar à família o mesmo material usado na escola e orientar que não faça alterações, garantindo padronização absoluta do sistema.",
            "orientar a família apenas depois que o estudante alcançar independência escolar, evitando interferências precoces na aprendizagem do recurso.",
            "construir parceria com a família, compartilhar estratégias, observar necessidades de outros contextos e ajustar vocabulário e formas de uso de maneira colaborativa.",
            "solicitar que a família utilize somente perguntas fechadas em casa, enquanto a escola fica responsável por desenvolver comunicação mais complexa, ainda que a escola registre a medida no planejamento e a revise periodicamente.",
            "concentrar as decisões na equipe técnica, mantendo a família informada apenas sobre resultados para evitar mudanças não planejadas no sistema."
        ],
        "correta": 2,
        "feedbackAcerto": "Você valorizou parceria e continuidade entre contextos, sem transformar a família em mera executora de orientações.",
        "feedbackErro": "CAA precisa funcionar na vida real. Informações da família ajudam a identificar vocabulário, situações e funções que podem não aparecer na escola.",
        "analiseAlternativas": [
            "Incorreta. Consistência é importante, mas o sistema precisa ser ajustável às necessidades e contextos, não rigidamente imutável.",
            "Incorreta. A participação familiar pode ocorrer desde o planejamento e facilita generalização.",
            "Correta. Troca de informações e ajustes colaborativos tornam o sistema mais funcional em diferentes ambientes.",
            "Incorreta. Restringir funções comunicativas em casa reduz oportunidades de uso significativo. O acréscimo administrativo não corrige o erro conceitual da alternativa.",
            "Incorreta. A família não deve ser apenas receptora de decisões técnicas."
        ],
        "dicaBanca": "FGV costuma tratar família como parceira real, não como quem apenas assina ou recebe orientação pronta.",
        "pegadinha": "Mesmo sistema não significa uso idêntico e rígido em todos os contextos.",
        "memorizar2026": "Família + escola + estudante = continuidade, vocabulário funcional e generalização.",
        "fonte": "Decreto 12.686/2025; princípios de planejamento colaborativo do AEE."
    },
    {
        "id": "SEDUC-EE-CAA-017",
        "numero": 17,
        "subtopico": "Monitoramento e abandono do recurso",
        "dificuldade": "alta",
        "pergunta": "Um estudante deixa de usar o aplicativo de CAA após algumas semanas. Antes de concluir que 'ele não quer se comunicar', a equipe deve",
        "alternativas": [
            "retirar definitivamente o sistema e aguardar nova indicação clínica, pois a rejeição espontânea demonstra ausência de prontidão para CAA.",
            "verificar fatores como acesso motor, vocabulário, velocidade, disponibilidade do recurso, oportunidades de uso, resposta dos parceiros e adequação aos contextos.",
            "reduzir o vocabulário às necessidades básicas para diminuir a carga cognitiva, independentemente das funções comunicativas que o estudante vinha tentando exercer.",
            "transferir a responsabilidade pelo recurso ao profissional de apoio, que poderá decidir quando o estudante deve ou não utilizá-lo durante o dia.",
            "manter o aplicativo sem alterações por um período mínimo padronizado, porque ajustes precoces impedem distinguir dificuldade de aprendizagem de resistência comportamental."
        ],
        "correta": 1,
        "feedbackAcerto": "Você tratou o abandono como dado para avaliação, não como prova de incapacidade ou falta de interesse.",
        "feedbackErro": "A efetividade depende de mais do que o recurso em si. Barreiras de acesso, vocabulário inadequado, pouca modelagem, baixa disponibilidade e parceiros pouco responsivos podem reduzir o uso.",
        "analiseAlternativas": [
            "Incorreta. Abandono não deve ser interpretado automaticamente como ausência de prontidão nem exige indicação clínica para reavaliar.",
            "Correta. Avaliação ecológica do sistema e dos parceiros ajuda a identificar por que o recurso não está funcionando.",
            "Incorreta. Simplificar vocabulário sem investigar a causa pode limitar ainda mais a comunicação.",
            "Incorreta. Apoio profissional não substitui decisão colaborativa nem autonomia do estudante.",
            "Incorreta. Monitoramento pressupõe ajustes quando evidências indicam barreiras."
        ],
        "dicaBanca": "Questões difíceis podem colocar o 'problema' no aluno; procure fatores do sistema, do contexto e dos parceiros.",
        "pegadinha": "Se a CAA não funciona, avalie também o ambiente e a implementação.",
        "memorizar2026": "Recurso precisa ser selecionado, ensinado, monitorado e ajustado.",
        "fonte": "Inep/MEC; Tecnologia Assistiva; implementação de CAA."
    },
    {
        "id": "SEDUC-EE-CAA-018",
        "numero": 18,
        "subtopico": "LBI e acessibilidade comunicacional",
        "dificuldade": "alta",
        "pergunta": "Após a Lei nº 15.249/2025, o art. 17 da Lei nº 10.098/2000 passou a mencionar expressamente pessoas com necessidades complexas de comunicação. A consequência normativa é que o poder público deve",
        "alternativas": [
            "condicionar a instalação de recursos comunicacionais à comprovação individual de deficiência por laudo, para assegurar uso apenas pelo público-alvo.",
            "substituir os sistemas convencionais de sinalização por pictogramas em todos os espaços públicos, independentemente do público e do contexto.",
            "priorizar exclusivamente recursos eletrônicos com sintetizador de voz, por oferecerem maior repertório comunicativo que pranchas impressas.",
            "limitar a acessibilidade comunicacional às áreas de saúde e educação, pois os demais direitos permanecem disciplinados apenas pela LBI.",
            "garantir mecanismos e alternativas técnicas que tornem sistemas de comunicação e sinalização acessíveis, incluindo medidas de CAA previstas em lei."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou o dever geral de eliminação de barreiras comunicacionais e a ampliação legal para necessidades complexas de comunicação.",
        "feedbackErro": "A alteração não substitui toda sinalização por pictogramas, não prioriza apenas alta tecnologia e não restringe o direito a saúde e educação.",
        "analiseAlternativas": [
            "Incorreta. O dever de acessibilidade não está condicionado a laudo individual para cada usuário.",
            "Incorreta. A lei prevê contextualização, não substituição universal da sinalização convencional.",
            "Incorreta. A atualização legal destaca inclusive soluções de baixa tecnologia.",
            "Incorreta. O art. 17 menciona informação, comunicação, trabalho, educação, transporte, cultura, esporte e lazer.",
            "Correta. O art. 17 determina mecanismos e alternativas técnicas de acessibilidade comunicacional e a lei acrescentou pranchas de CAA de baixa tecnologia em espaços públicos."
        ],
        "dicaBanca": "Norma recente: observe os direitos enumerados e a ampliação para necessidades complexas de comunicação.",
        "pegadinha": "Lei 15.249/2025 não é uma lei de 'aplicativos'; ela valoriza também baixa tecnologia contextualizada.",
        "memorizar2026": "Acessibilidade comunicacional alcança diversos direitos e espaços sociais.",
        "fonte": "Lei 10.098/2000, art. 17, redação da Lei 15.249/2025."
    },
    {
        "id": "SEDUC-EE-CAA-019",
        "numero": 19,
        "subtopico": "FGV — etapas da implementação",
        "dificuldade": "alta",
        "pergunta": "Considere as etapas de implementação de CAA: 1. avaliação inicial; 2. escolha do sistema; 3. treinamento dos parceiros; 4. integração nos contextos. Relacione-as às ações: ( ) selecionar baixa ou alta tecnologia conforme acesso e necessidade; ( ) ensinar professores e cuidadores a modelar; ( ) levar o sistema para sala, recreio e alimentação; ( ) identificar repertório comunicativo existente. A sequência correta é",
        "alternativas": [
            "2 – 3 – 4 – 1.",
            "1 – 2 – 3 – 4.",
            "2 – 4 – 3 – 1.",
            "3 – 2 – 4 – 1.",
            "4 – 3 – 2 – 1."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu a mesma lógica de implementação explorada pela FGV em 2026.",
        "feedbackErro": "Seleção do sistema corresponde à primeira descrição; treinamento dos parceiros à segunda; integração nos contextos à terceira; avaliação inicial à quarta.",
        "analiseAlternativas": [
            "Correta. 2 – 3 – 4 – 1.",
            "Incorreta. Troca avaliação inicial pela escolha do sistema na primeira ação.",
            "Incorreta. A segunda ação é treinamento de parceiros, não integração nos contextos.",
            "Incorreta. A primeira ação é escolha do sistema, não treinamento dos parceiros.",
            "Incorreta. A primeira ação não é integração contextual, e sim seleção do sistema."
        ],
        "dicaBanca": "Esse formato foi usado diretamente na prova FGV SEDUC-SP 2026.",
        "pegadinha": "Julgue a função de cada etapa antes de olhar as sequências.",
        "memorizar2026": "Avaliar → escolher → treinar parceiros → integrar nos contextos.",
        "fonte": "FGV/SEDUC-SP 2026, questão 19."
    },
    {
        "id": "SEDUC-EE-CAA-020",
        "numero": 20,
        "subtopico": "V/F — CAA e TA",
        "dificuldade": "alta",
        "pergunta": "Analise as afirmativas sobre CAA e recursos de Tecnologia Assistiva:",
        "alternativas": [
            "V – V – F.",
            "V – F – V.",
            "F – V – V.",
            "V – F – F.",
            "F – F – V."
        ],
        "correta": 1,
        "feedbackAcerto": "Você julgou corretamente: pranchas impressas podem ser CAA; TA não deve separar o aluno da turma; recursos acessíveis podem ampliar autonomia e participação.",
        "feedbackErro": "A segunda afirmativa é falsa porque a Tecnologia Assistiva deve favorecer participação, e não criar um circuito paralelo de escolarização.",
        "analiseAlternativas": [
            "Incorreta. A segunda afirmativa é falsa e a terceira é verdadeira.",
            "Correta. A sequência é V – F – V.",
            "Incorreta. A primeira afirmativa é verdadeira.",
            "Incorreta. A terceira afirmativa também é verdadeira.",
            "Incorreta. A primeira afirmativa é verdadeira."
        ],
        "dicaBanca": "FGV 2026 usou praticamente esse eixo de raciocínio: recurso simples também é TA; participação comum é a finalidade.",
        "pegadinha": "Tecnologia correta usada para segregar continua sendo uma prática errada.",
        "memorizar2026": "TA/CAA: acessibilidade + autonomia + participação na atividade comum.",
        "fonte": "FGV/SEDUC-SP 2026, questão 30.",
        "afirmacoes": [
            "I. Uma prancha impressa pode constituir recurso de CAA e permitir expressão de escolhas, sentimentos, respostas e necessidades.",
            "II. A Tecnologia Assistiva deve priorizar atividades separadas da classe comum para reduzir a interferência das barreiras do currículo.",
            "III. Recursos de acessibilidade ao computador e materiais pedagógicos adaptados podem ampliar autonomia e participação no cotidiano escolar."
        ]
    },
    {
        "id": "SEDUC-EE-CAA-021",
        "numero": 21,
        "subtopico": "AEE e classe comum",
        "dificuldade": "media",
        "pergunta": "No planejamento escolar, a função do AEE em relação aos recursos de CAA é",
        "alternativas": [
            "identificar, organizar e ensinar o uso de recursos e estratégias de acessibilidade, articulando-os às demandas da classe comum sem substituir a escolarização.",
            "concentrar o ensino da comunicação no contraturno, para que o professor regente mantenha as mesmas formas de interação previstas para a turma.",
            "assumir a avaliação acadêmica do estudante que utiliza CAA, uma vez que o professor da classe comum pode ter dificuldade para interpretar suas respostas, ainda que a escola registre a medida no planejamento e a revise periodicamente.",
            "definir um sistema exclusivo para o ambiente escolar, evitando interferência de formas comunicativas utilizadas em casa ou em outros contextos.",
            "substituir as atividades da turma por exercícios funcionais quando a comunicação convencional for insuficiente para acompanhar o conteúdo."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou a natureza complementar do AEE e sua função de organizar recursos de acessibilidade em articulação com a classe comum.",
        "feedbackErro": "AEE não cria um currículo paralelo nem tira do professor regente a responsabilidade pela escolarização. O recurso precisa repercutir no acesso às atividades comuns.",
        "analiseAlternativas": [
            "Correta. O AEE identifica e organiza recursos e apoia sua usabilidade pedagógica sem substituir a classe comum.",
            "Incorreta. O professor regente também precisa aprender a interagir com o estudante e usar os recursos no cotidiano.",
            "Incorreta. Avaliação curricular continua vinculada à escolarização comum, com acessibilidade e colaboração quando necessária. O acréscimo administrativo não corrige o erro conceitual da alternativa.",
            "Incorreta. Sistemas devem favorecer continuidade entre contextos, não impor separação rígida.",
            "Incorreta. CAA amplia acesso ao currículo; não justifica substituir o currículo comum por tarefas funcionais."
        ],
        "dicaBanca": "A FGV frequentemente oferece 'AEE faz tudo' como distrator. AEE apoia e articula; não substitui.",
        "pegadinha": "AEE não é o único lugar onde o estudante pode se comunicar.",
        "memorizar2026": "AEE organiza acessibilidade para repercutir na participação da classe comum.",
        "fonte": "Decreto 12.686/2025; Inep/MEC; LBI."
    },
    {
        "id": "SEDUC-EE-CAA-022",
        "numero": 22,
        "subtopico": "EXCETO — práticas adequadas",
        "dificuldade": "alta",
        "pergunta": "As práticas a seguir favorecem uma implementação educacional adequada da CAA, à exceção de uma. Assinale-a.",
        "alternativas": [
            "disponibilizar o sistema ao longo do dia e em diferentes situações comunicativas relevantes.",
            "observar como o estudante acessa símbolos e ajustar posicionamento, tamanho ou método de seleção.",
            "ensinar parceiros a modelar o sistema e a esperar tempo suficiente para a elaboração da resposta.",
            "restringir inicialmente o recurso aos pedidos de itens preferidos até que o estudante prove domínio antes de usá-lo para comentar ou perguntar.",
            "revisar vocabulário e organização do sistema com base em novas demandas de participação e aprendizagem, ainda que a escola registre a medida no planejamento e a revise periodicamente."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou a exceção: limitar funções comunicativas até um domínio prévio cria uma barreira desnecessária.",
        "feedbackErro": "Disponibilidade, acesso ajustado, parceiros treinados e revisão de vocabulário favorecem uso funcional. A CAA não precisa ficar restrita a pedidos até que o estudante 'prove' capacidade.",
        "analiseAlternativas": [
            "Incorreta como resposta à exceção. Disponibilidade em diferentes contextos favorece generalização.",
            "Incorreta como resposta à exceção. Ajustar o acesso ao sistema é parte da implementação.",
            "Incorreta como resposta à exceção. Parceiros responsivos e modelagem apoiam aprendizagem do sistema.",
            "Correta como exceção. Restringir funções e exigir domínio prévio reduz oportunidades de comunicação.",
            "Incorreta como resposta à exceção. Vocabulário e organização devem evoluir com necessidades reais. O acréscimo administrativo não corrige o erro conceitual da alternativa."
        ],
        "dicaBanca": "Em questões de EXCETO, procure a prática que parece 'organizada', mas cria um pré-requisito para participação.",
        "pegadinha": "Treinar primeiro para participar depois é frequentemente uma lógica excludente.",
        "memorizar2026": "Participação também é contexto de aprendizagem da CAA.",
        "fonte": "FGV/SEDUC-SP 2026; princípios de CAA no AEE."
    },
    {
        "id": "SEDUC-EE-CAA-023",
        "numero": 23,
        "subtopico": "Caso escolar — TEA e CAA",
        "dificuldade": "alta",
        "pergunta": "Um estudante com TEA usa poucos gestos e vocalizações, frequentemente puxa o adulto até o objeto desejado e se frustra quando não é compreendido. Após estudo do repertório comunicativo, a escola decide implementar CAA. A medida mais coerente é",
        "alternativas": [
            "introduzir um sistema compatível com suas formas de acesso, ensinar parceiros a modelá-lo e criar oportunidades de uso para diferentes funções comunicativas ao longo das rotinas.",
            "aguardar que o estudante aprenda a imitar palavras e apontar objetos sob comando antes de apresentar símbolos, evitando excesso de informação no início.",
            "usar a prancha apenas nos episódios de frustração, para que o estudante continue tentando resolver as demais situações pela fala e pelos gestos espontâneos, ainda que a escola registre a medida no planejamento e a revise periodicamente.",
            "substituir as interações com colegas por sessões individuais até que o sistema esteja automatizado e as respostas ocorram sem mediação do adulto.",
            "limitar o vocabulário a objetos preferidos e necessidades básicas durante todo o primeiro ano de implementação, reduzindo demandas cognitivas."
        ],
        "correta": 0,
        "feedbackAcerto": "Você integrou avaliação, escolha funcional, parceiros e oportunidades naturais — os pilares de uma implementação educacional consistente.",
        "feedbackErro": "As alternativas erradas transformam habilidades desejáveis em pré-requisitos, restringem o recurso a crises ou pedidos, ou retiram o estudante de interações reais.",
        "analiseAlternativas": [
            "Correta. A implementação combina acesso adequado, modelagem dos parceiros e uso em diferentes funções e contextos.",
            "Incorreta. Imitar fala ou apontar sob comando não deve ser condição prévia para ter um meio de comunicação acessível.",
            "Incorreta. Uso esporádico só em crises reduz aprendizagem e generalização. O acréscimo administrativo não corrige o erro conceitual da alternativa.",
            "Incorreta. Participação com pares não deve ser adiada até domínio completo do sistema.",
            "Incorreta. Vocabulário precisa acompanhar interesses, currículo e diversas funções comunicativas, não permanecer limitado por prazo fixo."
        ],
        "dicaBanca": "Caso FGV: várias opções podem conter uma técnica conhecida; escolha a que preserva comunicação funcional e participação desde o início.",
        "pegadinha": "Não transforme 'treino' em condição para ter voz.",
        "memorizar2026": "CAA aprende-se comunicando em contextos reais.",
        "fonte": "FGV/SEDUC-SP 2026; Inep/MEC; Decreto 12.686/2025."
    },
    {
        "id": "SEDUC-EE-CAA-024",
        "numero": 24,
        "subtopico": "Recurso acessível — escolha funcional",
        "dificuldade": "alta",
        "pergunta": "Dois estudantes possuem o mesmo diagnóstico e necessidades complexas de comunicação. Um acessa bem uma prancha impressa; o outro utiliza melhor um dispositivo com varredura e acionador. Essa diferença demonstra que",
        "alternativas": [
            "recursos de alta tecnologia devem ser reservados ao estudante com maior comprometimento motor, enquanto baixa tecnologia é indicada aos demais.",
            "o diagnóstico não determina sozinho o recurso; a seleção deve considerar acesso, comunicação, preferências, tarefas e contextos de uso de cada pessoa.",
            "a escola deve escolher um único sistema para estudantes com o mesmo diagnóstico, porque a consistência institucional favorece aprendizagem e reduz custos.",
            "a diferença entre os sistemas é apenas de conveniência, pois ambos oferecem equivalência funcional independentemente da forma de acesso do estudante.",
            "o estudante que necessita de varredura deve realizar primeiro treino motor no AEE antes de utilizar o dispositivo em atividades da classe comum."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu a individualização funcional. Diagnóstico informa parte do quadro, mas não decide método de acesso nem tecnologia.",
        "feedbackErro": "Recursos são escolhidos para pessoas e situações concretas. Mesmo diagnóstico pode coexistir com perfis motores, sensoriais, linguísticos e preferências muito diferentes.",
        "analiseAlternativas": [
            "Incorreta. Grau de tecnologia não é definido por uma hierarquia fixa de comprometimento.",
            "Correta. A seleção precisa considerar funcionalidade, acesso, preferências, demandas e ambientes.",
            "Incorreta. Padronização por diagnóstico ignora diferenças individuais e pode criar barreiras.",
            "Incorreta. Método de acesso interfere diretamente na funcionalidade do sistema para cada pessoa.",
            "Incorreta. O acesso ao recurso não deve ser adiado até treino motor prévio quando adaptações podem permitir participação agora."
        ],
        "dicaBanca": "FGV costuma colocar o diagnóstico como 'atalho' para escolher recurso. A resposta inclusiva é funcional e contextual.",
        "pegadinha": "Mesmo diagnóstico ≠ mesmo recurso.",
        "memorizar2026": "Escolha de CAA/TA: pessoa + tarefa + ambiente + acesso + participação.",
        "fonte": "LBI; Decreto 12.686/2025; FGV/SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-CAA-025",
        "numero": 25,
        "subtopico": "Caso integrado FGV",
        "dificuldade": "alta",
        "pergunta": "Uma estudante com necessidades complexas de comunicação utiliza prancha impressa na escola e aplicativo com voz em casa. Na classe comum, a professora percebe que os colegas raramente aguardam sua resposta e que o vocabulário da prancha não inclui termos do projeto de Ciências. A melhor intervenção é",
        "alternativas": [
            "padronizar imediatamente o aplicativo de casa como sistema único, porque a alta tecnologia oferece mais vocabulário e elimina a necessidade de estratégias de parceria.",
            "manter a prancha atual até o fim do bimestre para preservar estabilidade e orientar os colegas a formular apenas perguntas de resposta sim/não.",
            "transferir ao AEE a responsabilidade de responder às atividades de Ciências, garantindo que a estudante use o sistema somente após dominar o novo vocabulário.",
            "articular estudante, família, AEE e professora para revisar vocabulário e acesso, ensinar parceiros a dar tempo e modelar o sistema, e garantir uso funcional durante o próprio projeto.",
            "reduzir a participação oral da estudante no projeto e priorizar entregas escritas, evitando que as diferenças entre os sistemas de casa e escola afetem o ritmo da turma, ainda que a escola registre a medida no planejamento e a revise periodicamente."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reuniu os elementos centrais do bloco: sistema ajustável, parceria, modelagem, tempo de resposta, continuidade entre contextos e participação no currículo comum.",
        "feedbackErro": "A solução não é escolher automaticamente a tecnologia mais sofisticada, congelar o sistema, transferir a responsabilidade ao AEE ou reduzir participação. O recurso deve responder às demandas reais da atividade.",
        "analiseAlternativas": [
            "Incorreta. Alta tecnologia não é superior por definição e não elimina a importância dos parceiros.",
            "Incorreta. Estabilidade não significa manter vocabulário insuficiente; perguntas fechadas também não substituem participação ampla.",
            "Incorreta. O AEE apoia a acessibilidade, mas não responde atividades no lugar da estudante nem exige domínio prévio para participar.",
            "Correta. A intervenção atua no sistema, nos parceiros e no contexto curricular, preservando autoria e participação.",
            "Incorreta. Reduzir oportunidades de expressão por causa da acessibilidade necessária é exclusão pedagógica. O acréscimo administrativo não corrige o erro conceitual da alternativa."
        ],
        "dicaBanca": "No caso integrado, procure a alternativa que muda recurso + parceiros + ambiente sem retirar o estudante da atividade comum.",
        "pegadinha": "Recurso adequado com parceiro inadequado ainda pode produzir barreira.",
        "memorizar2026": "CAA funcional = sistema acessível + vocabulário relevante + parceiros responsivos + uso no currículo.",
        "fonte": "Lei 15.249/2025; Decreto 12.686/2025; Inep/MEC; FGV/SEDUC-SP 2026."
    }
];

    window.seducEducacaoEspecialRecursosPedagogicosAcessiveisCAA2026 = banco;
})();
