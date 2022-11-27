const sqlite3 = require('sqlite3').verbose();
const _ = require('lodash');
var dbConn = null;
if (_.isNil(dbConn)) {
    dbConn = new sqlite3.cached.Database(process.env.DATA_FOLDER + 'request.db');
}
module.exports = dbConn;