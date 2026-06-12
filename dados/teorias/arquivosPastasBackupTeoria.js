const arquivosPastasBackupTeoria = [
{
titulo: "1. Conceitos Fundamentais de Arquivos e Pastas",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Os arquivos e as pastas constituem a base da organização das informações em sistemas computacionais. Todo documento, imagem, vídeo, programa ou dado armazenado em um computador é representado por meio de arquivos organizados em pastas.</p>
<p>A correta compreensão desses conceitos é essencial para a utilização eficiente de sistemas operacionais como Windows e Linux, sendo um tema frequentemente cobrado em concursos públicos.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ O QUE É UM ARQUIVO?</h4>
  <p>Arquivo é uma <strong>unidade de armazenamento de informações</strong> em um dispositivo digital. Ele pode conter diferentes tipos de dados, como textos, imagens, áudios, vídeos, programas e planilhas. Cada arquivo possui um nome e, geralmente, uma extensão que identifica seu formato.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 EXEMPLOS DE ARQUIVOS</h3>
<ul>
  <li>📄 <strong>.docx</strong> (Trabalho.docx)</li>
  <li>📊 <strong>.xlsx</strong> (Planilha.xlsx)</li>
  <li>🖼️ <strong>.jpg</strong> (Foto.jpg)</li>
  <li>🎵 <strong>.mp3</strong> (Musica.mp3)</li>
  <li>🎬 <strong>.mp4</strong> (Video.mp4)</li>
  <li>📑 <strong>.pdf</strong> (Relatorio.pdf)</li>
</ul>
`
},

{
titulo: "2. Organização de Arquivos e Pastas",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>A organização de arquivos e pastas é uma prática fundamental para facilitar o armazenamento, localização e gerenciamento das informações. Tanto o Windows quanto o Linux utilizam <strong>estruturas hierárquicas (em árvore)</strong>.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ DIRETÓRIO RAIZ</h4>
  <p>O diretório raiz é o ponto inicial e absoluto da estrutura de diretórios de um sistema operacional. No Windows, geralmente é o <code>C:\\</code>. No Linux, é apenas a barra <code>/</code>.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 REPRESENTAÇÃO GRÁFICA (EM ÁRVORE)</h3>
<p><strong>Exemplo no Windows:</strong><br>
💽 C:\\ (Raiz)<br>
&nbsp; ├── 📂 Usuarios<br>
&nbsp; &nbsp; &nbsp; └── 📂 Joao<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ├── 📂 Documentos<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── 📂 Downloads</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE: CAMINHO ABSOLUTO vs RELATIVO</h4>
  <p><strong>Absoluto:</strong> Indica a localização completa começando desde o diretório raiz (Ex: <code>C:\\Usuarios\\Joao\\Documentos\\Relatorio.docx</code>).<br>
  <strong>Relativo:</strong> Indica a localização tomando como referência a pasta <em>atual</em> onde você já está.</p>
</div>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Diretório e pasta são conceitos completamente diferentes. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. Para fins de prova, "Pasta" e "Diretório" são considerados <strong>sinônimos</strong>.</p>
</div>
`
},

{
titulo: "3. Operações com Arquivos e Pastas",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>O domínio das operações básicas de arquivos é essencial e as bancas amam testar a diferença sutil entre elas (especialmente Copiar vs Mover).</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE: A DIFERENÇA DE OURO</h4>
  <p><strong>COPIAR (Ctrl+C):</strong> O arquivo original PERMANECE no local de origem. Surgem DUAS versões idênticas do arquivo.<br>
  <strong>MOVER / RECORTAR (Ctrl+X):</strong> O arquivo DEIXA de existir no local original. Continua existindo APENAS UMA versão, transferida para o novo endereço.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 EXCLUSÃO E LIXEIRA</h3>
<p>Excluir arquivos (pressionando a tecla <code>Delete</code>) normalmente os envia para a Lixeira, uma área temporária de onde podem ser restaurados. A exclusão definitiva só ocorre se a lixeira for esvaziada.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ EXCLUSÃO PERMANENTE</h4>
  <p>Pressionar <strong>Shift + Delete</strong> exclui o arquivo diretamente, ignorando a Lixeira. A recuperação convencional torna-se impossível!</p>
</div>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 RESUMO FINAL</h4>
  <ul>
    <li>➕ <strong>Criar:</strong> Gera novos arquivos ou pastas.</li>
    <li>📋 <strong>Copiar:</strong> Mantém o original intacto.</li>
    <li>✂️ <strong>Mover:</strong> Transfere e remove da origem.</li>
    <li>✏️ <strong>Renomear (F2):</strong> Altera apenas o nome, preserva o conteúdo.</li>
  </ul>
</div>
`
},
{
titulo: "4. Extensões de Arquivos",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>As extensões são os "sobrenomes" dos arquivos. Elas informam ao Sistema Operacional qual programa específico deve ser usado para abrir aquele conteúdo.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 EXTENSÕES MAIS COBRADAS</h3>
<ul>
  <li>📄 <strong>Textos:</strong> .txt (simples), .docx (Word), .odt (Writer), .pdf (Acrobat/Portátil).</li>
  <li>📊 <strong>Planilhas:</strong> .xlsx (Excel), .ods (Calc), .csv (Valores separados por vírgula).</li>
  <li>🎞️ <strong>Apresentações:</strong> .pptx (PowerPoint), .odp (Impress).</li>
  <li>🖼️ <strong>Imagens:</strong> .jpg / .jpeg (Fotos), .png (Fundo transparente), .gif (Animação curta).</li>
  <li>🎵 <strong>Multimídia:</strong> .mp3 (Áudio), .mp4 (Vídeo).</li>
  <li>🗜️ <strong>Compactados:</strong> .zip, .rar.</li>
  <li>⚙️ <strong>Executáveis:</strong> .exe, .bat.</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Se o Windows ocultar a extensão de um arquivo conhecido, ela deixa de existir e o arquivo perde seu formato. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. A extensão continua existindo no código do sistema; ela apenas não é exibida na tela do usuário para fins estéticos.</p>
</div>
`
},
{
titulo: "5. Gerenciamento de Arquivos no Windows",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>A principal ferramenta para visualizar, organizar e manipular arquivos no Windows é o <strong>Explorador de Arquivos</strong> (File Explorer).</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DO TECLADO</h4>
  <p>Para abrir o Explorador de Arquivos instantaneamente, pressione o atalho: <strong>Windows + E</strong>.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 ESTRUTURA DO EXPLORADOR</h3>
<ul>
  <li><strong>Painel de Navegação (Esquerda):</strong> Exibe a hierarquia em árvore, pendrives conectados e locais de rede.</li>
  <li><strong>Barra de Endereços (Topo):</strong> Mostra o caminho da pasta atual (Ex: <code>C:\\Usuarios\\Documentos</code>).</li>
  <li><strong>Caixa de Pesquisa (Topo Direito):</strong> Busca itens exclusivamente dentro da pasta em que você está navegando.</li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 ATRIBUTOS DE ARQUIVOS</h3>
<p>Ao clicar com o botão direito e ir em Propriedades, você encontra os atributos do arquivo:</p>
<ul>
  <li>👁️ <strong>Somente Leitura:</strong> Impede que o arquivo seja modificado acidentalmente.</li>
  <li>👻 <strong>Oculto:</strong> O arquivo não aparece nas listagens normais do sistema.</li>
</ul>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 RESUMO DOS ATALHOS CLÁSSICOS</h4>
  <p><code>Ctrl + C</code> = Copiar<br>
  <code>Ctrl + X</code> = Recortar (Mover)<br>
  <code>Ctrl + V</code> = Colar<br>
  <code>Ctrl + Z</code> = Desfazer ação<br>
  <code>Ctrl + A</code> = Selecionar Tudo<br>
  <code>F2</code> = Renomear</p>
</div>
`
},
{
titulo: "6. Gerenciamento de Arquivos no Linux",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>O Linux é estruturalmente diferente do Windows. Ele <strong>não utiliza letras de unidade</strong> (como C: ou D:). Toda a árvore nasce de um único ponto inicial, chamado de diretório raiz.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE: CASE SENSITIVE</h4>
  <p>Diferente do Windows, o Linux difere letras maiúsculas de minúsculas! Um arquivo chamado <code>Prova.txt</code> é completamente diferente de <code>prova.txt</code>. Eles podem existir simultaneamente na mesma pasta.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 A FAMOSA ÁRVORE DE DIRETÓRIOS</h3>
<ul>
  <li><strong>/</strong> ➔ O Diretório Raiz. A origem de tudo.</li>
  <li><strong>/home</strong> ➔ Abriga as pastas pessoais dos usuários comuns (Seus documentos ficam aqui).</li>
  <li><strong>/root</strong> ➔ Pasta pessoal exclusiva do superusuário (Administrador do sistema).</li>
  <li><strong>/etc</strong> ➔ Guarda os arquivos de <em>configuração</em> do sistema.</li>
  <li><strong>/bin</strong> ➔ Guarda os arquivos binários e executáveis essenciais.</li>
  <li><strong>/var</strong> ➔ Arquivos variáveis (Ex: Logs e registros do sistema).</li>
  <li><strong>/tmp</strong> ➔ Arquivos temporários (apagados a cada reinício).</li>
  <li><strong>/dev</strong> ➔ Dispositivos físicos (mouses, pendrives, lidos como arquivos).</li>
</ul>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> A pasta <code>/root</code> é a origem principal (raiz) do sistema. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. A raiz é apenas a barra <code>/</code>. O diretório <code>/root</code> é a pasta pessoal do administrador.</p>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> Os programas instalados ficam dentro de <code>/etc</code>. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. O <code>/etc</code> guarda as configurações. Os executáveis ficam em <code>/bin</code> ou <code>/usr/bin</code>.</p>
</div>
`
},
{
titulo: "7. Permissões de Arquivos no Linux",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>O Linux é um sistema extremamente focado em segurança de múltiplos usuários. Cada arquivo e pasta possui regras rígidas de quem pode ver, alterar ou rodar.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 A TRÍADE DE PERMISSÕES (rwx)</h3>
<p>As permissões geram valores numéricos (matemática cobrada em provas):</p>
<ul>
  <li>📖 <strong>r (Read / Leitura):</strong> Valor = <strong>4</strong></li>
  <li>✍️ <strong>w (Write / Escrita):</strong> Valor = <strong>2</strong></li>
  <li>⚙️ <strong>x (eXecute / Execução):</strong> Valor = <strong>1</strong></li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 CATEGORIAS (U G O)</h3>
<p>Essas permissões são aplicadas na seguinte ordem:</p>
<ol>
  <li><strong>Dono (User):</strong> Quem criou o arquivo.</li>
  <li><strong>Grupo (Group):</strong> O grupo de usuários associado.</li>
  <li><strong>Outros (Others):</strong> O "resto do mundo" (qualquer outra pessoa).</li>
</ol>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE: O COMANDO CHMOD 755</h4>
  <p>O que significa <code>chmod 755 arquivo.txt</code>?<br>
  - <strong>7</strong> para o Dono (4+2+1 = rwx): Lê, escreve e executa.<br>
  - <strong>5</strong> para o Grupo (4+0+1 = r-x): Lê e executa (mas não edita/escreve).<br>
  - <strong>5</strong> para os Outros (4+0+1 = r-x): Lê e executa (mas não edita/escreve).</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 COMANDOS DE PROPRIEDADE</h3>
<ul>
  <li><code>chmod</code> = Muda a permissão de acesso (Change Mode).</li>
  <li><code>chown</code> = Muda o dono/proprietário do arquivo (Change Owner).</li>
  <li><code>ls -l</code> = Visualiza a lista longa, revelando as permissões das pastas.</li>
</ul>
`
},
{
titulo: "8. Terminal Linux e Conceitos de Shell",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>A "tela preta" onde digitamos comandos é a interface mais poderosa e ágil do Linux. Entender as camadas por trás dessa tela é vital para concursos.</p>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE: SHELL vs KERNEL</h4>
  <p><strong>Kernel:</strong> É o núcleo do sistema operacional. Ele fala diretamente com as peças de hardware (processador, memória).<br>
  <strong>Shell:</strong> É o "tradutor" (interpretador de comandos). Ele recebe o texto humano que você digita na tela, interpreta, e envia a ordem para o Kernel. O Shell mais famoso é o <strong>Bash</strong>.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 O PROMPT DE COMANDO ($ vs #)</h3>
<p>O símbolo final da linha de comando indica o seu nível de poder na máquina:</p>
<ul>
  <li><code>joao@linux:~$</code> O cifrão (<strong>$</strong>) indica que você é um <strong>Usuário Comum</strong> (limitado).</li>
  <li><code>root@linux:~#</code> A cerquilha (<strong>#</strong>) indica que você é o <strong>Root / Superusuário</strong> (administrador com poder total).</li>
</ul>
`
},
{
titulo: "9. Comandos Básicos do Terminal Linux",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Memorize os comandos essenciais abaixo. Eles são a "tabuada" do Linux e presença garantida nas questões operacionais.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 PRINCIPAIS COMANDOS</h3>
<ul>
  <li><strong>pwd (Print Working Directory):</strong> Mostra o caminho exato do diretório onde você está no momento.</li>
  <li><strong>ls (List):</strong> Lista os arquivos e pastas visíveis. (Dica: <code>ls -a</code> mostra os ocultos).</li>
  <li><strong>cd (Change Directory):</strong> Entra ou sai de pastas. (Dica: <code>cd ..</code> volta um nível).</li>
  <li><strong>mkdir (Make Directory):</strong> Cria um novo diretório (pasta).</li>
  <li><strong>cp (Copy):</strong> Copia arquivos para outro destino.</li>
  <li><strong>mv (Move):</strong> Move arquivos para outro destino OU serve para renomeá-los.</li>
  <li><strong>rm (Remove):</strong> Exclui o arquivo definitivamente (não vai para a lixeira!).</li>
  <li><strong>clear:</strong> Limpa o texto da tela do terminal.</li>
  <li><strong>touch:</strong> Cria um arquivo de texto vazio rapidamente.</li>
</ul>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE (USO PRÁTICO)</h4>
  <p><code>$ mkdir provas</code> -> Cria a pasta "provas".<br>
  <code>$ touch gabarito.txt</code> -> Cria o arquivo vazio.<br>
  <code>$ mv gabarito.txt provas/</code> -> Move o arquivo recém-criado para dentro da pasta.</p>
</div>
`
},
{
titulo: "10. Comandos Linux Intermediários",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Além da navegação básica, administradores usam comandos intermediários para realizar buscas em lote e obter diagnósticos da máquina.</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE: BUSCADORES (GREP vs FIND)</h4>
  <p><strong>grep:</strong> Procura textos/palavras <strong>DENTRO</strong> do conteúdo do arquivo. (Ex: <code>grep "senha" arquivo.txt</code> achará a palavra lá dentro).<br>
  <strong>find:</strong> Procura pelo <strong>NOME DO ARQUIVO</strong> na estrutura de pastas. (Ex: <code>find / -name "arquivo.txt"</code> vai buscar o arquivo no HD).</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 ESPAÇO EM DISCO (df vs du)</h3>
<ul>
  <li><strong>df (Disk Free):</strong> Mostra o espaço LIVRE e o total das partições do HD.</li>
  <li><strong>du (Disk Usage):</strong> Mostra o espaço OCUPADO/UTILIZADO por uma pasta específica.</li>
  <li><em>Nota: O sufixo <code>-h</code> (human readable) converte os blocos difíceis de ler para MB e GB.</em></li>
</ul>

<h3 style="color: #E67E22; margin-top: 20px;">📌 OUTROS UTILITÁRIOS IMPORTANTES</h3>
<ul>
  <li><strong>sudo:</strong> Permite que um usuário comum execute um único comando com poderes administrativos (SuperUser DO).</li>
  <li><strong>whoami:</strong> Exibe na tela qual é o nome do usuário que está logado no terminal.</li>
  <li><strong>history:</strong> Lista de forma numerada todo o histórico dos últimos comandos digitados.</li>
</ul>
`
},
{
titulo: "11. Conceitos Fundamentais de Backup",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Backup é a criação de cópias de segurança de dados em uso. O objetivo supremo do backup não é evitar o desastre, mas sim garantir a RESTAURAÇÃO rápida da informação caso um hardware queime ou um ransomware ataque.</p>

<div style="background-color: #F8D7DA; padding: 15px; border-left: 5px solid #DC3545; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #721C24; margin-top: 0;">🚨 PEGADINHAS DE CONCURSO: BACKUP VS ARQUIVAMENTO</h4>
  <p><span style="color: #DC3545; font-weight: bold;">❌</span> O backup serve para guardar arquivos antigos que não são mais usados e liberar espaço no PC. / <span style="color: #28A745; font-weight: bold;">✔</span> Falso. Isso é <strong>Arquivamento</strong>. O Backup é uma cópia-espelho de arquivos ATIVOS da empresa, para socorro imediato.</p>
</div>

<h3 style="color: #E67E22; margin-top: 20px;">📌 LOCALIZAÇÃO ESTRATÉGICA</h3>
<ul>
  <li><strong>Local:</strong> Feito em HDs externos ao lado da máquina. Rápido para restaurar, mas vulnerável a incêndios ou roubos locais.</li>
  <li><strong>Remoto/Offsite:</strong> Feito em mídias transportadas para outro prédio.</li>
  <li><strong>Nuvem (Cloud):</strong> Envia a cópia via internet para servidores mundiais. Proteção física máxima, porém demanda boa internet para restaurar rápido.</li>
</ul>
`
},
{
titulo: "12. Tipos de Backup",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>Existem diferentes métodos (estratégias de cópia) que equilibram a velocidade de armazenamento contra a velocidade de restauração. Esse é o tópico de Backup mais cobrado!</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 1. BACKUP COMPLETO (FULL)</h3>
<p>Copia absoluta e integralmente TODOS os arquivos selecionados, alterados ou não. <br>
<strong>Ponto forte:</strong> Restauração facilíssima (basta pegar o próprio backup).<br>
<strong>Ponto fraco:</strong> Demora muito e consome armazenamento máximo.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 2. BACKUP DIFERENCIAL</h3>
<p>Copia <em>apenas</em> os dados que sofreram modificação ou criação <strong>desde o último backup COMPLETO</strong>. Ele vai "inchando" dia após dia até o próximo completo.<br>
<strong>Restauração:</strong> Precisa da junção do Completo + o último Diferencial correspondente.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 3. BACKUP INCREMENTAL</h3>
<p>Copia <em>apenas</em> os dados modificados <strong>desde o último backup DE QUALQUER TIPO</strong> (completo ou do dia anterior). É extremamente rápido de fazer e economiza muito espaço de disco.<br>
<strong>Restauração:</strong> Dolorosa. Precisa da fita do Completo + TODOS os incrementais em sequência cronológica ininterrupta até a data do desastre.</p>

<div style="background-color: #D1ECF1; padding: 15px; border-left: 5px solid #17A2B8; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #0C5460; margin-top: 0;">💡 MACETE DA PROVA</h4>
  <p><strong>I</strong>ncremental = Copia as alterações desde o <strong>I</strong>mediatamente anterior.<br>
  <strong>Diferencial</strong> = Ignora os dias anteriores e copia tudo alterado desde o Full.</p>
</div>
`
},
{
titulo: "13. Mídias e Armazenamento para Backup",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 INTRODUÇÃO</h2>
<p>A escolha da mídia onde a cópia será guardada afeta diretamente a durabilidade e o custo do plano de contingência corporativo.</p>

<h3 style="color: #E67E22; margin-top: 20px;">📌 MÍDIAS FÍSICAS PRINCIPAIS</h3>
<ul>
  <li><strong>HD Externo:</strong> Magnético, barato e gigante. Frágil contra impactos.</li>
  <li><strong>SSD Externo:</strong> Baseado em memória Flash. Velocidade altíssima, blindado contra choques, porém de custo alto por TB.</li>
  <li><strong>Fita Magnética (LTO):</strong> Embora pareça velha, é <strong>excelente para grandes data centers</strong>. Custa frações de centavos por GB e dura décadas armazenada no cofre.</li>
  <li><strong>NAS (Network Attached Storage):</strong> Uma central de HDs ligada direto na rede local (cabo Ethernet) para backups automatizados da empresa toda.</li>
</ul>

<div style="background-color: #FFF3CD; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #856404; margin-top: 0;">⚠️ IMPORTANTE: A REGRA 3-2-1</h4>
  <p>Padrão ouro de segurança. Para os dados estarem salvos de verdade, você deve ter: <strong>3</strong> cópias totais da informação, alocadas em <strong>2</strong> tecnologias de mídias físicas diferentes, mantendo no mínimo <strong>1</strong> cópia externa/offsite (na Nuvem).</p>
</div>
`
},
{
titulo: "14. Revisão Geral",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 O QUE VOCÊ NÃO PODE ESQUECER</h2>

<div style="background-color: #E2E3E5; padding: 15px; border-left: 5px solid #383D41; margin: 20px 0; border-radius: 4px;">
  <h4 style="color: #383D41; margin-top: 0;">🏆 RESUMO FINAL: CHECKLIST</h4>
  <ul>
    <li>📂 <strong>Windows:</strong> <code>Win+E</code> abre o Explorer. <code>Shift+Del</code> exclui sem lixeira.</li>
    <li>🐧 <strong>Linux:</strong> A raiz é a barra ( <code>/</code> ). O terminal diferencia maiúsculas de minúsculas (Case Sensitive).</li>
    <li>🔑 <strong>Permissões:</strong> Leitura (4), Escrita (2), Execução (1). Usamos <code>chmod</code> para mudar.</li>
    <li>🕹️ <strong>Comandos Básicos:</strong> <code>mkdir</code> (cria pasta), <code>rm</code> (apaga), <code>mv</code> (move ou renomeia).</li>
    <li>💾 <strong>Backup Diferencial:</strong> Copia acumulando desde o último Full.</li>
    <li>💾 <strong>Backup Incremental:</strong> Copia apenas os arquivos do dia. Usa menos espaço.</li>
  </ul>
</div>
`
},
{
titulo: "15. Questões Comentadas - Parte 1",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 HORA DE PRATICAR: QUESTÕES DE CONCURSOS</h2>
<p>Teste seus conhecimentos com essas questões sobre Arquivos, Windows e Linha de Comando Linux.</p>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 1 (Fundação Carlos Chagas)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Um funcionário selecionou um arquivo de nome <code>Relatorio.pdf</code> na Área de Trabalho do Windows e pressionou o conjunto de teclas <strong>Ctrl + X</strong>. Em seguida, ele abriu a pasta Documentos e pressionou <strong>Ctrl + V</strong>. O que aconteceu com o arquivo?</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Foi criada uma cópia em Documentos e o original permaneceu na Área de Trabalho.</li>
  <li>B) O arquivo foi renomeado.</li>
  <li><strong>C) O arquivo foi transferido (movido) para Documentos, desaparecendo da Área de Trabalho.</strong></li>
  <li>D) O arquivo foi enviado para a Lixeira.</li>
  <li>E) O arquivo foi duplicado como atalho.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> O atalho <code>Ctrl + X</code> corresponde à função "Recortar". Ao colar (<code>Ctrl + V</code>) em outro local, o arquivo é fisicamente <strong>MOVIDO</strong>, sumindo do local anterior. Diferente do <code>Ctrl + C</code> (Copiar), que geraria duas versões idênticas do arquivo.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 2 (CEBRASPE)</h3>
