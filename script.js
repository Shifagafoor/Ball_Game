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
            if (container.children.length < 10) {
                container.appendChild(selectedBall);
                selectedBall = null; 
            }
        } else {
            betweenContainers(container);
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
    let sourceContainer = null;

    for (let container of containers) {
        if (container !== clickedContainer && container.children.length > 0) {
            sourceContainer = container;
            break;
        }
    }

    if (sourceContainer && clickedContainer.children.length < 10) {
        const ball = sourceContainer.firstElementChild;
        clickedContainer.appendChild(ball);
    }
}
