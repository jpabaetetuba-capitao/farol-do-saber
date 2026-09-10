/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 15: Transtorno Global do Desenvolvimento (TGD) / TEA
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 09/09/2026.
   Matriz FGV: SEDUC-SP 2026 (questões 16 a 21), SEE-MG 2023
   e prova histórica de TGD da FGV/SEE 2013.
   Bases atuais: LDB; Lei 12.764/2012; Lei 13.146/2015;
   Decreto 8.368/2014; Decreto 12.686/2025; Portaria MEC 421/2026;
   orientações Inep atualizadas em 31/08/2026.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-TEA-001",
        "numero": 1,
        "subtopico": "TGD x TEA — terminologia normativa",
        "dificuldade": "alta",
        "pergunta": "O edital menciona “Transtorno Global do Desenvolvimento (TGD)”. Em 2026, ao estudar a legislação educacional, a interpretação mais segura é",
        "alternativas": [
            "considerar TGD e TEA expressões juridicamente idênticas em todos os diplomas, pois a legislação federal já substituiu integralmente a terminologia antiga. A manutenção dessa equivalência seria aplicada inclusive quando o enunciado citar literalmente a LDB ou a política nacional mais recente.",
            "reconhecer que a LDB ainda utiliza a expressão “transtornos globais do desenvolvimento”, enquanto a política educacional atual identifica expressamente o TEA como público da Educação Especial.",
            "desconsiderar a expressão TGD, porque ela deixou de produzir qualquer efeito em concursos desde a publicação da Lei nº 12.764/2012.",
            "usar TGD apenas para deficiência intelectual, reservando TEA aos casos em que exista necessidade de profissional de apoio escolar.",
            "entender que o Decreto nº 12.686/2025 retirou o TEA do público da Educação Especial e manteve apenas a terminologia histórica da LDB."
        ],
        "correta": 1,
        "feedbackAcerto": "Você distinguiu a literalidade da LDB da terminologia atual da PNEEI. Essa diferença é uma pegadinha muito provável quando o edital conserva a expressão TGD.",
        "feedbackErro": "A LDB ainda contém “transtornos globais do desenvolvimento”, mas o Decreto nº 12.686/2025 e o Inep trabalham explicitamente com TEA. Não se deve apagar uma redação legal vigente nem tratá-la como sinônimo universal.",
        "analiseAlternativas": [
            "Incorreta. A substituição terminológica não ocorreu integralmente na LDB.",
            "Correta. A LDB preserva TGD em seus arts. 4º, 58 e 59, enquanto a política atual explicita TEA.",
            "Incorreta. A expressão permanece na LDB e pode ser cobrada literalmente.",
            "Incorreta. TGD não é categoria reservada à deficiência intelectual.",
            "Incorreta. O Decreto nº 12.686/2025 inclui expressamente estudantes com TEA no público da Educação Especial."
        ],
        "dicaBanca": "A FGV gosta de confrontar redação legal literal com terminologia contemporânea. Leia qual norma o enunciado está citando.",
        "pegadinha": "Não marque automaticamente a opção que apenas troca TGD por TEA se a pergunta pedir a literalidade da LDB.",
        "memorizar2026": "LDB: TGD. PNEEI/Inep atuais: TEA.",
        "fonte": "LDB, arts. 4º, 58 e 59; Decreto nº 12.686/2025, art. 1º; Inep, Educação Especial 2026.",
        "atualizacao2026": "Em 2026, o Inep e a PNEEI utilizam TEA, embora a LDB compilada ainda mantenha a expressão TGD."
    },
    {
        "id": "SEDUC-EE-TEA-002",
        "numero": 2,
        "subtopico": "TEA — definição educacional atual",
        "dificuldade": "media",
        "pergunta": "Para fins educacionais, a definição atual de estudante com TEA enfatiza impedimentos persistentes na interação social e na comunicação, associados a padrões restritos e repetitivos de comportamento. No planejamento escolar, o aspecto decisivo é",
        "alternativas": [
            "classificar previamente o estudante por gravidade clínica, pois o nível diagnóstico determina quais componentes curriculares poderão ser cursados. A partir dessa classificação, a equipe poderia ainda fixar metas curriculares padronizadas para cada nível de suporte ao longo do ano letivo.",
            "identificar apenas os comportamentos repetitivos, porque eles representam o principal indicador de necessidade educacional específica.",
            "comparar o desempenho social do estudante com o padrão médio da turma e organizar metas de normalização progressiva.",
            "priorizar a confirmação médica do transtorno antes de registrar barreiras, potencialidades e apoios no contexto escolar.",
            "analisar os impedimentos funcionais e as demandas educacionais em interação com as barreiras do contexto, considerando as singularidades do estudante."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou a definição educacional atual: o foco pedagógico está na funcionalidade, nas demandas concretas e nas barreiras do contexto, não em um rótulo clínico isolado.",
        "feedbackErro": "Na escola, a gravidade clínica não substitui a análise pedagógica. O Inep destaca impedimentos funcionais, demandas educacionais e barreiras contextuais.",
        "analiseAlternativas": [
            "Incorreta. Nível clínico não fixa currículo nem potencial de aprendizagem.",
            "Incorreta. TEA envolve diferentes dimensões e não pode ser reduzido a comportamentos repetitivos.",
            "Incorreta. A avaliação inclusiva não busca normalizar o estudante pela comparação com a turma.",
            "Incorreta. A escola não deve esperar confirmação médica para começar a identificar barreiras e apoios.",
            "Correta. Essa é a orientação atual do Inep para a compreensão educacional do TEA."
        ],
        "dicaBanca": "Na FGV 2026, a banca opôs avaliação individualizada e mediação à comparação padronizada com os colegas.",
        "pegadinha": "Gravidade clínica ≠ necessidade educacional em uma relação automática.",
        "memorizar2026": "TEA na escola: singularidade + funcionalidade + barreiras + apoios.",
        "fonte": "Inep — definição de estudantes com TEA, atualização de 31/08/2026; FGV SEDUC-SP 2026, questão 17."
    },
    {
        "id": "SEDUC-EE-TEA-003",
        "numero": 3,
        "subtopico": "Lei Berenice Piana — pessoa com deficiência",
        "dificuldade": "alta",
        "pergunta": "Nos termos da Lei nº 12.764/2012 e de sua regulamentação, a pessoa com Transtorno do Espectro Autista é considerada",
        "alternativas": [
            "pessoa com necessidade educacional temporária, exclusivamente para fins de acesso ao AEE e à educação básica.",
            "pessoa com transtorno de aprendizagem, sem enquadramento legal como pessoa com deficiência quando não houver deficiência intelectual associada.",
            "pessoa com deficiência, para todos os efeitos legais, independentemente de apresentar ou não deficiência intelectual associada.",
            "pessoa com deficiência apenas quando o laudo médico indicar nível 2 ou 3 de suporte e necessidade de acompanhante especializado.",
            "pessoa com condição de saúde equiparada à deficiência somente para benefícios assistenciais, não para direitos educacionais e de acessibilidade."
        ],
        "correta": 2,
        "feedbackAcerto": "Você acertou a regra central da Lei Berenice Piana: a pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais.",
        "feedbackErro": "O enquadramento jurídico não depende de deficiência intelectual associada nem de determinado nível de suporte.",
        "analiseAlternativas": [
            "Incorreta. O enquadramento não é temporário nem restrito ao AEE.",
            "Incorreta. TEA não é tratado juridicamente apenas como transtorno de aprendizagem.",
            "Correta. É a regra expressa da Lei nº 12.764/2012 e do Decreto nº 8.368/2014.",
            "Incorreta. Nível de suporte ou acompanhante não condicionam o reconhecimento legal.",
            "Incorreta. Os efeitos alcançam também educação, acessibilidade e demais direitos da pessoa com deficiência."
        ],
        "dicaBanca": "Quando a FGV perguntar “para todos os efeitos legais”, a Lei nº 12.764/2012 é referência obrigatória.",
        "pegadinha": "Não condicione o reconhecimento jurídico do TEA ao nível de suporte.",
        "memorizar2026": "TEA = pessoa com deficiência para todos os efeitos legais.",
        "fonte": "Lei nº 12.764/2012, art. 1º, §2º; Decreto nº 8.368/2014, art. 1º."
    },
    {
        "id": "SEDUC-EE-TEA-004",
        "numero": 4,
        "subtopico": "Matrícula — vedação de recusa",
        "dificuldade": "alta",
        "pergunta": "O diretor de uma escola particular informa à família de um estudante com TEA que a matrícula somente será efetivada se houver disponibilidade de profissional especializado e pagamento de taxa adicional. À luz da legislação federal, essa conduta",
        "alternativas": [
            "é incompatível com o direito à educação: a recusa de matrícula por motivo de deficiência pode gerar sanção, e a instituição privada não pode cobrar valor adicional pela implementação de medidas inclusivas.",
            "é admissível quando a escola comprovar que não possui sala de recursos multifuncionais, desde que indique outra instituição apta a atender o estudante.",
            "é válida se a necessidade de apoio for intensa, pois a matrícula em escola comum depende da existência prévia de todos os recursos especializados.",
            "pode ser adotada mediante concordância da família, porque o custeio individual do apoio afasta a obrigação de a escola reorganizar sua estrutura.",
            "é regular quando o estudante apresenta TEA sem deficiência intelectual, pois a proteção contra cobrança adicional se aplica apenas às deficiências físicas e sensoriais. Essa interpretação também permitiria à escola exigir contrato particular de apoio sempre que considerar o atendimento mais oneroso."
        ],
        "correta": 0,
        "feedbackAcerto": "Você articulou corretamente a Lei nº 12.764/2012 com a LBI: matrícula não pode ser recusada por motivo de deficiência, e a escola privada não pode repassar custos inclusivos como cobrança adicional.",
        "feedbackErro": "Falta de estrutura não autoriza transformar o direito à matrícula em condição suspensiva nem repassar o custo do apoio à família.",
        "analiseAlternativas": [
            "Correta. A legislação protege a matrícula e veda cobrança adicional por medidas inclusivas.",
            "Incorreta. Ausência de SRM não elimina o dever de inclusão nem autoriza recusa.",
            "Incorreta. A intensidade do apoio não cria requisito prévio para matrícula.",
            "Incorreta. A obrigação institucional não pode ser afastada por acordo de cobrança individual.",
            "Incorreta. A proteção alcança a pessoa com TEA, considerada pessoa com deficiência para todos os efeitos legais."
        ],
        "dicaBanca": "FGV costuma criar justificativas administrativas plausíveis para uma conduta discriminatória. Verifique se a norma admite a condição.",
        "pegadinha": "“A escola ainda não está preparada” não é autorização para negar matrícula.",
        "memorizar2026": "Matrícula não pode ser recusada; escola privada não cobra extra por inclusão.",
        "fonte": "Lei nº 12.764/2012, art. 7º; Lei nº 13.146/2015, art. 28, §1º."
    },
    {
        "id": "SEDUC-EE-TEA-005",
        "numero": 5,
        "subtopico": "Acompanhante especializado — necessidade comprovada",
        "dificuldade": "alta",
        "pergunta": "Em relação ao acompanhante especializado previsto para a pessoa com TEA incluída em classe comum, assinale a afirmativa correta.",
        "alternativas": [
            "O direito nasce automaticamente com o diagnóstico de TEA, pois toda pessoa autista necessita do mesmo tipo de acompanhamento no ambiente escolar.",
            "O acompanhante especializado substitui o professor nas atividades curriculares quando o estudante apresenta dificuldade persistente de comunicação.",
            "A presença do acompanhante torna desnecessária a articulação entre professor regente, AEE, família e equipe escolar, evitando sobreposição de funções. Nessa hipótese, a equipe poderia deixar de revisar os apoios ao longo do ano, pois as funções já estariam distribuídas de forma definitiva.",
            "O direito existe em casos de comprovada necessidade, e a definição dos apoios deve considerar as demandas funcionais e o contexto, sem transformar o diagnóstico em critério automático.",
            "A comprovação da necessidade depende obrigatoriamente de laudo médico recente, porque decisões sobre apoio escolar não podem ser baseadas em estudo pedagógico."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou a combinação correta: a Lei nº 12.764/2012 fala em comprovada necessidade, enquanto a política educacional atual exige análise das demandas e barreiras, sem automatismo pelo diagnóstico.",
        "feedbackErro": "O apoio não é automático para toda pessoa com TEA, não substitui o professor e não depende obrigatoriamente de laudo médico para o planejamento educacional.",
        "analiseAlternativas": [
            "Incorreta. Mesmo diagnóstico não significa mesma necessidade de apoio.",
            "Incorreta. O acompanhante não assume a função docente.",
            "Incorreta. O apoio exige articulação, não isolamento de funções.",
            "Correta. A necessidade deve ser individualmente demonstrada e traduzida em apoio funcional adequado.",
            "Incorreta. A PNEEI e a Portaria MEC nº 421/2026 vedam condicionar o acesso ao apoio educacional à apresentação de laudo."
        ],
        "dicaBanca": "A FGV explora muito a palavra “automaticamente”. Em TEA, diagnóstico não define sozinho tipo, intensidade ou duração do apoio.",
        "pegadinha": "Direito a apoio quando necessário ≠ apoio idêntico para todos.",
        "memorizar2026": "Acompanhante: comprovada necessidade + função definida pelo contexto.",
        "fonte": "Lei nº 12.764/2012, art. 3º, §1º; Decreto nº 8.368/2014, art. 4º; Decreto nº 12.686/2025 e Portaria MEC nº 421/2026.",
        "atualizacao2026": "A Lei nº 15.131/2025 reorganizou a redação do art. 3º da Lei nº 12.764/2012, mantendo o direito a acompanhante especializado em caso de comprovada necessidade."
    },
    {
        "id": "SEDUC-EE-TEA-006",
        "numero": 6,
        "subtopico": "Níveis de suporte — uso pedagógico",
        "dificuldade": "alta",
        "pergunta": "Em reunião pedagógica, uma professora afirma que um estudante classificado clinicamente como TEA nível 3 de suporte deve receber, durante toda a escolarização, objetivos curriculares mais simples que os da turma. A afirmação é",
        "alternativas": [
            "adequada, porque os níveis de suporte indicam de forma objetiva o teto de aprendizagem acadêmica de cada estudante.",
            "inadequada, porque os níveis de suporte descrevem necessidades de apoio e não autorizam fixar potencial de aprendizagem ou currículo permanente com base no rótulo.",
            "adequada apenas quando o AEE concordar formalmente com a redução dos objetivos antes do início do ano letivo.",
            "inadequada somente se o estudante utilizar comunicação oral funcional, pois nesse caso o nível clínico perde relevância para o currículo.",
            "adequada quando a família assina o PEI, já que a concordância dos responsáveis legitima a redução permanente das expectativas escolares. O PEI passaria, então, a funcionar como autorização para manter as mesmas expectativas reduzidas enquanto o diagnóstico clínico não fosse revisto."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reproduziu exatamente a lógica cobrada pela FGV em 2026: nível de suporte não pode ser usado para definir potencial de aprendizagem nem para congelar expectativas curriculares.",
        "feedbackErro": "Níveis de suporte orientam compreensão das necessidades de apoio; eles não funcionam como escala de inteligência, rendimento ou capacidade escolar.",
        "analiseAlternativas": [
            "Incorreta. Nível de suporte não estabelece teto acadêmico.",
            "Correta. A FGV cobrou expressamente essa distinção na SEDUC-SP 2026.",
            "Incorreta. AEE não transforma redução automática de currículo em medida inclusiva.",
            "Incorreta. Comunicação oral não é o critério que torna a afirmação adequada ou inadequada.",
            "Incorreta. Participação da família não legitima baixa expectativa permanente baseada em diagnóstico."
        ],
        "dicaBanca": "Essa é uma pegadinha real da FGV 2026: “nível de suporte = potencial de aprendizagem” é falsa.",
        "pegadinha": "Nível 1, 2 ou 3 não é nota de inteligência.",
        "memorizar2026": "Nível de suporte informa apoio necessário, não limite de aprendizagem.",
        "fonte": "FGV SEDUC-SP 2026, questão 16; referenciais clínicos atuais usados apenas como contexto, não como teto pedagógico."
    },
    {
        "id": "SEDUC-EE-TEA-007",
        "numero": 7,
        "subtopico": "Características do TEA — heterogeneidade",
        "dificuldade": "media",
        "pergunta": "Sobre as características do TEA e suas implicações educacionais, assinale a afirmativa correta.",
        "alternativas": [
            "A presença de interesses restritos permite prever, com segurança, quais conteúdos o estudante aprenderá com facilidade e quais permanecerão inacessíveis.",
            "A ausência de fala oral funcional implica ausência de compreensão simbólica, devendo a escola priorizar atividades concretas sem linguagem escrita.",
            "Alterações sensoriais são obrigatórias em todos os casos de TEA e, por isso, justificam adaptações ambientais padronizadas para todos os estudantes.",
            "Dificuldades de interação social ocorrem de maneira uniforme, razão pela qual estratégias de socialização podem ser previamente definidas pelo diagnóstico. A escola poderia, assim, adotar previamente o mesmo roteiro de interação para alunos que apresentem descrição diagnóstica semelhante.",
            "O TEA apresenta grande heterogeneidade; características semelhantes podem produzir necessidades educacionais distintas, exigindo observação e planejamento individualizados."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu a ideia de espectro e heterogeneidade. O planejamento parte do estudante concreto, não de um perfil único de autismo.",
        "feedbackErro": "Nenhuma característica isolada permite inferir automaticamente compreensão, aprendizagem, comunicação ou apoio necessário.",
        "analiseAlternativas": [
            "Incorreta. Interesse restrito pode ser recurso pedagógico, mas não prevê todo o perfil de aprendizagem.",
            "Incorreta. Ausência de fala não equivale a ausência de linguagem, compreensão ou possibilidade de alfabetização.",
            "Incorreta. Alterações sensoriais podem ocorrer, mas variam entre pessoas e contextos.",
            "Incorreta. Interação social e comunicação apresentam grande variabilidade.",
            "Correta. Heterogeneidade é central na compreensão pedagógica do TEA."
        ],
        "dicaBanca": "A FGV 2026 iniciou seu bloco de TEA com situações que exigem rejeitar generalizações por nível de suporte ou diagnóstico.",
        "pegadinha": "“Todo autista...” é uma pista frequente de alternativa frágil.",
        "memorizar2026": "TEA é espectro: necessidades e potencialidades variam.",
        "fonte": "FGV SEDUC-SP 2026, questões 16 e 17; Inep — definição de TEA 2026."
    },
    {
        "id": "SEDUC-EE-TEA-008",
        "numero": 8,
        "subtopico": "Aspectos sensoriais — resposta pedagógica",
        "dificuldade": "alta",
        "pergunta": "Um estudante com TEA demonstra desconforto intenso com o ruído na troca de aulas e passa a evitar o corredor. A resposta pedagógica mais coerente é",
        "alternativas": [
            "dispensá-lo definitivamente das transições coletivas para impedir crises e preservar o andamento da rotina escolar.",
            "exigir exposição gradual ao ruído sem qualquer apoio, pois a adaptação sensorial deve ocorrer pela habituação ao ambiente comum.",
            "identificar os gatilhos e a função da reação, organizar apoios ambientais e estratégias de autorregulação e revisar a resposta conforme os resultados observados.",
            "transferir a decisão exclusivamente à equipe clínica, porque alterações sensoriais não constituem objeto do planejamento educacional.",
            "reduzir todos os estímulos sonoros da escola em qualquer horário, aplicando a mesma intervenção a estudantes com perfis sensoriais semelhantes. A padronização seria mantida ainda que alguns estudantes utilizassem o ruído como pista ambiental e não demonstrassem qualquer desconforto."
        ],
        "correta": 2,
        "feedbackAcerto": "Você escolheu uma intervenção funcional: compreender o contexto, reduzir barreiras e ensinar estratégias, sem excluir o estudante nem universalizar uma adaptação individual.",
        "feedbackErro": "A inclusão não exige tolerância forçada nem afastamento permanente. A escola deve analisar a situação e organizar apoios ajustados.",
        "analiseAlternativas": [
            "Incorreta. Evitar permanentemente pode restringir participação e autonomia.",
            "Incorreta. Exposição sem apoio ignora sofrimento e barreiras sensoriais.",
            "Correta. Avaliação contextual, apoio e monitoramento formam uma resposta pedagógica adequada.",
            "Incorreta. Aspectos sensoriais afetam participação escolar e também precisam ser considerados pela equipe educacional.",
            "Incorreta. Adaptação deve responder às necessidades reais, não ser padronizada por diagnóstico."
        ],
        "dicaBanca": "FGV costuma apresentar um comportamento e perguntar o que o professor faz antes de intervir: observar, registrar e compreender vem antes de soluções rígidas.",
        "pegadinha": "Reduzir barreira não significa eliminar toda experiência sensorial.",
        "memorizar2026": "Sensorial: identificar gatilho → apoiar regulação → manter participação → reavaliar.",
        "fonte": "FGV SEDUC-SP 2026, questão 17; Decreto nº 12.686/2025 — barreiras e apoios individualizados."
    },
    {
        "id": "SEDUC-EE-TEA-009",
        "numero": 9,
        "subtopico": "Comunicação — fala e funcionalidade",
        "dificuldade": "alta",
        "pergunta": "Durante uma atividade, um estudante com TEA sem fala oral funcional aponta para símbolos, conduz o colega até um material e utiliza expressões faciais para solicitar ajuda. A professora deve compreender que",
        "alternativas": [
            "há comunicação funcional e ela pode ser ampliada por recursos e estratégias adequados, sem exigir fala oral como condição para participação curricular.",
            "os comportamentos descritos não constituem comunicação escolar válida, pois a comunicação pedagógica depende de linguagem oral ou escrita convencional.",
            "a prioridade deve ser interromper gestos e apontamentos para que a ausência de fala não se consolide como padrão comunicativo permanente.",
            "o estudante só poderá participar de atividades coletivas depois de dominar um sistema formal de CAA definido pelo professor do AEE.",
            "a comunicação não verbal deve ficar restrita ao AEE, enquanto a classe comum mantém exclusivamente comandos orais para favorecer generalização."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu comunicação em múltiplas formas e evitou transformar fala oral em requisito de participação.",
        "feedbackErro": "Comunicação funcional pode envolver gestos, símbolos, CAA, expressão corporal e outras formas. A escola deve ampliar possibilidades, não invalidar repertórios existentes.",
        "analiseAlternativas": [
            "Correta. O repertório já possui função comunicativa e pode ser expandido.",
            "Incorreta. Comunicação não se limita à oralidade ou à escrita convencional.",
            "Incorreta. Suprimir meios funcionais pode aumentar barreiras e frustração.",
            "Incorreta. Participação não deve esperar domínio prévio de um sistema formal.",
            "Incorreta. Estratégias de comunicação precisam atravessar os contextos escolares."
        ],
        "dicaBanca": "Na FGV 2026, comunicação funcional e CAA apareceram em sequência de questões sobre TEA.",
        "pegadinha": "Sem fala ≠ sem comunicação.",
        "memorizar2026": "Comunique-se com o repertório disponível e amplie possibilidades.",
        "fonte": "FGV SEDUC-SP 2026, questões 18 a 20; Inep — atividades do AEE."
    },
    {
        "id": "SEDUC-EE-TEA-010",
        "numero": 10,
        "subtopico": "CAA no TEA — implementação",
        "dificuldade": "alta",
        "pergunta": "Uma equipe escolhe uma prancha de comunicação para um estudante com TEA e passa a utilizá-la apenas durante o AEE. Após algumas semanas, o estudante quase não a usa na sala comum. O ajuste mais adequado é",
        "alternativas": [
            "trocar imediatamente a prancha por um dispositivo eletrônico, pois baixa tecnologia tende a produzir menor generalização comunicativa. Essa troca seria indicada mesmo que a prancha atual estivesse adequada ao repertório motor, visual e simbólico do estudante e fosse compreendida pelos parceiros.",
            "manter o recurso no AEE até que o estudante demonstre domínio completo, evitando usos inconsistentes em outros ambientes.",
            "suspender temporariamente a CAA e retomar o ensino oral, pois o baixo uso indica ausência de pré-requisitos comunicativos.",
            "restringir a prancha às situações de solicitação de objetos, ampliando seu uso somente depois que houver emissão de palavras isoladas.",
            "treinar parceiros de comunicação e integrar o sistema às rotinas, atividades, recreação e demais contextos, monitorando se o recurso continua funcional."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou a sequência cobrada diretamente pela FGV em 2026: escolha do sistema, treinamento dos parceiros e integração da CAA aos contextos reais.",
        "feedbackErro": "CAA não deve ficar confinada ao atendimento especializado. Comunicação precisa ocorrer onde a vida escolar acontece.",
        "analiseAlternativas": [
            "Incorreta. Alta tecnologia não é automaticamente superior à baixa tecnologia.",
            "Incorreta. Esperar domínio isolado antes de usar em contexto dificulta generalização.",
            "Incorreta. CAA pode coexistir com fala e não depende de “pré-requisitos” rígidos para ser considerada.",
            "Incorreta. O sistema deve apoiar diferentes funções comunicativas, não apenas pedidos.",
            "Correta. A FGV cobrou exatamente a integração da CAA em todos os contextos escolares."
        ],
        "dicaBanca": "FGV SEDUC-SP 2026, questão 19: avaliação, escolha, parceiros e integração da CAA.",
        "pegadinha": "CAA usada só no AEE vira exercício; CAA usada na rotina vira comunicação.",
        "memorizar2026": "CAA: avaliar → escolher → ensinar parceiros → usar em todos os contextos.",
        "fonte": "FGV SEDUC-SP 2026, questão 19; Inep — atividades do AEE."
    },
    {
        "id": "SEDUC-EE-TEA-011",
        "numero": 11,
        "subtopico": "Observação, avaliação e mediação",
        "dificuldade": "alta",
        "pergunta": "Considere as afirmativas sobre avaliação pedagógica de estudantes com TEA.",
        "alternativas": [
            "I, apenas.",
            "II e III, apenas.",
            "I e III, apenas.",
            "I e II, apenas.",
            "I, II e III."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou o mesmo eixo conceitual cobrado pela FGV 2026: observar para conhecer o estudante e usar a avaliação para reorganizar a mediação, sem compará-lo de modo padronizado com a turma.",
        "feedbackErro": "A afirmativa II é a armadilha: avaliação inclusiva não tem como objetivo aproximar o estudante de um padrão fixo por comparação com os colegas.",
        "analiseAlternativas": [
            "Incorreta. III também é verdadeira.",
            "Incorreta. II é falsa e I é verdadeira.",
            "Correta. I e III articulam observação, avaliação e mediação pedagógica.",
            "Incorreta. II torna o conjunto inadequado.",
            "Incorreta. II é incompatível com avaliação inclusiva."
        ],
        "dicaBanca": "A FGV SEDUC-SP 2026 usou exatamente o formato I/II/III para esse tema.",
        "pegadinha": "Avaliar não é medir o quanto o aluno se aproxima dos colegas.",
        "memorizar2026": "Observar → identificar potencialidades/barreiras → mediar → reavaliar.",
        "fonte": "FGV SEDUC-SP 2026, questão 17.",
        "afirmacoes": [
            "I. A observação sistemática pode revelar interesses, potencialidades, barreiras e formas de participação que orientam o planejamento.",
            "II. A avaliação deve priorizar a comparação com os colegas da mesma idade para definir metas padronizadas de desenvolvimento.",
            "III. A mediação docente deve ser intencional e revista a partir das respostas do estudante às estratégias propostas."
        ]
    },
    {
        "id": "SEDUC-EE-TEA-012",
        "numero": 12,
        "subtopico": "Rotina e previsibilidade",
        "dificuldade": "media",
        "pergunta": "Uma professora utiliza agenda visual para antecipar as etapas da aula a um estudante com TEA, mas mantém a possibilidade de alterações e ensina como lidar com mudanças previamente sinalizadas. Essa prática é adequada porque",
        "alternativas": [
            "elimina a necessidade de desenvolver flexibilidade, já que a rotina escolar deve permanecer sempre idêntica para prevenir desconforto. Alterações não planejadas deveriam ser evitadas por tempo indeterminado, ainda que o estudante demonstrasse capacidade crescente para lidar com mudanças.",
            "oferece previsibilidade como apoio à compreensão e à autorregulação, sem transformar a rotina em rigidez absoluta ou objetivo em si mesma.",
            "substitui instruções pedagógicas verbais e escritas, tornando suficiente o uso de imagens para estudantes que apresentam TEA.",
            "deve ser aplicada a todo estudante com TEA da mesma forma, pois a necessidade de rotina é uma característica invariável do transtorno.",
            "permite dispensar o estudante de atividades imprevistas, uma vez que mudanças de rotina são incompatíveis com aprendizagem significativa."
        ],
        "correta": 1,
        "feedbackAcerto": "Você distinguiu previsibilidade de rigidez. Apoios visuais podem tornar a rotina compreensível e também ajudar o estudante a enfrentar mudanças com segurança.",
        "feedbackErro": "A rotina é um recurso, não uma prisão pedagógica. Seu uso deve ser individualizado e pode incluir ensino gradual de flexibilidade.",
        "analiseAlternativas": [
            "Incorreta. Previsibilidade não exige imutabilidade permanente.",
            "Correta. A agenda visual organiza informação e pode favorecer autorregulação.",
            "Incorreta. Recursos visuais complementam, não necessariamente substituem todas as outras formas de instrução.",
            "Incorreta. Nem todo estudante com TEA precisa do mesmo apoio.",
            "Incorreta. O objetivo é ampliar participação também diante de mudanças, com suporte adequado."
        ],
        "dicaBanca": "A FGV tende a tornar um recurso válido em alternativa errada por absolutizá-lo.",
        "pegadinha": "Rotina ajuda; rigidez obrigatória não.",
        "memorizar2026": "Previsibilidade = apoio visual + antecipação + flexibilidade ensinada.",
        "fonte": "FGV SEDUC-SP 2026, questões 16, 17 e 21; práticas pedagógicas inclusivas para TEA."
    },
    {
        "id": "SEDUC-EE-TEA-013",
        "numero": 13,
        "subtopico": "Interesses restritos e hiperfoco",
        "dificuldade": "alta",
        "pergunta": "Um estudante com TEA demonstra interesse intenso por mapas ferroviários. Para favorecer o acesso a conteúdos de Matemática e Geografia, a equipe decide utilizar esse interesse em algumas atividades. A medida é mais adequada quando",
        "alternativas": [
            "o interesse passa a substituir os demais temas curriculares, pois o engajamento deve prevalecer sobre a diversidade de experiências escolares. A ampliação para outros objetivos curriculares só deveria ocorrer quando o estudante abandonasse espontaneamente o interesse principal.",
            "o professor usa o tema apenas como recompensa após tarefas sem relação com ele, evitando que o hiperfoco interfira no ensino regular.",
            "o conteúdo da turma é reduzido aos conhecimentos que se conectam diretamente ao interesse, prevenindo frustrações em áreas menos motivadoras.",
            "o interesse é explorado somente no AEE, porque a classe comum deve manter planejamento idêntico e neutro para todos os estudantes.",
            "o interesse funciona como ponto de entrada e motivação para objetivos curriculares, sem limitar o estudante ao hiperfoco nem empobrecer o percurso de aprendizagem."
        ],
        "correta": 4,
        "feedbackAcerto": "Você tratou o interesse como recurso pedagógico, não como currículo paralelo. Ele pode favorecer engajamento e significado sem restringir as oportunidades do estudante.",
        "feedbackErro": "Hiperfoco pode ser ponte para o conhecimento, mas não deve aprisionar o aluno a um único tema ou substituir todo o currículo.",
        "analiseAlternativas": [
            "Incorreta. Um interesse não deve monopolizar permanentemente o currículo.",
            "Incorreta. Ele pode ser integrado significativamente ao ensino, não apenas usado como prêmio.",
            "Incorreta. Redução automática de conteúdo gera baixa expectativa e currículo paralelo.",
            "Incorreta. A classe comum também pode incorporar interesses de modo pedagógico.",
            "Correta. O interesse pode ampliar engajamento mantendo objetivos curriculares e novas experiências."
        ],
        "dicaBanca": "A FGV 2026 trabalha a ideia de atividades com sentido para o estudante sem defender ensino restrito ao interesse pessoal.",
        "pegadinha": "Usar interesse ≠ ensinar somente o interesse.",
        "memorizar2026": "Hiperfoco pode ser ponte, nunca teto curricular.",
        "fonte": "FGV SEDUC-SP 2026, questão 21; princípios de mediação e engajamento."
    },
    {
        "id": "SEDUC-EE-TEA-014",
        "numero": 14,
        "subtopico": "Comportamento — análise funcional e apoio",
        "dificuldade": "alta",
        "pergunta": "Durante atividades coletivas, um estudante com TEA passa a gritar e sair do lugar sempre que recebe instruções longas e pouco previsíveis. Antes de adotar uma consequência punitiva, a equipe deve",
        "alternativas": [
            "analisar antecedentes, função possível do comportamento e barreiras da tarefa, ajustando comunicação, previsibilidade e apoios e acompanhando os efeitos da intervenção.",
            "manter a exigência original até que o comportamento cesse, pois modificar a tarefa reforçaria respostas inadequadas e reduziria a autonomia. A escola poderia apenas acrescentar reforços positivos após o cumprimento da instrução, mantendo intactos o formato, a extensão e a previsibilidade da tarefa.",
            "encaminhar o estudante para o AEE em todas as atividades coletivas, evitando que o comportamento interfira no aprendizado dos colegas.",
            "reduzir permanentemente a complexidade curricular, porque episódios de desregulação indicam que os objetivos atuais excedem sua capacidade acadêmica.",
            "solicitar à família uma intervenção clínica antes de qualquer ajuste escolar, pois a análise funcional do comportamento é estranha à prática pedagógica."
        ],
        "correta": 0,
        "feedbackAcerto": "Você priorizou compreensão funcional e remoção de barreiras. A resposta deve buscar por que o comportamento ocorre e quais apoios tornam a participação possível.",
        "feedbackErro": "Punir sem compreender a função do comportamento pode aumentar barreiras. A escola também analisa contexto, instruções, previsibilidade, comunicação e demanda da tarefa.",
        "analiseAlternativas": [
            "Correta. A análise contextual orienta intervenção mais funcional e inclusiva.",
            "Incorreta. Persistir sem ajuste pode manter o gatilho e não ensina alternativa funcional.",
            "Incorreta. Retirada sistemática substitui participação por segregação.",
            "Incorreta. Desregulação não prova incapacidade acadêmica permanente.",
            "Incorreta. A escola pode e deve analisar fatores pedagógicos e ambientais."
        ],
        "dicaBanca": "Na FGV, o distrator punitivo costuma parecer “firme”, mas ignora a função do comportamento e a mediação pedagógica.",
        "pegadinha": "Comportamento comunica relação com o contexto; não é rótulo de incapacidade.",
        "memorizar2026": "Antecedente + função + apoio + monitoramento.",
        "fonte": "FGV SEDUC-SP 2026, questões 17, 18 e 21; perspectiva inclusiva de barreiras."
    },
    {
        "id": "SEDUC-EE-TEA-015",
        "numero": 15,
        "subtopico": "Ensino estruturado — recursos visuais",
        "dificuldade": "media",
        "pergunta": "Uma estratégia inspirada no ensino estruturado para um estudante com TEA é",
        "alternativas": [
            "manter o ambiente sem qualquer indicação visual para estimular a generalização espontânea das regras e reduzir dependência de apoios externos.",
            "organizar todas as tarefas individualmente no AEE, evitando recursos estruturantes na classe comum para preservar a espontaneidade da rotina escolar. Dessa forma, a estruturação permaneceria como responsabilidade exclusiva do atendimento especializado, sem alterar a organização da atividade regular.",
            "utilizar apenas repetição mecânica de respostas, pois a estruturação do ensino se define pelo número de tentativas realizadas em cada atividade.",
            "tornar visíveis a sequência, o espaço, o que deve ser feito e quando a atividade termina, ajustando a estrutura às necessidades do estudante e favorecendo autonomia.",
            "padronizar agenda, cores e materiais para todos os estudantes com TEA, independentemente de leitura, compreensão visual ou preferência individual."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou o núcleo pedagógico do ensino estruturado: tornar a situação mais compreensível e previsível para favorecer desempenho e independência.",
        "feedbackErro": "Estruturação não é repetição mecânica, isolamento nem pacote idêntico. O apoio deve ajudar o estudante a compreender e agir com mais autonomia.",
        "analiseAlternativas": [
            "Incorreta. Apoios visuais podem reduzir ambiguidade e favorecer autonomia.",
            "Incorreta. Estratégias úteis precisam chegar também aos contextos da classe comum.",
            "Incorreta. Estruturação envolve organização de ambiente, tempo e tarefa, não mera repetição.",
            "Correta. Clareza visual e organização funcional são elementos típicos de ensino estruturado.",
            "Incorreta. O recurso deve ser individualizado e funcional."
        ],
        "dicaBanca": "FGV já cobrou TEACCH e, mais recentemente, estratégias estruturadas e significativas para TEA. Foque na função do recurso.",
        "pegadinha": "Estruturar não é controlar; é tornar compreensível.",
        "memorizar2026": "Ensino estruturado: onde? o quê? quanto? quando termina? o que vem depois?",
        "fonte": "FGV Educação Especial — TGD 2013 (TEACCH) e FGV SEDUC-SP 2026 — estratégias para TEA."
    },
    {
        "id": "SEDUC-EE-TEA-016",
        "numero": 16,
        "subtopico": "AEE para TEA — natureza complementar",
        "dificuldade": "alta",
        "pergunta": "Um estudante com TEA apresenta boa participação em Ciências, mas encontra barreiras de comunicação e organização em atividades coletivas. O AEE deve",
        "alternativas": [
            "assumir o ensino dos conteúdos em que há maior dificuldade, substituindo parcialmente a classe comum enquanto persistirem as barreiras.",
            "identificar e organizar recursos, estratégias e apoios que ampliem acesso, participação e autonomia, articulando-se ao trabalho da classe comum sem substituí-la.",
            "concentrar-se em treino comportamental individual, porque o currículo regular é responsabilidade exclusiva do professor regente.",
            "priorizar atividades terapêuticas definidas por profissionais de saúde, ainda que não estejam vinculadas às demandas de participação escolar. A escola poderia apenas comunicar ao AEE as metas clínicas definidas pelos especialistas, preservando a separação entre intervenção terapêutica e ensino comum.",
            "restringir o atendimento à sala de recursos multifuncionais, evitando intervenções e articulações que envolvam outros espaços da escola."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou a definição atual do AEE: atividade pedagógica complementar para estudantes com TEA, articulada à escolarização comum e voltada à eliminação de barreiras.",
        "feedbackErro": "AEE não é reforço, terapia nem substituição da classe comum. Seus recursos e estratégias precisam repercutir na participação escolar.",
        "analiseAlternativas": [
            "Incorreta. AEE não substitui matrícula, frequência ou ensino da classe comum.",
            "Correta. Essa é a finalidade atual do AEE para estudantes com TEA.",
            "Incorreta. Comunicação, autonomia e acesso curricular também integram o trabalho articulado do AEE.",
            "Incorreta. Informações de saúde podem subsidiar, mas o AEE é pedagógico.",
            "Incorreta. O AEE não fica conceitualmente confinado a uma sala específica."
        ],
        "dicaBanca": "A FGV 2023 cobrou função do AEE para TEA e colocou como distrator a restrição à sala de recursos.",
        "pegadinha": "AEE = complementar e articulado, não “sala separada”.",
        "memorizar2026": "Para TEA, AEE complementa escolarização e remove barreiras.",
        "fonte": "Inep — AEE, atualização de 31/08/2026; FGV SEE-MG 2023, questão sobre função do AEE para TEA."
    },
    {
        "id": "SEDUC-EE-TEA-017",
        "numero": 17,
        "subtopico": "Estudo de caso — laudo não condicionante",
        "dificuldade": "alta",
        "pergunta": "Uma escola recebe um aluno com fortes barreiras de comunicação e participação compatíveis com TEA, mas a família ainda aguarda avaliação médica. Quanto ao planejamento do AEE, a conduta correta é",
        "alternativas": [
            "aguardar o laudo conclusivo antes de iniciar estudo de caso, pois o professor não pode registrar demandas educacionais sem diagnóstico formal. Enquanto isso, a escola poderia registrar apenas observações informais, sem elaborar PAEE ou PEI e sem modificar os apoios planejados para a turma.",
            "oferecer apenas adaptações informais na classe comum até que exista documento médico capaz de indicar oficialmente os recursos necessários.",
            "realizar estudo de caso pedagógico com participação da classe comum, AEE, família e estudante quando possível, identificando barreiras e apoios sem condicionar o acesso ao laudo.",
            "encaminhar automaticamente o estudante para turma especial enquanto o diagnóstico estiver indefinido, retomando a classe comum após confirmação clínica.",
            "considerar o relato familiar suficiente para definir um pacote permanente de apoios, dispensando observação sistemática e monitoramento no contexto escolar."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou a atualização normativa de 2025/2026: estudo de caso é pedagógico e o acesso ao AEE não pode ser condicionado a diagnóstico ou laudo de saúde.",
        "feedbackErro": "A escola pode começar a identificar barreiras, demandas e apoios pedagogicamente. O laudo pode subsidiar, mas não é porta obrigatória de entrada para o direito educacional.",
        "analiseAlternativas": [
            "Incorreta. A política atual veda condicionar AEE à apresentação de laudo.",
            "Incorreta. A escola pode organizar formalmente estudo de caso e planejamento pedagógico.",
            "Correta. Essa é a orientação do Decreto nº 12.686/2025, Portaria MEC nº 421/2026 e Inep.",
            "Incorreta. Indefinição diagnóstica não justifica segregação automática.",
            "Incorreta. Relato familiar é importante, mas deve compor avaliação colaborativa e contínua."
        ],
        "dicaBanca": "Atualização quente para 2026: FGV pode explorar a oposição “laudo clínico obrigatório” × “estudo de caso pedagógico”.",
        "pegadinha": "Laudo pode ajudar; laudo não pode bloquear o AEE.",
        "memorizar2026": "Estudo de caso primeiro: barreiras + potencialidades + contexto + apoios.",
        "fonte": "Decreto nº 12.686/2025, art. 11; Portaria MEC nº 421/2026, art. 7; Inep 2026.",
        "atualizacao2026": "O Inep atualizou suas orientações em 31/08/2026 reforçando que a gravidade clínica não é o foco da declaração educacional e que o AEE não depende de laudo médico."
    },
    {
        "id": "SEDUC-EE-TEA-018",
        "numero": 18,
        "subtopico": "Profissional de apoio — funções",
        "dificuldade": "alta",
        "pergunta": "Em relação ao profissional de apoio escolar de um estudante com TEA, assinale a opção mais adequada.",
        "alternativas": [
            "Deve elaborar e ministrar atividades curriculares próprias sempre que o estudante não acompanhar o ritmo da turma, assumindo responsabilidade pedagógica individual. Essa transferência ocorreria mesmo quando o estudante participasse de atividades coletivas, cabendo ao professor regente apenas acompanhar o resultado final.",
            "Deve permanecer ao lado do estudante durante todo o turno, ainda que a ajuda não seja necessária, para prevenir qualquer situação de dependência futura.",
            "É indicado para substituir a participação do estudante em atividades coletivas quando houver risco de sobrecarga sensorial ou dificuldade de comunicação.",
            "Sua atuação deve se limitar à higiene e alimentação, porque comunicação, interação e participação pertencem exclusivamente às atribuições docentes.",
            "Quando necessário, oferece apoio funcional à participação, comunicação, locomoção, alimentação, higiene e outros aspectos previstos no planejamento, sem substituir o professor."
        ],
        "correta": 4,
        "feedbackAcerto": "Você diferenciou apoio escolar de docência. O profissional pode apoiar funções necessárias à participação, mas não assume o currículo nem vira professor particular.",
        "feedbackErro": "Profissional de apoio não deve criar dependência, substituir o professor ou retirar o estudante das atividades por regra.",
        "analiseAlternativas": [
            "Incorreta. Planejamento e ensino curricular são responsabilidades docentes.",
            "Incorreta. Apoio deve ser proporcional à necessidade e favorecer autonomia.",
            "Incorreta. O objetivo é apoiar participação, não substituí-la por afastamento.",
            "Incorreta. A atuação pode abranger comunicação, interação e outros apoios funcionais previstos.",
            "Correta. Resume a função do apoio sem confundi-la com docência."
        ],
        "dicaBanca": "FGV usa muito o distrator “professor particular”. Pergunte se a alternativa transfere ao apoio a responsabilidade pelo ensino.",
        "pegadinha": "Apoiar ≠ ensinar no lugar do professor.",
        "memorizar2026": "Profissional de apoio: suporte funcional para participação e autonomia.",
        "fonte": "Decreto nº 8.368/2014, art. 4º, §2º; LBI; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-TEA-019",
        "numero": 19,
        "subtopico": "Família e corresponsabilidade",
        "dificuldade": "media",
        "pergunta": "No planejamento de estratégias para um estudante com TEA, a participação da família é mais coerente com a educação inclusiva quando",
        "alternativas": [
            "a escola escuta informações sobre comunicação, interesses, rotina e apoios que funcionam em outros contextos e compartilha decisões pedagógicas, preservando suas responsabilidades profissionais.",
            "a família define quais conteúdos curriculares podem ser trabalhados, já que conhece melhor o estudante e deve ter a decisão final sobre o planejamento pedagógico. Essa prerrogativa incluiria autorizar ou vetar adaptações, avaliações e estratégias de apoio em cada componente curricular ao longo do ano.",
            "o contato ocorre apenas em situações de crise, evitando interferência dos responsáveis nas estratégias adotadas pela equipe escolar.",
            "a escola solicita que a família reproduza em casa todas as intervenções utilizadas no AEE, independentemente de sua rotina e das prioridades familiares.",
            "a família é responsável por fornecer acompanhante particular quando o estudante necessita apoio individual durante atividades de comunicação e interação."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu a família como parceira e fonte importante de informação, sem transferir a ela a responsabilidade institucional da escola.",
        "feedbackErro": "Parceria não significa submissão da escola à família nem terceirização do apoio. O planejamento é colaborativo e profissional.",
        "analiseAlternativas": [
            "Correta. Escuta e troca de informações fortalecem continuidade e coerência dos apoios.",
            "Incorreta. A família participa, mas não substitui a responsabilidade pedagógica dos profissionais.",
            "Incorreta. Comunicação apenas em crises impede planejamento preventivo.",
            "Incorreta. Estratégias precisam ser contextualizadas, não simplesmente replicadas em casa.",
            "Incorreta. O direito ao apoio escolar não pode ser transferido como obrigação financeira da família."
        ],
        "dicaBanca": "FGV 2026 valoriza contexto, generalização e participação; família aparece como parceira, não como executora subordinada.",
        "pegadinha": "Parceria com família ≠ terceirizar obrigação escolar.",
        "memorizar2026": "Família informa e participa; escola mantém responsabilidade pedagógica.",
        "fonte": "Decreto nº 12.686/2025 — participação da família e gestão democrática; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-TEA-020",
        "numero": 20,
        "subtopico": "Inclusão na classe comum",
        "dificuldade": "alta",
        "pergunta": "Uma escola propõe que o estudante com TEA participe das aulas comuns apenas quando estiver “regulado” e realize, nos demais períodos, atividades individuais em sala separada. À luz da educação inclusiva, a proposta",
        "alternativas": [
            "é adequada, pois a participação na classe comum deve ocorrer somente quando o estudante consegue acompanhar a rotina sem adaptações relevantes.",
            "é adequada como medida preventiva, desde que a sala separada esteja equipada com recursos de Tecnologia Assistiva e supervisão do AEE. O atendimento fora da classe comum poderia permanecer como rotina durante o período em que a equipe considerasse o comportamento mais previsível nesse espaço.",
            "é compatível com a inclusão quando os conteúdos individuais forem equivalentes aos da turma, ainda que não haja convivência com os colegas.",
            "é inadequada, pois transforma uma necessidade de apoio em critério de retirada sistemática; a escola deve organizar barreiras, estratégias e suportes para ampliar participação na classe comum.",
            "é inadequada apenas se a família não autorizar, porque a escolha do local de escolarização diária depende prioritariamente da decisão dos responsáveis."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou segregação disfarçada de apoio. A resposta inclusiva procura tornar a classe comum acessível, usando retiradas específicas apenas quando pedagogicamente justificadas e não como padrão de exclusão.",
        "feedbackErro": "Recursos especializados não tornam automaticamente inclusivo um arranjo que afasta o estudante da participação comum como regra.",
        "analiseAlternativas": [
            "Incorreta. Inclusão exige transformação da prática, não adaptação prévia do aluno ao padrão.",
            "Incorreta. Equipamento não corrige, por si, segregação sistemática.",
            "Incorreta. Participação envolve também interação, pertencimento e experiências compartilhadas.",
            "Correta. Apoios devem ampliar presença, participação e aprendizagem na classe comum.",
            "Incorreta. A família participa, mas a escola não pode normalizar exclusão pedagógica."
        ],
        "dicaBanca": "FGV 2026 insiste que inclusão é reorganização da escola, não simples matrícula nem retirada quando surgem barreiras.",
        "pegadinha": "Sala separada com bons recursos ainda pode ser segregação.",
        "memorizar2026": "Classe comum + apoios necessários + participação real.",
        "fonte": "FGV SEDUC-SP 2026, questões 22 a 25; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-TEA-021",
        "numero": 21,
        "subtopico": "Aprendizagem significativa — FGV 2026",
        "dificuldade": "media",
        "pergunta": "Ao planejar atividades para um estudante com TEA, a professora quer favorecer desenvolvimento cognitivo e participação. A alternativa mais compatível com a cobrança recente da FGV é",
        "alternativas": [
            "propor tarefas extensas e repetitivas para desenvolver resistência à frustração e aumentar progressivamente o tempo de permanência na atividade. A extensão das tarefas seria aumentada gradualmente mesmo que o desempenho caísse, pois a meta principal seria elevar a tolerância ao tempo de trabalho.",
            "utilizar atividades com sentido para o estudante, oferecer retorno positivo sobre o desempenho e evitar tarefas excessivamente longas, ajustando apoios quando necessário.",
            "priorizar exercícios abstratos e descontextualizados para impedir que interesses pessoais interfiram na aprendizagem dos conteúdos escolares.",
            "manter atividades idênticas para todos, pois qualquer diferenciação metodológica pode reduzir a expectativa de aprendizagem do estudante com TEA.",
            "reduzir oportunidades de comunicação durante tarefas cognitivas, concentrando a intervenção na execução correta da resposta acadêmica esperada."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou praticamente o núcleo da questão 21 da FGV SEDUC-SP 2026: significado, retorno positivo, participação e adequação da extensão da tarefa.",
        "feedbackErro": "A FGV rejeitou tarefas longas por princípio, abstração descontextualizada, redução da comunicação e uniformidade sem considerar necessidades.",
        "analiseAlternativas": [
            "Incorreta. Extensão e repetição devem ter função pedagógica, não serem usadas como treino de resistência por regra.",
            "Correta. É a orientação compatível com a questão real da FGV 2026.",
            "Incorreta. Conexão com experiências e interesses pode favorecer significado e generalização.",
            "Incorreta. Equidade admite estratégias diferenciadas sem reduzir expectativas.",
            "Incorreta. Comunicação é parte da participação e da aprendizagem."
        ],
        "dicaBanca": "Questão de alta aderência: a FGV cobrou esse raciocínio de forma direta em 2026.",
        "pegadinha": "“Atividade igual para todos” pode parecer justa, mas pode manter barreiras.",
        "memorizar2026": "Sentido + feedback positivo + duração adequada + participação.",
        "fonte": "FGV SEDUC-SP 2026, questão 21."
    },
    {
        "id": "SEDUC-EE-TEA-022",
        "numero": 22,
        "subtopico": "Abordagem naturalista e generalização",
        "dificuldade": "alta",
        "pergunta": "Em uma proposta para ampliar comunicação funcional, a professora aproveita uma brincadeira escolhida pelo estudante, cria oportunidades naturais para pedir ajuda e fazer escolhas e reforça as iniciativas comunicativas no próprio contexto da atividade. Essa organização",
        "alternativas": [
            "é inadequada porque o ensino de comunicação deve ocorrer antes em ambiente totalmente controlado e só depois ser transferido para situações naturais. A transferência para situações reais só ocorreria após um critério rígido de domínio em sessões individuais, evitando respostas variáveis durante a aprendizagem.",
            "é adequada apenas quando o estudante já domina fala oral, pois a abordagem naturalista depende de respostas vocais espontâneas.",
            "aproxima-se de uma intervenção naturalista, por aproveitar motivação e contexto para ensinar comunicação funcional e favorecer generalização para a rotina.",
            "substitui o planejamento pedagógico por interesses espontâneos, impedindo a definição prévia de objetivos educacionais observáveis.",
            "deve restringir o reforço às respostas exatamente iguais ao modelo adulto, para evitar que formas aproximadas de comunicação sejam mantidas."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu a lógica naturalista cobrada pela FGV 2026: contexto motivador, interesses do estudante, comunicação funcional e generalização.",
        "feedbackErro": "Naturalista não significa improvisada. Há objetivos intencionais, mas eles são ensinados em situações significativas e funcionais.",
        "analiseAlternativas": [
            "Incorreta. A aprendizagem pode ocorrer diretamente em contextos naturais com mediação planejada.",
            "Incorreta. Comunicação funcional pode envolver fala, gestos, símbolos ou CAA.",
            "Correta. Corresponde ao princípio apresentado pela FGV na questão 18 de 2026.",
            "Incorreta. O professor pode ter objetivos claros e aproveitar interesses e rotinas para ensiná-los.",
            "Incorreta. Aproximações comunicativas funcionais podem ser reforçadas e refinadas progressivamente."
        ],
        "dicaBanca": "FGV SEDUC-SP 2026 cobrou explicitamente abordagem naturalista vinculada à comunicação de crianças com TEA.",
        "pegadinha": "Naturalista ≠ sem planejamento.",
        "memorizar2026": "Contexto natural + motivação + comunicação funcional + generalização.",
        "fonte": "FGV SEDUC-SP 2026, questão 18."
    },
    {
        "id": "SEDUC-EE-TEA-023",
        "numero": 23,
        "subtopico": "TGD — prova antiga FGV x atualização",
        "dificuldade": "alta",
        "pergunta": "Ao revisar uma prova antiga da FGV para “Transtornos Globais do Desenvolvimento”, um candidato encontra questões sobre programas específicos, como TEACCH e comunicação total. Para a prova atual, a melhor estratégia de estudo é",
        "alternativas": [
            "memorizar os métodos antigos como protocolos obrigatórios, pois a FGV tende a considerar uma única abordagem adequada para todos os estudantes com TEA. A repetição fiel desses protocolos seria recomendada mesmo quando a legislação atual priorizasse estudo de caso, barreiras e apoios individualizados.",
            "descartar completamente essas provas, já que qualquer questão anterior à terminologia TEA perdeu valor para compreender o estilo e os distratores da banca.",
            "usar as provas antigas para reconhecer vocabulário e formas de cobrança, mas atualizar a resposta à legislação, às evidências e à perspectiva inclusiva vigente quando houver mudança conceitual ou normativa.",
            "considerar corretas apenas as alternativas que mencionam métodos estruturados, porque a organização visual é atualmente requisito legal do AEE para todo estudante com TEA.",
            "substituir o estudo da legislação por técnicas de intervenção, pois a FGV historicamente prioriza métodos específicos em detrimento dos direitos educacionais."
        ],
        "correta": 2,
        "feedbackAcerto": "Você adotou a estratégia correta: prova antiga é excelente para entender a FGV, mas não deve congelar o conteúdo em conceitos e normas ultrapassados.",
        "feedbackErro": "As questões antigas têm valor de estilo e histórico, porém a resposta de 2026 precisa respeitar a legislação e a compreensão educacional vigente.",
        "analiseAlternativas": [
            "Incorreta. Nenhum método é protocolo obrigatório universal para todo TEA.",
            "Incorreta. Provas antigas continuam úteis para estilo, temas recorrentes e evolução conceitual.",
            "Correta. É preciso separar padrão de banca de atualização normativa e científica.",
            "Incorreta. Organização visual pode ser útil, mas não é requisito universal definido dessa forma.",
            "Incorreta. A FGV cobra também direitos, inclusão, AEE, barreiras e legislação."
        ],
        "dicaBanca": "Para o Farol, usamos FGV 2013 como histórico e FGV 2023/2026 como referência principal para o conteúdo atual.",
        "pegadinha": "Prova antiga serve para o estilo; norma antiga não vira resposta atual automaticamente.",
        "memorizar2026": "FGV histórica + atualização normativa = preparação segura.",
        "fonte": "FGV SEDUC-AM/SEE 2013 — TGD; FGV SEE-MG 2023; FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-TEA-024",
        "numero": 24,
        "subtopico": "V/F — síntese do TEA na escola",
        "dificuldade": "alta",
        "pergunta": "Sobre escolarização de estudantes com TEA, assinale a sequência correta.",
        "alternativas": [
            "V – V – F – V.",
            "F – V – V – F.",
            "V – F – V – F.",
            "V – V – V – F.",
            "F – F – V – V."
        ],
        "correta": 3,
        "feedbackAcerto": "Você acertou a síntese: TEA integra o público da Educação Especial, apoio não define potencial, CAA pode atravessar contextos e o AEE não substitui escolarização.",
        "feedbackErro": "A quarta afirmativa é falsa porque o AEE é complementar; as três primeiras são compatíveis com a perspectiva atual.",
        "analiseAlternativas": [
            "Incorreta. A quarta afirmativa não é verdadeira.",
            "Incorreta. A primeira é verdadeira e a quarta é falsa.",
            "Incorreta. A segunda também é verdadeira.",
            "Correta. As três primeiras são verdadeiras e a quarta é falsa.",
            "Incorreta. A primeira e a segunda não são falsas."
        ],
        "dicaBanca": "A FGV SEDUC-SP 2026 abriu o bloco de TEA com V/F e usou absolutos sutis para tornar itens falsos.",
        "pegadinha": "Procure o item que transforma apoio em limitação permanente ou AEE em substituição.",
        "memorizar2026": "TEA: direito + apoio individualizado + comunicação funcional + classe comum.",
        "fonte": "FGV SEDUC-SP 2026, questões 16 a 21; Decreto nº 12.686/2025; Lei nº 12.764/2012.",
        "afirmacoes": [
            "I. O estudante com TEA integra o público da Educação Especial e é considerado pessoa com deficiência para fins legais.",
            "II. Níveis de suporte podem orientar a compreensão de necessidades, mas não definem de forma permanente o potencial acadêmico.",
            "III. Sistemas de CAA, quando necessários, devem ser integrados aos diferentes contextos de participação e comunicação.",
            "IV. O AEE pode substituir parte da escolarização na classe comum quando o estudante apresenta necessidade elevada de suporte."
        ]
    },
    {
        "id": "SEDUC-EE-TEA-025",
        "numero": 25,
        "subtopico": "Caso integrador — decisão pedagógica",
        "dificuldade": "alta",
        "pergunta": "Uma escola recebe estudante com TEA que utiliza poucas palavras, apresenta forte interesse por astronomia e demonstra desconforto em atividades muito ruidosas. Há progresso salvo de aprendizagem quando recebe instruções visuais e tempo para antecipar mudanças. A decisão pedagógica mais consistente é",
        "alternativas": [
            "realizar estudo de caso, organizar apoios visuais e comunicacionais, ajustar barreiras sensoriais, aproveitar interesses como mediação e acompanhar a participação no currículo comum em articulação com AEE, família e estudante.",
            "definir currículo reduzido e estável com base no nível de suporte, concentrando as atividades nos temas de maior interesse para assegurar adesão e evitar sobrecarga.",
            "manter a rotina e a metodologia da turma sem alterações, oferecendo apenas acompanhante permanente para ajudar o estudante a cumprir as mesmas instruções. O acompanhante passaria a funcionar como mediador exclusivo das instruções, permitindo que o professor regente preservasse o mesmo planejamento para a turma.",
            "priorizar atendimento individual no AEE até que a comunicação oral e a tolerância aos estímulos estejam suficientemente desenvolvidas para retorno integral à classe comum.",
            "aguardar avaliação clínica atualizada para decidir sobre CAA, adaptações sensoriais e PEI, evitando que a escola estabeleça apoios antes de confirmação diagnóstica detalhada."
        ],
        "correta": 0,
        "feedbackAcerto": "Você integrou os principais eixos do bloco: estudo de caso, barreiras, comunicação, sensorialidade, interesses, currículo comum, AEE articulado e participação do estudante e da família.",
        "feedbackErro": "A resposta inclusiva não congela currículo pelo nível de suporte, não mantém barreiras por uniformidade, não condiciona participação ao AEE e não espera laudo para começar o planejamento pedagógico.",
        "analiseAlternativas": [
            "Correta. Combina avaliação contextual, apoios funcionais, participação e articulação pedagógica.",
            "Incorreta. Nível de suporte não autoriza currículo reduzido e interesse não deve limitar o percurso.",
            "Incorreta. Apoio humano não substitui adequação de instruções, ambiente e estratégias.",
            "Incorreta. AEE complementa e deve favorecer participação na classe comum.",
            "Incorreta. O planejamento pedagógico e o AEE não podem ficar bloqueados pela espera de laudo."
        ],
        "dicaBanca": "Questão-síntese no padrão FGV: a correta costuma ser a que articula várias medidas coerentes sem absolutizar nenhuma delas.",
        "pegadinha": "Não procure “a técnica do autismo”; procure barreira, função, apoio e participação.",
        "memorizar2026": "Estudo de caso → apoios → classe comum → AEE articulado → monitorar e replanejar.",
        "fonte": "FGV SEDUC-SP 2026, questões 16 a 27; Decreto nº 12.686/2025; Portaria MEC nº 421/2026; Lei nº 12.764/2012."
    }
];

    window.seducEducacaoEspecialTgdTea2026 = banco;
})();
