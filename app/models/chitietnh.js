module.exports = function(sequelize, Sequelize) {
    var chitietnh = sequelize.define('chitietnh', {
        manh: {
            type: Sequelize.INTEGER
        },
        makh: Sequelize.INTEGER,
        madh: Sequelize.INTEGER,
        soluong: Sequelize.INTEGER,
        phuphi: Sequelize.DECIMAL,
        khoiluong: Sequelize.FLOAT,
        ghichu: Sequelize.TEXT
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return chitietnh;
}