/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 16: Altas Habilidades ou Superdotação (AH/SD)
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 09/09/2026.
   Matriz FGV: SEDUC-SP 2026 (questões 11 a 15) e
   Vitória/ES 2024 — Educação Especial: Altas Habilidades.
   Bases atuais: LDB; Decreto 12.686/2025, com alterações do
   Decreto 12.773/2025; Lei 15.436/2026; Portaria MEC 421/2026;
   orientações Inep atualizadas em 31/08/2026.
========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-AHSD-001",
        "numero": 1,
        "subtopico": "Concepção contemporânea de AH/SD",
        "dificuldade": "alta",
        "pergunta": "As concepções contemporâneas sobre Altas Habilidades ou Superdotação (AH/SD) afastam a ideia de que o fenômeno possa ser reduzido a um único escore de QI. Nessa perspectiva, a compreensão mais adequada é a de um fenômeno",
        "alternativas": [
            "predominantemente hereditário, cujo reconhecimento escolar depende de desempenho superior e estável em todas as áreas avaliadas ao longo do percurso acadêmico.",
            "essencialmente acadêmico, identificado quando altas notas e rapidez de aprendizagem aparecem de forma simultânea e persistente em diferentes componentes curriculares.",
            "dinâmico, multidimensional e contextual, envolvendo a interação entre capacidades, criatividade, motivação, características pessoais e fatores socioculturais.",
            "determinado pelo ambiente escolar, pois oportunidades educacionais adequadas são suficientes para produzir altas habilidades mesmo sem potencial elevado previamente observado.",
            "unitário e mensurável, embora possa se expressar em diferentes disciplinas desde que a inteligência geral permaneça acima do ponto de corte definido pela escola."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu exatamente a virada conceitual cobrada pela FGV-SP 2026: AH/SD não se reduz a QI nem a desempenho escolar; sua manifestação é multidimensional e contextual.",
        "feedbackErro": "A FGV contrapôs a concepção contemporânea às visões estáticas, unitárias e exclusivamente psicométricas. A alternativa correta combina potencial, criatividade, motivação e contexto.",
        "analiseAlternativas": [
            "Incorreta. A perspectiva contemporânea rejeita a exigência de desempenho uniforme e estável em todas as áreas.",
            "Incorreta. Altas notas podem aparecer, mas não constituem condição necessária nem suficiente para AH/SD.",
            "Correta. É a formulação mais próxima da FGV 2026 sobre um fenômeno dinâmico, multidimensional e contextual.",
            "Incorreta. O ambiente influencia a manifestação, mas não significa que qualquer estudante passe a ter AH/SD apenas por receber oportunidades.",
            "Incorreta. A compreensão atual não depende de um único ponto de corte de inteligência geral."
        ],
        "dicaBanca": "Na FGV 2026, desconfie de alternativas que reduzam AH/SD a QI, nota alta, hereditariedade ou desempenho acadêmico uniforme.",
        "pegadinha": "A banca costuma tornar o distrator plausível acrescentando uma parte verdadeira, como 'influência do ambiente', e depois absolutizando-a.",
        "memorizar2026": "AH/SD: potencial + múltiplas dimensões + contexto; não é sinônimo de QI alto.",
        "fonte": "FGV SEDUC-SP 2026, questão 11; Lei nº 15.436/2026, arts. 2º e 3º."
    },
    {
        "id": "SEDUC-EE-AHSD-002",
        "numero": 2,
        "subtopico": "Modelo dos Três Anéis — Renzulli",
        "dificuldade": "alta",
        "pergunta": "No Modelo dos Três Anéis, de Joseph Renzulli, a manifestação de comportamentos de superdotação é explicada principalmente pela interação entre",
        "alternativas": [
            "inteligência geral elevada, rendimento acadêmico superior e domínio precoce de conteúdos escolares, com menor relevância para fatores ambientais.",
            "habilidade acima da média, criatividade e comprometimento com a tarefa, em interação e sob influência de fatores pessoais e ambientais.",
            "criatividade, memória excepcional e desempenho escolar elevado, considerados traços relativamente permanentes do estudante ao longo da escolarização.",
            "aptidão acadêmica específica, liderança e inteligência emocional, dimensões que precisam aparecer simultaneamente para caracterizar superdotação.",
            "capacidade intelectual geral, precocidade e motivação intrínseca, desde que confirmadas por testes psicométricos padronizados e observação docente."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou os três componentes centrais de Renzulli que a FGV cobrou diretamente em 2026: habilidade acima da média, criatividade e comprometimento com a tarefa.",
        "feedbackErro": "O Modelo dos Três Anéis não transforma desempenho escolar, memória ou QI em critérios isolados. A interação entre os três anéis é o ponto-chave.",
        "analiseAlternativas": [
            "Incorreta. Desempenho acadêmico e inteligência geral não substituem criatividade e comprometimento com a tarefa.",
            "Correta. É a combinação clássica do Modelo dos Três Anéis, tal como cobrada pela FGV.",
            "Incorreta. Memória excepcional e alto rendimento não formam os três anéis.",
            "Incorreta. Liderança pode ser área de manifestação, mas não integra o trio conceitual de Renzulli.",
            "Incorreta. Precocidade e teste psicométrico não substituem os três componentes do modelo."
        ],
        "dicaBanca": "Se aparecer 'Renzulli', procure imediatamente: habilidade acima da média + criatividade + comprometimento com a tarefa.",
        "pegadinha": "A FGV pode trocar um dos três anéis por 'alto rendimento', 'QI' ou 'liderança' para criar um distrator convincente.",
        "memorizar2026": "Renzulli = Habilidade acima da média + Criatividade + Comprometimento com a tarefa.",
        "fonte": "FGV SEDUC-SP 2026, questão 12."
    },
    {
        "id": "SEDUC-EE-AHSD-003",
        "numero": 3,
        "subtopico": "Definição legal 2026 — Lei 15.436",
        "dificuldade": "alta",
        "pergunta": "A Lei nº 15.436/2026 instituiu a Política Nacional para Estudantes com Altas Habilidades ou Superdotação. Para essa lei, AH/SD corresponde a",
        "alternativas": [
            "condição do neurodesenvolvimento caracterizada por potencial intelectual elevado, curiosidade intensa, elevada capacidade de aprendizagem e envolvimento profundo em temas de interesse.",
            "categoria educacional definida exclusivamente por desempenho acima da média em testes de inteligência e rendimento escolar, sendo dispensável considerar aspectos socioemocionais e contextuais.",
            "transtorno do neurodesenvolvimento marcado por interesses intensos e desempenho acadêmico excepcional, cuja identificação depende de diagnóstico clínico especializado.",
            "perfil de excelência acadêmica que exige altas notas em todas as áreas e comprovação por avaliação psicológica para acesso às medidas de Educação Especial.",
            "condição temporária de desempenho superior que pode ser reconhecida pela escola apenas enquanto o estudante mantiver rendimento significativamente acima da média da turma."
        ],
        "correta": 0,
        "feedbackAcerto": "Você acertou a definição legal nova de 2026. Ela é muito importante porque passou a existir uma política nacional específica para AH/SD.",
        "feedbackErro": "A Lei nº 15.436/2026 não reduz AH/SD a notas, QI ou diagnóstico clínico. A definição legal inclui potencial elevado, curiosidade, capacidade de aprendizagem, envolvimento e dimensões socioemocionais.",
        "analiseAlternativas": [
            "Correta. Reproduz os elementos centrais do art. 2º, I, da Lei nº 15.436/2026.",
            "Incorreta. A lei rejeita a redução a testes e desempenho escolar.",
            "Incorreta. A lei denomina AH/SD como condição do neurodesenvolvimento, não como transtorno, e não cria exigência de diagnóstico clínico.",
            "Incorreta. Altas notas em todas as áreas e avaliação psicológica obrigatória não são requisitos legais.",
            "Incorreta. AH/SD não deixa de existir porque o rendimento escolar oscilou."
        ],
        "dicaBanca": "Essa lei é posterior a muitas apostilas e provas. Em 2026, ela virou prioridade de atualização.",
        "pegadinha": "A palavra 'neurodesenvolvimento' pode induzir o candidato a marcar alternativas que falam em transtorno ou diagnóstico médico; não caia nisso.",
        "memorizar2026": "Lei 15.436/2026: AH/SD = condição do neurodesenvolvimento, não 'doença' nem simples nota alta.",
        "fonte": "Lei nº 15.436/2026, arts. 1º e 2º.",
        "atualizacao2026": "A Lei nº 15.436, de 17/06/2026, criou política nacional específica, centros de referência e Cadastro Nacional de Estudantes com AH/SD."
    },
    {
        "id": "SEDUC-EE-AHSD-004",
        "numero": 4,
        "subtopico": "Características e socioemocional",
        "dificuldade": "media",
        "pergunta": "Um estudante aprende rapidamente conteúdos de seu interesse, formula perguntas complexas e demonstra intensa curiosidade, mas também apresenta grande sensibilidade emocional e frustração diante de tarefas pouco desafiadoras. A resposta pedagógica mais adequada é",
        "alternativas": [
            "reduzir o nível de desafio até que o estudante demonstre estabilidade emocional, pois o aprofundamento curricular tende a aumentar sua frustração e isolamento.",
            "concentrar o ensino apenas no tema de maior interesse, evitando conteúdos menos motivadores para preservar engajamento e desempenho acadêmico.",
            "interpretar a sensibilidade emocional como indício de desajuste incompatível com AH/SD, encaminhando a identificação somente depois da estabilização do comportamento.",
            "oferecer desafios e aprofundamento, com acompanhamento socioemocional e participação nas demais experiências escolares.",
            "manter a rotina curricular sem diferenciação, pois estudantes com AH/SD precisam aprender a se adaptar ao mesmo ritmo e à mesma complexidade previstos para a turma."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou o raciocínio da FGV-SP 2026: desafio intelectual e aprofundamento podem coexistir com suporte socioemocional; uma dimensão não anula a outra.",
        "feedbackErro": "A escola não deve reduzir expectativas, limitar o currículo ao hiperinteresse nem presumir que intensidade emocional exclui AH/SD.",
        "analiseAlternativas": [
            "Incorreta. Reduzir desafio como regra pode aumentar desengajamento e não responde à necessidade de aprofundamento.",
            "Incorreta. Interesse específico pode ser ponto de partida, mas não deve aprisionar o percurso escolar.",
            "Incorreta. Sensibilidade e intensidade emocional podem coexistir com AH/SD.",
            "Correta. Articula potencial cognitivo, necessidade de desafio e cuidado socioemocional.",
            "Incorreta. Igualdade de ritmo não significa equidade pedagógica."
        ],
        "dicaBanca": "A FGV já montou caso praticamente com essa lógica: rapidez + interesse intenso + necessidade de desafio + apoio socioemocional.",
        "pegadinha": "Não confunda 'apoio socioemocional' com diminuir a complexidade acadêmica.",
        "memorizar2026": "Desafiar sem abandonar; apoiar sem reduzir expectativas.",
        "fonte": "FGV SEDUC-SP 2026, questão 14; Lei nº 15.436/2026, arts. 3º e 4º."
    },
    {
        "id": "SEDUC-EE-AHSD-005",
        "numero": 5,
        "subtopico": "Áreas de manifestação",
        "dificuldade": "alta",
        "pergunta": "Em uma atividade, quatro estudantes apresentam os seguintes comportamentos: I. aprende conceitos novos com extrema rapidez e estabelece relações complexas; II. produz soluções originais e variadas; III. organiza o grupo e mobiliza colegas; IV. tem desempenho excepcional e concentração persistente em Matemática. A associação mais adequada é",
        "alternativas": [
            "I–aptidão acadêmica específica; II–capacidade intelectual geral; III–pensamento criativo; IV–liderança.",
            "I–liderança; II–aptidão acadêmica específica; III–capacidade intelectual geral; IV–pensamento criativo.",
            "I–pensamento criativo; II–capacidade intelectual geral; III–liderança; IV–aptidão acadêmica específica.",
            "I–capacidade intelectual geral; II–aptidão acadêmica específica; III–pensamento criativo; IV–liderança.",
            "I–intelectual geral; II–pensamento criativo; III–liderança; IV–aptidão acadêmica específica."
        ],
        "correta": 4,
        "feedbackAcerto": "Você distinguiu corretamente as quatro áreas trabalhadas pela FGV em 2026.",
        "feedbackErro": "A questão exige reconhecer o comportamento predominante: rapidez e relações complexas apontam para capacidade intelectual geral; originalidade para criatividade; mobilização de pares para liderança; excelência focal para aptidão acadêmica específica.",
        "analiseAlternativas": [
            "Incorreta. Troca capacidade intelectual geral por aptidão acadêmica e liderança por criatividade.",
            "Incorreta. As quatro associações estão deslocadas.",
            "Incorreta. I e II estão invertidas em relação aos comportamentos descritos.",
            "Incorreta. II e III não correspondem às manifestações descritas.",
            "Correta. Reproduz a lógica de associação cobrada pela FGV-SP."
        ],
        "dicaBanca": "Questões de associação são comuns na FGV. Identifique primeiro a pista comportamental de cada situação e só depois olhe as sequências.",
        "pegadinha": "Não trate as áreas como compartimentos rígidos; a questão pede a manifestação predominante em cada caso.",
        "memorizar2026": "Geral = rapidez/relações; Criativa = originalidade; Liderança = mobilização; Acadêmica = excelência focal.",
        "fonte": "FGV SEDUC-SP 2026, questão 15."
    },
    {
        "id": "SEDUC-EE-AHSD-006",
        "numero": 6,
        "subtopico": "Identificação — múltiplas evidências",
        "dificuldade": "alta",
        "pergunta": "Uma escola deseja aprimorar a identificação de estudantes com AH/SD. Qual procedimento é mais compatível com a legislação e com uma abordagem educacional contemporânea?",
        "alternativas": [
            "Aplicar uma bateria padronizada de QI e considerar elegíveis apenas estudantes acima do ponto de corte definido, utilizando observações escolares apenas para desempate.",
            "Selecionar inicialmente os estudantes com médias escolares mais altas e encaminhá-los para avaliação clínica, pois rendimento acadêmico é o melhor indicador disponível.",
            "combinar observação, produções, interesses, criatividade e desempenho em diferentes contextos, acompanhando o estudante ao longo do tempo.",
            "aguardar manifestação espontânea de desempenho excepcional em olimpíadas ou concursos, porque a identificação precoce pode produzir rótulos e expectativas excessivas.",
            "restringir a identificação a instrumentos psicológicos especializados, uma vez que professores e famílias não dispõem de dados confiáveis para compor o processo."
        ],
        "correta": 2,
        "feedbackAcerto": "Você escolheu uma identificação processual e baseada em múltiplas evidências, coerente com a diversidade de manifestações de AH/SD.",
        "feedbackErro": "Nem QI, nem notas, nem olimpíadas devem funcionar como porta única. A identificação educacional precisa reunir evidências e considerar contexto e trajetória.",
        "analiseAlternativas": [
            "Incorreta. QI pode integrar uma avaliação, mas não deve operar como critério único.",
            "Incorreta. Alto rendimento escolar não capta todas as manifestações nem estudantes mascarados ou com dupla excepcionalidade.",
            "Correta. A combinação de fontes reduz vieses e favorece reconhecimento de perfis diversos.",
            "Incorreta. A Lei nº 15.436/2026 prioriza identificação precoce.",
            "Incorreta. Professores, família e registros escolares podem fornecer evidências relevantes no processo."
        ],
        "dicaBanca": "A FGV gosta de alternativas que transformam um instrumento útil em 'critério único'. Essa palavra costuma revelar o erro.",
        "pegadinha": "Teste não é sinônimo de processo de identificação.",
        "memorizar2026": "Identificar = múltiplas evidências + contexto + acompanhamento.",
        "fonte": "Lei nº 15.436/2026, arts. 1º, 3º e 4º; FGV Vitória 2024 e FGV SEDUC-SP 2026."
    },
    {
        "id": "SEDUC-EE-AHSD-007",
        "numero": 7,
        "subtopico": "Dupla excepcionalidade — definição",
        "dificuldade": "alta",
        "pergunta": "Nos termos da Lei nº 15.436/2026, dupla excepcionalidade corresponde",
        "alternativas": [
            "à presença de duas áreas de talento elevado no mesmo estudante, como liderança e aptidão acadêmica específica.",
            "à coexistência de AH/SD com outra condição que gere dificuldade significativa, como TEA, TDAH, dislexia, discalculia ou deficiência.",
            "ao reconhecimento simultâneo de superdotação acadêmica e criativo-produtiva, desde que ambas sejam confirmadas por avaliação psicológica.",
            "à coexistência de AH/SD com baixo rendimento escolar, independentemente de haver outra condição do neurodesenvolvimento, transtorno ou deficiência.",
            "à combinação entre altas habilidades e necessidade de aceleração integral, situação em que o estudante apresenta desempenho muito superior em todas as áreas."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou a definição legal nova de dupla excepcionalidade.",
        "feedbackErro": "A Lei nº 15.436/2026 dá definição expressa de dupla excepcionalidade e lista exemplos como TEA, TDAH, dislexia, discalculia, transtornos motores e deficiências.",
        "analiseAlternativas": [
            "Incorreta. Ter duas áreas de talento não caracteriza dupla excepcionalidade.",
            "Correta. É a definição do art. 2º, II.",
            "Incorreta. Dupla excepcionalidade não é a combinação de dois tipos de talento.",
            "Incorreta. Baixo rendimento isolado não basta para caracterizar dupla excepcionalidade.",
            "Incorreta. Aceleração é estratégia educacional, não elemento definidor da dupla excepcionalidade."
        ],
        "dicaBanca": "Como a lei é nova, a FGV pode cobrar literalmente a expressão 'dupla excepcionalidade'.",
        "pegadinha": "Não confunda 'duas habilidades' com 'dupla excepcionalidade'.",
        "memorizar2026": "Dupla excepcionalidade = AH/SD + outra condição/dificuldade significativa associada.",
        "fonte": "Lei nº 15.436/2026, art. 2º, II.",
        "atualizacao2026": "A Lei nº 15.436/2026 passou a definir expressamente dupla excepcionalidade em âmbito nacional."
    },
    {
        "id": "SEDUC-EE-AHSD-008",
        "numero": 8,
        "subtopico": "Dupla excepcionalidade — AEE integrado",
        "dificuldade": "alta",
        "pergunta": "Um estudante apresenta AH/SD e TDAH. A escola propõe elaborar um plano para enriquecimento e outro, separado, para as dificuldades de organização e autorregulação. Segundo a Lei nº 15.436/2026, a solução mais adequada é",
        "alternativas": [
            "manter planos separados, pois estratégias de desenvolvimento do talento não devem ser misturadas com intervenções relativas a outra condição.",
            "priorizar o plano referente ao TDAH até que as dificuldades estejam controladas, deixando o enriquecimento para etapa posterior.",
            "reconhecer AH/SD somente se o TDAH não comprometer o desempenho escolar, porque baixo rendimento impede caracterização de potencial elevado.",
            "integrar no planejamento educacional individualizado as estratégias para AH/SD e para a condição associada, evitando planos fragmentados e desconexos.",
            "usar exclusivamente estratégias de enriquecimento, pois a presença de AH/SD torna desnecessário apoio para dificuldades específicas de aprendizagem e autorregulação."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou uma das novidades mais importantes da Lei nº 15.436/2026: na dupla excepcionalidade, o planejamento deve integrar as duas dimensões.",
        "feedbackErro": "A lei rejeita fragmentação e também proíbe usar a condição associada para negar o reconhecimento de AH/SD.",
        "analiseAlternativas": [
            "Incorreta. A lei determina integração, não fragmentação.",
            "Incorreta. A necessidade de apoio não suspende o direito ao desenvolvimento das altas habilidades.",
            "Incorreta. A condição associada não pode ser usada para negar AH/SD.",
            "Correta. O art. 9º determina planejamento integrado e coerente.",
            "Incorreta. Dupla excepcionalidade pode exigir caráter complementar e suplementar no AEE."
        ],
        "dicaBanca": "Questões de caso são terreno ideal para a FGV: procure a alternativa que integra necessidades sem apagar nenhuma delas.",
        "pegadinha": "Uma condição não 'anula' a outra.",
        "memorizar2026": "Dupla excepcionalidade: um planejamento integrado, não dois alunos dentro do mesmo aluno.",
        "fonte": "Lei nº 15.436/2026, art. 9º."
    },
    {
        "id": "SEDUC-EE-AHSD-009",
        "numero": 9,
        "subtopico": "AEE — caráter suplementar",
        "dificuldade": "media",
        "pergunta": "Para estudantes com AH/SD, o Atendimento Educacional Especializado, segundo a política educacional vigente, possui caráter",
        "alternativas": [
            "suplementar à escolarização, ampliando e aprofundando a formação sem substituir a classe comum.",
            "complementar à escolarização, porque seu objetivo principal é compensar limitações acadêmicas decorrentes da superdotação.",
            "substitutivo à escolarização nos componentes em que o estudante apresentar desempenho muito acima do esperado para sua idade.",
            "facultativo para a escola, já que estudantes com AH/SD geralmente conseguem acompanhar o currículo comum sem apoio especializado.",
            "exclusivamente extracurricular, devendo ocorrer fora do turno regular e sem articulação com o planejamento da classe comum."
        ],
        "correta": 0,
        "feedbackAcerto": "Você diferenciou o caráter do AEE: para AH/SD, ele é suplementar.",
        "feedbackErro": "O Decreto nº 12.686/2025 distingue AEE complementar para deficiência/TEA e suplementar para AH/SD. Ele não substitui a escolarização.",
        "analiseAlternativas": [
            "Correta. É a regra atual expressa no Decreto nº 12.686/2025.",
            "Incorreta. 'Complementar' é o termo utilizado para deficiência e TEA.",
            "Incorreta. AEE não substitui a escolarização.",
            "Incorreta. O direito não desaparece porque o estudante tenha facilidade acadêmica.",
            "Incorreta. AEE pode articular-se a diferentes estratégias e não se reduz a atividade isolada fora da escola."
        ],
        "dicaBanca": "FGV costuma explorar palavras-chave normativas. Aqui, 'suplementar' é decisiva.",
        "pegadinha": "Complementar ≠ suplementar: a banca pode trocar uma palavra e manter todo o resto plausível.",
        "memorizar2026": "AH/SD → AEE suplementar.",
        "fonte": "Decreto nº 12.686/2025, arts. 5º e 6º; Inep, AEE, atualização 31/08/2026."
    },
    {
        "id": "SEDUC-EE-AHSD-010",
        "numero": 10,
        "subtopico": "AEE — estratégias previstas na Lei 15.436",
        "dificuldade": "alta",
        "pergunta": "A Lei nº 15.436/2026 prevê que o AEE para estudantes com AH/SD poderá contemplar, entre outras medidas,",
        "alternativas": [
            "exclusivamente aceleração integral de série e matrícula em centros especializados, pois o enriquecimento na classe comum é medida curricular ordinária.",
            "reforço escolar, tutoria clínica e atividades de preparação para avaliações externas, desde que organizadas no contraturno.",
            "programas de enriquecimento, diferenciação ou aprofundamento curricular; aceleração de estudos; e agrupamentos em pares ou grupos de interesse.",
            "somente enriquecimento extracurricular e participação em olimpíadas, mantendo o currículo regular sem qualquer possibilidade de diferenciação.",
            "atendimento psicológico, aceleração obrigatória e exclusão de conteúdos já dominados, independentemente de avaliação pedagógica individualizada."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou literalmente as três possibilidades expressas no art. 8º da nova lei.",
        "feedbackErro": "A lei admite um conjunto flexível de respostas educacionais e não transforma aceleração em estratégia única ou obrigatória.",
        "analiseAlternativas": [
            "Incorreta. Aceleração integral é apenas uma possibilidade e o enriquecimento pode integrar a resposta educacional.",
            "Incorreta. Reforço escolar e tutoria clínica não formam o elenco legal do art. 8º.",
            "Correta. É a tríade explicitada pela Lei nº 15.436/2026.",
            "Incorreta. A lei não limita enriquecimento ao contraturno nem exclui diferenciação curricular.",
            "Incorreta. Aceleração não é automática e atendimento psicológico não substitui AEE."
        ],
        "dicaBanca": "Quando a FGV cobra lei nova, pode usar enumerações quase literais. Grave a tríade.",
        "pegadinha": "Aceleração é possibilidade; nunca trate como destino obrigatório de todo estudante com AH/SD.",
        "memorizar2026": "Lei 15.436, art. 8º: enriquecer/diferenciar/aprofundar + acelerar + agrupar por interesse.",
        "fonte": "Lei nº 15.436/2026, art. 8º, §1º."
    },
    {
        "id": "SEDUC-EE-AHSD-011",
        "numero": 11,
        "subtopico": "Aceleração — LDB e Lei 15.436",
        "dificuldade": "alta",
        "pergunta": "Uma equipe escolar afirma que a aceleração de estudos para estudante com AH/SD só pode ocorrer se ele demonstrar desempenho superior em todas as disciplinas. À luz da legislação atual, essa afirmação é",
        "alternativas": [
            "correta, porque a LDB condiciona a aceleração à comprovação de domínio global do currículo do ano ou série em curso.",
            "correta apenas no Ensino Fundamental, pois no Ensino Médio a progressão pode ocorrer de forma parcial por área do conhecimento.",
            "incorreta somente quando houver dupla excepcionalidade, hipótese em que a aceleração passa a depender exclusivamente do interesse do estudante.",
            "incorreta, pois a progressão pode ser regular com enriquecimento, acelerada parcialmente por área ou disciplina, ou acelerada integralmente.",
            "incorreta porque a aceleração integral é obrigatória sempre que o estudante apresentar habilidade acima da média e comprometimento com a tarefa."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou a atualização de 2026: a progressão pode ser flexível e inclusive parcial por disciplina ou área.",
        "feedbackErro": "A lei nova detalhou formas de progressão que vão além da aceleração integral. O planejamento precisa acompanhar ritmo de aprendizagem e desenvolvimento.",
        "analiseAlternativas": [
            "Incorreta. A legislação não exige desempenho superior em todas as áreas para qualquer forma de aceleração.",
            "Incorreta. A possibilidade de aceleração parcial não é restrita ao Ensino Médio.",
            "Incorreta. Dupla excepcionalidade não transfere a decisão apenas ao interesse do estudante.",
            "Correta. Resume as três formas previstas no art. 11.",
            "Incorreta. Aceleração nunca é automática ou obrigatória para todo estudante com AH/SD."
        ],
        "dicaBanca": "A FGV adora transformar uma possibilidade legal em obrigação. Verifique verbos como 'pode' e 'deve'.",
        "pegadinha": "Aceleração não é sinônimo de pular série inteira.",
        "memorizar2026": "Progressão AH/SD: regular + enriquecimento | acelerada parcial | acelerada integral.",
        "fonte": "LDB, art. 59, II; Lei nº 15.436/2026, art. 11.",
        "atualizacao2026": "A Lei nº 15.436/2026 detalhou expressamente a aceleração parcial por disciplina ou área e a aceleração integral."
    },
    {
        "id": "SEDUC-EE-AHSD-012",
        "numero": 12,
        "subtopico": "Progressão — suporte socioemocional",
        "dificuldade": "alta",
        "pergunta": "Uma estudante com AH/SD domina conteúdos de Ciências acima do ano escolar, mas demonstra ansiedade diante da possibilidade de mudar integralmente de turma. A medida mais coerente com a Lei nº 15.436/2026 é",
        "alternativas": [
            "recusar qualquer aceleração, porque a presença de ansiedade demonstra que a estudante não está pronta para estratégias de progressão diferenciada.",
            "promover aceleração integral imediata, pois o domínio acadêmico deve prevalecer sobre aspectos socioemocionais para evitar desmotivação.",
            "manter apenas enriquecimento extracurricular, pois aceleração por disciplina poderia romper a organização seriada prevista na LDB.",
            "aguardar avaliação clínica que indique maturidade emocional suficiente, já que a escola não pode decidir progressão com base em planejamento pedagógico.",
            "avaliar progressão regular com aprofundamento ou aceleração parcial, com suporte socioemocional e planejamento individualizado."
        ],
        "correta": 4,
        "feedbackAcerto": "Você combinou flexibilidade acadêmica com acompanhamento socioemocional, exatamente como exige a lei nova.",
        "feedbackErro": "A lei não obriga aceleração integral nem a proíbe diante de ansiedade. Ela exige progressão compatível com ritmo e desenvolvimento, com suporte socioemocional.",
        "analiseAlternativas": [
            "Incorreta. Ansiedade pede suporte e análise, não proibição automática.",
            "Incorreta. Desempenho acadêmico não apaga necessidades socioemocionais.",
            "Incorreta. A lei permite aceleração parcial por disciplina ou área.",
            "Incorreta. A decisão é educacional e pode ser organizada no planejamento, sem depender de autorização clínica.",
            "Correta. Preserva flexibilidade e acompanhamento integral."
        ],
        "dicaBanca": "Quando o caso traz alto desempenho e vulnerabilidade socioemocional, a FGV tende a favorecer respostas integradas, não extremas.",
        "pegadinha": "Nem 'acelera sempre' nem 'nunca acelera'.",
        "memorizar2026": "Progressão flexível + suporte socioemocional.",
        "fonte": "Lei nº 15.436/2026, art. 11 e parágrafo único."
    },
    {
        "id": "SEDUC-EE-AHSD-013",
        "numero": 13,
        "subtopico": "Planejamento educacional individualizado",
        "dificuldade": "media",
        "pergunta": "Segundo a Lei nº 15.436/2026, o planejamento educacional individualizado para estudantes com AH/SD deve ser compreendido como",
        "alternativas": [
            "relatório de avaliação psicológica que comprova a condição e autoriza o estudante a participar de programas de enriquecimento.",
            "documento pedagógico atualizado continuamente, com objetivos, estratégias, recursos, avaliação e diferenciação pedagógica.",
            "plano opcional elaborado apenas quando a escola pretende acelerar o estudante para ano ou série superior.",
            "registro administrativo destinado a reunir notas, resultados de olimpíadas e certificados de atividades extracurriculares.",
            "documento produzido exclusivamente pelo professor do AEE, sem interferência da sala comum para preservar a especialização do atendimento."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a natureza pedagógica, individualizada e dinâmica do planejamento prevista pela lei.",
        "feedbackErro": "O planejamento não é laudo, arquivo burocrático ou documento exclusivo do AEE. Ele organiza a resposta pedagógica e deve ser atualizado.",
        "analiseAlternativas": [
            "Incorreta. Planejamento educacional não é laudo psicológico.",
            "Correta. Corresponde ao art. 2º, V, da Lei nº 15.436/2026.",
            "Incorreta. Ele não se limita a casos de aceleração.",
            "Incorreta. Evidências podem integrar registros, mas essa não é a finalidade do planejamento.",
            "Incorreta. A articulação entre profissionais é essencial."
        ],
        "dicaBanca": "A FGV 2024 já cobrou PEI em AH/SD com foco em personalização e desenvolvimento integral; a lei de 2026 fortaleceu esse ponto.",
        "pegadinha": "Individualizado não significa isolado nem feito por uma única pessoa.",
        "memorizar2026": "Planejamento individualizado = objetivos + estratégias + recursos + avaliação + atualização contínua.",
        "fonte": "Lei nº 15.436/2026, art. 2º, V; FGV Vitória 2024, questão 43."
    },
    {
        "id": "SEDUC-EE-AHSD-014",
        "numero": 14,
        "subtopico": "Enriquecimento curricular",
        "dificuldade": "media",
        "pergunta": "Um estudante termina rapidamente tarefas de Matemática e passa a receber, todos os dias, uma quantidade maior de exercícios do mesmo tipo. Para atender melhor a uma necessidade de enriquecimento, seria mais adequado",
        "alternativas": [
            "propor investigação, problemas mais complexos e aprofundamento, em vez de apenas aumentar exercícios repetitivos.",
            "manter o aumento de exercícios, pois enriquecimento horizontal significa oferecer mais itens sobre o mesmo conteúdo sem alteração de complexidade.",
            "retirar o estudante das aulas de Matemática e encaminhá-lo permanentemente ao AEE, onde poderá trabalhar conteúdos mais avançados.",
            "antecipar automaticamente todos os conteúdos do ano seguinte, pois enriquecimento e aceleração são estratégias equivalentes.",
            "oferecer somente atividades extracurriculares, evitando diferenciação em sala para preservar igualdade de oportunidades entre os estudantes."
        ],
        "correta": 0,
        "feedbackAcerto": "Você distinguiu enriquecimento de 'mais do mesmo'. O objetivo é ampliar profundidade, complexidade, conexões e oportunidades de produção.",
        "feedbackErro": "A quantidade de tarefas não garante enriquecimento. O desafio precisa ter intencionalidade e ampliar o desenvolvimento do potencial.",
        "analiseAlternativas": [
            "Correta. Aprofundamento, investigação e complexidade são respostas pedagógicas coerentes.",
            "Incorreta. Repetição quantitativa pode aumentar carga sem ampliar aprendizagem.",
            "Incorreta. AEE não substitui a classe comum.",
            "Incorreta. Enriquecimento e aceleração são estratégias distintas.",
            "Incorreta. Diferenciação em sala pode ser necessária para garantir equidade."
        ],
        "dicaBanca": "FGV tende a colocar 'mais exercícios' como solução intuitiva, mas enriquecimento envolve qualidade do desafio, não volume.",
        "pegadinha": "Mais tarefa ≠ mais enriquecimento.",
        "memorizar2026": "Enriquecer = aprofundar, conectar, investigar, criar.",
        "fonte": "Lei nº 15.436/2026, art. 8º; FGV Vitória 2024, questão 36."
    },
    {
        "id": "SEDUC-EE-AHSD-015",
        "numero": 15,
        "subtopico": "Inclusão na classe comum",
        "dificuldade": "alta",
        "pergunta": "Uma escola considera que, por ter AH/SD, um estudante não precisa de adaptações pedagógicas e deve acompanhar o currículo exatamente como os demais, pois já possui elevada capacidade de aprendizagem. Essa posição",
        "alternativas": [
            "é adequada quando o estudante possui alto rendimento, pois a Educação Especial deve priorizar apenas quem apresenta dificuldades para acessar o currículo.",
            "é adequada desde que o AEE ofereça enriquecimento no contraturno, mantendo-se a sala comum pedagogicamente idêntica para todos.",
            "é inadequada apenas quando houver dupla excepcionalidade, porque AH/SD isolada não gera necessidade educacional específica.",
            "é inadequada, pois inclusão pode exigir diferenciação, aprofundamento e flexibilização para responder às necessidades do estudante.",
            "é adequada porque qualquer diferenciação para estudantes com AH/SD configuraria privilégio e quebraria o princípio constitucional da igualdade."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou a lógica inclusiva: equidade também vale para quem necessita de maior profundidade, ritmo ou complexidade.",
        "feedbackErro": "A FGV Vitória 2024 já cobrou que inclusão de AH/SD exige estratégias específicas, e a Lei nº 15.436/2026 reforça diferenciação e progressão flexível.",
        "analiseAlternativas": [
            "Incorreta. Educação Especial inclui AH/SD mesmo quando não há dificuldade acadêmica.",
            "Incorreta. O AEE não exonera a sala comum de responder à diversidade.",
            "Incorreta. AH/SD por si só integra o público da Educação Especial.",
            "Correta. A resposta pedagógica pode envolver diferenciação e aprofundamento.",
            "Incorreta. Equidade não significa oferecer exatamente o mesmo percurso a todos."
        ],
        "dicaBanca": "A FGV frequentemente testa a falsa ideia de que 'quem aprende rápido não precisa de apoio'.",
        "pegadinha": "Necessidade educacional não é sinônimo de dificuldade.",
        "memorizar2026": "AH/SD também exige acessibilidade ao desafio e ao desenvolvimento do potencial.",
        "fonte": "FGV Vitória 2024, questão 42; Lei nº 15.436/2026, arts. 4º, 8º e 11."
    },
    {
        "id": "SEDUC-EE-AHSD-016",
        "numero": 16,
        "subtopico": "AEE em todos os níveis",
        "dificuldade": "alta",
        "pergunta": "A respeito do alcance do AEE para estudantes com AH/SD em 2026, assinale a afirmativa correta.",
        "alternativas": [
            "O AEE está restrito à educação básica obrigatória, encerrando-se quando o estudante conclui o Ensino Médio.",
            "Na educação superior, o atendimento depende exclusivamente de iniciativas voluntárias da instituição, porque a legislação federal não alcança esse nível.",
            "O AEE deve ser garantido em todos os níveis, etapas e modalidades de ensino, inclusive na educação superior, observada a regulamentação pertinente.",
            "O AEE na educação superior somente é previsto para estudantes com dupla excepcionalidade que também tenham deficiência ou TEA.",
            "A oferta de AEE para AH/SD na educação básica é facultativa quando a escola comprova programas de enriquecimento no currículo regular."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou uma inovação expressa da Lei nº 15.436/2026: a garantia inclui a educação superior.",
        "feedbackErro": "A lei nova estende o AEE a todos os níveis, etapas e modalidades, inclusive ao ensino superior, com acompanhamento da trajetória acadêmica e suporte socioemocional.",
        "analiseAlternativas": [
            "Incorreta. O art. 10 expressamente inclui todos os níveis.",
            "Incorreta. Existe previsão legal federal para a educação superior.",
            "Correta. É a regra do art. 10.",
            "Incorreta. A garantia não se limita à dupla excepcionalidade.",
            "Incorreta. Enriquecimento regular não elimina o direito ao AEE quando necessário."
        ],
        "dicaBanca": "Questão nova de lei: atenção ao termo 'inclusive na educação superior'.",
        "pegadinha": "Não limite Educação Especial/AEE à educação básica por hábito de estudo antigo.",
        "memorizar2026": "AH/SD: AEE inclusive no ensino superior.",
        "fonte": "Lei nº 15.436/2026, art. 10."
    },
    {
        "id": "SEDUC-EE-AHSD-017",
        "numero": 17,
        "subtopico": "Laudo e identificação pedagógica",
        "dificuldade": "alta",
        "pergunta": "Uma escola informa à família que só poderá registrar o estudante no AEE por AH/SD depois da apresentação de laudo médico ou psicológico conclusivo. À luz das orientações atuais do MEC/Inep, essa exigência é",
        "alternativas": [
            "adequada, porque o Censo Escolar exige comprovação clínica para evitar registros indevidos de altas habilidades ou superdotação.",
            "inadequada, pois o acesso ao AEE não deve depender de laudo de saúde, podendo apoiar-se em estudo e parecer pedagógicos.",
            "adequada apenas em escolas públicas, porque os recursos do Fundeb exigem diagnóstico formal para dupla contabilização da matrícula.",
            "inadequada somente quando o estudante já tiver sido premiado em olimpíadas nacionais, situação em que o alto desempenho substitui qualquer avaliação.",
            "adequada quando o estudante apresenta dupla excepcionalidade, pois a condição associada precisa ser comprovada antes de reconhecer AH/SD."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou a orientação atual: laudo de saúde não deve funcionar como condição de acesso ao AEE.",
        "feedbackErro": "MEC/Inep destacam que a identificação não fica bloqueada pela ausência de laudo médico; o foco educacional é o parecer e a análise pedagógica.",
        "analiseAlternativas": [
            "Incorreta. O Censo Escolar não adota laudo médico como condição única para registro.",
            "Correta. A exigência de laudo como barreira de acesso contraria a orientação vigente.",
            "Incorreta. A lógica de financiamento não autoriza exigir diagnóstico clínico como porta de entrada.",
            "Incorreta. Olimpíada é evidência possível, não substituto automático do processo.",
            "Incorreta. Dupla excepcionalidade também não autoriza negar AH/SD pela ausência de laudo."
        ],
        "dicaBanca": "A FGV gosta de distratores com aparência de 'controle administrativo'. Separe exigência burocrática de necessidade pedagógica.",
        "pegadinha": "Laudo pode subsidiar; não pode ser catraca de acesso ao AEE.",
        "memorizar2026": "AEE não condicionado a laudo de saúde.",
        "fonte": "MEC, notícia sobre Censo Escolar 2026; Decreto nº 12.686/2025; Portaria MEC nº 421/2026; Inep 2026.",
        "atualizacao2026": "Em julho/agosto de 2026, MEC/Inep reforçaram que o laudo médico não é determinante para identificação no Censo Escolar."
    },
    {
        "id": "SEDUC-EE-AHSD-018",
        "numero": 18,
        "subtopico": "Tecnologias e desenvolvimento de potencial",
        "dificuldade": "media",
        "pergunta": "Em um projeto para estudante com AH/SD interessado em astronomia, o professor do AEE propõe uso de simuladores, bases de dados científicas e programação para investigar fenômenos e produzir modelos. Essa escolha é adequada porque",
        "alternativas": [
            "a tecnologia substitui a mediação pedagógica quando o estudante demonstra autonomia elevada e interesse intenso por uma área.",
            "recursos digitais são recomendados principalmente para entreter estudantes que concluem as atividades antes dos colegas.",
            "estudantes com AH/SD devem trabalhar prioritariamente com tecnologia para compensar dificuldades de adaptação ao currículo regular.",
            "tecnologias podem ampliar investigação, criação e aprofundamento quando integradas a objetivos pedagógicos.",
            "o AEE para AH/SD deve privilegiar recursos de alta tecnologia, pois materiais de baixa tecnologia não produzem nível suficiente de desafio cognitivo."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu a tecnologia como meio para investigar, criar e aprofundar, e não como fim em si mesma.",
        "feedbackErro": "A FGV Vitória 2024 cobrou diretamente o papel das tecnologias no desenvolvimento das potencialidades de estudantes com AH/SD.",
        "analiseAlternativas": [
            "Incorreta. Autonomia não elimina mediação e planejamento.",
            "Incorreta. Tecnologia educacional não se reduz a passatempo.",
            "Incorreta. O objetivo não é compensar uma deficiência inerente ao estudante.",
            "Correta. Integra recurso, objetivo pedagógico e desenvolvimento do potencial.",
            "Incorreta. O valor do recurso depende da função pedagógica, não de ser tecnologicamente sofisticado."
        ],
        "dicaBanca": "FGV já usou exatamente a oposição 'tecnologia como entretenimento' × 'tecnologia para desenvolver potencial'.",
        "pegadinha": "Ferramenta sofisticada sem objetivo pedagógico continua sendo apenas ferramenta.",
        "memorizar2026": "Tecnologia + investigação + criação + propósito pedagógico.",
        "fonte": "FGV Vitória 2024, questão 41."
    },
    {
        "id": "SEDUC-EE-AHSD-019",
        "numero": 19,
        "subtopico": "Família, escola e comunidade",
        "dificuldade": "media",
        "pergunta": "A Política Nacional para Estudantes com AH/SD estabelece como princípio",
        "alternativas": [
            "a integração entre família, escola e comunidade como elemento essencial ao desenvolvimento integral do estudante.",
            "a autonomia técnica da escola para conduzir identificação e atendimento sem participação familiar, evitando interferências subjetivas no processo pedagógico.",
            "a centralidade da família na escolha dos conteúdos curriculares do estudante, inclusive para decidir unilateralmente sobre aceleração de estudos.",
            "a responsabilidade prioritária dos centros de referência, cabendo à escola regular apenas encaminhar estudantes com indicadores de AH/SD.",
            "a participação da comunidade apenas em atividades extracurriculares, mantendo planejamento e avaliação sob responsabilidade exclusiva do professor do AEE."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu a integração família–escola–comunidade como princípio expresso da nova lei.",
        "feedbackErro": "A política não transfere a responsabilidade para a família nem para centros especializados. Ela pressupõe articulação e corresponsabilidade.",
        "analiseAlternativas": [
            "Correta. É princípio previsto no art. 3º da Lei nº 15.436/2026.",
            "Incorreta. A participação familiar é valorizada, não excluída.",
            "Incorreta. Participação não significa decisão unilateral sobre currículo ou aceleração.",
            "Incorreta. Centros de referência apoiam; não substituem a escola.",
            "Incorreta. A articulação é mais ampla que atividades extracurriculares."
        ],
        "dicaBanca": "Na FGV, respostas colaborativas costumam vencer alternativas que concentram toda responsabilidade em um único profissional ou instituição.",
        "pegadinha": "Corresponsabilidade ≠ transferência de responsabilidade.",
        "memorizar2026": "AH/SD: família + escola + comunidade.",
        "fonte": "Lei nº 15.436/2026, arts. 3º, IV, e 4º, VI."
    },
    {
        "id": "SEDUC-EE-AHSD-020",
        "numero": 20,
        "subtopico": "Equidade e subidentificação",
        "dificuldade": "alta",
        "pergunta": "Ao planejar ações de busca ativa e identificação de AH/SD, uma rede decide concentrar avaliações apenas em escolas de alto desempenho e em estudantes indicados por professores de Matemática e Língua Portuguesa. À luz da Lei nº 15.436/2026, a principal crítica é que a medida",
        "alternativas": [
            "é adequada, pois prioriza ambientes em que a probabilidade estatística de encontrar alto potencial acadêmico é maior.",
            "é insuficiente apenas por não incluir a área artística, já que a lei determina um conjunto fechado de áreas de manifestação a serem avaliadas.",
            "é adequada desde que a rede também ofereça testes de QI a estudantes com médias escolares acima do percentil definido.",
            "é inadequada somente porque deveria incluir olimpíadas científicas como critério obrigatório de triagem para evitar falsos positivos.",
            "pode reproduzir vieses de identificação e contrariar a equidade no acesso ao reconhecimento e ao AEE."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou um princípio novo e muito cobrável: a política exige atenção explícita à equidade no acesso à identificação e ao AEE.",
        "feedbackErro": "Restringir a busca a escolas de alto desempenho ou a áreas acadêmicas tradicionais pode invisibilizar estudantes de diferentes contextos e perfis.",
        "analiseAlternativas": [
            "Incorreta. A política busca equidade, não apenas eficiência estatística baseada em desempenho prévio.",
            "Incorreta. A lei não cria taxonomia fechada de áreas como condição de identificação.",
            "Incorreta. Teste e média escolar não corrigem os vieses de acesso descritos.",
            "Incorreta. Olimpíadas não são critério obrigatório de triagem.",
            "Correta. O art. 3º, V, explicita essas dimensões de equidade."
        ],
        "dicaBanca": "Essa é uma ótima pegadinha FGV: uma política aparentemente 'eficiente' pode ser discriminatória pela forma de selecionar quem será visto.",
        "pegadinha": "Subidentificação também é barreira de inclusão.",
        "memorizar2026": "Equidade na identificação: socioeconômica + regional + étnico-racial + sexo.",
        "fonte": "Lei nº 15.436/2026, art. 3º, V."
    },
    {
        "id": "SEDUC-EE-AHSD-021",
        "numero": 21,
        "subtopico": "Cadastro Nacional de AH/SD",
        "dificuldade": "alta",
        "pergunta": "A Lei nº 15.436/2026 instituiu, no âmbito do Ministério da Educação, o Cadastro Nacional de Estudantes com Altas Habilidades ou Superdotação. Entre suas finalidades está",
        "alternativas": [
            "substituir o Censo Escolar e o Censo da Educação Superior como fontes oficiais de dados sobre AH/SD.",
            "reunir apenas estudantes da educação básica identificados por centros de referência, excluindo o ensino superior.",
            "mapear trajetórias educacionais e subsidiar planejamento, implementação e avaliação de políticas públicas.",
            "autorizar a matrícula no AEE somente depois da validação nacional do diagnóstico do estudante na plataforma do MEC.",
            "classificar estudantes por grau de superdotação para determinar prioridades de financiamento e progressão escolar."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou a finalidade pública do cadastro: produzir base para acompanhamento e políticas, não criar autorização individual de direitos.",
        "feedbackErro": "O cadastro integra dados de diferentes censos e deve respeitar proteção de dados. Ele não substitui o Censo nem funciona como porta de entrada para AEE.",
        "analiseAlternativas": [
            "Incorreta. A lei prevê integração de dados provenientes dos censos, não substituição.",
            "Incorreta. O cadastro abrange também educação superior.",
            "Correta. Essa é uma finalidade expressa no art. 17.",
            "Incorreta. O cadastro não condiciona o direito ao AEE.",
            "Incorreta. A lei não cria classificação por 'grau de superdotação'."
        ],
        "dicaBanca": "Lei nova + cadastro nacional = forte candidato a questão literal de concurso.",
        "pegadinha": "Cadastro informa política; não 'autoriza' o estudante a ter direitos.",
        "memorizar2026": "Cadastro Nacional: mapear trajetórias e subsidiar políticas.",
        "fonte": "Lei nº 15.436/2026, arts. 17 a 19.",
        "atualizacao2026": "O Cadastro Nacional foi instituído em 2026 e integra a Infraestrutura Nacional de Dados da Educação."
    },
    {
        "id": "SEDUC-EE-AHSD-022",
        "numero": 22,
        "subtopico": "Centros de referência e NAAH/S",
        "dificuldade": "alta",
        "pergunta": "Sobre os centros de referência em AH/SD previstos na Lei nº 15.436/2026, assinale a afirmativa correta.",
        "alternativas": [
            "Substituem a escola regular na escolarização de estudantes com AH/SD, oferecendo currículo próprio e atendimento em tempo integral.",
            "Devem funcionar exclusivamente em estruturas novas construídas pela União, sendo vedado aproveitar NAAH/S ou espaços já existentes.",
            "Têm como função principal emitir laudos de superdotação e selecionar estudantes aptos à aceleração integral de série.",
            "podem apoiar planejamento, formação, pesquisa, enriquecimento e parcerias; NAAH/S existentes podem ser adequados à implantação.",
            "Atendem apenas estudantes com dupla excepcionalidade, porque os demais devem ser acompanhados diretamente pelas escolas comuns e salas de recursos."
        ],
        "correta": 3,
        "feedbackAcerto": "Você compreendeu o papel dos centros como rede de apoio, desenvolvimento e articulação, e não como substitutos da escola comum.",
        "feedbackErro": "A lei permite aproveitar estruturas como NAAH/S e atribui aos centros funções de formação, pesquisa, apoio ao planejamento, enriquecimento e articulação.",
        "analiseAlternativas": [
            "Incorreta. Centros não substituem a escolarização comum.",
            "Incorreta. A lei permite adequação de estruturas existentes, inclusive NAAH/S.",
            "Incorreta. Emissão de laudo não é sua finalidade central nem condição de acesso.",
            "Correta. Resume arts. 13 a 16 da Lei nº 15.436/2026.",
            "Incorreta. O atendimento não se restringe à dupla excepcionalidade."
        ],
        "dicaBanca": "FGV costuma perguntar 'qual é a função' de serviços e equipes. Desconfie de alternativas que transformem apoio em substituição.",
        "pegadinha": "Centro de referência apoia a rede; não vira 'escola especial de superdotados'.",
        "memorizar2026": "Centros: apoio + formação + pesquisa + enriquecimento + parcerias.",
        "fonte": "Lei nº 15.436/2026, arts. 13 a 16."
    },
    {
        "id": "SEDUC-EE-AHSD-023",
        "numero": 23,
        "subtopico": "FGV — teorias e indicadores",
        "dificuldade": "alta",
        "pergunta": "Um candidato afirma: “Todo estudante com AH/SD terá QI muito elevado, altas notas e desempenho superior em todas as áreas; caso contrário, a hipótese deve ser descartada.” À luz das teorias e das provas recentes da FGV, essa afirmação é",
        "alternativas": [
            "correta, pois a identificação educacional exige convergência entre QI, notas e superioridade acadêmica global.",
            "incorreta, porque AH/SD pode aparecer em diferentes áreas e perfis, sem exigir desempenho superior uniforme nem QI como critério absoluto.",
            "incorreta apenas em estudantes com dupla excepcionalidade, pois nos demais o alto rendimento global continua sendo característica definidora.",
            "correta quando se utiliza o Modelo dos Três Anéis, já que habilidade acima da média equivale a QI elevado em todas as áreas.",
            "incorreta somente na dimensão criativa, pois criatividade pode ocorrer sem alto QI, enquanto as demais áreas dependem de rendimento acadêmico elevado."
        ],
        "correta": 1,
        "feedbackAcerto": "Você neutralizou três mitos de uma vez: QI obrigatório, notas altas e superioridade em todas as áreas.",
        "feedbackErro": "FGV 2024 e 2026 trabalharam explicitamente múltiplas áreas, inteligência multifacetada e superação da visão psicométrica.",
        "analiseAlternativas": [
            "Incorreta. Essa convergência rígida não é exigida.",
            "Correta. Perfis são variados e a manifestação pode ser específica ou contextual.",
            "Incorreta. A diversidade de perfis não se limita à dupla excepcionalidade.",
            "Incorreta. Renzulli não equivale 'habilidade acima da média' a QI global.",
            "Incorreta. Outras áreas também não dependem de alto rendimento escolar global."
        ],
        "dicaBanca": "A FGV gosta de absolutizações: 'todo', 'sempre', 'em todas as áreas'. Em AH/SD, elas frequentemente denunciam estereótipos.",
        "pegadinha": "Superdotação não exige excelência universal.",
        "memorizar2026": "Nem todo superdotado tem notas altas; nem toda alta nota é superdotação.",
        "fonte": "FGV SEDUC-SP 2026, questões 11, 12 e 15; FGV Vitória 2024, questões 35 e 45."
    },
    {
        "id": "SEDUC-EE-AHSD-024",
        "numero": 24,
        "subtopico": "Caso — dupla excepcionalidade e baixo rendimento",
        "dificuldade": "alta",
        "pergunta": "Uma aluna demonstra soluções matemáticas originais e raciocínio muito avançado, mas apresenta dislexia e rendimento irregular em avaliações escritas. A equipe decide não investigar AH/SD porque suas notas não são altas. A conduta mais adequada é",
        "alternativas": [
            "manter a investigação de AH/SD, considerando possível dupla excepcionalidade e múltiplas evidências, sem deixar que as notas ocultem o potencial.",
            "descartar AH/SD até que a estudante eleve suas notas, pois a identificação requer desempenho acadêmico estável ao longo de pelo menos um ano letivo.",
            "tratar exclusivamente a dislexia e só avaliar AH/SD depois da remissão das dificuldades de leitura e escrita, evitando interferência entre as condições.",
            "reconhecer AH/SD automaticamente pela originalidade das soluções e encaminhar aceleração integral, dispensando estudo pedagógico mais amplo.",
            "usar apenas avaliação de QI para decidir entre dislexia e AH/SD, pois as duas condições não podem coexistir no mesmo estudante."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu a dupla excepcionalidade e o risco de mascaramento recíproco entre potencial elevado e dificuldade específica.",
        "feedbackErro": "A Lei nº 15.436/2026 proíbe usar a condição associada para negar AH/SD e orienta planejamento integrado.",
        "analiseAlternativas": [
            "Correta. A investigação deve considerar as duas dimensões e múltiplas evidências.",
            "Incorreta. Notas irregulares podem mascarar o potencial.",
            "Incorreta. Não se deve suspender o desenvolvimento do talento até 'resolver' a outra condição.",
            "Incorreta. Um indicador forte não autoriza reconhecimento automático nem aceleração automática.",
            "Incorreta. Dislexia e AH/SD podem coexistir."
        ],
        "dicaBanca": "Caso clássico de FGV: a alternativa correta costuma rejeitar o 'ou/ou' e trabalhar com coexistência e integração.",
        "pegadinha": "Baixo rendimento não exclui AH/SD.",
        "memorizar2026": "Dupla excepcionalidade pode mascarar talento e dificuldade ao mesmo tempo.",
        "fonte": "Lei nº 15.436/2026, arts. 2º, II, e 9º; Inep 2026."
    },
    {
        "id": "SEDUC-EE-AHSD-025",
        "numero": 25,
        "subtopico": "Síntese normativa e pedagógica",
        "dificuldade": "alta",
        "pergunta": "Considere as afirmações sobre AH/SD no cenário normativo de 2026:\n\nI. O AEE para AH/SD possui caráter suplementar.\nII. A Lei nº 15.436/2026 admite progressão acelerada parcial por disciplina ou área do conhecimento.\nIII. A dupla excepcionalidade pode justificar negar o reconhecimento de AH/SD até que a condição associada seja tratada.\nIV. Enriquecimento, diferenciação ou aprofundamento curricular podem integrar o AEE.\n\nEstá correto o que se afirma em",
        "alternativas": [
            "I e II, apenas.",
            "II e III, apenas.",
            "I, III e IV, apenas.",
            "II, III e IV, apenas.",
            "I, II e IV, apenas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você integrou corretamente o núcleo normativo atual: AEE suplementar, aceleração parcial possível e enriquecimento/diferenciação/aprofundamento. A afirmativa III viola expressamente a lei.",
        "feedbackErro": "A condição associada não pode ser usada para negar AH/SD. Esse é o erro que contamina qualquer combinação contendo III.",
        "analiseAlternativas": [
            "Incorreta. A afirmativa IV também é verdadeira.",
            "Incorreta. III é falsa e I também é verdadeira.",
            "Incorreta. III é falsa.",
            "Incorreta. III torna o conjunto incorreto.",
            "Correta. I, II e IV estão de acordo com o Decreto nº 12.686/2025 e a Lei nº 15.436/2026."
        ],
        "dicaBanca": "FGV usa muito combinações I/II/III/IV. Resolva primeiro cada afirmativa e só depois compare as alternativas.",
        "pegadinha": "A palavra-chave da III é 'negar': a lei diz exatamente o contrário.",
        "memorizar2026": "2026: suplementar + enriquecer/diferenciar/aprofundar + progressão flexível + dupla excepcionalidade integrada.",
        "fonte": "Decreto nº 12.686/2025, art. 5º; Lei nº 15.436/2026, arts. 8º, 9º e 11.",
        "afirmacoes": [
            "I. O AEE para AH/SD possui caráter suplementar.",
            "II. A Lei nº 15.436/2026 admite progressão acelerada parcial por disciplina ou área do conhecimento.",
            "III. A dupla excepcionalidade pode justificar negar o reconhecimento de AH/SD até que a condição associada seja tratada.",
            "IV. Enriquecimento, diferenciação ou aprofundamento curricular podem integrar o AEE."
        ]
    }
];

    window.seducEducacaoEspecialAltasHabilidades2026 = banco;
})();
