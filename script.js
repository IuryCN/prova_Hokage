// PARTE 1: Lista de perguntas e respostas
let erros = []; // Armazena perguntas erradas
const perguntas = [
  {
    pergunta: "Quem se torna Hokage após Tsunade?",
    respostas: [
      { opcao: "Naruto", correto: false },
      { opcao: "Kakashi", correto: true },
      { opcao: "Danzo", correto: false },
      { opcao: "Iruka", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do irmão do Killer Bee?",
    respostas: [
      { opcao: "Raikage", correto: true },
      { opcao: "Darui", correto: false },
      { opcao: "Omoi", correto: false },
      { opcao: "Zabuza", correto: false }
    ]
  },
  {
    pergunta: "O que deve ser feito se um membro do time for capturado durante uma missão de rank A?",
    respostas: [
      { opcao: "Abandonar a missão e resgatá-lo imediatamente", correto: false },
      { opcao: "Considerá-lo morto e continuar a missão", correto: true },
      { opcao: "Avisar a vila e esperar ordens", correto: false },
      { opcao: "Usar um jutsu de tempo para voltar no passado", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome completo do protagonista da série?",
    respostas: [
      { opcao: "Naruto Hyuuga", correto: false },
      { opcao: "Naruto Uzumaki", correto: true },
      { opcao: "Naruto Hatake", correto: false },
      { opcao: "Naruto Sarutobi", correto: false }
    ]
  },
  {
    pergunta: "Qual é o objetivo principal da Akatsuki?",
    respostas: [
      { opcao: "Proteger as vilas", correto: false },
      { opcao: "Vingar o clã Uchiha", correto: false },
      { opcao: "Capturar os bijuus", correto: true },
      { opcao: "Matar o Hokage", correto: false }
    ]
  },
  {
    pergunta: "Qual atitude é mais valorizada por um ninja em missão?",
    respostas: [
      { opcao: "Força bruta", correto: false },
      { opcao: "Lealdade ao time", correto: true },
      { opcao: "Individualismo", correto: false },
      { opcao: "Velocidade extrema", correto: false }
    ]
  },
  {
    pergunta: "Durante a prova escrita, o verdadeiro objetivo era…",
    respostas: [
      { opcao: "Testar o conhecimento dos participantes", correto: false },
      { opcao: "Ver quem era o melhor aluno da academia", correto: false },
      { opcao: "Avaliar a habilidade de colar sem ser pego", correto: true },
      { opcao: "Fazer todos desistirem", correto: false }
    ]
  },
  {
    pergunta: "Qual técnica Naruto aprende com o Jiraiya que usa o chakra da Kyuubi?",
    respostas: [
      { opcao: "Rasengan", correto: false },
      { opcao: "Modo Sábio", correto: false },
      { opcao: "Modo de Chakra da Kyuubi", correto: true },
      { opcao: "Chidori", correto: false }
    ]
  },
  {
    pergunta: "Quem é o sensei do Time 7?",
    respostas: [
      { opcao: "Might Guy", correto: false },
      { opcao: "Jiraiya", correto: false },
      { opcao: "Kakashi Hatake", correto: true },
      { opcao: "Iruka Umino", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior risco ao usar técnicas proibidas (kinjutsus)?",
    respostas: [
      { opcao: "Gastar muito chakra", correto: false },
      { opcao: "Falhar no exame Chūnin", correto: false },
      { opcao: "Prejudicar o próprio corpo ou a alma", correto: true },
      { opcao: "Ser suspenso por uma semana", correto: false }
    ]
  },
  {
    pergunta: "Se uma missão se torna mais perigosa do que o previsto, o que o time deve fazer?",
    respostas: [
      { opcao: "Continuar a qualquer custo", correto: false },
      { opcao: "Encerrar a missão e reportar à vila", correto: true },
      { opcao: "Esconder-se até o perigo passar", correto: false },
      { opcao: "Dividir-se para cobrir mais terreno", correto: false }
    ]
  },
  {
    pergunta: "Quem mata o Itachi Uchiha?",
    respostas: [
      { opcao: "Kakashi", correto: false },
      { opcao: "Naruto", correto: false },
      { opcao: "Sasuke", correto: true },
      { opcao: "Madara", correto: false }
    ]
  },
  {
    pergunta: "Qual é a principal função de um time de ninjas em uma missão de reconhecimento?",
    respostas: [
      { opcao: "Eliminar o inimigo rapidamente", correto: false },
      { opcao: "Testar novas técnicas em campo", correto: false },
      { opcao: "Obter informações sem ser detectado", correto: true },
      { opcao: "Proteger a vila com força total", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da raposa de nove caudas selada dentro de Naruto?",
    respostas: [
      { opcao: "Kurama", correto: true },
      { opcao: "Shukaku", correto: false },
      { opcao: "Gyūki", correto: false },
      { opcao: "Matatabi", correto: false }
    ]
  }
];



const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const botaoRecomecar = document.getElementById("botao-recomecar");

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  respostasElemento.innerHTML = "";

  perguntaAtual.respostas.forEach((resposta) => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;

    botao.onclick = function () {
      document.querySelectorAll(".botao-resposta").forEach(btn => btn.disabled = true);

      if (resposta.correto) {
        botao.classList.add("correta");
        acertos++;
      } else {
        botao.classList.add("errada");
        const correta = perguntaAtual.respostas.find(r => r.correto);
        erros.push({ pergunta: perguntaAtual.pergunta, correta: correta.opcao });

        document.querySelectorAll(".botao-resposta").forEach(btn => {
          if (btn.innerText === correta.opcao) {
            btn.classList.add("correta");
          }
        });
      }

      setTimeout(() => {
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
          carregarPergunta();
        } else {
          finalizarJogo();
        }
      }, 1000);
    };

    respostasElemento.appendChild(botao);
  });
}

function finalizarJogo() {
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";

  const total = perguntas.length;
  const errosTotal = total - acertos;

  let mensagemFinal = "";

  if (acertos === total) {
    mensagemFinal = "Incrível! Você está pronto para ser Hokage! 🍥🔥";
  } else if (acertos >= 10) {
    mensagemFinal = "Muito bem! Você está no caminho para se tornar um grande Shinobi! 💪🍃";
  } else if (acertos >= 5) {
    mensagemFinal = "Bom esforço! Mas ainda precisa treinar com o Kakashi! 📚⚡";
  } else {
    mensagemFinal = "Orochimaru e eu tá rindo de você... Bora treinar mais! 😅🐍";
  }

  textoFinal.innerHTML = `
    Você acertou <strong>${acertos}</strong> e errou <strong>${errosTotal}</strong> de <strong>${total}</strong> perguntas.<br><br>
    ${mensagemFinal}
  `;
}

botaoRecomecar.onclick = () => {
  indiceAtual = 0;
  acertos = 0;
  erros = [];
  conteudoFinal.style.display = "none";
  conteudo.style.display = "flex";
  carregarPergunta();
};

carregarPergunta();