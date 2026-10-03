# CONTEXTO_PROJETO

## 1. Inventário do projeto

A estrutura de arquivos e diretórios identificada no projeto é a seguinte:

```text
EXEMPLODEPROJETO/
├── index.html
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
├── js/
│   ├── admin.js
│   └── tema.js
```

Observações:

- O inventário acima inclui os diretórios e arquivos relevantes ao projeto visível no repositório analisado.
- Não foi identificado um diretório de backend, API, banco de dados, framework ou estrutura de pastas como `src`, `public`, `components` etc. O projeto apresentado é um front-end estático em HTML, CSS e JavaScript.
- Os arquivos de fonte e ícones estão armazenados localmente no projeto e são referenciados por caminhos relativos nos documentos HTML.

## 2. Finalidade identificada do projeto

A finalidade mais clara que pode ser inferida pelos arquivos é a de uma landing page e portal de cursos, com foco em marketing de cursos online e em fluxo de cadastro/ login de usuários para uma plataforma educacional.

As evidências que sustentam essa conclusão são:

- Texto principal da página inicial: "Aprenda as tecnologias do futuro hoje!" e "Nossa plataforma oferece os melhores cursos de programação, design e marketing digital...".
- Título da marca: "Course Tech".
- Navegação com links para "Início", "Cadastro", "Login" e "Admin".
- Seção "Nossos Cursos em Destaque" com três cards de cursos com preços em reais (`R$ 499,00`, `R$ 350,00`, `R$ 290,00`).
- Seção "Por que escolher a Course Tech?" com benefícios como "Certificado Reconhecido", "Acesso Vitalício" e "Comunidade Ativa".
- Página de cadastro com campos de nome, e-mail, telefone, senha e confirmação de senha.
- Página de login com campos de e-mail e senha.
- Página administrativa intitulada "Gerenciamento de Usuários", com formulário de cadastro, pesquisa, exclusão individual e exclusão de todos.
- O JavaScript usa `localStorage` para persistir usuários e tema visual.

Conclusão fundamentada no código observado: trata-se de um projeto front-end estático de apresentação de cursos e gestão visual de usuários no navegador, sem backend real implementado.

## 3. Visão geral do sistema

O projeto é composto por páginas HTML estáticas acessadas em um navegador, com estilos compartilhados em CSS e pequenos scripts em JavaScript para interatividade básica.

### Fluxo de uso identificado

```text
Usuário
  ↓
Página inicial (index.html)
  ↓
Navegação para Cadastro / Login / Admin
  ↓
Formulários HTML preenchidos pelo usuário
  ↓
Interação com JavaScript (tema e gerenciamento de usuários)
  ↓
Persistência em localStorage do navegador
  ↓
Atualização da interface e da lista de usuários
```

### O que o usuário consegue fazer

- Visualizar a página inicial com apresentação da plataforma e cursos.
- Acessar páginas de cadastro e login.
- Preencher formulário de cadastro com dados pessoais.
- Fazer login com e-mail e senha em um formulário HTML.
- Usar botão de alternância de tema (modo claro/escuro) entre páginas.
- Em `admin.html`, cadastrar usuários manualmente, pesquisar registros, excluir um registro específico e excluir todos os registros.

### O que é apresentado ao usuário

- Mensagens e textos de marketing para cursos e benefícios.
- Cards com cursos e valores.
- Indicadores visuais (ícones, imagens, composição em layout).
- Formulários com campos de entrada e botões de ação.
- Lista de usuários em painel administrativo.

### O que pode ser inserido

- Nome completo, e-mail, telefone e senha no formulário de cadastro.
- E-mail e senha no formulário de login.
- Nome ou e-mail para pesquisa na tela administrativa.

### Resultados produzidos pelo sistema

- A página pode alternar entre tema claro e escuro, mantendo a escolha no navegador via `localStorage`.
- Na página administrativa, novos usuários são adicionados ao array em memória e armazenados em `localStorage`.
- A interface de administração atualiza a lista dinamicamente no DOM.
- A filtragem por nome e e-mail é aplicada em tempo real.

### Relação entre as partes do projeto

- `index.html` é a entrada principal da plataforma.
- `html/cadastro.html` e `html/login.html` complementam o fluxo de acesso do usuário.
- `html/admin.html` carrega `js/admin.js` para gerenciamento de usuários.
- `js/tema.js` é compartilhado em todas as páginas que possuírem o botão de tema.
- `css/style.css` define a identidade visual da aplicação e o layout padrão.
- `css/admin.css` acrescenta estilos específicos da área administrativa.

