const segurancaInformacaoTeoria = [
{
  titulo: "🔐 Conceitos Fundamentais de Segurança da Informação",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Segurança da informação é o conjunto de medidas utilizadas para proteger informações contra acesso, alteração, divulgação ou destruição não autorizada.</p>
<p>Seu objetivo é garantir que os dados permaneçam protegidos e disponíveis para os usuários autorizados.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p>Segurança da informação não protege apenas computadores, mas também documentos físicos, sistemas, redes e dados em qualquer formato.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 OS PILARES DA SEGURANÇA (O QUE CAI NA PROVA)</h3>
<p>A segurança da informação busca proteger os dados baseando-se em princípios fundamentais, frequentemente cobrados pelas bancas:</p>
<ul>
  <li>🔒 <strong>Confidencialidade:</strong> Apenas pessoas autorizadas podem acessar.</li>
  <li>🛡️ <strong>Integridade:</strong> A informação não pode ser alterada indevidamente.</li>
  <li>⚡ <strong>Disponibilidade:</strong> A informação deve estar acessível quando necessária.</li>
  <li>✅ <strong>Autenticidade:</strong> A identidade do usuário ou da informação deve ser verdadeira.</li>
</ul>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE</h4>
  <p>Lembre-se da sigla <strong>CIDA</strong> ou <strong>DICA</strong>:<br>
  <strong>C</strong>onfidencialidade<br>
  <strong>I</strong>ntegridade<br>
  <strong>D</strong>isponibilidade<br>
  <strong>A</strong>utenticidade</p>
</div>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p>A banca costuma misturar os conceitos dos pilares da segurança da informação.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Integridade garante que o sistema não saia do ar. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. Quem garante o sistema no ar é a <strong>Disponibilidade</strong>.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Confidencialidade garante que a mensagem veio da pessoa certa. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. Quem garante a autoria é a <strong>Autenticidade</strong>.</p>
</div>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 RESUMO FINAL</h4>
  <ul>
    <li>🔒 <strong>Confidencialidade</strong> = Sigilo.</li>
    <li>🛡️ <strong>Integridade</strong> = Sem alteração indevida.</li>
    <li>⚡ <strong>Disponibilidade</strong> = Acessível quando preciso.</li>
    <li>✅ <strong>Autenticidade</strong> = Identidade verdadeira.</li>
  </ul>
</div>
`
},

{
  titulo: "🔒 Confidencialidade",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Confidencialidade é o princípio da segurança da informação que garante que determinadas informações sejam acessadas apenas por pessoas autorizadas. Seu objetivo é proteger dados contra divulgação, visualização ou acesso indevido.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p>Confidencialidade está diretamente relacionada à palavra <strong>SIGILO</strong>.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 COMO GARANTIR A CONFIDENCIALIDADE?</h3>
<ul>
  <li><strong>Criptografia:</strong> Transforma os dados em um formato ilegível. Mesmo se forem interceptados, não poderão ser lidos.</li>
  <li><strong>Controle de Acesso (Senhas/Biometria):</strong> Determina quem pode visualizar ou utilizar a informação.</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 QUEBRA DE CONFIDENCIALIDADE</h3>
<p>A quebra ocorre quando uma informação sigilosa vaza. Exemplos: Vazamento de senhas, divulgação de dados pessoais de clientes, ou acesso indevido a documentos restritos de uma empresa.</p>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p>Muitas bancas afirmam que a criptografia garante a integridade e a disponibilidade dos dados.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌ Errado.</span> A ferramenta primária e mais clássica para garantir a <strong>Confidencialidade</strong> é a Criptografia (esconder o dado).</p>
</div>
`
},

{
  titulo: "🛡️ Integridade",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Integridade é o princípio da segurança que garante que os dados permaneçam corretos, completos e <strong>sem alterações não autorizadas</strong>.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p>A Integridade está relacionada à <strong>preservação do conteúdo</strong>. A mensagem que sai deve ser exatamente a mesma que chega.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 COMO PROTEGER A INTEGRIDADE?</h3>
<ul>
  <li><strong>Funções Hash (Resumo Criptográfico):</strong> Cria uma "impressão digital" do arquivo. Se um único ponto final for alterado no texto, o Hash muda completamente, acusando a fraude.</li>
  <li><strong>Assinatura Digital:</strong> Além de garantir a autoria (Autenticidade), a assinatura digital trava o documento, garantindo que ele não sofreu adulterações (Integridade).</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 VIOLAÇÃO DA INTEGRIDADE</h3>
<p>Exemplos: Alteração indevida de uma nota escolar no sistema, modificação do valor de um boleto bancário, ou corrupção de arquivos por falha no disco rígido.</p>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p>A banca vai dizer: <em>"A Integridade garante que ninguém leia a mensagem."</em></p>
  <p><span style="color: #DC3545; font-weight: bold;">❌ Errado.</span> Quem garante que ninguém vai <em>ler</em> é a Confidencialidade. A Integridade apenas garante que ninguém vai <em>alterar</em> a mensagem. Um texto pode ser público (sem confidencialidade) e íntegro ao mesmo tempo.</p>
</div>
`
},

{
  titulo: "✅ Autenticidade e ⚡ Disponibilidade",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 AUTENTICIDADE</h2>
<p>Garante que uma pessoa, sistema ou informação é realmente quem afirma ser. Trata-se da <strong>veracidade da identidade</strong>.</p>
<ul>
  <li><strong>Ferramentas:</strong> Login com Senha, Biometria, Certificado Digital e Assinatura Digital.</li>
  <li><strong>Não-Repúdio (Irretratabilidade):</strong> É uma consequência da Autenticidade combinada com a Integridade. Impede que o autor negue ter assinado/enviado a mensagem (ex: Assinatura Digital com token ICP-Brasil).</li>
</ul>

<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px; margin-top: 30px;">🎯 DISPONIBILIDADE</h2>
<p>Garante que dados, sistemas e serviços estejam <strong>acessíveis e utilizáveis sob demanda</strong> por uma entidade autorizada (acesso no momento necessário).</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 COMO GARANTIR A DISPONIBILIDADE?</h3>
<ul>
  <li><strong>Redundância:</strong> Ter equipamentos "reserva" (ex: dois servidores espelhados. Se um queimar, o outro assume imediatamente).</li>
  <li><strong>Nobreaks/Geradores:</strong> Para evitar quedas por falta de energia.</li>
  <li><strong>Backups:</strong> Cópias de segurança para restaurar dados perdidos rapidamente.</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p>Uma indisponibilidade não é gerada apenas por hackers (Ataque DDoS). Uma simples queda de luz, falha no ar condicionado do servidor ou HD queimado representam quebra de <strong>Disponibilidade</strong>.</p>
</div>
`
},

{
  titulo: "🦠 Malware (Vírus, Worm, Trojan e Ransomware)",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Malware é a abreviação de "Malicious Software" (Software Malicioso). É a categoria "guarda-chuva" para todos os programas criados para causar danos, roubar informações ou prejudicar o sistema.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE</h4>
  <p>Todo vírus é um malware, mas nem todo malware é um vírus!</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 VÍRUS</h3>
<p>O vírus precisa se <strong>anexar (infectar)</strong> a outro arquivo legítimo para funcionar (ex: se esconde dentro de um PDF ou de um arquivo .exe). Além disso, ele <strong>depende da execução do usuário</strong> (se você não clicar no arquivo infectado, o vírus não age).</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 WORM (Verme)</h3>
<p>Diferente do Vírus, o Worm é um programa independente (não precisa se anexar a outros arquivos) e <strong>se propaga automaticamente</strong> através de vulnerabilidades na rede, sem precisar que o usuário clique em nada. Ele se autorreplica e causa congestionamento na rede.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 CAVALO DE TROIA (Trojan)</h3>
<p>Programa que <strong>aparenta ser legítimo</strong> ou útil (um jogo, uma atualização), mas que, ao ser instalado, executa ações maliciosas ocultamente (como abrir uma porta/backdoor para um invasor).</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 RANSOMWARE</h3>
<p>É o malware do <strong>sequestro</strong>. Ele criptografa (tranca) todos os arquivos do computador da vítima e exige um resgate financeiro (geralmente em Bitcoin) para devolver a senha de acesso.</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DA PROVA</h4>
  <p><strong>VÍRUS</strong> ➔ Precisa de Hospedeiro + Clique do usuário.<br>
  <strong>WORM</strong> ➔ Autônomo + Se espalha pela rede sozinho.<br>
  <strong>TROJAN</strong> ➔ Disfarce / Presente de grego.<br>
  <strong>RANSOMWARE</strong> ➔ Criptografia + Resgate.</p>
</div>
`
},

{
  titulo: "🎣 Phishing, Engenharia Social e Espiões",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Nem sempre o ataque tenta quebrar a criptografia da máquina. Muitas vezes, é muito mais fácil enganar o ser humano que opera o computador.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 ENGENHARIA SOCIAL</h3>
<p>É a manipulação psicológica das pessoas. O atacante utiliza persuasão, urgência, medo, curiosidade ou autoridade (se passar pelo chefe) para convencer a vítima a entregar a senha, quebrar regras de segurança ou abrir arquivos perigosos.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 PHISHING (Pescaria)</h3>
<p>É a técnica de fraude mais comum da Engenharia Social no ambiente digital. O criminoso cria e-mails ou <strong>sites falsos</strong> idênticos aos de um Banco ou Receita Federal (a "isca") esperando que a vítima digite voluntariamente suas senhas e cartões.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 SPYWARE E KEYLOGGER</h3>
<p>São os "espiões" silenciosos.</p>
<ul>
  <li><strong>Spyware:</strong> Monitora o comportamento do usuário e envia os dados para terceiros.</li>
  <li><strong>Keylogger:</strong> Um tipo específico de Spyware que <strong>captura tudo o que é digitado no teclado</strong> físico, visando roubar senhas no exato momento da digitação.</li>
  <li><strong>Screenlogger:</strong> Em vez das teclas, captura a tela (tira prints ou rastreia o clique do mouse no teclado virtual dos bancos).</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Phishing é um vírus poderoso que quebra a senha do sistema. / <span style="color: #28A745; font-weight: bold;">✔</span> Phishing <strong>NÃO É</strong> vírus. Phishing é fraude/golpe. Ele não quebra senha, ele engana você para que você mesmo entregue a senha.</p>
</div>
`
},

{
  titulo: "🔑 Senhas e Autenticação em Dois Fatores (2FA)",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>A autenticação é o processo de confirmar quem a pessoa é. A Autorização (que vem depois) define o que ela pode fazer no sistema.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 FATORES DE AUTENTICAÇÃO</h3>
<p>Existem 3 famílias principais de fatores de autenticação nas provas:</p>
<ol>
  <li><strong>O que você SABE (Conhecimento):</strong> Senhas, Códigos PIN, Palavras-chave.</li>
  <li><strong>O que você POSSUI (Posse):</strong> Token físico do banco, Smartcard, Smartphone (recebendo um SMS), Crachá.</li>
  <li><strong>O que você É (Biometria):</strong> Impressão digital, reconhecimento facial, leitura de íris, voz.</li>
</ol>

<h3 style="color: #E67E22; margin-top: 20px;">📌 AUTENTICAÇÃO EM DOIS FATORES (2FA)</h3>
<p>Para elevar a segurança, combina-se <strong>dois fatores de grupos diferentes</strong>. Se um hacker descobrir sua senha (Fator 1), ele ainda não conseguirá entrar, pois não possui o seu celular para ver o código de segurança (Fator 2).</p>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p>A banca relata: <em>"Para acessar o cofre, o usuário precisou digitar uma Senha Numérica e, logo depois, uma Senha de Letras. Logo, ele usou Autenticação de 2 Fatores."</em></p>
  <p><span style="color: #DC3545; font-weight: bold;">❌ Errado.</span> Ele usou o mesmo fator duas vezes (O que você SABE). Para ser "Múltiplos Fatores", é obrigatório misturar categorias (Ex: Senha + Biometria, ou Senha + Token no celular).</p>
</div>
`
},

{
  titulo: "💾 Backup e Proteção de Dados",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Backup é uma <strong>cópia de segurança</strong> dos dados realizada com o objetivo de possibilitar sua recuperação (restauração). Ele atende diretamente ao princípio da <strong>Disponibilidade</strong>.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 TIPOS DE BACKUP (MUITO COBRADO)</h3>
<ul>
  <li><strong>Backup Completo (Full):</strong> Copia TODOS os arquivos selecionados. Mais simples de restaurar (basta o próprio backup), mas exige muito tempo e espaço de armazenamento.</li>
  <li><strong>Backup Incremental:</strong> Copia apenas os arquivos que foram criados ou alterados <strong>desde o último backup de qualquer tipo</strong>. É o mais rápido para fazer e usa o menor espaço. <em>Restauração complexa:</em> Exige o Completo + TODOS os Incrementais na ordem.</li>
  <li><strong>Backup Diferencial:</strong> Copia os arquivos alterados <strong>desde o último backup COMPLETO</strong>. Usa mais espaço que o incremental. <em>Restauração intermediária:</em> Exige apenas o Completo + o ÚLTIMO Diferencial.</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 A REGRA 3-2-1 DO BACKUP</h3>
<p>Para garantir que os dados sobrevivam a qualquer desastre, os especialistas em segurança ditam a seguinte regra de ouro:</p>
<ul>
  <li><strong>3</strong> cópias dos seus dados.</li>
  <li><strong>2</strong> mídias de armazenamento diferentes (Ex: um SSD Externo e um Servidor NAS).</li>
  <li><strong>1</strong> cópia fora do ambiente físico (offsite), como um backup na Nuvem.</li>
</ul>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 RESUMO FINAL</h4>
  <ul>
    <li>💾 <strong>Backup:</strong> Não evita ataques, mas garante a restauração e sobrevida.</li>
    <li>⚡ <strong>Incremental:</strong> Alterações desde o último "pingo" (qualquer backup).</li>
    <li>📊 <strong>Diferencial:</strong> Alterações focadas só no último FULL.</li>
  </ul>
</div>
`
},

{
  titulo: "📝 Questões Comentadas - Parte 1",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 HORA DE PRATICAR: QUESTÕES DE CONCURSOS</h2>
<p>Vamos testar os conceitos fundamentais de Segurança da Informação que acabamos de revisar através de questões reais de provas.</p>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 1 (VUNESP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
A Segurança da Informação é sustentada por princípios ou pilares básicos. A garantia de que uma informação não será alterada, intencionalmente ou acidentalmente, durante o seu armazenamento ou trânsito, refere-se ao pilar da:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Disponibilidade.</li>
  <li><strong>B) Integridade.</strong></li>
  <li>C) Confidencialidade.</li>
  <li>D) Autenticidade.</li>
  <li>E) Irretratabilidade.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra B</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Falou em "garantir que não será alterada", a resposta automática deve ser <strong>Integridade</strong>. Lembre-se: Confidencialidade (não será lida), Autenticidade (temos certeza de quem fez), Disponibilidade (sempre acessível).
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 2 (CEBRASPE)</h3>
<p><strong>Julgue o item a seguir:</strong><br>
O worm é um programa malicioso que necessita ser explicitamente executado pelo usuário para infectar a máquina hospedeira e, a partir de então, inserir cópias de si mesmo em outros arquivos e pastas locais.</p>
<p><strong>Gabarito:</strong> <span style="color: #DC3545; font-weight: bold; background-color: #F8D7DA; padding: 3px 8px; border-radius: 4px;">❌ ERRADO</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> A banca descreveu perfeitamente o comportamento do <strong>Vírus</strong> (que precisa ser executado e precisa de um hospedeiro). O <strong>Worm</strong> (verme) se propaga de forma automática pelas redes explorando vulnerabilidades sistêmicas, sem necessitar da intervenção do usuário ou de um arquivo hospedeiro.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 3 (FCC)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Entre os diversos tipos de códigos maliciosos (malwares), há um que se disfarça de aplicativo ou arquivo legítimo para induzir o usuário a instalá-lo no computador. Uma vez instalado, esse malware pode permitir que um invasor tenha controle remoto sobre a máquina afetada. Esse malware é conhecido como:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Ransomware.</li>
  <li>B) Worm.</li>
  <li>C) Keylogger.</li>
  <li>D) Rootkit.</li>
  <li><strong>E) Cavalo de Troia (Trojan).</strong></li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra E</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> A palavra-chave da banca foi "disfarça de aplicativo legítimo". O <strong>Trojan (Cavalo de Troia)</strong> age exatamente como o mito grego: é um "presente" que parece inofensivo ou atrativo, mas carrega um ataque furtivo oculto em seu interior (como abrir uma porta traseira - Backdoor - para hackers).
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 4 (FGV)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Um tipo de ataque à segurança da informação que se baseia primordialmente na enganação do usuário (explorando a confiança), fazendo-o acreditar que está se comunicando com uma instituição verdadeira por meio de páginas web falsificadas a fim de capturar senhas bancárias, é classificado como:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) DDoS.</li>
  <li><strong>B) Phishing.</strong></li>
  <li>C) Spyware.</li>
  <li>D) Backdoor.</li>
  <li>E) Ransomware.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra B</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> O <strong>Phishing</strong> (pescaria) é a técnica de Engenharia Social onde o criminoso falsifica uma identidade confiável (ex: tela clonada da Caixa Econômica) para "pescar" os dados que o próprio usuário insere de forma enganada.
