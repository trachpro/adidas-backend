module.exports = function(sequelize, Sequelize) {
    var choduyetnh = sequelize.define('choduyetnh', {
        manh: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        makh: Sequelize.INTEGER,
        phuphi: Sequelize.DECIMAL,
        khoiluong: Sequelize.FLOAT,
        dongia: Sequelize.INTEGER,
        tigia: Sequelize.DECIMAL,
        ngay: Sequelize.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return choduyetnh;
}