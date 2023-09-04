import { useState } from "react";

function SetBackGround() {
	const [showVideo, setShowVideo] = useState(true);

	const toggleDisplay = () => {
		setShowVideo(!showVideo);
	};

	return (
		<div className='bg-container'>
			<button onClick={toggleDisplay} className='bg-btn'>
				Background : {showVideo ? "Image" : "Video"}
			</button>

			{showVideo ? (
				<video autoPlay muted loop id='bgVideo'>
					<source
						src='./images/bgv.mp4'
						id='bgVideo'
						type='video/mp4'
					/>
				</video>
			) : (
				<img src="src='././images/bg-5/jpg'" id='bgImage' />
			)}
		</div>
	);
}

export default SetBackGround;
