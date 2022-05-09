import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe,{
    id: 19231868,
    width: 640
});
    
const onPlay = function ({ seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
