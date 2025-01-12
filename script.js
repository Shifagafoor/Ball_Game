const balls = document.querySelectorAll('.number');
const containers = document.querySelectorAll('.container');

balls.forEach(ball => {
    ball.addEventListener('click', () => {
        moveBallToContainer(ball);
    });
});

containers.forEach(container => {
    container.addEventListener('click', () => {
        moveBallBetweenContainers(container);
    });
});

function moveBallToContainer(ball) {
    for (let container of containers) {
        if (container.children.length < 10) {
            container.appendChild(ball);
            ball.style.display = 'block'; // Make sure the ball is visible in the container
            break;
        }
    }
}

function moveBallBetweenContainers(clickedContainer) {
    let sourceContainer;
    for (let container of containers) {
        if (container.children.length > 0) {
            sourceContainer = container;
            break;
        }
    }

    if (sourceContainer && sourceContainer !== clickedContainer && clickedContainer.children.length < 10) {
        const ball = sourceContainer.lastElementChild;
        clickedContainer.appendChild(ball);
    }
}
