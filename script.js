// Seleciona todos os links das abas
const tabs = document.querySelectorAll('.tab-link');
// Seleciona todo o conteúdo das abas
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        event.preventDefault();

        // Remove a classe "active" de todas as abas e conteúdo
        tabs.forEach(item => item.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Adiciona a classe "active" na aba e no conteúdo clicado
        tab.classList.add('active');
        const target = document.querySelector(tab.getAttribute('href'));
        target.classList.add('active');
    });
});
