// css
import './review.css';

// swiper css
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// icons
import { Icon } from '@iconify/react';

// content
import { reviewInfo } from '../../assets/inforamtion.js'

const Review = () => {
    return (
        <>
            <section className="section review" id="review">
                <div className="review-container container">
                    <div className="review-text">
                        <h4 className="section-subtitle"><i>Reviews</i></h4>
                        <h2 className="section-title">What Students Says</h2>
                        <p className="section-description">Could you please share your thoughts on the financial class you attended? Your feedback would greatly help us improve the course and assist future students in making informed decisions about joining.</p>
                    </div>

                    <div className="tesitmonial swiper mySwiper">
                        <div className="swiper-wrapper">
                            <Swiper
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                loop={true}
                                grabCursor={true}
                                autoplay={{ delay: 7000, disableOnInteraction: false }}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev'
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                    }
                                }}
                            >

                                {reviewInfo.map((reviewInfo) => {
                                    const { name, job, quote, img, id } = reviewInfo;
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <div className="testi-content swiper-slide flex" key={id}>
                                                    <img src={img} alt="" className="review-img" />
                                                    <p className="review-quote">{quote}</p>
                                                    <Icon icon="bxs:quote-alt-left" className='quote-icon' />

                                                    <div className="testi-personDetails flex">
                                                        <span className="name">{name}</span>
                                                        <span className="job">{job}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    );
                                })}
                                ...
                            </Swiper>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Review