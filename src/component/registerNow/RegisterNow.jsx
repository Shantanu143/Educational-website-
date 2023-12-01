import { useEffect, useState } from 'react'
import './register.css'
const RegisterNow = () => {
    // Inside the Nav component
    const [isRegisterButtonActive, setIsRegisterButtonActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.pageYOffset;
            const triggerOffset = 250; // Adjust as needed

            setIsRegisterButtonActive(scrollY > triggerOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a href="https://forms.gle/eyHRzuQFmUGDKwat7">
            <button
                className={`sticky-register-button ${isRegisterButtonActive ? 'button active' : ''}`}
                onClick={() => {
                    // Handle the "Register Now" button click action
                }}
            >
                Register Now
            </button>
        </a>

    )
}

export default RegisterNow