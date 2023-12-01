// import React from 'react'
import './book.css'
import { books, classesTime } from '../../assets/inforamtion.js'
const Book = () => {
        return (
                <>
                        <section className="section menu" id="menu">
                                <div className="menu-container container">
                                        <div className="meu-text">
                                                <h4 className="section-subtitle"><i>Our Books</i></h4>
                                                <h2 className="section-title">Our Popular Books</h2>
                                                <p className="section-description">
                                                        Books are magical portals that transport us to worlds unexplored and minds uncharted.
                                                </p>
                                        </div>

                                        <div className="menu-content">
                                                <div className="menu-items">
                                                        {books.map((books) => {
                                                                const { title, information, discountPrice, realPrice, bookImg, id } = books;
                                                                return (
                                                                        <div className="menu-item flex" key={id}>
                                                                                <img src={bookImg} alt="" className="menu-img" />

                                                                                <div className="menuItem-details">
                                                                                        <h4 className="menuItem-topic">{title}</h4>
                                                                                        <p className="menuItem-des">{information}</p>
                                                                                </div>

                                                                                <div className="menuItem-price flex">
                                                                                        <span className="discount-price">{discountPrice}</span>
                                                                                        <span className="real-price">{realPrice}</span>
                                                                                </div>
                                                                        </div>
                                                                );
                                                        })}
                                                </div>

                                                <div className="time-table">
                                                        <span className="time-topic">Classes Time</span>

                                                        <ul className="time-lists">
                                                                {
                                                                        classesTime.map((classesTime) => {
                                                                                const { time, id, day } = classesTime;
                                                                                return (
                                                                                        <>
                                                                                                <li className="time-list flex" key={id}>
                                                                                                        <span className="open-day"> {day}</span>
                                                                                                        <span className="open-time">{time}</span>
                                                                                                </li>
                                                                                        </>
                                                                                );
                                                                        })
                                                                }
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </section>

                </>
        )
}

export default Book