import About from "../../components/About/About"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Revcont from "../../components/Reviews/Revcont"
import Servcont from "../../components/Services/Servcont"
import homeImage from "../../assets/home.svg"
import './landing.css'


const Landingpage = () => {
    return (
        <div>
            <Header />
            <img src={homeImage} alt="home image" className="home" id="home" />
            <Servcont />
            <About />
            <Revcont />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landingpage