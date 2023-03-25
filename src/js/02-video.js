import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(TIME_KEY)
    ? localStorage.getItem(TIME_KEY) : 0;

player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(currentTime);

player.getVideoTitle().then(function(title) {
console.log('title:', title);
});

function getCurrentTime(e) {
localStorage.setItem(TIME_KEY, e.seconds);
}


