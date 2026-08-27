// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// DEVERES DO SERVIDOR — LEI Nº 8.112/1990, ART. 116
// Banco revisado — padrão Instituto Ágata
// 50 questões únicas + feedbacks específicos + sorteio aleatório
// Revisão: 2026
// ============================================================

const deveresServidor = [
    {
        "pergunta": "Um servidor executa suas tarefas com atenção, cuidado e compromisso, evitando retrabalho. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "observar as normas legais e regulamentares",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "ser assíduo e pontual ao serviço",
            "tratar as pessoas com urbanidade",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de exercer com zelo e dedicação as atribuições do cargo, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de exercer com zelo e dedicação as atribuições do cargo. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de exercer com zelo e dedicação as atribuições do cargo. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Ao perceber falha recorrente em uma rotina sob sua responsabilidade, o servidor busca corrigi-la e melhorar a execução. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser assíduo e pontual ao serviço",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "exercer com zelo e dedicação as atribuições do cargo",
            "tratar as pessoas com urbanidade",
            "observar as normas legais e regulamentares"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de exercer com zelo e dedicação as atribuições do cargo, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de exercer com zelo e dedicação as atribuições do cargo. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de exercer com zelo e dedicação as atribuições do cargo. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor recebe tarefa própria do cargo e a realiza com cuidado, mesmo sem supervisão constante. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "exercer com zelo e dedicação as atribuições do cargo",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "ser assíduo e pontual ao serviço",
            "tratar as pessoas com urbanidade",
            "observar as normas legais e regulamentares"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de exercer com zelo e dedicação as atribuições do cargo, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de exercer com zelo e dedicação as atribuições do cargo. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de exercer com zelo e dedicação as atribuições do cargo. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Diante de grande demanda, o servidor organiza o serviço sem abandonar a qualidade exigida. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "observar as normas legais e regulamentares",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "ser assíduo e pontual ao serviço",
            "tratar as pessoas com urbanidade",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de exercer com zelo e dedicação as atribuições do cargo, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de exercer com zelo e dedicação as atribuições do cargo. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de exercer com zelo e dedicação as atribuições do cargo. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Mesmo discordando de decisão administrativa legal, o servidor preserva os interesses institucionais e atua pelos canais adequados. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "observar as normas legais e regulamentares",
            "manter conduta compatível com a moralidade administrativa",
            "ser leal às instituições a que servir",
            "tratar as pessoas com urbanidade",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de ser leal às instituições a que servir, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de ser leal às instituições a que servir. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de ser leal às instituições a que servir. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor evita usar informações internas para prejudicar injustificadamente o órgão em que trabalha. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "exercer com zelo e dedicação as atribuições do cargo",
            "manter conduta compatível com a moralidade administrativa",
            "observar as normas legais e regulamentares",
            "tratar as pessoas com urbanidade",
            "ser leal às instituições a que servir"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de ser leal às instituições a que servir, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de ser leal às instituições a que servir. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de ser leal às instituições a que servir. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Em conflito pessoal com colega, o servidor não transforma a divergência em atuação contra a instituição. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser leal às instituições a que servir",
            "manter conduta compatível com a moralidade administrativa",
            "observar as normas legais e regulamentares",
            "tratar as pessoas com urbanidade",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de ser leal às instituições a que servir, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de ser leal às instituições a que servir. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de ser leal às instituições a que servir. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Uma rotina antiga contraria norma atualmente vigente. O servidor deve adequar sua atuação à regra válida. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "observar as normas legais e regulamentares",
            "manter conduta compatível com a moralidade administrativa",
            "ser leal às instituições a que servir",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 1,
        "explicacao": "O caso concretiza o dever de observar as normas legais e regulamentares, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de observar as normas legais e regulamentares. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de observar as normas legais e regulamentares. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor toma conhecimento de regulamento novo relacionado às suas atribuições e passa a observá-lo. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "exercer com zelo e dedicação as atribuições do cargo",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "manter conduta compatível com a moralidade administrativa",
            "ser leal às instituições a que servir",
            "observar as normas legais e regulamentares"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de observar as normas legais e regulamentares, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de observar as normas legais e regulamentares. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de observar as normas legais e regulamentares. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Uma prática costumeira da repartição não encontra respaldo na norma. O servidor deve observar a disciplina legal e regulamentar. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "observar as normas legais e regulamentares",
            "manter conduta compatível com a moralidade administrativa",
            "ser leal às instituições a que servir",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 1,
        "explicacao": "O caso concretiza o dever de observar as normas legais e regulamentares, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de observar as normas legais e regulamentares. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de observar as normas legais e regulamentares. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Ao executar procedimento administrativo, o servidor confere a norma aplicável antes de agir. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "manter conduta compatível com a moralidade administrativa",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "observar as normas legais e regulamentares",
            "ser leal às instituições a que servir",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de observar as normas legais e regulamentares, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de observar as normas legais e regulamentares. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de observar as normas legais e regulamentares. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "A chefia determina providência regular e compatível com o cargo. O servidor deve cumpri-la. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "representar contra ilegalidade, omissão ou abuso de poder",
            "observar as normas legais e regulamentares",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "ser leal às instituições a que servir",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de cumprir as ordens superiores, exceto quando manifestamente ilegais, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de cumprir as ordens superiores, exceto quando manifestamente ilegais. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de cumprir as ordens superiores, exceto quando manifestamente ilegais. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "A chefia ordena ato claramente contrário à lei. O dever de obediência não exige seu cumprimento. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "exercer com zelo e dedicação as atribuições do cargo",
            "observar as normas legais e regulamentares",
            "representar contra ilegalidade, omissão ou abuso de poder",
            "ser leal às instituições a que servir",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de cumprir as ordens superiores, exceto quando manifestamente ilegais, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de cumprir as ordens superiores, exceto quando manifestamente ilegais. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de cumprir as ordens superiores, exceto quando manifestamente ilegais. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor recebe ordem de que discorda por preferência pessoal, mas que é legal. A mera discordância não autoriza descumpri-la. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "representar contra ilegalidade, omissão ou abuso de poder",
            "observar as normas legais e regulamentares",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "ser leal às instituições a que servir",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de cumprir as ordens superiores, exceto quando manifestamente ilegais, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de cumprir as ordens superiores, exceto quando manifestamente ilegais. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de cumprir as ordens superiores, exceto quando manifestamente ilegais. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Diante de ordem manifestamente ilegal, o servidor não deve tratá-la como comando obrigatório. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser leal às instituições a que servir",
            "observar as normas legais e regulamentares",
            "representar contra ilegalidade, omissão ou abuso de poder",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 3,
        "explicacao": "O caso concretiza o dever de cumprir as ordens superiores, exceto quando manifestamente ilegais, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de cumprir as ordens superiores, exceto quando manifestamente ilegais. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de cumprir as ordens superiores, exceto quando manifestamente ilegais. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Um cidadão solicita informação pública disponível no setor. O servidor deve atendê-lo com presteza. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "guardar sigilo sobre assunto da repartição",
            "tratar as pessoas com urbanidade",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "atender com presteza à expedição de certidões requeridas para defesa de direito ou esclarecimento de situação de interesse pessoal",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O usuário pede informação protegida por sigilo. O dever de presteza não autoriza sua divulgação. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "guardar sigilo sobre assunto da repartição",
            "tratar as pessoas com urbanidade",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "atender com presteza à expedição de certidões requeridas para defesa de direito ou esclarecimento de situação de interesse pessoal",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Há fila de atendimento e um cidadão solicita orientação dentro das atribuições do setor. O servidor deve prestar o atendimento devido. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "atender com presteza à expedição de certidões requeridas para defesa de direito ou esclarecimento de situação de interesse pessoal",
            "tratar as pessoas com urbanidade",
            "guardar sigilo sobre assunto da repartição",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 3,
        "explicacao": "O caso concretiza o dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "No atendimento ao público, rapidez não autoriza revelar informação legalmente protegida. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "guardar sigilo sobre assunto da repartição",
            "tratar as pessoas com urbanidade",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "atender com presteza à expedição de certidões requeridas para defesa de direito ou esclarecimento de situação de interesse pessoal",
            "exercer com zelo e dedicação as atribuições do cargo"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de atender com presteza ao público, ressalvadas as informações protegidas por sigilo. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Uma pessoa requer certidão para defesa de direito, observados os requisitos aplicáveis. O servidor deve dar andamento com presteza. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "tratar com urbanidade as pessoas durante o exercício das atribuições do cargo",
            "atender com presteza ao público em geral, preservando as informações legalmente protegidas por sigilo",
            "atender com presteza às requisições regularmente apresentadas para a defesa da Fazenda Pública",
            "atender com presteza à expedição de certidões para defesa de direito ou esclarecimento de interesse pessoal",
            "observar as normas legais e regulamentares aplicáveis ao exercício das atribuições do cargo"
        ],
        "correta": 3,
        "explicacao": "O art. 116, V, 'b', prevê o atendimento com presteza à expedição de certidões requeridas para defesa de direito ou esclarecimento de situações de interesse pessoal.",
        "feedbackAcerto": "Correto. O enunciado trata especificamente da expedição de certidões para defesa de direito ou esclarecimento de interesse pessoal.",
        "feedbackErro": "Atenção ao objeto do pedido: trata-se de certidão para defesa de direito ou esclarecimento de interesse pessoal, hipótese expressa no art. 116, V, 'b'.",
        "dicaBanca": "Diferencie as três hipóteses do dever de atender com presteza: público em geral, certidões e requisições para defesa da Fazenda Pública."
    },
    {
        "pergunta": "Pedido regular de certidão busca esclarecer situação de interesse pessoal. O servidor não deve criar demora injustificada. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "atender com presteza ao público em geral, preservando as informações legalmente protegidas por sigilo",
            "atender com presteza à expedição de certidões para defesa de direito ou esclarecimento de interesse pessoal",
            "atender com presteza às requisições regularmente apresentadas para a defesa da Fazenda Pública",
            "tratar com urbanidade as pessoas durante o exercício das atribuições do cargo",
            "observar as normas legais e regulamentares aplicáveis ao exercício das atribuições do cargo"
        ],
        "correta": 1,
        "explicacao": "O art. 116, V, 'b', prevê o atendimento com presteza à expedição de certidões requeridas para defesa de direito ou esclarecimento de situações de interesse pessoal.",
        "feedbackAcerto": "Correto. O enunciado trata especificamente da expedição de certidões para defesa de direito ou esclarecimento de interesse pessoal.",
        "feedbackErro": "Atenção ao objeto do pedido: trata-se de certidão para defesa de direito ou esclarecimento de interesse pessoal, hipótese expressa no art. 116, V, 'b'.",
        "dicaBanca": "Diferencie as três hipóteses do dever de atender com presteza: público em geral, certidões e requisições para defesa da Fazenda Pública."
    },
    {
        "pergunta": "A expedição de certidão para defesa de direito integra expressamente os deveres de atendimento com presteza. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "atender com presteza ao público em geral, preservando as informações legalmente protegidas por sigilo",
            "atender com presteza à expedição de certidões para defesa de direito ou esclarecimento de interesse pessoal",
            "atender com presteza às requisições regularmente apresentadas para a defesa da Fazenda Pública",
            "tratar com urbanidade as pessoas durante o exercício das atribuições do cargo",
            "observar as normas legais e regulamentares aplicáveis ao exercício das atribuições do cargo"
        ],
        "correta": 1,
        "explicacao": "O art. 116, V, 'b', prevê o atendimento com presteza à expedição de certidões requeridas para defesa de direito ou esclarecimento de situações de interesse pessoal.",
        "feedbackAcerto": "Correto. O enunciado trata especificamente da expedição de certidões para defesa de direito ou esclarecimento de interesse pessoal.",
        "feedbackErro": "Atenção ao objeto do pedido: trata-se de certidão para defesa de direito ou esclarecimento de interesse pessoal, hipótese expressa no art. 116, V, 'b'.",
        "dicaBanca": "Diferencie as três hipóteses do dever de atender com presteza: público em geral, certidões e requisições para defesa da Fazenda Pública."
    },
    {
        "pergunta": "Chega requisição necessária à defesa da Fazenda Pública. O servidor deve atendê-la com presteza. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "atender com presteza à expedição de certidões requeridas para defesa de direito ou esclarecimento de situação de interesse pessoal",
            "atender com presteza às requisições para a defesa da Fazenda Pública",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "observar as normas legais e regulamentares"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de atender com presteza às requisições para a defesa da Fazenda Pública, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de atender com presteza às requisições para a defesa da Fazenda Pública. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de atender com presteza às requisições para a defesa da Fazenda Pública. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O setor recebe solicitação formal relacionada à defesa da Fazenda Pública. A demora injustificada contraria dever funcional. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "atender com presteza às requisições para a defesa da Fazenda Pública",
            "atender com presteza à expedição de certidões requeridas para defesa de direito ou esclarecimento de situação de interesse pessoal",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "observar as normas legais e regulamentares"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de atender com presteza às requisições para a defesa da Fazenda Pública, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de atender com presteza às requisições para a defesa da Fazenda Pública. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de atender com presteza às requisições para a defesa da Fazenda Pública. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor toma conhecimento, em razão do cargo, de possível irregularidade praticada no setor. Deve levá-la à autoridade competente. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser leal às instituições a que servir",
            "representar contra ilegalidade, omissão ou abuso de poder",
            "guardar sigilo sobre assunto da repartição",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "observar as normas legais e regulamentares"
        ],
        "correta": 3,
        "explicacao": "O caso concretiza o dever de levar irregularidades conhecidas em razão do cargo à autoridade competente, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de levar irregularidades conhecidas em razão do cargo à autoridade competente. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de levar irregularidades conhecidas em razão do cargo à autoridade competente. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Há suspeita de envolvimento da autoridade superior na irregularidade conhecida pelo servidor. A comunicação pode ser feita a outra autoridade competente para apuração. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "representar contra ilegalidade, omissão ou abuso de poder",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "guardar sigilo sobre assunto da repartição",
            "ser leal às instituições a que servir",
            "observar as normas legais e regulamentares"
        ],
        "correta": 1,
        "explicacao": "O caso concretiza o dever de levar irregularidades conhecidas em razão do cargo à autoridade competente, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de levar irregularidades conhecidas em razão do cargo à autoridade competente. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de levar irregularidades conhecidas em razão do cargo à autoridade competente. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor presencia possível irregularidade funcional e decide ocultá-la para evitar conflito. Essa postura contraria dever expresso. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "representar contra ilegalidade, omissão ou abuso de poder",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "guardar sigilo sobre assunto da repartição",
            "ser leal às instituições a que servir",
            "observar as normas legais e regulamentares"
        ],
        "correta": 1,
        "explicacao": "O caso concretiza o dever de levar irregularidades conhecidas em razão do cargo à autoridade competente, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de levar irregularidades conhecidas em razão do cargo à autoridade competente. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de levar irregularidades conhecidas em razão do cargo à autoridade competente. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Ao comunicar irregularidade conhecida em razão do cargo, o servidor deve utilizar o fluxo competente, e não exposição informal. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "representar contra ilegalidade, omissão ou abuso de poder",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "guardar sigilo sobre assunto da repartição",
            "ser leal às instituições a que servir",
            "observar as normas legais e regulamentares"
        ],
        "correta": 1,
        "explicacao": "O caso concretiza o dever de levar irregularidades conhecidas em razão do cargo à autoridade competente, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de levar irregularidades conhecidas em razão do cargo à autoridade competente. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de levar irregularidades conhecidas em razão do cargo à autoridade competente. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor utiliza materiais públicos com cuidado e evita desperdícios desnecessários. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "zelar pela economia do material e pela conservação do patrimônio público",
            "exercer com zelo e dedicação as atribuições do cargo",
            "manter conduta compatível com a moralidade administrativa",
            "ser assíduo e pontual ao serviço",
            "observar as normas legais e regulamentares"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de zelar pela economia do material e pela conservação do patrimônio público, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de zelar pela economia do material e pela conservação do patrimônio público. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de zelar pela economia do material e pela conservação do patrimônio público. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Ao notar equipamento público sendo danificado, o servidor adota providência compatível para sua conservação. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser assíduo e pontual ao serviço",
            "exercer com zelo e dedicação as atribuições do cargo",
            "manter conduta compatível com a moralidade administrativa",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "observar as normas legais e regulamentares"
        ],
        "correta": 3,
        "explicacao": "O caso concretiza o dever de zelar pela economia do material e pela conservação do patrimônio público, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de zelar pela economia do material e pela conservação do patrimônio público. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de zelar pela economia do material e pela conservação do patrimônio público. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Imprimir documentos sem necessidade e desperdiçar material de expediente contraria dever de economia. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser assíduo e pontual ao serviço",
            "exercer com zelo e dedicação as atribuições do cargo",
            "manter conduta compatível com a moralidade administrativa",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "observar as normas legais e regulamentares"
        ],
        "correta": 3,
        "explicacao": "O caso concretiza o dever de zelar pela economia do material e pela conservação do patrimônio público, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de zelar pela economia do material e pela conservação do patrimônio público. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de zelar pela economia do material e pela conservação do patrimônio público. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Conservar bens e materiais públicos é responsabilidade funcional, ainda que o servidor não seja do setor de patrimônio. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "observar as normas legais e regulamentares",
            "exercer com zelo e dedicação as atribuições do cargo",
            "manter conduta compatível com a moralidade administrativa",
            "ser assíduo e pontual ao serviço",
            "zelar pela economia do material e pela conservação do patrimônio público"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de zelar pela economia do material e pela conservação do patrimônio público, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de zelar pela economia do material e pela conservação do patrimônio público. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de zelar pela economia do material e pela conservação do patrimônio público. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor conhece informação interna protegida em razão do trabalho. Deve preservar o sigilo aplicável. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser leal às instituições a que servir",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "manter conduta compatível com a moralidade administrativa",
            "guardar sigilo sobre assunto da repartição"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de guardar sigilo sobre assunto da repartição, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de guardar sigilo sobre assunto da repartição. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de guardar sigilo sobre assunto da repartição. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Durante conversa fora da repartição, o servidor evita revelar assunto funcional submetido a sigilo. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser leal às instituições a que servir",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "manter conduta compatível com a moralidade administrativa",
            "guardar sigilo sobre assunto da repartição"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de guardar sigilo sobre assunto da repartição, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de guardar sigilo sobre assunto da repartição. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de guardar sigilo sobre assunto da repartição. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O dever de sigilo não autoriza esconder irregularidade que deva ser comunicada à autoridade competente. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "guardar sigilo sobre assunto da repartição",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "manter conduta compatível com a moralidade administrativa",
            "ser leal às instituições a que servir"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de guardar sigilo sobre assunto da repartição, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de guardar sigilo sobre assunto da repartição. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de guardar sigilo sobre assunto da repartição. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Acesso funcional a assunto sigiloso não significa liberdade para compartilhá-lo com colegas sem necessidade. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "guardar sigilo sobre assunto da repartição",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "manter conduta compatível com a moralidade administrativa",
            "ser leal às instituições a que servir"
        ],
        "correta": 1,
        "explicacao": "O caso concretiza o dever de guardar sigilo sobre assunto da repartição, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de guardar sigilo sobre assunto da repartição. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de guardar sigilo sobre assunto da repartição. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor recusa vantagem indevida relacionada às suas atribuições e mantém postura compatível com a moralidade administrativa. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "zelar pela economia do material e pela conservação do patrimônio público",
            "ser leal às instituições a que servir",
            "tratar as pessoas com urbanidade",
            "observar as normas legais e regulamentares",
            "manter conduta compatível com a moralidade administrativa"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de manter conduta compatível com a moralidade administrativa, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de manter conduta compatível com a moralidade administrativa. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de manter conduta compatível com a moralidade administrativa. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Mesmo quando determinada conduta não gera vantagem financeira, o servidor deve considerar sua compatibilidade com a moralidade administrativa. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "tratar as pessoas com urbanidade",
            "ser leal às instituições a que servir",
            "manter conduta compatível com a moralidade administrativa",
            "observar as normas legais e regulamentares",
            "zelar pela economia do material e pela conservação do patrimônio público"
        ],
        "correta": 2,
        "explicacao": "O caso concretiza o dever de manter conduta compatível com a moralidade administrativa, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de manter conduta compatível com a moralidade administrativa. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de manter conduta compatível com a moralidade administrativa. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Usar a função para favorecer interesse pessoal incompatível com o serviço contraria a conduta esperada do servidor. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "manter conduta compatível com a moralidade administrativa",
            "ser leal às instituições a que servir",
            "tratar as pessoas com urbanidade",
            "observar as normas legais e regulamentares",
            "zelar pela economia do material e pela conservação do patrimônio público"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de manter conduta compatível com a moralidade administrativa, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de manter conduta compatível com a moralidade administrativa. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de manter conduta compatível com a moralidade administrativa. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Chegar habitualmente após o início do expediente sem justificativa contraria dever funcional. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser assíduo e pontual ao serviço",
            "exercer com zelo e dedicação as atribuições do cargo",
            "tratar as pessoas com urbanidade",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "observar as normas legais e regulamentares"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de ser assíduo e pontual ao serviço, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de ser assíduo e pontual ao serviço. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de ser assíduo e pontual ao serviço. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor comparece regularmente ao trabalho e observa os horários estabelecidos. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "exercer com zelo e dedicação as atribuições do cargo",
            "ser assíduo e pontual ao serviço",
            "tratar as pessoas com urbanidade",
            "zelar pela economia do material e pela conservação do patrimônio público",
            "observar as normas legais e regulamentares"
        ],
        "correta": 1,
        "explicacao": "O caso concretiza o dever de ser assíduo e pontual ao serviço, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de ser assíduo e pontual ao serviço. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de ser assíduo e pontual ao serviço. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Assiduidade relaciona-se à presença regular; pontualidade, ao cumprimento dos horários de serviço. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "zelar pela economia do material e pela conservação do patrimônio público",
            "exercer com zelo e dedicação as atribuições do cargo",
            "tratar as pessoas com urbanidade",
            "ser assíduo e pontual ao serviço",
            "observar as normas legais e regulamentares"
        ],
        "correta": 3,
        "explicacao": "O caso concretiza o dever de ser assíduo e pontual ao serviço, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de ser assíduo e pontual ao serviço. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de ser assíduo e pontual ao serviço. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "No atendimento a cidadão exaltado, o servidor deve manter tratamento respeitoso e profissional. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "tratar as pessoas com urbanidade",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "ser leal às instituições a que servir",
            "manter conduta compatível com a moralidade administrativa",
            "ser assíduo e pontual ao serviço"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de tratar as pessoas com urbanidade, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de tratar as pessoas com urbanidade. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de tratar as pessoas com urbanidade. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Urbanidade exige respeito no trato com usuários, colegas e demais pessoas. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "tratar as pessoas com urbanidade",
            "ser leal às instituições a que servir",
            "manter conduta compatível com a moralidade administrativa",
            "ser assíduo e pontual ao serviço"
        ],
        "correta": 1,
        "explicacao": "O caso concretiza o dever de tratar as pessoas com urbanidade, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de tratar as pessoas com urbanidade. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de tratar as pessoas com urbanidade. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Discordância funcional não autoriza tratamento ofensivo entre servidores. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "ser assíduo e pontual ao serviço",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "ser leal às instituições a que servir",
            "manter conduta compatível com a moralidade administrativa",
            "tratar as pessoas com urbanidade"
        ],
        "correta": 4,
        "explicacao": "O caso concretiza o dever de tratar as pessoas com urbanidade, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de tratar as pessoas com urbanidade. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de tratar as pessoas com urbanidade. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor pode ser firme no cumprimento da norma sem abandonar a urbanidade. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "tratar as pessoas com urbanidade",
            "atender com presteza ao público, ressalvadas as informações protegidas por sigilo",
            "ser leal às instituições a que servir",
            "manter conduta compatível com a moralidade administrativa",
            "ser assíduo e pontual ao serviço"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de tratar as pessoas com urbanidade, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de tratar as pessoas com urbanidade. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de tratar as pessoas com urbanidade. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "Ao identificar abuso de poder, o servidor deve representar pelos meios funcionais adequados. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "representar contra ilegalidade, omissão ou abuso de poder",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "observar as normas legais e regulamentares",
            "ser leal às instituições a que servir"
        ],
        "correta": 0,
        "explicacao": "O caso concretiza o dever de representar contra ilegalidade, omissão ou abuso de poder, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de representar contra ilegalidade, omissão ou abuso de poder. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de representar contra ilegalidade, omissão ou abuso de poder. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "A representação contra ilegalidade, omissão ou abuso de poder constitui dever do servidor. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "observar as normas legais e regulamentares",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "representar contra ilegalidade, omissão ou abuso de poder",
            "ser leal às instituições a que servir"
        ],
        "correta": 3,
        "explicacao": "O caso concretiza o dever de representar contra ilegalidade, omissão ou abuso de poder, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de representar contra ilegalidade, omissão ou abuso de poder. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de representar contra ilegalidade, omissão ou abuso de poder. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "A representação prevista no art. 116 segue a via hierárquica e é apreciada pela autoridade superior àquela contra a qual é formulada. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "observar as normas legais e regulamentares",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "representar contra ilegalidade, omissão ou abuso de poder",
            "ser leal às instituições a que servir"
        ],
        "correta": 3,
        "explicacao": "O caso concretiza o dever de representar contra ilegalidade, omissão ou abuso de poder, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de representar contra ilegalidade, omissão ou abuso de poder. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de representar contra ilegalidade, omissão ou abuso de poder. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    },
    {
        "pergunta": "O servidor não deve confundir representação funcional com divulgação pública informal da acusação. Assinale o dever funcional diretamente relacionado à situação:",
        "alternativas": [
            "observar as normas legais e regulamentares",
            "levar irregularidades conhecidas em razão do cargo à autoridade competente",
            "cumprir as ordens superiores, exceto quando manifestamente ilegais",
            "representar contra ilegalidade, omissão ou abuso de poder",
            "ser leal às instituições a que servir"
        ],
        "correta": 3,
        "explicacao": "O caso concretiza o dever de representar contra ilegalidade, omissão ou abuso de poder, previsto no art. 116 da Lei nº 8.112/1990.",
        "feedbackAcerto": "Correto. A situação descrita corresponde ao dever de representar contra ilegalidade, omissão ou abuso de poder. Observe a ação concreta descrita no enunciado.",
        "feedbackErro": "Atenção: o elemento decisivo do caso é o dever de representar contra ilegalidade, omissão ou abuso de poder. Os demais itens também podem ser deveres do servidor, mas não são o que o enunciado exemplifica diretamente. Compare o verbo central da situação com a redação legal.",
        "dicaBanca": "A Ágata pode usar deveres todos verdadeiros como alternativas; identifique qual deles corresponde exatamente à situação narrada. Foque no núcleo do comportamento apresentado."
    }
];

if (typeof window !== 'undefined') { window.deveresServidor = deveresServidor; }
