// FAROL DO SABER - HARDWARE
// 70 questões difíceis de Informática Básica, ajustadas aos editais de concursos de professor.

const hardware = [
    {
        "id": "hardware_001",
        "subtopico": "memorias",
        "pergunta": "Um computador com 8 GB de RAM começa a usar intensamente memória virtual ao abrir várias aplicações. Qual interpretação é mais adequada?",
        "alternativas": [
            "O processador reduziu sua frequência por falta de capacidade de armazenamento permanente na memória cache.",
            "A RAM disponível tornou-se insuficiente para a carga ativa, levando o sistema a usar parte do armazenamento como apoio, com desempenho inferior ao da RAM.",
            "O SSD passou a funcionar como memória cache do processador com a mesma latência da RAM instalada.",
            "A placa-mãe converteu automaticamente parte da memória de vídeo em ROM para manter os programas abertos.",
            "O SSD passou a funcionar como memória cache do processador com latência equivalente à RAM, tornando a paginação praticamente tão rápida quanto o acesso à memória principal."
        ],
        "correta": 1,
        "feedbackAcerto": "Memória virtual usa armazenamento como extensão lógica da memória principal; funciona, mas é bem mais lenta que RAM.",
        "feedbackErro": "A alternativa correta é: A RAM disponível tornou-se insuficiente para a carga ativa, levando o sistema a usar parte do armazenamento como apoio, com desempenho inferior ao da RAM.\n\nMemória virtual usa armazenamento como extensão lógica da memória principal; funciona, mas é bem mais lenta que RAM.",
        "dicaBanca": "Em prova, diferencie capacidade de RAM de espaço em disco: falta de RAM pode aumentar paginação sem significar falta de armazenamento.",
        "dica": "Em prova, diferencie capacidade de RAM de espaço em disco: falta de RAM pode aumentar paginação sem significar falta de armazenamento.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_002",
        "subtopico": "memorias",
        "pergunta": "Em relação à memória cache e à memória RAM, assinale a alternativa tecnicamente correta para um computador pessoal.",
        "alternativas": [
            "A cache é usada para guardar permanentemente documentos do usuário, enquanto a RAM armazena o sistema desligado.",
            "A RAM e a cache são equivalentes em função; a diferença prática se limita à capacidade expressa em gigabytes.",
            "A RAM é construída para substituir a cache e, por isso, costuma operar com latência menor que os níveis L1 e L2.",
            "A cache tende a ser menor e mais rápida que a RAM e mantém próximos do processador dados e instruções de uso frequente.",
            "A cache fica armazenada no SSD e transfere blocos para a RAM durante a execução, como se o armazenamento secundário fosse o primeiro nível consultado pela CPU."
        ],
        "correta": 3,
        "feedbackAcerto": "Cache reduz o tempo médio de acesso do processador a dados frequentes; RAM tem maior capacidade, porém maior latência.",
        "feedbackErro": "A alternativa correta é: A cache tende a ser menor e mais rápida que a RAM e mantém próximos do processador dados e instruções de uso frequente.\n\nCache reduz o tempo médio de acesso do processador a dados frequentes; RAM tem maior capacidade, porém maior latência.",
        "dicaBanca": "Quando a banca comparar memórias, observe três critérios: volatilidade, capacidade e proximidade/velocidade em relação à CPU.",
        "dica": "Quando a banca comparar memórias, observe três critérios: volatilidade, capacidade e proximidade/velocidade em relação à CPU.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_003",
        "subtopico": "memorias",
        "pergunta": "Após desligar normalmente um computador, qual informação tende a permanecer sem depender de energia elétrica contínua?",
        "alternativas": [
            "Os dados temporários da RAM e os registradores da CPU permanecem intactos para que os programas continuem exatamente do ponto anterior.",
            "O conteúdo operacional da cache L1 permanece gravado e substitui a leitura do sistema operacional no próximo boot.",
            "As instruções que estavam sendo processadas ficam preservadas na RAM porque módulos DDR são memórias não voláteis.",
            "A memória virtual mantém todos os processos executáveis ativos mesmo após a retirada completa da alimentação elétrica.",
            "O firmware armazenado em memória não volátil e os arquivos gravados no SSD permanecem disponíveis para a próxima inicialização."
        ],
        "correta": 4,
        "feedbackAcerto": "RAM e caches são voláteis; firmware e armazenamento permanente usam meios não voláteis.",
        "feedbackErro": "A alternativa correta é: O firmware armazenado em memória não volátil e os arquivos gravados no SSD permanecem disponíveis para a próxima inicialização.\n\nRAM e caches são voláteis; firmware e armazenamento permanente usam meios não voláteis.",
        "dicaBanca": "Não associe “memória” automaticamente a volatilidade: RAM é volátil, mas ROM/flash de firmware e SSD são não voláteis.",
        "dica": "Não associe “memória” automaticamente a volatilidade: RAM é volátil, mas ROM/flash de firmware e SSD são não voláteis.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_004",
        "subtopico": "memorias",
        "pergunta": "Um candidato afirma que aumentar a memória RAM de 8 GB para 16 GB “dobra a velocidade do processador”. A avaliação correta dessa afirmação é:",
        "alternativas": [
            "A RAM adicional aumenta principalmente a capacidade do SSD, mantendo inalterada a quantidade de programas que podem permanecer ativos.",
            "O aumento de RAM pode reduzir paginação e melhorar multitarefa, mas não duplica automaticamente a frequência nem o desempenho da CPU.",
            "O ganho ocorre porque a memória RAM passa a executar instruções no lugar dos núcleos do processador durante tarefas mais pesadas.",
            "O aumento de RAM altera diretamente o clock da CPU, pois cada gigabyte adicional acrescenta ciclos de processamento por segundo.",
            "A afirmação é correta nas situações em que os dois módulos instalados possuem a mesma capacidade, independentemente da carga de trabalho."
        ],
        "correta": 1,
        "feedbackAcerto": "Mais RAM pode eliminar um gargalo de memória, mas desempenho é resultado do conjunto e da carga executada.",
        "feedbackErro": "A alternativa correta é: O aumento de RAM pode reduzir paginação e melhorar multitarefa, mas não duplica automaticamente a frequência nem o desempenho da CPU.\n\nMais RAM pode eliminar um gargalo de memória, mas desempenho é resultado do conjunto e da carga executada.",
        "dicaBanca": "Desconfie de relações automáticas do tipo “dobrou RAM = dobrou desempenho”. Concurso costuma cobrar função, não marketing.",
        "dica": "Desconfie de relações automáticas do tipo “dobrou RAM = dobrou desempenho”. Concurso costuma cobrar função, não marketing.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_005",
        "subtopico": "memorias",
        "pergunta": "Em uma hierarquia típica de memória, qual sequência representa corretamente a tendência de maior velocidade e menor capacidade para menor velocidade e maior capacidade?",
        "alternativas": [
            "Armazenamento secundário → RAM → registradores e cache.",
            "ROM → HD → registradores, pois registradores são utilizados principalmente durante a inicialização do computador.",
            "RAM → SSD → cache, porque a cache é usada principalmente para armazenamento de longo prazo.",
            "SSD → cache → RAM, já que dispositivos flash têm acesso mais rápido que memórias próximas ao processador.",
            "Registradores e cache → RAM → armazenamento secundário."
        ],
        "correta": 4,
        "feedbackAcerto": "Registradores/cache ficam mais próximos da CPU e são muito rápidos; RAM vem depois; SSD/HD oferecem maior capacidade e maior latência.",
        "feedbackErro": "A alternativa correta é: Registradores e cache → RAM → armazenamento secundário.\n\nRegistradores/cache ficam mais próximos da CPU e são muito rápidos; RAM vem depois; SSD/HD oferecem maior capacidade e maior latência.",
        "dicaBanca": "Questões de hierarquia costumam inverter velocidade e capacidade. Quanto mais perto da CPU, em regra menor a capacidade e maior a velocidade.",
        "dica": "Questões de hierarquia costumam inverter velocidade e capacidade. Quanto mais perto da CPU, em regra menor a capacidade e maior a velocidade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_006",
        "subtopico": "memorias",
        "pergunta": "Sobre memória ROM e firmware em computadores atuais, assinale a alternativa mais adequada.",
        "alternativas": [
            "O firmware é carregado diretamente da RAM e desaparece quando a bateria da placa-mãe é removida.",
            "O firmware é um componente físico responsável por converter a energia da fonte e distribuir as tensões necessárias à placa-mãe durante a inicialização.",
            "O firmware de inicialização é mantido em memória não volátil regravável, permitindo atualização sem transformá-lo em memória RAM.",
            "A ROM moderna corresponde a um chip de leitura que permanece imutável desde a fabricação, mesmo quando o equipamento utiliza memória flash para firmware.",
            "A memória ROM é destinada ao armazenamento cotidiano de documentos e substitui o SSD em máquinas sem HD."
        ],
        "correta": 2,
        "feedbackAcerto": "Em PCs atuais, o firmware costuma residir em memória flash não volátil e pode receber atualizações controladas.",
        "feedbackErro": "A alternativa correta é: O firmware de inicialização é mantido em memória não volátil regravável, permitindo atualização sem transformá-lo em memória RAM.\n\nEm PCs atuais, o firmware costuma residir em memória flash não volátil e pode receber atualizações controladas.",
        "dicaBanca": "“ROM” em prova muitas vezes aparece como ideia de memória não volátil; não conclua que firmware moderno é imutável.",
        "dica": "“ROM” em prova muitas vezes aparece como ideia de memória não volátil; não conclua que firmware moderno é imutável.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_007",
        "subtopico": "memorias",
        "pergunta": "Um notebook possui 16 GB de RAM e SSD de 512 GB. Qual comparação está correta?",
        "alternativas": [
            "A RAM e o SSD cumprem a mesma função e diferem principalmente no valor numérico de capacidade apresentado pelo fabricante.",
            "A RAM mantém o sistema operacional instalado de forma permanente, enquanto o SSD é acionado principalmente como extensão temporária de memória quando muitos programas são abertos.",
            "O SSD é memória volátil de alta velocidade e perde os arquivos quando o notebook fica totalmente sem bateria.",
            "Os 16 GB correspondem à memória principal usada por programas em execução; os 512 GB representam capacidade de armazenamento persistente.",
            "Os 16 GB armazenam os arquivos permanentemente, enquanto os 512 GB são reservados para instruções temporárias do processador."
        ],
        "correta": 3,
        "feedbackAcerto": "RAM atende à execução corrente; SSD mantém sistema, programas e arquivos mesmo sem alimentação.",
        "feedbackErro": "A alternativa correta é: Os 16 GB correspondem à memória principal usada por programas em execução; os 512 GB representam capacidade de armazenamento persistente.\n\nRAM atende à execução corrente; SSD mantém sistema, programas e arquivos mesmo sem alimentação.",
        "dicaBanca": "Capacidade em GB pode aparecer tanto em RAM quanto em SSD. O que distingue é a função e a persistência dos dados.",
        "dica": "Capacidade em GB pode aparecer tanto em RAM quanto em SSD. O que distingue é a função e a persistência dos dados.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_008",
        "subtopico": "memorias",
        "pergunta": "Em um computador compatível, a presença de cache L1, L2 e L3 busca principalmente:",
        "alternativas": [
            "Reduzir o tempo médio de acesso da CPU a dados e instruções, explorando diferentes níveis de proximidade, capacidade e velocidade.",
            "Aumentar a resolução da placa de vídeo ao reservar níveis independentes de memória para cada monitor conectado.",
            "Criar três cópias permanentes dos arquivos pessoais para substituir a necessidade de backup externo.",
            "Dividir o SSD em três áreas físicas que funcionam como partições de inicialização do sistema operacional.",
            "Os níveis L1, L2 e L3 substituem a RAM durante a execução dos programas, mantendo todo o conjunto de dados ativo dentro do próprio processador."
        ],
        "correta": 0,
        "feedbackAcerto": "Os níveis de cache equilibram rapidez, capacidade e custo, reduzindo acessos mais lentos à memória principal.",
        "feedbackErro": "A alternativa correta é: Reduzir o tempo médio de acesso da CPU a dados e instruções, explorando diferentes níveis de proximidade, capacidade e velocidade.\n\nOs níveis de cache equilibram rapidez, capacidade e custo, reduzindo acessos mais lentos à memória principal.",
        "dicaBanca": "L1/L2/L3 são níveis de cache, não “tipos de armazenamento” para documentos nem partições de disco.",
        "dica": "L1/L2/L3 são níveis de cache, não “tipos de armazenamento” para documentos nem partições de disco.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_009",
        "subtopico": "memorias",
        "pergunta": "Um sistema informa uso de 95% da RAM, enquanto o SSD possui grande espaço livre. Qual conclusão é mais consistente?",
        "alternativas": [
            "O dado comprova defeito físico do SSD, porque o armazenamento deveria crescer na mesma proporção do uso da RAM.",
            "O sistema ficou sem capacidade de processamento, pois o percentual de uso da RAM corresponderia diretamente ao percentual de clock usado pela CPU.",
            "Como o SSD tem espaço livre, a RAM não pode estar saturada, pois ambos representam a mesma reserva de memória do sistema.",
            "O percentual de RAM indica que 95% dos arquivos do SSD estão abertos e serão apagados se a memória atingir 100%.",
            "Há pressão sobre a memória principal, embora ainda exista espaço de armazenamento; o sistema pode recorrer mais à paginação."
        ],
        "correta": 4,
        "feedbackAcerto": "RAM e armazenamento são recursos distintos; espaço livre em SSD não impede pressão de memória principal.",
        "feedbackErro": "A alternativa correta é: Há pressão sobre a memória principal, embora ainda exista espaço de armazenamento; o sistema pode recorrer mais à paginação.\n\nRAM e armazenamento são recursos distintos; espaço livre em SSD não impede pressão de memória principal.",
        "dicaBanca": "Questões de monitoramento costumam colocar CPU, RAM e disco lado a lado para induzir a tratá-los como a mesma coisa.",
        "dica": "Questões de monitoramento costumam colocar CPU, RAM e disco lado a lado para induzir a tratá-los como a mesma coisa.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_010",
        "subtopico": "memorias",
        "pergunta": "Considere dois módulos de memória compatíveis instalados em uma placa-mãe que oferece operação em dois canais. O principal efeito esperado, quando a configuração é aceita pelo equipamento, é:",
        "alternativas": [
            "A operação em dois canais faz a RAM preservar dados após o desligamento porque os módulos passam a compartilhar alimentação e manter uma cópia entre si.",
            "Aumentar a largura de banda disponível entre a memória e o controlador, sem transformar a RAM em armazenamento permanente.",
            "Duplicar a a frequência nominal de cada módulo e eliminar qualquer latência durante o acesso à memória.",
            "Fazer os módulos operarem como duas unidades de armazenamento independentes, semelhantes a dois SSDs em paralelo.",
            "Converter parte da RAM em cache L1 para que o processador deixe de utilizar seus próprios níveis internos de cache."
        ],
        "correta": 1,
        "feedbackAcerto": "Dual-channel amplia a largura de banda do subsistema de memória; não altera a natureza volátil da RAM.",
        "feedbackErro": "A alternativa correta é: Aumentar a largura de banda disponível entre a memória e o controlador, sem transformar a RAM em armazenamento permanente.\n\nDual-channel amplia a largura de banda do subsistema de memória; não altera a natureza volátil da RAM.",
        "dicaBanca": "Esse é o limite técnico adequado: saber o efeito geral do dual-channel, sem entrar em temporizações e overclock.",
        "dica": "Esse é o limite técnico adequado: saber o efeito geral do dual-channel, sem entrar em temporizações e overclock.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_011",
        "subtopico": "processamento_cpu",
        "pergunta": "Uma CPU é anunciada com frequência máxima de 4,5 GHz. Sobre esse dado, é correto afirmar que:",
        "alternativas": [
            "GHz é unidade usada para medir a largura do barramento de dados e não possui relação com frequência de operação.",
            "O valor representa a quantidade de gigabytes de memória RAM que o processador consegue endereçar a cada segundo.",
            "A frequência indica bilhões de ciclos por segundo, mas não permite comparar sozinha o desempenho de processadores de arquiteturas diferentes.",
            "A medida informa a capacidade máxima de armazenamento interno da CPU, equivalente a 4,5 bilhões de bytes.",
            "Um processador de 4,5 GHz executa 4,5 bilhões de instruções completas por segundo, pois cada ciclo de clock corresponderia a uma instrução concluída em qualquer carga comum."
        ],
        "correta": 2,
        "feedbackAcerto": "GHz mede frequência de ciclos; desempenho também depende de arquitetura, núcleos, cache, instruções e carga.",
        "feedbackErro": "A alternativa correta é: A frequência indica bilhões de ciclos por segundo, mas não permite comparar sozinha o desempenho de processadores de arquiteturas diferentes.\n\nGHz mede frequência de ciclos; desempenho também depende de arquitetura, núcleos, cache, instruções e carga.",
        "dicaBanca": "Ágata já cobrou unidade de velocidade de CPU. A dificuldade está em não transformar frequência em sinônimo absoluto de desempenho.",
        "dica": "Ágata já cobrou unidade de velocidade de CPU. A dificuldade está em não transformar frequência em sinônimo absoluto de desempenho.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_012",
        "subtopico": "processamento_cpu",
        "pergunta": "Em um processador multicore, a existência de quatro núcleos significa que:",
        "alternativas": [
            "Quatro núcleos fazem programas comuns executarem quatro vezes mais rápido, pois o sistema distribui automaticamente qualquer tarefa em quatro partes equivalentes.",
            "Cada núcleo funciona como memória RAM dedicada e deixa de executar instruções quando há cache disponível.",
            "Há múltiplas unidades de processamento capazes de executar fluxos de trabalho em paralelo, dependendo do sistema e do programa.",
            "Cada núcleo corresponde a um disco rígido interno responsável por armazenar uma parte diferente do sistema operacional.",
            "O processador possui quatro placas de vídeo independentes, uma para cada núcleo lógico reconhecido pelo sistema."
        ],
        "correta": 2,
        "feedbackAcerto": "Múltiplos núcleos favorecem paralelismo, mas o ganho depende de software, sistema e tipo de tarefa.",
        "feedbackErro": "A alternativa correta é: Há múltiplas unidades de processamento capazes de executar fluxos de trabalho em paralelo, dependendo do sistema e do programa.\n\nMúltiplos núcleos favorecem paralelismo, mas o ganho depende de software, sistema e tipo de tarefa.",
        "dicaBanca": "Evite a armadilha “quatro núcleos = quatro vezes mais rápido”. Provas gostam de relações absolutas incorretas.",
        "dica": "Evite a armadilha “quatro núcleos = quatro vezes mais rápido”. Provas gostam de relações absolutas incorretas.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_013",
        "subtopico": "processamento_cpu",
        "pergunta": "Qual situação representa melhor a função geral da CPU?",
        "alternativas": [
            "Fornecer energia elétrica estabilizada para os demais componentes conectados à placa-mãe.",
            "Armazenar permanentemente todos os arquivos do usuário, substituindo SSD e HD durante toda a vida útil do computador.",
            "Converter o sinal digital do computador em imagem visível sem participação de outros componentes gráficos ou de saída.",
            "Interpretar e executar instruções, realizar operações lógicas e aritméticas e coordenar atividades do sistema.",
            "Atuar como interface física para conexão de cabos de rede, áudio e vídeo no painel traseiro do gabinete."
        ],
        "correta": 3,
        "feedbackAcerto": "A CPU executa instruções e coordena processamento; armazenamento, energia e interfaces cabem a outros componentes.",
        "feedbackErro": "A alternativa correta é: Interpretar e executar instruções, realizar operações lógicas e aritméticas e coordenar atividades do sistema.\n\nA CPU executa instruções e coordena processamento; armazenamento, energia e interfaces cabem a outros componentes.",
        "dicaBanca": "Quando a alternativa mistura CPU com SSD, fonte ou monitor, identifique a função central: processamento de instruções.",
        "dica": "Quando a alternativa mistura CPU com SSD, fonte ou monitor, identifique a função central: processamento de instruções.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_014",
        "subtopico": "processamento_cpu",
        "pergunta": "Dois computadores destinados ao laboratório escolar possuem processadores com números diferentes de núcleos e frequências de clock distintas. Qual conclusão é tecnicamente adequada antes de afirmar qual será mais rápido?",
        "alternativas": [
            "O número de núcleos determina sozinho o desempenho, porque qualquer programa divide suas tarefas igualmente entre todos eles.",
            "A frequência de clock é o critério decisivo de desempenho, de modo que o processador com mais GHz tende a vencer qualquer tipo de carga sem considerar arquitetura.",
            "A capacidade do SSD deve ser usada como critério principal, porque ela define quantas instruções a CPU consegue concluir por ciclo.",
            "Clock e quantidade de núcleos são fatores relevantes, mas o desempenho também depende da arquitetura e de quanto o programa aproveita processamento paralelo.",
            "A quantidade de memória RAM substitui a análise do processador, porque dois computadores com a mesma RAM apresentam desempenho equivalente de CPU."
        ],
        "correta": 3,
        "feedbackAcerto": "Frequência e quantidade de núcleos influenciam o desempenho, mas não devem ser analisadas isoladamente. Arquitetura e tipo de carga também interferem no resultado.",
        "feedbackErro": "A alternativa correta é: Clock e quantidade de núcleos são fatores relevantes, mas o desempenho também depende da arquitetura e de quanto o programa aproveita processamento paralelo.\n\nFrequência e quantidade de núcleos influenciam o desempenho, mas não devem ser analisadas isoladamente. Arquitetura e tipo de carga também interferem no resultado.",
        "dicaBanca": "Em questões de CPU, evite transformar um único número — GHz ou núcleos — em medida absoluta de desempenho.",
        "dica": "Em questões de CPU, evite transformar um único número — GHz ou núcleos — em medida absoluta de desempenho.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_015",
        "subtopico": "processamento_cpu",
        "pergunta": "Durante a execução de um programa, a CPU precisa acessar instruções e dados que estão temporariamente na memória principal. Qual alternativa descreve corretamente essa relação?",
        "alternativas": [
            "A CPU grava permanentemente os arquivos do programa dentro de seus núcleos antes de iniciar a execução.",
            "A RAM realiza os cálculos lógicos do programa e envia à CPU o resultado final de cada operação, deixando o processador responsável pela coordenação geral.",
            "O SSD executa as instruções do programa e utiliza a CPU quando o computador precisa apresentar os resultados na interface de vídeo.",
            "A memória ROM substitui a RAM durante o uso normal e mantém todos os processos ativos enquanto o computador está ligado.",
            "A CPU executa instruções e processa dados, enquanto a RAM mantém temporariamente informações necessárias aos programas em execução."
        ],
        "correta": 4,
        "feedbackAcerto": "A CPU é responsável pelo processamento; a RAM funciona como memória de trabalho temporária para dados e instruções usados durante a execução.",
        "feedbackErro": "A alternativa correta é: A CPU executa instruções e processa dados, enquanto a RAM mantém temporariamente informações necessárias aos programas em execução.\n\nA CPU é responsável pelo processamento; a RAM funciona como memória de trabalho temporária para dados e instruções usados durante a execução.",
        "dicaBanca": "A banca costuma misturar função de processador, RAM e armazenamento. Identifique quem processa, quem mantém temporariamente e quem grava de forma persistente.",
        "dica": "A banca costuma misturar função de processador, RAM e armazenamento. Identifique quem processa, quem mantém temporariamente e quem grava de forma persistente.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_016",
        "subtopico": "processamento_cpu",
        "pergunta": "Dois computadores têm processadores com o mesmo clock anunciado, mas desempenhos diferentes no mesmo programa. Qual explicação é plausível?",
        "alternativas": [
            "Diferenças de arquitetura, quantidade de núcleos, cache, eficiência por ciclo e limites térmicos podem produzir desempenhos distintos.",
            "Isso é impossível, pois processadores com a mesma frequência em GHz devem apresentar desempenho idêntico em cargas de trabalho comparáveis.",
            "A diferença só pode ser causada pelo tamanho físico do gabinete, que determina quantas instruções a CPU processa por ciclo.",
            "A frequência igual indica que ambos possuem a mesma arquitetura, o mesmo número de núcleos e a mesma memória cache.",
            "A capacidade do SSD é o fator determinante para definir qual processador será mais rápido, pois mais espaço de armazenamento aumenta o número de instruções por ciclo."
        ],
        "correta": 0,
        "feedbackAcerto": "Clock é apenas uma variável de desempenho e não descreve toda a microarquitetura nem as condições de operação.",
        "feedbackErro": "A alternativa correta é: Diferenças de arquitetura, quantidade de núcleos, cache, eficiência por ciclo e limites térmicos podem produzir desempenhos distintos.\n\nClock é apenas uma variável de desempenho e não descreve toda a microarquitetura nem as condições de operação.",
        "dicaBanca": "Questão difícil de informática básica: compare conceitos, não números isolados de propaganda.",
        "dica": "Questão difícil de informática básica: compare conceitos, não números isolados de propaganda.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_017",
        "subtopico": "processamento_cpu",
        "pergunta": "Em uma questão sobre componentes de um computador, afirma-se que a CPU participa de operações aritméticas, comparações lógicas e controle da execução de instruções. Essa afirmação é:",
        "alternativas": [
            "incorreta, porque operações aritméticas e lógicas são realizadas pelo SSD, enquanto a CPU se concentra na comunicação com periféricos.",
            "incorreta, porque a CPU funciona como memória de armazenamento permanente e não participa da execução das instruções.",
            "incorreta, porque a CPU atua na inicialização e, após o carregamento do sistema, a RAM assume o processamento das instruções.",
            "correta, pois o processador executa instruções e coordena operações do sistema, incluindo tarefas aritméticas e lógicas.",
            "correta em computadores sem sistema operacional, pois em ambientes Windows o processamento das instruções passa a ser realizado pela memória principal."
        ],
        "correta": 3,
        "feedbackAcerto": "A CPU executa instruções e realiza operações de processamento, enquanto RAM e dispositivos de armazenamento possuem funções distintas.",
        "feedbackErro": "A alternativa correta é: correta, pois o processador executa instruções e coordena operações do sistema, incluindo tarefas aritméticas e lógicas.\n\nA CPU executa instruções e realiza operações de processamento, enquanto RAM e dispositivos de armazenamento possuem funções distintas.",
        "dicaBanca": "Se a alternativa atribuir cálculo e execução diretamente ao HD, SSD ou RAM, há troca de funções entre componentes.",
        "dica": "Se a alternativa atribuir cálculo e execução diretamente ao HD, SSD ou RAM, há troca de funções entre componentes.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_018",
        "subtopico": "processamento_cpu",
        "pergunta": "Um computador aceita determinado modelo de processador apenas quando a placa-mãe oferece soquete e suporte compatíveis. O que essa situação demonstra?",
        "alternativas": [
            "Que qualquer processador pode funcionar em qualquer placa-mãe, desde que a quantidade de memória RAM seja suficiente.",
            "Que o sistema operacional adapta fisicamente o encaixe do processador quando os componentes pertencem a gerações diferentes.",
            "Que a capacidade do HD define a compatibilidade elétrica entre CPU e placa-mãe durante a inicialização do computador.",
            "Que a troca da CPU exige verificar compatibilidade física e suporte da placa-mãe, e não apenas comparar frequência ou número de núcleos.",
            "Que processadores de frequência menor compartilham um mesmo soquete, enquanto modelos de frequência maior passam a exigir placas-mãe específicas para esse clock."
        ],
        "correta": 3,
        "feedbackAcerto": "Compatibilidade de processador envolve soquete e suporte da plataforma. Desempenho anunciado não garante que uma CPU possa ser instalada em qualquer placa-mãe.",
        "feedbackErro": "A alternativa correta é: Que a troca da CPU exige verificar compatibilidade física e suporte da placa-mãe, e não apenas comparar frequência ou número de núcleos.\n\nCompatibilidade de processador envolve soquete e suporte da plataforma. Desempenho anunciado não garante que uma CPU possa ser instalada em qualquer placa-mãe.",
        "dicaBanca": "Em concurso, “mais novo” ou “mais rápido” não significa automaticamente “compatível”.",
        "dica": "Em concurso, “mais novo” ou “mais rápido” não significa automaticamente “compatível”.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_019",
        "subtopico": "armazenamento",
        "pergunta": "Um usuário substitui um HD por um SSD e percebe menor tempo de inicialização. A explicação mais adequada é:",
        "alternativas": [
            "O SSD armazena dados diretamente na memória cache da CPU, dispensando a utilização de controladores e interfaces de armazenamento.",
            "O HD precisa carregar os arquivos primeiro para a ROM, enquanto o SSD executa programas sem utilizar memória RAM.",
            "O SSD utiliza memória flash e não depende do movimento mecânico de cabeças e pratos para localizar dados.",
            "O HD é memória volátil, enquanto o SSD mantém dados após o desligamento; essa diferença explica sozinha todo ganho de desempenho.",
            "O SSD aumenta automaticamente a frequência da CPU e, por isso, acelera cálculos comuns mesmo sem acesso a arquivos."
        ],
        "correta": 2,
        "feedbackAcerto": "A ausência de partes móveis reduz latência de acesso e melhora leituras aleatórias, favorecendo inicialização e abertura de programas.",
        "feedbackErro": "A alternativa correta é: O SSD utiliza memória flash e não depende do movimento mecânico de cabeças e pratos para localizar dados.\n\nA ausência de partes móveis reduz latência de acesso e melhora leituras aleatórias, favorecendo inicialização e abertura de programas.",
        "dicaBanca": "SSD não “acelera a CPU”; ele reduz gargalos de armazenamento. Separe processamento de entrada/saída.",
        "dica": "SSD não “acelera a CPU”; ele reduz gargalos de armazenamento. Separe processamento de entrada/saída.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_020",
        "subtopico": "armazenamento",
        "pergunta": "Sobre HD e SSD, assinale a comparação correta.",
        "alternativas": [
            "O SSD é conectado por USB na maior parte das instalações, enquanto o HD interno é o único dispositivo que pode utilizar interfaces da placa-mãe.",
            "O HD e o SSD são memórias voláteis, pois ambos perdem os arquivos quando o computador é desligado normalmente.",
            "O HD não permite regravação de dados, ao passo que o SSD foi criado especificamente para substituir mídias voltadas à leitura.",
            "O SSD possui pratos magnéticos menores e gira em rotação mais alta, enquanto o HD utiliza células de memória flash.",
            "O HD tradicional usa componentes mecânicos para leitura e gravação; o SSD usa memória flash e, em regra, tolera melhor impactos mecânicos."
        ],
        "correta": 4,
        "feedbackAcerto": "HD é eletromecânico; SSD é eletrônico e baseado em flash. Ambos são armazenamento não volátil e regravável.",
        "feedbackErro": "A alternativa correta é: O HD tradicional usa componentes mecânicos para leitura e gravação; o SSD usa memória flash e, em regra, tolera melhor impactos mecânicos.\n\nHD é eletromecânico; SSD é eletrônico e baseado em flash. Ambos são armazenamento não volátil e regravável.",
        "dicaBanca": "Distratores costumam trocar tecnologias: pratos/cabeças pertencem ao HD; flash, ao SSD e a vários dispositivos removíveis.",
        "dica": "Distratores costumam trocar tecnologias: pratos/cabeças pertencem ao HD; flash, ao SSD e a vários dispositivos removíveis.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_021",
        "subtopico": "armazenamento",
        "pergunta": "Uma escola possui CDs identificados como CD-ROM, CD-R e CD-RW. Qual alternativa diferencia corretamente essas mídias?",
        "alternativas": [
            "CD-ROM é normalmente destinado à leitura; CD-R permite gravação pelo usuário sem apagamento e regravação usuais; CD-RW admite apagar e gravar novamente.",
            "CD-ROM e CD-RW permitem regravação, enquanto CD-R corresponde à mídia destinada à leitura desde a fabricação.",
            "CD-R é uma mídia magnética, CD-RW utiliza memória flash e CD-ROM é a única mídia óptica entre as três.",
            "CD-RW fica restrito ao equipamento em que foi gravado, enquanto CD-ROM e CD-R passam a funcionar como memória RAM removível após inseridos na unidade de leitura do computador.",
            "As três siglas indicam diferenças de capacidade dentro do mesmo tipo de disco, sem relação com a possibilidade de gravação ou regravação."
        ],
        "correta": 0,
        "feedbackAcerto": "CD-ROM é associado à leitura; CD-R permite gravação sem regravação normal; CD-RW permite apagar e gravar novamente em unidades compatíveis.",
        "feedbackErro": "A alternativa correta é: CD-ROM é normalmente destinado à leitura; CD-R permite gravação pelo usuário sem apagamento e regravação usuais; CD-RW admite apagar e gravar novamente.\n\nCD-ROM é associado à leitura; CD-R permite gravação sem regravação normal; CD-RW permite apagar e gravar novamente em unidades compatíveis.",
        "dicaBanca": "CD-R e CD-RW costumam aparecer juntos em prova. A diferença central é a possibilidade de regravação.",
        "dica": "CD-R e CD-RW costumam aparecer juntos em prova. A diferença central é a possibilidade de regravação.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_022",
        "subtopico": "armazenamento",
        "pergunta": "Um pendrive de 64 GB é utilizado para transportar documentos entre computadores. Do ponto de vista do hardware, ele é:",
        "alternativas": [
            "Um dispositivo de armazenamento não volátil baseado em memória flash e normalmente conectado por USB.",
            "Uma extensão volátil da memória RAM que mantém arquivos enquanto recebe energia pela porta USB.",
            "Um dispositivo óptico regravável que utiliza laser interno para registrar os dados em células removíveis.",
            "Uma memória cache externa que passa a operar na mesma velocidade dos níveis de cache do processador quando conectada.",
            "Um periférico dedicado de saída, pois transfere dados do computador sem permitir leitura de informações previamente gravadas."
        ],
        "correta": 0,
        "feedbackAcerto": "Pendrive usa flash, é regravável e não volátil; pode ler e gravar dados por uma interface USB.",
        "feedbackErro": "A alternativa correta é: Um dispositivo de armazenamento não volátil baseado em memória flash e normalmente conectado por USB.\n\nPendrive usa flash, é regravável e não volátil; pode ler e gravar dados por uma interface USB.",
        "dicaBanca": "Não classifique pendrive como RAM, cache ou mídia óptica apenas por ser removível.",
        "dica": "Não classifique pendrive como RAM, cache ou mídia óptica apenas por ser removível.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_023",
        "subtopico": "armazenamento",
        "pergunta": "Qual situação caracteriza corretamente uma mídia óptica?",
        "alternativas": [
            "Um SSD SATA é mídia óptica porque seu controlador usa sinais digitais para localizar blocos de dados.",
            "Um pendrive é mídia óptica porque pode ser conectado e removido sem abrir o gabinete do computador.",
            "Um HD é mídia óptica porque os pratos internos giram e são lidos por um feixe de laser em operação normal.",
            "Armazenamentos não voláteis podem ser classificados como ópticos por manterem dados sem energia, inclusive quando utilizam memória flash ou gravação magnética.",
            "CD, DVD ou Blu-ray armazenam dados em disco lido por unidade óptica compatível, diferentemente de SSDs e pendrives baseados em flash."
        ],
        "correta": 4,
        "feedbackAcerto": "Mídia óptica usa leitura por laser em discos; flash e magnetismo pertencem a tecnologias diferentes.",
        "feedbackErro": "A alternativa correta é: CD, DVD ou Blu-ray armazenam dados em disco lido por unidade óptica compatível, diferentemente de SSDs e pendrives baseados em flash.\n\nMídia óptica usa leitura por laser em discos; flash e magnetismo pertencem a tecnologias diferentes.",
        "dicaBanca": "A banca pode misturar “removível”, “magnético”, “óptico” e “flash”. Classifique pela tecnologia, não pelo formato externo.",
        "dica": "A banca pode misturar “removível”, “magnético”, “óptico” e “flash”. Classifique pela tecnologia, não pelo formato externo.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_024",
        "subtopico": "armazenamento",
        "pergunta": "Um usuário possui um SSD com 90% do espaço ocupado, mas 32 GB de RAM disponíveis. Qual afirmação é correta?",
        "alternativas": [
            "O percentual ocupado do SSD mede a carga de trabalho do processador e não tem relação com arquivos armazenados.",
            "A capacidade de 32 GB de RAM deve ser somada à do SSD para determinar o espaço total disponível para documentos.",
            "Espaço de armazenamento e memória principal são recursos distintos; muita RAM livre não cria automaticamente espaço permanente no SSD.",
            "Quando o SSD se aproxima da capacidade máxima, a RAM deixa de manter programas ativos porque ambos passam a disputar as mesmas células físicas de armazenamento.",
            "A RAM livre é incorporada ao SSD quando ele ultrapassa 80% de ocupação, aumentando permanentemente sua capacidade."
        ],
        "correta": 2,
        "feedbackAcerto": "RAM atende execução; SSD atende persistência. Um recurso não substitui automaticamente a capacidade do outro.",
        "feedbackErro": "A alternativa correta é: Espaço de armazenamento e memória principal são recursos distintos; muita RAM livre não cria automaticamente espaço permanente no SSD.\n\nRAM atende execução; SSD atende persistência. Um recurso não substitui automaticamente a capacidade do outro.",
        "dicaBanca": "Questões de informática básica costumam explorar exatamente a confusão entre “memória” e “armazenamento”.",
        "dica": "Questões de informática básica costumam explorar exatamente a confusão entre “memória” e “armazenamento”.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_025",
        "subtopico": "armazenamento",
        "pergunta": "Ao comparar a leitura de muitos arquivos pequenos em HD e SSD, qual característica costuma favorecer o SSD?",
        "alternativas": [
            "O HD não consegue realizar leitura aleatória; ele funciona melhor com arquivos gravados em sequência contínua.",
            "O acesso eletrônico sem reposicionamento mecânico reduz a latência de busca, especialmente em operações aleatórias.",
            "O SSD armazena todos os arquivos pequenos na RAM do sistema, fazendo com que nenhum acesso ocorra na própria unidade.",
            "O SSD gira seus pratos em maior rotação, reduzindo o tempo necessário para a cabeça alcançar cada arquivo.",
            "O HD precisa converter cada arquivo em sinal óptico antes da leitura, enquanto o SSD recebe os dados diretamente do monitor."
        ],
        "correta": 1,
        "feedbackAcerto": "SSD elimina seek mecânico e tende a ter menor latência em acessos aleatórios.",
        "feedbackErro": "A alternativa correta é: O acesso eletrônico sem reposicionamento mecânico reduz a latência de busca, especialmente em operações aleatórias.\n\nSSD elimina seek mecânico e tende a ter menor latência em acessos aleatórios.",
        "dicaBanca": "A vantagem não depende de afirmar que HD “não faz” leitura aleatória; ele faz, porém com custo mecânico maior.",
        "dica": "A vantagem não depende de afirmar que HD “não faz” leitura aleatória; ele faz, porém com custo mecânico maior.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_026",
        "subtopico": "armazenamento",
        "pergunta": "Ao comparar CDs e DVDs usados para armazenar arquivos, assinale a alternativa correta.",
        "alternativas": [
            "CD e DVD são mídias magnéticas, e a principal diferença é a velocidade de rotação dos pratos internos.",
            "DVD é um tipo de memória flash removível, enquanto CD depende de gravação magnética semelhante à de um HD.",
            "CD e DVD são memórias voláteis, pois perdem o conteúdo quando deixam de receber energia da unidade leitora.",
            "Um CD comum possui, em regra, capacidade maior que um DVD comum porque utiliza trilhas de gravação fisicamente mais largas.",
            "Ambos são mídias ópticas, e um DVD comum oferece, em regra, maior capacidade de armazenamento que um CD comum."
        ],
        "correta": 4,
        "feedbackAcerto": "CD e DVD são mídias ópticas. Em configurações usuais, DVDs possuem capacidade superior à dos CDs.",
        "feedbackErro": "A alternativa correta é: Ambos são mídias ópticas, e um DVD comum oferece, em regra, maior capacidade de armazenamento que um CD comum.\n\nCD e DVD são mídias ópticas. Em configurações usuais, DVDs possuem capacidade superior à dos CDs.",
        "dicaBanca": "A banca pode trocar “óptico”, “magnético” e “flash”. Primeiro identifique a tecnologia; depois compare capacidade.",
        "dica": "A banca pode trocar “óptico”, “magnético” e “flash”. Primeiro identifique a tecnologia; depois compare capacidade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_027",
        "subtopico": "armazenamento",
        "pergunta": "Um disco externo conectado por USB permite leitura e gravação de arquivos. Quanto ao fluxo de dados, ele pode ser entendido como:",
        "alternativas": [
            "Um dispositivo de entrada e saída de dados, pois informações podem ser lidas do dispositivo e gravadas nele.",
            "Um periférico predominantemente de saída, porque gravar um arquivo significa predominantemente enviar dados do computador para o dispositivo.",
            "Um dispositivo de processamento, pois executa as instruções dos programas armazenados sem participação da CPU.",
            "Uma memória volátil, já que a conexão USB fornece a energia necessária para manter os arquivos gravados.",
            "Um periférico predominantemente de entrada, porque dispositivos de armazenamento enviam dados ao computador e não recebe informações do sistema."
        ],
        "correta": 0,
        "feedbackAcerto": "Armazenamento regravável participa dos dois sentidos de transferência: leitura e gravação.",
        "feedbackErro": "A alternativa correta é: Um dispositivo de entrada e saída de dados, pois informações podem ser lidas do dispositivo e gravadas nele.\n\nArmazenamento regravável participa dos dois sentidos de transferência: leitura e gravação.",
        "dicaBanca": "Entrada/saída pode depender da função observada. Discos e pendrives são bons exemplos de dispositivos com fluxo bidirecional.",
        "dica": "Entrada/saída pode depender da função observada. Discos e pendrives são bons exemplos de dispositivos com fluxo bidirecional.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_028",
        "subtopico": "armazenamento",
        "pergunta": "Um usuário faz cópia de segurança em um SSD externo que permanece desconectado após o backup. A vantagem principal dessa prática, em relação a manter a única cópia no SSD interno, é:",
        "alternativas": [
            "O SSD externo deixa de ser armazenamento e passa a funcionar como memória ROM, tornando os arquivos impossíveis de alterar.",
            "A desconexão transforma automaticamente a cópia em backup criptografado, mesmo que nenhum mecanismo de criptografia tenha sido usado.",
            "Manter uma cópia separada reduz o risco de perder simultaneamente original e backup em uma falha local do armazenamento interno.",
            "O procedimento elimina a necessidade de verificar a integridade da cópia, pois dispositivos externos raramente apresentam falhas.",
            "O backup externo aumenta a capacidade da RAM durante o uso e por isso melhora o desempenho dos programas instalados."
        ],
        "correta": 2,
        "feedbackAcerto": "Backup deve ser uma cópia independente do original; separação física reduz riscos comuns de falha única.",
        "feedbackErro": "A alternativa correta é: Manter uma cópia separada reduz o risco de perder simultaneamente original e backup em uma falha local do armazenamento interno.\n\nBackup deve ser uma cópia independente do original; separação física reduz riscos comuns de falha única.",
        "dicaBanca": "Backup não é sinônimo de “arquivo em outra pasta do mesmo disco”. A independência da cópia é o ponto central.",
        "dica": "Backup não é sinônimo de “arquivo em outra pasta do mesmo disco”. A independência da cópia é o ponto central.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_029",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Em uma escola, uma multifuncional digitaliza provas e também imprime relatórios. Quanto à classificação funcional, ela é:",
        "alternativas": [
            "Um periférico predominantemente de saída, porque equipamentos conectados por cabo de dados recebem comandos do computador.",
            "Um equipamento com funções de entrada e saída, pois pode capturar documentos e também produzir material impresso.",
            "Um periférico predominantemente de entrada, porque a digitalização é a operação que determina a classificação de todo o equipamento.",
            "Um dispositivo de armazenamento permanente, pois toda digitalização fica gravada internamente como função principal.",
            "Uma unidade de processamento, pois converte documentos em arquivos sem utilizar o processador do computador em nenhuma etapa."
        ],
        "correta": 1,
        "feedbackAcerto": "Multifuncional combina scanner (entrada) e impressora (saída), podendo reunir outras funções.",
        "feedbackErro": "A alternativa correta é: Um equipamento com funções de entrada e saída, pois pode capturar documentos e também produzir material impresso.\n\nMultifuncional combina scanner (entrada) e impressora (saída), podendo reunir outras funções.",
        "dicaBanca": "Quando o aparelho executa funções diferentes, a classificação pode ser híbrida; não escolha uma única função e ignore as demais.",
        "dica": "Quando o aparelho executa funções diferentes, a classificação pode ser híbrida; não escolha uma única função e ignore as demais.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_030",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Uma tela sensível ao toque permite exibir informações e registrar comandos do usuário. Ela é melhor classificada como:",
        "alternativas": [
            "Unidade de armazenamento, porque mantém temporariamente cada coordenada tocada até o computador ser desligado.",
            "Processador auxiliar, porque interpreta sozinho todos os aplicativos e envia à CPU os resultados finais já processados.",
            "Dispositivo de entrada e saída, porque a tela apresenta dados e a superfície sensível recebe interações.",
            "Dispositivo predominantemente de entrada, pois o usuário toca a superfície e a imagem exibida não constitui saída de dados.",
            "Dispositivo predominantemente de saída, já que qualquer tela é monitor e o toque não altera sua classificação funcional."
        ],
        "correta": 2,
        "feedbackAcerto": "Touchscreen combina a função visual de saída com a captura de toque como entrada.",
        "feedbackErro": "A alternativa correta é: Dispositivo de entrada e saída, porque a tela apresenta dados e a superfície sensível recebe interações.\n\nTouchscreen combina a função visual de saída com a captura de toque como entrada.",
        "dicaBanca": "Questão clássica: classifique pela direção da informação, não pelo nome tradicional do aparelho.",
        "dica": "Questão clássica: classifique pela direção da informação, não pelo nome tradicional do aparelho.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_031",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Qual conjunto contém apenas dispositivos cuja função típica é fornecer dados ao computador?",
        "alternativas": [
            "Caixa de som, webcam e monitor.",
            "Impressora, teclado e projetor.",
            "Teclado, scanner e microfone.",
            "Projetor, impressora e plotter.",
            "Monitor, scanner e caixa de som."
        ],
        "correta": 2,
        "feedbackAcerto": "Teclado, scanner e microfone capturam comandos, imagens ou áudio e os enviam ao sistema.",
        "feedbackErro": "A alternativa correta é: Teclado, scanner e microfone.\n\nTeclado, scanner e microfone capturam comandos, imagens ou áudio e os enviam ao sistema.",
        "dicaBanca": "Misturas de entrada e saída são muito usadas como distratores; avalie item por item da alternativa.",
        "dica": "Misturas de entrada e saída são muito usadas como distratores; avalie item por item da alternativa.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_032",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Em uma videoconferência, webcam e microfone cumprem predominantemente qual função?",
        "alternativas": [
            "Saída de imagem e áudio, pois ambos enviam ao usuário o conteúdo produzido pelo aplicativo de reunião.",
            "Entrada de imagem e áudio para o computador, enquanto monitor e alto-falantes realizam a saída correspondente.",
            "Armazenamento de vídeo e áudio, já que os sinais precisam permanecer gravados nesses dispositivos antes da transmissão.",
            "Processamento gráfico e sonoro, substituindo CPU e placa de som durante toda a chamada.",
            "Entrada e saída simultâneas em cada dispositivo, independentemente de suas funções físicas principais."
        ],
        "correta": 1,
        "feedbackAcerto": "Webcam e microfone capturam sinais; monitor e alto-falantes os apresentam ao usuário.",
        "feedbackErro": "A alternativa correta é: Entrada de imagem e áudio para o computador, enquanto monitor e alto-falantes realizam a saída correspondente.\n\nWebcam e microfone capturam sinais; monitor e alto-falantes os apresentam ao usuário.",
        "dicaBanca": "Em cenários, identifique a direção do fluxo de informação para classificar periféricos.",
        "dica": "Em cenários, identifique a direção do fluxo de informação para classificar periféricos.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_033",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Um leitor de código de barras utilizado em uma biblioteca é classificado, em sua função principal, como:",
        "alternativas": [
            "Periférico de entrada, pois converte o código lido em dados enviados ao sistema.",
            "Periférico de saída, pois projeta o código do livro na memória RAM para posterior processamento.",
            "Processador central, porque interpreta o banco de dados da biblioteca sem participação do computador.",
            "Dispositivo de rede, pois os códigos de barras precisariam ser consultados na Internet antes de serem reconhecidos pelo computador.",
            "Unidade de armazenamento, porque guarda permanentemente a identificação de todos os itens lidos."
        ],
        "correta": 0,
        "feedbackAcerto": "O leitor captura informação do ambiente e a fornece ao sistema, caracterizando entrada.",
        "feedbackErro": "A alternativa correta é: Periférico de entrada, pois converte o código lido em dados enviados ao sistema.\n\nO leitor captura informação do ambiente e a fornece ao sistema, caracterizando entrada.",
        "dicaBanca": "Leitor de código de barras, scanner e webcam têm em comum a captura de dados externos.",
        "dica": "Leitor de código de barras, scanner e webcam têm em comum a captura de dados externos.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_034",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Em uma sala de aula, o computador envia a apresentação para um projetor. Nessa situação, o projetor atua principalmente como:",
        "alternativas": [
            "Dispositivo de armazenamento, pois mantém os slides em memória permanente durante a projeção.",
            "Controlador gráfico dedicado, pois substituiria o processador central e executaria sozinho todo o conteúdo da apresentação.",
            "Periférico híbrido por padrão, porque qualquer conexão HDMI realiza entrada e saída no mesmo aparelho.",
            "Periférico de saída, pois apresenta ao ambiente informações processadas pelo computador.",
            "Periférico de entrada, pois recebe sinal do computador e, por isso, envia dados de volta ao processador."
        ],
        "correta": 3,
        "feedbackAcerto": "Projetor exibe informação, assim como monitor; receber sinal do computador não o torna dispositivo de entrada do usuário.",
        "feedbackErro": "A alternativa correta é: Periférico de saída, pois apresenta ao ambiente informações processadas pelo computador.\n\nProjetor exibe informação, assim como monitor; receber sinal do computador não o torna dispositivo de entrada do usuário.",
        "dicaBanca": "“Receber um cabo” não significa “ser periférico de entrada”. A classificação considera o fluxo de informação para o usuário/sistema.",
        "dica": "“Receber um cabo” não significa “ser periférico de entrada”. A classificação considera o fluxo de informação para o usuário/sistema.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_035",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Uma impressora comum recebe dados digitais do computador e os materializa em papel. Isso a caracteriza como:",
        "alternativas": [
            "Unidade de processamento central, pois interpreta os comandos de impressão e substitui a CPU durante essa tarefa.",
            "Periférico de saída, porque transforma dados processados em uma forma apresentada ao usuário.",
            "Periférico de armazenamento, porque o documento impresso permanece preservado depois que a energia é desligada.",
            "Periférico de entrada, pois o papel entra fisicamente no equipamento antes de receber a impressão.",
            "Dispositivo de comunicação de rede em todos os casos, mesmo quando a impressora não possui interface de rede."
        ],
        "correta": 1,
        "feedbackAcerto": "Impressora é saída porque recebe dados do sistema e apresenta resultado em meio físico.",
        "feedbackErro": "A alternativa correta é: Periférico de saída, porque transforma dados processados em uma forma apresentada ao usuário.\n\nImpressora é saída porque recebe dados do sistema e apresenta resultado em meio físico.",
        "dicaBanca": "Não confunda movimento físico de papel com direção lógica da informação.",
        "dica": "Não confunda movimento físico de papel com direção lógica da informação.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_036",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Um headset combina fones de ouvido e microfone. Considerando o conjunto completo, sua classificação funcional mais adequada é:",
        "alternativas": [
            "Predominantemente saída, porque a função de ouvir teria prioridade sobre a captura de voz na classificação do dispositivo combinado.",
            "Predominantemente entrada, porque o microfone definiria a classificação e os fones seriam tratados como acessório sem função de saída própria.",
            "Armazenamento, pois o headset mantém temporariamente os sons recebidos e enviados durante a chamada.",
            "Processamento, pois o dispositivo executa o aplicativo de comunicação e entrega à CPU o áudio já processado.",
            "Entrada e saída: o microfone captura áudio e os fones reproduzem áudio ao usuário."
        ],
        "correta": 4,
        "feedbackAcerto": "Um único produto pode reunir componentes de entrada e de saída com funções distintas.",
        "feedbackErro": "A alternativa correta é: Entrada e saída: o microfone captura áudio e os fones reproduzem áudio ao usuário.\n\nUm único produto pode reunir componentes de entrada e de saída com funções distintas.",
        "dicaBanca": "Headset é exemplo simples de periférico híbrido; analise cada parte do dispositivo.",
        "dica": "Headset é exemplo simples de periférico híbrido; analise cada parte do dispositivo.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_037",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Qual alternativa diferencia corretamente scanner e impressora?",
        "alternativas": [
            "A diferença funcional se resume ao tipo de cabo utilizado, pois ambos executam a mesma direção de transferência de dados.",
            "A impressora captura o papel como dado de entrada e o scanner devolve a imagem ao usuário como única forma de saída.",
            "O scanner transfere o documento original ao computador sem convertê-lo em dados digitais, enquanto a impressora funciona como uma memória permanente do conteúdo produzido.",
            "O scanner captura uma representação de um documento para o sistema; a impressora produz uma representação física a partir de dados do sistema.",
            "O scanner e a impressora são ambos dispositivos de saída porque os dois trabalham com documentos e imagens."
        ],
        "correta": 3,
        "feedbackAcerto": "Scanner faz entrada de imagem; impressora faz saída em papel.",
        "feedbackErro": "A alternativa correta é: O scanner captura uma representação de um documento para o sistema; a impressora produz uma representação física a partir de dados do sistema.\n\nScanner faz entrada de imagem; impressora faz saída em papel.",
        "dicaBanca": "Questões difíceis podem usar verbos como capturar, digitalizar, reproduzir e imprimir. Observe o sentido do fluxo.",
        "dica": "Questões difíceis podem usar verbos como capturar, digitalizar, reproduzir e imprimir. Observe o sentido do fluxo.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_038",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Um dispositivo externo permite tanto ler quanto gravar arquivos em cartões de memória. Quanto à função de entrada/saída, é correto classificá-lo como:",
        "alternativas": [
            "Processamento, porque o cartão executa os arquivos antes de transferi-los para a memória RAM do computador.",
            "Predominantemente saída, porque a gravação de dados seria considerada a função principal mesmo quando o dispositivo também realiza leitura do cartão.",
            "Periférico de vídeo, pois cartões de memória são usados principalmente em câmeras e armazenam imagens digitais.",
            "Bidirecional, pois o computador pode receber dados do cartão e também enviar dados para gravação.",
            "Predominantemente entrada, porque a expressão “leitor de cartões” impediria a classificação como saída mesmo quando o equipamento também grava dados."
        ],
        "correta": 3,
        "feedbackAcerto": "Se há leitura e escrita, o fluxo é de entrada e saída; o nome comercial “leitor” não elimina a função de gravação.",
        "feedbackErro": "A alternativa correta é: Bidirecional, pois o computador pode receber dados do cartão e também enviar dados para gravação.\n\nSe há leitura e escrita, o fluxo é de entrada e saída; o nome comercial “leitor” não elimina a função de gravação.",
        "dicaBanca": "Em prova, a descrição funcional vale mais que o nome do dispositivo.",
        "dica": "Em prova, a descrição funcional vale mais que o nome do dispositivo.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_039",
        "subtopico": "interfaces_conectores",
        "pergunta": "Sobre a porta USB, qual afirmação é correta?",
        "alternativas": [
            "Pode transportar dados e fornecer energia, mas velocidade e potência dependem da versão, do cabo, da porta e do dispositivo envolvidos.",
            "A interface USB prioriza alimentação elétrica, enquanto a transferência de dados depende de uma segunda interface lógica dedicada, mesmo quando se utiliza um único cabo.",
            "A presença de uma porta USB determina que o dispositivo utilize o mesmo protocolo e a mesma taxa de transferência.",
            "Conectores USB-C garantem por padrão a maior velocidade e a mesma capacidade de energia em qualquer equipamento.",
            "USB foi projetado principalmente para periféricos de entrada e não pode ser usado com armazenamento ou saída de vídeo."
        ],
        "correta": 0,
        "feedbackAcerto": "USB é uma família de padrões; formato de conector e recursos suportados não são sinônimos de uma única velocidade.",
        "feedbackErro": "A alternativa correta é: Pode transportar dados e fornecer energia, mas velocidade e potência dependem da versão, do cabo, da porta e do dispositivo envolvidos.\n\nUSB é uma família de padrões; formato de conector e recursos suportados não são sinônimos de uma única velocidade.",
        "dicaBanca": "Especialmente com USB-C, não deduza recursos só pelo formato físico do conector.",
        "dica": "Especialmente com USB-C, não deduza recursos só pelo formato físico do conector.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_040",
        "subtopico": "interfaces_conectores",
        "pergunta": "Um professor conecta um notebook a um projetor por HDMI. Em condições normais, o HDMI pode transportar:",
        "alternativas": [
            "Dados de rede Ethernet, sem capacidade de transportar imagem.",
            "Vídeo digital, mas não transporta áudio, pois som é função exclusiva de conectores P2 e USB.",
            "Vídeo analógico, exigindo um cabo separado para áudio.",
            "Sinal digital de vídeo e áudio pelo mesmo cabo.",
            "Alimentação elétrica para o projetor, sem qualquer transmissão de conteúdo multimídia."
        ],
        "correta": 3,
        "feedbackAcerto": "HDMI é interface digital multimídia capaz de transportar vídeo e áudio.",
        "feedbackErro": "A alternativa correta é: Sinal digital de vídeo e áudio pelo mesmo cabo.\n\nHDMI é interface digital multimídia capaz de transportar vídeo e áudio.",
        "dicaBanca": "Compare com VGA: HDMI é digital e normalmente leva áudio; VGA é vídeo analógico.",
        "dica": "Compare com VGA: HDMI é digital e normalmente leva áudio; VGA é vídeo analógico.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_041",
        "subtopico": "interfaces_conectores",
        "pergunta": "Em uma comparação entre VGA e HDMI, assinale a alternativa correta.",
        "alternativas": [
            "VGA é utilizado para rede Ethernet e HDMI é destinado à conexão de unidades de armazenamento SATA.",
            "VGA transmite vídeo analógico; HDMI utiliza sinal digital e pode transportar áudio juntamente com vídeo.",
            "HDMI transmite vídeo analógico e VGA transmite vídeo digital, sendo ambos incapazes de transportar áudio.",
            "VGA e HDMI são conectores digitais equivalentes e diferem principalmente pelo formato físico da porta e do cabo utilizado.",
            "HDMI é destinado principalmente a áudio, enquanto VGA combina áudio e vídeo no mesmo cabo."
        ],
        "correta": 1,
        "feedbackAcerto": "VGA é legado analógico; HDMI é digital e integra áudio e vídeo em uso típico.",
        "feedbackErro": "A alternativa correta é: VGA transmite vídeo analógico; HDMI utiliza sinal digital e pode transportar áudio juntamente com vídeo.\n\nVGA é legado analógico; HDMI é digital e integra áudio e vídeo em uso típico.",
        "dicaBanca": "A banca costuma trocar analógico/digital e presença de áudio entre VGA e HDMI.",
        "dica": "A banca costuma trocar analógico/digital e presença de áudio entre VGA e HDMI.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_042",
        "subtopico": "interfaces_conectores",
        "pergunta": "Qual associação entre conector e uso típico está correta?",
        "alternativas": [
            "SATA — conexão externa padrão para teclado e mouse em computadores atuais.",
            "P2 — conexão de rede local com transmissão de pacotes IP por cabo de par trançado.",
            "RJ-45 — conexão de vídeo digital para monitores de alta resolução.",
            "HDMI — conexão principal de discos rígidos internos à placa-mãe.",
            "RJ-45 — conexão de rede Ethernet cabeada."
        ],
        "correta": 4,
        "feedbackAcerto": "RJ-45 é o conector modular comum em redes Ethernet por par trançado.",
        "feedbackErro": "A alternativa correta é: RJ-45 — conexão de rede Ethernet cabeada.\n\nRJ-45 é o conector modular comum em redes Ethernet por par trançado.",
        "dicaBanca": "Associe cada interface à função: RJ-45/rede, HDMI/vídeo-áudio, SATA/armazenamento, P2/áudio.",
        "dica": "Associe cada interface à função: RJ-45/rede, HDMI/vídeo-áudio, SATA/armazenamento, P2/áudio.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_043",
        "subtopico": "interfaces_conectores",
        "pergunta": "Um SSD de 2,5 polegadas e um HD interno tradicional podem utilizar qual interface comum em muitos computadores?",
        "alternativas": [
            "HDMI, por transportar dados digitais de alta velocidade entre a unidade e o monitor.",
            "RJ-45, porque unidades internas se comunicariam com a placa-mãe por meio de uma conexão Ethernet dedicada.",
            "P2, porque discos internos usam o mesmo padrão elétrico de conectores de áudio analógico.",
            "SATA, para comunicação entre a unidade de armazenamento e a placa-mãe.",
            "VGA, já que unidades de armazenamento precisam transmitir blocos de dados por sinal de vídeo."
        ],
        "correta": 3,
        "feedbackAcerto": "SATA é uma interface comum para HDs e SSDs de 2,5 polegadas em muitos PCs.",
        "feedbackErro": "A alternativa correta é: SATA, para comunicação entre a unidade de armazenamento e a placa-mãe.\n\nSATA é uma interface comum para HDs e SSDs de 2,5 polegadas em muitos PCs.",
        "dicaBanca": "Não associe “digital” automaticamente a HDMI: cada interface tem finalidade típica diferente.",
        "dica": "Não associe “digital” automaticamente a HDMI: cada interface tem finalidade típica diferente.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_044",
        "subtopico": "interfaces_conectores",
        "pergunta": "Um conector DisplayPort em um computador é destinado principalmente a:",
        "alternativas": [
            "Transmitir áudio e vídeo digitais para monitores e outros dispositivos compatíveis.",
            "Conectar cabos de rede Ethernet e atribuir endereço IP automaticamente ao computador.",
            "Conectar microfones analógicos e caixas de som utilizando sinal P2.",
            "Instalar módulos de memória RAM diretamente no painel externo do computador.",
            "Fornecer interface interna para HDs SATA instalados dentro do gabinete."
        ],
        "correta": 0,
        "feedbackAcerto": "DisplayPort é interface digital de vídeo e também pode transportar áudio.",
        "feedbackErro": "A alternativa correta é: Transmitir áudio e vídeo digitais para monitores e outros dispositivos compatíveis.\n\nDisplayPort é interface digital de vídeo e também pode transportar áudio.",
        "dicaBanca": "HDMI e DisplayPort podem ter funções próximas; RJ-45, SATA e P2 pertencem a outras categorias.",
        "dica": "HDMI e DisplayPort podem ter funções próximas; RJ-45, SATA e P2 pertencem a outras categorias.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_045",
        "subtopico": "interfaces_conectores",
        "pergunta": "Um conector P2 de 3,5 mm em computadores e celulares tradicionais é associado principalmente a:",
        "alternativas": [
            "Instalação de memória RAM em canais independentes na placa-mãe.",
            "Sinais de áudio analógico para fones, microfones ou combinações compatíveis.",
            "Conexão Ethernet cabeada com atribuição automática de endereços IP.",
            "Comunicação interna entre uma unidade de armazenamento SATA e o processador por meio do conector de áudio.",
            "O conector P2 é empregado para transmissão de vídeo digital de alta resolução entre a placa gráfica e o monitor em computadores com áudio integrado."
        ],
        "correta": 1,
        "feedbackAcerto": "P2 é conector de áudio analógico em usos comuns, com variações de contatos conforme a função.",
        "feedbackErro": "A alternativa correta é: Sinais de áudio analógico para fones, microfones ou combinações compatíveis.\n\nP2 é conector de áudio analógico em usos comuns, com variações de contatos conforme a função.",
        "dicaBanca": "Questões de conectores ficam difíceis quando todas as opções são interfaces reais; associe função e meio de transmissão.",
        "dica": "Questões de conectores ficam difíceis quando todas as opções são interfaces reais; associe função e meio de transmissão.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_046",
        "subtopico": "interfaces_conectores",
        "pergunta": "Um usuário conecta um teclado, um pendrive e um smartphone a portas USB de um computador. Qual característica geral da interface USB explica a diversidade desses usos?",
        "alternativas": [
            "A USB foi projetada como saída de vídeo, e os periféricos de outras categorias dependeriam de conversores internos para se comunicar com o computador.",
            "A USB é destinada ao armazenamento, e dispositivos como teclado funcionam porque gravam os comandos em memória flash antes de enviá-los.",
            "A USB substitui o processador na comunicação com periféricos e, por isso, todos os dispositivos conectados passam a executar instruções da CPU.",
            "A USB serve para alimentação elétrica dos periféricos, enquanto a troca de dados dependeria de uma interface paralela separada instalada no equipamento.",
            "A USB é uma interface de uso geral que pode transportar dados e também fornecer energia, conforme a porta, o padrão e o dispositivo conectado."
        ],
        "correta": 4,
        "feedbackAcerto": "USB é uma interface ampla para conexão de periféricos e pode combinar transmissão de dados e alimentação elétrica, dependendo da implementação.",
        "feedbackErro": "A alternativa correta é: A USB é uma interface de uso geral que pode transportar dados e também fornecer energia, conforme a porta, o padrão e o dispositivo conectado.\n\nUSB é uma interface ampla para conexão de periféricos e pode combinar transmissão de dados e alimentação elétrica, dependendo da implementação.",
        "dicaBanca": "Não associe USB a uma única categoria de periférico: teclado, mouse, armazenamento e vários outros dispositivos podem utilizá-la.",
        "dica": "Não associe USB a uma única categoria de periférico: teclado, mouse, armazenamento e vários outros dispositivos podem utilizá-la.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_047",
        "subtopico": "placa_mae_barramentos",
        "pergunta": "A função central da placa-mãe em um computador é:",
        "alternativas": [
            "Exibir diretamente as imagens ao usuário, atuando como periférico de saída mesmo sem monitor conectado.",
            "Converter corrente alternada da tomada em todas as tensões usadas no computador, função principal do sistema de armazenamento.",
            "Realizar sozinha o processamento de instruções, tornando desnecessária a presença de CPU em computadores de uso geral.",
            "Interligar componentes e fornecer caminhos, conectores e circuitos para sua comunicação e alimentação controlada.",
            "Armazenar permanentemente todos os arquivos do usuário, substituindo HD e SSD como unidade principal de dados."
        ],
        "correta": 3,
        "feedbackAcerto": "A placa-mãe é a plataforma de interconexão dos componentes; não substitui CPU, fonte, monitor ou armazenamento.",
        "feedbackErro": "A alternativa correta é: Interligar componentes e fornecer caminhos, conectores e circuitos para sua comunicação e alimentação controlada.\n\nA placa-mãe é a plataforma de interconexão dos componentes; não substitui CPU, fonte, monitor ou armazenamento.",
        "dicaBanca": "Em questões conceituais, procure a ideia de integração/comunicação entre componentes.",
        "dica": "Em questões conceituais, procure a ideia de integração/comunicação entre componentes.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_048",
        "subtopico": "placa_mae_barramentos",
        "pergunta": "Antes de comprar um processador para atualizar um computador, por que é necessário verificar o soquete e a compatibilidade da placa-mãe?",
        "alternativas": [
            "Porque a compatibilidade depende principalmente do gabinete, e placas-mãe do mesmo tamanho aceitam os mesmos processadores.",
            "Porque processadores atuais funcionam em placas-mãe de diferentes modelos desde que a quantidade de RAM instalada seja suficiente.",
            "Porque o soquete estaria relacionado à capacidade do SSD e teria pouca relação física ou lógica com o processador instalado na placa-mãe.",
            "Porque placas-mãe reconhecem automaticamente CPUs incompatíveis e adaptam os contatos elétricos durante a primeira inicialização.",
            "Porque processadores exigem encaixe e suporte elétrico/lógico compatíveis; possuir tamanho semelhante não garante funcionamento."
        ],
        "correta": 4,
        "feedbackAcerto": "Compatibilidade de CPU envolve soquete, chipset/firmware e suporte do fabricante, não apenas aparência física.",
        "feedbackErro": "A alternativa correta é: Porque processadores exigem encaixe e suporte elétrico/lógico compatíveis; possuir tamanho semelhante não garante funcionamento.\n\nCompatibilidade de CPU envolve soquete, chipset/firmware e suporte do fabricante, não apenas aparência física.",
        "dicaBanca": "Questões de upgrade costumam induzir a pensar que “encaixou = funciona”. Compatibilidade exige mais de um requisito.",
        "dica": "Questões de upgrade costumam induzir a pensar que “encaixou = funciona”. Compatibilidade exige mais de um requisito.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_049",
        "subtopico": "placa_mae_barramentos",
        "pergunta": "O slot PCI Express (PCIe) de uma placa-mãe é usado tipicamente para:",
        "alternativas": [
            "Instalar módulos de memória DDR no mesmo encaixe utilizado pelas placas gráficas.",
            "Conectar monitores analógicos, exercendo a mesma função de uma porta VGA no painel traseiro.",
            "Conectar diretamente o cabo de energia da tomada sem passar pela fonte de alimentação do computador.",
            "Armazenar o firmware UEFI em um cartão removível que precisa permanecer no slot durante o boot.",
            "Instalar placas de expansão, como placas gráficas, de rede ou outras controladoras compatíveis."
        ],
        "correta": 4,
        "feedbackAcerto": "PCIe é barramento/slot de expansão de alta velocidade para dispositivos internos compatíveis.",
        "feedbackErro": "A alternativa correta é: Instalar placas de expansão, como placas gráficas, de rede ou outras controladoras compatíveis.\n\nPCIe é barramento/slot de expansão de alta velocidade para dispositivos internos compatíveis.",
        "dicaBanca": "Diferencie slot de expansão, slot de RAM e conectores externos.",
        "dica": "Diferencie slot de expansão, slot de RAM e conectores externos.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_050",
        "subtopico": "placa_mae_barramentos",
        "pergunta": "Os slots DIMM presentes em placas-mãe de computadores de mesa são destinados principalmente à instalação de:",
        "alternativas": [
            "Placas de vídeo PCI Express, que usam os mesmos contatos e podem ocupar slots DIMM disponíveis disponível.",
            "Módulos de memória RAM compatíveis com a geração e as especificações suportadas pela placa.",
            "Unidades SSD de 2,5 polegadas, conectadas diretamente sem cabos SATA ou alimentação adicional.",
            "Placas de rede externas, substituindo a necessidade de portas Ethernet no painel traseiro.",
            "Processadores, que são encaixados nos slots DIMM antes da instalação do sistema de refrigeração."
        ],
        "correta": 1,
        "feedbackAcerto": "DIMM é o formato comum de módulos de RAM em desktops; placa de vídeo e CPU usam encaixes distintos.",
        "feedbackErro": "A alternativa correta é: Módulos de memória RAM compatíveis com a geração e as especificações suportadas pela placa.\n\nDIMM é o formato comum de módulos de RAM em desktops; placa de vídeo e CPU usam encaixes distintos.",
        "dicaBanca": "Memorize função do encaixe, não aparência: DIMM/RAM, PCIe/expansão, socket/CPU.",
        "dica": "Memorize função do encaixe, não aparência: DIMM/RAM, PCIe/expansão, socket/CPU.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_051",
        "subtopico": "placa_mae_barramentos",
        "pergunta": "A pequena bateria presente em muitas placas-mãe tem como função típica:",
        "alternativas": [
            "A bateria da placa-mãe fornece energia suficiente para manter CPU, RAM e armazenamento ativos durante quedas curtas, funcionando como uma espécie de nobreak interno.",
            "Carregar a bateria principal de notebooks por meio do circuito do relógio da placa-mãe.",
            "Manter o relógio de tempo real e determinadas configurações do firmware quando o computador está sem alimentação principal.",
            "Manter o conteúdo da memória RAM intacto por vários dias para evitar a perda de documentos não salvos.",
            "Alimentar continuamente CPU e memória RAM para que programas continuem executando mesmo com o computador desligado."
        ],
        "correta": 2,
        "feedbackAcerto": "A bateria RTC/CMOS mantém relógio e dados de configuração de baixo consumo; não sustenta CPU nem RAM em uso normal.",
        "feedbackErro": "A alternativa correta é: Manter o relógio de tempo real e determinadas configurações do firmware quando o computador está sem alimentação principal.\n\nA bateria RTC/CMOS mantém relógio e dados de configuração de baixo consumo; não sustenta CPU nem RAM em uso normal.",
        "dicaBanca": "Uma bateria pequena não é “fonte reserva” do computador. Observe a escala de energia e a função específica.",
        "dica": "Uma bateria pequena não é “fonte reserva” do computador. Observe a escala de energia e a função específica.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_052",
        "subtopico": "placa_mae_barramentos",
        "pergunta": "Quando uma placa-mãe possui áudio e rede integrados, isso significa que:",
        "alternativas": [
            "Essas funções estão incorporadas à placa e podem ser usadas sem instalar placas de expansão separadas para as mesmas tarefas.",
            "“Integrado” indica que os componentes são externos e conectados por USB, em vez de fazerem parte do conjunto da placa.",
            "A CPU deixa de ser necessária para processar áudio, rede ou outras tarefas executada pelo sistema operacional.",
            "As portas integradas funcionam principalmente durante o boot e precisam ser substituídas por placas dedicadas após iniciar o sistema.",
            "Os arquivos de áudio e de rede ficam permanentemente armazenados na placa-mãe, dispensando unidade de armazenamento."
        ],
        "correta": 0,
        "feedbackAcerto": "Integração reduz a necessidade de placas adicionais para funções comuns, embora expansões continuem possíveis.",
        "feedbackErro": "A alternativa correta é: Essas funções estão incorporadas à placa e podem ser usadas sem instalar placas de expansão separadas para as mesmas tarefas.\n\nIntegração reduz a necessidade de placas adicionais para funções comuns, embora expansões continuem possíveis.",
        "dicaBanca": "Integrado não significa “mais poderoso” nem “independente da CPU”; significa incorporado ao hardware da placa.",
        "dica": "Integrado não significa “mais poderoso” nem “independente da CPU”; significa incorporado ao hardware da placa.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_053",
        "subtopico": "firmware_boot",
        "pergunta": "Durante a inicialização de um computador, BIOS ou UEFI desempenha qual papel geral?",
        "alternativas": [
            "Inicializar e verificar hardware básico, disponibilizar configurações e encaminhar o processo para o carregamento do sistema operacional.",
            "Executar permanentemente todos os aplicativos do usuário depois que o sistema operacional termina de carregar.",
            "Atuar como antivírus residente responsável por bloquear arquivos maliciosos antes de chegar ao SSD.",
            "Armazenar os documentos pessoais na memória RAM para que permaneçam disponíveis após o desligamento.",
            "BIOS ou UEFI substitui o sistema operacional após o boot, permanecendo responsável por navegação, edição de arquivos e gerenciamento de aplicativos durante toda a sessão."
        ],
        "correta": 0,
        "feedbackAcerto": "Firmware prepara o hardware e inicia a cadeia de boot; depois o sistema operacional assume a gestão normal do computador.",
        "feedbackErro": "A alternativa correta é: Inicializar e verificar hardware básico, disponibilizar configurações e encaminhar o processo para o carregamento do sistema operacional.\n\nFirmware prepara o hardware e inicia a cadeia de boot; depois o sistema operacional assume a gestão normal do computador.",
        "dicaBanca": "BIOS/UEFI não é sistema operacional nem aplicativo de usuário.",
        "dica": "BIOS/UEFI não é sistema operacional nem aplicativo de usuário.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_054",
        "subtopico": "firmware_boot",
        "pergunta": "Um computador tenta iniciar por uma unidade USB antes do SSD interno. Essa preferência é controlada principalmente por:",
        "alternativas": [
            "Frequência do processador, que determina qual unidade de armazenamento será lida primeiro.",
            "Driver de impressora, que define a prioridade dos dispositivos conectados durante o POST.",
            "Resolução configurada no monitor, pois o vídeo precisa identificar a mídia que contém o sistema.",
            "Configuração de ordem de inicialização (boot order) no firmware BIOS/UEFI.",
            "Quantidade de memória RAM instalada, que escolhe automaticamente o dispositivo com maior capacidade."
        ],
        "correta": 3,
        "feedbackAcerto": "A ordem de boot determina quais dispositivos o firmware tenta usar para localizar um carregador de sistema.",
        "feedbackErro": "A alternativa correta é: Configuração de ordem de inicialização (boot order) no firmware BIOS/UEFI.\n\nA ordem de boot determina quais dispositivos o firmware tenta usar para localizar um carregador de sistema.",
        "dicaBanca": "Quando a questão fala “por onde o computador tenta iniciar”, pense em boot order, não em RAM ou CPU.",
        "dica": "Quando a questão fala “por onde o computador tenta iniciar”, pense em boot order, não em RAM ou CPU.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_055",
        "subtopico": "placa_mae_barramentos",
        "pergunta": "Uma placa-mãe possui dois slots de memória DIMM, dos quais apenas um está ocupado. Para instalar outro módulo de RAM, qual cuidado é mais adequado?",
        "alternativas": [
            "Verificar se o módulo é compatível com o tipo de memória e com as especificações suportadas pela placa-mãe antes da instalação.",
            "Escolher qualquer módulo que caiba fisicamente no gabinete, porque o sistema operacional corrige diferenças de padrão e tensão.",
            "Escolher um módulo com capacidade maior que o SSD para que a placa-mãe reconheça a expansão e habilite automaticamente o segundo canal de memória.",
            "Instalar o módulo em um conector SATA, pois slots DIMM são usados principalmente para unidades ópticas internas.",
            "Desativar o processador no firmware antes da instalação, porque a RAM e a CPU não podem permanecer conectadas simultaneamente."
        ],
        "correta": 0,
        "feedbackAcerto": "Expansão de RAM exige compatibilidade com o padrão e os limites suportados pela placa-mãe. O simples fato de existir um slot livre não elimina essa verificação.",
        "feedbackErro": "A alternativa correta é: Verificar se o módulo é compatível com o tipo de memória e com as especificações suportadas pela placa-mãe antes da instalação.\n\nExpansão de RAM exige compatibilidade com o padrão e os limites suportados pela placa-mãe. O simples fato de existir um slot livre não elimina essa verificação.",
        "dicaBanca": "Em hardware básico, compatibilidade física e especificação suportada pela placa-mãe são pontos recorrentes.",
        "dica": "Em hardware básico, compatibilidade física e especificação suportada pela placa-mãe são pontos recorrentes.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_056",
        "subtopico": "placa_mae_barramentos",
        "pergunta": "Em muitos computadores de mesa, conectores SATA presentes na placa-mãe podem ser utilizados para conectar:",
        "alternativas": [
            "módulos de memória RAM instalados diretamente nos slots DIMM da placa-mãe.",
            "unidades de armazenamento, como HDs e SSDs SATA, e determinadas unidades ópticas compatíveis.",
            "monitores digitais ligados diretamente ao processador sem participação de controladores de vídeo.",
            "teclados e mouses que utilizam comunicação serial interna com a CPU por meio do mesmo barramento destinado às unidades de armazenamento.",
            "processadores instalados fora do soquete principal para aumentar o número de núcleos do sistema."
        ],
        "correta": 1,
        "feedbackAcerto": "A interface SATA é tradicionalmente usada para conectar dispositivos de armazenamento e também unidades ópticas compatíveis.",
        "feedbackErro": "A alternativa correta é: unidades de armazenamento, como HDs e SSDs SATA, e determinadas unidades ópticas compatíveis.\n\nA interface SATA é tradicionalmente usada para conectar dispositivos de armazenamento e também unidades ópticas compatíveis.",
        "dicaBanca": "SATA aparece em provas associado principalmente a HD, SSD SATA e unidade óptica, não a RAM ou processador.",
        "dica": "SATA aparece em provas associado principalmente a HD, SSD SATA e unidade óptica, não a RAM ou processador.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_057",
        "subtopico": "firmware_boot",
        "pergunta": "Qual alternativa diferencia corretamente firmware e driver?",
        "alternativas": [
            "Firmware e driver seriam equivalentes e deveriam ficar na mesma pasta do sistema operacional para estabelecer comunicação com o hardware.",
            "Firmware é utilizado principalmente em impressoras e dispositivos externos, enquanto drivers seriam reservados a componentes internos como CPU e memória RAM durante toda a operação do sistema.",
            "Firmware é software de baixo nível armazenado no dispositivo ou plataforma; driver permite ao sistema operacional comunicar-se adequadamente com determinado hardware.",
            "Driver substitui o firmware após a inicialização, apagando o código original do dispositivo para evitar conflitos.",
            "Driver é parte física do dispositivo, enquanto firmware é o cabo usado para conectar o hardware à placa-mãe."
        ],
        "correta": 2,
        "feedbackAcerto": "Firmware reside no equipamento e controla funções de baixo nível; driver faz a ponte entre hardware e sistema operacional.",
        "feedbackErro": "A alternativa correta é: Firmware é software de baixo nível armazenado no dispositivo ou plataforma; driver permite ao sistema operacional comunicar-se adequadamente com determinado hardware.\n\nFirmware reside no equipamento e controla funções de baixo nível; driver faz a ponte entre hardware e sistema operacional.",
        "dicaBanca": "Esse contraste aparece muito em informática básica: ambos são software, mas ocupam papéis diferentes.",
        "dica": "Esse contraste aparece muito em informática básica: ambos são software, mas ocupam papéis diferentes.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_058",
        "subtopico": "firmware_boot",
        "pergunta": "Sobre o firmware de inicialização de um computador, assinale a alternativa correta.",
        "alternativas": [
            "É um aplicativo de edição instalado no HD e executado depois que o usuário entra no Windows para configurar os dispositivos conectados.",
            "É a memória RAM utilizada temporariamente para armazenar arquivos enquanto o computador permanece ligado.",
            "É um periférico de entrada responsável por receber comandos do teclado durante a inicialização do equipamento.",
            "É uma unidade óptica reservada para carregar o sistema operacional quando o SSD não possui espaço disponível para os arquivos de inicialização e configuração do computador.",
            "É software de baixo nível armazenado em memória não volátil, usado para iniciar e configurar aspectos básicos do hardware antes do sistema operacional."
        ],
        "correta": 4,
        "feedbackAcerto": "BIOS/UEFI é firmware: software de baixo nível mantido em memória não volátil e executado antes do sistema operacional.",
        "feedbackErro": "A alternativa correta é: É software de baixo nível armazenado em memória não volátil, usado para iniciar e configurar aspectos básicos do hardware antes do sistema operacional.\n\nBIOS/UEFI é firmware: software de baixo nível mantido em memória não volátil e executado antes do sistema operacional.",
        "dicaBanca": "A questão pode chamar firmware de “software gravado no equipamento”. Não o confunda com aplicativo, RAM ou periférico.",
        "dica": "A questão pode chamar firmware de “software gravado no equipamento”. Não o confunda com aplicativo, RAM ou periférico.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_059",
        "subtopico": "armazenamento",
        "pergunta": "Um computador possui uma unidade gravadora de DVD compatível com DVD-R e DVD-RW. Qual alternativa está correta?",
        "alternativas": [
            "DVD-R e DVD-RW são memórias voláteis e precisam permanecer dentro da unidade para conservar os arquivos gravados.",
            "DVD-RW seria voltado à leitura, enquanto DVD-R corresponderia ao formato destinado a apagar e regravar arquivos em diferentes sessões.",
            "DVD-R é normalmente gravável sem regravação comum, enquanto DVD-RW permite apagar e gravar novamente em equipamento compatível.",
            "DVD-R utiliza armazenamento magnético semelhante ao HD, e DVD-RW utiliza memória flash semelhante ao pendrive.",
            "As siglas R e RW indicariam classes de velocidade de leitura e não teriam relação com gravação ou regravação da mídia óptica."
        ],
        "correta": 2,
        "feedbackAcerto": "Em termos básicos, R indica mídia gravável sem regravação usual, enquanto RW indica mídia regravável.",
        "feedbackErro": "A alternativa correta é: DVD-R é normalmente gravável sem regravação comum, enquanto DVD-RW permite apagar e gravar novamente em equipamento compatível.\n\nEm termos básicos, R indica mídia gravável sem regravação usual, enquanto RW indica mídia regravável.",
        "dicaBanca": "Associe RW a “rewritable”. É uma distinção clássica entre mídias ópticas.",
        "dica": "Associe RW a “rewritable”. É uma distinção clássica entre mídias ópticas.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_060",
        "subtopico": "armazenamento",
        "pergunta": "Um professor precisa entregar arquivos em uma mídia óptica, e o conjunto ultrapassa a capacidade de um CD comum, mas cabe em um DVD comum. Qual conclusão é adequada?",
        "alternativas": [
            "O DVD resolve a situação porque utiliza memória RAM interna que amplia automaticamente a capacidade durante a gravação.",
            "O CD poderia armazenar a mesma quantidade se fosse formatado como mídia magnética antes da gravação dos arquivos.",
            "A diferença decorre de o CD ser volátil e o DVD ser não volátil, independentemente da capacidade nominal das mídias.",
            "O DVD só oferece maior capacidade quando conectado por USB; em unidade óptica interna, CD e DVD armazenam a mesma quantidade.",
            "A escolha é coerente porque DVDs comuns oferecem, em regra, capacidade de armazenamento maior que CDs comuns."
        ],
        "correta": 4,
        "feedbackAcerto": "DVDs comuns possuem capacidade superior à de CDs comuns, embora ambos sejam mídias ópticas não voláteis.",
        "feedbackErro": "A alternativa correta é: A escolha é coerente porque DVDs comuns oferecem, em regra, capacidade de armazenamento maior que CDs comuns.\n\nDVDs comuns possuem capacidade superior à de CDs comuns, embora ambos sejam mídias ópticas não voláteis.",
        "dicaBanca": "Capacidade e tecnologia são conceitos diferentes: CD e DVD são ópticos, mas não possuem a mesma capacidade.",
        "dica": "Capacidade e tecnologia são conceitos diferentes: CD e DVD são ópticos, mas não possuem a mesma capacidade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_061",
        "subtopico": "armazenamento",
        "pergunta": "Assinale a alternativa que relaciona corretamente a tecnologia de armazenamento ao dispositivo.",
        "alternativas": [
            "HD tradicional usa gravação magnética; SSD e pendrive usam memória flash; CD e DVD são mídias ópticas.",
            "HD e DVD usam memória flash, enquanto SSD utiliza pratos magnéticos e CD utiliza memória RAM.",
            "SSD e CD usam gravação magnética, enquanto HD e pendrive dependem de leitura óptica por laser.",
            "Pendrive e DVD seriam memórias voláteis, enquanto HD e SSD manteriam os dados por dependerem de alimentação elétrica após o desligamento.",
            "CD e SSD utilizariam a mesma tecnologia de células flash e se diferenciariam principalmente pelo formato físico e pelo tipo de unidade leitora."
        ],
        "correta": 0,
        "feedbackAcerto": "HD é magnético; SSD e pendrive usam memória flash; CD e DVD são mídias ópticas. Essa classificação separa tecnologias que as bancas costumam misturar.",
        "feedbackErro": "A alternativa correta é: HD tradicional usa gravação magnética; SSD e pendrive usam memória flash; CD e DVD são mídias ópticas.\n\nHD é magnético; SSD e pendrive usam memória flash; CD e DVD são mídias ópticas. Essa classificação separa tecnologias que as bancas costumam misturar.",
        "dicaBanca": "Antes de comparar velocidade ou capacidade, classifique: magnético, flash ou óptico.",
        "dica": "Antes de comparar velocidade ou capacidade, classifique: magnético, flash ou óptico.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_062",
        "subtopico": "processamento_cpu",
        "pergunta": "Durante uma atividade, um aluno afirma que o processador “guarda todos os arquivos do computador”. Qual correção conceitual deve ser feita?",
        "alternativas": [
            "A afirmação está correta porque a CPU possui memória interna suficiente para substituir HD e SSD durante o uso normal.",
            "A CPU executa e coordena instruções; o armazenamento permanente de arquivos é função de dispositivos como HD e SSD.",
            "A CPU armazena arquivos quando o computador está desligado e transfere essa função para a RAM quando o sistema é iniciado.",
            "O processador manteria documentos permanentemente, enquanto HD e SSD seriam usados como memória temporária pelos programas em execução.",
            "A CPU e o SSD exercem a mesma função, diferenciando-se principalmente pela frequência de operação medida em GHz."
        ],
        "correta": 1,
        "feedbackAcerto": "A CPU processa instruções; HD e SSD armazenam arquivos de forma persistente. Misturar processamento com armazenamento é erro conceitual frequente.",
        "feedbackErro": "A alternativa correta é: A CPU executa e coordena instruções; o armazenamento permanente de arquivos é função de dispositivos como HD e SSD.\n\nA CPU processa instruções; HD e SSD armazenam arquivos de forma persistente. Misturar processamento com armazenamento é erro conceitual frequente.",
        "dicaBanca": "Pergunte: o componente executa instruções, mantém dados temporários ou grava dados permanentemente?",
        "dica": "Pergunte: o componente executa instruções, mantém dados temporários ou grava dados permanentemente?",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_063",
        "subtopico": "processamento_cpu",
        "pergunta": "Um processador possui quatro núcleos e frequência nominal de 3 GHz. Qual interpretação desses dados é correta?",
        "alternativas": [
            "O processador teria uma frequência única de 12 GHz, obtida pela soma do clock de 3 GHz de cada um dos quatro núcleos físicos, independentemente da forma como o programa distribui as tarefas.",
            "Os quatro núcleos indicam quatro unidades de armazenamento internas, cada uma com capacidade de 3 GB.",
            "Núcleos e frequência representam características diferentes; não se deve somar 3 GHz de cada núcleo para declarar uma frequência total de 12 GHz.",
            "A frequência de 3 GHz informa que a CPU armazena três bilhões de bytes em cada núcleo durante a execução.",
            "Quatro núcleos significam que qualquer programa será executado em um quarto do tempo, mesmo sem suporte a paralelismo."
        ],
        "correta": 2,
        "feedbackAcerto": "Quantidade de núcleos e frequência são características distintas. Somar a frequência dos núcleos para obter um “clock total” é interpretação inadequada.",
        "feedbackErro": "A alternativa correta é: Núcleos e frequência representam características diferentes; não se deve somar 3 GHz de cada núcleo para declarar uma frequência total de 12 GHz.\n\nQuantidade de núcleos e frequência são características distintas. Somar a frequência dos núcleos para obter um “clock total” é interpretação inadequada.",
        "dicaBanca": "Bancas usam números para induzir contas sem sentido. GHz não deve ser somado entre núcleos como se fosse capacidade.",
        "dica": "Bancas usam números para induzir contas sem sentido. GHz não deve ser somado entre núcleos como se fosse capacidade.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_064",
        "subtopico": "memorias",
        "pergunta": "Após uma queda de energia, um documento que ainda não havia sido salvo foi perdido, mas os arquivos já gravados no SSD permaneceram. Qual conceito explica melhor essa diferença?",
        "alternativas": [
            "A RAM é volátil e perde dados sem alimentação, enquanto o SSD é armazenamento não volátil e preserva dados gravados.",
            "A RAM é não volátil, mas o sistema operacional apaga seu conteúdo por segurança após qualquer interrupção elétrica.",
            "O SSD funciona como memória RAM durante quedas de energia e reconstrói automaticamente todos os dados que estavam abertos.",
            "RAM e SSD são ambos voláteis; a permanência dos arquivos ocorre porque a CPU mantém uma cópia dentro da memória cache.",
            "O SSD conservaria dados porque a bateria da placa-mãe manteria a unidade energizada após o desligamento, preservando as células usadas pelos arquivos."
        ],
        "correta": 0,
        "feedbackAcerto": "RAM é memória volátil; SSD é armazenamento não volátil. Arquivos já salvos permanecem, enquanto dados apenas na memória de trabalho podem ser perdidos.",
        "feedbackErro": "A alternativa correta é: A RAM é volátil e perde dados sem alimentação, enquanto o SSD é armazenamento não volátil e preserva dados gravados.\n\nRAM é memória volátil; SSD é armazenamento não volátil. Arquivos já salvos permanecem, enquanto dados apenas na memória de trabalho podem ser perdidos.",
        "dicaBanca": "Volatilidade é uma diferença central entre RAM e armazenamento permanente.",
        "dica": "Volatilidade é uma diferença central entre RAM e armazenamento permanente.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_065",
        "subtopico": "memorias",
        "pergunta": "Em um computador, memória cache e memória RAM participam do fornecimento de dados ao processador. Qual comparação é adequada?",
        "alternativas": [
            "A RAM é menor e mais rápida que a cache, pois fica fisicamente dentro dos registradores do processador.",
            "A cache é destinada ao armazenamento permanente de documentos, enquanto a RAM guarda o firmware da placa-mãe.",
            "A cache tende a ser menor e mais rápida, aproximando dados frequentes da CPU; a RAM oferece maior capacidade como memória principal.",
            "Cache e RAM seriam nomes diferentes para o mesmo componente, com a escolha do termo variando conforme o sistema operacional e o programa em execução.",
            "A instalação de um SSD faria a RAM assumir a função da cache, pois a memória flash passaria a fornecer dados diretamente à CPU durante a execução."
        ],
        "correta": 2,
        "feedbackAcerto": "A cache é muito rápida e pequena; a RAM é maior e funciona como memória principal. Ambas são diferentes do armazenamento persistente.",
        "feedbackErro": "A alternativa correta é: A cache tende a ser menor e mais rápida, aproximando dados frequentes da CPU; a RAM oferece maior capacidade como memória principal.\n\nA cache é muito rápida e pequena; a RAM é maior e funciona como memória principal. Ambas são diferentes do armazenamento persistente.",
        "dicaBanca": "Compare cache e RAM por proximidade, velocidade e capacidade; não por armazenamento de arquivos.",
        "dica": "Compare cache e RAM por proximidade, velocidade e capacidade; não por armazenamento de arquivos.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_066",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Qual conjunto é formado apenas por dispositivos cuja função predominante é a entrada de dados no computador?",
        "alternativas": [
            "Monitor, projetor e impressora, pois todos recebem informações produzidas pelo sistema.",
            "Teclado, caixa de som e monitor, porque todos participam da interação entre usuário e computador.",
            "Teclado, mouse e scanner, pois enviam comandos ou dados para serem processados pelo computador.",
            "Impressora, scanner e projetor, porque os três trabalham com documentos e imagens digitais.",
            "Monitor, webcam e alto-falante, porque os três lidam com informações visuais ou sonoras do usuário."
        ],
        "correta": 2,
        "feedbackAcerto": "Teclado, mouse e scanner são dispositivos de entrada. Monitor, projetor, impressora e alto-falante são tipicamente de saída.",
        "feedbackErro": "A alternativa correta é: Teclado, mouse e scanner, pois enviam comandos ou dados para serem processados pelo computador.\n\nTeclado, mouse e scanner são dispositivos de entrada. Monitor, projetor, impressora e alto-falante são tipicamente de saída.",
        "dicaBanca": "Classifique pelo sentido predominante do fluxo de dados em relação ao computador.",
        "dica": "Classifique pelo sentido predominante do fluxo de dados em relação ao computador.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_067",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Uma impressora multifuncional imprime documentos e digitaliza páginas. Considerando essas duas funções, ela pode ser classificada como:",
        "alternativas": [
            "dispositivo predominantemente de saída, porque a função de impressão teria precedência sobre o scanner integrado na classificação do equipamento.",
            "dispositivo de entrada e saída, pois recebe dados para imprimir e envia ao computador os dados capturados na digitalização.",
            "dispositivo predominantemente de entrada, porque a digitalização seria suficiente para definir a classificação mesmo quando a mesma unidade também imprime.",
            "unidade de processamento, porque converte documentos físicos em digitais e substitui a CPU durante a digitalização.",
            "dispositivo de armazenamento, porque mantém temporariamente páginas na memória interna antes da impressão."
        ],
        "correta": 1,
        "feedbackAcerto": "A multifuncional reúne funções de saída (impressão) e entrada (scanner), por isso pode ser tratada como dispositivo de entrada e saída.",
        "feedbackErro": "A alternativa correta é: dispositivo de entrada e saída, pois recebe dados para imprimir e envia ao computador os dados capturados na digitalização.\n\nA multifuncional reúne funções de saída (impressão) e entrada (scanner), por isso pode ser tratada como dispositivo de entrada e saída.",
        "dicaBanca": "Quando um equipamento reúne várias funções, analise cada fluxo de dados em vez de classificá-lo por uma única função.",
        "dica": "Quando um equipamento reúne várias funções, analise cada fluxo de dados em vez de classificá-lo por uma única função.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_068",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Durante uma videoconferência, o usuário fala ao microfone, aparece pela webcam e acompanha a reunião pelo monitor e pelos alto-falantes. Qual classificação é correta?",
        "alternativas": [
            "Microfone e alto-falantes são entrada; webcam e monitor são saída, porque áudio e vídeo seguem classificações diferentes.",
            "Todos são dispositivos de entrada, pois participam da captura ou apresentação de informações durante a comunicação.",
            "Todos são dispositivos de saída, pois a videoconferência depende de informações exibidas ao usuário.",
            "Microfone e webcam são entrada; monitor e alto-falantes são saída, considerando o fluxo predominante de dados.",
            "Webcam e monitor são entrada e saída; microfone e alto-falantes são armazenamento temporário de áudio."
        ],
        "correta": 3,
        "feedbackAcerto": "Microfone e webcam capturam dados para o computador; monitor e alto-falantes apresentam dados ao usuário.",
        "feedbackErro": "A alternativa correta é: Microfone e webcam são entrada; monitor e alto-falantes são saída, considerando o fluxo predominante de dados.\n\nMicrofone e webcam capturam dados para o computador; monitor e alto-falantes apresentam dados ao usuário.",
        "dicaBanca": "Em questões de periféricos, imagine a direção da informação: usuário → computador ou computador → usuário.",
        "dica": "Em questões de periféricos, imagine a direção da informação: usuário → computador ou computador → usuário.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_069",
        "subtopico": "perifericos_entrada_saida",
        "pergunta": "Uma tela sensível ao toque exibe informações e também registra toques do usuário. Nesse caso, a classificação mais adequada é:",
        "alternativas": [
            "predominantemente entrada, porque o toque registrado pelo painel teria precedência sobre a imagem exibida na classificação funcional do dispositivo.",
            "entrada e saída, porque a tela apresenta informações e a superfície sensível registra comandos do usuário.",
            "predominantemente saída, porque a presença do monitor determinaria a classificação mesmo quando o equipamento também registra comandos por toque.",
            "armazenamento, porque cada toque precisa ser gravado antes de ser processado pelo sistema operacional.",
            "processamento, porque o painel assume a função da CPU ao interpretar os comandos realizados pelo usuário."
        ],
        "correta": 1,
        "feedbackAcerto": "Uma tela touch reúne saída visual e entrada por toque, portanto desempenha funções de entrada e de saída.",
        "feedbackErro": "A alternativa correta é: entrada e saída, porque a tela apresenta informações e a superfície sensível registra comandos do usuário.\n\nUma tela touch reúne saída visual e entrada por toque, portanto desempenha funções de entrada e de saída.",
        "dicaBanca": "A presença de tela não impede que o mesmo dispositivo também funcione como entrada.",
        "dica": "A presença de tela não impede que o mesmo dispositivo também funcione como entrada.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    },
    {
        "id": "hardware_070",
        "subtopico": "armazenamento",
        "pergunta": "CDs e DVDs gravados permanecem com seus dados mesmo quando estão fora do computador. Do ponto de vista do armazenamento, isso significa que essas mídias são:",
        "alternativas": [
            "não voláteis e ópticas, pois conservam os dados sem alimentação e são lidas por unidade óptica compatível.",
            "voláteis e magnéticas, pois dependem da rotação do disco para manter os dados armazenados após a gravação.",
            "memórias principais, porque substituem a RAM quando inseridas na unidade leitora durante a execução de programas.",
            "dispositivos de processamento, porque a leitura por laser executa diretamente as instruções armazenadas na mídia.",
            "memórias cache removíveis, porque transferem dados para a CPU com latência menor que a memória RAM."
        ],
        "correta": 0,
        "feedbackAcerto": "CD e DVD são mídias ópticas e não voláteis: os dados permanecem sem alimentação elétrica contínua.",
        "feedbackErro": "A alternativa correta é: não voláteis e ópticas, pois conservam os dados sem alimentação e são lidas por unidade óptica compatível.\n\nCD e DVD são mídias ópticas e não voláteis: os dados permanecem sem alimentação elétrica contínua.",
        "dicaBanca": "Não confunda “removível” com “volátil”. Uma mídia pode ser removível e ainda preservar os dados sem energia.",
        "dica": "Não confunda “removível” com “volátil”. Uma mídia pode ser removível e ainda preservar os dados sem energia.",
        "dificuldade": "difícil",
        "tipoQuestao": "contextualizada"
    }
];
