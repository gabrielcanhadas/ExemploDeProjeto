/**
 * Lógica da Página Administrativa
 * Este script gerencia o cadastro dinâmico de usuários e a persistência no Local Storage.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos do DOM para manipulação via JavaScript
    const formAdmin = document.getElementById('formAdmin');
    const nomeInput = document.getElementById('nomeAdmin');
    const emailInput = document.getElementById('emailAdmin');
    const listaUsuariosUl = document.getElementById('listaUsuarios');
    const btnLimparCampos = document.getElementById('btnLimparCampos');
    const btnExcluirTudo = document.getElementById('btnExcluirTudo');
    const inputPesquisa = document.getElementById('inputPesquisa');

    // Inicialização da lista de usuários a partir do Local Storage (Requisito: Web Storage API)
    // Se não houver dados, inicializa como um array vazio.
    let usuarios = JSON.parse(localStorage.getItem('usuarios_Course Tech')) || [];

    /**
     * Função para salvar o estado atual do array 'usuarios' no Local Storage.
     */
    const salvarDados = () => {
        localStorage.setItem('usuarios_Course Tech', JSON.stringify(usuarios));
    };

    /**
     * Função para renderizar a lista de usuários dinamicamente no HTML.
     * @param {string} filtro - Termo de pesquisa para filtrar a lista.
     */
    const renderizarLista = (filtro = '') => {
        // Limpa a lista atual antes de renderizar novamente (Requisito: DOM API)
        listaUsuariosUl.innerHTML = '';
        
        // Filtra os usuários com base no nome ou e-mail (Requisito: Opção de pesquisa)
        const usuariosFiltrados = usuarios.filter(usuario => 
            usuario.nome.toLowerCase().includes(filtro.toLowerCase()) || 
            usuario.email.toLowerCase().includes(filtro.toLowerCase())
        );

        // Cria os elementos da lista dinamicamente para cada usuário filtrado
        usuariosFiltrados.forEach((usuario, index) => {
            const li = document.createElement('li');
            li.className = 'item-usuario';
            // Define o conteúdo da linha com data e campos do formulário (Requisito: Data e 2 campos)
            li.innerHTML = `
                <div>
                    <strong>${usuario.nome}</strong> (${usuario.email})<br>
                    <small>Enviado em: ${usuario.dataEnvio}</small>
                </div>
                <!-- Botão para excluir um item específico (Requisito: Excluir determinado item) -->
                <button class="btn-excluir" onclick="excluirItem(${index})">Excluir</button>
            `;
            listaUsuariosUl.appendChild(li);
        });
    };

    /**
     * Evento de submissão do formulário de cadastro administrativo.
     */
    formAdmin.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        
        // Cria o objeto do novo usuário com os dados do formulário e a data atual
        const novoUsuario = {
            nome: nomeInput.value,
            email: emailInput.value,
            dataEnvio: new Date().toLocaleString('pt-BR')
        };

        // Adiciona ao array, salva no Local Storage e atualiza a interface
        usuarios.push(novoUsuario);
        salvarDados();
        renderizarLista();
        formAdmin.reset(); // Limpa o formulário após o cadastro
    });

    /**
     * Evento para limpar os campos do formulário manualmente (Requisito: Limpar campos).
     */
    btnLimparCampos.addEventListener('click', () => {
        formAdmin.reset();
    });

    /**
     * Evento para excluir todos os registros da lista e do Local Storage (Requisito: Excluir todos).
     */
    btnExcluirTudo.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja excluir todos os registros?')) {
            usuarios = [];
            salvarDados();
            renderizarLista();
        }
    });

    /**
     * Evento de entrada no campo de pesquisa para filtragem em tempo real.
     */
    inputPesquisa.addEventListener('input', (e) => {
        renderizarLista(e.target.value);
    });

    /**
     * Função global para excluir um item específico da lista.
     * Definida no objeto 'window' para ser acessível pelo atributo 'onclick' do HTML dinâmico.
     * @param {number} index - O índice do usuário no array.
     */
    window.excluirItem = (index) => {
        if (confirm('Deseja excluir este usuário?')) {
            // Remove o item do array, salva e atualiza a lista (Requisito: Excluir do Local Storage)
            usuarios.splice(index, 1);
            salvarDados();
            renderizarLista(inputPesquisa.value);
        }
    };

    // Chamada inicial para exibir os dados já salvos ao carregar a página
    renderizarLista();
});