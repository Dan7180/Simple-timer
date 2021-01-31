const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const radius = circle.getAttribute('r');
const perimeter = 2 * Math.PI * radius;

circle.setAttribute('stroke-dasharray', perimeter);
let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		let offSet = (perimeter * timeRemaining) / duration - perimeter;
		circle.setAttribute('stroke-dashoffset', offSet);
	},
	onComplete() {
		console.log('timer paused');
	},
});
