import '../styles/services.css'
const Services = ({ icon, heading, description, button, span }) => {
    return (
        <div className="section" >
            <div className='box'>
                <div className='icon'>{icon}</div>
                <h4>{heading}</h4>
                <p>{description}</p>
                <a href="#" className="btn">{span} {button}</a>
            </div>
        </div>
    )
}

export default Services