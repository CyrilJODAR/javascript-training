module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Roles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
          },
        libele: {
            type: DataTypes.STRING,
            unique: {
                msg: 'already exist under that name'
              }
        }
    }, {
        freezeTableName: true,
        timestamps: false
      });
}