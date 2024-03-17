const { exception, dataFound } = require("../constant/api-result")
// const DbManager = require("../database/db-manager");

module.exports = class Test {
    static instance;
    // #sql = DbManager.getInstance();

    static getInstance() {
        if (!Test.instance) Test.instance = new Test();
        return Test.instance;
    }

    testFn(params) {
        try {
            console.log(params)
            return dataFound([]);
        } catch (ex) {
            return exception(ex);
        }
    }

}