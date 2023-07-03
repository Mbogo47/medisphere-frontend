import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import picImage_1 from "../../assets/pic-1.png";
import picImage_2 from "../../assets/pic-2.png";
import picImage_3 from "../../assets/pic-3.png";
import './reviews.css'
import Reviews from './Reviews';

const Revcont = () => {
    return (
        <div className='section' id="reviews">
            <div className="review">
                <h3 className='heading'>our reviews</h3>
                <div className='box-container'>
                    <Reviews image={<img src={picImage_1} alt="customer 1" className="img" />} name="Christian Dior" star={<FaStar />} halfstar={<FaStarHalfAlt />} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!" />
                    <Reviews image={<img src={picImage_2} alt="customer 2" className="img" />} name="Charlotte Dobre" star={<FaStar />} halfstar={<FaStarHalfAlt />} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!" />
                    <Reviews image={<img src={picImage_3} alt="customer 1" className="img" />} name="Alex Wennberg" star={<FaStar />} halfstar={<FaStarHalfAlt />} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!" />
                </div>
            </div>
        </div>
    )
}

export default Revcont