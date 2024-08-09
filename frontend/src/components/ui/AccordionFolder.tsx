import React, { ReactNode } from 'react'
import { CiFolderOn } from 'react-icons/ci'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'

type AccordionProps = {
    children : ReactNode
}
export default function AccordionFolder({children}:AccordionProps ) {
    return (
        <li className='w-full'>
            <div className='w-full flex justify-between items-center  text-Secondary3 font-bold mb-4'>
                <div className='flex items-center gap-2'>
                    <CiFolderOn size={20} />
                    <p className='text-sm'>Nouveau</p>
                </div>
                <IoChevronUp size={20} />
            </div>
            {children}
        </li>
    )
}
