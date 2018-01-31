var config = require('../../config/index'),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.db, config.user, config.pass, {
        host: "localhost",
        dialect: config.dialect,
        port: config.db_port,
        // pool: {
        //     max: 10,
        //     min: 1,
        //     idle: 75000
        // },
        define: {
            timestamps: false
        }
    });

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.checkConnection = function(successHandle, errorHandle) {
    sequelize
        .authenticate().then(successHandle, errorHandle);
}

module.exports = db;