module.exports = function(sequelize, Sequelize) {
    var hoadon = sequelize.define('hoadon', {
        mahd: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        madh: Sequelize.INTEGER,
        ngay: Sequelize.STRING,
        ngaygiao: Sequelize.STRING,
        datcoc: Sequelize.DECIMAL,
        trangthai: Sequelize.INTEGER,
        makh: Sequelize.INTEGER,
        macheck: Sequelize.INTEGER,
        ship: Sequelize.DECIMAL,
        thuonghieu: Sequelize.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return hoadon;
}