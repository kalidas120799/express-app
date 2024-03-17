const { exception } = require("../constant/api-result");

const authenticate = (req, res, next) => {
    const {
        headers
    } = req;
    const { authorization } = headers;
    if (authorization) next()
    else res.send(exception('authorization faild'))
}

module.exports = authenticate;