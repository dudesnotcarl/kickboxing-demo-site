const timerDisplay = document.getElementById("timer");
const startTimerButton = document.getElementById("start-timer");

startTimerButton.addEventListener("click" , () => {
    let totalTime = 3 * 60;
    let isPaused = false;

    const interval = setInterval(() => {
        if (!isPaused) {
            const minutes = Math.floor(totalTime / 60);
            const seconds = totalTime % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
            totalTime--;

            if (totalTime < 0) {
                clearInterval(interval);
                timerSound.play();
                alert("Round complete.");
            }
        }
    }, 1000);

    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Pause';
    document.getElementById("timer-section").appendChild(pauseButton);

    pauseButton.addEventListener("click", () => {
        isPaused = !isPaused;
        pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
    });
});

const images = ["kick1.jpg", "kick2.jpg", "kick3.jpg"];
let currentImageIndex = 0;

const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentImageIndex];
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselImage.src = images[currentImageIndex];
});
