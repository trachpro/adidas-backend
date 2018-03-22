module.exports = function(sequelize, Sequelize) {
    var choduyetdh = sequelize.define('choduyetdh', {
        madh: {
            type: Sequelize.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        tienyen: Sequelize.DECIMAL,
        datcoc: Sequelize.DECIMAL,
        tigia: Sequelize.DECIMAL,
        makh: Sequelize.INTEGER,
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return choduyetdh;
}