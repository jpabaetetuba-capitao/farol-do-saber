const vozesVerbais = [

{
    pergunta: `Em qual alternativa a estrutura está na voz passiva analítica e o agente da ação aparece expresso?`,

    alternativas: [
        `Os relatórios foram conferidos pela equipe antes da publicação.`,
        `A equipe conferiu os relatórios antes da publicação.`,
        `Conferiram-se os relatórios antes da publicação.`,
        `A equipe conferiu os relatórios antes da publicação, em construção de voz ativa.`,
        `Precisa-se de conferência antes da publicação.`,
    ],

    correta: 0,

    explicacao: `Em 'foram conferidos pela equipe', há auxiliar ser + particípio; 'os relatórios' é sujeito paciente e 'pela equipe' é agente da passiva.`,

    feedbackAcerto: `Correto! Em 'foram conferidos pela equipe', há auxiliar ser + particípio; 'os relatórios' é sujeito paciente e 'pela equipe' é agente da passiva.`,

    feedbackErro: `A resposta correta é: Os relatórios foram conferidos pela equipe antes da publicação. Em 'foram conferidos pela equipe', há auxiliar ser + particípio; 'os relatórios' é sujeito paciente e 'pela equipe' é agente da passiva.`,

    dicaBanca: `Na passiva analítica, localize o sujeito paciente e verifique se há ser + particípio.`,
},

{
    pergunta: `Em “Vendem-se livros usados na feira escolar”, a análise correta do termo “livros usados” é:`,

    alternativas: [
        `objeto direto, pois o sujeito da oração está indeterminado.`,
        `objeto indireto, porque o pronome exige complemento preposicionado.`,
        `sujeito paciente, com o qual o verbo concorda no plural.`,
        `agente da passiva, responsável pela ação expressa pelo verbo.`,
        `predicativo do sujeito, ligado ao verbo por valor de estado.`,
    ],

    correta: 2,

    explicacao: `Com verbo transitivo direto e pronome apassivador 'se', a oração equivale a 'Livros usados são vendidos'. Logo, 'livros usados' é sujeito paciente e determina a concordância verbal.`,

    feedbackAcerto: `Correto! Com verbo transitivo direto e pronome apassivador 'se', a oração equivale a 'Livros usados são vendidos'. Logo, 'livros usados' é sujeito paciente e determina a concordância verbal.`,

    feedbackErro: `A resposta correta é: sujeito paciente, com o qual o verbo concorda no plural. Com verbo transitivo direto e pronome apassivador 'se', a oração equivale a 'Livros usados são vendidos'. Logo, 'livros usados' é sujeito paciente e determina a concordância verbal.`,

    dicaBanca: `Tente converter a construção com 'se' em ser + particípio. Se funcionar, procure o sujeito paciente.`,
},

{
    pergunta: `Assinale a alternativa em que o “se” funciona como índice de indeterminação do sujeito.`,

    alternativas: [
        `Publicaram-se no portal oficial os resultados definitivos de todas as etapas da seleção.`,
        `Corrigiram-se as provas antes da divulgação do gabarito.`,
        `Os candidatos cumprimentaram-se depois da cerimônia.`,
        `A servidora preparou-se para apresentar o relatório.`,
        `Necessita-se de profissionais com experiência em revisão textual.`,
    ],

    correta: 4,

    explicacao: `Em 'necessita-se de profissionais', o verbo 'necessitar' rege a preposição 'de'; o 'se' indetermina o sujeito e o verbo permanece na terceira pessoa do singular.`,

    feedbackAcerto: `Correto! Em 'necessita-se de profissionais', o verbo 'necessitar' rege a preposição 'de'; o 'se' indetermina o sujeito e o verbo permanece na terceira pessoa do singular.`,

    feedbackErro: `A resposta correta é: Necessita-se de profissionais com experiência em revisão textual. Em 'necessita-se de profissionais', o verbo 'necessitar' rege a preposição 'de'; o 'se' indetermina o sujeito e o verbo permanece na terceira pessoa do singular.`,

    dicaBanca: `Com verbo transitivo indireto + se, não há sujeito paciente para formar passiva sintética.`,
},

{
    pergunta: `A transposição de “A banca havia publicado o resultado antes do prazo” para a voz passiva analítica está correta em:`,

    alternativas: [
        `O resultado havia publicado a banca antes do prazo.`,
        `O resultado havia sido publicado pela banca antes do prazo.`,
        `A banca havia sido publicada pelo resultado antes do prazo.`,
        `O resultado foi havido publicado pela banca antes do prazo.`,
        `Havia-se publicado pela banca o resultado antes do prazo.`,
    ],

    correta: 1,

    explicacao: `O objeto direto 'o resultado' torna-se sujeito paciente; o mais-que-perfeito composto 'havia publicado' passa a 'havia sido publicado', preservando tempo e aspecto.`,

    feedbackAcerto: `Correto! O objeto direto 'o resultado' torna-se sujeito paciente; o mais-que-perfeito composto 'havia publicado' passa a 'havia sido publicado', preservando tempo e aspecto.`,

    feedbackErro: `A resposta correta é: O resultado havia sido publicado pela banca antes do prazo. O objeto direto 'o resultado' torna-se sujeito paciente; o mais-que-perfeito composto 'havia publicado' passa a 'havia sido publicado', preservando tempo e aspecto.`,

    dicaBanca: `Na mudança para a passiva, preserve o tempo verbal da ativa e transforme o objeto direto em sujeito paciente.`,
},

{
    pergunta: `A passagem de “Os recursos serão analisados pela comissão amanhã” para a voz ativa, sem alteração temporal, resulta em:`,

    alternativas: [
        `A comissão analisava os recursos amanhã.`,
        `Os recursos analisarão a comissão amanhã.`,
        `A comissão analisou os recursos amanhã.`,
        `A comissão analisará os recursos amanhã.`,
        `A comissão teria analisado os recursos amanhã.`,
    ],

    correta: 3,

    explicacao: `Na passiva, 'pela comissão' é agente da passiva; na ativa, torna-se sujeito. O futuro 'serão analisados' corresponde a 'analisará'.`,

    feedbackAcerto: `Correto! Na passiva, 'pela comissão' é agente da passiva; na ativa, torna-se sujeito. O futuro 'serão analisados' corresponde a 'analisará'.`,

    feedbackErro: `A resposta correta é: A comissão analisará os recursos amanhã. Na passiva, 'pela comissão' é agente da passiva; na ativa, torna-se sujeito. O futuro 'serão analisados' corresponde a 'analisará'.`,

    dicaBanca: `O agente da passiva costuma virar sujeito da ativa; mantenha o mesmo tempo verbal.`,
},

{
    pergunta: `Qual oração não admite, na construção apresentada, transposição regular para a voz passiva por não possuir objeto direto?`,

    alternativas: [
        `A coordenação divulgou o cronograma da formação.`,
        `Os estudantes precisam de orientação durante a atividade.`,
        `Os professores corrigiram as avaliações da turma.`,
        `A secretaria enviou o comunicado aos responsáveis durante a reunião de encerramento.`,
        `A equipe revisará os documentos nesta semana.`,
    ],

    correta: 1,

    explicacao: `Em 'precisar de', o complemento é preposicionado; não há objeto direto que possa tornar-se sujeito paciente. As demais construções apresentam objeto direto passível de promoção a sujeito.`,

    feedbackAcerto: `Correto! Em 'precisar de', o complemento é preposicionado; não há objeto direto que possa tornar-se sujeito paciente. As demais construções apresentam objeto direto passível de promoção a sujeito.`,

    feedbackErro: `A resposta correta é: Os estudantes precisam de orientação durante a atividade. Em 'precisar de', o complemento é preposicionado; não há objeto direto que possa tornar-se sujeito paciente. As demais construções apresentam objeto direto passível de promoção a sujeito.`,

    dicaBanca: `Para a passiva prototípica, procure um objeto direto na oração ativa.`,
},

{
    pergunta: `Em “Divulgaram-se os resultados finais”, a classificação e a concordância estão corretamente explicadas em:`,

    alternativas: [
        `sujeito indeterminado; “os resultados finais” funciona como objeto direto.`,
        `voz reflexiva; o sujeito pratica a ação sobre si mesmo.`,
        `voz ativa; o pronome “se” exerce função enfática sem alterar a estrutura.`,
        `voz passiva sintética; “os resultados finais” é sujeito paciente plural.`,
        `oração sem sujeito; o plural decorre do objeto posposto ao verbo.`,
    ],

    correta: 3,

    explicacao: `A construção equivale a 'Os resultados finais foram divulgados'. O 'se' é pronome apassivador e o verbo concorda com o sujeito paciente plural.`,

    feedbackAcerto: `Correto! A construção equivale a 'Os resultados finais foram divulgados'. O 'se' é pronome apassivador e o verbo concorda com o sujeito paciente plural.`,

    feedbackErro: `A resposta correta é: voz passiva sintética; “os resultados finais” é sujeito paciente plural. A construção equivale a 'Os resultados finais foram divulgados'. O 'se' é pronome apassivador e o verbo concorda com o sujeito paciente plural.`,

    dicaBanca: `Se a construção puder ser reescrita com 'foram + particípio', há forte indicação de passiva sintética.`,
},

{
    pergunta: `Assinale a frase adequada à norma-padrão quanto à concordância na voz passiva sintética.`,

    alternativas: [
        `Alugam-se salas equipadas para as oficinas de formação.`,
        `Aluga-se salas equipadas para as oficinas de formação.`,
        `Alugam-se sala equipada para as oficinas de formação.`,
        `Aluga-se as salas equipadas para as oficinas de formação.`,
        `Alugam-se de salas equipadas para as oficinas de formação.`,
    ],

    correta: 0,

    explicacao: `Na passiva sintética, 'salas equipadas' é sujeito paciente plural; por isso, o verbo deve ir ao plural: 'alugam-se'.`,

    feedbackAcerto: `Correto! Na passiva sintética, 'salas equipadas' é sujeito paciente plural; por isso, o verbo deve ir ao plural: 'alugam-se'.`,

    feedbackErro: `A resposta correta é: Alugam-se salas equipadas para as oficinas de formação. Na passiva sintética, 'salas equipadas' é sujeito paciente plural; por isso, o verbo deve ir ao plural: 'alugam-se'.`,

    dicaBanca: `Na passiva sintética, faça a pergunta: o que é alugado? A resposta será o sujeito paciente.`,
},

{
    pergunta: `Em qual alternativa o verbo deve permanecer no singular porque o “se” indetermina o sujeito?`,

    alternativas: [
        `Publicam-se editais em períodos definidos pelo cronograma.`,
        `Analisam-se recursos conforme os critérios do edital.`,
        `Precisa-se de revisores para a etapa final do projeto.`,
        `Corrigem-se redações com base em parâmetros previamente divulgados.`,
        `Distribuem-se certificados ao término da formação.`,
    ],

    correta: 2,

    explicacao: `'Precisar de' é transitivo indireto. Com índice de indeterminação do sujeito, o verbo fica na terceira pessoa do singular: 'precisa-se de revisores'.`,

    feedbackAcerto: `Correto! 'Precisar de' é transitivo indireto. Com índice de indeterminação do sujeito, o verbo fica na terceira pessoa do singular: 'precisa-se de revisores'.`,

    feedbackErro: `A resposta correta é: Precisa-se de revisores para a etapa final do projeto. 'Precisar de' é transitivo indireto. Com índice de indeterminação do sujeito, o verbo fica na terceira pessoa do singular: 'precisa-se de revisores'.`,

    dicaBanca: `O complemento iniciado por preposição pode indicar que o 'se' não é apassivador.`,
},

{
    pergunta: `Em “A candidata se maquiou antes da apresentação”, o pronome “se” indica:`,

    alternativas: [
        `voz passiva sintética, porque o sujeito recebe uma ação de agente não expresso.`,
        `índice de indeterminação do sujeito, pois não se identifica quem pratica a ação.`,
        `voz recíproca, porque há troca de ações entre participantes distintos.`,
        `agente da passiva, pois o pronome representa quem executa a ação verbal.`,
        `voz reflexiva, porque a ação praticada pelo sujeito recai sobre ele mesmo.`,
    ],

    correta: 4,

    explicacao: `A candidata pratica a ação e é também quem a recebe; o pronome reflexivo pode ser parafraseado por 'a si mesma'.`,

    feedbackAcerto: `Correto! A candidata pratica a ação e é também quem a recebe; o pronome reflexivo pode ser parafraseado por 'a si mesma'.`,

    feedbackErro: `A resposta correta é: voz reflexiva, porque a ação praticada pelo sujeito recai sobre ele mesmo. A candidata pratica a ação e é também quem a recebe; o pronome reflexivo pode ser parafraseado por 'a si mesma'.`,

    dicaBanca: `Teste a paráfrase 'a si mesmo(a)'. Se fizer sentido, há valor reflexivo.`,
},

{
    pergunta: `A construção que apresenta valor reflexivo recíproco é:`,

    alternativas: [
        `Antes do debate, cada representante preparou-se em silêncio.`,
        `Publicaram-se as regras do debate no mural da escola.`,
        `Ao final do debate, os representantes cumprimentaram-se mutuamente.`,
        `Necessita-se de mediadores experientes para a próxima rodada de discussões do conselho escolar.`,
        `O representante queixou-se da duração excessiva do encontro.`,
    ],

    correta: 2,

    explicacao: `O advérbio 'mutuamente' explicita que cada representante dirige a ação ao outro, caracterizando reciprocidade.`,

    feedbackAcerto: `Correto! O advérbio 'mutuamente' explicita que cada representante dirige a ação ao outro, caracterizando reciprocidade.`,

    feedbackErro: `A resposta correta é: Ao final do debate, os representantes cumprimentaram-se mutuamente. O advérbio 'mutuamente' explicita que cada representante dirige a ação ao outro, caracterizando reciprocidade.`,

    dicaBanca: `Na recíproca, experimente substituir o pronome por 'uns aos outros'.`,
},

{
    pergunta: `Considere: “Depois do treino, os atletas se observaram no espelho, cada um a si mesmo.” Nesse contexto, o “se” é:`,

    alternativas: [
        `pronome recíproco, porque o sujeito está no plural.`,
        `pronome apassivador, pois os atletas são pacientes da observação.`,
        `índice de indeterminação, porque o agente não aparece expresso.`,
        `parte integrante de verbo pronominal, sem função sintática autônoma no período apresentado.`,
        `pronome reflexivo, pois o contexto exclui a interpretação de ação mútua.`,
    ],

    correta: 4,

    explicacao: `O trecho 'cada um a si mesmo' desambigua a leitura: cada atleta observa a própria imagem, e não os demais.`,

    feedbackAcerto: `Correto! O trecho 'cada um a si mesmo' desambigua a leitura: cada atleta observa a própria imagem, e não os demais.`,

    feedbackErro: `A resposta correta é: pronome reflexivo, pois o contexto exclui a interpretação de ação mútua. O trecho 'cada um a si mesmo' desambigua a leitura: cada atleta observa a própria imagem, e não os demais.`,

    dicaBanca: `Sujeito plural não garante reciprocidade; o contexto define se a ação volta a cada sujeito ou circula entre eles.`,
},

{
    pergunta: `Na comparação entre “A comissão divulgou o resultado” e “O resultado foi divulgado”, a principal alteração discursiva da segunda forma é:`,

    alternativas: [
        `o resultado passa a ser agente e a comissão permanece sujeito oculto.`,
        `o foco recai sobre o resultado, e o agente da ação deixa de ser explicitado.`,
        `a ação deixa de ter paciente e passa a expressar estado permanente do resultado apresentado.`,
        `o tempo verbal muda do passado para o presente em razão da mudança de voz.`,
        `o sentido lexical de “divulgar” é substituído por valor reflexivo.`,
    ],

    correta: 1,

    explicacao: `A passiva permite tematizar o paciente e omitir o agente. A relação básica de ação é preservada, mas a organização informacional muda.`,

    feedbackAcerto: `Correto! A passiva permite tematizar o paciente e omitir o agente. A relação básica de ação é preservada, mas a organização informacional muda.`,

    feedbackErro: `A resposta correta é: o foco recai sobre o resultado, e o agente da ação deixa de ser explicitado. A passiva permite tematizar o paciente e omitir o agente. A relação básica de ação é preservada, mas a organização informacional muda.`,

    dicaBanca: `Voz verbal também organiza o foco: observe quem ocupa a posição de sujeito e quem pode ser omitido.`,
},

{
    pergunta: `Em “As inscrições foram encerradas ontem”, a ausência do agente da passiva significa que:`,

    alternativas: [
        `a oração se torna ativa porque não há termo introduzido por “por”.`,
        `o sujeito “as inscrições” passa a ser agente por estar antes do verbo.`,
        `a locução verbal deixa de indicar voz e passa a funcionar como verbo intransitivo, sem sujeito paciente expresso.`,
        `a oração continua passiva; o agente pode ser omitido quando não é relevante ou recuperável.`,
        `a estrutura fica sem sujeito, já que o responsável pela ação não foi nomeado.`,
    ],

    correta: 3,

    explicacao: `O agente da passiva não é obrigatório. 'As inscrições' continua sendo sujeito paciente de 'foram encerradas'.`,

    feedbackAcerto: `Correto! O agente da passiva não é obrigatório. 'As inscrições' continua sendo sujeito paciente de 'foram encerradas'.`,

    feedbackErro: `A resposta correta é: a oração continua passiva; o agente pode ser omitido quando não é relevante ou recuperável. O agente da passiva não é obrigatório. 'As inscrições' continua sendo sujeito paciente de 'foram encerradas'.`,

    dicaBanca: `Não confunda ausência de agente da passiva com ausência de sujeito.`,
},

{
    pergunta: `Assinale a alternativa em que a concordância do particípio está correta na voz passiva analítica.`,

    alternativas: [
        `As atas foram assinadas pelos membros da comissão.`,
        `As atas foram assinado pelos membros da comissão responsável pela análise.`,
        `As atas foi assinada pelos membros da comissão.`,
        `As atas foram assinado pela membros da comissão.`,
        `As atas foi assinadas pelos membros da comissão.`,
    ],

    correta: 0,

    explicacao: `Na passiva analítica, o particípio concorda em gênero e número com o sujeito paciente: 'as atas' → 'assinadas'.`,

    feedbackAcerto: `Correto! Na passiva analítica, o particípio concorda em gênero e número com o sujeito paciente: 'as atas' → 'assinadas'.`,

    feedbackErro: `A resposta correta é: As atas foram assinadas pelos membros da comissão. Na passiva analítica, o particípio concorda em gênero e número com o sujeito paciente: 'as atas' → 'assinadas'.`,

    dicaBanca: `Na passiva com 'ser', confira a concordância tanto do auxiliar quanto do particípio com o sujeito paciente.`,
},

{
    pergunta: `Na transformação de “Os professores elaboraram o projeto” em “O projeto foi elaborado pelos professores”, ocorre corretamente a seguinte correspondência:`,

    alternativas: [
        `o sujeito da ativa permanece sujeito, e o objeto direto torna-se agente da passiva.`,
        `o objeto direto da ativa torna-se objeto indireto, sem alteração do sujeito.`,
        `o sujeito agente desaparece na transformação e não pode ser recuperado na estrutura passiva.`,
        `o objeto direto da ativa torna-se sujeito paciente, e o sujeito agente torna-se agente da passiva.`,
        `o predicado verbal da ativa converte-se em predicado nominal, sem manter a relação com a ação original.`,
    ],

    correta: 3,

    explicacao: `'O projeto', objeto direto na ativa, passa a sujeito paciente; 'os professores', sujeito agente, aparece como agente da passiva introduzido por 'por'.`,

    feedbackAcerto: `Correto! 'O projeto', objeto direto na ativa, passa a sujeito paciente; 'os professores', sujeito agente, aparece como agente da passiva introduzido por 'por'.`,

    feedbackErro: `A resposta correta é: o objeto direto da ativa torna-se sujeito paciente, e o sujeito agente torna-se agente da passiva. 'O projeto', objeto direto na ativa, passa a sujeito paciente; 'os professores', sujeito agente, aparece como agente da passiva introduzido por 'por'.`,

    dicaBanca: `Mapeie as funções antes e depois: objeto direto ↔ sujeito paciente; sujeito agente ↔ agente da passiva.`,
},

{
    pergunta: `Em “Foram aprovadas novas regras para o processo seletivo”, o termo “novas regras” é:`,

    alternativas: [
        `sujeito paciente posposto, responsável pela concordância de “foram aprovadas”.`,
        `objeto direto posposto, sem influência sobre a concordância verbal.`,
        `agente da passiva, pois representa quem realiza a aprovação.`,
        `predicativo do objeto, ligado a um sujeito oculto indeterminado.`,
        `complemento nominal, porque completa o sentido do particípio “aprovadas” na estrutura passiva.`,
    ],

    correta: 0,

    explicacao: `A ordem verbo + sujeito não altera a função sintática. 'Novas regras' são aquilo que foi aprovado e, portanto, constituem sujeito paciente posposto.`,

    feedbackAcerto: `Correto! A ordem verbo + sujeito não altera a função sintática. 'Novas regras' são aquilo que foi aprovado e, portanto, constituem sujeito paciente posposto.`,

    feedbackErro: `A resposta correta é: sujeito paciente posposto, responsável pela concordância de “foram aprovadas”. A ordem verbo + sujeito não altera a função sintática. 'Novas regras' são aquilo que foi aprovado e, portanto, constituem sujeito paciente posposto.`,

    dicaBanca: `Sujeito não precisa vir antes do verbo; observe a concordância e o papel semântico.`,
},

{
    pergunta: `Em “Confia-se em profissionais experientes para a revisão final”, o “se” deve ser analisado como:`,

    alternativas: [
        `pronome apassivador, com “profissionais experientes” como sujeito paciente.`,
        `pronome reflexivo, porque a ação retorna ao sujeito da oração.`,
        `índice de indeterminação do sujeito, com verbo mantido no singular.`,
        `pronome recíproco, pois o plural indica ação entre elementos distintos.`,
        `agente da passiva, responsável pelo processo expresso pelo verbo.`,
    ],

    correta: 2,

    explicacao: `O verbo 'confiar', nessa construção, rege a preposição 'em'; não há objeto direto que possa tornar-se sujeito paciente. O 'se' indetermina o sujeito e o verbo permanece no singular.`,

    feedbackAcerto: `Correto! O verbo 'confiar', nessa construção, rege a preposição 'em'; não há objeto direto que possa tornar-se sujeito paciente. O 'se' indetermina o sujeito e o verbo permanece no singular.`,

    feedbackErro: `A resposta correta é: índice de indeterminação do sujeito, com verbo mantido no singular. O verbo 'confiar', nessa construção, rege a preposição 'em'; não há objeto direto que possa tornar-se sujeito paciente. O 'se' indetermina o sujeito e o verbo permanece no singular.`,

    dicaBanca: `Com verbo transitivo indireto + se, o termo preposicionado não funciona como sujeito paciente.`,
},

{
    pergunta: `Em “Vive-se bem nesta cidade”, a análise correta é:`,

    alternativas: [
        `há passiva sintética, e “bem” funciona como sujeito paciente.`,
        `há voz reflexiva, porque o sujeito pratica a ação sobre si mesmo.`,
        `há passiva analítica reduzida, com particípio elíptico após o verbo.`,
        `há voz recíproca, pois a ação de viver é compartilhada pelos moradores da cidade entre si.`,
        `o “se” indetermina o sujeito de um verbo intransitivo, que permanece no singular.`,
    ],

    correta: 4,

    explicacao: `'Viver' é intransitivo nessa construção; não há objeto direto para virar sujeito paciente. O 'se' funciona como índice de indeterminação do sujeito.`,

    feedbackAcerto: `Correto! 'Viver' é intransitivo nessa construção; não há objeto direto para virar sujeito paciente. O 'se' funciona como índice de indeterminação do sujeito.`,

    feedbackErro: `A resposta correta é: o “se” indetermina o sujeito de um verbo intransitivo, que permanece no singular. 'Viver' é intransitivo nessa construção; não há objeto direto para virar sujeito paciente. O 'se' funciona como índice de indeterminação do sujeito.`,

    dicaBanca: `Verbos intransitivos não formam passiva sintética; com 'se', pense em sujeito indeterminado.`,
},

{
    pergunta: `Em “O aluno se feriu durante a atividade”, o pronome “se” desempenha, na análise tradicional, função de:`,

    alternativas: [
        `sujeito paciente, porque recebe a ação expressa pelo verbo.`,
        `objeto direto reflexivo, pois o sujeito é agente e paciente da ação.`,
        `agente da passiva, porque indica quem causou o ferimento.`,
        `índice de indeterminação, porque oculta o responsável pela ação.`,
        `partícula apassivadora, porque transforma o verbo em voz passiva sintética.`,
    ],

    correta: 1,

    explicacao: `O verbo 'ferir' é transitivo direto; em 'feriu-se', o pronome retoma o próprio sujeito e funciona como complemento direto reflexivo.`,

    feedbackAcerto: `Correto! O verbo 'ferir' é transitivo direto; em 'feriu-se', o pronome retoma o próprio sujeito e funciona como complemento direto reflexivo.`,

    feedbackErro: `A resposta correta é: objeto direto reflexivo, pois o sujeito é agente e paciente da ação. O verbo 'ferir' é transitivo direto; em 'feriu-se', o pronome retoma o próprio sujeito e funciona como complemento direto reflexivo.`,

    dicaBanca: `Substitua 'se' por 'a si mesmo' e verifique a função exigida pelo verbo.`,
},

{
    pergunta: `Em “A coordenadora atribuiu-se a responsabilidade pelo acompanhamento”, o pronome “se” funciona como:`,

    alternativas: [
        `objeto direto reflexivo: a coordenadora atribuiu a si mesma como responsabilidade.`,
        `pronome apassivador: a responsabilidade praticou a ação sobre a coordenadora.`,
        `índice de indeterminação: não é possível identificar o sujeito da atribuição.`,
        `agente da passiva: o pronome representa quem recebeu a responsabilidade.`,
        `objeto indireto reflexivo: a coordenadora atribuiu a responsabilidade a si mesma.`,
    ],

    correta: 4,

    explicacao: `Na estrutura 'atribuir algo a alguém', 'a responsabilidade' é objeto direto e 'se' equivale a 'a si mesma', funcionando como objeto indireto reflexivo.`,

    feedbackAcerto: `Correto! Na estrutura 'atribuir algo a alguém', 'a responsabilidade' é objeto direto e 'se' equivale a 'a si mesma', funcionando como objeto indireto reflexivo.`,

    feedbackErro: `A resposta correta é: objeto indireto reflexivo: a coordenadora atribuiu a responsabilidade a si mesma. Na estrutura 'atribuir algo a alguém', 'a responsabilidade' é objeto direto e 'se' equivale a 'a si mesma', funcionando como objeto indireto reflexivo.`,

    dicaBanca: `Para descobrir a função do reflexivo, observe a regência do verbo: atribuir algo a alguém.`,
},

{
    pergunta: `A transposição de “A equipe deve revisar os documentos hoje” para a voz passiva, preservando a modalidade expressa por “deve”, é:`,

    alternativas: [
        `Os documentos devem revisar a equipe hoje.`,
        `Os documentos devem ser revisados pela equipe hoje.`,
        `A equipe deve ser revisada pelos documentos hoje.`,
        `Os documentos são devendo revisar pela equipe hoje.`,
        `Devem-se pela equipe revisar os documentos hoje.`,
    ],

    correta: 1,

    explicacao: `A locução modal 'deve revisar' transforma-se em 'devem ser revisados', mantendo a obrigação/necessidade e promovendo o objeto direto a sujeito paciente.`,

    feedbackAcerto: `Correto! A locução modal 'deve revisar' transforma-se em 'devem ser revisados', mantendo a obrigação/necessidade e promovendo o objeto direto a sujeito paciente.`,

    feedbackErro: `A resposta correta é: Os documentos devem ser revisados pela equipe hoje. A locução modal 'deve revisar' transforma-se em 'devem ser revisados', mantendo a obrigação/necessidade e promovendo o objeto direto a sujeito paciente.`,

    dicaBanca: `Em locuções verbais, preserve o auxiliar modal e introduza 'ser + particípio' na passiva.`,
},

{
    pergunta: `A transformação correta de “A comissão estava analisando os dados” para a voz passiva é:`,

    alternativas: [
        `Os dados estavam analisando a comissão.`,
        `A comissão estava sendo analisada pelos dados.`,
        `Os dados foram estando analisados pela comissão.`,
        `Os dados estavam sendo analisados pela comissão.`,
        `Os dados estavam sido analisados pela comissão.`,
    ],

    correta: 3,

    explicacao: `A forma progressiva 'estava analisando' corresponde, na passiva, a 'estavam sendo analisados', preservando o aspecto durativo.`,

    feedbackAcerto: `Correto! A forma progressiva 'estava analisando' corresponde, na passiva, a 'estavam sendo analisados', preservando o aspecto durativo.`,

    feedbackErro: `A resposta correta é: Os dados estavam sendo analisados pela comissão. A forma progressiva 'estava analisando' corresponde, na passiva, a 'estavam sendo analisados', preservando o aspecto durativo.`,

    dicaBanca: `Para manter o aspecto progressivo, a passiva costuma usar 'estar + sendo + particípio'.`,
},

{
    pergunta: `Em “A comissão tinha homologado as inscrições”, a transposição adequada para a voz passiva é:`,

    alternativas: [
        `As inscrições tinham sido homologadas pela comissão.`,
        `As inscrições tinham homologado a comissão.`,
        `A comissão tinha sido homologada pelas inscrições.`,
        `As inscrições foram tido homologadas pela comissão.`,
        `As inscrições tinham sendo homologadas pela comissão.`,
    ],

    correta: 0,

    explicacao: `O pretérito mais-que-perfeito composto 'tinha homologado' torna-se 'tinham sido homologadas', com concordância do auxiliar e do particípio com 'as inscrições'.`,

    feedbackAcerto: `Correto! O pretérito mais-que-perfeito composto 'tinha homologado' torna-se 'tinham sido homologadas', com concordância do auxiliar e do particípio com 'as inscrições'.`,

    feedbackErro: `A resposta correta é: As inscrições tinham sido homologadas pela comissão. O pretérito mais-que-perfeito composto 'tinha homologado' torna-se 'tinham sido homologadas', com concordância do auxiliar e do particípio com 'as inscrições'.`,

    dicaBanca: `Tempos compostos exigem atenção à sequência auxiliar + sido + particípio.`,
},

{
    pergunta: `A voz passiva de “A equipe terá concluído o relatório até sexta-feira” é:`,

    alternativas: [
        `O relatório terá concluído a equipe até sexta-feira.`,
        `A equipe terá sido concluída pelo relatório até sexta-feira.`,
        `O relatório terá sido concluído pela equipe até sexta-feira.`,
        `O relatório será ter concluído pela equipe até sexta-feira.`,
        `O relatório terá sendo concluído pela equipe até sexta-feira.`,
    ],

    correta: 2,

    explicacao: `O futuro composto 'terá concluído' passa a 'terá sido concluído', preservando a anterioridade futura e promovendo 'o relatório' a sujeito paciente.`,

    feedbackAcerto: `Correto! O futuro composto 'terá concluído' passa a 'terá sido concluído', preservando a anterioridade futura e promovendo 'o relatório' a sujeito paciente.`,

    feedbackErro: `A resposta correta é: O relatório terá sido concluído pela equipe até sexta-feira. O futuro composto 'terá concluído' passa a 'terá sido concluído', preservando a anterioridade futura e promovendo 'o relatório' a sujeito paciente.`,

    dicaBanca: `Em 'ter + particípio', a passiva introduz 'sido' antes do particípio principal.`,
},

{
    pergunta: `A relação de equivalência sintática está corretamente estabelecida em:`,

    alternativas: [
        `“Publicaram-se os editais” corresponde a “Os editais foram publicados”.`,
        `“Precisa-se de professores” corresponde a “Professores são precisados”.`,
        `“Vive-se bem aqui” corresponde a “Bem é vivido aqui”.`,
        `“Queixou-se do atraso” corresponde a “O atraso foi queixado”.`,
        `“Os colegas abraçaram-se” corresponde a “Os colegas foram abraçados por si”.`,
    ],

    correta: 0,

    explicacao: `'Publicaram-se os editais' é passiva sintética e pode ser convertida em passiva analítica. As outras frases envolvem indeterminação, verbo pronominal ou reciprocidade.`,

    feedbackAcerto: `Correto! 'Publicaram-se os editais' é passiva sintética e pode ser convertida em passiva analítica. As outras frases envolvem indeterminação, verbo pronominal ou reciprocidade.`,

    feedbackErro: `A resposta correta é: “Publicaram-se os editais” corresponde a “Os editais foram publicados”. 'Publicaram-se os editais' é passiva sintética e pode ser convertida em passiva analítica. As outras frases envolvem indeterminação, verbo pronominal ou reciprocidade.`,

    dicaBanca: `A equivalência entre passiva sintética e analítica depende de haver sujeito paciente.`,
},

{
    pergunta: `Em qual frase o plural do verbo é exigido pelo sujeito paciente de uma passiva sintética?`,

    alternativas: [
        `Precisa-se de vagas para os cursos de formação continuada.`,
        `Necessita-se de profissionais para os cursos de formação continuada.`,
        `Vive-se de experiências acumuladas ao longo da formação.`,
        `Oferecem-se vagas para os cursos de formação continuada.`,
        `Trata-se de vagas destinadas à formação continuada.`,
    ],

    correta: 3,

    explicacao: `'Vagas' é sujeito paciente de 'oferecem-se' e exige plural. Nas demais, o 'se' indetermina o sujeito ou integra construção que permanece no singular.`,

    feedbackAcerto: `Correto! 'Vagas' é sujeito paciente de 'oferecem-se' e exige plural. Nas demais, o 'se' indetermina o sujeito ou integra construção que permanece no singular.`,

    feedbackErro: `A resposta correta é: Oferecem-se vagas para os cursos de formação continuada. 'Vagas' é sujeito paciente de 'oferecem-se' e exige plural. Nas demais, o 'se' indetermina o sujeito ou integra construção que permanece no singular.`,

    dicaBanca: `Converta: 'Vagas são oferecidas'. Se a transformação funcionar, o verbo concorda com esse sujeito.`,
},

{
    pergunta: `Em “Publicou-se o edital” e “Publicaram-se os editais”, a mudança de número verbal se explica porque:`,

    alternativas: [
        `o agente da passiva passa de singular para plural e determina o verbo.`,
        `o sujeito paciente varia de singular para plural e controla a concordância.`,
        `o pronome “se” muda de índice de indeterminação para pronome reflexivo.`,
        `o objeto direto passa a exigir concordância verbal por estar depois do verbo.`,
        `o verbo deixa a voz passiva e passa à voz ativa quando aparece no plural.`,
    ],

    correta: 1,

    explicacao: `Nas duas construções, o 'se' é apassivador; 'o edital' e 'os editais' são sujeitos pacientes e determinam singular ou plural do verbo.`,

    feedbackAcerto: `Correto! Nas duas construções, o 'se' é apassivador; 'o edital' e 'os editais' são sujeitos pacientes e determinam singular ou plural do verbo.`,

    feedbackErro: `A resposta correta é: o sujeito paciente varia de singular para plural e controla a concordância. Nas duas construções, o 'se' é apassivador; 'o edital' e 'os editais' são sujeitos pacientes e determinam singular ou plural do verbo.`,

    dicaBanca: `Na passiva sintética, a concordância revela a relação entre verbo e sujeito paciente.`,
},

{
    pergunta: `Em “Os candidatos queixaram-se do atraso na divulgação”, o “se” é melhor classificado como:`,

    alternativas: [
        `pronome apassivador, porque “atraso” é sujeito paciente da oração.`,
        `índice de indeterminação do sujeito, porque não se identifica quem reclama do atraso mencionado.`,
        `pronome reflexivo, pois cada candidato pratica a queixa sobre si mesmo.`,
        `pronome recíproco, pois os candidatos dirigem a queixa uns aos outros.`,
        `parte integrante do verbo pronominal “queixar-se”, sem valor de voz reflexiva.`,
    ],

    correta: 4,

    explicacao: `'Queixar-se' é verbo pronominal; o pronome faz parte de sua forma lexical e não expressa ação que retorna ao sujeito.`,

    feedbackAcerto: `Correto! 'Queixar-se' é verbo pronominal; o pronome faz parte de sua forma lexical e não expressa ação que retorna ao sujeito.`,

    feedbackErro: `A resposta correta é: parte integrante do verbo pronominal “queixar-se”, sem valor de voz reflexiva. 'Queixar-se' é verbo pronominal; o pronome faz parte de sua forma lexical e não expressa ação que retorna ao sujeito.`,

    dicaBanca: `Nem todo 'se' junto a verbo indica voz reflexiva. Verifique se o verbo é pronominal por natureza.`,
},

{
    pergunta: `Em “A professora orgulhou-se do trabalho da turma”, a classificação do “se” é:`,

    alternativas: [
        `pronome apassivador, pois o trabalho da turma é sujeito paciente.`,
        `índice de indeterminação, porque o agente da ação não está expresso.`,
        `parte integrante do verbo pronominal “orgulhar-se”.`,
        `pronome reflexivo com função de objeto direto do verbo “orgulhar”.`,
        `pronome recíproco, pois a professora e a turma praticam ação mútua.`,
    ],

    correta: 2,

    explicacao: `'Orgulhar-se de' é verbo pronominal. O pronome integra o verbo e não pode ser interpretado como objeto que recebe uma ação do próprio sujeito.`,

    feedbackAcerto: `Correto! 'Orgulhar-se de' é verbo pronominal. O pronome integra o verbo e não pode ser interpretado como objeto que recebe uma ação do próprio sujeito.`,

    feedbackErro: `A resposta correta é: parte integrante do verbo pronominal “orgulhar-se”. 'Orgulhar-se de' é verbo pronominal. O pronome integra o verbo e não pode ser interpretado como objeto que recebe uma ação do próprio sujeito.`,

    dicaBanca: `Diferencie verbos pronominais de estruturas reflexivas: 'orgulhar-se de' exige o pronome em seu uso corrente.`,
},

{
    pergunta: `Em “Se houver vagas, a escola abrirá nova turma”, o primeiro “se”:`,

    alternativas: [
        `é pronome apassivador e transforma “houver” em voz passiva sintética.`,
        `é conjunção subordinativa condicional e não participa da classificação de voz verbal.`,
        `é índice de indeterminação do sujeito do verbo “haver”.`,
        `é pronome reflexivo, pois a condição retorna ao sujeito “vagas”.`,
        `é parte integrante de verbo pronominal, formando “haver-se” no sentido de existir no período.`,
    ],

    correta: 1,

    explicacao: `Nesse período, 'se' introduz uma oração condicional ('caso haja vagas'). Não é pronome e, portanto, não exerce função relacionada às vozes verbais.`,

    feedbackAcerto: `Correto! Nesse período, 'se' introduz uma oração condicional ('caso haja vagas'). Não é pronome e, portanto, não exerce função relacionada às vozes verbais.`,

    feedbackErro: `A resposta correta é: é conjunção subordinativa condicional e não participa da classificação de voz verbal. Nesse período, 'se' introduz uma oração condicional ('caso haja vagas'). Não é pronome e, portanto, não exerce função relacionada às vozes verbais.`,

    dicaBanca: `Antes de classificar o 'se', verifique se ele é pronome ou conjunção.`,
},

{
    pergunta: `Em um relatório administrativo, a frase “Foram identificadas inconsistências nos registros” pode ser preferida a “A equipe identificou inconsistências nos registros” quando se deseja:`,

    alternativas: [
        `eliminar o sujeito da oração e tornar a frase gramaticalmente impessoal.`,
        `transformar o verbo transitivo em intransitivo e retirar os complementos da oração.`,
        `indicar que as inconsistências praticaram a ação de identificação.`,
        `marcar reciprocidade entre a equipe e as inconsistências encontradas.`,
        `destacar o resultado da análise e não atribuir relevo ao agente que a realizou.`,
    ],

    correta: 4,

    explicacao: `A passiva organiza a informação em torno do paciente ou resultado e permite omitir o agente quando ele é secundário ao propósito comunicativo.`,

    feedbackAcerto: `Correto! A passiva organiza a informação em torno do paciente ou resultado e permite omitir o agente quando ele é secundário ao propósito comunicativo.`,

    feedbackErro: `A resposta correta é: destacar o resultado da análise e não atribuir relevo ao agente que a realizou. A passiva organiza a informação em torno do paciente ou resultado e permite omitir o agente quando ele é secundário ao propósito comunicativo.`,

    dicaBanca: `Pergunte qual elemento o redator deseja colocar em primeiro plano.`,
},

{
    pergunta: `A respeito da mudança de voz verbal, assinale a afirmação correta.`,

    alternativas: [
        `A transposição para a passiva exige mudança obrigatória do tempo verbal.`,
        `Toda oração ativa admite passiva desde que possua um sujeito expresso.`,
        `A ativa e a passiva podem manter agente e paciente, mas mudar o foco informacional.`,
        `A passiva elimina necessariamente o agente e impede sua recuperação no texto.`,
        `A voz reflexiva é uma variante formal da passiva sintética com o mesmo valor semântico.`,
    ],

    correta: 2,

    explicacao: `A transposição adequada preserva a relação semântica central, mas muda a organização sintática e frequentemente o foco discursivo.`,

    feedbackAcerto: `Correto! A transposição adequada preserva a relação semântica central, mas muda a organização sintática e frequentemente o foco discursivo.`,

    feedbackErro: `A resposta correta é: A ativa e a passiva podem manter agente e paciente, mas mudar o foco informacional. A transposição adequada preserva a relação semântica central, mas muda a organização sintática e frequentemente o foco discursivo.`,

    dicaBanca: `Distingua conteúdo proposicional de organização da informação.`,
},

{
    pergunta: `Na frase “A secretaria enviou os comunicados aos responsáveis”, a transposição correta para a passiva é:`,

    alternativas: [
        `Os comunicados foram enviados pela secretaria aos responsáveis.`,
        `Os responsáveis foram enviados os comunicados pela secretaria.`,
        `Aos responsáveis foram enviados pela secretaria como sujeito da oração.`,
        `A secretaria foi enviada aos responsáveis pelos comunicados.`,
        `Os comunicados enviaram-se aos responsáveis pela secretaria.`,
    ],

    correta: 0,

    explicacao: `O objeto direto 'os comunicados' torna-se sujeito paciente; 'aos responsáveis', objeto indireto, mantém sua função; 'a secretaria' torna-se agente da passiva, expresso por 'pela secretaria'.`,

    feedbackAcerto: `Correto! O objeto direto 'os comunicados' torna-se sujeito paciente; 'aos responsáveis', objeto indireto, mantém sua função; 'a secretaria' torna-se agente da passiva, expresso por 'pela secretaria'.`,

    feedbackErro: `A resposta correta é: Os comunicados foram enviados pela secretaria aos responsáveis. O objeto direto 'os comunicados' torna-se sujeito paciente; 'aos responsáveis', objeto indireto, mantém sua função; 'a secretaria' torna-se agente da passiva, expresso por 'pela secretaria'.`,

    dicaBanca: `Em verbos com dois complementos, apenas o objeto direto é promovido a sujeito na passiva padrão.`,
},

{
    pergunta: `Em “Aos responsáveis foram enviados os comunicados”, o sujeito da oração é:`,

    alternativas: [
        `“aos responsáveis”, sujeito paciente introduzido por preposição e ligado diretamente ao verbo.`,
        `indeterminado, porque a oração está na terceira pessoa do plural.`,
        `oculto, recuperado pela desinência de “foram”.`,
        `“os comunicados” é sujeito paciente posposto; “aos responsáveis” é objeto indireto.`,
        `“foram enviados”, sujeito oracional formado por locução verbal.`,
    ],

    correta: 3,

    explicacao: `A ordem dos termos não muda suas funções: 'os comunicados' concorda com 'foram enviados' e é sujeito paciente; 'aos responsáveis' permanece complemento indireto.`,

    feedbackAcerto: `Correto! A ordem dos termos não muda suas funções: 'os comunicados' concorda com 'foram enviados' e é sujeito paciente; 'aos responsáveis' permanece complemento indireto.`,

    feedbackErro: `A resposta correta é: “os comunicados” é sujeito paciente posposto; “aos responsáveis” é objeto indireto. A ordem dos termos não muda suas funções: 'os comunicados' concorda com 'foram enviados' e é sujeito paciente; 'aos responsáveis' permanece complemento indireto.`,

    dicaBanca: `Não confunda posição inicial com função de sujeito; use concordância e regência.`,
},

{
    pergunta: `Compare: I. “Vendeu-se a casa.” II. “Precisa-se de uma casa maior.” A diferença correta entre as construções é:`,

    alternativas: [
        `em I, o “se” é reflexivo; em II, é recíproco.`,
        `em I, há sujeito indeterminado; em II, “uma casa maior” é sujeito paciente.`,
        `em I, o “se” é apassivador; em II, é índice de indeterminação do sujeito.`,
        `nas duas, o “se” é apassivador e os termos nominais são sujeitos pacientes.`,
        `nas duas, o “se” é índice de indeterminação e os verbos devem ficar no singular.`,
    ],

    correta: 2,

    explicacao: `'Vender' é transitivo direto e permite 'A casa foi vendida'; 'precisar de' é transitivo indireto, por isso o 'se' indetermina o sujeito.`,

    feedbackAcerto: `Correto! 'Vender' é transitivo direto e permite 'A casa foi vendida'; 'precisar de' é transitivo indireto, por isso o 'se' indetermina o sujeito.`,

    feedbackErro: `A resposta correta é: em I, o “se” é apassivador; em II, é índice de indeterminação do sujeito. 'Vender' é transitivo direto e permite 'A casa foi vendida'; 'precisar de' é transitivo indireto, por isso o 'se' indetermina o sujeito.`,

    dicaBanca: `A transitividade do verbo é decisiva para distinguir pronome apassivador de índice de indeterminação.`,
},

{
    pergunta: `Assinale a alternativa em que a passiva sintética está corretamente empregada em contexto negativo.`,

    alternativas: [
        `Não se divulgaram os dados antes da autorização formal.`,
        `Não se divulgou os dados antes da autorização formal.`,
        `Não divulgaram-se os dados antes da autorização formal.`,
        `Não se divulgou dos dados antes da autorização formal.`,
        `Não se foram divulgados os dados antes da autorização formal.`,
    ],

    correta: 0,

    explicacao: `'Os dados' é sujeito paciente plural e exige 'divulgaram-se'. A palavra negativa favorece a próclise: 'não se divulgaram'.`,

    feedbackAcerto: `Correto! 'Os dados' é sujeito paciente plural e exige 'divulgaram-se'. A palavra negativa favorece a próclise: 'não se divulgaram'.`,

    feedbackErro: `A resposta correta é: Não se divulgaram os dados antes da autorização formal. 'Os dados' é sujeito paciente plural e exige 'divulgaram-se'. A palavra negativa favorece a próclise: 'não se divulgaram'.`,

    dicaBanca: `Aqui duas regras se encontram: concordância da passiva sintética e colocação do pronome após palavra negativa.`,
},

{
    pergunta: `Em “Proibiu-se a entrada de pessoas sem identificação”, a forma singular “proibiu-se” é explicada porque:`,

    alternativas: [
        `o sujeito está indeterminado e o verbo com “se” fica invariável.`,
        `“pessoas” é objeto direto plural, mas não interfere na concordância do verbo.`,
        `o verbo é impessoal e, por isso, não admite sujeito gramatical.`,
        `“a entrada de pessoas sem identificação” é sujeito paciente singular.`,
        `o pronome “se” é reflexivo e retoma um sujeito oculto singular.`,
    ],

    correta: 3,

    explicacao: `A construção equivale a 'A entrada de pessoas sem identificação foi proibida'. O núcleo do sujeito paciente é 'entrada', singular.`,

    feedbackAcerto: `Correto! A construção equivale a 'A entrada de pessoas sem identificação foi proibida'. O núcleo do sujeito paciente é 'entrada', singular.`,

    feedbackErro: `A resposta correta é: “a entrada de pessoas sem identificação” é sujeito paciente singular. A construção equivale a 'A entrada de pessoas sem identificação foi proibida'. O núcleo do sujeito paciente é 'entrada', singular.`,

    dicaBanca: `Na concordância, procure o núcleo do sujeito paciente, não o substantivo plural mais próximo.`,
},

{
    pergunta: `A forma correspondente a “Proibiram-se as entradas laterais” na voz passiva analítica é:`,

    alternativas: [
        `As entradas laterais proibiram os responsáveis.`,
        `As entradas laterais foram proibidas.`,
        `Foi proibido as entradas laterais.`,
        `As entradas laterais foram proibir.`,
        `Proibiu-se pelas entradas laterais.`,
    ],

    correta: 1,

    explicacao: `A passiva sintética 'proibiram-se as entradas' converte-se em 'as entradas foram proibidas', mantendo o sujeito paciente plural.`,

    feedbackAcerto: `Correto! A passiva sintética 'proibiram-se as entradas' converte-se em 'as entradas foram proibidas', mantendo o sujeito paciente plural.`,

    feedbackErro: `A resposta correta é: As entradas laterais foram proibidas. A passiva sintética 'proibiram-se as entradas' converte-se em 'as entradas foram proibidas', mantendo o sujeito paciente plural.`,

    dicaBanca: `Na conversão para a analítica, use ser + particípio e preserve a concordância do sujeito.`,
},

{
    pergunta: `Na oração “A equipe os revisou antes da reunião”, a transposição para a passiva deve recuperar o referente de “os” como sujeito. Se “os” retoma “os relatórios”, a forma correta é:`,

    alternativas: [
        `A equipe foi revisada pelos relatórios antes da reunião.`,
        `Os relatórios revisaram a equipe antes da reunião.`,
        `Foram revisado os relatórios pela equipe antes da reunião final.`,
        `Os relatórios foram revisar pela equipe antes da reunião.`,
        `Os relatórios foram revisados pela equipe antes da reunião.`,
    ],

    correta: 4,

    explicacao: `O pronome oblíquo 'os' funciona como objeto direto e, ao ser recuperado por 'os relatórios', esse referente torna-se sujeito paciente da passiva.`,

    feedbackAcerto: `Correto! O pronome oblíquo 'os' funciona como objeto direto e, ao ser recuperado por 'os relatórios', esse referente torna-se sujeito paciente da passiva.`,

    feedbackErro: `A resposta correta é: Os relatórios foram revisados pela equipe antes da reunião. O pronome oblíquo 'os' funciona como objeto direto e, ao ser recuperado por 'os relatórios', esse referente torna-se sujeito paciente da passiva.`,

    dicaBanca: `Pronomes objetos também podem representar o termo que será promovido a sujeito na passiva.`,
},

{
    pergunta: `A transposição de “Ana e Bruno redigiram o relatório final” para a passiva analítica é:`,

    alternativas: [
        `Ana e Bruno foram redigidos pelo relatório final.`,
        `O relatório final redigiram-se por Ana e Bruno.`,
        `Foram redigido o relatório final por Ana e Bruno.`,
        `O relatório final foi redigido por Ana e Bruno.`,
        `O relatório final foi redigir por Ana e Bruno.`,
    ],

    correta: 3,

    explicacao: `O objeto direto singular 'o relatório final' torna-se sujeito paciente singular; o sujeito composto da ativa passa a agente da passiva.`,

    feedbackAcerto: `Correto! O objeto direto singular 'o relatório final' torna-se sujeito paciente singular; o sujeito composto da ativa passa a agente da passiva.`,

    feedbackErro: `A resposta correta é: O relatório final foi redigido por Ana e Bruno. O objeto direto singular 'o relatório final' torna-se sujeito paciente singular; o sujeito composto da ativa passa a agente da passiva.`,

    dicaBanca: `O número do agente da passiva não determina a concordância; quem controla 'foi redigido' é o sujeito paciente.`,
},

{
    pergunta: `Considere as frases: I. “Os estudantes se cumprimentaram mutuamente.” II. “Os estudantes se pentearam individualmente diante do espelho.” A classificação correta é:`,

    alternativas: [
        `I e II são passivas sintéticas, pois o “se” transforma os sujeitos em pacientes.`,
        `I é recíproca; II é reflexiva em relação a cada integrante do sujeito plural.`,
        `I é reflexiva individual; II é recíproca por apresentar sujeito plural.`,
        `I tem sujeito indeterminado; II apresenta pronome apassivador.`,
        `I e II contêm verbos pronominais sem qualquer valor de voz.`,
    ],

    correta: 1,

    explicacao: `'Mutuamente' explicita ação entre os participantes; em II, cada estudante pratica sobre si a ação de pentear, o que caracteriza reflexividade individual.`,

    feedbackAcerto: `Correto! 'Mutuamente' explicita ação entre os participantes; em II, cada estudante pratica sobre si a ação de pentear, o que caracteriza reflexividade individual.`,

    feedbackErro: `A resposta correta é: I é recíproca; II é reflexiva em relação a cada integrante do sujeito plural. 'Mutuamente' explicita ação entre os participantes; em II, cada estudante pratica sobre si a ação de pentear, o que caracteriza reflexividade individual.`,

    dicaBanca: `Marcadores como 'mutuamente', 'entre si' e 'cada um' ajudam a desambiguar o valor do reflexivo.`,
},

{
    pergunta: `Analise: I. “Os resultados foram divulgados pela direção.” II. “Divulgaram-se os resultados.” III. “A direção divulgou os resultados.” A correspondência correta é:`,

    alternativas: [
        `I é ativa, II é reflexiva e III é passiva analítica.`,
        `I é passiva sintética, II é ativa e III é reflexiva.`,
        `I e II são ativas; III é passiva por apresentar objeto direto expresso.`,
        `I é reflexiva, II é indeterminada e III é passiva sintética.`,
        `I é passiva analítica, II é passiva sintética e III é voz ativa.`,
    ],

    correta: 4,

    explicacao: `As três formas mantêm a relação entre direção, ação de divulgar e resultados, mas organizam sintaticamente os participantes de modos diferentes.`,

    feedbackAcerto: `Correto! As três formas mantêm a relação entre direção, ação de divulgar e resultados, mas organizam sintaticamente os participantes de modos diferentes.`,

    feedbackErro: `A resposta correta é: I é passiva analítica, II é passiva sintética e III é voz ativa. As três formas mantêm a relação entre direção, ação de divulgar e resultados, mas organizam sintaticamente os participantes de modos diferentes.`,

    dicaBanca: `Identifique quem pratica a ação e quem ocupa a posição de sujeito em cada frase.`,
},

{
    pergunta: `Analise as afirmações sobre “Compraram-se novos computadores para o laboratório”: I. “novos computadores” é sujeito paciente; II. o verbo concorda com esse termo; III. a frase pode ser convertida em “Novos computadores foram comprados para o laboratório”. Está correto o que se afirma em:`,

    alternativas: [
        `as afirmações I e II.`,
        `as afirmações I e III.`,
        `todas as afirmações.`,
        `as afirmações II e III.`,
        `a afirmação III.`,
    ],

    correta: 2,

    explicacao: `A oração está na passiva sintética: o termo nominal é sujeito paciente plural, controla a concordância e admite conversão para a passiva analítica.`,

    feedbackAcerto: `Correto! A oração está na passiva sintética: o termo nominal é sujeito paciente plural, controla a concordância e admite conversão para a passiva analítica.`,

    feedbackErro: `A resposta correta é: todas as afirmações. A oração está na passiva sintética: o termo nominal é sujeito paciente plural, controla a concordância e admite conversão para a passiva analítica.`,

    dicaBanca: `Use a conversão para ser + particípio para confirmar simultaneamente função sintática e voz.`,
},

{
    pergunta: `Analise: I. “Precisa-se de monitores.” II. “Contratam-se monitores.” Sobre o “se”, assinale a alternativa correta.`,

    alternativas: [
        `Em I, há sujeito indeterminado; em II, “monitores” é sujeito paciente.`,
        `Em I e II, o pronome é apassivador e “monitores” funciona como sujeito paciente.`,
        `Em I e II, o sujeito é indeterminado e o verbo deve permanecer no singular.`,
        `Em I, há voz reflexiva; em II, há voz recíproca.`,
        `Em I, “monitores” é objeto direto; em II, é agente da passiva.`,
    ],

    correta: 0,

    explicacao: `'Precisar de' é transitivo indireto, enquanto 'contratar' é transitivo direto. A transitividade determina a função do 'se' e a concordância.`,

    feedbackAcerto: `Correto! 'Precisar de' é transitivo indireto, enquanto 'contratar' é transitivo direto. A transitividade determina a função do 'se' e a concordância.`,

    feedbackErro: `A resposta correta é: Em I, há sujeito indeterminado; em II, “monitores” é sujeito paciente. 'Precisar de' é transitivo indireto, enquanto 'contratar' é transitivo direto. A transitividade determina a função do 'se' e a concordância.`,

    dicaBanca: `Compare a regência dos verbos antes de classificar o pronome.`,
},

{
    pergunta: `Assinale a reescrita que mantém o tempo verbal e a relação entre os participantes de “A direção convocará os candidatos aprovados”.`,

    alternativas: [
        `Os candidatos aprovados foram convocados pela direção.`,
        `A direção será convocada pelos candidatos aprovados.`,
        `Os candidatos aprovados seriam convocados pela direção.`,
        `Os candidatos aprovados são convocados pela direção.`,
        `Os candidatos aprovados serão convocados pela direção.`,
    ],

    correta: 4,

    explicacao: `'Convocará' está no futuro do presente; a passiva correspondente é 'serão convocados'. Agente e paciente mantêm seus papéis semânticos.`,

    feedbackAcerto: `Correto! 'Convocará' está no futuro do presente; a passiva correspondente é 'serão convocados'. Agente e paciente mantêm seus papéis semânticos.`,

    feedbackErro: `A resposta correta é: Os candidatos aprovados serão convocados pela direção. 'Convocará' está no futuro do presente; a passiva correspondente é 'serão convocados'. Agente e paciente mantêm seus papéis semânticos.`,

    dicaBanca: `Uma boa transposição preserva tempo, agente e paciente, ainda que altere as funções sintáticas.`,
},

{
    pergunta: `Assinale a reescrita correta de “Os documentos tinham sido arquivados pela secretaria” na voz ativa.`,

    alternativas: [
        `Os documentos tinham arquivado a secretaria.`,
        `A secretaria foi arquivada pelos documentos.`,
        `A secretaria tinha arquivado os documentos.`,
        `A secretaria arquivava os documentos naquele mesmo tempo composto.`,
        `A secretaria tinha sido arquivada os documentos.`,
    ],

    correta: 2,

    explicacao: `O agente da passiva 'pela secretaria' torna-se sujeito; o sujeito paciente 'os documentos' volta a objeto direto, preservando o mais-que-perfeito composto 'tinha arquivado'.`,

    feedbackAcerto: `Correto! O agente da passiva 'pela secretaria' torna-se sujeito; o sujeito paciente 'os documentos' volta a objeto direto, preservando o mais-que-perfeito composto 'tinha arquivado'.`,

    feedbackErro: `A resposta correta é: A secretaria tinha arquivado os documentos. O agente da passiva 'pela secretaria' torna-se sujeito; o sujeito paciente 'os documentos' volta a objeto direto, preservando o mais-que-perfeito composto 'tinha arquivado'.`,

    dicaBanca: `Na volta à ativa, retire 'sido' e mantenha o auxiliar temporal original.`,
},

{
    pergunta: `Em qual alternativa a oração está na voz ativa, embora o sujeito não apareça expresso lexicalmente?`,

    alternativas: [
        `Conferiram os documentos antes da reunião.`,
        `Os documentos foram conferidos antes da reunião.`,
        `Conferiram-se os documentos antes da reunião.`,
        `Foram conferidos os documentos antes da reunião.`,
        `Os documentos se conferiram mutuamente antes da reunião.`,
    ],

    correta: 0,

    explicacao: `'Conferiram os documentos' está na ativa com sujeito não expresso, recuperável ou indeterminado conforme o contexto; 'os documentos' é objeto direto.`,

    feedbackAcerto: `Correto! 'Conferiram os documentos' está na ativa com sujeito não expresso, recuperável ou indeterminado conforme o contexto; 'os documentos' é objeto direto.`,

    feedbackErro: `A resposta correta é: Conferiram os documentos antes da reunião. 'Conferiram os documentos' está na ativa com sujeito não expresso, recuperável ou indeterminado conforme o contexto; 'os documentos' é objeto direto.`,

    dicaBanca: `Voz ativa não exige sujeito lexicalmente escrito; observe se o sujeito, ainda que não expresso, é agente da ação.`,
},

{
    pergunta: `Em “Foram revisadas pela equipe todas as propostas recebidas”, qual elemento controla a concordância de “foram revisadas”?`,

    alternativas: [
        `“pela equipe”, agente da passiva singular.`,
        `“equipe”, núcleo do complemento verbal.`,
        `um sujeito oculto equivalente a “eles”.`,
        `“todas as propostas recebidas”, sujeito paciente posposto.`,
        `o verbo auxiliar, que não se relaciona com nenhum termo nominal.`,
    ],

    correta: 3,

    explicacao: `O sujeito paciente pode vir depois do agente da passiva. O núcleo 'propostas' é feminino plural e determina 'foram revisadas'.`,

    feedbackAcerto: `Correto! O sujeito paciente pode vir depois do agente da passiva. O núcleo 'propostas' é feminino plural e determina 'foram revisadas'.`,

    feedbackErro: `A resposta correta é: “todas as propostas recebidas”, sujeito paciente posposto. O sujeito paciente pode vir depois do agente da passiva. O núcleo 'propostas' é feminino plural e determina 'foram revisadas'.`,

    dicaBanca: `Na passiva analítica, concorde com o paciente, não com o agente introduzido por 'por'.`,
},

{
    pergunta: `A frase “O relatório foi elaborado pela comissão” passa para a voz ativa corretamente em:`,

    alternativas: [
        `O relatório elaborou a comissão.`,
        `A comissão elaborou o relatório.`,
        `A comissão foi elaborar pelo relatório.`,
        `Elaborou-se pela comissão o relatório.`,
        `A comissão era elaborada pelo relatório.`,
    ],

    correta: 1,

    explicacao: `O agente da passiva 'pela comissão' torna-se sujeito agente; 'o relatório', sujeito paciente, volta a objeto direto.`,

    feedbackAcerto: `Correto! O agente da passiva 'pela comissão' torna-se sujeito agente; 'o relatório', sujeito paciente, volta a objeto direto.`,

    feedbackErro: `A resposta correta é: A comissão elaborou o relatório. O agente da passiva 'pela comissão' torna-se sujeito agente; 'o relatório', sujeito paciente, volta a objeto direto.`,

    dicaBanca: `Na ativa, quem fazia a ação na passiva volta à posição de sujeito.`,
},

];
