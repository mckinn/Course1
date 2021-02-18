
console.log(__filename);
console.log(__dirname);

var url='http//mylogger.io/log';

function log(message) {
    // send a log
    console.log(message);
}

module.exports.log = log;
module.exports.mylog = log;