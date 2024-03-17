module.exports.dataFound = (data) => {
    return {
        error: null,
        code: 1000,
        data: data
    }
}

module.exports.dataNotFound = (data) => {
    return {
        error: null,
        code: 2000,
        data: data || []
    }
}

module.exports.exception = (err) => {
    return {
        error: err && err.msg ? err.msg : err,
        code: 3000,
        data: null
    }
}