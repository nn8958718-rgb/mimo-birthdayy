
document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const surprise = document.getElementById("surprise");
  const letter = document.getElementById("letter");
  const cakeButton = document.getElementById("cakeButton");
  const openLetterButton = document.getElementById("openLetterButton");

  cakeButton.addEventListener("click", function () {
    intro.classList.add("hidden");
    surprise.classList.remove("hidden");
  });

  openLetterButton.addEventListener("click", function () {
    surprise.classList.add("hidden");
    letter.classList.remove("hidden");
  });
});
