// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// LDB — LEI Nº 9.394/1996 — SEGUNDA REVISÃO 2026
// Texto vigente verificado até agosto/2026.
// 50 questões — feedbacks específicos — sem numeração fixa.
// Distratores auditados para o sorteio aleatório do Farol.
// ============================================================

const apoioLDB = [
    {
        "pergunta": "Segundo a LDB, a educação abrange processos formativos desenvolvidos:",
        "alternativas": [
            "apenas na família, na escola e em instituições de formação profissional.",
            "somente nas instituições escolares oficialmente credenciadas pelo poder público.",
            "na família, convivência humana, trabalho, instituições de ensino e manifestações culturais.",
            "exclusivamente em espaços escolares, acadêmicos e ambientes formais de trabalho.",
            "somente em instituições públicas e privadas integrantes dos sistemas de ensino."
        ],
        "correta": 2,
        "explicacao": "O art. 1º adota conceito amplo de educação e menciona família, convivência humana, trabalho, instituições de ensino e pesquisa, movimentos sociais, organizações da sociedade civil e manifestações culturais.",
        "feedbackAcerto": "O art. 1º adota conceito amplo de educação e menciona família, convivência humana, trabalho, instituições de ensino e pesquisa, movimentos sociais, organizações da sociedade civil e manifestações culturais. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 1º adota conceito amplo de educação e menciona família, convivência humana, trabalho, instituições de ensino e pesquisa, movimentos sociais, organizações da sociedade civil e manifestações culturais. Não reduza educação ao espaço escolar: o art. 1º adota conceito mais amplo.",
        "dicaBanca": "Não reduza educação ao espaço escolar: o art. 1º adota conceito mais amplo."
    },
    {
        "pergunta": "A educação escolar, conforme a LDB, deverá vincular-se:",
        "alternativas": [
            "somente às demandas do mercado de trabalho.",
            "ao mundo do trabalho e à prática social.",
            "à preparação exclusiva para exames nacionais.",
            "apenas às atividades desenvolvidas pela escola.",
            "ao ensino profissional desde a educação infantil."
        ],
        "correta": 1,
        "explicacao": "O §2º do art. 1º determina a vinculação da educação escolar ao mundo do trabalho e à prática social.",
        "feedbackAcerto": "O §2º do art. 1º determina a vinculação da educação escolar ao mundo do trabalho e à prática social. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O §2º do art. 1º determina a vinculação da educação escolar ao mundo do trabalho e à prática social. A expressão legal é 'mundo do trabalho e prática social'; não a transforme em preparação exclusiva para emprego.",
        "dicaBanca": "A expressão legal é 'mundo do trabalho e prática social'; não a transforme em preparação exclusiva para emprego."
    },
    {
        "pergunta": "A educação, dever da família e do Estado, tem por finalidade:",
        "alternativas": [
            "o pleno desenvolvimento do educando, preparo para a cidadania e qualificação para o trabalho.",
            "o desenvolvimento intelectual, a preparação acadêmica e a seleção para o trabalho.",
            "a formação escolar, a preparação profissional e o ingresso obrigatório no ensino superior.",
            "o domínio dos conteúdos curriculares, a disciplina e a qualificação profissional.",
            "a formação técnica, a preparação para avaliações e o exercício de profissão regulamentada."
        ],
        "correta": 0,
        "explicacao": "O art. 2º reúne três finalidades: pleno desenvolvimento, preparo para o exercício da cidadania e qualificação para o trabalho.",
        "feedbackAcerto": "O art. 2º reúne três finalidades: pleno desenvolvimento, preparo para o exercício da cidadania e qualificação para o trabalho. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 2º reúne três finalidades: pleno desenvolvimento, preparo para o exercício da cidadania e qualificação para o trabalho. A tríade do art. 2º é pleno desenvolvimento, cidadania e qualificação para o trabalho.",
        "dicaBanca": "A tríade do art. 2º é pleno desenvolvimento, cidadania e qualificação para o trabalho."
    },
    {
        "pergunta": "Constitui princípio do ensino previsto expressamente na LDB:",
        "alternativas": [
            "centralização administrativa das escolas públicas pela União.",
            "uniformidade pedagógica obrigatória em todos os sistemas de ensino.",
            "seleção de estudantes segundo o rendimento acadêmico anual.",
            "igualdade de condições para acesso e permanência na escola.",
            "prioridade do ensino privado sobre a oferta pública gratuita."
        ],
        "correta": 3,
        "explicacao": "O art. 3º estabelece igualdade de condições para acesso e permanência na escola.",
        "feedbackAcerto": "O art. 3º estabelece igualdade de condições para acesso e permanência na escola. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 3º estabelece igualdade de condições para acesso e permanência na escola. A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal.",
        "dicaBanca": "A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal."
    },
    {
        "pergunta": "Entre os princípios do ensino previstos na LDB encontra-se:",
        "alternativas": [
            "autonomia familiar para substituir livremente a escolarização obrigatória conforme a organização prevista pela legislação educacional.",
            "liberdade de cada escola para afastar componentes curriculares obrigatórios nacionais.",
            "autonomia docente para dispensar a proposta pedagógica do estabelecimento conforme a organização prevista pela legislação educacional.",
            "liberdade dos sistemas para restringir acesso conforme desempenho escolar conforme a organização prevista pela legislação educacional.",
            "liberdade de aprender, ensinar, pesquisar e divulgar a cultura, o pensamento, a arte e o saber."
        ],
        "correta": 4,
        "explicacao": "A liberdade de aprender, ensinar, pesquisar e divulgar cultura, pensamento, arte e saber integra o art. 3º.",
        "feedbackAcerto": "A liberdade de aprender, ensinar, pesquisar e divulgar cultura, pensamento, arte e saber integra o art. 3º. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A liberdade de aprender, ensinar, pesquisar e divulgar cultura, pensamento, arte e saber integra o art. 3º. A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal.",
        "dicaBanca": "A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal."
    },
    {
        "pergunta": "O pluralismo previsto entre os princípios da LDB refere-se:",
        "alternativas": [
            "aos calendários e às cargas horárias.",
            "às ideias e às concepções pedagógicas.",
            "às avaliações e aos critérios de promoção.",
            "às etapas e aos níveis de escolarização.",
            "aos sistemas públicos e às redes privadas."
        ],
        "correta": 1,
        "explicacao": "A LDB consagra o pluralismo de ideias e de concepções pedagógicas.",
        "feedbackAcerto": "A LDB consagra o pluralismo de ideias e de concepções pedagógicas. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A LDB consagra o pluralismo de ideias e de concepções pedagógicas. A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal.",
        "dicaBanca": "A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal."
    },
    {
        "pergunta": "A coexistência de instituições públicas e privadas de ensino é:",
        "alternativas": [
            "uma regra exclusiva da educação profissional.",
            "uma exceção aplicável apenas ao ensino superior.",
            "um princípio do ensino previsto na LDB.",
            "uma faculdade dos Municípios sem previsão nacional.",
            "uma medida transitória prevista para a educação básica."
        ],
        "correta": 2,
        "explicacao": "A coexistência de instituições públicas e privadas de ensino consta expressamente entre os princípios do art. 3º.",
        "feedbackAcerto": "A coexistência de instituições públicas e privadas de ensino consta expressamente entre os princípios do art. 3º. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A coexistência de instituições públicas e privadas de ensino consta expressamente entre os princípios do art. 3º. Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação.",
        "dicaBanca": "Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação."
    },
    {
        "pergunta": "A LDB prevê, entre os princípios do ensino:",
        "alternativas": [
            "promoção automática em toda educação básica.",
            "padronização integral dos métodos de ensino.",
            "garantia de padrão de qualidade.",
            "gratuidade em toda instituição privada conveniada.",
            "currículo nacional idêntico em todas as escolas."
        ],
        "correta": 2,
        "explicacao": "A garantia de padrão de qualidade é princípio expresso da LDB.",
        "feedbackAcerto": "A garantia de padrão de qualidade é princípio expresso da LDB. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A garantia de padrão de qualidade é princípio expresso da LDB. A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal.",
        "dicaBanca": "A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal."
    },
    {
        "pergunta": "A valorização da experiência extraescolar significa reconhecer:",
        "alternativas": [
            "apenas conhecimentos adquiridos em cursos reconhecidos pelo Ministério da Educação.",
            "somente experiências profissionais comprovadas por carteira de trabalho.",
            "aprendizagens e experiências formativas construídas também fora do espaço escolar.",
            "experiências familiares apenas quando convertidas em disciplinas curriculares.",
            "somente atividades extracurriculares promovidas pela própria escola."
        ],
        "correta": 2,
        "explicacao": "A valorização da experiência extraescolar é princípio da LDB e impede reduzir formação ao que ocorre formalmente na escola.",
        "feedbackAcerto": "A valorização da experiência extraescolar é princípio da LDB e impede reduzir formação ao que ocorre formalmente na escola. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A valorização da experiência extraescolar é princípio da LDB e impede reduzir formação ao que ocorre formalmente na escola. Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação.",
        "dicaBanca": "Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação."
    },
    {
        "pergunta": "A vinculação entre educação escolar, trabalho e práticas sociais constitui:",
        "alternativas": [
            "atribuição exclusiva dos sistemas estaduais.",
            "objetivo exclusivo do ensino médio.",
            "regra aplicável somente à educação profissional.",
            "diretriz facultativa para instituições privadas.",
            "princípio do ensino previsto na LDB."
        ],
        "correta": 4,
        "explicacao": "O art. 3º inclui a vinculação entre educação escolar, trabalho e práticas sociais.",
        "feedbackAcerto": "O art. 3º inclui a vinculação entre educação escolar, trabalho e práticas sociais. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 3º inclui a vinculação entre educação escolar, trabalho e práticas sociais. Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação.",
        "dicaBanca": "Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação."
    },
    {
        "pergunta": "A LDB assegura como princípio:",
        "alternativas": [
            "tratamento uniforme das identidades dos estudantes.",
            "neutralização das diferenças culturais no currículo.",
            "prioridade de uma tradição cultural sobre as demais.",
            "consideração com a diversidade étnico-racial.",
            "restrição da diversidade às atividades extracurriculares."
        ],
        "correta": 3,
        "explicacao": "A consideração com a diversidade étnico-racial integra expressamente os princípios da LDB.",
        "feedbackAcerto": "A consideração com a diversidade étnico-racial integra expressamente os princípios da LDB. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A consideração com a diversidade étnico-racial integra expressamente os princípios da LDB. A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal.",
        "dicaBanca": "A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal."
    },
    {
        "pergunta": "A garantia do direito à educação e à aprendizagem ao longo da vida é:",
        "alternativas": [
            "objetivo exclusivo da educação profissional continuada.",
            "regra restrita à educação de jovens e adultos.",
            "princípio da educação nacional previsto na LDB.",
            "benefício condicionado à conclusão do ensino médio.",
            "diretriz aplicável apenas às instituições públicas."
        ],
        "correta": 2,
        "explicacao": "A aprendizagem ao longo da vida foi incorporada expressamente ao rol de princípios do art. 3º.",
        "feedbackAcerto": "A aprendizagem ao longo da vida foi incorporada expressamente ao rol de princípios do art. 3º. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A aprendizagem ao longo da vida foi incorporada expressamente ao rol de princípios do art. 3º. Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação.",
        "dicaBanca": "Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação."
    },
    {
        "pergunta": "A educação básica obrigatória e gratuita é assegurada dos:",
        "alternativas": [
            "4 aos 14 anos de idade.",
            "0 aos 17 anos de idade.",
            "5 aos 17 anos de idade.",
            "6 aos 14 anos de idade.",
            "4 aos 17 anos de idade."
        ],
        "correta": 4,
        "explicacao": "O art. 4º assegura educação básica obrigatória e gratuita dos quatro aos dezessete anos.",
        "feedbackAcerto": "O art. 4º assegura educação básica obrigatória e gratuita dos quatro aos dezessete anos. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 4º assegura educação básica obrigatória e gratuita dos quatro aos dezessete anos. Não confunda gratuidade da educação infantil com faixa de escolaridade obrigatória: a obrigatoriedade vai dos 4 aos 17 anos.",
        "dicaBanca": "Não confunda gratuidade da educação infantil com faixa de escolaridade obrigatória: a obrigatoriedade vai dos 4 aos 17 anos."
    },
    {
        "pergunta": "O dever estatal com educação infantil gratuita alcança:",
        "alternativas": [
            "crianças de seis anos incompletos apenas.",
            "apenas crianças de quatro e cinco anos.",
            "somente crianças de até três anos.",
            "crianças de até cinco anos de idade.",
            "somente crianças em situação de vulnerabilidade."
        ],
        "correta": 3,
        "explicacao": "A educação infantil gratuita é assegurada às crianças de até cinco anos; a obrigatoriedade escolar começa aos quatro.",
        "feedbackAcerto": "A educação infantil gratuita é assegurada às crianças de até cinco anos; a obrigatoriedade escolar começa aos quatro. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A educação infantil gratuita é assegurada às crianças de até cinco anos; a obrigatoriedade escolar começa aos quatro. Gratuidade alcança até 5 anos; obrigatoriedade começa aos 4 anos.",
        "dicaBanca": "Gratuidade alcança até 5 anos; obrigatoriedade começa aos 4 anos."
    },
    {
        "pergunta": "O acesso à educação básica obrigatória é considerado pela LDB:",
        "alternativas": [
            "direito público subjetivo.",
            "benefício administrativo condicionado à renda.",
            "direito disponível da administração pública.",
            "serviço facultativo para a família.",
            "direito condicionado à existência de vaga próxima."
        ],
        "correta": 0,
        "explicacao": "O art. 5º qualifica o acesso à educação básica obrigatória como direito público subjetivo.",
        "feedbackAcerto": "O art. 5º qualifica o acesso à educação básica obrigatória como direito público subjetivo. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 5º qualifica o acesso à educação básica obrigatória como direito público subjetivo. A expressão 'direito público subjetivo' é literal e não depende de conveniência administrativa.",
        "dicaBanca": "A expressão 'direito público subjetivo' é literal e não depende de conveniência administrativa."
    },
    {
        "pergunta": "O dever de recensear anualmente crianças e adolescentes em idade escolar e jovens e adultos que não concluíram a educação básica cabe:",
        "alternativas": [
            "exclusivamente aos estabelecimentos privados conforme a organização prevista pela legislação educacional.",
            "exclusivamente às escolas públicas municipais conforme a organização prevista pela legislação educacional.",
            "somente ao Ministério da Educação conforme a organização prevista pela legislação educacional.",
            "apenas aos Conselhos Tutelares municipais conforme a organização prevista pela legislação educacional.",
            "ao poder público na esfera de sua competência federativa."
        ],
        "correta": 4,
        "explicacao": "A LDB atribui ao poder público, na esfera de sua competência federativa, o recenseamento anual desses grupos.",
        "feedbackAcerto": "A LDB atribui ao poder público, na esfera de sua competência federativa, o recenseamento anual desses grupos. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A LDB atribui ao poder público, na esfera de sua competência federativa, o recenseamento anual desses grupos. A incumbência é do Poder Público na esfera de sua competência, não somente da escola ou de um único ente federativo.",
        "dicaBanca": "A incumbência é do Poder Público na esfera de sua competência, não somente da escola ou de um único ente federativo."
    },
    {
        "pergunta": "Os pais ou responsáveis devem efetuar a matrícula das crianças na educação básica:",
        "alternativas": [
            "a partir dos cinco anos de idade.",
            "a partir dos três anos de idade.",
            "somente aos seis anos de idade.",
            "a partir dos quatro anos de idade.",
            "quando concluída a educação infantil."
        ],
        "correta": 3,
        "explicacao": "O art. 6º fixa o dever de matrícula a partir dos quatro anos.",
        "feedbackAcerto": "O art. 6º fixa o dever de matrícula a partir dos quatro anos. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 6º fixa o dever de matrícula a partir dos quatro anos. A matrícula obrigatória começa aos 4 anos; não use a idade de ingresso no ensino fundamental como resposta.",
        "dicaBanca": "A matrícula obrigatória começa aos 4 anos; não use a idade de ingresso no ensino fundamental como resposta."
    },
    {
        "pergunta": "O ensino é livre à iniciativa privada desde que sejam atendidas, entre outras, as condições de:",
        "alternativas": [
            "cumprimento das normas gerais e autorização e avaliação de qualidade pelo poder público.",
            "autonomia curricular plena e dispensa de avaliação pelo sistema competente.",
            "autorização municipal para qualquer instituição, independentemente do sistema.",
            "financiamento público obrigatório e currículo próprio sem base nacional.",
            "dispensa das normas gerais quando houver proposta pedagógica própria."
        ],
        "correta": 0,
        "explicacao": "O art. 7º condiciona a iniciativa privada ao cumprimento das normas gerais, autorização e avaliação de qualidade, além de capacidade de autofinanciamento, ressalvadas hipóteses constitucionais.",
        "feedbackAcerto": "O art. 7º condiciona a iniciativa privada ao cumprimento das normas gerais, autorização e avaliação de qualidade, além de capacidade de autofinanciamento, ressalvadas hipóteses constitucionais. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 7º condiciona a iniciativa privada ao cumprimento das normas gerais, autorização e avaliação de qualidade, além de capacidade de autofinanciamento, ressalvadas hipóteses constitucionais. Ensino privado é livre, mas condicionado às normas gerais, autorização, avaliação de qualidade e demais requisitos legais.",
        "dicaBanca": "Ensino privado é livre, mas condicionado às normas gerais, autorização, avaliação de qualidade e demais requisitos legais."
    },
    {
        "pergunta": "União, Estados, Distrito Federal e Municípios organizarão seus sistemas de ensino:",
        "alternativas": [
            "com independência absoluta entre os entes.",
            "sob direção exclusiva da União.",
            "em regime de colaboração.",
            "sob coordenação obrigatória dos Estados.",
            "por delegação anual do Ministério da Educação."
        ],
        "correta": 2,
        "explicacao": "O art. 8º estabelece a organização dos sistemas de ensino em regime de colaboração.",
        "feedbackAcerto": "O art. 8º estabelece a organização dos sistemas de ensino em regime de colaboração. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 8º estabelece a organização dos sistemas de ensino em regime de colaboração. A organização federativa da educação é colaborativa; autonomia dos entes não significa isolamento.",
        "dicaBanca": "A organização federativa da educação é colaborativa; autonomia dos entes não significa isolamento."
    },
    {
        "pergunta": "Cabe à União coordenar a política nacional de educação, exercendo função:",
        "alternativas": [
            "normativa, redistributiva e supletiva em relação às demais instâncias educacionais.",
            "apenas executiva sobre todas as escolas públicas brasileiras.",
            "exclusivamente fiscalizatória sobre os sistemas municipais de ensino.",
            "somente financeira sobre as redes estaduais e municipais.",
            "administrativa direta sobre todas as instituições de educação básica."
        ],
        "correta": 0,
        "explicacao": "O §1º do art. 8º atribui à União coordenação nacional e funções normativa, redistributiva e supletiva.",
        "feedbackAcerto": "O §1º do art. 8º atribui à União coordenação nacional e funções normativa, redistributiva e supletiva. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O §1º do art. 8º atribui à União coordenação nacional e funções normativa, redistributiva e supletiva. Separe coordenação nacional e funções normativa, redistributiva e supletiva das atribuições executivas de Estados e Municípios.",
        "dicaBanca": "Separe coordenação nacional e funções normativa, redistributiva e supletiva das atribuições executivas de Estados e Municípios."
    },
    {
        "pergunta": "É incumbência da União:",
        "alternativas": [
            "administrar diretamente todas as escolas públicas de educação básica.",
            "elaborar isoladamente os planos municipais e estaduais de educação.",
            "elaborar o Plano Nacional de Educação em colaboração com Estados, Distrito Federal e Municípios.",
            "autorizar cada estabelecimento municipal de ensino fundamental conforme a organização prevista pela legislação educacional.",
            "definir individualmente a proposta pedagógica das escolas estaduais conforme a organização prevista pela legislação educacional."
        ],
        "correta": 2,
        "explicacao": "O art. 9º atribui à União a elaboração do PNE em colaboração com os demais entes.",
        "feedbackAcerto": "O art. 9º atribui à União a elaboração do PNE em colaboração com os demais entes. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 9º atribui à União a elaboração do PNE em colaboração com os demais entes. Separe coordenação nacional e funções normativa, redistributiva e supletiva das atribuições executivas de Estados e Municípios.",
        "dicaBanca": "Separe coordenação nacional e funções normativa, redistributiva e supletiva das atribuições executivas de Estados e Municípios."
    },
    {
        "pergunta": "Os Estados incumbem-se de:",
        "alternativas": [
            "assegurar o ensino fundamental e oferecer, com prioridade, o ensino médio.",
            "oferecer prioritariamente creches e pré-escolas em todo o território.",
            "manter exclusivamente instituições públicas de educação superior.",
            "autorizar somente estabelecimentos integrantes dos sistemas municipais.",
            "atuar prioritariamente na educação infantil e no ensino fundamental."
        ],
        "correta": 0,
        "explicacao": "A LDB atribui aos Estados assegurar o fundamental e oferecer, com prioridade, o ensino médio.",
        "feedbackAcerto": "A LDB atribui aos Estados assegurar o fundamental e oferecer, com prioridade, o ensino médio. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A LDB atribui aos Estados assegurar o fundamental e oferecer, com prioridade, o ensino médio. A prioridade estadual é o ensino médio; não a troque pela prioridade municipal no ensino fundamental.",
        "dicaBanca": "A prioridade estadual é o ensino médio; não a troque pela prioridade municipal no ensino fundamental."
    },
    {
        "pergunta": "Segundo a redação vigente em 2026, os Municípios devem oferecer:",
        "alternativas": [
            "somente creches urbanas e ensino fundamental nas áreas rurais.",
            "prioritariamente ensino médio e, complementarmente, educação infantil.",
            "educação infantil urbana e rural e, com prioridade, ensino fundamental.",
            "educação infantil apenas na zona urbana e ensino médio na zona rural.",
            "prioritariamente educação profissional e, subsidiariamente, ensino fundamental."
        ],
        "correta": 2,
        "explicacao": "A Lei 15.369/2026 explicitou creches e pré-escolas nas zonas urbanas e rurais, proporcionalmente à distribuição populacional, mantendo prioridade ao fundamental.",
        "feedbackAcerto": "A Lei 15.369/2026 explicitou creches e pré-escolas nas zonas urbanas e rurais, proporcionalmente à distribuição populacional, mantendo prioridade ao fundamental. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A Lei 15.369/2026 explicitou creches e pré-escolas nas zonas urbanas e rurais, proporcionalmente à distribuição populacional, mantendo prioridade ao fundamental. Use a redação de 2026: educação infantil nas zonas urbana e rural, proporcionalmente à população, e prioridade ao ensino fundamental.",
        "dicaBanca": "Use a redação de 2026: educação infantil nas zonas urbana e rural, proporcionalmente à população, e prioridade ao ensino fundamental."
    },
    {
        "pergunta": "Ao Distrito Federal aplicam-se as competências referentes:",
        "alternativas": [
            "aos Estados e aos Municípios.",
            "somente aos Estados.",
            "somente aos Municípios.",
            "à União e aos Estados.",
            "à União e aos Municípios."
        ],
        "correta": 0,
        "explicacao": "O parágrafo único do art. 10 determina ao DF as competências referentes a Estados e Municípios.",
        "feedbackAcerto": "O parágrafo único do art. 10 determina ao DF as competências referentes a Estados e Municípios. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O parágrafo único do art. 10 determina ao DF as competências referentes a Estados e Municípios. O Distrito Federal acumula competências atribuídas aos Estados e aos Municípios.",
        "dicaBanca": "O Distrito Federal acumula competências atribuídas aos Estados e aos Municípios."
    },
    {
        "pergunta": "É incumbência dos estabelecimentos de ensino:",
        "alternativas": [
            "elaborar as diretrizes curriculares nacionais.",
            "elaborar e executar sua proposta pedagógica.",
            "autorizar o funcionamento de escolas privadas.",
            "instituir o sistema municipal de ensino.",
            "aprovar o Plano Nacional de Educação."
        ],
        "correta": 1,
        "explicacao": "O art. 12 atribui diretamente à escola a elaboração e execução de sua proposta pedagógica.",
        "feedbackAcerto": "O art. 12 atribui diretamente à escola a elaboração e execução de sua proposta pedagógica. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 12 atribui diretamente à escola a elaboração e execução de sua proposta pedagógica. Diferencie incumbências da escola das incumbências dos docentes e dos sistemas de ensino.",
        "dicaBanca": "Diferencie incumbências da escola das incumbências dos docentes e dos sistemas de ensino."
    },
    {
        "pergunta": "Os estabelecimentos de ensino devem assegurar o cumprimento:",
        "alternativas": [
            "dos dias letivos escolhidos individualmente pelos docentes.",
            "apenas das horas destinadas às avaliações finais.",
            "somente dos dias definidos pelo calendário federal.",
            "dos dias letivos e das horas-aula estabelecidas.",
            "apenas da carga horária dos componentes da base comum."
        ],
        "correta": 3,
        "explicacao": "O art. 12 inclui assegurar o cumprimento dos dias letivos e horas-aula estabelecidos.",
        "feedbackAcerto": "O art. 12 inclui assegurar o cumprimento dos dias letivos e horas-aula estabelecidos. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 12 inclui assegurar o cumprimento dos dias letivos e horas-aula estabelecidos. Diferencie incumbências da escola das incumbências dos docentes e dos sistemas de ensino.",
        "dicaBanca": "Diferencie incumbências da escola das incumbências dos docentes e dos sistemas de ensino."
    },
    {
        "pergunta": "A escola deve prover meios para recuperação:",
        "alternativas": [
            "somente dos estudantes reprovados ao fim do ano.",
            "dos alunos de menor rendimento.",
            "apenas dos alunos com deficiência comprovada.",
            "dos estudantes com frequência inferior ao mínimo legal.",
            "somente daqueles indicados pelo conselho de classe."
        ],
        "correta": 1,
        "explicacao": "O art. 12 determina prover meios para recuperação dos alunos de menor rendimento.",
        "feedbackAcerto": "O art. 12 determina prover meios para recuperação dos alunos de menor rendimento. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 12 determina prover meios para recuperação dos alunos de menor rendimento. Diferencie incumbências da escola das incumbências dos docentes e dos sistemas de ensino.",
        "dicaBanca": "Diferencie incumbências da escola das incumbências dos docentes e dos sistemas de ensino."
    },
    {
        "pergunta": "É incumbência dos estabelecimentos informar pais ou responsáveis sobre:",
        "alternativas": [
            "frequência e rendimento dos alunos e execução da proposta pedagógica.",
            "somente notas finais e ocorrências disciplinares graves.",
            "apenas frequência quando inferior ao mínimo legal.",
            "exclusivamente resultados das avaliações externas nacionais.",
            "somente alterações curriculares aprovadas pelo sistema."
        ],
        "correta": 0,
        "explicacao": "A LDB prevê informação sobre frequência, rendimento e execução da proposta pedagógica.",
        "feedbackAcerto": "A LDB prevê informação sobre frequência, rendimento e execução da proposta pedagógica. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A LDB prevê informação sobre frequência, rendimento e execução da proposta pedagógica. Diferencie incumbências da escola das incumbências dos docentes e dos sistemas de ensino.",
        "dicaBanca": "Diferencie incumbências da escola das incumbências dos docentes e dos sistemas de ensino."
    },
    {
        "pergunta": "Os docentes incumbem-se de:",
        "alternativas": [
            "aprovar o plano municipal de educação.",
            "autorizar o funcionamento da escola.",
            "definir as normas do sistema de ensino.",
            "credenciar instituições educacionais.",
            "zelar pela aprendizagem dos alunos."
        ],
        "correta": 4,
        "explicacao": "O art. 13 coloca o zelo pela aprendizagem entre as incumbências docentes.",
        "feedbackAcerto": "O art. 13 coloca o zelo pela aprendizagem entre as incumbências docentes. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 13 coloca o zelo pela aprendizagem entre as incumbências docentes. O art. 13 cobra deveres do professor; não transfira para ele competências administrativas do estabelecimento ou do sistema.",
        "dicaBanca": "O art. 13 cobra deveres do professor; não transfira para ele competências administrativas do estabelecimento ou do sistema."
    },
    {
        "pergunta": "Os docentes devem estabelecer estratégias de recuperação:",
        "alternativas": [
            "somente para estudantes já reprovados.",
            "para os alunos de menor rendimento.",
            "apenas quando houver determinação judicial.",
            "exclusivamente após o encerramento do ano.",
            "somente para estudantes com laudo pedagógico."
        ],
        "correta": 1,
        "explicacao": "O art. 13 atribui aos docentes estratégias de recuperação para alunos de menor rendimento.",
        "feedbackAcerto": "O art. 13 atribui aos docentes estratégias de recuperação para alunos de menor rendimento. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 13 atribui aos docentes estratégias de recuperação para alunos de menor rendimento. O art. 13 cobra deveres do professor; não transfira para ele competências administrativas do estabelecimento ou do sistema.",
        "dicaBanca": "O art. 13 cobra deveres do professor; não transfira para ele competências administrativas do estabelecimento ou do sistema."
    },
    {
        "pergunta": "A gestão democrática do ensino público na educação básica observará, entre outros, o princípio da:",
        "alternativas": [
            "participação apenas de docentes efetivos nas decisões da unidade.",
            "centralização das decisões pedagógicas exclusivamente na direção escolar.",
            "exclusão das comunidades local e escolar dos conselhos escolares.",
            "substituição do projeto pedagógico por decisões do sistema de ensino.",
            "participação dos profissionais da educação na elaboração do projeto pedagógico."
        ],
        "correta": 4,
        "explicacao": "O art. 14 prevê participação dos profissionais na elaboração do projeto pedagógico e das comunidades em Conselhos Escolares e Fóruns.",
        "feedbackAcerto": "O art. 14 prevê participação dos profissionais na elaboração do projeto pedagógico e das comunidades em Conselhos Escolares e Fóruns. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 14 prevê participação dos profissionais na elaboração do projeto pedagógico e das comunidades em Conselhos Escolares e Fóruns. A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal.",
        "dicaBanca": "A banca costuma misturar princípios verdadeiros com formulações que não constam do art. 3º; confira a redação legal."
    },
    {
        "pergunta": "A LDB assegura às unidades escolares públicas de educação básica progressivos graus de autonomia:",
        "alternativas": [
            "pedagógica, administrativa e de gestão financeira.",
            "apenas pedagógica e disciplinar.",
            "somente administrativa e curricular.",
            "financeira e legislativa exclusivamente.",
            "pedagógica e normativa nacional."
        ],
        "correta": 0,
        "explicacao": "O art. 15 prevê autonomia pedagógica, administrativa e de gestão financeira, observadas as normas gerais.",
        "feedbackAcerto": "O art. 15 prevê autonomia pedagógica, administrativa e de gestão financeira, observadas as normas gerais. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 15 prevê autonomia pedagógica, administrativa e de gestão financeira, observadas as normas gerais. A autonomia escolar é progressiva e abrange dimensões pedagógica, administrativa e de gestão financeira, dentro das normas.",
        "dicaBanca": "A autonomia escolar é progressiva e abrange dimensões pedagógica, administrativa e de gestão financeira, dentro das normas."
    },
    {
        "pergunta": "A educação básica poderá organizar-se em séries, períodos semestrais, ciclos ou outras formas:",
        "alternativas": [
            "apenas em escolas privadas com autonomia pedagógica reconhecida.",
            "somente quando houver autorização individual do Ministério da Educação.",
            "sempre que o interesse do processo de aprendizagem assim recomendar.",
            "exclusivamente nos anos iniciais do ensino fundamental.",
            "desde que seja adotado o mesmo modelo em todo o sistema nacional."
        ],
        "correta": 2,
        "explicacao": "O art. 23 permite diversas formas de organização quando o interesse do processo de aprendizagem recomendar.",
        "feedbackAcerto": "O art. 23 permite diversas formas de organização quando o interesse do processo de aprendizagem recomendar. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 23 permite diversas formas de organização quando o interesse do processo de aprendizagem recomendar. A LDB admite diferentes formas de organização quando o processo de aprendizagem recomendar; não existe modelo único obrigatório.",
        "dicaBanca": "A LDB admite diferentes formas de organização quando o processo de aprendizagem recomendar; não existe modelo único obrigatório."
    },
    {
        "pergunta": "Na educação básica, a escola poderá reclassificar alunos:",
        "alternativas": [
            "somente quando houver reprovação no estabelecimento de origem.",
            "somente quando provenientes de escolas do mesmo Município.",
            "apenas mediante autorização prévia do Ministério da Educação.",
            "exclusivamente no início do ensino fundamental obrigatório.",
            "inclusive em transferências entre estabelecimentos no País e no exterior."
        ],
        "correta": 4,
        "explicacao": "O §1º do art. 23 admite reclassificação, inclusive em transferências entre estabelecimentos no País e no exterior.",
        "feedbackAcerto": "O §1º do art. 23 admite reclassificação, inclusive em transferências entre estabelecimentos no País e no exterior. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O §1º do art. 23 admite reclassificação, inclusive em transferências entre estabelecimentos no País e no exterior. A reclassificação também alcança transferências no País e no exterior, nas condições legais.",
        "dicaBanca": "A reclassificação também alcança transferências no País e no exterior, nas condições legais."
    },
    {
        "pergunta": "Na verificação do rendimento escolar, devem prevalecer:",
        "alternativas": [
            "resultados das provas finais sobre registros produzidos durante o período.",
            "aspectos qualitativos e resultados ao longo do período sobre provas finais.",
            "aspectos quantitativos sobre avaliações qualitativas do estudante.",
            "resultados de exames padronizados sobre avaliações realizadas pela escola.",
            "notas obtidas no último bimestre sobre o desempenho acumulado."
        ],
        "correta": 1,
        "explicacao": "O art. 24 determina avaliação contínua e cumulativa, com prevalência qualitativa e dos resultados ao longo do período.",
        "feedbackAcerto": "O art. 24 determina avaliação contínua e cumulativa, com prevalência qualitativa e dos resultados ao longo do período. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 24 determina avaliação contínua e cumulativa, com prevalência qualitativa e dos resultados ao longo do período. Na avaliação, prevalecem aspectos qualitativos e resultados ao longo do período sobre provas finais isoladas.",
        "dicaBanca": "Na avaliação, prevalecem aspectos qualitativos e resultados ao longo do período sobre provas finais isoladas."
    },
    {
        "pergunta": "Os estudos de recuperação serão disciplinados pelas instituições e devem ocorrer:",
        "alternativas": [
            "apenas mediante solicitação dos responsáveis.",
            "exclusivamente após o encerramento do ano letivo.",
            "somente antes da primeira avaliação bimestral.",
            "de preferência paralelamente ao período letivo.",
            "obrigatoriamente durante as férias escolares."
        ],
        "correta": 3,
        "explicacao": "A LDB determina estudos de recuperação obrigatórios nos casos de baixo rendimento, de preferência paralelos ao período letivo.",
        "feedbackAcerto": "A LDB determina estudos de recuperação obrigatórios nos casos de baixo rendimento, de preferência paralelos ao período letivo. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A LDB determina estudos de recuperação obrigatórios nos casos de baixo rendimento, de preferência paralelos ao período letivo. A expressão importante é 'de preferência paralelos ao período letivo'; recuperação não deve ser pensada apenas no fim do ano.",
        "dicaBanca": "A expressão importante é 'de preferência paralelos ao período letivo'; recuperação não deve ser pensada apenas no fim do ano."
    },
    {
        "pergunta": "A frequência mínima para aprovação no ensino fundamental e médio é de:",
        "alternativas": [
            "60% do total de horas letivas.",
            "75% do total de horas letivas.",
            "70% do total de dias escolares.",
            "80% do total de horas letivas.",
            "75% do total de avaliações aplicadas."
        ],
        "correta": 1,
        "explicacao": "O art. 24 exige frequência mínima de 75% do total de horas letivas para aprovação.",
        "feedbackAcerto": "O art. 24 exige frequência mínima de 75% do total de horas letivas para aprovação. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 24 exige frequência mínima de 75% do total de horas letivas para aprovação. Para ensino fundamental e médio, a regra geral é 75% do total de horas letivas.",
        "dicaBanca": "Para ensino fundamental e médio, a regra geral é 75% do total de horas letivas."
    },
    {
        "pergunta": "Após a Lei nº 14.945/2024, a carga horária mínima anual é de:",
        "alternativas": [
            "800 horas no fundamental e 1.000 horas no médio.",
            "1.000 horas no fundamental e 1.000 horas no médio.",
            "800 horas no fundamental e 800 horas no médio.",
            "1.000 horas no fundamental e 1.200 horas no médio.",
            "800 horas no fundamental e 1.200 horas no médio."
        ],
        "correta": 0,
        "explicacao": "A redação vigente do art. 24 estabelece 800 horas no fundamental e 1.000 horas no médio, em no mínimo 200 dias.",
        "feedbackAcerto": "A redação vigente do art. 24 estabelece 800 horas no fundamental e 1.000 horas no médio, em no mínimo 200 dias. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A redação vigente do art. 24 estabelece 800 horas no fundamental e 1.000 horas no médio, em no mínimo 200 dias. Use a redação atual: 800 horas no fundamental e 1.000 horas no médio, distribuídas em pelo menos 200 dias.",
        "dicaBanca": "Use a redação atual: 800 horas no fundamental e 1.000 horas no médio, distribuídas em pelo menos 200 dias."
    },
    {
        "pergunta": "A educação infantil tem como finalidade:",
        "alternativas": [
            "o desenvolvimento intelectual da criança, independentemente das dimensões social e física.",
            "a alfabetização formal obrigatória das crianças antes do ingresso no ensino fundamental.",
            "a preparação prioritária da criança para avaliações do primeiro ano escolar.",
            "o desenvolvimento integral da criança de até cinco anos, complementando família e comunidade.",
            "a substituição progressiva da ação educativa desenvolvida pela família."
        ],
        "correta": 3,
        "explicacao": "O art. 29 define desenvolvimento integral físico, psicológico, intelectual e social, complementando família e comunidade.",
        "feedbackAcerto": "O art. 29 define desenvolvimento integral físico, psicológico, intelectual e social, complementando família e comunidade. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 29 define desenvolvimento integral físico, psicológico, intelectual e social, complementando família e comunidade. A finalidade é desenvolvimento integral físico, psicológico, intelectual e social, complementando família e comunidade.",
        "dicaBanca": "A finalidade é desenvolvimento integral físico, psicológico, intelectual e social, complementando família e comunidade."
    },
    {
        "pergunta": "Na educação infantil, a avaliação ocorre mediante:",
        "alternativas": [
            "registro de frequência apenas, sem acompanhamento do desenvolvimento.",
            "provas periódicas com objetivo de promoção para o primeiro ano do fundamental.",
            "avaliação classificatória anual, admitida retenção na pré-escola.",
            "exames padronizados destinados a definir prontidão para alfabetização.",
            "acompanhamento e registro, sem objetivo de promoção, mesmo para acesso ao fundamental."
        ],
        "correta": 4,
        "explicacao": "O art. 31 determina acompanhamento e registro do desenvolvimento sem objetivo de promoção, inclusive para acesso ao fundamental.",
        "feedbackAcerto": "O art. 31 determina acompanhamento e registro do desenvolvimento sem objetivo de promoção, inclusive para acesso ao fundamental. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 31 determina acompanhamento e registro do desenvolvimento sem objetivo de promoção, inclusive para acesso ao fundamental. Na educação infantil há acompanhamento e registro, sem objetivo de promoção, inclusive para ingresso no fundamental.",
        "dicaBanca": "Na educação infantil há acompanhamento e registro, sem objetivo de promoção, inclusive para ingresso no fundamental."
    },
    {
        "pergunta": "O ensino fundamental obrigatório possui:",
        "alternativas": [
            "nove anos de duração e inicia-se aos seis anos.",
            "oito anos de duração e inicia-se aos seis anos.",
            "nove anos de duração e inicia-se aos sete anos.",
            "dez anos de duração e inicia-se aos cinco anos.",
            "oito anos de duração e inicia-se aos sete anos."
        ],
        "correta": 0,
        "explicacao": "O art. 32 estabelece ensino fundamental de nove anos, iniciando aos seis anos.",
        "feedbackAcerto": "O art. 32 estabelece ensino fundamental de nove anos, iniciando aos seis anos. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 32 estabelece ensino fundamental de nove anos, iniciando aos seis anos. Ensino fundamental: 9 anos, início aos 6.",
        "dicaBanca": "Ensino fundamental: 9 anos, início aos 6."
    },
    {
        "pergunta": "O ensino médio é definido pela LDB como:",
        "alternativas": [
            "etapa intermediária da educação básica, com duração de quatro anos.",
            "modalidade complementar ao ensino fundamental, com duração de dois anos.",
            "primeira etapa da educação superior, com duração mínima de três anos.",
            "etapa final da educação básica, com duração mínima de três anos.",
            "modalidade profissional obrigatória posterior ao ensino fundamental."
        ],
        "correta": 3,
        "explicacao": "O art. 35 define o ensino médio como etapa final da educação básica, com duração mínima de três anos.",
        "feedbackAcerto": "O art. 35 define o ensino médio como etapa final da educação básica, com duração mínima de três anos. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 35 define o ensino médio como etapa final da educação básica, com duração mínima de três anos. Ensino médio é etapa final da educação básica e tem duração mínima de 3 anos.",
        "dicaBanca": "Ensino médio é etapa final da educação básica e tem duração mínima de 3 anos."
    },
    {
        "pergunta": "Nos currículos da educação infantil, ensino fundamental e ensino médio, a base nacional comum deve ser:",
        "alternativas": [
            "adotada sem qualquer contextualização cultural, econômica ou social.",
            "substituída por parte diversificada sempre que houver currículo municipal.",
            "aplicada apenas às escolas públicas dos sistemas estaduais e municipais.",
            "complementada por parte diversificada segundo características regionais e locais.",
            "restrita aos componentes de língua portuguesa e matemática."
        ],
        "correta": 3,
        "explicacao": "O art. 26 determina base nacional comum complementada por parte diversificada conforme características regionais e locais.",
        "feedbackAcerto": "O art. 26 determina base nacional comum complementada por parte diversificada conforme características regionais e locais. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 26 determina base nacional comum complementada por parte diversificada conforme características regionais e locais. Base comum e parte diversificada se complementam; uma não substitui automaticamente a outra.",
        "dicaBanca": "Base comum e parte diversificada se complementam; uma não substitui automaticamente a outra."
    },
    {
        "pergunta": "Nos ensinos fundamental e médio, públicos e privados, é obrigatório o estudo:",
        "alternativas": [
            "somente da história política europeia e brasileira.",
            "da história e cultura afro-brasileira e indígena.",
            "da cultura indígena apenas nas escolas públicas.",
            "da história afro-brasileira apenas no ensino médio.",
            "de culturas regionais apenas quando houver lei municipal."
        ],
        "correta": 1,
        "explicacao": "O art. 26-A torna obrigatório o estudo da história e cultura afro-brasileira e indígena no fundamental e médio, públicos e privados.",
        "feedbackAcerto": "O art. 26-A torna obrigatório o estudo da história e cultura afro-brasileira e indígena no fundamental e médio, públicos e privados. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 26-A torna obrigatório o estudo da história e cultura afro-brasileira e indígena no fundamental e médio, públicos e privados. Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação.",
        "dicaBanca": "Leia o núcleo verbal da regra e compare-o com as alternativas; a banca costuma alterar apenas o alcance ou o sujeito da obrigação."
    },
    {
        "pergunta": "A educação digital, segundo a LDB, será componente curricular:",
        "alternativas": [
            "apenas dos anos finais do fundamental.",
            "somente do ensino médio.",
            "do ensino fundamental e do ensino médio.",
            "da educação infantil e do fundamental.",
            "exclusivamente da educação profissional."
        ],
        "correta": 2,
        "explicacao": "O §11 do art. 26 prevê educação digital, com letramento digital, computação, programação, robótica e outras competências digitais, no fundamental e médio.",
        "feedbackAcerto": "O §11 do art. 26 prevê educação digital, com letramento digital, computação, programação, robótica e outras competências digitais, no fundamental e médio. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O §11 do art. 26 prevê educação digital, com letramento digital, computação, programação, robótica e outras competências digitais, no fundamental e médio. A redação atual prevê educação digital no ensino fundamental e no ensino médio.",
        "dicaBanca": "A redação atual prevê educação digital no ensino fundamental e no ensino médio."
    },
    {
        "pergunta": "A Lei nº 15.468/2026 incluiu como componente curricular obrigatório:",
        "alternativas": [
            "educação ambiental como disciplina autônoma.",
            "educação financeira e empreendedorismo.",
            "direito constitucional e administrativo.",
            "programação e inteligência artificial.",
            "educação política e direitos da cidadania."
        ],
        "correta": 4,
        "explicacao": "A Lei 15.468/2026 acrescentou ao art. 26 a educação política e direitos da cidadania no âmbito do estudo da realidade social e política.",
        "feedbackAcerto": "A Lei 15.468/2026 acrescentou ao art. 26 a educação política e direitos da cidadania no âmbito do estudo da realidade social e política. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A Lei 15.468/2026 acrescentou ao art. 26 a educação política e direitos da cidadania no âmbito do estudo da realidade social e política. Atualização de 2026: educação política e direitos da cidadania passou a integrar obrigatoriamente o estudo da realidade social e política.",
        "dicaBanca": "Atualização de 2026: educação política e direitos da cidadania passou a integrar obrigatoriamente o estudo da realidade social e política."
    },
    {
        "pergunta": "A Lei nº 15.360/2026 acrescentou à LDB dever do poder público relativo:",
        "alternativas": [
            "à gratuidade obrigatória do ensino superior em instituições privadas.",
            "às condições mínimas de infraestrutura das escolas públicas de educação básica.",
            "à oferta universal de transporte escolar para estudantes universitários.",
            "à criação de laboratórios apenas nas escolas públicas de ensino médio.",
            "à substituição das bibliotecas escolares por acervos exclusivamente digitais."
        ],
        "correta": 1,
        "explicacao": "O novo art. 25-A exige condições mínimas nas escolas públicas, incluindo biblioteca, laboratórios, internet, quadra coberta, cozinha, refeitório, banheiros, acessibilidade e saneamento.",
        "feedbackAcerto": "O novo art. 25-A exige condições mínimas nas escolas públicas, incluindo biblioteca, laboratórios, internet, quadra coberta, cozinha, refeitório, banheiros, acessibilidade e saneamento. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O novo art. 25-A exige condições mínimas nas escolas públicas, incluindo biblioteca, laboratórios, internet, quadra coberta, cozinha, refeitório, banheiros, acessibilidade e saneamento. Atualização de 2026: o art. 25-A lista infraestrutura mínima das escolas públicas, inclusive acessibilidade.",
        "dicaBanca": "Atualização de 2026: o art. 25-A lista infraestrutura mínima das escolas públicas, inclusive acessibilidade."
    },
    {
        "pergunta": "Entre as condições mínimas das escolas públicas incluídas na LDB em 2026 está:",
        "alternativas": [
            "transporte escolar próprio mantido por cada unidade.",
            "laboratório de idiomas obrigatório em todas as unidades.",
            "auditório climatizado para eventos da comunidade.",
            "piscina destinada às atividades de educação física.",
            "instalações com adequadas condições de acessibilidade."
        ],
        "correta": 4,
        "explicacao": "O art. 25-A, incluído pela Lei 15.360/2026, menciona expressamente instalações com adequadas condições de acessibilidade.",
        "feedbackAcerto": "O art. 25-A, incluído pela Lei 15.360/2026, menciona expressamente instalações com adequadas condições de acessibilidade. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 25-A, incluído pela Lei 15.360/2026, menciona expressamente instalações com adequadas condições de acessibilidade. Atualização de 2026: o art. 25-A lista infraestrutura mínima das escolas públicas, inclusive acessibilidade.",
        "dicaBanca": "Atualização de 2026: o art. 25-A lista infraestrutura mínima das escolas públicas, inclusive acessibilidade."
    },
    {
        "pergunta": "A Lei nº 15.462/2026 especificou que o aperfeiçoamento profissional continuado pode compreender:",
        "alternativas": [
            "somente cursos de curta duração oferecidos pelo próprio sistema de ensino.",
            "qualificação, pós-graduação lato e stricto sensu e período para pesquisa em educação.",
            "exclusivamente cursos de pós-graduação stricto sensu em universidades públicas.",
            "apenas atividades realizadas fora da jornada e sem licenciamento remunerado.",
            "qualificação técnica apenas quando vinculada à disciplina ministrada pelo docente."
        ],
        "correta": 1,
        "explicacao": "A alteração do art. 67 explicitou cursos de qualificação, pós-graduação lato e stricto sensu e período para pesquisa na área da educação.",
        "feedbackAcerto": "A alteração do art. 67 explicitou cursos de qualificação, pós-graduação lato e stricto sensu e período para pesquisa na área da educação. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "A alteração do art. 67 explicitou cursos de qualificação, pós-graduação lato e stricto sensu e período para pesquisa na área da educação. Atualização de 2026: aperfeiçoamento continuado passou a mencionar qualificação, pós-graduação lato/stricto sensu e pesquisa em educação.",
        "dicaBanca": "Atualização de 2026: aperfeiçoamento continuado passou a mencionar qualificação, pós-graduação lato/stricto sensu e pesquisa em educação."
    },
    {
        "pergunta": "A valorização dos profissionais da educação assegura, nos termos dos estatutos e planos de carreira:",
        "alternativas": [
            "dispensa de avaliação de desempenho para todos os profissionais efetivos.",
            "promoção automática anual independentemente dos critérios dos sistemas de ensino.",
            "ingresso na carreira pública sem concurso quando houver experiência comprovada.",
            "aperfeiçoamento continuado, inclusive com possibilidade de licenciamento periódico remunerado.",
            "redução obrigatória da jornada após a conclusão de curso de pós-graduação."
        ],
        "correta": 3,
        "explicacao": "O art. 67 prevê aperfeiçoamento profissional continuado, inclusive licenciamento periódico remunerado para esse fim.",
        "feedbackAcerto": "O art. 67 prevê aperfeiçoamento profissional continuado, inclusive licenciamento periódico remunerado para esse fim. Esse é exatamente o ponto normativo que deve ser reconhecido na alternativa correta.",
        "feedbackErro": "O art. 67 prevê aperfeiçoamento profissional continuado, inclusive licenciamento periódico remunerado para esse fim. O art. 67 assegura aperfeiçoamento continuado e admite licenciamento periódico remunerado para esse fim.",
        "dicaBanca": "O art. 67 assegura aperfeiçoamento continuado e admite licenciamento periódico remunerado para esse fim."
    }
];

if (typeof window !== 'undefined') { window.apoioLDB = apoioLDB; }