<p><strong>Julgue o item a seguir:</strong><br>
No ambiente de gerenciamento de arquivos do Windows 10, caso um usuário selecione um arquivo em um pendrive (unidade removível tipo Flash) e pressione a tecla DELETE, esse arquivo será movido para a Lixeira do sistema local, podendo ser restaurado posteriormente.</p>
<p><strong>Gabarito:</strong> <span style="color: #DC3545; font-weight: bold; background-color: #F8D7DA; padding: 3px 8px; border-radius: 4px;">❌ ERRADO</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Pegadinha clássica do Cespe! Arquivos apagados de unidades removíveis externas (como pendrives USB) ou unidades mapeadas de rede <strong>NÃO VÃO para a Lixeira</strong>. Eles são excluídos permanentemente de forma imediata (apresentando comportamento similar ao de pressionar <code>Shift + Delete</code> no disco rígido).
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 3 (VUNESP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Observe as extensões de arquivos listadas a seguir: I. <code>.xlsx</code> | II. <code>.pdf</code> | III. <code>.zip</code>. Elas representam, correta e respectivamente, formatos de arquivos de:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Planilha eletrônica, Arquivo compactado e Texto editável.</li>
  <li><strong>B) Planilha eletrônica, Documento de formato portátil e Arquivo compactado.</strong></li>
  <li>C) Texto editável, Imagem e Áudio.</li>
  <li>D) Vídeo, Documento de formato portátil e Arquivo executável.</li>
  <li>E) Banco de dados, Planilha eletrônica e Imagem.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra B</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> <code>.xlsx</code> é a extensão padrão de planilhas eletrônicas modernas (Excel). <code>.pdf</code> é a extensão universal da Adobe para leitura de Documentos em Formato Portátil. <code>.zip</code> é o formato padrão nativo consolidado de compressão/compactação de pastas.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 4 (FGV)</h3>
