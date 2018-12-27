module.exports = (req, res, next) => {
    if (req.session.isLogged === null) {
		req.session.isLogged = false;
    } else {
        if (req.session.isLogged === true) {
            if (req.session.user.username === null) {
                var cur_username = 'user';
            } else {
                var cur_username = req.session.user.username;
            }
        }
    }

    res.locals.layoutVM = {
        isLogged: req.session.isLogged,
        curUser: req.session.user,
        username: cur_username
    };
    next();
};