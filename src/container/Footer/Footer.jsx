import React, { useState } from "react"
import { images } from "../../constants"
import { AppWrap, MotionWrap } from "../../wrapper"
import {client} from "../../client"
import "./Footer.scss"

const Footer = () => {
  const [formData, setformData] = useState({name: '', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email,message} = formData;

  const handleChangeInput=(e)=>{
    const {name, value} = e.target;
    setformData({ ...formData, [name]: value});
  }

  const handleSubmit = ()=>{
    setLoading(true);

    const contact ={
      _type: 'contact',
      name: name,
      email: email,
      message: message,

    }

    client.create(contact)
    .then(()=>{
      setLoading(false);
      setIsFormSubmitted(true);

    })


  }
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:sweetysingh1609@gmail.com" className="p-text">
            sweetysingh1609@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+098 78908" className="p-text">
            +098 78908
          </a>
        </div>
      </div>

{/* <form action="https://formsubmit.co/sweetysingh1609@gmail.com" method="POST"> */}
{!isFormSubmitted?

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
          className="p-text"
          placeholder="Your Message"
          value={message}
          name="message"
          onChange={handleChangeInput}
          />
        </div>
        <button type="submit" className="p-text" onClick={handleSubmit}>{loading? 'Sending':'Send Message'}</button>
      </div>
      : <div>
        <h3 className="head-text"> Thank you for getting in touch!</h3>
      </div>}
      {/* </form> */}
    </>
  )
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg")
