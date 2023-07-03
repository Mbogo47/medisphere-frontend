import { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';
import './appt.css';
import { apiDomain } from '../../utils/utilsDomain';
const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch(`${apiDomain}/appointments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const allAppointments = await response.json();
            setAppointments(allAppointments.recordset);
        };
        fetchAppointments();
    }, []);

    // EDIT AND DELETE BUTTONS
    useEffect(() => {
        const handleEdit = async (appointmentId) => {
            const response = await fetch(`${apiDomain}/appointments`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            const allAppointments = await response.json();
            setAppointments(allAppointments.recordset);
        };
        handleEdit();
    }, []);

    useEffect(() => {
        const handleDelete = async (appointmentId) => {
            const response = await fetch(`${ apiDomain } /appointments`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const allAppointments = await response.json();
            setAppointments(allAppointments.recordset);
        };
        handleDelete();
    }, []);


    return (
        <div>
            <h1>Appointments</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Doctor Id</th>
                        <th>Doctor Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.appointmentId}>
                            <td>{appointment.appointmentId}</td>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.appointmentDate}</td>
                            <td>{appointment.appointmentTime}</td>
                            <td>{appointment.status}</td>
                            <td>{appointment.doctorId}</td>
                            <td>{appointment.doctorName}</td>
                            <td>
                                <button onClick={() => handleEdit(appointment.appointmentId)} className='back'>
                                    <FaPencilAlt />
                                </button>
                                <button onClick={() => handleDelete(appointment.appointmentId)} className='back'>
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

export default Appointments;