</div>
`
},

{
  titulo: "📝 Questões Comentadas - Parte 2",
  conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 MAIS QUESTÕES DE CONCURSOS PARA FIXAÇÃO</h2>
<p>Continuando nossa bateria de exercícios com temas quentes: Autenticação, Backup e novos tipos de Malware.</p>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 5 (CEBRASPE)</h3>
<p><strong>Julgue o item a seguir:</strong><br>
A utilização conjunta de uma senha forte (letras, números e símbolos) combinada à exigência da leitura biométrica (impressão digital) durante o acesso a um sistema financeiro constitui um exemplo de autenticação multifator (MFA).</p>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ CERTO</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Corretíssimo. A autenticação multifator (ou de dois fatores) exige a combinação de categorias diferentes. A senha entra na categoria "Algo que você SABE". A impressão digital entra na categoria "Algo que você É" (Biometria). Como misturou duas categorias, é um 2FA (MFA) autêntico.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 6 (Instituto AOCP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
O administrador de redes de uma organização implementou uma rotina onde o backup realizado às sextas-feiras copia absolutamente todos os arquivos do sistema. Durante os dias da semana subsequentes (segunda a quinta), o sistema de backup copia somente os arquivos que foram modificados ou criados desde a sexta-feira. O backup realizado nos dias de semana é classificado como:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Completo.</li>
  <li>B) Incremental.</li>
  <li><strong>C) Diferencial.</strong></li>
  <li>D) Espelhado.</li>
  <li>E) Híbrido.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> A questão afirma que a rotina da semana copia arquivos baseando-se EXCLUSIVAMENTE na sexta-feira (que foi o Backup Completo/Full). O backup que sempre olha para trás mirando o último Full é o <strong>Diferencial</strong>. Se ele copiasse mirando apenas o dia anterior (quinta olhando para quarta), seria Incremental.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 7 (FUNDATEC)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Recentemente, inúmeras prefeituras e órgãos públicos foram vítimas de um ataque cibernético que paralisou os servidores. O malware utilizado criptografava todo o banco de dados do município, tornando os arquivos inacessíveis, e apresentava uma tela exigindo o pagamento de moedas virtuais para o fornecimento da chave de liberação. Esse comportamento caracteriza um ataque de:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Adware.</li>
  <li><strong>B) Ransomware.</strong></li>
  <li>C) Keylogger.</li>
  <li>D) Spyware.</li>
  <li>E) Rootkit.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra B</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Criptografia indevida + Bloqueio de dados + Pedido de resgate = <strong>Ransomware</strong>. ("Ransom" significa resgate em inglês). A melhor defesa contra isso não é pagar o resgate, e sim ter um excelente sistema de Backup offline.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 8 (VUNESP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Assinale a alternativa que descreve corretamente a principal função do <strong>Keylogger</strong>, uma variação de software malicioso:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Clonar páginas de internet banking.</li>
  <li>B) Enviar milhares de e-mails em massa sem a autorização do usuário (Spam).</li>
  <li>C) Destruir a tabela de partições do disco rígido e inviabilizar o boot.</li>
  <li><strong>D) Registrar e capturar todas as teclas digitadas pelo usuário no teclado.</strong></li>
  <li>E) Desativar remotamente o antivírus do Windows.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra D</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> O Keylogger é uma subcategoria do <em>Spyware</em> (Software Espião). O nome literalmente significa "Registrador de Chaves/Teclas" (Key = tecla, Logger = registrador). Ele captura sorrateiramente tudo o que a vítima digita, enviando relatórios com senhas e dados confidenciais diretamente ao cibercriminoso.
</div>
`
}
];
