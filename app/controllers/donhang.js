var check = require('../lib/check');

module.exports = function (donhang_model) {
    return {
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
            donhang_model.findAll({ offset: (page - 1) * limit, limit: limit }).then(data => {
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

            donhang_model.findAll({ offset: (page - 1) * limit, limit: limit, where: convert(req.body) }).then((datas) => {
                res.json(datas || [])
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            });
        },
        get: (req, res) => {
            
            const id = req.params.id;
            donhang_model.findById(id).then((data) => {

                if(req.decoded.maloainv != 1) {

                    if(data.dataValues.makh != req.decoded.makh) {

                        res.json({ status: 0, message: "you are not allowed to access this method!" });
                        return;
                    }
                }

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

            donhang_model.create(convert(req.body)).then(
                (data) => {
                    console.log("success ", data);
                    res.json({ "status": 1, "message": "1 row(s) inserted", "data": data.dataValues });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        update: (req, res) => {
            
            var fields =  convert2(req.body);
            
            if(req.decoded.maloainv != 1) {
                
                if(req.body.makh != req.decoded.makh) {
                    
                    res.json({status: 0, message: "invalid request"});
                    return;
                }
            } else fields = {};
            
            var params = convert(req.body);
            
            donhang_model.update(params, fields ,{ where: {makh: req.body.makh} })
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
            
            donhang_model.destroy({
                where: { madh: req.params.id }
            }).then(rows => {
                    
                    res.json({ "status": 1, "message": rows + " row(s) affected" });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        }
    }
}

function convert(src) {

    var arr = ['madh', 'ngay', 'tienyen','datcoc','taikhoan','thuonghieu', 'tigia', 'trangthai', 'ghichu','manh', 'makh', 'tendh','tongsl'];
    var des = {}
    arr.forEach(e => {

        if (src[e]) {

            des[e] = src[e];
        }
    });
    // des.maloainv =  1;
    return des;
}

function convert2(src) {

    var arr = ['tienyen','datcoc', 'tigia', 'trangthai', 'ghichu'];
    var des = { fields: []};
    var flag = false;
    arr.forEach(e => {

        if (src[e]) {
            
            flag = true;
            des.fields.push(e);
        }
    });
    
    return flag? des: null;
}