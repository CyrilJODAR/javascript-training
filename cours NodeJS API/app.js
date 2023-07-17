let mockCoworkings = require('./mock-coworkings')
const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.get('/api/coworkings/:id', (req, res)=> {
    const myCoworking = mockCoworkings.find(coworking => coworking.id === parseInt(req.params.id))
    res.json({ result : `Nom du coworking : n° ${req.params.id} => ${myCoworking ? myCoworking.name : `coworking introuvable` }`})
})

app.get('/api/coworkingsGetLength', (req, res)=> {
    res.send(`taille du tableau : ${mockCoworkings.length}`)
})

app.get('/api/coworkings', (req, res)=> {
    const orderByCrit = req.query.crit || 'superficy'
    const orderBy = req.query.orderBy || 'ASC'

    const orderUserChoiceCoworkings = [...mockCoworkings];

    if((orderBy === 'ASC' || orderBy ==='DESC') && (orderByCrit === 'superficy' || orderByCrit === 'capacity')){
        orderUserChoiceCoworkings.sort((a, b) =>orderBy === 'DESC' ? b[orderByCrit] - a[orderByCrit] : a[orderByCrit] - b[orderByCrit])
    }
    res.send(orderUserChoiceCoworkings)
})

app.get('/api/coworkingsSortSuperficie', (req, res) => {
    const myCoworkingsSortedSuperficie = mockCoworkings.sort((a, b) => a.superficy - b.superficy);
      res.json({superficieOrder : myCoworkingsSortedSuperficie})
})

app.listen(port, () =>{
    console.log(`my port is ${port}`);
})

app.post('/api/coworkingAdd', (req, res) =>{
    mockCoworkings.push(req.body)
    return res.json({message :'Post sent'})
})

app.put('/api/coworkingUpdate/:id', (req, res) =>{
    mockCoworkings = mockCoworkings.map(ele => {
        return ele.id === req.body.id ? req.body : ele
    })
    return res.json({message :'update done'}) 
})

app.delete('/api/coworkingDelete/:id', (req, res) =>{
    mockCoworkings = mockCoworkings.filter(ele=> ele.id != req.body.id)
    return res.json({message :'delete done'}) 
})