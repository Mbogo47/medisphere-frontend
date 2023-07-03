import React, { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { apiDomain } from '../../utils/utilsDomain';
import '../Appointments/appt.css';
import Addmedication from "./Addmed";

const Medication = () => {
    const [medication, setMedication] = useState([]);
    const [addOpen, setAddOpen] = useState(false);

    useEffect(() => {
        const fetchMedication = async () => {
            try {
                const response = await fetch(`${apiDomain}/medications`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const allMedication = await response.json();
                setMedication(allMedication.recordset);
            } catch (error) {
                console.error('Error fetching medication:', error);
            }
        };
        fetchMedication();
    }, []);

    // delete button
    const deleteMedication = async (medicationId) => {
        console.log(medicationId);

        try {
            const response = await fetch(`${apiDomain}/medications/${medicationId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const allMedication = await response.json();
            setMedication(allMedication.recordset);
        }
        catch (err) {
            console.error(err.message);
        }
    };


    return (
        <div>
            <h1>Medication</h1>
            <table>
                <thead>
                    <tr>
                        <th>Medication Id</th>
                        <th>Medication Name</th>
                        <th>Medication Dosage</th>
                        <th>Usage Instructions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {medication && medication.length > 0 && (

                    <tbody>
                        {medication.map((med) => (
                            <tr key={med.medicationId}>
                                <td>{med.medicationId}</td>
                                <td>{med.medicationName}</td>
                                <td>{med.dosage}</td>
                                <td>{med.usageInstructions}</td>
                                <td>
                                    <Link to={`/dashboard/MedForm/${med.medicationId}`}>
                                        <button className="back">
                                            <FaPencilAlt />
                                        </button>
                                    </Link>
                                    <button className="back" onClick={() => deleteMedication(med.medicationId)}>
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
                <Addmedication closeAdd={() => setAddOpen(false)} />}
        </div>
    );
};

export default Medication;
