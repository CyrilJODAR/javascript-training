const bcrypt = require('bcrypt');
let mockCoworkings = require('./mock-coworkings')

module.exports = (RoleAccess, Villes, Comments, Coworkings, Users, BddRoles) =>{
    const uniqueCPVilles = []

    RoleAccess.map(role => BddRoles.create({libele: role.libele}))
    
    let userCreationPromises = []
    for (let index = 0; index < 20; index++) {
        let roleValue = 3
        if(index < 4) roleValue = 2
        if(index === 0) roleValue = 1
        userCreationPromises.push(bcrypt.hash(`oui`, 10)
            .then((hash)=>{                    
            return Users.create({
                username : `UserNumber${index+1}`,
                phone : 111111111 + index *15,
                adress : `${Math.floor(Math.random()*500)} rue moncuc`,
                password : hash,
                roles : roleValue,
            })
        }))
    }
    
    Promise.all(userCreationPromises).then(()=>{
        let CoworkingCreationPromises = []
        mockCoworkings.forEach(element => {
            uniqueCPVilles.find( ucp => ucp.cp === element.address.postCode) ??
                uniqueCPVilles.push({cp : element.address.postCode, ville : element.address.city})
    
                CoworkingCreationPromises.push(Coworkings.create({ 
                    Name: element.name,
                    Price: element.price,
                    numRue: element.address.number,
                    Adresse: element.address.street,
                    Picture: element.picture,
                    Superficy: element.superficy,
                    Capacity: element.capacity,
                    Created: element.created,
                    userID: Math.round(Math.random()*19)+1,
            }))
        })     
        uniqueCPVilles.forEach(city => {
            Villes.create({
                Name: city.ville,
                CodePostal: city.cp
            })
        })
        Promise.all(CoworkingCreationPromises).then(()=> {
            for (let index = 0; index < 10; index++) {                        
                Comments.create({
                    content : `${index+1} lorem ipsum dolor amet si`,
                    rating : Math.round(Math.random()*4)+1,
                    coworkingID : Math.round(Math.random()*10)+1,
                    writerUserID : Math.round(Math.random()*19)+1,
                })
            }
        })
    })
}