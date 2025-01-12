const balls = document.querySelectorAll('.number');
const containers = document.querySelectorAll('.container');

balls.forEach(ball => {
    ball.addEventListener('click', () => {
        moveBallToContainer(ball);
    });
});

// Add event listeners to each container
containers.forEach(container => {
    container.addEventListener('click', () => {
        moveBallBetweenContainers(container);
    });
});

// Function to move a ball to the first container with space
function moveBallToContainer(ball) {
    // Find the first container with space
    for (let container of containers) {
        if (container.children.length < 10) {
            container.appendChild(ball);
            ball.style.display = 'block'; // Make sure the ball is visible in the container
            break;
        }
    }
}

// Function to move a ball from the first non-empty container to the clicked container
function moveBallBetweenContainers(clickedContainer) {
    // Find the first non-empty container
    let sourceContainer;
    for (let container of containers) {
        if (container.children.length > 0) {
            sourceContainer = container;
            break;
        }
    }

    // Move the last ball from the source container to the clicked container
    if (sourceContainer && sourceContainer !== clickedContainer && clickedContainer.children.length < 10) {
        const ball = sourceContainer.lastElementChild;
        clickedContainer.appendChild(ball);
    }
}
