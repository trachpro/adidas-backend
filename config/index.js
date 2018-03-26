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
        db: 'bxjesqfs0',
        db_port: 3306,
        user: 'ukhhg3aenmu1wiyy',
        pass: 'YnWdi6WsrqHFHgl9dcW'
    }
};

console.log("environ: ", process.env.NODE_ENV);
module.exports = config[env];