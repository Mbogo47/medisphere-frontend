import React, { useEffect, useState } from 'react';
import '../Appointments/appt.css';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';
import { apiDomain } from '../../utils/utilsDomain';

const Medical = () => {
    const [medication, setMedication] = useState([]);

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
                <tbody>
                    {medication.map((med) => (
                        <tr key={med.medicationId}>
                            <td>{med.medicationId}</td>
                            <td>{med.medicationName}</td>
                            <td>{med.medicationDosage}</td>
                            <td>{med.usageInstructions}</td>
                            <td>
                                <button className="back">
                                    <FaPencilAlt />
                                </button>
                                <button className="back">
                                    <RiDeleteBinFill />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Medical;
