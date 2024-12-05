document.addEventListener('DOMContentLoaded', () => {
    // Seleciona a imagem clicável e o popup
    const infoImage = document.getElementById('info-image');
    const infoPopup = document.getElementById('info-popup');
  
    // Seleciona os elementos onde o nome e o e-mail serão exibidos
    const nameSpan = document.getElementById('name');
    const emailSpan = document.getElementById('email');
  
    // Dados que serão exibidos ao clicar
    const userInfo = {
      name: 'João Silva', // Nome fictício
      email: 'joao.silva@example.com' // E-mail fictício
    };
  
    // Adiciona um evento de clique à imagem
    infoImage.addEventListener('click', () => {
      // Preenche os campos de nome e e-mail com os dados
      nameSpan.textContent = userInfo.name;
      emailSpan.textContent = userInfo.email;
  
      // Alterna a classe "active" no popup para exibir/ocultar
      infoPopup.classList.toggle('active');
    });
  });
  