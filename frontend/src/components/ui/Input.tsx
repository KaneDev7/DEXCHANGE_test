
import React, { useState } from 'react'
import { FieldErrors, InputValidationRules, UseFormRegister } from 'react-hook-form'

type InputTextValidationType = {
    required: {
        value: boolean,
        message: string
    },
    maxLength?: {
        value: number,
        message: string
    },
    minLength?: {
        value: number,
        message: string
    },
    min?: {
        value: number,
        message: string
    },
    max?: {
        value: number,
        message: string
    }
}

type InputProp = {
    label: string,
    placeholder: string,
    type: 'text' | 'number' | 'email' | 'password',
    validations: InputTextValidationType | any,
    defaultValue : string
    name: string,
    value?: string,
    disabled?: boolean
    errors: FieldErrors<InputValidationRules>
    register: UseFormRegister<InputValidationRules>
}

export default function Input({ label, placeholder, type, name, errors, validations, disabled, defaultValue, register }: InputProp) {
    const [value, setValue] = useState(defaultValue)
    return (
        <div className={`w-[calc(50%-8px)] shrink-0 `} >
            <label className='text-[16px] mb-2 block'>{label}</label>
            <input
                name={name}
                {...register(name, validations)}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                defaultValue={defaultValue}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`w-full border border-gray-300  text-sm rounded-lg  focus:border-blue-400 block px-6 py-4 outline-none`}
            />
            {errors[name] && <p className='text-red-400 text-sm'> {errors[name]?.message} </p>}
        </div>
    )
}
