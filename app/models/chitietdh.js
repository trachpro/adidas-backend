module.exports = function(sequelize, Sequelize) {
    var chitietdh = sequelize.define('chitietdh', {
        madh: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        masp: Sequelize.STRING,
        soluong: Sequelize.INTEGER,
        giuhop: Sequelize.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return chitietdh;
}