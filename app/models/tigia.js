module.exports = function(sequelize, Sequelize) {
    var tigia = sequelize.define('tigia', {
        matg: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ngay: Sequelize.STRING,
        giatri: Sequelize.FLOAT
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return tigia;
}