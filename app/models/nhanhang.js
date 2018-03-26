module.exports = function(sequelize, Sequelize) {
    var nhanhang = sequelize.define('nhanhang', {
        manh: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        makh: Sequelize.INTEGER,
        ngay: Sequelize.DECIMAL,
        phuphi: Sequelize.DECIMAL,
        trangthai: Sequelize.INTEGER,
        khoiluong: Sequelize.FLOAT,
        dongia: Sequelize.INTEGER,
        ghichu: Sequelize.TEXT,
        datcoc: Sequelize.DECIMAL,
        ngaynhan: Sequelize.DECIMAL
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return nhanhang;
}