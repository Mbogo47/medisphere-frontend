import { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';
import { apiDomain } from '../../utils/utilsDomain';
import '../Appointments/appt.css';

const Medical = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchRecords = async () => {
            const response = await fetch(`${apiDomain}/history`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const allRecords = await response.json()
            setRecords(allRecords.recordset)
        }
        fetchRecords()
    }, [])

    return (
        <div >
            <h1>Medical History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient Id</th>
                        <th>Patient Name</th>
                        <th>Diagnosis</th>
                        <th>Doctor Id</th>
                        <th>Doctor Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, recordId) => (
                        <tr key={recordId}>
                            <td>{record.patientId}</td>
                            <td>{record.patientName}</td>
                            <td>{record.diagnosis}</td>
                            <td>{record.doctorId}</td>
                            <td>{record.doctorName}</td>
                            <td>
                                <button className='edit'>
                                    <FaPencilAlt />
                                </button>
                                <button className='delete' >
                                    <RiDeleteBinFill />
                                </button>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Medical;