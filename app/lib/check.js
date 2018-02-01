function onlyForAdmin(req, res) {

    if (req.decoded.maloainv != 1) {

        res.json({ status: 0, message: "you are not allowed to access this method!" });
    }
}

function forGet(req, res) {

    if (req.decoded.maloainv != 1) {

        if (req.query.makh != req.decoded.makh && req.query.macheck != req.decoded.makh) {

            res.json({ status: 0, message: "you are not allowed to access this method!" });
        }
    }
}

function forTheOthers(req, res) {

    var flag = 0;

    if (req.decoded.maloainv != 1) {

        if (req.body.makh != null || req.body.macheck != null) {

            if (req.body.macheck && req.body.macheck != req.decoded.makh) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                flag = 1;
            }
            if (req.body.makh && req.body.makh != req.decoded.makh) {

                res.json({ status: 0, message: "you are not allowed to access this method!" });
                flag = 1;
            }
        } else {

            res.json({ status: 0, message: "you are not allowed to access this method!" });
            flag = 1;
        }
    }

    return flag;
}

function hoaDonOnly(req, res) {

    if (req.decoded.maloainv != 1) {

        if (req.body.makh || req.body.macheck) {

            if(req.body.makh != req.decoded.makh && req.body.macheck != req.decoded.makh) {

                 res.json({ status: 0, message: "you are not allowed to access this method!" });
            }
        } else {

            res.json({ status: 0, message: "you are not allowed to access this method!" });
        }
    }
}


module.exports = {
    onlyForAdmin: onlyForAdmin,
    forGet: forGet,
    forTheOthers: forTheOthers,
    hoaDonOnly: hoaDonOnly
}
