import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Login = (props) => {
  const [formState, setFormState] = useState({ userName: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      userName: '',
      password: '',
    });
  };

  return (
        <div className="flex justify-center">
            <div className="card my-2 w-2/3 h-48 bg-base-100 shadow-xl image-full">
            <figure><img className="bg-cover" src="https://placeimg.com/400/100/animals" alt="background" /></figure>
                <div className="card-body">
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                    <form onSubmit={handleFormSubmit}>
                        <h2 className="card-title flex justify-center">Log in to your account!</h2>
                        <div className="form-control">
                            <div className="flex justify-center mt-4"> 
                                <input 
                                    className="input input-bordered text-gray-200"
                                    name="userName" 
                                    placeholder="Your username"
                                    type="text"  
                                    value={formState.userName}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex justify-center mt-4"> 
                                <input 
                                    className="input is-warning" 
                                    placeholder="********"
                                    name="password"
                                    type="password"  
                                    value={formState.password}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className="btn btn-primary mx-2">
                                        Submit                                            
                                </button>
                                <Link to="/">
                                    <button className="btn btn-primary mx-2">
                                        Cancel                                            
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    )}
                    {error && (
                    <div className="alert alert-warning shadow-lg">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>{error.message}</span>
                        </div>
                    </div>
                    )}
                </div>
            </div>         
        </div>
  );
};

export default Login;
