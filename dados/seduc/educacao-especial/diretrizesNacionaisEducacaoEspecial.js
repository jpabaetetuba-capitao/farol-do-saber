/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Educação Especial
   Bloco 4: Diretrizes Nacionais — Educação Infantil,
   Ensino Fundamental, EJA e Educação Especial
   25 questões inéditas com feedback específico por alternativa.
   Conteúdo normativo revisado em 02/09/2026.
==========================================================
   Revisão FGV de distratores e equilíbrio de extensão: 02/09/2026.
 ========================================================== */

(function(){
    "use strict";

    const banco = [
    {
        "id": "SEDUC-EE-DIR-001",
        "numero": 1,
        "subtopico": "Educação Infantil — concepção de criança",
        "dificuldade": "media",
        "pergunta": "Segundo a Resolução CNE/CEB nº 5/2009, a proposta pedagógica da Educação Infantil deve considerar a criança como",
        "alternativas": [
            "sujeito histórico e de direitos, centro do planejamento curricular, que produz cultura nas interações e práticas cotidianas.",
            "receptora passiva de conteúdos definidos pelo adulto, cuja principal finalidade é preparar-se para a alfabetização.",
            "aluna em processo de escolarização formal, devendo seguir currículo disciplinar idêntico ao do Ensino Fundamental.",
            "indivíduo cuja autonomia deve ser adiada até o ingresso no Ensino Fundamental.",
            "beneficiária de assistência social, sendo secundária a dimensão educacional das creches e pré-escolas."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou a concepção central das DCNEI: a criança é sujeito histórico e de direitos e ocupa o centro do planejamento curricular. A aprendizagem acontece nas relações, interações, brincadeiras e experiências, e a criança também produz cultura.",
        "feedbackErro": "As Diretrizes não tratam a criança como receptora passiva, nem reduzem a Educação Infantil à preparação para o Ensino Fundamental ou à assistência. Educação e cuidado são indissociáveis e o desenvolvimento é integral.",
        "analiseAlternativas": [
            "Correta. Reproduz o núcleo do art. 4º da Resolução CNE/CEB nº 5/2009: criança como sujeito histórico e de direitos e centro do planejamento curricular.",
            "Incorreta. A criança não é receptora passiva e a Educação Infantil não tem como finalidade antecipar formalmente a alfabetização.",
            "Incorreta. A Educação Infantil possui identidade própria e não deve copiar a organização disciplinar do Ensino Fundamental.",
            "Incorreta. A autonomia é princípio e objetivo desde a Educação Infantil, respeitadas as condições de desenvolvimento da criança.",
            "Incorreta. Creches e pré-escolas são instituições educacionais; cuidar e educar integram o trabalho pedagógico."
        ],
        "dicaBanca": "Quando a FGV perguntar pela concepção de criança, procure expressões como sujeito de direitos, centro do planejamento, interação, brincadeira e produção de cultura.",
        "pegadinha": "A banca pode transformar a criança em 'objeto' do ensino ou antecipar o Ensino Fundamental. Isso contraria a identidade da Educação Infantil.",
        "memorizar2026": "DCNEI: criança = sujeito histórico e de direitos + centro do planejamento curricular.",
        "fonte": "Resolução CNE/CEB nº 5/2009, arts. 3º e 4º."
    },
    {
        "id": "SEDUC-EE-DIR-002",
        "numero": 2,
        "subtopico": "Educação Infantil — eixos estruturantes",
        "dificuldade": "media",
        "pergunta": "Em uma creche, a equipe pretende reorganizar as práticas pedagógicas de acordo com as Diretrizes Curriculares Nacionais para a Educação Infantil. A proposta mais alinhada à Resolução CNE/CEB nº 5/2009 é aquela que toma como eixos norteadores",
        "alternativas": [
            "a memorização de conteúdos e a aplicação semanal de testes padronizados.",
            "as interações e a brincadeira, garantindo experiências diversificadas e significativas às crianças.",
            "a alfabetização formal e o ensino sistemático de operações matemáticas como prioridade.",
            "a preparação para provas externas e a antecipação das rotinas do 1º ano.",
            "a separação das crianças por desempenho para tornar o ensino mais homogêneo."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu os eixos estruturantes das práticas pedagógicas na Educação Infantil: interações e brincadeiras. Eles organizam experiências que promovem conhecimento de si, do outro e do mundo, expressão, curiosidade e desenvolvimento integral.",
        "feedbackErro": "A DCNEI não organiza a Educação Infantil em torno de testes, antecipação do Ensino Fundamental ou agrupamentos por desempenho. O centro está nas experiências das crianças, especialmente por meio de interações e brincadeiras.",
        "analiseAlternativas": [
            "Incorreta. Testes e memorização não constituem os eixos norteadores definidos pela DCNEI.",
            "Correta. Interações e brincadeiras são expressamente indicadas como eixos norteadores das práticas pedagógicas.",
            "Incorreta. A Educação Infantil não deve ser reduzida à antecipação da alfabetização e de conteúdos formais.",
            "Incorreta. Preparação para provas e imitação das rotinas do 1º ano descaracterizam a etapa.",
            "Incorreta. A segregação por desempenho contraria diversidade, participação e convivência."
        ],
        "dicaBanca": "FGV gosta de trocar 'interações e brincadeiras' por termos pedagogicamente atraentes, mas que não são os eixos literais da Resolução nº 5/2009.",
        "pegadinha": "'Brincar' não é intervalo do currículo: é eixo curricular da Educação Infantil.",
        "memorizar2026": "Educação Infantil: interações + brincadeiras = eixos das práticas pedagógicas.",
        "fonte": "Resolução CNE/CEB nº 5/2009, art. 9º."
    },
    {
        "id": "SEDUC-EE-DIR-003",
        "numero": 3,
        "subtopico": "Educação Infantil — avaliação",
        "dificuldade": "alta",
        "pergunta": "Uma pré-escola decidiu utilizar a avaliação final para promover apenas as crianças que alcançarem determinado padrão de desempenho para o ingresso no Ensino Fundamental. À luz da Resolução CNE/CEB nº 5/2009, essa decisão é",
        "alternativas": [
            "adequada, porque a pré-escola pode usar avaliação classificatória para orientar a transição ao Ensino Fundamental, sem retenção automática.",
            "adequada se a família concordar e houver registro contínuo do desenvolvimento ao longo do ano.",
            "inadequada, pois a avaliação deve acompanhar e registrar o desenvolvimento sem finalidade de seleção, promoção ou classificação.",
            "inadequada apenas para crianças público da Educação Especial, para as quais não se admite comparação de desempenho.",
            "adequada quando a decisão se baseia em portfólio, observações e outros registros, e não apenas em prova escrita."
        ],
        "correta": 2,
        "feedbackAcerto": "Você aplicou corretamente a regra da Educação Infantil: avaliação é acompanhamento do desenvolvimento, com múltiplos registros, sem objetivo de seleção, promoção ou classificação, mesmo para o acesso ao Ensino Fundamental.",
        "feedbackErro": "A forma do instrumento não muda a finalidade normativa. Prova, portfólio ou observação não podem ser usados para transformar a avaliação da Educação Infantil em mecanismo de promoção ou retenção.",
        "analiseAlternativas": [
            "Incorreta. A avaliação na Educação Infantil não tem finalidade classificatória.",
            "Incorreta. A concordância da família não transforma retenção ou seleção em prática compatível com a DCNEI.",
            "Correta. É a lógica do art. 10: acompanhamento e registro sem seleção, promoção ou classificação.",
            "Incorreta. A regra vale para todas as crianças, não apenas para o público da Educação Especial.",
            "Incorreta. Portfólio é instrumento possível, mas não autoriza finalidade de promoção."
        ],
        "dicaBanca": "Se aparecer 'avaliação na Educação Infantil', procure: observação + registros + acompanhamento + sem promoção/classificação.",
        "pegadinha": "A alternativa pode citar um instrumento moderno, como portfólio, e ainda assim estar errada se o objetivo for selecionar ou reter.",
        "memorizar2026": "EI: avaliar para acompanhar, não para promover ou reter.",
        "fonte": "Resolução CNE/CEB nº 5/2009, art. 10."
    },
    {
        "id": "SEDUC-EE-DIR-004",
        "numero": 4,
        "subtopico": "Educação Infantil — atualização 2024",
        "dificuldade": "alta",
        "pergunta": "Sobre a Resolução CNE/CEB nº 1/2024, que institui Diretrizes Operacionais Nacionais de Qualidade e Equidade para a Educação Infantil, assinale a afirmativa correta.",
        "alternativas": [
            "Aplica-se exclusivamente às creches públicas municipais.",
            "substituiu as DCNEI de 2009 como referência central para qualidade, currículo e avaliação da Educação Infantil em todo o país.",
            "Limita-se à avaliação das crianças, sem alcançar gestão ou infraestrutura.",
            "tem alcance nacional, aplica-se à oferta pública e privada e considera as singularidades das diferentes modalidades educacionais.",
            "Transforma a pré-escola em etapa preparatória obrigatória para alfabetização no 1º ano."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou uma atualização importante. As Diretrizes de Qualidade e Equidade de 2024 têm alcance nacional, fundamentam políticas, gestão e avaliação da qualidade e aplicam-se à oferta pública e privada, respeitando modalidades e territórios.",
        "feedbackErro": "A Resolução nº 1/2024 não substitui a identidade curricular da Resolução nº 5/2009. Ela acrescenta diretrizes operacionais de qualidade e equidade, com atenção a gestão, infraestrutura, ambientes, processos pedagógicos e monitoramento.",
        "analiseAlternativas": [
            "Incorreta. O alcance não se restringe à rede municipal pública.",
            "Incorreta. A Resolução nº 1/2024 complementa o quadro normativo; não revoga integralmente a DCNEI de 2009.",
            "Incorreta. A norma abrange gestão educacional, infraestrutura, ambientes, processos pedagógicos e avaliação da qualidade.",
            "Correta. Esse é o alcance nacional e inclusivo explicitado na Resolução CNE/CEB nº 1/2024.",
            "Incorreta. A Educação Infantil mantém identidade própria e não é mero treinamento para o 1º ano."
        ],
        "dicaBanca": "Em 2026, não estude Educação Infantil apenas pela Resolução nº 5/2009: acrescente a Resolução nº 1/2024 sobre Qualidade e Equidade.",
        "pegadinha": "'Nova norma' não significa necessariamente 'revogação total da anterior'. Veja a finalidade de cada resolução.",
        "memorizar2026": "EI atual: DCNEI 5/2009 + Qualidade e Equidade 1/2024.",
        "fonte": "Resolução CNE/CEB nº 1/2024; Resolução CNE/CEB nº 5/2009.",
        "atualizacao2026": "A Resolução CNE/CEB nº 1/2024 está vigente e deve entrar no radar da SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-EE-DIR-005",
        "numero": 5,
        "subtopico": "Educação Infantil — inclusão desde a primeira infância",
        "dificuldade": "alta",
        "pergunta": "Uma rede municipal informa que somente iniciará os serviços de Educação Especial quando a criança ingressar no Ensino Fundamental, pois considera a creche e a pré-escola etapas sem necessidade de atendimento especializado. À luz das Diretrizes Nacionais, essa orientação é",
        "alternativas": [
            "correta, pois os serviços especializados se tornam obrigatórios apenas a partir da escolaridade no Ensino Fundamental.",
            "correta para crianças sem laudo, porque o atendimento na Educação Infantil dependeria de comprovação clínica.",
            "correta quando a creche ou pré-escola não possui SRM, devendo o atendimento ser iniciado apenas na etapa seguinte.",
            "incorreta somente para crianças com deficiência que já necessitem de apoio intensivo nas atividades de cuidado e participação.",
            "incorreta, pois os serviços de Educação Especial devem ser assegurados desde a Educação Infantil, quando necessários."
        ],
        "correta": 4,
        "feedbackAcerto": "Você percebeu a transversalidade desde a primeira infância. As Diretrizes de Educação Especial determinam que o atendimento escolar se inicia na Educação Infantil, em creches e pré-escolas, sempre que necessários os serviços de Educação Especial.",
        "feedbackErro": "A ausência de sala de recursos, de laudo ou o tipo de deficiência não autoriza adiar direitos educacionais até o Ensino Fundamental. A organização do sistema deve responder às necessidades desde a Educação Infantil.",
        "analiseAlternativas": [
            "Incorreta. A Educação Especial não começa apenas no Ensino Fundamental.",
            "Incorreta. O direito educacional não depende dessa condição clínica para começar.",
            "Incorreta. A rede deve organizar serviços e apoios; a inexistência de SRM não suspende o direito.",
            "Incorreta. A garantia alcança o público da Educação Especial conforme suas necessidades, não um único tipo de deficiência.",
            "Correta. A Resolução CNE/CEB nº 2/2001 explicita início na Educação Infantil, em creches e pré-escolas."
        ],
        "dicaBanca": "FGV pode cruzar duas diretrizes: Educação Infantil e Educação Especial. Pense transversalmente, não em 'blocos' isolados.",
        "pegadinha": "A Educação Especial não é uma etapa posterior; é modalidade transversal.",
        "memorizar2026": "Inclusão começa na creche e na pré-escola quando houver necessidade de serviços de Educação Especial.",
        "fonte": "Resolução CNE/CEB nº 2/2001, arts. 1º e 2º; Resolução CNE/CEB nº 1/2024."
    },
    {
        "id": "SEDUC-EE-DIR-006",
        "numero": 6,
        "subtopico": "Ensino Fundamental — natureza e duração",
        "dificuldade": "media",
        "pergunta": "De acordo com a Resolução CNE/CEB nº 7/2010, o Ensino Fundamental",
        "alternativas": [
            "tem nove anos, é direito público subjetivo e deve ser ofertado de forma pública, gratuita e com qualidade.",
            "é modalidade facultativa da Educação Básica destinada apenas às crianças alfabetizadas.",
            "tem duração variável conforme decisão de cada escola e pode exigir processo seletivo para ingresso.",
            "deve ser organizado exclusivamente em séries anuais, sendo vedados ciclos ou outras formas de organização.",
            "não se aplica às modalidades de Educação Especial, do Campo, Indígena ou Quilombola."
        ],
        "correta": 0,
        "feedbackAcerto": "Você reconheceu elementos estruturais das Diretrizes do Ensino Fundamental: nove anos, direito público subjetivo, dever estatal e oferta pública gratuita e de qualidade, sem seleção.",
        "feedbackErro": "A Resolução nº 7/2010 não torna o Ensino Fundamental facultativo, não autoriza seleção e não o isola das modalidades da Educação Básica.",
        "analiseAlternativas": [
            "Correta. Resume os arts. 1º, 3º e 4º da Resolução CNE/CEB nº 7/2010.",
            "Incorreta. O Ensino Fundamental integra a escolaridade obrigatória e não exige alfabetização prévia.",
            "Incorreta. A duração nacional é de nove anos e a oferta pública não pode depender de seleção.",
            "Incorreta. A organização escolar admite possibilidades previstas na legislação; a resolução não impõe série anual como única forma.",
            "Incorreta. As Diretrizes aplicam-se também às modalidades do Ensino Fundamental."
        ],
        "dicaBanca": "Nas questões literais, procure: 9 anos + direito público subjetivo + gratuito + qualidade + sem seleção.",
        "pegadinha": "A FGV pode misturar características de etapa com regras inexistentes de seleção.",
        "memorizar2026": "EF = 9 anos + direito público subjetivo + oferta sem seleção.",
        "fonte": "Resolução CNE/CEB nº 7/2010, arts. 1º a 4º."
    },
    {
        "id": "SEDUC-EE-DIR-007",
        "numero": 7,
        "subtopico": "Ensino Fundamental — avaliação",
        "dificuldade": "alta",
        "pergunta": "Segundo o art. 32 da Resolução CNE/CEB nº 7/2010, a avaliação no Ensino Fundamental deve assumir caráter",
        "alternativas": [
            "somativo, classificatório e periódico, com prevalência dos resultados finais.",
            "processual, formativo e participativo, sendo contínua, cumulativa e diagnóstica.",
            "seletivo e comparativo, com foco em ranquear turmas e estudantes.",
            "exclusivamente qualitativo, vedado qualquer registro quantitativo.",
            "uniforme e padronizado, sem adaptações às necessidades dos alunos."
        ],
        "correta": 1,
        "feedbackAcerto": "Você marcou a formulação normativa correta: avaliação processual, formativa, participativa, contínua, cumulativa e diagnóstica, capaz de redimensionar a ação pedagógica.",
        "feedbackErro": "A diretriz afasta uma avaliação exclusivamente classificatória. O foco é identificar potencialidades e dificuldades, subsidiar intervenções e manter estudantes e famílias informados.",
        "analiseAlternativas": [
            "Incorreta. A avaliação não é definida como predominantemente somativa e classificatória.",
            "Correta. É a redação central do art. 32, I.",
            "Incorreta. Ranqueamento não é a finalidade indicada pela Diretriz.",
            "Incorreta. Aspectos qualitativos têm relevância, mas isso não significa proibição absoluta de registros quantitativos.",
            "Incorreta. A avaliação deve usar diversos instrumentos e responder às necessidades dos estudantes."
        ],
        "dicaBanca": "FGV costuma cobrar a sequência de adjetivos da norma. Memorize o conjunto, não apenas 'formativa'.",
        "pegadinha": "Uma alternativa pode trazer quatro características corretas e trocar uma por 'classificatória'. Leia todas.",
        "memorizar2026": "EF, art. 32: processual + formativa + participativa + contínua + cumulativa + diagnóstica.",
        "fonte": "Resolução CNE/CEB nº 7/2010, art. 32."
    },
    {
        "id": "SEDUC-EE-DIR-008",
        "numero": 8,
        "subtopico": "Ensino Fundamental — currículo e diversidade",
        "dificuldade": "alta",
        "pergunta": "Uma escola pretende aplicar exatamente o mesmo currículo, materiais, exemplos culturais e estratégias em todas as turmas, afirmando que qualquer contextualização prejudicaria a igualdade. Considerando as Diretrizes do Ensino Fundamental, a posição da escola é",
        "alternativas": [
            "adequada, pois a base comum exige tratamento curricular uniforme, admitindo contextualização apenas em atividades complementares.",
            "adequada se os objetivos forem os mesmos e as diferenças de contexto forem tratadas exclusivamente em projetos extracurriculares.",
            "inadequada, porque a formação comum deve articular-se à diversidade e à contextualização curricular e pedagógica.",
            "inadequada apenas quando a uniformização impedir o atendimento de modalidades com diretrizes próprias, como a educação indígena ou quilombola.",
            "adequada se a opção pela uniformidade estiver prevista no regimento e for aplicada sem distinção entre os estudantes."
        ],
        "correta": 2,
        "feedbackAcerto": "Você distinguiu igualdade de uniformidade. As Diretrizes preservam direitos comuns de aprendizagem, mas valorizam diversidade, contextos, culturas e necessidades, inclusive por meio da parte diversificada e de estratégias acessíveis.",
        "feedbackErro": "A existência de referenciais comuns não exige ensino idêntico. Padronização absoluta pode invisibilizar contextos e manter barreiras para participação e aprendizagem.",
        "analiseAlternativas": [
            "Incorreta. Igualdade de direitos não implica uniformidade de meios e estratégias.",
            "Incorreta. Instrumentos e tempos podem ser diversificados quando necessários à aprendizagem e acessibilidade.",
            "Correta. As Diretrizes articulam direito comum, diversidade e contextualização.",
            "Incorreta. O respeito à diversidade é princípio geral, não exclusivo de modalidades específicas.",
            "Incorreta. O regimento não pode legitimar prática contrária às Diretrizes nacionais."
        ],
        "dicaBanca": "Se a alternativa usar 'idêntico para todos' como sinônimo de inclusão, desconfie. Equidade pode exigir diferenciação pedagógica.",
        "pegadinha": "Currículo comum não é currículo uniforme.",
        "memorizar2026": "Direito comum + diversidade + contextualização = currículo democrático.",
        "fonte": "Resolução CNE/CEB nº 7/2010; Resolução CNE/CEB nº 4/2010."
    },
    {
        "id": "SEDUC-EE-DIR-009",
        "numero": 9,
        "subtopico": "Ensino Fundamental — Educação Especial no PPP",
        "dificuldade": "alta",
        "pergunta": "Uma escola de Ensino Fundamental argumenta que questões de acessibilidade e Educação Especial não precisam constar do projeto político-pedagógico, pois são responsabilidade exclusiva do professor do AEE. Segundo a Resolução CNE/CEB nº 7/2010, essa afirmação é",
        "alternativas": [
            "correta, porque o PPP organiza o currículo comum e o plano do AEE deve permanecer como documento técnico separado da proposta escolar.",
            "correta quando há SRM, pois a existência do serviço especializado já supriria a necessidade de previsão no PPP.",
            "correta se o professor do AEE mantiver plano próprio e apresentar relatórios periódicos à coordenação pedagógica.",
            "incorreta, pois PPP e regimento devem contemplar condições de acesso, permanência e inclusão dos estudantes da Educação Especial.",
            "incorreta apenas na rede pública, já que instituições privadas podem tratar acessibilidade em regulamento específico."
        ],
        "correta": 3,
        "feedbackAcerto": "Você aplicou diretamente o art. 41. A inclusão é responsabilidade institucional: PPP e regimento devem contemplar acesso e permanência, e não delegar toda a política inclusiva ao AEE.",
        "feedbackErro": "O AEE é parte da organização escolar, mas não substitui o compromisso do currículo, da gestão e dos professores da classe comum com acessibilidade, participação e aprendizagem.",
        "analiseAlternativas": [
            "Incorreta. O PPP abrange a organização pedagógica e as condições de inclusão, não apenas componentes curriculares.",
            "Incorreta. Ter SRM não retira a obrigação institucional do PPP.",
            "Incorreta. O plano do AEE não substitui a previsão da política inclusiva no PPP e no regimento.",
            "Correta. É o comando do art. 41 da Resolução nº 7/2010.",
            "Incorreta. A diretriz menciona inclusão em escolas públicas e privadas."
        ],
        "dicaBanca": "FGV gosta de transformar inclusão em tarefa de 'um especialista'. Nas normas, ela é responsabilidade da escola e do sistema.",
        "pegadinha": "PPP inclusivo ≠ plano isolado do AEE.",
        "memorizar2026": "EF: PPP + regimento devem prever acesso, permanência e inclusão.",
        "fonte": "Resolução CNE/CEB nº 7/2010, art. 41."
    },
    {
        "id": "SEDUC-EE-DIR-010",
        "numero": 10,
        "subtopico": "Ensino Fundamental — AEE e escolarização",
        "dificuldade": "alta",
        "pergunta": "No Ensino Fundamental, uma direção decide retirar um estudante da classe comum durante a maior parte da semana para que o AEE assuma o ensino dos conteúdos curriculares. Segundo a Resolução CNE/CEB nº 7/2010, essa decisão é",
        "alternativas": [
            "adequada, porque o AEE pode assumir temporariamente os conteúdos comuns quando houver maior necessidade de apoio especializado.",
            "adequada para deficiência intelectual se a família e a equipe registrarem no PEI que o estudante aprende melhor em atendimento individual.",
            "adequada se houver concordância da família e articulação semanal entre professor regente e professor do AEE.",
            "inadequada apenas quando a retirada da classe comum impedir participação em avaliações e projetos coletivos.",
            "inadequada, pois o AEE não substitui a escolarização e deve ampliar o acesso ao currículo em articulação com a classe comum."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou o papel complementar/suplementar do AEE. No Ensino Fundamental, o estudante permanece sujeito do currículo e da classe comum; o AEE oferece recursos e estratégias para ampliar acesso e autonomia.",
        "feedbackErro": "Nem diagnóstico, nem concordância familiar, nem existência de professor especializado transformam o AEE em substituto da escolarização comum.",
        "analiseAlternativas": [
            "Incorreta. O AEE não tem função substitutiva.",
            "Incorreta. O tipo de deficiência não altera a natureza não substitutiva do AEE.",
            "Incorreta. Termo familiar não pode afastar a diretriz de escolarização inclusiva.",
            "Incorreta. A inadequação decorre da função atribuída ao AEE, e não apenas da formação profissional.",
            "Correta. Resume o art. 42 da Resolução CNE/CEB nº 7/2010."
        ],
        "dicaBanca": "Ao ler 'AEE', faça a pergunta: está ampliando o acesso ao currículo ou substituindo a classe comum?",
        "pegadinha": "AEE pode apoiar muito, mas não vira 'classe paralela'.",
        "memorizar2026": "AEE = apoio ao acesso/autonomia; não substitui escolarização.",
        "fonte": "Resolução CNE/CEB nº 7/2010, art. 42; Resolução CNE/CEB nº 4/2009."
    },
    {
        "id": "SEDUC-EE-DIR-011",
        "numero": 11,
        "subtopico": "EJA — diretrizes atuais 2025",
        "dificuldade": "media",
        "pergunta": "Em 2026, a referência nacional atual para as Diretrizes Operacionais da Educação de Jovens e Adultos é a",
        "alternativas": [
            "Resolução CNE/CEB nº 3/2025, alterada pela Resolução CNE/CEB nº 6/2025.",
            "Resolução CNE/CEB nº 3/2010, complementada por orientações posteriores, mas ainda como referência operacional principal da EJA.",
            "Resolução CNE/CEB nº 5/2009.",
            "Resolução CNE/CEB nº 7/2010.",
            "Resolução CNE/CEB nº 4/2009."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou a atualização normativa correta. Para a prova de 2026, a EJA deve ser estudada pela Resolução CNE/CEB nº 3/2025, já considerando a alteração da Resolução nº 6/2025.",
        "feedbackErro": "As resoluções de 2009 e 2010 tratam de outros objetos, e a EJA recebeu novas Diretrizes Operacionais Nacionais em 2025.",
        "analiseAlternativas": [
            "Correta. É a referência vigente indicada pelo CNE para as Diretrizes Operacionais Nacionais da EJA.",
            "Incorreta. A Resolução nº 3/2010 é marco anterior; houve nova regulamentação nacional em 2025.",
            "Incorreta. A Resolução nº 5/2009 trata das DCNEI.",
            "Incorreta. A Resolução nº 7/2010 trata do Ensino Fundamental de nove anos.",
            "Incorreta. A Resolução nº 4/2009 trata das Diretrizes Operacionais do AEE."
        ],
        "dicaBanca": "Em questão de atualização, a FGV pode oferecer a norma histórica como distrator. Olhe o ano e o objeto da resolução.",
        "pegadinha": "'Foi importante no passado' não significa 'é a norma operacional atual'.",
        "memorizar2026": "EJA 2026: Res. 3/2025 + alteração Res. 6/2025.",
        "fonte": "Resolução CNE/CEB nº 3/2025, alterada pela Resolução CNE/CEB nº 6/2025.",
        "atualizacao2026": "A atualização de 2025 substitui o estudo isolado das antigas diretrizes operacionais para EJA."
    },
    {
        "id": "SEDUC-EE-DIR-012",
        "numero": 12,
        "subtopico": "EJA — inclusão do público da Educação Especial",
        "dificuldade": "alta",
        "pergunta": "Uma rede de EJA pretende recusar matrícula de adultos com deficiência, justificando que o Atendimento Educacional Especializado estaria disponível apenas para estudantes em idade escolar regular. À luz da Resolução CNE/CEB nº 3/2025, a medida é",
        "alternativas": [
            "adequada, porque a EJA possui organização própria e o AEE é previsto prioritariamente para estudantes em idade regular.",
            "inadequada, pois jovens, adultos e idosos do público da Educação Especial têm direito a acesso, permanência, participação e aprendizagem na EJA.",
            "adequada quando a pessoa tem 18 anos ou mais e pode optar por atendimento educacional especializado fora da escola comum.",
            "inadequada somente quando a unidade dispõe de sala de recursos ou parceria formal para oferta do AEE.",
            "adequada para altas habilidades/superdotação, cuja suplementação poderia ocorrer fora da modalidade EJA."
        ],
        "correta": 1,
        "feedbackAcerto": "Você aplicou uma atualização muito importante: a Resolução nº 3/2025 assegura expressamente aos estudantes público da Educação Especial acesso, permanência, participação e aprendizagem na EJA.",
        "feedbackErro": "A EJA é modalidade da Educação Básica e deve garantir inclusão. O direito não depende da existência local de SRM nem desaparece pela idade do estudante.",
        "analiseAlternativas": [
            "Incorreta. A EJA é modalidade da Educação Básica.",
            "Correta. A Resolução nº 3/2025 explicita essas quatro garantias ao público da Educação Especial.",
            "Incorreta. A idade de ingresso varia por etapa, mas deficiência não justifica exclusão.",
            "Incorreta. A rede deve organizar apoios; ausência de SRM não autoriza negar matrícula.",
            "Incorreta. Altas habilidades/superdotação também integram a previsão da norma."
        ],
        "dicaBanca": "FGV pode cruzar EJA e Educação Especial. Memorize a sequência: acesso + permanência + participação + aprendizagem.",
        "pegadinha": "Não trate EJA como espaço fora da política de inclusão.",
        "memorizar2026": "EJA inclusiva: acesso, permanência, participação e aprendizagem.",
        "fonte": "Resolução CNE/CEB nº 3/2025, art. 2º, §3º.",
        "atualizacao2026": "A Resolução de 2025 tornou essa garantia especialmente explícita para a EJA."
    },
    {
        "id": "SEDUC-EE-DIR-013",
        "numero": 13,
        "subtopico": "EJA — organização e diversidade",
        "dificuldade": "alta",
        "pergunta": "Ao organizar a EJA, um sistema de ensino decide oferecer somente turmas noturnas e um currículo rígido, idêntico ao ensino regular diurno, alegando que flexibilização reduziria a qualidade. Segundo as Diretrizes de 2025, essa decisão é",
        "alternativas": [
            "adequada, pois a EJA deve preservar organização equivalente à do ensino regular para garantir isonomia curricular.",
            "adequada se a carga horária legal for cumprida e houver possibilidade de atividades complementares em horários alternativos, quando a organização estiver prevista no regimento e for aplicada com acompanhamento contínuo.",
            "inadequada, pois a EJA admite organização curricular diversificada e oferta em turnos compatíveis com as necessidades de jovens, adultos e idosos.",
            "inadequada apenas para estudantes trabalhadores que comprovem incompatibilidade entre jornada de trabalho e horário escolar.",
            "adequada quando prevista no projeto pedagógico e aprovada pelo conselho escolar com base na demanda local."
        ],
        "correta": 2,
        "feedbackAcerto": "Você reconheceu que flexibilidade na EJA não significa menor qualidade. A norma permite formas diversificadas de organização curricular e determina oferta em diferentes turnos para responder às necessidades do público.",
        "feedbackErro": "A EJA possui identidade própria. Reproduzir rigidamente o modelo diurno pode ignorar trajetórias, trabalho, território, cultura e condições reais de permanência dos estudantes.",
        "analiseAlternativas": [
            "Incorreta. A EJA não é simples cópia do ensino regular.",
            "Incorreta. Cumprir carga horária não basta se a organização desconsiderar as diretrizes de acesso e permanência.",
            "Correta. Corresponde ao art. 2º, §§1º e 2º, da Resolução nº 3/2025.",
            "Incorreta. A flexibilidade atende à diversidade do público, não apenas trabalhadores formalizados.",
            "Incorreta. Deliberação local não pode contrariar norma nacional."
        ],
        "dicaBanca": "Se a alternativa disser que EJA é 'ensino regular noturno', desconfie. A modalidade tem identidade e organização próprias.",
        "pegadinha": "Flexibilizar organização ≠ flexibilizar direito ou qualidade.",
        "memorizar2026": "EJA: organização diversificada + diferentes turnos + contexto do estudante.",
        "fonte": "Resolução CNE/CEB nº 3/2025, art. 2º, §§1º, 2º e 4º."
    },
    {
        "id": "SEDUC-EE-DIR-014",
        "numero": 14,
        "subtopico": "EJA — idades mínimas",
        "dificuldade": "alta",
        "pergunta": "Conforme a Resolução CNE/CEB nº 3/2025, as idades mínimas para ingresso nos cursos da EJA equivalentes ao Ensino Fundamental e ao Ensino Médio são, respectivamente,",
        "alternativas": [
            "14 e 16 anos completos.",
            "14 e 18 anos completos.",
            "15 e 17 anos completos.",
            "15 e 18 anos completos.",
            "16 e 18 anos completos."
        ],
        "correta": 3,
        "feedbackAcerto": "Você acertou a literalidade atual: 15 anos completos para a EJA do Ensino Fundamental e 18 anos completos para a EJA do Ensino Médio. As mesmas referências aparecem para exames de conclusão das respectivas etapas.",
        "feedbackErro": "A banca pode trocar apenas um número. Em questões normativas, a diferença de um ano torna toda a alternativa incorreta.",
        "analiseAlternativas": [
            "Incorreta. A norma não adota 14 anos para o Ensino Fundamental nem 16 para o Médio.",
            "Incorreta. O primeiro marco é 15 anos completos.",
            "Incorreta. Para o Ensino Médio, a idade mínima é 18 anos completos.",
            "Correta. 15 anos para Fundamental e 18 anos para Médio.",
            "Incorreta. O Ensino Fundamental da EJA admite ingresso a partir de 15 anos completos."
        ],
        "dicaBanca": "Decore em par: EJA Fundamental = 15; EJA Médio = 18.",
        "pegadinha": "A emancipação civil não reduz automaticamente as idades normativas para exames de certificação.",
        "memorizar2026": "15/18: Fundamental/Médio na EJA.",
        "fonte": "Resolução CNE/CEB nº 3/2025, art. 16."
    },
    {
        "id": "SEDUC-EE-DIR-015",
        "numero": 15,
        "subtopico": "EJA — avaliação",
        "dificuldade": "alta",
        "pergunta": "Uma professora da EJA utiliza apenas uma prova final para definir o resultado do estudante e ignora o percurso de aprendizagem ao longo do semestre. À luz das Diretrizes atuais, a prática é",
        "alternativas": [
            "adequada, pois a EJA pode concentrar a avaliação em exame final quando assegura recuperação e registro de frequência ao longo do período.",
            "adequada se a prova final for contextualizada e contemplar as experiências sociais e profissionais dos estudantes.",
            "adequada no Ensino Médio da EJA, em que o resultado final pode prevalecer sobre os registros processuais.",
            "inadequada apenas quando houver estudante público da Educação Especial que necessite de instrumentos avaliativos acessíveis.",
            "inadequada, pois a avaliação na EJA deve ser contínua e formativa, acompanhando o desenvolvimento das aprendizagens."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou a concepção avaliativa da EJA atual: acompanhamento contínuo e formativo, considerando desenvolvimento e trajetória, e não decisão baseada unicamente em uma prova final.",
        "feedbackErro": "Contextualizar uma prova é positivo, mas não transforma um único momento somativo em processo contínuo e formativo. A diretriz exige acompanhamento do percurso.",
        "analiseAlternativas": [
            "Incorreta. A avaliação não deve ser reduzida a exame final.",
            "Incorreta. O problema está na exclusividade da prova final, não apenas no formato das questões.",
            "Incorreta. A perspectiva contínua e formativa também alcança a EJA do Ensino Médio.",
            "Incorreta. A regra é geral da modalidade, embora adaptações sejam essenciais para quem necessitar.",
            "Correta. Essa é a orientação atual para avaliação escolar na EJA."
        ],
        "dicaBanca": "FGV pode usar um instrumento legítimo em uma prática errada. Prova pode existir; o erro é torná-la o único retrato da aprendizagem.",
        "pegadinha": "Avaliação formativa não é ausência de resultado; é uso pedagógico contínuo das evidências.",
        "memorizar2026": "EJA: avaliação contínua + formativa + ligada ao desenvolvimento das aprendizagens.",
        "fonte": "Resolução CNE/CEB nº 3/2025, art. 14; LDB, art. 24, V."
    },
    {
        "id": "SEDUC-EE-DIR-016",
        "numero": 16,
        "subtopico": "Educação Especial — Resolução CNE/CEB nº 2/2001",
        "dificuldade": "media",
        "pergunta": "A Resolução CNE/CEB nº 2/2001 instituiu Diretrizes Nacionais para a Educação Especial na Educação Básica e estabelece que o atendimento escolar dos alunos que apresentam necessidades educacionais especiais",
        "alternativas": [
            "inicia-se na Educação Infantil, com serviços de Educação Especial sempre que necessários.",
            "somente pode começar após o ingresso no Ensino Fundamental.",
            "deve ocorrer prioritariamente em instituições separadas do ensino comum.",
            "depende de avaliação médica para que a escola reconheça qualquer necessidade pedagógica.",
            "é responsabilidade exclusiva de centros especializados, e não dos sistemas de ensino."
        ],
        "correta": 0,
        "feedbackAcerto": "Você identificou a transversalidade desde a Educação Infantil. A Resolução nº 2/2001 já determinava organização dos sistemas para incluir e atender necessidades educacionais ao longo da Educação Básica.",
        "feedbackErro": "A diretriz não posterga o atendimento até o Ensino Fundamental e não transfere toda a responsabilidade a instituições especializadas ou profissionais da saúde.",
        "analiseAlternativas": [
            "Correta. É previsão expressa do art. 1º e de seu parágrafo único.",
            "Incorreta. O atendimento pode começar em creches e pré-escolas.",
            "Incorreta. A resolução orienta os sistemas à construção da educação inclusiva.",
            "Incorreta. Necessidades educacionais não são reduzidas à emissão de diagnóstico médico.",
            "Incorreta. Os sistemas de ensino devem organizar setor, recursos e serviços para a Educação Especial."
        ],
        "dicaBanca": "Questões FGV podem cobrar o início do atendimento e a ideia de sistema organizado para inclusão.",
        "pegadinha": "Educação Especial não é 'serviço externo à escola'; é modalidade do sistema educacional.",
        "memorizar2026": "Res. 2/2001: Educação Especial em todas as etapas e modalidades; começa na EI.",
        "fonte": "Resolução CNE/CEB nº 2/2001, arts. 1º a 4º."
    },
    {
        "id": "SEDUC-EE-DIR-017",
        "numero": 17,
        "subtopico": "Educação Especial — Resolução CNE/CEB nº 4/2009",
        "dificuldade": "alta",
        "pergunta": "Segundo a Resolução CNE/CEB nº 4/2009, os sistemas de ensino devem matricular os estudantes público da Educação Especial",
        "alternativas": [
            "apenas no AEE, quando o professor especializado considerar suficiente.",
            "nas classes comuns e no AEE, cuja função é complementar ou suplementar a escolarização.",
            "em classes comuns somente após conclusão do AEE.",
            "em escolas especiais sempre que houver sala de recursos no município.",
            "em classes comuns ou no AEE, conforme escolha da família e avaliação da equipe sobre a forma de atendimento mais adequada."
        ],
        "correta": 1,
        "feedbackAcerto": "Você reconheceu a lógica de dupla matrícula/participação prevista na Resolução nº 4/2009: classe comum + AEE, com o atendimento especializado apoiando a formação e a eliminação de barreiras.",
        "feedbackErro": "AEE e classe comum não são opções concorrentes. A Resolução organiza o AEE para complementar ou suplementar a formação do estudante, sem substituição da escolarização.",
        "analiseAlternativas": [
            "Incorreta. AEE isolado não substitui a classe comum.",
            "Correta. É a diretriz central do art. 1º da Resolução CNE/CEB nº 4/2009.",
            "Incorreta. Não existe etapa obrigatória de 'concluir AEE' antes da classe comum.",
            "Incorreta. A existência de SRM não cria regra de segregação escolar.",
            "Incorreta. Classe comum e AEE são articulados; não se trata de escolha excludente."
        ],
        "dicaBanca": "FGV já cobrou diretamente a Resolução nº 4/2009. Memorize classe comum + AEE, e não 'um ou outro'.",
        "pegadinha": "A palavra 'e' é decisiva: matrícula na classe comum E no AEE quando cabível.",
        "memorizar2026": "Res. 4/2009: ensino regular + AEE complementar/suplementar.",
        "fonte": "Resolução CNE/CEB nº 4/2009, art. 1º."
    },
    {
        "id": "SEDUC-EE-DIR-018",
        "numero": 18,
        "subtopico": "Educação Especial — função do AEE",
        "dificuldade": "alta",
        "pergunta": "Uma coordenadora descreve o AEE como reforço escolar destinado a repetir os mesmos exercícios da classe comum até que o estudante alcance o ritmo dos colegas. Conforme as Diretrizes Operacionais do AEE, essa descrição é",
        "alternativas": [
            "correta, pois o AEE pode funcionar como recuperação paralela quando a dificuldade decorre diretamente da deficiência.",
            "correta para deficiência intelectual, desde que os exercícios repetidos estejam articulados aos objetivos da classe comum.",
            "incorreta, porque o AEE organiza recursos pedagógicos e de acessibilidade para eliminar barreiras e complementar ou suplementar a formação.",
            "incorreta apenas se o reforço ocorrer no contraturno sem articulação com o professor regente e com o planejamento da turma, desde que a opção conste do PPP e seja acompanhada pela equipe pedagógica.",
            "correta se o plano de AEE for aprovado pela família e houver registro de progresso nas habilidades trabalhadas."
        ],
        "correta": 2,
        "feedbackAcerto": "Você diferenciou AEE de reforço. O AEE organiza serviços, recursos de acessibilidade e estratégias voltadas à participação e aprendizagem, sem reproduzir simplesmente o ensino da classe comum.",
        "feedbackErro": "Repetir tarefas pode até integrar alguma estratégia em contexto específico, mas isso não define a função do AEE. Seu núcleo é acessibilidade, autonomia, participação e eliminação de barreiras.",
        "analiseAlternativas": [
            "Incorreta. AEE não é sinônimo de recuperação ou reforço escolar.",
            "Incorreta. A função do AEE não muda para reforço em razão da deficiência intelectual.",
            "Correta. Resume a finalidade definida pelas Diretrizes Operacionais.",
            "Incorreta. Contraturno é forma de organização, não critério para definir se a concepção é correta.",
            "Incorreta. Concordância familiar não altera a natureza pedagógica do AEE."
        ],
        "dicaBanca": "Quando aparecer 'reforço', 'aula particular' ou 'repetição da classe comum' como definição de AEE, a tendência é estar errado.",
        "pegadinha": "AEE trabalha barreiras e acessibilidade; não é uma segunda sala comum.",
        "memorizar2026": "AEE = identificar/elaborar/organizar recursos + eliminar barreiras.",
        "fonte": "Resolução CNE/CEB nº 4/2009, arts. 2º e 13."
    },
    {
        "id": "SEDUC-EE-DIR-019",
        "numero": 19,
        "subtopico": "Educação Especial — AEE no PPP",
        "dificuldade": "alta",
        "pergunta": "Em auditoria pedagógica, verificou-se que uma escola oferece AEE, mas o serviço não aparece no projeto político-pedagógico, não há previsão de recursos, cronograma, articulação com docentes ou participação das famílias. À luz da Resolução CNE/CEB nº 4/2009, a escola",
        "alternativas": [
            "está regular, pois basta a existência física da sala de recursos.",
            "está regular se o professor do AEE mantiver plano próprio, relatórios individuais e articulação periódica com a coordenação escolar.",
            "está irregular apenas quanto à participação das famílias.",
            "deve institucionalizar o AEE no PPP, com organização, recursos, profissionais, redes de apoio e articulação pedagógica.",
            "deve retirar o AEE do PPP para preservar a autonomia do professor especializado."
        ],
        "correta": 3,
        "feedbackAcerto": "Você identificou que o AEE é política institucional, não atividade paralela. A Resolução nº 4/2009 exige que sua oferta esteja prevista no PPP, com elementos de organização e articulação.",
        "feedbackErro": "Ter uma sala ou um professor não basta. O PPP deve integrar o AEE à proposta da escola, favorecendo colaboração entre classe comum, atendimento especializado, família e rede de apoio.",
        "analiseAlternativas": [
            "Incorreta. Infraestrutura isolada não institucionaliza o AEE.",
            "Incorreta. Relatórios são úteis, mas não substituem a previsão do serviço no PPP.",
            "Incorreta. O problema é mais amplo e envolve toda a organização do AEE.",
            "Correta. Corresponde ao art. 10 da Resolução CNE/CEB nº 4/2009.",
            "Incorreta. A autonomia profissional ocorre dentro de uma política pedagógica institucional articulada."
        ],
        "dicaBanca": "FGV já explorou PPP + AEE. Se o enunciado mostra serviço 'solto' ou isolado, procure a alternativa que o integra ao projeto da escola.",
        "pegadinha": "SRM sem PPP não é suficiente para institucionalizar a política de AEE.",
        "memorizar2026": "AEE deve estar no PPP: organização + recursos + profissionais + articulação.",
        "fonte": "Resolução CNE/CEB nº 4/2009, art. 10."
    },
    {
        "id": "SEDUC-EE-DIR-020",
        "numero": 20,
        "subtopico": "Educação Especial — transversalidade e inclusão",
        "dificuldade": "alta",
        "pergunta": "Considerando conjuntamente as Diretrizes da Educação Especial e as Diretrizes do Ensino Fundamental, assinale a afirmativa correta.",
        "alternativas": [
            "Educação Especial constitui etapa paralela que substitui o Ensino Fundamental quando houver deficiência.",
            "A modalidade restringe-se ao AEE e não alcança currículo, avaliação ou gestão escolar.",
            "A inclusão é responsabilidade apenas do professor especializado, pois o professor da classe comum mantém currículo sem adaptações.",
            "O AEE deve assumir a escolarização sempre que o estudante não acompanhar o ritmo médio da turma.",
            "é transversal à educação regular e deve articular PPP, classe comum, acessibilidade e AEE sem substituir a escolarização."
        ],
        "correta": 4,
        "feedbackAcerto": "Você reuniu corretamente as diretrizes. Educação Especial não é etapa paralela: atravessa o sistema, exige organização da escola e articula ensino comum e AEE para assegurar acesso, participação e aprendizagem.",
        "feedbackErro": "As normas nacionais distribuem responsabilidades entre sistema, gestão, professores da classe comum, AEE e demais atores. Não existe transferência integral do estudante para o especialista.",
        "analiseAlternativas": [
            "Incorreta. Educação Especial é modalidade transversal, não etapa substitutiva.",
            "Incorreta. A inclusão alcança currículo, avaliação, gestão, acessibilidade e participação.",
            "Incorreta. O professor da classe comum também é responsável pela aprendizagem e pelas práticas inclusivas.",
            "Incorreta. Dificuldade em acompanhar o ritmo não autoriza substituir escolarização por AEE.",
            "Correta. Sintetiza a articulação entre Res. 2/2001, Res. 4/2009 e Res. 7/2010."
        ],
        "dicaBanca": "FGV gosta de perguntar 'de quem é a responsabilidade?'. Em inclusão, desconfie de alternativas que concentram tudo em um único profissional.",
        "pegadinha": "Transversalidade = presença da Educação Especial em todas as etapas/modalidades e na organização da escola.",
        "memorizar2026": "Educação Especial transversal + PPP + classe comum + AEE articulado.",
        "fonte": "Resoluções CNE/CEB nº 2/2001, nº 4/2009 e nº 7/2010, arts. 41 e 42."
    },
    {
        "id": "SEDUC-EE-DIR-021",
        "numero": 21,
        "subtopico": "Integração das Diretrizes — identificação da norma",
        "dificuldade": "media",
        "pergunta": "Relacione corretamente o documento ao seu objeto principal: Resolução CNE/CEB nº 5/2009; Resolução CNE/CEB nº 7/2010; Resolução CNE/CEB nº 3/2025; Resolução CNE/CEB nº 4/2009.",
        "alternativas": [
            "Educação Infantil; Ensino Fundamental de nove anos; EJA; Diretrizes Operacionais do AEE.",
            "Ensino Fundamental; Educação Infantil; AEE; EJA.",
            "Educação Infantil; EJA; Ensino Fundamental; Educação Especial em classes especiais.",
            "EJA; Ensino Fundamental; Educação Infantil; AEE.",
            "Educação Infantil; Ensino Médio; EJA; Educação Bilíngue de Surdos."
        ],
        "correta": 0,
        "feedbackAcerto": "Você associou corretamente os quatro marcos normativos. Essa identificação é básica para evitar que a FGV misture números de resoluções e objetos próximos.",
        "feedbackErro": "As alternativas incorretas trocam o objeto de resoluções que aparecem juntas em editais educacionais. Em prova normativa, primeiro identifique 'qual norma fala de quê'.",
        "analiseAlternativas": [
            "Correta. 5/2009 = EI; 7/2010 = EF 9 anos; 3/2025 = EJA; 4/2009 = AEE.",
            "Incorreta. Inverte Educação Infantil/Ensino Fundamental e também EJA/AEE.",
            "Incorreta. A Res. 7/2010 não é EJA e a Res. 4/2009 não institui educação em classes especiais.",
            "Incorreta. A sequência não corresponde aos objetos normativos.",
            "Incorreta. A Res. 7/2010 não trata do Ensino Médio e a Res. 4/2009 não institui Educação Bilíngue de Surdos."
        ],
        "dicaBanca": "Crie um mapa numérico: 5/09 EI; 4/09 AEE; 7/10 EF; 3/25 EJA.",
        "pegadinha": "Resoluções do mesmo CNE/CEB podem ter números parecidos e anos diferentes. Leia sempre número + ano + objeto.",
        "memorizar2026": "5/09 EI | 4/09 AEE | 7/10 EF | 3/25 EJA.",
        "fonte": "Resoluções CNE/CEB nº 5/2009, nº 4/2009, nº 7/2010 e nº 3/2025."
    },
    {
        "id": "SEDUC-EE-DIR-022",
        "numero": 22,
        "subtopico": "Integração das Diretrizes — avaliação por etapa",
        "dificuldade": "alta",
        "pergunta": "Ao comparar as diretrizes da Educação Infantil e do Ensino Fundamental, é correto afirmar que",
        "alternativas": [
            "em ambas as etapas, a avaliação pode orientar progressão, desde que utilize registros contínuos e não se limite a prova final.",
            "na Educação Infantil, avalia-se para acompanhar o desenvolvimento sem promoção; no Ensino Fundamental, a avaliação é processual, formativa, contínua e diagnóstica.",
            "na Educação Infantil não se realizam registros avaliativos, ao passo que no Ensino Fundamental somente provas escritas são admitidas.",
            "as duas etapas exigem avaliação padronizada nacional como único instrumento válido.",
            "a avaliação formativa é prevista apenas para estudantes público da Educação Especial."
        ],
        "correta": 1,
        "feedbackAcerto": "Você distinguiu corretamente as finalidades por etapa. A Educação Infantil não usa avaliação para promoção; o Ensino Fundamental possui avaliação curricular contínua e formativa, com diversos instrumentos e possibilidade de decisões sobre o percurso escolar conforme a legislação.",
        "feedbackErro": "As duas etapas avaliam, mas não com a mesma função. A FGV pode explorar justamente a diferença entre acompanhar desenvolvimento na EI e avaliação curricular redimensionadora no EF.",
        "analiseAlternativas": [
            "Incorreta. Na Educação Infantil não há objetivo de promoção ou classificação.",
            "Correta. Resume a especificidade avaliativa de cada etapa.",
            "Incorreta. Registros são centrais na EI e o EF admite variados instrumentos.",
            "Incorreta. As diretrizes não reduzem avaliação a um único teste padronizado.",
            "Incorreta. Avaliação formativa é princípio amplo, não exclusivo da Educação Especial."
        ],
        "dicaBanca": "Compare finalidade, não apenas o nome 'avaliação'. A mesma palavra ganha regras específicas conforme a etapa.",
        "pegadinha": "EI: sem promoção. EF: avaliação integra currículo e redimensiona ação pedagógica.",
        "memorizar2026": "EI acompanha sem promover; EF avalia continuamente para ensinar e decidir intervenções.",
        "fonte": "Resolução CNE/CEB nº 5/2009, art. 10; Resolução CNE/CEB nº 7/2010, art. 32."
    },
    {
        "id": "SEDUC-EE-DIR-023",
        "numero": 23,
        "subtopico": "Integração das Diretrizes — caso intermodal",
        "dificuldade": "alta",
        "pergunta": "Uma estudante de 19 anos com deficiência visual ingressa na EJA do Ensino Médio. A escola propõe material inacessível, ausência de AEE e avaliação idêntica sem recursos de acessibilidade, alegando que as diretrizes inclusivas seriam próprias do Ensino Fundamental. A conduta correta seria",
        "alternativas": [
            "manter a proposta, pois na EJA a autonomia do estudante adulto reduz a obrigação de adaptações individualizadas.",
            "encaminhá-la prioritariamente a instituição especializada, mantendo matrícula na EJA apenas se houver disponibilidade de recursos acessíveis.",
            "assegurar acesso, permanência, participação e aprendizagem na EJA, com acessibilidade e apoios articulados à escolarização comum.",
            "manter a matrícula, mas concentrar a avaliação em habilidades funcionais enquanto os conteúdos acadêmicos forem trabalhados no AEE.",
            "oferecer adaptações após apresentação de laudo atualizado que descreva os recursos visuais necessários à estudante."
        ],
        "correta": 2,
        "feedbackAcerto": "Você integrou EJA e Educação Especial. A idade adulta não reduz direitos: a modalidade deve assegurar acessibilidade, participação, aprendizagem e os apoios educacionais necessários.",
        "feedbackErro": "A Educação Especial é transversal. Portanto, alcança também a EJA e exige articulação pedagógica, e não exclusão, currículo paralelo automático ou condicionamento clínico.",
        "analiseAlternativas": [
            "Incorreta. Ser adulta não elimina direitos à acessibilidade e à Educação Especial.",
            "Incorreta. A escolarização comum na EJA não deve ser substituída automaticamente por instituição especializada.",
            "Correta. É a solução coerente com transversalidade e com a Resolução EJA 3/2025.",
            "Incorreta. Deficiência visual não autoriza retirar a estudante do currículo da modalidade.",
            "Incorreta. Adaptações e apoios educacionais não devem ser condicionados automaticamente a novo laudo."
        ],
        "dicaBanca": "Questões integradas da FGV costumam exigir que você aplique duas normas ao mesmo caso, não escolha uma e ignore a outra.",
        "pegadinha": "EJA + Educação Especial = direitos cumulativos, não excludentes.",
        "memorizar2026": "Modalidade transversal acompanha o estudante onde ele estiver na Educação Básica.",
        "fonte": "Resolução CNE/CEB nº 3/2025, art. 2º, §3º; Resolução CNE/CEB nº 2/2001; legislação inclusiva vigente."
    },
    {
        "id": "SEDUC-EE-DIR-024",
        "numero": 24,
        "subtopico": "Integração das Diretrizes — transição entre etapas",
        "dificuldade": "alta",
        "pergunta": "Uma pré-escola decide antecipar rotinas, provas e conteúdos do 1º ano durante todo o último semestre, argumentando que a transição para o Ensino Fundamental exige escolarização formal prévia. Considerando as Diretrizes Nacionais, a decisão é",
        "alternativas": [
            "correta, pois a função de transição autoriza antecipar práticas do 1º ano quando a escola identifica risco de ruptura pedagógica.",
            "correta se a proposta constar do PPP, for aprovada pelas famílias e preservar momentos de brincadeira ao longo do semestre.",
            "correta para crianças de cinco anos quando a equipe registra que a antecipação favorece a adaptação ao Ensino Fundamental.",
            "inadequada, pois a transição deve garantir continuidade sem descaracterizar a Educação Infantil nem antecipar práticas do Ensino Fundamental.",
            "inadequada apenas quando a antecipação vier acompanhada de retenção ou classificação das crianças ao final da pré-escola."
        ],
        "correta": 3,
        "feedbackAcerto": "Você reconheceu a ideia de continuidade sem descaracterização. A transição precisa articular etapas, preservando experiências, registros e desenvolvimento da criança, e não transformar a pré-escola em 1º ano antecipado.",
        "feedbackErro": "A integração entre etapas não significa copiar a organização da etapa seguinte. A Educação Infantil mantém currículo baseado em experiências, interações e brincadeiras.",
        "analiseAlternativas": [
            "Incorreta. A Educação Infantil tem finalidade própria e não é mero curso preparatório.",
            "Incorreta. Aprovação familiar não autoriza contrariar as diretrizes curriculares.",
            "Incorreta. A identidade da Educação Infantil vale para todas as crianças.",
            "Correta. Continuidade deve ocorrer com respeito às especificidades das duas etapas.",
            "Incorreta. O problema existe mesmo sem retenção, pela descaracterização curricular."
        ],
        "dicaBanca": "FGV pode confundir 'articulação' com 'antecipação'. Articular é garantir continuidade; antecipar é copiar práticas do EF antes da hora.",
        "pegadinha": "Transição não apaga a identidade da Educação Infantil.",
        "memorizar2026": "EI → EF: continuidade das aprendizagens, sem antecipação artificial do 1º ano.",
        "fonte": "Resolução CNE/CEB nº 5/2009, art. 11; Resolução CNE/CEB nº 7/2010."
    },
    {
        "id": "SEDUC-EE-DIR-025",
        "numero": 25,
        "subtopico": "Integração das Diretrizes — síntese FGV",
        "dificuldade": "alta",
        "pergunta": "Uma secretaria de educação definiu cinco orientações para suas escolas: I. Educação Infantil com interações e brincadeiras e avaliação sem promoção; II. Ensino Fundamental com avaliação processual e inclusão prevista no PPP; III. EJA organizada segundo as trajetórias de jovens, adultos e idosos e com garantia de inclusão ao público da Educação Especial; IV. AEE articulado à classe comum, sem substituí-la; V. adoção de um único método, tempo e instrumento avaliativo para todos, a fim de garantir igualdade. À luz das Diretrizes Nacionais, está correto o que se afirma em",
        "alternativas": [
            "I e II, apenas.",
            "II, III e V, apenas.",
            "I, III e IV, apenas.",
            "I, II, IV e V, apenas.",
            "I, II, III e IV, apenas."
        ],
        "correta": 4,
        "feedbackAcerto": "Você identificou a única orientação incompatível: a V transforma igualdade em padronização. As diretrizes inclusivas valorizam equidade, diversidade, flexibilização e diferentes formas de acesso, participação e demonstração da aprendizagem.",
        "feedbackErro": "As afirmações I a IV reproduzem princípios das diretrizes de suas respectivas etapas/modalidades. O erro está em exigir meios idênticos para todos, mesmo quando isso mantém barreiras.",
        "analiseAlternativas": [
            "Incorreta. III e IV também estão corretas.",
            "Incorreta. V está errada e I também está correta.",
            "Incorreta. II também está correta.",
            "Incorreta. V está errada e III está correta.",
            "Correta. I, II, III e IV são compatíveis; apenas V contraria a lógica inclusiva."
        ],
        "dicaBanca": "Nas questões I/II/III/IV/V da FGV, julgue cada item separadamente antes de olhar as combinações.",
        "pegadinha": "Igualdade de direitos não exige instrumentos idênticos; equidade remove barreiras.",
        "memorizar2026": "Diretrizes integradas: respeitar identidade de cada etapa + garantir inclusão, continuidade e equidade.",
        "fonte": "Resoluções CNE/CEB nº 5/2009, nº 7/2010, nº 3/2025, nº 2/2001 e nº 4/2009; Resolução CNE/CEB nº 1/2024.",
        "atualizacao2026": "Banco revisado para 2026 com inclusão das Diretrizes de Qualidade e Equidade da Educação Infantil (2024) e das novas Diretrizes da EJA (2025)."
    }
];

    window.seducEducacaoEspecialDiretrizes2026 = banco;
})();
