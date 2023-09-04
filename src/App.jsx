import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

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

	const shuffleArray = () => {
		const shuffledArr = [...Arr, ...Arr]
			.sort(() => Math.random() - 0.5)
			.map((img) => ({ ...img, id: Math.random() }));
		setCards(shuffledArr);
		setTurns(0);
	};

	const handleChoice = (item) => {
		choiceOne ? setChoiceTwo(item) : setChoiceOne(item);
	};

	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
	};

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			console.log(choiceOne, choiceTwo);
			if (choiceOne.src === choiceTwo.src) {
				console.log("card matches");
				resetTurn();
			} else {
				console.log("card doesn't match");
				resetTurn();
			}
		}
		// resetTurn();
	}, [choiceOne, choiceTwo]);

	return (
		<>
			<main>
				<h1>COSMOS</h1>
				<button className='btn-game' onClick={shuffleArray}>
					New Game
				</button>
				<h3>Turns : {turns}</h3>

				<div className='game-grid'>
					{cards.map((item) => {
						return (
							<Card
								item={item}
								key={item.id}
								handleChoice={handleChoice}
							/>
						);
					})}
				</div>
			</main>
		</>
	);
}

export default App;
