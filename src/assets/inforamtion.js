// review img 
import bookImg1 from './imgs/bookImg.jpg'
import bookImg2 from './imgs/bookImg2.jpg'
import bookImg3 from './imgs/bookImg3.jpg'
import bookImg4 from './imgs/bookImg4.jpg'
// home img

import homeImg2 from './imgs/edu_2.jpg'
// import homeImg3 from './imgs/edu_3.jpg'
// review img
import profileImg1 from './imgs/profileImg1.jpg'
import profileImg2 from './imgs/profileImg2.jpg'
import profileImg3 from './imgs/profileImg3.jpg'

export const books = [{
        title: 'Rich Dad Poor Dad by Robert T. Kiyosaki',
        information: 'Rich Dad Poor Dad tells the story of a boy with two fathers, one rich, one poor, to help you develop the mindset and financial knowledge you need to build a life of wealth and freedom.',
        discountPrice: '₹1899',
        realPrice: '₹1899',
        bookImg: bookImg1,
        id: 1,
    },
    {
        title: 'Money: Master The Game by Tony Robbins',
        information: 'Money: Master The Game lays out seven simple steps to financial freedom, based on the advice of the world’s best billionaire investors, interviewed by Tony Robbins.',
        discountPrice: '₹1899',
        realPrice: '₹1899',
        bookImg: bookImg2,
        id: 2,
    },
    {
        title: 'The Barefoot Investor by Scott Pape',
        information: 'The Barefoot Investor is an Australian farm boy’s no-BS guide to taking charge of your personal finances with a simple system to eliminate debt, live in the now, and still retire in peace.',
        discountPrice: '₹1899',
        realPrice: '₹1899',
        bookImg: bookImg3,
        id: 3,
    },
    {
        title: 'The One-Page Financial Plan by Carl Richards',
        information: 'The One-Page Financial Plan makes financial planning stop feeling like a burden for the less disciplined by helping you plan your entire financial future on a single page.',
        discountPrice: '₹1899',
        realPrice: '₹1899',
        bookImg: bookImg4,
        id: 4,
    },
]

export const classesTime = [{
        day: 'Sunday',
        time: 'Closed',
        id: 1,
    },
    {
        day: 'Monday',
        time: '7.00am - 3.00pm',
        id: 2,
    },
    {
        day: 'Tuesday',
        time: '7.00am - 3.00pm',
        id: 3
    },
    {
        day: ' Wednesday',
        time: '7.00am - 3.00pm',
        id: 4,
    },
    {
        day: 'Thursday',
        time: '7.00am - 3.00pm',
        id: 5,
    },
    {
        day: 'Friday',
        time: '7.00am - 3.00pm',
        id: 6,
    },
    {
        day: 'Saturday',
        time: '9.00am - 2.00pm',
        id: 7,
    },
]

export const footerInfo = [{
        course: 'Tally Prime (Latest Release)',
        id: 1,
    },
    {
        course: 'Excel & Advance Excel ',
        id: 2,
    },
    // {
    //     course: 'Course 3',
    //     id: 3,
    // },
    // {
    //     course: 'Course 4',
    //     id: 4,
    // },
    // {
    //     course: 'Course 5',
    //     id: 5,
    // },
]

export const homeInfo = [
    {
        subTitle: 'About The',
        title: "Certificate Course on Excel & Advance Excel (on latest release of MS-Office Professional)",
        homeImg: homeImg2,
        id: 2,
    },
]
export const reviewInfo = [{
        name: 'Supriya Mule',
        job: 'student',
        quote: 'The financial class was an eye-opener! I now understand investing, budgeting, and making smart money choices. Highly recommended!',
        img: profileImg1,
        id: 1,
    },
    {
        name: 'Bhakti Purnale',
        job: 'student',
        quote: 'I was intimidated by finance, but this class made it so approachable. The real-life examples and interactive lessons made learning about money enjoyable.',
        img: profileImg2,
        id: 2,
    },
    {
        name: 'Rahul Sonawane',
        job: 'student',
        quote: 'The financial class exceeded my expectations. I feel equipped to manage my finances, thanks to the engaging instructors and comprehensive content.',
        img: profileImg3,
        id: 3,
    }
]