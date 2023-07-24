const { Op, UniqueConstraintError, ValidationError } = require('sequelize');
const { Users } = require('../db/sequelize');
const bcrypt = require('bcrypt');

exports.GetUsers = ((req, res)=>{
    Users.findAll({
    }).then((users)=>{
        return res.status(200).json({ message : users})
    }).catch((error)=>{
        return res.status(400).json({ message : error.message})
    })
})

exports.GetUserById = ((req, res)=>{
    Users.findByPk(req.params.id)
    .then((user)=>{
        if(!user){
            throw new Error(`ID not found`);
        }
        res.status(200).json({message: 'User Found', data : user})
    }).catch((error)=>{
        return res.status(404).json({ message: `${error}`})
    })
})

exports.UpdateUserById = ((req, res)=>{
    Users.findByPk(req.params.id)
    .then((user)=>{
        console.log(req.username)
        if(!user){
            throw new Error(`ID not found`);
        } else {
            return user.update(req.body)
            .then((user)=>{
                res.status(200).json({message: 'User Updated', data : user})
            })
        }
    }).catch((error)=>{
        if(error instanceof ValidationError){
            return res.status(400).json({ message: error.message})
        } else{
            return res.status(500).json({ message: `ERROR : There was a problem with the server : ${error.message}`})
        }    
    })
})

exports.DeleteUserById = ((req, res)=>{
    Users.findByPk(req.params.id)
    .then((user)=>{
        if(!user){
            throw new Error(`ID not found`);
        } else {
            return user.destroy()
            .then((user)=>{
                return res.status(200).json({message: 'User deleted', data : user})
            })
        }
    }).catch((error)=>{
        return res.status(404).json({ message: `${error}`})
    })
})
