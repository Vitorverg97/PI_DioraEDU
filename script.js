document.addEventListener('DOMContentLoaded', () => {
    const vidasCount = document.getElementById('vidas-count');
    let vidas = 5;
  
    // Botão menu (exemplo, pode abrir um menu lateral depois)
    document.getElementById('menu-btn').addEventListener('click', () => {
      alert('Menu clicado! (Aqui pode abrir o menu lateral)');
    });
  
    // Função para perder uma vida (pode ser chamada ao clicar em um desafio)
    function perderVida() {
      if (vidas > 0) {
        vidas--;
        vidasCount.textContent = vidas;
      } else {
        alert('Você não tem mais vidas!');
      }
    }
  
    // Exemplo: clicar em cada card perde 1 vida
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        perderVida();
      });
    });
  });
  