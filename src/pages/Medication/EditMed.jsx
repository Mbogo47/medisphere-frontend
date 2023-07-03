import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiDomain } from "../../utils/utilsDomain";


const MedicationForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`${apiDomain}/med/${id}`)
            .then((response) => response.json())
            .then((responseData) => {
                const medicationData = responseData.recordsets[0][0];
                setData(medicationData);
                console.log(medicationData);
            })
            .catch((error) => console.error(error));
    } , [id]);

    const updateMedication = async () => {
        try {
            const response = await fetch(`${apiDomain}/med/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const allMedications = await response.json();
            console.log(allMedications);
            console.log(data);
            // Redirect to the medication page after successful update
            navigate("/dashboard/medication");
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateMedication();
    }

    return (
        <div className="form-container">
            <h1>Medication Details Update</h1>
            <form className="add" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="medicationId"
                    placeholder="Medication Id"
                    required
                    value={data.medicationId}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="medicationName"
                    placeholder="Medication Name"
                    required
                    value={data.medicationName}
                    onChange={handleChange}
                />

                <input
                    type="text"     
                    name="medicationDosage"
                    placeholder="Medication Dosage"
                    required
                    value={data.dosage}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="usageInstructions"
                    placeholder="Usage Instructions"
                    required
                    value={data.usageInstructions}
                    onChange={handleChange}
                />
                <Link to="/dashboard/medication">
                    <button className="btn" type="submit">Update</button>
                </Link>
               </form>
        </div>
    );
};

export default MedicationForm;