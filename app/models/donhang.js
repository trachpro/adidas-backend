module.exports = function(sequelize, Sequelize) {
    var donhang = sequelize.define('donhang', {
        madh: {
            type: Sequelize.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        ngay: Sequelize.STRING,
        tienyen: Sequelize.DECIMAL,
        datcoc: Sequelize.DECIMAL,
        taikhoan: Sequelize.STRING,
        thuonghieu: Sequelize.STRING,
        tigia: Sequelize.DECIMAL,
        trangthai: Sequelize.INTEGER,
        ghichu: Sequelize.TEXT,
        makh: Sequelize.INTEGER,
        manh: Sequelize.INTEGER,
        tongsl: Sequelize.INTEGER,
        giuhop: Sequelize.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return donhang;
}