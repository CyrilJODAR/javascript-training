const { Op, UniqueConstraintError, ValidationError } = require('sequelize');
const { Users, BddRoles } = require('../db/sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secret_key'

const rolesHierarchy = { 
     User : ['User'],
     Edit : ['User', 'Edit'],
     Admin : ['User', 'Edit', 'Admin'],
}

exports.signUp = ((req, res)=>{
    bcrypt.hash(req.body.password, 10)
    .then((hash)=>{
        const newUser = {...req.body, password : hash};
        return Users.create({
            username : newUser.username,
            phone : newUser.phone,
            adress : newUser.adress,
            password : newUser.password,
            roles : 3,
        }).then((user)=>{
            return res.status(200).json({message: 'User Added', data : user})
        })
    }).catch((error)=>{
        if(error instanceof UniqueConstraintError || error instanceof ValidationError){
            return res.status(400).json({ message: error.message})
        } else{
            return res.status(500).json({ message: `ERROR : There was a problem with the server : ${error.message}`})
        }    
    })
})

exports.logIn = ((req, res) =>{
    Users.findOne({where : { username : req.body.username}})
        .then((user)=>{
            bcrypt.compare(req.body.password, user.password)
                .then(isValid => {
                    if(isValid){
                        const token = jwt.sign({ 
                            data : req.body.username
                         }, SECRET_KEY, {expiresIn: 60* 60})
                        res.json({ message : `login successfull`, data : token})
                    }
                    else{
                        return res.status(404).json({message: 'no user found matching with this username or password'})}
                    })
        })
        .catch((error)=>{
            return res.status(500).json({ message: `ERROR : There was a problem with the server : ${error.message}`})
        })
})

exports.protect = ((req, res, next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({ message : `not authenticated. Please log in`}) // need to redirect to log in
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token) {
        try{
            const decoded = jwt.verify(token, SECRET_KEY)
            req.username = decoded.data
            next()
        } catch(error){
            return res.status(403).json({message : `Token invalid or expired. log back in to generate again`})
        }
    } else {
        return res.status(403).json({message: 'access denied, not enough rights'})
    }
})

exports.restrict = (roleParam) =>{
    return (req, res, next) =>{
        Users
        .findOne( { where : { username : req.username}})
        .then((user)=>{
            BddRoles.findByPk(user.roles)
            .then((myUserRole)=>{
                console.log(myUserRole)
               if(rolesHierarchy[myUserRole.libele].includes(roleParam)) {
                    return next()
               } else{
                return res.status(403).json({ message : `Not enough rights`})
               }
            })
        })
        .catch((error)=>{
            return res.status(500).json({ message: `ERROR : There was a problem with the server : ${error.message}`})
        })
    }
}



    // (req, res, next)=>{
    //     Users.findOne({ where : { username : req.username}})
    //     .then((user)=>{
    //         switch (user.roles) {
    //             case 1:
    //                 next()
    //             case 2:
    //                 return Users.findOne({where : { id : req.params.id}})
    //                 .then((targetUser)=>{
    //                     if(targetUser.roles != 1){
    //                         next()
    //                     }
    //                     else{
    //                         return res.status(403).json({message : `not enough rights to modify an admin`})
    //                     }
    //                 })
    //             default:
    //                 console.log(user.id, req.params.id);
    //                 if(user.id === parseInt(req.params.id)){
    //                     next()
    //                 } else {
    //                     return res.status(403).json({message : 'vous n\'avez pas les droits'})
    //                 }
    //         }
    //     })
    //     .catch(()=>{
    //         return res.status(404).json({message : 'user not found'})
    //     })