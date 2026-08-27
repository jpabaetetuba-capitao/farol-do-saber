// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// PAPEL DO PROFISSIONAL DE APOIO ESCOLAR
// Base: LBI + Decreto nº 12.686/2025 e alterações vigentes.
// Padrão Instituto Ágata.
// 50 questões + feedbacks específicos + distratores auditados.
// Feedbacks independentes da ordem aleatória do Farol.
// Revisão: 27/08/2026
// ============================================================

const apoioPapelProfissional = [
    {
        "pergunta": "O profissional de apoio escolar, segundo a legislação inclusiva vigente, exerce atividades relacionadas principalmente a:",
        "alternativas": [
            "alimentação, higiene, locomoção e apoio à participação nas atividades escolares, quando necessário.",
            "planejamento curricular, atribuição de notas e elaboração autônoma de avaliações.",
            "diagnóstico clínico, prescrição terapêutica e definição de condutas médicas.",
            "gestão administrativa da escola e controle disciplinar de toda a turma.",
            "substituição permanente do professor regente nas atividades pedagógicas."
        ],
        "correta": 0,
        "explicacao": "A definição legal do profissional de apoio escolar concentra-se em alimentação, higiene, locomoção e apoio às atividades escolares, sem substituir profissões regulamentadas.",
        "feedbackAcerto": "Correto. Você identificou o núcleo legal da função sem confundi-lo com atribuições docentes, clínicas ou administrativas.",
        "feedbackErro": "Se você marcou planejamento, avaliação ou diagnóstico, ultrapassou os limites legais do cargo. O apoio escolar favorece participação; não substitui professor nem profissional de saúde.",
        "dicaBanca": "Ágata tende a cobrar exatamente o limite entre apoio e função docente."
    },
    {
        "pergunta": "A atuação do profissional de apoio escolar:",
        "alternativas": [
            "limita-se aos momentos de transporte e deslocamento do estudante.",
            "pode ocorrer em diferentes espaços e atividades escolares, conforme as necessidades de apoio.",
            "ocorre somente fora da sala e das atividades pedagógicas regulares.",
            "é exclusiva dos momentos de atendimento educacional especializado.",
            "deve concentrar-se apenas em higiene e alimentação no ambiente escolar."
        ],
        "correta": 1,
        "explicacao": "A atuação pode acompanhar o estudante em diferentes espaços e atividades escolares quando houver necessidade de apoio.",
        "feedbackAcerto": "Correto. O profissional não é um 'cuidador de um local'; sua atuação acompanha as demandas funcionais do estudante ao longo da rotina escolar.",
        "feedbackErro": "O erro é reduzir a função a um espaço específico. A necessidade de apoio pode surgir em sala, pátio, laboratório, recreio, alimentação ou deslocamento.",
        "dicaBanca": "Observe quando a banca tenta limitar indevidamente o alcance da atuação."
    },
    {
        "pergunta": "Na locomoção, a atuação do profissional de apoio escolar deve buscar:",
        "alternativas": [
            "restringir o estudante às atividades mais próximas da sala.",
            "transportar o estudante sem considerar sua autonomia possível.",
            "evitar deslocamentos externos à sala por segurança.",
            "substituir o transporte escolar regular.",
            "garantir acesso e participação do estudante nos diferentes espaços e atividades."
        ],
        "correta": 4,
        "explicacao": "O apoio à locomoção deve favorecer acesso e participação, evitando que barreiras de mobilidade se convertam em exclusão.",
        "feedbackAcerto": "Correto. O foco não é apenas mover o estudante, mas permitir que ele participe da vida escolar.",
        "feedbackErro": "Se a alternativa reduz locomoção a transporte físico sem participação, ela fica incompleta. Apoio deve ampliar acesso e autonomia.",
        "dicaBanca": "Locomoção + acesso + participação é uma tríade importante."
    },
    {
        "pergunta": "Durante uma atividade no pátio, o estudante necessita auxílio para deslocar-se. A conduta mais adequada é:",
        "alternativas": [
            "oferecer o apoio necessário para que ele participe com segurança junto à turma.",
            "mantê-lo em sala para evitar atrasos na atividade.",
            "pedir que outro aluno assuma integralmente o deslocamento.",
            "retirá-lo da atividade por prevenção, mesmo sem risco concreto.",
            "aguardar que a família venha buscá-lo para levá-lo ao pátio."
        ],
        "correta": 0,
        "explicacao": "A presença de necessidade de apoio não justifica exclusão de atividade coletiva; o profissional deve viabilizar a participação com segurança.",
        "feedbackAcerto": "Correto. Você escolheu a alternativa que remove a barreira sem isolar o estudante.",
        "feedbackErro": "A pegadinha é aceitar exclusão 'por segurança' sem risco concreto. A proteção deve servir à participação, não à retirada automática.",
        "dicaBanca": "Alternativas protetivas podem esconder exclusão."
    },
    {
        "pergunta": "Na higiene pessoal, o profissional de apoio escolar deve:",
        "alternativas": [
            "expor dificuldades de higiene para facilitar o trabalho da equipe.",
            "realizar todo o procedimento sempre, para garantir rapidez.",
            "deixar o estudante sozinho mesmo quando houver risco.",
            "respeitar corpo, privacidade, tempo e escolhas, oferecendo auxílio proporcional à necessidade.",
            "transferir toda responsabilidade ao professor regente."
        ],
        "correta": 3,
        "explicacao": "A atuação em higiene deve combinar segurança, dignidade e autonomia possível.",
        "feedbackAcerto": "Correto. Apoio proporcional significa fazer apenas o que o estudante não consegue realizar com segurança naquele momento.",
        "feedbackErro": "O erro está nos extremos: fazer tudo pelo estudante ou retirar apoio quando ele ainda é necessário.",
        "dicaBanca": "Autonomia com apoio é um eixo forte do cargo."
    },
    {
        "pergunta": "Um estudante consegue realizar parte da higiene com supervisão. O apoio escolar deve:",
        "alternativas": [
            "estimular a autonomia possível e auxiliar apenas nas etapas necessárias.",
            "fazer todo o procedimento para reduzir o tempo da rotina.",
            "interromper toda supervisão, pois há independência parcial.",
            "pedir a colegas que realizem as etapas restantes.",
            "delegar a tarefa ao professor por se tratar de cuidado."
        ],
        "correta": 0,
        "explicacao": "A ajuda deve ser ajustada ao nível real de necessidade, preservando habilidades já desenvolvidas.",
        "feedbackAcerto": "Correto. A atuação adequada evita tanto abandono quanto substituição desnecessária.",
        "feedbackErro": "Se você escolheu fazer tudo, transformou apoio em dependência. Se escolheu retirar toda ajuda, ignorou a necessidade residual.",
        "dicaBanca": "Bom apoio sabe ajudar e também recuar."
    },
    {
        "pergunta": "Durante a alimentação, o profissional de apoio escolar deve:",
        "alternativas": [
            "delegar o acompanhamento da alimentação a colegas da turma.",
            "alterar a dieta por decisão própria quando achar mais adequado.",
            "oferecer qualquer alimento disponível para facilitar a rotina.",
            "seguir orientações institucionais e apoiar o estudante de acordo com suas necessidades e segurança.",
            "prescrever dieta terapêutica conforme sua experiência."
        ],
        "correta": 3,
        "explicacao": "O apoio à alimentação deve seguir orientações institucionais e não autoriza prescrição ou alteração autônoma de dieta.",
        "feedbackAcerto": "Correto. O profissional apoia o ato alimentar, mas decisões terapêuticas pertencem a profissionais habilitados.",
        "feedbackErro": "Se você marcou prescrição ou alteração de dieta, ultrapassou o limite funcional do cargo.",
        "dicaBanca": "Alimentação integra o apoio; prescrição não."
    },
    {
        "pergunta": "Em relação à comunicação, o profissional de apoio escolar deve:",
        "alternativas": [
            "responder sempre no lugar do estudante.",
            "exigir comunicação oral para validar a resposta.",
            "reconhecer diferentes formas de expressão e favorecer a participação do estudante.",
            "limitar recursos de comunicação ao AEE.",
            "usar apenas métodos escolhidos por ele próprio."
        ],
        "correta": 2,
        "explicacao": "A atuação inclusiva reconhece fala, gestos, símbolos, recursos assistivos e outras formas de comunicação.",
        "feedbackAcerto": "Correto. O profissional deve ampliar a voz do estudante, não substituir sua expressão.",
        "feedbackErro": "O erro é reduzir comunicação à oralidade ou responder pelo estudante por conveniência.",
        "dicaBanca": "Comunicação acessível é participação."
    },
    {
        "pergunta": "Quando um estudante utiliza prancha de comunicação, o profissional deve:",
        "alternativas": [
            "dar tempo para o uso do recurso e favorecer a interação com colegas e professores.",
            "responder pelo estudante sempre que a atividade estiver com tempo reduzido.",
            "retirar a prancha quando a atividade exigir resposta rápida ou coletiva.",
            "usar a prancha somente nos momentos acompanhados por professor do AEE.",
            "substituir a prancha por gestos próprios sempre que isso parecer mais simples."
        ],
        "correta": 0,
        "explicacao": "O recurso de comunicação deve ser favorecido em contextos reais de participação escolar.",
        "feedbackAcerto": "Correto. Dar tempo e espaço para a expressão preserva autoria e autonomia comunicativa.",
        "feedbackErro": "A pegadinha é priorizar a velocidade da rotina e transformar o apoio em porta-voz permanente.",
        "dicaBanca": "Tempo de resposta também é acessibilidade."
    },
    {
        "pergunta": "O profissional de apoio escolar pode substituir o professor na definição de objetivos curriculares?",
        "alternativas": [
            "Não, porque o apoio deve permanecer fora das decisões pedagógicas da turma.",
            "Sim, quando acompanha o estudante diariamente e conhece sua rotina escolar.",
            "Sim, desde que a família aceite a alteração dos objetivos propostos.",
            "Não, porque definir objetivos curriculares é atribuição pedagógica da docência e da equipe escolar.",
            "Sim, apenas quando o estudante apresenta deficiência intelectual ou TEA."
        ],
        "correta": 3,
        "explicacao": "O apoio atua em consonância com o planejamento pedagógico, mas não assume atribuições docentes de planejamento curricular.",
        "feedbackAcerto": "Correto. Proximidade com o estudante não transforma a função de apoio em função docente.",
        "feedbackErro": "O erro é confundir conhecimento da rotina do estudante com competência para decidir sozinho o currículo.",
        "dicaBanca": "Ágata cobra muito a diferença entre colaborar e substituir."
    },
    {
        "pergunta": "O profissional de apoio escolar deve atribuir notas ao estudante que acompanha?",
        "alternativas": [
            "Sim, desde que utilize critérios definidos pela família.",
            "Sim, se participar de todas as atividades da turma.",
            "Não, porque avaliação e atribuição de notas pertencem às atribuições pedagógicas docentes.",
            "Sim, apenas em atividades adaptadas.",
            "Não, porque o estudante com deficiência não deve ser avaliado."
        ],
        "correta": 2,
        "explicacao": "O profissional pode fornecer observações à equipe, mas a avaliação formal e a atribuição de notas são funções pedagógicas.",
        "feedbackAcerto": "Correto. O apoio contribui com informações do cotidiano sem assumir a responsabilidade avaliativa.",
        "feedbackErro": "Se você marcou que ele pode atribuir nota, confundiu colaboração com competência docente.",
        "dicaBanca": "Observar ≠ avaliar formalmente."
    },
    {
        "pergunta": "Em reunião pedagógica, o profissional de apoio deve:",
        "alternativas": [
            "definir sozinho novas adaptações curriculares.",
            "emitir diagnóstico clínico com base no comportamento observado.",
            "relatar observações objetivas sobre participação, autonomia, barreiras e necessidades de apoio.",
            "expor informações pessoais sem relação com a aprendizagem.",
            "recusar participação por não exercer função docente."
        ],
        "correta": 2,
        "explicacao": "O apoio pode contribuir com observações do cotidiano que auxiliem o planejamento, respeitando seus limites profissionais.",
        "feedbackAcerto": "Correto. O relato objetivo é valioso para a equipe e não invade atribuições clínicas ou docentes.",
        "feedbackErro": "O erro é ir para um dos extremos: decidir tudo ou não colaborar.",
        "dicaBanca": "Trabalho colaborativo exige contribuição dentro do papel funcional."
    },
    {
        "pergunta": "Quando o profissional de apoio discorda de uma estratégia pedagógica, deve:",
        "alternativas": [
            "aplicar apenas as atividades que considerar adequadas.",
            "substituir a estratégia imediatamente por outra de sua escolha.",
            "orientar a família a impedir a atividade.",
            "retirar o estudante da aula até nova decisão.",
            "dialogar com o professor e a equipe pedagógica pelos canais institucionais."
        ],
        "correta": 4,
        "explicacao": "Divergências devem ser tratadas em trabalho colaborativo, sem decisões pedagógicas unilaterais do apoio.",
        "feedbackAcerto": "Correto. O profissional pode e deve comunicar observações, mas a solução deve ser construída com a equipe.",
        "feedbackErro": "O erro é agir isoladamente em uma área que depende de planejamento pedagógico compartilhado.",
        "dicaBanca": "Colaborar é diferente de decidir sozinho."
    },
    {
        "pergunta": "O profissional de apoio escolar atua em consonância com:",
        "alternativas": [
            "somente o laudo médico apresentado pela família.",
            "o planejamento pedagógico e os instrumentos individualizados definidos para o estudante.",
            "apenas as orientações verbais do estudante.",
            "exclusivamente o plano terapêutico externo.",
            "somente as decisões tomadas pela direção escolar."
        ],
        "correta": 1,
        "explicacao": "A política atual vincula a atuação ao planejamento educacional, especialmente PAEE e PEI quando existentes.",
        "feedbackAcerto": "Correto. O apoio deve ser coerente com o que foi planejado para participação e aprendizagem.",
        "feedbackErro": "Se você marcou apenas laudo ou plano terapêutico, deslocou a função educacional para o campo clínico.",
        "dicaBanca": "PAEE/PEI orientam a atuação do apoio."
    },
    {
        "pergunta": "A oferta de profissional de apoio escolar, segundo a regulamentação atual:",
        "alternativas": [
            "é restrita a estudantes com deficiência física ou necessidade de locomoção.",
            "é automática para toda pessoa com deficiência matriculada em classe comum.",
            "depende sempre de diagnóstico clínico definitivo apresentado pela família.",
            "somente pode ser concedida após decisão administrativa ou judicial específica.",
            "é avaliada pelo estudo de caso e não depende obrigatoriamente de laudo de saúde."
        ],
        "correta": 4,
        "explicacao": "A necessidade de apoio deve ser analisada pedagogicamente no estudo de caso, sem exigência obrigatória de documento de saúde.",
        "feedbackAcerto": "Correto. O diagnóstico, por si só, não define automaticamente a necessidade ou intensidade do apoio.",
        "feedbackErro": "O erro é vincular o direito ao apoio a laudo obrigatório ou a uma categoria específica de deficiência.",
        "dicaBanca": "Atualização recente e muito provável em prova."
    },
    {
        "pergunta": "Todo estudante com deficiência deve ter profissional de apoio individual exclusivo?",
        "alternativas": [
            "Sim; a exclusividade é obrigatória em toda escola pública da educação básica.",
            "Sim; o diagnóstico de deficiência gera automaticamente direito a acompanhamento individual exclusivo.",
            "Não; a necessidade e a forma de apoio dependem do estudo de caso e das barreiras identificadas.",
            "Não; a legislação atual proíbe acompanhamento individual em qualquer situação escolar.",
            "Sim; desde que a família apresente laudo médico atualizado e solicite formalmente."
        ],
        "correta": 2,
        "explicacao": "A política atual adota análise individualizada das necessidades, e não um modelo automático por diagnóstico.",
        "feedbackAcerto": "Correto. Nem negar apoio quando necessário, nem presumir apoio exclusivo para todos corresponde à lógica inclusiva.",
        "feedbackErro": "A pegadinha é imaginar que inclusão funciona por pacotes fixos associados ao diagnóstico.",
        "dicaBanca": "Necessidade de apoio é contextual."
    },
    {
        "pergunta": "A formação inicial mínima do profissional de apoio escolar, na regulamentação vigente, é:",
        "alternativas": [
            "ensino fundamental.",
            "nível médio.",
            "curso técnico em enfermagem.",
            "graduação em pedagogia.",
            "licenciatura plena."
        ],
        "correta": 1,
        "explicacao": "O Decreto nº 12.686/2025, com alteração posterior, estabelece formação inicial mínima de nível médio.",
        "feedbackAcerto": "Correto. O requisito federal mínimo não é graduação.",
        "feedbackErro": "Se você marcou ensino superior, escolheu uma exigência maior do que a prevista na norma nacional.",
        "dicaBanca": "Ágata pode usar formação superior como distrator plausível."
    },
    {
        "pergunta": "A formação continuada mínima prevista para o profissional de apoio escolar é de:",
        "alternativas": [
            "120 horas.",
            "80 horas.",
            "240 horas.",
            "180 horas.",
            "360 horas."
        ],
        "correta": 3,
        "explicacao": "A regulamentação atual fixa formação continuada mínima de 180 horas.",
        "feedbackAcerto": "Correto. Você diferenciou a carga do apoio escolar da carga exigida ao professor do AEE.",
        "feedbackErro": "O erro mais comum é inverter 180 e 360 horas.",
        "dicaBanca": "Decore: apoio 180h / professor do AEE 360h."
    },
    {
        "pergunta": "Ao profissional de apoio escolar não compete realizar:",
        "alternativas": [
            "apoio à comunicação e participação nas atividades.",
            "apoio à locomoção conforme a necessidade do estudante.",
            "apoio à higiene nos limites de sua função.",
            "apoio à alimentação seguindo orientações adequadas.",
            "procedimentos próprios de profissões legalmente regulamentadas quando não possui habilitação para isso."
        ],
        "correta": 4,
        "explicacao": "A definição legal exclui técnicas e procedimentos identificados com profissões regulamentadas.",
        "feedbackAcerto": "Correto. O apoio pode cuidar e auxiliar, mas não assumir atos privativos de outras profissões.",
        "feedbackErro": "A pegadinha é considerar que qualquer necessidade do estudante pode ser executada pelo apoio.",
        "dicaBanca": "Limite profissional é tema central do cargo."
    },
    {
        "pergunta": "Um pedido para que o profissional de apoio faça diagnóstico sobre comportamento do estudante deve ser:",
        "alternativas": [
            "feito somente após observar o estudante por um mês.",
            "recusado dentro dos limites da função, com encaminhamento à equipe competente.",
            "realizado apenas se a família autorizar.",
            "registrado como parecer pedagógico próprio.",
            "atendido por conhecer o estudante diariamente."
        ],
        "correta": 1,
        "explicacao": "Diagnóstico clínico não integra a função do apoio escolar.",
        "feedbackAcerto": "Correto. Conhecer bem a rotina não concede habilitação para diagnóstico.",
        "feedbackErro": "O erro é confundir observação funcional com avaliação diagnóstica profissional.",
        "dicaBanca": "Relatar fatos observados não é emitir diagnóstico."
    },
    {
        "pergunta": "O profissional de apoio pode administrar medicamento por decisão própria?",
        "alternativas": [
            "Não; qualquer conduta deve observar protocolos institucionais e limites legais da função.",
            "Sim; se o medicamento já for conhecido pela família.",
            "Sim; desde que a dose seja pequena.",
            "Sim; quando não houver profissional de saúde presente.",
            "Não; porque medicamentos nunca podem ser administrados no ambiente escolar."
        ],
        "correta": 0,
        "explicacao": "A administração de medicamentos exige observância das normas institucionais, orientações válidas e competências legais; decisão autônoma não é adequada.",
        "feedbackAcerto": "Correto. A questão testa o limite entre apoio escolar e decisão de saúde.",
        "feedbackErro": "O erro é aceitar iniciativa própria apenas por conveniência ou ausência de outro profissional.",
        "dicaBanca": "Improviso em saúde é distrator forte."
    },
    {
        "pergunta": "Em situação de risco ou intercorrência, o profissional de apoio deve:",
        "alternativas": [
            "resolver a situação diretamente, evitando envolver outros profissionais da escola.",
            "informar primeiro em grupo informal de mensagens e depois comunicar a escola.",
            "aguardar o fim do turno quando não houver lesão ou consequência imediatamente visível.",
            "seguir o protocolo institucional, comunicar a equipe responsável e registrar objetivamente o ocorrido.",
            "evitar registros formais quando o episódio parecer simples e estiver resolvido."
        ],
        "correta": 3,
        "explicacao": "Segurança exige protocolo institucional, comunicação e registro objetivo.",
        "feedbackAcerto": "Correto. A atuação responsável não depende de improviso ou ocultação.",
        "feedbackErro": "O erro é confundir discrição com omissão de ocorrência relevante.",
        "dicaBanca": "Protocolo + comunicação + registro."
    },
    {
        "pergunta": "O sigilo profissional, no contexto do apoio escolar, exige:",
        "alternativas": [
            "compartilhar dados com qualquer familiar da mesma classe.",
            "informar diagnósticos à turma para facilitar a convivência.",
            "divulgar informações quando forem verdadeiras.",
            "discutir casos em grupos informais de mensagens.",
            "preservar informações pessoais e compartilhá-las apenas por necessidade e canais institucionais adequados."
        ],
        "correta": 4,
        "explicacao": "O profissional lida com informações pessoais e deve respeitar finalidade, necessidade e privacidade.",
        "feedbackAcerto": "Correto. O sigilo protege diagnóstico, rotina, comportamento e outras informações identificáveis.",
        "feedbackErro": "O erro é imaginar que informação verdadeira pode circular livremente.",
        "dicaBanca": "Sigilo vai além de laudos."
    },
    {
        "pergunta": "Um familiar pergunta ao apoio sobre o diagnóstico de outro estudante. A resposta adequada é:",
        "alternativas": [
            "responder se o familiar prometer manter sigilo.",
            "consultar outros familiares antes de decidir.",
            "informar apenas o diagnóstico, sem detalhes da rotina.",
            "responder se os estudantes forem da mesma turma.",
            "não fornecer a informação e orientar o uso dos canais institucionais apropriados."
        ],
        "correta": 4,
        "explicacao": "O profissional não deve divulgar dados de outro estudante sem fundamento e necessidade institucional.",
        "feedbackAcerto": "Correto. O vínculo com a turma não autoriza acesso a informações pessoais de terceiros.",
        "feedbackErro": "O erro é relativizar sigilo com promessas informais ou curiosidade familiar.",
        "dicaBanca": "Informação pessoal exige finalidade legítima."
    },
    {
        "pergunta": "A atuação do profissional de apoio deve favorecer a autonomia porque:",
        "alternativas": [
            "o profissional deve afastar-se sempre que o estudante demonstrar qualquer iniciativa própria.",
            "o apoio adequado reduz barreiras sem substituir ações que o estudante já consegue realizar.",
            "o estudante deve executar atividades sem suporte para desenvolver independência funcional.",
            "dependência em alguma tarefa impede que o estudante exerça escolhas na rotina escolar.",
            "autonomia significa retirar progressivamente todos os tipos de ajuda, mesmo quando necessários."
        ],
        "correta": 1,
        "explicacao": "A autonomia pode ser exercida com apoios proporcionais e não exige independência absoluta.",
        "feedbackAcerto": "Correto. A função do apoio é ampliar possibilidades, não tomar o lugar do estudante.",
        "feedbackErro": "O erro é confundir autonomia com ausência de suporte ou independência total.",
        "dicaBanca": "Autonomia pode existir com apoio."
    },
    {
        "pergunta": "Em atividades coletivas, o profissional de apoio deve:",
        "alternativas": [
            "responder pelo estudante quando a interação coletiva exigir maior rapidez.",
            "favorecer a participação do estudante e sua interação com colegas, evitando isolamento desnecessário.",
            "manter o estudante ao lado do profissional durante toda a atividade em grupo.",
            "retirar o estudante das atividades que demandem adaptações ou mediação adicional.",
            "substituir a interação entre colegas por atendimento individual do profissional."
        ],
        "correta": 1,
        "explicacao": "A função do apoio inclui facilitar acesso e participação, preservando oportunidades de interação entre pares.",
        "feedbackAcerto": "Correto. O profissional não deve tornar-se uma barreira social entre o estudante e a turma.",
        "feedbackErro": "O erro é transformar acompanhamento em dependência relacional.",
        "dicaBanca": "Inclusão também é convivência."
    },
    {
        "pergunta": "O profissional de apoio deve permanecer fisicamente ao lado do estudante durante todo o tempo?",
        "alternativas": [
            "Não necessariamente; a proximidade deve variar conforme a necessidade de apoio em cada situação.",
            "Sim, porque acompanhamento escolar pressupõe supervisão física constante.",
            "Sim, sempre que o estudante tiver diagnóstico de deficiência.",
            "Não, porque o apoio não deve permanecer dentro da sala de aula.",
            "Sim, exceto nos momentos de recreio e de atividades com os colegas."
        ],
        "correta": 0,
        "explicacao": "A intensidade e proximidade do apoio devem responder à necessidade, e não a uma regra fixa.",
        "feedbackAcerto": "Correto. Apoio excessivo também pode limitar autonomia e interação.",
        "feedbackErro": "O erro é transformar uma necessidade variável em regra permanente.",
        "dicaBanca": "Proximidade do apoio deve ser funcional."
    },
    {
        "pergunta": "Em caso de preconceito contra o estudante, o profissional de apoio deve:",
        "alternativas": [
            "ignorar a situação para evitar constrangimento.",
            "retirar o estudante para evitar novos conflitos.",
            "expor detalhes da deficiência para convencer os colegas.",
            "resolver sozinho sem informar a escola.",
            "comunicar a equipe e apoiar mediação que preserve dignidade e participação."
        ],
        "correta": 4,
        "explicacao": "Barreiras atitudinais exigem ação educativa e institucional, não isolamento da pessoa discriminada.",
        "feedbackAcerto": "Correto. A intervenção deve proteger o estudante e envolver a equipe no enfrentamento do preconceito.",
        "feedbackErro": "O erro é retirar quem sofre a exclusão ou expor informações privadas.",
        "dicaBanca": "Capacitismo se enfrenta; não se contorna com isolamento."
    },
    {
        "pergunta": "Em relação às adaptações pedagógicas, o profissional de apoio deve:",
        "alternativas": [
            "substituir a atividade sempre que o estudante apresentar dificuldade para concluí-la.",
            "criar tarefas próprias quando considerar o planejamento docente pouco adequado.",
            "reduzir objetivos curriculares sempre que o estudante precisar de ajuda frequente.",
            "executar e apoiar estratégias definidas com a equipe, sem decidir sozinho alterações curriculares.",
            "eliminar avaliações ou atividades que considerar complexas para o estudante."
        ],
        "correta": 3,
        "explicacao": "O apoio pode colaborar na implementação de estratégias, mas decisões pedagógicas pertencem ao processo de planejamento da equipe.",
        "feedbackAcerto": "Correto. A atuação prática é importante, porém deve ser coerente com o planejamento pedagógico.",
        "feedbackErro": "O erro é transformar colaboração em autonomia curricular.",
        "dicaBanca": "Executar adaptação ≠ definir adaptação sozinho."
    },
    {
        "pergunta": "O profissional de apoio observa que uma estratégia não está funcionando. A conduta adequada é:",
        "alternativas": [
            "informar a dificuldade somente à família e manter a equipe fora da decisão.",
            "mudar imediatamente a estratégia e informar a equipe somente após observar o resultado.",
            "interromper a atividade e aguardar uma nova orientação em outro momento.",
            "registrar a observação e discutir com professor e equipe possíveis ajustes na estratégia.",
            "manter a estratégia sem comunicar o problema para preservar o planejamento original."
        ],
        "correta": 3,
        "explicacao": "Observações do cotidiano devem alimentar o planejamento colaborativo.",
        "feedbackAcerto": "Correto. O apoio contribui com informação prática que pode justificar ajustes pela equipe.",
        "feedbackErro": "O erro é agir isoladamente ou silenciar um problema relevante.",
        "dicaBanca": "Observação objetiva é ferramenta de colaboração."
    },
    {
        "pergunta": "Na relação com a família, o profissional de apoio deve:",
        "alternativas": [
            "fornecer informações sobre outros estudantes.",
            "assumir sozinho todas as orientações pedagógicas à família.",
            "negociar adaptações curriculares diretamente sem a equipe.",
            "manter comunicação dentro dos fluxos definidos pela escola e de sua competência funcional.",
            "prometer resultados escolares que não dependem de sua função."
        ],
        "correta": 3,
        "explicacao": "A comunicação com famílias deve respeitar os canais institucionais e limites do cargo.",
        "feedbackAcerto": "Correto. O profissional pode colaborar com informações de rotina sem substituir professor, coordenação ou direção.",
        "feedbackErro": "O erro é transformar contato cotidiano em representação institucional irrestrita.",
        "dicaBanca": "Comunicação institucional protege todos os envolvidos."
    },
    {
        "pergunta": "Em relação à segurança, a melhor atuação do profissional de apoio é:",
        "alternativas": [
            "evitar qualquer atividade que envolva algum risco.",
            "prevenir riscos reais sem restringir a participação além do necessário.",
            "substituir sempre o estudante em tarefas motoras.",
            "retirar o estudante de atividades externas.",
            "priorizar rapidez em detrimento de autonomia."
        ],
        "correta": 1,
        "explicacao": "Segurança e inclusão devem ser equilibradas; risco precisa ser analisado de forma concreta.",
        "feedbackAcerto": "Correto. A proteção adequada reduz risco sem transformar a vida escolar em restrição permanente.",
        "feedbackErro": "O erro é usar segurança como justificativa genérica para excluir experiências.",
        "dicaBanca": "Proteção sem participação pode virar barreira."
    },
    {
        "pergunta": "Se uma atividade apresenta risco que pode ser reduzido com adaptação simples, o profissional deve:",
        "alternativas": [
            "cancelar a atividade para toda a turma.",
            "retirar o estudante da atividade.",
            "apoiar a adaptação definida pela equipe para manter a participação.",
            "pedir à família que assuma a responsabilidade.",
            "ignorar o risco por ser parte da aprendizagem."
        ],
        "correta": 2,
        "explicacao": "A lógica inclusiva busca reduzir a barreira e preservar participação quando isso é possível com segurança.",
        "feedbackAcerto": "Correto. A alternativa resolve o risco sem excluir o estudante.",
        "feedbackErro": "O erro é escolher entre dois extremos: exclusão automática ou negligência do risco.",
        "dicaBanca": "Adaptação segura é melhor que proibição automática."
    },
    {
        "pergunta": "O profissional de apoio escolar deve manter registros:",
        "alternativas": [
            "objetivos, pertinentes e pelos canais definidos pela instituição.",
            "baseados em opiniões pessoais sobre a família.",
            "informais em aplicativos pessoais.",
            "apenas quando houver acidente grave.",
            "com diagnósticos elaborados por ele."
        ],
        "correta": 0,
        "explicacao": "Registros funcionais devem ser objetivos, necessários e coerentes com os protocolos da escola.",
        "feedbackAcerto": "Correto. Um registro adequado descreve fatos relevantes, não julgamentos pessoais.",
        "feedbackErro": "O erro é confundir registro com opinião ou exposição informal.",
        "dicaBanca": "Registre fatos, não rótulos."
    },
    {
        "pergunta": "Em um registro de ocorrência, é mais adequado escrever:",
        "alternativas": [
            "comentários de outros estudantes sem relação com o fato.",
            "o que foi observado, a providência adotada e quem foi comunicado.",
            "opiniões sobre a capacidade da família.",
            "diagnósticos não confirmados.",
            "interpretações sobre a intenção do estudante."
        ],
        "correta": 1,
        "explicacao": "Registro objetivo prioriza fatos observáveis e providências tomadas.",
        "feedbackAcerto": "Correto. Essa forma aumenta clareza, rastreabilidade e segurança institucional.",
        "feedbackErro": "O erro é preencher o registro com inferências, rótulos ou informações irrelevantes.",
        "dicaBanca": "Objetividade é chave em registros."
    },
    {
        "pergunta": "Quando o estudante expressa uma escolha possível durante a rotina, o profissional deve:",
        "alternativas": [
            "substituí-la pela escolha do adulto.",
            "ignorar a escolha para manter a rotina.",
            "considerá-la e apoiar sua participação, respeitando limites de segurança e planejamento.",
            "consultar sempre a família antes de qualquer decisão simples.",
            "impedir escolhas para evitar frustração."
        ],
        "correta": 2,
        "explicacao": "A atuação inclusiva respeita escolhas e promove autonomia dentro das condições possíveis.",
        "feedbackAcerto": "Correto. O estudante deve participar das decisões que dizem respeito à sua própria rotina quando isso for viável.",
        "feedbackErro": "O erro é infantilizar ou substituir automaticamente a vontade do estudante.",
        "dicaBanca": "Autonomia também aparece em pequenas escolhas."
    },
    {
        "pergunta": "Em atividade pedagógica, o profissional de apoio deve evitar:",
        "alternativas": [
            "favorecer interação com colegas durante a realização da atividade proposta.",
            "dar a resposta ao estudante quando ele possui condições de construir sua própria resposta.",
            "ajudar o estudante a acessar material que apresente barreira de uso.",
            "apoiar posicionamento corporal quando houver necessidade funcional.",
            "oferecer recurso de comunicação indicado pela equipe para participação."
        ],
        "correta": 1,
        "explicacao": "Responder pelo estudante pode comprometer autonomia, aprendizagem e avaliação real de suas capacidades.",
        "feedbackAcerto": "Correto. O apoio deve facilitar o acesso à tarefa, não executar a atividade cognitiva no lugar do estudante.",
        "feedbackErro": "O erro é confundir ajudar com resolver.",
        "dicaBanca": "Apoiar o processo não é entregar a resposta."
    },
    {
        "pergunta": "Quando o professor faz uma pergunta ao estudante acompanhado, o apoio deve:",
        "alternativas": [
            "pedir ao professor que evite perguntas diretas para não constranger o estudante.",
            "responder imediatamente quando houver silêncio para manter o ritmo da aula.",
            "orientar outro colega a responder quando a participação estiver demorando.",
            "traduzir toda pergunta para o estudante mesmo quando ele compreende a comunicação.",
            "dar tempo para que o estudante responda e oferecer auxílio somente quando necessário."
        ],
        "correta": 4,
        "explicacao": "A interação pedagógica deve ocorrer diretamente com o estudante sempre que possível.",
        "feedbackAcerto": "Correto. O apoio preserva autoria e participação na comunicação.",
        "feedbackErro": "O erro é colocar o profissional entre professor e estudante sem necessidade.",
        "dicaBanca": "Evite transformar o apoio em porta-voz permanente."
    },
    {
        "pergunta": "O profissional de apoio escolar deve atuar:",
        "alternativas": [
            "como responsável clínico pelo estudante.",
            "com autonomia pedagógica total sobre o estudante.",
            "como representante exclusivo da família dentro da escola.",
            "com ética, respeito, sigilo, colaboração e foco na autonomia e participação.",
            "como substituto da equipe pedagógica."
        ],
        "correta": 3,
        "explicacao": "A função exige postura ética, colaborativa e inclusiva, sem ultrapassar os limites legais do cargo.",
        "feedbackAcerto": "Correto. Essa alternativa reúne os princípios centrais da atuação profissional.",
        "feedbackErro": "O erro é atribuir ao apoio papéis exclusivos de professor, família ou saúde.",
        "dicaBanca": "Questão-síntese: função, ética e limites."
    },
    {
        "pergunta": "Uma atuação de apoio escolar é inadequada quando:",
        "alternativas": [
            "respeita o tempo de resposta do estudante.",
            "oferece ajuda proporcional à necessidade.",
            "preserva informações pessoais.",
            "segue o planejamento da equipe.",
            "cria dependência desnecessária e reduz oportunidades de participação autônoma."
        ],
        "correta": 4,
        "explicacao": "Apoio excessivo pode tornar-se uma barreira se elimina oportunidades de ação do estudante.",
        "feedbackAcerto": "Correto. Nem toda ajuda é inclusiva; ajuda demais também pode limitar.",
        "feedbackErro": "O erro é pensar que quanto mais o adulto faz, melhor é o apoio.",
        "dicaBanca": "Superproteção pode ser capacitista."
    },
    {
        "pergunta": "O profissional de apoio percebe que o estudante já não necessita ajuda em determinada tarefa. O mais adequado é:",
        "alternativas": [
            "reduzir gradualmente a intervenção e acompanhar a evolução da autonomia.",
            "manter a ajuda exatamente igual por segurança.",
            "retirar todo apoio em todas as atividades.",
            "pedir transferência do estudante para outra turma.",
            "substituir a tarefa por outra mais simples."
        ],
        "correta": 0,
        "explicacao": "O nível de apoio deve ser revisto conforme o estudante desenvolve novas habilidades.",
        "feedbackAcerto": "Correto. Apoio inclusivo é dinâmico e responde às necessidades atuais.",
        "feedbackErro": "O erro é manter suporte fixo mesmo quando a necessidade muda ou retirar tudo de uma vez.",
        "dicaBanca": "Apoio deve ser reavaliado."
    },
    {
        "pergunta": "Em relação ao trabalho colaborativo, o profissional de apoio deve:",
        "alternativas": [
            "comunicar-se apenas com a família.",
            "decidir estratégias sem consultar ninguém.",
            "limitar-se ao cuidado físico e evitar reuniões.",
            "manter informações importantes apenas para si.",
            "compartilhar observações relevantes com professor e equipe pelos canais adequados."
        ],
        "correta": 4,
        "explicacao": "A colaboração exige circulação responsável de informações úteis ao planejamento.",
        "feedbackAcerto": "Correto. O apoio possui observações do cotidiano que podem enriquecer as decisões da equipe.",
        "feedbackErro": "O erro é isolar a atuação ou concentrar informações importantes.",
        "dicaBanca": "Colaboração é parte do papel, não algo opcional."
    },
    {
        "pergunta": "O profissional de apoio não deve ser utilizado pela escola como:",
        "alternativas": [
            "apoio à higiene conforme a necessidade.",
            "apoio à locomoção do estudante.",
            "substituto de professor ausente para conduzir a turma.",
            "apoio à comunicação quando necessário.",
            "apoio à participação em atividades."
        ],
        "correta": 2,
        "explicacao": "A função de apoio escolar não corresponde à docência nem pode ser usada para suprir ausência de professor.",
        "feedbackAcerto": "Correto. A escola não deve deslocar o profissional para uma função para a qual não foi definido legalmente.",
        "feedbackErro": "O erro é considerar a presença em sala suficiente para substituir o docente.",
        "dicaBanca": "Presença em sala ≠ função docente."
    },
    {
        "pergunta": "O profissional de apoio deve receber orientações da equipe pedagógica porque:",
        "alternativas": [
            "deve apenas cumprir ordens sem comunicar dificuldades.",
            "sua atuação precisa estar articulada aos objetivos educacionais e aos apoios planejados.",
            "não possui nenhuma autonomia prática.",
            "substitui o AEE quando recebe orientação.",
            "passa a ser responsável pelo currículo do estudante."
        ],
        "correta": 1,
        "explicacao": "A articulação com a equipe mantém coerência entre o apoio funcional e o processo pedagógico.",
        "feedbackAcerto": "Correto. Isso não significa ausência de iniciativa prática, mas atuação dentro de um planejamento comum.",
        "feedbackErro": "O erro é confundir orientação com subordinação cega ou ampliação de responsabilidade curricular.",
        "dicaBanca": "Articulação dá coerência à atuação."
    },
    {
        "pergunta": "Quando um recurso de tecnologia assistiva foi indicado para o estudante, o profissional de apoio deve:",
        "alternativas": [
            "favorecer seu uso conforme orientação e observar sua funcionalidade na rotina.",
            "retirá-lo quando considerar a atividade simples.",
            "substituí-lo por recurso próprio sem comunicar a equipe.",
            "usar o recurso apenas fora da sala.",
            "evitar que colegas vejam o recurso."
        ],
        "correta": 0,
        "explicacao": "O apoio pode colaborar no uso de recursos assistivos previstos no planejamento educacional.",
        "feedbackAcerto": "Correto. O objetivo é tornar o recurso funcional em situações reais de aprendizagem e participação.",
        "feedbackErro": "O erro é decidir sozinho abandonar ou substituir um recurso planejado.",
        "dicaBanca": "Tecnologia assistiva deve funcionar na vida real."
    },
    {
        "pergunta": "Em relação ao estudante com TEA, o profissional de apoio deve:",
        "alternativas": [
            "aplicar a mesma rotina de apoio a todos os estudantes com TEA.",
            "pressupor dificuldade intelectual.",
            "considerar necessidades individuais e evitar generalizações baseadas apenas no diagnóstico.",
            "exigir contato visual em todas as interações.",
            "retirar comportamentos repetitivos sempre que aparecerem."
        ],
        "correta": 2,
        "explicacao": "O TEA é heterogêneo e não autoriza inferir um padrão único de necessidade.",
        "feedbackAcerto": "Correto. O apoio deve ser construído a partir do estudante real e do contexto.",
        "feedbackErro": "O erro é transformar diagnóstico em lista fixa de comportamentos ou apoios.",
        "dicaBanca": "Diagnóstico não define sozinho o apoio."
    },
    {
        "pergunta": "Quando uma mudança inesperada de rotina causa ansiedade a estudante com TEA, o apoio pode:",
        "alternativas": [
            "ignorar a reação para evitar reforçar comportamentos de resistência à rotina.",
            "punir a resistência para ensinar que mudanças fazem parte do cotidiano escolar.",
            "usar comunicação clara e recursos de previsibilidade adequados às necessidades do estudante.",
            "informar o diagnóstico aos colegas para justificar a reação observada.",
            "retirar o estudante da atividade sempre que houver sinal de ansiedade."
        ],
        "correta": 2,
        "explicacao": "Previsibilidade e comunicação acessível podem reduzir barreiras em transições.",
        "feedbackAcerto": "Correto. A estratégia respeita a necessidade sem isolar ou punir.",
        "feedbackErro": "O erro é interpretar reação à mudança como simples indisciplina.",
        "dicaBanca": "Ágata costuma valorizar previsibilidade em questões com TEA."
    },
    {
        "pergunta": "Em uma situação de sobrecarga sensorial, o profissional de apoio deve priorizar:",
        "alternativas": [
            "segurança, redução de estímulos quando pertinente e comunicação acessível.",
            "cobrança firme de obediência para recuperar rapidamente a rotina da turma.",
            "exposição do comportamento para que a equipe compreenda a gravidade da situação.",
            "contenção física imediata como primeira resposta a qualquer sinal de sobrecarga.",
            "manutenção dos estímulos para que o estudante se adapte gradualmente ao ambiente."
        ],
        "correta": 0,
        "explicacao": "A atuação deve preservar segurança e dignidade e ajustar o contexto quando necessário.",
        "feedbackAcerto": "Correto. Reduzir estímulos pode ser apoio funcional quando a situação indicar.",
        "feedbackErro": "O erro é responder a uma barreira sensorial com punição ou exposição.",
        "dicaBanca": "Contexto também pode precisar ser adaptado."
    },
    {
        "pergunta": "O profissional de apoio escolar deve conhecer os protocolos institucionais porque:",
        "alternativas": [
            "substituem a legislação e permitem que a escola defina livremente as atribuições do cargo.",
            "permitem ampliar atribuições sempre que a rotina escolar exigir resposta imediata.",
            "orientam condutas de segurança, comunicação e registro dentro dos limites da função profissional.",
            "eliminam a necessidade de diálogo com professor, coordenação e demais profissionais.",
            "autorizam decisões clínicas quando não houver profissional de saúde disponível."
        ],
        "correta": 2,
        "explicacao": "Protocolos organizam a atuação prática e precisam ser compatíveis com a legislação e a função do cargo.",
        "feedbackAcerto": "Correto. Conhecer o fluxo reduz improvisos e melhora a segurança.",
        "feedbackErro": "O erro é imaginar que protocolo interno pode ampliar atribuições que a lei não concede.",
        "dicaBanca": "Protocolo organiza; não cria competência profissional."
    },
    {
        "pergunta": "Uma boa atuação do profissional de apoio escolar deve ser avaliada principalmente pela capacidade de:",
        "alternativas": [
            "fazer todas as tarefas pelo estudante.",
            "manter o estudante sempre próximo do adulto.",
            "evitar qualquer risco por meio de restrição.",
            "remover barreiras e ampliar autonomia, participação e segurança do estudante.",
            "substituir o professor nas atividades adaptadas."
        ],
        "correta": 3,
        "explicacao": "O objetivo do apoio é tornar a participação possível e progressivamente mais autônoma, sem perder segurança.",
        "feedbackAcerto": "Correto. O melhor apoio não é o que aparece mais, mas o que permite ao estudante participar melhor.",
        "feedbackErro": "O erro é medir qualidade pela quantidade de tarefas que o adulto executa.",
        "dicaBanca": "Questão-síntese: apoio deve ampliar participação."
    }
];

if (typeof window !== 'undefined') { window.apoioPapelProfissional = apoioPapelProfissional; }
