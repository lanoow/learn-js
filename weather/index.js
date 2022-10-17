const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '912350de7cmshaa1b4de4e50717bp1415dbjsn66d1bf5270dc',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
	}
}

const input = document.getElementById('location')

const getWeather = async () => {
	const response = await fetch(`
		https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${input.value}&contentType=json&unitGroup=metric&shortColumnNames=true`, options)
	const data = await response.json()
	return data
}

const displayWeather = async () => {
	try {
		const weather = await getWeather()
		document.getElementById("results").innerHTML =
			`<h2 class="text-lg font-bold text-white mt-8">${weather.location}</h2>
			<div class="text-white text-2xl font-bold">
				<p>${weather.description}</p>
				<p>${weather.temperature}°C</p>
				<p>${weather.humidity}%</p>
			</div>`;
		console.log(weather)
	} catch (error) {
		document.getElementById("results").innerHTML =
			`<span class="text-white">Sorry but we couldn't find the weather for you.</span>`;
	}
}
