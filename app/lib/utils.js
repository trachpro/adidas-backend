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

    obj.loadControllerFromModel = function(name, model,subModel, subSubModel) {

        return subModel? require(CTRL_PATH + '/' + name)(model, subModel, subSubModel): require(CTRL_PATH + '/' + name)(model);
    }

    obj.loadControllers = function(models) {
        
        models.chitietdh.belongsTo(models.donhang, {foreignKey: 'madh'});
        models.donhang.hasMany(models.chitietdh, {foreignKey: 'madh'});
        models.chitiethd.belongsTo(models.hoadon, {foreignKey: 'mahd'});
        models.hoadon.hasMany(models.chitiethd, {foreignKey: 'mahd'});
        models.chitietnh.belongsTo(models.chitietnh, {foreignKey: 'manh'});
        models.nhanhang.hasMany(models.chitietnh, {foreignKey: 'manh'});
        models.hoadon.belongsTo(models.donhang, {foreignKey: 'madh'});
        models.donhang.hasMany(models.hoadon, {foreignKey: 'madh'});
        models.donhang.belongsTo(models.nhanhang, {foreignKey: 'manh'});
        models.nhanhang.hasMany(models.donhang, {foreignKey: 'manh'});
        models.choduyetcthd.belongsTo(models.choduyethd, {foreignKey: 'mahd'});
        models.choduyethd.hasMany(models.choduyetcthd, {foreignKey: 'mahd'});
        models.choduyetdh.belongsTo(models.donhang, {foreignKey: 'madh'});
        models.donhang.hasMany(models.choduyetdh, {foreignKey: 'madh'});
        models.choduyetnh.belongsTo(models.nhanhang, {foreignKey: 'manh'});
        models.nhanhang.hasMany(models.choduyetnh, {foreignKey: 'manh'});
        models.chitietnh.belongsTo(models.chitietdh, {foreignKey: 'madh'});
        models.chitietdh.hasMany(models.chitietnh, {foreignKey: 'madh'});

        var ctrls = {};

        fs.readdirSync(CTRL_PATH).forEach( file => {
            
            if(file.indexOf('.js') > 0) {

                var name = file.replace('.js','');
                var subName = null;
                var subName2 = null;
                
                switch(name) {
                    
                    case "chitietdh": subName = "donhang"; break;
                    case "chitiethd": subName = "hoadon"; break;
                    case "chitietnh": subName = "nhanhang"; subName2 = "chitietdh"; break;
                    case "donhang": subName = "nhanhang"; break;
                    case "hoadon": subName = "donhang"; break;
                    case "khachhang": subName = "choduyetkh"; break;
                    case "choduyetcthd": subName = "choduyethd"; break;
                    case "choduyetdh": subName = "donhang"; break;
                    case "choduyetnh": subName = "nhanhang"; break;
                    default: subName = null; subName2 = null;
                }
                
                ctrls[name] = obj.loadControllerFromModel(name, models[name],models[subName],models[subName2]);
            }
        })

        return ctrls;
    }

    return obj;
}