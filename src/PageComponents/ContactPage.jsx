import React from 'react'
import './Style.css'
import NavBar from '../components/NavBar'
import MenuBox from '../components/MenuBox'
import whatsapp from '../assets/Images/whatsapp (1).png'
import mail from '../assets/Images/gmail.png'

const ContactPage = () => {
  return (
    <>
    <NavBar />
    <MenuBox />
            <div class="contact-info"><h1>CONTACT</h1>
                <p>Get in touch with me for any inquiries, collaborations, or just to say hello.</p>
                <p>You can also send me a direct message with the aid of the form below, and i'll get back to you as soon as i can. </p>
            </div>
            <div class="contacts">
        <div>
            <form class="contact-form">
                <h1>DIRECT MESSAGE</h1>
                <input type="text" name="name" placeholder="input your name..." />
                <br />
                <br />
                <input type="email" name="email" placeholder="input your email..." />
                <br />
                <br />
                <input id="message" type="text" placeholder="message..." name="message" />
                <br />
                <button>Send</button>
            </form>
        </div>
        <div class="contact">
            <h5>CONTACT ME</h5>
            <p><img src={whatsapp} alt="" />Whatsapp:</p>
            <a href="https://wa.me/qr/6SQDXLN6LZIPE1">+234 913 621 7111</a>
            <p>Telegram:</p>
            <a>+234 811 532 9375</a>
            <p><img src={mail} alt="" />Email:</p>
            <a>buariadebola@gmail.com</a>
        </div>
    </div>
    </>
  )
}

export default ContactPage
