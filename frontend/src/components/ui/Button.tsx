import React from 'react'

type ButtonProps = {
    text: string,
    type?: 'submit' | 'button'
    icon?: React.ReactNode,
    handleClick?: () => void
}
export default function Button({ text, icon, type, handleClick }: ButtonProps) {
    return (
        <button onClick={handleClick} type={type}
            className={`flex items-center gap-2 text-white bg-primary2 hover:bg-primary1 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`} >
            {text} {icon}
        </button>
    )
}