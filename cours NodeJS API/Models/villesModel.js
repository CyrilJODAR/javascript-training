module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Villes', {
        // Model attributes are defined here
        id: {
          type: DataTypes.INTEGER,
          primaryKey : true,
          autoIncrement: true
        },
        Name: {
          type: DataTypes.STRING,
          allowNull: false
          // allowNull defaults to true
        },
        CodePostal: {
          type: DataTypes.INTEGER,
        },
      }, {
        freezeTableName: true,
        timestamps: false
      });
      // `sequelize.define` also returns the model
    
}