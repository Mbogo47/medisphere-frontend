import { useState } from "react";
import './contact.css';

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