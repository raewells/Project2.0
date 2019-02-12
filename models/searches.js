module.exports = (sequelize, DataTypes) => {
    var Searches = sequelize.define('Searches', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },        
        search: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.INTEGER
        },
        created_at: {
            field: 'created_at',
            type: DataTypes.DATE
        },
        updated_at: {
            field: 'updated_at',
            type: DataTypes.DATE
        }
    });
    return Searches;
}