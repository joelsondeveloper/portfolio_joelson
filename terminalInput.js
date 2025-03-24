const terminalInput = document.getElementById("inputTerminal");
const terminalOutput = document.querySelector(".output");
const cursor = document.querySelector(".letra-piscar");

const jokes = [
  "Por que o programador foi preso? Porque ele quebrou o loop infinito!",
  "Um SQL entra num bar, vai até duas mesas e diz: 'Posso juntar vocês?'",
  "Como um programador se suicida? Saindo do loop."
];

const facts = [
  "Eu comecei com Front-End, mas estou expandindo para Back-End!",
  "Meu editor favorito é o VS Code.",
  "Atualmente, estou estudando DSA para melhorar minha lógica."
];

function handleCommand(command) {
  let response = "";

  switch (command.toLowerCase()) {
    case "/help":
      response = `Comandos disponíveis:<br>/Whoami - Sobre mim<br>/Skills - Minhas habilidades<br>/Stack - Meu stack atual<br>/Learning - O que estou estudando<br>/Favorite {tech} - Minha opinião sobre uma tech<br>/RandomFact - Uma curiosidade sobre mim<br>/Joker - Uma piada sobre programação<br>/Clear - Limpa o terminal`;
      break;
    case "/whoami":
      response = "Olá! Sou Joelson, desenvolvedor Front-End apaixonado por tecnologia.";
      break;
    case "/skills":
      response = "HTML, CSS, JavaScript, React, Git & GitHub, e estudando Back-End.";
      break;
    case "/stack":
      response = "Atualmente trabalho com React.js no Front-End e estou aprendendo Node.js.";
      break;
    case "/learning":
      response = "Estou aprendendo Back-End e melhorando minhas habilidades com DSA.";
      break;
    case "/clear":
      terminalOutput.innerHTML = "";
      return;
    case "/randomfact":
      response = facts[Math.floor(Math.random() * facts.length)];
      break;
    case "/joker":
      response = jokes[Math.floor(Math.random() * jokes.length)];
      break;
    default:
      if (command.startsWith("/favorite ")) {
        let tech = command.split(" ")[1];
        response = `Gosto bastante de ${tech}, mas sempre tem algo novo para aprender!`;
      } else {
        response = "Comando não reconhecido. Digite /Help para ver os disponíveis.";
      }
  }

  appendToTerminal(`$ ${command}`);
  appendToTerminal(response);
  scrollToBottom(); // Move para a última linha após inserir a resposta
}

function appendToTerminal(text) {
  const newLine = document.createElement("p");
  newLine.innerHTML = text;
  terminalOutput.appendChild(newLine);
}

terminalInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleCommand(terminalInput.value);
    terminalInput.value = "";
  }
});

// Cursor piscando sempre ao final do input
function updateCursor() {
  terminalInput.focus(); // Mantém o input sempre focado
}


