/* ==========================================================
   FAROL DO SABER — SEDUC-PA 2026 / FGV
   Professor Classe I — Conhecimentos Básicos
   Língua Portuguesa — Bloco 9: Norma Culta
   25 questões autorais calibradas pelo padrão recente da FGV.
   Foco: registro formal, concordância, regência, verbos impessoais,
   pronomes, colocação e formas verbais.
========================================================== */

(function(){
    "use strict";

    const banco =
[
    {
        "id": "SEDUC-LP-NC-001",
        "numero": 1,
        "subtopico": "Registro formal — frase integralmente adequada",
        "dificuldade": "media",
        "pergunta": "Em um ofício encaminhado pela escola, assinale a frase inteiramente adequada à norma culta em registro formal.",
        "alternativas": [
            "Os documentos que lhes encaminhamos seguem anexos ao ofício.",
            "Para mim analisar os dados, preciso receber a planilha.",
            "Houveram diversas alterações no cronograma.",
            "A gente iremos enviar a resposta ainda hoje.",
            "Fazem dois meses que o processo está parado."
        ],
        "correta": 0,
        "feedbackAcerto": "A primeira frase apresenta concordância, emprego pronominal e construção compatíveis com o registro formal.",
        "feedbackErro": "A questão reúne erros clássicos de norma culta: pronome sujeito, verbo impessoal e concordância verbal.",
        "analiseAlternativas": [
            "Correta. “Documentos” concorda com “anexos”, e o pronome “lhes” está adequadamente empregado.",
            "Incorreta. Como sujeito do infinitivo “analisar”, deve-se usar “eu”: “para eu analisar”.",
            "Incorreta. “Haver”, com sentido de existir, é impessoal: “houve diversas alterações”.",
            "Incorreta. “A gente” exige verbo na 3ª pessoa do singular: “a gente irá”.",
            "Incorreta. “Fazer”, indicando tempo decorrido, é impessoal: “faz dois meses”."
        ],
        "dicaBanca": "A FGV gosta de colocar vários desvios diferentes na mesma questão e pedir a única frase integralmente correta.",
        "pegadinha": "Uma frase pode parecer natural na fala e ainda não atender ao padrão formal cobrado.",
        "memorizar2026": "Norma culta em prova = correção + adequação ao contexto formal.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-002",
        "numero": 2,
        "subtopico": "Registro formal x informal",
        "dificuldade": "media",
        "pergunta": "Uma professora escreveu, em mensagem informal ao grupo da equipe: “A gente vai ver isso amanhã.” Ao transformar a informação em comunicado oficial, a forma mais adequada é",
        "alternativas": [
            "A gente vai estar vendo isso amanhã.",
            "Nós analisaremos isso amanhã.",
            "Nós vai analisar isso amanhã.",
            "A gente analisaremos isso amanhã.",
            "Vai ser visto isso amanhã pela gente."
        ],
        "correta": 1,
        "feedbackAcerto": "“Nós analisaremos isso amanhã” elimina a marca coloquial e mantém clareza e formalidade.",
        "feedbackErro": "O objetivo não é condenar a forma “a gente”, mas adequar o registro à situação comunicativa formal.",
        "analiseAlternativas": [
            "Incorreta. Mantém construção coloquial e perífrase desnecessária.",
            "Correta. É clara, formal e gramaticalmente adequada.",
            "Incorreta. Há erro de concordância entre “nós” e “vai”.",
            "Incorreta. “A gente” exige 3ª pessoa do singular.",
            "Incorreta. A passiva é artificial e “pela gente” mantém marca informal."
        ],
        "dicaBanca": "FGV diferencia variação linguística de inadequação ao registro: o contexto decide.",
        "pegadinha": "Informal não significa “errado” em qualquer situação; em documento oficial, porém, a banca espera forma monitorada.",
        "memorizar2026": "Adequação é parte da competência linguística.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-003",
        "numero": 3,
        "subtopico": "Regência verbal — assistir",
        "dificuldade": "media",
        "pergunta": "Em uma ata escolar, a frase redigida de acordo com a norma culta é",
        "alternativas": [
            "Os estudantes assistiram o documentário e discutiram o tema.",
            "Os estudantes assistiram no documentário e discutiram o tema.",
            "Os estudantes assistiram ao documentário e discutiram o tema.",
            "Os estudantes assistiram do documentário e discutiram o tema.",
            "Os estudantes assistiram pelo documentário e discutiram o tema."
        ],
        "correta": 2,
        "feedbackAcerto": "No sentido de ver/presenciar, “assistir” rege a preposição “a”: “assistir ao documentário”.",
        "feedbackErro": "A FGV costuma cobrar regência em frases muito simples, misturada a contexto real de uso.",
        "analiseAlternativas": [
            "Incorreta. Falta a preposição exigida pela norma-padrão nesse sentido.",
            "Incorreta. “em” não é a regência prevista.",
            "Correta. “Assistir a” + “o documentário” = “ao documentário”.",
            "Incorreta. “de” não corresponde à regência.",
            "Incorreta. “por” não corresponde à regência."
        ],
        "dicaBanca": "Observe sempre o sentido do verbo: “assistir alguém” pode significar prestar assistência; “assistir a algo” = ver.",
        "pegadinha": "A mesma forma verbal pode mudar de regência conforme o sentido.",
        "memorizar2026": "Assistir (= ver) → assistir a.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-004",
        "numero": 4,
        "subtopico": "Pronomes — para eu / para mim",
        "dificuldade": "media",
        "pergunta": "O coordenador entregou um relatório e disse: “Este material é para ___ revisar antes da reunião.” Segundo a norma culta, a lacuna deve ser preenchida por",
        "alternativas": [
            "mim revisar",
            "mim revisar ele",
            "eu me revisar",
            "eu revisar",
            "mim, eu revisar"
        ],
        "correta": 3,
        "feedbackAcerto": "Quando o pronome funciona como sujeito do infinitivo “revisar”, emprega-se “eu”.",
        "feedbackErro": "“Mim” pode aparecer depois de preposição, mas não exerce função de sujeito de verbo.",
        "analiseAlternativas": [
            "Incorreta. “Mim” não é sujeito de “revisar”.",
            "Incorreta. Além do uso de “mim”, há objeto redundante.",
            "Incorreta. “Me revisar” muda o sentido: o sujeito revisaria a si mesmo.",
            "Correta. “Eu” é sujeito do infinitivo “revisar”.",
            "Incorreta. A sequência é artificial e não resolve a função sintática."
        ],
        "dicaBanca": "A FGV cobra muito esse contraste em frases contextualizadas.",
        "pegadinha": "A presença da preposição “para” não obriga automaticamente o uso de “mim”.",
        "memorizar2026": "Para EU fazer; para MIM = sem verbo do qual “mim” seja sujeito.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-005",
        "numero": 5,
        "subtopico": "Verbos impessoais — haver e fazer",
        "dificuldade": "media",
        "pergunta": "Assinale a frase adequada à norma culta.",
        "alternativas": [
            "Haviam muitos responsáveis na reunião.",
            "Houveram problemas durante a inscrição.",
            "Fazem três semanas que as aulas começaram.",
            "Devem haver novas vagas no próximo mês.",
            "Faz três semanas que não há reuniões do conselho."
        ],
        "correta": 4,
        "feedbackAcerto": "“Fazer” indicando tempo e “haver” com sentido de existir são impessoais e ficam no singular.",
        "feedbackErro": "Mesmo em locução verbal, a impessoalidade de “haver” se mantém: “deve haver”.",
        "analiseAlternativas": [
            "Incorreta. O correto é “havia muitos responsáveis”.",
            "Incorreta. O correto é “houve problemas”.",
            "Incorreta. O correto é “faz três semanas”.",
            "Incorreta. O correto é “deve haver novas vagas”.",
            "Correta. Os dois verbos impessoais estão no singular."
        ],
        "dicaBanca": "Haver = existir e fazer = tempo decorrido são campeões de cobrança em norma culta.",
        "pegadinha": "O substantivo plural depois do verbo não transforma esse termo em sujeito.",
        "memorizar2026": "Há problemas; houve problemas; deve haver problemas. Faz anos; vai fazer anos.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-006",
        "numero": 6,
        "subtopico": "Concordância nominal",
        "dificuldade": "media",
        "pergunta": "Assinale a frase em que a concordância nominal está correta.",
        "alternativas": [
            "É necessária a autorização dos responsáveis para a atividade.",
            "É necessário a autorização dos responsáveis para a atividade.",
            "Seguem anexo as declarações solicitadas.",
            "As professoras ficaram meios preocupadas com o prazo.",
            "Muito obrigadas, disse o professor ao receber a homenagem."
        ],
        "correta": 0,
        "feedbackAcerto": "Com substantivo determinado por artigo, o predicativo concorda: “é necessária a autorização”.",
        "feedbackErro": "A questão mistura estruturas em que a concordância depende da função da palavra e do gênero/número do termo relacionado.",
        "analiseAlternativas": [
            "Correta. “Necessária” concorda com “a autorização”.",
            "Incorreta. Com artigo, deve haver concordância: “necessária”.",
            "Incorreta. “Anexas” deve concordar com “declarações”.",
            "Incorreta. “Meio”, advérbio de intensidade, é invariável: “meio preocupadas”.",
            "Incorreta. Um homem diz “muito obrigado”."
        ],
        "dicaBanca": "A banca gosta de palavras que ora variam, ora ficam invariáveis, conforme a função.",
        "pegadinha": "Não decore só a palavra: identifique se ela é adjetivo ou advérbio.",
        "memorizar2026": "Concordância depende da função sintática e morfológica da palavra.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-007",
        "numero": 7,
        "subtopico": "Meio / anexo",
        "dificuldade": "media",
        "pergunta": "Em um relato formal, a frase correta é",
        "alternativas": [
            "As professoras ficaram meias preocupadas e enviaram anexo as declarações.",
            "As professoras ficaram meio preocupadas e enviaram anexas as declarações.",
            "As professoras ficaram meios preocupadas e enviaram anexos as declarações.",
            "As professoras ficaram meia preocupadas e enviaram anexa as declarações.",
            "As professoras ficaram meio preocupada e enviaram anexada as declarações."
        ],
        "correta": 1,
        "feedbackAcerto": "“Meio” é advérbio e fica invariável; “anexas” é adjetivo e concorda com “declarações”.",
        "feedbackErro": "FGV costuma juntar duas regras diferentes na mesma alternativa.",
        "analiseAlternativas": [
            "Incorreta. “Meio” deve ser invariável e “anexas” deve concordar no feminino plural.",
            "Correta. As duas formas estão adequadas.",
            "Incorreta. “Meio” não varia e “anexos” não concorda com “declarações”.",
            "Incorreta. Há problemas nas duas concordâncias.",
            "Incorreta. “Preocupada” deveria concordar com “professoras”."
        ],
        "dicaBanca": "Quando a alternativa contém duas formas sensíveis, verifique as duas antes de marcar.",
        "pegadinha": "Uma parte correta não salva a alternativa se a outra estiver errada.",
        "memorizar2026": "Meio (= um pouco) é invariável; anexo, como adjetivo, varia.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-008",
        "numero": 8,
        "subtopico": "Regência — preferir",
        "dificuldade": "media",
        "pergunta": "Assinale a construção adequada à norma culta.",
        "alternativas": [
            "Prefiro mais a versão digital do que a impressa.",
            "Prefiro a versão digital do que a impressa.",
            "Prefiro a versão digital à impressa.",
            "Prefiro antes a versão digital que a impressa.",
            "Prefiro muito mais a versão digital à impressa."
        ],
        "correta": 2,
        "feedbackAcerto": "Na norma-padrão, “preferir” estabelece relação “preferir X a Y”, sem “mais”.",
        "feedbackErro": "A FGV explora tanto a preposição quanto o excesso de “mais”.",
        "analiseAlternativas": [
            "Incorreta. Há redundância em “prefiro mais” e estrutura comparativa inadequada.",
            "Incorreta. A correlação esperada é com preposição “a”.",
            "Correta. “Prefiro X a Y”.",
            "Incorreta. “Antes” é desnecessário e a regência está inadequada.",
            "Incorreta. “Muito mais” reforça indevidamente um verbo que já expressa preferência."
        ],
        "dicaBanca": "Não trate “preferir” como “gostar mais de”.",
        "pegadinha": "A fala cotidiana frequentemente usa “prefiro X do que Y”, mas a prova cobra a regência normativa.",
        "memorizar2026": "Preferir X a Y.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-009",
        "numero": 9,
        "subtopico": "Colocação pronominal — palavra atrativa",
        "dificuldade": "media",
        "pergunta": "Em um comunicado formal, assinale a frase adequada.",
        "alternativas": [
            "Não informaram-me o resultado.",
            "Nunca disseram-me a verdade.",
            "Ninguém avisou-me sobre a mudança.",
            "Não me informaram o resultado.",
            "Jamais comunicaram-nos a decisão."
        ],
        "correta": 3,
        "feedbackAcerto": "A palavra negativa “não” atrai o pronome átono: “não me informaram”.",
        "feedbackErro": "Palavras negativas são fator clássico de próclise em exercícios normativos.",
        "analiseAlternativas": [
            "Incorreta. Com “não”, espera-se próclise: “não me informaram”.",
            "Incorreta. “Nunca” atrai o pronome: “nunca me disseram”.",
            "Incorreta. “Ninguém” favorece próclise: “ninguém me avisou”.",
            "Correta. A colocação pronominal está adequada.",
            "Incorreta. “Jamais” atrai o pronome: “jamais nos comunicaram”."
        ],
        "dicaBanca": "Procure palavras atrativas antes do verbo: não, nunca, ninguém, que, quem, quando etc.",
        "pegadinha": "Ênclise não é “mais formal” em qualquer posição.",
        "memorizar2026": "Negação antes do verbo → próclise.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-010",
        "numero": 10,
        "subtopico": "Regência — obedecer / desobedecer",
        "dificuldade": "media",
        "pergunta": "Em um regulamento, a frase correta é",
        "alternativas": [
            "Os estudantes devem obedecer as regras de segurança.",
            "Os estudantes devem obedecer com as regras de segurança.",
            "Os estudantes devem obedecer pelas regras de segurança.",
            "Os estudantes devem obedecer das regras de segurança.",
            "Os estudantes devem obedecer às regras de segurança."
        ],
        "correta": 4,
        "feedbackAcerto": "“Obedecer” rege a preposição “a”: obedecer a + as regras = obedecer às regras.",
        "feedbackErro": "A questão cobra regência; o acento grave aparece como consequência da fusão, mas o foco aqui é a preposição exigida pelo verbo.",
        "analiseAlternativas": [
            "Incorreta. Falta a preposição “a”.",
            "Incorreta. “Com” não é a regência adequada.",
            "Incorreta. “Por” não é a regência adequada.",
            "Incorreta. “De” não é a regência adequada.",
            "Correta. A regência de “obedecer” foi respeitada."
        ],
        "dicaBanca": "Primeiro descubra a preposição exigida; só depois pense na forma resultante.",
        "pegadinha": "Não escolha pela aparência gráfica: identifique a regência.",
        "memorizar2026": "Obedecer a; desobedecer a.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-011",
        "numero": 11,
        "subtopico": "Aonde / onde",
        "dificuldade": "media",
        "pergunta": "Em um e-mail formal, a frase adequada é",
        "alternativas": [
            "A escola aonde nos dirigimos fica no centro da cidade.",
            "A escola onde nos dirigimos fica no centro da cidade.",
            "A escola de onde nos dirigimos para fica no centro.",
            "A escola aonde permanecemos durante a manhã fica no centro.",
            "A escola aonde estudamos todos os dias fica no centro."
        ],
        "correta": 0,
        "feedbackAcerto": "“Dirigir-se” exige a preposição “a”; por isso, usa-se “aonde”.",
        "feedbackErro": "“Onde” é adequado quando não há ideia de destino regida por “a”.",
        "analiseAlternativas": [
            "Correta. “Dirigimo-nos a” → “aonde”.",
            "Incorreta. Falta a preposição requerida pelo verbo de movimento.",
            "Incorreta. A construção está truncada.",
            "Incorreta. “Permanecer” indica localização, não destino: “onde permanecemos”.",
            "Incorreta. “Estudar” indica localização: “onde estudamos”."
        ],
        "dicaBanca": "A FGV costuma testar o par em contexto, não por definição abstrata.",
        "pegadinha": "Nem todo verbo de movimento exige “aonde”; depende da regência.",
        "memorizar2026": "Aonde = a + onde; use quando o termo exige preposição “a”.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-012",
        "numero": 12,
        "subtopico": "Pronome oblíquo após preposição",
        "dificuldade": "media",
        "pergunta": "Assinale a frase correta segundo a norma culta.",
        "alternativas": [
            "Entre eu e você, ainda existem dúvidas.",
            "Entre mim e você, ainda existem dúvidas.",
            "Entre mim e tu, ainda existe dúvidas.",
            "Entre eu e tu, ainda existem dúvidas.",
            "Entre mim e você, ainda existe dúvidas."
        ],
        "correta": 1,
        "feedbackAcerto": "Depois da preposição “entre”, usa-se pronome oblíquo tônico: “entre mim e você”.",
        "feedbackErro": "A concordância de “existem dúvidas” também precisa ser verificada.",
        "analiseAlternativas": [
            "Incorreta. Depois de “entre”, não se usa “eu”.",
            "Correta. Pronome e concordância estão adequados.",
            "Incorreta. Além da combinação pronominal pouco adequada ao registro, há erro de concordância: “existem dúvidas”.",
            "Incorreta. “Eu” não é forma adequada depois de “entre”.",
            "Incorreta. “Dúvidas” é sujeito plural de “existir”: “existem”."
        ],
        "dicaBanca": "FGV costuma inserir dois pontos de verificação na mesma frase.",
        "pegadinha": "Não pare no primeiro detalhe correto; confirme o restante da alternativa.",
        "memorizar2026": "Entre mim e você; para eu fazer.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-013",
        "numero": 13,
        "subtopico": "Concordância verbal — existir",
        "dificuldade": "media",
        "pergunta": "Em relatório escolar, assinale a frase adequada.",
        "alternativas": [
            "Existe razões suficientes para rever o cronograma.",
            "Deve existir alternativas mais econômicas.",
            "Devem existir alternativas mais econômicas.",
            "Podem haver alternativas mais econômicas.",
            "Hão de haver alternativas mais econômicas."
        ],
        "correta": 2,
        "feedbackAcerto": "“Existir” é verbo pessoal; em locução, o auxiliar concorda com o sujeito plural: “devem existir alternativas”.",
        "feedbackErro": "Não confunda “existir” com “haver” no sentido de existir, que é impessoal.",
        "analiseAlternativas": [
            "Incorreta. “Razões” é sujeito plural: “existem razões”.",
            "Incorreta. O auxiliar deve concordar: “devem existir”.",
            "Correta. A concordância está adequada.",
            "Incorreta. Com “haver” impessoal: “pode haver”.",
            "Incorreta. Com “haver” impessoal: “há de haver”."
        ],
        "dicaBanca": "Comparar “existir” e “haver” é uma pegadinha clássica.",
        "pegadinha": "Sinônimos não necessariamente têm o mesmo comportamento sintático.",
        "memorizar2026": "Existem problemas; há problemas. Devem existir; deve haver.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-014",
        "numero": 14,
        "subtopico": "Tempo decorrido — fazer",
        "dificuldade": "media",
        "pergunta": "Assinale a frase correta.",
        "alternativas": [
            "Fazem dez anos que a escola funciona neste prédio.",
            "Vão fazer dez anos que a escola funciona neste prédio.",
            "Devem fazer dez anos que a escola funciona neste prédio.",
            "Faz dez anos que a escola funciona neste prédio.",
            "Fizeram dez anos que a escola funciona neste prédio."
        ],
        "correta": 3,
        "feedbackAcerto": "Quando indica tempo decorrido, “fazer” é impessoal e permanece na 3ª pessoa do singular.",
        "feedbackErro": "Em locuções, o auxiliar também fica no singular: “vai fazer”, “deve fazer”.",
        "analiseAlternativas": [
            "Incorreta. O correto é “faz dez anos”.",
            "Incorreta. O correto é “vai fazer dez anos”.",
            "Incorreta. O correto é “deve fazer dez anos”.",
            "Correta. Verbo impessoal no singular.",
            "Incorreta. A flexão plural não é adequada para tempo decorrido."
        ],
        "dicaBanca": "Procure expressão de tempo depois do verbo: pode ser sinal de “fazer” impessoal.",
        "pegadinha": "O numeral plural não é sujeito do verbo.",
        "memorizar2026": "Faz dez anos; vai fazer dez anos; deve fazer dez anos.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-015",
        "numero": 15,
        "subtopico": "Formas verbais — ver e vir",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase em que as formas verbais estão adequadas à norma culta.",
        "alternativas": [
            "Se eu ver o relatório hoje, avisarei; quando eu vir à escola, conversaremos.",
            "Se eu vir o relatório hoje, avisarei; quando eu vir à escola, conversaremos.",
            "Se eu ver o relatório hoje, avisarei; quando eu vier à escola, conversaremos.",
            "Se eu vier o relatório hoje, avisarei; quando eu ver à escola, conversaremos.",
            "Se eu vir o relatório hoje, avisarei; quando eu vier à escola, conversaremos."
        ],
        "correta": 4,
        "feedbackAcerto": "No futuro do subjuntivo: “ver” → “vir”; “vir” → “vier”.",
        "feedbackErro": "A semelhança gráfica entre os verbos é uma fonte clássica de erro.",
        "analiseAlternativas": [
            "Incorreta. “Se eu ver” deveria ser “se eu vir”, e “quando eu vir à escola” deveria ser “vier”.",
            "Incorreta. A segunda forma deveria ser “vier”.",
            "Incorreta. A primeira forma deveria ser “vir”.",
            "Incorreta. As formas estão trocadas.",
            "Correta. “Se eu vir” (ver) e “quando eu vier” (vir)."
        ],
        "dicaBanca": "Identifique primeiro o verbo de origem antes de conjugar.",
        "pegadinha": "“Vir” pode ser forma do verbo VER; “vier” é forma do verbo VIR.",
        "memorizar2026": "Se eu VIR algo; quando eu VIER a algum lugar.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-016",
        "numero": 16,
        "subtopico": "Pronome relativo — cujo",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase correta.",
        "alternativas": [
            "A professora cujo projeto foi premiado apresentará o trabalho amanhã.",
            "A professora cujo o projeto foi premiado apresentará o trabalho amanhã.",
            "A professora que o projeto dela foi premiado apresentará o trabalho amanhã.",
            "A professora da qual o seu projeto foi premiado apresentará o trabalho amanhã.",
            "A professora a cujo o projeto foi premiado apresentará o trabalho amanhã."
        ],
        "correta": 0,
        "feedbackAcerto": "“Cujo” estabelece relação de posse e concorda com o termo possuído: “cujo projeto”; não admite artigo depois dele.",
        "feedbackErro": "A FGV gosta de alternativas com “cujo o”, construção rejeitada na norma-padrão.",
        "analiseAlternativas": [
            "Correta. Há relação de posse e construção adequada.",
            "Incorreta. Não se usa artigo após “cujo”.",
            "Incorreta. A construção é coloquial e redundante (“que... dela”).",
            "Incorreta. “Da qual o seu” duplica a relação possessiva.",
            "Incorreta. Além da preposição desnecessária, aparece artigo após “cujo”."
        ],
        "dicaBanca": "Pergunte: há ideia de posse entre dois substantivos? “Cujo” pode ser candidato.",
        "pegadinha": "“Cujo” não equivale simplesmente a “que”.",
        "memorizar2026": "Cujo + substantivo, sem artigo: cujo projeto, cuja proposta, cujos alunos.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-017",
        "numero": 17,
        "subtopico": "Regência — informar",
        "dificuldade": "media",
        "pergunta": "Em comunicado oficial, qual frase apresenta construção adequada?",
        "alternativas": [
            "A direção informou os responsáveis da mudança de horário e ela.",
            "A direção informou aos responsáveis a mudança de horário.",
            "A direção informou os responsáveis para a mudança de horário.",
            "A direção informou da mudança os responsáveis de horário.",
            "A direção informou com os responsáveis sobre a mudança de horário."
        ],
        "correta": 1,
        "feedbackAcerto": "“Informar” admite, entre outras construções, “informar algo a alguém”.",
        "feedbackErro": "O verbo aceita mais de um padrão de regência, mas a alternativa precisa ser clara e completa.",
        "analiseAlternativas": [
            "Incorreta. Há referência truncada e complemento inadequado.",
            "Correta. “Informou a mudança aos responsáveis”.",
            "Incorreta. “Para” não introduz adequadamente o destinatário nesse padrão.",
            "Incorreta. A ordem e os complementos geram construção inadequada.",
            "Incorreta. “Com os responsáveis” não é o complemento esperado."
        ],
        "dicaBanca": "Alguns verbos admitem mais de uma regência correta; cuidado com regras absolutas.",
        "pegadinha": "Não rejeite uma construção só porque conhece outra possível.",
        "memorizar2026": "Informar algo a alguém / informar alguém de algo.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-018",
        "numero": 18,
        "subtopico": "Formas verbais — manter / intervir",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase correta.",
        "alternativas": [
            "Se a equipe manter o cronograma, o diretor intervirá apenas em caso de atraso.",
            "Se a equipe mantiver o cronograma, o diretor interverá apenas em caso de atraso.",
            "Se a equipe mantiver o cronograma, o diretor intervirá apenas em caso de atraso.",
            "Se a equipe manter o cronograma, o diretor interveria apenas em caso de atraso.",
            "Se a equipe mantesse o cronograma, o diretor interviria apenas em caso de atraso."
        ],
        "correta": 2,
        "feedbackAcerto": "No futuro do subjuntivo, “manter” → “mantiver”; no futuro do presente, “intervir” → “intervirá”.",
        "feedbackErro": "Verbos derivados costumam seguir a conjugação do verbo-base: manter/ter; intervir/vir.",
        "analiseAlternativas": [
            "Incorreta. O correto é “se mantiver”.",
            "Incorreta. O futuro é “intervirá”, não “interverá”.",
            "Correta. As duas formas verbais estão adequadas.",
            "Incorreta. Há problema em “manter” no futuro do subjuntivo.",
            "Incorreta. “Mantesse” não é forma padrão de “manter”."
        ],
        "dicaBanca": "Use o verbo-base como pista: se TIVER → mantiver; se VIER → intervier (em outro contexto).",
        "pegadinha": "Formas que “soam familiares” podem ser analogias incorretas.",
        "memorizar2026": "Manter segue ter; intervir segue vir.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-019",
        "numero": 19,
        "subtopico": "Registro formal — marcas de oralidade",
        "dificuldade": "media",
        "pergunta": "Em um relatório administrativo, assinale a frase mais adequada ao registro formal.",
        "alternativas": [
            "A gente viu que deu um problema no sistema.",
            "Tipo assim, o sistema apresentou uma falha.",
            "A nível de escola, o negócio precisa melhorar.",
            "A direção constatou uma falha no sistema e solicitou sua correção.",
            "O sistema deu ruim e a direção foi atrás da solução."
        ],
        "correta": 3,
        "feedbackAcerto": "A alternativa usa vocabulário objetivo, impessoal e compatível com documento administrativo.",
        "feedbackErro": "Norma culta não é só “gramática”: a seleção lexical deve ser adequada à situação comunicativa.",
        "analiseAlternativas": [
            "Incorreta. “A gente” e “deu um problema” são marcas coloquiais.",
            "Incorreta. “Tipo assim” é marca de oralidade.",
            "Incorreta. “A nível de” e “o negócio” são inadequados no contexto.",
            "Correta. Registro formal, preciso e claro.",
            "Incorreta. “Deu ruim” e “foi atrás” são coloquiais."
        ],
        "dicaBanca": "A FGV frequentemente cobra formalidade por meio de vocabulário e construção, não só por regras isoladas.",
        "pegadinha": "Uma frase pode estar compreensível, mas ser inadequada ao gênero textual.",
        "memorizar2026": "Registro formal = clareza, precisão, objetividade e poucas marcas de oralidade.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-020",
        "numero": 20,
        "subtopico": "Pronomes tônicos após preposição",
        "dificuldade": "media",
        "pergunta": "Assinale a frase correta em registro formal.",
        "alternativas": [
            "O diretor falou entre eu e os coordenadores.",
            "O diretor trouxe o documento para mim revisar.",
            "A decisão depende de eu.",
            "Sem eu, a reunião não começaria.",
            "O diretor conversou comigo antes da reunião."
        ],
        "correta": 4,
        "feedbackAcerto": "“Comigo” é a forma adequada de “com + mim”.",
        "feedbackErro": "As demais opções usam pronome reto onde se exige forma oblíqua ou usam “mim” como sujeito de infinitivo.",
        "analiseAlternativas": [
            "Incorreta. O adequado é “entre mim e os coordenadores”.",
            "Incorreta. Como sujeito de “revisar”, usa-se “eu”.",
            "Incorreta. Depois de “de”, usa-se “mim”: “depende de mim”.",
            "Incorreta. Depois de “sem”, usa-se “mim”: “sem mim”.",
            "Correta. “Comigo” é a forma consolidada."
        ],
        "dicaBanca": "Preposição + pronome é cobrança recorrente em provas de norma culta.",
        "pegadinha": "“Para mim” só é problema quando “mim” tenta funcionar como sujeito de verbo.",
        "memorizar2026": "Comigo; entre mim e você; sem mim; para eu fazer.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-021",
        "numero": 21,
        "subtopico": "Concordância — sujeito posposto",
        "dificuldade": "media",
        "pergunta": "Em um comunicado, assinale a frase correta.",
        "alternativas": [
            "Chegaram ontem os novos materiais destinados às salas de recursos.",
            "Chegou ontem os novos materiais destinados às salas de recursos.",
            "Foi entregue ontem os novos materiais destinados às salas de recursos.",
            "Existe na escola novos materiais destinados às salas de recursos.",
            "Houveram novos materiais entregues ontem."
        ],
        "correta": 0,
        "feedbackAcerto": "O sujeito “os novos materiais” é plural; mesmo posposto ao verbo, exige “chegaram”.",
        "feedbackErro": "A posição do sujeito não elimina a concordância.",
        "analiseAlternativas": [
            "Correta. Verbo no plural concorda com sujeito plural posposto.",
            "Incorreta. O verbo deveria estar no plural.",
            "Incorreta. Na passiva, seria “foram entregues”.",
            "Incorreta. “Existem ... novos materiais”.",
            "Incorreta. “Houve novos materiais”, se o sentido for existir."
        ],
        "dicaBanca": "A FGV usa sujeito posposto para induzir concordância com o termo mais próximo.",
        "pegadinha": "Não concorde o verbo “com o que vem antes”; localize o sujeito real.",
        "memorizar2026": "Sujeito posposto continua comandando a concordância.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-022",
        "numero": 22,
        "subtopico": "Concordância — porcentagem e expressão partitiva",
        "dificuldade": "alta",
        "pergunta": "Em um relatório, assinale a frase adequada.",
        "alternativas": [
            "A maioria dos estudantes compareceu, mas 30% da turma faltaram.",
            "A maioria dos estudantes compareceu, mas 30% da turma faltou.",
            "A maioria dos estudantes compareceram, mas 30% da turma faltou, sendo obrigatória essa única concordância.",
            "A maioria dos estudantes compareceu, mas 30% faltou da turma.",
            "A maioria dos estudantes compareceram obrigatoriamente, pois o núcleo “maioria” exige plural."
        ],
        "correta": 1,
        "feedbackAcerto": "Com “30% da turma”, a concordância no singular com “turma” é adequada; “a maioria dos estudantes compareceu” também é forma padrão.",
        "feedbackErro": "Expressões partitivas e percentuais admitem nuances; a banca costuma contextualizar e pedir uma forma claramente defensável.",
        "analiseAlternativas": [
            "Incorreta. Com “30% da turma”, o singular é a forma mais direta pela concordância com “turma”.",
            "Correta. As duas concordâncias são adequadas.",
            "Incorreta. A justificativa de exclusividade é falsa; expressões partitivas admitem variação de concordância.",
            "Incorreta. A posição “faltou da turma” é inadequada.",
            "Incorreta. O singular com “maioria” é plenamente possível."
        ],
        "dicaBanca": "Evite decorar como regra absoluta fenômenos que admitem mais de uma concordância.",
        "pegadinha": "A FGV pode explorar a diferença entre forma possível e forma obrigatória.",
        "memorizar2026": "“A maioria compareceu” é padrão; percentuais concordam com o número ou com o especificador, conforme a construção.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-023",
        "numero": 23,
        "subtopico": "Regência — chegar",
        "dificuldade": "media",
        "pergunta": "Assinale a frase mais adequada à norma culta em um texto formal.",
        "alternativas": [
            "Os alunos chegaram na escola antes das sete horas.",
            "Os alunos chegaram para a escola antes das sete horas.",
            "Os alunos chegaram à escola antes das sete horas.",
            "Os alunos chegaram da escola antes das sete horas, no sentido de destino.",
            "Os alunos chegaram pela escola antes das sete horas."
        ],
        "correta": 2,
        "feedbackAcerto": "Na norma-padrão, o verbo “chegar”, indicando destino, rege a preposição “a”: “chegar à escola”.",
        "feedbackErro": "Na fala brasileira, “chegar em” é muito frequente; a banca pode contrastar uso corrente e padrão formal.",
        "analiseAlternativas": [
            "Incorreta no padrão formal cobrado: prefere-se “chegar à escola”.",
            "Incorreta. “Para” não é a regência tradicionalmente exigida no padrão.",
            "Correta. Regência adequada.",
            "Incorreta. “Da escola” indica origem, não destino.",
            "Incorreta. “Pela escola” não expressa adequadamente o destino."
        ],
        "dicaBanca": "Esse contraste aparece em provas FGV com textos literários ou coloquiais.",
        "pegadinha": "Uso real e padrão formal podem divergir; identifique o que o comando pede.",
        "memorizar2026": "Chegar a algum lugar, no padrão formal.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-024",
        "numero": 24,
        "subtopico": "Concordância — passiva sintética",
        "dificuldade": "alta",
        "pergunta": "Em um aviso de secretaria, qual redação está adequada?",
        "alternativas": [
            "Precisa-se de documentos atualizados e cópias autenticadas, pois “documentos” é sujeito.",
            "Solicita-se os documentos até sexta-feira.",
            "Aluga-se salas para reuniões pedagógicas.",
            "Solicitam-se os documentos até sexta-feira.",
            "Necessitam-se de novos formulários para matrícula."
        ],
        "correta": 3,
        "feedbackAcerto": "Em “solicitam-se os documentos”, o “se” é partícula apassivadora e o verbo concorda com o sujeito paciente plural.",
        "feedbackErro": "Com verbo transitivo direto, a estrutura pode formar voz passiva sintética; com preposição obrigatória, o “se” tende a indeterminar o sujeito e o verbo fica no singular.",
        "analiseAlternativas": [
            "Incorreta. Em “precisa-se de...”, há índice de indeterminação; o verbo fica singular, mas a justificativa dada é falsa.",
            "Incorreta. Se “os documentos” é sujeito paciente plural, o verbo deve ir ao plural.",
            "Incorreta. O correto, em passiva sintética, é “alugam-se salas”.",
            "Correta. Concordância da passiva sintética.",
            "Incorreta. “Necessitar de” pede preposição; com sujeito indeterminado: “necessita-se de”."
        ],
        "dicaBanca": "FGV gosta de distinguir partícula apassivadora e índice de indeterminação do sujeito.",
        "pegadinha": "Não marque pela presença do “se”; analise a transitividade do verbo.",
        "memorizar2026": "VTD + se + sujeito paciente → verbo concorda. Verbo com preposição + se → singular.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    },
    {
        "id": "SEDUC-LP-NC-025",
        "numero": 25,
        "subtopico": "Caso integrador — norma culta",
        "dificuldade": "alta",
        "pergunta": "Assinale a frase inteiramente adequada à norma culta em um comunicado escolar.",
        "alternativas": [
            "Houveram dúvidas, mas os responsáveis compareceu à reunião e entregaram os documentos.",
            "Embora houvessem dúvidas, os responsáveis compareceram à reunião e entregou os documentos.",
            "Embora houvesse dúvidas, os responsáveis compareceram na reunião e entregaram os documentos que foi solicitado.",
            "Embora houvesse dúvidas, os responsáveis compareceu à reunião e entregaram os documentos que lhes havia sido solicitados.",
            "Embora houvesse dúvidas, os responsáveis compareceram à reunião e entregaram os documentos que lhes haviam sido solicitados."
        ],
        "correta": 4,
        "feedbackAcerto": "A alternativa mantém “haver” impessoal no singular, concordância plural com “responsáveis/documentos” e regência adequada de “comparecer”.",
        "feedbackErro": "Questão integradora típica: cada distrator contém um desvio diferente ou uma combinação de desvios.",
        "analiseAlternativas": [
            "Incorreta. “Houve dúvidas” e “os responsáveis compareceram”.",
            "Incorreta. “Haver” existencial é impessoal: “houvesse”; além disso, “entregaram”.",
            "Incorreta no padrão formal cobrado: “compareceram à reunião”; e “documentos que foram solicitados”.",
            "Incorreta. “Os responsáveis compareceram”; além disso, na locução passiva com sujeito “documentos”: “haviam sido solicitados”.",
            "Correta. Todas as relações de concordância e regência estão adequadas."
        ],
        "dicaBanca": "Em questões finais, releia a alternativa inteira: a FGV frequentemente esconde um segundo erro depois de um trecho aparentemente correto.",
        "pegadinha": "Não pare ao encontrar a primeira regra correta.",
        "memorizar2026": "Norma culta exige consistência no período inteiro.",
        "fonte": "Questão autoral calibrada por provas oficiais recentes da FGV para professores e pelo Edital SEDUC-PA 2026 — tópico Norma culta."
    }
];

    window.seducLinguaPortuguesaNormaCulta2026 = banco;
})();
