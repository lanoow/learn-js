const api = "https://dog.ceo/api/breeds/image/random"

const get = async () => {
	const response = await fetch(api)
  	const data = await response.json()
  	return data
}

const display = async () => {
	const dog = await get()
	document.getElementById("dogImage").innerHTML =
		`<img class="w-full h-96 px-4 rounded-xl" src="${dog.message}" alt="Dog picture">`;
}


onload = () => display()
	