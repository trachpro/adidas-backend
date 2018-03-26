var check = require('../lib/check');


module.exports = function (chitietnh_model, nhanhang_model,chitietdh_model) {
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
            chitietnh_model.findAll({ offset: (page - 1) * limit, limit: limit }).then(data => {
                res.json(data || []);
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            })
        },
        search: (req, res) => {
            
            let params = convert(req.body);

            var page = req.params.page ? parseInt(req.params.page) : 1;
            var limit = req.params.limit ? parseInt(req.params.limit) : 100;
            page = page < 1 ? 1 : page;
            limit = limit < 1 || limit > 200 ? 10 : limit;
            
            if(req.decoded.maloainv != 1) {
                
                if(!req.body.makh || req.body.makh != req.decoded.makh) {
                    
                    res.json({status: 0, message: "invalid params"});
                    return;
                }
                
                params.makh = req.body.makh;
            } 
            
            if(req.body.makh) params.makh = req.body.makh;
            
            nhanhang_model.findAll({raw: true, offset: (page - 1) * limit, limit: limit,where: params, include:[{model:chitietnh_model, required: false,include:[{model:chitietdh_model, required: false}]}]}).then((datas) => {
                            
                res.json(datas || []);
            }, error => {
            
                res.json({status: 0, message: "query errors", content: error});
            });
        },
        get: (req, res) => {
            res.json({status: 0, message: "query errors"});
        },
        insert: (req, res) => {
            
            if (req.decoded.maloainv != 1) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                return;
            }

            chitietnh_model.create(convert(req.body)).then(
                (data) => {
                    console.log("success ", data);
                    res.json({ "status": 1, "message": "1 row(s) inserted", "data": data.dataValues });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        update: async (req, res) => {
            
            let flag = true;
            
            var params = convert(req.body);
            
            if(req.decoded.maloainv != 1) {

                await nhanhang_model.findById(req.params.id).then( data => {
                    
                    if(data && data.dataValues.makh != req.decoded.makh) {
                        
                        res.json({ status: 0, message: "you are not allowed to access this method!" });
                        flag = false;
                        return;
                    }
                }, error => {
                    
                    res.json({ status: 0, message: "you are not allowed to access this method!" });
                    flag = false;
                    return;
                })
                
                params = {khoiluong: params.khoiluong};
            } 
            
            if(!flag) return;
            
            chitietnh_model.update(params, { where: {
                manh: req.params.id,
                madh: req.params.id2
            } }).then((row) => {
                    
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
            chitietnh_model.destroy({
                where: {
                    manh: req.params.id,
                    madh: req.params.id2
                }
            }).then(rows => {
                    
                    res.json({ "status": 1, "message": rows + " row(s) affected" });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        }
    }
}

function convert(src) {

    var arr = ['manh', 'madh', 'soluong','khoiluong','giuhop'];
    var des = {}
    arr.forEach(e => {

        if (src.hasOwnProperty(e)) {
            if(!src[e]) src[e] = null;
            des[e] = src[e];
        }
    });

    return des;
}