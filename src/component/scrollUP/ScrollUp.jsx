import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import './scrollup.css'

const ScrollUp = () => {
    const [isScrollUpBtnActive, setIsScrollUpBtnActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.pageYOffset;


            setIsScrollUpBtnActive(scrollY > 250);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <a href="#home" className={isScrollUpBtnActive ? 'scrollUpBtn-active flex' : 'scrollUpBtn'}>
                <Icon icon="dashicons:arrow-up-alt" className='scrollUp-icon' />
            </a>

        </>
    )
}

export default ScrollUp