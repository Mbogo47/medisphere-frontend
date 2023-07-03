import { FaChevronRight } from "react-icons/fa";
import aboutImage from "../../assets/about.svg";
import './about.css';

const About = () => {
    return (
        <>
            <div id="about" className="section">
                <h2 className="heading"> about us </h2>
                <div className="row">
                    <div className="image">
                        <img src={aboutImage} alt="about image" />
                    </div>
                    <div className="content">
                        <h3>we take care of your healthy life</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
                        <a href="#" className="btn"> learn more <span><FaChevronRight className="icon-right" /></span> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About