const announcer = document.getElementById('announcer')
const player_choice = document.getElementById('player_choice')
const computer_choice = document.getElementById('computer_choice')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const reset = document.getElementById('reset')

let chocie = null
let computer = null

const CHOICES = {
	ROCK: 'Rock ✊',
	PAPER: 'Paper 🖐️',
	SCISSORS: 'Scissors ✌️'
}

const getComputerChoice = () => {
	const number = Math.floor(Math.random() * 3)

	if (number == 0) {
		computer = CHOICES.ROCK
	}

	if (number == 1) {
		computer = CHOICES.PAPER
	}

	if (number == 2) {
		computer = CHOICES.SCISSORS
	}
}

rock.onclick = () => {
	choice = CHOICES.ROCK
	getComputerChoice()

	if (computer == CHOICES.ROCK) {
		announcer.innerText = 'Tie! 😲'
	}

	if (computer == CHOICES.PAPER) {
		announcer.innerText = 'You lost! 😢'
	}

	if (computer == CHOICES.SCISSORS) {
		announcer.innerText = 'You won! 🎉'
	}

	chocie = null
	computer = null
}

paper.onclick = () => {
	choice = CHOICES.PAPER
	getComputerChoice()

	if (computer == CHOICES.ROCK) {
		announcer.innerText = 'You won! 🎉'
	}
	
	if (computer == CHOICES.PAPER) {
		announcer.innerText = 'Tie! 😲'
	}
	
	if (computer == CHOICES.SCISSORS) {
		announcer.innerText = 'You lost! 😢'
	}

	chocie = null
	computer = null
}

scissors.onclick = () => {
	choice = CHOICES.SCISSORS
	getComputerChoice()

	if (computer == CHOICES.ROCK) {
		announcer.innerText = 'You lost! 😢'
	}
	
	if (computer == CHOICES.PAPER) {
		announcer.innerText = 'You won! 🎉'
	}
	
	if (computer == CHOICES.SCISSORS) {
		announcer.innerText = 'Tie! 😲'
	}

	chocie = null
	computer = null
}

reset.onclick = () => {
	announcer.innerText = ''
	choice = null
	computer = null
}
