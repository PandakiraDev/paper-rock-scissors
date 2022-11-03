const choices = ["papier", "kamień", "nożyce"];
const h2 = document.querySelector("h2");

const game = (e) => {
  const choice = e.target.value;
  const randomIndex = Math.floor(Math.random() * choices.length);
  const win = "Wygrywasz!";
  const lose = "Przegrywasz!";
  const prefix = `Przeciwnik wybrał ${choices[randomIndex]}. `;
  if (choices[randomIndex] === choice) {
    h2.textContent = `Przeciwnik wybrał ${choices[randomIndex]}. Jest remis!`;
  } else if (randomIndex === 0 && choice === "nożyce") {
    h2.textContent = prefix + win;
  } else if (randomIndex === 1 && choice === "papier") {
    h2.textContent = prefix + win;
  } else if (randomIndex === 2 && choice === "kamień") {
    h2.textContent = prefix + win;
  } else {
    h2.textContent = prefix + lose;
  }
  console.log(e.target.value);
  console.log(choices[randomIndex]);
};

document.querySelector("#papier").addEventListener("click", game);
document.querySelector("#kamien").addEventListener("click", game);
document.querySelector("#nozyce").addEventListener("click", game);
