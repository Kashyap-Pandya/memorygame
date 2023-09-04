import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import SetBackGround from "./Components/SetBackground";

const Arr = [
	{ src: "./images/earth-1.png", matched: false },
	{ src: "./images/jupiter-1.png", matched: false },
	{ src: "./images/mars-1.png", matched: false },
	{ src: "./images/neptune-1.png", matched: false },
	{ src: "./images/saturn-1.png", matched: false },
	{ src: "./images/uranus-1.png", matched: false },
	{ src: "./images/venus-1.png", matched: false },
	{ src: "./images/moon-1.png", matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const shuffleArray = () => {
		const shuffledArr = [...Arr, ...Arr]
			.sort(() => Math.random() - 0.5)
			.map((img) => ({ ...img, id: Math.random() }));
		setChoiceOne(null);
		setChoiceTwo(null);
		setCards(shuffledArr);
		setTurns(0);
		console.log(shuffledArr);
	};

	const handleChoice = (item) => {
		choiceOne ? setChoiceTwo(item) : setChoiceOne(item);
	};

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
		setDisabled(false);
	};

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			if (choiceOne.src === choiceTwo.src) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.src === choiceOne.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				setTimeout(() => resetTurn(), 1000);
			}
		}
		// resetTurn();
	}, [choiceOne, choiceTwo]);

	useEffect(() => {
		shuffleArray();
	}, []);

	return (
		<main>
			<h1>COSMOS</h1>
			<div className='buttons'>
				<button className='btn-game' onClick={shuffleArray}>
					New Game
				</button>
				<SetBackGround />
			</div>
			<h3>Turns : {turns}</h3>

			<div className='game-grid'>
				{cards.map((item) => {
					return (
						<Card
							item={item}
							key={item.id}
							handleChoice={handleChoice}
							flipped={
								item === choiceOne ||
								item === choiceTwo ||
								item.matched
							}
							disabled={disabled}
						/>
					);
				})}
			</div>
		</main>
	);
}

export default App;
