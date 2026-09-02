/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 1: Fundamentos da Educação Especial
   30 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 01/09/2026.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-FUND-001",
        "numero": 1,
        "subtopico": "Integração e inclusão",
        "dificuldade": "alta",
        "pergunta": "Em uma escola pública, a equipe pedagógica afirma que um estudante com deficiência intelectual poderá permanecer na classe comum desde que consiga acompanhar, sem modificações relevantes, a metodologia e o ritmo estabelecidos para os demais alunos. A concepção apresentada aproxima-se do paradigma da",
        "alternativas": [
            "inclusão, pois garante acesso à classe comum.",
            "equidade, pois preserva os mesmos objetivos para todos.",
            "integração, pois condiciona a participação à adaptação do estudante.",
            "acessibilidade, pois elimina diferenciações curriculares.",
            "educação inclusiva, pois mantém o estudante no ambiente regular."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou o ponto central da integração: o estudante pode estar na escola comum, mas a estrutura escolar permanece praticamente inalterada e a adaptação é exigida principalmente dele. Na inclusão, a lógica se inverte: a escola organiza apoios, recursos e práticas para remover barreiras à participação e à aprendizagem.",
        "feedbackErro": "A resposta correta é integração. O enunciado condiciona a permanência do aluno à sua capacidade de acompanhar o padrão já existente, sem transformação relevante da escola. Presença física em classe comum, por si só, não caracteriza inclusão.",
        "analiseAlternativas": [
            "Incorreta. A matrícula ou presença na classe comum não basta para caracterizar inclusão quando a escola não se reorganiza para remover barreiras.",
            "Incorreta. Equidade não significa exigir o mesmo modo de participação de todos; ela admite apoios diferenciados para garantir oportunidades reais.",
            "Correta. A integração historicamente insere o aluno no espaço comum, mas mantém sobre ele o ônus principal de adaptação ao funcionamento escolar.",
            "Incorreta. Acessibilidade pressupõe eliminar barreiras e oferecer condições de participação, o que não ocorre no caso descrito.",
            "Incorreta. Educação inclusiva exige transformação das práticas e do ambiente escolar, e não simples permanência física do estudante."
        ],
        "dicaBanca": "Na FGV, pergunte sempre: quem precisa se adaptar? Se a resposta for principalmente o aluno, a situação tende a representar integração; se a escola reorganiza práticas e apoios, aproxima-se da inclusão.",
        "pegadinha": "Matrícula em classe comum não é sinônimo automático de inclusão.",
        "memorizar2026": "Integração: aluno se adapta à escola. Inclusão: escola se transforma para garantir participação e aprendizagem.",
        "fonte": "Fundamentos da Educação Especial Inclusiva; Decreto nº 12.686/2025, com redação do Decreto nº 12.773/2025."
    },
    {
        "id": "SEDUC-EE-FUND-002",
        "numero": 2,
        "subtopico": "Modelos de deficiência",
        "dificuldade": "media",
        "pergunta": "A perspectiva contemporânea da deficiência considera que as limitações experimentadas pela pessoa não decorrem exclusivamente de suas características individuais, mas também da interação dessas características com barreiras existentes no ambiente. Essa compreensão corresponde predominantemente ao",
        "alternativas": [
            "modelo assistencialista.",
            "modelo social da deficiência.",
            "paradigma da normalização.",
            "modelo clínico-terapêutico.",
            "modelo segregacionista."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu corretamente o modelo social. Ele desloca o foco exclusivo do déficit individual para a interação entre impedimentos e barreiras sociais, ambientais, comunicacionais, pedagógicas e atitudinais, enfatizando direitos, acessibilidade e participação.",
        "feedbackErro": "A descrição corresponde ao modelo social da deficiência. O modelo médico ou clínico concentra a explicação no indivíduo; o modelo social evidencia que a restrição de participação também é produzida pelas barreiras do meio.",
        "analiseAlternativas": [
            "Incorreta. O assistencialismo tende a tratar a pessoa como objeto de cuidado, e não a analisar criticamente as barreiras produzidas pelo ambiente.",
            "Correta. O modelo social compreende a deficiência na interação entre impedimentos e barreiras e orienta a eliminação dessas barreiras.",
            "Incorreta. A normalização procura aproximar a pessoa de um padrão considerado normal, em vez de transformar o contexto social.",
            "Incorreta. O modelo clínico-terapêutico privilegia diagnóstico, tratamento e reabilitação do indivíduo.",
            "Incorreta. Segregação descreve separação institucional ou social; não é o modelo explicativo apresentado no enunciado."
        ],
        "dicaBanca": "Quando a questão mencionar barreiras, participação, direitos e transformação do ambiente, pense primeiro no modelo social.",
        "pegadinha": "A FGV pode misturar linguagem de reabilitação com direitos humanos. Identifique onde está localizado o problema: no indivíduo ou na relação com as barreiras.",
        "memorizar2026": "Modelo médico = déficit individual. Modelo social = impedimentos + barreiras do meio.",
        "fonte": "Convenção sobre os Direitos das Pessoas com Deficiência; Lei nº 13.146/2015."
    },
    {
        "id": "SEDUC-EE-FUND-003",
        "numero": 3,
        "subtopico": "Barreiras e acessibilidade",
        "dificuldade": "alta",
        "pergunta": "Uma professora afirma: ‘Meu aluno utiliza cadeira de rodas. Como não consegue acessar o laboratório localizado no segundo andar, sua deficiência impede sua participação nas aulas práticas.’ Considerando o modelo social da deficiência, a interpretação mais adequada é que",
        "alternativas": [
            "o estudante deve realizar atividades alternativas fora do laboratório, pois a limitação funcional determina o percurso escolar.",
            "a participação depende prioritariamente de reabilitação clínica antes de qualquer mudança no ambiente.",
            "a transferência para instituição especializada elimina a barreira existente e garante igualdade.",
            "a ausência de acessibilidade no ambiente participa da produção da restrição à participação do estudante.",
            "a limitação funcional do estudante constitui, isoladamente, a causa suficiente de sua exclusão das aulas práticas."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou corretamente o modelo social: a restrição não é explicada apenas pela condição corporal do estudante. A falta de rota acessível ao laboratório é uma barreira ambiental concreta e a escola deve atuar para eliminá-la ou oferecer solução equivalente que preserve participação e aprendizagem.",
        "feedbackErro": "A alternativa correta destaca a barreira do ambiente. O modelo social não nega a existência de impedimentos, mas rejeita tratá-los como causa única da exclusão. A inacessibilidade arquitetônica é parte do problema educacional.",
        "analiseAlternativas": [
            "Incorreta. Criar atividade paralela como primeira resposta pode manter a barreira e afastar o aluno da experiência comum.",
            "Incorreta. Reabilitação clínica não substitui o dever de acessibilidade do ambiente educacional.",
            "Incorreta. Separar o estudante não elimina a barreira da escola comum e contraria a lógica inclusiva.",
            "Correta. A barreira arquitetônica interage com o impedimento e restringe a participação; por isso deve ser enfrentada pelo sistema educacional.",
            "Incorreta. A condição individual não é causa isolada suficiente; a estrutura inacessível do ambiente também produz a restrição."
        ],
        "dicaBanca": "Em casos práticos, procure no enunciado a barreira concreta: escada, comunicação, material, atitude, metodologia ou tecnologia.",
        "pegadinha": "A banca costuma oferecer soluções que retiram o aluno da atividade em vez de remover a barreira.",
        "memorizar2026": "Acessibilidade é condição para acesso, participação, permanência e aprendizagem com autonomia e segurança.",
        "fonte": "Lei nº 13.146/2015; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-FUND-004",
        "numero": 4,
        "subtopico": "Integração e inclusão",
        "dificuldade": "media",
        "afirmacoes": [
            "I. Na integração, espera-se frequentemente que o aluno se ajuste às estruturas escolares existentes.",
            "II. Na inclusão, cabe à escola organizar condições que favoreçam acesso, participação, permanência e aprendizagem.",
            "III. Integração e inclusão representam conceitos equivalentes, diferenciando-se apenas historicamente."
        ],
        "pergunta": "Está correto o que se afirma em",
        "alternativas": [
            "I e II, apenas.",
            "I, apenas.",
            "II, apenas.",
            "II e III, apenas.",
            "I, II e III."
        ],
        "correta": 0,
        "feedbackAcerto": "Você diferenciou corretamente os paradigmas. As afirmações I e II expressam a oposição central entre integração e inclusão; a III é falsa porque os dois conceitos não são equivalentes e implicam responsabilidades educacionais diferentes.",
        "feedbackErro": "A combinação correta é I e II, apenas. Integração e inclusão não são simples nomes de épocas distintas: a primeira tende a exigir adaptação do estudante; a segunda exige reorganização do sistema para garantir direitos e participação.",
        "analiseAlternativas": [
            "Correta. I e II estão corretas, e III está errada porque integração e inclusão não são conceitos equivalentes.",
            "Incorreta. A afirmação II também está correta, pois a inclusão exige organização da escola para remover barreiras.",
            "Incorreta. A afirmação I também está correta ao descrever a lógica integracionista.",
            "Incorreta. A afirmação III torna a combinação errada, pois integração e inclusão possuem fundamentos distintos.",
            "Incorreta. A afirmação III é falsa; portanto, não se pode considerar as três corretas."
        ],
        "dicaBanca": "Em itens I/II/III, julgue cada afirmação separadamente antes de olhar as combinações.",
        "pegadinha": "A palavra ‘equivalentes’ costuma ser decisiva: integração e inclusão não são sinônimos.",
        "memorizar2026": "Inclusão não é uma integração aperfeiçoada; muda o foco da adaptação do aluno para a transformação do sistema.",
        "fonte": "Fundamentos da Educação Especial Inclusiva."
    },
    {
        "id": "SEDUC-EE-FUND-005",
        "numero": 5,
        "subtopico": "Princípios inclusivos",
        "dificuldade": "media",
        "pergunta": "As opções a seguir apresentam princípios compatíveis com a atual perspectiva da Educação Especial Inclusiva, à exceção de uma. Assinale-a.",
        "alternativas": [
            "valorização da diversidade humana.",
            "promoção da equidade.",
            "combate ao capacitismo.",
            "participação dos estudantes.",
            "homogeneização das formas de aprendizagem."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou a exceção. A perspectiva inclusiva reconhece a diversidade humana e busca equidade, acessibilidade, participação e enfrentamento ao capacitismo. Homogeneizar formas de aprender contradiz essa orientação.",
        "feedbackErro": "A alternativa incompatível é a homogeneização. Inclusão não significa fazer todos aprenderem do mesmo modo, mas garantir condições, apoios e estratégias que permitam a participação e a aprendizagem de pessoas diferentes.",
        "analiseAlternativas": [
            "Incorreta como resposta à exceção. Valorizar a diversidade é compatível com a educação inclusiva.",
            "Incorreta como resposta à exceção. A promoção da equidade é princípio expresso da PNEEI.",
            "Incorreta como resposta à exceção. O combate ao capacitismo integra os princípios atuais da política.",
            "Incorreta como resposta à exceção. A participação é elemento central de uma escola inclusiva.",
            "Correta. Homogeneização nega a diversidade de modos, ritmos e necessidades de aprendizagem."
        ],
        "dicaBanca": "Em comandos com ‘à exceção’, marque mentalmente quatro compatíveis e procure o item que rompe a lógica inclusiva.",
        "pegadinha": "Padronização pode parecer igualdade, mas frequentemente produz exclusão quando ignora necessidades distintas.",
        "memorizar2026": "Diversidade é valor; equidade ajusta condições; inclusão combate barreiras e capacitismo.",
        "atualizacao2026": "O Decreto nº 12.686/2025 inclui expressamente equidade, diversidade humana, acessibilidade e combate ao capacitismo entre os princípios da política.",
        "fonte": "Decreto nº 12.686/2025, art. 2º, com redação vigente."
    },
    {
        "id": "SEDUC-EE-FUND-006",
        "numero": 6,
        "subtopico": "Igualdade e equidade",
        "dificuldade": "alta",
        "pergunta": "Uma escola decidiu aplicar exatamente os mesmos recursos, materiais, tempo e estratégias a todos os alunos, argumentando que qualquer diferenciação violaria o princípio da igualdade. À luz da educação inclusiva, essa decisão",
        "alternativas": [
            "está correta, porque igualdade exige tratamento pedagógico idêntico em todas as circunstâncias.",
            "está correta desde que todos realizem a mesma avaliação final.",
            "está equivocada, porque a equidade admite apoios e condições diferenciados para assegurar oportunidades reais de participação e aprendizagem.",
            "está equivocada apenas quando o estudante apresenta deficiência física.",
            "está correta se a uniformidade estiver prevista no projeto político-pedagógico."
        ],
        "correta": 2,
        "feedbackAcerto": "Você distinguiu igualdade formal de equidade. A equidade permite medidas e apoios diferenciados quando necessários para que todos tenham condições efetivas de acesso, participação e aprendizagem.",
        "feedbackErro": "A resposta correta é a que reconhece a equidade. Tratar todos de modo idêntico pode manter desigualdades quando as barreiras e necessidades são diferentes. A inclusão busca condições justas, não uniformidade rígida.",
        "analiseAlternativas": [
            "Incorreta. Igualdade de direitos não obriga a adoção dos mesmos recursos para todos; adaptações podem ser necessárias.",
            "Incorreta. A mesma avaliação para todos não resolve barreiras de acesso, comunicação ou metodologia.",
            "Correta. Equidade significa oferecer condições adequadas às necessidades para produzir oportunidades reais.",
            "Incorreta. A equidade não se restringe à deficiência física; pode envolver diferentes barreiras e necessidades educacionais.",
            "Incorreta. O PPP não pode legitimar prática que contrarie direitos de acessibilidade e inclusão."
        ],
        "dicaBanca": "Se a alternativa disser ‘mesmo tratamento para todos’ como solução automática, confronte-a com o conceito de equidade.",
        "pegadinha": "Igualdade não significa uniformidade pedagógica.",
        "memorizar2026": "Equidade = oferecer o que cada estudante necessita para acessar as mesmas oportunidades de participação e aprendizagem.",
        "fonte": "Decreto nº 12.686/2025; Lei nº 13.146/2015."
    },
    {
        "id": "SEDUC-EE-FUND-007",
        "numero": 7,
        "subtopico": "Público da Educação Especial",
        "dificuldade": "media",
        "pergunta": "De acordo com a Política Nacional de Educação Especial Inclusiva vigente, integra o público da Educação Especial o estudante",
        "alternativas": [
            "com qualquer dificuldade escolar temporária, ainda que sem deficiência, autismo ou altas habilidades.",
            "com deficiência, com transtorno do espectro autista ou com altas habilidades ou superdotação.",
            "com TDAH, independentemente de qualquer outra condição e de forma automática.",
            "com baixo desempenho acadêmico persistente, independentemente de avaliação pedagógica.",
            "com qualquer transtorno específico de aprendizagem, por força exclusiva do Decreto nº 12.686/2025."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente o público definido pela PNEEI vigente: estudantes com deficiência, estudantes com transtorno do espectro autista e estudantes com altas habilidades ou superdotação.",
        "feedbackErro": "A política vigente delimita o público da Educação Especial nesses três grupos. Dificuldade escolar, TDAH ou transtorno específico de aprendizagem, isoladamente, não são incluídos automaticamente nesse público pelo Decreto nº 12.686/2025.",
        "analiseAlternativas": [
            "Incorreta. Dificuldade escolar temporária não define, por si só, pertencimento ao público da Educação Especial.",
            "Correta. É a formulação atual da PNEEI para o público da modalidade.",
            "Incorreta. TDAH isoladamente não aparece como categoria autônoma do público definido pelo decreto.",
            "Incorreta. Baixo desempenho não equivale automaticamente a deficiência, TEA ou altas habilidades/superdotação.",
            "Incorreta. O decreto não inclui todo transtorno específico de aprendizagem como categoria automática do público da Educação Especial."
        ],
        "dicaBanca": "Memorize o trio atual da PNEEI: deficiência + TEA + altas habilidades/superdotação.",
        "pegadinha": "A banca pode misturar condições que demandam apoio pedagógico com as categorias legais do público da Educação Especial.",
        "memorizar2026": "PNEEI vigente: deficiência, TEA e altas habilidades/superdotação.",
        "atualizacao2026": "Terminologia atual do Decreto nº 12.686/2025, já considerado o Decreto nº 12.773/2025.",
        "fonte": "Decreto nº 12.686/2025, art. 1º."
    },
    {
        "id": "SEDUC-EE-FUND-008",
        "numero": 8,
        "subtopico": "Terminologia normativa",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. A redação do art. 58 da LDB utiliza a expressão ‘transtornos globais do desenvolvimento’.",
            "II. A PNEEI instituída pelo Decreto nº 12.686/2025 utiliza a referência a estudantes com transtorno do espectro autista.",
            "III. A diferença terminológica significa que o decreto revogou automaticamente a LDB."
        ],
        "pergunta": "Está correto o que se afirma em",
        "alternativas": [
            "I, apenas.",
            "II e III, apenas.",
            "III, apenas.",
            "I e II, apenas.",
            "I, II e III."
        ],
        "correta": 3,
        "feedbackAcerto": "Você percebeu uma diferença normativa importante. A LDB mantém a expressão ‘transtornos globais do desenvolvimento’, enquanto a PNEEI vigente utiliza ‘transtorno do espectro autista’. Essa diferença de terminologia não implica revogação automática da LDB.",
        "feedbackErro": "A resposta correta é I e II, apenas. Em prova, a banca pode cobrar a literalidade de normas distintas. É preciso reconhecer qual terminologia pertence a cada texto legal sem concluir que um decreto revogou uma lei.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa II também é verdadeira.",
            "Incorreta. A afirmativa III é falsa: decreto não revoga automaticamente dispositivo de lei apenas por usar terminologia diferente.",
            "Incorreta. A afirmativa III está errada e I e II estão corretas.",
            "Correta. I corresponde à literalidade da LDB e II à terminologia da PNEEI vigente; III é falsa.",
            "Incorreta. A afirmativa III invalida a combinação."
        ],
        "dicaBanca": "Quando a FGV citar uma norma específica, responda pela literalidade daquela norma, não pela terminologia de outro diploma.",
        "pegadinha": "‘TGD’ na LDB e ‘TEA’ na PNEEI podem aparecer lado a lado na mesma questão.",
        "memorizar2026": "LDB art. 58: TGD. PNEEI 2025/2026: TEA.",
        "atualizacao2026": "A diferença de terminologia deve ser estudada como possível cobrança de literalidade normativa.",
        "fonte": "Lei nº 9.394/1996, art. 58; Decreto nº 12.686/2025, art. 1º."
    },
    {
        "id": "SEDUC-EE-FUND-009",
        "numero": 9,
        "subtopico": "Transversalidade",
        "dificuldade": "media",
        "pergunta": "A Educação Especial, segundo a política nacional vigente, caracteriza-se como modalidade",
        "alternativas": [
            "transversal a todos os níveis, etapas e modalidades de ensino.",
            "restrita à Educação Básica obrigatória.",
            "substitutiva da escolarização comum quando houver deficiência severa.",
            "destinada exclusivamente a instituições especializadas.",
            "complementar apenas no Ensino Fundamental e suplementar no Ensino Médio."
        ],
        "correta": 0,
        "feedbackAcerto": "Você acertou a característica estrutural da modalidade: a Educação Especial é transversal, alcançando níveis, etapas e modalidades, com recursos e serviços de apoio ao processo de escolarização.",
        "feedbackErro": "A resposta correta é a transversalidade. A Educação Especial não se limita a uma etapa nem substitui automaticamente a escolarização comum; sua oferta deve atravessar o sistema educacional.",
        "analiseAlternativas": [
            "Correta. A transversalidade está expressamente prevista na política vigente.",
            "Incorreta. A modalidade não se restringe à Educação Básica obrigatória.",
            "Incorreta. A política não define a Educação Especial como substitutiva da escolarização comum.",
            "Incorreta. A oferta não é exclusiva de instituições especializadas.",
            "Incorreta. A distinção complementar/suplementar refere-se ao AEE conforme o público, não a etapas escolares desse modo."
        ],
        "dicaBanca": "‘Transversal’ é palavra-chave recorrente. Se a alternativa restringir a modalidade a uma etapa, desconfie.",
        "pegadinha": "Não confunda modalidade transversal com serviço exclusivo de sala de recursos.",
        "memorizar2026": "Educação Especial = modalidade transversal em todos os níveis, etapas e modalidades.",
        "atualizacao2026": "A Portaria MEC nº 421/2026 reafirma a transversalidade da Educação Especial Inclusiva.",
        "fonte": "Decreto nº 12.686/2025, art. 1º, §1º; Portaria MEC nº 421/2026."
    },
    {
        "id": "SEDUC-EE-FUND-010",
        "numero": 10,
        "subtopico": "Práticas inclusivas",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. Garantir participação do estudante nas atividades da turma comum.",
            "II. Identificar e eliminar barreiras pedagógicas e comunicacionais.",
            "III. Reduzir previamente os objetivos de aprendizagem apenas em razão do diagnóstico de deficiência.",
            "IV. Oferecer recursos de acessibilidade conforme as necessidades identificadas."
        ],
        "pergunta": "São compatíveis com a perspectiva inclusiva",
        "alternativas": [
            "I e III, apenas.",
            "II e III, apenas.",
            "III e IV, apenas.",
            "I, II e III, apenas.",
            "I, II e IV, apenas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você separou apoio inclusivo de redução automática de expectativas. Participação, eliminação de barreiras e recursos de acessibilidade são compatíveis com a inclusão; reduzir previamente objetivos apenas por causa de um diagnóstico é uma generalização inadequada.",
        "feedbackErro": "A combinação correta é I, II e IV. O diagnóstico não autoriza, por si só, empobrecimento curricular ou redução automática das expectativas de aprendizagem.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa III é inadequada e II também deveria estar incluída.",
            "Incorreta. III é inadequada e I também é compatível com a inclusão.",
            "Incorreta. III está errada; participação e eliminação de barreiras também são essenciais.",
            "Incorreta. A presença da afirmativa III torna a combinação errada.",
            "Correta. I, II e IV promovem acesso e participação sem presumir incapacidade a partir do diagnóstico."
        ],
        "dicaBanca": "A FGV costuma transformar uma ação aparentemente ‘protetiva’ em distrator quando ela reduz expectativas de forma automática.",
        "pegadinha": "Adaptação não significa simplificação obrigatória nem currículo empobrecido.",
        "memorizar2026": "Primeiro elimine barreiras e ofereça apoios; não presuma incapacidade pelo diagnóstico.",
        "fonte": "Lei nº 13.146/2015; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-FUND-011",
        "numero": 11,
        "subtopico": "Capacitismo",
        "dificuldade": "media",
        "pergunta": "No contexto educacional, o capacitismo manifesta-se quando",
        "alternativas": [
            "a escola oferece tecnologia assistiva ao estudante que dela necessita.",
            "o planejamento considera diferentes formas de participação e comunicação.",
            "capacidades e possibilidades de uma pessoa são inferiorizadas ou desconsideradas em razão da deficiência.",
            "a escola elimina barreiras arquitetônicas e atitudinais.",
            "o currículo é flexibilizado para assegurar acesso e aprendizagem."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou o capacitismo como discriminação baseada em concepções de inferioridade associadas à deficiência. No ambiente escolar, ele aparece em baixas expectativas, exclusões, infantilização e decisões tomadas com base em estereótipos sobre capacidade.",
        "feedbackErro": "A alternativa correta descreve a lógica capacitista. Recursos de acessibilidade e flexibilizações para eliminar barreiras são medidas inclusivas, não manifestações de capacitismo.",
        "analiseAlternativas": [
            "Incorreta. Tecnologia assistiva pode ampliar autonomia e participação.",
            "Incorreta. Considerar diferentes formas de participação é uma prática inclusiva.",
            "Correta. Inferiorizar capacidades por causa da deficiência expressa preconceito capacitista.",
            "Incorreta. Eliminar barreiras combate exclusão e capacitismo.",
            "Incorreta. Flexibilização orientada à acessibilidade pode promover o direito de aprender."
        ],
        "dicaBanca": "Capacitismo costuma aparecer disfarçado de ‘proteção’, ‘realismo’ ou baixa expectativa. Observe se a pessoa é reduzida ao diagnóstico.",
        "pegadinha": "Não confunda apoio individualizado com tratamento inferiorizante.",
        "memorizar2026": "Capacitismo = preconceito/discriminação que toma a deficiência como sinal de inferioridade ou incapacidade.",
        "atualizacao2026": "O combate ao capacitismo está expresso entre os princípios da PNEEI vigente.",
        "fonte": "Decreto nº 12.686/2025, art. 2º."
    },
    {
        "id": "SEDUC-EE-FUND-012",
        "numero": 12,
        "subtopico": "AEE",
        "dificuldade": "alta",
        "pergunta": "Em relação ao Atendimento Educacional Especializado (AEE), assinale a afirmativa correta.",
        "alternativas": [
            "Substitui a frequência à classe comum quando o estudante apresenta necessidade intensa de apoio.",
            "É atividade pedagógica de caráter complementar à escolarização de pessoas com deficiência e TEA e suplementar à escolarização de pessoas com altas habilidades ou superdotação.",
            "É serviço de natureza prioritariamente clínica e reabilitadora.",
            "Destina-se automaticamente a todo estudante com baixo rendimento escolar.",
            "Sua oferta depende de diagnóstico médico que confirme a condição do estudante."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu a definição vigente do AEE. O atendimento é pedagógico: complementar para pessoas com deficiência e TEA e suplementar para pessoas com altas habilidades ou superdotação. Ele não substitui a matrícula e a frequência na classe comum.",
        "feedbackErro": "A resposta correta é a alternativa que diferencia caráter complementar e suplementar conforme o público. O AEE não é terapia, não é reforço genérico e não depende de laudo médico para ser ofertado.",
        "analiseAlternativas": [
            "Incorreta. O AEE não pode substituir a matrícula e a frequência na classe comum.",
            "Correta. Reproduz a definição atual do art. 5º do Decreto nº 12.686/2025.",
            "Incorreta. O AEE é atividade pedagógica, não serviço clínico-reabilitador.",
            "Incorreta. Baixo rendimento isolado não define automaticamente o público do AEE.",
            "Incorreta. A oferta do AEE não pode ser condicionada a diagnóstico, laudo ou relatório de profissional de saúde."
        ],
        "dicaBanca": "Memorize a dupla: deficiência/TEA = complementar; altas habilidades/superdotação = suplementar.",
        "pegadinha": "‘AEE substitutivo’ é formulação incompatível com a regra vigente.",
        "memorizar2026": "AEE complementa ou suplementa; nunca substitui a escolarização na classe comum.",
        "atualizacao2026": "Definição consolidada no Decreto nº 12.686/2025 e reafirmada na implementação da PNEEI.",
        "fonte": "Decreto nº 12.686/2025, arts. 5º e 8º."
    },
    {
        "id": "SEDUC-EE-FUND-013",
        "numero": 13,
        "subtopico": "AEE e laudo médico",
        "dificuldade": "alta",
        "pergunta": "Uma família procura a escola para solicitar AEE. A direção informa que o atendimento só poderá começar após a apresentação de laudo médico. Segundo a regulamentação vigente, essa conduta é",
        "alternativas": [
            "correta, pois o diagnóstico é requisito legal para o AEE.",
            "correta apenas quando se tratar de estudante com TEA.",
            "correta se a exigência constar do regimento escolar.",
            "incorreta, pois a garantia da oferta do AEE não pode ser condicionada a diagnóstico, laudo, relatório ou outro documento emitido por profissional de saúde.",
            "incorreta apenas para estudantes com altas habilidades ou superdotação."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou uma atualização normativa importante. O estudo de caso é pedagógico e a oferta do AEE não pode ser condicionada à apresentação de diagnóstico ou laudo de profissional de saúde.",
        "feedbackErro": "A direção agiu incorretamente. A norma atual é expressa ao afastar o laudo médico como condição para a garantia do AEE. Documentos de saúde podem subsidiar o estudo de caso, mas não funcionar como barreira de acesso ao atendimento.",
        "analiseAlternativas": [
            "Incorreta. A norma vigente rejeita o diagnóstico médico como requisito obrigatório para a oferta do AEE.",
            "Incorreta. A regra de não condicionamento também se aplica a estudantes com TEA.",
            "Incorreta. Regimento escolar não pode criar exigência contrária à norma federal de garantia do atendimento.",
            "Correta. A oferta do AEE não pode ser condicionada a documento emitido por profissional de saúde.",
            "Incorreta. A regra não é exclusiva de altas habilidades/superdotação."
        ],
        "dicaBanca": "FGV pode trocar ‘pode subsidiar’ por ‘é requisito’. Essa mudança torna a alternativa errada.",
        "pegadinha": "Avaliação biopsicossocial pode ser subsidiária; laudo médico não é condição de acesso ao AEE.",
        "memorizar2026": "AEE: estudo de caso pedagógico; sem exigência obrigatória de laudo médico.",
        "atualizacao2026": "Regra expressa do art. 11, §7º, do Decreto nº 12.686/2025, com redação vigente.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §§6º e 7º."
    },
    {
        "id": "SEDUC-EE-FUND-014",
        "numero": 14,
        "subtopico": "Inclusão e matrícula",
        "dificuldade": "media",
        "pergunta": "Um gestor afirma que a inclusão escolar foi plenamente efetivada porque todos os estudantes com deficiência da região foram matriculados em escolas regulares. Essa conclusão é",
        "alternativas": [
            "inadequada, pois inclusão envolve também permanência, participação, aprendizagem, acessibilidade e apoios necessários.",
            "correta, pois matrícula e inclusão são conceitos juridicamente equivalentes.",
            "correta desde que os alunos permaneçam fisicamente na sala comum durante todo o turno.",
            "inadequada apenas quando a escola não possui sala de recursos multifuncionais.",
            "correta porque adaptações e apoios são responsabilidades exclusivas do AEE."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu que inclusão é processo mais amplo que matrícula. O direito envolve acesso, permanência, participação e aprendizagem, com apoios e eliminação de barreiras no cotidiano escolar.",
        "feedbackErro": "A matrícula é indispensável, mas não esgota a inclusão. Um aluno pode estar formalmente matriculado e continuar excluído de atividades, do currículo, da comunicação ou das oportunidades de aprendizagem.",
        "analiseAlternativas": [
            "Correta. Inclusão exige condições efetivas de participação, permanência e aprendizagem, não apenas matrícula.",
            "Incorreta. Matrícula é condição de acesso, mas não equivale à inclusão em sentido pleno.",
            "Incorreta. Presença física sem participação e aprendizagem pode manter exclusão dentro da própria escola.",
            "Incorreta. A inclusão não depende exclusivamente da existência de sala de recursos; envolve toda a organização escolar.",
            "Incorreta. A sala comum e toda a escola também têm responsabilidades inclusivas; o AEE não assume tudo sozinho."
        ],
        "dicaBanca": "Se a situação fala apenas em ‘matriculou’, procure se a alternativa correta amplia para participação e aprendizagem.",
        "pegadinha": "Inclusão formal sem inclusão pedagógica continua insuficiente.",
        "memorizar2026": "Acesso + permanência + participação + aprendizagem + apoios = núcleo da inclusão escolar.",
        "fonte": "Decreto nº 12.686/2025; Lei nº 13.146/2015."
    },
    {
        "id": "SEDUC-EE-FUND-015",
        "numero": 15,
        "subtopico": "Normalização",
        "dificuldade": "media",
        "pergunta": "Uma prática associada historicamente ao paradigma da normalização seria",
        "alternativas": [
            "transformar o ambiente escolar para valorizar diferentes formas de aprender.",
            "eliminar barreiras arquitetônicas e comunicacionais produzidas pelo contexto.",
            "organizar o currículo com base no desenho universal para a aprendizagem.",
            "reconhecer a diversidade humana como valor educacional.",
            "buscar aproximar a pessoa considerada diferente de um padrão social entendido como normal."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou a lógica da normalização: preparar ou modificar a pessoa para aproximá-la de um padrão social considerado normal. A educação inclusiva contemporânea desloca o foco para direitos, diversidade e eliminação de barreiras.",
        "feedbackErro": "A normalização não tem como eixo transformar a escola para acolher a diversidade. Seu foco histórico está em aproximar a pessoa do padrão considerado normal, frequentemente por treinamento, adaptação ou reabilitação.",
        "analiseAlternativas": [
            "Incorreta. Transformar o ambiente para atender à diversidade corresponde à perspectiva inclusiva.",
            "Incorreta. Eliminar barreiras é princípio de acessibilidade e inclusão.",
            "Incorreta. DUA procura ampliar possibilidades de acesso e participação desde o planejamento.",
            "Incorreta. Valorizar a diversidade é compatível com a perspectiva de direitos humanos.",
            "Correta. A normalização busca aproximar a pessoa de padrões socialmente considerados normais."
        ],
        "dicaBanca": "Normalização = mudar a pessoa para o padrão. Inclusão = mudar o contexto para acolher a diversidade.",
        "pegadinha": "A palavra ‘adaptação’ pode aparecer nos dois paradigmas; observe quem é obrigado a se adaptar.",
        "memorizar2026": "Normalização antecede a perspectiva inclusiva e mantém forte referência a um padrão de normalidade.",
        "fonte": "Fundamentos históricos da Educação Especial."
    },
    {
        "id": "SEDUC-EE-FUND-016",
        "numero": 16,
        "subtopico": "Currículo inclusivo",
        "dificuldade": "alta",
        "pergunta": "A respeito da Educação Especial integrada ao currículo, assinale a afirmativa que melhor expressa uma perspectiva inclusiva.",
        "alternativas": [
            "O estudante público da Educação Especial deve seguir currículo paralelo, desvinculado do currículo da turma.",
            "O currículo comum deve permanecer inalterado mesmo quando existirem barreiras de acesso e participação.",
            "O acesso ao currículo deve ser favorecido por estratégias, recursos de acessibilidade, adaptações razoáveis e apoios adequados às necessidades do estudante.",
            "A flexibilização curricular significa necessariamente reduzir conteúdos e expectativas de aprendizagem.",
            "A Educação Especial substitui as diretrizes curriculares nacionais para o seu público."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou corretamente a ideia de currículo inclusivo: o objetivo é garantir acesso ao currículo comum por meio de estratégias, recursos, adaptações razoáveis e apoios, preservando oportunidades de aprendizagem e participação.",
        "feedbackErro": "A resposta correta não cria currículo paralelo nem associa flexibilização a redução automática de conteúdo. A política vigente determina que a BNCC e as diretrizes curriculares se aplicam ao público da Educação Especial, com os apoios necessários.",
        "analiseAlternativas": [
            "Incorreta. Currículo paralelo pode afastar o estudante das experiências curriculares comuns e não é a regra inclusiva.",
            "Incorreta. Manter o currículo intocado diante de barreiras pode impedir acesso e participação.",
            "Correta. Recursos, estratégias e adaptações devem viabilizar acesso real ao currículo e à aprendizagem.",
            "Incorreta. Flexibilizar não significa necessariamente empobrecer o currículo.",
            "Incorreta. A Educação Especial é transversal e não substitui as diretrizes curriculares aplicáveis às etapas e modalidades."
        ],
        "dicaBanca": "A FGV costuma opor ‘currículo paralelo’ a ‘acesso ao currículo comum com apoios’. Prefira a segunda lógica.",
        "pegadinha": "Flexibilização ≠ redução automática de conteúdo.",
        "memorizar2026": "Currículo para todos, com recursos e apoios diferentes quando necessários.",
        "atualizacao2026": "A PNEEI vigente explicita a aplicação da BNCC e das diretrizes curriculares ao público da Educação Especial.",
        "fonte": "Decreto nº 12.686/2025, art. 4º, §1º."
    },
    {
        "id": "SEDUC-EE-FUND-017",
        "numero": 17,
        "subtopico": "Segregação, integração e inclusão",
        "dificuldade": "media",
        "afirmacoes": [
            "Situação 1: o estudante frequenta instituição separada exclusivamente em razão da deficiência.",
            "Situação 2: o estudante frequenta a escola comum, mas cabe principalmente a ele adaptar-se às estruturas existentes.",
            "Situação 3: a escola reorganiza práticas, ambientes e recursos para assegurar participação de todos."
        ],
        "pergunta": "As situações correspondem, respectivamente, a",
        "alternativas": [
            "integração, segregação e inclusão.",
            "segregação, integração e inclusão.",
            "exclusão, inclusão e normalização.",
            "normalização, integração e segregação.",
            "segregação, inclusão e integração."
        ],
        "correta": 1,
        "feedbackAcerto": "Você classificou corretamente a sequência. Separação institucional corresponde à segregação; inserção com adaptação exigida do aluno caracteriza integração; transformação da escola para atender à diversidade caracteriza inclusão.",
        "feedbackErro": "A sequência correta é segregação → integração → inclusão. Observe sempre a relação entre estudante e sistema escolar: separado, inserido sem transformação suficiente ou incluído com transformação do ambiente.",
        "analiseAlternativas": [
            "Incorreta. A primeira situação é segregação, não integração.",
            "Correta. A sequência identifica os três paradigmas de forma coerente.",
            "Incorreta. A segunda situação não é inclusão e a terceira não é normalização.",
            "Incorreta. A primeira situação não descreve normalização e a terceira não é segregação.",
            "Incorreta. A segunda situação é integração e a terceira é inclusão."
        ],
        "dicaBanca": "Converta a situação em três perguntas: separado? adaptando-se ao sistema? sistema se transformando?",
        "pegadinha": "A presença na escola comum distingue integração de segregação, mas não basta para caracterizar inclusão.",
        "memorizar2026": "Segregação = separado; integração = inserido e adaptando-se; inclusão = escola se transforma.",
        "fonte": "Fundamentos históricos e pedagógicos da Educação Especial."
    },
    {
        "id": "SEDUC-EE-FUND-018",
        "numero": 18,
        "subtopico": "Participação e gestão democrática",
        "dificuldade": "alta",
        "pergunta": "Ao planejar a inclusão de uma estudante, a equipe decide ouvir a própria aluna e sua família, analisar barreiras existentes e definir os apoios necessários. Essa medida está mais diretamente relacionada aos princípios de",
        "alternativas": [
            "homogeneidade e padronização.",
            "normalização e assistência.",
            "segregação e especialização.",
            "participação, gestão democrática e construção colaborativa dos apoios.",
            "classificação diagnóstica e seleção escolar."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu a participação como componente da gestão democrática e do planejamento inclusivo. A política atual garante envolvimento do estudante e dos familiares no estudo de caso e valoriza decisões construídas a partir das necessidades reais do contexto.",
        "feedbackErro": "A prática descrita não busca normalizar nem classificar o aluno. Ela envolve escuta, análise de barreiras e construção colaborativa dos apoios, elementos próprios da participação e da gestão democrática.",
        "analiseAlternativas": [
            "Incorreta. A escuta individualizada rompe com a padronização rígida.",
            "Incorreta. O objetivo não é aproximar a estudante de um padrão nem tratá-la de forma assistencialista.",
            "Incorreta. A proposta não separa a estudante nem delega tudo a um serviço especializado.",
            "Correta. A participação da estudante e da família orienta decisões pedagógicas e apoios construídos colaborativamente.",
            "Incorreta. Diagnóstico e seleção não constituem o eixo da situação apresentada."
        ],
        "dicaBanca": "Quando o caso enfatizar escuta da família e do estudante, associe a participação, gestão democrática e estudo de caso.",
        "pegadinha": "Família não substitui a decisão pedagógica, mas participa do processo de construção e acompanhamento.",
        "memorizar2026": "Planejamento inclusivo é colaborativo: estudante + família + escola + rede de apoio, quando necessário.",
        "atualizacao2026": "O envolvimento do estudante e dos familiares é garantido ao longo do estudo de caso pela norma vigente.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §3º."
    },
    {
        "id": "SEDUC-EE-FUND-019",
        "numero": 19,
        "subtopico": "Diversidade humana",
        "dificuldade": "media",
        "pergunta": "Na perspectiva inclusiva contemporânea, a diferença humana deve ser compreendida predominantemente como",
        "alternativas": [
            "característica da diversidade humana a ser reconhecida e valorizada no processo educacional.",
            "problema individual a ser corrigido antes da participação escolar.",
            "fator incompatível com um currículo comum.",
            "obstáculo inevitável à aprendizagem.",
            "condição que exige escolarização segregada para preservar o ritmo da turma."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu a diversidade como valor educacional. A inclusão não trata a diferença como defeito a ser eliminado, mas organiza a escola para garantir direitos, participação, aprendizagem e desenvolvimento de estudantes diversos.",
        "feedbackErro": "A resposta correta valoriza a diversidade humana. As demais alternativas reproduzem concepções deficitárias ou segregadoras que deslocam o problema para a pessoa e ignoram as barreiras do contexto.",
        "analiseAlternativas": [
            "Correta. A diversidade humana é princípio reconhecido pela política inclusiva.",
            "Incorreta. A participação escolar não depende de prévia correção do indivíduo.",
            "Incorreta. O currículo comum pode ser acessado com estratégias e apoios adequados.",
            "Incorreta. Dificuldades de aprendizagem não são inevitáveis nem explicadas apenas pela diferença individual.",
            "Incorreta. Segregação não é resposta compatível com o direito à educação inclusiva."
        ],
        "dicaBanca": "Alternativas que transformam diferença em incapacidade geralmente reproduzem o modelo médico ou o capacitismo.",
        "pegadinha": "A banca pode usar palavras como ‘proteção’ ou ‘adequação’ para justificar separação; analise o efeito real da medida.",
        "memorizar2026": "Diversidade não é problema; barreiras é que precisam ser enfrentadas.",
        "fonte": "Decreto nº 12.686/2025, art. 2º."
    },
    {
        "id": "SEDUC-EE-FUND-020",
        "numero": 20,
        "subtopico": "Sistema educacional inclusivo",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. Incluir os estudantes público da Educação Especial em classes e escolas comuns, com os apoios necessários.",
            "II. Condicionar a participação em classe comum à apresentação de laudo médico.",
            "III. Identificar e eliminar barreiras que dificultem participação e aprendizagem.",
            "IV. Adotar medidas individualizadas e efetivas de apoio quando necessárias."
        ],
        "pergunta": "À luz da política vigente, estão corretas",
        "alternativas": [
            "I e II, apenas.",
            "II e III, apenas.",
            "I, II e III, apenas.",
            "II, III e IV, apenas.",
            "I, III e IV, apenas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou corretamente a lógica do sistema inclusivo. Classes comuns com apoios, eliminação de barreiras e medidas individualizadas são compatíveis com a política; exigir laudo como condição de participação não é.",
        "feedbackErro": "A combinação correta é I, III e IV. A política assegura inclusão em classes e escolas comuns com apoio necessário e medidas individualizadas. O laudo médico não pode funcionar como condição de acesso ou participação.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa II é incompatível com a política e III e IV também são corretas.",
            "Incorreta. A afirmativa II é falsa e I e IV são corretas.",
            "Incorreta. A presença da afirmativa II torna a combinação errada.",
            "Incorreta. A afirmativa II está errada e I deveria estar incluída.",
            "Correta. I, III e IV expressam inclusão com apoios e eliminação de barreiras; II cria exigência indevida."
        ],
        "dicaBanca": "Em questões com várias medidas, procure a que cria barreira burocrática ou condiciona direito a diagnóstico médico.",
        "pegadinha": "‘Apoio individualizado’ é compatível com inclusão; ‘segregação individualizada’ não é.",
        "memorizar2026": "Sistema inclusivo = classe comum + apoio necessário + eliminação de barreiras + participação e aprendizagem.",
        "atualizacao2026": "O Decreto nº 12.773/2025 reforçou a redação sobre o direito de inclusão em classes e escolas comuns com apoio necessário.",
        "fonte": "Decreto nº 12.686/2025, arts. 1º a 4º, com redação do Decreto nº 12.773/2025."
    },
    {
        "id": "SEDUC-EE-FUND-021",
        "numero": 21,
        "subtopico": "Organização dos sistemas de ensino",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. Os estudantes público da Educação Especial têm direito à inclusão em classes e escolas comuns, com apoio necessário.",
            "II. A Educação Especial permanece modalidade transversal.",
            "III. Estados, Distrito Federal e Municípios podem organizar a modalidade por meio de parcerias e convênios com instituições privadas sem fins lucrativos, especializadas e com atuação exclusiva em Educação Especial, nos termos legais.",
            "IV. A política proíbe em qualquer hipótese apoio técnico e financeiro do Poder Público a instituições privadas especializadas sem fins lucrativos."
        ],
        "pergunta": "Está correto o que se afirma em",
        "alternativas": [
            "I e IV, apenas.",
            "II e IV, apenas.",
            "I, II e III, apenas.",
            "III e IV, apenas.",
            "I, II, III e IV."
        ],
        "correta": 2,
        "feedbackAcerto": "Você considerou a redação consolidada da PNEEI. A inclusão em classes comuns, a transversalidade e a possibilidade legal de parcerias com instituições especializadas sem fins lucrativos coexistem no texto vigente. A proibição absoluta da afirmativa IV é falsa.",
        "feedbackErro": "A combinação correta é I, II e III. O Decreto nº 12.773/2025 acrescentou previsão expressa de parcerias e convênios nos termos da LDB e também prevê apoio técnico e financeiro do Poder Público a instituições privadas sem fins lucrativos especializadas.",
        "analiseAlternativas": [
            "Incorreta. IV é falsa e II e III também são corretas.",
            "Incorreta. IV é falsa; I e III também são verdadeiras.",
            "Correta. I, II e III estão de acordo com o texto vigente; IV usa uma proibição absoluta que a norma não estabelece.",
            "Incorreta. IV é falsa e I e II também são corretas.",
            "Incorreta. A afirmativa IV invalida a combinação."
        ],
        "dicaBanca": "Desconfie de termos absolutos como ‘em qualquer hipótese’, especialmente após alterações legislativas recentes.",
        "pegadinha": "A política inclusiva e a previsão de parcerias especializadas não devem ser tratadas como se uma anulasse automaticamente a outra.",
        "memorizar2026": "Decreto 12.773/2025: manteve inclusão em classes comuns e acrescentou regras sobre parcerias e apoio a instituições especializadas sem fins lucrativos.",
        "atualizacao2026": "Questão baseada na redação consolidada após o Decreto nº 12.773/2025.",
        "fonte": "Decreto nº 12.686/2025, art. 4º-A e diretrizes vigentes; Decreto nº 12.773/2025."
    },
    {
        "id": "SEDUC-EE-FUND-022",
        "numero": 22,
        "subtopico": "Estudo de caso",
        "dificuldade": "alta",
        "pergunta": "A professora de AEE iniciou o acompanhamento de uma estudante e propôs que o estudo de caso fosse elaborado exclusivamente a partir do diagnóstico clínico e das limitações nele descritas. Considerando a regulamentação vigente, a proposta é inadequada porque o estudo de caso deve",
        "alternativas": [
            "limitar-se aos resultados das avaliações escolares e desconsiderar fatores contextuais.",
            "identificar demandas e barreiras, analisar o contexto escolar, reconhecer potencialidades e demandas de apoio e definir estratégias e recursos de acessibilidade.",
            "ser produzido exclusivamente por profissional de saúde para assegurar neutralidade técnica.",
            "ocorrer apenas depois da apresentação de avaliação biopsicossocial completa.",
            "ser substituído pelo PEI sempre que houver diagnóstico médico formal."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou corretamente as etapas centrais do estudo de caso vigente. Trata-se de metodologia pedagógica que analisa demandas, barreiras, contexto, potencialidades, apoios e recursos de acessibilidade, e não de simples transcrição de diagnóstico clínico.",
        "feedbackErro": "A resposta correta descreve as etapas previstas no art. 11. O diagnóstico pode trazer informações úteis, mas não substitui a análise pedagógica do contexto e não deve reduzir o estudante às suas limitações.",
        "analiseAlternativas": [
            "Incorreta. O estudo de caso exige análise de barreiras e contexto, não apenas resultados escolares.",
            "Correta. A alternativa reúne as quatro etapas centrais previstas na regulamentação vigente.",
            "Incorreta. O estudo de caso é metodologia pedagógica e não é atribuição exclusiva de profissional de saúde.",
            "Incorreta. Avaliação biopsicossocial pode subsidiar o processo, mas não é condição para iniciá-lo.",
            "Incorreta. O PEI deriva do estudo de caso; não o substitui por causa de diagnóstico médico."
        ],
        "dicaBanca": "Se a alternativa reduz o estudo de caso a diagnóstico, laudo ou déficit, provavelmente está errada.",
        "pegadinha": "Avaliação biopsicossocial = documento subsidiário possível; estudo de caso = metodologia pedagógica necessária.",
        "memorizar2026": "Estudo de caso: demandas/barreiras → contexto → potencialidades/apoios → estratégias/recursos de acessibilidade.",
        "atualizacao2026": "Etapas descritas no Decreto nº 12.686/2025, já consolidado.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §1º."
    },
    {
        "id": "SEDUC-EE-FUND-023",
        "numero": 23,
        "subtopico": "PAEE e PEI",
        "dificuldade": "alta",
        "pergunta": "Após a realização do estudo de caso de um estudante público da Educação Especial, o resultado deverá fundamentar, conforme a redação vigente do Decreto nº 12.686/2025,",
        "alternativas": [
            "apenas o Projeto Político-Pedagógico da escola.",
            "exclusivamente o Plano de Atendimento Educacional Especializado (PAEE), sem relação com outros instrumentos.",
            "somente o Plano Educacional Individualizado (PEI), ficando o PAEE restrito à sala de recursos.",
            "o Plano de Atendimento Educacional Especializado (PAEE) e o Plano Educacional Individualizado (PEI).",
            "obrigatoriamente um laudo biopsicossocial emitido pela rede de saúde."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou uma alteração recente: o resultado do estudo de caso fundamenta PAEE e PEI. Ambos são instrumentos pedagógicos individualizados e devem orientar diferentes espaços e ações do processo educacional.",
        "feedbackErro": "A redação atual não limita o resultado do estudo de caso apenas ao PAEE. Após o Decreto nº 12.773/2025, o texto menciona expressamente PAEE e PEI.",
        "analiseAlternativas": [
            "Incorreta. O PPP incorpora a institucionalização dos planos, mas não é o único produto fundamentado pelo estudo de caso.",
            "Incorreta. Essa formulação corresponde à redação anterior; a redação vigente inclui também o PEI.",
            "Incorreta. O estudo de caso fundamenta PAEE e PEI, e o PAEE não se restringe à sala de recursos.",
            "Correta. A redação atual prevê expressamente PAEE e PEI.",
            "Incorreta. Avaliação biopsicossocial pode subsidiar o estudo de caso, mas não é produto obrigatório dele."
        ],
        "dicaBanca": "Questões de atualização podem apresentar a redação antiga como distrator. Para 2026, memorize PAEE + PEI.",
        "pegadinha": "Material anterior a dezembro de 2025 pode mencionar apenas PAEE.",
        "memorizar2026": "Estudo de caso fundamenta PAEE e PEI.",
        "atualizacao2026": "Mudança introduzida pelo Decreto nº 12.773/2025.",
        "fonte": "Decreto nº 12.686/2025, art. 11, §2º, com redação do Decreto nº 12.773/2025."
    },
    {
        "id": "SEDUC-EE-FUND-024",
        "numero": 24,
        "subtopico": "PAEE e PEI",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. PAEE e PEI são documentos individualizados de natureza pedagógica, com atualização contínua.",
            "II. Derivam do estudo de caso.",
            "III. Orientam o trabalho na sala comum, no AEE, as atividades colaborativas da escola e ações de articulação intersetorial.",
            "IV. Destinam-se exclusivamente às atividades realizadas na sala de recursos multifuncionais."
        ],
        "pergunta": "Está correto o que se afirma em",
        "alternativas": [
            "I, II e III, apenas.",
            "I e IV, apenas.",
            "II e IV, apenas.",
            "III e IV, apenas.",
            "I, II, III e IV."
        ],
        "correta": 0,
        "feedbackAcerto": "Você compreendeu a função ampla dos planos. PAEE e PEI são instrumentos pedagógicos individualizados e atualizados continuamente, derivados do estudo de caso, e orientam ações que ultrapassam a sala de recursos.",
        "feedbackErro": "A combinação correta é I, II e III. A afirmativa IV é falsa porque PAEE e PEI também orientam o trabalho da sala comum, atividades colaborativas e articulação intersetorial.",
        "analiseAlternativas": [
            "Correta. I, II e III correspondem à redação vigente; IV restringe indevidamente os planos à sala de recursos.",
            "Incorreta. IV é falsa e II e III também são verdadeiras.",
            "Incorreta. IV é falsa; I e III também deveriam estar incluídas.",
            "Incorreta. IV está errada e I e II estão corretas.",
            "Incorreta. A afirmativa IV torna a combinação incorreta."
        ],
        "dicaBanca": "Quando a alternativa usar ‘exclusivamente na sala de recursos’, verifique se está restringindo indevidamente o alcance do AEE ou dos planos.",
        "pegadinha": "PAEE e PEI não são papéis burocráticos isolados; devem orientar o trabalho pedagógico cotidiano.",
        "memorizar2026": "PAEE/PEI orientam sala comum + AEE + colaboração escolar + articulação intersetorial.",
        "atualizacao2026": "Redação consolidada do art. 12 após o Decreto nº 12.773/2025.",
        "fonte": "Decreto nº 12.686/2025, art. 12."
    },
    {
        "id": "SEDUC-EE-FUND-025",
        "numero": 25,
        "subtopico": "Profissional de apoio escolar",
        "dificuldade": "alta",
        "pergunta": "Os responsáveis por um estudante com TEA solicitam profissional de apoio escolar. A direção informa que o pedido só poderá ser analisado após a apresentação de laudo médico que recomende expressamente esse profissional. Segundo a política vigente, a resposta adequada seria afirmar que",
        "alternativas": [
            "todo estudante com TEA tem direito automático ao profissional de apoio, sem qualquer avaliação pedagógica.",
            "a decisão depende exclusivamente do médico responsável pelo estudante.",
            "o AEE substitui o profissional de apoio escolar sempre que houver sala de recursos.",
            "a escola pode exigir laudo quando o apoio envolver alimentação ou higiene.",
            "a necessidade do profissional de apoio deve ser avaliada pelo estudo de caso e sua oferta independe de diagnóstico, laudo, relatório ou outro documento emitido por profissional de saúde."
        ],
        "correta": 4,
        "feedbackAcerto": "Você acertou a combinação normativa: não há concessão automática para todo estudante com TEA, mas também não se pode exigir laudo médico. A necessidade do apoio é avaliada pedagogicamente no estudo de caso.",
        "feedbackErro": "A resposta correta evita dois extremos comuns: nem apoio automático apenas pelo diagnóstico, nem condicionamento ao laudo médico. O estudo de caso avalia a necessidade concreta do apoio.",
        "analiseAlternativas": [
            "Incorreta. A norma não estabelece profissional de apoio automático para toda pessoa com TEA; a necessidade é avaliada no estudo de caso.",
            "Incorreta. A decisão não é competência exclusiva do médico e não depende de prescrição clínica.",
            "Incorreta. AEE e profissional de apoio possuem funções distintas; um não substitui automaticamente o outro.",
            "Incorreta. A regra de independência de laudo não cria essa exceção para higiene ou alimentação.",
            "Correta. A oferta é avaliada pelo estudo de caso e independe de documento de saúde."
        ],
        "dicaBanca": "Duas pegadinhas opostas: ‘automático para todo TEA’ e ‘só com laudo’. A resposta atual está no estudo de caso pedagógico.",
        "pegadinha": "Diagnóstico pode existir, mas não decide sozinho a necessidade de apoio escolar.",
        "memorizar2026": "Profissional de apoio: necessidade avaliada no estudo de caso; laudo médico não é requisito.",
        "atualizacao2026": "Regra consolidada pelo Decreto nº 12.773/2025.",
        "fonte": "Decreto nº 12.686/2025, art. 14, §2º."
    },
    {
        "id": "SEDUC-EE-FUND-026",
        "numero": 26,
        "subtopico": "Profissional de apoio escolar",
        "dificuldade": "alta",
        "pergunta": "Um profissional de apoio escolar acompanha um aluno durante as atividades. Em determinado momento, decide substituir o professor e ministrar individualmente conteúdos curriculares que considera mais adequados ao estudante. Considerando as atribuições legais do profissional de apoio escolar, essa conduta é",
        "alternativas": [
            "adequada, pois o profissional de apoio é responsável pelo ensino individualizado do estudante.",
            "adequada sempre que houver autorização da família.",
            "inadequada, pois sua atuação envolve apoio à locomoção, acesso, participação, higiene, alimentação, interação, comunicação e uso de recursos auxiliares, em articulação com a equipe pedagógica, sem substituir a função docente.",
            "inadequada apenas quando ocorre durante o AEE.",
            "adequada se o estudante apresentar deficiência intelectual ou TEA."
        ],
        "correta": 2,
        "feedbackAcerto": "Você distinguiu corretamente apoio escolar de docência. O profissional de apoio favorece participação e autonomia em atividades escolares e atua em consonância com PAEE e PEI, mas não assume o papel de professor particular substituto.",
        "feedbackErro": "A resposta correta delimita as atribuições do profissional de apoio. Ele pode apoiar locomoção, higiene, alimentação, comunicação, participação e uso de recursos auxiliares, mas o ensino curricular permanece responsabilidade docente e da equipe pedagógica.",
        "analiseAlternativas": [
            "Incorreta. O profissional de apoio não é definido como responsável pelo ensino individualizado.",
            "Incorreta. Autorização familiar não transforma função de apoio em função docente.",
            "Correta. Resume as atribuições legais sem atribuir ao profissional substituição do professor.",
            "Incorreta. A inadequação decorre da substituição da função docente, em qualquer atividade escolar.",
            "Incorreta. O tipo de deficiência não autoriza substituir o professor pelo profissional de apoio."
        ],
        "dicaBanca": "Se a alternativa transformar o profissional de apoio em ‘professor particular’, desconfie.",
        "pegadinha": "Apoiar a participação pedagógica não é o mesmo que assumir a docência.",
        "memorizar2026": "Profissional de apoio = suporte à participação e autonomia; professor = responsabilidade pedagógica pelo ensino.",
        "atualizacao2026": "A atuação deve estar em consonância com PAEE e PEI na redação vigente.",
        "fonte": "Decreto nº 12.686/2025, art. 14."
    },
    {
        "id": "SEDUC-EE-FUND-027",
        "numero": 27,
        "subtopico": "Formação dos profissionais",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. O professor que atua no AEE deve possuir formação inicial que o habilite ao exercício da docência.",
            "II. A formação continuada para Educação Especial Inclusiva do professor do AEE terá carga horária mínima de 360 horas, nos termos de ato do Ministro da Educação.",
            "III. O profissional de apoio escolar deve ter, no mínimo, formação inicial de nível médio e formação continuada mínima de 180 horas, nos termos da regulamentação aplicável."
        ],
        "pergunta": "Está correto o que se afirma em",
        "alternativas": [
            "I e II, apenas.",
            "I, II e III.",
            "I e III, apenas.",
            "II, apenas.",
            "II e III, apenas."
        ],
        "correta": 1,
        "feedbackAcerto": "Você acertou uma atualização de alta importância para 2026. A redação vigente prevê formação inicial docente e formação continuada mínima de 360 horas para o professor do AEE; para o profissional de apoio escolar, nível médio e formação continuada mínima de 180 horas.",
        "feedbackErro": "As três afirmações estão corretas na redação atual. Esse tema é especialmente sujeito a materiais desatualizados porque a carga horária foi alterada pelo Decreto nº 12.773/2025.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa III também está correta.",
            "Correta. As três afirmações reproduzem os requisitos vigentes.",
            "Incorreta. A afirmativa II também está correta.",
            "Incorreta. I e III também são verdadeiras.",
            "Incorreta. A afirmativa I também está correta."
        ],
        "dicaBanca": "Decore o contraste numérico: professor do AEE = 360 h; profissional de apoio = 180 h.",
        "pegadinha": "A redação anterior previa cargas menores; materiais antigos podem induzir ao erro.",
        "memorizar2026": "AEE: docente + 360 h. Apoio escolar: nível médio + 180 h.",
        "atualizacao2026": "Requisitos inseridos pelo Decreto nº 12.773/2025 na redação do Decreto nº 12.686/2025.",
        "fonte": "Decreto nº 12.686/2025, arts. 13 e 15, redação vigente."
    },
    {
        "id": "SEDUC-EE-FUND-028",
        "numero": 28,
        "subtopico": "Tecnologia assistiva",
        "dificuldade": "alta",
        "pergunta": "Uma escola pretende autorizar que estudante público da Educação Especial utilize dispositivo digital portátil como instrumento de tecnologia assistiva para aprendizagem e comunicação. Segundo a regulamentação vigente, essa utilização",
        "alternativas": [
            "é sempre proibida em ambiente escolar por envolver dispositivo digital portátil.",
            "depende exclusivamente de prescrição médica.",
            "somente pode ocorrer durante o AEE, nunca na sala comum.",
            "pode ser autorizada mediante parecer pedagógico da instituição de ensino.",
            "depende necessariamente de autorização judicial e da família simultaneamente."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou uma previsão normativa específica e recente: a instituição de ensino deve prover parecer pedagógico que autorize o uso do dispositivo digital portátil como tecnologia assistiva nos processos de aprendizagem, comunicação ou socialização.",
        "feedbackErro": "A alternativa correta é a do parecer pedagógico. A norma não exige prescrição médica nem limita o uso à sala de recursos; o foco é a função assistiva do dispositivo no contexto educacional.",
        "analiseAlternativas": [
            "Incorreta. A norma prevê expressamente possibilidade de uso como tecnologia assistiva.",
            "Incorreta. A autorização prevista é pedagógica, não exclusivamente médica.",
            "Incorreta. O uso pode atender aprendizagem, comunicação ou socialização no processo escolar, não apenas no AEE.",
            "Correta. É a exigência expressa do art. 12, §4º, do decreto vigente.",
            "Incorreta. A norma não estabelece autorização judicial como requisito geral para esse uso."
        ],
        "dicaBanca": "Quando a questão misturar proibição de celular com tecnologia assistiva, observe a finalidade pedagógica e assistiva do dispositivo.",
        "pegadinha": "Dispositivo digital pode ser restrito em outros contextos, mas a tecnologia assistiva possui tratamento específico.",
        "memorizar2026": "Dispositivo portátil como tecnologia assistiva: parecer pedagógico da instituição.",
        "atualizacao2026": "Tema expresso na PNEEI vigente e com grande potencial de cobrança literal.",
        "fonte": "Decreto nº 12.686/2025, art. 12, §4º."
    },
    {
        "id": "SEDUC-EE-FUND-029",
        "numero": 29,
        "subtopico": "Oferta do AEE",
        "dificuldade": "alta",
        "pergunta": "A respeito da oferta do Atendimento Educacional Especializado, assinale a afirmativa correta.",
        "alternativas": [
            "Na Educação Básica, o AEE pode, excepcionalmente, ser realizado em Centro de Atendimento Educacional Especializado da rede pública ou de instituição privada sem fins lucrativos conveniada, observadas as regras do sistema de ensino.",
            "A matrícula no AEE substitui a frequência na classe comum quando houver deficiência múltipla.",
            "O AEE ocorre exclusivamente em sala de recursos multifuncionais situada na mesma escola do estudante.",
            "O AEE é sempre suplementar, independentemente do público atendido.",
            "Nas instituições federais de Educação Superior, não existe estrutura institucional responsável pela efetivação do AEE."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu a exceção prevista na norma. O AEE é preferencialmente articulado à escola comum, mas na Educação Básica pode ser realizado excepcionalmente em Centro de Atendimento Educacional Especializado público ou conveniado sem fins lucrativos, conforme os requisitos do sistema.",
        "feedbackErro": "A alternativa correta é a que admite excepcionalmente os Centros de Atendimento Educacional Especializado. O AEE não substitui a classe comum, não se limita a uma sala de recursos e, nas instituições federais de ensino superior, é efetivado pelos núcleos de acessibilidade.",
        "analiseAlternativas": [
            "Correta. Reproduz a hipótese excepcional prevista no art. 9º.",
            "Incorreta. A matrícula no AEE não pode substituir matrícula e frequência na classe comum.",
            "Incorreta. O AEE não é restrito exclusivamente à sala de recursos da própria escola.",
            "Incorreta. O caráter é complementar para deficiência/TEA e suplementar para altas habilidades/superdotação.",
            "Incorreta. Nas instituições federais de ensino superior, o AEE é efetivado pelos núcleos de acessibilidade."
        ],
        "dicaBanca": "Palavras absolutas como ‘exclusivamente’, ‘sempre’ e ‘não existe’ costumam esconder a pegadinha.",
        "pegadinha": "Preferencialmente na escola comum não significa exclusivamente na própria escola.",
        "memorizar2026": "AEE: não substitutivo; excepcionalmente pode ocorrer em Centro de AEE; no ensino superior federal, núcleos de acessibilidade.",
        "atualizacao2026": "Regras atuais de organização e oferta do AEE.",
        "fonte": "Decreto nº 12.686/2025, arts. 8º a 10."
    },
    {
        "id": "SEDUC-EE-FUND-030",
        "numero": 30,
        "subtopico": "Estudo de caso e documentos",
        "dificuldade": "alta",
        "afirmacoes": [
            "I. O estudo de caso deve garantir o envolvimento do estudante e de seus familiares responsáveis pelo cuidado cotidiano.",
            "II. Deve analisar barreiras, contexto escolar, potencialidades e demandas de apoio.",
            "III. A garantia do AEE depende obrigatoriamente de diagnóstico ou laudo emitido por profissional de saúde.",
            "IV. A avaliação biopsicossocial da deficiência, quando existente, pode subsidiar o estudo de caso.",
            "V. O resultado do estudo de caso fundamenta PAEE e PEI na redação vigente."
        ],
        "pergunta": "À luz da regulamentação atual, estão corretas",
        "alternativas": [
            "I, II e III, apenas.",
            "II, III e IV, apenas.",
            "I, III e V, apenas.",
            "I, II, III, IV e V.",
            "I, II, IV e V, apenas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você integrou corretamente os principais elementos atuais do estudo de caso. Participação, análise de barreiras e potencialidades, possibilidade de uso subsidiário da avaliação biopsicossocial e fundamentação de PAEE/PEI estão corretos. A exigência obrigatória de laudo médico é o único item falso.",
        "feedbackErro": "A combinação correta é I, II, IV e V. A afirmativa III está errada porque a oferta do AEE não pode ser condicionada a diagnóstico, laudo, relatório ou outro documento emitido por profissional de saúde.",
        "analiseAlternativas": [
            "Incorreta. III é falsa e IV e V também são corretas.",
            "Incorreta. III é falsa, e I e V também estão corretas.",
            "Incorreta. III é falsa e II e IV também deveriam estar incluídas.",
            "Incorreta. A presença da afirmativa III invalida a alternativa.",
            "Correta. I, II, IV e V refletem a regulamentação vigente; III cria exigência proibida."
        ],
        "dicaBanca": "Em questões longas de legislação, isole a frase que transforma documento de saúde em requisito. Normalmente esse é o ponto de ruptura.",
        "pegadinha": "‘Pode subsidiar’ não significa ‘é obrigatório’. Essa troca de modal é típica de prova.",
        "memorizar2026": "Estudo de caso é pedagógico, participativo e contextual; laudo não condiciona AEE; PAEE + PEI derivam do processo.",
        "atualizacao2026": "Questão-síntese da redação consolidada dos arts. 11 e 12 do Decreto nº 12.686/2025.",
        "fonte": "Decreto nº 12.686/2025, arts. 11 e 12, redação vigente."
    }
];

    window.seducEducacaoEspecialFundamentos2026 = banco;
})();
