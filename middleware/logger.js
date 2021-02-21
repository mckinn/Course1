
function log (req, res, next){
    console.log('Logging...');
    next();    // call the next event.
};

module.exports.logthis = log;  // just playing by making it an element of the exported object