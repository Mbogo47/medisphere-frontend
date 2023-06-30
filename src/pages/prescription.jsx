import { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Addprescription from '../components/Addpres';
import '../styles/appt.css';
import { apiDomain } from '../utils/utilsDomain';

const Prescription = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const [addOpen, setAddOpen] = useState(false);
    
    const fetchPrescriptions = async () => {
        const response = await fetch(`${apiDomain}/pres`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const allPrescriptions = await response.json();
        setPrescriptions(allPrescriptions.recordset);

    };
    useEffect(() => {
        fetchPrescriptions();
    }
        , []);
    // delete button
    const deletePrescriptions = async (prescriptionId) => {
        console.log(prescriptionId);

        try {
            const response = await fetch(`${apiDomain}/pres/${prescriptionId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const allPrescriptions = await response.json();
            setPrescriptions(allPrescriptions.recordset);
            fetchPrescriptions();
        }
        catch (err) {
            console.error(err.message);
        }
    };


    return (
        <div>
            <h1>Prescriptions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Patient Name</th>
                        <th>Medication</th>
                        <th>Dosage</th>
                        <th>Instructions</th>
                        <th>Date</th>
                        <th>Doctor Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {prescriptions && prescriptions.length > 0 && (
                    <tbody>
                        {prescriptions.map((prescription) => (
                            <tr key={prescription.prescriptionId}>
                                <td>{prescription.prescriptionId}</td>
                                <td>{prescription.patientName}</td>
                                <td>{prescription.medicationName}</td>
                                <td>{prescription.dosage}</td>
                                <td>{prescription.usageInstructions}</td>
                                <td>{prescription.appointmentDate}</td>
                                <td>{prescription.doctorId}</td>
                                <td>
                                    <Link to={`/dashboard/PresForm/${prescription.prescriptionId}`}>
                                        <button className='back'>
                                            <FaPencilAlt />
                                        </button>
                                    </Link>

                                    <button className='back' onClick={() => deletePrescriptions(prescription.prescriptionId)}>
                                        <RiDeleteBinFill />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}


            </table>
            <button onClick={() => setAddOpen(true)}>
                Add
            </button>
            {addOpen &&
                <Addprescription closeAdd={() => setAddOpen(false)} />}
        </div>
    )



}

export default Prescription;

