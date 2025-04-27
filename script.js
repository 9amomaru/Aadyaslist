// Sidebar toggle
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content'); 

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  mainContent.classList.toggle('fullwidth');
});

let currentAudio = null;
let audioPlayer = document.getElementById('audioPlayer');
let audioSource = document.getElementById('audioSource');
let nowPlayingTitle = document.getElementById('nowPlayingTitle');
let playPauseBtn = document.getElementById('playPauseBtn');
let progressBar = document.getElementById('progressBar');

// Function to play the selected song
function playSong(songSrc, songName) {
  audioSource.src = songSrc;
  nowPlayingTitle.textContent = songName;
  
  audioPlayer.load();
  audioPlayer.play();
  playPauseBtn.textContent = '⏸ Pause';
}

// Function to toggle play/pause
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸ Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶ Play';
  }
}

// Function to change volume
function changeVolume() {
  const volumeControl = document.getElementById('volumeControl');
  audioPlayer.volume = volumeControl.value / 100;
}

// Update the progress bar as the song plays
audioPlayer.addEventListener('timeupdate', function() {
  let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;
});

// Function to seek through the song
function seekSong() {
  let seekTime = (progressBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTime;
}
