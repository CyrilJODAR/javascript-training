module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Users', {
        // Model attributes are defined here
        id: {
          type: DataTypes.INTEGER,
          primaryKey : true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING,
          unique: {
          msg: 'Username already taken'
        }
          // allowNull defaults to true
        },
        phone: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please enter a phone number'
            },
            isInt: {
              msg: 'phone number must be an Integer'
            },
            notEmpty: {
              msg: 'The phone number cannot be empty'
            },
            isNumeric: {
              msg: 'phone number must be a numeric value'
            },
          },
        },
        adress: {
          type: DataTypes.STRING,
        },
        password: {
          type : DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
                msg: 'Please enter a password'
              },
            isPassLength(value){
                if(value.length < 5) throw new Error('The password must have more than 5 characters')
            }
          }
        },
      }, {
        freezeTableName: true,
        timestamps: false
      });
      // `sequelize.define` also returns the model
}