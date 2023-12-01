import { useState, useEffect } from 'react';
import './nav.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const Menu = () => {
  const [activeLinkId, setActiveLinkId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLinkId(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <ul className="menu-list flex">
        <Link to='/'><li><a href="#home" className={activeLinkId === 'home' ? 'active-navlink nav-link' : 'nav-link'}>Home</a></li></Link>

        <Link to='/aboutPage' className='nav-link'> <li><a href="#about" className={activeLinkId === 'about' ? 'active-navlink nav-link' : 'nav-link'}>About</a></li></Link>
        <Link to='/coursePageTally' className='nav-link'> <li><a href="#" className={activeLinkId === 'about' ? 'active-navlink nav-link' : 'nav-link'}>Tally Prime </a></li></Link>
        <Link to='/coursePageExcel' className='nav-link'> <li><a href="#" className={activeLinkId === 'about' ? 'active-navlink nav-link' : 'nav-link'}>Excel & Advance Excel </a></li></Link>
     

        {/* <li><a href="#menu" className={activeLinkId === 'menu' ? 'active-navlink nav-link' : 'nav-link'}>Books</a></li> */}
        <li><a href="#review" className={activeLinkId === 'review' ? 'active-navlink nav-link' : 'nav-link'}>Review</a></li>
        <li><a href="#contact-us" className={activeLinkId === 'contact-us' ? 'active-navlink nav-link' : 'nav-link'}>Contact Us</a></li>
        <Link to='/login' className='nav-link'>Log In/Sign Up</Link>
      </ul>
    </>
  )
}

function Nav() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavMenuOpen(true);
    document.body.style.overflowY = 'hidden';
  };

  const handleNavClose = () => {
    setIsNavMenuOpen(false);
    document.body.style.overflowY = 'scroll';
  };
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setIsHeaderActive(scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header className={isHeaderActive ? 'header-active header' : 'header'}>
        <nav className="nav container flex">
          <a href="#" className="logo-content flex">
            <Icon icon="icon-park-solid:classroom" />
            <span className="logo-text">IPT</span>
          </a>

          <div className="menu-content">
            <Menu />
          </div>
          <div className="contact-content flex">
            <Icon icon="teenyicons:phone-outline" />
            <span className="phone-number">+91 8180040900</span>
          </div>

          <Icon icon="uil:bars" className="navOpen-btn" onClick={handleNavOpen} />

          {isNavMenuOpen && (
            <div className="menu-content open">
              <Menu />
              <div className="media-icons flex">
                <a href="#"><Icon icon="mdi:facebook" /></a>
                <a href="#"><Icon icon="mdi:twitter" /></a>
                <a href="#"><Icon icon="mdi:instagram" /></a>
                <a href="#"><Icon icon="mdi:youtube" /></a>
                <a href="#"><Icon icon="mdi:linkedin" /></a>
              </div>
              <Icon icon="iconamoon:close-duotone" className="navClose-btn" onClick={handleNavClose} />
            </div>
          )}
        </nav>
      </header>
    </>
  );
}



export default Nav