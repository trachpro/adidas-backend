var config = require('./config/index'),
    express = require('express'),
    db = require('./app/lib/db'),
    utils = require('./app/lib/utils')(config, db);

function init() {

    db.checkConnection(successHandle, errorHandle);
}

function startServer() {

    console.log("Connection has been established successfully!");
    var model_list = utils.loadModels();

    var app = express(),
        http = require('http').createServer(app);
    require('./config/express')(app, config)
    require('./config/routers')(app, utils, model_list);

    http.listen(process.env.PORT ||3000, () => {

        console.log("api running...");
    })
}

function successHandle(err) {
    startServer();
}

function errorHandle(err) {
    console.log('Unable to connect to the database:', err);
}

init();

// console.log("utils: ", utils.loadControllers(utils.loadModels()));