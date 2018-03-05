const log4js = require('log4js');

function initLogger(level = 'OFF') {
  log4js.configure({
    appenders: {out: {type: 'console', layout: {type: 'colored', pattern: '%d{yyyy-MM-dd hh:mm:ss.SSS} %p [%c] - %m'}}},
    categories: {default: {appenders: ['out'], level: level}}
  })
}

module.exports.init = initLogger;
