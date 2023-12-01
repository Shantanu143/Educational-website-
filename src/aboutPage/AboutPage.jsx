// import React from 'react'
import './aboutPage.css'
import { Nav, ScrollUp } from '../component'
import { Header, Footer } from '../container'
import PageContent from './pageContent/PageContent'
import RodeMap from './rodeMap/RodeMap'
import IPTInfo from './IPTInfo/IPTInfo'
import RegisterNow from '../component/registerNow/RegisterNow'
const AboutPage = () => {
    return (
        <>
            <Nav />
            <Header />
            <PageContent />
            <RodeMap/>
            <IPTInfo/>
            <RegisterNow/>
            <ScrollUp />
            <Footer />
        </>
    )
}

export default AboutPage