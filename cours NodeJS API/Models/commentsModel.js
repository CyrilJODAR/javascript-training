module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('Comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
          },
        content : {
            type : DataTypes.STRING,
            allowNull: false,
        },
        rating : {
            type : DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min:1,
                max:5,
            }
        }
    }, {
        freezeTableName: true,
    })
}