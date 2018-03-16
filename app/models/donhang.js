module.exports = function(sequelize, Sequelize) {
    var donhang = sequelize.define('donhang', {
        madh: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ngay: Sequelize.STRING,
        tienyen: Sequelize.STRING,
        datcoc: Sequelize.STRING,
        taikhoan: Sequelize.STRING,
        thuonghieu: Sequelize.STRING,
        tigia: Sequelize.STRING,
        trangthai: Sequelize.INTEGER,
        ghichu: Sequelize.TEXT,
        macheck: Sequelize.INTEGER,
        makh: Sequelize.INTEGER,
        tendh: Sequelize.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return donhang;
}