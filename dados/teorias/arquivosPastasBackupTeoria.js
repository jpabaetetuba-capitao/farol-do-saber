const arquivosPastasBackupTeoria = [
{
titulo: "1. Conceitos Fundamentais de Arquivos e Pastas",
conteudo: `
<style>
  /* Estilos Globais para o Módulo */
  .conteudo-teoria { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #334155; }
  .conceito-box { background: #eff6ff; border-left: 5px solid #3b82f6; padding: 15px; border-radius: 4px; margin: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
  .alerta-box { border-left: 5px solid #f59e0b; background: #fffbeb; padding: 15px; margin: 15px 0; border-radius: 4px; }
  .dica-box { border-left: 5px solid #10b981; background: #ecfdf5; padding: 15px; margin: 15px 0; border-radius: 4px; }
  .terminal { background: #1e1e1e; color: #4af626; padding: 15px; border-radius: 6px; font-family: 'Courier New', Courier, monospace; margin: 10px 0; overflow-x: auto; border: 1px solid #000; }
  .terminal strong { color: #fff; }
  .tag { display: inline-block; background: #e0f2fe; color: #0284c7; padding: 3px 8px; border-radius: 12px; font-size: 0.9em; font-weight: bold; margin: 2px; }
  .tree { border-left: 2px dashed #cbd5e1; padding-left: 20px; list-style: none; margin-left: 10px; }
  .tree li { position: relative; padding-left: 15px; margin-bottom: 5px; }
  .tree li::before { content: ''; position: absolute; top: 12px; left: 0; width: 10px; height: 2px; background: #cbd5e1; }
  .grafico-container { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; margin: 15px 0; }
  .barra-wrap { display: flex; align-items: center; margin-bottom: 10px; }
  .barra-label { width: 120px; font-weight: bold; font-size: 0.9em; }
  .barra { height: 24px; border-radius: 12px; display: flex; align-items: center; padding-left: 10px; color: white; font-weight: bold; font-size: 0.85em; transition: width 1s ease-in-out; }
  
  /* Animação da Seta */
  @keyframes bounceRight {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(5px); }
  }
  .seta { display: inline-block; animation: bounceRight 1s infinite; color: #f59e0b; font-weight: 900; margin-right: 5px; }
</style>

<div class="conteudo-teoria">
<p>
Os arquivos e as pastas constituem a base da organização das informações em sistemas computacionais. Todo documento, imagem, vídeo, programa ou dado armazenado em um computador é representado por meio de arquivos organizados em pastas.
</p>

<p>
A correta compreensão desses conceitos é essencial para a utilização eficiente de sistemas operacionais como Windows e Linux, sendo um tema frequentemente cobrado em concursos públicos.
</p>

<div class="conceito-box">
<span class="seta">➔</span> <strong>O Que é um Arquivo?</strong><br>
Arquivo é uma unidade de armazenamento de informações em um dispositivo digital. Ele pode conter diferentes tipos de dados, como textos, imagens, áudios, vídeos, programas e planilhas. Cada arquivo possui um nome e geralmente uma extensão que identifica seu formato.
</div>

<h3>Exemplos de Arquivos</h3>
<ul>
<li><span class="tag">.docx</span> Trabalho.docx</li>
<li><span class="tag">.xlsx</span> Planilha.xlsx</li>
<li><span class="tag">.jpg</span> Foto.jpg</li>
<li><span class="tag">.mp3</span> Musica.mp3</li>
<li><span class="tag">.mp4</span> Video.mp4</li>
<li><span class="tag">.pdf</span> Relatorio.pdf</li>
</ul>
</div>
`
},

{
titulo: "2. Organização de Arquivos e Pastas",
conteudo: `
<div class="conteudo-teoria">
<p>
A organização de arquivos e pastas é uma prática fundamental para facilitar o armazenamento, localização e gerenciamento das informações. Tanto o Windows quanto o Linux utilizam <strong>estruturas hierárquicas</strong> (em árvore).
</p>

<div class="conceito-box">
<span class="seta">➔</span> <strong>Diretório Raiz</strong><br>
O diretório raiz é o ponto inicial da estrutura de diretórios de um sistema operacional.
</div>

<h3>Representação Gráfica: Estrutura em Árvore</h3>

<div style="display: flex; gap: 20px; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px;" class="grafico-container">
    <h4 style="margin-top: 0; color: #0284c7;">Estrutura no Windows</h4>
    <ul class="tree" style="margin:0; padding-left:0; border:none;">
      <li><span class="tag" style="background:#bfdbfe;">C:\\ (Raiz)</span>
        <ul class="tree">
          <li>📂 Usuarios
            <ul class="tree">
              <li>📂 Joao
                <ul class="tree">
                  <li>📂 Documentos</li>
                  <li>📂 Downloads</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div style="flex: 1; min-width: 250px;" class="grafico-container">
    <h4 style="margin-top: 0; color: #10b981;">Estrutura no Linux</h4>
    <ul class="tree" style="margin:0; padding-left:0; border:none;">
      <li><span class="tag" style="background:#a7f3d0;">/ (Raiz)</span>
        <ul class="tree">
          <li>📂 home
            <ul class="tree">
              <li>📂 joao
                <ul class="tree">
                  <li>📂 documentos</li>
                  <li>📂 downloads</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h3>Caminhos (Paths)</h3>
<div class="alerta-box">
<strong>Caminho Absoluto vs Relativo</strong><br>
<span class="seta">➔</span> <strong>Absoluto:</strong> Indica a localização completa desde o diretório raiz (Ex: <code>C:\\Usuarios\\Joao\\Documentos\\Relatorio.docx</code> ou <code>/home/joao/relatorio.docx</code>).<br>
<span class="seta">➔</span> <strong>Relativo:</strong> Indica a localização tomando como referência a pasta <em>atual</em> onde você já está, não começando pela raiz.
</div>

<h3>Boas Práticas e Nomenclatura</h3>
<ul>
<li>Utilize nomes descritivos (Ex: <code>Relatorio_Vendas_2026.pdf</code>).</li>
<li>Evite arquivos espalhados pela área de trabalho.</li>
</ul>

<h3>Pegadinhas de Concurso</h3>
<ul>
<li>Diretório e pasta são considerados <strong>sinônimos</strong>.</li>
<li>O diretório raiz está no topo absoluto da estrutura.</li>
<li>Caminho relativo depende da sua localização atual!</li>
</ul>
</div>
`
},

{
titulo: "3. Operações com Arquivos e Pastas",
conteudo: `
<div class="conteudo-teoria">
<p>
O domínio das operações básicas é essencial e as bancas amam testar a diferença sutil entre elas (especialmente Copiar vs Mover).
</p>

<div class="dica-box">
<span class="seta">➔</span> <strong>Diferença de Ouro para Provas:</strong><br>
<strong>COPIAR (Ctrl+C):</strong> O arquivo original PERMANECE no local de origem. Surgem DUAS versões.<br>
<strong>MOVER / RECORTAR (Ctrl+X):</strong> O arquivo DEIXA de existir no local original. Continua existindo APENAS UMA versão, em novo endereço.
</div>

<h3>Exclusão e Lixeira do Windows</h3>
<p>Excluir arquivos (tecla <code>Delete</code>) normalmente os envia para a Lixeira, uma área temporária de onde podem ser restaurados. A exclusão definitiva só ocorre se a lixeira for esvaziada.</p>

<div class="alerta-box">
<span class="seta">➔</span> <strong>Excluir Permanentemente:</strong><br>
Pressionar <strong>Shift + Delete</strong> exclui o arquivo diretamente, ignorando a Lixeira. A recuperação se torna muito difícil!
</div>

<h3>Renomear e Operações em Lote</h3>
<p>
Renomear altera apenas a "etiqueta" (o nome), o conteúdo do arquivo permanece intacto (Atalho: <strong>F2</strong>). Operações em lote ocorrem quando você seleciona vários arquivos de uma vez (segurando <code>Ctrl</code> para arquivos alternados ou <code>Shift</code> para sequência contínua) e aplica a operação em todos ao mesmo tempo.
</p>

<h3>Resumo para Concurso</h3>
<ul>
<li>Criar gera novos arquivos ou pastas.</li>
<li>Copiar mantém o original.</li>
<li>Mover transfere e remove da origem.</li>
<li>Renomear (F2) altera apenas o nome.</li>
<li>Excluir envia para a Lixeira. Restaurar devolve ao local original.</li>
<li>Shift + Delete exclui permanentemente.</li>
</ul>
</div>
`
},
{
titulo: "4. Extensões de Arquivos",
conteudo: `
<div class="conteudo-teoria">
<p>
As extensões são os "sobrenomes" dos arquivos. Elas dizem ao Sistema Operacional qual programa deve ser usado para abrir aquele conteúdo.
</p>

<div class="grafico-container">
  <h3 style="margin-top: 0;">Extensões Mais Cobradas Separadas por Categoria</h3>
  
  <strong>📄 Textos e Documentos</strong><br>
  <span class="tag">.txt</span> Texto Simples 
  <span class="tag">.docx</span> Word Atual 
  <span class="tag">.odt</span> LibreOffice Writer 
  <span class="tag">.pdf</span> Portable Document Format<br><br>

  <strong>📊 Planilhas e 📽️ Apresentações</strong><br>
  <span class="tag">.xlsx</span> Excel Atual 
  <span class="tag">.ods</span> LibreOffice Calc 
  <span class="tag">.pptx</span> PowerPoint 
  <span class="tag">.odp</span> LibreOffice Impress<br><br>

  <strong>🖼️ Imagens</strong><br>
  <span class="tag">.jpg / .jpeg</span> Fotos comprimidas 
  <span class="tag">.png</span> Suporta transparência 
  <span class="tag">.gif</span> Animações curtas<br><br>

  <strong>🎵 Áudio e 🎬 Vídeo</strong><br>
  <span class="tag">.mp3</span> Áudio comprimido 
  <span class="tag">.wav</span> Áudio sem compressão (pesado) 
  <span class="tag">.mp4</span> Vídeo padrão web<br><br>

  <strong>🗜️ Compactados e ⚙️ Executáveis</strong><br>
  <span class="tag">.zip</span> / <span class="tag">.rar</span> Pacotes comprimidos 
  <span class="tag">.exe</span> Instalador/Executável Windows
</div>

<div class="alerta-box">
<span class="seta">➔</span> <strong>Ocultação de Extensões:</strong> O Windows, por padrão, costuma ocultar as extensões dos tipos de arquivo conhecidos. Mas cuidado na prova: mesmo oculta, a extensão continua existindo no código do sistema!
</div>

</div>
`
},
{
titulo: "5. Gerenciamento de Arquivos no Windows",
conteudo: `
<div class="conteudo-teoria">
<p>
A principal ferramenta para visualizar, organizar e manipular arquivos no Windows é o <strong>Explorador de Arquivos</strong> (File Explorer).
</p>

<div class="conceito-box">
<span class="seta">➔</span> <strong>Atalho de Ouro:</strong> Pressione <kbd>Windows + E</kbd> para abrir o Explorador de Arquivos instantaneamente!
</div>

<h3>Estrutura do Explorador</h3>
<ul>
<li><strong>Painel de Navegação:</strong> Lado esquerdo, exibe a hierarquia, pendrives conectados e locais de rede.</li>
<li><strong>Barra de Endereços:</strong> Mostra o caminho da pasta atual (Ex: <code>C:\\Usuarios\\Documentos</code>).</li>
<li><strong>Caixa de Pesquisa:</strong> Canto superior direito, busca itens dentro da pasta atual.</li>
</ul>

<h3>Atalhos Clássicos do Windows</h3>
<div class="grafico-container" style="background: #f1f5f9;">
  <code>Ctrl + C</code> ➔ Copiar<br>
  <code>Ctrl + X</code> ➔ Recortar (Mover)<br>
  <code>Ctrl + V</code> ➔ Colar<br>
  <code>Ctrl + Z</code> ➔ Desfazer a última ação<br>
  <code>Ctrl + A</code> ➔ Selecionar Tudo (All)<br>
  <code>F2</code> ➔ Renomear<br>
  <code>Shift + Delete</code> ➔ Excluir permanentemente
</div>

<h3>Atributos de Arquivos</h3>
<p>Nas propriedades do arquivo (botão direito -> Propriedades), você encontra os atributos:</p>
<ul>
<li><strong>Somente Leitura (Read-only):</strong> Impede que o arquivo seja modificado acidentalmente.</li>
<li><strong>Oculto (Hidden):</strong> O arquivo não aparece nas listagens normais do sistema.</li>
</ul>
</div>
`
},
{
titulo: "6. Gerenciamento de Arquivos no Linux",
conteudo: `
<div class="conteudo-teoria">
<p>
O Linux é <strong>diferente</strong> do Windows. Ele não utiliza letras de unidade (como C: ou D:). Toda a árvore nasce de um único ponto: o diretório raiz.
</p>

<div class="dica-box">
<span class="seta">➔</span> <strong>Case Sensitive:</strong> O Linux difere maiúsculas de minúsculas! Um arquivo chamado <code>Teste.txt</code> é completamente diferente de <code>teste.txt</code>. Eles podem existir na mesma pasta.
</div>

<h3>Estrutura Famosa do Linux (Árvore de Diretórios)</h3>
<div class="grafico-container" style="font-family: monospace;">
  <strong>/</strong> (Diretório Raiz)<br>
  ├── <strong>/home</strong> ➔ Pastas pessoais dos usuários comuns.<br>
  ├── <strong>/root</strong> ➔ Pasta pessoal exclusiva do superusuário (Administrador).<br>
  ├── <strong>/etc</strong> ➔ Arquivos de configuração do sistema (Não tem executáveis aqui!).<br>
  ├── <strong>/bin</strong> ➔ Binários (comandos básicos e essenciais).<br>
  ├── <strong>/var</strong> ➔ Arquivos variáveis (Ex: Logs do sistema, filas de impressão).<br>
  ├── <strong>/tmp</strong> ➔ Arquivos temporários (apagados a cada reinício).<br>
  └── <strong>/dev</strong> ➔ Dispositivos físicos (mouse, teclado, HDs são lidos como arquivos aqui).
</div>

<h3>Pegadinhas de Concurso</h3>
<ul>
<li>Não confunda <strong>/</strong> (raiz do sistema) com <strong>/root</strong> (casa do administrador).</li>
<li><strong>/etc</strong> não guarda programas, apenas as configurações deles!</li>
</ul>
</div>
`
},
{
titulo: "7. Permissões de Arquivos no Linux",
conteudo: `
<div class="conteudo-teoria">
<p>
O Linux é extremamente focado em segurança. Cada arquivo e pasta possui regras rígidas de quem pode ver, alterar ou rodar.
</p>

<h3>A Tríade de Permissões (rwx)</h3>
<p>As permissões geram valores numéricos. As bancas amam essa matemática:</p>
<div class="grafico-container" style="text-align: center;">
  <span class="tag" style="background:#fca5a5; color:#991b1b; font-size:1.1em;"><strong>r</strong> = Read (Leitura) = <strong>4</strong></span>
  <span class="tag" style="background:#fcd34d; color:#92400e; font-size:1.1em;"><strong>w</strong> = Write (Escrita) = <strong>2</strong></span>
  <span class="tag" style="background:#86efac; color:#166534; font-size:1.1em;"><strong>x</strong> = eXecute (Execução) = <strong>1</strong></span>
</div>

<h3>Categorias (U G O)</h3>
<p>Essas permissões são aplicadas em 3 níveis:</p>
<ol>
<li><strong>Dono (User/Owner):</strong> Quem criou.</li>
<li><strong>Grupo (Group):</strong> Grupo associado.</li>
<li><strong>Outros (Others):</strong> O resto do mundo.</li>
</ol>

<div class="conceito-box">
<span class="seta">➔</span> <strong>Exemplo de Prova: <code>chmod 755 arquivo.txt</code></strong><br>
O que significa o 755?<br>
- <strong>7</strong> para o Dono (4+2+1) = rwx (Pode tudo)<br>
- <strong>5</strong> para o Grupo (4+0+1) = r-x (Lê e Executa, mas não escreve)<br>
- <strong>5</strong> para Outros (4+0+1) = r-x (Lê e Executa, mas não escreve)
</div>

<h3>Comandos de Propriedade</h3>
<ul>
<li><code>chmod</code> = Muda a permissão (Change Mode).</li>
<li><code>chown</code> = Muda o dono do arquivo (Change Owner).</li>
<li><code>ls -l</code> = Comando para visualizar a lista de permissões da pasta.</li>
</ul>
</div>
`
},
{
titulo: "8. Terminal Linux e Conceitos de Shell",
conteudo: `
<div class="conteudo-teoria">
<p>
A "tela preta" onde digitamos comandos é a interface mais poderosa do Linux. Entender suas camadas é vital.
</p>

<div class="alerta-box">
<span class="seta">➔</span> <strong>Shell vs Kernel:</strong><br>
- <strong>Kernel:</strong> É o núcleo do sistema operacional. Ele fala diretamente com o hardware físico (processador, memória).<br>
- <strong>Shell:</strong> É o "tradutor" (interpretador de comandos). Ele lê o texto que você digita e envia a ordem para o Kernel. O Shell mais famoso e padrão é o <strong>Bash</strong>.
</div>

<h3>O Prompt de Comando</h3>
<p>O símbolo final da linha de comando indica o seu nível de poder no sistema:</p>
<div class="terminal">
joao@linux:~$ <span style="color:#888;"># O cifrão ($) indica Usuário Comum</span><br>
root@linux:~# <span style="color:#888;"># A cerquilha (#) indica Superusuário (Root / Administrador)</span>
</div>

<h3>Por que usar o Terminal?</h3>
<p>Apesar da interface gráfica ser amigável, o terminal é superior para automação de tarefas, consumo mínimo de memória RAM, e administração remota de servidores web.</p>
</div>
`
},
{
titulo: "9. Comandos Básicos do Terminal Linux",
conteudo: `
<div class="conteudo-teoria">
<p>
Memorize os comandos essenciais abaixo, pois são presença garantida em provas que abordam Linux básico.
</p>

<div class="grafico-container">
  <table style="width:100%; border-collapse: collapse; text-align: left;">
    <tr style="border-bottom: 2px solid #cbd5e1;">
      <th style="padding: 8px;">Comando</th>
      <th style="padding: 8px;">Função Traduzida</th>
      <th style="padding: 8px;">Ação Prática</th>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 8px;"><strong>pwd</strong></td>
      <td style="padding: 8px;">Print Working Directory</td>
      <td style="padding: 8px;">Mostra o caminho exato da pasta atual.</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 8px;"><strong>ls</strong></td>
      <td style="padding: 8px;">List</td>
      <td style="padding: 8px;">Lista os arquivos e pastas visíveis. (<code>ls -a</code> mostra os ocultos).</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 8px;"><strong>cd</strong></td>
      <td style="padding: 8px;">Change Directory</td>
      <td style="padding: 8px;">Entra ou sai de pastas. (<code>cd ..</code> volta um nível).</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 8px;"><strong>mkdir</strong></td>
      <td style="padding: 8px;">Make Directory</td>
      <td style="padding: 8px;">Cria uma nova pasta.</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 8px;"><strong>cp</strong></td>
      <td style="padding: 8px;">Copy</td>
      <td style="padding: 8px;">Copia arquivos.</td>
    </tr>
    <tr style="border-bottom: 1px solid #e2e8f0;">
      <td style="padding: 8px;"><strong>mv</strong></td>
      <td style="padding: 8px;">Move</td>
      <td style="padding: 8px;">Move arquivos OU serve para Renomeá-los.</td>
    </tr>
    <tr>
      <td style="padding: 8px;"><strong>rm</strong></td>
      <td style="padding: 8px;">Remove</td>
      <td style="padding: 8px;">Exclui o arquivo definitivamente (sem lixeira).</td>
    </tr>
  </table>
</div>

<div class="terminal">
<span style="color:#888;">Exemplo prático de uso no terminal:</span><br>
$ mkdir provas_2026<br>
$ touch gabarito.txt <span style="color:#888;"># Cria um arquivo vazio</span><br>
$ mv gabarito.txt provas_2026/ <span style="color:#888;"># Move o arquivo para dentro da pasta</span>
</div>
</div>
`
},
{
titulo: "10. Comandos Linux Intermediários",
conteudo: `
<div class="conteudo-teoria">
<p>Estes comandos realizam buscas e fornecem diagnósticos do sistema.</p>

<div class="conceito-box">
<span class="seta">➔</span> <strong>Buscadores: grep vs find</strong><br>
- <code>grep</code> procura <strong>textos/palavras</strong> DENTRO do arquivo. (Ex: <code>grep "senha" arquivo.txt</code>).<br>
- <code>find</code> procura o <strong>nome do arquivo</strong> na estrutura de pastas do PC. (Ex: <code>find / -name "arquivo.txt"</code>).
</div>

<h3>Espaço em Disco: df vs du</h3>
<ul>
<li><strong>df (Disk Free):</strong> Mostra a quantidade de espaço LIVRE e total nas partições do HD.</li>
<li><strong>du (Disk Usage):</strong> Mostra o espaço OCUPADO/UTILIZADO por diretórios específicos.</li>
</ul>
<p><em>Dica: Use <code>-h</code> (human readable) com ambos para exibir em MB e GB, facilitando a leitura.</em></p>

<h3>Outros Utilitários Cobrados</h3>
<ul>
<li><code>sudo</code>: Executa UM comando como superusuário root (SuperUser DO).</li>
<li><code>whoami</code>: Exibe o nome do usuário logado naquele terminal.</li>
<li><code>history</code>: Lista o histórico numerado de todos os comandos que você já digitou.</li>
<li><code>uname -a</code>: Exibe dados completos do sistema operacional e Kernel.</li>
</ul>
</div>
`
},
{
titulo: "11. Conceitos Fundamentais de Backup",
conteudo: `
<div class="conteudo-teoria">
<p>
Backup é a criação de <strong>cópias de segurança</strong>. Ele tem apenas um grande objetivo: garantir a RESTAURAÇÃO dos dados caso ocorra um desastre (hardware queimado, ransomware, exclusão acidental, enchente).
</p>

<div class="alerta-box">
<span class="seta">➔</span> <strong>Pegadinha Clássica: Backup vs Arquivamento</strong><br>
<strong>Backup:</strong> Cópia de dados que estão em <em>uso ativo</em>, feita de forma rotineira, visando rápida recuperação se der problema.<br>
<strong>Arquivamento:</strong> Retirada de dados que <em>não são mais usados</em> no dia a dia, guardando-os para consulta futura ou fins legais, liberando espaço na máquina principal.
</div>

<h3>Localização Estratégica</h3>
<ul>
<li><strong>Local:</strong> Feito em pendrives ou HDs externos ao lado do computador. Recuperação rápida, mas vulnerável a assaltos e incêndios locais.</li>
<li><strong>Remoto/Offsite:</strong> Mídia guardada em outro prédio ou em um cofre distante.</li>
<li><strong>Nuvem (Cloud Backup):</strong> Envia a cópia via internet para datacenters globais. Proteção física máxima, mas dependente da conexão de internet para restaurar rápido.</li>
</ul>

<p>
A segurança da informação baseia-se na disponibilidade. Seus dados só são úteis se estiverem disponíveis. O backup garante essa disponibilidade!
</p>
</div>
`
},
{
titulo: "12. Tipos de Backup",
conteudo: `
<div class="conteudo-teoria">
<p>
Este é, de longe, o tópico de backup mais explorado em provas. Entenda a matemática do armazenamento!
</p>

<div class="grafico-container">
  <strong>1. Backup COMPLETO (Full)</strong>
  <p style="margin:5px 0;">Copia 100% dos dados, tenham sido alterados ou não. Consome muito espaço e tempo. Restauração facilíssima (basta o próprio arquivo).</p>
  <div class="barra-wrap">
    <div class="barra-label">Volume:</div>
    <div class="barra" style="width: 100%; background: #ef4444;">Máximo Espaço Consumido</div>
  </div>

  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;">

  <strong>2. Backup DIFERENCIAL</strong>
  <p style="margin:5px 0;">Copia APENAS o que foi alterado desde o último backup <strong>COMPLETO</strong>. Ele vai acumulando tamanho com o passar dos dias. Restauração: Precisa do último Completo + do último Diferencial.</p>
  <div class="barra-wrap">
    <div class="barra-label">Volume:</div>
    <div class="barra" style="width: 60%; background: #f59e0b;">Crescimento Médio Diário</div>
  </div>

  <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;">

  <strong>3. Backup INCREMENTAL</strong>
  <p style="margin:5px 0;">Copia APENAS o que foi alterado desde o <strong>ÚLTIMO BACKUP DE QUALQUER TIPO</strong> (completo ou do dia anterior). Muito rápido e econômico. Restauração dolorosa: Precisa do Completo + TODOS os incrementais em sequência até o dia fatal.</p>
  <div class="barra-wrap">
    <div class="barra-label">Volume:</div>
    <div class="barra" style="width: 25%; background: #10b981;">Mínimo Espaço (Rápido)</div>
  </div>
</div>

<div class="dica-box">
<span class="seta">➔</span> <strong>Macete Matador:</strong><br>
<strong>I</strong>ncremental = Alterações desde o <strong>I</strong>mediatamente anterior.<br>
Diferencial = Alterações desde o Full (Completo).
</div>

</div>
`
},
{
titulo: "13. Mídias e Armazenamento para Backup",
conteudo: `
<div class="conteudo-teoria">
<p>Onde guardaremos essas cópias? A escolha da mídia dita a velocidade e o custo.</p>

<h3>Mídias Físicas Principais</h3>
<ul>
<li><strong>HD Externo (Disco Rígido):</strong> Partes mecânicas, magnético, altíssima capacidade e bom preço, mas frágil a quedas.</li>
<li><strong>SSD Externo:</strong> Memória flash, sem peças móveis, ultra rápido e resistente a impactos, porém o custo por Terabyte é alto.</li>
<li><strong>Fita Magnética (LTO):</strong> Você achou que tinha morrido? Em bancos e grandes empresas ela VIVE! Oferece custo baixíssimo para petabytes de dados e dura décadas.</li>
<li><strong>NAS (Network Attached Storage):</strong> Uma "caixa de HDs" conectada diretamente à rede Wi-Fi/Cabo da empresa. É como ter sua própria nuvem privada corporativa.</li>
</ul>

<div class="conceito-box">
<span class="seta">➔</span> <strong>A Regra de Ouro: 3-2-1 do Backup</strong><br>
Para garantir que dados nunca sejam perdidos, especialistas recomendam:<br>
<strong>3</strong> cópias no total dos seus dados.<br>
<strong>2</strong> mídias de tecnologias diferentes (Ex: um SSD e um NAS).<br>
<strong>1</strong> cópia fisicamente externa (Nuvem ou cofre em outra cidade).
</div>
</div>
`
},
{
titulo: "14. Revisão Geral e Mapa Mental Integrado",
conteudo: `
<div class="conteudo-teoria">
<p>Chegamos à consolidação. Use a lista abaixo como check-up horas antes da prova!</p>

<div class="grafico-container" style="background:#f8fafc; border: 2px solid #3b82f6;">
  <h3 style="color:#1e3a8a; margin-top:0; text-align:center;">✓ CHECKLIST DE APROVAÇÃO ✓</h3>
  
  <strong>Sistemas & Arquivos:</strong><br>
  [ ] Pasta e Diretório são a mesma coisa para concursos.<br>
  [ ] Atalho <code>Win + E</code> abre o coração do Windows (Explorador).<br>
  [ ] Extensões: <code>.xlsx</code> (Planilha), <code>.docx</code> (Texto), <code>.zip</code> (Compactado).<br>
  [ ] <code>Ctrl+X</code> não clona, ele move (apaga do original). <code>Shift+Del</code> diz adeus para sempre, sem lixeira.<br><br>

  <strong>Linux:</strong><br>
  [ ] Case Sensitive: <code>Prova.txt</code> é diferente de <code>prova.txt</code>.<br>
  [ ] Raiz é <code>/</code>. Administrador mora em <code>/root</code>. O usuário comum em <code>/home</code>.<br>
  [ ] <code>ls</code> lista, <code>pwd</code> mostra o local, <code>mkdir</code> cria pasta, <code>rm</code> detona o arquivo.<br>
  [ ] Permissões: Ler (4) + Escrever (2) + Executar (1) = Total máximo 7. Comando: <code>chmod</code>.<br><br>

  <strong>Backup:</strong><br>
  [ ] Não é arquivo morto! É segurança ativa para disponibilidade.<br>
  [ ] Diferencial usa mais espaço que Incremental.<br>
  [ ] Incremental é chato de restaurar (precisa da corrente inteira).<br>
  [ ] Fita magnética ainda cai em prova e é excelente para alto volume de dados em corporações.
</div>

<p style="text-align:center; font-weight:bold; color:#10b981;">
Você dominou a teoria! A partir da página 15, teste sua proficiência com exercícios aplicados.
</p>
</div>
`
},
{
titulo: "15. Questões Comentadas - Parte 1 (Arquivos, Pastas e Windows)",
conteudo: `
<div class="conteudo-teoria">

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 1 (Fundação Carlos Chagas - Assistente Administrativo)</strong><br>
Um funcionário selecionou um arquivo de nome <code>Relatorio.pdf</code> na Área de Trabalho do Windows e pressionou o conjunto de teclas <strong>Ctrl + X</strong>. Em seguida, ele abriu a pasta Documentos e pressionou <strong>Ctrl + V</strong>. O que aconteceu com o arquivo?<br>
a) Foi criada uma cópia em Documentos e o original permaneceu na Área de Trabalho.<br>
b) O arquivo foi renomeado.<br>
c) O arquivo foi transferido (movido) para Documentos, desaparecendo da Área de Trabalho.<br>
d) O arquivo foi enviado para a Lixeira.
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: C</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> O atalho Ctrl + X corresponde à função "Recortar". Ao colar (Ctrl + V) em outro local, o arquivo é MOVIDO. Diferente do Ctrl + C (Copiar), que geraria duas versões do arquivo.
</div>

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 2 (CEBRASPE/CESPE - Polícia Federal)</strong><br>
No Windows 10, caso um usuário selecione um arquivo em um pendrive (unidade removível) e pressione a tecla DELETE, esse arquivo será movido para a Lixeira do sistema, podendo ser restaurado posteriormente. (Certo / Errado)
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: ERRADO</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> Pegadinha clássica do Cespe! Arquivos apagados de unidades removíveis (como pendrives USB) ou redes mapeadas NÃO VÃO para a Lixeira. Eles são excluídos permanentemente de forma imediata (comportamento similar ao <code>Shift + Delete</code> no disco rígido).
</div>

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 3 (VUNESP - Auxiliar de TI)</strong><br>
Observe as extensões de arquivos listadas a seguir:<br>
I. .xlsx<br>
II. .pdf<br>
III. .zip<br>
Elas representam, correta e respectivamente, formatos de arquivos de:<br>
a) Planilha eletrônica, Arquivo compactado e Texto editável.<br>
b) Planilha eletrônica, Documento de formato portátil e Arquivo compactado.<br>
c) Texto editável, Imagem e Áudio.<br>
d) Vídeo, Documento de formato portátil e Arquivo executável.
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: B</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> <code>.xlsx</code> é a extensão padrão do Microsoft Excel (planilha). <code>.pdf</code> é a extensão universal para leitura de documentos (Portable Document Format). <code>.zip</code> é o formato padrão nativo de compressão/compactação de arquivos e pastas.
</div>

</div>
`
},
{
titulo: "16. Questões Comentadas - Parte 2 (Linux e Backups)",
conteudo: `
<div class="conteudo-teoria">

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 4 (FGV - Analista de Sistemas)</strong><br>
No terminal do sistema operacional Linux, o comando utilizado para criar um novo diretório vazio e o comando utilizado para listar os arquivos presentes dentro de um diretório são, respectivamente:<br>
a) mkdir e ls<br>
b) rmdir e cat<br>
c) touch e pwd<br>
d) make e grep
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: A</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> <code>mkdir</code> (Make Directory) cria pastas. O comando <code>ls</code> (List) faz a listagem gráfica dos itens de uma pasta. <code>rmdir</code> apagaria pasta vazia, <code>cat</code> mostra o texto de um arquivo, <code>touch</code> cria arquivo vazio e <code>pwd</code> mostra onde você está no momento.
</div>

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 5 (VUNESP - Tribunal de Justiça)</strong><br>
No Linux, as permissões de um arquivo foram configuradas utilizando o comando numérico <strong>chmod 777 projeto.sh</strong>. Isso significa que:<br>
a) Apenas o usuário root tem permissão de ler o arquivo.<br>
b) O proprietário tem leitura, mas o grupo está bloqueado.<br>
c) O arquivo concede permissão de Leitura, Escrita e Execução para todas as três classes: Proprietário, Grupo e Outros usuários.<br>
d) O arquivo sofreu uma exclusão criptografada de nível 7.
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: C</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> Lembre-se da soma matemática: R(4) + W(2) + X(1) = 7. Quando configuramos 7-7-7, estamos dizendo que o Dono pode tudo (7), o Grupo associado pode tudo (7) e Qualquer Pessoa (Outros) também pode fazer tudo (7). É a permissão máxima e a mais perigosa de se aplicar num servidor real!
</div>

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 6 (IADES - Área Administrativa)</strong><br>
Considere uma política de backup em que, no domingo, realiza-se um backup completo dos servidores de uma empresa. Na segunda, na terça e na quarta-feira são copiados apenas os arquivos que sofreram modificação ou criação exclusivamente desde o backup completo realizado no domingo. Esse método diário de terça e quarta-feira, em relação ao modelo executado, é o backup:<br>
a) Incremental.<br>
b) Espelhado.<br>
c) Diferencial.<br>
d) Nuvem Pública.
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: C</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> O texto diz: "copiados os arquivos que sofreram modificação [...] DESDE O BACKUP COMPLETO realizado no domingo". O backup que usa como âncora/referência sempre o último FULL/COMPLETO, ignorando os backups parciais dos dias anteriores, é o <strong>Diferencial</strong>. Se ele copiasse alterações "desde o dia anterior", seria o Incremental.
</div>

</div>
`
}
];
