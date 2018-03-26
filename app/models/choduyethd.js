module.exports = function(sequelize, Sequelize) {
    var choduyethd = sequelize.define('choduyethd', {
        mahd: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ngay: Sequelize.STRING,
        makh: Sequelize.INTEGER,
        maduyetkh: Sequelize.INTEGER,
        thuonghieu: Sequelize.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return choduyethd;
}