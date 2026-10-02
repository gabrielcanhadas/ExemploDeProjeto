# Contexto do projeto — Course Tech

## Escopo e método

Este documento descreve o conteúdo encontrado neste repositório: páginas HTML, folhas CSS, scripts JavaScript, imagens, ícones e fontes. As descrições de comportamento foram inferidas da implementação disponível. Não foram executados os fluxos no navegador; portanto, comportamentos dependentes do ambiente são indicados como não verificados.

## Finalidade identificada

O projeto apresenta uma interface web chamada **Course Tech**, voltada à divulgação de cursos de tecnologia e à demonstração de páginas de cadastro, login e gerenciamento de usuários. Essa finalidade é indicada pelo título e pelos textos da página inicial, pelos nomes e conteúdos dos formulários e pelo painel administrativo.

O que os arquivos comprovam é uma interface estática no cliente, com alternância de tema e gerenciamento local de registros no painel. Não há código de servidor, integração com API ou autenticação implementada neste repositório. Assim, os textos de cursos e os formulários de acesso não comprovam a existência de uma plataforma de cursos operacional, de compra de cursos ou de contas de usuário persistidas em servidor.

## Inventário e estrutura

```text
ExemploDeProjeto/
├── index.html
├── CONTEXTO_PROJETO.md
├── css/
│   ├── admin.css
│   ├── style.css
│   └── webfonts/
│       ├── fa-brands-400.ttf
│       ├── fa-brands-400.woff2
│       ├── fa-regular-400.ttf
│       ├── fa-regular-400.woff2
│       ├── fa-solid-900.ttf
│       ├── fa-solid-900.woff2
│       ├── fa-v4compatibility.ttf
│       └── fa-v4compatibility.woff2
├── fontes/
│   ├── Montserrat/
│   │   ├── Montserrat-Variable.ttf
│   │   ├── Montserrat-Variable.woff
│   │   └── Montserrat-Variable.woff2
│   └── Roboto/
│       ├── Roboto-Bold.ttf
│       ├── Roboto-Medium.ttf
│       └── Roboto-Regular.ttf
├── html/
│   ├── admin.html
│   ├── cadastro.html
│   └── login.html
├── icones/
│   ├── check-circle.svg
│   ├── clock.svg
│   ├── facebook.svg
│   ├── graduation-cap.svg
│   ├── instagram.svg
│   ├── linkedin.svg
│   ├── users-shield.svg
│   └── users.svg
├── imagens/
│   ├── estudante.jpg
│   ├── marketing.jpg
│   ├── uiux.jpg
│   └── web.jpg
└── js/
    ├── admin.js
    └── tema.js
```

Não foram encontrados arquivos JSON, manifesto de dependências, configuração de build, configuração de servidor ou backend no inventário do projeto. As fontes Font Awesome em `css/webfonts/` estão presentes, mas não foi encontrada folha CSS ou referência HTML que as utilize.

## Visão geral e telas

| Página | Finalidade e elementos | Comportamento implementado |
|---|---|---|
| `index.html` | Apresentação da Course Tech, chamada para cadastro, links para cursos, três cards com título, descrição e preço, benefícios e links sociais. | Links navegam para cadastro ou para a seção `#cursos`; o botão de tema chama `alternarTema()`. Os links sociais têm `href="#"`, sem destino de perfil configurado. |
| `html/cadastro.html` | Formulário com nome, e-mail, telefone, senha e confirmação, todos obrigatórios. | Não há script de cadastro. O navegador aplica validação básica dos campos `required` e `email`; ao enviar, o formulário usa o comportamento HTML padrão e tem `action="login.html"`, sem `method`, portanto o padrão é GET. Não há lógica que salve a conta ou confira se as senhas coincidem. |
| `html/login.html` | Formulário com e-mail e senha obrigatórios e link para cadastro. | Não há script de autenticação, validação além da nativa do navegador ou destino de envio explícito. O formulário usa o envio HTML padrão (GET para a própria página). Não há verificação de credenciais ou sessão implementada. |
| `html/admin.html` | Formulário administrativo de nome e e-mail, pesquisa, lista dinâmica e ações de limpar e excluir registros. | `admin.js` cria, pesquisa, exibe e remove registros no armazenamento local do navegador. Não há mecanismo de autorização visível que restrinja o acesso à página. |

