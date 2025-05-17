import React, {useState} from 'react'
import '../App.css'
import icon from '../assets/Images/right.png'
import img1 from '../assets/Images/barcablog.png'
import img2 from '../assets/Images/ebookhub.png'
import img3 from '../assets/Images/gaming.png'

const UI = () => {
	const [translateX, setTranslateX] = useState(0);

	const maxTranslateX = -250;

	const slideForward = () => {
		setTranslateX((prevTranslateX) => Math.max(prevTranslateX -35, maxTranslateX));
	};

	const slideBackward = () => {
		setTranslateX((prevTranslateX) => Math.min(prevTranslateX +35, 0));
	};

  return (
    <div>
      <section className="ui-projects">
	<h1>My UI/UX designs</h1>
	<div className="uidesigns" style={{transform: `translateX(${translateX}%)`}}>
		<div className="my-design">
			<a href={ img1 }>
				<img src={ img1 } />
			</a>
		</div>
		<div className="my-design">
			<a href={ img2 }>
				<img src={ img2 } />
			</a>
		</div>
		<div className="my-design">
			<a href={ img3 }>
				<img src={ img3 } />
			</a>
		</div>
	</div>
	<button className='back-btn' onClick={slideBackward}><img src={icon} alt="" /></button>
	<button className='next-btn' onClick={slideForward}><img src={icon} alt="" /></button>
</section>
	<hr className="page-divide" />
    </div>
  )
}

export default UI
