const hello = (name, cb) => setTimeout(cb, 1000, `Hello ${name} !`);

module.exports = hello;