import React from 'react'

export default function StatusUser({isActive} :{isActive : Boolean} ) {
    const statusColor =  isActive ? 'text-[#073b0d]'  : 'text-[#490808]'
    const statusBg = isActive ? 'bg-[#e9faef]' : 'bg-[#ffe3e3]'
    const statusText = isActive ? 'Actif'  : 'Inactif'
    return <p className={`max-w-[60px]  py-1 px-3 text-center text-nowrap text-sm rounded-full ${statusColor} ${statusBg}`} > {statusText} </p>
}

