import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { atom, useAtom } from 'jotai';

// Atoms for registration form state
const regUsernameAtom = atom('');
const regPasswordAtom = atom('');
const regConfirmPasswordAtom = atom('');
const regEmailAtom = atom(''); // New atom for email
const regPhoneAtom = atom(''); 

const RegisterPage = () => {
    const [username, setUsername] = useAtom(regUsernameAtom);
    const [password, setPassword] = useAtom(regPasswordAtom);
    const [confirmPassword, setConfirmPassword] = useAtom(regConfirmPasswordAtom);
    const [email, setEmail] = useAtom(regEmailAtom); 
    const [phone, setPhone] = useAtom(regPhoneAtom); 
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        try { 
            const response = await axios.post('http://localhost:3000/Register', {
                username,
                password,
                email,  
                phone   
            });
            
            if (response.status === 201 || response.status === 200) {
                // Registration successful, redirect to login
                navigate('/login');
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed. Please try again.');
            console.log(error);
        }
    };

    return (
        <section className="bg-login-dark dark:bg-gray-900 max-h-max">
            <div className="flex flex-col items-center justify-center px-8 py-8
                mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0
                    sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight
                            text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        {error && (
                            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                                {error}
                            </div>
                        )}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username"
                                    className="block mb-2 text-sm font-medium
                                    text-gray-900 dark:text-white">Username</label>
                                <input type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300
                                    text-gray-900 sm:text-sm rounded-lg
                                    focus:ring-primary-600 focus:border-primary-600
                                    block w-full p-2.5 dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400
                                    dark:text-white dark:focus:ring-blue-500
                                    dark:focus:border-blue-500"
                                    placeholder="username"
                                    required=""
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            
                            
                            <div>
                                <label htmlFor="email"
                                    className="block mb-2 text-sm font-medium
                                    text-gray-900 dark:text-white">Email</label>
                                <input type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300
                                    text-gray-900 sm:text-sm rounded-lg
                                    focus:ring-primary-600 focus:border-primary-600
                                    block w-full p-2.5 dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400
                                    dark:text-white dark:focus:ring-blue-500
                                    dark:focus:border-blue-500"
                                    placeholder="name@example.com"
                                    required=""
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            
                            {/* New Phone Number Field */}
                            <div>
                                <label htmlFor="phone"
                                    className="block mb-2 text-sm font-medium
                                    text-gray-900 dark:text-white">Phone Number</label>
                                <input type="tel"
                                    name="phone"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300
                                    text-gray-900 sm:text-sm rounded-lg
                                    focus:ring-primary-600 focus:border-primary-600
                                    block w-full p-2.5 dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400
                                    dark:text-white dark:focus:ring-blue-500
                                    dark:focus:border-blue-500"
                                    placeholder="+1 (123) 456-7890"
                                    required=""
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="password"
                                    className="block mb-2 text-sm font-medium
                                    text-gray-900 dark:text-white">Password</label>
                                <input type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300
                                    text-gray-900 sm:text-sm rounded-lg
                                    focus:ring-primary-600 focus:border-primary-600
                                    block w-full p-2.5 dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400
                                    dark:text-white dark:focus:ring-blue-500
                                    dark:focus:border-blue-500"
                                    required=""
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium
                                    text-gray-900 dark:text-white">Confirm Password</label>
                                <input type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300
                                    text-gray-900 sm:text-sm rounded-lg
                                    focus:ring-primary-600 focus:border-primary-600
                                    block w-full p-2.5 dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400
                                    dark:text-white dark:focus:ring-blue-500
                                    dark:focus:border-blue-500"
                                    required=""
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit"
                                className="w-full text-white bg-blue-600
                                hover:bg-primary-700 focus:ring-4 focus:outline-none
                                focus:ring-primary-300 font-medium rounded-lg
                                text-sm px-5 py-2.5 text-center dark:bg-primary-600
                                dark:hover:bg-primary-700
                                dark:focus:ring-primary-800 hover:bg-indigo-500">Create Account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;