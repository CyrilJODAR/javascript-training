const { Sequelize, DataTypes } = require('sequelize');
let mockCoworkings = require('./mock-coworkings')
const bcrypt = require('bcrypt');

const sequelize = new Sequelize('coworkinglapiscine', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,     // Disables logging
});

const CoworkingModel = require('../Models/coworkingsModel')
const Coworkings = CoworkingModel(sequelize, DataTypes)
const VillesModel = require('../Models/villesModel')
const Villes = VillesModel(sequelize, DataTypes)
const UserModel = require('../Models/userModel')
const Users = UserModel(sequelize, DataTypes)
const RolesModel = require('../Models/rolesModel')
const BddRoles = RolesModel(sequelize, DataTypes)
const RoleAccess = require('./roles.json');
const coworkings = require('./mock-coworkings');

BddRoles.hasMany(Users, {
    foreignKey: "roles",
    })
Users.belongsTo(BddRoles, {
    foreignKey: "roles",
    })

Users.hasMany(Coworkings, {
    foreignKey: "userID",
    })
Coworkings.belongsTo(Users, {
    foreignKey: "userID",
    })

sequelize.authenticate()
    .then(()=>console.log('auth BDD success'))
    .catch(error => console.log(`auth BDD failed : ${error}`))
    const initDatabase = () =>{
    sequelize
        .sync({force : true})
        .then(()=>{
            const uniqueCPVilles = []

            RoleAccess.map(role => BddRoles.create({libele: role.libele}))

            let userCreationPromises = []
            for (let index = 0; index < 20; index++) {
                userCreationPromises.push(bcrypt.hash(`oui`, 10)
                    .then((hash)=>{                    
                    return Users.create({
                        username : `UserNumber${index+1}`,
                        phone : 111111111 + index *15,
                        adress : `${Math.floor(Math.random()*500)} rue moncuc`,
                        password : hash,
                        roles : 3
                    })
                }))
            }

            Promise.all(userCreationPromises).then(()=>{
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
                        Created: element.created,
                        userID: Math.round(Math.random()*20),
                    })
                })     
                uniqueCPVilles.forEach(city => {
                    Villes.create({
                        Name: city.ville,
                        CodePostal: city.cp
                    })
                })
            })
    })
}
module.exports = {
    initDatabase,
    Coworkings,
    Users,
    BddRoles,
}