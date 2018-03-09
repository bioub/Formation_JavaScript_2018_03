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
(async () => {
  try {
    try {
      const stats = await fs.stat(logDir);

      if (!stats.isDirectory()) {
        await fs.unlink(logDir);
        throw new Error('logDir is not a directory');
      }
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        await fs.mkdir(logDir);
      }
      else {
        throw err;
      }
    }

    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    await log(logFile, 'Ligne 4');
    await log(logFile, 'Ligne 5');
    console.timeEnd('DONE');
  }
  catch (err) {
    console.log(err.message);
  }
})();
console.timeEnd('THREAD IDLE');
