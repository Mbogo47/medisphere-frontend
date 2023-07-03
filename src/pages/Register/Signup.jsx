import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { apiDomain } from "../../utils/utilsDomain";
import './login.css';
import { format } from 'date-fns';

const Signup = () => {

    const navigate = useNavigate();
    const onSubmit = (data) => { 
        const dateofBirth = data.dateOfBirth;
        const formattedDate = format(new Date(dateofBirth), 'yyyy-MM-dd');
        
        let res = {
            fullName: data.fullName,
            email: data.email,
            dateOfBirth: formattedDate,
            password: data.password
        }
        console.log(res);
        fetch(`${apiDomain}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(res),
        })
            .then((response) => {
                if (response.ok) {
                    toast.success("Signup successful");
                    navigate('/patient');
                } else {
                    response.json().then((data) => {
                        toast.error(data.message);
                    });
                }

            })
            .catch((error) => {
                toast.error(error);
                console.log(error);
            });
    };



    const schema = yup.object().shape({
        fullName: yup.string().required("Username is required"),
        email: yup.string().required("Email is required").email("Invalid email format"),
        dateOfBirth: yup.string().required("dateofBirth is required"),
        password: yup.string()
            .required('Password is required')
            .matches(/[a-z]/, 'Must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
            .matches(/[0-9]/, 'Must contain at least one number')
            .matches(/[^a-zA-Z0-9]/, 'Must contain at least one special character')
            .test(
                'password',
                'Password must be at least 8 characters long',
                (value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)
            ),
        confirmPassword: yup.string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <>
            <div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Sign Up</h3>
                    <input type="text" name="fullName" placeholder="Patientname" {...register("fullName")} />
                    {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}

                    <input type="email" name="email" placeholder="Email" {...register("email")} />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}

                    <input type="date" name="DOB" placeholder="dateOfBirth" {...register("dateOfBirth")} />
                    {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth.message}</p>}

                    <input type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}

                    <input type="password" name="confirmPassword" placeholder="Confirm Password" {...register("confirmPassword")} />
                    {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}

                    <button type="submit">Sign Up</button>


                    <p className="signin">Already have an account? <Link to={'/patient'} className="log">Login</Link></p>
                </form>
            </div>
        </>
    );
};

export default Signup;