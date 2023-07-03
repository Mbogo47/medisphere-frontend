import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiDomain } from '../../utils/utilsDomain';
import '../Prescriptions/add.css';

const Addmedication = ({ closeAdd }) => {
    const [formData, setFormData] = useState({
        medicationName: '',
        medicationDosage: '',
        usageInstructions: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { medicationId, medicationName, medicationDosage, usageInstructions } = formData;
        if (!medicationId || !medicationName || !medicationDosage || !usageInstructions) {
            toast.error('Please fill in all fields', {
                position: 'top-center',
                autoClose: 2000,
                closeOnClick: true,
            });
            return;
        }
        fetch(`${apiDomain}/med`, {
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
    }

    const handleCancel = () => {
        closeAdd();
        toast.info("closed without adding",

            {
                position: 'top-center'
            });
    }

    return (
        <div className='add-container'>
            <h1>Add Medication</h1>
            <form className='add' onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="medicationName"
                    placeholder="Medication Name"
                    required
                    value={formData.medicationName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="medicationDosage"
                    placeholder="Medication Dosage"
                    required
                    value={formData.medicationDosage}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="usageInstructions"
                    placeholder="Usage Instructions"
                    required
                    value={formData.usageInstructions}
                    onChange={handleChange}
                />

                <div className='add-buttons'>
                    <button type='submit'>Add</button>
                    <button type='button' onClick={handleCancel}>Cancel</button>
                </div>

            </form>


        </div>
    );
};

export default Addmedication;

