// Variável para rastrear o estado do filtro aberto
let filtroAtivo = null;

function mostrarOpcoes(tipoFiltro) {
    const container = document.getElementById('opcoes-filtro');

    // Se o mesmo filtro for clicado novamente, fecha o menu
    if (filtroAtivo === tipoFiltro) {
        container.innerHTML = ''; // Limpa as opções de filtro
        filtroAtivo = null; // Reseta o estado
        return;
    }

    // Atualiza o estado para o filtro atual
    filtroAtivo = tipoFiltro;

    // Exibe as opções do filtro selecionado
    container.innerHTML = ''; // Limpa qualquer filtro anterior
    if (tipoFiltro === 'categoria') {
        container.innerHTML = `
            <label><input type="radio" name="categoria" value="matematica" onclick="filtrarLivros('categoria', 'matematica')"> Matemática</label><br>
            <label><input type="radio" name="categoria" value="educacao" onclick="filtrarLivros('categoria', 'educacao')"> Educação</label><br>
            <label><input type="radio" name="categoria" value="saude" onclick="filtrarLivros('categoria', 'saude')"> Saúde</label><br>
            <label><input type="radio" name="categoria" value="psicologia" onclick="filtrarLivros('categoria', 'psicologia')"> Psicologia</label><br>
            <label><input type="radio" name="categoria" value="historia" onclick="filtrarLivros('categoria', 'historia')"> História</label><br>
        `;
    } else if (tipoFiltro === 'nota') {
        container.innerHTML = `
            <label><input type="radio" name="nota" value="1" onclick="filtrarLivros('nota', '1')"> 1 Estrela</label><br>
            <label><input type="radio" name="nota" value="2" onclick="filtrarLivros('nota', '2')"> 2 Estrelas</label><br>
            <label><input type="radio" name="nota" value="3" onclick="filtrarLivros('nota', '3')"> 3 Estrelas</label><br>
            <label><input type="radio" name="nota" value="4" onclick="filtrarLivros('nota', '4')"> 4 Estrelas</label><br>
            <label><input type="radio" name="nota" value="5" onclick="filtrarLivros('nota', '5')"> 5 Estrelas</label><br>
        `;
    } else if (tipoFiltro === 'editora') {
        container.innerHTML = `
            <label for="editora-input">Digite a editora:</label>
            <input type="text" id="editora-input" oninput="filtrarPorEditora()">
        `;
    } else if (tipoFiltro === 'titulo') {
        container.innerHTML = `
            <label for="titulo-input">Digite o título:</label>
            <input type="text" id="titulo-input" oninput="filtrarPorTitulo()">
        `;
    }
}

function filtrarLivros(tipoFiltro, valorFiltro) {
    const livros = document.querySelectorAll('.book-card');
    livros.forEach(livro => {
        const filtroValor = livro.getAttribute(`data-${tipoFiltro}`);
        if (filtroValor === valorFiltro) {
            livro.style.display = 'block';
        } else {
            livro.style.display = 'none';
        }
    });
}

function filtrarPorTitulo() {
    const input = document.getElementById('titulo-input').value.toLowerCase();
    const livros = document.querySelectorAll('.book-card');
    livros.forEach(livro => {
        const titulo = livro.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(input)) {
            livro.style.display = 'block';
        } else {
            livro.style.display = 'none';
        }
    });
}

function filtrarPorEditora() {
    const input = document.getElementById('editora-input').value.toLowerCase();
    const livros = document.querySelectorAll('.book-card');
    livros.forEach(livro => {
        const editora = livro.getAttribute('data-editora').toLowerCase();
        if (editora.includes(input)) {
            livro.style.display = 'block';
        } else {
            livro.style.display = 'none';
        }
    });
}

