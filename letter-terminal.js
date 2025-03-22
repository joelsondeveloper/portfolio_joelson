const logos = document.querySelectorAll('.fa-brands');

function createMatrixEffect(logo) {
  const matrixContainer = document.createElement('div');
  matrixContainer.classList.add('matrix-container');
  logo.style.position = 'relative';
  logo.appendChild(matrixContainer);

  function spawnLetters() {
    const letter = document.createElement('span');
    letter.classList.add('matrix-letter');
    letter.textContent = String.fromCharCode(0x30A0 + Math.random() * 96); // Caracteres aleatórios estilo Matrix
    letter.style.left = `${Math.random() * logo.clientWidth}px`;
    letter.style.bottom = '0px';
    matrixContainer.appendChild(letter);
    
    setTimeout(() => {
      letter.remove();
    }, 1500);
  }

  setInterval(spawnLetters, 100);
}

function animateLogo(logo) {
  const startX = Math.random() * window.innerWidth;
  const endY = window.innerHeight + 100;
  const duration = Math.random() * 4000 + 3000; // Duração aleatória

  logo.style.left = `${startX}px`;
  logo.style.opacity = 1;
  logo.style.position = 'absolute';

  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);
    const y = percentage * endY;

    logo.style.top = `${y}px`;

    if (percentage < 1) {
      window.requestAnimationFrame(step);
    } else {
      logo.style.opacity = 0; // Desaparece no final
      setTimeout(() => {
        logo.style.top = '-100px'; // Reinicia no topo
        animateLogo(logo); // Reinicia a animação
      }, 1000);
    }
  }

  window.requestAnimationFrame(step);
}

logos.forEach(logo => {
  createMatrixEffect(logo);
  animateLogo(logo);
});
