module.exports = function(sequelize, Sequelize) {
    var Khachhang = sequelize.define('khachhang', {
        makh: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tenkh: Sequelize.STRING,
        mk: Sequelize.STRING,
        diachi: Sequelize.TEXT,
        sdt: {
            type: Sequelize.STRING,
            allowNull: false
        },
        maloainv: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: Sequelize.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return Khachhang;
}