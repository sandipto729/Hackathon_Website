import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../store/userSlice';

const Login = () => {
    const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); 
  const fetchUser = async () => { 
    try {
      const response = await fetch(SummaryApi.UserFetch.url, {
        method: SummaryApi.UserFetch.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const result = await response.json();
      if (result.success) {
        dispatch(setUserDetails(result.data));
      }
    } catch (err) {
      toast.error('Error while fetching user details'); 
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch(SummaryApi.UserSignIn.url, {
        method: SummaryApi.UserSignIn.method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Login Successful');
        fetchUser();
        navigate('/home'); 
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.log(err);
      toast.error('Login Failed');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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

        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
      <p className={styles.signupPrompt}>
        Don't have an account? <Link to="/signup" className={styles.signupLink}>Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
