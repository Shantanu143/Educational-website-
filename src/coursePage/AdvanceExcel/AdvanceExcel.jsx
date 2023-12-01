import { Nav, ScrollUp } from '../../component'
import { Header, Footer } from '../../container'
import { useEffect, useState } from 'react';
import './AdvanceExcel.css'
import ExcelImg from './AdvanceExcelImg.jpg'
import RegisterNow from '../../component/registerNow/RegisterNow';
const AdvanceExcel = () => {
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
                    <img src={ExcelImg} alt="Course Thumbnail" />
                </div>
                <div className="info-content">
                    <h2>About the Certificate Course on Excel & Advance Excel (on latest release of MS-Office Professional)</h2>
                    <p>
                        If you’re an Excel beginner (or an intermediate) and want to learn Excel, this is the perfect place for you to start. The various concepts explained through Practical Learning Approach (PLA) that helps to establish a strong foundation for you’re smoothly working in industry.
                    </p>
                    <p>
                        Microsoft Excel helps to build a solid understanding on the Basics of Microsoft Excel by learning the most common Excel functions used in the Office. Maintain large sets of Excel data in a list or table, Create dynamic reports by mastering one of the most popular tools, PivotTables.
                    </p>
                    <p>
                        Wow your boss by unlocking dynamic formulas with IF, VLOOKUP, INDEX, MATCH functions and many more
                    </p>
                </div>
            </div>

            <div className="course-info">
                <h2>Course Objectives</h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Provide specialised and updated knowledge in the area of MS-Office Excel.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>To become the master in Microsoft Excel from Beginner to Advanced</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Harness the full power of Microsoft Excel by automating your day to day tasks through Macros that will lead to increase the efficiency in work-location.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Practical Learning Approach (PLA) from day one.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>To make you enough capable to handle the work in less than 50% time spam.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Simplified way to understand the complicated calculations and formatting.</li>
                </ul>
            </div>
            <div className="course-info">
                <h2>Eligibility</h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Basic knowledge about computer system is necessary. </li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Everyone may apply..</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>The registration will be on first come first served basis.</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Limited seats are to be admitted.</li>
                </ul>
            </div>
            <div className="course-info">
                <h2>Course Coverage </h2>
                <ul>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Basic Accounting terminologies</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Accounting in the computerised system using Tally Prime</li>
                    <li className={isVisible ? 'visible' : 'visible-active'}>Report preparation and Finalisation on Books of Accounts</li>

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
                    <li className={isVisible ? 'visible' : 'visible-active'}>Rs. 3,000.00/-</li>
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

export default AdvanceExcel