import instanceAxios from "@/lib/axios";
import { User } from "@/types/user.type";

export const getUsers = async (): Promise<User | any> => {
    try {
        const response = await instanceAxios.get(`/users`)
        return response?.data?.result

    } catch (error) {
        console.log(error)
        return error
    }
}


export const getOneUser = async (userId :string): Promise<User | any> => {
    try {
        const response = await instanceAxios.get(`/users/${userId}`)
        return response?.data?.result

    } catch (error) {
        console.log(error)
        return error
    }
}


export const addUser = async (data : FormData): Promise<User | any> => {
    try {
        const response = await instanceAxios.post(`/users`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return response

    } catch (error) {
        console.log(error)
        return error
    }
}

export const updateUser = async (data : FormData, userId :string): Promise<User | any> => {
    try {
        const response = await instanceAxios.put(`/users/${userId}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return response

    } catch (error) {
        console.log(error)
        return error
    }
}


export const deletUser = async (userId :string): Promise<User | any> => {
    try {
        const response = await instanceAxios.delete(`/users/${userId}`)
        return response

    } catch (error) {
        console.log(error)
        return error
    }
}