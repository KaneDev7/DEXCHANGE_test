import Image from 'next/image'
import React from 'react'
import Typography from './Typography/Typography'

export default function UserAcount() {
    return (
        <div className='w-[205px] h-[40px] flex items-center gap-2'>
            <Image
                width={500}
                height={500}
                alt='image profile'
                src='/imges/profile.jpeg'
                className='w-10 h-10 rounded-full object-cover'
            />
            <div className=''>
                <h3 className='text-[16px] font-bold '>Omar FALL</h3>
                <p className='text-[14px] '>fallo@dexchange.sn</p>
            </div>
        </div>
    )
}