As quatro páginas têm cabeçalho com marca e navegação, botão de tema e rodapé. A navegação é composta por links HTML relativos. O painel administrativo e as páginas de formulário compartilham `style.css`; o painel também carrega `admin.css`.

## Organização e responsabilidade dos arquivos

### HTML

- **`index.html`** — documento principal (`lang="pt-br"`), com cabeçalho/nav, seção de destaque, catálogo apresentado em três cards, benefícios e rodapé. Usa imagens em `imagens/`, SVGs em `icones/`, `css/style.css` e `js/tema.js`. Os cards e preços estão escritos diretamente no HTML.
- **`html/cadastro.html`** — formulário `#formCadastro`; rótulos se associam aos campos por `for`/`id`. Seus campos obrigatórios usam tipos nativos `text`, `email`, `tel` e `password`. Inclui `style.css` e `tema.js` por caminhos relativos à subpasta `html`.
- **`html/login.html`** — formulário `#formLogin` com campos `#emailLogin` e `#senhaLogin`; inclui `style.css` e `tema.js`.
- **`html/admin.html`** — define os elementos esperados por `admin.js`: `#formAdmin`, `#nomeAdmin`, `#emailAdmin`, `#listaUsuarios`, `#btnLimparCampos`, `#btnExcluirTudo` e `#inputPesquisa`. Carrega `admin.js` e `tema.js`, além dos estilos globais e administrativos.

### JavaScript

- **`js/tema.js`** — declara `alternarTema()`, que alterna a classe `dark` em `document.body`, grava `dark` ou `light` na chave `tema` do `localStorage` e atualiza o emoji do botão `#btn-tema`, quando presente. No evento `DOMContentLoaded`, lê essa chave e reaplica o modo escuro se o valor for `dark`. O script é incluído nas quatro páginas.
- **`js/admin.js`** — ao receber `DOMContentLoaded`, busca no DOM os elementos do painel e carrega o array JSON da chave `usuarios_Course Tech`; se a chave não tiver valor, inicia com array vazio. `salvarDados()` serializa o array de volta ao armazenamento local. `renderizarLista(filtro)` filtra nome ou e-mail sem diferenciar maiúsculas de minúsculas e monta os itens da lista, incluindo data e botão de exclusão. O submit cria `{ nome, email, dataEnvio }`, em que a data é produzida por `toLocaleString('pt-BR')`, salva, renderiza e limpa o formulário. Os outros eventos limpam o formulário, pedem confirmação antes de apagar tudo, ou atualizam a lista durante a pesquisa. `window.excluirItem` expõe a exclusão individual para o `onclick` criado na lista.

  A lista é montada usando `innerHTML`, inclusive com nome e e-mail armazenados. A exclusão individual usa o índice do resultado filtrado como índice no array original; quando uma pesquisa está ativa, esse índice pode apontar para outro registro. Estes são comportamentos observáveis no código e devem ser considerados ao manter o painel.

### CSS e tipografia

- **`css/style.css`** — define as fontes locais, variáveis de cor/tipografia, reset e estilos compartilhados. O corpo usa layout flexível em coluna para ocupar pelo menos a altura da janela; `main` tem largura máxima de 1200 px. Estiliza cabeçalho, navegação, rodapé, formulários, botões, ícones, destaque e benefícios. A classe `.dark` substitui variáveis de cor usadas por componentes compartilhados. A media query até 768 px empilha cabeçalho/nav e conteúdo de destaque, ajustando alinhamento e tamanho do título.
- **`css/admin.css`** — complementa a página administrativa com largura do painel, cartão da lista, linhas flexíveis de usuário, área de ações e campo de pesquisa com estado `:focus` e placeholder adaptado ao modo escuro.
- **`fontes/Montserrat/`** e **`fontes/Roboto/`** — arquivos locais referenciados por `@font-face` no CSS. Montserrat é a família de títulos e Roboto a família do corpo. O CSS lista WOFF2, WOFF e TTF como fontes alternativas. No inventário, Roboto possui apenas arquivos TTF; os caminhos WOFF2/WOFF citados para essa família não estão presentes. As páginas também pre-carregam Montserrat WOFF2 e Roboto-Regular WOFF2.

