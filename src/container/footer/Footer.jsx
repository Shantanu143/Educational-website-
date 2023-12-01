import './footer.css'
import { Icon } from '@iconify/react'
import { footerInfo } from '../../assets/inforamtion.js'
const Footer = () => {
    return (
        <footer className="section footer">
            <div className="footer-container container">
                <div className="footer-content">
                    <a href="#" className="logo-content flex">
                        <Icon icon="icon-park-solid:classroom" />
                        <span className="logo-text">IPT</span>
                    </a>

                    <p className="content-description">Experience transformational learning through our coaching classes, designed to nurture your skills and empower your journey.</p>

                    <div className="footer-location flex">
                        <i className='bx bx-map map-icon'></i>

                        <div className="location-text">
                        Railway Station Road, Padampura Aurangabad - 431005 Maharashtra, India
                        </div>
                    </div>
                </div>

                <div className="footer-linkContent">
                    <ul className="footer-links">
                        <h4 className="footerLinks-title">Course</h4>

                        {
                            footerInfo.map((footerLinks) => {
                                const { id, course } = footerLinks
                                return (
                                    <li key={id}><a href="#" className="footer-link">{course}</a></li>
                                );
                            })
                        }
                    </ul>
                    <ul className="footer-links">
                        <h4 className="footerLinks-title">Subject Cover</h4>

                        <li><a href="#" className="footer-link">Banking</a></li>
                        <li><a href="#" className="footer-link">Stock Market</a></li>
                        <li><a href="#" className="footer-link">Accounts</a></li>
                    </ul>
                    <ul className="footer-links">
                        <h4 className="footerLinks-title">Support</h4>

                        <li><a href="#" className="footer-link">About Us</a></li>
                        <li><a href="#" className="footer-link">FAQs</a></li>
                        <li><a href="#" className="footer-link">Private Policy</a></li>
                        <li><a href="#" className="footer-link">Help Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyRight">&#169; Institute of Professional Talent @ All rigths reserved</div>
        </footer>
    )
}

export default Footer