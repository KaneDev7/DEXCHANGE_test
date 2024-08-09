import { User } from '@/types/user.type'
import { useRouter } from 'next/navigation'
import React from 'react'
import StatusUser from './ui/StatusUser'
import { useMutation } from '@tanstack/react-query'
import { deletUser } from '@/api/user'

type TableRowProp = {
    user : User,
    refetch : () => void
}

export default function TableRow({ user , refetch}: TableRowProp) {
    const {firstName, lastName, email, role, isActive, _id} = user
    const router = useRouter()

        // delete user 
        const {mutate} = useMutation({
            mutationFn:  async (userId : string) => {
                return await deletUser(userId as string)
            },
            onSettled: async (data, error, context) => {
                console.log('data', data)
                if (data?.status === 203) {
                    refetch()
                } else {
    
                }
            },
        })

        const handleDelete = (userId: string) => {
            const confirm = window.confirm('Voulais vous continuez ?')
            if(!confirm) return
            mutate(userId)
        }
        
    return (
        <tr className="bg-Secondary2 border-b text-[14px] text-black  ">
            <td scope="row" className="w-[166px] px-6 py-7 ">
                {firstName}
            </td>
            <td className="w-[166px] px-6 py-7">
                {lastName}
            </td>
            <td className="w-[166px] px-6 py-7">
                {email}

            </td>
            <td className="w-[166px] px-6 py-7">
                {role}
            </td>
            <td className="w-[166px] px-6 py-7">
                <StatusUser isActive={isActive} />
            </td>
            <td className="w-[200px] px-6 py-7 text-righ t">
                <div className='flex items-center gap-2'>
                    <button
                        onClick={() => router.push(`/users/${_id}`)}
                        className='min-w-[86px] flex justify-center items-center  py-2 px-4 border border-primary2 rounded-[10px] text-primary2 text-[14px] '>Voir</button>
                    <button
                    onClick={() => handleDelete(_id)}
                        className='min-w-[86px] flex justify-center items-center  py-2 px-4 bg-red-500 rounded-[10px] text-[14px] text-Secondary2'
                    >Supprimer
                    </button>
                </div>
            </td>
        </tr>
    )
}
