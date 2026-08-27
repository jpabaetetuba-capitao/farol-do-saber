// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// POLÍTICA NACIONAL DO TEA — SEGUNDA REVISÃO FINAL 2026
// Lei nº 12.764/2012 + Decreto nº 8.368/2014
// Atualizações: Lei nº 13.977/2020, Lei nº 15.131/2025
// e Lei nº 15.256/2025.
// 50 questões únicas — 5 alternativas — padrão Instituto Ágata.
// Feedbacks específicos e compatíveis com sorteio aleatório.
// ============================================================

const apoioTEA = [
    {
        "pergunta": "Durante uma formação continuada, uma professora afirmou que o Transtorno do Espectro Autista (TEA) é caracterizado exclusivamente por dificuldades de aprendizagem. Outro participante discordou, mencionando os critérios previstos na Lei nº 12.764/2012. À luz da legislação, assinale a alternativa correta:",
        "alternativas": [
            "O TEA caracteriza-se exclusivamente por dificuldades acadêmicas persistentes, ainda que não exista alteração na interação social.",
            "O TEA é definido apenas pela presença de deficiência intelectual associada a prejuízos relevantes na aprendizagem escolar.",
            "O TEA depende obrigatoriamente da presença de deficiência física associada a dificuldades de comunicação e interação.",
            "O TEA é caracterizado somente por alterações motoras e sensoriais, sem necessidade de padrões comportamentais específicos.",
            "O TEA envolve deficiência persistente na comunicação e interação social e/ou padrões restritivos e repetitivos de comportamentos, interesses ou atividades."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A Lei nº 12.764/2012 descreve o TEA a partir de déficits persistentes na comunicação e interação social, associados a padrões restritivos e repetitivos de comportamento.",
        "feedbackErro": "A legislação não reduz o TEA a dificuldades escolares ou deficiência intelectual. A lei trabalha com dois eixos clínicos: comunicação/interação social e padrões restritivos/repetitivos.",
        "dicaBanca": "A lei trabalha com dois eixos clínicos: comunicação/interação social e padrões restritivos/repetitivos.",
        "explicacao": "A Lei nº 12.764/2012 descreve o TEA a partir de déficits persistentes na comunicação e interação social, associados a padrões restritivos e repetitivos de comportamento."
    },
    {
        "pergunta": "Durante uma avaliação clínica, verificou-se que determinada criança apresenta interesses extremamente restritos, necessidade intensa de rotinas e resistência significativa a mudanças. Considerando a definição legal do TEA, essas características estão relacionadas principalmente:",
        "alternativas": [
            "À deficiência visual associada.",
            "À ausência de desenvolvimento cognitivo.",
            "À incapacidade civil da criança.",
            "A padrões restritivos e repetitivos de comportamento.",
            "Ao transtorno de aprendizagem específico."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Padrões restritivos e repetitivos de comportamento constituem elemento central da caracterização do TEA.",
        "feedbackErro": "A legislação menciona expressamente comportamentos, interesses e atividades restritivas e repetitivas. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "Padrões restritivos e repetitivos de comportamento constituem elemento central da caracterização do TEA."
    },
    {
        "pergunta": "Durante um seminário, um palestrante afirmou que todas as pessoas com TEA apresentam exatamente as mesmas características, necessidades e potencialidades. À luz da legislação e dos conhecimentos atuais sobre o transtorno, assinale a alternativa correta:",
        "alternativas": [
            "As características do TEA variam significativamente entre os indivíduos, justificando a expressão 'espectro'.",
            "As diferenças individuais desaparecem na vida adulta.",
            "A afirmação está correta.",
            "As manifestações do TEA dependem exclusivamente do ambiente escolar.",
            "Os níveis de suporte não possuem relevância prática."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O conceito de espectro reflete a ampla diversidade de manifestações e necessidades de apoio existentes entre as pessoas com TEA.",
        "feedbackErro": "Uma das principais pegadinhas é tratar todas as pessoas com TEA como se fossem iguais. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "O conceito de espectro reflete a ampla diversidade de manifestações e necessidades de apoio existentes entre as pessoas com TEA."
    },
    {
        "pergunta": "Um candidato afirmou que a caracterização do TEA exige obrigatoriamente comprometimento intelectual severo. Considerando a Lei nº 12.764/2012, assinale a alternativa correta:",
        "alternativas": [
            "A presença de deficiência intelectual não constitui requisito obrigatório para a caracterização do TEA.",
            "O comprometimento intelectual severo é requisito indispensável para caracterização do TEA.",
            "Somente pessoas com deficiência intelectual podem ser diagnosticadas com TEA.",
            "A afirmação está correta.",
            "O TEA somente existe quando há incapacidade total para comunicação."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O TEA pode ocorrer com diferentes níveis de funcionamento intelectual, não sendo exigida deficiência intelectual para sua caracterização.",
        "feedbackErro": "A legislação não condiciona o reconhecimento do TEA à existência de deficiência intelectual. A lei trabalha com dois eixos clínicos: comunicação/interação social e padrões restritivos/repetitivos.",
        "dicaBanca": "A lei trabalha com dois eixos clínicos: comunicação/interação social e padrões restritivos/repetitivos.",
        "explicacao": "O TEA pode ocorrer com diferentes níveis de funcionamento intelectual, não sendo exigida deficiência intelectual para sua caracterização."
    },
    {
        "pergunta": "Ao estudar a Lei nº 12.764/2012, uma candidata concluiu que a pessoa com Transtorno do Espectro Autista é considerada pessoa com deficiência para todos os efeitos legais. Essa conclusão está:",
        "alternativas": [
            "Incorreta, pois a equiparação a pessoa com deficiência ocorre apenas para fins educacionais e de acesso à escola.",
            "Correta, pois a pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais.",
            "Incorreta, pois a equiparação depende de decisão judicial individual que reconheça a extensão dos direitos.",
            "Incorreta, pois a regra somente se aplica a crianças e adolescentes incluídos em classes comuns de ensino.",
            "Incorreta, pois a condição de pessoa com deficiência é reconhecida apenas para acesso a serviços de saúde."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A Lei nº 12.764/2012 estabelece expressamente que a pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais.",
        "feedbackErro": "Esse é um dos dispositivos mais cobrados da legislação sobre TEA. A equiparação a pessoa com deficiência para todos os efeitos legais é literal do art. 1º, §2º.",
        "dicaBanca": "A equiparação a pessoa com deficiência para todos os efeitos legais é literal do art. 1º, §2º.",
        "explicacao": "A Lei nº 12.764/2012 estabelece expressamente que a pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais."
    },
    {
        "pergunta": "Durante uma reunião com familiares, um gestor público afirmou que a proteção jurídica da pessoa com TEA limita-se ao acesso aos serviços de saúde. Uma mãe contestou a afirmação com base na Lei nº 12.764/2012. À luz da legislação, assinale a alternativa correta:",
        "alternativas": [
            "A proteção jurídica restringe-se ao atendimento médico especializado.",
            "Os direitos previstos aplicam-se exclusivamente à rede pública de serviços.",
            "A legislação protege apenas crianças e adolescentes com TEA.",
            "Os direitos da pessoa com TEA abrangem áreas como saúde, educação, trabalho, assistência social e cidadania.",
            "A proteção legal limita-se às situações de vulnerabilidade econômica."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A Política Nacional de Proteção dos Direitos da Pessoa com TEA possui caráter amplo e busca assegurar direitos em diversas áreas da vida social.",
        "feedbackErro": "A legislação não se restringe à saúde, abrangendo múltiplas dimensões da inclusão e da cidadania. A lei garante atenção integral à saúde, não atendimento condicionado a incapacidade prévia.",
        "dicaBanca": "A lei garante atenção integral à saúde, não atendimento condicionado a incapacidade prévia.",
        "explicacao": "A Política Nacional de Proteção dos Direitos da Pessoa com TEA possui caráter amplo e busca assegurar direitos em diversas áreas da vida social."
    },
    {
        "pergunta": "Um servidor afirmou que a pessoa com TEA somente pode exercer plenamente seus direitos após comprovar elevado grau de autonomia e independência. Considerando a legislação vigente, assinale a alternativa correta:",
        "alternativas": [
            "A afirmação está correta.",
            "Os direitos da pessoa com TEA decorrem de sua condição de cidadã e não de critérios de desempenho pessoal.",
            "O exercício dos direitos depende da demonstração prévia de autonomia plena.",
            "A autonomia é requisito obrigatório para reconhecimento dos direitos legais.",
            "Somente adultos com TEA podem exercer plenamente seus direitos."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. Os direitos fundamentais da pessoa com TEA decorrem da dignidade humana e da cidadania, não da demonstração de autonomia específica.",
        "feedbackErro": "A legislação assegura direitos independentemente do nível de suporte necessário à pessoa. TEA não autoriza presumir incapacidade geral; os direitos e a autonomia devem ser respeitados conforme a situação concreta.",
        "dicaBanca": "TEA não autoriza presumir incapacidade geral; os direitos e a autonomia devem ser respeitados conforme a situação concreta.",
        "explicacao": "Os direitos fundamentais da pessoa com TEA decorrem da dignidade humana e da cidadania, não da demonstração de autonomia específica."
    },
    {
        "pergunta": "Durante um debate sobre inclusão, um participante afirmou que a pessoa com TEA deve ser tratada exatamente da mesma forma em todas as situações para que haja igualdade. À luz dos princípios que orientam a legislação, assinale a alternativa correta:",
        "alternativas": [
            "A igualdade exige tratamento absolutamente idêntico em qualquer contexto.",
            "A igualdade somente admite diferenciação por decisão judicial.",
            "Qualquer adaptação configura privilégio indevido.",
            "A oferta de apoios e adaptações necessárias pode ser indispensável para assegurar igualdade de oportunidades.",
            "O princípio da igualdade impede medidas de inclusão específicas."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A igualdade material pode exigir medidas específicas para eliminar barreiras e garantir participação efetiva.",
        "feedbackErro": "A legislação busca igualdade de oportunidades, não simples tratamento idêntico. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A igualdade material pode exigir medidas específicas para eliminar barreiras e garantir participação efetiva."
    },
    {
        "pergunta": "Um município decidiu elaborar políticas públicas para pessoas com TEA sem consultar famílias, profissionais ou entidades representativas. Ao analisar a situação, um conselheiro destacou um princípio presente na legislação. Assinale a alternativa correta:",
        "alternativas": [
            "A legislação atribui toda responsabilidade ao sistema de saúde.",
            "A formulação de políticas públicas é responsabilidade exclusiva da União.",
            "A participação da sociedade deve ser evitada para garantir neutralidade técnica.",
            "As famílias não possuem papel relevante na efetivação dos direitos.",
            "A efetivação dos direitos da pessoa com TEA envolve atuação articulada entre poder público, sociedade e famílias."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A proteção dos direitos da pessoa com TEA depende da cooperação entre diversos atores sociais e institucionais.",
        "feedbackErro": "A legislação valoriza a atuação conjunta do Estado, da sociedade e das famílias. A política prevê participação da comunidade e articulação entre poder público, família e sociedade.",
        "dicaBanca": "A política prevê participação da comunidade e articulação entre poder público, família e sociedade.",
        "explicacao": "A proteção dos direitos da pessoa com TEA depende da cooperação entre diversos atores sociais e institucionais."
    },
    {
        "pergunta": "Uma campanha institucional divulgou que pessoas com TEA possuem menor capacidade de participação social e, por isso, devem permanecer em ambientes específicos para evitar dificuldades de convivência. Considerando os princípios da Lei nº 12.764/2012, assinale a alternativa correta:",
        "alternativas": [
            "A segregação social é medida recomendada pela legislação.",
            "A participação comunitária deve ocorrer apenas quando houver supervisão constante.",
            "A limitação da convivência social favorece o desenvolvimento da pessoa com TEA.",
            "A legislação promove inclusão, participação social, cidadania e combate à discriminação.",
            "A convivência comunitária não constitui objetivo da política nacional."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A Política Nacional de Proteção dos Direitos da Pessoa com TEA fundamenta-se na inclusão social, cidadania e participação plena na comunidade.",
        "feedbackErro": "A legislação combate práticas segregadoras e discriminatórias. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A Política Nacional de Proteção dos Direitos da Pessoa com TEA fundamenta-se na inclusão social, cidadania e participação plena na comunidade."
    },
    {
        "pergunta": "Uma criança apresentou sinais compatíveis com Transtorno do Espectro Autista durante os primeiros anos de vida. Os responsáveis foram orientados a aguardar a idade escolar para buscar avaliação especializada. À luz da Lei nº 12.764/2012, assinale a alternativa correta:",
        "alternativas": [
            "A orientação está correta, pois o diagnóstico somente deve ocorrer após a alfabetização.",
            "A intervenção precoce pode prejudicar o desenvolvimento da criança.",
            "O diagnóstico precoce constitui uma das diretrizes relevantes da política de proteção da pessoa com TEA.",
            "A avaliação especializada somente deve ocorrer quando houver prejuízo acadêmico.",
            "A legislação não trata do diagnóstico precoce."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A legislação valoriza o diagnóstico precoce como instrumento para favorecer o desenvolvimento e o acesso aos apoios necessários.",
        "feedbackErro": "A identificação precoce é um dos pilares da proteção e do atendimento à pessoa com TEA. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A legislação valoriza o diagnóstico precoce como instrumento para favorecer o desenvolvimento e o acesso aos apoios necessários."
    },
    {
        "pergunta": "Durante uma reunião de equipe, um profissional afirmou que o atendimento à pessoa com TEA deve ser conduzido exclusivamente por médicos, dispensando a participação de outros especialistas. Considerando a legislação, assinale a alternativa correta:",
        "alternativas": [
            "A afirmação está correta.",
            "O atendimento deve ser realizado apenas por profissionais da saúde.",
            "A legislação reconhece a importância do atendimento multiprofissional.",
            "A atuação multiprofissional é dispensável quando existe diagnóstico confirmado.",
            "A participação de outros profissionais depende exclusivamente da família."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A Lei nº 12.764/2012 destaca a importância do atendimento multiprofissional para a pessoa com TEA.",
        "feedbackErro": "O atendimento à pessoa com TEA exige integração de diferentes áreas do conhecimento. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A Lei nº 12.764/2012 destaca a importância do atendimento multiprofissional para a pessoa com TEA."
    },
    {
        "pergunta": "Uma família procurou os serviços públicos após receber o diagnóstico de TEA de seu filho. O gestor responsável informou que a atuação dos serviços deveria ocorrer de forma isolada, sem articulação entre setores. À luz da política nacional, assinale a alternativa correta:",
        "alternativas": [
            "A atuação isolada dos serviços aumenta a eficiência do atendimento.",
            "Somente os serviços educacionais devem atuar após o diagnóstico.",
            "A integração entre diferentes áreas favorece a proteção integral da pessoa com TEA.",
            "A articulação institucional é proibida para evitar sobreposição de funções.",
            "A legislação determina atuação exclusiva dos serviços de saúde."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A proteção da pessoa com TEA pressupõe articulação entre diferentes políticas e serviços.",
        "feedbackErro": "A legislação privilegia ações integradas e coordenadas. A política prevê participação da comunidade e articulação entre poder público, família e sociedade.",
        "dicaBanca": "A política prevê participação da comunidade e articulação entre poder público, família e sociedade.",
        "explicacao": "A proteção da pessoa com TEA pressupõe articulação entre diferentes políticas e serviços."
    },
    {
        "pergunta": "Durante um curso de capacitação, um participante afirmou que o atendimento multiprofissional deve ocorrer apenas quando houver comprometimento severo associado ao TEA. Considerando a legislação, assinale a alternativa correta:",
        "alternativas": [
            "A afirmação está correta, pois a lei condiciona o atendimento multiprofissional à existência de comprometimento funcional severo.",
            "O atendimento multiprofissional depende exclusivamente da gravidade clínica e da existência de incapacidade para atividades cotidianas.",
            "Somente crianças e adolescentes com TEA têm direito ao atendimento multiprofissional previsto na política nacional.",
            "O atendimento multiprofissional integra a atenção às necessidades de saúde e não é limitado pela lei a casos previamente classificados como severos.",
            "A legislação menciona diagnóstico precoce e medicamentos, mas não prevê atendimento realizado por equipe multiprofissional."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A política nacional reconhece a importância do atendimento multiprofissional como instrumento de apoio e desenvolvimento.",
        "feedbackErro": "A legislação não restringe essa diretriz apenas a situações extremas. A atenção à saúde é integral e inclui atendimento multiprofissional.",
        "dicaBanca": "A atenção à saúde é integral e inclui atendimento multiprofissional.",
        "explicacao": "A política nacional reconhece a importância do atendimento multiprofissional como instrumento de apoio e desenvolvimento."
    },
    {
        "pergunta": "Uma candidata afirmou que o diagnóstico precoce possui relevância apenas para fins estatísticos e administrativos, não produzindo impactos concretos na vida da pessoa com TEA. Considerando os fundamentos da política nacional, assinale a alternativa correta:",
        "alternativas": [
            "O diagnóstico precoce favorece o acesso a serviços, apoios e intervenções adequadas.",
            "O diagnóstico precoce possui importância limitada à emissão de documentos.",
            "A afirmação está correta.",
            "O diagnóstico precoce interessa apenas à área da saúde.",
            "A legislação não relaciona diagnóstico e acesso a direitos."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. O diagnóstico precoce pode facilitar o acesso a atendimentos, apoios e políticas voltadas ao desenvolvimento da pessoa com TEA.",
        "feedbackErro": "A legislação valoriza o diagnóstico precoce justamente pelos benefícios associados à intervenção e ao acesso a direitos. A lei assegura diagnóstico precoce, ainda que não definitivo; não exige esperar certeza absoluta.",
        "dicaBanca": "A lei assegura diagnóstico precoce, ainda que não definitivo; não exige esperar certeza absoluta.",
        "explicacao": "O diagnóstico precoce pode facilitar o acesso a atendimentos, apoios e políticas voltadas ao desenvolvimento da pessoa com TEA."
    },
    {
        "pergunta": "Uma família procurou a rede pública de saúde em busca de atendimento para uma criança com TEA. O gestor responsável informou que os serviços especializados somente seriam disponibilizados após vários anos de acompanhamento na atenção básica. À luz da Lei nº 12.764/2012, assinale a alternativa correta:",
        "alternativas": [
            "A legislação prioriza a postergação do atendimento especializado.",
            "A pessoa com TEA possui direito ao acesso a ações e serviços de saúde adequados às suas necessidades.",
            "O acesso aos serviços de saúde depende exclusivamente da disponibilidade orçamentária do município.",
            "O atendimento especializado somente é assegurado após a idade escolar.",
            "A legislação limita-se à educação e não trata de serviços de saúde."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A Política Nacional de Proteção dos Direitos da Pessoa com TEA assegura acesso às ações e aos serviços de saúde necessários ao desenvolvimento e bem-estar da pessoa.",
        "feedbackErro": "A legislação reconhece a saúde como um dos pilares da proteção integral da pessoa com TEA. A política prevê participação da comunidade e articulação entre poder público, família e sociedade.",
        "dicaBanca": "A política prevê participação da comunidade e articulação entre poder público, família e sociedade.",
        "explicacao": "A Política Nacional de Proteção dos Direitos da Pessoa com TEA assegura acesso às ações e aos serviços de saúde necessários ao desenvolvimento e bem-estar da pessoa."
    },
    {
        "pergunta": "Durante uma discussão sobre políticas públicas, um gestor afirmou que o atendimento da pessoa com TEA deve concentrar-se apenas no tratamento dos sintomas clínicos observados. Considerando a legislação, assinale a alternativa correta:",
        "alternativas": [
            "A afirmação está correta.",
            "O atendimento deve limitar-se às necessidades médicas imediatas.",
            "A proteção da pessoa com TEA envolve abordagem ampla voltada ao desenvolvimento, autonomia e inclusão social.",
            "O atendimento integral é incompatível com a política nacional.",
            "A legislação não prevê ações voltadas ao desenvolvimento global da pessoa."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A legislação adota perspectiva ampla de proteção, contemplando diferentes dimensões da vida da pessoa com TEA.",
        "feedbackErro": "Uma das pegadinhas mais comuns é reduzir o TEA exclusivamente à dimensão médica. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A legislação adota perspectiva ampla de proteção, contemplando diferentes dimensões da vida da pessoa com TEA."
    },
    {
        "pergunta": "Uma adolescente com TEA necessitava de acompanhamento realizado por profissionais de diferentes áreas. Entretanto, um órgão público decidiu oferecer apenas atendimento isolado, sem articulação entre os serviços. À luz da política nacional, assinale a alternativa correta:",
        "alternativas": [
            "A integração entre diferentes profissionais e serviços favorece a efetivação dos direitos da pessoa com TEA.",
            "A atuação isolada dos serviços é a forma preferencial prevista na legislação.",
            "A articulação entre áreas distintas é vedada para evitar conflitos de competência.",
            "Somente profissionais médicos devem participar do atendimento.",
            "O atendimento multiprofissional aplica-se exclusivamente à infância."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A atuação integrada e multiprofissional fortalece a proteção integral da pessoa com TEA.",
        "feedbackErro": "A legislação valoriza ações coordenadas e articuladas entre diferentes profissionais e políticas públicas. Intersetorialidade é diretriz expressa da Política Nacional.",
        "dicaBanca": "Intersetorialidade é diretriz expressa da Política Nacional.",
        "explicacao": "A atuação integrada e multiprofissional fortalece a proteção integral da pessoa com TEA."
    },
    {
        "pergunta": "Um servidor afirmou que a pessoa com TEA somente pode acessar serviços especializados de saúde após comprovar incapacidade para realizar atividades da vida diária. Considerando a Lei nº 12.764/2012, assinale a alternativa correta:",
        "alternativas": [
            "O direito ao atendimento não está condicionado à demonstração de incapacidade absoluta.",
            "O acesso aos serviços depende da demonstração de incapacidade total.",
            "A comprovação de dependência permanente é requisito legal obrigatório.",
            "A afirmação está correta.",
            "A legislação restringe os serviços especializados aos casos mais graves."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. Os direitos assegurados à pessoa com TEA não dependem da demonstração de incapacidade absoluta.",
        "feedbackErro": "A legislação busca garantir acesso aos serviços necessários conforme as necessidades da pessoa. A lei garante atenção integral à saúde, não atendimento condicionado a incapacidade prévia.",
        "dicaBanca": "A lei garante atenção integral à saúde, não atendimento condicionado a incapacidade prévia.",
        "explicacao": "Os direitos assegurados à pessoa com TEA não dependem da demonstração de incapacidade absoluta."
    },
    {
        "pergunta": "Ao analisar a Lei nº 12.764/2012, uma candidata concluiu que a proteção da pessoa com TEA deve ocorrer de forma contínua e articulada, envolvendo diferentes serviços e políticas públicas. Essa conclusão está:",
        "alternativas": [
            "Incorreta, pois a responsabilidade pela proteção da pessoa com TEA pertence exclusivamente aos serviços públicos de saúde.",
            "Incorreta, pois a Lei nº 12.764/2012 trata somente do atendimento clínico e não prevê integração entre políticas.",
            "Incorreta, pois a articulação entre serviços se restringe ao período de escolarização obrigatória da pessoa com TEA.",
            "Incorreta, pois a intersetorialidade não integra as diretrizes expressamente previstas na Política Nacional.",
            "Correta, pois a intersetorialidade orienta o desenvolvimento de ações, políticas e atendimento à pessoa com TEA."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A política nacional busca assegurar proteção ampla e articulada, envolvendo diferentes áreas e serviços.",
        "feedbackErro": "A legislação não adota uma visão fragmentada do atendimento à pessoa com TEA. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A política nacional busca assegurar proteção ampla e articulada, envolvendo diferentes áreas e serviços."
    },
    {
        "pergunta": "Durante o período de matrículas, uma escola particular informou aos responsáveis por um estudante com TEA que somente analisaria seu pedido de ingresso após verificar se haveria impacto na rotina pedagógica da turma. Considerando a Lei nº 12.764/2012, assinale a alternativa correta:",
        "alternativas": [
            "A escola pode condicionar a matrícula à análise de conveniência pedagógica.",
            "A instituição possui autonomia para recusar estudantes com TEA quando entender necessário.",
            "O ingresso do estudante depende da aprovação prévia dos demais responsáveis da turma.",
            "A criação de obstáculos ao acesso à educação da pessoa com TEA contraria a legislação.",
            "A matrícula pode ser recusada quando houver necessidade de adaptações educacionais."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A legislação assegura o acesso da pessoa com TEA à educação em igualdade de condições, vedando práticas que dificultem ou restrinjam esse direito.",
        "feedbackErro": "A existência de necessidades educacionais específicas não autoriza restrições ao acesso à escola. Recusar ou criar obstáculo indevido à matrícula em razão do TEA afronta a proteção legal e pode gerar sanção ao gestor.",
        "dicaBanca": "Recusar ou criar obstáculo indevido à matrícula em razão do TEA afronta a proteção legal e pode gerar sanção ao gestor.",
        "explicacao": "A legislação assegura o acesso da pessoa com TEA à educação em igualdade de condições, vedando práticas que dificultem ou restrinjam esse direito."
    },
    {
        "pergunta": "Uma equipe escolar afirmou que a inclusão de estudantes com TEA está plenamente garantida quando eles apenas frequentam o mesmo espaço físico dos demais alunos. À luz dos princípios da educação inclusiva, assinale a alternativa correta:",
        "alternativas": [
            "A frequência no mesmo espaço físico é suficiente para caracterizar inclusão, independentemente de participação nas atividades.",
            "A matrícula regular assegura por si só a inclusão, mesmo quando permanecem barreiras à aprendizagem e à interação.",
            "A inclusão depende exclusivamente da existência de acompanhante especializado durante todo o período de permanência na escola.",
            "A inclusão exige participação efetiva, aprendizagem e igualdade de oportunidades, e não apenas presença física na classe comum.",
            "A convivência com os demais estudantes é elemento secundário e pode ser dispensada sempre que houver necessidade de apoio."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. Inclusão envolve participação, aprendizagem, acessibilidade e oportunidades reais de desenvolvimento.",
        "feedbackErro": "Uma das pegadinhas mais frequentes é confundir presença física com inclusão efetiva. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "Inclusão envolve participação, aprendizagem, acessibilidade e oportunidades reais de desenvolvimento."
    },
    {
        "pergunta": "Durante um conselho de classe, um professor sugeriu que um estudante com TEA fosse dispensado de atividades em grupo para evitar dificuldades de interação. Considerando os princípios da inclusão escolar, assinale a alternativa correta:",
        "alternativas": [
            "A exclusão de atividades coletivas pode comprometer o direito à participação e à inclusão.",
            "A dispensa é recomendada para preservar o rendimento da turma.",
            "A participação em grupo depende exclusivamente da vontade dos colegas.",
            "Estudantes com TEA devem realizar atividades separadas sempre que possível.",
            "A legislação incentiva a segregação pedagógica como estratégia educacional."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A inclusão pressupõe oportunidades de participação nas atividades escolares e sociais da comunidade educativa.",
        "feedbackErro": "A legislação combate práticas segregadoras e favorece a convivência e a participação. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A inclusão pressupõe oportunidades de participação nas atividades escolares e sociais da comunidade educativa."
    },
    {
        "pergunta": "Uma escola informou aos pais de um aluno com TEA que ele poderia frequentar as aulas, mas não participaria de excursões, feiras científicas e eventos culturais promovidos pela instituição. À luz da legislação, assinale a alternativa correta:",
        "alternativas": [
            "A medida é válida por razões organizacionais.",
            "A escola pode restringir atividades extracurriculares para estudantes com TEA.",
            "A participação em atividades complementares depende da existência de laudo específico.",
            "Eventos extracurriculares não integram o processo de inclusão.",
            "A exclusão de atividades escolares em razão do TEA pode configurar prática discriminatória."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A inclusão envolve participação plena nas atividades oferecidas pela comunidade escolar.",
        "feedbackErro": "Restrições baseadas exclusivamente na condição do estudante podem caracterizar discriminação. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A inclusão envolve participação plena nas atividades oferecidas pela comunidade escolar."
    },
    {
        "pergunta": "Uma instituição de ensino exigiu que os responsáveis permanecessem permanentemente de prontidão para buscar um estudante com TEA sempre que ocorresse qualquer comportamento considerado inadequado pela escola. Considerando os princípios legais aplicáveis, assinale a alternativa correta:",
        "alternativas": [
            "A responsabilidade pela inclusão pertence exclusivamente à família.",
            "A escola pode transferir integralmente suas responsabilidades educacionais aos responsáveis.",
            "A medida é obrigatória para todos os estudantes com TEA.",
            "A inclusão escolar resulta de responsabilidade compartilhada entre escola, família e poder público.",
            "A permanência do estudante pode ser condicionada à disponibilidade integral da família."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A efetivação da inclusão exige cooperação entre diferentes atores, sem transferência integral de responsabilidades.",
        "feedbackErro": "A escola possui deveres próprios relacionados ao atendimento e à inclusão do estudante. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A efetivação da inclusão exige cooperação entre diferentes atores, sem transferência integral de responsabilidades."
    },
    {
        "pergunta": "Durante uma reunião escolar, a direção informou que o acompanhante especializado previsto na Lei nº 12.764/2012 passaria a assumir as funções pedagógicas do professor sempre que estivesse acompanhando um estudante com TEA. À luz da legislação, assinale a alternativa correta:",
        "alternativas": [
            "A afirmação está correta, pois o acompanhante especializado substitui o professor da turma.",
            "O acompanhante especializado exerce exclusivamente funções administrativas.",
            "O acompanhante especializado não substitui as atribuições pedagógicas do professor.",
            "O acompanhante especializado pode substituir o professor apenas em atividades extracurriculares.",
            "O acompanhante especializado atua como responsável legal do estudante durante o período escolar."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. O acompanhante especializado constitui apoio ao estudante, mas não substitui as funções pedagógicas do professor.",
        "feedbackErro": "Uma das confusões mais frequentes em provas é atribuir ao acompanhante especializado funções docentes que não lhe pertencem. O direito existe em caso de comprovada necessidade; não é automático para todo estudante nem substitui o professor.",
        "dicaBanca": "O direito existe em caso de comprovada necessidade; não é automático para todo estudante nem substitui o professor.",
        "explicacao": "O acompanhante especializado constitui apoio ao estudante, mas não substitui as funções pedagógicas do professor."
    },
    {
        "pergunta": "Uma escola recusou o pedido de acompanhante especializado para um estudante com TEA, alegando que a simples matrícula na rede regular já seria suficiente para garantir sua inclusão. Considerando a Lei nº 12.764/2012, assinale a alternativa correta:",
        "alternativas": [
            "A escola está correta, pois a matrícula elimina qualquer necessidade de apoio adicional.",
            "A legislação não prevê qualquer forma de apoio individualizado.",
            "A presença do acompanhante depende exclusivamente da conveniência administrativa da escola.",
            "O acompanhante especializado somente pode atuar na rede pública.",
            "O acompanhante especializado constitui direito do estudante quando comprovadamente necessário."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A Lei nº 12.764/2012 assegura acompanhante especializado quando houver necessidade comprovada.",
        "feedbackErro": "A inclusão efetiva pode exigir recursos e apoios específicos para garantir participação em igualdade de condições. O direito existe em caso de comprovada necessidade; não é automático para todo estudante nem substitui o professor.",
        "dicaBanca": "O direito existe em caso de comprovada necessidade; não é automático para todo estudante nem substitui o professor.",
        "explicacao": "A Lei nº 12.764/2012 assegura acompanhante especializado quando houver necessidade comprovada."
    },
    {
        "pergunta": "Durante uma capacitação, um professor afirmou que todo estudante com TEA possui automaticamente direito ao acompanhante especializado, independentemente de avaliação das necessidades individuais. À luz da legislação, assinale a alternativa correta:",
        "alternativas": [
            "A necessidade de acompanhante especializado deve ser analisada conforme as necessidades do estudante.",
            "O acompanhante é obrigatório para toda pessoa diagnosticada com TEA.",
            "A afirmação está correta.",
            "O acompanhante somente pode ser solicitado pela escola.",
            "A legislação proíbe qualquer análise individual das necessidades educacionais."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A legislação vincula o acompanhante especializado à existência de necessidade comprovada, evitando generalizações.",
        "feedbackErro": "Nem toda pessoa com TEA apresenta as mesmas necessidades de apoio. O direito existe em caso de comprovada necessidade; não é automático para todo estudante nem substitui o professor.",
        "dicaBanca": "O direito existe em caso de comprovada necessidade; não é automático para todo estudante nem substitui o professor.",
        "explicacao": "A legislação vincula o acompanhante especializado à existência de necessidade comprovada, evitando generalizações."
    },
    {
        "pergunta": "Uma instituição de ensino informou aos pais de um estudante com TEA que permitiria a presença do acompanhante especializado apenas mediante pagamento de taxa adicional destinada à cobertura dos custos do serviço. Considerando a legislação vigente, assinale a alternativa correta:",
        "alternativas": [
            "A cobrança é válida por se tratar de serviço diferenciado.",
            "A cobrança adicional vinculada à condição do estudante contraria a legislação.",
            "A cobrança é permitida exclusivamente na rede privada.",
            "A cobrança depende apenas da concordância da família.",
            "A escola possui liberdade para definir valores relacionados à inclusão."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A cobrança adicional em razão do TEA ou da necessidade de inclusão viola os direitos assegurados pela legislação.",
        "feedbackErro": "Taxas extras relacionadas à deficiência ou ao TEA são frequentemente cobradas em concursos. O direito existe em caso de comprovada necessidade; não é automático para todo estudante nem substitui o professor.",
        "dicaBanca": "O direito existe em caso de comprovada necessidade; não é automático para todo estudante nem substitui o professor.",
        "explicacao": "A cobrança adicional em razão do TEA ou da necessidade de inclusão viola os direitos assegurados pela legislação."
    },
    {
        "pergunta": "Ao analisar a situação de um estudante com TEA, a equipe escolar concluiu que ele necessitava de apoio especializado para participar adequadamente das atividades educacionais. Um gestor argumentou que a concessão desse apoio configuraria privilégio indevido em relação aos demais estudantes. Considerando os princípios da inclusão, assinale a alternativa correta:",
        "alternativas": [
            "O apoio especializado constitui privilégio incompatível com a igualdade.",
            "A legislação proíbe medidas específicas voltadas à inclusão.",
            "Apoios individualizados somente podem existir mediante decisão judicial.",
            "A igualdade exige tratamento idêntico em todas as situações.",
            "A oferta de apoios necessários busca assegurar igualdade de oportunidades e participação efetiva."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. Os apoios necessários existem para eliminar barreiras e garantir igualdade material de oportunidades.",
        "feedbackErro": "A inclusão não significa tratar todos exatamente da mesma forma, mas garantir condições efetivas de participação. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "Os apoios necessários existem para eliminar barreiras e garantir igualdade material de oportunidades."
    },
    {
        "pergunta": "Durante uma capacitação para servidores públicos, um participante afirmou que a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (CIPTEA) foi criada para conceder novos direitos aos seus portadores. Considerando a legislação vigente, assinale a alternativa correta:",
        "alternativas": [
            "A CIPTEA cria direitos exclusivos que não existem para outras pessoas com TEA.",
            "A CIPTEA substitui o diagnóstico e o laudo médico.",
            "A CIPTEA tem como principal finalidade facilitar a identificação da pessoa com TEA e o acesso aos direitos já assegurados em lei.",
            "A CIPTEA é obrigatória para o reconhecimento da condição de pessoa com TEA.",
            "A CIPTEA é exigida para matrícula escolar e atendimento em saúde."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A CIPTEA não cria direitos novos; ela facilita a identificação da pessoa com TEA e o exercício dos direitos já garantidos pela legislação.",
        "feedbackErro": "Os direitos decorrem da lei, e não da emissão da carteira. A CIPTEA facilita identificação, pronto atendimento e prioridade, mas não cria a condição jurídica de pessoa com TEA.",
        "dicaBanca": "A CIPTEA facilita identificação, pronto atendimento e prioridade, mas não cria a condição jurídica de pessoa com TEA.",
        "explicacao": "A CIPTEA não cria direitos novos; ela facilita a identificação da pessoa com TEA e o exercício dos direitos já garantidos pela legislação."
    },
    {
        "pergunta": "Uma pessoa com TEA compareceu a um órgão público sem portar a CIPTEA. O atendente informou que, sem a carteira, nenhum dos direitos previstos na legislação poderia ser reconhecido. À luz da legislação vigente, assinale a alternativa correta:",
        "alternativas": [
            "O atendente está correto, pois a CIPTEA é requisito obrigatório para todos os direitos.",
            "A CIPTEA facilita a identificação, mas não constitui condição para existência dos direitos legais.",
            "Sem a CIPTEA, a pessoa deixa de ser considerada pessoa com deficiência.",
            "Os direitos somente podem ser exercidos após a emissão da CIPTEA.",
            "A legislação condiciona a cidadania da pessoa com TEA à apresentação da carteira."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A carteira facilita a comprovação da condição da pessoa, mas os direitos decorrem da legislação e não da posse do documento.",
        "feedbackErro": "A CIPTEA não é fonte dos direitos; ela apenas facilita sua identificação. A CIPTEA facilita identificação, pronto atendimento e prioridade, mas não cria a condição jurídica de pessoa com TEA.",
        "dicaBanca": "A CIPTEA facilita identificação, pronto atendimento e prioridade, mas não cria a condição jurídica de pessoa com TEA.",
        "explicacao": "A carteira facilita a comprovação da condição da pessoa, mas os direitos decorrem da legislação e não da posse do documento."
    },
    {
        "pergunta": "Durante um atendimento em serviço público, um servidor questionou a necessidade de oferecer prioridade a uma pessoa com TEA, alegando que o transtorno não gera direitos diferenciados. Considerando a legislação, assinale a alternativa correta:",
        "alternativas": [
            "A prioridade legal é restrita às pessoas com deficiência física ou mobilidade reduzida que comprovem necessidade de atendimento diferenciado.",
            "A prioridade depende de decisão discricionária do servidor responsável, que pode avaliar se o atendimento diferenciado é necessário.",
            "A pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais e pode usufruir dos direitos de prioridade previstos na legislação.",
            "A prioridade somente se aplica a crianças e adolescentes com TEA acompanhados de responsável durante o atendimento.",
            "A legislação reconhece o TEA como deficiência, mas não relaciona essa condição aos mecanismos de atendimento prioritário."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A equiparação legal da pessoa com TEA à pessoa com deficiência produz reflexos em diversos direitos assegurados pela legislação brasileira.",
        "feedbackErro": "A condição jurídica da pessoa com TEA gera consequências relevantes para o exercício de direitos. A pessoa com TEA é pessoa com deficiência para todos os efeitos legais e a CIPTEA foi criada para facilitar a prioridade.",
        "dicaBanca": "A pessoa com TEA é pessoa com deficiência para todos os efeitos legais e a CIPTEA foi criada para facilitar a prioridade.",
        "explicacao": "A equiparação legal da pessoa com TEA à pessoa com deficiência produz reflexos em diversos direitos assegurados pela legislação brasileira."
    },
    {
        "pergunta": "Uma campanha institucional divulgou que a CIPTEA possui finalidade exclusivamente estatística e administrativa, sem qualquer impacto na vida cotidiana das pessoas com TEA. À luz da legislação, assinale a alternativa correta:",
        "alternativas": [
            "A afirmação está correta, pois a CIPTEA possui finalidade exclusivamente cadastral e estatística para planejamento de políticas públicas.",
            "A CIPTEA busca garantir atenção integral, pronto atendimento e prioridade no acesso a serviços públicos e privados, especialmente em áreas essenciais.",
            "A CIPTEA existe apenas para controle governamental do número de pessoas diagnosticadas com TEA em cada ente federativo.",
            "A CIPTEA tem finalidade exclusivamente administrativa e não se relaciona à prioridade no atendimento da pessoa identificada.",
            "A CIPTEA substitui políticas públicas de inclusão e torna desnecessária a adoção de outras medidas de acessibilidade e atendimento."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A carteira foi criada para facilitar a identificação e reduzir obstáculos no acesso aos direitos e serviços.",
        "feedbackErro": "A finalidade da CIPTEA vai além de simples registros administrativos. A CIPTEA facilita identificação, pronto atendimento e prioridade, mas não cria a condição jurídica de pessoa com TEA.",
        "dicaBanca": "A CIPTEA facilita identificação, pronto atendimento e prioridade, mas não cria a condição jurídica de pessoa com TEA.",
        "explicacao": "A carteira foi criada para facilitar a identificação e reduzir obstáculos no acesso aos direitos e serviços."
    },
    {
        "pergunta": "Sobre a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (CIPTEA), assinale a alternativa correta:",
        "alternativas": [
            "A CIPTEA possui validade de 10 anos e somente pode ser renovada mediante novo diagnóstico.",
            "A CIPTEA possui validade indeterminada e recebe novo número a cada atualização cadastral.",
            "A CIPTEA possui validade de 5 anos, deve manter os dados cadastrais atualizados e é revalidada com o mesmo número.",
            "A CIPTEA precisa ser renovada anualmente para preservar a prioridade no atendimento.",
            "A CIPTEA perde validade sempre que houver mudança de endereço da pessoa identificada."
        ],
        "correta": 2,
        "explicacao": "A Lei nº 12.764/2012, após a Lei nº 13.977/2020, prevê validade de 5 anos para a CIPTEA, atualização dos dados e revalidação com o mesmo número.",
        "feedbackAcerto": "Correto. A validade legal da CIPTEA é de 5 anos, com revalidação pelo mesmo número.",
        "feedbackErro": "Não confunda atualização cadastral com emissão de nova identificação. A lei fixa 5 anos e preserva o mesmo número na revalidação.",
        "dicaBanca": "CIPTEA: 5 anos + dados atualizados + mesmo número."
    },
    {
        "pergunta": "Durante uma reunião sobre inclusão, um gestor afirmou que a participação da família na promoção dos direitos da pessoa com TEA é facultativa e possui pouca relevância prática. À luz da Lei nº 12.764/2012, assinale a alternativa correta:",
        "alternativas": [
            "A legislação reconhece a importância da orientação, do apoio e da participação da família na efetivação dos direitos da pessoa com TEA.",
            "A família atua apenas durante a infância, sem relevância nas demais fases da vida.",
            "A afirmação está correta, pois os direitos da pessoa com TEA dependem exclusivamente do Estado.",
            "A participação familiar deve ser evitada para preservar a autonomia da pessoa.",
            "A família não possui papel reconhecido pela política nacional."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A legislação valoriza a participação e o apoio às famílias como elementos importantes para a proteção e promoção dos direitos da pessoa com TEA.",
        "feedbackErro": "A proteção integral da pessoa com TEA envolve também orientação e suporte aos familiares. A política prevê participação da comunidade e articulação entre poder público, família e sociedade.",
        "dicaBanca": "A política prevê participação da comunidade e articulação entre poder público, família e sociedade.",
        "explicacao": "A legislação valoriza a participação e o apoio às famílias como elementos importantes para a proteção e promoção dos direitos da pessoa com TEA."
    },
    {
        "pergunta": "Uma campanha institucional divulgou que pessoas com TEA devem permanecer restritas a ambientes especializados para evitar dificuldades de convivência social. Considerando os princípios da política nacional, assinale a alternativa correta:",
        "alternativas": [
            "A segregação social favorece a inclusão.",
            "A convivência comunitária deve ocorrer apenas em ambientes controlados.",
            "A participação social depende exclusivamente da presença de acompanhante especializado.",
            "A inclusão pressupõe participação na comunidade e exercício da cidadania em igualdade de oportunidades.",
            "A vida comunitária não possui relação com os direitos da pessoa com TEA."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A legislação promove inclusão social, cidadania e participação comunitária da pessoa com TEA.",
        "feedbackErro": "A política nacional combate práticas segregadoras e incentiva a participação social. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A legislação promove inclusão social, cidadania e participação comunitária da pessoa com TEA."
    },
    {
        "pergunta": "Durante um debate sobre autonomia, um participante afirmou que pessoas com TEA são incapazes de tomar decisões sobre a própria vida e devem ser permanentemente representadas por terceiros. À luz da legislação e dos princípios de inclusão, assinale a alternativa correta:",
        "alternativas": [
            "A afirmação está correta para todas as pessoas com TEA.",
            "A autonomia é incompatível com o TEA.",
            "A necessidade de apoio elimina automaticamente a capacidade de autodeterminação.",
            "A representação permanente constitui regra geral para pessoas com TEA.",
            "A legislação reconhece a dignidade, a autonomia e o direito ao desenvolvimento da pessoa com TEA."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A legislação busca promover autonomia, dignidade e participação social, combatendo estigmas relacionados à incapacidade generalizada.",
        "feedbackErro": "O TEA não autoriza conclusões automáticas sobre incapacidade ou ausência de autonomia. TEA não autoriza presumir incapacidade geral; os direitos e a autonomia devem ser respeitados conforme a situação concreta.",
        "dicaBanca": "TEA não autoriza presumir incapacidade geral; os direitos e a autonomia devem ser respeitados conforme a situação concreta.",
        "explicacao": "A legislação busca promover autonomia, dignidade e participação social, combatendo estigmas relacionados à incapacidade generalizada."
    },
    {
        "pergunta": "Um município decidiu elaborar ações voltadas à pessoa com TEA sem envolver escolas, serviços de saúde, assistência social ou entidades da sociedade civil. Considerando a política nacional, assinale a alternativa correta:",
        "alternativas": [
            "A medida está correta, pois a atuação deve ser centralizada.",
            "A proteção dos direitos da pessoa com TEA depende da articulação entre diferentes setores e instituições.",
            "A integração entre serviços gera conflitos e deve ser evitada.",
            "A participação da sociedade civil não possui relevância para a inclusão.",
            "As políticas voltadas ao TEA devem ser executadas exclusivamente pelo sistema de saúde."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A efetivação dos direitos da pessoa com TEA exige atuação articulada entre diferentes políticas públicas e atores sociais.",
        "feedbackErro": "A legislação valoriza integração, cooperação e atuação intersetorial. A lei garante atenção integral à saúde, não atendimento condicionado a incapacidade prévia.",
        "dicaBanca": "A lei garante atenção integral à saúde, não atendimento condicionado a incapacidade prévia.",
        "explicacao": "A efetivação dos direitos da pessoa com TEA exige atuação articulada entre diferentes políticas públicas e atores sociais."
    },
    {
        "pergunta": "Após alteração legislativa de 2025, passou a integrar expressamente as diretrizes da Política Nacional de Proteção dos Direitos da Pessoa com TEA:",
        "alternativas": [
            "a exigência de internação especializada para confirmação diagnóstica em adultos.",
            "a obrigatoriedade de diagnóstico definitivo antes dos 6 anos de idade.",
            "a substituição do diagnóstico clínico por avaliação exclusivamente escolar.",
            "a restrição das políticas diagnósticas às crianças matriculadas na educação básica.",
            "o incentivo à investigação diagnóstica do TEA em pessoas adultas e em pessoas idosas."
        ],
        "correta": 4,
        "explicacao": "A Lei nº 15.256/2025 incluiu no art. 2º, IX, o incentivo à investigação diagnóstica do TEA em pessoas adultas e idosas.",
        "feedbackAcerto": "Correto. Essa é uma atualização recente e bastante objetiva da Lei Berenice Piana.",
        "feedbackErro": "A lei não restringe a investigação diagnóstica à infância; desde 2025 há diretriz expressa voltada também a adultos e idosos.",
        "dicaBanca": "Atualização 2025: investigação diagnóstica em adultos e idosos."
    },
    {
        "pergunta": "Uma empresa recusou a participação de um candidato com TEA em processo seletivo, alegando que pessoas com o transtorno apresentam dificuldades naturais de adaptação ao ambiente corporativo. À luz da legislação e dos princípios de inclusão, assinale a alternativa correta:",
        "alternativas": [
            "A decisão é legítima quando baseada em experiência anterior da empresa.",
            "A recusa caracteriza tratamento potencialmente discriminatório baseado em generalizações sobre a condição da pessoa.",
            "A empresa pode restringir a participação de pessoas com TEA para evitar riscos operacionais.",
            "A seleção diferenciada é recomendada para proteger o candidato.",
            "A legislação não se aplica às relações privadas de trabalho."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A exclusão baseada em estereótipos ou generalizações relacionadas ao TEA contraria os princípios da igualdade de oportunidades e da não discriminação.",
        "feedbackErro": "A condição da pessoa não pode ser utilizada como justificativa automática para restringir oportunidades profissionais. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A exclusão baseada em estereótipos ou generalizações relacionadas ao TEA contraria os princípios da igualdade de oportunidades e da não discriminação."
    },
    {
        "pergunta": "Durante uma palestra, um gestor afirmou que a inclusão profissional da pessoa com TEA limita-se ao acesso ao emprego, não abrangendo oportunidades de crescimento e desenvolvimento na carreira. Considerando os princípios da legislação, assinale a alternativa correta:",
        "alternativas": [
            "A afirmação está correta.",
            "A inclusão profissional restringe-se à contratação inicial.",
            "A promoção da inclusão envolve acesso, permanência, desenvolvimento e participação em igualdade de oportunidades.",
            "A pessoa com TEA possui direito apenas ao primeiro acesso ao mercado de trabalho.",
            "O crescimento profissional depende exclusivamente da ausência de necessidades de apoio."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto. A inclusão profissional não se limita ao ingresso no trabalho, abrangendo oportunidades de desenvolvimento e participação.",
        "feedbackErro": "A legislação busca promover igualdade de oportunidades ao longo de toda a trajetória profissional. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A inclusão profissional não se limita ao ingresso no trabalho, abrangendo oportunidades de desenvolvimento e participação."
    },
    {
        "pergunta": "Uma instituição responsável por cursos de qualificação recusou a inscrição de uma pessoa com TEA sob o argumento de que o curso não foi criado para atender pessoas com necessidades específicas. À luz dos princípios da inclusão, assinale a alternativa correta:",
        "alternativas": [
            "A recusa é válida quando o curso possui alta complexidade técnica.",
            "A instituição possui liberdade para selecionar apenas determinados perfis de alunos.",
            "A qualificação profissional pode ser restringida quando houver necessidade de adaptações.",
            "A legislação protege apenas o acesso ao ensino regular.",
            "A exclusão baseada exclusivamente na condição da pessoa pode configurar discriminação."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. O acesso à qualificação profissional integra o processo de inclusão social e econômica da pessoa com TEA.",
        "feedbackErro": "A simples necessidade de adaptações não justifica a exclusão da pessoa de oportunidades educacionais ou profissionais. A Lei nº 12.764/2012 prevê estímulo à inserção no mercado de trabalho e acesso ao ensino profissionalizante.",
        "dicaBanca": "A Lei nº 12.764/2012 prevê estímulo à inserção no mercado de trabalho e acesso ao ensino profissionalizante.",
        "explicacao": "O acesso à qualificação profissional integra o processo de inclusão social e econômica da pessoa com TEA."
    },
    {
        "pergunta": "Durante uma campanha institucional, foi divulgado que pessoas com TEA devem ser direcionadas exclusivamente para atividades simples e repetitivas, independentemente de suas habilidades individuais. Considerando a legislação e os princípios da cidadania, assinale a alternativa correta:",
        "alternativas": [
            "A afirmação está correta, pois o TEA determina previamente a capacidade profissional da pessoa.",
            "As potencialidades individuais devem ser consideradas, evitando estigmas e generalizações.",
            "A distribuição de funções deve ocorrer exclusivamente com base no diagnóstico.",
            "A especialização profissional é incompatível com o TEA.",
            "A legislação recomenda direcionamento ocupacional obrigatório."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto. A legislação combate preconceitos e reconhece a individualidade e as potencialidades de cada pessoa.",
        "feedbackErro": "O diagnóstico não define, por si só, capacidades, interesses ou possibilidades profissionais. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A legislação combate preconceitos e reconhece a individualidade e as potencialidades de cada pessoa."
    },
    {
        "pergunta": "Uma candidata concluiu que a inclusão social da pessoa com TEA envolve não apenas acesso a serviços públicos, mas também oportunidades de participação na educação, trabalho, cultura, lazer e vida comunitária. Essa conclusão está:",
        "alternativas": [
            "Incorreta, pois a participação social não integra a proteção jurídica prevista para a pessoa com TEA na política nacional.",
            "Incorreta, pois a legislação limita a inclusão às áreas de saúde e educação, sem alcançar outras dimensões da vida social.",
            "Incorreta, pois trabalho, lazer e vida comunitária não se relacionam aos direitos assegurados à pessoa com TEA.",
            "Correta, pois a proteção jurídica busca inclusão, cidadania e participação em diferentes dimensões da vida social.",
            "Incorreta, pois a Lei nº 12.764/2012 trata apenas do atendimento especializado e das ações diretamente vinculadas ao diagnóstico."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto. A Política Nacional de Proteção dos Direitos da Pessoa com TEA possui caráter amplo e busca promover participação plena na sociedade.",
        "feedbackErro": "A inclusão social envolve múltiplas dimensões da vida humana e não apenas acesso a serviços especializados. A Lei nº 12.764/2012 prevê estímulo à inserção no mercado de trabalho e acesso ao ensino profissionalizante.",
        "dicaBanca": "A Lei nº 12.764/2012 prevê estímulo à inserção no mercado de trabalho e acesso ao ensino profissionalizante.",
        "explicacao": "A Política Nacional de Proteção dos Direitos da Pessoa com TEA possui caráter amplo e busca promover participação plena na sociedade."
    },
    {
        "pergunta": "Durante uma atividade escolar, alguns estudantes passaram a evitar deliberadamente a participação de um colega com TEA em trabalhos e projetos, alegando que sua presença dificultaria o desempenho do grupo. Ao tomar conhecimento da situação, a direção da escola deve compreender que essa conduta:",
        "alternativas": [
            "Pode caracterizar discriminação e violação dos princípios de inclusão e igualdade de oportunidades.",
            "Representa simples conflito interpessoal sem relevância para a inclusão.",
            "É justificável quando houver diferença de rendimento acadêmico.",
            "Constitui prática aceitável quando aprovada pela maioria dos estudantes.",
            "Deve ser resolvida exclusivamente pela família do estudante."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A exclusão baseada na condição da pessoa com TEA pode configurar discriminação e afronta os princípios da inclusão social.",
        "feedbackErro": "A discriminação pode ocorrer por ações indiretas de exclusão e isolamento social. A Lei nº 12.764/2012 prevê estímulo à inserção no mercado de trabalho e acesso ao ensino profissionalizante.",
        "dicaBanca": "A Lei nº 12.764/2012 prevê estímulo à inserção no mercado de trabalho e acesso ao ensino profissionalizante.",
        "explicacao": "A exclusão baseada na condição da pessoa com TEA pode configurar discriminação e afronta os princípios da inclusão social."
    },
    {
        "pergunta": "Durante um atendimento em estabelecimento comercial, um funcionário afirmou que pessoas com TEA deveriam utilizar canais específicos de atendimento para evitar desconforto aos demais clientes. À luz da legislação e dos princípios da inclusão, assinale a alternativa correta:",
        "alternativas": [
            "A medida promove organização e eficiência do atendimento.",
            "A legislação não alcança relações privadas de consumo.",
            "O estabelecimento possui liberdade para criar regras específicas para pessoas com TEA.",
            "A medida é válida sempre que houver justificativa administrativa.",
            "A segregação de pessoas com TEA pode configurar tratamento discriminatório."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto. A criação de restrições ou tratamentos segregadores pode caracterizar discriminação e violação de direitos.",
        "feedbackErro": "A inclusão pressupõe acesso aos mesmos ambientes e oportunidades, salvo adaptações destinadas a eliminar barreiras. Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "dicaBanca": "Leia a situação pela perspectiva de direitos, inclusão e participação; a lei não autoriza exclusão com base em generalizações sobre o TEA.",
        "explicacao": "A criação de restrições ou tratamentos segregadores pode caracterizar discriminação e violação de direitos."
    },
    {
        "pergunta": "Um gestor público afirmou que o combate ao preconceito relacionado ao TEA deve ocorrer apenas por meio de ações de saúde, pois educação e conscientização social não possuem relevância jurídica. Considerando a Política Nacional de Proteção dos Direitos da Pessoa com TEA, assinale a alternativa correta:",
        "alternativas": [
            "A conscientização social, a informação pública e a inclusão são relevantes para combater preconceito e promover os direitos da pessoa com TEA.",
            "O combate ao preconceito depende exclusivamente de atendimento médico e de intervenções terapêuticas especializadas.",
            "A afirmação está correta, pois educação e conscientização social não integram as diretrizes da Política Nacional.",
            "A legislação assegura atendimento em saúde, mas não estabelece diretrizes relacionadas à informação pública ou participação social.",
            "O preconceito somente possui relevância jurídica quando praticado por agente público no exercício formal de suas atribuições."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto. A política nacional busca promover inclusão, cidadania e respeito à dignidade da pessoa com TEA, combatendo estigmas e preconceitos.",
        "feedbackErro": "A proteção dos direitos da pessoa com TEA envolve também mudança cultural e conscientização social. A pessoa com TEA não pode sofrer discriminação por motivo da deficiência nem ser afastada do convívio social por presunções genéricas.",
        "dicaBanca": "A pessoa com TEA não pode sofrer discriminação por motivo da deficiência nem ser afastada do convívio social por presunções genéricas.",
        "explicacao": "A política nacional busca promover inclusão, cidadania e respeito à dignidade da pessoa com TEA, combatendo estigmas e preconceitos."
    },
    {
        "pergunta": "Com a alteração promovida pela Lei nº 15.131/2025, a nutrição adequada e a terapia nutricional da pessoa com TEA compreendem:",
        "alternativas": [
            "qualquer dieta escolhida pela família, desde que seja comunicada à equipe escolar e aplicada de forma contínua no ambiente educacional.",
            "ações de promoção e proteção nutricional realizadas por profissional de saúde legalmente habilitado, observados protocolos clínicos e diretrizes terapêuticas.",
            "fornecimento de suplementos ou dietas especiais definidos pela escola quando houver seletividade alimentar ou dificuldade de adaptação.",
            "tratamento nutricional exclusivamente hospitalar, reservado a casos em que exista comprometimento clínico classificado como grave.",
            "mudanças alimentares definidas pelo acompanhante especializado sempre que forem identificadas dificuldades relacionadas à alimentação."
        ],
        "correta": 1,
        "explicacao": "O §2º do art. 3º, incluído em 2025, especifica que nutrição adequada e terapia nutricional envolvem ações de promoção e proteção realizadas por profissional habilitado, conforme protocolos e diretrizes.",
        "feedbackAcerto": "Correto. A atualização de 2025 tornou o conteúdo nutricional mais específico na Lei nº 12.764/2012.",
        "feedbackErro": "O profissional de apoio escolar não prescreve dieta ou terapia nutricional; a lei exige profissional de saúde legalmente habilitado e observância de protocolos.",
        "dicaBanca": "Atualização 2025: nutrição/terapia nutricional = profissional habilitado + protocolos."
    },
    {
        "pergunta": "O gestor escolar ou autoridade competente que recusar matrícula de aluno com TEA, ou com outro tipo de deficiência, está sujeito, segundo a Lei nº 12.764/2012, a:",
        "alternativas": [
            "multa de 1 a 5 salários-mínimos, sem qualquer consequência funcional em caso de reincidência.",
            "advertência verbal na primeira ocorrência e multa somente após decisão judicial definitiva.",
            "multa de 3 a 20 salários-mínimos e, em caso de reincidência apurada em processo administrativo com contraditório e ampla defesa, perda do cargo.",
            "suspensão automática por 90 dias, independentemente de processo administrativo.",
            "perda imediata do cargo na primeira recusa, ainda que não haja processo administrativo."
        ],
        "correta": 2,
        "explicacao": "O art. 7º prevê multa de 3 a 20 salários-mínimos; em caso de reincidência, apurada por processo administrativo com contraditório e ampla defesa, haverá perda do cargo.",
        "feedbackAcerto": "Correto. A Lei Berenice Piana estabelece consequência expressa para recusa de matrícula.",
        "feedbackErro": "O detalhe de prova está na combinação: multa de 3 a 20 salários-mínimos; perda do cargo apenas na reincidência, após processo administrativo com garantias.",
        "dicaBanca": "Decore o art. 7º: multa 3–20; reincidência + processo = perda do cargo."
    }
];

if (typeof window !== 'undefined') { window.apoioTEA = apoioTEA; }
