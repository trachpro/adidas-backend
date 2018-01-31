module.exports = function(sequelize, Sequelize) {
    var chitietdh = sequelize.define('chitietdh', {
        madh: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        masp: Sequelize.INTEGER,
        soluong: Sequelize.INTEGER,
        matk: Sequelize.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return chitietdh;
}