const texts = {
    default: 'I\'m', // texto inicial do primeiro
    hover: 'Sobre',  // texto ao passar o mouse no primeiro
    default2: 'Joelson', // texto inicial do segundo
    hover2: 'Projetos',  // texto ao passar o mouse no segundo
    default3: 'Developer', // texto inicial do terceiro
    hover3: 'Contato'  // texto ao passar o mouse no terceiro
  };
  
  const textElement = document.getElementById('text1');
  const textElement2 = document.getElementById('text2');
  const textElement3 = document.getElementById('text3');
  let isHovering = false; // Variável para controlar o hover do primeiro
  let isHovering2 = false; // Variável para controlar o hover do segundo
  let isHovering3 = false; // Variável para controlar o hover do terceiro
  let isAnimating = false; // Variável para controlar a animação do primeiro
  let isAnimating2 = false; // Variável para controlar a animação do segundo
  let isAnimating3 = false; // Variável para controlar a animação do terceiro
  
  // Função para digitar o texto
  function typeWriter(element, text, callback) {
    let i = 0;
    element.textContent = ''; // Limpa o texto antes de começar
    let interval = setInterval(() => {
      element.textContent = text.substring(0, i + 1);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        callback(); // Chama o callback quando terminar
      }
    }, 150); // Velocidade de digitação
  }
  
  // Função para apagar o texto
  function deleteText(element, text, callback) {
    let i = text.length;
    let interval = setInterval(() => {
      element.textContent = text.substring(0, i - 1);
      i--;
      if (i === 0) {
        clearInterval(interval);
        callback(); // Chama o callback quando terminar
      }
    }, 100); // Velocidade de remoção
  }
  
  // Troca de texto e digitação (para o primeiro texto)
  function changeText(element, isHover) {
    if (isAnimating) return; // Se já houver animação, não inicia uma nova animação
    isAnimating = true; // Marca que está em animação
  
    const newText = isHover ? texts.hover : texts.default;
  
    deleteText(element, element.textContent, () => {
      typeWriter(element, newText, () => {
        isAnimating = false; // Após a animação, marca como não animando
        // Verifica se o hover foi alterado durante a animação
        if (isHovering !== isHover) {
          changeText(element, isHovering); // Reinicia a animação com o estado correto
        }
      });
    });
  }
  
  // Troca de texto e digitação (para o segundo texto)
  function changeText2(element, isHover) {
    if (isAnimating2) return; // Se já houver animação, não inicia uma nova animação
    isAnimating2 = true; // Marca que está em animação
  
    const newText = isHover ? texts.hover2 : texts.default2;
  
    deleteText(element, element.textContent, () => {
      typeWriter(element, newText, () => {
        isAnimating2 = false; // Após a animação, marca como não animando
        // Verifica se o hover foi alterado durante a animação
        if (isHovering2 !== isHover) {
          changeText2(element, isHovering2); // Reinicia a animação com o estado correto
        }
      });
    });
  }
  
  // Troca de texto e digitação (para o terceiro texto)
  function changeText3(element, isHover) {
    if (isAnimating3) return; // Se já houver animação, não inicia uma nova animação
    isAnimating3 = true; // Marca que está em animação
  
    const newText = isHover ? texts.hover3 : texts.default3;
  
    deleteText(element, element.textContent, () => {
      typeWriter(element, newText, () => {
        isAnimating3 = false; // Após a animação, marca como não animando
        // Verifica se o hover foi alterado durante a animação
        if (isHovering3 !== isHover) {
          changeText3(element, isHovering3); // Reinicia a animação com o estado correto
        }
      });
    });
  }
  
  // Função que gerencia o hover (entrar e sair) do primeiro texto
  function handleHover(isHover) {
    if (isHover === isHovering) return; // Evita repetir a animação se já estiver no estado desejado
    isHovering = isHover; // Atualiza o estado de hover do primeiro
    changeText(textElement, isHover);
  }
  
  // Função que gerencia o hover (entrar e sair) do segundo texto
  function handleHover2(isHover) {
    if (isHover === isHovering2) return; // Evita repetir a animação se já estiver no estado desejado
    isHovering2 = isHover; // Atualiza o estado de hover do segundo
    changeText2(textElement2, isHover);
  }
  
  // Função que gerencia o hover (entrar e sair) do terceiro texto
  function handleHover3(isHover) {
    if (isHover === isHovering3) return; // Evita repetir a animação se já estiver no estado desejado
    isHovering3 = isHover; // Atualiza o estado de hover do terceiro
    changeText3(textElement3, isHover);
  }
  
  // Adiciona eventos de hover para ativar a troca de texto no primeiro elemento
  document.querySelector('#text1').addEventListener('mouseenter', () => handleHover(true));
  document.querySelector('#text1').addEventListener('mouseleave', () => handleHover(false));
  
  // Adiciona eventos de hover para ativar a troca de texto no segundo elemento
  document.querySelector('#text2').addEventListener('mouseenter', () => handleHover2(true));
  document.querySelector('#text2').addEventListener('mouseleave', () => handleHover2(false));
  
  // Adiciona eventos de hover para ativar a troca de texto no terceiro elemento
  document.querySelector('#text3').addEventListener('mouseenter', () => handleHover3(true));
  document.querySelector('#text3').addEventListener('mouseleave', () => handleHover3(false));
  
  // Inicia com o texto padrão para os três elementos
  typeWriter(textElement, texts.default, () => {});
  typeWriter(textElement2, texts.default2, () => {});
  typeWriter(textElement3, texts.default3, () => {});
  