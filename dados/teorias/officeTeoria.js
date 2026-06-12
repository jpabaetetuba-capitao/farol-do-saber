const officeTeoria = [
{
    titulo: "📊 1. Conceitos de Aplicativos de Escritório",
    conteudo: `
<style>
  /* Estilos Globais para o Módulo Office */
  .conteudo-teoria { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #334155; }
  .conceito-box { background: #eff6ff; border-left: 5px solid #3b82f6; padding: 15px; border-radius: 4px; margin: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
  .alerta-box { border-left: 5px solid #f59e0b; background: #fffbeb; padding: 15px; margin: 15px 0; border-radius: 4px; }
  .dica-box, .macete { border-left: 5px solid #10b981; background: #ecfdf5; padding: 15px; margin: 15px 0; border-radius: 4px; }
  .resumo { background: #1e293b; color: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 5px solid #38bdf8; }
  
  /* Tags de Extensões e Apps */
  .tag { display: inline-block; padding: 4px 10px; border-radius: 12px; font-size: 0.9em; font-weight: bold; margin: 3px; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); }
  .tag-word { background: #2563eb; } /* Azul */
  .tag-excel { background: #16a34a; } /* Verde */
  .tag-ppt { background: #ea580c; } /* Laranja */
  .tag-writer { background: #475569; } /* Cinza Escuro */
  .tag-calc { background: #059669; } /* Verde Esmeralda */
  .tag-impress { background: #dc2626; } /* Vermelho */
  .tag-ext { background: #8b5cf6; } /* Roxo para extensões */
  
  /* Tabelas Profissionais */
  .tabela-pro { width: 100%; border-collapse: collapse; margin: 15px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
  .tabela-pro th { background: #cbd5e1; padding: 12px; border: 1px solid #94a3b8; text-align: left; color: #1e293b; }
  .tabela-pro td { padding: 12px; border: 1px solid #e2e8f0; }
  
  /* Cards Comparativos */
  .grid-comparativo { display: flex; gap: 15px; flex-wrap: wrap; margin: 15px 0; }
  .card-ms, .card-libre { flex: 1; min-width: 220px; padding: 20px; border-radius: 8px; color: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
  .card-ms { background: linear-gradient(135deg, #1e3a8a, #3b82f6); }
  .card-libre { background: linear-gradient(135deg, #064e3b, #10b981); }
  .card-ms h3, .card-libre h3 { margin-top: 0; color: #fff; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; }
  .card-ms ul, .card-libre ul { list-style-type: none; padding-left: 0; }
  .card-ms li, .card-libre li { margin-bottom: 8px; font-weight: 500; }
  
  /* Fórmulas e Código */
  code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', monospace; color: #b91c1c; font-weight: bold; }
  
  /* Animação da Seta */
  @keyframes bounceRight { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
  .seta { display: inline-block; animation: bounceRight 1s infinite; color: #f59e0b; font-weight: 900; margin-right: 5px; font-size: 1.2em; }
</style>

<div class="conteudo-teoria">
<h3>📘 O que são Aplicativos de Escritório?</h3>
<p>
Aplicativos de escritório são programas utilizados para criar, editar, organizar, armazenar e apresentar informações. Eles auxiliam atividades profissionais, acadêmicas e pessoais, aumentando a produtividade do usuário.
</p>

<div class="conceito-box">
<span class="seta">➔</span> <strong>Suíte de Escritório:</strong> É um pacote ou conjunto de programas integrados voltados para tarefas de produtividade. Você não instala apenas um, mas sim a "caixa de ferramentas" completa.
</div>

<h3>🧰 O Grande Duelo das Suítes</h3>
<p>As provas adoram comparar os dois gigantes do mercado. Conheça-os bem:</p>

<div class="grid-comparativo">
  <div class="card-ms">
    <h3>🏢 Microsoft Office</h3>
    <p>Software <strong>Proprietário</strong>. Possui licença comercial paga e código-fonte fechado (restrito à Microsoft).</p>
    <ul>
      <li>📄 <span class="tag tag-word">Word</span> (Texto)</li>
      <li>📊 <span class="tag tag-excel">Excel</span> (Planilha)</li>
      <li>🎞 <span class="tag tag-ppt">PowerPoint</span> (Apresentação)</li>
      <li>📧 Outlook (E-mail)</li>
      <li>🗄 Access (Banco de Dados)</li>
    </ul>
  </div>

  <div class="card-libre">
    <h3>🐧 LibreOffice</h3>
    <p>Software <strong>Livre</strong> e de código aberto. É gratuito e amplamente utilizado em órgãos públicos e governamentais.</p>
    <ul>
      <li>📄 <span class="tag tag-writer">Writer</span> (Texto)</li>
      <li>📊 <span class="tag tag-calc">Calc</span> (Planilha)</li>
      <li>🎞 <span class="tag tag-impress">Impress</span> (Apresentação)</li>
      <li>🗄 Base (Banco de Dados)</li>
      <li>🎨 Draw (Desenho Vetorial)</li>
    </ul>
  </div>
</div>

<div class="alerta-box">
<span class="seta">➔</span> <strong>Pegadinha Clássica:</strong> As bancas costumam afirmar que o LibreOffice é "proprietário" ou que o Microsoft Office é "livre". Lembre-se: O <em>Libre</em>Office é Livre. O <em>Microsoft</em> é Proprietário.
</div>

<div class="resumo">
✅ <strong>RESUMO RÁPIDO:</strong><br>
• Word ↔ Writer (Textos)<br>
• Excel ↔ Calc (Planilhas)<br>
• PowerPoint ↔ Impress (Apresentações)
</div>
</div>
`
},

{
    titulo: "🏢 2. Microsoft Office em Detalhes",
    conteudo: `
<div class="conteudo-teoria">
<h3>📘 A Suíte Mais Famosa do Mundo</h3>
<p>
O Microsoft Office é uma suíte de aplicativos desenvolvida pela Microsoft para auxiliar tarefas de produtividade, comunicação e gerenciamento de informações. Por ser <strong>Software Proprietário</strong>, seu uso depende da aquisição de uma licença (compra única ou assinatura como o Microsoft 365).
</p>

<h3>🧰 Principais Aplicativos Cobrados</h3>

<ul>
<li><span class="tag tag-word">Word</span> ➔ Utilizado para criação, edição e formatação de documentos de texto (relatórios, ofícios, livros).</li>
<li><span class="tag tag-excel">Excel</span> ➔ Criação de planilhas eletrônicas, cálculos complexos, geração de gráficos e análise de dados matemáticos.</li>
<li><span class="tag tag-ppt">PowerPoint</span> ➔ Criação de apresentações em slides para reuniões, palestras e aulas. Permite animações.</li>
<li><span class="tag" style="background:#0284c7;">Outlook</span> ➔ Gerenciador de e-mails (cliente de correio eletrônico), contatos, calendário e agenda de compromissos.</li>
<li><span class="tag" style="background:#b91c1c;">Access</span> ➔ SGBD (Sistema de Gerenciamento de Banco de Dados) para organizar grandes volumes de registros estruturados.</li>
</ul>

<div class="alerta-box">
<span class="seta">➔</span> <strong>Pegadinha de Concurso:</strong><br>
Muitas bancas invertem os papéis para testar sua atenção. Exemplo: <em>"O MS Excel é um excelente editor de textos para ofícios"</em> (ERRADO!). Cada aplicativo possui uma função primária específica.
</div>
</div>
`
},

{
    titulo: "🐧 3. LibreOffice em Detalhes",
    conteudo: `
<div class="conteudo-teoria">
<h3>📘 A Força do Software Livre</h3>
<p>
Desenvolvido pela The Document Foundation, o LibreOffice é a alternativa gratuita que domina as repartições públicas do Brasil. É um <strong>Software Livre e de Código Aberto (Open Source)</strong>.
</p>

<h3>🧰 Seus Principais Componentes</h3>
<ul>
<li><span class="tag tag-writer">Writer</span> ➔ Editor de textos, rival direto do MS Word.</li>
<li><span class="tag tag-calc">Calc</span> ➔ Planilha eletrônica, rival direto do MS Excel.</li>
<li><span class="tag tag-impress">Impress</span> ➔ Apresentações em slides, rival direto do MS PowerPoint.</li>
<li><span class="tag" style="background:#5b21b6;">Base</span> ➔ Banco de dados, semelhante ao Access.</li>
<li><span class="tag" style="background:#ea580c;">Draw</span> ➔ Utilizado para criação de desenhos, diagramas vetoriais e fluxogramas.</li>
<li><span class="tag" style="background:#0891b2;">Math</span> ➔ Editor especializado em diagramação de fórmulas matemáticas complexas.</li>
</ul>

<div class="dica-box">
<span class="seta">➔</span> <strong>Compatibilidade (Cai muito na prova!):</strong><br>
O LibreOffice <strong>consegue SIM</strong> abrir, editar e salvar arquivos nos formatos do Microsoft Office (como <code>.docx</code> ou <code>.xlsx</code>). Embora possam ocorrer pequenos desajustes visuais em documentos muito complexos, a compatibilidade nativa existe.
</div>
</div>
`
},

{
    titulo: "📄 4. Editores de Texto: Word e Writer",
    conteudo: `
<div class="conteudo-teoria">
<p>
Editores de texto são as ferramentas de elaboração de documentos textuais (cartas, ofícios, relatórios). Não confunda editores de texto com planilhas!
</p>

<div class="grid-comparativo">
  <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; flex: 1; border-top: 4px solid #2563eb;">
    <h3 style="color:#1e3a8a; margin-top:0;">📄 Microsoft Word</h3>
    <p>Formato Padrão Atual: <span class="tag tag-ext">.DOCX</span></p>
    <p>Formato Antigo: <span class="tag tag-ext">.DOC</span></p>
    <p>Possui recursos avançados como Mala Direta, sumários automáticos e controle de alterações.</p>
  </div>
  
  <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; flex: 1; border-top: 4px solid #475569;">
    <h3 style="color:#334155; margin-top:0;">📄 LibreOffice Writer</h3>
    <p>Formato Padrão: <span class="tag tag-ext">.ODT</span> (OpenDocument Text)</p>
    <p>Permite exportação direta para PDF de forma nativa e muito estável.</p>
  </div>
</div>

<h3>📑 Recursos Comuns Frequentes em Provas</h3>
<ul>
<li><strong>Cabeçalho e Rodapé:</strong> Áreas fixas no topo e na base do papel que se repetem automaticamente em todas as páginas (úteis para numeração de página e logomarcas).</li>
<li><strong>Formatação de Fonte:</strong> Negrito, <em>Itálico</em>, <u>Sublinhado</u>.</li>
<li><strong>Atalhos (Atenção às diferenças):</strong> No Word em Português, o Negrito é <code>Ctrl + N</code>. No Writer em Português, muitos atalhos seguem o padrão do inglês, então Negrito é <code>Ctrl + B</code> (Bold).</li>
</ul>

<div class="alerta-box">
<span class="seta">➔</span> <strong>A Maior Pegadinha sobre Formatos:</strong><br>
A banca vai te perguntar qual é o formato padrão nativo do Writer. A resposta é <strong>.ODT</strong>. Se a prova disser que o formato padrão do Writer é .DOCX, está ERRADO (ele abre, mas não é o seu padrão).
</div>
</div>
`
},

{
    titulo: "📊 5. Planilhas Eletrônicas: Excel e Calc",
    conteudo: `
<div class="conteudo-teoria">
<p>
Planilhas organizam dados em uma grade matricial e realizam processamentos matemáticos pesados automaticamente.
</p>

<h3>📋 A Estrutura da Grade</h3>
<p>As planilhas formam uma malha composta por:</p>
<ul>
<li>➡️ <strong>Colunas:</strong> Identificadas por LETRAS (A, B, C, D...).</li>
<li>⬇️ <strong>Linhas:</strong> Identificadas por NÚMEROS (1, 2, 3, 4...).</li>
<li>📦 <strong>Célula:</strong> É a unidade básica de preenchimento, o exato encontro entre uma Coluna e uma Linha. (Ex: <code>A1</code>, <code>C10</code>, <code>Z99</code>).</li>
</ul>

<div class="grid-comparativo">
  <div style="background: #dcfce7; padding: 15px; border-radius: 8px; flex: 1; border-top: 4px solid #16a34a;">
    <h3 style="color:#14532d; margin-top:0;">📊 Microsoft Excel</h3>
    <p>Formato Padrão Atual: <span class="tag tag-ext">.XLSX</span></p>
    <p>Formato Antigo: <span class="tag tag-ext">.XLS</span></p>
  </div>
  
  <div style="background: #d1fae5; padding: 15px; border-radius: 8px; flex: 1; border-top: 4px solid #059669;">
    <h3 style="color:#064e3b; margin-top:0;">📊 LibreOffice Calc</h3>
    <p>Formato Padrão: <span class="tag tag-ext">.ODS</span> (OpenDocument Spreadsheet)</p>
  </div>
</div>

<h3>📈 Gráficos</h3>
<p>Tanto Excel quanto Calc permitem selecionar células numéricas e transformá-las em gráficos (Pizza, Colunas, Linhas, Barras, Dispersão), facilitando a leitura de relatórios.</p>
</div>
`
},

{
    titulo: "🧮 6. Fórmulas e Funções Básicas",
    conteudo: `
<div class="conteudo-teoria">
<div class="alerta-box">
<span class="seta">➔</span> <strong>O Início de Tudo:</strong><br>
Toda e qualquer fórmula ou função no Excel e no Calc <strong>COMEÇA COM O SINAL DE IGUAL (=)</strong>. Se você digitar <code>A1+B1</code>, o programa acha que é só um texto. Digitando <code>=A1+B1</code>, ele efetua o cálculo!
</div>

<h3>📘 Diferença entre Fórmula e Função</h3>
<ul>
<li><strong>Fórmula:</strong> É uma expressão matemática montada pelo próprio usuário. Ex: <code>=A1+A2+A3+B1</code></li>
<li><strong>Função:</strong> É uma fórmula pré-programada que vem embutida no software para facilitar a vida. Ex: <code>=SOMA(A1:A3; B1)</code></li>
</ul>

<h3>⭐ Top 5 Funções de Concursos</h3>
<table class="tabela-pro">
  <tr>
    <th>Função</th>
    <th>Exemplo Prático</th>
    <th>O que ela faz?</th>
  </tr>
  <tr>
    <td><strong>SOMA</strong></td>
    <td><code>=SOMA(A1:A10)</code></td>
    <td>Soma todos os valores contidos no intervalo de A1 até A10.</td>
  </tr>
  <tr>
    <td><strong>MÉDIA</strong></td>
    <td><code>=MÉDIA(A1:A10)</code></td>
    <td>Soma os valores e divide pela quantidade de números, gerando a média aritmética.</td>
  </tr>
  <tr>
    <td><strong>MÁXIMO</strong></td>
    <td><code>=MÁXIMO(B1:B50)</code></td>
    <td>Vasculha o intervalo e retorna apenas o número de MAIOR valor.</td>
  </tr>
  <tr>
    <td><strong>MÍNIMO</strong></td>
    <td><code>=MÍNIMO(C1:C10)</code></td>
    <td>Vasculha o intervalo e retorna apenas o número de MENOR valor.</td>
  </tr>
  <tr>
    <td><strong>SE</strong></td>
    <td><code>=SE(A1>=7;"Aprovado";"Reprovado")</code></td>
    <td>Função lógica. SE a condição for verdadeira, mostra o primeiro texto. Se for falsa, mostra o segundo.</td>
  </tr>
</table>

<div class="dica-box">
<span class="seta">➔</span> <strong>Dois Pontos (:) vs Ponto e Vírgula (;)</strong><br>
- <code>(A1:A5)</code> ➔ O Dois Pontos significa <strong>"ATÉ"</strong>. (Pega A1, A2, A3, A4 e A5). É um intervalo contínuo.<br>
- <code>(A1;A5)</code> ➔ O Ponto e Vírgula significa <strong>"E"</strong>. (Pega APENAS o A1 e o A5, pulando os do meio).
</div>
</div>
`
},

{
    titulo: "📌 7. O Pulo do Gato: Referências de Células",
    conteudo: `
<div class="conteudo-teoria">
<p>
Quando arrastamos uma fórmula para copiá-la para as linhas de baixo, o Excel ajusta as letras e números automaticamente. Às vezes, não queremos isso. Para "travar" a célula, usamos o cifrão (<strong>$</strong>).
</p>

<div class="grid-comparativo">
  <div style="background: #fff; padding: 15px; border-radius: 8px; flex: 1; border: 1px solid #cbd5e1; border-top: 4px solid #64748b;">
    <h3 style="color:#334155; margin-top:0;">➡️ Relativa (Livre)</h3>
    <p>Exemplo: <code>A1</code></p>
    <p>É o padrão. Sem cifrão nenhum. Se você copiar a fórmula uma linha para baixo, a referência muda automaticamente para <code>A2</code>.</p>
  </div>
  
  <div style="background: #fff; padding: 15px; border-radius: 8px; flex: 1; border: 1px solid #cbd5e1; border-top: 4px solid #dc2626;">
    <h3 style="color:#991b1b; margin-top:0;">🔒 Absoluta (Travada)</h3>
    <p>Exemplo: <code>$A$1</code></p>
    <p>Tem cifrão na coluna ($A) e na linha ($1). Por mais que você copie ou arraste a fórmula, ela vai sempre apontar para a célula A1. Fica 100% fixa.</p>
  </div>
  
  <div style="background: #fff; padding: 15px; border-radius: 8px; flex: 1; border: 1px solid #cbd5e1; border-top: 4px solid #f59e0b;">
    <h3 style="color:#b45309; margin-top:0;">🔀 Mista (Meio a Meio)</h3>
    <p>Exemplos: <code>$A1</code> ou <code>A$1</code></p>
    <p>O cifrão trava só quem está logo à frente dele. Em <code>$A1</code>, a coluna A está travada, mas a linha 1 está livre para descer.</p>
  </div>
</div>
</div>
`
},

{
    titulo: "🎞 8. Apresentações: PowerPoint e Impress",
    conteudo: `
<div class="conteudo-teoria">
<p>
Utilizados para transmitir informações de forma visual e de alto impacto (slides) em aulas, reuniões e defesas de projetos.
</p>

<div class="grid-comparativo">
  <div style="background: #ffedd5; padding: 15px; border-radius: 8px; flex: 1; border-top: 4px solid #ea580c;">
    <h3 style="color:#9a3412; margin-top:0;">🎞 Microsoft PowerPoint</h3>
    <p>Formato Padrão Atual: <span class="tag tag-ext">.PPTX</span></p>
    <p>Formato Antigo: <span class="tag tag-ext">.PPT</span></p>
  </div>
  
  <div style="background: #fee2e2; padding: 15px; border-radius: 8px; flex: 1; border-top: 4px solid #dc2626;">
    <h3 style="color:#991b1b; margin-top:0;">🎞 LibreOffice Impress</h3>
    <p>Formato Padrão: <span class="tag tag-ext">.ODP</span> (OpenDocument Presentation)</p>
  </div>
</div>

<div class="alerta-box">
<span class="seta">➔</span> <strong>O Campeão de Quedas nas Provas: Animação x Transição</strong><br><br>
✨ <strong>ANIMAÇÃO:</strong> Acontece DENTRO do próprio slide. É o efeito aplicado em um OBJETO específico (exemplo: fazer uma foto surgir girando, ou um texto entrar voando linha por linha).<br><br>
🔄 <strong>TRANSIÇÃO:</strong> Acontece ENTRE os slides. É o efeito especial visto exatamente no momento em que você sai do Slide 1 e entra no Slide 2 (exemplo: tela esmaecer, ou virar como a página de um livro).
</div>
</div>
`
},

{
    titulo: "🚨 9. Resumo Estratégico em Tabelas",
    conteudo: `
<div class="conteudo-teoria">
<p>Decore esta tabela. Ela resolve cerca de 60% das questões básicas de escritório em concursos.</p>

<table class="tabela-pro" style="text-align:center;">
  <tr>
    <th style="text-align:center;">Finalidade</th>
    <th style="background:#1e3a8a; color:white; text-align:center;">Microsoft Office (Proprietário)</th>
    <th style="background:#064e3b; color:white; text-align:center;">LibreOffice (Livre)</th>
  </tr>
  <tr>
    <td><strong>Editor de Textos</strong></td>
    <td>Word <code>(.docx)</code></td>
    <td>Writer <code>(.odt)</code></td>
  </tr>
  <tr>
    <td><strong>Planilha Eletrônica</strong></td>
    <td>Excel <code>(.xlsx)</code></td>
    <td>Calc <code>(.ods)</code></td>
  </tr>
  <tr>
    <td><strong>Apresentação de Slides</strong></td>
    <td>PowerPoint <code>(.pptx)</code></td>
    <td>Impress <code>(.odp)</code></td>
  </tr>
  <tr>
    <td><strong>Banco de Dados</strong></td>
    <td>Access <code>(.accdb)</code></td>
    <td>Base <code>(.odb)</code></td>
  </tr>
</table>

<div class="resumo">
✅ <strong>MANTRA DA APROVAÇÃO</strong><br><br>
• A Microsoft COBRA pela licença (Proprietário). A The Document Foundation NÃO COBRA (LibreOffice = Livre).<br>
• Toda fórmula obrigatoriamente começa com IGUAL (=).<br>
• Dois pontos (:) é ATÉ. Ponto e vírgula (;) é E.<br>
• O símbolo <strong>$</strong> serve para CONGELAR (travar) referências absolutas.<br>
• Transição muda o SLIDE. Animação move a IMAGEM/TEXTO.
</div>
</div>
`
},

{
    titulo: "📝 10. Questões Comentadas - Parte 1 (Conceitos, MS Office e LibreOffice)",
    conteudo: `
<div class="conteudo-teoria">

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 1 (Fundação Carlos Chagas - Assistente de Administração)</strong><br>
O conjunto de ferramentas para escritório LibreOffice, muito adotado em ambientes corporativos governamentais por ser uma alternativa sem custos de licenciamento, possui aplicativos correspondentes diretos ao Word, Excel e PowerPoint do Microsoft Office. Esses aplicativos do LibreOffice são, respectivamente:<br>
a) Math, Base e Draw.<br>
b) Writer, Calc e Impress.<br>
c) Outlook, Access e Visio.<br>
d) Writer, Impress e Calc.<br>
e) WordPad, Calc e Presenter.
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: B</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> A banca pediu "respectivamente" para Word, Excel e PowerPoint. A resposta exata é Writer (texto), Calc (planilha) e Impress (apresentação). A letra D misturou a ordem do Calc e do Impress.
</div>

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 2 (CEBRASPE / CESPE - Técnico Judiciário)</strong><br>
A respeito dos aplicativos de escritório, julgue o item a seguir.<br>
O LibreOffice Writer não possui a capacidade de abrir documentos salvos na extensão .DOCX nativa do Microsoft Word, obrigando o usuário a convertê-los antes em PDF. (Certo / Errado)
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: ERRADO</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> Pegadinha clássica! O LibreOffice (incluindo o Writer) <strong>possui sim</strong> total capacidade para abrir, editar e até mesmo salvar arquivos no formato nativo da Microsoft (como o .DOC e o .DOCX), garantindo a interoperabilidade entre as plataformas.
</div>

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 3 (VUNESP - Auxiliar Administrativo)</strong><br>
Em um computador de uma prefeitura municipal, foi configurado o LibreOffice como padrão. O formato nativo que será gerado ao salvar um documento de texto no Writer e o formato nativo de uma planilha salva no Calc são, respectivamente:<br>
a) .docx e .xlsx<br>
b) .odt e .ods<br>
c) .odp e .odt<br>
d) .txt e .csv
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: B</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> A família OpenDocument (ODF) segue uma lógica: OD<strong>T</strong> (Text = Writer), OD<strong>S</strong> (Spreadsheet = Calc), OD<strong>P</strong> (Presentation = Impress). Portanto, texto e planilha são, respectivamente, .odt e .ods.
</div>

</div>
`
},

{
    titulo: "📝 11. Questões Comentadas - Parte 2 (Excel, Fórmulas e Apresentações)",
    conteudo: `
<div class="conteudo-teoria">

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 4 (FGV - Analista)</strong><br>
No Microsoft Excel, a diferença entre as fórmulas <code>=SOMA(A1:A4)</code> e <code>=SOMA(A1;A4)</code> é que a primeira realiza a soma de:<br>
a) apenas duas células, e a segunda, de quatro células.<br>
b) quatro células (A1, A2, A3 e A4), enquanto a segunda realiza a soma apenas das células A1 e A4.<br>
c) valores absolutos, enquanto a segunda utiliza referências relativas.<br>
d) todos os números da planilha, enquanto a segunda divide A1 por A4.
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: B</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> Dois pontos (<code>:</code>) cria um intervalo contínuo, ou seja, "de A1 ATÉ A4", somando quatro células. O ponto e vírgula (<code>;</code>) age como um separador "E", ou seja, "A1 E A4", somando apenas as duas células das pontas.
</div>

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 5 (Instituto AOCP - Assistente)</strong><br>
Ao construir uma planilha no Calc ou no Excel, um usuário digitou a fórmula <code>=A1*$B$1</code> e, em seguida, copiou e colou esta fórmula na linha de baixo. Como ficará a fórmula na nova linha?<br>
a) =A2*$B$2<br>
b) =A2*$B$1<br>
c) =A1*$B$1<br>
d) =B2*$C$2
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: B</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> A referência <code>A1</code> é relativa; ao ser copiada uma linha para baixo, o número "cai" com ela, virando <code>A2</code>. Já a referência <code>$B$1</code> é ABSOLUTA (travada pelo cifrão). Ela fica paralisada, independente de para onde você arraste. Logo, o resultado final ao colar na linha de baixo é <code>=A2*$B$1</code>.
</div>

<div class="conceito-box" style="background: #ffffff; border-color: #94a3b8;">
<strong>Questão 6 (Fundatec - Oficial Administrativo)</strong><br>
Durante a edição de um documento no Microsoft PowerPoint, o palestrante deseja que uma imagem de estrela vá girando ao entrar no slide. Esse efeito visual, aplicado especificamente sobre um objeto inserido na página, recebe o nome técnico de:<br>
a) Transição de Slide.<br>
b) Animação de Objeto.<br>
c) Interpolação Gráfica.<br>
d) Transição Vetorial.
</div>
<div class="dica-box" style="margin-top: 0; background: #f8fafc; border-left-color: #3b82f6;">
<strong>Gabarito: B</strong><br>
<span class="seta">➔</span> <em>Comentário:</em> Efeitos aplicados <strong>diretamente em objetos</strong> dentro de um mesmo slide (como a estrela girando, letras aparecendo) são chamados de <strong>Animações</strong>. As Transições são os efeitos visuais gerados na troca/mudança completa da tela de um slide para o slide seguinte.
</div>

</div>
`
}
];
