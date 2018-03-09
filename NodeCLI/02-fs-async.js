const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(filePath, msg, cb) {
  msg = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(filePath, msg, cb);
}

console.time('DONE');
console.time('THREAD IDLE');

fs.stat(logDir, (err, stats) => {
  if (err) {
    return createDir();
  }
  if (!stats.isDirectory()) {
    return fs.unlink(logDir, (err) => {
      if (err) {
        return console.log(err.message);
      }
      createDir();
    });
  }
  log5lines();
});

function createDir() {
  fs.mkdir(logDir, (err) => {
    if (err) {
      return console.log(err.message);
    }
    log5lines();
  });
}

/*
async.series([
  (next) => log(logFile, 'Ligne 1', next),
  (next) => log(logFile, 'Ligne 2', next),
  (next) => log(logFile, 'Ligne 3', next),
  (next) => log(logFile, 'Ligne 4', next),
  (next) => log(logFile, 'Ligne 5', next),
], (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log('DONE')
});
*/

function log5lines() {
  log(logFile, 'Ligne 1', (err) => {
    if (err) {
      return console.log(err.message);
    }
    log(logFile, 'Ligne 2', (err) => {
      if (err) {
        return console.log(err.message);
      }
      log(logFile, 'Ligne 3', (err) => {
        if (err) {
          return console.log(err.message);
        }
        log(logFile, 'Ligne 4', (err) => {
          if (err) {
            return console.log(err.message);
          }
          log(logFile, 'Ligne 5', (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.timeEnd('DONE');
          });
        });
      });
    });
  });
}
console.timeEnd('THREAD IDLE');
