import React from 'react'
import UserAcount from './UserAcount'
import cn from "classnames";
import Typography from './Typography/Typography';

export default function Header() {
    return (
        <div className='w-full flex items-center justify-between self-start bg-white px-10 py-7 '>
            <h2 className='text-[16px] '>Utilisateurs</h2>
            <UserAcount />
        </div>
    )
}
