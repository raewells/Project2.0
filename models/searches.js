module.exports = (sequelize, DataTypes) => {
    var Searches = sequelize.define('Searches', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },        
        search_1: {
            type: DataTypes.STRING
        },
        search_1_ammount: {
            type: DataTypes.INTEGER
        },
        search_2: {
            type: DataTypes.STRING
        },
        search_2_ammount: {
            type: DataTypes.INTEGER
        },
        search_3: {
            type: DataTypes.STRING
        },
        search_3_ammount: {
            type: DataTypes.INTEGER
        },
        search_4: {
            type: DataTypes.STRING
        },
        search_4_ammount: {
            type: DataTypes.INTEGER
        },
        search_5: {
            type: DataTypes.STRING
        },
        search_5_ammount: {
            type: DataTypes.INTEGER
        }
    });
    return Searches;
}