Os estilos de cards de curso, alguns espaçamentos e estilos de títulos estão escritos como atributos `style` diretamente em `index.html` e nas páginas internas; portanto, nem toda apresentação está centralizada nos arquivos CSS.

### Imagens, ícones e outros recursos

- **`imagens/estudante.jpg`** aparece na seção de destaque; `web.jpg`, `uiux.jpg` e `marketing.jpg` ilustram os três cards de curso.
- **`icones/graduation-cap.svg`** identifica a marca no cabeçalho; `check-circle.svg`, `clock.svg` e `users-shield.svg` aparecem nos benefícios; `facebook.svg`, `instagram.svg` e `linkedin.svg` aparecem no rodapé da página inicial.
- **`icones/users.svg`** está no inventário, mas não há referência a ele nas páginas analisadas.
- **`css/webfonts/`** contém arquivos de fontes com nomes Font Awesome, porém o projeto não inclui referência que permita determinar se são usados; nenhuma dependência externa ou CDN foi identificada.

## Estilos e interface

As variáveis em `:root` centralizam cores principais, de fundo, texto, destaque e fontes. `.dark` redefine essas variáveis; componentes que usam essas variáveis acompanham o tema sem folhas separadas por página. A navegação usa Flexbox; o destaque e os benefícios também usam Flexbox com quebra de linha. O conteúdo principal é centralizado e limitado em largura. Formulários usam grupos verticais de rótulo e campo, e cartões recebem fundo, borda arredondada e sombra.

Os estados interativos explicitamente estilizados incluem `:hover` em links, botões e imagem de destaque, além de `:focus` no campo de pesquisa administrativa. Não foi identificada media query específica no CSS administrativo. A responsividade declarada em CSS concentra-se no breakpoint de 768 px do estilo global.

## Fluxos de dados e persistência

### Alternância do tema

```text
Clique no botão #btn-tema
        ↓ onclick="alternarTema()"
js/tema.js alterna body.dark
        ↓
localStorage: chave "tema" ("dark" ou "light")
        ↓ ao carregar outra página
DOMContentLoaded reaplica "dark" quando salvo
```

### Registros do painel

```text
Campos nome e e-mail de html/admin.html
        ↓ submit (sem recarregar a página)
js/admin.js cria registro e data local
        ↓
Array usuarios → JSON em localStorage["usuarios_Course Tech"]
        ↓
renderizarLista() cria os itens na interface
```

A pesquisa filtra o array apenas para exibição; não altera os registros salvos. Exclusões modificam o array e atualizam o armazenamento. A exclusão em massa exige confirmação nativa do navegador. O painel e o tema dependem do `localStorage` do navegador atual; não há sincronização entre dispositivos ou usuários identificada. O HTML de login/cadastro não grava dados; portanto, não há evidência de persistência de contas.

## Funcionalidades e regras identificadas

| Funcionalidade | Implementação e dados envolvidos | Resultado |
|---|---|---|
| Navegação entre páginas e seções | Links em `index.html` e nas páginas de `html/`. | Abre páginas internas ou navega à seção de cursos. |
| Alternar e restaurar tema | `js/tema.js`, classe `dark`, chave `tema` no `localStorage`. | Tema escuro/claro compartilhado entre páginas no mesmo armazenamento do navegador. |
| Cadastrar registro administrativo | Formulário `#formAdmin` e evento submit em `js/admin.js`; campos nome/e-mail e data local. | Registro acrescentado à lista e persistido localmente. |
| Pesquisar registros | Evento `input` em `#inputPesquisa`; compara nome e e-mail ignorando caixa. | Lista é filtrada enquanto se digita. |
| Remover um ou todos os registros | `excluirItem(index)` ou botão `#btnExcluirTudo`; ambos usam `confirm()`. | Array e armazenamento local são atualizados após confirmação. |
| Limpar formulário administrativo | Botão `#btnLimparCampos`. | Campos do formulário são resetados. |
| Enviar formulários de cadastro/login | Formulários HTML com `required`; cadastro usa `action="login.html"`. | Só a validação nativa de preenchimento/formato está implementada. Não há criação de conta nem autenticação no código analisado. |

