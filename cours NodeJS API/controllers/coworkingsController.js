const { Op, UniqueConstraintError, ValidationError } = require('sequelize');
const { Coworkings } = require('../db/sequelize');

exports.GetCoworkings = ((req, res)=> {
    let orderBy = {
        crit : req.query.crit,
        how : req.query.orderBy
    }
    let searchTag = req.query.name
    
    Coworkings.findAll({
            where : {
                Name : {
                   [Op.like] : searchTag ?`%${searchTag}%` : '%'}
            },
            order: [
                [orderBy.crit ? orderBy.crit : 'id', orderBy.how ? orderBy.how : 'ASC']
            ],
    })
    .then((coworks)=>{
        console.log(orderBy)
        res.json({data : coworks})
    }).catch((error)=>{
        res.status(404).json({ message: `ERROR ${error}`})
    })
})

exports.CreateCoworkings = ((req, res) =>{
    const newCowork = req.body;
    Coworkings.create({ 
        Name: newCowork.name,
        Price: newCowork.price,
        numRue: newCowork.numRue,
        Adresse: newCowork.Adresse,
        Picture: newCowork.picture,
        Superficy: newCowork.superficy,
        Capacity: newCowork.capacity,
        Created: newCowork.created 
    }).then((cowork)=>
        res.status(200).json({message: 'Coworking Added', ...cowork})
    ).catch((error)=>{
        if(error instanceof UniqueConstraintError || error instanceof ValidationError){
            res.status(400).json({ message: error.message})
        } else{
            res.status(500).json({ message: `ERROR : There was a problem with the server : ${error.message}`})
        }
    })
})

exports.GetCoworkingById = ((req, res)=> {
    Coworkings.findByPk(req.params.id)
    .then(cowork=>{
        if(!cowork){
            throw new Error(`ID not found`);
        }
        res.status(200).json({message: 'Coworking Found', cowork})
    }
    ).catch((error)=>
        res.status(404).json({ message: `${error}`})
    )
})

exports.UpdateCoworkingById = ((req, res) =>{
    Coworkings.findByPk(req.params.id)
    .then(cowork=>{
        if(!cowork){
            throw new Error(`ID not found`);
        } else{
            cowork.update(req.body)
            .then((cowork)=>{
                    res.status(200).json({message: 'Coworking Updated', cowork})
            })
        }
    })
    .catch((error)=>
    res.status(404).json({ message: `${error}`}))
})

exports.DeleteCoworkingById = ((req, res) =>{
    Coworkings.findByPk(req.params.id)
    .then(cowork=>{
        if(!cowork){
            throw new Error(`ID not found`);
        } else{
            cowork.destroy()
                .then((cowork)=>{
                    res.status(200).json({message: 'Coworking deleted', cowork})
                })
        }
    })
    .catch((error)=>
    res.status(404).json({ message: `${error}`}))
})
