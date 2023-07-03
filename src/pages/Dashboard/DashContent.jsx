import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaHeartbeat, FaUserInjured } from "react-icons/fa";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { apiDomain } from '../../utils/utilsDomain';

const Dashcontent = () => {

    // Fetch appointments count
    const [count, setCount] = useState([]);
    useEffect(() => {
        const fetchAppointmentsCount = async () => {
            const response = await fetch(`${apiDomain}/appointments/count`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const allAppointmentsCount = await response.json()
            setCount(allAppointmentsCount.recordset)
        }
        fetchAppointmentsCount()

    }, [])

    // Fetch patients count
    const [countPatient, setCountpatient] = useState([]);
    useEffect(() => {
        const fetchPatientsCount = async () => {
            const response = await fetch(`${apiDomain}/patients/count`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const allPatientsCount = await response.json()
            setCountpatient(allPatientsCount.recordset)
        }
        fetchPatientsCount()
    }, [])

    // Surgery count
    const [countSurgery, setCountSurgery] = useState([]);
    useEffect(() => {
        const fetchSurgeryCount = async () => {
            const response = await fetch(`${apiDomain}/surgeries/count`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const allSurgeryCount = await response.json()
            setCountSurgery(allSurgeryCount.recordset)
        }
        fetchSurgeryCount()
    }, [])

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const getCurrentDateTime = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const dateTimeString = currentTime.toLocaleString('en-US', options);
        return dateTimeString;
    };


    return (
        <>
            <div className="dash-content">
                <div className="card-header">
                    <h1> Welcome to Medisphere <FaHeartbeat style={{'verticalAlign':'middle'}}/></h1>
                    {getCurrentDateTime().replace('at', '')}
                </div>
                <div className="card">

                    <div className="card-body">
                        <FaCalendarAlt className="icon-dash" />
                        {count.map((count, i) => (
                            <h1 key={i}>{count.appointmentsCount} Appointments</h1>
                        ))}
                        
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <FaUserInjured className="icon-dash" />
                        {countPatient.map((countPatient, i) => (
                            <h1 key={i}>{countPatient.patientsCount} Patients</h1>
                        ))}
                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <RiSurgicalMaskFill className="icon-dash" />
                        {countSurgery.map((countSurgery, i) => (
                            <h1 key={i}>{countSurgery.surgeriesCount} Surgeries</h1>
                        ))}
                        
                    </div>
                </div>

            </div>
        </>
    );
};

export default Dashcontent;