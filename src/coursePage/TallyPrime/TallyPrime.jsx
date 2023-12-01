// import React from 'react'
import { Nav, ScrollUp } from '../../component'
import { Header, Footer } from '../../container'
import { useEffect, useState } from 'react';
import './TallyPrime.css'
import TallyImg from './TallyPrimeImg.png'
import RegisterNow from '../../component/registerNow/RegisterNow';
const TallyPrime = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const delay = 1000; // Set the delay for the animation in milliseconds

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <Nav />
            <Header />
            <div className="course-container">
                <div className="img-tab">
                    <img src={TallyImg} alt="Course Thumbnail" />
                </div>
                <div className="info-content">
                    <h2>About the Certificate Course on Tally Prime</h2>
                    <p>
                        If you are a beginner in the Accounting and Finance domain, then Tally Prime is the course designed for your career growth. It covers topics from basic to intermediate Business, Cost and Management of Financial Accounting concepts. The various concepts explained through Practical Learning Approach (PLA) that helps to establish a strong foundation for your Accounting and Financial career.
                    </p>
                    <p>
                        The course will help you understand how to perform basic to intermediate Accounting, Inventory and Basic Taxation (GST, TDS), and Simplification of Company Books of Accounts to name a few. The practical applications will be done on the new Tally Prime software to keep you at par with the new releases.
                    </p>
                </div>
            </div>

            <div className="course-info">
                <h2>Course Objectives</h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Provide specialised and updated knowledge in the area of Accounting.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>To bridge the gap between industrial requirement and academics.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Practical Learning Approach (PLA) from day one.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>To make our students enough capable to handle the work independently.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Simplified way to understand the complicated Accounting Policies.</li>
                </ul>
            </div>
            <div className="course-info">
                <h2>Eligibility</h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Basic knowledge about computer system is necessary. </li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Every undergraduate or graduate may apply.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Limited seats are to be admitted.</li>
                </ul>
            </div>
            <div className="course-info">
                <h2>Course Coverage </h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Basic Accounting terminologies</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Accounting in the computerised system using Tally Prime</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Report preparation</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Finalisation on Books of Accounts</li>
                </ul>
            </div>
            <div className="course-info">
                <h2>Faculty</h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>The faculty is having practical experience on Accounting, Taxation, Auditing and Financial Management. </li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>The faculty for the course will be a qualified and experts in the field of accounting to provide the students an in-depth technical as well as practical knowledge.</li>
                </ul>
            </div>
            <div className="course-info">
                <h2>Fees for the Course</h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Rs. 6,000.00/-</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>No Refund would be given after payment made for the course in case member is unable to attend the course, Refund will be eligible only in case of cancellation of batch</li>

                </ul>
            </div>
            <div className="course-info">
                <h2> Certificate</h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>A certificate will be awarded to the students on successful completion of course and after passing the examination</li>
                </ul>
            </div>
            <div className="course-info">
                <h2>Registration</h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>The registration will be on first come first served basis. Interested students may register online. </li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Mere registration is not considered as admission. </li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Admission will be confirmed only after payment of fees.</li>
                </ul>
            </div>
            <RegisterNow />
            <ScrollUp />
            <Footer />
        </>
    )
}

export default TallyPrime