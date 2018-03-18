module.exports = function(sequelize, Sequelize) {
    var chitiethd = sequelize.define('chitiethd', {
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

    return chitiethd;
}