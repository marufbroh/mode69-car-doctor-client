import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoUrl, email, password);

        if (password.length < 6) {
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                updateUserData(name)
                toast.success("User Successfully Created")
                form.reset()
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="hero mb-12">
            <div className="hero-content flex-col lg:flex-row lg:gap-20">
                <div className="w-1/2">
                    <img src={signupImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="w-full p-8">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">Register</h2>
                        {/* <p className="text-xl text-gray-600 text-center">Please Register!</p> */}
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name="name" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" required />
                        </div>
                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" type='submit'>Register</button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <p className="text-sm text-center text-gray-500">Already have an account? <Link to={"/login"} className='underline'>Login</Link></p>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                        <SocialLogin />
                        {/* <div className='mt-4'>
                            {
                                error ? <p className="text-sm text-center text-red-600">
                                    {error}
                                </p> :
                                    <p className="text-sm text-center text-green-500">
                                        {success}
                                    </p>
                            }
                        </div> */}
                        {/* <div className='flex flex-col lg:flex-row gap-3'>
                            <button onClick={handleGoogleSignIn} className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                                <FaGoogle className='text-black' />
                                <span className="py-3 text-center text-gray-600 font-bold">Google</span>
                            </button>
                            <button onClick={handleGithubSignIn} className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                                <FaGithub className='text-black' />
                                <span className="py-3 text-center text-gray-600 font-bold">Github</span>
                            </button>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;