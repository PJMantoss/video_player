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

handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

scrub = e => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/*Link up the event listeners to video*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipBtns.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))