var check = require('../lib/check');


module.exports = function (chitietdh_model, hoadon_model) {
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
                
                if(req.decoded.makh && req.body.makh != req.decoded.makh || req.decoded.maduyetkh && req.body.maduyetkh != req.decoded.maduyetkh) {
                    
                    res.json({status: 0, message: "invalid params"});
                    return;
                }
            } 
            
            let params = convert(req.body);
            
            if(req.body.hasOwnProperty('makh')) {
                
                params.makh = req.body.makh;
            }
            if(req.body.hasOwnProperty('maduyetkh')) {
                
                params.maduyetkh = req.body.maduyetkh;
            }
            
            hoadon_model.findAll({raw: true, offset: (page - 1) * limit, limit: limit,where: params, include:[{model:chitietdh_model, required: false}]}).then((datas) => {
                            
                res.json(datas || []);
            }, error => {
            
                res.json({status: 0, message: "query errors", content: error});
            });
        },
        get: (req, res) => {
            res.json({status: 0, message: "query errors"});
        },
        insert:async (req, res) => {
            
            let flag = false;
            
            if (req.decoded.maloainv == 1) {

                flag = true;
            }
            
            if(!flag) {
                
                if(!req.body.mahd) {
                    
                    res.json({status: 0, message: "invalid params"});
                    return;
                }
                
                await hoadon_model.findAll({where: {mahd: req.body.mahd}}).then( bill => {
                    
                    if(bill[0]) {
                        
                        if(bill[0].makh && bill[0].makh == req.decoded.makh || bill[0].maduyetkh == req.decoded.maduyetkh) {
                            
                            flag = true;
                        } else {
                            
                            flag = false;
                        }
                    } else {
                        
                        flag = false;
                    }
                })
            }

            if(flag) {
                
                chitietdh_model.create(convert(req.body)).then(
                    (data) => {
                        console.log("success ", data);
                        res.json({ "status": 1, "message": "1 row(s) inserted", "data": data.dataValues });
                    }, error => {
    
                        res.json({status: 0, message: "query errors", content: error});
                    });
            } else {
                
                res.json({status: 0, message: "you are not allowed to insert this!"});
            }
            
        },
        update: async (req, res) => {
            
            let ob = {
                mahd: req.params.id,
                masp: req.params.id2
            }
            
            let flag = false;
            
            if (req.decoded.maloainv == 1) {

                flag = true;
            }
            
            if(!flag) {
                
                if(!req.body.mahd) {
                    
                    res.json({status: 0, message: "invalid params"});
                    return;
                }
                
                await hoadon_model.findAll({where: {madh: req.body.mahd}}).then( bill => {
                    
                    if(bill[0]) {
                        
                        if(bill[0].makh && bill[0].makh == req.decoded.makh || bill[0].maduyetkh == req.decoded.maduyetkh) {
                            
                            flag = true;
                        } else {
                            
                            flag = false;
                        }
                    } else {
                        
                        flag = false;
                    }
                })
            }

            if(flag) {
                
                var params = convert(req.body);
                chitietdh_model.update(params, { where: ob })
                    .then((row) => {
                        
                        res.json({ "status": 1, "message": row + " row(s) updated" });
                    });
            } else {
                
                res.json({status: 0, message: "you are not allowed to update this!"});
            }
        },
        delete:async (req, res) => {
            
            let ob = {
                mahd: req.params.id,
                masp: req.params.id2
            }
            
            let flag = false;
            
            if (req.decoded.maloainv == 1) {

                flag = true;
            }
            
            if(!flag) {
                
                if(!req.body.mahd) {
                    
                    res.json({status: 0, message: "invalid params"});
                    return;
                }
                
                await hoadon_model.findAll({where: {madh: req.body.mahd}}).then( bill => {
                    
                    if(bill[0]) {
                        
                        if(bill[0].makh && bill[0].makh == req.decoded.makh || bill[0].maduyetkh == req.decoded.maduyetkh) {
                            
                            flag = true;
                        } else {
                            
                            flag = false;
                        }
                    } else {
                        
                        flag = false;
                    }
                })
            }

            if(flag) {
                
                var params = convert(req.body);
                chitietdh_model.destroy(params, { where: ob })
                    .then((row) => {
                        
                        res.json({ "status": 1, "message": row + " row(s) affected" });
                    }, error => {
    
                        res.json({status: 0, message: "query errors", content: error});
                    });
            } else {
                
                res.json({status: 0, message: "you are not allowed to update this!"});
            }
        }
    }
}

function convert(src) {

    var arr = ['mahd', 'masp', 'soluong', 'giaweb','thuonghieu', 'giuhop'];
    var des = {}
    arr.forEach(e => {

        if (src[e]) {

            des[e] = src[e];
        }
    });

    return des;
}