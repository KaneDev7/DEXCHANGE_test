"use client"
import React from 'react'
import TableRow from './TableRow'
import { User } from '@/types/user.type'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '@/api/user'


export default function UserList() {

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => getUsers()
    })
    const users :User[] = data

    if(error) return <p>Quelque chose s'est mal passé</p>
    if(isLoading) return <p>Chargement...</p>

    return (

        <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-white ">
                    <tr>
                        <th scope="col" className="px-6 py-7">
                            Prénoms
                        </th>
                        <th scope="col" className="px-6 py-7">
                            Noms
                        </th>
                        <th scope="col" className="px-6 py-7">
                            E-mails
                        </th>
                        <th scope="col" className="px-6 py-7">
                            Rôles
                        </th>
                        <th scope="col" className="px-6 py-7">
                            Statut
                        </th>
                        <th scope="col" className="px-6 py-7">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => (
                            <TableRow user={user} refetch={refetch}/>
                        ))
                    }

                </tbody>
            </table>
        </div>

    )
}
