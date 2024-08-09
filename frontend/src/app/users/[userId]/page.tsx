import UserForm from '@/components/UserForm'
import React from 'react'

export default function page() {
    return (
        <div className="w-full p-10 space-y-4">
            <h1 className="text-3xl font-bold">Voir l’utilisateur</h1>
            <UserForm isUpdate={true} />
        </div>
    )
}
