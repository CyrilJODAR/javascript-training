const mockCoworkings = require('./mock-coworkings')
const express = require('express')
const app = express()
const port = 3001

app.get('/api/coworkings/:id', (req, res)=> {
    const myCoworking = mockCoworkings.find(coworking => coworking.id === parseInt(req.params.id))
    // console.log(`mon coworking ${myCoworking.name}`)
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

