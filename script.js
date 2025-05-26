const perguntas = [
  {
    pergunta: "Quais são as possíveis causas da esquizofrenia?",
    alternativas: [
      "Apenas traumas psicológicos",
      "Genética, fatores ambientais e desequilíbrios químicos no cérebro",
      "Falta de vitaminas",
      "Infecções virais simples"
    ],
    correta: 1,
    explicacao: "A esquizofrenia pode ser causada por fatores genéticos, ambientais e neuroquímicos."
  },
  {
    pergunta: "Quais são sintomas comuns da esquizofrenia?",
    alternativas: [
      "Febre e dor de cabeça",
      "Alucinações, delírios, comportamento desorganizado",
      "Dificuldade para dormir e irritação leve",
      "Compulsão alimentar"
    ],
    correta: 1,
    explicacao: "Os sintomas incluem alucinações, delírios e desorganização no pensamento."
  },
  {
    pergunta: "Existem formas de prevenir a esquizofrenia?",
    alternativas: [
      "Sim, com vacina anual",
      "Sim, evitando o uso de drogas e controlando o estresse",
      "Não, é completamente imprevisível",
      "Sim, com dieta rica em ferro"
    ],
    correta: 1,
    explicacao: "Evitar drogas e cuidar da saúde mental pode reduzir riscos, embora não haja prevenção absoluta."
  },
  {
    pergunta: "Quais são os tratamentos disponíveis para a esquizofrenia?",
    alternativas: [
      "Apenas cirurgia",
      "Remédios naturais e meditação",
      "Antipsicóticos, terapia psicológica e apoio familiar",
      "Ficar em repouso absoluto"
    ],
    correta: 2,
    explicacao: "O tratamento envolve medicamentos, psicoterapia e suporte familiar."
  }
];

let currentQuestion = 0;
let score = 0;

const quizEl = document.getElementById("quiz");
const nextButton = document.getElementById("nextButton");
const scoreEl = document.getElementById("score");

function mostrarPergunta() {
  const q = perguntas[currentQuestion];
  quizEl.innerHTML = `
    <h2>${q.pergunta}</h2>
    ${q.alternativas.map((alt, i) => `
      <div class="option" onclick="responder(${i})">${alt}</div>
    `).join('')}
  `;
  nextButton.style.display = "none";
}

function responder(selecionada) {
  const q = perguntas[currentQuestion];
  const opcoes = document.querySelectorAll(".option");

  opcoes.forEach((el, i) => {
    el.style.pointerEvents = "none";
    if (i === q.correta) {
      el.classList.add("correct");
    } else if (i === selecionada) {
      el.classList.add("incorrect");
    }
  });

  if (selecionada === q.correta) {
    score++;
  }

  quizEl.innerHTML += `<p><strong>Explicação:</strong> ${q.explicacao}</p>`;
  nextButton.style.display = "inline-block";
}

nextButton.onclick = () => {
  currentQuestion++;
  if (currentQuestion < perguntas.length) {
    mostrarPergunta();
  } else {
    quizEl.innerHTML = "";
    nextButton.style.display = "none";
    scoreEl.classList.remove("hidden");
    scoreEl.innerHTML = `🎉 Você acertou ${score} de ${perguntas.length} perguntas!`;
  }
};

mostrarPergunta();
