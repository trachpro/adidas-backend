module.exports = function(sequelize, Sequelize) {
    var chitiethd = sequelize.define('chitiethd', {
        mahd: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        masp: Sequelize.STRING,
        soluong: Sequelize.INTEGER,
        thuonghieu: Sequelize.STRING,
        giaweb: Sequelize.DECIMAL,
        trietkhau: Sequelize.FLOAT,
        khoiluong: Sequelize.FLOAT,
        tigia: Sequelize.INTEGER,
        giuhop: Sequelize.INTEGER,
        madh: Sequelize.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return chitiethd;
}