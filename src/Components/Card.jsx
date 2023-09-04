import "./Card.css";
const Card = ({ item, handleChoice, flipped, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(item);
		}
	};
	return (
		<div className='item'>
			<div className={flipped ? "flipped" : ""}>
				<img src={item.src} alt='planet images' className='front' />
				<img
					src='./images/cover.jpg'
					alt='cover'
					className=' back'
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};
export default Card;
