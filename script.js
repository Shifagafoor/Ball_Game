const balls = document.querySelectorAll('.number');
const containers = document.querySelectorAll('.container');

balls.forEach(ball => {
    ball.addEventListener('click', () => {
        selectedBall = ball; 
        console.log(selectedBall)
    });
});

let selectedBall = null;
containers.forEach(container => {
    container.addEventListener('click', () => {
        if (selectedBall) {
            container.insertBefore(selectedBall, container.firstChild);
            selectedBall = null;
        }else{
            let cont = container.firstChild;

            containers.forEach((jar) => {
                jar.addEventListener('click' , () => {
                    jar.appendChild(cont)
                    cont = ''
                })
                console.log(jar)
            })
        }
    });
});
