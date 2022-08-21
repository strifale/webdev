//@ desc        Logs requests to console
const logger = (req, res, next) => {
    console.log(
      //protocol = http(s), host = which local host, originalUrl = url
      `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
    next(); //move on to the next piece of middleware in the cycle
  };

  module.exports = logger;