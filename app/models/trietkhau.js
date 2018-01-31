module.exports = function(sequelize, Sequelize) {
    var trietkhau = sequelize.define('trietkhau', {
        matk: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ngay: Sequelize.DATE,
        giatri: Sequelize.FLOAT
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return trietkhau;
}