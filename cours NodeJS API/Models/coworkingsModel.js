module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Coworkings', {
        // Model attributes are defined here
        id: {
          type: DataTypes.INTEGER,
          primaryKey : true,
          autoIncrement: true
        },
        Name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
          msg: 'Coworking Name already taken'
        }
          // allowNull defaults to true
        },
        Price: {
          type: DataTypes.JSON,
          allowNull: false,
          validate: {
            isPriceValid(value) {
              if(value.hasOwnProperty('hour') && value.hasOwnProperty('day') && value.hasOwnProperty('month')){
                if (value.hour === null && value.day === null && value.month === null ) {
                  throw new Error("Price cannot have all values set to null")}
              } else{
                throw new Error("Incorect syntax in Price JSON")
              }
            }
          }
        },
        numRue: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please enter a numRue'
            },
            // isInt: {
            //   msg: 'numRue must be an Integer'
            // },
            notEmpty: {
              msg: 'The numRue cannot be empty'
            },
          },
        },
        Adresse: {
          type: DataTypes.STRING,
          allowNull: false
        },
        Picture: {
          type: DataTypes.STRING,
        },
        Superficy: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            isInt:  {
              msg: 'Superficy Must be an INTEGER'
            },
            isNumeric: {
              msg : 'La Superficie doit être un nombre'
            },
          },
        },
        Capacity: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            isInt:  {
              msg: 'Capacity Must be an INTEGER'
            },
          },
        },
        Created: {
          type: DataTypes.DATE,
          allowNull: false
        }
      }, {
        freezeTableName: true,
        timestamps: false
      });
      // `sequelize.define` also returns the model
}