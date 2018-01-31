var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = 8000

var config = {
    development: {
        root: rootPath,
        secret: 'test',
        app: {
            name: 'my-server'
        },
        port: port,
        dialect: 'mysql',
        db: 'DBADIDAS',
        db_port: 3306,
        user: 'root',
        pass: 'anhyeuem123'
    },

    production: {
        root: rootPath,
        secret: 'test',
        app: {
            name: 'my-server'
        },
        port: port,
        dialect: 'mysql',
        db: 'DBADIDAS',
        db_port: 3306,
        user: 'root',
        pass: 'anhyeuem123'
    }
};

module.exports = config[env];