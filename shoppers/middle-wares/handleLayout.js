module.exports = (req, res, next) => {
    var isAdmin = false;
    if (req.session.isLogged === null) {
		req.session.isLogged = false;
    } else {
        if (req.session.isLogged === true) {
            if (req.session.user.username === null) {
                var cur_username = 'user';
            } else {
                var cur_username = req.session.user.username;
            }
            if (req.session.user.type == 1) {
                isAdmin = true;
            }
        }
    }
    var cartItems = 0;
    if (req.session.cart === undefined) {
        req.session.cart = [];
    }
    else {
        cartItems = req.session.cart.length;
    }

    var notUser = true;
    if (req.path.indexOf("user") > -1) {
        notUser = false;
    }

    res.locals.layoutVM = {
        isLogged: req.session.isLogged,
        curUser: req.session.user,
        username: cur_username,
        isAdmin: isAdmin,
        notUser: notUser,
        cartItems: cartItems
    };
    if (isAdmin == true) {
        if (req.path.indexOf("admin") > -1) {
            next();
        }
        else {
            res.redirect('/admin');
        }
    }
    else {
        if (req.path.indexOf("admin") > -1) {
            res.redirect('/');
        }
        else {
            next();
        }
    }
    //next();
};