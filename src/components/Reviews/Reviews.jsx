import './reviews.css'
const Reviews = ({ image, name, star, halfstar, text }) => {
    return (
        <div className='section'>
            <div className='box'>
                {image}
                <h4 className='name'>{name}</h4>
                <div className='stars'>
                    {star}
                    {star}
                    {star}
                    {star}
                    {halfstar}
                </div>
                <p className='text'>{text}</p>
            </div>
        </div>
    )
}

export default Reviews