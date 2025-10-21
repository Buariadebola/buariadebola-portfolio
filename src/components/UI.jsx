import React from 'react'
import '../App.css'
import img3 from '../assets/Images/E-book Hub DESIGN 2 .jpg'
import img2 from '../assets/Images/BARCA BLOG DESIGN.jpg'
import img1 from '../assets/Images/Pulse 1.jpg'
import img4 from '../assets/Images/game web.jpg'
import img5 from '../assets/Images/pulse 9.jpg'
import img6 from '../assets/Images/ecommerce ui.png'
import img7 from '../assets/Images/ui-portfolio.webp'

const UI = () => {

  return (
    <div>
      <section className="ui-projects" style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
		<div className='ui-content'>
	<h1>My <span>UI</span>/<span>UX</span> designs</h1>
	<div className='ui-wrapper'>
	<div className="uidesigns" style={{"--quantity": 7}}>
		<div className="my-design" style={{"--position": 1}}>
			<a href={ img1 }>
				<img src={ img1 } />
			</a>
		</div>
		<div className="my-design" style={{"--position": 2}}>
			<a href={ img2 }>
				<img src={ img2 } />
			</a>
		</div>
		<div className="my-design" style={{"--position": 3}}>
			<a href={ img3 }>
				<img src={ img3 } />
			</a>
		</div>
		<div className="my-design" style={{"--position": 4}}>
			<a href={ img4 }>
				<img src={ img4 } />
			</a>
		</div>
		<div className="my-design" style={{"--position": 5}}>
			<a href={ img5 }>
				<img src={ img5 } />
			</a>
		</div>
		<div className="my-design" style={{"--position": 6}}>
			<a href={ img6 }>
				<img src={ img6 } />
			</a>
		</div>
		<div className="my-design" style={{"--position": 7}}>
			<a href={ img7 }>
				<img src={ img7 } />
			</a>
		</div>
	</div>
	</div>
		</div>
</section>
    </div>
  )
}

export default UI
