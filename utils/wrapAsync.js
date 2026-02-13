module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
}

// fn → your async route handler.

// The function returned takes (req, res, next) just like any Express middleware or route.

// fn(req, res, next) runs your async code.

// .catch(next) → if an error happens, call next(error) so Express knows to handle it.