module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('Comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
          },
        comment : {
            type : DataTypes.STRING,
            allowNull: false,
        },
        rating : {
            type : DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
    })
}