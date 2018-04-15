var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production',
    port = 8080

var config = {
    development: {
        root: rootPath,
        secret: 'test',
        app: {
            name: 'my-server'
        },
        port: port,
        dialect: 'mysql',
        db: 'dbadidas',
        db_port: 3306,
        user: 'root',
        pass: ''
    },

    production: {
        root: rootPath,
        secret: 'test',
        app: {
            name: 'my-server'
        },
        port: port,
        dialect: 'mysql',
        db: 'bievs8oos',
        db_port: 3306,
        user: 'utjpy6hyoxp5ezee',
        pass: 'kVPlnVu115hkqtJ8BIN',
        host: 'bievs8oos-mysql.services.clever-cloud.com'
    }
};

console.log("environ: ", process.env.NODE_ENV);
module.exports = config[env];