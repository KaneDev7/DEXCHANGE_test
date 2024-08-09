"use client"
import { addUser, getOneUser, updateUser } from '@/api/user'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { User } from '@/types/user.type'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import React  from 'react'
import { useForm } from 'react-hook-form'
import InputSelect from './ui/InputSelect'

export const requiredValidation = {
    required: { value: true, message: 'Ce Champ est obligatoire' },
}

export default function UserForm({isUpdate}: {isUpdate : boolean} ) {
    const {userId} = useParams()
    const router = useRouter()

    // Fetch user data
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['users', userId ],
        queryFn: async () => getOneUser(userId as string)
    })

    // update user data
    const {mutate : updateUserMuatation} = useMutation({
        mutationFn:  async (data : FormData) => {
            return await updateUser(data, userId as string)
        },
        onSettled: async (data, error, context) => {
            if (data?.status === 201) {
                router.push('/')
            } else {

            }
        },
    })

    // add new user
    const {mutate : addUserMuatation} = useMutation({
        mutationFn:  async (data : FormData) => {
            return await addUser(data)
        },
        onSettled: async (data, error, context) => {
            console.log('data', data)
            if (data?.status === 201) {
                router.push('/')
            } else {

            }
        },
    })

    const user : User = data

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm()

    
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('email', data.email)
        formData.append('phoneNumber', data.phoneNumber)
        formData.append('adress', data.adress)
        formData.append('role', data.role)

        isUpdate ? updateUserMuatation(formData) : addUserMuatation(formData)
    }


    if(error) return <p className='text-red-400'>Quelque chose s'est mal passé</p>

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)} className='w-full py-4 px-8 bg-white'>
            <h2 className='mb-12'>{isUpdate ? `${user?.firstName} ${user?.lastName}`: 'Ajouter un utilisateur'} </h2>
            <div className='w-full mb-20  '>
                <div className='w-full flex gap-4 my-4 '>
                    <Input
                        label='Adresse e-mail'
                        type='email'
                        name='email'
                        defaultValue={user?.email} 
                        register={register}
                        errors={errors}
                        validations={{
                            ...requiredValidation,
                        }}
                    />

                    <Input
                        label='Numéro de téléphone'
                        type='number'
                        name='phoneNumber'
                        defaultValue={user?.phoneNumber} 
                        register={register}
                        errors={errors}
                        validations={{
                            ...requiredValidation,
                        }}
                    />
                </div>

                <div className='w-full flex gap-4 flex-wrap my-4'>
                    <Input
                        label='Nom'
                        type='text'
                        name='lastName'
                        defaultValue={user?.lastName} 
                        register={register}
                        errors={errors}
                        validations={{
                            ...requiredValidation,
                        }}
                    />

                    <Input
                        label='Prénom'
                        type='text'
                        name='firstName'
                        defaultValue={user?.firstName} 
                        register={register}
                        errors={errors}
                        validations={{
                            ...requiredValidation,
                        }}
                    />
                </div>

                <div className='w-full flex gap-4 flex-wrap my-4'>
                    <InputSelect
                        label='Rôle'
                        type='text'
                        data={['Admin', 'Agence', 'Invité','Mandataire', 'Client' ]}
                        name='role'
                        defaultValue={user?.role}
                        register={register}
                        errors={errors}
                        validations={{
                            ...requiredValidation,
                      
                        }}
                    />

                    <Input
                        label='Adresse'
                        type='text'
                        name='adress'
                        defaultValue={user?.adress} 
                        register={register}
                        errors={errors}
                        validations={{
                            ...requiredValidation,
                  
                        }}
                    />
                </div>
            </div>

            <Button type="submit" text={isUpdate ? 'Modifier' : 'Sauvegarder'} />
        </form>
    )
}
