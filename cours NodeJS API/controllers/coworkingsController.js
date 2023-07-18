let mockCoworkings = require('../db/mock-coworkings')

exports.GetCoworkings = ((req, res)=> {
    const orderByCrit = req.query.crit || 'superficy'
    const orderBy = req.query.orderBy || 'ASC'
    const orderUserChoiceCoworkings = [...mockCoworkings];

    if((orderBy === 'ASC' || orderBy ==='DESC') && (orderByCrit === 'superficy' || orderByCrit === 'capacity')){
        orderUserChoiceCoworkings.sort((a, b) =>orderBy === 'DESC' ? b[orderByCrit] - a[orderByCrit] : a[orderByCrit] - b[orderByCrit])
        res.send(orderUserChoiceCoworkings)
    }
})

exports.CreateCoworkings = ((req, res) =>{
    const newID = mockCoworkings[mockCoworkings.length - 1].id +1;
    mockCoworkings.push({id : newID, ...req.body})

    return res.json({message :'Post sent'})
})

exports.GetCoworkingById = ((req, res)=> {
    const myCoworking = mockCoworkings.find(coworking => coworking.id === parseInt(req.params.id)) ??
    res.status(404).json({ message : `coworking introuvable ==> n° ${req.params.id}`})

    res.json({ message : `Nom du coworking : n° ${req.params.id} => ${myCoworking.name}`, ...myCoworking})
})

exports.UpdateCoworkingById = ((req, res) =>{
    const updatedID = mockCoworkings.findIndex(ele => ele.id === parseInt(req.params.id))
    mockCoworkings[updatedID] ? 
    mockCoworkings[updatedID] = { ...mockCoworkings[updatedID], ...req.body } :
    res.status(404).json({ message : 'coworking not found', id : `=> ${req.params.id}`})

    res.json({message :'update done ==>', ...mockCoworkings[updatedID]}) 
})

exports.DeleteCoworkingById = ((req, res) =>{
    mockCoworkings.find(ele => ele.id === parseInt(req.params.id)) ? 
    mockCoworkings = mockCoworkings.filter(ele=> ele.id != parseInt(req.params.id)) :
    res.status(404).json({ message : 'coworking not found', id : `=> ${req.params.id}`})

    res.json({message :'delete done', ...mockCoworkings}) 
})
