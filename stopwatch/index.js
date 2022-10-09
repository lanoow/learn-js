let [min, sec, ms] = [0, 0, 0]
let timer = document.getElementById('timer')
let int = null

onload = () => {
	timer.innerHTML = "00:00.00"
}

document.getElementById('start').addEventListener('click', () => {
	if (int !== null) {
		clearInterval(int)
	}
	int = setInterval(stopwatch, 10)
})

document.getElementById('stop').addEventListener('click', () => {
	clearInterval(int)
})

document.getElementById('reset').addEventListener('click', () => {
	clearInterval(int)
	let [min, sec, ms] = [0, 0, 0]
	timer.innerHTML = '00:00.00'
})

const stopwatch = () => {
	// Add 10 miliseconds
	ms += 10
	
	// Whenever the miliseconds add up to 1000 reset them to 0
	if (ms == 1000) {
		ms = 0

		// Add 1 second
		sec++

		// Whenever the minutes add up to 60 reset them to 0
		if (sec == 60) {
			sec = 0
			
			// Add 1 minute
			min++
		}
	}
	
	let m = min < 10 ? "0" + min : min
	let s = sec < 10 ? "0" + sec : sec
	let mis = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms

	timer.innerHTML = `${m}:${s}.${mis}`
}