## 4. Estrutura e responsabilidade dos arquivos

### `index.html`

- Arquivo principal da landing page.
- Responsável pela apresentação da marca "Course Tech" e dos cursos.
- Contém navegação do cabeçalho, destaque principal, seção de cursos, seção de benefícios e rodapé.
- Inclui a referência ao script `js/tema.js` para o botão de tema.

### `html/cadastro.html`

- Página de criação de conta.
- Possui formulário com campos de nome, e-mail, telefone, senha e confirmação de senha.
- O formulário envia para `login.html` via atributo `action="login.html"`.
- Usa o mesmo layout visual do restante do projeto e o script de tema.

### `html/login.html`

- Página de autenticação.
- Possui formulário com e-mail e senha.
- Não há lógica de validação ou autenticação real implementada no JavaScript, conforme verificado no código.
- Usa o mesmo estilo visual do restante do projeto e o script de tema.

### `html/admin.html`

- Página administrativa.
- Contém formulário de cadastro de usuários para administração.
- Inclui área de pesquisa, lista de usuários e botão para exclusão em massa.
- Carrega os arquivos `css/admin.css`, `js/admin.js` e `js/tema.js`.

### `css/style.css`

- Arquivo de estilo principal.
- Responsável pela definição de paleta de cores, tipografia, layout geral, formulários, botões, ícones e responsividade.
- Importa fontes locais com `@font-face` e define variáveis CSS para temas claro e escuro.
- Estrutura o layout de cabeçalho, main, rodapé, hero section e seção de benefícios.

### `css/admin.css`

- Estilos específicos do painel administrativo.
- Define aparência da lista de usuários, itens, pesquisa e botões de ação.

### `js/tema.js`

- Função `alternarTema()` alterna a classe `dark` no elemento `body`.
- Salva a escolha do usuário em `localStorage` com a chave `tema`.
- Na carga inicial da página, verifica se há tema salvo e reaplica o modo escuro.
- Relaciona-se diretamente com todas as páginas que possuem botão de tema.

### `js/admin.js`

- Script principal do painel administrativo.
- Escuta o evento `DOMContentLoaded`.
- Lê usuários do `localStorage` usando a chave `usuarios_Course Tech`.
- Renderiza a lista de usuários na página de forma dinâmica.
- Filtra usuários por nome ou e-mail em tempo real.
- Permite adicionar usuários a partir do formulário.
- Permite excluir um usuário individualmente via botão e excluir todos os registros com confirmação.
- Usa `confirm()` para a confirmação de exclusão.

### Diretórios de conteúdo visual

#### `imagens/`

- Armazena imagens de destaque e cursos utilizados na landing page.
- Arquivos identificados: `estudante.jpg`, `web.jpg`, `uiux.jpg`, `marketing.jpg`.

#### `icones/`

- Armazena ícones SVG usados em benefícios, logo e redes sociais.
- Exemplos: `check-circle.svg`, `clock.svg`, `graduation-cap.svg`, `facebook.svg`, `instagram.svg`, `linkedin.svg`.

#### `fontes/`

- Contém as fontes locais usadas no layout, especialmente `Montserrat` e `Roboto`.
- O CSS referencia esses arquivos com `@font-face`.

#### `css/webfonts/`

- Contém arquivos webfont kit da biblioteca Font Awesome, presumivelmente usados por algum uso visual ou complemento de ícones, embora no código observado não seja possível afirmar qual conteúdo específico é exibido em tempo de execução.

## 5. HTML: estrutura das páginas

### `index.html`

Estrutura principal:

- `<header>` com logotipo e navegação.
- `<nav>` com links para Início, Cadastro, Login e Admin.
- `<main>` contendo:
  - seção de destaque (`.destaque`);
  - seção de cursos (`#cursos`);
  - seção de benefícios (`.beneficios`).
- `<footer>` com informações de direitos autorais e ícones de redes sociais.

Elementos relevantes:

- Botão de alternância de tema (`#btn-tema`).
- Botões de ação para "Começar Agora" e "Ver Cursos".
- Imagem principal de destaque e cards de cursos com preços.

### `html/cadastro.html`

- Cabeçalho com logo e navegação.
- `<main>` com `div.container-form`.
- Formulário `#formCadastro` com inputs:
  - `nome`
  - `email`
  - `telefone`
  - `senha`
  - `confirmarSenha`
- Botão de envio para cadastrar.
- Link para a página de login.

### `html/login.html`

- Cabeçalho com logo e navegação.
- `<main>` com `div.container-form`.
- Formulário `#formLogin` com inputs:
  - `emailLogin`
  - `senhaLogin`
