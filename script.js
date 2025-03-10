document.addEventListener('DOMContentLoaded', () => {
    const vidasCount = document.getElementById('vidas-count');
    let vidas = 5;
      
    document.getElementById('menu-btn').addEventListener('click', () => {
      alert('Menu clicado! (Aqui pode abrir o menu lateral)');
    });
      
    function perderVida() {
      if (vidas > 0) {
        vidas--;
        vidasCount.textContent = vidas;
      } else {
        alert('Você não tem mais vidas!');
      }
    }
      
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        perderVida();
      });
    });
  });
  
