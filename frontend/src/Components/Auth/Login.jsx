import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { toast, Bounce } from 'react-toastify';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleLogin = (event) => {
        event.preventDefault();
        if (!formData.email || !formData.password) {
            toast.warning('Please fill out all fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce, 
              });
            return;
        }
        if (!isValidEmail(formData.email)) {
            toast.warning('Please enter a valid email address', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce, 
              });
            return;
        }
        console.log(formData);
        toast.success('Account Created Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce, 
          });
    };
    

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src="https://i.indiglamour.com/photogallery/telugu/actress/2021/TL_Act_100321-01/Sai-Pallavi/normal/Sai-Pallavi_1141989096.jpg" alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Sign In</button>
                </form>
                <div className="mt-6 text-blue-500 text-center">
                    <Link to="../register" className="hover:underline">Sign Up Here</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
