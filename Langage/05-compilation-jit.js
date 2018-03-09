const sum = (a, b) => a + b;

console.time('sum(1, 2)');
sum(1, 2);
console.timeEnd('sum(1, 2)'); // sum(1, 2): 0.081ms

console.time('sum(1, 2)');
sum(1, 2);
console.timeEnd('sum(1, 2)'); // sum(1, 2): 0.004ms

console.time('sum(1, 2)');
sum(1, 2);
console.timeEnd('sum(1, 2)'); // sum(1, 2): 0.002ms

console.time('sum(1, 2)');
sum(1, 2);
console.timeEnd('sum(1, 2)'); // sum(1, 2): 0.001ms

console.time('sum(1, 2)');
sum(1, 2);
console.timeEnd('sum(1, 2)'); // sum(1, 2): 0.001ms

console.time('sum(1, \'2\')');
sum(1, '2');
console.timeEnd('sum(1, \'2\')'); // sum(1, 2): 0.002ms
