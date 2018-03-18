module.exports = function(sequelize, Sequelize) {
    var chitietnh = sequelize.define('chitietnh', {
        manh: {
            type: Sequelize.INTEGER
        },
        madh: Sequelize.INTEGER,
        soluong: Sequelize.INTEGER,
        giuhop: Sequelize.INTEGER,
        khoiluong: Sequelize.FLOAT
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return chitietnh;
}