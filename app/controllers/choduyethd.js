var check = require('../lib/check');

module.exports = function (hoadon_model) {
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
            hoadon_model.findAll({ offset: (page - 1) * limit, limit: limit }).then(data => {
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

            hoadon_model.findAll({ offset: (page - 1) * limit, limit: limit, where: convert(req.body) }).then((datas) => {
                res.json(datas || [])
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            });
        },
        get: (req, res) => {
            
            if (req.decoded.maloainv != 1) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                return;
            }
            
            const id = req.params.id;
            hoadon_model.findById(id).then((data) => {
                res.json({ "status": 1, "message": "successful", "data": data.dataValues });
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            });
        },
        insert: (req, res) => {
            
            console.log("req.decoded: ", req.decoded);
            
            if(req.decoded.maloainv != 1) {
                
                var name = 'makh';
                
                req.decoded.maduyetkh? name = 'maduyetkh': ''; 
                
                if(req.decoded[name] != req.body[name] ) {
                    
                    res.json({status: 0, message: "invalid request"});
                    return;
                } else {
                    
                    req.body.makh = req.decoded.makh;
                    req.body.maduyetkh = req.decoded.maduyetkh;
                }
            }

            hoadon_model.create(convert(req.body)).then(
                (data) => {
                    
                    res.json({ "status": 1, "message": "1 row(s) inserted", "data": data.dataValues });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        update: (req, res) => {
            
            if(req.decoded.maloainv != 1) {
                
                if(req.decoded.makh && req.decoded.makh != req.body.makh || req.decoded.maduyetkh && req.body.maduyetkh != req.decoded.maduyetkh) {
                    
                    res.json({status: 0, message: "invalid request"});
                    return;
                } else {
                    
                    req.body.makh = req.decoded.makh;
                    req.body.maduyetkh = req.decoded.maduyetkh;
                }
            }
            
            var params = convert(req.body);
            
            hoadon_model.update(params, { where: { mahd: req.params.id } })
                .then((row) => {
                    
                    res.json({ "status": 1, "message": row + " row(s) updated" });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        },
        delete: (req, res) => {
            
            let params = {};
            
            params.mahd = req.params.id;
            
            if(req.decoded.maloainv != 1) {
                
                if(req.decoded.makh) {
                    
                    params.makh = req.decoded.makh;
                } else {
                        
                    params.maduyetkh = req.decoded.maduyetkh;
                }
            }
            
            hoadon_model.destroy({ where: params})
                .then(rows => {
                    
                    res.json({ "status": 1, "message": rows + " row(s) affected" });
                }, error => {

                    res.json({status: 0, message: "query errors", content: error});
                });
        }
    }
}

function convert(src) {

    var arr = ['mahd','ngay', 'datcoc', 'makh','maduyetkh'];
    var des = {}
    arr.forEach(e => {

        if (src.hasOwnProperty(e)) {
            if(!src[e]) src[e] = null;
            des[e] = src[e];
        }
    });
    // des.maloainv =  1;
    return des;
}