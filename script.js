const balls = document.querySelectorAll('.number');
const containers = document.querySelectorAll('.container');

let selectedBall = null;

balls.forEach(ball => {
    ball.addEventListener('click', () => {
        selectedBall = ball;
    });
});

containers.forEach(container => {
    container.addEventListener('click', () => {
        if (selectedBall) {
            if (selectedBall.parentNode) {
                selectedBall.parentNode.removeChild(selectedBall);
            }

            // Append the ball to the new container if it has space
            if (container.children.length < 10) {
                container.appendChild(selectedBall);
                selectedBall = null; // Reset selectedBall after moving it
            }
        }
    });
});


function toContainer(ball) {
    for (let container of containers) {
        if (container.children.length < 10) {
            container.appendChild(ball);
            break;
        }
    }
}

function betweenContainers(clickedContainer) {
    let sourceContainer;
    for (let container of containers) {
        if (container.children.length > 0) {
            sourceContainer = container;
            break;
        }
    }

    if (sourceContainer && sourceContainer !== clickedContainer && clickedContainer.children.length < 10) {
        const ball = sourceContainer.firstElementChild;
        clickedContainer.appendChild(ball);
    }
}

