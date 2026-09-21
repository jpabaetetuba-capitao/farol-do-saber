/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 11: Organização Sintática das Frases
   Termos e orações • Ordem direta e inversa
   25 questões autorais calibradas no padrão recente da FGV.
========================================================== */

(function(){
    "use strict";
    const banco =
[
    {
        "id": "SEDUC-LP-SINT-001",
        "numero": 1,
        "subtopico": "Sujeito simples",
        "dificuldade": "media",
        "pergunta": "No comunicado “Os novos professores participarão da formação na sexta-feira”, o sujeito da oração é",
        "alternativas": [
            "Os novos professores.",
            "participarão.",
            "da formação.",
            "na sexta-feira.",
            "formação na sexta-feira."
        ],
        "correta": 0,
        "feedbackAcerto": "O núcleo do sujeito é “professores”, acompanhado pelos determinantes “Os novos”.",
        "feedbackErro": "Localize primeiro o verbo e pergunte quem pratica ou recebe a ação/estado expresso por ele.",
        "analiseAlternativas": [
            "Correta. “Os novos professores” é o termo de que se declara algo.",
            "Incorreta. É o verbo do predicado.",
            "Incorreta. É complemento preposicionado ligado ao verbo.",
            "Incorreta. É adjunto adverbial de tempo.",
            "Incorreta. Junta termos de funções diferentes."
        ],
        "dicaBanca": "A FGV frequentemente esconde o sujeito em frases longas; reduza o período ao núcleo sujeito + verbo.",
        "pegadinha": "O termo mais próximo do verbo nem sempre é o sujeito.",
        "memorizar2026": "Sujeito = termo sobre o qual se declara algo; núcleo sem preposição, em regra.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-002",
        "numero": 2,
        "subtopico": "Sujeito posposto",
        "dificuldade": "alta",
        "pergunta": "Leia: “Chegaram ontem à escola os materiais solicitados pela coordenação.” A análise correta é",
        "alternativas": [
            "“ontem” é sujeito simples.",
            "“os materiais solicitados pela coordenação” é sujeito posposto.",
            "“à escola” é sujeito composto.",
            "“pela coordenação” é sujeito da forma verbal “chegaram”.",
            "a oração não possui sujeito."
        ],
        "correta": 1,
        "feedbackAcerto": "O sujeito está depois do verbo: “os materiais solicitados pela coordenação”.",
        "feedbackErro": "A ordem inversa pode colocar o sujeito após o verbo sem mudar sua função sintática.",
        "analiseAlternativas": [
            "Incorreta. “ontem” é adjunto adverbial.",
            "Correta. O sujeito plural explica a concordância de “chegaram”.",
            "Incorreta. “à escola” indica lugar/direção.",
            "Incorreta. “pela coordenação” integra o particípio “solicitados” como agente da ação passiva.",
            "Incorreta. Há sujeito expresso."
        ],
        "dicaBanca": "Quando o verbo aparece antes de um sintagma nominal, teste a concordância para localizar o sujeito posposto.",
        "pegadinha": "Verbo no início não significa oração sem sujeito.",
        "memorizar2026": "Ordem inversa: V + S é possível; a função do sujeito permanece.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-003",
        "numero": 3,
        "subtopico": "Sujeito oracional",
        "dificuldade": "alta",
        "pergunta": "Em “É importante que todos participem da reunião”, a oração “que todos participem da reunião” exerce função de",
        "alternativas": [
            "objeto indireto.",
            "adjunto adverbial.",
            "sujeito da oração principal.",
            "aposto explicativo.",
            "predicativo do objeto."
        ],
        "correta": 2,
        "feedbackAcerto": "A oração subordinada substantiva funciona como sujeito de “é importante”.",
        "feedbackErro": "Substitua a oração por “isso”: “Isso é importante”. O bloco inteiro ocupa a posição de sujeito.",
        "analiseAlternativas": [
            "Incorreta. Não completa verbo com preposição.",
            "Incorreta. Não exprime circunstância.",
            "Correta. É uma subordinada substantiva subjetiva.",
            "Incorreta. Não explica um termo nominal anterior.",
            "Incorreta. Não atribui característica a objeto."
        ],
        "dicaBanca": "A FGV gosta de testar função antes do rótulo: faça a substituição por “isso”.",
        "pegadinha": "Nem todo trecho iniciado por “que” é objeto direto.",
        "memorizar2026": "“É + adjetivo + que...” frequentemente introduz oração subjetiva.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-004",
        "numero": 4,
        "subtopico": "Sujeito indeterminado",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase em que o sujeito está indeterminado.",
        "alternativas": [
            "Publicaram-se os resultados ontem.",
            "Os resultados foram publicados ontem.",
            "A direção publicou os resultados ontem.",
            "Precisa-se de professores para o projeto.",
            "Há professores disponíveis para o projeto."
        ],
        "correta": 3,
        "feedbackAcerto": "Em “Precisa-se de professores”, o verbo é transitivo indireto e o “se” funciona como índice de indeterminação do sujeito.",
        "feedbackErro": "Diferencie partícula apassivadora de índice de indeterminação: com verbo transitivo indireto, não há passiva sintética.",
        "analiseAlternativas": [
            "Incorreta. “os resultados” é sujeito paciente da passiva sintética.",
            "Incorreta. “os resultados” é sujeito paciente.",
            "Incorreta. “A direção” é sujeito expresso.",
            "Correta. O agente não é identificado.",
            "Incorreta. “haver” no sentido de existir forma oração sem sujeito."
        ],
        "dicaBanca": "FGV explora muito a oposição “vende-se casas”/“precisa-se de profissionais”: observe a transitividade.",
        "pegadinha": "Nem todo “se” indetermina o sujeito.",
        "memorizar2026": "VTI/VI + se → sujeito indeterminado; VTD + se → pode haver passiva sintética.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-005",
        "numero": 5,
        "subtopico": "Oração sem sujeito",
        "dificuldade": "media",
        "pergunta": "Em “Havia muitos responsáveis na reunião”, a análise correta é",
        "alternativas": [
            "“muitos responsáveis” é sujeito simples.",
            "“na reunião” é sujeito posposto.",
            "o sujeito está oculto.",
            "o sujeito é indeterminado.",
            "a oração não possui sujeito, pois “haver” tem sentido de existir."
        ],
        "correta": 4,
        "feedbackAcerto": "“Haver” com sentido de existir é impessoal; “muitos responsáveis” funciona como objeto direto.",
        "feedbackErro": "A aparência de plural após o verbo não cria sujeito. O verbo permanece no singular.",
        "analiseAlternativas": [
            "Incorreta. O termo é objeto direto de “havia”.",
            "Incorreta. É adjunto adverbial.",
            "Incorreta. Não há sujeito elíptico.",
            "Incorreta. Não se trata de agente desconhecido.",
            "Correta. Trata-se de oração sem sujeito."
        ],
        "dicaBanca": "Esse ponto junta sintaxe e concordância: “havia problemas”, nunca “haviam problemas” nesse sentido.",
        "pegadinha": "Termo nominal depois do verbo não é automaticamente sujeito.",
        "memorizar2026": "Haver = existir → impessoal, singular, oração sem sujeito.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-006",
        "numero": 6,
        "subtopico": "Predicado verbal",
        "dificuldade": "media",
        "pergunta": "Na frase “Os estudantes concluíram o projeto ontem”, o predicado é classificado como",
        "alternativas": [
            "verbal, porque seu núcleo é o verbo significativo “concluíram”.",
            "nominal, porque “projeto” é nome.",
            "verbo-nominal, porque há adjunto adverbial.",
            "nominal, porque existe sujeito expresso.",
            "verbo-nominal, porque o verbo está no pretérito."
        ],
        "correta": 0,
        "feedbackAcerto": "O núcleo semântico do predicado é a ação expressa por “concluíram”.",
        "feedbackErro": "A presença de substantivos ou advérbios não transforma automaticamente o predicado em nominal.",
        "analiseAlternativas": [
            "Correta. O núcleo é verbo de ação.",
            "Incorreta. “projeto” é objeto, não núcleo do predicado.",
            "Incorreta. Adjunto adverbial não cria segundo núcleo nominal.",
            "Incorreta. A existência de sujeito não define o tipo de predicado.",
            "Incorreta. Tempo verbal não define predicado."
        ],
        "dicaBanca": "Para classificar predicado, procure o núcleo: verbo significativo, nome predicativo ou ambos.",
        "pegadinha": "Não conte apenas quantas palavras existem no predicado.",
        "memorizar2026": "Predicado verbal → núcleo = verbo significativo.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-007",
        "numero": 7,
        "subtopico": "Predicado verbo-nominal",
        "dificuldade": "alta",
        "pergunta": "Em “Os alunos saíram satisfeitos da avaliação”, o predicado é",
        "alternativas": [
            "nominal, pois “satisfeitos” é adjetivo.",
            "verbo-nominal, pois há ação (“saíram”) e estado atribuído ao sujeito (“satisfeitos”).",
            "verbal, pois todo verbo de movimento impede predicativo.",
            "nominal, pois “saíram” funciona como verbo de ligação.",
            "verbal, pois “satisfeitos” é adjunto adnominal."
        ],
        "correta": 1,
        "feedbackAcerto": "Há dois núcleos: o verbo significativo “saíram” e o predicativo “satisfeitos”.",
        "feedbackErro": "Teste: os alunos saíram e estavam satisfeitos. A frase combina ação e característica circunstancial.",
        "analiseAlternativas": [
            "Incorreta. Há verbo significativo além do predicativo.",
            "Correta. É a estrutura típica do predicado verbo-nominal.",
            "Incorreta. Verbo de movimento pode coexistir com predicativo.",
            "Incorreta. “sair” não é verbo de ligação nesse contexto.",
            "Incorreta. “satisfeitos” atribui estado ao sujeito."
        ],
        "dicaBanca": "FGV pode cobrar a função do adjetivo em vez do nome do predicado.",
        "pegadinha": "Adjetivo após verbo não é automaticamente adjunto adnominal.",
        "memorizar2026": "Verbo-nominal = ação/processo + predicativo.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-008",
        "numero": 8,
        "subtopico": "Predicativo do objeto",
        "dificuldade": "alta",
        "pergunta": "Na frase “A comissão considerou o projeto adequado”, o termo “adequado” funciona como",
        "alternativas": [
            "adjunto adverbial.",
            "complemento nominal.",
            "predicativo do objeto “o projeto”.",
            "objeto indireto.",
            "aposto."
        ],
        "correta": 2,
        "feedbackAcerto": "“Adequado” atribui uma característica ao objeto direto “o projeto”.",
        "feedbackErro": "Reformule: “A comissão considerou [o projeto] [adequado]”. O adjetivo qualifica o objeto dentro da predicação.",
        "analiseAlternativas": [
            "Incorreta. Não exprime circunstância.",
            "Incorreta. Não completa um nome com preposição.",
            "Correta. É predicativo do objeto.",
            "Incorreta. Não há preposição regida.",
            "Incorreta. Não explica nominalmente outro termo."
        ],
        "dicaBanca": "Verbos como considerar, julgar, achar, nomear podem introduzir predicativo do objeto.",
        "pegadinha": "Nem todo adjetivo se liga diretamente a um substantivo como adjunto adnominal.",
        "memorizar2026": "Predicativo do objeto = qualidade/estado atribuída ao complemento verbal.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-009",
        "numero": 9,
        "subtopico": "Objeto direto e indireto",
        "dificuldade": "media",
        "pergunta": "Em “A professora entregou os relatórios aos responsáveis”, os termos destacados exercem, respectivamente, as funções de",
        "alternativas": [
            "sujeito e predicativo.",
            "objeto indireto e objeto direto.",
            "complemento nominal e adjunto adverbial.",
            "objeto direto e objeto indireto.",
            "aposto e vocativo."
        ],
        "correta": 3,
        "feedbackAcerto": "“entregou o quê?” → “os relatórios” (OD); “entregou a quem?” → “aos responsáveis” (OI).",
        "feedbackErro": "A presença de preposição é uma pista importante, mas a função depende da regência do verbo.",
        "analiseAlternativas": [
            "Incorreta. Ambos pertencem ao predicado.",
            "Incorreta. A ordem está invertida.",
            "Incorreta. Os termos completam o verbo.",
            "Correta. OD sem preposição obrigatória; OI introduzido pela preposição exigida.",
            "Incorreta. Não são termos explicativos nem de chamamento."
        ],
        "dicaBanca": "A FGV frequentemente pergunta funções de termos em frases reais, sem destacar a regra de transitividade.",
        "pegadinha": "Não classifique só pela posição: identifique a relação com o verbo.",
        "memorizar2026": "OD completa VTD; OI completa VTI com preposição regida.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-010",
        "numero": 10,
        "subtopico": "Complemento nominal x adjunto adnominal",
        "dificuldade": "alta",
        "pergunta": "Em “A defesa dos estudantes foi apresentada pela equipe”, a expressão “dos estudantes”, no sentido de que os estudantes foram defendidos, exerce função de",
        "alternativas": [
            "objeto direto.",
            "agente da passiva.",
            "adjunto adverbial.",
            "adjunto adnominal de posse.",
            "complemento nominal."
        ],
        "correta": 4,
        "feedbackAcerto": "“dos estudantes” completa o sentido do nome abstrato “defesa” e indica o alvo/paciente da ação de defender.",
        "feedbackErro": "Com nome abstrato, observe a relação semântica: agente tende a adjunto adnominal; alvo/paciente tende a complemento nominal.",
        "analiseAlternativas": [
            "Incorreta. Não completa verbo.",
            "Incorreta. O agente está em “pela equipe”.",
            "Incorreta. Não exprime circunstância.",
            "Incorreta. Na leitura dada, não indica posse/agente.",
            "Correta. Completa o nome abstrato e representa o paciente."
        ],
        "dicaBanca": "FGV gosta da diferença semântica: “amor de mãe” (agente) x “amor à mãe” (alvo).",
        "pegadinha": "Preposição sozinha não decide entre complemento nominal e adjunto adnominal.",
        "memorizar2026": "Complemento nominal completa nome/adjetivo/advérbio e costuma ter valor de alvo/paciente.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-011",
        "numero": 11,
        "subtopico": "Agente da passiva",
        "dificuldade": "media",
        "pergunta": "Na frase “O projeto foi aprovado pelo conselho escolar”, “pelo conselho escolar” é",
        "alternativas": [
            "agente da passiva.",
            "objeto indireto.",
            "adjunto adnominal.",
            "predicativo do sujeito.",
            "sujeito simples."
        ],
        "correta": 0,
        "feedbackAcerto": "O termo indica quem pratica a ação em uma construção na voz passiva.",
        "feedbackErro": "Passe para a ativa: “O conselho escolar aprovou o projeto”.",
        "analiseAlternativas": [
            "Correta. O termo introduz o agente da ação passiva.",
            "Incorreta. Não completa verbo transitivo indireto.",
            "Incorreta. Não modifica um substantivo dentro de sintagma nominal.",
            "Incorreta. Não atribui característica ao sujeito.",
            "Incorreta. O sujeito paciente é “O projeto”."
        ],
        "dicaBanca": "Converter ativa ↔ passiva é uma excelente forma de verificar as funções sintáticas.",
        "pegadinha": "O termo com “por/pelo” nem sempre é agente da passiva; confirme a voz verbal.",
        "memorizar2026": "Passiva analítica: sujeito paciente + ser + particípio + agente da passiva (opcional).",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-012",
        "numero": 12,
        "subtopico": "Aposto e vocativo",
        "dificuldade": "media",
        "pergunta": "Assinale a alternativa em que o termo destacado funciona como vocativo.",
        "alternativas": [
            "Belém, capital do Pará, recebe muitos visitantes.",
            "Professores, entreguem os relatórios até sexta-feira.",
            "A diretora, responsável pelo projeto, apresentou os dados.",
            "O projeto, uma iniciativa da escola, foi premiado.",
            "A escola recebeu três materiais: livros, tablets e jogos."
        ],
        "correta": 1,
        "feedbackAcerto": "“Professores” chama diretamente os interlocutores e não integra a estrutura sujeito-predicado da oração.",
        "feedbackErro": "Vocativo = chamamento; aposto = explicação, identificação, enumeração ou resumo de um termo.",
        "analiseAlternativas": [
            "Incorreta. “capital do Pará” é aposto explicativo.",
            "Correta. “Professores” é vocativo.",
            "Incorreta. “responsável pelo projeto” é aposto explicativo.",
            "Incorreta. “uma iniciativa da escola” é aposto.",
            "Incorreta. O trecho final é aposto enumerativo."
        ],
        "dicaBanca": "Pontuação ajuda, mas não basta: aposto e vocativo podem ambos vir entre vírgulas.",
        "pegadinha": "Não confunda termo isolado por vírgula com vocativo automaticamente.",
        "memorizar2026": "Vocativo chama; aposto explica/identifica outro termo.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-013",
        "numero": 13,
        "subtopico": "Pronome relativo — função sintática",
        "dificuldade": "alta",
        "pergunta": "Em “Os professores que participaram da formação receberão certificado”, o pronome relativo “que” exerce, dentro da oração subordinada, função de",
        "alternativas": [
            "objeto direto.",
            "objeto indireto.",
            "sujeito de “participaram”.",
            "adjunto adverbial.",
            "predicativo do sujeito."
        ],
        "correta": 2,
        "feedbackAcerto": "O antecedente “professores” seria sujeito em “os professores participaram da formação”; o relativo “que” assume essa função na subordinada.",
        "feedbackErro": "Substitua mentalmente o relativo pelo antecedente dentro da oração.",
        "analiseAlternativas": [
            "Incorreta. “participar” não recebe “que” como OD nesse contexto.",
            "Incorreta. O complemento é “da formação”.",
            "Correta. “que” = os professores, sujeito de “participaram”.",
            "Incorreta. Não expressa circunstância.",
            "Incorreta. Não atribui característica."
        ],
        "dicaBanca": "FGV cobra função sintática de “que” e “quem”; reconstrua a oração simples.",
        "pegadinha": "Pronome relativo liga orações, mas também exerce função dentro da subordinada.",
        "memorizar2026": "Função do relativo = função que o antecedente teria dentro da oração subordinada.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-014",
        "numero": 14,
        "subtopico": "Oração subordinada substantiva objetiva direta",
        "dificuldade": "alta",
        "pergunta": "Em “A coordenação informou que o prazo seria mantido”, a oração “que o prazo seria mantido” é",
        "alternativas": [
            "subordinada adverbial causal.",
            "subordinada adjetiva restritiva.",
            "subordinada substantiva subjetiva.",
            "subordinada substantiva objetiva direta.",
            "subordinada substantiva completiva nominal."
        ],
        "correta": 3,
        "feedbackAcerto": "A oração completa diretamente o verbo “informou”: informou o quê? “que o prazo seria mantido”.",
        "feedbackErro": "Use a substituição por “isso”: “A coordenação informou isso”.",
        "analiseAlternativas": [
            "Incorreta. Não expressa causa.",
            "Incorreta. Não caracteriza um nome antecedente.",
            "Incorreta. O sujeito já é “A coordenação”.",
            "Correta. Funciona como objeto direto do verbo.",
            "Incorreta. Não completa nome/adjetivo com preposição."
        ],
        "dicaBanca": "A FGV frequentemente mistura rótulo e função; primeiro descubra a função do bloco inteiro.",
        "pegadinha": "A conjunção “que” não define sozinha o tipo de oração.",
        "memorizar2026": "Oração substantiva = pode ser substituída por “isso”; objetiva direta completa VTD.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-015",
        "numero": 15,
        "subtopico": "Oração subordinada substantiva completiva nominal",
        "dificuldade": "alta",
        "pergunta": "Em “Temos certeza de que a medida será eficaz”, a oração iniciada por “de que” é",
        "alternativas": [
            "objetiva direta.",
            "subjetiva.",
            "adjetiva explicativa.",
            "adverbial causal.",
            "substantiva completiva nominal."
        ],
        "correta": 4,
        "feedbackAcerto": "A oração completa o sentido do nome “certeza”, ligado pela preposição “de”.",
        "feedbackErro": "Pergunte não ao verbo “temos”, mas ao nome “certeza”: certeza de quê?",
        "analiseAlternativas": [
            "Incorreta. O objeto direto de “temos” é “certeza...”.",
            "Incorreta. O sujeito é oculto “nós”.",
            "Incorreta. Não caracteriza antecedente por pronome relativo.",
            "Incorreta. Não indica causa.",
            "Correta. Completa o substantivo abstrato “certeza”."
        ],
        "dicaBanca": "Diferencie objetiva indireta (completa verbo) de completiva nominal (completa nome/adjetivo/advérbio).",
        "pegadinha": "A mesma preposição “de” pode introduzir funções diferentes.",
        "memorizar2026": "Completiva nominal = oração substantiva ligada a nome/adjetivo/advérbio por preposição.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-016",
        "numero": 16,
        "subtopico": "Oração adjetiva restritiva",
        "dificuldade": "media",
        "pergunta": "Em “Os estudantes que entregaram o trabalho participarão da mostra”, a oração “que entregaram o trabalho”",
        "alternativas": [
            "restringe o conjunto de estudantes aos que entregaram o trabalho.",
            "explica uma característica de todos os estudantes.",
            "funciona como objeto direto da oração principal.",
            "indica causa da participação.",
            "é oração coordenada."
        ],
        "correta": 0,
        "feedbackAcerto": "A ausência de vírgulas marca a oração adjetiva restritiva: ela seleciona parte do conjunto.",
        "feedbackErro": "A pontuação e o sentido caminham juntos: com vírgulas, a leitura tenderia a ser explicativa.",
        "analiseAlternativas": [
            "Correta. A oração delimita quais estudantes participarão.",
            "Incorreta. Essa leitura seria típica da explicativa.",
            "Incorreta. O bloco modifica o nome “estudantes”.",
            "Incorreta. Não há relação causal expressa.",
            "Incorreta. A oração depende de antecedente nominal."
        ],
        "dicaBanca": "FGV costuma perguntar o efeito da oração, não apenas seu nome.",
        "pegadinha": "Restritiva sem vírgulas não é “menos importante”; ela muda a extensão do referente.",
        "memorizar2026": "Adjetiva restritiva = seleciona/delimita o antecedente.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-017",
        "numero": 17,
        "subtopico": "Oração adverbial concessiva",
        "dificuldade": "media",
        "pergunta": "Leia: “Embora estivesse cansada, a professora concluiu o relatório.” A oração inicial expressa",
        "alternativas": [
            "causa.",
            "concessão.",
            "condição.",
            "consequência.",
            "finalidade."
        ],
        "correta": 1,
        "feedbackAcerto": "“Embora” introduz um fato que poderia impedir a ação principal, mas não a impede.",
        "feedbackErro": "Reconheça a relação lógica antes de decorar a lista de conjunções.",
        "analiseAlternativas": [
            "Incorreta. O cansaço não é apresentado como causa da conclusão.",
            "Correta. Há contraste concessivo.",
            "Incorreta. Não se estabelece condição.",
            "Incorreta. Não há resultado intensificado.",
            "Incorreta. Não exprime objetivo."
        ],
        "dicaBanca": "FGV explora relações semânticas entre orações; “embora” é marcador forte de concessão.",
        "pegadinha": "Concessão não é o mesmo que oposição coordenativa, embora ambas criem contraste.",
        "memorizar2026": "Concessiva = fato contrário à expectativa que não impede a oração principal.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-018",
        "numero": 18,
        "subtopico": "Oração reduzida de infinitivo",
        "dificuldade": "alta",
        "pergunta": "Em “Para melhorar o atendimento, a escola ampliou o horário”, o segmento “Para melhorar o atendimento” é",
        "alternativas": [
            "oração coordenada adversativa.",
            "oração subordinada substantiva objetiva direta.",
            "oração subordinada adverbial final reduzida de infinitivo.",
            "oração adjetiva restritiva.",
            "oração sem verbo."
        ],
        "correta": 2,
        "feedbackAcerto": "O infinitivo “melhorar” forma oração reduzida; a preposição “para” introduz valor de finalidade.",
        "feedbackErro": "Oração reduzida possui verbo em forma nominal e não apresenta conjunção integrante/subordinativa desenvolvida.",
        "analiseAlternativas": [
            "Incorreta. Não há coordenação adversativa.",
            "Incorreta. O bloco não completa verbo como objeto.",
            "Correta. Expressa finalidade em forma reduzida de infinitivo.",
            "Incorreta. Não caracteriza substantivo antecedente.",
            "Incorreta. “melhorar” é verbo no infinitivo."
        ],
        "dicaBanca": "A FGV pode cobrar oração reduzida em reescritas: compare “para melhorar” com “para que melhorasse”.",
        "pegadinha": "Infinitivo continua sendo verbo; portanto pode estruturar oração.",
        "memorizar2026": "Reduzida de infinitivo: verbo no infinitivo, sem conectivo típico da forma desenvolvida.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-019",
        "numero": 19,
        "subtopico": "Coordenação adversativa",
        "dificuldade": "media",
        "pergunta": "Em “O projeto foi aprovado, mas ainda precisa de ajustes”, a segunda oração é",
        "alternativas": [
            "coordenada sindética aditiva.",
            "subordinada adverbial concessiva.",
            "coordenada assindética.",
            "coordenada sindética adversativa.",
            "subordinada substantiva."
        ],
        "correta": 3,
        "feedbackAcerto": "“mas” liga duas orações independentes sintaticamente e estabelece oposição/contraste.",
        "feedbackErro": "Coordenação = independência sintática entre as orações; a relação semântica é adversativa.",
        "analiseAlternativas": [
            "Incorreta. Não há soma, mas contraste.",
            "Incorreta. “mas” é conjunção coordenativa, não subordinativa.",
            "Incorreta. Há conjunção explícita.",
            "Correta. É coordenada sindética adversativa.",
            "Incorreta. Não exerce função nominal."
        ],
        "dicaBanca": "Não confunda contraste semântico com concessão subordinativa: observe o tipo de conectivo e a dependência sintática.",
        "pegadinha": "Duas ideias contrastantes não são automaticamente uma oração concessiva.",
        "memorizar2026": "“mas, porém, contudo” → coordenação adversativa.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-020",
        "numero": 20,
        "subtopico": "Ordem direta",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase que apresenta organização sintática predominantemente em ordem direta (sujeito + verbo + complementos/adjuntos).",
        "alternativas": [
            "Naquela manhã, chegaram à escola os novos livros.",
            "À coordenação entregaram os professores o relatório final.",
            "Muito preocupados estavam os responsáveis com a notícia.",
            "Foi pela equipe elaborado o novo cronograma.",
            "Os professores entregaram o relatório final à coordenação ontem."
        ],
        "correta": 4,
        "feedbackAcerto": "A alternativa E segue a sequência básica: sujeito “Os professores” + verbo “entregaram” + OD “o relatório final” + OI “à coordenação” + adjunto “ontem”.",
        "feedbackErro": "A ordem direta é uma organização preferencial, não uma regra absoluta. A inversão pode ser plenamente gramatical.",
        "analiseAlternativas": [
            "Incorreta. Adjunto anteposto e sujeito posposto.",
            "Incorreta. Complemento anteposto e sujeito após o verbo.",
            "Incorreta. Predicativo anteposto ao verbo e sujeito posposto.",
            "Incorreta. Construção passiva com agente anteposto ao sujeito paciente.",
            "Correta. Mantém a disposição canônica dos constituintes."
        ],
        "dicaBanca": "FGV já cobrou diretamente a identificação de ordem direta; localize S, V e complementos.",
        "pegadinha": "Frase correta pode estar em ordem inversa. A questão pede organização, não correção.",
        "memorizar2026": "Ordem direta prototípica: S + V + complementos + adjuntos.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-021",
        "numero": 21,
        "subtopico": "Ordem inversa — sujeito posposto",
        "dificuldade": "media",
        "pergunta": "Em “No fim da reunião, surgiram novas propostas”, a inversão principal consiste em",
        "alternativas": [
            "colocar o sujeito “novas propostas” depois do verbo.",
            "antepor o objeto direto ao sujeito.",
            "transformar o sujeito em objeto indireto.",
            "eliminar o sujeito da oração.",
            "converter a oração para a voz passiva."
        ],
        "correta": 0,
        "feedbackAcerto": "O sujeito “novas propostas” aparece após o verbo “surgiram”.",
        "feedbackErro": "A inversão altera a posição, não a função sintática.",
        "analiseAlternativas": [
            "Correta. É sujeito posposto.",
            "Incorreta. “surgir” não recebe objeto direto nessa construção.",
            "Incorreta. A função não muda com a posição.",
            "Incorreta. O sujeito está expresso.",
            "Incorreta. Não há voz passiva."
        ],
        "dicaBanca": "Em ordem inversa, use concordância e sentido para recuperar a função dos termos.",
        "pegadinha": "Posposição do sujeito não o transforma em complemento.",
        "memorizar2026": "Mover o sujeito muda a ordem, não sua função.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-022",
        "numero": 22,
        "subtopico": "Inversão e função sintática",
        "dificuldade": "alta",
        "pergunta": "Compare: I. “Os alunos apresentaram o projeto.” II. “O projeto, os alunos apresentaram.” Na frase II, “O projeto” continua funcionando como",
        "alternativas": [
            "sujeito.",
            "objeto direto, apenas deslocado para a esquerda.",
            "predicativo do sujeito.",
            "objeto indireto.",
            "vocativo."
        ],
        "correta": 1,
        "feedbackAcerto": "O verbo “apresentaram” mantém a regência: os alunos apresentaram o quê? “o projeto”. O deslocamento cria topicalização.",
        "feedbackErro": "Função sintática depende da relação estrutural com o verbo, não da posição linear.",
        "analiseAlternativas": [
            "Incorreta. O sujeito continua “os alunos”.",
            "Correta. É objeto direto topicalizado.",
            "Incorreta. Não atribui característica.",
            "Incorreta. Não há preposição regida.",
            "Incorreta. Não chama interlocutor."
        ],
        "dicaBanca": "A FGV explora deslocamentos justamente para verificar se o candidato confunde posição com função.",
        "pegadinha": "Primeiro termo da frase não é necessariamente sujeito.",
        "memorizar2026": "Topicalização pode deslocar complemento sem mudar sua função.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-023",
        "numero": 23,
        "subtopico": "Objeto indireto anteposto",
        "dificuldade": "alta",
        "pergunta": "Na frase “Aos estudantes, a direção ofereceu novas oficinas”, o termo “Aos estudantes” é",
        "alternativas": [
            "adjunto adverbial de lugar.",
            "sujeito posposto.",
            "objeto indireto deslocado para o início da frase.",
            "agente da passiva.",
            "complemento nominal."
        ],
        "correta": 2,
        "feedbackAcerto": "“ofereceu algo a alguém”: “novas oficinas” é OD; “aos estudantes” é OI, anteposto por efeito de organização/informação.",
        "feedbackErro": "A preposição “a” é exigida pela estrutura do verbo “oferecer” nesse uso.",
        "analiseAlternativas": [
            "Incorreta. Não indica lugar.",
            "Incorreta. O sujeito é “a direção”.",
            "Correta. É objeto indireto topicalizado.",
            "Incorreta. A oração está na voz ativa.",
            "Incorreta. O termo completa verbo, não nome."
        ],
        "dicaBanca": "Em ordem inversa, reconstrua mentalmente a ordem direta: “A direção ofereceu novas oficinas aos estudantes”.",
        "pegadinha": "Termo inicial preposicionado não é automaticamente adjunto adverbial.",
        "memorizar2026": "Reordenar a frase ajuda a identificar a função sintática.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-024",
        "numero": 24,
        "subtopico": "Inversão de oração adverbial",
        "dificuldade": "media",
        "pergunta": "Em “Quando terminou a reunião, os professores deixaram a sala”, a oração adverbial foi",
        "alternativas": [
            "eliminada, por isso a frase está incompleta.",
            "transformada em sujeito da oração principal.",
            "convertida em oração coordenada.",
            "anteposta à oração principal, o que justifica sua separação por vírgula.",
            "transformada em objeto direto."
        ],
        "correta": 3,
        "feedbackAcerto": "A oração temporal “Quando terminou a reunião” aparece antes da principal e é delimitada por vírgula.",
        "feedbackErro": "Esse item integra sintaxe, ordem e pontuação: o deslocamento de um bloco oracional costuma ser sinalizado graficamente.",
        "analiseAlternativas": [
            "Incorreta. A oração está expressa.",
            "Incorreta. Não exerce função de sujeito.",
            "Incorreta. Continua subordinada adverbial temporal.",
            "Correta. Há anteposição da subordinada.",
            "Incorreta. Não completa verbo como objeto."
        ],
        "dicaBanca": "FGV costuma cruzar dois tópicos do edital na mesma questão; aqui, ordem + pontuação + oração adverbial.",
        "pegadinha": "A vírgula decorre da organização sintática do bloco, não apenas de uma “pausa”.",
        "memorizar2026": "Oração adverbial anteposta → inversão frequente + vírgula delimitadora.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    },
    {
        "id": "SEDUC-LP-SINT-025",
        "numero": 25,
        "subtopico": "Síntese — ordem e clareza",
        "dificuldade": "alta",
        "pergunta": "Um redator escreveu: “Ao relatório final, depois de longa análise, foram acrescentadas pela equipe novas recomendações.” Se o objetivo é reescrever em ordem mais direta, sem alterar as relações sintáticas, a melhor versão é",
        "alternativas": [
            "Depois de longa análise, novas recomendações, a equipe acrescentou ao relatório final.",
            "A equipe, ao relatório final, novas recomendações acrescentou depois de longa análise.",
            "Foram novas recomendações acrescentadas ao relatório final pela equipe, depois de longa análise.",
            "Ao relatório final a equipe, depois de longa análise, acrescentou novas recomendações.",
            "Depois de longa análise, a equipe acrescentou novas recomendações ao relatório final."
        ],
        "correta": 4,
        "feedbackAcerto": "A alternativa E organiza sujeito + verbo + objeto direto + complemento/destino, mantendo o adjunto adverbial sem distorção.",
        "feedbackErro": "A questão não pede a única frase gramatical, mas a versão de ordem mais direta e clara.",
        "analiseAlternativas": [
            "Incorreta. A construção apresenta quebra e isolamento inadequado do sujeito.",
            "Incorreta. Mantém forte inversão dos complementos.",
            "Incorreta. Continua em passiva e com ordem menos direta.",
            "Incorreta. É gramatical, mas mantém complemento anteposto.",
            "Correta. Reorganiza os constituintes em sequência direta e preserva o conteúdo."
        ],
        "dicaBanca": "Em reescrita FGV, compare sentido, função sintática e clareza — não apenas “correção”.",
        "pegadinha": "Uma alternativa pode ser gramatical e ainda não atender ao comando de ordem direta.",
        "memorizar2026": "Reescrita direta: preserve funções e relações; reorganize sem inventar ou apagar informação.",
        "fonte": "Questão autoral calibrada pelo Edital SEDUC-PA 2026 e pelo padrão recente da FGV — Organização sintática das frases: termos e orações; ordem direta e inversa."
    }
];
    window.seducLinguaPortuguesaOrganizacaoSintatica2026 = banco;
})();
