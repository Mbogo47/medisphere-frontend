import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiDomain } from '../../utils/utilsDomain';
import './add.css';

const Addprescription = ({ closeAdd }) => {
    const [formData, setFormData] = useState({
        appointmentId: '',
        medicationId: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { appointmentId, medicationId } = formData;
        if (!appointmentId || !medicationId) {
            toast.error('Please fill in all fields', {
                position: 'top-center',
                autoClose: 2000,
                closeOnClick: true,
            });
            return;
        }
        fetch(`${apiDomain}/pres`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                closeAdd();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleCancel = () => {
        closeAdd();
        toast.info("closed without adding",

            {
                position: 'top-center'
            });
    };

    return (
        <div className='add-container'>
            <form className='add' onSubmit={handleSubmit}>
                <ToastContainer />
                <input
                    type='text'
                    name='appointmentId'
                    placeholder='Appointment ID'
                    value={formData.appointmentId}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='medicationId'
                    placeholder='Medication ID'
                    value={formData.medicationId}
                    onChange={handleChange}
                />
                <button type='submit'>Add</button>

                <button type='button' onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default Addprescription;
