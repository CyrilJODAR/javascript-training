const { Sequelize, DataTypes } = require('sequelize');
const setDataTemp = require('../db/setDataTemp')

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

const RoleAccess = require('./roles.json');
const RolesModel = require('../Models/rolesModel')
const BddRoles = RolesModel(sequelize, DataTypes)

const CommentsModel = require('../Models/commentsModel')
const Comments = CommentsModel(sequelize, DataTypes)

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

Coworkings.hasMany(Comments,{
    foreignKey: "coworkingID",
})
Comments.belongsTo(Coworkings, {
    foreignKey: "coworkingID",
})

Users.hasMany(Comments, {
    foreignKey: 'writerUserID',
})
Comments.belongsTo(Users, {
    foreignKey: 'writerUserID'
})

sequelize.authenticate()
    .then(()=>console.log('auth BDD success'))
    .catch(error => console.log(`auth BDD failed : ${error}`))
    const initDatabase = () =>{
    sequelize
        .sync({force : true})
        .then(()=>{
            setDataTemp(RoleAccess, Villes, Comments, Coworkings, Users, BddRoles)
        })
}
module.exports = {
    initDatabase,
    Coworkings,
    Users,
    BddRoles,
    Comments,
}