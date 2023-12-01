import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { LoginForm, Nav, ScrollUp } from './component'
// import Dashbord from './dashbord/Dashbord';
import { Header, About, Review, Contact, Footer } from './container'
import AboutPage from './aboutPage/AboutPage';
import AdvanceExcel from './coursePage/AdvanceExcel/AdvanceExcel';
import TallyPrime from './coursePage/TallyPrime/TallyPrime';
import RegisterNow from './component/registerNow/RegisterNow';
const LandingPage = () => {
  return (
    <>
      {/* <Dashbord /> */}
      <Nav />
      <Header />
      <About />
      {/* <Book /> */}
      <Contact />
      <Review />
      <RegisterNow />
      <ScrollUp />
      <Footer />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/coursePageExcel" element={<AdvanceExcel />} />
        <Route path="/coursePageTally" element={<TallyPrime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
