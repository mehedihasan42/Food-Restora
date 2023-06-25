import React from 'react';
import useAuth from '../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GoogleLogin = () => {
    const { googleSignIn,updateUserProfile } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(resutl => {
                const loggedUser = resutl.user;
                console.log(loggedUser)
                updateUserProfile(loggedUser.displayName, loggedUser.photoURL)
                    .then(() => {
                        const userData = { name: loggedUser.displayName, email: loggedUser.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })
                            navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage)
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                <FcGoogle className='text-xl' />
            </button>
        </div>
    );
};

export default GoogleLogin;