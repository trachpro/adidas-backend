var check = require('../lib/check');

module.exports = function (sanpham_model) {
    return {
        list: (req, res) => {
            check.onlyForAdmin(req,res);
            console.log("req body: ", req.body);
            var page = req.params.page ? parseInt(req.params.page) : 1;
            var limit = req.params.limit ? parseInt(req.params.limit) : 100;
            page = page < 1 ? 1 : page;
            limit = limit < 1 || limit > 200 ? 10 : limit;
            sanpham_model.findAll({ offset: (page - 1) * limit, limit: limit }).then(data => {
                res.json(data || []);
            })
        },
        search: (req, res) => {
            check.onlyForAdmin(req,res);
            var page = req.params.page ? parseInt(req.params.page) : 1;
            var limit = req.params.limit ? parseInt(req.params.limit) : 100;
            page = page < 1 ? 1 : page;
            limit = limit < 1 || limit > 200 ? 10 : limit;

            sanpham_model.findAll({ offset: (page - 1) * limit, limit: limit, where: convert(req.body) }).then((datas) => {
                res.json(datas || [])
            });
        },
        get: (req, res) => {
            check.onlyForAdmin(req,res);
            const id = req.params.id;
            sanpham_model.findById(id).then((data) => {
                res.json({ "status": 1, "message": "successful", "data": data.dataValues });
            });
        },
        insert: (req, res) => {

            check.onlyForAdmin(req,res);
            sanpham_model.create(convert(req.body)).then(
                (data) => {
                    console.log("success ", data);
                    res.json({ "status": 1, "message": "1 row(s) inserted", "data": data.dataValues });
                }, error => {
                    res.json({ status: 0, "message": "cannot create this" });
                });
        },
        update: (req, res) => {
            check.onlyForAdmin(req,res);
            var params = convert(req.body);
            sanpham_model.update(params, { where: { masp: req.params.id } })
                .then((row) => {
                    if (row > 0) {
                        res.json({ "status": 1, "message": row + " row(s) updated" });
                    } else {
                        res.json({ "status": 1, "message": row + " row(s) updated" });
                    }
                });
        },
        delete: (req, res) => {
            check.onlyForAdmin(req,res);
            sanpham_model.destroy({
                where: { masp: req.params.id }
            })
                .then(rows => {
                    if (rows > 0)
                        res.json({ "status": 1, "message": rows + " row(s) affected" });
                    else
                        res.json({ "status": "300", "message": rows + " row(s) affected" });
                });
        }
    }
}

function convert(src) {

    var arr = ['masp', 'macode', 'tensp', 'trangweb', 'giaweb'];
    var des = {}
    arr.forEach(e => {

        if (src[e]) {

            des[e] = src[e];
        }
    });

    return des;
}