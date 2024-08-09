"use client"
import React from 'react'
import { FieldErrors, InputValidationRules, UseFormRegister } from 'react-hook-form';


type InputSelectProps = {
    label?: string,
    placeholder?: string,
    data?: (string | number | null)[]
    name: string,
    defaultValue?: string,
    errors: FieldErrors<InputValidationRules>
    register: UseFormRegister<InputValidationRules>
}


export default function InputSelect({ label, name, data, errors, defaultValue, register }: InputSelectProps) {

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {

    }

    return (
        <div className='w-[calc(50%-8px)] shrink-0  flex flex-col gap-2'>
            <label className='text-[16px]  block'>{label}</label>

            <select 
                {...register(name)}
                onChange={handleSelect}
                name={name}
                className={`w-full border border-gray-300  text-sm rounded-lg  focus:border-primary2 block px-6 py-4 outline-none`}

            >
                {
                    data?.map((item, index) => (
                    <option selected={defaultValue?.trim() === item} key={index}>{item}</option>
                    ))
                }
            </select>

            {errors[name] && <p className='text-red-400 text-sm'> {errors[name].message} </p>}

        </div>
    )
}