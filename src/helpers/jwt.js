const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports.generateToken = (params, tokenType) => {
    const jwtConfig = config && config["jwt"] && config["jwt"][tokenType] ? config["jwt"][tokenType] : null;
    if (!jwtConfig) return null;
    const expiresIn = Math.floor(new Date().getTime() / 1000) + (jwtConfig.expireDays * 24 * 60 * 60);
    const payload = {
        ...params,
        exp: expiresIn
    }
    return jwt.sign(payload, jwtConfig.secretKey);
}

module.exports.verifyToken = (token, tokenType) => {
    const jwtConfig = config && config["jwt"] && config["jwt"][tokenType] ? config["jwt"][tokenType] : null;
    if (!jwtConfig) return null;
    const decoded = jwt.verify(token, jwtConfig.secretKey);
    if (!decoded) return null;
    return Promise.resolve({ ...decoded });
}