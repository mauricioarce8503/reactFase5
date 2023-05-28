const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", (event) => {
  event.preventDefault(); // evitar que la página se recarg
  const answers = ["a", "c", "a", "a", "a"]; // respuestas correctas

  let score = 0;

  // comprobar las respuestas
  for (let i = 1; i <= 5; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);

    if (!answer) {
      alert(`Por favor, responde la pregunta ${i}.`);
      return;
    }

    if (answer.value === answers[i - 1]) {
      score++;
    }
  }

  // mostrar resultados
  alert(`Obtuviste ${score} de 5 preguntas correctas.`);
});
