var check = require('../lib/check');

module.exports = function (khachhang_model, choduyetkh_model) {
    return {
        check: (req, res) => {
            var sdt = req.params.sdt;
            
            khachhang_model.findAll({where: {sdt: sdt}}).then(data => {
                
                if(data.length) {
                    
                    res.json({status: 0, message: "this phone is already existed!"});
                } else {
                    choduyetkh_model.findAll({where: {sdt: sdt}}).then( subData => {
                        
                        if(subData.length) {
                            res.json({status: 0, message: "this phone is already existed!"});
                        } else {
                            
                            res.json({status: 1, message: "valid"});
                        }
                    })
                }
            }, error => {
                
                console.log("error check: ");
            })
        },
        list: (req, res) => {
            if (req.decoded.maloainv != 1) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                return;
            }
            console.log("req body: ", req.body);
            var page = req.params.page ? parseInt(req.params.page) : 1;
            var limit = req.params.limit ? parseInt(req.params.limit) : 100;
            page = page < 1 ? 1 : page;
            limit = limit < 1 || limit > 200 ? 10 : limit;
            khachhang_model.findAll({ offset: (page - 1) * limit, limit: limit }).then(data => {
                res.json(data || []);
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            })
        },
        search: (req, res) => {
            if (req.decoded.maloainv != 1) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                return;
            }
            var page = req.params.page ? parseInt(req.params.page) : 1;
            var limit = req.params.limit ? parseInt(req.params.limit) : 100;
            page = page < 1 ? 1 : page;
            limit = limit < 1 || limit > 200 ? 10 : limit;

            khachhang_model.findAll({ offset: (page - 1) * limit, limit: limit, where: convert(req.body) }).then((datas) => {
                res.json(datas || [])
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            });
        },
        get: (req, res) => {
            if (req.decoded.maloainv != 1) {

                if (req.params.id != req.decoded.makh) {
        
                    res.json({ status: 0, message: "you are not allowed to access this method!" });
                    return;
                }
            }
            const id = req.params.id;
            khachhang_model.findById(id).then((data) => {
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
            console.log(req.body);

            khachhang_model.create(convert(req.body)).then(
                (data) => {
                    console.log("success ", data);
                    res.json({ "status": 1, "message": "1 row(s) inserted", "data": data.dataValues });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        update: (req, res) => {
            var params = convert(req.body);
            
            if (req.decoded.maloainv != 1) {

                if(req.decoded.makh != req.params.id) {
                    
                    res.json({ status: 0, message: "you are not allowed to access this method!" });
                    return;
                }
                
                params = {mk: req.body.mk};
            }
            
            
            khachhang_model.update(params, { where: { makh: req.params.id } })
                .then((row) => {
                    if (row > 0) {
                        res.json({ "status": 1, "message": row + " row(s) updated" });
                    } else {
                        res.json({ "status": 1, "message": row + " row(s) updated" });
                    }
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        delete: (req, res) => {
            if (req.decoded.maloainv != 1) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                return;
            }
            khachhang_model.destroy({
                where: { makh: req.params.id }
            })
                .then(rows => {
                    
                    res.json({ "status": 1, "message": rows + " row(s) affected" });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        }
    }
}

function convert(src) {

    var arr = ['makh', 'tenkh', 'sdt', 'diachi', 'mk', 'maloainv', 'email','tigia'];
    var des = {}
    arr.forEach(e => {

        if (src[e]) {

            des[e] = src[e];
        }
    });
    // des.maloainv =  1;
    return des;
}