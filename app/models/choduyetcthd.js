module.exports = function(sequelize, Sequelize) {
    var choduyetcthd = sequelize.define('choduyetcthd', {
        mahd: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        masp: Sequelize.STRING,
        soluong: Sequelize.INTEGER,
        giaweb: Sequelize.DECIMAL,
        giuhop: Sequelize.INTEGER,
        thuonghieu: Sequelize.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return choduyetcthd;
}