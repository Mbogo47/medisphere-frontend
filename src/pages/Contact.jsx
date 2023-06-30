import { useState } from "react";
import '../styles/contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };

    return (
        <div className="section" id="contact">
            <h3 className="heading">Contact Us</h3>
            {/* <div className="contact-info">
                <p>For any inquiries or feedback, please feel free to reach out to us:</p>
                <ul>
                    <li><FaPhone className="icon" /> <span>123-456-7890</span></li>
                    <li><FaEnvelope className="icon" /> <span>example@example.com </span></li>
                    <li><FaMapMarkerAlt className="icon" /> <span>  123 Main Street, City, Country </span></li>
                </ul>
            </div> */}


            <form onSubmit={handleSubmit}>
                <h3>contact us</h3>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />


                <textarea
                    id="message"
                    value={message}
                    placeholder="message"
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit">Send</button>
            </form>


        </div>
    );
};

export default Contact;