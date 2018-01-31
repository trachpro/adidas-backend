module.exports = function(sequelize, Sequelize) {
    var donhang = sequelize.define('donhang', {
        madh: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ngay: Sequelize.DATE,
        tienyen: Sequelize.DECIMAL,
        tigia: Sequelize.DECIMAL,
        trangthai: Sequelize.INTEGER,
        ghichu: Sequelize.TEXT,
        makh: Sequelize.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return donhang;
}