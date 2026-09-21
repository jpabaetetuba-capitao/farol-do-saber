/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 07
   ESTRUTURA DA FRASE PORTUGUESA:
   operações de deslocamento, substituição, modificação e correção

   Edital SEDUC-PA 2026:
   “Estrutura da frase portuguesa: operações de deslocamento,
   substituição, modificação e correção.”

   Foco do bloco:
   • deslocamento de termos e orações
   • posição e escopo semântico
   • substituição pronominal, lexical e estrutural
   • conectivos e equivalência de sentido
   • modificação por modalizadores, intensificadores e restritores
   • correção de paralelismo, clareza, ambiguidade e redundância
   • reescritura com preservação de sentido

   25 questões autorais calibradas por questões oficiais FGV,
   com feedback específico por alternativa.
========================================================== */

(function(){
    "use strict";

    const banco =
[
    {
        "id": "SEDUC-LP-EFP-001",
        "numero": 1,
        "subtopico": "Deslocamento de adjunto adverbial",
        "dificuldade": "media",
        "pergunta": "A frase “Os candidatos receberão, após a conferência dos documentos, o comprovante definitivo” foi reescrita com deslocamento do termo adverbial. Assinale a reescritura que preserva o sentido básico e apresenta pontuação adequada.",
        "alternativas": [
            "Após a conferência dos documentos, os candidatos receberão o comprovante definitivo.",
            "Os candidatos, após, a conferência dos documentos receberão o comprovante definitivo.",
            "Os candidatos receberão após, a conferência dos documentos, o comprovante definitivo.",
            "Após, a conferência dos documentos os candidatos, receberão o comprovante definitivo.",
            "Os candidatos receberão o comprovante, definitivo após a conferência dos documentos."
        ],
        "correta": 0,
        "feedbackAcerto": "O adjunto adverbial foi levado para o início da frase e, por sua extensão, ficou corretamente isolado por vírgula.",
        "feedbackErro": "No deslocamento, não basta mover o termo: a nova posição pode exigir ajuste de pontuação. A alternativa correta preserva a relação temporal sem quebrar os constituintes.",
        "analiseAlternativas": [
            "Correta. O deslocamento é natural, preserva o sentido e recebe pontuação adequada.",
            "Incorreta. A vírgula separa indevidamente a preposição do complemento.",
            "Incorreta. A vírgula depois de “após” rompe a expressão preposicional.",
            "Incorreta. Há vírgulas separando termos que devem permanecer unidos.",
            "Incorreta. A vírgula separa o substantivo de seu adjetivo."
        ],
        "dicaBanca": "A FGV frequentemente combina deslocamento com pontuação: pergunte primeiro qual bloco foi movido e depois se a nova posição exige isolamento.",
        "pegadinha": "Deslocar um termo corretamente pode tornar a pontuação antiga inadequada.",
        "memorizar2026": "Deslocamento = mover um constituinte; a estrutura e a pontuação precisam acompanhar a nova posição.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV de reescritura e deslocamento; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-002",
        "numero": 2,
        "subtopico": "Deslocamento e alteração de sentido",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase em que o deslocamento do termo destacado altera de modo relevante o sentido.",
        "alternativas": [
            "Ontem, os alunos entregaram os trabalhos. / Os alunos entregaram os trabalhos ontem.",
            "Somente João revisou o relatório. / João revisou somente o relatório.",
            "Na biblioteca, os candidatos aguardaram o resultado. / Os candidatos aguardaram o resultado na biblioteca.",
            "Depois da aula, a professora respondeu às perguntas. / A professora respondeu às perguntas depois da aula.",
            "Com atenção, o fiscal conferiu os documentos. / O fiscal conferiu os documentos com atenção."
        ],
        "correta": 1,
        "feedbackAcerto": "A posição de “somente” muda seu escopo: na primeira frase, exclui outras pessoas; na segunda, restringe aquilo que João revisou.",
        "feedbackErro": "Alguns deslocamentos afetam apenas a ordem; outros mudam o alcance semântico de palavras como “só”, “somente”, “até” e “também”.",
        "analiseAlternativas": [
            "Incorreta. A informação temporal permanece essencialmente a mesma.",
            "Correta. O foco de exclusão passa do sujeito para o objeto.",
            "Incorreta. A localização continua associada à espera.",
            "Incorreta. A circunstância temporal é preservada.",
            "Incorreta. O modo de realização da conferência permanece o mesmo."
        ],
        "dicaBanca": "Observe o escopo de advérbios focalizadores. A FGV gosta de mudanças de posição que parecem pequenas, mas alteram o termo atingido.",
        "pegadinha": "A frase pode continuar gramatical e, ainda assim, mudar de sentido.",
        "memorizar2026": "Mover “só/somente/até/também” pode mudar o foco da informação.",
        "fonte": "Questão autoral calibrada por padrão FGV sobre posição e escopo; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-003",
        "numero": 3,
        "subtopico": "Posição do adjetivo",
        "dificuldade": "alta",
        "pergunta": "Em qual par a mudança de posição do adjetivo tende a produzir mudança de sentido?",
        "alternativas": [
            "documento oficial / oficial documento",
            "decisão administrativa / administrativa decisão",
            "homem pobre / pobre homem",
            "medida provisória / provisória medida",
            "resultado final / final resultado"
        ],
        "correta": 2,
        "feedbackAcerto": "Em “homem pobre”, pobre tende a indicar falta de recursos; em “pobre homem”, tende a expressar compaixão ou avaliação.",
        "feedbackErro": "Em português, certos adjetivos mudam de valor conforme aparecem antes ou depois do substantivo. A FGV explora essa diferença de posição.",
        "analiseAlternativas": [
            "Incorreta. A anteposição é pouco natural, mas não oferece a oposição semântica típica pedida.",
            "Incorreta. A mudança gera construção marcada, sem a oposição lexical consagrada do item correto.",
            "Correta. A posição altera o valor semântico do adjetivo.",
            "Incorreta. A anteposição é marcada e não constitui a oposição típica.",
            "Incorreta. A inversão não oferece a mudança semântica clássica do item correto."
        ],
        "dicaBanca": "Adjetivos como “pobre”, “grande”, “certo”, “novo”, “simples” e “velho” podem alterar o significado conforme a posição.",
        "pegadinha": "Nem toda mudança de ordem é apenas estilística.",
        "memorizar2026": "Adjetivo anteposto pode ganhar valor avaliativo; posposto tende mais à caracterização objetiva, conforme o contexto.",
        "fonte": "Questão autoral calibrada por padrão FGV de posição e significado; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-004",
        "numero": 4,
        "subtopico": "Deslocamento de oração adverbial",
        "dificuldade": "media",
        "pergunta": "A frase “A equipe retomará o atendimento quando o sistema voltar a funcionar” foi reescrita com deslocamento da oração adverbial. A forma adequada é",
        "alternativas": [
            "A equipe, retomará o atendimento quando o sistema voltar a funcionar.",
            "A equipe retomará, quando o sistema voltar, a funcionar o atendimento.",
            "Quando o sistema, voltar a funcionar a equipe retomará o atendimento.",
            "Quando o sistema voltar a funcionar, a equipe retomará o atendimento.",
            "Quando, o sistema voltar a funcionar, a equipe retomará o atendimento."
        ],
        "correta": 3,
        "feedbackAcerto": "A oração adverbial temporal foi antecipada e corretamente separada da oração principal por vírgula.",
        "feedbackErro": "Ao deslocar uma oração adverbial para o início, a vírgula costuma marcar a fronteira entre o segmento antecipado e a oração principal.",
        "analiseAlternativas": [
            "Incorreta. A vírgula separa sujeito e predicado.",
            "Incorreta. A reordenação quebra a locução verbal “voltar a funcionar” e altera a estrutura.",
            "Incorreta. A vírgula está mal posicionada dentro da oração temporal.",
            "Correta. A estrutura e a pontuação estão adequadas.",
            "Incorreta. A vírgula após “Quando” é indevida."
        ],
        "dicaBanca": "FGV: deslocamento de oração adverbial antecipada costuma vir associado à pontuação.",
        "pegadinha": "Não coloque vírgula entre conjunção e o restante da oração que ela introduz.",
        "memorizar2026": "Oração adverbial antecipada: deslocamento + vírgula de separação do bloco.",
        "fonte": "Questão autoral calibrada por provas oficiais FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-005",
        "numero": 5,
        "subtopico": "Substituição por pronome",
        "dificuldade": "media",
        "pergunta": "Assinale a substituição que preserva a estrutura e o sentido da frase “A comissão analisou os recursos”.",
        "alternativas": [
            "A comissão analisou-lhes.",
            "A comissão lhes analisou.",
            "A comissão analisou a eles os recursos.",
            "A comissão analisou-lhe os recursos.",
            "A comissão analisou-os."
        ],
        "correta": 4,
        "feedbackAcerto": "“Os recursos” exerce função de objeto direto masculino plural; a substituição por “os” é adequada: “analisou-os”.",
        "feedbackErro": "Na substituição pronominal, identifique antes a função sintática do termo substituído. Objeto direto pede, nesse caso, pronome oblíquo átono “os”.",
        "analiseAlternativas": [
            "Incorreta. “Lhes” não substitui objeto direto nesse contexto.",
            "Incorreta. O problema permanece: “lhes” não exerce a função pedida.",
            "Incorreta. A construção duplica inadequadamente a estrutura.",
            "Incorreta. “Lhe” não substitui “os recursos” como objeto direto.",
            "Correta. O pronome “os” retoma adequadamente o objeto direto."
        ],
        "dicaBanca": "FGV usa substituição para testar simultaneamente função sintática, regência e colocação do pronome.",
        "pegadinha": "Não escolha o pronome apenas pelo número; primeiro descubra a função do termo.",
        "memorizar2026": "Objeto direto: o/a/os/as; objeto indireto com “a”: lhe/lhes, quando cabível.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV de substituição pronominal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-006",
        "numero": 6,
        "subtopico": "Substituição lexical e coesão",
        "dificuldade": "media",
        "pergunta": "Em “O celular foi encontrado no auditório. O aparelho foi entregue à coordenação”, a substituição de “celular” por “aparelho” no segundo período é um exemplo de",
        "alternativas": [
            "substituição lexical por termo de sentido mais abrangente, evitando repetição.",
            "deslocamento sintático do objeto direto.",
            "correção de concordância nominal.",
            "modificação do tempo verbal.",
            "supressão por elipse."
        ],
        "correta": 0,
        "feedbackAcerto": "“Aparelho” retoma “celular” por uma expressão lexical mais abrangente, mantendo a referência e evitando repetição.",
        "feedbackErro": "A operação ocorre no vocabulário: um item lexical é trocado por outro que conserva a referência no contexto.",
        "analiseAlternativas": [
            "Correta. Há substituição lexical coesiva.",
            "Incorreta. Nenhum constituinte foi apenas deslocado.",
            "Incorreta. Não há problema de concordância em correção.",
            "Incorreta. Os tempos verbais não são o foco da operação.",
            "Incorreta. O referente não foi omitido; foi retomado por outra palavra."
        ],
        "dicaBanca": "A FGV cobra substituições por sinônimos, hiperônimos, pronomes e expressões equivalentes.",
        "pegadinha": "Evitar repetição pode ocorrer por substituição ou por elipse; são operações diferentes.",
        "memorizar2026": "Substituição lexical = trocar a forma e manter a referência/sentido pertinente ao contexto.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-007",
        "numero": 7,
        "subtopico": "Substituição de locução por palavra",
        "dificuldade": "alta",
        "pergunta": "Assinale a substituição adequada da expressão destacada por uma única palavra, sem alteração relevante do sentido: “O relatório apresenta uma conclusão que não admite dúvida”.",
        "alternativas": [
            "improvável",
            "indubitável",
            "eventual",
            "duvidosa",
            "provisória"
        ],
        "correta": 1,
        "feedbackAcerto": "“Indubitável” significa aquilo que não admite dúvida.",
        "feedbackErro": "A FGV costuma cobrar concisão pela substituição de uma expressão perifrástica por um vocábulo semanticamente equivalente.",
        "analiseAlternativas": [
            "Incorreta. “Improvável” diz respeito a baixa probabilidade, não ausência de dúvida.",
            "Correta. Preserva o sentido de “que não admite dúvida”.",
            "Incorreta. “Eventual” indica possibilidade/ocasionalidade.",
            "Incorreta. Expressa o sentido oposto.",
            "Incorreta. Indica algo temporário ou não definitivo."
        ],
        "dicaBanca": "Na substituição concisa, confira se a nova palavra conserva o núcleo semântico inteiro da expressão.",
        "pegadinha": "Palavras do mesmo campo de ideia podem não ser equivalentes.",
        "memorizar2026": "Substituir bem = reduzir a forma sem reduzir ou deformar o sentido.",
        "fonte": "Questão autoral calibrada por questão oficial FGV sobre locução → palavra; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-008",
        "numero": 8,
        "subtopico": "Substituição de oração por adjetivo",
        "dificuldade": "alta",
        "pergunta": "A expressão “uma medida que pode ser realizada” pode ser substituída, com sentido equivalente, por",
        "alternativas": [
            "uma medida realizadora.",
            "uma medida realizada.",
            "uma medida realizável.",
            "uma medida realizante.",
            "uma medida realizativa."
        ],
        "correta": 2,
        "feedbackAcerto": "“Realizável” equivale a “que pode ser realizada”, condensando a oração adjetiva em um adjetivo.",
        "feedbackErro": "A substituição deve preservar a ideia modal de possibilidade, e não indicar que a ação já ocorreu.",
        "analiseAlternativas": [
            "Incorreta. Indica quem realiza, não aquilo que pode ser realizado.",
            "Incorreta. Indica ação já concluída.",
            "Correta. Mantém a noção de possibilidade.",
            "Incorreta. Não corresponde ao valor semântico pedido.",
            "Incorreta. Não é a forma adequada para essa equivalência."
        ],
        "dicaBanca": "FGV explora a transformação oração adjetiva ↔ adjetivo.",
        "pegadinha": "“Realizado” e “realizável” são próximos na forma, mas muito diferentes no tempo e na modalidade.",
        "memorizar2026": "“-ável/-ível” frequentemente expressa possibilidade: que pode ser X.",
        "fonte": "Questão autoral calibrada por padrão oficial FGV de substituição oração/adjetivo; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-009",
        "numero": 9,
        "subtopico": "Substituição de conectivo",
        "dificuldade": "alta",
        "pergunta": "Na frase “O prazo terminou; portanto, novas inscrições não serão aceitas”, o conectivo “portanto” pode ser substituído, sem alterar a relação lógica, por",
        "alternativas": [
            "embora.",
            "porque.",
            "contudo.",
            "por conseguinte.",
            "caso."
        ],
        "correta": 3,
        "feedbackAcerto": "“Por conseguinte” mantém a relação conclusiva/consecutiva estabelecida por “portanto”.",
        "feedbackErro": "Substituir conectivos exige preservar a relação lógica entre os segmentos, não apenas escolher palavra formalmente parecida.",
        "analiseAlternativas": [
            "Incorreta. Indica concessão.",
            "Incorreta. Indica causa/explicação conforme o contexto.",
            "Incorreta. Indica oposição.",
            "Correta. Mantém a relação de conclusão.",
            "Incorreta. Indica condição."
        ],
        "dicaBanca": "A FGV testa substituição de conectivos pelo efeito lógico resultante.",
        "pegadinha": "Conectivos “formais” não são intercambiáveis só porque soam equivalentes.",
        "memorizar2026": "Troca de conectivo só é válida se mantiver a relação semântica original.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-010",
        "numero": 10,
        "subtopico": "Substituição e referência",
        "dificuldade": "media",
        "pergunta": "Em “A coordenadora entregou o relatório à diretora e pediu que ela o lesse”, a substituição pronominal produz possível ambiguidade porque",
        "alternativas": [
            "“o” pode retomar tanto a coordenadora quanto a diretora.",
            "“relatório” não admite retomada pronominal.",
            "“lesse” não admite sujeito expresso.",
            "“à diretora” não pode ser substituído por pronome.",
            "“ela” pode retomar a coordenadora ou a diretora."
        ],
        "correta": 4,
        "feedbackAcerto": "O pronome “ela” encontra dois referentes femininos singulares plausíveis no contexto.",
        "feedbackErro": "Uma substituição pode ser gramatical e ainda assim piorar a clareza referencial.",
        "analiseAlternativas": [
            "Incorreta. “O” retoma naturalmente “relatório”.",
            "Incorreta. “Relatório” pode ser retomado por “o”.",
            "Incorreta. O verbo admite sujeito, expresso ou recuperável.",
            "Incorreta. O termo pode ser pronominalizado conforme a estrutura.",
            "Correta. Há dois antecedentes compatíveis para “ela”."
        ],
        "dicaBanca": "A FGV cobra não só correção formal, mas também clareza após a substituição.",
        "pegadinha": "Substituição econômica pode criar ambiguidade.",
        "memorizar2026": "Boa substituição preserva sentido e referência clara.",
        "fonte": "Questão autoral calibrada por questões FGV sobre referência pronominal; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-011",
        "numero": 11,
        "subtopico": "Modificação por modalizador",
        "dificuldade": "alta",
        "pergunta": "Compare: I. “A medida resolverá o problema.” II. “A medida provavelmente resolverá o problema.” A inclusão de “provavelmente”",
        "alternativas": [
            "transforma uma afirmação categórica em uma afirmação com menor grau de certeza.",
            "nega integralmente a possibilidade de solução.",
            "transforma a frase em ordem.",
            "indica que a solução já ocorreu.",
            "elimina o compromisso do enunciador com qualquer avaliação."
        ],
        "correta": 0,
        "feedbackAcerto": "O modalizador reduz o grau de certeza: a solução passa a ser apresentada como provável, não como afirmada categoricamente.",
        "feedbackErro": "Modificação não é apenas aumento de palavras; certos elementos alteram o grau de certeza, obrigação, avaliação ou intensidade.",
        "analiseAlternativas": [
            "Correta. Há atenuação da certeza.",
            "Incorreta. “Provavelmente” não nega; expressa probabilidade.",
            "Incorreta. Não há valor injuntivo.",
            "Incorreta. O futuro permanece.",
            "Incorreta. Ainda existe avaliação do enunciador, agora modalizada."
        ],
        "dicaBanca": "Modalizadores são pequenos termos com grande impacto semântico.",
        "pegadinha": "Adicionar uma palavra pode preservar o tema e mudar o grau de compromisso do autor.",
        "memorizar2026": "Modalização = ajustar certeza, possibilidade, obrigação, avaliação ou atitude.",
        "fonte": "Questão autoral calibrada por matriz FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-012",
        "numero": 12,
        "subtopico": "Modificação por intensificador",
        "dificuldade": "media",
        "pergunta": "Na passagem de “A prova foi difícil” para “A prova foi extremamente difícil”, a modificação principal é",
        "alternativas": [
            "mudança do tempo verbal.",
            "aumento do grau de intensidade da característica atribuída à prova.",
            "transformação de declaração em pergunta.",
            "mudança do sujeito da frase.",
            "negação da dificuldade."
        ],
        "correta": 1,
        "feedbackAcerto": "“Extremamente” intensifica o adjetivo “difícil”, aumentando o grau expresso.",
        "feedbackErro": "Identifique qual elemento foi inserido e sobre qual palavra ele atua.",
        "analiseAlternativas": [
            "Incorreta. O tempo verbal permanece.",
            "Correta. O advérbio intensifica o adjetivo.",
            "Incorreta. A modalidade da frase não mudou.",
            "Incorreta. O sujeito continua “A prova”.",
            "Incorreta. O efeito é de intensificação, não de negação."
        ],
        "dicaBanca": "A FGV pode pedir o efeito produzido por modificadores e advérbios.",
        "pegadinha": "Nem toda modificação muda a estrutura sintática principal; às vezes muda apenas o grau semântico.",
        "memorizar2026": "Intensificador altera grau, não necessariamente a relação sintática central.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-013",
        "numero": 13,
        "subtopico": "Modificação por negação",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase em que a inserção de “não” altera apenas a polaridade da afirmação principal, sem transformar o enunciado em ordem ou proibição.",
        "alternativas": [
            "Não entregue o formulário.",
            "Não fale durante a prova.",
            "Os servidores não receberam o comunicado.",
            "Não atravesse a faixa de isolamento.",
            "Não toque no equipamento."
        ],
        "correta": 2,
        "feedbackAcerto": "A frase apenas nega o fato de os servidores terem recebido o comunicado; as demais têm valor injuntivo/proibitivo.",
        "feedbackErro": "O efeito da negação depende do tipo de frase. “Não + imperativo” costuma produzir proibição; “não” em declarativa altera a polaridade do conteúdo.",
        "analiseAlternativas": [
            "Incorreta. É injuntiva negativa.",
            "Incorreta. É proibição.",
            "Correta. É declaração negativa.",
            "Incorreta. É proibição.",
            "Incorreta. É proibição."
        ],
        "dicaBanca": "Não classifique a modificação apenas pela palavra inserida; observe a intenção comunicativa do enunciado inteiro.",
        "pegadinha": "“Não” pode negar uma proposição ou negar uma ação ordenada.",
        "memorizar2026": "Negação em declarativa ≠ proibição em injuntiva.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-014",
        "numero": 14,
        "subtopico": "Modificação e restrição",
        "dificuldade": "alta",
        "pergunta": "Na frase “Os candidatos inscritos receberão o aviso”, a retirada do termo “inscritos” produz como efeito principal",
        "alternativas": [
            "mudança do tempo verbal.",
            "mudança de frase afirmativa para negativa.",
            "eliminação do sujeito.",
            "ampliação do conjunto de candidatos a que a afirmação pode se aplicar.",
            "transformação do verbo em nome."
        ],
        "correta": 3,
        "feedbackAcerto": "“Inscritos” restringe o referente de “candidatos”. Sem o modificador, a classe mencionada fica mais ampla.",
        "feedbackErro": "Modificadores podem restringir ou especificar o alcance de um substantivo.",
        "analiseAlternativas": [
            "Incorreta. O verbo permanece no futuro.",
            "Incorreta. A polaridade não muda.",
            "Incorreta. “Os candidatos” continua sendo sujeito.",
            "Correta. A restrição é retirada.",
            "Incorreta. O verbo permanece verbo."
        ],
        "dicaBanca": "FGV gosta de perguntar o que se perde ou amplia quando um modificador é retirado.",
        "pegadinha": "Retirar um adjetivo pode não alterar a gramática, mas altera o alcance da referência.",
        "memorizar2026": "Modificador restritivo reduz o conjunto de referentes.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-015",
        "numero": 15,
        "subtopico": "Modificação e explicação",
        "dificuldade": "alta",
        "pergunta": "Compare: I. “Os professores que participaram do curso receberão certificado.” II. “Os professores, que participaram do curso, receberão certificado.” A mudança de pontuação",
        "alternativas": [
            "não produz nenhum efeito de sentido.",
            "torna a segunda frase necessariamente incorreta.",
            "muda apenas o tempo da oração subordinada.",
            "elimina o sujeito da segunda frase.",
            "pode transformar a oração de valor restritivo em explicativo, alterando o alcance da informação."
        ],
        "correta": 4,
        "feedbackAcerto": "Sem vírgulas, a oração tende a selecionar apenas os professores participantes; com vírgulas, tende a apresentar a participação como informação explicativa sobre o conjunto.",
        "feedbackErro": "Pontuação também modifica estrutura e sentido, especialmente em orações adjetivas.",
        "analiseAlternativas": [
            "Incorreta. O alcance referencial pode mudar.",
            "Incorreta. A construção pode ser correta em contexto apropriado.",
            "Incorreta. O tempo verbal não muda.",
            "Incorreta. O sujeito permanece “Os professores”.",
            "Correta. A oposição restritiva/explicativa altera o conjunto referido."
        ],
        "dicaBanca": "A FGV explora correção e modificação por vírgulas em orações adjetivas.",
        "pegadinha": "Mesmas palavras, pontuação diferente, sentido diferente.",
        "memorizar2026": "Restritiva: seleciona. Explicativa: acrescenta informação sobre referente já delimitado.",
        "fonte": "Questão autoral calibrada por questões FGV de reescritura/pontuação; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-016",
        "numero": 16,
        "subtopico": "Correção de paralelismo",
        "dificuldade": "alta",
        "pergunta": "A frase “O curso pretende ampliar o conhecimento dos alunos e que eles desenvolvam autonomia” apresenta quebra de paralelismo. Assinale a correção mais adequada.",
        "alternativas": [
            "O curso pretende ampliar o conhecimento dos alunos e desenvolver a autonomia deles.",
            "O curso pretende a ampliação o conhecimento dos alunos e desenvolver a autonomia.",
            "O curso pretende ampliar o conhecimento dos alunos e a desenvolverem autonomia.",
            "O curso pretende que amplie o conhecimento dos alunos e desenvolver autonomia.",
            "O curso pretende ampliar do conhecimento dos alunos e autonomia deles."
        ],
        "correta": 0,
        "feedbackAcerto": "Os dois complementos de “pretende” passam a ter estrutura paralela: “ampliar...” e “desenvolver...”.",
        "feedbackErro": "Na correção estrutural, observe se elementos coordenados apresentam formas sintáticas compatíveis.",
        "analiseAlternativas": [
            "Correta. Há paralelismo entre dois infinitivos.",
            "Incorreta. Falta preposição/artigo adequados após “ampliação”.",
            "Incorreta. A coordenação fica estruturalmente desequilibrada.",
            "Incorreta. A combinação de “pretende que amplie” com infinitivo gera estrutura inadequada.",
            "Incorreta. A regência de “ampliar” está quebrada."
        ],
        "dicaBanca": "FGV cobra paralelismo em enumerações e coordenações.",
        "pegadinha": "As duas partes podem ser compreensíveis isoladamente, mas incompatíveis na coordenação.",
        "memorizar2026": "Itens coordenados devem manter padrão estrutural compatível.",
        "fonte": "Questão autoral calibrada por padrão FGV de correção estrutural; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-017",
        "numero": 17,
        "subtopico": "Correção de ambiguidade",
        "dificuldade": "alta",
        "pergunta": "A frase “O diretor informou ao professor que seu relatório precisava de ajustes” é ambígua. Qual reescritura elimina a ambiguidade e indica claramente que o relatório pertence ao professor?",
        "alternativas": [
            "O diretor informou-lhe que seu relatório precisava de ajustes.",
            "O diretor informou ao professor que o relatório do professor precisava de ajustes.",
            "O diretor informou ao professor sobre seu relatório que precisava de ajustes.",
            "O diretor, que seu relatório precisava de ajustes, informou ao professor.",
            "O diretor informou o professor de que seu relatório precisava de ajustes."
        ],
        "correta": 1,
        "feedbackAcerto": "A repetição controlada de “do professor” elimina a dúvida sobre o referente do possessivo.",
        "feedbackErro": "Na correção, clareza pode ser mais importante que economia. Se o pronome gera dois antecedentes plausíveis, nomeie o referente.",
        "analiseAlternativas": [
            "Incorreta. “Seu” continua ambíguo.",
            "Correta. O referente fica explícito.",
            "Incorreta. A estrutura continua permitindo leitura pouco clara.",
            "Incorreta. A ordem produz construção inadequada.",
            "Incorreta. Além da construção problemática, “seu” mantém ambiguidade."
        ],
        "dicaBanca": "FGV valoriza reescritas que eliminam ambiguidade sem alterar o conteúdo.",
        "pegadinha": "Pronome elegante nem sempre é mais claro.",
        "memorizar2026": "Correção estrutural também envolve desambiguar referências.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-018",
        "numero": 18,
        "subtopico": "Correção de redundância estrutural",
        "dificuldade": "media",
        "pergunta": "Assinale a reescritura mais concisa e adequada de “A razão pela qual o evento foi adiado foi porque faltou energia”.",
        "alternativas": [
            "A razão do adiamento foi porque faltou energia.",
            "O evento foi adiado, apesar de faltar energia.",
            "O evento foi adiado porque faltou energia.",
            "O evento, porque faltou energia, foi razão adiada.",
            "A falta de energia, embora, adiou o evento."
        ],
        "correta": 2,
        "feedbackAcerto": "A reescritura elimina a estrutura redundante “a razão... foi porque” e mantém a relação causal.",
        "feedbackErro": "A correção pode envolver retirar duplicações de estrutura sem perder a relação lógica.",
        "analiseAlternativas": [
            "Incorreta. Mantém a combinação redundante “razão... porque”.",
            "Incorreta. “Apesar de” indica concessão, não causa.",
            "Correta. É clara, concisa e causal.",
            "Incorreta. A construção é inadequada.",
            "Incorreta. “Embora” introduz relação incompatível e está mal empregado."
        ],
        "dicaBanca": "A FGV cobra concisão: estruturas redundantes podem ser corrigidas por reescritas mais simples.",
        "pegadinha": "Reduzir palavras não autoriza trocar a relação lógica.",
        "memorizar2026": "Correção concisa = retirar redundância e preservar a relação semântica.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-019",
        "numero": 19,
        "subtopico": "Correção de ordem e clareza",
        "dificuldade": "media",
        "pergunta": "Assinale a frase cuja ordem dos termos favorece maior clareza e evita leitura ambígua.",
        "alternativas": [
            "O fiscal viu o candidato com o binóculo.",
            "O binóculo viu o fiscal com o candidato.",
            "O fiscal viu, com o candidato, o binóculo.",
            "Com o candidato, o fiscal viu o binóculo.",
            "O fiscal, com o binóculo, viu o candidato."
        ],
        "correta": 4,
        "feedbackAcerto": "O deslocamento de “com o binóculo” para junto do sujeito e seu isolamento por vírgulas favorecem a leitura de que o instrumento foi usado pelo fiscal.",
        "feedbackErro": "A posição de um adjunto pode aproximá-lo de mais de um termo e criar ambiguidade. Reposicionar o constituinte pode esclarecer a relação.",
        "analiseAlternativas": [
            "Incorreta. Pode significar que o candidato estava com o binóculo ou que o fiscal o usou.",
            "Incorreta. A estrutura atribui ação incompatível ao binóculo.",
            "Incorreta. Muda a relação entre os termos.",
            "Incorreta. Sugere companhia do candidato, não instrumento do fiscal.",
            "Correta. A posição deixa mais claro o vínculo do instrumento com o fiscal."
        ],
        "dicaBanca": "Deslocamento também serve à correção de ambiguidades.",
        "pegadinha": "A frase original pode ser gramatical e, mesmo assim, pouco clara.",
        "memorizar2026": "Boa ordem = proximidade entre termos semanticamente relacionados, quando isso melhora a clareza.",
        "fonte": "Questão autoral calibrada por padrão FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-020",
        "numero": 20,
        "subtopico": "Correção mantendo sentido",
        "dificuldade": "alta",
        "pergunta": "Assinale a reescritura que corrige a frase “Embora estava cansado, continuou trabalhando” sem alterar a relação de sentido.",
        "alternativas": [
            "Porque estava cansado, continuou trabalhando.",
            "Se estava cansado, continuou trabalhando.",
            "Portanto estava cansado, continuou trabalhando.",
            "Embora estivesse cansado, continuou trabalhando.",
            "Estava cansado, logo continuou trabalhando."
        ],
        "correta": 3,
        "feedbackAcerto": "A conjunção concessiva “embora” exige, nesse contexto, verbo no subjuntivo: “estivesse”, preservando a relação de concessão.",
        "feedbackErro": "Correção gramatical deve manter a relação semântica original. Trocar a conjunção pode corrigir a forma e destruir o sentido.",
        "analiseAlternativas": [
            "Incorreta. Troca concessão por causa.",
            "Incorreta. Troca concessão por condição.",
            "Incorreta. Introduz conclusão de modo inadequado.",
            "Correta. Corrige o modo verbal e mantém a concessão.",
            "Incorreta. Cria relação conclusiva incoerente."
        ],
        "dicaBanca": "FGV: uma reescrita só é plenamente correta quando mantém gramática e sentido.",
        "pegadinha": "Não basta “soar bem”: confira a relação lógica.",
        "memorizar2026": "Correção = forma adequada + significado preservado.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-021",
        "numero": 21,
        "subtopico": "Operações combinadas",
        "dificuldade": "alta",
        "pergunta": "Na reescritura “A comissão, depois de analisar os documentos, aprovou o pedido” → “Depois da análise dos documentos, a comissão aprovou o pedido”, ocorreram principalmente",
        "alternativas": [
            "deslocamento e substituição de uma estrutura verbal por uma nominal.",
            "apenas correção ortográfica.",
            "negação e intensificação.",
            "mudança de voz passiva para ativa.",
            "substituição de sujeito por objeto."
        ],
        "correta": 0,
        "feedbackAcerto": "O segmento temporal foi deslocado para o início e “depois de analisar” foi nominalizado em “depois da análise”.",
        "feedbackErro": "Uma reescritura pode combinar operações. Observe simultaneamente posição e forma estrutural.",
        "analiseAlternativas": [
            "Correta. Há deslocamento e nominalização/substituição estrutural.",
            "Incorreta. Não há questão ortográfica central.",
            "Incorreta. Não aparecem negação nem intensificação.",
            "Incorreta. Não há transformação de voz.",
            "Incorreta. O sujeito continua sendo “a comissão”."
        ],
        "dicaBanca": "A FGV pode cobrar mais de uma operação na mesma reescrita.",
        "pegadinha": "Identificar só uma mudança visível pode ser insuficiente.",
        "memorizar2026": "Reescrita pode combinar deslocamento + substituição + modificação + correção.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-022",
        "numero": 22,
        "subtopico": "Deslocamento e coerência temporal",
        "dificuldade": "alta",
        "pergunta": "Assinale a reescritura em que o deslocamento mantém corretamente a relação temporal da frase original: “Os alunos saíram da sala depois que a prova terminou”.",
        "alternativas": [
            "Os alunos, depois, saíram que a prova terminou da sala.",
            "Depois que a prova terminou, os alunos saíram da sala.",
            "A prova terminou os alunos depois que saíram da sala.",
            "Depois, os alunos que a prova terminou saíram da sala.",
            "Os alunos depois que saíram da sala, a prova terminou."
        ],
        "correta": 1,
        "feedbackAcerto": "A oração temporal foi antecipada sem inverter a sequência dos acontecimentos nem quebrar sua estrutura.",
        "feedbackErro": "Deslocar não significa recombinar palavras livremente. O bloco sintático deve permanecer íntegro e a relação temporal precisa ser preservada.",
        "analiseAlternativas": [
            "Incorreta. A oração temporal foi fragmentada.",
            "Correta. O bloco foi movido integralmente.",
            "Incorreta. A construção altera e desorganiza as relações sintáticas.",
            "Incorreta. A oração foi quebrada.",
            "Incorreta. A estrutura muda a relação entre os eventos."
        ],
        "dicaBanca": "Mova constituintes, não palavras isoladas ao acaso.",
        "pegadinha": "O constituinte deslocado deve continuar reconhecível como unidade.",
        "memorizar2026": "Deslocamento sintático opera sobre blocos estruturais.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-023",
        "numero": 23,
        "subtopico": "Substituição e preservação semântica",
        "dificuldade": "alta",
        "pergunta": "Assinale a substituição que preserva a relação de sentido em “O candidato estudou muito, mas não conseguiu a pontuação necessária”.",
        "alternativas": [
            "..., porque não conseguiu a pontuação necessária.",
            "..., portanto não conseguiu a pontuação necessária.",
            "..., contudo não conseguiu a pontuação necessária.",
            "..., assim não conseguiu a pontuação necessária.",
            "..., por isso não conseguiu a pontuação necessária."
        ],
        "correta": 2,
        "feedbackAcerto": "“Contudo” conserva a relação adversativa expressa por “mas”.",
        "feedbackErro": "O conector substituto deve manter a oposição entre esforço elevado e resultado insuficiente.",
        "analiseAlternativas": [
            "Incorreta. Indica causa/explicação.",
            "Incorreta. Indica conclusão.",
            "Correta. Mantém oposição/adversidade.",
            "Incorreta. Indica consequência/conclusão.",
            "Incorreta. Indica consequência."
        ],
        "dicaBanca": "Na substituição de conectivos, leia a relação entre os fatos antes de olhar o vocabulário.",
        "pegadinha": "Conectivos podem ser formalmente próximos no discurso, mas logicamente incompatíveis.",
        "memorizar2026": "“Mas/porém/contudo/entretanto” pertencem ao campo adversativo.",
        "fonte": "Questão autoral calibrada por FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-024",
        "numero": 24,
        "subtopico": "Modificação e foco",
        "dificuldade": "alta",
        "pergunta": "Compare: I. “Até o diretor participou da reunião.” II. “O diretor participou até da reunião.” A mudança de posição de “até” mostra que",
        "alternativas": [
            "o advérbio não produz qualquer efeito de foco.",
            "as duas frases são obrigatoriamente sinônimas em qualquer contexto.",
            "“até” transforma a segunda frase em negativa.",
            "o foco de inclusão pode recair sobre constituintes diferentes conforme a posição.",
            "“até” é sempre uma preposição de lugar."
        ],
        "correta": 3,
        "feedbackAcerto": "Na primeira, o foco recai sobre “o diretor”; na segunda, pode recair sobre “da reunião”, conforme o contexto.",
        "feedbackErro": "Partículas focalizadoras alteram a leitura conforme o constituinte a que se associam.",
        "analiseAlternativas": [
            "Incorreta. O foco é justamente o principal efeito.",
            "Incorreta. A posição pode alterar o alcance semântico.",
            "Incorreta. Não há negação.",
            "Correta. O escopo varia com a posição.",
            "Incorreta. “Até” desempenha aqui papel focalizador, não locativo."
        ],
        "dicaBanca": "A FGV gosta de semântica de posição: “só”, “até”, “mesmo”, “apenas”.",
        "pegadinha": "Mesmas palavras não garantem mesmo foco informacional.",
        "memorizar2026": "Posição de focalizadores = posição do alcance semântico.",
        "fonte": "Questão autoral calibrada por padrão FGV; Edital SEDUC-PA 2026."
    },
    {
        "id": "SEDUC-LP-EFP-025",
        "numero": 25,
        "subtopico": "Caso integrador — reescritura",
        "dificuldade": "alta",
        "pergunta": "A frase “Somente após a divulgação do resultado, a comissão poderá analisar os pedidos restantes” deve ser reescrita sem alteração relevante de sentido. Assinale a opção adequada.",
        "alternativas": [
            "A comissão poderá analisar somente os pedidos restantes após a divulgação do resultado.",
            "Após a divulgação do resultado, somente a comissão poderá analisar os pedidos restantes.",
            "A comissão poderá analisar os pedidos restantes porque o resultado será divulgado.",
            "A comissão poderá analisar os pedidos restantes, embora o resultado não seja divulgado.",
            "A comissão poderá, apenas após a divulgação do resultado, analisar os pedidos restantes."
        ],
        "correta": 4,
        "feedbackAcerto": "A reescritura mantém “somente/apenas” incidindo sobre a circunstância temporal: a análise só poderá ocorrer depois da divulgação.",
        "feedbackErro": "O desafio é preservar o escopo de “somente”. Nas alternativas A e B, a restrição passa para outro constituinte.",
        "analiseAlternativas": [
            "Incorreta. “Somente” passa a restringir os pedidos, não o momento.",
            "Incorreta. “Somente” passa a restringir quem pode analisar.",
            "Incorreta. Troca a restrição temporal por causa.",
            "Incorreta. Troca a restrição temporal por concessão.",
            "Correta. Mantém o foco na condição temporal."
        ],
        "dicaBanca": "Questão típica de reescritura FGV: confirme posição, escopo, relação lógica e pontuação ao mesmo tempo.",
        "pegadinha": "Trocar “somente” de lugar pode manter a gramática e destruir o sentido original.",
        "memorizar2026": "Na reescritura, preserve conteúdo + relação lógica + escopo + referência.",
        "fonte": "Questão autoral calibrada por questões oficiais FGV de deslocamento e reescritura; Edital SEDUC-PA 2026."
    }
];

    window.seducLinguaPortuguesaEstruturaFraseOperacoes2026 = banco;
})();
