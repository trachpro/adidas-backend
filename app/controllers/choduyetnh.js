var check = require('../lib/check');

module.exports = function (choduyetnh_model, nhanhang_model) {
    return {
        list: (req, res) => {
            if (req.decoded.maloainv != 1) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                return;
            }
            
            var page = req.params.page ? parseInt(req.params.page) : 1;
            var limit = req.params.limit ? parseInt(req.params.limit) : 100;
            page = page < 1 ? 1 : page;
            limit = limit < 1 || limit > 200 ? 10 : limit;
            choduyetnh_model.findAll({ offset: (page - 1) * limit, limit: limit }).then(data => {
                res.json(data || []);
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            })
        },
        getlist: (req, res) => {
            
            let params = convert(req.body);
            if (req.decoded.maloainv != 1) {

                if(req.decoded.makh != req.body.makh) {

                    res.json({ status: 0, message: "you are not allowed to access this method!" });
                    return;
                }
            }
            
            nhanhang_model.findAll({where: params, include:[{model:choduyetnh_model, required: false}]}).then( data => {
                
                res.json({status: 1, data: data});
            }, error => {
                
                res.json({status: 0, message: "query error", error: error});
            })
        },
        search: (req, res) => {
            if (req.decoded.maloainv != 1) {

                if(req.decoded.makh != req.body.makh) {

                    res.json({ status: 0, message: "you are not allowed to access this method!" });
                    return;
                }
            }
            var page = req.params.page ? parseInt(req.params.page) : 1;
            var limit = req.params.limit ? parseInt(req.params.limit) : 100;
            page = page < 1 ? 1 : page;
            limit = limit < 1 || limit > 200 ? 10 : limit;

            choduyetnh_model.findAll({ offset: (page - 1) * limit, limit: limit, where: convert(req.body) }).then((datas) => {
                res.json(datas || [])
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            });
        },
        get: (req, res) => {
            
            const id = req.params.id;
            choduyetnh_model.findById(id).then((data) => {

                if(req.decoded.maloainv != 1) {

                    if(data && data.dataValues.makh != req.decoded.makh) {

                        res.json({ status: 0, message: "you are not allowed to access this method!" });
                        return;
                    }
                }

                res.json({ "status": 1, "message": "successful", "data": data? data.dataValues: data });
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            });
        },
        insert: (req, res) => {
            if (req.decoded.maloainv != 1) {

                if(req.decoded.makh != req.body.makh) {

                    res.json({ status: 0, message: "you are not allowed to access this method!" });
                    return;
                }
            }

            choduyetnh_model.create(convert(req.body)).then(
                (data) => {
                    
                    res.json({ "status": 1, "message": "1 row(s) inserted", "data": data.dataValues });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        update: (req, res) => {
            
            if(req.decoded.maloainv != 1) {
                
                if(req.body.makh != req.decoded.makh) {
                    
                    res.json({status: 0, message: "invalid request"});
                    return;
                }
            }
            
            var params = convert(req.body);
            
            choduyetnh_model.update(params ,{ where: {manh: req.body.manh} })
                .then((row) => {
                    
                    res.json({ "status": 1, "message": row + " row(s) updated" });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        delete: (req, res) => {
            
            let params = {};
            
            if(req.decoded.maloainv != 1) {
                
                params.makh = req.decoded.makh;
            } 
            
            params.manh = req.params.id;
            
            choduyetnh_model.destroy({ where: { manh: req.params.id }})
                .then(rows => {
                    
                    res.json({ "status": 1, "message": rows + " row(s) affected" });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        }
    }
}

function convert(src) {

    var arr = ['manh', 'makh','tigia','khoiluong', 'dongia','phuphi','ngay'];
    var des = {}
    arr.forEach(e => {

        if (src[e]) {

            des[e] = src[e];
        }
    });
  
    return des;
}