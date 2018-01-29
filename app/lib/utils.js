module.exports = function(config, db) {

    var fs = require('fs');
    const MODEL_PATH = config.root + '/app/models';
    const CTRL_PATH = config.root + '/app/controllers';
    var obj = {};

    obj.getModelNames = function() {

        var names = [];

        var modelsPath = config.root + '/app/models';
        fs.readdirSync(modelsPath).forEach(function(file) {

            names.push(file.replace('.js',''));
        });

        return names;
    }

    obj.loadModel = function(name) {

        return require(MODEL_PATH + '/' + name)(db.sequelize, db.Sequelize);
    }

    obj.loadModels = function() {
		// config mongoose models
		var model_list = {};
		fs.readdirSync(MODEL_PATH).forEach(function (file) {
			if (file.indexOf('.js') >= 0) 
				model_list[file.replace('.js', '')] = obj.loadModel(file.replace('.js', ''));
		})
	  	return model_list;
	}

    obj.loadController = function(name) {

        return require(CTRL_PATH + '/' + name);
    }

    obj.loadControllerFromModel = function(name, model) {

        return require(CTRL_PATH + '/' + name)(model);
    }

    obj.loadControllers = function(models) {

        var ctrls = {};

        fs.readdirSync(CTRL_PATH).forEach( file => {
            
            if(file.indexOf('.js') > 0) {

                var name = file.replace('.js','');
                ctrls[name] = obj.loadControllerFromModel(name, models[name]);
            }
        })

        return ctrls;
    }

    return obj;
}