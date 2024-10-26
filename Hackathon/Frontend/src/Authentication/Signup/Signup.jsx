import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Signup.module.scss';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate
import SummaryApi from '../../common';
import { toast } from 'react-toastify';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); // Initialize useNavigate

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await fetch(SummaryApi.UserSignUp.url, {
                method: SummaryApi.UserSignUp.method,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            const result = await response.json();
            if (result.success) {
                toast.success('Sign Up Successful');
                navigate('/login'); // Use navigate instead of Navigate
            } else {
                toast.error(result.message);
            }
        } catch (err) {
            console.log(err);
            toast.error('Sign Up Failed');
        }
    };

    return (
        <div className={styles.signupContainer}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        className={errors.name ? styles.errorInput : styles.input}
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: 'Email is required' })}
                        className={errors.email ? styles.errorInput : styles.input}
                    />
                    {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: 'Password is required' })}
                        className={errors.password ? styles.errorInput : styles.input}
                    />
                    {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="teamName">Team Name</label>
                    <input
                        type="text"
                        id="teamName"
                        {...register('teamName', { required: 'Team name is required' })}
                        className={errors.teamName ? styles.errorInput : styles.input}
                    />
                    {errors.teamName && <p className={styles.errorMessage}>{errors.teamName.message}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="photo">Photo (URL)</label>
                    <input
                        type="text"
                        id="photo"
                        {...register('photo', { required: 'Photo URL is required' })}
                        className={errors.photo ? styles.errorInput : styles.input}
                    />
                    {errors.photo && <p className={styles.errorMessage}>{errors.photo.message}</p>}
                </div>

                <button type="submit" className={styles.submitButton}>Sign Up</button>
            </form>
            <p className={styles.loginPrompt}>
                Already have an account? <Link to="/login" className={styles.loginLink}>Login</Link>
            </p>
        </div>
    );
};

export default Signup;
