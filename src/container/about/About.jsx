// import React from 'react'
import './about.css'
import { Icon } from '@iconify/react'
import img from '../../assets/imgs/aboutImg.jpg'
import { Link } from 'react-router-dom'
const About = () => {
        return (
                <>
                        <section className="section about" id="about">
                                <div className="about-content container">
                                        <div className="about-imageContent">
                                                <img src={img} alt="" className="about-img" />
                                                <div className="aboutImg-textBox">
                                                        <Icon icon="mdi:finance" />
                                                        <p className="content-description">Bridge the gap between Academic Knowledge and Industrial Skill Requirements</p>
                                                </div>
                                        </div>

                                        <div className="about-details">
                                                <div className="about-text">
                                                        <h4 className="content-subtitle"><i>The Institute of Professional Talent</i></h4>
                                                        <h2 className="content-title">We Make you one step ahead from others</h2>
                                                        <p className="content-description">The founders of Institute of Professional Talent, henceforth called as IPT noticed the gap between the academic education and industrial requirements in respect to add on skills.</p>

                                                        <ul className="about-lists flex">
                                                                <li className="about-list">Tally Prime (Latest Release)</li>
                                                                <li className="about-list dot">.</li>
                                                                <li className="about-list">Excel & Advance Excel </li>
                                                                {/* <li className="about-list dot">.</li>
                                                                <li className="about-list">Investment Strategies</li> */}
                                                        </ul>
                                                </div>

                                                <div className="about-buttons flex">
                                                        <Link to='/aboutPage'>

                                                                <button className="button">About Us</button>
                                                        </Link>
                                                        <Link to='/aboutPage'>

                                                                <a href="#" className="about-link flex">
                                                                        <span className="link-text">see more</span>
                                                                        <i className='bx bx-right-arrow-alt about-arrowIcon'></i>
                                                                </a>
                                                        </Link>
                                                </div>
                                        </div>

                                </div>
                        </section>
                </>
        )
}

export default About