- Botão de envio para entrar.
- Link para a página de cadastro.

### `html/admin.html`

- Cabeçalho com logo e navegação.
- `<main>` com `div.admin-container`.
- Formulário `#formAdmin` com:
  - `nomeAdmin`
  - `emailAdmin`
  - `btnCadastrar`
  - `btnLimparCampos`
- Área de lista com:
  - campo de pesquisa `#inputPesquisa`
  - `<ul id="listaUsuarios">` para renderização dinâmica
  - botão `#btnExcluirTudo`

## 6. CSS: identidade visual e comportamento

O CSS é a base do visual do projeto e define a identidade da plataforma.

### `css/style.css`

- Define paleta de cores para tema claro e tema escuro.
- Cria variáveis CSS para: cores, fontes e elementos repetidos.
- Usa `@font-face` para carregar fontes locais (`Montserrat` e `Roboto`).
- Implementa layout responsivo com `@media (max-width: 768px)`.
- Estiliza cabeçalho, navegação, botões, formulários, cards de curso e benefícios.
- Aplica classes como `.btn-primario`, `.btn-secundario`, `.btn-limpar`, `.btn-excluir` e `.container-form`.

### `css/admin.css`

- Complementa o `style.css` com estilos específicos do painel administrativo.
- Define a área principal do administrador, lista de usuários, itens da lista, pesquisa e ações de exclusão.
- Considera tema escuro por meio da classe `.dark` aplicada no `body`.

## 7. JavaScript: interações detectadas

### `js/tema.js`

- `alternarTema()` alterna a classe `dark` na tag `body`.
- Armazena a escolha em `localStorage.setItem("tema", "dark")` ou `localStorage.setItem("tema", "light")`.
- Ao carregar a página, verifica `localStorage.getItem("tema")` para manter a preferência.

### `js/admin.js`

- A página administrativa inicializa os dados com:

```javascript
let usuarios = JSON.parse(localStorage.getItem('usuarios_Course Tech')) || [];
```

- `salvarDados()` persiste a lista em `localStorage`.
- `renderizarLista(filtro = '')` limpa a lista do DOM e recria os elementos `<li>` dinamicamente.
- Filtra por nome ou e-mail usando `.includes()` em minúsculas.
- `formAdmin.addEventListener('submit', ...)` adiciona objeto com:
  - `nome`
  - `email`
  - `dataEnvio`
- `btnLimparCampos` reseta o formulário.
- `btnExcluirTudo` remove todos os registros após confirmação.
- `inputPesquisa` dispara atualização em tempo real.
- `window.excluirItem(index)` remove um item específico da lista e persiste a alteração.

## 8. Dados e persistência

Os dados observados são armazenados no navegador via Web Storage API:

- Tema visual: chave `tema`
- Usuários administrativos: chave `usuarios_Course Tech`

Não foi identificado no projeto um backend, API REST, banco de dados relacional ou serviço de autenticação real. A persistência é local no navegador, por meio do `localStorage`.

## 9. Informações que não puderam ser determinadas com segurança

As seguintes informações não podem ser afirmadas com base apenas nos arquivos analisados:

- não foi possível confirmar a existência de uma API real ou de um servidor backend;
- não foi possível confirmar como os dados de cadastro de usuários seriam validados em produção;
- não foi possível confirmar se os formulários de cadastro e login fazem autenticação real ou apenas navegação entre páginas;
- não foi possível confirmar se a área administrativa é uma demonstração visual ou um protótipo funcional integrado a um sistema externo;
- não foi identificado qualquer mecanismo de segurança ou criptografia para senhas, pois o projeto não contém backend ou armazenamento seguro.

## 10. Conclusão

O projeto é uma página estática de apresentação e inscrição em cursos da marca Course Tech, com páginas de cadastro, login e painel administrativo. A interface visual é organizada em HTML/CSS e a parte dinâmica mais relevante é a alternância de tema e o gerenciamento local de usuários em `localStorage`. O projeto demonstra uma implementação front-end de nicho educacional, sem backend ou banco de dados real integrado ao código observado.

## 11. Observações finais para manutenção

Para quem for continuar ou manter esse projeto, o ponto principal a observar é que o comportamento mais relevante depende exclusivamente do navegador, do DOM e do `localStorage`, não de um servidor ou de regras de negócio em um backend. Qualquer evolução futura deverá levar em conta:

- a ausência de autenticação real;
- a persistência local e não compartilhada entre usuários;
- a natureza estática do projeto;
- o uso de arquivos locais para imagens, fontes e ícones.
