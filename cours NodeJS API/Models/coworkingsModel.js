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
          allowNull: false
          // allowNull defaults to true
        },
        Price: {
          type: DataTypes.JSON,
        },
        numRue: {
          type: DataTypes.STRING,
          allowNull: false
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
          allowNull: false
        },
        Capacity: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        Created: {
          type: DataTypes.DATE,
          allowNull: false
        }
      }, {
        freezeTableName: true
      });
      // `sequelize.define` also returns the model
}