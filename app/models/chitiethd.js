module.exports = function(sequelize, Sequelize) {
    var chitiethd = sequelize.define('chitiethd', {
        mahd: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        masp: Sequelize.INTEGER,
        soluong: Sequelize.INTEGER,
        ngay: Sequelize.DATE,
        trangthai: Sequelize.INTEGER,
        madh: Sequelize.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return chitiethd;
}