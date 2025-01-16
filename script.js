const balls = document.querySelectorAll('.number');
const containers = document.querySelectorAll('.container');

let selectedContainer = null;
let selectedBall = null;

containers.forEach(container => {
    container.addEventListener('click', () => {
        selectedContainer = container;
        console.log('Selected container:', selectedContainer);
    });
});

balls.forEach(ball => {
    ball.addEventListener('click', () => {
        if (selectedContainer) {
            selectedContainer.appendChild(ball);
            selectedContainer = null; 
        } else {
            selectedBall = ball; 
        }
    });
});

containers.forEach(container => {
    container.addEventListener('click', () => {
        if (selectedBall) {
            container.appendChild(selectedBall);
            selectedBall = null; 
        }
    });
});
