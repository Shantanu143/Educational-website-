// import React from 'react'
// import Form from '../../component/form/From'
import './contact.css'
import { Icon } from '@iconify/react'
const Contact = () => {
    return (
        <section className="section newsletter" id='contact-us'>
            <div className="newletter-container container">
                <a href="#" className="logo-content flex">
                    <span className="logo-text">  <h1>Contact Us</h1></span>
                </a>

                <p className="section-description">Unlock your potential with our coaching classes, where knowledge meets guidance to propel you towards success.</p>
{/* 
                <div className="newsletter-inputBox">
                    <Form />
                </div> */}

<span>Mobile Number :- +91 8180040900</span>
<span>Email :- theipt123@gmail.com</span>

                <div className="newsletter media-icons flex">
                    <a href="#"><Icon icon="mdi:facebook" /></a>
                    <a href="#"><Icon icon="mdi:twitter" /></a>
                    <a href="#"><Icon icon="mdi:instagram" /></a>
                    <a href="#"><Icon icon="mdi:youtube" /></a>
                    <a href="#"><Icon icon="mdi:linkedin" /></a>
                </div>
            </div>
        </section>
    )
}

export default Contact