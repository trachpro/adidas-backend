var check = require('../lib/check');


module.exports = function (chitietdh_model) {
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

            console.log("chitiethoadon");
            if(check.forTheOthers(req,res)) {

                return;
            }

            var page = req.params.page ? parseInt(req.params.page) : 1;
            var limit = req.params.limit ? parseInt(req.params.limit) : 100;
            page = page < 1 ? 1 : page;
            limit = limit < 1 || limit > 200 ? 10 : limit;

            chitietdh_model.findAll({ offset: (page - 1) * limit, limit: limit, where: convert(req.body) }).then((datas) => {
                res.json(datas || [])
            }, error => {

                res.json({status: 0, message: "query errors", content: error});
            });
        },
        get: (req, res) => {
            res.json({status: 0, message: "query errors"});
            // check.forGet(req,res);
            // const id = req.params.id;
            // chitietdh_model.findAll(id).then((data) => {
            //     res.json({ "status": 1, "message": "successful", "data": data.dataValues });
            // }, error => {

            //     res.json({status: 0, message: "query errors", content: error});
            // });
        },
        insert: (req, res) => {
            console.log("chitiethoadon");
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
                mahd: req.params.id,
                masp: req.params.id2
            } })
                .then((row) => {
                    if (row > 0) {
                        res.json({ "status": 1, "message": row + " row(s) updated" });
                    } else {
                        res.json({ "status": 1, "message": row + " row(s) updated" });
                    }
                });
        },
        delete: (req, res) => {
            if (req.decoded.maloainv != 1) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                return;
            }
            chitietdh_model.destroy({
                where: {
                    mahd: req.params.id,
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

    var arr = ['mahd', 'masp', 'soluong', 'trangweb', 'giaweb','trietkhau','khoiluong','tigia', 'giuhop','macheck','makh','madh'];
    var des = {}
    arr.forEach(e => {

        if (src[e]) {

            des[e] = src[e];
        }
    });

    return des;
}