/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 17: Ética Profissional
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 09/09/2026.
   Bases centrais: CF/88, LDB, ECA, LBI, LGPD, Lei Estadual
   nº 5.810/1994 e atualização SEDUC-PA Portaria nº 19/2026.
========================================================== */

(function(){
    "use strict";

    const banco = 
[
    {
        "id": "SEDUC-EE-ETICA-001",
        "numero": 1,
        "subtopico": "Ética pública — princípios constitucionais",
        "dificuldade": "media",
        "pergunta": "Em uma escola estadual, a direção decide priorizar o pedido de um conhecido na distribuição de um benefício administrativo, embora outros estudantes estejam em situação equivalente e tenham solicitado antes. À luz dos princípios que regem a Administração Pública, a conduta mais adequada é",
        "alternativas": [
            "adotar critérios objetivos e impessoais, vinculados às regras aplicáveis e ao interesse público.",
            "atender primeiro quem possui relação pessoal com a gestão, desde que a decisão seja registrada formalmente.",
            "escolher livremente quem será beneficiado, pois a autonomia administrativa afasta a necessidade de critérios uniformes.",
            "considerar a proximidade com a equipe escolar como fator legítimo de preferência quando houver recursos escassos.",
            "substituir os critérios administrativos por decisão discricionária da direção, ainda que não haja fundamento objetivo."
        ],
        "correta": 0,
        "feedbackAcerto": "Você aplicou corretamente a impessoalidade e a moralidade administrativa. A decisão pública deve ser orientada por critérios objetivos, legais e justificáveis, e não por relações pessoais.",
        "feedbackErro": "A situação descreve favorecimento pessoal. No serviço público, a decisão deve respeitar legalidade, impessoalidade, moralidade, publicidade e eficiência, sem transformar vínculos privados em vantagem administrativa.",
        "analiseAlternativas": [
            "Correta. Critérios objetivos e impessoais protegem o interesse público e evitam favorecimento.",
            "Incorreta. Registrar formalmente não torna legítima uma preferência fundada em relação pessoal.",
            "Incorreta. Discricionariedade não elimina a submissão aos princípios constitucionais.",
            "Incorreta. Proximidade com a equipe não é critério ético ou jurídico de preferência.",
            "Incorreta. A Administração não pode substituir regras e critérios por vontade pessoal da autoridade."
        ],
        "dicaBanca": "A FGV costuma transformar princípios abstratos em casos concretos de favorecimento, conflito de interesse e tomada de decisão.",
        "pegadinha": "Impessoalidade não significa frieza; significa afastar privilégios pessoais na decisão pública.",
        "memorizar2026": "CF, art. 37: legalidade + impessoalidade + moralidade + publicidade + eficiência.",
        "fonte": "Constituição Federal, art. 37, caput."
    },
    {
        "id": "SEDUC-EE-ETICA-002",
        "numero": 2,
        "subtopico": "LDB — deveres docentes e família",
        "dificuldade": "media",
        "pergunta": "Uma professora afirma que sua responsabilidade se encerra na sala de aula e que não lhe cabe participar de ações de articulação com as famílias. Segundo a LDB, essa afirmação é",
        "alternativas": [
            "correta, porque a comunicação com a família é atribuição exclusiva da direção e da coordenação pedagógica.",
            "incorreta, pois o docente também deve colaborar na articulação da escola com as famílias e a comunidade.",
            "correta, desde que a professora cumpra o plano de trabalho e ministre integralmente os dias letivos previstos.",
            "incorreta apenas quando o estudante possui deficiência, porque nesses casos a família integra obrigatoriamente o AEE.",
            "correta nas escolas públicas, em que a gestão democrática transfere às instâncias colegiadas a relação com as famílias."
        ],
        "correta": 1,
        "feedbackAcerto": "Você identificou a literalidade do art. 13 da LDB: além de zelar pela aprendizagem, o docente deve colaborar com as atividades de articulação da escola com as famílias e a comunidade.",
        "feedbackErro": "A LDB não restringe a atuação docente à aula. O art. 13 inclui participação na proposta pedagógica, plano de trabalho, zelo pela aprendizagem, recuperação, planejamento e articulação com famílias e comunidade.",
        "analiseAlternativas": [
            "Incorreta. A articulação com famílias não é tarefa exclusiva da direção.",
            "Correta. É dever docente expressamente previsto na LDB.",
            "Incorreta. Cumprir outros deveres não elimina a obrigação de articulação com famílias e comunidade.",
            "Incorreta. O dever vale para a atuação docente em geral, não só na Educação Especial.",
            "Incorreta. Gestão democrática não retira do professor sua responsabilidade pedagógica."
        ],
        "dicaBanca": "Quando a FGV cita deveres do professor, costuma misturar atribuições verdadeiras com exclusividades inexistentes.",
        "pegadinha": "‘Não é só dar aula’ é uma boa chave de memória para o art. 13 da LDB.",
        "memorizar2026": "Docente: planejar + ensinar + zelar pela aprendizagem + colaborar com família/comunidade.",
        "fonte": "LDB — Lei nº 9.394/1996, art. 13."
    },
    {
        "id": "SEDUC-EE-ETICA-003",
        "numero": 3,
        "subtopico": "ECA — respeito e dignidade",
        "dificuldade": "media",
        "pergunta": "Após um estudante com deficiência errar repetidamente uma atividade, o professor projeta sua prova para a turma e usa o desempenho do aluno como exemplo de “falta de esforço”. À luz do ECA e de uma prática profissional ética, a conduta é",
        "alternativas": [
            "adequada, se a intenção pedagógica for demonstrar à turma a importância do esforço individual.",
            "admissível, desde que o nome do estudante não seja mencionado durante a exposição do material.",
            "inadequada, pois expõe o estudante a constrangimento e viola seu direito ao respeito e à dignidade.",
            "aceitável, se o professor tiver autorização verbal da coordenação pedagógica para utilizar a atividade em sala.",
            "inadequada apenas se o estudante for menor de 14 anos, pois adolescentes possuem maior autonomia sobre sua imagem."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu que o estudante é sujeito de direitos. O ECA protege sua integridade psíquica e moral, imagem, identidade e dignidade, vedando tratamento vexatório ou constrangedor.",
        "feedbackErro": "O objetivo pedagógico não legitima exposição humilhante. O educador deve corrigir, orientar e avaliar sem transformar o erro do estudante em constrangimento público.",
        "analiseAlternativas": [
            "Incorreta. Finalidade pedagógica não autoriza tratamento vexatório.",
            "Incorreta. Mesmo sem nome, a situação pode permitir identificação e produzir humilhação.",
            "Correta. A exposição descrita conflita com os direitos ao respeito e à dignidade.",
            "Incorreta. Autorização interna não supera os direitos protegidos pelo ECA.",
            "Incorreta. A proteção à dignidade e à imagem alcança crianças e adolescentes."
        ],
        "dicaBanca": "A FGV costuma apresentar uma finalidade aparentemente positiva e perguntar se ela legitima um meio inadequado.",
        "pegadinha": "Boa intenção não neutraliza uma prática humilhante.",
        "memorizar2026": "ECA: respeito = integridade física, psíquica e moral + imagem + identidade + autonomia.",
        "fonte": "ECA — Lei nº 8.069/1990, arts. 17, 18 e 53, II."
    },
    {
        "id": "SEDUC-EE-ETICA-004",
        "numero": 4,
        "subtopico": "LBI — discriminação e adaptação razoável",
        "dificuldade": "alta",
        "pergunta": "Uma escola recusa uma adaptação razoável solicitada para um estudante com deficiência sob o argumento de que “todos devem realizar a atividade exatamente da mesma forma”. De acordo com a Lei Brasileira de Inclusão, essa recusa",
        "alternativas": [
            "é compatível com a igualdade formal, porque adaptações individuais criam tratamento privilegiado no processo avaliativo.",
            "é válida quando a atividade integra o currículo comum, pois adaptações só podem ser utilizadas no AEE.",
            "é admissível se a escola oferecer atendimento especializado em turno diferente, ainda que a barreira permaneça na sala comum.",
            "pode configurar discriminação, pois a LBI inclui a recusa de adaptação razoável nesse conceito.",
            "somente seria discriminatória se a escola impedisse a matrícula, não quando a restrição ocorrer durante a aprendizagem."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou a definição legal da LBI. A discriminação pode ocorrer por ação ou omissão e inclui expressamente a recusa de adaptações razoáveis e de tecnologias assistivas.",
        "feedbackErro": "A igualdade de oportunidades não exige tratamento idêntico. Quando uma adaptação razoável é necessária para remover barreira, recusá-la pode produzir discriminação.",
        "analiseAlternativas": [
            "Incorreta. Equidade e adaptação razoável não são privilégios.",
            "Incorreta. Acessibilidade deve alcançar também a classe comum e o currículo.",
            "Incorreta. AEE não compensa automaticamente barreiras mantidas na escolarização comum.",
            "Correta. A LBI inclui a recusa de adaptação razoável no conceito de discriminação.",
            "Incorreta. Discriminação pode ocorrer em qualquer etapa do acesso, permanência, participação e aprendizagem."
        ],
        "dicaBanca": "A FGV gosta de usar ‘tratar todos igual’ como distrator para testar equidade e adaptação razoável.",
        "pegadinha": "Igualdade de direitos pode exigir apoios diferentes.",
        "memorizar2026": "LBI, art. 4º, §1º: recusa de adaptação razoável pode ser discriminação.",
        "fonte": "LBI — Lei nº 13.146/2015, arts. 4º, 27 e 28."
    },
    {
        "id": "SEDUC-EE-ETICA-005",
        "numero": 5,
        "subtopico": "Expectativas pedagógicas e capacitismo",
        "dificuldade": "media",
        "pergunta": "Uma professora decide, sem avaliação pedagógica, que um estudante com deficiência intelectual não deverá participar de atividades de investigação porque “esse tipo de tarefa é avançado demais para ele”. A resposta profissional mais adequada é",
        "alternativas": [
            "manter sua participação, identificar barreiras e organizar apoios, sem presumir incapacidade pelo diagnóstico.",
            "substituir de forma permanente as atividades investigativas por tarefas repetitivas de menor complexidade.",
            "encaminhar todas as decisões sobre o currículo ao professor do AEE, que deverá definir o que o estudante pode aprender.",
            "aguardar um laudo médico detalhar previamente os limites cognitivos antes de permitir participação em novas atividades.",
            "preservar o estudante de situações desafiadoras para evitar frustração e garantir uma experiência escolar emocionalmente segura."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou uma postura ética e inclusiva: o diagnóstico não determina, sozinho, o potencial de aprendizagem. A escola deve observar o estudante, remover barreiras e ajustar apoios.",
        "feedbackErro": "O erro do caso é transformar a deficiência em previsão automática de incapacidade. Ética profissional e educação inclusiva exigem altas expectativas realistas, participação e decisões baseadas em evidências pedagógicas.",
        "analiseAlternativas": [
            "Correta. Mantém participação e individualiza apoios sem criar rótulo de incapacidade.",
            "Incorreta. Simplificação permanente e automática pode produzir exclusão curricular.",
            "Incorreta. O AEE articula apoios; não substitui a responsabilidade do professor da classe comum.",
            "Incorreta. Laudo não deve ser condição para participação e planejamento pedagógico.",
            "Incorreta. Proteção não pode se converter em privação sistemática de oportunidades de aprendizagem."
        ],
        "dicaBanca": "FGV costuma testar se o candidato percebe uma prática capacitista escondida sob linguagem de proteção ou cuidado.",
        "pegadinha": "Proteger não é retirar oportunidades.",
        "memorizar2026": "Diagnóstico informa; não sentencia potencial de aprendizagem.",
        "fonte": "LBI — Lei nº 13.146/2015, arts. 4º, 27 e 28; Decreto nº 12.686/2025."
    },
    {
        "id": "SEDUC-EE-ETICA-006",
        "numero": 6,
        "subtopico": "RJU-PA — ordem manifestamente ilegal",
        "dificuldade": "alta",
        "pergunta": "Um superior determina a um servidor da SEDUC que altere deliberadamente um registro escolar para favorecer determinado estudante. À luz da Lei Estadual nº 5.810/1994, o servidor deve",
        "alternativas": [
            "cumprir a ordem e depois registrar ressalva, porque a hierarquia prevalece enquanto não houver decisão judicial em contrário.",
            "recusar a execução de ordem manifestamente ilegal e representar contra a irregularidade pelos meios adequados.",
            "cumprir parcialmente a ordem, alterando apenas informações que não produzam vantagem financeira direta.",
            "aguardar autorização de outro superior antes de decidir, pois o servidor não pode avaliar a legalidade de ordens hierárquicas.",
            "executar a ordem se houver confirmação por escrito, porque a responsabilidade será transferida integralmente à autoridade."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou corretamente o regime jurídico paraense: a obediência às ordens superiores não alcança ordens manifestamente ilegais, e o servidor tem dever de representação contra irregularidades.",
        "feedbackErro": "A hierarquia não transforma ilegalidade em dever funcional. A Lei nº 5.810/1994 prevê obediência, exceto diante de ordem manifestamente ilegal, e também impõe representação contra irregularidades.",
        "analiseAlternativas": [
            "Incorreta. Ordem manifestamente ilegal não deve ser cumprida.",
            "Correta. A recusa e a representação são compatíveis com os deveres funcionais.",
            "Incorreta. A ilegalidade não se torna aceitável por ser executada parcialmente.",
            "Incorreta. O próprio estatuto ressalva a obrigação de obedecer ordem manifestamente ilegal.",
            "Incorreta. Ordem escrita não elimina a responsabilidade de quem pratica ato manifestamente ilegal."
        ],
        "dicaBanca": "Questões FGV de ética pública costumam explorar conflito entre hierarquia e legalidade.",
        "pegadinha": "Hierarquia não autoriza ilegalidade.",
        "memorizar2026": "RJU-PA: obedecer, salvo ordem manifestamente ilegal; representar contra irregularidades.",
        "fonte": "Lei Estadual nº 5.810/1994, art. 177, IV, VI e VIII."
    },
    {
        "id": "SEDUC-EE-ETICA-007",
        "numero": 7,
        "subtopico": "RJU-PA — discrição e sigilo",
        "dificuldade": "media",
        "pergunta": "Um professor recebe, em razão de sua função, informação confidencial sobre a condição de saúde de um estudante e a compartilha em um grupo informal de mensagens sem finalidade pedagógica. Segundo o regime jurídico dos servidores do Pará, essa conduta",
        "alternativas": [
            "é permitida se todos os participantes do grupo forem servidores públicos da mesma unidade escolar.",
            "é aceitável quando a informação puder explicar comportamentos observados em sala, ainda que não haja necessidade funcional.",
            "é vedada se o fato conhecido em razão do cargo deve permanecer em sigilo, além de contrariar o dever de discrição.",
            "somente é proibida se houver documento médico anexado, pois a comunicação oral não se submete ao dever de sigilo.",
            "é regular quando não houver intenção de prejudicar o estudante, porque a infração depende de resultado danoso comprovado."
        ],
        "correta": 2,
        "feedbackAcerto": "Você identificou dois pontos do RJU-PA: discrição é dever funcional e revelar fato conhecido em razão do cargo que deva permanecer em sigilo é vedado.",
        "feedbackErro": "O fato de os destinatários serem colegas não torna todo compartilhamento legítimo. Informações protegidas devem circular apenas quando houver finalidade e necessidade funcional.",
        "analiseAlternativas": [
            "Incorreta. Vínculo funcional dos participantes não autoriza compartilhamento indiscriminado.",
            "Incorreta. Curiosidade ou conveniência não substituem necessidade pedagógica ou administrativa.",
            "Correta. O estatuto protege fatos que devam permanecer em sigilo e exige discrição.",
            "Incorreta. O dever não depende de o dado estar em documento formal.",
            "Incorreta. A vedação não exige demonstração de intenção de causar dano para existir."
        ],
        "dicaBanca": "A FGV costuma diferenciar ‘compartilhar com a equipe’ de ‘expor a equipe inteira sem necessidade’.",
        "pegadinha": "Equipe não significa acesso irrestrito.",
        "memorizar2026": "Discrição + finalidade + necessidade no tratamento da informação.",
        "fonte": "Lei Estadual nº 5.810/1994, arts. 177, III, e 178, II."
    },
    {
        "id": "SEDUC-EE-ETICA-008",
        "numero": 8,
        "subtopico": "LGPD — dados de crianças e adolescentes",
        "dificuldade": "alta",
        "pergunta": "A escola pretende digitalizar relatórios de estudantes contendo informações de saúde e apoio educacional. À luz da LGPD, a conduta mais compatível com a proteção de dados é",
        "alternativas": [
            "armazenar todos os dados disponíveis por tempo indeterminado, pois instituições públicas possuem autorização ampla para tratamento.",
            "permitir acesso geral aos professores da rede, desde que cada servidor utilize senha individual para entrar no sistema.",
            "retirar apenas o nome do arquivo, mantendo identificadores indiretos, e considerar o dado automaticamente anonimizado.",
            "priorizar o melhor interesse do estudante, tratar apenas o necessário e adotar controle de acesso adequado.",
            "substituir todos os registros digitais por documentos impressos, porque a LGPD proíbe o tratamento eletrônico de dados sensíveis."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou os princípios centrais da proteção de dados: finalidade, necessidade, segurança e, para crianças e adolescentes, melhor interesse.",
        "feedbackErro": "A LGPD não proíbe o uso pedagógico ou administrativo de dados, mas exige base legal, finalidade legítima, necessidade, segurança e proteção reforçada quando envolve crianças e adolescentes.",
        "analiseAlternativas": [
            "Incorreta. Poder público não possui autorização ilimitada para coletar e conservar dados.",
            "Incorreta. Senha individual é importante, mas não justifica acesso por quem não necessita da informação.",
            "Incorreta. Retirar o nome não garante anonimização quando a pessoa ainda pode ser identificada.",
            "Correta. O melhor interesse e a minimização do tratamento são essenciais.",
            "Incorreta. A LGPD regula o tratamento digital e físico; não proíbe sistemas eletrônicos."
        ],
        "dicaBanca": "A FGV costuma apresentar uma medida de segurança isolada e tratá-la como se resolvesse finalidade e necessidade; não resolve.",
        "pegadinha": "Segurança não substitui necessidade.",
        "memorizar2026": "LGPD: melhor interesse + finalidade + necessidade + segurança.",
        "fonte": "LGPD — Lei nº 13.709/2018, arts. 5º, 11 e 14."
    },
    {
        "id": "SEDUC-EE-ETICA-009",
        "numero": 9,
        "subtopico": "Publicidade administrativa × privacidade",
        "dificuldade": "alta",
        "pergunta": "A coordenação sustenta que, por força do princípio constitucional da publicidade, todos os documentos escolares, inclusive relatórios individuais de saúde e apoio, devem ficar disponíveis a qualquer interessado. Essa interpretação é",
        "alternativas": [
            "correta, porque a publicidade administrativa prevalece sobre qualquer forma de confidencialidade no serviço público.",
            "incorreta, pois publicidade não autoriza divulgar dados pessoais protegidos sem fundamento legal.",
            "correta apenas para escolas públicas, já que instituições privadas não se submetem ao princípio da publicidade administrativa.",
            "incorreta somente quanto aos dados de saúde, podendo os demais dados pessoais ser divulgados livremente pela escola.",
            "correta quando os documentos forem produzidos com recursos públicos, independentemente da natureza da informação neles registrada."
        ],
        "correta": 1,
        "feedbackAcerto": "Você distinguiu transparência pública de exposição de dados pessoais. Publicidade administrativa convive com proteção da intimidade, da dignidade e de informações legalmente resguardadas.",
        "feedbackErro": "O princípio da publicidade não significa acesso irrestrito a todo dado pessoal. A Administração deve conciliar transparência com proteção de dados e direitos fundamentais.",
        "analiseAlternativas": [
            "Incorreta. Publicidade não é absoluta.",
            "Correta. Acesso à informação pública não autoriza divulgação indiscriminada de dados protegidos.",
            "Incorreta. O problema não depende apenas da natureza pública ou privada da escola.",
            "Incorreta. Outros dados pessoais também podem exigir proteção.",
            "Incorreta. Origem pública do documento não elimina restrições de acesso."
        ],
        "dicaBanca": "Uma pegadinha clássica da FGV é transformar um princípio constitucional em regra absoluta.",
        "pegadinha": "Publicidade ≠ exposição irrestrita.",
        "memorizar2026": "Transparência pública e proteção de dados coexistem.",
        "fonte": "Constituição Federal, arts. 5º e 37; LGPD — Lei nº 13.709/2018."
    },
    {
        "id": "SEDUC-EE-ETICA-010",
        "numero": 10,
        "subtopico": "Compartilhamento responsável de informações",
        "dificuldade": "media",
        "pergunta": "Durante o planejamento, um professor do AEE precisa informar à professora da classe comum aspectos relevantes sobre os apoios utilizados por um estudante. A conduta eticamente mais adequada é",
        "alternativas": [
            "compartilhar só o necessário ao planejamento e à segurança, preservando dados sem utilidade para essa finalidade.",
            "enviar a íntegra de todos os relatórios clínicos à turma de professores para que cada profissional forme sua própria opinião.",
            "evitar qualquer troca de informação, porque a confidencialidade impede articulação entre AEE e classe comum.",
            "resumir os dados em um grupo aberto da escola, desde que não mencione explicitamente o diagnóstico do estudante.",
            "permitir que colegas acessem livremente a pasta do estudante, pois o trabalho colaborativo exige transparência integral."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu que trabalho colaborativo e confidencialidade podem coexistir. A informação deve circular na medida necessária para a finalidade pedagógica e para a proteção do estudante.",
        "feedbackErro": "Sigilo não significa isolamento entre profissionais, mas também não autoriza compartilhamento excessivo. A regra prática é necessidade, finalidade e acesso restrito.",
        "analiseAlternativas": [
            "Correta. É a solução que concilia colaboração e proteção de dados.",
            "Incorreta. A íntegra de documentos pode conter dados desnecessários à prática pedagógica.",
            "Incorreta. A confidencialidade não impede comunicação funcional entre profissionais responsáveis.",
            "Incorreta. Grupo aberto amplia indevidamente o alcance da informação.",
            "Incorreta. Colaboração não significa acesso irrestrito a prontuários ou pastas individuais."
        ],
        "dicaBanca": "FGV tende a oferecer dois extremos: ‘não compartilhar nada’ e ‘compartilhar tudo’. A resposta costuma estar no compartilhamento necessário e justificado.",
        "pegadinha": "Nem silêncio total, nem exposição total.",
        "memorizar2026": "Compartilhar o necessário, com quem precisa, para uma finalidade legítima.",
        "fonte": "LGPD — Lei nº 13.709/2018; Lei Estadual nº 5.810/1994, arts. 177 e 178."
    },
    {
        "id": "SEDUC-EE-ETICA-011",
        "numero": 11,
        "subtopico": "Proteção contra violência — dever de comunicar",
        "dificuldade": "alta",
        "pergunta": "Um estudante relata ao professor indícios de maus-tratos em casa e pede que o fato “fique em segredo”. A resposta profissional mais adequada é",
        "alternativas": [
            "prometer sigilo absoluto e aguardar novo relato, pois a confiança do estudante deve prevalecer sobre qualquer encaminhamento institucional.",
            "questionar repetidamente o estudante até obter detalhes suficientes para comprovar a autoria antes de informar a rede de proteção.",
            "comunicar imediatamente o caso apenas aos demais pais da turma, para que a comunidade acompanhe a situação.",
            "guardar a informação no prontuário escolar e comunicar somente se houver confirmação médica de lesão física.",
            "acolher o relato sem exposição desnecessária e acionar os canais de proteção previstos, pois suspeita de maus-tratos exige comunicação."
        ],
        "correta": 4,
        "feedbackAcerto": "Você conciliou escuta, proteção e dever legal. O ECA determina a comunicação de casos de suspeita ou confirmação de maus-tratos ao Conselho Tutelar, sem transformar o professor em investigador.",
        "feedbackErro": "A confidencialidade profissional não pode ser usada para omitir uma situação que aciona dever legal de proteção. O professor deve acolher, registrar de modo responsável e seguir os fluxos de proteção.",
        "analiseAlternativas": [
            "Incorreta. Não se pode prometer sigilo absoluto quando existe dever legal de proteção.",
            "Incorreta. O professor não deve conduzir investigação informal ou pressionar o estudante.",
            "Incorreta. Expor o caso à comunidade viola privacidade e pode agravar o risco.",
            "Incorreta. A lei fala em suspeita ou confirmação; não exige laudo médico prévio.",
            "Correta. A resposta protege o estudante e aciona a rede competente sem exposição indevida."
        ],
        "dicaBanca": "A FGV gosta de testar o limite do sigilo: quando há dever legal de proteção, não existe ‘segredo absoluto’.",
        "pegadinha": "Acolher não é investigar; proteger não é expor.",
        "memorizar2026": "ECA: suspeita ou confirmação de maus-tratos → comunicação ao Conselho Tutelar.",
        "fonte": "ECA — Lei nº 8.069/1990, art. 13 e art. 56."
    },
    {
        "id": "SEDUC-EE-ETICA-012",
        "numero": 12,
        "subtopico": "Limites profissionais — diagnóstico",
        "dificuldade": "media",
        "pergunta": "Uma professora observa dificuldades persistentes de comunicação e interação em um estudante e conclui, por conta própria, que ele “tem TEA”, passando a registrar esse diagnóstico em documentos escolares. A conduta correta seria",
        "alternativas": [
            "manter o diagnóstico escolar se houver consenso entre os professores que acompanham o estudante.",
            "encaminhar o estudante ao AEE apenas depois que um profissional de saúde confirmar formalmente a hipótese levantada.",
            "registrar o diagnóstico provisório, pois o professor possui competência para identificar qualquer transtorno do neurodesenvolvimento.",
            "aguardar confirmação da família e, se ela concordar, utilizar o diagnóstico como fundamento principal para definir o currículo.",
            "registrar observações objetivas sobre desempenho, barreiras e apoios, articulando encaminhamentos quando cabíveis."
        ],
        "correta": 4,
        "feedbackAcerto": "Você preservou o limite profissional e o foco pedagógico. O professor deve observar, registrar evidências e planejar apoios; não deve transformar hipótese educacional em diagnóstico clínico.",
        "feedbackErro": "O educador pode reconhecer sinais e necessidades, mas diagnóstico clínico não é atribuição docente. Além disso, o acesso ao AEE não deve ser condicionado à apresentação de laudo de saúde.",
        "analiseAlternativas": [
            "Incorreta. Consenso entre professores não transforma hipótese em diagnóstico clínico válido.",
            "Incorreta. A política atual não condiciona o AEE a laudo de saúde.",
            "Incorreta. Identificação pedagógica não equivale a diagnóstico clínico.",
            "Incorreta. Mesmo com concordância familiar, o professor não deve reduzir o currículo ao diagnóstico.",
            "Correta. Observação funcional e registro pedagógico são adequados à atuação docente."
        ],
        "dicaBanca": "FGV costuma testar fronteiras entre avaliação pedagógica e diagnóstico clínico.",
        "pegadinha": "Professor observa e planeja; não diagnostica clinicamente.",
        "memorizar2026": "Registro ético descreve evidências, barreiras, apoios e aprendizagem.",
        "fonte": "Decreto nº 12.686/2025; Portaria MEC nº 421/2026; LDB."
    },
    {
        "id": "SEDUC-EE-ETICA-013",
        "numero": 13,
        "subtopico": "AEE e laudo — decisão ética e normativa",
        "dificuldade": "alta",
        "pergunta": "A equipe escolar decide que um estudante só poderá iniciar o AEE quando apresentar laudo médico. À luz da política atual de Educação Especial Inclusiva, essa decisão é",
        "alternativas": [
            "adequada, porque o laudo médico é requisito nacional para qualquer atendimento educacional especializado.",
            "adequada apenas no caso de deficiência intelectual, por depender de avaliação clínica do funcionamento adaptativo.",
            "inadequada, pois a oferta do AEE não deve ser condicionada a diagnóstico, laudo ou relatório de saúde.",
            "adequada quando a família solicita profissional de apoio, pois AEE e apoio escolar possuem a mesma exigência documental.",
            "inadequada somente quando o estudante já tiver PEI, pois nesse caso o laudo pode ser substituído pelo planejamento escolar."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou a regra atual: o AEE não pode ser condicionado a diagnóstico, laudo ou relatório de saúde. O estudo de caso e a avaliação educacional orientam o planejamento dos apoios.",
        "feedbackErro": "Condicionar um direito educacional a documento clínico que a política não exige cria barreira indevida. Informações de saúde podem subsidiar, mas não funcionam como porta de entrada obrigatória.",
        "analiseAlternativas": [
            "Incorreta. A política atual rejeita essa condição geral.",
            "Incorreta. A regra não cria exceção automática para deficiência intelectual.",
            "Correta. Laudo não é condição para oferta do AEE.",
            "Incorreta. AEE e profissional de apoio não devem ser condicionados a laudo como requisito de acesso.",
            "Incorreta. A ausência ou existência de PEI não altera a regra sobre condicionamento clínico."
        ],
        "dicaBanca": "A FGV pode misturar ‘subsídio clínico’ com ‘condição obrigatória’. São coisas diferentes.",
        "pegadinha": "Laudo pode ajudar; não pode virar barreira de acesso.",
        "memorizar2026": "AEE: decisão educacional baseada em estudo de caso, não em exigência automática de laudo.",
        "fonte": "Decreto nº 12.686/2025 e Portaria MEC nº 421/2026."
    },
    {
        "id": "SEDUC-EE-ETICA-014",
        "numero": 14,
        "subtopico": "Equidade × igualdade",
        "dificuldade": "media",
        "pergunta": "Em uma avaliação, um estudante com baixa visão utiliza fonte ampliada e tempo ajustado conforme necessidade previamente identificada. Outro candidato reclama que isso fere a igualdade. A interpretação mais adequada é",
        "alternativas": [
            "o recurso é incompatível com a igualdade, porque todos devem realizar a avaliação nas mesmas condições materiais.",
            "a adaptação só seria legítima se alterasse também o conteúdo e reduzisse a complexidade das questões.",
            "a igualdade exige identidade de procedimentos, mas admite exceções apenas quando houver autorização judicial.",
            "a equidade pode exigir recursos e ajustes distintos para assegurar oportunidade real de demonstrar aprendizagem.",
            "a medida é aceitável apenas no AEE, não em avaliações realizadas na classe comum."
        ],
        "correta": 3,
        "feedbackAcerto": "Você diferenciou igualdade formal de equidade. O recurso não oferece vantagem indevida; busca neutralizar uma barreira que impediria o estudante de acessar a avaliação em condições adequadas.",
        "feedbackErro": "O princípio de igualdade de oportunidades pode exigir medidas diferenciadas. O objetivo ético é permitir participação efetiva, não produzir tratamento idêntico diante de necessidades distintas.",
        "analiseAlternativas": [
            "Incorreta. Mesma regra material para todos pode manter uma barreira.",
            "Incorreta. Acessibilidade não exige redução automática de conteúdo.",
            "Incorreta. Adaptações educacionais não dependem, como regra, de ordem judicial.",
            "Correta. Equidade ajusta meios para proteger igualdade de oportunidades.",
            "Incorreta. Recursos de acessibilidade também pertencem à classe comum e às avaliações."
        ],
        "dicaBanca": "FGV gosta de apresentar ‘mesmas condições para todos’ como formulação sedutora, mas insuficiente.",
        "pegadinha": "Equidade não é privilégio; é justiça diante de necessidades diferentes.",
        "memorizar2026": "Igualdade de oportunidades pode exigir meios diferentes.",
        "fonte": "LBI — Lei nº 13.146/2015, arts. 4º, 27 e 28."
    },
    {
        "id": "SEDUC-EE-ETICA-015",
        "numero": 15,
        "subtopico": "RJU-PA — vantagem pessoal e conflito de interesse",
        "dificuldade": "media",
        "pergunta": "Um servidor utiliza sua posição na escola para pressionar fornecedores a oferecer desconto exclusivo para sua empresa particular. À luz da Lei Estadual nº 5.810/1994, essa conduta",
        "alternativas": [
            "é aceitável se a escola não realizar compra com o fornecedor e não houver gasto de recursos públicos.",
            "pode ser regular quando o benefício privado não interfere diretamente no horário de trabalho do servidor.",
            "é permitida se o servidor não mencionar formalmente seu cargo durante a negociação com o fornecedor.",
            "deve ser analisada apenas pela direção escolar, pois conflito de interesse não integra o regime disciplinar do Estado.",
            "é vedada, pois o servidor não pode usar o cargo para obter proveito pessoal ou de terceiro."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou a vedação estatutária ao uso do cargo para obtenção de vantagem pessoal ou de terceiro.",
        "feedbackErro": "O problema ético não depende apenas de haver gasto público. Usar a autoridade ou a influência do cargo para benefício privado compromete a impessoalidade e a dignidade da função pública.",
        "analiseAlternativas": [
            "Incorreta. A ausência de compra pública não torna legítimo o uso da posição funcional.",
            "Incorreta. O problema é o proveito decorrente do cargo, não apenas o horário.",
            "Incorreta. Ocultar a menção formal ao cargo não afasta o uso de influência funcional.",
            "Incorreta. A conduta é tratada pelo regime jurídico, não apenas por decisão gerencial.",
            "Correta. É vedação expressa da Lei nº 5.810/1994."
        ],
        "dicaBanca": "FGV explora conflitos de interesse com situações que parecem ‘sem prejuízo ao Estado’, mas usam indevidamente a função.",
        "pegadinha": "Sem gasto público ainda pode haver abuso da posição pública.",
        "memorizar2026": "Cargo público não pode virar instrumento de benefício privado.",
        "fonte": "Lei Estadual nº 5.810/1994, art. 178, V, e art. 190, XIII."
    },
    {
        "id": "SEDUC-EE-ETICA-016",
        "numero": 16,
        "subtopico": "RJU-PA — recursos públicos",
        "dificuldade": "alta",
        "pergunta": "Um professor utiliza, de forma habitual, equipamentos e materiais da escola para produzir mercadorias de seu negócio particular fora das atividades pedagógicas. Segundo a Lei nº 5.810/1994, essa conduta",
        "alternativas": [
            "é irrelevante disciplinarmente se os materiais forem repostos antes de qualquer fiscalização.",
            "é admitida quando ocorre fora do horário de aula e não impede o uso dos equipamentos pelos estudantes.",
            "pode ser regular se houver autorização verbal da chefia imediata e não houver cobrança à escola.",
            "é incompatível com o regime funcional, que veda o uso de pessoal ou recursos materiais da repartição em atividades particulares.",
            "somente configura infração quando o equipamento sofrer dano permanente ou houver vantagem econômica superior ao vencimento mensal."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou uma hipótese expressa do regime disciplinar paraense: utilizar pessoal ou recursos materiais da repartição em serviços ou atividades particulares é conduta vedada.",
        "feedbackErro": "O fato de ocorrer fora da aula, sem dano imediato ou com reposição de materiais não transforma o recurso público em bem privado.",
        "analiseAlternativas": [
            "Incorreta. Reposição posterior não apaga o uso indevido.",
            "Incorreta. A vedação não depende de coincidência com o horário de aula.",
            "Incorreta. Autorização informal não legitima uso privado contrário à norma.",
            "Correta. É incompatível com o regime funcional.",
            "Incorreta. Não há esse requisito de dano permanente ou valor mínimo."
        ],
        "dicaBanca": "Em questões de ética pública, a FGV frequentemente usa justificativas práticas para tentar relativizar uma vedação legal objetiva.",
        "pegadinha": "Recurso público tem finalidade pública.",
        "memorizar2026": "Bem e material da escola não são extensão do patrimônio particular do servidor.",
        "fonte": "Lei Estadual nº 5.810/1994, art. 190, XX."
    },
    {
        "id": "SEDUC-EE-ETICA-017",
        "numero": 17,
        "subtopico": "Responsabilidade civil, penal e administrativa",
        "dificuldade": "alta",
        "pergunta": "Um servidor pratica, no exercício da função, uma conduta irregular que gera dano e também pode configurar ilícito penal. De acordo com a Lei nº 5.810/1994, é correto afirmar que",
        "alternativas": [
            "a existência de responsabilidade civil impede a aplicação de sanção disciplinar pelo mesmo fato.",
            "a responsabilização administrativa depende necessariamente do encerramento do processo penal.",
            "as responsabilidades civil, penal e administrativa podem coexistir e são, em regra, independentes.",
            "a absolvição penal sempre extingue qualquer consequência administrativa relacionada à conduta.",
            "a Administração deve escolher uma única esfera de responsabilização para evitar duplicidade de punição."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu a regra do RJU-PA: o servidor pode responder civil, penal e administrativamente, e as sanções podem cumular-se, sendo independentes.",
        "feedbackErro": "O estatuto não impõe escolha de uma única esfera. Há hipóteses específicas em que decisão judicial repercute na esfera administrativa, mas a regra é a independência.",
        "analiseAlternativas": [
            "Incorreta. Responsabilidade civil não exclui sanção administrativa.",
            "Incorreta. A esfera administrativa não depende sempre do fim do processo penal.",
            "Correta. É a regra expressa dos arts. 179 a 182.",
            "Incorreta. A absolvição só repercute em situações juridicamente específicas, como negação do fato ou autoria.",
            "Incorreta. As esferas podem coexistir."
        ],
        "dicaBanca": "FGV costuma inserir palavras absolutas como ‘sempre’ e ‘necessariamente’ para distorcer regras de responsabilidade.",
        "pegadinha": "Três esferas podem coexistir.",
        "memorizar2026": "RJU-PA: responsabilidade civil + penal + administrativa; independência como regra.",
        "fonte": "Lei Estadual nº 5.810/1994, arts. 179 a 182."
    },
    {
        "id": "SEDUC-EE-ETICA-018",
        "numero": 18,
        "subtopico": "ECA — avaliação e respeito ao estudante",
        "dificuldade": "media",
        "pergunta": "Um adolescente questiona os critérios utilizados em uma avaliação e solicita que a escola reveja o procedimento. A professora responde que “aluno não pode contestar avaliação de professor”. Segundo o ECA, a resposta da professora é",
        "alternativas": [
            "correta, porque a autonomia docente impede qualquer revisão de critérios avaliativos pela escola.",
            "correta se os critérios tiverem sido previstos no planejamento anual e aplicados igualmente à turma.",
            "incorreta apenas quando houver erro material na nota, pois critérios pedagógicos não podem ser questionados.",
            "correta no ensino médio, em que a participação estudantil não alcança decisões de avaliação.",
            "incorreta, pois o estudante pode contestar critérios avaliativos e recorrer às instâncias superiores."
        ],
        "correta": 4,
        "feedbackAcerto": "Você aplicou diretamente o art. 53 do ECA. O estudante tem direito ao respeito e também a contestar critérios avaliativos, com possibilidade de recurso às instâncias escolares superiores.",
        "feedbackErro": "A autoridade pedagógica não elimina direitos do estudante. A escola pode manter o critério após análise, mas não pode negar de antemão o direito de questionamento previsto em lei.",
        "analiseAlternativas": [
            "Incorreta. Autonomia docente não elimina direitos legais do estudante.",
            "Incorreta. Previsão prévia do critério não afasta o direito de contestá-lo.",
            "Incorreta. O ECA não restringe a contestação a erro material.",
            "Incorreta. O direito alcança crianças e adolescentes no âmbito escolar.",
            "Correta. É a regra expressa do art. 53, II e III."
        ],
        "dicaBanca": "A FGV gosta de cobrar literalidade legal dentro de um caso cotidiano.",
        "pegadinha": "Contestar não significa automaticamente ter razão; significa ter direito de questionar.",
        "memorizar2026": "ECA, art. 53: respeito + contestação de critérios avaliativos.",
        "fonte": "ECA — Lei nº 8.069/1990, art. 53, II e III."
    },
    {
        "id": "SEDUC-EE-ETICA-019",
        "numero": 19,
        "subtopico": "Autonomia e escuta do estudante",
        "dificuldade": "media",
        "pergunta": "Na elaboração de um plano de apoio, a equipe discute apenas com adultos quais recursos um estudante adolescente utilizará, sem lhe perguntar preferências ou dificuldades. Uma prática mais ética seria",
        "alternativas": [
            "manter a decisão exclusivamente técnica, pois a participação do estudante pode comprometer a objetividade da equipe.",
            "ouvir o estudante de forma acessível e considerar suas preferências junto às necessidades pedagógicas da escola.",
            "consultar o estudante apenas depois de o plano estar concluído, para explicar as decisões que já foram tomadas.",
            "delegar ao estudante a decisão final sobre todos os recursos, independentemente de segurança, finalidade pedagógica ou viabilidade.",
            "substituir a escuta direta pela opinião da família, que representa integralmente os interesses educacionais do adolescente."
        ],
        "correta": 1,
        "feedbackAcerto": "Você valorizou autonomia, participação e escuta qualificada sem transformar o estudante em único responsável pela decisão.",
        "feedbackErro": "Uma prática ética não trata o estudante como objeto do planejamento. Sua voz deve ser considerada de forma acessível, em conjunto com critérios pedagógicos, direitos e responsabilidades institucionais.",
        "analiseAlternativas": [
            "Incorreta. A técnica não exige silenciar o sujeito afetado pela decisão.",
            "Correta. Combina participação do estudante e responsabilidade profissional.",
            "Incorreta. Consulta meramente informativa depois da decisão não é participação efetiva.",
            "Incorreta. Escuta não significa transferir toda a responsabilidade técnica ao estudante.",
            "Incorreta. A família é importante, mas não apaga a voz do próprio adolescente."
        ],
        "dicaBanca": "FGV costuma valorizar participação e autonomia, mas rejeita extremos de exclusão ou transferência total da decisão.",
        "pegadinha": "Escutar não é abdicar da responsabilidade profissional.",
        "memorizar2026": "Plano com o estudante, não apenas para o estudante.",
        "fonte": "ECA — Lei nº 8.069/1990, arts. 16 e 17; LBI — Lei nº 13.146/2015."
    },
    {
        "id": "SEDUC-EE-ETICA-020",
        "numero": 20,
        "subtopico": "Comunicação respeitosa e não estigmatizante",
        "dificuldade": "media",
        "pergunta": "Em relatório pedagógico, qual redação é mais compatível com uma postura ética e profissional?",
        "alternativas": [
            "“Aluno incapaz de acompanhar a turma, provavelmente por causa de sua deficiência, sem perspectiva de melhora significativa.”",
            "“Estudante problemático, dependente de ajuda e resistente às atividades propostas em praticamente todas as situações.”",
            "“Aluno especial que precisa de proteção constante, pois suas limitações impedem participação autônoma nas tarefas.”",
            "“Estudante tem dificuldade em tarefas longas; responde melhor a instruções segmentadas e apoio visual, com monitoramento.”",
            "“Aluno com laudo grave, cujo comportamento deve ser controlado para que não prejudique o ritmo de aprendizagem dos demais.”"
        ],
        "correta": 3,
        "feedbackAcerto": "Você escolheu um registro descritivo, funcional e útil ao planejamento. Ele relata evidências, resposta a estratégias e necessidade de acompanhamento, sem rótulos ou prognósticos indevidos.",
        "feedbackErro": "Relatórios pedagógicos devem ajudar a compreender aprendizagem, barreiras, apoios e progresso. Linguagem estigmatizante, diagnósticos improvisados e previsões de incapacidade são incompatíveis com uma prática ética.",
        "analiseAlternativas": [
            "Incorreta. Faz prognóstico e atribuição causal indevida com linguagem incapacitante.",
            "Incorreta. ‘Problemático’ é rótulo subjetivo e pouco informativo.",
            "Incorreta. ‘Aluno especial’ e generalização sobre dependência não descrevem funcionalidade.",
            "Correta. Usa observação objetiva e orienta planejamento e monitoramento.",
            "Incorreta. Usa gravidade do laudo para justificar controle e responsabiliza o estudante pelo ritmo da turma."
        ],
        "dicaBanca": "FGV costuma preferir alternativas que descrevem conduta observável e intervenção pedagógica em vez de rótulos.",
        "pegadinha": "Relatório bom descreve; não sentencia.",
        "memorizar2026": "Escreva: situação observada → barreira → apoio → resposta → acompanhamento.",
        "fonte": "ECA; LBI; princípios de registro pedagógico e proteção de dados."
    },
    {
        "id": "SEDUC-EE-ETICA-021",
        "numero": 21,
        "subtopico": "Trabalho colaborativo e corresponsabilidade",
        "dificuldade": "alta",
        "pergunta": "Em uma reunião, o professor regente afirma que todas as decisões relativas a um estudante público da Educação Especial pertencem ao professor do AEE. A perspectiva ética e inclusiva mais adequada é",
        "alternativas": [
            "reconhecer a corresponsabilidade entre classe comum, AEE, equipe, estudante e família, conforme suas atribuições.",
            "atribuir ao AEE a decisão final sobre currículo e avaliação, porque o professor especializado detém competência superior nesses casos.",
            "transferir à família a definição dos objetivos pedagógicos, cabendo à escola apenas executar o que for solicitado.",
            "separar completamente as funções para evitar interferência: classe comum ensina conteúdo e AEE cuida exclusivamente da deficiência.",
            "centralizar as decisões na direção escolar, reduzindo o contato entre os profissionais para preservar confidencialidade."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou a lógica da corresponsabilidade. Inclusão exige articulação entre classe comum, AEE, gestão, estudante, família e outros profissionais, sem apagamento das atribuições de cada um.",
        "feedbackErro": "Transferir toda a responsabilidade ao AEE reproduz segregação institucional. O atendimento especializado apoia e articula, mas não substitui o professor regente nem o currículo comum.",
        "analiseAlternativas": [
            "Correta. Preserva colaboração e responsabilidades próprias de cada ator.",
            "Incorreta. AEE não assume sozinho currículo e avaliação da classe comum.",
            "Incorreta. A família participa, mas não substitui a responsabilidade pedagógica da escola.",
            "Incorreta. Separação rígida rompe a articulação necessária à inclusão.",
            "Incorreta. Confidencialidade não exige isolamento entre profissionais responsáveis."
        ],
        "dicaBanca": "A FGV cobra muito a rejeição da ideia de que inclusão é tarefa exclusiva do especialista.",
        "pegadinha": "AEE apoia; não terceiriza a responsabilidade da escola.",
        "memorizar2026": "Inclusão = corresponsabilidade + articulação + atribuições claras.",
        "fonte": "LDB, art. 13; Decreto nº 12.686/2025; Portaria MEC nº 421/2026."
    },
    {
        "id": "SEDUC-EE-ETICA-022",
        "numero": 22,
        "subtopico": "Atualização normativa Pará — Portarias 05 e 19/2026",
        "dificuldade": "alta",
        "pergunta": "Em janeiro de 2026, a SEDUC-PA publicou a Portaria nº 05/2026-GS/SEDUC, instituindo um Código de Conduta e Ética. Considerando a situação normativa atual, é correto afirmar que",
        "alternativas": [
            "a Portaria nº 05/2026 permanece integralmente vigente e é o código ético obrigatório atualmente aplicável a todos os servidores da SEDUC.",
            "a Portaria nº 05/2026 foi apenas suspensa temporariamente, mas continuou produzindo efeitos até a publicação do edital do concurso.",
            "a Portaria nº 05/2026 foi incorporada à Lei nº 5.810/1994, motivo pelo qual seu conteúdo passou a ter força de lei estadual.",
            "a Portaria nº 05/2026 vale somente para servidores temporários, enquanto efetivos permanecem sujeitos ao código anterior de 2004.",
            "a Portaria nº 19/2026-GS/SEDUC revogou a Portaria nº 05/2026 e determinou que o código e seu anexo deixassem de produzir efeitos."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou uma atualização normativa importante para 2026. A Portaria nº 19/2026 revogou expressamente a Portaria nº 05/2026 e fez cessar os efeitos do código nela aprovado.",
        "feedbackErro": "Memorizar o código da Portaria nº 05/2026 como norma atual seria um erro. Ele existiu por poucos dias e foi expressamente revogado pela Portaria nº 19/2026.",
        "analiseAlternativas": [
            "Incorreta. A Portaria nº 05/2026 não está vigente.",
            "Incorreta. O ato posterior revogou, não apenas suspendeu, a portaria anterior.",
            "Incorreta. Uma portaria não foi incorporada automaticamente ao texto da Lei nº 5.810/1994.",
            "Incorreta. A revogação alcançou o código instituído pela Portaria nº 05/2026.",
            "Correta. É o conteúdo expresso da Portaria nº 19/2026."
        ],
        "dicaBanca": "Atualização normativa recente é material típico para uma banca como a FGV criar distrator com norma revogada.",
        "pegadinha": "Norma publicada em 2026 não significa norma vigente em setembro de 2026.",
        "memorizar2026": "Portaria 05/2026: instituiu; Portaria 19/2026: revogou e cessou efeitos.",
        "fonte": "Portaria nº 19/2026-GS/SEDUC, de 20/01/2026; DOE-PA nº 36.504, de 21/01/2026.",
        "atualizacao2026": "Até setembro de 2026, a Portaria nº 05/2026 não deve ser tratada como código vigente da SEDUC-PA."
    },
    {
        "id": "SEDUC-EE-ETICA-023",
        "numero": 23,
        "subtopico": "RJU-PA — deveres e proibições",
        "dificuldade": "alta",
        "pergunta": "Com base na Lei Estadual nº 5.810/1994, analise as afirmativas a seguir.\n\nI. Assiduidade, pontualidade, urbanidade e discrição figuram entre os deveres do servidor.\nII. A obediência às ordens superiores não alcança ordem manifestamente ilegal.\nIII. É vedado revelar fato conhecido em razão do cargo que deva permanecer em sigilo.\n\nEstá correto o que se afirma em",
        "alternativas": [
            "I, apenas.",
            "I e II, apenas.",
            "II e III, apenas.",
            "I e III, apenas.",
            "I, II e III."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reconheceu três regras literais do regime jurídico paraense: deveres de urbanidade e discrição, exceção à obediência diante de ordem manifestamente ilegal e vedação de revelação indevida de fato sigiloso.",
        "feedbackErro": "Todas as três afirmativas estão de acordo com os arts. 177 e 178 da Lei nº 5.810/1994.",
        "analiseAlternativas": [
            "Incorreta. II e III também estão corretas.",
            "Incorreta. III também está correta.",
            "Incorreta. I também está correta.",
            "Incorreta. II também está correta.",
            "Correta. I, II e III reproduzem regras do estatuto."
        ],
        "dicaBanca": "FGV combina literalidade legal em blocos I/II/III; pequenas exceções costumam decidir a questão.",
        "pegadinha": "Leia com atenção as palavras ‘manifestamente ilegal’ e ‘deve permanecer em sigilo’.",
        "memorizar2026": "Art. 177 = deveres; art. 178 = proibições.",
        "fonte": "Lei Estadual nº 5.810/1994, arts. 177 e 178.",
        "afirmacoes": [
            "I. Assiduidade, pontualidade, urbanidade e discrição figuram entre os deveres do servidor.",
            "II. A obediência às ordens superiores não alcança ordem manifestamente ilegal.",
            "III. É vedado revelar fato conhecido em razão do cargo que deva permanecer em sigilo."
        ]
    },
    {
        "id": "SEDUC-EE-ETICA-024",
        "numero": 24,
        "subtopico": "V/F — ética, inclusão e privacidade",
        "dificuldade": "alta",
        "pergunta": "Considere as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.\n\n( ) A recusa de adaptação razoável necessária pode configurar discriminação em razão da deficiência.\n( ) O princípio da publicidade autoriza divulgar diagnóstico de estudante sempre que o documento estiver arquivado em escola pública.\n( ) A criança e o adolescente têm direito de ser respeitados por seus educadores.\n\nAs afirmativas são, respectivamente,",
        "alternativas": [
            "V – F – V.",
            "V – V – F.",
            "F – V – V.",
            "F – F – V.",
            "V – F – F."
        ],
        "correta": 0,
        "feedbackAcerto": "Você integrou corretamente LBI, proteção de dados e ECA: a primeira e a terceira são verdadeiras; a segunda é falsa porque publicidade não autoriza exposição indiscriminada de dados protegidos.",
        "feedbackErro": "O ponto decisivo é não absolutizar a publicidade. A Administração deve ser transparente, mas continua obrigada a proteger informações pessoais e direitos de crianças, adolescentes e pessoas com deficiência.",
        "analiseAlternativas": [
            "Correta. A sequência é V – F – V.",
            "Incorreta. A segunda afirmativa é falsa e a terceira é verdadeira.",
            "Incorreta. A primeira afirmativa é verdadeira e a segunda é falsa.",
            "Incorreta. A primeira afirmativa também é verdadeira.",
            "Incorreta. A terceira afirmativa é verdadeira."
        ],
        "dicaBanca": "FGV usa V/F para misturar uma regra inclusiva correta, um princípio constitucional absolutizado e um direito literal do ECA.",
        "pegadinha": "Princípios jurídicos raramente funcionam como licença para ignorar outros direitos.",
        "memorizar2026": "Adaptação razoável + privacidade + respeito ao estudante.",
        "fonte": "LBI, art. 4º; Constituição Federal, art. 37; LGPD; ECA, art. 53.",
        "afirmacoes": [
            "A recusa de adaptação razoável necessária pode configurar discriminação em razão da deficiência.",
            "O princípio da publicidade autoriza divulgar diagnóstico de estudante sempre que o documento estiver arquivado em escola pública.",
            "A criança e o adolescente têm direito de ser respeitados por seus educadores."
        ]
    },
    {
        "id": "SEDUC-EE-ETICA-025",
        "numero": 25,
        "subtopico": "Caso integrador — ética na Educação Especial",
        "dificuldade": "alta",
        "pergunta": "Uma professora presencia um colega ridicularizando um estudante com deficiência, expondo informações do laudo diante da turma e retirando-o de uma atividade coletiva sem justificativa pedagógica. Diante da situação, a conduta profissional mais adequada é",
        "alternativas": [
            "não intervir naquele momento, pois conflitos entre professores devem ser resolvidos apenas pela direção após reclamação formal da família.",
            "proteger o estudante, interromper a exposição, registrar e encaminhar o fato pelos canais institucionais, preservando dados desnecessários.",
            "publicar a situação no grupo geral de responsáveis para criar pressão coletiva e demonstrar transparência sobre o ocorrido.",
            "retirar permanentemente o estudante das aulas do colega e encaminhá-lo ao AEE, evitando novos conflitos até conclusão da apuração.",
            "conversar apenas informalmente com o colega e não registrar o episódio, pois documentação pode prejudicar a relação profissional da equipe."
        ],
        "correta": 1,
        "feedbackAcerto": "Você integrou os principais eixos do bloco: dignidade do estudante, não discriminação, proteção de dados, dever funcional de agir diante de irregularidade e uso de canais institucionais adequados.",
        "feedbackErro": "A resposta ética deve proteger o estudante sem transformar o caso em exposição pública. Também não é adequado silenciar, terceirizar a escolarização ou evitar registro por conveniência entre colegas.",
        "analiseAlternativas": [
            "Incorreta. O dever de proteção não exige esperar passivamente reclamação da família.",
            "Correta. Protege o estudante, preserva dados e aciona os mecanismos institucionais adequados.",
            "Incorreta. Transparência não justifica exposição pública do estudante ou de seus dados.",
            "Incorreta. AEE não é mecanismo para afastar estudante da classe comum por conflito profissional.",
            "Incorreta. Conversa informal pode compor a resposta, mas não substitui providências quando há violação relevante."
        ],
        "dicaBanca": "Casos integradores são típicos da FGV: várias alternativas parecem ‘prudentes’, mas apenas uma protege direitos, respeita atribuições e usa meios institucionais.",
        "pegadinha": "Ética não é omissão elegante; é ação responsável e proporcional.",
        "memorizar2026": "Proteger + registrar + encaminhar + preservar confidencialidade + manter inclusão.",
        "fonte": "ECA; LBI; Lei Estadual nº 5.810/1994; LGPD."
    }
];

    window.seducEducacaoEspecialEticaProfissional2026 = banco;
})();
