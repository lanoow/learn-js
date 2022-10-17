const api = "https://dog.ceo/api/breeds/image/random"

const get = async () => {
	const response = await fetch(api)
  	const data = await response.json()
  	return data
}

const display = async () => {
	try {
		const dog = await get()
		document.getElementById("dogImage").innerHTML =
			`<img class="w-full h-96 px-4 rounded-xl" src="${dog.message}" alt="Dog picture">`;
	} catch (error) {
		document.getElementById("dogImage").innerHTML =
			`<span class="text-white">Sorry but we couldn't find a dog for you.</span>`;
	}
}


onload = () => display()
	