const timeout = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};

timeout(1000)
  .then((delay) => {
    console.log(`${delay}ms`);
  });

(async () => {
  const delay = await timeout(1000);
  console.log(`${delay}ms`);
})();

const { Observable } = require('rxjs');

const interval = (delay) => {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delay);
    }, delay);
  });
};

interval(1000)
  .map((delayMs) => delayMs / 1000)
  .filter((delayS) => delayS % 2 === 0)
  .subscribe((delayS) => {
    console.log(`interval ${delayS}s`);
  });
