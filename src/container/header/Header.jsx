
import './header.css'
import homeImg1 from '../../assets/imgs/edu_1.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <section className="home" id="home">
            <div className="home-content">
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                  <div className="swiper-slide">
                                                <img src={homeImg1} alt="" className="home-img" />

                                                <div className="home-details">
                                                    <div className="home-text">
                                                        <h4 className="homeSubtitle">We Make you one step ahead from others</h4>
                                                        <h2 className="homeTitle">The Institute of Professional Talent </h2>
                                                    </div>

                                                    <Link to='/aboutPage'>
                                                        <button className="button">Explore</button>
                                                    </Link>
                                                </div>
                                            </div>    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;