import React, { useEffect, useState } from 'react';
import { apiDomain } from '../../utils/utilsDomain';

const UserProfile = () => {
    const [user, setUser] = useState({});
    const [password, setPassword] = useState('');
    // const { email } = useParams();

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            const emailWithoutQuotes = storedEmail.replace(/"/g, ''); // Remove quotation marks from the email address
            const encodedEmail = encodeURIComponent(emailWithoutQuotes); // Encode the email address
            fetch(`${apiDomain}/getUser/${encodedEmail}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Check if the fetched data is correct
                    setUser(data);
                })
                .catch(error => console.log(error));
        }
    }, []);

    const handlePasswordChange = () => {
        // Send a request to update the password
        fetch(`${apiDomain}/changePassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email, newPassword: password }),
        })
            .then(response => response.json())
            // After the setUser(data) line in the fetch callback
            .then(data => {
                console.log(data); // Check if the data is being stored correctly
                setUser(data);
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <h1>User Profile</h1>
            <form className="add" >
                <div className="field">
                    <input type="text" placeholder='FirstName' value={user.firstName} />
                </div>
                <div className="field">
                    <input type="text" placeholder='LastName' value={user.lastName} />
                </div>
                <div className="field">
                    <input type="text" placeholder='Specialization' value={user.specialization} />
                </div>
                <div className="field">
                    <input type="text" placeholder='Email' defaultValue={user.email} />
                </div>
                <div className="field">
                    <input type="password" id="password" placeholder='NEW PASSWORD' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button onClick={handlePasswordChange}>Change Password</button>
            </form>
        </div>
    );
};

export default UserProfile;
