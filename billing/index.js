const billInput = document.getElementById('bill')
const tipInput = document.getElementById('tip')
const totalPerPersonDiv = document.getElementById('totalPerPerson')
const peopleDiv = document.getElementById('people')
const addPeople = document.getElementById('addPeople')
const removePeople = document.getElementById('removePeople')

let people = Number(peopleDiv.innerText)

const calculateBill = () => {
	const totalPerPerson = 
		(Number(billInput.value) + ((Number(tipInput.value) / 100) * Number(billInput.value))) / people;
	totalPerPersonDiv.innerText = `$${totalPerPerson.toFixed(2)}`
}

const increasePeople = () => {
	people++
	peopleDiv.innerText = people
	calculateBill()
}

const decreasePeople = () => {
	if (people <= 1) { return; }
	people--
	peopleDiv.innerText = people
	calculateBill()
}