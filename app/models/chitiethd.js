module.exports = function(sequelize, Sequelize) {
    var chitiethd = sequelize.define('chitiethd', {
        mahd: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        masp: Sequelize.STRING,
        soluong: Sequelize.INTEGER,
        trangweb: Sequelize.STRING,
        giaweb: Sequelize.STRING,
        trietkhau: Sequelize.STRING,
        khoiluong: Sequelize.STRING,
        tigia: Sequelize.STRING,
        giuhop: Sequelize.INTEGER,
        madh: Sequelize.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return chitiethd;
}