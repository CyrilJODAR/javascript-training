const { Sequelize, DataTypes } = require('sequelize');
const CoworkingModel = require('../Models/coworkingsModel')
const VillesModel = require('../Models/villesModel')
let mockCoworkings = require('./mock-coworkings')

const sequelize = new Sequelize('coworkinglapiscine', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,     // Disables logging
});

const Coworkings = CoworkingModel(sequelize, DataTypes)
const Villes = VillesModel(sequelize, DataTypes)

sequelize.authenticate()
    .then(()=>console.log('auth BDD success'))
    .catch(error => console.log(`auth BDD failed : ${error}`))

    const initDatabase = () =>{
    sequelize
        .sync({force : true})
        .then(()=>{
            const uniqueCPVilles = []

            mockCoworkings.forEach(element => {
                uniqueCPVilles.find( ucp => ucp.cp === element.address.postCode) ??
                    uniqueCPVilles.push({cp : element.address.postCode, ville : element.address.city})

                Coworkings.create({ 
                    Name: element.name,
                    Price: element.price,
                    numRue: element.address.number,
                    Adresse: element.address.street,
                    Picture: element.picture,
                    Superficy: element.superficy,
                    Capacity: element.capacity,
                    Created: element.created 
                })
            })
            uniqueCPVilles.forEach(city => {
                Villes.create({
                    Name: city.ville,
                    CodePostal: city.cp
                })
            })
    })
}

module.exports = {
    initDatabase,
    Coworkings,
}