module.exports = function(sequelize, Sequelize) {
    var Sanpham = sequelize.define('sanpham', {
        masp: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tensp: Sequelize.STRING,
        trangweb: Sequelize.STRING,
        macode: Sequelize.INTEGER,
        giaweb: Sequelize.DECIMAL,
        khoiluong: Sequelize.FLOAT,
        ghichu: Sequelize.TEXT
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return Sanpham;
}