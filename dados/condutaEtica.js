// ============================================================
// FAROL DO SABER — BARCARENA — PROFISSIONAL DE APOIO ESCOLAR
// CONDUTA ÉTICA — BANCO REVISADO 2026
// Base principal: LBI, LGPD e Decreto nº 12.686/2025,
// com alterações do Decreto nº 12.773/2025.
// Foco: situações práticas no padrão Instituto Ágata.
// 50 questões únicas + feedbacks específicos.
// ============================================================

const condutaEtica = [
    {
        "pergunta": "Durante a higiene de um estudante que necessita de apoio, a conduta ética mais adequada é:",
        "alternativas": [
            "padronizar o procedimento para todos os estudantes, independentemente de suas necessidades.",
            "realizar o procedimento rapidamente, mesmo sem explicar, para reduzir o tempo fora da atividade.",
            "pedir a presença de colegas para facilitar o procedimento sempre que houver resistência.",
            "comentar as dificuldades observadas com outros servidores para obter sugestões informais.",
            "preservar a privacidade, explicar o que será feito e respeitar o corpo e as escolhas possíveis do estudante."
        ],
        "correta": 4,
        "explicacao": "O apoio em higiene deve preservar dignidade, privacidade, corpo, tempo e escolhas do estudante.",
        "feedbackAcerto": "Você identificou que cuidado pessoal não elimina autonomia, privacidade nem respeito ao corpo.",
        "feedbackErro": "O cuidado não pode ser tratado como procedimento meramente operacional. Exposição, pressa e padronização podem violar dignidade e privacidade.",
        "dicaBanca": "Em situações de cuidado, procure a alternativa que una segurança, respeito e autonomia."
    },
    {
        "pergunta": "Um profissional de apoio recebe informação sobre o diagnóstico de um estudante. Eticamente, deve:",
        "alternativas": [
            "comentar com outros profissionais da escola, ainda que não participem do atendimento.",
            "informar a turma para que os colegas compreendam melhor determinados comportamentos.",
            "compartilhá-la apenas com quem necessite da informação para finalidade educacional legítima.",
            "divulgar aos responsáveis de outros estudantes quando houver dúvidas sobre convivência.",
            "usar o diagnóstico como principal explicação para qualquer dificuldade apresentada."
        ],
        "correta": 2,
        "explicacao": "Informações de saúde são dados pessoais sensíveis e exigem tratamento restrito à finalidade e à necessidade.",
        "feedbackAcerto": "Correto. O acesso funcional a uma informação não autoriza sua circulação indiscriminada.",
        "feedbackErro": "O diagnóstico não se torna público por estar no ambiente escolar. Compartilhamento exige necessidade e finalidade.",
        "dicaBanca": "Diagnóstico não é assunto de corredor, grupo informal ou conversa sem finalidade."
    },
    {
        "pergunta": "Ao auxiliar um estudante na alimentação, o profissional percebe que ele consegue realizar parte da tarefa sozinho. A conduta ética é:",
        "alternativas": [
            "oferecer apenas a ajuda necessária, favorecendo a autonomia e respeitando o ritmo do estudante.",
            "executar toda a tarefa para evitar demora e manter a rotina da turma.",
            "retirar o apoio por completo para estimular independência mais rapidamente.",
            "comparar seu desempenho ao de outros estudantes para incentivar maior esforço.",
            "pedir à família que assuma o auxílio durante o período escolar."
        ],
        "correta": 0,
        "explicacao": "O apoio deve remover barreiras sem substituir aquilo que o estudante consegue realizar.",
        "feedbackAcerto": "Correto. A ajuda proporcional preserva autonomia e participação.",
        "feedbackErro": "Fazer tudo pelo estudante pode gerar dependência; retirar todo o suporte também pode criar barreira.",
        "dicaBanca": "Evite os extremos: superproteção e abandono do apoio."
    },
    {
        "pergunta": "Em uma atividade, o estudante demora para responder por meio de comunicação alternativa. O profissional deve:",
        "alternativas": [
            "retirar o estudante da atividade quando a comunicação exigir mais tempo.",
            "responder por ele para impedir atraso no andamento da atividade.",
            "pedir ao professor que faça perguntas apenas de resposta rápida.",
            "substituir o recurso por gestos escolhidos pelo próprio profissional.",
            "aguardar o tempo de resposta e facilitar o recurso quando necessário, sem responder pelo estudante."
        ],
        "correta": 4,
        "explicacao": "Reconhecer diferentes formas de expressão implica dar oportunidade real de comunicação.",
        "feedbackAcerto": "Correto. Respeitar o tempo de resposta protege a autoria e a livre expressão.",
        "feedbackErro": "Responder pelo estudante pode parecer ajuda, mas retira sua voz e participação.",
        "dicaBanca": "A banca pode apresentar 'agilidade' como justificativa para uma conduta que reduz autonomia."
    },
    {
        "pergunta": "O profissional presencia colegas fazendo comentários depreciativos sobre um estudante com deficiência. A conduta compatível com a ética profissional é:",
        "alternativas": [
            "participar da conversa apenas para explicar as limitações decorrentes do diagnóstico.",
            "permanecer em silêncio, pois conflitos entre colegas não fazem parte de suas atribuições.",
            "não aderir aos comentários e utilizar os canais institucionais adequados para proteger o estudante.",
            "informar o estudante sobre tudo o que foi dito para que ele decida como reagir.",
            "publicar o ocorrido em grupo externo para constranger os responsáveis."
        ],
        "correta": 2,
        "explicacao": "Respeito à dignidade e não discriminação exigem postura ativa e uso responsável dos canais institucionais.",
        "feedbackAcerto": "Correto. A ética não permite normalizar humilhação ou discriminação.",
        "feedbackErro": "Silêncio conivente, exposição pública e reprodução de comentários não protegem o estudante nem resolvem institucionalmente a situação.",
        "dicaBanca": "Entre omissão e exposição pública, procure a via institucional de proteção."
    },
    {
        "pergunta": "A família pede ao profissional de apoio detalhes sobre o desempenho pedagógico e a nota do estudante. Ele deve:",
        "alternativas": [
            "entregar suas anotações pessoais como documento oficial de avaliação.",
            "atribuir uma nota estimada com base no acompanhamento diário.",
            "explicar quais conteúdos o estudante deve dominar e definir nova avaliação.",
            "recusar qualquer conversa com a família, pois contato familiar é proibido.",
            "acolher a solicitação e encaminhar a questão ao professor ou à equipe responsável pela avaliação."
        ],
        "correta": 4,
        "explicacao": "O apoio pode dialogar com a família, mas não assume atribuições pedagógicas de avaliação.",
        "feedbackAcerto": "Correto. Acolhimento não significa ultrapassar os limites da função.",
        "feedbackErro": "Acompanhar diariamente não transforma o profissional de apoio em responsável pela nota ou avaliação pedagógica.",
        "dicaBanca": "Ética também envolve reconhecer os limites da própria competência."
    },
    {
        "pergunta": "Um estudante revela ao profissional situação que pode indicar risco à sua integridade. A resposta mais adequada é:",
        "alternativas": [
            "acolher sem prometer segredo absoluto e acionar o fluxo institucional de proteção.",
            "prometer confidencialidade total e manter a informação apenas entre ambos.",
            "investigar pessoalmente os fatos antes de comunicar qualquer pessoa.",
            "relatar o caso a outros estudantes para verificar se conhecem situação semelhante.",
            "confrontar imediatamente a pessoa apontada antes de informar a equipe."
        ],
        "correta": 0,
        "explicacao": "Situações de possível risco exigem proteção e encaminhamento institucional, não investigação improvisada.",
        "feedbackAcerto": "Correto. Acolher e encaminhar protege o estudante sem assumir funções investigativas.",
        "feedbackErro": "Sigilo profissional não significa esconder uma situação que exige proteção; tampouco autoriza investigação por conta própria.",
        "dicaBanca": "Quando há risco, pense em proteção + fluxo institucional."
    },
    {
        "pergunta": "Ao registrar uma ocorrência envolvendo estudante, o profissional deve:",
        "alternativas": [
            "registrar sua interpretação sobre a personalidade do estudante para contextualizar o fato.",
            "descrever fatos observáveis de forma objetiva, evitando rótulos e julgamentos pessoais.",
            "omitir comportamentos relevantes para preservar a imagem do estudante.",
            "usar termos informais para tornar o relato mais fácil de compreender.",
            "incluir hipóteses diagnósticas para explicar o comportamento observado."
        ],
        "correta": 1,
        "explicacao": "Registros profissionais devem distinguir fatos observados de opiniões, rótulos e diagnósticos indevidos.",
        "feedbackAcerto": "Correto. Objetividade melhora a utilidade do registro e reduz julgamentos.",
        "feedbackErro": "Um registro não deve transformar impressão pessoal em fato nem criar diagnóstico.",
        "dicaBanca": "Palavras como 'preguiçoso', 'agressivo por natureza' ou 'manipulador' são pistas de julgamento."
    },
    {
        "pergunta": "Durante uma troca de roupa, outro servidor entra no espaço sem necessidade. O profissional de apoio deve:",
        "alternativas": [
            "interromper definitivamente o apoio até que a família esteja presente.",
            "permitir a permanência porque todos os servidores estão sujeitos ao dever de sigilo.",
            "manter a porta aberta para demonstrar transparência no procedimento.",
            "pedir que o servidor permaneça como testemunha de rotina.",
            "preservar a privacidade do estudante e restringir a presença às pessoas necessárias ao atendimento."
        ],
        "correta": 4,
        "explicacao": "Privacidade exige limitar exposição e presença de terceiros ao necessário.",
        "feedbackAcerto": "Correto. Ser servidor não cria necessidade automática de acesso ao momento íntimo do estudante.",
        "feedbackErro": "Transparência administrativa não significa exposição corporal ou acesso irrestrito a situações íntimas.",
        "dicaBanca": "Publicidade e privacidade não são conceitos opostos aplicados mecanicamente."
    },
    {
        "pergunta": "Um estudante recusa determinado auxílio que não envolve risco imediato. O profissional deve, inicialmente:",
        "alternativas": [
            "impor o auxílio porque o planejamento escolar prevalece sobre qualquer escolha individual.",
            "buscar compreender a recusa e dialogar, respeitando sua autonomia dentro das condições de segurança.",
            "chamar colegas para conter o estudante e executar o procedimento.",
            "registrar a recusa como indisciplina e encerrar o atendimento.",
            "informar que perderá o apoio caso volte a recusar a orientação."
        ],
        "correta": 1,
        "explicacao": "O Decreto nº 12.686/2025 determina respeito ao corpo, ao tempo e às escolhas no apoio de higiene e alimentação.",
        "feedbackAcerto": "Correto. A primeira resposta deve considerar comunicação, autonomia e segurança.",
        "feedbackErro": "Necessidade de apoio não elimina a possibilidade de escolha. Coerção sem justificativa não é conduta ética.",
        "dicaBanca": "A palavra 'apoio' não significa poder irrestrito sobre o estudante."
    },
    {
        "pergunta": "Ao perceber que uma estratégia definida pela equipe constrange o estudante diante da turma, o apoio deve:",
        "alternativas": [
            "interromper todo apoio e criar sozinho uma nova estratégia.",
            "continuar aplicando-a sem questionar porque foi definida por profissional superior.",
            "comunicar a situação à equipe pedagógica para que a estratégia seja reavaliada.",
            "explicar à turma o motivo do constrangimento para evitar interpretações erradas.",
            "pedir à família autorização para manter a estratégia sem envolver a equipe."
        ],
        "correta": 2,
        "explicacao": "O profissional deve reportar à equipe situações em que o apoio planejado produz barreira, exposição ou constrangimento.",
        "feedbackAcerto": "Correto. Cumprir orientação não elimina o dever de comunicar efeitos inadequados.",
        "feedbackErro": "É inadequado obedecer mecanicamente a uma prática lesiva ou substituí-la unilateralmente sem articulação.",
        "dicaBanca": "Ética não é obediência cega; envolve responsabilidade profissional."
    },
    {
        "pergunta": "O profissional recebe em seu celular uma foto do estudante usada para documentar atividade escolar. A conduta mais segura é:",
        "alternativas": [
            "publicá-la se o rosto estiver parcialmente encoberto, independentemente de autorização.",
            "encaminhar a foto ao próprio grupo de contatos para manter uma cópia de segurança.",
            "seguir as regras institucionais de registro, armazenamento e compartilhamento, evitando uso pessoal da imagem.",
            "manter a imagem indefinidamente no aparelho pessoal para eventual consulta.",
            "usar a foto em perfil profissional porque foi produzida dentro da escola."
        ],
        "correta": 2,
        "explicacao": "Imagens são dados pessoais e devem ser tratadas segundo finalidade, necessidade e regras institucionais.",
        "feedbackAcerto": "Correto. Produzir uma imagem em contexto escolar não autoriza uso pessoal ou divulgação.",
        "feedbackErro": "Finalidade escolar não se converte automaticamente em autorização para redes sociais, grupos pessoais ou armazenamento indefinido.",
        "dicaBanca": "Foto de atividade escolar continua sendo dado pessoal."
    },
    {
        "pergunta": "Ao conversar sobre um estudante em corredor movimentado, o profissional deve:",
        "alternativas": [
            "divulgar apenas informações verdadeiras, pois a veracidade afasta problema ético.",
            "falar em voz baixa, pois isso torna qualquer conteúdo permitido.",
            "usar apenas o primeiro nome para poder comentar livremente o caso.",
            "continuar a conversa se os presentes também forem responsáveis por estudantes.",
            "evitar expor informações pessoais e buscar ambiente ou canal adequado quando a conversa for necessária."
        ],
        "correta": 4,
        "explicacao": "Proteção de dados depende de necessidade, finalidade e contexto, não apenas de a informação ser verdadeira.",
        "feedbackAcerto": "Correto. O ambiente e as pessoas presentes importam na proteção da informação.",
        "feedbackErro": "Falar baixo ou dizer apenas o primeiro nome não legitima exposição desnecessária.",
        "dicaBanca": "A banca pode confundir 'informação verdadeira' com 'informação livremente divulgável'."
    },
    {
        "pergunta": "Em relação ao tratamento de um estudante com deficiência, a impessoalidade exige:",
        "alternativas": [
            "evitar vínculo respeitoso para manter distância entre servidor e estudante.",
            "tratar todos de modo idêntico, recusando qualquer apoio individualizado.",
            "garantia de respeito e direitos sem favorecimentos ou discriminações indevidas.",
            "ignorar necessidades específicas para não criar tratamento diferenciado.",
            "priorizar sempre o estudante acompanhado em relação aos demais colegas."
        ],
        "correta": 2,
        "explicacao": "Impessoalidade não significa uniformidade cega; apoios necessários podem ser diferenciados para garantir participação.",
        "feedbackAcerto": "Correto. Tratar com justiça não exige negar adaptações ou apoios previstos.",
        "feedbackErro": "O erro clássico é confundir igualdade com tratamento idêntico mesmo diante de barreiras diferentes.",
        "dicaBanca": "Na inclusão, equidade e impessoalidade não se anulam."
    },
    {
        "pergunta": "O profissional é convidado pela família a receber presente de valor elevado em agradecimento pelo atendimento. A postura mais adequada é:",
        "alternativas": [
            "dividir o presente com a equipe para afastar interesse pessoal.",
            "aceitar porque o presente foi oferecido espontaneamente e após o atendimento.",
            "aceitar se prometer tratar todos os estudantes da mesma forma.",
            "seguir as normas institucionais e evitar vantagem que possa comprometer ou aparentar comprometer a imparcialidade.",
            "receber em casa para não vincular a vantagem ao ambiente escolar."
        ],
        "correta": 3,
        "explicacao": "Vantagens pessoais podem comprometer a imparcialidade ou gerar aparência de favorecimento.",
        "feedbackAcerto": "Correto. A origem afetiva do gesto não elimina a necessidade de observar integridade e regras institucionais.",
        "feedbackErro": "Mudar local, dividir o presente ou afirmar imparcialidade não elimina o conflito ético potencial.",
        "dicaBanca": "Observe situações de vantagem pessoal e aparência de favorecimento."
    },
    {
        "pergunta": "Ao perceber erro próprio em registro que pode afetar o atendimento do estudante, o profissional deve:",
        "alternativas": [
            "manter o documento porque reconhecer erro prejudica a credibilidade profissional.",
            "apagar o registro sem informar ninguém para evitar consequências.",
            "comunicar o erro e buscar sua correção conforme o procedimento institucional.",
            "atribuir a falha ao sistema quando não houver prova de autoria.",
            "criar novo registro sem indicar a necessidade de correção do anterior."
        ],
        "correta": 2,
        "explicacao": "Responsabilidade profissional envolve reconhecer falhas e corrigi-las pelos meios apropriados.",
        "feedbackAcerto": "Correto. Integridade exige transparência responsável diante do erro.",
        "feedbackErro": "Ocultar, apagar informalmente ou transferir culpa pode ampliar o problema e comprometer registros institucionais.",
        "dicaBanca": "Ética aparece também na forma como o servidor reage ao próprio erro."
    },
    {
        "pergunta": "O profissional observa que um colega utiliza apelido ofensivo para se referir a um estudante. A conduta adequada é:",
        "alternativas": [
            "considerar aceitável quando o apelido é comum entre os colegas da turma.",
            "usar o mesmo apelido se o estudante não reclamar diretamente.",
            "não reproduzir a prática e comunicar a situação pelos meios adequados quando necessário à proteção do estudante.",
            "perguntar à família se autoriza a continuidade antes de intervir.",
            "registrar o apelido como identificação informal do estudante."
        ],
        "correta": 2,
        "explicacao": "Respeito à dignidade impede naturalizar tratamento humilhante ou discriminatório.",
        "feedbackAcerto": "Correto. Ausência de reclamação não transforma uma prática ofensiva em ética.",
        "feedbackErro": "Consentimento presumido, costume do grupo ou informalidade não justificam humilhação.",
        "dicaBanca": "Urbanidade também se aplica à forma de nomear e dirigir-se ao estudante."
    },
    {
        "pergunta": "Um responsável solicita informações sobre outro estudante envolvido em conflito com seu filho. O profissional deve:",
        "alternativas": [
            "informar os dados se o responsável prometer não divulgá-los.",
            "fornecer nome, diagnóstico e histórico para demonstrar transparência.",
            "mostrar o registro completo da ocorrência para evitar versões divergentes.",
            "informar apenas o que puder ser tratado legitimamente sobre o caso, preservando dados do outro estudante.",
            "encaminhar fotografias da ocorrência para comprovar a atuação da escola."
        ],
        "correta": 3,
        "explicacao": "Direito de receber informações sobre o próprio filho não cria acesso irrestrito aos dados de terceiros.",
        "feedbackAcerto": "Correto. A escola deve prestar os esclarecimentos cabíveis sem expor outro estudante.",
        "feedbackErro": "Promessa de sigilo de um responsável não autoriza compartilhamento indevido de dados de terceiro.",
        "dicaBanca": "Conflito entre estudantes não elimina a privacidade de nenhum deles."
    },
    {
        "pergunta": "Durante atividade coletiva, o apoio percebe que sua presença constante está isolando o estudante dos colegas. Deve:",
        "alternativas": [
            "retirar o estudante do grupo e trabalhar individualmente.",
            "manter-se entre o estudante e os colegas para garantir controle da atividade.",
            "ajustar sua mediação em diálogo com a equipe para favorecer interação direta e autonomia.",
            "pedir aos colegas que conversem apenas por intermédio do profissional.",
            "reduzir toda comunicação para evitar dependência afetiva."
        ],
        "correta": 2,
        "explicacao": "O apoio deve favorecer convívio entre pares e não tornar-se barreira relacional.",
        "feedbackAcerto": "Correto. A atuação ética busca suporte suficiente sem monopolizar as interações.",
        "feedbackErro": "Proteção excessiva pode produzir isolamento e dependência, contrariando a finalidade do apoio.",
        "dicaBanca": "Às vezes o excesso de ajuda é o problema apresentado pela banca."
    },
    {
        "pergunta": "O profissional é questionado sobre assunto que ultrapassa seu conhecimento técnico. Eticamente, deve:",
        "alternativas": [
            "emitir opinião pessoal e informar que ela não possui caráter oficial.",
            "improvisar uma resposta para não demonstrar insegurança diante da família.",
            "repetir orientação recebida em outro caso, ainda que o contexto seja diferente.",
            "reconhecer o limite e buscar orientação com o profissional ou setor competente.",
            "evitar encaminhamento para não aumentar o número de profissionais envolvidos."
        ],
        "correta": 3,
        "explicacao": "Reconhecer limites de competência é parte da responsabilidade profissional.",
        "feedbackAcerto": "Correto. Encaminhar corretamente é mais ético do que improvisar uma orientação.",
        "feedbackErro": "Boa intenção não substitui competência técnica; uma informação errada pode produzir dano.",
        "dicaBanca": "Desconfie de alternativas em que o servidor 'resolve tudo sozinho'."
    },
    {
        "pergunta": "Ao utilizar tecnologia assistiva desenvolvida pelo AEE, o profissional deve:",
        "alternativas": [
            "mantê-la sob seu controle para impedir que outros estudantes a utilizem.",
            "empregá-la conforme orientação e observar se favorece participação, comunicação e autonomia.",
            "substituir o recurso quando considerar outro mais prático, sem consultar a equipe.",
            "usar o recurso apenas quando o estudante não conseguir executar a atividade de nenhuma forma.",
            "evitar seu uso em atividades coletivas para não destacar diferenças."
        ],
        "correta": 1,
        "explicacao": "O recurso auxiliar deve favorecer participação e livre expressão e ser utilizado de forma articulada.",
        "feedbackAcerto": "Correto. Tecnologia assistiva é meio de acesso, não instrumento de controle do profissional.",
        "feedbackErro": "Retirar, esconder ou trocar unilateralmente o recurso pode criar novas barreiras.",
        "dicaBanca": "O foco não é o recurso em si, mas o acesso que ele proporciona."
    },
    {
        "pergunta": "Um estudante com deficiência é excluído de passeio porque a equipe considera o apoio 'difícil de organizar'. A análise ética é:",
        "alternativas": [
            "o passeio pode ser negado sempre que exigir profissional adicional.",
            "a dificuldade organizacional deve ser enfrentada com planejamento de acessibilidade, e não usada como justificativa automática para exclusão.",
            "a exclusão é adequada se a atividade não fizer parte de avaliação formal.",
            "a família deve substituir a escola e garantir todo apoio necessário no passeio.",
            "a participação depende de o estudante conseguir realizar as atividades sem adaptação."
        ],
        "correta": 1,
        "explicacao": "A inclusão alcança atividades escolares e exige enfrentamento de barreiras de participação.",
        "feedbackAcerto": "Correto. Dificuldade logística demanda planejamento, não exclusão automática.",
        "feedbackErro": "Transformar falta de organização em condição para participação desloca a barreira da escola para o estudante.",
        "dicaBanca": "Atividade extraclasse também integra a experiência escolar."
    },
    {
        "pergunta": "Durante uma crise de sobrecarga, a prioridade ética do profissional é:",
        "alternativas": [
            "expor o comportamento à equipe para demonstrar a gravidade do episódio.",
            "exigir obediência imediata para restabelecer a disciplina da turma.",
            "proteger a segurança, reduzir estímulos quando pertinente e utilizar formas de comunicação conhecidas pelo estudante.",
            "aplicar contenção física como primeira resposta a qualquer agitação.",
            "questionar repetidamente o estudante até que explique o motivo da crise."
        ],
        "correta": 2,
        "explicacao": "Em sobrecarga, a atuação deve ser proporcional, segura, respeitosa e orientada pelas necessidades conhecidas.",
        "feedbackAcerto": "Correto. Segurança e comunicação adequada vêm antes de cobranças ou exposição.",
        "feedbackErro": "Coerção automática e excesso de estímulos podem agravar a situação e não respeitam proporcionalidade.",
        "dicaBanca": "Em situações críticas, a banca pode opor segurança proporcional a punição."
    },
    {
        "pergunta": "O profissional ouve de outro servidor uma informação sensível sobre estudante que não acompanha. Deve:",
        "alternativas": [
            "evitar disseminá-la e não buscar detalhes sem necessidade funcional.",
            "pedir o diagnóstico completo para compreender melhor o caso.",
            "repassar à própria equipe para que todos estejam informados.",
            "registrar a informação em suas anotações por precaução.",
            "confirmar a informação com a família antes de decidir se a divulga."
        ],
        "correta": 0,
        "explicacao": "O princípio da necessidade limita o acesso e a circulação de dados ao mínimo pertinente.",
        "feedbackAcerto": "Correto. Curiosidade profissional não é finalidade legítima para acessar dado sensível.",
        "feedbackErro": "Trabalhar na mesma escola não significa precisar conhecer todos os dados de todos os estudantes.",
        "dicaBanca": "Necessidade é uma palavra-chave da LGPD."
    },
    {
        "pergunta": "Em conversa com a família, o profissional discorda de uma decisão pedagógica do professor. A postura ética é:",
        "alternativas": [
            "orientar a família a formalizar reclamação antes de conversar com a equipe.",
            "informar imediatamente que o professor está errado para preservar a confiança da família.",
            "prometer que a decisão será modificada na próxima atividade.",
            "evitar desautorizar o colega diante da família e levar a divergência aos canais profissionais adequados.",
            "alterar a estratégia na prática e comunicar ao professor posteriormente."
        ],
        "correta": 3,
        "explicacao": "Divergências profissionais devem ser tratadas com respeito, lealdade institucional e foco no estudante.",
        "feedbackAcerto": "Correto. Isso não significa esconder problemas, mas discuti-los no espaço adequado.",
        "feedbackErro": "Desautorizar, prometer mudança ou agir unilateralmente prejudica a colaboração e ultrapassa atribuições.",
        "dicaBanca": "Urbanidade vale também entre profissionais."
    },
    {
        "pergunta": "Ao apoiar locomoção, o estudante pede para tentar determinado percurso com menor ajuda. Se houver condições de segurança, o profissional deve:",
        "alternativas": [
            "negar porque a existência de profissional de apoio exige assistência contínua.",
            "permitir a tentativa com suporte proporcional, favorecendo autonomia.",
            "realizar todo o deslocamento para eliminar qualquer possibilidade de demora.",
            "pedir autorização da turma antes de alterar a rotina de locomoção.",
            "condicionar a tentativa à presença de um familiar."
        ],
        "correta": 1,
        "explicacao": "O apoio deve favorecer acesso e participação sem impedir iniciativas autônomas seguras.",
        "feedbackAcerto": "Correto. Segurança e autonomia podem ser conciliadas por suporte proporcional.",
        "feedbackErro": "A presença do profissional não significa que toda ação precise ser executada por ele.",
        "dicaBanca": "Autonomia segura é melhor do que assistência automática."
    },
    {
        "pergunta": "O estudante com comunicação não oral demonstra claramente que não deseja ser fotografado. A conduta adequada é:",
        "alternativas": [
            "fotografá-lo porque a ausência de fala impede manifestação válida de vontade.",
            "respeitar sua manifestação e seguir as regras institucionais sobre imagem e consentimento.",
            "pedir a outro estudante que decida por ele.",
            "registrar a imagem e apagá-la somente se a família reclamar.",
            "considerar suficiente uma autorização genérica para qualquer uso de imagem."
        ],
        "correta": 1,
        "explicacao": "Diferentes formas de expressão devem ser reconhecidas; ausência de oralidade não significa ausência de vontade.",
        "feedbackAcerto": "Correto. A manifestação do estudante deve ser considerada e as regras de tratamento de imagem continuam aplicáveis.",
        "feedbackErro": "Comunicação não oral não torna a pessoa incapaz de expressar preferência ou recusa.",
        "dicaBanca": "A banca pode explorar preconceitos sobre capacidade comunicativa."
    },
    {
        "pergunta": "Um colega pede a senha do sistema escolar para consultar rapidamente informação necessária. O profissional deve:",
        "alternativas": [
            "fornecer a senha se o colega tiver cargo equivalente.",
            "não compartilhar credenciais pessoais e utilizar o procedimento institucional de acesso.",
            "emprestar o acesso e alterar a senha depois da consulta.",
            "digitar a senha para o colega sem revelar os caracteres.",
            "autorizar o uso se a consulta tiver finalidade pedagógica."
        ],
        "correta": 1,
        "explicacao": "Segurança da informação exige controle de acesso e responsabilização individual pelas credenciais.",
        "feedbackAcerto": "Correto. Finalidade legítima não torna aceitável compartilhar credenciais pessoais.",
        "feedbackErro": "Mesmo quando o colega precisa da informação, o acesso deve ocorrer pelo canal autorizado.",
        "dicaBanca": "Necessidade de informação não significa autorização para burlar controle de acesso."
    },
    {
        "pergunta": "O profissional encontra relatório de estudante esquecido em local de circulação. Deve:",
        "alternativas": [
            "proteger o documento e encaminhá-lo ao responsável ou local institucional adequado.",
            "deixá-lo onde está para não assumir responsabilidade sobre documento alheio.",
            "ler o relatório para descobrir a quem deve entregá-lo.",
            "fotografá-lo antes de devolver, caso seja necessário comprovar o achado.",
            "entregá-lo a qualquer servidor que esteja próximo."
        ],
        "correta": 0,
        "explicacao": "Documentos com dados pessoais devem ser protegidos contra acesso indevido.",
        "feedbackAcerto": "Correto. A conduta reduz exposição e devolve o documento ao fluxo apropriado.",
        "feedbackErro": "Encontrar um documento não autoriza ler além do necessário, fotografar ou repassá-lo sem critério.",
        "dicaBanca": "Proteção de dados também envolve documentos físicos."
    },
    {
        "pergunta": "A família solicita que o profissional esconda da equipe uma informação relevante para a segurança do estudante. Ele deve:",
        "alternativas": [
            "contar a informação a toda a equipe para evitar qualquer risco.",
            "aceitar o pedido porque a família é titular das informações do estudante.",
            "guardar segredo e agir sozinho sempre que a situação ocorrer.",
            "explicar os limites do sigilo e encaminhar a informação necessária pelos canais adequados.",
            "divulgar a informação aos colegas de turma para que ajudem na prevenção."
        ],
        "correta": 3,
        "explicacao": "Sigilo não impede compartilhamento necessário à segurança e à finalidade educacional, mas exige limitação e canal adequado.",
        "feedbackAcerto": "Correto. A resposta ética evita tanto segredo absoluto quanto divulgação excessiva.",
        "feedbackErro": "A família não pode transformar o profissional em único detentor de informação necessária ao atendimento seguro.",
        "dicaBanca": "Sigilo responsável não é silêncio absoluto."
    },
    {
        "pergunta": "Ao apoiar um estudante no banheiro, o profissional deve:",
        "alternativas": [
            "conversar sobre o procedimento com colegas após o atendimento para registrar informalmente.",
            "manter a porta aberta sempre que houver receio de questionamento posterior.",
            "solicitar testemunha em todo atendimento para proteger o servidor.",
            "oferecer o auxílio necessário preservando intimidade e evitando exposição desnecessária.",
            "realizar todas as etapas mesmo quando o estudante consegue executar algumas sozinho."
        ],
        "correta": 3,
        "explicacao": "Privacidade corporal e autonomia são expressamente relevantes no apoio de higiene.",
        "feedbackAcerto": "Correto. O auxílio deve ser necessário, proporcional e respeitoso.",
        "feedbackErro": "Exposição preventiva e ajuda excessiva não são sinônimos de segurança profissional.",
        "dicaBanca": "Privacidade + ajuda proporcional é combinação recorrente neste conteúdo."
    },
    {
        "pergunta": "Quando precisa corrigir comportamento inadequado do estudante, o profissional deve:",
        "alternativas": [
            "aplicar punição própria sempre que o professor não estiver presente.",
            "constrangê-lo diante dos colegas para aumentar o efeito educativo.",
            "ameaçar retirar o apoio caso o comportamento se repita.",
            "usar ironia para demonstrar que a conduta foi inadequada.",
            "usar orientação respeitosa, proporcional e compatível com o planejamento da equipe."
        ],
        "correta": 4,
        "explicacao": "Autoridade funcional não autoriza humilhação, ameaça ou punição improvisada.",
        "feedbackAcerto": "Correto. Intervenção ética preserva dignidade e segue estratégias institucionais.",
        "feedbackErro": "Constrangimento pode até produzir obediência momentânea, mas não é conduta profissional adequada.",
        "dicaBanca": "Disciplina não justifica humilhação."
    },
    {
        "pergunta": "O profissional percebe que um colega realiza ajuda excessiva, impedindo o estudante de agir sozinho. Deve:",
        "alternativas": [
            "informar a família de que o colega não possui preparo adequado.",
            "criticar o colega diante do estudante para interromper imediatamente a dependência.",
            "ignorar porque cada profissional possui método próprio de trabalho.",
            "retirar o estudante do atendimento do colega sem comunicar a equipe.",
            "dialogar profissionalmente e, se necessário, levar a questão à equipe para ajustar o apoio."
        ],
        "correta": 4,
        "explicacao": "Questões de prática profissional devem ser tratadas de modo respeitoso e institucional.",
        "feedbackAcerto": "Correto. O objetivo é corrigir a estratégia, não expor ou desautorizar o colega.",
        "feedbackErro": "Omissão e confronto público são extremos inadequados para resolver uma prática de superapoio.",
        "dicaBanca": "Ética entre colegas também envolve foco na solução."
    },
    {
        "pergunta": "Em rede social, o profissional deseja contar uma experiência positiva vivida com estudante, sem citar o nome. Deve considerar que:",
        "alternativas": [
            "basta pedir autorização verbal a qualquer colega da escola.",
            "retirar o nome torna automaticamente livre qualquer publicação.",
            "experiências positivas não estão sujeitas a cuidados de privacidade.",
            "o perfil pessoal afasta as responsabilidades relacionadas ao trabalho.",
            "detalhes podem permitir identificação, por isso qualquer divulgação deve observar regras institucionais e proteção de dados."
        ],
        "correta": 4,
        "explicacao": "Identificação pode ocorrer por combinação de detalhes, imagem, contexto ou outras informações.",
        "feedbackAcerto": "Correto. Anonimização não se resume a apagar o nome.",
        "feedbackErro": "O fato de a história ser positiva ou publicada em perfil pessoal não elimina os deveres de proteção.",
        "dicaBanca": "Sem nome não significa necessariamente anônimo."
    },
    {
        "pergunta": "Ao receber ordem que considera incompatível com a segurança ou dignidade do estudante, o profissional deve:",
        "alternativas": [
            "buscar esclarecimento e reportar a situação pelo fluxo institucional, sem executar mecanicamente prática indevida.",
            "cumpri-la sempre, pois responsabilidade pertence exclusivamente a quem deu a ordem.",
            "recusar qualquer orientação futura do mesmo profissional.",
            "divulgar a ordem em rede social para obter opinião pública.",
            "pedir ao estudante que decida se a ordem deve ser cumprida."
        ],
        "correta": 0,
        "explicacao": "Responsabilidade profissional exige discernimento e uso dos canais adequados diante de orientação problemática.",
        "feedbackAcerto": "Correto. Hierarquia não elimina responsabilidade ética individual.",
        "feedbackErro": "Obediência automática e exposição pública não são respostas profissionais adequadas.",
        "dicaBanca": "Hierarquia não legitima prática lesiva."
    },
    {
        "pergunta": "Durante reunião, profissionais discutem apenas limitações do estudante e ignoram suas potencialidades. A postura ética mais adequada é:",
        "alternativas": [
            "manter o foco nas limitações porque são elas que justificam a existência do apoio.",
            "contribuir para uma análise equilibrada que considere barreiras, necessidades, capacidades e formas de participação.",
            "evitar mencionar capacidades para não reduzir os recursos destinados ao estudante.",
            "comparar o estudante com colegas sem deficiência para medir suas limitações.",
            "usar o diagnóstico como síntese suficiente do perfil educacional."
        ],
        "correta": 1,
        "explicacao": "Planejamento individualizado deve considerar potencialidades e barreiras, evitando reduzir a pessoa ao diagnóstico.",
        "feedbackAcerto": "Correto. Uma visão baseada apenas em déficits pode gerar expectativas baixas e apoio inadequado.",
        "feedbackErro": "Deficiência não resume o estudante; diagnóstico não substitui conhecimento individualizado.",
        "dicaBanca": "Desconfie de alternativas centradas exclusivamente no déficit."
    },
    {
        "pergunta": "Um estudante com deficiência comete erro durante atividade. O profissional deve:",
        "alternativas": [
            "retirar a atividade e oferecer outra mais fácil.",
            "corrigir imediatamente por ele para evitar frustração.",
            "pedir ao colega mais próximo que faça a correção.",
            "apagar o erro antes que o professor o perceba.",
            "permitir que ele participe do processo de correção, oferecendo apoio apenas quando necessário."
        ],
        "correta": 4,
        "explicacao": "Errar e revisar fazem parte da aprendizagem e não devem ser retirados do estudante por excesso de proteção.",
        "feedbackAcerto": "Correto. Apoio ético preserva oportunidades de aprendizagem e autoria.",
        "feedbackErro": "Evitar toda frustração fazendo pelo estudante pode reduzir aprendizagem e autonomia.",
        "dicaBanca": "Superproteção é um distrator frequente em questões de apoio escolar."
    },
    {
        "pergunta": "O profissional percebe que uma informação registrada sobre o estudante está desatualizada. Deve:",
        "alternativas": [
            "alterar o documento oficial por conta própria, sem deixar rastreabilidade.",
            "continuar usando a informação até que a família solicite formalmente a mudança.",
            "informar a equipe e seguir o procedimento para atualização do registro.",
            "ignorar a divergência porque registros anteriores não podem ser revistos.",
            "eliminar o documento antigo sem comunicar os responsáveis pelo registro."
        ],
        "correta": 2,
        "explicacao": "Dados e registros utilizados no atendimento devem ser adequados e atualizados conforme os procedimentos aplicáveis.",
        "feedbackAcerto": "Correto. Atualização responsável evita decisões baseadas em informação superada.",
        "feedbackErro": "Não se deve perpetuar dado desatualizado nem alterar documento oficial informalmente.",
        "dicaBanca": "Qualidade da informação também é tema de proteção de dados."
    },
    {
        "pergunta": "Em situação de conflito entre estudantes, o profissional de apoio deve:",
        "alternativas": [
            "agir com imparcialidade, proteger os envolvidos e comunicar os fatos objetivamente à equipe.",
            "defender automaticamente o estudante que acompanha, pois essa é sua função.",
            "atribuir culpa ao outro estudante antes de ouvir a equipe.",
            "evitar qualquer intervenção para não demonstrar preferência.",
            "divulgar aos responsáveis sua avaliação pessoal sobre quem iniciou o conflito."
        ],
        "correta": 0,
        "explicacao": "Apoiar um estudante não significa agir como seu defensor parcial em toda controvérsia.",
        "feedbackAcerto": "Correto. Segurança, objetividade e impessoalidade devem orientar a atuação.",
        "feedbackErro": "O vínculo de apoio não autoriza prejulgar outro estudante ou omitir-se diante de risco.",
        "dicaBanca": "Apoio individual não equivale a parcialidade."
    },
    {
        "pergunta": "O estudante pede ajuda para realizar algo que consegue fazer sozinho, mas demonstra insegurança. A melhor conduta é:",
        "alternativas": [
            "encorajá-lo e oferecer suporte graduado, intervindo apenas na medida necessária.",
            "executar a tarefa para preservar sua autoestima.",
            "recusar qualquer ajuda para obrigá-lo a desenvolver independência.",
            "informar que a insegurança prova necessidade de apoio permanente.",
            "pedir a outro estudante que faça a tarefa por ele."
        ],
        "correta": 0,
        "explicacao": "Autonomia pode ser favorecida por apoio graduado, sem fazer pelo estudante nem abandoná-lo.",
        "feedbackAcerto": "Correto. O suporte pode ser reduzido conforme a necessidade observada.",
        "feedbackErro": "Fazer tudo e negar toda ajuda são respostas igualmente inadequadas.",
        "dicaBanca": "Procure alternativas que graduem o apoio."
    },
    {
        "pergunta": "Ao compartilhar registro necessário com a equipe pedagógica, o profissional deve:",
        "alternativas": [
            "enviar o documento completo em grupo pessoal para garantir rapidez.",
            "usar canal institucional e limitar o conteúdo ao que for pertinente à finalidade.",
            "incluir informações adicionais por precaução, mesmo sem relação com o caso.",
            "repassar a todos os servidores para evitar falhas de comunicação.",
            "usar conta pessoal sempre que o acesso institucional estiver mais demorado."
        ],
        "correta": 1,
        "explicacao": "A LGPD adota, entre outros, os princípios da finalidade e da necessidade.",
        "feedbackAcerto": "Correto. Compartilhar o necessário pelo canal adequado reduz exposição sem impedir o trabalho da equipe.",
        "feedbackErro": "Rapidez não justifica divulgação excessiva ou uso inseguro de canais.",
        "dicaBanca": "Finalidade e necessidade devem aparecer juntas na análise."
    },
    {
        "pergunta": "Ao lidar com estudante que necessita de apoio frequente, o profissional deve evitar:",
        "alternativas": [
            "respeitar o tempo necessário para resposta.",
            "usar comunicação acessível de acordo com a forma de expressão do estudante.",
            "oferecer escolhas possíveis durante a rotina.",
            "infantilizar sua fala ou presumir incapacidade para tomar decisões simples.",
            "estimular participação nas atividades com os colegas."
        ],
        "correta": 3,
        "explicacao": "Necessidade de suporte não autoriza infantilização nem presunção geral de incapacidade.",
        "feedbackAcerto": "Correto. Respeito inclui tratar o estudante de modo compatível com sua idade, comunicação e possibilidades.",
        "feedbackErro": "Apoio frequente não significa ausência de vontade, preferência ou capacidade de participação.",
        "dicaBanca": "A banca pode apresentar infantilização como se fosse cuidado."
    },
    {
        "pergunta": "Uma família oferece dinheiro para que o profissional permaneça além do horário exclusivamente com seu filho dentro da escola. Ele deve:",
        "alternativas": [
            "não negociar atendimento particular no exercício da função e encaminhar a demanda à gestão.",
            "aceitar se o serviço ocorrer após o término das aulas.",
            "aceitar desde que não prejudique os demais estudantes.",
            "combinar diretamente o valor e informar a escola depois.",
            "receber apenas quando a família considerar o apoio indispensável."
        ],
        "correta": 0,
        "explicacao": "Relações particulares vinculadas à função podem gerar conflito de interesses e desigualdade no serviço.",
        "feedbackAcerto": "Correto. Demandas de ampliação do apoio devem seguir a organização institucional.",
        "feedbackErro": "Pagamento privado não deve definir atendimento dentro da função pública escolar.",
        "dicaBanca": "Vantagem particular + função pública é sinal de alerta ético."
    },
    {
        "pergunta": "O profissional presencia acidente leve envolvendo o estudante. Mesmo sem lesão aparente, deve:",
        "alternativas": [
            "ocultar o fato para evitar preocupação desnecessária da família.",
            "seguir o protocolo da escola, comunicar os responsáveis institucionais e registrar objetivamente quando previsto.",
            "informar apenas em grupo informal de mensagens.",
            "aguardar o estudante reclamar de dor antes de comunicar.",
            "publicar foto do local para demonstrar que não houve negligência."
        ],
        "correta": 1,
        "explicacao": "Segurança exige observância dos protocolos e comunicação adequada, sem exposição indevida.",
        "feedbackAcerto": "Correto. A gravidade percebida pelo profissional não autoriza ignorar o fluxo institucional.",
        "feedbackErro": "Ocultar ou comunicar informalmente pode comprometer acompanhamento e responsabilização.",
        "dicaBanca": "Em acidentes, protocolo e registro objetivo são melhores que improviso."
    },
    {
        "pergunta": "Ao receber crítica respeitosa de um estudante sobre a forma de apoio, o profissional deve:",
        "alternativas": [
            "registrar a fala como comportamento opositor.",
            "considerá-la desrespeitosa porque o estudante não define atribuições do cargo.",
            "ignorar a crítica se a família não fizer a mesma reclamação.",
            "retirar temporariamente o apoio para demonstrar sua importância.",
            "escutar a manifestação e avaliar com a equipe possíveis ajustes."
        ],
        "correta": 4,
        "explicacao": "A participação do estudante inclui manifestação sobre apoios que afetam sua rotina.",
        "feedbackAcerto": "Correto. Escuta não significa aceitar automaticamente tudo, mas considerar a experiência do estudante.",
        "feedbackErro": "Desqualificar a crítica pode impedir identificação de uma barreira produzida pelo próprio apoio.",
        "dicaBanca": "A voz do estudante é fonte legítima para revisar estratégias."
    },
    {
        "pergunta": "O profissional percebe que o estudante é constantemente chamado pelo nome do diagnóstico, e não pelo próprio nome. A prática é:",
        "alternativas": [
            "inadequada, pois reduz a pessoa a uma condição e pode reforçar estigma.",
            "adequada quando facilita a identificação das necessidades de apoio.",
            "aceitável entre profissionais, desde que não ocorra diante do estudante.",
            "recomendada em registros rápidos para evitar homônimos.",
            "neutra quando o diagnóstico está confirmado por laudo."
        ],
        "correta": 0,
        "explicacao": "Linguagem profissional deve preservar dignidade e evitar redução da pessoa ao diagnóstico.",
        "feedbackAcerto": "Correto. O diagnóstico pode ser relevante em contextos específicos, mas não substitui a identidade da pessoa.",
        "feedbackErro": "Confirmação clínica não transforma rótulo em forma respeitosa de tratamento.",
        "dicaBanca": "Linguagem também pode produzir discriminação."
    },
    {
        "pergunta": "Em relação ao acesso a prontuários e documentos escolares, o profissional deve:",
        "alternativas": [
            "consultar apenas informações necessárias às atribuições que desempenha e conforme autorização institucional.",
            "consultar todo o histórico porque acompanha o estudante diariamente.",
            "acessar documentos de irmãos para compreender melhor o contexto familiar.",
            "guardar cópias pessoais dos documentos mais importantes.",
            "usar credencial de colega quando seu perfil não permitir determinada consulta."
        ],
        "correta": 0,
        "explicacao": "Acesso institucional deve observar necessidade, finalidade e controle de autorização.",
        "feedbackAcerto": "Correto. Vínculo funcional não concede acesso ilimitado a bases e documentos.",
        "feedbackErro": "Curiosidade, conveniência ou acompanhamento diário não justificam consulta indiscriminada.",
        "dicaBanca": "Acesso técnico possível não significa acesso ético ou autorizado."
    },
    {
        "pergunta": "Quando a escola solicita relato do profissional sobre evolução do estudante, ele deve:",
        "alternativas": [
            "substituir o relatório pedagógico do professor por seu relato funcional.",
            "emitir diagnóstico sobre transtornos observados ao longo da rotina.",
            "definir se o estudante deve ser aprovado ou reprovado.",
            "apresentar observações relacionadas ao apoio, autonomia, participação e barreiras percebidas.",
            "descrever características da família sem relação com o atendimento."
        ],
        "correta": 3,
        "explicacao": "O apoio pode produzir informações funcionais relevantes sem assumir avaliação docente ou diagnóstico clínico.",
        "feedbackAcerto": "Correto. O relato deve permanecer dentro do campo observado e da finalidade solicitada.",
        "feedbackErro": "Experiência cotidiana não autoriza diagnosticar nem decidir promoção escolar.",
        "dicaBanca": "Relatar é diferente de diagnosticar ou avaliar pedagogicamente."
    },
    {
        "pergunta": "A oferta de profissional de apoio escolar, segundo a regulamentação federal vigente, deve ser avaliada:",
        "alternativas": [
            "pelo profissional de apoio, após observar o estudante durante o período de adaptação.",
            "exclusivamente por laudo médico que determine a quantidade diária de horas de apoio.",
            "pela família, que define diretamente se o acompanhamento será individual e exclusivo.",
            "pelo estudo de caso e independentemente de diagnóstico, laudo ou relatório de profissional de saúde.",
            "somente pelo professor do AEE, sem participação da equipe pedagógica."
        ],
        "correta": 3,
        "explicacao": "O Decreto nº 12.686/2025, com redação dada pelo Decreto nº 12.773/2025, vincula a oferta ao estudo de caso e dispensa documento de saúde como condição.",
        "feedbackAcerto": "Correto. A necessidade de apoio é educacional e não pode ser condicionada automaticamente a laudo clínico.",
        "feedbackErro": "Exigir laudo como condição automática contraria a redação federal vigente.",
        "dicaBanca": "Atualidade normativa: estudo de caso, não laudo obrigatório."
    },
    {
        "pergunta": "Quando o profissional de apoio necessita orientação durante a rotina, a regulamentação vigente determina que ele:",
        "alternativas": [
            "decida sozinho porque possui contato mais próximo com o estudante.",
            "consulte exclusivamente a família antes de tomar qualquer providência.",
            "aguarde orientação do profissional de saúde que acompanha o estudante.",
            "se reporte à equipe pedagógica sempre que necessário.",
            "interrompa a atividade até receber autorização formal da direção."
        ],
        "correta": 3,
        "explicacao": "O Decreto nº 12.686/2025 prevê expressamente que o profissional de apoio se reporte à equipe pedagógica quando necessário.",
        "feedbackAcerto": "Correto. A atuação do apoio é integrada à organização pedagógica da escola.",
        "feedbackErro": "Proximidade com o estudante não transforma o apoio em função autônoma ou clínica.",
        "dicaBanca": "Esta é uma cobrança literal possível da norma atual."
    }
];

if (typeof window !== 'undefined') { window.condutaEtica = condutaEtica; }
