import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { apiDomain } from '../../utils/utilsDomain';
import './login.css';

const LoginPatient = () => {
    const schema = yup.object().shape({
        email: yup.string().required("Email is required").email("Invalid email format"),
        password: yup.string().required("Password is required"),
    });

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        fetch(`${apiDomain}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json(); // Parse response body as JSON
                } else {
                    throw new Error('Login failed');
                }
            })
            .then((data) => {
                console.log(data); // Log the response data to the console
                if (data.token) {
                    localStorage.setItem("user", JSON.stringify(data.token));
                    navigate('/appt');
                    toast.success("Login successful");
                } else {
                    toast.error("Invalid response from server");
                }
            })

            .catch((error) => {
                toast.error(error.message);
                console.log(error.message);
            });
    };



    const notify = (errors) => {
        toast.error({
            errors
        });
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Login</h3>
                    <input type="email" name="email" placeholder="Email" {...register("email")} />
                    {errors.email && notify(errors.email?.message)}
                    <input type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && notify(errors.password?.message)}
                    <button type="submit" className="btn-log" >Login</button>

                    <p className="signin">Don't have an account? <Link to={'/signup'} className="log">Sign Up</Link></p>

                </form>
            </div>
        </>
    );
}

export default LoginPatient;
