import React, { ReactNode } from 'react'
import { FiSettings } from 'react-icons/fi'
import { IoChevronDown } from 'react-icons/io5'

type AccordionProps = {
    children : ReactNode
}
export default function AccordionConfig({children}:AccordionProps ) {
    return (
        <li className='w-full'>
            <div className='w-full flex justify-between items-center  text-Secondary2 font-bold mb-4'>
                <div className='flex items-center gap-2'>
                    <FiSettings size={20} />
                    <p className='text-sm'>Configuration</p>
                </div>
                <IoChevronDown size={20} />
            </div>
            {children}
    
        </li>
    )
}
