module.exports = function(sequelize, Sequelize) {
    var hoadon = sequelize.define('hoadon', {
        mahd: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        madh: Sequelize.STRING,
        ngay: Sequelize.STRING,
        ngaygiao: Sequelize.STRING,
        datcoc: Sequelize.DECIMAL,
        trangthai: Sequelize.INTEGER,
        makh: Sequelize.INTEGER,
        ship: Sequelize.DECIMAL,
        thuonghieu: Sequelize.STRING,
        tigia: Sequelize.INTEGER,
        thanhtien: Sequelize.DECIMAL,
        phuphi: Sequelize.DECIMAL
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return hoadon;
}