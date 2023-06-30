import React, { useEffect, useState } from 'react';
import { apiDomain } from '../utils/utilsDomain';

const Appt = () => {
    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');

    useEffect(() => {
        // Fetch departments from the server
        fetch(`${apiDomain}/departments`)
            .then(response => response.json())
            .then(data => {
                const departments = data.recordset; // or data.recordsets[0]
                setDepartments(departments);
                console.log(departments);
            })
            .catch(error => console.log(error));
   


        fetch(`${apiDomain}/doctors`)
            .then(response => response.json())
            .then(data => {
                const doctors = data.recordset; // or data.recordsets[0]
                setDoctors(doctors);

                console.log(doctors); // Place the console.log here
            })
            .catch(error => console.log(error));
    }, []);


    const handleDepartmentChange = (event) => {
        const selectedDepartment = event.target.value;
        setSelectedDepartment(selectedDepartment);

        // Filter doctors based on the selected department
        const filteredDoctors = doctors.filter(doctor => doctor.specialization === selectedDepartment);
        setSelectedDoctor('');
        setDoctors(filteredDoctors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform the form submission to create the appointment
        const appointmentData = {
            patientId: 1, // Replace with the actual patient ID
            doctorId: selectedDoctor,
            appointmentDate,
            appointmentTime,
            status: 'Scheduled',
        };

        fetch(`${apiDomain}/appointments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointmentData),
        })
            .then(response => response.json())
            .then(data => {
                // Handle success or display an error message
                console.log(data);
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <h1>Create Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="department">Department:</label>
                    <select id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
                        <option value="">Select Department</option>
                        {departments.map(department => (
                            <option key={department.departmentId} value={department.departmentId}>
                                {department.departmentName}
                            </option>
                        ))}
                    </select>

                </div>
                <div className="field">
                    <label htmlFor="doctor">Doctor:</label>
                    <select id="doctor" value={selectedDoctor} onChange={event => setSelectedDoctor(event.target.value)}>
                        <option value="">Select Doctor</option>
                        {doctors.map(doctor => (
                            <option key={doctor.doctorId} value={doctor.doctorId}>
                                {doctor.firstName} {doctor.lastName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="appointmentDate">Date:</label>
                    <input type="date" id="appointmentDate" value={appointmentDate} onChange={event => setAppointmentDate(event.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="appointmentTime">Time:</label>
                    <input type="time" id="appointmentTime" value={appointmentTime} onChange={event => setAppointmentTime(event.target.value)} />
                </div>
                <button type="submit">Create Appointment</button>
            </form>
        </div>
    );
};

export default Appt;
