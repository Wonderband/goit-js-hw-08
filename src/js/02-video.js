// import Vimeo from '@vimeo/player';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// localStorage.setItem("videoplayer-current-time", "0");


player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', data => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
   console.log(data.seconds);
    // data is an object containing properties specific to that event
});

function playFromStop() {
    const timeSaved = localStorage.getItem("videoplayer-current-time") || "0";
    // console.log(timeSaved);
    player.setCurrentTime(timeSaved);
    // console.log(player.getCurrentTime());    
}
window.addEventListener('DOMContentLoaded', playFromStop);
