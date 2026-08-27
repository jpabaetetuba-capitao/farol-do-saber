// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// TRABALHO COLABORATIVO — BANCO REVISADO
// Base: LBI, Decreto nº 12.686/2025 (redação vigente),
// PAEE/PEI, AEE e atuação articulada da equipe escolar.
// Foco no padrão Instituto Ágata.
// 50 questões + feedbacks específicos + sem numeração fixa.
// Revisão: 27/08/2026
// ============================================================

const apoioTrabalhoColaborativo = [
    {
        "pergunta": "Em trabalho colaborativo, professor e profissional de apoio devem:",
        "alternativas": [
            "trabalhar de modo independente para evitar interferência nas decisões um do outro.",
            "dividir igualmente todas as atribuições pedagógicas e funcionais da turma.",
            "atuar de forma articulada, preservando as atribuições próprias de cada função.",
            "subordinar toda decisão pedagógica à rotina observada pelo profissional de apoio.",
            "concentrar o planejamento apenas no profissional que acompanha o estudante mais de perto."
        ],
        "correta": 2,
        "explicacao": "O trabalho colaborativo pressupõe articulação entre profissionais sem apagar os limites de cada função.",
        "feedbackAcerto": "Correto. Colaboração significa compartilhar informações e alinhar estratégias, não transformar apoio e docência em funções equivalentes.",
        "feedbackErro": "Se você marcou divisão igual de todas as atribuições, confundiu colaboração com substituição de papéis. O professor continua responsável pelo planejamento e pela avaliação pedagógica.",
        "dicaBanca": "Ágata costuma criar distratores que transformam colaboração em autonomia pedagógica do apoio."
    },
    {
        "pergunta": "Quando o profissional de apoio observa uma barreira durante uma atividade, a conduta mais adequada é:",
        "alternativas": [
            "substituir a atividade por outra elaborada individualmente pelo apoio.",
            "modificar imediatamente o planejamento sem comunicar os demais profissionais.",
            "retirar o estudante da atividade e informar a família ao fim do turno.",
            "manter a estratégia original para evitar interferência no trabalho docente.",
            "registrar a observação e dialogar com professor e equipe para ajustar a estratégia."
        ],
        "correta": 4,
        "explicacao": "Observações da rotina devem alimentar o planejamento colaborativo e não gerar mudanças pedagógicas unilaterais.",
        "feedbackAcerto": "Correto. O apoio contribui com informação concreta para que a equipe decida se o planejamento precisa ser ajustado.",
        "feedbackErro": "O erro é agir sozinho ou silenciar uma barreira relevante. Colaboração exige circulação responsável de informações.",
        "dicaBanca": "Observe se a alternativa preserva diálogo e papéis profissionais."
    },
    {
        "pergunta": "Em reunião pedagógica, uma contribuição adequada do profissional de apoio é:",
        "alternativas": [
            "apresentar informações familiares sem relação com a participação escolar.",
            "emitir diagnóstico clínico a partir do comportamento apresentado pelo estudante.",
            "definir sozinho os objetivos curriculares para acelerar a tomada de decisão.",
            "relatar fatos objetivos sobre participação, autonomia, barreiras e apoios observados.",
            "recusar-se a participar porque sua função se limita ao cuidado físico."
        ],
        "correta": 3,
        "explicacao": "O apoio pode oferecer observações funcionais relevantes para o planejamento sem invadir atribuições clínicas ou docentes.",
        "feedbackAcerto": "Correto. O relato objetivo amplia a compreensão da equipe sobre o que funciona e o que ainda constitui barreira.",
        "feedbackErro": "Se você escolheu diagnóstico ou definição curricular autônoma, ultrapassou a função de apoio; se escolheu omissão, perdeu a dimensão colaborativa do cargo.",
        "dicaBanca": "Relato objetivo é diferente de diagnóstico ou julgamento."
    },
    {
        "pergunta": "O professor propõe uma adaptação e o profissional de apoio discorda. O primeiro passo mais adequado é:",
        "alternativas": [
            "retirar o estudante da atividade até que a direção decida o caso.",
            "aplicar outra tarefa por conta própria para testar uma solução mais simples.",
            "informar diretamente à família que a proposta docente está inadequada.",
            "dialogar sobre a dificuldade observada e buscar alinhamento com a equipe pedagógica.",
            "manter a discordância em silêncio para não interferir na condução do professor."
        ],
        "correta": 3,
        "explicacao": "Divergências devem ser tratadas por comunicação profissional e alinhamento pedagógico.",
        "feedbackAcerto": "Correto. O apoio pode questionar e contribuir, mas a solução deve ser construída com professor e equipe.",
        "feedbackErro": "O erro está nos extremos: alterar sozinho ou omitir uma dificuldade real. Trabalho colaborativo envolve diálogo responsável.",
        "dicaBanca": "Na Ágata, a alternativa correta costuma preservar articulação sem invasão de competência."
    },
    {
        "pergunta": "PAEE e PEI, na política vigente, orientam também:",
        "alternativas": [
            "apenas o atendimento realizado fora da sala comum.",
            "atividades colaborativas desenvolvidas no estabelecimento de ensino.",
            "somente o trabalho individual do professor do AEE.",
            "exclusivamente a atuação da família no ambiente doméstico.",
            "apenas procedimentos clínicos relacionados à deficiência."
        ],
        "correta": 1,
        "explicacao": "O Decreto nº 12.686/2025, com redação atual, prevê que PAEE e PEI orientem sala comum, AEE, atividades colaborativas e articulação intersetorial.",
        "feedbackAcerto": "Correto. Os planos não ficam restritos ao AEE; eles articulam os diferentes profissionais e contextos escolares.",
        "feedbackErro": "Se você limitou os planos a um único profissional ou ambiente, reduziu o alcance dado pela norma vigente.",
        "dicaBanca": "PAEE/PEI são instrumentos de articulação, não documentos isolados."
    },
    {
        "pergunta": "A atuação do profissional de apoio deve ocorrer em consonância com:",
        "alternativas": [
            "somente orientações verbais da família e do estudante.",
            "PAEE, PEI e planejamento pedagógico definido pela equipe escolar.",
            "apenas diagnóstico e laudo emitidos por profissional de saúde.",
            "exclusivamente decisões tomadas pelo profissional do AEE.",
            "preferências pessoais construídas pela experiência diária com o estudante."
        ],
        "correta": 1,
        "explicacao": "A regulamentação atual vincula a atuação do apoio aos instrumentos pedagógicos e à equipe.",
        "feedbackAcerto": "Correto. O profissional participa da execução dos apoios planejados e comunica necessidades de revisão quando necessário.",
        "feedbackErro": "O erro é deslocar o centro do planejamento para laudo, preferência individual ou uma única pessoa da equipe.",
        "dicaBanca": "Articulação pedagógica é mais importante do que decisões isoladas."
    },
    {
        "pergunta": "Em um trabalho colaborativo de qualidade, a comunicação entre os profissionais deve ser:",
        "alternativas": [
            "baseada principalmente em impressões pessoais sobre a família.",
            "informal, ampla e aberta a qualquer pessoa da comunidade escolar.",
            "objetiva, respeitosa e voltada às necessidades educacionais do estudante.",
            "restrita às situações em que ocorre acidente ou conflito grave.",
            "concentrada apenas na direção para evitar diálogo entre os profissionais."
        ],
        "correta": 2,
        "explicacao": "Comunicação colaborativa deve ser pertinente, profissional e orientada ao processo educacional.",
        "feedbackAcerto": "Correto. A equipe precisa trocar informações úteis sem transformar a rotina do estudante em assunto informal.",
        "feedbackErro": "O erro é confundir colaboração com divulgação ampla ou comunicação apenas em crises.",
        "dicaBanca": "Comunicação eficaz é objetiva e tem finalidade pedagógica."
    },
    {
        "pergunta": "Quando uma informação sensível precisa ser compartilhada entre profissionais, o critério mais adequado é:",
        "alternativas": [
            "compartilhar apenas o necessário para a finalidade educacional e pelos canais apropriados.",
            "compartilhar todo o histórico para evitar que algum profissional fique sem informação.",
            "repassar a informação em grupo informal desde que somente servidores participem.",
            "divulgar o diagnóstico à turma quando isso facilitar a convivência escolar.",
            "evitar qualquer compartilhamento, mesmo quando necessário ao atendimento."
        ],
        "correta": 0,
        "explicacao": "Colaboração e sigilo coexistem: informação necessária pode circular de forma protegida e com finalidade definida.",
        "feedbackAcerto": "Correto. O princípio não é esconder tudo nem divulgar tudo, mas compartilhar o necessário com quem precisa atuar.",
        "feedbackErro": "O erro está tanto na divulgação excessiva quanto no silêncio que prejudica o apoio.",
        "dicaBanca": "Sigilo não impede trabalho em equipe; orienta como a informação circula."
    },
    {
        "pergunta": "O trabalho colaborativo com a família deve:",
        "alternativas": [
            "permitir que a família substitua o professor nas decisões curriculares.",
            "transferir à família a definição final das estratégias pedagógicas da turma.",
            "limitar-se à assinatura de documentos e autorizações formais.",
            "acolher contribuições e manter as responsabilidades próprias da escola e da equipe.",
            "ser evitado quando os profissionais já conhecem as necessidades do estudante."
        ],
        "correta": 3,
        "explicacao": "A família participa do processo, mas não substitui as responsabilidades pedagógicas da escola.",
        "feedbackAcerto": "Correto. A colaboração familiar acrescenta informações e acompanhamento sem transferir atribuições institucionais.",
        "feedbackErro": "Se você escolheu decisão pedagógica exclusiva da família, confundiu participação com transferência de responsabilidade.",
        "dicaBanca": "Participação familiar é importante, mas não elimina os papéis profissionais."
    },
    {
        "pergunta": "Uma família relata que determinada estratégia funciona bem em casa. A equipe escolar deve:",
        "alternativas": [
            "ignorar a informação porque a família não integra a equipe profissional.",
            "aplicar a estratégia exatamente da mesma forma sem avaliação pedagógica.",
            "considerar a informação e avaliar sua pertinência no contexto educacional.",
            "substituir o planejamento escolar pela rotina utilizada em casa.",
            "usar a estratégia somente se houver prescrição de profissional de saúde."
        ],
        "correta": 2,
        "explicacao": "Informações familiares podem contribuir para o estudo de caso e para a escolha de estratégias, mas precisam ser contextualizadas.",
        "feedbackAcerto": "Correto. Colaboração não significa copiar automaticamente uma prática doméstica, e sim avaliar se ela ajuda no ambiente escolar.",
        "feedbackErro": "O erro é ignorar a família ou transformar sua experiência em ordem pedagógica automática.",
        "dicaBanca": "Contextualizar é melhor do que simplesmente copiar ou rejeitar."
    },
    {
        "pergunta": "Quando o estudante consegue expressar sua preferência sobre um apoio, a equipe deve:",
        "alternativas": [
            "considerá-la na análise e no planejamento, respeitando segurança e objetivos educacionais.",
            "desconsiderá-la porque decisões escolares pertencem somente aos adultos.",
            "adotá-la sempre, mesmo quando inviável ou insegura.",
            "consultar apenas a família para validar qualquer escolha do estudante.",
            "substituí-la pela decisão do profissional que o acompanha diariamente."
        ],
        "correta": 0,
        "explicacao": "A participação do próprio estudante integra a construção dos apoios e do estudo de caso.",
        "feedbackAcerto": "Correto. Ouvir o estudante amplia autonomia e qualidade do planejamento, sem eliminar critérios de segurança e finalidade pedagógica.",
        "feedbackErro": "O erro é retirar a voz do estudante ou tratar sua preferência como decisão absoluta sem análise.",
        "dicaBanca": "Participação do estudante é parte do trabalho colaborativo."
    },
    {
        "pergunta": "O professor do AEE e o professor da classe comum devem:",
        "alternativas": [
            "dividir as disciplinas da turma entre si conforme a necessidade do estudante.",
            "trabalhar separadamente para preservar a autonomia de cada atendimento.",
            "articular recursos e estratégias para que os apoios tenham efeito na rotina da sala comum.",
            "utilizar objetivos curriculares diferentes sem necessidade de diálogo.",
            "concentrar todo o planejamento do estudante no espaço do AEE."
        ],
        "correta": 2,
        "explicacao": "O AEE complementa ou suplementa a escolarização e precisa dialogar com a sala comum.",
        "feedbackAcerto": "Correto. O recurso desenvolvido no AEE só cumpre sua função se puder ser utilizado nos contextos reais de aprendizagem.",
        "feedbackErro": "O erro é transformar o AEE em serviço paralelo e desconectado da turma.",
        "dicaBanca": "AEE e classe comum devem ser articulados."
    },
    {
        "pergunta": "Um recurso de tecnologia assistiva funciona bem no AEE, mas não está sendo usado em sala. A ação colaborativa adequada é:",
        "alternativas": [
            "retirar o recurso porque ele não foi espontaneamente adotado pelo professor.",
            "manter o recurso apenas no AEE para preservar sua finalidade especializada.",
            "alinhar com os profissionais como incorporar o recurso às atividades da classe comum.",
            "deixar a decisão exclusivamente com o profissional de apoio.",
            "usar o recurso apenas em avaliações formais para reduzir interferências."
        ],
        "correta": 2,
        "explicacao": "Recursos assistivos precisam ser integrados aos contextos em que removem barreiras reais.",
        "feedbackAcerto": "Correto. A colaboração deve transformar um recurso técnico em ferramenta funcional na sala e nas demais atividades.",
        "feedbackErro": "O erro é confinar a tecnologia assistiva ao atendimento especializado.",
        "dicaBanca": "Recurso acessível precisa circular para ter função educacional."
    },
    {
        "pergunta": "Quando o profissional de apoio percebe que o estudante já precisa de menos ajuda, deve:",
        "alternativas": [
            "manter o mesmo apoio para garantir estabilidade da rotina.",
            "comunicar a evolução e colaborar para ajustar o nível de apoio à nova necessidade.",
            "retirar todo apoio sem comunicar professor ou equipe.",
            "solicitar automaticamente encerramento do PAEE e do PEI.",
            "manter a informação apenas com a família até o fim do período letivo."
        ],
        "correta": 1,
        "explicacao": "O apoio deve ser revisto continuamente conforme barreiras e potencialidades mudam.",
        "feedbackAcerto": "Correto. Trabalho colaborativo também serve para reduzir suporte quando ele deixa de ser necessário.",
        "feedbackErro": "O erro é tratar o apoio como quantidade fixa definida uma única vez.",
        "dicaBanca": "Plano individualizado exige atualização contínua."
    },
    {
        "pergunta": "Se o professor identifica que o estudante precisa de mais suporte em determinada atividade, deve:",
        "alternativas": [
            "reformular sozinho o apoio e comunicar apenas após o encerramento da atividade.",
            "transferir ao profissional de apoio toda a condução pedagógica daquela atividade.",
            "retirar o estudante da tarefa até que haja novo documento de saúde.",
            "solicitar que a família permaneça na escola para realizar o acompanhamento.",
            "dialogar com apoio e equipe para organizar a ajuda necessária sem alterar papéis funcionais."
        ],
        "correta": 4,
        "explicacao": "A ampliação de apoio deve ocorrer de forma articulada e preservando a responsabilidade docente pelo ensino.",
        "feedbackAcerto": "Correto. O professor continua responsável pela atividade e o apoio atua para remover barreiras.",
        "feedbackErro": "O erro é usar necessidade de suporte como motivo para transferir a docência ao profissional de apoio.",
        "dicaBanca": "Mais apoio não significa menos responsabilidade docente."
    },
    {
        "pergunta": "Em um plano colaborativo, a divisão de responsabilidades deve ser:",
        "alternativas": [
            "clara, coerente com as competências de cada profissional e conhecida pela equipe.",
            "flexível a ponto de permitir que qualquer profissional assuma qualquer função.",
            "definida exclusivamente pelo profissional que acompanha o estudante diariamente.",
            "mantida informal para facilitar ajustes rápidos durante a rotina.",
            "baseada apenas na disponibilidade de tempo de cada membro da equipe."
        ],
        "correta": 0,
        "explicacao": "Clareza de papéis reduz omissões, duplicidades e invasões de competência.",
        "feedbackAcerto": "Correto. A equipe pode colaborar intensamente sem apagar responsabilidades funcionais.",
        "feedbackErro": "O erro é interpretar flexibilidade como ausência de limites.",
        "dicaBanca": "Clareza de papel é elemento básico do trabalho colaborativo."
    },
    {
        "pergunta": "Uma reunião colaborativa produtiva deve priorizar:",
        "alternativas": [
            "decisões rápidas sem registro para evitar burocracia na rotina escolar.",
            "opiniões pessoais sobre a personalidade dos familiares e dos profissionais envolvidos.",
            "apenas problemas de comportamento ocorridos na semana anterior.",
            "discussões gerais sobre deficiência sem relação com o estudante atendido.",
            "barreiras observadas, objetivos, estratégias, responsabilidades e acompanhamento dos resultados."
        ],
        "correta": 4,
        "explicacao": "Planejamento colaborativo exige foco em informações que possam orientar ação e acompanhamento.",
        "feedbackAcerto": "Correto. A reunião deve produzir decisões claras, relacionadas a barreiras e objetivos educacionais.",
        "feedbackErro": "O erro é transformar reunião pedagógica em espaço de julgamento pessoal ou conversa sem encaminhamento.",
        "dicaBanca": "Boa questão prática: procure finalidade, ação e acompanhamento."
    },
    {
        "pergunta": "Após definir uma nova estratégia colaborativa, a equipe deve:",
        "alternativas": [
            "alterá-la somente quando houver novo laudo ou diagnóstico clínico.",
            "mantê-la até o fim do ano para evitar mudanças frequentes.",
            "considerá-la definitiva se houver concordância de todos na reunião.",
            "avaliar apenas se o profissional de apoio consegue executá-la com rapidez.",
            "acompanhar os efeitos e revisar a estratégia conforme os resultados observados."
        ],
        "correta": 4,
        "explicacao": "Planejamento inclusivo é contínuo e precisa ser monitorado.",
        "feedbackAcerto": "Correto. Uma estratégia adequada hoje pode precisar de ajuste depois, e os resultados devem orientar essa decisão.",
        "feedbackErro": "O erro é tratar planejamento como decisão imutável ou dependente de novo laudo.",
        "dicaBanca": "Planejar, executar, observar e revisar formam um ciclo."
    },
    {
        "pergunta": "Se dois profissionais dão orientações contraditórias ao estudante, a melhor providência é:",
        "alternativas": [
            "pedir à família que determine qual profissional deve ser seguido.",
            "deixar que o estudante escolha qual orientação seguirá naquele momento.",
            "manter ambas para observar qual produz melhor comportamento.",
            "alinhar a estratégia entre os profissionais antes de manter orientações divergentes.",
            "permitir que o apoio decida por conhecer melhor a rotina prática."
        ],
        "correta": 3,
        "explicacao": "Orientações incoerentes podem aumentar barreiras e insegurança; a equipe deve alinhar sua atuação.",
        "feedbackAcerto": "Correto. Trabalho colaborativo busca consistência entre os profissionais.",
        "feedbackErro": "O erro é transferir ao estudante ou à família um conflito de planejamento que cabe à equipe resolver.",
        "dicaBanca": "Coerência entre adultos também é apoio educacional."
    },
    {
        "pergunta": "Quando um estudante utiliza comunicação alternativa, professor e apoio devem:",
        "alternativas": [
            "substituir o recurso por perguntas de resposta apenas sim ou não.",
            "deixar o recurso apenas com o profissional de apoio.",
            "usar a comunicação alternativa somente em momentos de avaliação.",
            "combinar formas de favorecer o recurso nas interações e atividades da turma.",
            "permitir o recurso apenas quando o estudante não conseguir falar oralmente."
        ],
        "correta": 3,
        "explicacao": "A comunicação alternativa deve ser integrada à rotina e não confinada a uma pessoa ou ambiente.",
        "feedbackAcerto": "Correto. Professor, apoio e demais profissionais precisam favorecer oportunidades reais de comunicação.",
        "feedbackErro": "O erro é transformar o recurso em ferramenta exclusiva do apoio ou uso emergencial.",
        "dicaBanca": "Comunicação é responsabilidade do ambiente, não apenas de um profissional."
    },
    {
        "pergunta": "Uma estratégia para ampliar interação entre pares é:",
        "alternativas": [
            "evitar atividades coletivas quando a comunicação exigir mais tempo.",
            "manter o estudante sempre em atividade individual com o profissional de apoio.",
            "orientar os colegas a falar somente com o profissional responsável.",
            "substituir trabalhos em grupo por tarefas individuais adaptadas.",
            "organizar situações em que o apoio facilite a participação sem ocupar o lugar dos colegas."
        ],
        "correta": 4,
        "explicacao": "O apoio deve favorecer convívio entre pares e não se tornar intermediário obrigatório das relações.",
        "feedbackAcerto": "Correto. A colaboração com o professor pode criar oportunidades de participação social autêntica.",
        "feedbackErro": "O erro é proteger o estudante isolando-o das interações que fazem parte da experiência escolar.",
        "dicaBanca": "Bom apoio aproxima estudante e turma."
    },
    {
        "pergunta": "Na organização de atividade externa, trabalho colaborativo significa:",
        "alternativas": [
            "condicionar a participação à presença obrigatória de familiar responsável.",
            "deixar todo o planejamento de acessibilidade a cargo do profissional de apoio.",
            "antecipar barreiras e combinar responsabilidades para garantir participação e segurança.",
            "decidir no momento da saída conforme as dificuldades que surgirem.",
            "dispensar o estudante se a atividade exigir qualquer adaptação."
        ],
        "correta": 2,
        "explicacao": "Atividades externas também exigem planejamento de acessibilidade, transporte, comunicação e apoio.",
        "feedbackAcerto": "Correto. Antecipação reduz improvisos e amplia participação.",
        "feedbackErro": "O erro é concentrar a responsabilidade no apoio ou excluir o estudante por falta de planejamento.",
        "dicaBanca": "Planejamento colaborativo começa antes da atividade."
    },
    {
        "pergunta": "Um professor pede ao apoio que elabore sozinho uma prova adaptada. A resposta mais adequada é:",
        "alternativas": [
            "utilizar uma prova anterior do AEE sem consultar o professor.",
            "elaborar a prova porque acompanha diretamente as necessidades do estudante.",
            "recusar qualquer participação, pois acessibilidade não integra o trabalho colaborativo.",
            "pedir à família que escolha o formato de avaliação mais adequado.",
            "colaborar com informações de acessibilidade, mas manter a elaboração e avaliação sob responsabilidade pedagógica docente."
        ],
        "correta": 4,
        "explicacao": "O apoio pode contribuir com informações sobre acesso e uso de recursos, mas não assume a avaliação docente.",
        "feedbackAcerto": "Correto. Essa é uma colaboração legítima sem invasão de competência.",
        "feedbackErro": "O erro é escolher entre assumir toda a avaliação ou não contribuir em nada.",
        "dicaBanca": "Colaboração boa ocupa o espaço entre omissão e substituição."
    },
    {
        "pergunta": "Durante avaliação, o apoio percebe que o formato está inacessível. Deve:",
        "alternativas": [
            "comunicar a barreira ao professor e apoiar a solução conforme orientação pedagógica.",
            "modificar as questões e o critério de correção por conta própria.",
            "explicar o conteúdo correto ao estudante para compensar a barreira.",
            "encerrar a avaliação e atribuir o desempenho observado em sala.",
            "manter a prova como está porque já foi iniciada."
        ],
        "correta": 0,
        "explicacao": "O apoio pode identificar barreira de acesso, mas ajustes avaliativos devem ser alinhados ao professor.",
        "feedbackAcerto": "Correto. O objetivo é tornar o instrumento acessível sem alterar indevidamente o que está sendo avaliado.",
        "feedbackErro": "O erro é compensar a barreira entregando resposta ou mudando critérios sozinho.",
        "dicaBanca": "Acessibilidade não autoriza mudar objetivo avaliativo por conta própria."
    },
    {
        "pergunta": "Quando há mudança de professor ou profissional de apoio, a continuidade do trabalho melhora quando:",
        "alternativas": [
            "registros e planos atualizados permitem transferência responsável de informações necessárias.",
            "todo o histórico pessoal do estudante é entregue sem restrição ao novo profissional.",
            "o novo profissional começa do zero para formar opinião independente.",
            "a família assume temporariamente as funções até que a nova equipe conheça o caso.",
            "somente o diagnóstico clínico é repassado para evitar influência de avaliações anteriores."
        ],
        "correta": 0,
        "explicacao": "Continuidade depende de documentação pedagógica atualizada e compartilhamento necessário e protegido.",
        "feedbackAcerto": "Correto. O novo profissional precisa conhecer estratégias, barreiras e apoios relevantes sem receber informação excessiva.",
        "feedbackErro": "O erro está tanto em começar sem referência quanto em entregar indiscriminadamente todo dado pessoal.",
        "dicaBanca": "Continuidade + necessidade + sigilo."
    },
    {
        "pergunta": "Na articulação com profissionais de saúde, a escola deve:",
        "alternativas": [
            "evitar qualquer contato para impedir medicalização do processo escolar.",
            "seguir automaticamente toda recomendação clínica como orientação curricular obrigatória.",
            "transferir ao serviço de saúde a elaboração do PEI e do PAEE.",
            "aguardar parecer clínico antes de adotar qualquer apoio educacional.",
            "dialogar quando necessário, preservando a responsabilidade pedagógica pelas decisões educacionais."
        ],
        "correta": 4,
        "explicacao": "A política atual admite articulação intersetorial, mas mantém as competências de cada setor.",
        "feedbackAcerto": "Correto. Saúde pode contribuir com informações, sem substituir o planejamento pedagógico.",
        "feedbackErro": "O erro é cair em um extremo: subordinar a escola à saúde ou impedir qualquer diálogo.",
        "dicaBanca": "Intersetorialidade é cooperação com limites."
    },
    {
        "pergunta": "Um conflito entre família e escola sobre uma estratégia deve ser conduzido:",
        "alternativas": [
            "pelo profissional de apoio, que acompanha a rotina mais de perto.",
            "pela decisão unilateral da escola para preservar autoridade pedagógica.",
            "pela decisão exclusiva da família por conhecer melhor o estudante.",
            "por diálogo mediado pela equipe, com foco nas necessidades, direitos e objetivos educacionais.",
            "pela suspensão da estratégia até existir decisão judicial."
        ],
        "correta": 3,
        "explicacao": "Conflitos devem ser tratados por escuta, fundamentação e busca de solução institucional.",
        "feedbackAcerto": "Correto. Trabalho colaborativo não garante ausência de divergências, mas oferece meios profissionais para resolvê-las.",
        "feedbackErro": "O erro é entregar decisão absoluta a uma única parte.",
        "dicaBanca": "Colaboração também é gestão de divergências."
    },
    {
        "pergunta": "Quando a família solicita que o apoio execute função que não pertence ao cargo, o profissional deve:",
        "alternativas": [
            "pedir autorização do estudante e realizar a função solicitada.",
            "aceitar temporariamente para manter boa relação com a família.",
            "recusar sem explicação porque os limites funcionais já são conhecidos.",
            "negociar diretamente uma ampliação informal das próprias atribuições.",
            "acolher a demanda e encaminhá-la à equipe responsável para análise adequada."
        ],
        "correta": 4,
        "explicacao": "Colaboração com família inclui acolhimento e encaminhamento, sem descumprir limites funcionais.",
        "feedbackAcerto": "Correto. O profissional pode responder com respeito e levar a demanda ao setor competente.",
        "feedbackErro": "O erro é confundir boa relação com assumir atribuição indevida.",
        "dicaBanca": "Limite profissional e acolhimento podem coexistir."
    },
    {
        "pergunta": "Quando a equipe define uma estratégia de redução gradual de ajuda, o apoio deve:",
        "alternativas": [
            "aplicá-la de forma combinada e relatar os efeitos observados na autonomia do estudante.",
            "retirar todo o auxílio imediatamente para acelerar o desenvolvimento da independência.",
            "manter o nível anterior de ajuda até a família autorizar a mudança.",
            "reduzir o apoio apenas nas atividades que considerar mais simples.",
            "alterar o plano sempre que o estudante demonstrar alguma dificuldade."
        ],
        "correta": 0,
        "explicacao": "Redução de apoio deve ser planejada, gradual e acompanhada.",
        "feedbackAcerto": "Correto. O apoio observa os efeitos e fornece dados para que a equipe revise o plano.",
        "feedbackErro": "O erro é confundir gradualidade com retirada abrupta ou decisão individual.",
        "dicaBanca": "Fading de ajuda exige planejamento e monitoramento."
    },
    {
        "pergunta": "Se o estudante demonstra nova habilidade não prevista no plano atual, a equipe deve:",
        "alternativas": [
            "manter o plano sem mudanças para preservar comparabilidade.",
            "ignorar a habilidade até a revisão anual obrigatória do documento.",
            "retirar imediatamente todos os apoios existentes.",
            "registrar a evolução e considerar atualização dos apoios e objetivos pedagógicos.",
            "esperar confirmação clínica antes de alterar qualquer estratégia."
        ],
        "correta": 3,
        "explicacao": "PAEE e PEI têm atualização contínua e devem acompanhar mudanças nas potencialidades e demandas.",
        "feedbackAcerto": "Correto. Evolução do estudante precisa produzir revisão do planejamento quando pertinente.",
        "feedbackErro": "O erro é tratar o plano como documento estático.",
        "dicaBanca": "Plano individualizado acompanha o estudante, não o contrário."
    },
    {
        "pergunta": "Quando há profissionais diferentes nos turnos da escola, a continuidade do apoio exige:",
        "alternativas": [
            "que o professor do AEE centralize sozinho toda comunicação entre as equipes.",
            "que cada profissional desenvolva sua própria estratégia para testar resultados.",
            "que apenas um profissional conheça o plano completo para preservar sigilo.",
            "que a família repasse diariamente todas as orientações entre os turnos.",
            "orientações consistentes e registros acessíveis aos profissionais que realmente precisam deles."
        ],
        "correta": 4,
        "explicacao": "Consistência entre turnos reduz contradições e garante continuidade.",
        "feedbackAcerto": "Correto. O sigilo não impede acesso de quem precisa da informação para atuar.",
        "feedbackErro": "O erro é depender de estratégias individuais ou transformar a família em mensageira da equipe.",
        "dicaBanca": "Continuidade institucional não pode depender do acaso."
    },
    {
        "pergunta": "Uma equipe observa que determinada adaptação ajuda o estudante, mas cria isolamento social. O melhor encaminhamento é:",
        "alternativas": [
            "deixar o profissional de apoio decidir qual dimensão deve ser priorizada.",
            "manter a adaptação porque o resultado acadêmico é o único critério relevante.",
            "retirar toda adaptação para recuperar a interação social.",
            "reavaliar a estratégia para manter acesso ao conteúdo sem reduzir interação com os pares.",
            "transferir o estudante para atividades individuais durante o restante do período."
        ],
        "correta": 3,
        "explicacao": "Inclusão envolve aprendizagem e participação; uma estratégia deve ser analisada em mais de uma dimensão.",
        "feedbackAcerto": "Correto. A equipe precisa buscar equilíbrio entre acesso acadêmico e participação social.",
        "feedbackErro": "O erro é escolher um único objetivo e ignorar os demais.",
        "dicaBanca": "Acesso, permanência, participação e aprendizagem devem caminhar juntos."
    },
    {
        "pergunta": "Uma decisão colaborativa bem fundamentada deve basear-se prioritariamente em:",
        "alternativas": [
            "preferências do profissional que possui maior tempo de serviço na escola.",
            "observações, barreiras, potencialidades, objetivos e resultados acompanhados pela equipe.",
            "diagnóstico clínico como elemento suficiente para definir todos os apoios.",
            "opinião da maioria dos profissionais, independentemente das evidências observadas.",
            "experiências anteriores com outros estudantes que tenham o mesmo diagnóstico."
        ],
        "correta": 1,
        "explicacao": "Planejamento individualizado deve considerar o estudante real e os dados do contexto.",
        "feedbackAcerto": "Correto. O diagnóstico pode informar, mas não substitui a observação das necessidades, barreiras e potencialidades.",
        "feedbackErro": "O erro é decidir por autoridade, maioria ou generalização diagnóstica.",
        "dicaBanca": "Ágata costuma testar individualização contra generalizações."
    },
    {
        "pergunta": "Quando dois estudantes têm o mesmo diagnóstico, a equipe colaborativa deve:",
        "alternativas": [
            "avaliar cada um individualmente, pois necessidades e barreiras podem ser diferentes.",
            "utilizar o mesmo plano de apoio para garantir igualdade de tratamento.",
            "definir a intensidade de apoio exclusivamente pela categoria diagnóstica.",
            "usar as mesmas adaptações até que algum deles apresente dificuldade.",
            "priorizar o estudante que demonstrar maior dependência física."
        ],
        "correta": 0,
        "explicacao": "Diagnóstico não determina um pacote uniforme de suporte.",
        "feedbackAcerto": "Correto. Trabalho colaborativo individualiza estratégias conforme contexto e perfil de cada estudante.",
        "feedbackErro": "O erro é confundir igualdade com padronização.",
        "dicaBanca": "Mesmo diagnóstico não significa mesmas necessidades."
    },
    {
        "pergunta": "Em relação ao profissional de apoio, a equipe deve evitar:",
        "alternativas": [
            "orientá-lo sobre recursos de acessibilidade previstos no planejamento.",
            "transformá-lo em intermediário permanente entre estudante, professor e colegas.",
            "ouvir suas observações sobre a rotina e a autonomia do estudante.",
            "incluí-lo nas discussões necessárias ao alinhamento do apoio.",
            "revisar com ele estratégias que não estejam produzindo o efeito esperado."
        ],
        "correta": 1,
        "explicacao": "O apoio deve facilitar relações diretas e não ocupar permanentemente o lugar do estudante.",
        "feedbackAcerto": "Correto. A equipe deve usar o apoio para ampliar participação, não para criar dependência comunicativa ou social.",
        "feedbackErro": "O erro é achar que acompanhamento próximo exige mediação constante de todas as interações.",
        "dicaBanca": "Intermediário permanente pode virar barreira."
    },
    {
        "pergunta": "Quando o professor conversa diretamente com o estudante, o profissional de apoio deve:",
        "alternativas": [
            "responder primeiro para evitar demora na interação pedagógica.",
            "intervir apenas quando houver necessidade de facilitar acesso, comunicação ou segurança.",
            "traduzir toda fala do professor mesmo sem necessidade do estudante.",
            "orientar o professor a dirigir perguntas somente ao profissional de apoio.",
            "afastar-se completamente mesmo quando houver necessidade de recurso assistivo."
        ],
        "correta": 1,
        "explicacao": "O apoio deve favorecer interação direta e atuar somente na medida necessária.",
        "feedbackAcerto": "Correto. Isso preserva autoria, vínculo pedagógico e autonomia.",
        "feedbackErro": "O erro é tanto monopolizar a comunicação quanto abandonar um suporte necessário.",
        "dicaBanca": "Boa colaboração cria espaço para interação direta."
    },
    {
        "pergunta": "Em uma atividade de grupo, o apoio percebe que os colegas fazem tudo pelo estudante. Deve:",
        "alternativas": [
            "articular com o professor formas de garantir participação real e contribuição do próprio estudante.",
            "aceitar a situação porque os colegas estão demonstrando solidariedade.",
            "retirar o estudante do grupo para realizar tarefa adaptada individual.",
            "pedir que o apoio execute a parte do estudante para equilibrar o trabalho.",
            "deixar a família decidir como deve ocorrer a participação em grupo."
        ],
        "correta": 0,
        "explicacao": "Ajuda dos pares pode tornar-se substituição e reduzir participação do estudante.",
        "feedbackAcerto": "Correto. A equipe deve criar papéis e recursos que permitam contribuição autêntica.",
        "feedbackErro": "O erro é confundir fazer pelo estudante com incluir o estudante.",
        "dicaBanca": "Cooperação entre pares também precisa preservar autonomia."
    },
    {
        "pergunta": "A cooperação entre profissionais deve ter como referência principal:",
        "alternativas": [
            "a redução máxima do tempo gasto em cada atividade escolar.",
            "a conveniência operacional da rotina dos adultos envolvidos.",
            "a participação e a aprendizagem do estudante com os apoios necessários.",
            "a manutenção das mesmas estratégias em todas as situações.",
            "a diminuição do número de profissionais envolvidos no planejamento."
        ],
        "correta": 2,
        "explicacao": "O trabalho colaborativo existe para qualificar o processo educacional do estudante.",
        "feedbackAcerto": "Correto. Organização da equipe é importante, mas não pode substituir o objetivo de participação e aprendizagem.",
        "feedbackErro": "O erro é colocar conveniência administrativa acima das necessidades educacionais.",
        "dicaBanca": "Pergunte sempre: colaboração para quê?"
    },
    {
        "pergunta": "Quando a equipe percebe excesso de dependência em relação ao apoio, deve:",
        "alternativas": [
            "manter a proximidade constante porque a dependência demonstra necessidade permanente.",
            "reavaliar estratégias para ampliar autonomia e interação com outras pessoas e recursos.",
            "retirar o profissional imediatamente de todas as atividades escolares.",
            "solicitar novo diagnóstico antes de qualquer mudança na forma de apoio.",
            "transferir a responsabilidade de autonomia exclusivamente para a família."
        ],
        "correta": 1,
        "explicacao": "Dependência pode ser produzida pelo próprio formato do apoio e deve ser analisada pedagogicamente.",
        "feedbackAcerto": "Correto. A solução é ajustar o suporte, não mantê-lo automaticamente nem retirá-lo de forma abrupta.",
        "feedbackErro": "O erro é tratar dependência como característica fixa do estudante.",
        "dicaBanca": "Superapoio também pode ser barreira."
    },
    {
        "pergunta": "Em caso de substituição temporária do profissional de apoio, a escola deve:",
        "alternativas": [
            "solicitar que a família permaneça na escola durante todo o período de substituição.",
            "deixar que o estudante explique sozinho toda sua rotina e necessidades.",
            "fornecer apenas o diagnóstico para preservar os demais dados pessoais.",
            "suspender atividades que demandem apoio até o retorno do profissional habitual.",
            "garantir que o substituto receba as orientações necessárias para continuidade segura do apoio."
        ],
        "correta": 4,
        "explicacao": "Continuidade do apoio é responsabilidade institucional e depende de informações necessárias e protegidas.",
        "feedbackAcerto": "Correto. A ausência de uma pessoa não deve interromper direitos e apoios planejados.",
        "feedbackErro": "O erro é personalizar tanto o apoio que ele deixe de ser responsabilidade da escola.",
        "dicaBanca": "Planejamento institucional reduz dependência de um único profissional."
    },
    {
        "pergunta": "Uma comunicação colaborativa inadequada ocorre quando o profissional:",
        "alternativas": [
            "registra uma barreira observada e comunica ao professor responsável.",
            "usa grupos informais para divulgar detalhes pessoais sem necessidade funcional.",
            "solicita orientação quando uma situação ultrapassa sua competência.",
            "relata mudança na autonomia para revisão do planejamento.",
            "compartilha com a equipe apenas informações necessárias ao atendimento."
        ],
        "correta": 1,
        "explicacao": "Divulgação informal de dados pessoais viola a finalidade e a proteção esperadas na comunicação profissional.",
        "feedbackAcerto": "Correto. Trabalho em equipe não transforma qualquer canal em meio apropriado de comunicação.",
        "feedbackErro": "O erro seria achar que o simples fato de os participantes serem servidores torna toda divulgação aceitável.",
        "dicaBanca": "Canal adequado também faz parte do sigilo."
    },
    {
        "pergunta": "Uma boa estratégia colaborativa deve indicar, quando pertinente:",
        "alternativas": [
            "apenas o diagnóstico e a identificação do profissional que acompanhará o estudante.",
            "o objetivo, o apoio previsto, os responsáveis e como os resultados serão acompanhados.",
            "somente a atividade a ser realizada pelo profissional de apoio.",
            "o comportamento esperado e a sanção caso o estudante não responda como previsto.",
            "apenas a recomendação da família, sem critérios de acompanhamento escolar."
        ],
        "correta": 1,
        "explicacao": "Objetivos, responsabilidades e monitoramento tornam a estratégia executável e revisável.",
        "feedbackAcerto": "Correto. Isso permite que a equipe saiba o que fazer e como verificar se funcionou.",
        "feedbackErro": "O erro é produzir estratégia sem objetivo ou critério de acompanhamento.",
        "dicaBanca": "Ágata pode apresentar situações administrativas com foco em clareza de função."
    },
    {
        "pergunta": "Quando uma adaptação deixa de ser necessária, a equipe deve:",
        "alternativas": [
            "retirá-la imediatamente sem observar o efeito sobre a participação.",
            "mantê-la obrigatoriamente até o final do ano letivo.",
            "avaliar sua retirada ou modificação de forma planejada e acompanhada.",
            "esperar novo laudo para confirmar a mudança na necessidade.",
            "deixar a decisão exclusivamente com o profissional de apoio."
        ],
        "correta": 2,
        "explicacao": "Apoios são dinâmicos e devem acompanhar as necessidades atuais.",
        "feedbackAcerto": "Correto. Retirar ou modificar suporte também é uma decisão de planejamento.",
        "feedbackErro": "O erro é manter adaptações por inércia ou removê-las sem acompanhamento.",
        "dicaBanca": "Apoio individualizado não é permanente por definição."
    },
    {
        "pergunta": "Na colaboração com a direção escolar, a equipe pedagógica pode solicitar:",
        "alternativas": [
            "condições organizacionais e recursos necessários para implementar os apoios planejados.",
            "que a direção assuma a definição dos objetivos curriculares do estudante.",
            "que o diretor substitua o profissional de apoio quando houver dificuldade.",
            "que toda adaptação seja autorizada individualmente por ato administrativo.",
            "que apenas a gestão tenha acesso ao PAEE e ao PEI."
        ],
        "correta": 0,
        "explicacao": "Inclusão depende também de condições organizacionais providas pela gestão.",
        "feedbackAcerto": "Correto. Trabalho colaborativo envolve diferentes níveis da escola, inclusive para garantir recursos e condições.",
        "feedbackErro": "O erro é transformar direção em responsável pelo conteúdo pedagógico individual ou restringir acesso necessário aos planos.",
        "dicaBanca": "Gestão cria condições; equipe pedagógica conduz o processo educacional."
    },
    {
        "pergunta": "Quando o apoio precisa de orientação imediata durante uma situação imprevista, deve:",
        "alternativas": [
            "aguardar a próxima reunião pedagógica para evitar decisões precipitadas.",
            "decidir sozinho por conhecer melhor o estudante naquele momento.",
            "consultar exclusivamente a família antes de qualquer providência.",
            "reportar-se ao professor ou à equipe pedagógica conforme o fluxo da escola.",
            "seguir apenas experiências anteriores com estudantes do mesmo diagnóstico."
        ],
        "correta": 3,
        "explicacao": "O Decreto vigente determina que o apoio se reporte à equipe pedagógica quando necessário.",
        "feedbackAcerto": "Correto. Fluxos claros permitem resposta rápida sem transformar urgência em atuação isolada.",
        "feedbackErro": "O erro é usar a imprevisibilidade como justificativa para ignorar papéis profissionais.",
        "dicaBanca": "Atualidade normativa: apoio deve reportar-se à equipe pedagógica."
    },
    {
        "pergunta": "O trabalho colaborativo é mais efetivo quando:",
        "alternativas": [
            "todos os profissionais exercem as mesmas funções para evitar hierarquia.",
            "há objetivos comuns, papéis claros, comunicação frequente e revisão das estratégias.",
            "cada profissional atua de forma autônoma e informa apenas o resultado final.",
            "as decisões são centralizadas no profissional que permanece mais tempo com o estudante.",
            "as estratégias são definidas uma vez e mantidas sem alterações durante o ano."
        ],
        "correta": 1,
        "explicacao": "Colaboração efetiva combina objetivo comum, clareza de responsabilidade, comunicação e monitoramento.",
        "feedbackAcerto": "Correto. Esses elementos permitem ajustar o apoio sem perder coerência.",
        "feedbackErro": "O erro é confundir colaboração com igualdade de funções ou independência absoluta.",
        "dicaBanca": "Questão-síntese: objetivos + papéis + comunicação + revisão."
    },
    {
        "pergunta": "Assinale a situação que melhor representa colaboração, e não substituição de função:",
        "alternativas": [
            "o professor transfere ao apoio toda avaliação do estudante acompanhado.",
            "o apoio cria sozinho nova atividade porque conhece melhor o estudante.",
            "o apoio relata uma barreira e o professor ajusta a atividade em diálogo com a equipe.",
            "a família define o objetivo curricular e o professor apenas executa.",
            "o AEE assume todas as decisões sobre a rotina da classe comum."
        ],
        "correta": 2,
        "explicacao": "Colaboração usa informações de diferentes profissionais sem transferir competências exclusivas.",
        "feedbackAcerto": "Correto. O apoio contribui com observação e a decisão pedagógica é construída com quem possui essa responsabilidade.",
        "feedbackErro": "O erro é qualquer cenário em que um membro substitui integralmente outro.",
        "dicaBanca": "Ágata gosta de enunciados que parecem colaboração, mas escondem substituição."
    },
    {
        "pergunta": "Quando uma estratégia definida coletivamente não é executada como planejado, a equipe deve primeiro:",
        "alternativas": [
            "abandonar a estratégia e retornar automaticamente ao apoio anterior.",
            "substituir imediatamente o profissional que não conseguiu executá-la.",
            "identificar o que dificultou a execução antes de concluir que a estratégia é inadequada.",
            "considerar que o estudante não se adaptou ao planejamento proposto.",
            "encerrar o plano e aguardar nova avaliação clínica."
        ],
        "correta": 2,
        "explicacao": "Problemas de implementação podem decorrer de tempo, recursos, compreensão ou condições do contexto.",
        "feedbackAcerto": "Correto. Antes de julgar o estudante ou a estratégia, é preciso verificar se o plano foi realmente executado nas condições previstas.",
        "feedbackErro": "O erro é personalizar rapidamente uma falha de processo.",
        "dicaBanca": "Análise de implementação melhora a qualidade do planejamento."
    },
    {
        "pergunta": "Quando o estudante participa do planejamento de seus apoios, a equipe tende a obter:",
        "alternativas": [
            "garantia de que qualquer estratégia escolhida pelo estudante será adequada.",
            "autorização para transferir ao estudante todas as decisões pedagógicas.",
            "substituição da necessidade de participação familiar e profissional.",
            "informações importantes sobre preferências, barreiras percebidas e estratégias que favorecem autonomia.",
            "dispensa de acompanhamento dos resultados por parte da equipe."
        ],
        "correta": 3,
        "explicacao": "A participação do estudante oferece dados relevantes para um planejamento mais individualizado.",
        "feedbackAcerto": "Correto. Ouvir o estudante melhora o plano, mas não elimina análise profissional ou acompanhamento.",
        "feedbackErro": "O erro é transformar participação em decisão absoluta.",
        "dicaBanca": "Autodefensoria e participação ganham destaque nas políticas atuais."
    },
    {
        "pergunta": "Na perspectiva inclusiva, a finalidade do trabalho colaborativo é:",
        "alternativas": [
            "organizar apoios que ampliem acesso, permanência, participação e aprendizagem.",
            "reduzir o número de profissionais envolvidos no processo educacional.",
            "concentrar responsabilidades no profissional de apoio para facilitar a rotina.",
            "substituir o planejamento individualizado por decisões coletivas genéricas.",
            "diminuir adaptações para padronizar a experiência dos estudantes."
        ],
        "correta": 0,
        "explicacao": "A política atual relaciona qualidade inclusiva ao conjunto de apoios necessários às quatro dimensões centrais.",
        "feedbackAcerto": "Correto. Colaboração é um meio para tornar os apoios coerentes e efetivos.",
        "feedbackErro": "O erro é medir colaboração pela conveniência administrativa ou padronização.",
        "dicaBanca": "Memorize: acesso, permanência, participação e aprendizagem."
    }
];

if (typeof window !== 'undefined') { window.apoioTrabalhoColaborativo = apoioTrabalhoColaborativo; }
