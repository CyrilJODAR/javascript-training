const { Op, UniqueConstraintError, ValidationError } = require('sequelize');
const {Comments} = require('../db/sequelize')

exports.GetAllComments = ((req, res) =>{
    Comments.findAll()
    .then((comment)=>{
        return res.json({data : comment})
    }).catch((error)=>{
        return res.status(404).json({ message: `ERROR ${error}`})
    })
})

exports.CreateComments = ((req, res) =>{
    const newComment = req.body;
    Comments.create({ 
        Comment: newComment.Comment,
        Rating: newComment.Rating,
    }).then((comment)=>
        res.status(200).json({message: 'Comment Added', ...comment})
    ).catch((error)=>{
        if(error instanceof UniqueConstraintError || error instanceof ValidationError){
            res.status(400).json({ message: error.message})
        } else{
            res.status(500).json({ message: `ERROR : There was a problem with the server : ${error.message}`})
        }
    })
})

exports.GetCommentsById = ((req, res) =>{
    Comments.findByPk(req.params.id)
    .then((comment)=>{
        if(!comment){
            throw new Error(`ID not found`);
        }
        res.status(200).json({message: 'User Found', data : comment})
    }).catch((error)=>{
        return res.status(404).json({ message: `${error}`})
    })
})

exports.UpdateCommentsById = ((req, res) =>{
    Comments.findByPk(req.params.id)
    .then((comment)=>{
        if(!comment){
            throw new Error(`ID not found`);
        } else {
            return comment.update(req.body)
            .then((comment)=>{
                res.status(200).json({message: 'comment Updated', data : comment})
            })
        }
    }).catch((error)=>{
        return res.status(500).json({ message: `ERROR : There was a problem with the server : ${error.message}`}) 
    })
})

exports.DeleteCommentsById = ((req, res) =>{
    Comments.findByPk(req.params.id)
    .then((comment)=>{
        if(!comment){
            throw new Error(`ID not found`);
        } else {
            return comment.destroy(req.body)
            .then((comment)=>{
                res.status(200).json({message: 'comment deleted', data : comment})
            })
        }
    }).catch((error)=>{
        return res.status(500).json({ message: `ERROR : There was a problem with the server : ${error.message}`}) 
    })
})