<p><strong>Múltipla Escolha:</strong><br>
No terminal (linha de comando) do sistema operacional Linux, o comando utilizado para criar um novo diretório vazio e o comando utilizado para listar os arquivos presentes dentro do diretório atual são, respectivamente:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li><strong>A) mkdir e ls</strong></li>
  <li>B) rmdir e cat</li>
  <li>C) touch e pwd</li>
  <li>D) make e grep</li>
  <li>E) new e list</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra A</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> <code>mkdir</code> (Make Directory) é o comando mundialmente usado para criar pastas no Unix/Linux. O comando <code>ls</code> (List) faz a listagem gráfica dos itens da pasta. Revendo os outros: <code>touch</code> criaria um arquivo (não pasta), <code>pwd</code> mostra o local atual (sem listar), e <code>grep</code> procura texto dentro de arquivos.
</div>
`
},
{
titulo: "16. Questões Comentadas - Parte 2",
conteudo: `
<h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 5px;">🎯 MAIS QUESTÕES DE CONCURSOS PARA FIXAÇÃO</h2>
<p>Finalizando nossa bateria com questões avançadas de Permissões de Usuário e Políticas de Backup.</p>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 5 (VUNESP)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Em um servidor baseado em Linux, o administrador configurou as permissões de um script essencial através da linha de comando numérica <code>chmod 755 script.sh</code>. Ao analisar tal configuração, conclui-se corretamente que:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Apenas o usuário root obteve permissão de executar o arquivo, enquanto os demais não conseguem ler.</li>
  <li>B) O arquivo sofreu uma criptografia de nível 7 e agora está protegido com senha.</li>
  <li><strong>C) O proprietário do arquivo tem permissão total (leitura, gravação e execução), enquanto o grupo e os demais usuários podem apenas ler e executar.</strong></li>
  <li>D) Todos os membros do grupo ganharam acesso total ao arquivo, perdendo as restrições normais.</li>
  <li>E) O comando transferiu a propriedade da pasta para o usuário "755".</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Lembre-se da matemática do chmod: <code>R(4) + W(2) + X(1)</code>. No comando <code>755</code>:<br>
  - O primeiro dígito (<strong>7</strong>) é para o Dono: 4+2+1 = Acesso Total.<br>
  - O segundo dígito (<strong>5</strong>) é para o Grupo: 4+0+1 = Ler e Executar (mas é proibido de editar/escrever).<br>
  - O terceiro dígito (<strong>5</strong>) é para Outros: Igual ao grupo, apenas Lê e Executa.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 6 (IADES)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Considere uma política de backup em que, no domingo à noite, realiza-se um backup completo (full) dos servidores de uma corporação. Na segunda, na terça e na quarta-feira são copiados para a fita apenas os arquivos que sofreram modificação ou criação exclusivamente <em>desde o backup completo realizado no domingo</em>. Esse método diário de terça e quarta-feira, em relação ao modelo executado no servidor, é classificado como backup:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) Incremental.</li>
  <li>B) Espelhado.</li>
  <li><strong>C) Diferencial.</strong></li>
  <li>D) Nuvem Pública.</li>
  <li>E) Snapshot Diário.</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> O texto sublinhou: "copiados os arquivos modificados DESDE O BACKUP COMPLETO realizado no domingo". O backup que usa como âncora/referência sempre o último FULL/COMPLETO, acumulando volume e ignorando as cópias parciais dos dias anteriores, é o <strong>Diferencial</strong>. (Se ele copiasse mirando apenas o dia anterior, seria o Incremental).
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 7 (CEBRASPE)</h3>
<p><strong>Julgue o item a seguir:</strong><br>
O processo de backup incremental caracteriza-se por copiar somente os arquivos que foram modificados desde o último backup efetuado (seja ele um backup completo ou um outro incremental anterior), apresentando como grande vantagem um menor consumo de espaço e um menor tempo gasto na operação de cópia diária em comparação ao método diferencial.</p>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ CERTO</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> Definição perfeita da banca. O backup <strong>Incremental</strong> só carrega "a mochila daquele dia". Ele olha para trás, checa a fita de ontem (não importando o tipo que ela era) e grava apenas a diferença mínima ocorrida nas últimas 24 horas. É de longe o que consome menos tempo e espaço, porém é o mais doloroso no dia de restaurar.
</div>

