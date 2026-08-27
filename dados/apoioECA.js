// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// ECA — LEI Nº 8.069/1990 — TEXTO COMPILADO
// BANCO REVISADO PARA O PADRÃO INSTITUTO ÁGATA
// 50 questões: lei seca + interpretação + situações escolares.
// Revisão: 26/08/2026
// ============================================================

const apoioECA = [
    {
        "pergunta": "De acordo com o ECA, considera-se criança a pessoa:",
        "alternativas": [
            "até 10 anos incompletos.",
            "entre 0 e 14 anos incompletos.",
            "entre 12 e 18 anos incompletos.",
            "até 12 anos completos.",
            "até 12 anos incompletos."
        ],
        "correta": 4,
        "explicacao": "Art. 2º: criança é a pessoa até 12 anos de idade incompletos; adolescente é aquela entre 12 e 18 anos.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A Ágata já cobrou literalmente essa faixa etária."
    },
    {
        "pergunta": "O Estatuto da Criança e do Adolescente adota como fundamento:",
        "alternativas": [
            "a doutrina da situação irregular.",
            "a intervenção estatal somente após prática de ato infracional.",
            "a tutela apenas de crianças em vulnerabilidade econômica.",
            "a proteção integral à criança e ao adolescente.",
            "a proteção exclusiva de menores de 12 anos."
        ],
        "correta": 3,
        "explicacao": "O art. 1º dispõe sobre a proteção integral à criança e ao adolescente.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Os artigos iniciais aparecem com frequência em provas da Ágata."
    },
    {
        "pergunta": "A garantia de prioridade prevista no ECA compreende:",
        "alternativas": [
            "apenas preferência em processos judiciais.",
            "primazia de proteção e socorro, precedência de atendimento, preferência nas políticas sociais públicas e destinação privilegiada de recursos públicos.",
            "somente atendimento preferencial em hospitais.",
            "prioridade apenas para crianças, não adolescentes.",
            "exclusivamente destinação de recursos à assistência social."
        ],
        "correta": 1,
        "explicacao": "O art. 4º, parágrafo único, enumera essas quatro dimensões da prioridade absoluta.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Cuidado com alternativas que reduzem a prioridade a apenas uma medida."
    },
    {
        "pergunta": "Nenhuma criança ou adolescente será objeto de:",
        "alternativas": [
            "correção disciplinar realizada por qualquer meio.",
            "negligência, discriminação, exploração, violência, crueldade ou opressão.",
            "acompanhamento familiar determinado pela escola.",
            "avaliação escolar periódica.",
            "orientação pedagógica individualizada."
        ],
        "correta": 1,
        "explicacao": "O art. 5º protege contra negligência, discriminação, exploração, violência, crueldade e opressão.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A Ágata cobrou esse conteúdo em 2026."
    },
    {
        "pergunta": "Na interpretação do ECA, deve-se levar em conta:",
        "alternativas": [
            "apenas a condição econômica da família.",
            "exclusivamente o interesse administrativo do Município.",
            "somente a vontade dos responsáveis.",
            "os fins sociais da lei, as exigências do bem comum, os direitos e deveres individuais e coletivos e a condição peculiar da criança e do adolescente como pessoas em desenvolvimento.",
            "apenas a idade cronológica."
        ],
        "correta": 3,
        "explicacao": "O art. 6º estabelece esses critérios interpretativos.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Expressão-chave: pessoa em desenvolvimento."
    },
    {
        "pergunta": "O direito à liberdade assegurado pelo ECA compreende, entre outros aspectos:",
        "alternativas": [
            "participar da vida familiar e comunitária sem discriminação.",
            "dispensar-se da frequência escolar por decisão própria.",
            "exercer qualquer trabalho antes da idade legal.",
            "recusar toda orientação dos responsáveis.",
            "divulgar dados pessoais de terceiros."
        ],
        "correta": 0,
        "explicacao": "O art. 16 inclui participação na vida familiar e comunitária, sem discriminação.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A banca pode misturar direito real com permissões inexistentes."
    },
    {
        "pergunta": "O direito ao respeito consiste na:",
        "alternativas": [
            "dispensa de regras de convivência.",
            "ausência de qualquer limite familiar ou escolar.",
            "impossibilidade de aplicação de medidas protetivas.",
            "autonomia civil plena a partir dos 12 anos.",
            "inviolabilidade da integridade física, psíquica e moral da criança e do adolescente."
        ],
        "correta": 4,
        "explicacao": "O art. 17 protege integridade física, psíquica e moral, incluindo imagem, identidade, autonomia, valores, ideias, crenças, espaços e objetos pessoais.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Respeito não significa ausência de regras."
    },
    {
        "pergunta": "A criança e o adolescente têm direito de ser educados e cuidados:",
        "alternativas": [
            "sem o uso de castigo físico ou tratamento cruel ou degradante como forma de correção, disciplina ou educação.",
            "com castigo físico moderado quando autorizado pela família.",
            "com punição humilhante em situações excepcionais.",
            "com ameaça grave quando houver risco de repetência.",
            "com exposição pública para fins pedagógicos."
        ],
        "correta": 0,
        "explicacao": "O art. 18-A assegura educação e cuidado sem castigo físico ou tratamento cruel ou degradante.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Tema já cobrado pela Ágata."
    },
    {
        "pergunta": "Para o ECA, tratamento cruel ou degradante é a conduta ou forma cruel de tratamento que:",
        "alternativas": [
            "cause apenas dano patrimonial.",
            "produza necessariamente lesão corporal grave.",
            "seja aplicada exclusivamente pelos pais.",
            "ocorra somente no ambiente doméstico.",
            "humilhe, ameace gravemente ou ridicularize a criança ou o adolescente."
        ],
        "correta": 4,
        "explicacao": "O art. 18-A define tratamento cruel ou degradante nesses termos.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A banca já cobrou literalmente essa definição."
    },
    {
        "pergunta": "Toda criança ou adolescente tem direito a ser criado e educado:",
        "alternativas": [
            "no seio de sua família e, excepcionalmente, em família substituta, assegurada a convivência familiar e comunitária.",
            "exclusivamente em instituição pública.",
            "somente pela família biológica, sem exceções.",
            "preferencialmente em acolhimento institucional.",
            "sem participação comunitária."
        ],
        "correta": 0,
        "explicacao": "O art. 19 assegura convivência familiar e comunitária, prioritariamente na família.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Acolhimento é medida excepcional, não regra."
    },
    {
        "pergunta": "O direito à educação previsto no art. 53 do ECA visa:",
        "alternativas": [
            "apenas à qualificação profissional.",
            "exclusivamente à aprovação em avaliações externas.",
            "ao pleno desenvolvimento da pessoa, preparo para o exercício da cidadania e qualificação para o trabalho.",
            "somente à alfabetização.",
            "à seleção dos estudantes de maior rendimento."
        ],
        "correta": 2,
        "explicacao": "O caput do art. 53 apresenta essas três finalidades.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A Ágata cobra o art. 53 com frequência."
    },
    {
        "pergunta": "É direito assegurado pelo art. 53 do ECA:",
        "alternativas": [
            "exigir aprovação automática.",
            "escolher livremente qualquer nota escolar.",
            "dispensar-se das avaliações.",
            "contestar critérios avaliativos, podendo recorrer às instâncias escolares superiores.",
            "substituir o professor na definição dos critérios."
        ],
        "correta": 3,
        "explicacao": "O art. 53, III, assegura o direito de contestar critérios avaliativos e recorrer às instâncias escolares superiores.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Questão praticamente clássica da Ágata."
    },
    {
        "pergunta": "Também é direito da criança e do adolescente no âmbito educacional:",
        "alternativas": [
            "escolher se cumprirá ou não as regras escolares.",
            "ser respeitado por seus educadores.",
            "impedir a comunicação entre escola e responsáveis.",
            "ser dispensado da frequência mínima.",
            "recusar qualquer atividade pedagógica sem justificativa."
        ],
        "correta": 1,
        "explicacao": "O art. 53, II, assegura o direito de ser respeitado por seus educadores.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A banca costuma inserir direitos plausíveis, mas não previstos."
    },
    {
        "pergunta": "O ECA assegura:",
        "alternativas": [
            "prioridade de matrícula apenas para estudantes de alto rendimento.",
            "igualdade apenas no acesso, sem garantia de permanência.",
            "igualdade de condições para o acesso e permanência na escola.",
            "ensino público gratuito somente no ensino fundamental.",
            "matrícula condicionada à renda familiar."
        ],
        "correta": 2,
        "explicacao": "O art. 53, I, assegura igualdade de condições para acesso e permanência.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A expressão completa é importante."
    },
    {
        "pergunta": "Quanto à participação estudantil, o ECA assegura o direito de:",
        "alternativas": [
            "participação exclusivamente em atividades esportivas.",
            "participação somente após os 16 anos.",
            "organização apenas mediante autorização judicial.",
            "organização e participação em entidades estudantis.",
            "substituição da direção escolar por entidade estudantil."
        ],
        "correta": 3,
        "explicacao": "O art. 53, IV, assegura organização e participação em entidades estudantis.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Não acrescente restrições que a lei não estabelece."
    },
    {
        "pergunta": "O acesso à escola pública e gratuita deve ser assegurado:",
        "alternativas": [
            "apenas no ensino fundamental.",
            "em qualquer município, independentemente da residência.",
            "próxima da residência, garantindo-se vagas no mesmo estabelecimento a irmãos que frequentem a mesma etapa ou ciclo da educação básica.",
            "somente se houver irmãos matriculados.",
            "exclusivamente em tempo integral."
        ],
        "correta": 2,
        "explicacao": "O art. 53, V, assegura escola pública e gratuita próxima da residência e a regra relativa a irmãos na mesma etapa ou ciclo.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A Ágata já cobrou esse inciso."
    },
    {
        "pergunta": "É direito dos pais ou responsáveis, segundo o ECA:",
        "alternativas": [
            "dispensar os filhos da escolarização obrigatória.",
            "definir individualmente o currículo nacional.",
            "alterar notas atribuídas pelos professores.",
            "ter ciência do processo pedagógico e participar da definição das propostas educacionais.",
            "impedir qualquer avaliação escolar."
        ],
        "correta": 3,
        "explicacao": "O parágrafo único do art. 53 garante ciência do processo pedagógico e participação na definição das propostas educacionais.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Direito de participação não significa poder unilateral."
    },
    {
        "pergunta": "É dever do Estado assegurar à criança e ao adolescente:",
        "alternativas": [
            "ensino fundamental obrigatório e gratuito, inclusive para os que a ele não tiveram acesso na idade própria.",
            "ensino obrigatório apenas aos que ingressaram na idade regular.",
            "educação pública somente quando houver disponibilidade financeira.",
            "ensino médio apenas mediante pagamento.",
            "atendimento educacional especializado exclusivamente em instituição segregada."
        ],
        "correta": 0,
        "explicacao": "O art. 54 estabelece garantias estatais, incluindo ensino fundamental obrigatório e gratuito, inclusive fora da idade própria.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A banca costuma cobrar o rol do art. 54."
    },
    {
        "pergunta": "O atendimento educacional especializado às pessoas com deficiência deve ser assegurado:",
        "alternativas": [
            "exclusivamente em instituições privadas.",
            "exclusivamente em escola especial.",
            "somente após o ensino fundamental.",
            "apenas por decisão judicial.",
            "preferencialmente na rede regular de ensino."
        ],
        "correta": 4,
        "explicacao": "O art. 54, III, usa a expressão preferencialmente na rede regular de ensino.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Não troque 'preferencialmente' por 'exclusivamente'."
    },
    {
        "pergunta": "O ECA assegura atendimento em creche e pré-escola às crianças de:",
        "alternativas": [
            "zero a cinco anos de idade.",
            "zero a seis anos completos.",
            "quatro a sete anos.",
            "dois a cinco anos.",
            "apenas quatro e cinco anos."
        ],
        "correta": 0,
        "explicacao": "O art. 54, IV, prevê atendimento em creche e pré-escola às crianças de zero a cinco anos.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Atenção a materiais antigos que ainda tragam 'zero a seis'."
    },
    {
        "pergunta": "O acesso ao ensino obrigatório e gratuito é considerado pelo ECA:",
        "alternativas": [
            "direito condicionado à renda.",
            "benefício facultativo.",
            "direito público subjetivo.",
            "serviço sem exigibilidade jurídica.",
            "direito apenas dos responsáveis."
        ],
        "correta": 2,
        "explicacao": "O art. 54, §1º, qualifica-o como direito público subjetivo.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Expressão muito cobrada em legislação educacional."
    },
    {
        "pergunta": "O não oferecimento do ensino obrigatório pelo poder público ou sua oferta irregular:",
        "alternativas": [
            "somente produz efeito após decisão do Conselho Escolar.",
            "não produz consequência jurídica.",
            "gera responsabilidade exclusiva da família.",
            "é questão interna da escola.",
            "importa responsabilidade da autoridade competente."
        ],
        "correta": 4,
        "explicacao": "Art. 54, §2º: o não oferecimento ou oferta irregular importa responsabilidade da autoridade competente.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A Ágata cobrou formulação semelhante em 2025."
    },
    {
        "pergunta": "Os pais ou responsáveis têm a obrigação de:",
        "alternativas": [
            "decidir livremente se a criança frequentará a escola.",
            "optar obrigatoriamente por escola privada.",
            "realizar ensino domiciliar em substituição à escola.",
            "matricular apenas a partir dos 7 anos.",
            "matricular seus filhos ou pupilos na rede regular de ensino."
        ],
        "correta": 4,
        "explicacao": "O art. 55 estabelece a obrigação de matrícula na rede regular de ensino.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Cobrança direta e objetiva."
    },
    {
        "pergunta": "Os dirigentes de estabelecimentos de ensino fundamental comunicarão ao Conselho Tutelar casos de:",
        "alternativas": [
            "qualquer nota abaixo da média e qualquer atraso.",
            "maus-tratos envolvendo seus alunos; reiteração de faltas injustificadas e evasão escolar, esgotados os recursos escolares; elevados níveis de repetência.",
            "apenas prática de ato infracional.",
            "somente abandono escolar definitivo.",
            "toda discordância entre família e professor."
        ],
        "correta": 1,
        "explicacao": "O art. 56 estabelece essas hipóteses, além das atualizações legais posteriores.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Esse artigo já foi cobrado diretamente pela Ágata."
    },
    {
        "pergunta": "Após alterações recentes do ECA, os dirigentes escolares também devem comunicar ao Conselho Tutelar casos de:",
        "alternativas": [
            "negligência, abuso ou abandono na forma prevista em lei.",
            "qualquer dificuldade de aprendizagem.",
            "toda ausência em atividade extracurricular.",
            "qualquer pedido de transferência.",
            "todo conflito verbal entre colegas."
        ],
        "correta": 0,
        "explicacao": "O texto compilado do art. 56 contém hipóteses de comunicação obrigatória atualizadas por legislação posterior.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Importante revisar o texto compilado, não apenas apostilas antigas."
    },
    {
        "pergunta": "É proibido qualquer trabalho a menores de:",
        "alternativas": [
            "12 anos, sem exceções.",
            "14 anos, salvo na condição de aprendiz.",
            "16 anos, inclusive como aprendiz.",
            "18 anos, em qualquer hipótese.",
            "15 anos, salvo autorização familiar."
        ],
        "correta": 1,
        "explicacao": "O art. 60 do ECA estabelece proibição de trabalho a menores de 14 anos, salvo como aprendiz, sem prejuízo da disciplina constitucional atual sobre trabalho do adolescente.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A banca já cobrou trabalho do adolescente; atenção à articulação com a Constituição."
    },
    {
        "pergunta": "Ao adolescente aprendiz maior de 14 anos são assegurados:",
        "alternativas": [
            "apenas direitos previdenciários.",
            "direitos trabalhistas e previdenciários.",
            "nenhum direito trabalhista.",
            "somente bolsa escolar.",
            "direitos trabalhistas apenas após os 18 anos."
        ],
        "correta": 1,
        "explicacao": "O art. 65 assegura direitos trabalhistas e previdenciários ao adolescente aprendiz maior de 14 anos.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Questão cobrada pela Ágata em 2025."
    },
    {
        "pergunta": "Ao adolescente empregado, aprendiz, em regime familiar de trabalho, aluno de escola técnica ou assistido em entidade é vedado trabalho:",
        "alternativas": [
            "diurno em qualquer situação.",
            "noturno, perigoso, insalubre ou penoso, entre outras hipóteses previstas no ECA.",
            "realizado em ambiente protegido.",
            "compatível com seu desenvolvimento.",
            "em aprendizagem profissional regular."
        ],
        "correta": 1,
        "explicacao": "O art. 67 estabelece vedações, incluindo trabalho noturno entre 22h e 5h, perigoso, insalubre ou penoso e outros incompatíveis.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A banca pode pedir uma das vedações."
    },
    {
        "pergunta": "As medidas de proteção à criança e ao adolescente são aplicáveis quando seus direitos forem ameaçados ou violados:",
        "alternativas": [
            "somente por ação dos pais.",
            "por ação ou omissão da sociedade ou do Estado, por falta, omissão ou abuso dos pais ou responsável, ou em razão de sua própria conduta.",
            "apenas por ato do Estado.",
            "exclusivamente após prática de crime.",
            "somente mediante decisão criminal."
        ],
        "correta": 1,
        "explicacao": "O art. 98 apresenta essas três hipóteses gerais.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Tema importante para atuação em rede de proteção."
    },
    {
        "pergunta": "Na aplicação das medidas de proteção, deve-se levar em conta:",
        "alternativas": [
            "o afastamento familiar como primeira opção.",
            "a punição como finalidade principal.",
            "as necessidades pedagógicas, preferindo-se as que visem ao fortalecimento dos vínculos familiares e comunitários.",
            "somente a conveniência administrativa.",
            "a segregação escolar automática."
        ],
        "correta": 2,
        "explicacao": "O art. 100 orienta a aplicação das medidas, com enfoque protetivo e fortalecimento de vínculos.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A lógica do ECA é protetiva, não punitiva."
    },
    {
        "pergunta": "Constitui medida específica de proteção prevista no ECA:",
        "alternativas": [
            "prisão civil dos responsáveis.",
            "expulsão definitiva da rede escolar.",
            "matrícula e frequência obrigatórias em estabelecimento oficial de ensino fundamental.",
            "suspensão automática do poder familiar pela escola.",
            "reprovação compulsória."
        ],
        "correta": 2,
        "explicacao": "O art. 101 inclui matrícula e frequência obrigatórias em estabelecimento oficial de ensino fundamental.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Boa questão para relacionar ECA e escola."
    },
    {
        "pergunta": "O Conselho Tutelar é órgão:",
        "alternativas": [
            "policial e responsável pela aplicação de penas.",
            "temporário e integrante do Poder Judiciário.",
            "jurisdicional e subordinado ao juiz da infância.",
            "permanente e autônomo, não jurisdicional, encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente.",
            "escolar e subordinado à direção das escolas."
        ],
        "correta": 3,
        "explicacao": "O art. 131 traz essa definição.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Definição clássica de concurso."
    },
    {
        "pergunta": "Em cada Município e em cada Região Administrativa do Distrito Federal haverá, no mínimo:",
        "alternativas": [
            "1 Conselho Tutelar privado.",
            "2 Conselhos Tutelares obrigatoriamente.",
            "1 Conselho Tutelar vinculado ao Poder Judiciário.",
            "1 Conselho Tutelar apenas se houver mais de 100 mil habitantes.",
            "1 Conselho Tutelar como órgão integrante da administração pública local."
        ],
        "correta": 4,
        "explicacao": "O art. 132 estabelece ao menos um Conselho Tutelar em cada Município e Região Administrativa do DF.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Cuidado com números inventados."
    },
    {
        "pergunta": "O Conselho Tutelar é composto por:",
        "alternativas": [
            "10 membros escolhidos pelo Ministério Público.",
            "3 membros nomeados pelo prefeito.",
            "7 membros escolhidos pelo juiz.",
            "5 professores indicados pela escola.",
            "5 membros escolhidos pela população local para mandato previsto em lei."
        ],
        "correta": 4,
        "explicacao": "O art. 132 prevê cinco membros escolhidos pela população local.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Número de membros é cobrança frequente."
    },
    {
        "pergunta": "Entre as atribuições do Conselho Tutelar está:",
        "alternativas": [
            "aplicar pena de prisão aos responsáveis.",
            "julgar criminalmente adolescentes.",
            "atender crianças e adolescentes nas hipóteses legais e aplicar medidas de proteção cabíveis.",
            "substituir permanentemente a direção escolar.",
            "condenar civilmente o Município."
        ],
        "correta": 2,
        "explicacao": "O art. 136 enumera atribuições do Conselho Tutelar, incluindo atendimento e aplicação de medidas protetivas.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Conselho Tutelar não exerce jurisdição."
    },
    {
        "pergunta": "Suspeita ou confirmação de castigo físico, tratamento cruel ou degradante e maus-tratos contra criança ou adolescente:",
        "alternativas": [
            "deve ser obrigatoriamente comunicada ao Conselho Tutelar, sem prejuízo de outras providências legais.",
            "deve permanecer em sigilo dentro da escola.",
            "só pode ser comunicada com autorização dos responsáveis.",
            "somente pode ser comunicada após laudo judicial.",
            "não deve ser comunicada quando o autor for familiar."
        ],
        "correta": 0,
        "explicacao": "O ECA impõe comunicação obrigatória aos órgãos de proteção nas hipóteses previstas.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Para Apoio Escolar, saber quando comunicar é essencial."
    },
    {
        "pergunta": "Um profissional de apoio percebe marcas recorrentes e relato espontâneo de agressões domésticas por um aluno. A conduta compatível com o ECA é:",
        "alternativas": [
            "prometer segredo absoluto e não informar ninguém.",
            "acolher sem realizar interrogatório investigativo, preservar o estudante e comunicar a situação pelos fluxos institucionais de proteção competentes.",
            "confrontar imediatamente o suposto agressor diante da criança.",
            "divulgar o caso no grupo de mensagens da escola.",
            "pedir que a criança repita o relato para vários servidores."
        ],
        "correta": 1,
        "explicacao": "O ECA e a rede de proteção exigem proteção contra violência e comunicação adequada; o profissional escolar não deve transformar acolhimento em investigação informal.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Questão situacional alinhada ao cargo, mas fundada em dever legal real."
    },
    {
        "pergunta": "Uma escola impede um estudante de recorrer de uma avaliação, alegando que somente os responsáveis podem questionar critérios. Segundo o ECA:",
        "alternativas": [
            "a escola está correta.",
            "o direito depende de autorização judicial.",
            "o direito existe apenas no ensino médio.",
            "a escola está incorreta, pois a própria criança ou adolescente tem direito de contestar critérios avaliativos e recorrer às instâncias escolares superiores.",
            "o ECA não trata do tema."
        ],
        "correta": 3,
        "explicacao": "O art. 53, III, assegura diretamente à criança e ao adolescente esse direito.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A Ágata já cobrou exatamente esse dispositivo."
    },
    {
        "pergunta": "Dois irmãos frequentam a mesma etapa da educação básica, mas a rede pública pretende matriculá-los em escolas distantes sem justificativa. O ECA assegura:",
        "alternativas": [
            "vaga conjunta somente na educação infantil.",
            "vaga conjunta apenas se forem gêmeos.",
            "vagas no mesmo estabelecimento aos irmãos que frequentem a mesma etapa ou ciclo da educação básica, observada a regra de escola próxima da residência.",
            "nenhuma proteção relacionada à matrícula de irmãos.",
            "vaga conjunta apenas mediante decisão judicial."
        ],
        "correta": 2,
        "explicacao": "O art. 53, V, contém a garantia referente a irmãos na mesma etapa ou ciclo.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Detalhe literal com boa chance de cobrança."
    },
    {
        "pergunta": "Após esgotar os recursos escolares diante da reiteração de faltas injustificadas e evasão, a direção do ensino fundamental deve:",
        "alternativas": [
            "aplicar medida socioeducativa.",
            "cancelar definitivamente a matrícula.",
            "aguardar o fim do ano sem providências.",
            "comunicar apenas à associação de pais.",
            "comunicar o caso ao Conselho Tutelar."
        ],
        "correta": 4,
        "explicacao": "O art. 56 determina a comunicação ao Conselho Tutelar nessa hipótese.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Observe a expressão 'esgotados os recursos escolares'."
    },
    {
        "pergunta": "Um aluno apresenta elevados níveis de repetência. Conforme o art. 56 do ECA, essa situação:",
        "alternativas": [
            "integra as hipóteses que devem ser comunicadas ao Conselho Tutelar pelos dirigentes do ensino fundamental.",
            "autoriza expulsão automática.",
            "deve ser ignorada pela direção.",
            "é assunto exclusivo da família.",
            "gera medida socioeducativa automática."
        ],
        "correta": 0,
        "explicacao": "Elevados níveis de repetência constam do art. 56 como hipótese de comunicação.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A Ágata já cobrou o rol completo."
    },
    {
        "pergunta": "Em relação à dignidade, é dever de todos:",
        "alternativas": [
            "proteger apenas crianças menores de 12 anos.",
            "agir somente quando houver ordem judicial.",
            "velar pela dignidade da criança e do adolescente, pondo-os a salvo de tratamento desumano, violento, aterrorizante, vexatório ou constrangedor.",
            "intervir apenas em violência física.",
            "transferir integralmente esse dever à família."
        ],
        "correta": 2,
        "explicacao": "O art. 18 estabelece dever geral de proteção da dignidade.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "A expressão 'dever de todos' é relevante."
    },
    {
        "pergunta": "Um profissional expõe publicamente a deficiência e as dificuldades pessoais de um estudante para 'dar exemplo' aos colegas. À luz do ECA, a conduta:",
        "alternativas": [
            "viola o direito ao respeito e à preservação da imagem, identidade e integridade moral.",
            "é válida se tiver finalidade pedagógica.",
            "é permitida quando a informação for verdadeira.",
            "é obrigatória em casos de baixo rendimento.",
            "não envolve direito protegido pelo ECA."
        ],
        "correta": 0,
        "explicacao": "O art. 17 protege integridade moral, imagem, identidade e outros aspectos da esfera pessoal.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Aplicação prática adequada ao Apoio Escolar."
    },
    {
        "pergunta": "O ECA assegura à criança e ao adolescente o direito à liberdade de:",
        "alternativas": [
            "exercer trabalho noturno.",
            "praticar qualquer ato civil sem representação.",
            "abandonar a escola por vontade própria.",
            "opinião e expressão, respeitadas as limitações legais.",
            "desobedecer toda norma escolar."
        ],
        "correta": 3,
        "explicacao": "O art. 16 inclui opinião e expressão entre os aspectos do direito à liberdade.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Direito de expressão não elimina regras legais."
    },
    {
        "pergunta": "Considera-se ato infracional:",
        "alternativas": [
            "somente crime praticado por maior de 16 anos.",
            "qualquer nota baixa na escola.",
            "qualquer desobediência familiar.",
            "a conduta descrita como crime ou contravenção penal.",
            "infração administrativa praticada pela escola."
        ],
        "correta": 3,
        "explicacao": "O art. 103 define ato infracional como conduta descrita como crime ou contravenção penal.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Definição literal."
    },
    {
        "pergunta": "São penalmente inimputáveis os menores de:",
        "alternativas": [
            "12 anos.",
            "16 anos apenas.",
            "14 anos.",
            "18 anos, sujeitos às medidas previstas no ECA.",
            "21 anos."
        ],
        "correta": 3,
        "explicacao": "O art. 104 estabelece inimputabilidade penal dos menores de 18 anos.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Não confundir responsabilização socioeducativa com responsabilidade penal adulta."
    },
    {
        "pergunta": "Ao ato infracional praticado por criança correspondem:",
        "alternativas": [
            "medidas aplicadas exclusivamente pela escola.",
            "as mesmas penas do Código Penal.",
            "internação socioeducativa obrigatória.",
            "prisão preventiva.",
            "as medidas de proteção previstas no art. 101."
        ],
        "correta": 4,
        "explicacao": "O art. 105 determina aplicação das medidas do art. 101 à criança autora de ato infracional.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Diferença clássica: criança → proteção; adolescente → medidas socioeducativas cabíveis."
    },
    {
        "pergunta": "A internação, como medida socioeducativa, constitui medida:",
        "alternativas": [
            "obrigatória para todo ato infracional.",
            "privativa da liberdade, sujeita aos princípios de brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento.",
            "aplicável diretamente pela escola.",
            "sem limite ou revisão.",
            "destinada a crianças menores de 12 anos."
        ],
        "correta": 1,
        "explicacao": "O art. 121 caracteriza a internação e estabelece brevidade, excepcionalidade e respeito à condição peculiar.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Palavras-chave muito cobradas."
    },
    {
        "pergunta": "Entre as linhas de ação da política de atendimento está:",
        "alternativas": [
            "somente ações policiais.",
            "apenas internação de adolescentes.",
            "políticas sociais básicas e serviços, programas, projetos e benefícios de assistência social e outros mecanismos previstos no ECA.",
            "exclusivamente acolhimento institucional.",
            "apenas programas de transferência de renda."
        ],
        "correta": 2,
        "explicacao": "O art. 87 apresenta linhas de ação da política de atendimento.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Evite reduzir a política de atendimento a uma única instituição."
    },
    {
        "pergunta": "Uma criança com deficiência é excluída sistematicamente das atividades recreativas da escola sem avaliação individual e sem tentativa de adaptação. Considerando o ECA, essa prática:",
        "alternativas": [
            "contraria direitos à dignidade, respeito, educação e convivência sem discriminação.",
            "é compatível com a proteção integral se facilitar o trabalho dos adultos.",
            "é obrigatória por motivo de segurança.",
            "depende apenas da opinião dos colegas.",
            "não envolve direitos protegidos pelo Estatuto."
        ],
        "correta": 0,
        "explicacao": "O ECA protege a criança contra discriminação e assegura dignidade, respeito e educação em condições de igualdade.",
        "feedbackAcerto": "Excelente! Você aplicou corretamente o Estatuto da Criança e do Adolescente.",
        "feedbackErro": "Revise o dispositivo do ECA indicado na explicação e compare atentamente as alternativas.",
        "dicaBanca": "Situação prática deve ser resolvida pelos direitos concretos do Estatuto."
    }
];

if (typeof window !== 'undefined') { window.apoioECA = apoioECA; }
