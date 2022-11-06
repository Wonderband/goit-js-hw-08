import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

window.addEventListener('DOMContentLoaded', playFromStop);

player.on('play', function() {
    console.log('playing the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(data => {
    localStorage.setItem("videoplayer-current-time", Math.round(data.seconds));
}, 1000 ));

function playFromStop() {
    const timeSaved = localStorage.getItem("videoplayer-current-time") || "0";    
    player.setCurrentTime(timeSaved);    
}
