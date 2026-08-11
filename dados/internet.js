// Banco de questões de Internet - Farol do Saber
// 70 questões revisadas em nível de concurso, com distratores fortes e gabarito balanceado.

const internet = [
    {
        "pergunta": "Uma escola utiliza um portal interno para publicar escalas, atas e documentos acessíveis apenas a servidores autenticados. Embora empregue tecnologias típicas da Web, esse ambiente caracteriza-se como:",
        "alternativas": [
            "uma extranet, pois todo serviço com autenticação é necessariamente destinado a usuários externos à organização.",
            "a Internet pública, pois páginas acessadas por navegador deixam de ser consideradas recursos de rede privada.",
            "uma intranet, pois utiliza recursos de rede e Web em ambiente restrito aos usuários autorizados da instituição.",
            "um mecanismo de busca corporativo, pois o acesso a documentos internos depende da indexação das páginas.",
            "uma rede ponto a ponto, pois a existência de usuários autenticados elimina a necessidade de servidores centrais."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Intranet é uma rede privada de uma organização que pode usar tecnologias da Internet, como navegador, HTTP e serviços Web, com acesso controlado.",
        "feedbackErro": "A resposta correta é:\n\numa intranet, pois utiliza recursos de rede e Web em ambiente restrito aos usuários autorizados da instituição.\n\nComentário:\nIntranet é uma rede privada de uma organização que pode usar tecnologias da Internet, como navegador, HTTP e serviços Web, com acesso controlado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca pode descrever um ambiente interno sem usar a palavra “intranet”; observe quem pode acessar e qual é a finalidade da rede.",
        "assunto": "internet",
        "id": "internet_001",
        "subtopico": "conceitos de internet, intranet e extranet"
    },
    {
        "pergunta": "Uma secretaria municipal libera a empresas conveniadas uma área restrita de seu sistema para envio de documentos, sem abrir toda a rede interna. Esse arranjo corresponde mais precisamente a:",
        "alternativas": [
            "uma extranet, porque estende acesso controlado a determinados recursos internos para usuários externos autorizados.",
            "uma intranet aberta, porque qualquer acesso externo transforma a rede interna em serviço público de Internet.",
            "uma rede social corporativa, porque empresas externas passam a integrar automaticamente a comunicação institucional.",
            "um provedor de acesso, porque a secretaria passa a fornecer conexão física à Internet às empresas conveniadas.",
            "um serviço de DNS, porque o controle de usuários externos é realizado pela tradução de nomes em endereços IP."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Extranet é a extensão controlada de recursos de uma organização a parceiros, fornecedores, clientes ou outros usuários externos autorizados.",
        "feedbackErro": "A resposta correta é:\n\numa extranet, porque estende acesso controlado a determinados recursos internos para usuários externos autorizados.\n\nComentário:\nExtranet é a extensão controlada de recursos de uma organização a parceiros, fornecedores, clientes ou outros usuários externos autorizados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Intranet = uso interno; extranet = acesso externo controlado a parte dos recursos da organização.",
        "assunto": "internet",
        "id": "internet_002",
        "subtopico": "conceitos de internet, intranet e extranet"
    },
    {
        "pergunta": "Ao comparar Internet e World Wide Web, um candidato afirma que ambas são sinônimas. A correção conceitual adequada é:",
        "alternativas": [
            "a Internet corresponde aos navegadores e provedores de acesso, enquanto a Web é formada pelos computadores que encaminham pacotes entre redes públicas.",
            "a Web é a infraestrutura física mundial, enquanto a Internet é o conjunto de páginas ligadas por hiperlinks e endereços URL.",
            "a Internet é restrita ao correio eletrônico, enquanto a Web reúne todos os demais serviços disponíveis em redes públicas.",
            "a Web e a Internet designam a mesma estrutura, diferenciando-se apenas pelo fabricante do navegador utilizado no acesso.",
            "a Internet é a infraestrutura global de redes interligadas, enquanto a Web é um dos serviços que funciona sobre essa infraestrutura."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Internet e Web não são sinônimos. A Web é um serviço baseado em páginas e recursos interligados, acessado sobre a infraestrutura da Internet.",
        "feedbackErro": "A resposta correta é:\n\na Internet é a infraestrutura global de redes interligadas, enquanto a Web é um dos serviços que funciona sobre essa infraestrutura.\n\nComentário:\nInternet e Web não são sinônimos. A Web é um serviço baseado em páginas e recursos interligados, acessado sobre a infraestrutura da Internet.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Questão clássica: Internet é a rede; WWW é um serviço da Internet.",
        "assunto": "internet",
        "id": "internet_003",
        "subtopico": "conceitos de internet, intranet e extranet"
    },
    {
        "pergunta": "Durante o envio de um formulário, o usuário seleciona um arquivo que está em seu computador e o transfere para um serviço on-line. Nessa operação ocorre:",
        "alternativas": [
            "download, porque qualquer transferência envolvendo um arquivo da Internet recebe essa denominação, independentemente do sentido.",
            "upload, porque os dados saem do dispositivo do usuário em direção ao servidor ou serviço remoto.",
            "sincronização, porque o arquivo passa a existir no servidor e isso implica manter automaticamente duas cópias equivalentes.",
            "cache, porque o navegador precisa armazenar temporariamente o arquivo antes de enviá-lo para o serviço remoto escolhido.",
            "streaming, porque o conteúdo é transmitido pela rede sem necessidade de permanecer gravado no computador de origem."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Upload é o envio de dados do dispositivo local para um servidor ou serviço remoto. Download é o sentido inverso.",
        "feedbackErro": "A resposta correta é:\n\nupload, porque os dados saem do dispositivo do usuário em direção ao servidor ou serviço remoto.\n\nComentário:\nUpload é o envio de dados do dispositivo local para um servidor ou serviço remoto. Download é o sentido inverso.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em situações práticas, identifique a direção dos dados: para o servidor = upload; para o dispositivo = download.",
        "assunto": "internet",
        "id": "internet_004",
        "subtopico": "conceitos de internet, intranet e extranet"
    },
    {
        "pergunta": "Um professor acessa um arquivo em um site e o salva na pasta Downloads do computador para consultá-lo depois, mesmo sem conexão. O ato de trazer o arquivo para o dispositivo é denominado:",
        "alternativas": [
            "upload, pois o navegador registra localmente o endereço do servidor do qual o arquivo foi obtido.",
            "streaming, pois todo conteúdo obtido pela Internet é reproduzido progressivamente antes de ser armazenado.",
            "sincronização, pois o navegador mantém por padrão o arquivo local idêntico ao que permanece no servidor.",
            "download, pois o conteúdo é transferido de um servidor remoto para o dispositivo do usuário.",
            "compartilhamento, pois o servidor concede ao usuário uma permissão permanente de edição sobre o arquivo recebido."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Download é a transferência de dados de um serviço remoto para o dispositivo local, com possibilidade de armazenamento para uso posterior.",
        "feedbackErro": "A resposta correta é:\n\ndownload, pois o conteúdo é transferido de um servidor remoto para o dispositivo do usuário.\n\nComentário:\nDownload é a transferência de dados de um serviço remoto para o dispositivo local, com possibilidade de armazenamento para uso posterior.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda download com streaming: no download, o arquivo é transferido para o dispositivo.",
        "assunto": "internet",
        "id": "internet_005",
        "subtopico": "conceitos de internet, intranet e extranet"
    },
    {
        "pergunta": "Sobre o papel de um provedor de acesso à Internet, assinale a alternativa mais adequada.",
        "alternativas": [
            "Ele substitui o navegador, interpretando diretamente todas as páginas e aplicativos Web utilizados pelo assinante.",
            "Ele funciona como mecanismo de busca, classificando resultados e definindo quais páginas podem aparecer na Web.",
            "Ele fornece ao usuário meios de conexão à Internet e pode operar infraestrutura e serviços associados ao acesso.",
            "Ele registra os domínios da Internet mundial e determina o conteúdo que cada endereço poderá disponibilizar ao público.",
            "Ele armazena em seu computador local todos os arquivos acessados para permitir navegação posterior sem conexão externa."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! O provedor de acesso oferece conectividade à Internet por diferentes tecnologias e pode manter serviços e infraestrutura necessários a essa conexão.",
        "feedbackErro": "A resposta correta é:\n\nEle fornece ao usuário meios de conexão à Internet e pode operar infraestrutura e serviços associados ao acesso.\n\nComentário:\nO provedor de acesso oferece conectividade à Internet por diferentes tecnologias e pode manter serviços e infraestrutura necessários a essa conexão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Provedor de acesso fornece conectividade; navegador acessa a Web; mecanismo de busca localiza conteúdo.",
        "assunto": "internet",
        "id": "internet_006",
        "subtopico": "conceitos de internet, intranet e extranet"
    },
    {
        "pergunta": "Em uma página Web, um texto destacado permite que o usuário vá diretamente para outra página ou recurso ao clicar nele. Esse elemento é um:",
        "alternativas": [
            "hiperlink, que associa um elemento da página a outro recurso ou endereço acessível pelo navegador.",
            "cookie, que mantém preferências e informações de sessão vinculadas à navegação do usuário naquele serviço.",
            "cache, que guarda cópias locais de recursos para reduzir o tempo de carregamento em acessos posteriores.",
            "certificado digital, que participa da autenticação do servidor e da proteção de conexões HTTPS.",
            "mecanismo de busca, que indexa páginas e seleciona resultados conforme os termos informados pelo usuário."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Hiperlinks conectam páginas, documentos, seções ou outros recursos e são um elemento central da navegação na Web.",
        "feedbackErro": "A resposta correta é:\n\nhiperlink, que associa um elemento da página a outro recurso ou endereço acessível pelo navegador.\n\nComentário:\nHiperlinks conectam páginas, documentos, seções ou outros recursos e são um elemento central da navegação na Web.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca pode descrever a função sem usar “link”; procure a ideia de navegação entre recursos.",
        "assunto": "internet",
        "id": "internet_007",
        "subtopico": "web, páginas e aplicações"
    },
    {
        "pergunta": "Um candidato confunde navegador Web com mecanismo de busca. Qual alternativa diferencia corretamente esses recursos?",
        "alternativas": [
            "O navegador pesquisa páginas armazenadas na Internet, enquanto o mecanismo de busca interpreta HTML e executa scripts localmente.",
            "O navegador fornece o acesso físico à Internet, enquanto o mecanismo de busca substitui o provedor quando a conexão está ativa.",
            "O mecanismo de busca é instalado como sistema operacional, enquanto o navegador funciona como protocolo de comunicação da Web.",
            "O navegador e o mecanismo de busca executam a mesma função, distinguindo-se pela empresa responsável e pela página inicial escolhida pelo usuário.",
            "O navegador é o programa usado para acessar e exibir recursos da Web; o mecanismo de busca é um serviço que localiza conteúdo indexado."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Chrome, Edge e Firefox são navegadores; Google, Bing e outros mecanismos de busca são serviços acessados normalmente por um navegador.",
        "feedbackErro": "A resposta correta é:\n\nO navegador é o programa usado para acessar e exibir recursos da Web; o mecanismo de busca é um serviço que localiza conteúdo indexado.\n\nComentário:\nChrome, Edge e Firefox são navegadores; Google, Bing e outros mecanismos de busca são serviços acessados normalmente por um navegador.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda o programa que abre páginas com o serviço usado para pesquisar páginas.",
        "assunto": "internet",
        "id": "internet_008",
        "subtopico": "web, páginas e aplicações"
    },
    {
        "pergunta": "Considere o endereço https://portal.exemplo.gov.br/concursos/edital.pdf. Nesse endereço, o trecho “https” identifica:",
        "alternativas": [
            "o domínio de nível mais alto responsável por identificar o país em que o servidor está instalado fisicamente.",
            "o esquema ou protocolo de acesso utilizado para a comunicação com o recurso indicado na URL.",
            "o caminho interno do arquivo no servidor, que determina a pasta em que o documento foi salvo pelo usuário.",
            "o nome do navegador que deve ser usado para abrir o arquivo, definido pelo responsável pelo domínio consultado.",
            "a extensão do documento solicitado, que informa ao servidor o aplicativo local que fará a leitura do conteúdo."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! No início da URL, https indica o esquema de acesso. O domínio vem depois, seguido pelo caminho e, quando houver, pelo nome do recurso.",
        "feedbackErro": "A resposta correta é:\n\no esquema ou protocolo de acesso utilizado para a comunicação com o recurso indicado na URL.\n\nComentário:\nNo início da URL, https indica o esquema de acesso. O domínio vem depois, seguido pelo caminho e, quando houver, pelo nome do recurso.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em questões de URL, separe protocolo/esquema, domínio e caminho.",
        "assunto": "internet",
        "id": "internet_009",
        "subtopico": "protocolos web, URL e HTTP"
    },
    {
        "pergunta": "No endereço https://www.exemplo.org/material/aula.html, qual parte identifica de forma mais direta o domínio usado para localizar o serviço?",
        "alternativas": [
            "https://",
            "material/aula.html",
            "aula.html",
            "www.exemplo.org",
            ".html/material"
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! O domínio é a identificação textual do serviço na rede; no exemplo, www.exemplo.org. O restante representa esquema e caminho do recurso.",
        "feedbackErro": "A resposta correta é:\n\nwww.exemplo.org\n\nComentário:\nO domínio é a identificação textual do serviço na rede; no exemplo, www.exemplo.org. O restante representa esquema e caminho do recurso.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Domínio não é a URL inteira: procure o nome que identifica o site/host antes do caminho.",
        "assunto": "internet",
        "id": "internet_010",
        "subtopico": "protocolos web, URL e HTTP"
    },
    {
        "pergunta": "Um site funciona normalmente em https://portal.exemplo.gov.br, mas o endereço https://portal.exemplo.gov.br/arquivo-inexistente.pdf retorna o código 404. A interpretação mais adequada é:",
        "alternativas": [
            "a conexão com a Internet foi interrompida antes que o navegador pudesse localizar o servidor responsável pelo domínio.",
            "o certificado HTTPS foi necessariamente revogado, impedindo que o navegador estabeleça qualquer comunicação com o servidor.",
            "o servidor foi alcançado, porém o recurso solicitado não foi localizado naquele endereço.",
            "o usuário não possui permissão para visualizar o recurso, situação que corresponde de forma típica ao código HTTP 500.",
            "o servidor concluiu a solicitação corretamente e apenas informa que o arquivo foi movido para o cache local do navegador."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! O código HTTP 404 indica recurso não encontrado. O servidor respondeu, mas não encontrou o conteúdo solicitado naquele caminho.",
        "feedbackErro": "A resposta correta é:\n\no servidor foi alcançado, porém o recurso solicitado não foi localizado naquele endereço.\n\nComentário:\nO código HTTP 404 indica recurso não encontrado. O servidor respondeu, mas não encontrou o conteúdo solicitado naquele caminho.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "404 não significa ausência de Internet; significa “recurso não encontrado”.",
        "assunto": "internet",
        "id": "internet_011",
        "subtopico": "protocolos web, URL e HTTP"
    },
    {
        "pergunta": "Ao acessar uma área restrita, o servidor recebe a solicitação, reconhece o recurso, mas recusa o acesso por falta de autorização. Entre códigos HTTP comuns em provas, o mais compatível é:",
        "alternativas": [
            "403, associado à recusa de acesso ao recurso solicitado.",
            "200, associado ao processamento bem-sucedido da solicitação e entrega normal do recurso ao cliente.",
            "301, associado ao redirecionamento permanente do endereço solicitado para outra localização definida pelo servidor.",
            "404, associado à inexistência ou não localização do recurso solicitado no endereço informado pelo cliente.",
            "500, associado a falha interna do servidor durante o processamento da requisição recebida do navegador."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O código 403 é usado quando o servidor entende a solicitação, mas nega o acesso. Ele se diferencia de 404 e dos erros 5xx.",
        "feedbackErro": "A resposta correta é:\n\n403, associado à recusa de acesso ao recurso solicitado.\n\nComentário:\nO código 403 é usado quando o servidor entende a solicitação, mas nega o acesso. Ele se diferencia de 404 e dos erros 5xx.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em códigos HTTP básicos: 2xx sucesso, 3xx redirecionamento, 4xx problema na solicitação/acesso, 5xx falha no servidor.",
        "assunto": "internet",
        "id": "internet_012",
        "subtopico": "protocolos web, URL e HTTP"
    },
    {
        "pergunta": "Em determinada página, o navegador exibe erro HTTP 500 após o envio de uma solicitação válida. Esse código indica, de modo geral:",
        "alternativas": [
            "um redirecionamento permanente para outra URL previamente cadastrada no mecanismo de busca.",
            "um bloqueio local provocado pelo cache do navegador, sem que a solicitação tenha alcançado o servidor.",
            "um recurso inexistente no endereço informado, situação classificada normalmente como resposta HTTP 404.",
            "uma resposta de sucesso cujo conteúdo ainda não foi exibido por depender da conclusão de um download local.",
            "uma falha interna no servidor ao processar a requisição recebida."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Códigos 5xx indicam erros do lado do servidor. O 500 é uma falha interna genérica no processamento da solicitação.",
        "feedbackErro": "A resposta correta é:\n\numa falha interna no servidor ao processar a requisição recebida.\n\nComentário:\nCódigos 5xx indicam erros do lado do servidor. O 500 é uma falha interna genérica no processamento da solicitação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não associe 500 a “Internet caiu”; a numeração indica resposta do servidor.",
        "assunto": "internet",
        "id": "internet_013",
        "subtopico": "protocolos web, URL e HTTP"
    },
    {
        "pergunta": "Ao comparar HTTP e HTTPS, qual afirmação é tecnicamente mais adequada para uma questão de Informática Básica?",
        "alternativas": [
            "HTTPS impede que o usuário acesse páginas fraudulentas, porque o certificado comprova a legitimidade comercial do conteúdo e a identidade institucional do responsável.",
            "HTTPS combina HTTP com proteção criptográfica do canal, normalmente por TLS, reduzindo riscos de interceptação e alteração dos dados em trânsito.",
            "HTTP e HTTPS oferecem a mesma proteção criptográfica, sendo a letra S apenas uma indicação de que a página possui conteúdo dinâmico.",
            "HTTPS substitui os mecanismos de autenticação do site, de modo que senhas e outros controles de acesso deixam de ser necessários.",
            "HTTP é destinado a páginas públicas, enquanto HTTPS pode ser usado apenas em serviços bancários e sistemas governamentais autenticados."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! HTTPS protege a comunicação por criptografia e autenticação do servidor via certificado. Isso não transforma automaticamente o site em confiável.",
        "feedbackErro": "A resposta correta é:\n\nHTTPS combina HTTP com proteção criptográfica do canal, normalmente por TLS, reduzindo riscos de interceptação e alteração dos dados em trânsito.\n\nComentário:\nHTTPS protege a comunicação por criptografia e autenticação do servidor via certificado. Isso não transforma automaticamente o site em confiável.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "O cadeado fala sobre a conexão; não garante sozinho a honestidade do conteúdo.",
        "assunto": "internet",
        "id": "internet_014",
        "subtopico": "protocolos web, URL e HTTP"
    },
    {
        "pergunta": "Quando um usuário digita um nome como portal.exemplo.gov.br e o navegador precisa descobrir o endereço IP correspondente, o serviço mais diretamente envolvido é:",
        "alternativas": [
            "SMTP, responsável por transportar mensagens de correio eletrônico entre clientes e servidores de envio.",
            "HTTP, responsável por definir a comunicação de páginas e recursos Web depois que o destino já pode ser alcançado.",
            "IMAP, responsável por sincronizar mensagens e pastas de uma conta de correio eletrônico com o servidor.",
            "DNS, responsável pela resolução de nomes de domínio em endereços utilizados na comunicação de rede.",
            "FTP, responsável pela transferência de arquivos entre sistemas que oferecem esse tipo de serviço."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! DNS traduz nomes de domínio para endereços IP, permitindo que o cliente localize o servidor associado ao nome informado.",
        "feedbackErro": "A resposta correta é:\n\nDNS, responsável pela resolução de nomes de domínio em endereços utilizados na comunicação de rede.\n\nComentário:\nDNS traduz nomes de domínio para endereços IP, permitindo que o cliente localize o servidor associado ao nome informado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "DNS resolve nomes; HTTP/HTTPS transporta recursos Web; SMTP/IMAP estão ligados ao e-mail.",
        "assunto": "internet",
        "id": "internet_015",
        "subtopico": "domínios, DNS e infraestrutura"
    },
    {
        "pergunta": "Um usuário informa corretamente o endereço IP de um servidor, mas a navegação pelo nome do domínio falha em vários sites. Esse sintoma sugere, entre as hipóteses básicas, problema relacionado a:",
        "alternativas": [
            "armazenamento em cache, pois a ausência de arquivos temporários impede que qualquer endereço IP seja alcançado pela rede.",
            "campo CCO do correio eletrônico, pois mensagens ocultas podem bloquear a resolução dos domínios usados no navegador.",
            "resolução DNS, pois a tradução dos nomes para endereços pode estar indisponível mesmo com conectividade IP existente.",
            "compactação de arquivos, pois páginas não compactadas deixam de ser reconhecidas por servidores conectados à Internet.",
            "histórico do navegador, pois a exclusão de páginas visitadas remove também os endereços IP dos servidores remotos."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Quando o acesso por IP funciona e por nome falha, DNS é uma hipótese importante, pois sua função é resolver nomes em endereços.",
        "feedbackErro": "A resposta correta é:\n\nresolução DNS, pois a tradução dos nomes para endereços pode estar indisponível mesmo com conectividade IP existente.\n\nComentário:\nQuando o acesso por IP funciona e por nome falha, DNS é uma hipótese importante, pois sua função é resolver nomes em endereços.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Problema de DNS pode coexistir com conexão ativa à rede.",
        "assunto": "internet",
        "id": "internet_016",
        "subtopico": "domínios, DNS e infraestrutura"
    },
    {
        "pergunta": "Um site abre com informações antigas, embora outros usuários já visualizem a versão atualizada. Entre as ações iniciais no navegador, faz sentido:",
        "alternativas": [
            "forçar o recarregamento da página ou limpar o cache relacionado, pois recursos locais desatualizados podem afetar a exibição.",
            "apagar os favoritos, pois endereços salvos impedem o navegador de solicitar versões novas dos recursos ao servidor remoto.",
            "desativar o DNS do computador, pois a resolução de nomes é responsável por manter cópias antigas de imagens e folhas de estilo.",
            "remover a conta de e-mail do navegador, pois mensagens sincronizadas podem substituir arquivos atuais recebidos pela página Web.",
            "trocar o endereço IP por um endereço privado diferente, pois o cache é armazenado no roteador e não no navegador do usuário."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O cache mantém cópias locais de recursos. Quando está desatualizado, recarregar ignorando o cache ou limpá-lo pode corrigir a exibição.",
        "feedbackErro": "A resposta correta é:\n\nforçar o recarregamento da página ou limpar o cache relacionado, pois recursos locais desatualizados podem afetar a exibição.\n\nComentário:\nO cache mantém cópias locais de recursos. Quando está desatualizado, recarregar ignorando o cache ou limpá-lo pode corrigir a exibição.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Cache melhora desempenho, mas pode fazer o navegador reutilizar conteúdo antigo.",
        "assunto": "internet",
        "id": "internet_017",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Ao apagar apenas o cache do navegador, qual efeito é mais compatível com essa operação?",
        "alternativas": [
            "todas as senhas das contas on-line são necessariamente excluídas junto com os arquivos temporários do navegador.",
            "os certificados HTTPS dos sites deixam de ser válidos, exigindo nova emissão antes de qualquer acesso seguro.",
            "os endereços salvos nos favoritos são apagados e não podem ser recuperados pelo perfil sincronizado do usuário.",
            "as mensagens armazenadas em servidores de e-mail são removidas porque o cache controla o conteúdo das caixas postais.",
            "recursos temporários de páginas podem ser removidos e precisar ser baixados novamente em acessos posteriores."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Limpar cache remove cópias temporárias usadas no carregamento. Senhas, favoritos e outros dados têm controles próprios.",
        "feedbackErro": "A resposta correta é:\n\nrecursos temporários de páginas podem ser removidos e precisar ser baixados novamente em acessos posteriores.\n\nComentário:\nLimpar cache remove cópias temporárias usadas no carregamento. Senhas, favoritos e outros dados têm controles próprios.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A banca costuma misturar cache, cookies, histórico, favoritos e senhas; cada item tem função diferente.",
        "assunto": "internet",
        "id": "internet_018",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Um portal mantém o usuário autenticado durante a navegação e grava preferências do site no navegador. O recurso mais associado a essas finalidades é:",
        "alternativas": [
            "favorito, que registra endereços escolhidos pelo usuário e envia automaticamente as credenciais para o servidor.",
            "cookie, que pode armazenar identificadores de sessão e preferências vinculadas ao uso do site.",
            "cache, que armazena recursos de páginas e funciona como banco de senhas para autenticação em serviços remotos.",
            "histórico, que guarda páginas visitadas e substitui os mecanismos de sessão utilizados pelos aplicativos Web.",
            "certificado digital, que registra preferências locais e mantém a sessão do usuário mesmo depois de trocar de navegador."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Cookies podem guardar identificadores de sessão, preferências e outros pequenos dados usados pelos sites durante a navegação.",
        "feedbackErro": "A resposta correta é:\n\ncookie, que pode armazenar identificadores de sessão e preferências vinculadas ao uso do site.\n\nComentário:\nCookies podem guardar identificadores de sessão, preferências e outros pequenos dados usados pelos sites durante a navegação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Cookie não é cache: cookie guarda dados de estado/preferência; cache guarda cópias de recursos.",
        "assunto": "internet",
        "id": "internet_019",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Sobre cookies de terceiros, a afirmação mais adequada é:",
        "alternativas": [
            "são criados pelo sistema operacional para substituir certificados digitais e autenticar automaticamente páginas acessadas pelo usuário durante a sessão de navegação.",
            "existem apenas quando o navegador está em modo privado e são apagados quando o usuário retorna ao modo de navegação comum.",
            "correspondem aos arquivos temporários de imagens e scripts que o navegador armazena para acelerar o carregamento das páginas visitadas.",
            "podem ser definidos por domínios diferentes daquele acessado diretamente e são frequentemente associados a publicidade e rastreamento entre sites.",
            "são mensagens enviadas por servidores de e-mail ao navegador para informar que um novo anexo foi recebido na caixa de entrada."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Cookies de terceiros vêm de domínios diferentes do site acessado diretamente e podem ser usados para medição, anúncios e rastreamento.",
        "feedbackErro": "A resposta correta é:\n\npodem ser definidos por domínios diferentes daquele acessado diretamente e são frequentemente associados a publicidade e rastreamento entre sites.\n\nComentário:\nCookies de terceiros vêm de domínios diferentes do site acessado diretamente e podem ser usados para medição, anúncios e rastreamento.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Primeira parte = domínio visitado; terceira parte = outro domínio carregado na página.",
        "assunto": "internet",
        "id": "internet_020",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Ao usar uma janela de navegação privada em um computador compartilhado, qual expectativa é razoável?",
        "alternativas": [
            "impedir que o provedor de Internet e administradores da rede identifiquem os destinos acessados durante aquela sessão de navegação.",
            "ocultar o endereço IP do dispositivo de todos os sites, de modo que o usuário passe a navegar de forma anônima na Internet pública.",
            "reduzir o armazenamento local de histórico e dados de sessão após o fechamento da janela, sem tornar a navegação invisível para a rede.",
            "dispensar a necessidade de encerrar sessões em serviços acessados, pois o modo privado bloqueia qualquer uso posterior das credenciais salvas localmente.",
            "substituir o uso de HTTPS, pois os dados transmitidos na janela privada são criptografados independentemente do protocolo do site."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Modo privado reduz rastros no dispositivo, mas não esconde a atividade de sites, provedor, escola, empresa ou outros controles de rede.",
        "feedbackErro": "A resposta correta é:\n\nreduzir o armazenamento local de histórico e dados de sessão após o fechamento da janela, sem tornar a navegação invisível para a rede.\n\nComentário:\nModo privado reduz rastros no dispositivo, mas não esconde a atividade de sites, provedor, escola, empresa ou outros controles de rede.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Privado no navegador não significa anônimo na Internet.",
        "assunto": "internet",
        "id": "internet_021",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Um usuário deseja guardar o endereço de uma página para acessá-la rapidamente em outra ocasião, sem salvar uma cópia do conteúdo. O recurso apropriado é:",
        "alternativas": [
            "favorito, que armazena uma referência ao endereço da página para acesso posterior.",
            "cache, que cria uma cópia permanente e garante que a página continuará disponível mesmo depois de removida do servidor.",
            "cookie, que registra o endereço como preferência e sincroniza automaticamente todo o conteúdo da página com o dispositivo.",
            "download, que mantém apenas o endereço remoto do recurso sem transferir qualquer dado para o armazenamento local.",
            "histórico, que fixa permanentemente a página escolhida e impede que sua referência seja removida pela limpeza de dados."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Favoritos guardam referências a endereços escolhidos pelo usuário; não equivalem a salvar uma cópia da página.",
        "feedbackErro": "A resposta correta é:\n\nfavorito, que armazena uma referência ao endereço da página para acesso posterior.\n\nComentário:\nFavoritos guardam referências a endereços escolhidos pelo usuário; não equivalem a salvar uma cópia da página.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Favorito = endereço salvo; download = arquivo transferido; cache = cópia temporária.",
        "assunto": "internet",
        "id": "internet_022",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Ao instalar uma extensão de navegador que solicita acesso a “ler e alterar dados em todos os sites”, a atitude mais prudente é:",
        "alternativas": [
            "aceitar a permissão porque extensões publicadas em lojas de navegadores não conseguem acessar conteúdo exibido em páginas Web.",
            "negar apenas se a extensão também solicitar acesso ao histórico, pois leitura de páginas não envolve riscos à privacidade do usuário.",
            "desativar o HTTPS durante a instalação, pois a criptografia impede que o navegador verifique corretamente as permissões solicitadas.",
            "limpar os cookies depois de instalar a extensão, pois isso remove de forma automática qualquer permissão concedida ao complemento.",
            "avaliar a necessidade dessas permissões, a origem da extensão e sua reputação antes de conceder acesso tão amplo."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Extensões podem ter permissões amplas. O usuário deve verificar procedência, necessidade e escopo antes de conceder acesso.",
        "feedbackErro": "A resposta correta é:\n\navaliar a necessidade dessas permissões, a origem da extensão e sua reputação antes de conceder acesso tão amplo.\n\nComentário:\nExtensões podem ter permissões amplas. O usuário deve verificar procedência, necessidade e escopo antes de conceder acesso.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em provas modernas, atenção às permissões: extensão é software e pode acessar dados conforme o que for autorizado.",
        "assunto": "internet",
        "id": "internet_023",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Em um computador público, o navegador oferece salvar a senha de um sistema institucional. Considerando boas práticas de uso, é mais adequado:",
        "alternativas": [
            "salvar a senha e usar navegação privada depois, pois a janela privada apaga automaticamente as credenciais gravadas anteriormente no navegador.",
            "recusar o salvamento da senha e encerrar a sessão ao terminar, evitando que credenciais fiquem disponíveis no equipamento compartilhado.",
            "salvar a senha desde que o site use HTTPS, pois a criptografia do canal impede que outro usuário do computador acesse dados locais.",
            "manter a sessão aberta e apagar o histórico, pois o histórico é o único recurso que permite reutilizar uma conta em acesso posterior.",
            "alterar o mecanismo de busca padrão, pois isso impede que senhas armazenadas sejam preenchidas em páginas abertas por outro usuário."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Em equipamentos compartilhados, não é recomendável salvar credenciais. Também é importante sair da conta ao encerrar o uso.",
        "feedbackErro": "A resposta correta é:\n\nrecusar o salvamento da senha e encerrar a sessão ao terminar, evitando que credenciais fiquem disponíveis no equipamento compartilhado.\n\nComentário:\nEm equipamentos compartilhados, não é recomendável salvar credenciais. Também é importante sair da conta ao encerrar o uso.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "HTTPS protege o tráfego, não resolve o risco de credenciais armazenadas localmente em computador compartilhado.",
        "assunto": "internet",
        "id": "internet_024",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Depois de iniciar um download pelo navegador, o usuário fecha a aba da página de origem, mas o arquivo continua sendo transferido. Isso ocorre porque:",
        "alternativas": [
            "o arquivo passa a ser enviado pelo protocolo de e-mail e deixa de depender do navegador assim que a primeira parte é recebida.",
            "o sistema converte automaticamente o download em streaming, mantendo o fluxo mesmo depois de o navegador ser encerrado por completo.",
            "o conteúdo é transferido pelo mecanismo de busca, que continua a cópia em segundo plano até concluir a indexação do arquivo.",
            "o gerenciador de downloads do navegador pode manter a transferência ativa independentemente da aba que iniciou a operação.",
            "o cache do navegador contém necessariamente o arquivo completo antes do usuário clicar no botão que inicia a transferência."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Navegadores costumam gerenciar downloads em processo próprio da aplicação, por isso fechar apenas a aba de origem não necessariamente cancela a transferência.",
        "feedbackErro": "A resposta correta é:\n\no gerenciador de downloads do navegador pode manter a transferência ativa independentemente da aba que iniciou a operação.\n\nComentário:\nNavegadores costumam gerenciar downloads em processo próprio da aplicação, por isso fechar apenas a aba de origem não necessariamente cancela a transferência.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Aba e download não são a mesma coisa; a transferência pode continuar no gerenciador do navegador.",
        "assunto": "internet",
        "id": "internet_025",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Um navegador está configurado para sincronizar favoritos entre o computador e o celular do mesmo usuário. Nessa situação, sincronização significa:",
        "alternativas": [
            "criar um backup imutável que preserva todas as versões anteriores dos favoritos mesmo quando eles são apagados em um dos dispositivos.",
            "copiar todo o conteúdo dos sites favoritos para armazenamento local, permitindo abrir qualquer página quando não houver conexão com a Internet.",
            "manter dados compatíveis do perfil atualizados entre dispositivos vinculados à mesma conta, conforme as opções escolhidas.",
            "compartilhar automaticamente os favoritos com outros usuários que utilizam o mesmo navegador, ainda que possuam contas diferentes.",
            "transformar os endereços salvos em resultados prioritários do mecanismo de busca, alterando a indexação pública das páginas correspondentes."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Sincronização replica dados do perfil entre dispositivos conectados. Alterações podem se propagar, por isso ela não equivale a backup imutável.",
        "feedbackErro": "A resposta correta é:\n\nmanter dados compatíveis do perfil atualizados entre dispositivos vinculados à mesma conta, conforme as opções escolhidas.\n\nComentário:\nSincronização replica dados do perfil entre dispositivos conectados. Alterações podem se propagar, por isso ela não equivale a backup imutável.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Sincronizar significa manter estados atualizados; backup busca preservar cópias recuperáveis.",
        "assunto": "internet",
        "id": "internet_026",
        "subtopico": "navegadores, cookies e cache"
    },
    {
        "pergunta": "Em um cliente de e-mail configurado com IMAP, uma característica esperada é:",
        "alternativas": [
            "sincronizar mensagens e pastas com o servidor, refletindo em diferentes dispositivos muitas das alterações realizadas na conta.",
            "transferir mensagens para o computador e removê-las do servidor em qualquer configuração, impedindo consulta posterior por outros dispositivos.",
            "ser utilizado no envio de mensagens para outros servidores, substituindo o SMTP quando a conta estiver aberta em mais de um dispositivo.",
            "funcionar apenas por navegador Web, pois o protocolo foi criado para dispensar a instalação de clientes de correio eletrônico no computador.",
            "criptografar automaticamente anexos e mensagens armazenadas, sem depender do serviço, da conexão ou de configurações adicionais da conta."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! IMAP mantém a caixa postal no servidor e sincroniza mensagens, pastas e estados entre clientes, favorecendo uso em vários dispositivos.",
        "feedbackErro": "A resposta correta é:\n\nsincronizar mensagens e pastas com o servidor, refletindo em diferentes dispositivos muitas das alterações realizadas na conta.\n\nComentário:\nIMAP mantém a caixa postal no servidor e sincroniza mensagens, pastas e estados entre clientes, favorecendo uso em vários dispositivos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "IMAP está ligado à sincronização da caixa postal; SMTP está ligado ao envio.",
        "assunto": "internet",
        "id": "internet_027",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Em comparação com IMAP, o POP3 é tradicionalmente associado a:",
        "alternativas": [
            "sincronizar em tempo real todas as pastas e estados da conta em vários dispositivos, mantendo o servidor como referência principal da caixa.",
            "encaminhar mensagens entre servidores de e-mail, função que corresponde ao papel básico desempenhado pelo protocolo SMTP.",
            "resolver os nomes de domínio dos servidores de correio antes de cada acesso, substituindo o serviço DNS da conexão utilizada.",
            "proteger o conteúdo dos anexos com criptografia de ponta a ponta, independentemente do provedor e dos recursos adotados pelo remetente.",
            "obter mensagens do servidor para o cliente, podendo ser configurado para manter ou remover cópias no servidor após a transferência."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! POP3 é voltado à obtenção de mensagens pelo cliente. Pode haver configuração para deixar cópias no servidor, portanto não se deve tratar a remoção como regra absoluta.",
        "feedbackErro": "A resposta correta é:\n\nobter mensagens do servidor para o cliente, podendo ser configurado para manter ou remover cópias no servidor após a transferência.\n\nComentário:\nPOP3 é voltado à obtenção de mensagens pelo cliente. Pode haver configuração para deixar cópias no servidor, portanto não se deve tratar a remoção como regra absoluta.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "POP3 = recebimento com foco em transferência; IMAP = sincronização da caixa no servidor.",
        "assunto": "internet",
        "id": "internet_028",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "No correio eletrônico, qual protocolo está mais diretamente associado ao envio e encaminhamento de mensagens?",
        "alternativas": [
            "IMAP, utilizado para sincronizar a caixa postal e os estados das mensagens mantidas no servidor de correio.",
            "SMTP, utilizado no envio de mensagens do cliente para o servidor e na transferência entre servidores de correio.",
            "POP3, utilizado para obter mensagens do servidor e disponibilizá-las ao cliente de correio eletrônico configurado.",
            "HTTP, utilizado pelo navegador para solicitar páginas e recursos de serviços Web hospedados em servidores remotos.",
            "DNS, utilizado para resolver nomes de domínio e permitir a localização dos serviços associados aos endereços consultados."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! SMTP é o protocolo clássico de envio e encaminhamento de e-mails. IMAP e POP3 são associados ao acesso/recebimento da caixa postal.",
        "feedbackErro": "A resposta correta é:\n\nSMTP, utilizado no envio de mensagens do cliente para o servidor e na transferência entre servidores de correio.\n\nComentário:\nSMTP é o protocolo clássico de envio e encaminhamento de e-mails. IMAP e POP3 são associados ao acesso/recebimento da caixa postal.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "SMTP envia; IMAP sincroniza; POP3 recebe/transfere.",
        "assunto": "internet",
        "id": "internet_029",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Um servidor quer enviar um comunicado a 200 pessoas sem revelar a cada destinatário os endereços dos demais. O campo mais adequado para a lista de destinatários é:",
        "alternativas": [
            "CC, pois os endereços ficam disponíveis apenas ao remetente e ao destinatário principal indicado no campo Para.",
            "Responder a todos, pois a função cria uma cópia individual e oculta da mensagem para cada participante da conversa original.",
            "Encaminhar, pois essa opção elimina automaticamente os cabeçalhos e impede que os demais destinatários visualizem qualquer endereço.",
            "CCO, pois os endereços inseridos nesse campo não são exibidos aos demais destinatários da mensagem.",
            "Assunto, pois endereços informados nesse campo são tratados pelo servidor como destinatários ocultos durante o envio em massa."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! CCO/BCC envia a mensagem sem expor os endereços ali inseridos aos demais destinatários.",
        "feedbackErro": "A resposta correta é:\n\nCCO, pois os endereços inseridos nesse campo não são exibidos aos demais destinatários da mensagem.\n\nComentário:\nCCO/BCC envia a mensagem sem expor os endereços ali inseridos aos demais destinatários.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "CC é cópia visível; CCO é cópia oculta.",
        "assunto": "internet",
        "id": "internet_030",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Uma mensagem foi enviada a Ana no campo Para e a Bruno no campo CC. Ao receber o e-mail, Bruno normalmente:",
        "alternativas": [
            "recebe a mensagem sem que Ana possa saber que seu endereço foi incluído, pois CC aplica ocultação semelhante ao campo CCO.",
            "recebe apenas o assunto da mensagem, porque o corpo e os anexos são enviados integralmente apenas aos endereços do campo Para.",
            "recebe uma cópia visível da mensagem e os demais destinatários podem identificar que ele foi incluído no campo CC.",
            "não pode responder ao remetente, pois destinatários em CC possuem permissão de leitura mas não participam da conversa por e-mail.",
            "recebe uma cópia armazenada no servidor, mas o conteúdo não é entregue ao cliente de e-mail enquanto não for encaminhado manualmente."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! CC envia uma cópia visível. Os endereços em CC aparecem normalmente aos demais participantes da mensagem.",
        "feedbackErro": "A resposta correta é:\n\nrecebe uma cópia visível da mensagem e os demais destinatários podem identificar que ele foi incluído no campo CC.\n\nComentário:\nCC envia uma cópia visível. Os endereços em CC aparecem normalmente aos demais participantes da mensagem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "A diferença central entre CC e CCO está na visibilidade dos destinatários.",
        "assunto": "internet",
        "id": "internet_031",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Ao usar “Responder a todos” em uma mensagem recebida, o comportamento esperado é:",
        "alternativas": [
            "endereçar a resposta ao remetente e aos demais destinatários visíveis da conversa, conforme o serviço de e-mail e a composição original.",
            "criar uma nova mensagem sem relação com a conversa, removendo automaticamente o assunto, o remetente e todos os destinatários anteriores.",
            "enviar a resposta apenas aos destinatários que estavam em CCO, pois o serviço recupera esses endereços ocultos para manter a conversa completa.",
            "encaminhar a mensagem original como anexo para todos os contatos salvos na agenda do usuário, independentemente de participarem da conversa.",
            "responder ao remetente original, mas incluir uma cópia invisível para todos os demais endereços presentes nos campos Para e CC."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Responder a todos inclui remetente e destinatários visíveis relevantes. Endereços de CCO não são revelados aos demais participantes.",
        "feedbackErro": "A resposta correta é:\n\nendereçar a resposta ao remetente e aos demais destinatários visíveis da conversa, conforme o serviço de e-mail e a composição original.\n\nComentário:\nResponder a todos inclui remetente e destinatários visíveis relevantes. Endereços de CCO não são revelados aos demais participantes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Observe a diferença entre Responder, Responder a todos e Encaminhar.",
        "assunto": "internet",
        "id": "internet_032",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Um usuário deseja enviar a outra pessoa uma mensagem que recebeu, acrescentando sua própria observação e preservando o conteúdo original. A ação mais apropriada é:",
        "alternativas": [
            "responder ao remetente, pois a resposta permite trocar o destinatário por qualquer contato sem alterar a natureza da conversa original.",
            "marcar como spam, pois essa ação cria uma cópia da mensagem e libera um campo para indicar a pessoa que deverá recebê-la em seguida.",
            "arquivar a mensagem, pois o arquivamento gera um novo e-mail com o conteúdo original pronto para ser enviado a outro destinatário.",
            "salvar como rascunho, pois o rascunho converte automaticamente uma mensagem recebida em conteúdo destinado a um novo endereço.",
            "encaminhar a mensagem, informando o novo destinatário e acrescentando o comentário desejado."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Encaminhar é a função destinada a enviar a mensagem recebida a novos destinatários, podendo incluir comentários do usuário.",
        "feedbackErro": "A resposta correta é:\n\nencaminhar a mensagem, informando o novo destinatário e acrescentando o comentário desejado.\n\nComentário:\nEncaminhar é a função destinada a enviar a mensagem recebida a novos destinatários, podendo incluir comentários do usuário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Responder mantém a conversa com quem já participou; encaminhar leva o conteúdo a outro destinatário.",
        "assunto": "internet",
        "id": "internet_033",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Um e-mail recebido contém um arquivo chamado “resultado.pdf.exe”, enquanto a mensagem afirma tratar-se de um documento PDF. Qual análise é mais adequada?",
        "alternativas": [
            "o arquivo é necessariamente um PDF legítimo, pois a primeira extensão encontrada no nome define o formato reconhecido pelo sistema operacional.",
            "o nome merece suspeita, pois a extensão final .exe indica arquivo executável e pode estar sendo usada para disfarçar o tipo real do anexo.",
            "o arquivo é seguro se a mensagem estiver na Caixa de Entrada, porque serviços de e-mail bloqueiam antes da entrega qualquer anexo malicioso.",
            "o arquivo foi compactado pelo remetente, pois a presença de duas extensões é a forma normal de indicar documentos enviados por correio eletrônico.",
            "o arquivo pode ser aberto sem risco em navegador privado, porque o modo de navegação impede que executáveis façam alterações no computador."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Em nomes com múltiplas extensões, a extensão final é relevante. Um .exe disfarçado como documento é um sinal de alerta e não deve ser aberto sem verificação.",
        "feedbackErro": "A resposta correta é:\n\no nome merece suspeita, pois a extensão final .exe indica arquivo executável e pode estar sendo usada para disfarçar o tipo real do anexo.\n\nComentário:\nEm nomes com múltiplas extensões, a extensão final é relevante. Um .exe disfarçado como documento é um sinal de alerta e não deve ser aberto sem verificação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em anexos, observe o remetente, o contexto e principalmente o tipo real do arquivo.",
        "assunto": "internet",
        "id": "internet_034",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Uma mensagem permanece na pasta Rascunhos de um serviço de webmail. Isso significa, em regra, que ela:",
        "alternativas": [
            "foi enviada, mas aguarda confirmação de leitura antes de ser movida automaticamente para a pasta Itens Enviados.",
            "foi recusada pelo servidor do destinatário e permanece disponível até que o endereço seja validado pelo mecanismo de busca.",
            "foi classificada como spam pelo remetente e aguarda análise antes de ser transferida definitivamente para a Lixeira.",
            "foi salva para edição ou envio posterior e ainda não foi efetivamente enviada aos destinatários.",
            "foi recebida sem anexos e precisa ser convertida em mensagem completa antes que o usuário possa visualizar seu conteúdo."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Rascunhos guardam mensagens ainda não enviadas, permitindo continuar a edição ou efetuar o envio depois.",
        "feedbackErro": "A resposta correta é:\n\nfoi salva para edição ou envio posterior e ainda não foi efetivamente enviada aos destinatários.\n\nComentário:\nRascunhos guardam mensagens ainda não enviadas, permitindo continuar a edição ou efetuar o envio depois.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Rascunho ≠ mensagem enviada. Procure a ideia de preparação ainda não concluída.",
        "assunto": "internet",
        "id": "internet_035",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Ao acessar Gmail ou outro serviço semelhante diretamente pelo navegador, sem configurar um programa local de correio, o usuário está utilizando:",
        "alternativas": [
            "um cliente POP3 local, porque qualquer leitura de mensagem exige que a caixa postal seja transferida integralmente para o computador.",
            "um servidor SMTP instalado no navegador, pois o programa passa a encaminhar diretamente as mensagens entre os domínios de e-mail.",
            "webmail, isto é, uma interface de correio eletrônico acessada por meio de aplicação Web.",
            "um serviço de DNS pessoal, porque o navegador precisa armazenar a lista de remetentes para resolver seus respectivos endereços.",
            "uma intranet de correio, porque serviços acessados por autenticação deixam de fazer parte da Internet pública enquanto a sessão estiver aberta."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Webmail é o correio eletrônico acessado por navegador. Um cliente de e-mail é um aplicativo dedicado, como Outlook ou Thunderbird.",
        "feedbackErro": "A resposta correta é:\n\nwebmail, isto é, uma interface de correio eletrônico acessada por meio de aplicação Web.\n\nComentário:\nWebmail é o correio eletrônico acessado por navegador. Um cliente de e-mail é um aplicativo dedicado, como Outlook ou Thunderbird.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Webmail é uma forma de acesso; protocolos de e-mail continuam existindo nos bastidores.",
        "assunto": "internet",
        "id": "internet_036",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Uma escola recebe mensagens em massa não solicitadas com propaganda, mas sem anexo malicioso. A classificação mais adequada dessas mensagens é:",
        "alternativas": [
            "spam, pois o conceito envolve mensagens eletrônicas não solicitadas, frequentemente enviadas em grande quantidade.",
            "phishing, pois mensagens publicitárias não solicitadas são classificadas por definição como tentativa de coleta de credenciais.",
            "malware, pois o simples recebimento de publicidade converte a mensagem em programa capaz de executar código no computador do usuário.",
            "cookie de terceiros, pois anúncios recebidos por e-mail são armazenados pelo navegador para rastrear a navegação do destinatário.",
            "cache de correio, pois o servidor mantém mensagens promocionais em área temporária antes de removê-las da caixa de entrada do usuário."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Spam é mensagem não solicitada, muitas vezes em massa. Nem todo spam contém malware ou configura phishing, embora possa ser usado em golpes.",
        "feedbackErro": "A resposta correta é:\n\nspam, pois o conceito envolve mensagens eletrônicas não solicitadas, frequentemente enviadas em grande quantidade.\n\nComentário:\nSpam é mensagem não solicitada, muitas vezes em massa. Nem todo spam contém malware ou configura phishing, embora possa ser usado em golpes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não transforme conceitos relacionados em sinônimos: spam, phishing e malware podem coexistir, mas são diferentes.",
        "assunto": "internet",
        "id": "internet_037",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Uma mensagem chega com o nome de um gestor, mas o endereço do remetente pertence a domínio estranho e solicita urgência para abrir um link de login. A conduta mais segura é:",
        "alternativas": [
            "responder à própria mensagem pedindo confirmação, pois uma resposta recebida do mesmo endereço comprova que o domínio pertence ao gestor citado.",
            "abrir o link em janela privada, pois o modo anônimo impede páginas falsas de capturar senhas digitadas pelo usuário durante aquela sessão.",
            "confiar no nome exibido do remetente, pois serviços de e-mail validam a identidade pessoal associada a todo nome mostrado na caixa de entrada.",
            "baixar a página vinculada para o computador, pois arquivos salvos localmente deixam de transmitir informações digitadas para servidores externos.",
            "verificar o endereço real do remetente e o destino do link por canal confiável antes de fornecer credenciais ou executar a solicitação."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Nome exibido pode ser falsificado. Domínio estranho, urgência e pedido de login são sinais de phishing; confirme por canal independente.",
        "feedbackErro": "A resposta correta é:\n\nverificar o endereço real do remetente e o destino do link por canal confiável antes de fornecer credenciais ou executar a solicitação.\n\nComentário:\nNome exibido pode ser falsificado. Domínio estranho, urgência e pedido de login são sinais de phishing; confirme por canal independente.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em e-mail, confira o endereço real e o domínio, não apenas o nome exibido.",
        "assunto": "internet",
        "id": "internet_038",
        "subtopico": "correio eletrônico e webmail"
    },
    {
        "pergunta": "Em um mecanismo de busca que suporte o operador site:, a consulta “matrícula site:gov.br” tende a:",
        "alternativas": [
            "procurar páginas que contenham a palavra “site” e ignorar o domínio informado depois dos dois-pontos na consulta.",
            "restringir os resultados a páginas do domínio indicado que sejam relacionadas ao termo pesquisado.",
            "exibir apenas arquivos salvos no computador do usuário cujo endereço original pertença ao domínio indicado na pesquisa.",
            "bloquear resultados de outros domínios no navegador de forma permanente, alterando as configurações de acesso do usuário.",
            "acessar diretamente o primeiro resultado do domínio sem exibir a página de resultados do mecanismo de pesquisa utilizado."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! site: restringe a busca a um domínio ou site específico, sendo útil para localizar conteúdo dentro de uma fonte determinada.",
        "feedbackErro": "A resposta correta é:\n\nrestringir os resultados a páginas do domínio indicado que sejam relacionadas ao termo pesquisado.\n\nComentário:\nsite: restringe a busca a um domínio ou site específico, sendo útil para localizar conteúdo dentro de uma fonte determinada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "site: filtra onde procurar; não altera as configurações do navegador.",
        "assunto": "internet",
        "id": "internet_039",
        "subtopico": "busca e pesquisa avançada"
    },
    {
        "pergunta": "Para localizar documentos PDF sobre determinado tema em um mecanismo de busca que suporte o operador filetype:, a estratégia mais adequada é:",
        "alternativas": [
            "digitar pdf:// antes dos termos, pois esse esquema de endereço informa ao navegador que a pesquisa deve retornar documentos.",
            "usar cache:pdf depois dos termos, fazendo o mecanismo pesquisar apenas arquivos temporários gravados no computador local.",
            "inserir .pdf no campo de endereço sem mecanismo de busca, pois o DNS identifica documentos pela extensão e retorna os resultados.",
            "combinar os termos desejados com filetype:pdf, restringindo os resultados ao formato indicado.",
            "ativar o modo privado antes da pesquisa, pois esse modo aplica automaticamente filtros por formato aos resultados apresentados."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! filetype: permite limitar a pesquisa a determinado tipo de arquivo, como PDF, quando o mecanismo oferece esse operador.",
        "feedbackErro": "A resposta correta é:\n\ncombinar os termos desejados com filetype:pdf, restringindo os resultados ao formato indicado.\n\nComentário:\nfiletype: permite limitar a pesquisa a determinado tipo de arquivo, como PDF, quando o mecanismo oferece esse operador.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Operadores refinam a consulta; eles não são protocolos nem configurações do navegador.",
        "assunto": "internet",
        "id": "internet_040",
        "subtopico": "busca e pesquisa avançada"
    },
    {
        "pergunta": "Ao colocar uma expressão entre aspas em muitos mecanismos de busca, o usuário procura priorizar resultados que contenham:",
        "alternativas": [
            "qualquer uma das palavras em ordem aleatória, ampliando a consulta para sinônimos e páginas sem relação direta com a expressão.",
            "apenas páginas que o usuário já visitou, porque as aspas fazem o mecanismo consultar o histórico local antes de pesquisar a Web.",
            "a sequência de palavras exatamente ou de forma muito próxima à expressão informada, conforme o comportamento do mecanismo.",
            "arquivos cujo nome possua a mesma extensão dos termos digitados, independentemente do conteúdo textual existente no documento.",
            "resultados publicados em sites HTTPS, porque as aspas determinam que a consulta considere apenas conexões protegidas por certificado."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Aspas são usadas para buscas por expressão/frase, reduzindo resultados em que os termos aparecem separados ou em outra ordem.",
        "feedbackErro": "A resposta correta é:\n\na sequência de palavras exatamente ou de forma muito próxima à expressão informada, conforme o comportamento do mecanismo.\n\nComentário:\nAspas são usadas para buscas por expressão/frase, reduzindo resultados em que os termos aparecem separados ou em outra ordem.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Aspas = expressão; site: = domínio; filetype: = formato.",
        "assunto": "internet",
        "id": "internet_041",
        "subtopico": "busca e pesquisa avançada"
    },
    {
        "pergunta": "Em mecanismos de busca que aceitam o sinal de menos como operador, a pesquisa “formação docente -ead” busca, em geral:",
        "alternativas": [
            "resultados relacionados a formação docente com exclusão ou redução de páginas associadas ao termo ead.",
            "somar o termo ead à consulta, exigindo que a página contenha simultaneamente formação docente e educação a distância.",
            "limitar os resultados a arquivos locais cujo nome não contenha ead, sem consultar páginas indexadas na Web pública.",
            "abrir resultados em ordem cronológica inversa, pois o sinal negativo altera o critério de classificação por data da publicação.",
            "bloquear permanentemente páginas sobre ead no navegador, impedindo que esses endereços sejam acessados fora do mecanismo de busca."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! O sinal de menos é usado em muitos mecanismos para excluir um termo indesejado dos resultados da consulta.",
        "feedbackErro": "A resposta correta é:\n\nresultados relacionados a formação docente com exclusão ou redução de páginas associadas ao termo ead.\n\nComentário:\nO sinal de menos é usado em muitos mecanismos para excluir um termo indesejado dos resultados da consulta.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Operador de exclusão atua na consulta, não bloqueia páginas no navegador.",
        "assunto": "internet",
        "id": "internet_042",
        "subtopico": "busca e pesquisa avançada"
    },
    {
        "pergunta": "Dois resultados apresentam informações contraditórias sobre uma norma educacional. Para avaliar a confiabilidade antes de utilizar o conteúdo, é mais adequado:",
        "alternativas": [
            "escolher o resultado que aparece primeiro, porque a posição no mecanismo de busca comprova que a informação foi validada oficialmente.",
            "preferir a página com maior quantidade de anúncios, pois a presença de publicidade indica maior investimento e revisão editorial do conteúdo.",
            "considerar correto o texto mais compartilhado em redes sociais, pois número de compartilhamentos substitui a necessidade de conferir a origem.",
            "usar apenas a extensão do endereço para decidir, pois qualquer página terminada em .com ou .org possui revisão institucional equivalente.",
            "verificar autoria, data, fonte primária, domínio e coerência com documentos oficiais relacionados ao tema."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Resultados de busca precisam ser avaliados criticamente. Fonte primária, autoria, atualização, domínio e consistência são critérios relevantes.",
        "feedbackErro": "A resposta correta é:\n\nverificar autoria, data, fonte primária, domínio e coerência com documentos oficiais relacionados ao tema.\n\nComentário:\nResultados de busca precisam ser avaliados criticamente. Fonte primária, autoria, atualização, domínio e consistência são critérios relevantes.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Mecanismo de busca localiza conteúdo; não certifica automaticamente a veracidade de cada resultado.",
        "assunto": "internet",
        "id": "internet_043",
        "subtopico": "busca e pesquisa avançada"
    },
    {
        "pergunta": "Ao pesquisar um assunto, um usuário encontra um resultado identificado como anúncio ou patrocinado. Isso significa que:",
        "alternativas": [
            "o mecanismo certificou a informação como tecnicamente correta, pois resultados pagos passam por validação de conteúdo antes de serem exibidos.",
            "há uma relação publicitária com a exibição daquele resultado, o que não substitui a avaliação crítica de sua relevância e confiabilidade.",
            "o endereço é necessariamente mais seguro que os resultados orgânicos, porque anúncios utilizam um protocolo de navegação diferente do HTTPS.",
            "a página foi selecionada pela posição que ocupa no índice de relevância, sem relação com pagamento ou campanha publicitária.",
            "o conteúdo pode ser acessado apenas por usuários autenticados no mecanismo, pois anúncios são mantidos fora da indexação pública da Web."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Resultado patrocinado indica publicidade. Pode ser legítimo, mas deve ser avaliado como qualquer outro link, inclusive quanto ao domínio e à fonte.",
        "feedbackErro": "A resposta correta é:\n\nhá uma relação publicitária com a exibição daquele resultado, o que não substitui a avaliação crítica de sua relevância e confiabilidade.\n\nComentário:\nResultado patrocinado indica publicidade. Pode ser legítimo, mas deve ser avaliado como qualquer outro link, inclusive quanto ao domínio e à fonte.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Patrocinado não é sinônimo de confiável nem de fraudulento; é uma forma de exibição publicitária.",
        "assunto": "internet",
        "id": "internet_044",
        "subtopico": "busca e pesquisa avançada"
    },
    {
        "pergunta": "Uma pesquisa retorna milhares de resultados genéricos. Qual ação tende a aumentar a precisão sem abandonar o mecanismo de busca?",
        "alternativas": [
            "apagar o cache do navegador antes de cada consulta, pois o cache determina quais páginas podem ser indexadas pelo mecanismo de busca.",
            "trocar o protocolo HTTPS por HTTP, pois conexões sem criptografia permitem ao mecanismo examinar um número maior de resultados disponíveis.",
            "desativar cookies em todos os sites, pois cookies impedem que palavras adicionais sejam consideradas pelo mecanismo durante a pesquisa.",
            "acrescentar termos específicos, usar expressões entre aspas e aplicar operadores adequados ao objetivo da consulta.",
            "mudar o endereço IP do computador, pois a precisão da consulta depende principalmente da faixa de rede usada pelo dispositivo do usuário."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Refinar termos e usar operadores é a forma direta de tornar a consulta mais específica.",
        "feedbackErro": "A resposta correta é:\n\nacrescentar termos específicos, usar expressões entre aspas e aplicar operadores adequados ao objetivo da consulta.\n\nComentário:\nRefinar termos e usar operadores é a forma direta de tornar a consulta mais específica.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Para melhorar uma busca, mexa na consulta antes de mexer no navegador ou na conexão.",
        "assunto": "internet",
        "id": "internet_045",
        "subtopico": "busca e pesquisa avançada"
    },
    {
        "pergunta": "Uma busca por “concurso professor” retorna uma página cujo título parece adequado, mas o endereço leva a um domínio diferente do esperado. Antes de clicar, é recomendável:",
        "alternativas": [
            "considerar apenas o título do resultado, pois mecanismos de busca não exibem páginas cujo endereço seja incompatível com o conteúdo informado.",
            "ignorar o domínio se a conexão estiver marcada como HTTPS, pois o certificado garante que a página pertence à instituição citada no título.",
            "examinar o domínio exibido e avaliar se ele corresponde à fonte pretendida, sobretudo quando a página solicita dados ou autenticação.",
            "copiar o endereço para a barra de favoritos, pois páginas salvas como favoritas passam por verificação automática de identidade pelo navegador.",
            "abrir o resultado em janela privada, porque esse modo impede que domínios falsos solicitem credenciais ou executem conteúdo no navegador."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Título e descrição podem enganar. O domínio ajuda a identificar a origem do conteúdo e deve ser conferido antes de acessar ou fornecer dados.",
        "feedbackErro": "A resposta correta é:\n\nexaminar o domínio exibido e avaliar se ele corresponde à fonte pretendida, sobretudo quando a página solicita dados ou autenticação.\n\nComentário:\nTítulo e descrição podem enganar. O domínio ajuda a identificar a origem do conteúdo e deve ser conferido antes de acessar ou fornecer dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em resultados de busca, confira o endereço real, especialmente em páginas de login e serviços oficiais.",
        "assunto": "internet",
        "id": "internet_046",
        "subtopico": "busca e pesquisa avançada"
    },
    {
        "pergunta": "Um arquivo está sincronizado entre computador e nuvem. O usuário o exclui no computador e, pouco depois, a exclusão aparece também na nuvem. Esse comportamento mostra que:",
        "alternativas": [
            "sincronização pode propagar alterações entre os locais vinculados e, por isso, não deve ser confundida com uma cópia de backup independente.",
            "a nuvem funciona como Lixeira permanente e histórico de versões, impedindo que exclusões locais alterem os arquivos mantidos no servidor remoto da conta.",
            "o arquivo foi convertido em cache do navegador, que replica automaticamente qualquer exclusão para todas as páginas acessadas pelo perfil.",
            "o serviço está operando como e-mail IMAP, pois esse protocolo é responsável por manter arquivos comuns iguais em diferentes dispositivos.",
            "a sincronização falhou, porque um serviço correto deve preservar a cópia remota contra alterações feitas no computador local."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Sincronização mantém estados atualizados e pode replicar exclusões. Backup procura preservar cópias recuperáveis separadas da rotina de edição.",
        "feedbackErro": "A resposta correta é:\n\nsincronização pode propagar alterações entre os locais vinculados e, por isso, não deve ser confundida com uma cópia de backup independente.\n\nComentário:\nSincronização mantém estados atualizados e pode replicar exclusões. Backup procura preservar cópias recuperáveis separadas da rotina de edição.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Sincronização facilita continuidade; backup protege contra perda. Não são equivalentes.",
        "assunto": "internet",
        "id": "internet_047",
        "subtopico": "nuvem e aplicações online"
    },
    {
        "pergunta": "Ao compartilhar um documento na nuvem com a permissão “visualizador”, o usuário convidado deve, em regra:",
        "alternativas": [
            "conseguir editar o documento, mas não visualizar o histórico de versões, porque edição e visualização são permissões independentes.",
            "conseguir excluir o arquivo da conta do proprietário, pois acesso por link transfere a propriedade do conteúdo para todos os participantes.",
            "receber uma cópia local definitiva que deixa de depender do serviço de nuvem e passa a ser controlada apenas pelo navegador do convidado.",
            "assumir a propriedade do arquivo ao abrir o link, pois serviços de nuvem substituem o dono original pelo primeiro usuário que acessa o conteúdo.",
            "conseguir consultar o conteúdo sem possuir permissão para alterar diretamente o documento compartilhado."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Permissão de visualização permite consultar o conteúdo sem editar o original. Serviços podem oferecer permissões adicionais como comentar ou editar.",
        "feedbackErro": "A resposta correta é:\n\nconseguir consultar o conteúdo sem possuir permissão para alterar diretamente o documento compartilhado.\n\nComentário:\nPermissão de visualização permite consultar o conteúdo sem editar o original. Serviços podem oferecer permissões adicionais como comentar ou editar.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em nuvem, leia com atenção o nível de permissão: visualizar, comentar e editar não são iguais.",
        "assunto": "internet",
        "id": "internet_048",
        "subtopico": "nuvem e aplicações online"
    },
    {
        "pergunta": "Uma equipe alterou indevidamente uma planilha compartilhada e deseja recuperar o estado existente antes das mudanças. Em um serviço que ofereça esse recurso, deve-se procurar:",
        "alternativas": [
            "cache DNS, que mantém cópias anteriores dos documentos associados ao domínio e pode restaurar conteúdo editado por qualquer usuário.",
            "histórico de versões, que permite consultar e restaurar estados anteriores do arquivo conforme o serviço.",
            "pasta de spam, que recebe automaticamente versões antigas de arquivos colaborativos quando uma edição é considerada incorreta pelo sistema.",
            "modo privado, que preserva uma cópia da página antes de cada alteração e permite recuperar documentos depois que a janela é fechada.",
            "campo CCO, que oculta edições anteriores dos demais participantes e permite ao proprietário reativá-las quando necessário."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Histórico de versões registra estados anteriores e pode permitir restauração, dependendo do serviço e das permissões.",
        "feedbackErro": "A resposta correta é:\n\nhistórico de versões, que permite consultar e restaurar estados anteriores do arquivo conforme o serviço.\n\nComentário:\nHistórico de versões registra estados anteriores e pode permitir restauração, dependendo do serviço e das permissões.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Versionamento é um recurso de colaboração/armazenamento, não de cache ou e-mail.",
        "assunto": "internet",
        "id": "internet_049",
        "subtopico": "nuvem e aplicações online"
    },
    {
        "pergunta": "Três professores editam simultaneamente o mesmo documento on-line e veem as alterações uns dos outros quase em tempo real. A característica destacada é:",
        "alternativas": [
            "download progressivo, em que cada participante recebe uma cópia independente e as alterações deixam de ser enviadas ao servidor.",
            "navegação privada, em que o serviço elimina o histórico de edição para impedir que os participantes identifiquem mudanças feitas pelos colegas.",
            "correio POP3, em que cada alteração é transferida como mensagem e removida do servidor assim que outro usuário a visualiza.",
            "edição colaborativa, na qual vários usuários autorizados trabalham sobre um documento compartilhado.",
            "cache distribuído, em que o navegador substitui o arquivo original por cópias temporárias sem qualquer coordenação feita pelo serviço remoto."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Aplicações colaborativas permitem coedição, comentários, histórico e outras formas de trabalho compartilhado conforme o serviço.",
        "feedbackErro": "A resposta correta é:\n\nedição colaborativa, na qual vários usuários autorizados trabalham sobre um documento compartilhado.\n\nComentário:\nAplicações colaborativas permitem coedição, comentários, histórico e outras formas de trabalho compartilhado conforme o serviço.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Colaboração on-line envolve documento compartilhado e permissões, não simples troca de cópias.",
        "assunto": "internet",
        "id": "internet_050",
        "subtopico": "nuvem e aplicações online"
    },
    {
        "pergunta": "Um serviço de armazenamento em nuvem oferece “disponível off-line” para determinados arquivos. Isso normalmente significa que:",
        "alternativas": [
            "o arquivo deixa de existir na nuvem e passa a ser controlado definitivamente pelo dispositivo que ativou o modo off-line.",
            "o documento é convertido em página pública, permitindo acesso sem autenticação por qualquer pessoa que conheça o endereço do serviço.",
            "uma cópia local pode ser mantida no dispositivo para acesso sem conexão e sincronizada depois quando o serviço voltar a ficar disponível.",
            "o navegador desativa a criptografia HTTPS enquanto não houver Internet e restaura a proteção quando o arquivo for aberto novamente.",
            "o serviço transforma o arquivo em anexo de e-mail armazenado localmente, permitindo consulta posterior sem conexão ativa com a Internet e sem sincronização."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Disponibilidade off-line mantém uma cópia local para uso sem conexão; alterações podem ser sincronizadas posteriormente, dependendo do aplicativo.",
        "feedbackErro": "A resposta correta é:\n\numa cópia local pode ser mantida no dispositivo para acesso sem conexão e sincronizada depois quando o serviço voltar a ficar disponível.\n\nComentário:\nDisponibilidade off-line mantém uma cópia local para uso sem conexão; alterações podem ser sincronizadas posteriormente, dependendo do aplicativo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Off-line não significa público nem removido da nuvem; significa acesso local preparado previamente.",
        "assunto": "internet",
        "id": "internet_051",
        "subtopico": "nuvem e aplicações online"
    },
    {
        "pergunta": "Ao compartilhar um link de edição com a opção “qualquer pessoa com o link”, o principal risco administrativo é:",
        "alternativas": [
            "ampliar o acesso além do necessário, permitindo que pessoas não identificadas alterem o conteúdo caso obtenham o endereço.",
            "diminuir a velocidade da Internet de todos os usuários, porque links públicos reservam permanentemente largura de banda no servidor de origem.",
            "desativar o histórico de versões do documento, pois serviços de nuvem não conseguem registrar edições feitas por meio de links compartilhados.",
            "impedir o proprietário de recuperar o arquivo, porque a primeira pessoa que editar o documento assume automaticamente a propriedade definitiva.",
            "converter o documento em cache do navegador, fazendo com que as alterações deixem de ser sincronizadas com o serviço de armazenamento remoto."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Links amplos facilitam colaboração, mas podem expor o documento. O princípio é conceder apenas a permissão necessária ao público necessário.",
        "feedbackErro": "A resposta correta é:\n\nampliar o acesso além do necessário, permitindo que pessoas não identificadas alterem o conteúdo caso obtenham o endereço.\n\nComentário:\nLinks amplos facilitam colaboração, mas podem expor o documento. O princípio é conceder apenas a permissão necessária ao público necessário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Em compartilhamento, avalie duas dimensões: quem acessa e o que pode fazer.",
        "assunto": "internet",
        "id": "internet_052",
        "subtopico": "nuvem e aplicações online"
    },
    {
        "pergunta": "Uma aplicação de edição de texto funciona diretamente no navegador e mantém documentos no serviço do fornecedor. Esse modelo é compatível com:",
        "alternativas": [
            "firmware local, pois o editor precisa estar gravado na memória do equipamento para que o navegador consiga exibir seus comandos.",
            "driver de dispositivo, pois a edição de texto depende de software que controla diretamente o hardware de armazenamento do computador.",
            "protocolo DNS, pois a resolução de nomes executa as funções de edição e guarda o conteúdo do documento no servidor utilizado.",
            "arquivo executável portátil, pois aplicações em navegador são transferidas integralmente para a pasta Downloads antes de funcionar.",
            "aplicação Web em nuvem, na qual parte relevante do serviço é oferecida remotamente e acessada pela Internet."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Aplicações Web podem oferecer edição, armazenamento e colaboração por serviços remotos acessados em navegador.",
        "feedbackErro": "A resposta correta é:\n\naplicação Web em nuvem, na qual parte relevante do serviço é oferecida remotamente e acessada pela Internet.\n\nComentário:\nAplicações Web podem oferecer edição, armazenamento e colaboração por serviços remotos acessados em navegador.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confunda aplicativo Web com software de sistema, driver ou protocolo de rede.",
        "assunto": "internet",
        "id": "internet_053",
        "subtopico": "nuvem e aplicações online"
    },
    {
        "pergunta": "Uma equipe precisa evitar que a indisponibilidade temporária da Internet interrompa completamente o trabalho em documentos críticos. Entre medidas compatíveis com serviços que oferecem suporte, destaca-se:",
        "alternativas": [
            "apagar o cache antes de sair da rede, pois a exclusão dos recursos locais garante que os documentos sejam carregados sem conexão externa.",
            "preparar previamente arquivos necessários para acesso off-line e verificar como será feita a sincronização das alterações depois.",
            "desativar a autenticação da conta, pois credenciais armazenadas impedem que aplicações em nuvem funcionem quando o servidor não responde.",
            "substituir o serviço de nuvem por um mecanismo de busca, pois páginas indexadas permanecem editáveis mesmo quando não há conectividade.",
            "alterar os arquivos para extensão .url, pois esse formato incorpora o conteúdo remoto e permite editar qualquer documento sem acesso à Internet."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Quando o serviço suporta modo off-line, os arquivos precisam ser preparados/localizados no dispositivo antes da perda de conexão e sincronizados depois.",
        "feedbackErro": "A resposta correta é:\n\npreparar previamente arquivos necessários para acesso off-line e verificar como será feita a sincronização das alterações depois.\n\nComentário:\nQuando o serviço suporta modo off-line, os arquivos precisam ser preparados/localizados no dispositivo antes da perda de conexão e sincronizados depois.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Nuvem depende de conectividade, salvo quando o serviço oferece mecanismos específicos de trabalho off-line.",
        "assunto": "internet",
        "id": "internet_054",
        "subtopico": "nuvem e aplicações online"
    },
    {
        "pergunta": "Ao assistir a uma transmissão de vídeo que começa antes de o arquivo completo ser recebido, o usuário está utilizando uma característica típica de:",
        "alternativas": [
            "download integral, em que a reprodução só pode começar depois que todos os dados foram salvos definitivamente no dispositivo.",
            "correio eletrônico, em que segmentos do vídeo são enviados como anexos sucessivos e reagrupados pelo navegador durante a reprodução.",
            "resolução DNS, em que o servidor converte quadros do vídeo em endereços IP para que o conteúdo possa ser exibido em sequência.",
            "streaming, em que o conteúdo é recebido e reproduzido progressivamente durante a transmissão.",
            "cache de favoritos, em que o navegador transforma os endereços salvos em arquivos multimídia acessíveis sem conexão com a Internet."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Streaming permite consumir áudio ou vídeo enquanto os dados chegam, normalmente com uso de buffer para suavizar variações da conexão.",
        "feedbackErro": "A resposta correta é:\n\nstreaming, em que o conteúdo é recebido e reproduzido progressivamente durante a transmissão.\n\nComentário:\nStreaming permite consumir áudio ou vídeo enquanto os dados chegam, normalmente com uso de buffer para suavizar variações da conexão.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Streaming não exige baixar o arquivo completo antes de iniciar a reprodução.",
        "assunto": "internet",
        "id": "internet_055",
        "subtopico": "comunicação, streaming e colaboração"
    },
    {
        "pergunta": "Durante uma videoconferência, a imagem congela e o áudio apresenta cortes quando várias pessoas passam a usar intensamente a mesma conexão. Uma explicação plausível é:",
        "alternativas": [
            "o navegador deixou de resolver nomes DNS depois que a reunião começou, embora a conexão com o serviço permaneça estabelecida normalmente.",
            "o campo CCO da conta de e-mail ficou cheio, impedindo que os pacotes de áudio fossem entregues aos participantes da reunião on-line.",
            "a largura de banda disponível e outras condições da rede podem não estar suficientes para manter o fluxo de áudio e vídeo em tempo real.",
            "o histórico do navegador atingiu o limite de páginas visitadas e passou a descartar quadros do vídeo para liberar espaço de armazenamento.",
            "o certificado HTTPS perdeu validade durante a chamada, situação que reduz gradualmente a qualidade do vídeo sem interromper a sessão."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Videoconferência é sensível a banda, latência, perdas e estabilidade. Uso simultâneo intenso pode degradar a qualidade da chamada.",
        "feedbackErro": "A resposta correta é:\n\na largura de banda disponível e outras condições da rede podem não estar suficientes para manter o fluxo de áudio e vídeo em tempo real.\n\nComentário:\nVideoconferência é sensível a banda, latência, perdas e estabilidade. Uso simultâneo intenso pode degradar a qualidade da chamada.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Problemas de vídeo em tempo real nem sempre são “falta de Internet”; desempenho e estabilidade também importam.",
        "assunto": "internet",
        "id": "internet_056",
        "subtopico": "comunicação, streaming e colaboração"
    },
    {
        "pergunta": "Uma plataforma mostra que um documento foi comentado, mas o comentário não alterou diretamente o texto original. Isso evidencia a diferença entre:",
        "alternativas": [
            "comentar e editar, pois comentários podem registrar observações sem modificar o conteúdo principal do documento.",
            "visualizar e baixar, pois um comentário é uma cópia local do arquivo e a edição corresponde ao envio dessa cópia de volta ao servidor.",
            "cache e histórico, pois comentários são recursos temporários enquanto edições ficam armazenadas no histórico do navegador do usuário.",
            "SMTP e IMAP, pois comentários são enviados por um protocolo e edições são sincronizadas por outro dentro do documento compartilhado.",
            "Internet e intranet, pois comentários existem apenas em redes privadas e edição é um recurso restrito a páginas publicadas na Internet."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Serviços colaborativos costumam separar permissões e ações de visualizar, comentar e editar.",
        "feedbackErro": "A resposta correta é:\n\ncomentar e editar, pois comentários podem registrar observações sem modificar o conteúdo principal do documento.\n\nComentário:\nServiços colaborativos costumam separar permissões e ações de visualizar, comentar e editar.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Nem toda participação em documento compartilhado significa permissão de edição.",
        "assunto": "internet",
        "id": "internet_057",
        "subtopico": "comunicação, streaming e colaboração"
    },
    {
        "pergunta": "Ao abrir um site, o navegador exibe cadeado e conexão HTTPS. Qual conclusão é adequada?",
        "alternativas": [
            "o site foi certificado como livre de fraudes, pois a emissão de certificado HTTPS exige auditoria completa de todas as páginas e serviços oferecidos.",
            "os arquivos disponíveis no site não podem conter malware, porque a criptografia impede que conteúdo malicioso seja armazenado no servidor.",
            "a identidade comercial do responsável pelo site foi necessariamente comprovada, independentemente do tipo de certificado usado na conexão.",
            "o navegador impedirá qualquer coleta de dados pessoais, pois conexões HTTPS bloqueiam cookies, formulários e recursos de rastreamento por padrão.",
            "a conexão com aquele domínio está protegida por mecanismos criptográficos, mas ainda é necessário avaliar se o site e o conteúdo são legítimos."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! HTTPS protege a transmissão e autentica o servidor conforme o certificado, mas não garante que a finalidade do site seja legítima.",
        "feedbackErro": "A resposta correta é:\n\na conexão com aquele domínio está protegida por mecanismos criptográficos, mas ainda é necessário avaliar se o site e o conteúdo são legítimos.\n\nComentário:\nHTTPS protege a transmissão e autentica o servidor conforme o certificado, mas não garante que a finalidade do site seja legítima.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Cadeado = canal protegido; não = conteúdo automaticamente confiável.",
        "assunto": "internet",
        "id": "internet_058",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Um link recebido por mensagem exibe “banco-seguro.com”, mas ao posicionar o ponteiro sobre ele o navegador mostra outro domínio. Antes de clicar, o usuário deve:",
        "alternativas": [
            "considerar seguro o texto visível, pois navegadores substituem automaticamente destinos externos por endereços equivalentes do mesmo serviço.",
            "considerar o endereço real exibido pelo navegador e desconfiar da divergência entre o texto do link e o destino efetivo.",
            "clicar e verificar depois, pois um domínio falso não consegue carregar páginas quando o texto apresentado no link pertence a outra instituição.",
            "abrir o endereço em modo privado, porque essa modalidade bloqueia redirecionamentos e garante que o destino corresponda ao texto exibido.",
            "copiar o link para um e-mail, pois servidores de correio corrigem automaticamente domínios divergentes antes de permitir o encaminhamento."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Texto de hiperlink pode ser diferente do destino. Conferir o domínio real ajuda a identificar tentativas de phishing e redirecionamentos enganosos.",
        "feedbackErro": "A resposta correta é:\n\nconsiderar o endereço real exibido pelo navegador e desconfiar da divergência entre o texto do link e o destino efetivo.\n\nComentário:\nTexto de hiperlink pode ser diferente do destino. Conferir o domínio real ajuda a identificar tentativas de phishing e redirecionamentos enganosos.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Não confie apenas no texto azul do link; observe o destino real.",
        "assunto": "internet",
        "id": "internet_059",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Um serviço oferece autenticação em dois fatores com senha e código temporário em aplicativo autenticador. A principal vantagem é:",
        "alternativas": [
            "substituir a necessidade de manter a senha protegida, porque o código temporário garante acesso seguro mesmo quando a credencial é divulgada.",
            "impedir que o provedor armazene registros de acesso, pois o segundo fator torna desnecessários logs e mecanismos de monitoramento da conta.",
            "ocultar o endereço IP do usuário durante a autenticação, fazendo a conexão parecer originada no servidor do aplicativo autenticador.",
            "exigir um segundo fator além da senha, reduzindo o risco de acesso indevido quando apenas a senha é comprometida.",
            "eliminar golpes de engenharia social, porque códigos temporários não podem ser solicitados ou induzidos por páginas e mensagens fraudulentas."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Dois fatores aumentam a proteção ao exigir mais de uma evidência de autenticação. Ainda assim, o usuário precisa proteger os fatores contra phishing e roubo.",
        "feedbackErro": "A resposta correta é:\n\nexigir um segundo fator além da senha, reduzindo o risco de acesso indevido quando apenas a senha é comprometida.\n\nComentário:\nDois fatores aumentam a proteção ao exigir mais de uma evidência de autenticação. Ainda assim, o usuário precisa proteger os fatores contra phishing e roubo.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "2FA reduz risco; não torna senha, atenção e boas práticas desnecessárias.",
        "assunto": "internet",
        "id": "internet_060",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Ao usar um computador de terceiros para acessar uma conta, qual sequência reduz melhor o risco de exposição posterior?",
        "alternativas": [
            "salvar a senha e apagar o endereço da barra de navegação, pois a ausência da URL impede que outro usuário reutilize a sessão autenticada.",
            "manter a conta aberta e limpar apenas os cookies de publicidade, pois esses cookies controlam também as credenciais de todos os serviços acessados.",
            "evitar salvar credenciais, encerrar a sessão da conta ao terminar e verificar se dados sensíveis não ficaram armazenados no navegador.",
            "usar uma conexão HTTPS e deixar a sessão aberta, porque a criptografia garante que outras pessoas no mesmo computador não consigam usar a conta.",
            "apagar os favoritos do navegador e fechar a aba, pois favoritos são responsáveis por manter tokens de autenticação ativos entre acessos diferentes."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! Em equipamento de terceiros, evite persistir credenciais, saia da conta e remova dados sensíveis quando necessário.",
        "feedbackErro": "A resposta correta é:\n\nevitar salvar credenciais, encerrar a sessão da conta ao terminar e verificar se dados sensíveis não ficaram armazenados no navegador.\n\nComentário:\nEm equipamento de terceiros, evite persistir credenciais, saia da conta e remova dados sensíveis quando necessário.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Fechar a aba nem sempre encerra uma sessão; use a função de sair da conta.",
        "assunto": "internet",
        "id": "internet_061",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Um formulário on-line solicita permissão do navegador para acessar câmera e microfone, embora a página ofereça apenas leitura de um texto. A atitude mais adequada é:",
        "alternativas": [
            "negar ou questionar a permissão, pois o acesso solicitado não parece necessário para a função apresentada pela página.",
            "autorizar, pois navegadores impedem que páginas usem câmera e microfone mesmo depois que o usuário concede permissão expressa ao site.",
            "autorizar se o site usar HTTPS, porque conexões criptografadas transformam permissões de hardware em recursos sem impacto à privacidade.",
            "limpar o cache antes de aceitar, pois essa ação impede que a página use câmera e microfone depois que a janela do navegador for fechada.",
            "ativar o modo privado e conceder acesso, pois nesse modo as páginas recebem permissões fictícias que não alcançam os dispositivos reais do computador."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Permissões devem ser proporcionais à função do site. Câmera, microfone, localização e notificações merecem avaliação antes da autorização.",
        "feedbackErro": "A resposta correta é:\n\nnegar ou questionar a permissão, pois o acesso solicitado não parece necessário para a função apresentada pela página.\n\nComentário:\nPermissões devem ser proporcionais à função do site. Câmera, microfone, localização e notificações merecem avaliação antes da autorização.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Boa prática: conceda apenas permissões necessárias para a atividade que você pretende realizar.",
        "assunto": "internet",
        "id": "internet_062",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Um site solicita notificações do navegador logo ao abrir. O usuário não precisa desse recurso. A decisão mais prudente é:",
        "alternativas": [
            "aceitar porque notificações Web não podem aparecer fora da aba em que foram autorizadas e não persistem depois que o navegador é reiniciado.",
            "aceitar e limpar o histórico, pois a exclusão das páginas visitadas revoga automaticamente todas as permissões de notificação concedidas ao site.",
            "trocar para HTTP antes de decidir, pois sites HTTPS recebem acesso mais amplo ao sistema e não permitem recusar notificações depois do primeiro acesso.",
            "bloquear cookies de primeira parte, pois esse tipo de cookie é o mecanismo responsável por exibir notificações mesmo sem autorização explícita.",
            "negar a permissão, evitando alertas indesejados e reduzindo o acesso concedido à página sem necessidade funcional."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Notificações são uma permissão do navegador e devem ser concedidas apenas quando úteis e confiáveis.",
        "feedbackErro": "A resposta correta é:\n\nnegar a permissão, evitando alertas indesejados e reduzindo o acesso concedido à página sem necessidade funcional.\n\nComentário:\nNotificações são uma permissão do navegador e devem ser concedidas apenas quando úteis e confiáveis.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Permissão desnecessária deve ser recusada; isso vale para notificações, câmera, microfone e localização.",
        "assunto": "internet",
        "id": "internet_063",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Uma página de login apresenta domínio “micros0ft-exemplo.com”, usando o número zero no lugar de uma letra para parecer conhecida. Esse padrão é um sinal de:",
        "alternativas": [
            "uso normal de DNS internacional, pois números substituem automaticamente letras semelhantes quando o domínio é acessado por conexão HTTPS.",
            "possível tentativa de imitação de domínio para induzir o usuário a acreditar que está no site legítimo.",
            "endereço de cache, pois navegadores trocam caracteres do domínio para distinguir versões temporárias da página armazenadas no dispositivo.",
            "redirecionamento oficial, pois organizações registradas recebem domínios alternativos com números para garantir compatibilidade entre navegadores.",
            "compactação de URL, pois serviços de encurtamento transformam letras em números mantendo visível o nome completo da instituição no endereço."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Domínios visualmente semelhantes podem ser usados em phishing. Pequenas alterações em letras, números e sufixos devem ser examinadas com cuidado.",
        "feedbackErro": "A resposta correta é:\n\npossível tentativa de imitação de domínio para induzir o usuário a acreditar que está no site legítimo.\n\nComentário:\nDomínios visualmente semelhantes podem ser usados em phishing. Pequenas alterações em letras, números e sufixos devem ser examinadas com cuidado.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Leia o domínio caractere por caractere em páginas que pedem login ou dados pessoais.",
        "assunto": "internet",
        "id": "internet_064",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Ao receber um QR Code por mensagem que promete acesso a um benefício e leva a uma página de login, o usuário deve lembrar que:",
        "alternativas": [
            "QR Codes são validados pelo navegador antes da abertura e, por isso, não podem apontar para domínios usados em golpes de coleta de credenciais.",
            "o conteúdo é seguro quando o código está em uma imagem, porque links maliciosos dependem de texto clicável para redirecionar o usuário, inclusive em páginas de autenticação.",
            "a leitura do código cria uma conexão privada com o emissor, impedindo que o site de destino receba informações digitadas pelo usuário no formulário.",
            "o QR Code apenas codifica um destino ou dado e pode levar a páginas legítimas ou fraudulentas; o endereço deve ser conferido antes de fornecer informações.",
            "o QR Code substitui o nome de domínio por um endereço local, de modo que páginas abertas dessa forma não utilizam servidores da Internet pública."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! QR Codes podem esconder visualmente o destino até a leitura. Depois de escanear, confira a URL e o contexto antes de autenticar ou informar dados.",
        "feedbackErro": "A resposta correta é:\n\no QR Code apenas codifica um destino ou dado e pode levar a páginas legítimas ou fraudulentas; o endereço deve ser conferido antes de fornecer informações.\n\nComentário:\nQR Codes podem esconder visualmente o destino até a leitura. Depois de escanear, confira a URL e o contexto antes de autenticar ou informar dados.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "QR Code não é selo de segurança; trate o destino como trataria qualquer link recebido.",
        "assunto": "internet",
        "id": "internet_065",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Em uma rede Wi-Fi pública, o usuário precisa acessar um serviço sensível. Qual cuidado permanece importante mesmo quando o site usa HTTPS?",
        "alternativas": [
            "desativar a autenticação em dois fatores, pois redes públicas podem bloquear códigos temporários e impedir que o site confirme a identidade do usuário.",
            "aceitar qualquer certificado apresentado, pois redes Wi-Fi públicas substituem certificados legítimos para adaptar a criptografia ao ponto de acesso.",
            "confirmar o domínio correto, manter o dispositivo atualizado e evitar interações suspeitas, pois HTTPS não elimina todos os riscos de uso da Internet.",
            "compartilhar a senha da conta com outro dispositivo, pois dois acessos simultâneos permitem identificar automaticamente páginas falsas na mesma rede.",
            "desativar as atualizações do sistema durante a conexão, pois pacotes de atualização são incompatíveis com páginas HTTPS em redes que exigem autenticação."
        ],
        "correta": 2,
        "feedbackAcerto": "Correto! HTTPS é importante, mas o usuário ainda deve verificar domínio, atualizações, autenticação e contexto, especialmente em redes que não controla.",
        "feedbackErro": "A resposta correta é:\n\nconfirmar o domínio correto, manter o dispositivo atualizado e evitar interações suspeitas, pois HTTPS não elimina todos os riscos de uso da Internet.\n\nComentário:\nHTTPS é importante, mas o usuário ainda deve verificar domínio, atualizações, autenticação e contexto, especialmente em redes que não controla.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Segurança é composta por camadas; o cadeado não elimina a necessidade de atenção.",
        "assunto": "internet",
        "id": "internet_066",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Um serviço oferece opção “lembrar deste dispositivo” após autenticação em dois fatores. Em computador compartilhado, a decisão mais segura é:",
        "alternativas": [
            "não marcar a opção, para evitar reduzir a exigência do segundo fator em acessos futuros realizados naquele equipamento.",
            "marcar a opção e limpar apenas o histórico, pois o histórico é o único dado usado para reconhecer dispositivos confiáveis em autenticação futura.",
            "marcar a opção se a conexão usar HTTPS, porque o reconhecimento do dispositivo não persiste depois que o navegador é fechado pelo usuário.",
            "desativar cookies de sessão depois de marcar, pois isso garante que a conta continue lembrada apenas para o usuário que realizou o primeiro acesso.",
            "alterar o mecanismo de busca padrão, pois a identificação de dispositivo confiável depende do serviço usado para localizar a página de autenticação."
        ],
        "correta": 0,
        "feedbackAcerto": "Correto! Em computador compartilhado, confiar/lembrar o dispositivo pode facilitar acessos posteriores por terceiros. Prefira exigir autenticação completa.",
        "feedbackErro": "A resposta correta é:\n\nnão marcar a opção, para evitar reduzir a exigência do segundo fator em acessos futuros realizados naquele equipamento.\n\nComentário:\nEm computador compartilhado, confiar/lembrar o dispositivo pode facilitar acessos posteriores por terceiros. Prefira exigir autenticação completa.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "“Lembrar dispositivo” é conveniente em equipamento pessoal; em equipamento compartilhado, aumenta o risco.",
        "assunto": "internet",
        "id": "internet_067",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Uma página solicita dados pessoais muito além do necessário para a atividade proposta. Sob a ótica de privacidade no uso da Internet, é adequado:",
        "alternativas": [
            "preencher todos os campos se a página utilizar HTTPS, pois a criptografia torna irrelevante a quantidade de informações solicitadas pelo serviço.",
            "fornecer dados fictícios em qualquer situação, pois serviços on-line não podem exigir informações verdadeiras para executar atividades legítimas.",
            "autorizar a coleta e apagar o cache depois, pois a limpeza dos arquivos temporários remove também os dados já enviados ao servidor remoto.",
            "trocar de navegador, pois a quantidade de dados solicitada por um site é definida pelo navegador instalado e não pela aplicação acessada.",
            "questionar a necessidade da coleta e fornecer apenas dados compatíveis com a finalidade legítima do serviço."
        ],
        "correta": 4,
        "feedbackAcerto": "Correto! Princípio prático de privacidade: dados solicitados devem ter relação com a finalidade do serviço. HTTPS protege o transporte, não limita a coleta.",
        "feedbackErro": "A resposta correta é:\n\nquestionar a necessidade da coleta e fornecer apenas dados compatíveis com a finalidade legítima do serviço.\n\nComentário:\nPrincípio prático de privacidade: dados solicitados devem ter relação com a finalidade do serviço. HTTPS protege o transporte, não limita a coleta.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Pergunte “por que esse dado é necessário?” antes de fornecê-lo.",
        "assunto": "internet",
        "id": "internet_068",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Ao sair de uma conta Web, o serviço encerra a sessão atual. Por que essa ação é relevante em computadores compartilhados?",
        "alternativas": [
            "porque remove a conta do servidor e apaga definitivamente as mensagens, arquivos e configurações vinculadas ao usuário naquele serviço.",
            "porque reduz a chance de outra pessoa reutilizar a sessão autenticada que permaneceria ativa no navegador.",
            "porque desinstala cookies de todos os sites do computador, impedindo que outros usuários acessem páginas visitadas durante a mesma sessão.",
            "porque altera o endereço IP do equipamento, fazendo com que o servidor deixe de reconhecer qualquer acesso realizado anteriormente pela máquina.",
            "porque revoga o certificado HTTPS do site, exigindo que o próximo usuário obtenha uma nova conexão criptografada antes de visualizar a página."
        ],
        "correta": 1,
        "feedbackAcerto": "Correto! Sair da conta encerra ou invalida a sessão conforme o serviço, evitando que outra pessoa continue usando a autenticação deixada no navegador.",
        "feedbackErro": "A resposta correta é:\n\nporque reduz a chance de outra pessoa reutilizar a sessão autenticada que permaneceria ativa no navegador.\n\nComentário:\nSair da conta encerra ou invalida a sessão conforme o serviço, evitando que outra pessoa continue usando a autenticação deixada no navegador.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Fechar a aba não é o mesmo que sair da conta.",
        "assunto": "internet",
        "id": "internet_069",
        "subtopico": "segurança, privacidade e golpes online"
    },
    {
        "pergunta": "Um navegador avisa que o certificado de um site apresenta problema de validade. Para uma página que solicita senha, a atitude mais segura é:",
        "alternativas": [
            "prosseguir se o nome visual da página parecer correto, pois certificados afetam apenas a velocidade da conexão e não a proteção dos dados transmitidos.",
            "prosseguir em janela privada, porque esse modo corrige automaticamente problemas de certificado e cria um canal criptografado independente do site.",
            "apagar os cookies e tentar novamente, pois erros de certificado são causados por dados de sessão antigos armazenados pelo navegador do usuário.",
            "não ignorar o alerta sem compreender a causa e confirmar por meio confiável que o endereço e o serviço são legítimos.",
            "alterar o mecanismo de busca, pois certificados são emitidos pelo serviço de pesquisa usado para localizar o domínio antes de abrir a página."
        ],
        "correta": 3,
        "feedbackAcerto": "Correto! Alertas de certificado podem indicar configuração incorreta ou risco de interceptação. Em páginas sensíveis, não devem ser ignorados sem verificação.",
        "feedbackErro": "A resposta correta é:\n\nnão ignorar o alerta sem compreender a causa e confirmar por meio confiável que o endereço e o serviço são legítimos.\n\nComentário:\nAlertas de certificado podem indicar configuração incorreta ou risco de interceptação. Em páginas sensíveis, não devem ser ignorados sem verificação.\n\nRevise a explicação e a dica da banca para fixar o conteúdo.",
        "dicaBanca": "Erro de certificado merece atenção especial em login, pagamento e envio de dados pessoais.",
        "assunto": "internet",
        "id": "internet_070",
        "subtopico": "segurança, privacidade e golpes online"
    }
];
