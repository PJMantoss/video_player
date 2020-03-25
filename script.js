/*Select our Elements*/
const player = document.querySelector('.player');

const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');

const progressBar = player.querySelector('.progress-filled');

const toggle = player.querySelector('.toogle');

const skipBtns = player.querySelectorAll('[data-skip]');

const ranges = player.querySelectorAll('.player-slider');

/*Construct Functions*/

togglePlay = () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

updateBtn = () => {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon
}

skip = () => {
    video.currentTime += parseFloat(this.dataset.skip);
}

handleRangeUpdate = () => {
    video[this.name] = this.value;
}