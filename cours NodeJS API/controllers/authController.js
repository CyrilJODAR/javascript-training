const { Op, UniqueConstraintError, ValidationError } = require('sequelize');
const { Users } = require('../db/sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secret_key'

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
            res.status(200).json({message: 'User Added', data : user})
        })
    }).catch((error)=>{
        if(error instanceof UniqueConstraintError || error instanceof ValidationError){
            res.status(400).json({ message: error.message})
        } else{
            res.status(500).json({ message: `ERROR : There was a problem with the server : ${error.message}`})
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
                        return res.json({message: 'wrong password'})}
                    })
        })
        .catch(()=>{
            res.status(404).json({message : 'no user found with this username or password'})
        })

})

exports.protect = ((req, res, next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({ message : `not authenticated. Please log in`}) // redirect to log in
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token) {
        try{
            const decoded = jwt.verify(token, SECRET_KEY)
            req.username = decoded.data
            .then(decoded =>{
                next()
            })
        } catch(error){
            res.status(403).json({message : `Token invalid or expired. log back in to generate again`})
        }
    } else {
        res.json({message: 'access denied, not enough rights'})
    }
})