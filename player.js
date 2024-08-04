const audio = 
    document.getElementById('myAudio');
const playPauseBtn = 
    document.getElementById('playPauseBtn');
const progressBar = 
    document.getElementById('progressBar');
const volumeControl = 
    document.getElementById('volumeControl');

let isPlaying = false;

playPauseBtn.addEventListener(
    'click', togglePlay
);
volumeControl.addEventListener(
    'input', adjustVolume
);
audio.addEventListener(
    'timeupdate', updateProgress
);

audio.volume = 0.7;

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

function adjustVolume() {
    audio.volume = volumeControl.value;
}

function updateProgress() {
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progress = 
        (currentTime / duration) * 100;
    progressBar.style.width = progress + '%';
}
