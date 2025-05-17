import '../App.css';
import logo from '../assets/Images/hey.jpg'

const Box = () => {
    return (
        <>
        <div className="box">
            <div className="box-img">
                <img src={ logo } />
            </div>
            <div className="info">
                <p>Buari Adebola</p>
                <p>Web Developer</p>
            </div>
            </div>
        </>
    )
}

export default Box