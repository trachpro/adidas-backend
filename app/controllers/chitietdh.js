var check = require('../lib/check');

module.exports = function (chitietdh_model, donhang_model) {
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
            
            chitietdh_model.findAll({ offset: (page - 1) * limit, limit: limit }).then(data => {
                
                res.json(data || []);
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            })
        },
        search: (req, res) => {
            
            var page = req.params.page ? parseInt(req.params.page) : 1;
            var limit = req.params.limit ? parseInt(req.params.limit) : 100;
            page = page < 1 ? 1 : page;
            limit = limit < 1 || limit > 200 ? 10 : limit;
            
            if(req.decoded.maloainv != 1) {
                
                if(!req.body.makh || req.body.makh != req.decoded.makh) {
                    
                    res.json({status: 0, message: "invalid params"});
                    return;
                }
            } 
            
            donhang_model.findAll({raw: true, offset: (page - 1) * limit, limit: limit,where: convert(req.body), include:[{model:chitietdh_model, required: false}]}).then((datas) => {
                            
                res.json(datas || []);
            }, error => {
            
                res.json({status: 0, message: "query errors", content: error});
            });
        },
        get: (req, res) => {
            check.forGet(req,res);
            const id = req.params.id;
            chitietdh_model.findById(id).then((data) => {
                res.json({ "status": 1, "message": "successful", "data": data.dataValues });
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            });
        },
        insert: (req, res) => {
            if (req.decoded.maloainv != 1) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                return;
            }
            chitietdh_model.create(convert(req.body)).then(
                (data) => {
                    console.log("success ", data);
                    res.json({ "status": 1, "message": "1 row(s) inserted", "data": data.dataValues });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        update: (req, res) => {
            if(check.forTheOthers(req,res)) {

                return;
            } 
            var params = convert(req.body);
            chitietdh_model.update(params, { where: {
                madh: req.params.id,
                masp: req.params.id2
            } })
                .then((row) => {
                    
                    res.json({ "status": 1, "message": row + " row(s) updated" });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        delete: (req, res) => {
            if (req.decoded.maloainv != 1) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                return;
            }
            chitietdh_model.destroy({
                where: {
                        madh: req.params.id,
                        masp: req.params.id2
                    }
            })
                .then(rows => {
                    if (rows > 0)
                        res.json({ "status": 1, "message": rows + " row(s) affected" });
                    else
                        res.json({ "status": "300", "message": rows + " row(s) affected" });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        }
    }
}

function convert(src) {

    var arr = ['madh', 'masp', 'soluong'];
    var des = {}
    arr.forEach(e => {

        if (src[e]) {

            des[e] = src[e];
        }
    });

    return des;
}