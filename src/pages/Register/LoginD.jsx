import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { apiDomain } from '../../utils/utilsDomain';
import './login.css';

const DoctorLogin = () => {
    const schema = yup.object().shape({
        email: yup.string().required("Email is required").email("Invalid email format"),
        password: yup.string().required("Password is required"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        fetch(`${apiDomain}/auth/loginDoctor`, {
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
                    localStorage.setItem("email", JSON.stringify(data.email)); // Store email in local storage
                    navigate('/dashboard/home');
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
                    <button className="btn-log">Login</button>
                </form>
            </div>
        </>
    );
}

export default DoctorLogin;
