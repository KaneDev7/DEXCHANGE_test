import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

type SearchInputProps = {
    placeholder: string,
    value?: string,

}

export default function SearchInput({ placeholder, value }: SearchInputProps) {
    return (
        <div className="relative max-w-[825px] w-full ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <RiSearchLine size={22} className='ml-2' />
            </div>
            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-primary2 block w-full px-14 py-4 outline-none"
                placeholder={placeholder} required />
        </div>
    )
}