<hr style="margin: 30px 0;">

<h3 style="color: #8E44AD;">📌 Questão 8 (FCC)</h3>
<p><strong>Múltipla Escolha:</strong><br>
Ao trabalhar no ambiente de linha de comando do Linux e precisar consultar a exata utilização de espaço em disco (volume total disponível, em uso e livre) de todas as partições do sistema montadas, o analista deve recorrer diretamente ao utilitário de texto:</p>
<ul style="list-style-type: none; padding-left: 0;">
  <li>A) du</li>
  <li>B) ls</li>
  <li><strong>C) df</strong></li>
  <li>D) fdisk</li>
  <li>E) top</li>
</ul>
<p><strong>Gabarito:</strong> <span style="color: #28A745; font-weight: bold; background-color: #D4EDDA; padding: 3px 8px; border-radius: 4px;">✔ Letra C</span></p>
<div style="background-color: #E8F8F5; padding: 15px; border-left: 4px solid #1ABC9C; margin-top: 10px;">
  <strong>💬 Comentário do Professor:</strong> A diferença matadora para concursos: <code>df</code> (Disk Free) lista o uso e a disponibilidade bruta do disco como um todo (as partições). Já o comando <code>du</code> (Disk Usage) lista quanto cada diretório/pasta específica está pesando/ocupando de disco. O comando correto pedido pela banca é o <code>df</code>.
</div>
`
}
];
