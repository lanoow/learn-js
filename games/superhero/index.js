// env file has to contain the api token
// structure:
// {
//	"token": your_token_here
// }

import env from './env.json' assert {type: 'json'};

const token = env.token
const api = `https://superheroapi.com/api.php/${token}`
const search = document.getElementById('search')

const heroName = document.getElementById('heroName')
const heroImage = document.getElementById('heroImg')
const heroPowerstats = document.getElementById('heroPowerstats')

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getHero = async () => {
	await fetch(`${api}/search/${search.value}`)
		.then((response) => response.json())
		.then((data) => {
			const hero = data.results[random(0, data.results.length - 1)]
			const heroName = hero.name
			const heroImage = hero.image.url
			const heroPowerstats = hero.powerstats
		})
	}

const getRandomHero = async () => {
  	await fetch(`${api}/${random(1, 731)}`)
		.then(response => response.json())
		.then((json) => {
			const heroName = json.name
			const heroImage = json.image.url
			const heroPowerstats = json.powerstats
		})
	}

	// const hero = {
	// 	"response": "success",
	// 	"id": "70",
	// 	"name": "Batman",
	// 	"powerstats": {
	// 	  "intelligence": "100",
	// 	  "strength": "26",
	// 	  "speed": "27",
	// 	  "durability": "50",
	// 	  "power": "47",
	// 	  "combat": "100"
	// 	},
	// 	"biography": {
	// 	  "full-name": "Bruce Wayne",
	// 	  "alter-egos": "No alter egos found.",
	// 	  "aliases": [
	// 		"Insider",
	// 		"Matches Malone"
	// 	  ],
	// 	  "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
	// 	  "first-appearance": "Detective Comics #27",
	// 	  "publisher": "DC Comics",
	// 	  "alignment": "good"
	// 	},
	// 	"appearance": {
	// 	  "gender": "Male",
	// 	  "race": "Human",
	// 	  "height": [
	// 		"6'2",
	// 		"188 cm"
	// 	  ],
	// 	  "weight": [
	// 		"210 lb",
	// 		"95 kg"
	// 	  ],
	// 	  "eye-color": "blue",
	// 	  "hair-color": "black"
	// 	},
	// 	"work": {
	// 	  "occupation": "Businessman",
	// 	  "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
	// 	},
	// 	"connections": {
	// 	  "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
	// 	  "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
	// 	},
	// 	"image": {
	// 	  "url": "https://www.superherodb.com/pictures2/portraits/10/050/639.jpg"
	// 	}
	//   }

	  heroName.innerText = hero.name
	  heroImage.src = hero.image.url
	  heroPowerstats.innerHTML = `
		<li>🧠: ${hero.powerstats.intelligence}</li>
		<li>💪: ${hero.powerstats.strength}</li>
		<li>🥾: ${hero.powerstats.speed}</li>
		<li>🛡️: ${hero.powerstats.durability}</li>
		<li>⚡: ${hero.powerstats.power}</li>
		<li>🗡️: ${hero.powerstats.combat}</li>
	  `

// console.log(getHero(search.value))