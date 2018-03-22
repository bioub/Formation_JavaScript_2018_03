function sum(a, b) {
  return Promise.resolve(a + b);
}

sum(1, 2)
  .then((result) => console.log(result));

console.log('Fin');

function timeoutAlea() {
  const alea = Math.floor(Math.random() * 1001);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(alea);
    }, alea)
  });
}

Promise.all([
  timeoutAlea(),
  timeoutAlea(),
])
  .then(([delayA, delayB]) => {
    console.log('A', delayA);
    console.log('B', delayB);
  });


// Promise.race([
//   timeoutAlea(),
//   timeoutAlea(),
// ])
//   .then((first) => {
//     console.log('First', first);
//   })
//   .catch((err) => {
//     console.log('Err', err);
//   });
