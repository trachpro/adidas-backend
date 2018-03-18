module.exports = function(sequelize, Sequelize) {
    var choduyethd = sequelize.define('choduyethd', {
        mahd: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ngay: Sequelize.STRING,
        datcoc: Sequelize.DECIMAL,
        makh: Sequelize.INTEGER,
        maduyetkh: Sequelize.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return choduyethd;
}