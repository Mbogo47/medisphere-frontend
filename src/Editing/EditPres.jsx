// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// const PrescriptionForm = () => {
//     const { id } = useParams();
//     const [data, setData] = useState({});

//     useEffect(() => {
//         fetch(`http://localhost:8081/pres/${id}`)
//             .then((response) => response.json())
//             .then((responseData) => {
//                 const prescriptionData = responseData.recordsets[0][0]; // Access the prescription data
//                 setData(prescriptionData);
//                 console.log(prescriptionData); // Log the data to the console
//             })
//             .catch((error) => console.error(error));
//     }, []);

//     // handling updating the prescription details
//     useEffect(() => {
//         const updatePrescription = async () => {
//             const response = await fetch(`http://localhost:8081/pres/${id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             });
//             const allPrescriptions = await response.json();
//             console.log(allPrescriptions);
//         };

//         updatePrescription(); // Call the updatePrescription function

//     }, []);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         updatePrescription();
//     };

//     return (
//         <div className="form-container">
//             <h1>Prescription Details Update</h1>
//             <form className="add" onSubmit={handleSubmit}>
//                 <input type="text" placeholder= "Appointment Id" required defaultValue={data.appointmentId}/>
//                 <input type="text" placeholder="PatientId" required defaultValue={data.patientId} />
//                 <input type="text" placeholder="Medication Id" required defaultValue={data.medicationId} />
//                 <input type="text" placeholder="Medication" required defaultValue={data.medicine} />
//                 <input type="text" placeholder="Dosage" required defaultValue={data.dosage} />
//                 <input type="text" placeholder="Instructions" required defaultValue={data.instructions} />
//                 <Link to="/dashboard/prescription">
//                     <input type="submit" value="Update Details" />
//                 </Link>
//             </form>
//         </div>
//     );
// };

// export default PrescriptionForm;
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiDomain } from "../utils/utilsDomain";

const PrescriptionForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`${apiDomain}/pres/${id}`)
            .then((response) => response.json())
            .then((responseData) => {
                const prescriptionData = responseData.recordsets[0][0];
                setData(prescriptionData);
                console.log(prescriptionData);
            })
            .catch((error) => console.error(error));
    }, [id]);

    const updatePrescription = async () => {
        try {
            const response = await fetch(`${apiDomain}/pres/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const allPrescriptions = await response.json();
            console.log(allPrescriptions);
            console.log(data);
            // Redirect to the prescription page after successful update
            navigate("/dashboard/prescription");
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePrescription();
    };

    return (
        <div className="form-container">
            <h1>Prescription Details Update</h1>
            <form className="add" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="appointmentId"
                    placeholder="Appointment Id"
                    required
                    value={data.appointmentId || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="patientId"
                    placeholder="PatientId"
                    required
                    value={data.patientId || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="medicationId"
                    placeholder="Medication Id"
                    required
                    value={data.medicationId || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="medicine"
                    placeholder="Medication"
                    required
                    value={data.medicine || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="dosage"
                    placeholder="Dosage"
                    required
                    value={data.dosage || ""}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="instructions"
                    placeholder="Instructions"
                    required
                    value={data.instructions || ""}
                    onChange={handleChange}
                />
                <Link to="/dashboard/prescription">
                    <input type="submit" value="Update Details" />
                </Link>
            </form>
        </div>
    );
};

export default PrescriptionForm;
