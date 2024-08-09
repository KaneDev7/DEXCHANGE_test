const userSchema = require('../model/users.model')

const create = async (req, res) => {
    const userData = req.body
    if(!userData) throw new Error('somme thing went worng')
    try {
        await userSchema.create(userData)
        const message = `user created`
        res.status(201).json({result : message})

    } catch (error) {
        console.log('error', error)
    }
}


const findAll = async (req, res) => {
    try {
        const result = await userSchema.find()
        res.status(201).json({result})

    } catch (error) {
        console.log('error', error)
    }
}



const findOne = async (req, res) => {
    const {id} = req.params
    if(!id) throw new Error('somme thing went worng')
    try {
        const result = await userSchema.findById(id)
        res.status(200).json({result})

    } catch (error) {
        console.log('error', error)
    }
}


const updateOne = async (req, res) => {
    const {id} = req.params
    const userData = req.body
    if(!id || !userData) throw new Error('somme thing went worng')

    try {
       await userSchema.findByIdAndUpdate(id, userData)
        res.status(201).json({message : 'user update'})
    } catch (error) {
        console.log('error', error)
    }
}


const deleteOne = async (req, res) => {
    const {id} = req.params
    try {
       await userSchema.findByIdAndDelete(id)
        res.status(203).json({message : 'user delete'})

    } catch (error) {
        console.log('error', error)
    }
}

module.exports = {
    findAll,
    create,
    findOne,
    updateOne,
    deleteOne
}




