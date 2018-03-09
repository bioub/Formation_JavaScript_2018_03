const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(filePath, msg) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(filePath, msg);
}

console.time('DONE');
console.time('THREAD IDLE');
try {
  try {
    const stats = fs.statSync(logDir);

    if (!stats.isDirectory()) {
      fs.unlinkSync(logDir);
      throw new Error('logDir is not a directory');
    }
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(logDir);
    }
    else {
      throw err;
    }
  }

  log(logFile, 'Ligne 1');
  log(logFile, 'Ligne 2');
  log(logFile, 'Ligne 3');
  log(logFile, 'Ligne 4');
  log(logFile, 'Ligne 5');
  console.timeEnd('DONE');
}
catch (err) {
  console.log(err.message);
}
console.timeEnd('THREAD IDLE');
