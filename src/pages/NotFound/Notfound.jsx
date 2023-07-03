import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './notfound.css';
const Notfound = () => {

    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h2>OOPS!!!</h2>
                <h1>404</h1>
                {/* <p></p> */}
                <p>The URL is not valid.The page you are looking for does not exist. 😞😾</p>
                <Link to={'/'} className='back'>
                    Go to <FaHome />
                </Link>
            </div>


        </div>
    );
};

export default Notfound;