As regras de formulário identificadas são os atributos `required` e o tipo `email`. Não há regra implementada para formato de telefone, tamanho/força da senha, igualdade entre senha e confirmação, unicidade de e-mail ou autorização administrativa. O painel exige nome e e-mail por `required`; não há outras validações de negócio visíveis.

## Arquitetura e relações entre arquivos

A arquitetura identificada é um conjunto de páginas HTML estáticas, estilizadas por CSS local e complementadas por JavaScript executado no navegador. Não foram encontrados serviços, APIs, servidor ou banco de dados neste projeto.

```text
index.html ───────────────→ css/style.css
    ├── imagens/* e icones/*
    └── js/tema.js ───────→ localStorage (tema)

html/login.html ──────────→ css/style.css
    └── js/tema.js ───────→ localStorage (tema)

html/cadastro.html ───────→ css/style.css
    └── js/tema.js ───────→ localStorage (tema)

html/admin.html ──────────→ css/style.css + css/admin.css
    ├── js/admin.js ──────→ DOM + localStorage (usuarios_Course Tech)
    └── js/tema.js ───────→ localStorage (tema)
```

## Pontos relevantes para manutenção

- `index.html` é o ponto de entrada da apresentação. Seus cards e preços são conteúdo estático; não existe catálogo alimentado por dados.
- `html/admin.html` e `js/admin.js` têm contrato direto por IDs de elementos. Alterar um ID usado pelo script exige atualizar o outro arquivo.
- `js/admin.js` armazena registros no navegador sob a chave `usuarios_Course Tech`; alterações no formato dos objetos precisam considerar dados antigos que já possam estar armazenados.
- `js/tema.js` é compartilhado por todas as páginas e depende da presença opcional de `#btn-tema`; verifica o botão antes de mudar seu texto.
- Os caminhos de imagens, fontes, CSS, scripts e navegação são relativos à localização de cada HTML. Mover páginas ou recursos exige revisar esses caminhos.
- Login e cadastro têm apenas estrutura visual e envio padrão de formulário; não devem ser tratados como autenticação ou cadastro persistente.

## Limitações do que foi possível determinar

- Não foi identificado backend, API, banco de dados, autenticação, autorização ou processamento de pagamentos.
- Não foi possível determinar como os dados do painel seriam compartilhados ou administrados fora do navegador, pois eles são mantidos apenas no `localStorage` local.
- Não há configuração de hospedagem, servidor, build ou instruções de execução no inventário analisado. Não é possível determinar o ambiente de publicação pretendido.
- O destino pretendido para os links sociais `#` e a finalidade do SVG `users.svg` não puderam ser determinados.
- Não foi possível comprovar que os cursos, benefícios ou preços exibidos correspondam a ofertas reais; eles são textos presentes na página.
- O comportamento foi documentado a partir do código e não validado por execução em navegador.

## Conclusão

Course Tech é uma interface de demonstração de uma plataforma de cursos, organizada em uma página inicial e três páginas auxiliares de cadastro, login e administração. Usa HTML, CSS e JavaScript locais, com fontes, imagens e ícones incluídos no repositório. O tema é salvo no `localStorage`, assim como a lista de registros gerenciada pelo painel. O fluxo central do painel vai do formulário à atualização do array local e à renderização da lista. As páginas de login e cadastro não têm integração de autenticação ou persistência implementada nos arquivos analisados.
