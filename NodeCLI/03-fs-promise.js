const fs = require('fs-extra');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

/**
 *
 * @param filePath
 * @param msg
 * @returns {Promise<void>}
 */
function log(filePath, msg) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(filePath, msg);
}

console.time('DONE');
console.time('THREAD IDLE');

fs.stat(logDir)
  .then((stats) => {
    if (!stats.isDirectory()) {
      return fs.unlink(logDir)
        .then(() => fs.mkdir(logDir));
    }
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(logDir);
    }
    throw err;
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => log(logFile, 'Ligne 4'))
  .then(() => log(logFile, 'Ligne 5'))
  .then(() => console.timeEnd('DONE'))
  .catch((err) => console.log(err.message));

console.timeEnd('THREAD IDLE');
