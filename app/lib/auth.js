var jwt = require('jsonwebtoken');

module.exports = function(app, utils) {

    function login(uid, pass, callback) {

        var model = utils.loadModel('khachhang');

        model.findAll({where: {sdt: uid, mk: pass}}).then((user) => {

            console.log(JSON.stringify(user));
            if(user[0] == null) {

                callback(null);
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
                jwt.verify(token, 'secret', function(err, decoded) {

                    if(err) {

                        res.json({status: 0, message: 'fail to authenticate token!'});
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

                    var user = {
                        sdt: req.body.sdt,
                        mk: req.body.mk,
                        maloainv: data.maloainv,
                        makh: data.makh
                    }

                    var token = jwt.sign(user, 'secret', {expiresIn: 60 * 60});

                    res.json({
                        status: 1,
                        token: token
                    })
                } else {

                    res.json({status: false})
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