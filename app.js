const correctAnswers = ["C", "B", "A", "A", 'B'];

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const resultPara = document.querySelector(".result-para");
const body = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  // show result on page
  body.scrollIntoView({ behavior: "smooth", block: "start" });
  result.classList.toggle("d-none");

  // animate score
  let output = 0;
  const timer = setInterval(() => {
    resultPara.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
