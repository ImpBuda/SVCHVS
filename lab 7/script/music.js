const audioBtn = document.querySelectorAll('.Title2')[0];
const audio = new Audio('music/audio.mp3');

audioBtn.addEventListener('click', e => toggleAudio(e.currentTarget.firstElementChild))

let isMuted = true;

function toggleAudio(target) {
    isMuted = !isMuted;
    isMuted ? audio.pause() : audio.play();
    isMuted ? target.style.background = 'url(../icons/stop.png)' : target.style.background = 'url(../icons/play.png)'
}
