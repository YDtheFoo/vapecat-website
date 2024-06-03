const vapeCatEnter = "./VapeCatEnter.mp4";
const vapeCatLoop = "./VapeCatLoop.mp4";

window.onload = () => playVapeCat();

function playVapeCat() {
    const vapeCatVideoEnter = document.querySelector(".vape-cat-video-enter");
    const vapeCatVideoLoop = document.querySelector(".vape-cat-video-loop");

    vapeCatVideoEnter.src = vapeCatEnter;
    vapeCatVideoLoop.src = vapeCatLoop;

    vapeCatVideoEnter.onended = () => {
        vapeCatVideoEnter.style.display = "none";
        vapeCatVideoLoop.style.display = "block";
        vapeCatVideoLoop.play();
    };
}
