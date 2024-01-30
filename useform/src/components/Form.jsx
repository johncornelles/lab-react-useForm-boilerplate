import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';

const MyForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        toast.success("Registration successful!");
    };

    return (
        <div className='form-container'>
             <ToastContainer /> 
            { isSubmitSuccessful &&
                <p className='success-message'>Registration successful !!!</p>
            }
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label htmlFor='firstName' className='form-label label-text'>
                        First Name:
                    </label>
                    <input type='text' {...register("firstName", { required: "Firstname is required" })} id="firstName" className='form-input' />
                    {errors.firstName && <p className='error-message'>{errors.firstName.message}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor='lastName' className='form-label label-text'>
                        Last Name:
                    </label>
                    <input type='text' {...register("lastName", { required: "Lastname is required" })} id="lastName" className='form-input' />
                    {errors.lastName && <p className='error-message'>{errors.lastName.message}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor='email' className='form-label label-text'>
                        Email:
                    </label>
                    <input type='text' {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address"
                        }
                    })} id="email" className='form-input' />
                    {errors.email && <p className='error-message'>{errors.email.message}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor='password' className='form-label label-text'>
                        Password:
                    </label>
                    <input type='password' {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Password must be more than 4 characters"
                        },
                        maxLength: {
                            value: 20,
                            message: "Password cannot be more than 20 characters"
                        }
                    })} id="password" className='form-input' />
                    {errors.password && <p className='error-message'>{errors.password.message}</p>}
                </div>

                <button type="submit" className='form-button'>Submit</button>
            </form>
        </div>
    );
};

export default MyForm;