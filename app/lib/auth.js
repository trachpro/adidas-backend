var jwt = require('jsonwebtoken');

module.exports = function(app, utils) {

    function login(uid, pass, callback) {

        var model = utils.loadModel('khachhang');
        var model2 = utils.loadModel('choduyetkh');

        model.findAll({where: {sdt: uid, mk: pass}}).then((user) => {

            console.log(JSON.stringify(user));
            if(user[0] == null) {

                model2.findAll({where: {sdt: uid, mk: pass}}).then( cdUser => {

                    if(cdUser[0]) {

                        callback(cdUser[0]);
                    } else{
                        callback(null);
                    }
                }, error => {
                    callback(null);
                })
            } else if(uid == user[0].sdt && pass == user[0].mk) {

                console.log("user :", user[0].dataValues);
                callback(user[0]);
            }
        })
    }

    function setMidle() {

        app.use(function(req, res, next) {

            var token = req.body.token || req.query.token || req.headers['x-access-token'];
            if(token) {
                console.log("token:: ", token);
                jwt.verify(token, 'secret', function(err, decoded) {

                    if(err) {

                        res.json({status: 0, message: 'fail to authenticate token!' + err, relog: true});
                    } else {

                        req.decoded = decoded;
                        console.log("decoded: ", decoded);
                        
                        next();
                    }
                })
            } else {

                res.status(403).send({
                    status: 0
                })
            }
        })
    }

    function addAuth() {

        app.post('/api/auth', (req, res) => {
            console.log("req body: ", req.body);
            login(req.body.sdt, req.body.mk, (data) => {

                if(data) {
                    // console.log("data: ", data);
                    var user = {
                        sdt: req.body.sdt,
                        mk: req.body.mk,
                        maloainv: data.maloainv,
                        makh: data.makh,
                        maduyetkh: data.maduyetkh
                    }

                    var token = jwt.sign(user, 'secret', {expiresIn: 60 * 60});

                    res.json({
                        status: 1,
                        token: token,
                        makh: user.makh,
                        maduyetkh: data.maduyetkh,
                        maloainv: data.maloainv
                    })
                } else {

                    res.json({status: 0})
                }
            })
        })
    }

    return {
        load: function() {
            addAuth();
            setMidle();
        }
    }
}