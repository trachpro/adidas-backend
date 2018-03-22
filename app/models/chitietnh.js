module.exports = function(sequelize, Sequelize) {
    var chitietnh = sequelize.define('chitietnh', {
        manh: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        madh: Sequelize.STRING,
        soluong: Sequelize.INTEGER,
        giuhop: Sequelize.INTEGER,
        khoiluong: Sequelize.FLOAT
    }, {
        freezeTableName: true,
        timestamps: false
    });
    
    delete chitietnh.id;

    return chitietnh;
}