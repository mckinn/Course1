
function log (req, res, next){
    console.log('Logging...');
    next();    // call the next event.
};

module.exports.logthis = log;