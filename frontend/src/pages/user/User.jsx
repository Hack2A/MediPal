import React from 'react'
import { useState, useEffect } from 'react'
import { CircleUserRound, Pencil } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
    const [isEdit, setIsEdit] = useState(false)

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('userToken');
        navigate("/", { replace: true });
    };

    return (
        <>
            {/* Basic User details + a button to edit the items */}
            <div className='flex justify-around p-3 mt-5'>
                <div className="left flex gap-2">
                    <CircleUserRound size={56} />
                    <div>
                        <h1 className='text-3xl'>Full Name</h1>
                        <h3 className='text-xl'>@username</h3>
                    </div>
                </div>
                <div className="right h-full">
                    <button
                        className='flex gap-1 hover:cursor-pointer justify-center items-center bg-blue-600 text-white px-5 py-2 rounded-full'
                        onClick={() => { setIsEdit(!isEdit) }}
                    >
                        <span>
                            Edit Profile
                        </span>
                        <Pencil size={18} />
                    </button>
                </div>
            </div>

            {/* All the fields and details user entered */}
            <div className='flex justify-around items-center my-3 rounded-4xl w-full mx-auto'>
                <div className=''>
                    left
                </div>

                <div className=''>
                    right
                </div>

            </div>

            <div className='flex justify-center items-center'>
                <button className='hover:cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-full'
                    onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>
        </>
    )
}

export default User