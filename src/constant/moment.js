const moment = require("moment-timezone");
moment.tz.setDefault("UTC");

moment.between = function (date, start, end) {
    return (start <= date && end >= date);
}

module.exports = moment;