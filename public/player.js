document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio');
    const playBtn = document.getElementById('playb');
    const prevBtn = document.getElementById('prevb');
    const nextBtn = document.getElementById('nextb');
    const progressBar = document.getElementById('prog1');
    const songTitle = document.getElementById('nome');
    
    const songs = [
        'Come Home',
        'Scarlet Fields - The Horrors',
        'PROMETHAZINE - xn88ax',
        'Robbery 95'
    ];
    
    let currentSongIndex = 0;
    let isPlaying = false;
    
    function loadSong() {
        const song = songs[currentSongIndex];
        audioPlayer.src = `${song}.mp3`;
        songTitle.textContent = song;
    }
    
    function playSong() {
        isPlaying = true;
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    
    function pauseSong() {
        isPlaying = false;
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
    
    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong();
        if (isPlaying) playSong();
    }
    
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong();
        if (isPlaying) playSong();
    }
    
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
    
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    }
    
    playBtn.addEventListener('click', () => {
        isPlaying ? pauseSong() : playSong();
    });
    
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
    
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', nextSong);
    
    progressBar.parentElement.addEventListener('click', setProgress);
    
    loadSong();
});