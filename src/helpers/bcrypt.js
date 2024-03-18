const bcrypt = require("bcrypt");

module.exports.generatePassword = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
}

module.exports.comparePassword = (password, hash) => {
    const compare = bcrypt.compareSync(password, hash);
    return compare;
}