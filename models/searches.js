module.exports = (sequelize, DataTypes) => {
    var Searches = sequelize.define('Searches', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },        
        search: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE
        }
    });
    return Searches;
}