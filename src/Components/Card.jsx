import "./Card.css";
const Card = ({ item, handleChoice }) => {
	return (
		<div className='item'>
			<div>
				<img src={item.src} alt='planet images' className='img-item' />
				<img
					src='./images/cover.jpg'
					alt='cover'
					className='img-cover'
					onClick={() => handleChoice(item)}
				/>
			</div>
		</div>
	);
};
export default Card;
