const screens = document.querySelectorAll(".screen");
const start_btn = document.getElementById("start-btn");
const balls = document.querySelectorAll(".number");
const containers = document.querySelectorAll(".container");
const restartBtn = document.getElementById("restart-btn");

start_btn.addEventListener("click", () => screens[0].classList.add("up"));

let selectedContainer = null;
let selectedBall = null;

containers.forEach((container) => {
  container.addEventListener("click", () => {
    selectedContainer = container;
  });
});

balls.forEach((ball) => {
  ball.addEventListener("click", () => {
    if (selectedContainer) {
      selectedContainer.appendChild(ball);
      selectedContainer = null;
    } else {
      selectedBall = ball;
    }
  });
});

containers.forEach((container) => {
  container.addEventListener("click", () => {
    if (selectedBall) {
      container.appendChild(selectedBall);
      selectedBall = null;
    }
  });
});

restartBtn.addEventListener("click", () => {
  selectedBall = null;
  selectedContainer = null;

  const ballsContainer = document.querySelectorAll(".container .ball");

  ballsContainer.forEach((ball) => {

    console.log(ball);
  });

});
