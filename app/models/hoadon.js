module.exports = function(sequelize, Sequelize) {
    var donhang = sequelize.define('donhang', {
        mahd: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ngaygiao: Sequelize.DATE,
        datcoc: Sequelize.DECIMAL,
        trangthai: Sequelize.INTEGER,
        makh: Sequelize.INTEGER,
        macheck: Sequelize.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return donhang;
}